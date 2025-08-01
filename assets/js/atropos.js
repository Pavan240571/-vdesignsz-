/**
 * Atropos 2.0.2
 * Touch-friendly 3D parallax hover effects
 * https://atroposjs.com
 *
 * Copyright 2021-2023 
 *
 * Released under the MIT License
 *
 * Released on: July 4, 2023
 */

var Atropos = function() {
    "use strict";
    function t() {
        return t = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var a in o)
                    Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a])
            }
            return t
        }
        ,
        t.apply(this, arguments)
    }
    var e = function(t, e) {
        return t.querySelector(e)
    }
      , o = function(t) {
        void 0 === t && (t = {});
        var e = {};
        return Object.keys(t).forEach((function(o) {
            void 0 !== t[o] && (e[o] = t[o])
        }
        )),
        e
    }
      , a = {
        alwaysActive: !1,
        activeOffset: 50,
        shadowOffset: 50,
        shadowScale: 1,
        duration: 300,
        rotate: !0,
        rotateTouch: !0,
        rotateXMax: 15,
        rotateYMax: 15,
        rotateXInvert: !1,
        rotateYInvert: !1,
        stretchX: 0,
        stretchY: 0,
        stretchZ: 0,
        commonOrigin: !0,
        shadow: !0,
        highlight: !0
    };
    return function(n) {
        void 0 === n && (n = {});
        var r, i, s, c, p, u, l, d, f, v, h, m, y = n, g = y.el, M = y.eventsEl, x = n.isComponent, O = {
            __atropos__: !0,
            params: t({}, a, {
                onEnter: null,
                onLeave: null,
                onRotate: null
            }, o(n || {})),
            destroyed: !1,
            isActive: !1
        }, w = O.params, b = [];
        !function t() {
            m = requestAnimationFrame((function() {
                b.forEach((function(t) {
                    if ("function" == typeof t)
                        t();
                    else {
                        var e = t.element
                          , o = t.prop
                          , a = t.value;
                        e.style[o] = a
                    }
                }
                )),
                b.splice(0, b.length),
                t()
            }
            ))
        }();
        var X, Y = function(t, e) {
            b.push({
                element: t,
                prop: "transitionDuration",
                value: e
            })
        }, _ = function(t, e) {
            b.push({
                element: t,
                prop: "transitionTimingFunction",
                value: e
            })
        }, L = function(t, e) {
            b.push({
                element: t,
                prop: "transform",
                value: e
            })
        }, T = function(t, e) {
            b.push({
                element: t,
                prop: "opacity",
                value: e
            })
        }, A = function(t, e, o, a) {
            return t.addEventListener(e, o, a)
        }, E = function(t, e, o, a) {
            return t.removeEventListener(e, o, a)
        }, R = function(t) {
            var e = t.rotateXPercentage
              , o = void 0 === e ? 0 : e
              , a = t.rotateYPercentage
              , n = void 0 === a ? 0 : a
              , i = t.duration
              , s = t.opacityOnly
              , c = t.easeOut;
            (function(t, e) {
                return t.querySelectorAll(e)
            }
            )(r, "[data-atropos-offset], [data-atropos-opacity]").forEach((function(t) {
                Y(t, i),
                _(t, c ? "ease-out" : "");
                var e = function(t) {
                    if (t.dataset.atroposOpacity && "string" == typeof t.dataset.atroposOpacity)
                        return t.dataset.atroposOpacity.split(";").map((function(t) {
                            return parseFloat(t)
                        }
                        ))
                }(t);
                if (0 === o && 0 === n)
                    s || L(t, "translate3d(0, 0, 0)"),
                    e && T(t, e[0]);
                else {
                    var a = parseFloat(t.dataset.atroposOffset) / 100;
                    if (Number.isNaN(a) || s || L(t, "translate3d(" + -n * -a + "%, " + o * -a + "%, 0)"),
                    e) {
                        var r = e[0]
                          , p = e[1]
                          , u = Math.max(Math.abs(o), Math.abs(n));
                        T(t, r + (p - r) * u / 100)
                    }
                }
            }
            ))
        }, I = function(t, e) {
            var o = g !== M;
            if (p || (p = g.getBoundingClientRect()),
            o && !u && (u = M.getBoundingClientRect()),
            void 0 === t && void 0 === e) {
                var a = o ? u : p;
                t = a.left + a.width / 2,
                e = a.top + a.height / 2
            }
            var n, r = 0, s = 0, c = p, l = c.top, f = c.left, v = c.width, h = c.height;
            if (o) {
                var m = u
                  , y = m.top
                  , x = m.left
                  , O = m.width
                  , X = m.height
                  , A = v / 2 + (f - x)
                  , E = h / 2 + (l - y)
                  , I = t - x
                  , P = e - y;
                s = w.rotateYMax * (I - A) / (O - v / 2) * -1,
                r = w.rotateXMax * (P - E) / (X - h / 2),
                n = t - f + "px " + (e - l) + "px"
            } else {
                var j = v / 2
                  , C = h / 2
                  , D = t - f
                  , F = e - l;
                s = w.rotateYMax * (D - j) / (v / 2) * -1,
                r = w.rotateXMax * (F - C) / (h / 2)
            }
            r = Math.min(Math.max(-r, -w.rotateXMax), w.rotateXMax),
            w.rotateXInvert && (r = -r),
            s = Math.min(Math.max(-s, -w.rotateYMax), w.rotateYMax),
            w.rotateYInvert && (s = -s);
            var N, S, k = r / w.rotateXMax * 100, q = s / w.rotateYMax * 100, B = (o ? q / 100 * w.stretchX : 0) * (w.rotateYInvert ? -1 : 1), Z = (o ? k / 100 * w.stretchY : 0) * (w.rotateXInvert ? -1 : 1), z = o ? Math.max(Math.abs(k), Math.abs(q)) / 100 * w.stretchZ : 0;
            L(i, "translate3d(" + B + "%, " + -Z + "%, " + -z + "px) rotateX(" + r + "deg) rotateY(" + s + "deg)"),
            n && w.commonOrigin && (N = i,
            S = n,
            b.push({
                element: N,
                prop: "transformOrigin",
                value: S
            })),
            d && (Y(d, w.duration + "ms"),
            _(d, "ease-out"),
            L(d, "translate3d(" + .25 * -q + "%, " + .25 * k + "%, 0)"),
            T(d, Math.max(Math.abs(k), Math.abs(q)) / 100)),
            R({
                rotateXPercentage: k,
                rotateYPercentage: q,
                duration: w.duration + "ms",
                easeOut: !0
            }),
            "function" == typeof w.onRotate && w.onRotate(r, s)
        }, P = function() {
            b.push((function() {
                return g.classList.add("atropos-active")
            }
            )),
            Y(i, w.duration + "ms"),
            _(i, "ease-out"),
            L(s, "translate3d(0,0, " + w.activeOffset + "px)"),
            Y(s, w.duration + "ms"),
            _(s, "ease-out"),
            l && (Y(l, w.duration + "ms"),
            _(l, "ease-out")),
            O.isActive = !0
        }, j = function(t) {
            if (f = void 0,
            !("pointerdown" === t.type && "mouse" === t.pointerType || "pointerenter" === t.type && "mouse" !== t.pointerType)) {
                if ("pointerdown" === t.type && t.preventDefault(),
                v = t.clientX,
                h = t.clientY,
                w.alwaysActive)
                    return p = void 0,
                    void (u = void 0);
                P(),
                "function" == typeof w.onEnter && w.onEnter()
            }
        }, C = function(t) {
            !1 === f && t.cancelable && t.preventDefault()
        }, D = function(t) {
            if (w.rotate && O.isActive) {
                if ("mouse" !== t.pointerType) {
                    if (!w.rotateTouch)
                        return;
                    t.preventDefault()
                }
                var e = t.clientX
                  , o = t.clientY
                  , a = e - v
                  , n = o - h;
                if ("string" == typeof w.rotateTouch && (0 !== a || 0 !== n) && void 0 === f) {
                    if (a * a + n * n >= 25) {
                        var r = 180 * Math.atan2(Math.abs(n), Math.abs(a)) / Math.PI;
                        f = "scroll-y" === w.rotateTouch ? r > 45 : 90 - r > 45
                    }
                    !1 === f && (g.classList.add("atropos-rotate-touch"),
                    t.cancelable && t.preventDefault())
                }
                "mouse" !== t.pointerType && f || I(e, o)
            }
        }, F = function(t) {
            if (p = void 0,
            u = void 0,
            O.isActive && !(t && "pointerup" === t.type && "mouse" === t.pointerType || t && "pointerleave" === t.type && "mouse" !== t.pointerType)) {
                if ("string" == typeof w.rotateTouch && f && g.classList.remove("atropos-rotate-touch"),
                w.alwaysActive)
                    return I(),
                    "function" == typeof w.onRotate && w.onRotate(0, 0),
                    void ("function" == typeof w.onLeave && w.onLeave());
                b.push((function() {
                    return g.classList.remove("atropos-active")
                }
                )),
                Y(s, w.duration + "ms"),
                _(s, ""),
                L(s, "translate3d(0,0, 0px)"),
                l && (Y(l, w.duration + "ms"),
                _(l, "")),
                d && (Y(d, w.duration + "ms"),
                _(d, ""),
                L(d, "translate3d(0, 0, 0)"),
                T(d, 0)),
                Y(i, w.duration + "ms"),
                _(i, ""),
                L(i, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),
                R({
                    duration: w.duration + "ms"
                }),
                O.isActive = !1,
                "function" == typeof w.onRotate && w.onRotate(0, 0),
                "function" == typeof w.onLeave && w.onLeave()
            }
        }, N = function(t) {
            var e = t.target;
            !M.contains(e) && e !== M && O.isActive && F()
        };
        return O.destroy = function() {
            O.destroyed = !0,
            cancelAnimationFrame(m),
            E(document, "click", N),
            E(M, "pointerdown", j),
            E(M, "pointerenter", j),
            E(M, "pointermove", D),
            E(M, "touchmove", C),
            E(M, "pointerleave", F),
            E(M, "pointerup", F),
            E(M, "lostpointercapture", F),
            delete g.__atropos__
        }
        ,
        "string" == typeof g && (g = e(document, g)),
        g && (g.__atropos__ || (void 0 !== M ? "string" == typeof M && (M = e(document, M)) : M = g,
        r = x ? g.parentNode.host : g,
        Object.assign(O, {
            el: g
        }),
        i = e(g, ".atropos-rotate"),
        s = e(g, ".atropos-scale"),
        c = e(g, ".atropos-inner"),
        g.__atropos__ = O)),
        g && M && (w.shadow && ((l = e(g, ".atropos-shadow")) || ((l = document.createElement("span")).classList.add("atropos-shadow"),
        X = !0),
        L(l, "translate3d(0,0,-" + w.shadowOffset + "px) scale(" + w.shadowScale + ")"),
        X && i.appendChild(l)),
        w.highlight && function() {
            var t;
            (d = e(g, ".atropos-highlight")) || ((d = document.createElement("span")).classList.add("atropos-highlight"),
            t = !0),
            L(d, "translate3d(0,0,0)"),
            t && c.appendChild(d)
        }(),
        w.rotateTouch && ("string" == typeof w.rotateTouch ? g.classList.add("atropos-rotate-touch-" + w.rotateTouch) : g.classList.add("atropos-rotate-touch")),
        e(r, "[data-atropos-opacity]") && R({
            opacityOnly: !0
        }),
        A(document, "click", N),
        A(M, "pointerdown", j),
        A(M, "pointerenter", j),
        A(M, "pointermove", D),
        A(M, "touchmove", C),
        A(M, "pointerleave", F),
        A(M, "pointerup", F),
        A(M, "lostpointercapture", F),
        w.alwaysActive && (P(),
        I())),
        O
    }
}();
