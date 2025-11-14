(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    3091: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 9050)),
        Promise.resolve().then(n.t.bind(n, 2778, 23)),
        Promise.resolve().then(n.bind(n, 3568));
    },
    3568: function (e, t, n) {
      "use strict";
      n.d(t, {
        ThemeProvider: function () {
          return y;
        },
      });
      var r = n(7437),
        a = n(2265),
        o = (e, t, n, r, a, o, s, c) => {
          let i = document.documentElement,
            l = ["light", "dark"];
          function u(t) {
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let n = "class" === e,
                r = n && o ? a.map((e) => o[e] || e) : a;
              n
                ? (i.classList.remove(...r),
                  i.classList.add(o && o[t] ? o[t] : t))
                : i.setAttribute(e, t);
            }),
              c && l.includes(t) && (i.style.colorScheme = t);
          }
          if (r) u(r);
          else
            try {
              let e = localStorage.getItem(t) || n,
                r =
                  s && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              u(r);
            } catch (e) {}
        },
        s = ["light", "dark"],
        c = "(prefers-color-scheme: dark)",
        i = "undefined" == typeof window,
        l = a.createContext(void 0),
        u = (e) =>
          a.useContext(l)
            ? a.createElement(a.Fragment, null, e.children)
            : a.createElement(m, { ...e }),
        d = ["light", "dark"],
        m = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: n = !1,
              enableSystem: r = !0,
              enableColorScheme: o = !0,
              storageKey: i = "theme",
              themes: u = d,
              defaultTheme: m = r ? "system" : "light",
              attribute: y = "data-theme",
              value: v,
              children: b,
              nonce: g,
              scriptProps: k,
            } = e,
            [E, S] = a.useState(() => h(i, m)),
            [A, T] = a.useState(() => ("system" === E ? w() : E)),
            C = v ? Object.values(v) : u,
            P = a.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && r && (t = w());
                let a = v ? v[t] : t,
                  c = n ? p(g) : null,
                  i = document.documentElement,
                  l = (e) => {
                    "class" === e
                      ? (i.classList.remove(...C), a && i.classList.add(a))
                      : e.startsWith("data-") &&
                        (a ? i.setAttribute(e, a) : i.removeAttribute(e));
                  };
                if ((Array.isArray(y) ? y.forEach(l) : l(y), o)) {
                  let e = s.includes(m) ? m : null,
                    n = s.includes(t) ? t : e;
                  i.style.colorScheme = n;
                }
                null == c || c();
              },
              [g]
            ),
            L = a.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(E) : e;
                S(t);
                try {
                  localStorage.setItem(i, t);
                } catch (e) {}
              },
              [E]
            ),
            _ = a.useCallback(
              (e) => {
                T(w(e)), "system" === E && r && !t && P("system");
              },
              [E, t]
            );
          a.useEffect(() => {
            let e = window.matchMedia(c);
            return e.addListener(_), _(e), () => e.removeListener(_);
          }, [_]),
            a.useEffect(() => {
              let e = (e) => {
                e.key === i && (e.newValue ? S(e.newValue) : L(m));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [L]),
            a.useEffect(() => {
              P(null != t ? t : E);
            }, [t, E]);
          let j = a.useMemo(
            () => ({
              theme: E,
              setTheme: L,
              forcedTheme: t,
              resolvedTheme: "system" === E ? A : E,
              themes: r ? [...u, "system"] : u,
              systemTheme: r ? A : void 0,
            }),
            [E, L, t, A, r, u]
          );
          return a.createElement(
            l.Provider,
            { value: j },
            a.createElement(f, {
              forcedTheme: t,
              storageKey: i,
              attribute: y,
              enableSystem: r,
              enableColorScheme: o,
              defaultTheme: m,
              value: v,
              themes: u,
              nonce: g,
              scriptProps: k,
            }),
            b
          );
        },
        f = a.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: n,
              attribute: r,
              enableSystem: s,
              enableColorScheme: c,
              defaultTheme: i,
              value: l,
              themes: u,
              nonce: d,
              scriptProps: m,
            } = e,
            f = JSON.stringify([r, n, i, t, u, l, s, c]).slice(1, -1);
          return a.createElement("script", {
            ...m,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? d : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(o.toString(), ")(").concat(f, ")"),
            },
          });
        }),
        h = (e, t) => {
          let n;
          if (!i) {
            try {
              n = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return n || t;
          }
        },
        p = (e) => {
          let t = document.createElement("style");
          return (
            e && t.setAttribute("nonce", e),
            t.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        w = (e) => (
          e || (e = window.matchMedia(c)), e.matches ? "dark" : "light"
        );
      function y(e) {
        let { children: t, ...n } = e;
        return (0, r.jsx)(u, { ...n, children: t });
      }
    },
    2778: function () {},
    9050: function (e, t, n) {
      "use strict";
      n.d(t, {
        Analytics: function () {
          return f;
        },
      });
      var r = n(2265),
        a = n(5475),
        o = () => {
          window.va ||
            (window.va = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              (window.vaq = window.vaq || []).push(t);
            });
        };
      function s() {
        return "undefined" != typeof window;
      }
      function c() {
        return "production";
      }
      function i() {
        return "development" === ((s() ? window.vam : c()) || "production");
      }
      function l(e) {
        return new RegExp(
          "/".concat(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "(?=[/?#]|$)")
        );
      }
      function u(e) {
        return (
          (0, r.useEffect)(() => {
            !(function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!s()) return;
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === e) {
                  window.vam = c();
                  return;
                }
                window.vam = e;
              })(t.mode),
                o(),
                t.beforeSend &&
                  (null == (e = window.va) ||
                    e.call(window, "beforeSend", t.beforeSend));
              let n =
                t.scriptSrc ||
                (i()
                  ? "https://va.vercel-scripts.com/v1/script.debug.js"
                  : "/_vercel/insights/script.js");
              if (document.head.querySelector('script[src*="'.concat(n, '"]')))
                return;
              let r = document.createElement("script");
              (r.src = n),
                (r.defer = !0),
                (r.dataset.sdkn =
                  "@vercel/analytics" +
                  (t.framework ? "/".concat(t.framework) : "")),
                (r.dataset.sdkv = "1.3.1"),
                t.disableAutoTrack && (r.dataset.disableAutoTrack = "1"),
                t.endpoint && (r.dataset.endpoint = t.endpoint),
                t.dsn && (r.dataset.dsn = t.dsn),
                (r.onerror = () => {
                  let e = i()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(n, ". ")
                      .concat(e)
                  );
                }),
                i() && !1 === t.debug && (r.dataset.debug = "false"),
                document.head.appendChild(r);
            })({
              framework: e.framework || "react",
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            });
          }, []),
          (0, r.useEffect)(() => {
            e.route &&
              e.path &&
              (function (e) {
                var t;
                let { route: n, path: r } = e;
                null == (t = window.va) ||
                  t.call(window, "pageview", { route: n, path: r });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
      var d = () => {
        let e = (0, a.useParams)(),
          t = (0, a.useSearchParams)(),
          n = (0, a.usePathname)(),
          r = { ...Object.fromEntries(t.entries()), ...(e || {}) };
        return {
          route: e
            ? (function (e, t) {
                if (!e || !t) return e;
                let n = e;
                try {
                  let e = Object.entries(t);
                  for (let [t, r] of e)
                    if (!Array.isArray(r)) {
                      let e = l(r);
                      e.test(n) && (n = n.replace(e, "/[".concat(t, "]")));
                    }
                  for (let [t, r] of e)
                    if (Array.isArray(r)) {
                      let e = l(r.join("/"));
                      e.test(n) && (n = n.replace(e, "/[...".concat(t, "]")));
                    }
                  return n;
                } catch (t) {
                  return e;
                }
              })(n, r)
            : null,
          path: n,
        };
      };
      function m(e) {
        let { route: t, path: n } = d();
        return r.createElement(u, {
          path: n,
          route: t,
          ...e,
          framework: "next",
        });
      }
      function f(e) {
        return r.createElement(
          r.Suspense,
          { fallback: null },
          r.createElement(m, { ...e })
        );
      }
    },
  },
  function (e) {
    e.O(0, [461, 971, 117, 744], function () {
      return e((e.s = 3091));
    }),
      (_N_E = e.O());
  },
]);
