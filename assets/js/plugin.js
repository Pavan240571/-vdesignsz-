/*!
 * GSAP 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function _assertThisInitialized(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function r(t) {
        return "string" == typeof t
    }
    function s(t) {
        return "function" == typeof t
    }
    function t(t) {
        return "number" == typeof t
    }
    function u(t) {
        return void 0 === t
    }
    function v(t) {
        return "object" == typeof t
    }
    function w(t) {
        return !1 !== t
    }
    function x() {
        return "undefined" != typeof window
    }
    function y(t) {
        return s(t) || r(t)
    }
    function P(t) {
        return (i = yt(t, ot)) && Ce
    }
    function Q(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }
    function R(t, e) {
        return !e && console.warn(t)
    }
    function S(t, e) {
        return t && (ot[t] = e) && i && (i[t] = e) || ot
    }
    function T() {
        return 0
    }
    function ea(t) {
        var e, r, i = t[0];
        if (v(i) || s(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (r = gt.length; r-- && !gt[r].targetTest(i); )
                ;
            e = gt[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new jt(t[r],e))) || t.splice(r, 1);
        return t
    }
    function fa(t) {
        return t._gsap || ea(Ot(t))[0]._gsap
    }
    function ga(t, e, r) {
        return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
    }
    function ha(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function ia(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function ja(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }
    function ka(t, e) {
        var r = e.charAt(0)
          , i = parseFloat(e.substr(2));
        return t = parseFloat(t),
        "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }
    function la(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
            ;
        return i < r
    }
    function ma() {
        var t, e, r = ct.length, i = ct.slice(0);
        for (dt = {},
        t = ct.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function na(t, e, r, i) {
        ct.length && !B && ma(),
        t.render(e, r, i || B && e < 0 && (t._initted || t._startAt)),
        ct.length && !B && ma()
    }
    function oa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
    }
    function pa(t) {
        return t
    }
    function qa(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }
    function ta(t, e) {
        for (var r in e)
            "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }
    function ua(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }
    function va(t) {
        var e = t.parent || L
          , r = t.keyframes ? function _setKeyframeDefaults(i) {
            return function(t, e) {
                for (var r in e)
                    r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
            }
        }($(t.keyframes)) : qa;
        if (w(t.inherit))
            for (; e; )
                r(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }
    function xa(t, e, r, i, n) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
            for (a = e[n]; s && s[n] > a; )
                s = s._prev;
        return s ? (e._next = s._next,
        s._next = e) : (e._next = t[r],
        t[r] = e),
        e._next ? e._next._prev = e : t[i] = e,
        e._prev = s,
        e.parent = e._dp = t,
        e
    }
    function ya(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
          , a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a),
        a ? a._prev = n : t[i] === e && (t[i] = n),
        e._next = e._prev = e.parent = null
    }
    function za(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0
    }
    function Aa(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }
    function Ca(t, e, r, i) {
        return t._startAt && (B ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }
    function Ea(t) {
        return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function Ga(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function Ha(t) {
        return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0))
    }
    function Ia(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        Ha(t),
        r._dirty || Aa(r, t)),
        t
    }
    function Ja(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = Ga(t.rawTime(), e),
        (!e._dur || kt(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)),
        Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    0 <= r.rawTime() && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -V
        }
    }
    function Ka(e, r, i, n) {
        return r.parent && za(r),
        r._start = ja((t(i) ? i : i || e !== L ? xt(e, i, r) : e._time) + r._delay),
        r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)),
        xa(e, r, "_first", "_last", e._sort ? "_start" : 0),
        bt(r) || (e._recent = r),
        n || Ja(e, r),
        e._ts < 0 && Ia(e, e._tTime),
        e
    }
    function La(t, e) {
        return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }
    function Ma(t, e, r, i, n) {
        return Ht(t, e, n),
        t._initted ? !r && t._pt && !B && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Et.frame ? (ct.push(t),
        t._lazy = [n, i],
        1) : void 0 : 1
    }
    function Ra(t, e, r, i) {
        var n = t._repeat
          , a = ja(e) || 0
          , s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur),
        t._dur = a,
        t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a,
        0 < s && !i && Ia(t, t._tTime = t._tDur * s),
        t.parent && Ha(t),
        r || Aa(t.parent, t),
        t
    }
    function Sa(t) {
        return t instanceof Ut ? Aa(t) : Ra(t, t._dur)
    }
    function Va(e, r, i) {
        var n, a, s = t(r[1]), o = (s ? 2 : 1) + (e < 2 ? 0 : 1), u = r[o];
        if (s && (u.duration = r[1]),
        u.parent = i,
        e) {
            for (n = u,
            a = i; a && !("immediateRender"in n); )
                n = a.vars.defaults || {},
                a = w(a.vars.inherit) && a.parent;
            u.immediateRender = w(n.immediateRender),
            e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Gt(r[0],u,r[1 + o])
    }
    function Wa(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function Ya(t, e) {
        return r(t) && (e = st.exec(t)) ? e[1] : ""
    }
    function _a(t, e) {
        return t && v(t) && "length"in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
    }
    function cb(r) {
        return r = Ot(r)[0] || R("Invalid scope") || {},
        function(t) {
            var e = r.current || r.nativeElement || r;
            return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
        }
    }
    function db(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function eb(t) {
        if (s(t))
            return t;
        var p = v(t) ? t : {
            each: t
        }
          , _ = Yt(p.ease)
          , m = p.from || 0
          , g = parseFloat(p.base) || 0
          , y = {}
          , e = 0 < m && m < 1
          , T = isNaN(m) || e
          , b = p.axis
          , w = m
          , x = m;
        return r(m) ? w = x = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && T && (w = m[0],
        x = m[1]),
        function(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c = (r || p).length, d = y[c];
            if (!d) {
                if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
                    for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < c; )
                        ;
                    f--
                }
                for (d = y[c] = [],
                i = T ? Math.min(f, c) * w - .5 : m % f,
                n = f === U ? 0 : T ? c * x / f - .5 : m / f | 0,
                l = U,
                u = h = 0; u < c; u++)
                    a = u % f - i,
                    s = n - (u / f | 0),
                    d[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s),
                    h < o && (h = o),
                    o < l && (l = o);
                "random" === m && db(d),
                d.max = h - l,
                d.min = l,
                d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1),
                d.b = c < 0 ? g - c : g,
                d.u = Ya(p.amount || p.each) || 0,
                _ = _ && c < 0 ? Lt(_) : _
            }
            return c = (d[t] - d.min) / d.max || 0,
            ja(d.b + (_ ? _(c) : c) * d.v) + d.u
        }
    }
    function fb(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function(e) {
            var r = ja(Math.round(parseFloat(e) / i) * i * n);
            return (r - r % 1) / n + (t(e) ? 0 : Ya(e))
        }
    }
    function gb(h, e) {
        var l, f, r = $(h);
        return !r && v(h) && (l = r = h.radius || U,
        h.values ? (h = Ot(h.values),
        (f = !t(h[0])) && (l *= l)) : h = fb(h.increment)),
        Wa(e, r ? s(h) ? function(t) {
            return f = h(t),
            Math.abs(f - t) <= l ? f : t
        }
        : function(e) {
            for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--; )
                (r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r,
                o = u);
            return o = !l || s <= l ? h[o] : e,
            f || o === e || t(e) ? o : o + Ya(e)
        }
        : fb(h))
    }
    function hb(t, e, r, i) {
        return Wa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }
    function lb(e, r, t) {
        return Wa(t, function(t) {
            return e[~~r(t)]
        })
    }
    function ob(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
            i = t.indexOf(")", e),
            n = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, i - e - 7).match(n ? at : tt),
            s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5),
            a = i + 1;
        return s + t.substr(a, t.length - a)
    }
    function rb(t, e, r) {
        var i, n, a, s = t.labels, o = U;
        for (i in s)
            (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i,
            o = n);
        return a
    }
    function tb(t) {
        return za(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!B),
        t.progress() < 1 && Ct(t, "onInterrupt"),
        t
    }
    function yb(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * At + .5 | 0
    }
    function zb(e, r, i) {
        var n, a, s, o, u, h, l, f, c, d, p = e ? t(e) ? [e >> 16, e >> 8 & At, e & At] : 0 : St.black;
        if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)),
            St[e])
                p = St[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
                9 === e.length)
                    return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & At, p & At, parseInt(e.substr(7), 16) / 255];
                p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & At, e & At]
            } else if ("hsl" === e.substr(0, 3))
                if (p = d = e.match(tt),
                r) {
                    if (~e.indexOf("="))
                        return p = e.match(et),
                        i && p.length < 4 && (p[3] = 1),
                        p
                } else
                    o = +p[0] % 360 / 360,
                    u = p[1] / 100,
                    n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u),
                    3 < p.length && (p[3] *= 1),
                    p[0] = yb(o + 1 / 3, n, a),
                    p[1] = yb(o, n, a),
                    p[2] = yb(o - 1 / 3, n, a);
            else
                p = e.match(tt) || St.transparent;
            p = p.map(Number)
        }
        return r && !d && (n = p[0] / At,
        a = p[1] / At,
        s = p[2] / At,
        h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2,
        l === f ? o = u = 0 : (c = l - f,
        u = .5 < h ? c / (2 - l - f) : c / (l + f),
        o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4,
        o *= 60),
        p[0] = ~~(o + .5),
        p[1] = ~~(100 * u + .5),
        p[2] = ~~(100 * h + .5)),
        i && p.length < 4 && (p[3] = 1),
        p
    }
    function Ab(t) {
        var r = []
          , i = []
          , n = -1;
        return t.split(Rt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e),
            i.push(n += e.length + 1)
        }),
        r.c = i,
        r
    }
    function Bb(t, e, r) {
        var i, n, a, s, o = "", u = (t + o).match(Rt), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = zb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (a = Ab(t),
        (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Rt, "1").split(rt)).length - 1; l < s; l++)
                o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Rt)).length - 1; l < s; l++)
                o += n[l] + u[l];
        return o + n[s]
    }
    function Eb(t) {
        var e, r = t.join(" ");
        if (Rt.lastIndex = 0,
        Rt.test(r))
            return e = Dt.test(r),
            t[1] = Bb(t[1], e),
            t[0] = Bb(t[0], e, Ab(t[1])),
            !0
    }
    function Nb(t) {
        var e = (t + "").split("(")
          , r = Ft[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
                r = a[o],
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                i = r.substr(0, e),
                n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i,
                s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1
              , r = t.indexOf(")")
              , i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(oa)) : Ft._CE && It.test(t) ? Ft._CE("", t) : r
    }
    function Pb(t, e) {
        for (var r, i = t._first; i; )
            i instanceof Ut ? Pb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Pb(i.timeline, e) : (r = i._ease,
            i._ease = i._yEase,
            i._yEase = r,
            i._yoyo = e)),
            i = i._next
    }
    function Rb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ha(t, function(t) {
            for (var e in Ft[t] = ot[t] = a,
            Ft[n = t.toLowerCase()] = r,
            a)
                Ft[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ft[t + "." + e] = a[e]
        }),
        a
    }
    function Sb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function Tb(r, t, e) {
        function Hm(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * G((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1
          , n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1)
          , a = n / W * (Math.asin(1 / i) || 0)
          , s = "out" === r ? Hm : "in" === r ? function(t) {
            return 1 - Hm(1 - t)
        }
        : Sb(Hm);
        return n = W / n,
        s.config = function(t, e) {
            return Tb(r, t, e)
        }
        ,
        s
    }
    function Ub(e, r) {
        function Pm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Pm : "in" === e ? function(t) {
            return 1 - Pm(1 - t)
        }
        : Sb(Pm);
        return t.config = function(t) {
            return Ub(e, t)
        }
        ,
        t
    }
    var I, B, l, L, h, n, a, i, o, f, c, d, p, _, m, g, b, k, M, O, C, A, D, E, z, F, Y, N, j = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, q = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, U = 1e8, V = 1 / U, W = 2 * Math.PI, X = W / 4, H = 0, K = Math.sqrt, Z = Math.cos, G = Math.sin, J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , $ = Array.isArray, tt = /(?:-?\.?\d|\.)+/gi, et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, nt = /[+-]=-?[.\d]+/, at = /[^,'"\[\]\s]+/gi, st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ot = {}, ut = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, ht = {
        suppressEvents: !0,
        kill: !1
    }, lt = {
        suppressEvents: !0
    }, ft = {}, ct = [], dt = {}, pt = {}, _t = {}, mt = 30, gt = [], vt = "", yt = function _merge(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, Tt = function _animationCycle(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    }, bt = function _isFromOrFromStart(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, wt = {
        _start: 0,
        endTime: T,
        totalDuration: T
    }, xt = function _parsePosition(t, e, i) {
        var n, a, s, o = t.labels, u = t._recent || wt, h = t.duration() >= U ? u.endTime(!1) : t._dur;
        return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0),
        s = "%" === e.substr(-1),
        n = e.indexOf("="),
        "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")),
        ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h),
        o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)),
        s && i && (a = a / 100 * ($(i) ? i[0] : i).totalDuration()),
        1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
    }, kt = function _clamp(t, e, r) {
        return r < t ? t : e < r ? e : r
    }, Mt = [].slice, Ot = function toArray(t, e, i) {
        return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && zt() ? $(t) ? function _flatten(t, e, i) {
            return void 0 === i && (i = []),
            t.forEach(function(t) {
                return r(t) && !e || _a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t)
            }) || i
        }(t, i) : _a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0)
    }, Pt = function mapRange(e, t, r, i, n) {
        var a = t - e
          , s = i - r;
        return Wa(n, function(t) {
            return r + ((t - e) / a * s || 0)
        })
    }, Ct = function _callback(t, e, r) {
        var i, n, a, s = t.vars, o = s[e], u = l, h = t._ctx;
        if (o)
            return i = s[e + "Params"],
            n = s.callbackScope || t,
            r && ct.length && ma(),
            h && (l = h),
            a = i ? o.apply(n, i) : o.call(n),
            l = u,
            a
    }, At = 255, St = {
        aqua: [0, At, At],
        lime: [0, At, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, At],
        navy: [0, 0, 128],
        white: [At, At, At],
        olive: [128, 128, 0],
        yellow: [At, At, 0],
        orange: [At, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [At, 0, 0],
        pink: [At, 192, 203],
        cyan: [0, At, At],
        transparent: [At, At, At, 0]
    }, Rt = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in St)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Dt = /hsl[a]?\(/, Et = (M = Date.now,
    O = 500,
    C = 33,
    A = M(),
    D = A,
    z = E = 1e3 / 240,
    g = {
        time: 0,
        frame: 0,
        tick: function tick() {
            wl(!0)
        },
        deltaRatio: function deltaRatio(t) {
            return b / (1e3 / (t || 60))
        },
        wake: function wake() {
            o && (!n && x() && (h = n = window,
            a = h.document || {},
            ot.gsap = Ce,
            (h.gsapVersions || (h.gsapVersions = [])).push(Ce.version),
            P(i || h.GreenSockGlobals || !h.gsap && h || {}),
            m = h.requestAnimationFrame),
            p && g.sleep(),
            _ = m || function(t) {
                return setTimeout(t, z - 1e3 * g.time + 1 | 0)
            }
            ,
            d = 1,
            wl(2))
        },
        sleep: function sleep() {
            (m ? h.cancelAnimationFrame : clearTimeout)(p),
            d = 0,
            _ = T
        },
        lagSmoothing: function lagSmoothing(t, e) {
            O = t || 1 / 0,
            C = Math.min(e || 33, O)
        },
        fps: function fps(t) {
            E = 1e3 / (t || 240),
            z = 1e3 * g.time + E
        },
        add: function add(n, t, e) {
            var a = t ? function(t, e, r, i) {
                n(t, e, r, i),
                g.remove(a)
            }
            : n;
            return g.remove(n),
            F[e ? "unshift" : "push"](a),
            zt(),
            a
        },
        remove: function remove(t, e) {
            ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= k && k--
        },
        _listeners: F = []
    }), zt = function _wake() {
        return !d && Et.wake()
    }, Ft = {}, It = /^[\d.\-M][\d.\-,\s]/, Bt = /["']/g, Lt = function _invertEase(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Yt = function _parseEase(t, e) {
        return t && (s(t) ? t : Ft[t] || Nb(t)) || e
    };
    function wl(t) {
        var e, r, i, n, a = M() - D, s = !0 === t;
        if (O < a && (A += a - C),
        (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++g.frame,
        b = i - 1e3 * g.time,
        g.time = i /= 1e3,
        z += e + (E <= e ? 4 : E - e),
        r = 1),
        s || (p = _(wl)),
        r)
            for (k = 0; k < F.length; k++)
                F[k](i, b, n, t)
    }
    function en(t) {
        return t < N ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / 2.75) * t + .9375 : Y * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ha("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Rb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }),
    Ft.Linear.easeNone = Ft.none = Ft.Linear.easeIn,
    Rb("Elastic", Tb("in"), Tb("out"), Tb()),
    Y = 7.5625,
    N = 1 / 2.75,
    Rb("Bounce", function(t) {
        return 1 - en(1 - t)
    }, en),
    Rb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Rb("Circ", function(t) {
        return -(K(1 - t * t) - 1)
    }),
    Rb("Sine", function(t) {
        return 1 === t ? 1 : 1 - Z(t * X)
    }),
    Rb("Back", Ub("in"), Ub("out"), Ub()),
    Ft.SteppedEase = Ft.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , i = t + (e ? 0 : 1)
              , n = e ? 1 : 0;
            return function(t) {
                return ((i * kt(0, .99999999, t) | 0) + n) * r
            }
        }
    },
    q.ease = Ft["quad.out"],
    ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return vt += t + "," + t + "Params,"
    });
    var Nt, jt = function GSCache(t, e) {
        this.id = H++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : ga,
        this.set = e ? e.getSetter : re
    }, qt = ((Nt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    Nt.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    Nt.totalDuration = function totalDuration(t) {
        return arguments.length ? (this._dirty = 0,
        Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    Nt.totalTime = function totalTime(t, e) {
        if (zt(),
        !arguments.length)
            return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (Ia(this, t),
            !r._dp || r.parent || Ja(r, this); r && r.parent; )
                r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ka(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === V || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        na(this, t, e)),
        this
    }
    ,
    Nt.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }
    ,
    Nt.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    Nt.progress = function progress(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    Nt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1
    }
    ,
    Nt.timeScale = function timeScale(t) {
        if (!arguments.length)
            return this._rts === -V ? 0 : this._rts;
        if (this._rts === t)
            return this;
        var e = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0,
        this._ts = this._ps || t === -V ? 0 : this._rts,
        this.totalTime(kt(-this._delay, this._tDur, e), !0),
        Ha(this),
        function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
                e._dirty = 1,
                e.totalDuration(),
                e = e.parent;
            return t
        }(this)
    }
    ,
    Nt.paused = function paused(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (zt(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== V && (this._tTime -= V)))),
        this) : this._ps
    }
    ,
    Nt.startTime = function startTime(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || Ka(e, this, t - this._delay),
            this
        }
        return this._start
    }
    ,
    Nt.endTime = function endTime(t) {
        return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    Nt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    Nt.revert = function revert(t) {
        void 0 === t && (t = lt);
        var e = B;
        return B = t,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
        this.totalTime(-.01, t.suppressEvents)),
        "nested" !== this.data && !1 !== t.kill && this.kill(),
        B = e,
        this
    }
    ,
    Nt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            r = e._start + r / (e._ts || 1),
            e = e._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : r
    }
    ,
    Nt.repeat = function repeat(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }
    ,
    Nt.repeatDelay = function repeatDelay(t) {
        if (arguments.length) {
            var e = this._time;
            return this._rDelay = t,
            Sa(this),
            e ? this.time(e) : this
        }
        return this._rDelay
    }
    ,
    Nt.yoyo = function yoyo(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    Nt.seek = function seek(t, e) {
        return this.totalTime(xt(this, t), w(e))
    }
    ,
    Nt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, w(e))
    }
    ,
    Nt.play = function play(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    Nt.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    Nt.pause = function pause(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    Nt.resume = function resume() {
        return this.paused(!1)
    }
    ,
    Nt.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -V : 0)),
        this) : this._rts < 0
    }
    ,
    Nt.invalidate = function invalidate() {
        return this._initted = this._act = 0,
        this._zTime = -V,
        this
    }
    ,
    Nt.isActive = function isActive() {
        var t, e = this.parent || this._dp, r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - V))
    }
    ,
    Nt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e,
        r && (i[t + "Params"] = r),
        "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
        this) : i[t]
    }
    ,
    Nt.then = function then(t) {
        var i = this;
        return new Promise(function(e) {
            function zo() {
                var t = i.then;
                i.then = null,
                s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
                e(r),
                i.then = t
            }
            var r = s(t) ? t : pa;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? zo() : i._prom = zo
        }
        )
    }
    ,
    Nt.kill = function kill() {
        tb(this)
    }
    ,
    Animation);
    function Animation(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        Ra(this, +t.duration, 1, 1),
        this.data = t.data,
        l && (this._ctx = l).data.push(this),
        d || Et.wake()
    }
    qa(qt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -V,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ut = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}),
            (r = i.call(this, t) || this).labels = {},
            r.smoothChildTiming = !!t.smoothChildTiming,
            r.autoRemoveChildren = !!t.autoRemoveChildren,
            r._sort = w(t.sortChildren),
            L && Ka(t.parent || L, _assertThisInitialized(r), e),
            t.reversed && r.reverse(),
            t.paused && r.paused(!0),
            t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger),
            r
        }
        _inheritsLoose(Timeline, i);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Va(0, arguments, this),
            this
        }
        ,
        e.from = function from(t, e, r) {
            return Va(1, arguments, this),
            this
        }
        ,
        e.fromTo = function fromTo(t, e, r, i) {
            return Va(2, arguments, this),
            this
        }
        ,
        e.set = function set(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            va(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new Gt(t,e,xt(this, r),1),
            this
        }
        ,
        e.call = function call(t, e, r) {
            return Ka(this, Gt.delayedCall(0, t, e), r)
        }
        ,
        e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e,
            r.stagger = r.stagger || i,
            r.onComplete = a,
            r.onCompleteParams = s,
            r.parent = this,
            new Gt(t,r,xt(this, n)),
            this
        }
        ,
        e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
            return r.runBackwards = 1,
            va(r).immediateRender = w(r.immediateRender),
            this.staggerTo(t, e, r, i, n, a, s)
        }
        ,
        e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
            return i.startAt = r,
            va(i).immediateRender = w(i.immediateRender),
            this.staggerTo(t, e, i, n, a, s, o)
        }
        ,
        e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c, d, p, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = t <= 0 ? 0 : ja(t), y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== L && m < v && 0 <= t && (v = m),
            v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _,
                t += this._time - _),
                i = v,
                f = this._start,
                u = !(l = this._ts),
                y && (g || (_ = this._zTime),
                !t && e || (this._zTime = t)),
                this._repeat) {
                    if (d = this._yoyo,
                    o = g + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * o + t, e, r);
                    if (i = ja(v % o),
                    v === m ? (s = this._repeat,
                    i = g) : ((s = ~~(v / o)) && s === v / o && (i = g,
                    s--),
                    g < i && (i = g)),
                    c = Tt(this._tTime, o),
                    !_ && this._tTime && c !== s && (c = s),
                    d && 1 & s && (i = g - i,
                    p = 1),
                    s !== c && !this._lock) {
                        var T = d && 1 & c
                          , b = T === (d && 1 & s);
                        if (s < c && (T = !T),
                        _ = T ? 0 : g,
                        this._lock = 1,
                        this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0,
                        this._tTime = v,
                        !e && this.parent && Ct(this, "onRepeat"),
                        this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                        _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (g = this._dur,
                        m = this._tDur,
                        b && (this._lock = 2,
                        _ = T ? g : -1e-4,
                        this.render(_, !0),
                        this.vars.repeatRefresh && !p && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !u)
                            return this;
                        Pb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                    var i;
                    if (e < r)
                        for (i = t._first; i && i._start <= r; ) {
                            if ("isPause" === i.data && i._start > e)
                                return i;
                            i = i._next
                        }
                    else
                        for (i = t._last; i && i._start >= r; ) {
                            if ("isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev
                        }
                }(this, ja(_), ja(i))) && (v -= i - (i = h._start)),
                this._tTime = v,
                this._time = i,
                this._act = !l,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                _ = 0),
                !_ && i && !e && (Ct(this, "onStart"),
                this._tTime !== v))
                    return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n; ) {
                        if (a = n._next,
                        (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                a && (v += this._zTime = -V);
                                break
                            }
                        }
                        n = a
                    }
                else {
                    n = this._last;
                    for (var w = t < 0 ? t : i; n; ) {
                        if (a = n._prev,
                        (n._act || w <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || B && (n._initted || n._startAt)),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                a && (v += this._zTime = w ? -V : V);
                                break
                            }
                        }
                        n = a
                    }
                }
                if (h && !e && (this.pause(),
                h.render(_ <= i ? 0 : -V)._zTime = _ <= i ? 1 : -1,
                this._ts))
                    return this._start = f,
                    Ha(this),
                    this.render(t, e, r);
                this._onUpdate && !e && Ct(this, "onUpdate", !0),
                (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || za(this, 1),
                e || t < 0 && !_ || !v && !_ && m || (Ct(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0),
                !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }
        ,
        e.add = function add(e, i) {
            var n = this;
            if (t(i) || (i = xt(this, i, e)),
            !(e instanceof qt)) {
                if ($(e))
                    return e.forEach(function(t) {
                        return n.add(t, i)
                    }),
                    this;
                if (r(e))
                    return this.addLabel(e, i);
                if (!s(e))
                    return this;
                e = Gt.delayedCall(0, e)
            }
            return this !== e ? Ka(this, e, i) : this
        }
        ,
        e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -U);
            for (var n = [], a = this._first; a; )
                a._start >= i && (a instanceof Gt ? e && n.push(a) : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
                a = a._next;
            return n
        }
        ,
        e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        e.remove = function remove(t) {
            return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t),
            t === this._recent && (this._recent = this._last),
            Aa(this))
        }
        ,
        e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = ja(Et.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            i.prototype.totalTime.call(this, t, e),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        e.addLabel = function addLabel(t, e) {
            return this.labels[t] = xt(this, e),
            this
        }
        ,
        e.removeLabel = function removeLabel(t) {
            return delete this.labels[t],
            this
        }
        ,
        e.addPause = function addPause(t, e, r) {
            var i = Gt.delayedCall(0, e || T, r);
            return i.data = "isPause",
            this._hasPause = 1,
            Ka(this, i, xt(this, t))
        }
        ,
        e.removePause = function removePause(t) {
            var e = this._first;
            for (t = xt(this, t); e; )
                e._start === t && "isPause" === e.data && za(e),
                e = e._next
        }
        ,
        e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                Vt !== i[n] && i[n].kill(t, e);
            return this
        }
        ,
        e.getTweensOf = function getTweensOf(e, r) {
            for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s; )
                s instanceof Gt ? la(s._targets, a) && (o ? (!Vt || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i),
                s = s._next;
            return n
        }
        ,
        e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this, n = xt(i, t), a = e.startAt, s = e.onStart, o = e.onStartParams, u = e.immediateRender, h = Gt.to(i, qa({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale()) || V,
                onStart: function onStart() {
                    if (i.pause(),
                    !r) {
                        var t = e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale());
                        h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0),
                        r = 1
                    }
                    s && s.apply(h, o || [])
                }
            }, e));
            return u ? h.render(0) : h
        }
        ,
        e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, qa({
                startAt: {
                    time: xt(this, t)
                }
            }, r))
        }
        ,
        e.recent = function recent() {
            return this._recent
        }
        ,
        e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time),
            rb(this, xt(this, t))
        }
        ,
        e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time),
            rb(this, xt(this, t), 1)
        }
        ,
        e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + V)
        }
        ,
        e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n; )
                n._start >= r && (n._start += t,
                n._end += t),
                n = n._next;
            if (e)
                for (i in a)
                    a[i] >= r && (a[i] += t);
            return Aa(this)
        }
        ,
        e.invalidate = function invalidate(t) {
            var e = this._first;
            for (this._lock = 0; e; )
                e.invalidate(t),
                e = e._next;
            return i.prototype.invalidate.call(this, t)
        }
        ,
        e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Aa(this)
        }
        ,
        e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0, a = this, s = a._last, o = U;
            if (arguments.length)
                return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1,
                    Ka(a, s, r - s._delay, 1)._lock = 0) : o = r,
                    r < 0 && s._ts && (n -= r,
                    (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts,
                    a._time -= r,
                    a._tTime -= r),
                    a.shiftChildren(-r, !1, -Infinity),
                    o = 0),
                    s._end > n && s._ts && (n = s._end),
                    s = e;
                Ra(a, a === L && a._time > n ? a._time : n, 1, 1),
                a._dirty = 0
            }
            return a._tDur
        }
        ,
        Timeline.updateRoot = function updateRoot(t) {
            if (L._ts && (na(L, Ga(t, L)),
            f = Et.frame),
            Et.frame >= mt) {
                mt += j.autoSleep || 120;
                var e = L._first;
                if ((!e || !e._ts) && j.autoSleep && Et._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || Et.sleep()
                }
            }
        }
        ,
        Timeline
    }(qt);
    qa(Ut.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function _b(t, e, i, n, a, o) {
        var u, h, l, f;
        if (pt[t] && !1 !== (u = new pt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
            if (s(t) && (t = Qt(t, a, e, i, n)),
            !v(t) || t.style && t.nodeType || $(t) || J(t))
                return r(t) ? Qt(t, a, e, i, n) : t;
            var o, u = {};
            for (o in t)
                u[o] = Qt(t[o], a, e, i, n);
            return u
        }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new pe(i._pt,a,t,0,1,u.render,u,0,u.priority),
        i !== c))
            for (l = i._ptLookup[i._targets.indexOf(a)],
            f = u._props.length; f--; )
                l[u._props[f]] = h;
        return u
    }
    function fc(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if ($(r))
            a = e[t] || (e[t] = []),
            r.forEach(function(t, e) {
                return a.push({
                    t: e / (r.length - 1) * 100,
                    v: t,
                    e: s
                })
            });
        else
            for (n in r)
                a = e[n] || (e[n] = []),
                "ease" === n || a.push({
                    t: parseFloat(t),
                    v: r[n],
                    e: s
                })
    }
    var Vt, Wt, Xt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
        s(n) && (n = n(a || 0, t, o));
        var c, d = t[e], p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d, _ = s(d) ? l ? ee : $t : Jt;
        if (r(n) && (~n.indexOf("random(") && (n = ob(n)),
        "=" === n.charAt(1) && (!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c || (n = c))),
        !f || p !== n || Wt)
            return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, c, d, p, _ = new pe(this._pt,t,e,0,1,se,null,n), m = 0, g = 0;
                for (_.b = r,
                _.e = i,
                r += "",
                (d = ~(i += "").indexOf("random(")) && (i = ob(i)),
                a && (a(p = [r, i], t, e),
                r = p[0],
                i = p[1]),
                u = r.match(it) || []; o = it.exec(i); )
                    l = o[0],
                    f = i.substring(m, o.index),
                    h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1),
                    l !== u[g++] && (c = parseFloat(u[g - 1]) || 0,
                    _._pt = {
                        _next: _._pt,
                        p: f || 1 === g ? f : ",",
                        s: c,
                        c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
                        m: h && h < 4 ? Math.round : 0
                    },
                    m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "",
                _.fp = s,
                (nt.test(i) || d) && (_.e = 0),
                this._pt = _
            }
            .call(this, t, e, p, n, _, h || j.stringFilter, l)) : (c = new pe(this._pt,t,e,+p || 0,n - (p || 0),"boolean" == typeof d ? ae : ne,0,_),
            l && (c.fp = l),
            u && c.modifier(u, this, t),
            this._pt = c)
    }, Ht = function _initTween(t, e, r) {
        var i, n, a, s, o, u, h, l, f, c, d, p, _, m = t.vars, g = m.ease, v = m.startAt, y = m.immediateRender, T = m.lazy, b = m.onUpdate, x = m.onUpdateParams, k = m.callbackScope, M = m.runBackwards, O = m.yoyoEase, P = m.keyframes, C = m.autoRevert, A = t._dur, S = t._startAt, R = t._targets, D = t.parent, E = D && "nested" === D.data ? D.vars.targets : R, z = "auto" === t._overwrite && !I, F = t.timeline;
        if (!F || P && g || (g = "none"),
        t._ease = Yt(g, q.ease),
        t._yEase = O ? Lt(Yt(!0 === O ? g : O, q.ease)) : 0,
        O && t._yoyo && !t._repeat && (O = t._yEase,
        t._yEase = t._ease,
        t._ease = O),
        t._from = !F && !!m.runBackwards,
        !F || P && !m.stagger) {
            if (p = (l = R[0] ? fa(R[0]).harness : 0) && m[l.prop],
            i = ua(m, ft),
            S && (S._zTime < 0 && S.progress(1),
            e < 0 && M && y && !C ? S.render(-1, !0) : S.revert(M && A ? ht : ut),
            S._lazy = 0),
            v) {
                if (za(t._startAt = Gt.set(R, qa({
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: !S && w(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: x,
                    callbackScope: k,
                    stagger: 0
                }, v))),
                t._startAt._dp = 0,
                t._startAt._sat = t,
                e < 0 && (B || !y && !C) && t._startAt.revert(ht),
                y && A && e <= 0 && r <= 0)
                    return void (e && (t._zTime = e))
            } else if (M && A && !S)
                if (e && (y = !1),
                a = qa({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: y && !S && w(T),
                    immediateRender: y,
                    stagger: 0,
                    parent: D
                }, i),
                p && (a[l.prop] = p),
                za(t._startAt = Gt.set(R, a)),
                t._startAt._dp = 0,
                t._startAt._sat = t,
                e < 0 && (B ? t._startAt.revert(ht) : t._startAt.render(-1, !0)),
                t._zTime = e,
                y) {
                    if (!e)
                        return
                } else
                    _initTween(t._startAt, V, V);
            for (t._pt = t._ptCache = 0,
            T = A && w(T) || T && !A,
            n = 0; n < R.length; n++) {
                if (h = (o = R[n])._gsap || ea(R)[n]._gsap,
                t._ptLookup[n] = c = {},
                dt[h.id] && ct.length && ma(),
                d = E === R ? n : E.indexOf(o),
                l && !1 !== (f = new l).init(o, p || i, t, d, E) && (t._pt = s = new pe(t._pt,o,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach(function(t) {
                    c[t] = s
                }),
                f.priority && (u = 1)),
                !l || p)
                    for (a in i)
                        pt[a] && (f = _b(a, i, t, d, o, E)) ? f.priority && (u = 1) : c[a] = s = Xt.call(t, o, a, "get", i[a], d, E, 0, m.stringFilter);
                t._op && t._op[n] && t.kill(o, t._op[n]),
                z && t._pt && (Vt = t,
                L.killTweensOf(o, c, t.globalTime(e)),
                _ = !t.parent,
                Vt = 0),
                t._pt && T && (dt[h.id] = 1)
            }
            u && de(t),
            t._onInit && t._onInit(t)
        }
        t._onUpdate = b,
        t._initted = (!t._op || t._pt) && !_,
        P && e <= 0 && F.render(U, !0, !0)
    }, Qt = function _parseFuncOrString(t, e, i, n, a) {
        return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t
    }, Kt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Zt = {};
    ha(Kt + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Zt[t] = 1
    });
    var Gt = function(z) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r,
            r = i,
            i = null);
            var s, o, u, h, l, f, c, d, p = (a = z.call(this, n ? r : va(r)) || this).vars, _ = p.duration, m = p.delay, g = p.immediateRender, T = p.stagger, b = p.overwrite, x = p.keyframes, k = p.defaults, M = p.scrollTrigger, O = p.yoyoEase, P = r.parent || L, C = ($(e) || J(e) ? t(e[0]) : "length"in r) ? [e] : Ot(e);
            if (a._targets = C.length ? ea(C) : R("GSAP target " + e + " not found. https://greensock.com", !j.nullTargetWarn) || [],
            a._ptLookup = [],
            a._overwrite = b,
            x || T || y(_) || y(m)) {
                if (r = a.vars,
                (s = a.timeline = new Ut({
                    data: "nested",
                    defaults: k || {},
                    targets: P && "nested" === P.data ? P.vars.targets : C
                })).kill(),
                s.parent = s._dp = _assertThisInitialized(a),
                s._start = 0,
                T || y(_) || y(m)) {
                    if (h = C.length,
                    c = T && eb(T),
                    v(T))
                        for (l in T)
                            ~Kt.indexOf(l) && ((d = d || {})[l] = T[l]);
                    for (o = 0; o < h; o++)
                        (u = ua(r, Zt)).stagger = 0,
                        O && (u.yoyoEase = O),
                        d && yt(u, d),
                        f = C[o],
                        u.duration = +Qt(_, _assertThisInitialized(a), o, f, C),
                        u.delay = (+Qt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay,
                        !T && 1 === h && u.delay && (a._delay = m = u.delay,
                        a._start += m,
                        u.delay = 0),
                        s.to(f, u, c ? c(o, f, C) : 0),
                        s._ease = Ft.none;
                    s.duration() ? _ = m = 0 : a.timeline = 0
                } else if (x) {
                    va(qa(s.vars.defaults, {
                        ease: "none"
                    })),
                    s._ease = Yt(x.ease || r.ease || "none");
                    var A, S, D, E = 0;
                    if ($(x))
                        x.forEach(function(t) {
                            return s.to(C, t, ">")
                        }),
                        s.duration();
                    else {
                        for (l in u = {},
                        x)
                            "ease" === l || "easeEach" === l || fc(l, x[l], u, x.easeEach);
                        for (l in u)
                            for (A = u[l].sort(function(t, e) {
                                return t.t - e.t
                            }),
                            o = E = 0; o < A.length; o++)
                                (D = {
                                    ease: (S = A[o]).e,
                                    duration: (S.t - (o ? A[o - 1].t : 0)) / 100 * _
                                })[l] = S.v,
                                s.to(C, D, E),
                                E += D.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || a.duration(_ = s.duration())
            } else
                a.timeline = 0;
            return !0 !== b || I || (Vt = _assertThisInitialized(a),
            L.killTweensOf(C),
            Vt = 0),
            Ka(P, _assertThisInitialized(a), i),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (g || !_ && !x && a._start === ja(P._time) && w(g) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -V,
            a.render(Math.max(0, -m) || 0)),
            M && La(_assertThisInitialized(a), M),
            a
        }
        _inheritsLoose(Tween, z);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c = this._time, d = this._tDur, p = this._dur, _ = t < 0, m = d - V < t && !_ ? d : t < V ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
                    if (i = m,
                    l = this.timeline,
                    this._repeat) {
                        if (s = p + this._rDelay,
                        this._repeat < -1 && _)
                            return this.totalTime(100 * s + t, e, r);
                        if (i = ja(m % s),
                        m === d ? (a = this._repeat,
                        i = p) : ((a = ~~(m / s)) && a === m / s && (i = p,
                        a--),
                        p < i && (i = p)),
                        (u = this._yoyo && 1 & a) && (f = this._yEase,
                        i = p - i),
                        o = Tt(this._tTime, s),
                        i === c && !r && this._initted)
                            return this._tTime = m,
                            this;
                        a !== o && (l && this._yEase && Pb(l, u),
                        !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1,
                        this.render(ja(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ma(this, _ ? t : i, r, e, m))
                            return this._tTime = 0,
                            this;
                        if (c !== this._time)
                            return this;
                        if (p !== this._dur)
                            return this.render(t, e, r)
                    }
                    if (this._tTime = m,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = h = (f || this._ease)(i / p),
                    this._from && (this.ratio = h = 1 - h),
                    i && !c && !e && (Ct(this, "onStart"),
                    this._tTime !== m))
                        return this;
                    for (n = this._pt; n; )
                        n.r(h, n.d),
                        n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -V : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (_ && Ca(this, t, 0, r),
                    Ct(this, "onUpdate")),
                    this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ct(this, "onRepeat"),
                    m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ca(this, t, 0, !0),
                    !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || za(this, 1),
                    e || _ && !c || !(m || c || u) || (Ct(this, m === d ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || m < d && 0 < this.timeScale() || this._prom()))
                }
            } else
                !function _renderZeroDurationTween(t, e, r, i) {
                    var n, a, s, o = t.ratio, u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1, h = t._rDelay, l = 0;
                    if (h && t._repeat && (l = kt(0, t._tDur, e),
                    a = Tt(l, h),
                    t._yoyo && 1 & a && (u = 1 - u),
                    a !== Tt(t._tTime, h) && (o = 1 - u,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    u !== o || B || i || t._zTime === V || !e && t._zTime) {
                        if (!t._initted && Ma(t, e, i, r, l))
                            return;
                        for (s = t._zTime,
                        t._zTime = e || (r ? V : 0),
                        r = r || e && !s,
                        t.ratio = u,
                        t._from && (u = 1 - u),
                        t._time = 0,
                        t._tTime = l,
                        n = t._pt; n; )
                            n.r(u, n.d),
                            n = n._next;
                        e < 0 && Ca(t, e, 0, !0),
                        t._onUpdate && !r && Ct(t, "onUpdate"),
                        l && t._repeat && !r && t.parent && Ct(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1),
                        r || B || (Ct(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, r);
            return this
        }
        ,
        e.targets = function targets() {
            return this._targets
        }
        ,
        e.invalidate = function invalidate(t) {
            return t && this.vars.runBackwards || (this._startAt = 0),
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(t),
            z.prototype.invalidate.call(this, t)
        }
        ,
        e.resetTo = function resetTo(t, e, r, i) {
            d || Et.wake(),
            this._ts || this.play();
            var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Ht(this, a),
            n = this._ease(a / this._dur),
            function _updatePropTweens(t, e, r, i, n, a, s) {
                var o, u, h, l, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                if (!f)
                    for (f = t._ptCache[e] = [],
                    h = t._ptLookup,
                    l = t._targets.length; l--; ) {
                        if ((o = h[l][e]) && o.d && o.d._pt)
                            for (o = o.d._pt; o && o.p !== e && o.fp !== e; )
                                o = o._next;
                        if (!o)
                            return Wt = 1,
                            t.vars[e] = "+=0",
                            Ht(t, s),
                            Wt = 0,
                            1;
                        f.push(o)
                    }
                for (l = f.length; l--; )
                    (o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i,
                    o.c = r - o.s,
                    u.e && (u.e = ia(r) + Ya(u.e)),
                    u.b && (u.b = o.s + Ya(u.b))
            }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ia(this, 0),
            this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
        }
        ,
        e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e))
                return this._lazy = this._pt = 0,
                this.parent ? tb(this) : this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Vt && !0 !== Vt.vars.overwrite)._first || tb(this),
                this.parent && i !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i, 0, 1),
                this
            }
            var n, a, s, o, u, h, l, f = this._targets, c = t ? Ot(t) : f, d = this._ptLookup, p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                    ;
                return r < 0
            }(f, c))
                return "all" === e && (this._pt = 0),
                tb(this);
            for (n = this._op = this._op || [],
            "all" !== e && (r(e) && (u = {},
            ha(e, function(t) {
                return u[t] = 1
            }),
            e = u),
            e = function _addAliasesToVars(t, e) {
                var r, i, n, a, s = t[0] ? fa(t[0]).harness : 0, o = s && s.aliases;
                if (!o)
                    return e;
                for (i in r = yt({}, e),
                o)
                    if (i in r)
                        for (n = (a = o[i].split(",")).length; n--; )
                            r[a[n]] = r[i];
                return r
            }(f, e)),
            l = f.length; l--; )
                if (~c.indexOf(f[l]))
                    for (u in a = d[l],
                    "all" === e ? (n[l] = e,
                    o = a,
                    s = {}) : (s = n[l] = n[l] || {},
                    o = e),
                    o)
                        (h = a && a[u]) && ("kill"in h.d && !0 !== h.d.kill(u) || ya(this, h, "_pt"),
                        delete a[u]),
                        "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && p && tb(this),
            this
        }
        ,
        Tween.to = function to(t, e, r) {
            return new Tween(t,e,r)
        }
        ,
        Tween.from = function from(t, e) {
            return Va(1, arguments)
        }
        ,
        Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }
        ,
        Tween.fromTo = function fromTo(t, e, r) {
            return Va(2, arguments)
        }
        ,
        Tween.set = function set(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new Tween(t,e)
        }
        ,
        Tween.killTweensOf = function killTweensOf(t, e, r) {
            return L.killTweensOf(t, e, r)
        }
        ,
        Tween
    }(qt);
    qa(Gt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    ha("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Gt[r] = function() {
            var t = new Ut
              , e = Mt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
            t[r].apply(t, e)
        }
    });
    function nc(t, e, r) {
        return t.setAttribute(e, r)
    }
    function vc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Jt = function _setterPlain(t, e, r) {
        return t[e] = r
    }
      , $t = function _setterFunc(t, e, r) {
        return t[e](r)
    }
      , ee = function _setterFuncWithParam(t, e, r, i) {
        return t[e](i.fp, r)
    }
      , re = function _getSetter(t, e) {
        return s(t[e]) ? $t : u(t[e]) && t.setAttribute ? nc : Jt
    }
      , ne = function _renderPlain(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
      , ae = function _renderBoolean(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , se = function _renderComplexString(t, e) {
        var r = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
                r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
      , oe = function _renderPropTweens(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , le = function _addPluginModifier(t, e, r, i) {
        for (var n, a = this._pt; a; )
            n = a._next,
            a.p === i && a.modifier(t, e, r),
            a = n
    }
      , fe = function _killPropTweensOf(t) {
        for (var e, r, i = this._pt; i; )
            r = i._next,
            i.p === t && !i.op || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1),
            i = r;
        return !e
    }
      , de = function _sortPropTweensByPriority(t) {
        for (var e, r, i, n, a = t._pt; a; ) {
            for (e = a._next,
            r = i; r && r.pr > a.pr; )
                r = r._next;
            (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a,
            (a._next = r) ? r._prev = a : n = a,
            a = e
        }
        t._pt = i
    }
      , pe = (PropTween.prototype.modifier = function modifier(t, e, r) {
        this.mSet = this.mSet || this.set,
        this.set = vc,
        this.m = t,
        this.mt = r,
        this.tween = e
    }
    ,
    PropTween);
    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e,
        this.s = i,
        this.c = n,
        this.p = r,
        this.r = a || ne,
        this.d = s || this,
        this.set = o || Jt,
        this.pr = u || 0,
        (this._next = t) && (t._prev = this)
    }
    ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ft[t] = 1
    }),
    ot.TweenMax = ot.TweenLite = Gt,
    ot.TimelineLite = ot.TimelineMax = Ut,
    L = new Ut({
        sortChildren: !1,
        defaults: q,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    j.stringFilter = Eb;
    function Cc(t) {
        return (Te[t] || we).map(function(t) {
            return t()
        })
    }
    function Dc() {
        var t = Date.now()
          , o = [];
        2 < t - xe && (Cc("matchMediaInit"),
        ye.forEach(function(t) {
            var e, r, i, n, a = t.queries, s = t.conditions;
            for (r in a)
                (e = h.matchMedia(a[r]).matches) && (i = 1),
                e !== s[r] && (s[r] = e,
                n = 1);
            n && (t.revert(),
            i && o.push(t))
        }),
        Cc("matchMediaRevert"),
        o.forEach(function(t) {
            return t.onMatch(t)
        }),
        xe = t,
        Cc("matchMedia"))
    }
    var _e, ye = [], Te = {}, we = [], xe = 0, ke = ((_e = Context.prototype).add = function add(t, i, n) {
        function Cw() {
            var t, e = l, r = a.selector;
            return e && e !== a && e.data.push(a),
            n && (a.selector = cb(n)),
            l = a,
            t = i.apply(a, arguments),
            s(t) && a._r.push(t),
            l = e,
            a.selector = r,
            a.isReverted = !1,
            t
        }
        s(t) && (n = i,
        i = t,
        t = s);
        var a = this;
        return a.last = Cw,
        t === s ? Cw(a) : t ? a[t] = Cw : Cw
    }
    ,
    _e.ignore = function ignore(t) {
        var e = l;
        l = null,
        t(this),
        l = e
    }
    ,
    _e.getTweens = function getTweens() {
        var e = [];
        return this.data.forEach(function(t) {
            return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Gt && !(t.parent && "nested" === t.parent.data) && e.push(t)
        }),
        e
    }
    ,
    _e.clear = function clear() {
        this._r.length = this.data.length = 0
    }
    ,
    _e.kill = function kill(e, t) {
        var r = this;
        if (e) {
            var i = this.getTweens();
            this.data.forEach(function(t) {
                "isFlip" === t.data && (t.revert(),
                t.getChildren(!0, !0, !1).forEach(function(t) {
                    return i.splice(i.indexOf(t), 1)
                }))
            }),
            i.map(function(t) {
                return {
                    g: t.globalTime(0),
                    t: t
                }
            }).sort(function(t, e) {
                return e.g - t.g || -1
            }).forEach(function(t) {
                return t.t.revert(e)
            }),
            this.data.forEach(function(t) {
                return !(t instanceof qt) && t.revert && t.revert(e)
            }),
            this._r.forEach(function(t) {
                return t(e, r)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(t) {
                return t.kill && t.kill()
            });
        if (this.clear(),
        t) {
            var n = ye.indexOf(this);
            ~n && ye.splice(n, 1)
        }
    }
    ,
    _e.revert = function revert(t) {
        this.kill(t || {})
    }
    ,
    Context);
    function Context(t, e) {
        this.selector = e && cb(e),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        t && this.add(t)
    }
    var Me, Oe = ((Me = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = {
            matches: t
        });
        var i, n, a, s = new ke(0,r || this.scope), o = s.conditions = {};
        for (n in this.contexts.push(s),
        e = s.add("onMatch", e),
        s.queries = t)
            "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ye.indexOf(s) < 0 && ye.push(s),
            (o[n] = i.matches) && (a = 1),
            i.addListener ? i.addListener(Dc) : i.addEventListener("change", Dc));
        return a && e(s),
        this
    }
    ,
    Me.revert = function revert(t) {
        this.kill(t || {})
    }
    ,
    Me.kill = function kill(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }
    ,
    MatchMedia);
    function MatchMedia(t) {
        this.contexts = [],
        this.scope = t
    }
    var Pe = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name
                      , r = s(t)
                      , i = e && !r && t.init ? function() {
                        this._props = []
                    }
                    : t
                      , n = {
                        init: T,
                        render: oe,
                        add: Xt,
                        kill: fe,
                        modifier: le,
                        rawVars: 0
                    }
                      , a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: re,
                        aliases: {},
                        register: 0
                    };
                    if (zt(),
                    t !== i) {
                        if (pt[e])
                            return;
                        qa(i, qa(ua(t, n), a)),
                        yt(i.prototype, yt(n, ua(t, a))),
                        pt[i.prop = e] = i,
                        t.targetTest && (gt.push(i),
                        ft[e] = 1),
                        e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    S(e, i),
                    t.register && t.register(Ce, i, pe)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Ut(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return L.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, n) {
            r(i) && (i = Ot(i)[0]);
            var a = fa(i || {}).get
              , s = e ? pa : oa;
            return "native" === e && (e = ""),
            i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function(t, e, r) {
                return s((pt[t] && pt[t].get || a)(i, t, e, r))
            }
            : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Ot(r)).length) {
                var n = r.map(function(t) {
                    return Ce.quickSetter(t, e, i)
                })
                  , a = n.length;
                return function(t) {
                    for (var e = a; e--; )
                        n[e](t)
                }
            }
            r = r[0] || {};
            var s = pt[e]
              , o = fa(r)
              , u = o.harness && (o.harness.aliases || {})[e] || e
              , h = s ? function(t) {
                var e = new s;
                c._pt = 0,
                e.init(r, i ? t + i : t, c, 0, [r]),
                e.render(1, e),
                c._pt && oe(1, c)
            }
            : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function Ux(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var r, n = Ce.to(t, yt(((r = {})[i] = "+=0.1",
            r.paused = !0,
            r), e || {}));
            return Ux.tween = n,
            Ux
        },
        isTweening: function isTweening(t) {
            return 0 < L.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Yt(t.ease, q.ease)),
            ta(q, t || {})
        },
        config: function config(t) {
            return ta(j, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name
              , n = t.effect
              , e = t.plugins
              , a = t.defaults
              , r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
            }),
            _t[i] = function(t, e, r) {
                return n(Ot(t), qa(e || {}, a), r)
            }
            ,
            r && (Ut.prototype[i] = function(t, e, r) {
                return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r)
            }
            )
        },
        registerEase: function registerEase(t, e) {
            Ft[t] = Yt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Yt(t, e) : Ft
        },
        getById: function getById(t) {
            return L.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Ut(t);
            for (n.smoothChildTiming = w(t.smoothChildTiming),
            L.remove(n),
            n._dp = 0,
            n._time = n._tTime = L._time,
            r = L._first; r; )
                i = r._next,
                !e && !r._dur && r instanceof Gt && r.vars.onComplete === r._targets[0] || Ka(n, r, r._start - r._delay),
                r = i;
            return Ka(L, n, 0),
            n
        },
        context: function context(t, e) {
            return t ? new ke(t,e) : l
        },
        matchMedia: function matchMedia(t) {
            return new Oe(t)
        },
        matchMediaRefresh: function matchMediaRefresh() {
            return ye.forEach(function(t) {
                var e, r, i = t.conditions;
                for (r in i)
                    i[r] && (i[r] = !1,
                    e = 1);
                e && t.revert()
            }) || Dc()
        },
        addEventListener: function addEventListener(t, e) {
            var r = Te[t] || (Te[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function removeEventListener(t, e) {
            var r = Te[t]
              , i = r && r.indexOf(e);
            0 <= i && r.splice(i, 1)
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return $(e) ? lb(e, wrap(0, e.length), t) : Wa(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e
                  , n = 2 * i;
                return $(e) ? lb(e, wrapYoyo(0, e.length - 1), t) : Wa(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: eb,
            random: hb,
            snap: gb,
            normalize: function normalize(t, e, r) {
                return Pt(t, e, 0, 1, r)
            },
            getUnit: Ya,
            clamp: function clamp(e, r, t) {
                return Wa(t, function(t) {
                    return kt(e, r, t)
                })
            },
            splitColor: zb,
            toArray: Ot,
            selector: cb,
            mapRange: Pt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Ya(t))
                }
            },
            interpolate: function interpolate(e, i, t, n) {
                var a = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                }
                ;
                if (!a) {
                    var s, o, u, h, l, f = r(e), c = {};
                    if (!0 === t && (n = 1) && (t = null),
                    f)
                        e = {
                            p: e
                        },
                        i = {
                            p: i
                        };
                    else if ($(e) && !$(i)) {
                        for (u = [],
                        h = e.length,
                        l = h - 2,
                        o = 1; o < h; o++)
                            u.push(interpolate(e[o - 1], e[o]));
                        h--,
                        a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        t = i
                    } else
                        n || (e = yt($(e) ? [] : {}, e));
                    if (!u) {
                        for (s in i)
                            Xt.call(c, e, s, "get", i[s]);
                        a = function func(t) {
                            return oe(t, c) || (f ? e.p : e)
                        }
                    }
                }
                return Wa(t, a)
            },
            shuffle: db
        },
        install: P,
        effects: _t,
        ticker: Et,
        updateRoot: Ut.updateRoot,
        plugins: pt,
        globalTimeline: L,
        core: {
            PropTween: pe,
            globals: S,
            Tween: Gt,
            Timeline: Ut,
            Animation: qt,
            getCache: fa,
            _removeLinkedListItem: ya,
            reverting: function reverting() {
                return B
            },
            context: function context(t) {
                return t && l && (l.data.push(t),
                t._ctx = l),
                l
            },
            suppressOverwrites: function suppressOverwrites(t) {
                return I = t
            }
        }
    };
    ha("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Pe[t] = Gt[t]
    }),
    Et.add(Ut.updateRoot),
    c = Pe.to({}, {
        duration: 0
    });
    function Hc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
    function Jc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, n, e) {
                e._onInit = function(t) {
                    var e, i;
                    if (r(n) && (e = {},
                    ha(n, function(t) {
                        return e[t] = 1
                    }),
                    n = e),
                    a) {
                        for (i in e = {},
                        n)
                            e[i] = a(n[i]);
                        n = e
                    }
                    !function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--; )
                                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Hc(n, r)),
                                n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, n)
                }
            }
        }
    }
    var Ce = Pe.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s, o;
            for (a in this.tween = r,
            e)
                o = t.getAttribute(a) || "",
                (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a,
                s.b = o,
                this._props.push(a)
        },
        render: function render(t, e) {
            for (var r = e._pt; r; )
                B ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
                r = r._next
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Jc("roundProps", fb), Jc("modifiers"), Jc("snap", gb)) || Pe;
    Gt.version = Ut.version = Ce.version = "3.11.4",
    o = 1,
    x() && zt();
    function td(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function ud(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function vd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }
    function wd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }
    function xd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }
    function yd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }
    function zd(t, e, r) {
        return t.style[e] = r
    }
    function Ad(t, e, r) {
        return t.style.setProperty(e, r)
    }
    function Bd(t, e, r) {
        return t._gsap[e] = r
    }
    function Cd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }
    function Dd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r,
        a.renderTransform(n, a)
    }
    function Ed(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r,
        a.renderTransform(n, a)
    }
    function Hd(t, e) {
        var r = this
          , i = this.target
          , n = i.style;
        if (t in rr) {
            if (this.tfm = this.tfm || {},
            "transform" !== t && (~(t = hr[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                return r.tfm[t] = mr(i, t)
            }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : mr(i, t)),
            0 <= this.props.indexOf(lr))
                return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"),
            this.props.push(fr, e, "")),
            t = lr
        }
        (n || e) && this.props.push(t, e, n[t])
    }
    function Id(t) {
        t.translate && (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"))
    }
    function Jd() {
        var t, e, r = this.props, i = this.target, n = i.style, a = i._gsap;
        for (t = 0; t < r.length; t += 3)
            r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty(r[t].replace(sr, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm)
                a[e] = this.tfm[e];
            a.svg && (a.renderTransform(),
            i.setAttribute("data-svg-origin", this.svgo || "")),
            !(t = Fe()) || t.isStart || n[lr] || (Id(n),
            a.uncache = 1)
        }
    }
    function Kd(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Jd,
            save: Hd
        };
        return e && e.split(",").forEach(function(t) {
            return r.save(t)
        }),
        r
    }
    function Md(t, e) {
        var r = Se.createElementNS ? Se.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Se.createElement(t);
        return r.style ? r : Se.createElement(t)
    }
    function Nd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(sr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Nd(t, dr(e) || e, 1) || ""
    }
    function Qd() {
        (function _windowExists() {
            return "undefined" != typeof window
        }
        )() && window.document && (Ae = window,
        Se = Ae.document,
        Re = Se.documentElement,
        Ee = Md("div") || {
            style: {}
        },
        Md("div"),
        lr = dr(lr),
        fr = lr + "Origin",
        Ee.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Ie = !!dr("perspective"),
        Fe = Ce.core.reverting,
        De = 1)
    }
    function Rd(t) {
        var e, r = Md("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
        if (Re.appendChild(r),
        r.appendChild(this),
        this.style.display = "block",
        t)
            try {
                e = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = Rd
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
        Re.removeChild(r),
        this.style.cssText = a,
        e
    }
    function Sd(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }
    function Td(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = Rd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Rd || (r = Rd.call(e, !0)),
        !r || r.width || r.x || r.y ? r : {
            x: +Sd(e, ["x", "cx", "x1"]) || 0,
            y: +Sd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function Ud(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Td(t))
    }
    function Vd(t, e) {
        if (e) {
            var r = t.style;
            e in rr && e !== fr && (e = lr),
            r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            r.removeProperty(e.replace(sr, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }
    function Wd(t, e, r, i, n, a) {
        var s = new pe(t._pt,e,r,0,1,a ? yd : xd);
        return (t._pt = s).b = i,
        s.e = n,
        t._props.push(r),
        s
    }
    function Zd(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = Ee.style, f = or.test(e), c = "svg" === t.tagName.toLowerCase(), d = (c ? "client" : "offset") + (f ? "Width" : "Height"), p = "px" === i, _ = "%" === i;
        return i === h || !u || pr[i] || pr[h] ? u : ("px" === h || p || (u = Zd(t, e, r, "px")),
        o = t.getCTM && Ud(t),
        !_ && "%" !== h || !rr[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i),
        a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode,
        o && (a = (t.ownerSVGElement || {}).parentNode),
        a && a !== Se && a.appendChild || (a = Se.body),
        (s = a._gsap) && _ && s.width && f && s.time === Et.time && !s.uncache ? ia(u / s.width * 100) : (!_ && "%" !== h || _r[Nd(a, "display")] || (l.position = Nd(t, "position")),
        a === t && (l.position = "static"),
        a.appendChild(Ee),
        n = Ee[d],
        a.removeChild(Ee),
        l.position = "absolute",
        f && _ && ((s = fa(a)).time = Et.time,
        s.width = a[d]),
        ia(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d],
        ia(_ ? u / n * 100 : u / 100 * n)))
    }
    function _d(t, e, r, i) {
        if (!r || "none" === r) {
            var n = dr(e, t, 1)
              , a = n && Nd(t, n, 1);
            a && a !== r ? (e = n,
            r = a) : "borderColor" === e && (r = Nd(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, c, d, p, _, m, g = new pe(this._pt,t.style,e,0,1,se), v = 0, y = 0;
        if (g.b = r,
        g.e = i,
        r += "",
        "auto" === (i += "") && (t.style[e] = i,
        i = Nd(t, e) || i,
        t.style[e] = r),
        Eb(s = [r, i]),
        i = s[1],
        u = (r = s[0]).match(rt) || [],
        (i.match(rt) || []).length) {
            for (; o = rt.exec(i); )
                c = o[0],
                p = i.substring(v, o.index),
                l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1),
                c !== (f = u[y++] || "") && (h = parseFloat(f) || 0,
                m = f.substr((h + "").length),
                "=" === c.charAt(1) && (c = ka(h, c) + m),
                d = parseFloat(c),
                _ = c.substr((d + "").length),
                v = rt.lastIndex - _.length,
                _ || (_ = _ || j.units[e] || m,
                v === i.length && (i += _,
                g.e += _)),
                m !== _ && (h = Zd(t, e, f, _) || 0),
                g._pt = {
                    _next: g._pt,
                    p: p || 1 === y ? p : ",",
                    s: h,
                    c: d - h,
                    m: l && l < 4 || "zIndex" === e ? Math.round : 0
                });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else
            g.r = "display" === e && "none" === i ? yd : xd;
        return nt.test(i) && (g.e = 0),
        this._pt = g
    }
    function be(t) {
        var e = t.split(" ")
          , r = e[0]
          , i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r,
        r = i,
        i = t),
        e[0] = gr[r] || r,
        e[1] = gr[i] || i,
        e.join(" ")
    }
    function ce(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
            if ("all" === o || !0 === o)
                s.cssText = "",
                i = 1;
            else
                for (n = (o = o.split(",")).length; -1 < --n; )
                    r = o[n],
                    rr[r] && (i = 1,
                    r = "transformOrigin" === r ? fr : lr),
                    Vd(a, r);
            i && (Vd(a, lr),
            u && (u.svg && a.removeAttribute("transform"),
            br(a, 1),
            u.uncache = 1,
            Id(s)))
        }
    }
    function ge(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }
    function he(t) {
        var e = Nd(t, lr);
        return ge(e) ? yr : e.substr(7).match(et).map(ia)
    }
    function ie(t, e) {
        var r, i, n, a, s = t._gsap || fa(t), o = t.style, u = he(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? yr : u : (u !== yr || t.offsetParent || t === Re || s.svg || (n = o.display,
        o.display = "block",
        (r = t.parentNode) && t.offsetParent || (a = 1,
        i = t.nextElementSibling,
        Re.appendChild(t)),
        u = he(t),
        n ? o.display = n : Vd(t, "display"),
        a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Re.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }
    function je(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap, l = n || ie(t, !0), f = h.xOrigin || 0, c = h.yOrigin || 0, d = h.xOffset || 0, p = h.yOffset || 0, _ = l[0], m = l[1], g = l[2], v = l[3], y = l[4], T = l[5], b = e.split(" "), w = parseFloat(b[0]) || 0, x = parseFloat(b[1]) || 0;
        r ? l !== yr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o,
        w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o,
        x = u) : (w = (s = Td(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w),
        x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)),
        i || !1 !== i && h.smooth ? (y = w - f,
        T = x - c,
        h.xOffset = d + (y * _ + T * g) - y,
        h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0,
        h.xOrigin = w,
        h.yOrigin = x,
        h.smooth = !!i,
        h.origin = e,
        h.originIsAbsolute = !!r,
        t.style[fr] = "0px 0px",
        a && (Wd(a, h, "xOrigin", f, w),
        Wd(a, h, "yOrigin", c, x),
        Wd(a, h, "xOffset", d, h.xOffset),
        Wd(a, h, "yOffset", p, h.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + x)
    }
    function me(t, e, r) {
        var i = Ya(e);
        return ia(parseFloat(e) + parseFloat(Zd(t, "x", r + "px", i))) + i
    }
    function te(t, e, i, n, a) {
        var s, o, u = 360, h = r(a), l = parseFloat(a) * (h && ~a.indexOf("rad") ? ir : 1) - n, f = n + l + "deg";
        return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u),
        "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)),
        t._pt = o = new pe(t._pt,e,i,n,l,ud),
        o.e = f,
        o.u = "deg",
        t._props.push(i),
        o
    }
    function ue(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }
    function ve(t, e, r) {
        var i, n, a, s, o, u, h, l = ue({}, r._gsap), f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"),
        r.setAttribute("transform", ""),
        f[lr] = e,
        i = br(r, 1),
        Vd(r, lr),
        r.setAttribute("transform", a)) : (a = getComputedStyle(r)[lr],
        f[lr] = e,
        i = br(r, 1),
        f[lr] = a),
        rr)
            (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ya(a) !== (h = Ya(s)) ? Zd(r, n, a, h) : parseFloat(a),
            u = parseFloat(s),
            t._pt = new pe(t._pt,i,n,o,u - o,td),
            t._pt.u = h || 0,
            t._props.push(n));
        ue(i, l)
    }
    var Ae, Se, Re, De, Ee, ze, Fe, Ie, Be = Ft.Power0, Le = Ft.Power1, Ye = Ft.Power2, Ne = Ft.Power3, qe = Ft.Power4, Ue = Ft.Linear, Ve = Ft.Quad, We = Ft.Cubic, Xe = Ft.Quart, He = Ft.Quint, Qe = Ft.Strong, Ke = Ft.Elastic, Ze = Ft.Back, Ge = Ft.SteppedEase, Je = Ft.Bounce, $e = Ft.Sine, tr = Ft.Expo, er = Ft.Circ, rr = {}, ir = 180 / Math.PI, nr = Math.PI / 180, ar = Math.atan2, sr = /([A-Z])/g, or = /(left|right|width|margin|padding|x)/i, ur = /[\s,\(]\S/, hr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, lr = "transform", fr = lr + "Origin", cr = "O,Moz,ms,Ms,Webkit".split(","), dr = function _checkPropPrefix(t, e, r) {
        var i = (e || Ee).style
          , n = 5;
        if (t in i && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(cr[n] + t in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? cr[n] : "") + t
    }, pr = {
        deg: 1,
        rad: 1,
        turn: 1
    }, _r = {
        grid: 1,
        flex: 1
    }, mr = function _get(t, e, r, i) {
        var n;
        return De || Qd(),
        e in hr && "transform" !== e && ~(e = hr[e]).indexOf(",") && (e = e.split(",")[0]),
        rr[e] && "transform" !== e ? (n = br(t, i),
        n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : wr(Nd(t, fr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = vr[e] && vr[e](t, e, r) || Nd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? Zd(t, e, n, r) + r : n
    }, gr = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, vr = {
        clearProps: function clearProps(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var a = t._pt = new pe(t._pt,e,r,0,0,ce);
                return a.u = i,
                a.pr = -10,
                a.tween = n,
                t._props.push(r),
                1
            }
        }
    }, yr = [1, 0, 0, 1, 0, 0], Tr = {}, br = function _parseTransform(t, e) {
        var r = t._gsap || new jt(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var i, n, a, s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w, x, k, M, O, P, C, A, S, R, D, E, z, F = t.style, I = r.scaleX < 0, B = "deg", L = getComputedStyle(t), Y = Nd(t, fr) || "0";
        return i = n = a = u = h = l = f = c = d = 0,
        s = o = 1,
        r.svg = !(!t.getCTM || !Ud(t)),
        L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[lr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[lr] ? L[lr] : "")),
        F.scale = F.rotate = F.translate = "none"),
        m = ie(t, r.svg),
        r.svg && (O = r.uncache ? (P = t.getBBox(),
        Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px",
        "") : !e && t.getAttribute("data-svg-origin"),
        je(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)),
        p = r.xOrigin || 0,
        _ = r.yOrigin || 0,
        m !== yr && (T = m[0],
        b = m[1],
        w = m[2],
        x = m[3],
        i = k = m[4],
        n = M = m[5],
        6 === m.length ? (s = Math.sqrt(T * T + b * b),
        o = Math.sqrt(x * x + w * w),
        u = T || b ? ar(b, T) * ir : 0,
        (f = w || x ? ar(w, x) * ir + u : 0) && (o *= Math.abs(Math.cos(f * nr))),
        r.svg && (i -= p - (p * T + _ * w),
        n -= _ - (p * b + _ * x))) : (z = m[6],
        D = m[7],
        A = m[8],
        S = m[9],
        R = m[10],
        E = m[11],
        i = m[12],
        n = m[13],
        a = m[14],
        h = (g = ar(z, R)) * ir,
        g && (O = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g)),
        P = M * v + S * y,
        C = z * v + R * y,
        A = k * -y + A * v,
        S = M * -y + S * v,
        R = z * -y + R * v,
        E = D * -y + E * v,
        k = O,
        M = P,
        z = C),
        l = (g = ar(-w, R)) * ir,
        g && (v = Math.cos(-g),
        E = x * (y = Math.sin(-g)) + E * v,
        T = O = T * v - A * y,
        b = P = b * v - S * y,
        w = C = w * v - R * y),
        u = (g = ar(b, T)) * ir,
        g && (O = T * (v = Math.cos(g)) + b * (y = Math.sin(g)),
        P = k * v + M * y,
        b = b * v - T * y,
        M = M * v - k * y,
        T = O,
        k = P),
        h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0,
        l = 180 - l),
        s = ia(Math.sqrt(T * T + b * b + w * w)),
        o = ia(Math.sqrt(M * M + z * z)),
        g = ar(k, M),
        f = 2e-4 < Math.abs(g) ? g * ir : 0,
        d = E ? 1 / (E < 0 ? -E : E) : 0),
        r.svg && (O = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !ge(Nd(t, lr)),
        O && t.setAttribute("transform", O))),
        90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1,
        f += u <= 0 ? 180 : -180,
        u += u <= 0 ? 180 : -180) : (o *= -1,
        f += f <= 0 ? 180 : -180)),
        e = e || r.uncache,
        r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px",
        r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px",
        r.z = a + "px",
        r.scaleX = ia(s),
        r.scaleY = ia(o),
        r.rotation = ia(u) + B,
        r.rotationX = ia(h) + B,
        r.rotationY = ia(l) + B,
        r.skewX = f + B,
        r.skewY = c + B,
        r.transformPerspective = d + "px",
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[fr] = wr(Y)),
        r.xOffset = r.yOffset = 0,
        r.force3D = j.force3D,
        r.renderTransform = r.svg ? Cr : Ie ? Pr : xr,
        r.uncache = 0,
        r
    }, wr = function _firstTwoOnly(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, xr = function _renderNon3DTransforms(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Pr(t, e)
    }, kr = "0deg", Mr = "0px", Or = ") ", Pr = function _renderCSSTransforms(t, e) {
        var r = e || this
          , i = r.xPercent
          , n = r.yPercent
          , a = r.x
          , s = r.y
          , o = r.z
          , u = r.rotation
          , h = r.rotationY
          , l = r.rotationX
          , f = r.skewX
          , c = r.skewY
          , d = r.scaleX
          , p = r.scaleY
          , _ = r.transformPerspective
          , m = r.force3D
          , g = r.target
          , v = r.zOrigin
          , y = ""
          , T = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (l !== kr || h !== kr)) {
            var b, w = parseFloat(h) * nr, x = Math.sin(w), k = Math.cos(w);
            w = parseFloat(l) * nr,
            b = Math.cos(w),
            a = me(g, a, x * b * -v),
            s = me(g, s, -Math.sin(w) * -v),
            o = me(g, o, k * b * -v + v)
        }
        _ !== Mr && (y += "perspective(" + _ + Or),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        !T && a === Mr && s === Mr && o === Mr || (y += o !== Mr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Or),
        u !== kr && (y += "rotate(" + u + Or),
        h !== kr && (y += "rotateY(" + h + Or),
        l !== kr && (y += "rotateX(" + l + Or),
        f === kr && c === kr || (y += "skew(" + f + ", " + c + Or),
        1 === d && 1 === p || (y += "scale(" + d + ", " + p + Or),
        g.style[lr] = y || "translate(0, 0)"
    }, Cr = function _renderSVGTransforms(t, e) {
        var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, c = o.rotation, d = o.skewX, p = o.skewY, _ = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, T = o.xOffset, b = o.yOffset, w = o.forceCSS, x = parseFloat(l), k = parseFloat(f);
        c = parseFloat(c),
        d = parseFloat(d),
        (p = parseFloat(p)) && (d += p = parseFloat(p),
        c += p),
        c || d ? (c *= nr,
        d *= nr,
        r = Math.cos(c) * _,
        i = Math.sin(c) * _,
        n = Math.sin(c - d) * -m,
        a = Math.cos(c - d) * m,
        d && (p *= nr,
        s = Math.tan(d - p),
        n *= s = Math.sqrt(1 + s * s),
        a *= s,
        p && (s = Math.tan(p),
        r *= s = Math.sqrt(1 + s * s),
        i *= s)),
        r = ia(r),
        i = ia(i),
        n = ia(n),
        a = ia(a)) : (r = _,
        a = m,
        i = n = 0),
        (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = Zd(g, "x", l, "px"),
        k = Zd(g, "y", f, "px")),
        (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T),
        k = ia(k + y - (v * i + y * a) + b)),
        (u || h) && (s = g.getBBox(),
        x = ia(x + u / 100 * s.width),
        k = ia(k + h / 100 * s.height)),
        s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")",
        g.setAttribute("transform", s),
        w && (g.style[lr] = s)
    };
    ha("padding,margin,Width,Radius", function(e, r) {
        var t = "Right"
          , i = "Bottom"
          , n = "Left"
          , o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e
        });
        vr[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4)
                return a = o.map(function(t) {
                    return mr(e, t, r)
                }),
                5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "),
            s = {},
            o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }),
            e.init(t, s, n)
        }
    });
    var Ar, Sr, Rr, Dr = {
        name: "css",
        register: Qd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, i, n, a) {
            var s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w = this._props, x = t.style, k = i.vars.startAt;
            for (c in De || Qd(),
            this.styles = this.styles || Kd(t),
            b = this.styles.props,
            this.tween = i,
            e)
                if ("autoRound" !== c && (o = e[c],
                !pt[c] || !_b(c, e, i, n, t, a)))
                    if (l = typeof o,
                    f = vr[c],
                    "function" === l && (l = typeof (o = o.call(i, n, t, a))),
                    "string" === l && ~o.indexOf("random(") && (o = ob(o)),
                    f)
                        f(this, t, c, o, i) && (T = 1);
                    else if ("--" === c.substr(0, 2))
                        s = (getComputedStyle(t).getPropertyValue(c) + "").trim(),
                        o += "",
                        Rt.lastIndex = 0,
                        Rt.test(s) || (d = Ya(s),
                        p = Ya(o)),
                        p ? d !== p && (s = Zd(t, c, s, p) + p) : d && (o += d),
                        this.add(x, "setProperty", s, o, n, a, 0, 0, c),
                        w.push(c),
                        b.push(c, 0, x[c]);
                    else if ("undefined" !== l) {
                        if (k && c in k ? (s = "function" == typeof k[c] ? k[c].call(i, n, t, a) : k[c],
                        r(s) && ~s.indexOf("random(") && (s = ob(s)),
                        Ya(s + "") || (s += j.units[c] || Ya(mr(t, c)) || ""),
                        "=" === (s + "").charAt(1) && (s = mr(t, c))) : s = mr(t, c),
                        h = parseFloat(s),
                        (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)),
                        u = parseFloat(o),
                        c in hr && ("autoAlpha" === c && (1 === h && "hidden" === mr(t, "visibility") && u && (h = 0),
                        b.push("visibility", 0, x.visibility),
                        Wd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                        "scale" !== c && "transform" !== c && ~(c = hr[c]).indexOf(",") && (c = c.split(",")[0])),
                        m = c in rr)
                            if (this.styles.save(c),
                            g || ((v = t._gsap).renderTransform && !e.parseTransform || br(t, e.parseTransform),
                            y = !1 !== e.smoothOrigin && v.smooth,
                            (g = this._pt = new pe(this._pt,x,lr,0,1,v.renderTransform,v,0,-1)).dep = 1),
                            "scale" === c)
                                this._pt = new pe(this._pt,v,"scaleY",v.scaleY,(_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0,td),
                                this._pt.u = 0,
                                w.push("scaleY", c),
                                c += "X";
                            else {
                                if ("transformOrigin" === c) {
                                    b.push(fr, 0, x[fr]),
                                    o = be(o),
                                    v.svg ? je(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Wd(this, v, "zOrigin", v.zOrigin, p),
                                    Wd(this, x, c, wr(s), wr(o)));
                                    continue
                                }
                                if ("svgOrigin" === c) {
                                    je(t, o, 1, y, 0, this);
                                    continue
                                }
                                if (c in Tr) {
                                    te(this, v, c, h, _ ? ka(h, _ + o) : o);
                                    continue
                                }
                                if ("smoothOrigin" === c) {
                                    Wd(this, v, "smooth", v.smooth, o);
                                    continue
                                }
                                if ("force3D" === c) {
                                    v[c] = o;
                                    continue
                                }
                                if ("transform" === c) {
                                    ve(this, o, t);
                                    continue
                                }
                            }
                        else
                            c in x || (c = dr(c) || c);
                        if (m || (u || 0 === u) && (h || 0 === h) && !ur.test(o) && c in x)
                            u = u || 0,
                            (d = (s + "").substr((h + "").length)) !== (p = Ya(o) || (c in j.units ? j.units[c] : d)) && (h = Zd(t, c, s, p)),
                            this._pt = new pe(this._pt,m ? v : x,c,h,(_ ? ka(h, _ + u) : u) - h,m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? td : wd),
                            this._pt.u = p || 0,
                            d !== p && "%" !== p && (this._pt.b = s,
                            this._pt.r = vd);
                        else if (c in x)
                            _d.call(this, t, c, s, _ ? _ + o : o);
                        else if (c in t)
                            this.add(t, c, s || t[c], _ ? _ + o : o, n, a);
                        else if ("parseTransform" !== c) {
                            Q(c, o);
                            continue
                        }
                        m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])),
                        w.push(c)
                    }
            T && de(this)
        },
        render: function render(t, e) {
            if (e.tween._time || !Fe())
                for (var r = e._pt; r; )
                    r.r(t, r.d),
                    r = r._next;
            else
                e.styles.revert()
        },
        get: mr,
        aliases: hr,
        getSetter: function getSetter(t, e, r) {
            var i = hr[e];
            return i && i.indexOf(",") < 0 && (e = i),
            e in rr && e !== fr && (t._gsap.x || mr(t, "x")) ? r && ze === r ? "scale" === e ? Cd : Bd : (ze = r || {}) && ("scale" === e ? Dd : Ed) : t.style && !u(t.style[e]) ? zd : ~e.indexOf("-") ? Ad : re(t, e)
        },
        core: {
            _removeProperty: Vd,
            _getMatrix: ie
        }
    };
    Ce.utils.checkPrefix = dr,
    Ce.core.getStyleSaver = Kd,
    Rr = ha((Ar = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Sr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        rr[t] = 1
    }),
    ha(Sr, function(t) {
        j.units[t] = "deg",
        Tr[t] = 1
    }),
    hr[Rr[13]] = Ar + "," + Sr,
    ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        hr[e[1]] = Rr[e[0]]
    }),
    ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        j.units[t] = "px"
    }),
    Ce.registerPlugin(Dr);
    var Er = Ce.registerPlugin(Dr) || Ce
      , zr = Er.core.Tween;
    e.Back = Ze,
    e.Bounce = Je,
    e.CSSPlugin = Dr,
    e.Circ = er,
    e.Cubic = We,
    e.Elastic = Ke,
    e.Expo = tr,
    e.Linear = Ue,
    e.Power0 = Be,
    e.Power1 = Le,
    e.Power2 = Ye,
    e.Power3 = Ne,
    e.Power4 = qe,
    e.Quad = Ve,
    e.Quart = Xe,
    e.Quint = He,
    e.Sine = $e,
    e.SteppedEase = Ge,
    e.Strong = Qe,
    e.TimelineLite = Ut,
    e.TimelineMax = Ut,
    e.TweenLite = Gt,
    e.TweenMax = zr,
    e.default = Er,
    e.gsap = Er;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/*!
 * ScrollSmoother 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function s() {
        return "undefined" != typeof window
    }
    function t() {
        return D || s() && (D = window.gsap) && D.registerPlugin && D
    }
    var D, L, O, N, U, K, q, V, j, J, Y, W, G, Q, X, r = (ScrollSmoother.register = function register(e) {
        return L || (D = e || t(),
        s() && window.document && (O = window,
        N = document,
        U = N.documentElement,
        K = N.body),
        D && (q = D.utils.toArray,
        V = D.utils.clamp,
        Y = D.parseEase("expo"),
        Q = D.core.context || function() {}
        ,
        X = D.delayedCall(.2, function() {
            return j.isRefreshing || J && J.refresh()
        }).pause(),
        j = D.core.globals().ScrollTrigger,
        D.core.globals("ScrollSmoother", ScrollSmoother),
        K && j && (W = j.core._getVelocityProp,
        G = j.core._inputObserver,
        ScrollSmoother.refresh = j.refresh,
        L = 1))),
        L
    }
    ,
    function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t),
        r && _defineProperties(e, r),
        e
    }(ScrollSmoother, [{
        key: "progress",
        get: function get() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]),
    ScrollSmoother);
    function ScrollSmoother(t) {
        var o = this;
        L || ScrollSmoother.register(D) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        t = this.vars = t || {},
        J && J.kill(),
        Q(J = this);
        function za() {
            return z.update(-A)
        }
        function Ba() {
            return n.style.overflow = "visible"
        }
        function Da(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(),
            t._time = t._dur,
            t._tTime = t._tDur),
            d = !1,
            e.animation.progress(e.progress, !0)
        }
        function Ea(e, t) {
            (e !== A && !u || t) && (x && (e = Math.round(e)),
            C && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)",
            n._gsap.y = e + "px"),
            F = e - A,
            A = e,
            j.isUpdating || j.update())
        }
        function Fa(e) {
            return arguments.length ? (e < 0 && (e = 0),
            M.y = -e,
            d = !0,
            u ? A = -e : Ea(-e),
            j.isRefreshing ? i.update() : _(e),
            this) : -A
        }
        function Ha(e) {
            b.scrollTop = 0,
            e.target.contains && e.target.contains(b) || E && !1 === E(o, e) || (j.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, "center center"),
            g = e.target)
        }
        function Ia(e) {
            var r, n, o, i;
            S.forEach(function(t) {
                r = t.pins,
                i = t.markers,
                e.forEach(function(e) {
                    t.trigger && e.trigger && t !== e && (e.trigger === t.trigger || e.pinnedContainer === t.trigger || t.trigger.contains(e.trigger)) && (n = e.start,
                    o = (n - t.start - t.offset) / t.ratio - (n - t.start),
                    r.forEach(function(e) {
                        return o -= e.distance / t.ratio - e.distance
                    }),
                    e.setPositions(n + o, e.end + o),
                    e.markerStart && i.push(D.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
                    e.pin && 0 < e.end && (o = e.end - e.start,
                    r.push({
                        start: e.start,
                        end: e.end,
                        distance: o,
                        trig: e
                    }),
                    t.setPositions(t.start, t.end + o),
                    t.vars.onRefresh(t)))
                })
            })
        }
        function Ja() {
            Ba(),
            requestAnimationFrame(Ba),
            S && (S.forEach(function(e) {
                var t = e.start
                  , r = e.auto ? Math.min(j.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio
                  , n = (r - e.end) / 2;
                t -= n,
                r -= n,
                e.offset = n || 1e-4,
                e.pins.length = 0,
                e.setPositions(Math.min(t, r), Math.max(t, r)),
                e.vars.onRefresh(e)
            }),
            Ia(j.sort())),
            z.reset()
        }
        function Ka() {
            return j.addEventListener("refresh", Ja)
        }
        function La() {
            return S && S.forEach(function(e) {
                return e.vars.onRefresh(e)
            })
        }
        function Ma() {
            return S && S.forEach(function(e) {
                return e.vars.onRefreshInit(e)
            }),
            La
        }
        function Na(t, r, n, o) {
            return function() {
                var e = "function" == typeof r ? r(n, o) : r;
                return e || 0 === e || (e = o.getAttribute("data-" + k + t) || ("speed" === t ? 1 : 0)),
                o.setAttribute("data-" + k + t, e),
                "auto" === e ? e : parseFloat(e)
            }
        }
        function Oa(r, e, t, n, o) {
            function Db() {
                e = f(),
                t = h(),
                i = parseFloat(e) || 1,
                c = (a = "auto" === e) ? 0 : .5,
                l && l.kill(),
                l = t && D.to(r, {
                    ease: Y,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                }),
                s && (s.ratio = i,
                s.autoSpeed = a)
            }
            function Eb() {
                g.y = d + "px",
                g.renderTransform(1),
                Db()
            }
            function Ib(e) {
                if (a) {
                    Eb();
                    var t = function _autoDistance(e, t) {
                        var r, n, o = e.parentNode || U, i = e.getBoundingClientRect(), s = o.getBoundingClientRect(), a = s.top - i.top, l = s.bottom - i.bottom, c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t), u = -c * t;
                        return 0 < c && (n = .5 == (r = s.height / (O.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, -c * r / (2 * r - 1)) * (t || 1),
                        u += t ? -n * t : -n / 2,
                        c += n),
                        {
                            change: c,
                            offset: u
                        }
                    }(r, V(0, 1, -e.start / (e.end - e.start)));
                    m = t.change,
                    u = t.offset
                } else
                    m = (e.end - e.start) * (1 - i),
                    u = 0;
                p.forEach(function(e) {
                    return m -= e.distance * (1 - i)
                }),
                e.vars.onUpdate(e),
                l && l.progress(1)
            }
            o = ("function" == typeof o ? o(n, r) : o) || 0;
            var i, s, a, l, c, u, f = Na("speed", e, n, r), h = Na("lag", t, n, r), d = D.getProperty(r, "y"), g = r._gsap, p = [], v = [], m = 0;
            return Db(),
            (1 !== i || a || l) && (Ib(s = j.create({
                trigger: a ? r.parentNode : r,
                start: "top bottom+=" + o,
                end: "bottom top-=" + o,
                scroller: b,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: Eb,
                onRefresh: Ib,
                onKill: function onKill(e) {
                    var t = S.indexOf(e);
                    0 <= t && S.splice(t, 1),
                    Eb()
                },
                onUpdate: function onUpdate(e) {
                    var t, r, n, o = d + m * (e.progress - c), i = p.length, s = 0;
                    if (e.offset) {
                        if (i) {
                            for (r = -A,
                            n = e.end; i--; ) {
                                if ((t = p[i]).trig.isActive || r >= t.start && r <= t.end)
                                    return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001,
                                    t.trig.update(0, 0, 1),
                                    l.resetTo("y", parseFloat(g.y), -F, !0),
                                    I && l.progress(1)));
                                r > t.end && (s += t.distance),
                                n -= t.distance
                            }
                            o = d + s + m * ((D.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c)
                        }
                        o = function _round(e) {
                            return Math.round(1e5 * e) / 1e5 || 0
                        }(o + u),
                        v.length && !a && v.forEach(function(e) {
                            return e(o - s)
                        }),
                        l ? (l.resetTo("y", o, -F, !0),
                        I && l.progress(1)) : (g.y = o + "px",
                        g.renderTransform(1))
                    }
                }
            })),
            D.core.getCache(s.trigger).stRevert = Ma,
            s.startY = d,
            s.pins = p,
            s.markers = v,
            s.ratio = i,
            s.autoSpeed = a,
            r.style.willChange = "transform"),
            s
        }
        var n, b, e, i, S, s, a, l, c, u, r, f, h, d, g, p = t.smoothTouch, v = t.onUpdate, m = t.onStop, w = t.smooth, E = t.onFocusIn, T = t.normalizeScroll, x = t.wholePixels, P = this, R = "undefined" != typeof ResizeObserver && !1 !== t.autoResize && new ResizeObserver(function() {
            return j.isRefreshing || X.restart(!0)
        }
        ), k = t.effectsPrefix || "", _ = j.getScrollFunc(O), C = 1 === j.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === w || !1 === w ? 0 : parseFloat(w) || .8, H = C && +t.speed || 1, A = 0, F = 0, I = 1, z = W(0), M = {
            y: 0
        };
        function refreshHeight() {
            return e = n.clientHeight,
            n.style.overflow = "visible",
            K.style.height = O.innerHeight + (e - O.innerHeight) / H + "px",
            e - O.innerHeight
        }
        Ka(),
        j.addEventListener("killAll", Ka),
        D.delayedCall(.5, function() {
            return I = 0
        }),
        this.scrollTop = Fa,
        this.scrollTo = function(e, t, r) {
            var n = D.utils.clamp(0, j.maxScroll(O), isNaN(e) ? o.offset(e, r) : +e);
            t ? u ? D.to(o, {
                duration: C,
                scrollTop: n,
                overwrite: "auto",
                ease: Y
            }) : _(n) : Fa(n)
        }
        ,
        this.offset = function(e, t) {
            var r, n = (e = q(e)[0]).style.cssText, o = j.create({
                trigger: e,
                start: t || "top top"
            });
            return S && Ia([o]),
            r = o.start,
            o.kill(!1),
            e.style.cssText = n,
            D.core.getCache(e).uncache = 1,
            r
        }
        ,
        this.content = function(e) {
            if (arguments.length) {
                var t = q(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || K.children[0];
                return t !== n && (c = (n = t).getAttribute("style") || "",
                R && R.observe(n),
                D.set(n, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }),
                C || D.set(n, {
                    clearProps: "transform"
                })),
                this
            }
            return n
        }
        ,
        this.wrapper = function(e) {
            return arguments.length ? (b = q(e || "#smooth-wrapper")[0] || function _wrap(e) {
                var t = N.querySelector(".ScrollSmoother-wrapper");
                return t || ((t = N.createElement("div")).classList.add("ScrollSmoother-wrapper"),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e)),
                t
            }(n),
            l = b.getAttribute("style") || "",
            refreshHeight(),
            D.set(b, C ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }),
            this) : b
        }
        ,
        this.effects = function(e, t) {
            if (S = S || [],
            !e)
                return S.slice(0);
            (e = q(e)).forEach(function(e) {
                for (var t = S.length; t--; )
                    S[t].trigger === e && S[t].kill()
            });
            t = t || {};
            var r, n, o = t.speed, i = t.lag, s = t.effectsPadding, a = [];
            for (r = 0; r < e.length; r++)
                (n = Oa(e[r], o, i, r, s)) && a.push(n);
            return S.push.apply(S, a),
            a
        }
        ,
        this.sections = function(e, t) {
            if (s = s || [],
            !e)
                return s.slice(0);
            var r = q(e).map(function(t) {
                return j.create({
                    trigger: t,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function onToggle(e) {
                        t.style.opacity = e.isActive ? "1" : "0",
                        t.style.pointerEvents = e.isActive ? "all" : "none"
                    }
                })
            });
            return t && t.add ? s.push.apply(s, r) : s = r.slice(0),
            r
        }
        ,
        this.content(t.content),
        this.wrapper(t.wrapper),
        this.render = function(e) {
            return Ea(e || 0 === e ? e : A)
        }
        ,
        this.getVelocity = function() {
            return z.getVelocity(-A)
        }
        ,
        j.scrollerProxy(b, {
            scrollTop: Fa,
            scrollHeight: function scrollHeight() {
                return refreshHeight() && K.scrollHeight
            },
            fixedMarkers: !1 !== t.fixedMarkers && !!C,
            content: n,
            getBoundingClientRect: function getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: O.innerWidth,
                    height: O.innerHeight
                }
            }
        }),
        j.defaults({
            scroller: b
        });
        var B = j.getAll().filter(function(e) {
            return e.scroller === O || e.scroller === b
        });
        B.forEach(function(e) {
            return e.revert(!0, !0)
        }),
        i = j.create({
            animation: D.fromTo(M, {
                y: 0
            }, {
                y: function y() {
                    return -refreshHeight()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function onUpdate() {
                    if (this._dur) {
                        var e = d;
                        e && (Da(i),
                        M.y = A),
                        Ea(M.y, e),
                        za(),
                        v && !u && v(P)
                    }
                }
            }),
            onRefreshInit: function onRefreshInit(e) {
                if (S) {
                    var t = j.getAll().filter(function(e) {
                        return !!e.pin
                    });
                    S.forEach(function(r) {
                        r.vars.pinnedContainer || t.forEach(function(e) {
                            if (e.pin.contains(r.trigger)) {
                                var t = r.vars;
                                t.pinnedContainer = e.pin,
                                r.vars = null,
                                r.init(t, r.animation)
                            }
                        })
                    })
                }
                var r = e.getTween();
                h = r && r._end > r._dp._time,
                f = A,
                M.y = 0,
                C && (b.style.pointerEvents = "none",
                b.scrollTop = 0,
                setTimeout(function() {
                    return b.style.removeProperty("pointer-events")
                }, 50))
            },
            onRefresh: function onRefresh(e) {
                e.animation.invalidate(),
                e.setPositions(e.start, refreshHeight() / H),
                h || Da(e),
                M.y = -_(),
                Ea(M.y),
                I || e.animation.progress(D.utils.clamp(0, 1, f / -e.end)),
                h && (e.progress -= .001,
                e.update())
            },
            id: "ScrollSmoother",
            scroller: O,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: function end() {
                return refreshHeight() / H
            },
            onScrubComplete: function onScrubComplete() {
                z.reset(),
                m && m(o)
            },
            scrub: C || !0
        }),
        this.smooth = function(e) {
            return arguments.length && (H = (C = e || 0) && +t.speed || 1,
            i.scrubDuration(e)),
            i.getTween() ? i.getTween().duration() : 0
        }
        ,
        i.getTween() && (i.getTween().vars.ease = t.ease || Y),
        this.scrollTrigger = i,
        t.effects && this.effects(!0 === t.effects ? "[data-" + k + "speed], [data-" + k + "lag]" : t.effects, {
            effectsPadding: t.effectsPadding
        }),
        t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections),
        B.forEach(function(e) {
            e.vars.scroller = b,
            e.revert(!1, !0),
            e.init(e.vars, e.animation)
        }),
        this.paused = function(e, t) {
            return arguments.length ? (!!u !== e && (e ? (i.getTween() && i.getTween().pause(),
            _(-A),
            z.reset(),
            (r = j.normalizeScroll()) && r.disable(),
            (u = j.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function onChangeY() {
                    return Fa(-A)
                }
            })).nested = G(U, "wheel,touch,scroll", !0, !1 !== t)) : (u.nested.kill(),
            u.kill(),
            u = 0,
            r && r.enable(),
            i.progress = (-A - i.start) / (i.end - i.start),
            Da(i))),
            this) : !!u
        }
        ,
        this.kill = this.revert = function() {
            o.paused(!1),
            Da(i),
            i.kill();
            for (var e = (S || []).concat(s || []), t = e.length; t--; )
                e[t].kill();
            j.scrollerProxy(b),
            j.removeEventListener("killAll", Ka),
            j.removeEventListener("refresh", Ja),
            b.style.cssText = l,
            n.style.cssText = c;
            var r = j.defaults({});
            r && r.scroller === b && j.defaults({
                scroller: O
            }),
            o.normalizer && j.normalizeScroll(!1),
            clearInterval(a),
            J = null,
            R && R.disconnect(),
            K.style.removeProperty("height"),
            O.removeEventListener("focusin", Ha)
        }
        ,
        this.refresh = function(e, t) {
            return i.refresh(e, t)
        }
        ,
        T && (this.normalizer = j.normalizeScroll(!0 === T ? {
            debounce: !0,
            content: !C && n
        } : T)),
        j.config(t),
        "overscrollBehavior"in O.getComputedStyle(K) && D.set([K, U], {
            overscrollBehavior: "none"
        }),
        "scrollBehavior"in O.getComputedStyle(K) && D.set([K, U], {
            scrollBehavior: "auto"
        }),
        O.addEventListener("focusin", Ha),
        a = setInterval(za, 250),
        "loading" === N.readyState || requestAnimationFrame(function() {
            return j.refresh()
        })
    }
    r.version = "3.11.4",
    r.create = function(e) {
        return J && e && J.content() === q(e.content)[0] ? J : new r(e)
    }
    ,
    r.get = function() {
        return J
    }
    ,
    t() && D.registerPlugin(r),
    e.ScrollSmoother = r,
    e.default = r;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/*!
 * SplitText 3.11.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(D, u) {
    "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
}(this, function(D) {
    "use strict";
    var _ = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function k(D) {
        return e.getComputedStyle(D)
    }
    function n(D, u) {
        var e;
        return i(D) ? D : "string" == (e = typeof D) && !u && D ? E.call(X.querySelectorAll(D), 0) : D && "object" == e && "length"in D ? E.call(D, 0) : D ? [D] : []
    }
    function o(D) {
        return "absolute" === D.position || !0 === D.absolute
    }
    function p(D, u) {
        for (var e, t = u.length; -1 < --t; )
            if (e = u[t],
            D.substr(0, e.length) === e)
                return e.length
    }
    function r(D, u) {
        void 0 === D && (D = "");
        var e = ~D.indexOf("++")
          , t = 1;
        return e && (D = D.split("++").join("")),
        function() {
            return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
        }
    }
    function s(D, u, e) {
        var t = D.nodeType;
        if (1 === t || 9 === t || 11 === t)
            for (D = D.firstChild; D; D = D.nextSibling)
                s(D, u, e);
        else
            3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e))
    }
    function t(D, u) {
        for (var e = u.length; -1 < --e; )
            D.push(u[e])
    }
    function u(D, u, e) {
        for (var t; D && D !== u; ) {
            if (t = D._next || D.nextSibling)
                return t.textContent.charAt(0) === e;
            D = D.parentNode || D._parent
        }
    }
    function v(D) {
        var u, e, t = n(D.childNodes), F = t.length;
        for (u = 0; u < F; u++)
            (e = t[u])._isSplit ? v(e) : u && e.previousSibling && 3 === e.previousSibling.nodeType ? (e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue,
            D.removeChild(e)) : 3 !== e.nodeType && (D.insertBefore(e.firstChild, e),
            D.removeChild(e))
    }
    function w(D, u) {
        return parseFloat(u[D]) || 0
    }
    function x(D, e, F, C, i, n, E) {
        var r, l, p, d, a, h, B, f, A, c, x, g, y = k(D), _ = w("paddingLeft", y), b = -999, S = w("borderBottomWidth", y) + w("borderTopWidth", y), T = w("borderLeftWidth", y) + w("borderRightWidth", y), m = w("paddingTop", y) + w("paddingBottom", y), N = w("paddingLeft", y) + w("paddingRight", y), L = w("fontSize", y) * (e.lineThreshold || .2), W = y.textAlign, H = [], O = [], V = [], j = e.wordDelimiter || " ", M = e.tag ? e.tag : e.span ? "span" : "div", R = e.type || e.split || "chars,words,lines", z = i && ~R.indexOf("lines") ? [] : null, P = ~R.indexOf("words"), q = ~R.indexOf("chars"), G = o(e), I = e.linesClass, J = ~(I || "").indexOf("++"), K = [], Q = "flex" === y.display, U = D.style.display;
        for (J && (I = I.split("++").join("")),
        Q && (D.style.display = "block"),
        p = (l = D.getElementsByTagName("*")).length,
        a = [],
        r = 0; r < p; r++)
            a[r] = l[r];
        if (z || G)
            for (r = 0; r < p; r++)
                ((h = (d = a[r]).parentNode === D) || G || q && !P) && (g = d.offsetTop,
                z && h && Math.abs(g - b) > L && ("BR" !== d.nodeName || 0 === r) && (B = [],
                z.push(B),
                b = g),
                G && (d._x = d.offsetLeft,
                d._y = g,
                d._w = d.offsetWidth,
                d._h = d.offsetHeight),
                z && ((d._isSplit && h || !q && h || P && h || !P && d.parentNode.parentNode === D && !d.parentNode._isSplit) && (B.push(d),
                d._x -= _,
                u(d, D, j) && (d._wordEnd = !0)),
                "BR" === d.nodeName && (d.nextSibling && "BR" === d.nextSibling.nodeName || 0 === r) && z.push([])));
        for (r = 0; r < p; r++)
            if (h = (d = a[r]).parentNode === D,
            "BR" !== d.nodeName)
                if (G && (A = d.style,
                P || h || (d._x += d.parentNode._x,
                d._y += d.parentNode._y),
                A.left = d._x + "px",
                A.top = d._y + "px",
                A.position = "absolute",
                A.display = "block",
                A.width = d._w + 1 + "px",
                A.height = d._h + "px"),
                !P && q)
                    if (d._isSplit)
                        for (d._next = l = d.nextSibling,
                        d.parentNode.appendChild(d); l && 3 === l.nodeType && " " === l.textContent; )
                            d._next = l.nextSibling,
                            d.parentNode.appendChild(l),
                            l = l.nextSibling;
                    else
                        d.parentNode._isSplit ? (d._parent = d.parentNode,
                        !d.previousSibling && d.firstChild && (d.firstChild._isFirst = !0),
                        d.nextSibling && " " === d.nextSibling.textContent && !d.nextSibling.nextSibling && K.push(d.nextSibling),
                        d._next = d.nextSibling && d.nextSibling._isFirst ? null : d.nextSibling,
                        d.parentNode.removeChild(d),
                        a.splice(r--, 1),
                        p--) : h || (g = !d.nextSibling && u(d.parentNode, D, j),
                        d.parentNode._parent && d.parentNode._parent.appendChild(d),
                        g && d.parentNode.appendChild(X.createTextNode(" ")),
                        "span" === M && (d.style.display = "inline"),
                        H.push(d));
                else
                    d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML ? O.push(d) : q && !d._isSplit && ("span" === M && (d.style.display = "inline"),
                    H.push(d));
            else
                z || G ? (d.parentNode && d.parentNode.removeChild(d),
                a.splice(r--, 1),
                p--) : P || D.appendChild(d);
        for (r = K.length; -1 < --r; )
            K[r].parentNode.removeChild(K[r]);
        if (z) {
            for (G && (c = X.createElement(M),
            D.appendChild(c),
            x = c.offsetWidth + "px",
            g = c.offsetParent === D ? 0 : D.offsetLeft,
            D.removeChild(c)),
            A = D.style.cssText,
            D.style.cssText = "display:none;"; D.firstChild; )
                D.removeChild(D.firstChild);
            for (f = " " === j && (!G || !P && !q),
            r = 0; r < z.length; r++) {
                for (B = z[r],
                (c = X.createElement(M)).style.cssText = "display:block;text-align:" + W + ";position:" + (G ? "absolute;" : "relative;"),
                I && (c.className = I + (J ? r + 1 : "")),
                V.push(c),
                p = B.length,
                l = 0; l < p; l++)
                    "BR" !== B[l].nodeName && (d = B[l],
                    c.appendChild(d),
                    f && d._wordEnd && c.appendChild(X.createTextNode(" ")),
                    G && (0 === l && (c.style.top = d._y + "px",
                    c.style.left = _ + g + "px"),
                    d.style.top = "0px",
                    g && (d.style.left = d._x - g + "px")));
                0 === p ? c.innerHTML = "&nbsp;" : P || q || (v(c),
                s(c, String.fromCharCode(160), " ")),
                G && (c.style.width = x,
                c.style.height = d._h + "px"),
                D.appendChild(c)
            }
            D.style.cssText = A
        }
        G && (E > D.clientHeight && (D.style.height = E - m + "px",
        D.clientHeight < E && (D.style.height = E + S + "px")),
        n > D.clientWidth && (D.style.width = n - N + "px",
        D.clientWidth < n && (D.style.width = n + T + "px"))),
        Q && (U ? D.style.display = U : D.style.removeProperty("display")),
        t(F, H),
        P && t(C, O),
        t(i, V)
    }
    function y(D, u, e, t) {
        var F, C, i, n, E, r, l, d, a = u.tag ? u.tag : u.span ? "span" : "div", h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"), B = o(u), f = u.wordDelimiter || " ", A = " " !== f ? "" : B ? "&#173; " : " ", c = "</" + a + ">", x = 1, g = u.specialChars ? "function" == typeof u.specialChars ? u.specialChars : p : null, y = X.createElement("div"), v = D.parentNode;
        for (v.insertBefore(y, D),
        y.textContent = D.nodeValue,
        v.removeChild(D),
        l = -1 !== (F = function getText(D) {
            var u = D.nodeType
              , e = "";
            if (1 === u || 9 === u || 11 === u) {
                if ("string" == typeof D.textContent)
                    return D.textContent;
                for (D = D.firstChild; D; D = D.nextSibling)
                    e += getText(D)
            } else if (3 === u || 4 === u)
                return D.nodeValue;
            return e
        }(D = y)).indexOf("<"),
        !1 !== u.reduceWhiteSpace && (F = F.replace(S, " ").replace(b, "")),
        l && (F = F.split("<").join("{{LT}}")),
        E = F.length,
        C = (" " === F.charAt(0) ? A : "") + e(),
        i = 0; i < E; i++)
            if (r = F.charAt(i),
            g && (d = g(F.substr(i), u.specialChars)))
                r = F.substr(i, d || 1),
                C += h && " " !== r ? t() + r + "</" + a + ">" : r,
                i += d - 1;
            else if (r === f && F.charAt(i - 1) !== f && i) {
                for (C += x ? c : "",
                x = 0; F.charAt(i + 1) === f; )
                    C += A,
                    i++;
                i === E - 1 ? C += A : ")" !== F.charAt(i + 1) && (C += A + e(),
                x = 1)
            } else
                "{" === r && "{{LT}}" === F.substr(i, 6) ? (C += h ? t() + "{{LT}}</" + a + ">" : "{{LT}}",
                i += 5) : 55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319 || 65024 <= F.charCodeAt(i + 1) && F.charCodeAt(i + 1) <= 65039 ? (n = ((F.substr(i, 12).split(_) || [])[1] || "").length || 2,
                C += h && " " !== r ? t() + F.substr(i, n) + "</" + a + ">" : F.substr(i, n),
                i += n - 1) : C += h && " " !== r ? t() + r + "</" + a + ">" : r;
        D.outerHTML = C + (x ? c : ""),
        l && s(v, "{{LT}}", "<")
    }
    function z(D, u, e, t) {
        var F, C, i = n(D.childNodes), E = i.length, s = o(u);
        if (3 !== D.nodeType || 1 < E) {
            for (u.absolute = !1,
            F = 0; F < E; F++)
                (C = i[F])._next = C._isFirst = C._parent = C._wordEnd = null,
                3 === C.nodeType && !/\S+/.test(C.nodeValue) || (s && 3 !== C.nodeType && "inline" === k(C).display && (C.style.display = "inline-block",
                C.style.position = "relative"),
                C._isSplit = !0,
                z(C, u, e, t));
            return u.absolute = s,
            void (D._isSplit = !0)
        }
        y(D, u, e, t)
    }
    var X, e, F, C, b = /(?:\r|\n|\t\t)/g, S = /(?:\s\s+)/g, i = Array.isArray, E = [].slice, l = ((C = SplitText.prototype).split = function split(D) {
        this.isSplit && this.revert(),
        this.vars = D = D || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var u, e, t, F = this.elements.length, C = D.tag ? D.tag : D.span ? "span" : "div", i = r(D.wordsClass, C), n = r(D.charsClass, C); -1 < --F; )
            t = this.elements[F],
            this._originals[F] = t.innerHTML,
            u = t.clientHeight,
            e = t.clientWidth,
            z(t, D, i, n),
            x(t, D, this.chars, this.words, this.lines, e, u);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    C.revert = function revert() {
        var e = this._originals;
        if (!e)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(D, u) {
            return D.innerHTML = e[u]
        }),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    SplitText.create = function create(D, u) {
        return new SplitText(D,u)
    }
    ,
    SplitText);
    function SplitText(D, u) {
        F || function _initCore() {
            X = document,
            e = window,
            F = 1
        }(),
        this.elements = n(D),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = u || {},
        this.split(u)
    }
    l.version = "3.11.2",
    D.SplitText = l,
    D.default = l;
    if (typeof (window) === "undefined" || window !== D) {
        Object.defineProperty(D, "__esModule", {
            value: !0
        })
    } else {
        delete D.default
    }
});

/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function r() {
        return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we
    }
    function z(e, t) {
        return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t]
    }
    function A(e) {
        return !!~t.indexOf(e)
    }
    function B(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }
    function C(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }
    function F() {
        return Be && Be.isPressed || ze.cache++
    }
    function G(r, n) {
        function Tc(e) {
            if (e || 0 === e) {
                o && (Ce.history.scrollRestoration = "manual");
                var t = Be && Be.isPressed;
                e = Tc.v = Math.round(e) || (Be && Be.iOS ? 1 : 0),
                r(e),
                Tc.cacheID = ze.cache,
                t && i("ss", e)
            } else
                (n || ze.cache !== Tc.cacheID || i("ref")) && (Tc.cacheID = ze.cache,
                Tc.v = r());
            return Tc.v + Tc.offset
        }
        return Tc.offset = 0,
        r && Tc
    }
    function J(e) {
        return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }
    function K(t, e) {
        var r = e.s
          , n = e.sc;
        A(t) && (t = Ee.scrollingElement || ke);
        var o = ze.indexOf(t)
          , i = n === Ke.sc ? 1 : 2;
        ~o || (o = ze.push(t) - 1),
        ze[o + i] || t.addEventListener("scroll", F);
        var a = ze[o + i]
          , s = a || (ze[o + i] = G(z(t, r), !0) || (A(t) ? n : G(function(e) {
            return arguments.length ? t[r] = e : t[r]
        })));
        return s.target = t,
        a || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")),
        s
    }
    function L(e, t, o) {
        function pd(e, t) {
            var r = Ne();
            t || n < r - s ? (a = i,
            i = e,
            l = s,
            s = r) : o ? i += e : i = a + (e - a) / (r - l) * (s - l)
        }
        var i = e
          , a = e
          , s = Ne()
          , l = s
          , n = t || 50
          , c = Math.max(500, 3 * n);
        return {
            update: pd,
            reset: function reset() {
                a = i = o ? 0 : i,
                l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l
                  , r = a
                  , n = Ne();
                return !e && 0 !== e || e === i || pd(e),
                s === l || c < n - l ? 0 : (i + (o ? r : -r)) / ((o ? n : s) - t) * 1e3
            }
        }
    }
    function M(e, t) {
        return t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
    }
    function N(e) {
        var t = Math.max.apply(Math, e)
          , r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }
    function O() {
        (Ae = we.core.globals().ScrollTrigger) && Ae.core && function _integrate() {
            var e = Ae.core
              , r = e.bridge || {}
              , t = e._scrollers
              , n = e._proxies;
            t.push.apply(t, ze),
            n.push.apply(n, Fe),
            ze = t,
            Fe = n,
            i = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }
    function P(e) {
        return (we = e || r()) && "undefined" != typeof document && document.body && (Ce = window,
        ke = (Ee = document).documentElement,
        Me = Ee.body,
        t = [Ce, Ee, ke, Me],
        we.utils.clamp,
        Ie = we.core.context || function() {}
        ,
        Oe = "onpointerenter"in Me ? "pointer" : "mouse",
        Pe = E.isTouch = Ce.matchMedia && Ce.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Ce || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0,
        De = E.eventTypes = ("ontouchstart"in ke ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in ke ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout(function() {
            return o = 0
        }, 500),
        O(),
        Se = 1),
        Se
    }
    var we, Se, Ce, Ee, ke, Me, Pe, Oe, Ae, t, Be, De, Ie, o = 1, Le = [], ze = [], Fe = [], Ne = Date.now, i = function _bridge(e, t) {
        return t
    }, n = "scrollLeft", a = "scrollTop", Xe = {
        s: n,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: G(function(e) {
            return arguments.length ? Ce.scrollTo(e, Ke.sc()) : Ce.pageXOffset || Ee[n] || ke[n] || Me[n] || 0
        })
    }, Ke = {
        s: a,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Xe,
        sc: G(function(e) {
            return arguments.length ? Ce.scrollTo(Xe.sc(), e) : Ce.pageYOffset || Ee[a] || ke[a] || Me[a] || 0
        })
    };
    Xe.op = Ke,
    ze.cache = 0;
    var E = (Observer.prototype.init = function init(e) {
        Se || P(we) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ae || O();
        var o = e.tolerance
          , a = e.dragMinimum
          , t = e.type
          , i = e.target
          , r = e.lineHeight
          , n = e.debounce
          , s = e.preventDefault
          , l = e.onStop
          , c = e.onStopDelay
          , u = e.ignore
          , f = e.wheelSpeed
          , p = e.event
          , d = e.onDragStart
          , g = e.onDragEnd
          , h = e.onDrag
          , v = e.onPress
          , b = e.onRelease
          , m = e.onRight
          , y = e.onLeft
          , x = e.onUp
          , w = e.onDown
          , _ = e.onChangeX
          , T = e.onChangeY
          , S = e.onChange
          , E = e.onToggleX
          , k = e.onToggleY
          , D = e.onHover
          , I = e.onHoverEnd
          , R = e.onMove
          , Y = e.ignoreCheck
          , z = e.isNormalizer
          , X = e.onGestureStart
          , W = e.onGestureEnd
          , H = e.onWheel
          , U = e.onEnable
          , j = e.onDisable
          , q = e.onClick
          , V = e.scrollSpeed
          , G = e.capture
          , Z = e.allowClicks
          , $ = e.lockAxis
          , Q = e.onLockAxis;
        function Qe() {
            return ye = Ne()
        }
        function Re(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || Y && Y(e, t)
        }
        function Te() {
            var e = se.deltaX = N(be)
              , t = se.deltaY = N(me)
              , r = Math.abs(e) >= o
              , n = Math.abs(t) >= o;
            S && (r || n) && S(se, e, t, be, me),
            r && (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            _ && _(se),
            E && se.deltaX < 0 != le < 0 && E(se),
            le = se.deltaX,
            be[0] = be[1] = be[2] = 0),
            n && (w && 0 < se.deltaY && w(se),
            x && se.deltaY < 0 && x(se),
            T && T(se),
            k && se.deltaY < 0 != ce < 0 && k(se),
            ce = se.deltaY,
            me[0] = me[1] = me[2] = 0),
            (ne || re) && (R && R(se),
            re && (h(se),
            re = !1),
            ne = !1),
            ie && !(ie = !1) && Q && Q(se),
            oe && (H(se),
            oe = !1),
            ee = 0
        }
        function Ue(e, t, r) {
            be[r] += e,
            me[r] += t,
            se._vx.update(e),
            se._vy.update(t),
            n ? ee = ee || requestAnimationFrame(Te) : Te()
        }
        function Ve(e, t) {
            $ && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y",
            ie = !0),
            "y" !== ae && (be[2] += e,
            se._vx.update(e, !0)),
            "x" !== ae && (me[2] += t,
            se._vy.update(t, !0)),
            n ? ee = ee || requestAnimationFrame(Te) : Te()
        }
        function We(e) {
            if (!Re(e, 1)) {
                var t = (e = M(e, s)).clientX
                  , r = e.clientY
                  , n = t - se.x
                  , o = r - se.y
                  , i = se.isDragging;
                se.x = t,
                se.y = r,
                (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0),
                i || (se.isDragging = !0),
                Ve(n, o),
                i || d && d(se))
            }
        }
        function Ye(t) {
            if (!Re(t, 1)) {
                C(z ? i : ve, De[1], We, !0);
                var e = !isNaN(se.y - se.startY)
                  , r = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY))
                  , n = M(t);
                !r && e && (se._vx.reset(),
                se._vy.reset(),
                s && Z && we.delayedCall(.08, function() {
                    if (300 < Ne() - ye && !t.defaultPrevented)
                        if (t.target.click)
                            t.target.click();
                        else if (ve.createEvent) {
                            var e = ve.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, Ce, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                            t.target.dispatchEvent(e)
                        }
                })),
                se.isDragging = se.isGesturing = se.isPressed = !1,
                l && !z && te.restart(!0),
                g && r && g(se),
                b && b(se, r)
            }
        }
        function Ze(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && X(e, se.isDragging)
        }
        function $e() {
            return (se.isGesturing = !1) || W(se)
        }
        function _e(e) {
            if (!Re(e)) {
                var t = ue()
                  , r = fe();
                Ue((t - pe) * V, (r - de) * V, 1),
                pe = t,
                de = r,
                l && te.restart(!0)
            }
        }
        function af(e) {
            if (!Re(e)) {
                e = M(e, s),
                H && (oe = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Ce.innerHeight : 1) * f;
                Ue(e.deltaX * t, e.deltaY * t, 0),
                l && !z && te.restart(!0)
            }
        }
        function bf(e) {
            if (!Re(e)) {
                var t = e.clientX
                  , r = e.clientY
                  , n = t - se.x
                  , o = r - se.y;
                se.x = t,
                se.y = r,
                ne = !0,
                (n || o) && Ve(n, o)
            }
        }
        function cf(e) {
            se.event = e,
            D(se)
        }
        function df(e) {
            se.event = e,
            I(se)
        }
        function ef(e) {
            return Re(e) || M(e, s) && q(se)
        }
        this.target = i = J(i) || ke,
        this.vars = e,
        u = u && we.utils.toArray(u),
        o = o || 1e-9,
        a = a || 0,
        f = f || 1,
        V = V || 1,
        t = t || "wheel,touch,pointer",
        n = !1 !== n,
        r = r || parseFloat(Ce.getComputedStyle(Me).lineHeight) || 22;
        var ee, te, re, ne, oe, ie, ae, se = this, le = 0, ce = 0, ue = K(i, Xe), fe = K(i, Ke), pe = ue(), de = fe(), ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === De[0], he = A(i), ve = i.ownerDocument || Ee, be = [0, 0, 0], me = [0, 0, 0], ye = 0, xe = se.onPress = function(e) {
            Re(e, 1) || (se.axis = ae = null,
            te.pause(),
            se.isPressed = !0,
            e = M(e),
            le = ce = 0,
            se.startX = se.x = e.clientX,
            se.startY = se.y = e.clientY,
            se._vx.reset(),
            se._vy.reset(),
            B(z ? i : ve, De[1], We, s, !0),
            se.deltaX = se.deltaY = 0,
            v && v(se))
        }
        ;
        te = se._dc = we.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(),
            se._vy.reset(),
            te.pause(),
            l && l(se)
        }).pause(),
        se.deltaX = se.deltaY = 0,
        se._vx = L(0, 50, !0),
        se._vy = L(0, 50, !0),
        se.scrollX = ue,
        se.scrollY = fe,
        se.isDragging = se.isGesturing = se.isPressed = !1,
        Ie(this),
        se.enable = function(e) {
            return se.isEnabled || (B(he ? ve : i, "scroll", F),
            0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", _e, s, G),
            0 <= t.indexOf("wheel") && B(i, "wheel", af, s, G),
            (0 <= t.indexOf("touch") && Pe || 0 <= t.indexOf("pointer")) && (B(i, De[0], xe, s, G),
            B(ve, De[2], Ye),
            B(ve, De[3], Ye),
            Z && B(i, "click", Qe, !1, !0),
            q && B(i, "click", ef),
            X && B(ve, "gesturestart", Ze),
            W && B(ve, "gestureend", $e),
            D && B(i, Oe + "enter", cf),
            I && B(i, Oe + "leave", df),
            R && B(i, Oe + "move", bf)),
            se.isEnabled = !0,
            e && e.type && xe(e),
            U && U(se)),
            se
        }
        ,
        se.disable = function() {
            se.isEnabled && (Le.filter(function(e) {
                return e !== se && A(e.target)
            }).length || C(he ? ve : i, "scroll", F),
            se.isPressed && (se._vx.reset(),
            se._vy.reset(),
            C(z ? i : ve, De[1], We, !0)),
            C(he ? ve : i, "scroll", _e, G),
            C(i, "wheel", af, G),
            C(i, De[0], xe, G),
            C(ve, De[2], Ye),
            C(ve, De[3], Ye),
            C(i, "click", Qe, !0),
            C(i, "click", ef),
            C(ve, "gesturestart", Ze),
            C(ve, "gestureend", $e),
            C(i, Oe + "enter", cf),
            C(i, Oe + "leave", df),
            C(i, Oe + "move", bf),
            se.isEnabled = se.isPressed = se.isDragging = !1,
            j && j(se))
        }
        ,
        se.kill = se.revert = function() {
            se.disable();
            var e = Le.indexOf(se);
            0 <= e && Le.splice(e, 1),
            Be === se && (Be = 0)
        }
        ,
        Le.push(se),
        z && A(i) && (Be = se),
        se.enable(p)
    }
    ,
    function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t),
        r && _defineProperties(e, r),
        e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]),
    Observer);
    function Observer(e) {
        this.init(e)
    }
    E.version = "3.11.4",
    E.create = function(e) {
        return new E(e)
    }
    ,
    E.register = P,
    E.getAll = function() {
        return Le.slice()
    }
    ,
    E.getById = function(t) {
        return Le.filter(function(e) {
            return e.vars.id === t
        })[0]
    }
    ,
    r() && we.registerPlugin(E);
    function ya() {
        return ot = 1
    }
    function za() {
        return ot = 0
    }
    function Aa(e) {
        return e
    }
    function Ba(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }
    function Ca() {
        return "undefined" != typeof window
    }
    function Da() {
        return He || Ca() && (He = window.gsap) && He.registerPlugin && He
    }
    function Ea(e) {
        return !!~l.indexOf(e)
    }
    function Fa(e) {
        return z(e, "getBoundingClientRect") || (Ea(e) ? function() {
            return Yt.width = Je.innerWidth,
            Yt.height = Je.innerHeight,
            Yt
        }
        : function() {
            return Mt(e)
        }
        )
    }
    function Ia(e, t) {
        var r = t.s
          , n = t.d2
          , o = t.d
          , i = t.a;
        return (r = "scroll" + n) && (i = z(e, r)) ? i() - Fa(e)()[o] : Ea(e) ? (qe[r] || Ge[r]) - (Je["inner" + n] || qe["client" + n] || Ge["client" + n]) : e[r] - e["offset" + n]
    }
    function Ja(e, t) {
        for (var r = 0; r < g.length; r += 3)
            t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2])
    }
    function Ka(e) {
        return "string" == typeof e
    }
    function La(e) {
        return "function" == typeof e
    }
    function Ma(e) {
        return "number" == typeof e
    }
    function Na(e) {
        return "object" == typeof e
    }
    function Oa(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }
    function Pa(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }
    function eb(e) {
        return Je.getComputedStyle(e)
    }
    function gb(e, t) {
        for (var r in t)
            r in e || (e[r] = t[r]);
        return e
    }
    function ib(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }
    function jb(e) {
        var t, r = [], n = e.labels, o = e.duration();
        for (t in n)
            r.push(n[t] / o);
        return r
    }
    function lb(o) {
        var i = He.utils.snap(o)
          , a = Array.isArray(o) && o.slice(0).sort(function(e, t) {
            return e - t
        });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001),
            !t)
                return i(e);
            if (0 < t) {
                for (e -= r,
                n = 0; n < a.length; n++)
                    if (a[n] >= e)
                        return a[n];
                return a[n - 1]
            }
            for (n = a.length,
            e += r; n--; )
                if (a[n] <= e)
                    return a[n];
            return a[0]
        }
        : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = i(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o)
        }
    }
    function nb(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }
    function ob(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }
    function pb(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }
    function qb(e, t, r) {
        return r && r.wheelHandler && e(t, "wheel", r)
    }
    function ub(e, t) {
        if (Ka(e)) {
            var r = e.indexOf("=")
              , n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100),
            e = e.substr(0, r - 1)),
            e = n + (e in I ? I[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }
    function vb(e, t, r, n, o, i, a, s) {
        var l = o.startColor
          , c = o.endColor
          , u = o.fontSize
          , f = o.indent
          , p = o.fontWeight
          , d = je.createElement("div")
          , g = Ea(r) || "fixed" === z(r, "pinType")
          , h = -1 !== e.indexOf("scroller")
          , v = g ? Ge : r
          , b = -1 !== e.indexOf("start")
          , m = b ? l : c
          , y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"),
        !h && !s && g || (y += (n === Ke ? T : S) + ":" + (i + parseFloat(f)) + "px;"),
        a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
        d._isStart = b,
        d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        d.style.cssText = y,
        d.innerText = t || 0 === t ? e + "-" + t : e,
        v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d),
        d._offset = d["offset" + n.op.d2],
        R(d, 0, n, b),
        d
    }
    function Ab() {
        return 34 < gt() - ht && (w = w || requestAnimationFrame(j))
    }
    function Bb() {
        v && v.isPressed && !(v.startX > Ge.clientWidth) || (ze.cache++,
        v ? w = w || requestAnimationFrame(j) : j(),
        ht || W("scrollStart"),
        ht = gt())
    }
    function Cb() {
        y = Je.innerWidth,
        m = Je.innerHeight
    }
    function Db() {
        ze.cache++,
        nt || h || je.fullscreenElement || je.webkitFullscreenElement || b && y === Je.innerWidth && !(Math.abs(Je.innerHeight - m) > .25 * Je.innerHeight) || c.restart(!0)
    }
    function Gb() {
        return pb(Q, "scrollEnd", Gb) || It(!0)
    }
    function Jb(e) {
        for (var t = 0; t < H.length; t += 5)
            (!e || H[t + 4] && H[t + 4].query === e) && (H[t].style.cssText = H[t + 1],
            H[t].getBBox && H[t].setAttribute("transform", H[t + 2] || ""),
            H[t + 3].uncache = 1)
    }
    function Kb(e, t) {
        var r;
        for (it = 0; it < At.length; it++)
            !(r = At[it]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        t && Jb(t),
        t || W("revert")
    }
    function Lb(e, t) {
        ze.cache++,
        !t && ut || ze.forEach(function(e) {
            return La(e) && e.cacheID++ && (e.rec = 0)
        }),
        Ka(e) && (Je.history.scrollRestoration = x = e)
    }
    function Yb(e, t, r, n) {
        if (!e._gsap.swappedIn) {
            for (var o, i = q.length, a = t.style, s = e.style; i--; )
                a[o = q[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative",
            "inline" === r.display && (a.display = "inline-block"),
            s[S] = s[T] = "auto",
            a.flexBasis = r.flexBasis || "auto",
            a.overflow = "visible",
            a.boxSizing = "border-box",
            a[mt] = ib(e, Xe) + kt,
            a[yt] = ib(e, Ke) + kt,
            a[St] = s[Ct] = s.top = s.left = "0",
            Rt(n),
            s[mt] = s.maxWidth = r[mt],
            s[yt] = s.maxHeight = r[yt],
            s[St] = r[St],
            e.parentNode !== t && (e.parentNode.insertBefore(t, e),
            t.appendChild(e)),
            e._gsap.swappedIn = !0
        }
    }
    function _b(e) {
        for (var t = V.length, r = e.style, n = [], o = 0; o < t; o++)
            n.push(V[o], r[V[o]]);
        return n.t = e,
        n
    }
    function cc(e, t, r, n, o, i, a, s, l, c, u, f, p) {
        La(e) && (e = e(s)),
        Ka(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? ub("0" + e.substr(3), r) : 0));
        var d, g, h, v = p ? p.time() : 0;
        if (p && p.seek(0),
        Ma(e))
            a && R(a, r, n, !0);
        else {
            La(t) && (t = t(s));
            var b, m, y, x, w = (e || "0").split(" ");
            h = J(t) || Ge,
            (b = Mt(h) || {}) && (b.left || b.top) || "none" !== eb(h).display || (x = h.style.display,
            h.style.display = "block",
            b = Mt(h),
            x ? h.style.display = x : h.style.removeProperty("display")),
            m = ub(w[0], b[n.d]),
            y = ub(w[1] || "0", r),
            e = b[n.p] - l[n.p] - c + m + o - y,
            a && R(a, y, n, r - y < 20 || a._isStart && 20 < y),
            r -= r - y
        }
        if (i) {
            var _ = e + r
              , T = i._isStart;
            d = "scroll" + n.d2,
            R(i, _, n, T && 20 < _ || !T && (u ? Math.max(Ge[d], qe[d]) : i.parentNode[d]) <= _ + 1),
            u && (l = Mt(a),
            u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + kt))
        }
        return p && h && (d = Mt(h),
        p.seek(f),
        g = Mt(h),
        p._caScrollDist = d[n.p] - g[n.p],
        e = e / p._caScrollDist * f),
        p && p.seek(v),
        p ? e : Math.round(e)
    }
    function ec(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === Ge) {
                for (o in e._stOrig = a.cssText,
                i = eb(e))
                    +o || $.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r,
                a.left = n
            } else
                a.cssText = e._stOrig;
            He.core.getCache(e).uncache = 1,
            t.appendChild(e)
        }
    }
    function fc(l, e) {
        function Uj(e, t, r, n, o) {
            var i = Uj.tween
              , a = t.onComplete
              , s = {};
            return r = r || f(),
            o = n && o || 0,
            n = n || e - r,
            i && i.kill(),
            c = Math.round(r),
            t[p] = e,
            (t.modifiers = s)[p] = function(e) {
                return (e = Math.round(f())) !== c && e !== u && 3 < Math.abs(e - c) && 3 < Math.abs(e - u) ? (i.kill(),
                Uj.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio,
                u = c,
                c = Math.round(e)
            }
            ,
            t.onUpdate = function() {
                ze.cache++,
                j()
            }
            ,
            t.onComplete = function() {
                Uj.tween = 0,
                a && a.call(i)
            }
            ,
            i = Uj.tween = He.to(l, t)
        }
        var c, u, f = K(l, e), p = "_scroll" + e.p2;
        return (l[p] = f).wheelHandler = function() {
            return Uj.tween && Uj.tween.kill() && (Uj.tween = 0)
        }
        ,
        ob(l, "wheel", f.wheelHandler),
        Uj
    }
    var He, s, Je, je, qe, Ge, l, c, et, tt, rt, u, nt, ot, f, it, p, d, g, at, st, h, v, b, m, y, k, lt, x, ct, w, ut, ft, pt, dt = 1, gt = Date.now, _ = gt(), ht = 0, vt = 0, bt = Math.abs, T = "right", S = "bottom", mt = "width", yt = "height", xt = "Right", wt = "Left", _t = "Top", Tt = "Bottom", St = "padding", Ct = "margin", Et = "Width", D = "Height", kt = "px", Mt = function _getBounds(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== eb(e)[f] && He.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , n = e.getBoundingClientRect();
        return r && r.progress(0).kill(),
        n
    }, Pt = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, Ot = {
        toggleActions: "play",
        anticipatePin: 0
    }, I = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, R = function _positionMarker(e, t, r, n) {
        var o = {
            display: "block"
        }
          , i = r[n ? "os2" : "p2"]
          , a = r[n ? "p2" : "os2"];
        e._isFlipped = n,
        o[r.a + "Percent"] = n ? -100 : 0,
        o[r.a] = n ? "1px" : 0,
        o["border" + i + Et] = 1,
        o["border" + a + Et] = 0,
        o[r.p] = t + "px",
        He.set(e, o)
    }, At = [], Bt = {}, Y = {}, X = [], W = function _dispatch(e) {
        return Y[e] && Y[e].map(function(e) {
            return e()
        }) || X
    }, H = [], Dt = 0, It = function _refreshAll(e, t) {
        if (!ht || e) {
            ut = Q.isRefreshing = !0,
            ze.forEach(function(e) {
                return La(e) && e.cacheID++ && (e.rec = e())
            });
            var r = W("refreshInit");
            at && Q.sort(),
            t || Kb(),
            ze.forEach(function(e) {
                La(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"),
                e(0))
            }),
            At.slice(0).forEach(function(e) {
                return e.refresh()
            }),
            At.forEach(function(e, t) {
                if (e._subPinOffset && e.pin) {
                    var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight"
                      , n = e.pin[r];
                    e.revert(!0, 1),
                    e.adjustPinSpacing(e.pin[r] - n),
                    e.revert(!1, 1)
                }
            }),
            At.forEach(function(e) {
                return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Ia(e.scroller, e._dir)))
            }),
            r.forEach(function(e) {
                return e && e.render && e.render(-1)
            }),
            ze.forEach(function(e) {
                La(e) && (e.smooth && requestAnimationFrame(function() {
                    return e.target.style.scrollBehavior = "smooth"
                }),
                e.rec && e(e.rec))
            }),
            Lb(x, 1),
            c.pause(),
            Dt++,
            j(2),
            At.forEach(function(e) {
                return La(e.vars.onRefresh) && e.vars.onRefresh(e)
            }),
            ut = Q.isRefreshing = !1,
            W("refresh")
        } else
            ob(Q, "scrollEnd", Gb)
    }, U = 0, Lt = 1, j = function _updateAll(e) {
        if (!ut || 2 === e) {
            Q.isUpdating = !0,
            pt && pt.update(0);
            var t = At.length
              , r = gt()
              , n = 50 <= r - _
              , o = t && At[0].scroll();
            if (Lt = o < U ? -1 : 1,
            U = o,
            n && (ht && !ot && 200 < r - ht && (ht = 0,
            W("scrollEnd")),
            rt = _,
            _ = r),
            Lt < 0) {
                for (it = t; 0 < it--; )
                    At[it] && At[it].update(0, n);
                Lt = 1
            } else
                for (it = 0; it < t; it++)
                    At[it] && At[it].update(0, n);
            Q.isUpdating = !1
        }
        w = 0
    }, q = ["left", "top", S, T, Ct + Tt, Ct + xt, Ct + _t, Ct + wt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], V = q.concat([mt, yt, "boxSizing", "max" + Et, "max" + D, "position", Ct, St, St + _t, St + xt, St + Tt, St + wt]), Z = /([A-Z])/g, Rt = function _setState(e) {
        if (e) {
            var t, r, n = e.t.style, o = e.length, i = 0;
            for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; i < o; i += 2)
                r = e[i + 1],
                t = e[i],
                r ? n[t] = r : n[t] && n.removeProperty(t.replace(Z, "-$1").toLowerCase())
        }
    }, Yt = {
        left: 0,
        top: 0
    }, $ = /(webkit|moz|length|cssText|inset)/i, Q = (ScrollTrigger.prototype.init = function init(S, C) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        vt) {
            var E, n, d, k, M, P, O, A, B, D, I, e, L, R, Y, F, N, t, X, b, W, H, m, U, y, j, x, r, w, _, q, o, g, V, G, Z, $, T, i, Q = (S = gb(Ka(S) || Ma(S) || S.nodeType ? {
                trigger: S
            } : S, Ot)).onUpdate, ee = S.toggleClass, a = S.id, te = S.onToggle, re = S.onRefresh, ne = S.scrub, oe = S.trigger, ie = S.pin, ae = S.pinSpacing, se = S.invalidateOnRefresh, le = S.anticipatePin, s = S.onScrubComplete, h = S.onSnapComplete, ce = S.once, ue = S.snap, fe = S.pinReparent, l = S.pinSpacer, pe = S.containerAnimation, de = S.fastScrollEnd, ge = S.preventOverlaps, he = S.horizontal || S.containerAnimation && !1 !== S.horizontal ? Xe : Ke, ve = !ne && 0 !== ne, be = J(S.scroller || Je), c = He.core.getCache(be), me = Ea(be), ye = "fixed" === ("pinType"in S ? S.pinType : z(be, "pinType") || me && "fixed"), xe = [S.onEnter, S.onLeave, S.onEnterBack, S.onLeaveBack], we = ve && S.toggleActions.split(" "), u = "markers"in S ? S.markers : Ot.markers, _e = me ? 0 : parseFloat(eb(be)["border" + he.p2 + Et]) || 0, Te = this, Se = S.onRefreshInit && function() {
                return S.onRefreshInit(Te)
            }
            , Ce = function _getSizeFunc(e, t, r) {
                var n = r.d
                  , o = r.d2
                  , i = r.a;
                return (i = z(e, "getBoundingClientRect")) ? function() {
                    return i()[n]
                }
                : function() {
                    return (t ? Je["inner" + o] : e["client" + o]) || 0
                }
            }(be, me, he), Ee = function _getOffsetsFunc(e, t) {
                return !t || ~Fe.indexOf(e) ? Fa(e) : function() {
                    return Yt
                }
            }(be, me), ke = 0, Me = 0, Pe = K(be, he);
            if (lt(Te),
            Te._dir = he,
            le *= 45,
            Te.scroller = be,
            Te.scroll = pe ? pe.time.bind(pe) : Pe,
            k = Pe(),
            Te.vars = S,
            C = C || S.animation,
            "refreshPriority"in S && (at = 1,
            -9999 === S.refreshPriority && (pt = Te)),
            c.tweenScroll = c.tweenScroll || {
                top: fc(be, Ke),
                left: fc(be, Xe)
            },
            Te.tweenTo = E = c.tweenScroll[he.p],
            Te.scrubDuration = function(e) {
                (o = Ma(e) && e) ? q ? q.duration(e) : q = He.to(C, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: o,
                    paused: !0,
                    onComplete: function onComplete() {
                        return s && s(Te)
                    }
                }) : (q && q.progress(1).kill(),
                q = 0)
            }
            ,
            C && (C.vars.lazy = !1,
            C._initted || !1 !== C.vars.immediateRender && !1 !== S.immediateRender && C.duration() && C.render(0, !0, !0),
            Te.animation = C.pause(),
            (C.scrollTrigger = Te).scrubDuration(ne),
            w = 0,
            a = a || C.vars.id),
            At.push(Te),
            ue && (Na(ue) && !ue.push || (ue = {
                snapTo: ue
            }),
            "scrollBehavior"in Ge.style && He.set(me ? [Ge, qe] : be, {
                scrollBehavior: "auto"
            }),
            ze.forEach(function(e) {
                return La(e) && e.target === (me ? je.scrollingElement || qe : be) && (e.smooth = !1)
            }),
            d = La(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
                return function(e) {
                    return He.utils.snap(jb(t), e)
                }
            }(C) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
                return function(e, t) {
                    return lb(jb(r))(e, t.direction)
                }
            }(C) : !1 !== ue.directional ? function(e, t) {
                return lb(ue.snapTo)(e, gt() - Me < 500 ? 0 : t.direction)
            }
            : He.utils.snap(ue.snapTo),
            g = ue.duration || {
                min: .1,
                max: 2
            },
            g = Na(g) ? tt(g.min, g.max) : tt(g, g),
            V = He.delayedCall(ue.delay || o / 2 || .1, function() {
                var e = Pe()
                  , t = gt() - Me < 500
                  , r = E.tween;
                if (!(t || Math.abs(Te.getVelocity()) < 10) || r || ot || ke === e)
                    Te.isActive && ke !== e && V.restart(!0);
                else {
                    var n = (e - P) / L
                      , o = C && !ve ? C.totalProgress() : n
                      , i = t ? 0 : (o - _) / (gt() - rt) * 1e3 || 0
                      , a = He.utils.clamp(-n, 1 - n, bt(i / 2) * i / .185)
                      , s = n + (!1 === ue.inertia ? 0 : a)
                      , l = tt(0, 1, d(s, Te))
                      , c = Math.round(P + l * L)
                      , u = ue.onStart
                      , f = ue.onInterrupt
                      , p = ue.onComplete;
                    if (e <= O && P <= e && c !== e) {
                        if (r && !r._initted && r.data <= bt(c - e))
                            return;
                        !1 === ue.inertia && (a = l - n),
                        E(c, {
                            duration: g(bt(.185 * Math.max(bt(s - o), bt(l - o)) / i / .05 || 0)),
                            ease: ue.ease || "power3",
                            data: bt(c - e),
                            onInterrupt: function onInterrupt() {
                                return V.restart(!0) && f && f(Te)
                            },
                            onComplete: function onComplete() {
                                Te.update(),
                                ke = Pe(),
                                w = _ = C && !ve ? C.totalProgress() : Te.progress,
                                h && h(Te),
                                p && p(Te)
                            }
                        }, e, a * L, c - e - a * L),
                        u && u(Te, E.tween)
                    }
                }
            }).pause()),
            a && (Bt[a] = Te),
            i = (i = (oe = Te.trigger = J(oe || ie)) && oe._gsap && oe._gsap.stRevert) && i(Te),
            ie = !0 === ie ? oe : J(ie),
            Ka(ee) && (ee = {
                targets: oe,
                className: ee
            }),
            ie && (!1 === ae || ae === Ct || (ae = !(!ae && ie.parentNode && ie.parentNode.style && "flex" === eb(ie.parentNode).display) && St),
            Te.pin = ie,
            (n = He.core.getCache(ie)).spacer ? R = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement),
            n.spacerIsNative = !!l,
            l && (n.spacerState = _b(l))),
            n.spacer = N = l || je.createElement("div"),
            N.classList.add("pin-spacer"),
            a && N.classList.add("pin-spacer-" + a),
            n.pinState = R = _b(ie)),
            !1 !== S.force3D && He.set(ie, {
                force3D: !0
            }),
            Te.spacer = N = n.spacer,
            r = eb(ie),
            m = r[ae + he.os2],
            X = He.getProperty(ie),
            b = He.quickSetter(ie, he.a, kt),
            Yb(ie, N, r),
            F = _b(ie)),
            u) {
                e = Na(u) ? gb(u, Pt) : Pt,
                D = vb("scroller-start", a, be, he, e, 0),
                I = vb("scroller-end", a, be, he, e, 0, D),
                t = D["offset" + he.op.d2];
                var f = J(z(be, "content") || be);
                A = this.markerStart = vb("start", a, f, he, e, t, 0, pe),
                B = this.markerEnd = vb("end", a, f, he, e, t, 0, pe),
                pe && (T = He.quickSetter([A, B], he.a, kt)),
                ye || Fe.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
                    var t = eb(e).position;
                    e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                }(me ? Ge : be),
                He.set([D, I], {
                    force3D: !0
                }),
                y = He.quickSetter(D, he.a, kt),
                x = He.quickSetter(I, he.a, kt))
            }
            if (pe) {
                var p = pe.vars.onUpdate
                  , v = pe.vars.onUpdateParams;
                pe.eventCallback("onUpdate", function() {
                    Te.update(0, 0, 1),
                    p && p.apply(v || [])
                })
            }
            Te.previous = function() {
                return At[At.indexOf(Te) - 1]
            }
            ,
            Te.next = function() {
                return At[At.indexOf(Te) + 1]
            }
            ,
            Te.revert = function(e, t) {
                if (!t)
                    return Te.kill(!0);
                var r = !1 !== e || !Te.enabled
                  , n = nt;
                r !== Te.isReverted && (r && (Z = Math.max(Pe(), Te.scroll.rec || 0),
                G = Te.progress,
                $ = C && C.progress()),
                A && [A, B, D, I].forEach(function(e) {
                    return e.style.display = r ? "none" : "block"
                }),
                r && (nt = 1,
                Te.update(r)),
                !ie || fe && Te.isActive || (r ? function _swapPinOut(e, t, r) {
                    Rt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative)
                        Rt(n.spacerState);
                    else if (e._gsap.swappedIn) {
                        var o = t.parentNode;
                        o && (o.insertBefore(e, t),
                        o.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                }(ie, N, R) : Yb(ie, N, eb(ie), U)),
                r || Te.update(r),
                nt = n,
                Te.isReverted = r)
            }
            ,
            Te.refresh = function(e, t) {
                if (!nt && Te.enabled || t)
                    if (ie && e && ht)
                        ob(ScrollTrigger, "scrollEnd", Gb);
                    else {
                        !ut && Se && Se(Te),
                        nt = 1,
                        Me = gt(),
                        E.tween && (E.tween.kill(),
                        E.tween = 0),
                        q && q.pause(),
                        se && C && C.revert({
                            kill: !1
                        }).invalidate(),
                        Te.isReverted || Te.revert(!0, !0),
                        Te._subPinOffset = !1;
                        for (var r, n, o, i, a, s, l, c, u, f, p, d = Ce(), g = Ee(), h = pe ? pe.duration() : Ia(be, he), v = 0, b = 0, m = S.end, y = S.endTrigger || oe, x = S.start || (0 !== S.start && oe ? ie ? "0 0" : "0 100%" : 0), w = Te.pinnedContainer = S.pinnedContainer && J(S.pinnedContainer), _ = oe && Math.max(0, At.indexOf(Te)) || 0, T = _; T--; )
                            (s = At[T]).end || s.refresh(0, 1) || (nt = 1),
                            !(l = s.pin) || l !== oe && l !== ie || s.isReverted || ((f = f || []).unshift(s),
                            s.revert(!0, !0)),
                            s !== At[T] && (_--,
                            T--);
                        for (La(x) && (x = x(Te)),
                        P = cc(x, oe, d, he, Pe(), A, D, Te, g, _e, ye, h, pe) || (ie ? -.001 : 0),
                        La(m) && (m = m(Te)),
                        Ka(m) && !m.indexOf("+=") && (~m.indexOf(" ") ? m = (Ka(x) ? x.split(" ")[0] : "") + m : (v = ub(m.substr(2), d),
                        m = Ka(x) ? x : P + v,
                        y = oe)),
                        O = Math.max(P, cc(m || (y ? "100% 0" : h), y, d, he, Pe() + v, B, I, Te, g, _e, ye, h, pe)) || -.001,
                        L = O - P || (P -= .01) && .001,
                        v = 0,
                        T = _; T--; )
                            (l = (s = At[T]).pin) && s.start - s._pinPush <= P && !pe && 0 < s.end && (r = s.end - s.start,
                            (l === oe && s.start - s._pinPush < P || l === w) && !Ma(x) && (v += r * (1 - s.progress)),
                            l === ie && (b += r));
                        if (P += v,
                        O += v,
                        Te._pinPush = b,
                        A && v && ((r = {})[he.a] = "+=" + v,
                        w && (r[he.p] = "-=" + Pe()),
                        He.set([A, B], r)),
                        ie)
                            r = eb(ie),
                            i = he === Ke,
                            o = Pe(),
                            W = parseFloat(X(he.a)) + b,
                            !h && 1 < O && ((p = {
                                style: p = (me ? je.scrollingElement || qe : be).style,
                                value: p["overflow" + he.a.toUpperCase()]
                            })["overflow" + he.a.toUpperCase()] = "scroll"),
                            Yb(ie, N, r),
                            F = _b(ie),
                            n = Mt(ie, !0),
                            c = ye && K(be, i ? Xe : Ke)(),
                            ae && ((U = [ae + he.os2, L + b + kt]).t = N,
                            (T = ae === St ? ib(ie, he) + L + b : 0) && U.push(he.d, T + kt),
                            Rt(U),
                            w && At.forEach(function(e) {
                                e.pin === w && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                            }),
                            ye && Pe(Z)),
                            ye && ((a = {
                                top: n.top + (i ? o - P : c) + kt,
                                left: n.left + (i ? c : o - P) + kt,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[mt] = a.maxWidth = Math.ceil(n.width) + kt,
                            a[yt] = a.maxHeight = Math.ceil(n.height) + kt,
                            a[Ct] = a[Ct + _t] = a[Ct + xt] = a[Ct + Tt] = a[Ct + wt] = "0",
                            a[St] = r[St],
                            a[St + _t] = r[St + _t],
                            a[St + xt] = r[St + xt],
                            a[St + Tt] = r[St + Tt],
                            a[St + wt] = r[St + wt],
                            Y = function _copyState(e, t, r) {
                                for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2)
                                    n = e[a],
                                    o.push(n, n in t ? t[n] : e[a + 1]);
                                return o.t = e.t,
                                o
                            }(R, a, fe),
                            ut && Pe(0)),
                            C ? (u = C._initted,
                            st(1),
                            C.render(C.duration(), !0, !0),
                            H = X(he.a) - W + L + b,
                            j = 1 < Math.abs(L - H),
                            ye && j && Y.splice(Y.length - 2, 2),
                            C.render(0, !0, !0),
                            u || C.invalidate(!0),
                            C.parent || C.totalTime(C.totalTime()),
                            st(0)) : H = L,
                            p && (p.value ? p.style["overflow" + he.a.toUpperCase()] = p.value : p.style.removeProperty("overflow-" + he.a));
                        else if (oe && Pe() && !pe)
                            for (n = oe.parentNode; n && n !== Ge; )
                                n._pinOffset && (P -= n._pinOffset,
                                O -= n._pinOffset),
                                n = n.parentNode;
                        f && f.forEach(function(e) {
                            return e.revert(!1, !0)
                        }),
                        Te.start = P,
                        Te.end = O,
                        k = M = ut ? Z : Pe(),
                        pe || ut || (k < Z && Pe(Z),
                        Te.scroll.rec = 0),
                        Te.revert(!1, !0),
                        V && (ke = -1,
                        Te.isActive && Pe(P + L * G),
                        V.restart(!0)),
                        nt = 0,
                        C && ve && (C._initted || $) && C.progress() !== $ && C.progress($, !0).render(C.time(), !0, !0),
                        G === Te.progress && !pe || (C && !ve && C.totalProgress(G, !0),
                        Te.progress = (k - P) / L === G ? 0 : G),
                        ie && ae && (N._pinOffset = Math.round(Te.progress * H)),
                        re && !ut && re(Te)
                    }
            }
            ,
            Te.getVelocity = function() {
                return (Pe() - M) / (gt() - rt) * 1e3 || 0
            }
            ,
            Te.endAnimation = function() {
                Oa(Te.callbackAnimation),
                C && (q ? q.progress(1) : C.paused() ? ve || Oa(C, Te.direction < 0, 1) : Oa(C, C.reversed()))
            }
            ,
            Te.labelToScroll = function(e) {
                return C && C.labels && (P || Te.refresh() || P) + C.labels[e] / C.duration() * L || 0
            }
            ,
            Te.getTrailing = function(t) {
                var e = At.indexOf(Te)
                  , r = 0 < Te.direction ? At.slice(0, e).reverse() : At.slice(e + 1);
                return (Ka(t) ? r.filter(function(e) {
                    return e.vars.preventOverlaps === t
                }) : r).filter(function(e) {
                    return 0 < Te.direction ? e.end <= P : e.start >= O
                })
            }
            ,
            Te.update = function(e, t, r) {
                if (!pe || r || e) {
                    var n, o, i, a, s, l, c, u = ut ? Z : Te.scroll(), f = e ? 0 : (u - P) / L, p = f < 0 ? 0 : 1 < f ? 1 : f || 0, d = Te.progress;
                    if (t && (M = k,
                    k = pe ? Pe() : u,
                    ue && (_ = w,
                    w = C && !ve ? C.totalProgress() : p)),
                    le && !p && ie && !nt && !dt && ht && P < u + (u - M) / (gt() - rt) * le && (p = 1e-4),
                    p !== d && Te.enabled) {
                        if (a = (s = (n = Te.isActive = !!p && p < 1) != (!!d && d < 1)) || !!p != !!d,
                        Te.direction = d < p ? 1 : -1,
                        Te.progress = p,
                        a && !nt && (o = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3,
                        ve && (i = !s && "none" !== we[o + 1] && we[o + 1] || we[o],
                        c = C && ("complete" === i || "reset" === i || i in C))),
                        ge && (s || c) && (c || ne || !C) && (La(ge) ? ge(Te) : Te.getTrailing(ge).forEach(function(e) {
                            return e.endAnimation()
                        })),
                        ve || (!q || nt || dt ? C && C.totalProgress(p, !!nt) : (q._dp._time - q._start !== q._time && q.render(q._dp._time - q._start),
                        q.resetTo ? q.resetTo("totalProgress", p, C._tTime / C._tDur) : (q.vars.totalProgress = p,
                        q.invalidate().restart()))),
                        ie)
                            if (e && ae && (N.style[ae + he.os2] = m),
                            ye) {
                                if (a) {
                                    if (l = !e && d < p && u < O + 1 && u + 1 >= Ia(be, he),
                                    fe)
                                        if (e || !n && !l)
                                            ec(ie, N);
                                        else {
                                            var g = Mt(ie, !0)
                                              , h = u - P;
                                            ec(ie, Ge, g.top + (he === Ke ? h : 0) + kt, g.left + (he === Ke ? 0 : h) + kt)
                                        }
                                    Rt(n || l ? Y : F),
                                    j && p < 1 && n || b(W + (1 !== p || l ? 0 : H))
                                }
                            } else
                                b(Ba(W + H * p));
                        !ue || E.tween || nt || dt || V.restart(!0),
                        ee && (s || ce && p && (p < 1 || !ct)) && et(ee.targets).forEach(function(e) {
                            return e.classList[n || ce ? "add" : "remove"](ee.className)
                        }),
                        !Q || ve || e || Q(Te),
                        a && !nt ? (ve && (c && ("complete" === i ? C.pause().totalProgress(1) : "reset" === i ? C.restart(!0).pause() : "restart" === i ? C.restart(!0) : C[i]()),
                        Q && Q(Te)),
                        !s && ct || (te && s && Pa(Te, te),
                        xe[o] && Pa(Te, xe[o]),
                        ce && (1 === p ? Te.kill(!1, 1) : xe[o] = 0),
                        s || xe[o = 1 === p ? 1 : 3] && Pa(Te, xe[o])),
                        de && !n && Math.abs(Te.getVelocity()) > (Ma(de) ? de : 2500) && (Oa(Te.callbackAnimation),
                        q ? q.progress(1) : Oa(C, "reverse" === i ? 1 : !p, 1))) : ve && Q && !nt && Q(Te)
                    }
                    if (x) {
                        var v = pe ? u / pe.duration() * (pe._caScrollDist || 0) : u;
                        y(v + (D._isFlipped ? 1 : 0)),
                        x(v)
                    }
                    T && T(-u / pe.duration() * (pe._caScrollDist || 0))
                }
            }
            ,
            Te.enable = function(e, t) {
                Te.enabled || (Te.enabled = !0,
                ob(be, "resize", Db),
                ob(me ? je : be, "scroll", Bb),
                Se && ob(ScrollTrigger, "refreshInit", Se),
                !1 !== e && (Te.progress = G = 0,
                k = M = ke = Pe()),
                !1 !== t && Te.refresh())
            }
            ,
            Te.getTween = function(e) {
                return e && E ? E.tween : q
            }
            ,
            Te.setPositions = function(e, t) {
                ie && (W += e - P,
                H += t - e - L,
                ae === St && Te.adjustPinSpacing(t - e - L)),
                Te.start = P = e,
                Te.end = O = t,
                L = t - e,
                Te.update()
            }
            ,
            Te.adjustPinSpacing = function(e) {
                if (U) {
                    var t = U.indexOf(he.d) + 1;
                    U[t] = parseFloat(U[t]) + e + kt,
                    U[1] = parseFloat(U[1]) + e + kt,
                    Rt(U)
                }
            }
            ,
            Te.disable = function(e, t) {
                if (Te.enabled && (!1 !== e && Te.revert(!0, !0),
                Te.enabled = Te.isActive = !1,
                t || q && q.pause(),
                Z = 0,
                n && (n.uncache = 1),
                Se && pb(ScrollTrigger, "refreshInit", Se),
                V && (V.pause(),
                E.tween && E.tween.kill() && (E.tween = 0)),
                !me)) {
                    for (var r = At.length; r--; )
                        if (At[r].scroller === be && At[r] !== Te)
                            return;
                    pb(be, "resize", Db),
                    pb(be, "scroll", Bb)
                }
            }
            ,
            Te.kill = function(e, t) {
                Te.disable(e, t),
                q && !t && q.kill(),
                a && delete Bt[a];
                var r = At.indexOf(Te);
                0 <= r && At.splice(r, 1),
                r === it && 0 < Lt && it--,
                r = 0,
                At.forEach(function(e) {
                    return e.scroller === Te.scroller && (r = 1)
                }),
                r || ut || (Te.scroll.rec = 0),
                C && (C.scrollTrigger = null,
                e && C.revert({
                    kill: !1
                }),
                t || C.kill()),
                A && [A, B, D, I].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                }),
                pt === Te && (pt = 0),
                ie && (n && (n.uncache = 1),
                r = 0,
                At.forEach(function(e) {
                    return e.pin === ie && r++
                }),
                r || (n.spacer = 0)),
                S.onKill && S.onKill(Te)
            }
            ,
            Te.enable(!1, !1),
            i && i(Te),
            C && C.add && !L ? He.delayedCall(.01, function() {
                return P || O || Te.refresh()
            }) && (L = .01) && (P = O = 0) : Te.refresh(),
            ie && function _queueRefreshAll() {
                if (ft !== Dt) {
                    var e = ft = Dt;
                    requestAnimationFrame(function() {
                        return e === Dt && It(!0)
                    })
                }
            }()
        } else
            this.update = this.refresh = this.kill = Aa
    }
    ,
    ScrollTrigger.register = function register(e) {
        return s || (He = e || Da(),
        Ca() && window.document && ScrollTrigger.enable(),
        s = vt),
        s
    }
    ,
    ScrollTrigger.defaults = function defaults(e) {
        if (e)
            for (var t in e)
                Ot[t] = e[t];
        return Ot
    }
    ,
    ScrollTrigger.disable = function disable(t, r) {
        vt = 0,
        At.forEach(function(e) {
            return e[r ? "kill" : "disable"](t)
        }),
        pb(Je, "wheel", Bb),
        pb(je, "scroll", Bb),
        clearInterval(u),
        pb(je, "touchcancel", Aa),
        pb(Ge, "touchstart", Aa),
        nb(pb, je, "pointerdown,touchstart,mousedown", ya),
        nb(pb, je, "pointerup,touchend,mouseup", za),
        c.kill(),
        Ja(pb);
        for (var e = 0; e < ze.length; e += 3)
            qb(pb, ze[e], ze[e + 1]),
            qb(pb, ze[e], ze[e + 2])
    }
    ,
    ScrollTrigger.enable = function enable() {
        if (Je = window,
        je = document,
        qe = je.documentElement,
        Ge = je.body,
        He && (et = He.utils.toArray,
        tt = He.utils.clamp,
        lt = He.core.context || Aa,
        st = He.core.suppressOverwrites || Aa,
        x = Je.history.scrollRestoration || "auto",
        He.core.globals("ScrollTrigger", ScrollTrigger),
        Ge)) {
            vt = 1,
            E.register(He),
            ScrollTrigger.isTouch = E.isTouch,
            k = E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            ob(Je, "wheel", Bb),
            l = [Je, je, qe, Ge],
            He.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                var t, r = He.matchMedia();
                for (t in e)
                    r.add(t, e[t]);
                return r
            }
            ,
            He.addEventListener("matchMediaInit", function() {
                return Kb()
            }),
            He.addEventListener("matchMediaRevert", function() {
                return Jb()
            }),
            He.addEventListener("matchMedia", function() {
                It(0, 1),
                W("matchMedia")
            }),
            He.matchMedia("(orientation: portrait)", function() {
                return Cb(),
                Cb
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            Cb(),
            ob(je, "scroll", Bb);
            var e, t, r = Ge.style, n = r.borderTopStyle, o = He.core.Animation.prototype;
            for (o.revert || Object.defineProperty(o, "revert", {
                value: function value() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            e = Mt(Ge),
            Ke.m = Math.round(e.top + Ke.sc()) || 0,
            Xe.m = Math.round(e.left + Xe.sc()) || 0,
            n ? r.borderTopStyle = n : r.removeProperty("border-top-style"),
            u = setInterval(Ab, 250),
            He.delayedCall(.5, function() {
                return dt = 0
            }),
            ob(je, "touchcancel", Aa),
            ob(Ge, "touchstart", Aa),
            nb(ob, je, "pointerdown,touchstart,mousedown", ya),
            nb(ob, je, "pointerup,touchend,mouseup", za),
            f = He.utils.checkPrefix("transform"),
            V.push(f),
            s = gt(),
            c = He.delayedCall(.2, It).pause(),
            g = [je, "visibilitychange", function() {
                var e = Je.innerWidth
                  , t = Je.innerHeight;
                je.hidden ? (p = e,
                d = t) : p === e && d === t || Db()
            }
            , je, "DOMContentLoaded", It, Je, "load", It, Je, "resize", Db],
            Ja(ob),
            At.forEach(function(e) {
                return e.enable(0, 1)
            }),
            t = 0; t < ze.length; t += 3)
                qb(pb, ze[t], ze[t + 1]),
                qb(pb, ze[t], ze[t + 2])
        }
    }
    ,
    ScrollTrigger.config = function config(e) {
        "limitCallbacks"in e && (ct = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(u) || (u = t) && setInterval(Ab, t),
        "ignoreMobileResize"in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
        "autoRefreshEvents"in e && (Ja(pb) || Ja(ob, e.autoRefreshEvents || "none"),
        h = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }
    ,
    ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e)
          , n = ze.indexOf(r)
          , o = Ea(r);
        ~n && ze.splice(n, o ? 6 : 2),
        t && (o ? Fe.unshift(Je, t, Ge, t, qe, t) : Fe.unshift(r, t))
    }
    ,
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        At.forEach(function(e) {
            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
        })
    }
    ,
    ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Ka(e) ? J(e) : e).getBoundingClientRect()
          , o = n[r ? mt : yt] * t || 0;
        return r ? 0 < n.right - o && n.left + o < Je.innerWidth : 0 < n.bottom - o && n.top + o < Je.innerHeight
    }
    ,
    ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Ka(e) && (e = J(e));
        var n = e.getBoundingClientRect()
          , o = n[r ? mt : yt]
          , i = null == t ? o / 2 : t in I ? I[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
        return r ? (n.left + i) / Je.innerWidth : (n.top + i) / Je.innerHeight
    }
    ,
    ScrollTrigger.killAll = function killAll(e) {
        if (At.slice(0).forEach(function(e) {
            return "ScrollSmoother" !== e.vars.id && e.kill()
        }),
        !0 !== e) {
            var t = Y.killAll || [];
            Y = {},
            t.forEach(function(e) {
                return e()
            })
        }
    }
    ,
    ScrollTrigger);
    function ScrollTrigger(e, t) {
        s || ScrollTrigger.register(He) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(e, t)
    }
    Q.version = "3.11.4",
    Q.saveStyles = function(e) {
        return e ? et(e).forEach(function(e) {
            if (e && e.style) {
                var t = H.indexOf(e);
                0 <= t && H.splice(t, 5),
                H.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), He.core.getCache(e), lt())
            }
        }) : H
    }
    ,
    Q.revert = function(e, t) {
        return Kb(!e, t)
    }
    ,
    Q.create = function(e, t) {
        return new Q(e,t)
    }
    ,
    Q.refresh = function(e) {
        return e ? Db() : (s || Q.register()) && It(!0)
    }
    ,
    Q.update = function(e) {
        return ++ze.cache && j(!0 === e ? 2 : 0)
    }
    ,
    Q.clearScrollMemory = Lb,
    Q.maxScroll = function(e, t) {
        return Ia(e, t ? Xe : Ke)
    }
    ,
    Q.getScrollFunc = function(e, t) {
        return K(J(e), t ? Xe : Ke)
    }
    ,
    Q.getById = function(e) {
        return Bt[e]
    }
    ,
    Q.getAll = function() {
        return At.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }
    ,
    Q.isScrolling = function() {
        return !!ht
    }
    ,
    Q.snapDirectional = lb,
    Q.addEventListener = function(e, t) {
        var r = Y[e] || (Y[e] = []);
        ~r.indexOf(t) || r.push(t)
    }
    ,
    Q.removeEventListener = function(e, t) {
        var r = Y[e]
          , n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }
    ,
    Q.batch = function(e, t) {
        function Io(e, t) {
            var r = []
              , n = []
              , o = He.delayedCall(i, function() {
                t(r, n),
                r = [],
                n = []
            }).pause();
            return function(e) {
                r.length || o.restart(!0),
                r.push(e.trigger),
                n.push(e),
                a <= r.length && o.progress(1)
            }
        }
        var r, n = [], o = {}, i = t.interval || .016, a = t.batchMax || 1e9;
        for (r in t)
            o[r] = "on" === r.substr(0, 2) && La(t[r]) && "onRefreshInit" !== r ? Io(0, t[r]) : t[r];
        return La(a) && (a = a(),
        ob(Q, "refresh", function() {
            return a = t.batchMax()
        })),
        et(e).forEach(function(e) {
            var t = {};
            for (r in o)
                t[r] = o[r];
            t.trigger = e,
            n.push(Q.create(t))
        }),
        n
    }
    ;
    function hc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0),
        n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }
    function ic(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "") : "none",
        e === qe && ic(Ge, t)
    }
    function kc(e) {
        var t, r = e.event, n = e.target, o = e.axis, i = (r.changedTouches ? r.changedTouches[0] : r).target, a = i._gsap || He.core.getCache(i), s = gt();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; i && i !== Ge && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !te[(t = eb(i)).overflowY] && !te[t.overflowX]); )
                i = i.parentNode;
            a._isScroll = i && i !== n && !Ea(i) && (te[(t = eb(i)).overflowY] || te[t.overflowX]),
            a._isScrollT = s
        }
        !a._isScroll && "x" !== o || (r.stopPropagation(),
        r._gsapAllow = !0)
    }
    function lc(e, t, r, n) {
        return E.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && kc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && ob(je, E.eventTypes[0], ne, !1, !0)
            },
            onDisable: function onDisable() {
                return pb(je, E.eventTypes[0], ne, !0)
            }
        })
    }
    function pc(e) {
        function Ep() {
            return o = !1
        }
        function Hp() {
            i = Ia(p, Ke),
            S = tt(k ? 1 : 0, i),
            f && (T = tt(0, Ia(p, Xe))),
            l = Dt
        }
        function Ip() {
            h._gsap.y = Ba(parseFloat(h._gsap.y) + v.offset) + "px",
            h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)",
            v.offset = v.cacheID = 0
        }
        function Op() {
            Hp(),
            a.isActive() && a.vars.scrollY > i && (v() > i ? a.progress(1) && v(i) : a.resetTo("scrollY", i))
        }
        Na(e) || (e = {}),
        e.preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
        e.debounce = !!e.debounce,
        e.id = e.id || "normalizer";
        var n, i, l, o, a, c, u, s, f = e.normalizeScrollX, t = e.momentum, r = e.allowNestedScroll, p = J(e.target) || qe, d = He.core.globals().ScrollSmoother, g = d && d.get(), h = k && (e.content && J(e.content) || g && !1 !== e.content && !g.smooth() && g.content()), v = K(p, Ke), b = K(p, Xe), m = 1, y = (E.isTouch && Je.visualViewport ? Je.visualViewport.scale * Je.visualViewport.width : Je.outerWidth) / Je.innerWidth, x = 0, w = La(t) ? function() {
            return t(n)
        }
        : function() {
            return t || 2.8
        }
        , _ = lc(p, e.type, !0, r), T = Aa, S = Aa;
        return h && He.set(h, {
            y: "+=0"
        }),
        e.ignoreCheck = function(e) {
            return k && "touchmove" === e.type && function ignoreDrag() {
                if (o) {
                    requestAnimationFrame(Ep);
                    var e = Ba(n.deltaY / 2)
                      , t = S(v.v - e);
                    if (h && t !== v.v + v.offset) {
                        v.offset = t - v.v;
                        var r = Ba((parseFloat(h && h._gsap.y) || 0) - v.offset);
                        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)",
                        h._gsap.y = r + "px",
                        v.cacheID = ze.cache,
                        j()
                    }
                    return !0
                }
                v.offset && Ip(),
                o = !0
            }() || 1.05 < m && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
        }
        ,
        e.onPress = function() {
            var e = m;
            m = Ba((Je.visualViewport && Je.visualViewport.scale || 1) / y),
            a.pause(),
            e !== m && ic(p, 1.01 < m || !f && "x"),
            c = b(),
            u = v(),
            Hp(),
            l = Dt
        }
        ,
        e.onRelease = e.onGestureStart = function(e, t) {
            if (v.offset && Ip(),
            t) {
                ze.cache++;
                var r, n, o = w();
                f && (n = (r = b()) + .05 * o * -e.velocityX / .227,
                o *= hc(b, r, n, Ia(p, Xe)),
                a.vars.scrollX = T(n)),
                n = (r = v()) + .05 * o * -e.velocityY / .227,
                o *= hc(v, r, n, Ia(p, Ke)),
                a.vars.scrollY = S(n),
                a.invalidate().duration(o).play(.01),
                (k && a.vars.scrollY >= i || i - 1 <= r) && He.to({}, {
                    onUpdate: Op,
                    duration: o
                })
            } else
                s.restart(!0)
        }
        ,
        e.onWheel = function() {
            a._ts && a.pause(),
            1e3 < gt() - x && (l = 0,
            x = gt())
        }
        ,
        e.onChange = function(e, t, r, n, o) {
            if (Dt !== l && Hp(),
            t && f && b(T(n[2] === t ? c + (e.startX - e.x) : b() + t - n[1])),
            r) {
                v.offset && Ip();
                var i = o[2] === r
                  , a = i ? u + e.startY - e.y : v() + r - o[1]
                  , s = S(a);
                i && a !== s && (u += s - a),
                v(s)
            }
            (r || t) && j()
        }
        ,
        e.onEnable = function() {
            ic(p, !f && "x"),
            Q.addEventListener("refresh", Op),
            ob(Je, "resize", Op),
            v.smooth && (v.target.style.scrollBehavior = "auto",
            v.smooth = b.smooth = !1),
            _.enable()
        }
        ,
        e.onDisable = function() {
            ic(p, !0),
            pb(Je, "resize", Op),
            Q.removeEventListener("refresh", Op),
            _.kill()
        }
        ,
        e.lockAxis = !1 !== e.lockAxis,
        ((n = new E(e)).iOS = k) && !v() && v(1),
        k && He.ticker.add(Aa),
        s = n._dc,
        a = He.to(n, {
            ease: "power4",
            paused: !0,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: s.vars.onComplete
        }),
        n
    }
    var ee, te = {
        auto: 1,
        scroll: 1
    }, re = /(input|label|select|textarea)/i, ne = function _captureInputs(e) {
        var t = re.test(e.target.tagName);
        (t || ee) && (e._gsapAllow = !0,
        ee = t)
    };
    Q.sort = function(e) {
        return At.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        }
        )
    }
    ,
    Q.observe = function(e) {
        return new E(e)
    }
    ,
    Q.normalizeScroll = function(e) {
        if (void 0 === e)
            return v;
        if (!0 === e && v)
            return v.enable();
        if (!1 === e)
            return v && v.kill();
        var t = e instanceof E ? e : pc(e);
        return v && v.target === t.target && v.kill(),
        Ea(t.target) && (v = t),
        t
    }
    ,
    Q.core = {
        _getVelocityProp: L,
        _inputObserver: lc,
        _scrollers: ze,
        _proxies: Fe,
        bridge: {
            ss: function ss() {
                ht || W("scrollStart"),
                ht = gt()
            },
            ref: function ref() {
                return nt
            }
        }
    },
    Da() && He.registerPlugin(Q),
    e.ScrollTrigger = Q,
    e.default = Q;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/*!
 * ScrollToPlugin 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function l() {
        return "undefined" != typeof window
    }
    function m() {
        return f || l() && (f = window.gsap) && f.registerPlugin && f
    }
    function n(e) {
        return "string" == typeof e
    }
    function o(e) {
        return "function" == typeof e
    }
    function p(e, t) {
        var o = "x" === t ? "Width" : "Height"
          , n = "scroll" + o
          , l = "client" + o;
        return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[l] || c[l]) : e[n] - e["offset" + o]
    }
    function q(e, t) {
        var o = "scroll" + ("x" === t ? "Left" : "Top");
        return e === T && (null != e.pageXOffset ? o = "page" + t.toUpperCase() + "Offset" : e = null != i[o] ? i : c),
        function() {
            return e[o]
        }
    }
    function s(e, t) {
        if (!(e = y(e)[0]) || !e.getBoundingClientRect)
            return console.warn("scrollTo target doesn't exist. Using 0") || {
                x: 0,
                y: 0
            };
        var o = e.getBoundingClientRect()
          , n = !t || t === T || t === c
          , l = n ? {
            top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0),
            left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0)
        } : t.getBoundingClientRect()
          , r = {
            x: o.left - l.left,
            y: o.top - l.top
        };
        return !n && t && (r.x += q(t, "x")(),
        r.y += q(t, "y")()),
        r
    }
    function t(e, t, o, l, r) {
        return isNaN(e) || "object" == typeof e ? n(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + l - r : "max" === e ? p(t, o) - r : Math.min(p(t, o), s(e, t)[o] - r) : parseFloat(e) - r
    }
    function u() {
        f = m(),
        l() && f && "undefined" != typeof document && document.body && (T = window,
        c = document.body,
        i = document.documentElement,
        y = f.utils.toArray,
        f.config({
            autoKillThreshold: 7
        }),
        v = f.config(),
        a = 1)
    }
    var f, a, T, i, c, y, v, h, r = {
        version: "3.11.4",
        name: "scrollTo",
        rawVars: 1,
        register: function register(e) {
            f = e,
            u()
        },
        init: function init(e, l, r, s, i) {
            a || u();
            var p = this
              , c = f.getProperty(e, "scrollSnapType");
            p.isWin = e === T,
            p.target = e,
            p.tween = r,
            l = function _clean(e, t, l, r) {
                if (o(e) && (e = e(t, l, r)),
                "object" != typeof e)
                    return n(e) && "max" !== e && "=" !== e.charAt(1) ? {
                        x: e,
                        y: e
                    } : {
                        y: e
                    };
                if (e.nodeType)
                    return {
                        y: e,
                        x: e
                    };
                var s, i = {};
                for (s in e)
                    i[s] = "onAutoKill" !== s && o(e[s]) ? e[s](t, l, r) : e[s];
                return i
            }(l, s, e, i),
            p.vars = l,
            p.autoKill = !!l.autoKill,
            p.getX = q(e, "x"),
            p.getY = q(e, "y"),
            p.x = p.xPrev = p.getX(),
            p.y = p.yPrev = p.getY(),
            h = h || f.core.globals().ScrollTrigger,
            "smooth" === f.getProperty(e, "scrollBehavior") && f.set(e, {
                scrollBehavior: "auto"
            }),
            c && "none" !== c && (p.snap = 1,
            p.snapInline = e.style.scrollSnapType,
            e.style.scrollSnapType = "none"),
            null != l.x ? (p.add(p, "x", p.x, t(l.x, e, "x", p.x, l.offsetX || 0), s, i),
            p._props.push("scrollTo_x")) : p.skipX = 1,
            null != l.y ? (p.add(p, "y", p.y, t(l.y, e, "y", p.y, l.offsetY || 0), s, i),
            p._props.push("scrollTo_y")) : p.skipY = 1
        },
        render: function render(e, t) {
            for (var o, n, l, r, s, i = t._pt, c = t.target, u = t.tween, f = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, g = t.snap, x = t.snapInline; i; )
                i.r(e, i.d),
                i = i._next;
            o = d || !t.skipX ? t.getX() : a,
            l = (n = d || !t.skipY ? t.getY() : y) - y,
            r = o - a,
            s = v.autoKillThreshold,
            t.x < 0 && (t.x = 0),
            t.y < 0 && (t.y = 0),
            f && (!t.skipX && (s < r || r < -s) && o < p(c, "x") && (t.skipX = 1),
            !t.skipY && (s < l || l < -s) && n < p(c, "y") && (t.skipY = 1),
            t.skipX && t.skipY && (u.kill(),
            t.vars.onAutoKill && t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))),
            d ? T.scrollTo(t.skipX ? o : t.x, t.skipY ? n : t.y) : (t.skipY || (c.scrollTop = t.y),
            t.skipX || (c.scrollLeft = t.x)),
            !g || 1 !== e && 0 !== e || (n = c.scrollTop,
            o = c.scrollLeft,
            x ? c.style.scrollSnapType = x : c.style.removeProperty("scroll-snap-type"),
            c.scrollTop = n + 1,
            c.scrollLeft = o + 1,
            c.scrollTop = n,
            c.scrollLeft = o),
            t.xPrev = t.x,
            t.yPrev = t.y,
            h && h.update()
        },
        kill: function kill(e) {
            var t = "scrollTo" === e;
            !t && "scrollTo_x" !== e || (this.skipX = 1),
            !t && "scrollTo_y" !== e || (this.skipY = 1)
        }
    };
    r.max = p,
    r.getOffset = s,
    r.buildGetter = q,
    m() && f.registerPlugin(r),
    e.ScrollToPlugin = r,
    e.default = r;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
