(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [877],
  {
    1715: function (e, t, i) {
      "use strict";
      i.d(t, {
        Lm: function () {
          return h;
        },
      });
      var r = i(7294),
        s = (e) => {
          let t = r.useRef(e);
          return (
            r.useEffect(() => {
              t.current = e;
            }),
            t
          );
        };
      let n = (e, t = 100, i = !1) => {
          let n = s(e),
            a = r.useRef(),
            l = [t, i, n];
          function o() {
            a.current && clearTimeout(a.current), (a.current = void 0);
          }
          function d() {
            a.current = void 0;
          }
          return (
            r.useEffect(() => o, l),
            r.useCallback(function () {
              let e = arguments,
                { current: r } = a;
              if (void 0 === r && i)
                return (a.current = setTimeout(d, t)), n.current.apply(null, e);
              r && clearTimeout(r),
                (a.current = setTimeout(() => {
                  (a.current = void 0), n.current.apply(null, e);
                }, t));
            }, l)
          );
        },
        a = (e, t, i) => {
          let s = r.useState(e);
          return [s[0], n(s[1], t, i)];
        };
      var l = function (e, t, i, s) {
        let n = r.useRef(i),
          a = r.useRef(s);
        r.useEffect(() => {
          (n.current = i), (a.current = s);
        }),
          r.useEffect(() => {
            let i = e && "current" in e ? e.current : e;
            if (!i) return;
            let r = 0;
            function s(...e) {
              r || n.current.apply(this, e);
            }
            i.addEventListener(t, s);
            let l = a.current;
            return () => {
              (r = 1), i.removeEventListener(t, s), l && l();
            };
          }, [e, t]);
      };
      let o = {},
        d = "undefined" == typeof window ? null : window,
        u = d && void 0 !== d.visualViewport ? d.visualViewport : null,
        c = () => [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight,
        ],
        p = function (e) {
          void 0 === e && (e = o);
          let {
              wait: t,
              leading: i,
              initialWidth: r = 0,
              initialHeight: s = 0,
            } = e,
            [n, p] = a("undefined" == typeof document ? [r, s] : c, t, i),
            h = () => p(c);
          return (
            l(d, "resize", h),
            l(u, "resize", h),
            l(d, "orientationchange", h),
            n
          );
        },
        h = (e) => p(e)[0];
    },
    1132: function (e, t, i) {
      "use strict";
      i.d(t, {
        S6: function () {
          return E;
        },
        LI: function () {
          return k;
        },
      });
      let r = y(),
        s = (e) => m(e, r),
        n = y();
      s.write = (e) => m(e, n);
      let a = y();
      s.onStart = (e) => m(e, a);
      let l = y();
      s.onFrame = (e) => m(e, l);
      let o = y();
      s.onFinish = (e) => m(e, o);
      let d = [];
      s.setTimeout = (e, t) => {
        let i = s.now() + t,
          r = () => {
            let e = d.findIndex((e) => e.cancel == r);
            ~e && d.splice(e, 1), (h -= ~e ? 1 : 0);
          },
          n = { time: i, handler: e, cancel: r };
        return d.splice(u(i), 0, n), (h += 1), g(), n;
      };
      let u = (e) => ~(~d.findIndex((t) => t.time > e) || ~d.length);
      (s.cancel = (e) => {
        a.delete(e), l.delete(e), o.delete(e), r.delete(e), n.delete(e);
      }),
        (s.sync = (e) => {
          (f = !0), s.batchedUpdates(e), (f = !1);
        }),
        (s.throttle = (e) => {
          let t;
          function i() {
            try {
              e(...t);
            } finally {
              t = null;
            }
          }
          function r(...e) {
            (t = e), s.onStart(i);
          }
          return (
            (r.handler = e),
            (r.cancel = () => {
              a.delete(i), (t = null);
            }),
            r
          );
        });
      let c =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      (s.use = (e) => (c = e)),
        (s.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        (s.batchedUpdates = (e) => e()),
        (s.catch = console.error),
        (s.frameLoop = "always"),
        (s.advance = () => {
          "demand" !== s.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
              )
            : b();
        });
      let p = -1,
        h = 0,
        f = !1;
      function m(e, t) {
        f ? (t.delete(e), e(0)) : (t.add(e), g());
      }
      function g() {
        p < 0 && ((p = 0), "demand" !== s.frameLoop && c(v));
      }
      function v() {
        ~p && (c(v), s.batchedUpdates(b));
      }
      function b() {
        let e = p,
          t = u((p = s.now()));
        if ((t && (w(d.splice(0, t), (e) => e.handler()), (h -= t)), !h)) {
          p = -1;
          return;
        }
        a.flush(),
          r.flush(e ? Math.min(64, p - e) : 16.667),
          l.flush(),
          n.flush(),
          o.flush();
      }
      function y() {
        let e = new Set(),
          t = e;
        return {
          add(i) {
            (h += t != e || e.has(i) ? 0 : 1), e.add(i);
          },
          delete: (i) => ((h -= t == e && e.has(i) ? 1 : 0), e.delete(i)),
          flush(i) {
            t.size &&
              ((e = new Set()),
              (h -= t.size),
              w(t, (t) => t(i) && e.add(t)),
              (h += e.size),
              (t = e));
          },
        };
      }
      function w(e, t) {
        e.forEach((e) => {
          try {
            t(e);
          } catch (e) {
            s.catch(e);
          }
        });
      }
      var S = i(7294);
      let E = (e, t) => e.forEach(t),
        x = function () {},
        T = [],
        _ = [],
        M = "[-+]?\\d*\\.?\\d+",
        C = M + "%";
      function P(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      RegExp("rgb" + P(M, M, M)),
        RegExp("rgba" + P(M, M, M, M)),
        RegExp("hsl" + P(M, C, C)),
        RegExp("hsla" + P(M, C, C, M)),
        Symbol.for("FluidValue.get"),
        Symbol.for("FluidValue.observers"),
        RegExp(
          `(${
            /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g.source
          })(%|[a-z]+)`,
          "i"
        );
      let O = (e) => {
        let t = !1;
        if ("function" != typeof e)
          throw TypeError("react-spring: once requires a function parameter");
        return (...i) => {
          t || (e(...i), (t = !0));
        };
      };
      O(console.warn),
        O(console.warn),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
      let k =
        "undefined" == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? S.useEffect
          : S.useLayoutEffect;
    },
    6541: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let r = i(8754),
        s = i(1757),
        n = i(5893),
        a = s._(i(7294)),
        l = r._(i(3935)),
        o = r._(i(7828)),
        d = i(7367),
        u = i(7903),
        c = i(4938);
      i(1997);
      let p = i(9953),
        h = r._(i(6663)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, i, r, s, n, a) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && s(!0), null == i ? void 0 : i.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    s = !1;
                  i.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => s,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (s = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function g(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let v = (0, a.forwardRef)((e, t) => {
        let {
          src: i,
          srcSet: r,
          sizes: s,
          height: l,
          width: o,
          decoding: d,
          className: u,
          style: c,
          fetchPriority: p,
          placeholder: h,
          loading: f,
          unoptimized: v,
          fill: b,
          onLoadRef: y,
          onLoadingCompleteRef: w,
          setBlurComplete: S,
          setShowAltText: E,
          sizesInput: x,
          onLoad: T,
          onError: _,
          ...M
        } = e;
        return (0, n.jsx)("img", {
          ...M,
          ...g(p),
          loading: f,
          width: o,
          height: l,
          decoding: d,
          "data-nimg": b ? "fill" : "1",
          className: u,
          style: c,
          sizes: s,
          srcSet: r,
          src: i,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (_ && (e.src = e.src), e.complete && m(e, h, y, w, S, v, x));
            },
            [i, h, y, w, S, _, v, x, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, h, y, w, S, v, x);
          },
          onError: (e) => {
            E(!0), "empty" !== h && S(!0), _ && _(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: i } = e,
          r = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...g(i.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(i.src, r), null)
          : (0, n.jsx)(o.default, {
              children: (0, n.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...r },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let y = (0, a.forwardRef)((e, t) => {
        let i = (0, a.useContext)(p.RouterContext),
          r = (0, a.useContext)(c.ImageConfigContext),
          s = (0, a.useMemo)(() => {
            let e = f || r || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              i = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: i };
          }, [r]),
          { onLoad: l, onLoadingComplete: o } = e,
          m = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          m.current = l;
        }, [l]);
        let g = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
          g.current = o;
        }, [o]);
        let [y, w] = (0, a.useState)(!1),
          [S, E] = (0, a.useState)(!1),
          { props: x, meta: T } = (0, d.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: s,
            blurComplete: y,
            showAltText: S,
          });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(v, {
              ...x,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: E,
              sizesInput: e.sizes,
              ref: t,
            }),
            T.priority
              ? (0, n.jsx)(b, { isAppRouter: !i, imgAttributes: x })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7367: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        i(1997);
      let r = i(9919),
        s = i(7903);
      function n(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var i;
        let l,
          o,
          d,
          {
            src: u,
            sizes: c,
            unoptimized: p = !1,
            priority: h = !1,
            loading: f,
            className: m,
            quality: g,
            width: v,
            height: b,
            fill: y = !1,
            style: w,
            overrideSrc: S,
            onLoad: E,
            onLoadingComplete: x,
            placeholder: T = "empty",
            blurDataURL: _,
            fetchPriority: M,
            layout: C,
            objectFit: P,
            objectPosition: O,
            lazyBoundary: k,
            lazyRoot: A,
            ...I
          } = e,
          { imgConf: L, showAltText: z, blurComplete: D, defaultLoader: j } = t,
          R = L || s.imageConfigDefault;
        if ("allSizes" in R) l = R;
        else {
          let e = [...R.deviceSizes, ...R.imageSizes].sort((e, t) => e - t),
            t = R.deviceSizes.sort((e, t) => e - t);
          l = { ...R, allSizes: e, deviceSizes: t };
        }
        if (void 0 === j)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let V = I.loader || j;
        delete I.loader, delete I.srcSet;
        let F = "__next_img_default" in V;
        if (F) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                u +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = V;
          V = (t) => {
            let { config: i, ...r } = t;
            return e(r);
          };
        }
        if (C) {
          "fill" === C && (y = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[C];
          t && !c && (c = t);
        }
        let N = "",
          $ = a(v),
          G = a(b);
        if ("object" == typeof (i = u) && (n(i) || void 0 !== i.src)) {
          let e = n(u) ? u.default : u;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((o = e.blurWidth),
            (d = e.blurHeight),
            (_ = _ || e.blurDataURL),
            (N = e.src),
            !y)
          ) {
            if ($ || G) {
              if ($ && !G) {
                let t = $ / e.width;
                G = Math.round(e.height * t);
              } else if (!$ && G) {
                let t = G / e.height;
                $ = Math.round(e.width * t);
              }
            } else ($ = e.width), (G = e.height);
          }
        }
        let B = !h && ("lazy" === f || void 0 === f);
        (!(u = "string" == typeof u ? u : N) ||
          u.startsWith("data:") ||
          u.startsWith("blob:")) &&
          ((p = !0), (B = !1)),
          l.unoptimized && (p = !0),
          F && u.endsWith(".svg") && !l.dangerouslyAllowSVG && (p = !0),
          h && (M = "high");
        let q = a(g),
          H = Object.assign(
            y
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: P,
                  objectPosition: O,
                }
              : {},
            z ? {} : { color: "transparent" },
            w
          ),
          W =
            D || "empty" === T
              ? null
              : "blur" === T
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: $,
                  heightInt: G,
                  blurWidth: o,
                  blurHeight: d,
                  blurDataURL: _ || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + T + '")',
          U = W
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: W,
              }
            : {},
          Y = (function (e) {
            let {
              config: t,
              src: i,
              unoptimized: r,
              width: s,
              quality: n,
              sizes: a,
              loader: l,
            } = e;
            if (r) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: o, kind: d } = (function (e, t, i) {
                let { deviceSizes: r, allSizes: s } = e;
                if (i) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(i)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: s.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: s, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => s.find((t) => t >= e) || s[s.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, s, a),
              u = o.length - 1;
            return {
              sizes: a || "w" !== d ? a : "100vw",
              srcSet: o
                .map(
                  (e, r) =>
                    l({ config: t, src: i, quality: n, width: e }) +
                    " " +
                    ("w" === d ? e : r + 1) +
                    d
                )
                .join(", "),
              src: l({ config: t, src: i, quality: n, width: o[u] }),
            };
          })({
            config: l,
            src: u,
            unoptimized: p,
            width: $,
            quality: q,
            sizes: c,
            loader: V,
          });
        return {
          props: {
            ...I,
            loading: B ? "lazy" : f,
            fetchPriority: M,
            width: $,
            height: G,
            decoding: "async",
            className: m,
            style: { ...H, ...U },
            sizes: Y.sizes,
            srcSet: Y.srcSet,
            src: S || Y.src,
          },
          meta: { unoptimized: p, priority: h, placeholder: T, fill: y },
        };
      }
    },
    9919: function (e, t) {
      "use strict";
      function i(e) {
        let {
            widthInt: t,
            heightInt: i,
            blurWidth: r,
            blurHeight: s,
            blurDataURL: n,
            objectFit: a,
          } = e,
          l = r ? 40 * r : t,
          o = s ? 40 * s : i,
          d = l && o ? "viewBox='0 0 " + l + " " + o + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          d +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (d
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          n +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    5666: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return l;
          },
        });
      let r = i(8754),
        s = i(7367),
        n = i(6541),
        a = r._(i(6663));
      function l(e) {
        let { props: t } = (0, s.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
        return { props: t };
      }
      let o = n.Image;
    },
    6663: function (e, t) {
      "use strict";
      function i(e) {
        let { config: t, src: i, width: r, quality: s } = e;
        return (
          encodeURIComponent(i)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (i.__next_img_default = !0);
      let r = i;
    },
    5675: function (e, t, i) {
      e.exports = i(5666);
    },
    1033: function (e, t, i) {
      "use strict";
      var r = (function () {
          if ("undefined" != typeof Map) return Map;
          function e(e, t) {
            var i = -1;
            return (
              e.some(function (e, r) {
                return e[0] === t && ((i = r), !0);
              }),
              i
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var i = e(this.__entries__, t),
                  r = this.__entries__[i];
                return r && r[1];
              }),
              (t.prototype.set = function (t, i) {
                var r = e(this.__entries__, t);
                ~r
                  ? (this.__entries__[r][1] = i)
                  : this.__entries__.push([t, i]);
              }),
              (t.prototype.delete = function (t) {
                var i = this.__entries__,
                  r = e(i, t);
                ~r && i.splice(r, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var i = 0, r = this.__entries__; i < r.length; i++) {
                  var s = r[i];
                  e.call(t, s[1], s[0]);
                }
              }),
              t
            );
          })();
        })(),
        s =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        n =
          void 0 !== i.g && i.g.Math === Math
            ? i.g
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        a =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(n)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              },
        l = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        o = "undefined" != typeof MutationObserver,
        d = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var i = !1,
                  r = !1,
                  s = 0;
                function n() {
                  i && ((i = !1), e()), r && o();
                }
                function l() {
                  a(n);
                }
                function o() {
                  var e = Date.now();
                  if (i) {
                    if (e - s < 2) return;
                    r = !0;
                  } else (i = !0), (r = !1), setTimeout(l, 20);
                  s = e;
                }
                return o;
              })(this.refresh.bind(this), 0));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                i = t.indexOf(e);
              ~i && t.splice(i, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              s &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                o
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              s &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                i = void 0 === t ? "" : t;
              l.some(function (e) {
                return !!~i.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        u = function (e, t) {
          for (var i = 0, r = Object.keys(t); i < r.length; i++) {
            var s = r[i];
            Object.defineProperty(e, s, {
              value: t[s],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        c = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || n;
        },
        p = g(0, 0, 0, 0);
      function h(e) {
        return parseFloat(e) || 0;
      }
      function f(e) {
        for (var t = [], i = 1; i < arguments.length; i++)
          t[i - 1] = arguments[i];
        return t.reduce(function (t, i) {
          return t + h(e["border-" + i + "-width"]);
        }, 0);
      }
      var m =
        "undefined" != typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof c(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof c(e).SVGElement && "function" == typeof e.getBBox
              );
            };
      function g(e, t, i, r) {
        return { x: e, y: t, width: i, height: r };
      }
      var v = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = g(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = (function (e) {
                if (!s) return p;
                if (m(e)) {
                  var t;
                  return g(0, 0, (t = e.getBBox()).width, t.height);
                }
                return (function (e) {
                  var t = e.clientWidth,
                    i = e.clientHeight;
                  if (!t && !i) return p;
                  var r = c(e).getComputedStyle(e),
                    s = (function (e) {
                      for (
                        var t = {},
                          i = 0,
                          r = ["top", "right", "bottom", "left"];
                        i < r.length;
                        i++
                      ) {
                        var s = r[i],
                          n = e["padding-" + s];
                        t[s] = h(n);
                      }
                      return t;
                    })(r),
                    n = s.left + s.right,
                    a = s.top + s.bottom,
                    l = h(r.width),
                    o = h(r.height);
                  if (
                    ("border-box" === r.boxSizing &&
                      (Math.round(l + n) !== t &&
                        (l -= f(r, "left", "right") + n),
                      Math.round(o + a) !== i &&
                        (o -= f(r, "top", "bottom") + a)),
                    e !== c(e).document.documentElement)
                  ) {
                    var d = Math.round(l + n) - t,
                      u = Math.round(o + a) - i;
                    1 !== Math.abs(d) && (l -= d),
                      1 !== Math.abs(u) && (o -= u);
                  }
                  return g(s.left, s.top, l, o);
                })(e);
              })(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        b = function (e, t) {
          var i,
            r,
            s,
            n,
            a,
            l =
              ((i = t.x),
              (r = t.y),
              (s = t.width),
              (n = t.height),
              u(
                (a = Object.create(
                  ("undefined" != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object
                  ).prototype
                )),
                {
                  x: i,
                  y: r,
                  width: s,
                  height: n,
                  top: r,
                  right: i + s,
                  bottom: n + r,
                  left: i,
                }
              ),
              a);
          u(this, { target: e, contentRect: l });
        },
        y = (function () {
          function e(e, t, i) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new r()),
              "function" != typeof e)
            )
              throw TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = i);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof c(e).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new v(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof c(e).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new b(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        w = "undefined" != typeof WeakMap ? new WeakMap() : new r(),
        S = function e(t) {
          if (!(this instanceof e))
            throw TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw TypeError("1 argument required, but only 0 present.");
          var i = new y(t, d.getInstance(), this);
          w.set(this, i);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        S.prototype[e] = function () {
          var t;
          return (t = w.get(this))[e].apply(t, arguments);
        };
      });
      var E = void 0 !== n.ResizeObserver ? n.ResizeObserver : S;
      t.Z = E;
    },
    3250: function (e, t, i) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = i(7294),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        n = r.useState,
        a = r.useEffect,
        l = r.useLayoutEffect,
        o = r.useDebugValue;
      function d(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var i = t();
          return !s(e, i);
        } catch (e) {
          return !0;
        }
      }
      var u =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var i = t(),
                r = n({ inst: { value: i, getSnapshot: t } }),
                s = r[0].inst,
                u = r[1];
              return (
                l(
                  function () {
                    (s.value = i), (s.getSnapshot = t), d(s) && u({ inst: s });
                  },
                  [e, i, t]
                ),
                a(
                  function () {
                    return (
                      d(s) && u({ inst: s }),
                      e(function () {
                        d(s) && u({ inst: s });
                      })
                    );
                  },
                  [e]
                ),
                o(i),
                i
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
    },
    139: function (e, t, i) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = i(7294),
        s = i(1688),
        n =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = s.useSyncExternalStore,
        l = r.useRef,
        o = r.useEffect,
        d = r.useMemo,
        u = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, i, r, s) {
        var c = l(null);
        if (null === c.current) {
          var p = { hasValue: !1, value: null };
          c.current = p;
        } else p = c.current;
        var h = a(
          e,
          (c = d(
            function () {
              function e(e) {
                if (!o) {
                  if (
                    ((o = !0), (a = e), (e = r(e)), void 0 !== s && p.hasValue)
                  ) {
                    var t = p.value;
                    if (s(t, e)) return (l = t);
                  }
                  return (l = e);
                }
                if (((t = l), n(a, e))) return t;
                var i = r(e);
                return void 0 !== s && s(t, i) ? t : ((a = e), (l = i));
              }
              var a,
                l,
                o = !1,
                d = void 0 === i ? null : i;
              return [
                function () {
                  return e(t());
                },
                null === d
                  ? void 0
                  : function () {
                      return e(d());
                    },
              ];
            },
            [t, i, r, s]
          ))[0],
          c[1]
        );
        return (
          o(
            function () {
              (p.hasValue = !0), (p.value = h);
            },
            [h]
          ),
          u(h),
          h
        );
      };
    },
    1688: function (e, t, i) {
      "use strict";
      e.exports = i(3250);
    },
    2798: function (e, t, i) {
      "use strict";
      e.exports = i(139);
    },
    3095: function (e, t, i) {
      "use strict";
      i.d(t, {
        q: function () {
          return rR;
        },
        vc: function () {
          return th;
        },
        Z5: function () {
          return ex;
        },
        YD: function () {
          return t7;
        },
        q_: function () {
          return t9;
        },
        bY: function () {
          return t5;
        },
      });
      var r,
        s,
        n,
        a,
        l,
        o,
        d,
        u = M(),
        c = (e) => E(e, u),
        p = M();
      c.write = (e) => E(e, p);
      var h = M();
      c.onStart = (e) => E(e, h);
      var f = M();
      c.onFrame = (e) => E(e, f);
      var m = M();
      c.onFinish = (e) => E(e, m);
      var g = [];
      c.setTimeout = (e, t) => {
        let i = c.now() + t,
          r = () => {
            let e = g.findIndex((e) => e.cancel == r);
            ~e && g.splice(e, 1), (w -= ~e ? 1 : 0);
          },
          s = { time: i, handler: e, cancel: r };
        return g.splice(v(i), 0, s), (w += 1), x(), s;
      };
      var v = (e) => ~(~g.findIndex((t) => t.time > e) || ~g.length);
      (c.cancel = (e) => {
        h.delete(e), f.delete(e), m.delete(e), u.delete(e), p.delete(e);
      }),
        (c.sync = (e) => {
          (S = !0), c.batchedUpdates(e), (S = !1);
        }),
        (c.throttle = (e) => {
          let t;
          function i() {
            try {
              e(...t);
            } finally {
              t = null;
            }
          }
          function r(...e) {
            (t = e), c.onStart(i);
          }
          return (
            (r.handler = e),
            (r.cancel = () => {
              h.delete(i), (t = null);
            }),
            r
          );
        });
      var b =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      (c.use = (e) => (b = e)),
        (c.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        (c.batchedUpdates = (e) => e()),
        (c.catch = console.error),
        (c.frameLoop = "always"),
        (c.advance = () => {
          "demand" !== c.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
              )
            : _();
        });
      var y = -1,
        w = 0,
        S = !1;
      function E(e, t) {
        S ? (t.delete(e), e(0)) : (t.add(e), x());
      }
      function x() {
        y < 0 && ((y = 0), "demand" !== c.frameLoop && b(T));
      }
      function T() {
        ~y && (b(T), c.batchedUpdates(_));
      }
      function _() {
        let e = y,
          t = v((y = c.now()));
        if ((t && (C(g.splice(0, t), (e) => e.handler()), (w -= t)), !w)) {
          y = -1;
          return;
        }
        h.flush(),
          u.flush(e ? Math.min(64, y - e) : 16.667),
          f.flush(),
          p.flush(),
          m.flush();
      }
      function M() {
        let e = new Set(),
          t = e;
        return {
          add(i) {
            (w += t != e || e.has(i) ? 0 : 1), e.add(i);
          },
          delete: (i) => ((w -= t == e && e.has(i) ? 1 : 0), e.delete(i)),
          flush(i) {
            t.size &&
              ((e = new Set()),
              (w -= t.size),
              C(t, (t) => t(i) && e.add(t)),
              (w += e.size),
              (t = e));
          },
        };
      }
      function C(e, t) {
        e.forEach((e) => {
          try {
            t(e);
          } catch (e) {
            c.catch(e);
          }
        });
      }
      var P = i(7294),
        O = Object.defineProperty,
        k = {};
      function A() {}
      ((e, t) => {
        for (var i in t) O(e, i, { get: t[i], enumerable: !0 });
      })(k, {
        assign: () => q,
        colors: () => $,
        createStringInterpolator: () => s,
        skipAnimation: () => G,
        to: () => n,
        willAdvance: () => B,
      });
      var I = (e, t, i) =>
          Object.defineProperty(e, t, {
            value: i,
            writable: !0,
            configurable: !0,
          }),
        L = {
          arr: Array.isArray,
          obj: (e) => !!e && "Object" === e.constructor.name,
          fun: (e) => "function" == typeof e,
          str: (e) => "string" == typeof e,
          num: (e) => "number" == typeof e,
          und: (e) => void 0 === e,
        };
      function z(e, t) {
        if (L.arr(e)) {
          if (!L.arr(t) || e.length !== t.length) return !1;
          for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
          return !0;
        }
        return e === t;
      }
      var D = (e, t) => e.forEach(t);
      function j(e, t, i) {
        if (L.arr(e)) {
          for (let r = 0; r < e.length; r++) t.call(i, e[r], `${r}`);
          return;
        }
        for (let r in e) e.hasOwnProperty(r) && t.call(i, e[r], r);
      }
      var R = (e) => (L.und(e) ? [] : L.arr(e) ? e : [e]);
      function V(e, t) {
        if (e.size) {
          let i = Array.from(e);
          e.clear(), D(i, t);
        }
      }
      var F = (e, ...t) => V(e, (e) => e(...t)),
        N = () =>
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        $ = null,
        G = !1,
        B = A,
        q = (e) => {
          e.to && (n = e.to),
            e.now && (c.now = e.now),
            void 0 !== e.colors && ($ = e.colors),
            null != e.skipAnimation && (G = e.skipAnimation),
            e.createStringInterpolator && (s = e.createStringInterpolator),
            e.requestAnimationFrame && c.use(e.requestAnimationFrame),
            e.batchedUpdates && (c.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (B = e.willAdvance),
            e.frameLoop && (c.frameLoop = e.frameLoop);
        },
        H = new Set(),
        W = [],
        U = [],
        Y = 0,
        X = {
          get idle() {
            return !H.size && !W.length;
          },
          start(e) {
            Y > e.priority ? (H.add(e), c.onStart(Q)) : (Z(e), c(J));
          },
          advance: J,
          sort(e) {
            if (Y) c.onFrame(() => X.sort(e));
            else {
              let t = W.indexOf(e);
              ~t && (W.splice(t, 1), K(e));
            }
          },
          clear() {
            (W = []), H.clear();
          },
        };
      function Q() {
        H.forEach(Z), H.clear(), c(J);
      }
      function Z(e) {
        W.includes(e) || K(e);
      }
      function K(e) {
        W.splice(
          (function (e, t) {
            let i = e.findIndex(t);
            return i < 0 ? e.length : i;
          })(W, (t) => t.priority > e.priority),
          0,
          e
        );
      }
      function J(e) {
        let t = U;
        for (let i = 0; i < W.length; i++) {
          let r = W[i];
          (Y = r.priority), r.idle || (B(r), r.advance(e), r.idle || t.push(r));
        }
        return (Y = 0), ((U = W).length = 0), (W = t).length > 0;
      }
      var ee = (e, t, i) => Math.min(Math.max(i, e), t),
        et = "[-+]?\\d*\\.?\\d+",
        ei = et + "%";
      function er(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var es = RegExp("rgb" + er(et, et, et)),
        en = RegExp("rgba" + er(et, et, et, et)),
        ea = RegExp("hsl" + er(et, ei, ei)),
        el = RegExp("hsla" + er(et, ei, ei, et)),
        eo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ed =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        eu = /^#([0-9a-fA-F]{6})$/,
        ec = /^#([0-9a-fA-F]{8})$/;
      function ep(e, t, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? e + (t - e) * 6 * i
          : i < 0.5
          ? t
          : i < 2 / 3
          ? e + (t - e) * (2 / 3 - i) * 6
          : e;
      }
      function eh(e, t, i) {
        let r = i < 0.5 ? i * (1 + t) : i + t - i * t,
          s = 2 * i - r;
        return (
          (Math.round(255 * ep(s, r, e + 1 / 3)) << 24) |
          (Math.round(255 * ep(s, r, e)) << 16) |
          (Math.round(255 * ep(s, r, e - 1 / 3)) << 8)
        );
      }
      function ef(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function em(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function eg(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function ev(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function eb(e) {
        let t;
        let i =
          "number" == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = eu.exec(e))
            ? parseInt(t[1] + "ff", 16) >>> 0
            : $ && void 0 !== $[e]
            ? $[e]
            : (t = es.exec(e))
            ? ((ef(t[1]) << 24) | (ef(t[2]) << 16) | (ef(t[3]) << 8) | 255) >>>
              0
            : (t = en.exec(e))
            ? ((ef(t[1]) << 24) |
                (ef(t[2]) << 16) |
                (ef(t[3]) << 8) |
                eg(t[4])) >>>
              0
            : (t = eo.exec(e))
            ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
            : (t = ec.exec(e))
            ? parseInt(t[1], 16) >>> 0
            : (t = ed.exec(e))
            ? parseInt(
                t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                16
              ) >>> 0
            : (t = ea.exec(e))
            ? (255 | eh(em(t[1]), ev(t[2]), ev(t[3]))) >>> 0
            : (t = el.exec(e))
            ? (eh(em(t[1]), ev(t[2]), ev(t[3])) | eg(t[4])) >>> 0
            : null;
        if (null === i) return e;
        let r = (4278190080 & (i = i || 0)) >>> 24,
          s = (16711680 & i) >>> 16,
          n = (65280 & i) >>> 8,
          a = (255 & i) / 255;
        return `rgba(${r}, ${s}, ${n}, ${a})`;
      }
      var ey = (e, t, i) => {
          if (L.fun(e)) return e;
          if (L.arr(e)) return ey({ range: e, output: t, extrapolate: i });
          if (L.str(e.output[0])) return s(e);
          let r = e.output,
            n = e.range || [0, 1],
            a = e.extrapolateLeft || e.extrapolate || "extend",
            l = e.extrapolateRight || e.extrapolate || "extend",
            o = e.easing || ((e) => e);
          return (t) => {
            let i = (function (e, t) {
              for (var i = 1; i < t.length - 1 && !(t[i] >= e); ++i);
              return i - 1;
            })(t, n);
            return (function (e, t, i, r, s, n, a, l, o) {
              let d = o ? o(e) : e;
              if (d < t) {
                if ("identity" === a) return d;
                "clamp" === a && (d = t);
              }
              if (d > i) {
                if ("identity" === l) return d;
                "clamp" === l && (d = i);
              }
              return r === s
                ? r
                : t === i
                ? e <= t
                  ? r
                  : s
                : (t === -1 / 0
                    ? (d = -d)
                    : i === 1 / 0
                    ? (d -= t)
                    : (d = (d - t) / (i - t)),
                  (d = n(d)),
                  r === -1 / 0
                    ? (d = -d)
                    : s === 1 / 0
                    ? (d += r)
                    : (d = d * (s - r) + r),
                  d);
            })(t, n[i], n[i + 1], r[i], r[i + 1], o, a, l, e.map);
          };
        },
        ew = (2 * Math.PI) / 3,
        eS = (2 * Math.PI) / 4.5,
        eE = (e) =>
          e < 0.36363636363636365
            ? 7.5625 * e * e
            : e < 0.7272727272727273
            ? 7.5625 * (e -= 0.5454545454545454) * e + 0.75
            : e < 0.9090909090909091
            ? 7.5625 * (e -= 0.8181818181818182) * e + 0.9375
            : 7.5625 * (e -= 0.9545454545454546) * e + 0.984375,
        ex = {
          linear: (e) => e,
          easeInQuad: (e) => e * e,
          easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
          easeInOutQuad: (e) =>
            e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: (e) => e * e * e,
          easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: (e) =>
            e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: (e) => e * e * e * e,
          easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: (e) =>
            e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: (e) => e * e * e * e * e,
          easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: (e) =>
            e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
          easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
          easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: (e) => (0 === e ? 0 : Math.pow(2, 10 * e - 10)),
          easeOutExpo: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
          easeInOutExpo: (e) =>
            0 === e
              ? 0
              : 1 === e
              ? 1
              : e < 0.5
              ? Math.pow(2, 20 * e - 10) / 2
              : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: (e) =>
            e < 0.5
              ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
              : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: (e) => 2.70158 * e * e * e - 1.70158 * e * e,
          easeOutBack: (e) =>
            1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
          easeInOutBack: (e) =>
            e < 0.5
              ? (Math.pow(2 * e, 2) * (7.189819 * e - 2.5949095)) / 2
              : (Math.pow(2 * e - 2, 2) *
                  (3.5949095 * (2 * e - 2) + 2.5949095) +
                  2) /
                2,
          easeInElastic: (e) =>
            0 === e
              ? 0
              : 1 === e
              ? 1
              : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ew),
          easeOutElastic: (e) =>
            0 === e
              ? 0
              : 1 === e
              ? 1
              : Math.pow(2, -10 * e) * Math.sin((10 * e - 0.75) * ew) + 1,
          easeInOutElastic: (e) =>
            0 === e
              ? 0
              : 1 === e
              ? 1
              : e < 0.5
              ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * eS)) /
                2
              : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * eS)) /
                  2 +
                1,
          easeInBounce: (e) => 1 - eE(1 - e),
          easeOutBounce: eE,
          easeInOutBounce: (e) =>
            e < 0.5 ? (1 - eE(1 - 2 * e)) / 2 : (1 + eE(2 * e - 1)) / 2,
          steps:
            (e, t = "end") =>
            (i) => {
              let r =
                (i = "end" === t ? Math.min(i, 0.999) : Math.max(i, 0.001)) * e;
              return ee(0, 1, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e);
            },
        },
        eT = Symbol.for("FluidValue.get"),
        e_ = Symbol.for("FluidValue.observers"),
        eM = (e) => !!(e && e[eT]),
        eC = (e) => (e && e[eT] ? e[eT]() : e),
        eP = (e) => e[e_] || null;
      function eO(e, t) {
        let i = e[e_];
        i &&
          i.forEach((e) => {
            e.eventObserved ? e.eventObserved(t) : e(t);
          });
      }
      var ek = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            eA(this, e);
          }
        },
        eA = (e, t) => ez(e, eT, t);
      function eI(e, t) {
        if (e[eT]) {
          let i = e[e_];
          i || ez(e, e_, (i = new Set())),
            !i.has(t) &&
              (i.add(t), e.observerAdded && e.observerAdded(i.size, t));
        }
        return t;
      }
      function eL(e, t) {
        let i = e[e_];
        if (i && i.has(t)) {
          let r = i.size - 1;
          r ? i.delete(t) : (e[e_] = null),
            e.observerRemoved && e.observerRemoved(r, t);
        }
      }
      var ez = (e, t, i) =>
          Object.defineProperty(e, t, {
            value: i,
            writable: !0,
            configurable: !0,
          }),
        eD = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ej =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        eR = RegExp(`(${eD.source})(%|[a-z]+)`, "i"),
        eV = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        eF = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        eN = (e) => {
          let [t, i] = e$(e);
          if (!t || N()) return e;
          let r = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(t);
          if (r) return r.trim();
          if (i && i.startsWith("--")) {
            let e = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(i);
            if (e) return e;
          } else if (i && eF.test(i)) return eN(i);
          else if (i) return i;
          return e;
        },
        e$ = (e) => {
          let t = eF.exec(e);
          if (!t) return [,];
          let [, i, r] = t;
          return [i, r];
        },
        eG = (e, t, i, r, s) =>
          `rgba(${Math.round(t)}, ${Math.round(i)}, ${Math.round(r)}, ${s})`,
        eB = "react-spring: ",
        eq = (e) => {
          let t = !1;
          if ("function" != typeof e)
            throw TypeError(`${eB}once requires a function parameter`);
          return (...i) => {
            t || (e(...i), (t = !0));
          };
        },
        eH = eq(console.warn),
        eW = eq(console.warn);
      function eU(e) {
        return (
          L.str(e) &&
          ("#" == e[0] ||
            /\d/.test(e) ||
            (!N() && eF.test(e)) ||
            e in ($ || {}))
        );
      }
      var eY = N() ? P.useEffect : P.useLayoutEffect,
        eX = () => {
          let e = (0, P.useRef)(!1);
          return (
            eY(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              []
            ),
            e
          );
        },
        eQ = (e) => (0, P.useEffect)(e, eZ),
        eZ = [];
      function eK(e) {
        let t = (0, P.useRef)();
        return (
          (0, P.useEffect)(() => {
            t.current = e;
          }),
          t.current
        );
      }
      var eJ = Symbol.for("Animated:node"),
        e0 = (e) => !!e && e[eJ] === e,
        e1 = (e) => e && e[eJ],
        e2 = (e, t) => I(e, eJ, t),
        e3 = (e) => e && e[eJ] && e[eJ].getPayload(),
        e5 = class {
          constructor() {
            e2(this, this);
          }
          getPayload() {
            return this.payload || [];
          }
        },
        e9 = class extends e5 {
          constructor(e) {
            super(),
              (this._value = e),
              (this.done = !0),
              (this.durationProgress = 0),
              L.num(this._value) && (this.lastPosition = this._value);
          }
          static create(e) {
            return new e9(e);
          }
          getPayload() {
            return [this];
          }
          getValue() {
            return this._value;
          }
          setValue(e, t) {
            return (
              L.num(e) &&
                ((this.lastPosition = e),
                t &&
                  ((e = Math.round(e / t) * t),
                  this.done && (this.lastPosition = e))),
              this._value !== e && ((this._value = e), !0)
            );
          }
          reset() {
            let { done: e } = this;
            (this.done = !1),
              L.num(this._value) &&
                ((this.elapsedTime = 0),
                (this.durationProgress = 0),
                (this.lastPosition = this._value),
                e && (this.lastVelocity = null),
                (this.v0 = null));
          }
        },
        e4 = class extends e9 {
          constructor(e) {
            super(0),
              (this._string = null),
              (this._toString = ey({ output: [e, e] }));
          }
          static create(e) {
            return new e4(e);
          }
          getValue() {
            let e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
          }
          setValue(e) {
            if (L.str(e)) {
              if (e == this._string) return !1;
              (this._string = e), (this._value = 1);
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null;
            }
            return !0;
          }
          reset(e) {
            e && (this._toString = ey({ output: [this.getValue(), e] })),
              (this._value = 0),
              super.reset();
          }
        },
        e7 = { dependencies: null },
        e8 = class extends e5 {
          constructor(e) {
            super(), (this.source = e), this.setValue(e);
          }
          getValue(e) {
            let t = {};
            return (
              j(this.source, (i, r) => {
                e0(i)
                  ? (t[r] = i.getValue(e))
                  : eM(i)
                  ? (t[r] = eC(i))
                  : e || (t[r] = i);
              }),
              t
            );
          }
          setValue(e) {
            (this.source = e), (this.payload = this._makePayload(e));
          }
          reset() {
            this.payload && D(this.payload, (e) => e.reset());
          }
          _makePayload(e) {
            if (e) {
              let t = new Set();
              return j(e, this._addToPayload, t), Array.from(t);
            }
          }
          _addToPayload(e) {
            e7.dependencies && eM(e) && e7.dependencies.add(e);
            let t = e3(e);
            t && D(t, (e) => this.add(e));
          }
        },
        e6 = class extends e8 {
          constructor(e) {
            super(e);
          }
          static create(e) {
            return new e6(e);
          }
          getValue() {
            return this.source.map((e) => e.getValue());
          }
          setValue(e) {
            let t = this.getPayload();
            return e.length == t.length
              ? t.map((t, i) => t.setValue(e[i])).some(Boolean)
              : (super.setValue(e.map(te)), !0);
          }
        };
      function te(e) {
        return (eU(e) ? e4 : e9).create(e);
      }
      function tt(e) {
        let t = e1(e);
        return t ? t.constructor : L.arr(e) ? e6 : eU(e) ? e4 : e9;
      }
      function ti(e, ...t) {
        return L.fun(e) ? e(...t) : e;
      }
      Symbol.for("AnimatedComponent");
      var tr = (e, t) =>
          !0 === e || !!(t && e && (L.fun(e) ? e(t) : R(e).includes(t))),
        ts = (e, t) => (L.obj(e) ? t && e[t] : e),
        tn = (e, t) =>
          !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        ta = (e) => e,
        tl = (e, t = ta) => {
          let i = to;
          e.default && !0 !== e.default && (i = Object.keys((e = e.default)));
          let r = {};
          for (let s of i) {
            let i = t(e[s], s);
            L.und(i) || (r[s] = i);
          }
          return r;
        },
        to = [
          "config",
          "onProps",
          "onStart",
          "onChange",
          "onPause",
          "onResume",
          "onRest",
        ],
        td = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function tu(e) {
        let t = (function (e) {
          let t = {},
            i = 0;
          if (
            (j(e, (e, r) => {
              !td[r] && ((t[r] = e), i++);
            }),
            i)
          )
            return t;
        })(e);
        if (t) {
          let i = { to: t };
          return j(e, (e, r) => r in t || (i[r] = e)), i;
        }
        return { ...e };
      }
      function tc(e) {
        return (
          (e = eC(e)),
          L.arr(e)
            ? e.map(tc)
            : eU(e)
            ? k.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e
        );
      }
      function tp(e) {
        return L.fun(e) || (L.arr(e) && L.obj(e[0]));
      }
      var th = {
          default: { tension: 170, friction: 26 },
          gentle: { tension: 120, friction: 14 },
          wobbly: { tension: 180, friction: 12 },
          stiff: { tension: 210, friction: 20 },
          slow: { tension: 280, friction: 60 },
          molasses: { tension: 280, friction: 120 },
        },
        tf = {
          ...th.default,
          mass: 1,
          damping: 1,
          easing: ex.linear,
          clamp: !1,
        },
        tm = class {
          constructor() {
            (this.velocity = 0), Object.assign(this, tf);
          }
        };
      function tg(e, t) {
        if (L.und(t.decay)) {
          let i = !L.und(t.tension) || !L.und(t.friction);
          (!i && L.und(t.frequency) && L.und(t.damping) && L.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            i && (e.frequency = void 0);
        } else e.duration = void 0;
      }
      var tv = [],
        tb = class {
          constructor() {
            (this.changed = !1),
              (this.values = tv),
              (this.toValues = null),
              (this.fromValues = tv),
              (this.config = new tm()),
              (this.immediate = !1);
          }
        };
      function ty(
        e,
        { key: t, props: i, defaultProps: r, state: s, actions: n }
      ) {
        return new Promise((a, l) => {
          let o, d;
          let u = tr(i.cancel ?? r?.cancel, t);
          if (u) f();
          else {
            L.und(i.pause) || (s.paused = tr(i.pause, t));
            let e = r?.pause;
            !0 !== e && (e = s.paused || tr(e, t)),
              (o = ti(i.delay || 0, t)),
              e ? (s.resumeQueue.add(h), n.pause()) : (n.resume(), h());
          }
          function p() {
            s.resumeQueue.add(h),
              s.timeouts.delete(d),
              d.cancel(),
              (o = d.time - c.now());
          }
          function h() {
            o > 0 && !k.skipAnimation
              ? ((s.delayed = !0),
                (d = c.setTimeout(f, o)),
                s.pauseQueue.add(p),
                s.timeouts.add(d))
              : f();
          }
          function f() {
            s.delayed && (s.delayed = !1),
              s.pauseQueue.delete(p),
              s.timeouts.delete(d),
              e <= (s.cancelId || 0) && (u = !0);
            try {
              n.start({ ...i, callId: e, cancel: u }, a);
            } catch (e) {
              l(e);
            }
          }
        });
      }
      var tw = (e, t) =>
          1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
            ? tx(e.get())
            : t.every((e) => e.noop)
            ? tS(e.get())
            : tE(
                e.get(),
                t.every((e) => e.finished)
              ),
        tS = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        tE = (e, t, i = !1) => ({ value: e, finished: t, cancelled: i }),
        tx = (e) => ({ value: e, cancelled: !0, finished: !1 });
      function tT(e, t, i, r) {
        let { callId: s, parentId: n, onRest: a } = t,
          { asyncTo: l, promise: o } = i;
        return n || e !== l || t.reset
          ? (i.promise = (async () => {
              let d, u, p;
              (i.asyncId = s), (i.asyncTo = e);
              let h = tl(t, (e, t) => ("onRest" === t ? void 0 : e)),
                f = new Promise((e, t) => ((d = e), (u = t))),
                m = (e) => {
                  let t =
                    (s <= (i.cancelId || 0) && tx(r)) ||
                    (s !== i.asyncId && tE(r, !1));
                  if (t) throw ((e.result = t), u(e), e);
                },
                g = (e, t) => {
                  let n = new tM(),
                    a = new tC();
                  return (async () => {
                    if (k.skipAnimation)
                      throw (t_(i), (a.result = tE(r, !1)), u(a), a);
                    m(n);
                    let l = L.obj(e) ? { ...e } : { ...t, to: e };
                    (l.parentId = s),
                      j(h, (e, t) => {
                        L.und(l[t]) && (l[t] = e);
                      });
                    let o = await r.start(l);
                    return (
                      m(n),
                      i.paused &&
                        (await new Promise((e) => {
                          i.resumeQueue.add(e);
                        })),
                      o
                    );
                  })();
                };
              if (k.skipAnimation) return t_(i), tE(r, !1);
              try {
                let t;
                (t = L.arr(e)
                  ? (async (e) => {
                      for (let t of e) await g(t);
                    })(e)
                  : Promise.resolve(e(g, r.stop.bind(r)))),
                  await Promise.all([t.then(d), f]),
                  (p = tE(r.get(), !0, !1));
              } catch (e) {
                if (e instanceof tM) p = e.result;
                else if (e instanceof tC) p = e.result;
                else throw e;
              } finally {
                s == i.asyncId &&
                  ((i.asyncId = n),
                  (i.asyncTo = n ? l : void 0),
                  (i.promise = n ? o : void 0));
              }
              return (
                L.fun(a) &&
                  c.batchedUpdates(() => {
                    a(p, r, r.item);
                  }),
                p
              );
            })())
          : o;
      }
      function t_(e, t) {
        V(e.timeouts, (e) => e.cancel()),
          e.pauseQueue.clear(),
          e.resumeQueue.clear(),
          (e.asyncId = e.asyncTo = e.promise = void 0),
          t && (e.cancelId = t);
      }
      var tM = class extends Error {
          constructor() {
            super(
              "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
            );
          }
        },
        tC = class extends Error {
          constructor() {
            super("SkipAnimationSignal");
          }
        },
        tP = (e) => e instanceof tk,
        tO = 1,
        tk = class extends ek {
          constructor() {
            super(...arguments), (this.id = tO++), (this._priority = 0);
          }
          get priority() {
            return this._priority;
          }
          set priority(e) {
            this._priority != e &&
              ((this._priority = e), this._onPriorityChange(e));
          }
          get() {
            let e = e1(this);
            return e && e.getValue();
          }
          to(...e) {
            return k.to(this, e);
          }
          interpolate(...e) {
            return (
              eH(
                `${eB}The "interpolate" function is deprecated in v9 (use "to" instead)`
              ),
              k.to(this, e)
            );
          }
          toJSON() {
            return this.get();
          }
          observerAdded(e) {
            1 == e && this._attach();
          }
          observerRemoved(e) {
            0 == e && this._detach();
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            eO(this, { type: "change", parent: this, value: e, idle: t });
          }
          _onPriorityChange(e) {
            this.idle || X.sort(this),
              eO(this, { type: "priority", parent: this, priority: e });
          }
        },
        tA = Symbol.for("SpringPhase"),
        tI = (e) => (1 & e[tA]) > 0,
        tL = (e) => (2 & e[tA]) > 0,
        tz = (e) => (4 & e[tA]) > 0,
        tD = (e, t) => (t ? (e[tA] |= 3) : (e[tA] &= -3)),
        tj = (e, t) => (t ? (e[tA] |= 4) : (e[tA] &= -5)),
        tR = class extends tk {
          constructor(e, t) {
            if (
              (super(),
              (this.animation = new tb()),
              (this.defaultProps = {}),
              (this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._pendingCalls = new Set()),
              (this._lastCallId = 0),
              (this._lastToId = 0),
              (this._memoizedDuration = 0),
              !L.und(e) || !L.und(t))
            ) {
              let i = L.obj(e) ? { ...e } : { ...t, from: e };
              L.und(i.default) && (i.default = !0), this.start(i);
            }
          }
          get idle() {
            return !(tL(this) || this._state.asyncTo) || tz(this);
          }
          get goal() {
            return eC(this.animation.to);
          }
          get velocity() {
            let e = e1(this);
            return e instanceof e9
              ? e.lastVelocity || 0
              : e.getPayload().map((e) => e.lastVelocity || 0);
          }
          get hasAnimated() {
            return tI(this);
          }
          get isAnimating() {
            return tL(this);
          }
          get isPaused() {
            return tz(this);
          }
          get isDelayed() {
            return this._state.delayed;
          }
          advance(e) {
            let t = !0,
              i = !1,
              r = this.animation,
              { toValues: s } = r,
              { config: n } = r,
              a = e3(r.to);
            !a && eM(r.to) && (s = R(eC(r.to))),
              r.values.forEach((l, o) => {
                if (l.done) return;
                let d = l.constructor == e4 ? 1 : a ? a[o].lastPosition : s[o],
                  u = r.immediate,
                  c = d;
                if (!u) {
                  let t;
                  if (((c = l.lastPosition), n.tension <= 0)) {
                    l.done = !0;
                    return;
                  }
                  let i = (l.elapsedTime += e),
                    s = r.fromValues[o],
                    a =
                      null != l.v0
                        ? l.v0
                        : (l.v0 = L.arr(n.velocity)
                            ? n.velocity[o]
                            : n.velocity),
                    p =
                      n.precision ||
                      (s == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - s)));
                  if (L.und(n.duration)) {
                    if (n.decay) {
                      let e = !0 === n.decay ? 0.998 : n.decay,
                        r = Math.exp(-(1 - e) * i);
                      (c = s + (a / (1 - e)) * (1 - r)),
                        (u = Math.abs(l.lastPosition - c) <= p),
                        (t = a * r);
                    } else {
                      t = null == l.lastVelocity ? a : l.lastVelocity;
                      let i = n.restVelocity || p / 10,
                        r = n.clamp ? 0 : n.bounce,
                        o = !L.und(r),
                        h = s == d ? l.v0 > 0 : s < d,
                        f = Math.ceil(e / 1);
                      for (
                        let e = 0;
                        e < f &&
                        !(!(Math.abs(t) > i) && (u = Math.abs(d - c) <= p));
                        ++e
                      ) {
                        o && (c == d || c > d == h) && ((t = -t * r), (c = d));
                        let e =
                          (-(1e-6 * n.tension) * (c - d) +
                            -(0.001 * n.friction) * t) /
                          n.mass;
                        (t += 1 * e), (c += 1 * t);
                      }
                    }
                  } else {
                    let r = 1;
                    n.duration > 0 &&
                      (this._memoizedDuration !== n.duration &&
                        ((this._memoizedDuration = n.duration),
                        l.durationProgress > 0 &&
                          ((l.elapsedTime = n.duration * l.durationProgress),
                          (i = l.elapsedTime += e))),
                      (r =
                        (r = (n.progress || 0) + i / this._memoizedDuration) > 1
                          ? 1
                          : r < 0
                          ? 0
                          : r),
                      (l.durationProgress = r)),
                      (t =
                        ((c = s + n.easing(r) * (d - s)) - l.lastPosition) / e),
                      (u = 1 == r);
                  }
                  (l.lastVelocity = t),
                    Number.isNaN(c) &&
                      (console.warn("Got NaN while animating:", this),
                      (u = !0));
                }
                a && !a[o].done && (u = !1),
                  u ? (l.done = !0) : (t = !1),
                  l.setValue(c, n.round) && (i = !0);
              });
            let l = e1(this),
              o = l.getValue();
            if (t) {
              let e = eC(r.to);
              (o !== e || i) && !n.decay
                ? (l.setValue(e), this._onChange(e))
                : i && n.decay && this._onChange(o),
                this._stop();
            } else i && this._onChange(o);
          }
          set(e) {
            return (
              c.batchedUpdates(() => {
                this._stop(), this._focus(e), this._set(e);
              }),
              this
            );
          }
          pause() {
            this._update({ pause: !0 });
          }
          resume() {
            this._update({ pause: !1 });
          }
          finish() {
            if (tL(this)) {
              let { to: e, config: t } = this.animation;
              c.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop();
              });
            }
            return this;
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this;
          }
          start(e, t) {
            let i;
            return (
              L.und(e)
                ? ((i = this.queue || []), (this.queue = []))
                : (i = [L.obj(e) ? e : { ...t, to: e }]),
              Promise.all(i.map((e) => this._update(e))).then((e) =>
                tw(this, e)
              )
            );
          }
          stop(e) {
            let { to: t } = this.animation;
            return (
              this._focus(this.get()),
              t_(this._state, e && this._lastCallId),
              c.batchedUpdates(() => this._stop(t, e)),
              this
            );
          }
          reset() {
            this._update({ reset: !0 });
          }
          eventObserved(e) {
            "change" == e.type
              ? this._start()
              : "priority" == e.type && (this.priority = e.priority + 1);
          }
          _prepareNode(e) {
            let t = this.key || "",
              { to: i, from: r } = e;
            (null == (i = L.obj(i) ? i[t] : i) || tp(i)) && (i = void 0),
              null == (r = L.obj(r) ? r[t] : r) && (r = void 0);
            let s = { to: i, from: r };
            return (
              tI(this) ||
                (e.reverse && ([i, r] = [r, i]),
                (r = eC(r)),
                L.und(r) ? e1(this) || this._set(i) : this._set(r)),
              s
            );
          }
          _update({ ...e }, t) {
            let { key: i, defaultProps: r } = this;
            e.default &&
              Object.assign(
                r,
                tl(e, (e, t) => (/^on/.test(t) ? ts(e, i) : e))
              ),
              tB(this, e, "onProps"),
              tq(this, "onProps", e, this);
            let s = this._prepareNode(e);
            if (Object.isFrozen(this))
              throw Error(
                "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
              );
            let n = this._state;
            return ty(++this._lastCallId, {
              key: i,
              props: e,
              defaultProps: r,
              state: n,
              actions: {
                pause: () => {
                  tz(this) ||
                    (tj(this, !0),
                    F(n.pauseQueue),
                    tq(
                      this,
                      "onPause",
                      tE(this, tV(this, this.animation.to)),
                      this
                    ));
                },
                resume: () => {
                  tz(this) &&
                    (tj(this, !1),
                    tL(this) && this._resume(),
                    F(n.resumeQueue),
                    tq(
                      this,
                      "onResume",
                      tE(this, tV(this, this.animation.to)),
                      this
                    ));
                },
                start: this._merge.bind(this, s),
              },
            }).then((i) => {
              if (e.loop && i.finished && !(t && i.noop)) {
                let t = tF(e);
                if (t) return this._update(t, !0);
              }
              return i;
            });
          }
          _merge(e, t, i) {
            if (t.cancel) return this.stop(!0), i(tx(this));
            let r = !L.und(e.to),
              s = !L.und(e.from);
            if (r || s) {
              if (!(t.callId > this._lastToId)) return i(tx(this));
              this._lastToId = t.callId;
            }
            let { key: n, defaultProps: a, animation: l } = this,
              { to: o, from: d } = l,
              { to: u = o, from: p = d } = e;
            s && !r && (!t.default || L.und(u)) && (u = p),
              t.reverse && ([u, p] = [p, u]);
            let h = !z(p, d);
            h && (l.from = p), (p = eC(p));
            let f = !z(u, o);
            f && this._focus(u);
            let m = tp(t.to),
              { config: g } = l,
              { decay: v, velocity: b } = g;
            (r || s) && (g.velocity = 0),
              t.config &&
                !m &&
                (function (e, t, i) {
                  for (let r in (i &&
                    (tg((i = { ...i }), t), (t = { ...i, ...t })),
                  tg(e, t),
                  Object.assign(e, t),
                  tf))
                    null == e[r] && (e[r] = tf[r]);
                  let { frequency: r, damping: s } = e,
                    { mass: n } = e;
                  L.und(r) ||
                    (r < 0.01 && (r = 0.01),
                    s < 0 && (s = 0),
                    (e.tension = Math.pow((2 * Math.PI) / r, 2) * n),
                    (e.friction = (4 * Math.PI * s * n) / r));
                })(
                  g,
                  ti(t.config, n),
                  t.config !== a.config ? ti(a.config, n) : void 0
                );
            let y = e1(this);
            if (!y || L.und(u)) return i(tE(this, !0));
            let w = L.und(t.reset)
                ? s && !t.default
                : !L.und(p) && tr(t.reset, n),
              S = w ? p : this.get(),
              E = tc(u),
              x = L.num(E) || L.arr(E) || eU(E),
              T = !m && (!x || tr(a.immediate || t.immediate, n));
            if (f) {
              let e = tt(u);
              if (e !== y.constructor) {
                if (T) y = this._set(E);
                else
                  throw Error(
                    `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`
                  );
              }
            }
            let _ = y.constructor,
              M = eM(u),
              C = !1;
            if (!M) {
              let e = w || (!tI(this) && h);
              (f || e) && (M = !(C = z(tc(S), E))),
                ((z(l.immediate, T) || T) &&
                  z(g.decay, v) &&
                  z(g.velocity, b)) ||
                  (M = !0);
            }
            if (
              (C &&
                tL(this) &&
                (l.changed && !w ? (M = !0) : M || this._stop(o)),
              !m &&
                ((M || eM(o)) &&
                  ((l.values = y.getPayload()),
                  (l.toValues = eM(u) ? null : _ == e4 ? [1] : R(E))),
                l.immediate == T || ((l.immediate = T), T || w || this._set(o)),
                M))
            ) {
              let { onRest: e } = l;
              D(tG, (e) => tB(this, t, e));
              let r = tE(this, tV(this, o));
              F(this._pendingCalls, r),
                this._pendingCalls.add(i),
                l.changed &&
                  c.batchedUpdates(() => {
                    (l.changed = !w),
                      e?.(r, this),
                      w ? ti(a.onRest, r) : l.onStart?.(r, this);
                  });
            }
            w && this._set(S),
              m
                ? i(tT(t.to, t, this._state, this))
                : M
                ? this._start()
                : tL(this) && !f
                ? this._pendingCalls.add(i)
                : i(tS(S));
          }
          _focus(e) {
            let t = this.animation;
            e !== t.to &&
              (eP(this) && this._detach(),
              (t.to = e),
              eP(this) && this._attach());
          }
          _attach() {
            let e = 0,
              { to: t } = this.animation;
            eM(t) && (eI(t, this), tP(t) && (e = t.priority + 1)),
              (this.priority = e);
          }
          _detach() {
            let { to: e } = this.animation;
            eM(e) && eL(e, this);
          }
          _set(e, t = !0) {
            let i = eC(e);
            if (!L.und(i)) {
              let e = e1(this);
              if (!e || !z(i, e.getValue())) {
                let r = tt(i);
                e && e.constructor == r ? e.setValue(i) : e2(this, r.create(i)),
                  e &&
                    c.batchedUpdates(() => {
                      this._onChange(i, t);
                    });
              }
            }
            return e1(this);
          }
          _onStart() {
            let e = this.animation;
            e.changed ||
              ((e.changed = !0),
              tq(this, "onStart", tE(this, tV(this, e.to)), this));
          }
          _onChange(e, t) {
            t || (this._onStart(), ti(this.animation.onChange, e, this)),
              ti(this.defaultProps.onChange, e, this),
              super._onChange(e, t);
          }
          _start() {
            let e = this.animation;
            e1(this).reset(eC(e.to)),
              e.immediate ||
                (e.fromValues = e.values.map((e) => e.lastPosition)),
              tL(this) || (tD(this, !0), tz(this) || this._resume());
          }
          _resume() {
            k.skipAnimation ? this.finish() : X.start(this);
          }
          _stop(e, t) {
            if (tL(this)) {
              tD(this, !1);
              let i = this.animation;
              D(i.values, (e) => {
                e.done = !0;
              }),
                i.toValues && (i.onChange = i.onPause = i.onResume = void 0),
                eO(this, { type: "idle", parent: this });
              let r = t ? tx(this.get()) : tE(this.get(), tV(this, e ?? i.to));
              F(this._pendingCalls, r),
                i.changed && ((i.changed = !1), tq(this, "onRest", r, this));
            }
          }
        };
      function tV(e, t) {
        let i = tc(t);
        return z(tc(e.get()), i);
      }
      function tF(e, t = e.loop, i = e.to) {
        let r = ti(t);
        if (r) {
          let s = !0 !== r && tu(r),
            n = (s || e).reverse,
            a = !s || s.reset;
          return tN({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !n || tp(i) ? i : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...s,
          });
        }
      }
      function tN(e) {
        let { to: t, from: i } = (e = tu(e)),
          r = new Set();
        return (
          L.obj(t) && t$(t, r),
          L.obj(i) && t$(i, r),
          (e.keys = r.size ? Array.from(r) : null),
          e
        );
      }
      function t$(e, t) {
        j(e, (e, i) => null != e && t.add(i));
      }
      var tG = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function tB(e, t, i) {
        e.animation[i] = t[i] !== tn(t, i) ? ts(t[i], e.key) : void 0;
      }
      function tq(e, t, ...i) {
        e.animation[t]?.(...i), e.defaultProps[t]?.(...i);
      }
      var tH = ["onStart", "onChange", "onRest"],
        tW = 1,
        tU = class {
          constructor(e, t) {
            (this.id = tW++),
              (this.springs = {}),
              (this.queue = []),
              (this._lastAsyncId = 0),
              (this._active = new Set()),
              (this._changed = new Set()),
              (this._started = !1),
              (this._state = {
                paused: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._events = {
                onStart: new Map(),
                onChange: new Map(),
                onRest: new Map(),
              }),
              (this._onFrame = this._onFrame.bind(this)),
              t && (this._flush = t),
              e && this.start({ default: !0, ...e });
          }
          get idle() {
            return (
              !this._state.asyncTo &&
              Object.values(this.springs).every(
                (e) => e.idle && !e.isDelayed && !e.isPaused
              )
            );
          }
          get item() {
            return this._item;
          }
          set item(e) {
            this._item = e;
          }
          get() {
            let e = {};
            return this.each((t, i) => (e[i] = t.get())), e;
          }
          set(e) {
            for (let t in e) {
              let i = e[t];
              L.und(i) || this.springs[t].set(i);
            }
          }
          update(e) {
            return e && this.queue.push(tN(e)), this;
          }
          start(e) {
            let { queue: t } = this;
            return (e ? (t = R(e).map(tN)) : (this.queue = []), this._flush)
              ? this._flush(this, t)
              : (t0(this, t), tY(this, t));
          }
          stop(e, t) {
            if ((!!e !== e && (t = e), t)) {
              let i = this.springs;
              D(R(t), (t) => i[t].stop(!!e));
            } else
              t_(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
            return this;
          }
          pause(e) {
            if (L.und(e)) this.start({ pause: !0 });
            else {
              let t = this.springs;
              D(R(e), (e) => t[e].pause());
            }
            return this;
          }
          resume(e) {
            if (L.und(e)) this.start({ pause: !1 });
            else {
              let t = this.springs;
              D(R(e), (e) => t[e].resume());
            }
            return this;
          }
          each(e) {
            j(this.springs, e);
          }
          _onFrame() {
            let { onStart: e, onChange: t, onRest: i } = this._events,
              r = this._active.size > 0,
              s = this._changed.size > 0;
            ((r && !this._started) || (s && !this._started)) &&
              ((this._started = !0),
              V(e, ([e, t]) => {
                (t.value = this.get()), e(t, this, this._item);
              }));
            let n = !r && this._started,
              a = s || (n && i.size) ? this.get() : null;
            s &&
              t.size &&
              V(t, ([e, t]) => {
                (t.value = a), e(t, this, this._item);
              }),
              n &&
                ((this._started = !1),
                V(i, ([e, t]) => {
                  (t.value = a), e(t, this, this._item);
                }));
          }
          eventObserved(e) {
            if ("change" == e.type)
              this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent);
            }
            c.onFrame(this._onFrame);
          }
        };
      function tY(e, t) {
        return Promise.all(t.map((t) => tX(e, t))).then((t) => tw(e, t));
      }
      async function tX(e, t, i) {
        let { keys: r, to: s, from: n, loop: a, onRest: l, onResolve: o } = t,
          d = L.obj(t.default) && t.default;
        a && (t.loop = !1),
          !1 === s && (t.to = null),
          !1 === n && (t.from = null);
        let u = L.arr(s) || L.fun(s) ? s : void 0;
        u
          ? ((t.to = void 0), (t.onRest = void 0), d && (d.onRest = void 0))
          : D(tH, (i) => {
              let r = t[i];
              if (L.fun(r)) {
                let s = e._events[i];
                (t[i] = ({ finished: e, cancelled: t }) => {
                  let i = s.get(r);
                  i
                    ? (e || (i.finished = !1), t && (i.cancelled = !0))
                    : s.set(r, {
                        value: null,
                        finished: e || !1,
                        cancelled: t || !1,
                      });
                }),
                  d && (d[i] = t[i]);
              }
            });
        let p = e._state;
        !p.paused === t.pause
          ? ((p.paused = t.pause), F(t.pause ? p.pauseQueue : p.resumeQueue))
          : p.paused && (t.pause = !0);
        let h = (r || Object.keys(e.springs)).map((i) => e.springs[i].start(t)),
          f = !0 === t.cancel || !0 === tn(t, "cancel");
        (u || (f && p.asyncId)) &&
          h.push(
            ty(++e._lastAsyncId, {
              props: t,
              state: p,
              actions: {
                pause: A,
                resume: A,
                start(t, i) {
                  f
                    ? (t_(p, e._lastAsyncId), i(tx(e)))
                    : ((t.onRest = l), i(tT(u, t, p, e)));
                },
              },
            })
          ),
          p.paused &&
            (await new Promise((e) => {
              p.resumeQueue.add(e);
            }));
        let m = tw(e, await Promise.all(h));
        if (a && m.finished && !(i && m.noop)) {
          let i = tF(t, a, s);
          if (i) return t0(e, [i]), tX(e, i, !0);
        }
        return o && c.batchedUpdates(() => o(m, e, e.item)), m;
      }
      function tQ(e, t) {
        let i = { ...e.springs };
        return (
          t &&
            D(R(t), (e) => {
              L.und(e.keys) && (e = tN(e)),
                L.obj(e.to) || (e = { ...e, to: void 0 }),
                tJ(i, e, (e) => tK(e));
            }),
          tZ(e, i),
          i
        );
      }
      function tZ(e, t) {
        j(t, (t, i) => {
          e.springs[i] || ((e.springs[i] = t), eI(t, e));
        });
      }
      function tK(e, t) {
        let i = new tR();
        return (i.key = e), t && eI(i, t), i;
      }
      function tJ(e, t, i) {
        t.keys &&
          D(t.keys, (r) => {
            (e[r] || (e[r] = i(r)))._prepareNode(t);
          });
      }
      function t0(e, t) {
        D(t, (t) => {
          tJ(e.springs, t, (t) => tK(t, e));
        });
      }
      var t1 = ({ children: e, ...t }) => {
          let i = (0, P.useContext)(t2),
            r = t.pause || !!i.pause,
            s = t.immediate || !!i.immediate;
          t = (function (e, t) {
            let [i] = (0, P.useState)(() => ({ inputs: t, result: e() })),
              r = (0, P.useRef)(),
              s = r.current,
              n = s;
            return (
              n
                ? (t &&
                    n.inputs &&
                    (function (e, t) {
                      if (e.length !== t.length) return !1;
                      for (let i = 0; i < e.length; i++)
                        if (e[i] !== t[i]) return !1;
                      return !0;
                    })(t, n.inputs)) ||
                  (n = { inputs: t, result: e() })
                : (n = i),
              (0, P.useEffect)(() => {
                (r.current = n), s == i && (i.inputs = i.result = void 0);
              }, [n]),
              n.result
            );
          })(() => ({ pause: r, immediate: s }), [r, s]);
          let { Provider: n } = t2;
          return P.createElement(n, { value: t }, e);
        },
        t2 =
          ((r = {}),
          Object.assign(t1, P.createContext(r)),
          (t1.Provider._context = t1),
          (t1.Consumer._context = t1),
          t1);
      (t1.Provider = t2.Provider), (t1.Consumer = t2.Consumer);
      var t3 = () => {
        let e = [],
          t = function (t) {
            eW(
              `${eB}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
            );
            let r = [];
            return (
              D(e, (e, s) => {
                if (L.und(t)) r.push(e.start());
                else {
                  let n = i(t, e, s);
                  n && r.push(e.start(n));
                }
              }),
              r
            );
          };
        (t.current = e),
          (t.add = function (t) {
            e.includes(t) || e.push(t);
          }),
          (t.delete = function (t) {
            let i = e.indexOf(t);
            ~i && e.splice(i, 1);
          }),
          (t.pause = function () {
            return D(e, (e) => e.pause(...arguments)), this;
          }),
          (t.resume = function () {
            return D(e, (e) => e.resume(...arguments)), this;
          }),
          (t.set = function (t) {
            D(e, (e, i) => {
              let r = L.fun(t) ? t(i, e) : t;
              r && e.set(r);
            });
          }),
          (t.start = function (t) {
            let i = [];
            return (
              D(e, (e, r) => {
                if (L.und(t)) i.push(e.start());
                else {
                  let s = this._getProps(t, e, r);
                  s && i.push(e.start(s));
                }
              }),
              i
            );
          }),
          (t.stop = function () {
            return D(e, (e) => e.stop(...arguments)), this;
          }),
          (t.update = function (t) {
            return D(e, (e, i) => e.update(this._getProps(t, e, i))), this;
          });
        let i = function (e, t, i) {
          return L.fun(e) ? e(i, t) : e;
        };
        return (t._getProps = i), t;
      };
      function t5(e, t, i) {
        let r = L.fun(t) && t;
        r && !i && (i = []);
        let s = (0, P.useMemo)(
            () => (r || 3 == arguments.length ? t3() : void 0),
            []
          ),
          n = (0, P.useRef)(0),
          a = (function () {
            let e = (0, P.useState)()[1],
              t = eX();
            return () => {
              t.current && e(Math.random());
            };
          })(),
          l = (0, P.useMemo)(
            () => ({
              ctrls: [],
              queue: [],
              flush(e, t) {
                let i = tQ(e, t);
                return !(n.current > 0) ||
                  l.queue.length ||
                  Object.keys(i).some((t) => !e.springs[t])
                  ? new Promise((r) => {
                      tZ(e, i),
                        l.queue.push(() => {
                          r(tY(e, t));
                        }),
                        a();
                    })
                  : tY(e, t);
              },
            }),
            []
          ),
          o = (0, P.useRef)([...l.ctrls]),
          d = [],
          u = eK(e) || 0;
        function c(e, i) {
          for (let s = e; s < i; s++) {
            let e = o.current[s] || (o.current[s] = new tU(null, l.flush)),
              i = r ? r(s, e) : t[s];
            i &&
              (d[s] = (function (e) {
                let t = tN(e);
                return L.und(t.default) && (t.default = tl(t)), t;
              })(i));
          }
        }
        (0, P.useMemo)(() => {
          D(o.current.slice(e, u), (e) => {
            e.ref?.delete(e), s?.delete(e), e.stop(!0);
          }),
            (o.current.length = e),
            c(u, e);
        }, [e]),
          (0, P.useMemo)(() => {
            c(0, Math.min(u, e));
          }, i);
        let p = o.current.map((e, t) => tQ(e, d[t])),
          h = (0, P.useContext)(t1),
          f = eK(h),
          m =
            h !== f &&
            (function (e) {
              for (let t in e) return !0;
              return !1;
            })(h);
        eY(() => {
          n.current++, (l.ctrls = o.current);
          let { queue: e } = l;
          e.length && ((l.queue = []), D(e, (e) => e())),
            D(o.current, (e, t) => {
              s?.add(e), m && e.start({ default: h });
              let i = d[t];
              if (i) {
                var r;
                (r = i.ref) &&
                  e.ref !== r &&
                  (e.ref?.delete(e), r.add(e), (e.ref = r)),
                  e.ref ? e.queue.push(i) : e.start(i);
              }
            });
        }),
          eQ(() => () => {
            D(l.ctrls, (e) => e.stop(!0));
          });
        let g = p.map((e) => ({ ...e }));
        return s ? [g, s] : g;
      }
      function t9(e, t) {
        let i = L.fun(e),
          [[r], s] = t5(1, i ? e : [e], i ? t || [] : t);
        return i || 2 == arguments.length ? [r, s] : r;
      }
      var t4 = { any: 0, all: 1 };
      function t7(e, t) {
        let [i, r] = (0, P.useState)(!1),
          s = (0, P.useRef)(),
          n = L.fun(e) && e,
          { to: a = {}, from: l = {}, ...o } = n ? n() : {},
          d = n ? t : e,
          [u, c] = t9(() => ({ from: l, ...o }), []);
        return (eY(() => {
          let e = s.current,
            { root: t, once: n, amount: o = "any", ...u } = d ?? {};
          if (!e || (n && i) || "undefined" == typeof IntersectionObserver)
            return;
          let p = new WeakMap(),
            h = () => (
              a && c.start(a),
              r(!0),
              n
                ? void 0
                : () => {
                    l && c.start(l), r(!1);
                  }
            ),
            f = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  let t = p.get(e.target);
                  if (!!t !== e.isIntersecting) {
                    if (e.isIntersecting) {
                      let t = h();
                      L.fun(t) ? p.set(e.target, t) : f.unobserve(e.target);
                    } else t && (t(), p.delete(e.target));
                  }
                });
              },
              {
                root: (t && t.current) || void 0,
                threshold: "number" == typeof o || Array.isArray(o) ? o : t4[o],
                ...u,
              }
            );
          return f.observe(e), () => f.unobserve(e);
        }, [d]),
        n)
          ? [s, u]
          : [s, i];
      }
      var t8 = class extends tk {
        constructor(e, t) {
          super(),
            (this.source = e),
            (this.idle = !0),
            (this._active = new Set()),
            (this.calc = ey(...t));
          let i = this._get();
          e2(this, tt(i).create(i));
        }
        advance(e) {
          let t = this._get();
          z(t, this.get()) ||
            (e1(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && ie(this._active) && it(this);
        }
        _get() {
          let e = L.arr(this.source) ? this.source.map(eC) : R(eC(this.source));
          return this.calc(...e);
        }
        _start() {
          this.idle &&
            !ie(this._active) &&
            ((this.idle = !1),
            D(e3(this), (e) => {
              e.done = !1;
            }),
            k.skipAnimation
              ? (c.batchedUpdates(() => this.advance()), it(this))
              : X.start(this));
        }
        _attach() {
          let e = 1;
          D(R(this.source), (t) => {
            eM(t) && eI(t, this),
              tP(t) &&
                (t.idle || this._active.add(t),
                (e = Math.max(e, t.priority + 1)));
          }),
            (this.priority = e),
            this._start();
        }
        _detach() {
          D(R(this.source), (e) => {
            eM(e) && eL(e, this);
          }),
            this._active.clear(),
            it(this);
        }
        eventObserved(e) {
          "change" == e.type
            ? e.idle
              ? this.advance()
              : (this._active.add(e.parent), this._start())
            : "idle" == e.type
            ? this._active.delete(e.parent)
            : "priority" == e.type &&
              (this.priority = R(this.source).reduce(
                (e, t) => Math.max(e, (tP(t) ? t.priority : 0) + 1),
                0
              ));
        }
      };
      function t6(e) {
        return !1 !== e.idle;
      }
      function ie(e) {
        return !e.size || Array.from(e).every(t6);
      }
      function it(e) {
        e.idle ||
          ((e.idle = !0),
          D(e3(e), (e) => {
            e.done = !0;
          }),
          eO(e, { type: "idle", parent: e }));
      }
      k.assign({
        createStringInterpolator: (e) => {
          a ||
            (a = $
              ? RegExp(`(${Object.keys($).join("|")})(?!\\w)`, "g")
              : /^\b$/);
          let t = e.output.map((e) =>
              eC(e).replace(eF, eN).replace(ej, eb).replace(a, eb)
            ),
            i = t.map((e) => e.match(eD).map(Number)),
            r = i[0]
              .map((e, t) =>
                i.map((e) => {
                  if (!(t in e))
                    throw Error(
                      'The arity of each "output" value must be equal'
                    );
                  return e[t];
                })
              )
              .map((t) => ey({ ...e, output: t }));
          return (e) => {
            let i =
                !eR.test(t[0]) && t.find((e) => eR.test(e))?.replace(eD, ""),
              s = 0;
            return t[0]
              .replace(eD, () => `${r[s++](e)}${i || ""}`)
              .replace(eV, eG);
          };
        },
        to: (e, t) => new t8(e, t),
      }),
        X.advance;
      var ii = i(3935),
        ir = iS(),
        is = (e) => iv(e, ir),
        ia = iS();
      is.write = (e) => iv(e, ia);
      var il = iS();
      is.onStart = (e) => iv(e, il);
      var io = iS();
      is.onFrame = (e) => iv(e, io);
      var id = iS();
      is.onFinish = (e) => iv(e, id);
      var iu = [];
      is.setTimeout = (e, t) => {
        let i = is.now() + t,
          r = () => {
            let e = iu.findIndex((e) => e.cancel == r);
            ~e && iu.splice(e, 1), (im -= ~e ? 1 : 0);
          },
          s = { time: i, handler: e, cancel: r };
        return iu.splice(ic(i), 0, s), (im += 1), ib(), s;
      };
      var ic = (e) => ~(~iu.findIndex((t) => t.time > e) || ~iu.length);
      (is.cancel = (e) => {
        il.delete(e), io.delete(e), id.delete(e), ir.delete(e), ia.delete(e);
      }),
        (is.sync = (e) => {
          (ig = !0), is.batchedUpdates(e), (ig = !1);
        }),
        (is.throttle = (e) => {
          let t;
          function i() {
            try {
              e(...t);
            } finally {
              t = null;
            }
          }
          function r(...e) {
            (t = e), is.onStart(i);
          }
          return (
            (r.handler = e),
            (r.cancel = () => {
              il.delete(i), (t = null);
            }),
            r
          );
        });
      var ip =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      (is.use = (e) => (ip = e)),
        (is.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        (is.batchedUpdates = (e) => e()),
        (is.catch = console.error),
        (is.frameLoop = "always"),
        (is.advance = () => {
          "demand" !== is.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
              )
            : iw();
        });
      var ih = -1,
        im = 0,
        ig = !1;
      function iv(e, t) {
        ig ? (t.delete(e), e(0)) : (t.add(e), ib());
      }
      function ib() {
        ih < 0 && ((ih = 0), "demand" !== is.frameLoop && ip(iy));
      }
      function iy() {
        ~ih && (ip(iy), is.batchedUpdates(iw));
      }
      function iw() {
        let e = ih,
          t = ic((ih = is.now()));
        if ((t && (iE(iu.splice(0, t), (e) => e.handler()), (im -= t)), !im)) {
          ih = -1;
          return;
        }
        il.flush(),
          ir.flush(e ? Math.min(64, ih - e) : 16.667),
          io.flush(),
          ia.flush(),
          id.flush();
      }
      function iS() {
        let e = new Set(),
          t = e;
        return {
          add(i) {
            (im += t != e || e.has(i) ? 0 : 1), e.add(i);
          },
          delete: (i) => ((im -= t == e && e.has(i) ? 1 : 0), e.delete(i)),
          flush(i) {
            t.size &&
              ((e = new Set()),
              (im -= t.size),
              iE(t, (t) => t(i) && e.add(t)),
              (im += e.size),
              (t = e));
          },
        };
      }
      function iE(e, t) {
        e.forEach((e) => {
          try {
            t(e);
          } catch (e) {
            is.catch(e);
          }
        });
      }
      var ix = Object.defineProperty;
      ((e, t) => {
        for (var i in t) ix(e, i, { get: t[i], enumerable: !0 });
      })(
        {},
        {
          assign: () => iL,
          colors: () => ik,
          createStringInterpolator: () => l,
          skipAnimation: () => iA,
          to: () => o,
          willAdvance: () => iI,
        }
      );
      var iT = (e, t, i) =>
          Object.defineProperty(e, t, {
            value: i,
            writable: !0,
            configurable: !0,
          }),
        i_ = {
          arr: Array.isArray,
          obj: (e) => !!e && "Object" === e.constructor.name,
          fun: (e) => "function" == typeof e,
          str: (e) => "string" == typeof e,
          num: (e) => "number" == typeof e,
          und: (e) => void 0 === e,
        },
        iM = (e, t) => e.forEach(t);
      function iC(e, t, i) {
        if (i_.arr(e)) {
          for (let r = 0; r < e.length; r++) t.call(i, e[r], `${r}`);
          return;
        }
        for (let r in e) e.hasOwnProperty(r) && t.call(i, e[r], r);
      }
      var iP = (e) => (i_.und(e) ? [] : i_.arr(e) ? e : [e]),
        iO = () =>
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        ik = null,
        iA = !1,
        iI = function () {},
        iL = (e) => {
          e.to && (o = e.to),
            e.now && (is.now = e.now),
            void 0 !== e.colors && (ik = e.colors),
            null != e.skipAnimation && (iA = e.skipAnimation),
            e.createStringInterpolator && (l = e.createStringInterpolator),
            e.requestAnimationFrame && is.use(e.requestAnimationFrame),
            e.batchedUpdates && (is.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (iI = e.willAdvance),
            e.frameLoop && (is.frameLoop = e.frameLoop);
        },
        iz = [],
        iD = [],
        ij = "[-+]?\\d*\\.?\\d+",
        iR = ij + "%";
      function iV(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var iF = RegExp("rgb" + iV(ij, ij, ij)),
        iN = RegExp("rgba" + iV(ij, ij, ij, ij)),
        i$ = RegExp("hsl" + iV(ij, iR, iR)),
        iG = RegExp("hsla" + iV(ij, iR, iR, ij)),
        iB = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        iq =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        iH = /^#([0-9a-fA-F]{6})$/,
        iW = /^#([0-9a-fA-F]{8})$/;
      function iU(e, t, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? e + (t - e) * 6 * i
          : i < 0.5
          ? t
          : i < 2 / 3
          ? e + (t - e) * (2 / 3 - i) * 6
          : e;
      }
      function iY(e, t, i) {
        let r = i < 0.5 ? i * (1 + t) : i + t - i * t,
          s = 2 * i - r;
        return (
          (Math.round(255 * iU(s, r, e + 1 / 3)) << 24) |
          (Math.round(255 * iU(s, r, e)) << 16) |
          (Math.round(255 * iU(s, r, e - 1 / 3)) << 8)
        );
      }
      function iX(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function iQ(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function iZ(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function iK(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function iJ(e) {
        let t;
        let i =
          "number" == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = iH.exec(e))
            ? parseInt(t[1] + "ff", 16) >>> 0
            : ik && void 0 !== ik[e]
            ? ik[e]
            : (t = iF.exec(e))
            ? ((iX(t[1]) << 24) | (iX(t[2]) << 16) | (iX(t[3]) << 8) | 255) >>>
              0
            : (t = iN.exec(e))
            ? ((iX(t[1]) << 24) |
                (iX(t[2]) << 16) |
                (iX(t[3]) << 8) |
                iZ(t[4])) >>>
              0
            : (t = iB.exec(e))
            ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
            : (t = iW.exec(e))
            ? parseInt(t[1], 16) >>> 0
            : (t = iq.exec(e))
            ? parseInt(
                t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                16
              ) >>> 0
            : (t = i$.exec(e))
            ? (255 | iY(iQ(t[1]), iK(t[2]), iK(t[3]))) >>> 0
            : (t = iG.exec(e))
            ? (iY(iQ(t[1]), iK(t[2]), iK(t[3])) | iZ(t[4])) >>> 0
            : null;
        if (null === i) return e;
        let r = (4278190080 & (i = i || 0)) >>> 24,
          s = (16711680 & i) >>> 16,
          n = (65280 & i) >>> 8,
          a = (255 & i) / 255;
        return `rgba(${r}, ${s}, ${n}, ${a})`;
      }
      var i0 = (e, t, i) => {
          if (i_.fun(e)) return e;
          if (i_.arr(e)) return i0({ range: e, output: t, extrapolate: i });
          if (i_.str(e.output[0])) return l(e);
          let r = e.output,
            s = e.range || [0, 1],
            n = e.extrapolateLeft || e.extrapolate || "extend",
            a = e.extrapolateRight || e.extrapolate || "extend",
            o = e.easing || ((e) => e);
          return (t) => {
            let i = (function (e, t) {
              for (var i = 1; i < t.length - 1 && !(t[i] >= e); ++i);
              return i - 1;
            })(t, s);
            return (function (e, t, i, r, s, n, a, l, o) {
              let d = o ? o(e) : e;
              if (d < t) {
                if ("identity" === a) return d;
                "clamp" === a && (d = t);
              }
              if (d > i) {
                if ("identity" === l) return d;
                "clamp" === l && (d = i);
              }
              return r === s
                ? r
                : t === i
                ? e <= t
                  ? r
                  : s
                : (t === -1 / 0
                    ? (d = -d)
                    : i === 1 / 0
                    ? (d -= t)
                    : (d = (d - t) / (i - t)),
                  (d = n(d)),
                  r === -1 / 0
                    ? (d = -d)
                    : s === 1 / 0
                    ? (d += r)
                    : (d = d * (s - r) + r),
                  d);
            })(t, s[i], s[i + 1], r[i], r[i + 1], o, n, a, e.map);
          };
        },
        i1 = Symbol.for("FluidValue.get"),
        i2 = Symbol.for("FluidValue.observers"),
        i3 = (e) => !!(e && e[i1]),
        i5 = (e) => (e && e[i1] ? e[i1]() : e),
        i9 = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            i4(this, e);
          }
        },
        i4 = (e, t) => i6(e, i1, t);
      function i7(e, t) {
        if (e[i1]) {
          let i = e[i2];
          i || i6(e, i2, (i = new Set())),
            !i.has(t) &&
              (i.add(t), e.observerAdded && e.observerAdded(i.size, t));
        }
        return t;
      }
      function i8(e, t) {
        let i = e[i2];
        if (i && i.has(t)) {
          let r = i.size - 1;
          r ? i.delete(t) : (e[i2] = null),
            e.observerRemoved && e.observerRemoved(r, t);
        }
      }
      var i6 = (e, t, i) =>
          Object.defineProperty(e, t, {
            value: i,
            writable: !0,
            configurable: !0,
          }),
        re = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rt =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ri = RegExp(`(${re.source})(%|[a-z]+)`, "i"),
        rr = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        rs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        rn = (e) => {
          let [t, i] = ra(e);
          if (!t || iO()) return e;
          let r = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(t);
          if (r) return r.trim();
          if (i && i.startsWith("--")) {
            let e = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(i);
            if (e) return e;
          } else if (i && rs.test(i)) return rn(i);
          else if (i) return i;
          return e;
        },
        ra = (e) => {
          let t = rs.exec(e);
          if (!t) return [,];
          let [, i, r] = t;
          return [i, r];
        },
        rl = (e, t, i, r, s) =>
          `rgba(${Math.round(t)}, ${Math.round(i)}, ${Math.round(r)}, ${s})`,
        ro = (e) => {
          let t = !1;
          if ("function" != typeof e)
            throw TypeError("react-spring: once requires a function parameter");
          return (...i) => {
            t || (e(...i), (t = !0));
          };
        };
      ro(console.warn), ro(console.warn);
      var rd = iO() ? P.useEffect : P.useLayoutEffect,
        ru = () => {
          let e = (0, P.useRef)(!1);
          return (
            rd(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              []
            ),
            e
          );
        },
        rc = (e) => (0, P.useEffect)(e, rp),
        rp = [],
        rh = Symbol.for("Animated:node"),
        rf = (e) => !!e && e[rh] === e,
        rm = (e, t) => iT(e, rh, t),
        rg = (e) => e && e[rh] && e[rh].getPayload(),
        rv = class {
          constructor() {
            rm(this, this);
          }
          getPayload() {
            return this.payload || [];
          }
        },
        rb = class extends rv {
          constructor(e) {
            super(),
              (this._value = e),
              (this.done = !0),
              (this.durationProgress = 0),
              i_.num(this._value) && (this.lastPosition = this._value);
          }
          static create(e) {
            return new rb(e);
          }
          getPayload() {
            return [this];
          }
          getValue() {
            return this._value;
          }
          setValue(e, t) {
            return (
              i_.num(e) &&
                ((this.lastPosition = e),
                t &&
                  ((e = Math.round(e / t) * t),
                  this.done && (this.lastPosition = e))),
              this._value !== e && ((this._value = e), !0)
            );
          }
          reset() {
            let { done: e } = this;
            (this.done = !1),
              i_.num(this._value) &&
                ((this.elapsedTime = 0),
                (this.durationProgress = 0),
                (this.lastPosition = this._value),
                e && (this.lastVelocity = null),
                (this.v0 = null));
          }
        },
        ry = { dependencies: null },
        rw = class extends rv {
          constructor(e) {
            super(), (this.source = e), this.setValue(e);
          }
          getValue(e) {
            let t = {};
            return (
              iC(this.source, (i, r) => {
                rf(i)
                  ? (t[r] = i.getValue(e))
                  : i3(i)
                  ? (t[r] = i5(i))
                  : e || (t[r] = i);
              }),
              t
            );
          }
          setValue(e) {
            (this.source = e), (this.payload = this._makePayload(e));
          }
          reset() {
            this.payload && iM(this.payload, (e) => e.reset());
          }
          _makePayload(e) {
            if (e) {
              let t = new Set();
              return iC(e, this._addToPayload, t), Array.from(t);
            }
          }
          _addToPayload(e) {
            ry.dependencies && i3(e) && ry.dependencies.add(e);
            let t = rg(e);
            t && iM(t, (e) => this.add(e));
          }
        },
        rS = (e, t) => {
          let i = !i_.fun(e) || (e.prototype && e.prototype.isReactComponent);
          return (0, P.forwardRef)((r, s) => {
            let n = (0, P.useRef)(null),
              a =
                i &&
                (0, P.useCallback)(
                  (e) => {
                    n.current = (s && (i_.fun(s) ? s(e) : (s.current = e)), e);
                  },
                  [s]
                ),
              [l, o] = (function (e, t) {
                let i = new Set();
                return (
                  (ry.dependencies = i),
                  e.style &&
                    (e = { ...e, style: t.createAnimatedStyle(e.style) }),
                  (e = new rw(e)),
                  (ry.dependencies = null),
                  [e, i]
                );
              })(r, t),
              d = (function () {
                let e = (0, P.useState)()[1],
                  t = ru();
                return () => {
                  t.current && e(Math.random());
                };
              })(),
              u = () => {
                let e = n.current;
                (!i || e) &&
                  !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) &&
                  d();
              },
              c = new rE(u, o),
              p = (0, P.useRef)();
            rd(
              () => (
                (p.current = c),
                iM(o, (e) => i7(e, c)),
                () => {
                  p.current &&
                    (iM(p.current.deps, (e) => i8(e, p.current)),
                    is.cancel(p.current.update));
                }
              )
            ),
              (0, P.useEffect)(u, []),
              rc(() => () => {
                let e = p.current;
                iM(e.deps, (t) => i8(t, e));
              });
            let h = t.getComponentProps(l.getValue());
            return P.createElement(e, { ...h, ref: a });
          });
        },
        rE = class {
          constructor(e, t) {
            (this.update = e), (this.deps = t);
          }
          eventObserved(e) {
            "change" == e.type && is.write(this.update);
          }
        },
        rx = Symbol.for("AnimatedComponent"),
        rT = (e) =>
          i_.str(e)
            ? e
            : e && i_.str(e.displayName)
            ? e.displayName
            : (i_.fun(e) && e.name) || null,
        r_ = /^--/,
        rM = {},
        rC = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        rP = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
        rO = ["Webkit", "Ms", "Moz", "O"];
      rC = Object.keys(rC).reduce(
        (e, t) => (rO.forEach((i) => (e[rP(i, t)] = e[t])), e),
        rC
      );
      var rk = /^(matrix|translate|scale|rotate|skew)/,
        rA = /^(translate)/,
        rI = /^(rotate|skew)/,
        rL = (e, t) => (i_.num(e) && 0 !== e ? e + t : e),
        rz = (e, t) =>
          i_.arr(e)
            ? e.every((e) => rz(e, t))
            : i_.num(e)
            ? e === t
            : parseFloat(e) === t,
        rD = class extends rw {
          constructor({ x: e, y: t, z: i, ...r }) {
            let s = [],
              n = [];
            (e || t || i) &&
              (s.push([e || 0, t || 0, i || 0]),
              n.push((e) => [
                `translate3d(${e.map((e) => rL(e, "px")).join(",")})`,
                rz(e, 0),
              ])),
              iC(r, (e, t) => {
                if ("transform" === t)
                  s.push([e || ""]), n.push((e) => [e, "" === e]);
                else if (rk.test(t)) {
                  if ((delete r[t], i_.und(e))) return;
                  let i = rA.test(t) ? "px" : rI.test(t) ? "deg" : "";
                  s.push(iP(e)),
                    n.push(
                      "rotate3d" === t
                        ? ([e, t, r, s]) => [
                            `rotate3d(${e},${t},${r},${rL(s, i)})`,
                            rz(s, 0),
                          ]
                        : (e) => [
                            `${t}(${e.map((e) => rL(e, i)).join(",")})`,
                            rz(e, t.startsWith("scale") ? 1 : 0),
                          ]
                    );
                }
              }),
              s.length && (r.transform = new rj(s, n)),
              super(r);
          }
        },
        rj = class extends i9 {
          constructor(e, t) {
            super(),
              (this.inputs = e),
              (this.transforms = t),
              (this._value = null);
          }
          get() {
            return this._value || (this._value = this._get());
          }
          _get() {
            let e = "",
              t = !0;
            return (
              iM(this.inputs, (i, r) => {
                let s = i5(i[0]),
                  [n, a] = this.transforms[r](i_.arr(s) ? s : i.map(i5));
                (e += " " + n), (t = t && a);
              }),
              t ? "none" : e
            );
          }
          observerAdded(e) {
            1 == e &&
              iM(this.inputs, (e) => iM(e, (e) => i3(e) && i7(e, this)));
          }
          observerRemoved(e) {
            0 == e &&
              iM(this.inputs, (e) => iM(e, (e) => i3(e) && i8(e, this)));
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null),
              (function (e, t) {
                let i = e[i2];
                i &&
                  i.forEach((e) => {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                  });
              })(this, e);
          }
        };
      k.assign({
        batchedUpdates: ii.unstable_batchedUpdates,
        createStringInterpolator: (e) => {
          d ||
            (d = ik
              ? RegExp(`(${Object.keys(ik).join("|")})(?!\\w)`, "g")
              : /^\b$/);
          let t = e.output.map((e) =>
              i5(e).replace(rs, rn).replace(rt, iJ).replace(d, iJ)
            ),
            i = t.map((e) => e.match(re).map(Number)),
            r = i[0]
              .map((e, t) =>
                i.map((e) => {
                  if (!(t in e))
                    throw Error(
                      'The arity of each "output" value must be equal'
                    );
                  return e[t];
                })
              )
              .map((t) => i0({ ...e, output: t }));
          return (e) => {
            let i =
                !ri.test(t[0]) && t.find((e) => ri.test(e))?.replace(re, ""),
              s = 0;
            return t[0]
              .replace(re, () => `${r[s++](e)}${i || ""}`)
              .replace(rr, rl);
          };
        },
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
      });
      var rR = ((
        e,
        {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: i = (e) => new rw(e),
          getComponentProps: r = (e) => e,
        } = {}
      ) => {
        let s = {
            applyAnimatedValues: t,
            createAnimatedStyle: i,
            getComponentProps: r,
          },
          n = (e) => {
            let t = rT(e) || "Anonymous";
            return (
              ((e = i_.str(e)
                ? n[e] || (n[e] = rS(e, s))
                : e[rx] || (e[rx] = rS(e, s))).displayName = `Animated(${t})`),
              e
            );
          };
        return (
          iC(e, (t, i) => {
            i_.arr(e) && (i = rT(t)), (n[i] = n(t));
          }),
          { animated: n }
        );
      })(
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ],
        {
          applyAnimatedValues: function (e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            let i =
                "filter" === e.nodeName ||
                (e.parentNode && "filter" === e.parentNode.nodeName),
              {
                style: r,
                children: s,
                scrollTop: n,
                scrollLeft: a,
                viewBox: l,
                ...o
              } = t,
              d = Object.values(o),
              u = Object.keys(o).map((t) =>
                i || e.hasAttribute(t)
                  ? t
                  : rM[t] ||
                    (rM[t] = t.replace(
                      /([A-Z])/g,
                      (e) => "-" + e.toLowerCase()
                    ))
              );
            for (let t in (void 0 !== s && (e.textContent = s), r))
              if (r.hasOwnProperty(t)) {
                var c;
                let i =
                  null == (c = r[t]) || "boolean" == typeof c || "" === c
                    ? ""
                    : "number" != typeof c ||
                      0 === c ||
                      r_.test(t) ||
                      (rC.hasOwnProperty(t) && rC[t])
                    ? ("" + c).trim()
                    : c + "px";
                r_.test(t) ? e.style.setProperty(t, i) : (e.style[t] = i);
              }
            u.forEach((t, i) => {
              e.setAttribute(t, d[i]);
            }),
              void 0 !== n && (e.scrollTop = n),
              void 0 !== a && (e.scrollLeft = a),
              void 0 !== l && e.setAttribute("viewBox", l);
          },
          createAnimatedStyle: (e) => new rD(e),
          getComponentProps: ({ scrollTop: e, scrollLeft: t, ...i }) => i,
        }
      ).animated;
    },
    2729: function (e, t, i) {
      "use strict";
      function r(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      i.d(t, {
        _: function () {
          return r;
        },
      });
    },
    8357: function (e, t, i) {
      "use strict";
      i.d(t, {
        YD: function () {
          return d;
        },
      });
      var r = i(7294),
        s = Object.defineProperty,
        n = new Map(),
        a = new WeakMap(),
        l = 0,
        o = void 0;
      function d({
        threshold: e,
        delay: t,
        trackVisibility: i,
        rootMargin: s,
        root: d,
        triggerOnce: u,
        skip: c,
        initialInView: p,
        fallbackInView: h,
        onChange: f,
      } = {}) {
        var m;
        let [g, v] = r.useState(null),
          b = r.useRef(),
          [y, w] = r.useState({ inView: !!p, entry: void 0 });
        (b.current = f),
          r.useEffect(() => {
            let r;
            if (!c && g)
              return (
                (r = (function (e, t, i = {}, r = o) {
                  if (void 0 === window.IntersectionObserver && void 0 !== r) {
                    let s = e.getBoundingClientRect();
                    return (
                      t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio:
                          "number" == typeof i.threshold ? i.threshold : 0,
                        time: 0,
                        boundingClientRect: s,
                        intersectionRect: s,
                        rootBounds: s,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: s,
                      observer: d,
                      elements: u,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var i;
                            return `${t}_${
                              "root" === t
                                ? (i = e.root)
                                  ? (a.has(i) ||
                                      ((l += 1), a.set(i, l.toString())),
                                    a.get(i))
                                  : "0"
                                : e[t]
                            }`;
                          })
                          .toString(),
                        i = n.get(t);
                      if (!i) {
                        let r;
                        let s = new Map(),
                          a = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var i;
                              let n =
                                t.isIntersecting &&
                                r.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = n),
                                null == (i = s.get(t.target)) ||
                                  i.forEach((e) => {
                                    e(n, t);
                                  });
                            });
                          }, e);
                        (r =
                          a.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (i = { id: t, observer: a, elements: s }),
                          n.set(t, i);
                      }
                      return i;
                    })(i),
                    c = u.get(e) || [];
                  return (
                    u.has(e) || u.set(e, c),
                    c.push(t),
                    d.observe(e),
                    function () {
                      c.splice(c.indexOf(t), 1),
                        0 === c.length && (u.delete(e), d.unobserve(e)),
                        0 === u.size && (d.disconnect(), n.delete(s));
                    }
                  );
                })(
                  g,
                  (e, t) => {
                    w({ inView: e, entry: t }),
                      b.current && b.current(e, t),
                      t.isIntersecting && u && r && (r(), (r = void 0));
                  },
                  {
                    root: d,
                    rootMargin: s,
                    threshold: e,
                    trackVisibility: i,
                    delay: t,
                  },
                  h
                )),
                () => {
                  r && r();
                }
              );
          }, [Array.isArray(e) ? e.toString() : e, g, d, s, u, c, i, h, t]);
        let S = null == (m = y.entry) ? void 0 : m.target,
          E = r.useRef();
        g ||
          !S ||
          u ||
          c ||
          E.current === S ||
          ((E.current = S), w({ inView: !!p, entry: void 0 }));
        let x = [v, y.inView, y.entry];
        return (x.ref = x[0]), (x.inView = x[1]), (x.entry = x[2]), x;
      }
      r.Component;
    },
    9304: function (e, t, i) {
      "use strict";
      i.d(t, {
        s5: function () {
          return d;
        },
        pt: function () {
          return u;
        },
        W_: function () {
          return a;
        },
        LW: function () {
          return o;
        },
      });
      var r = i(3433),
        s = i(7185);
      function n(e, t, i, r) {
        return (
          e.params.createElements &&
            Object.keys(r).forEach((n) => {
              if (!i[n] && !0 === i.auto) {
                let a = (0, s.e)(e.el, `.${r[n]}`)[0];
                a ||
                  (((a = (0, s.c)("div", r[n])).className = r[n]),
                  e.el.append(a)),
                  (i[n] = a),
                  (t[n] = a);
              }
            }),
          i
        );
      }
      function a(e) {
        let { swiper: t, extendParams: i, on: r, emit: a } = e;
        function l(e) {
          let i;
          return e &&
            "string" == typeof e &&
            t.isElement &&
            (i = t.el.querySelector(e) || t.hostEl.querySelector(e))
            ? i
            : (e &&
                ("string" == typeof e &&
                  (i = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                "string" == typeof e &&
                i &&
                i.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (i = t.el.querySelector(e))
                  : i && 1 === i.length && (i = i[0])),
              e && !i)
            ? e
            : i;
        }
        function o(e, i) {
          let r = t.params.navigation;
          (e = (0, s.m)(e)).forEach((e) => {
            e &&
              (e.classList[i ? "add" : "remove"](...r.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = i),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](r.lockClass));
          });
        }
        function d() {
          let { nextEl: e, prevEl: i } = t.navigation;
          if (t.params.loop) {
            o(i, !1), o(e, !1);
            return;
          }
          o(i, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function u(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), a("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), a("navigationNext"));
        }
        function p() {
          let e = t.params.navigation;
          if (
            ((t.params.navigation = n(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !(e.nextEl || e.prevEl))
          )
            return;
          let i = l(e.nextEl),
            r = l(e.prevEl);
          Object.assign(t.navigation, { nextEl: i, prevEl: r }),
            (i = (0, s.m)(i)),
            (r = (0, s.m)(r));
          let a = (i, r) => {
            i && i.addEventListener("click", "next" === r ? c : u),
              !t.enabled && i && i.classList.add(...e.lockClass.split(" "));
          };
          i.forEach((e) => a(e, "next")), r.forEach((e) => a(e, "prev"));
        }
        function h() {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = (0, s.m)(e)), (i = (0, s.m)(i));
          let r = (e, i) => {
            e.removeEventListener("click", "next" === i ? c : u),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          r("init", () => {
            !1 === t.params.navigation.enabled ? f() : (p(), d());
          }),
          r("toEdge fromEdge lock unlock", () => {
            d();
          }),
          r("destroy", () => {
            h();
          }),
          r("enable disable", () => {
            let { nextEl: e, prevEl: i } = t.navigation;
            if (((e = (0, s.m)(e)), (i = (0, s.m)(i)), t.enabled)) {
              d();
              return;
            }
            [...e, ...i]
              .filter((e) => !!e)
              .forEach((e) => e.classList.add(t.params.navigation.lockClass));
          }),
          r("click", (e, i) => {
            let { nextEl: r, prevEl: n } = t.navigation;
            (r = (0, s.m)(r)), (n = (0, s.m)(n));
            let l = i.target,
              o = n.includes(l) || r.includes(l);
            if (t.isElement && !o) {
              let e = i.path || (i.composedPath && i.composedPath());
              e && (o = e.find((e) => r.includes(e) || n.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !o) {
              let e;
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === l || t.pagination.el.contains(l))
              )
                return;
              r.length
                ? (e = r[0].classList.contains(t.params.navigation.hiddenClass))
                : n.length &&
                  (e = n[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                !0 === e ? a("navigationShow") : a("navigationHide"),
                [...r, ...n]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        let f = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            h();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              p(),
              d();
          },
          disable: f,
          update: d,
          init: p,
          destroy: h,
        });
      }
      function l(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!+\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function o(e) {
        let t,
          i,
          a,
          o,
          { swiper: d, extendParams: u, on: c, emit: p } = e,
          h = (0, r.g)(),
          f = !1,
          m = null,
          g = null;
        function v() {
          if (!d.params.scrollbar.el || !d.scrollbar.el) return;
          let { scrollbar: e, rtlTranslate: t } = d,
            { dragEl: r, el: s } = e,
            n = d.params.scrollbar,
            l = d.params.loop ? d.progressLoop : d.progress,
            o = i,
            u = (a - i) * l;
          t
            ? (u = -u) > 0
              ? ((o = i - u), (u = 0))
              : -u + i > a && (o = a + u)
            : u < 0
            ? ((o = i + u), (u = 0))
            : u + i > a && (o = a - u),
            d.isHorizontal()
              ? ((r.style.transform = `translate3d(${u}px, 0, 0)`),
                (r.style.width = `${o}px`))
              : ((r.style.transform = `translate3d(0px, ${u}px, 0)`),
                (r.style.height = `${o}px`)),
            n.hide &&
              (clearTimeout(m),
              (s.style.opacity = 1),
              (m = setTimeout(() => {
                (s.style.opacity = 0), (s.style.transitionDuration = "400ms");
              }, 1e3)));
        }
        function b() {
          if (!d.params.scrollbar.el || !d.scrollbar.el) return;
          let { scrollbar: e } = d,
            { dragEl: t, el: r } = e;
          (t.style.width = ""),
            (t.style.height = ""),
            (a = d.isHorizontal() ? r.offsetWidth : r.offsetHeight),
            (o =
              d.size /
              (d.virtualSize +
                d.params.slidesOffsetBefore -
                (d.params.centeredSlides ? d.snapGrid[0] : 0))),
            (i =
              "auto" === d.params.scrollbar.dragSize
                ? a * o
                : parseInt(d.params.scrollbar.dragSize, 10)),
            d.isHorizontal()
              ? (t.style.width = `${i}px`)
              : (t.style.height = `${i}px`),
            o >= 1 ? (r.style.display = "none") : (r.style.display = ""),
            d.params.scrollbar.hide && (r.style.opacity = 0),
            d.params.watchOverflow &&
              d.enabled &&
              e.el.classList[d.isLocked ? "add" : "remove"](
                d.params.scrollbar.lockClass
              );
        }
        function y(e) {
          return d.isHorizontal() ? e.clientX : e.clientY;
        }
        function w(e) {
          let r;
          let { scrollbar: n, rtlTranslate: l } = d,
            { el: o } = n;
          (r = Math.max(
            Math.min(
              (r =
                (y(e) -
                  (0, s.b)(o)[d.isHorizontal() ? "left" : "top"] -
                  (null !== t ? t : i / 2)) /
                (a - i)),
              1
            ),
            0
          )),
            l && (r = 1 - r);
          let u = d.minTranslate() + (d.maxTranslate() - d.minTranslate()) * r;
          d.updateProgress(u),
            d.setTranslate(u),
            d.updateActiveIndex(),
            d.updateSlidesClasses();
        }
        function S(e) {
          let i = d.params.scrollbar,
            { scrollbar: r, wrapperEl: s } = d,
            { el: n, dragEl: a } = r;
          (f = !0),
            (t =
              e.target === a
                ? y(e) -
                  e.target.getBoundingClientRect()[
                    d.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            (s.style.transitionDuration = "100ms"),
            (a.style.transitionDuration = "100ms"),
            w(e),
            clearTimeout(g),
            (n.style.transitionDuration = "0ms"),
            i.hide && (n.style.opacity = 1),
            d.params.cssMode &&
              (d.wrapperEl.style["scroll-snap-type"] = "none"),
            p("scrollbarDragStart", e);
        }
        function E(e) {
          let { scrollbar: t, wrapperEl: i } = d,
            { el: r, dragEl: s } = t;
          f &&
            (e.preventDefault && e.cancelable
              ? e.preventDefault()
              : (e.returnValue = !1),
            w(e),
            (i.style.transitionDuration = "0ms"),
            (r.style.transitionDuration = "0ms"),
            (s.style.transitionDuration = "0ms"),
            p("scrollbarDragMove", e));
        }
        function x(e) {
          let t = d.params.scrollbar,
            { scrollbar: i, wrapperEl: r } = d,
            { el: n } = i;
          f &&
            ((f = !1),
            d.params.cssMode &&
              ((d.wrapperEl.style["scroll-snap-type"] = ""),
              (r.style.transitionDuration = "")),
            t.hide &&
              (clearTimeout(g),
              (g = (0, s.n)(() => {
                (n.style.opacity = 0), (n.style.transitionDuration = "400ms");
              }, 1e3))),
            p("scrollbarDragEnd", e),
            t.snapOnRelease && d.slideToClosest());
        }
        function T(e) {
          let { scrollbar: t, params: i } = d,
            r = t.el;
          if (!r) return;
          let s = !!i.passiveListeners && { passive: !1, capture: !1 },
            n = !!i.passiveListeners && { passive: !0, capture: !1 };
          if (!r) return;
          let a = "on" === e ? "addEventListener" : "removeEventListener";
          r[a]("pointerdown", S, s),
            h[a]("pointermove", E, s),
            h[a]("pointerup", x, n);
        }
        function _() {
          let e, t;
          let { scrollbar: i, el: r } = d;
          d.params.scrollbar = n(
            d,
            d.originalParams.scrollbar,
            d.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          let a = d.params.scrollbar;
          if (a.el) {
            if (
              ("string" == typeof a.el &&
                d.isElement &&
                (e = d.el.querySelector(a.el)),
              e || "string" != typeof a.el)
            )
              e || (e = a.el);
            else if (!(e = h.querySelectorAll(a.el)).length) return;
            d.params.uniqueNavElements &&
              "string" == typeof a.el &&
              e.length > 1 &&
              1 === r.querySelectorAll(a.el).length &&
              (e = r.querySelector(a.el)),
              e.length > 0 && (e = e[0]),
              e.classList.add(
                d.isHorizontal() ? a.horizontalClass : a.verticalClass
              ),
              !e ||
                (t = e.querySelector(l(d.params.scrollbar.dragClass))) ||
                ((t = (0, s.c)("div", d.params.scrollbar.dragClass)),
                e.append(t)),
              Object.assign(i, { el: e, dragEl: t }),
              !a.draggable ||
                (d.params.scrollbar.el && d.scrollbar.el && T("on")),
              e &&
                e.classList[d.enabled ? "remove" : "add"](
                  ...(0, s.i)(d.params.scrollbar.lockClass)
                );
          }
        }
        function M() {
          let e = d.params.scrollbar,
            t = d.scrollbar.el;
          t &&
            t.classList.remove(
              ...(0, s.i)(
                d.isHorizontal() ? e.horizontalClass : e.verticalClass
              )
            ),
            d.params.scrollbar.el && d.scrollbar.el && T("off");
        }
        u({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical",
          },
        }),
          (d.scrollbar = { el: null, dragEl: null }),
          c("changeDirection", () => {
            if (!d.scrollbar || !d.scrollbar.el) return;
            let e = d.params.scrollbar,
              { el: t } = d.scrollbar;
            (t = (0, s.m)(t)).forEach((t) => {
              t.classList.remove(e.horizontalClass, e.verticalClass),
                t.classList.add(
                  d.isHorizontal() ? e.horizontalClass : e.verticalClass
                );
            });
          }),
          c("init", () => {
            !1 === d.params.scrollbar.enabled ? C() : (_(), b(), v());
          }),
          c("update resize observerUpdate lock unlock changeDirection", () => {
            b();
          }),
          c("setTranslate", () => {
            v();
          }),
          c("setTransition", (e, t) => {
            d.params.scrollbar.el &&
              d.scrollbar.el &&
              (d.scrollbar.dragEl.style.transitionDuration = `${t}ms`);
          }),
          c("enable disable", () => {
            let { el: e } = d.scrollbar;
            e &&
              e.classList[d.enabled ? "remove" : "add"](
                ...(0, s.i)(d.params.scrollbar.lockClass)
              );
          }),
          c("destroy", () => {
            M();
          });
        let C = () => {
          d.el.classList.add(
            ...(0, s.i)(d.params.scrollbar.scrollbarDisabledClass)
          ),
            d.scrollbar.el &&
              d.scrollbar.el.classList.add(
                ...(0, s.i)(d.params.scrollbar.scrollbarDisabledClass)
              ),
            M();
        };
        Object.assign(d.scrollbar, {
          enable: () => {
            d.el.classList.remove(
              ...(0, s.i)(d.params.scrollbar.scrollbarDisabledClass)
            ),
              d.scrollbar.el &&
                d.scrollbar.el.classList.remove(
                  ...(0, s.i)(d.params.scrollbar.scrollbarDisabledClass)
                ),
              _(),
              b(),
              v();
          },
          disable: C,
          updateSize: b,
          setTranslate: v,
          init: _,
          destroy: M,
        });
      }
      function d(e) {
        let t,
          i,
          { swiper: n, extendParams: a, on: o } = e;
        a({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
            scrollOnFocus: !0,
          },
        }),
          (n.a11y = { clicked: !1 });
        let d = null,
          u = new Date().getTime();
        function c(e) {
          let t = d;
          0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
        }
        function p(e) {
          (e = (0, s.m)(e)).forEach((e) => {
            e.setAttribute("tabIndex", "0");
          });
        }
        function h(e) {
          (e = (0, s.m)(e)).forEach((e) => {
            e.setAttribute("tabIndex", "-1");
          });
        }
        function f(e, t) {
          (e = (0, s.m)(e)).forEach((e) => {
            e.setAttribute("role", t);
          });
        }
        function m(e, t) {
          (e = (0, s.m)(e)).forEach((e) => {
            e.setAttribute("aria-roledescription", t);
          });
        }
        function g(e, t) {
          (e = (0, s.m)(e)).forEach((e) => {
            e.setAttribute("aria-label", t);
          });
        }
        function v(e) {
          (e = (0, s.m)(e)).forEach((e) => {
            e.setAttribute("aria-disabled", !0);
          });
        }
        function b(e) {
          (e = (0, s.m)(e)).forEach((e) => {
            e.setAttribute("aria-disabled", !1);
          });
        }
        function y(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          let t = n.params.a11y,
            i = e.target;
          if (
            !(
              n.pagination &&
              n.pagination.el &&
              (i === n.pagination.el || n.pagination.el.contains(e.target))
            ) ||
            e.target.matches(l(n.params.pagination.bulletClass))
          ) {
            if (n.navigation && n.navigation.prevEl && n.navigation.nextEl) {
              let e = (0, s.m)(n.navigation.prevEl);
              (0, s.m)(n.navigation.nextEl).includes(i) &&
                ((n.isEnd && !n.params.loop) || n.slideNext(),
                n.isEnd ? c(t.lastSlideMessage) : c(t.nextSlideMessage)),
                e.includes(i) &&
                  ((n.isBeginning && !n.params.loop) || n.slidePrev(),
                  n.isBeginning
                    ? c(t.firstSlideMessage)
                    : c(t.prevSlideMessage));
            }
            n.pagination &&
              i.matches(l(n.params.pagination.bulletClass)) &&
              i.click();
          }
        }
        function w() {
          return (
            n.pagination && n.pagination.bullets && n.pagination.bullets.length
          );
        }
        function S() {
          return w() && n.params.pagination.clickable;
        }
        let E = (e, t, i) => {
            p(e),
              "BUTTON" !== e.tagName &&
                (f(e, "button"), e.addEventListener("keydown", y)),
              g(e, i),
              (function (e, t) {
                (e = (0, s.m)(e)).forEach((e) => {
                  e.setAttribute("aria-controls", t);
                });
              })(e, t);
          },
          x = (e) => {
            i && i !== e.target && !i.contains(e.target) && (t = !0),
              (n.a11y.clicked = !0);
          },
          T = () => {
            (t = !1),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  n.destroyed || (n.a11y.clicked = !1);
                });
              });
          },
          _ = (e) => {
            u = new Date().getTime();
          },
          M = (e) => {
            if (
              n.a11y.clicked ||
              !n.params.a11y.scrollOnFocus ||
              new Date().getTime() - u < 100
            )
              return;
            let r = e.target.closest(`.${n.params.slideClass}, swiper-slide`);
            if (!r || !n.slides.includes(r)) return;
            i = r;
            let s = n.slides.indexOf(r) === n.activeIndex,
              a =
                n.params.watchSlidesProgress &&
                n.visibleSlides &&
                n.visibleSlides.includes(r);
            !s &&
              !a &&
              ((e.sourceCapabilities &&
                e.sourceCapabilities.firesTouchEvents) ||
                (n.isHorizontal()
                  ? (n.el.scrollLeft = 0)
                  : (n.el.scrollTop = 0),
                requestAnimationFrame(() => {
                  t ||
                    (n.params.loop
                      ? n.slideToLoop(
                          parseInt(r.getAttribute("data-swiper-slide-index")),
                          0
                        )
                      : n.slideTo(n.slides.indexOf(r), 0),
                    (t = !1));
                })));
          },
          C = () => {
            let e = n.params.a11y;
            e.itemRoleDescriptionMessage &&
              m(n.slides, e.itemRoleDescriptionMessage),
              e.slideRole && f(n.slides, e.slideRole);
            let t = n.slides.length;
            e.slideLabelMessage &&
              n.slides.forEach((i, r) => {
                let s = n.params.loop
                  ? parseInt(i.getAttribute("data-swiper-slide-index"), 10)
                  : r;
                g(
                  i,
                  e.slideLabelMessage
                    .replace(/\{\{index\}\}/, s + 1)
                    .replace(/\{\{slidesLength\}\}/, t)
                );
              });
          },
          P = () => {
            let e = n.params.a11y;
            n.el.append(d);
            let t = n.el;
            e.containerRoleDescriptionMessage &&
              m(t, e.containerRoleDescriptionMessage),
              e.containerMessage && g(t, e.containerMessage),
              e.containerRole && f(t, e.containerRole);
            let i = n.wrapperEl,
              a =
                e.id ||
                i.getAttribute("id") ||
                `swiper-wrapper-${"x"
                  .repeat(16)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  )}`,
              l =
                n.params.autoplay && n.params.autoplay.enabled
                  ? "off"
                  : "polite";
            !(function (e, t) {
              (e = (0, s.m)(e)).forEach((e) => {
                e.setAttribute("id", t);
              });
            })(i, a),
              (function (e, t) {
                (e = (0, s.m)(e)).forEach((e) => {
                  e.setAttribute("aria-live", t);
                });
              })(i, l),
              C();
            let { nextEl: o, prevEl: u } = n.navigation ? n.navigation : {};
            (o = (0, s.m)(o)),
              (u = (0, s.m)(u)),
              o && o.forEach((t) => E(t, a, e.nextSlideMessage)),
              u && u.forEach((t) => E(t, a, e.prevSlideMessage)),
              S() &&
                (0, s.m)(n.pagination.el).forEach((e) => {
                  e.addEventListener("keydown", y);
                }),
              (0, r.g)().addEventListener("visibilitychange", _),
              n.el.addEventListener("focus", M, !0),
              n.el.addEventListener("focus", M, !0),
              n.el.addEventListener("pointerdown", x, !0),
              n.el.addEventListener("pointerup", T, !0);
          };
        o("beforeInit", () => {
          (d = (0, s.c)("span", n.params.a11y.notificationClass)).setAttribute(
            "aria-live",
            "assertive"
          ),
            d.setAttribute("aria-atomic", "true");
        }),
          o("afterInit", () => {
            n.params.a11y.enabled && P();
          }),
          o(
            "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
            () => {
              n.params.a11y.enabled && C();
            }
          ),
          o("fromEdge toEdge afterInit lock unlock", () => {
            n.params.a11y.enabled &&
              (function () {
                if (n.params.loop || n.params.rewind || !n.navigation) return;
                let { nextEl: e, prevEl: t } = n.navigation;
                t && (n.isBeginning ? (v(t), h(t)) : (b(t), p(t))),
                  e && (n.isEnd ? (v(e), h(e)) : (b(e), p(e)));
              })();
          }),
          o("paginationUpdate", () => {
            n.params.a11y.enabled &&
              (function () {
                let e = n.params.a11y;
                w() &&
                  n.pagination.bullets.forEach((t) => {
                    n.params.pagination.clickable &&
                      (p(t),
                      n.params.pagination.renderBullet ||
                        (f(t, "button"),
                        g(
                          t,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            (0, s.h)(t) + 1
                          )
                        ))),
                      t.matches(l(n.params.pagination.bulletActiveClass))
                        ? t.setAttribute("aria-current", "true")
                        : t.removeAttribute("aria-current");
                  });
              })();
          }),
          o("destroy", () => {
            n.params.a11y.enabled &&
              (function () {
                d && d.remove();
                let { nextEl: e, prevEl: t } = n.navigation ? n.navigation : {};
                (e = (0, s.m)(e)),
                  (t = (0, s.m)(t)),
                  e && e.forEach((e) => e.removeEventListener("keydown", y)),
                  t && t.forEach((e) => e.removeEventListener("keydown", y)),
                  S() &&
                    (0, s.m)(n.pagination.el).forEach((e) => {
                      e.removeEventListener("keydown", y);
                    }),
                  (0, r.g)().removeEventListener("visibilitychange", _),
                  n.el &&
                    "string" != typeof n.el &&
                    (n.el.removeEventListener("focus", M, !0),
                    n.el.removeEventListener("pointerdown", x, !0),
                    n.el.removeEventListener("pointerup", T, !0));
              })();
          });
      }
      function u(e) {
        let t,
          i,
          s,
          n,
          a,
          l,
          o,
          d,
          u,
          c,
          { swiper: p, extendParams: h, on: f, emit: m, params: g } = e;
        (p.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          h({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !1,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let v = g && g.autoplay ? g.autoplay.delay : 3e3,
          b = g && g.autoplay ? g.autoplay.delay : 3e3,
          y = new Date().getTime();
        function w(e) {
          p &&
            !p.destroyed &&
            p.wrapperEl &&
            e.target === p.wrapperEl &&
            (p.wrapperEl.removeEventListener("transitionend", w),
            !c && (!e.detail || !e.detail.bySwiperTouchMove) && C());
        }
        let S = () => {
            if (p.destroyed || !p.autoplay.running) return;
            p.autoplay.paused ? (n = !0) : n && ((b = s), (n = !1));
            let e = p.autoplay.paused ? s : y + b - new Date().getTime();
            (p.autoplay.timeLeft = e),
              m("autoplayTimeLeft", e, e / v),
              (i = requestAnimationFrame(() => {
                S();
              }));
          },
          E = () => {
            let e;
            if (
              (e =
                p.virtual && p.params.virtual.enabled
                  ? p.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : p.slides[p.activeIndex])
            )
              return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          },
          x = (e) => {
            if (p.destroyed || !p.autoplay.running) return;
            cancelAnimationFrame(i), S();
            let r = void 0 === e ? p.params.autoplay.delay : e;
            (v = p.params.autoplay.delay), (b = p.params.autoplay.delay);
            let n = E();
            !Number.isNaN(n) &&
              n > 0 &&
              void 0 === e &&
              ((r = n), (v = n), (b = n)),
              (s = r);
            let a = p.params.speed,
              l = () => {
                p &&
                  !p.destroyed &&
                  (p.params.autoplay.reverseDirection
                    ? !p.isBeginning || p.params.loop || p.params.rewind
                      ? (p.slidePrev(a, !0, !0), m("autoplay"))
                      : p.params.autoplay.stopOnLastSlide ||
                        (p.slideTo(p.slides.length - 1, a, !0, !0),
                        m("autoplay"))
                    : !p.isEnd || p.params.loop || p.params.rewind
                    ? (p.slideNext(a, !0, !0), m("autoplay"))
                    : p.params.autoplay.stopOnLastSlide ||
                      (p.slideTo(0, a, !0, !0), m("autoplay")),
                  p.params.cssMode &&
                    ((y = new Date().getTime()),
                    requestAnimationFrame(() => {
                      x();
                    })));
              };
            return (
              r > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    l();
                  }, r)))
                : requestAnimationFrame(() => {
                    l();
                  }),
              r
            );
          },
          T = () => {
            (y = new Date().getTime()),
              (p.autoplay.running = !0),
              x(),
              m("autoplayStart");
          },
          _ = () => {
            (p.autoplay.running = !1),
              clearTimeout(t),
              cancelAnimationFrame(i),
              m("autoplayStop");
          },
          M = (e, i) => {
            if (p.destroyed || !p.autoplay.running) return;
            clearTimeout(t), e || (u = !0);
            let r = () => {
              m("autoplayPause"),
                p.params.autoplay.waitForTransition
                  ? p.wrapperEl.addEventListener("transitionend", w)
                  : C();
            };
            if (((p.autoplay.paused = !0), i)) {
              d && (s = p.params.autoplay.delay), (d = !1), r();
              return;
            }
            (s = (s || p.params.autoplay.delay) - (new Date().getTime() - y)),
              (p.isEnd && s < 0 && !p.params.loop) || (s < 0 && (s = 0), r());
          },
          C = () => {
            (p.isEnd && s < 0 && !p.params.loop) ||
              p.destroyed ||
              !p.autoplay.running ||
              ((y = new Date().getTime()),
              u ? ((u = !1), x(s)) : x(),
              (p.autoplay.paused = !1),
              m("autoplayResume"));
          },
          P = () => {
            if (p.destroyed || !p.autoplay.running) return;
            let e = (0, r.g)();
            "hidden" === e.visibilityState && ((u = !0), M(!0)),
              "visible" === e.visibilityState && C();
          },
          O = (e) => {
            "mouse" === e.pointerType &&
              ((u = !0), (c = !0), p.animating || p.autoplay.paused || M(!0));
          },
          k = (e) => {
            "mouse" === e.pointerType && ((c = !1), p.autoplay.paused && C());
          },
          A = () => {
            p.params.autoplay.pauseOnMouseEnter &&
              (p.el.addEventListener("pointerenter", O),
              p.el.addEventListener("pointerleave", k));
          },
          I = () => {
            p.el &&
              "string" != typeof p.el &&
              (p.el.removeEventListener("pointerenter", O),
              p.el.removeEventListener("pointerleave", k));
          },
          L = () => {
            (0, r.g)().addEventListener("visibilitychange", P);
          },
          z = () => {
            (0, r.g)().removeEventListener("visibilitychange", P);
          };
        f("init", () => {
          p.params.autoplay.enabled && (A(), L(), T());
        }),
          f("destroy", () => {
            I(), z(), p.autoplay.running && _();
          }),
          f("_freeModeStaticRelease", () => {
            (l || u) && C();
          }),
          f("_freeModeNoMomentumRelease", () => {
            p.params.autoplay.disableOnInteraction ? _() : M(!0, !0);
          }),
          f("beforeTransitionStart", (e, t, i) => {
            !p.destroyed &&
              p.autoplay.running &&
              (i || !p.params.autoplay.disableOnInteraction ? M(!0, !0) : _());
          }),
          f("sliderFirstMove", () => {
            if (!p.destroyed && p.autoplay.running) {
              if (p.params.autoplay.disableOnInteraction) {
                _();
                return;
              }
              (a = !0),
                (l = !1),
                (u = !1),
                (o = setTimeout(() => {
                  (u = !0), (l = !0), M(!0);
                }, 200));
            }
          }),
          f("touchEnd", () => {
            if (!p.destroyed && p.autoplay.running && a) {
              if (
                (clearTimeout(o),
                clearTimeout(t),
                p.params.autoplay.disableOnInteraction)
              ) {
                (l = !1), (a = !1);
                return;
              }
              l && p.params.cssMode && C(), (l = !1), (a = !1);
            }
          }),
          f("slideChange", () => {
            !p.destroyed && p.autoplay.running && (d = !0);
          }),
          Object.assign(p.autoplay, { start: T, stop: _, pause: M, resume: C });
      }
    },
    3433: function (e, t, i) {
      "use strict";
      function r(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function s(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : r(t[i]) &&
                r(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                s(e[i], t[i]);
          });
      }
      i.d(t, {
        a: function () {
          return o;
        },
        g: function () {
          return a;
        },
      });
      let n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function a() {
        let e = "undefined" != typeof document ? document : {};
        return s(e, n), e;
      }
      let l = {
        document: n,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function o() {
        let e = "undefined" != typeof window ? window : {};
        return s(e, l), e;
      }
    },
    7185: function (e, t, i) {
      "use strict";
      i.d(t, {
        a: function () {
          return S;
        },
        b: function () {
          return g;
        },
        c: function () {
          return m;
        },
        d: function () {
          return l;
        },
        e: function () {
          return p;
        },
        f: function () {
          return E;
        },
        h: function () {
          return w;
        },
        i: function () {
          return s;
        },
        j: function () {
          return o;
        },
        m: function () {
          return x;
        },
        n: function () {
          return a;
        },
        p: function () {
          return y;
        },
        q: function () {
          return b;
        },
        r: function () {
          return v;
        },
        s: function () {
          return u;
        },
        t: function () {
          return c;
        },
        u: function () {
          return f;
        },
        v: function () {
          return h;
        },
        w: function () {
          return function e() {
            let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              i = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < arguments.length; r += 1) {
              let s = r < 0 || arguments.length <= r ? void 0 : arguments[r];
              if (
                null != s &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(s instanceof HTMLElement)
                  : !s || (1 !== s.nodeType && 11 !== s.nodeType))
              ) {
                let r = Object.keys(Object(s)).filter((e) => 0 > i.indexOf(e));
                for (let i = 0, n = r.length; i < n; i += 1) {
                  let n = r[i],
                    a = Object.getOwnPropertyDescriptor(s, n);
                  void 0 !== a &&
                    a.enumerable &&
                    (d(t[n]) && d(s[n])
                      ? s[n].__swiper__
                        ? (t[n] = s[n])
                        : e(t[n], s[n])
                      : !d(t[n]) && d(s[n])
                      ? ((t[n] = {}),
                        s[n].__swiper__ ? (t[n] = s[n]) : e(t[n], s[n]))
                      : (t[n] = s[n]));
                }
              }
            }
            return t;
          };
        },
        x: function () {
          return n;
        },
      });
      var r = i(3433);
      function s(e) {
        return (
          void 0 === e && (e = ""),
          e
            .trim()
            .split(" ")
            .filter((e) => !!e.trim())
        );
      }
      function n(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function a(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function l() {
        return Date.now();
      }
      function o(e, t) {
        let i, s, n;
        void 0 === t && (t = "x");
        let a = (0, r.a)(),
          l = (function (e) {
            let t;
            let i = (0, r.a)();
            return (
              i.getComputedStyle && (t = i.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          a.WebKitCSSMatrix
            ? ((s = l.transform || l.webkitTransform).split(",").length > 6 &&
                (s = s
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (n = new a.WebKitCSSMatrix("none" === s ? "" : s)))
            : (i = (n =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (s = a.WebKitCSSMatrix
              ? n.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (s = a.WebKitCSSMatrix
              ? n.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          s || 0
        );
      }
      function d(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function u(e, t, i) {
        e.style.setProperty(t, i);
      }
      function c(e) {
        let t,
          { swiper: i, targetPosition: s, side: n } = e,
          a = (0, r.a)(),
          l = -i.translate,
          o = null,
          d = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(i.cssModeFrameID);
        let u = s > l ? "next" : "prev",
          c = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
          p = () => {
            (t = new Date().getTime()), null === o && (o = t);
            let e =
              l +
              (0.5 -
                Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) *
                (s - l);
            if (
              (c(e, s) && (e = s), i.wrapperEl.scrollTo({ [n]: e }), c(e, s))
            ) {
              (i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [n]: e });
                }),
                a.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = a.requestAnimationFrame(p);
          };
        p();
      }
      function p(e, t) {
        void 0 === t && (t = "");
        let i = [...e.children];
        return (e instanceof HTMLSlotElement && i.push(...e.assignedElements()),
        t)
          ? i.filter((e) => e.matches(t))
          : i;
      }
      function h(e, t) {
        let i = t.contains(e);
        return !i && t instanceof HTMLSlotElement
          ? [...t.assignedElements()].includes(e)
          : i;
      }
      function f(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function m(e, t) {
        void 0 === t && (t = []);
        let i = document.createElement(e);
        return i.classList.add(...(Array.isArray(t) ? t : s(t))), i;
      }
      function g(e) {
        let t = (0, r.a)(),
          i = (0, r.g)(),
          s = e.getBoundingClientRect(),
          n = i.body,
          a = e.clientTop || n.clientTop || 0,
          l = e.clientLeft || n.clientLeft || 0,
          o = e === t ? t.scrollY : e.scrollTop,
          d = e === t ? t.scrollX : e.scrollLeft;
        return { top: s.top + o - a, left: s.left + d - l };
      }
      function v(e, t) {
        let i = [];
        for (; e.previousElementSibling; ) {
          let r = e.previousElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function b(e, t) {
        let i = [];
        for (; e.nextElementSibling; ) {
          let r = e.nextElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function y(e, t) {
        return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function w(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function S(e, t) {
        let i = [],
          r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && i.push(r) : i.push(r), (r = r.parentElement);
        return i;
      }
      function E(e, t, i) {
        let s = (0, r.a)();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function x(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
    },
    2261: function (e, t, i) {
      "use strict";
      let r, s, n;
      i.d(t, {
        tq: function () {
          return H;
        },
        o5: function () {
          return W;
        },
      });
      var a = i(7294),
        l = i(3433),
        o = i(7185);
      function d() {
        return (
          r ||
            (r = (function () {
              let e = (0, l.a)(),
                t = (0, l.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          r
        );
      }
      function u(e) {
        return (
          void 0 === e && (e = {}),
          s ||
            (s = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = d(),
                r = (0, l.a)(),
                s = r.navigator.platform,
                n = t || r.navigator.userAgent,
                a = { ios: !1, android: !1 },
                o = r.screen.width,
                u = r.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                p = n.match(/(iPad).*OS\s([\d_]+)/),
                h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "MacIntel" === s;
              return (
                !p &&
                  m &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${u}`) >= 0 &&
                  ((p = n.match(/(Version)\/([\d.]+)/)) ||
                    (p = [0, 1, "13_0_0"]),
                  (m = !1)),
                c && "Win32" !== s && ((a.os = "android"), (a.android = !0)),
                (p || f || h) && ((a.os = "ios"), (a.ios = !0)),
                a
              );
            })(e)),
          s
        );
      }
      let c = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        p = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        h = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      (t = i.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        f = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        m = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let r =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            s = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [s - t];
            i.push(...Array.from({ length: t }).map((e, t) => s + r + t)),
              e.slides.forEach((t, r) => {
                i.includes(t.column) && f(e, r);
              });
            return;
          }
          let n = s + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = s - t; r <= n + t; r += 1) {
              let t = ((r % i) + i) % i;
              (t < s || t > n) && f(e, t);
            }
          else
            for (
              let r = Math.max(s - t, 0);
              r <= Math.min(n + t, i - 1);
              r += 1
            )
              r !== s && (r > n || r < s) && f(e, r);
        };
      function g(e) {
        let { swiper: t, runCallbacks: i, direction: r, step: s } = e,
          { activeIndex: n, previousIndex: a } = t,
          l = r;
        if (
          (l || (l = n > a ? "next" : n < a ? "prev" : "reset"),
          t.emit(`transition${s}`),
          i && n !== a)
        ) {
          if ("reset" === l) {
            t.emit(`slideResetTransition${s}`);
            return;
          }
          t.emit(`slideChangeTransition${s}`),
            "next" === l
              ? t.emit(`slideNextTransition${s}`)
              : t.emit(`slidePrevTransition${s}`);
        }
      }
      function v(e, t, i) {
        let r = (0, l.a)(),
          { params: s } = e,
          n = s.edgeSwipeDetection,
          a = s.edgeSwipeThreshold;
        return (
          !n ||
          (!(i <= a) && !(i >= r.innerWidth - a)) ||
          ("prevent" === n && (t.preventDefault(), !0))
        );
      }
      function b(e) {
        let t = (0, l.g)(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let r = this.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
          r.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (r.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) {
          v(this, i, i.targetTouches[0].pageX);
          return;
        }
        let { params: s, touches: n, enabled: a } = this;
        if (
          !a ||
          (!s.simulateTouch && "mouse" === i.pointerType) ||
          (this.animating && s.preventInteractionOnTransition)
        )
          return;
        !this.animating && s.cssMode && s.loop && this.loopFix();
        let d = i.target;
        if (
          ("wrapper" === s.touchEventsTarget && !(0, o.v)(d, this.wrapperEl)) ||
          ("which" in i && 3 === i.which) ||
          ("button" in i && i.button > 0) ||
          (r.isTouched && r.isMoved)
        )
          return;
        let u = !!s.noSwipingClass && "" !== s.noSwipingClass,
          c = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && c && (d = c[0]);
        let p = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          h = !!(i.target && i.target.shadowRoot);
        if (
          s.noSwiping &&
          (h
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === (0, l.g)() || i === (0, l.a)()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let r = i.closest(e);
                    return r || i.getRootNode
                      ? r || t(i.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, d)
            : d.closest(p))
        ) {
          this.allowClick = !0;
          return;
        }
        if (s.swipeHandler && !d.closest(s.swipeHandler)) return;
        (n.currentX = i.pageX), (n.currentY = i.pageY);
        let f = n.currentX,
          m = n.currentY;
        if (!v(this, i, f)) return;
        Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (n.startX = f),
          (n.startY = m),
          (r.touchStartTime = (0, o.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          s.threshold > 0 && (r.allowThresholdMove = !1);
        let g = !0;
        d.matches(r.focusableElements) &&
          ((g = !1), "SELECT" === d.nodeName && (r.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(r.focusableElements) &&
            t.activeElement !== d &&
            ("mouse" === i.pointerType ||
              ("mouse" !== i.pointerType && !d.matches(r.focusableElements))) &&
            t.activeElement.blur();
        let b = g && this.allowTouchMove && s.touchStartPreventDefault;
        (s.touchStartForcePreventDefault || b) &&
          !d.isContentEditable &&
          i.preventDefault(),
          s.freeMode &&
            s.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !s.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", i);
      }
      function y(e) {
        let t, i;
        let r = (0, l.g)(),
          s = this.touchEventsData,
          { params: n, touches: a, rtlTranslate: d, enabled: u } = this;
        if (!u || (!n.simulateTouch && "mouse" === e.pointerType)) return;
        let c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          "pointermove" === c.type &&
            (null !== s.touchId || c.pointerId !== s.pointerId))
        )
          return;
        if ("touchmove" === c.type) {
          if (
            !(t = [...c.changedTouches].filter(
              (e) => e.identifier === s.touchId
            )[0]) ||
            t.identifier !== s.touchId
          )
            return;
        } else t = c;
        if (!s.isTouched) {
          s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", c);
          return;
        }
        let p = t.pageX,
          h = t.pageY;
        if (c.preventedByNestedSwiper) {
          (a.startX = p), (a.startY = h);
          return;
        }
        if (!this.allowTouchMove) {
          c.target.matches(s.focusableElements) || (this.allowClick = !1),
            s.isTouched &&
              (Object.assign(a, {
                startX: p,
                startY: h,
                currentX: p,
                currentY: h,
              }),
              (s.touchStartTime = (0, o.d)()));
          return;
        }
        if (n.touchReleaseOnEdges && !n.loop) {
          if (this.isVertical()) {
            if (
              (h < a.startY && this.translate <= this.maxTranslate()) ||
              (h > a.startY && this.translate >= this.minTranslate())
            ) {
              (s.isTouched = !1), (s.isMoved = !1);
              return;
            }
          } else if (
            (p < a.startX && this.translate <= this.maxTranslate()) ||
            (p > a.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          (r.activeElement &&
            r.activeElement.matches(s.focusableElements) &&
            r.activeElement !== c.target &&
            "mouse" !== c.pointerType &&
            r.activeElement.blur(),
          r.activeElement &&
            c.target === r.activeElement &&
            c.target.matches(s.focusableElements))
        ) {
          (s.isMoved = !0), (this.allowClick = !1);
          return;
        }
        s.allowTouchCallbacks && this.emit("touchMove", c),
          (a.previousX = a.currentX),
          (a.previousY = a.currentY),
          (a.currentX = p),
          (a.currentY = h);
        let f = a.currentX - a.startX,
          m = a.currentY - a.startY;
        if (
          this.params.threshold &&
          Math.sqrt(f ** 2 + m ** 2) < this.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (this.isHorizontal() && a.currentY === a.startY) ||
          (this.isVertical() && a.currentX === a.startX)
            ? (s.isScrolling = !1)
            : f * f + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI),
              (s.isScrolling = this.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && this.emit("touchMoveOpposite", c),
          void 0 === s.startMoving &&
            (a.currentX !== a.startX || a.currentY !== a.startY) &&
            (s.startMoving = !0),
          s.isScrolling ||
            ("touchmove" === c.type && s.preventTouchMoveFromPointerMove))
        ) {
          s.isTouched = !1;
          return;
        }
        if (!s.startMoving) return;
        (this.allowClick = !1),
          !n.cssMode && c.cancelable && c.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && c.stopPropagation();
        let g = this.isHorizontal() ? f : m,
          v = this.isHorizontal()
            ? a.currentX - a.previousX
            : a.currentY - a.previousY;
        n.oneWayMovement &&
          ((g = Math.abs(g) * (d ? 1 : -1)), (v = Math.abs(v) * (d ? 1 : -1))),
          (a.diff = g),
          (g *= n.touchRatio),
          d && ((g = -g), (v = -v));
        let b = this.touchesDirection;
        (this.swipeDirection = g > 0 ? "prev" : "next"),
          (this.touchesDirection = v > 0 ? "prev" : "next");
        let y = this.params.loop && !n.cssMode,
          w =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!s.isMoved) {
          if (
            (y && w && this.loopFix({ direction: this.swipeDirection }),
            (s.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (s.allowMomentumBounce = !1),
            n.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", c);
        }
        if (
          (new Date().getTime(),
          s.isMoved &&
            s.allowThresholdMove &&
            b !== this.touchesDirection &&
            y &&
            w &&
            Math.abs(g) >= 1)
        ) {
          Object.assign(a, {
            startX: p,
            startY: h,
            currentX: p,
            currentY: h,
            startTranslate: s.currentTranslate,
          }),
            (s.loopSwapReset = !0),
            (s.startTranslate = s.currentTranslate);
          return;
        }
        this.emit("sliderMove", c),
          (s.isMoved = !0),
          (s.currentTranslate = g + s.startTranslate);
        let S = !0,
          E = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (E = 0),
          g > 0
            ? (y &&
                w &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate >
                  (n.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1] -
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[this.activeIndex + 1] +
                          this.params.spaceBetween
                        : 0) -
                      this.params.spaceBetween
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              s.currentTranslate > this.minTranslate() &&
                ((S = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + s.startTranslate + g) ** E)))
            : g < 0 &&
              (y &&
                w &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate <
                  (n.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1] +
                      this.params.spaceBetween +
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[
                            this.slidesSizesGrid.length - 1
                          ] + this.params.spaceBetween
                        : 0)
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === n.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(n.slidesPerView, 10))),
                }),
              s.currentTranslate < this.maxTranslate() &&
                ((S = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - s.startTranslate - g) ** E))),
          S && (c.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (Math.abs(g) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
              (s.allowThresholdMove = !0),
                (a.startX = a.currentX),
                (a.startY = a.currentY),
                (s.currentTranslate = s.startTranslate),
                (a.diff = this.isHorizontal()
                  ? a.currentX - a.startX
                  : a.currentY - a.startY);
              return;
            }
          } else {
            s.currentTranslate = s.startTranslate;
            return;
          }
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && this.freeMode) ||
            n.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          n.freeMode &&
            n.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(s.currentTranslate),
          this.setTranslate(s.currentTranslate));
      }
      function w(e) {
        let t, i;
        let r = this,
          s = r.touchEventsData,
          n = e;
        if (
          (n.originalEvent && (n = n.originalEvent),
          "touchend" === n.type || "touchcancel" === n.type)
        ) {
          if (
            !(t = [...n.changedTouches].filter(
              (e) => e.identifier === s.touchId
            )[0]) ||
            t.identifier !== s.touchId
          )
            return;
        } else {
          if (null !== s.touchId || n.pointerId !== s.pointerId) return;
          t = n;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(n.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(n.type) &&
            (r.browser.isSafari || r.browser.isWebView)
          )
        )
          return;
        (s.pointerId = null), (s.touchId = null);
        let {
          params: a,
          touches: l,
          rtlTranslate: d,
          slidesGrid: u,
          enabled: c,
        } = r;
        if (!c || (!a.simulateTouch && "mouse" === n.pointerType)) return;
        if (
          (s.allowTouchCallbacks && r.emit("touchEnd", n),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        ) {
          s.isMoved && a.grabCursor && r.setGrabCursor(!1),
            (s.isMoved = !1),
            (s.startMoving = !1);
          return;
        }
        a.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) &&
          r.setGrabCursor(!1);
        let p = (0, o.d)(),
          h = p - s.touchStartTime;
        if (r.allowClick) {
          let e = n.path || (n.composedPath && n.composedPath());
          r.updateClickedSlide((e && e[0]) || n.target, e),
            r.emit("tap click", n),
            h < 300 &&
              p - s.lastClickTime < 300 &&
              r.emit("doubleTap doubleClick", n);
        }
        if (
          ((s.lastClickTime = (0, o.d)()),
          (0, o.n)(() => {
            r.destroyed || (r.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !r.swipeDirection ||
            (0 === l.diff && !s.loopSwapReset) ||
            (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
        ) {
          (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
          return;
        }
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (i = a.followFinger
            ? d
              ? r.translate
              : -r.translate
            : -s.currentTranslate),
          a.cssMode)
        )
          return;
        if (a.freeMode && a.freeMode.enabled) {
          r.freeMode.onTouchEnd({ currentPos: i });
          return;
        }
        let f = i >= -r.maxTranslate() && !r.params.loop,
          m = 0,
          g = r.slidesSizesGrid[0];
        for (
          let e = 0;
          e < u.length;
          e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
        ) {
          let t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== u[e + t]
            ? (f || (i >= u[e] && i < u[e + t])) &&
              ((m = e), (g = u[e + t] - u[e]))
            : (f || i >= u[e]) &&
              ((m = e), (g = u[u.length - 1] - u[u.length - 2]));
        }
        let v = null,
          b = null;
        a.rewind &&
          (r.isBeginning
            ? (b =
                a.virtual && a.virtual.enabled && r.virtual
                  ? r.virtual.slides.length - 1
                  : r.slides.length - 1)
            : r.isEnd && (v = 0));
        let y = (i - u[m]) / g,
          w = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (h > a.longSwipesMs) {
          if (!a.longSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          "next" === r.swipeDirection &&
            (y >= a.longSwipesRatio
              ? r.slideTo(a.rewind && r.isEnd ? v : m + w)
              : r.slideTo(m)),
            "prev" === r.swipeDirection &&
              (y > 1 - a.longSwipesRatio
                ? r.slideTo(m + w)
                : null !== b && y < 0 && Math.abs(y) > a.longSwipesRatio
                ? r.slideTo(b)
                : r.slideTo(m));
        } else {
          if (!a.shortSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          r.navigation &&
          (n.target === r.navigation.nextEl || n.target === r.navigation.prevEl)
            ? n.target === r.navigation.nextEl
              ? r.slideTo(m + w)
              : r.slideTo(m)
            : ("next" === r.swipeDirection && r.slideTo(null !== v ? v : m + w),
              "prev" === r.swipeDirection && r.slideTo(null !== b ? b : m));
        }
      }
      function S() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: r, allowSlidePrev: s, snapGrid: n } = e,
          a = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let l = a && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        l
          ? e.params.loop && !a
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = r),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function E(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function x() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let r = this.maxTranslate() - this.minTranslate();
        (0 === r ? 0 : (this.translate - this.minTranslate()) / r) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function T(e) {
        h(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function _() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let M = (e, t) => {
          let i = (0, l.g)(),
            { params: r, el: s, wrapperEl: n, device: a } = e,
            o = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener";
          s &&
            "string" != typeof s &&
            (i[d]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: o,
            }),
            s[d]("touchstart", e.onTouchStart, { passive: !1 }),
            s[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("touchend", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (r.preventClicks || r.preventClicksPropagation) &&
              s[d]("click", e.onClick, !0),
            r.cssMode && n[d]("scroll", e.onScroll),
            r.updateOnWindowResize
              ? e[t](
                  a.ios || a.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  S,
                  !0
                )
              : e[t]("observerUpdate", S, !0),
            s[d]("load", e.onLoad, { capture: !0 }));
        },
        C = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var P = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let O = {
          eventsEmitter: {
            on(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              let s = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][s](t);
                }),
                r
              );
            },
            once(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              function s() {
                r.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                for (var i = arguments.length, n = Array(i), a = 0; a < i; a++)
                  n[a] = arguments[a];
                t.apply(r, n);
              }
              return (s.__emitterProxy = t), r.on(e, s, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((r, s) => {
                          (r === t ||
                            (r.__emitterProxy && r.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(s, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e, t, i;
              let r = this;
              if (!r.eventsListeners || r.destroyed || !r.eventsListeners)
                return r;
              for (var s = arguments.length, n = Array(s), a = 0; a < s; a++)
                n[a] = arguments[a];
              return (
                "string" == typeof n[0] || Array.isArray(n[0])
                  ? ((e = n[0]), (t = n.slice(1, n.length)), (i = r))
                  : ((e = n[0].events),
                    (t = n[0].data),
                    (i = n[0].context || r)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  r.eventsAnyListeners &&
                    r.eventsAnyListeners.length &&
                    r.eventsAnyListeners.forEach((r) => {
                      r.apply(i, [e, ...t]);
                    }),
                    r.eventsListeners &&
                      r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                r
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, o.p)(i, "padding-left") || 0, 10) -
                    parseInt((0, o.p)(i, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, o.p)(i, "padding-top") || 0, 10) -
                    parseInt((0, o.p)(i, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function i(e, i) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(i)) || 0
                );
              }
              let r = t.params,
                {
                  wrapperEl: s,
                  slidesEl: n,
                  size: a,
                  rtlTranslate: l,
                  wrongRTL: d,
                } = t,
                u = t.virtual && r.virtual.enabled,
                c = u ? t.virtual.slides.length : t.slides.length,
                p = (0, o.e)(n, `.${t.params.slideClass}, swiper-slide`),
                h = u ? t.virtual.slides.length : p.length,
                f = [],
                m = [],
                g = [],
                v = r.slidesOffsetBefore;
              "function" == typeof v && (v = r.slidesOffsetBefore.call(t));
              let b = r.slidesOffsetAfter;
              "function" == typeof b && (b = r.slidesOffsetAfter.call(t));
              let y = t.snapGrid.length,
                w = t.slidesGrid.length,
                S = r.spaceBetween,
                E = -v,
                x = 0,
                T = 0;
              if (void 0 === a) return;
              "string" == typeof S && S.indexOf("%") >= 0
                ? (S = (parseFloat(S.replace("%", "")) / 100) * a)
                : "string" == typeof S && (S = parseFloat(S)),
                (t.virtualSize = -S),
                p.forEach((e) => {
                  l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                r.centeredSlides &&
                  r.cssMode &&
                  ((0, o.s)(s, "--swiper-centered-offset-before", ""),
                  (0, o.s)(s, "--swiper-centered-offset-after", ""));
              let _ = r.grid && r.grid.rows > 1 && t.grid;
              _ ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
              let M =
                "auto" === r.slidesPerView &&
                r.breakpoints &&
                Object.keys(r.breakpoints).filter(
                  (e) => void 0 !== r.breakpoints[e].slidesPerView
                ).length > 0;
              for (let s = 0; s < h; s += 1) {
                let n;
                if (
                  ((e = 0),
                  p[s] && (n = p[s]),
                  _ && t.grid.updateSlide(s, n, p),
                  !p[s] || "none" !== (0, o.p)(n, "display"))
                ) {
                  if ("auto" === r.slidesPerView) {
                    M && (p[s].style[t.getDirectionLabel("width")] = "");
                    let a = getComputedStyle(n),
                      l = n.style.transform,
                      d = n.style.webkitTransform;
                    if (
                      (l && (n.style.transform = "none"),
                      d && (n.style.webkitTransform = "none"),
                      r.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? (0, o.f)(n, "width", !0)
                        : (0, o.f)(n, "height", !0);
                    else {
                      let t = i(a, "width"),
                        r = i(a, "padding-left"),
                        s = i(a, "padding-right"),
                        l = i(a, "margin-left"),
                        o = i(a, "margin-right"),
                        d = a.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + l + o;
                      else {
                        let { clientWidth: i, offsetWidth: a } = n;
                        e = t + r + s + l + o + (a - i);
                      }
                    }
                    l && (n.style.transform = l),
                      d && (n.style.webkitTransform = d),
                      r.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (a - (r.slidesPerView - 1) * S) / r.slidesPerView),
                      r.roundLengths && (e = Math.floor(e)),
                      p[s] &&
                        (p[s].style[t.getDirectionLabel("width")] = `${e}px`);
                  p[s] && (p[s].swiperSlideSize = e),
                    g.push(e),
                    r.centeredSlides
                      ? ((E = E + e / 2 + x / 2 + S),
                        0 === x && 0 !== s && (E = E - a / 2 - S),
                        0 === s && (E = E - a / 2 - S),
                        0.001 > Math.abs(E) && (E = 0),
                        r.roundLengths && (E = Math.floor(E)),
                        T % r.slidesPerGroup == 0 && f.push(E),
                        m.push(E))
                      : (r.roundLengths && (E = Math.floor(E)),
                        (T - Math.min(t.params.slidesPerGroupSkip, T)) %
                          t.params.slidesPerGroup ==
                          0 && f.push(E),
                        m.push(E),
                        (E = E + e + S)),
                    (t.virtualSize += e + S),
                    (x = e),
                    (T += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, a) + b),
                l &&
                  d &&
                  ("slide" === r.effect || "coverflow" === r.effect) &&
                  (s.style.width = `${t.virtualSize + S}px`),
                r.setWrapperSize &&
                  (s.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + S
                  }px`),
                _ && t.grid.updateWrapperSize(e, f),
                !r.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < f.length; i += 1) {
                  let s = f[i];
                  r.roundLengths && (s = Math.floor(s)),
                    f[i] <= t.virtualSize - a && e.push(s);
                }
                (f = e),
                  Math.floor(t.virtualSize - a) - Math.floor(f[f.length - 1]) >
                    1 && f.push(t.virtualSize - a);
              }
              if (u && r.loop) {
                let e = g[0] + S;
                if (r.slidesPerGroup > 1) {
                  let i = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        r.slidesPerGroup
                    ),
                    s = e * r.slidesPerGroup;
                  for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + s);
                }
                for (
                  let i = 0;
                  i < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  i += 1
                )
                  1 === r.slidesPerGroup && f.push(f[f.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === f.length && (f = [0]), 0 !== S)) {
                let e =
                  t.isHorizontal() && l
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                p.filter(
                  (e, t) => !r.cssMode || !!r.loop || t !== p.length - 1
                ).forEach((t) => {
                  t.style[e] = `${S}px`;
                });
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t) => {
                  e += t + (S || 0);
                });
                let t = (e -= S) > a ? e - a : 0;
                f = f.map((e) => (e <= 0 ? -v : e > t ? t + b : e));
              }
              if (r.centerInsufficientSlides) {
                let e = 0;
                g.forEach((t) => {
                  e += t + (S || 0);
                }),
                  (e -= S);
                let t =
                  (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                if (e + t < a) {
                  let i = (a - e - t) / 2;
                  f.forEach((e, t) => {
                    f[t] = e - i;
                  }),
                    m.forEach((e, t) => {
                      m[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: p,
                  snapGrid: f,
                  slidesGrid: m,
                  slidesSizesGrid: g,
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
              ) {
                (0, o.s)(s, "--swiper-centered-offset-before", `${-f[0]}px`),
                  (0, o.s)(
                    s,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - g[g.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (h !== c && t.emit("slidesLengthChange"),
                f.length !== y &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                m.length !== w && t.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !u &&
                  !r.cssMode &&
                  ("slide" === r.effect || "fade" === r.effect))
              ) {
                let e = `${r.containerModifierClass}backface-hidden`,
                  i = t.el.classList.contains(e);
                h <= r.maxBackfaceHiddenSlides
                  ? i || t.el.classList.add(e)
                  : i && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                r = [],
                s = i.virtual && i.params.virtual.enabled,
                n = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let a = (e) =>
                s ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    r.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !s) break;
                    r.push(a(e));
                  }
              } else r.push(a(i.activeIndex));
              for (t = 0; t < r.length; t += 1)
                if (void 0 !== r[t]) {
                  let e = r[t].offsetHeight;
                  n = e > n ? e : n;
                }
              (n || 0 === n) && (i.wrapperEl.style.height = `${n}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: r, snapGrid: s } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let n = -e;
              r && (n = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let a = t.spaceBetween;
              "string" == typeof a && a.indexOf("%") >= 0
                ? (a = (parseFloat(a.replace("%", "")) / 100) * this.size)
                : "string" == typeof a && (a = parseFloat(a));
              for (let e = 0; e < i.length; e += 1) {
                let l = i[e],
                  o = l.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d =
                    (n + (t.centeredSlides ? this.minTranslate() : 0) - o) /
                    (l.swiperSlideSize + a),
                  u =
                    (n -
                      s[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      o) /
                    (l.swiperSlideSize + a),
                  p = -(n - o),
                  h = p + this.slidesSizesGrid[e],
                  f = p >= 0 && p <= this.size - this.slidesSizesGrid[e],
                  m =
                    (p >= 0 && p < this.size - 1) ||
                    (h > 1 && h <= this.size) ||
                    (p <= 0 && h >= this.size);
                m &&
                  (this.visibleSlides.push(l),
                  this.visibleSlidesIndexes.push(e)),
                  c(l, m, t.slideVisibleClass),
                  c(l, f, t.slideFullyVisibleClass),
                  (l.progress = r ? -d : d),
                  (l.originalProgress = r ? -u : u);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                {
                  progress: r,
                  isBeginning: s,
                  isEnd: n,
                  progressLoop: a,
                } = this,
                l = s,
                o = n;
              if (0 === i) (r = 0), (s = !0), (n = !0);
              else {
                r = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  a = 1 > Math.abs(e - this.maxTranslate());
                (s = t || r <= 0),
                  (n = a || r >= 1),
                  t && (r = 0),
                  a && (r = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  r = this.slidesGrid[t],
                  s = this.slidesGrid[i],
                  n = this.slidesGrid[this.slidesGrid.length - 1],
                  l = Math.abs(e);
                (a = l >= r ? (l - r) / n : (l + n - s) / n) > 1 && (a -= 1);
              }
              Object.assign(this, {
                progress: r,
                progressLoop: a,
                isBeginning: s,
                isEnd: n,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                s && !l && this.emit("reachBeginning toEdge"),
                n && !o && this.emit("reachEnd toEdge"),
                ((l && !s) || (o && !n)) && this.emit("fromEdge"),
                this.emit("progress", r);
            },
            updateSlidesClasses: function () {
              let e, t, i;
              let { slides: r, params: s, slidesEl: n, activeIndex: a } = this,
                l = this.virtual && s.virtual.enabled,
                d = this.grid && s.grid && s.grid.rows > 1,
                u = (e) =>
                  (0, o.e)(n, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
              if (l) {
                if (s.loop) {
                  let t = a - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = u(`[data-swiper-slide-index="${t}"]`));
                } else e = u(`[data-swiper-slide-index="${a}"]`);
              } else
                d
                  ? ((e = r.filter((e) => e.column === a)[0]),
                    (i = r.filter((e) => e.column === a + 1)[0]),
                    (t = r.filter((e) => e.column === a - 1)[0]))
                  : (e = r[a]);
              e &&
                !d &&
                ((i = (0, o.q)(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop && !i && (i = r[0]),
                (t = (0, o.r)(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop),
                r.forEach((r) => {
                  p(r, r === e, s.slideActiveClass),
                    p(r, r === i, s.slideNextClass),
                    p(r, r === t, s.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, i;
              let r = this,
                s = r.rtlTranslate ? r.translate : -r.translate,
                {
                  snapGrid: n,
                  params: a,
                  activeIndex: l,
                  realIndex: o,
                  snapIndex: d,
                } = r,
                u = e,
                c = (e) => {
                  let t = e - r.virtual.slidesBefore;
                  return (
                    t < 0 && (t = r.virtual.slides.length + t),
                    t >= r.virtual.slides.length &&
                      (t -= r.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === u &&
                  (u = (function (e) {
                    let t;
                    let { slidesGrid: i, params: r } = e,
                      s = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : s >= i[e] && s < i[e + 1] && (t = e + 1)
                        : s >= i[e] && (t = e);
                    return (
                      r.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(r)),
                n.indexOf(s) >= 0)
              )
                t = n.indexOf(s);
              else {
                let e = Math.min(a.slidesPerGroupSkip, u);
                t = e + Math.floor((u - e) / a.slidesPerGroup);
              }
              if (
                (t >= n.length && (t = n.length - 1), u === l && !r.params.loop)
              ) {
                t !== d && ((r.snapIndex = t), r.emit("snapIndexChange"));
                return;
              }
              if (
                u === l &&
                r.params.loop &&
                r.virtual &&
                r.params.virtual.enabled
              ) {
                r.realIndex = c(u);
                return;
              }
              let p = r.grid && a.grid && a.grid.rows > 1;
              if (r.virtual && a.virtual.enabled && a.loop) i = c(u);
              else if (p) {
                let e = r.slides.filter((e) => e.column === u)[0],
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(r.slides.indexOf(e), 0)),
                  (i = Math.floor(t / a.grid.rows));
              } else if (r.slides[u]) {
                let e = r.slides[u].getAttribute("data-swiper-slide-index");
                i = e ? parseInt(e, 10) : u;
              } else i = u;
              Object.assign(r, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: l,
                activeIndex: u,
              }),
                r.initialized && m(r),
                r.emit("activeIndexChange"),
                r.emit("snapIndexChange"),
                (r.initialized || r.params.runCallbacksOnInit) &&
                  (o !== i && r.emit("realIndexChange"), r.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let i;
              let r = this.params,
                s = e.closest(`.${r.slideClass}, swiper-slide`);
              !s &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !s &&
                    e.matches &&
                    e.matches(`.${r.slideClass}, swiper-slide`) &&
                    (s = e);
                });
              let n = !1;
              if (s) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === s) {
                    (n = !0), (i = e);
                    break;
                  }
              }
              if (s && n)
                (this.clickedSlide = s),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        s.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              r.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: i,
                translate: r,
                wrapperEl: s,
              } = this;
              if (t.virtualTranslate) return i ? -r : r;
              if (t.cssMode) return r;
              let n = (0, o.j)(s, e);
              return (n += this.cssOverflowAdjustment()), i && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: i,
                  params: r,
                  wrapperEl: s,
                  progress: n,
                } = this,
                a = 0,
                l = 0;
              this.isHorizontal() ? (a = i ? -e : e) : (l = e),
                r.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? a : l),
                r.cssMode
                  ? (s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -a : -l)
                  : r.virtualTranslate ||
                    (this.isHorizontal()
                      ? (a -= this.cssOverflowAdjustment())
                      : (l -= this.cssOverflowAdjustment()),
                    (s.style.transform = `translate3d(${a}px, ${l}px, 0px)`));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== n &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === r && (r = !0);
              let a = this,
                { params: l, wrapperEl: d } = a;
              if (a.animating && l.preventInteractionOnTransition) return !1;
              let u = a.minTranslate(),
                c = a.maxTranslate();
              if (
                ((n = r && e > u ? u : r && e < c ? c : e),
                a.updateProgress(n),
                l.cssMode)
              ) {
                let e = a.isHorizontal();
                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -n;
                else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, o.t)({
                        swiper: a,
                        targetPosition: -n,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  d.scrollTo({ [e ? "left" : "top"]: -n, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(n),
                    i &&
                      (a.emit("beforeTransitionStart", t, s),
                      a.emit("transitionEnd")))
                  : (a.setTransition(t),
                    a.setTranslate(n),
                    i &&
                      (a.emit("beforeTransitionStart", t, s),
                      a.emit("transitionStart")),
                    a.animating ||
                      ((a.animating = !0),
                      a.onTranslateToWrapperTransitionEnd ||
                        (a.onTranslateToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.wrapperEl.removeEventListener(
                              "transitionend",
                              a.onTranslateToWrapperTransitionEnd
                            ),
                            (a.onTranslateToWrapperTransitionEnd = null),
                            delete a.onTranslateToWrapperTransitionEnd,
                            (a.animating = !1),
                            i && a.emit("transitionEnd"));
                        }),
                      a.wrapperEl.addEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                g({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  g({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let a = this,
                l = e;
              l < 0 && (l = 0);
              let {
                params: d,
                snapGrid: u,
                slidesGrid: c,
                previousIndex: p,
                activeIndex: h,
                rtlTranslate: f,
                wrapperEl: m,
                enabled: g,
              } = a;
              if (
                (!g && !r && !s) ||
                a.destroyed ||
                (a.animating && d.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = a.params.speed);
              let v = Math.min(a.params.slidesPerGroupSkip, l),
                b = v + Math.floor((l - v) / a.params.slidesPerGroup);
              b >= u.length && (b = u.length - 1);
              let y = -u[b];
              if (d.normalizeSlideIndex)
                for (let e = 0; e < c.length; e += 1) {
                  let t = -Math.floor(100 * y),
                    i = Math.floor(100 * c[e]),
                    r = Math.floor(100 * c[e + 1]);
                  void 0 !== c[e + 1]
                    ? t >= i && t < r - (r - i) / 2
                      ? (l = e)
                      : t >= i && t < r && (l = e + 1)
                    : t >= i && (l = e);
                }
              if (
                a.initialized &&
                l !== h &&
                ((!a.allowSlideNext &&
                  (f
                    ? y > a.translate && y > a.minTranslate()
                    : y < a.translate && y < a.minTranslate())) ||
                  (!a.allowSlidePrev &&
                    y > a.translate &&
                    y > a.maxTranslate() &&
                    (h || 0) !== l))
              )
                return !1;
              l !== (p || 0) && i && a.emit("beforeSlideChangeStart"),
                a.updateProgress(y),
                (n = l > h ? "next" : l < h ? "prev" : "reset");
              let w = a.virtual && a.params.virtual.enabled;
              if (
                !(w && s) &&
                ((f && -y === a.translate) || (!f && y === a.translate))
              )
                return (
                  a.updateActiveIndex(l),
                  d.autoHeight && a.updateAutoHeight(),
                  a.updateSlidesClasses(),
                  "slide" !== d.effect && a.setTranslate(y),
                  "reset" !== n &&
                    (a.transitionStart(i, n), a.transitionEnd(i, n)),
                  !1
                );
              if (d.cssMode) {
                let e = a.isHorizontal(),
                  i = f ? y : -y;
                if (0 === t)
                  w &&
                    ((a.wrapperEl.style.scrollSnapType = "none"),
                    (a._immediateVirtual = !0)),
                    w &&
                    !a._cssModeVirtualInitialSet &&
                    a.params.initialSlide > 0
                      ? ((a._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (m[e ? "scrollLeft" : "scrollTop"] = i),
                    w &&
                      requestAnimationFrame(() => {
                        (a.wrapperEl.style.scrollSnapType = ""),
                          (a._immediateVirtual = !1);
                      });
                else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, o.t)({
                        swiper: a,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              return (
                a.setTransition(t),
                a.setTranslate(y),
                a.updateActiveIndex(l),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, r),
                a.transitionStart(i, n),
                0 === t
                  ? a.transitionEnd(i, n)
                  : a.animating ||
                    ((a.animating = !0),
                    a.onSlideToWrapperTransitionEnd ||
                      (a.onSlideToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.wrapperEl.removeEventListener(
                            "transitionend",
                            a.onSlideToWrapperTransitionEnd
                          ),
                          (a.onSlideToWrapperTransitionEnd = null),
                          delete a.onSlideToWrapperTransitionEnd,
                          a.transitionEnd(i, n));
                      }),
                    a.wrapperEl.addEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, r) {
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let s = this;
              if (s.destroyed) return;
              void 0 === t && (t = s.params.speed);
              let n = s.grid && s.params.grid && s.params.grid.rows > 1,
                a = e;
              if (s.params.loop) {
                if (s.virtual && s.params.virtual.enabled)
                  a += s.virtual.slidesBefore;
                else {
                  let e;
                  if (n) {
                    let t = a * s.params.grid.rows;
                    e = s.slides.filter(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    )[0].column;
                  } else e = s.getSlideIndexByData(a);
                  let t = n
                      ? Math.ceil(s.slides.length / s.params.grid.rows)
                      : s.slides.length,
                    { centeredSlides: i } = s.params,
                    l = s.params.slidesPerView;
                  "auto" === l
                    ? (l = s.slidesPerViewDynamic())
                    : ((l = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
                      i && l % 2 == 0 && (l += 1));
                  let o = t - e < l;
                  if (
                    (i && (o = o || e < Math.ceil(l / 2)),
                    r &&
                      i &&
                      "auto" !== s.params.slidesPerView &&
                      !n &&
                      (o = !1),
                    o)
                  ) {
                    let r = i
                      ? e < s.activeIndex
                        ? "prev"
                        : "next"
                      : e - s.activeIndex - 1 < s.params.slidesPerView
                      ? "next"
                      : "prev";
                    s.loopFix({
                      direction: r,
                      slideTo: !0,
                      activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === r ? s.realIndex : void 0,
                    });
                  }
                  if (n) {
                    let e = a * s.params.grid.rows;
                    a = s.slides.filter(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    )[0].column;
                  } else a = s.getSlideIndexByData(a);
                }
              }
              return (
                requestAnimationFrame(() => {
                  s.slideTo(a, t, i, r);
                }),
                s
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                { enabled: s, params: n, animating: a } = r;
              if (!s || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let l = n.slidesPerGroup;
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
              let o = r.activeIndex < n.slidesPerGroupSkip ? 1 : l,
                d = r.virtual && n.virtual.enabled;
              if (n.loop) {
                if (a && !d && n.loopPreventsSliding) return !1;
                if (
                  (r.loopFix({ direction: "next" }),
                  (r._clientLeft = r.wrapperEl.clientLeft),
                  r.activeIndex === r.slides.length - 1 && n.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      r.slideTo(r.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return n.rewind && r.isEnd
                ? r.slideTo(0, e, t, i)
                : r.slideTo(r.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                {
                  params: s,
                  snapGrid: n,
                  slidesGrid: a,
                  rtlTranslate: l,
                  enabled: o,
                  animating: d,
                } = r;
              if (!o || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let u = r.virtual && s.virtual.enabled;
              if (s.loop) {
                if (d && !u && s.loopPreventsSliding) return !1;
                r.loopFix({ direction: "prev" }),
                  (r._clientLeft = r.wrapperEl.clientLeft);
              }
              function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = c(l ? r.translate : -r.translate),
                h = n.map((e) => c(e)),
                f = n[h.indexOf(p) - 1];
              if (void 0 === f && s.cssMode) {
                let e;
                n.forEach((t, i) => {
                  p >= t && (e = i);
                }),
                  void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== f &&
                  ((m = a.indexOf(f)) < 0 && (m = r.activeIndex - 1),
                  "auto" === s.slidesPerView &&
                    1 === s.slidesPerGroup &&
                    s.slidesPerGroupAuto &&
                    (m = Math.max(
                      (m = m - r.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                s.rewind && r.isBeginning)
              ) {
                let s =
                  r.params.virtual && r.params.virtual.enabled && r.virtual
                    ? r.virtual.slides.length - 1
                    : r.slides.length - 1;
                return r.slideTo(s, e, t, i);
              }
              return s.loop && 0 === r.activeIndex && s.cssMode
                ? (requestAnimationFrame(() => {
                    r.slideTo(m, e, t, i);
                  }),
                  !0)
                : r.slideTo(m, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, i)
                );
            },
            slideToClosest: function (e, t, i, r) {
              if (
                (void 0 === t && (t = !0),
                void 0 === r && (r = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let s = this.activeIndex,
                n = Math.min(this.params.slidesPerGroupSkip, s),
                a = n + Math.floor((s - n) / this.params.slidesPerGroup),
                l = this.rtlTranslate ? this.translate : -this.translate;
              if (l >= this.snapGrid[a]) {
                let e = this.snapGrid[a];
                l - e > (this.snapGrid[a + 1] - e) * r &&
                  (s += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[a - 1];
                l - e <= (this.snapGrid[a] - e) * r &&
                  (s -= this.params.slidesPerGroup);
              }
              return (
                (s = Math.min(
                  (s = Math.max(s, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(s, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: r } = t,
                s =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                n = t.clickedIndex,
                a = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? n < t.loopedSlides - s / 2 ||
                      n > t.slides.length - t.loopedSlides + s / 2
                      ? (t.loopFix(),
                        (n = t.getSlideIndex(
                          (0, o.e)(r, `${a}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        (0, o.n)(() => {
                          t.slideTo(n);
                        }))
                      : t.slideTo(n)
                    : n > t.slides.length - s
                    ? (t.loopFix(),
                      (n = t.getSlideIndex(
                        (0, o.e)(r, `${a}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      (0, o.n)(() => {
                        t.slideTo(n);
                      }))
                    : t.slideTo(n);
              } else t.slideTo(n);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: i, slidesEl: r } = t;
              if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
              let s = t.grid && i.grid && i.grid.rows > 1,
                n = i.slidesPerGroup * (s ? i.grid.rows : 1),
                a = t.slides.length % n != 0,
                l = s && t.slides.length % i.grid.rows != 0,
                d = (e) => {
                  for (let r = 0; r < e; r += 1) {
                    let e = t.isElement
                      ? (0, o.c)("swiper-slide", [i.slideBlankClass])
                      : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              a
                ? i.loopAddBlankSlides
                  ? (d(n - (t.slides.length % n)),
                    t.recalcSlides(),
                    t.updateSlides())
                  : (0, o.u)(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : l &&
                  (i.loopAddBlankSlides
                    ? (d(i.grid.rows - (t.slides.length % i.grid.rows)),
                      t.recalcSlides(),
                      t.updateSlides())
                    : (0, o.u)(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                (0, o.e)(r, `.${i.slideClass}, swiper-slide`).forEach(
                  (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  }
                ),
                t.loopFix({
                  slideRealIndex: e,
                  direction: i.centeredSlides ? void 0 : "next",
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  byController: a,
                  byMousewheel: l,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: u,
                  allowSlidePrev: c,
                  allowSlideNext: p,
                  slidesEl: h,
                  params: f,
                } = d,
                { centeredSlides: m } = f;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && f.virtual.enabled)
              ) {
                i &&
                  (f.centeredSlides || 0 !== d.snapIndex
                    ? f.centeredSlides && d.snapIndex < f.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = c),
                  (d.allowSlideNext = p),
                  d.emit("loopFix");
                return;
              }
              let g = f.slidesPerView;
              "auto" === g
                ? (g = d.slidesPerViewDynamic())
                : ((g = Math.ceil(parseFloat(f.slidesPerView, 10))),
                  m && g % 2 == 0 && (g += 1));
              let v = f.slidesPerGroupAuto ? g : f.slidesPerGroup,
                b = v;
              b % v != 0 && (b += v - (b % v)),
                (b += f.loopAdditionalSlides),
                (d.loopedSlides = b);
              let y = d.grid && f.grid && f.grid.rows > 1;
              u.length < g + b
                ? (0, o.u)(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : y &&
                  "row" === f.grid.fill &&
                  (0, o.u)(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let w = [],
                S = [],
                E = d.activeIndex;
              void 0 === n
                ? (n = d.getSlideIndex(
                    u.filter((e) => e.classList.contains(f.slideActiveClass))[0]
                  ))
                : (E = n);
              let x = "next" === r || !r,
                T = "prev" === r || !r,
                _ = 0,
                M = 0,
                C = y ? Math.ceil(u.length / f.grid.rows) : u.length,
                P =
                  (y ? u[n].column : n) +
                  (m && void 0 === s ? -g / 2 + 0.5 : 0);
              if (P < b) {
                _ = Math.max(b - P, v);
                for (let e = 0; e < b - P; e += 1) {
                  let t = e - Math.floor(e / C) * C;
                  if (y) {
                    let e = C - t - 1;
                    for (let t = u.length - 1; t >= 0; t -= 1)
                      u[t].column === e && w.push(t);
                  } else w.push(C - t - 1);
                }
              } else if (P + g > C - b) {
                M = Math.max(P - (C - 2 * b), v);
                for (let e = 0; e < M; e += 1) {
                  let t = e - Math.floor(e / C) * C;
                  y
                    ? u.forEach((e, i) => {
                        e.column === t && S.push(i);
                      })
                    : S.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                T &&
                  w.forEach((e) => {
                    (u[e].swiperLoopMoveDOM = !0),
                      h.prepend(u[e]),
                      (u[e].swiperLoopMoveDOM = !1);
                  }),
                x &&
                  S.forEach((e) => {
                    (u[e].swiperLoopMoveDOM = !0),
                      h.append(u[e]),
                      (u[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === f.slidesPerView
                  ? d.updateSlides()
                  : y &&
                    ((w.length > 0 && T) || (S.length > 0 && x)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                f.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (w.length > 0 && T) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[E],
                      t = d.slidesGrid[E + _] - e;
                    l
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(E + Math.ceil(_), 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else if (s) {
                    let e = y ? w.length / f.grid.rows : w.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (S.length > 0 && x) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[E],
                      t = d.slidesGrid[E - M] - e;
                    l
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(E - M, 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = y ? S.length / f.grid.rows : S.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((d.allowSlidePrev = c),
                (d.allowSlideNext = p),
                d.controller && d.controller.control && !a)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === f.slidesPerView && i,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          f.slidesPerView && i,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled))
                return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                i[
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = b.bind(this)),
                (this.onTouchMove = y.bind(this)),
                (this.onTouchEnd = w.bind(this)),
                (this.onDocumentTouchStart = _.bind(this)),
                e.cssMode && (this.onScroll = x.bind(this)),
                (this.onClick = E.bind(this)),
                (this.onLoad = T.bind(this)),
                M(this, "on");
            },
            detachEvents: function () {
              M(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: r, el: s } = e,
                n = r.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              let a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              let l = (a in n ? n[a] : void 0) || e.originalParams,
                d = C(e, r),
                u = C(e, l),
                c = e.params.grabCursor,
                p = l.grabCursor,
                h = r.enabled;
              d && !u
                ? (s.classList.remove(
                    `${r.containerModifierClass}grid`,
                    `${r.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  u &&
                  (s.classList.add(`${r.containerModifierClass}grid`),
                  ((l.grid.fill && "column" === l.grid.fill) ||
                    (!l.grid.fill && "column" === r.grid.fill)) &&
                    s.classList.add(`${r.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                c && !p ? e.unsetGrabCursor() : !c && p && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === l[t]) return;
                  let i = r[t] && r[t].enabled,
                    s = l[t] && l[t].enabled;
                  i && !s && e[t].disable(), !i && s && e[t].enable();
                });
              let f = l.direction && l.direction !== r.direction,
                m = r.loop && (l.slidesPerView !== r.slidesPerView || f),
                g = r.loop;
              f && i && e.changeDirection(), (0, o.w)(e.params, l);
              let v = e.params.enabled,
                b = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                h && !v ? e.disable() : !h && v && e.enable(),
                (e.currentBreakpoint = a),
                e.emit("_beforeBreakpoint", l),
                i &&
                  (m
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !g && b
                    ? (e.loopCreate(t), e.updateSlides())
                    : g && !b && e.loopDestroy()),
                e.emit("breakpoint", l);
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !i))
              )
                return;
              let r = !1,
                s = (0, l.a)(),
                n = "window" === t ? s.innerHeight : i.clientHeight,
                a = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: n * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < a.length; e += 1) {
                let { point: n, value: l } = a[e];
                "window" === t
                  ? s.matchMedia(`(min-width: ${l}px)`).matches && (r = n)
                  : l <= i.clientWidth && (r = n);
              }
              return r || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: r, device: s } = this,
                n = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((r) => {
                            e[r] && i.push(t + r);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: s.android },
                    { ios: s.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...n), r.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e &&
                "string" != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        k = {};
      class A {
        constructor() {
          let e, t;
          for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = (0, o.w)({}, t)),
            e && !t.el && (t.el = e);
          let a = (0, l.g)();
          if (
            t.el &&
            "string" == typeof t.el &&
            a.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              a.querySelectorAll(t.el).forEach((i) => {
                let r = (0, o.w)({}, t, { el: i });
                e.push(new A(r));
              }),
              e
            );
          }
          let c = this;
          (c.__swiper__ = !0),
            (c.support = d()),
            (c.device = u({ userAgent: t.userAgent })),
            (c.browser =
              (n ||
                (n = (function () {
                  let e = (0, l.a)(),
                    t = u(),
                    i = !1;
                  function r() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      0 > t.indexOf("chrome") &&
                      0 > t.indexOf("android")
                    );
                  }
                  if (r()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                      let [e, r] = t
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      i = e < 16 || (16 === e && r < 2);
                    }
                  }
                  let s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                    n = r(),
                    a = n || (s && t.ios);
                  return {
                    isSafari: i || n,
                    needPerspectiveFix: i,
                    need3dFix: a,
                    isWebView: s,
                  };
                })()),
              n)),
            (c.eventsListeners = {}),
            (c.eventsAnyListeners = []),
            (c.modules = [...c.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              c.modules.push(...t.modules);
          let p = {};
          c.modules.forEach((e) => {
            var i;
            e({
              params: t,
              swiper: c,
              extendParams:
                ((i = t),
                function (e) {
                  void 0 === e && (e = {});
                  let t = Object.keys(e)[0],
                    r = e[t];
                  if (
                    "object" != typeof r ||
                    null === r ||
                    (!0 === i[t] && (i[t] = { enabled: !0 }),
                    "navigation" === t &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].prevEl &&
                      !i[t].nextEl &&
                      (i[t].auto = !0),
                    ["pagination", "scrollbar"].indexOf(t) >= 0 &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].el &&
                      (i[t].auto = !0),
                    !(t in i && "enabled" in r))
                  ) {
                    (0, o.w)(p, e);
                    return;
                  }
                  "object" != typeof i[t] ||
                    "enabled" in i[t] ||
                    (i[t].enabled = !0),
                    i[t] || (i[t] = { enabled: !1 }),
                    (0, o.w)(p, e);
                }),
              on: c.on.bind(c),
              once: c.once.bind(c),
              off: c.off.bind(c),
              emit: c.emit.bind(c),
            });
          });
          let h = (0, o.w)({}, P, p);
          return (
            (c.params = (0, o.w)({}, h, k, t)),
            (c.originalParams = (0, o.w)({}, c.params)),
            (c.passedParams = (0, o.w)({}, t)),
            c.params &&
              c.params.on &&
              Object.keys(c.params.on).forEach((e) => {
                c.on(e, c.params.on[e]);
              }),
            c.params && c.params.onAny && c.onAny(c.params.onAny),
            Object.assign(c, {
              enabled: c.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === c.params.direction,
              isVertical: () => "vertical" === c.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: c.params.allowSlideNext,
              allowSlidePrev: c.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: c.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: c.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            c.emit("_swiper"),
            c.params.init && c.init(),
            c
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            r = (0, o.e)(t, `.${i.slideClass}, swiper-slide`),
            s = (0, o.h)(r[0]);
          return (0, o.h)(e) - s;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            r = (this.maxTranslate() - i) * e + i;
          this.translateTo(r, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let r = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: i,
              slides: r,
              slidesGrid: s,
              slidesSizesGrid: n,
              size: a,
              activeIndex: l,
            } = this,
            o = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = r[l] ? Math.ceil(r[l].swiperSlideSize) : 0;
            for (let i = l + 1; i < r.length; i += 1)
              r[i] &&
                !e &&
                ((t += Math.ceil(r[i].swiperSlideSize)),
                (o += 1),
                t > a && (e = !0));
            for (let i = l - 1; i >= 0; i -= 1)
              r[i] &&
                !e &&
                ((t += r[i].swiperSlideSize), (o += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let e = l + 1; e < r.length; e += 1)
              (t ? s[e] + n[e] - s[l] < a : s[e] - s[l] < a) && (o += 1);
          else for (let e = l - 1; e >= 0; e -= 1) s[l] - s[e] < a && (o += 1);
          return o;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: r } = t;
          function s() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && h(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            r.freeMode && r.freeMode.enabled && !r.cssMode)
          )
            s(), r.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === r.slidesPerView || r.slidesPerView > 1) &&
              t.isEnd &&
              !r.centeredSlides
            ) {
              let i =
                t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || s();
          }
          r.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${i}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let r = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            s =
              i && i.shadowRoot && i.shadowRoot.querySelector
                ? i.shadowRoot.querySelector(r())
                : (0, o.e)(i, r())[0];
          return (
            !s &&
              t.params.createElements &&
              ((s = (0, o.c)("div", t.params.wrapperClass)),
              i.append(s),
              (0, o.e)(i, `.${t.params.slideClass}`).forEach((e) => {
                s.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: s,
              slidesEl:
                t.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : s,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl:
                "rtl" === i.dir.toLowerCase() ||
                "rtl" === (0, o.p)(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() ||
                  "rtl" === (0, o.p)(i, "direction")),
              wrongRTL: "-webkit-box" === (0, o.p)(s, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? h(t, e)
                : e.addEventListener("load", (e) => {
                    h(t, e.target);
                  });
            }),
            m(t),
            (t.initialized = !0),
            m(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: r, el: s, wrapperEl: n, slides: a } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              r.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                s && "string" != typeof s && s.removeAttribute("style"),
                n && n.removeAttribute("style"),
                a &&
                  a.length &&
                  a.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                (i.el && "string" != typeof i.el && (i.el.swiper = null),
                (0, o.x)(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, o.w)(k, e);
        }
        static get extendedDefaults() {
          return k;
        }
        static get defaults() {
          return P;
        }
        static installModule(e) {
          A.prototype.__modules__ || (A.prototype.__modules__ = []);
          let t = A.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => A.installModule(e))
              : A.installModule(e),
            A
          );
        }
      }
      Object.keys(O).forEach((e) => {
        Object.keys(O[e]).forEach((t) => {
          A.prototype[t] = O[e][t];
        });
      }),
        A.use([
          function (e) {
            let { swiper: t, on: i, emit: r } = e,
              s = (0, l.a)(),
              n = null,
              a = null,
              o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              d = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (n = new ResizeObserver((e) => {
                    a = s.requestAnimationFrame(() => {
                      let { width: i, height: r } = t,
                        s = i,
                        n = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: r,
                          target: a,
                        } = e;
                        (a && a !== t.el) ||
                          ((s = r ? r.width : (i[0] || i).inlineSize),
                          (n = r ? r.height : (i[0] || i).blockSize));
                      }),
                        (s !== i || n !== r) && o();
                    });
                  })).observe(t.el);
              },
              u = () => {
                a && s.cancelAnimationFrame(a),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
              },
              c = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            i("init", () => {
              if (t.params.resizeObserver && void 0 !== s.ResizeObserver) {
                d();
                return;
              }
              s.addEventListener("resize", o),
                s.addEventListener("orientationchange", c);
            }),
              i("destroy", () => {
                u(),
                  s.removeEventListener("resize", o),
                  s.removeEventListener("orientationchange", c);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: r, emit: s } = e,
              n = [],
              a = (0, l.a)(),
              d = function (e, i) {
                void 0 === i && (i = {});
                let r = new (a.MutationObserver || a.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      s("observerUpdate", e[0]);
                      return;
                    }
                    let i = function () {
                      s("observerUpdate", e[0]);
                    };
                    a.requestAnimationFrame
                      ? a.requestAnimationFrame(i)
                      : a.setTimeout(i, 0);
                  }
                );
                r.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList:
                    t.isElement || (void 0 === i.childList || i).childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  n.push(r);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, o.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) d(e[t]);
                  }
                  d(t.hostEl, { childList: t.params.observeSlideChildren }),
                    d(t.wrapperEl, { attributes: !1 });
                }
              }),
              r("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      let I = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function L(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function z(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : L(t[i]) && L(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : z(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function D(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function j(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function R(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function V(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      let F = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function N() {
        return (N = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function $(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function G(e, t) {
        return "undefined" == typeof window
          ? (0, a.useEffect)(e, t)
          : (0, a.useLayoutEffect)(e, t);
      }
      let B = (0, a.createContext)(null),
        q = (0, a.createContext)(null),
        H = (0, a.forwardRef)(function (e, t) {
          var i;
          let {
              className: r,
              tag: s = "div",
              wrapperTag: n = "div",
              children: l,
              onSwiper: o,
              ...d
            } = void 0 === e ? {} : e,
            u = !1,
            [c, p] = (0, a.useState)("swiper"),
            [h, f] = (0, a.useState)(null),
            [m, g] = (0, a.useState)(!1),
            v = (0, a.useRef)(!1),
            b = (0, a.useRef)(null),
            y = (0, a.useRef)(null),
            w = (0, a.useRef)(null),
            S = (0, a.useRef)(null),
            E = (0, a.useRef)(null),
            x = (0, a.useRef)(null),
            T = (0, a.useRef)(null),
            _ = (0, a.useRef)(null),
            {
              params: M,
              passedParams: C,
              rest: O,
              events: k,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                r = {},
                s = {};
              z(i, P), (i._emitClasses = !0), (i.init = !1);
              let n = {},
                a = I.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((l) => {
                  void 0 !== e[l] &&
                    (a.indexOf(l) >= 0
                      ? L(e[l])
                        ? ((i[l] = {}),
                          (s[l] = {}),
                          z(i[l], e[l]),
                          z(s[l], e[l]))
                        : ((i[l] = e[l]), (s[l] = e[l]))
                      : 0 === l.search(/on[A-Z]/) && "function" == typeof e[l]
                      ? t
                        ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                        : (i.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                      : (n[l] = e[l]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: s, rest: n, events: r }
              );
            })(d),
            { slides: B, slots: H } = (function (e) {
              let t = [],
                i = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                a.Children.toArray(e).forEach((e) => {
                  if ($(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot])
                    i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let r = (function e(t) {
                      let i = [];
                      return (
                        a.Children.toArray(t).forEach((t) => {
                          $(t)
                            ? i.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => i.push(e));
                        }),
                        i
                      );
                    })(e.props.children);
                    r.length > 0
                      ? r.forEach((e) => t.push(e))
                      : i["container-end"].push(e);
                  } else i["container-end"].push(e);
                }),
                { slides: t, slots: i }
              );
            })(l),
            W = () => {
              g(!m);
            };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              p(t);
            },
          });
          let U = () => {
            Object.assign(M.on, k), (u = !0);
            let e = { ...M };
            if (
              (delete e.wrapperClass,
              (y.current = new A(e)),
              y.current.virtual && y.current.params.virtual.enabled)
            ) {
              y.current.virtual.slides = B;
              let e = {
                cache: !1,
                slides: B,
                renderExternal: f,
                renderExternalUpdate: !1,
              };
              z(y.current.params.virtual, e),
                z(y.current.originalParams.virtual, e);
            }
          };
          b.current || U(), y.current && y.current.on("_beforeBreakpoint", W);
          let Y = () => {
              !u &&
                k &&
                y.current &&
                Object.keys(k).forEach((e) => {
                  y.current.on(e, k[e]);
                });
            },
            X = () => {
              k &&
                y.current &&
                Object.keys(k).forEach((e) => {
                  y.current.off(e, k[e]);
                });
            };
          return (
            (0, a.useEffect)(() => () => {
              y.current && y.current.off("_beforeBreakpoint", W);
            }),
            (0, a.useEffect)(() => {
              !v.current &&
                y.current &&
                (y.current.emitSlidesClasses(), (v.current = !0));
            }),
            G(() => {
              if ((t && (t.current = b.current), b.current))
                return (
                  y.current.destroyed && U(),
                  (function (e, t) {
                    let {
                      el: i,
                      nextEl: r,
                      prevEl: s,
                      paginationEl: n,
                      scrollbarEl: a,
                      swiper: l,
                    } = e;
                    D(t) &&
                      r &&
                      s &&
                      ((l.params.navigation.nextEl = r),
                      (l.originalParams.navigation.nextEl = r),
                      (l.params.navigation.prevEl = s),
                      (l.originalParams.navigation.prevEl = s)),
                      j(t) &&
                        n &&
                        ((l.params.pagination.el = n),
                        (l.originalParams.pagination.el = n)),
                      R(t) &&
                        a &&
                        ((l.params.scrollbar.el = a),
                        (l.originalParams.scrollbar.el = a)),
                      l.init(i);
                  })(
                    {
                      el: b.current,
                      nextEl: E.current,
                      prevEl: x.current,
                      paginationEl: T.current,
                      scrollbarEl: _.current,
                      swiper: y.current,
                    },
                    M
                  ),
                  o && !y.current.destroyed && o(y.current),
                  () => {
                    y.current &&
                      !y.current.destroyed &&
                      y.current.destroy(!0, !1);
                  }
                );
            }, []),
            G(() => {
              Y();
              let e = (function (e, t, i, r, s) {
                let n = [];
                if (!t) return n;
                let a = (e) => {
                  0 > n.indexOf(e) && n.push(e);
                };
                if (i && r) {
                  let e = r.map(s),
                    t = i.map(s);
                  e.join("") !== t.join("") && a("children"),
                    r.length !== i.length && a("children");
                }
                return (
                  I.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((i) => {
                      if (i in e && i in t) {
                        if (L(e[i]) && L(t[i])) {
                          let r = Object.keys(e[i]),
                            s = Object.keys(t[i]);
                          r.length !== s.length
                            ? a(i)
                            : (r.forEach((r) => {
                                e[i][r] !== t[i][r] && a(i);
                              }),
                              s.forEach((r) => {
                                e[i][r] !== t[i][r] && a(i);
                              }));
                        } else e[i] !== t[i] && a(i);
                      }
                    }),
                  n
                );
              })(C, w.current, B, S.current, (e) => e.key);
              return (
                (w.current = C),
                (S.current = B),
                e.length &&
                  y.current &&
                  !y.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      r,
                      s,
                      n,
                      a,
                      l,
                      o,
                      {
                        swiper: d,
                        slides: u,
                        passedParams: c,
                        changedParams: p,
                        nextEl: h,
                        prevEl: f,
                        scrollbarEl: m,
                        paginationEl: g,
                      } = e,
                      v = p.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: b,
                        pagination: y,
                        navigation: w,
                        scrollbar: S,
                        virtual: E,
                        thumbs: x,
                      } = d;
                    p.includes("thumbs") &&
                      c.thumbs &&
                      c.thumbs.swiper &&
                      b.thumbs &&
                      !b.thumbs.swiper &&
                      (t = !0),
                      p.includes("controller") &&
                        c.controller &&
                        c.controller.control &&
                        b.controller &&
                        !b.controller.control &&
                        (i = !0),
                      p.includes("pagination") &&
                        c.pagination &&
                        (c.pagination.el || g) &&
                        (b.pagination || !1 === b.pagination) &&
                        y &&
                        !y.el &&
                        (r = !0),
                      p.includes("scrollbar") &&
                        c.scrollbar &&
                        (c.scrollbar.el || m) &&
                        (b.scrollbar || !1 === b.scrollbar) &&
                        S &&
                        !S.el &&
                        (s = !0),
                      p.includes("navigation") &&
                        c.navigation &&
                        (c.navigation.prevEl || f) &&
                        (c.navigation.nextEl || h) &&
                        (b.navigation || !1 === b.navigation) &&
                        w &&
                        !w.prevEl &&
                        !w.nextEl &&
                        (n = !0);
                    let T = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (b[e].prevEl = void 0),
                            (b[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (b[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    p.includes("loop") &&
                      d.isElement &&
                      (b.loop && !c.loop
                        ? (a = !0)
                        : !b.loop && c.loop
                        ? (l = !0)
                        : (o = !0)),
                      v.forEach((e) => {
                        if (L(b[e]) && L(c[e]))
                          Object.assign(b[e], c[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in c[e] &&
                              !c[e].enabled &&
                              T(e);
                        else {
                          let t = c[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && T(e)
                            : (b[e] = c[e]);
                        }
                      }),
                      v.includes("controller") &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        b.controller &&
                        b.controller.control &&
                        (d.controller.control = b.controller.control),
                      p.includes("children") && u && E && b.virtual.enabled
                        ? ((E.slides = u), E.update(!0))
                        : p.includes("virtual") &&
                          E &&
                          b.virtual.enabled &&
                          (u && (E.slides = u), E.update(!0)),
                      p.includes("children") && u && b.loop && (o = !0),
                      t && x.init() && x.update(!0),
                      i && (d.controller.control = b.controller.control),
                      r &&
                        (d.isElement &&
                          (!g || "string" == typeof g) &&
                          ((g = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          g.part.add("pagination"),
                          d.el.appendChild(g)),
                        g && (b.pagination.el = g),
                        y.init(),
                        y.render(),
                        y.update()),
                      s &&
                        (d.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          m.part.add("scrollbar"),
                          d.el.appendChild(m)),
                        m && (b.scrollbar.el = m),
                        S.init(),
                        S.updateSize(),
                        S.setTranslate()),
                      n &&
                        (d.isElement &&
                          ((h && "string" != typeof h) ||
                            ((h = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (h.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            h.part.add("button-next"),
                            d.el.appendChild(h)),
                          (f && "string" != typeof f) ||
                            ((f = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (f.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            f.part.add("button-prev"),
                            d.el.appendChild(f))),
                        h && (b.navigation.nextEl = h),
                        f && (b.navigation.prevEl = f),
                        w.init(),
                        w.update()),
                      p.includes("allowSlideNext") &&
                        (d.allowSlideNext = c.allowSlideNext),
                      p.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = c.allowSlidePrev),
                      p.includes("direction") &&
                        d.changeDirection(c.direction, !1),
                      (a || o) && d.loopDestroy(),
                      (l || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: y.current,
                    slides: B,
                    passedParams: C,
                    changedParams: e,
                    nextEl: E.current,
                    prevEl: x.current,
                    scrollbarEl: _.current,
                    paginationEl: T.current,
                  }),
                () => {
                  X();
                }
              );
            }),
            G(() => {
              F(y.current);
            }, [h]),
            a.createElement(
              s,
              N({ ref: b, className: V(`${c}${r ? ` ${r}` : ""}`) }, O),
              a.createElement(
                q.Provider,
                { value: y.current },
                H["container-start"],
                a.createElement(
                  n,
                  {
                    className: (void 0 === (i = M.wrapperClass) && (i = ""), i)
                      ? i.includes("swiper-wrapper")
                        ? i
                        : `swiper-wrapper ${i}`
                      : "swiper-wrapper",
                  },
                  H["wrapper-start"],
                  M.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let r = (e) => {
                            let i = e;
                            return (
                              e < 0
                                ? (i = t.length + e)
                                : i >= t.length && (i -= t.length),
                              i
                            );
                          },
                          s = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${i.offset}px`,
                              }
                            : { top: `${i.offset}px` },
                          { from: n, to: l } = i,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          u = [];
                        for (let e = o; e < d; e += 1)
                          e >= n && e <= l && u.push(t[r(e)]);
                        return u.map((t, i) =>
                          a.cloneElement(t, {
                            swiper: e,
                            style: s,
                            key: t.props.virtualIndex || t.key || `slide-${i}`,
                          })
                        );
                      })(y.current, B, h)
                    : B.map((e, t) =>
                        a.cloneElement(e, {
                          swiper: y.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  H["wrapper-end"]
                ),
                D(M) &&
                  a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("div", {
                      ref: x,
                      className: "swiper-button-prev",
                    }),
                    a.createElement("div", {
                      ref: E,
                      className: "swiper-button-next",
                    })
                  ),
                R(M) &&
                  a.createElement("div", {
                    ref: _,
                    className: "swiper-scrollbar",
                  }),
                j(M) &&
                  a.createElement("div", {
                    ref: T,
                    className: "swiper-pagination",
                  }),
                H["container-end"]
              )
            )
          );
        });
      H.displayName = "Swiper";
      let W = (0, a.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: r,
            className: s = "",
            swiper: n,
            zoom: l,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: u,
            ...c
          } = void 0 === e ? {} : e,
          p = (0, a.useRef)(null),
          [h, f] = (0, a.useState)("swiper-slide"),
          [m, g] = (0, a.useState)(!1);
        function v(e, t, i) {
          t === p.current && f(i);
        }
        G(() => {
          if (
            (void 0 !== u && (p.current.swiperSlideIndex = u),
            t && (t.current = p.current),
            p.current && n)
          ) {
            if (n.destroyed) {
              "swiper-slide" !== h && f("swiper-slide");
              return;
            }
            return (
              n.on("_slideClass", v),
              () => {
                n && n.off("_slideClass", v);
              }
            );
          }
        }),
          G(() => {
            n && p.current && !n.destroyed && f(n.getSlideClasses(p.current));
          }, [n]);
        let b = {
            isActive: h.indexOf("swiper-slide-active") >= 0,
            isVisible: h.indexOf("swiper-slide-visible") >= 0,
            isPrev: h.indexOf("swiper-slide-prev") >= 0,
            isNext: h.indexOf("swiper-slide-next") >= 0,
          },
          y = () => ("function" == typeof r ? r(b) : r);
        return a.createElement(
          i,
          N(
            {
              ref: p,
              className: V(`${h}${s ? ` ${s}` : ""}`),
              "data-swiper-slide-index": d,
              onLoad: () => {
                g(!0);
              },
            },
            c
          ),
          l &&
            a.createElement(
              B.Provider,
              { value: b },
              a.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof l ? l : void 0,
                },
                y(),
                o &&
                  !m &&
                  a.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !l &&
            a.createElement(
              B.Provider,
              { value: b },
              y(),
              o &&
                !m &&
                a.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      W.displayName = "SwiperSlide";
    },
    9542: function (e, t, i) {
      "use strict";
      function r(e, t, i) {
        return (1 - i) * e + i * t;
      }
      i.d(t, {
        t7: function () {
          return r;
        },
      });
    },
    3445: function (e, t, i) {
      "use strict";
      i.d(t, {
        Ue: function () {
          return c;
        },
      });
      var r = i(3973),
        s = i(7294),
        n = i(2798);
      let { useDebugValue: a } = s,
        { useSyncExternalStoreWithSelector: l } = n,
        o = !1,
        d = (e) => e,
        u = (e) => {
          "function" != typeof e &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
            );
          let t = "function" == typeof e ? (0, r.M)(e) : e,
            i = (e, i) =>
              (function (e, t = d, i) {
                i &&
                  !o &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                  ),
                  (o = !0));
                let r = l(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getInitialState,
                  t,
                  i
                );
                return a(r), r;
              })(t, e, i);
          return Object.assign(i, t), i;
        },
        c = (e) => (e ? u(e) : u);
    },
    6248: function (e, t, i) {
      "use strict";
      function r(e, t) {
        if (Object.is(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        if (e instanceof Map && t instanceof Map) {
          if (e.size !== t.size) return !1;
          for (let [i, r] of e) if (!Object.is(r, t.get(i))) return !1;
          return !0;
        }
        if (e instanceof Set && t instanceof Set) {
          if (e.size !== t.size) return !1;
          for (let i of e) if (!t.has(i)) return !1;
          return !0;
        }
        let i = Object.keys(e);
        if (i.length !== Object.keys(t).length) return !1;
        for (let r of i)
          if (
            !Object.prototype.hasOwnProperty.call(t, r) ||
            !Object.is(e[r], t[r])
          )
            return !1;
        return !0;
      }
      i.d(t, {
        X: function () {
          return r;
        },
      });
    },
    161: function (e, t, i) {
      "use strict";
      i.d(t, {
        F: function () {
          return u;
        },
      });
      var r = i(7294),
        s = i(2798),
        n = i(3973);
      let { useDebugValue: a } = r,
        { useSyncExternalStoreWithSelector: l } = s,
        o = (e) => e,
        d = (e, t) => {
          let i = (0, n.M)(e),
            r = (e, r = t) =>
              (function (e, t = o, i) {
                let r = l(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getInitialState,
                  t,
                  i
                );
                return a(r), r;
              })(i, e, r);
          return Object.assign(r, i), r;
        },
        u = (e, t) => (e ? d(e, t) : d);
    },
    3973: function (e, t, i) {
      "use strict";
      i.d(t, {
        M: function () {
          return s;
        },
      });
      let r = (e) => {
          let t;
          let i = new Set(),
            r = (e, r) => {
              let s = "function" == typeof e ? e(t) : e;
              if (!Object.is(s, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof s || null === s)
                  ? s
                  : Object.assign({}, t, s)),
                  i.forEach((i) => i(t, e));
              }
            },
            s = () => t,
            n = {
              setState: r,
              getState: s,
              getInitialState: () => a,
              subscribe: (e) => (i.add(e), () => i.delete(e)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  i.clear();
              },
            },
            a = (t = e(r, s, n));
          return n;
        },
        s = (e) => (e ? r(e) : r);
    },
  },
]);
