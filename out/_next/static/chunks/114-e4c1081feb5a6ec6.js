"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [114],
  {
    5478: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return c;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        i = {},
        l = 0,
        a = function (e) {
          return e && (e.host || a(e.parentNode));
        },
        s = function (e, t, n, s) {
          var c = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = a(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var u = i[n],
            d = [],
            f = new Set(),
            p = new Set(c),
            m = function (e) {
              !e || f.has(e) || (f.add(e), m(e.parentNode));
            };
          c.forEach(m);
          var h = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) h(e);
                else
                  try {
                    var t = e.getAttribute(s),
                      i = null !== t && "false" !== t,
                      l = (r.get(e) || 0) + 1,
                      a = (u.get(e) || 0) + 1;
                    r.set(e, l),
                      u.set(e, a),
                      d.push(e),
                      1 === l && i && o.set(e, !0),
                      1 === a && e.setAttribute(n, "true"),
                      i || e.setAttribute(s, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            h(t),
            f.clear(),
            l++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  i = u.get(e) - 1;
                r.set(e, t),
                  u.set(e, i),
                  t || (o.has(e) || e.removeAttribute(s), o.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --l ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        c = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(
                r,
                Array.from(o.querySelectorAll("[aria-live], script"))
              ),
              s(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    9205: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(2265);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var l = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let a = (0, r.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: o = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: s,
            className: c = "",
            children: u,
            iconNode: d,
            ...f
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...l,
              width: o,
              height: o,
              stroke: n,
              strokeWidth: s ? (24 * Number(a)) / Number(o) : a,
              className: i("lucide", c),
              ...f,
            },
            [
              ...d.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(u) ? u : [u]),
            ]
          );
        }),
        s = (e, t) => {
          let n = (0, r.forwardRef)((n, l) => {
            let { className: s, ...c } = n;
            return (0, r.createElement)(a, {
              ref: l,
              iconNode: t,
              className: i("lucide-".concat(o(e)), s),
              ...c,
            });
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    9334: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Archive", [
        [
          "rect",
          { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" },
        ],
        [
          "path",
          { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" },
        ],
        ["path", { d: "M10 12h4", key: "a56b0p" }],
      ]);
    },
    1047: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Calendar", [
        ["path", { d: "M8 2v4", key: "1cmpym" }],
        ["path", { d: "M16 2v4", key: "4m81vk" }],
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
        ],
        ["path", { d: "M3 10h18", key: "8toen8" }],
      ]);
    },
    401: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    875: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    2451: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("ChevronLeft", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]);
    },
    407: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    2135: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("ChevronUp", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
      ]);
    },
    1723: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Clock", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
      ]);
    },
    2735: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Download", [
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
        ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
        ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
      ]);
    },
    6362: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("ExternalLink", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    },
    8736: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("FileText", [
        [
          "path",
          {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7",
          },
        ],
        ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
        ["path", { d: "M10 9H8", key: "b1mrlr" }],
        ["path", { d: "M16 13H8", key: "t4e002" }],
        ["path", { d: "M16 17H8", key: "z1uh3a" }],
      ]);
    },
    6475: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("FolderOpen", [
        [
          "path",
          {
            d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
            key: "usdka0",
          },
        ],
      ]);
    },
    9202: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
    },
    5621: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("History", [
        [
          "path",
          {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3",
          },
        ],
        ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
        ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
      ]);
    },
    4938: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("House", [
        [
          "path",
          { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
        ],
        [
          "path",
          {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt",
          },
        ],
      ]);
    },
    3113: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Image", [
        [
          "rect",
          {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2",
            key: "1m3agn",
          },
        ],
        ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
        [
          "path",
          { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" },
        ],
      ]);
    },
    3245: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
      ]);
    },
    1817: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    8293: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
    2106: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Music", [
        ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
        ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
        ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
      ]);
    },
    2805: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Palette", [
        [
          "circle",
          {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w",
          },
        ],
        [
          "circle",
          {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f",
          },
        ],
        [
          "circle",
          {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn",
          },
        ],
        [
          "circle",
          {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx",
          },
        ],
        [
          "path",
          {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8",
          },
        ],
      ]);
    },
    9227: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Pause", [
        [
          "rect",
          { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
        ],
        [
          "rect",
          { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
        ],
      ]);
    },
    3276: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Play", [
        ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
      ]);
    },
    9397: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    9076: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("RotateCcw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3",
          },
        ],
        ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
      ]);
    },
    3247: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    8728: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Settings", [
        [
          "path",
          {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ]);
    },
    8906: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Shield", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
      ]);
    },
    8930: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Trash2", [
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
      ]);
    },
    9374: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Video", [
        [
          "path",
          {
            d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
            key: "ftymec",
          },
        ],
        [
          "rect",
          { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
        ],
      ]);
    },
    2489: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    1239: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(9205).Z)("Zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]);
    },
    9157: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Y;
        },
      });
      var r,
        o,
        i,
        l,
        a,
        s,
        c,
        u = function () {
          return (u =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function d(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var f = n(2265),
        p = "right-scroll-bar-position",
        m = "width-before-scroll-bar";
      function h(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var v = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect,
        g = new WeakMap(),
        y =
          (void 0 === o && (o = {}),
          ((void 0 === i &&
            (i = function (e) {
              return e;
            }),
          (l = []),
          (a = !1),
          (s = {
            read: function () {
              if (a)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return l.length ? l[l.length - 1] : null;
            },
            useMedium: function (e) {
              var t = i(e, a);
              return (
                l.push(t),
                function () {
                  l = l.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (a = !0; l.length; ) {
                var t = l;
                (l = []), t.forEach(e);
              }
              l = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return l;
                },
              };
            },
            assignMedium: function (e) {
              a = !0;
              var t = [];
              if (l.length) {
                var n = l;
                (l = []), n.forEach(e), (t = l);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (l = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), l;
                  },
                });
            },
          })).options = u({ async: !0, ssr: !1 }, o)),
          s),
        b = function () {},
        w = f.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            l = f.useRef(null),
            a = f.useState({
              onScrollCapture: b,
              onWheelCapture: b,
              onTouchMoveCapture: b,
            }),
            s = a[0],
            c = a[1],
            p = e.forwardProps,
            m = e.children,
            w = e.className,
            x = e.removeScrollBar,
            k = e.enabled,
            E = e.shards,
            C = e.sideCar,
            S = e.noRelative,
            M = e.noIsolation,
            R = e.inert,
            N = e.allowPinchZoom,
            j = e.as,
            P = e.gapMode,
            T = d(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            A =
              ((n = [l, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return h(t, e);
                });
              }),
              ((o = (0, f.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              v(
                function () {
                  var e = g.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || h(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || h(e, o);
                      });
                  }
                  g.set(i, n);
                },
                [n]
              ),
              i),
            D = u(u({}, T), s);
          return f.createElement(
            f.Fragment,
            null,
            k &&
              f.createElement(C, {
                sideCar: y,
                removeScrollBar: x,
                shards: E,
                noRelative: S,
                noIsolation: M,
                inert: R,
                setCallbacks: c,
                allowPinchZoom: !!N,
                lockRef: l,
                gapMode: P,
              }),
            p
              ? f.cloneElement(f.Children.only(m), u(u({}, D), { ref: A }))
              : f.createElement(
                  void 0 === j ? "div" : j,
                  u({}, D, { className: w, ref: A }),
                  m
                )
          );
        });
      (w.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (w.classNames = { fullWidth: m, zeroRight: p });
      var x = function (e) {
        var t = e.sideCar,
          n = d(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return f.createElement(r, u({}, n));
      };
      x.isSideCarExport = !0;
      var k = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, l;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (l = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(l);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        E = function () {
          var e = k();
          return function (t, n) {
            f.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        C = function () {
          var e = E();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        S = { left: 0, top: 0, right: 0, gap: 0 },
        M = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        R = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [M(n), M(r), M(o)];
        },
        N = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return S;
          var t = R(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        j = C(),
        P = "data-scroll-locked",
        T = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            l = e.right,
            a = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(P, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        l,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(a, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(a, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(p, " {\n    right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(m, " {\n    margin-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(p, " .")
              .concat(p, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(m, " .")
              .concat(m, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(P, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(a, "px;\n  }\n")
          );
        },
        A = function () {
          var e = parseInt(document.body.getAttribute(P) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        D = function () {
          f.useEffect(function () {
            return (
              document.body.setAttribute(P, (A() + 1).toString()),
              function () {
                var e = A() - 1;
                e <= 0
                  ? document.body.removeAttribute(P)
                  : document.body.setAttribute(P, e.toString());
              }
            );
          }, []);
        },
        L = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          D();
          var i = f.useMemo(
            function () {
              return N(o);
            },
            [o]
          );
          return f.createElement(j, {
            styles: T(i, !t, o, n ? "" : "!important"),
          });
        },
        O = !1;
      if ("undefined" != typeof window)
        try {
          var W = Object.defineProperty({}, "passive", {
            get: function () {
              return (O = !0), !0;
            },
          });
          window.addEventListener("test", W, W),
            window.removeEventListener("test", W, W);
        } catch (e) {
          O = !1;
        }
      var I = !!O && { passive: !1 },
        z = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        V = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              Z(e, r))
            ) {
              var o = F(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        Z = function (e, t) {
          return "v" === e ? z(t, "overflowY") : z(t, "overflowX");
        },
        F = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        H = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            a = l * r,
            s = n.target,
            c = t.contains(s),
            u = !1,
            d = a > 0,
            f = 0,
            p = 0;
          do {
            if (!s) break;
            var m = F(e, s),
              h = m[0],
              v = m[1] - m[2] - l * h;
            (h || v) && Z(e, s) && ((f += v), (p += h));
            var g = s.parentNode;
            s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
          } while (
            (!c && s !== document.body) ||
            (c && (t.contains(s) || t === s))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && a > f))
              ? (u = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (u = !0),
            u
          );
        },
        _ = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        B = function (e) {
          return [e.deltaX, e.deltaY];
        },
        q = function (e) {
          return e && "current" in e ? e.current : e;
        },
        U = 0,
        $ = [],
        K =
          ((c = function (e) {
            var t = f.useRef([]),
              n = f.useRef([0, 0]),
              r = f.useRef(),
              o = f.useState(U++)[0],
              i = f.useState(C)[0],
              l = f.useRef(e);
            f.useEffect(
              function () {
                l.current = e;
              },
              [e]
            ),
              f.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (function (e, t, n) {
                      if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)),
                            (r[o] = t[o]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([e.lockRef.current], (e.shards || []).map(q), !0).filter(
                      Boolean
                    );
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var a = f.useCallback(function (e, t) {
                if (
                  ("touches" in e && 2 === e.touches.length) ||
                  ("wheel" === e.type && e.ctrlKey)
                )
                  return !l.current.allowPinchZoom;
                var o,
                  i = _(e),
                  a = n.current,
                  s = "deltaX" in e ? e.deltaX : a[0] - i[0],
                  c = "deltaY" in e ? e.deltaY : a[1] - i[1],
                  u = e.target,
                  d = Math.abs(s) > Math.abs(c) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === u.type)
                  return !1;
                var f = V(d, u);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = V(d, u))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (s || c) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return H(p, t, e, "h" === p ? s : c, !0);
              }, []),
              s = f.useCallback(function (e) {
                if ($.length && $[$.length - 1] === i) {
                  var n = "deltaY" in e ? B(e) : _(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        (t.target === e.target ||
                          e.target === t.shadowParent) &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (l.current.shards || [])
                      .map(q)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? a(e, o[0]) : !l.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              c = f.useCallback(function (e, n, r, o) {
                var i = {
                  name: e,
                  delta: n,
                  target: r,
                  should: o,
                  shadowParent: (function (e) {
                    for (var t = null; null !== e; )
                      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                        (e = e.parentNode);
                    return t;
                  })(r),
                };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              u = f.useCallback(function (e) {
                (n.current = _(e)), (r.current = void 0);
              }, []),
              d = f.useCallback(function (t) {
                c(t.type, B(t), t.target, a(t, e.lockRef.current));
              }, []),
              p = f.useCallback(function (t) {
                c(t.type, _(t), t.target, a(t, e.lockRef.current));
              }, []);
            f.useEffect(function () {
              return (
                $.push(i),
                e.setCallbacks({
                  onScrollCapture: d,
                  onWheelCapture: d,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener("wheel", s, I),
                document.addEventListener("touchmove", s, I),
                document.addEventListener("touchstart", u, I),
                function () {
                  ($ = $.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener("wheel", s, I),
                    document.removeEventListener("touchmove", s, I),
                    document.removeEventListener("touchstart", u, I);
                }
              );
            }, []);
            var m = e.removeScrollBar,
              h = e.inert;
            return f.createElement(
              f.Fragment,
              null,
              h
                ? f.createElement(i, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              m
                ? f.createElement(L, {
                    noRelative: e.noRelative,
                    gapMode: e.gapMode,
                  })
                : null
            );
          }),
          y.useMedium(c),
          x),
        X = f.forwardRef(function (e, t) {
          return f.createElement(w, u({}, e, { ref: t, sideCar: K }));
        });
      X.classNames = w.classNames;
      var Y = X;
    },
    6741: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    8575: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
        e: function () {
          return l;
        },
      });
      var r = n(2265);
      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function i(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = o(e, t);
              return n || "function" != typeof r || (n = !0), r;
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                "function" == typeof n ? n() : o(e[t], null);
              }
            };
        };
      }
      function l(...e) {
        return r.useCallback(i(...e), e);
      }
    },
    3966: function (e, t, n) {
      n.d(t, {
        b: function () {
          return l;
        },
        k: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(7437);
      function i(e, t) {
        let n = r.createContext(t),
          i = (e) => {
            let { children: t, ...i } = e,
              l = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(n.Provider, { value: l, children: t });
          };
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = r.useContext(n);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function l(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let l = r.createContext(i),
                a = n.length;
              n = [...n, i];
              let s = (t) => {
                let { scope: n, children: i, ...s } = t,
                  c = n?.[e]?.[a] || l,
                  u = r.useMemo(() => s, Object.values(s));
                return (0, o.jsx)(c.Provider, { value: u, children: i });
              };
              return (
                (s.displayName = t + "Provider"),
                [
                  s,
                  function (n, o) {
                    let s = o?.[e]?.[a] || l,
                      c = r.useContext(s);
                    if (c) return c;
                    if (void 0 !== i) return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(i, ...t),
          ]
        );
      }
    },
    4098: function (e, t, n) {
      n.d(t, {
        x8: function () {
          return en;
        },
        VY: function () {
          return ee;
        },
        aV: function () {
          return Q;
        },
        h_: function () {
          return J;
        },
        fC: function () {
          return G;
        },
        Dx: function () {
          return et;
        },
      });
      var r = n(2265),
        o = n(6741),
        i = n(8575),
        l = n(3966),
        a = n(9255),
        s = n(886),
        c = n(5278),
        u = n(9103),
        d = n(3832),
        f = n(1188),
        p = (e) => {
          var t, n;
          let o, l;
          let { present: a, children: s } = e,
            c = (function (e) {
              var t, n;
              let [o, i] = r.useState(),
                l = r.useRef({}),
                a = r.useRef(e),
                s = r.useRef("none"),
                [c, u] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = m(l.current);
                  s.current = "mounted" === c ? e : "none";
                }, [c]),
                (0, f.b)(() => {
                  let t = l.current,
                    n = a.current;
                  if (n !== e) {
                    let r = s.current,
                      o = m(t);
                    e
                      ? u("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? u("UNMOUNT")
                      : n && r !== o
                      ? u("ANIMATION_OUT")
                      : u("UNMOUNT"),
                      (a.current = e);
                  }
                }, [e, u]),
                (0, f.b)(() => {
                  if (o) {
                    var e;
                    let t;
                    let n =
                        null !== (e = o.ownerDocument.defaultView) &&
                        void 0 !== e
                          ? e
                          : window,
                      r = (e) => {
                        let r = m(l.current).includes(e.animationName);
                        if (
                          e.target === o &&
                          r &&
                          (u("ANIMATION_END"), !a.current)
                        ) {
                          let e = o.style.animationFillMode;
                          (o.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = e);
                            }));
                        }
                      },
                      i = (e) => {
                        e.target === o && (s.current = m(l.current));
                      };
                    return (
                      o.addEventListener("animationstart", i),
                      o.addEventListener("animationcancel", r),
                      o.addEventListener("animationend", r),
                      () => {
                        n.clearTimeout(t),
                          o.removeEventListener("animationstart", i),
                          o.removeEventListener("animationcancel", r),
                          o.removeEventListener("animationend", r);
                      }
                    );
                  }
                  u("ANIMATION_END");
                }, [o, u]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(c),
                  ref: r.useCallback((e) => {
                    e && (l.current = getComputedStyle(e)), i(e);
                  }, []),
                }
              );
            })(a),
            u =
              "function" == typeof s
                ? s({ present: c.isPresent })
                : r.Children.only(s),
            d = (0, i.e)(
              c.ref,
              (o =
                null ===
                  (t = Object.getOwnPropertyDescriptor(u.props, "ref")) ||
                void 0 === t
                  ? void 0
                  : t.get) &&
                "isReactWarning" in o &&
                o.isReactWarning
                ? u.ref
                : (o =
                    null === (n = Object.getOwnPropertyDescriptor(u, "ref")) ||
                    void 0 === n
                      ? void 0
                      : n.get) &&
                  "isReactWarning" in o &&
                  o.isReactWarning
                ? u.props.ref
                : u.props.ref || u.ref
            );
          return "function" == typeof s || c.isPresent
            ? r.cloneElement(u, { ref: d })
            : null;
        };
      function m(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      p.displayName = "Presence";
      var h = n(6840),
        v = n(6097),
        g = n(9157),
        y = n(5478),
        b = n(7053),
        w = n(7437),
        x = "Dialog",
        [k, E] = (0, l.b)(x),
        [C, S] = k(x),
        M = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: o,
              defaultOpen: i,
              onOpenChange: l,
              modal: c = !0,
            } = e,
            u = r.useRef(null),
            d = r.useRef(null),
            [f = !1, p] = (0, s.T)({ prop: o, defaultProp: i, onChange: l });
          return (0, w.jsx)(C, {
            scope: t,
            triggerRef: u,
            contentRef: d,
            contentId: (0, a.M)(),
            titleId: (0, a.M)(),
            descriptionId: (0, a.M)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p((e) => !e), [p]),
            modal: c,
            children: n,
          });
        };
      M.displayName = x;
      var R = "DialogTrigger";
      r.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          l = S(R, n),
          a = (0, i.e)(t, l.triggerRef);
        return (0, w.jsx)(h.WV.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": l.open,
          "aria-controls": l.contentId,
          "data-state": q(l.open),
          ...r,
          ref: a,
          onClick: (0, o.M)(e.onClick, l.onOpenToggle),
        });
      }).displayName = R;
      var N = "DialogPortal",
        [j, P] = k(N, { forceMount: void 0 }),
        T = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: o,
              container: i,
            } = e,
            l = S(N, t);
          return (0, w.jsx)(j, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, (e) =>
              (0, w.jsx)(p, {
                present: n || l.open,
                children: (0, w.jsx)(d.h, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      T.displayName = N;
      var A = "DialogOverlay",
        D = r.forwardRef((e, t) => {
          let n = P(A, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = S(A, e.__scopeDialog);
          return i.modal
            ? (0, w.jsx)(p, {
                present: r || i.open,
                children: (0, w.jsx)(L, { ...o, ref: t }),
              })
            : null;
        });
      D.displayName = A;
      var L = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = S(A, n);
          return (0, w.jsx)(g.Z, {
            as: b.g7,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, w.jsx)(h.WV.div, {
              "data-state": q(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        O = "DialogContent",
        W = r.forwardRef((e, t) => {
          let n = P(O, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = S(O, e.__scopeDialog);
          return (0, w.jsx)(p, {
            present: r || i.open,
            children: i.modal
              ? (0, w.jsx)(I, { ...o, ref: t })
              : (0, w.jsx)(z, { ...o, ref: t }),
          });
        });
      W.displayName = O;
      var I = r.forwardRef((e, t) => {
          let n = S(O, e.__scopeDialog),
            l = r.useRef(null),
            a = (0, i.e)(t, n.contentRef, l);
          return (
            r.useEffect(() => {
              let e = l.current;
              if (e) return (0, y.Ry)(e);
            }, []),
            (0, w.jsx)(V, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: (0, o.M)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, o.M)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        z = r.forwardRef((e, t) => {
          let n = S(O, e.__scopeDialog),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, w.jsx)(V, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var r, l;
              null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t),
                t.defaultPrevented ||
                  (o.current ||
                    null === (l = n.triggerRef.current) ||
                    void 0 === l ||
                    l.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var r, l;
              null === (r = e.onInteractOutside) ||
                void 0 === r ||
                r.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let a = t.target;
              (null === (l = n.triggerRef.current) || void 0 === l
                ? void 0
                : l.contains(a)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        V = r.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: o,
              onOpenAutoFocus: l,
              onCloseAutoFocus: a,
              ...s
            } = e,
            d = S(O, n),
            f = r.useRef(null),
            p = (0, i.e)(t, f);
          return (
            (0, v.EW)(),
            (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(u.M, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: l,
                  onUnmountAutoFocus: a,
                  children: (0, w.jsx)(c.XB, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": q(d.open),
                    ...s,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsx)(X, { titleId: d.titleId }),
                    (0, w.jsx)(Y, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        Z = "DialogTitle",
        F = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = S(Z, n);
          return (0, w.jsx)(h.WV.h2, { id: o.titleId, ...r, ref: t });
        });
      F.displayName = Z;
      var H = "DialogDescription";
      r.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          o = S(H, n);
        return (0, w.jsx)(h.WV.p, { id: o.descriptionId, ...r, ref: t });
      }).displayName = H;
      var _ = "DialogClose",
        B = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = S(_, n);
          return (0, w.jsx)(h.WV.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.M)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function q(e) {
        return e ? "open" : "closed";
      }
      B.displayName = _;
      var U = "DialogTitleWarning",
        [$, K] = (0, l.k)(U, {
          contentName: O,
          titleName: Z,
          docsSlug: "dialog",
        }),
        X = (e) => {
          let { titleId: t } = e,
            n = K(U),
            o = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            r.useEffect(() => {
              t && !document.getElementById(t) && console.error(o);
            }, [o, t]),
            null
          );
        },
        Y = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            o = K("DialogDescriptionWarning"),
            i =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                o.contentName,
                "}."
              );
          return (
            r.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && !document.getElementById(n) && console.warn(i);
            }, [i, t, n]),
            null
          );
        },
        G = M,
        J = T,
        Q = D,
        ee = W,
        et = F,
        en = B;
    },
    5278: function (e, t, n) {
      n.d(t, {
        XB: function () {
          return f;
        },
      });
      var r,
        o = n(2265),
        i = n(6741),
        l = n(6840),
        a = n(8575),
        s = n(6606),
        c = n(7437),
        u = "dismissableLayer.update",
        d = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          var n, f;
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: v,
              onPointerDownOutside: g,
              onFocusOutside: y,
              onInteractOutside: b,
              onDismiss: w,
              ...x
            } = e,
            k = o.useContext(d),
            [E, C] = o.useState(null),
            S =
              null !== (f = null == E ? void 0 : E.ownerDocument) &&
              void 0 !== f
                ? f
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, M] = o.useState({}),
            R = (0, a.e)(t, (e) => C(e)),
            N = Array.from(k.layers),
            [j] = [...k.layersWithOutsidePointerEventsDisabled].slice(-1),
            P = N.indexOf(j),
            T = E ? N.indexOf(E) : -1,
            A = k.layersWithOutsidePointerEventsDisabled.size > 0,
            D = T >= P,
            L = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, s.W)(e),
                i = o.useRef(!1),
                l = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            m("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", l.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...k.branches].some((e) => e.contains(t));
              !D ||
                n ||
                (null == g || g(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, S),
            O = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, s.W)(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      m(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...k.branches].some((e) => e.contains(t)) ||
                (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, S);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, s.W)(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              T !== k.layers.size - 1 ||
                (null == v || v(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, S),
            o.useEffect(() => {
              if (E)
                return (
                  h &&
                    (0 === k.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = S.body.style.pointerEvents),
                      (S.body.style.pointerEvents = "none")),
                    k.layersWithOutsidePointerEventsDisabled.add(E)),
                  k.layers.add(E),
                  p(),
                  () => {
                    h &&
                      1 === k.layersWithOutsidePointerEventsDisabled.size &&
                      (S.body.style.pointerEvents = r);
                  }
                );
            }, [E, S, h, k]),
            o.useEffect(
              () => () => {
                E &&
                  (k.layers.delete(E),
                  k.layersWithOutsidePointerEventsDisabled.delete(E),
                  p());
              },
              [E, k]
            ),
            o.useEffect(() => {
              let e = () => M({});
              return (
                document.addEventListener(u, e),
                () => document.removeEventListener(u, e)
              );
            }, []),
            (0, c.jsx)(l.WV.div, {
              ...x,
              ref: R,
              style: {
                pointerEvents: A ? (D ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.M)(e.onFocusCapture, O.onFocusCapture),
              onBlurCapture: (0, i.M)(e.onBlurCapture, O.onBlurCapture),
              onPointerDownCapture: (0, i.M)(
                e.onPointerDownCapture,
                L.onPointerDownCapture
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(u);
        document.dispatchEvent(e);
      }
      function m(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, l.jH)(i, a) : i.dispatchEvent(a);
      }
      (f.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(d),
            r = o.useRef(null),
            i = (0, a.e)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, c.jsx)(l.WV.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
    },
    6097: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return i;
        },
      });
      var r = n(2265),
        o = 0;
      function i() {
        r.useEffect(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : l()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : l()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function l() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
    },
    9103: function (e, t, n) {
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(2265),
        i = n(8575),
        l = n(6840),
        a = n(6606),
        s = n(7437),
        c = "focusScope.autoFocusOnMount",
        u = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = o.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [b, w] = o.useState(null),
            x = (0, a.W)(f),
            k = (0, a.W)(g),
            E = o.useRef(null),
            C = (0, i.e)(t, (e) => w(e)),
            S = o.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          o.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (S.paused || !b) return;
                  let t = e.target;
                  b.contains(t)
                    ? (E.current = t)
                    : h(E.current, { select: !0 });
                },
                t = function (e) {
                  if (S.paused || !b) return;
                  let t = e.relatedTarget;
                  null === t || b.contains(t) || h(E.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && h(b);
              });
              return (
                b && n.observe(b, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, b, S.paused]),
            o.useEffect(() => {
              if (b) {
                v.add(S);
                let e = document.activeElement;
                if (!b.contains(e)) {
                  let t = new CustomEvent(c, d);
                  b.addEventListener(c, x),
                    b.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (h(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        p(b).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && h(b));
                }
                return () => {
                  b.removeEventListener(c, x),
                    setTimeout(() => {
                      let t = new CustomEvent(u, d);
                      b.addEventListener(u, k),
                        b.dispatchEvent(t),
                        t.defaultPrevented ||
                          h(null != e ? e : document.body, { select: !0 }),
                        b.removeEventListener(u, k),
                        v.remove(S);
                    }, 0);
                };
              }
            }, [b, x, k, S]);
          let M = o.useCallback(
            (e) => {
              if ((!n && !r) || S.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = p(e);
                    return [m(t, e), m(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && h(i, { select: !0 }))
                    : (e.preventDefault(), n && h(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, S.paused]
          );
          return (0, s.jsx)(l.WV.div, {
            tabIndex: -1,
            ...y,
            ref: C,
            onKeyDown: M,
          });
        });
      function p(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function m(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function h(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      f.displayName = "FocusScope";
      var v =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function g(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    9255: function (e, t, n) {
      n.d(t, {
        M: function () {
          return s;
        },
      });
      var r,
        o = n(2265),
        i = n(1188),
        l = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function s(e) {
        let [t, n] = o.useState(l());
        return (
          (0, i.b)(() => {
            e || n((e) => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    6394: function (e, t, n) {
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var r = n(2265),
        o = n(6840),
        i = n(7437),
        l = r.forwardRef((e, t) =>
          (0, i.jsx)(o.WV.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              var n;
              t.target.closest("button, input, select, textarea") ||
                (null === (n = e.onMouseDown) || void 0 === n || n.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      l.displayName = "Label";
      var a = l;
    },
    3832: function (e, t, n) {
      n.d(t, {
        h: function () {
          return s;
        },
      });
      var r = n(2265),
        o = n(4887),
        i = n(6840),
        l = n(1188),
        a = n(7437),
        s = r.forwardRef((e, t) => {
          var n, s;
          let { container: c, ...u } = e,
            [d, f] = r.useState(!1);
          (0, l.b)(() => f(!0), []);
          let p =
            c ||
            (d &&
              (null === (s = globalThis) || void 0 === s
                ? void 0
                : null === (n = s.document) || void 0 === n
                ? void 0
                : n.body));
          return p
            ? o.createPortal((0, a.jsx)(i.WV.div, { ...u, ref: t }), p)
            : null;
        });
      s.displayName = "Portal";
    },
    6840: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return a;
        },
        jH: function () {
          return s;
        },
      });
      var r = n(2265),
        o = n(4887),
        i = n(7053),
        l = n(7437),
        a = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              a = r ? i.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(a, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function s(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    610: function (e, t, n) {
      n.d(t, {
        fC: function () {
          return w;
        },
        z$: function () {
          return x;
        },
      });
      var r = n(2265),
        o = n(3966),
        i = n(6840),
        l = n(7437),
        a = "Progress",
        [s, c] = (0, o.b)(a),
        [u, d] = s(a),
        f = r.forwardRef((e, t) => {
          var n, r, o, a;
          let {
            __scopeProgress: s,
            value: c = null,
            max: d,
            getValueLabel: f = h,
            ...p
          } = e;
          (d || 0 === d) &&
            !y(d) &&
            console.error(
              ((n = "".concat(d)),
              (r = "Progress"),
              "Invalid prop `max` of value `"
                .concat(n, "` supplied to `")
                .concat(
                  r,
                  "`. Only numbers greater than 0 are valid max values. Defaulting to `"
                )
                .concat(100, "`."))
            );
          let m = y(d) ? d : 100;
          null === c ||
            b(c, m) ||
            console.error(
              ((o = "".concat(c)),
              (a = "Progress"),
              "Invalid prop `value` of value `"
                .concat(o, "` supplied to `")
                .concat(
                  a,
                  "`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or "
                )
                .concat(
                  100,
                  " if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`."
                ))
            );
          let w = b(c, m) ? c : null,
            x = g(w) ? f(w, m) : void 0;
          return (0, l.jsx)(u, {
            scope: s,
            value: w,
            max: m,
            children: (0, l.jsx)(i.WV.div, {
              "aria-valuemax": m,
              "aria-valuemin": 0,
              "aria-valuenow": g(w) ? w : void 0,
              "aria-valuetext": x,
              role: "progressbar",
              "data-state": v(w, m),
              "data-value": null != w ? w : void 0,
              "data-max": m,
              ...p,
              ref: t,
            }),
          });
        });
      f.displayName = a;
      var p = "ProgressIndicator",
        m = r.forwardRef((e, t) => {
          var n;
          let { __scopeProgress: r, ...o } = e,
            a = d(p, r);
          return (0, l.jsx)(i.WV.div, {
            "data-state": v(a.value, a.max),
            "data-value": null !== (n = a.value) && void 0 !== n ? n : void 0,
            "data-max": a.max,
            ...o,
            ref: t,
          });
        });
      function h(e, t) {
        return "".concat(Math.round((e / t) * 100), "%");
      }
      function v(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading";
      }
      function g(e) {
        return "number" == typeof e;
      }
      function y(e) {
        return g(e) && !isNaN(e) && e > 0;
      }
      function b(e, t) {
        return g(e) && !isNaN(e) && e <= t && e >= 0;
      }
      m.displayName = p;
      var w = f,
        x = m;
    },
    822: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return na;
        },
        JO: function () {
          return ni;
        },
        ck: function () {
          return nc;
        },
        wU: function () {
          return nd;
        },
        eT: function () {
          return nu;
        },
        h_: function () {
          return nl;
        },
        fC: function () {
          return nn;
        },
        $G: function () {
          return np;
        },
        u_: function () {
          return nf;
        },
        xz: function () {
          return nr;
        },
        B4: function () {
          return no;
        },
        l_: function () {
          return ns;
        },
      });
      var r = n(2265),
        o = n(4887);
      function i(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var l = n(6741),
        a = n(3966),
        s = n(8575),
        c = n(7053),
        u = n(7437),
        d = r.createContext(void 0),
        f = n(5278),
        p = n(6097),
        m = n(9103),
        h = n(9255);
      let v = ["top", "right", "bottom", "left"],
        g = Math.min,
        y = Math.max,
        b = Math.round,
        w = Math.floor,
        x = (e) => ({ x: e, y: e }),
        k = { left: "right", right: "left", bottom: "top", top: "bottom" },
        E = { start: "end", end: "start" };
      function C(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function S(e) {
        return e.split("-")[0];
      }
      function M(e) {
        return e.split("-")[1];
      }
      function R(e) {
        return "x" === e ? "y" : "x";
      }
      function N(e) {
        return "y" === e ? "height" : "width";
      }
      let j = new Set(["top", "bottom"]);
      function P(e) {
        return j.has(S(e)) ? "y" : "x";
      }
      function T(e) {
        return e.replace(/start|end/g, (e) => E[e]);
      }
      let A = ["left", "right"],
        D = ["right", "left"],
        L = ["top", "bottom"],
        O = ["bottom", "top"];
      function W(e) {
        return e.replace(/left|right|bottom|top/g, (e) => k[e]);
      }
      function I(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function z(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function V(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = P(t),
          a = R(P(t)),
          s = N(a),
          c = S(t),
          u = "y" === l,
          d = o.x + o.width / 2 - i.width / 2,
          f = o.y + o.height / 2 - i.height / 2,
          p = o[s] / 2 - i[s] / 2;
        switch (c) {
          case "top":
            r = { x: d, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - i.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (M(t)) {
          case "start":
            r[a] -= p * (n && u ? -1 : 1);
            break;
          case "end":
            r[a] += p * (n && u ? -1 : 1);
        }
        return r;
      }
      let Z = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          s = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          c = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: u, y: d } = V(c, r, s),
          f = r,
          p = {},
          m = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: h } = a[n],
            {
              x: v,
              y: g,
              data: y,
              reset: b,
            } = await h({
              x: u,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (u = null != v ? v : u),
            (d = null != g ? g : d),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            b &&
              m <= 50 &&
              (m++,
              "object" == typeof b &&
                (b.placement && (f = b.placement),
                b.rects &&
                  (c =
                    !0 === b.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : b.rects),
                ({ x: u, y: d } = V(c, f, s))),
              (n = -1));
        }
        return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function F(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: u = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = C(t, e),
          m = I(p),
          h = a[f ? ("floating" === d ? "reference" : "floating") : d],
          v = z(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: c,
              rootBoundary: u,
              strategy: s,
            })
          ),
          g =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          b = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          w = z(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: g,
                  offsetParent: y,
                  strategy: s,
                })
              : g
          );
        return {
          top: (v.top - w.top + m.top) / b.y,
          bottom: (w.bottom - v.bottom + m.bottom) / b.y,
          left: (v.left - w.left + m.left) / b.x,
          right: (w.right - v.right + m.right) / b.x,
        };
      }
      function H(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function _(e) {
        return v.some((t) => e[t] >= 0);
      }
      let B = new Set(["left", "top"]);
      async function q(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = S(n),
          a = M(n),
          s = "y" === P(n),
          c = B.has(l) ? -1 : 1,
          u = i && s ? -1 : 1,
          d = C(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: m,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          a && "number" == typeof m && (p = "end" === a ? -1 * m : m),
          s ? { x: p * u, y: f * c } : { x: f * c, y: p * u }
        );
      }
      function U() {
        return "undefined" != typeof window;
      }
      function $(e) {
        return Y(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function K(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function X(e) {
        var t;
        return null ==
          (t = (Y(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function Y(e) {
        return !!U() && (e instanceof Node || e instanceof K(e).Node);
      }
      function G(e) {
        return !!U() && (e instanceof Element || e instanceof K(e).Element);
      }
      function J(e) {
        return (
          !!U() && (e instanceof HTMLElement || e instanceof K(e).HTMLElement)
        );
      }
      function Q(e) {
        return (
          !!U() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof K(e).ShadowRoot)
        );
      }
      let ee = new Set(["inline", "contents"]);
      function et(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = ef(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ee.has(o);
      }
      let en = new Set(["table", "td", "th"]),
        er = [":popover-open", ":modal"];
      function eo(e) {
        return er.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      let ei = ["transform", "translate", "scale", "rotate", "perspective"],
        el = [
          "transform",
          "translate",
          "scale",
          "rotate",
          "perspective",
          "filter",
        ],
        ea = ["paint", "layout", "strict", "content"];
      function es(e) {
        let t = ec(),
          n = G(e) ? ef(e) : e;
        return (
          ei.some((e) => !!n[e] && "none" !== n[e]) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          el.some((e) => (n.willChange || "").includes(e)) ||
          ea.some((e) => (n.contain || "").includes(e))
        );
      }
      function ec() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      let eu = new Set(["html", "body", "#document"]);
      function ed(e) {
        return eu.has($(e));
      }
      function ef(e) {
        return K(e).getComputedStyle(e);
      }
      function ep(e) {
        return G(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function em(e) {
        if ("html" === $(e)) return e;
        let t = e.assignedSlot || e.parentNode || (Q(e) && e.host) || X(e);
        return Q(t) ? t.host : t;
      }
      function eh(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = em(t);
            return ed(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : J(n) && et(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = K(o);
        if (i) {
          let e = ev(l);
          return t.concat(
            l,
            l.visualViewport || [],
            et(o) ? o : [],
            e && n ? eh(e) : []
          );
        }
        return t.concat(o, eh(o, [], n));
      }
      function ev(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function eg(e) {
        let t = ef(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = J(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          a = b(n) !== i || b(r) !== l;
        return a && ((n = i), (r = l)), { width: n, height: r, $: a };
      }
      function ey(e) {
        return G(e) ? e : e.contextElement;
      }
      function eb(e) {
        let t = ey(e);
        if (!J(t)) return x(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = eg(t),
          l = (i ? b(n.width) : n.width) / r,
          a = (i ? b(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      let ew = x(0);
      function ex(e) {
        let t = K(e);
        return ec() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : ew;
      }
      function ek(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = ey(e),
          a = x(1);
        t && (r ? G(r) && (a = eb(r)) : (a = eb(e)));
        let s = (void 0 === (o = n) && (o = !1), r && (!o || r === K(l)) && o)
            ? ex(l)
            : x(0),
          c = (i.left + s.x) / a.x,
          u = (i.top + s.y) / a.y,
          d = i.width / a.x,
          f = i.height / a.y;
        if (l) {
          let e = K(l),
            t = r && G(r) ? K(r) : r,
            n = e,
            o = ev(n);
          for (; o && r && t !== n; ) {
            let e = eb(o),
              t = o.getBoundingClientRect(),
              r = ef(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (u *= e.y),
              (d *= e.x),
              (f *= e.y),
              (c += i),
              (u += l),
              (o = ev((n = K(o))));
          }
        }
        return z({ width: d, height: f, x: c, y: u });
      }
      function eE(e, t) {
        let n = ep(e).scrollLeft;
        return t ? t.left + n : ek(X(e)).left + n;
      }
      function eC(e, t) {
        let n = e.getBoundingClientRect();
        return { x: n.left + t.scrollLeft - eE(e, n), y: n.top + t.scrollTop };
      }
      let eS = new Set(["absolute", "fixed"]);
      function eM(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = K(e),
              r = X(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              s = 0;
            if (o) {
              (i = o.width), (l = o.height);
              let e = ec();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (s = o.offsetTop));
            }
            let c = eE(r);
            if (c <= 0) {
              let e = r.ownerDocument,
                t = e.body,
                n = getComputedStyle(t),
                o =
                  ("CSS1Compat" === e.compatMode &&
                    parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                  0,
                l = Math.abs(r.clientWidth - t.clientWidth - o);
              l <= 25 && (i -= l);
            } else c <= 25 && (i += c);
            return { width: i, height: l, x: a, y: s };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = X(e),
              n = ep(e),
              r = e.ownerDocument.body,
              o = y(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = y(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + eE(e),
              a = -n.scrollTop;
            return (
              "rtl" === ef(r).direction &&
                (l += y(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: l, y: a }
            );
          })(X(e));
        else if (G(t))
          r = (function (e, t) {
            let n = ek(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = J(e) ? eb(e) : x(1),
              l = e.clientWidth * i.x;
            return {
              width: l,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = ex(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return z(r);
      }
      function eR(e) {
        return "static" === ef(e).position;
      }
      function eN(e, t) {
        if (!J(e) || "fixed" === ef(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return X(e) === n && (n = n.ownerDocument.body), n;
      }
      function ej(e, t) {
        var n;
        let r = K(e);
        if (eo(e)) return r;
        if (!J(e)) {
          let t = em(e);
          for (; t && !ed(t); ) {
            if (G(t) && !eR(t)) return t;
            t = em(t);
          }
          return r;
        }
        let o = eN(e, t);
        for (; o && ((n = o), en.has($(n))) && eR(o); ) o = eN(o, t);
        return o && ed(o) && eR(o) && !es(o)
          ? r
          : o ||
              (function (e) {
                let t = em(e);
                for (; J(t) && !ed(t); ) {
                  if (es(t)) return t;
                  if (eo(t)) break;
                  t = em(t);
                }
                return null;
              })(e) ||
              r;
      }
      let eP = async function (e) {
          let t = this.getOffsetParent || ej,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = J(t),
                o = X(t),
                i = "fixed" === n,
                l = ek(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                s = x(0);
              if (r || (!r && !i)) {
                if ((("body" !== $(t) || et(o)) && (a = ep(t)), r)) {
                  let e = ek(t, !0, i, t);
                  (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                } else o && (s.x = eE(o));
              }
              i && !r && o && (s.x = eE(o));
              let c = !o || r || i ? x(0) : eC(o, a);
              return {
                x: l.left + a.scrollLeft - s.x - c.x,
                y: l.top + a.scrollTop - s.y - c.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        eT = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = X(r),
              a = !!t && eo(t.floating);
            if (r === l || (a && i)) return n;
            let s = { scrollLeft: 0, scrollTop: 0 },
              c = x(1),
              u = x(0),
              d = J(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== $(r) || et(l)) && (s = ep(r)), J(r))
            ) {
              let e = ek(r);
              (c = eb(r)),
                (u.x = e.x + r.clientLeft),
                (u.y = e.y + r.clientTop);
            }
            let f = !l || d || i ? x(0) : eC(l, s);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - s.scrollLeft * c.x + u.x + f.x,
              y: n.y * c.y - s.scrollTop * c.y + u.y + f.y,
            };
          },
          getDocumentElement: X,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? eo(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = eh(e, [], !1).filter(
                            (e) => G(e) && "body" !== $(e)
                          ),
                          o = null,
                          i = "fixed" === ef(e).position,
                          l = i ? em(e) : e;
                        for (; G(l) && !ed(l); ) {
                          let t = ef(l),
                            n = es(l);
                          n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    eS.has(o.position)) ||
                                  (et(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = em(t);
                                      return (
                                        !(r === n || !G(r) || ed(r)) &&
                                        ("fixed" === ef(r).position || e(r, n))
                                      );
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = em(l));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = i[0],
              a = i.reduce((e, n) => {
                let r = eM(t, n, o);
                return (
                  (e.top = y(r.top, e.top)),
                  (e.right = g(r.right, e.right)),
                  (e.bottom = g(r.bottom, e.bottom)),
                  (e.left = y(r.left, e.left)),
                  e
                );
              }, eM(t, l, o));
            return {
              width: a.right - a.left,
              height: a.bottom - a.top,
              x: a.left,
              y: a.top,
            };
          },
          getOffsetParent: ej,
          getElementRects: eP,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = eg(e);
            return { width: t, height: n };
          },
          getScale: eb,
          isElement: G,
          isRTL: function (e) {
            return "rtl" === ef(e).direction;
          },
        };
      function eA(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let eD = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: l,
                elements: a,
                middlewareData: s,
              } = t,
              { element: c, padding: u = 0 } = C(e, t) || {};
            if (null == c) return {};
            let d = I(u),
              f = { x: n, y: r },
              p = R(P(o)),
              m = N(p),
              h = await l.getDimensions(c),
              v = "y" === p,
              b = v ? "clientHeight" : "clientWidth",
              w = i.reference[m] + i.reference[p] - f[p] - i.floating[m],
              x = f[p] - i.reference[p],
              k = await (null == l.getOffsetParent
                ? void 0
                : l.getOffsetParent(c)),
              E = k ? k[b] : 0;
            (E && (await (null == l.isElement ? void 0 : l.isElement(k)))) ||
              (E = a.floating[b] || i.floating[m]);
            let S = E / 2 - h[m] / 2 - 1,
              j = g(d[v ? "top" : "left"], S),
              T = g(d[v ? "bottom" : "right"], S),
              A = E - h[m] - T,
              D = E / 2 - h[m] / 2 + (w / 2 - x / 2),
              L = y(j, g(D, A)),
              O =
                !s.arrow &&
                null != M(o) &&
                D !== L &&
                i.reference[m] / 2 - (D < j ? j : T) - h[m] / 2 < 0,
              W = O ? (D < j ? D - j : D - A) : 0;
            return {
              [p]: f[p] + W,
              data: {
                [p]: L,
                centerOffset: D - L - W,
                ...(O && { alignmentOffset: W }),
              },
              reset: O,
            };
          },
        }),
        eL = (e, t, n) => {
          let r = new Map(),
            o = { platform: eT, ...n },
            i = { ...o.platform, _c: r };
          return Z(e, t, { ...o, platform: i });
        };
      var eO =
        "undefined" != typeof document ? r.useLayoutEffect : function () {};
      function eW(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eW(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eW(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eI(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ez(e, t) {
        let n = eI(e);
        return Math.round(t * n) / n;
      }
      function eV(e) {
        let t = r.useRef(e);
        return (
          eO(() => {
            t.current = e;
          }),
          t
        );
      }
      let eZ = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? eD({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? eD({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        eF = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: o, y: i, placement: l, middlewareData: a } = e,
                  s = await q(e, n);
                return l === (null == (t = a.offset) ? void 0 : t.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + s.x, y: i + s.y, data: { ...s, placement: l } };
              },
            }),
            options: [e, t],
          };
        },
        eH = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: o } = e,
                  {
                    mainAxis: i = !0,
                    crossAxis: l = !1,
                    limiter: a = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...s
                  } = C(n, e),
                  c = { x: t, y: r },
                  u = await F(e, s),
                  d = P(S(o)),
                  f = R(d),
                  p = c[f],
                  m = c[d];
                if (i) {
                  let e = "y" === f ? "top" : "left",
                    t = "y" === f ? "bottom" : "right",
                    n = p + u[e],
                    r = p - u[t];
                  p = y(n, g(p, r));
                }
                if (l) {
                  let e = "y" === d ? "top" : "left",
                    t = "y" === d ? "bottom" : "right",
                    n = m + u[e],
                    r = m - u[t];
                  m = y(n, g(m, r));
                }
                let h = a.fn({ ...e, [f]: p, [d]: m });
                return {
                  ...h,
                  data: { x: h.x - t, y: h.y - r, enabled: { [f]: i, [d]: l } },
                };
              },
            }),
            options: [e, t],
          };
        },
        e_ = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: l,
                  } = e,
                  {
                    offset: a = 0,
                    mainAxis: s = !0,
                    crossAxis: c = !0,
                  } = C(n, e),
                  u = { x: t, y: r },
                  d = P(o),
                  f = R(d),
                  p = u[f],
                  m = u[d],
                  h = C(a, e),
                  v =
                    "number" == typeof h
                      ? { mainAxis: h, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...h };
                if (s) {
                  let e = "y" === f ? "height" : "width",
                    t = i.reference[f] - i.floating[e] + v.mainAxis,
                    n = i.reference[f] + i.reference[e] - v.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (c) {
                  var g, y;
                  let e = "y" === f ? "width" : "height",
                    t = B.has(S(o)),
                    n =
                      i.reference[d] -
                      i.floating[e] +
                      ((t && (null == (g = l.offset) ? void 0 : g[d])) || 0) +
                      (t ? 0 : v.crossAxis),
                    r =
                      i.reference[d] +
                      i.reference[e] +
                      (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) -
                      (t ? v.crossAxis : 0);
                  m < n ? (m = n) : m > r && (m = r);
                }
                return { [f]: p, [d]: m };
              },
            }),
            options: [e, t],
          };
        },
        eB = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, o, i, l;
                let {
                    placement: a,
                    middlewareData: s,
                    rects: c,
                    initialPlacement: u,
                    platform: d,
                    elements: f,
                  } = e,
                  {
                    mainAxis: p = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: h,
                    fallbackStrategy: v = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: y = !0,
                    ...b
                  } = C(n, e);
                if (null != (t = s.arrow) && t.alignmentOffset) return {};
                let w = S(a),
                  x = P(u),
                  k = S(u) === u,
                  E = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                  j =
                    h ||
                    (k || !y
                      ? [W(u)]
                      : (function (e) {
                          let t = W(e);
                          return [T(e), t, T(t)];
                        })(u)),
                  I = "none" !== g;
                !h &&
                  I &&
                  j.push(
                    ...(function (e, t, n, r) {
                      let o = M(e),
                        i = (function (e, t, n) {
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? D : A;
                              return t ? A : D;
                            case "left":
                            case "right":
                              return t ? L : O;
                            default:
                              return [];
                          }
                        })(S(e), "start" === n, r);
                      return (
                        o &&
                          ((i = i.map((e) => e + "-" + o)),
                          t && (i = i.concat(i.map(T)))),
                        i
                      );
                    })(u, y, g, E)
                  );
                let z = [u, ...j],
                  V = await F(e, b),
                  Z = [],
                  H = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                if ((p && Z.push(V[w]), m)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = M(e),
                      o = R(P(e)),
                      i = N(o),
                      l =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[i] > t.floating[i] && (l = W(l)), [l, W(l)]
                    );
                  })(a, c, E);
                  Z.push(V[e[0]], V[e[1]]);
                }
                if (
                  ((H = [...H, { placement: a, overflows: Z }]),
                  !Z.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                    t = z[e];
                  if (
                    t &&
                    (!("alignment" === m && x !== P(t)) ||
                      H.every(
                        (e) => P(e.placement) !== x || e.overflows[0] > 0
                      ))
                  )
                    return {
                      data: { index: e, overflows: H },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (i = H.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : i.placement;
                  if (!n)
                    switch (v) {
                      case "bestFit": {
                        let e =
                          null ==
                          (l = H.filter((e) => {
                            if (I) {
                              let t = P(e.placement);
                              return t === x || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : l[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = u;
                    }
                  if (a !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        eq = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                var t, r;
                let o, i;
                let { placement: l, rects: a, platform: s, elements: c } = e,
                  { apply: u = () => {}, ...d } = C(n, e),
                  f = await F(e, d),
                  p = S(l),
                  m = M(l),
                  h = "y" === P(l),
                  { width: v, height: b } = a.floating;
                "top" === p || "bottom" === p
                  ? ((o = p),
                    (i =
                      m ===
                      ((await (null == s.isRTL ? void 0 : s.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((i = p), (o = "end" === m ? "top" : "bottom"));
                let w = b - f.top - f.bottom,
                  x = v - f.left - f.right,
                  k = g(b - f[o], w),
                  E = g(v - f[i], x),
                  R = !e.middlewareData.shift,
                  N = k,
                  j = E;
                if (
                  (null != (t = e.middlewareData.shift) &&
                    t.enabled.x &&
                    (j = x),
                  null != (r = e.middlewareData.shift) &&
                    r.enabled.y &&
                    (N = w),
                  R && !m)
                ) {
                  let e = y(f.left, 0),
                    t = y(f.right, 0),
                    n = y(f.top, 0),
                    r = y(f.bottom, 0);
                  h
                    ? (j =
                        v -
                        2 * (0 !== e || 0 !== t ? e + t : y(f.left, f.right)))
                    : (N =
                        b -
                        2 * (0 !== n || 0 !== r ? n + r : y(f.top, f.bottom)));
                }
                await u({ ...e, availableWidth: j, availableHeight: N });
                let T = await s.getDimensions(c.floating);
                return v !== T.width || b !== T.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        eU = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...o } = C(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = H(
                      await F(e, { ...o, elementContext: "reference" }),
                      t.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: _(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = H(
                      await F(e, { ...o, altBoundary: !0 }),
                      t.floating
                    );
                    return { data: { escapedOffsets: n, escaped: _(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        e$ = (e, t) => ({ ...eZ(e), options: [e, t] });
      var eK = n(6840),
        eX = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e;
          return (0, u.jsx)(eK.WV.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, u.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      eX.displayName = "Arrow";
      var eY = n(6606),
        eG = n(1188),
        eJ = n(420),
        eQ = "Popper",
        [e0, e1] = (0, a.b)(eQ),
        [e2, e5] = e0(eQ),
        e6 = (e) => {
          let { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null);
          return (0, u.jsx)(e2, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n,
          });
        };
      e6.displayName = eQ;
      var e7 = "PopperAnchor",
        e3 = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...i } = e,
            l = e5(e7, n),
            a = r.useRef(null),
            c = (0, s.e)(t, a);
          return (
            r.useEffect(() => {
              l.onAnchorChange((null == o ? void 0 : o.current) || a.current);
            }),
            o ? null : (0, u.jsx)(eK.WV.div, { ...i, ref: c })
          );
        });
      e3.displayName = e7;
      var e8 = "PopperContent",
        [e4, e9] = e0(e8),
        te = r.forwardRef((e, t) => {
          var n, i, l, a, c, d, f, p;
          let {
              __scopePopper: m,
              side: h = "bottom",
              sideOffset: v = 0,
              align: b = "center",
              alignOffset: x = 0,
              arrowPadding: k = 0,
              avoidCollisions: E = !0,
              collisionBoundary: C = [],
              collisionPadding: S = 0,
              sticky: M = "partial",
              hideWhenDetached: R = !1,
              updatePositionStrategy: N = "optimized",
              onPlaced: j,
              ...P
            } = e,
            T = e5(e8, m),
            [A, D] = r.useState(null),
            L = (0, s.e)(t, (e) => D(e)),
            [O, W] = r.useState(null),
            I = (0, eJ.t)(O),
            z =
              null !== (f = null == I ? void 0 : I.width) && void 0 !== f
                ? f
                : 0,
            V =
              null !== (p = null == I ? void 0 : I.height) && void 0 !== p
                ? p
                : 0,
            Z =
              "number" == typeof S
                ? S
                : { top: 0, right: 0, bottom: 0, left: 0, ...S },
            F = Array.isArray(C) ? C : [C],
            H = F.length > 0,
            _ = { padding: Z, boundary: F.filter(to), altBoundary: H },
            {
              refs: B,
              floatingStyles: q,
              placement: U,
              isPositioned: $,
              middlewareData: K,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: i = [],
                  platform: l,
                  elements: { reference: a, floating: s } = {},
                  transform: c = !0,
                  whileElementsMounted: u,
                  open: d,
                } = e,
                [f, p] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [m, h] = r.useState(i);
              eW(m, i) || h(i);
              let [v, g] = r.useState(null),
                [y, b] = r.useState(null),
                w = r.useCallback((e) => {
                  e !== C.current && ((C.current = e), g(e));
                }, []),
                x = r.useCallback((e) => {
                  e !== S.current && ((S.current = e), b(e));
                }, []),
                k = a || v,
                E = s || y,
                C = r.useRef(null),
                S = r.useRef(null),
                M = r.useRef(f),
                R = null != u,
                N = eV(u),
                j = eV(l),
                P = eV(d),
                T = r.useCallback(() => {
                  if (!C.current || !S.current) return;
                  let e = { placement: t, strategy: n, middleware: m };
                  j.current && (e.platform = j.current),
                    eL(C.current, S.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== P.current };
                      A.current &&
                        !eW(M.current, t) &&
                        ((M.current = t),
                        o.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [m, t, n, j, P]);
              eO(() => {
                !1 === d &&
                  M.current.isPositioned &&
                  ((M.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              let A = r.useRef(!1);
              eO(
                () => (
                  (A.current = !0),
                  () => {
                    A.current = !1;
                  }
                ),
                []
              ),
                eO(() => {
                  if ((k && (C.current = k), E && (S.current = E), k && E)) {
                    if (N.current) return N.current(k, E, T);
                    T();
                  }
                }, [k, E, T, N, R]);
              let D = r.useMemo(
                  () => ({
                    reference: C,
                    floating: S,
                    setReference: w,
                    setFloating: x,
                  }),
                  [w, x]
                ),
                L = r.useMemo(() => ({ reference: k, floating: E }), [k, E]),
                O = r.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!L.floating) return e;
                  let t = ez(L.floating, f.x),
                    r = ez(L.floating, f.y);
                  return c
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eI(L.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, c, L.floating, f.x, f.y]);
              return r.useMemo(
                () => ({
                  ...f,
                  update: T,
                  refs: D,
                  elements: L,
                  floatingStyles: O,
                }),
                [f, T, D, L, O]
              );
            })({
              strategy: "fixed",
              placement: h + ("center" !== b ? "-" + b : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: l = !0,
                      elementResize: a = "function" == typeof ResizeObserver,
                      layoutShift: s = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: c = !1,
                    } = r,
                    u = ey(e),
                    d = i || l ? [...(u ? eh(u) : []), ...eh(t)] : [];
                  d.forEach((e) => {
                    i && e.addEventListener("scroll", n, { passive: !0 }),
                      l && e.addEventListener("resize", n);
                  });
                  let f =
                      u && s
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = X(e);
                            function i() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function l(a, s) {
                                void 0 === a && (a = !1),
                                  void 0 === s && (s = 1),
                                  i();
                                let c = e.getBoundingClientRect(),
                                  { left: u, top: d, width: f, height: p } = c;
                                if ((a || t(), !f || !p)) return;
                                let m = w(d),
                                  h = w(o.clientWidth - (u + f)),
                                  v = {
                                    rootMargin:
                                      -m +
                                      "px " +
                                      -h +
                                      "px " +
                                      -w(o.clientHeight - (d + p)) +
                                      "px " +
                                      -w(u) +
                                      "px",
                                    threshold: y(0, g(1, s)) || 1,
                                  },
                                  b = !0;
                                function x(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== s) {
                                    if (!b) return l();
                                    r
                                      ? l(!1, r)
                                      : (n = setTimeout(() => {
                                          l(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== r ||
                                    eA(c, e.getBoundingClientRect()) ||
                                    l(),
                                    (b = !1);
                                }
                                try {
                                  r = new IntersectionObserver(x, {
                                    ...v,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(x, v);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(u, n)
                        : null,
                    p = -1,
                    m = null;
                  a &&
                    ((m = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === u &&
                        m &&
                        (m.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = m) || e.observe(t);
                        }))),
                        n();
                    })),
                    u && !c && m.observe(u),
                    m.observe(t));
                  let h = c ? ek(e) : null;
                  return (
                    c &&
                      (function t() {
                        let r = ek(e);
                        h && !eA(h, r) && n(),
                          (h = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      d.forEach((e) => {
                        i && e.removeEventListener("scroll", n),
                          l && e.removeEventListener("resize", n);
                      }),
                        null == f || f(),
                        null == (e = m) || e.disconnect(),
                        (m = null),
                        c && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: "always" === N });
              },
              elements: { reference: T.anchor },
              middleware: [
                eF({ mainAxis: v + V, alignmentAxis: x }),
                E &&
                  eH({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === M ? e_() : void 0,
                    ..._,
                  }),
                E && eB({ ..._ }),
                eq({
                  ..._,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: l } = n.reference,
                      a = t.floating.style;
                    a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px")
                      );
                  },
                }),
                O && e$({ element: O, padding: k }),
                ti({ arrowWidth: z, arrowHeight: V }),
                R && eU({ strategy: "referenceHidden", ..._ }),
              ],
            }),
            [Y, G] = tl(U),
            J = (0, eY.W)(j);
          (0, eG.b)(() => {
            $ && (null == J || J());
          }, [$, J]);
          let Q = null === (n = K.arrow) || void 0 === n ? void 0 : n.x,
            ee = null === (i = K.arrow) || void 0 === i ? void 0 : i.y,
            et =
              (null === (l = K.arrow) || void 0 === l
                ? void 0
                : l.centerOffset) !== 0,
            [en, er] = r.useState();
          return (
            (0, eG.b)(() => {
              A && er(window.getComputedStyle(A).zIndex);
            }, [A]),
            (0, u.jsx)("div", {
              ref: B.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...q,
                transform: $ ? q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: en,
                "--radix-popper-transform-origin": [
                  null === (a = K.transformOrigin) || void 0 === a
                    ? void 0
                    : a.x,
                  null === (c = K.transformOrigin) || void 0 === c
                    ? void 0
                    : c.y,
                ].join(" "),
                ...((null === (d = K.hide) || void 0 === d
                  ? void 0
                  : d.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, u.jsx)(e4, {
                scope: m,
                placedSide: Y,
                onArrowChange: W,
                arrowX: Q,
                arrowY: ee,
                shouldHideArrow: et,
                children: (0, u.jsx)(eK.WV.div, {
                  "data-side": Y,
                  "data-align": G,
                  ...P,
                  ref: L,
                  style: { ...P.style, animation: $ ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      te.displayName = e8;
      var tt = "PopperArrow",
        tn = { top: "bottom", right: "left", bottom: "top", left: "right" },
        tr = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = e9(tt, n),
            i = tn[o.placedSide];
          return (0,
          u.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, u.jsx)(eX, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function to(e) {
        return null !== e;
      }
      tr.displayName = tt;
      var ti = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let { placement: a, rects: s, middlewareData: c } = t,
            u =
              (null === (n = c.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = u ? 0 : e.arrowWidth,
            f = u ? 0 : e.arrowHeight,
            [p, m] = tl(a),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            v =
              (null !==
                (i = null === (r = c.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            g =
              (null !==
                (l = null === (o = c.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== l
                ? l
                : 0) +
              f / 2,
            y = "",
            b = "";
          return (
            "bottom" === p
              ? ((y = u ? h : "".concat(v, "px")), (b = "".concat(-f, "px")))
              : "top" === p
              ? ((y = u ? h : "".concat(v, "px")),
                (b = "".concat(s.floating.height + f, "px")))
              : "right" === p
              ? ((y = "".concat(-f, "px")), (b = u ? h : "".concat(g, "px")))
              : "left" === p &&
                ((y = "".concat(s.floating.width + f, "px")),
                (b = u ? h : "".concat(g, "px"))),
            { data: { x: y, y: b } }
          );
        },
      });
      function tl(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var ta = n(3832),
        ts = n(886),
        tc = n(6718),
        tu = r.forwardRef((e, t) =>
          (0, u.jsx)(eK.WV.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        );
      tu.displayName = "VisuallyHidden";
      var td = n(5478),
        tf = n(9157),
        tp = [" ", "Enter", "ArrowUp", "ArrowDown"],
        tm = [" ", "Enter"],
        th = "Select",
        [tv, tg, ty] = (function (e) {
          let t = e + "CollectionProvider",
            [n, o] = (0, a.b)(t),
            [i, l] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            d = (e) => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                l = r.useRef(new Map()).current;
              return (0, u.jsx)(i, {
                scope: t,
                itemMap: l,
                collectionRef: o,
                children: n,
              });
            };
          d.displayName = t;
          let f = e + "CollectionSlot",
            p = r.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = l(f, n),
                i = (0, s.e)(t, o.collectionRef);
              return (0, u.jsx)(c.g7, { ref: i, children: r });
            });
          p.displayName = f;
          let m = e + "CollectionItemSlot",
            h = "data-radix-collection-item",
            v = r.forwardRef((e, t) => {
              let { scope: n, children: o, ...i } = e,
                a = r.useRef(null),
                d = (0, s.e)(t, a),
                f = l(m, n);
              return (
                r.useEffect(
                  () => (
                    f.itemMap.set(a, { ref: a, ...i }),
                    () => void f.itemMap.delete(a)
                  )
                ),
                (0, u.jsx)(c.g7, { [h]: "", ref: d, children: o })
              );
            });
          return (
            (v.displayName = m),
            [
              { Provider: d, Slot: p, ItemSlot: v },
              function (t) {
                let n = l(e + "CollectionConsumer", t);
                return r.useCallback(() => {
                  let e = n.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll("[".concat(h, "]")));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              o,
            ]
          );
        })(th),
        [tb, tw] = (0, a.b)(th, [ty, e1]),
        tx = e1(),
        [tk, tE] = tb(th),
        [tC, tS] = tb(th),
        tM = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: o,
              defaultOpen: i,
              onOpenChange: l,
              value: a,
              defaultValue: s,
              onValueChange: c,
              dir: f,
              name: p,
              autoComplete: m,
              disabled: v,
              required: g,
              form: y,
            } = e,
            b = tx(t),
            [w, x] = r.useState(null),
            [k, E] = r.useState(null),
            [C, S] = r.useState(!1),
            M = (function (e) {
              let t = r.useContext(d);
              return e || t || "ltr";
            })(f),
            [R = !1, N] = (0, ts.T)({ prop: o, defaultProp: i, onChange: l }),
            [j, P] = (0, ts.T)({ prop: a, defaultProp: s, onChange: c }),
            T = r.useRef(null),
            A = !w || y || !!w.closest("form"),
            [D, L] = r.useState(new Set()),
            O = Array.from(D)
              .map((e) => e.props.value)
              .join(";");
          return (0, u.jsx)(e6, {
            ...b,
            children: (0, u.jsxs)(tk, {
              required: g,
              scope: t,
              trigger: w,
              onTriggerChange: x,
              valueNode: k,
              onValueNodeChange: E,
              valueNodeHasChildren: C,
              onValueNodeHasChildrenChange: S,
              contentId: (0, h.M)(),
              value: j,
              onValueChange: P,
              open: R,
              onOpenChange: N,
              dir: M,
              triggerPointerDownPosRef: T,
              disabled: v,
              children: [
                (0, u.jsx)(tv.Provider, {
                  scope: t,
                  children: (0, u.jsx)(tC, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: r.useCallback((e) => {
                      L((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: r.useCallback((e) => {
                      L((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                A
                  ? (0, u.jsxs)(
                      t9,
                      {
                        "aria-hidden": !0,
                        required: g,
                        tabIndex: -1,
                        name: p,
                        autoComplete: m,
                        value: j,
                        onChange: (e) => P(e.target.value),
                        disabled: v,
                        form: y,
                        children: [
                          void 0 === j
                            ? (0, u.jsx)("option", { value: "" })
                            : null,
                          Array.from(D),
                        ],
                      },
                      O
                    )
                  : null,
              ],
            }),
          });
        };
      tM.displayName = th;
      var tR = "SelectTrigger",
        tN = r.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: o = !1, ...i } = e,
            a = tx(n),
            c = tE(tR, n),
            d = c.disabled || o,
            f = (0, s.e)(t, c.onTriggerChange),
            p = tg(n),
            m = r.useRef("touch"),
            [h, v, g] = ne((e) => {
              let t = p().filter((e) => !e.disabled),
                n = t.find((e) => e.value === c.value),
                r = nt(t, e, n);
              void 0 !== r && c.onValueChange(r.value);
            }),
            y = (e) => {
              d || (c.onOpenChange(!0), g()),
                e &&
                  (c.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, u.jsx)(e3, {
            asChild: !0,
            ...a,
            children: (0, u.jsx)(eK.WV.button, {
              type: "button",
              role: "combobox",
              "aria-controls": c.contentId,
              "aria-expanded": c.open,
              "aria-required": c.required,
              "aria-autocomplete": "none",
              dir: c.dir,
              "data-state": c.open ? "open" : "closed",
              disabled: d,
              "data-disabled": d ? "" : void 0,
              "data-placeholder": t4(c.value) ? "" : void 0,
              ...i,
              ref: f,
              onClick: (0, l.M)(i.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== m.current && y(e);
              }),
              onPointerDown: (0, l.M)(i.onPointerDown, (e) => {
                m.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (y(e), e.preventDefault());
              }),
              onKeyDown: (0, l.M)(i.onKeyDown, (e) => {
                let t = "" !== h.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  v(e.key),
                  (!t || " " !== e.key) &&
                    tp.includes(e.key) &&
                    (y(), e.preventDefault());
              }),
            }),
          });
        });
      tN.displayName = tR;
      var tj = "SelectValue",
        tP = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: i,
              placeholder: l = "",
              ...a
            } = e,
            c = tE(tj, n),
            { onValueNodeHasChildrenChange: d } = c,
            f = void 0 !== i,
            p = (0, s.e)(t, c.onValueNodeChange);
          return (
            (0, eG.b)(() => {
              d(f);
            }, [d, f]),
            (0, u.jsx)(eK.WV.span, {
              ...a,
              ref: p,
              style: { pointerEvents: "none" },
              children: t4(c.value)
                ? (0, u.jsx)(u.Fragment, { children: l })
                : i,
            })
          );
        });
      tP.displayName = tj;
      var tT = r.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...o } = e;
        return (0, u.jsx)(eK.WV.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼",
        });
      });
      tT.displayName = "SelectIcon";
      var tA = (e) => (0, u.jsx)(ta.h, { asChild: !0, ...e });
      tA.displayName = "SelectPortal";
      var tD = "SelectContent",
        tL = r.forwardRef((e, t) => {
          let n = tE(tD, e.__scopeSelect),
            [i, l] = r.useState();
          return ((0, eG.b)(() => {
            l(new DocumentFragment());
          }, []),
          n.open)
            ? (0, u.jsx)(tI, { ...e, ref: t })
            : i
            ? o.createPortal(
                (0, u.jsx)(tO, {
                  scope: e.__scopeSelect,
                  children: (0, u.jsx)(tv.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, u.jsx)("div", { children: e.children }),
                  }),
                }),
                i
              )
            : null;
        });
      tL.displayName = tD;
      var [tO, tW] = tb(tD),
        tI = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: o = "item-aligned",
              onCloseAutoFocus: i,
              onEscapeKeyDown: a,
              onPointerDownOutside: d,
              side: h,
              sideOffset: v,
              align: g,
              alignOffset: y,
              arrowPadding: b,
              collisionBoundary: w,
              collisionPadding: x,
              sticky: k,
              hideWhenDetached: E,
              avoidCollisions: C,
              ...S
            } = e,
            M = tE(tD, n),
            [R, N] = r.useState(null),
            [j, P] = r.useState(null),
            T = (0, s.e)(t, (e) => N(e)),
            [A, D] = r.useState(null),
            [L, O] = r.useState(null),
            W = tg(n),
            [I, z] = r.useState(!1),
            V = r.useRef(!1);
          r.useEffect(() => {
            if (R) return (0, td.Ry)(R);
          }, [R]),
            (0, p.EW)();
          let Z = r.useCallback(
              (e) => {
                let [t, ...n] = W().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && j && (j.scrollTop = 0),
                    n === r && j && (j.scrollTop = j.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [W, j]
            ),
            F = r.useCallback(() => Z([A, R]), [Z, A, R]);
          r.useEffect(() => {
            I && F();
          }, [I, F]);
          let { onOpenChange: H, triggerPointerDownPosRef: _ } = M;
          r.useEffect(() => {
            if (R) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, i;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (o =
                            null === (n = _.current) || void 0 === n
                              ? void 0
                              : n.x) && void 0 !== o
                          ? o
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (i =
                            null === (r = _.current) || void 0 === r
                              ? void 0
                              : r.y) && void 0 !== i
                          ? i
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : R.contains(n.target) || H(!1),
                    document.removeEventListener("pointermove", t),
                    (_.current = null);
                };
              return (
                null !== _.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [R, H, _]),
            r.useEffect(() => {
              let e = () => H(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [H]);
          let [B, q] = ne((e) => {
              let t = W().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = nt(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            U = r.useCallback(
              (e, t, n) => {
                let r = !V.current && !n;
                ((void 0 !== M.value && M.value === t) || r) &&
                  (D(e), r && (V.current = !0));
              },
              [M.value]
            ),
            $ = r.useCallback(() => (null == R ? void 0 : R.focus()), [R]),
            K = r.useCallback(
              (e, t, n) => {
                let r = !V.current && !n;
                ((void 0 !== M.value && M.value === t) || r) && O(e);
              },
              [M.value]
            ),
            X = "popper" === o ? tV : tz,
            Y =
              X === tV
                ? {
                    side: h,
                    sideOffset: v,
                    align: g,
                    alignOffset: y,
                    arrowPadding: b,
                    collisionBoundary: w,
                    collisionPadding: x,
                    sticky: k,
                    hideWhenDetached: E,
                    avoidCollisions: C,
                  }
                : {};
          return (0, u.jsx)(tO, {
            scope: n,
            content: R,
            viewport: j,
            onViewportChange: P,
            itemRefCallback: U,
            selectedItem: A,
            onItemLeave: $,
            itemTextRefCallback: K,
            focusSelectedItem: F,
            selectedItemText: L,
            position: o,
            isPositioned: I,
            searchRef: B,
            children: (0, u.jsx)(tf.Z, {
              as: c.g7,
              allowPinchZoom: !0,
              children: (0, u.jsx)(m.M, {
                asChild: !0,
                trapped: M.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, l.M)(i, (e) => {
                  var t;
                  null === (t = M.trigger) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, u.jsx)(f.XB, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: d,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => M.onOpenChange(!1),
                  children: (0, u.jsx)(X, {
                    role: "listbox",
                    id: M.contentId,
                    "data-state": M.open ? "open" : "closed",
                    dir: M.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...S,
                    ...Y,
                    onPlaced: () => z(!0),
                    ref: T,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...S.style,
                    },
                    onKeyDown: (0, l.M)(S.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || q(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = W()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => Z(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      tI.displayName = "SelectContentImpl";
      var tz = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: o, ...l } = e,
          a = tE(tD, n),
          c = tW(tD, n),
          [d, f] = r.useState(null),
          [p, m] = r.useState(null),
          h = (0, s.e)(t, (e) => m(e)),
          v = tg(n),
          g = r.useRef(!1),
          y = r.useRef(!0),
          {
            viewport: b,
            selectedItem: w,
            selectedItemText: x,
            focusSelectedItem: k,
          } = c,
          E = r.useCallback(() => {
            if (a.trigger && a.valueNode && d && p && b && w && x) {
              let e = a.trigger.getBoundingClientRect(),
                t = p.getBoundingClientRect(),
                n = a.valueNode.getBoundingClientRect(),
                r = x.getBoundingClientRect();
              if ("rtl" !== a.dir) {
                let o = r.left - t.left,
                  l = n.left - o,
                  a = e.left - l,
                  s = e.width + a,
                  c = Math.max(s, t.width),
                  u = i(l, [10, Math.max(10, window.innerWidth - 10 - c)]);
                (d.style.minWidth = s + "px"), (d.style.left = u + "px");
              } else {
                let o = t.right - r.right,
                  l = window.innerWidth - n.right - o,
                  a = window.innerWidth - e.right - l,
                  s = e.width + a,
                  c = Math.max(s, t.width),
                  u = i(l, [10, Math.max(10, window.innerWidth - 10 - c)]);
                (d.style.minWidth = s + "px"), (d.style.right = u + "px");
              }
              let l = v(),
                s = window.innerHeight - 20,
                c = b.scrollHeight,
                u = window.getComputedStyle(p),
                f = parseInt(u.borderTopWidth, 10),
                m = parseInt(u.paddingTop, 10),
                h = parseInt(u.borderBottomWidth, 10),
                y = f + m + c + parseInt(u.paddingBottom, 10) + h,
                k = Math.min(5 * w.offsetHeight, y),
                E = window.getComputedStyle(b),
                C = parseInt(E.paddingTop, 10),
                S = parseInt(E.paddingBottom, 10),
                M = e.top + e.height / 2 - 10,
                R = w.offsetHeight / 2,
                N = f + m + (w.offsetTop + R);
              if (N <= M) {
                let e = l.length > 0 && w === l[l.length - 1].ref.current;
                d.style.bottom = "0px";
                let t = p.clientHeight - b.offsetTop - b.offsetHeight;
                d.style.height =
                  N + Math.max(s - M, R + (e ? S : 0) + t + h) + "px";
              } else {
                let e = l.length > 0 && w === l[0].ref.current;
                d.style.top = "0px";
                let t = Math.max(M, f + b.offsetTop + (e ? C : 0) + R);
                (d.style.height = t + (y - N) + "px"),
                  (b.scrollTop = N - M + b.offsetTop);
              }
              (d.style.margin = "".concat(10, "px 0")),
                (d.style.minHeight = k + "px"),
                (d.style.maxHeight = s + "px"),
                null == o || o(),
                requestAnimationFrame(() => (g.current = !0));
            }
          }, [v, a.trigger, a.valueNode, d, p, b, w, x, a.dir, o]);
        (0, eG.b)(() => E(), [E]);
        let [C, S] = r.useState();
        (0, eG.b)(() => {
          p && S(window.getComputedStyle(p).zIndex);
        }, [p]);
        let M = r.useCallback(
          (e) => {
            e && !0 === y.current && (E(), null == k || k(), (y.current = !1));
          },
          [E, k]
        );
        return (0, u.jsx)(tZ, {
          scope: n,
          contentWrapper: d,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: M,
          children: (0, u.jsx)("div", {
            ref: f,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: C,
            },
            children: (0, u.jsx)(eK.WV.div, {
              ...l,
              ref: h,
              style: { boxSizing: "border-box", maxHeight: "100%", ...l.style },
            }),
          }),
        });
      });
      tz.displayName = "SelectItemAlignedPosition";
      var tV = r.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = 10,
            ...i
          } = e,
          l = tx(n);
        return (0, u.jsx)(te, {
          ...l,
          ...i,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      tV.displayName = "SelectPopperPosition";
      var [tZ, tF] = tb(tD, {}),
        tH = "SelectViewport",
        t_ = r.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: o, ...i } = e,
            a = tW(tH, n),
            c = tF(tH, n),
            d = (0, s.e)(t, a.onViewportChange),
            f = r.useRef(0);
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: o,
              }),
              (0, u.jsx)(tv.Slot, {
                scope: n,
                children: (0, u.jsx)(eK.WV.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...i,
                  ref: d,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...i.style,
                  },
                  onScroll: (0, l.M)(i.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = c;
                    if ((null == r ? void 0 : r.current) && n) {
                      let e = Math.abs(f.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height)
                          );
                        if (o < r) {
                          let i = o + e,
                            l = Math.min(r, i),
                            a = i - l;
                          (n.style.height = l + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = a > 0 ? a : 0),
                              (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    f.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      t_.displayName = tH;
      var tB = "SelectGroup",
        [tq, tU] = tb(tB);
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = (0, h.M)();
        return (0, u.jsx)(tq, {
          scope: n,
          id: o,
          children: (0, u.jsx)(eK.WV.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t,
          }),
        });
      }).displayName = tB;
      var t$ = "SelectLabel";
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = tU(t$, n);
        return (0, u.jsx)(eK.WV.div, { id: o.id, ...r, ref: t });
      }).displayName = t$;
      var tK = "SelectItem",
        [tX, tY] = tb(tK),
        tG = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: o,
              disabled: i = !1,
              textValue: a,
              ...c
            } = e,
            d = tE(tK, n),
            f = tW(tK, n),
            p = d.value === o,
            [m, v] = r.useState(null != a ? a : ""),
            [g, y] = r.useState(!1),
            b = (0, s.e)(t, (e) => {
              var t;
              return null === (t = f.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(f, e, o, i);
            }),
            w = (0, h.M)(),
            x = r.useRef("touch"),
            k = () => {
              i || (d.onValueChange(o), d.onOpenChange(!1));
            };
          if ("" === o)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, u.jsx)(tX, {
            scope: n,
            value: o,
            disabled: i,
            textId: w,
            isSelected: p,
            onItemTextChange: r.useCallback((e) => {
              v((t) => {
                var n;
                return (
                  t ||
                  (null !== (n = null == e ? void 0 : e.textContent) &&
                  void 0 !== n
                    ? n
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, u.jsx)(tv.ItemSlot, {
              scope: n,
              value: o,
              disabled: i,
              textValue: m,
              children: (0, u.jsx)(eK.WV.div, {
                role: "option",
                "aria-labelledby": w,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": p && g,
                "data-state": p ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...c,
                ref: b,
                onFocus: (0, l.M)(c.onFocus, () => y(!0)),
                onBlur: (0, l.M)(c.onBlur, () => y(!1)),
                onClick: (0, l.M)(c.onClick, () => {
                  "mouse" !== x.current && k();
                }),
                onPointerUp: (0, l.M)(c.onPointerUp, () => {
                  "mouse" === x.current && k();
                }),
                onPointerDown: (0, l.M)(c.onPointerDown, (e) => {
                  x.current = e.pointerType;
                }),
                onPointerMove: (0, l.M)(c.onPointerMove, (e) => {
                  if (((x.current = e.pointerType), i)) {
                    var t;
                    null === (t = f.onItemLeave) || void 0 === t || t.call(f);
                  } else
                    "mouse" === x.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, l.M)(c.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = f.onItemLeave) || void 0 === t || t.call(f);
                  }
                }),
                onKeyDown: (0, l.M)(c.onKeyDown, (e) => {
                  var t;
                  ((null === (t = f.searchRef) || void 0 === t
                    ? void 0
                    : t.current) !== "" &&
                    " " === e.key) ||
                    (tm.includes(e.key) && k(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      tG.displayName = tK;
      var tJ = "SelectItemText",
        tQ = r.forwardRef((e, t) => {
          let { __scopeSelect: n, className: i, style: l, ...a } = e,
            c = tE(tJ, n),
            d = tW(tJ, n),
            f = tY(tJ, n),
            p = tS(tJ, n),
            [m, h] = r.useState(null),
            v = (0, s.e)(
              t,
              (e) => h(e),
              f.onItemTextChange,
              (e) => {
                var t;
                return null === (t = d.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(d, e, f.value, f.disabled);
              }
            ),
            g = null == m ? void 0 : m.textContent,
            y = r.useMemo(
              () =>
                (0, u.jsx)(
                  "option",
                  { value: f.value, disabled: f.disabled, children: g },
                  f.value
                ),
              [f.disabled, f.value, g]
            ),
            { onNativeOptionAdd: b, onNativeOptionRemove: w } = p;
          return (
            (0, eG.b)(() => (b(y), () => w(y)), [b, w, y]),
            (0, u.jsxs)(u.Fragment, {
              children: [
                (0, u.jsx)(eK.WV.span, { id: f.textId, ...a, ref: v }),
                f.isSelected && c.valueNode && !c.valueNodeHasChildren
                  ? o.createPortal(a.children, c.valueNode)
                  : null,
              ],
            })
          );
        });
      tQ.displayName = tJ;
      var t0 = "SelectItemIndicator",
        t1 = r.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return tY(t0, n).isSelected
            ? (0, u.jsx)(eK.WV.span, { "aria-hidden": !0, ...r, ref: t })
            : null;
        });
      t1.displayName = t0;
      var t2 = "SelectScrollUpButton",
        t5 = r.forwardRef((e, t) => {
          let n = tW(t2, e.__scopeSelect),
            o = tF(t2, e.__scopeSelect),
            [i, l] = r.useState(!1),
            a = (0, s.e)(t, o.onScrollButtonChange);
          return (
            (0, eG.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    l(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            i
              ? (0, u.jsx)(t3, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      t5.displayName = t2;
      var t6 = "SelectScrollDownButton",
        t7 = r.forwardRef((e, t) => {
          let n = tW(t6, e.__scopeSelect),
            o = tF(t6, e.__scopeSelect),
            [i, l] = r.useState(!1),
            a = (0, s.e)(t, o.onScrollButtonChange);
          return (
            (0, eG.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    l(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            i
              ? (0, u.jsx)(t3, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      t7.displayName = t6;
      var t3 = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onAutoScroll: o, ...i } = e,
          a = tW("SelectScrollButton", n),
          s = r.useRef(null),
          c = tg(n),
          d = r.useCallback(() => {
            null !== s.current &&
              (window.clearInterval(s.current), (s.current = null));
          }, []);
        return (
          r.useEffect(() => () => d(), [d]),
          (0, eG.b)(() => {
            var e;
            let t = c().find((e) => e.ref.current === document.activeElement);
            null == t ||
              null === (e = t.ref.current) ||
              void 0 === e ||
              e.scrollIntoView({ block: "nearest" });
          }, [c]),
          (0, u.jsx)(eK.WV.div, {
            "aria-hidden": !0,
            ...i,
            ref: t,
            style: { flexShrink: 0, ...i.style },
            onPointerDown: (0, l.M)(i.onPointerDown, () => {
              null === s.current && (s.current = window.setInterval(o, 50));
            }),
            onPointerMove: (0, l.M)(i.onPointerMove, () => {
              var e;
              null === (e = a.onItemLeave) || void 0 === e || e.call(a),
                null === s.current && (s.current = window.setInterval(o, 50));
            }),
            onPointerLeave: (0, l.M)(i.onPointerLeave, () => {
              d();
            }),
          })
        );
      });
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return (0, u.jsx)(eK.WV.div, { "aria-hidden": !0, ...r, ref: t });
      }).displayName = "SelectSeparator";
      var t8 = "SelectArrow";
      function t4(e) {
        return "" === e || void 0 === e;
      }
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = tx(n),
          i = tE(t8, n),
          l = tW(t8, n);
        return i.open && "popper" === l.position
          ? (0, u.jsx)(tr, { ...o, ...r, ref: t })
          : null;
      }).displayName = t8;
      var t9 = r.forwardRef((e, t) => {
        let { value: n, ...o } = e,
          i = r.useRef(null),
          l = (0, s.e)(t, i),
          a = (0, tc.D)(n);
        return (
          r.useEffect(() => {
            let e = i.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (a !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [a, n]),
          (0, u.jsx)(tu, {
            asChild: !0,
            children: (0, u.jsx)("select", { ...o, ref: l, defaultValue: n }),
          })
        );
      });
      function ne(e) {
        let t = (0, eY.W)(e),
          n = r.useRef(""),
          o = r.useRef(0),
          i = r.useCallback(
            (e) => {
              let r = n.current + e;
              t(r),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(o.current),
                    "" !== t &&
                      (o.current = window.setTimeout(() => e(""), 1e3));
                })(r);
            },
            [t]
          ),
          l = r.useCallback(() => {
            (n.current = ""), window.clearTimeout(o.current);
          }, []);
        return (
          r.useEffect(() => () => window.clearTimeout(o.current), []), [n, i, l]
        );
      }
      function nt(e, t, n) {
        var r;
        let o =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          i =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === o.length && (i = i.filter((e) => e !== n));
        let l = i.find((e) =>
          e.textValue.toLowerCase().startsWith(o.toLowerCase())
        );
        return l !== n ? l : void 0;
      }
      t9.displayName = "BubbleSelect";
      var nn = tM,
        nr = tN,
        no = tP,
        ni = tT,
        nl = tA,
        na = tL,
        ns = t_,
        nc = tG,
        nu = tQ,
        nd = t1,
        nf = t5,
        np = t7;
    },
    5156: function (e, t, n) {
      n.d(t, {
        f: function () {
          return c;
        },
      });
      var r = n(2265),
        o = n(6840),
        i = n(7437),
        l = "horizontal",
        a = ["horizontal", "vertical"],
        s = r.forwardRef((e, t) => {
          let { decorative: n, orientation: r = l, ...s } = e,
            c = a.includes(r) ? r : l;
          return (0, i.jsx)(o.WV.div, {
            "data-orientation": c,
            ...(n
              ? { role: "none" }
              : {
                  "aria-orientation": "vertical" === c ? c : void 0,
                  role: "separator",
                }),
            ...s,
            ref: t,
          });
        });
      s.displayName = "Separator";
      var c = s;
    },
    7053: function (e, t, n) {
      n.d(t, {
        g7: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(8575),
        i = n(7437),
        l = r.forwardRef((e, t) => {
          let { children: n, ...o } = e,
            l = r.Children.toArray(n),
            s = l.find(c);
          if (s) {
            let e = s.props.children,
              n = l.map((t) =>
                t !== s
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, i.jsx)(a, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, i.jsx)(a, { ...o, ref: t, children: n });
        });
      l.displayName = "Slot";
      var a = r.forwardRef((e, t) => {
        let { children: n, ...i } = e;
        if (r.isValidElement(n)) {
          let e, l;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return r.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(i, n.props),
            ref: t ? (0, o.F)(t, a) : a,
          });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var s = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
      function c(e) {
        return r.isValidElement(e) && e.type === s;
      }
    },
    721: function (e, t, n) {
      n.d(t, {
        bU: function () {
          return E;
        },
        fC: function () {
          return k;
        },
      });
      var r = n(2265),
        o = n(6741),
        i = n(8575),
        l = n(3966),
        a = n(886),
        s = n(6718),
        c = n(420),
        u = n(6840),
        d = n(7437),
        f = "Switch",
        [p, m] = (0, l.b)(f),
        [h, v] = p(f),
        g = r.forwardRef((e, t) => {
          let {
              __scopeSwitch: n,
              name: l,
              checked: s,
              defaultChecked: c,
              required: f,
              disabled: p,
              value: m = "on",
              onCheckedChange: v,
              form: g,
              ...y
            } = e,
            [b, k] = r.useState(null),
            E = (0, i.e)(t, (e) => k(e)),
            C = r.useRef(!1),
            S = !b || g || !!b.closest("form"),
            [M = !1, R] = (0, a.T)({ prop: s, defaultProp: c, onChange: v });
          return (0, d.jsxs)(h, {
            scope: n,
            checked: M,
            disabled: p,
            children: [
              (0, d.jsx)(u.WV.button, {
                type: "button",
                role: "switch",
                "aria-checked": M,
                "aria-required": f,
                "data-state": x(M),
                "data-disabled": p ? "" : void 0,
                disabled: p,
                value: m,
                ...y,
                ref: E,
                onClick: (0, o.M)(e.onClick, (e) => {
                  R((e) => !e),
                    S &&
                      ((C.current = e.isPropagationStopped()),
                      C.current || e.stopPropagation());
                }),
              }),
              S &&
                (0, d.jsx)(w, {
                  control: b,
                  bubbles: !C.current,
                  name: l,
                  value: m,
                  checked: M,
                  required: f,
                  disabled: p,
                  form: g,
                  style: { transform: "translateX(-100%)" },
                }),
            ],
          });
        });
      g.displayName = f;
      var y = "SwitchThumb",
        b = r.forwardRef((e, t) => {
          let { __scopeSwitch: n, ...r } = e,
            o = v(y, n);
          return (0, d.jsx)(u.WV.span, {
            "data-state": x(o.checked),
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: t,
          });
        });
      b.displayName = y;
      var w = (e) => {
        let { control: t, checked: n, bubbles: o = !0, ...i } = e,
          l = r.useRef(null),
          a = (0, s.D)(n),
          u = (0, c.t)(t);
        return (
          r.useEffect(() => {
            let e = l.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked"
              ).set;
            if (a !== n && t) {
              let r = new Event("click", { bubbles: o });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [a, n, o]),
          (0, d.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: n,
            ...i,
            tabIndex: -1,
            ref: l,
            style: {
              ...e.style,
              ...u,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          })
        );
      };
      function x(e) {
        return e ? "checked" : "unchecked";
      }
      var k = g,
        E = b;
    },
    6606: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    886: function (e, t, n) {
      n.d(t, {
        T: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(6606);
      function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [i, l] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [i] = n,
              l = r.useRef(i),
              a = (0, o.W)(t);
            return (
              r.useEffect(() => {
                l.current !== i && (a(i), (l.current = i));
              }, [i, l, a]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          s = a ? e : i,
          c = (0, o.W)(n);
        return [
          s,
          r.useCallback(
            (t) => {
              if (a) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && c(n);
              } else l(t);
            },
            [a, e, l, c]
          ),
        ];
      }
    },
    1188: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(2265),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    6718: function (e, t, n) {
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e) {
        let t = r.useRef({ value: e, previous: e });
        return r.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    420: function (e, t, n) {
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(1188);
      function i(e) {
        let [t, n] = r.useState(void 0);
        return (
          (0, o.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    535: function (e, t, n) {
      n.d(t, {
        j: function () {
          return l;
        },
      });
      var r = n(1994);
      let o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        i = r.W,
        l = (e, t) => (n) => {
          var r;
          if ((null == t ? void 0 : t.variants) == null)
            return i(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: l, defaultVariants: a } = t,
            s = Object.keys(l).map((e) => {
              let t = null == n ? void 0 : n[e],
                r = null == a ? void 0 : a[e];
              if (null === t) return null;
              let i = o(t) || o(r);
              return l[e][i];
            }),
            c =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return i(
            e,
            s,
            null == t
              ? void 0
              : null === (r = t.compoundVariants) || void 0 === r
              ? void 0
              : r.reduce((e, t) => {
                  let { class: n, className: r, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...a, ...c }[t])
                      : { ...a, ...c }[t] === n;
                  })
                    ? [...e, n, r]
                    : e;
                }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
    1994: function (e, t, n) {
      n.d(t, {
        W: function () {
          return r;
        },
      });
      function r() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (n = 0; n < i; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
    },
    3335: function (e, t, n) {
      n.d(t, {
        m6: function () {
          return ec;
        },
      });
      let r = (e) => {
          let t = a(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } =
              e;
          return {
            getClassGroupId: (e) => {
              let n = e.split("-");
              return (
                "" === n[0] && 1 !== n.length && n.shift(), o(n, t) || l(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = n[e] || [];
              return t && r[e] ? [...o, ...r[e]] : o;
            },
          };
        },
        o = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let n = e[0],
            r = t.nextPart.get(n),
            i = r ? o(e.slice(1), r) : void 0;
          if (i) return i;
          if (0 === t.validators.length) return;
          let l = e.join("-");
          return t.validators.find(({ validator: e }) => e(l))?.classGroupId;
        },
        i = /^\[(.+)\]$/,
        l = (e) => {
          if (i.test(e)) {
            let t = i.exec(e)[1],
              n = t?.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
          }
        },
        a = (e) => {
          let { theme: t, classGroups: n } = e,
            r = { nextPart: new Map(), validators: [] };
          for (let e in n) s(n[e], r, e, t);
          return r;
        },
        s = (e, t, n, r) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : c(t, e)).classGroupId = n;
              return;
            }
            if ("function" == typeof e) {
              if (u(e)) {
                s(e(r), t, n, r);
                return;
              }
              t.validators.push({ validator: e, classGroupId: n });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              s(o, c(t, e), n, r);
            });
          });
        },
        c = (e, t) => {
          let n = e;
          return (
            t.split("-").forEach((e) => {
              n.nextPart.has(e) ||
                n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (n = n.nextPart.get(e));
            }),
            n
          );
        },
        u = (e) => e.isThemeGetter,
        d = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            n = new Map(),
            r = new Map(),
            o = (o, i) => {
              n.set(o, i), ++t > e && ((t = 0), (r = n), (n = new Map()));
            };
          return {
            get(e) {
              let t = n.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = r.get(e))
                ? (o(e, t), t)
                : void 0;
            },
            set(e, t) {
              n.has(e) ? n.set(e, t) : o(e, t);
            },
          };
        },
        f = (e) => {
          let { prefix: t, experimentalParseClassName: n } = e,
            r = (e) => {
              let t;
              let n = [],
                r = 0,
                o = 0,
                i = 0;
              for (let l = 0; l < e.length; l++) {
                let a = e[l];
                if (0 === r && 0 === o) {
                  if (":" === a) {
                    n.push(e.slice(i, l)), (i = l + 1);
                    continue;
                  }
                  if ("/" === a) {
                    t = l;
                    continue;
                  }
                }
                "[" === a
                  ? r++
                  : "]" === a
                  ? r--
                  : "(" === a
                  ? o++
                  : ")" === a && o--;
              }
              let l = 0 === n.length ? e : e.substring(i),
                a = p(l);
              return {
                modifiers: n,
                hasImportantModifier: a !== l,
                baseClassName: a,
                maybePostfixModifierPosition: t && t > i ? t - i : void 0,
              };
            };
          if (t) {
            let e = t + ":",
              n = r;
            r = (t) =>
              t.startsWith(e)
                ? n(t.substring(e.length))
                : {
                    isExternal: !0,
                    modifiers: [],
                    hasImportantModifier: !1,
                    baseClassName: t,
                    maybePostfixModifierPosition: void 0,
                  };
          }
          if (n) {
            let e = r;
            r = (t) => n({ className: t, parseClassName: e });
          }
          return r;
        },
        p = (e) =>
          e.endsWith("!")
            ? e.substring(0, e.length - 1)
            : e.startsWith("!")
            ? e.substring(1)
            : e,
        m = (e) => {
          let t = Object.fromEntries(
            e.orderSensitiveModifiers.map((e) => [e, !0])
          );
          return (e) => {
            if (e.length <= 1) return e;
            let n = [],
              r = [];
            return (
              e.forEach((e) => {
                "[" === e[0] || t[e]
                  ? (n.push(...r.sort(), e), (r = []))
                  : r.push(e);
              }),
              n.push(...r.sort()),
              n
            );
          };
        },
        h = (e) => ({
          cache: d(e.cacheSize),
          parseClassName: f(e),
          sortModifiers: m(e),
          ...r(e),
        }),
        v = /\s+/,
        g = (e, t) => {
          let {
              parseClassName: n,
              getClassGroupId: r,
              getConflictingClassGroupIds: o,
              sortModifiers: i,
            } = t,
            l = [],
            a = e.trim().split(v),
            s = "";
          for (let e = a.length - 1; e >= 0; e -= 1) {
            let t = a[e],
              {
                isExternal: c,
                modifiers: u,
                hasImportantModifier: d,
                baseClassName: f,
                maybePostfixModifierPosition: p,
              } = n(t);
            if (c) {
              s = t + (s.length > 0 ? " " + s : s);
              continue;
            }
            let m = !!p,
              h = r(m ? f.substring(0, p) : f);
            if (!h) {
              if (!m || !(h = r(f))) {
                s = t + (s.length > 0 ? " " + s : s);
                continue;
              }
              m = !1;
            }
            let v = i(u).join(":"),
              g = d ? v + "!" : v,
              y = g + h;
            if (l.includes(y)) continue;
            l.push(y);
            let b = o(h, m);
            for (let e = 0; e < b.length; ++e) {
              let t = b[e];
              l.push(g + t);
            }
            s = t + (s.length > 0 ? " " + s : s);
          }
          return s;
        };
      function y() {
        let e,
          t,
          n = 0,
          r = "";
        for (; n < arguments.length; )
          (e = arguments[n++]) && (t = b(e)) && (r && (r += " "), (r += t));
        return r;
      }
      let b = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let n = "";
          for (let r = 0; r < e.length; r++)
            e[r] && (t = b(e[r])) && (n && (n += " "), (n += t));
          return n;
        },
        w = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        k = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        E = /^\d+\/\d+$/,
        C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        S =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        M = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        R = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        N =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        j = (e) => E.test(e),
        P = (e) => !!e && !Number.isNaN(Number(e)),
        T = (e) => !!e && Number.isInteger(Number(e)),
        A = (e) => e.endsWith("%") && P(e.slice(0, -1)),
        D = (e) => C.test(e),
        L = () => !0,
        O = (e) => S.test(e) && !M.test(e),
        W = () => !1,
        I = (e) => R.test(e),
        z = (e) => N.test(e),
        V = (e) => !F(e) && !$(e),
        Z = (e) => ee(e, eo, W),
        F = (e) => x.test(e),
        H = (e) => ee(e, ei, O),
        _ = (e) => ee(e, el, P),
        B = (e) => ee(e, en, W),
        q = (e) => ee(e, er, z),
        U = (e) => ee(e, es, I),
        $ = (e) => k.test(e),
        K = (e) => et(e, ei),
        X = (e) => et(e, ea),
        Y = (e) => et(e, en),
        G = (e) => et(e, eo),
        J = (e) => et(e, er),
        Q = (e) => et(e, es, !0),
        ee = (e, t, n) => {
          let r = x.exec(e);
          return !!r && (r[1] ? t(r[1]) : n(r[2]));
        },
        et = (e, t, n = !1) => {
          let r = k.exec(e);
          return !!r && (r[1] ? t(r[1]) : n);
        },
        en = (e) => "position" === e || "percentage" === e,
        er = (e) => "image" === e || "url" === e,
        eo = (e) => "length" === e || "size" === e || "bg-size" === e,
        ei = (e) => "length" === e,
        el = (e) => "number" === e,
        ea = (e) => "family-name" === e,
        es = (e) => "shadow" === e,
        ec = (function (e, ...t) {
          let n, r, o;
          let i = function (a) {
            return (
              (r = (n = h(t.reduce((e, t) => t(e), e()))).cache.get),
              (o = n.cache.set),
              (i = l),
              l(a)
            );
          };
          function l(e) {
            let t = r(e);
            if (t) return t;
            let i = g(e, n);
            return o(e, i), i;
          }
          return function () {
            return i(y.apply(null, arguments));
          };
        })(() => {
          let e = w("color"),
            t = w("font"),
            n = w("text"),
            r = w("font-weight"),
            o = w("tracking"),
            i = w("leading"),
            l = w("breakpoint"),
            a = w("container"),
            s = w("spacing"),
            c = w("radius"),
            u = w("shadow"),
            d = w("inset-shadow"),
            f = w("text-shadow"),
            p = w("drop-shadow"),
            m = w("blur"),
            h = w("perspective"),
            v = w("aspect"),
            g = w("ease"),
            y = w("animate"),
            b = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            x = () => [
              "center",
              "top",
              "bottom",
              "left",
              "right",
              "top-left",
              "left-top",
              "top-right",
              "right-top",
              "bottom-right",
              "right-bottom",
              "bottom-left",
              "left-bottom",
            ],
            k = () => [...x(), $, F],
            E = () => ["auto", "hidden", "clip", "visible", "scroll"],
            C = () => ["auto", "contain", "none"],
            S = () => [$, F, s],
            M = () => [j, "full", "auto", ...S()],
            R = () => [T, "none", "subgrid", $, F],
            N = () => ["auto", { span: ["full", T, $, F] }, T, $, F],
            O = () => [T, "auto", $, F],
            W = () => ["auto", "min", "max", "fr", $, F],
            I = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
              "center-safe",
              "end-safe",
            ],
            z = () => [
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
            ],
            ee = () => ["auto", ...S()],
            et = () => [
              j,
              "auto",
              "full",
              "dvw",
              "dvh",
              "lvw",
              "lvh",
              "svw",
              "svh",
              "min",
              "max",
              "fit",
              ...S(),
            ],
            en = () => [e, $, F],
            er = () => [...x(), Y, B, { position: [$, F] }],
            eo = () => [
              "no-repeat",
              { repeat: ["", "x", "y", "space", "round"] },
            ],
            ei = () => ["auto", "cover", "contain", G, Z, { size: [$, F] }],
            el = () => [A, K, H],
            ea = () => ["", "none", "full", c, $, F],
            es = () => ["", P, K, H],
            ec = () => ["solid", "dashed", "dotted", "double"],
            eu = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            ed = () => [P, A, Y, B],
            ef = () => ["", "none", m, $, F],
            ep = () => ["none", P, $, F],
            em = () => ["none", P, $, F],
            eh = () => [P, $, F],
            ev = () => [j, "full", ...S()];
          return {
            cacheSize: 500,
            theme: {
              animate: ["spin", "ping", "pulse", "bounce"],
              aspect: ["video"],
              blur: [D],
              breakpoint: [D],
              color: [L],
              container: [D],
              "drop-shadow": [D],
              ease: ["in", "out", "in-out"],
              font: [V],
              "font-weight": [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
              ],
              "inset-shadow": [D],
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
              perspective: [
                "dramatic",
                "near",
                "normal",
                "midrange",
                "distant",
                "none",
              ],
              radius: [D],
              shadow: [D],
              spacing: ["px", P],
              text: [D],
              "text-shadow": [D],
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
              ],
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", j, F, $, v] }],
              container: ["container"],
              columns: [{ columns: [P, F, $, a] }],
              "break-after": [{ "break-after": b() }],
              "break-before": [{ "break-before": b() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              sr: ["sr-only", "not-sr-only"],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: k() }],
              overflow: [{ overflow: E() }],
              "overflow-x": [{ "overflow-x": E() }],
              "overflow-y": [{ "overflow-y": E() }],
              overscroll: [{ overscroll: C() }],
              "overscroll-x": [{ "overscroll-x": C() }],
              "overscroll-y": [{ "overscroll-y": C() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: M() }],
              "inset-x": [{ "inset-x": M() }],
              "inset-y": [{ "inset-y": M() }],
              start: [{ start: M() }],
              end: [{ end: M() }],
              top: [{ top: M() }],
              right: [{ right: M() }],
              bottom: [{ bottom: M() }],
              left: [{ left: M() }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: [T, "auto", $, F] }],
              basis: [{ basis: [j, "full", "auto", a, ...S()] }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
              flex: [{ flex: [P, j, "auto", "initial", "none", F] }],
              grow: [{ grow: ["", P, $, F] }],
              shrink: [{ shrink: ["", P, $, F] }],
              order: [{ order: [T, "first", "last", "none", $, F] }],
              "grid-cols": [{ "grid-cols": R() }],
              "col-start-end": [{ col: N() }],
              "col-start": [{ "col-start": O() }],
              "col-end": [{ "col-end": O() }],
              "grid-rows": [{ "grid-rows": R() }],
              "row-start-end": [{ row: N() }],
              "row-start": [{ "row-start": O() }],
              "row-end": [{ "row-end": O() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": W() }],
              "auto-rows": [{ "auto-rows": W() }],
              gap: [{ gap: S() }],
              "gap-x": [{ "gap-x": S() }],
              "gap-y": [{ "gap-y": S() }],
              "justify-content": [{ justify: [...I(), "normal"] }],
              "justify-items": [{ "justify-items": [...z(), "normal"] }],
              "justify-self": [{ "justify-self": ["auto", ...z()] }],
              "align-content": [{ content: ["normal", ...I()] }],
              "align-items": [{ items: [...z(), { baseline: ["", "last"] }] }],
              "align-self": [
                { self: ["auto", ...z(), { baseline: ["", "last"] }] },
              ],
              "place-content": [{ "place-content": I() }],
              "place-items": [{ "place-items": [...z(), "baseline"] }],
              "place-self": [{ "place-self": ["auto", ...z()] }],
              p: [{ p: S() }],
              px: [{ px: S() }],
              py: [{ py: S() }],
              ps: [{ ps: S() }],
              pe: [{ pe: S() }],
              pt: [{ pt: S() }],
              pr: [{ pr: S() }],
              pb: [{ pb: S() }],
              pl: [{ pl: S() }],
              m: [{ m: ee() }],
              mx: [{ mx: ee() }],
              my: [{ my: ee() }],
              ms: [{ ms: ee() }],
              me: [{ me: ee() }],
              mt: [{ mt: ee() }],
              mr: [{ mr: ee() }],
              mb: [{ mb: ee() }],
              ml: [{ ml: ee() }],
              "space-x": [{ "space-x": S() }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": S() }],
              "space-y-reverse": ["space-y-reverse"],
              size: [{ size: et() }],
              w: [{ w: [a, "screen", ...et()] }],
              "min-w": [{ "min-w": [a, "screen", "none", ...et()] }],
              "max-w": [
                {
                  "max-w": [
                    a,
                    "screen",
                    "none",
                    "prose",
                    { screen: [l] },
                    ...et(),
                  ],
                },
              ],
              h: [{ h: ["screen", "lh", ...et()] }],
              "min-h": [{ "min-h": ["screen", "lh", "none", ...et()] }],
              "max-h": [{ "max-h": ["screen", "lh", ...et()] }],
              "font-size": [{ text: ["base", n, K, H] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [{ font: [r, $, _] }],
              "font-stretch": [
                {
                  "font-stretch": [
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "normal",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    A,
                    F,
                  ],
                },
              ],
              "font-family": [{ font: [X, F, t] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [{ tracking: [o, $, F] }],
              "line-clamp": [{ "line-clamp": [P, "none", $, _] }],
              leading: [{ leading: [i, ...S()] }],
              "list-image": [{ "list-image": ["none", $, F] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "list-style-type": [{ list: ["disc", "decimal", "none", $, F] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "placeholder-color": [{ placeholder: en() }],
              "text-color": [{ text: en() }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...ec(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: [P, "from-font", "auto", $, H] },
              ],
              "text-decoration-color": [{ decoration: en() }],
              "underline-offset": [{ "underline-offset": [P, "auto", $, F] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: S() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    $,
                    F,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", $, F] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: er() }],
              "bg-repeat": [{ bg: eo() }],
              "bg-size": [{ bg: ei() }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      linear: [
                        { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                        T,
                        $,
                        F,
                      ],
                      radial: ["", $, F],
                      conic: [T, $, F],
                    },
                    J,
                    q,
                  ],
                },
              ],
              "bg-color": [{ bg: en() }],
              "gradient-from-pos": [{ from: el() }],
              "gradient-via-pos": [{ via: el() }],
              "gradient-to-pos": [{ to: el() }],
              "gradient-from": [{ from: en() }],
              "gradient-via": [{ via: en() }],
              "gradient-to": [{ to: en() }],
              rounded: [{ rounded: ea() }],
              "rounded-s": [{ "rounded-s": ea() }],
              "rounded-e": [{ "rounded-e": ea() }],
              "rounded-t": [{ "rounded-t": ea() }],
              "rounded-r": [{ "rounded-r": ea() }],
              "rounded-b": [{ "rounded-b": ea() }],
              "rounded-l": [{ "rounded-l": ea() }],
              "rounded-ss": [{ "rounded-ss": ea() }],
              "rounded-se": [{ "rounded-se": ea() }],
              "rounded-ee": [{ "rounded-ee": ea() }],
              "rounded-es": [{ "rounded-es": ea() }],
              "rounded-tl": [{ "rounded-tl": ea() }],
              "rounded-tr": [{ "rounded-tr": ea() }],
              "rounded-br": [{ "rounded-br": ea() }],
              "rounded-bl": [{ "rounded-bl": ea() }],
              "border-w": [{ border: es() }],
              "border-w-x": [{ "border-x": es() }],
              "border-w-y": [{ "border-y": es() }],
              "border-w-s": [{ "border-s": es() }],
              "border-w-e": [{ "border-e": es() }],
              "border-w-t": [{ "border-t": es() }],
              "border-w-r": [{ "border-r": es() }],
              "border-w-b": [{ "border-b": es() }],
              "border-w-l": [{ "border-l": es() }],
              "divide-x": [{ "divide-x": es() }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": es() }],
              "divide-y-reverse": ["divide-y-reverse"],
              "border-style": [{ border: [...ec(), "hidden", "none"] }],
              "divide-style": [{ divide: [...ec(), "hidden", "none"] }],
              "border-color": [{ border: en() }],
              "border-color-x": [{ "border-x": en() }],
              "border-color-y": [{ "border-y": en() }],
              "border-color-s": [{ "border-s": en() }],
              "border-color-e": [{ "border-e": en() }],
              "border-color-t": [{ "border-t": en() }],
              "border-color-r": [{ "border-r": en() }],
              "border-color-b": [{ "border-b": en() }],
              "border-color-l": [{ "border-l": en() }],
              "divide-color": [{ divide: en() }],
              "outline-style": [{ outline: [...ec(), "none", "hidden"] }],
              "outline-offset": [{ "outline-offset": [P, $, F] }],
              "outline-w": [{ outline: ["", P, K, H] }],
              "outline-color": [{ outline: en() }],
              shadow: [{ shadow: ["", "none", u, Q, U] }],
              "shadow-color": [{ shadow: en() }],
              "inset-shadow": [{ "inset-shadow": ["none", d, Q, U] }],
              "inset-shadow-color": [{ "inset-shadow": en() }],
              "ring-w": [{ ring: es() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: en() }],
              "ring-offset-w": [{ "ring-offset": [P, H] }],
              "ring-offset-color": [{ "ring-offset": en() }],
              "inset-ring-w": [{ "inset-ring": es() }],
              "inset-ring-color": [{ "inset-ring": en() }],
              "text-shadow": [{ "text-shadow": ["none", f, Q, U] }],
              "text-shadow-color": [{ "text-shadow": en() }],
              opacity: [{ opacity: [P, $, F] }],
              "mix-blend": [
                { "mix-blend": [...eu(), "plus-darker", "plus-lighter"] },
              ],
              "bg-blend": [{ "bg-blend": eu() }],
              "mask-clip": [
                {
                  "mask-clip": [
                    "border",
                    "padding",
                    "content",
                    "fill",
                    "stroke",
                    "view",
                  ],
                },
                "mask-no-clip",
              ],
              "mask-composite": [
                { mask: ["add", "subtract", "intersect", "exclude"] },
              ],
              "mask-image-linear-pos": [{ "mask-linear": [P] }],
              "mask-image-linear-from-pos": [{ "mask-linear-from": ed() }],
              "mask-image-linear-to-pos": [{ "mask-linear-to": ed() }],
              "mask-image-linear-from-color": [{ "mask-linear-from": en() }],
              "mask-image-linear-to-color": [{ "mask-linear-to": en() }],
              "mask-image-t-from-pos": [{ "mask-t-from": ed() }],
              "mask-image-t-to-pos": [{ "mask-t-to": ed() }],
              "mask-image-t-from-color": [{ "mask-t-from": en() }],
              "mask-image-t-to-color": [{ "mask-t-to": en() }],
              "mask-image-r-from-pos": [{ "mask-r-from": ed() }],
              "mask-image-r-to-pos": [{ "mask-r-to": ed() }],
              "mask-image-r-from-color": [{ "mask-r-from": en() }],
              "mask-image-r-to-color": [{ "mask-r-to": en() }],
              "mask-image-b-from-pos": [{ "mask-b-from": ed() }],
              "mask-image-b-to-pos": [{ "mask-b-to": ed() }],
              "mask-image-b-from-color": [{ "mask-b-from": en() }],
              "mask-image-b-to-color": [{ "mask-b-to": en() }],
              "mask-image-l-from-pos": [{ "mask-l-from": ed() }],
              "mask-image-l-to-pos": [{ "mask-l-to": ed() }],
              "mask-image-l-from-color": [{ "mask-l-from": en() }],
              "mask-image-l-to-color": [{ "mask-l-to": en() }],
              "mask-image-x-from-pos": [{ "mask-x-from": ed() }],
              "mask-image-x-to-pos": [{ "mask-x-to": ed() }],
              "mask-image-x-from-color": [{ "mask-x-from": en() }],
              "mask-image-x-to-color": [{ "mask-x-to": en() }],
              "mask-image-y-from-pos": [{ "mask-y-from": ed() }],
              "mask-image-y-to-pos": [{ "mask-y-to": ed() }],
              "mask-image-y-from-color": [{ "mask-y-from": en() }],
              "mask-image-y-to-color": [{ "mask-y-to": en() }],
              "mask-image-radial": [{ "mask-radial": [$, F] }],
              "mask-image-radial-from-pos": [{ "mask-radial-from": ed() }],
              "mask-image-radial-to-pos": [{ "mask-radial-to": ed() }],
              "mask-image-radial-from-color": [{ "mask-radial-from": en() }],
              "mask-image-radial-to-color": [{ "mask-radial-to": en() }],
              "mask-image-radial-shape": [
                { "mask-radial": ["circle", "ellipse"] },
              ],
              "mask-image-radial-size": [
                {
                  "mask-radial": [
                    {
                      closest: ["side", "corner"],
                      farthest: ["side", "corner"],
                    },
                  ],
                },
              ],
              "mask-image-radial-pos": [{ "mask-radial-at": x() }],
              "mask-image-conic-pos": [{ "mask-conic": [P] }],
              "mask-image-conic-from-pos": [{ "mask-conic-from": ed() }],
              "mask-image-conic-to-pos": [{ "mask-conic-to": ed() }],
              "mask-image-conic-from-color": [{ "mask-conic-from": en() }],
              "mask-image-conic-to-color": [{ "mask-conic-to": en() }],
              "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
              "mask-origin": [
                {
                  "mask-origin": [
                    "border",
                    "padding",
                    "content",
                    "fill",
                    "stroke",
                    "view",
                  ],
                },
              ],
              "mask-position": [{ mask: er() }],
              "mask-repeat": [{ mask: eo() }],
              "mask-size": [{ mask: ei() }],
              "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
              "mask-image": [{ mask: ["none", $, F] }],
              filter: [{ filter: ["", "none", $, F] }],
              blur: [{ blur: ef() }],
              brightness: [{ brightness: [P, $, F] }],
              contrast: [{ contrast: [P, $, F] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", p, Q, U] }],
              "drop-shadow-color": [{ "drop-shadow": en() }],
              grayscale: [{ grayscale: ["", P, $, F] }],
              "hue-rotate": [{ "hue-rotate": [P, $, F] }],
              invert: [{ invert: ["", P, $, F] }],
              saturate: [{ saturate: [P, $, F] }],
              sepia: [{ sepia: ["", P, $, F] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none", $, F] }],
              "backdrop-blur": [{ "backdrop-blur": ef() }],
              "backdrop-brightness": [{ "backdrop-brightness": [P, $, F] }],
              "backdrop-contrast": [{ "backdrop-contrast": [P, $, F] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": ["", P, $, F] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [P, $, F] }],
              "backdrop-invert": [{ "backdrop-invert": ["", P, $, F] }],
              "backdrop-opacity": [{ "backdrop-opacity": [P, $, F] }],
              "backdrop-saturate": [{ "backdrop-saturate": [P, $, F] }],
              "backdrop-sepia": [{ "backdrop-sepia": ["", P, $, F] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": S() }],
              "border-spacing-x": [{ "border-spacing-x": S() }],
              "border-spacing-y": [{ "border-spacing-y": S() }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "",
                    "all",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    "none",
                    $,
                    F,
                  ],
                },
              ],
              "transition-behavior": [{ transition: ["normal", "discrete"] }],
              duration: [{ duration: [P, "initial", $, F] }],
              ease: [{ ease: ["linear", "initial", g, $, F] }],
              delay: [{ delay: [P, $, F] }],
              animate: [{ animate: ["none", y, $, F] }],
              backface: [{ backface: ["hidden", "visible"] }],
              perspective: [{ perspective: [h, $, F] }],
              "perspective-origin": [{ "perspective-origin": k() }],
              rotate: [{ rotate: ep() }],
              "rotate-x": [{ "rotate-x": ep() }],
              "rotate-y": [{ "rotate-y": ep() }],
              "rotate-z": [{ "rotate-z": ep() }],
              scale: [{ scale: em() }],
              "scale-x": [{ "scale-x": em() }],
              "scale-y": [{ "scale-y": em() }],
              "scale-z": [{ "scale-z": em() }],
              "scale-3d": ["scale-3d"],
              skew: [{ skew: eh() }],
              "skew-x": [{ "skew-x": eh() }],
              "skew-y": [{ "skew-y": eh() }],
              transform: [{ transform: [$, F, "", "none", "gpu", "cpu"] }],
              "transform-origin": [{ origin: k() }],
              "transform-style": [{ transform: ["3d", "flat"] }],
              translate: [{ translate: ev() }],
              "translate-x": [{ "translate-x": ev() }],
              "translate-y": [{ "translate-y": ev() }],
              "translate-z": [{ "translate-z": ev() }],
              "translate-none": ["translate-none"],
              accent: [{ accent: en() }],
              appearance: [{ appearance: ["none", "auto"] }],
              "caret-color": [{ caret: en() }],
              "color-scheme": [
                {
                  scheme: [
                    "normal",
                    "dark",
                    "light",
                    "light-dark",
                    "only-dark",
                    "only-light",
                  ],
                },
              ],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    $,
                    F,
                  ],
                },
              ],
              "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
              "pointer-events": [{ "pointer-events": ["auto", "none"] }],
              resize: [{ resize: ["none", "", "y", "x"] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": S() }],
              "scroll-mx": [{ "scroll-mx": S() }],
              "scroll-my": [{ "scroll-my": S() }],
              "scroll-ms": [{ "scroll-ms": S() }],
              "scroll-me": [{ "scroll-me": S() }],
              "scroll-mt": [{ "scroll-mt": S() }],
              "scroll-mr": [{ "scroll-mr": S() }],
              "scroll-mb": [{ "scroll-mb": S() }],
              "scroll-ml": [{ "scroll-ml": S() }],
              "scroll-p": [{ "scroll-p": S() }],
              "scroll-px": [{ "scroll-px": S() }],
              "scroll-py": [{ "scroll-py": S() }],
              "scroll-ps": [{ "scroll-ps": S() }],
              "scroll-pe": [{ "scroll-pe": S() }],
              "scroll-pt": [{ "scroll-pt": S() }],
              "scroll-pr": [{ "scroll-pr": S() }],
              "scroll-pb": [{ "scroll-pb": S() }],
              "scroll-pl": [{ "scroll-pl": S() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": [
                    "auto",
                    "scroll",
                    "contents",
                    "transform",
                    $,
                    F,
                  ],
                },
              ],
              fill: [{ fill: ["none", ...en()] }],
              "stroke-w": [{ stroke: [P, K, H, _] }],
              stroke: [{ stroke: ["none", ...en()] }],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-x",
                "border-w-y",
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-x",
                "border-color-y",
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              translate: ["translate-x", "translate-y", "translate-none"],
              "translate-none": [
                "translate",
                "translate-x",
                "translate-y",
                "translate-z",
              ],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
            orderSensitiveModifiers: [
              "*",
              "**",
              "after",
              "backdrop",
              "before",
              "details-content",
              "file",
              "first-letter",
              "first-line",
              "marker",
              "placeholder",
              "selection",
            ],
          };
        });
    },
  },
]);
