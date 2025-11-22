const {
  app,
  BrowserWindow,
  ipcMain,
  shell,
  session,
  dialog,
  Menu,
  clipboard,
} = require("electron");
const path = require("path");

const ignoreCertErrors =
  process.env.ELECTRON_IGNORE_CERT_ERRORS === "1" ||
  process.env.NODE_ENV === "development";
if (ignoreCertErrors) {
  try {
    app.commandLine.appendSwitch("ignore-certificate-errors", "true");
    app.on(
      "certificate-error",
      (event, webContents, url, error, certificate, callback) => {
        event.preventDefault();
        callback(true);
      }
    );
    console.warn(
      "[Electron] Ignoring certificate errors (DEV). Set ELECTRON_IGNORE_CERT_ERRORS=0 to disable."
    );
  } catch {}
}

const downloads = new Map();
function broadcast(win, channel, payload) {
  if (win && !win.isDestroyed()) {
    try {
      win.webContents.send(channel, payload);
    } catch {}
  }
}

function toRecord(id, item, extra = {}) {
  const totalBytes = Number(item.getTotalBytes?.() || 0);
  const receivedBytes = Number(item.getReceivedBytes?.() || 0);
  const progress =
    totalBytes > 0 ? Math.floor((receivedBytes / totalBytes) * 100) : 0;
  return {
    id,
    url: item.getURL?.() || item.getURLChain?.()[0] || "",
    filename: item.getFilename?.() || "download",
    mimeType: item.getMimeType?.() || "",
    totalBytes,
    receivedBytes,
    progress,
    savePath: item.getSavePath?.() || extra.savePath || "",
    state: item.getState?.() || extra.state || "progressing",
    startTime: item.getStartTime?.() || Date.now() / 1000,
    endTime: extra.endTime || null,
    paused: item.isPaused?.() || false,
    canResume: item.canResume?.() || false,
  };
}

app.on("web-contents-created", (_event, contents) => {
  contents.setWindowOpenHandler(({ url, disposition }) => {
    console.log("Window open request:", { url, disposition });
    if (
      disposition === "new-window" ||
      disposition === "foreground-tab" ||
      disposition === "background-tab"
    ) {
      console.log("Creating new tab for URL:", url);
      const mainWindow = BrowserWindow.getAllWindows().find(
        (win) => !win.isDestroyed()
      );
      if (mainWindow) {
        console.log("Sending IPC message to create new tab");
        mainWindow.webContents.send("browser::new-tab", { url });
      } else {
        console.log("No main window found");
      }
      return { action: "deny" };
    }
    console.log("Allowing default window behavior");
    return { action: "allow" };
  });

  contents.on("context-menu", (event, params) => {
    const template = [];

    const hasTextSelection = (params.selectionText || "").trim().length > 0;
    const hasLink = !!(params.linkURL && params.linkURL.length);
    const hasImage = params.mediaType === "image" && !!params.srcURL;
    const isEditable = !!params.isEditable;
    const editFlags = params.editFlags || {};

    template.push({
      label: "Back",
      enabled: contents.canGoBack?.() || false,
      click: () => contents.goBack?.(),
    });
    template.push({
      label: "Forward",
      enabled: contents.canGoForward?.() || false,
      click: () => contents.goForward?.(),
    });
    template.push({
      label: "Reload",
      click: () => contents.reload?.(),
    });

    template.push({ type: "separator" });

    if (hasLink) {
      template.push({
        label: "Open Link in Browser",
        click: () => shell.openExternal(params.linkURL),
      });
      template.push({
        label: "Copy Link Address",
        click: () => clipboard.writeText(params.linkURL),
      });
      template.push({
        label: "Save Link As…",
        click: () => {
          try {
            const ses = contents.session || session.defaultSession;
            ses.downloadURL(params.linkURL);
          } catch {
            try {
              session.defaultSession.downloadURL(params.linkURL);
            } catch {}
          }
        },
      });
    }

    if (hasImage) {
      template.push({
        label: "Open Image in Browser",
        click: () => shell.openExternal(params.srcURL),
      });
      template.push({
        label: "Copy Image Address",
        click: () => clipboard.writeText(params.srcURL),
      });
      template.push({
        label: "Save Image As…",
        click: () => {
          try {
            const ses = contents.session || session.defaultSession;
            ses.downloadURL(params.srcURL);
          } catch {
            try {
              session.defaultSession.downloadURL(params.srcURL);
            } catch {}
          }
        },
      });
    }

    if (hasLink || hasImage) template.push({ type: "separator" });

    if (isEditable) {
      template.push(
        { label: "Undo", role: "undo", enabled: !!editFlags.canUndo },
        { label: "Redo", role: "redo", enabled: !!editFlags.canRedo },
        { type: "separator" },
        { label: "Cut", role: "cut", enabled: !!editFlags.canCut },
        { label: "Copy", role: "copy", enabled: !!editFlags.canCopy },
        { label: "Paste", role: "paste", enabled: !!editFlags.canPaste },
        { label: "Select All", role: "selectAll" }
      );
    } else if (hasTextSelection) {
      template.push({ label: "Copy", role: "copy" });
    }

    if (
      template.length &&
      template[template.length - 1]?.type !== "separator"
    ) {
      template.push({ type: "separator" });
    }

    template.push({
      label: "Inspect Element",
      click: () => contents.inspectElement?.(params.x, params.y),
    });

    const menu = Menu.buildFromTemplate(template);
    const win = BrowserWindow.fromWebContents(contents);
    menu.popup({ window: win || undefined });
  });
});

app.on("ready", () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
    },
  });

  win.loadFile("out/index.html");

  win.once("ready-to-show", () => {
    try {
      win.maximize();
    } catch {}
    win.show();
  });

  const ses = session.defaultSession;
  ses.on("will-download", async (event, item) => {
    try {
      item.pause?.();
      const filename = item.getFilename?.() || "download";
      const defaultPath = path.join(app.getPath("downloads"), filename);

      const id = `${Math.floor(
        (item.getStartTime?.() || Date.now() / 1000) * 1000
      )}-${filename}`;
      let rec = toRecord(id, item, { savePath: "", state: "paused" });
      rec.paused = true;
      downloads.set(id, { rec, item });
      broadcast(win, "downloads::update", { type: "added", record: rec });

      const { canceled, filePath } = await dialog.showSaveDialog(win, {
        title: "Save As",
        defaultPath,
        buttonLabel: "Save",
      });
      if (canceled || !filePath) {
        try {
          item.cancel?.();
        } catch {}
        rec = toRecord(id, item, { endTime: Date.now(), state: "cancelled" });
        downloads.set(id, { rec, item: null });
        broadcast(win, "downloads::update", { type: "done", record: rec });
        return;
      }

      try {
        item.setSavePath?.(filePath);
      } catch {}
      try {
        item.resume?.();
      } catch {}
      rec = toRecord(id, item, { savePath: filePath, state: "progressing" });
      downloads.set(id, { rec, item });
      broadcast(win, "downloads::update", { type: "progress", record: rec });

      item.on("updated", (_e, state) => {
        const recUpd = toRecord(id, item);
        if (state === "interrupted") recUpd.state = "interrupted";
        if (item.isPaused?.()) recUpd.state = "paused";
        downloads.set(id, { rec: recUpd, item });
        broadcast(win, "downloads::update", {
          type: "progress",
          record: recUpd,
        });
      });

      item.on("done", (_e, state) => {
        const recDone = toRecord(id, item, { endTime: Date.now() });
        recDone.state = state === "completed" ? "completed" : state;
        downloads.set(id, { rec: recDone, item: null });
        broadcast(win, "downloads::update", { type: "done", record: recDone });
      });
    } catch (err) {
      console.error("Error in will-download handler:", err);
    }
  });

  ipcMain.handle("downloads::list", () => {
    return Array.from(downloads.values()).map((v) => v.rec);
  });
  ipcMain.on("downloads::pause", (e, id) => {
    const entry = downloads.get(id);
    try {
      entry?.item?.pause?.();
    } catch {}
  });
  ipcMain.on("downloads::resume", (e, id) => {
    const entry = downloads.get(id);
    try {
      entry?.item?.resume?.();
    } catch {}
  });
  ipcMain.on("downloads::cancel", (e, id) => {
    const entry = downloads.get(id);
    try {
      entry?.item?.cancel?.();
    } catch {}
  });
  ipcMain.on("downloads::remove", (e, id) => {
    downloads.delete(id);
    broadcast(win, "downloads::update", { type: "removed", id });
  });
  ipcMain.on("downloads::open-file", (e, id) => {
    const entry = downloads.get(id);
    if (entry?.rec?.savePath) shell.openPath(entry.rec.savePath);
  });
  ipcMain.on("downloads::show-in-folder", (e, id) => {
    const entry = downloads.get(id);
    if (entry?.rec?.savePath) shell.showItemInFolder(entry.rec.savePath);
  });
  ipcMain.on("downloads::open-folder", () => {
    try {
      const folderPath = app.getPath("downloads");
      const uri = pathToFileURL(folderPath).toString();
      shell.openExternal(uri);
    } catch {
      shell.openPath(app.getPath("downloads"));
    }
  });
  ipcMain.on("downloads::clear-finished", () => {
    for (const [id, val] of downloads.entries()) {
      if (
        val.rec.state === "completed" ||
        val.rec.state === "interrupted" ||
        val.rec.state === "cancelled"
      ) {
        downloads.delete(id);
      }
    }
    broadcast(win, "downloads::update", {
      type: "bulk-refresh",
      records: Array.from(downloads.values()).map((v) => v.rec),
    });
  });
  ipcMain.on("downloads::download-url", (e, url) => {
    try {
      const sesToUse = session.defaultSession;
      sesToUse.downloadURL(url);
    } catch (err) {
      console.error("Failed to trigger downloadURL:", err);
    }
  });
  const fs = require("fs");
  const http = require("http");
  const https = require("https");
  const { URL, pathToFileURL } = require("url");

  async function startDirectDownload(urlStr) {
    try {
      const u = new URL(urlStr);
      const client = u.protocol === "https:" ? https : http;
      const guessedName = path.basename(u.pathname) || "download";
      const defaultPath = path.join(app.getPath("downloads"), guessedName);
      const { canceled, filePath: chosenPath } = await dialog.showSaveDialog(
        win,
        {
          title: "Save As",
          defaultPath,
          buttonLabel: "Save",
        }
      );
      if (canceled || !chosenPath) return;

      const req = client.get(
        urlStr,
        {
          headers: { "User-Agent": "ElectronDownloader/1.0" },
          rejectUnauthorized: false,
        },
        (res) => {
          if (
            res.statusCode &&
            res.statusCode >= 300 &&
            res.statusCode < 400 &&
            res.headers.location
          ) {
            req.destroy();
            return startDirectDownload(
              new URL(res.headers.location, urlStr).toString()
            );
          }
          const totalBytes = Number(res.headers["content-length"] || 0);
          const contentType = String(res.headers["content-type"] || "");
          let filename = path.basename(chosenPath);
          const cd = String(res.headers["content-disposition"] || "");
          const m = cd.match(
            /filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i
          );
          if (m) filename = decodeURIComponent(m[1] || m[2]);
          const savePath = chosenPath;

          const id = `${Date.now()}-${filename}`;
          let receivedBytes = 0;
          const rec = {
            id,
            url: urlStr,
            filename: path.basename(savePath),
            mimeType: contentType,
            totalBytes,
            receivedBytes: 0,
            progress: 0,
            savePath,
            state: "progressing",
            startTime: Date.now(),
            endTime: null,
            paused: false,
            canResume: false,
          };
          const file = fs.createWriteStream(savePath);
          const controller = { type: "direct", req, file, savePath };
          downloads.set(id, { rec, item: controller });
          broadcast(win, "downloads::update", { type: "added", record: rec });

          res.on("data", (chunk) => {
            file.write(chunk);
            receivedBytes += chunk.length;
            rec.receivedBytes = receivedBytes;
            rec.progress =
              totalBytes > 0
                ? Math.floor((receivedBytes / totalBytes) * 100)
                : 0;
            downloads.set(id, { rec, item: controller });
            broadcast(win, "downloads::update", {
              type: "progress",
              record: { ...rec },
            });
          });

          res.on("end", () => {
            file.end(() => {
              rec.endTime = Date.now();
              rec.state = "completed";
              downloads.set(id, { rec, item: null });
              broadcast(win, "downloads::update", {
                type: "done",
                record: { ...rec },
              });
            });
          });

          res.on("error", (err) => {
            try {
              file.destroy();
            } catch {}
            rec.state = "interrupted";
            rec.endTime = Date.now();
            downloads.set(id, { rec, item: null });
            broadcast(win, "downloads::update", {
              type: "done",
              record: { ...rec },
            });
          });
        }
      );

      req.on("error", (err) => {
        console.error("Direct download request error:", err);
      });
    } catch (e) {
      console.error("Failed to start direct download:", e);
    }
  }

  ipcMain.on("downloads::download-direct", (e, url) =>
    startDirectDownload(url)
  );

  ipcMain.handle("test::ipc-working", () => {
    console.log("IPC test handler called - IPC is working!");
    return { success: true, message: "IPC is working correctly" };
  });

  ipcMain.on("browser::create-new-tab", (event, data) => {
    console.log("Manual new tab creation requested:", data);
    win.webContents.send("browser::new-tab", data);
  });

  ipcMain.on("app::show-context-menu", (event, info) => {
    const contents = event.sender;
    const win = BrowserWindow.fromWebContents(contents);
    const template = [
      {
        label: "Back",
        enabled: contents.canGoBack?.(),
        click: () => contents.goBack?.(),
      },
      {
        label: "Forward",
        enabled: contents.canGoForward?.(),
        click: () => contents.goForward?.(),
      },
      { label: "Reload", click: () => contents.reload?.() },
      { type: "separator" },
      { role: "copy" },
      { role: "paste" },
      { role: "selectAll" },
      { type: "separator" },
      {
        label: "Inspect Element",
        click: () => contents.inspectElement?.(info?.x || 0, info?.y || 0),
      },
    ];
    const menu = Menu.buildFromTemplate(template);
    menu.popup({
      window: win || undefined,
      x: info?.x,
      y: info?.y,
    });
  });
});
