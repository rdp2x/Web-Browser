(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    2604: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 8643));
    },
    8643: function (e, t, s) {
      "use strict";
      s.d(t, {
        BrowserInterface: function () {
          return eW;
        },
      });
      var r,
        a,
        n = s(7437),
        i = s(2265),
        l = s(7053),
        o = s(535),
        d = s(1994),
        c = s(3335);
      function u() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, c.m6)((0, d.W)(t));
      }
      let m = (0, o.j)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function x(e) {
        let { className: t, variant: s, size: r, asChild: a = !1, ...i } = e,
          o = a ? l.g7 : "button";
        return (0, n.jsx)(o, {
          "data-slot": "button",
          className: u(m({ variant: s, size: r, className: t })),
          ...i,
        });
      }
      function h(e) {
        let { className: t, type: s, ...r } = e;
        return (0, n.jsx)("input", {
          type: s,
          "data-slot": "input",
          className: u(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t
          ),
          ...r,
        });
      }
      var g = s(1817),
        f = s(2451),
        p = s(407),
        v = s(9076),
        b = s(3247),
        w = s(4938),
        j = s(8293),
        N = s(2735),
        y = s(5621),
        k = s(8728),
        C = s(2489),
        L = s(9397);
      function z(e) {
        let { tabs: t, onTabClick: s, onTabClose: r, onNewTab: a } = e;
        return (0, n.jsx)("div", {
          className:
            "flex items-center bg-muted/30 px-2 py-1 dark:border-b dark:border-white/20",
          children: (0, n.jsxs)("div", {
            className: "flex items-center gap-1 flex-1 overflow-x-auto",
            children: [
              t.map((e) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className:
                      "\n              group flex items-center gap-2 px-3 py-2 rounded-t-lg min-w-[230px] max-w-[280px] cursor-pointer\n              transition-all duration-200 hover:bg-background/80\n              ".concat(
                        e.isActive
                          ? "bg-background border-t-2 border-primary shadow-sm dark:border-white/20 dark:border-l dark:border-r"
                          : "bg-muted/50 hover:bg-muted/70 dark:border dark:border-white/10",
                        "\n            "
                      ),
                    onClick: () => s(e.id),
                    children: [
                      e.isLoading &&
                        (0, n.jsx)(g.Z, {
                          className:
                            "h-3 w-3 animate-spin text-primary flex-shrink-0",
                        }),
                      (0, n.jsx)("div", {
                        className: "flex-1 truncate text-sm text-foreground",
                        children: e.title,
                      }),
                      t.length > 1 &&
                        (0, n.jsx)(x, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "h-4 w-4 p-0 opacity-0 group-hover:opacity-100 hover:bg-destructive/20 flex-shrink-0 text-foreground hover:text-destructive",
                          onClick: (t) => {
                            t.stopPropagation(), r(e.id);
                          },
                          children: (0, n.jsx)(C.Z, { className: "h-3 w-3" }),
                        }),
                    ],
                  },
                  e.id
                )
              ),
              (0, n.jsx)(x, {
                variant: "ghost",
                size: "sm",
                onClick: a,
                className:
                  "h-8 w-8 p-0 ml-1 hover:bg-primary/10 flex-shrink-0 text-foreground hover:text-primary dark:border dark:border-white/20",
                children: (0, n.jsx)(L.Z, { className: "h-4 w-4" }),
              }),
            ],
          }),
        });
      }
      function S(e) {
        let { className: t, ...s } = e;
        return (0, n.jsx)("div", {
          "data-slot": "card",
          className: u(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
            t
          ),
          ...s,
        });
      }
      var E = s(1239),
        Z = s(9202),
        D = s(1723);
      let A = "browser-history",
        R = "browser-history-updated";
      function B() {
        try {
          let e = localStorage.getItem(A);
          if (!e) return [];
          let t = JSON.parse(e);
          if (!Array.isArray(t)) return [];
          return t
            .filter((e) => e && "string" == typeof e.url)
            .sort((e, t) => t.timestamp - e.timestamp);
        } catch (e) {
          return [];
        }
      }
      function U(e) {
        try {
          localStorage.setItem(A, JSON.stringify(e)),
            window.dispatchEvent(new CustomEvent(R));
        } catch (e) {}
      }
      function T(e) {
        let t = () => e();
        return (
          window.addEventListener(R, t), () => window.removeEventListener(R, t)
        );
      }
      function I(e, t) {
        if (!e || e.startsWith("browser://")) return;
        let s = Date.now(),
          r = B(),
          a = r.findIndex((t) => t.url === e);
        if (a >= 0) {
          let e = r[a];
          U([
            {
              ...e,
              title: t || e.title,
              timestamp: s,
              visits: (e.visits || 1) + 1,
            },
            ...r.slice(0, a),
            ...r.slice(a + 1),
          ]);
        } else
          U([
            { id: String(s), url: e, title: t || e, timestamp: s, visits: 1 },
            ...r,
          ]);
      }
      function F(e) {
        let { onSearch: t, searchEngine: s = "google" } = e,
          [r, a] = (0, i.useState)(""),
          [l, o] = (0, i.useState)(!1),
          [d, c] = (0, i.useState)(""),
          [u, m] = (0, i.useState)(""),
          [g, f] = (0, i.useState)([
            {
              name: "Gmail",
              url: "https://mail.google.com/mail/u/0/",
              color: "bg-red-500",
            },
            {
              name: "YouTube",
              url: "https://youtube.com",
              color: "bg-red-600",
            },
            { name: "GitHub", url: "https://github.com", color: "bg-gray-800" },
            {
              name: "Twitter",
              url: "https://twitter.com",
              color: "bg-blue-500",
            },
            {
              name: "LinkedIn",
              url: "https://linkedin.com",
              color: "bg-blue-700",
            },
            {
              name: "Netflix",
              url: "https://netflix.com",
              color: "bg-red-700",
            },
            {
              name: "Amazon",
              url: "https://amazon.com",
              color: "bg-orange-500",
            },
            {
              name: "Instagram",
              url: "https://instagram.com",
              color: "bg-blue-600",
            },
            {
              name: "Prime Video",
              url: "https://www.primevideo.com/",
              color: "bg-blue-600",
            },
            {
              name: "Facebook",
              url: "https://facebook.com",
              color: "bg-blue-600",
            },
          ]),
          p = (e) => {
            try {
              let t = new URL(e).hostname;
              return "https://www.google.com/s2/favicons?domain=".concat(
                t,
                "&sz=32"
              );
            } catch (e) {
              return null;
            }
          },
          [v, w] = (0, i.useState)([]);
        (0, i.useEffect)(() => {
          let e = () => w(B().slice(0, 10));
          e();
          let t = T(e);
          return () => t();
        }, []);
        let j = (e) => {
          let t = Math.floor((Date.now() - e) / 1e3);
          if (t < 60) return "".concat(t, "s ago");
          let s = Math.floor(t / 60);
          if (s < 60) return "".concat(s, "m ago");
          let r = Math.floor(s / 60);
          if (r < 24) return "".concat(r, "h ago");
          let a = Math.floor(r / 24);
          return a < 7
            ? "".concat(a, "d ago")
            : new Date(e).toLocaleDateString();
        };
        return (0, n.jsx)("div", {
          className:
            "min-h-full bg-gradient-to-br from-primary/5 via-background to-secondary/5",
          children: (0, n.jsxs)("div", {
            className: "max-w-6xl mx-auto p-8",
            children: [
              (0, n.jsxs)("div", {
                className: "text-center mb-12",
                children: [
                  (0, n.jsxs)("div", {
                    className: "mb-8",
                    children: [
                      (0, n.jsxs)("h1", {
                        className:
                          "text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent [&:not(:has(background-clip))]:text-foreground mb-2",
                        children: [
                          (0, n.jsx)("span", {
                            className: "font-vibrant text-[1.15em]",
                            children: "Vibrant",
                          }),
                          " ",
                          (0, n.jsx)("span", { children: "Browser" }),
                        ],
                      }),
                      (0, n.jsx)("p", {
                        className: "text-muted-foreground",
                        children: "Your gateway to the web",
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "max-w-2xl mx-auto relative",
                    children: (0, n.jsxs)("form", {
                      onSubmit: (e) => {
                        e.preventDefault(),
                          r.trim() &&
                            t &&
                            (t(
                              {
                                google:
                                  "https://www.google.com/search?q=".concat(
                                    encodeURIComponent(r.trim())
                                  ),
                                bing: "https://www.bing.com/search?q=".concat(
                                  encodeURIComponent(r.trim())
                                ),
                                duckduckgo: "https://duckduckgo.com/?q=".concat(
                                  encodeURIComponent(r.trim())
                                ),
                                yahoo:
                                  "https://search.yahoo.com/search?p=".concat(
                                    encodeURIComponent(r.trim())
                                  ),
                              }[s]
                            ),
                            a(""));
                      },
                      children: [
                        (0, n.jsx)(h, {
                          value: r,
                          onChange: (e) => a(e.target.value),
                          placeholder: "Search the web or enter a URL",
                          className:
                            "h-14 pl-12 pr-4 text-lg bg-card/80 backdrop-blur-sm border-2 border-primary/20 focus:border-primary/40 rounded-2xl shadow-lg text-foreground placeholder:text-muted-foreground",
                        }),
                        (0, n.jsx)(b.Z, {
                          className:
                            "absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(S, {
                className:
                  "p-6 bg-card/80 backdrop-blur-sm border-primary/10 mb-8",
                children: [
                  (0, n.jsx)("div", {
                    className: "flex items-center justify-between mb-6",
                    children: (0, n.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, n.jsx)(E.Z, { className: "h-5 w-5 text-primary" }),
                        (0, n.jsx)("h2", {
                          className:
                            "text-lg font-semibold text-card-foreground",
                          children: "Quick Links",
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "grid gap-4 ".concat(
                      g.length <= 4
                        ? "grid-cols-4"
                        : g.length <= 6
                        ? "grid-cols-6"
                        : g.length <= 8
                        ? "grid-cols-8"
                        : "grid-cols-10",
                      " md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10"
                    ),
                    children: g.map((e, s) =>
                      (0, n.jsx)(
                        "div",
                        {
                          className: "relative group",
                          children: (0, n.jsxs)(x, {
                            variant: "ghost",
                            className:
                              "h-20 w-full flex-col gap-2 hover:bg-primary/10 text-foreground relative",
                            onClick: () => {
                              null == t || t(e.url);
                            },
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "w-10 h-10 rounded-lg flex items-center justify-center bg-background border",
                                children: [
                                  p(e.url)
                                    ? (0, n.jsx)("img", {
                                        src: p(e.url) || "/placeholder.svg",
                                        alt: "".concat(e.name, " favicon"),
                                        className: "w-6 h-6",
                                        onError: (e) => {
                                          var t;
                                          let s = e.target;
                                          (s.style.display = "none"),
                                            null ===
                                              (t = s.nextElementSibling) ||
                                              void 0 === t ||
                                              t.classList.remove("hidden");
                                        },
                                      })
                                    : null,
                                  (0, n.jsx)(Z.Z, {
                                    className:
                                      "h-5 w-5 text-muted-foreground ".concat(
                                        p(e.url) ? "hidden" : ""
                                      ),
                                  }),
                                ],
                              }),
                              (0, n.jsx)("span", {
                                className:
                                  "text-xs text-foreground text-center leading-tight",
                                children: e.name,
                              }),
                            ],
                          }),
                        },
                        "".concat(e.name, "-").concat(s)
                      )
                    ),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "grid grid-cols-1 gap-6",
                children: (0, n.jsxs)(S, {
                  className: "p-6 bg-card/80 backdrop-blur-sm border-border",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center gap-2 mb-4",
                      children: [
                        (0, n.jsx)(D.Z, {
                          className: "h-5 w-5 text-secondary",
                        }),
                        (0, n.jsx)("h2", {
                          className:
                            "text-lg font-semibold text-card-foreground",
                          children: "Recent Activity",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        0 === v.length &&
                          (0, n.jsx)("div", {
                            className: "text-sm text-muted-foreground",
                            children: "No recent activity yet.",
                          }),
                        v.map((e) =>
                          (0, n.jsxs)(
                            "div",
                            {
                              className:
                                "flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer",
                              onClick: () => (null == t ? void 0 : t(e.url)),
                              title: e.url,
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center",
                                  children: (0, n.jsx)(Z.Z, {
                                    className: "h-4 w-4 text-secondary",
                                  }),
                                }),
                                (0, n.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "font-medium text-sm text-card-foreground truncate",
                                      children: e.title || e.url,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "text-xs text-muted-foreground truncate",
                                      children: e.url,
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "text-xs text-muted-foreground whitespace-nowrap",
                                  children: j(e.timestamp),
                                }),
                              ],
                            },
                            e.id
                          )
                        ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var P = s(610);
      function _(e) {
        let { className: t, value: s, ...r } = e;
        return (0, n.jsx)(P.fC, {
          "data-slot": "progress",
          className: u(
            "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
            t
          ),
          ...r,
          children: (0, n.jsx)(P.z$, {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: { transform: "translateX(-".concat(100 - (s || 0), "%)") },
          }),
        });
      }
      var M = s(9334),
        G = s(3113),
        W = s(9374),
        q = s(2106),
        O = s(8736),
        V = s(6475),
        Y = s(8930),
        H = s(9227),
        J = s(3276);
      let { ipcRenderer: X } = (
          null === (r = (a = window).require) || void 0 === r
            ? void 0
            : r.call(a, "electron")
        )
          ? window.require("electron")
          : { ipcRenderer: null },
        $ = [],
        K = [];
      function Q() {
        for (let e of $) e(K);
      }
      function ee(e) {
        (K = e.sort((e, t) => (t.startTime || 0) - (e.startTime || 0))), Q();
      }
      async function et() {
        X &&
          (ee((await X.invoke("downloads::list")) || []),
          X.on("downloads::update", (e, t) => {
            if (!t) return;
            if ("bulk-refresh" === t.type) return ee(t.records || []);
            if ("removed" === t.type) {
              (K = K.filter((e) => e.id !== t.id)), Q();
              return;
            }
            let s = t.record,
              r = K.findIndex((e) => e.id === s.id);
            r >= 0 ? (K[r] = s) : K.unshift(s), Q();
          }));
      }
      function es(e) {
        null == X || X.send("downloads::pause", e);
      }
      function er(e) {
        null == X || X.send("downloads::resume", e);
      }
      function ea(e) {
        null == X || X.send("downloads::cancel", e);
      }
      function en(e) {
        null == X || X.send("downloads::remove", e);
      }
      function ei(e) {
        null == X || X.send("downloads::open-file", e);
      }
      function el(e) {
        null == X || X.send("downloads::show-in-folder", e);
      }
      function eo(e) {
        if (!e || e <= 0) return "0 B";
        let t = Math.floor(Math.log(e) / Math.log(1024)),
          s = e / Math.pow(1024, t);
        return ""
          .concat(s.toFixed(s >= 10 ? 0 : 1), " ")
          .concat(["B", "KB", "MB", "GB", "TB"][t]);
      }
      function ed() {
        let [e, t] = (0, i.useState)([]),
          [s, r] = (0, i.useState)(null);
        (0, i.useEffect)(
          () => (
            et(),
            $.push(t),
            t(K),
            () => {
              $ = $.filter((e) => e !== t);
            }
          ),
          []
        );
        let a = (e) =>
            (null == e ? void 0 : e.includes("zip"))
              ? M.Z
              : (null == e ? void 0 : e.startsWith("image/"))
              ? G.Z
              : (null == e ? void 0 : e.startsWith("video/"))
              ? W.Z
              : (null == e ? void 0 : e.startsWith("audio/"))
              ? q.Z
              : (null == e || e.includes("pdf"), O.Z),
          l = (e) => {
            switch (e.state) {
              case "completed":
                return "Completed";
              case "paused":
                return "Paused";
              case "interrupted":
                return "Interrupted";
              case "cancelled":
                return "Cancelled";
              default:
                return "Downloading";
            }
          },
          o = (e) => {
            switch (e.state) {
              case "completed":
                return "text-green-600";
              case "paused":
                return "text-yellow-600";
              case "interrupted":
              case "cancelled":
                return "text-red-600";
              default:
                return "text-blue-600";
            }
          };
        return (0, n.jsxs)("div", {
          className:
            "max-w-4xl mx-auto p-6 bg-background text-foreground min-h-full",
          children: [
            (0, n.jsxs)("div", {
              className: "mb-8",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [
                    (0, n.jsx)(N.Z, { className: "h-6 w-6 text-primary" }),
                    (0, n.jsx)("h1", {
                      className: "text-2xl font-bold text-foreground",
                      children: "Downloads",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex items-center gap-4 flex-wrap",
                  children: [
                    (0, n.jsxs)(x, {
                      variant: "outline",
                      className:
                        "gap-2 bg-card text-card-foreground border-border hover:bg-accent hover:text-accent-foreground",
                      onClick: () =>
                        void (null == X || X.send("downloads::open-folder")),
                      children: [
                        (0, n.jsx)(V.Z, { className: "h-4 w-4" }),
                        "Open Downloads Folder",
                      ],
                    }),
                    (0, n.jsxs)(x, {
                      variant: "outline",
                      className:
                        "gap-2 bg-card text-card-foreground border-border hover:bg-accent hover:text-accent-foreground",
                      onClick: () =>
                        void (null == X || X.send("downloads::clear-finished")),
                      children: [
                        (0, n.jsx)(Y.Z, { className: "h-4 w-4" }),
                        "Clear Finished",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "space-y-4",
              children: [
                e.map((e) => {
                  let t = a(e.mimeType),
                    s = "progressing" === e.state || "paused" === e.state;
                  return (0, n.jsx)(
                    S,
                    {
                      className:
                        "p-4 bg-card text-card-foreground border-border",
                      onContextMenu: (t) => {
                        t.preventDefault(),
                          r({
                            visible: !0,
                            x: t.clientX,
                            y: t.clientY,
                            target: e,
                          });
                      },
                      children: (0, n.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0",
                            children: (0, n.jsx)(t, {
                              className: "h-5 w-5 text-primary",
                            }),
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              (0, n.jsx)("h3", {
                                className:
                                  "font-medium truncate text-card-foreground",
                                children: e.filename,
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex items-center gap-4 mt-1 text-sm text-muted-foreground",
                                children: [
                                  (0, n.jsxs)("span", {
                                    children: [
                                      eo(e.receivedBytes),
                                      " /",
                                      " ",
                                      eo(e.totalBytes),
                                    ],
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o(e),
                                    children: l(e),
                                  }),
                                  "completed" === e.state &&
                                    e.endTime &&
                                    (0, n.jsx)("span", {
                                      children: new Date(
                                        e.endTime
                                      ).toLocaleString(),
                                    }),
                                ],
                              }),
                              s &&
                                (0, n.jsxs)("div", {
                                  className: "mt-2",
                                  children: [
                                    (0, n.jsx)(_, {
                                      value: e.progress,
                                      className: "h-2",
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "text-xs text-muted-foreground mt-1",
                                      children: [e.progress, "% complete"],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              "progressing" === e.state &&
                                (0, n.jsx)(x, {
                                  variant: "ghost",
                                  size: "sm",
                                  className:
                                    "hover:bg-accent hover:text-accent-foreground",
                                  onClick: () => es(e.id),
                                  children: (0, n.jsx)(H.Z, {
                                    className: "h-4 w-4",
                                  }),
                                }),
                              "paused" === e.state &&
                                (0, n.jsx)(x, {
                                  variant: "ghost",
                                  size: "sm",
                                  className:
                                    "hover:bg-accent hover:text-accent-foreground",
                                  onClick: () => er(e.id),
                                  children: (0, n.jsx)(J.Z, {
                                    className: "h-4 w-4",
                                  }),
                                }),
                              "completed" === e.state &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)(x, {
                                      variant: "ghost",
                                      size: "sm",
                                      className:
                                        "hover:bg-accent hover:text-accent-foreground",
                                      onClick: () => ei(e.id),
                                      children: (0, n.jsx)(O.Z, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                    (0, n.jsx)(x, {
                                      variant: "ghost",
                                      size: "sm",
                                      className:
                                        "hover:bg-accent hover:text-accent-foreground",
                                      onClick: () => el(e.id),
                                      children: (0, n.jsx)(V.Z, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                  ],
                                }),
                              (0, n.jsx)(x, {
                                variant: "ghost",
                                size: "sm",
                                className:
                                  "hover:bg-accent hover:text-accent-foreground",
                                onClick: () =>
                                  "progressing" === e.state
                                    ? ea(e.id)
                                    : en(e.id),
                                children: (0, n.jsx)(Y.Z, {
                                  className: "h-4 w-4",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.id
                  );
                }),
                0 === e.length &&
                  (0, n.jsx)("div", {
                    className: "text-center text-muted-foreground py-12",
                    children: "No downloads yet",
                  }),
              ],
            }),
            (null == s ? void 0 : s.visible) &&
              s.target &&
              (0, n.jsx)(ec, {
                x: s.x,
                y: s.y,
                record: s.target,
                onClose: () => r(null),
              }),
          ],
        });
      }
      function ec(e) {
        let { x: t, y: s, record: r, onClose: a } = e;
        (0, i.useEffect)(() => {
          let e = () => a(),
            t = (e) => {
              "Escape" === e.key && a();
            };
          return (
            document.addEventListener("click", e),
            document.addEventListener("contextmenu", e),
            document.addEventListener("keydown", t),
            () => {
              document.removeEventListener("click", e),
                document.removeEventListener("contextmenu", e),
                document.removeEventListener("keydown", t);
            }
          );
        }, [a]);
        let l = (e) => () => {
            try {
              e();
            } finally {
              a();
            }
          },
          o = async (e) => {
            if (e)
              try {
                await navigator.clipboard.writeText(e);
              } catch (e) {}
          },
          d = "completed" === r.state && !!r.savePath,
          c = !!r.savePath,
          u = "progressing" === r.state,
          m = "paused" === r.state,
          x = !u,
          h = (e) => {
            let { children: t, onClick: s, disabled: r } = e;
            return (0, n.jsx)("button", {
              className:
                "w-full text-left px-3 py-1.5 text-sm rounded hover:bg-accent hover:text-accent-foreground disabled:opacity-40 disabled:pointer-events-none",
              onClick: s,
              disabled: r,
              children: t,
            });
          };
        return (0, n.jsxs)("div", {
          className:
            "fixed z-50 min-w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md p-1",
          style: { top: s, left: t },
          children: [
            (0, n.jsx)(h, { onClick: l(() => o(r.url)), children: "Copy URL" }),
            (0, n.jsx)(h, {
              onClick: l(() => o(r.savePath)),
              disabled: !r.savePath,
              children: "Copy File Path",
            }),
            (0, n.jsx)("div", { className: "my-1 h-px bg-border" }),
            u &&
              (0, n.jsx)(h, { onClick: l(() => es(r.id)), children: "Pause" }),
            m &&
              (0, n.jsx)(h, { onClick: l(() => er(r.id)), children: "Resume" }),
            u
              ? (0, n.jsx)(h, {
                  onClick: l(() => ea(r.id)),
                  children: "Cancel",
                })
              : (0, n.jsx)(h, {
                  onClick: l(() => en(r.id)),
                  disabled: !x,
                  children: "Remove",
                }),
            (0, n.jsx)("div", { className: "my-1 h-px bg-border" }),
            (0, n.jsx)(h, {
              onClick: l(() => ei(r.id)),
              disabled: !d,
              children: "Open File",
            }),
            (0, n.jsx)(h, {
              onClick: l(() => el(r.id)),
              disabled: !c,
              children: "Show in Folder",
            }),
          ],
        });
      }
      var eu = s(1047),
        em = s(6362);
      function ex(e) {
        try {
          let t = new URL(e).hostname;
          return "https://www.google.com/s2/favicons?domain=".concat(
            t,
            "&sz=32"
          );
        } catch (e) {
          return "";
        }
      }
      function eh(e) {
        let { onOpenUrl: t } = e,
          [s, r] = (0, i.useState)(""),
          [a, l] = (0, i.useState)([]),
          [o, d] = (0, i.useState)("all");
        (0, i.useEffect)(() => {
          l(B());
          let e = T(() => l(B()));
          return () => e();
        }, []);
        let c = (0, i.useMemo)(() => {
            let e = Date.now(),
              t = e - 864e5,
              s = e - 6048e5,
              r = e - 2592e6;
            switch (o) {
              case "today":
                return a.filter((e) => e.timestamp >= t);
              case "week":
                return a.filter((e) => e.timestamp >= s);
              case "month":
                return a.filter((e) => e.timestamp >= r);
              default:
                return a;
            }
          }, [a, o]),
          u = (0, i.useMemo)(() => {
            let e = s.trim().toLowerCase();
            return e
              ? c.filter(
                  (t) =>
                    t.title.toLowerCase().includes(e) ||
                    t.url.toLowerCase().includes(e)
                )
              : c;
          }, [s, c]),
          m = (0, i.useMemo)(() => {
            let e = Date.now(),
              t = new Date(e).toDateString(),
              s = new Date(e - 864e5).toDateString();
            return u.reduce((e, r) => {
              let a;
              let n = new Date(r.timestamp),
                i = n.toDateString();
              return (
                e[
                  (a =
                    i === t
                      ? "Today"
                      : i === s
                      ? "Yesterday"
                      : n.toLocaleDateString(void 0, {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }))
                ] || (e[a] = []),
                e[a].push(r),
                e
              );
            }, {});
          }, [u]),
          g = (0, i.useMemo)(() => a.reduce((e, t) => e + t.visits, 0), [a]);
        return (0, n.jsxs)("div", {
          className:
            "max-w-5xl mx-auto p-6 bg-background text-foreground min-h-full",
          children: [
            (0, n.jsxs)("div", {
              className: "mb-8",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex items-center gap-3 mb-6",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",
                      children: (0, n.jsx)(D.Z, {
                        className: "h-6 w-6 text-primary",
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("h1", {
                          className: "text-3xl font-bold text-foreground",
                          children: "History",
                        }),
                        (0, n.jsxs)("p", {
                          className: "text-muted-foreground",
                          children: [a.length, " pages • ", g, " total visits"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col sm:flex-row gap-4 mb-6",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "relative flex-1 max-w-md",
                      children: [
                        (0, n.jsx)(h, {
                          placeholder: "Search your browsing history...",
                          value: s,
                          onChange: (e) => r(e.target.value),
                          className:
                            "pl-10 bg-input text-foreground border-border",
                        }),
                        (0, n.jsx)(b.Z, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex gap-2",
                      children: [
                        { key: "today", label: "Today" },
                        { key: "week", label: "Past week" },
                        { key: "month", label: "Past month" },
                        { key: "all", label: "All time" },
                      ].map((e) => {
                        let { key: t, label: s } = e;
                        return (0, n.jsx)(
                          x,
                          {
                            variant: o === t ? "default" : "outline",
                            size: "sm",
                            onClick: () => d(t),
                            className: "text-xs",
                            children: s,
                          },
                          t
                        );
                      }),
                    }),
                    (0, n.jsxs)(x, {
                      variant: "destructive",
                      size: "sm",
                      className: "gap-2",
                      onClick: () => {
                        confirm(
                          "Are you sure you want to clear all browsing history? This action cannot be undone."
                        ) && U([]);
                      },
                      children: [
                        (0, n.jsx)(Y.Z, { className: "h-4 w-4" }),
                        "Clear All",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "space-y-8",
              children: [
                Object.entries(m).map((e) => {
                  let [s, r] = e;
                  return (0, n.jsxs)(
                    "div",
                    {
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex items-center gap-3 mb-4",
                          children: [
                            (0, n.jsx)(eu.Z, {
                              className: "h-5 w-5 text-primary",
                            }),
                            (0, n.jsx)("h2", {
                              className:
                                "text-xl font-semibold text-foreground",
                              children: s,
                            }),
                            (0, n.jsx)("div", {
                              className: "flex-1 h-px bg-border",
                            }),
                            (0, n.jsxs)("span", {
                              className: "text-sm text-muted-foreground",
                              children: [r.length, " visits"],
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "space-y-2",
                          children: r.map((e) =>
                            (0, n.jsx)(
                              S,
                              {
                                className:
                                  "p-4 hover:bg-accent/50 cursor-pointer group transition-all duration-200 border-border bg-card",
                                onClick: () => (null == t ? void 0 : t(e.url)),
                                children: (0, n.jsxs)("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className:
                                        "w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center",
                                      children: [
                                        ex(e.url)
                                          ? (0, n.jsx)("img", {
                                              src: ex(e.url),
                                              alt: "",
                                              className: "w-6 h-6",
                                              onError: (e) => {
                                                let t = e.target;
                                                t.style.display = "none";
                                                let s = t.nextElementSibling;
                                                s &&
                                                  (s.style.display = "block");
                                              },
                                            })
                                          : null,
                                        (0, n.jsx)(Z.Z, {
                                          className:
                                            "h-4 w-4 text-muted-foreground",
                                          style: {
                                            display: ex(e.url)
                                              ? "none"
                                              : "block",
                                          },
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "flex-1 min-w-0",
                                      children: (0, n.jsxs)("div", {
                                        className:
                                          "flex items-start justify-between gap-2",
                                        children: [
                                          (0, n.jsxs)("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                              (0, n.jsx)("h3", {
                                                className:
                                                  "font-medium text-card-foreground group-hover:text-primary transition-colors truncate text-base",
                                                children: e.title,
                                              }),
                                              (0, n.jsx)("p", {
                                                className:
                                                  "text-sm text-muted-foreground truncate mt-1",
                                                children: e.url,
                                              }),
                                            ],
                                          }),
                                          (0, n.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap",
                                            children: [
                                              (0, n.jsx)("span", {
                                                children: (function (e) {
                                                  let t = Date.now() - e,
                                                    s = Math.floor(t / 6e4),
                                                    r = Math.floor(t / 36e5),
                                                    a = Math.floor(t / 864e5);
                                                  return s < 1
                                                    ? "Just now"
                                                    : s < 60
                                                    ? "".concat(s, "m ago")
                                                    : r < 24
                                                    ? "".concat(r, "h ago")
                                                    : a < 7
                                                    ? "".concat(a, "d ago")
                                                    : new Date(
                                                        e
                                                      ).toLocaleDateString();
                                                })(e.timestamp),
                                              }),
                                              (0, n.jsx)("span", {
                                                children: "•",
                                              }),
                                              (0, n.jsxs)("span", {
                                                children: [
                                                  e.visits,
                                                  " visit",
                                                  1 !== e.visits ? "s" : "",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                      children: [
                                        (0, n.jsx)(x, {
                                          variant: "ghost",
                                          size: "sm",
                                          onClick: (s) => {
                                            s.stopPropagation(), t && t(e.url);
                                          },
                                          className:
                                            "h-8 w-8 p-0 hover:bg-accent",
                                          title: "Open in new tab",
                                          children: (0, n.jsx)(em.Z, {
                                            className: "h-4 w-4",
                                          }),
                                        }),
                                        (0, n.jsx)(x, {
                                          variant: "ghost",
                                          size: "sm",
                                          onClick: (t) => {
                                            if (
                                              (t.stopPropagation(),
                                              confirm(
                                                'Remove "'.concat(
                                                  e.title,
                                                  '" from history?'
                                                )
                                              ))
                                            ) {
                                              var s;
                                              (s = e.url),
                                                U(
                                                  B().filter((e) => e.url !== s)
                                                );
                                            }
                                          },
                                          className:
                                            "h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive",
                                          title: "Remove from history",
                                          children: (0, n.jsx)(Y.Z, {
                                            className: "h-4 w-4",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              e.id
                            )
                          ),
                        }),
                      ],
                    },
                    s
                  );
                }),
                0 === Object.keys(m).length &&
                  (0, n.jsxs)("div", {
                    className: "text-center py-16",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4",
                        children: (0, n.jsx)(D.Z, {
                          className: "h-8 w-8 text-muted-foreground",
                        }),
                      }),
                      (0, n.jsx)("h3", {
                        className: "text-lg font-semibold text-foreground mb-2",
                        children: "No browsing history",
                      }),
                      (0, n.jsx)("p", {
                        className: "text-muted-foreground max-w-md mx-auto",
                        children: s
                          ? 'No results found for "'.concat(
                              s,
                              '". Try adjusting your search terms or time period.'
                            )
                          : "Start browsing to see your history here. Your visited pages will appear grouped by date.",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      var eg = s(4098);
      function ef(e) {
        let { ...t } = e;
        return (0, n.jsx)(eg.fC, { "data-slot": "dialog", ...t });
      }
      function ep(e) {
        let { ...t } = e;
        return (0, n.jsx)(eg.h_, { "data-slot": "dialog-portal", ...t });
      }
      function ev(e) {
        let { className: t, ...s } = e;
        return (0, n.jsx)(eg.aV, {
          "data-slot": "dialog-overlay",
          className: u(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            t
          ),
          ...s,
        });
      }
      function eb(e) {
        let { className: t, children: s, showCloseButton: r = !0, ...a } = e;
        return (0, n.jsxs)(ep, {
          "data-slot": "dialog-portal",
          children: [
            (0, n.jsx)(ev, {}),
            (0, n.jsxs)(eg.VY, {
              "data-slot": "dialog-content",
              className: u(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
                t
              ),
              ...a,
              children: [
                s,
                r &&
                  (0, n.jsxs)(eg.x8, {
                    "data-slot": "dialog-close",
                    className:
                      "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    children: [
                      (0, n.jsx)(C.Z, {}),
                      (0, n.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function ew(e) {
        let { className: t, ...s } = e;
        return (0, n.jsx)("div", {
          "data-slot": "dialog-header",
          className: u("flex flex-col gap-2 text-center sm:text-left", t),
          ...s,
        });
      }
      function ej(e) {
        let { className: t, ...s } = e;
        return (0, n.jsx)(eg.Dx, {
          "data-slot": "dialog-title",
          className: u("text-lg leading-none font-semibold", t),
          ...s,
        });
      }
      var eN = s(6394);
      function ey(e) {
        let { className: t, ...s } = e;
        return (0, n.jsx)(eN.f, {
          "data-slot": "label",
          className: u(
            "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t
          ),
          ...s,
        });
      }
      var ek = s(721);
      function eC(e) {
        let { className: t, ...s } = e;
        return (0, n.jsx)(ek.fC, {
          "data-slot": "switch",
          className: u(
            "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            t
          ),
          ...s,
          children: (0, n.jsx)(ek.bU, {
            "data-slot": "switch-thumb",
            className: u(
              "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
            ),
          }),
        });
      }
      var eL = s(822),
        ez = s(875),
        eS = s(401),
        eE = s(2135);
      function eZ(e) {
        let { ...t } = e;
        return (0, n.jsx)(eL.fC, { "data-slot": "select", ...t });
      }
      function eD(e) {
        let { ...t } = e;
        return (0, n.jsx)(eL.B4, { "data-slot": "select-value", ...t });
      }
      function eA(e) {
        let { className: t, size: s = "default", children: r, ...a } = e;
        return (0, n.jsxs)(eL.xz, {
          "data-slot": "select-trigger",
          "data-size": s,
          className: u(
            "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...a,
          children: [
            r,
            (0, n.jsx)(eL.JO, {
              asChild: !0,
              children: (0, n.jsx)(ez.Z, { className: "size-4 opacity-50" }),
            }),
          ],
        });
      }
      function eR(e) {
        let { className: t, children: s, position: r = "popper", ...a } = e;
        return (0, n.jsx)(eL.h_, {
          children: (0, n.jsxs)(eL.VY, {
            "data-slot": "select-content",
            className: u(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              "popper" === r &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              t
            ),
            position: r,
            ...a,
            children: [
              (0, n.jsx)(eU, {}),
              (0, n.jsx)(eL.l_, {
                className: u(
                  "p-1",
                  "popper" === r &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
                ),
                children: s,
              }),
              (0, n.jsx)(eT, {}),
            ],
          }),
        });
      }
      function eB(e) {
        let { className: t, children: s, ...r } = e;
        return (0, n.jsxs)(eL.ck, {
          "data-slot": "select-item",
          className: u(
            "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
            t
          ),
          ...r,
          children: [
            (0, n.jsx)("span", {
              className:
                "absolute right-2 flex size-3.5 items-center justify-center",
              children: (0, n.jsx)(eL.wU, {
                children: (0, n.jsx)(eS.Z, { className: "size-4" }),
              }),
            }),
            (0, n.jsx)(eL.eT, { children: s }),
          ],
        });
      }
      function eU(e) {
        let { className: t, ...s } = e;
        return (0, n.jsx)(eL.u_, {
          "data-slot": "select-scroll-up-button",
          className: u(
            "flex cursor-default items-center justify-center py-1",
            t
          ),
          ...s,
          children: (0, n.jsx)(eE.Z, { className: "size-4" }),
        });
      }
      function eT(e) {
        let { className: t, ...s } = e;
        return (0, n.jsx)(eL.$G, {
          "data-slot": "select-scroll-down-button",
          className: u(
            "flex cursor-default items-center justify-center py-1",
            t
          ),
          ...s,
          children: (0, n.jsx)(ez.Z, { className: "size-4" }),
        });
      }
      var eI = s(5156);
      function eF(e) {
        let {
          className: t,
          orientation: s = "horizontal",
          decorative: r = !0,
          ...a
        } = e;
        return (0, n.jsx)(eI.f, {
          "data-slot": "separator",
          decorative: r,
          orientation: s,
          className: u(
            "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
            t
          ),
          ...a,
        });
      }
      var eP = s(2805),
        e_ = s(8906),
        eM = s(3245);
      function eG(e) {
        let {
          isOpen: t,
          onClose: s,
          theme: r,
          searchEngine: a,
          onThemeChange: i,
          onSearchEngineChange: l,
        } = e;
        return (0, n.jsx)(ef, {
          open: t,
          onOpenChange: s,
          children: (0, n.jsxs)(eb, {
            className: "max-w-2xl max-h-[80vh] overflow-y-auto",
            children: [
              (0, n.jsx)(ew, {
                children: (0, n.jsxs)(ej, {
                  className: "flex items-center gap-2",
                  children: [
                    (0, n.jsx)(k.Z, { className: "h-5 w-5" }),
                    "Browser Settings",
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className: "space-y-6 py-4",
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                          (0, n.jsx)(eP.Z, {
                            className: "h-4 w-4 text-primary",
                          }),
                          (0, n.jsx)("h3", {
                            className: "text-lg font-semibold",
                            children: "Appearance",
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "space-y-4 pl-6",
                        children: (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)(ey, {
                              htmlFor: "theme",
                              className: "text-sm font-medium",
                              children: "Theme",
                            }),
                            (0, n.jsxs)(eZ, {
                              value: r,
                              onValueChange: (e) => i(e),
                              children: [
                                (0, n.jsx)(eA, {
                                  className: "w-full mt-2",
                                  children: (0, n.jsx)(eD, {}),
                                }),
                                (0, n.jsxs)(eR, {
                                  children: [
                                    (0, n.jsx)(eB, {
                                      value: "default",
                                      children: "Light",
                                    }),
                                    (0, n.jsx)(eB, {
                                      value: "dark",
                                      children: "Dark",
                                    }),
                                    (0, n.jsx)(eB, {
                                      value: "gray",
                                      children: "Gray",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)(eF, {}),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                          (0, n.jsx)(b.Z, {
                            className: "h-4 w-4 text-primary",
                          }),
                          (0, n.jsx)("h3", {
                            className: "text-lg font-semibold",
                            children: "Search Engine",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "pl-6",
                        children: [
                          (0, n.jsx)(ey, {
                            htmlFor: "search-engine",
                            className: "text-sm font-medium",
                            children: "Default search engine",
                          }),
                          (0, n.jsxs)(eZ, {
                            value: a,
                            onValueChange: (e) => l(e),
                            children: [
                              (0, n.jsx)(eA, {
                                className: "w-full mt-2",
                                children: (0, n.jsx)(eD, {}),
                              }),
                              (0, n.jsxs)(eR, {
                                children: [
                                  (0, n.jsx)(eB, {
                                    value: "google",
                                    children: "Google",
                                  }),
                                  (0, n.jsx)(eB, {
                                    value: "bing",
                                    children: "Bing",
                                  }),
                                  (0, n.jsx)(eB, {
                                    value: "duckduckgo",
                                    children: "DuckDuckGo",
                                  }),
                                  (0, n.jsx)(eB, {
                                    value: "yahoo",
                                    children: "Yahoo",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(eF, {}),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                          (0, n.jsx)(e_.Z, {
                            className: "h-4 w-4 text-primary",
                          }),
                          (0, n.jsx)("h3", {
                            className: "text-lg font-semibold",
                            children: "Privacy & Security",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "space-y-4 pl-6",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)(ey, {
                                    className: "text-sm font-medium",
                                    children: "Block third-party cookies",
                                  }),
                                  (0, n.jsx)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Prevent sites from tracking you",
                                  }),
                                ],
                              }),
                              (0, n.jsx)(eC, { defaultChecked: !0 }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)(ey, {
                                    className: "text-sm font-medium",
                                    children: "Enable Do Not Track",
                                  }),
                                  (0, n.jsx)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children:
                                      "Send a request to websites not to track you",
                                  }),
                                ],
                              }),
                              (0, n.jsx)(eC, {}),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex gap-2 mt-4",
                            children: [
                              (0, n.jsx)(x, {
                                variant: "outline",
                                size: "sm",
                                children: "Clear Browsing Data",
                              }),
                              (0, n.jsx)(x, {
                                variant: "outline",
                                size: "sm",
                                children: "Manage Cookies",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(eF, {}),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                          (0, n.jsx)(eM.Z, {
                            className: "h-4 w-4 text-primary",
                          }),
                          (0, n.jsx)("h3", {
                            className: "text-lg font-semibold",
                            children: "About",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "pl-6",
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("h4", {
                                className: "font-medium",
                                children: "VibrantBrowser",
                              }),
                              (0, n.jsx)("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Version 1.0.0",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex gap-2 mt-4",
                            children: [
                              (0, n.jsx)(x, {
                                variant: "outline",
                                size: "sm",
                                children: "Check for Updates",
                              }),
                              (0, n.jsx)(x, {
                                variant: "outline",
                                size: "sm",
                                children: "Report Issue",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function eW() {
        let e = (0, i.useRef)({}),
          t = (0, i.useRef)({}),
          s = (0, i.useRef)({}),
          [r, a] = (0, i.useState)([
            {
              id: "1",
              title: "New Tab",
              url: "browser://newtab",
              isActive: !0,
              isLoading: !1,
              content: "home",
            },
          ]),
          [l, o] = (0, i.useState)("browser://newtab"),
          [d, c] = (0, i.useState)(!1),
          [u, m] = (0, i.useState)(!1),
          [C, L] = (0, i.useState)("dark"),
          [S, E] = (0, i.useState)("google");
        (0, i.useEffect)(() => {
          let e = localStorage.getItem("browser-theme");
          e && ["default", "dark", "gray"].includes(e) && L(e);
        }, []),
          (0, i.useEffect)(() => {
            let e = document.documentElement;
            e.classList.remove("dark", "gray"),
              "dark" === C
                ? e.classList.add("dark")
                : "gray" === C && e.classList.add("gray"),
              localStorage.setItem("browser-theme", C);
          }, [C]);
        let Z = r.find((e) => e.isActive),
          D = function (e) {
            let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8e3;
            a((t) => t.map((t) => (t.id === e ? { ...t, isLoading: !0 } : t)));
            let r = t.current[e];
            r && clearTimeout(r),
              (t.current[e] = setTimeout(() => {
                a((t) =>
                  t.map((t) => (t.id === e ? { ...t, isLoading: !1 } : t))
                ),
                  delete t.current[e];
              }, s));
          },
          A = (e) => {
            let s = t.current[e];
            s && (clearTimeout(s), delete t.current[e]),
              a((t) =>
                t.map((t) => (t.id === e ? { ...t, isLoading: !1 } : t))
              );
          },
          R = (e, t) => {
            if (!t || s.current[e]) return;
            let n = () => {
                try {
                  let s = !!(t.canGoBack && t.canGoBack()),
                    r = !!(t.canGoForward && t.canGoForward());
                  a((t) =>
                    t.map((t) =>
                      t.id === e ? { ...t, canGoBack: s, canGoForward: r } : t
                    )
                  );
                } catch (e) {}
              },
              i = (t) => {
                t && t.isMainFrame && (D(e), n());
              },
              l = () => {
                A(e);
                try {
                  let n = t.getURL ? t.getURL() : void 0;
                  if (n) {
                    var s;
                    a((t) => t.map((t) => (t.id === e ? { ...t, url: n } : t))),
                      (null === (s = r.find((t) => t.id === e)) || void 0 === s
                        ? void 0
                        : s.isActive) && o(n);
                    let t = document.title || "";
                    n.startsWith("browser://") || I(n, t);
                  }
                } catch (e) {}
                n();
              },
              d = () => {
                A(e), n();
              },
              c = () => {
                A(e), n();
              },
              u = () => {
                try {
                  let n = t.getURL ? t.getURL() : void 0;
                  if (n) {
                    var s;
                    a((t) => t.map((t) => (t.id === e ? { ...t, url: n } : t))),
                      (null === (s = r.find((t) => t.id === e)) || void 0 === s
                        ? void 0
                        : s.isActive) && o(n),
                      n.startsWith("browser://") || I(n, document.title || "");
                  }
                } catch (e) {}
                n();
              },
              m = (t) => {
                let s = t.title || document.title;
                s &&
                  a((t) => t.map((t) => (t.id === e ? { ...t, title: s } : t)));
              },
              x = () => {
                A(e), n();
              };
            try {
              t.addEventListener("did-start-navigation", i),
                t.addEventListener("did-stop-loading", d),
                t.addEventListener("did-finish-load", l),
                t.addEventListener("did-fail-load", c),
                t.addEventListener("did-navigate", u),
                t.addEventListener("did-navigate-in-page", u),
                t.addEventListener("dom-ready", x),
                t.addEventListener("page-title-updated", m);
            } catch (e) {}
            s.current[e] = {
              didStartNav: i,
              didStop: d,
              didFinish: l,
              didFail: c,
              didNav: u,
              didNavInPage: u,
              domReady: x,
              titleUpdated: m,
            };
          },
          B = (t) => {
            let r = e.current[t],
              a = s.current[t];
            if (r && a) {
              try {
                a.didStartNav &&
                  r.removeEventListener("did-start-navigation", a.didStartNav),
                  a.didStop &&
                    r.removeEventListener("did-stop-loading", a.didStop),
                  a.didFinish &&
                    r.removeEventListener("did-finish-load", a.didFinish),
                  a.didFail &&
                    r.removeEventListener("did-fail-load", a.didFail),
                  a.didNav && r.removeEventListener("did-navigate", a.didNav),
                  a.didNavInPage &&
                    r.removeEventListener(
                      "did-navigate-in-page",
                      a.didNavInPage
                    ),
                  a.domReady && r.removeEventListener("dom-ready", a.domReady),
                  a.titleUpdated &&
                    r.removeEventListener("page-title-updated", a.titleUpdated);
              } catch (e) {}
              delete s.current[t];
            }
          },
          U = (t) => {
            let s = {
              id: Date.now().toString(),
              title: "Loading...",
              url: t,
              isActive: !1,
              isLoading: !0,
              content: "external",
              canGoBack: !1,
              canGoForward: !1,
            };
            a((e) =>
              e
                .map((e) => ({ ...e, isActive: !1 }))
                .concat({ ...s, isActive: !0 })
            ),
              o(t),
              setTimeout(() => {
                let r = e.current[s.id];
                if (r) {
                  var a;
                  null === (a = r.loadURL) || void 0 === a || a.call(r, t);
                }
              }, 100);
          };
        (0, i.useEffect)(() => {
          let e = (e, t) => {
            console.log("Received new tab request for URL:", t.url), U(t.url);
          };
          (async () => {
            try {
              if (window.require) {
                let { ipcRenderer: t } = window.require("electron");
                console.log("Testing IPC communication...");
                let s = await t.invoke("test::ipc-working");
                return (
                  console.log("IPC test result:", s),
                  console.log("Setting up IPC listener for new tabs"),
                  t.on("browser::new-tab", e),
                  () => {
                    t.removeListener("browser::new-tab", e);
                  }
                );
              }
              console.log("Electron require not available");
            } catch (e) {
              console.log("Error setting up IPC:", e);
            }
          })();
        }, []);
        let T = (e) => {
          let t = "browser://".concat(e),
            s = e.charAt(0).toUpperCase() + e.slice(1);
          a((r) =>
            r.map((r) =>
              r.isActive
                ? { ...r, url: t, title: s, content: e, isLoading: !1 }
                : r
            )
          ),
            o(t);
        };
        return (0, n.jsxs)("div", {
          className: "h-screen flex flex-col ".concat(
            "dark" === C ? "dark" : "gray" === C ? "gray" : ""
          ),
          style: {
            background:
              "gray" === C
                ? "radial-gradient(circle, #8BAAA7 0%, #DEDEDB 29%, #CCCCCC 52%, #DBDBDB 69%, #8D9A9B 100%)"
                : void 0,
          },
          children: [
            (0, n.jsxs)("div", {
              className: "flex-none bg-card ".concat(
                "dark" === C
                  ? "border-b border-white/20"
                  : "border-b border-border"
              ),
              children: [
                (0, n.jsx)(z, {
                  tabs: r,
                  onTabClick: (e) => {
                    let t = r.map((t) => ({ ...t, isActive: t.id === e }));
                    a(t);
                    let s = t.find((e) => e.isActive);
                    s && o(s.url);
                  },
                  onTabClose: (s) => {
                    if (1 === r.length) return;
                    let n = r.findIndex((e) => e.id === s),
                      i = r[n].isActive,
                      l = r.filter((e) => e.id !== s);
                    if (
                      (B(s),
                      delete e.current[s],
                      t.current[s] &&
                        (clearTimeout(t.current[s]), delete t.current[s]),
                      i && l.length > 0)
                    ) {
                      let e = Math.min(n, l.length - 1);
                      (l[e].isActive = !0), o(l[e].url);
                    }
                    a(l);
                  },
                  onNewTab: () => {
                    let e = {
                      id: Date.now().toString(),
                      title: "New Tab",
                      url: "browser://newtab",
                      isActive: !1,
                      isLoading: !1,
                      content: "home",
                      canGoBack: !1,
                      canGoForward: !1,
                    };
                    a((t) =>
                      t
                        .map((e) => ({ ...e, isActive: !1 }))
                        .concat({ ...e, isActive: !0 })
                    ),
                      o("browser://newtab");
                  },
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex items-center gap-2 p-2 bg-background ".concat(
                      "dark" === C
                        ? "border-t border-white/20"
                        : "gray" === C
                        ? "border-t border-border"
                        : ""
                    ),
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center gap-1 flex-shrink-0",
                      children: [
                        (0, n.jsx)(x, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "h-8 w-8 p-0 text-foreground hover:text-primary disabled:opacity-40",
                          disabled: !(null == Z ? void 0 : Z.canGoBack),
                          onClick: () => {
                            try {
                              let t = r.find((e) => e.isActive),
                                s = t ? e.current[t.id] : null;
                              (null == s ? void 0 : s.goBack) && s.goBack();
                            } catch (e) {}
                          },
                          children: (0, n.jsx)(f.Z, { className: "h-4 w-4" }),
                        }),
                        (0, n.jsx)(x, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "h-8 w-8 p-0 text-foreground hover:text-primary disabled:opacity-40",
                          disabled: !(null == Z ? void 0 : Z.canGoForward),
                          onClick: () => {
                            try {
                              let t = r.find((e) => e.isActive),
                                s = t ? e.current[t.id] : null;
                              (null == s ? void 0 : s.goForward) &&
                                s.goForward();
                            } catch (e) {}
                          },
                          children: (0, n.jsx)(p.Z, { className: "h-4 w-4" }),
                        }),
                        (0, n.jsx)(x, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "h-8 w-8 p-0 text-foreground hover:text-primary",
                          onClick: () => {
                            if (Z && !Z.url.startsWith("browser://")) {
                              D(Z.id);
                              try {
                                var t;
                                let s = e.current[Z.id];
                                null == s ||
                                  null === (t = s.reload) ||
                                  void 0 === t ||
                                  t.call(s);
                              } catch (e) {}
                            }
                          },
                          children: (0, n.jsx)(v.Z, { className: "h-4 w-4" }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("form", {
                      onSubmit: (t) => {
                        if (
                          (t.preventDefault(), !l.startsWith("browser://") && Z)
                        ) {
                          D(Z.id);
                          let t = l,
                            s = "Website";
                          if (
                            l.startsWith("http://") ||
                            l.startsWith("https://") ||
                            (l.includes(".") &&
                              !l.includes(" ") &&
                              l.split(".").length >= 2)
                          ) {
                            l.startsWith("http://") ||
                              l.startsWith("https://") ||
                              (t = "https://" + l);
                            try {
                              s = new URL(t).hostname || "Website";
                            } catch (e) {
                              s =
                                l.length > 30 ? l.substring(0, 30) + "..." : l;
                            }
                          } else
                            (t = {
                              google: "https://www.google.com/search?q=".concat(
                                encodeURIComponent(l)
                              ),
                              bing: "https://www.bing.com/search?q=".concat(
                                encodeURIComponent(l)
                              ),
                              duckduckgo: "https://duckduckgo.com/?q=".concat(
                                encodeURIComponent(l)
                              ),
                              yahoo:
                                "https://search.yahoo.com/search?p=".concat(
                                  encodeURIComponent(l)
                                ),
                            }[S]),
                              (s = "Search: ".concat(l));
                          a((e) =>
                            e.map((e) =>
                              e.isActive
                                ? {
                                    ...e,
                                    title: s,
                                    isLoading: !0,
                                    content: "external",
                                    url: t,
                                  }
                                : e
                            )
                          ),
                            o(t);
                          try {
                            let s = r.find((e) => e.isActive);
                            if (s) {
                              let r = e.current[s.id];
                              (null == r ? void 0 : r.loadURL) && r.loadURL(t);
                            }
                          } catch (e) {}
                        }
                      },
                      className: "flex-1",
                      children: (0, n.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, n.jsx)(h, {
                            value: "browser://newtab" === l ? "" : l,
                            onChange: (e) => o(e.target.value),
                            placeholder: "Search or enter address",
                            className:
                              "w-full pl-10 pr-4 h-9 bg-muted/50 focus:bg-background text-foreground placeholder:text-muted-foreground ".concat(
                                "dark" === C
                                  ? "border border-white/20"
                                  : "gray" === C
                                  ? "border border-border"
                                  : "border-border/50"
                              ),
                          }),
                          (0, n.jsx)(b.Z, {
                            className:
                              "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(x, {
                      variant: "ghost",
                      size: "sm",
                      className:
                        "h-8 w-8 p-0 flex-shrink-0 ml-2 text-foreground hover:text-primary",
                      onClick: () => {
                        a((e) =>
                          e.map((e) =>
                            e.isActive
                              ? {
                                  ...e,
                                  url: "browser://newtab",
                                  title: "New Tab",
                                  content: "home",
                                  isLoading: !1,
                                }
                              : e
                          )
                        ),
                          o("browser://newtab");
                      },
                      children: (0, n.jsx)(w.Z, { className: "h-4 w-4" }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, n.jsx)(x, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "h-8 w-8 p-0 flex-shrink-0 ml-1 text-foreground hover:text-primary",
                          onClick: () => {
                            console.log("Custom dropdown toggle clicked!"),
                              m(!u);
                          },
                          children: (0, n.jsx)(j.Z, { className: "h-4 w-4" }),
                        }),
                        u &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("div", {
                                className: "fixed inset-0 z-[99998]",
                                onClick: () => m(!1),
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "absolute top-full right-0 mt-1 w-48 bg-popover border rounded-md shadow-lg z-[99999] p-1",
                                style: { zIndex: 999999 },
                                children: [
                                  (0, n.jsxs)("button", {
                                    className:
                                      "flex items-center w-full text-left px-2 py-1.5 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm",
                                    onClick: () => {
                                      console.log("Downloads clicked"),
                                        T("downloads"),
                                        m(!1);
                                    },
                                    children: [
                                      (0, n.jsx)(N.Z, {
                                        className: "h-4 w-4 mr-2",
                                      }),
                                      "Downloads",
                                    ],
                                  }),
                                  (0, n.jsxs)("button", {
                                    className:
                                      "flex items-center w-full text-left px-2 py-1.5 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm",
                                    onClick: () => {
                                      console.log("History clicked"),
                                        T("history"),
                                        m(!1);
                                    },
                                    children: [
                                      (0, n.jsx)(y.Z, {
                                        className: "h-4 w-4 mr-2",
                                      }),
                                      "History",
                                    ],
                                  }),
                                  (0, n.jsxs)("button", {
                                    className:
                                      "flex items-center w-full text-left px-2 py-1.5 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm",
                                    onClick: () => {
                                      console.log("Settings clicked"),
                                        m(!1),
                                        c(!0);
                                    },
                                    children: [
                                      (0, n.jsx)(k.Z, {
                                        className: "h-4 w-4 mr-2",
                                      }),
                                      "Settings",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "flex-1 overflow-auto bg-background",
              children: r.length
                ? (0, n.jsx)("div", {
                    className: "h-full w-full relative",
                    children: r.map((t) =>
                      (0, n.jsxs)(
                        "div",
                        {
                          style: { display: t.isActive ? "block" : "none" },
                          className: "h-full w-full",
                          children: [
                            "home" === t.content &&
                              (0, n.jsx)(F, {
                                onSearch: (s) => {
                                  a((e) =>
                                    e.map((e) =>
                                      e.id === t.id
                                        ? {
                                            ...e,
                                            title: "Search Results",
                                            isLoading: !0,
                                            content: "external",
                                            url: s,
                                          }
                                        : e
                                    )
                                  ),
                                    o(s),
                                    D(t.id);
                                  try {
                                    var r;
                                    let a = e.current[t.id];
                                    null == a ||
                                      null === (r = a.loadURL) ||
                                      void 0 === r ||
                                      r.call(a, s);
                                  } catch (e) {}
                                },
                                searchEngine: S,
                              }),
                            "downloads" === t.content && (0, n.jsx)(ed, {}),
                            "history" === t.content &&
                              (0, n.jsx)(eh, {
                                onOpenUrl: (t) => {
                                  var s;
                                  a((e) =>
                                    e.map((e) =>
                                      e.isActive
                                        ? {
                                            ...e,
                                            content: "external",
                                            url: t,
                                            isLoading: !0,
                                          }
                                        : e
                                    )
                                  ),
                                    o(t);
                                  let n = r.find((e) => e.isActive);
                                  n && D(n.id);
                                  let i = n ? e.current[n.id] : null;
                                  null == i ||
                                    null === (s = i.loadURL) ||
                                    void 0 === s ||
                                    s.call(i, t);
                                },
                              }),
                            "external" === t.content &&
                              (0, n.jsxs)("div", {
                                className:
                                  "h-full w-full bg-background relative electron-webview-container",
                                children: [
                                  (0, n.jsx)("webview", {
                                    ref: (s) => {
                                      (e.current[t.id] = s),
                                        s ? R(t.id, s) : B(t.id);
                                    },
                                    src: t.url,
                                    style: {
                                      width: "100%",
                                      height: "100%",
                                      border: "0",
                                    },
                                    allowpopups: !0,
                                  }),
                                  t.isLoading &&
                                    (0, n.jsx)("div", {
                                      className:
                                        "absolute inset-0 flex items-center justify-center bg-background/70 pointer-events-none",
                                      children: (0, n.jsxs)("div", {
                                        className: "text-center p-8",
                                        children: [
                                          (0, n.jsx)(g.Z, {
                                            className:
                                              "h-12 w-12 animate-spin text-primary mx-auto mb-4",
                                          }),
                                          (0, n.jsx)("div", {
                                            className:
                                              "text-2xl font-semibold text-foreground mb-2",
                                            children: "Loading...",
                                          }),
                                          (0, n.jsx)("p", {
                                            className: "text-muted-foreground",
                                            children:
                                              "Please wait while we load the page",
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                          ],
                        },
                        t.id
                      )
                    ),
                  })
                : null,
            }),
            (0, n.jsx)(eG, {
              isOpen: d,
              onClose: () => c(!1),
              theme: C,
              searchEngine: S,
              onThemeChange: L,
              onSearchEngineChange: E,
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [114, 971, 117, 744], function () {
      return e((e.s = 2604));
    }),
      (_N_E = e.O());
  },
]);
