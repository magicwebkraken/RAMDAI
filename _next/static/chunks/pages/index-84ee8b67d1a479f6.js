(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(552);
        },
      ]);
    },
    9462: function (e, t, n) {
      "use strict";
      n.d(t, {
        Th: function () {
          return r;
        },
        o5: function () {
          return i;
        },
        xD: function () {
          return o;
        },
      }),
        n(7294);
      let r =
          "\n//	Classic Perlin 3D Noise \n//	by Stefan Gustavson\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec4 fade(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat perlin4d(vec4 P){\n  vec4 Pi0 = floor(P); // Integer part for indexing\n  vec4 Pi1 = Pi0 + 1.0; // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec4 Pf0 = fract(P); // Fractional part for interpolation\n  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = vec4(Pi0.zzzz);\n  vec4 iz1 = vec4(Pi1.zzzz);\n  vec4 iw0 = vec4(Pi0.wwww);\n  vec4 iw1 = vec4(Pi1.wwww);\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n  vec4 ixy00 = permute(ixy0 + iw0);\n  vec4 ixy01 = permute(ixy0 + iw1);\n  vec4 ixy10 = permute(ixy1 + iw0);\n  vec4 ixy11 = permute(ixy1 + iw1);\n\n  vec4 gx00 = ixy00 / 7.0;\n  vec4 gy00 = floor(gx00) / 7.0;\n  vec4 gz00 = floor(gy00) / 6.0;\n  gx00 = fract(gx00) - 0.5;\n  gy00 = fract(gy00) - 0.5;\n  gz00 = fract(gz00) - 0.5;\n  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);\n  vec4 sw00 = step(gw00, vec4(0.0));\n  gx00 -= sw00 * (step(0.0, gx00) - 0.5);\n  gy00 -= sw00 * (step(0.0, gy00) - 0.5);\n\n  vec4 gx01 = ixy01 / 7.0;\n  vec4 gy01 = floor(gx01) / 7.0;\n  vec4 gz01 = floor(gy01) / 6.0;\n  gx01 = fract(gx01) - 0.5;\n  gy01 = fract(gy01) - 0.5;\n  gz01 = fract(gz01) - 0.5;\n  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);\n  vec4 sw01 = step(gw01, vec4(0.0));\n  gx01 -= sw01 * (step(0.0, gx01) - 0.5);\n  gy01 -= sw01 * (step(0.0, gy01) - 0.5);\n\n  vec4 gx10 = ixy10 / 7.0;\n  vec4 gy10 = floor(gx10) / 7.0;\n  vec4 gz10 = floor(gy10) / 6.0;\n  gx10 = fract(gx10) - 0.5;\n  gy10 = fract(gy10) - 0.5;\n  gz10 = fract(gz10) - 0.5;\n  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);\n  vec4 sw10 = step(gw10, vec4(0.0));\n  gx10 -= sw10 * (step(0.0, gx10) - 0.5);\n  gy10 -= sw10 * (step(0.0, gy10) - 0.5);\n\n  vec4 gx11 = ixy11 / 7.0;\n  vec4 gy11 = floor(gx11) / 7.0;\n  vec4 gz11 = floor(gy11) / 6.0;\n  gx11 = fract(gx11) - 0.5;\n  gy11 = fract(gy11) - 0.5;\n  gz11 = fract(gz11) - 0.5;\n  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);\n  vec4 sw11 = step(gw11, vec4(0.0));\n  gx11 -= sw11 * (step(0.0, gx11) - 0.5);\n  gy11 -= sw11 * (step(0.0, gy11) - 0.5);\n\n  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);\n  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);\n  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);\n  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);\n  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);\n  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);\n  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);\n  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);\n  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);\n  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);\n  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);\n  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);\n  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);\n  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);\n  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);\n  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);\n\n  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));\n  g0000 *= norm00.x;\n  g0100 *= norm00.y;\n  g1000 *= norm00.z;\n  g1100 *= norm00.w;\n\n  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));\n  g0001 *= norm01.x;\n  g0101 *= norm01.y;\n  g1001 *= norm01.z;\n  g1101 *= norm01.w;\n\n  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));\n  g0010 *= norm10.x;\n  g0110 *= norm10.y;\n  g1010 *= norm10.z;\n  g1110 *= norm10.w;\n\n  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));\n  g0011 *= norm11.x;\n  g0111 *= norm11.y;\n  g1011 *= norm11.z;\n  g1111 *= norm11.w;\n\n  float n0000 = dot(g0000, Pf0);\n  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));\n  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));\n  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));\n  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));\n  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));\n  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));\n  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));\n  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));\n  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));\n  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));\n  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));\n  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));\n  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));\n  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));\n  float n1111 = dot(g1111, Pf1);\n\n  vec4 fade_xyzw = fade(Pf0);\n  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);\n  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);\n  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);\n  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);\n  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);\n  return 2.2 * n_xyzw;\n}\n\n\n// #pragma glslify: export(perlin4d)\n",
        i = (e, t) => {
          if (e.length < 2)
            return console.error("At least two points are required."), 0;
          if (t >= e.length - 1) return e[e.length - 1];
          if (t <= 0) return e[0];
          let n = Math.floor(t),
            r = e[n],
            i = e[n + 1];
          return r + (t - n) * (i - r);
        },
        o = (e, t, n, r, i) =>
          r + ((Math.min(Math.max(e, t), n) - t) / (n - t)) * (i - r);
    },
    1952: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return s;
        },
      });
      var r = n(7294),
        i = n(1132),
        o = n(3095);
      let l = { mass: 1, tension: 170, friction: 26 },
        s = function () {
          let {
              trigger: e,
              start: t,
              end: n,
              from: s,
              to: a,
              scrub: u,
              mode: d = "always",
              onChange: f,
              onStart: m,
              enable: h = !0,
              ...g
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            p = (0, r.useRef)(!!h);
          (0, i.LI)(() => void (p.current = !!h), [h]);
          let x = (0, r.useRef)(!1),
            v = (0, r.useRef)(!1),
            [w, y] = (0, o.q_)(() => ({ from: { ...s }, to: a, ...g }), []),
            [C, b] = (0, o.q_)(
              () => ({
                from: {
                  progress: 0,
                  length: 0,
                  scrollStart: 0,
                  scrollEnd: 0,
                  allProgress: 0,
                },
                onChange: f,
                onStart: m,
              }),
              []
            );
          return (
            (0, i.LI)(() => {
              setTimeout(() => {
                x.current = !0;
              }, 30);
              let r = c(
                (e, t) => {
                  y.start({
                    to: { ...t },
                    config: (null == g ? void 0 : g.config) || l,
                    immediate: !x.current,
                  }),
                    b.start({
                      to: { ...e },
                      config: (null == g ? void 0 : g.config) || l,
                      immediate: !x.current,
                    });
                },
                {
                  trigger: e,
                  start: t,
                  end: n,
                  from: s,
                  to: a,
                  scrub: u,
                  mode: d,
                  enable: p,
                  scrolledDown: v,
                }
              );
              return () => {
                (0, i.S6)(Object.values(w), (e) => e.stop()), r();
              };
            }, [d, y, b]),
            [w, C]
          );
        },
        c = function (e) {
          let {
              trigger: t,
              start: n = "bottom bottom",
              end: r = "bottom top",
              from: i,
              to: o,
              scrub: l,
              mode: s,
              enable: c,
              scrolledDown: a,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            u = null;
          return (
            (function d(f) {
              let m = (function (e, t, n, r) {
                  let i = n.getBoundingClientRect(),
                    o = window.innerHeight,
                    l = {
                      top_top: i.top,
                      center_top: i.top + i.height / 2,
                      bottom_top: i.bottom,
                      top_bottom: i.top - o,
                      center_bottom: i.top + i.height / 2 - o,
                      bottom_bottom: i.bottom - o,
                      top_center: i.top - o / 2,
                      center_center: i.top + i.height / 2 - o / 2,
                      bottom_center: i.bottom - o / 2,
                    },
                    s = l[e.split(" ").join("_")],
                    c = l[t.split(" ").join("_")],
                    a = Math.abs(s - c),
                    u = (s + a) / a || 0;
                  return {
                    scrollStart: s,
                    scrollEnd: c,
                    progress: (null == r ? void 0 : r.current)
                      ? 1 - Math.min(1, Math.max(0, u))
                      : 0,
                    allProgress: u,
                    length: a,
                  };
                })(
                  n,
                  r,
                  (null == t ? void 0 : t.current) || document.documentElement,
                  c
                ),
                h = (function (e) {
                  let {
                      from: t,
                      to: n,
                      progress: r,
                      allProgress: i,
                      scrub: o,
                      mode: l,
                      scrolledDown: s,
                    } = e,
                    c = Object.keys(t),
                    a = Object.keys(n),
                    u = {};
                  return (
                    a.forEach((e) => {
                      let i = c.find((t) => t === e),
                        a = i ? t[i] : "0",
                        d = n[e],
                        f = a
                          .toString()
                          .match(/^([-+]?[0-9]*\.?[0-9]+)([a-z%]*)$/),
                        m = d
                          .toString()
                          .match(/^([-+]?[0-9]*\.?[0-9]+)([a-z%]*)$/);
                      if (!f || !m) {
                        console.error(
                          '[useScrollTrigger]: Invalid "from" or "to" value format'
                        );
                        return;
                      }
                      let h = Number(parseFloat(f[1])),
                        g = Number(parseFloat(m[1])),
                        p = m[2];
                      o
                        ? (u[e] = (1 - r) * +h + r * +g + p)
                        : (u[e] =
                            (function (e) {
                              let {
                                start: t,
                                end: n,
                                progress: r,
                                mode: i,
                                scrolledDown: o,
                              } = e;
                              return ("forward" === i &&
                                (r > 0 ? (o.current = !0) : (o.current = !1),
                                o.current)) ||
                                ("once" === i &&
                                  (r > 0 && (o.current = !0), o.current)) ||
                                r > 0
                                ? n
                                : t;
                            })({
                              start: h,
                              end: g,
                              progress: r,
                              mode: l,
                              scrolledDown: s,
                            }) + p);
                    }),
                    u
                  );
                })({
                  from: i,
                  to: o,
                  progress: m.progress,
                  allProgress: m.allProgress,
                  scrub: l,
                  mode: s,
                  scrolledDown: a,
                });
              e({ ...m }, { ...h }), (u = requestAnimationFrame(d));
            })(),
            () => {
              cancelAnimationFrame(u);
            }
          );
        };
    },
    7503: function (e, t, n) {
      "use strict";
      n.d(t, {
        C0: function () {
          return f;
        },
        M5: function () {
          return d;
        },
        V9: function () {
          return m;
        },
        p1: function () {
          return g;
        },
      });
      var r = n(5893),
        i = n(8871),
        o = n(7294),
        l = n(8458),
        s = n(1952),
        c = n(9462),
        a = n(8270);
      let u = l.ZP.div.withConfig({ componentId: "sc-f40fbcb8-0" })(
          ["position:absolute;top:", ";left:0;width:100%;height:", ";"],
          (e) => {
            let { top: t } = e;
            return "".concat(t, "vh");
          },
          (e) => {
            let { height: t } = e;
            return (0, i.NN)(t);
          }
        ),
        d = (e, t, n) => {
          let r = (0, o.useRef)({ in: !1, out: !1 });
          (0, a.y)(
            () => {
              m.current >= e && m.current < e + 1
                ? r.current.in ||
                  (t(), (r.current.in = !0), (r.current.out = !1))
                : r.current.out ||
                  (n(), (r.current.out = !0), (r.current.in = !1));
            },
            { framerate: 10 }
          );
        },
        f = (e, t) => {
          let n = (0, o.useRef)(0);
          (0, a.y)(
            () => {
              if (m.current >= e[0] && m.current < e[1]) {
                t((0, c.xD)(m.current, e[0], e[1], 0, 1), m.current),
                  (n.current = 0);
                return;
              }
              n.current < 10 &&
                (t((0, c.xD)(m.current, e[0], e[1], 0, 1), m.current),
                n.current++);
            },
            { framerate: 10 }
          );
        },
        m = { current: 0 },
        h = { current: 0 },
        g = () => {
          let e = (0, o.useRef)(null),
            t = (0, o.useRef)(null),
            n = (0, o.useRef)(null),
            i = (0, o.useRef)(null),
            l = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(0),
            f = (0, o.useRef)(0),
            g = (0, o.useRef)(0),
            p = (0, o.useRef)(0),
            x = (0, o.useRef)(0);
          return (
            (0, s.s)({
              trigger: e,
              start: "top bottom",
              end: "bottom top",
              from: { progress: "0" },
              to: { progress: "1" },
              scrub: !0,
              onChange: (e) => {
                d.current = e.value.progress;
              },
            }),
            (0, s.s)({
              trigger: t,
              start: "top bottom",
              end: "bottom top",
              from: { progress: "1" },
              to: { progress: "2" },
              scrub: !0,
              onChange: (e) => {
                f.current = e.value.progress;
              },
            }),
            (0, s.s)({
              trigger: n,
              start: "top bottom",
              end: "bottom top",
              from: { progress: "2" },
              to: { progress: "3" },
              scrub: !0,
              onChange: (e) => {
                g.current = e.value.progress;
              },
            }),
            (0, s.s)({
              trigger: i,
              start: "top bottom",
              end: "bottom top",
              from: { progress: "3" },
              to: { progress: "4" },
              scrub: !0,
              onChange: (e) => {
                p.current = e.value.progress;
              },
            }),
            (0, s.s)({
              trigger: l,
              start: "top bottom",
              end: "bottom top",
              from: { progress: "4" },
              to: { progress: "5" },
              scrub: !0,
              onChange: (e) => {
                x.current = e.value.progress;
              },
            }),
            (0, s.s)({
              trigger: c,
              start: "top bottom",
              end: "bottom top",
              from: { progress: "5" },
              to: { progress: "6" },
              scrub: !0,
              onChange: (e) => {
                h.current = e.value.progress;
              },
            }),
            (0, a.y)(
              () => {
                m.current =
                  d.current + f.current + g.current + p.current + x.current;
              },
              { framerate: 10 }
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(u, { height: 100, top: 100, ref: e }),
                (0, r.jsx)(u, { height: 100, top: 200, ref: t }),
                (0, r.jsx)(u, { height: 100, top: 300, ref: n }),
                (0, r.jsx)(u, { height: 100, top: 400, ref: i }),
                (0, r.jsx)(u, { height: 100, top: 500, ref: l }),
              ],
            })
          );
        };
    },
    9133: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return o;
        },
      });
      var r = n(161),
        i = n(6248);
      let o = (0, r.F)(
        (e, t) => ({
          lenis: null,
          setLenis: (t) => e({ lenis: t }),
          isEnableScroll: !0,
          start: () => e({ isEnableScroll: !0 }),
          stop: () => e({ isEnableScroll: !1 }),
        }),
        i.X
      );
    },
    552: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return s2;
          },
          default: function () {
            return s5;
          },
        });
      var r = n(2729),
        i = n(5893),
        o = n(9008),
        l = n.n(o),
        s = n(9338),
        c = n(8458),
        a = n(7294);
      let u = (e) => {
        let { name: t, ...n } = e;
        return (0, i.jsxs)("img", {
            src: "/logo-text.png",
            maxHeight: "50px",
        });
      };
      var d = n(455),
        f = n(4091),
        m = n(8357),
        h = n(3095);
      function g() {
        let e = (0, r._)(["\n        &:hover{}    \n    "]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      let p = c.ZP.div.withConfig({ componentId: "sc-615cecbc-0" })(
          [
            "display:flex;width:100%;padding:",
            " ",
            ";position:relative;gap:",
            ";align-items:center;justify-content:center;cursor:pointer;z-index:1;&:hover{.firstSvg{fill:#23FAAD;opacity:.2;}}p{font-size:",
            ";",
            ";}a{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;}",
          ],
          (0, s.rm)(14),
          (0, s.rm)(27),
          (0, s.rm)(6),
          (0, s.rm)(18),
          (0, d.u2)(400)
        ),
        x = c.ZP.div.withConfig({ componentId: "sc-615cecbc-1" })(
          [
            "position:absolute;top:0;left:0;width:100%;height:100%;",
            " >:first-child{width:100%;height:100%;fill:transparent;transition:fill 0.3s ease-in-out,opacity 0.3s ease-in-out;path{color:",
            ";}}>:last-child{width:100%;height:100%;position:absolute;top:0;left:0;fill:transparent;path{color:",
            ";}}",
          ],
          s.BC.md(g()),
          s.O9.green100,
          s.O9.white100
        ),
        v = c.ZP.div.withConfig({ componentId: "sc-615cecbc-2" })(
          [
            "width:",
            ";height:",
            ";margin-top:",
            ";svg{width:100%;height:100%;}",
          ],
          (0, s.rm)(23),
          (0, s.rm)(26),
          (0, s.rm)(2)
        ),
        w = (e) => {
          let { children: t, icon: n, link: r } = e,
            o = (0, f.Z)((e) => e.isContentLoaded),
            [l, s] = (0, m.YD)(),
            [c, d] = (0, a.useState)(!1),
            g = (0, h.q_)({
              strokeDashoffset: s && o ? 0 : 1e3,
              config: {
                duration: s && o ? 1e3 : 0,
                easing: h.Z5.easeInOutCubic,
              },
            }),
            w = (0, h.q_)({
              strokeDashoffset: c ? 0 : 1e3,
              config: { duration: 700, easing: h.Z5.easeInOutCubic },
            });
          return (0, i.jsxs)(p, {
            ref: l,
            onMouseEnter: () => d(!0),
            onMouseLeave: () => d(!1),
            children: [
              (0, i.jsx)("p", { children: t }),
              (0, i.jsx)("a", { target: "_blank", href: r }),
              n && (0, i.jsx)(v, { children: (0, i.jsx)(u, { name: n }) }),
              (0, i.jsxs)(x, {
                children: [
                  (0, i.jsx)(h.q.svg, {
                    className: "firstSvg",
                    width: "204",
                    height: "53",
                    viewBox: "0 0 204 53",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)(h.q.path, {
                      d: "M179.5 0.5V0.707107L179.646 0.853553L203 24.2071V52.5H0.5V0.5H179.5Z",
                      strokeDasharray: "1000",
                      stroke: "currentColor",
                      style: g,
                    }),
                  }),
                  (0, i.jsx)(h.q.svg, {
                    width: "204",
                    height: "53",
                    viewBox: "0 0 204 53",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)(h.q.path, {
                      d: "M179.5 0.5V0.707107L179.646 0.853553L203 24.2071V52.5H0.5V0.5H179.5Z",
                      strokeDasharray: "1000",
                      stroke: "currentColor",
                      style: w,
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      var y = n(9133);
      let C = (e) => {
        if (e) {
          let t = document.getElementById(e);
          if (!t) return;
          y.v.setState({ isEnableScroll: !1 }),
            setTimeout(() => {
              var e, n;
              window.scrollTo({
                top:
                  ((e = t.getBoundingClientRect()),
                  (n =
                    window.pageYOffset || document.documentElement.scrollTop),
                  e.top + n),
                behavior: "smooth",
              });
            }, 50);
        } else
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 50);
        setTimeout(() => {
          y.v.setState({ isEnableScroll: !0 });
        }, 100);
      };
      var b = (e) => {
        let {
            text: t,
            randomCharsString:
              n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
            duration: r = 700,
          } = e,
          [o, l] = (0, a.useState)(t),
          s = (0, a.useCallback)(
            () => n[Math.floor(Math.random() * n.length)],
            [n]
          ),
          c = (0, a.useCallback)(
            (e, t) => {
              let n = [],
                r = e.length;
              for (let i = 0; i < r; i++)
                t < i / r ? n.push(s()) : n.push(e[i]);
              return n.join("");
            },
            [s]
          ),
          [u, d] = (0, h.q_)(() => ({
            progress: 0,
            config: { duration: r },
            onChange: (e) => {
              l(c(t, e.value.progress));
            },
            onRest: () => {
              l(t);
            },
          }));
        return (0, i.jsx)(h.q.span, {
          onMouseEnter: () => {
            d.start({ from: { progress: 0 }, to: { progress: 1 } });
          },
          style: { cursor: "pointer" },
          children: o,
        });
      };
      function j() {
        let e = (0, r._)([
          "\n        border-bottom: 1px solid ",
          ";    \n    ",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function _() {
        let e = (0, r._)([
          "\n        -webkit-mask-image: url(/re.png);\n        mask-image: url(/re.png);\n        mask-repeat: no-repeat;\n        mask-size: 100%;\n        border-bottom: none;\n    ",
        ]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function B() {
        let e = (0, r._)([
          "\n        padding: ",
          " ",
          " ",
          " ",
          ";     \n    ",
        ]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            height: ",
          ";\n        ",
        ]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function T() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            height: ",
          ";    \n        ",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        let e = (0, r._)([
          "\n            display: inline-block;    \n        ",
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        let e = (0, r._)(["\n            display: none;    \n        "]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function P() {
        let e = (0, r._)(["\n            color: ", ";\n        "]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        let e = (0, r._)(["\n        font-size: ", ";\n    "]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        let e = (0, r._)(["\n        gap: ", ";\n    "]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function L() {
        let e = (0, r._)(["\n        display: none;    \n    "]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        let e = (0, r._)(["\n        display: none;    \n    "]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        let e = (0, r._)(["\n        display: inline-block;    \n    "]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            height: ",
          ";\n        ",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      let Z = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-9586d3c4-0" })(
          ["position:relative;z-index:10;backdrop-filter:blur(10px);", " ", ""],
          s.BC.md(j(), s.O9.black200),
          s.BC.xsm(_())
        ),
        F = c.ZP.div.withConfig({ componentId: "sc-9586d3c4-1" })(
          [
            "position:relative;padding:",
            " ",
            " ",
            " ",
            ";display:flex;align-items:center;justify-content:space-between;z-index:100;",
            " >svg{width:",
            ";height:",
            ";cursor:pointer;",
            " ",
            "}.mobileBorder{position:absolute;width:100%;height:100%;cursor:auto;top:0;left:0;display:none;",
            "}.border{position:absolute;z-index:1;background-color:",
            ";}.bottomBorder{bottom:0;right:0;width:100%;height:",
            ";",
            "}",
          ],
          (0, s.rm)(18),
          (0, s.rm)(30),
          (0, s.rm)(18),
          (0, s.rm)(42),
          s.BC.xsm(
            B(),
            (0, s.rm)(17),
            (0, s.rm)(16),
            (0, s.rm)(17),
            (0, s.rm)(19)
          ),
          (0, s.rm)(170),
          (0, s.rm)(18),
          s.BC.lg(R(), (0, s.rm)(160), (0, s.rm)(18)),
          s.BC.xsm(T(), (0, s.rm)(140), (0, s.rm)(16)),
          s.BC.xsm(z()),
          s.O9.black200,
          (0, s.rm)(1),
          s.BC.md(E())
        ),
        O = c.ZP.a.withConfig({ componentId: "sc-9586d3c4-2" })(
          [
            "color:",
            ";font-size:",
            ";",
            ";cursor:pointer;transition:color 0.3s ease;&:hover{color:",
            ";",
            "}",
            "",
          ],
          s.O9.grey100,
          (0, s.rm)(16),
          (0, d.u2)(400),
          s.O9.green100,
          s.BC.md(P(), s.O9.grey100),
          s.BC.lg(I(), (0, s.rm)(15))
        ),
        N = c.ZP.div.withConfig({ componentId: "sc-9586d3c4-3" })(
          ["display:flex;gap:", ";align-items:center;", " ", ""],
          (0, s.rm)(40),
          s.BC.lg(D(), (0, s.rm)(30)),
          s.BC.md(L())
        ),
        M = c.ZP.div.withConfig({ componentId: "sc-9586d3c4-4" })(
          ["width:", ";height:100%;", ""],
          (0, s.rm)(204),
          s.BC.md(k())
        ),
        H = c.ZP.div.withConfig({ componentId: "sc-9586d3c4-5" })(
          [
            "display:none;cursor:pointer;position:relative;z-index:10;padding-left:",
            ";margin-right:",
            ";",
            " .clicker{width:",
            ";height:",
            ";opacity:0;top:-50%;left:-50%;transform:translate(-20%,-50%);position:absolute;z-index:1000;}.bar{width:",
            ";height:",
            ";background-color:",
            ";border-radius:",
            ";position:absolute;left:0;",
            "}> :nth-of-type(1){top:",
            ";}> :nth-of-type(2){top:",
            ";}> :nth-of-type(3){top:",
            ";}",
          ],
          (0, s.rm)(10),
          (0, s.rm)(15),
          s.BC.md(A()),
          (0, s.rm)(50),
          (0, s.rm)(50),
          (0, s.rm)(25),
          (0, s.rm)(1),
          s.O9.white100,
          (0, s.rm)(16),
          s.BC.xsm(S(), (0, s.rm)(27), (0, s.rm)(1)),
          (0, s.rm)(-6),
          (0, s.rm)(0),
          (0, s.rm)(6)
        ),
        V = (e) => {
          var t, n, r, o, l;
          let { data: c } = e,
            a = (0, f.Z)((e) => e.isContentLoaded),
            d = (0, f.Z)((e) => e.isMenuOpened),
            m = (0, f.Z)((e) => e.setIsMenuOpened),
            g = (0, f.Z)((e) => e.setIsScrolling),
            p = (0, h.q_)({
              opacity: a ? 1 : 0,
              y: a ? "0px" : "-300px",
              config: { duration: 700, easing: h.Z5.easeInOutQuad },
            }),
            x = (0, h.q_)({
              transform: d ? "rotate(45deg)" : "rotate(0deg)",
              top: d ? "".concat((0, s.rm)(0)) : "".concat((0, s.rm)(-6)),
              config: { duration: 400, easing: h.Z5.easeInOutCubic },
            }),
            v = (0, h.q_)({
              opacity: d ? 0 : 1,
              config: { duration: 400, easing: h.Z5.easeInOutCubic },
            }),
            y = (0, h.q_)({
              transform: d ? "rotate(-45deg)" : "rotate(0deg)",
              top: d ? "".concat((0, s.rm)(0)) : "".concat((0, s.rm)(6)),
              config: { duration: 400, easing: h.Z5.easeInOutCubic },
            });
          return (0, i.jsx)(Z, {
            style: p,
            children: (0, i.jsxs)(F, {
              children: [
                (0, i.jsx)("div", { className: "bottomBorder border" }),
                (0, i.jsx)(u, {
                  name: "logo",
                  onClick: () =>
                    setTimeout(() => {
                      C();
                    }, 1),
                }),
                (0, i.jsx)(N, {
                  children:
                    null == c
                      ? void 0
                      : null === (t = c.anchors) || void 0 === t
                      ? void 0
                      : t.map((e, t) =>
                          (0, i.jsx)(
                            O,
                            {
                              onClick: () => {
                                g(!0),
                                  C(e.id),
                                  setTimeout(() => {
                                    g(!1);
                                  }, 1e3);
                              },
                              children: (0, i.jsx)(b, { text: e.text }),
                            },
                            t
                          )
                        ),
                }),
                (0, i.jsx)(M, {
                  children: (0, i.jsx)(w, {
                    icon: "tren",
                    link:
                      null == c
                        ? void 0
                        : null === (r = c.button) || void 0 === r
                        ? void 0
                        : null === (n = r[0]) || void 0 === n
                        ? void 0
                        : n.link,
                    children:
                      null == c
                        ? void 0
                        : null === (l = c.button) || void 0 === l
                        ? void 0
                        : null === (o = l[0]) || void 0 === o
                        ? void 0
                        : o.text,
                  }),
                }),
                (0, i.jsxs)(H, {
                  onClick: () => {
                    m(!d);
                  },
                  children: [
                    (0, i.jsx)(h.q.div, { style: x, className: "bar" }),
                    (0, i.jsx)(h.q.div, { style: v, className: "bar" }),
                    (0, i.jsx)(h.q.div, { style: y, className: "bar" }),
                    (0, i.jsx)("div", { className: "clicker" }),
                  ],
                }),
                (0, i.jsxs)("svg", {
                  className: "mobileBorder",
                  width: "390",
                  height: "52",
                  viewBox: "0 0 390 52",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, i.jsx)("g", {
                      filter: "url(#filter0_b_1075_3248)",
                      children: (0, i.jsx)("path", {
                        d: "M0.5 26.5069L27.2861 0.5H389.5V51.5H0.5V26.5069Z",
                        stroke: "#2D2D2D",
                      }),
                    }),
                    (0, i.jsx)("defs", {
                      children: (0, i.jsxs)("filter", {
                        id: "filter0_b_1075_3248",
                        x: "-14",
                        y: "-14",
                        width: "418",
                        height: "80",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                          (0, i.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix",
                          }),
                          (0, i.jsx)("feGaussianBlur", {
                            in: "BackgroundImageFix",
                            stdDeviation: "7",
                          }),
                          (0, i.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur_1075_3248",
                          }),
                          (0, i.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur_1075_3248",
                            result: "shape",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var U = n(5152),
        q = n.n(U);
      let G = (e) => {
          let {
              from: t = " ",
              to: n,
              config: r = { duration: 2e3, easing: h.Z5.easeInOutQuad },
              delayIn: o = 0,
              delayOut: l = 0,
              immediateOut: s = !0,
              randomCharsString: c = "Ab#Y",
              tag: u = "span",
              randomSymbolsPercentage: d = 0.1,
              enabled: f = !0,
            } = e,
            [m, g] = (0, h.YD)(),
            [p, x] = (0, a.useState)(t),
            v = f && g,
            { progress: w } = (0, h.q_)({
              from: { progress: 0 },
              to: { progress: v ? 1 : 0 },
              config: v || !s ? r : { duration: 0 },
              delay: v ? o : s ? 0 : l,
              immediate: !v && s,
              onChange: () => {
                x(C(t, n, w.get()));
              },
            }),
            y = (0, a.useCallback)(
              () => c[Math.floor(Math.random() * c.length)],
              [c]
            ),
            C = (0, a.useCallback)(
              (e, t, n) => {
                let r = [],
                  i = Math.max(e.length, t.length);
                for (let o = 0; o < i; o++) {
                  let l = o / i;
                  n > l
                    ? r.push(t[o] || "")
                    : n > l - d
                    ? r.push(y())
                    : r.push(e[o] || "");
                }
                return r.join("");
              },
              [y, d]
            );
          return (0, i.jsx)(W, { ref: m, tag: u, children: p });
        },
        W = (0, a.forwardRef)((e, t) => {
          let {
              tag: n = "span",
              children: r,
              className: o,
              style: l,
              ...s
            } = e,
            c = (0, a.useRef)(null);
          return (
            (0, a.useImperativeHandle)(t, () => c.current),
            (0, i.jsx)(n, { ref: c, className: o, style: l, ...s, children: r })
          );
        });
      W.displayName = "VarTextTag";
      var X = n(5496);
      let Y = (e) => {
          let { children: t, enabled: n, mode: r, ...o } = e,
            { fullyLoaded: l } = (0, X.Oz)();
          return (0, i.jsx)(i.Fragment, { children: t });
        },
        Q = (e) => {
          let { name: t, ...n } = e;
          return "learn" === t
            ? (0, i.jsx)("svg", {
                width: "22",
                height: "17",
                viewBox: "0 0 22 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, i.jsx)("path", {
                  d: "M19.3942 8.74492L15.758 5.12649C15.6273 4.97471 15.3978 4.95701 15.2453 5.08703C15.0927 5.21701 15.0749 5.44544 15.2056 5.59722C15.2178 5.61136 15.231 5.62458 15.2453 5.63668L18.2597 8.63997H3.86362C3.66281 8.63997 3.5 8.80198 3.5 9.00183C3.5 9.20169 3.66281 9.36367 3.86362 9.36367H18.2597L15.2453 12.3633C15.0927 12.4933 15.0749 12.7217 15.2056 12.8735C15.3363 13.0253 15.5658 13.043 15.7183 12.913C15.7325 12.9008 15.7458 12.8877 15.758 12.8735L19.3943 9.25508C19.5352 9.114 19.5352 8.88606 19.3942 8.74492Z",
                  fill: "white",
                }),
              })
            : "border" === t
            ? (0, i.jsx)("svg", {
                width: "461",
                height: "49",
                viewBox: "0 0 461 49",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, i.jsx)("path", {
                  d: "M460 31.9099V1H18.0134L1 20.9009V48H446.244L460 31.9099Z",
                  stroke: "#23FAAD",
                  strokeWidth: "1.25253",
                }),
              })
            : void 0;
        };
      var K = n(1715);
      function $() {
        let e = (0, r._)(["\n        padding: ", " 0;    \n    "]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      function J() {
        let e = (0, r._)(["\n            &:hover{}    \n        "]);
        return (
          (J = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      let et = c.ZP.div.withConfig({ componentId: "sc-35fd14dc-0" })(
          [
            "display:flex;width:100%;padding:",
            " ",
            ";position:relative;gap:",
            ";align-items:center;justify-content:center;cursor:pointer;z-index:1;",
            " &:hover{.firstSvg{fill:#23FAAD;opacity:.2;}",
            "}a{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;}p{font-size:",
            ";",
            ";letter-spacing:",
            ";text-transform:uppercase;",
            "}",
          ],
          (0, s.rm)(11.5),
          (0, s.rm)(0),
          (0, s.rm)(6),
          s.BC.xsm($(), (0, s.rm)(12)),
          s.BC.md(J()),
          (0, s.rm)(18),
          (0, d.u2)(700),
          (0, s.rm)(1),
          s.BC.xsm(ee(), (0, s.rm)(16))
        ),
        en = c.ZP.div.withConfig({ componentId: "sc-35fd14dc-1" })(
          [
            "position:absolute;top:0;left:0;width:100%;height:100%;>:first-child{width:100%;height:100%;fill:transparent;transition:fill 0.3s ease-in-out,opacity 0.3s ease-in-out;path{color:",
            ";}}>:last-child{width:100%;height:100%;position:absolute;top:0;left:0;fill:transparent;path{color:",
            ";}}",
          ],
          s.O9.green100,
          s.O9.white100
        ),
        er = (e) => {
          let { children: t, icon: n, link: r } = e,
            o = (0, f.Z)((e) => e.isContentLoaded),
            [l, s] = (0, m.YD)(),
            c = (0, K.Lm)(),
            [u, d] = (0, a.useState)(!1),
            g = (0, h.q_)({
              strokeDashoffset: s && o ? 0 : 1e3,
              config: {
                duration: s && o ? 1e3 : 0,
                easing: h.Z5.easeInOutCubic,
              },
            }),
            p = (0, h.q_)({
              strokeDashoffset: u ? 0 : 1e3,
              config: { duration: 700, easing: h.Z5.easeInOutCubic },
            });
          return (0, i.jsxs)(et, {
            ref: l,
            onMouseEnter: () => d(!0),
            onMouseLeave: () => d(!1),
            children: [
              (0, i.jsx)("p", { children: t }),
              (0, i.jsx)("a", { target: "_blank", href: r }),
              n && (0, i.jsx)(Q, { name: n }),
              (0, i.jsxs)(en, {
                children: [
                  c > 576 &&
                    (0, i.jsx)(h.q.svg, {
                      className: "firstSvg",
                      width: "461",
                      height: "49",
                      viewBox: "0 0 461 49",
                      fill: "currentColor",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)(h.q.path, {
                        d: "M460 31.9099V1H18.0134L1 20.9009V48H446.244L460 31.9099Z",
                        stroke: "currentColor",
                        strokeWidth: "1.25253",
                        strokeDasharray: "1000",
                        style: g,
                      }),
                    }),
                  c > 576 &&
                    (0, i.jsx)(h.q.svg, {
                      width: "461",
                      height: "49",
                      viewBox: "0 0 461 49",
                      fill: "currentColor",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)(h.q.path, {
                        d: "M460 31.9099V1H18.0134L1 20.9009V48H446.244L460 31.9099Z",
                        stroke: "currentColor",
                        strokeWidth: "1.25253",
                        strokeDasharray: "1000",
                        style: p,
                      }),
                    }),
                  c <= 576 &&
                    (0, i.jsx)("svg", {
                      width: "392",
                      height: "46",
                      viewBox: "0 0 392 46",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)("path", {
                        d: "M391 29.9369V1H15.4558L1 19.6306V45H379.312L391 29.9369Z",
                        stroke: "#23FAAD",
                      }),
                    }),
                ],
              }),
            ],
          });
        };
      function ei() {
        let e = (0, r._)(["\n        padding-left: ", ";\n    "]);
        return (
          (ei = function () {
            return e;
          }),
          e
        );
      }
      function eo() {
        let e = (0, r._)([
          "\n        padding: 0;\n        margin-top: ",
          ";\n    ",
        ]);
        return (
          (eo = function () {
            return e;
          }),
          e
        );
      }
      function el() {
        let e = (0, r._)(["\n        font-size: ", ";\n    "]);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function es() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (es = function () {
            return e;
          }),
          e
        );
      }
      function ec() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (ec = function () {
            return e;
          }),
          e
        );
      }
      function ea() {
        let e = (0, r._)([
          "\n        font-size: ",
          ";\n        line-height: 110%;\n        margin-bottom: ",
          ";\n    ",
        ]);
        return (
          (ea = function () {
            return e;
          }),
          e
        );
      }
      function eu() {
        let e = (0, r._)(["\n        // font-size: ", ";    \n    "]);
        return (
          (eu = function () {
            return e;
          }),
          e
        );
      }
      function ed() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (ed = function () {
            return e;
          }),
          e
        );
      }
      function ef() {
        let e = (0, r._)(["\n        font-size: ", ";\n    "]);
        return (
          (ef = function () {
            return e;
          }),
          e
        );
      }
      function em() {
        let e = (0, r._)(["\n        font-size: ", ";\n    "]);
        return (
          (em = function () {
            return e;
          }),
          e
        );
      }
      function eh() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }
      function eg() {
        let e = (0, r._)(["\n        width: auto;    \n    "]);
        return (
          (eg = function () {
            return e;
          }),
          e
        );
      }
      function ep() {
        let e = (0, r._)([
          "\n            font-size: ",
          ";\n            line-height: 100%;\n        ",
        ]);
        return (
          (ep = function () {
            return e;
          }),
          e
        );
      }
      function ex() {
        let e = (0, r._)([
          "\n            font-size: ",
          ";\n            line-height: 90%;\n        ",
        ]);
        return (
          (ex = function () {
            return e;
          }),
          e
        );
      }
      function ev() {
        let e = (0, r._)([
          "\n            font-size: ",
          ";\n            margin-left: ",
          ";\n            line-height: 100%;\n        ",
        ]);
        return (
          (ev = function () {
            return e;
          }),
          e
        );
      }
      function ew() {
        let e = (0, r._)([
          "\n        flex-direction: column;\n        margin-top: ",
          ";\n        justify-content: center;\n        align-items: center;\n    ",
        ]);
        return (
          (ew = function () {
            return e;
          }),
          e
        );
      }
      function ey() {
        let e = (0, r._)(["\n            margin-bottom: ", ";    \n        "]);
        return (
          (ey = function () {
            return e;
          }),
          e
        );
      }
      function eC() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";\n                margin-right: ",
          ";\n            ",
        ]);
        return (
          (eC = function () {
            return e;
          }),
          e
        );
      }
      function eb() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";\n                margin-left: ",
          ";\n            ",
        ]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      function ej() {
        let e = (0, r._)([
          "\n                font-size: ",
          "; \n                margin-right: 0;\n                line-height: 125%;    \n                margin-left: ",
          ";   \n            ",
        ]);
        return (
          (ej = function () {
            return e;
          }),
          e
        );
      }
      function e_() {
        let e = (0, r._)(["\n            width: ", ";\n        "]);
        return (
          (e_ = function () {
            return e;
          }),
          e
        );
      }
      function eB() {
        let e = (0, r._)([
          "\n            align-self: center;\n            text-align: center;    \n        ",
        ]);
        return (
          (eB = function () {
            return e;
          }),
          e
        );
      }
      function eR() {
        let e = (0, r._)([
          "\n            width: 100%;\n            line-height: 130%;   \n        ",
        ]);
        return (
          (eR = function () {
            return e;
          }),
          e
        );
      }
      function eT() {
        let e = (0, r._)([
          "\n        margin-left: ",
          ";\n        margin-top: ",
          ";\n    ",
        ]);
        return (
          (eT = function () {
            return e;
          }),
          e
        );
      }
      function ez() {
        let e = (0, r._)([
          "\n        width: 100%;   \n        margin-left: 0;\n        margin-top: ",
          ";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    ",
        ]);
        return (
          (ez = function () {
            return e;
          }),
          e
        );
      }
      function eE() {
        let e = (0, r._)(["\n            margin-bottom: ", ";\n        "]);
        return (
          (eE = function () {
            return e;
          }),
          e
        );
      }
      function eP() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            // width: 100%;\n            margin-bottom: 0;    \n        ",
        ]);
        return (
          (eP = function () {
            return e;
          }),
          e
        );
      }
      let eI = c.ZP.div.withConfig({ componentId: "sc-528237fe-0" })(
          [
            "position:relative;display:flex;align-items:center;justify-content:center;flex-direction:column;padding-top:",
            ";",
            " ",
            "",
          ],
          (0, s.rm)(100),
          s.BC.lg(ei(), (0, s.rm)(50)),
          s.BC.md(eo(), (0, s.rm)(-200))
        ),
        eD = c.ZP.p.withConfig({ componentId: "sc-528237fe-1" })(
          [
            "font-size:",
            ";",
            ";color:",
            ";line-height:130%;text-transform:uppercase;",
            " ",
            " ",
            "",
          ],
          (0, s.rm)(92),
          (0, d.rB)(700),
          s.O9.white100,
          s.BC.lg(el(), (0, s.rm)(70)),
          s.BC.md(es(), (0, s.rm)(60)),
          s.BC.xsm(ec(), (0, s.rm)(19))
        ),
        eL = c.ZP.p.withConfig({ componentId: "sc-528237fe-2" })(
          [
            "font-size:",
            ";",
            ";color:",
            ";line-height:115%;margin-bottom:",
            ";",
            " ",
            " ",
            "",
          ],
          (0, s.rm)(20),
          (0, d.u2)(400),
          s.O9.white200,
          (0, s.rm)(30),
          s.BC.lg(ea(), (0, s.rm)(17), (0, s.rm)(15)),
          s.BC.md(eu(), (0, s.rm)(16)),
          s.BC.xsm(ed(), (0, s.rm)(14))
        ),
        ek = c.ZP.p.withConfig({ componentId: "sc-528237fe-3" })(
          [
            "font-size:",
            ";color:",
            ";text-transform:uppercase;line-height:100%;",
            ";",
            " ",
            " ",
            "",
          ],
          (0, s.rm)(124),
          s.O9.green100,
          (0, d.ul)(400),
          s.BC.lg(ef(), (0, s.rm)(88)),
          s.BC.md(em(), (0, s.rm)(74)),
          s.BC.xsm(eh(), (0, s.rm)(24))
        ),
        eA = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-528237fe-4" })([
          "display:flex;align-items:flex-end;",
        ]),
        eS = (0, c.ZP)(eA).withConfig({ componentId: "sc-528237fe-5" })(
          [
            "width:100%;",
            " >:nth-child(2){",
            ";font-size:",
            ";text-transform:lowercase;margin-left:",
            ";",
            " ",
            " ",
            "}",
          ],
          s.BC.xsm(eg()),
          (0, d.ul)(400),
          (0, s.rm)(102),
          (0, s.rm)(24),
          s.BC.lg(ep(), (0, s.rm)(80)),
          s.BC.md(ex(), (0, s.rm)(74)),
          s.BC.xsm(ev(), (0, s.rm)(19), (0, s.rm)(8))
        ),
        eZ = (0, c.ZP)(eA).withConfig({ componentId: "sc-528237fe-6" })(
          [
            "display:flex;",
            " .protocol{display:flex;",
            " >:nth-child(1){line-height:130%;}>:nth-child(2){text-transform:inherit;font-size:",
            ";margin-left:",
            ";margin-right:",
            ";line-height:135%;",
            " ",
            " ",
            "}}>:nth-child(2){width:",
            ";align-self:flex-end;",
            " ",
            " ",
            "}",
          ],
          s.BC.md(ew(), (0, s.rm)(8)),
          s.BC.xsm(ey(), (0, s.rm)(40)),
          (0, s.rm)(107),
          (0, s.rm)(53),
          (0, s.rm)(80),
          s.BC.lg(eC(), (0, s.rm)(80), (0, s.rm)(50)),
          s.BC.md(eb(), (0, s.rm)(62), (0, s.rm)(30)),
          s.BC.xsm(ej(), (0, s.rm)(20), (0, s.rm)(10)),
          (0, s.rm)(400),
          s.BC.lg(e_(), (0, s.rm)(330)),
          s.BC.md(eB()),
          s.BC.xsm(eR())
        ),
        eF = (0, c.ZP)(eA).withConfig({ componentId: "sc-528237fe-7" })(
          [
            "margin-left:",
            ";margin-top:",
            ";width:",
            ";height:100%;",
            " ",
            " >:last-child{width:",
            ";margin-bottom:",
            ";",
            " ",
            "}",
          ],
          (0, s.rm)(250),
          (0, s.rm)(20),
          (0, s.rm)(432),
          s.BC.lg(eT(), (0, s.rm)(30), (0, s.rm)(30)),
          s.BC.xsm(ez(), (0, s.rm)(42)),
          (0, s.rm)(459),
          (0, s.rm)(10),
          s.BC.lg(eE(), (0, s.rm)(0)),
          s.BC.xsm(eP(), (0, s.rm)(358))
        ),
        eO = (e) => {
          var t, n, r;
          let {
              firstText: o,
              secondText: l,
              thirdText: s,
              fourthText: c,
              descriptionText: a,
              spanText: u,
              button: d,
            } = e,
            m = (0, f.Z)((e) => e.isContentLoaded),
            g = (0, h.q_)({
              opacity: m ? 1 : 0,
              y: m ? "0px" : "100px",
              config: { duration: 800, easing: h.Z5.easeInOutCubic },
            });
          return (0, i.jsxs)(eI, {
            children: [
              (0, i.jsxs)(eS, {
                children: [
                  (0, i.jsx)(eD, {
                    children: (0, i.jsx)(G, {
                      tag: "span",
                      to: o || "-",
                      immediateOut: !0,
                      enabled: m,
                    }),
                  }),
                  (0, i.jsx)("span", { children: u }),
                  (0, i.jsx)(eD, {
                    children: (0, i.jsx)(G, {
                      tag: "span",
                      to: l || "-",
                      immediateOut: !0,
                      enabled: m,
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(eZ, {
                children: [
                  (0, i.jsxs)("div", {
                    className: "protocol",
                    children: [
                      (0, i.jsx)(ek, {
                        children: (0, i.jsx)(G, {
                          tag: "span",
                          to: s || "-",
                          immediateOut: !0,
                          enabled: m,
                        }),
                      }),
                      (0, i.jsx)(eD, {
                        children: (0, i.jsx)(G, {
                          tag: "span",
                          to: c || "-",
                          immediateOut: !0,
                          enabled: m,
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(eL, {
                    children: (0, i.jsx)(Y, { enabled: m, children: a || "-" }),
                  }),
                ],
              }),
              (0, i.jsx)(eF, {
                style: g,
                children: (0, i.jsx)(er, {
                  link:
                    null == d
                      ? void 0
                      : null === (t = d[0]) || void 0 === t
                      ? void 0
                      : t.link,
                  icon: "learn",
                  children: (
                    null == d
                      ? void 0
                      : null === (n = d[0]) || void 0 === n
                      ? void 0
                      : n.text
                  )
                    ? null == d
                      ? void 0
                      : null === (r = d[0]) || void 0 === r
                      ? void 0
                      : r.text
                    : "-",
                }),
              }),
            ],
          });
        },
        eN = (e) => {
          let {
              number: t,
              config: n = { duration: 2e3, easing: h.Z5.easeInOutQuad },
              delayIn: r = 0,
              delayOut: o = 0,
              immediateOut: l = !0,
              tag: s = "span",
              columnGap: c = 0.2,
              rowGap: u = 0,
              enabled: d = !0,
            } = e,
            [f, m] = (0, h.YD)(),
            [g, p] = (0, a.useState)(null != t ? 0.2 * t : 0),
            x = d && m,
            { progress: v } = (0, h.q_)({
              from: { progress: 0.2 },
              to: { progress: x ? 1 : 0.2 },
              config: x || !l ? n : { duration: 0 },
              delay: x ? r : l ? 0 : o,
              immediate: !x && l,
              onChange: () => {
                let e = v.get();
                null != t && p(t * (0.2 + 0.8 * e));
              },
            });
          return (0, i.jsx)(eM, {
            ref: f,
            tag: s,
            style: {
              display: "flex",
              flexWrap: "wrap",
              columnGap: "".concat(c, "em"),
              rowGap: "".concat(u, "em"),
            },
            children:
              null != t && "" !== t ? g.toFixed(2).replace(/\.?0+$/, "") : "-",
          });
        },
        eM = (0, a.forwardRef)((e, t) => {
          let {
              tag: n = "span",
              children: r,
              className: o,
              style: l,
              ...s
            } = e,
            c = (0, a.useRef)(null);
          return (
            (0, a.useImperativeHandle)(t, () => c.current),
            (0, i.jsx)(n, { ref: c, className: o, style: l, ...s, children: r })
          );
        });
      eM.displayName = "VarTextTag";
      var eH = n(1033);
      let eV = (e) => {
          let {
              children: t,
              lineIn: n = { y: "0%" },
              lineOut: r = { y: "100%" },
              configIn: o,
              configOut: l,
              config: s,
              enabled: c = !0,
              tag: u = "span",
              style: d,
              immediateOut: f = !0,
              columnGap: m = 0.3,
              delay: g = 0,
              stagger: p = 100,
            } = e,
            [x, v] = (0, h.YD)();
          (0, a.useMemo)(
            () =>
              t
                .toString()
                .split(" ")
                .map((e) => e.split("")),
            [t]
          );
          let [w, y] = (0, a.useState)([]),
            C = (0, a.useCallback)(
              () =>
                void y(
                  (function (e) {
                    if (!e.current) return [];
                    let { top: t } = e.current.getBoundingClientRect(),
                      n = e.current.querySelectorAll(".line-word");
                    if (!n.length) return [];
                    let r = [],
                      i = n[0].getBoundingClientRect().height;
                    return (
                      n.forEach((e, n) => {
                        let { top: o } = e.getBoundingClientRect(),
                          l = Math.floor((o - t) / i);
                        r[l] = [
                          ...(r[l] || []),
                          { word: e, index: n, lineIndex: l },
                        ];
                      }),
                      r
                    );
                  })(x)
                ),
              [y]
            );
          (0, a.useEffect)(() => void C(), [C, t]), eq(x, C);
          let b = (0, a.useMemo)(() => c && v, [c, v]),
            [j, _] = (0, h.bY)(w.length, (e) => ({ from: r }));
          return (
            (0, a.useCallback)(
              (e) => {
                var t;
                return j[
                  (null === (t = w.flat().find((t) => t.index === e)) ||
                  void 0 === t
                    ? void 0
                    : t.lineIndex) || 0
                ];
              },
              [j, w]
            ),
            (0, a.useEffect)(() => {
              _.start((e) => ({
                to: b ? n : r,
                delay: g + e * p,
                config: b ? o || s : l || s,
                immediate: !b && f,
              }));
            }, [b]),
            (0, i.jsx)(eU, {
              ref: x,
              tag: u,
              style: {
                display: "flex",
                flexWrap: "wrap",
                columnGap: "".concat(m, "em"),
                ...d,
              },
              children: t,
            })
          );
        },
        eU = a.forwardRef((e, t) => {
          let {
            tag: n = "span",
            children: r,
            className: o,
            style: l,
            ...s
          } = e;
          return (0, i.jsx)(n, {
            ref: t,
            className: o,
            style: l,
            ...s,
            children: r,
          });
        });
      eU.displayName = "VarTextTag";
      let eq = (e, t) => {
        let n = (0, a.useRef)(0);
        (0, a.useEffect)(() => {
          let r = e.current;
          if (!r) return;
          let i = new eH.Z((e) => {
            for (let i of e)
              if (i.target === r) {
                let e = n.current,
                  r = i.contentRect.width;
                (n.current = r), t(r, e);
              }
          });
          return (
            i.observe(r),
            () => {
              i.unobserve(r);
            }
          );
        }, [t]);
      };
      function eG() {
        let e = (0, r._)([
          "\n        padding: ",
          " ",
          " ",
          " ",
          ";\n        gap: ",
          ";\n    ",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      function eW() {
        let e = (0, r._)(["\n        padding: ", " ", ";    \n    "]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      function eX() {
        let e = (0, r._)([
          "\n        border-left: 1px solid ",
          ";\n        border-bottom: 1px solid ",
          ";\n        gap: ",
          ";\n        padding: ",
          ";\n    ",
        ]);
        return (
          (eX = function () {
            return e;
          }),
          e
        );
      }
      function eY() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (eY = function () {
            return e;
          }),
          e
        );
      }
      function eQ() {
        let e = (0, r._)(["\n            font-size: ", "    \n        "]);
        return (
          (eQ = function () {
            return e;
          }),
          e
        );
      }
      function eK() {
        let e = (0, r._)(["\n                font-size: ", ";\n            "]);
        return (
          (eK = function () {
            return e;
          }),
          e
        );
      }
      function e$() {
        let e = (0, r._)([
          "\n                font-size: ",
          "    \n            ",
        ]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      let eJ = c.ZP.div.withConfig({ componentId: "sc-ad08bbec-0" })(
          [
            "display:flex;height:100%;flex-direction:column;padding:",
            " ",
            " ",
            " ",
            ";justify-content:space-between;gap:",
            ";",
            " ",
            " ",
            " span{font-size:",
            ";color:",
            ";",
            ";text-transform:uppercase;",
            " ",
            "}div{display:flex;align-items:center;p{font-size:",
            ";color:",
            ";",
            ";",
            " ",
            "}}",
          ],
          (0, s.rm)(24),
          (0, s.rm)(50),
          (0, s.rm)(20),
          (0, s.rm)(50),
          (0, s.rm)(50),
          s.BC.lg(
            eG(),
            (0, s.rm)(24),
            (0, s.rm)(50),
            (0, s.rm)(20),
            (0, s.rm)(50),
            (0, s.rm)(15)
          ),
          s.BC.md(eW(), (0, s.rm)(16), (0, s.rm)(30)),
          s.BC.xsm(
            eX(),
            s.O9.black200,
            s.O9.black200,
            (0, s.rm)(35),
            (0, s.rm)(8)
          ),
          (0, s.rm)(16),
          s.O9.grey100,
          (0, d.u2)(400),
          s.BC.lg(eY(), (0, s.rm)(15)),
          s.BC.xsm(eQ(), (0, s.rm)(10)),
          (0, s.rm)(36),
          s.O9.white100,
          (0, d.rB)(700),
          s.BC.lg(eK(), (0, s.rm)(32)),
          s.BC.xsm(e$(), (0, s.rm)(14))
        ),
        e0 = (e) => {
          let {
            name: t,
            number: n,
            isContentLoaded: r,
            beforeText: o,
            afterText: l,
          } = e;
          return (0, i.jsxs)(eJ, {
            children: [
              (0, i.jsx)("span", {
                children: (0, i.jsx)(eV, { enabled: r, children: t }),
              }),
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("p", { children: o }),
                  (0, i.jsx)(eN, { tag: "p", number: n, enabled: r }),
                  (0, i.jsx)("p", { children: l }),
                ],
              }),
            ],
          });
        };
      var e1 = n(9304),
        e2 = n(2261);
      function e5() {
        let e = (0, r._)([
          "\n        position: fixed;\n        bottom: 0;\n        left: 0;    \n    ",
        ]);
        return (
          (e5 = function () {
            return e;
          }),
          e
        );
      }
      function e4() {
        let e = (0, r._)([
          "\n            display: flex !important;    \n        ",
        ]);
        return (
          (e4 = function () {
            return e;
          }),
          e
        );
      }
      let e6 = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-ec98584a-0" })(
          [
            "display:flex;border-top:1px solid ",
            ";width:100%;",
            " .swiper{width:100% !important;display:none !important;",
            "}>div{width:20%;border-left:1px solid ",
            ";}>:first-child{border-left:none;}",
          ],
          s.O9.black200,
          s.BC.xsm(e5()),
          s.BC.xsm(e4()),
          s.O9.black200
        ),
        e3 = (e) => {
          let { cards: t, style: n, isContentLoaded: r, infoRef: o } = e,
            l = (0, K.Lm)();
          return (0, i.jsxs)(e6, {
            ref: o,
            style: n,
            children: [
              l > 576 &&
                (null == t
                  ? void 0
                  : t.map((e, t) =>
                      (0, i.jsx)(
                        e0,
                        {
                          name: e.title,
                          number: e.subText,
                          beforeText: e.beforeText,
                          afterText: e.afterText,
                          isContentLoaded: r,
                        },
                        t
                      )
                    )),
              (0, i.jsx)(e2.tq, {
                slidesPerView: 2.5,
                spaceBetween: 0,
                className: "swiper",
                modules: [e1.W_, e1.LW, e1.s5, e1.pt],
                children:
                  null == t
                    ? void 0
                    : t.map((e, t) =>
                        (0, i.jsx)(
                          e2.o5,
                          {
                            children: (0, i.jsx)(e0, {
                              name: null == e ? void 0 : e.title,
                              number: null == e ? void 0 : e.subText,
                              beforeText: null == e ? void 0 : e.beforeText,
                              afterText: null == e ? void 0 : e.afterText,
                              isContentLoaded: r,
                            }),
                          },
                          t
                        )
                      ),
              }),
            ],
          });
        };
      var e7 = n(7503),
        e9 = n(9462);
      let e8 = c.ZP.div.withConfig({ componentId: "sc-55da3e09-0" })([
          "position:absolute;top:0;left:0;width:100%;height:0.1px;",
        ]),
        te = (e) => {
          let { id: t } = e;
          return (0, i.jsx)(e8, { id: t });
        };
      function tt() {
        let e = (0, r._)(["\n    padding: ", ";  \n  "]);
        return (
          (tt = function () {
            return e;
          }),
          e
        );
      }
      function tn() {
        let e = (0, r._)(["\n    height: auto;  \n  "]);
        return (
          (tn = function () {
            return e;
          }),
          e
        );
      }
      function tr() {
        let e = (0, r._)(["\n      height: auto;  \n    "]);
        return (
          (tr = function () {
            return e;
          }),
          e
        );
      }
      let ti = q()(
          Promise.all([
            n.e(737),
            n.e(782),
            n.e(128),
            n.e(854),
            n.e(673),
            n.e(948),
            n.e(105),
            n.e(265),
          ])
            .then(n.bind(n, 1265))
            .then((e) => e.CommunicationScene),
          { loadableGenerated: { webpack: () => [1265] }, ssr: !1 }
        ),
        to = c.ZP.div.withConfig({ componentId: "sc-f402a8de-0" })(
          [
            "width:100%;height:100%;position:relative;padding:",
            " ",
            " ",
            " ",
            ";z-index:10;",
            "",
          ],
          (0, s.rm)(25),
          (0, s.rm)(25),
          (0, s.rm)(25),
          (0, s.rm)(25),
          s.BC.md(tt(), (0, s.rm)(0))
        ),
        tl = c.ZP.div.withConfig({ componentId: "sc-f402a8de-1" })([
          "position:relative;height:100%;overflow:hidden;",
        ]),
        ts = c.ZP.div.withConfig({ componentId: "sc-f402a8de-2" })(
          [
            "width:100%;height:100%;display:flex;flex-direction:column;flex:1;",
            "",
          ],
          s.BC.xsm(tn())
        ),
        tc = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-f402a8de-3" })(
          [
            "width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;flex:1;",
            "",
          ],
          s.BC.xsm(tr())
        ),
        ta = (e) => {
          let { screenNumber: t, scrollTrigger: n, data: r } = e,
            o = (0, f.Z)((e) => e.isContentLoaded);
          (0, K.Lm)();
          let l = (0, a.useRef)(null),
            s = (0, a.useRef)(null),
            c = (0, a.useRef)(null),
            [u, d] = (0, h.q_)(() => ({
              opacity: 0,
              y: "300px",
              config: { duration: 700, easing: h.Z5.easeInOutQuad },
            }));
          return (
            (0, e7.M5)(
              t,
              () => {
                d.start({ opacity: 0, y: "0px" });
              },
              () => {
                d.start({ opacity: 0, y: "300px" });
              }
            ),
            (0, e7.C0)([0, 1], (e, t) => {
              if (s.current) {
                let n = (0, e9.xD)(t, 0.7, 1, 1, 0),
                  r = (0, e9.xD)(t, 0.7, 1, 1, 1.1);
                (s.current.style.opacity = n),
                  (s.current.style.transform = "scale(".concat(r, ")")),
                  e >= 0.9
                    ? ((l.current.style.pointerEvents = "none"),
                      (l.current.style.userSelect = "none"))
                    : ((l.current.style.pointerEvents = "auto"),
                      (l.current.style.userSelect = "auto"));
              }
            }),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(to, {
                  ref: l,
                  children: [
                    (0, i.jsx)(te, { id: "Solutions" }),
                    (0, i.jsx)(tl, {
                      children: (0, i.jsx)("div", {
                        style: o
                          ? {
                              opacity: 1,
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              flex: 1,
                            }
                          : {
                              opacity: 0,
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              flex: 1,
                            },
                        children: (0, i.jsxs)(ts, {
                          children: [
                            (0, i.jsx)(tc, {
                              ref: s,
                              children: (0, i.jsx)(eO, {
                                firstText: null == r ? void 0 : r.firstText,
                                secondText: null == r ? void 0 : r.secondText,
                                thirdText: null == r ? void 0 : r.thirdText,
                                fourthText: null == r ? void 0 : r.fourthText,
                                descriptionText:
                                  null == r ? void 0 : r.descriptionText,
                                spanText: null == r ? void 0 : r.spanText,
                                button: null == r ? void 0 : r.button,
                              }),
                            }),
                            (0, i.jsx)(e3, {
                              style: u,
                              infoRef: c,
                              cards: null == r ? void 0 : r.info,
                              isContentLoaded: o,
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(ti, { scrollTrigger: n }),
              ],
            })
          );
        };
      function tu() {
        let e = (0, r._)([
          "\n        flex-direction: column;\n        justify-content: inherit;\n        left: ",
          ";\n        top: ",
          ";\n        width: 93%;\n    ",
        ]);
        return (
          (tu = function () {
            return e;
          }),
          e
        );
      }
      function td() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (td = function () {
            return e;
          }),
          e
        );
      }
      function tf() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (tf = function () {
            return e;
          }),
          e
        );
      }
      function tm() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (tm = function () {
            return e;
          }),
          e
        );
      }
      function th() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (th = function () {
            return e;
          }),
          e
        );
      }
      function tg() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (tg = function () {
            return e;
          }),
          e
        );
      }
      function tp() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (tp = function () {
            return e;
          }),
          e
        );
      }
      function tx() {
        let e = (0, r._)([
          "\n        font-size: ",
          ";\n        margin-bottom: ",
          ";\n    ",
        ]);
        return (
          (tx = function () {
            return e;
          }),
          e
        );
      }
      function tv() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (tv = function () {
            return e;
          }),
          e
        );
      }
      function tw() {
        let e = (0, r._)([
          "\n        font-size: ",
          "; \n        line-height: auto;   \n    ",
        ]);
        return (
          (tw = function () {
            return e;
          }),
          e
        );
      }
      function ty() {
        let e = (0, r._)(["\n        width: ", ";    \n    "]);
        return (
          (ty = function () {
            return e;
          }),
          e
        );
      }
      function tC() {
        let e = (0, r._)(["\n        width: ", ";    \n    "]);
        return (
          (tC = function () {
            return e;
          }),
          e
        );
      }
      function tb() {
        let e = (0, r._)([
          "\n        gap: ",
          ";   \n        width: 100%; \n    ",
        ]);
        return (
          (tb = function () {
            return e;
          }),
          e
        );
      }
      let tj = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-b62f67d8-0" })(
          [
            "width:50%;height:100%;position:absolute;top:0;left:0;display:flex;justify-content:center;flex-direction:column;align-items:center;z-index:10;pointer-events:none;user-select:none;",
            "",
          ],
          s.BC.xsm(tu(), (0, s.rm)(16), (0, s.rm)(70))
        ),
        t_ = c.ZP.p.withConfig({ componentId: "sc-b62f67d8-1" })(
          ["font-size:", ";", ";color:", ";", " ", " ", ""],
          (0, s.rm)(62),
          (0, d.rB)(700),
          s.O9.white100,
          s.BC.lg(td(), (0, s.rm)(48)),
          s.BC.md(tf(), (0, s.rm)(36)),
          s.BC.xsm(tm(), (0, s.rm)(28))
        ),
        tB = c.ZP.p.withConfig({ componentId: "sc-b62f67d8-2" })(
          ["font-size:", ";color:", ";line-height:130%;", ";", " ", " ", ""],
          (0, s.rm)(72),
          s.O9.green100,
          (0, d.ul)(400),
          s.BC.lg(th(), (0, s.rm)(56)),
          s.BC.md(tg(), (0, s.rm)(42)),
          s.BC.xsm(tp(), (0, s.rm)(32))
        ),
        tR = c.ZP.p.withConfig({ componentId: "sc-b62f67d8-3" })(
          ["font-size:", ";", ";color:", ";line-height:auto;", " ", " ", ""],
          (0, s.rm)(20),
          (0, d.u2)(400),
          s.O9.white200,
          s.BC.lg(tx(), (0, s.rm)(16), (0, s.rm)(15)),
          s.BC.md(tv(), (0, s.rm)(14)),
          s.BC.xsm(tw(), (0, s.rm)(13))
        ),
        tT = c.ZP.div.withConfig({ componentId: "sc-b62f67d8-4" })(
          [
            "width:",
            ";display:flex;flex-direction:column;gap:",
            ";",
            " ",
            " ",
            " div{display:flex;flex-direction:column;}",
          ],
          (0, s.rm)(731),
          (0, s.rm)(40),
          s.BC.lg(ty(), (0, s.rm)(560)),
          s.BC.md(tC(), (0, s.rm)(420)),
          s.BC.xsm(tb(), (0, s.rm)(10))
        ),
        tz = (e) => {
          let {
              firstText: t,
              secondText: n,
              screenNumber: r,
              descriptionText: o,
            } = e,
            l = (0, a.useRef)(null),
            [s, c] = (0, a.useState)(!1),
            u = (0, a.useRef)(!1);
          return (
            (0, e7.C0)([r, r + 1], (e, t) => {
              if (l.current) {
                let t = (0, e9.xD)(e, 0, 0.1, 0, 1),
                  n = (0, e9.xD)(e, 0.9, 1, 1, 0),
                  r = e <= 0.1 ? t : e >= 0.9 ? n : 1;
                !u.current && e > 0 && e < 1 && ((u.current = !0), c(!0)),
                  ((u.current && 0 === e) || 1 === e) &&
                    ((u.current = !1), c(!1)),
                  (l.current.style.opacity = "".concat(r));
              }
            }),
            (0, i.jsx)(tj, {
              ref: l,
              children: (0, i.jsxs)(tT, {
                children: [
                  (0, i.jsxs)(h.q.div, {
                    children: [
                      (0, i.jsx)(t_, {
                        children: (0, i.jsx)(G, {
                          config: { duration: 1e3, easing: h.Z5.easeInOutQuad },
                          enabled: s,
                          to: t || "-",
                        }),
                      }),
                      (0, i.jsx)(tB, {
                        children: (0, i.jsx)(G, {
                          config: { duration: 1e3, easing: h.Z5.easeInOutQuad },
                          enabled: s,
                          to: n || "-",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(tR, {
                    children: (0, i.jsx)(eV, {
                      delay: 1e3,
                      enabled: s,
                      children: o || "-",
                    }),
                  }),
                ],
              }),
            })
          );
        },
        tE = (e) =>
          e
            ? {
                top: e.getBoundingClientRect().top + window.scrollY,
                bottom: e.getBoundingClientRect().bottom + window.scrollY,
                left: e.getBoundingClientRect().left + window.scrollX,
                right: e.getBoundingClientRect().right + window.scrollX,
                height: e.getBoundingClientRect().height,
                width: e.getBoundingClientRect().width,
              }
            : (console.error("getElementDocumentCoords: no domElement found"),
              {
                top: null,
                bottom: null,
                left: null,
                right: null,
                height: null,
                width: null,
              }),
        tP = (e) => {
          let t = tE(e);
          return null === t.top ||
            null === t.bottom ||
            null === t.left ||
            null === t.right ||
            null === t.height ||
            null === t.width
            ? (console.error("isElementVisible: No domElement found"),
              { partable: { x: !1, y: !1 }, fully: { x: !1, y: !1 } })
            : {
                partable: {
                  x: t.right >= 0 && t.left <= window.innerWidth,
                  y:
                    t.bottom >= window.scrollY &&
                    t.top <= window.scrollY + window.innerHeight,
                },
                fully: {
                  x: t.right <= window.innerWidth && t.left >= 0,
                  y:
                    t.bottom <= window.scrollY + window.innerHeight &&
                    t.top >= window.scrollY,
                },
              };
        },
        tI = c.ZP.div.withConfig({ componentId: "sc-943c30ab-0" })(
          [
            "width:",
            ";height:",
            ';position:relative;user-select:none !important;video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}&::before{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;background-color:red;opacity:0;pointer-events:none;z-index:9999 !important;}.loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);--size-loader:4em;opacity:.5;width:var(--size-loader,1.25em) !important;height:var(--size-loader,1.25em) !important;div{width:var(--size-loader,1.25em) !important;height:var(--size-loader,1.25em) !important;}}',
          ],
          (e) => {
            let { width: t } = e;
            return "number" == typeof t ? "".concat(t, "px") : t;
          },
          (e) => {
            let { height: t } = e;
            return "number" == typeof t ? "".concat(t, "px") : t;
          }
        ),
        tD = (0, a.forwardRef)((e, t) => {
          let {
              src: n,
              width: r,
              strategy: o = "load",
              height: l,
              className: s,
              poster: c,
              rootMargin: u = "1000px 1000px",
              enableLoader: d = !0,
              enableLoad: f = !0,
              ...m
            } = e,
            g = (0, a.useRef)(null),
            [p, x] = (0, a.useState)(!1),
            [v, w] = (0, a.useState)(""),
            [y, C] = (0, a.useState)(""),
            [b, j] = (0, h.YD)({ rootMargin: u });
          return (
            (0, a.useEffect)(() => {
              if ("load" === o) {
                w(n), C(c);
                return;
              }
              if (
                (j && "lazy" === o && !y && c && C(c),
                j && "lazy" === o && !v && f)
              ) {
                w(n),
                  setTimeout(() => {
                    var e;
                    null === (e = g.current) || void 0 === e || e.play();
                  }, 10);
                return;
              }
            }, [o, j, f, n, c, y, v]),
            (0, a.useEffect)(() => {
              if (!v) return;
              let e = performance.now(),
                t = requestAnimationFrame(function n() {
                  if (g.current && performance.now() - e > 200) {
                    let t = tP(g.current).partable;
                    t.y && t.x
                      ? g.current.paused && g.current.play()
                      : g.current.paused || g.current.pause(),
                      (e = performance.now());
                  }
                  t = requestAnimationFrame(n);
                });
              return () => cancelAnimationFrame(t);
            }, [g, v]),
            (0, a.useImperativeHandle)(t, () => ({
              play: () => {
                var e;
                return null === (e = g.current) || void 0 === e
                  ? void 0
                  : e.play();
              },
              pause: () => {
                var e;
                return null === (e = g.current) || void 0 === e
                  ? void 0
                  : e.pause();
              },
            })),
            (0, i.jsxs)(tI, {
              ref: b,
              className: s,
              width: r,
              height: l,
              ...m,
              children: [
                (0, i.jsx)("video", {
                  onLoad: () => x(!0),
                  onCanPlayThrough: () => x(!0),
                  poster: y,
                  ref: g,
                  src: v,
                  playsInline: !0,
                  loop: !0,
                  muted: !0,
                }),
                !p && d ? (0, i.jsx)(i.Fragment, {}) : null,
              ],
            })
          );
        });
      var tL = n(9542);
      let tk = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-29b2efc7-0" })([
          "position:relative;width:100%;",
        ]),
        tA = (e) => {
          let { children: t, enabled: n, delay: r } = e,
            o = (0, f.Z)((e) => e.isContentLoaded),
            l = (0, h.q_)({
              opacity: n && o ? 1 : 0,
              y: n && o ? "0px" : "20px",
              config: { duration: 500, easing: h.Z5.easeInOutQuad },
              delay: r,
            });
          return (0, i.jsx)(tk, { style: l, children: t });
        };
      var tS = n(6633);
      function tZ() {
        let e = (0, r._)([
          "\n            align-items: center;\n            gap: ",
          ";\n        ",
        ]);
        return (
          (tZ = function () {
            return e;
          }),
          e
        );
      }
      function tF() {
        let e = (0, r._)(["\n                font-size: ", ";\n            "]);
        return (
          (tF = function () {
            return e;
          }),
          e
        );
      }
      function tO() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";    \n            ",
        ]);
        return (
          (tO = function () {
            return e;
          }),
          e
        );
      }
      function tN() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";    \n            ",
        ]);
        return (
          (tN = function () {
            return e;
          }),
          e
        );
      }
      function tM() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";  \n                margin-bottom: ",
          ";\n            ",
        ]);
        return (
          (tM = function () {
            return e;
          }),
          e
        );
      }
      function tH() {
        let e = (0, r._)([
          "\n                font-size: ",
          "    \n            ",
        ]);
        return (
          (tH = function () {
            return e;
          }),
          e
        );
      }
      function tV() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";    \n                margin-bottom: ",
          ";\n            ",
        ]);
        return (
          (tV = function () {
            return e;
          }),
          e
        );
      }
      function tU() {
        let e = (0, r._)(["\n            gap: ", ";    \n        "]);
        return (
          (tU = function () {
            return e;
          }),
          e
        );
      }
      function tq() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";    \n            ",
        ]);
        return (
          (tq = function () {
            return e;
          }),
          e
        );
      }
      function tG() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";    \n            ",
        ]);
        return (
          (tG = function () {
            return e;
          }),
          e
        );
      }
      function tW() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";\n                text-align: center;    \n            ",
        ]);
        return (
          (tW = function () {
            return e;
          }),
          e
        );
      }
      function tX() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        left: ",
          ";    \n    ",
        ]);
        return (
          (tX = function () {
            return e;
          }),
          e
        );
      }
      function tY() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        left: ",
          ";    \n    ",
        ]);
        return (
          (tY = function () {
            return e;
          }),
          e
        );
      }
      function tQ() {
        let e = (0, r._)([
          "\n        width: 95%;\n        left: 50%;\n        transform: translate(-50%, 50%);\n    ",
        ]);
        return (
          (tQ = function () {
            return e;
          }),
          e
        );
      }
      function tK() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        right: ",
          ";    \n    ",
        ]);
        return (
          (tK = function () {
            return e;
          }),
          e
        );
      }
      function t$() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        right: ",
          ";    \n    ",
        ]);
        return (
          (t$ = function () {
            return e;
          }),
          e
        );
      }
      function tJ() {
        let e = (0, r._)([
          "\n        width: 95%;\n        right: 50%;\n        transform: translate(50%, 100%);\n    ",
        ]);
        return (
          (tJ = function () {
            return e;
          }),
          e
        );
      }
      let t0 = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-7f0736f1-0" })(
          [
            "position:absolute;pointer-events:none;user-select:none;.wrapper{display:flex;flex-direction:column;gap:",
            ";",
            "}.title{display:flex;align-items:center;gap:",
            ";>:first-child{",
            ";font-size:",
            ";color:",
            ";",
            " ",
            " ",
            "}>:last-child{",
            ";font-size:",
            ";color:",
            ";margin-bottom:",
            ";",
            " ",
            " ",
            "}}.description{display:flex;flex-direction:column;gap:",
            ";",
            " p{font-size:",
            ";",
            ";color:",
            ";line-height:130%;",
            " ",
            " ",
            "}span{color:",
            ";}}",
          ],
          (0, s.rm)(16),
          s.BC.xsm(tZ(), (0, s.rm)(8)),
          (0, s.rm)(12),
          (0, d.rB)(700),
          (0, s.rm)(50),
          tS.O.white100,
          s.BC.lg(tF(), (0, s.rm)(40)),
          s.BC.md(tO(), (0, s.rm)(30)),
          s.BC.xsm(tN(), (0, s.rm)(20)),
          (0, d.ul)(400),
          (0, s.rm)(60),
          tS.O.green100,
          (0, s.rm)(-12),
          s.BC.lg(tM(), (0, s.rm)(48), (0, s.rm)(-8)),
          s.BC.md(tH(), (0, s.rm)(36)),
          s.BC.xsm(tV(), (0, s.rm)(24), (0, s.rm)(-5)),
          (0, s.rm)(24),
          s.BC.xsm(tU(), (0, s.rm)(6)),
          (0, s.rm)(18),
          (0, d.u2)(400),
          tS.O.grey100,
          s.BC.lg(tq(), (0, s.rm)(17)),
          s.BC.md(tG(), (0, s.rm)(15)),
          s.BC.xsm(tW(), (0, s.rm)(14)),
          tS.O.white100
        ),
        t1 = (0, c.ZP)(t0).withConfig({ componentId: "sc-7f0736f1-1" })(
          [
            "top:50%;left:",
            ";transform:translate(25%,-50%);width:",
            ";",
            " ",
            " ",
            "",
          ],
          (0, s.rm)(128),
          (0, s.rm)(836),
          s.BC.lg(tX(), (0, s.rm)(700), (0, s.rm)(100)),
          s.BC.md(tY(), (0, s.rm)(490), (0, s.rm)(40)),
          s.BC.xsm(tQ())
        ),
        t2 = (0, c.ZP)(t0).withConfig({ componentId: "sc-7f0736f1-2" })(
          [
            "top:50%;right:",
            ";transform:translate(-25%,-50%);width:",
            ";",
            " ",
            " ",
            "",
          ],
          (0, s.rm)(180),
          (0, s.rm)(761),
          s.BC.lg(tK(), (0, s.rm)(660), (0, s.rm)(100)),
          s.BC.md(t$(), (0, s.rm)(440), (0, s.rm)(100)),
          s.BC.xsm(tJ())
        ),
        t5 = (e) => {
          let { descriptionRef: t, wrapperRef: n, isLeft: r } = e,
            o = (0, f.Z)((e) => e.activeIndex);
          return (0, i.jsx)(i.Fragment, {
            children: r
              ? (0, i.jsx)(t1, {
                  ref: t,
                  children: (0, i.jsxs)("div", {
                    className: "wrapper",
                    ref: n,
                    children: [
                      (0, i.jsxs)("div", {
                        className: "title",
                        children: [
                          (0, i.jsx)(G, {
                            to: "Synthetic",
                            immediateOut: !1,
                            enabled: 1 === o,
                          }),
                          (0, i.jsx)(G, {
                            to: "Dollar Debt Token",
                            immediateOut: !1,
                            enabled: 1 === o,
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "description",
                        children: [
                          (0, i.jsx)(tA, {
                            enabled: 1 === o,
                            delay: 0,
                            children: (0, i.jsx)("p", {
                              children:
                                "XY is the core liquidity driver powering the Ramda AI Finance ecosystem. Designed as an agile unit of account, XY unlocks immediate, on-demand liquidity for every interaction within the protocol—from leveraged positions to complex strategies using native flashminting",
                            }),
                          }),
                          (0, i.jsx)(tA, {
                            enabled: 1 === o,
                            delay: 200,
                            children: (0, i.jsx)("p", {
                              children:
                                "Mechanisms such as XY minting, liquidity staking, and asset bridging enable XY to provide a frictionless, cross-chain liquidity landscape, seamlessly integrating with both native and partner protocols.",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, i.jsx)(t2, {
                  ref: t,
                  children: (0, i.jsxs)("div", {
                    className: "wrapper",
                    ref: n,
                    children: [
                      (0, i.jsxs)("div", {
                        className: "title",
                        children: [
                          (0, i.jsx)(G, {
                            to: "Protocol",
                            immediateOut: !1,
                            enabled: 2 === o,
                          }),
                          (0, i.jsx)(G, {
                            to: "Revenue Token",
                            immediateOut: !1,
                            enabled: 2 === o,
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "description",
                        children: [
                          (0, i.jsx)(tA, {
                            enabled: 2 === o,
                            delay: 0,
                            children: (0, i.jsxs)("p", {
                              children: [
                                "TREN is a ",
                                (0, i.jsx)("span", {
                                  children: "fixed-supply governance token",
                                }),
                                " architected on the principles of the ve(3,3) model, optimizing value capture and distribution.",
                              ],
                            }),
                          }),
                          (0, i.jsx)(tA, {
                            enabled: 2 === o,
                            delay: 200,
                            children: (0, i.jsxs)("p", {
                              children: [
                                "Protocol fees are ",
                                (0, i.jsx)("span", {
                                  children: "90% allocated to TREN buybacks,",
                                }),
                                " creating a continuous feedback loop of value accrual. veTREN holders, through lock-in mechanisms, govern the allocation of these rewards, strategically directing emissions and reinforcing ecosystem alignment for sustainable growth.",
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
          });
        };
      var t4 = n(8270);
      let t6 = function (e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = (0, a.useRef)(!1),
          i = (0, a.useRef)(0),
          o = (0, a.useRef)(!0);
        (0, a.useEffect)(() => {
          let t = new IntersectionObserver(
            (e) => {
              let [t] = e;
              r.current === t.isIntersecting ||
                t.isIntersecting ||
                ((i.current = 0), (o.current = !0)),
                (r.current = t.isIntersecting);
            },
            { threshold: 0 }
          );
          return (
            e.current &&
              (t.observe(e.current), (i.current = 0), (o.current = !0)),
            () => t.disconnect()
          );
        }, [e]),
          (0, t4.y)((e) => {
            (r.current || o.current) &&
              (t(e),
              !r.current && (i.current++, i.current >= 10 && (o.current = !1)));
          }, n);
      };
      function t3() {
        let e = (0, r._)([
          "\n        margin-top: ",
          ";\n        font-size: ",
          ";    \n    ",
        ]);
        return (
          (t3 = function () {
            return e;
          }),
          e
        );
      }
      function t7() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        height: ",
          ";\n    ",
        ]);
        return (
          (t7 = function () {
            return e;
          }),
          e
        );
      }
      function t9() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        height: ",
          ";\n    ",
        ]);
        return (
          (t9 = function () {
            return e;
          }),
          e
        );
      }
      let t8 = c.ZP.div.withConfig({ componentId: "sc-534c608e-0" })(
          [
            "width:100%;height:100%;display:flex;justify-content:center;align-items:center;gap:",
            ";position:absolute;top:0;left:0;user-select:none;display:flex;flex-direction:column-reverse;gap:",
            ";justify-content:center;align-items:center;mix-blend-mode:screen;",
          ],
          (0, s.rm)(32),
          (0, s.rm)(0)
        ),
        ne = c.ZP.p.withConfig({ componentId: "sc-534c608e-1" })(
          [
            "font-size:",
            ";",
            " color:",
            ";margin-top:",
            ";position:relative;z-index:100;",
            "",
          ],
          (0, s.rm)(32),
          (0, d.rB)(700),
          s.O9.white200,
          (0, s.rm)(0),
          s.BC.xsm(t3(), (0, s.rm)(0), (0, s.rm)(22))
        ),
        nt = c.ZP.div.withConfig({ componentId: "sc-534c608e-2" })(
          ["width:", ";height:", ";", ""],
          (0, s.rm)(500),
          (0, s.rm)(500),
          s.BC.xsm(t7(), (0, s.rm)(200), (0, s.rm)(200))
        ),
        nn = c.ZP.div.withConfig({ componentId: "sc-534c608e-3" })(
          ["width:", ";height:", ";", ""],
          (0, s.rm)(500),
          (0, s.rm)(500),
          s.BC.xsm(t9(), (0, s.rm)(200), (0, s.rm)(200))
        ),
        nr = c.ZP.div.withConfig({ componentId: "sc-534c608e-4" })([
          "width:100%;height:100%;div{width:100%;height:100%;}",
        ]);
      c.ZP.div.withConfig({ componentId: "sc-534c608e-5" })([
        "display:flex;align-items:center;",
      ]);
      let ni = c.ZP.div.withConfig({ componentId: "sc-534c608e-6" })([
          "display:flex;align-items:center;",
        ]),
        no = c.ZP.div.withConfig({ componentId: "sc-534c608e-7" })([
          "display:flex;flex-direction:column;align-items:center;justify-content:center;mix-blend-mode:screen;",
        ]),
        nl = (e) => {
          var t, n;
          let { containerRef: r } = e,
            o = (0, a.useRef)(null),
            l = (0, a.useRef)(null),
            s = (0, a.useRef)(null),
            c = (0, a.useRef)(null),
            u = (0, a.useRef)(null),
            d = (0, a.useRef)(null),
            m = (0, a.useRef)(0),
            h = (0, a.useRef)(0),
            g = (0, a.useRef)(0),
            p = (0, a.useRef)(null),
            x = (0, a.useRef)(null),
            v = (0, a.useRef)(null),
            w = (0, a.useRef)(null),
            y = (0, K.Lm)(),
            C = (0, a.useRef)(0),
            b = (0, f.Z)((e) => e.setActiveIndex),
            j = (0, a.useRef)(null),
            _ = (0, a.useRef)(null),
            B = (0, a.useRef)(null),
            R = {
              xlB: { width: 1640, value: 16 },
              xls: { width: 1540, value: 13 },
              xl: { width: 1440, value: 11.5 },
              xlg: { width: 1200, value: 10.6 },
              lg: { width: 1024, value: 9 },
              md: { width: 768, value: 7 },
              sm: { width: 576, value: 6 },
              xs: { width: 0, value: 12 },
            };
          (null !==
            (n =
              null ===
                (t = Object.entries(R)
                  .sort((e, t) => t[1].width - e[1].width)
                  .find((e) => {
                    let [t, { width: n }] = e;
                    return y > n;
                  })) || void 0 === t
                ? void 0
                : t[1].value) &&
            void 0 !== n) ||
            R.xs.value;
          let T = (0, a.useCallback)((e) => {
            p.current &&
              x.current &&
              !p.current.contains(e.target) &&
              !x.current.contains(e.target) &&
              ((C.current = 0), b(0));
          }, []);
          return (
            (0, e7.C0)([4, 5], (e, t) => {
              let n = (0, e9.xD)(e, 0, 1, 0, 1);
              t < 4.75
                ? (0 != C.current && ((C.current = 0), b(0)),
                  (u.current.style.opacity = (0, tL.t7)(
                    u.current.style.opacity,
                    0,
                    0.2
                  )),
                  (d.current.style.opacity = (0, tL.t7)(
                    d.current.style.opacity,
                    0,
                    0.2
                  )))
                : t > 4.6 &&
                  ((u.current.style.opacity = (0, tL.t7)(
                    u.current.style.opacity,
                    1,
                    0.2
                  )),
                  (d.current.style.opacity = (0, tL.t7)(
                    d.current.style.opacity,
                    1,
                    0.2
                  ))),
                (m.current = n);
            }),
            t6(
              r,
              (e) => {
                e7.V9.current < 4
                  ? (j.current.style.display = "none")
                  : (j.current.style.display = "flex"),
                  1 === C.current
                    ? ((s.current.style.opacity = (0, tL.t7)(
                        s.current.style.opacity,
                        1,
                        0.2
                      )),
                      (c.current.style.opacity = (0, tL.t7)(
                        c.current.style.opacity,
                        0,
                        0.2
                      )),
                      (h.current = (0, tL.t7)(h.current, 1, 0.2)),
                      (g.current = (0, tL.t7)(g.current, 0, 0.2)),
                      _.current &&
                        B.current &&
                        ((_.current.style.opacity = (0, tL.t7)(
                          _.current.style.opacity,
                          0,
                          0.2
                        )),
                        (B.current.style.opacity = (0, tL.t7)(
                          B.current.style.opacity,
                          1,
                          0.2
                        ))))
                    : 2 === C.current
                    ? ((s.current.style.opacity = (0, tL.t7)(
                        s.current.style.opacity,
                        0,
                        0.2
                      )),
                      (c.current.style.opacity = (0, tL.t7)(
                        c.current.style.opacity,
                        1,
                        0.2
                      )),
                      (h.current = (0, tL.t7)(h.current, 0, 0.2)),
                      (g.current = (0, tL.t7)(g.current, 1, 0.2)),
                      _.current &&
                        B.current &&
                        ((_.current.style.opacity = (0, tL.t7)(
                          _.current.style.opacity,
                          1,
                          0.2
                        )),
                        (B.current.style.opacity = (0, tL.t7)(
                          B.current.style.opacity,
                          0,
                          0.2
                        ))))
                    : 0 === C.current &&
                      ((s.current.style.opacity = (0, tL.t7)(
                        s.current.style.opacity,
                        0,
                        0.2
                      )),
                      (c.current.style.opacity = (0, tL.t7)(
                        c.current.style.opacity,
                        0,
                        0.2
                      )),
                      (h.current = (0, tL.t7)(h.current, 1, 0.2)),
                      (g.current = (0, tL.t7)(g.current, 1, 0.2)),
                      _.current &&
                        B.current &&
                        ((_.current.style.opacity = (0, tL.t7)(
                          _.current.style.opacity,
                          1,
                          0.2
                        )),
                        (B.current.style.opacity = (0, tL.t7)(
                          B.current.style.opacity,
                          1,
                          0.2
                        )))),
                  (_.current.style.opacity = m.current * h.current),
                  (B.current.style.opacity = m.current * g.current),
                  y > 576
                    ? p.current &&
                      x.current &&
                      s &&
                      c &&
                      ((_.current.style.transform = "translateX(".concat(
                        -((185 * m.current - 170 * g.current) / 12),
                        "%)"
                      )),
                      (B.current.style.transform = "translateX(".concat(
                        (200 * m.current - 170 * h.current) / 12,
                        "%)"
                      )),
                      (s.current.style.transform = "translate(90%, -60%)"),
                      (c.current.style.transform = "translate(-90%, -60%)"))
                    : p.current &&
                      x.current &&
                      s &&
                      c &&
                      ((_.current.style.transform = "translate("
                        .concat(
                          -20 * m.current +
                            35 +
                            (1 - g.current) * (70 * m.current - 40),
                          "%, "
                        )
                        .concat(-((1 - g.current) * m.current * 80), "%)")),
                      (B.current.style.transform = "translate("
                        .concat(
                          20 * m.current -
                            35 -
                            (1 - h.current) * (70 * m.current - 40),
                          "%, "
                        )
                        .concat(-((1 - h.current) * m.current * 80), "%)")),
                      (s.current.style.transform = "translate(-50%, ".concat(
                        10 * g.current + 0,
                        "%)"
                      )),
                      (c.current.style.transform = "translate(50%, ".concat(
                        10 * h.current + 10,
                        "%)"
                      )));
              },
              { framerate: 10 }
            ),
            (0, i.jsxs)(t8, {
              ref: j,
              onClick: T,
              children: [
                y &&
                  (0, i.jsxs)(ni, {
                    children: [
                      (0, i.jsxs)(no, {
                        ref: _,
                        id: "firstVideoWrapper",
                        onClick: (e) => {
                          e.stopPropagation(), (C.current = 1), b(1);
                        },
                        children: [
                          (0, i.jsx)(nt, {
                            ref: x,
                            children: (0, i.jsx)(nr, {
                              ref: w,
                              children: (0, i.jsx)(tD, {
                                strategy: "lazy",
                                src: "/draftBg.mp4",
                                poster: "/xVideoPoster.jpg",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "textWrapper",
                            children: (0, i.jsx)(ne, {
                              ref: l,
                              children: "XY",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(no, {
                        ref: B,
                        id: "secondVideoWrapper",
                        onClick: (e) => {
                          e.stopPropagation(), (C.current = 2), b(2);
                        },
                        children: [
                          (0, i.jsx)(nn, {
                            ref: p,
                            children: (0, i.jsx)(nr, {
                              ref: v,
                              children: (0, i.jsx)(tD, {
                                strategy: "lazy",
                                src: "/liquidity/tren-logo-video.mp4",
                                poster: "/liquidity/trenPoster.webp",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "textWrapper",
                            children: (0, i.jsx)(ne, {
                              ref: o,
                              children: "Ramda AI",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, i.jsx)(t5, {
                  isLeft: !0,
                  wrapperRef: u,
                  descriptionRef: s,
                }),
                (0, i.jsx)(t5, {
                  isLeft: !1,
                  wrapperRef: d,
                  descriptionRef: c,
                }),
              ],
            })
          );
        },
        ns = (e) => {
          let { name: t, ...n } = e;
          return "loans" === t
            ? (0, i.jsxs)("svg", {
                width: "82",
                height: "82",
                viewBox: "0 0 82 82",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, i.jsx)("path", {
                    d: "M80.8436 1.21484H1V81.0584H80.8436V1.21484Z",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M26.625 14.2148H80.8471V67.2453H26.625V14.2148Z",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M46.288 33.282V14.2148H26.625V33.282H46.288Z",
                    fill: "#23FAAD",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                ],
              })
            : "modules" === t
            ? (0, i.jsxs)("svg", {
                width: "80",
                height: "80",
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, i.jsx)("rect", {
                    x: "0.558824",
                    y: "0.617417",
                    width: "78.7259",
                    height: "78.7259",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M0.59375 15.3594H54.22V60.6438H79.2456",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M0.59375 22.1055H47.0698V60.8355H79.2456",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M30.3906 22.1055V60.8355H78.6543",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M23.8359 22.1055V68.5816H79.2497",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("rect", {
                    x: "31",
                    y: "22.2148",
                    width: "16",
                    height: "38",
                    fill: "#23FAAD",
                  }),
                ],
              })
            : "assets" === t
            ? (0, i.jsxs)("svg", {
                width: "78",
                height: "78",
                viewBox: "0 0 78 78",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, i.jsx)("path", {
                    d: "M10.7422 37.4481V11.2422H36.3525",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M3 51.145V2.90234H50.6472",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M3 2.90234L29.2059 29.1082",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M47.6719 47.5703L77.4514 77.3497",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M77.4482 10.0508V77.3523H10.7422V56.5067L57.1982 10.0508H77.4482Z",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M10.7422 77.3507L77.4482 10.6448",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M11.1891 55.9249L57.506 9.42779L77.006 10.928L11.1865 76.9258L11.1891 55.9249Z",
                    fill: "#23FAAD",
                  }),
                ],
              })
            : "leverage" === t
            ? (0, i.jsxs)("svg", {
                width: "84",
                height: "75",
                viewBox: "0 0 84 75",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, i.jsx)("path", {
                    d: "M1 1.94824H29.3387V73.0441H1V1.94824Z",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M83 1.35059H55.8672V73.6414H83V1.35059Z",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M69.1315 13.2998H15.4688V65.8749H69.1315V13.2998Z",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M29.3438 25.249H55.8736",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M29.0021 43.2604L55.5387 43.2626",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("path", {
                    d: "M29.3438 54.5225H55.8736",
                    stroke: "#23FAAD",
                    strokeWidth: "1.11765",
                  }),
                  (0, i.jsx)("rect", {
                    x: "29",
                    y: "13.6631",
                    width: "27",
                    height: "12",
                    fill: "#23FAAD",
                  }),
                  (0, i.jsx)("rect", {
                    x: "29",
                    y: "43.6631",
                    width: "27",
                    height: "11",
                    fill: "#23FAAD",
                  }),
                ],
              })
            : void 0;
        };
      var nc = n(1952);
      function na() {
        let e = (0, r._)(["\n        width: 100%;    \n    "]);
        return (
          (na = function () {
            return e;
          }),
          e
        );
      }
      function nu() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (nu = function () {
            return e;
          }),
          e
        );
      }
      function nd() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (nd = function () {
            return e;
          }),
          e
        );
      }
      function nf() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (nf = function () {
            return e;
          }),
          e
        );
      }
      function nm() {
        let e = (0, r._)([
          "\n            font-size: ",
          ";\n            line-height: 130%;    \n        ",
        ]);
        return (
          (nm = function () {
            return e;
          }),
          e
        );
      }
      function nh() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        height: ",
          ";\n    ",
        ]);
        return (
          (nh = function () {
            return e;
          }),
          e
        );
      }
      function ng() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        height: ",
          ";    \n    ",
        ]);
        return (
          (ng = function () {
            return e;
          }),
          e
        );
      }
      let np = c.ZP.div.withConfig({ componentId: "sc-e52e5f75-0" })(
          [
            "display:flex;flex-direction:column;gap:",
            ";width:",
            ";position:relative;",
            " .title{font-size:",
            ";color:",
            ";",
            ";line-height:130%;",
            " ",
            "}p{font-size:",
            ";color:",
            ";",
            ";line-height:150%;",
            " ",
            "}",
          ],
          (0, s.rm)(16),
          (0, s.rm)(510),
          s.BC.xsm(na()),
          (0, s.rm)(42),
          s.O9.white100,
          (0, d.rB)(700),
          s.BC.lg(nu(), (0, s.rm)(36)),
          s.BC.xsm(nd(), (0, s.rm)(20)),
          (0, s.rm)(18),
          s.O9.grey100,
          (0, d.u2)(400),
          s.BC.lg(nf(), (0, s.rm)(16)),
          s.BC.xsm(nm(), (0, s.rm)(14))
        ),
        nx = c.ZP.div.withConfig({ componentId: "sc-e52e5f75-1" })(
          ["position:relative;width:", ";height:", ";", " ", ""],
          (0, s.rm)(80),
          (0, s.rm)(80),
          s.BC.lg(nh(), (0, s.rm)(65), (0, s.rm)(65)),
          s.BC.xsm(ng(), (0, s.rm)(50), (0, s.rm)(50))
        ),
        nv = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-e52e5f75-2" })([
          "position:absolute;transform-origin:center center;top:50%;left:50%;width:100%;height:100%;svg{width:100%;height:100%;transform-origin:center;}",
        ]),
        nw = c.ZP.div.withConfig({ componentId: "sc-e52e5f75-3" })([
          "position:absolute;top:0;left:0;width:100%;height:150%;",
        ]),
        ny = c.ZP.div.withConfig({ componentId: "sc-e52e5f75-4" })(
          ["position:absolute;top:", ";left:0;width:100%;height:150%;"],
          (0, s.rm)(50)
        ),
        nC = (e) => {
          let { icon: t, title: n, description: r } = e,
            o = (0, a.useRef)(null),
            l = (0, a.useRef)(null),
            [s, c] = (0, m.YD)(),
            [u] = (0, nc.s)({
              trigger: o,
              start: "top bottom",
              end: "center center",
              from: { y: "80px", opacity: "0" },
              to: { y: "0px", opacity: "1" },
              scrub: !0,
            }),
            [d] = (0, nc.s)({
              trigger: l,
              start: "top bottom",
              end: "center center",
              from: { y: "100px", opacity: "0" },
              to: { y: "0px", opacity: "1" },
              scrub: !0,
            }),
            f = (0, h.q_)({
              transform: c
                ? "translate(-50%, -50%) rotate(0deg)"
                : " translate(-50%, -50%) rotate(40deg)",
              width: c ? "100%" : "0%",
              height: c ? "100%" : "0%",
              config: { duration: 500, easing: h.Z5.easeInOutQuad },
            });
          return (0, i.jsxs)(np, {
            children: [
              (0, i.jsx)(nw, { ref: o }),
              (0, i.jsx)(ny, { ref: l }),
              (0, i.jsx)(nx, {
                ref: s,
                children: (0, i.jsx)(nv, {
                  style: f,
                  children: (0, i.jsx)(ns, { name: t }),
                }),
              }),
              (0, i.jsx)(h.q.span, {
                style: u,
                className: "title",
                children: n,
              }),
              (0, i.jsx)(h.q.p, { style: d, children: r }),
            ],
          });
        };
      var nb = n(8871);
      function nj() {
        let e = (0, r._)([
          "\n        gap: ",
          ";\n        padding-bottom: 0;\n        margin-top: 0;    \n    ",
        ]);
        return (
          (nj = function () {
            return e;
          }),
          e
        );
      }
      let n_ = c.ZP.div.withConfig({ componentId: "sc-61ff074d-0" })(
          [
            "display:flex;flex-direction:column;gap:",
            ";",
            " position:relative;z-index:100;",
            " ",
            "",
          ],
          (0, s.rm)(180),
          (0, nb.I4)(45),
          (0, nb.Oy)(45),
          s.BC.md(nj(), (0, s.rm)(120))
        ),
        nB = [
          {
            icon: "loans",
            title: "Instant loans",
            description:
              "Instant loans for users by putting up assets as collateral, giving users more market exposure ",
          },
          {
            icon: "modules",
            title: "Isolated modules",
            description:
              "Isolated modules contain the risk to individual pools. If there is an issue with one asset it only effects that asset and not the protocol ",
          },
          {
            icon: "assets",
            title: "100+ assets",
            description:
              "Plans to list 100+ assets, giving utility tokens that were thought of as illiquid ",
          },
          {
            icon: "leverage",
            title: "Recursive leverage",
            description:
              "Recursive leverage engine allows users to take out positions up to 30x ",
          },
        ],
        nR = (e) => {
          let { benefits: t } = e;
          return (0, i.jsx)(n_, {
            children:
              null == t
                ? void 0
                : t.map((e, t) =>
                    (0, i.jsx)(
                      nC,
                      {
                        icon: nB[t].icon,
                        title: e.title,
                        description: e.description,
                      },
                      t
                    )
                  ),
          });
        };
      function nT() {
        let e = (0, r._)([
          "\n        flex-direction: column;\n        height: 100%;\n        padding: ",
          " ",
          ";\n        margin-top: 0;\n        gap: ",
          ";\n    ",
        ]);
        return (
          (nT = function () {
            return e;
          }),
          e
        );
      }
      function nz() {
        let e = (0, r._)([
          "\n        padding: ",
          " ",
          ";\n        margin-top: 0;\n        gap: ",
          ";   \n    ",
        ]);
        return (
          (nz = function () {
            return e;
          }),
          e
        );
      }
      function nE() {
        let e = (0, r._)([
          "\n        font-size: ",
          ";\n        width: ",
          ";\n    ",
        ]);
        return (
          (nE = function () {
            return e;
          }),
          e
        );
      }
      function nP() {
        let e = (0, r._)([
          "\n        position: relative;\n        top: 0;\n    ",
        ]);
        return (
          (nP = function () {
            return e;
          }),
          e
        );
      }
      function nI() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        font-size: ",
          ";\n        transform: translate(0, 0);\n    ",
        ]);
        return (
          (nI = function () {
            return e;
          }),
          e
        );
      }
      function nD() {
        let e = (0, r._)(["\n            height: ", ";    \n        "]);
        return (
          (nD = function () {
            return e;
          }),
          e
        );
      }
      function nL() {
        let e = (0, r._)([
          "\n        position: relative;\n        height: auto;    \n    ",
        ]);
        return (
          (nL = function () {
            return e;
          }),
          e
        );
      }
      let nk = c.ZP.div.withConfig({ componentId: "sc-e7c969e9-0" })(
          [
            "display:flex;width:100%;gap:",
            ";padding:",
            ";position:relative;",
            " ",
            " ",
            "",
          ],
          (0, s.rm)(320),
          (0, s.rm)(100),
          (0, nb.I4)(-50),
          s.BC.md(nT(), (0, s.rm)(80), (0, s.rm)(40), (0, s.rm)(40)),
          s.BC.xsm(nz(), (0, s.rm)(40), (0, s.rm)(16), (0, s.rm)(40))
        ),
        nA = c.ZP.p.withConfig({ componentId: "sc-e7c969e9-1" })(
          [
            "font-size:",
            ";",
            " color:#B7BCBC;width:",
            ";position:absolute;top:50%;left:0;transform:translate(0,-50%);background:linear-gradient(180deg,#b7bcbc 0%,#ffffff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;",
            " ",
            " ",
            " >:first-child{height:",
            ";",
            "}",
          ],
          (0, s.rm)(72),
          (0, d.rB)(700),
          (0, s.rm)(633),
          s.BC.lg(nE(), (0, s.rm)(56), (0, s.rm)(460)),
          s.BC.md(nP()),
          s.BC.xsm(nI(), (0, s.rm)(288), (0, s.rm)(28)),
          (0, s.rm)(150),
          s.BC.xsm(nD(), (0, s.rm)(50))
        ),
        nS = c.ZP.div.withConfig({ componentId: "sc-e7c969e9-2" })(
          ["position:sticky;top:0;left:0;", ";width:100%;z-index:100;", ""],
          (0, nb.NN)(100),
          s.BC.md(nL())
        ),
        nZ = (e) => {
          let { data: t } = e,
            n = (0, f.Z)((e) => e.isContentLoaded),
            r = (0, a.useRef)(null);
          return (0, i.jsxs)(nk, {
            ref: r,
            children: [
              (0, i.jsx)(te, { id: "Benefits" }),
              (0, i.jsx)(nS, {
                children: (0, i.jsx)(nA, {
                  children: (0, i.jsx)(G, {
                    to: (null == t ? void 0 : t.title)
                      ? null == t
                        ? void 0
                        : t.title
                      : "-",
                    enabled: n,
                  }),
                }),
              }),
              (0, i.jsx)(nR, { benefits: null == t ? void 0 : t.sections }),
            ],
          });
        },
        nF = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-32305009-0" })([
          "position:relative;width:100%;height:100%;",
        ]),
        nO = (e) => {
          let { children: t } = e,
            [n, r] = (0, h.YD)(),
            o = (0, f.Z)((e) => e.isContentLoaded),
            l = (0, h.q_)({
              opacity: r && o ? 1 : 0,
              y: r && o ? "0px" : "70px",
              config: { duration: 600, easing: h.Z5.easeInOutQuad },
            });
          return (0, i.jsx)(nF, { ref: n, style: l, children: t });
        };
      var nN = n(5675),
        nM = n.n(nN);
      function nH() {
        let e = (0, r._)([
          "\n        margin: 0;\n        padding: ",
          " ",
          ";  \n        gap: ",
          ";  \n    ",
        ]);
        return (
          (nH = function () {
            return e;
          }),
          e
        );
      }
      function nV() {
        let e = (0, r._)([
          "\n        width: 100%;\n        gap: ",
          ";    \n    ",
        ]);
        return (
          (nV = function () {
            return e;
          }),
          e
        );
      }
      function nU() {
        let e = (0, r._)([
          "\n            font-size: ",
          " !important;\n        ",
        ]);
        return (
          (nU = function () {
            return e;
          }),
          e
        );
      }
      function nq() {
        let e = (0, r._)([
          "\n            font-size: ",
          " !important;    \n        ",
        ]);
        return (
          (nq = function () {
            return e;
          }),
          e
        );
      }
      function nG() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (nG = function () {
            return e;
          }),
          e
        );
      }
      function nW() {
        let e = (0, r._)(["\n            width: ", ";\n        "]);
        return (
          (nW = function () {
            return e;
          }),
          e
        );
      }
      function nX() {
        let e = (0, r._)([
          "\n            font-size: ",
          ";\n            line-height: 120%;    \n            width: 100%;\n        ",
        ]);
        return (
          (nX = function () {
            return e;
          }),
          e
        );
      }
      function nY() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        row-gap: ",
          ";\n    ",
        ]);
        return (
          (nY = function () {
            return e;
          }),
          e
        );
      }
      function nQ() {
        let e = (0, r._)(["\n        width: 60%;\n    "]);
        return (
          (nQ = function () {
            return e;
          }),
          e
        );
      }
      function nK() {
        let e = (0, r._)([
          "\n        width: 100%;\n        row-gap: ",
          ";\n        column-gap: ",
          ";\n    ",
        ]);
        return (
          (nK = function () {
            return e;
          }),
          e
        );
      }
      function n$() {
        let e = (0, r._)([
          "\n            width: ",
          " !important;\n            height: ",
          " !important;\n        ",
        ]);
        return (
          (n$ = function () {
            return e;
          }),
          e
        );
      }
      function nJ() {
        let e = (0, r._)([
          "\n            width: ",
          " !important;\n            height: ",
          " !important;\n        ",
        ]);
        return (
          (nJ = function () {
            return e;
          }),
          e
        );
      }
      function n0() {
        let e = (0, r._)(["\n        margin-top: ", ";\n    "]);
        return (
          (n0 = function () {
            return e;
          }),
          e
        );
      }
      function n1() {
        let e = (0, r._)(["\n        margin-top: ", ";\n    "]);
        return (
          (n1 = function () {
            return e;
          }),
          e
        );
      }
      let n2 = c.ZP.div.withConfig({ componentId: "sc-4eabc0fc-0" })(
          [
            "display:flex;flex-direction:column;justify-content:center;align-items:center;padding:",
            " ",
            ";gap:",
            ";width:100%;margin:",
            " 0;",
            "",
          ],
          (0, s.rm)(100),
          (0, s.rm)(0),
          (0, s.rm)(72),
          (0, s.rm)(156),
          s.BC.xsm(nH(), (0, s.rm)(40), (0, s.rm)(16), (0, s.rm)(24))
        ),
        n5 = c.ZP.div.withConfig({ componentId: "sc-4eabc0fc-1" })(
          [
            "display:flex;flex-direction:column;align-items:center;gap:",
            ";width:",
            ";",
            " p{font-size:",
            " !important;",
            " color:",
            " !important;",
            " ",
            "}span{font-size:",
            ";",
            ";color:",
            ";text-align:center;display:flex;justify-content:center;",
            " ",
            " ",
            "}",
          ],
          (0, s.rm)(24),
          (0, s.rm)(991),
          s.BC.md(nV(), (0, s.rm)(16)),
          (0, s.rm)(56),
          (0, d.rB)(700),
          s.O9.white100,
          s.BC.lg(nU(), (0, s.rm)(48)),
          s.BC.xsm(nq(), (0, s.rm)(28)),
          (0, s.rm)(20),
          (0, d.u2)(400),
          s.O9.grey100,
          s.BC.lg(nG(), (0, s.rm)(18)),
          s.BC.md(nW(), (0, s.rm)(870)),
          s.BC.xsm(nX(), (0, s.rm)(14))
        ),
        n4 = c.ZP.div.withConfig({ componentId: "sc-4eabc0fc-2" })(
          [
            "display:flex;align-items:center;flex-wrap:wrap;width:",
            ";justify-content:space-around;row-gap:",
            ";column-gap:",
            ";",
            " ",
            " ",
            " .imageContainer{width:",
            ";height:",
            ";position:relative;",
            " img{width:80%;height:80%;object-fit:contain;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}div{width:100%;height:100%;}}.first{height:",
            ";width:",
            ";",
            " img{width:100%;height:100%;}}.second{img{width:100%;height:100%;}}.third{img{width:100%;height:100%;}}.sixth{height:",
            ";}.seventh{height:",
            ";img{width:100%;height:100%;}}.eighth{height:",
            ";}.ninth{height:",
            ";}",
          ],
          (0, s.rm)(1080),
          (0, s.rm)(80),
          (0, s.rm)(70),
          s.BC.lg(nY(), (0, s.rm)(1080), (0, s.rm)(40)),
          s.BC.md(nQ()),
          s.BC.xsm(nK(), (0, s.rm)(20), (0, s.rm)(20)),
          (0, s.rm)(190),
          (0, s.rm)(120),
          s.BC.xsm(n$(), (0, s.rm)(90), (0, s.rm)(50)),
          (0, s.rm)(120),
          (0, s.rm)(210),
          s.BC.xsm(nJ(), (0, s.rm)(120), (0, s.rm)(70)),
          (0, s.rm)(100),
          (0, s.rm)(100),
          (0, s.rm)(100),
          (0, s.rm)(100)
        ),
        n6 = c.ZP.div.withConfig({ componentId: "sc-4eabc0fc-3" })(
          [
            "margin-top:",
            ";font-size:",
            ";",
            ";color:",
            ";text-transform:uppercase;",
            " ",
            "",
          ],
          (0, s.rm)(60),
          (0, s.rm)(18),
          (0, d.u2)(700),
          s.O9.white100,
          s.BC.lg(n0(), (0, s.rm)(40)),
          s.BC.xsm(n1(), (0, s.rm)(16))
        ),
        n3 = [
          { className: "first" },
          { className: "second" },
          { className: "third" },
          { className: "fourth" },
          { className: "fifth" },
          { className: "sixth" },
          { className: "seventh" },
        ],
        n7 = (e) => {
          var t;
          let { data: n } = e,
            r = (0, f.Z)((e) => e.isContentLoaded);
          return (0, i.jsxs)(n2, {
            id: "Backers",
            children: [
              (0, i.jsxs)(n5, {
                children: [
                  (0, i.jsx)(G, {
                    tag: "p",
                    enabled: r,
                    to: (null == n ? void 0 : n.title)
                      ? null == n
                        ? void 0
                        : n.title
                      : "Backed By",
                  }),
                  (0, i.jsx)("span", {
                    children: (0, i.jsx)(eV, {
                      enabled: r,
                      children: (null == n ? void 0 : n.description)
                        ? null == n
                          ? void 0
                          : n.description
                        : "Push is a web3 native communication network, enabling cross-chain notifications, messaging, and more for apps, wallets, and services.",
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(n4, {
                children:
                  null == n
                    ? void 0
                    : null === (t = n.images) || void 0 === t
                    ? void 0
                    : t.map((e, t) => {
                        var n;
                        return (0, i.jsx)(
                          "div",
                          {
                            className: "imageContainer ".concat(
                              null === (n = n3[t]) || void 0 === n
                                ? void 0
                                : n.className
                            ),
                            children: (0, i.jsx)(nO, {
                              children: (0, i.jsx)(nM(), {
                                alt: e.filename,
                                width: 150,
                                height: 40,
                                src: e.filename,
                              }),
                            }),
                          },
                          t
                        );
                      }),
              }),
              (0, i.jsx)(n6, {
                children: (0, i.jsx)(nO, {
                  children: (null == n ? void 0 : n.buttonText)
                    ? null == n
                      ? void 0
                      : n.buttonText
                    : "-",
                }),
              }),
            ],
          });
        };
      function n9() {
        let e = (0, r._)(["\n        padding: ", " ", ";\n    "]);
        return (
          (n9 = function () {
            return e;
          }),
          e
        );
      }
      function n8() {
        let e = (0, r._)(["\n        padding: ", " ", ";\n    "]);
        return (
          (n8 = function () {
            return e;
          }),
          e
        );
      }
      function re() {
        let e = (0, r._)(["\n        width: 100%;\n    "]);
        return (
          (re = function () {
            return e;
          }),
          e
        );
      }
      function rt() {
        let e = (0, r._)(["\n            width: ", ";\n        "]);
        return (
          (rt = function () {
            return e;
          }),
          e
        );
      }
      function rn() {
        let e = (0, r._)(["\n            width: ", ";\n        "]);
        return (
          (rn = function () {
            return e;
          }),
          e
        );
      }
      function rr() {
        let e = (0, r._)([
          "\n            gap: ",
          ";\n            width: 100%;    \n        ",
        ]);
        return (
          (rr = function () {
            return e;
          }),
          e
        );
      }
      function ri() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (ri = function () {
            return e;
          }),
          e
        );
      }
      function ro() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (ro = function () {
            return e;
          }),
          e
        );
      }
      function rl() {
        let e = (0, r._)(["\n        width: ", ";    \n    "]);
        return (
          (rl = function () {
            return e;
          }),
          e
        );
      }
      function rs() {
        let e = (0, r._)(["\n            width: ", ";    \n        "]);
        return (
          (rs = function () {
            return e;
          }),
          e
        );
      }
      function rc() {
        let e = (0, r._)(["\n            width: auto;    \n        "]);
        return (
          (rc = function () {
            return e;
          }),
          e
        );
      }
      let ra = c.ZP.div.withConfig({ componentId: "sc-fcc57788-0" })(
          [
            "padding:",
            " ",
            ";border:1px solid #3F3F3F;",
            " ",
            " ",
            " .wrapper{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:",
            ";height:100%;gap:",
            ";",
            " ",
            " ",
            "}span{font-size:",
            ";",
            " color:",
            ";text-align:center;",
            " ",
            "}",
          ],
          (0, s.rm)(40),
          (0, s.rm)(65),
          s.BC.lg(n9(), (0, s.rm)(20), (0, s.rm)(35)),
          s.BC.md(n8(), (0, s.rm)(23), (0, s.rm)(15)),
          s.BC.xsm(re()),
          (0, s.rm)(307),
          (0, s.rm)(15),
          s.BC.lg(rt(), (0, s.rm)(290)),
          s.BC.md(rn(), (0, s.rm)(250)),
          s.BC.xsm(rr(), (0, s.rm)(7)),
          (0, s.rm)(16),
          (0, d.u2)(400),
          s.O9.grey100,
          s.BC.lg(ri(), (0, s.rm)(15)),
          s.BC.xsm(ro(), (0, s.rm)(12))
        ),
        ru = c.ZP.div.withConfig({ componentId: "sc-fcc57788-1" })(
          [
            "width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;",
            " img{object-fit:contain;",
            " ",
            "}",
          ],
          s.BC.xsm(rl(), (0, s.rm)(140)),
          s.BC.md(rs(), (0, s.rm)(230)),
          s.BC.xsm(rc())
        ),
        rd = (e) => {
          let { image: t, text: n } = e;
          return (0, i.jsx)(ra, {
            children: (0, i.jsxs)("div", {
              className: "wrapper",
              children: [
                (0, i.jsx)(ru, {
                  children: (0, i.jsx)(nM(), {
                    src: t,
                    width: 236,
                    height: 44,
                    alt: "",
                  }),
                }),
                (0, i.jsx)("span", { children: n }),
              ],
            }),
          });
        };
      function rf() {
        let e = (0, r._)([
          "\n        margin: 0;\n        padding: ",
          " ",
          ";    \n    ",
        ]);
        return (
          (rf = function () {
            return e;
          }),
          e
        );
      }
      function rm() {
        let e = (0, r._)([
          "\n        margin: 0;\n        padding: ",
          " ",
          ";    \n    ",
        ]);
        return (
          (rm = function () {
            return e;
          }),
          e
        );
      }
      function rh() {
        let e = (0, r._)([
          "\n        padding: ",
          " ",
          ";\n        overflow: hidden;\n    ",
        ]);
        return (
          (rh = function () {
            return e;
          }),
          e
        );
      }
      function rg() {
        let e = (0, r._)(["\n        padding: ", " ", ";\n    "]);
        return (
          (rg = function () {
            return e;
          }),
          e
        );
      }
      function rp() {
        let e = (0, r._)([
          "\n            display: inline-block;    \n        ",
        ]);
        return (
          (rp = function () {
            return e;
          }),
          e
        );
      }
      function rx() {
        let e = (0, r._)(["\n            display: none;    \n        "]);
        return (
          (rx = function () {
            return e;
          }),
          e
        );
      }
      function rv() {
        let e = (0, r._)([
          "\n            width: 150%;\n            height: 150%;\n            object-fit: fill;\n        ",
        ]);
        return (
          (rv = function () {
            return e;
          }),
          e
        );
      }
      function rw() {
        let e = (0, r._)([
          "\n            width: 140.5%;\n            height: 140.5%;\n        ",
        ]);
        return (
          (rw = function () {
            return e;
          }),
          e
        );
      }
      function ry() {
        let e = (0, r._)([
          "\n            width: 100%;\n            height: 131%;\n            object-fit: cover;\n            display: none;\n        ",
        ]);
        return (
          (ry = function () {
            return e;
          }),
          e
        );
      }
      function rC() {
        let e = (0, r._)([
          "\n            gap: ",
          "; \n            margin-bottom: ",
          ";   \n        ",
        ]);
        return (
          (rC = function () {
            return e;
          }),
          e
        );
      }
      function rb() {
        let e = (0, r._)(["\n            height: ", ";\n        "]);
        return (
          (rb = function () {
            return e;
          }),
          e
        );
      }
      function rj() {
        let e = (0, r._)([
          "\n            gap: ",
          ";\n            margin-bottom: ",
          ";    \n        ",
        ]);
        return (
          (rj = function () {
            return e;
          }),
          e
        );
      }
      function r_() {
        let e = (0, r._)([
          "\n                font-size: ",
          " !important;    \n            ",
        ]);
        return (
          (r_ = function () {
            return e;
          }),
          e
        );
      }
      function rB() {
        let e = (0, r._)([
          "\n                font-size: ",
          " !important;    \n            ",
        ]);
        return (
          (rB = function () {
            return e;
          }),
          e
        );
      }
      function rR() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";    \n            ",
        ]);
        return (
          (rR = function () {
            return e;
          }),
          e
        );
      }
      function rT() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";    \n            ",
        ]);
        return (
          (rT = function () {
            return e;
          }),
          e
        );
      }
      function rz() {
        let e = (0, r._)([
          "\n            margin-top: ",
          ";\n            width: 100%;\n        ",
        ]);
        return (
          (rz = function () {
            return e;
          }),
          e
        );
      }
      function rE() {
        let e = (0, r._)(["\n        gap: ", ";\n    "]);
        return (
          (rE = function () {
            return e;
          }),
          e
        );
      }
      function rP() {
        let e = (0, r._)(["\n        gap: ", ";    \n    "]);
        return (
          (rP = function () {
            return e;
          }),
          e
        );
      }
      function rI() {
        let e = (0, r._)([
          "\n        gap: ",
          ";\n        flex-direction: column;\n        width: 100%;\n    ",
        ]);
        return (
          (rI = function () {
            return e;
          }),
          e
        );
      }
      function rD() {
        let e = (0, r._)([
          "\n        width: 100%;\n        transform: translate(-50%, -39.4%);    \n    ",
        ]);
        return (
          (rD = function () {
            return e;
          }),
          e
        );
      }
      function rL() {
        let e = (0, r._)([
          "\n        transform: translate(-50%, -33%);\n        height: 110%;  \n        -webkit-mask-image: url(/securityMaskLg.png);\n        mask-image: url(/securityMaskLg.png);  \n    ",
        ]);
        return (
          (rL = function () {
            return e;
          }),
          e
        );
      }
      function rk() {
        let e = (0, r._)(["\n        display: none;    \n    "]);
        return (
          (rk = function () {
            return e;
          }),
          e
        );
      }
      let rA = c.ZP.div.withConfig({ componentId: "sc-141d7327-0" })(
          [
            "padding:",
            ";position:relative;overflow:hidden;margin:",
            " 0;",
            " ",
            " svg{position:absolute;top:0;left:0;width:100%;height:100%;}",
          ],
          (0, s.rm)(100),
          (0, s.rm)(156),
          s.BC.md(rf(), (0, s.rm)(80), (0, s.rm)(40)),
          s.BC.xsm(rm(), (0, s.rm)(40), (0, s.rm)(16))
        ),
        rS = c.ZP.div.withConfig({ componentId: "sc-141d7327-1" })(
          [
            "padding:",
            " 0;display:flex;position:relative;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;overflow:hidden;",
            " ",
            " .border{width:100%;background-color:white;opacity:0.5;height:",
            ";position:absolute;z-index:10;display:none;",
            " ",
            "}.borderBottom{bottom:",
            ";left:",
            ";width:",
            ";}.borderTop{top:0;left:",
            ";width:",
            ";}.backImage{position:absolute;width:111.3%;height:111.3%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover;z-index:1;pointer-events:none;",
            " ",
            " ",
            "}.darken{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,1);z-index:2;opacity:0;pointer-events:none;}",
          ],
          (0, s.rm)(93.3),
          s.BC.md(rh(), (0, s.rm)(80), (0, s.rm)(0)),
          s.BC.xsm(rg(), (0, s.rm)(40), (0, s.rm)(16)),
          (0, s.rm)(1),
          s.BC.lg(rp()),
          s.BC.md(rx()),
          (0, s.rm)(0),
          (0, s.rm)(10),
          (0, s.rm)(1193),
          (0, s.rm)(37),
          (0, s.rm)(1193),
          s.BC.lg(rv()),
          s.BC.md(rw()),
          s.BC.xsm(ry())
        ),
        rZ = c.ZP.div.withConfig({ componentId: "sc-141d7327-2" })(
          [
            "position:relative;z-index:2;pointer-events:none;display:flex;flex-direction:column;align-items:center;width:100%;.text{margin-bottom:",
            ";display:flex;flex-direction:column;align-items:center;gap:",
            ";height:",
            ";",
            " ",
            " ",
            " p{font-size:",
            " !important;",
            " color:",
            " !important;",
            " ",
            "}span{font-size:",
            ";",
            " color:",
            ";text-align:center !important;",
            " ",
            "}}.buttonContainer{margin-top:",
            ";pointer-events:all;display:flex;align-items:center;width:",
            ";",
            "}",
          ],
          (0, s.rm)(34),
          (0, s.rm)(24),
          (0, s.rm)(130),
          s.BC.lg(rC(), (0, s.rm)(16), (0, s.rm)(16)),
          s.BC.xsm(rb(), (0, s.rm)(100)),
          s.BC.xsm(rj(), (0, s.rm)(16), (0, s.rm)(26)),
          (0, s.rm)(56),
          (0, d.rB)(700),
          s.O9.white100,
          s.BC.md(r_(), (0, s.rm)(48)),
          s.BC.xsm(rB(), (0, s.rm)(21)),
          (0, s.rm)(20),
          (0, d.u2)(400),
          s.O9.grey100,
          s.BC.md(rR(), (0, s.rm)(18)),
          s.BC.xsm(rT(), (0, s.rm)(14)),
          (0, s.rm)(48),
          (0, s.rm)(526),
          s.BC.xsm(rz(), (0, s.rm)(32))
        ),
        rF = c.ZP.div.withConfig({ componentId: "sc-141d7327-3" })(
          ["display:flex;gap:", ";", " ", " ", ""],
          (0, s.rm)(80),
          s.BC.lg(rE(), (0, s.rm)(50)),
          s.BC.md(rP(), (0, s.rm)(20)),
          s.BC.xsm(rI(), (0, s.rm)(16))
        ),
        rO = c.ZP.div.withConfig({ componentId: "sc-141d7327-4" })(
          [
            "position:absolute;width:100%;height:100%;left:50%;top:50%;transform:translate(-50%,-48%);z-index:0;-webkit-mask-image:url(/securityMask.png);mask-image:url(/securityMask.png);mask-repeat:no-repeat;mask-size:100%;",
            " ",
            " ",
            " div{width:100%;height:100%;video{object-fit:cover;}}",
          ],
          s.BC.lg(rD()),
          s.BC.md(rL()),
          s.BC.xsm(rk())
        ),
        rN = (e) => {
          var t, n, r, o, l, s, c;
          let { data: u } = e,
            d = (0, a.useRef)({ value: 0 }),
            m = (0, K.Lm)(),
            g = (0, f.Z)((e) => e.isContentLoaded),
            [p, x] = (0, h.q_)(() => ({
              uActive: 0,
              config: { duration: 500, easing: h.Z5.linear },
              onChange: () => {
                d.current.value = p.uActive.get();
              },
            }));
          return (0, i.jsxs)(rA, {
            children: [
              (0, i.jsx)(te, { id: "Security" }),
              (0, i.jsxs)(rS, {
                children: [
                  (0, i.jsx)(rO, {
                    children: (0, i.jsx)(tD, {
                      strategy: "lazy",
                      src: "/securityBgVideo.mp4",
                      poster: "/footerPosterMobile.webp",
                    }),
                  }),
                  m > 1024 &&
                    (0, i.jsx)("svg", {
                      width: "1720",
                      height: "620",
                      viewBox: "0 0 1720 620",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)("path", {
                        d: "M0.5 95.5634L63.493 0.5L1719.5 0.50076V530.206L1655.22 619.109H0.5V95.5634Z",
                        stroke: "#3F3F3F",
                      }),
                    }),
                  m > 576 &&
                    m <= 1024 &&
                    (0, i.jsx)("svg", {
                      width: "1720",
                      height: "800",
                      viewBox: "0 0 1720 800",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)("path", {
                        d: "M0.5 95.5634L63.493 0.5L1719.5 0.50076V730.206L1655.22 819.109H0.5V95.5634Z",
                        stroke: "#3F3F3F",
                      }),
                    }),
                  (0, i.jsxs)(rZ, {
                    children: [
                      (0, i.jsxs)("div", {
                        className: "text",
                        children: [
                          (0, i.jsx)(G, {
                            tag: "p",
                            enabled: g,
                            to: (null == u ? void 0 : u.title)
                              ? null == u
                                ? void 0
                                : u.title
                              : "-",
                          }),
                          (0, i.jsx)("span", {
                            children: (0, i.jsx)(eV, {
                              enabled: g,
                              children: (null == u ? void 0 : u.description)
                                ? null == u
                                  ? void 0
                                  : u.description
                                : "-",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(rF, {
                        children:
                          null == u
                            ? void 0
                            : null === (t = u.cards) || void 0 === t
                            ? void 0
                            : t.map((e, t) =>
                                (0, i.jsx)(
                                  nO,
                                  {
                                    children: (0, i.jsx)(rd, {
                                      image: e.image.filename,
                                      text: e.text,
                                    }),
                                  },
                                  t
                                )
                              ),
                      }),
                      (0, i.jsx)("div", {
                        className: "buttonContainer",
                        onPointerEnter: () => x.start({ uActive: 0.1 }),
                        onPointerLeave: () => x.start({ uActive: 0 }),
                        children: (0, i.jsx)(nO, {
                          children: (0, i.jsx)(er, {
                            link:
                              null == u
                                ? void 0
                                : null === (r = u.button) || void 0 === r
                                ? void 0
                                : null === (n = r[0]) || void 0 === n
                                ? void 0
                                : n.link,
                            children: (
                              null == u
                                ? void 0
                                : null === (l = u.button) || void 0 === l
                                ? void 0
                                : null === (o = l[0]) || void 0 === o
                                ? void 0
                                : o.text
                            )
                              ? null == u
                                ? void 0
                                : null === (c = u.button) || void 0 === c
                                ? void 0
                                : null === (s = c[0]) || void 0 === s
                                ? void 0
                                : s.text
                              : "-",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function rM() {
        let e = (0, r._)(["\n        top: 55%;\n    "]);
        return (
          (rM = function () {
            return e;
          }),
          e
        );
      }
      function rH() {
        let e = (0, r._)([
          "\n        transform: translateY(-50%) translateX(-90%);\n    ",
        ]);
        return (
          (rH = function () {
            return e;
          }),
          e
        );
      }
      function rV() {
        let e = (0, r._)([
          "\n        width: 100%;\n        right: 30% !important;\n        top: 50%;\n        transform: translate(30%, -10%);\n    ",
        ]);
        return (
          (rV = function () {
            return e;
          }),
          e
        );
      }
      function rU() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        height: ",
          ";        \n    ",
        ]);
        return (
          (rU = function () {
            return e;
          }),
          e
        );
      }
      function rq() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        height: ",
          ";  \n    ",
        ]);
        return (
          (rq = function () {
            return e;
          }),
          e
        );
      }
      function rG() {
        let e = (0, r._)([
          "\n        width: 100%;\n        height: ",
          ";    \n    ",
        ]);
        return (
          (rG = function () {
            return e;
          }),
          e
        );
      }
      let rW = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-9043128f-0" })(
          [
            "width:50%;position:fixed;top:55%;transform:translateY(-50%) translateX(-90%);right:-50%;user-select:none;pointer-events:none;mix-blend-mode:screen;z-index:103;",
            " ",
            " ",
            "",
          ],
          s.BC.lg(rM()),
          s.BC.md(rH()),
          s.BC.xsm(rV())
        ),
        rX = c.ZP.div.withConfig({ componentId: "sc-9043128f-1" })(
          [
            "width:",
            ";height:",
            ";position:relative;",
            " ",
            " ",
            " div{height:100%;width:100%;video{object-fit:contain;}}",
          ],
          (0, s.rm)(568),
          (0, s.rm)(700),
          s.BC.lg(rU(), (0, s.rm)(470), (0, s.rm)(600)),
          s.BC.md(rq(), (0, s.rm)(350), (0, s.rm)(480)),
          s.BC.xsm(rG(), (0, s.rm)(330))
        ),
        rY = (e) => {
          let { screenNumber: t, screensLength: n, schemeSrc: r } = e,
            o = (0, a.useRef)(null);
          return (
            (0, e7.C0)([t, t + 1], (e, t) => {
              if (o.current) {
                let t = (0, e9.xD)(e, 0, 0.1, 0, 1),
                  n = (0, e9.xD)(e, 0.9, 1, 1, 0),
                  r = e <= 0.1 ? t : e >= 0.9 ? n : 1;
                o.current.style.opacity = "".concat(r);
              }
            }),
            (0, i.jsx)(rW, {
              ref: o,
              children: (0, i.jsx)(rX, {
                children: (0, i.jsx)(tD, {
                  strategy: "lazy",
                  src: r,
                  poster: "/scheme.png",
                }),
              }),
            })
          );
        };
      function rQ() {
        let e = (0, r._)([
          "\n        gap: ",
          ";\n        padding: ",
          " ",
          " ",
          " ",
          ";\n    ",
        ]);
        return (
          (rQ = function () {
            return e;
          }),
          e
        );
      }
      function rK() {
        let e = (0, r._)(["\n        gap: ", ";\n        height: ", ";\n    "]);
        return (
          (rK = function () {
            return e;
          }),
          e
        );
      }
      function r$() {
        let e = (0, r._)([
          "\n        gap: ",
          ";\n        padding: ",
          " ",
          " ",
          " ",
          ";\n        height: ",
          ";\n    ",
        ]);
        return (
          (r$ = function () {
            return e;
          }),
          e
        );
      }
      function rJ() {
        let e = (0, r._)([
          "\n            width: ",
          " !important;\n            height: ",
          " !important;\n        ",
        ]);
        return (
          (rJ = function () {
            return e;
          }),
          e
        );
      }
      function r0() {
        let e = (0, r._)([
          "\n            width: ",
          " !important;\n            height: ",
          " !important;\n        ",
        ]);
        return (
          (r0 = function () {
            return e;
          }),
          e
        );
      }
      function r1() {
        let e = (0, r._)([
          "\n            width: ",
          " !important; \n            height: ",
          " !important;\n            margin-right: ",
          " !important;\n        ",
        ]);
        return (
          (r1 = function () {
            return e;
          }),
          e
        );
      }
      function r2() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        padding: ",
          " 0;\n    ",
        ]);
        return (
          (r2 = function () {
            return e;
          }),
          e
        );
      }
      function r5() {
        let e = (0, r._)(["\n        padding: ", " 0;\n    "]);
        return (
          (r5 = function () {
            return e;
          }),
          e
        );
      }
      function r4() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (r4 = function () {
            return e;
          }),
          e
        );
      }
      function r6() {
        let e = (0, r._)([
          "\n            font-size: ",
          ";\n            height: ",
          ";  \n        ",
        ]);
        return (
          (r6 = function () {
            return e;
          }),
          e
        );
      }
      function r3() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (r3 = function () {
            return e;
          }),
          e
        );
      }
      function r7() {
        let e = (0, r._)([
          "\n            font-size: ",
          ";\n            line-height: auto; \n        ",
        ]);
        return (
          (r7 = function () {
            return e;
          }),
          e
        );
      }
      let r9 = c.ZP.div.withConfig({ componentId: "sc-bd5794c7-0" })(
          [
            "display:flex;padding:",
            " ",
            " ",
            " ",
            ";justify-content:space-between;align-items:center;border:1px solid #3F3F3F;gap:",
            ";height:100%;mix-blend-mode:screen;cursor:pointer;transition:opacity 0.5s ease-in-out;&:hover{opacity:.8;img{transform:scale(1.1);}video{transform:scale(1.1);}}",
            " ",
            " ",
            " video,img{transition:transform 0.5s ease-in-out;}>:last-child{width:",
            " !important;height:",
            " !important;position:relative;z-index:-1;",
            " ",
            "}.icon{",
            "}",
          ],
          (0, s.rm)(30),
          (0, s.rm)(30),
          (0, s.rm)(30),
          (0, s.rm)(24),
          (0, s.rm)(30),
          s.BC.lg(
            rQ(),
            (0, s.rm)(16),
            (0, s.rm)(24),
            (0, s.rm)(24),
            (0, s.rm)(24),
            (0, s.rm)(18)
          ),
          s.BC.md(rK(), (0, s.rm)(0), (0, s.rm)(180)),
          s.BC.xsm(
            r$(),
            (0, s.rm)(0),
            (0, s.rm)(5),
            (0, s.rm)(10),
            (0, s.rm)(5),
            (0, s.rm)(15),
            (0, s.rm)(140)
          ),
          (0, s.rm)(158),
          (0, s.rm)(153),
          s.BC.lg(rJ(), (0, s.rm)(123), (0, s.rm)(120)),
          s.BC.xsm(r0(), (0, s.rm)(133), (0, s.rm)(130)),
          s.BC.xsm(r1(), (0, s.rm)(110), (0, s.rm)(110), (0, s.rm)(15))
        ),
        r8 = c.ZP.div.withConfig({ componentId: "sc-bd5794c7-1" })(
          [
            "width:",
            ";height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:",
            " 0;",
            " ",
            " >:first-child{font-size:",
            ";",
            ";color:",
            ";",
            " ",
            "}>:last-child{font-size:",
            ";",
            ";color:",
            ";line-height:auto;",
            " ",
            "}",
          ],
          (0, s.rm)(232),
          (0, s.rm)(15),
          s.BC.lg(r2(), (0, s.rm)(180), (0, s.rm)(12)),
          s.BC.xsm(r5(), (0, s.rm)(21)),
          (0, s.rm)(18),
          (0, d.rB)(700),
          s.O9.white100,
          s.BC.lg(r4(), (0, s.rm)(16)),
          s.BC.xsm(r6(), (0, s.rm)(14), (0, s.rm)(30)),
          (0, s.rm)(18),
          (0, d.u2)(400),
          s.O9.grey100,
          s.BC.lg(r3(), (0, s.rm)(15)),
          s.BC.xsm(r7(), (0, s.rm)(12))
        ),
        ie = c.ZP.a.withConfig({ componentId: "sc-bd5794c7-2" })([
          "position:absolute;width:100%;height:100%;top:0;left:0;",
        ]),
        it = (e) => {
          let {
            title: t,
            description: n,
            image: r,
            video: o,
            icon: l,
            href: s,
          } = e;
          return (0, i.jsxs)(r9, {
            children: [
              (0, i.jsx)(ie, { href: s, target: "_blank" }),
              (0, i.jsxs)(r8, {
                children: [
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)(G, { to: t || "-", enabled: !0 }),
                  }),
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)(eV, {
                      enabled: !0,
                      children: n || "-",
                    }),
                  }),
                ],
              }),
              l
                ? (0, i.jsx)(nM(), {
                    className: "icon",
                    src: l,
                    alt: t,
                    width: 200,
                    height: 200,
                  })
                : (0, i.jsx)(tD, { strategy: "lazy", src: o, poster: r }),
            ],
          });
        };
      var ir = (e) => {
        let { borderRadius: t, speed: n } = e,
          r = (0, a.useRef)(null),
          o = (0, a.useRef)(null),
          l = (0, a.useRef)(!1),
          s = (0, a.useCallback)((e, t, n, r, i, o) => {
            e.beginPath(),
              e.moveTo(t + o, n),
              e.lineTo(t + r - o, n),
              e.quadraticCurveTo(t + r, n, t + r, n + o),
              e.lineTo(t + r, n + i - o),
              e.quadraticCurveTo(t + r, n + i, t + r - o, n + i),
              e.lineTo(t + o, n + i),
              e.quadraticCurveTo(t, n + i, t, n + i - o),
              e.lineTo(t, n + o),
              e.quadraticCurveTo(t, n, t + o, n),
              e.closePath();
          }, []),
          c = (0, a.useCallback)(
            function (e, r) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
              if (!e || !l.current) return;
              e.clearRect(0, 0, r.width, r.height);
              let a = r.width / 2,
                u = r.height / 2,
                d = a + (r.width / 2) * Math.cos(i),
                f = u + (r.height / 2) * Math.sin(i),
                m = a - (r.width / 2) * Math.cos(i),
                h = u - (r.height / 2) * Math.sin(i),
                g = e.createLinearGradient(d, f, m, h);
              g.addColorStop(0.4, "rgba(0, 0, 0, 0.00)"),
                g.addColorStop(0.58, "#23FAAD"),
                g.addColorStop(0.65, "#23FAAD"),
                g.addColorStop(0.87, "rgba(0, 0, 0, 0.00)"),
                (e.strokeStyle = g),
                (e.lineWidth = 2),
                s(e, 5, 5, r.width - 10, r.height - 10, t),
                e.stroke(),
                (i += n / 1e3),
                (o.current = requestAnimationFrame(() => c(e, r, i)));
            },
            [n]
          ),
          u = (0, a.useCallback)((e) => {
            let t = e.parentElement.getBoundingClientRect();
            (e.width = t.width + 6), (e.height = t.height + 6);
          }, []);
        return (
          (0, a.useEffect)(() => {
            let { current: e } = r;
            if (!e) return;
            let t = e.getContext("2d"),
              n = new IntersectionObserver(
                (n) => {
                  let [r] = n;
                  (l.current = r.isIntersecting),
                    r.isIntersecting
                      ? c(t, e)
                      : o.current && cancelAnimationFrame(o.current);
                },
                { threshold: 0 }
              );
            n.observe(e);
            let i = new ResizeObserver(() => {
              u(e), l.current && c(t, e);
            });
            return (
              i.observe(e.parentElement),
              u(e),
              l.current && c(t, e),
              () => {
                n.disconnect(),
                  i.disconnect(),
                  o.current && cancelAnimationFrame(o.current);
              }
            );
          }, [t, c, u]),
          (0, i.jsx)("canvas", {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            },
            ref: r,
          })
        );
      };
      function ii() {
        let e = (0, r._)(["\n        padding: ", " ", " ", " ", ";\n    "]);
        return (
          (ii = function () {
            return e;
          }),
          e
        );
      }
      function io() {
        let e = (0, r._)(["\n        padding: ", " ", " 0 ", ";    \n    "]);
        return (
          (io = function () {
            return e;
          }),
          e
        );
      }
      function il() {
        let e = (0, r._)(["\n        width: ", ";\n    "]);
        return (
          (il = function () {
            return e;
          }),
          e
        );
      }
      function is() {
        let e = (0, r._)([
          "\n        width: 100%;\n        gap: ",
          ";    \n    ",
        ]);
        return (
          (is = function () {
            return e;
          }),
          e
        );
      }
      function ic() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (ic = function () {
            return e;
          }),
          e
        );
      }
      function ia() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (ia = function () {
            return e;
          }),
          e
        );
      }
      function iu() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (iu = function () {
            return e;
          }),
          e
        );
      }
      function id() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (id = function () {
            return e;
          }),
          e
        );
      }
      function im() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        margin-top: ",
          ";\n    ",
        ]);
        return (
          (im = function () {
            return e;
          }),
          e
        );
      }
      function ih() {
        let e = (0, r._)([
          "\n        margin-top: ",
          ";\n        width: 100%;\n    ",
        ]);
        return (
          (ih = function () {
            return e;
          }),
          e
        );
      }
      let ig = c.ZP.div.withConfig({ componentId: "sc-ae92f05d-0" })(
          [
            "display:flex;flex-direction:column;align-items:center;padding:",
            " ",
            " ",
            " ",
            ";border:1px solid #3F3F3F;cursor:pointer;transition:opacity 0.5s ease-in-out;&:hover{opacity:.8;img{transform:scale(1.05);}}",
            " ",
            "",
          ],
          (0, s.rm)(32),
          (0, s.rm)(32),
          (0, s.rm)(0),
          (0, s.rm)(44),
          s.BC.lg(
            ii(),
            (0, s.rm)(24),
            (0, s.rm)(24),
            (0, s.rm)(0),
            (0, s.rm)(32)
          ),
          s.BC.xsm(io(), (0, s.rm)(16), (0, s.rm)(14), (0, s.rm)(14))
        ),
        ip = c.ZP.div.withConfig({ componentId: "sc-ae92f05d-1" })(
          [
            "width:",
            ";height:100%;display:flex;flex-direction:column;align-items:center;text-align:center;gap:",
            ";",
            " ",
            " >:first-child{font-size:",
            ";",
            ";color:",
            ";",
            " ",
            "}>:last-child{font-size:",
            ";",
            ";color:",
            ";line-height:auto;>span{display:flex;align-items:center;justify-content:center;}",
            " ",
            "}",
          ],
          (0, s.rm)(642),
          (0, s.rm)(24),
          s.BC.lg(il(), (0, s.rm)(410)),
          s.BC.xsm(is(), (0, s.rm)(16)),
          (0, s.rm)(18),
          (0, d.rB)(700),
          s.O9.white100,
          s.BC.lg(ic(), (0, s.rm)(16)),
          s.BC.xsm(ia(), (0, s.rm)(14)),
          (0, s.rm)(18),
          (0, d.u2)(400),
          s.O9.grey100,
          s.BC.lg(iu(), (0, s.rm)(15)),
          s.BC.xsm(id(), (0, s.rm)(12))
        ),
        ix = c.ZP.div.withConfig({ componentId: "sc-ae92f05d-2" })(
          [
            "width:",
            ";height:100%;margin-top:",
            ";position:relative;z-index:-1;overflow:hidden;",
            " ",
            " img{width:100%;height:100%;transition:transform 0.5s ease-in-out;}",
          ],
          (0, s.rm)(555),
          (0, s.rm)(36),
          s.BC.lg(im(), (0, s.rm)(360), (0, s.rm)(56)),
          s.BC.xsm(ih(), (0, s.rm)(10))
        ),
        iv = c.ZP.a.withConfig({ componentId: "sc-ae92f05d-3" })([
          "position:absolute;width:100%;height:100%;top:0;left:0;",
        ]),
        iw = (e) => {
          let { title: t, description: n, image: r, href: o } = e;
          return (0, i.jsxs)(ig, {
            children: [
              (0, i.jsx)(iv, { href: o, target: "_blank" }),
              (0, i.jsxs)(ip, {
                children: [
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)(G, { to: t || "-", enabled: !0 }),
                  }),
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)(eV, {
                      enabled: !0,
                      children: n || "-",
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(ix, {
                children: (0, i.jsx)(nM(), {
                  src: "/liquidity/131313.webp",
                  alt: t,
                  width: 555,
                  height: 300,
                }),
              }),
              (0, i.jsx)(ir, { borderRadius: 0, speed: 5 }),
            ],
          });
        };
      function iy() {
        let e = (0, r._)([
          "\n        width: 100%;\n        padding: ",
          " ",
          ";   \n    ",
        ]);
        return (
          (iy = function () {
            return e;
          }),
          e
        );
      }
      function iC() {
        let e = (0, r._)(["\n        gap: ", ";    \n    "]);
        return (
          (iC = function () {
            return e;
          }),
          e
        );
      }
      function ib() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (ib = function () {
            return e;
          }),
          e
        );
      }
      function ij() {
        let e = (0, r._)([
          "\n            font-size: ",
          ";  \n            text-align: center;  \n        ",
        ]);
        return (
          (ij = function () {
            return e;
          }),
          e
        );
      }
      function i_() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (i_ = function () {
            return e;
          }),
          e
        );
      }
      function iB() {
        let e = (0, r._)([
          "\n            font-size: ",
          ";\n            text-align: center;    \n        ",
        ]);
        return (
          (iB = function () {
            return e;
          }),
          e
        );
      }
      function iR() {
        let e = (0, r._)([
          "\n        margin-top: ",
          ";\n        width: 100%;    \n    ",
        ]);
        return (
          (iR = function () {
            return e;
          }),
          e
        );
      }
      let iT = c.ZP.div.withConfig({ componentId: "sc-9070fa76-0" })(
          [
            "display:flex;flex-direction:column;padding:",
            " ",
            " ",
            " ",
            ";border:1px solid #3F3F3F;width:50%;align-items:center;position:relative;cursor:pointer;transition:opacity 0.5s ease-in-out;&:hover{opacity:.8;img{transform:scale(1.05);}}",
            "",
          ],
          (0, s.rm)(50),
          (0, s.rm)(23),
          (0, s.rm)(50),
          (0, s.rm)(23),
          s.BC.xsm(iy(), (0, s.rm)(16), (0, s.rm)(14))
        ),
        iz = c.ZP.div.withConfig({ componentId: "sc-9070fa76-1" })(
          [
            "width:100%;height:100%;display:flex;flex-direction:column;gap:",
            ";",
            " >:first-child{font-size:",
            ";",
            ";color:",
            ";",
            " ",
            "}>:last-child{font-size:",
            ";",
            ";color:",
            ";",
            " ",
            "}",
          ],
          (0, s.rm)(20),
          s.BC.xsm(iC(), (0, s.rm)(16)),
          (0, s.rm)(18),
          (0, d.rB)(700),
          s.O9.white100,
          s.BC.lg(ib(), (0, s.rm)(18)),
          s.BC.xsm(ij(), (0, s.rm)(14)),
          (0, s.rm)(18),
          (0, d.u2)(400),
          s.O9.grey100,
          s.BC.lg(i_(), (0, s.rm)(16)),
          s.BC.xsm(iB(), (0, s.rm)(12))
        ),
        iE = c.ZP.div.withConfig({ componentId: "sc-9070fa76-2" })(
          [
            "height:100%;margin-top:",
            ";width:80%;position:relative;z-index:-1;",
            " img{width:100%;height:100%;transition:transform 0.5s ease-in-out;}",
          ],
          (0, s.rm)(36),
          s.BC.xsm(iR(), (0, s.rm)(16))
        ),
        iP = c.ZP.a.withConfig({ componentId: "sc-9070fa76-3" })([
          "position:absolute;width:100%;height:100%;top:0;left:0;",
        ]),
        iI = (e) => {
          let { title: t, description: n, image: r, href: o } = e;
          return (0, i.jsxs)(iT, {
            children: [
              (0, i.jsx)(iP, { href: o, target: "_blank" }),
              (0, i.jsxs)(iz, {
                children: [
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)(G, { to: t, enabled: !0 }),
                  }),
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)(eV, { enabled: !0, children: n }),
                  }),
                ],
              }),
              (0, i.jsx)(iE, {
                children: (0, i.jsx)(nM(), {
                  src: r,
                  alt: t,
                  width: 555,
                  height: 300,
                }),
              }),
              (0, i.jsx)(ir, { borderRadius: 0, speed: 7 }),
            ],
          });
        };
      function iD() {
        let e = (0, r._)([
          "\n        margin-top: 0;\n        padding: ",
          " ",
          ";\n        gap: ",
          ";\n    ",
        ]);
        return (
          (iD = function () {
            return e;
          }),
          e
        );
      }
      function iL() {
        let e = (0, r._)([
          "\n        margin-top: 0;\n        padding: ",
          " ",
          ";\n        gap: ",
          ";\n    ",
        ]);
        return (
          (iL = function () {
            return e;
          }),
          e
        );
      }
      function ik() {
        let e = (0, r._)(["\n        flex-direction: column;\n    "]);
        return (
          (ik = function () {
            return e;
          }),
          e
        );
      }
      function iA() {
        let e = (0, r._)([
          "\n        flex-direction: row; \n        gap: ",
          ";   \n    ",
        ]);
        return (
          (iA = function () {
            return e;
          }),
          e
        );
      }
      function iS() {
        let e = (0, r._)([
          "\n        flex-direction: column;\n        gap: ",
          ";\n    ",
        ]);
        return (
          (iS = function () {
            return e;
          }),
          e
        );
      }
      function iZ() {
        let e = (0, r._)(["\n        flex-direction: column;    \n    "]);
        return (
          (iZ = function () {
            return e;
          }),
          e
        );
      }
      let iF = c.ZP.div.withConfig({ componentId: "sc-3e615709-0" })(
          [
            "position:relative;z-index:100;padding:",
            ";display:flex;flex-direction:column;gap:",
            ";mix-blend-mode:screen;",
            " ",
            "",
          ],
          (0, s.rm)(100),
          (0, s.rm)(34),
          s.BC.md(iD(), (0, s.rm)(80), (0, s.rm)(40), (0, s.rm)(24)),
          s.BC.xsm(iL(), (0, s.rm)(40), (0, s.rm)(16), (0, s.rm)(24))
        ),
        iO = c.ZP.div.withConfig({ componentId: "sc-3e615709-1" })(
          ["display:flex;gap:", ";", ""],
          (0, s.rm)(23),
          s.BC.md(ik())
        ),
        iN = c.ZP.div.withConfig({ componentId: "sc-3e615709-2" })(
          ["display:flex;flex-direction:column;gap:", ";", " ", ""],
          (0, s.rm)(34),
          s.BC.md(iA(), (0, s.rm)(24)),
          s.BC.xsm(iS(), (0, s.rm)(24))
        ),
        iM = c.ZP.div.withConfig({ componentId: "sc-3e615709-3" })(
          ["display:flex;gap:", ";", ""],
          (0, s.rm)(24),
          s.BC.xsm(iZ())
        ),
        iH = [
          {
            image: "/liquidity/xPoster.webp",
            video: "/liquidity/x-logo-video.mp4",
          },
          {
            image: "/liquidity/xPoster.webp",
            video: "/liquidity/x-logo-video.mp4",
            icon: "/liquidity/liqScheme.webp",
          },
          { image: "/liquidity/graphic.webp" },
          {
            image: "/liquidity/trenPoster.webp",
            video: "/liquidity/tren-logo-video.mp4",
          },
          { image: "/shieldPoster.webp", video: "/shield-video.mp4" },
        ],
        iV = (e) => {
          var t, n, r, o, l, s, c, a, u, d, f, m, h, g, p, x;
          let { data: v } = e;
          return (0, i.jsxs)(iF, {
            children: [
              (0, i.jsx)(te, { id: "Features" }),
              (0, i.jsxs)(iO, {
                children: [
                  (0, i.jsxs)(iN, {
                    children: [
                      (0, i.jsx)(nO, {
                        children: (0, i.jsx)(it, {
                          href:
                            null == v
                              ? void 0
                              : null === (t = v.topCards) || void 0 === t
                              ? void 0
                              : t[0].href,
                          video: iH[0].video,
                          title:
                            null == v
                              ? void 0
                              : null === (n = v.topCards) || void 0 === n
                              ? void 0
                              : n[0].title,
                          description:
                            null == v
                              ? void 0
                              : null === (r = v.topCards) || void 0 === r
                              ? void 0
                              : r[0].description,
                          image: iH[0].image,
                        }),
                      }),
                      (0, i.jsx)(nO, {
                        children: (0, i.jsx)(it, {
                          href:
                            null == v
                              ? void 0
                              : null === (o = v.topCards) || void 0 === o
                              ? void 0
                              : o[1].href,
                          video: iH[1].video,
                          icon: iH[1].icon,
                          title:
                            null == v
                              ? void 0
                              : null === (l = v.topCards) || void 0 === l
                              ? void 0
                              : l[1].title,
                          description:
                            null == v
                              ? void 0
                              : null === (s = v.topCards) || void 0 === s
                              ? void 0
                              : s[1].description,
                          image: iH[1].image,
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(nO, {
                    children: (0, i.jsx)(iw, {
                      href:
                        null == v
                          ? void 0
                          : null === (c = v.topCards) || void 0 === c
                          ? void 0
                          : c[2].href,
                      title:
                        null == v
                          ? void 0
                          : null === (a = v.topCards) || void 0 === a
                          ? void 0
                          : a[2].title,
                      description:
                        null == v
                          ? void 0
                          : null === (u = v.topCards) || void 0 === u
                          ? void 0
                          : u[2].description,
                      image: iH[2].image,
                    }),
                  }),
                  (0, i.jsxs)(iN, {
                    children: [
                      (0, i.jsx)(nO, {
                        children: (0, i.jsx)(it, {
                          href:
                            null == v
                              ? void 0
                              : null === (d = v.topCards) || void 0 === d
                              ? void 0
                              : d[3].href,
                          video: iH[3].video,
                          title:
                            null == v
                              ? void 0
                              : null === (f = v.topCards) || void 0 === f
                              ? void 0
                              : f[3].title,
                          description:
                            null == v
                              ? void 0
                              : null === (m = v.topCards) || void 0 === m
                              ? void 0
                              : m[3].description,
                          image: iH[3].image,
                        }),
                      }),
                      (0, i.jsx)(nO, {
                        children: (0, i.jsx)(it, {
                          href:
                            null == v
                              ? void 0
                              : null === (h = v.topCards) || void 0 === h
                              ? void 0
                              : h[4].href,
                          video: iH[4].video,
                          title:
                            null == v
                              ? void 0
                              : null === (g = v.topCards) || void 0 === g
                              ? void 0
                              : g[4].title,
                          description:
                            null == v
                              ? void 0
                              : null === (p = v.topCards) || void 0 === p
                              ? void 0
                              : p[4].description,
                          image: iH[4].image,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(nO, {
                children: (0, i.jsx)(iM, {
                  children:
                    null == v
                      ? void 0
                      : null === (x = v.bottomCards) || void 0 === x
                      ? void 0
                      : x.map((e, t) =>
                          (0, i.jsx)(
                            iI,
                            {
                              href: e.href,
                              title: e.title,
                              description: e.description,
                              image: e.asset.filename,
                            },
                            t
                          )
                        ),
                }),
              }),
            ],
          });
        };
      function iU() {
        let e = (0, r._)(["\n        padding: ", " 0;    \n    "]);
        return (
          (iU = function () {
            return e;
          }),
          e
        );
      }
      function iq() {
        let e = (0, r._)([
          "\n        padding: ",
          " 0;\n        gap: ",
          ";\n    ",
        ]);
        return (
          (iq = function () {
            return e;
          }),
          e
        );
      }
      function iG() {
        let e = (0, r._)(["\n            height: ", ";    \n        "]);
        return (
          (iG = function () {
            return e;
          }),
          e
        );
      }
      function iW() {
        let e = (0, r._)(["\n        padding-left: ", ";    \n    "]);
        return (
          (iW = function () {
            return e;
          }),
          e
        );
      }
      function iX() {
        let e = (0, r._)([
          "\n        padding-left: ",
          ";  \n        flex-direction: column;\n        gap: ",
          ";\n    ",
        ]);
        return (
          (iX = function () {
            return e;
          }),
          e
        );
      }
      function iY() {
        let e = (0, r._)(["\n            &:hover{}    \n        "]);
        return (
          (iY = function () {
            return e;
          }),
          e
        );
      }
      function iQ() {
        let e = (0, r._)(["\n            display: none;    \n        "]);
        return (
          (iQ = function () {
            return e;
          }),
          e
        );
      }
      function iK() {
        let e = (0, r._)([
          "\n            width: 100%;\n            margin-left: ",
          ";\n        ",
        ]);
        return (
          (iK = function () {
            return e;
          }),
          e
        );
      }
      function i$() {
        let e = (0, r._)(["\n        padding-right: ", ";    \n    "]);
        return (
          (i$ = function () {
            return e;
          }),
          e
        );
      }
      function iJ() {
        let e = (0, r._)([
          "\n        padding-right: ",
          ";\n        flex-direction: column-reverse;\n        gap: ",
          ";\n    ",
        ]);
        return (
          (iJ = function () {
            return e;
          }),
          e
        );
      }
      function i0() {
        let e = (0, r._)(["\n            &:hover{}    \n        "]);
        return (
          (i0 = function () {
            return e;
          }),
          e
        );
      }
      function i1() {
        let e = (0, r._)(["\n            display: none;    \n        "]);
        return (
          (i1 = function () {
            return e;
          }),
          e
        );
      }
      function i2() {
        let e = (0, r._)([
          "\n            width: 100%;\n            margin-right: ",
          ";  \n        ",
        ]);
        return (
          (i2 = function () {
            return e;
          }),
          e
        );
      }
      function i5() {
        let e = (0, r._)(["\n        font-size: ", ";\n    "]);
        return (
          (i5 = function () {
            return e;
          }),
          e
        );
      }
      function i4() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (i4 = function () {
            return e;
          }),
          e
        );
      }
      function i6() {
        let e = (0, r._)([
          "\n        width: 100%;\n        font-size: ",
          ";    \n    ",
        ]);
        return (
          (i6 = function () {
            return e;
          }),
          e
        );
      }
      function i3() {
        let e = (0, r._)(["\n        width: 100%;    \n    "]);
        return (
          (i3 = function () {
            return e;
          }),
          e
        );
      }
      function i7() {
        let e = (0, r._)(["\n        width: 100%;    \n    "]);
        return (
          (i7 = function () {
            return e;
          }),
          e
        );
      }
      let i9 = c.ZP.div.withConfig({ componentId: "sc-8f174022-0" })(
          [
            "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",
            ";overflow:hidden;position:relative;padding:",
            " 0 ",
            " 0;",
            " ",
            " .swiper{width:100% !important;overflow:hidden !important;height:",
            ";",
            "}",
          ],
          (0, s.rm)(140),
          (0, s.rm)(100),
          (0, s.rm)(100),
          s.BC.md(iU(), (0, s.rm)(80)),
          s.BC.xsm(iq(), (0, s.rm)(40), (0, s.rm)(32)),
          (0, s.rm)(35),
          s.BC.xsm(iG(), (0, s.rm)(30))
        ),
        i8 = c.ZP.div.withConfig({ componentId: "sc-8f174022-1" })(
          [
            "display:flex;padding-left:",
            ";align-items:center;position:relative;width:100%;",
            " ",
            " img{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:contain;opacity:0.6;cursor:pointer;transition:opacity .5s ease-in-out;&:hover{opacity:1;}",
            "}.opacityGradient{position:absolute;top:0;left:",
            ";width:20%;height:100%;background:linear-gradient(to right,rgba(0,0,0,1) 40%,rgba(0,0,0,0) 100%);pointer-events:none;z-index:1;",
            "}h2{text-align:left;width:50%;display:flex;justify-content:flex-start;",
            "}",
          ],
          (0, s.rm)(100),
          s.BC.md(iW(), (0, s.rm)(40)),
          s.BC.xsm(iX(), (0, s.rm)(0), (0, s.rm)(16)),
          s.BC.md(iY()),
          (0, s.rm)(-10),
          s.BC.xsm(iQ()),
          s.BC.xsm(iK(), (0, s.rm)(16))
        ),
        oe = c.ZP.div.withConfig({ componentId: "sc-8f174022-2" })(
          [
            "display:flex;padding-right:",
            ";align-items:center;position:relative;width:100%;",
            " ",
            " img{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:contain;cursor:pointer;opacity:0.6;transition:opacity .5s ease-in-out;&:hover{opacity:1;}",
            "}.opacityGradient{position:absolute;top:0;right:",
            ";width:20%;height:100%;background:linear-gradient(to left,rgba(0,0,0,1) 40%,rgba(0,0,0,0) 100%);pointer-events:none;z-index:1;",
            "}h2{text-align:right;width:50%;display:flex;justify-content:flex-end;",
            "}",
          ],
          (0, s.rm)(100),
          s.BC.md(i$(), (0, s.rm)(40)),
          s.BC.xsm(iJ(), (0, s.rm)(0), (0, s.rm)(16)),
          s.BC.md(i0()),
          (0, s.rm)(-10),
          s.BC.xsm(i1()),
          s.BC.xsm(i2(), (0, s.rm)(16))
        ),
        ot = c.ZP.h2.withConfig({ componentId: "sc-8f174022-3" })(
          [
            "",
            ";font-size:",
            ";color:",
            ";width:50%;background:linear-gradient(180deg,#B7BCBC 0%,#FFFFFF 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;",
            " ",
            " ",
            "",
          ],
          (0, d.rB)(500),
          (0, s.rm)(48),
          s.O9.white100,
          s.BC.lg(i5(), (0, s.rm)(42)),
          s.BC.md(i4(), (0, s.rm)(36)),
          s.BC.xsm(i6(), (0, s.rm)(18))
        ),
        on = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-8f174022-4" })(
          [
            "display:flex;justify-content:flex-end;width:50%;position:relative;",
            "",
          ],
          s.BC.xsm(i3())
        ),
        or = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-8f174022-5" })(
          [
            "display:flex;justify-content:flex-start;width:50%;position:relative;",
            "",
          ],
          s.BC.xsm(i7())
        ),
        oi = (e) => {
          var t, n;
          let { data: r } = e,
            o = (0, f.Z)((e) => e.isContentLoaded),
            l = (0, a.useRef)(null),
            [s, c] = (0, m.YD)(),
            [u, d] = (0, m.YD)(),
            g = (0, a.useRef)(null),
            p = (0, a.useRef)(null),
            x = (0, h.q_)({
              x: c ? "0px" : "200px",
              config: {
                mass: 1.5,
                tension: 80,
                friction: 30,
                clamp: !1,
                easing: h.Z5.easeOutQuart,
              },
            }),
            v = (0, h.q_)({
              x: d ? "0px" : "-200px",
              config: {
                mass: 1.5,
                tension: 80,
                friction: 30,
                clamp: !1,
                easing: h.Z5.easeOutQuart,
              },
            });
          return (
            (0, a.useEffect)(() => {
              d && c
                ? (d || c) &&
                  (g.current.autoplay.resume, p.current.autoplay.resume)
                : (g.current.autoplay.pause, p.current.autoplay.pause);
            }, [d, c]),
            (0, t4.y)(
              () => {
                let e = g.current,
                  t = p.current;
                if (t) {
                  let e = t.el.getBoundingClientRect();
                  t.slides.forEach((t) => {
                    let n = t.getBoundingClientRect(),
                      r = n.left - e.left + n.width,
                      i = (0, e9.xD)(r / e.width, 0.7, 1, 1, 0);
                    t.style.opacity = "".concat(i);
                  });
                }
                if (e) {
                  let t = e.el.getBoundingClientRect();
                  e.slides.forEach((e) => {
                    let n = e.getBoundingClientRect(),
                      r = t.right - n.right + n.width,
                      i = (0, e9.xD)(r / t.width, 0.7, 1, 1, 0);
                    e.style.opacity = "".concat(i);
                  });
                }
              },
              { framerate: 10 }
            ),
            (0, i.jsxs)(i9, {
              ref: l,
              children: [
                (0, i.jsx)(te, { id: "Team" }),
                (0, i.jsxs)(i8, {
                  ref: s,
                  children: [
                    (0, i.jsx)(ot, {
                      children: (0, i.jsx)(G, {
                        to: (null == r ? void 0 : r.firstText)
                          ? null == r
                            ? void 0
                            : r.firstText
                          : "-",
                        enabled: o,
                      }),
                    }),
                    (0, i.jsx)(on, {
                      style: x,
                      children: (0, i.jsx)(e2.tq, {
                        onSwiper: (e) => (g.current = e),
                        slidesPerView: 4.5,
                        spaceBetween: 36,
                        className: "swiper",
                        modules: [e1.W_, e1.LW, e1.s5, e1.pt],
                        scrollbar: { draggable: !1 },
                        autoplay: { delay: 0, disableOnInteraction: !1 },
                        speed: 3e3,
                        loop: !0,
                        children:
                          null == r
                            ? void 0
                            : null === (t = r.logos) || void 0 === t
                            ? void 0
                            : t.map((e, t) =>
                                (0, i.jsx)(
                                  e2.o5,
                                  {
                                    style: {
                                      transition: "opacity 0.5s",
                                      position: "relative",
                                    },
                                    children: (0, i.jsx)(nM(), {
                                      src: e.filename,
                                      width: 80,
                                      height: 40,
                                      alt: "",
                                    }),
                                  },
                                  t
                                )
                              ),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(oe, {
                  ref: u,
                  children: [
                    (0, i.jsx)(or, {
                      style: v,
                      children: (0, i.jsx)(e2.tq, {
                        onSwiper: (e) => (p.current = e),
                        slidesPerView: 4.5,
                        spaceBetween: 36,
                        className: "swiper",
                        modules: [e1.W_, e1.LW, e1.s5, e1.pt],
                        scrollbar: { draggable: !1 },
                        autoplay: { delay: 0, disableOnInteraction: !1 },
                        speed: 3e3,
                        loop: !0,
                        style: { direction: "rtl" },
                        children:
                          null == r
                            ? void 0
                            : null === (n = r.logos) || void 0 === n
                            ? void 0
                            : n.map((e, t) =>
                                (0, i.jsx)(
                                  e2.o5,
                                  {
                                    style: {
                                      transition: "opacity 0.5s",
                                      position: "relative",
                                    },
                                    children: (0, i.jsx)(nM(), {
                                      src: e.filename,
                                      width: 80,
                                      height: 40,
                                      alt: "",
                                    }),
                                  },
                                  t
                                )
                              ),
                      }),
                    }),
                    (0, i.jsx)(ot, {
                      children: (0, i.jsx)(G, {
                        to: (null == r ? void 0 : r.secondText)
                          ? null == r
                            ? void 0
                            : r.secondText
                          : "-",
                        enabled: o,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      function oo() {
        let e = (0, r._)([
          "\n        padding: ",
          " 0;\n        margin: 0;\n    ",
        ]);
        return (
          (oo = function () {
            return e;
          }),
          e
        );
      }
      function ol() {
        let e = (0, r._)([
          "\n        margin: 0;\n        padding: ",
          " 0;\n        overflow: hidden;\n        margin: ",
          " 0;\n    ",
        ]);
        return (
          (ol = function () {
            return e;
          }),
          e
        );
      }
      function os() {
        let e = (0, r._)(["\n        padding: ", " 0;    \n    "]);
        return (
          (os = function () {
            return e;
          }),
          e
        );
      }
      function oc() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            margin-bottom: ",
          ";  \n        ",
        ]);
        return (
          (oc = function () {
            return e;
          }),
          e
        );
      }
      function oa() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            margin-bottom: ",
          ";\n        ",
        ]);
        return (
          (oa = function () {
            return e;
          }),
          e
        );
      }
      function ou() {
        let e = (0, r._)(["\n                height: ", ";    \n            "]);
        return (
          (ou = function () {
            return e;
          }),
          e
        );
      }
      function od() {
        let e = (0, r._)([
          "\n                    font-size: ",
          " !important;    \n                ",
        ]);
        return (
          (od = function () {
            return e;
          }),
          e
        );
      }
      function of() {
        let e = (0, r._)([
          "\n                    font-size: ",
          " !important;    \n                ",
        ]);
        return (
          (of = function () {
            return e;
          }),
          e
        );
      }
      function om() {
        let e = (0, r._)(["\n            width: 95%;    \n        "]);
        return (
          (om = function () {
            return e;
          }),
          e
        );
      }
      function oh() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (oh = function () {
            return e;
          }),
          e
        );
      }
      function og() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (og = function () {
            return e;
          }),
          e
        );
      }
      function op() {
        let e = (0, r._)([
          "\n        width: 170%;\n        height: 170%;\n    ",
        ]);
        return (
          (op = function () {
            return e;
          }),
          e
        );
      }
      q()(
        () =>
          Promise.all([
            n.e(737),
            n.e(782),
            n.e(128),
            n.e(854),
            n.e(105),
            n.e(810),
          ])
            .then(n.bind(n, 1810))
            .then((e) => e.EarnedScene),
        { loadableGenerated: { webpack: () => [1810] }, ssr: !1 }
      );
      let ox = c.ZP.div.withConfig({ componentId: "sc-70e0b00d-0" })(
          [
            "padding:0 ",
            ";position:relative;margin:",
            " 0;",
            " ",
            " >:first-child{top:",
            " !important;}",
          ],
          (0, s.rm)(100),
          (0, s.rm)(256),
          s.BC.md(oo(), (0, s.rm)(80)),
          s.BC.xsm(ol(), (0, s.rm)(40), (0, s.rm)(40)),
          (0, s.rm)(-100)
        ),
        ov = c.ZP.div.withConfig({ componentId: "sc-70e0b00d-1" })(
          [
            "position:relative;padding:",
            " 0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;",
            " .backImage{position:absolute;width:122%;height:122%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:contain;z-index:1;pointer-events:none;}.darken{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,1);z-index:2;opacity:0;pointer-events:none;}",
          ],
          (0, s.rm)(93.3),
          s.BC.xsm(os(), (0, s.rm)(40))
        ),
        ow = c.ZP.div.withConfig({ componentId: "sc-70e0b00d-2" })(
          [
            "position:relative;z-index:2;pointer-events:none;display:flex;flex-direction:column;align-items:center;width:100%;.text{margin-bottom:",
            ";display:flex;flex-direction:column;align-items:center;gap:",
            ";width:",
            ";",
            " ",
            " p{height:",
            ";",
            " span{background:linear-gradient(180deg,#B7BCBC 0%,#FFFFFF 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:",
            " !important;",
            " display:flex;align-items:center;justify-content:center;text-align:center !important;",
            " ",
            "}}}.buttonContainer{margin-top:",
            ";pointer-events:all;display:flex;align-items:center;width:",
            ";",
            "}",
          ],
          (0, s.rm)(34),
          (0, s.rm)(24),
          (0, s.rm)(1055),
          s.BC.md(oc(), (0, s.rm)(930), (0, s.rm)(0)),
          s.BC.xsm(oa(), (0, s.rm)(253), (0, s.rm)(28)),
          (0, s.rm)(230),
          s.BC.xsm(ou(), (0, s.rm)(50)),
          (0, s.rm)(80),
          (0, d.rB)(700),
          s.BC.md(od(), (0, s.rm)(56)),
          s.BC.xsm(of(), (0, s.rm)(20)),
          (0, s.rm)(100),
          (0, s.rm)(432),
          s.BC.xsm(om())
        );
      c.ZP.div.withConfig({ componentId: "sc-70e0b00d-3" })(
        [
          "display:flex;justify-content:center;align-items:center;width:70%;position:relative;overflow:hidden;.opacityGradientLeft{position:absolute;top:0;right:",
          ";width:8%;height:100%;background:linear-gradient(to left,rgba(0,0,0,1) 40%,rgba(0,0,0,0) 100%);pointer-events:none;z-index:1;}.opacityGradientRight{position:absolute;top:0;left:",
          ";width:8%;height:100%;background:linear-gradient(to right,rgba(0,0,0,1) 40%,rgba(0,0,0,0) 100%);pointer-events:none;z-index:1;}p{font-size:",
          ";",
          " color:",
          ";text-align:center !important;",
          " ",
          "}",
        ],
        (0, s.rm)(-10),
        (0, s.rm)(-10),
        (0, s.rm)(20),
        (0, d.u2)(400),
        s.O9.grey100,
        s.BC.lg(oh(), (0, s.rm)(18)),
        s.BC.xsm(og(), (0, s.rm)(12))
      );
      let oy = c.ZP.div.withConfig({ componentId: "sc-70e0b00d-4" })(
          [
            "position:absolute;width:100%;height:100%;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;",
            " div{width:100%;height:100%;video{object-fit:contain;}}",
          ],
          s.BC.xsm(op())
        ),
        oC = (e) => {
          var t, n, r, o, l, s;
          let { data: c } = e,
            u = (0, f.Z)((e) => e.isContentLoaded),
            d = (0, a.useRef)({ value: 0 }),
            [m, g] = (0, h.q_)(() => ({
              uActive: 0,
              config: h.vc.gentle,
              onChange: () => {
                d.current.value = m.uActive.get();
              },
            })),
            p = (0, K.Lm)();
          return (0, i.jsxs)(ox, {
            children: [
              (0, i.jsx)(te, { id: "Earned" }),
              (0, i.jsx)(ov, {
                children: (0, i.jsxs)(ow, {
                  children: [
                    (0, i.jsx)("div", {
                      className: "text",
                      children: (0, i.jsx)("p", {
                        children: (0, i.jsx)(G, {
                          enabled: u,
                          to: (null == c ? void 0 : c.title)
                            ? null == c
                              ? void 0
                              : c.title
                            : "-",
                        }),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "buttonContainer",
                      onPointerEnter: () => g.start({ uActive: 0.4 }),
                      onPointerLeave: () => g.start({ uActive: 0 }),
                      children: (0, i.jsx)(er, {
                        link:
                          null == c
                            ? void 0
                            : null === (n = c.button) || void 0 === n
                            ? void 0
                            : null === (t = n[0]) || void 0 === t
                            ? void 0
                            : t.link,
                        children: (
                          null == c
                            ? void 0
                            : null === (o = c.button) || void 0 === o
                            ? void 0
                            : null === (r = o[0]) || void 0 === r
                            ? void 0
                            : r.text
                        )
                          ? null == c
                            ? void 0
                            : null === (s = c.button) || void 0 === s
                            ? void 0
                            : null === (l = s[0]) || void 0 === l
                            ? void 0
                            : l.text
                          : "-",
                      }),
                    }),
                  ],
                }),
              }),
              p > 576 &&
                (0, i.jsx)(oy, {
                  children: (0, i.jsx)(tD, {
                    strategy: "lazy",
                    src: "/earnBg.mp4",
                    poster: "/earnBgPoster.png",
                  }),
                }),
              p <= 576 &&
                (0, i.jsx)(oy, {
                  children: (0, i.jsx)(tD, {
                    strategy: "lazy",
                    src: "/earnBgMobile.mp4",
                    poster: "/earnPosterMobile.webp",
                  }),
                }),
            ],
          });
        };
      function ob() {
        let e = (0, r._)(["\n        padding: ", " ", ";\n    "]);
        return (
          (ob = function () {
            return e;
          }),
          e
        );
      }
      function oj() {
        let e = (0, r._)([
          "\n        padding: ",
          " ",
          ";\n        padding-top: ",
          ";   \n    ",
        ]);
        return (
          (oj = function () {
            return e;
          }),
          e
        );
      }
      function o_() {
        let e = (0, r._)(["\n        font-size: ", ";\n    "]);
        return (
          (o_ = function () {
            return e;
          }),
          e
        );
      }
      function oB() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (oB = function () {
            return e;
          }),
          e
        );
      }
      function oR() {
        let e = (0, r._)(["\n        font-size: ", ";\n    "]);
        return (
          (oR = function () {
            return e;
          }),
          e
        );
      }
      function oT() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (oT = function () {
            return e;
          }),
          e
        );
      }
      function oz() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            height: ",
          ";   \n        ",
        ]);
        return (
          (oz = function () {
            return e;
          }),
          e
        );
      }
      function oE() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            height: ",
          ";   \n        ",
        ]);
        return (
          (oE = function () {
            return e;
          }),
          e
        );
      }
      function oP() {
        let e = (0, r._)(["\n            gap: ", ";    \n        "]);
        return (
          (oP = function () {
            return e;
          }),
          e
        );
      }
      function oI() {
        let e = (0, r._)(["\n        gap: ", ";        \n    "]);
        return (
          (oI = function () {
            return e;
          }),
          e
        );
      }
      function oD() {
        let e = (0, r._)([
          "\n        padding: ",
          " 0 ",
          " 0;\n        flex-direction: column;\n        gap: ",
          ";\n    ",
        ]);
        return (
          (oD = function () {
            return e;
          }),
          e
        );
      }
      function oL() {
        let e = (0, r._)(["\n            gap: ", ";\n        "]);
        return (
          (oL = function () {
            return e;
          }),
          e
        );
      }
      function ok() {
        let e = (0, r._)(["\n            gap: ", ";    \n        "]);
        return (
          (ok = function () {
            return e;
          }),
          e
        );
      }
      function oA() {
        let e = (0, r._)([
          "\n            gap: ",
          ";\n            flex-wrap: wrap;\n            justify-content: space-around;\n        ",
        ]);
        return (
          (oA = function () {
            return e;
          }),
          e
        );
      }
      function oS() {
        let e = (0, r._)(["\n            gap: ", ";    \n        "]);
        return (
          (oS = function () {
            return e;
          }),
          e
        );
      }
      function oZ() {
        let e = (0, r._)([
          "\n            gap: ",
          ";\n            flex-wrap: wrap;\n            justify-content: space-around;\n            padding: 0 ",
          ";\n        ",
        ]);
        return (
          (oZ = function () {
            return e;
          }),
          e
        );
      }
      function oF() {
        let e = (0, r._)([
          "\n                    opacity: 1;    \n                ",
        ]);
        return (
          (oF = function () {
            return e;
          }),
          e
        );
      }
      function oO() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (oO = function () {
            return e;
          }),
          e
        );
      }
      function oN() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (oN = function () {
            return e;
          }),
          e
        );
      }
      function oM() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (oM = function () {
            return e;
          }),
          e
        );
      }
      function oH() {
        let e = (0, r._)(["\n                color: ", ";\n            "]);
        return (
          (oH = function () {
            return e;
          }),
          e
        );
      }
      function oV() {
        let e = (0, r._)(["\n        padding-top: ", ";    \n    "]);
        return (
          (oV = function () {
            return e;
          }),
          e
        );
      }
      function oU() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (oU = function () {
            return e;
          }),
          e
        );
      }
      let oq = q()(
          () =>
            Promise.all([
              n.e(737),
              n.e(782),
              n.e(128),
              n.e(854),
              n.e(673),
              n.e(105),
              n.e(141),
            ])
              .then(n.bind(n, 5141))
              .then((e) => e.CoinScene),
          { loadableGenerated: { webpack: () => [5141] }, ssr: !1 }
        ),
        oG = c.ZP.div.withConfig({ componentId: "sc-723668d6-0" })(
          [
            "width:100%;padding:",
            ";padding-top:",
            ";border-top:1px solid #3F3F3F;position:relative;overflow:hidden;background-color:",
            ";",
            " ",
            "",
          ],
          (0, s.rm)(100),
          (0, s.rm)(50),
          s.O9.black100,
          s.BC.md(ob(), (0, s.rm)(80), (0, s.rm)(40)),
          s.BC.xsm(oj(), (0, s.rm)(40), (0, s.rm)(16), (0, s.rm)(60))
        ),
        oW = c.ZP.p.withConfig({ componentId: "sc-723668d6-1" })(
          [
            "font-size:",
            ";",
            ";color:",
            ";line-height:130%;text-transform:uppercase;",
            " ",
            "",
          ],
          (0, s.rm)(72),
          (0, d.rB)(600),
          s.O9.white100,
          s.BC.lg(o_(), (0, s.rm)(70)),
          s.BC.xsm(oB(), (0, s.rm)(20))
        ),
        oX = c.ZP.p.withConfig({ componentId: "sc-723668d6-2" })(
          [
            "font-size:",
            ";color:",
            ";text-transform:uppercase;line-height:100%;",
            ";",
            " ",
            "",
          ],
          (0, s.rm)(92),
          s.O9.green100,
          (0, d.ul)(400),
          s.BC.lg(oR(), (0, s.rm)(88)),
          s.BC.xsm(oT(), (0, s.rm)(24))
        ),
        oY = c.ZP.div.withConfig({ componentId: "sc-723668d6-3" })(
          [
            "display:flex;position:relative;z-index:1;pointer-events:none;justify-content:space-between;width:100%;align-items:center;mix-blend-mode:screen;>:last-child{width:",
            ";height:",
            ";",
            " ",
            "}.topText{display:flex;flex-direction:column;gap:",
            ";position:relative;z-index:1;pointer-events:none;",
            "}",
          ],
          (0, s.rm)(333),
          (0, s.rm)(324),
          s.BC.md(oz(), (0, s.rm)(243), (0, s.rm)(234)),
          s.BC.xsm(oE(), (0, s.rm)(97), (0, s.rm)(83)),
          (0, s.rm)(40),
          s.BC.md(oP(), (0, s.rm)(7))
        ),
        oQ = c.ZP.div.withConfig({ componentId: "sc-723668d6-4" })(
          [
            "display:flex;justify-content:space-between;width:100%;padding:",
            " 0 ",
            " 0;position:relative;z-index:1;",
            " ",
            " .top{display:flex;gap:",
            ";width:100%;",
            " ",
            " ",
            "}.bottom{display:flex;justify-content:space-between;width:auto;gap:",
            ";",
            " ",
            " a{color:",
            ";transition:opacity 0.4s ease;&:hover{opacity:0.7;",
            "}}}a{font-size:",
            ";",
            ";color:",
            ";text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:color 0.4s ease;",
            " ",
            " ",
            " &:hover{color:",
            ";",
            "}}",
          ],
          (0, s.rm)(80),
          (0, s.rm)(20),
          s.BC.md(oI(), (0, s.rm)(20)),
          s.BC.xsm(oD(), (0, s.rm)(33), (0, s.rm)(38), (0, s.rm)(32)),
          (0, s.rm)(56),
          s.BC.lg(oL(), (0, s.rm)(32)),
          s.BC.md(ok(), (0, s.rm)(20)),
          s.BC.xsm(oA(), (0, s.rm)(24)),
          (0, s.rm)(32),
          s.BC.md(oS(), (0, s.rm)(20)),
          s.BC.xsm(oZ(), (0, s.rm)(40), (0, s.rm)(25)),
          s.O9.green100,
          s.BC.md(oF()),
          (0, s.rm)(18),
          (0, d.u2)(400),
          s.O9.white100,
          s.BC.lg(oO(), (0, s.rm)(16)),
          s.BC.md(oN(), (0, s.rm)(15)),
          s.BC.xsm(oM(), (0, s.rm)(12)),
          s.O9.green100,
          s.BC.md(oH(), s.O9.white100)
        ),
        oK = c.ZP.div.withConfig({ componentId: "sc-723668d6-5" })([
          "width:200%;height:1px;background-color:#3F3F3F;position:absolute;bottom:0;left:-50%;",
        ]),
        o$ = c.ZP.div.withConfig({ componentId: "sc-723668d6-6" })(
          [
            "padding-top:",
            ";position:relative;z-index:1;",
            " p{font-size:",
            ";",
            ";color:#979899;text-transform:uppercase;",
            "}",
          ],
          (0, s.rm)(50),
          s.BC.xsm(oV(), (0, s.rm)(20)),
          (0, s.rm)(14),
          (0, d.u2)(400),
          s.BC.xsm(oU(), (0, s.rm)(10))
        ),
        oJ = c.ZP.div.withConfig({ componentId: "sc-723668d6-7" })([
          "position:absolute;width:100%;height:50%;left:0;bottom:0;z-index:0;div{width:100%;height:100%;video{object-fit:cover;}}",
        ]),
        o0 = (e) => {
          var t, n;
          let { data: r } = e,
            o = (0, a.useRef)(null),
            l = (0, f.Z)((e) => e.isContentLoaded),
            s = (0, K.Lm)();
          return (0, i.jsxs)(oG, {
            ref: o,
            children: [
              (0, i.jsx)(te, { id: "Footer" }),
              (0, i.jsxs)(oY, {
                children: [
                  (0, i.jsxs)("div", {
                    className: "topText",
                    children: [
                      (0, i.jsx)(oW, {
                        children: (0, i.jsx)(G, {
                          enabled: l,
                          to: (null == r ? void 0 : r.firstTitle)
                            ? null == r
                              ? void 0
                              : r.firstTitle
                            : "-",
                        }),
                      }),
                      (0, i.jsx)(oX, {
                        children: (0, i.jsx)(G, {
                          enabled: l,
                          to: (null == r ? void 0 : r.secondTitle)
                            ? null == r
                              ? void 0
                              : r.secondTitle
                            : "-",
                        }),
                      }),
                    ],
                  }),
                  s > 576 && (0, i.jsx)(oq, {}),
                  s <= 576 &&
                    (0, i.jsx)(tD, {
                      strategy: "lazy",
                      poster: "/liquidity/trenPoster.webp",
                      src: "/liquidity/tren-logo-video.mp4",
                    }),
                ],
              }),
              (0, i.jsxs)(oQ, {
                children: [
                  (0, i.jsx)("div", {
                    className: "top",
                    children:
                      null == r
                        ? void 0
                        : null === (t = r.anchors) || void 0 === t
                        ? void 0
                        : t.map((e, t) =>
                            (0, i.jsx)(
                              "a",
                              {
                                onClick: () => C(e.id),
                                children: (0, i.jsx)(b, { text: e.text }),
                              },
                              t
                            )
                          ),
                  }),
                  (0, i.jsx)("div", {
                    className: "bottom",
                    children:
                      null == r
                        ? void 0
                        : null === (n = r.socials) || void 0 === n
                        ? void 0
                        : n.map((e, t) =>
                            (0, i.jsx)(
                              "a",
                              {
                                href: e.href,
                                target: "_blank",
                                children: (0, i.jsx)(b, {
                                  text: e.name ? e.name : "-",
                                }),
                              },
                              t
                            )
                          ),
                  }),
                  (0, i.jsx)(oK, {}),
                ],
              }),
              (0, i.jsx)(o$, {
                children: (0, i.jsx)("p", {
                  children:
                    " T3 Venture Labs Limited \xa9 2025 All Rights Reserved",
                }),
              }),
              s > 576 &&
                (0, i.jsx)(oJ, {
                  children: (0, i.jsx)(tD, {
                    strategy: "lazy",
                    src: "/footerScene.mp4",
                    poster: "/footerPcPoster.jpg",
                  }),
                }),
              s <= 576 &&
                (0, i.jsx)(oJ, {
                  children: (0, i.jsx)(tD, {
                    src: "/footerBgMobile.mp4",
                    poster: "/footerPosterMobile.webp",
                  }),
                }),
            ],
          });
        },
        o1 = c.ZP.div.withConfig({ componentId: "sc-10da67d-0" })(
          [
            "position:fixed;width:100%;height:100%;top:0;left:0;z-index:1000000;pointer-events:none;user-select:none;border:",
            " solid black;",
          ],
          (0, s.rm)(25)
        ),
        o2 = c.ZP.div.withConfig({ componentId: "sc-10da67d-1" })([
          "position:relative;height:100%;width:100%;svg{position:absolute;top:0;left:0;width:100%;height:100%;}",
        ]),
        o5 = (e, t) =>
          "\n      M"
            .concat(e / 2, ",0\n      H60\n      L0,60\n      V")
            .concat(t, "\n      H")
            .concat(e / 2, "\n    ")
            .trim(),
        o4 = (e, t) =>
          "\n      M"
            .concat(e / 2, ",0\n      H")
            .concat(e, "\n      V")
            .concat(t - 30, "\n      L")
            .concat(e - 30, ",")
            .concat(t, "\n      H")
            .concat(e / 2, "\n    ")
            .trim(),
        o6 = {
          borderLeftRef: null,
          borderRightRef: null,
          pathLength1: -1,
          pathLength2: -1,
          borderRef: null,
        },
        o3 = () => {
          let [e, t] = (0, a.useState)({ width: 0, height: 0 }),
            n = (0, a.useRef)(null),
            r = (0, a.useRef)(null),
            [o, l] = (0, a.useState)(-1),
            [s, c] = (0, a.useState)(-1),
            u = (0, a.useRef)(null);
          (0, a.useEffect)(() => {
            let e = () => {
              u.current &&
                t({
                  width: u.current.clientWidth,
                  height: u.current.clientHeight,
                });
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []);
          let d = (0, a.useMemo)(
              () => (e.width && e.height ? o5(e.width, e.height) : ""),
              [e]
            ),
            f = (0, a.useMemo)(
              () => (e.width && e.height ? o4(e.width, e.height) : ""),
              [e]
            );
          return (
            (0, a.useEffect)(() => {
              if (d && n.current) {
                let e = n.current.getTotalLength();
                l(e), (o6.pathLength1 = e);
              }
            }, [d]),
            (0, a.useEffect)(() => {
              if (f && r.current) {
                let e = r.current.getTotalLength();
                c(e), (o6.pathLength2 = e);
              }
            }, [f]),
            (o6.borderLeftRef = n),
            (o6.borderRightRef = r),
            (o6.borderRef = u),
            (0, i.jsx)(o1, {
              ref: u,
              children: (0, i.jsx)(o2, {
                children: (0, i.jsxs)("svg", {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 ".concat(e.width, " ").concat(e.height),
                  style: { opacity: -1 === o || -1 === s ? 0 : 1 },
                  children: [
                    (0, i.jsx)(h.q.path, {
                      ref: n,
                      d: d,
                      stroke: "#2D2D2D",
                      fill: "none",
                      strokeWidth: "1",
                      strokeLinecap: "square",
                      style: { strokeDasharray: o, strokeDashoffset: o },
                    }),
                    (0, i.jsx)(h.q.path, {
                      ref: r,
                      d: f,
                      stroke: "#2D2D2D",
                      fill: "none",
                      strokeWidth: "1",
                      strokeLinecap: "square",
                      style: { strokeDasharray: s, strokeDashoffset: s },
                    }),
                  ],
                }),
              }),
            })
          );
        },
        o7 = (0, a.forwardRef)((e, t) => {
          let {
              randomCharsString: n = "Ab#Y",
              duration: r = 700,
              tag: o = "a",
              onPointerEnter: l,
              children: s,
              mode: c = "auto",
              ...u
            } = e,
            [d, f] = (0, a.useState)(s),
            m = (0, a.useCallback)(
              () => n[Math.floor(Math.random() * n.length)],
              [n]
            ),
            g = (0, a.useCallback)(
              (e, t) => {
                let n = [],
                  r = e.length;
                for (let i = 0; i < r; i++)
                  t < i / r ? n.push(m()) : n.push(e[i]);
                return n.join("");
              },
              [m]
            ),
            [p, x] = (0, h.q_)(() => ({
              progress: 0,
              config: { duration: r },
              onChange: (e) => {
                f(g(s, e.value.progress));
              },
              onRest: () => {
                f(s);
              },
            })),
            v = (0, a.useCallback)(() => {
              x.start({ from: { progress: 0 }, to: { progress: 1 } });
            }, [x]);
          (0, a.useImperativeHandle)(t, () => ({
            play: v,
            playOut: () =>
              x.start({ from: { progress: 1 }, to: { progress: 0 } }),
          }));
          let w = () => {
            "auto" === c && v();
          };
          return (0, i.jsxs)(o9, {
            tag: o,
            onMouseEnter: (e) => {
              null == l || l(e), w();
            },
            style: { cursor: "pointer", position: "relative" },
            ...u,
            children: [
              (0, i.jsx)("span", {
                style: { position: "absolute", top: 0, left: 0 },
                children: d,
              }),
              (0, i.jsx)("span", {
                style: {
                  visibility: "hidden",
                  userSelect: "none",
                  pointerEvents: "none",
                },
                children: s,
              }),
            ],
          });
        });
      o7.displayName = "GlitchHoverText";
      let o9 = (0, a.forwardRef)((e, t) => {
        let { tag: n = "span", children: r, className: o, style: l, ...s } = e,
          c = (0, a.useRef)(null);
        return (
          (0, a.useImperativeHandle)(t, () => c.current),
          (0, i.jsx)(n, { ref: c, className: o, style: l, ...s, children: r })
        );
      });
      function o8() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (o8 = function () {
            return e;
          }),
          e
        );
      }
      function le() {
        let e = (0, r._)(["\n        width: ", ";    \n    "]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      o9.displayName = "VarTextTag";
      let lt = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-c0fa7bbb-0" })(
          [
            "position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;transform:translate(0,0,0);overflow:hidden;pointer-events:none;gap:",
            ";z-index:220;background-color:",
            ";",
          ],
          (0, s.rm)(25),
          s.O9.black100
        ),
        ln = (0, c.ZP)(h.q.p).withConfig({ componentId: "sc-c0fa7bbb-1" })(
          ["font-size:", ";", ";color:", ";position:relative;z-index:1;", ""],
          (0, s.rm)(30),
          (0, d.u2)(400),
          s.O9.white100,
          s.BC.xsm(o8(), (0, s.rm)(22))
        ),
        lr = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-c0fa7bbb-2" })(
          [
            "width:",
            ";height:",
            ";background-color:rgba(255,255,255,.6);border-radius:",
            ";position:relative;overflow:hidden;",
            " .left{position:absolute;top:0;left:0;width:50%;height:100%;background-color:rgba(255,255,255,1.0);transform:translate(-100%,0);}.right{position:absolute;top:0;right:0;width:50%;height:100%;background-color:rgba(255,255,255,1.0);transform:translate(100%,0);}",
          ],
          (0, s.rm)(700),
          (0, s.rm)(5),
          (0, s.rm)(2),
          s.BC.xsm(le(), (0, s.rm)(336))
        );
      function li(e) {
        var t, n;
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.1;
        (null === (t = o6.borderLeftRef) || void 0 === t
          ? void 0
          : t.current) &&
          (null === (n = o6.borderRightRef) || void 0 === n
            ? void 0
            : n.current) &&
          o6.pathLength1 >= 0 &&
          o6.pathLength2 >= 0 &&
          ((o6.borderLeftRef.current.style.strokeDashoffset = (0, tL.t7)(
            parseInt(o6.borderLeftRef.current.style.strokeDashoffset),
            o6.pathLength1 * (1 - e / 100),
            r
          ).toString()),
          (o6.borderRightRef.current.style.strokeDashoffset = (0, tL.t7)(
            parseInt(o6.borderRightRef.current.style.strokeDashoffset),
            o6.pathLength2 * (1 - e / 100),
            r
          ).toString()));
      }
      let lo = () => {
          let { fullyLoaded: e, progress: t } = (0, X.Oz)(),
            n = (0, a.useRef)(null),
            [r, o] = (0, a.useState)(!0),
            l = (0, f.Z)((e) => e.isContentLoaded),
            s = (0, f.Z)((e) => e.setIsContentLoaded),
            c = (0, a.useRef)(l),
            u = (0, f.Z)((e) => e.isSceneReady);
          (0, a.useEffect)(() => {
            c.current = l;
          }, [l]);
          let d = (0, a.useRef)(null),
            m = (0, a.useRef)(null),
            g = (0, a.useRef)(null),
            p = (0, a.useRef)(null),
            x = (0, a.useRef)(0);
          (0, a.useEffect)(() => {
            u && (x.current = t);
          }, [t, u]);
          let v = (0, a.useRef)(0);
          (0, a.useEffect)(() => {
            e && u && (x.current = 100);
          }, [e, u]);
          let w = (0, y.v)((e) => e.isEnableScroll);
          (0, a.useEffect)(() => {
            let { start: e, stop: t } = y.v.getState();
            l && !w ? e() : !l && w && t();
          }, [l, w]);
          let C = (0, h.q_)({
              opacity: l ? 0 : 1,
              config: h.vc.gentle,
              delay: l ? 400 : 0,
              onChange: (e) => {
                0 === e.value.opacity && c.current && o(!1);
              },
            }),
            b = (0, h.q_)({
              maxWidth: l ? 0 : 700,
              opacity: l ? 0 : 1,
              config: h.vc.gentle,
            }),
            j = (0, h.q_)({
              opacity: l ? 0 : 1,
              delay: l ? 300 : 0,
              config: h.vc.gentle,
            });
          return ((0, a.useEffect)(() => {
            setTimeout(() => {
              n.current && n.current.play();
            }, 500);
          }, []),
          (0, t4.y)(
            () => {
              if (c.current || !p.current || !m.current || !g.current) return;
              v.current = (0, tL.t7)(v.current, x.current, 0.1);
              let e = v.current;
              (m.current.style.transform = "translate(".concat(
                -100 + e,
                "%, 0%)"
              )),
                (g.current.style.transform = "translate(".concat(
                  100 - e,
                  "%, 0%)"
                )),
                (p.current.innerHTML = "".concat(Math.round(e), "%")),
                li(v.current),
                e >= 99.99 &&
                  (s(!0), li(100, 1), n.current && n.current.playOut());
            },
            { framerate: 30 }
          ),
          r)
            ? (0, i.jsxs)(lt, {
                style: C,
                children: [
                  (0, i.jsx)(h.q.div, {
                    style: j,
                    children: (0, i.jsx)(ln, { ref: p, children: "0%" }),
                  }),
                  (0, i.jsxs)(lr, {
                    style: b,
                    ref: d,
                    children: [
                      (0, i.jsx)("div", { ref: m, className: "left" }),
                      (0, i.jsx)("div", { ref: g, className: "right" }),
                    ],
                  }),
                  (0, i.jsx)(ln, {
                    style: j,
                    children: (0, i.jsx)(o7, {
                      tag: "span",
                      ref: n,
                      mode: "manual",
                      children: "Loading",
                    }),
                  }),
                ],
              })
            : null;
        },
        ll = () => {
          let e = (0, K.Lm)();
          return (0, i.jsxs)(i.Fragment, {
            children: [e > 1024 && (0, i.jsx)(o3, {}), (0, i.jsx)(lo, {})],
          });
        };
      function ls() {
        let e = (0, r._)([
          "\n        font-size: ",
          ";\n        line-height: 150%;\n    ",
        ]);
        return (
          (ls = function () {
            return e;
          }),
          e
        );
      }
      function lc() {
        let e = (0, r._)([
          "\n        width: 100%;\n        font-size: ",
          ";\n        line-height: 130%;    \n    ",
        ]);
        return (
          (lc = function () {
            return e;
          }),
          e
        );
      }
      let la = c.ZP.div.withConfig({ componentId: "sc-bb9dd14a-0" })(
          [
            "width:",
            ";font-size:",
            ";",
            ";line-height:130%;display:flex;flex-direction:column;justify-content:center;align-items:center;color:",
            ";",
            " ",
            "",
          ],
          (0, s.rm)(576),
          (0, s.rm)(18),
          (0, d.u2)(400),
          s.O9.grey100,
          s.BC.lg(ls(), (0, s.rm)(16)),
          s.BC.xsm(lc(), (0, s.rm)(14))
        ),
        lu = (e) => {
          let { activeIndex: t, index: n, height: r, answer: o } = e,
            l = (0, a.useMemo)(
              () => ({
                position: "relative",
                maxHeight:
                  -1 === r ? "auto" : t === n ? "".concat(r, "px") : "0px",
                transition: "max-height 0.8s ease",
                overflow: "hidden",
              }),
              [t, r]
            );
          return (0, i.jsx)(la, { style: l, children: o });
        };
      function ld() {
        let e = (0, r._)(["\n        font-size: ", ";\n    "]);
        return (
          (ld = function () {
            return e;
          }),
          e
        );
      }
      function lf() {
        let e = (0, r._)([
          "\n        font-size: ",
          ";\n        width: 100%; \n        padding-bottom: ",
          ";   \n    ",
        ]);
        return (
          (lf = function () {
            return e;
          }),
          e
        );
      }
      function lm() {
        let e = (0, r._)([
          "\n        width: ",
          ";\n        height: ",
          ";\n        margin-top: ",
          ";  \n    ",
        ]);
        return (
          (lm = function () {
            return e;
          }),
          e
        );
      }
      let lh = c.ZP.div.withConfig({ componentId: "sc-4647ee3b-0" })([
          "width:100%;position:relative;transition:background-color .2s ease-in-out,transform .25s ease;",
        ]),
        lg = c.ZP.div.withConfig({ componentId: "sc-4647ee3b-1" })([
          "display:flex;cursor:pointer;justify-content:space-between;width:100%;position:relative;z-index:100;",
        ]),
        lp = c.ZP.div.withConfig({ componentId: "sc-4647ee3b-2" })(
          [
            "font-size:",
            ";",
            ";color:",
            ";padding-bottom:",
            ";width:90%;",
            " ",
            "",
          ],
          (0, s.rm)(24),
          (0, d.rB)(600),
          s.O9.white100,
          (0, s.rm)(24),
          s.BC.lg(ld(), (0, s.rm)(22)),
          s.BC.xsm(lf(), (0, s.rm)(14), (0, s.rm)(8))
        ),
        lx = c.ZP.div.withConfig({ componentId: "sc-4647ee3b-3" })(
          [
            "position:relative;width:",
            ";height:",
            ";cursor:pointer;margin-top:",
            ";",
            ' &.active{&:before{transform:translatey(-50%) rotate(-90deg);opacity:0;}&:after{transform:translatey(-50%) rotate(0);}}.first,.second{content:"";display:block;background-color:',
            ";position:absolute;top:50%;left:0;width:100%;height:",
            ";transition:transform .35s,opacity .35s;}.first{transform:translatey(-50%);}.second{transform:translatey(-50%) rotate(90deg);}",
          ],
          (0, s.rm)(18),
          (0, s.rm)(18),
          (0, s.rm)(7),
          s.BC.xsm(lm(), (0, s.rm)(14), (0, s.rm)(14), (0, s.rm)(5)),
          s.O9.green100,
          (0, s.rm)(2)
        ),
        lv = (e) => {
          let {
              question: t,
              answer: n,
              index: r,
              activeIndex: o,
              setActiveIndex: l,
            } = e,
            s = (0, a.useRef)(null),
            [c, u] = (0, a.useState)(-1);
          (0, a.useEffect)(() => {
            var e;
            let t =
              null == s
                ? void 0
                : null === (e = s.current) || void 0 === e
                ? void 0
                : e.offsetHeight;
            setTimeout(() => {
              u(t);
            }, 0);
          }, [s]);
          let d = (0, h.q_)({
              transform:
                o == r
                  ? "translatey(-50%) rotate(-90deg)"
                  : "translatey(-50%) rotate(0deg)",
              opacity: o == r ? 0 : 1,
              config: { duration: 100, easing: h.Z5.easeInOutCubic },
            }),
            f = (0, h.q_)({
              transform:
                o == r
                  ? "translatey(-50%) rotate(0)"
                  : "translatey(-50%) rotate(90deg)",
              config: { duration: 100, easing: h.Z5.easeInOutCubic },
            });
          return (0, i.jsxs)(lh, {
            ref: s,
            children: [
              (0, i.jsxs)(lg, {
                onClick: () => {
                  o === r ? l(-1) : l(r);
                },
                children: [
                  (0, i.jsx)(lp, { children: t }),
                  (0, i.jsxs)(lx, {
                    children: [
                      (0, i.jsx)(h.q.div, { className: "first", style: d }),
                      (0, i.jsx)(h.q.div, { className: "second", style: f }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(lu, {
                activeIndex: o,
                index: r,
                height: c,
                answer: n,
              }),
            ],
          });
        };
      function lw() {
        let e = (0, r._)([
          "\n        gap: ",
          ";\n        padding: ",
          " ",
          ";    \n    ",
        ]);
        return (
          (lw = function () {
            return e;
          }),
          e
        );
      }
      function ly() {
        let e = (0, r._)([
          "\n        padding: ",
          " ",
          ";\n        gap: ",
          ";\n        flex-direction: column;  \n    ",
        ]);
        return (
          (ly = function () {
            return e;
          }),
          e
        );
      }
      function lC() {
        let e = (0, r._)([
          "\n        font-size:",
          ";\n        width: ",
          ";\n    ",
        ]);
        return (
          (lC = function () {
            return e;
          }),
          e
        );
      }
      function lb() {
        let e = (0, r._)([
          "\n        font-size: ",
          ";\n        width: 100%;    \n    ",
        ]);
        return (
          (lb = function () {
            return e;
          }),
          e
        );
      }
      function lj() {
        let e = (0, r._)(["\n        gap: ", ";    \n    "]);
        return (
          (lj = function () {
            return e;
          }),
          e
        );
      }
      let l_ = c.ZP.div.withConfig({ componentId: "sc-82f35a48-0" })(
          [
            "padding:",
            " ",
            " ",
            " ",
            ";display:flex;gap:",
            ";position:relative;",
            " ",
            "",
          ],
          (0, s.rm)(140),
          (0, s.rm)(100),
          (0, s.rm)(100),
          (0, s.rm)(100),
          (0, s.rm)(260),
          s.BC.md(lw(), (0, s.rm)(40), (0, s.rm)(80), (0, s.rm)(40)),
          s.BC.xsm(ly(), (0, s.rm)(40), (0, s.rm)(16), (0, s.rm)(23))
        ),
        lB = c.ZP.p.withConfig({ componentId: "sc-82f35a48-1" })(
          [
            "font-size:",
            ";",
            ";color:",
            ";width:",
            ";line-height:130%;margin-top:",
            ";",
            " ",
            "",
          ],
          (0, s.rm)(56),
          (0, d.rB)(700),
          s.O9.white100,
          (0, s.rm)(414),
          (0, s.rm)(-10),
          s.BC.md(lC(), (0, s.rm)(48), (0, s.rm)(270)),
          s.BC.xsm(lb(), (0, s.rm)(28))
        ),
        lR = c.ZP.div.withConfig({ componentId: "sc-82f35a48-2" })(
          ["display:flex;width:100%;flex-direction:column;gap:", ";", ""],
          (0, s.rm)(70),
          s.BC.xsm(lj(), (0, s.rm)(32))
        ),
        lT = (e) => {
          var t;
          let { data: n } = e,
            [r, o] = (0, a.useState)(-1);
          return (0, i.jsxs)(l_, {
            children: [
              (0, i.jsx)(te, { id: "FAQ" }),
              (0, i.jsx)(lB, {
                children: (null == n ? void 0 : n.title)
                  ? null == n
                    ? void 0
                    : n.title
                  : "-",
              }),
              (0, i.jsx)(lR, {
                children:
                  null == n
                    ? void 0
                    : null === (t = n.accordions) || void 0 === t
                    ? void 0
                    : t.map((e, t) =>
                        (0, i.jsx)(
                          lv,
                          {
                            question: null == e ? void 0 : e.question,
                            answer: null == e ? void 0 : e.answer,
                            index: t,
                            activeIndex: r,
                            setActiveIndex: o,
                          },
                          t
                        )
                      ),
              }),
            ],
          });
        };
      function lz() {
        let e = (0, r._)(["\n        display: none;    \n    "]);
        return (
          (lz = function () {
            return e;
          }),
          e
        );
      }
      let lE = c.ZP.div.withConfig({ componentId: "sc-b8fee308-0" })(
          [
            "position:fixed;right:",
            ";top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:",
            ";z-index:201;align-items:flex-end;",
            " .bar{position:relative;height:",
            ';background-color:#3c3b3b;cursor:pointer;transition:width 0.5s ease-in-out,background-color 0.5s ease-in-out;&:before{content:"";position:absolute;top:-',
            ";left:0;right:0;height:",
            ";background:transparent;}&:hover{background-color:",
            " !important;}}",
          ],
          (0, s.rm)(45),
          (0, s.rm)(10),
          s.BC.xsm(lz()),
          (0, s.rm)(4),
          (0, s.rm)(2),
          (0, s.rm)(14),
          s.O9.white100
        ),
        lP = (e) => {
          let { navigationData: t, screens: n, progressBarRef: r } = e,
            o = (0, f.Z)((e) => e.setCurrentScreenId),
            l = (0, f.Z)((e) => e.currentScreenId);
          (0, f.Z)((e) => e.isScrolling);
          let s = (0, f.Z)((e) => e.setIsScrolling),
            c = (0, K.Lm)(),
            a = t.findIndex((e) => e.id === l);
          return (0, i.jsx)(i.Fragment, {
            children:
              c > 576 &&
              (0, i.jsx)(lE, {
                ref: r,
                children: t.map((e, n) => {
                  let r = 1 - Math.abs(n - a) / (t.length - 1),
                    c = l === e.id;
                  return (0, i.jsx)(
                    "div",
                    {
                      className: "bar",
                      onClick: () => {
                        console.log(e.id),
                          s(!0),
                          C(e.id),
                          setTimeout(() => {
                            s(!1);
                          }, 1e3),
                          o(e.id);
                      },
                      style: {
                        width: "".concat(20 + 30 * r, "px"),
                        backgroundColor: c ? "#23FAAD" : "#3C3B3B",
                      },
                    },
                    n
                  );
                }),
              }),
          });
        };
      function lI() {
        let e = (0, r._)(["\n        height: ", ";    \n    "]);
        return (
          (lI = function () {
            return e;
          }),
          e
        );
      }
      function lD() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            height: ",
          ";    \n        ",
        ]);
        return (
          (lD = function () {
            return e;
          }),
          e
        );
      }
      function lL() {
        let e = (0, r._)([
          "\n        top: ",
          ";\n        width: calc(var(--vh, 1lvh) * 180);\n        width: 100%;\n        height: ",
          ";\n        ",
          ";\n    ",
        ]);
        return (
          (lL = function () {
            return e;
          }),
          e
        );
      }
      function lk() {
        let e = (0, r._)([
          "\n      width: ",
          ";\n      height: ",
          ";\n      transform: rotate(",
          "deg) translate(60vh);\n      transform: rotate(",
          "deg) translate(calc(var(--vh, 1lvh) * 60));\n  ",
        ]);
        return (
          (lk = function () {
            return e;
          }),
          e
        );
      }
      let lA = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-e1731eca-0" })(
          [
            "position:relative;width:100%;height:",
            ";display:flex;align-items:center;justify-content:center;overflow:hidden;.circleWrapper{position:absolute;top:0%;left:0%;width:100%;height:100%;}",
            " .opacityGradient{position:absolute;bottom:",
            ";width:",
            ";height:",
            ";background:linear-gradient( to left,rgba(0,0,0,1) 40%,rgba(0,0,0,0) 100% );pointer-events:none;z-index:1;",
            "}.rightGradient{right:",
            ";transform:rotate(40deg);}.leftGradient{left:",
            ";transform:rotate(130deg);}",
          ],
          (0, s.rm)(700),
          s.BC.xsm(lI(), (0, s.rm)(350)),
          (0, s.rm)(-10),
          (0, s.rm)(200),
          (0, s.rm)(150),
          s.BC.xsm(lD(), (0, s.rm)(100), (0, s.rm)(70)),
          (0, s.rm)(-40),
          (0, s.rm)(-40)
        ),
        lS = c.ZP.div.withConfig({ componentId: "sc-e1731eca-1" })(
          [
            "position:absolute;top:",
            ";width:calc(var(--vh,1lvh) * 180);",
            ";left:50%;top:5%;transform:translate(-50%,-50%);@media (max-height:800px) and (min-width:1000px){width:calc(var(--vh,1lvh) * 190);",
            ";top:",
            ";@media (max-height:700px){width:calc(var(--vh,1lvh) * 200);",
            " top:",
            ";}@media (max-height:600px){top:",
            ";}@media (max-height:500px){top:",
            ";}}",
            "",
          ],
          (0, s.rm)(0),
          (0, nb.NN)(180),
          (0, nb.NN)(190),
          (0, s.rm)(200),
          (0, nb.NN)(200),
          (0, s.rm)(150),
          (0, s.rm)(200),
          (0, s.rm)(250),
          s.BC.xsm(lL(), (0, s.rm)(0), (0, s.rm)(850), (0, nb.NN)(140))
        ),
        lZ = c.ZP.div.withConfig({ componentId: "sc-e1731eca-2" })(
          [
            "position:absolute;width:",
            ";height:",
            ";top:50%;left:50%;transform-origin:0 0;transform:rotate(",
            "deg) translate(80vh);transform:rotate(",
            "deg) translate(calc(var(--vh,1lvh) * 85));border:1px solid #1f1f1f;overflow:hidden;padding:",
            ";@media (max-height:800px) and (min-width:1000px){transform:rotate(",
            "deg) translate(95vh);transform:rotate(",
            "deg) translate(calc(var(--vh,1lvh) * 105));@media (max-height:700px){transform:rotate(",
            "deg) translate(100vh);transform:rotate(",
            "deg) translate(calc(var(--vh,1lvh) * 110));}@media (max-height:600px){transform:rotate(",
            "deg) translate(110vh);transform:rotate(",
            "deg) translate(calc(var(--vh,1lvh) * 110));}@media (max-height:500px){transform:rotate(",
            "deg) translate(120vh);transform:rotate(",
            "deg) translate(calc(var(--vh,1lvh) * 120));}}",
            " .imageWrapper{width:100%;height:100%;position:relative;padding:",
            ";img{width:90%;height:90%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(90deg);object-fit:contain;}}",
          ],
          (0, s.rm)(60),
          (0, s.rm)(60),
          (e) => e.angle,
          (e) => e.angle,
          (0, s.rm)(4),
          (e) => e.angle,
          (e) => e.angle,
          (e) => e.angle,
          (e) => e.angle,
          (e) => e.angle,
          (e) => e.angle,
          (e) => e.angle,
          (e) => e.angle,
          s.BC.xsm(
            lk(),
            (0, s.rm)(50),
            (0, s.rm)(50),
            (e) => e.angle,
            (e) => e.angle
          ),
          (0, s.rm)(4)
        );
      var lF = (e) => {
        let {
            carouselContainerRef: t,
            carouselCircleRef: n,
            style: r,
            data: o,
          } = e,
          l = (0, a.useRef)(0),
          s = (0, a.useRef)(null),
          { ref: c, inView: u } = (0, m.YD)({ threshold: 0.1 }),
          d = (0, K.Lm)(),
          { angleStep: f, displayedImageCount: h } = (0, a.useMemo)(() => {
            let e = d > 576 ? 65 : 43;
            return { angleStep: 360 / e, displayedImageCount: e };
          }, [d]);
        return (
          (0, t4.y)(
            () => {
              (l.current += 0.05),
                s.current &&
                  (s.current.style.transform =
                    "translate(-50%, 0%) rotate(".concat(l.current, "deg)"));
            },
            { framerate: 10, enabled: u }
          ),
          (0, i.jsxs)(lA, {
            style: r,
            ref: (e) => {
              c(e), t && (t.current = e);
            },
            children: [
              (0, i.jsx)("div", { className: "opacityGradient rightGradient" }),
              (0, i.jsx)("div", { className: "opacityGradient leftGradient" }),
              (0, i.jsx)("div", {
                className: "circleWrapper",
                ref: n,
                children: (0, i.jsx)(lS, {
                  ref: s,
                  children: Array.from({ length: h }, (e, t) => {
                    var n, r, l;
                    return (0, i.jsx)(
                      lZ,
                      {
                        angle: t * f,
                        children: (0, i.jsx)("div", {
                          className: "imageWrapper",
                          children: (0, i.jsx)(nM(), {
                            src:
                              null == o
                                ? void 0
                                : null === (l = o.images) || void 0 === l
                                ? void 0
                                : null ===
                                    (n =
                                      l[
                                        t %
                                          (null == o
                                            ? void 0
                                            : null === (r = o.images) ||
                                              void 0 === r
                                            ? void 0
                                            : r.length)
                                      ]) || void 0 === n
                                ? void 0
                                : n.filename,
                            alt: "",
                            width: 40,
                            height: 40,
                          }),
                        }),
                      },
                      t
                    );
                  }),
                }),
              }),
            ],
          })
        );
      };
      function lO() {
        let e = (0, r._)([
          "\n        margin-top: 0;\n        justify-content: center;\n        align-items: center;\n        padding: ",
          " 0;\n    ",
        ]);
        return (
          (lO = function () {
            return e;
          }),
          e
        );
      }
      function lN() {
        let e = (0, r._)(["\n        font-size: ", ";    \n    "]);
        return (
          (lN = function () {
            return e;
          }),
          e
        );
      }
      function lM() {
        let e = (0, r._)([
          "\n        font-size: ",
          ";\n        text-align: center;\n        width: ",
          ";\n        margin-bottom: ",
          ";  \n        height: ",
          ";\n    ",
        ]);
        return (
          (lM = function () {
            return e;
          }),
          e
        );
      }
      let lH = q()(
          () =>
            Promise.all([
              n.e(737),
              n.e(782),
              n.e(128),
              n.e(854),
              n.e(105),
              n.e(865),
            ])
              .then(n.bind(n, 1865))
              .then((e) => e.PartnersScene),
          { loadableGenerated: { webpack: () => [1865] }, ssr: !1 }
        ),
        lV = c.ZP.div.withConfig({ componentId: "sc-1c5afb26-0" })(
          [
            "position:relative;width:100%;padding:",
            " 0 0 0;display:flex;flex-direction:column;gap:",
            ";",
            " z-index:100;margin-bottom:",
            ";overflow:hidden;mix-blend-mode:screen;",
            "",
          ],
          (0, s.rm)(100),
          (0, s.rm)(34),
          (0, nb.I4)(-25),
          (0, s.rm)(100),
          s.BC.md(lO(), (0, s.rm)(160))
        ),
        lU = c.ZP.p.withConfig({ componentId: "sc-1c5afb26-1" })(
          [
            "font-size:",
            ";",
            ";color:",
            ";text-align:center;background:linear-gradient(180deg,#b7bcbc 0%,#ffffff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:",
            ";",
            " ",
            "",
          ],
          (0, s.rm)(72),
          (0, d.rB)(700),
          s.O9.white100,
          (0, s.rm)(110),
          s.BC.md(lN(), (0, s.rm)(56)),
          s.BC.xsm(
            lM(),
            (0, s.rm)(28),
            (0, s.rm)(288),
            (0, s.rm)(40),
            (0, s.rm)(70)
          )
        ),
        lq = c.ZP.div.withConfig({ componentId: "sc-1c5afb26-2" })([
          "position:absolute;width:100%;height:50%;left:0;bottom:0;z-index:0;mix-blend-mode:screen;div{width:100%;height:100%;video{object-fit:cover;}}",
        ]),
        lG = (e) => {
          let { data: t } = e,
            n = (0, a.useRef)(null),
            r = (0, a.useRef)(),
            o = (0, a.useRef)(null),
            l = (0, a.useRef)(null),
            s = (0, a.useRef)(null),
            c = (0, f.Z)((e) => e.isContentLoaded),
            u = (0, K.Lm)(),
            d = u > 576 ? 150 : 900,
            m = u > 576 ? 0.1 : 0.4;
          return (
            (0, nc.s)({
              trigger: n,
              start: "center center",
              end: "bottom top",
              from: { opacity: "1" },
              to: { opacity: "-3" },
              scrub: !0,
              onChange: (e) => {
                let t = 1 + e.value.progress * m;
                u > 576 &&
                  (r.current &&
                    ((r.current.position.y = (0, tL.t7)(
                      r.current.position.y,
                      e.value.progress * d,
                      0.075
                    )),
                    r.current.scale.set(t, t, t)),
                  o.current &&
                    (o.current.style.transform = "scale(".concat(t, ")")),
                  l.current &&
                    (l.current.style.transform = "translate(0, ".concat(
                      -(e.value.progress * d),
                      "px)"
                    )));
              },
            }),
            (0, i.jsxs)(lV, {
              ref: n,
              children: [
                (0, i.jsx)(te, { id: "Ecosystem" }),
                (0, i.jsx)(lU, {
                  children: (0, i.jsx)(G, {
                    tag: "span",
                    to: (null == t ? void 0 : t.title)
                      ? null == t
                        ? void 0
                        : t.title
                      : "-",
                    immediateOut: !0,
                    enabled: c,
                  }),
                }),
                (0, i.jsx)(lF, {
                  data: t,
                  carouselCircleRef: l,
                  carouselContainerRef: o,
                }),
                u > 576 && (0, i.jsx)(lH, { additionalRef: r }),
                u < 576 &&
                  (0, i.jsx)(lq, {
                    ref: s,
                    children: (0, i.jsx)(tD, {
                      strategy: "lazy",
                      src: "/planetMobile.mp4",
                      poster: "/footerPosterMobile.webp",
                    }),
                  }),
              ],
            })
          );
        };
      function lW() {
        let e = (0, r._)(["\n        padding: ", " ", " ", " ", ";\n    "]);
        return (
          (lW = function () {
            return e;
          }),
          e
        );
      }
      function lX() {
        let e = (0, r._)(["\n            color: ", ";\n        "]);
        return (
          (lX = function () {
            return e;
          }),
          e
        );
      }
      function lY() {
        let e = (0, r._)(["\n        font-size: ", ";\n    "]);
        return (
          (lY = function () {
            return e;
          }),
          e
        );
      }
      function lQ() {
        let e = (0, r._)(["\n        gap: ", ";\n    "]);
        return (
          (lQ = function () {
            return e;
          }),
          e
        );
      }
      function lK() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (lK = function () {
            return e;
          }),
          e
        );
      }
      function l$() {
        let e = (0, r._)(["\n                opacity: 1;\n            "]);
        return (
          (l$ = function () {
            return e;
          }),
          e
        );
      }
      let lJ = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-73871cf2-0" })(
          [
            "position:fixed;width:100%;height:100%;top:0;left:0;background-color:",
            ";z-index:200;overflow:hidden;",
          ],
          s.O9.black100
        ),
        l0 = c.ZP.div.withConfig({ componentId: "sc-73871cf2-1" })(
          [
            "position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:",
            " ",
            " ",
            " ",
            ";",
            "",
          ],
          (0, s.rm)(120),
          (0, s.rm)(40),
          (0, s.rm)(40),
          (0, s.rm)(40),
          s.BC.xsm(
            lW(),
            (0, s.rm)(80),
            (0, s.rm)(16),
            (0, s.rm)(16),
            (0, s.rm)(16)
          )
        ),
        l1 = c.ZP.a.withConfig({ componentId: "sc-73871cf2-2" })(
          [
            "color:",
            ";",
            ";cursor:pointer;text-transform:uppercase;font-size:",
            ";transition:color 0.3s ease;&:hover{color:",
            ";",
            "}",
            "",
          ],
          s.O9.white100,
          (0, d.u2)(500),
          (0, s.rm)(14),
          s.O9.green100,
          s.BC.md(lX(), s.O9.white100),
          s.BC.xsm(lY(), (0, s.rm)(18))
        ),
        l2 = c.ZP.div.withConfig({ componentId: "sc-73871cf2-3" })(
          ["display:flex;flex-direction:column;gap:", ";", ""],
          (0, s.rm)(32),
          s.BC.xsm(lQ(), (0, s.rm)(16))
        ),
        l5 = c.ZP.div.withConfig({ componentId: "sc-73871cf2-4" })(
          [
            ">:first-child{p{text-transform:capitalize !important;font-weight:400;font-size:",
            ";}}>:last-child{font-size:",
            ";text-align:center;",
            ";color:#979899;text-transform:uppercase;padding-top:",
            ";position:relative;.border{position:absolute;top:0;left:-20%;width:150%;height:",
            ";background-color:#414141;}}",
          ],
          (0, s.rm)(18),
          (0, s.rm)(12),
          (0, d.u2)(400),
          (0, s.rm)(16),
          (0, s.rm)(1)
        ),
        l4 = c.ZP.div.withConfig({ componentId: "sc-73871cf2-5" })(
          [
            "display:flex;justify-content:space-around;margin-bottom:",
            ";margin-top:",
            ";a{color:",
            ";transition:opacity 0.4s ease;",
            ";cursor:pointer;text-transform:uppercase;font-size:",
            ";transition:opacity 0.3s ease;",
            " &:hover{opacity:0.7;",
            "}}",
          ],
          (0, s.rm)(22),
          (0, s.rm)(32),
          s.O9.green100,
          (0, d.u2)(500),
          (0, s.rm)(18),
          s.BC.xsm(lK(), (0, s.rm)(18)),
          s.BC.md(l$())
        ),
        l6 = (e) => {
          var t, n;
          let { navigationData: r, footerData: o, headerData: l } = e,
            s = (0, f.Z)((e) => e.isMenuOpened),
            c = (0, f.Z)((e) => e.setIsMenuOpened),
            u = (0, h.q_)({
              opacity: s ? 1 : 0,
              config: { duration: 800, easing: h.Z5.easeInOutQuad },
            }),
            d = (e) => {
              C(e), c(!1);
            };
          return (
            (0, a.useEffect)(
              () => (
                s
                  ? (document.body.style.overflow = "hidden")
                  : (document.body.style.overflow = ""),
                () => {
                  document.body.style.overflow = "";
                }
              ),
              [s]
            ),
            (0, i.jsx)(lJ, {
              style: {
                pointerEvents: "".concat(s ? "auto" : "none"),
                userSelect: "".concat(s ? "auto" : "none"),
                ...u,
              },
              children: (0, i.jsxs)(l0, {
                children: [
                  (0, i.jsx)(l2, {
                    children:
                      null == l
                        ? void 0
                        : null === (t = l.anchors) || void 0 === t
                        ? void 0
                        : t.map((e, t) =>
                            (0, i.jsx)(
                              l1,
                              {
                                onClick: () => d(e.id),
                                children: (0, i.jsx)(tA, {
                                  enabled: s,
                                  delay: 100 * (t + 1),
                                  children: e.text,
                                }),
                              },
                              t
                            )
                          ),
                  }),
                  (0, i.jsxs)(l5, {
                    children: [
                      (0, i.jsx)(tA, {
                        enabled: s,
                        delay: (r.length + 2) * 100,
                        children: (0, i.jsx)(er, {
                          link: "https://app.uniswap.org/swap?outputCurrency=0xcomingsoon",
                          children: "Buy Now",
                        }),
                      }),
                      (0, i.jsx)(l4, {
                        children:
                          null == o
                            ? void 0
                            : null === (n = o.socials) || void 0 === n
                            ? void 0
                            : n.map((e, t) =>
                                (0, i.jsx)(
                                  "a",
                                  {
                                    href: e.href,
                                    target: "_blank",
                                    children: (0, i.jsx)(tA, {
                                      enabled: s,
                                      delay: (r.length + 4) * 100,
                                      children: e.name ? e.name : "-",
                                    }),
                                  },
                                  t
                                )
                              ),
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(tA, {
                            enabled: s,
                            delay: (r.length + 5) * 100,
                            children:
                              " T3 Venture Labs Limited \xa9 2025 All Rights Reserved",
                          }),
                          (0, i.jsx)("div", { className: "border" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
      function l3() {
        let e = (0, r._)(["\n        height: ", ";    \n    "]);
        return (
          (l3 = function () {
            return e;
          }),
          e
        );
      }
      let l7 = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-d75f622a-0" })(
          [
            "position:fixed;width:100vw;",
            " top:10%;left:0;z-index:-1;overflow:hidden;",
            ' &::before{content:"";position:absolute;width:100%;height:30%;background:',
            ";transform:rotate(4deg) translateY(10%);left:0;bottom:0;z-index:1;}",
          ],
          (0, nb.NN)(140),
          s.BC.xsm(l3(), (0, s.rm)(1100)),
          s.O9.black100
        ),
        l9 = c.ZP.div.withConfig({ componentId: "sc-d75f622a-1" })([
          "width:100%;height:100%;position:relative;div{width:100%;height:100%;video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}}",
        ]),
        l8 = (e) => {
          let { triggerRef: t } = e,
            n = (0, a.useRef)(null),
            [r] = (0, nc.s)({
              trigger: t,
              start: "top center",
              end: "bottom top",
              from: { y: "0%" },
              to: { y: "-20%" },
              scrub: !0,
              onChange: (e) => {
                if (n.current) {
                  let t = e.value.progress,
                    r = 0;
                  (r =
                    t < 0.2
                      ? t / 0.2
                      : t >= 0.2 && t <= 0.6
                      ? 1
                      : t > 0.6 && t <= 0.7
                      ? (0.7 - t) / 0.1
                      : 0),
                    (n.current.style.opacity = "".concat(
                      Math.max(0, Math.min(0.4, 0.4 * r))
                    ));
                }
              },
            });
          return (0, i.jsx)(l7, {
            style: r,
            children: (0, i.jsx)(l9, {
              ref: n,
              children: (0, i.jsx)(tD, {
                strategy: "lazy",
                src: "/bgStars.mp4",
                poster: "/bgStarsPoster.webp",
              }),
            }),
          });
        };
      function se() {
        let e = (0, r._)(["\n        height: ", ";    \n    "]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      let st = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-34a17a5a-0" })(
          [
            "position:relative;width:100vw;",
            " top:0;left:0;z-index:-1;overflow:hidden;",
            "",
          ],
          (0, nb.NN)(140),
          s.BC.xsm(se(), (0, s.rm)(1100))
        ),
        sn = c.ZP.div.withConfig({ componentId: "sc-34a17a5a-1" })([
          "width:100%;height:100%;position:relative;div{width:100%;height:100%;video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}}",
        ]),
        sr = (e) => {
          let { triggerRef: t } = e,
            n = (0, a.useRef)(null),
            [r] = (0, nc.s)({
              trigger: t,
              start: "top center",
              end: "bottom top",
              from: { y: "0%" },
              to: { y: "-20%" },
              scrub: !0,
              onChange: (e) => {
                if (n.current) {
                  n.current.style.transform = "translateY(".concat(
                    0 + 30 * e.value.progress,
                    "%)"
                  );
                  let t = e.value.progress,
                    r = 0;
                  (r =
                    t < 0.1 ? 0 : t >= 0.1 && t <= 0.3 ? (t - 0.1) / 0.1 : 1),
                    (n.current.style.opacity = "".concat(
                      Math.max(0, Math.min(0.1, 0.1 * r))
                    ));
                }
              },
            });
          return (0, i.jsx)(st, {
            style: r,
            children: (0, i.jsx)(sn, {
              ref: n,
              children: (0, i.jsx)(tD, {
                strategy: "lazy",
                src: "/bgSt.mp4",
                poster: "/bgStarsPoster.webp",
              }),
            }),
          });
        },
        si = (e) => {
          let { name: t, ...n } = e;
          if ("arrow" === t)
            return (0, i.jsxs)("svg", {
              width: "25",
              height: "19",
              viewBox: "0 0 25 19",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, i.jsx)("path", {
                  d: "M21.2982 9.78263L17.3892 5.89281C17.2488 5.72965 17.002 5.71063 16.8381 5.85039C16.6741 5.99012 16.655 6.23568 16.7954 6.39884C16.8085 6.41405 16.8228 6.42826 16.8381 6.44126L20.0786 9.66981H4.6028C4.38693 9.66981 4.21191 9.84397 4.21191 10.0588C4.21191 10.2736 4.38693 10.4478 4.6028 10.4478H20.0786L16.8381 13.6724C16.6741 13.8121 16.655 14.0577 16.7954 14.2209C16.9359 14.384 17.1826 14.403 17.3466 14.2633C17.3619 14.2502 17.3762 14.2361 17.3892 14.2209L21.2983 10.331C21.4498 10.1794 21.4498 9.93436 21.2982 9.78263Z",
                  fill: "#23FAAD",
                }),
                (0, i.jsx)("path", {
                  d: "M21.2982 9.78263L17.3892 5.89281C17.2488 5.72965 17.002 5.71063 16.8381 5.85039C16.6741 5.99012 16.655 6.23568 16.7954 6.39884C16.8085 6.41405 16.8228 6.42826 16.8381 6.44126L20.0786 9.66981H4.6028C4.38693 9.66981 4.21191 9.84397 4.21191 10.0588C4.21191 10.2736 4.38693 10.4478 4.6028 10.4478H20.0786L16.8381 13.6724C16.6741 13.8121 16.655 14.0577 16.7954 14.2209C16.9359 14.384 17.1826 14.403 17.3466 14.2633C17.3619 14.2502 17.3762 14.2361 17.3892 14.2209L21.2983 10.331C21.4498 10.1794 21.4498 9.93436 21.2982 9.78263Z",
                  fill: "#23FAAD",
                }),
              ],
            });
        };
      function so() {
        let e = (0, r._)(["\n        width: ", ";\n    "]);
        return (
          (so = function () {
            return e;
          }),
          e
        );
      }
      function sl() {
        let e = (0, r._)(["\n        width: 100%;\n        gap: ", ";\n    "]);
        return (
          (sl = function () {
            return e;
          }),
          e
        );
      }
      function ss() {
        let e = (0, r._)(["\n        &:hover{}    \n    "]);
        return (
          (ss = function () {
            return e;
          }),
          e
        );
      }
      function sc() {
        let e = (0, r._)(["\n            height: ", ";    \n        "]);
        return (
          (sc = function () {
            return e;
          }),
          e
        );
      }
      function sa() {
        let e = (0, r._)([
          "\n                object-fit: cover;    \n            ",
        ]);
        return (
          (sa = function () {
            return e;
          }),
          e
        );
      }
      function su() {
        let e = (0, r._)(["\n            gap: ", ";    \n        "]);
        return (
          (su = function () {
            return e;
          }),
          e
        );
      }
      function sd() {
        let e = (0, r._)([
          "\n                font-size: ",
          ";    \n            ",
        ]);
        return (
          (sd = function () {
            return e;
          }),
          e
        );
      }
      function sf() {
        let e = (0, r._)([
          "\n                    font-size: ",
          ";\n                ",
        ]);
        return (
          (sf = function () {
            return e;
          }),
          e
        );
      }
      function sm() {
        let e = (0, r._)([
          "\n                    font-size: ",
          ";    \n                ",
        ]);
        return (
          (sm = function () {
            return e;
          }),
          e
        );
      }
      function sh() {
        let e = (0, r._)([
          "\n                    &:hover{}    \n                ",
        ]);
        return (
          (sh = function () {
            return e;
          }),
          e
        );
      }
      function sg() {
        let e = (0, r._)([
          "\n                            font-size: ",
          ";\n                        ",
        ]);
        return (
          (sg = function () {
            return e;
          }),
          e
        );
      }
      function sp() {
        let e = (0, r._)([
          "\n                            font-size: ",
          ";    \n                        ",
        ]);
        return (
          (sp = function () {
            return e;
          }),
          e
        );
      }
      function sx() {
        let e = (0, r._)([
          "\n                        width: ",
          ";\n                        height: ",
          ";\n                    ",
        ]);
        return (
          (sx = function () {
            return e;
          }),
          e
        );
      }
      function sv() {
        let e = (0, r._)([
          "\n                        width: ",
          ";\n                        height: ",
          ";    \n                    ",
        ]);
        return (
          (sv = function () {
            return e;
          }),
          e
        );
      }
      let sw = c.ZP.div.withConfig({ componentId: "sc-745327bc-0" })(
          [
            "display:flex;flex-direction:column;gap:",
            ";width:",
            ";cursor:pointer;",
            " ",
            " &:hover{img{transform:scale(1.05);}}",
            " .finalLink{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;}.imageContainer{position:relative;height:",
            ";width:100%;border:1px solid #3E3E3E;overflow:hidden;",
            " img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease-in-out;",
            "}}.textContainer{width:100%;display:flex;flex-direction:column;gap:",
            ";",
            " >:last-child{width:100% !important;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:",
            ";color:",
            ";",
            ";line-height:150%;",
            "}.top{display:flex;justify-content:space-between;gap:",
            ";.title{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;font-size:",
            ";",
            ";color:",
            ";line-height:100%;",
            " ",
            "}.explore{display:flex;gap:",
            ";align-items:center;cursor:pointer;justify-self:flex-end;&:hover{svg{transform:translateX(",
            ");}}",
            " span{font-size:",
            ";",
            ";color:",
            ";",
            " ",
            "}svg{width:",
            ";height:",
            ";transition:transform 0.4s ease-in-out;",
            " ",
            "}}}}",
          ],
          (0, s.rm)(26),
          (0, s.rm)(550),
          s.BC.lg(so(), (0, s.rm)(391)),
          s.BC.xsm(sl(), (0, s.rm)(14)),
          s.BC.md(ss()),
          (0, s.rm)(235),
          s.BC.xsm(sc(), (0, s.rm)(123)),
          s.BC.xsm(sa()),
          (0, s.rm)(19),
          s.BC.xsm(su(), (0, s.rm)(5)),
          (0, s.rm)(16),
          s.O9.grey100,
          (0, d.u2)(400),
          s.BC.xsm(sd(), (0, s.rm)(12)),
          (0, s.rm)(10),
          (0, s.rm)(24),
          (0, d.rB)(700),
          s.O9.white100,
          s.BC.lg(sf(), (0, s.rm)(22)),
          s.BC.xsm(sm(), (0, s.rm)(14)),
          (0, s.rm)(7),
          (0, s.rm)(4),
          s.BC.md(sh()),
          (0, s.rm)(19),
          (0, d.u2)(700),
          s.O9.green100,
          s.BC.lg(sg(), (0, s.rm)(17)),
          s.BC.xsm(sp(), (0, s.rm)(12)),
          (0, s.rm)(24),
          (0, s.rm)(18),
          s.BC.lg(sx(), (0, s.rm)(22), (0, s.rm)(16)),
          s.BC.xsm(sv(), (0, s.rm)(13), (0, s.rm)(10))
        ),
        sy = (e) => {
          let { image: t, title: n, secondary: r, exploreLink: o } = e;
          return (0, i.jsxs)(sw, {
            children: [
              (0, i.jsx)("a", {
                className: "finalLink",
                target: "blank",
                href: o || "#",
              }),
              (0, i.jsx)("div", {
                className: "imageContainer",
                children: (0, i.jsx)(nM(), {
                  src: (null == t ? void 0 : t.filename)
                    ? null == t
                      ? void 0
                      : t.filename
                    : "",
                  width: 550,
                  height: 300,
                  alt: t,
                }),
              }),
              (0, i.jsxs)("div", {
                className: "textContainer",
                children: [
                  (0, i.jsxs)("div", {
                    className: "top",
                    children: [
                      (0, i.jsx)("p", {
                        className: "title",
                        children: n || "-",
                      }),
                      (0, i.jsxs)("a", {
                        href: o,
                        target: "blank",
                        className: "explore",
                        children: [
                          (0, i.jsx)("span", { children: "Read" }),
                          (0, i.jsx)(si, { name: "arrow" }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("span", { children: r || "-" }),
                ],
              }),
            ],
          });
        };
      function sC() {
        let e = (0, r._)([
          "\n        margin: 0;\n        padding: ",
          " ",
          ";\n        gap: ",
          ";  \n    ",
        ]);
        return (
          (sC = function () {
            return e;
          }),
          e
        );
      }
      function sb() {
        let e = (0, r._)(["\n            font-size: ", ";\n        "]);
        return (
          (sb = function () {
            return e;
          }),
          e
        );
      }
      function sj() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (sj = function () {
            return e;
          }),
          e
        );
      }
      function s_() {
        let e = (0, r._)(["\n        align-self: flex-start;\n    "]);
        return (
          (s_ = function () {
            return e;
          }),
          e
        );
      }
      function sB() {
        let e = (0, r._)(["\n        &:hover{}    \n    "]);
        return (
          (sB = function () {
            return e;
          }),
          e
        );
      }
      function sR() {
        let e = (0, r._)(["\n            font-size: ", ";    \n        "]);
        return (
          (sR = function () {
            return e;
          }),
          e
        );
      }
      function sT() {
        let e = (0, r._)([
          "\n            width: ",
          ";\n            height: ",
          ";\n            margin-bottom: ",
          ";\n        ",
        ]);
        return (
          (sT = function () {
            return e;
          }),
          e
        );
      }
      function sz() {
        let e = (0, r._)(["\n        display: none;    \n    "]);
        return (
          (sz = function () {
            return e;
          }),
          e
        );
      }
      let sE = c.ZP.div.withConfig({ componentId: "sc-a6dfbf67-0" })(
          [
            "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",
            ";padding:0 ",
            ";margin:",
            " 0;position:relative;",
            " >:first-child{top:",
            " !important;}.swiper{width:100% !important;overflow:hidden !important;}",
          ],
          (0, s.rm)(92),
          (0, s.rm)(100),
          (0, s.rm)(256),
          s.BC.xsm(sC(), (0, s.rm)(40), (0, s.rm)(16), (0, s.rm)(40)),
          (0, s.rm)(-200)
        ),
        sP = c.ZP.div.withConfig({ componentId: "sc-a6dfbf67-1" })(
          [
            "display:flex;width:100%;justify-content:space-between;p{font-size:",
            ";",
            ";color:",
            ";",
            " ",
            "}",
          ],
          (0, s.rm)(48),
          (0, d.rB)(700),
          s.O9.white100,
          s.BC.lg(sb(), (0, s.rm)(42)),
          s.BC.xsm(sj(), (0, s.rm)(28))
        );
      c.ZP.div.withConfig({ componentId: "sc-a6dfbf67-2" })(
        [
          "display:flex;gap:",
          ";align-items:center;cursor:pointer;align-self:flex-end;",
          " &:hover{svg{transform:translateX(",
          ");}}",
          " span{font-size:",
          ";",
          ";color:",
          ";",
          "}svg{width:",
          ";height:",
          ";transition:transform 0.4s ease-in-out;",
          "}",
        ],
        (0, s.rm)(7),
        s.BC.xsm(s_()),
        (0, s.rm)(4),
        s.BC.md(sB()),
        (0, s.rm)(19),
        (0, d.u2)(700),
        s.O9.green100,
        s.BC.xsm(sR(), (0, s.rm)(16)),
        (0, s.rm)(24),
        (0, s.rm)(18),
        s.BC.xsm(sT(), (0, s.rm)(22), (0, s.rm)(17), (0, s.rm)(-2))
      );
      let sI = c.ZP.div.withConfig({ componentId: "sc-a6dfbf67-3" })(
          ["display:flex;gap:", ";", ""],
          (0, s.rm)(34),
          s.BC.xsm(sz())
        ),
        sD = (e) => {
          var t, n;
          let { data: r } = e,
            o = (0, f.Z)((e) => e.isContentLoaded),
            l = (0, K.Lm)();
          return (0, i.jsxs)(sE, {
            children: [
              (0, i.jsx)(te, { id: "Blog" }),
              (0, i.jsx)(sP, {
                children: (0, i.jsx)("p", {
                  children: (0, i.jsx)(G, {
                    enabled: o,
                    to: (null == r ? void 0 : r.title)
                      ? null == r
                        ? void 0
                        : r.title
                      : "-",
                  }),
                }),
              }),
              l <= 1024 &&
                (0, i.jsx)(e2.tq, {
                  slidesPerView: l > 576 ? 2 : 1,
                  spaceBetween: 36,
                  className: "swiper",
                  modules: [e1.W_, e1.LW, e1.s5, e1.pt],
                  scrollbar: { draggable: !1 },
                  children:
                    null == r
                      ? void 0
                      : null === (t = r.cards) || void 0 === t
                      ? void 0
                      : t.map((e, t) =>
                          (0, i.jsx)(
                            e2.o5,
                            {
                              style: { position: "relative" },
                              children: (0, i.jsx)(
                                nO,
                                {
                                  children: (0, i.jsx)(sy, {
                                    title: null == e ? void 0 : e.title,
                                    secondary:
                                      null == e ? void 0 : e.description,
                                    image: null == e ? void 0 : e.image,
                                    exploreLink: null == e ? void 0 : e.href,
                                  }),
                                },
                                t
                              ),
                            },
                            t
                          )
                        ),
                }),
              (0, i.jsx)(sI, {
                children:
                  l > 1024 &&
                  (null == r
                    ? void 0
                    : null === (n = r.cards) || void 0 === n
                    ? void 0
                    : n.map((e, t) =>
                        (0, i.jsx)(
                          nO,
                          {
                            children: (0, i.jsx)(sy, {
                              title: e.title,
                              secondary: e.description,
                              image: e.image,
                              exploreLink: e.href,
                            }),
                          },
                          t
                        )
                      )),
              }),
            ],
          });
        },
        sL = c.ZP.canvas.withConfig({ componentId: "sc-f3a493d9-0" })([
          "position:fixed;top:0;left:0;width:100%;height:100%;z-index:100000;mix-blend-mode:difference;pointer-events:none;filter:grayscale(1);",
        ]),
        sk = (0, a.memo)(() =>
          1024 > (0, K.Lm)() ? null : (0, i.jsx)(sA, {})
        ),
        sA = () => {
          let e = (0, a.useRef)(null),
            t = (0, a.useRef)(!1);
          return (
            (0, a.useEffect)(() => {
              e.current &&
                !t.current &&
                ((function (e) {
                  let t, n, r, i, o, l, s, c, a, u, d, f, m;
                  (e.width = e.clientWidth), (e.height = e.clientHeight);
                  let h = {
                    SIM_RESOLUTION: 256,
                    DYE_RESOLUTION: 256,
                    DENSITY_DISSIPATION: 0.95,
                    VELOCITY_DISSIPATION: 0.95,
                    PRESSURE_DISSIPATION: 0.01,
                    PRESSURE_ITERATIONS: 5,
                    CURL: 30,
                    SPLAT_RADIUS: 0.08,
                    SHADING: !0,
                    PAUSED: !1,
                    BACK_COLOR: { r: 1, g: 1, b: 1 },
                    TRANSPARENT: !1,
                    BLOOM: !1,
                    BLOOM_ITERATIONS: 8,
                    BLOOM_RESOLUTION: 256,
                    BLOOM_INTENSITY: 0.1,
                    BLOOM_THRESHOLD: 0.8,
                    BLOOM_SOFT_KNEE: 0.7,
                  };
                  function g() {
                    (this.id = -1),
                      (this.x = 0),
                      (this.y = 0),
                      (this.dx = 0),
                      (this.dy = 0),
                      (this.down = !1),
                      (this.moved = !1),
                      (this.color = [30, 0, 300]);
                  }
                  let p = [],
                    x = [],
                    v = [];
                  p.push(new g());
                  let { gl: w, ext: y } = (function (e) {
                    let t, n, r, i, o;
                    let l = {
                        alpha: !0,
                        depth: !1,
                        stencil: !1,
                        antialias: !1,
                        preserveDrawingBuffer: !1,
                      },
                      s = e.getContext("webgl2", l),
                      c = !!s;
                    c ||
                      (s =
                        e.getContext("webgl", l) ||
                        e.getContext("experimental-webgl", l)),
                      c
                        ? (s.getExtension("EXT_color_buffer_float"),
                          (n = s.getExtension("OES_texture_float_linear")))
                        : ((t = s.getExtension("OES_texture_half_float")),
                          (n = s.getExtension(
                            "OES_texture_half_float_linear"
                          ))),
                      s.clearColor(0, 0, 0, 1);
                    let a = c ? s.HALF_FLOAT : t.HALF_FLOAT_OES;
                    return (
                      c
                        ? ((r = C(s, s.RGBA16F, s.RGBA, a)),
                          (i = C(s, s.RG16F, s.RG, a)),
                          (o = C(s, s.R16F, s.RED, a)))
                        : ((r = C(s, s.RGBA, s.RGBA, a)),
                          (i = C(s, s.RGBA, s.RGBA, a)),
                          (o = C(s, s.RGBA, s.RGBA, a))),
                      {
                        gl: s,
                        ext: {
                          formatRGBA: r,
                          formatRG: i,
                          formatR: o,
                          halfFloatTexType: a,
                          supportLinearFiltering: n,
                        },
                      }
                    );
                  })(e);
                  function C(e, t, n, r) {
                    let i, o;
                    if (
                      ((i = e.createTexture()),
                      e.bindTexture(e.TEXTURE_2D, i),
                      e.texParameteri(
                        e.TEXTURE_2D,
                        e.TEXTURE_MIN_FILTER,
                        e.NEAREST
                      ),
                      e.texParameteri(
                        e.TEXTURE_2D,
                        e.TEXTURE_MAG_FILTER,
                        e.NEAREST
                      ),
                      e.texParameteri(
                        e.TEXTURE_2D,
                        e.TEXTURE_WRAP_S,
                        e.CLAMP_TO_EDGE
                      ),
                      e.texParameteri(
                        e.TEXTURE_2D,
                        e.TEXTURE_WRAP_T,
                        e.CLAMP_TO_EDGE
                      ),
                      e.texImage2D(e.TEXTURE_2D, 0, t, 4, 4, 0, n, r, null),
                      (o = e.createFramebuffer()),
                      e.bindFramebuffer(e.FRAMEBUFFER, o),
                      e.framebufferTexture2D(
                        e.FRAMEBUFFER,
                        e.COLOR_ATTACHMENT0,
                        e.TEXTURE_2D,
                        i,
                        0
                      ),
                      e.checkFramebufferStatus(e.FRAMEBUFFER) !=
                        e.FRAMEBUFFER_COMPLETE)
                    )
                      switch (t) {
                        case e.R16F:
                          return C(e, e.RG16F, e.RG, r);
                        case e.RG16F:
                          return C(e, e.RGBA16F, e.RGBA, r);
                        default:
                          return null;
                      }
                    return { internalFormat: t, format: n };
                  }
                  /Mobi|Android/i.test(navigator.userAgent) && (h.SHADING = !1),
                    y.supportLinearFiltering ||
                      ((h.SHADING = !1), (h.BLOOM = !1));
                  class b {
                    bind() {
                      w.useProgram(this.program);
                    }
                    constructor(e, t) {
                      if (
                        ((this.uniforms = {}),
                        (this.program = w.createProgram()),
                        w.attachShader(this.program, e),
                        w.attachShader(this.program, t),
                        w.linkProgram(this.program),
                        !w.getProgramParameter(this.program, w.LINK_STATUS))
                      )
                        throw w.getProgramInfoLog(this.program);
                      let n = w.getProgramParameter(
                        this.program,
                        w.ACTIVE_UNIFORMS
                      );
                      for (let e = 0; e < n; e++) {
                        let t = w.getActiveUniform(this.program, e).name;
                        this.uniforms[t] = w.getUniformLocation(
                          this.program,
                          t
                        );
                      }
                    }
                  }
                  function j(e, t) {
                    let n = w.createShader(e);
                    if (
                      (w.shaderSource(n, t),
                      w.compileShader(n),
                      !w.getShaderParameter(n, w.COMPILE_STATUS))
                    )
                      throw w.getShaderInfoLog(n);
                    return n;
                  }
                  let _ = j(
                      w.VERTEX_SHADER,
                      "\n        precision highp float;\n        attribute vec2 aPosition;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform vec2 texelSize;\n        void main () {\n            vUv = aPosition * 0.5 + 0.5;\n            vL = vUv - vec2(texelSize.x, 0.0);\n            vR = vUv + vec2(texelSize.x, 0.0);\n            vT = vUv + vec2(0.0, texelSize.y);\n            vB = vUv - vec2(0.0, texelSize.y);\n            gl_Position = vec4(aPosition, 0.0, 1.0);\n        }\n    "
                    ),
                    B = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        uniform sampler2D uTexture;\n        uniform float value;\n        void main () {\n            gl_FragColor = value * texture2D(uTexture, vUv);\n        }\n    "
                    ),
                    R = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision mediump float;\n        uniform vec4 color;\n        void main () {\n            gl_FragColor = color;\n        }\n    "
                    ),
                    T = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uTexture;\n        uniform float aspectRatio;\n        #define SCALE 25.0\n        void main () {\n            vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n            float v = mod(uv.x + uv.y, 2.0);\n            v = v * 0.1 + 0.8;\n            gl_FragColor = vec4(vec3(v), 1.0);\n        }\n    "
                    ),
                    z = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uTexture;\n        void main () {\n            vec3 C = texture2D(uTexture, vUv).rgb;\n            float a = max(C.r, max(C.g, C.b));\n            gl_FragColor = vec4(C, a);\n        }\n    "
                    ),
                    E = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uTexture;\n        uniform sampler2D uBloom;\n        uniform sampler2D uDithering;\n        uniform vec2 ditherScale;\n        void main () {\n            vec3 C = texture2D(uTexture, vUv).rgb;\n            vec3 bloom = texture2D(uBloom, vUv).rgb;\n            vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n            noise = noise * 2.0 - 1.0;\n            bloom += noise / 800.0;\n            bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n            C += bloom;\n            float a = max(C.r, max(C.g, C.b));\n            gl_FragColor = vec4(C, a);\n        }\n    "
                    ),
                    P = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform sampler2D uTexture;\n        uniform vec2 texelSize;\n        void main () {\n            vec3 L = texture2D(uTexture, vL).rgb;\n            vec3 R = texture2D(uTexture, vR).rgb;\n            vec3 T = texture2D(uTexture, vT).rgb;\n            vec3 B = texture2D(uTexture, vB).rgb;\n            vec3 C = texture2D(uTexture, vUv).rgb;\n            float dx = length(R) - length(L);\n            float dy = length(T) - length(B);\n            vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n            vec3 l = vec3(0.0, 0.0, 1.0);\n            float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n            C.rgb *= diffuse;\n            float a = max(C.r, max(C.g, C.b));\n            gl_FragColor = vec4(C, a);\n        }\n    "
                    ),
                    I = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform sampler2D uTexture;\n        uniform sampler2D uBloom;\n        uniform sampler2D uDithering;\n        uniform vec2 ditherScale;\n        uniform vec2 texelSize;\n        void main () {\n            vec3 L = texture2D(uTexture, vL).rgb;\n            vec3 R = texture2D(uTexture, vR).rgb;\n            vec3 T = texture2D(uTexture, vT).rgb;\n            vec3 B = texture2D(uTexture, vB).rgb;\n            vec3 C = texture2D(uTexture, vUv).rgb;\n            float dx = length(R) - length(L);\n            float dy = length(T) - length(B);\n            vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n            vec3 l = vec3(0.0, 0.0, 1.0);\n            float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n            C *= diffuse;\n            vec3 bloom = texture2D(uBloom, vUv).rgb;\n            vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n            noise = noise * 2.0 - 1.0;\n            bloom += noise / 800.0;\n            bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n            C += bloom;\n            float a = max(C.r, max(C.g, C.b));\n            gl_FragColor = vec4(C, a);\n        }\n    "
                    ),
                    D = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uTexture;\n        uniform vec3 curve;\n        uniform float threshold;\n        void main () {\n            vec3 c = texture2D(uTexture, vUv).rgb;\n            float br = max(c.r, max(c.g, c.b));\n            float rq = clamp(br - curve.x, 0.0, curve.y);\n            rq = curve.z * rq * rq;\n            c *= max(rq, br - threshold) / max(br, 0.0001);\n            gl_FragColor = vec4(c, 0.0);\n        }\n    "
                    ),
                    L = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform sampler2D uTexture;\n        void main () {\n            vec4 sum = vec4(0.0);\n            sum += texture2D(uTexture, vL);\n            sum += texture2D(uTexture, vR);\n            sum += texture2D(uTexture, vT);\n            sum += texture2D(uTexture, vB);\n            sum *= 0.25;\n            gl_FragColor = sum;\n        }\n    "
                    ),
                    k = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform sampler2D uTexture;\n        uniform float intensity;\n        void main () {\n            vec4 sum = vec4(0.0);\n            sum += texture2D(uTexture, vL);\n            sum += texture2D(uTexture, vR);\n            sum += texture2D(uTexture, vT);\n            sum += texture2D(uTexture, vB);\n            sum *= 0.25;\n            gl_FragColor = sum * intensity;\n        }\n    "
                    ),
                    A = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uTarget;\n        uniform float aspectRatio;\n        uniform vec3 color;\n        uniform vec2 point;\n        uniform float radius;\n        void main () {\n            vec2 p = vUv - point.xy;\n            p.x *= aspectRatio;\n            vec3 splat = exp(-dot(p, p) / radius) * color;\n            vec3 base = texture2D(uTarget, vUv).xyz;\n            gl_FragColor = vec4(base + splat, 1.0);\n        }\n    "
                    ),
                    S = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uVelocity;\n        uniform sampler2D uSource;\n        uniform vec2 texelSize;\n        uniform vec2 dyeTexelSize;\n        uniform float dt;\n        uniform float dissipation;\n        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n            vec2 st = uv / tsize - 0.5;\n            vec2 iuv = floor(st);\n            vec2 fuv = fract(st);\n            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n        }\n        void main () {\n            vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n            gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n            gl_FragColor.a = 1.0;\n        }\n    "
                    ),
                    Z = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uVelocity;\n        uniform sampler2D uSource;\n        uniform vec2 texelSize;\n        uniform float dt;\n        uniform float dissipation;\n        void main () {\n            vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n            gl_FragColor = dissipation * texture2D(uSource, coord);\n            gl_FragColor.a = 1.0;\n        }\n    "
                    ),
                    F = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uVelocity;\n        void main () {\n            float L = texture2D(uVelocity, vL).x;\n            float R = texture2D(uVelocity, vR).x;\n            float T = texture2D(uVelocity, vT).y;\n            float B = texture2D(uVelocity, vB).y;\n            vec2 C = texture2D(uVelocity, vUv).xy;\n            if (vL.x < 0.0) { L = -C.x; }\n            if (vR.x > 1.0) { R = -C.x; }\n            if (vT.y > 1.0) { T = -C.y; }\n            if (vB.y < 0.0) { B = -C.y; }\n            float div = 0.5 * (R - L + T - B);\n            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n        }\n    "
                    ),
                    O = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uVelocity;\n        void main () {\n            float L = texture2D(uVelocity, vL).y;\n            float R = texture2D(uVelocity, vR).y;\n            float T = texture2D(uVelocity, vT).x;\n            float B = texture2D(uVelocity, vB).x;\n            float vorticity = R - L - T + B;\n            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n        }\n    "
                    ),
                    N = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform sampler2D uVelocity;\n        uniform sampler2D uCurl;\n        uniform float curl;\n        uniform float dt;\n        void main () {\n            float L = texture2D(uCurl, vL).x;\n            float R = texture2D(uCurl, vR).x;\n            float T = texture2D(uCurl, vT).x;\n            float B = texture2D(uCurl, vB).x;\n            float C = texture2D(uCurl, vUv).x;\n            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n            force /= length(force) + 0.0001;\n            force *= curl * C;\n            force.y *= -1.0;\n            vec2 vel = texture2D(uVelocity, vUv).xy;\n            gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n        }\n    "
                    ),
                    M = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uPressure;\n        uniform sampler2D uDivergence;\n        vec2 boundary (vec2 uv) {\n            return uv;\n            // uncomment if you use wrap or repeat texture mode\n            // uv = min(max(uv, 0.0), 1.0);\n            // return uv;\n        }\n        void main () {\n            float L = texture2D(uPressure, boundary(vL)).x;\n            float R = texture2D(uPressure, boundary(vR)).x;\n            float T = texture2D(uPressure, boundary(vT)).x;\n            float B = texture2D(uPressure, boundary(vB)).x;\n            float C = texture2D(uPressure, vUv).x;\n            float divergence = texture2D(uDivergence, vUv).x;\n            float pressure = (L + R + B + T - divergence) * 0.25;\n            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n        }\n    "
                    ),
                    H = j(
                      w.FRAGMENT_SHADER,
                      "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uPressure;\n        uniform sampler2D uVelocity;\n        vec2 boundary (vec2 uv) {\n            return uv;\n            // uv = min(max(uv, 0.0), 1.0);\n            // return uv;\n        }\n        void main () {\n            float L = texture2D(uPressure, boundary(vL)).x;\n            float R = texture2D(uPressure, boundary(vR)).x;\n            float T = texture2D(uPressure, boundary(vT)).x;\n            float B = texture2D(uPressure, boundary(vB)).x;\n            vec2 velocity = texture2D(uVelocity, vUv).xy;\n            velocity.xy -= vec2(R - L, T - B);\n            gl_FragColor = vec4(velocity, 0.0, 1.0);\n        }\n    "
                    ),
                    V =
                      (w.bindBuffer(w.ARRAY_BUFFER, w.createBuffer()),
                      w.bufferData(
                        w.ARRAY_BUFFER,
                        new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
                        w.STATIC_DRAW
                      ),
                      w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, w.createBuffer()),
                      w.bufferData(
                        w.ELEMENT_ARRAY_BUFFER,
                        new Uint16Array([0, 1, 2, 0, 2, 3]),
                        w.STATIC_DRAW
                      ),
                      w.vertexAttribPointer(0, 2, w.FLOAT, !1, 0, 0),
                      w.enableVertexAttribArray(0),
                      (e) => {
                        w.bindFramebuffer(w.FRAMEBUFFER, e),
                          w.drawElements(w.TRIANGLES, 6, w.UNSIGNED_SHORT, 0);
                      }),
                    U =
                      ((d = w.createTexture()),
                      w.bindTexture(w.TEXTURE_2D, d),
                      w.texParameteri(
                        w.TEXTURE_2D,
                        w.TEXTURE_MIN_FILTER,
                        w.LINEAR
                      ),
                      w.texParameteri(
                        w.TEXTURE_2D,
                        w.TEXTURE_MAG_FILTER,
                        w.LINEAR
                      ),
                      w.texParameteri(w.TEXTURE_2D, w.TEXTURE_WRAP_S, w.REPEAT),
                      w.texParameteri(w.TEXTURE_2D, w.TEXTURE_WRAP_T, w.REPEAT),
                      w.texImage2D(
                        w.TEXTURE_2D,
                        0,
                        w.RGB,
                        1,
                        1,
                        0,
                        w.RGB,
                        w.UNSIGNED_BYTE,
                        new Uint8Array([255, 255, 255])
                      ),
                      (f = {
                        texture: d,
                        width: 1,
                        height: 1,
                        attach: (e) => (
                          w.activeTexture(w.TEXTURE0 + e),
                          w.bindTexture(w.TEXTURE_2D, d),
                          e
                        ),
                      }),
                      ((m = new Image()).onload = () => {
                        (f.width = m.width),
                          (f.height = m.height),
                          w.bindTexture(w.TEXTURE_2D, d),
                          w.texImage2D(
                            w.TEXTURE_2D,
                            0,
                            w.RGB,
                            w.RGB,
                            w.UNSIGNED_BYTE,
                            m
                          );
                      }),
                      (m.src = "/footerPcPoster.jpg"),
                      f),
                    q = new b(_, B),
                    G = new b(_, R),
                    W = new b(_, T),
                    X = new b(_, z),
                    Y = new b(_, E),
                    Q = new b(_, P),
                    K = new b(_, I),
                    $ = new b(_, D),
                    J = new b(_, L),
                    ee = new b(_, k),
                    et = new b(_, A),
                    en = new b(_, y.supportLinearFiltering ? Z : S),
                    er = new b(_, F),
                    ei = new b(_, O),
                    eo = new b(_, N),
                    el = new b(_, M),
                    es = new b(_, H);
                  function ec() {
                    let e = eg(h.SIM_RESOLUTION),
                      d = eg(h.DYE_RESOLUTION);
                    (t = e.width),
                      (n = e.height),
                      (r = d.width),
                      (i = d.height);
                    let f = y.halfFloatTexType,
                      m = y.formatRGBA,
                      g = y.formatRG,
                      p = y.formatR,
                      x = y.supportLinearFiltering ? w.LINEAR : w.NEAREST;
                    (o =
                      null == o
                        ? eu(r, i, m.internalFormat, m.format, f, x)
                        : ed(o, r, i, m.internalFormat, m.format, f, x)),
                      (l =
                        null == l
                          ? eu(t, n, g.internalFormat, g.format, f, x)
                          : ed(l, t, n, g.internalFormat, g.format, f, x)),
                      (s = ea(t, n, p.internalFormat, p.format, f, w.NEAREST)),
                      (c = ea(t, n, p.internalFormat, p.format, f, w.NEAREST)),
                      (a = eu(t, n, p.internalFormat, p.format, f, w.NEAREST)),
                      (function () {
                        let e = eg(h.BLOOM_RESOLUTION),
                          t = y.halfFloatTexType,
                          n = y.formatRGBA,
                          r = y.supportLinearFiltering ? w.LINEAR : w.NEAREST;
                        (u = ea(
                          e.width,
                          e.height,
                          n.internalFormat,
                          n.format,
                          t,
                          r
                        )),
                          (v.length = 0);
                        for (let i = 0; i < h.BLOOM_ITERATIONS; i++) {
                          let o = e.width >> (i + 1),
                            l = e.height >> (i + 1);
                          if (o < 2 || l < 2) break;
                          let s = ea(o, l, n.internalFormat, n.format, t, r);
                          v.push(s);
                        }
                      })();
                  }
                  function ea(e, t, n, r, i, o) {
                    w.activeTexture(w.TEXTURE0);
                    let l = w.createTexture();
                    w.bindTexture(w.TEXTURE_2D, l),
                      w.texParameteri(w.TEXTURE_2D, w.TEXTURE_MIN_FILTER, o),
                      w.texParameteri(w.TEXTURE_2D, w.TEXTURE_MAG_FILTER, o),
                      w.texParameteri(
                        w.TEXTURE_2D,
                        w.TEXTURE_WRAP_S,
                        w.CLAMP_TO_EDGE
                      ),
                      w.texParameteri(
                        w.TEXTURE_2D,
                        w.TEXTURE_WRAP_T,
                        w.CLAMP_TO_EDGE
                      ),
                      w.texImage2D(w.TEXTURE_2D, 0, n, e, t, 0, r, i, null);
                    let s = w.createFramebuffer();
                    return (
                      w.bindFramebuffer(w.FRAMEBUFFER, s),
                      w.framebufferTexture2D(
                        w.FRAMEBUFFER,
                        w.COLOR_ATTACHMENT0,
                        w.TEXTURE_2D,
                        l,
                        0
                      ),
                      w.viewport(0, 0, e, t),
                      w.clear(w.COLOR_BUFFER_BIT),
                      {
                        texture: l,
                        fbo: s,
                        width: e,
                        height: t,
                        attach: (e) => (
                          w.activeTexture(w.TEXTURE0 + e),
                          w.bindTexture(w.TEXTURE_2D, l),
                          e
                        ),
                      }
                    );
                  }
                  function eu(e, t, n, r, i, o) {
                    let l = ea(e, t, n, r, i, o),
                      s = ea(e, t, n, r, i, o);
                    return {
                      get read() {
                        return l;
                      },
                      set read(value) {
                        l = value;
                      },
                      get write() {
                        return s;
                      },
                      set write(value) {
                        s = value;
                      },
                      swap() {
                        let e = l;
                        (l = s), (s = e);
                      },
                    };
                  }
                  function ed(e, t, n, r, i, o, l) {
                    var s;
                    let c;
                    return (
                      (e.read =
                        ((s = e.read),
                        (c = ea(t, n, r, i, o, l)),
                        q.bind(),
                        w.uniform1i(q.uniforms.uTexture, s.attach(0)),
                        w.uniform1f(q.uniforms.value, 1),
                        V(c.fbo),
                        c)),
                      (e.write = ea(t, n, r, i, o, l)),
                      e
                    );
                  }
                  function ef(s, c, a, u, d) {
                    w.viewport(0, 0, t, n),
                      et.bind(),
                      w.uniform1i(et.uniforms.uTarget, l.read.attach(0)),
                      w.uniform1f(et.uniforms.aspectRatio, e.width / e.height),
                      w.uniform2f(
                        et.uniforms.point,
                        s / e.width,
                        1 - c / e.height
                      ),
                      w.uniform3f(et.uniforms.color, a, -u, 1),
                      w.uniform1f(et.uniforms.radius, h.SPLAT_RADIUS / 100),
                      V(l.write.fbo),
                      l.swap(),
                      w.viewport(0, 0, r, i),
                      w.uniform1i(et.uniforms.uTarget, o.read.attach(0)),
                      w.uniform3f(et.uniforms.color, d.r, d.g, d.b),
                      V(o.write.fbo),
                      o.swap();
                  }
                  function em(t) {
                    for (let n = 0; n < t; n++) {
                      let t = eh();
                      (t.r *= 10),
                        (t.g *= 10),
                        (t.b *= 10),
                        ef(
                          e.width * Math.random(),
                          e.height * Math.random(),
                          1e3 * (Math.random() - 0.5),
                          1e3 * (Math.random() - 0.5),
                          t
                        );
                    }
                  }
                  function eh() {
                    let e = (function (e, t, n) {
                      let r, i, o, l, s, c, a;
                      switch (
                        ((c = 1 * (1 - 0.1 * (s = 6 - (l = Math.floor(6))))),
                        (a = n * (1 - (1 - s) * t)),
                        l % 6)
                      ) {
                        case 0:
                          (r = n), (i = a), (o = 0.9);
                          break;
                        case 1:
                          (r = c), (i = n), (o = 0.9);
                          break;
                        case 2:
                          (r = 0.9), (i = n), (o = a);
                          break;
                        case 3:
                          (r = 0.9), (i = c), (o = n);
                          break;
                        case 4:
                          (r = a), (i = 0.9), (o = n);
                          break;
                        case 5:
                          (r = n), (i = 0.9), (o = c);
                      }
                      return { r, g: i, b: o };
                    })(1, 0.1, 1);
                    return (e.r *= 0.0015), (e.g *= 0.06), (e.b *= 0.03), e;
                  }
                  function eg(e) {
                    let t = w.drawingBufferWidth / w.drawingBufferHeight;
                    t < 1 && (t = 1 / t);
                    let n = Math.round(e * t),
                      r = Math.round(e);
                    return w.drawingBufferWidth > w.drawingBufferHeight
                      ? { width: n, height: r }
                      : { width: r, height: n };
                  }
                  function ep(e, t, n) {
                    return { x: t / e.width, y: n / e.height };
                  }
                  ec(),
                    em(),
                    Date.now(),
                    (function d() {
                      (e.width != e.clientWidth ||
                        e.height != e.clientHeight) &&
                        ((e.width = e.clientWidth),
                        (e.height = e.clientHeight),
                        ec()),
                        (function () {
                          x.length > 0 && em(x.pop());
                          for (let e = 0; e < p.length; e++) {
                            let t = p[e];
                            if (16 > Math.abs(t.dx) && 16 > Math.abs(t.dy))
                              return;
                            t.moved &&
                              (ef(t.x, t.y, t.dx, t.dy, t.color),
                              (t.moved = !1));
                          }
                        })(),
                        h.PAUSED ||
                          (function (e) {
                            w.disable(w.BLEND),
                              w.viewport(0, 0, t, n),
                              ei.bind(),
                              w.uniform2f(ei.uniforms.texelSize, 1 / t, 1 / n),
                              w.uniform1i(
                                ei.uniforms.uVelocity,
                                l.read.attach(0)
                              ),
                              V(c.fbo),
                              eo.bind(),
                              w.uniform2f(eo.uniforms.texelSize, 1 / t, 1 / n),
                              w.uniform1i(
                                eo.uniforms.uVelocity,
                                l.read.attach(0)
                              ),
                              w.uniform1i(eo.uniforms.uCurl, c.attach(1)),
                              w.uniform1f(eo.uniforms.curl, h.CURL),
                              w.uniform1f(eo.uniforms.dt, 0.016),
                              V(l.write.fbo),
                              l.swap(),
                              er.bind(),
                              w.uniform2f(er.uniforms.texelSize, 1 / t, 1 / n),
                              w.uniform1i(
                                er.uniforms.uVelocity,
                                l.read.attach(0)
                              ),
                              V(s.fbo),
                              q.bind(),
                              w.uniform1i(
                                q.uniforms.uTexture,
                                a.read.attach(0)
                              ),
                              w.uniform1f(
                                q.uniforms.value,
                                h.PRESSURE_DISSIPATION
                              ),
                              V(a.write.fbo),
                              a.swap(),
                              el.bind(),
                              w.uniform2f(el.uniforms.texelSize, 1 / t, 1 / n),
                              w.uniform1i(el.uniforms.uDivergence, s.attach(0));
                            for (let e = 0; e < h.PRESSURE_ITERATIONS; e++)
                              w.uniform1i(
                                el.uniforms.uPressure,
                                a.read.attach(1)
                              ),
                                V(a.write.fbo),
                                a.swap();
                            es.bind(),
                              w.uniform2f(es.uniforms.texelSize, 1 / t, 1 / n),
                              w.uniform1i(
                                es.uniforms.uPressure,
                                a.read.attach(0)
                              ),
                              w.uniform1i(
                                es.uniforms.uVelocity,
                                l.read.attach(1)
                              ),
                              V(l.write.fbo),
                              l.swap(),
                              en.bind(),
                              w.uniform2f(en.uniforms.texelSize, 1 / t, 1 / n),
                              y.supportLinearFiltering ||
                                w.uniform2f(
                                  en.uniforms.dyeTexelSize,
                                  1 / t,
                                  1 / n
                                );
                            let u = l.read.attach(0);
                            w.uniform1i(en.uniforms.uVelocity, u),
                              w.uniform1i(en.uniforms.uSource, u),
                              w.uniform1f(en.uniforms.dt, 0.016),
                              w.uniform1f(
                                en.uniforms.dissipation,
                                h.VELOCITY_DISSIPATION
                              ),
                              V(l.write.fbo),
                              l.swap(),
                              w.viewport(0, 0, r, i),
                              y.supportLinearFiltering ||
                                w.uniform2f(
                                  en.uniforms.dyeTexelSize,
                                  1 / r,
                                  1 / i
                                ),
                              w.uniform1i(
                                en.uniforms.uVelocity,
                                l.read.attach(0)
                              ),
                              w.uniform1i(
                                en.uniforms.uSource,
                                o.read.attach(1)
                              ),
                              w.uniform1f(
                                en.uniforms.dissipation,
                                h.DENSITY_DISSIPATION
                              ),
                              V(o.write.fbo),
                              o.swap();
                          })(0.016),
                        (function (t) {
                          h.BLOOM &&
                            (function (e, t) {
                              if (v.length < 2) return;
                              let n = t;
                              w.disable(w.BLEND), $.bind();
                              let r =
                                  h.BLOOM_THRESHOLD * h.BLOOM_SOFT_KNEE + 1e-4,
                                i = h.BLOOM_THRESHOLD - r;
                              w.uniform3f($.uniforms.curve, i, 2 * r, 0.25 / r),
                                w.uniform1f(
                                  $.uniforms.threshold,
                                  h.BLOOM_THRESHOLD
                                ),
                                w.uniform1i($.uniforms.uTexture, e.attach(0)),
                                w.viewport(0, 0, n.width, n.height),
                                V(n.fbo),
                                J.bind();
                              for (let e = 0; e < v.length; e++) {
                                let t = v[e];
                                w.uniform2f(
                                  J.uniforms.texelSize,
                                  1 / n.width,
                                  1 / n.height
                                ),
                                  w.uniform1i(J.uniforms.uTexture, n.attach(0)),
                                  w.viewport(0, 0, t.width, t.height),
                                  V(t.fbo),
                                  (n = t);
                              }
                              w.blendFunc(w.ONE, w.ONE), w.enable(w.BLEND);
                              for (let e = v.length - 2; e >= 0; e--) {
                                let t = v[e];
                                w.uniform2f(
                                  J.uniforms.texelSize,
                                  1 / n.width,
                                  1 / n.height
                                ),
                                  w.uniform1i(J.uniforms.uTexture, n.attach(0)),
                                  w.viewport(0, 0, t.width, t.height),
                                  V(t.fbo),
                                  (n = t);
                              }
                              w.disable(w.BLEND),
                                ee.bind(),
                                w.uniform2f(
                                  ee.uniforms.texelSize,
                                  1 / n.width,
                                  1 / n.height
                                ),
                                w.uniform1i(ee.uniforms.uTexture, n.attach(0)),
                                w.uniform1f(
                                  ee.uniforms.intensity,
                                  h.BLOOM_INTENSITY
                                ),
                                w.viewport(0, 0, t.width, t.height),
                                V(t.fbo);
                            })(o.read, u),
                            w.blendFunc(w.ONE, w.ONE_MINUS_SRC_ALPHA),
                            w.enable(w.BLEND);
                          let n = (0, w.drawingBufferWidth),
                            r = null == t ? w.drawingBufferHeight : i;
                          if ((w.viewport(0, 0, n, r), !h.TRANSPARENT)) {
                            G.bind();
                            let e = h.BACK_COLOR;
                            w.uniform4f(
                              G.uniforms.color,
                              e.r / 255,
                              e.g / 255,
                              e.b / 255,
                              1
                            ),
                              V(t);
                          }
                          if (
                            (null == t &&
                              h.TRANSPARENT &&
                              (W.bind(),
                              w.uniform1f(
                                W.uniforms.aspectRatio,
                                e.width / e.height
                              ),
                              V(null)),
                            h.SHADING)
                          ) {
                            let e = h.BLOOM ? K : Q;
                            if (
                              (e.bind(),
                              w.uniform2f(e.uniforms.texelSize, 1 / n, 1 / r),
                              w.uniform1i(
                                e.uniforms.uTexture,
                                o.read.attach(0)
                              ),
                              h.BLOOM)
                            ) {
                              w.uniform1i(e.uniforms.uBloom, u.attach(1)),
                                w.uniform1i(e.uniforms.uDithering, U.attach(2));
                              let t = ep(U, n, r);
                              w.uniform2f(e.uniforms.ditherScale, t.x, t.y);
                            }
                          } else {
                            let e = h.BLOOM ? Y : X;
                            if (
                              (e.bind(),
                              w.uniform1i(
                                e.uniforms.uTexture,
                                o.read.attach(0)
                              ),
                              h.BLOOM)
                            ) {
                              w.uniform1i(e.uniforms.uBloom, u.attach(1)),
                                w.uniform1i(e.uniforms.uDithering, U.attach(2));
                              let t = ep(U, n, r);
                              w.uniform2f(e.uniforms.ditherScale, t.x, t.y);
                            }
                          }
                          V(t);
                        })(null),
                        requestAnimationFrame(d);
                    })(),
                    window.addEventListener("mousemove", (e) => {
                      p[0].moved = p[0].down;
                      let t = (e.clientX - p[0].x) * 10,
                        n = (e.clientY - p[0].y) * 10;
                      (p[0].dx = t),
                        (p[0].dy = n),
                        (p[0].x = e.clientX),
                        (p[0].y = e.clientY);
                    }),
                    window.addEventListener(
                      "touchmove",
                      (e) => {
                        e.preventDefault();
                        let t = e.targetTouches;
                        for (let e = 0; e < t.length; e++) {
                          let n = p[e];
                          (n.moved = n.down),
                            (n.dx = (t[e].pageX - n.x) * 8),
                            (n.dy = (t[e].pageY - n.y) * 8),
                            (n.x = t[e].pageX),
                            (n.y = t[e].pageY);
                        }
                      },
                      !1
                    ),
                    window.addEventListener("mousemove", () => {
                      (p[0].down = !0), (p[0].color = eh());
                    }),
                    window.addEventListener("touchstart", (e) => {
                      e.preventDefault();
                      let t = e.targetTouches;
                      for (let e = 0; e < t.length; e++)
                        e >= p.length && p.push(new g()),
                          (p[e].id = t[e].identifier),
                          (p[e].down = !0),
                          (p[e].x = t[e].pageX),
                          (p[e].y = t[e].pageY),
                          (p[e].color = eh());
                    }),
                    window.addEventListener("mouseup", () => {
                      p[0].down = !1;
                    }),
                    window.addEventListener("touchend", (e) => {
                      let t = e.changedTouches;
                      for (let e = 0; e < t.length; e++)
                        for (let n = 0; n < p.length; n++)
                          t[e].identifier == p[n].id && (p[n].down = !1);
                    }),
                    window.addEventListener("keydown", (e) => {
                      "KeyP" === e.code && (h.PAUSED = !h.PAUSED),
                        " " === e.key &&
                          x.push(parseInt(20 * Math.random()) + 5);
                    });
                })(e.current),
                (t.current = !0));
            }, []),
            (0, i.jsx)(sL, { ref: e })
          );
        },
        sS = (0, n(161).F)((e, t) => ({
          hoverType: "default",
          setHoverType: (t) => {
            e({ hoverType: t });
          },
        })),
        sZ = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-4be4567b-0" })(
          [
            "position:fixed;top:0;left:0;transform:translate(50%,-999%);width:",
            ";height:",
            ";pointer-events:none;user-select:none;z-index:105;.circle{background-color:",
            ";box-shadow:0px 0px 4px #23FAAD;transition:transform 0.3s ease-in-out;transform:translate(-100%,-100%);}.click-here-circle{width:",
            ";height:",
            ";border:1px solid ",
            ";transform:translate(-50%,-50%) scale(0);transition:transform 0.3s ease-in-out;}.click-here-text{",
            " position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);white-space:nowrap;text-align:center;font-size:",
            ";color:",
            ";opacity:0;transition:opacity 0.3s ease-in-out,transform 0.3s ease-in-out;}&.click-here{.circle{transform:scale(0);}.click-here-circle{transform:translate(-50%,-50%) scale(1);}.click-here-text{opacity:1;transform:translate(-50%,-50%) scale(1);}}",
          ],
          (0, s.rm)(12),
          (0, s.rm)(12),
          s.O9.green100,
          (0, s.rm)(95),
          (0, s.rm)(95),
          s.O9.green100,
          (0, d.ul)(300),
          (0, s.rm)(18),
          s.O9.green100
        ),
        sF = (0, c.ZP)(h.q.div).withConfig({ componentId: "sc-4be4567b-1" })([
          "position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;overflow:hidden;mix-blend-mode:difference;transition:transform 0.3s ease-in-out;",
        ]),
        sO = () => {
          let e = (0, K.Lm)(),
            [t, n] = sS((e) => [e.hoverType, e.setHoverType]),
            r = (0, a.useRef)(null),
            o = (0, a.useRef)({ x: 0, y: 0 }),
            l = (0, a.useRef)({ x: 0, y: 0 }),
            [s, c] = (0, a.useState)(!1);
          return ((0, a.useEffect)(() => {
            document.body.style.cursor =
              "click-here" === t ? "pointer" : "auto";
          }, [t]),
          (0, a.useEffect)(() => {
            let e = (e) => {
                (o.current = { x: e.clientX, y: e.clientY }),
                  e7.V9.current < 4 && !s ? (c(!0), n("default")) : c(!1);
              },
              t = document.getElementById("firstVideoWrapper"),
              r = document.getElementById("secondVideoWrapper"),
              i = () => {
                n("click-here");
              },
              l = () => {
                n("default");
              };
            return (
              null == t || t.addEventListener("mouseenter", i),
              null == t || t.addEventListener("mouseleave", l),
              null == r || r.addEventListener("mouseenter", i),
              null == r || r.addEventListener("mouseleave", l),
              window.addEventListener("mousemove", e),
              () => {
                window.removeEventListener("mousemove", e),
                  null == t || t.removeEventListener("mouseenter", i),
                  null == t || t.removeEventListener("mouseleave", l),
                  null == r || r.removeEventListener("mouseenter", i),
                  null == r || r.removeEventListener("mouseleave", l);
              }
            );
          }, [n]),
          (0, t4.y)(
            () => {
              if (window.innerWidth < 1024 || !r.current) return;
              let e = (0, tL.t7)(l.current.x, o.current.x, 0.075),
                t = (0, tL.t7)(l.current.y, o.current.y, 0.075);
              (l.current = { x: e, y: t }),
                (r.current.style.transform = "translate("
                  .concat(e, "px, ")
                  .concat(t, "px)"));
            },
            { framerate: 10 }
          ),
          e < 1024)
            ? null
            : (0, i.jsxs)(sZ, {
                ref: r,
                className: t,
                children: [
                  (0, i.jsx)(sF, { className: "circle" }),
                  (0, i.jsx)(sF, { className: "click-here-circle" }),
                  (0, i.jsx)("span", {
                    className: "click-here-text",
                    children: "Click here",
                  }),
                ],
              });
        };
      function sN() {
        let e = (0, r._)(["\n        padding: ", " ", " ", " ", ";    \n    "]);
        return (
          (sN = function () {
            return e;
          }),
          e
        );
      }
      function sM() {
        let e = (0, r._)(["\n            height: ", ";    \n        "]);
        return (
          (sM = function () {
            return e;
          }),
          e
        );
      }
      let sH = c.ZP.div.withConfig({ componentId: "sc-f34420b3-0" })(
          ["position:absolute;top:150vh;left:0;", ";width:100%;"],
          (0, nb.NN)(100)
        ),
        sV = c.ZP.div.withConfig({ componentId: "sc-f34420b3-1" })(
          ["position:absolute;top:250vh;left:0;", ";width:100%;"],
          (0, nb.NN)(80)
        ),
        sU = c.ZP.div.withConfig({ componentId: "sc-f34420b3-2" })(
          ["position:absolute;top:320vh;left:0;", ";width:100%;"],
          (0, nb.NN)(80)
        ),
        sq = c.ZP.div.withConfig({ componentId: "sc-f34420b3-3" })(
          ["position:absolute;", ";bottom:0;left:0;width:100%;"],
          (0, nb.NN)(200)
        ),
        sG = c.ZP.div.withConfig({ componentId: "sc-f34420b3-4" })(
          [
            "position:fixed;width:100%;top:0;overflow:hidden;z-index:203;padding:",
            " ",
            " ",
            " ",
            ";",
            "",
          ],
          (0, s.rm)(25),
          (0, s.rm)(25),
          (0, s.rm)(0),
          (0, s.rm)(25),
          s.BC.xsm(
            sN(),
            (0, s.rm)(14),
            (0, s.rm)(16),
            (0, s.rm)(0),
            (0, s.rm)(16)
          )
        ),
        sW = c.ZP.div.withConfig({ componentId: "sc-f34420b3-5" })(
          ["position:relative;", " width:100%;"],
          (0, nb.NN)(700)
        ),
        sX = c.ZP.div.withConfig({ componentId: "sc-f34420b3-6" })(
          [
            "position:sticky;top:0;width:100%;",
            " z-index:100;overflow:hidden;",
          ],
          (0, nb.NN)(100)
        ),
        sY = c.ZP.div.withConfig({ componentId: "sc-f34420b3-7" })([
          "width:100%;height:0.1px;",
        ]),
        sQ = c.ZP.div.withConfig({ componentId: "sc-f34420b3-8" })(
          [
            "position:relative;.vid{position:absolute;width:100%;height:100%;top:0;left:0;.wrapper{position:relative;width:100%;height:100%;overflow:hidden;}}&::before{position:absolute;width:100%;height:",
            ";left:0;bottom:",
            ';background:linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));content:"";z-index:105;pointer-events:none;',
            "}",
          ],
          (0, s.rm)(300),
          (0, s.rm)(-0),
          s.BC.xsm(sM(), (0, s.rm)(50))
        ),
        sK = c.ZP.div.withConfig({ componentId: "sc-f34420b3-9" })(
          [
            "position:relative;.vid{position:sticky;width:100%;",
            " ",
            " top:0;left:0;.wrapper{position:relative;width:100%;height:100%;overflow:hidden;}}",
          ],
          (0, nb.NN)(100),
          (0, nb.I4)(-100)
        ),
        s$ = c.ZP.div.withConfig({ componentId: "sc-f34420b3-10" })([
          "position:absolute;top:200vh;left:0;width:100%;",
        ]),
        sJ = c.ZP.div.withConfig({ componentId: "sc-f34420b3-11" })(
          ["position:absolute;top:550vh;left:0;width:100%;", ";"],
          (0, nb.NN)(150)
        ),
        s0 = [
          { text: "Problems", link: "" },
          { text: "Get More", link: "Benefits" },
          { text: "Ecosystem", link: "Ecosystem" },
          { text: "Features", link: "Features" },
          { text: "Security", link: "Security" },
          { text: "Blog", link: "Blog" },
          { text: "FAQ", link: "FAQ" },
        ],
        s1 = [
          { id: "" },
          { id: "Benefits" },
          { id: "Ecosystem" },
          { id: "Features" },
          { id: "Security" },
          { id: "Blog" },
          { id: "Earned" },
          { id: "Footer" },
        ];
      var s2 = !0;
      function s5(e) {
        var t, n, r, o, c, u, d, g, p;
        let { data: x } = e,
          v = (0, a.useRef)(null),
          w = (0, a.useRef)(null),
          y = (0, a.useRef)(null),
          C = (0, a.useRef)(null),
          b = (0, a.useRef)(null),
          j = (0, a.useRef)(null),
          _ = (0, a.useRef)(null),
          B = (0, a.useRef)(null),
          R = (0, K.Lm)(),
          T = (0, a.useRef)(null),
          z = (0, f.Z)((e) => e.setCurrentScreenId),
          E = (0, f.Z)((e) => e.isScrolling),
          [P, I] = (0, m.YD)(),
          [D, L] = (0, m.YD)(),
          [k, A] = (0, m.YD)(),
          [S, Z] = (0, m.YD)(),
          [F, O] = (0, m.YD)(),
          [N, M] = (0, m.YD)(),
          [H, U] = (0, m.YD)(),
          [q, G] = (0, m.YD)();
        (0, a.useEffect)(() => {
          !E &&
            (I && z(""),
            L && z("Benefits"),
            A && z("Ecosystem"),
            Z && z("Features"),
            O && z("Audits"),
            M && z("Blog"),
            U && z("Earned"),
            G && z("Footer"));
        }, [I, L, Z, O, M, U, G, E]);
        let W = (0, a.useRef)(null),
          X = (0, f.Z)((e) => e.isContentLoaded),
          Y = (0, a.useRef)(X);
        (0, a.useEffect)(() => {
          Y.current = X;
        }, [X]);
        let [Q, $] = (0, h.q_)(() => ({
          progress: 0,
          onChange: () => {
            var e;
            if (
              (null === (e = o6.borderRef) || void 0 === e
                ? void 0
                : e.current) &&
              W.current &&
              B.current
            ) {
              let e = Q.progress.get(),
                t = ""
                  .concat((0, s.rm)(25 - 25 * e), " ")
                  .concat((0, s.rm)(25 - 25 * e), " ")
                  .concat((0, s.rm)(0), " ")
                  .concat((0, s.rm)(25 - 25 * e));
              (o6.borderRef.current.style.opacity = "".concat(
                Math.max(0, 1 - 2 * e)
              )),
                (o6.borderRef.current.style.transform = "scale(".concat(
                  Math.max(1, 1 + 0.2 * e),
                  ")"
                )),
                (W.current.style.padding = "".concat(t)),
                (B.current.style.right = "".concat((0, s.rm)(45 - 30 * e)));
            }
          },
        }));
        return (
          (0, e7.C0)([0, 2], (e) => {
            Y.current &&
              !(R <= 1024) &&
              (e > 0.5 ? $.start({ progress: 1 }) : $.start({ progress: 0 }));
          }),
          (0, a.useEffect)(() => {
            e7.V9.current > 2 && $.start({ progress: 1 });
          }, [e7.V9.current]),
          (0, a.useEffect)(() => {
            let e = (e) => {
              ("t" === e.key || "T" === e.key) &&
                window.open("https://app.ramdai.cc/", "_blank");
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l(), {
                children: (0, i.jsx)(
                  "title",
                  { children: "Ramda AI Finance / The Liquidity Protocol of DEFI" },
                  "title"
                ),
              }),
              (0, i.jsx)(sG, {
                ref: W,
                children: (0, i.jsx)(V, { data: x[0] }),
              }),
              (0, i.jsx)(ll, {}),
              (0, i.jsx)(sk, {}),
              (0, i.jsx)(rY, {
                schemeSrc: "/schemes/lines_1.mp4",
                screenNumber: 1,
                screensLength: 2,
              }),
              (0, i.jsx)(rY, {
                schemeSrc: "/schemes/lines_2.mp4",
                screenNumber: 2,
                screensLength: 3,
              }),
              (0, i.jsx)(rY, {
                schemeSrc: "/schemes/lines_3.mp4",
                screenNumber: 3,
                screensLength: 4,
              }),
              (0, i.jsxs)(sW, {
                ref: v,
                children: [
                  (0, i.jsx)(e7.p1, {}),
                  (0, i.jsx)(sH, { ref: w }),
                  (0, i.jsx)(sV, { ref: y }),
                  (0, i.jsx)(sU, { ref: C }),
                  (0, i.jsx)(sq, { ref: T }),
                  (0, i.jsx)(sY, { ref: P }),
                  (0, i.jsx)(s$, { id: "Schemes" }),
                  (0, i.jsx)(sJ, { ref: _ }),
                  (0, i.jsxs)(sX, {
                    children: [
                      (0, i.jsx)(ta, {
                        screenNumber: 0,
                        scrollTrigger: v,
                        data: x[1],
                      }),
                      (0, i.jsx)(tz, {
                        firstText:
                          null === (t = x[2]) || void 0 === t
                            ? void 0
                            : t.title,
                        secondText:
                          null === (n = x[2]) || void 0 === n
                            ? void 0
                            : n.secondTitle,
                        screenNumber: 1,
                        descriptionText:
                          null === (r = x[2]) || void 0 === r
                            ? void 0
                            : r.description,
                      }),
                      (0, i.jsx)(tz, {
                        screenNumber: 2,
                        firstText:
                          null === (o = x[3]) || void 0 === o
                            ? void 0
                            : o.title,
                        secondText:
                          null === (c = x[3]) || void 0 === c
                            ? void 0
                            : c.secondTitle,
                        descriptionText:
                          null === (u = x[3]) || void 0 === u
                            ? void 0
                            : u.description,
                      }),
                      (0, i.jsx)(tz, {
                        screenNumber: 3,
                        firstText:
                          null === (d = x[4]) || void 0 === d
                            ? void 0
                            : d.title,
                        secondText:
                          null === (g = x[4]) || void 0 === g
                            ? void 0
                            : g.secondTitle,
                        descriptionText:
                          null === (p = x[4]) || void 0 === p
                            ? void 0
                            : p.description,
                      }),
                      (0, i.jsx)(nl, { containerRef: _ }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(sQ, {
                ref: b,
                children: [
                  (0, i.jsx)("div", {
                    className: "vid",
                    children: (0, i.jsx)("div", {
                      className: "wrapper",
                      children: (0, i.jsx)(l8, { triggerRef: b }),
                    }),
                  }),
                  (0, i.jsx)(sY, { ref: D }),
                  (0, i.jsx)(nZ, { data: x[5] }),
                  (0, i.jsx)(sY, { ref: k }),
                  (0, i.jsx)(lG, { data: x[6] }),
                ],
              }),
              (0, i.jsxs)(sK, {
                ref: j,
                children: [
                  (0, i.jsx)("div", {
                    className: "vid",
                    children: (0, i.jsx)("div", {
                      className: "wrapper",
                      children: (0, i.jsx)(sr, { triggerRef: j }),
                    }),
                  }),
                  (0, i.jsx)(sY, { ref: S }),
                  (0, i.jsx)(iV, { data: x[7] }),
                  (0, i.jsx)(n7, { data: x[8] }),
                  (0, i.jsx)(sY, { ref: F }),
                  (0, i.jsx)(rN, { data: x[9] }),
                  (0, i.jsx)(oi, { data: x[10] }),
                  (0, i.jsx)(sY, { ref: N }),
                  (0, i.jsx)(sD, { data: x[11] }),
                  (0, i.jsx)(lT, { data: x[12] }),
                  (0, i.jsx)(sY, { ref: H }),
                  (0, i.jsx)(oC, { data: x[13] }),
                  (0, i.jsx)(sY, { ref: q }),
                  (0, i.jsx)(o0, { data: x[14] }),
                ],
              }),
              (0, i.jsx)(lP, {
                navigationData: s1,
                screens: 9,
                progressBarRef: B,
              }),
              (0, i.jsx)(l6, {
                navigationData: s0,
                footerData: x[14],
                headerData: x[0],
              }),
              (0, i.jsx)(sO, {}),
            ],
          })
        );
      }
    },
    4091: function (e, t, n) {
      "use strict";
      let r = (0, n(3445).Ue)((e) => ({
        isContentLoaded: !1,
        setIsContentLoaded: (t) => e({ isContentLoaded: t }),
        progress: 0,
        setProgress: (t) => e({ progress: t }),
        currentScreenId: "",
        setCurrentScreenId: (t) => e({ currentScreenId: t }),
        isMenuOpened: !1,
        setIsMenuOpened: (t) => e({ isMenuOpened: t }),
        isScrolling: !1,
        setIsScrolling: (t) => e({ isScrolling: t }),
        activeIndex: 0,
        setActiveIndex: (t) => e({ activeIndex: t }),
        isSceneReady: !1,
        setIsSceneReady: (t) => e({ isSceneReady: t }),
      }));
      t.Z = r;
    },
  },
  function (e) {
    e.O(0, [877, 888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
