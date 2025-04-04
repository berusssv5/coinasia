!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "9dcdba89-beb0-51d1-a8f3-07481142779a")
    } catch (e) {}
}();
( () => {
    "use strict";
    var e = {
        9386: (e, t, r) => {
            var n = r(6357)
              , i = r(215)
              , o = TypeError;
            e.exports = function(e) {
                if (n(e))
                    return e;
                throw new o(i(e) + " is not a function")
            }
        }
        ,
        5292: (e, t, r) => {
            var n = r(6653)
              , i = r(215)
              , o = TypeError;
            e.exports = function(e) {
                if (n(e))
                    return e;
                throw new o(i(e) + " is not a constructor")
            }
        }
        ,
        2834: (e, t, r) => {
            var n = r(6357)
              , i = String
              , o = TypeError;
            e.exports = function(e) {
                if ("object" == typeof e || n(e))
                    return e;
                throw new o("Can't set " + i(e) + " as a prototype")
            }
        }
        ,
        5845: (e, t, r) => {
            var n = r(3683)
              , i = r(2104)
              , o = r(8449).f
              , a = n("unscopables")
              , s = Array.prototype;
            void 0 === s[a] && o(s, a, {
                configurable: !0,
                value: i(null)
            }),
            e.exports = function(e) {
                s[a][e] = !0
            }
        }
        ,
        7157: (e, t, r) => {
            var n = r(4775).charAt;
            e.exports = function(e, t, r) {
                return t + (r ? n(e, t).length : 1)
            }
        }
        ,
        2135: (e, t, r) => {
            var n = r(5161)
              , i = TypeError;
            e.exports = function(e, t) {
                if (n(t, e))
                    return e;
                throw new i("Incorrect invocation")
            }
        }
        ,
        151: (e, t, r) => {
            var n = r(1634)
              , i = String
              , o = TypeError;
            e.exports = function(e) {
                if (n(e))
                    return e;
                throw new o(i(e) + " is not an object")
            }
        }
        ,
        1651: e => {
            e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
        }
        ,
        2372: (e, t, r) => {
            var n = r(4543);
            e.exports = n((function() {
                if ("function" == typeof ArrayBuffer) {
                    var e = new ArrayBuffer(8);
                    Object.isExtensible(e) && Object.defineProperty(e, "a", {
                        value: 8
                    })
                }
            }
            ))
        }
        ,
        8180: (e, t, r) => {
            var n, i, o, a = r(1651), s = r(5180), c = r(4523), u = r(6357), l = r(1634), d = r(5889), h = r(7611), p = r(215), f = r(6587), g = r(9704), v = r(3642), m = r(5161), y = r(7763), E = r(7943), _ = r(3683), b = r(6048), I = r(4317), S = I.enforce, w = I.get, O = c.Int8Array, C = O && O.prototype, T = c.Uint8ClampedArray, A = T && T.prototype, P = O && y(O), R = C && y(C), N = Object.prototype, D = c.TypeError, L = _("toStringTag"), x = b("TYPED_ARRAY_TAG"), k = "TypedArrayConstructor", M = a && !!E && "Opera" !== h(c.opera), j = !1, U = {
                Int8Array: 1,
                Uint8Array: 1,
                Uint8ClampedArray: 1,
                Int16Array: 2,
                Uint16Array: 2,
                Int32Array: 4,
                Uint32Array: 4,
                Float32Array: 4,
                Float64Array: 8
            }, H = {
                BigInt64Array: 8,
                BigUint64Array: 8
            }, B = function(e) {
                var t = y(e);
                if (l(t)) {
                    var r = w(t);
                    return r && d(r, k) ? r[k] : B(t)
                }
            }, F = function(e) {
                if (!l(e))
                    return !1;
                var t = h(e);
                return d(U, t) || d(H, t)
            };
            for (n in U)
                (o = (i = c[n]) && i.prototype) ? S(o)[k] = i : M = !1;
            for (n in H)
                (o = (i = c[n]) && i.prototype) && (S(o)[k] = i);
            if ((!M || !u(P) || P === Function.prototype) && (P = function() {
                throw new D("Incorrect invocation")
            }
            ,
            M))
                for (n in U)
                    c[n] && E(c[n], P);
            if ((!M || !R || R === N) && (R = P.prototype,
            M))
                for (n in U)
                    c[n] && E(c[n].prototype, R);
            if (M && y(A) !== R && E(A, R),
            s && !d(R, L))
                for (n in j = !0,
                v(R, L, {
                    configurable: !0,
                    get: function() {
                        return l(this) ? this[x] : void 0
                    }
                }),
                U)
                    c[n] && f(c[n], x, n);
            e.exports = {
                NATIVE_ARRAY_BUFFER_VIEWS: M,
                TYPED_ARRAY_TAG: j && x,
                aTypedArray: function(e) {
                    if (F(e))
                        return e;
                    throw new D("Target is not a typed array")
                },
                aTypedArrayConstructor: function(e) {
                    if (u(e) && (!E || m(P, e)))
                        return e;
                    throw new D(p(e) + " is not a typed array constructor")
                },
                exportTypedArrayMethod: function(e, t, r, n) {
                    if (s) {
                        if (r)
                            for (var i in U) {
                                var o = c[i];
                                if (o && d(o.prototype, e))
                                    try {
                                        delete o.prototype[e]
                                    } catch (r) {
                                        try {
                                            o.prototype[e] = t
                                        } catch (e) {}
                                    }
                            }
                        R[e] && !r || g(R, e, r ? t : M && C[e] || t, n)
                    }
                },
                exportTypedArrayStaticMethod: function(e, t, r) {
                    var n, i;
                    if (s) {
                        if (E) {
                            if (r)
                                for (n in U)
                                    if ((i = c[n]) && d(i, e))
                                        try {
                                            delete i[e]
                                        } catch (e) {}
                            if (P[e] && !r)
                                return;
                            try {
                                return g(P, e, r ? t : M && P[e] || t)
                            } catch (e) {}
                        }
                        for (n in U)
                            !(i = c[n]) || i[e] && !r || g(i, e, t)
                    }
                },
                getTypedArrayConstructor: B,
                isView: function(e) {
                    if (!l(e))
                        return !1;
                    var t = h(e);
                    return "DataView" === t || d(U, t) || d(H, t)
                },
                isTypedArray: F,
                TypedArray: P,
                TypedArrayPrototype: R
            }
        }
        ,
        6330: (e, t, r) => {
            var n = r(4523)
              , i = r(1008)
              , o = r(5180)
              , a = r(1651)
              , s = r(94)
              , c = r(6587)
              , u = r(3642)
              , l = r(6519)
              , d = r(4543)
              , h = r(2135)
              , p = r(4827)
              , f = r(5966)
              , g = r(192)
              , v = r(721)
              , m = r(5498)
              , y = r(7763)
              , E = r(7943)
              , _ = r(9712).f
              , b = r(4453)
              , I = r(231)
              , S = r(6143)
              , w = r(4317)
              , O = s.PROPER
              , C = s.CONFIGURABLE
              , T = "ArrayBuffer"
              , A = "DataView"
              , P = "prototype"
              , R = "Wrong index"
              , N = w.getterFor(T)
              , D = w.getterFor(A)
              , L = w.set
              , x = n[T]
              , k = x
              , M = k && k[P]
              , j = n[A]
              , U = j && j[P]
              , H = Object.prototype
              , B = n.Array
              , F = n.RangeError
              , q = i(b)
              , V = i([].reverse)
              , G = m.pack
              , z = m.unpack
              , $ = function(e) {
                return [255 & e]
            }
              , W = function(e) {
                return [255 & e, e >> 8 & 255]
            }
              , Y = function(e) {
                return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            }
              , K = function(e) {
                return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            }
              , X = function(e) {
                return G(v(e), 23, 4)
            }
              , J = function(e) {
                return G(e, 52, 8)
            }
              , Z = function(e, t, r) {
                u(e[P], t, {
                    configurable: !0,
                    get: function() {
                        return r(this)[t]
                    }
                })
            }
              , Q = function(e, t, r, n) {
                var i = D(e)
                  , o = g(r)
                  , a = !!n;
                if (o + t > i.byteLength)
                    throw new F(R);
                var s = i.bytes
                  , c = o + i.byteOffset
                  , u = I(s, c, c + t);
                return a ? u : V(u)
            }
              , ee = function(e, t, r, n, i, o) {
                var a = D(e)
                  , s = g(r)
                  , c = n(+i)
                  , u = !!o;
                if (s + t > a.byteLength)
                    throw new F(R);
                for (var l = a.bytes, d = s + a.byteOffset, h = 0; h < t; h++)
                    l[d + h] = c[u ? h : t - h - 1]
            };
            if (a) {
                var te = O && x.name !== T;
                if (d((function() {
                    x(1)
                }
                )) && d((function() {
                    new x(-1)
                }
                )) && !d((function() {
                    return new x,
                    new x(1.5),
                    new x(NaN),
                    1 !== x.length || te && !C
                }
                )))
                    te && C && c(x, "name", T);
                else {
                    (k = function(e) {
                        return h(this, M),
                        new x(g(e))
                    }
                    )[P] = M;
                    for (var re, ne = _(x), ie = 0; ne.length > ie; )
                        (re = ne[ie++])in k || c(k, re, x[re]);
                    M.constructor = k
                }
                E && y(U) !== H && E(U, H);
                var oe = new j(new k(2))
                  , ae = i(U.setInt8);
                oe.setInt8(0, 2147483648),
                oe.setInt8(1, 2147483649),
                !oe.getInt8(0) && oe.getInt8(1) || l(U, {
                    setInt8: function(e, t) {
                        ae(this, e, t << 24 >> 24)
                    },
                    setUint8: function(e, t) {
                        ae(this, e, t << 24 >> 24)
                    }
                }, {
                    unsafe: !0
                })
            } else
                M = (k = function(e) {
                    h(this, M);
                    var t = g(e);
                    L(this, {
                        type: T,
                        bytes: q(B(t), 0),
                        byteLength: t
                    }),
                    o || (this.byteLength = t,
                    this.detached = !1)
                }
                )[P],
                U = (j = function(e, t, r) {
                    h(this, U),
                    h(e, M);
                    var n = N(e)
                      , i = n.byteLength
                      , a = p(t);
                    if (a < 0 || a > i)
                        throw new F("Wrong offset");
                    if (a + (r = void 0 === r ? i - a : f(r)) > i)
                        throw new F("Wrong length");
                    L(this, {
                        type: A,
                        buffer: e,
                        byteLength: r,
                        byteOffset: a,
                        bytes: n.bytes
                    }),
                    o || (this.buffer = e,
                    this.byteLength = r,
                    this.byteOffset = a)
                }
                )[P],
                o && (Z(k, "byteLength", N),
                Z(j, "buffer", D),
                Z(j, "byteLength", D),
                Z(j, "byteOffset", D)),
                l(U, {
                    getInt8: function(e) {
                        return Q(this, 1, e)[0] << 24 >> 24
                    },
                    getUint8: function(e) {
                        return Q(this, 1, e)[0]
                    },
                    getInt16: function(e) {
                        var t = Q(this, 2, e, arguments.length > 1 && arguments[1]);
                        return (t[1] << 8 | t[0]) << 16 >> 16
                    },
                    getUint16: function(e) {
                        var t = Q(this, 2, e, arguments.length > 1 && arguments[1]);
                        return t[1] << 8 | t[0]
                    },
                    getInt32: function(e) {
                        return K(Q(this, 4, e, arguments.length > 1 && arguments[1]))
                    },
                    getUint32: function(e) {
                        return K(Q(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0
                    },
                    getFloat32: function(e) {
                        return z(Q(this, 4, e, arguments.length > 1 && arguments[1]), 23)
                    },
                    getFloat64: function(e) {
                        return z(Q(this, 8, e, arguments.length > 1 && arguments[1]), 52)
                    },
                    setInt8: function(e, t) {
                        ee(this, 1, e, $, t)
                    },
                    setUint8: function(e, t) {
                        ee(this, 1, e, $, t)
                    },
                    setInt16: function(e, t) {
                        ee(this, 2, e, W, t, arguments.length > 2 && arguments[2])
                    },
                    setUint16: function(e, t) {
                        ee(this, 2, e, W, t, arguments.length > 2 && arguments[2])
                    },
                    setInt32: function(e, t) {
                        ee(this, 4, e, Y, t, arguments.length > 2 && arguments[2])
                    },
                    setUint32: function(e, t) {
                        ee(this, 4, e, Y, t, arguments.length > 2 && arguments[2])
                    },
                    setFloat32: function(e, t) {
                        ee(this, 4, e, X, t, arguments.length > 2 && arguments[2])
                    },
                    setFloat64: function(e, t) {
                        ee(this, 8, e, J, t, arguments.length > 2 && arguments[2])
                    }
                });
            S(k, T),
            S(j, A),
            e.exports = {
                ArrayBuffer: k,
                DataView: j
            }
        }
        ,
        4453: (e, t, r) => {
            var n = r(581)
              , i = r(7418)
              , o = r(5526);
            e.exports = function(e) {
                for (var t = n(this), r = o(t), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, r), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? r : i(c, r); u > s; )
                    t[s++] = e;
                return t
            }
        }
        ,
        3371: (e, t, r) => {
            var n = r(2077).forEach
              , i = r(4486)("forEach");
            e.exports = i ? [].forEach : function(e) {
                return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }
        ,
        2753: (e, t, r) => {
            var n = r(853)
              , i = r(7418)
              , o = r(5526)
              , a = function(e) {
                return function(t, r, a) {
                    var s, c = n(t), u = o(c), l = i(a, u);
                    if (e && r != r) {
                        for (; u > l; )
                            if ((s = c[l++]) != s)
                                return !0
                    } else
                        for (; u > l; l++)
                            if ((e || l in c) && c[l] === r)
                                return e || l || 0;
                    return !e && -1
                }
            };
            e.exports = {
                includes: a(!0),
                indexOf: a(!1)
            }
        }
        ,
        2077: (e, t, r) => {
            var n = r(1232)
              , i = r(1008)
              , o = r(191)
              , a = r(581)
              , s = r(5526)
              , c = r(797)
              , u = i([].push)
              , l = function(e) {
                var t = 1 === e
                  , r = 2 === e
                  , i = 3 === e
                  , l = 4 === e
                  , d = 6 === e
                  , h = 7 === e
                  , p = 5 === e || d;
                return function(f, g, v, m) {
                    for (var y, E, _ = a(f), b = o(_), I = n(g, v), S = s(b), w = 0, O = m || c, C = t ? O(f, S) : r || h ? O(f, 0) : void 0; S > w; w++)
                        if ((p || w in b) && (E = I(y = b[w], w, _),
                        e))
                            if (t)
                                C[w] = E;
                            else if (E)
                                switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return y;
                                case 6:
                                    return w;
                                case 2:
                                    u(C, y)
                                }
                            else
                                switch (e) {
                                case 4:
                                    return !1;
                                case 7:
                                    u(C, y)
                                }
                    return d ? -1 : i || l ? l : C
                }
            };
            e.exports = {
                forEach: l(0),
                map: l(1),
                filter: l(2),
                some: l(3),
                every: l(4),
                find: l(5),
                findIndex: l(6),
                filterReject: l(7)
            }
        }
        ,
        4486: (e, t, r) => {
            var n = r(4543);
            e.exports = function(e, t) {
                var r = [][e];
                return !!r && n((function() {
                    r.call(null, t || function() {
                        return 1
                    }
                    , 1)
                }
                ))
            }
        }
        ,
        7262: (e, t, r) => {
            var n = r(9386)
              , i = r(581)
              , o = r(191)
              , a = r(5526)
              , s = TypeError
              , c = function(e) {
                return function(t, r, c, u) {
                    n(r);
                    var l = i(t)
                      , d = o(l)
                      , h = a(l)
                      , p = e ? h - 1 : 0
                      , f = e ? -1 : 1;
                    if (c < 2)
                        for (; ; ) {
                            if (p in d) {
                                u = d[p],
                                p += f;
                                break
                            }
                            if (p += f,
                            e ? p < 0 : h <= p)
                                throw new s("Reduce of empty array with no initial value")
                        }
                    for (; e ? p >= 0 : h > p; p += f)
                        p in d && (u = r(u, d[p], p, l));
                    return u
                }
            };
            e.exports = {
                left: c(!1),
                right: c(!0)
            }
        }
        ,
        231: (e, t, r) => {
            var n = r(7418)
              , i = r(5526)
              , o = r(9904)
              , a = Array
              , s = Math.max;
            e.exports = function(e, t, r) {
                for (var c = i(e), u = n(t, c), l = n(void 0 === r ? c : r, c), d = a(s(l - u, 0)), h = 0; u < l; u++,
                h++)
                    o(d, h, e[u]);
                return d.length = h,
                d
            }
        }
        ,
        9136: (e, t, r) => {
            var n = r(1008);
            e.exports = n([].slice)
        }
        ,
        4568: (e, t, r) => {
            var n = r(231)
              , i = Math.floor
              , o = function(e, t) {
                var r = e.length
                  , c = i(r / 2);
                return r < 8 ? a(e, t) : s(e, o(n(e, 0, c), t), o(n(e, c), t), t)
            }
              , a = function(e, t) {
                for (var r, n, i = e.length, o = 1; o < i; ) {
                    for (n = o,
                    r = e[o]; n && t(e[n - 1], r) > 0; )
                        e[n] = e[--n];
                    n !== o++ && (e[n] = r)
                }
                return e
            }
              , s = function(e, t, r, n) {
                for (var i = t.length, o = r.length, a = 0, s = 0; a < i || s < o; )
                    e[a + s] = a < i && s < o ? n(t[a], r[s]) <= 0 ? t[a++] : r[s++] : a < i ? t[a++] : r[s++];
                return e
            };
            e.exports = o
        }
        ,
        9929: (e, t, r) => {
            var n = r(6872)
              , i = r(6653)
              , o = r(1634)
              , a = r(3683)("species")
              , s = Array;
            e.exports = function(e) {
                var t;
                return n(e) && (t = e.constructor,
                (i(t) && (t === s || n(t.prototype)) || o(t) && null === (t = t[a])) && (t = void 0)),
                void 0 === t ? s : t
            }
        }
        ,
        797: (e, t, r) => {
            var n = r(9929);
            e.exports = function(e, t) {
                return new (n(e))(0 === t ? 0 : t)
            }
        }
        ,
        668: (e, t, r) => {
            var n = r(3683)("iterator")
              , i = !1;
            try {
                var o = 0
                  , a = {
                    next: function() {
                        return {
                            done: !!o++
                        }
                    },
                    return: function() {
                        i = !0
                    }
                };
                a[n] = function() {
                    return this
                }
                ,
                Array.from(a, (function() {
                    throw 2
                }
                ))
            } catch (e) {}
            e.exports = function(e, t) {
                try {
                    if (!t && !i)
                        return !1
                } catch (e) {
                    return !1
                }
                var r = !1;
                try {
                    var o = {};
                    o[n] = function() {
                        return {
                            next: function() {
                                return {
                                    done: r = !0
                                }
                            }
                        }
                    }
                    ,
                    e(o)
                } catch (e) {}
                return r
            }
        }
        ,
        6032: (e, t, r) => {
            var n = r(1008)
              , i = n({}.toString)
              , o = n("".slice);
            e.exports = function(e) {
                return o(i(e), 8, -1)
            }
        }
        ,
        7611: (e, t, r) => {
            var n = r(3644)
              , i = r(6357)
              , o = r(6032)
              , a = r(3683)("toStringTag")
              , s = Object
              , c = "Arguments" === o(function() {
                return arguments
            }());
            e.exports = n ? o : function(e) {
                var t, r, n;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = s(e), a)) ? r : c ? o(t) : "Object" === (n = o(t)) && i(t.callee) ? "Arguments" : n
            }
        }
        ,
        8137: (e, t, r) => {
            var n = r(1008)
              , i = r(6519)
              , o = r(8907).getWeakData
              , a = r(2135)
              , s = r(151)
              , c = r(3445)
              , u = r(1634)
              , l = r(3308)
              , d = r(2077)
              , h = r(5889)
              , p = r(4317)
              , f = p.set
              , g = p.getterFor
              , v = d.find
              , m = d.findIndex
              , y = n([].splice)
              , E = 0
              , _ = function(e) {
                return e.frozen || (e.frozen = new b)
            }
              , b = function() {
                this.entries = []
            }
              , I = function(e, t) {
                return v(e.entries, (function(e) {
                    return e[0] === t
                }
                ))
            };
            b.prototype = {
                get: function(e) {
                    var t = I(this, e);
                    if (t)
                        return t[1]
                },
                has: function(e) {
                    return !!I(this, e)
                },
                set: function(e, t) {
                    var r = I(this, e);
                    r ? r[1] = t : this.entries.push([e, t])
                },
                delete: function(e) {
                    var t = m(this.entries, (function(t) {
                        return t[0] === e
                    }
                    ));
                    return ~t && y(this.entries, t, 1),
                    !!~t
                }
            },
            e.exports = {
                getConstructor: function(e, t, r, n) {
                    var d = e((function(e, i) {
                        a(e, p),
                        f(e, {
                            type: t,
                            id: E++,
                            frozen: void 0
                        }),
                        c(i) || l(i, e[n], {
                            that: e,
                            AS_ENTRIES: r
                        })
                    }
                    ))
                      , p = d.prototype
                      , v = g(t)
                      , m = function(e, t, r) {
                        var n = v(e)
                          , i = o(s(t), !0);
                        return !0 === i ? _(n).set(t, r) : i[n.id] = r,
                        e
                    };
                    return i(p, {
                        delete: function(e) {
                            var t = v(this);
                            if (!u(e))
                                return !1;
                            var r = o(e);
                            return !0 === r ? _(t).delete(e) : r && h(r, t.id) && delete r[t.id]
                        },
                        has: function(e) {
                            var t = v(this);
                            if (!u(e))
                                return !1;
                            var r = o(e);
                            return !0 === r ? _(t).has(e) : r && h(r, t.id)
                        }
                    }),
                    i(p, r ? {
                        get: function(e) {
                            var t = v(this);
                            if (u(e)) {
                                var r = o(e);
                                return !0 === r ? _(t).get(e) : r ? r[t.id] : void 0
                            }
                        },
                        set: function(e, t) {
                            return m(this, e, t)
                        }
                    } : {
                        add: function(e) {
                            return m(this, e, !0)
                        }
                    }),
                    d
                }
            }
        }
        ,
        196: (e, t, r) => {
            var n = r(6566)
              , i = r(4523)
              , o = r(1008)
              , a = r(4396)
              , s = r(9704)
              , c = r(8907)
              , u = r(3308)
              , l = r(2135)
              , d = r(6357)
              , h = r(3445)
              , p = r(1634)
              , f = r(4543)
              , g = r(668)
              , v = r(6143)
              , m = r(3103);
            e.exports = function(e, t, r) {
                var y = -1 !== e.indexOf("Map")
                  , E = -1 !== e.indexOf("Weak")
                  , _ = y ? "set" : "add"
                  , b = i[e]
                  , I = b && b.prototype
                  , S = b
                  , w = {}
                  , O = function(e) {
                    var t = o(I[e]);
                    s(I, e, "add" === e ? function(e) {
                        return t(this, 0 === e ? 0 : e),
                        this
                    }
                    : "delete" === e ? function(e) {
                        return !(E && !p(e)) && t(this, 0 === e ? 0 : e)
                    }
                    : "get" === e ? function(e) {
                        return E && !p(e) ? void 0 : t(this, 0 === e ? 0 : e)
                    }
                    : "has" === e ? function(e) {
                        return !(E && !p(e)) && t(this, 0 === e ? 0 : e)
                    }
                    : function(e, r) {
                        return t(this, 0 === e ? 0 : e, r),
                        this
                    }
                    )
                };
                if (a(e, !d(b) || !(E || I.forEach && !f((function() {
                    (new b).entries().next()
                }
                )))))
                    S = r.getConstructor(t, e, y, _),
                    c.enable();
                else if (a(e, !0)) {
                    var C = new S
                      , T = C[_](E ? {} : -0, 1) !== C
                      , A = f((function() {
                        C.has(1)
                    }
                    ))
                      , P = g((function(e) {
                        new b(e)
                    }
                    ))
                      , R = !E && f((function() {
                        for (var e = new b, t = 5; t--; )
                            e[_](t, t);
                        return !e.has(-0)
                    }
                    ));
                    P || ((S = t((function(e, t) {
                        l(e, I);
                        var r = m(new b, e, S);
                        return h(t) || u(t, r[_], {
                            that: r,
                            AS_ENTRIES: y
                        }),
                        r
                    }
                    ))).prototype = I,
                    I.constructor = S),
                    (A || R) && (O("delete"),
                    O("has"),
                    y && O("get")),
                    (R || T) && O(_),
                    E && I.clear && delete I.clear
                }
                return w[e] = S,
                n({
                    global: !0,
                    constructor: !0,
                    forced: S !== b
                }, w),
                v(S, e),
                E || r.setStrong(S, e, y),
                S
            }
        }
        ,
        812: (e, t, r) => {
            var n = r(5889)
              , i = r(7527)
              , o = r(9763)
              , a = r(8449);
            e.exports = function(e, t, r) {
                for (var s = i(t), c = a.f, u = o.f, l = 0; l < s.length; l++) {
                    var d = s[l];
                    n(e, d) || r && n(r, d) || c(e, d, u(t, d))
                }
            }
        }
        ,
        6412: (e, t, r) => {
            var n = r(3683)("match");
            e.exports = function(e) {
                var t = /./;
                try {
                    "/./"[e](t)
                } catch (r) {
                    try {
                        return t[n] = !1,
                        "/./"[e](t)
                    } catch (e) {}
                }
                return !1
            }
        }
        ,
        99: (e, t, r) => {
            var n = r(4543);
            e.exports = !n((function() {
                function e() {}
                return e.prototype.constructor = null,
                Object.getPrototypeOf(new e) !== e.prototype
            }
            ))
        }
        ,
        5025: e => {
            e.exports = function(e, t) {
                return {
                    value: e,
                    done: t
                }
            }
        }
        ,
        6587: (e, t, r) => {
            var n = r(5180)
              , i = r(8449)
              , o = r(6372);
            e.exports = n ? function(e, t, r) {
                return i.f(e, t, o(1, r))
            }
            : function(e, t, r) {
                return e[t] = r,
                e
            }
        }
        ,
        6372: e => {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }
        ,
        9904: (e, t, r) => {
            var n = r(9833)
              , i = r(8449)
              , o = r(6372);
            e.exports = function(e, t, r) {
                var a = n(t);
                a in e ? i.f(e, a, o(0, r)) : e[a] = r
            }
        }
        ,
        3642: (e, t, r) => {
            var n = r(27)
              , i = r(8449);
            e.exports = function(e, t, r) {
                return r.get && n(r.get, t, {
                    getter: !0
                }),
                r.set && n(r.set, t, {
                    setter: !0
                }),
                i.f(e, t, r)
            }
        }
        ,
        9704: (e, t, r) => {
            var n = r(6357)
              , i = r(8449)
              , o = r(27)
              , a = r(2969);
            e.exports = function(e, t, r, s) {
                s || (s = {});
                var c = s.enumerable
                  , u = void 0 !== s.name ? s.name : t;
                if (n(r) && o(r, u, s),
                s.global)
                    c ? e[t] = r : a(t, r);
                else {
                    try {
                        s.unsafe ? e[t] && (c = !0) : delete e[t]
                    } catch (e) {}
                    c ? e[t] = r : i.f(e, t, {
                        value: r,
                        enumerable: !1,
                        configurable: !s.nonConfigurable,
                        writable: !s.nonWritable
                    })
                }
                return e
            }
        }
        ,
        6519: (e, t, r) => {
            var n = r(9704);
            e.exports = function(e, t, r) {
                for (var i in t)
                    n(e, i, t[i], r);
                return e
            }
        }
        ,
        2969: (e, t, r) => {
            var n = r(4523)
              , i = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    i(n, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (r) {
                    n[e] = t
                }
                return t
            }
        }
        ,
        5180: (e, t, r) => {
            var n = r(4543);
            e.exports = !n((function() {
                return 7 !== Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }
            ))
        }
        ,
        2155: e => {
            var t = "object" == typeof document && document.all
              , r = void 0 === t && void 0 !== t;
            e.exports = {
                all: t,
                IS_HTMLDDA: r
            }
        }
        ,
        2679: (e, t, r) => {
            var n = r(4523)
              , i = r(1634)
              , o = n.document
              , a = i(o) && i(o.createElement);
            e.exports = function(e) {
                return a ? o.createElement(e) : {}
            }
        }
        ,
        792: e => {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        }
        ,
        832: (e, t, r) => {
            var n = r(2679)("span").classList
              , i = n && n.constructor && n.constructor.prototype;
            e.exports = i === Object.prototype ? void 0 : i
        }
        ,
        4290: (e, t, r) => {
            var n = r(4848).match(/firefox\/(\d+)/i);
            e.exports = !!n && +n[1]
        }
        ,
        2530: (e, t, r) => {
            var n = r(4848);
            e.exports = /MSIE|Trident/.test(n)
        }
        ,
        2224: (e, t, r) => {
            var n = r(4523)
              , i = r(6032);
            e.exports = "process" === i(n.process)
        }
        ,
        4848: e => {
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        }
        ,
        2844: (e, t, r) => {
            var n, i, o = r(4523), a = r(4848), s = o.process, c = o.Deno, u = s && s.versions || c && c.version, l = u && u.v8;
            l && (i = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
            !i && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (i = +n[1]),
            e.exports = i
        }
        ,
        664: (e, t, r) => {
            var n = r(4848).match(/AppleWebKit\/(\d+)\./);
            e.exports = !!n && +n[1]
        }
        ,
        8471: e => {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }
        ,
        6566: (e, t, r) => {
            var n = r(4523)
              , i = r(9763).f
              , o = r(6587)
              , a = r(9704)
              , s = r(2969)
              , c = r(812)
              , u = r(4396);
            e.exports = function(e, t) {
                var r, l, d, h, p, f = e.target, g = e.global, v = e.stat;
                if (r = g ? n : v ? n[f] || s(f, {}) : (n[f] || {}).prototype)
                    for (l in t) {
                        if (h = t[l],
                        d = e.dontCallGetSet ? (p = i(r, l)) && p.value : r[l],
                        !u(g ? l : f + (v ? "." : "#") + l, e.forced) && void 0 !== d) {
                            if (typeof h == typeof d)
                                continue;
                            c(h, d)
                        }
                        (e.sham || d && d.sham) && o(h, "sham", !0),
                        a(r, l, h, e)
                    }
            }
        }
        ,
        4543: e => {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }
        ,
        1644: (e, t, r) => {
            r(3831);
            var n = r(1316)
              , i = r(9704)
              , o = r(8779)
              , a = r(4543)
              , s = r(3683)
              , c = r(6587)
              , u = s("species")
              , l = RegExp.prototype;
            e.exports = function(e, t, r, d) {
                var h = s(e)
                  , p = !a((function() {
                    var t = {};
                    return t[h] = function() {
                        return 7
                    }
                    ,
                    7 !== ""[e](t)
                }
                ))
                  , f = p && !a((function() {
                    var t = !1
                      , r = /a/;
                    return "split" === e && ((r = {}).constructor = {},
                    r.constructor[u] = function() {
                        return r
                    }
                    ,
                    r.flags = "",
                    r[h] = /./[h]),
                    r.exec = function() {
                        return t = !0,
                        null
                    }
                    ,
                    r[h](""),
                    !t
                }
                ));
                if (!p || !f || r) {
                    var g = n(/./[h])
                      , v = t(h, ""[e], (function(e, t, r, i, a) {
                        var s = n(e)
                          , c = t.exec;
                        return c === o || c === l.exec ? p && !a ? {
                            done: !0,
                            value: g(t, r, i)
                        } : {
                            done: !0,
                            value: s(r, t, i)
                        } : {
                            done: !1
                        }
                    }
                    ));
                    i(String.prototype, e, v[0]),
                    i(l, h, v[1])
                }
                d && c(l[h], "sham", !0)
            }
        }
        ,
        5240: (e, t, r) => {
            var n = r(4543);
            e.exports = !n((function() {
                return Object.isExtensible(Object.preventExtensions({}))
            }
            ))
        }
        ,
        1881: (e, t, r) => {
            var n = r(9944)
              , i = Function.prototype
              , o = i.apply
              , a = i.call;
            e.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(o) : function() {
                return a.apply(o, arguments)
            }
            )
        }
        ,
        1232: (e, t, r) => {
            var n = r(1316)
              , i = r(9386)
              , o = r(9944)
              , a = n(n.bind);
            e.exports = function(e, t) {
                return i(e),
                void 0 === t ? e : o ? a(e, t) : function() {
                    return e.apply(t, arguments)
                }
            }
        }
        ,
        9944: (e, t, r) => {
            var n = r(4543);
            e.exports = !n((function() {
                var e = function() {}
                .bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }
            ))
        }
        ,
        2957: (e, t, r) => {
            var n = r(9944)
              , i = Function.prototype.call;
            e.exports = n ? i.bind(i) : function() {
                return i.apply(i, arguments)
            }
        }
        ,
        94: (e, t, r) => {
            var n = r(5180)
              , i = r(5889)
              , o = Function.prototype
              , a = n && Object.getOwnPropertyDescriptor
              , s = i(o, "name")
              , c = s && "something" === function() {}
            .name
              , u = s && (!n || n && a(o, "name").configurable);
            e.exports = {
                EXISTS: s,
                PROPER: c,
                CONFIGURABLE: u
            }
        }
        ,
        2946: (e, t, r) => {
            var n = r(1008)
              , i = r(9386);
            e.exports = function(e, t, r) {
                try {
                    return n(i(Object.getOwnPropertyDescriptor(e, t)[r]))
                } catch (e) {}
            }
        }
        ,
        1316: (e, t, r) => {
            var n = r(6032)
              , i = r(1008);
            e.exports = function(e) {
                if ("Function" === n(e))
                    return i(e)
            }
        }
        ,
        1008: (e, t, r) => {
            var n = r(9944)
              , i = Function.prototype
              , o = i.call
              , a = n && i.bind.bind(o, o);
            e.exports = n ? a : function(e) {
                return function() {
                    return o.apply(e, arguments)
                }
            }
        }
        ,
        7735: (e, t, r) => {
            var n = r(4523)
              , i = r(6357);
            e.exports = function(e, t) {
                return arguments.length < 2 ? (r = n[e],
                i(r) ? r : void 0) : n[e] && n[e][t];
                var r
            }
        }
        ,
        787: (e, t, r) => {
            var n = r(7611)
              , i = r(6046)
              , o = r(3445)
              , a = r(7869)
              , s = r(3683)("iterator");
            e.exports = function(e) {
                if (!o(e))
                    return i(e, s) || i(e, "@@iterator") || a[n(e)]
            }
        }
        ,
        6417: (e, t, r) => {
            var n = r(2957)
              , i = r(9386)
              , o = r(151)
              , a = r(215)
              , s = r(787)
              , c = TypeError;
            e.exports = function(e, t) {
                var r = arguments.length < 2 ? s(e) : t;
                if (i(r))
                    return o(n(r, e));
                throw new c(a(e) + " is not iterable")
            }
        }
        ,
        6046: (e, t, r) => {
            var n = r(9386)
              , i = r(3445);
            e.exports = function(e, t) {
                var r = e[t];
                return i(r) ? void 0 : n(r)
            }
        }
        ,
        9070: (e, t, r) => {
            var n = r(1008)
              , i = r(581)
              , o = Math.floor
              , a = n("".charAt)
              , s = n("".replace)
              , c = n("".slice)
              , u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g
              , l = /\$([$&'`]|\d{1,2})/g;
            e.exports = function(e, t, r, n, d, h) {
                var p = r + e.length
                  , f = n.length
                  , g = l;
                return void 0 !== d && (d = i(d),
                g = u),
                s(h, g, (function(i, s) {
                    var u;
                    switch (a(s, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return c(t, 0, r);
                    case "'":
                        return c(t, p);
                    case "<":
                        u = d[c(s, 1, -1)];
                        break;
                    default:
                        var l = +s;
                        if (0 === l)
                            return i;
                        if (l > f) {
                            var h = o(l / 10);
                            return 0 === h ? i : h <= f ? void 0 === n[h - 1] ? a(s, 1) : n[h - 1] + a(s, 1) : i
                        }
                        u = n[l - 1]
                    }
                    return void 0 === u ? "" : u
                }
                ))
            }
        }
        ,
        4523: function(e, t, r) {
            var n = function(e) {
                return e && e.Math === Math && e
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function() {
                return this
            }() || this || Function("return this")()
        },
        5889: (e, t, r) => {
            var n = r(1008)
              , i = r(581)
              , o = n({}.hasOwnProperty);
            e.exports = Object.hasOwn || function(e, t) {
                return o(i(e), t)
            }
        }
        ,
        5525: e => {
            e.exports = {}
        }
        ,
        2093: (e, t, r) => {
            var n = r(7735);
            e.exports = n("document", "documentElement")
        }
        ,
        9053: (e, t, r) => {
            var n = r(5180)
              , i = r(4543)
              , o = r(2679);
            e.exports = !n && !i((function() {
                return 7 !== Object.defineProperty(o("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        }
        ,
        5498: e => {
            var t = Array
              , r = Math.abs
              , n = Math.pow
              , i = Math.floor
              , o = Math.log
              , a = Math.LN2;
            e.exports = {
                pack: function(e, s, c) {
                    var u, l, d, h = t(c), p = 8 * c - s - 1, f = (1 << p) - 1, g = f >> 1, v = 23 === s ? n(2, -24) - n(2, -77) : 0, m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0, y = 0;
                    for ((e = r(e)) != e || e === 1 / 0 ? (l = e != e ? 1 : 0,
                    u = f) : (u = i(o(e) / a),
                    e * (d = n(2, -u)) < 1 && (u--,
                    d *= 2),
                    (e += u + g >= 1 ? v / d : v * n(2, 1 - g)) * d >= 2 && (u++,
                    d /= 2),
                    u + g >= f ? (l = 0,
                    u = f) : u + g >= 1 ? (l = (e * d - 1) * n(2, s),
                    u += g) : (l = e * n(2, g - 1) * n(2, s),
                    u = 0)); s >= 8; )
                        h[y++] = 255 & l,
                        l /= 256,
                        s -= 8;
                    for (u = u << s | l,
                    p += s; p > 0; )
                        h[y++] = 255 & u,
                        u /= 256,
                        p -= 8;
                    return h[--y] |= 128 * m,
                    h
                },
                unpack: function(e, t) {
                    var r, i = e.length, o = 8 * i - t - 1, a = (1 << o) - 1, s = a >> 1, c = o - 7, u = i - 1, l = e[u--], d = 127 & l;
                    for (l >>= 7; c > 0; )
                        d = 256 * d + e[u--],
                        c -= 8;
                    for (r = d & (1 << -c) - 1,
                    d >>= -c,
                    c += t; c > 0; )
                        r = 256 * r + e[u--],
                        c -= 8;
                    if (0 === d)
                        d = 1 - s;
                    else {
                        if (d === a)
                            return r ? NaN : l ? -1 / 0 : 1 / 0;
                        r += n(2, t),
                        d -= s
                    }
                    return (l ? -1 : 1) * r * n(2, d - t)
                }
            }
        }
        ,
        191: (e, t, r) => {
            var n = r(1008)
              , i = r(4543)
              , o = r(6032)
              , a = Object
              , s = n("".split);
            e.exports = i((function() {
                return !a("z").propertyIsEnumerable(0)
            }
            )) ? function(e) {
                return "String" === o(e) ? s(e, "") : a(e)
            }
            : a
        }
        ,
        3103: (e, t, r) => {
            var n = r(6357)
              , i = r(1634)
              , o = r(7943);
            e.exports = function(e, t, r) {
                var a, s;
                return o && n(a = t.constructor) && a !== r && i(s = a.prototype) && s !== r.prototype && o(e, s),
                e
            }
        }
        ,
        6842: (e, t, r) => {
            var n = r(1008)
              , i = r(6357)
              , o = r(3965)
              , a = n(Function.toString);
            i(o.inspectSource) || (o.inspectSource = function(e) {
                return a(e)
            }
            ),
            e.exports = o.inspectSource
        }
        ,
        8907: (e, t, r) => {
            var n = r(6566)
              , i = r(1008)
              , o = r(5525)
              , a = r(1634)
              , s = r(5889)
              , c = r(8449).f
              , u = r(9712)
              , l = r(3834)
              , d = r(3452)
              , h = r(6048)
              , p = r(5240)
              , f = !1
              , g = h("meta")
              , v = 0
              , m = function(e) {
                c(e, g, {
                    value: {
                        objectID: "O" + v++,
                        weakData: {}
                    }
                })
            }
              , y = e.exports = {
                enable: function() {
                    y.enable = function() {}
                    ,
                    f = !0;
                    var e = u.f
                      , t = i([].splice)
                      , r = {};
                    r[g] = 1,
                    e(r).length && (u.f = function(r) {
                        for (var n = e(r), i = 0, o = n.length; i < o; i++)
                            if (n[i] === g) {
                                t(n, i, 1);
                                break
                            }
                        return n
                    }
                    ,
                    n({
                        target: "Object",
                        stat: !0,
                        forced: !0
                    }, {
                        getOwnPropertyNames: l.f
                    }))
                },
                fastKey: function(e, t) {
                    if (!a(e))
                        return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!s(e, g)) {
                        if (!d(e))
                            return "F";
                        if (!t)
                            return "E";
                        m(e)
                    }
                    return e[g].objectID
                },
                getWeakData: function(e, t) {
                    if (!s(e, g)) {
                        if (!d(e))
                            return !0;
                        if (!t)
                            return !1;
                        m(e)
                    }
                    return e[g].weakData
                },
                onFreeze: function(e) {
                    return p && f && d(e) && !s(e, g) && m(e),
                    e
                }
            };
            o[g] = !0
        }
        ,
        4317: (e, t, r) => {
            var n, i, o, a = r(158), s = r(4523), c = r(1634), u = r(6587), l = r(5889), d = r(3965), h = r(9847), p = r(5525), f = "Object already initialized", g = s.TypeError, v = s.WeakMap;
            if (a || d.state) {
                var m = d.state || (d.state = new v);
                m.get = m.get,
                m.has = m.has,
                m.set = m.set,
                n = function(e, t) {
                    if (m.has(e))
                        throw new g(f);
                    return t.facade = e,
                    m.set(e, t),
                    t
                }
                ,
                i = function(e) {
                    return m.get(e) || {}
                }
                ,
                o = function(e) {
                    return m.has(e)
                }
            } else {
                var y = h("state");
                p[y] = !0,
                n = function(e, t) {
                    if (l(e, y))
                        throw new g(f);
                    return t.facade = e,
                    u(e, y, t),
                    t
                }
                ,
                i = function(e) {
                    return l(e, y) ? e[y] : {}
                }
                ,
                o = function(e) {
                    return l(e, y)
                }
            }
            e.exports = {
                set: n,
                get: i,
                has: o,
                enforce: function(e) {
                    return o(e) ? i(e) : n(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var r;
                        if (!c(t) || (r = i(t)).type !== e)
                            throw new g("Incompatible receiver, " + e + " required");
                        return r
                    }
                }
            }
        }
        ,
        5745: (e, t, r) => {
            var n = r(3683)
              , i = r(7869)
              , o = n("iterator")
              , a = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (i.Array === e || a[o] === e)
            }
        }
        ,
        6872: (e, t, r) => {
            var n = r(6032);
            e.exports = Array.isArray || function(e) {
                return "Array" === n(e)
            }
        }
        ,
        5319: (e, t, r) => {
            var n = r(7611);
            e.exports = function(e) {
                var t = n(e);
                return "BigInt64Array" === t || "BigUint64Array" === t
            }
        }
        ,
        6357: (e, t, r) => {
            var n = r(2155)
              , i = n.all;
            e.exports = n.IS_HTMLDDA ? function(e) {
                return "function" == typeof e || e === i
            }
            : function(e) {
                return "function" == typeof e
            }
        }
        ,
        6653: (e, t, r) => {
            var n = r(1008)
              , i = r(4543)
              , o = r(6357)
              , a = r(7611)
              , s = r(7735)
              , c = r(6842)
              , u = function() {}
              , l = []
              , d = s("Reflect", "construct")
              , h = /^\s*(?:class|function)\b/
              , p = n(h.exec)
              , f = !h.test(u)
              , g = function(e) {
                if (!o(e))
                    return !1;
                try {
                    return d(u, l, e),
                    !0
                } catch (e) {
                    return !1
                }
            }
              , v = function(e) {
                if (!o(e))
                    return !1;
                switch (a(e)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
                }
                try {
                    return f || !!p(h, c(e))
                } catch (e) {
                    return !0
                }
            };
            v.sham = !0,
            e.exports = !d || i((function() {
                var e;
                return g(g.call) || !g(Object) || !g((function() {
                    e = !0
                }
                )) || e
            }
            )) ? v : g
        }
        ,
        4396: (e, t, r) => {
            var n = r(4543)
              , i = r(6357)
              , o = /#|\.prototype\./
              , a = function(e, t) {
                var r = c[s(e)];
                return r === l || r !== u && (i(t) ? n(t) : !!t)
            }
              , s = a.normalize = function(e) {
                return String(e).replace(o, ".").toLowerCase()
            }
              , c = a.data = {}
              , u = a.NATIVE = "N"
              , l = a.POLYFILL = "P";
            e.exports = a
        }
        ,
        1463: (e, t, r) => {
            var n = r(1634)
              , i = Math.floor;
            e.exports = Number.isInteger || function(e) {
                return !n(e) && isFinite(e) && i(e) === e
            }
        }
        ,
        3445: e => {
            e.exports = function(e) {
                return null == e
            }
        }
        ,
        1634: (e, t, r) => {
            var n = r(6357)
              , i = r(2155)
              , o = i.all;
            e.exports = i.IS_HTMLDDA ? function(e) {
                return "object" == typeof e ? null !== e : n(e) || e === o
            }
            : function(e) {
                return "object" == typeof e ? null !== e : n(e)
            }
        }
        ,
        7051: e => {
            e.exports = !1
        }
        ,
        2388: (e, t, r) => {
            var n = r(1634)
              , i = r(6032)
              , o = r(3683)("match");
            e.exports = function(e) {
                var t;
                return n(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" === i(e))
            }
        }
        ,
        2357: (e, t, r) => {
            var n = r(7735)
              , i = r(6357)
              , o = r(5161)
              , a = r(2496)
              , s = Object;
            e.exports = a ? function(e) {
                return "symbol" == typeof e
            }
            : function(e) {
                var t = n("Symbol");
                return i(t) && o(t.prototype, s(e))
            }
        }
        ,
        3308: (e, t, r) => {
            var n = r(1232)
              , i = r(2957)
              , o = r(151)
              , a = r(215)
              , s = r(5745)
              , c = r(5526)
              , u = r(5161)
              , l = r(6417)
              , d = r(787)
              , h = r(2675)
              , p = TypeError
              , f = function(e, t) {
                this.stopped = e,
                this.result = t
            }
              , g = f.prototype;
            e.exports = function(e, t, r) {
                var v, m, y, E, _, b, I, S = r && r.that, w = !(!r || !r.AS_ENTRIES), O = !(!r || !r.IS_RECORD), C = !(!r || !r.IS_ITERATOR), T = !(!r || !r.INTERRUPTED), A = n(t, S), P = function(e) {
                    return v && h(v, "normal", e),
                    new f(!0,e)
                }, R = function(e) {
                    return w ? (o(e),
                    T ? A(e[0], e[1], P) : A(e[0], e[1])) : T ? A(e, P) : A(e)
                };
                if (O)
                    v = e.iterator;
                else if (C)
                    v = e;
                else {
                    if (!(m = d(e)))
                        throw new p(a(e) + " is not iterable");
                    if (s(m)) {
                        for (y = 0,
                        E = c(e); E > y; y++)
                            if ((_ = R(e[y])) && u(g, _))
                                return _;
                        return new f(!1)
                    }
                    v = l(e, m)
                }
                for (b = O ? e.next : v.next; !(I = i(b, v)).done; ) {
                    try {
                        _ = R(I.value)
                    } catch (e) {
                        h(v, "throw", e)
                    }
                    if ("object" == typeof _ && _ && u(g, _))
                        return _
                }
                return new f(!1)
            }
        }
        ,
        2675: (e, t, r) => {
            var n = r(2957)
              , i = r(151)
              , o = r(6046);
            e.exports = function(e, t, r) {
                var a, s;
                i(e);
                try {
                    if (!(a = o(e, "return"))) {
                        if ("throw" === t)
                            throw r;
                        return r
                    }
                    a = n(a, e)
                } catch (e) {
                    s = !0,
                    a = e
                }
                if ("throw" === t)
                    throw r;
                if (s)
                    throw a;
                return i(a),
                r
            }
        }
        ,
        714: (e, t, r) => {
            var n = r(793).IteratorPrototype
              , i = r(2104)
              , o = r(6372)
              , a = r(6143)
              , s = r(7869)
              , c = function() {
                return this
            };
            e.exports = function(e, t, r, u) {
                var l = t + " Iterator";
                return e.prototype = i(n, {
                    next: o(+!u, r)
                }),
                a(e, l, !1, !0),
                s[l] = c,
                e
            }
        }
        ,
        3952: (e, t, r) => {
            var n = r(6566)
              , i = r(2957)
              , o = r(7051)
              , a = r(94)
              , s = r(6357)
              , c = r(714)
              , u = r(7763)
              , l = r(7943)
              , d = r(6143)
              , h = r(6587)
              , p = r(9704)
              , f = r(3683)
              , g = r(7869)
              , v = r(793)
              , m = a.PROPER
              , y = a.CONFIGURABLE
              , E = v.IteratorPrototype
              , _ = v.BUGGY_SAFARI_ITERATORS
              , b = f("iterator")
              , I = "keys"
              , S = "values"
              , w = "entries"
              , O = function() {
                return this
            };
            e.exports = function(e, t, r, a, f, v, C) {
                c(r, t, a);
                var T, A, P, R = function(e) {
                    if (e === f && k)
                        return k;
                    if (!_ && e && e in L)
                        return L[e];
                    switch (e) {
                    case I:
                    case S:
                    case w:
                        return function() {
                            return new r(this,e)
                        }
                    }
                    return function() {
                        return new r(this)
                    }
                }, N = t + " Iterator", D = !1, L = e.prototype, x = L[b] || L["@@iterator"] || f && L[f], k = !_ && x || R(f), M = "Array" === t && L.entries || x;
                if (M && (T = u(M.call(new e))) !== Object.prototype && T.next && (o || u(T) === E || (l ? l(T, E) : s(T[b]) || p(T, b, O)),
                d(T, N, !0, !0),
                o && (g[N] = O)),
                m && f === S && x && x.name !== S && (!o && y ? h(L, "name", S) : (D = !0,
                k = function() {
                    return i(x, this)
                }
                )),
                f)
                    if (A = {
                        values: R(S),
                        keys: v ? k : R(I),
                        entries: R(w)
                    },
                    C)
                        for (P in A)
                            (_ || D || !(P in L)) && p(L, P, A[P]);
                    else
                        n({
                            target: t,
                            proto: !0,
                            forced: _ || D
                        }, A);
                return o && !C || L[b] === k || p(L, b, k, {
                    name: f
                }),
                g[t] = k,
                A
            }
        }
        ,
        793: (e, t, r) => {
            var n, i, o, a = r(4543), s = r(6357), c = r(1634), u = r(2104), l = r(7763), d = r(9704), h = r(3683), p = r(7051), f = h("iterator"), g = !1;
            [].keys && ("next"in (o = [].keys()) ? (i = l(l(o))) !== Object.prototype && (n = i) : g = !0),
            !c(n) || a((function() {
                var e = {};
                return n[f].call(e) !== e
            }
            )) ? n = {} : p && (n = u(n)),
            s(n[f]) || d(n, f, (function() {
                return this
            }
            )),
            e.exports = {
                IteratorPrototype: n,
                BUGGY_SAFARI_ITERATORS: g
            }
        }
        ,
        7869: e => {
            e.exports = {}
        }
        ,
        5526: (e, t, r) => {
            var n = r(5966);
            e.exports = function(e) {
                return n(e.length)
            }
        }
        ,
        27: (e, t, r) => {
            var n = r(1008)
              , i = r(4543)
              , o = r(6357)
              , a = r(5889)
              , s = r(5180)
              , c = r(94).CONFIGURABLE
              , u = r(6842)
              , l = r(4317)
              , d = l.enforce
              , h = l.get
              , p = String
              , f = Object.defineProperty
              , g = n("".slice)
              , v = n("".replace)
              , m = n([].join)
              , y = s && !i((function() {
                return 8 !== f((function() {}
                ), "length", {
                    value: 8
                }).length
            }
            ))
              , E = String(String).split("String")
              , _ = e.exports = function(e, t, r) {
                "Symbol(" === g(p(t), 0, 7) && (t = "[" + v(p(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
                r && r.getter && (t = "get " + t),
                r && r.setter && (t = "set " + t),
                (!a(e, "name") || c && e.name !== t) && (s ? f(e, "name", {
                    value: t,
                    configurable: !0
                }) : e.name = t),
                y && r && a(r, "arity") && e.length !== r.arity && f(e, "length", {
                    value: r.arity
                });
                try {
                    r && a(r, "constructor") && r.constructor ? s && f(e, "prototype", {
                        writable: !1
                    }) : e.prototype && (e.prototype = void 0)
                } catch (e) {}
                var n = d(e);
                return a(n, "source") || (n.source = m(E, "string" == typeof t ? t : "")),
                e
            }
            ;
            Function.prototype.toString = _((function() {
                return o(this) && h(this).source || u(this)
            }
            ), "toString")
        }
        ,
        9756: (e, t, r) => {
            var n = r(9382)
              , i = Math.abs
              , o = 2220446049250313e-31
              , a = 1 / o;
            e.exports = function(e, t, r, s) {
                var c = +e
                  , u = i(c)
                  , l = n(c);
                if (u < s)
                    return l * function(e) {
                        return e + a - a
                    }(u / s / t) * s * t;
                var d = (1 + t / o) * u
                  , h = d - (d - u);
                return h > r || h != h ? l * (1 / 0) : l * h
            }
        }
        ,
        721: (e, t, r) => {
            var n = r(9756);
            e.exports = Math.fround || function(e) {
                return n(e, 1.1920928955078125e-7, 34028234663852886e22, 11754943508222875e-54)
            }
        }
        ,
        9382: e => {
            e.exports = Math.sign || function(e) {
                var t = +e;
                return 0 === t || t != t ? t : t < 0 ? -1 : 1
            }
        }
        ,
        4469: e => {
            var t = Math.ceil
              , r = Math.floor;
            e.exports = Math.trunc || function(e) {
                var n = +e;
                return (n > 0 ? r : t)(n)
            }
        }
        ,
        495: (e, t, r) => {
            var n = r(2388)
              , i = TypeError;
            e.exports = function(e) {
                if (n(e))
                    throw new i("The method doesn't accept regular expressions");
                return e
            }
        }
        ,
        3280: (e, t, r) => {
            var n = r(4523)
              , i = r(4543)
              , o = r(1008)
              , a = r(2255)
              , s = r(8906).trim
              , c = r(8908)
              , u = o("".charAt)
              , l = n.parseFloat
              , d = n.Symbol
              , h = d && d.iterator
              , p = 1 / l(c + "-0") != -1 / 0 || h && !i((function() {
                l(Object(h))
            }
            ));
            e.exports = p ? function(e) {
                var t = s(a(e))
                  , r = l(t);
                return 0 === r && "-" === u(t, 0) ? -0 : r
            }
            : l
        }
        ,
        3957: (e, t, r) => {
            var n = r(5180)
              , i = r(1008)
              , o = r(2957)
              , a = r(4543)
              , s = r(2528)
              , c = r(2981)
              , u = r(5)
              , l = r(581)
              , d = r(191)
              , h = Object.assign
              , p = Object.defineProperty
              , f = i([].concat);
            e.exports = !h || a((function() {
                if (n && 1 !== h({
                    b: 1
                }, h(p({}, "a", {
                    enumerable: !0,
                    get: function() {
                        p(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b)
                    return !0;
                var e = {}
                  , t = {}
                  , r = Symbol("assign detection")
                  , i = "abcdefghijklmnopqrst";
                return e[r] = 7,
                i.split("").forEach((function(e) {
                    t[e] = e
                }
                )),
                7 !== h({}, e)[r] || s(h({}, t)).join("") !== i
            }
            )) ? function(e, t) {
                for (var r = l(e), i = arguments.length, a = 1, h = c.f, p = u.f; i > a; )
                    for (var g, v = d(arguments[a++]), m = h ? f(s(v), h(v)) : s(v), y = m.length, E = 0; y > E; )
                        g = m[E++],
                        n && !o(p, v, g) || (r[g] = v[g]);
                return r
            }
            : h
        }
        ,
        2104: (e, t, r) => {
            var n, i = r(151), o = r(8337), a = r(8471), s = r(5525), c = r(2093), u = r(2679), l = r(9847), d = "prototype", h = "script", p = l("IE_PROTO"), f = function() {}, g = function(e) {
                return "<" + h + ">" + e + "</" + h + ">"
            }, v = function(e) {
                e.write(g("")),
                e.close();
                var t = e.parentWindow.Object;
                return e = null,
                t
            }, m = function() {
                try {
                    n = new ActiveXObject("htmlfile")
                } catch (e) {}
                var e, t, r;
                m = "undefined" != typeof document ? document.domain && n ? v(n) : (t = u("iframe"),
                r = "java" + h + ":",
                t.style.display = "none",
                c.appendChild(t),
                t.src = String(r),
                (e = t.contentWindow.document).open(),
                e.write(g("document.F=Object")),
                e.close(),
                e.F) : v(n);
                for (var i = a.length; i--; )
                    delete m[d][a[i]];
                return m()
            };
            s[p] = !0,
            e.exports = Object.create || function(e, t) {
                var r;
                return null !== e ? (f[d] = i(e),
                r = new f,
                f[d] = null,
                r[p] = e) : r = m(),
                void 0 === t ? r : o.f(r, t)
            }
        }
        ,
        8337: (e, t, r) => {
            var n = r(5180)
              , i = r(7310)
              , o = r(8449)
              , a = r(151)
              , s = r(853)
              , c = r(2528);
            t.f = n && !i ? Object.defineProperties : function(e, t) {
                a(e);
                for (var r, n = s(t), i = c(t), u = i.length, l = 0; u > l; )
                    o.f(e, r = i[l++], n[r]);
                return e
            }
        }
        ,
        8449: (e, t, r) => {
            var n = r(5180)
              , i = r(9053)
              , o = r(7310)
              , a = r(151)
              , s = r(9833)
              , c = TypeError
              , u = Object.defineProperty
              , l = Object.getOwnPropertyDescriptor
              , d = "enumerable"
              , h = "configurable"
              , p = "writable";
            t.f = n ? o ? function(e, t, r) {
                if (a(e),
                t = s(t),
                a(r),
                "function" == typeof e && "prototype" === t && "value"in r && p in r && !r[p]) {
                    var n = l(e, t);
                    n && n[p] && (e[t] = r.value,
                    r = {
                        configurable: h in r ? r[h] : n[h],
                        enumerable: d in r ? r[d] : n[d],
                        writable: !1
                    })
                }
                return u(e, t, r)
            }
            : u : function(e, t, r) {
                if (a(e),
                t = s(t),
                a(r),
                i)
                    try {
                        return u(e, t, r)
                    } catch (e) {}
                if ("get"in r || "set"in r)
                    throw new c("Accessors not supported");
                return "value"in r && (e[t] = r.value),
                e
            }
        }
        ,
        9763: (e, t, r) => {
            var n = r(5180)
              , i = r(2957)
              , o = r(5)
              , a = r(6372)
              , s = r(853)
              , c = r(9833)
              , u = r(5889)
              , l = r(9053)
              , d = Object.getOwnPropertyDescriptor;
            t.f = n ? d : function(e, t) {
                if (e = s(e),
                t = c(t),
                l)
                    try {
                        return d(e, t)
                    } catch (e) {}
                if (u(e, t))
                    return a(!i(o.f, e, t), e[t])
            }
        }
        ,
        3834: (e, t, r) => {
            var n = r(6032)
              , i = r(853)
              , o = r(9712).f
              , a = r(231)
              , s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function(e) {
                return s && "Window" === n(e) ? function(e) {
                    try {
                        return o(e)
                    } catch (e) {
                        return a(s)
                    }
                }(e) : o(i(e))
            }
        }
        ,
        9712: (e, t, r) => {
            var n = r(1156)
              , i = r(8471).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return n(e, i)
            }
        }
        ,
        2981: (e, t) => {
            t.f = Object.getOwnPropertySymbols
        }
        ,
        7763: (e, t, r) => {
            var n = r(5889)
              , i = r(6357)
              , o = r(581)
              , a = r(9847)
              , s = r(99)
              , c = a("IE_PROTO")
              , u = Object
              , l = u.prototype;
            e.exports = s ? u.getPrototypeOf : function(e) {
                var t = o(e);
                if (n(t, c))
                    return t[c];
                var r = t.constructor;
                return i(r) && t instanceof r ? r.prototype : t instanceof u ? l : null
            }
        }
        ,
        3452: (e, t, r) => {
            var n = r(4543)
              , i = r(1634)
              , o = r(6032)
              , a = r(2372)
              , s = Object.isExtensible
              , c = n((function() {
                s(1)
            }
            ));
            e.exports = c || a ? function(e) {
                return !!i(e) && (!a || "ArrayBuffer" !== o(e)) && (!s || s(e))
            }
            : s
        }
        ,
        5161: (e, t, r) => {
            var n = r(1008);
            e.exports = n({}.isPrototypeOf)
        }
        ,
        1156: (e, t, r) => {
            var n = r(1008)
              , i = r(5889)
              , o = r(853)
              , a = r(2753).indexOf
              , s = r(5525)
              , c = n([].push);
            e.exports = function(e, t) {
                var r, n = o(e), u = 0, l = [];
                for (r in n)
                    !i(s, r) && i(n, r) && c(l, r);
                for (; t.length > u; )
                    i(n, r = t[u++]) && (~a(l, r) || c(l, r));
                return l
            }
        }
        ,
        2528: (e, t, r) => {
            var n = r(1156)
              , i = r(8471);
            e.exports = Object.keys || function(e) {
                return n(e, i)
            }
        }
        ,
        5: (e, t) => {
            var r = {}.propertyIsEnumerable
              , n = Object.getOwnPropertyDescriptor
              , i = n && !r.call({
                1: 2
            }, 1);
            t.f = i ? function(e) {
                var t = n(this, e);
                return !!t && t.enumerable
            }
            : r
        }
        ,
        7943: (e, t, r) => {
            var n = r(2946)
              , i = r(151)
              , o = r(2834);
            e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
                var e, t = !1, r = {};
                try {
                    (e = n(Object.prototype, "__proto__", "set"))(r, []),
                    t = r instanceof Array
                } catch (e) {}
                return function(r, n) {
                    return i(r),
                    o(n),
                    t ? e(r, n) : r.__proto__ = n,
                    r
                }
            }() : void 0)
        }
        ,
        5221: (e, t, r) => {
            var n = r(5180)
              , i = r(4543)
              , o = r(1008)
              , a = r(7763)
              , s = r(2528)
              , c = r(853)
              , u = o(r(5).f)
              , l = o([].push)
              , d = n && i((function() {
                var e = Object.create(null);
                return e[2] = 2,
                !u(e, 2)
            }
            ))
              , h = function(e) {
                return function(t) {
                    for (var r, i = c(t), o = s(i), h = d && null === a(i), p = o.length, f = 0, g = []; p > f; )
                        r = o[f++],
                        n && !(h ? r in i : u(i, r)) || l(g, e ? [r, i[r]] : i[r]);
                    return g
                }
            };
            e.exports = {
                entries: h(!0),
                values: h(!1)
            }
        }
        ,
        5774: (e, t, r) => {
            var n = r(2957)
              , i = r(6357)
              , o = r(1634)
              , a = TypeError;
            e.exports = function(e, t) {
                var r, s;
                if ("string" === t && i(r = e.toString) && !o(s = n(r, e)))
                    return s;
                if (i(r = e.valueOf) && !o(s = n(r, e)))
                    return s;
                if ("string" !== t && i(r = e.toString) && !o(s = n(r, e)))
                    return s;
                throw new a("Can't convert object to primitive value")
            }
        }
        ,
        7527: (e, t, r) => {
            var n = r(7735)
              , i = r(1008)
              , o = r(9712)
              , a = r(2981)
              , s = r(151)
              , c = i([].concat);
            e.exports = n("Reflect", "ownKeys") || function(e) {
                var t = o.f(s(e))
                  , r = a.f;
                return r ? c(t, r(e)) : t
            }
        }
        ,
        4192: (e, t, r) => {
            var n = r(8449).f;
            e.exports = function(e, t, r) {
                r in e || n(e, r, {
                    configurable: !0,
                    get: function() {
                        return t[r]
                    },
                    set: function(e) {
                        t[r] = e
                    }
                })
            }
        }
        ,
        6010: (e, t, r) => {
            var n = r(2957)
              , i = r(151)
              , o = r(6357)
              , a = r(6032)
              , s = r(8779)
              , c = TypeError;
            e.exports = function(e, t) {
                var r = e.exec;
                if (o(r)) {
                    var u = n(r, e, t);
                    return null !== u && i(u),
                    u
                }
                if ("RegExp" === a(e))
                    return n(s, e, t);
                throw new c("RegExp#exec called on incompatible receiver")
            }
        }
        ,
        8779: (e, t, r) => {
            var n, i, o = r(2957), a = r(1008), s = r(2255), c = r(4315), u = r(9933), l = r(9441), d = r(2104), h = r(4317).get, p = r(3027), f = r(8702), g = l("native-string-replace", String.prototype.replace), v = RegExp.prototype.exec, m = v, y = a("".charAt), E = a("".indexOf), _ = a("".replace), b = a("".slice), I = (i = /b*/g,
            o(v, n = /a/, "a"),
            o(v, i, "a"),
            0 !== n.lastIndex || 0 !== i.lastIndex), S = u.BROKEN_CARET, w = void 0 !== /()??/.exec("")[1];
            (I || w || S || p || f) && (m = function(e) {
                var t, r, n, i, a, u, l, p = this, f = h(p), O = s(e), C = f.raw;
                if (C)
                    return C.lastIndex = p.lastIndex,
                    t = o(m, C, O),
                    p.lastIndex = C.lastIndex,
                    t;
                var T = f.groups
                  , A = S && p.sticky
                  , P = o(c, p)
                  , R = p.source
                  , N = 0
                  , D = O;
                if (A && (P = _(P, "y", ""),
                -1 === E(P, "g") && (P += "g"),
                D = b(O, p.lastIndex),
                p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== y(O, p.lastIndex - 1)) && (R = "(?: " + R + ")",
                D = " " + D,
                N++),
                r = new RegExp("^(?:" + R + ")",P)),
                w && (r = new RegExp("^" + R + "$(?!\\s)",P)),
                I && (n = p.lastIndex),
                i = o(v, A ? r : p, D),
                A ? i ? (i.input = b(i.input, N),
                i[0] = b(i[0], N),
                i.index = p.lastIndex,
                p.lastIndex += i[0].length) : p.lastIndex = 0 : I && i && (p.lastIndex = p.global ? i.index + i[0].length : n),
                w && i && i.length > 1 && o(g, i[0], r, (function() {
                    for (a = 1; a < arguments.length - 2; a++)
                        void 0 === arguments[a] && (i[a] = void 0)
                }
                )),
                i && T)
                    for (i.groups = u = d(null),
                    a = 0; a < T.length; a++)
                        u[(l = T[a])[0]] = i[l[1]];
                return i
            }
            ),
            e.exports = m
        }
        ,
        4315: (e, t, r) => {
            var n = r(151);
            e.exports = function() {
                var e = n(this)
                  , t = "";
                return e.hasIndices && (t += "d"),
                e.global && (t += "g"),
                e.ignoreCase && (t += "i"),
                e.multiline && (t += "m"),
                e.dotAll && (t += "s"),
                e.unicode && (t += "u"),
                e.unicodeSets && (t += "v"),
                e.sticky && (t += "y"),
                t
            }
        }
        ,
        1274: (e, t, r) => {
            var n = r(2957)
              , i = r(5889)
              , o = r(5161)
              , a = r(4315)
              , s = RegExp.prototype;
            e.exports = function(e) {
                var t = e.flags;
                return void 0 !== t || "flags"in s || i(e, "flags") || !o(s, e) ? t : n(a, e)
            }
        }
        ,
        9933: (e, t, r) => {
            var n = r(4543)
              , i = r(4523).RegExp
              , o = n((function() {
                var e = i("a", "y");
                return e.lastIndex = 2,
                null !== e.exec("abcd")
            }
            ))
              , a = o || n((function() {
                return !i("a", "y").sticky
            }
            ))
              , s = o || n((function() {
                var e = i("^r", "gy");
                return e.lastIndex = 2,
                null !== e.exec("str")
            }
            ));
            e.exports = {
                BROKEN_CARET: s,
                MISSED_STICKY: a,
                UNSUPPORTED_Y: o
            }
        }
        ,
        3027: (e, t, r) => {
            var n = r(4543)
              , i = r(4523).RegExp;
            e.exports = n((function() {
                var e = i(".", "s");
                return !(e.dotAll && e.test("\n") && "s" === e.flags)
            }
            ))
        }
        ,
        8702: (e, t, r) => {
            var n = r(4543)
              , i = r(4523).RegExp;
            e.exports = n((function() {
                var e = i("(?<a>b)", "g");
                return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
            }
            ))
        }
        ,
        9286: (e, t, r) => {
            var n = r(3445)
              , i = TypeError;
            e.exports = function(e) {
                if (n(e))
                    throw new i("Can't call method on " + e);
                return e
            }
        }
        ,
        9089: (e, t, r) => {
            var n = r(7735)
              , i = r(3642)
              , o = r(3683)
              , a = r(5180)
              , s = o("species");
            e.exports = function(e) {
                var t = n(e);
                a && t && !t[s] && i(t, s, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }
        ,
        6143: (e, t, r) => {
            var n = r(8449).f
              , i = r(5889)
              , o = r(3683)("toStringTag");
            e.exports = function(e, t, r) {
                e && !r && (e = e.prototype),
                e && !i(e, o) && n(e, o, {
                    configurable: !0,
                    value: t
                })
            }
        }
        ,
        9847: (e, t, r) => {
            var n = r(9441)
              , i = r(6048)
              , o = n("keys");
            e.exports = function(e) {
                return o[e] || (o[e] = i(e))
            }
        }
        ,
        3965: (e, t, r) => {
            var n = r(4523)
              , i = r(2969)
              , o = "__core-js_shared__"
              , a = n[o] || i(o, {});
            e.exports = a
        }
        ,
        9441: (e, t, r) => {
            var n = r(7051)
              , i = r(3965);
            (e.exports = function(e, t) {
                return i[e] || (i[e] = void 0 !== t ? t : {})
            }
            )("versions", []).push({
                version: "3.33.0",
                mode: n ? "pure" : "global",
                copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }
        ,
        8581: (e, t, r) => {
            var n = r(151)
              , i = r(5292)
              , o = r(3445)
              , a = r(3683)("species");
            e.exports = function(e, t) {
                var r, s = n(e).constructor;
                return void 0 === s || o(r = n(s)[a]) ? t : i(r)
            }
        }
        ,
        4775: (e, t, r) => {
            var n = r(1008)
              , i = r(4827)
              , o = r(2255)
              , a = r(9286)
              , s = n("".charAt)
              , c = n("".charCodeAt)
              , u = n("".slice)
              , l = function(e) {
                return function(t, r) {
                    var n, l, d = o(a(t)), h = i(r), p = d.length;
                    return h < 0 || h >= p ? e ? "" : void 0 : (n = c(d, h)) < 55296 || n > 56319 || h + 1 === p || (l = c(d, h + 1)) < 56320 || l > 57343 ? e ? s(d, h) : n : e ? u(d, h, h + 2) : l - 56320 + (n - 55296 << 10) + 65536
                }
            };
            e.exports = {
                codeAt: l(!1),
                charAt: l(!0)
            }
        }
        ,
        4567: (e, t, r) => {
            var n = r(4848);
            e.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)
        }
        ,
        613: (e, t, r) => {
            var n = r(1008)
              , i = r(5966)
              , o = r(2255)
              , a = r(4458)
              , s = r(9286)
              , c = n(a)
              , u = n("".slice)
              , l = Math.ceil
              , d = function(e) {
                return function(t, r, n) {
                    var a, d, h = o(s(t)), p = i(r), f = h.length, g = void 0 === n ? " " : o(n);
                    return p <= f || "" === g ? h : ((d = c(g, l((a = p - f) / g.length))).length > a && (d = u(d, 0, a)),
                    e ? h + d : d + h)
                }
            };
            e.exports = {
                start: d(!1),
                end: d(!0)
            }
        }
        ,
        4458: (e, t, r) => {
            var n = r(4827)
              , i = r(2255)
              , o = r(9286)
              , a = RangeError;
            e.exports = function(e) {
                var t = i(o(this))
                  , r = ""
                  , s = n(e);
                if (s < 0 || s === 1 / 0)
                    throw new a("Wrong number of repetitions");
                for (; s > 0; (s >>>= 1) && (t += t))
                    1 & s && (r += t);
                return r
            }
        }
        ,
        82: (e, t, r) => {
            var n = r(94).PROPER
              , i = r(4543)
              , o = r(8908);
            e.exports = function(e) {
                return i((function() {
                    return !!o[e]() || "​᠎" !== "​᠎"[e]() || n && o[e].name !== e
                }
                ))
            }
        }
        ,
        8906: (e, t, r) => {
            var n = r(1008)
              , i = r(9286)
              , o = r(2255)
              , a = r(8908)
              , s = n("".replace)
              , c = RegExp("^[" + a + "]+")
              , u = RegExp("(^|[^" + a + "])[" + a + "]+$")
              , l = function(e) {
                return function(t) {
                    var r = o(i(t));
                    return 1 & e && (r = s(r, c, "")),
                    2 & e && (r = s(r, u, "$1")),
                    r
                }
            };
            e.exports = {
                start: l(1),
                end: l(2),
                trim: l(3)
            }
        }
        ,
        4687: (e, t, r) => {
            var n = r(2844)
              , i = r(4543)
              , o = r(4523).String;
            e.exports = !!Object.getOwnPropertySymbols && !i((function() {
                var e = Symbol("symbol detection");
                return !o(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && n && n < 41
            }
            ))
        }
        ,
        3048: (e, t, r) => {
            var n = r(1008);
            e.exports = n(1..valueOf)
        }
        ,
        7418: (e, t, r) => {
            var n = r(4827)
              , i = Math.max
              , o = Math.min;
            e.exports = function(e, t) {
                var r = n(e);
                return r < 0 ? i(r + t, 0) : o(r, t)
            }
        }
        ,
        5934: (e, t, r) => {
            var n = r(9113)
              , i = TypeError;
            e.exports = function(e) {
                var t = n(e, "number");
                if ("number" == typeof t)
                    throw new i("Can't convert number to bigint");
                return BigInt(t)
            }
        }
        ,
        192: (e, t, r) => {
            var n = r(4827)
              , i = r(5966)
              , o = RangeError;
            e.exports = function(e) {
                if (void 0 === e)
                    return 0;
                var t = n(e)
                  , r = i(t);
                if (t !== r)
                    throw new o("Wrong length or index");
                return r
            }
        }
        ,
        853: (e, t, r) => {
            var n = r(191)
              , i = r(9286);
            e.exports = function(e) {
                return n(i(e))
            }
        }
        ,
        4827: (e, t, r) => {
            var n = r(4469);
            e.exports = function(e) {
                var t = +e;
                return t != t || 0 === t ? 0 : n(t)
            }
        }
        ,
        5966: (e, t, r) => {
            var n = r(4827)
              , i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(n(e), 9007199254740991) : 0
            }
        }
        ,
        581: (e, t, r) => {
            var n = r(9286)
              , i = Object;
            e.exports = function(e) {
                return i(n(e))
            }
        }
        ,
        9829: (e, t, r) => {
            var n = r(9526)
              , i = RangeError;
            e.exports = function(e, t) {
                var r = n(e);
                if (r % t)
                    throw new i("Wrong offset");
                return r
            }
        }
        ,
        9526: (e, t, r) => {
            var n = r(4827)
              , i = RangeError;
            e.exports = function(e) {
                var t = n(e);
                if (t < 0)
                    throw new i("The argument can't be less than 0");
                return t
            }
        }
        ,
        9113: (e, t, r) => {
            var n = r(2957)
              , i = r(1634)
              , o = r(2357)
              , a = r(6046)
              , s = r(5774)
              , c = r(3683)
              , u = TypeError
              , l = c("toPrimitive");
            e.exports = function(e, t) {
                if (!i(e) || o(e))
                    return e;
                var r, c = a(e, l);
                if (c) {
                    if (void 0 === t && (t = "default"),
                    r = n(c, e, t),
                    !i(r) || o(r))
                        return r;
                    throw new u("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"),
                s(e, t)
            }
        }
        ,
        9833: (e, t, r) => {
            var n = r(9113)
              , i = r(2357);
            e.exports = function(e) {
                var t = n(e, "string");
                return i(t) ? t : t + ""
            }
        }
        ,
        3644: (e, t, r) => {
            var n = {};
            n[r(3683)("toStringTag")] = "z",
            e.exports = "[object z]" === String(n)
        }
        ,
        2255: (e, t, r) => {
            var n = r(7611)
              , i = String;
            e.exports = function(e) {
                if ("Symbol" === n(e))
                    throw new TypeError("Cannot convert a Symbol value to a string");
                return i(e)
            }
        }
        ,
        4911: e => {
            var t = Math.round;
            e.exports = function(e) {
                var r = t(e);
                return r < 0 ? 0 : r > 255 ? 255 : 255 & r
            }
        }
        ,
        215: e => {
            var t = String;
            e.exports = function(e) {
                try {
                    return t(e)
                } catch (e) {
                    return "Object"
                }
            }
        }
        ,
        799: (e, t, r) => {
            var n = r(6566)
              , i = r(4523)
              , o = r(2957)
              , a = r(5180)
              , s = r(6261)
              , c = r(8180)
              , u = r(6330)
              , l = r(2135)
              , d = r(6372)
              , h = r(6587)
              , p = r(1463)
              , f = r(5966)
              , g = r(192)
              , v = r(9829)
              , m = r(4911)
              , y = r(9833)
              , E = r(5889)
              , _ = r(7611)
              , b = r(1634)
              , I = r(2357)
              , S = r(2104)
              , w = r(5161)
              , O = r(7943)
              , C = r(9712).f
              , T = r(9843)
              , A = r(2077).forEach
              , P = r(9089)
              , R = r(3642)
              , N = r(8449)
              , D = r(9763)
              , L = r(4317)
              , x = r(3103)
              , k = L.get
              , M = L.set
              , j = L.enforce
              , U = N.f
              , H = D.f
              , B = i.RangeError
              , F = u.ArrayBuffer
              , q = F.prototype
              , V = u.DataView
              , G = c.NATIVE_ARRAY_BUFFER_VIEWS
              , z = c.TYPED_ARRAY_TAG
              , $ = c.TypedArray
              , W = c.TypedArrayPrototype
              , Y = c.aTypedArrayConstructor
              , K = c.isTypedArray
              , X = "BYTES_PER_ELEMENT"
              , J = "Wrong length"
              , Z = function(e, t) {
                Y(e);
                for (var r = 0, n = t.length, i = new e(n); n > r; )
                    i[r] = t[r++];
                return i
            }
              , Q = function(e, t) {
                R(e, t, {
                    configurable: !0,
                    get: function() {
                        return k(this)[t]
                    }
                })
            }
              , ee = function(e) {
                var t;
                return w(q, e) || "ArrayBuffer" === (t = _(e)) || "SharedArrayBuffer" === t
            }
              , te = function(e, t) {
                return K(e) && !I(t) && t in e && p(+t) && t >= 0
            }
              , re = function(e, t) {
                return t = y(t),
                te(e, t) ? d(2, e[t]) : H(e, t)
            }
              , ne = function(e, t, r) {
                return t = y(t),
                !(te(e, t) && b(r) && E(r, "value")) || E(r, "get") || E(r, "set") || r.configurable || E(r, "writable") && !r.writable || E(r, "enumerable") && !r.enumerable ? U(e, t, r) : (e[t] = r.value,
                e)
            };
            a ? (G || (D.f = re,
            N.f = ne,
            Q(W, "buffer"),
            Q(W, "byteOffset"),
            Q(W, "byteLength"),
            Q(W, "length")),
            n({
                target: "Object",
                stat: !0,
                forced: !G
            }, {
                getOwnPropertyDescriptor: re,
                defineProperty: ne
            }),
            e.exports = function(e, t, r) {
                var a = e.match(/\d+/)[0] / 8
                  , c = e + (r ? "Clamped" : "") + "Array"
                  , u = "get" + e
                  , d = "set" + e
                  , p = i[c]
                  , y = p
                  , E = y && y.prototype
                  , _ = {}
                  , I = function(e, t) {
                    U(e, t, {
                        get: function() {
                            return function(e, t) {
                                var r = k(e);
                                return r.view[u](t * a + r.byteOffset, !0)
                            }(this, t)
                        },
                        set: function(e) {
                            return function(e, t, n) {
                                var i = k(e);
                                i.view[d](t * a + i.byteOffset, r ? m(n) : n, !0)
                            }(this, t, e)
                        },
                        enumerable: !0
                    })
                };
                G ? s && (y = t((function(e, t, r, n) {
                    return l(e, E),
                    x(b(t) ? ee(t) ? void 0 !== n ? new p(t,v(r, a),n) : void 0 !== r ? new p(t,v(r, a)) : new p(t) : K(t) ? Z(y, t) : o(T, y, t) : new p(g(t)), e, y)
                }
                )),
                O && O(y, $),
                A(C(p), (function(e) {
                    e in y || h(y, e, p[e])
                }
                )),
                y.prototype = E) : (y = t((function(e, t, r, n) {
                    l(e, E);
                    var i, s, c, u = 0, d = 0;
                    if (b(t)) {
                        if (!ee(t))
                            return K(t) ? Z(y, t) : o(T, y, t);
                        i = t,
                        d = v(r, a);
                        var h = t.byteLength;
                        if (void 0 === n) {
                            if (h % a)
                                throw new B(J);
                            if ((s = h - d) < 0)
                                throw new B(J)
                        } else if ((s = f(n) * a) + d > h)
                            throw new B(J);
                        c = s / a
                    } else
                        c = g(t),
                        i = new F(s = c * a);
                    for (M(e, {
                        buffer: i,
                        byteOffset: d,
                        byteLength: s,
                        length: c,
                        view: new V(i)
                    }); u < c; )
                        I(e, u++)
                }
                )),
                O && O(y, $),
                E = y.prototype = S(W)),
                E.constructor !== y && h(E, "constructor", y),
                j(E).TypedArrayConstructor = y,
                z && h(E, z, c);
                var w = y !== p;
                _[c] = y,
                n({
                    global: !0,
                    constructor: !0,
                    forced: w,
                    sham: !G
                }, _),
                X in y || h(y, X, a),
                X in E || h(E, X, a),
                P(c)
            }
            ) : e.exports = function() {}
        }
        ,
        6261: (e, t, r) => {
            var n = r(4523)
              , i = r(4543)
              , o = r(668)
              , a = r(8180).NATIVE_ARRAY_BUFFER_VIEWS
              , s = n.ArrayBuffer
              , c = n.Int8Array;
            e.exports = !a || !i((function() {
                c(1)
            }
            )) || !i((function() {
                new c(-1)
            }
            )) || !o((function(e) {
                new c,
                new c(null),
                new c(1.5),
                new c(e)
            }
            ), !0) || i((function() {
                return 1 !== new c(new s(2),1,void 0).length
            }
            ))
        }
        ,
        9843: (e, t, r) => {
            var n = r(1232)
              , i = r(2957)
              , o = r(5292)
              , a = r(581)
              , s = r(5526)
              , c = r(6417)
              , u = r(787)
              , l = r(5745)
              , d = r(5319)
              , h = r(8180).aTypedArrayConstructor
              , p = r(5934);
            e.exports = function(e) {
                var t, r, f, g, v, m, y, E, _ = o(this), b = a(e), I = arguments.length, S = I > 1 ? arguments[1] : void 0, w = void 0 !== S, O = u(b);
                if (O && !l(O))
                    for (E = (y = c(b, O)).next,
                    b = []; !(m = i(E, y)).done; )
                        b.push(m.value);
                for (w && I > 2 && (S = n(S, arguments[2])),
                r = s(b),
                f = new (h(_))(r),
                g = d(f),
                t = 0; r > t; t++)
                    v = w ? S(b[t], t) : b[t],
                    f[t] = g ? p(v) : +v;
                return f
            }
        }
        ,
        6048: (e, t, r) => {
            var n = r(1008)
              , i = 0
              , o = Math.random()
              , a = n(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++i + o, 36)
            }
        }
        ,
        2496: (e, t, r) => {
            var n = r(4687);
            e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }
        ,
        7310: (e, t, r) => {
            var n = r(5180)
              , i = r(4543);
            e.exports = n && i((function() {
                return 42 !== Object.defineProperty((function() {}
                ), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }
            ))
        }
        ,
        158: (e, t, r) => {
            var n = r(4523)
              , i = r(6357)
              , o = n.WeakMap;
            e.exports = i(o) && /native code/.test(String(o))
        }
        ,
        3683: (e, t, r) => {
            var n = r(4523)
              , i = r(9441)
              , o = r(5889)
              , a = r(6048)
              , s = r(4687)
              , c = r(2496)
              , u = n.Symbol
              , l = i("wks")
              , d = c ? u.for || u : u && u.withoutSetter || a;
            e.exports = function(e) {
                return o(l, e) || (l[e] = s && o(u, e) ? u[e] : d("Symbol." + e)),
                l[e]
            }
        }
        ,
        8908: e => {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        }
        ,
        7239: (e, t, r) => {
            var n = r(6566)
              , i = r(4523)
              , o = r(6330)
              , a = r(9089)
              , s = "ArrayBuffer"
              , c = o[s];
            n({
                global: !0,
                constructor: !0,
                forced: i[s] !== c
            }, {
                ArrayBuffer: c
            }),
            a(s)
        }
        ,
        8033: (e, t, r) => {
            var n = r(6566)
              , i = r(1316)
              , o = r(4543)
              , a = r(6330)
              , s = r(151)
              , c = r(7418)
              , u = r(5966)
              , l = r(8581)
              , d = a.ArrayBuffer
              , h = a.DataView
              , p = h.prototype
              , f = i(d.prototype.slice)
              , g = i(p.getUint8)
              , v = i(p.setUint8);
            n({
                target: "ArrayBuffer",
                proto: !0,
                unsafe: !0,
                forced: o((function() {
                    return !new d(2).slice(1, void 0).byteLength
                }
                ))
            }, {
                slice: function(e, t) {
                    if (f && void 0 === t)
                        return f(s(this), e);
                    for (var r = s(this).byteLength, n = c(e, r), i = c(void 0 === t ? r : t, r), o = new (l(this, d))(u(i - n)), a = new h(this), p = new h(o), m = 0; n < i; )
                        v(p, m++, g(a, n++));
                    return o
                }
            })
        }
        ,
        935: (e, t, r) => {
            var n = r(6566)
              , i = r(2753).includes
              , o = r(4543)
              , a = r(5845);
            n({
                target: "Array",
                proto: !0,
                forced: o((function() {
                    return !Array(1).includes()
                }
                ))
            }, {
                includes: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }),
            a("includes")
        }
        ,
        6656: (e, t, r) => {
            var n = r(853)
              , i = r(5845)
              , o = r(7869)
              , a = r(4317)
              , s = r(8449).f
              , c = r(3952)
              , u = r(5025)
              , l = r(7051)
              , d = r(5180)
              , h = "Array Iterator"
              , p = a.set
              , f = a.getterFor(h);
            e.exports = c(Array, "Array", (function(e, t) {
                p(this, {
                    type: h,
                    target: n(e),
                    index: 0,
                    kind: t
                })
            }
            ), (function() {
                var e = f(this)
                  , t = e.target
                  , r = e.kind
                  , n = e.index++;
                if (!t || n >= t.length)
                    return e.target = void 0,
                    u(void 0, !0);
                switch (r) {
                case "keys":
                    return u(n, !1);
                case "values":
                    return u(t[n], !1)
                }
                return u([n, t[n]], !1)
            }
            ), "values");
            var g = o.Arguments = o.Array;
            if (i("keys"),
            i("values"),
            i("entries"),
            !l && d && "values" !== g.name)
                try {
                    s(g, "name", {
                        value: "values"
                    })
                } catch (e) {}
        }
        ,
        6104: (e, t, r) => {
            var n = r(6566)
              , i = r(7262).left
              , o = r(4486)
              , a = r(2844);
            n({
                target: "Array",
                proto: !0,
                forced: !r(2224) && a > 79 && a < 83 || !o("reduce")
            }, {
                reduce: function(e) {
                    var t = arguments.length;
                    return i(this, e, t, t > 1 ? arguments[1] : void 0)
                }
            })
        }
        ,
        7156: (e, t, r) => {
            var n = r(6566)
              , i = r(3280);
            n({
                target: "Number",
                stat: !0,
                forced: Number.parseFloat !== i
            }, {
                parseFloat: i
            })
        }
        ,
        6460: (e, t, r) => {
            var n = r(6566)
              , i = r(1008)
              , o = r(4827)
              , a = r(3048)
              , s = r(4458)
              , c = r(4543)
              , u = RangeError
              , l = String
              , d = Math.floor
              , h = i(s)
              , p = i("".slice)
              , f = i(1..toFixed)
              , g = function(e, t, r) {
                return 0 === t ? r : t % 2 == 1 ? g(e, t - 1, r * e) : g(e * e, t / 2, r)
            }
              , v = function(e, t, r) {
                for (var n = -1, i = r; ++n < 6; )
                    i += t * e[n],
                    e[n] = i % 1e7,
                    i = d(i / 1e7)
            }
              , m = function(e, t) {
                for (var r = 6, n = 0; --r >= 0; )
                    n += e[r],
                    e[r] = d(n / t),
                    n = n % t * 1e7
            }
              , y = function(e) {
                for (var t = 6, r = ""; --t >= 0; )
                    if ("" !== r || 0 === t || 0 !== e[t]) {
                        var n = l(e[t]);
                        r = "" === r ? n : r + h("0", 7 - n.length) + n
                    }
                return r
            };
            n({
                target: "Number",
                proto: !0,
                forced: c((function() {
                    return "0.000" !== f(8e-5, 3) || "1" !== f(.9, 0) || "1.25" !== f(1.255, 2) || "1000000000000000128" !== f(0xde0b6b3a7640080, 0)
                }
                )) || !c((function() {
                    f({})
                }
                ))
            }, {
                toFixed: function(e) {
                    var t, r, n, i, s = a(this), c = o(e), d = [0, 0, 0, 0, 0, 0], f = "", E = "0";
                    if (c < 0 || c > 20)
                        throw new u("Incorrect fraction digits");
                    if (s != s)
                        return "NaN";
                    if (s <= -1e21 || s >= 1e21)
                        return l(s);
                    if (s < 0 && (f = "-",
                    s = -s),
                    s > 1e-21)
                        if (r = (t = function(e) {
                            for (var t = 0, r = e; r >= 4096; )
                                t += 12,
                                r /= 4096;
                            for (; r >= 2; )
                                t += 1,
                                r /= 2;
                            return t
                        }(s * g(2, 69, 1)) - 69) < 0 ? s * g(2, -t, 1) : s / g(2, t, 1),
                        r *= 4503599627370496,
                        (t = 52 - t) > 0) {
                            for (v(d, 0, r),
                            n = c; n >= 7; )
                                v(d, 1e7, 0),
                                n -= 7;
                            for (v(d, g(10, n, 1), 0),
                            n = t - 1; n >= 23; )
                                m(d, 1 << 23),
                                n -= 23;
                            m(d, 1 << n),
                            v(d, 1, 1),
                            m(d, 2),
                            E = y(d)
                        } else
                            v(d, 0, r),
                            v(d, 1 << -t, 0),
                            E = y(d) + h("0", c);
                    return c > 0 ? f + ((i = E.length) <= c ? "0." + h("0", c - i) + E : p(E, 0, i - c) + "." + p(E, i - c)) : f + E
                }
            })
        }
        ,
        2221: (e, t, r) => {
            var n = r(6566)
              , i = r(3957);
            n({
                target: "Object",
                stat: !0,
                arity: 2,
                forced: Object.assign !== i
            }, {
                assign: i
            })
        }
        ,
        8370: (e, t, r) => {
            var n = r(6566)
              , i = r(5221).entries;
            n({
                target: "Object",
                stat: !0
            }, {
                entries: function(e) {
                    return i(e)
                }
            })
        }
        ,
        3249: (e, t, r) => {
            var n = r(6566)
              , i = r(3308)
              , o = r(9904);
            n({
                target: "Object",
                stat: !0
            }, {
                fromEntries: function(e) {
                    var t = {};
                    return i(e, (function(e, r) {
                        o(t, e, r)
                    }
                    ), {
                        AS_ENTRIES: !0
                    }),
                    t
                }
            })
        }
        ,
        9170: (e, t, r) => {
            var n = r(6566)
              , i = r(5221).values;
            n({
                target: "Object",
                stat: !0
            }, {
                values: function(e) {
                    return i(e)
                }
            })
        }
        ,
        1152: (e, t, r) => {
            var n = r(5180)
              , i = r(4523)
              , o = r(1008)
              , a = r(4396)
              , s = r(3103)
              , c = r(6587)
              , u = r(9712).f
              , l = r(5161)
              , d = r(2388)
              , h = r(2255)
              , p = r(1274)
              , f = r(9933)
              , g = r(4192)
              , v = r(9704)
              , m = r(4543)
              , y = r(5889)
              , E = r(4317).enforce
              , _ = r(9089)
              , b = r(3683)
              , I = r(3027)
              , S = r(8702)
              , w = b("match")
              , O = i.RegExp
              , C = O.prototype
              , T = i.SyntaxError
              , A = o(C.exec)
              , P = o("".charAt)
              , R = o("".replace)
              , N = o("".indexOf)
              , D = o("".slice)
              , L = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
              , x = /a/g
              , k = /a/g
              , M = new O(x) !== x
              , j = f.MISSED_STICKY
              , U = f.UNSUPPORTED_Y;
            if (a("RegExp", n && (!M || j || I || S || m((function() {
                return k[w] = !1,
                O(x) !== x || O(k) === k || "/a/i" !== String(O(x, "i"))
            }
            ))))) {
                for (var H = function(e, t) {
                    var r, n, i, o, a, u, f = l(C, this), g = d(e), v = void 0 === t, m = [], _ = e;
                    if (!f && g && v && e.constructor === H)
                        return e;
                    if ((g || l(C, e)) && (e = e.source,
                    v && (t = p(_))),
                    e = void 0 === e ? "" : h(e),
                    t = void 0 === t ? "" : h(t),
                    _ = e,
                    I && "dotAll"in x && (n = !!t && N(t, "s") > -1) && (t = R(t, /s/g, "")),
                    r = t,
                    j && "sticky"in x && (i = !!t && N(t, "y") > -1) && U && (t = R(t, /y/g, "")),
                    S && (o = function(e) {
                        for (var t, r = e.length, n = 0, i = "", o = [], a = {}, s = !1, c = !1, u = 0, l = ""; n <= r; n++) {
                            if ("\\" === (t = P(e, n)))
                                t += P(e, ++n);
                            else if ("]" === t)
                                s = !1;
                            else if (!s)
                                switch (!0) {
                                case "[" === t:
                                    s = !0;
                                    break;
                                case "(" === t:
                                    A(L, D(e, n + 1)) && (n += 2,
                                    c = !0),
                                    i += t,
                                    u++;
                                    continue;
                                case ">" === t && c:
                                    if ("" === l || y(a, l))
                                        throw new T("Invalid capture group name");
                                    a[l] = !0,
                                    o[o.length] = [l, u],
                                    c = !1,
                                    l = "";
                                    continue
                                }
                            c ? l += t : i += t
                        }
                        return [i, o]
                    }(e),
                    e = o[0],
                    m = o[1]),
                    a = s(O(e, t), f ? this : C, H),
                    (n || i || m.length) && (u = E(a),
                    n && (u.dotAll = !0,
                    u.raw = H(function(e) {
                        for (var t, r = e.length, n = 0, i = "", o = !1; n <= r; n++)
                            "\\" !== (t = P(e, n)) ? o || "." !== t ? ("[" === t ? o = !0 : "]" === t && (o = !1),
                            i += t) : i += "[\\s\\S]" : i += t + P(e, ++n);
                        return i
                    }(e), r)),
                    i && (u.sticky = !0),
                    m.length && (u.groups = m)),
                    e !== _)
                        try {
                            c(a, "source", "" === _ ? "(?:)" : _)
                        } catch (e) {}
                    return a
                }, B = u(O), F = 0; B.length > F; )
                    g(H, O, B[F++]);
                C.constructor = H,
                H.prototype = C,
                v(i, "RegExp", H, {
                    constructor: !0
                })
            }
            _("RegExp")
        }
        ,
        3831: (e, t, r) => {
            var n = r(6566)
              , i = r(8779);
            n({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== i
            }, {
                exec: i
            })
        }
        ,
        4237: (e, t, r) => {
            var n = r(94).PROPER
              , i = r(9704)
              , o = r(151)
              , a = r(2255)
              , s = r(4543)
              , c = r(1274)
              , u = "toString"
              , l = RegExp.prototype[u]
              , d = s((function() {
                return "/a/b" !== l.call({
                    source: "a",
                    flags: "b"
                })
            }
            ))
              , h = n && l.name !== u;
            (d || h) && i(RegExp.prototype, u, (function() {
                var e = o(this);
                return "/" + a(e.source) + "/" + a(c(e))
            }
            ), {
                unsafe: !0
            })
        }
        ,
        1257: (e, t, r) => {
            var n, i = r(6566), o = r(1316), a = r(9763).f, s = r(5966), c = r(2255), u = r(495), l = r(9286), d = r(6412), h = r(7051), p = o("".endsWith), f = o("".slice), g = Math.min, v = d("endsWith");
            i({
                target: "String",
                proto: !0,
                forced: !(!h && !v && (n = a(String.prototype, "endsWith"),
                n && !n.writable) || v)
            }, {
                endsWith: function(e) {
                    var t = c(l(this));
                    u(e);
                    var r = arguments.length > 1 ? arguments[1] : void 0
                      , n = t.length
                      , i = void 0 === r ? n : g(s(r), n)
                      , o = c(e);
                    return p ? p(t, o, i) : f(t, i - o.length, i) === o
                }
            })
        }
        ,
        8291: (e, t, r) => {
            var n = r(6566)
              , i = r(1008)
              , o = r(495)
              , a = r(9286)
              , s = r(2255)
              , c = r(6412)
              , u = i("".indexOf);
            n({
                target: "String",
                proto: !0,
                forced: !c("includes")
            }, {
                includes: function(e) {
                    return !!~u(s(a(this)), s(o(e)), arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }
        ,
        1505: (e, t, r) => {
            var n = r(2957)
              , i = r(1644)
              , o = r(151)
              , a = r(3445)
              , s = r(5966)
              , c = r(2255)
              , u = r(9286)
              , l = r(6046)
              , d = r(7157)
              , h = r(6010);
            i("match", (function(e, t, r) {
                return [function(t) {
                    var r = u(this)
                      , i = a(t) ? void 0 : l(t, e);
                    return i ? n(i, t, r) : new RegExp(t)[e](c(r))
                }
                , function(e) {
                    var n = o(this)
                      , i = c(e)
                      , a = r(t, n, i);
                    if (a.done)
                        return a.value;
                    if (!n.global)
                        return h(n, i);
                    var u = n.unicode;
                    n.lastIndex = 0;
                    for (var l, p = [], f = 0; null !== (l = h(n, i)); ) {
                        var g = c(l[0]);
                        p[f] = g,
                        "" === g && (n.lastIndex = d(i, s(n.lastIndex), u)),
                        f++
                    }
                    return 0 === f ? null : p
                }
                ]
            }
            ))
        }
        ,
        9964: (e, t, r) => {
            var n = r(6566)
              , i = r(613).start;
            n({
                target: "String",
                proto: !0,
                forced: r(4567)
            }, {
                padStart: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }
        ,
        8304: (e, t, r) => {
            var n = r(1881)
              , i = r(2957)
              , o = r(1008)
              , a = r(1644)
              , s = r(4543)
              , c = r(151)
              , u = r(6357)
              , l = r(3445)
              , d = r(4827)
              , h = r(5966)
              , p = r(2255)
              , f = r(9286)
              , g = r(7157)
              , v = r(6046)
              , m = r(9070)
              , y = r(6010)
              , E = r(3683)("replace")
              , _ = Math.max
              , b = Math.min
              , I = o([].concat)
              , S = o([].push)
              , w = o("".indexOf)
              , O = o("".slice)
              , C = "$0" === "a".replace(/./, "$0")
              , T = !!/./[E] && "" === /./[E]("a", "$0");
            a("replace", (function(e, t, r) {
                var o = T ? "$" : "$0";
                return [function(e, r) {
                    var n = f(this)
                      , o = l(e) ? void 0 : v(e, E);
                    return o ? i(o, e, n, r) : i(t, p(n), e, r)
                }
                , function(e, i) {
                    var a = c(this)
                      , s = p(e);
                    if ("string" == typeof i && -1 === w(i, o) && -1 === w(i, "$<")) {
                        var l = r(t, a, s, i);
                        if (l.done)
                            return l.value
                    }
                    var f = u(i);
                    f || (i = p(i));
                    var v, E = a.global;
                    E && (v = a.unicode,
                    a.lastIndex = 0);
                    for (var C, T = []; null !== (C = y(a, s)) && (S(T, C),
                    E); )
                        "" === p(C[0]) && (a.lastIndex = g(s, h(a.lastIndex), v));
                    for (var A, P = "", R = 0, N = 0; N < T.length; N++) {
                        for (var D, L = p((C = T[N])[0]), x = _(b(d(C.index), s.length), 0), k = [], M = 1; M < C.length; M++)
                            S(k, void 0 === (A = C[M]) ? A : String(A));
                        var j = C.groups;
                        if (f) {
                            var U = I([L], k, x, s);
                            void 0 !== j && S(U, j),
                            D = p(n(i, void 0, U))
                        } else
                            D = m(L, s, x, k, j, i);
                        x >= R && (P += O(s, R, x) + D,
                        R = x + L.length)
                    }
                    return P + O(s, R)
                }
                ]
            }
            ), !!s((function() {
                var e = /./;
                return e.exec = function() {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    },
                    e
                }
                ,
                "7" !== "".replace(e, "$<a>")
            }
            )) || !C || T)
        }
        ,
        488: (e, t, r) => {
            var n = r(1881)
              , i = r(2957)
              , o = r(1008)
              , a = r(1644)
              , s = r(151)
              , c = r(3445)
              , u = r(2388)
              , l = r(9286)
              , d = r(8581)
              , h = r(7157)
              , p = r(5966)
              , f = r(2255)
              , g = r(6046)
              , v = r(231)
              , m = r(6010)
              , y = r(8779)
              , E = r(9933)
              , _ = r(4543)
              , b = E.UNSUPPORTED_Y
              , I = 4294967295
              , S = Math.min
              , w = [].push
              , O = o(/./.exec)
              , C = o(w)
              , T = o("".slice);
            a("split", (function(e, t, r) {
                var o;
                return o = "c" === "abbc".split(/(b)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, r) {
                    var o = f(l(this))
                      , a = void 0 === r ? I : r >>> 0;
                    if (0 === a)
                        return [];
                    if (void 0 === e)
                        return [o];
                    if (!u(e))
                        return i(t, o, e, a);
                    for (var s, c, d, h = [], p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), g = 0, m = new RegExp(e.source,p + "g"); (s = i(y, m, o)) && !((c = m.lastIndex) > g && (C(h, T(o, g, s.index)),
                    s.length > 1 && s.index < o.length && n(w, h, v(s, 1)),
                    d = s[0].length,
                    g = c,
                    h.length >= a)); )
                        m.lastIndex === s.index && m.lastIndex++;
                    return g === o.length ? !d && O(m, "") || C(h, "") : C(h, T(o, g)),
                    h.length > a ? v(h, 0, a) : h
                }
                : "0".split(void 0, 0).length ? function(e, r) {
                    return void 0 === e && 0 === r ? [] : i(t, this, e, r)
                }
                : t,
                [function(t, r) {
                    var n = l(this)
                      , a = c(t) ? void 0 : g(t, e);
                    return a ? i(a, t, n, r) : i(o, f(n), t, r)
                }
                , function(e, n) {
                    var i = s(this)
                      , a = f(e)
                      , c = r(o, i, a, n, o !== t);
                    if (c.done)
                        return c.value;
                    var u = d(i, RegExp)
                      , l = i.unicode
                      , g = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (b ? "g" : "y")
                      , v = new u(b ? "^(?:" + i.source + ")" : i,g)
                      , y = void 0 === n ? I : n >>> 0;
                    if (0 === y)
                        return [];
                    if (0 === a.length)
                        return null === m(v, a) ? [a] : [];
                    for (var E = 0, _ = 0, w = []; _ < a.length; ) {
                        v.lastIndex = b ? 0 : _;
                        var O, A = m(v, b ? T(a, _) : a);
                        if (null === A || (O = S(p(v.lastIndex + (b ? _ : 0)), a.length)) === E)
                            _ = h(a, _, l);
                        else {
                            if (C(w, T(a, E, _)),
                            w.length === y)
                                return w;
                            for (var P = 1; P <= A.length - 1; P++)
                                if (C(w, A[P]),
                                w.length === y)
                                    return w;
                            _ = E = O
                        }
                    }
                    return C(w, T(a, E)),
                    w
                }
                ]
            }
            ), !!_((function() {
                var e = /(?:)/
                  , t = e.exec;
                e.exec = function() {
                    return t.apply(this, arguments)
                }
                ;
                var r = "ab".split(e);
                return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
            }
            )), b)
        }
        ,
        7680: (e, t, r) => {
            var n, i = r(6566), o = r(1316), a = r(9763).f, s = r(5966), c = r(2255), u = r(495), l = r(9286), d = r(6412), h = r(7051), p = o("".startsWith), f = o("".slice), g = Math.min, v = d("startsWith");
            i({
                target: "String",
                proto: !0,
                forced: !(!h && !v && (n = a(String.prototype, "startsWith"),
                n && !n.writable) || v)
            }, {
                startsWith: function(e) {
                    var t = c(l(this));
                    u(e);
                    var r = s(g(arguments.length > 1 ? arguments[1] : void 0, t.length))
                      , n = c(e);
                    return p ? p(t, n, r) : f(t, r, r + n.length) === n
                }
            })
        }
        ,
        9098: (e, t, r) => {
            var n = r(6566)
              , i = r(8906).trim;
            n({
                target: "String",
                proto: !0,
                forced: r(82)("trim")
            }, {
                trim: function() {
                    return i(this)
                }
            })
        }
        ,
        6852: (e, t, r) => {
            var n = r(8180)
              , i = r(4453)
              , o = r(5934)
              , a = r(7611)
              , s = r(2957)
              , c = r(1008)
              , u = r(4543)
              , l = n.aTypedArray
              , d = n.exportTypedArrayMethod
              , h = c("".slice);
            d("fill", (function(e) {
                var t = arguments.length;
                l(this);
                var r = "Big" === h(a(this), 0, 3) ? o(e) : +e;
                return s(i, this, r, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0)
            }
            ), u((function() {
                var e = 0;
                return new Int8Array(2).fill({
                    valueOf: function() {
                        return e++
                    }
                }),
                1 !== e
            }
            )))
        }
        ,
        5437: (e, t, r) => {
            var n = r(4523)
              , i = r(2957)
              , o = r(8180)
              , a = r(5526)
              , s = r(9829)
              , c = r(581)
              , u = r(4543)
              , l = n.RangeError
              , d = n.Int8Array
              , h = d && d.prototype
              , p = h && h.set
              , f = o.aTypedArray
              , g = o.exportTypedArrayMethod
              , v = !u((function() {
                var e = new Uint8ClampedArray(2);
                return i(p, e, {
                    length: 1,
                    0: 3
                }, 1),
                3 !== e[1]
            }
            ))
              , m = v && o.NATIVE_ARRAY_BUFFER_VIEWS && u((function() {
                var e = new d(2);
                return e.set(1),
                e.set("2", 1),
                0 !== e[0] || 2 !== e[1]
            }
            ));
            g("set", (function(e) {
                f(this);
                var t = s(arguments.length > 1 ? arguments[1] : void 0, 1)
                  , r = c(e);
                if (v)
                    return i(p, this, r, t);
                var n = this.length
                  , o = a(r)
                  , u = 0;
                if (o + t > n)
                    throw new l("Wrong length");
                for (; u < o; )
                    this[t + u] = r[u++]
            }
            ), !v || m)
        }
        ,
        2181: (e, t, r) => {
            var n = r(4523)
              , i = r(1316)
              , o = r(4543)
              , a = r(9386)
              , s = r(4568)
              , c = r(8180)
              , u = r(4290)
              , l = r(2530)
              , d = r(2844)
              , h = r(664)
              , p = c.aTypedArray
              , f = c.exportTypedArrayMethod
              , g = n.Uint16Array
              , v = g && i(g.prototype.sort)
              , m = !(!v || o((function() {
                v(new g(2), null)
            }
            )) && o((function() {
                v(new g(2), {})
            }
            )))
              , y = !!v && !o((function() {
                if (d)
                    return d < 74;
                if (u)
                    return u < 67;
                if (l)
                    return !0;
                if (h)
                    return h < 602;
                var e, t, r = new g(516), n = Array(516);
                for (e = 0; e < 516; e++)
                    t = e % 4,
                    r[e] = 515 - e,
                    n[e] = e - 2 * t + 3;
                for (v(r, (function(e, t) {
                    return (e / 4 | 0) - (t / 4 | 0)
                }
                )),
                e = 0; e < 516; e++)
                    if (r[e] !== n[e])
                        return !0
            }
            ));
            f("sort", (function(e) {
                return void 0 !== e && a(e),
                y ? v(this, e) : s(p(this), function(e) {
                    return function(t, r) {
                        return void 0 !== e ? +e(t, r) || 0 : r != r ? -1 : t != t ? 1 : 0 === t && 0 === r ? 1 / t > 0 && 1 / r < 0 ? 1 : -1 : t > r
                    }
                }(e))
            }
            ), !y || m)
        }
        ,
        2637: (e, t, r) => {
            var n = r(4523)
              , i = r(1881)
              , o = r(8180)
              , a = r(4543)
              , s = r(9136)
              , c = n.Int8Array
              , u = o.aTypedArray
              , l = o.exportTypedArrayMethod
              , d = [].toLocaleString
              , h = !!c && a((function() {
                d.call(new c(1))
            }
            ));
            l("toLocaleString", (function() {
                return i(d, h ? s(u(this)) : u(this), s(arguments))
            }
            ), a((function() {
                return [1, 2].toLocaleString() !== new c([1, 2]).toLocaleString()
            }
            )) || !a((function() {
                c.prototype.toLocaleString.call([1, 2])
            }
            )))
        }
        ,
        3025: (e, t, r) => {
            r(799)("Uint8", (function(e) {
                return function(t, r, n) {
                    return e(this, t, r, n)
                }
            }
            ))
        }
        ,
        7250: (e, t, r) => {
            var n, i = r(5240), o = r(4523), a = r(1008), s = r(6519), c = r(8907), u = r(196), l = r(8137), d = r(1634), h = r(4317).enforce, p = r(4543), f = r(158), g = Object, v = Array.isArray, m = g.isExtensible, y = g.isFrozen, E = g.isSealed, _ = g.freeze, b = g.seal, I = {}, S = {}, w = !o.ActiveXObject && "ActiveXObject"in o, O = function(e) {
                return function() {
                    return e(this, arguments.length ? arguments[0] : void 0)
                }
            }, C = u("WeakMap", O, l), T = C.prototype, A = a(T.set);
            if (f)
                if (w) {
                    n = l.getConstructor(O, "WeakMap", !0),
                    c.enable();
                    var P = a(T.delete)
                      , R = a(T.has)
                      , N = a(T.get);
                    s(T, {
                        delete: function(e) {
                            if (d(e) && !m(e)) {
                                var t = h(this);
                                return t.frozen || (t.frozen = new n),
                                P(this, e) || t.frozen.delete(e)
                            }
                            return P(this, e)
                        },
                        has: function(e) {
                            if (d(e) && !m(e)) {
                                var t = h(this);
                                return t.frozen || (t.frozen = new n),
                                R(this, e) || t.frozen.has(e)
                            }
                            return R(this, e)
                        },
                        get: function(e) {
                            if (d(e) && !m(e)) {
                                var t = h(this);
                                return t.frozen || (t.frozen = new n),
                                R(this, e) ? N(this, e) : t.frozen.get(e)
                            }
                            return N(this, e)
                        },
                        set: function(e, t) {
                            if (d(e) && !m(e)) {
                                var r = h(this);
                                r.frozen || (r.frozen = new n),
                                R(this, e) ? A(this, e, t) : r.frozen.set(e, t)
                            } else
                                A(this, e, t);
                            return this
                        }
                    })
                } else
                    i && p((function() {
                        var e = _([]);
                        return A(new C, e, 1),
                        !y(e)
                    }
                    )) && s(T, {
                        set: function(e, t) {
                            var r;
                            return v(e) && (y(e) ? r = I : E(e) && (r = S)),
                            A(this, e, t),
                            r === I && _(e),
                            r === S && b(e),
                            this
                        }
                    })
        }
        ,
        5372: (e, t, r) => {
            r(7250)
        }
        ,
        2892: (e, t, r) => {
            var n = r(4523)
              , i = r(792)
              , o = r(832)
              , a = r(3371)
              , s = r(6587)
              , c = function(e) {
                if (e && e.forEach !== a)
                    try {
                        s(e, "forEach", a)
                    } catch (t) {
                        e.forEach = a
                    }
            };
            for (var u in i)
                i[u] && c(n[u] && n[u].prototype);
            c(o)
        }
        ,
        5993: (e, t, r) => {
            var n = r(4523)
              , i = r(792)
              , o = r(832)
              , a = r(6656)
              , s = r(6587)
              , c = r(3683)
              , u = c("iterator")
              , l = c("toStringTag")
              , d = a.values
              , h = function(e, t) {
                if (e) {
                    if (e[u] !== d)
                        try {
                            s(e, u, d)
                        } catch (t) {
                            e[u] = d
                        }
                    if (e[l] || s(e, l, t),
                    i[t])
                        for (var r in a)
                            if (e[r] !== a[r])
                                try {
                                    s(e, r, a[r])
                                } catch (t) {
                                    e[r] = a[r]
                                }
                }
            };
            for (var p in i)
                h(n[p] && n[p].prototype, p);
            h(o, "DOMTokenList")
        }
    }
      , t = {};
    function r(n) {
        var i = t[n];
        if (void 0 !== i)
            return i.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r),
        o.exports
    }
    r.d = (e, t) => {
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ;
    var n = {};
    r.r(n),
    r.d(n, {
        FunctionToString: () => nt,
        InboundFilters: () => Je,
        LinkedErrors: () => Rr
    });
    var i = {};
    r.r(i),
    r.d(i, {
        Breadcrumbs: () => jt,
        Dedupe: () => Bt,
        GlobalHandlers: () => or,
        HttpContext: () => dr,
        LinkedErrors: () => yr,
        TryCatch: () => Ir
    }),
    r(6656),
    r(2221),
    r(5993),
    r(935),
    r(3831),
    r(8291),
    r(2892);
    var o = /android/i;
    function a() {
        var e = window.navigator.userAgent;
        return !!e && Boolean((e.includes("Safari") && (e.includes("iPhone") || e.includes("iPad")) && !e.includes("Trident") || e.includes("AppleWebKit") && !(e.includes("Android") || e.includes("Linux") || e.includes("Trident")) && (e.includes("Mobile") || e.includes("iPhone") || e.includes("iPad")) && !e.includes("Macintosh") && !e.includes("Windows")) && !(e.includes("Chrome") || e.includes("CriOS") || e.includes("Edg")))
    }
    function s() {
        var e = window.navigator.userAgent;
        return !!e && Boolean((e.includes("Safari") || e.includes("AppleWebKit")) && (e.includes("Macintosh") || e.includes("Windows")) && !e.includes("iPhone") && !e.includes("iPad") && !e.includes("Chrome") && !e.includes("Edg") && !e.includes("Firefox"))
    }
    var c = {
        get documentBody() {
            return window.document.body
        },
        get documentReferrer() {
            return window.document.referrer
        },
        get documentVisibilityState() {
            return document.visibilityState
        },
        getQueryParams: function(e, t) {
            var r = new URL(e)
              , n = {};
            return t.forEach((e => {
                var t = r.searchParams.get(e);
                null !== t && (n[e] = t)
            }
            )),
            n
        },
        isAndroid: function() {
            return o.test(window.navigator.userAgent)
        },
        isDesktopSafari: s,
        isMobileSafari: a,
        isSafari: function() {
            return a() || s()
        },
        get isSecureContext() {
            return window.isSecureContext
        },
        isSupported: function() {
            return void 0 !== window.postMessage && void 0 !== window.fetch && void 0 !== document.createElement("a").classList
        },
        get isTopLevelWindow() {
            return window.parent === window
        },
        get supportsCryptoDigest() {
            var e;
            return void 0 !== (null === (e = crypto.subtle) || void 0 === e ? void 0 : e.digest)
        },
        get supportsDocumentVisibilityState() {
            return void 0 !== document.visibilityState
        },
        get supportsPerformanceEntries() {
            return "performance"in window && "function" == typeof window.performance.getEntriesByType
        },
        get supportsSendBeacon() {
            return void 0 !== window.navigator.sendBeacon
        },
        get windowInnerHeight() {
            return window.innerHeight
        },
        get windowInnerWidth() {
            return window.innerWidth
        },
        get windowLocation() {
            return window.location
        },
        get windowNavigationBeacon() {
            return window.navigator.sendBeacon
        },
        get windowNavigationLanguage() {
            var e = window.navigator.language;
            return !e && window.navigator.languages.length > 0 && ([e] = window.navigator.languages),
            e
        },
        get windowParentLocation() {
            return window.parent.location
        },
        get windowPerformance() {
            return window.performance
        }
    };
    r(4237);
    const u = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    function l(e) {
        return e && e.Math == Math ? e : void 0
    }
    const d = "object" == typeof globalThis && l(globalThis) || "object" == typeof window && l(window) || "object" == typeof self && l(self) || "object" == typeof r.g && l(r.g) || function() {
        return this
    }() || {};
    function h() {
        return d
    }
    function p(e, t, r) {
        const n = r || d
          , i = n.__SENTRY__ = n.__SENTRY__ || {};
        return i[e] || (i[e] = t())
    }
    const f = ["debug", "info", "warn", "error", "log", "assert", "trace"]
      , g = {};
    function v(e) {
        if (!("console"in d))
            return e();
        const t = d.console
          , r = {}
          , n = Object.keys(g);
        n.forEach((e => {
            const n = g[e];
            r[e] = t[e],
            t[e] = n
        }
        ));
        try {
            return e()
        } finally {
            n.forEach((e => {
                t[e] = r[e]
            }
            ))
        }
    }
    const m = function() {
        let e = !1;
        const t = {
            enable: () => {
                e = !0
            }
            ,
            disable: () => {
                e = !1
            }
            ,
            isEnabled: () => e
        };
        return u ? f.forEach((r => {
            t[r] = (...t) => {
                e && v(( () => {
                    d.console[r](`Sentry Logger [${r}]:`, ...t)
                }
                ))
            }
        }
        )) : f.forEach((e => {
            t[e] = () => {}
        }
        )),
        t
    }()
      , y = Object.prototype.toString;
    function E(e) {
        switch (y.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return P(e, Error)
        }
    }
    function _(e, t) {
        return y.call(e) === `[object ${t}]`
    }
    function b(e) {
        return _(e, "ErrorEvent")
    }
    function I(e) {
        return _(e, "DOMError")
    }
    function S(e) {
        return _(e, "String")
    }
    function w(e) {
        return "object" == typeof e && null !== e && "__sentry_template_string__"in e && "__sentry_template_values__"in e
    }
    function O(e) {
        return null === e || w(e) || "object" != typeof e && "function" != typeof e
    }
    function C(e) {
        return _(e, "Object")
    }
    function T(e) {
        return "undefined" != typeof Event && P(e, Event)
    }
    function A(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
    }
    function P(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }
    function R(e) {
        return !("object" != typeof e || null === e || !e.__isVue && !e._isVue)
    }
    const N = h();
    function D(e, t={}) {
        if (!e)
            return "<unknown>";
        try {
            let r = e;
            const n = 5
              , i = [];
            let o = 0
              , a = 0;
            const s = " > "
              , c = s.length;
            let u;
            const l = Array.isArray(t) ? t : t.keyAttrs
              , d = !Array.isArray(t) && t.maxStringLength || 80;
            for (; r && o++ < n && (u = L(r, l),
            !("html" === u || o > 1 && a + i.length * c + u.length >= d)); )
                i.push(u),
                a += u.length,
                r = r.parentNode;
            return i.reverse().join(s)
        } catch (e) {
            return "<unknown>"
        }
    }
    function L(e, t) {
        const r = e
          , n = [];
        let i, o, a, s, c;
        if (!r || !r.tagName)
            return "";
        if (N.HTMLElement && r instanceof HTMLElement && r.dataset && r.dataset.sentryComponent)
            return r.dataset.sentryComponent;
        n.push(r.tagName.toLowerCase());
        const u = t && t.length ? t.filter((e => r.getAttribute(e))).map((e => [e, r.getAttribute(e)])) : null;
        if (u && u.length)
            u.forEach((e => {
                n.push(`[${e[0]}="${e[1]}"]`)
            }
            ));
        else if (r.id && n.push(`#${r.id}`),
        i = r.className,
        i && S(i))
            for (o = i.split(/\s+/),
            c = 0; c < o.length; c++)
                n.push(`.${o[c]}`);
        const l = ["aria-label", "type", "name", "title", "alt"];
        for (c = 0; c < l.length; c++)
            a = l[c],
            s = r.getAttribute(a),
            s && n.push(`[${a}="${s}"]`);
        return n.join("")
    }
    function x(e, t=0) {
        return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`
    }
    function k(e, t) {
        if (!Array.isArray(e))
            return "";
        const r = [];
        for (let t = 0; t < e.length; t++) {
            const n = e[t];
            try {
                R(n) ? r.push("[VueViewModel]") : r.push(String(n))
            } catch (e) {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(t)
    }
    function M(e, t=[], r=!1) {
        return t.some((t => function(e, t, r=!1) {
            return !!S(e) && (_(t, "RegExp") ? t.test(e) : !!S(t) && (r ? e === t : e.includes(t)))
        }(e, t, r)))
    }
    function j(e, t, r) {
        if (!(t in e))
            return;
        const n = e[t]
          , i = r(n);
        "function" == typeof i && H(i, n),
        e[t] = i
    }
    function U(e, t, r) {
        try {
            Object.defineProperty(e, t, {
                value: r,
                writable: !0,
                configurable: !0
            })
        } catch (r) {
            u && m.log(`Failed to add non-enumerable property "${t}" to object`, e)
        }
    }
    function H(e, t) {
        try {
            const r = t.prototype || {};
            e.prototype = t.prototype = r,
            U(e, "__sentry_original__", t)
        } catch (e) {}
    }
    function B(e) {
        return e.__sentry_original__
    }
    function F(e) {
        if (E(e))
            return {
                message: e.message,
                name: e.name,
                stack: e.stack,
                ...V(e)
            };
        if (T(e)) {
            const t = {
                type: e.type,
                target: q(e.target),
                currentTarget: q(e.currentTarget),
                ...V(e)
            };
            return "undefined" != typeof CustomEvent && P(e, CustomEvent) && (t.detail = e.detail),
            t
        }
        return e
    }
    function q(e) {
        try {
            return "undefined" != typeof Element && P(e, Element) ? D(e) : Object.prototype.toString.call(e)
        } catch (e) {
            return "<unknown>"
        }
    }
    function V(e) {
        if ("object" == typeof e && null !== e) {
            const t = {};
            for (const r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }
        return {}
    }
    function G(e) {
        return z(e, new Map)
    }
    function z(e, t) {
        if (function(e) {
            if (!C(e))
                return !1;
            try {
                const t = Object.getPrototypeOf(e).constructor.name;
                return !t || "Object" === t
            } catch (e) {
                return !0
            }
        }(e)) {
            const r = t.get(e);
            if (void 0 !== r)
                return r;
            const n = {};
            t.set(e, n);
            for (const r of Object.keys(e))
                void 0 !== e[r] && (n[r] = z(e[r], t));
            return n
        }
        if (Array.isArray(e)) {
            const r = t.get(e);
            if (void 0 !== r)
                return r;
            const n = [];
            return t.set(e, n),
            e.forEach((e => {
                n.push(z(e, t))
            }
            )),
            n
        }
        return e
    }
    function $() {
        const e = d
          , t = e.crypto || e.msCrypto;
        let r = () => 16 * Math.random();
        try {
            if (t && t.randomUUID)
                return t.randomUUID().replace(/-/g, "");
            t && t.getRandomValues && (r = () => {
                const e = new Uint8Array(1);
                return t.getRandomValues(e),
                e[0]
            }
            )
        } catch (e) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e => (e ^ (15 & r()) >> e / 4).toString(16)))
    }
    function W(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }
    function Y(e) {
        const {message: t, event_id: r} = e;
        if (t)
            return t;
        const n = W(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }
    function K(e, t, r) {
        const n = e.exception = e.exception || {}
          , i = n.values = n.values || []
          , o = i[0] = i[0] || {};
        o.value || (o.value = t || ""),
        o.type || (o.type = r || "Error")
    }
    function X(e, t) {
        const r = W(e);
        if (!r)
            return;
        const n = r.mechanism;
        if (r.mechanism = {
            type: "generic",
            handled: !0,
            ...n,
            ...t
        },
        t && "data"in t) {
            const e = {
                ...n && n.data,
                ...t.data
            };
            r.mechanism.data = e
        }
    }
    function J(e) {
        if (e && e.__sentry_captured__)
            return !0;
        try {
            U(e, "__sentry_captured__", !0)
        } catch (e) {}
        return !1
    }
    const Z = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    var Q;
    function ee(e) {
        return new re((t => {
            t(e)
        }
        ))
    }
    function te(e) {
        return new re(( (t, r) => {
            r(e)
        }
        ))
    }
    !function(e) {
        e[e.PENDING = 0] = "PENDING",
        e[e.RESOLVED = 1] = "RESOLVED",
        e[e.REJECTED = 2] = "REJECTED"
    }(Q || (Q = {}));
    class re {
        constructor(e) {
            re.prototype.__init.call(this),
            re.prototype.__init2.call(this),
            re.prototype.__init3.call(this),
            re.prototype.__init4.call(this),
            this._state = Q.PENDING,
            this._handlers = [];
            try {
                e(this._resolve, this._reject)
            } catch (e) {
                this._reject(e)
            }
        }
        then(e, t) {
            return new re(( (r, n) => {
                this._handlers.push([!1, t => {
                    if (e)
                        try {
                            r(e(t))
                        } catch (e) {
                            n(e)
                        }
                    else
                        r(t)
                }
                , e => {
                    if (t)
                        try {
                            r(t(e))
                        } catch (e) {
                            n(e)
                        }
                    else
                        n(e)
                }
                ]),
                this._executeHandlers()
            }
            ))
        }
        catch(e) {
            return this.then((e => e), e)
        }
        finally(e) {
            return new re(( (t, r) => {
                let n, i;
                return this.then((t => {
                    i = !1,
                    n = t,
                    e && e()
                }
                ), (t => {
                    i = !0,
                    n = t,
                    e && e()
                }
                )).then(( () => {
                    i ? r(n) : t(n)
                }
                ))
            }
            ))
        }
        __init() {
            this._resolve = e => {
                this._setResult(Q.RESOLVED, e)
            }
        }
        __init2() {
            this._reject = e => {
                this._setResult(Q.REJECTED, e)
            }
        }
        __init3() {
            this._setResult = (e, t) => {
                this._state === Q.PENDING && (A(t) ? t.then(this._resolve, this._reject) : (this._state = e,
                this._value = t,
                this._executeHandlers()))
            }
        }
        __init4() {
            this._executeHandlers = () => {
                if (this._state === Q.PENDING)
                    return;
                const e = this._handlers.slice();
                this._handlers = [],
                e.forEach((e => {
                    e[0] || (this._state === Q.RESOLVED && e[1](this._value),
                    this._state === Q.REJECTED && e[2](this._value),
                    e[0] = !0)
                }
                ))
            }
        }
    }
    function ne() {
        return p("globalEventProcessors", ( () => []))
    }
    function ie(e) {
        ne().push(e)
    }
    function oe(e, t, r, n=0) {
        return new re(( (i, o) => {
            const a = e[n];
            if (null === t || "function" != typeof a)
                i(t);
            else {
                const s = a({
                    ...t
                }, r);
                Z && a.id && null === s && m.log(`Event processor "${a.id}" dropped event`),
                A(s) ? s.then((t => oe(e, t, r, n + 1).then(i))).then(null, o) : oe(e, s, r, n + 1).then(i).then(null, o)
            }
        }
        ))
    }
    function ae() {
        return Date.now() / 1e3
    }
    const se = function() {
        const {performance: e} = d;
        if (!e || !e.now)
            return ae;
        const t = Date.now() - e.now()
          , r = null == e.timeOrigin ? t : e.timeOrigin;
        return () => (r + e.now()) / 1e3
    }();
    let ce;
    ( () => {
        const {performance: e} = d;
        if (!e || !e.now)
            return void (ce = "none");
        const t = 36e5
          , r = e.now()
          , n = Date.now()
          , i = e.timeOrigin ? Math.abs(e.timeOrigin + r - n) : t
          , o = i < t
          , a = e.timing && e.timing.navigationStart
          , s = "number" == typeof a ? Math.abs(a + r - n) : t;
        o || s < t ? i <= s ? (ce = "timeOrigin",
        e.timeOrigin) : ce = "navigationStart" : ce = "dateNow"
    }
    )();
    const ue = "production";
    function le(e, t={}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
        e.timestamp = t.timestamp || se(),
        t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
        t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
        t.sid && (e.sid = 32 === t.sid.length ? t.sid : $()),
        void 0 !== t.init && (e.init = t.init),
        !e.did && t.did && (e.did = `${t.did}`),
        "number" == typeof t.started && (e.started = t.started),
        e.ignoreDuration)
            e.duration = void 0;
        else if ("number" == typeof t.duration)
            e.duration = t.duration;
        else {
            const t = e.timestamp - e.started;
            e.duration = t >= 0 ? t : 0
        }
        t.release && (e.release = t.release),
        t.environment && (e.environment = t.environment),
        !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
        !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
        "number" == typeof t.errors && (e.errors = t.errors),
        t.status && (e.status = t.status)
    }
    const de = /\(error: (.*)\)/
      , he = /captureMessage|captureException/;
    const pe = "<anonymous>";
    function fe(e) {
        try {
            return e && "function" == typeof e && e.name || pe
        } catch (e) {
            return pe
        }
    }
    function ge(e, t=100, r=1 / 0) {
        try {
            return me("", e, t, r)
        } catch (e) {
            return {
                ERROR: `**non-serializable** (${e})`
            }
        }
    }
    function ve(e, t=3, r=102400) {
        const n = ge(e, t);
        return i = n,
        function(e) {
            return ~-encodeURI(e).split(/%..|./).length
        }(JSON.stringify(i)) > r ? ve(e, t - 1, r) : n;
        var i
    }
    function me(e, t, n=1 / 0, i=1 / 0, o=function() {
        const e = "function" == typeof WeakSet
          , t = e ? new WeakSet : [];
        return [function(r) {
            if (e)
                return !!t.has(r) || (t.add(r),
                !1);
            for (let e = 0; e < t.length; e++)
                if (t[e] === r)
                    return !0;
            return t.push(r),
            !1
        }
        , function(r) {
            if (e)
                t.delete(r);
            else
                for (let e = 0; e < t.length; e++)
                    if (t[e] === r) {
                        t.splice(e, 1);
                        break
                    }
        }
        ]
    }()) {
        const [a,s] = o;
        if (null == t || ["number", "boolean", "string"].includes(typeof t) && ("number" != typeof (c = t) || c == c))
            return t;
        var c;
        const u = function(e, t) {
            try {
                if ("domain" === e && t && "object" == typeof t && t._events)
                    return "[Domain]";
                if ("domainEmitter" === e)
                    return "[DomainEmitter]";
                if (void 0 !== r.g && t === r.g)
                    return "[Global]";
                if ("undefined" != typeof window && t === window)
                    return "[Window]";
                if ("undefined" != typeof document && t === document)
                    return "[Document]";
                if (R(t))
                    return "[VueViewModel]";
                if (function(e) {
                    return C(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
                }(t))
                    return "[SyntheticEvent]";
                if ("number" == typeof t && t != t)
                    return "[NaN]";
                if ("function" == typeof t)
                    return `[Function: ${fe(t)}]`;
                if ("symbol" == typeof t)
                    return `[${String(t)}]`;
                if ("bigint" == typeof t)
                    return `[BigInt: ${String(t)}]`;
                const n = function(e) {
                    const t = Object.getPrototypeOf(e);
                    return t ? t.constructor.name : "null prototype"
                }(t);
                return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
            } catch (e) {
                return `**non-serializable** (${e})`
            }
        }(e, t);
        if (!u.startsWith("[object "))
            return u;
        if (t.__sentry_skip_normalization__)
            return t;
        const l = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
        if (0 === l)
            return u.replace("object ", "");
        if (a(t))
            return "[Circular ~]";
        const d = t;
        if (d && "function" == typeof d.toJSON)
            try {
                return me("", d.toJSON(), l - 1, i, o)
            } catch (e) {}
        const h = Array.isArray(t) ? [] : {};
        let p = 0;
        const f = F(t);
        for (const e in f) {
            if (!Object.prototype.hasOwnProperty.call(f, e))
                continue;
            if (p >= i) {
                h[e] = "[MaxProperties ~]";
                break
            }
            const t = f[e];
            h[e] = me(e, t, l - 1, i, o),
            p++
        }
        return s(t),
        h
    }
    function ye(e) {
        const {spanId: t, traceId: r} = e.spanContext()
          , {data: n, op: i, parent_span_id: o, status: a, tags: s, origin: c} = Ee(e);
        return G({
            data: n,
            op: i,
            parent_span_id: o,
            span_id: t,
            status: a,
            tags: s,
            trace_id: r,
            origin: c
        })
    }
    function Ee(e) {
        return function(e) {
            return "function" == typeof e.getSpanJSON
        }(e) ? e.getSpanJSON() : "function" == typeof e.toJSON ? e.toJSON() : {}
    }
    const _e = new WeakMap;
    const be = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
    function Ie(e, t) {
        return Be().captureEvent(e, t)
    }
    function Se(e, t) {
        Be().addBreadcrumb(e, t)
    }
    function we() {
        return Be().getClient()
    }
    function Oe(e) {
        return e.transaction
    }
    function Ce(e, t, r) {
        const n = t.getOptions()
          , {publicKey: i} = t.getDsn() || {}
          , {segment: o} = r && r.getUser() || {}
          , a = G({
            environment: n.environment || ue,
            release: n.release,
            user_segment: o,
            public_key: i,
            trace_id: e
        });
        return t.emit && t.emit("createDsc", a),
        a
    }
    function Te(e) {
        const t = we();
        if (!t)
            return {};
        const r = Ce(Ee(e).trace_id || "", t, Be().getScope())
          , n = Oe(e);
        if (!n)
            return r;
        const i = n && n._frozenDynamicSamplingContext;
        if (i)
            return i;
        const {sampleRate: o, source: a} = n.metadata;
        null != o && (r.sample_rate = `${o}`);
        const s = Ee(n);
        return a && "url" !== a && (r.transaction = s.description),
        r.sampled = String(function(e) {
            const {traceFlags: t} = e.spanContext();
            return Boolean(1 & t)
        }(n)),
        t.emit && t.emit("createDsc", r),
        r
    }
    function Ae(e, t) {
        const {fingerprint: r, span: n, breadcrumbs: i, sdkProcessingMetadata: o} = t;
        !function(e, t) {
            const {extra: r, tags: n, user: i, contexts: o, level: a, transactionName: s} = t
              , c = G(r);
            c && Object.keys(c).length && (e.extra = {
                ...c,
                ...e.extra
            });
            const u = G(n);
            u && Object.keys(u).length && (e.tags = {
                ...u,
                ...e.tags
            });
            const l = G(i);
            l && Object.keys(l).length && (e.user = {
                ...l,
                ...e.user
            });
            const d = G(o);
            d && Object.keys(d).length && (e.contexts = {
                ...d,
                ...e.contexts
            }),
            a && (e.level = a),
            s && (e.transaction = s)
        }(e, t),
        n && function(e, t) {
            e.contexts = {
                trace: ye(t),
                ...e.contexts
            };
            const r = Oe(t);
            if (r) {
                e.sdkProcessingMetadata = {
                    dynamicSamplingContext: Te(t),
                    ...e.sdkProcessingMetadata
                };
                const n = Ee(r).description;
                n && (e.tags = {
                    transaction: n,
                    ...e.tags
                })
            }
        }(e, n),
        function(e, t) {
            var r;
            e.fingerprint = e.fingerprint ? (r = e.fingerprint,
            Array.isArray(r) ? r : [r]) : [],
            t && (e.fingerprint = e.fingerprint.concat(t)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }(e, r),
        function(e, t) {
            const r = [...e.breadcrumbs || [], ...t];
            e.breadcrumbs = r.length ? r : void 0
        }(e, i),
        function(e, t) {
            e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...t
            }
        }(e, o)
    }
    function Pe(e, t) {
        const {extra: r, tags: n, user: i, contexts: o, level: a, sdkProcessingMetadata: s, breadcrumbs: c, fingerprint: u, eventProcessors: l, attachments: d, propagationContext: h, transactionName: p, span: f} = t;
        Re(e, "extra", r),
        Re(e, "tags", n),
        Re(e, "user", i),
        Re(e, "contexts", o),
        Re(e, "sdkProcessingMetadata", s),
        a && (e.level = a),
        p && (e.transactionName = p),
        f && (e.span = f),
        c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
        u.length && (e.fingerprint = [...e.fingerprint, ...u]),
        l.length && (e.eventProcessors = [...e.eventProcessors, ...l]),
        d.length && (e.attachments = [...e.attachments, ...d]),
        e.propagationContext = {
            ...e.propagationContext,
            ...h
        }
    }
    function Re(e, t, r) {
        if (r && Object.keys(r).length) {
            e[t] = {
                ...e[t]
            };
            for (const n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[t][n] = r[n])
        }
    }
    let Ne;
    class De {
        constructor() {
            this._notifyingListeners = !1,
            this._scopeListeners = [],
            this._eventProcessors = [],
            this._breadcrumbs = [],
            this._attachments = [],
            this._user = {},
            this._tags = {},
            this._extra = {},
            this._contexts = {},
            this._sdkProcessingMetadata = {},
            this._propagationContext = Le()
        }
        static clone(e) {
            return e ? e.clone() : new De
        }
        clone() {
            const e = new De;
            return e._breadcrumbs = [...this._breadcrumbs],
            e._tags = {
                ...this._tags
            },
            e._extra = {
                ...this._extra
            },
            e._contexts = {
                ...this._contexts
            },
            e._user = this._user,
            e._level = this._level,
            e._span = this._span,
            e._session = this._session,
            e._transactionName = this._transactionName,
            e._fingerprint = this._fingerprint,
            e._eventProcessors = [...this._eventProcessors],
            e._requestSession = this._requestSession,
            e._attachments = [...this._attachments],
            e._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata
            },
            e._propagationContext = {
                ...this._propagationContext
            },
            e._client = this._client,
            e
        }
        setClient(e) {
            this._client = e
        }
        getClient() {
            return this._client
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e),
            this
        }
        setUser(e) {
            return this._user = e || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                segment: void 0,
                username: void 0
            },
            this._session && le(this._session, {
                user: e
            }),
            this._notifyScopeListeners(),
            this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(e) {
            return this._requestSession = e,
            this
        }
        setTags(e) {
            return this._tags = {
                ...this._tags,
                ...e
            },
            this._notifyScopeListeners(),
            this
        }
        setTag(e, t) {
            return this._tags = {
                ...this._tags,
                [e]: t
            },
            this._notifyScopeListeners(),
            this
        }
        setExtras(e) {
            return this._extra = {
                ...this._extra,
                ...e
            },
            this._notifyScopeListeners(),
            this
        }
        setExtra(e, t) {
            return this._extra = {
                ...this._extra,
                [e]: t
            },
            this._notifyScopeListeners(),
            this
        }
        setFingerprint(e) {
            return this._fingerprint = e,
            this._notifyScopeListeners(),
            this
        }
        setLevel(e) {
            return this._level = e,
            this._notifyScopeListeners(),
            this
        }
        setTransactionName(e) {
            return this._transactionName = e,
            this._notifyScopeListeners(),
            this
        }
        setContext(e, t) {
            return null === t ? delete this._contexts[e] : this._contexts[e] = t,
            this._notifyScopeListeners(),
            this
        }
        setSpan(e) {
            return this._span = e,
            this._notifyScopeListeners(),
            this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            const e = this._span;
            return e && e.transaction
        }
        setSession(e) {
            return e ? this._session = e : delete this._session,
            this._notifyScopeListeners(),
            this
        }
        getSession() {
            return this._session
        }
        update(e) {
            if (!e)
                return this;
            const t = "function" == typeof e ? e(this) : e;
            if (t instanceof De) {
                const e = t.getScopeData();
                this._tags = {
                    ...this._tags,
                    ...e.tags
                },
                this._extra = {
                    ...this._extra,
                    ...e.extra
                },
                this._contexts = {
                    ...this._contexts,
                    ...e.contexts
                },
                e.user && Object.keys(e.user).length && (this._user = e.user),
                e.level && (this._level = e.level),
                e.fingerprint.length && (this._fingerprint = e.fingerprint),
                t.getRequestSession() && (this._requestSession = t.getRequestSession()),
                e.propagationContext && (this._propagationContext = e.propagationContext)
            } else if (C(t)) {
                const t = e;
                this._tags = {
                    ...this._tags,
                    ...t.tags
                },
                this._extra = {
                    ...this._extra,
                    ...t.extra
                },
                this._contexts = {
                    ...this._contexts,
                    ...t.contexts
                },
                t.user && (this._user = t.user),
                t.level && (this._level = t.level),
                t.fingerprint && (this._fingerprint = t.fingerprint),
                t.requestSession && (this._requestSession = t.requestSession),
                t.propagationContext && (this._propagationContext = t.propagationContext)
            }
            return this
        }
        clear() {
            return this._breadcrumbs = [],
            this._tags = {},
            this._extra = {},
            this._user = {},
            this._contexts = {},
            this._level = void 0,
            this._transactionName = void 0,
            this._fingerprint = void 0,
            this._requestSession = void 0,
            this._span = void 0,
            this._session = void 0,
            this._notifyScopeListeners(),
            this._attachments = [],
            this._propagationContext = Le(),
            this
        }
        addBreadcrumb(e, t) {
            const r = "number" == typeof t ? t : 100;
            if (r <= 0)
                return this;
            const n = {
                timestamp: ae(),
                ...e
            }
              , i = this._breadcrumbs;
            return i.push(n),
            this._breadcrumbs = i.length > r ? i.slice(-r) : i,
            this._notifyScopeListeners(),
            this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [],
            this._notifyScopeListeners(),
            this
        }
        addAttachment(e) {
            return this._attachments.push(e),
            this
        }
        getAttachments() {
            return this.getScopeData().attachments
        }
        clearAttachments() {
            return this._attachments = [],
            this
        }
        getScopeData() {
            const {_breadcrumbs: e, _attachments: t, _contexts: r, _tags: n, _extra: i, _user: o, _level: a, _fingerprint: s, _eventProcessors: c, _propagationContext: u, _sdkProcessingMetadata: l, _transactionName: d, _span: h} = this;
            return {
                breadcrumbs: e,
                attachments: t,
                contexts: r,
                tags: n,
                extra: i,
                user: o,
                level: a,
                fingerprint: s || [],
                eventProcessors: c,
                propagationContext: u,
                sdkProcessingMetadata: l,
                transactionName: d,
                span: h
            }
        }
        applyToEvent(e, t={}, r=[]) {
            return Ae(e, this.getScopeData()),
            oe([...r, ...ne(), ...this._eventProcessors], e, t)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            },
            this
        }
        setPropagationContext(e) {
            return this._propagationContext = e,
            this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(e, t) {
            const r = t && t.event_id ? t.event_id : $();
            if (!this._client)
                return m.warn("No client configured on scope - will not capture exception!"),
                r;
            const n = new Error("Sentry syntheticException");
            return this._client.captureException(e, {
                originalException: e,
                syntheticException: n,
                ...t,
                event_id: r
            }, this),
            r
        }
        captureMessage(e, t, r) {
            const n = r && r.event_id ? r.event_id : $();
            if (!this._client)
                return m.warn("No client configured on scope - will not capture message!"),
                n;
            const i = new Error(e);
            return this._client.captureMessage(e, t, {
                originalException: e,
                syntheticException: i,
                ...r,
                event_id: n
            }, this),
            n
        }
        captureEvent(e, t) {
            const r = t && t.event_id ? t.event_id : $();
            return this._client ? (this._client.captureEvent(e, {
                ...t,
                event_id: r
            }, this),
            r) : (m.warn("No client configured on scope - will not capture event!"),
            r)
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0,
            this._scopeListeners.forEach((e => {
                e(this)
            }
            )),
            this._notifyingListeners = !1)
        }
    }
    function Le() {
        return {
            traceId: $(),
            spanId: $().substring(16)
        }
    }
    const xe = "7.120.3"
      , ke = parseFloat(xe)
      , Me = 100;
    class je {
        constructor(e, t, r, n=ke) {
            let i, o;
            this._version = n,
            t ? i = t : (i = new De,
            i.setClient(e)),
            r ? o = r : (o = new De,
            o.setClient(e)),
            this._stack = [{
                scope: i
            }],
            e && this.bindClient(e),
            this._isolationScope = o
        }
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            const t = this.getStackTop();
            t.client = e,
            t.scope.setClient(e),
            e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            const e = this.getScope().clone();
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }),
            e
        }
        popScope() {
            return !(this.getStack().length <= 1 || !this.getStack().pop())
        }
        withScope(e) {
            const t = this.pushScope();
            let r;
            try {
                r = e(t)
            } catch (e) {
                throw this.popScope(),
                e
            }
            return A(r) ? r.then((e => (this.popScope(),
            e)), (e => {
                throw this.popScope(),
                e
            }
            )) : (this.popScope(),
            r)
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getIsolationScope() {
            return this._isolationScope
        }
        getStack() {
            return this._stack
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        captureException(e, t) {
            const r = this._lastEventId = t && t.event_id ? t.event_id : $()
              , n = new Error("Sentry syntheticException");
            return this.getScope().captureException(e, {
                originalException: e,
                syntheticException: n,
                ...t,
                event_id: r
            }),
            r
        }
        captureMessage(e, t, r) {
            const n = this._lastEventId = r && r.event_id ? r.event_id : $()
              , i = new Error(e);
            return this.getScope().captureMessage(e, t, {
                originalException: e,
                syntheticException: i,
                ...r,
                event_id: n
            }),
            n
        }
        captureEvent(e, t) {
            const r = t && t.event_id ? t.event_id : $();
            return e.type || (this._lastEventId = r),
            this.getScope().captureEvent(e, {
                ...t,
                event_id: r
            }),
            r
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(e, t) {
            const {scope: r, client: n} = this.getStackTop();
            if (!n)
                return;
            const {beforeBreadcrumb: i=null, maxBreadcrumbs: o=Me} = n.getOptions && n.getOptions() || {};
            if (o <= 0)
                return;
            const a = {
                timestamp: ae(),
                ...e
            }
              , s = i ? v(( () => i(a, t))) : a;
            null !== s && (n.emit && n.emit("beforeAddBreadcrumb", s, t),
            r.addBreadcrumb(s, o))
        }
        setUser(e) {
            this.getScope().setUser(e),
            this.getIsolationScope().setUser(e)
        }
        setTags(e) {
            this.getScope().setTags(e),
            this.getIsolationScope().setTags(e)
        }
        setExtras(e) {
            this.getScope().setExtras(e),
            this.getIsolationScope().setExtras(e)
        }
        setTag(e, t) {
            this.getScope().setTag(e, t),
            this.getIsolationScope().setTag(e, t)
        }
        setExtra(e, t) {
            this.getScope().setExtra(e, t),
            this.getIsolationScope().setExtra(e, t)
        }
        setContext(e, t) {
            this.getScope().setContext(e, t),
            this.getIsolationScope().setContext(e, t)
        }
        configureScope(e) {
            const {scope: t, client: r} = this.getStackTop();
            r && e(t)
        }
        run(e) {
            const t = He(this);
            try {
                e(this)
            } finally {
                He(t)
            }
        }
        getIntegration(e) {
            const t = this.getClient();
            if (!t)
                return null;
            try {
                return t.getIntegration(e)
            } catch (t) {
                return Z && m.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
                null
            }
        }
        startTransaction(e, t) {
            const r = this._callExtensionMethod("startTransaction", e, t);
            return Z && !r && (this.getClient() ? m.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : m.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),
            r
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(e=!1) {
            if (e)
                return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            const e = this.getStackTop().scope
              , t = e.getSession();
            t && function(e) {
                let t = {};
                "ok" === e.status && (t = {
                    status: "exited"
                }),
                le(e, t)
            }(t),
            this._sendSessionUpdate(),
            e.setSession()
        }
        startSession(e) {
            const {scope: t, client: r} = this.getStackTop()
              , {release: n, environment: i=ue} = r && r.getOptions() || {}
              , {userAgent: o} = d.navigator || {}
              , a = function(e) {
                const t = se()
                  , r = {
                    sid: $(),
                    init: !0,
                    timestamp: t,
                    started: t,
                    duration: 0,
                    status: "ok",
                    errors: 0,
                    ignoreDuration: !1,
                    toJSON: () => function(e) {
                        return G({
                            sid: `${e.sid}`,
                            init: e.init,
                            started: new Date(1e3 * e.started).toISOString(),
                            timestamp: new Date(1e3 * e.timestamp).toISOString(),
                            status: e.status,
                            errors: e.errors,
                            did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                            duration: e.duration,
                            abnormal_mechanism: e.abnormal_mechanism,
                            attrs: {
                                release: e.release,
                                environment: e.environment,
                                ip_address: e.ipAddress,
                                user_agent: e.userAgent
                            }
                        })
                    }(r)
                };
                return e && le(r, e),
                r
            }({
                release: n,
                environment: i,
                user: t.getUser(),
                ...o && {
                    userAgent: o
                },
                ...e
            })
              , s = t.getSession && t.getSession();
            return s && "ok" === s.status && le(s, {
                status: "exited"
            }),
            this.endSession(),
            t.setSession(a),
            a
        }
        shouldSendDefaultPii() {
            const e = this.getClient()
              , t = e && e.getOptions();
            return Boolean(t && t.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {scope: e, client: t} = this.getStackTop()
              , r = e.getSession();
            r && t && t.captureSession && t.captureSession(r)
        }
        _callExtensionMethod(e, ...t) {
            const r = Ue().__SENTRY__;
            if (r && r.extensions && "function" == typeof r.extensions[e])
                return r.extensions[e].apply(this, t);
            Z && m.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }
    function Ue() {
        return d.__SENTRY__ = d.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        d
    }
    function He(e) {
        const t = Ue()
          , r = Fe(t);
        return qe(t, e),
        r
    }
    function Be() {
        const e = Ue();
        if (e.__SENTRY__ && e.__SENTRY__.acs) {
            const t = e.__SENTRY__.acs.getCurrentHub();
            if (t)
                return t
        }
        return function(e=Ue()) {
            return t = e,
            !!(t && t.__SENTRY__ && t.__SENTRY__.hub) && !Fe(e).isOlderThan(ke) || qe(e, new je),
            Fe(e);
            var t
        }(e)
    }
    function Fe(e) {
        return p("hub", ( () => new je), e)
    }
    function qe(e, t) {
        return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t,
        !0)
    }
    const Ve = [];
    function Ge(e, t) {
        for (const r of t)
            r && r.afterAllSetup && r.afterAllSetup(e)
    }
    function ze(e, t, r) {
        if (r[t.name])
            Z && m.log(`Integration skipped because it was already installed: ${t.name}`);
        else {
            if (r[t.name] = t,
            -1 === Ve.indexOf(t.name) && (t.setupOnce(ie, Be),
            Ve.push(t.name)),
            t.setup && "function" == typeof t.setup && t.setup(e),
            e.on && "function" == typeof t.preprocessEvent) {
                const r = t.preprocessEvent.bind(t);
                e.on("preprocessEvent", ( (t, n) => r(t, n, e)))
            }
            if (e.addEventProcessor && "function" == typeof t.processEvent) {
                const r = t.processEvent.bind(t)
                  , n = Object.assign(( (t, n) => r(t, n, e)), {
                    id: t.name
                });
                e.addEventProcessor(n)
            }
            Z && m.log(`Integration installed: ${t.name}`)
        }
    }
    function $e(e, t) {
        return Object.assign((function(...e) {
            return t(...e)
        }
        ), {
            id: e
        })
    }
    const We = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/]
      , Ye = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/]
      , Ke = "InboundFilters"
      , Xe = (e={}) => ({
        name: Ke,
        setupOnce() {},
        processEvent(t, r, n) {
            const i = n.getOptions()
              , o = function(e={}, t={}) {
                return {
                    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                    ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : We],
                    ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || [], ...e.disableTransactionDefaults ? [] : Ye],
                    ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                }
            }(e, i);
            return function(e, t) {
                return t.ignoreInternal && function(e) {
                    try {
                        return "SentryError" === e.exception.values[0].type
                    } catch (e) {}
                    return !1
                }(e) ? (Z && m.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${Y(e)}`),
                !0) : function(e, t) {
                    return !(e.type || !t || !t.length) && function(e) {
                        const t = [];
                        let r;
                        e.message && t.push(e.message);
                        try {
                            r = e.exception.values[e.exception.values.length - 1]
                        } catch (e) {}
                        return r && r.value && (t.push(r.value),
                        r.type && t.push(`${r.type}: ${r.value}`)),
                        Z && 0 === t.length && m.error(`Could not extract message for event ${Y(e)}`),
                        t
                    }(e).some((e => M(e, t)))
                }(e, t.ignoreErrors) ? (Z && m.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${Y(e)}`),
                !0) : function(e, t) {
                    if ("transaction" !== e.type || !t || !t.length)
                        return !1;
                    const r = e.transaction;
                    return !!r && M(r, t)
                }(e, t.ignoreTransactions) ? (Z && m.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${Y(e)}`),
                !0) : function(e, t) {
                    if (!t || !t.length)
                        return !1;
                    const r = Ze(e);
                    return !!r && M(r, t)
                }(e, t.denyUrls) ? (Z && m.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${Y(e)}.\nUrl: ${Ze(e)}`),
                !0) : !function(e, t) {
                    if (!t || !t.length)
                        return !0;
                    const r = Ze(e);
                    return !r || M(r, t)
                }(e, t.allowUrls) && (Z && m.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${Y(e)}.\nUrl: ${Ze(e)}`),
                !0)
            }(t, o) ? null : t
        }
    })
      , Je = $e(Ke, Xe);
    function Ze(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch (e) {}
            return t ? function(e=[]) {
                for (let t = e.length - 1; t >= 0; t--) {
                    const r = e[t];
                    if (r && "<anonymous>" !== r.filename && "[native code]" !== r.filename)
                        return r.filename || null
                }
                return null
            }(t) : null
        } catch (t) {
            return Z && m.error(`Cannot extract url for event ${Y(e)}`),
            null
        }
    }
    let Qe;
    const et = "FunctionToString"
      , tt = new WeakMap
      , rt = () => ({
        name: et,
        setupOnce() {
            Qe = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...e) {
                    const t = B(this)
                      , r = tt.has(we()) && void 0 !== t ? t : this;
                    return Qe.apply(r, e)
                }
            } catch (e) {}
        },
        setup(e) {
            tt.set(e, !0)
        }
    })
      , nt = $e(et, rt)
      , it = {}
      , ot = {};
    function at(e, t) {
        it[e] = it[e] || [],
        it[e].push(t)
    }
    function st(e, t) {
        ot[e] || (t(),
        ot[e] = !0)
    }
    function ct(e, t) {
        const r = e && it[e];
        if (r)
            for (const n of r)
                try {
                    n(t)
                } catch (t) {
                    u && m.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${fe(n)}\nError:`, t)
                }
    }
    function ut() {
        "console"in d && f.forEach((function(e) {
            e in d.console && j(d.console, e, (function(t) {
                return g[e] = t,
                function(...t) {
                    ct("console", {
                        args: t,
                        level: e
                    });
                    const r = g[e];
                    r && r.apply(d.console, t)
                }
            }
            ))
        }
        ))
    }
    const lt = d;
    let dt, ht, pt;
    function ft() {
        if (!lt.document)
            return;
        const e = ct.bind(null, "dom")
          , t = gt(e, !0);
        lt.document.addEventListener("click", t, !1),
        lt.document.addEventListener("keypress", t, !1),
        ["EventTarget", "Node"].forEach((t => {
            const r = lt[t] && lt[t].prototype;
            r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (j(r, "addEventListener", (function(t) {
                return function(r, n, i) {
                    if ("click" === r || "keypress" == r)
                        try {
                            const n = this
                              , o = n.__sentry_instrumentation_handlers__ = n.__sentry_instrumentation_handlers__ || {}
                              , a = o[r] = o[r] || {
                                refCount: 0
                            };
                            if (!a.handler) {
                                const n = gt(e);
                                a.handler = n,
                                t.call(this, r, n, i)
                            }
                            a.refCount++
                        } catch (e) {}
                    return t.call(this, r, n, i)
                }
            }
            )),
            j(r, "removeEventListener", (function(e) {
                return function(t, r, n) {
                    if ("click" === t || "keypress" == t)
                        try {
                            const r = this
                              , i = r.__sentry_instrumentation_handlers__ || {}
                              , o = i[t];
                            o && (o.refCount--,
                            o.refCount <= 0 && (e.call(this, t, o.handler, n),
                            o.handler = void 0,
                            delete i[t]),
                            0 === Object.keys(i).length && delete r.__sentry_instrumentation_handlers__)
                        } catch (e) {}
                    return e.call(this, t, r, n)
                }
            }
            )))
        }
        ))
    }
    function gt(e, t=!1) {
        return r => {
            if (!r || r._sentryCaptured)
                return;
            const n = function(e) {
                try {
                    return e.target
                } catch (e) {
                    return null
                }
            }(r);
            if (function(e, t) {
                return "keypress" === e && (!t || !t.tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)
            }(r.type, n))
                return;
            U(r, "_sentryCaptured", !0),
            n && !n._sentryId && U(n, "_sentryId", $());
            const i = "keypress" === r.type ? "input" : r.type;
            (function(e) {
                if (e.type !== ht)
                    return !1;
                try {
                    if (!e.target || e.target._sentryId !== pt)
                        return !1
                } catch (e) {}
                return !0
            }
            )(r) || (e({
                event: r,
                name: i,
                global: t
            }),
            ht = r.type,
            pt = n ? n._sentryId : void 0),
            clearTimeout(dt),
            dt = lt.setTimeout(( () => {
                pt = void 0,
                ht = void 0
            }
            ), 1e3)
        }
    }
    const vt = d
      , mt = "__sentry_xhr_v3__";
    function yt() {
        if (!vt.XMLHttpRequest)
            return;
        const e = XMLHttpRequest.prototype;
        j(e, "open", (function(e) {
            return function(...t) {
                const r = Date.now()
                  , n = S(t[0]) ? t[0].toUpperCase() : void 0
                  , i = function(e) {
                    if (S(e))
                        return e;
                    try {
                        return e.toString()
                    } catch (e) {}
                }(t[1]);
                if (!n || !i)
                    return e.apply(this, t);
                this[mt] = {
                    method: n,
                    url: i,
                    request_headers: {}
                },
                "POST" === n && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                const o = () => {
                    const e = this[mt];
                    if (e && 4 === this.readyState) {
                        try {
                            e.status_code = this.status
                        } catch (e) {}
                        ct("xhr", {
                            args: [n, i],
                            endTimestamp: Date.now(),
                            startTimestamp: r,
                            xhr: this
                        })
                    }
                }
                ;
                return "onreadystatechange"in this && "function" == typeof this.onreadystatechange ? j(this, "onreadystatechange", (function(e) {
                    return function(...t) {
                        return o(),
                        e.apply(this, t)
                    }
                }
                )) : this.addEventListener("readystatechange", o),
                j(this, "setRequestHeader", (function(e) {
                    return function(...t) {
                        const [r,n] = t
                          , i = this[mt];
                        return i && S(r) && S(n) && (i.request_headers[r.toLowerCase()] = n),
                        e.apply(this, t)
                    }
                }
                )),
                e.apply(this, t)
            }
        }
        )),
        j(e, "send", (function(e) {
            return function(...t) {
                const r = this[mt];
                return r ? (void 0 !== t[0] && (r.body = t[0]),
                ct("xhr", {
                    args: [r.method, r.url],
                    startTimestamp: Date.now(),
                    xhr: this
                }),
                e.apply(this, t)) : e.apply(this, t)
            }
        }
        ))
    }
    const Et = h();
    function _t(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }
    function bt() {
        (function() {
            if ("string" == typeof EdgeRuntime)
                return !0;
            if (!function() {
                if (!("fetch"in Et))
                    return !1;
                try {
                    return new Headers,
                    new Request("http://www.example.com"),
                    new Response,
                    !0
                } catch (e) {
                    return !1
                }
            }())
                return !1;
            if (_t(Et.fetch))
                return !0;
            let e = !1;
            const t = Et.document;
            if (t && "function" == typeof t.createElement)
                try {
                    const r = t.createElement("iframe");
                    r.hidden = !0,
                    t.head.appendChild(r),
                    r.contentWindow && r.contentWindow.fetch && (e = _t(r.contentWindow.fetch)),
                    t.head.removeChild(r)
                } catch (e) {
                    u && m.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                }
            return e
        }
        )() && j(d, "fetch", (function(e) {
            return function(...t) {
                const {method: r, url: n} = function(e) {
                    if (0 === e.length)
                        return {
                            method: "GET",
                            url: ""
                        };
                    if (2 === e.length) {
                        const [t,r] = e;
                        return {
                            url: St(t),
                            method: It(r, "method") ? String(r.method).toUpperCase() : "GET"
                        }
                    }
                    const t = e[0];
                    return {
                        url: St(t),
                        method: It(t, "method") ? String(t.method).toUpperCase() : "GET"
                    }
                }(t)
                  , i = {
                    args: t,
                    fetchData: {
                        method: r,
                        url: n
                    },
                    startTimestamp: Date.now()
                };
                return ct("fetch", {
                    ...i
                }),
                e.apply(d, t).then((e => (ct("fetch", {
                    ...i,
                    endTimestamp: Date.now(),
                    response: e
                }),
                e)), (e => {
                    throw ct("fetch", {
                        ...i,
                        endTimestamp: Date.now(),
                        error: e
                    }),
                    e
                }
                ))
            }
        }
        ))
    }
    function It(e, t) {
        return !!e && "object" == typeof e && !!e[t]
    }
    function St(e) {
        return "string" == typeof e ? e : e ? It(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
    }
    const wt = h()
      , Ot = d;
    let Ct;
    function Tt() {
        if (!function() {
            const e = wt.chrome
              , t = e && e.app && e.app.runtime
              , r = "history"in wt && !!wt.history.pushState && !!wt.history.replaceState;
            return !t && r
        }())
            return;
        const e = Ot.onpopstate;
        function t(e) {
            return function(...t) {
                const r = t.length > 2 ? t[2] : void 0;
                if (r) {
                    const e = Ct
                      , t = String(r);
                    Ct = t,
                    ct("history", {
                        from: e,
                        to: t
                    })
                }
                return e.apply(this, t)
            }
        }
        Ot.onpopstate = function(...t) {
            const r = Ot.location.href
              , n = Ct;
            if (Ct = r,
            ct("history", {
                from: n,
                to: r
            }),
            e)
                try {
                    return e.apply(this, t)
                } catch (e) {}
        }
        ,
        j(Ot.history, "pushState", t),
        j(Ot.history, "replaceState", t)
    }
    const At = ["fatal", "error", "warning", "log", "info", "debug"];
    function Pt(e) {
        if (!e)
            return {};
        const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t)
            return {};
        const r = t[6] || ""
          , n = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            search: r,
            hash: n,
            relative: t[5] + r + n
        }
    }
    const Rt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
      , Nt = d;
    let Dt = 0;
    function Lt() {
        return Dt > 0
    }
    function xt(e, t={}, r) {
        if ("function" != typeof e)
            return e;
        try {
            const t = e.__sentry_wrapped__;
            if (t)
                return "function" == typeof t ? t : e;
            if (B(e))
                return e
        } catch (t) {
            return e
        }
        const n = function() {
            const n = Array.prototype.slice.call(arguments);
            try {
                r && "function" == typeof r && r.apply(this, arguments);
                const i = n.map((e => xt(e, t)));
                return e.apply(this, i)
            } catch (e) {
                throw Dt++,
                setTimeout(( () => {
                    Dt--
                }
                )),
                function(...e) {
                    const t = Be();
                    if (2 === e.length) {
                        const [r,n] = e;
                        return r ? t.withScope(( () => (t.getStackTop().scope = r,
                        n(r)))) : t.withScope(n)
                    }
                    t.withScope(e[0])
                }((r => {
                    var i;
                    r.addEventProcessor((e => (t.mechanism && (K(e, void 0, void 0),
                    X(e, t.mechanism)),
                    e.extra = {
                        ...e.extra,
                        arguments: n
                    },
                    e))),
                    i = e,
                    Be().captureException(i, function(e) {
                        if (e)
                            return function(e) {
                                return e instanceof De || "function" == typeof e
                            }(e) || function(e) {
                                return Object.keys(e).some((e => be.includes(e)))
                            }(e) ? {
                                captureContext: e
                            } : e
                    }(undefined))
                }
                )),
                e
            }
        };
        try {
            for (const t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
        } catch (e) {}
        H(n, e),
        U(e, "__sentry_wrapped__", n);
        try {
            Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                get: () => e.name
            })
        } catch (e) {}
        return n
    }
    const kt = "Breadcrumbs"
      , Mt = (e={}) => {
        const t = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e
        };
        return {
            name: kt,
            setupOnce() {},
            setup(e) {
                var r;
                t.console && function(e) {
                    const t = "console";
                    at(t, e),
                    st(t, ut)
                }(function(e) {
                    return function(t) {
                        if (we() !== e)
                            return;
                        const r = {
                            category: "console",
                            data: {
                                arguments: t.args,
                                logger: "console"
                            },
                            level: (n = t.level,
                            "warn" === n ? "warning" : At.includes(n) ? n : "log"),
                            message: k(t.args, " ")
                        };
                        var n;
                        if ("assert" === t.level) {
                            if (!1 !== t.args[0])
                                return;
                            r.message = `Assertion failed: ${k(t.args.slice(1), " ") || "console.assert"}`,
                            r.data.arguments = t.args.slice(1)
                        }
                        Se(r, {
                            input: t.args,
                            level: t.level
                        })
                    }
                }(e)),
                t.dom && (r = function(e, t) {
                    return function(r) {
                        if (we() !== e)
                            return;
                        let n, i, o = "object" == typeof t ? t.serializeAttribute : void 0, a = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                        a && a > 1024 && (Rt && m.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`),
                        a = 1024),
                        "string" == typeof o && (o = [o]);
                        try {
                            const e = r.event
                              , t = function(e) {
                                return !!e && !!e.target
                            }(e) ? e.target : e;
                            n = D(t, {
                                keyAttrs: o,
                                maxStringLength: a
                            }),
                            i = function(e) {
                                if (!N.HTMLElement)
                                    return null;
                                let t = e;
                                for (let e = 0; e < 5; e++) {
                                    if (!t)
                                        return null;
                                    if (t instanceof HTMLElement && t.dataset.sentryComponent)
                                        return t.dataset.sentryComponent;
                                    t = t.parentNode
                                }
                                return null
                            }(t)
                        } catch (e) {
                            n = "<unknown>"
                        }
                        if (0 === n.length)
                            return;
                        const s = {
                            category: `ui.${r.name}`,
                            message: n
                        };
                        i && (s.data = {
                            "ui.component_name": i
                        }),
                        Se(s, {
                            event: r.event,
                            name: r.name,
                            global: r.global
                        })
                    }
                }(e, t.dom),
                at("dom", r),
                st("dom", ft)),
                t.xhr && function(e) {
                    at("xhr", e),
                    st("xhr", yt)
                }(function(e) {
                    return function(t) {
                        if (we() !== e)
                            return;
                        const {startTimestamp: r, endTimestamp: n} = t
                          , i = t.xhr[mt];
                        if (!r || !n || !i)
                            return;
                        const {method: o, url: a, status_code: s, body: c} = i;
                        Se({
                            category: "xhr",
                            data: {
                                method: o,
                                url: a,
                                status_code: s
                            },
                            type: "http"
                        }, {
                            xhr: t.xhr,
                            input: c,
                            startTimestamp: r,
                            endTimestamp: n
                        })
                    }
                }(e)),
                t.fetch && function(e) {
                    const t = "fetch";
                    at(t, e),
                    st(t, bt)
                }(function(e) {
                    return function(t) {
                        if (we() !== e)
                            return;
                        const {startTimestamp: r, endTimestamp: n} = t;
                        if (n && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                            if (t.error)
                                Se({
                                    category: "fetch",
                                    data: t.fetchData,
                                    level: "error",
                                    type: "http"
                                }, {
                                    data: t.error,
                                    input: t.args,
                                    startTimestamp: r,
                                    endTimestamp: n
                                });
                            else {
                                const e = t.response;
                                Se({
                                    category: "fetch",
                                    data: {
                                        ...t.fetchData,
                                        status_code: e && e.status
                                    },
                                    type: "http"
                                }, {
                                    input: t.args,
                                    response: e,
                                    startTimestamp: r,
                                    endTimestamp: n
                                })
                            }
                    }
                }(e)),
                t.history && function(e) {
                    const t = "history";
                    at(t, e),
                    st(t, Tt)
                }(function(e) {
                    return function(t) {
                        if (we() !== e)
                            return;
                        let r = t.from
                          , n = t.to;
                        const i = Pt(Nt.location.href);
                        let o = r ? Pt(r) : void 0;
                        const a = Pt(n);
                        o && o.path || (o = i),
                        i.protocol === a.protocol && i.host === a.host && (n = a.relative),
                        i.protocol === o.protocol && i.host === o.host && (r = o.relative),
                        Se({
                            category: "navigation",
                            data: {
                                from: r,
                                to: n
                            }
                        })
                    }
                }(e)),
                t.sentry && e.on && e.on("beforeSendEvent", function(e) {
                    return function(t) {
                        we() === e && Se({
                            category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                            event_id: t.event_id,
                            level: t.level,
                            message: Y(t)
                        }, {
                            event: t
                        })
                    }
                }(e))
            }
        }
    }
      , jt = $e(kt, Mt)
      , Ut = "Dedupe"
      , Ht = () => {
        let e;
        return {
            name: Ut,
            setupOnce() {},
            processEvent(t) {
                if (t.type)
                    return t;
                try {
                    if (function(e, t) {
                        return !!t && (!!function(e, t) {
                            const r = e.message
                              , n = t.message;
                            return !(!r && !n) && (!(r && !n || !r && n) && (r === n && (!!qt(e, t) && !!Ft(e, t))))
                        }(e, t) || !!function(e, t) {
                            const r = Vt(t)
                              , n = Vt(e);
                            return !(!r || !n) && (r.type === n.type && r.value === n.value && (!!qt(e, t) && !!Ft(e, t)))
                        }(e, t))
                    }(t, e))
                        return Rt && m.warn("Event dropped due to being a duplicate of previously captured event."),
                        null
                } catch (e) {}
                return e = t
            }
        }
    }
      , Bt = $e(Ut, Ht);
    function Ft(e, t) {
        let r = Gt(e)
          , n = Gt(t);
        if (!r && !n)
            return !0;
        if (r && !n || !r && n)
            return !1;
        if (n.length !== r.length)
            return !1;
        for (let e = 0; e < n.length; e++) {
            const t = n[e]
              , i = r[e];
            if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function)
                return !1
        }
        return !0
    }
    function qt(e, t) {
        let r = e.fingerprint
          , n = t.fingerprint;
        if (!r && !n)
            return !0;
        if (r && !n || !r && n)
            return !1;
        try {
            return !(r.join("") !== n.join(""))
        } catch (e) {
            return !1
        }
    }
    function Vt(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }
    function Gt(e) {
        const t = e.exception;
        if (t)
            try {
                return t.values[0].stacktrace.frames
            } catch (e) {
                return
            }
    }
    let zt = null;
    function $t() {
        zt = d.onerror,
        d.onerror = function(e, t, r, n, i) {
            return ct("error", {
                column: n,
                error: i,
                line: r,
                msg: e,
                url: t
            }),
            !(!zt || zt.__SENTRY_LOADER__) && zt.apply(this, arguments)
        }
        ,
        d.onerror.__SENTRY_INSTRUMENTED__ = !0
    }
    let Wt = null;
    function Yt() {
        Wt = d.onunhandledrejection,
        d.onunhandledrejection = function(e) {
            return ct("unhandledrejection", e),
            !(Wt && !Wt.__SENTRY_LOADER__) || Wt.apply(this, arguments)
        }
        ,
        d.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
    }
    function Kt(e, t) {
        const r = Jt(e, t)
          , n = {
            type: t && t.name,
            value: Qt(t)
        };
        return r.length && (n.stacktrace = {
            frames: r
        }),
        void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"),
        n
    }
    function Xt(e, t) {
        return {
            exception: {
                values: [Kt(e, t)]
            }
        }
    }
    function Jt(e, t) {
        const r = t.stacktrace || t.stack || ""
          , n = function(e) {
            if (e) {
                if ("number" == typeof e.framesToPop)
                    return e.framesToPop;
                if (Zt.test(e.message))
                    return 1
            }
            return 0
        }(t);
        try {
            return e(r, n)
        } catch (e) {}
        return []
    }
    const Zt = /Minified React error #\d+;/i;
    function Qt(e) {
        const t = e && e.message;
        return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
    }
    function er(e, t, r, n, i) {
        let o;
        if (b(t) && t.error)
            return Xt(e, t.error);
        if (I(t) || _(t, "DOMException")) {
            const i = t;
            if ("stack"in t)
                o = Xt(e, t);
            else {
                const t = i.name || (I(i) ? "DOMError" : "DOMException")
                  , a = i.message ? `${t}: ${i.message}` : t;
                o = tr(e, a, r, n),
                K(o, a)
            }
            return "code"in i && (o.tags = {
                ...o.tags,
                "DOMException.code": `${i.code}`
            }),
            o
        }
        return E(t) ? Xt(e, t) : C(t) || T(t) ? (o = function(e, t, r, n) {
            const i = we()
              , o = i && i.getOptions().normalizeDepth
              , a = {
                exception: {
                    values: [{
                        type: T(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: rr(t, {
                            isUnhandledRejection: n
                        })
                    }]
                },
                extra: {
                    __serialized__: ve(t, o)
                }
            };
            if (r) {
                const t = Jt(e, r);
                t.length && (a.exception.values[0].stacktrace = {
                    frames: t
                })
            }
            return a
        }(e, t, r, i),
        X(o, {
            synthetic: !0
        }),
        o) : (o = tr(e, t, r, n),
        K(o, `${t}`, void 0),
        X(o, {
            synthetic: !0
        }),
        o)
    }
    function tr(e, t, r, n) {
        const i = {};
        if (n && r) {
            const n = Jt(e, r);
            n.length && (i.exception = {
                values: [{
                    value: t,
                    stacktrace: {
                        frames: n
                    }
                }]
            })
        }
        if (w(t)) {
            const {__sentry_template_string__: e, __sentry_template_values__: r} = t;
            return i.logentry = {
                message: e,
                params: r
            },
            i
        }
        return i.message = t,
        i
    }
    function rr(e, {isUnhandledRejection: t}) {
        const r = function(e, t=40) {
            const r = Object.keys(F(e));
            if (r.sort(),
            !r.length)
                return "[object has no keys]";
            if (r[0].length >= t)
                return x(r[0], t);
            for (let e = r.length; e > 0; e--) {
                const n = r.slice(0, e).join(", ");
                if (!(n.length > t))
                    return e === r.length ? n : x(n, t)
            }
            return ""
        }(e)
          , n = t ? "promise rejection" : "exception";
        return b(e) ? `Event \`ErrorEvent\` captured as ${n} with message \`${e.message}\`` : T(e) ? `Event \`${function(e) {
            try {
                const t = Object.getPrototypeOf(e);
                return t ? t.constructor.name : void 0
            } catch (e) {}
        }(e)}\` (type=${e.type}) captured as ${n}` : `Object captured as ${n} with keys: ${r}`
    }
    const nr = "GlobalHandlers"
      , ir = (e={}) => {
        const t = {
            onerror: !0,
            onunhandledrejection: !0,
            ...e
        };
        return {
            name: nr,
            setupOnce() {
                Error.stackTraceLimit = 50
            },
            setup(e) {
                t.onerror && (function(e) {
                    !function() {
                        const t = "error";
                        at(t, (t => {
                            const {stackParser: r, attachStacktrace: n} = cr();
                            if (we() !== e || Lt())
                                return;
                            const {msg: i, url: o, line: a, column: s, error: c} = t
                              , u = void 0 === c && S(i) ? function(e, t, r, n) {
                                const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
                                let o = b(e) ? e.message : e
                                  , a = "Error";
                                const s = o.match(i);
                                s && (a = s[1],
                                o = s[2]);
                                return ar({
                                    exception: {
                                        values: [{
                                            type: a,
                                            value: o
                                        }]
                                    }
                                }, t, r, n)
                            }(i, o, a, s) : ar(er(r, c || i, void 0, n, !1), o, a, s);
                            u.level = "error",
                            Ie(u, {
                                originalException: c,
                                mechanism: {
                                    handled: !1,
                                    type: "onerror"
                                }
                            })
                        }
                        )),
                        st(t, $t)
                    }()
                }(e),
                sr("onerror")),
                t.onunhandledrejection && (function(e) {
                    !function() {
                        const t = "unhandledrejection";
                        at(t, (t => {
                            const {stackParser: r, attachStacktrace: n} = cr();
                            if (we() !== e || Lt())
                                return;
                            const i = function(e) {
                                if (O(e))
                                    return e;
                                const t = e;
                                try {
                                    if ("reason"in t)
                                        return t.reason;
                                    if ("detail"in t && "reason"in t.detail)
                                        return t.detail.reason
                                } catch (e) {}
                                return e
                            }(t)
                              , o = O(i) ? {
                                exception: {
                                    values: [{
                                        type: "UnhandledRejection",
                                        value: `Non-Error promise rejection captured with value: ${String(i)}`
                                    }]
                                }
                            } : er(r, i, void 0, n, !0);
                            o.level = "error",
                            Ie(o, {
                                originalException: i,
                                mechanism: {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }
                            })
                        }
                        )),
                        st(t, Yt)
                    }()
                }(e),
                sr("onunhandledrejection"))
            }
        }
    }
      , or = $e(nr, ir);
    function ar(e, t, r, n) {
        const i = e.exception = e.exception || {}
          , o = i.values = i.values || []
          , a = o[0] = o[0] || {}
          , s = a.stacktrace = a.stacktrace || {}
          , c = s.frames = s.frames || []
          , u = isNaN(parseInt(n, 10)) ? void 0 : n
          , l = isNaN(parseInt(r, 10)) ? void 0 : r
          , d = S(t) && t.length > 0 ? t : function() {
            try {
                return N.document.location.href
            } catch (e) {
                return ""
            }
        }();
        return 0 === c.length && c.push({
            colno: u,
            filename: d,
            function: "?",
            in_app: !0,
            lineno: l
        }),
        e
    }
    function sr(e) {
        Rt && m.log(`Global Handler attached: ${e}`)
    }
    function cr() {
        const e = we();
        return e && e.getOptions() || {
            stackParser: () => [],
            attachStacktrace: !1
        }
    }
    const ur = "HttpContext"
      , lr = () => ({
        name: ur,
        setupOnce() {},
        preprocessEvent(e) {
            if (!Nt.navigator && !Nt.location && !Nt.document)
                return;
            const t = e.request && e.request.url || Nt.location && Nt.location.href
              , {referrer: r} = Nt.document || {}
              , {userAgent: n} = Nt.navigator || {}
              , i = {
                ...e.request && e.request.headers,
                ...r && {
                    Referer: r
                },
                ...n && {
                    "User-Agent": n
                }
            }
              , o = {
                ...e.request,
                ...t && {
                    url: t
                },
                headers: i
            };
            e.request = o
        }
    })
      , dr = $e(ur, lr);
    function hr(e, t, r=250, n, i, o, a) {
        if (!(o.exception && o.exception.values && a && P(a.originalException, Error)))
            return;
        const s = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
        var c, u;
        s && (o.exception.values = (c = pr(e, t, i, a.originalException, n, o.exception.values, s, 0),
        u = r,
        c.map((e => (e.value && (e.value = x(e.value, u)),
        e)))))
    }
    function pr(e, t, r, n, i, o, a, s) {
        if (o.length >= r + 1)
            return o;
        let c = [...o];
        if (P(n[i], Error)) {
            fr(a, s);
            const o = e(t, n[i])
              , u = c.length;
            gr(o, i, u, s),
            c = pr(e, t, r, n[i], i, [o, ...c], o, u)
        }
        return Array.isArray(n.errors) && n.errors.forEach(( (n, o) => {
            if (P(n, Error)) {
                fr(a, s);
                const u = e(t, n)
                  , l = c.length;
                gr(u, `errors[${o}]`, l, s),
                c = pr(e, t, r, n, i, [u, ...c], u, l)
            }
        }
        )),
        c
    }
    function fr(e, t) {
        e.mechanism = e.mechanism || {
            type: "generic",
            handled: !0
        },
        e.mechanism = {
            ...e.mechanism,
            ..."AggregateError" === e.type && {
                is_exception_group: !0
            },
            exception_id: t
        }
    }
    function gr(e, t, r, n) {
        e.mechanism = e.mechanism || {
            type: "generic",
            handled: !0
        },
        e.mechanism = {
            ...e.mechanism,
            type: "chained",
            source: t,
            exception_id: r,
            parent_id: n
        }
    }
    const vr = "LinkedErrors"
      , mr = (e={}) => {
        const t = e.limit || 5
          , r = e.key || "cause";
        return {
            name: vr,
            setupOnce() {},
            preprocessEvent(e, n, i) {
                const o = i.getOptions();
                hr(Kt, o.stackParser, o.maxValueLength, r, t, e, n)
            }
        }
    }
      , yr = $e(vr, mr)
      , Er = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
      , _r = "TryCatch"
      , br = (e={}) => {
        const t = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...e
        };
        return {
            name: _r,
            setupOnce() {
                t.setTimeout && j(Nt, "setTimeout", Sr),
                t.setInterval && j(Nt, "setInterval", Sr),
                t.requestAnimationFrame && j(Nt, "requestAnimationFrame", wr),
                t.XMLHttpRequest && "XMLHttpRequest"in Nt && j(XMLHttpRequest.prototype, "send", Or);
                const e = t.eventTarget;
                e && (Array.isArray(e) ? e : Er).forEach(Cr)
            }
        }
    }
      , Ir = $e(_r, br);
    function Sr(e) {
        return function(...t) {
            const r = t[0];
            return t[0] = xt(r, {
                mechanism: {
                    data: {
                        function: fe(e)
                    },
                    handled: !1,
                    type: "instrument"
                }
            }),
            e.apply(this, t)
        }
    }
    function wr(e) {
        return function(t) {
            return e.apply(this, [xt(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: fe(e)
                    },
                    handled: !1,
                    type: "instrument"
                }
            })])
        }
    }
    function Or(e) {
        return function(...t) {
            const r = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e => {
                e in r && "function" == typeof r[e] && j(r, e, (function(t) {
                    const r = {
                        mechanism: {
                            data: {
                                function: e,
                                handler: fe(t)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }
                      , n = B(t);
                    return n && (r.mechanism.data.handler = fe(n)),
                    xt(t, r)
                }
                ))
            }
            )),
            e.apply(this, t)
        }
    }
    function Cr(e) {
        const t = Nt
          , r = t[e] && t[e].prototype;
        r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (j(r, "addEventListener", (function(t) {
            return function(r, n, i) {
                try {
                    "function" == typeof n.handleEvent && (n.handleEvent = xt(n.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: fe(n),
                                target: e
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }))
                } catch (e) {}
                return t.apply(this, [r, xt(n, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: fe(n),
                            target: e
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }), i])
            }
        }
        )),
        j(r, "removeEventListener", (function(e) {
            return function(t, r, n) {
                const i = r;
                try {
                    const r = i && i.__sentry_wrapped__;
                    r && e.call(this, t, r, n)
                } catch (e) {}
                return e.call(this, t, i, n)
            }
        }
        )))
    }
    const Tr = [Xe(), rt(), br(), Mt(), ir(), mr(), Ht(), lr()];
    function Ar(e, t) {
        const r = {
            type: t.name || t.constructor.name,
            value: t.message
        }
          , n = function(e, t) {
            return e(t.stack || "", 1)
        }(e, t);
        return n.length && (r.stacktrace = {
            frames: n
        }),
        r
    }
    const Pr = "LinkedErrors"
      , Rr = $e(Pr, ( (e={}) => {
        const t = e.limit || 5
          , r = e.key || "cause";
        return {
            name: Pr,
            setupOnce() {},
            preprocessEvent(e, n, i) {
                const o = i.getOptions();
                hr(Ar, o.stackParser, o.maxValueLength, r, t, e, n)
            }
        }
    }
    ))
      , Nr = n;
    let Dr = {};
    Nt.Sentry && Nt.Sentry.Integrations && (Dr = Nt.Sentry.Integrations);
    const Lr = {
        ...Dr,
        ...Nr,
        ...i
    }
      , xr = "?";
    function kr(e, t, r, n) {
        const i = {
            filename: e,
            function: t,
            in_app: !0
        };
        return void 0 !== r && (i.lineno = r),
        void 0 !== n && (i.colno = n),
        i
    }
    const Mr = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , jr = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , Ur = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , Hr = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , Br = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , Fr = function(...e) {
        const t = e.sort(( (e, t) => e[0] - t[0])).map((e => e[1]));
        return (e, r=0) => {
            const n = []
              , i = e.split("\n");
            for (let e = r; e < i.length; e++) {
                const r = i[e];
                if (r.length > 1024)
                    continue;
                const o = de.test(r) ? r.replace(de, "$1") : r;
                if (!o.match(/\S*Error: /)) {
                    for (const e of t) {
                        const t = e(o);
                        if (t) {
                            n.push(t);
                            break
                        }
                    }
                    if (n.length >= 50)
                        break
                }
            }
            return function(e) {
                if (!e.length)
                    return [];
                const t = Array.from(e);
                return /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(),
                t.reverse(),
                he.test(t[t.length - 1].function || "") && (t.pop(),
                he.test(t[t.length - 1].function || "") && t.pop()),
                t.slice(0, 50).map((e => ({
                    ...e,
                    filename: e.filename || t[t.length - 1].filename,
                    function: e.function || "?"
                })))
            }(n)
        }
    }([30, e => {
        const t = Mr.exec(e);
        if (t) {
            if (t[2] && 0 === t[2].indexOf("eval")) {
                const e = jr.exec(t[2]);
                e && (t[2] = e[1],
                t[3] = e[2],
                t[4] = e[3])
            }
            const [e,r] = qr(t[1] || xr, t[2]);
            return kr(r, e, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
        }
    }
    ], [50, e => {
        const t = Ur.exec(e);
        if (t) {
            if (t[3] && t[3].indexOf(" > eval") > -1) {
                const e = Hr.exec(t[3]);
                e && (t[1] = t[1] || "eval",
                t[3] = e[1],
                t[4] = e[2],
                t[5] = "")
            }
            let e = t[3]
              , r = t[1] || xr;
            return [r,e] = qr(r, e),
            kr(e, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        }
    }
    ], [40, e => {
        const t = Br.exec(e);
        return t ? kr(t[2], t[1] || xr, +t[3], t[4] ? +t[4] : void 0) : void 0
    }
    ])
      , qr = (e, t) => {
        const r = -1 !== e.indexOf("safari-extension")
          , n = -1 !== e.indexOf("safari-web-extension");
        return r || n ? [-1 !== e.indexOf("@") ? e.split("@")[0] : xr, r ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
    }
    ;
    class Vr extends Error {
        constructor(e, t="warn") {
            super(e),
            this.message = e,
            this.name = new.target.prototype.constructor.name,
            Object.setPrototypeOf(this, new.target.prototype),
            this.logLevel = t
        }
    }
    const Gr = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function zr(e, t=!1) {
        const {host: r, path: n, pass: i, port: o, projectId: a, protocol: s, publicKey: c} = e;
        return `${s}://${c}${t && i ? `:${i}` : ""}@${r}${o ? `:${o}` : ""}/${n ? `${n}/` : n}${a}`
    }
    function $r(e) {
        return {
            protocol: e.protocol,
            publicKey: e.publicKey || "",
            pass: e.pass || "",
            host: e.host,
            port: e.port || "",
            path: e.path || "",
            projectId: e.projectId
        }
    }
    function Wr(e, t=[]) {
        return [e, t]
    }
    function Yr(e, t) {
        const [r,n] = e;
        return [r, [...n, t]]
    }
    function Kr(e, t) {
        const r = e[1];
        for (const e of r)
            if (t(e, e[0].type))
                return !0;
        return !1
    }
    function Xr(e, t) {
        return (t || new TextEncoder).encode(e)
    }
    function Jr(e, t) {
        const [r,n] = e;
        let i = JSON.stringify(r);
        function o(e) {
            "string" == typeof i ? i = "string" == typeof e ? i + e : [Xr(i, t), e] : i.push("string" == typeof e ? Xr(e, t) : e)
        }
        for (const e of n) {
            const [t,r] = e;
            if (o(`\n${JSON.stringify(t)}\n`),
            "string" == typeof r || r instanceof Uint8Array)
                o(r);
            else {
                let e;
                try {
                    e = JSON.stringify(r)
                } catch (t) {
                    e = JSON.stringify(ge(r))
                }
                o(e)
            }
        }
        return "string" == typeof i ? i : function(e) {
            const t = e.reduce(( (e, t) => e + t.length), 0)
              , r = new Uint8Array(t);
            let n = 0;
            for (const t of e)
                r.set(t, n),
                n += t.length;
            return r
        }(i)
    }
    function Zr(e, t) {
        const r = "string" == typeof e.data ? Xr(e.data, t) : e.data;
        return [G({
            type: "attachment",
            length: r.length,
            filename: e.filename,
            content_type: e.contentType,
            attachment_type: e.attachmentType
        }), r]
    }
    const Qr = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        span: "span",
        statsd: "metric_bucket"
    };
    function en(e) {
        return Qr[e]
    }
    function tn(e) {
        if (!e || !e.sdk)
            return;
        const {name: t, version: r} = e.sdk;
        return {
            name: t,
            version: r
        }
    }
    function rn(e, t, r=function(e) {
        const t = [];
        function r(e) {
            return t.splice(t.indexOf(e), 1)[0]
        }
        return {
            $: t,
            add: function(n) {
                if (!(void 0 === e || t.length < e))
                    return te(new Vr("Not adding Promise because buffer limit was reached."));
                const i = n();
                return -1 === t.indexOf(i) && t.push(i),
                i.then(( () => r(i))).then(null, ( () => r(i).then(null, ( () => {}
                )))),
                i
            },
            drain: function(e) {
                return new re(( (r, n) => {
                    let i = t.length;
                    if (!i)
                        return r(!0);
                    const o = setTimeout(( () => {
                        e && e > 0 && r(!1)
                    }
                    ), e);
                    t.forEach((e => {
                        ee(e).then(( () => {
                            --i || (clearTimeout(o),
                            r(!0))
                        }
                        ), n)
                    }
                    ))
                }
                ))
            }
        }
    }(e.bufferSize || 30)) {
        let n = {};
        function i(i) {
            const o = [];
            if (Kr(i, ( (t, r) => {
                const i = en(r);
                if (function(e, t, r=Date.now()) {
                    return function(e, t) {
                        return e[t] || e.all || 0
                    }(e, t) > r
                }(n, i)) {
                    const n = nn(t, r);
                    e.recordDroppedEvent("ratelimit_backoff", i, n)
                } else
                    o.push(t)
            }
            )),
            0 === o.length)
                return ee();
            const a = Wr(i[0], o)
              , s = t => {
                Kr(a, ( (r, n) => {
                    const i = nn(r, n);
                    e.recordDroppedEvent(t, en(n), i)
                }
                ))
            }
            ;
            return r.add(( () => t({
                body: Jr(a, e.textEncoder)
            }).then((e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && Z && m.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
            n = function(e, {statusCode: t, headers: r}, n=Date.now()) {
                const i = {
                    ...e
                }
                  , o = r && r["x-sentry-rate-limits"]
                  , a = r && r["retry-after"];
                if (o)
                    for (const e of o.trim().split(",")) {
                        const [t,r,,,o] = e.split(":", 5)
                          , a = parseInt(t, 10)
                          , s = 1e3 * (isNaN(a) ? 60 : a);
                        if (r)
                            for (const e of r.split(";"))
                                "metric_bucket" === e && o && !o.split(";").includes("custom") || (i[e] = n + s);
                        else
                            i.all = n + s
                    }
                else
                    a ? i.all = n + function(e, t=Date.now()) {
                        const r = parseInt(`${e}`, 10);
                        if (!isNaN(r))
                            return 1e3 * r;
                        const n = Date.parse(`${e}`);
                        return isNaN(n) ? 6e4 : n - t
                    }(a, n) : 429 === t && (i.all = n + 6e4);
                return i
            }(n, e),
            e)), (e => {
                throw s("network_error"),
                e
            }
            )))).then((e => e), (e => {
                if (e instanceof Vr)
                    return Z && m.error("Skipped sending event because buffer is full."),
                    s("queue_overflow"),
                    ee();
                throw e
            }
            ))
        }
        return i.__sentry__baseTransport__ = !0,
        {
            send: i,
            flush: e => r.drain(e)
        }
    }
    function nn(e, t) {
        if ("event" === t || "transaction" === t)
            return Array.isArray(e) ? e[1] : void 0
    }
    let on;
    function an(e, t=function() {
        if (on)
            return on;
        if (_t(Nt.fetch))
            return on = Nt.fetch.bind(Nt);
        const e = Nt.document;
        let t = Nt.fetch;
        if (e && "function" == typeof e.createElement)
            try {
                const r = e.createElement("iframe");
                r.hidden = !0,
                e.head.appendChild(r);
                const n = r.contentWindow;
                n && n.fetch && (t = n.fetch),
                e.head.removeChild(r)
            } catch (e) {
                Rt && m.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
            }
        return on = t.bind(Nt)
    }()) {
        let r = 0
          , n = 0;
        return rn(e, (function(i) {
            const o = i.body.length;
            r += o,
            n++;
            const a = {
                body: i.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: e.headers,
                keepalive: r <= 6e4 && n < 15,
                ...e.fetchOptions
            };
            try {
                return t(e.url, a).then((e => (r -= o,
                n--,
                {
                    statusCode: e.status,
                    headers: {
                        "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": e.headers.get("Retry-After")
                    }
                })))
            } catch (e) {
                return on = void 0,
                r -= o,
                n--,
                te(e)
            }
        }
        ))
    }
    function sn(e, t={}) {
        const r = "string" == typeof t ? t : t.tunnel
          , n = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
        return r || `${function(e) {
            return `${function(e) {
                const t = e.protocol ? `${e.protocol}:` : ""
                  , r = e.port ? `:${e.port}` : "";
                return `${t}//${e.host}${r}${e.path ? `/${e.path}` : ""}/api/`
            }(e)}${e.projectId}/envelope/`
        }(e)}?${function(e, t) {
            return r = {
                sentry_key: e.publicKey,
                sentry_version: "7",
                ...t && {
                    sentry_client: `${t.name}/${t.version}`
                }
            },
            Object.keys(r).map((e => `${encodeURIComponent(e)}=${encodeURIComponent(r[e])}`)).join("&");
            var r
        }(e, n)}`
    }
    const cn = "Not capturing exception because it's already been captured.";
    class un {
        constructor(e) {
            if (this._options = e,
            this._integrations = {},
            this._integrationsInitialized = !1,
            this._numProcessing = 0,
            this._outcomes = {},
            this._hooks = {},
            this._eventProcessors = [],
            e.dsn ? this._dsn = function(e) {
                const t = "string" == typeof e ? function(e) {
                    const t = Gr.exec(e);
                    if (!t)
                        return void v(( () => {
                            console.error(`Invalid Sentry Dsn: ${e}`)
                        }
                        ));
                    const [r,n,i="",o,a="",s] = t.slice(1);
                    let c = ""
                      , u = s;
                    const l = u.split("/");
                    if (l.length > 1 && (c = l.slice(0, -1).join("/"),
                    u = l.pop()),
                    u) {
                        const e = u.match(/^\d+/);
                        e && (u = e[0])
                    }
                    return $r({
                        host: o,
                        pass: i,
                        path: c,
                        projectId: u,
                        port: a,
                        protocol: r,
                        publicKey: n
                    })
                }(e) : $r(e);
                if (t && function(e) {
                    if (!u)
                        return !0;
                    const {port: t, projectId: r, protocol: n} = e;
                    return !(["protocol", "publicKey", "host", "projectId"].find((t => !e[t] && (m.error(`Invalid Sentry Dsn: ${t} missing`),
                    !0))) || (r.match(/^\d+$/) ? function(e) {
                        return "http" === e || "https" === e
                    }(n) ? t && isNaN(parseInt(t, 10)) && (m.error(`Invalid Sentry Dsn: Invalid port ${t}`),
                    1) : (m.error(`Invalid Sentry Dsn: Invalid protocol ${n}`),
                    1) : (m.error(`Invalid Sentry Dsn: Invalid projectId ${r}`),
                    1)))
                }(t))
                    return t
            }(e.dsn) : Z && m.warn("No DSN provided, client will not send events."),
            this._dsn) {
                const t = sn(this._dsn, e);
                this._transport = e.transport({
                    tunnel: this._options.tunnel,
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: t
                })
            }
        }
        captureException(e, t, r) {
            if (J(e))
                return void (Z && m.log(cn));
            let n = t && t.event_id;
            return this._process(this.eventFromException(e, t).then((e => this._captureEvent(e, t, r))).then((e => {
                n = e
            }
            ))),
            n
        }
        captureMessage(e, t, r, n) {
            let i = r && r.event_id;
            const o = w(e) ? e : String(e)
              , a = O(e) ? this.eventFromMessage(o, t, r) : this.eventFromException(e, r);
            return this._process(a.then((e => this._captureEvent(e, r, n))).then((e => {
                i = e
            }
            ))),
            i
        }
        captureEvent(e, t, r) {
            if (t && t.originalException && J(t.originalException))
                return void (Z && m.log(cn));
            let n = t && t.event_id;
            const i = (e.sdkProcessingMetadata || {}).capturedSpanScope;
            return this._process(this._captureEvent(e, t, i || r).then((e => {
                n = e
            }
            ))),
            n
        }
        captureSession(e) {
            "string" != typeof e.release ? Z && m.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
            le(e, {
                init: !1
            }))
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getSdkMetadata() {
            return this._options._metadata
        }
        getTransport() {
            return this._transport
        }
        flush(e) {
            const t = this._transport;
            return t ? (this.metricsAggregator && this.metricsAggregator.flush(),
            this._isClientDoneProcessing(e).then((r => t.flush(e).then((e => r && e))))) : ee(!0)
        }
        close(e) {
            return this.flush(e).then((e => (this.getOptions().enabled = !1,
            this.metricsAggregator && this.metricsAggregator.close(),
            e)))
        }
        getEventProcessors() {
            return this._eventProcessors
        }
        addEventProcessor(e) {
            this._eventProcessors.push(e)
        }
        setupIntegrations(e) {
            (e && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations()
        }
        init() {
            this._isEnabled() && this._setupIntegrations()
        }
        getIntegrationById(e) {
            return this.getIntegrationByName(e)
        }
        getIntegrationByName(e) {
            return this._integrations[e]
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null
            } catch (t) {
                return Z && m.warn(`Cannot retrieve integration ${e.id} from the current Client`),
                null
            }
        }
        addIntegration(e) {
            const t = this._integrations[e.name];
            ze(this, e, this._integrations),
            t || Ge(this, [e])
        }
        sendEvent(e, t={}) {
            this.emit("beforeSendEvent", e, t);
            let r = function(e, t, r, n) {
                const i = tn(r)
                  , o = e.type && "replay_event" !== e.type ? e.type : "event";
                !function(e, t) {
                    t && (e.sdk = e.sdk || {},
                    e.sdk.name = e.sdk.name || t.name,
                    e.sdk.version = e.sdk.version || t.version,
                    e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []],
                    e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []])
                }(e, r && r.sdk);
                const a = function(e, t, r, n) {
                    const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                    return {
                        event_id: e.event_id,
                        sent_at: (new Date).toISOString(),
                        ...t && {
                            sdk: t
                        },
                        ...!!r && n && {
                            dsn: zr(n)
                        },
                        ...i && {
                            trace: G({
                                ...i
                            })
                        }
                    }
                }(e, i, n, t);
                return delete e.sdkProcessingMetadata,
                Wr(a, [[{
                    type: o
                }, e]])
            }(e, this._dsn, this._options._metadata, this._options.tunnel);
            for (const e of t.attachments || [])
                r = Yr(r, Zr(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
            const n = this._sendEnvelope(r);
            n && n.then((t => this.emit("afterSendEvent", e, t)), null)
        }
        sendSession(e) {
            const t = function(e, t, r, n) {
                const i = tn(r);
                return Wr({
                    sent_at: (new Date).toISOString(),
                    ...i && {
                        sdk: i
                    },
                    ...!!n && t && {
                        dsn: zr(t)
                    }
                }, ["aggregates"in e ? [{
                    type: "sessions"
                }, e] : [{
                    type: "session"
                }, e.toJSON()]])
            }(e, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(t)
        }
        recordDroppedEvent(e, t, r) {
            if (this._options.sendClientReports) {
                const n = "number" == typeof r ? r : 1
                  , i = `${e}:${t}`;
                Z && m.log(`Recording outcome: "${i}"${n > 1 ? ` (${n} times)` : ""}`),
                this._outcomes[i] = (this._outcomes[i] || 0) + n
            }
        }
        captureAggregateMetrics(e) {
            Z && m.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);
            const t = function(e, t, r, n) {
                const i = {
                    sent_at: (new Date).toISOString()
                };
                r && r.sdk && (i.sdk = {
                    name: r.sdk.name,
                    version: r.sdk.version
                }),
                n && t && (i.dsn = zr(t));
                const o = function(e) {
                    const t = function(e) {
                        let t = "";
                        for (const r of e) {
                            const e = Object.entries(r.tags)
                              , n = e.length > 0 ? `|#${e.map(( ([e,t]) => `${e}:${t}`)).join(",")}` : "";
                            t += `${r.name}@${r.unit}:${r.metric}|${r.metricType}${n}|T${r.timestamp}\n`
                        }
                        return t
                    }(e);
                    return [{
                        type: "statsd",
                        length: t.length
                    }, t]
                }(e);
                return Wr(i, [o])
            }(e, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(t)
        }
        on(e, t) {
            this._hooks[e] || (this._hooks[e] = []),
            this._hooks[e].push(t)
        }
        emit(e, ...t) {
            this._hooks[e] && this._hooks[e].forEach((e => e(...t)))
        }
        _setupIntegrations() {
            const {integrations: e} = this._options;
            this._integrations = function(e, t) {
                const r = {};
                return t.forEach((t => {
                    t && ze(e, t, r)
                }
                )),
                r
            }(this, e),
            Ge(this, e),
            this._integrationsInitialized = !0
        }
        _updateSessionFromEvent(e, t) {
            let r = !1
              , n = !1;
            const i = t.exception && t.exception.values;
            if (i) {
                n = !0;
                for (const e of i) {
                    const t = e.mechanism;
                    if (t && !1 === t.handled) {
                        r = !0;
                        break
                    }
                }
            }
            const o = "ok" === e.status;
            (o && 0 === e.errors || o && r) && (le(e, {
                ...r && {
                    status: "crashed"
                },
                errors: e.errors || Number(n || r)
            }),
            this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new re((t => {
                let r = 0;
                const n = setInterval(( () => {
                    0 == this._numProcessing ? (clearInterval(n),
                    t(!0)) : (r += 1,
                    e && r >= e && (clearInterval(n),
                    t(!1)))
                }
                ), 1)
            }
            ))
        }
        _isEnabled() {
            return !1 !== this.getOptions().enabled && void 0 !== this._transport
        }
        _prepareEvent(e, t, r, n=function() {
            return Be().getIsolationScope()
        }()) {
            const i = this.getOptions()
              , o = Object.keys(this._integrations);
            return !t.integrations && o.length > 0 && (t.integrations = o),
            this.emit("preprocessEvent", e, t),
            function(e, t, r, n, i, o) {
                const {normalizeDepth: a=3, normalizeMaxBreadth: s=1e3} = e
                  , c = {
                    ...t,
                    event_id: t.event_id || r.event_id || $(),
                    timestamp: t.timestamp || ae()
                }
                  , u = r.integrations || e.integrations.map((e => e.name));
                !function(e, t) {
                    const {environment: r, release: n, dist: i, maxValueLength: o=250} = t;
                    "environment"in e || (e.environment = "environment"in t ? r : ue),
                    void 0 === e.release && void 0 !== n && (e.release = n),
                    void 0 === e.dist && void 0 !== i && (e.dist = i),
                    e.message && (e.message = x(e.message, o));
                    const a = e.exception && e.exception.values && e.exception.values[0];
                    a && a.value && (a.value = x(a.value, o));
                    const s = e.request;
                    s && s.url && (s.url = x(s.url, o))
                }(c, e),
                function(e, t) {
                    t.length > 0 && (e.sdk = e.sdk || {},
                    e.sdk.integrations = [...e.sdk.integrations || [], ...t])
                }(c, u),
                void 0 === t.type && function(e, t) {
                    const r = d._sentryDebugIds;
                    if (!r)
                        return;
                    let n;
                    const i = _e.get(t);
                    i ? n = i : (n = new Map,
                    _e.set(t, n));
                    const o = Object.keys(r).reduce(( (e, i) => {
                        let o;
                        const a = n.get(i);
                        a ? o = a : (o = t(i),
                        n.set(i, o));
                        for (let t = o.length - 1; t >= 0; t--) {
                            const n = o[t];
                            if (n.filename) {
                                e[n.filename] = r[i];
                                break
                            }
                        }
                        return e
                    }
                    ), {});
                    try {
                        e.exception.values.forEach((e => {
                            e.stacktrace.frames.forEach((e => {
                                e.filename && (e.debug_id = o[e.filename])
                            }
                            ))
                        }
                        ))
                    } catch (e) {}
                }(c, e.stackParser);
                const l = function(e, t) {
                    if (!t)
                        return e;
                    const r = e ? e.clone() : new De;
                    return r.update(t),
                    r
                }(n, r.captureContext);
                r.mechanism && X(c, r.mechanism);
                const h = i && i.getEventProcessors ? i.getEventProcessors() : []
                  , p = (Ne || (Ne = new De),
                Ne).getScopeData();
                o && Pe(p, o.getScopeData()),
                l && Pe(p, l.getScopeData());
                const f = [...r.attachments || [], ...p.attachments];
                return f.length && (r.attachments = f),
                Ae(c, p),
                oe([...h, ...ne(), ...p.eventProcessors], c, r).then((e => (e && function(e) {
                    const t = {};
                    try {
                        e.exception.values.forEach((e => {
                            e.stacktrace.frames.forEach((e => {
                                e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id),
                                delete e.debug_id)
                            }
                            ))
                        }
                        ))
                    } catch (e) {}
                    if (0 === Object.keys(t).length)
                        return;
                    e.debug_meta = e.debug_meta || {},
                    e.debug_meta.images = e.debug_meta.images || [];
                    const r = e.debug_meta.images;
                    Object.keys(t).forEach((e => {
                        r.push({
                            type: "sourcemap",
                            code_file: e,
                            debug_id: t[e]
                        })
                    }
                    ))
                }(e),
                "number" == typeof a && a > 0 ? function(e, t, r) {
                    if (!e)
                        return null;
                    const n = {
                        ...e,
                        ...e.breadcrumbs && {
                            breadcrumbs: e.breadcrumbs.map((e => ({
                                ...e,
                                ...e.data && {
                                    data: ge(e.data, t, r)
                                }
                            })))
                        },
                        ...e.user && {
                            user: ge(e.user, t, r)
                        },
                        ...e.contexts && {
                            contexts: ge(e.contexts, t, r)
                        },
                        ...e.extra && {
                            extra: ge(e.extra, t, r)
                        }
                    };
                    return e.contexts && e.contexts.trace && n.contexts && (n.contexts.trace = e.contexts.trace,
                    e.contexts.trace.data && (n.contexts.trace.data = ge(e.contexts.trace.data, t, r))),
                    e.spans && (n.spans = e.spans.map((e => {
                        const n = Ee(e).data;
                        return n && (e.data = ge(n, t, r)),
                        e
                    }
                    ))),
                    n
                }(e, a, s) : e)))
            }(i, e, t, r, this, n).then((e => {
                if (null === e)
                    return e;
                const t = {
                    ...n.getPropagationContext(),
                    ...r ? r.getPropagationContext() : void 0
                };
                if ((!e.contexts || !e.contexts.trace) && t) {
                    const {traceId: n, spanId: i, parentSpanId: o, dsc: a} = t;
                    e.contexts = {
                        trace: {
                            trace_id: n,
                            span_id: i,
                            parent_span_id: o
                        },
                        ...e.contexts
                    };
                    const s = a || Ce(n, this, r);
                    e.sdkProcessingMetadata = {
                        dynamicSamplingContext: s,
                        ...e.sdkProcessingMetadata
                    }
                }
                return e
            }
            ))
        }
        _captureEvent(e, t={}, r) {
            return this._processEvent(e, t, r).then((e => e.event_id), (e => {
                if (Z) {
                    const t = e;
                    "log" === t.logLevel ? m.log(t.message) : m.warn(t)
                }
            }
            ))
        }
        _processEvent(e, t, r) {
            const n = this.getOptions()
              , {sampleRate: i} = n
              , o = dn(e)
              , a = ln(e)
              , s = e.type || "error"
              , c = `before send for type \`${s}\``;
            if (a && "number" == typeof i && Math.random() > i)
                return this.recordDroppedEvent("sample_rate", "error", e),
                te(new Vr(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"));
            const u = "replay_event" === s ? "replay" : s
              , l = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
            return this._prepareEvent(e, t, r, l).then((r => {
                if (null === r)
                    throw this.recordDroppedEvent("event_processor", u, e),
                    new Vr("An event processor returned `null`, will not send event.","log");
                if (t.data && !0 === t.data.__sentry__)
                    return r;
                const i = function(e, t, r) {
                    const {beforeSend: n, beforeSendTransaction: i} = e;
                    if (ln(t) && n)
                        return n(t, r);
                    if (dn(t) && i) {
                        if (t.spans) {
                            const e = t.spans.length;
                            t.sdkProcessingMetadata = {
                                ...t.sdkProcessingMetadata,
                                spanCountBeforeProcessing: e
                            }
                        }
                        return i(t, r)
                    }
                    return t
                }(n, r, t);
                return function(e, t) {
                    const r = `${t} must return \`null\` or a valid event.`;
                    if (A(e))
                        return e.then((e => {
                            if (!C(e) && null !== e)
                                throw new Vr(r);
                            return e
                        }
                        ), (e => {
                            throw new Vr(`${t} rejected with ${e}`)
                        }
                        ));
                    if (!C(e) && null !== e)
                        throw new Vr(r);
                    return e
                }(i, c)
            }
            )).then((n => {
                if (null === n) {
                    if (this.recordDroppedEvent("before_send", u, e),
                    o) {
                        const t = 1 + (e.spans || []).length;
                        this.recordDroppedEvent("before_send", "span", t)
                    }
                    throw new Vr(`${c} returned \`null\`, will not send event.`,"log")
                }
                const i = r && r.getSession();
                if (!o && i && this._updateSessionFromEvent(i, n),
                o) {
                    const e = (n.sdkProcessingMetadata && n.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (n.spans ? n.spans.length : 0);
                    e > 0 && this.recordDroppedEvent("before_send", "span", e)
                }
                const a = n.transaction_info;
                if (o && a && n.transaction !== e.transaction) {
                    const e = "custom";
                    n.transaction_info = {
                        ...a,
                        source: e
                    }
                }
                return this.sendEvent(n, t),
                n
            }
            )).then(null, (e => {
                if (e instanceof Vr)
                    throw e;
                throw this.captureException(e, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: e
                }),
                new Vr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
            }
            ))
        }
        _process(e) {
            this._numProcessing++,
            e.then((e => (this._numProcessing--,
            e)), (e => (this._numProcessing--,
            e)))
        }
        _sendEnvelope(e) {
            if (this.emit("beforeEnvelope", e),
            this._isEnabled() && this._transport)
                return this._transport.send(e).then(null, (e => {
                    Z && m.error("Error while sending event:", e)
                }
                ));
            Z && m.error("Transport disabled")
        }
        _clearOutcomes() {
            const e = this._outcomes;
            return this._outcomes = {},
            Object.keys(e).map((t => {
                const [r,n] = t.split(":");
                return {
                    reason: r,
                    category: n,
                    quantity: e[t]
                }
            }
            ))
        }
    }
    function ln(e) {
        return void 0 === e.type
    }
    function dn(e) {
        return "transaction" === e.type
    }
    class hn extends un {
        constructor(e) {
            !function(e, t, r=[t], n="npm") {
                const i = e._metadata || {};
                i.sdk || (i.sdk = {
                    name: `sentry.javascript.${t}`,
                    packages: r.map((e => ({
                        name: `${n}:@sentry/${e}`,
                        version: xe
                    }))),
                    version: xe
                }),
                e._metadata = i
            }(e, "browser", ["browser"], Nt.SENTRY_SDK_SOURCE || "npm"),
            super(e),
            e.sendClientReports && Nt.document && Nt.document.addEventListener("visibilitychange", ( () => {
                "hidden" === Nt.document.visibilityState && this._flushOutcomes()
            }
            ))
        }
        eventFromException(e, t) {
            return function(e, t, r, n) {
                const i = er(e, t, r && r.syntheticException || void 0, n);
                return X(i),
                i.level = "error",
                r && r.event_id && (i.event_id = r.event_id),
                ee(i)
            }(this._options.stackParser, e, t, this._options.attachStacktrace)
        }
        eventFromMessage(e, t="info", r) {
            return function(e, t, r="info", n, i) {
                const o = tr(e, t, n && n.syntheticException || void 0, i);
                return o.level = r,
                n && n.event_id && (o.event_id = n.event_id),
                ee(o)
            }(this._options.stackParser, e, t, r, this._options.attachStacktrace)
        }
        captureUserFeedback(e) {
            if (!this._isEnabled())
                return void (Rt && m.warn("SDK not enabled, will not capture user feedback."));
            const t = function(e, {metadata: t, tunnel: r, dsn: n}) {
                const i = {
                    event_id: e.event_id,
                    sent_at: (new Date).toISOString(),
                    ...t && t.sdk && {
                        sdk: {
                            name: t.sdk.name,
                            version: t.sdk.version
                        }
                    },
                    ...!!r && !!n && {
                        dsn: zr(n)
                    }
                }
                  , o = function(e) {
                    return [{
                        type: "user_report"
                    }, e]
                }(e);
                return Wr(i, [o])
            }(e, {
                metadata: this.getSdkMetadata(),
                dsn: this.getDsn(),
                tunnel: this.getOptions().tunnel
            });
            this._sendEnvelope(t)
        }
        _prepareEvent(e, t, r) {
            return e.platform = e.platform || "javascript",
            super._prepareEvent(e, t, r)
        }
        _flushOutcomes() {
            const e = this._clearOutcomes();
            if (0 === e.length)
                return void (Rt && m.log("No outcomes to send"));
            if (!this._dsn)
                return void (Rt && m.log("No dsn provided, will not send outcomes"));
            Rt && m.log("Sending outcomes:", e);
            const t = (r = e,
            Wr((n = this._options.tunnel && zr(this._dsn)) ? {
                dsn: n
            } : {}, [[{
                type: "client_report"
            }, {
                timestamp: ae(),
                discarded_events: r
            }]]));
            var r, n;
            this._sendEnvelope(t)
        }
    }
    class pn {
        constructor(e) {
            this.debug = e.debug ?? !1;
            const t = {
                debug: this.debug,
                dist: `${e.release.split("@")[1]}-${e.environment}`,
                dsn: e.dsn,
                environment: e.environment,
                integrations: [...Tr, new Lr.GlobalHandlers({
                    onerror: e.useGlobalHandlers ?? !1,
                    onunhandledrejection: e.useGlobalHandlers ?? !1
                })],
                release: e.release,
                stackParser: Fr,
                transport: e.transport ?? an
            };
            e.beforeSend && (t.beforeSend = e.beforeSend);
            const r = new hn(t)
              , n = new De;
            e.initialScope && n.update(e.initialScope),
            this.hub = new je(r,n),
            !0 === e.useGlobalHandlers && He(this.hub)
        }
        setCustomTags(e) {
            this.hub.configureScope((t => {
                Object.entries(e).forEach(( ([e,r]) => {
                    t.setTag(e, r)
                }
                ))
            }
            ))
        }
        setUser(e) {
            this.hub.setUser({
                id: e
            })
        }
        captureException(e, t) {
            this.debug && console.error("[Sentry exception]", e, t),
            this.hub.captureException(e, t)
        }
        addBreadcrumb(e, t) {
            this.debug && console.log("[Sentry Breadcrumb]", e, t),
            this.hub.addBreadcrumb(e, t)
        }
    }
    async function fn(e, t, r=new Error("Promise timeout exceeded")) {
        let n = -1;
        const i = new Promise(( (e, i) => {
            n = window.setTimeout(( () => {
                i(r)
            }
            ), t)
        }
        ))
          , o = await Promise.race([i, e()]);
        return window.clearTimeout(n),
        o
    }
    const gn = (e, t) => Math.min(200 * Math.pow(2, e - 1) + Math.floor(1e3 * Math.random()), t);
    class vn extends Error {
        constructor(e, t, r) {
            super(`Request timeout exceeded (attempts=${e}; duration=${t}ms; url=${r})`),
            this.name = "HttpRequestTimeoutError",
            Object.setPrototypeOf(this, vn.prototype)
        }
    }
    class mn extends Error {
        constructor(e, t, r) {
            super(`Invalid JSON received (status=${t}; url=${e})`),
            this.originalErrorMessage = r,
            this.name = "HttpRequestInvalidJsonError",
            Object.setPrototypeOf(this, mn.prototype)
        }
    }
    class yn extends Error {
        constructor(e, t, r) {
            super(`Network error during request (attempts=${e}; duration=${t}ms; url=${r})`),
            this.name = "HttpRequestNetworkError",
            Object.setPrototypeOf(this, yn.prototype)
        }
    }
    function En(e, t) {
        return {
            body: e,
            status: t.status,
            statusText: t.statusText
        }
    }
    function _n(e) {
        const t = new Headers([["Accept", "application/json"], ["Content-Type", "application/json; charset=utf-8"]]);
        for (const r in e) {
            const n = e[r];
            void 0 !== n && t.set(r, n)
        }
        return t
    }
    async function bn(e, t, r=1, n=Date.now()) {
        const i = Date.now() - n
          , {body: o, headers: a={}, credentials: s="include", mode: c="cors", timeoutMs: u=1e4, maxAttempts: l=3, maxBackoffMs: d=32e3} = t;
        let h = null;
        void 0 !== window.AbortController && null !== window.AbortController && (h = new window.AbortController);
        const p = {
            ...t,
            body: null != o ? JSON.stringify(o) : null,
            credentials: s,
            headers: _n(a),
            mode: c,
            signal: h ? h.signal : null
        };
        try {
            const t = await fn(window.fetch.bind(null, e, p), u, new vn(r,i,e));
            return await async function(e, t) {
                let r = {};
                const n = e.status;
                if (!(n < 500))
                    return En(r, e);
                {
                    let i;
                    try {
                        return 204 !== n && (r = await e.json()),
                        En(r, e)
                    } catch (r) {
                        if (r instanceof Error) {
                            const n = r.toString();
                            try {
                                i = await e.text(),
                                i = `${i} ${n}`
                            } catch {
                                i = n
                            }
                            throw new mn(t,e.status,i)
                        }
                        throw new mn(t,e.status,JSON.stringify(r))
                    }
                }
            }(t, e)
        } catch (o) {
            if (o instanceof vn)
                h?.abort();
            else {
                if (o instanceof mn)
                    throw o;
                if (r === l)
                    throw new yn(r,i,e)
            }
            if (r === l)
                throw o;
            const a = gn(r, d);
            return new Promise((i => {
                setTimeout(( () => {
                    i(bn(e, t, r + 1, n))
                }
                ), a)
            }
            ))
        }
    }
    const In = function(e, t) {
        return bn(e, {
            ...t,
            method: "POST"
        })
    };
    var Sn, wn, On, Cn, Tn, An, Pn, Rn, Nn, Dn, Ln, xn, kn, Mn, jn, Un, Hn, Bn = null !== "production" ? "production" : "development", Fn = "local", qn = {
        get ANALYTICS_CLIENT_VERSION() {
            return "3.4.0"
        },
        get API_PROTOCOL() {
            return "https://"
        },
        get API_PUBLIC_HOST() {
            switch (Bn) {
            case "production":
                return "squareup.com";
            case "sandbox":
                return "squareupsandbox.com";
            default:
                return "squareupstaging.com"
            }
        },
        get API_URL() {
            return "".concat(this.API_PROTOCOL).concat(this.PCI_CONNECT_API_HOST)
        },
        get ASSET_BASE_URL() {
            return function(e) {
                switch (e) {
                case "production":
                    return "https://web.squarecdn.com";
                case "sandbox":
                    return "https://sandbox.web.squarecdn.com";
                case "development":
                    return "https://localhost:1779";
                default:
                    return "https://staging.web.squarecdn.com"
                }
            }(Bn)
        },
        get ASSET_URL() {
            return this.VERSION === Fn ? this.ASSET_BASE_URL : "".concat(this.ASSET_BASE_URL, "/").concat(this.VERSION)
        },
        get BANK_NONCE_ENDPOINT() {
            return "".concat(this.API_URL, "/v2/bank-nonce")
        },
        get CARD_NONCE_ENDPOINT() {
            return "".concat(this.API_URL, "/v2/card-nonce")
        },
        get CONNECT_API_URL() {
            return "https://connect.".concat(this.API_PUBLIC_HOST)
        },
        get CREATE_OAUTH_PLAID_LINK_SESSION_ENDPOINT() {
            return "".concat(this.API_URL, "/digital-wallets/plaid/oauth-link-session")
        },
        get ENABLE_ERROR_LOGGING() {
            return "development" !== Bn
        },
        get GET_PRODUCT_INFORMATION_ENDPOINT() {
            return "".concat(this.API_URL, "/v2/tokenization/product-information")
        },
        get GIFT_CARD_IFRAME() {
            return "".concat(this.ASSET_URL, "/gift-card-element-iframe.html")
        },
        get GOOGLE_PAY_GENERATE_TOKEN_ENDPOINT() {
            return "".concat(this.API_URL, "/digital-wallets/google-pay/token")
        },
        get HYDRATION_ENDPOINT() {
            return "".concat(this.API_URL, "/payments/hydrate")
        },
        get IFRAME_SRC() {
            return "".concat(this.ASSET_URL, "/main-iframe.html")
        },
        get INITIALIZE_THREE_DS_METHOD_ENDPOINT() {
            return "".concat(this.API_URL, "/v2/analytics/three-ds-method")
        },
        get INSTANT_WALLET_NONCE_ENDPOINT() {
            return "".concat(this.API_URL, "/v2/instant-wallet-nonce")
        },
        get METRICS_ERROR_URL() {
            return "".concat(this.API_URL, "/payments/mtx/error")
        },
        get METRICS_URL() {
            return "".concat(this.API_URL, "/payments/mtx")
        },
        get METRICS_V2_URL() {
            return "".concat(this.API_URL, "/payments/mtx/v2")
        },
        get PCI_CONNECT_API_HOST() {
            return "pci-connect.".concat(this.API_PUBLIC_HOST)
        },
        get SENTRY_DSN() {
            switch (Bn) {
            case "test":
            case "development":
                return "https://acacaeaccacacacabcaacdacdacadaca@sentry.io/000001";
            default:
                return "https://565ee38bb5ff45dabc25ab6d7b8bebe3@o160250.ingest.sentry.io/3478832"
            }
        },
        get SINGLE_CARD_IFRAME() {
            return "".concat(this.ASSET_URL, "/single-card-element-iframe.html")
        },
        get SINGLE_CARD_WRAPPER_STYLES() {
            return "".concat(this.ASSET_URL, "/card-wrapper.css")
        },
        THREE_DS_AUTHENTICATE_ENDPOINT(e) {
            return "".concat(this.VERIFICATION_ENDPOINT, "/").concat(e, "/three-ds-authentication")
        },
        get VERIFICATION_ENDPOINT() {
            return "".concat(this.API_URL, "/v2/analytics/verifications")
        },
        VERIFICATION_UPDATE_ENDPOINT(e) {
            return "".concat(this.VERIFICATION_ENDPOINT, "/").concat(e)
        },
        get VERSION() {
            return null !== "1.71.1" ? "1.71.1" : Fn
        },
        env: Bn,
        staticAsset(e) {
            return "".concat(this.ASSET_URL, "/static-assets/").concat(e)
        }
    };
    r(7156),
    r(6460),
    r(8370),
    r(9170),
    r(1152),
    r(1257),
    r(1505),
    r(8304),
    r(7680),
    function(e) {
        e.API_ERROR = "API_ERROR",
        e.AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR",
        e.INVALID_REQUEST_ERROR = "INVALID_REQUEST_ERROR",
        e.RATE_LIMIT_ERROR = "RATE_LIMIT_ERROR",
        e.PAYMENT_METHOD_ERROR = "PAYMENT_METHOD_ERROR",
        e.REFUND_ERROR = "REFUND_ERROR"
    }(Sn || (Sn = {}));
    class Vn extends Error {
        constructor() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Unknown Error"
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , r = e;
            t.length > 0 && (r = function(e, t) {
                return "".concat(e, "\n  ").concat(t.map((e => {
                    switch (!0) {
                    case "message"in e:
                        return e.message;
                    case "detail"in e:
                        return e.detail;
                    default:
                        return "[Unspecified Error]"
                    }
                }
                )).join("\n  "))
            }(e, t)),
            super(r),
            this.errors = t,
            this.name = "SqError",
            Object.setPrototypeOf(this, Vn.prototype)
        }
        fromSerializedError(e) {
            this.name = e.name,
            this.message = e.message,
            e.errors && (this.errors = e.errors)
        }
    }
    class Gn extends Vn {
        constructor() {
            super("Tokenization has failed. `accountHolderName` is a required option when calling ach.tokenize()"),
            this.name = "PlaidMissingNameError",
            Object.setPrototypeOf(this, Gn.prototype)
        }
    }
    class zn extends Vn {
        constructor() {
            super("You cannot call `tokenize` when using an `onTokenize` callback"),
            this.name = "AfterpayOnTokenizeListenerError",
            Object.setPrototypeOf(this, zn.prototype)
        }
    }
    class $n extends Vn {
        constructor(e, t) {
            super("This instance of ".concat(e, " is missing the ").concat(t, " listener.")),
            this.name = "PaymentMethodMissingListener",
            Object.setPrototypeOf(this, $n.prototype)
        }
    }
    class Wn extends Vn {
        constructor() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            super("The payment request used for Afterpay/Clearpay caused a failure", e),
            this.errors = e,
            this.name = "AfterpayRequestError",
            Object.setPrototypeOf(this, Wn.prototype)
        }
    }
    class Yn extends Vn {
        constructor() {
            super("The amount is outside of the merchant's Afterpay payment limits."),
            this.name = "AfterpayAmountOutsideLimitsError",
            Object.setPrototypeOf(this, Yn.prototype)
        }
    }
    class Kn extends Vn {
        constructor() {
            super("The currency provided is not supported for use with Afterpay/Clearpay"),
            this.name = "AfterpayUnsupportedCurrencyError",
            Object.setPrototypeOf(this, Kn.prototype)
        }
    }
    class Xn extends Vn {
        constructor() {
            super("Afterpay/Clearpay is not enabled for this merchant."),
            this.name = "AfterpayMerchantError",
            Object.setPrototypeOf(this, Xn.prototype)
        }
    }
    class Jn extends Vn {
        constructor(e) {
            super(e),
            this.name = "AfterpayInvalidPaymentRequestError",
            Object.setPrototypeOf(this, Jn.prototype)
        }
    }
    class Zn extends Vn {
        constructor(e) {
            super("An issue occurred while verifying the buyer", [e]),
            this.name = "VerifyBuyerError",
            Object.setPrototypeOf(this, Zn.prototype)
        }
        toJSON() {
            return {
                errors: this.errors.map((e => {
                    var t = {};
                    return ["name", "message", "type", "code", "token"].forEach((function(r) {
                        r in e && (t[r] = e[r])
                    }
                    )),
                    t
                }
                )),
                name: this.name
            }
        }
    }
    function Qn(e) {
        return "type"in e && "message"in e
    }
    class ei extends Vn {
        constructor(e) {
            var t = e instanceof HTMLElement ? e.nodeName : e;
            super("The element ".concat(t, " was not found")),
            this.name = "ElementNotFoundError",
            Object.setPrototypeOf(this, ei.prototype)
        }
    }
    class ti extends Vn {
        constructor() {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((e => {
                var [t,r] = e;
                return 'expected property: "'.concat(t, '" of type "').concat(r, '"')
            }
            )).concat(e);
            super("Please ensure you call payments.paymentRequest (https://developer.squareup.com/reference/sdks/web/payments#Payments.paymentRequest) with the appropriate options.\n".concat(t.join("\n"))),
            this.name = "InvalidPaymentRequestError",
            Object.setPrototypeOf(this, ti.prototype)
        }
    }
    class ri extends Vn {
        constructor() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((e => {
                var [t,r] = e;
                return 'expected property: "'.concat(t, '" of type "').concat(r, '"')
            }
            )).join("\n");
            super("\n".concat(e)),
            this.name = "InvalidPaymentRequestUpdateError",
            Object.setPrototypeOf(this, ri.prototype)
        }
    }
    class ni extends Vn {
        constructor(e, t) {
            super("The callback provided to the event listener ".concat(e, " threw an error with message: ").concat(t)),
            this.name = "InvalidEventListenerCallbackError",
            Object.setPrototypeOf(this, ni.prototype)
        }
    }
    class ii extends Vn {
        constructor(e) {
            super("option: '".concat(e, "'")),
            this.name = "InvalidOptionError",
            Object.setPrototypeOf(this, ii.prototype)
        }
    }
    !function(e) {
        e.FOCUS_CLASS_ADDED = "focusClassAdded",
        e.FOCUS_CLASS_REMOVED = "focusClassRemoved",
        e.ERROR_CLASS_ADDED = "errorClassAdded",
        e.ERROR_CLASS_REMOVED = "errorClassRemoved",
        e.CARD_BRAND_CHANGED = "cardBrandChanged",
        e.POSTAL_CODE_CHANGED = "postalCodeChanged",
        e.ESCAPE = "escape",
        e.SUBMIT = "submit"
    }(wn || (wn = {})),
    function(e) {
        e.CARD_NUMBER = "cardNumber",
        e.CVV = "cvv",
        e.EXPIRATION_DATE = "expirationDate",
        e.POSTAL_CODE = "postalCode"
    }(On || (On = {})),
    function(e) {
        e.CARD_INPUT = "input",
        e.CARD_INPUT_FOCUS = "input.is-focus",
        e.CARD_INPUT_PLACEHOLDER = "input::placeholder",
        e.CARD_INPUT_FOCUS_PLACEHOLDER = "input.is-focus::placeholder",
        e.CARD_INPUT_ERROR = "input.is-error",
        e.CARD_INPUT_ERROR_PLACEHOLDER = "input.is-error::placeholder",
        e.CARD_COMPONENT = ".input-container",
        e.CARD_COMPONENT_FOCUS = ".input-container.is-focus",
        e.CARD_COMPONENT_ERROR = ".input-container.is-error",
        e.CARD_INPUT_HELPER_TEXT = ".message-text",
        e.CARD_INPUT_HELPER_ICON = ".message-icon",
        e.CARD_INPUT_ERROR_TEXT = ".message-text.is-error",
        e.CARD_INPUT_ERROR_ICON = ".message-icon.is-error"
    }(Cn || (Cn = {})),
    function(e) {
        e.GIFT_CARD_NUMBER = "giftCardNumber"
    }(Tn || (Tn = {})),
    function(e) {
        e.FOCUS_CLASS_ADDED = "focusClassAdded",
        e.FOCUS_CLASS_REMOVED = "focusClassRemoved",
        e.ERROR_CLASS_ADDED = "errorClassAdded",
        e.ERROR_CLASS_REMOVED = "errorClassRemoved",
        e.CARD_BRAND_CHANGED = "cardBrandChanged",
        e.ESCAPE = "escape",
        e.SUBMIT = "submit"
    }(An || (An = {})),
    function(e) {
        e.UNKNOWN = "Unknown"
    }(Pn || (Pn = {})),
    function(e) {
        e.GIFT = "Gift"
    }(Rn || (Rn = {}));
    class oi extends Vn {
        constructor(e) {
            super("".concat(e, " is not a valid field name. Valid field names are ").concat([...Object.values(On), ...Object.values(Tn)].join(", "))),
            this.name = "InvalidFieldNameError",
            Object.setPrototypeOf(this, oi.prototype)
        }
    }
    class ai extends Vn {
        constructor(e) {
            super("Configuration property '".concat(e, "' is invalid")),
            this.name = "InvalidConfigurationPropertyError",
            Object.setPrototypeOf(this, ai.prototype)
        }
    }
    class si extends Vn {
        constructor(e, t, r) {
            super("Configuration property '".concat(e, "' has an invalid value '").concat(t, "'.").concat(void 0 !== r ? " ".concat(r, ".") : "")),
            this.name = "InvalidConfigurationValueError",
            Object.setPrototypeOf(this, si.prototype)
        }
    }
    class ci extends Vn {
        constructor(e) {
            var t = e.map((e => {
                var [t,r] = e;
                return 'expected property: "'.concat(t, '" of type "').concat(r, '"')
            }
            )).join("\n");
            super("\n".concat(t)),
            this.name = "InvalidCashAppPayV1OptionsFieldTypes",
            Object.setPrototypeOf(this, ci.prototype)
        }
    }
    class ui extends Vn {
        constructor(e) {
            var t = e.map((e => {
                var [t,r] = e;
                return 'accepted property: "'.concat(t, '" values are "').concat(r, '"')
            }
            )).join("\n");
            super("\n".concat(t)),
            this.name = "InvalidCashAppPayV1OptionsFieldValues",
            Object.setPrototypeOf(this, ui.prototype)
        }
    }
    class li extends Vn {
        constructor(e) {
            super(e),
            this.name = "CashAppPayInvalidPaymentRequestError",
            Object.setPrototypeOf(this, li.prototype)
        }
    }
    class di extends Vn {
        constructor() {
            super("A redirect url is always required for requests. This must also be a secure link."),
            this.name = "CashAppPayMissingRedirectUrlError",
            Object.setPrototypeOf(this, di.prototype)
        }
    }
    class hi extends Vn {
        constructor() {
            super("Non function passed as shouldTokenize checker"),
            this.name = "CashAppPayInvalidShouldTokenizeError",
            Object.setPrototypeOf(this, hi.prototype)
        }
    }
    class pi extends Vn {
        constructor(e, t) {
            super("amount '".concat(e, "' in ").concat(t, " is not expressed in a valid format")),
            this.name = "InvalidCurrencyFormatError",
            Object.setPrototypeOf(this, pi.prototype)
        }
    }
    class fi extends Vn {
        constructor(e) {
            super("The ".concat(e, " feature is not enabled for this application.")),
            this.name = "FeatureDisabledError",
            Object.setPrototypeOf(this, fi.prototype)
        }
    }
    class gi extends Vn {
        constructor() {
            super("Web Payments SDK does not support this browser"),
            this.name = "BrowserNotSupportedError",
            Object.setPrototypeOf(this, gi.prototype)
        }
    }
    class vi extends Vn {
        constructor() {
            super("Web Payments SDK can only be embedded on sites that use HTTPS and have a secure context"),
            this.name = "WebSdkEmbedError",
            Object.setPrototypeOf(this, vi.prototype)
        }
    }
    class mi extends Vn {
        constructor(e, t) {
            var r = null != t ? t : null == e ? void 0 : e.field;
            super("Method unsupported: ".concat(null == e ? void 0 : e.message).concat(void 0 !== r ? " (field=".concat(r, ")") : "")),
            this.name = "PaymentMethodUnsupportedError",
            Object.setPrototypeOf(this, mi.prototype)
        }
    }
    class yi extends Vn {
        constructor(e) {
            super("This instance of ".concat(e, " has already been attached to the page.")),
            this.name = "PaymentMethodAlreadyAttachedError",
            Object.setPrototypeOf(this, yi.prototype)
        }
    }
    class Ei extends Vn {
        constructor(e) {
            super("".concat(e, " has not been attached to the page. It must be attached before you can call this method.")),
            this.name = "PaymentMethodNotAttachedError",
            Object.setPrototypeOf(this, Ei.prototype)
        }
    }
    class _i extends Vn {
        constructor(e) {
            super("This instance of ".concat(e, " has already been destroyed.")),
            this.name = "PaymentMethodAlreadyDestroyedError",
            Object.setPrototypeOf(this, _i.prototype)
        }
    }
    class bi extends Vn {
        constructor(e, t) {
            var r = e instanceof HTMLElement ? e.nodeName : e;
            super("The value ".concat(r, " is not a valid element type or selector. Only valid elements or selectors referring to ").concat([...t].join(", "), " elements are allowed.")),
            this.name = "InvalidElementTypeError",
            Object.setPrototypeOf(this, bi.prototype)
        }
    }
    class Ii extends Vn {
        constructor(e, t) {
            super("An element with one of the following conflicting IDs was found on the page: ".concat(t, ". You must change those elements' ID before you can use ").concat(e)),
            this.name = "InvalidElementPresentError",
            Object.setPrototypeOf(this, Ii.prototype)
        }
    }
    class Si extends Vn {
        constructor(e) {
            super("Invalid style property '".concat(e, "'.")),
            this.name = "InvalidInputStylePropertyError",
            Object.setPrototypeOf(this, Si.prototype)
        }
    }
    class wi extends Vn {
        constructor(e, t) {
            super("Invalid style value '".concat(t, "' for property '").concat(e, "'.")),
            this.name = "InvalidInputStyleValueError",
            Object.setPrototypeOf(this, wi.prototype)
        }
    }
    class Oi extends Vn {
        constructor(e) {
            super("Invalid style selector '".concat(e, "'.")),
            this.name = "InvalidInputStyleSelectorError",
            Object.setPrototypeOf(this, Oi.prototype)
        }
    }
    class Ci extends Vn {
        constructor(e) {
            super("One or more style selectors and/or CSS properties are invalid", e),
            this.errors = e,
            this.name = "InvalidStylesError",
            Object.setPrototypeOf(this, Ci.prototype)
        }
    }
    class Ti extends Vn {
        constructor() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            super("Tokenization has failed", e),
            this.errors = e,
            this.name = "TokenizationError",
            Object.setPrototypeOf(this, Ti.prototype)
        }
    }
    class Ai extends Vn {
        constructor(e) {
            var t = "An unexpected error occurred";
            e && (t += " while ".concat(e)),
            super("".concat(t, ".")),
            this.name = "UnexpectedError",
            Object.setPrototypeOf(this, Ai.prototype)
        }
    }
    !function(e) {
        e.ON_TOKENIZATION = "ontokenization",
        e.CLOSE_OAUTH = "CLOSE_OAUTH",
        e.ERROR = "ERROR",
        e.EXIT = "EXIT",
        e.FAIL_OAUTH = "FAIL_OAUTH",
        e.HANDOFF = "HANDOFF",
        e.MATCHED_SELECT_INSTITUTION = "MATCHED_SELECT_INSTITUTION",
        e.MATCHED_SELECT_VERIFY_METHOD = "MATCHED_SELECT_VERIFY_METHOD",
        e.OPEN = "OPEN",
        e.OPEN_MY_PLAID = "OPEN_MY_PLAID",
        e.OPEN_OAUTH = "OPEN_OAUTH",
        e.SEARCH_INSTITUTION = "SEARCH_INSTITUTION",
        e.SELECT_BRAND = "SELECT_BRAND",
        e.SELECT_INSTITUTION = "SELECT_INSTITUTION",
        e.SUBMIT_CREDENTIALS = "SUBMIT_CREDENTIALS",
        e.SUBMIT_MFA = "SUBMIT_MFA",
        e.TRANSITION_VIEW = "TRANSITION_VIEW"
    }(Nn || (Nn = {})),
    function(e) {
        e.BLACK = "black",
        e.MINT = "mint"
    }(Dn || (Dn = {})),
    function(e) {
        e.CheckoutWithAfterpay = "checkout_with_afterpay",
        e.BuyNowWithAfterpay = "buy_now_with_afterpay",
        e.PlaceOrderWithAfterpay = "place_order_with_afterpay"
    }(Ln || (Ln = {})),
    function(e) {
        e.REVIEW_MY_ORDER = "review_my_order",
        e.BUY_NOW = "buy_now"
    }(xn || (xn = {})),
    function(e) {
        e.BLACK_ON_MINT = "black-on-mint",
        e.BLACK_ON_WHITE = "black-on-white",
        e.MINT_ON_BLACK = "mint-on-black",
        e.WHITE_ON_BLACK = "white-on-black"
    }(kn || (kn = {})),
    function(e) {
        e.XS = "xs",
        e.SM = "sm",
        e.MD = "md",
        e.LG = "lg"
    }(Mn || (Mn = {})),
    function(e) {
        e.CIRCLED_INFO_ICON = "circled-info-icon",
        e.CIRCLED_QUESTION_ICON = "circled-question-icon",
        e.LEARN_MORE_TEXT = "learn-more-text",
        e.MORE_INFO_TEXT = "more-info-text",
        e.NONE = "none"
    }(jn || (jn = {})),
    function(e) {
        e.MINT = "mint",
        e.WHITE = "white"
    }(Un || (Un = {})),
    function(e) {
        e.AFTERPAY_SHIPPING_ADDRESS_CHANGED = "afterpay_shippingaddresschanged",
        e.AFTERPAY_SHIPPING_OPTION_CHANGED = "afterpay_shippingoptionchanged"
    }(Hn || (Hn = {}));
    var Pi, Ri, Ni, Di, Li, xi, ki, Mi, ji, Ui, Hi, Bi, Fi, qi, Vi, Gi = ["borderColor", "borderRadius", "borderWidth"], zi = ["borderColor", "borderWidth"], $i = ["color"], Wi = ["color"];
    !function(e) {
        e.UNKNOWN = "OTHER_BRAND",
        e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS",
        e.DINERS_CLUB = "DISCOVER_DINERS",
        e.DISCOVER = "DISCOVER",
        e.JCB = "JCB",
        e.MASTERCARD = "MASTERCARD",
        e.UNION_PAY = "CHINA_UNIONPAY",
        e.VISA = "VISA"
    }(Pi || (Pi = {})),
    function(e) {
        e.UNKNOWN_CARD_TYPE = "UNKNOWN_CARD_TYPE",
        e.CREDIT = "CREDIT",
        e.DEBIT = "DEBIT"
    }(Ri || (Ri = {})),
    function(e) {
        e.UNKNOWN_PAYMENT_TYPE = "UNKNOWN_PREPAID_TYPE",
        e.NOT_PREPAID = "NOT_PREPAID",
        e.PREPAID = "PREPAID"
    }(Ni || (Ni = {})),
    function(e) {
        e.ROUND = "round",
        e.SEMIROUND = "semiround"
    }(Di || (Di = {})),
    function(e) {
        e.MEDIUM = "medium",
        e.SMALL = "small"
    }(Li || (Li = {})),
    function(e) {
        e.DARK = "dark",
        e.LIGHT = "light"
    }(xi || (xi = {})),
    function(e) {
        e.FULL = "full",
        e.STATIC = "static"
    }(ki || (ki = {})),
    function(e) {
        e.ONTOKENIZATION = "ontokenization",
        e.CUSTOMER_INTERACTION = "customerInteraction",
        e.CUSTOMER_DISMISSED = "customerDismissed"
    }(Mi || (Mi = {})),
    function(e) {
        e.DEFAULT = "default",
        e.BLACK = "black",
        e.WHITE = "white"
    }(ji || (ji = {})),
    function(e) {
        e.STATIC = "static",
        e.FILL = "fill"
    }(Ui || (Ui = {})),
    function(e) {
        e.LONG = "long",
        e.SHORT = "short"
    }(Hi || (Hi = {})),
    function(e) {
        e.PAYMENT_METHOD_DESTROYED = "PAYMENT_METHOD_DESTROYED",
        e.SHIPPING_ADDRESS_UNSERVICEABLE = "SHIPPING_ADDRESS_UNSERVICEABLE",
        e.SHIPPING_ADDRESS_INVALID = "SHIPPING_ADDRESS_INVALID"
    }(Bi || (Bi = {})),
    function(e) {
        e.APPLE_PAY = "Apple Pay",
        e.AFTERPAY_CLEARPAY = "AfterpayClearpay",
        e.CARD = "Card",
        e.GOOGLE_PAY = "Google Pay",
        e.GIFT_CARD = "Gift Card",
        e.ACH = "ACH",
        e.CASH_APP_PAY = "Cash App Pay"
    }(Fi || (Fi = {})),
    function(e) {
        e.SHIPPING_CONTACT_CHANGED = "shippingcontactchanged",
        e.SHIPPING_OPTION_CHANGED = "shippingoptionchanged"
    }(qi || (qi = {}));
    class Yi {
        constructor(e, t) {
            this.type = e,
            this.detail = t,
            this.type = e,
            this.detail = t
        }
    }
    !function(e) {
        e.UNKNOWN = "Unknown",
        e.OK = "OK",
        e.ERROR = "Error",
        e.INVALID = "Invalid",
        e.ABORT = "Abort",
        e.CANCEL = "Cancel"
    }(Vi || (Vi = {}));
    class Ki extends Vn {
        constructor() {
            super("The Payment 'applicationId' option is not in the correct format."),
            this.name = "InvalidApplicationIdError",
            Object.setPrototypeOf(this, Ki.prototype)
        }
    }
    class Xi extends Vn {
        constructor(e, t) {
            super("Web Payments SDK was initialized with an application ID created in ".concat(e, " however you are currently using ").concat(t, ".")),
            this.name = "ApplicationIdEnvironmentMismatchError ",
            Object.setPrototypeOf(this, Xi.prototype)
        }
    }
    class Ji extends Vn {
        constructor() {
            super("The Payment 'locationId' option is not in the correct format."),
            this.name = "InvalidLocationIdError",
            Object.setPrototypeOf(this, Ji.prototype)
        }
    }
    var Zi = new RegExp(/^[\w.-]+$/i)
      , Qi = new RegExp(/sq0at/i);
    function eo(e) {
        return qn.env === e
    }
    function to() {
        return eo("production")
    }
    var ro = /^_/g
      , no = /(?!^)([A-Z])/g
      , io = /[\s_]+(?=[A-Za-z])/g;
    function oo(e) {
        return "JPY" === e.toUpperCase() ? 0 : 2
    }
    var ao, so = function(e) {
        return e.replace(/-/, "_")
    }, co = function(e) {
        return e.replace(ro, "-").replace(no, " $1").replace(io, "-").toLowerCase()
    }, uo = function(e) {
        return Object.values(e)
    }, lo = function(e, t) {
        return "".concat(e, ": ").concat(t, ";")
    }, ho = function(e, t) {
        return t.some((function(t) {
            return e instanceof t
        }
        ))
    }, po = function(e) {
        return void 0 !== e && "" !== e
    }, fo = function(e, t, r) {
        var n = oo(t)
          , i = e / Math.pow(10, n);
        return new Intl.NumberFormat(r,{
            currency: t,
            style: "currency"
        }).format(i)
    }, go = function(e, t) {
        var r = oo(t);
        return (e / Math.pow(10, r)).toFixed(r)
    }, vo = function(e, t) {
        var r = oo(t)
          , n = "^(-?[0-9]+)";
        r > 0 && (n = "".concat(n, "(?:\\.([0-9]{1,").concat(r, "})[0-9]*)?")),
        n = "".concat(n, "$");
        var i = e.match(n);
        if (!i)
            throw new pi(e,t);
        var [o,a,s=""] = i;
        if (0 === r)
            return Number(a);
        var c = "0".repeat(r - s.length);
        return Number(a + s + c)
    };
    class mo {
        constructor(e) {
            this.recordErrorMetrics = !1;
            var t = {
                beforeSend: (t, r) => {
                    var n;
                    if (!qn.ENABLE_ERROR_LOGGING)
                        return console.error(t.exception),
                        null !== (n = t.exception) && void 0 !== n && n.values && t.exception.values.forEach((e => {
                            console.error(e)
                        }
                        )),
                        null;
                    if (!r)
                        return t;
                    var i = r.originalException;
                    if (this.recordErrorMetrics) {
                        var o = null == i ? void 0 : i.toString();
                        i instanceof Error && (o = i.stack);
                        var a = "applicationID: ".concat(e.applicationId, ", url: ").concat(e.applicationUrl, ", source: ").concat(e.source, ", error: ").concat(o);
                        In(qn.METRICS_ERROR_URL, {
                            body: {
                                error_message: a,
                                sdk_version: qn.VERSION
                            }
                        }).catch(( () => {}
                        ))
                    }
                    return t
                }
                ,
                dsn: qn.SENTRY_DSN,
                environment: qn.env,
                release: "web-payments-sdk@".concat(qn.VERSION),
                transport: e.transport,
                useGlobalHandlers: e.useGlobalHandlers
            };
            this.browserErrorLogger = new pn(t),
            this.browserErrorLogger.setCustomTags({
                applicationId: e.applicationId,
                applicationUrl: e.applicationUrl,
                source: e.source,
                version: qn.VERSION
            })
        }
        setRecordErrorMetrics(e) {
            this.recordErrorMetrics = e
        }
        setCustomTags(e) {
            this.browserErrorLogger.setCustomTags(e)
        }
        setUser(e) {
            this.browserErrorLogger.setUser(e)
        }
        addBreadcrumb(e, t) {
            this.browserErrorLogger.addBreadcrumb(e, t)
        }
        captureException(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ho(e, [yn, vn]) || (e instanceof mn && this.browserErrorLogger.addBreadcrumb({
                category: "invalid json error message",
                message: e.originalErrorMessage
            }),
            this.browserErrorLogger.captureException(e, {
                captureContext: {
                    tags: t
                }
            }))
        }
    }
    !function(e) {
        e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
        e.NOT_FOUND = "NOT_FOUND",
        e.SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
        e.TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS",
        e.UNAUTHORIZED = "UNAUTHORIZED",
        e.UNKNOWN = "UNKNOWN"
    }(ao || (ao = {}));
    var yo = {
        message: "An internal error has occurred. Unable to complete the request.",
        type: "INTERNAL_SERVER_ERROR"
    }
      , Eo = {
        message: "The requested resource was not found.",
        type: "NOT_FOUND"
    }
      , _o = {
        message: "The endpoint is currently unavailable.",
        type: "SERVICE_UNAVAILABLE"
    }
      , bo = {
        message: "Too many requests in progress.",
        type: "TOO_MANY_REQUESTS"
    }
      , Io = {
        message: "Request not authorized.",
        type: "UNAUTHORIZED"
    }
      , So = {
        message: "An unknown error has occurred",
        type: "UNKNOWN"
    };
    class wo extends Vn {
        constructor(e) {
            super(e),
            this.name = "InternalError",
            Object.setPrototypeOf(this, wo.prototype)
        }
    }
    class Oo extends Vn {
        constructor(e, t, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : []
              , i = function(e) {
                switch (e) {
                case 401:
                    return Io;
                case 404:
                    return Eo;
                case 429:
                    return bo;
                case 500:
                    return yo;
                case 503:
                    return _o;
                default:
                    return So
                }
            }(t);
            super("".concat(i.message, " (message=").concat(r, "; url=").concat(e, ")"), n),
            this.name = "InternalHttpError",
            Object.setPrototypeOf(this, Oo.prototype)
        }
    }
    class Co extends Vn {
        constructor(e, t) {
            super("".concat(e, " (payment_method=").concat(t, ")")),
            this.name = "InternalPaymentMethodError",
            Object.setPrototypeOf(this, Co.prototype)
        }
    }
    class To extends Vn {
        constructor(e) {
            super(e),
            this.name = "InvalidIframeError",
            Object.setPrototypeOf(this, To.prototype)
        }
    }
    class Ao extends Vn {
        constructor(e, t, r) {
            super("Request timeout exceeded (attempts=".concat(e, "; duration=").concat(t, "ms; url=").concat(r, ")")),
            this.name = "InternalTimeoutError",
            Object.setPrototypeOf(this, Ao.prototype)
        }
    }
    var Po = {
        message: "An unknown error has occurred",
        type: "UNKNOWN"
    }
      , Ro = {
        UNKNOWN: Po
    };
    new Set(["EXPIRED_PLAID_SESSION", "INVALID_SELECTED_PLAID_BANK_ACCOUNT_ID", "DATABASE_INSIGHTS_VERIFICATION_FAILURE"]);
    var No = {
        INVALID_APPLICATION_ID: {
            message: "Invalid applicationId",
            type: "INVALID_APPLICATION_ID"
        },
        INVALID_CARD_NUMBER: {
            field: "cardNumber",
            message: "Credit card number is not valid",
            type: "VALIDATION_ERROR"
        },
        INVALID_CVV: {
            field: "cvv",
            message: "CVV is not valid",
            type: "VALIDATION_ERROR"
        },
        INVALID_EXPIRATION_DATE: {
            field: "expirationDate",
            message: "Expiration date is not valid",
            type: "VALIDATION_ERROR"
        },
        INVALID_POSTAL_CODE: {
            field: "postalCode",
            message: "Postal code is not valid",
            type: "VALIDATION_ERROR"
        },
        INVALID_SANDBOX_CARD_NUMBER: {
            field: "cardNumber",
            message: "Credit card number is not valid for sandbox use. Please use one of the test numbers documented at https://developer.squareup.com/docs/testing/test-values.",
            type: "VALIDATION_ERROR"
        },
        INVALID_STAGING_CARD_NUMBER: {
            field: "cardNumber",
            message: "Card number is not allowed in Staging. See: https://go/panfake-ui",
            type: "VALIDATION_ERROR"
        },
        MISSING_APPLICATION_ID: {
            message: "Missing applicationId",
            type: "MISSING_APPLICATION_ID"
        },
        MISSING_CARD_DATA: {
            message: "Missing card data",
            type: "MISSING_CARD_DATA"
        },
        UNKNOWN: Po,
        UNSUPPORTED_CARD_BRAND: {
            field: "cardNumber",
            message: "Card not supported",
            type: "UNSUPPORTED_CARD_BRAND"
        }
    };
    class Do extends Vn {
        constructor(e) {
            super("Internal Validation Error", e),
            this.errors = e,
            this.name = "InternalValidationError",
            Object.setPrototypeOf(this, Do.prototype)
        }
    }
    function Lo(e, t) {
        return {
            field: e,
            message: "".concat(e, " is required and must be a(n) ").concat(t, "."),
            type: "VALIDATION_ERROR"
        }
    }
    function xo() {
        return new Ti([No.UNKNOWN])
    }
    function ko(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Mo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ko(Object(r), !0).forEach((function(t) {
                jo(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ko(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function jo(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    var Uo = {
        HttpRequestInvalidJsonError: mn,
        HttpRequestNetworkError: yn,
        HttpRequestTimeoutError: vn,
        InternalError: wo,
        InternalHttpError: Oo,
        InternalPaymentMethodError: Co,
        InternalTimeoutError: Ao,
        InternalValidationError: Do,
        InvalidIframeError: To
    };
    function Ho(e) {
        return Object.values(Uo).some((t => e instanceof t))
    }
    var Bo, Fo, qo = {
        AfterpayAmountOutsideLimitsError: Yn,
        AfterpayMerchantError: Xn,
        AfterpayRequestError: Wn,
        AfterpayUnsupportedCurrencyError: Kn,
        BrowserNotSupportedError: gi,
        ElementNotFoundError: ei,
        InvalidCurrencyFormatError: pi,
        InvalidElementTypeError: bi,
        InvalidEventListenerCallbackError: ni,
        InvalidOptionError: ii,
        InvalidPaymentRequestError: ti,
        InvalidPaymentRequestUpdateError: ri,
        PaymentMethodUnsupportedError: mi,
        PlaidMissingNameError: Gn,
        TokenizationError: Ti,
        UnexpectedError: Ai,
        VerifyBuyerError: Zn,
        WebSdkEmbedError: vi
    }, Vo = Mo(Mo(Mo({}, qo), Uo), {}, {
        AfterpayInvalidPaymentRequestError: Jn,
        AfterpayOnTokenizeListenerError: zn,
        InvalidApplicationIdError: Ki,
        InvalidInputStylePropertyError: Si,
        InvalidInputStyleValueError: wi,
        InvalidStylesError: Ci,
        PaymentMethodAlreadyAttachedError: yi,
        PaymentMethodAlreadyDestroyedError: _i,
        PaymentMethodMissingListener: $n,
        PaymentMethodNotAttachedError: Ei,
        SqError: Vn
    });
    function Go(e, t) {
        var r = {};
        return Object.keys(e).forEach((n => {
            var i;
            "object" == typeof e[n] && !Array.isArray(e[n]) && n in t ? r[n] = Go(e[n], t[n]) : r[n] = null !== (i = t[n]) && void 0 !== i ? i : e[n]
        }
        )),
        r
    }
    !function(e) {
        e.enUS = "en-US",
        e.enIE = "en-IE",
        e.enCA = "en-CA",
        e.enGB = "en-GB",
        e.enAU = "en-AU",
        e.jaJP = "ja-JP",
        e.frFR = "fr-FR",
        e.frCA = "fr-CA",
        e.esES = "es-ES"
    }(Fo || (Fo = {}));
    var zo = {
        "en-AU": {
            paymentMethods: {
                cards: {
                    errors: {
                        cardNumberError: "Enter a valid card number.",
                        cvvError: "Enter a valid security code.",
                        expirationDateError: "Enter a valid expiration date.",
                        multipleErrors: "Fix the highlighted errors.",
                        postalCodeErrors: {
                            CA: "Enter a valid postal code.",
                            GB: "Enter a valid postcode.",
                            US: "Enter a valid ZIP code."
                        }
                    },
                    helperText: {
                        cardNumber: "Enter your card number",
                        cvv: "Enter the security code",
                        expirationDate: "Enter the expiration date",
                        postalCodes: {
                            CA: "Enter the postal code",
                            GB: "Enter the postcode",
                            US: "Enter the ZIP code"
                        }
                    },
                    inputFieldTitles: {
                        cardNumber: "Credit card number",
                        cvv: "CVV",
                        expirationDate: "Expiration date",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP Code"
                        }
                    },
                    placeholderText: {
                        cardNumber: "Card number",
                        cvv: "CVV",
                        expirationDate: "MM/YY",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP"
                        }
                    }
                },
                giftCards: {
                    errors: {
                        giftCardNumberError: "Enter a valid gift card number."
                    },
                    helperText: {
                        giftCardNumber: "Enter your gift card number"
                    },
                    inputFieldTitles: {
                        giftCardNumber: "Gift card number"
                    },
                    placeholderText: {
                        giftCardNumber: "Gift card"
                    }
                },
                afterpay: {
                    checkoutWidget: {
                        today: "Today",
                        weeks: "weeks",
                        title: "Your 4 interest-free payments"
                    }
                },
                wallets: {
                    callbackErrors: {
                        contactError: "There was an error processing your selected shipping contact. Please try again.",
                        optionsError: "There was an error processing your selected shipping option. Please try again."
                    }
                }
            }
        },
        "en-CA": {
            paymentMethods: {
                cards: {
                    errors: {
                        cardNumberError: "Enter a valid card number.",
                        cvvError: "Enter a valid security code.",
                        expirationDateError: "Enter a valid expiration date.",
                        multipleErrors: "Fix the highlighted errors.",
                        postalCodeErrors: {
                            CA: "Enter a valid postal code.",
                            GB: "Enter a valid postcode.",
                            US: "Enter a valid zip code."
                        }
                    },
                    helperText: {
                        cardNumber: "Enter your card number",
                        cvv: "Enter the security code",
                        expirationDate: "Enter the expiration date",
                        postalCodes: {
                            CA: "Enter the postal code",
                            GB: "Enter the postcode",
                            US: "Enter the ZIP code"
                        }
                    },
                    inputFieldTitles: {
                        cardNumber: "Credit card number",
                        cvv: "CVV",
                        expirationDate: "Expiration date",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP Code"
                        }
                    },
                    placeholderText: {
                        cardNumber: "Card number",
                        cvv: "CVV",
                        expirationDate: "MM/YY",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP"
                        }
                    }
                },
                giftCards: {
                    errors: {
                        giftCardNumberError: "Enter a valid gift card number."
                    },
                    helperText: {
                        giftCardNumber: "Enter your gift card number"
                    },
                    inputFieldTitles: {
                        giftCardNumber: "Gift card number"
                    },
                    placeholderText: {
                        giftCardNumber: "Gift card"
                    }
                },
                afterpay: {
                    checkoutWidget: {
                        today: "Today",
                        weeks: "weeks",
                        title: "Your 4 interest-free payments"
                    }
                },
                wallets: {
                    callbackErrors: {
                        contactError: "There was an error processing your selected shipping contact. Please try again.",
                        optionsError: "There was an error processing your selected shipping option. Please try again."
                    }
                }
            }
        },
        "en-GB": {
            paymentMethods: {
                cards: {
                    errors: {
                        cardNumberError: "Enter a valid card number.",
                        cvvError: "Enter a valid security code.",
                        expirationDateError: "Enter a valid expiration date.",
                        multipleErrors: "Fix the highlighted errors.",
                        postalCodeErrors: {
                            CA: "Enter a valid postal code.",
                            GB: "Enter a valid postcode.",
                            US: "Enter a valid ZIP code."
                        }
                    },
                    helperText: {
                        cardNumber: "Enter your card number",
                        cvv: "Enter the security code",
                        expirationDate: "Enter the expiration date",
                        postalCodes: {
                            CA: "Enter the postal code",
                            GB: "Enter the postcode",
                            US: "Enter the zip code"
                        }
                    },
                    inputFieldTitles: {
                        cardNumber: "Credit card number",
                        cvv: "CVV",
                        expirationDate: "Expiration date",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP Code"
                        }
                    },
                    placeholderText: {
                        cardNumber: "Card number",
                        cvv: "CVV",
                        expirationDate: "MM/YY",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP"
                        }
                    }
                },
                giftCards: {
                    errors: {
                        giftCardNumberError: "Enter a valid gift card number."
                    },
                    helperText: {
                        giftCardNumber: "Enter your gift card number"
                    },
                    inputFieldTitles: {
                        giftCardNumber: "Gift card number"
                    },
                    placeholderText: {
                        giftCardNumber: "Gift card"
                    }
                },
                afterpay: {
                    checkoutWidget: {
                        today: "Today",
                        weeks: "weeks",
                        title: "Your 4 interest-free payments"
                    }
                },
                wallets: {
                    callbackErrors: {
                        contactError: "There was an error processing your selected delivery contact. Please try again.",
                        optionsError: "There was an error processing your selected delivery option. Please try again."
                    }
                }
            }
        },
        "en-IE": {
            paymentMethods: {
                cards: {
                    errors: {
                        cardNumberError: "Enter a valid card number.",
                        cvvError: "Enter a valid security code.",
                        expirationDateError: "Enter a valid expiry date.",
                        multipleErrors: "Fix the highlighted errors.",
                        postalCodeErrors: {
                            CA: "Enter a valid postal code.",
                            GB: "Enter a valid postcode.",
                            US: "Enter a valid zip code."
                        }
                    },
                    helperText: {
                        cardNumber: "Enter your card number",
                        cvv: "Enter the security code",
                        expirationDate: "Enter the expiry date",
                        postalCodes: {
                            CA: "Enter the postal code",
                            GB: "Enter the postcode",
                            US: "Enter the ZIP code"
                        }
                    },
                    inputFieldTitles: {
                        cardNumber: "Credit card number",
                        cvv: "CVV",
                        expirationDate: "Expiration date",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP Code"
                        }
                    },
                    placeholderText: {
                        cardNumber: "Card number",
                        cvv: "CVV",
                        expirationDate: "MM/YY",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP"
                        }
                    }
                },
                giftCards: {
                    errors: {
                        giftCardNumberError: "Enter a valid gift card number."
                    },
                    helperText: {
                        giftCardNumber: "Enter your gift card number"
                    },
                    inputFieldTitles: {
                        giftCardNumber: "Gift card number"
                    },
                    placeholderText: {
                        giftCardNumber: "Gift card"
                    }
                },
                afterpay: {
                    checkoutWidget: {
                        today: "Today",
                        weeks: "weeks",
                        title: "Your 4 interest-free payments"
                    }
                },
                wallets: {
                    callbackErrors: {
                        contactError: "There was an error processing your selected delivery contact. Please try again.",
                        optionsError: "There was an error processing your selected delivery option. Please try again."
                    }
                }
            }
        },
        "en-US": {
            paymentMethods: {
                cards: {
                    errors: {
                        cardNumberError: "Enter a valid card number.",
                        cvvError: "Enter a valid security code.",
                        expirationDateError: "Enter a valid expiration date.",
                        multipleErrors: "Fix the highlighted errors.",
                        postalCodeErrors: {
                            CA: "Enter a valid postal code.",
                            GB: "Enter a valid postcode.",
                            US: "Enter a valid zip code."
                        }
                    },
                    helperText: {
                        cardNumber: "Enter your card number",
                        cvv: "Enter the security code",
                        expirationDate: "Enter the expiration date",
                        postalCodes: {
                            CA: "Enter the postal code",
                            GB: "Enter the postcode",
                            US: "Enter the zip code"
                        }
                    },
                    inputFieldTitles: {
                        cardNumber: "Credit card number",
                        cvv: "CVV",
                        expirationDate: "Expiration date",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP Code"
                        }
                    },
                    placeholderText: {
                        cardNumber: "Card number",
                        cvv: "CVV",
                        expirationDate: "MM/YY",
                        postalCodes: {
                            CA: "Postal Code",
                            GB: "Postcode",
                            US: "ZIP"
                        }
                    }
                },
                giftCards: {
                    errors: {
                        giftCardNumberError: "Enter a valid gift card number."
                    },
                    helperText: {
                        giftCardNumber: "Enter your gift card number"
                    },
                    inputFieldTitles: {
                        giftCardNumber: "Gift card number"
                    },
                    placeholderText: {
                        giftCardNumber: "Gift card"
                    }
                },
                afterpay: {
                    checkoutWidget: {
                        today: "Today",
                        weeks: "weeks",
                        title: "Your 4 interest-free payments"
                    }
                },
                wallets: {
                    callbackErrors: {
                        contactError: "There was an error processing your selected shipping contact. Please try again.",
                        optionsError: "There was an error processing your selected shipping option. Please try again."
                    }
                }
            }
        },
        "es-ES": {
            paymentMethods: {
                afterpay: {
                    checkoutWidget: {
                        title: "Tus 4 pagos sin intereses",
                        today: "Hoy",
                        weeks: "semanas"
                    }
                },
                cards: {
                    errors: {
                        cardNumberError: "Introduce un número de tarjeta válido.",
                        cvvError: "Introduce un código de seguridad válido.",
                        expirationDateError: "Introduce una fecha de caducidad válida.",
                        multipleErrors: "Corrige los errores resaltados.",
                        postalCodeErrors: {
                            CA: "Introduce un código postal válido.",
                            GB: "Introduce un código postal válido.",
                            US: "Introduce un código postal válido."
                        }
                    },
                    helperText: {
                        cardNumber: "Introduce tu número de tarjeta",
                        cvv: "Introduce el código de seguridad",
                        expirationDate: "Introduce la fecha de caducidad",
                        postalCodes: {
                            CA: "Introduce el código postal",
                            GB: "Introduce el código postal",
                            US: "Introduce el código postal"
                        }
                    },
                    inputFieldTitles: {
                        cardNumber: "Número de la tarjeta de crédito",
                        cvv: "Código CVV",
                        expirationDate: "Fecha de vencimiento",
                        postalCodes: {
                            CA: "Código postal",
                            GB: "Código postal",
                            US: "Código postal"
                        }
                    },
                    placeholderText: {
                        cardNumber: "Número de tarjeta",
                        cvv: "Código CVV",
                        expirationDate: "MM/AA",
                        postalCodes: {
                            CA: "Código postal",
                            GB: "Código postal",
                            US: "C.P."
                        }
                    }
                },
                giftCards: {
                    errors: {
                        giftCardNumberError: "Introduce un número de tarjeta de regalo válido."
                    },
                    helperText: {
                        giftCardNumber: "Introduce el número de tu tarjeta de regalo"
                    },
                    inputFieldTitles: {
                        giftCardNumber: "Número de la tarjeta regalo"
                    },
                    placeholderText: {
                        giftCardNumber: "Tarjeta de regalo"
                    }
                },
                wallets: {
                    callbackErrors: {
                        contactError: "Se ha producido un error al procesar el contacto de envío que has seleccionado. Inténtalo de nuevo.",
                        optionsError: "Se ha producido un error al procesar la opción de envío que has seleccionado. Inténtalo de nuevo."
                    }
                }
            }
        },
        "fr-CA": {
            paymentMethods: {
                cards: {
                    errors: {
                        cardNumberError: "Saisissez un numéro de carte valide.",
                        cvvError: "Veuillez saisir un code de sécurité valide.",
                        expirationDateError: "Veuillez saisir une date d’expiration valide.",
                        multipleErrors: "Corrigez les erreurs mises en évidence.",
                        postalCodeErrors: {
                            CA: "Saisissez un code postal valide.",
                            GB: "Saisissez un code postal valide.",
                            US: "Saisissez un code postal valide."
                        }
                    },
                    helperText: {
                        cardNumber: "Saisir votre numéro de carte",
                        cvv: "Saisir le code de sécurité",
                        expirationDate: "Saisir la date d’expiration",
                        postalCodes: {
                            CA: "Saisir le code postal",
                            GB: "Saisir le code postal",
                            US: "Saisir le code postal"
                        }
                    },
                    inputFieldTitles: {
                        cardNumber: "Numéro de carte bancaire",
                        cvv: "CVV",
                        expirationDate: "Date d’expiration",
                        postalCodes: {
                            CA: "Code postal",
                            GB: "Code postal",
                            US: "Code postal"
                        }
                    },
                    placeholderText: {
                        cardNumber: "Numéro de la carte",
                        cvv: "CVV",
                        expirationDate: "MM/AA",
                        postalCodes: {
                            CA: "Code postal",
                            GB: "Code postal",
                            US: "Code postal"
                        }
                    }
                },
                giftCards: {
                    errors: {
                        giftCardNumberError: "Saisissez un numéro de carte cadeau valide."
                    },
                    helperText: {
                        giftCardNumber: "Saisir le numéro de votre carte cadeau"
                    },
                    inputFieldTitles: {
                        giftCardNumber: "Numéro de carte cadeau"
                    },
                    placeholderText: {
                        giftCardNumber: "Carte cadeau"
                    }
                },
                afterpay: {
                    checkoutWidget: {
                        title: "Vos quatre paiements sans intérêts",
                        today: "Aujourd’hui",
                        weeks: "semaines"
                    }
                },
                wallets: {
                    callbackErrors: {
                        contactError: "Une erreur s‘est produite lors du traitement du contact de livraison sélectionné. Veuillez réessayer.",
                        optionsError: "Une erreur s‘est produite lors du traitement de l‘option d‘expédition sélectionnée. Veuillez réessayer."
                    }
                }
            }
        },
        "fr-FR": {
            paymentMethods: {
                afterpay: {
                    checkoutWidget: {
                        title: "Vos quatre paiements sans intérêts",
                        today: "Aujourd’hui",
                        weeks: "semaines"
                    }
                },
                cards: {
                    errors: {
                        cardNumberError: "Saisissez un numéro de carte valide",
                        cvvError: "Veuillez saisir un code de sécurité valide.",
                        expirationDateError: "Saisir une date d’expiration valide",
                        multipleErrors: "Corrigez les erreurs mises en évidence.",
                        postalCodeErrors: {
                            CA: "Saisissez un code postal valide",
                            GB: "Saisissez un code postal valide",
                            US: "Saisissez un code ZIP valide"
                        }
                    },
                    helperText: {
                        cardNumber: "Saisir votre numéro de carte",
                        cvv: "Saisir le code de sécurité",
                        expirationDate: "Saisir la date d’expiration",
                        postalCodes: {
                            CA: "Saisir un code postal",
                            GB: "Saisir un code postal",
                            US: "Saisir un code ZIP"
                        }
                    },
                    inputFieldTitles: {
                        cardNumber: "Numéro de carte bancaire",
                        cvv: "CVV",
                        expirationDate: "Date d’expiration",
                        postalCodes: {
                            CA: "Code postal",
                            GB: "Code postal",
                            US: "Code postal"
                        }
                    },
                    placeholderText: {
                        cardNumber: "Numéro de carte",
                        expirationDate: "MM/AA",
                        cvv: "CVV",
                        postalCodes: {
                            CA: "Code postal",
                            GB: "Code postal",
                            US: "Code ZIP"
                        }
                    }
                },
                giftCards: {
                    errors: {
                        giftCardNumberError: "Saisir un numéro de carte cadeau valide"
                    },
                    helperText: {
                        giftCardNumber: "Saisir le numéro de votre carte cadeau"
                    },
                    inputFieldTitles: {
                        giftCardNumber: "Numéro de carte cadeau"
                    },
                    placeholderText: {
                        giftCardNumber: "Carte cadeau"
                    }
                },
                wallets: {
                    callbackErrors: {
                        contactError: "Une erreur s‘est produite lors du traitement du contact de livraison sélectionné. Veuillez réessayer.",
                        optionsError: "Une erreur s‘est produite lors du traitement de l‘option d‘expédition sélectionnée. Veuillez réessayer."
                    }
                }
            }
        },
        "ja-JP": {
            paymentMethods: {
                afterpay: {
                    checkoutWidget: {
                        title: "無利息の4回払い",
                        today: "今日",
                        weeks: "週間"
                    }
                },
                cards: {
                    errors: {
                        cardNumberError: "正しいカード番号を入力してください。",
                        cvvError: "有効なセキュリティコードを入力してください。",
                        expirationDateError: "正しい有効期限を入力してください。",
                        multipleErrors: "強調表示されたエラーを修正してください。",
                        postalCodeErrors: {
                            CA: "正しい郵便番号を入力してください。",
                            GB: "有効な郵便番号を入力してください。",
                            US: "正しいZIPコードを入力してください。"
                        }
                    },
                    helperText: {
                        cardNumber: "カード番号を入力してください",
                        cvv: "セキュリティコードを入力してください",
                        expirationDate: "有効期限を入力してください",
                        postalCodes: {
                            CA: "郵便番号を入力してください",
                            GB: "郵便番号を入力してください",
                            US: "ZIPコードを入力してください"
                        }
                    },
                    inputFieldTitles: {
                        cardNumber: "クレジットカード番号",
                        cvv: "CVV",
                        expirationDate: "有効期限",
                        postalCodes: {
                            CA: "郵便番号",
                            GB: "郵便番号",
                            US: "ZIPコード"
                        }
                    },
                    placeholderText: {
                        cardNumber: "カード番号",
                        cvv: "CVV",
                        expirationDate: "MM/YY",
                        postalCodes: {
                            CA: "郵便番号",
                            GB: "郵便番号",
                            US: "ZIP"
                        }
                    }
                },
                giftCards: {
                    errors: {
                        giftCardNumberError: "有効なギフトカード番号を入力してください。"
                    },
                    helperText: {
                        giftCardNumber: "ギフトカード番号を入力してください"
                    },
                    inputFieldTitles: {
                        giftCardNumber: "ギフトカード番号"
                    },
                    placeholderText: {
                        giftCardNumber: "ギフトカード"
                    }
                },
                wallets: {
                    callbackErrors: {
                        contactError: "選択された配送住所を処理する際にエラーが発生しました。もう一度やり直してください。",
                        optionsError: "選択された配送方法を処理する際にエラーが発生しました。もう一度やり直してください。"
                    }
                }
            }
        }
    }
      , $o = {
        en: Fo.enUS,
        es: Fo.esES,
        fr: Fo.frFR,
        ja: Fo.jaJP
    }
      , Wo = $o.en;
    class Yo {
        constructor(e) {
            this.currentLocale = Wo,
            this.currentTranslations = zo[this.currentLocale],
            this.setLocale(e)
        }
        setTranslationOverrides(e) {
            this.translationOverrides = e
        }
        setLocale(e) {
            var t = function(e) {
                return e.split("-")[0]
            }(e)
              , r = Ko(e)
              , n = this.currentLocale;
            if (e in zo)
                this.currentLocale = e;
            else {
                if (!function(e) {
                    return ["en", "ja", "fr", "es"].includes(e)
                }(t))
                    return {
                        message: "Locale ".concat(e, " is not supported. Language ").concat(t, " and region ").concat(r, " are both unsupported."),
                        newLocale: this.currentLocale,
                        previousLocale: n
                    };
                this.currentLocale = $o[t]
            }
            this.currentTranslations = zo[this.currentLocale];
            var i = Ko(this.currentLocale);
            return void 0 !== r && void 0 !== i && r.toLowerCase() !== i.toLowerCase() ? {
                message: "Locale ".concat(e, " is not supported. Language ").concat(t, " is supported, but region ").concat(r, " is not. Falling back to ").concat(this.currentLocale, "."),
                newLocale: this.currentLocale,
                previousLocale: n
            } : {
                newLocale: this.currentLocale,
                previousLocale: n
            }
        }
        getCurrentLocale() {
            return this.currentLocale
        }
        getLocaleString() {
            return this.translationOverrides ? Go(this.currentTranslations, this.translationOverrides) : this.currentTranslations
        }
    }
    function Ko(e) {
        return e.split("-")[1]
    }
    var Xo = "INVALID_VALUE"
      , Jo = new Set(["countryCode", "currencyCode", "requestBillingContact", "requestShippingContact", "lineItems", "total", "shippingOptions", "shippingContact"])
      , Zo = new Set(["error", "shippingErrors", "lineItems", "total", "shippingOptions", "taxLineItems", "shippingLineItems", "discounts"])
      , Qo = new Set([...Zo.values(), "eventName"])
      , ea = new Set(["accountHolderName", "amount", "bankAccountId", "currency", "total"])
      , ta = new Set([...ea.values(), "intent", "cadence", "startDate"])
      , ra = new Set(["includeInputLabels", "postalCode", "style"])
      , na = new Set(["includeInputLabels", "style"])
      , ia = new Set(["lineItems", "total", "shippingOptions", "shippingContact"])
      , oa = new Set(["buttonColor", "buttonSizeMode", "buttonType"])
      , aa = new Set(["shape", "size", "values", "theme", "width"])
      , sa = ba(Nn)
      , ca = ba(wn)
      , ua = ba(An)
      , la = ba(qi)
      , da = ba(On)
      , ha = ba(Tn)
      , pa = ba(Fo)
      , fa = ba(ji)
      , ga = ba(Ui)
      , va = ba(Hi)
      , ma = ba(Li)
      , ya = ba(Di)
      , Ea = ba(xi)
      , _a = ba(ki);
    function ba(e) {
        return new Set(Object.values(e))
    }
    function Ia(e) {
        return JSON.stringify({
            value: e
        })
    }
    function Sa(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Set
          , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          , i = {};
        return Object.entries(e).forEach((e => {
            var [o,a] = e;
            if (t.has(o)) {
                var s = a;
                r.has(o) ? s = "SANITIZED" : o in n && (s = n[o].has(a) ? a : Xo),
                i[o] = s
            }
        }
        )),
        JSON.stringify(i)
    }
    function wa(e) {
        return Sa(e, aa, void 0, {
            shape: ya,
            size: ma,
            theme: Ea,
            values: Ea,
            width: _a
        })
    }
    var Oa = function(e, t, r) {
        switch (e) {
        case "TOKENIZE_CONFIGURED":
            return function(e, t) {
                return "ACH" === e ? function(e) {
                    return Sa(e, ta, ea)
                }(t) : Xo
            }(t, r);
        case "CONFIGURED":
        case "CONFIG_UPDATED":
            return function(e, t) {
                switch (e) {
                case "Card":
                case "Gift Card":
                    return function(e, t) {
                        return Sa(t, "Card" === e ? ra : na)
                    }(e, t);
                case "Google Pay":
                    return function(e) {
                        return Sa(e, oa, void 0, {
                            buttonColor: fa,
                            buttonSizeMode: ga,
                            buttonType: va
                        })
                    }(t);
                case "Payment Request":
                    return function(e) {
                        return Sa(e, Jo, ia)
                    }(t);
                case "Cash App Pay V1":
                    return wa(t)
                }
                return Xo
            }(t, r);
        case "FOCUSED":
            return Ia(function(e, t) {
                if ("string" != typeof t)
                    return Xo;
                switch (e) {
                case "Card":
                    if (da.has(t))
                        return t;
                    break;
                case "Gift Card":
                    if (ha.has(t))
                        return t
                }
                return Xo
            }(t, r));
        case "SET_LOCALE":
            return Ia(function(e) {
                return "string" != typeof e ? Xo : pa.has(e) ? e : Xo
            }(r));
        case "EVENT_LISTENER_ADDED":
            return Ia(function(e, t) {
                if ("string" != typeof t)
                    return Xo;
                switch (e) {
                case "ACH":
                    if (sa.has(t))
                        return t;
                    break;
                case "Card":
                    if (ca.has(t))
                        return t;
                    break;
                case "Gift Card":
                    if (ua.has(t))
                        return t;
                    break;
                case "Payment Request":
                    if (la.has(t))
                        return t
                }
                return Xo
            }(t, r));
        case "EVENT_LISTENER_ON_COMPLETE_RESPONSE":
            return function(e, t) {
                return "Payment Request" === e ? function(e) {
                    return Sa(e, Qo, Zo, {
                        eventName: la
                    })
                }(t) : Xo
            }(t, r);
        default:
            return ""
        }
    };
    function Ca(e, t) {
        return void 0 !== e.document.body && null !== e.document.createNodeIterator(e.document.body, NodeFilter.SHOW_ELEMENT, {
            acceptNode: t
        }).nextNode()
    }
    function Ta(e, t) {
        return Boolean(e.querySelector(t))
    }
    r(3249);
    var Aa = function(e) {
        var t, r = void 0 !== e.angular, n = Ta(e.document, "[ng-version]") || void 0 !== e.getAllAngularRootElements || void 0 !== e.getAngularVersion, i = void 0 !== e.bootstrap, o = void 0 !== e.Ember, a = void 0 !== e.jQuery, s = Ta(e.document, 'form[action*="paypal.com"]'), c = function(e) {
            return Ca(e, (function(e) {
                return "__k"in e || "_component"in e || "__c"in e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
            }
            ))
        }(e), u = function(e) {
            var t = Ta(e.document, "*[data-reactroot]");
            if (t)
                return t;
            return Ca(e, (function(e) {
                return "_reactRootContainer"in e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
            }
            ))
        }(e), l = function(e) {
            var t = void 0 !== e.__NUXT__ || void 0 !== e.$nuxt
              , r = void 0 !== e.__VUE__;
            if (r || t)
                return r || t;
            return Ca(e, (function(e) {
                return "__vue__"in e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
            }
            ))
        }(e), d = {
            angular: n,
            angularJS: r,
            bootstrap: i,
            ember: o,
            jquery: a,
            nextJS: void 0 !== (null === (t = e.__NEXT_DATA__) || void 0 === t ? void 0 : t.buildId),
            paypalBuyNow: s,
            preact: c,
            react: u,
            vue: l
        };
        return Object.fromEntries(Object.entries(d).filter((e => {
            var [t,r] = e;
            return r
        }
        )))
    }
      , Pa = new Set(["CLEAR", "CONFIG_UPDATED", "CONFIGURED", "DESTROYED", "DETACHED", "EVENT_LISTENER_ADDED", "EVENT_LISTENER_ON_COMPLETE_RESPONSE", "FOCUSED", "OVERRIDE_STRINGS", "RECALCULATED_SIZE", "SET_LOCALE", "SET_ERROR", "TOKENIZE_CONFIGURED"]);
    function Ra(e) {
        return Pa.has(e)
    }
    var Na = new Set(["INVALID_REDIRECT_URI", "INVALID_TRANSACTION_ID", "PAYMENTS_REUSE", "CHECKOUT_WIDGET_RECEIVES_HTML_ELEMENT", "CHECKOUT_WIDGET_RECEIVES_LOCALE_CHANGE", "DEVELOPER_ERROR"]);
    function Da(e) {
        return Na.has(e)
    }
    var La = new Set(["GET_PRODUCT_INFORMATION", "LOAD", "MAIN_IFRAME", "NONCE"])
      , xa = {
        ATTACH: !0,
        BUILD: !0,
        INITIALIZATION: !1,
        PROOF_OF_WORK: !1
    };
    function ka(e) {
        return e in xa
    }
    var Ma = /[$()*+.?[\\\]^{|}]/g
      , ja = new RegExp(Ma.source)
      , Ua = function(e) {
        return ja.test(e) ? e.replace(Ma, "\\$&") : e
    }
      , Ha = {
        CARD_NONCE_ENDPOINT: new RegExp(Ua(qn.CARD_NONCE_ENDPOINT)),
        GET_PRODUCT_INFORMATION_ENDPOINT: new RegExp(Ua(qn.GET_PRODUCT_INFORMATION_ENDPOINT)),
        LIBRARY_RESOURCE: new RegExp("".concat(Ua(qn.ASSET_BASE_URL), "/([\\w\\d.-]*/)?square\\.js")),
        MAIN_IFRAME_RESOURCE: new RegExp("".concat(Ua(qn.ASSET_URL), "/main-iframe"))
    };
    function Ba(e, t) {
        if (!c.supportsPerformanceEntries)
            return null;
        var r = c.windowPerformance
          , n = function(e, t, r) {
            var n = e.filter((e => e.initiatorType === t && r.test(e.name)));
            return n[n.length - 1]
        }([...r.getEntriesByType("resource"), ...r.getEntriesByType("navigation")], e, t);
        return n ? Math.round(function(e) {
            return e.duration > 0 ? e.duration : Math.max(Math.trunc(e.responseEnd - e.startTime), 0)
        }(n)) : null
    }
    var Fa = function(e) {
        switch (e) {
        case "GET_PRODUCT_INFORMATION":
            return Ba("fetch", Ha.GET_PRODUCT_INFORMATION_ENDPOINT);
        case "MAIN_IFRAME":
            return Ba("navigation", Ha.MAIN_IFRAME_RESOURCE);
        case "LOAD":
            return Ba("script", Ha.LIBRARY_RESOURCE);
        case "NONCE":
            return Ba("fetch", Ha.CARD_NONCE_ENDPOINT);
        default:
            return null
        }
    };
    function qa(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Va(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? qa(Object(r), !0).forEach((function(t) {
                Ga(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qa(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Ga(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    var za, $a = qn.METRICS_URL, Wa = qn.METRICS_V2_URL;
    function Ya(e) {
        return Ra(e.event)
    }
    function Ka(e) {
        return Da(e.event)
    }
    function Xa(e) {
        return !Ya(e) && !Ka(e)
    }
    class Ja {
        constructor(e, t) {
            this.sdkVersion = qn.VERSION,
            this.jsFramework = "",
            this.applicationData = t,
            this.manualTelemetryStarts = {},
            this.metricsBuffer = [],
            this.errorLogger = e,
            this.disableBeacon = !1,
            this.logVisibilityEvent = this.logVisibilityEvent.bind(this),
            this.flushAllMetrics = this.flushAllMetrics.bind(this)
        }
        setAvt(e) {
            this.avt = e
        }
        setFeatureFlagValues(e) {
            this.featureFlagValues = e
        }
        logEvent(e, t, r, n) {
            try {
                var i = this.getMetricsLoggerBody(e, t, r, n);
                if (this.session = i.session,
                this.disableBeacon || !c.supportsSendBeacon || !c.supportsDocumentVisibilityState)
                    return void In($a, {
                        body: i
                    }).catch((e => {
                        this.errorLogger.captureException(e)
                    }
                    ));
                this.metricsBuffer.push(i),
                "NONCE:OK" !== e.event && "DESTROYED" !== e.event || this.buildAndSendBeacon(),
                void 0 === this.currentInterval && (document.addEventListener("visibilitychange", this.logVisibilityEvent),
                document.addEventListener("visibilitychange", this.flushAllMetrics),
                this.currentInterval = window.setInterval(( () => {
                    this.buildAndSendBeacon()
                }
                ), 1e3))
            } catch (e) {
                this.errorLogger.captureException(e)
            }
        }
        clearEventListener() {
            document.removeEventListener("visibilitychange", this.logVisibilityEvent),
            document.removeEventListener("visibilitychange", this.flushAllMetrics)
        }
        getJSFrameworkValue() {
            return 0 === this.jsFramework.length && (this.jsFramework = JSON.stringify(Aa(window))),
            this.jsFramework
        }
        eventDuration(e, t) {
            var r, [n,i] = e.event.split(":");
            if (ka(n)) {
                var o;
                if (ka(r = n) && !xa[r] ? o = n : void 0 !== t && (o = "".concat(n, ":").concat(t)),
                void 0 === o)
                    return null;
                if ("START" === i) {
                    var a = Date.now();
                    return this.manualTelemetryStarts[o] = a,
                    null
                }
                if ("OK" === i || "ERROR" === i) {
                    if (!(o in this.manualTelemetryStarts))
                        return null;
                    var s = this.manualTelemetryStarts[o];
                    return delete this.manualTelemetryStarts[o],
                    Date.now() - s
                }
            }
            return "START" !== i && function(e) {
                return La.has(e)
            }(n) ? Fa(n) : null
        }
        buildAndSendBeacon() {
            if (0 !== this.metricsBuffer.length) {
                try {
                    var e = new Blob([JSON.stringify({
                        metrics: this.metricsBuffer
                    })],{
                        type: "text/plain;charset=UTF-8"
                    });
                    window.navigator.sendBeacon(Wa, e)
                } catch (e) {
                    e instanceof TypeError && "Illegal invocation" === e.message || this.errorLogger.captureException(e),
                    this.disableBeacon = !0,
                    void 0 !== this.currentInterval && (clearInterval(this.currentInterval),
                    this.currentInterval = void 0),
                    In(Wa, {
                        body: {
                            metrics: this.metricsBuffer
                        }
                    }).catch((e => {
                        this.errorLogger.captureException(e)
                    }
                    ))
                }
                this.metricsBuffer = []
            }
        }
        metricsSession(e, t, r) {
            var n = Va(Va({}, this.applicationData), {}, {
                instanceId: e,
                sessionId: t
            });
            return void 0 !== r && (n.paymentMethodTrackingId = r),
            n
        }
        getMetricsLoggerBody(e, t, r, n) {
            var i = function() {
                if (c.isTopLevelWindow)
                    return {
                        origin: c.windowLocation.origin,
                        pathname: c.windowLocation.pathname
                    };
                var e = c.documentReferrer;
                return e && 0 !== e.length ? (Bo || (Bo = document.createElement("a")),
                Bo.href = "".concat(e),
                {
                    origin: Bo.origin,
                    pathname: ""
                }) : {
                    origin: "",
                    pathname: ""
                }
            }()
              , o = {
                innerHeight: c.windowInnerHeight,
                innerWidth: c.windowInnerWidth,
                isSecureContext: c.isSecureContext,
                language: c.windowNavigationLanguage
            }
              , a = this.eventDuration(e, n)
              , {event: s, eventSource: u} = e
              , {sdkVersion: l} = this
              , d = this.metricsSession(t, r, n)
              , h = {
                appLocation: i,
                avt: this.avt,
                browserData: o,
                event: s,
                eventSource: u,
                paymentMethodTrackingId: n,
                sdkVersion: l,
                session: d
            };
            return Ya(e) && void 0 !== e.eventConfigurationValues && (h.eventConfigurationValues = Oa(e.event, u, e.eventConfigurationValues)),
            Ka(e) ? h.internalConfigurationValues = JSON.stringify(e.errorMessage) : Xa(e) && void 0 !== this.featureFlagValues && (h.internalConfigurationValues = JSON.stringify(this.featureFlagValues)),
            null !== a && a > 0 && (h.duration = a),
            Xa(e) && void 0 !== e.sloStatus && (h.sloStatus = e.sloStatus),
            "INITIALIZATION:OK" === s && (h.jsFramework = this.getJSFrameworkValue()),
            h
        }
        logVisibilityEvent() {
            var e = {
                event: "visible" === c.documentVisibilityState ? "VISIBILITY:VISIBLE" : "VISIBILITY:HIDDEN",
                eventSource: "WebSDK"
            }
              , t = this.getMetricsLoggerBody(e, this.session.instanceId, this.session.sessionId, this.session.paymentMethodTrackingId);
            this.metricsBuffer.push(t)
        }
        flushAllMetrics() {
            "hidden" === c.documentVisibilityState && (this.buildAndSendBeacon(),
            clearInterval(this.currentInterval),
            this.currentInterval = void 0)
        }
    }
    r(5372),
    function(e) {
        e.ACH = "ACH",
        e.AFTERPAY = "AFTERPAY",
        e.APPLE_PAY = "APPLE_PAY",
        e.CASH_APP_PAY_V1 = "CASH_APP_PAY_V1",
        e.GOOGLE_PAY = "GOOGLE_PAY"
    }(za || (za = {})),
    qn.HYDRATION_ENDPOINT;
    class Za {
        constructor(e, t) {
            this.errorLogger = e,
            this.messenger = t
        }
    }
    function Qa(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function es(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    Qa(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    Qa(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var ts, rs = "LOCALE_CHANGED_EVENT";
    class ns extends Za {
        constructor(e, t, r, n, i, o, a, s, c, u, l) {
            super(e, t),
            this.session = n,
            this.localeStrings = o,
            this.paymentMethodSupportDetail = i,
            this.metricsHandler = r,
            this.eventTarget = a,
            this.featureFlagValues = s,
            this.isTestMerchant = c,
            this.analyticsBackend = u,
            this.proofOfWorkComputePromise = l
        }
        addLocaleChangedListener(e) {
            this.eventTarget.addEventListener(rs, e)
        }
        removeLocaleChangedListener(e) {
            this.eventTarget.removeEventListener(rs, e)
        }
        getSession() {
            return this.session.serialize()
        }
        getFeatureFlagValues() {
            return this.featureFlagValues
        }
        getLocaleString() {
            return this.localeStrings.getLocaleString()
        }
        setTranslationOverrides(e) {
            this.localeStrings.setTranslationOverrides(e),
            this.session.setTranslationOverrides(e),
            this.eventTarget.dispatchEvent(rs, this.localeStrings.getCurrentLocale()),
            this.messenger.sendOneWayMessage("UPDATE_SESSION", {
                session: this.session.serialize()
            })
        }
        setLocale(e) {
            var t = this.localeStrings.setLocale(e);
            if (t.previousLocale === t.newLocale)
                return t;
            var r = this.localeStrings.getCurrentLocale();
            return this.session.setLocale(r),
            this.eventTarget.dispatchEvent(rs, r),
            this.messenger.sendOneWayMessage("UPDATE_SESSION", {
                session: this.session.serialize()
            }),
            t
        }
        updateSession(e) {
            var t = this;
            return es((function*() {
                t.session.setSessionId(e),
                t.errorLogger.setCustomTags({
                    sessionId: e
                }),
                yield t.messenger.sendOneWayMessage("UPDATE_SESSION", {
                    session: t.session.serialize()
                })
            }
            ))()
        }
        waitForProofOfWorkCompletion() {
            var e = this;
            return es((function*() {
                var t = yield e.proofOfWorkComputePromise;
                void 0 !== t && t !== e.session.powCounter && e.session.setPowCounter(t),
                e.session.serializationHasChanged() && (yield e.messenger.sendOneWayMessage("UPDATE_SESSION", {
                    session: e.session.serialize()
                }))
            }
            ))()
        }
        setPaymentMethodTrackingId(e) {
            this.metricsHandler.setPaymentMethodTrackingId(e)
        }
        getPaymentMethodTrackingId() {
            return this.metricsHandler.getPaymentMethodTrackingId()
        }
    }
    !function(e) {
        e.APPLE_PAY_BROWSER_NOT_SUPPORTED = "APPLE_PAY_BROWSER_NOT_SUPPORTED",
        e.APPLE_PAY_DEVICE_NOT_SUPPORTED = "APPLE_PAY_DEVICE_NOT_SUPPORTED",
        e.APPLE_PAY_NOT_REGISTERED = "APPLE_PAY_NOT_REGISTERED",
        e.GOOGLE_PAY_BROWSER_NOT_SUPPORTED = "GOOGLE_PAY_BROWSER_NOT_SUPPORTED",
        e.GOOGLE_PAY_REQUIRES_HTTPS = "GOOGLE_PAY_REQUIRES_HTTPS",
        e.INVALID_CONFIG = "INVALID_CONFIG",
        e.MISC_THIRD_PARTY_IFRAME_NOT_ALLOWED = "MISC_THIRD_PARTY_IFRAME_NOT_ALLOWED",
        e.UNKNOWN = "UNKNOWN",
        e.UNABLE_TO_LOAD = "UNABLE_TO_LOAD"
    }(ts || (ts = {}));
    var is, os = {
        message: "Apple Pay is only available on Safari.",
        type: "BROWSER_NOT_SUPPORTED"
    }, as = {
        message: "Device does not support Apple Pay.\nSee: https://developer.squareup.com/docs/web-payments/apple-pay#prerequisites-and-assumptions",
        type: "DEVICE_NOT_SUPPORTED"
    }, ss = {
        message: "Browser does not support Google Pay. \nSee: https://developer.squareup.com/docs/web-payments/google-pay#prerequisites-and-assumptions",
        type: "BROWSER_NOT_SUPPORTED"
    }, cs = {
        message: "Google Pay requires HTTPS. \nSee: https://developer.squareup.com/docs/web-payments/google-pay#prerequisites-and-assumptions",
        type: "BROWSER_NOT_SUPPORTED"
    }, us = {
        message: "Configuration is invalid.",
        type: "INVALID_CONFIG"
    }, ls = {
        message: "Third-party iframes are not allowed to request payments unless explicitly allowed via Permissions-Policy Configuration.\n    Please configure the relevant permissions policy (via the Permissions-Policy header or <iframe allow...> ) to allow 'payment' in order to enable this functionality.\n    See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy/payment",
        type: "IFRAME_NOT_ALLOWED"
    }, ds = {
        message: "Temporarily unable to register the payment method.",
        type: "UNABLE_TO_LOAD"
    }, hs = {
        message: "An unknown error has occurred.",
        type: "UNKNOWN"
    };
    !function(e) {
        e.COUNTRY_NOT_SUPPORTED = "COUNTRY_NOT_SUPPORTED",
        e.APPLICATION_DISABLED = "APPLICATION_DISABLED",
        e.MISSING_LOCATION_ID = "MISSING_LOCATION_ID",
        e.UNVERIFIED_DOMAIN = "UNVERIFIED_DOMAIN",
        e.NOT_ONBOARDED = "NOT_ONBOARDED",
        e.US_AND_UK_MERCHANT_ONLY = "US_AND_UK_MERCHANT_ONLY",
        e.US_MERCHANT_ONLY = "US_MERCHANT_ONLY",
        e.INTERNAL_ERROR = "INTERNAL_ERROR",
        e.DOMAIN_NOT_REGISTERED = "DOMAIN_NOT_REGISTERED"
    }(is || (is = {}));
    var ps = {
        APPLICATION_DISABLED: {
            message: "Wallet is disabled for your application.",
            type: "APPLICATION_DISABLED"
        },
        COUNTRY_NOT_SUPPORTED: {
            message: "Wallet is not available in this merchant country.",
            type: "COUNTRY_NOT_SUPPORTED"
        },
        DOMAIN_NOT_REGISTERED: {
            message: "Your website's domain is not registered for use with Apple Pay.\nSee: https://developer.squareup.com/docs/web-payments/apple-pay#production-configuration",
            type: "DOMAIN_NOT_REGISTERED"
        },
        INTERNAL_ERROR: {
            message: "There was a temporary error determining your website's payment method status",
            type: "INTERNAL_ERROR"
        },
        MISSING_LOCATION_ID: {
            field: "locationId",
            message: "Missing locationId in the payment request configuration.\nSee: https://developer.squareup.com/reference/sdks/web/payments/objects/Payments",
            type: "MISSING_LOCATION_ID"
        },
        NOT_ONBOARDED: {
            message: "Your merchant account has not yet been onboarded for this payment method. Please visit the Seller Dashboard to enable the payment method",
            type: "NOT_ONBOARDED"
        },
        UNVERIFIED_DOMAIN: {
            message: "Your website's domain is not verified for use with Apple Pay. Please visit the Square Developer Dashboard at https://developer.squareup.com/ to register your domain for use with Apple Pay",
            type: "UNVERIFIED_DOMAIN"
        },
        US_AND_UK_MERCHANT_ONLY: {
            message: "Wallet is available for US and UK merchants only.",
            type: "US_AND_UK_MERCHANT_ONLY"
        },
        US_MERCHANT_ONLY: {
            message: "Wallet is available for US merchants only.",
            type: "US_MERCHANT_ONLY"
        }
    };
    class fs extends Vn {
        constructor(e, t, r) {
            var n = "".concat(e, " was called with a missing or invalid parameter. '").concat(t, "' is required");
            n += " and must be a(n) ".concat(r),
            super("".concat(n, ".")),
            this.name = "InvalidFunctionArgumentError",
            Object.setPrototypeOf(this, fs.prototype)
        }
    }
    class gs extends Vn {
        constructor(e) {
            super("One or more of the arguments needed are missing or invalid."),
            this.argumentErrors = e,
            this.name = "InvalidArgumentsError",
            Object.setPrototypeOf(this, gs.prototype)
        }
    }
    function vs(e) {
        return e instanceof Error ? e : new Error(JSON.stringify(e))
    }
    function ms(e) {
        return vs(e).message
    }
    var ys = function(e) {
        var t, r = new (null !== (t = Vo[e.name]) && void 0 !== t ? t : Vn);
        return r.fromSerializedError(e),
        r
    }
      , Es = function(e) {
        return {
            _isSerializedError: !0,
            errors: e.errors,
            message: e.message,
            name: e.name
        }
    };
    class _s {
        constructor() {
            this.listeners = {}
        }
        addEventListener(e, t) {
            e in this.listeners || (this.listeners[e] = []),
            this.listeners[e].push(t)
        }
        removeEventListener(e, t) {
            if (e in this.listeners)
                for (var r = this.listeners[e], n = 0; n < r.length; n += 1)
                    r[n] === t && (r.splice(n, 1),
                    n -= 1)
        }
        dispatchEvent(e, t) {
            if (e in this.listeners) {
                var r = new Yi(e,t)
                  , n = [...this.listeners[e]];
                for (var i of n)
                    try {
                        i(r)
                    } catch (e) {
                        console.error(e)
                    }
            }
        }
        hasEventListener(e) {
            return e in this.listeners && this.listeners[e].length > 0
        }
    }
    var bs, Is = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).slice(1)
        }
        return "".concat(e() + e(), "-").concat(e(), "-").concat(e(), "-").concat(e(), "-").concat(e()).concat(e()).concat(e())
    };
    class Ss {
        constructor(e, t, r, n) {
            this.metricsLogger = e,
            this.eventSource = r,
            this.session = t,
            this.paymentMethodTrackingId = n
        }
        logEvent(e, t) {
            Da(e) ? this.logMetricEvent({
                errorMessage: t,
                event: e,
                eventSource: this.eventSource
            }) : Ra(e) ? this.logMetricEvent({
                event: e,
                eventConfigurationValues: t,
                eventSource: this.eventSource
            }) : this.logMetricEvent({
                event: e,
                eventSource: this.eventSource,
                sloStatus: t
            })
        }
        setPaymentMethodTrackingId(e) {
            this.paymentMethodTrackingId = e
        }
        getPaymentMethodTrackingId() {
            return this.paymentMethodTrackingId
        }
        logMetricEvent(e) {
            return this.metricsLogger.logEvent(e, this.session.instanceId, this.session.sessionId, this.paymentMethodTrackingId)
        }
    }
    function ws(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function Os(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    ws(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    ws(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    r(9098),
    function(e) {
        e[e.DETACHED = 0] = "DETACHED",
        e[e.ATTACHED = 1] = "ATTACHED",
        e[e.DESTROYED = 2] = "DESTROYED"
    }(bs || (bs = {}));
    class Cs {
        constructor(e) {
            this.status = bs.DETACHED,
            this.eventTarget = new _s,
            this.eventBuffer = {},
            this.context = e
        }
        get session() {
            return this.context.getSession()
        }
        get messenger() {
            return this.context.messenger
        }
        get metricsHandler() {
            return this.context.metricsHandler
        }
        get errorLogger() {
            return this.context.errorLogger
        }
        addEventListener(e, t) {
            this.eventTarget.addEventListener(e, t),
            e in this.eventBuffer && this.eventBuffer[e].length > 0 && (this.eventBuffer[e].forEach((t => this.eventTarget.dispatchEvent(e, t))),
            this.eventBuffer[e] = [])
        }
        hasEventListener(e) {
            return this.eventTarget.hasEventListener(e)
        }
        removeEventListener(e, t) {
            this.eventTarget.removeEventListener(e, t)
        }
        destroy() {
            return Promise.resolve(!0)
        }
        detach() {
            return Promise.resolve(!0)
        }
        dispatchEvent(e, t) {
            this.hasEventListener(e) ? this.eventTarget.dispatchEvent(e, t) : (e in this.eventBuffer || (this.eventBuffer[e] = []),
            this.eventBuffer[e].push(t))
        }
        withErrorHandling(e, t, r) {
            var {methodType: n, context: i} = this;
            return Os((function*() {
                try {
                    return yield e(...arguments)
                } catch (e) {
                    throw ho(e, t) ? (i.getFeatureFlagValues().record_dev_errors_to_snowflake && i.metricsHandler.logEvent("DEVELOPER_ERROR", JSON.stringify({
                        operation: r,
                        paymentMethod: n,
                        type: vs(e).name
                    })),
                    e) : (i.errorLogger.captureException(e),
                    new Ai("using ".concat(n)))
                }
            }
            ))
        }
        throwIfDestroyed() {
            if (this.status === bs.DESTROYED)
                throw new _i(this.methodType)
        }
        throwIfDestroyedOrAlreadyAttached() {
            if (this.throwIfDestroyed(),
            this.status === bs.ATTACHED)
                throw new yi(this.methodType)
        }
        throwIfDestroyedOrNotAttached() {
            if (this.throwIfDestroyed(),
            this.status !== bs.ATTACHED)
                throw new Ei(this.methodType)
        }
    }
    var Ts = {
        message: "the tokenization request is already in process",
        type: "TOKENIZATION_IN_PROCESS"
    };
    class As extends Error {
        constructor(e) {
            super(e),
            this.name = "InvalidAuthorizationParameter",
            Object.setPrototypeOf(this, As.prototype)
        }
    }
    Error,
    Error;
    class Ps extends Error {
        constructor(e, t) {
            super(`The listener provided for event type ${e} threw an error: ${t}`),
            this.name = "InvalidEventListenerError",
            Object.setPrototypeOf(this, Ps.prototype)
        }
    }
    class Rs {
        constructor() {
            this.listeners = new Map,
            this.eventBuffer = new Map
        }
        addEventListener(e, t, r={}) {
            if (!0 === r.once) {
                const r = t;
                t = n => {
                    this.removeEventListener(e, t),
                    r(n)
                }
            }
            if (r.signal) {
                if (r.signal.aborted)
                    return;
                r.signal.addEventListener("abort", ( () => {
                    this.removeEventListener(e, t)
                }
                ))
            }
            const n = this.listeners.get(e);
            void 0 === n ? this.listeners.set(e, [t]) : n.push(t);
            const i = this.eventBuffer.get(e);
            i && (i.forEach((e => {
                this.dispatchEvent(e)
            }
            )),
            this.eventBuffer.set(e, []))
        }
        removeEventListener(e, t) {
            const r = this.listeners.get(e);
            if (void 0 !== r)
                for (let e = 0; e < r.length; e++)
                    r[e] === t && (r.splice(e, 1),
                    e--)
        }
        hasEventListener(e) {
            const t = this.listeners.get(e);
            return void 0 !== t && t.length > 0
        }
        dispatchEvent(e) {
            if (this.hasEventListener(e.type)) {
                const t = [...this.listeners.get(e.type)];
                for (const r of t)
                    try {
                        r(e)
                    } catch (t) {
                        throw new Ps(e.type,t.message)
                    }
            } else {
                const t = this.eventBuffer.get(e.type);
                void 0 === t ? this.eventBuffer.set(e.type, [e]) : t.push(e)
            }
        }
    }
    class Ns {
        constructor() {
            this.eventTarget = new Rs
        }
        addEventListener(e, t) {
            this.eventTarget.addEventListener(e, (e => {
                t(e.detail)
            }
            ))
        }
        dispatchEvent(e) {
            this.eventTarget.dispatchEvent(new CustomEvent(e.type,{
                detail: e
            }))
        }
    }
    const Ds = {
        get DEV_ENV() {
            return "development"
        },
        get IFRAME_NAME() {
            return "ach_authz"
        },
        get PRODUCTION_ENV() {
            return "production"
        },
        get SANDBOX_ENV() {
            return "sandbox"
        },
        get TEST_ENV() {
            return "test"
        },
        getDebitAuthHostname(e) {
            switch (e) {
            case this.PRODUCTION_ENV:
                return "https://connect.squareup.com";
            case this.SANDBOX_ENV:
                return "https://connect.squareupsandbox.com";
            default:
                return "https://connect.squareupstaging.com"
            }
        },
        getIframeSrc(e, t) {
            return `${this.getSDKBaseUrlForEnv(e)}${"development" === e ? "" : `/${t}`}/ach-authz-sdk/enclave.html`
        },
        getSDKBaseUrlForEnv(e) {
            switch (e) {
            case "production":
                return "https://web.squarecdn.com";
            case "sandbox":
                return "https://sandbox.web.squarecdn.com";
            case "development":
                return "https://localhost:1779";
            default:
                return "https://staging.web.squarecdn.com"
            }
        }
    }
      , Ls = function(e, t) {
        const r = document.createElement("iframe");
        return new Promise(( (n, i) => {
            r.onerror = e => {
                i(e)
            }
            ,
            r.onload = () => {
                n(r)
            }
            ,
            r.setAttribute("id", "ach-auth-enclave"),
            r.setAttribute("width", "100%"),
            r.setAttribute("height", "100%"),
            r.setAttribute("src", Ds.getIframeSrc(e, t)),
            r.style.position = "fixed",
            r.style.inset = "0px",
            r.style.zIndex = "2147483647",
            r.style.borderWidth = "0px",
            r.style.display = "block",
            r.style.overflow = "hidden auto",
            document.body.append(r)
        }
        ))
    }
      , xs = function(e) {
        e.parentElement?.removeChild(e)
    };
    class ks extends Error {
        constructor(e) {
            super(e),
            this.name = "IframeMessengerImplementationError",
            Object.setPrototypeOf(this, ks.prototype)
        }
    }
    class Ms extends Error {
        constructor(e) {
            super(e),
            this.name = "IframeMessengerInternalMessageError",
            Object.setPrototypeOf(this, Ms.prototype)
        }
    }
    class js extends Error {
        constructor(e, t, r) {
            void 0 !== r ? (super(`Messenger has not received an acknowledgement of message ${e} with id ${t} from iframe id=${r} which ${null === document.getElementById(r) ? "does not exist" : "exists"}`),
            this.iframeID = r) : super(`Messenger has not received an acknowledgement of message ${e} with id ${t}, no iframeID was set`),
            this.type = e,
            this.id = t,
            this.name = "IframeMessengerTimeoutError",
            Object.setPrototypeOf(this, js.prototype)
        }
    }
    const Us = "channel:connected"
      , Hs = "channel:connecting"
      , Bs = "channel:close"
      , Fs = "channel:error";
    class qs {
        constructor(e) {
            this.receiveMessage = e => {
                switch (e.data) {
                case this.messageWithName(Hs):
                    this.handleConnecting(e);
                    break;
                case this.messageWithName(Us):
                    this.handleConnected();
                    break;
                case this.messageWithName(Bs):
                    this.close();
                    break;
                case this.messageWithName(Fs):
                    break;
                default:
                    this.handleMessage(e)
                }
            }
            ,
            this.connected = !1,
            this.listeners = [],
            this.messageBuffer = [],
            this.name = void 0 !== e ? `:${e}` : ""
        }
        set onmessage(e) {
            this.listeners.push(e)
        }
        close() {
            this.port && (this.postMessage(this.messageWithName(Bs)),
            this.port.close(),
            this.port = void 0,
            this.connected || window.removeEventListener("message", this.receiveMessage)),
            this.connected = !1
        }
        connect(e) {
            if (this.connected)
                throw new ks("message channel is already connected");
            if (e) {
                if (void 0 === e.origin)
                    throw new ks("message channel remote.origin must be defined");
                if (null === e.window)
                    throw new ks("message channel remote.window cannot be null");
                const t = new MessageChannel;
                this.setupPort(t.port1),
                e.window.postMessage(this.messageWithName(Hs), e.origin, [t.port2])
            } else
                window.addEventListener("message", this.receiveMessage)
        }
        setErrorHandler(e) {
            this.errorHandler = e
        }
        postMessage(e) {
            this.port && this.connected ? this.port.postMessage(e) : this.messageBuffer.push(e)
        }
        handleConnecting(e) {
            if (this.connected)
                throw new ks("message channel should not be connecting because already connected");
            window.removeEventListener("message", this.receiveMessage),
            e.ports[0] && (this.setupPort(e.ports[0]),
            this.postMessage(this.messageWithName(Us)),
            this.connectionEstablished())
        }
        handleConnected() {
            if (this.connected)
                throw new ks("message channel already connected");
            this.connectionEstablished()
        }
        connectionEstablished() {
            for (this.connected = !0; this.messageBuffer.length > 0; )
                this.postMessage(this.messageBuffer.shift())
        }
        handleMessage(e) {
            this.listeners.forEach((t => {
                t(e)
            }
            ))
        }
        setupPort(e) {
            this.port = e,
            this.port.onmessage = this.receiveMessage,
            this.port.onmessageerror = e => {
                this.postMessage(this.messageWithName(Fs)),
                this.errorHandler && this.errorHandler(new ks("message channel failed to deserialize message"), e)
            }
        }
        messageWithName(e) {
            return e + this.name
        }
    }
    function Vs() {
        return `${Date.now()}${Math.floor(8e3 * Math.random())}`
    }
    const Gs = ["ack", "ok", "error"];
    function zs(e={}) {
        let t, r;
        const {errorSerializer: n, payloadSerializer: i} = e
          , o = new qs(e.name)
          , a = new Map;
        function s(e, t) {
            const {messageType: r, listener: n} = e
              , i = a.get(r);
            if (i) {
                const e = i.get(t);
                e ? e.push(n) : i.set(t, [n])
            } else
                a.set(r, new Map([[t, [n]]]))
        }
        function c(e) {
            const c = function(e) {
                if (!e.mustAcknowledge)
                    return new Promise((e => {
                        e({})
                    }
                    ));
                let o;
                const c = () => {
                    Gs.forEach((t => {
                        const r = a.get(`${e.type}:${t}`);
                        void 0 !== r && r.delete(o)
                    }
                    ))
                }
                  , u = window.setTimeout(( () => {
                    !function(e) {
                        const n = new js(e.type,e.id,r);
                        t && t(n, new MessageEvent(e.type,{
                            data: e
                        }))
                    }(e)
                }
                ), 1e4);
                return new Promise(( (t, r) => {
                    o = Vs(),
                    s({
                        listener() {
                            clearTimeout(u),
                            e.mustRespond || (c(),
                            t({}))
                        },
                        messageType: `${e.type}:ack`
                    }, o),
                    s({
                        listener(e) {
                            c();
                            const {payload: r} = e.data;
                            if (void 0 === i)
                                t(r);
                            else {
                                const e = i.deserialize(r);
                                t(e)
                            }
                        },
                        messageType: `${e.type}:ok`
                    }, o),
                    s({
                        listener(e) {
                            c();
                            const {payload: t} = e.data;
                            if (void 0 === n)
                                r(t);
                            else {
                                const e = n.deserialize(t);
                                r(e)
                            }
                        },
                        messageType: `${e.type}:error`
                    }, o)
                }
                ))
            }(e);
            return e.type && "undefined" !== e.type || void 0 === t || t(new Ms("attempting to send a messenger message with an undefined type")),
            o.postMessage(e),
            c
        }
        function u(e, t, r) {
            return c({
                id: t.id,
                mustAcknowledge: !0,
                mustRespond: !1,
                payload: r,
                type: e
            })
        }
        return o.onmessage = function(e) {
            const r = a.get(e.data.type);
            void 0 !== e.data.type && "undefined" !== e.data.type ? r ? (!0 === e.data.mustAcknowledge && function(e) {
                const t = `${e.type}:ack`;
                c({
                    id: e.id,
                    mustAcknowledge: !1,
                    mustRespond: !1,
                    payload: void 0,
                    type: t
                })
            }(e.data),
            r.forEach((t => {
                t.forEach((t => {
                    t(e)
                }
                ))
            }
            ))) : t && t(new ks(`Listener does not exist for ${e.data.type}. Add one to your messenger instance:\n            messenger.onMessage({\n                    listener: (msg) => {},\n                    messageType: '${e.data.type}',\n                });\n          `), e) : void 0 !== t && t(new Ms("Received a messenger message with an undefined type"), e)
        }
        ,
        Object.freeze({
            close: function() {
                o.close()
            },
            connect: function(e, t) {
                void 0 !== r && (r = t),
                o.connect(e)
            },
            onMessage: function(e, t=Vs()) {
                return s(e, t),
                t
            },
            reject: function(e, t) {
                const r = `${e.type}:error`;
                let i = t;
                return void 0 !== n && (i = n.serialize(t)),
                u(r, e, i)
            },
            request: function(e, t) {
                let r = t;
                return void 0 !== t && void 0 !== i && (r = i.serialize(t)),
                c({
                    id: Vs(),
                    mustAcknowledge: !0,
                    mustRespond: !0,
                    payload: r,
                    type: e
                })
            },
            respond: function(e, t) {
                const r = `${e.type}:ok`;
                let n = t;
                return void 0 !== i && (n = i.serialize(t)),
                u(r, e, n)
            },
            sendMessage: function(e, t) {
                let r = t;
                return void 0 !== t && void 0 !== i && (r = i.serialize(t)),
                c({
                    id: Vs(),
                    mustAcknowledge: !0,
                    mustRespond: !1,
                    payload: r,
                    type: e
                })
            },
            sendOneWayMessage: function(e, t) {
                let r = t;
                return void 0 !== t && void 0 !== i && (r = i.serialize(t)),
                c({
                    id: Vs(),
                    mustAcknowledge: !1,
                    mustRespond: !1,
                    payload: r,
                    type: e
                })
            },
            setErrorHandler: function(e) {
                t = e,
                o.setErrorHandler(e)
            }
        })
    }
    const $s = function() {
        return zs({
            name: Ds.IFRAME_NAME
        })
    }
      , Ws = async function(e, t, r) {
        const n = Ds.getSDKBaseUrlForEnv(r);
        e.connect({
            origin: n,
            window: t.contentWindow
        }, t.id),
        await e.sendMessage("INITIALIZE", {
            env: r
        })
    }
      , Ys = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
      , Ks = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    function Xs(e) {
        return "string" == typeof e && e.length > 0
    }
    const Js = {
        build(e, t) {
            const r = $s()
              , n = new Ns;
            return Promise.resolve(Object.freeze({
                addEventListener: function(e, t) {
                    n.addEventListener(e, t)
                },
                captureAuthorization: async function(i) {
                    let o;
                    try {
                        const a = function(e) {
                            if (!e.idempotencyKey)
                                throw new As("idempotencyKey is invalid");
                            if (!e.applicationId)
                                throw new As("applicationId is invalid");
                            if (!e.locationId)
                                throw new As("locationId is invalid");
                            if (null === e.total || !("total"in e))
                                throw new As("total needs to be provided");
                            if ("object" != typeof e.total)
                                throw new As("total needs to be a struct with amount and currencyCode");
                            if ("number" != typeof e.total.amount)
                                throw new As("total.amount needs to be a number");
                            if (!Xs(e.total.currencyCode))
                                throw new As("total.currencyCode needs to be valid");
                            const t = {
                                applicationId: e.applicationId,
                                idempotencyKey: e.idempotencyKey,
                                locationId: e.locationId,
                                total: e.total
                            };
                            if ("CHARGE" !== e.intent && "RECURRING_CHARGE" !== e.intent)
                                throw new As("intent needs to be one of CHARGE or RECURRING_CHARGE");
                            if ("CHARGE" === e.intent) {
                                if ("bankNonce"in e && "bankAccountId"in e)
                                    throw new As("only one of bankNonce or bankAccountId needs to be provided");
                                if ("bankNonce"in e && Xs(e.bankNonce))
                                    return {
                                        ...t,
                                        bankNonce: e.bankNonce,
                                        kind: "ONE_TIME_BANK_NONCE"
                                    };
                                if ("bankAccountId"in e && Xs(e.bankAccountId))
                                    return {
                                        ...t,
                                        bankAccountId: e.bankAccountId,
                                        kind: "ONE_TIME_BANK_ACCOUNT_ID"
                                    };
                                throw new As("one of bankNonce or bankAccountId needs to be provided")
                            }
                            {
                                if (!e.bankAccountId)
                                    throw new As("bankAccountId needs to be provided for recurring payments");
                                if ("WEEKLY" !== e.cadence && "MONTHLY" !== e.cadence)
                                    throw new As("Unsupported cadence. Must be one of: WEEKLY, MONTHLY");
                                if (!e.startDate)
                                    throw new As("Invalid startDate");
                                const r = function(e) {
                                    const t = function(e) {
                                        const t = e.match(Ys);
                                        if (!t)
                                            throw new As("Date did not match the YYYY-MM-DD format");
                                        const [r,n,i,o] = t.map(Number);
                                        return new Date(n,i - 1,o)
                                    }(e);
                                    if (function(e) {
                                        const t = `${e.getFullYear()}-${(e.getMonth() + 1).toString().padStart(2, "0")}-${e.getDate().toString().padStart(2, "0")}`
                                          , r = new Date(`${t}T00:00:00-08:00`)
                                          , n = new Date(r.getTime());
                                        return n.setDate(n.getDate() + 1),
                                        {
                                            endDate: n,
                                            endDateMillis: n.getTime(),
                                            startDate: r,
                                            startDateMillis: r.getTime()
                                        }
                                    }(t).endDateMillis < Date.now())
                                        throw new As("Start date is already over");
                                    return {
                                        day: t.getDate(),
                                        month: t.getMonth() + 1,
                                        weekday: Ks[t.getDay()],
                                        year: t.getFullYear()
                                    }
                                }(e.startDate);
                                return {
                                    ...t,
                                    bankAccountId: e.bankAccountId,
                                    cadence: e.cadence,
                                    kind: "RECURRING",
                                    startDate: r
                                }
                            }
                        }(i);
                        o = await Ls(e, t),
                        await Ws(r, o, e);
                        const s = await r.request("CAPTURE_AUTHORIZATION", a);
                        "success" === s.kind ? n.dispatchEvent({
                            token: s.token,
                            type: "signed"
                        }) : n.dispatchEvent({
                            type: "canceled"
                        })
                    } catch (e) {
                        n.dispatchEvent({
                            error: e,
                            type: "error"
                        })
                    }
                    o && xs(o)
                }
            }))
        }
    };
    var Zs = ["bankAccountDetails"];
    function Qs(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function ec(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function tc(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    var rc = {
        build(e) {
            var {env: t, transactionId: r, session: n, context: i, onSigned: o, onCanceled: a, onError: s} = e;
            function c() {
                var e;
                return e = function*(e) {
                    var c = yield Js.build(t, qn.VERSION);
                    i.metricsHandler.logEvent("ACH_AUTH:START");
                    var {bankAccountDetails: u} = e
                      , l = function(e, t) {
                        if (null == e)
                            return {};
                        var r, n, i = function(e, t) {
                            if (null == e)
                                return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n))
                                        continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++)
                                r = o[n],
                                -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(e, Zs);
                    c.addEventListener("signed", (function(e) {
                        o(e.token, u),
                        i.metricsHandler.logEvent("ACH_AUTH:OK")
                    }
                    )),
                    c.addEventListener("canceled", (function() {
                        i.metricsHandler.logEvent("ACH_AUTH:CANCEL"),
                        a()
                    }
                    )),
                    c.addEventListener("error", (function(e) {
                        var {error: t} = e;
                        t instanceof As ? s(new ii(t.message)) : (s(new Ai("authorizing the payment")),
                        i.errorLogger.captureException(t)),
                        i.metricsHandler.logEvent("ACH_AUTH:ERROR")
                    }
                    )),
                    yield c.captureAuthorization(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Qs(Object(r), !0).forEach((function(t) {
                                ec(e, t, r[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qs(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }
                            ))
                        }
                        return e
                    }({
                        applicationId: n.applicationId,
                        idempotencyKey: r,
                        locationId: n.locationId
                    }, l))
                }
                ,
                c = function() {
                    var t = this
                      , r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);
                        function a(e) {
                            tc(o, n, i, a, s, "next", e)
                        }
                        function s(e) {
                            tc(o, n, i, a, s, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                ,
                c.apply(this, arguments)
            }
            return Object.freeze({
                run: function(e) {
                    return c.apply(this, arguments)
                }
            })
        }
    }
      , nc = function() {
        var e = document.createElement("div");
        return e.style.position = "fixed",
        e.style.top = "0",
        e.style.left = "0",
        e.style.width = "100vw",
        e.style.height = "100%",
        e.style.zIndex = "3",
        e.style.backgroundColor = "rgba(0, 0, 0, 0.8)",
        e.style.opacity = "0",
        document.body.appendChild(e),
        e.style.transition = "opacity ".concat("cubic-bezier(0.26, 0.1, 0.48, 1)", " ").concat("0.24s"),
        setTimeout((function() {
            e.style.opacity = "1"
        }
        )),
        new Promise((function(t) {
            setTimeout((function() {
                t(e)
            }
            ), 240)
        }
        ))
    }
      , ic = function(e) {
        e && (e.style.transition = "opacity ".concat("cubic-bezier(0.52, 0, 0.74, 0)", " ").concat("0.16s"),
        setTimeout((function() {
            e.style.opacity = "0"
        }
        )),
        setTimeout((function() {
            e.remove()
        }
        ), 160))
    };
    class oc {
        constructor(e) {
            this.id = Is(),
            this.context = e
        }
        request(e, t) {
            return this.context.messenger.request(e, {
                body: t,
                featureFlagValues: this.context.getFeatureFlagValues(),
                paymentMethodInstanceId: this.id,
                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                session: this.context.getSession()
            })
        }
        initializeMessageBus(e) {
            var t = this
              , r = function(e) {
                t.context.messenger.onMessage({
                    listener(t) {
                        e(t)
                    },
                    messageType: "".concat(n, ":").concat(t.id)
                })
            };
            for (var [n,i] of Object.entries(e))
                r(i)
        }
    }
    class ac extends Error {
        constructor(e, t, r) {
            super(`error loading script ${e}: ${t} ${r ? r.toString() : ""}`),
            this.name = "ScriptLoaderError",
            Object.setPrototypeOf(this, ac.prototype)
        }
    }
    const sc = {};
    function cc(e) {
        delete sc[e],
        document.getElementById(e)?.remove()
    }
    function uc(e, t) {
        const r = t();
        if (void 0 !== r)
            return Promise.resolve(r);
        if (e.id in sc)
            return sc[e.id];
        const n = document.createElement("script");
        for (const t in e) {
            const r = e[t];
            void 0 !== r && n.setAttribute(t, r)
        }
        return sc[e.id] = new Promise(( (r, i) => {
            n.onload = () => {
                const n = t();
                void 0 === n ? (cc(e.id),
                i(new ac(e.src,"location returned undefined"))) : r(n)
            }
            ,
            n.onerror = (t, r, n, o, a) => {
                cc(e.id),
                i(new ac(e.src,"Unknown error occurred",a))
            }
        }
        )),
        document.body.appendChild(n),
        sc[e.id]
    }
    function lc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function dc(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function hc(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function pc() {
        var e;
        return e = function*(e, t, r, n) {
            try {
                var i = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? lc(Object(r), !0).forEach((function(t) {
                            dc(e, t, r[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lc(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }
                        ))
                    }
                    return e
                }({
                    id: "square-payments-".concat(e, "-script")
                }, t);
                return yield uc(i, ( () => {
                    var e;
                    return "google.payments" === r ? null === (e = window.google) || void 0 === e ? void 0 : e.payments : window[r]
                }
                ))
            } catch (e) {
                throw n.captureException(e),
                new mi(ds)
            }
        }
        ,
        pc = function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    hc(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    hc(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
        ,
        pc.apply(this, arguments)
    }
    var fc = {
        load: function(e, t, r, n) {
            return pc.apply(this, arguments)
        }
    };
    function gc(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    var vc = new Set(["ITEM_ERROR"])
      , mc = new Set(["en", "es"])
      , yc = ["US"];
    function Ec(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function _c(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    Ec(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    Ec(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var bc = (e, t) => _c((function*() {
        var r = new oc(e)
          , n = function(e, t, r, n) {
            var i;
            function o() {
                var a;
                return a = function*() {
                    var o = yield function(e, t) {
                        var r = e.getSession();
                        if (void 0 === r.locationId || "" === r.locationId)
                            throw new Ai("locationId not defined when creating OAuth Plaid Link Session");
                        var n = c.windowNavigationLanguage.slice(0, 2)
                          , i = {
                            createOAuthPlaidLinkSessionRequest: {
                                clientId: r.applicationId,
                                languageCode: n,
                                locationId: r.locationId,
                                redirectUri: ""
                            }
                        };
                        return t.request("CREATE_OAUTH_PLAID_LINK_SESSION", i)
                    }(t, r);
                    return function(r) {
                        return new Promise(( (o, a) => {
                            var [s] = c.windowNavigationLanguage.split("-");
                            mc.has(s) || (s = "en");
                            var {errorLogger: u, metricsHandler: l, isTestMerchant: d} = t
                              , h = "sandbox";
                            "production" !== qn.env || d || (h = "production"),
                            i = e.create({
                                clientName: "Square, Inc.",
                                countryCodes: yc,
                                env: h,
                                language: s,
                                onEvent: (e, t) => {
                                    e !== Nn.ERROR || vc.has(t.error_type) || u.captureException(new Co("PlaidErrorEvent: ".concat(JSON.stringify(t)),Fi.ACH)),
                                    n.onEvent(e, t)
                                }
                                ,
                                onExit: (e, t) => {
                                    e && (l.logEvent("EXTERNAL_SESSION:ERROR"),
                                    vc.has(e.error_type) || u.captureException(new Co("PlaidErrorOnExit: ".concat(JSON.stringify(e), ", Metadata: ").concat(JSON.stringify(t)),Fi.ACH))),
                                    o({
                                        kind: "canceled"
                                    })
                                }
                                ,
                                onSuccess: (e, t) => {
                                    if (0 === t.accounts.length) {
                                        l.logEvent("EXTERNAL_SESSION:ERROR");
                                        var n = new Error("No account selected but expected account, metadata: ".concat(JSON.stringify(t)));
                                        return u.captureException(n),
                                        void a(n)
                                    }
                                    l.logEvent("EXTERNAL_SESSION:OK"),
                                    o({
                                        gringottsSessionToken: r.gringottsSessionToken,
                                        kind: "success",
                                        publicToken: e,
                                        selectedBankAccountId: t.accounts[0].id
                                    })
                                }
                                ,
                                product: ["auth"],
                                token: r.plaidLinkToken
                            }),
                            l.logEvent("EXTERNAL_SESSION:START"),
                            i.open()
                        }
                        ))
                    }(o)
                }
                ,
                o = function() {
                    var e = this
                      , t = arguments;
                    return new Promise((function(r, n) {
                        var i = a.apply(e, t);
                        function o(e) {
                            gc(i, r, n, o, s, "next", e)
                        }
                        function s(e) {
                            gc(i, r, n, o, s, "throw", e)
                        }
                        o(void 0)
                    }
                    ))
                }
                ,
                o.apply(this, arguments)
            }
            return {
                beginFlow: function() {
                    return o.apply(this, arguments)
                },
                destroy: function() {
                    i && (i.exit({
                        force: !0
                    }),
                    i.destroy(),
                    i = void 0)
                }
            }
        }(yield fc.load("plaid-link", {
            src: "https://cdn.plaid.com/link/v2/stable/link-initialize.js"
        }, "Plaid", e.errorLogger), e, r, {
            onEvent: t
        });
        function i() {
            return i = _c((function*(e) {
                var t = yield n.beginFlow();
                if ("success" === t.kind) {
                    var r = yield function(e, t, r, n) {
                        return o.apply(this, arguments)
                    }(e.accountHolderName, t.publicToken, t.selectedBankAccountId, t.gringottsSessionToken);
                    return r
                }
                return {
                    status: Vi.CANCEL
                }
            }
            )),
            i.apply(this, arguments)
        }
        function o() {
            return (o = _c((function*(t, n, i, o) {
                yield e.waitForProofOfWorkCompletion();
                var a = e.getSession()
                  , s = {
                    accountHolderName: t,
                    gringottsSessionToken: o,
                    plaidPublicToken: n,
                    selectedPlaidBankAccountId: i
                }
                  , c = {
                    bankNonceRequest: {
                        clientId: a.applicationId,
                        instanceId: a.instanceId,
                        locationId: a.locationId,
                        paymentMethodTrackingId: e.getPaymentMethodTrackingId(),
                        plaidLinkData: s,
                        sessionId: a.sessionId,
                        websdkVersion: qn.VERSION
                    }
                };
                try {
                    var u = yield r.request("REQUEST_ACH_BANK_NONCE", c);
                    return e.setPaymentMethodTrackingId(u.paymentMethodTrackingId),
                    {
                        accountDetails: u.accountDetails,
                        bankNonce: u.bankNonce,
                        status: Vi.OK
                    }
                } catch (e) {
                    throw e instanceof Ti ? e : new Ti([Po])
                }
            }
            ))).apply(this, arguments)
        }
        return Object.freeze({
            destroy: function() {
                n.destroy()
            },
            run: function(e) {
                return i.apply(this, arguments)
            }
        })
    }
    ))();
    function Ic(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function Sc(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    Ic(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    Ic(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    class wc extends Cs {
        constructor(e, t) {
            var r;
            super(e),
            this.methodType = Fi.ACH,
            this.tokenizeInProgress = !1,
            this.wasFirstInteractionCalled = !1;
            try {
                !function(e) {
                    if (po(e)) {
                        var t;
                        try {
                            t = new URL(e)
                        } catch (t) {
                            throw new si("redirectURI",e,"Must be a valid URI")
                        }
                        if ([...t.searchParams.values()].length > 0)
                            throw new si("redirectURI",e,"URI must not contain query parameters");
                        return !0
                    }
                    throw new si("redirectURI","".concat(e),"Must be a valid URI")
                }(null == t ? void 0 : t.redirectURI)
            } catch (e) {
                this.metricsHandler.logEvent("INVALID_REDIRECT_URI", ms(e))
            }
            try {
                !function(e) {
                    if (po(e)) {
                        if (e.length > 50)
                            throw new si("transactionId",e,"String must be between 1 and 50 characters");
                        return !0
                    }
                    throw new si("transactionId","".concat(e),"String must be between 1 and 50 characters")
                }(null == t ? void 0 : t.transactionId)
            } catch (e) {
                this.metricsHandler.logEvent("INVALID_TRANSACTION_ID", ms(e))
            }
            this.transactionId = null !== (r = null == t ? void 0 : t.transactionId) && void 0 !== r ? r : Is()
        }
        initialize() {
            var e = this;
            return Sc((function*() {
                var t = e.dispatchPlaidEvent.bind(e);
                e.plaidNonceFlow = yield bc(e.context, t),
                e.achAuthFlow = rc.build({
                    context: e.context,
                    env: qn.env,
                    onCanceled: e.dispatchCancelResult.bind(e),
                    onError: e.dispatchError.bind(e),
                    onSigned: e.dispatchSuccessfulTokenResult.bind(e),
                    session: e.session,
                    transactionId: e.transactionId
                })
            }
            ))()
        }
        tokenize(e) {
            var t = this;
            return Sc((function*() {
                try {
                    if (t.throwIfDestroyed(),
                    t.tokenizeInProgress)
                        throw new Ti([Ts]);
                    if ("string" != typeof (null == e ? void 0 : e.accountHolderName) || "" === e.accountHolderName.trim())
                        throw new Gn;
                    var r = t.context.getFeatureFlagValues().can_use_ach_auth;
                    if (!function(e, t) {
                        switch (t) {
                        case "SUPPORTED":
                            return !0;
                        case "REQUIRED":
                            return Cc(e);
                        default:
                            return !1
                        }
                    }(e, r))
                        throw new ii("Invalid parameter format for ACH tokenize");
                    if (!t.hasEventListener(Nn.ON_TOKENIZATION)) {
                        var n = "Add event listener for '".concat(Nn.ON_TOKENIZATION, "' before calling tokenize.");
                        console.error("".concat(n, " This will result in an error when using the Plaid OAuth flow."))
                    }
                    if (void 0 === t.achAuthFlow || void 0 === t.plaidNonceFlow)
                        throw new Ai("Must call initialize() before tokenize() call");
                    if (t.tokenizeInProgress = !0,
                    t.handleFirstInteraction(),
                    t.metricsHandler.logEvent("TOKENIZE_CONFIGURED", e),
                    function(e) {
                        return Cc(e) && "RECURRING_CHARGE" === e.intent
                    }(e))
                        return t.veil = yield nc(),
                        void (yield t.achAuthFlow.run({
                            bankAccountId: e.bankAccountId,
                            cadence: e.cadence,
                            intent: e.intent,
                            startDate: e.startDate,
                            total: Oc(e)
                        }));
                    if (function(e) {
                        return Cc(e) && "CHARGE" === e.intent
                    }(e) && po(e.bankAccountId))
                        return t.veil = yield nc(),
                        void (yield t.achAuthFlow.run({
                            bankAccountId: e.bankAccountId,
                            intent: e.intent,
                            total: Oc(e)
                        }));
                    Cc(e) ? t.veil = yield nc() : t.context.metricsHandler.logEvent("ACH_LEGACY:START");
                    var i = yield t.plaidNonceFlow.run({
                        accountHolderName: e.accountHolderName
                    });
                    if (!Cc(e))
                        switch (t.context.metricsHandler.logEvent("ACH_LEGACY:OK"),
                        i.status) {
                        case Vi.OK:
                            var o = Ac(i.bankNonce, i.accountDetails);
                            return t.dispatchTokenizationEvent(o),
                            t.resetFirstInteraction(),
                            o;
                        case Vi.CANCEL:
                            var a = Tc();
                            return t.dispatchTokenizationEvent(a),
                            a;
                        default:
                            throw new Ai("Unexpected tokenize flow status")
                        }
                    return void (yield t.runAchAuthFlowBasedOnPlaidResult(i, e))
                } catch (e) {
                    throw t.dispatchError(e),
                    e
                } finally {
                    t.tokenizeInProgress = !1,
                    ic(t.veil)
                }
            }
            ))()
        }
        destroy() {
            var e;
            return this.status = bs.DESTROYED,
            this.metricsHandler.logEvent("DESTROYED"),
            null === (e = this.plaidNonceFlow) || void 0 === e || e.destroy(),
            Promise.resolve(!0)
        }
        addEventListener(e, t) {
            this.metricsHandler.logEvent("EVENT_LISTENER_ADDED", e),
            super.addEventListener(e, t)
        }
        removeEventListener(e, t) {
            super.removeEventListener(e, t)
        }
        runAchAuthFlowBasedOnPlaidResult(e, t) {
            var r = this;
            return Sc((function*() {
                if (e.status === Vi.CANCEL)
                    r.dispatchTokenizationEvent(Tc());
                else
                    switch (t.intent) {
                    case "CHARGE":
                        yield r.achAuthFlow.run({
                            bankAccountDetails: e.accountDetails,
                            bankNonce: e.bankNonce,
                            intent: t.intent,
                            total: Oc(t)
                        });
                        break;
                    case "STORE":
                        r.dispatchSuccessfulTokenResult(e.bankNonce, e.accountDetails);
                        break;
                    default:
                        throw new ii("Unsupported intent ".concat(t.intent, ". Must be one of: CHARGE, STORE, RECURRING_CHARGE"))
                    }
            }
            ))()
        }
        resetFirstInteraction() {
            this.wasFirstInteractionCalled = !1
        }
        handleFirstInteraction() {
            this.wasFirstInteractionCalled || (this.wasFirstInteractionCalled = !0,
            this.metricsHandler.logEvent("FIRST_INTERACTION:OK"))
        }
        dispatchCancelResult() {
            this.dispatchTokenizationEvent(Tc())
        }
        dispatchSuccessfulTokenResult(e, t) {
            this.resetFirstInteraction();
            var r = Ac(e, t);
            this.dispatchTokenizationEvent(r)
        }
        dispatchError(e) {
            this.dispatchEvent(Nn.ON_TOKENIZATION, {
                error: e
            })
        }
        dispatchPlaidEvent(e, t) {
            this.dispatchEvent(e, t)
        }
        dispatchTokenizationEvent(e) {
            this.dispatchEvent(Nn.ON_TOKENIZATION, {
                tokenResult: e
            })
        }
    }
    function Oc(e) {
        return "total"in e ? e.total : {
            amount: vo(e.amount, e.currency),
            currencyCode: e.currency
        }
    }
    function Cc(e) {
        return "intent"in e
    }
    function Tc() {
        return {
            status: Vi.CANCEL
        }
    }
    function Ac(e, t) {
        var r = {
            status: Vi.OK,
            token: e
        };
        return t && (r.details = {
            bankAccount: t,
            method: Fi.ACH
        }),
        r
    }
    var Pc = [Wn, Yn, Kn, Xn]
      , Rc = new Set(["DIV", "SPAN"])
      , Nc = new Set(["DIV", "SPAN"])
      , Dc = new Set(["DIV", "SPAN", "BUTTON"]);
    function Lc(e, t) {
        var r;
        if (function(e) {
            return "string" == typeof e
        }(e)) {
            var n = document.querySelector(e);
            if (!n)
                throw new ei(e);
            r = n
        } else {
            if (!(e instanceof HTMLElement))
                throw new bi(e,t);
            if (r = e,
            !document.contains(r))
                throw new ei(r)
        }
        if (!t.has(r.nodeName))
            throw new bi(r,t);
        return r
    }
    function xc(e) {
        return Lc(e, Rc)
    }
    function kc(e) {
        return Lc(e, Dc)
    }
    function Mc(e) {
        return Lc(e, Nc)
    }
    var jc, Uc, Hc, Bc, Fc = function(e, t, r) {
        return new Promise(( (n, i) => {
            if (function(e) {
                return Boolean(document.getElementById(e))
            }(t))
                n();
            else {
                var o = document.createElement("link");
                o.onload = () => {
                    n()
                }
                ,
                o.onerror = () => {
                    i(new Error("Failed to load stylesheet at ".concat(e, ". The onerror callback was invoked.")))
                }
                ,
                o.href = e,
                o.rel = "stylesheet",
                o.type = "text/css",
                o.id = t,
                r.appendChild(o)
            }
        }
        ))
    }, qc = ["black", "green", "mint"];
    function Vc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Gc(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Vc(Object(r), !0).forEach((function(t) {
                zc(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vc(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function zc(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function $c(e, t) {
        if ("object" != typeof e)
            return {
                isValid: !1,
                missingFields: []
            };
        var r = [];
        return {
            isValid: Object.entries(t).map((t => {
                var [n,i] = t;
                if ("object" == typeof i) {
                    var o = $c("object" == typeof e[n] ? e[n] : {}, i);
                    return o.missingFields.forEach((e => {
                        var [t,i] = e;
                        r.push(["".concat(n, ".").concat(t), i])
                    }
                    )),
                    o.isValid
                }
                return n in e && typeof e[n] === i || (r.push([n, i]),
                !1)
            }
            )).every(Boolean),
            missingFields: r
        }
    }
    function Wc(e, t, r) {
        if (!Array.isArray(e))
            return {
                isValid: !1,
                missingFields: [[t, "Array"]]
            };
        var n = e.reduce(( (e, n) => {
            var i = $c({
                [t]: n
            }, {
                [t]: r
            })
              , o = Object.fromEntries(i.missingFields);
            return {
                isValid: e.isValid && i.isValid,
                missingFieldsMap: Gc(Gc({}, e.missingFieldsMap), o)
            }
        }
        ), {
            isValid: !0,
            missingFieldsMap: {}
        });
        return {
            isValid: n.isValid,
            missingFields: Object.entries(n.missingFieldsMap)
        }
    }
    !function(e) {
        e.SHIPPING_ADDRESS_UNRECOGNIZED = "SHIPPING_ADDRESS_UNRECOGNIZED",
        e.SHIPPING_ADDRESS_UNSUPPORTED = "SHIPPING_ADDRESS_UNSUPPORTED",
        e.SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"
    }(jc || (jc = {})),
    function(e) {
        e.BADGE = "badge",
        e.LOCKUP = "lockup"
    }(Uc || (Uc = {})),
    function(e) {
        e.BLACK = "black",
        e.WHITE = "white",
        e.MINT = "mint"
    }(Hc || (Hc = {})),
    function(e) {
        e.UPDATE = "update"
    }(Bc || (Bc = {})),
    r(488),
    r(6104);
    var Yc = "".concat(qn.ASSET_URL, "/afterpay.css")
      , Kc = "sq-afterpay-styles"
      , Xc = "b8a38183b2e5959390488e48f9b109f6a73fd53c"
      , Jc = {
        development: "https://portal.sandbox.afterpay.com/afterpay.js?merchant_key=".concat(Xc),
        production: "https://portal.afterpay.com/afterpay.js?merchant_key=".concat(Xc),
        sandbox: "https://portal.sandbox.afterpay.com/afterpay.js?merchant_key=".concat(Xc),
        staging: "https://portal.stage.afterpay-beta.com/afterpay.js?merchant_key=".concat(Xc),
        test: "https://portal.sandbox.afterpay.com/afterpay.js?merchant_key=".concat(Xc)
    }
      , Zc = {
        development: "https://js-sandbox.squarecdn.com/square-marketplace.js",
        production: "https://js.squarecdn.com/square-marketplace.js",
        sandbox: "https://js-sandbox.squarecdn.com/square-marketplace.js",
        staging: "https://portal.stage.afterpay-beta.com/square-marketplace.js",
        test: "https://js-sandbox.squarecdn.com/square-marketplace.js"
    }
      , Qc = {
        development: "https://js.sandbox.afterpay.com/afterpay-1.x.js",
        production: "https://js.afterpay.com/afterpay-1.x.js",
        sandbox: "https://js.afterpay.com/afterpay-1.x.js",
        staging: "https://js.sandbox.afterpay.com/afterpay-1.x.js",
        test: "https://js.sandbox.afterpay.com/afterpay-1.x.js"
    }
      , eu = "#000"
      , tu = "#00d533"
      , ru = "#b2fce4"
      , nu = {
        black: {
            [Ln.CheckoutWithAfterpay]: {
                backgroundColor: eu,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Afterpay_Checkout_Button_Black-White.svg"
            },
            [Ln.BuyNowWithAfterpay]: {
                backgroundColor: eu,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Afterpay_BuyNow_Button_Black-White.svg"
            },
            [Ln.PlaceOrderWithAfterpay]: {
                backgroundColor: eu,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Afterpay_PlaceOrder_Button_Black-White.svg"
            }
        },
        green: {
            [Ln.CheckoutWithAfterpay]: {
                backgroundColor: ru,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Afterpay_Checkout_Button_Mint-Black.svg"
            },
            [Ln.BuyNowWithAfterpay]: {
                backgroundColor: ru,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Afterpay_BuyNow_Button_Mint-Black.svg"
            },
            [Ln.PlaceOrderWithAfterpay]: {
                backgroundColor: ru,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Afterpay_PlaceOrder_Button_Mint-Black.svg"
            }
        }
    }
      , iu = {
        black: {
            [Ln.CheckoutWithAfterpay]: {
                backgroundColor: eu,
                cdn: "AFTERPAY_CDN",
                url: "https://static.afterpay.com/en-US/integration/button/checkout-with-afterpay/color-on-black.svg"
            },
            [Ln.BuyNowWithAfterpay]: {
                backgroundColor: eu,
                cdn: "AFTERPAY_CDN",
                url: "https://static.afterpay.com/en-US/integration/button/buy-with-afterpay/color-on-black.svg"
            },
            [Ln.PlaceOrderWithAfterpay]: {
                backgroundColor: eu,
                cdn: "AFTERPAY_CDN",
                url: "https://static.afterpay.com/en-US/integration/button/place-order-with-afterpay/color-on-black.svg"
            }
        },
        green: {
            [Ln.CheckoutWithAfterpay]: {
                backgroundColor: tu,
                cdn: "AFTERPAY_CDN",
                url: "https://static.afterpay.com/en-US/integration/button/checkout-with-afterpay/black-on-green.svg"
            },
            [Ln.BuyNowWithAfterpay]: {
                backgroundColor: tu,
                cdn: "AFTERPAY_CDN",
                url: "https://static.afterpay.com/en-US/integration/button/buy-with-afterpay/black-on-green.svg"
            },
            [Ln.PlaceOrderWithAfterpay]: {
                backgroundColor: tu,
                cdn: "AFTERPAY_CDN",
                url: "https://static.afterpay.com/en-US/integration/button/place-order-with-afterpay/black-on-green.svg"
            }
        }
    }
      , ou = {
        black: {
            [Ln.CheckoutWithAfterpay]: {
                backgroundColor: eu,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Clearpay_Checkout_Button_Black-White.svg"
            },
            [Ln.BuyNowWithAfterpay]: {
                backgroundColor: eu,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Clearpay_BuyNow_Button_Black-White.svg"
            },
            [Ln.PlaceOrderWithAfterpay]: {
                backgroundColor: eu,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Clearpay_PlaceOrder_Button_Black-White.svg"
            }
        },
        green: {
            [Ln.CheckoutWithAfterpay]: {
                backgroundColor: ru,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Clearpay_Checkout_Button_Mint-Black.svg"
            },
            [Ln.BuyNowWithAfterpay]: {
                backgroundColor: ru,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Clearpay_BuyNow_Button_Mint-Black.svg"
            },
            [Ln.PlaceOrderWithAfterpay]: {
                backgroundColor: ru,
                cdn: "WEBSDK_CDN",
                url: "afterpay-buttons/Clearpay_PlaceOrder_Button_Mint-Black.svg"
            }
        }
    }
      , au = new Set(["US"])
      , su = new Set(["US", "CA", "AU", "NZ"]);
    function cu(e, t) {
        var r = 0;
        return e.forEach((e => {
            r += vo(e, t)
        }
        )),
        go(r, t)
    }
    function uu(e, t) {
        return cu(e.map((e => e.amount)), t)
    }
    var lu = function(e) {
        return {
            area1: e.city,
            countryCode: e.countryCode,
            line1: e.addressLines[0],
            line2: e.addressLines[1],
            name: "".concat(e.givenName, " ").concat(e.familyName),
            phoneNumber: e.phone,
            postcode: e.postalCode,
            region: e.state
        }
    }
      , du = function(e, t) {
        return e.map((e => ({
            amount: {
                amount: e.amount,
                currency: t
            },
            displayName: e.label
        })))
    }
      , hu = function(e, t) {
        return e.map((e => ({
            imageUrl: e.imageUrl,
            name: e.label,
            pageUrl: e.productUrl,
            price: {
                amount: e.amount,
                currency: t
            },
            quantity: 1,
            sku: e.id
        })))
    }
      , pu = function(e, t) {
        return e.shippingOptions.map((e => {
            var r;
            return {
                description: "",
                id: e.id,
                name: e.label,
                orderAmount: {
                    amount: e.total.amount,
                    currency: t.currencyCode
                },
                shippingAmount: {
                    amount: e.amount,
                    currency: t.currencyCode
                },
                taxAmount: {
                    amount: uu(null !== (r = e.taxLineItems) && void 0 !== r ? r : [], t.currencyCode),
                    currency: t.currencyCode
                }
            }
        }
        ))
    }
      , fu = function(e) {
        if (e.requestShippingContact && void 0 !== e.lineItems && e.lineItems.length > 0) {
            var t = uu(e.lineItems, e.currencyCode);
            return e.discounts && (t = cu([t, (r = e.discounts,
            n = e.currencyCode,
            "-".concat(uu(r, n)))], e.currencyCode)),
            {
                amount: t,
                currency: e.currencyCode
            }
        }
        var r, n;
        return {
            amount: cu([e.total.amount], e.currencyCode),
            currency: e.currencyCode
        }
    }
      , gu = function(e) {
        return {
            amount: e.shippingAmount.amount,
            id: e.id,
            label: e.name
        }
    }
      , vu = function(e) {
        var t, r, n = [];
        return [e.address1, e.address2].forEach((e => {
            void 0 !== e && n.push(e)
        }
        )),
        e.name && ([t,r] = e.name.split(/\s(?=\S+$)/)),
        {
            addressLines: n,
            city: e.suburb,
            countryCode: e.countryCode,
            familyName: r,
            givenName: t,
            phone: e.phoneNumber,
            postalCode: e.postcode,
            state: e.state
        }
    };
    function mu(e, t) {
        var r = {
            [t]: {
                addressLines: "object",
                city: "string",
                countryCode: "string",
                familyName: "string",
                givenName: "string",
                postalCode: "string",
                state: "string"
            }
        };
        return $c({
            [t]: e
        }, r)
    }
    var yu = function(e) {
        return mu(e, "shippingContact")
    };
    function Eu(e, t) {
        var [r,n] = e.split("-");
        return t.has(n)
    }
    var _u = function(e, t, r) {
        var n = "mint" === e ? "green" : e;
        return r && Eu(t, au) ? iu[n] : Eu(t, su) ? nu[n] : ou[n]
    }
      , bu = function(e) {
        return Eu(e, su) ? "afterpay-brand.svg" : "clearpay-brand.svg"
    };
    function Iu(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    var Su = [25, 50, 75, 100];
    class wu {
        constructor(e, t) {
            this.attached = !1,
            this.req = e,
            this.context = t,
            this.locale = this.context.getSession().locale,
            this.currencyCode = this.req.currencyCode;
            var {today: r, weeks: n} = this.context.getLocaleString().paymentMethods.afterpay.checkoutWidget;
            this.periodText = [r, "2 ".concat(n), "4 ".concat(n), "6 ".concat(n)],
            t.addLocaleChangedListener(( () => {
                this.locale = this.context.getSession().locale,
                this.context.metricsHandler.logEvent("CHECKOUT_WIDGET_RECEIVES_LOCALE_CHANGE", xu(this.context, {
                    newLocale: this.locale
                })),
                this.update()
            }
            )),
            e.addEventListener(Bc.UPDATE, ( () => {
                this.update()
            }
            ))
        }
        attach(e, t) {
            var r, n = this;
            return (r = function*() {
                n.element = e;
                try {
                    yield Fc(Yc, Kc, document.head)
                } catch (e) {
                    throw new Ai("attaching the Afterpay Checkout Widget")
                }
                var r = n.buildAmounts().map((e => fo(e, n.currencyCode, n.locale)))
                  , i = !1;
                !0 === (null == t ? void 0 : t.includeBranding) && (i = !0);
                var o = bu(n.locale)
                  , a = '\n      <div class="sq-ap__checkout-widget-container">\n        '.concat(i ? '<div class="sq-ap__wordmark">\n                <img id="ap-wordmark-image" src="'.concat(qn.staticAsset(o), '"/>\n              </div>') : "", '\n        <p class="sq-ap__checkout-title">').concat(n.context.getLocaleString().paymentMethods.afterpay.checkoutWidget.title, '</p>\n        <div class="sq-ap__payment-container">\n          ').concat(r.map(( (e, t) => '\n              <div id="ap-payment-container-'.concat(t, '" class="sq-ap__individual-payment">\n                <div class="sq-ap__harvey-ball-container">\n                  ').concat(function(e) {
                    var t = 12
                      , r = 2 * Math.PI * 6
                      , n = r * Su[e] / 100;
                    return '\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(24, " ").concat(24, '" class="sq-ap__harvey-ball">\n        <circle\n          r="').concat(t, '"\n          cx="').concat(t, '"\n          cy="').concat(t, '"\n          fill="white"\n        />\n        <circle\n          r="').concat(6, '"\n          cx="').concat(t, '"\n          cy="').concat(t, '"\n          fill="none"\n          stroke="').concat("#B2FCE4", '"\n          stroke-width="').concat(t, '"\n          stroke-dasharray="').concat(n, " ").concat(r, '"\n          transform="rotate(-90) translate(-').concat(24, ')"\n        />\n        <circle\n          r="').concat(t, '"\n          cx="').concat(t, '"\n          cy="').concat(t, '"\n          fill="none"\n          stroke-width="2"\n          stroke="black"\n       />\n      </svg>\n    ')
                }(t), '\n                </div>\n                <p id="ap-payment-amount-').concat(t, '" class="sq-ap__amount">').concat(e, '</p>\n                <p class="sq-ap__period">').concat(n.periodText[t], "</p>\n              </div>\n            "))).join(""), "\n        </div>\n      </div>\n    ");
                n.element.insertAdjacentHTML("afterbegin", a),
                n.attached = !0
            }
            ,
            function() {
                var e = this
                  , t = arguments;
                return new Promise((function(n, i) {
                    var o = r.apply(e, t);
                    function a(e) {
                        Iu(o, n, i, a, s, "next", e)
                    }
                    function s(e) {
                        Iu(o, n, i, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
            )()
        }
        update() {
            if (this.attached && this.element) {
                var e = document.getElementById("ap-wordmark-image");
                if (e) {
                    var t = bu(this.locale);
                    e.src = qn.staticAsset(t)
                }
                this.buildAmounts().map((e => fo(e, this.currencyCode, this.locale))).forEach(( (e, t) => {
                    var r, n = null === (r = this.element) || void 0 === r ? void 0 : r.querySelector("#ap-payment-amount-".concat(t));
                    n && (n.innerHTML = e)
                }
                ))
            }
        }
        buildAmounts() {
            var e = vo(this.req.total.amount, this.req.currencyCode)
              , t = e / 4;
            switch (e % 4) {
            case 0:
                return Ou(t, 0);
            case 1:
                return Ou(t, 1);
            case 2:
                return Ou(t, -2);
            case 3:
                return Ou(t, -1);
            default:
                return []
            }
        }
    }
    function Ou(e, t) {
        var r = Array.from({
            length: 3
        }).fill(Math.round(e));
        return r.push(e + t),
        r
    }
    function Cu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Tu(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Cu(Object(r), !0).forEach((function(t) {
                Au(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cu(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Au(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function Pu(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function Ru(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    Pu(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    Pu(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var Nu = new Set(["en_US", "en_CA", "fr_CA", "en_AU", "en_NZ", "en_GB", "fr_FR", "es_ES", "it_IT"])
      , Du = new Set(["AUD", "GBP", "USD", "CAD", "EUR"]);
    class Lu extends Cs {
        constructor(e, t, r, n, i) {
            if (super(n),
            this.methodType = Fi.AFTERPAY_CLEARPAY,
            this.onTokenizeCallbacks = [],
            this.tokenizationBuffer = [],
            this.wasFirstInteractionCalled = !1,
            this.onTokenizeHandlerAdded = !1,
            this.transferOptions = {},
            this.buyNowOption = !1,
            this.afterpayLibrary = e,
            this.afterpayMessagingLibrary = t,
            this.req = r,
            this.paymentRequestLockController = i,
            this.paymentMessenger = new oc(this.context),
            this.total = this.totalMoney(),
            void 0 === this.session.locationId || "" === this.session.locationId)
                throw new mi(us,"locationId");
            this.locationID = this.session.locationId,
            this.req.addEventListener("update", ( () => {
                delete this.checkoutTokenResponse,
                this.element && this.initializeAfterpayPopup(this.element),
                this.total = this.totalMoney()
            }
            ))
        }
        attach(e, t) {
            var r = this;
            return Ru((function*() {
                var n, i;
                r.throwIfDestroyedOrAlreadyAttached(),
                r.status = bs.ATTACHED,
                r.metricsHandler.logEvent("ATTACH:START"),
                r.metricsHandler.logEvent("CONFIGURED", t);
                try {
                    n = kc(e)
                } catch (e) {
                    throw r.metricsHandler.logEvent("ATTACH:ERROR", "good"),
                    r.status = bs.DETACHED,
                    e
                }
                if (!0 !== (null == t ? void 0 : t.useCustomButton)) {
                    var o, a, s = document.createElement("div");
                    n.appendChild(s);
                    var c = s.attachShadow({
                        mode: "open"
                    });
                    try {
                        yield Fc(Yc, Kc, c)
                    } catch (e) {
                        throw r.status = bs.DETACHED,
                        r.metricsHandler.logEvent("ATTACH:ERROR", "bad"),
                        new Ai("attaching Afterpay")
                    }
                    var u = null !== (o = null == t ? void 0 : t.buttonColor) && void 0 !== o ? o : Dn.BLACK
                      , l = null !== (a = null == t ? void 0 : t.buttonType) && void 0 !== a ? a : Ln.BuyNowWithAfterpay;
                    if (i = u,
                    !qc.includes(i))
                        throw r.status = bs.DETACHED,
                        r.metricsHandler.logEvent("ATTACH:ERROR", "good"),
                        new si("buttonColor",u);
                    var d = r.context.getFeatureFlagValues().use_new_afterpay_buttons
                      , h = _u(u, r.session.locale, d);
                    if (!(l in h))
                        throw r.status = bs.DETACHED,
                        r.metricsHandler.logEvent("ATTACH:ERROR", "good"),
                        new si("buttonType",l);
                    var p = h[l]
                      , f = document.createElement("button");
                    f.setAttribute("type", "button"),
                    f.setAttribute("class", "sq-ap__button"),
                    f.style.backgroundColor = p.backgroundColor,
                    f.style.backgroundImage = "AFTERPAY_CDN" === p.cdn ? "url(".concat(p.url, ")") : "url(".concat(qn.staticAsset(p.url), ")"),
                    c.append(f)
                }
                r.buyNowOption = (null == t ? void 0 : t.finalCtaButtonType) === xn.BUY_NOW,
                r.initializeAfterpayPopup(n),
                r.metricsHandler.logEvent("ATTACH:OK", "good"),
                r.element = n,
                r.onTokenizeHandlerAdded && r.element.addEventListener("click", Ru((function*() {
                    yield r.openPaymentModal()
                }
                )))
            }
            ))()
        }
        attachMessaging(e, t) {
            return this.throwIfDestroyed(),
            Mc(e),
            this.afterpayMessagingLibrary.createPlacements({
                attributes: {
                    amount: Number(this.req.total.amount),
                    badgeTheme: null == t ? void 0 : t.badgeTheme,
                    currency: this.req.currencyCode,
                    locale: this.session.locale,
                    modalLinkStyle: null == t ? void 0 : t.modalLinkStyle,
                    modalTheme: null == t ? void 0 : t.modalTheme,
                    size: null == t ? void 0 : t.size
                },
                targetSelector: e
            }),
            Promise.resolve()
        }
        attachCheckoutWidget(e, t) {
            var r = this;
            return Ru((function*() {
                if (!Du.has(r.req.currencyCode))
                    throw new Jn("Currency is not supported by Afterpay. Valid currencies are: ".concat([...Du].join(", ")));
                var n = Mc(e);
                if (e instanceof HTMLElement && r.metricsHandler.logEvent("CHECKOUT_WIDGET_RECEIVES_HTML_ELEMENT", xu(r.context)),
                r.context.getFeatureFlagValues().use_new_afterpay_checkout_widget) {
                    var i = document.createElement("div");
                    i.id = "sq-ap__payment-schedule-container-".concat(Is()),
                    i.classList.add("sq-ap__payment-schedule-container");
                    try {
                        yield Fc(Yc, Kc, document.head)
                    } catch (e) {
                        throw new Ai("attaching the Afterpay Checkout Widget")
                    }
                    return n.appendChild(i),
                    new Promise(( (e, n) => {
                        var o, a = new r.afterpayLibrary.Widgets.PaymentSchedule({
                            amount: fu(r.req),
                            locale: r.session.locale,
                            onError: e => {
                                r.errorLogger.captureException(e),
                                n(e)
                            }
                            ,
                            onReady: function() {
                                e()
                            },
                            style: {
                                logo: null === (o = null == t ? void 0 : t.includeBranding) || void 0 === o || o
                            },
                            target: "#".concat(i.id)
                        });
                        r.req.addEventListener(Bc.UPDATE, ( () => {
                            a.update({
                                amount: fu(r.req)
                            })
                        }
                        ))
                    }
                    ))
                }
                return new wu(r.req,r.context).attach(n, t)
            }
            ))()
        }
        displayInformationModal() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = so(this.session.locale);
            Nu.has(t) || (t = "en_US"),
            this.afterpayMessagingLibrary.launchModal(Tu(Tu({}, e), {}, {
                locale: t
            }))
        }
        onTokenize(e) {
            var t, r = this;
            this.throwIfDestroyed(),
            this.onTokenizeCallbacks.push(e),
            1 === this.onTokenizeCallbacks.length && (this.tokenizationBuffer.forEach((e => {
                var {result: t, error: r} = e;
                this.emitTokenizationResult(t, r)
            }
            )),
            this.tokenizationBuffer = []),
            this.onTokenizeHandlerAdded || void 0 === this.element || null === (t = this.element) || void 0 === t || t.addEventListener("click", Ru((function*() {
                yield r.openPaymentModal()
            }
            ))),
            this.onTokenizeHandlerAdded = !0
        }
        tokenize() {
            var e = this;
            return Ru((function*() {
                if (e.throwIfDestroyedOrNotAttached(),
                e.onTokenizeHandlerAdded)
                    throw new zn;
                var t, r, n = new Promise(( (e, n) => {
                    t = e,
                    r = n
                }
                ));
                return e.onTokenizeCallbacks = [function(e, n) {
                    void 0 === n ? void 0 !== e ? t(e) : r(new Ti([Ro.UNKNOWN])) : r(n)
                }
                ],
                yield e.openPaymentModal(),
                n
            }
            ))()
        }
        destroy() {
            return this.status === bs.DESTROYED ? Promise.resolve(!1) : (this.detachElement(bs.DESTROYED, "DESTROYED"),
            Promise.resolve(!0))
        }
        detach() {
            return this.throwIfDestroyedOrNotAttached(),
            this.detachElement(bs.DETACHED, "DETACHED"),
            Promise.resolve(!0)
        }
        internalSetCheckoutToken() {
            var e = this;
            return Ru((function*() {
                try {
                    var t = yield e.paymentMessenger.request("REQUEST_AFTERPAY_CHECKOUT_HANDLER", e.buildCheckoutPayload());
                    return e.checkoutTokenResponse = t,
                    e.checkoutTokenResponse.token
                } catch (t) {
                    var r = t;
                    throw ho(t, [...Pc, pi, ti, Jn]) || (e.errorLogger.captureException(t),
                    r = new Ai("tokenizing with Afterpay")),
                    r
                }
            }
            ))()
        }
        commenceCheckout(e) {
            var t = this;
            return Ru((function*() {
                if (t.wasFirstInteractionCalled || (t.wasFirstInteractionCalled = !0,
                t.metricsHandler.logEvent("FIRST_INTERACTION:OK")),
                t.metricsHandler.logEvent("EXTERNAL_SESSION:START"),
                t.paymentRequestLockController.lock(t),
                void 0 !== t.checkoutTokenResponse && new Date(t.checkoutTokenResponse.expires) > new Date)
                    e.resolve(t.checkoutTokenResponse.token);
                else
                    try {
                        var r = yield t.internalSetCheckoutToken();
                        e.resolve(r)
                    } catch (r) {
                        t.paymentRequestLockController.unlock(t),
                        t.metricsHandler.logEvent("EXTERNAL_SESSION:ERROR");
                        var n = vs(r);
                        t.emitTokenizationResult(void 0, n),
                        e.reject(n.message)
                    }
            }
            ))()
        }
        completeCheckout(e) {
            var t = this;
            return Ru((function*() {
                try {
                    if (function(e) {
                        return "SUCCESS" === e.status && void 0 !== e.orderToken
                    }(e)) {
                        yield t.context.waitForProofOfWorkCompletion();
                        var r = yield t.paymentMessenger.request("REQUEST_AFTERPAY_INSTANT_WALLET_TOKEN", t.buildInstantWalletTokenPayload(e.orderToken, t.total));
                        t.metricsHandler.logEvent("EXTERNAL_SESSION:OK");
                        var n = {
                            details: {
                                method: Fi.AFTERPAY_CLEARPAY,
                                shipping: {
                                    contact: {
                                        email: r.afterpayData.email
                                    }
                                }
                            },
                            status: Vi.OK,
                            token: r.token
                        };
                        r.billingContact && (n.details.billing = r.billingContact),
                        r.shippingContact && (n.details.shipping = {
                            contact: r.shippingContact
                        }),
                        delete t.checkoutTokenResponse,
                        t.emitTokenizationResult(n)
                    } else
                        t.metricsHandler.logEvent("EXTERNAL_SESSION:CANCEL"),
                        t.emitTokenizationResult({
                            status: Vi.CANCEL
                        })
                } catch (e) {
                    var i;
                    t.metricsHandler.logEvent("EXTERNAL_SESSION:ERROR"),
                    e instanceof Ti ? i = e : (t.errorLogger.captureException(e),
                    i = new Ai("tokenizing Afterpay")),
                    t.emitTokenizationResult(void 0, i)
                }
                t.paymentRequestLockController.unlock(t)
            }
            ))()
        }
        onShippingOptionChange(e) {
            this.metricsHandler.logEvent("SHIPPING_OPTION_CHANGE:OK"),
            this.total.amount = vo(e.orderAmount.amount, this.req.currencyCode),
            this.req.dispatchEvent(Hn.AFTERPAY_SHIPPING_OPTION_CHANGED, {
                contactOrOption: gu(e)
            }, (e => {}
            ))
        }
        onShippingAddressChange(e, t) {
            if (!this.req.hasEventListener(Hn.AFTERPAY_SHIPPING_ADDRESS_CHANGED))
                return this.emitTokenizationResult(void 0, new $n("PaymentRequest",Hn.AFTERPAY_SHIPPING_ADDRESS_CHANGED)),
                t.reject(jc.SERVICE_UNAVAILABLE),
                void this.afterpayLibrary.close();
            var r = this.req;
            this.metricsHandler.logEvent("SHIPPING_ADDRESS_CHANGE:OK"),
            this.req.dispatchEvent(Hn.AFTERPAY_SHIPPING_ADDRESS_CHANGED, {
                contactOrOption: vu(e)
            }, (e => {
                if (void 0 === e.error)
                    if (e.shippingErrors)
                        t.reject(jc.SHIPPING_ADDRESS_UNRECOGNIZED);
                    else {
                        var n = pu(e, r);
                        t.resolve(n)
                    }
                else
                    t.reject(jc.SHIPPING_ADDRESS_UNSUPPORTED)
            }
            ))
        }
        emitTokenizationResult(e, t) {
            0 === this.onTokenizeCallbacks.length ? this.tokenizationBuffer.push({
                error: t,
                result: e
            }) : this.onTokenizeCallbacks.forEach((r => {
                r(e, t)
            }
            ))
        }
        buildInstantWalletTokenPayload(e, t) {
            return {
                afterpayData: {
                    afterpayToken: e,
                    buyerAmount: t
                },
                clientID: this.session.applicationId,
                instanceID: this.session.instanceId,
                locationID: this.locationID,
                paymentMethodTrackingID: this.context.getPaymentMethodTrackingId(),
                requestBillingContact: this.req.requestBillingContact,
                requestShippingContact: this.req.requestShippingContact,
                sessionID: this.session.sessionId,
                websdkVersion: qn.VERSION
            }
        }
        buildCheckoutPayload() {
            var e, t = {
                amount: fu(this.req),
                applicationID: this.session.applicationId,
                discounts: [],
                locationID: this.locationID,
                popupOriginUrl: this.session.sourceUrl
            };
            if (this.req.lineItems && (t.items = hu(this.req.lineItems, this.req.currencyCode)),
            this.req.discounts && (t.discounts = du(this.req.discounts, this.req.currencyCode)),
            this.req.requestShippingContact ? e = this.req.shippingContact : this.req.pickupContact && (e = this.req.pickupContact),
            void 0 !== e) {
                var r = yu(e);
                if (!r.isValid)
                    throw new ti(r.missingFields);
                t.shipping = lu(e)
            }
            return t
        }
        totalMoney() {
            return {
                amount: vo(this.req.total.amount, this.req.currencyCode),
                currency: this.req.currencyCode
            }
        }
        openPaymentModal() {
            var e = this;
            return Ru((function*() {
                e.afterpayLibrary.open();
                var t = yield new Promise(( (t, r) => {
                    e.commenceCheckout({
                        reject: r,
                        resolve: t
                    })
                }
                ));
                e.afterpayLibrary.transfer(Tu({
                    token: t
                }, e.transferOptions))
            }
            ))()
        }
        initializeAfterpayPopup(e) {
            var t = this.commenceCheckout.bind(this)
              , r = this.completeCheckout.bind(this)
              , n = document.createElement("div");
            n.id = "sq-afterpay-dummy-element-".concat(Is()),
            n.style.visibility = "hidden",
            e.appendChild(n),
            this.transferOptions = {
                buyNow: this.buyNowOption,
                shippingOptionRequired: this.req.requestShippingContact
            },
            this.req.requestShippingContact || this.req.pickupContact || (this.transferOptions.addressMode = "NO_ADDRESS");
            var i, o, a = {
                addressMode: this.transferOptions.addressMode,
                countryCode: this.req.countryCode,
                onCommenceCheckout: (o = Ru((function*(e) {
                    yield t(e)
                }
                )),
                function(e) {
                    return o.apply(this, arguments)
                }
                ),
                onComplete: (i = Ru((function*(e) {
                    var {data: t} = e;
                    yield r(t)
                }
                )),
                function(e) {
                    return i.apply(this, arguments)
                }
                ),
                shippingOptionRequired: this.req.requestShippingContact,
                target: "#".concat(n.id)
            };
            this.req.requestShippingContact ? (a.onShippingAddressChange = this.onShippingAddressChange.bind(this),
            a.onShippingOptionChange = this.onShippingOptionChange.bind(this)) : this.req.pickupContact && (this.transferOptions.pickup = !0),
            this.afterpayLibrary.initializeForPopup(a),
            e.removeChild(n)
        }
        detachElement(e, t) {
            this.afterpayLibrary.close(),
            this.element && (this.element.innerHTML = ""),
            this.element = null,
            this.tokenizationBuffer = [],
            this.onTokenizeCallbacks = [],
            this.status = e,
            this.metricsHandler.logEvent(t)
        }
    }
    function xu(e, t) {
        return JSON.stringify(Tu({
            applicationId: e.getSession().applicationId,
            checkoutWidgetLaunch: e.getFeatureFlagValues().use_new_afterpay_checkout_widget,
            locationId: e.getSession().locationId
        }, t))
    }
    var ku = function(e) {
        var t = e.getFeatureFlagValues().use_new_afterpay_script
          , r = function(e, t) {
            var r = t ? Zc : Jc
              , n = r.staging;
            return "sandbox" === e && (n = r.sandbox),
            "production" === e && (n = r.production),
            n
        }(qn.env, t)
          , n = Qc[qn.env];
        return Promise.all([fc.load("afterpay", {
            src: r
        }, "AfterPay", e.errorLogger), fc.load("afterpay-messaging", {
            src: n
        }, "Afterpay", e.errorLogger)])
    }
      , Mu = function(e, t) {
        var r = document.createElement("iframe");
        return new Promise(( (n, i) => {
            r.onerror = e => {
                i(e)
            }
            ,
            r.onload = () => {
                n(r)
            }
            ,
            Object.entries(e).forEach((e => {
                var [t,n] = e;
                "style" === t ? Object.entries(n).forEach((e => {
                    var [t,n] = e;
                    r.style.setProperty(t, n, "important")
                }
                )) : r.setAttribute(t, n)
            }
            )),
            t ? t.appendChild(r) : document.body.appendChild(r)
        }
        ))
    }
      , ju = function(e) {
        for (; e.firstChild; )
            e.removeChild(e.firstChild)
    }
      , Uu = [Ei, Oi, Si, wi, Ci]
      , Hu = [Si, wi, Oi, Ci, yi, _i]
      , Bu = [Ti, Ei, _i]
      , Fu = ["top", "right", "bottom", "left"]
      , qu = "sq-focus"
      , Vu = "sq-error"
      , Gu = ".".concat(qu)
      , zu = ".".concat(Vu)
      , $u = {
        ASPECT_RATIO: /^\d+\/\d+$/,
        HEX: /^#([\dA-Fa-f]{3}|[\dA-Fa-f]{6})$/,
        NEGATIVE_EM: /^-\d*\.?\d+em$/,
        NEGATIVE_PERCENT: /^\d*\.?\d+%$/,
        NEGATIVE_PT: /^-\d*\.?\d+pt$/,
        NEGATIVE_PX: /^-\d*\.?\d+px$/,
        POSITIVE_EM: /^\d*\.?\d+em$/,
        POSITIVE_PERCENT: /^\d*\.?\d+%$/,
        POSITIVE_PT: /^\d*\.?\d+pt$/,
        POSITIVE_PX: /^\d*\.?\d+px$/,
        POSITIVE_RESOLUTION: /^\d*\.?\d+(?:dpi|dpcm|dppx|x)$/,
        RGB: /^rgb\((\s*\d{1,3},){2}\s*\d{1,3}\)$/,
        RGBA: /^rgba\((\s*\d{1,3},){3}\s*(1|0*.\d*)\)$/
    }
      , Wu = /\s(?![^(]*\))/
      , Yu = new Set(["screen", "all", "print", "speech"])
      , Ku = new Set(["and"])
      , Xu = new Set(["not", "only"])
      , Ju = new Set(["portrait", "landscape"])
      , Zu = new Set(["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"])
      , Qu = new Set(["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"])
      , el = new Set([100, 200, 300, 400, 500, 600, 700, 800, 900])
      , tl = new Set(["100", "200", "300", "400", "500", "600", "700", "800", "900", "normal", "bold", "bolder", "lighter"])
      , rl = new Set(["normal"])
      , nl = new Set(["smaller", "larger"])
      , il = new Set(["andale mono", "arial", "arial black", "arial narrow", "arial rounded mt bold", "avant garde", "baskerville", "big caslon", "bodoni mt", "book antiqua", "brush script mt", "calibri", "calisto mt", "cambria", "candara", "century gothic", "charcoal", "comic sans ms", "consolas", "copperplate", "copperplate gothic light", "courier", "courier new", "cursive", "didot", "fantasy", "franklin gothic medium", "futura", "garamond", "geneva", "georgia", "gill sans", "goudy old style", "helvetica", "helvetica neue", "hoefler text", "impact", "lucida bright", "lucida console", "lucida grande", "lucida sans unicode", "lucida sans typewriter", "monaco", "monospace", "optima", "palatino", "palatino linotype", "papyrus", "perpetua", "rockwell", "rockwell extra bold", "sans-serif", "segoe ui", "serif", "square market", "square sans text", "tahoma", "times", "times new roman", "trebuchet ms", "verdana"])
      , ol = new Set(["none", "antialiased", "subpixel-antialiased"])
      , al = new Set(["grayscale", "auto"])
      , sl = new Set(["none"]);
    function cl(e) {
        return e.split(/, ?(?![^(]*\))/).every((e => function(e) {
            if ("none" === e)
                return !0;
            var t = e.split(/ (?![^(]*\))/)
              , r = 0;
            if ("inset" === t[0] && (t.shift(),
            r += 1),
            "inset" === t[t.length - 1]) {
                if (r > 0)
                    return !1;
                t.pop()
            }
            for (var n = 0; n < 2; n += 1) {
                var i = t.shift();
                if (void 0 === i || !fl(i))
                    return !1
            }
            switch (t.length) {
            case 0:
                return !0;
            case 1:
                return ml(t[0]) || vl(t[0]);
            case 2:
                return vl(t[0]) && (ml(t[1]) || gl(t[1]));
            case 3:
                return vl(t[0]) && gl(t[1]) && ml(t[2]);
            default:
                return !1
            }
        }(e)))
    }
    function ul(e) {
        return ["border-box", "content-box"].includes(e)
    }
    function ll(e) {
        return e.split(" ").every((e => function(e) {
            return 0 === Number(e) || Pl(e) || Dl(e)
        }(e)))
    }
    function dl(e) {
        var t = e.split(" ");
        return !(0 === t.length || t.length > 4) && t.every(hl)
    }
    function hl(e) {
        return 0 === Number(e) || Pl(e) || Dl(e)
    }
    function pl(e) {
        return 0 === Number(e) || Pl(e) || Dl(e) || Rl(e) || Ll(e)
    }
    function fl(e) {
        return 0 === Number(e) || Al(e) || Nl(e)
    }
    function gl(e) {
        return 0 === Number(e) || Al(e) || Nl(e)
    }
    function vl(e) {
        return 0 === Number(e) || Pl(e) || Dl(e)
    }
    function ml(e) {
        return function(e) {
            return Qu.has(e.toLowerCase())
        }(e) || function(e) {
            return $u.HEX.test(e)
        }(e) || function(e) {
            return $u.RGB.test(e)
        }(e) || function(e) {
            return $u.RGBA.test(e)
        }(e)
    }
    function yl(e) {
        return function(e) {
            return Zu.has(e.toLowerCase())
        }(e) || function(e) {
            return nl.has(e.toLowerCase())
        }(e) || Pl(e) || xl(e) || Dl(e) || kl(e)
    }
    function El(e) {
        return null !== e && e.split(", ").every((e => {
            return t = e.toLowerCase().trim().replace(/["']+/g, ""),
            il.has(t);
            var t
        }
        ))
    }
    function _l(e) {
        var t = Number(e);
        return Number.isNaN(t) ? tl.has(e.toLowerCase()) : el.has(t)
    }
    function bl(e) {
        return "normal" === e || Nl(e) || function(e) {
            return xl(e) || function(e) {
                return $u.NEGATIVE_PT.test(e)
            }(e)
        }(e) || Al(e)
    }
    function Il(e) {
        var t = Number(e);
        return !Number.isNaN(t) && t >= 0 || rl.has(e) || Dl(e) || Pl(e) || xl(e) || kl(e)
    }
    function Sl(e) {
        return ol.has(e)
    }
    function wl(e) {
        return al.has(e)
    }
    function Ol(e) {
        return sl.has(e)
    }
    function Cl(e) {
        if (null === e)
            return !1;
        var t = e.toString().split(" ");
        return !(t.length > 4) && t.every((e => function(e) {
            return Pl(e) || Dl(e) || kl(e) || 0 === Number(e)
        }(e)))
    }
    function Tl(e) {
        if (!e.startsWith("(") || !e.endsWith(")"))
            return !1;
        var t = e.slice(1, -1)
          , [r,n] = t.split(/: */);
        switch (r) {
        case "width":
        case "min-width":
        case "max-width":
        case "height":
        case "min-height":
        case "max-height":
        case "device-width":
        case "min-device-width":
        case "max-device-width":
        case "device-height":
        case "min-device-height":
        case "max-device-height":
            return Pl(n) || Dl(n) || kl(n);
        case "resolution":
        case "min-resolution":
        case "max-resolution":
            return function(e) {
                return $u.POSITIVE_RESOLUTION.test(e)
            }(n);
        case "aspect-ratio":
        case "min-aspect-ratio":
        case "max-aspect-ratio":
        case "device-aspect-ratio":
        case "min-device-aspect-ratio":
        case "max-device-aspect-ratio":
            return function(e) {
                return $u.ASPECT_RATIO.test(e)
            }(n);
        case "color":
        case "color-index":
        case "monochrome":
            return void 0 === n;
        case "min-color":
        case "max-color":
        case "min-color-index":
        case "max-color-index":
        case "min-monochrome":
        case "max-monochrome":
            return function(e) {
                return Number(e) >= 0
            }(n);
        case "orientation":
            return function(e) {
                return Ju.has(e)
            }(n);
        default:
            return !1
        }
    }
    function Al(e) {
        return Pl(e) || Rl(e)
    }
    function Pl(e) {
        return $u.POSITIVE_PX.test(e)
    }
    function Rl(e) {
        return $u.NEGATIVE_PX.test(e)
    }
    function Nl(e) {
        return Dl(e) || Ll(e)
    }
    function Dl(e) {
        return $u.POSITIVE_EM.test(e)
    }
    function Ll(e) {
        return $u.NEGATIVE_EM.test(e)
    }
    function xl(e) {
        return $u.POSITIVE_PT.test(e)
    }
    function kl(e) {
        return $u.POSITIVE_PERCENT.test(e)
    }
    var Ml = function(e, t) {
        var r = (e => {
            switch (e) {
            case "border-color":
            case "background-color":
            case "color":
            case "-webkit-text-fill-color":
                return ml;
            case "-webkit-box-shadow":
            case "box-shadow":
                return cl;
            case "box-sizing":
                return ul;
            case "font-family":
                return El;
            case "font-size":
                return yl;
            case "font-weight":
                return _l;
            case "letter-spacing":
                return bl;
            case "line-height":
                return Il;
            case "padding":
                return Cl;
            case "-webkit-font-smoothing":
                return Sl;
            case "-moz-osx-font-smoothing":
                return wl;
            case "display":
                return Ol;
            case "border-radius":
                return ll;
            case "border-width":
                return dl;
            case "top":
            case "bottom":
            case "left":
            case "right":
                return pl;
            case "width":
                return function(e) {
                    return "" !== e
                }
                ;
            default:
                return
            }
        }
        )(e);
        return !0 === (null == r ? void 0 : r(t)) || function(e) {
            return ["unset", "inherit", "revert", "initial"].includes(e)
        }(t) ? t : ""
    }
      , jl = function(e) {
        return !!(t = e).startsWith("@media") && t.slice(7, t.length).split(/, */).every((e => {
            var t = e.split(Wu);
            if (0 === t.length)
                return !1;
            var r = 0;
            if (!t[0].startsWith("(")) {
                var n = 0;
                if (Xu.has(t[0]) && (n = 1),
                t.length === n + 1)
                    return Yu.has(t[n]);
                if (!Yu.has(t[n]) || !Ku.has(t[n + 1]))
                    return !1;
                r = 2 + n
            }
            if ((t.length - r) % 2 == 0)
                return !1;
            for (var [i,o] of Object.entries(t.slice(r)))
                if (!(Number(i) % 2 == 0 ? Tl(o) : Ku.has(o)))
                    return !1;
            return !0
        }
        ));
        var t
    };
    function Ul(e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (r.length > 0 && !r.includes(e))
            throw new Si(e);
        var i = co(e)
          , o = Ml(i, t);
        if (0 === o.length)
            throw new wi(e,t);
        return n && (o += " !important"),
        lo(i, o)
    }
    function Hl(e, t, r) {
        var n, i = [], o = [], a = new Set(null !== (n = e.excludeProperties) && void 0 !== n ? n : []);
        for (var [s,c] of Object.entries(t))
            if (!a.has(s))
                try {
                    i.push(Ul(s, null != c ? c : "", r))
                } catch (e) {
                    (e instanceof Si || e instanceof wi) && o.push(e)
                }
        if (o.length > 0)
            throw new Ci(o);
        return Object.fromEntries(e.toSelectors.map((function(e) {
            return [e, i]
        }
        )))
    }
    function Bl(e, t, r) {
        var n = {}
          , i = [];
        if (e.forEach((function(e) {
            var {property: o, setAsImportant: a, toProperty: s, toSelectors: c, transformPropertyValue: u} = e
              , l = t[o];
            if (po(l)) {
                var d = u ? u(l) : l;
                try {
                    var h = Ul(null != s ? s : o, d, void 0 !== s ? [...r, s] : r, a);
                    c.forEach((e => {
                        e in n || (n[e] = []),
                        n[e].push(h)
                    }
                    ))
                } catch (e) {
                    (e instanceof Si || e instanceof wi) && i.push(e)
                }
            }
        }
        )),
        i.length > 0)
            throw new Ci(i);
        return n
    }
    var Fl = function(e, t) {
        var r = t.split(" ");
        switch (r.length) {
        case 1:
            return r[0];
        case 2:
            switch (e) {
            case "top":
            case "bottom":
                return r[0];
            default:
                return r[1]
            }
        case 3:
            switch (e) {
            case "top":
                return r[0];
            case "bottom":
                return r[2];
            default:
                return r[1]
            }
        case 4:
            switch (e) {
            case "top":
                return r[0];
            case "right":
                return r[1];
            case "bottom":
                return r[2];
            case "left":
                return r[3];
            default:
                return ""
            }
        default:
            return ""
        }
    }
      , ql = function e(t, r, n) {
        var i, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = [], s = [...Object.keys(r.selectorMappings), ...Object.keys(null !== (i = r.selectorPropertyMappings) && void 0 !== i ? i : {})], c = new Set(s), u = new Set(Object.values(n));
        Object.keys(t).forEach((e => {
            u.has(e) || function(e, t) {
                return !t && jl(e)
            }(e, o) || a.push(new Oi(e))
        }
        ));
        var l = {};
        function d(e) {
            for (var [t,r] of Object.entries(e))
                t in l || (l[t] = []),
                l[t].push(...r)
        }
        for (var h of c) {
            var p, f, g, v, m = t[h], y = null !== (p = r.allowedAttributes[h]) && void 0 !== p ? p : [], E = null !== (f = r.selectorMappings[h]) && void 0 !== f ? f : [], _ = null !== (g = null === (v = r.selectorPropertyMappings) || void 0 === v ? void 0 : v[h]) && void 0 !== g ? g : [];
            if (m) {
                try {
                    d(Hl(E, m, y))
                } catch (e) {
                    e instanceof Ci && a.push(...e.errors)
                }
                try {
                    d(Bl(_, m, y))
                } catch (e) {
                    e instanceof Ci && a.push(...e.errors)
                }
            }
        }
        if (Object.keys(t).filter((e => !c.has(e) && jl(e))).forEach((i => {
            try {
                var o = e(t[i], r, n, !0);
                l[i] = [o]
            } catch (e) {
                e instanceof Ci && a.push(...e.errors)
            }
        }
        )),
        a.length > 0)
            throw new Ci(a);
        return function(e) {
            var t = [];
            for (var [r,n] of Object.entries(e))
                n && n.length > 0 && t.push("\n      ".concat(r, " { ").concat(n.join(" "), " }\n      "));
            return t.join("")
        }(l)
    }
      , Vl = "sq-card-iframe-container"
      , Gl = "sq-card-wrapper"
      , zl = "sq-card-component"
      , $l = "sq-card-message"
      , Wl = "sq-card-message-error"
      , Yl = "sq-card-message-no-error"
      , Kl = "sq-visible"
      , Xl = ".".concat(Gl)
      , Jl = ".".concat(zl)
      , Zl = ".".concat(Vl)
      , Ql = "".concat(Xl).concat(Gu)
      , ed = "".concat(Xl).concat(zu)
      , td = "".concat(Xl, " ").concat(Jl)
      , rd = "".concat(Xl, " ").concat(Zl)
      , nd = "".concat(Ql, " ").concat(Zl)
      , id = "".concat(ed, " ").concat(Zl)
      , od = ".sq-card-message-error::before"
      , ad = ".sq-card-message-no-error::before"
      , sd = "".concat(Zl).concat("::before")
      , cd = ["borderWidth"];
    function ud(e) {
        var t = ["".concat(e).concat(zu, " ").concat(sd), "".concat(e).concat(Gu, " ").concat(sd)];
        return Fu.map((e => {
            return {
                property: "borderWidth",
                toProperty: e,
                toSelectors: t,
                transformPropertyValue: (r = e,
                function(e) {
                    var t = Fl(r, e);
                    return t.startsWith("0") ? t : "-".concat(t)
                }
                )
            };
            var r
        }
        ))
    }
    function ld(e, t) {
        return ql(e, function(e) {
            var t = "#".concat(e);
            return {
                allowedAttributes: {
                    [Cn.CARD_COMPONENT]: Gi,
                    [Cn.CARD_COMPONENT_FOCUS]: zi,
                    [Cn.CARD_COMPONENT_ERROR]: zi,
                    [Cn.CARD_INPUT_HELPER_TEXT]: $i,
                    [Cn.CARD_INPUT_HELPER_ICON]: Wi,
                    [Cn.CARD_INPUT_ERROR_TEXT]: $i,
                    [Cn.CARD_INPUT_ERROR_ICON]: Wi
                },
                selectorMappings: {
                    [Cn.CARD_COMPONENT]: {
                        toSelectors: ["".concat(t).concat(rd)]
                    },
                    [Cn.CARD_COMPONENT_FOCUS]: {
                        excludeProperties: cd,
                        toSelectors: ["".concat(t).concat(nd)]
                    },
                    [Cn.CARD_COMPONENT_ERROR]: {
                        excludeProperties: cd,
                        toSelectors: ["".concat(t).concat(id)]
                    },
                    [Cn.CARD_INPUT_HELPER_TEXT]: {
                        toSelectors: ["".concat(t, " ").concat(".sq-card-message-no-error")]
                    },
                    [Cn.CARD_INPUT_HELPER_ICON]: {
                        toSelectors: ["".concat(t, " ").concat(ad)]
                    },
                    [Cn.CARD_INPUT_ERROR_TEXT]: {
                        toSelectors: ["".concat(t, " ").concat(".sq-card-message-error")]
                    },
                    [Cn.CARD_INPUT_ERROR_ICON]: {
                        toSelectors: ["".concat(t, " ").concat(od)]
                    }
                },
                selectorPropertyMappings: {
                    [Cn.CARD_INPUT]: [{
                        property: "backgroundColor",
                        toSelectors: ["".concat(t).concat(rd)]
                    }],
                    [Cn.CARD_COMPONENT]: [{
                        property: "borderRadius",
                        toSelectors: ["".concat(t, " ").concat(sd), "".concat(t).concat(td)]
                    }, {
                        property: "borderWidth",
                        toProperty: "width",
                        toSelectors: ["".concat(t).concat(rd)],
                        transformPropertyValue: e => function(e) {
                            var t = ["left", "right"].map((t => {
                                var r = Fl(t, e);
                                return "0" === r && (r = "0px"),
                                r
                            }
                            )).join(" + ");
                            return "calc(100% - (".concat(t, "))")
                        }(e)
                    }, ...ud(t)],
                    [Cn.CARD_COMPONENT_ERROR]: [{
                        property: "borderColor",
                        toSelectors: ["".concat(t).concat(zu, " ").concat(sd)]
                    }, {
                        property: "borderWidth",
                        toSelectors: ["".concat(t).concat(zu, " ").concat(sd)]
                    }],
                    [Cn.CARD_COMPONENT_FOCUS]: [{
                        property: "borderColor",
                        toSelectors: ["".concat(t).concat(Gu, " ").concat(sd)]
                    }, {
                        property: "borderWidth",
                        toSelectors: ["".concat(t).concat(Gu, " ").concat(sd)]
                    }],
                    [Cn.CARD_INPUT_ERROR_ICON]: [{
                        property: "color",
                        toProperty: "backgroundColor",
                        toSelectors: ["".concat(t, " ").concat(od)]
                    }],
                    [Cn.CARD_INPUT_HELPER_ICON]: [{
                        property: "color",
                        toProperty: "backgroundColor",
                        toSelectors: ["".concat(t, " ").concat(ad)]
                    }]
                }
            }
        }(t), Cn)
    }
    var dd = /^-?[0-9]+(\.[0-9]+)?$/;
    function hd(e) {
        return "amount"in e && "currencyCode"in e
    }
    function pd(e) {
        return "STORE" === e.intent
    }
    var fd = function(e) {
        return hd(e) ? e.amount : pd(e) ? "" : go(e.total.amount, e.total.currencyCode)
    }
      , gd = function(e) {
        return hd(e) ? e.currencyCode : pd(e) ? "" : e.total.currencyCode
    }
      , vd = function(e) {
        var t = function(e) {
            var t = [];
            return null === e || "object" != typeof e ? (t.push(Lo("verificationDetails", "object")),
            t) : ("billingContact"in e && "object" == typeof e.billingContact || t.push(Lo("verificationDetails.billingContact", "object")),
            "intent"in e && "string" == typeof e.intent && ["CHARGE", "CHARGE_AND_STORE", "STORE"].includes(e.intent) || t.push(Lo("verificationDetails.intent", "string")),
            "customerInitiated"in e && "boolean" == typeof e.customerInitiated || t.push(Lo("verificationDetails.customerInitiated", "boolean")),
            "sellerKeyedIn"in e && "boolean" == typeof e.sellerKeyedIn || t.push(Lo("verificationDetails.sellerKeyedIn", "boolean")),
            t)
        }(e);
        if (t.length > 0)
            return t;
        var r = [];
        return pd(e) ? function(e, t) {
            ["amount", "currencyCode", "total"].forEach((r => {
                r in e && t.push({
                    field: "verificationDetails.".concat(r),
                    message: "The STORE intent does not support the ".concat(r, " field."),
                    type: "VALIDATION_ERROR"
                })
            }
            ))
        }(e, r) : function(e) {
            return "total"in e
        }(e) ? function(e, t) {
            "object" != typeof e.total ? t.push(Lo("verificationDetails.total", "object")) : "number" != typeof e.total.amount ? t.push(Lo("verificationDetails.total.amount", "number")) : "string" != typeof e.total.currencyCode && t.push(Lo("verificationDetails.total.currencyCode", "string"))
        }(e, r) : function(e, t) {
            "string" != typeof e.amount ? t.push(Lo("verificationDetails.amount", "string")) : dd.test(e.amount) || t.push({
                field: "verificationDetails.amount",
                message: "The amount needs to be a valid decimal monetary value.",
                type: "VALIDATION_ERROR"
            }),
            "string" != typeof e.currencyCode && t.push(Lo("verificationDetails.currencyCode", "string"))
        }(e, r),
        r
    };
    function md(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function yd(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? md(Object(r), !0).forEach((function(t) {
                Ed(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : md(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Ed(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function _d(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function bd(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    _d(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    _d(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var Id = "emptyMessage"
      , Sd = [On.CARD_NUMBER, On.EXPIRATION_DATE, On.CVV, On.POSTAL_CODE];
    function wd(e, t) {
        return void 0 !== t ? {
            status: Vi.OK,
            token: "".concat(e, "#").concat(t)
        } : {
            status: Vi.OK,
            token: e
        }
    }
    function Od(e) {
        return "".concat("single-card-wrapper", "-").concat(e)
    }
    function Cd(e, t) {
        var r = function(e) {
            return "".concat("sq-single-card-custom-styles", "-").concat(e)
        }(t)
          , n = document.getElementById(r);
        null === n && ((n = document.createElement("style")).id = r,
        document.head.appendChild(n)),
        n.innerHTML = ld(e, Od(t))
    }
    function Td(e) {
        var t = {
            includeInputLabels: e => "boolean" == typeof e,
            postalCode: e => "string" == typeof e,
            style: e => "object" == typeof e
        };
        Object.entries(e).forEach((e => {
            var [r,n] = e;
            if (!(r in t))
                throw new ai(r);
            if (!t[r](n))
                throw new si(r,n)
        }
        ))
    }
    var Ad, Pd = class extends Cs {
        constructor(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            super(e),
            this.methodType = Fi.CARD,
            this.postalCountry = "US",
            this.onResize = this.onResize.bind(this),
            this.id = Is(),
            this.iframeName = "".concat("single-card", "-").concat(this.id),
            this.paymentMessenger = new oc(this.context),
            this.tokenizeInProcess = !1,
            this.inputLabelsIncluded = Boolean(t.includeInputLabels),
            this.initializeMessageBus(),
            this.errorList = new Set,
            this.updateCardDetailText = this.updateCardDetailText.bind(this),
            this.context.addLocaleChangedListener(this.updateCardDetailText),
            Td(t),
            this.initialOptions = t
        }
        configure() {
            var e = arguments
              , t = this;
            return bd((function*() {
                var r = e.length > 0 && void 0 !== e[0] ? e[0] : {};
                t.throwIfDestroyedOrNotAttached(),
                Td(r),
                t.metricsHandler.logEvent("CONFIG_UPDATED", r),
                void 0 !== r.includeInputLabels && (t.inputLabelsIncluded = Boolean(r.includeInputLabels),
                t.onResize()),
                void 0 !== r.style && Cd(r.style, t.id);
                try {
                    yield t.paymentMessenger.request("configure", {
                        includeInputLabels: t.inputLabelsIncluded,
                        postalCode: r.postalCode,
                        style: r.style,
                        type: t.methodType
                    })
                } catch (e) {
                    if (ho(e, Uu))
                        throw e;
                    throw t.errorLogger.captureException(e),
                    new Ai("configuring the Card Element")
                }
            }
            ))()
        }
        attach(e) {
            var t = this;
            return bd((function*() {
                var r;
                t.throwIfDestroyedOrAlreadyAttached(),
                t.status = bs.ATTACHED,
                t.metricsHandler.logEvent("ATTACH:START"),
                t.metricsHandler.logEvent("CONFIGURED", t.initialOptions);
                try {
                    r = xc(e)
                } catch (e) {
                    throw t.metricsHandler.logEvent("ATTACH:ERROR", "good"),
                    t.status = bs.DETACHED,
                    e
                }
                try {
                    t.attachPromise = t.buildElementOnIframe(r),
                    yield t.attachPromise,
                    t.attachPromise = void 0,
                    t.throwIfDestroyed(),
                    t.element = r,
                    window.addEventListener("resize", t.onResize),
                    t.showCardElement(),
                    t.onResize(),
                    t.metricsHandler.logEvent("ATTACH:OK", "good")
                } catch (e) {
                    t.status = bs.DETACHED;
                    var n = function(e) {
                        return ho(e, Hu)
                    }(e);
                    if (t.metricsHandler.logEvent("ATTACH:ERROR", n ? "good" : "bad"),
                    n || e instanceof Ai)
                        throw e;
                    throw t.errorLogger.captureException(e),
                    new Ai("attaching the Card Element")
                }
            }
            ))()
        }
        detach() {
            return this.throwIfDestroyed(),
            this.detachElement(bs.DETACHED, "DETACHED")
        }
        destroy() {
            var e = this;
            return bd((function*() {
                if (e.status === bs.DESTROYED)
                    return !1;
                var t = yield e.detachElement(bs.DESTROYED, "DESTROYED");
                return e.context.removeLocaleChangedListener(e.updateCardDetailText),
                t
            }
            ))()
        }
        focus(e) {
            var t = this;
            return bd((function*() {
                if (t.throwIfDestroyedOrNotAttached(),
                !Object.values(On).includes(e))
                    throw new oi(e);
                t.metricsHandler.logEvent("FOCUSED", e);
                try {
                    return yield t.paymentMessenger.request("setFocus", {
                        field: e
                    })
                } catch (e) {
                    t.errorLogger.captureException(e)
                }
                return !1
            }
            ))()
        }
        clear() {
            var e = this;
            return bd((function*() {
                e.throwIfDestroyedOrNotAttached();
                try {
                    return yield e.paymentMessenger.request("clear")
                } catch (t) {
                    e.errorLogger.captureException(t)
                }
                return e.metricsHandler.logEvent("CLEAR"),
                !1
            }
            ))()
        }
        addEventListener(e, t) {
            this.throwIfDestroyed(),
            this.metricsHandler.logEvent("EVENT_LISTENER_ADDED", e),
            super.addEventListener(e, t)
        }
        removeEventListener(e, t) {
            this.throwIfDestroyed(),
            super.removeEventListener(e, t)
        }
        tokenize(e, t) {
            var r = this;
            return bd((function*() {
                var n = r.context.getFeatureFlagValues().one_shot_authentication_eligibility;
                if (!n && void 0 !== e) {
                    var i = Object.entries(e).filter((e => {
                        var [t,r] = e;
                        return void 0 !== r
                    }
                    )).map((e => {
                        var [t] = e;
                        return t
                    }
                    ));
                    r.errorLogger.captureException(new Ti([{
                        message: "Tokenization parameters were provided by a developer not allowlisted by the websdk/one-shot-authentication-eligibility feature flag",
                        type: "VALIDATION_ERROR"
                    }]), {
                        parameters: JSON.stringify(i)
                    })
                }
                try {
                    n && void 0 !== e && function(e) {
                        var t = vd(e);
                        if (t.length > 0)
                            throw new Do(t)
                    }(e);
                    var o, a, s, c = void 0 !== t && t.trim().length > 0;
                    if (n && c && function(e) {
                        if ("string" != typeof e)
                            throw new Do([Lo("cofToken", "string")])
                    }(t),
                    c || r.throwIfDestroyedOrNotAttached(),
                    r.tokenizeInProcess)
                        throw new Ti([Ts]);
                    if (c ? (a = t,
                    s = wd(t)) : (r.tokenizeInProcess = !0,
                    yield r.context.waitForProofOfWorkCompletion(),
                    o = yield r.paymentMessenger.request("requestCardNonceIfValidForm", {
                        type: r.methodType
                    }),
                    r.tokenizeInProcess = !1,
                    r.context.setPaymentMethodTrackingId(o.paymentMethodTrackingId),
                    a = (s = function(e) {
                        var {card: t, billingContact: r, cardNonce: n} = e;
                        return {
                            details: {
                                billing: r,
                                card: t,
                                method: Fi.CARD
                            },
                            status: Vi.OK,
                            token: n
                        }
                    }(o)).token),
                    n && void 0 !== e && void 0 !== a) {
                        var u = yield r.verifyBuyer(e, a, !0);
                        c && (s = wd(t, u.token))
                    }
                    return s
                } catch (e) {
                    if (e instanceof Do)
                        return {
                            errors: e.errors,
                            status: Vi.INVALID
                        };
                    throw ho(e, Bu) ? e : (r.errorLogger.captureException(e),
                    xo())
                } finally {
                    r.tokenizeInProcess = !1
                }
            }
            ))()
        }
        recalculateSize() {
            this.throwIfDestroyedOrNotAttached(),
            this.metricsHandler.logEvent("RECALCULATED_SIZE"),
            this.onResize()
        }
        setError(e) {
            var t = this;
            return bd((function*() {
                if (t.throwIfDestroyedOrNotAttached(),
                !Object.values(On).includes(e))
                    throw new oi(e);
                t.metricsHandler.logEvent("SET_ERROR", e);
                try {
                    return yield t.paymentMessenger.request("setError", {
                        field: e
                    })
                } catch (e) {
                    t.errorLogger.captureException(e)
                }
                return !1
            }
            ))()
        }
        buildElementOnIframe(e) {
            var t = this;
            return bd((function*() {
                var r = Fc(qn.SINGLE_CARD_WRAPPER_STYLES, "sq-single-card-styles", document.head);
                yield t.buildCardElement(e),
                yield t.paymentMessenger.request("loadCardsForm", {
                    configuration: yd(yd({}, t.initialOptions), {}, {
                        type: t.methodType
                    }),
                    iframeName: t.iframeName
                }),
                yield r
            }
            ))()
        }
        verifyBuyer(e, t, r) {
            var n = this;
            return bd((function*() {
                var i = !0 === r ? "OSA_VERIFICATION" : "VERIFICATION";
                try {
                    n.context.metricsHandler.logEvent("".concat(i, ":START"));
                    var o = {
                        amount: fd(e),
                        billingContact: e.billingContact,
                        currencyCode: gd(e),
                        customerInitiated: e.customerInitiated,
                        intent: e.intent,
                        sellerKeyedIn: e.sellerKeyedIn
                    };
                    if ("squareProduct"in e) {
                        var a = e;
                        o.squareProduct = a.squareProduct
                    }
                    var s = yield n.context.analyticsBackend.verifyBuyer(t, o);
                    return n.context.metricsHandler.logEvent("".concat(i, ":OK")),
                    s
                } catch (e) {
                    if (n.context.metricsHandler.logEvent("".concat(i, ":ERROR")),
                    Qn(e))
                        throw new Zn(e);
                    throw "UnexpectedAnalyticsClientError" !== vs(e).name && n.errorLogger.captureException(e),
                    xo()
                }
            }
            ))()
        }
        buildErrorMessage(e) {
            switch (e) {
            case On.CARD_NUMBER:
                return this.context.getLocaleString().paymentMethods.cards.errors.cardNumberError;
            case On.CVV:
                return this.context.getLocaleString().paymentMethods.cards.errors.cvvError;
            case On.EXPIRATION_DATE:
                return this.context.getLocaleString().paymentMethods.cards.errors.expirationDateError;
            case On.POSTAL_CODE:
                return this.context.getLocaleString().paymentMethods.cards.errors.postalCodeErrors[this.postalCountry];
            default:
                return ""
            }
        }
        buildHelperMessage(e) {
            switch (e) {
            case On.CARD_NUMBER:
                return this.context.getLocaleString().paymentMethods.cards.helperText.cardNumber;
            case On.CVV:
                return this.context.getLocaleString().paymentMethods.cards.helperText.cvv;
            case On.EXPIRATION_DATE:
                return this.context.getLocaleString().paymentMethods.cards.helperText.expirationDate;
            case On.POSTAL_CODE:
                return this.context.getLocaleString().paymentMethods.cards.helperText.postalCodes[this.postalCountry];
            default:
                return ""
            }
        }
        updateCardDetailText() {
            var e, t, r, n;
            this.cardDetail && (0 === this.errorList.size ? (e = null !== (r = this.focusedInput) && void 0 !== r ? r : Id,
            t = this.buildHelperMessage(e),
            this.cardDetail.classList.remove(Wl),
            this.cardDetail.classList.add(Yl)) : (e = null !== (n = Sd.find((e => this.errorList.has(e)))) && void 0 !== n ? n : Id,
            t = this.buildErrorMessage(e),
            this.cardDetail.classList.add(Wl),
            this.cardDetail.classList.remove(Yl)),
            this.cardDetail.textContent !== t && (this.cardDetail.textContent = t),
            t.length > 0 ? this.cardDetail.classList.add(Kl) : this.cardDetail.classList.remove(Kl))
        }
        addErrorMessage(e) {
            this.errorList.add(e),
            this.updateCardDetailText()
        }
        removeErrorMessage(e) {
            this.errorList.has(e) && (this.errorList.delete(e),
            this.updateCardDetailText())
        }
        addFocusMessage(e) {
            this.focusedInput = e,
            this.updateCardDetailText()
        }
        removeFocusMessage(e) {
            this.focusedInput === e && (this.focusedInput = null),
            setTimeout(( () => {
                null === this.focusedInput && this.updateCardDetailText()
            }
            ), 50)
        }
        removeFocusClass() {
            setTimeout(( () => {
                var e;
                void 0 !== this.focusedInput && null !== this.focusedInput || null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(qu)
            }
            ), 50)
        }
        removeErrorClass() {
            var e;
            0 === this.errorList.size && (null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(Vu))
        }
        handleInputEvent(e) {
            var {data: t} = e
              , r = t.payload.body;
            switch (r.eventType) {
            case wn.ERROR_CLASS_ADDED:
                var n;
                this.addErrorMessage(r.field),
                null === (n = this.wrapperElement) || void 0 === n || n.classList.add(Vu);
                break;
            case wn.ERROR_CLASS_REMOVED:
                this.removeErrorMessage(r.field),
                this.removeErrorClass();
                break;
            case wn.FOCUS_CLASS_ADDED:
                var i;
                this.addFocusMessage(r.field),
                null === (i = this.wrapperElement) || void 0 === i || i.classList.add(qu);
                break;
            case wn.FOCUS_CLASS_REMOVED:
                this.removeFocusMessage(r.field),
                this.removeFocusClass()
            }
            super.dispatchEvent(r.eventType, r)
        }
        handleSetPostalCountry(e) {
            var {data: t} = e;
            this.postalCountry = t.payload.body.postalCountry
        }
        handleBankIdentificationNumberChanged(e) {
            var t = this;
            return bd((function*() {
                var {data: r} = e;
                if (t.context.getFeatureFlagValues().eager_three_ds_method_execution_eligibility) {
                    var n = r.payload.body.bankIdentificationNumber
                      , i = yield t.paymentMessenger.request("REQUEST_THREE_DS_METHOD_INITIALIZATION", {
                        applicationId: t.context.getSession().applicationId,
                        bin: n,
                        locationId: t.context.getSession().locationId
                    });
                    "string" == typeof i.three_ds_server_transaction_id && "" !== i.three_ds_server_transaction_id.trim() && "string" == typeof i.three_ds_method_url && "" !== i.three_ds_method_url.trim() && "string" == typeof i.three_ds_method_notification_url && "" !== i.three_ds_method_notification_url.trim() && t.context.analyticsBackend.execute3DSMethod({
                        threeDSServerTransId: i.three_ds_server_transaction_id,
                        threeDsMethodNotificationUrl: i.three_ds_method_notification_url,
                        threeDsMethodUrl: i.three_ds_method_url
                    })
                }
            }
            ))()
        }
        initializeMessageBus() {
            var e = this.handleInputEvent.bind(this)
              , t = this.handleSetPostalCountry.bind(this)
              , r = {
                bankIdentificationNumberChanged: this.handleBankIdentificationNumberChanged.bind(this),
                cardBrandChanged: e,
                errorClassAdded: e,
                errorClassRemoved: e,
                escape: e,
                focusClassAdded: e,
                focusClassRemoved: e,
                postalCodeChanged: e,
                setPostalCountry: t,
                submit: e
            };
            this.paymentMessenger.initializeMessageBus(r)
        }
        buildCardIframe(e) {
            return Mu({
                frameborder: "0",
                height: "0px",
                name: this.iframeName,
                scrolling: "no",
                src: qn.SINGLE_CARD_IFRAME,
                width: "100%"
            }, e)
        }
        hideCardElement() {
            var e;
            null === (e = this.wrapperElement) || void 0 === e || e.setAttribute("hidden", "")
        }
        showCardElement() {
            var e;
            null === (e = this.wrapperElement) || void 0 === e || e.removeAttribute("hidden")
        }
        buildCardElement(e) {
            var t = this;
            return bd((function*() {
                var r;
                t.wrapperElement = document.createElement("div"),
                t.wrapperElement.id = Od(t.id),
                t.wrapperElement.classList.add(Gl),
                t.hideCardElement(),
                t.cardDetail = document.createElement("span"),
                t.cardDetail.classList.add($l),
                e.appendChild(t.wrapperElement),
                t.iframeContainer = document.createElement("div"),
                t.iframeContainer.classList.add(Vl),
                t.wrapperElement.appendChild(t.iframeContainer),
                t.iframe = yield t.buildCardIframe(t.iframeContainer),
                t.iframe.classList.add(zl),
                t.wrapperElement.appendChild(t.cardDetail),
                null !== (r = t.initialOptions) && void 0 !== r && r.style && Cd(t.initialOptions.style, t.id)
            }
            ))()
        }
        onResize(e) {
            var t;
            if (this.iframe && this.wrapperElement && this.iframeContainer && (this.lastResizeWidth = this.iframe.clientWidth,
            void 0 === this.currentResizeTimeout)) {
                var r = e => {
                    if (this.wrapperElement && this.iframe && this.iframeContainer) {
                        var t = this.inputLabelsIncluded ? 62 : 48;
                        e <= 482 && (t = 2 * t + 1),
                        this.iframeContainer.style.height = "".concat(Math.round(t), "px"),
                        this.iframe.height = "".concat(Math.round(t), "px")
                    }
                }
                ;
                r(null !== (t = this.lastResizeWidth) && void 0 !== t ? t : 0),
                this.currentResizeTimeout = window.setTimeout(( () => {
                    var e;
                    r(null !== (e = this.lastResizeWidth) && void 0 !== e ? e : 0),
                    this.currentResizeTimeout = void 0
                }
                ), 100)
            }
        }
        detachElement(e, t) {
            var r = this;
            return bd((function*() {
                var n = r.status;
                if (r.attachPromise)
                    try {
                        yield r.attachPromise
                    } catch (e) {}
                try {
                    var i = yield r.paymentMessenger.request("destroy");
                    return r.element && (ju(r.element),
                    window.removeEventListener("resize", r.onResize)),
                    r.status = e,
                    r.metricsHandler.logEvent(t),
                    i
                } catch (e) {
                    throw r.status = n,
                    e
                }
            }
            ))()
        }
    }
    ;
    class Rd extends Vn {
        constructor() {
            super("A grant was not returned from CashApp and is required for tokenization"),
            this.name = "CashAppPayGrantIsUndefinedError",
            Object.setPrototypeOf(this, Rd.prototype)
        }
    }
    function Nd(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function Dd(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    Nd(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    Nd(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    function Ld(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function xd(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ld(Object(r), !0).forEach((function(t) {
                kd(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ld(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function kd(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    !function(e) {
        e.CUSTOMER_INTERACTION = "CUSTOMER_INTERACTION",
        e.CUSTOMER_DISMISSED = "CUSTOMER_DISMISSED",
        e.CUSTOMER_REQUEST_APPROVED = "CUSTOMER_REQUEST_APPROVED",
        e.CUSTOMER_REQUEST_DECLINED = "CUSTOMER_REQUEST_DECLINED",
        e.CUSTOMER_REQUEST_FAILED = "CUSTOMER_REQUEST_FAILED"
    }(Ad || (Ad = {}));
    var Md = new Set(["USD"])
      , jd = "cash_app_pay_v1_element";
    class Ud extends Cs {
        constructor(e, t, r, n, i) {
            if (super(n),
            this.methodType = Fi.CASH_APP_PAY,
            this.wasFirstInteractionCalled = !1,
            this.isMobile = !1,
            this.CashAppPayInstance = e,
            this.req = t,
            this.context = n,
            this.paymentRequestLockController = i,
            this.paymentMessenger = new oc(this.context),
            this.tokenizeValidator = function() {
                return Promise.resolve(!0)
            }
            ,
            this.clickEventHandler = () => {
                this.beginAuthorizationFlow()
            }
            ,
            !po(this.session.locationId))
                throw new mi(us,"locationId");
            if (!po(this.session.cashAppPayMerchantIdentifier))
                throw new mi(us,"merchantId");
            if (!Md.has(this.req.currencyCode))
                throw new li("".concat(this.req.currencyCode, " is not supported by CashAppPay. Valid currencies are: ").concat([...Md].join(", ")));
            var o = vo(this.req.total.amount, this.req.currencyCode);
            if (o < 1)
                throw new li("".concat(this.req.total.amount, " is an invalid payment amount. Total amount should be greater than 0"));
            if (!r.redirectURL)
                throw new di;
            var a = xd({
                actions: {
                    payment: {
                        amount: {
                            currency: this.req.currencyCode,
                            value: o
                        },
                        scopeId: this.session.cashAppPayMerchantIdentifier
                    }
                }
            }, r);
            e.customerRequest(a).catch((e => {
                this.errorLogger.captureException(e),
                this.customerRequestFailedEvent()
            }
            )),
            this.cashAppEventHandler = {
                [Ad.CUSTOMER_INTERACTION]: e => this.registerExternalEventStart(e),
                [Ad.CUSTOMER_DISMISSED]: () => {
                    this.dispatchEvent("customerDismissed", null)
                }
                ,
                [Ad.CUSTOMER_REQUEST_APPROVED]: e => this.customerRequestApprovedEvent(e),
                [Ad.CUSTOMER_REQUEST_DECLINED]: () => this.customerRequestDeclinedEvent(),
                [Ad.CUSTOMER_REQUEST_FAILED]: () => this.customerRequestFailedEvent()
            },
            Object.keys(Ad).forEach((e => this.CashAppPayInstance.addEventListener(e, this.cashAppEventHandler[e]))),
            this.paymentRequestLockController.lock(this)
        }
        attach(e, t, r) {
            var n = this;
            return Dd((function*() {
                n.throwIfDestroyedOrAlreadyAttached(),
                n.metricsHandler.logEvent("ATTACH:START");
                var i, o = t, a = !1 === o;
                void 0 !== o && !a && "values"in o && (null !== (i = o.theme) && void 0 !== i || (o.theme = o.values));
                var s = function(e) {
                    if (void 0 === e || !1 === e)
                        return {
                            isValid: !0,
                            missingFields: []
                        };
                    var t = {};
                    return Object.keys(e).forEach((function(e) {
                        aa.has(e) && (t[e] = "string")
                    }
                    )),
                    $c(e, t)
                }(o);
                if (!s.isValid)
                    throw n.metricsHandler.logEvent("ATTACH:ERROR", "good"),
                    new ci(s.missingFields);
                var c = function(e) {
                    var t = []
                      , r = !0;
                    if (void 0 === e || !1 === e)
                        return {
                            isValid: r,
                            missingFields: t
                        };
                    var n = {
                        shape: ya,
                        size: ma,
                        theme: Ea,
                        width: _a
                    }
                      , i = JSON.parse(wa(e));
                    return Object.entries(i).forEach((function(e) {
                        var [i,o] = e;
                        o === Xo && (r = !1,
                        t.push([i, [...n[i]].join(",")]))
                    }
                    )),
                    {
                        isValid: r,
                        missingFields: t
                    }
                }(o);
                if (!c.isValid)
                    throw n.metricsHandler.logEvent("ATTACH:ERROR", "good"),
                    new ui(c.missingFields);
                if (r && (n.tokenizeValidator = r),
                "function" != typeof n.tokenizeValidator)
                    throw n.metricsHandler.logEvent("ATTACH:ERROR", "good"),
                    new hi;
                void 0 === o || a || n.metricsHandler.logEvent("CONFIGURED", o),
                n.status = bs.ATTACHED,
                n.element = a ? kc(e) : xc(e);
                try {
                    var u = document.createElement("div");
                    u.id = jd,
                    a ? n.element.before(u) : n.element.appendChild(u);
                    var l = "#".concat(jd);
                    n.renderController = yield n.CashAppPayInstance.render(l, {
                        button: o,
                        manage: !1
                    }),
                    n.element.addEventListener("click", n.clickEventHandler),
                    n.metricsHandler.logEvent("ATTACH:OK", "good")
                } catch (e) {
                    throw n.metricsHandler.logEvent("ATTACH:ERROR", "bad"),
                    n.status = bs.DETACHED,
                    e
                }
            }
            ))()
        }
        destroy() {
            return this.status === bs.DESTROYED ? Promise.resolve(!1) : (this.detachElement(bs.DESTROYED, "DESTROYED"),
            this.paymentRequestLockController.unlock(this),
            this.CashAppPayInstance.restart(),
            Object.keys(Ad).forEach((e => this.CashAppPayInstance.removeEventListener(e, this.cashAppEventHandler[e]))),
            Promise.resolve(!0))
        }
        detach() {
            return this.throwIfDestroyedOrNotAttached(),
            this.detachElement(bs.DETACHED, "DETACHED"),
            Promise.resolve(!0)
        }
        addEventListener(e, t) {
            this.metricsHandler.logEvent("EVENT_LISTENER_ADDED", e),
            super.addEventListener(e, t)
        }
        removeEventListener(e, t) {
            super.removeEventListener(e, t)
        }
        customerRequestApprovedEvent(e) {
            var t = this;
            return Dd((function*() {
                var r = yield t.createNonce(e);
                t.dispatchEvent("ontokenization", {
                    tokenResult: r
                })
            }
            ))()
        }
        customerRequestDeclinedEvent() {
            var e = {
                status: Vi.CANCEL
            };
            this.metricsHandler.logEvent("EXTERNAL_SESSION:CANCEL"),
            this.dispatchEvent("ontokenization", {
                tokenResult: e
            })
        }
        customerRequestFailedEvent() {
            var e = {
                errors: [new Ai("tokenizing Cash App Pay")],
                status: Vi.ERROR
            };
            this.metricsHandler.logEvent("EXTERNAL_SESSION:ERROR"),
            this.dispatchEvent("ontokenization", {
                tokenResult: e
            })
        }
        createNonce(e) {
            var t = this;
            return Dd((function*() {
                var {customerProfile: {cashtag: r}, grants: n, referenceId: i} = e
                  , o = n.payment
                  , {total: {amount: a}, currencyCode: s} = t.req;
                try {
                    if (!o)
                        throw new Rd;
                    yield t.context.waitForProofOfWorkCompletion();
                    var c = yield t.paymentMessenger.request("REQUEST_CASH_APP_PAY_INSTANT_WALLET_TOKEN", {
                        applicationId: t.session.applicationId,
                        cashAppPayData: {
                            cashtag: r,
                            grantId: o.grantId,
                            isMobile: t.isMobile,
                            referenceId: i,
                            totalAmount: {
                                amount: a,
                                currency: s
                            }
                        },
                        clientID: t.session.applicationId,
                        instanceID: t.session.instanceId,
                        locationID: t.session.locationId,
                        paymentMethodTrackingID: t.context.getPaymentMethodTrackingId(),
                        requestBillingContact: t.req.requestBillingContact,
                        requestShippingContact: t.req.requestShippingContact,
                        sessionID: t.session.sessionId,
                        websdkVersion: qn.VERSION
                    });
                    return t.metricsHandler.logEvent("EXTERNAL_SESSION:OK"),
                    {
                        details: {
                            cashAppPay: {
                                cashtag: r,
                                referenceId: i
                            },
                            method: Fi.CASH_APP_PAY
                        },
                        status: Vi.OK,
                        token: c.token
                    }
                } catch (e) {
                    var u;
                    return t.metricsHandler.logEvent("EXTERNAL_SESSION:ERROR"),
                    e instanceof Ti ? u = e : (t.errorLogger.captureException(e),
                    u = new Ai("tokenizing CashAppPay")),
                    {
                        errors: [u],
                        status: Vi.ERROR
                    }
                }
            }
            ))()
        }
        beginAuthorizationFlow() {
            var e = this;
            return Dd((function*() {
                if (e.throwIfDestroyedOrNotAttached(),
                !e.renderController)
                    throw new Ai("Could not begin Cash App Pay authorization flow");
                e.metricsHandler.logEvent("CASH_APP_PAY_CLICK:VALIDATING");
                try {
                    (yield e.tokenizeValidator()) ? (e.renderController.begin(),
                    e.metricsHandler.logEvent("CASH_APP_PAY_AUTH:START")) : e.metricsHandler.logEvent("CASH_APP_PAY_CLICK:INVALID")
                } catch (t) {
                    throw e.metricsHandler.logEvent("CASH_APP_PAY_CLICK:ERROR"),
                    t
                }
            }
            ))()
        }
        registerExternalEventStart(e) {
            this.metricsHandler.logEvent("EXTERNAL_SESSION:START"),
            this.wasFirstInteractionCalled || (this.wasFirstInteractionCalled = !0,
            this.metricsHandler.logEvent("FIRST_INTERACTION:OK")),
            this.isMobile = e.isMobile,
            this.dispatchEvent("customerInteraction", xd({}, e))
        }
        detachElement(e, t) {
            this.renderController && this.renderController.destroy();
            var r = document.getElementById(jd);
            r && r.remove(),
            this.element && this.element.removeEventListener("click", this.clickEventHandler),
            this.status = e,
            this.metricsHandler.logEvent(t)
        }
    }
    function Hd() {
        return (Hd = Dd((function*(e) {
            var t = "https://kit.cashstaging.app/v1/pay.js"
              , r = "SQ_SELLER";
            return "sandbox" === qn.env || "production" === qn.env && e.isTestMerchant ? (t = "https://sandbox.kit.cash.app/v1/pay.js",
            r = "CAS-CI_SQ_SELLER_SANDBOX") : "production" === qn.env && (t = "https://kit.cash.app/v1/pay.js",
            r = "CA-CI_SQ_SELLER"),
            (yield fc.load("cash-app-pay", {
                src: t
            }, "CashApp", e.errorLogger)).pay({
                clientId: r
            })
        }
        ))).apply(this, arguments)
    }
    var Bd = {
        initialize: function(e) {
            return Hd.apply(this, arguments)
        }
    }
      , Fd = [Si, wi, Oi, Ci, yi];
    function qd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Vd(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? qd(Object(r), !0).forEach((function(t) {
                Gd(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qd(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Gd(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function zd(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function $d(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    zd(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    zd(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var Wd = [Tn.GIFT_CARD_NUMBER];
    class Yd extends Cs {
        constructor(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            super(e),
            this.methodType = Fi.GIFT_CARD,
            this.onResize = this.onResize.bind(this),
            this.id = Is(),
            this.iframeName = "".concat("gift-card", "-").concat(this.id),
            this.paymentMessenger = new oc(this.context),
            this.tokenizeInProcess = !1,
            this.inputLabelsIncluded = Boolean(t.includeInputLabels),
            this.initializeMessageBus(),
            Jd(t),
            this.initialOptions = t,
            this.errorList = new Set
        }
        attach(e) {
            var t = this;
            return $d((function*() {
                var r;
                t.throwIfDestroyedOrAlreadyAttached(),
                t.status = bs.ATTACHED,
                t.metricsHandler.logEvent("ATTACH:START"),
                t.metricsHandler.logEvent("CONFIGURED", t.initialOptions);
                try {
                    r = xc(e)
                } catch (e) {
                    throw t.metricsHandler.logEvent("ATTACH:ERROR", "good"),
                    t.status = bs.DETACHED,
                    e
                }
                try {
                    t.attachPromise = t.buildElementOnIframe(r),
                    yield t.attachPromise,
                    t.attachPromise = void 0,
                    t.throwIfDestroyed(),
                    t.element = r,
                    window.addEventListener("resize", t.onResize),
                    t.showCardElement(),
                    t.onResize(),
                    t.metricsHandler.logEvent("ATTACH:OK", "good")
                } catch (e) {
                    t.status = bs.DETACHED;
                    var n = function(e) {
                        return ho(e, Fd)
                    }(e)
                      , i = n ? "good" : "bad";
                    if (t.metricsHandler.logEvent("ATTACH:ERROR", i),
                    n || e instanceof Ai)
                        throw e;
                    throw t.errorLogger.captureException(e),
                    new Ai("attaching the Gift Card Element")
                }
            }
            ))()
        }
        detach() {
            return this.throwIfDestroyed(),
            this.detachElement(bs.DETACHED, "DETACHED")
        }
        destroy() {
            return this.status === bs.DESTROYED ? Promise.resolve(!1) : this.detachElement(bs.DESTROYED, "DESTROYED")
        }
        configure(e) {
            var t = this;
            return $d((function*() {
                t.throwIfDestroyedOrNotAttached(),
                Jd(e),
                void 0 !== e.includeInputLabels && (t.inputLabelsIncluded = Boolean(e.includeInputLabels),
                t.onResize()),
                void 0 !== e.style && Xd(e.style, t.id),
                t.metricsHandler.logEvent("CONFIG_UPDATED", e);
                try {
                    yield t.paymentMessenger.request("giftCardConfigure", {
                        includeInputLabels: t.inputLabelsIncluded,
                        style: e.style,
                        type: t.methodType
                    })
                } catch (e) {
                    if (ho(e, Uu))
                        throw e;
                    throw t.errorLogger.captureException(e),
                    new Ai("configuring the Gift Card Element")
                }
            }
            ))()
        }
        focus(e) {
            var t = this;
            return $d((function*() {
                if (t.throwIfDestroyedOrNotAttached(),
                !Object.values(Tn).includes(e))
                    throw new oi(e);
                t.metricsHandler.logEvent("FOCUSED", e);
                try {
                    return yield t.paymentMessenger.request("giftCardSetFocus", {
                        field: e
                    })
                } catch (e) {
                    t.errorLogger.captureException(e)
                }
                return !1
            }
            ))()
        }
        clear() {
            var e = this;
            return $d((function*() {
                e.throwIfDestroyedOrNotAttached();
                try {
                    return yield e.paymentMessenger.request("giftCardClear")
                } catch (t) {
                    e.errorLogger.captureException(t)
                }
                return e.metricsHandler.logEvent("CLEAR"),
                !1
            }
            ))()
        }
        addEventListener(e, t) {
            this.throwIfDestroyed(),
            this.metricsHandler.logEvent("EVENT_LISTENER_ADDED", e),
            super.addEventListener(e, t)
        }
        removeEventListener(e, t) {
            this.throwIfDestroyed(),
            super.removeEventListener(e, t)
        }
        tokenize() {
            var e = this;
            return $d((function*() {
                if (e.throwIfDestroyedOrNotAttached(),
                e.tokenizeInProcess)
                    throw new Ti([Ts]);
                e.tokenizeInProcess = !0,
                yield e.context.waitForProofOfWorkCompletion();
                try {
                    var t = yield e.paymentMessenger.request("giftCardRequestCardNonceIfValidForm", {
                        type: e.methodType
                    });
                    return e.tokenizeInProcess = !1,
                    e.context.setPaymentMethodTrackingId(t.paymentMethodTrackingId),
                    function(e) {
                        var {card: t, cardNonce: r} = e;
                        return {
                            details: {
                                giftCard: t,
                                method: Fi.GIFT_CARD
                            },
                            status: Vi.OK,
                            token: r
                        }
                    }(t)
                } catch (t) {
                    if (e.tokenizeInProcess = !1,
                    t instanceof Do)
                        return {
                            errors: t.errors,
                            status: Vi.INVALID
                        };
                    throw ho(t, Bu) ? t : (e.errorLogger.captureException(t),
                    xo())
                }
            }
            ))()
        }
        setError(e) {
            var t = this;
            return $d((function*() {
                if (t.throwIfDestroyedOrNotAttached(),
                !Object.values(Tn).includes(e))
                    throw new oi(e);
                t.metricsHandler.logEvent("SET_ERROR", e);
                try {
                    return yield t.paymentMessenger.request("giftCardSetError", {
                        field: e
                    })
                } catch (e) {
                    t.errorLogger.captureException(e)
                }
                return !1
            }
            ))()
        }
        buildElementOnIframe(e) {
            var t = this;
            return $d((function*() {
                var r = Fc(qn.SINGLE_CARD_WRAPPER_STYLES, "sq-single-card-styles", document.head);
                yield t.buildCardElement(e),
                yield t.paymentMessenger.request("loadGiftCardsForm", {
                    configuration: Vd(Vd({}, t.initialOptions), {}, {
                        type: t.methodType
                    }),
                    iframeName: t.iframeName
                }),
                yield r
            }
            ))()
        }
        buildCardElement(e) {
            var t = this;
            return $d((function*() {
                var r;
                t.wrapperElement = document.createElement("div"),
                t.wrapperElement.id = Kd(t.id),
                t.wrapperElement.classList.add(Gl),
                t.hideCardElement(),
                t.cardDetail = document.createElement("span"),
                t.cardDetail.classList.add($l),
                e.appendChild(t.wrapperElement),
                t.iframeContainer = document.createElement("div"),
                t.iframeContainer.classList.add(Vl),
                t.wrapperElement.appendChild(t.iframeContainer),
                t.iframe = yield t.buildCardIframe(t.iframeContainer),
                t.iframe.classList.add(zl),
                t.wrapperElement.appendChild(t.cardDetail),
                null !== (r = t.initialOptions) && void 0 !== r && r.style && Xd(t.initialOptions.style, t.id)
            }
            ))()
        }
        buildCardIframe(e) {
            return Mu({
                frameborder: "0",
                height: "0px",
                name: this.iframeName,
                scrolling: "no",
                src: qn.GIFT_CARD_IFRAME,
                width: "100%"
            }, e)
        }
        hideCardElement() {
            var e;
            null === (e = this.wrapperElement) || void 0 === e || e.setAttribute("hidden", "")
        }
        showCardElement() {
            var e;
            null === (e = this.wrapperElement) || void 0 === e || e.removeAttribute("hidden")
        }
        onResize(e) {
            if (this.iframe && this.wrapperElement && this.iframeContainer && void 0 === this.currentResizeTimeout) {
                var t = () => {
                    if (this.wrapperElement && this.iframe && this.iframeContainer) {
                        var e = this.inputLabelsIncluded ? 62 : 48;
                        e += 2,
                        this.iframe.style.height = "".concat(e, "px"),
                        this.iframeContainer.style.height = "".concat(Math.round(e), "px")
                    }
                }
                ;
                t(),
                this.currentResizeTimeout = window.setTimeout(( () => {
                    t(),
                    this.currentResizeTimeout = void 0
                }
                ), 100)
            }
        }
        updateCardDetailText() {
            var e, t, r, n;
            this.cardDetail && (0 === this.errorList.size ? (e = null !== (r = this.focusedInput) && void 0 !== r ? r : "emptyMessage",
            t = this.buildHelperMessage(e),
            this.cardDetail.classList.remove(Wl),
            this.cardDetail.classList.add(Yl)) : (e = null !== (n = Wd.find((e => this.errorList.has(e)))) && void 0 !== n ? n : Wd[0],
            t = this.buildErrorMessage(e),
            this.cardDetail.classList.add(Wl),
            this.cardDetail.classList.remove(Yl)),
            this.cardDetail.textContent !== t && (this.cardDetail.textContent = t),
            t.length > 0 ? this.cardDetail.classList.add(Kl) : this.cardDetail.classList.remove(Kl))
        }
        addErrorMessage(e) {
            this.errorList.add(e),
            this.updateCardDetailText()
        }
        removeErrorMessage(e) {
            this.errorList.has(e) && (this.errorList.delete(e),
            this.updateCardDetailText())
        }
        addFocusMessage(e) {
            this.focusedInput = e,
            this.updateCardDetailText()
        }
        removeFocusMessage(e) {
            this.focusedInput === e && (this.focusedInput = null),
            setTimeout(( () => {
                null === this.focusedInput && this.updateCardDetailText()
            }
            ), 50)
        }
        handleInputEvent(e) {
            var {data: t} = e
              , r = t.payload.body;
            switch (r.eventType) {
            case An.ERROR_CLASS_ADDED:
                var n;
                this.addErrorMessage(r.field),
                null === (n = this.wrapperElement) || void 0 === n || n.classList.add(Vu);
                break;
            case An.ERROR_CLASS_REMOVED:
                this.removeErrorMessage(r.field),
                this.removeErrorClass();
                break;
            case An.FOCUS_CLASS_ADDED:
                var i;
                this.addFocusMessage(r.field),
                null === (i = this.wrapperElement) || void 0 === i || i.classList.add(qu);
                break;
            case An.FOCUS_CLASS_REMOVED:
                this.removeFocusMessage(r.field),
                this.removeFocusClass()
            }
            super.dispatchEvent(r.eventType, r)
        }
        removeFocusClass() {
            setTimeout(( () => {
                var e;
                void 0 !== this.focusedInput && null !== this.focusedInput || null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(qu)
            }
            ), 50)
        }
        removeErrorClass() {
            var e;
            0 === this.errorList.size && (null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(Vu))
        }
        initializeMessageBus() {
            var e = this.handleInputEvent.bind(this)
              , t = {
                cardBrandChanged: e,
                errorClassAdded: e,
                errorClassRemoved: e,
                escape: e,
                focusClassAdded: e,
                focusClassRemoved: e,
                submit: e
            };
            this.paymentMessenger.initializeMessageBus(t)
        }
        buildErrorMessage(e) {
            return e === Tn.GIFT_CARD_NUMBER ? this.context.getLocaleString().paymentMethods.giftCards.errors.giftCardNumberError : ""
        }
        buildHelperMessage(e) {
            return e === Tn.GIFT_CARD_NUMBER ? this.context.getLocaleString().paymentMethods.giftCards.helperText.giftCardNumber : ""
        }
        detachElement(e, t) {
            var r = this;
            return $d((function*() {
                var n = r.status;
                if (r.attachPromise)
                    try {
                        yield r.attachPromise
                    } catch (e) {}
                try {
                    var i = yield r.paymentMessenger.request("giftCardDestroy");
                    return r.element && (ju(r.element),
                    window.removeEventListener("resize", r.onResize)),
                    r.status = e,
                    r.metricsHandler.logEvent(t),
                    i
                } catch (e) {
                    throw r.status = n,
                    e
                }
            }
            ))()
        }
    }
    function Kd(e) {
        return "".concat("gift-card-wrapper", "-").concat(e)
    }
    function Xd(e, t) {
        var r = function(e) {
            return "".concat("sq-gift-card-custom-styles", "-").concat(e)
        }(t)
          , n = document.getElementById(r);
        null === n && ((n = document.createElement("style")).id = r,
        document.head.appendChild(n)),
        n.innerHTML = ld(e, Kd(t))
    }
    function Jd(e) {
        var t = {
            includeInputLabels: e => "boolean" == typeof e,
            style: e => "object" == typeof e
        };
        Object.entries(e).forEach((e => {
            var [r,n] = e;
            if (!(r in t))
                throw new ai(r);
            if (!t[r](n))
                throw new si(r,n)
        }
        ))
    }
    class Zd extends Vn {
        constructor(e) {
            super("The event listener for ".concat(e, " timed out (30 seconds). If you've returned a promise, ensure it is resolving")),
            this.name = "EventListenerTimeoutError",
            Object.setPrototypeOf(this, Zd.prototype)
        }
    }
    function Qd(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    class eh extends _s {
        constructor() {
            super(),
            this.listeners = {},
            this.listeners = {}
        }
        dispatchEvent(e, t, r) {
            var n, i = this;
            return (n = function*() {
                if (e in i.listeners) {
                    var n = new Yi(e,t)
                      , o = [...i.listeners[e]]
                      , a = function*() {
                        var t, i;
                        try {
                            t = s(n)
                        } catch (t) {
                            throw new ni(e,ms(t))
                        }
                        if (t instanceof Promise)
                            try {
                                i = yield fn(( () => t), 3e4, new Zd(e))
                            } catch (t) {
                                if (t instanceof Zd)
                                    throw t;
                                throw new ni(e,ms(t))
                            }
                        else
                            i = t;
                        r && r(i)
                    };
                    for (var s of o)
                        yield*a()
                }
            }
            ,
            function() {
                var e = this
                  , t = arguments;
                return new Promise((function(r, i) {
                    var o = n.apply(e, t);
                    function a(e) {
                        Qd(o, r, i, a, s, "next", e)
                    }
                    function s(e) {
                        Qd(o, r, i, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
            )()
        }
    }
    var th = {
        AD: "Andorra",
        AE: "United Arab Emirates",
        AF: "Afghanistan",
        AG: "Antigua And Barbuda",
        AI: "Anguilla",
        AL: "Albania",
        AM: "Armenia",
        AO: "Angola",
        AQ: "Antarctica",
        AR: "Argentina",
        AS: "American Samoa",
        AT: "Austria",
        AU: "Australia",
        AW: "Aruba",
        AX: "Finland",
        AZ: "Azerbaijan",
        BA: "Bosnia And Herzegovina",
        BB: "Barbados",
        BD: "Bangladesh",
        BE: "Belgium",
        BF: "Burkina Faso",
        BG: "Bulgaria (rep.)",
        BH: "Bahrain",
        BI: "Burundi",
        BJ: "Benin",
        BL: "Saint Barthelemy",
        BM: "Bermuda",
        BN: "Brunei Darussalam",
        BO: "Bolivia",
        BQ: "Bonaire, Sint Eustatius, And Saba",
        BR: "Brazil",
        BS: "Bahamas",
        BT: "Bhutan",
        BV: "Bouvet Island",
        BW: "Botswana",
        BY: "Belarus",
        BZ: "Belize",
        CA: "Canada",
        CC: "Cocos (keeling) Islands",
        CD: "Congo (dem. Rep.)",
        CF: "Central African Republic",
        CG: "Congo (rep.)",
        CH: "Switzerland",
        CI: "Cote D'ivoire",
        CK: "Cook Islands",
        CL: "Chile",
        CM: "Cameroon",
        CN: "China",
        CO: "Colombia",
        CR: "Costa Rica",
        CV: "Cape Verde",
        CW: "Curacao",
        CX: "Christmas Island",
        CY: "Cyprus",
        CZ: "Czech Rep.",
        DE: "Germany",
        DJ: "Djibouti",
        DK: "Denmark",
        DM: "Dominica",
        DO: "Dominican Rep.",
        DZ: "Algeria",
        EC: "Ecuador",
        EE: "Estonia",
        EG: "Egypt",
        EH: "Western Sahara",
        ER: "Eritrea",
        ES: "Spain",
        ET: "Ethiopia",
        FI: "Finland",
        FJ: "Fiji",
        FK: "Falkland Islands (malvinas)",
        FM: "Micronesia (federated State Of)",
        FO: "Faroe Islands",
        FR: "France",
        GA: "Gabon",
        GB: "United Kingdom",
        GD: "Grenada (west Indies)",
        GE: "Georgia",
        GF: "French Guiana",
        GG: "Channel Islands",
        GH: "Ghana",
        GI: "Gibraltar",
        GL: "Greenland",
        GM: "Gambia",
        GN: "Guinea",
        GP: "Guadeloupe",
        GQ: "Equatorial Guinea",
        GR: "Greece",
        GS: "South Georgia",
        GT: "Guatemala",
        GU: "Guam",
        GW: "Guinea-bissau",
        GY: "Guyana",
        HK: "Hong Kong",
        HM: "Heard And Mcdonald Islands",
        HN: "Honduras",
        HR: "Croatia",
        HT: "Haiti",
        HU: "Hungary (rep.)",
        ID: "Indonesia",
        IE: "Ireland",
        IL: "Israel",
        IM: "Isle Of Man",
        IN: "India",
        IO: "British Indian Ocean Territory",
        IQ: "Iraq",
        IR: "Iran",
        IS: "Iceland",
        IT: "Italy",
        JE: "Channel Islands",
        JM: "Jamaica",
        JO: "Jordan",
        JP: "Japan",
        KE: "Kenya",
        KG: "Kyrgyzstan",
        KH: "Cambodia",
        KI: "Kiribati",
        KM: "Comoros",
        KN: "Saint Kitts And Nevis",
        KR: "South Korea",
        KW: "Kuwait",
        KY: "Cayman Islands",
        KZ: "Kazakhstan",
        LA: "Lao (people's Dem. Rep.)",
        LB: "Lebanon",
        LC: "Saint Lucia",
        LI: "Liechtenstein",
        LK: "Sri Lanka",
        LR: "Liberia",
        LS: "Lesotho",
        LT: "Lithuania",
        LU: "Luxembourg",
        LV: "Latvia",
        LY: "Libya",
        MA: "Morocco",
        MC: "Monaco",
        MD: "Rep. Moldova",
        ME: "Montenegro",
        MF: "Saint Martin",
        MG: "Madagascar",
        MH: "Marshall Islands",
        MK: "Macedonia",
        ML: "Mali",
        MM: "Myanmar",
        MN: "Mongolia",
        MO: "Macao",
        MP: "Northern Mariana Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MS: "Montserrat",
        MT: "Malta",
        MU: "Mauritius",
        MV: "Maldives",
        MW: "Malawi",
        MX: "Mexico",
        MY: "Malaysia",
        MZ: "Mozambique",
        NA: "Namibia",
        NC: "New Caledonia",
        NE: "Niger",
        NF: "Norfolk Island",
        NG: "Nigeria",
        NI: "Nicaragua",
        NL: "Netherlands",
        NO: "Norway",
        NP: "Nepal",
        NR: "Nauru Central Pacific",
        NU: "Niue",
        NZ: "New Zealand",
        OM: "Oman",
        PA: "Panama (rep.)",
        PE: "Peru",
        PF: "French Polynesia",
        PG: "Papua New Guinea",
        PH: "Philippines",
        PK: "Pakistan",
        PL: "Poland",
        PM: "St. Pierre And Miquelon",
        PN: "Pitcairn",
        PR: "Puerto Rico",
        PS: "Palestinian Territory",
        PT: "Portugal",
        PW: "Palau",
        PY: "Paraguay",
        QA: "Qatar",
        RE: "Reunion",
        RO: "Romania",
        RS: "Republic Of Serbia",
        RU: "Russian Federation",
        RW: "Rwanda",
        SA: "Saudi Arabia",
        SB: "Solomon Islands",
        SC: "Seychelles",
        SE: "Sweden",
        SG: "Rep. Of Singapore",
        SH: "Saint Helena",
        SI: "Slovenia",
        SJ: "Svalbard And Jan Mayen Islands",
        SK: "Slovakia",
        SL: "Sierra Leone",
        SM: "San Marino",
        SN: "Senegal",
        SO: "Somalia",
        SR: "Suriname",
        SS: "South Sudan",
        ST: "Sao Tome And Principe",
        SV: "El Salvador",
        SX: "Sint Maarten",
        SZ: "Swaziland",
        TC: "Turks And Caicos Islands",
        TD: "Chad",
        TF: "French Southern Territories",
        TG: "Togo",
        TH: "Thailand",
        TJ: "Tajikistan",
        TK: "Tokelau",
        TL: "Timor-leste",
        TM: "Turkmenistan",
        TN: "Tunisia",
        TO: "Tonga",
        TR: "Turkey",
        TT: "Trinidad And Tobago",
        TV: "Tuvalu",
        TW: "Taiwan",
        TZ: "Tanzania (united Rep.)",
        UA: "Ukraine",
        UG: "Uganda",
        UM: "United States Minor Outlying Islands",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VA: "Vatican",
        VC: "Saint Vincent And The Grenadines (antilles)",
        VE: "Venezuela",
        VG: "Virgin Islands (british)",
        VI: "Virgin Islands (u.s.)",
        VN: "Viet Nam",
        VU: "Vanuatu",
        WF: "Wallis And Futuna Islands",
        WS: "Samoa",
        YE: "Yemen",
        YT: "Mayotte",
        ZA: "South Africa",
        ZM: "Zambia",
        ZW: "Zimbabwe"
    };
    function rh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function nh(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? rh(Object(r), !0).forEach((function(t) {
                ih(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rh(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function ih(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    var oh, ah, sh, ch, uh, lh, dh, hh = {
        amount: "string",
        label: "string"
    }, ph = {
        amount: "string",
        id: "string",
        label: "string"
    }, fh = {};
    function gh(e, t) {
        var {lineItems: r, taxLineItems: n, discounts: i, shippingLineItems: o} = e
          , a = !1
          , s = []
          , c = r
          , u = n
          , l = o
          , d = vh(i);
        return void 0 === t || void 0 === r && void 0 === n && void 0 === o && void 0 === d || (null != c || (c = t.lineItems),
        null != u || (u = t.taxLineItems),
        null != d || (d = vh(t.discounts)),
        null != l || (l = t.shippingLineItems)),
        [c, u, d, l].forEach((e => {
            void 0 !== e && (a = !0,
            s.push(...e))
        }
        )),
        a ? s : void 0
    }
    function vh(e) {
        return void 0 === e ? e : e.map((e => nh(nh({}, e), {}, {
            amount: "-".concat(e.amount)
        })))
    }
    function mh(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function yh(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    mh(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    mh(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    function Eh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function _h(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    class bh {
        constructor(e, t, r) {
            this.eventTarget = new eh,
            this.metricsBuffer = [],
            this.localeStrings = t,
            this._requestBillingContact = Boolean(e.requestBillingContact),
            this._requestShippingContact = Boolean(e.requestShippingContact),
            this._countryCode = e.countryCode,
            this._currencyCode = e.currencyCode,
            this._lineItems = e.lineItems,
            this._shippingLineItems = e.shippingLineItems,
            this._taxLineItems = e.taxLineItems,
            this._discounts = e.discounts,
            this._total = e.total,
            this._shippingOptions = e.shippingOptions,
            this._shippingContact = e.shippingContact,
            this._pickupContact = e.pickupContact,
            this.updateLock = r,
            Sh(this)
        }
        get requestBillingContact() {
            return this._requestBillingContact
        }
        get requestShippingContact() {
            return this._requestShippingContact
        }
        get countryCode() {
            return this._countryCode
        }
        get currencyCode() {
            return this._currencyCode
        }
        get lineItems() {
            return this._lineItems
        }
        get pickupContact() {
            return this._pickupContact
        }
        get shippingLineItems() {
            return this._shippingLineItems
        }
        get taxLineItems() {
            return this._taxLineItems
        }
        get discounts() {
            return this._discounts
        }
        get total() {
            return this._total
        }
        get shippingOptions() {
            return this._shippingOptions
        }
        get shippingContact() {
            return this._shippingContact
        }
        update(e) {
            var t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Eh(Object(r), !0).forEach((function(t) {
                        _h(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eh(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }({
                countryCode: this.countryCode,
                currencyCode: this.currencyCode,
                discounts: this.discounts,
                lineItems: this.lineItems,
                pickupContact: this.pickupContact,
                requestBillingContact: this.requestBillingContact,
                requestShippingContact: this.requestShippingContact,
                shippingContact: this.shippingContact,
                shippingLineItems: this.shippingLineItems,
                shippingOptions: this.shippingOptions,
                taxLineItems: this.taxLineItems,
                total: this.total
            }, e)
              , r = new bh(t,this.localeStrings,this.updateLock);
            return Sh(r),
            !this.updateLock.isLocked && (void 0 !== e.requestBillingContact && (this._requestBillingContact = Boolean(e.requestBillingContact)),
            void 0 !== e.requestShippingContact && (this._requestShippingContact = Boolean(e.requestShippingContact)),
            void 0 !== e.countryCode && (this._countryCode = e.countryCode),
            void 0 !== e.currencyCode && (this._currencyCode = e.currencyCode),
            e.lineItems && (this._lineItems = e.lineItems),
            e.shippingLineItems && (this._shippingLineItems = e.shippingLineItems),
            e.taxLineItems && (this._taxLineItems = e.taxLineItems),
            e.discounts && (this._discounts = e.discounts),
            e.total && (this._total = e.total),
            e.pickupContact && (this._pickupContact = e.pickupContact),
            e.shippingOptions && (this._shippingOptions = e.shippingOptions),
            e.shippingContact && (this._shippingContact = e.shippingContact),
            this.eventTarget.dispatchEvent(Bc.UPDATE, r),
            this.logMetrics("CONFIG_UPDATED", t),
            !0)
        }
        addEventListener(e, t) {
            switch (uo(qi).includes(e) && this.logMetrics("EVENT_LISTENER_ADDED", e),
            e) {
            case qi.SHIPPING_CONTACT_CHANGED:
                this.shippingContactEventListener(t);
                break;
            case qi.SHIPPING_OPTION_CHANGED:
                this.shippingOptionEventListener(t);
                break;
            case Bc.UPDATE:
                this.updateEventListener(t);
                break;
            case Hn.AFTERPAY_SHIPPING_ADDRESS_CHANGED:
                this.afterpayShippingContactEventListener(t);
                break;
            case Hn.AFTERPAY_SHIPPING_OPTION_CHANGED:
                this.afterpayShippingOptionEventListener(t);
                break;
            default:
                throw new fs("PaymentRequest.addEventListener","event","PaymentRequestEvent")
            }
        }
        dispatchEvent(e, t, r) {
            return this.eventTarget.dispatchEvent(e, t, (t => {
                if (uo(Hn).includes(e)) {
                    var n = function(e) {
                        if (void 0 !== e.error)
                            return {
                                isValid: !0,
                                missingFields: []
                            };
                        if (void 0 !== e.shippingErrors)
                            return {
                                isValid: !0,
                                missingFields: []
                            };
                        if (void 0 === e.shippingOptions)
                            return {
                                isValid: !1,
                                missingFields: [["paymentRequestUpdate.shippingOptions", "array"]]
                            };
                        var t = Wc(e.shippingOptions, "shippingOptions", {
                            amount: "string",
                            id: "string",
                            label: "string",
                            total: "object"
                        });
                        if (!t.isValid)
                            return t;
                        for (var r of e.shippingOptions) {
                            if (!(t = $c({
                                "shippingOptions.total": r.total
                            }, {
                                "shippingOptions.total": hh
                            })).isValid)
                                return t;
                            if (void 0 !== r.taxLineItems && !(t = Wc(r.taxLineItems, "shippingOptions.taxLineItems", hh)).isValid)
                                return t
                        }
                        return {
                            isValid: !0,
                            missingFields: []
                        }
                    }(t);
                    if (!n.isValid)
                        throw new ri(n.missingFields);
                    r(t)
                } else {
                    var i = function(e) {
                        var {lineItems: t, discounts: r, taxLineItems: n, shippingLineItems: i, shippingErrors: o, shippingOptions: a, error: s, total: c} = e;
                        if (t) {
                            var u = Wc(t, "lineItem", hh);
                            if (!u.isValid)
                                return u
                        }
                        if (r) {
                            var l = Wc(r, "discounts", hh);
                            if (!l.isValid)
                                return l
                        }
                        if (n) {
                            var d = Wc(n, "taxLineItems", hh);
                            if (!d.isValid)
                                return d
                        }
                        if (i) {
                            var h = Wc(i, "shippingLineItems", hh);
                            if (!h.isValid)
                                return h
                        }
                        if (a) {
                            var p = Wc(a, "shippingOption", ph);
                            if (!p.isValid)
                                return p
                        }
                        if (c) {
                            var f = $c({
                                total: c
                            }, {
                                total: hh
                            });
                            if (!f.isValid)
                                return f
                        }
                        if (void 0 !== s && "string" != typeof s)
                            return {
                                isValid: !1,
                                missingFields: [["error", "string"]]
                            };
                        if (o) {
                            var g = $c(o, fh);
                            if (!g.isValid)
                                return g
                        }
                        return {
                            isValid: !0,
                            missingFields: []
                        }
                    }(t);
                    if (!i.isValid)
                        throw new ri(i.missingFields);
                    r(t)
                }
            }
            ))
        }
        hasEventListener(e) {
            return this.eventTarget.hasEventListener(e)
        }
        setMetricsHandler(e) {
            this.metricsHandler = e,
            this.metricsBuffer.length > 0 && (this.metricsBuffer.forEach((t => {
                var [r,n] = t;
                e.logEvent(r, n)
            }
            )),
            this.metricsBuffer = [])
        }
        shippingContactEventListener(e) {
            var t = this;
            this.eventTarget.addEventListener(qi.SHIPPING_CONTACT_CHANGED, function() {
                var r = yh((function*(r) {
                    var {contactOrOption: n} = r.detail;
                    try {
                        return yield e(n)
                    } catch (e) {
                        return console.error("ShippingContactUpdateError", e),
                        {
                            error: t.localeStrings.getLocaleString().paymentMethods.wallets.callbackErrors.contactError
                        }
                    }
                }
                ));
                return function(e) {
                    return r.apply(this, arguments)
                }
            }())
        }
        shippingOptionEventListener(e) {
            var t = this;
            this.eventTarget.addEventListener(qi.SHIPPING_OPTION_CHANGED, function() {
                var r = yh((function*(r) {
                    var {contactOrOption: n} = r.detail;
                    try {
                        return yield e(n)
                    } catch (e) {
                        return console.error("ShippingOptionUpdateError", e),
                        {
                            error: t.localeStrings.getLocaleString().paymentMethods.wallets.callbackErrors.optionsError
                        }
                    }
                }
                ));
                return function(e) {
                    return r.apply(this, arguments)
                }
            }())
        }
        afterpayShippingContactEventListener(e) {
            var t = this;
            this.eventTarget.addEventListener(Hn.AFTERPAY_SHIPPING_ADDRESS_CHANGED, function() {
                var r = yh((function*(r) {
                    var {contactOrOption: n} = r.detail;
                    try {
                        return yield e(n)
                    } catch (e) {
                        return console.error("AfterpayShippingContactUpdateError", e),
                        {
                            error: t.localeStrings.getLocaleString().paymentMethods.wallets.callbackErrors.optionsError
                        }
                    }
                }
                ));
                return function(e) {
                    return r.apply(this, arguments)
                }
            }())
        }
        afterpayShippingOptionEventListener(e) {
            this.eventTarget.addEventListener(Hn.AFTERPAY_SHIPPING_OPTION_CHANGED, (t => {
                e(t.detail.contactOrOption)
            }
            ))
        }
        updateEventListener(e) {
            this.eventTarget.addEventListener(Bc.UPDATE, (t => {
                e(t.detail)
            }
            ))
        }
        logMetrics(e, t) {
            this.metricsHandler ? this.metricsHandler.logEvent(e, t) : this.metricsBuffer.push([e, t])
        }
    }
    function Ih(e) {
        return Boolean(e.shippingOptions && e.shippingOptions.length > 0)
    }
    function Sh(e) {
        var {isValid: t, missingFields: r} = $c(e, {
            countryCode: "string",
            currencyCode: "string",
            total: {
                amount: "string",
                label: "string"
            }
        })
          , n = [];
        if (e.countryCode in th || n.push("Country code '".concat(e.countryCode, "' is not a valid ISO country code.")),
        !t || n.length > 0)
            throw new ti(r,n)
    }
    function wh(e, t) {
        return new Intl.NumberFormat(c.windowNavigationLanguage,{
            currency: t,
            style: "currency"
        }).format(Number.parseFloat(e))
    }
    function Oh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Ch(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Oh(Object(r), !0).forEach((function(t) {
                Th(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oh(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Th(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    !function(e) {
        e.Final = "FINAL",
        e.Estimated = "ESTIMATED",
        e.Unknown = "NOT_CURRENTLY_KNOWN"
    }(oh || (oh = {})),
    function(e) {
        e.INITIALIZE = "INITIALIZE",
        e.PAYMENT_AUTHORIZATION = "PAYMENT_AUTHORIZATION",
        e.SHIPPING_ADDRESS = "SHIPPING_ADDRESS",
        e.SHIPPING_OPTION = "SHIPPING_OPTION"
    }(ah || (ah = {})),
    function(e) {
        e.FULL = "FULL",
        e.MIN = "MIN"
    }(sh || (sh = {})),
    function(e) {
        e.CARD = "CARD"
    }(ch || (ch = {})),
    function(e) {
        e.PAYMENT_GATEWAY = "PAYMENT_GATEWAY"
    }(uh || (uh = {})),
    function(e) {
        e.SUCCESS = "SUCCESS"
    }(lh || (lh = {})),
    function(e) {
        e.TEST = "TEST",
        e.PRODUCTION = "PRODUCTION"
    }(dh || (dh = {}));
    var Ah = ["PAN_ONLY", "CRYPTOGRAM_3DS"]
      , Ph = ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"];
    function Rh(e) {
        return {
            label: e.label,
            price: e.amount,
            status: !0 === e.pending ? oh.Estimated : oh.Final,
            type: "LINE_ITEM"
        }
    }
    function Nh(e, t) {
        var r = null != t ? t : e;
        return r ? r.map((e => Rh(e))) : []
    }
    function Dh(e, t) {
        return t.map((t => function(e, t) {
            return {
                description: wh(t.amount, e),
                id: t.id,
                label: t.label
            }
        }(e, t)))
    }
    function Lh(e, t, r, n) {
        var i = null != n ? n : r;
        if (i && i.length > 0) {
            var o = {
                shippingOptions: Dh(e, i)
            };
            return i.some((e => e.id === t)) && (o.defaultSelectedOptionId = t),
            o
        }
    }
    function xh(e, t) {
        return null == t ? void 0 : t.find((t => t.id === e))
    }
    function kh(e, t, r, n, i, o) {
        var {countryCode: a, currencyCode: s, total: c, lineItems: u, taxLineItems: l, discounts: d, requestBillingContact: h, requestShippingContact: p, shippingOptions: f} = t
          , g = Ih(t)
          , v = Boolean(p || g)
          , m = Ch(Ch({}, e), {}, {
            emailRequired: Boolean(h),
            merchantInfo: i,
            shippingAddressRequired: v,
            shippingOptionRequired: g,
            transactionInfo: {
                countryCode: a,
                currencyCode: s,
                totalPrice: c.amount,
                totalPriceLabel: c.label,
                totalPriceStatus: n
            }
        });
        if (u && u.length > 0 && (m.transactionInfo.displayItems = Nh([], gh({
            discounts: d,
            lineItems: u,
            taxLineItems: l
        }, t))),
        v && (m.shippingAddressParameters = {
            phoneNumberRequired: !0
        }),
        g) {
            var y = Lh(s, o, [], f);
            y && (m.shippingOptionParameters = y)
        }
        return r.length > 0 && (m.callbackIntents = r),
        m
    }
    function Mh(e, t) {
        var r = [];
        return void 0 !== e.error && r.push({
            intent: t,
            message: e.error,
            reason: Bi.SHIPPING_ADDRESS_UNSERVICEABLE
        }),
        e.shippingErrors && Object.entries(e.shippingErrors).forEach((e => {
            var [n,i] = e;
            r.push({
                intent: t,
                message: "".concat(n, ": ").concat(i),
                reason: Bi.SHIPPING_ADDRESS_INVALID
            })
        }
        )),
        r
    }
    function jh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Uh(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? jh(Object(r), !0).forEach((function(t) {
                Hh(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jh(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Hh(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function Bh(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function Fh(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    Bh(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    Bh(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var qh = ["#google"];
    class Vh extends Cs {
        constructor(e, t, r, n, i) {
            var o;
            super(r),
            this.methodType = Fi.GOOGLE_PAY,
            this.shippingOptions = void 0,
            this.wasFirstInteractionCalled = !1,
            this.validateConfiguration(),
            this.paymentRequestLockController = i,
            this.req = t,
            this.merchantInfo = n,
            this.element = null,
            this.paymentMethodMessenger = new oc(r),
            Ih(this.req) && (this.shippingOptions = this.req.shippingOptions,
            this.selectedShippingOptionId = null === (o = this.req.shippingOptions) || void 0 === o ? void 0 : o[0].id),
            this.callbackIntents = function(e, t) {
                var r = []
                  , n = Ih(e) && t.includes(qi.SHIPPING_OPTION_CHANGED)
                  , i = e.requestShippingContact && t.includes(qi.SHIPPING_CONTACT_CHANGED);
                return n ? r.push(ah.SHIPPING_ADDRESS, ah.SHIPPING_OPTION) : i && r.push(ah.SHIPPING_ADDRESS),
                (!c.isAndroid() || n || i) && r.push(ah.PAYMENT_AUTHORIZATION),
                r
            }(this.req, this.handlers);
            var a, s, u, l, d = function(e, t, r, n) {
                var i = dh.TEST;
                "production" !== qn.env || e.isTestMerchant || (i = dh.PRODUCTION);
                var o = {
                    environment: i,
                    merchantInfo: n
                }
                  , a = t.includes(ah.SHIPPING_OPTION) || t.includes(ah.SHIPPING_ADDRESS);
                if (!c.isAndroid() || a) {
                    var s = {
                        onPaymentAuthorized: () => ({
                            transactionState: lh.SUCCESS
                        })
                    };
                    a && (s.onPaymentDataChanged = r),
                    o.paymentDataCallbacks = s
                }
                return o
            }(r, this.callbackIntents, this.onPaymentDataChanged.bind(this), this.merchantInfo);
            this.googlePayClient = new e.api.PaymentsClient(d),
            this.isReadyToPayRequest = (a = this.session.applicationId,
            s = this.req.requestBillingContact,
            u = this.context.getFeatureFlagValues().can_use_interac,
            l = [...Ph],
            u && l.push("INTERAC"),
            {
                allowedPaymentMethods: [{
                    parameters: {
                        allowedAuthMethods: Ah,
                        allowedCardNetworks: l,
                        billingAddressParameters: {
                            format: s ? sh.FULL : sh.MIN,
                            phoneNumberRequired: Boolean(s)
                        },
                        billingAddressRequired: !0
                    },
                    tokenizationSpecification: {
                        parameters: {
                            gateway: "square",
                            gatewayMerchantId: a
                        },
                        type: uh.PAYMENT_GATEWAY
                    },
                    type: ch.CARD
                }],
                apiVersion: 2,
                apiVersionMinor: 0
            })
        }
        get handlers() {
            var e = [];
            return this.req.hasEventListener(qi.SHIPPING_OPTION_CHANGED) && e.push(qi.SHIPPING_OPTION_CHANGED),
            this.req.hasEventListener(qi.SHIPPING_CONTACT_CHANGED) && e.push(qi.SHIPPING_CONTACT_CHANGED),
            e
        }
        attach(e, t) {
            var r = this;
            return Fh((function*() {
                var n, i, o;
                r.throwIfDestroyedOrAlreadyAttached(),
                r.status = bs.ATTACHED;
                var a = null !== (n = null == t ? void 0 : t.buttonColor) && void 0 !== n ? n : ji.DEFAULT
                  , s = null !== (i = null == t ? void 0 : t.buttonSizeMode) && void 0 !== i ? i : Ui.STATIC
                  , c = null !== (o = null == t ? void 0 : t.buttonType) && void 0 !== o ? o : Hi.LONG;
                r.metricsHandler.logEvent("ATTACH:START"),
                r.metricsHandler.logEvent("CONFIGURED", t);
                try {
                    r.element = kc(e)
                } catch (e) {
                    throw r.status = bs.DETACHED,
                    r.metricsHandler.logEvent("ATTACH:ERROR", "good"),
                    e
                }
                r.isReadyToPay = yield r.checkIfReadyToPay("ATTACH:ERROR", !0);
                try {
                    var u = r.googlePayClient.createButton({
                        buttonColor: a,
                        buttonSizeMode: s,
                        buttonType: c,
                        onClick: () => {}
                    });
                    r.element.appendChild(u),
                    r.metricsHandler.logEvent("ATTACH:OK", "good")
                } catch (e) {
                    throw r.status = bs.DETACHED,
                    r.maybeHandleDeveloperError(e, "createButton", "ATTACH:ERROR", !0),
                    new mi(hs)
                }
            }
            ))()
        }
        detach() {
            return this.throwIfDestroyedOrNotAttached(),
            this.detachElement(bs.DETACHED, "DETACHED"),
            Promise.resolve(!0)
        }
        destroy() {
            return this.status === bs.DESTROYED ? Promise.resolve(!1) : (this.detachElement(bs.DESTROYED, "DESTROYED"),
            Promise.resolve(!0))
        }
        tokenize() {
            var e = this;
            return Fh((function*() {
                var t, r;
                e.throwIfDestroyed(),
                e.handleFirstInteraction(),
                e.metricsHandler.logEvent("EXTERNAL_SESSION:START"),
                e.isReadyToPay = null !== (t = e.isReadyToPay) && void 0 !== t ? t : yield e.checkIfReadyToPay("EXTERNAL_SESSION:ERROR", !1),
                e.paymentRequestLockController.lock(e);
                try {
                    r = yield e.loadPaymentData(),
                    delete e.googlePayTokenDeferred,
                    e.metricsHandler.logEvent("EXTERNAL_SESSION:OK")
                } catch (t) {
                    if (delete e.googlePayTokenDeferred,
                    e.paymentRequestLockController.unlock(e),
                    function(e) {
                        return null !== e && "object" == typeof e && "statusCode"in e
                    }(t) && "CANCELED" === t.statusCode)
                        return e.metricsHandler.logEvent("EXTERNAL_SESSION:CANCEL"),
                        {
                            status: Vi.CANCEL
                        };
                    throw e.metricsHandler.logEvent("EXTERNAL_SESSION:ERROR"),
                    e.errorLogger.captureException(e.asInternalError(t), {
                        context: "loadPaymentData"
                    }),
                    new Ai("tokenizing Google Pay.")
                }
                var {token: n, details: i} = yield e.requestGooglePayCardNonce(r);
                return {
                    details: i,
                    status: Vi.OK,
                    token: n
                }
            }
            ))()
        }
        validateConfiguration() {
            var e = qh.join(", ");
            if (document.querySelectorAll(e).length > 0)
                throw new Ii(this.methodType,e)
        }
        checkIfReadyToPay(e, t) {
            var r = this;
            return Fh((function*() {
                var n = !1;
                try {
                    var {result: i} = yield r.googlePayClient.isReadyToPay(r.isReadyToPayRequest);
                    (n = i) || r.metricsHandler.logEvent(e, t ? "good" : void 0)
                } catch (n) {
                    r.maybeHandleDeveloperError(n, "isReadyToPay", e, t)
                }
                if (n) {
                    var o = r.callbackIntents.length > 0 ? oh.Unknown : oh.Final;
                    try {
                        return r.googlePayClient.prefetchPaymentData(kh(r.isReadyToPayRequest, r.req, r.callbackIntents, o, r.merchantInfo, r.selectedShippingOptionId)),
                        n
                    } catch (n) {
                        r.maybeHandleDeveloperError(n, "prefetchPaymentData", e, t)
                    }
                }
                throw new mi(ss)
            }
            ))()
        }
        loadPaymentData() {
            return this.googlePayTokenDeferred || (this.googlePayTokenDeferred = this.googlePayClient.loadPaymentData(kh(this.isReadyToPayRequest, this.req, this.callbackIntents, oh.Final, this.merchantInfo, this.selectedShippingOptionId))),
            this.googlePayTokenDeferred
        }
        onPaymentDataChanged(e) {
            switch (e.callbackTrigger) {
            case ah.INITIALIZE:
            case ah.SHIPPING_ADDRESS:
                return this.onPaymentDataChangedShippingAddress(e);
            case ah.SHIPPING_OPTION:
                return this.onPaymentDataChangedShippingOption(e);
            default:
                return this.errorLogger.captureException(new Co("Unknown callbackTrigger: ".concat(e.callbackTrigger),Fi.GOOGLE_PAY)),
                Promise.resolve({})
            }
        }
        onPaymentDataChangedShippingOption(e) {
            var t = this;
            return Fh((function*() {
                var r;
                t.selectedShippingOptionId = null === (r = e.shippingOptionData) || void 0 === r ? void 0 : r.id;
                var {updatedOptionRequest: n, optionErrors: i} = yield t.dispatchShippingOptionChanged(t.selectedShippingOptionId, t.shippingOptions);
                return t.paymentDataChangedComplete(n, i)
            }
            ))()
        }
        dispatchShippingOptionChanged(e, t) {
            var r = this
              , n = {
                optionErrors: [],
                updatedOptionRequest: {}
            };
            if (!this.handlers.includes(qi.SHIPPING_OPTION_CHANGED))
                return Promise.resolve(n);
            var i = xh(e, t);
            return i ? this.status === bs.DESTROYED ? Promise.resolve({
                optionErrors: [{
                    intent: ah.SHIPPING_OPTION,
                    message: "An error occurred when attempting to submit payment, please close this window and try again.",
                    reason: Bi.PAYMENT_METHOD_DESTROYED
                }],
                updatedOptionRequest: {}
            }) : new Promise((e => {
                this.req.dispatchEvent(qi.SHIPPING_OPTION_CHANGED, {
                    contactOrOption: i
                }, (function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    r.metricsHandler.logEvent("EVENT_LISTENER_ON_COMPLETE_RESPONSE", Uh(Uh({}, t), {}, {
                        eventName: qi.SHIPPING_OPTION_CHANGED
                    })),
                    r.metricsHandler.logEvent("SHIPPING_OPTION_CHANGE:OK"),
                    e({
                        optionErrors: Mh(t, ah.SHIPPING_OPTION),
                        updatedOptionRequest: t
                    })
                }
                ))
            }
            )) : Promise.resolve(n)
        }
        onPaymentDataChangedShippingAddress(e) {
            var t = this;
            return Fh((function*() {
                var {updatedContactRequest: r, contactErrors: n} = yield t.dispatchShippingContactChanged(e);
                if (void 0 === t.req.shippingOptions || 0 === t.req.shippingOptions.length)
                    return t.paymentDataChangedComplete(r, n);
                var i, {shippingOptions: o} = t;
                r.shippingOptions ? (o = r.shippingOptions,
                t.selectedShippingOptionId = r.shippingOptions[0].id) : t.selectedShippingOptionId = null === (i = t.shippingOptions) || void 0 === i ? void 0 : i[0].id;
                var {updatedOptionRequest: a, optionErrors: s} = yield t.dispatchShippingOptionChanged(t.selectedShippingOptionId, o)
                  , c = Uh(Uh({}, r), a)
                  , u = [...n, ...s];
                return t.paymentDataChangedComplete(c, u)
            }
            ))()
        }
        dispatchShippingContactChanged(e) {
            var t = this
              , r = {
                contactErrors: [],
                updatedContactRequest: {}
            };
            return new Promise((n => {
                var i;
                void 0 !== e.shippingAddress && this.handlers.includes(qi.SHIPPING_CONTACT_CHANGED) ? this.status !== bs.DESTROYED ? this.req.dispatchEvent(qi.SHIPPING_CONTACT_CHANGED, {
                    contactOrOption: (i = e.shippingAddress,
                    {
                        city: i.locality,
                        countryCode: i.countryCode,
                        postalCode: i.postalCode,
                        state: i.administrativeArea
                    })
                }, (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.metricsHandler.logEvent("EVENT_LISTENER_ON_COMPLETE_RESPONSE", Uh(Uh({}, e), {}, {
                        eventName: qi.SHIPPING_CONTACT_CHANGED
                    })),
                    t.metricsHandler.logEvent("SHIPPING_ADDRESS_CHANGE:OK"),
                    n({
                        contactErrors: Mh(e, ah.SHIPPING_ADDRESS),
                        updatedContactRequest: e
                    })
                }
                )) : n({
                    contactErrors: [{
                        intent: ah.SHIPPING_ADDRESS,
                        message: "An error occurred when attempting to submit payment, please close this window and try again.",
                        reason: Bi.PAYMENT_METHOD_DESTROYED
                    }],
                    updatedContactRequest: {}
                }) : n(r)
            }
            ))
        }
        paymentDataChangedComplete(e, t) {
            e.shippingOptions && e.shippingOptions.length > 0 && (this.shippingOptions = e.shippingOptions);
            var r = function(e, t, r, n) {
                var i, {total: o, countryCode: a, currencyCode: s} = t, c = r, u = Rh(null !== (i = e.total) && void 0 !== i ? i : o), l = {
                    countryCode: a,
                    currencyCode: s,
                    totalPrice: u.price,
                    totalPriceLabel: u.label,
                    totalPriceStatus: u.status
                }, d = Nh(gh(t), gh(e, t));
                d.length > 0 && (l.displayItems = d);
                var h = {
                    newTransactionInfo: l
                }
                  , p = Lh(s, n, c, e.shippingOptions);
                return p && (h.newShippingOptionParameters = p),
                h
            }(e, this.req, this.shippingOptions, this.selectedShippingOptionId);
            return t.length > 0 && (r.error = t[0]),
            r
        }
        requestGooglePayCardNonce(e) {
            var t = this;
            return Fh((function*() {
                var r = xh(t.selectedShippingOptionId, t.shippingOptions);
                yield t.context.waitForProofOfWorkCompletion();
                try {
                    var n = yield t.paymentMethodMessenger.request("REQUEST_GOOGLE_PAY_CARD_NONCE", e);
                    return t.context.setPaymentMethodTrackingId(n.paymentMethodTrackingId),
                    t.wasFirstInteractionCalled = !1,
                    t.paymentRequestLockController.unlock(t),
                    function(e, t) {
                        var {card: r, cardNonce: n, shippingContact: i, billingContact: o} = e
                          , a = {
                            details: {
                                card: r,
                                method: Fi.GOOGLE_PAY
                            },
                            token: n
                        };
                        return i && (a.details.shipping = {
                            contact: i
                        },
                        t && (a.details.shipping.option = t)),
                        o && (a.details.card && (a.details.card.billing = o),
                        a.details.billing = o),
                        a
                    }(n, r)
                } catch (e) {
                    throw t.paymentRequestLockController.unlock(t),
                    e instanceof Ti || t.errorLogger.captureException(e),
                    e
                }
            }
            ))()
        }
        handleFirstInteraction() {
            this.wasFirstInteractionCalled || (this.wasFirstInteractionCalled = !0,
            this.metricsHandler.logEvent("FIRST_INTERACTION:OK"))
        }
        detachElement(e, t) {
            this.element && (this.element.innerHTML = ""),
            this.status = e,
            this.metricsHandler.logEvent(t)
        }
        asInternalError(e) {
            return e instanceof Error ? e : new Co(JSON.stringify(e),this.methodType)
        }
        maybeHandleDeveloperError(e, t, r, n) {
            var i = function(e) {
                if (e instanceof Error)
                    return "SecurityError" === e.name ? new mi(ls) : void 0;
                var t = e;
                return "DEVELOPER_ERROR" === t.statusCode && t.statusMessage.includes("secure context") ? new mi(cs) : void 0
            }(e)
              , o = void 0 !== i ? "good" : "bad";
            if (this.metricsHandler.logEvent(r, n ? o : void 0),
            void 0 !== i)
                throw i;
            this.errorLogger.captureException(this.asInternalError(e), {
                context: t
            })
        }
    }
    function Gh() {
        return (Gh = Fh((function*(e, t) {
            return {
                authJwt: (yield e.request("GENERATE_GOOGLE_PAY_AUTH_TOKEN", {
                    session: t
                })).token,
                merchantId: "05498866192997955200",
                merchantName: t.merchantName
            }
        }
        ))).apply(this, arguments)
    }
    var zh = function(e) {
        var t = function(e, t) {
            return Gh.apply(this, arguments)
        }(e.messenger, e.getSession())
          , r = fc.load("google-link", {
            src: "https://pay.google.com/gp/p/js/pay.js"
        }, "google.payments", e.errorLogger);
        return Promise.all([r, t])
    };
    class $h {
        constructor() {
            this.lockSet = new Set
        }
        get isLocked() {
            return this.lockSet.size > 0
        }
        lock(e) {
            this.lockSet.add(e)
        }
        unlock(e) {
            this.lockSet.delete(e)
        }
    }
    class Wh extends Error {
        constructor(e, t) {
            super(e),
            this.name = t,
            this.type = "VERIFY_BUYER_DEVELOPER_ERROR"
        }
    }
    const Yh = function() {
        return new Wh("The Analytics library must be initialized with analyticsParameters to call verifyBuyer.","AnalyticsParametersRequiredError")
    }
      , Kh = function(e, t) {
        return new Wh(`The Analytics '${e}' argument must be of type '${t}'`,"InvalidArgumentError")
    }
      , Xh = function(e, t) {
        return new Wh(`An element with selector ${e} must be of type '${t}'`,"InvalidElementTypeError")
    }
      , Jh = function(e, t, r) {
        return new Wh(`The '${e}' function '${t}' argument must be of type '${r}'.`,"InvalidFunctionArgumentError")
    }
      , Zh = function(e, t) {
        return new Wh(`The '${e}' '${t}' callback must be a function.`,"InvalidFunctionCallbackError")
    }
      , Qh = function(e) {
        return new Wh(`The Analytics '${e}' argument is required.`,"MissingArgumentError")
    }
      , ep = function(e, t) {
        return new Wh(`The '${e}' '${t}' is required when verificationDetails.intent is 'CHARGE'.`,"MissingChargeVerificationArgumentError")
    }
      , tp = function(e, t) {
        return new Wh(`An element with selector '${e}' attribute '${t}' is required`,"MissingElementAttributeError")
    }
      , rp = function(e) {
        return new Wh(`An element with selector '${e}' cannot be found.`,"MissingElementError")
    }
      , np = function(e, t) {
        return new Wh(`The '${e}' '${t}' argument is required.`,"MissingFunctionArgumentError")
    }
      , ip = function(e, t) {
        return new Wh(`The '${e}' '${t}' callback is required.`,"MissingFunctionCallbackError")
    }
      , op = function() {
        return new Wh("One of analyticsParameters.locationId or analyticsParameters.accountId must be specified.","NoIdsError")
    }
      , ap = function(e, t, r, n, i=!1) {
        return new Wh(`The '${e}' function '${t}' argument must be within range: ${r} and ${n} (${(i ? "inclusive" : "exclusive") + " of upper limit"}).`,"OutOfRangeArgumentError")
    }
      , sp = function() {
        return new Wh("Only one of analyticsParameters.locationId or analyticsParameters.accountId can be specified.","TooManyIdsError")
    }
      , cp = function() {
        const e = new Error("An unknown error has occurred");
        return e.name = "UnexpectedAnalyticsClientError",
        e
    };
    class up extends Error {
        constructor(e="Unknown error", t) {
            super(e),
            void 0 !== t && (this.token = t),
            this.name = "AnalyticsError"
        }
    }
    class lp extends up {
        constructor() {
            super("Three ds method timed out while waiting for a response"),
            this.name = "ThreeDSMethodTimeoutError"
        }
    }
    class dp extends up {
        constructor() {
            super("Form is no longer connected"),
            this.name = "ThreeDSMethodFormError"
        }
    }
    class hp extends up {
        constructor() {
            super("Three ds method failed with unexpected error"),
            this.name = "ThreeDSMethodError"
        }
    }
    class pp extends up {
        constructor(e, t) {
            super(`Received 3DS method response with transaction ID ${e}, expected ${t}`),
            this.name = "ThreeDSMethodTransactionIdError"
        }
    }
    class fp {
        constructor(e) {
            this.iframeInputs = e,
            this.eventListenerReference = this.handleResponse.bind(this)
        }
        async handle() {
            const e = new Promise(( (e, t) => {
                this.threeDSPromiseResolve = e,
                this.threeDSPromiseReject = t
            }
            ));
            return this.build(),
            this.submit(),
            e
        }
        build() {
            void 0 !== this.iframeInputs.iframeSelector && document.querySelector(this.iframeInputs.iframeSelector) ? this.iframe = document.querySelector(this.iframeInputs.iframeSelector) : this.buildDefault();
            const e = `${this.iframeInputs.baseID}-form`;
            if (document.getElementById(e))
                this.form = document.getElementById(e);
            else {
                this.form = document.createElement("form"),
                this.form.setAttribute("id", e),
                this.form.setAttribute("name", `${this.iframeInputs.baseName}Form`),
                this.form.setAttribute("method", "POST"),
                this.form.setAttribute("action", this.iframeInputs.notificationURL),
                this.form.setAttribute("target", this.iframe.name);
                const t = document.createElement("input");
                t.setAttribute("name", this.iframeInputs.notificationData.name),
                t.setAttribute("value", this.iframeInputs.notificationData.data),
                t.setAttribute("type", "hidden"),
                this.form.appendChild(t),
                document.body.appendChild(this.form)
            }
            window.addEventListener("message", this.eventListenerReference)
        }
        buildDefault() {
            const e = `${this.iframeInputs.baseID}-modal`;
            document.getElementById(e) ? this.modal = document.getElementById(e) : (this.modal = document.createElement("div"),
            this.modal.id = e,
            this.modal.classList.add("square_threeds_modal"),
            document.body.appendChild(this.modal));
            const t = `${this.iframeInputs.baseID}-iframe`
              , r = document.getElementById(t);
            r && this.modal.contains(r) ? this.iframe = document.getElementById(t) : (this.iframe = document.createElement("iframe"),
            this.iframe.id = t,
            this.iframe.name = `${this.iframeInputs.baseName}Iframe`,
            this.iframe.setAttribute("frameBorder", "0"),
            this.iframe.setAttribute("width", this.iframeInputs.width),
            this.iframe.setAttribute("height", this.iframeInputs.height),
            this.iframe.setAttribute("sandbox", "allow-forms allow-scripts allow-same-origin allow-pointer-lock"),
            this.iframe.style.visibility = "hidden",
            this.iframe.setAttribute("allowpaymentrequest", "false"),
            this.iframe.setAttribute("allowfullscreen", "false"),
            this.iframe.setAttribute("allow", "payment *;publickey-credentials-get *"),
            this.iframe.classList.add("square_threeds_iframe"),
            this.modal.appendChild(this.iframe))
        }
        handleResponse(e) {
            const t = e.data;
            if ("object" == typeof t && t.type === this.iframeInputs.listenerMessageType) {
                this.destroy();
                try {
                    this.iframeInputs.validateMessage(t),
                    this.threeDSPromiseResolve(t)
                } catch (e) {
                    this.threeDSPromiseReject(e)
                }
            }
        }
        submit() {
            this.form.isConnected ? (this.form.submit(),
            void 0 !== this.iframeInputs.onShow && this.iframeInputs.onShow(this.iframe, this.modal),
            void 0 !== this.iframeInputs.timeoutSeconds && (this.timeoutID = window.setTimeout(this.timedOut.bind(this), 1e3 * this.iframeInputs.timeoutSeconds))) : (this.destroy(),
            this.threeDSPromiseReject(this.iframeInputs.getErrorMessage("SQUARE_3DS_IFRAME_FORM_DISCONNECTED")))
        }
        timedOut() {
            this.destroy(),
            this.threeDSPromiseReject(this.iframeInputs.getErrorMessage("SQUARE_3DS_IFRAME_TIMEOUT"))
        }
        destroy() {
            void 0 !== this.timeoutID && window.clearTimeout(this.timeoutID),
            window.removeEventListener("message", this.eventListenerReference),
            void 0 !== this.iframeInputs.onDestroy && this.iframeInputs.onDestroy(this.iframe),
            this.form.isConnected && this.form.remove(),
            !0 === this.modal?.isConnected && (this.iframe.isConnected && this.iframe.remove(),
            this.modal.remove())
        }
    }
    function gp(e) {
        switch (e) {
        case "SQUARE_3DS_IFRAME_TIMEOUT":
            return new lp;
        case "SQUARE_3DS_IFRAME_FORM_DISCONNECTED":
            return new dp;
        default:
            return new hp
        }
    }
    class vp {
        constructor(e) {
            if (void 0 === e.threeDsMethodUrl || void 0 === e.threeDsMethodNotificationUrl)
                throw new Error(`Cannot complete 3DS method flow, one or more of threeDSMethodUrl and threeDSMethodNotificationUrl are undefined. Transaction data: ${JSON.stringify(e)}`);
            this.threeDsMethodUrl = e.threeDsMethodUrl,
            this.threeDSMethodData = {
                threeDSMethodNotificationURL: e.threeDsMethodNotificationUrl,
                threeDSServerTransID: e.threeDSServerTransId
            },
            this.square3DSMethodIframe = new fp({
                baseID: "sq-threeds-3ds-method-" + 1e6 * Math.random(),
                baseName: "3DSMethod",
                getErrorMessage: gp,
                height: "10",
                listenerMessageType: "threeDsMethodResponse",
                notificationData: {
                    data: btoa(JSON.stringify(this.threeDSMethodData)),
                    name: "threeDSMethodData"
                },
                notificationURL: this.threeDsMethodUrl,
                timeoutSeconds: 11,
                validateMessage: this.validateMessage.bind(this),
                width: "10"
            })
        }
        async handle3DSMethod() {
            return this.square3DSMethodIframe.handle()
        }
        validateMessage(e) {
            if (e.threeDsServerTransId !== this.threeDSMethodData.threeDSServerTransID)
                throw new pp(e.threeDsServerTransId,this.threeDSMethodData.threeDSServerTransID)
        }
    }
    class mp {
        constructor(e, t) {
            this.threeDsMethodPromise = e,
            this.threeDsServerTransactionId = t
        }
        reset() {
            this.threeDsMethodPromise = void 0,
            this.threeDsServerTransactionId = void 0
        }
    }
    class yp extends up {
        constructor(e) {
            super(`The verification was not successful: ${e}`, e),
            this.name = "VerificationError",
            this.type = "VERIFICATION_NOT_SUCCESSFUL"
        }
    }
    class Ep extends up {
        constructor() {
            super("A verification request is already in progress"),
            this.name = "VerificationInProgressError",
            this.type = "VERIFICATION_IN_PROGRESS"
        }
    }
    class _p extends up {
        constructor(e) {
            super(`The time to complete the verification has expired: ${e}`),
            this.name = "VerificationTimeoutError",
            this.type = "VERIFICATION_TIMEOUT"
        }
    }
    var bp, Ip;
    !function(e) {
        e.AUTHENTICATED = "Y",
        e.AUTHENTICATION_ATTEMPTED = "A",
        e.CHALLENGE_REQUIRED = "C",
        e.DECOUPLED_CHALLENGE_REQUIRED = "D",
        e.NOT_AUTHENTICATED = "N",
        e.AUTHENTICATION_COULD_NOT_BE_PERFORMED = "U",
        e.INFORMATIONAL_ONLY = "I",
        e.REJECTED = "R"
    }(bp || (bp = {})),
    function(e) {
        e._250X400 = "01",
        e._390X400 = "02",
        e._500X600 = "03",
        e._600X400 = "04",
        e.FULL_SCREEN = "05"
    }(Ip || (Ip = {}));
    class Sp extends up {
        constructor() {
            super("Form is no longer connected"),
            this.name = "ChallengeFlowFormError"
        }
    }
    class wp extends up {
        constructor() {
            super("Challenge flow failed with unknown error"),
            this.name = "ChallengeFlowError"
        }
    }
    class Op extends up {
        constructor(e, t) {
            super(`Received Challenge response with transaction ID ${e}, expected ${t}`),
            this.name = "ChallengeResponseTransactionIdError"
        }
    }
    const Cp = "data-challenge-displayed"
      , Tp = "VISIBLE";
    function Ap(e) {
        return "SQUARE_3DS_IFRAME_FORM_DISCONNECTED" === e ? new Sp : new wp
    }
    class Pp {
        constructor(e, t, r, n) {
            if (this.errorLogger = t,
            this.esLogger = r,
            void 0 === e.acsUrl || void 0 === e.encodedCReq)
                throw new Error(`Cannot complete Challenge flow, acsUrl or encodedCReq is undefined. Transaction data: ${JSON.stringify(e)}`);
            this.acsUrl = e.acsUrl,
            this.challengeFlowData = {
                encodedCReq: e.encodedCReq,
                threeDSServerTransID: e.threeDSServerTransId
            };
            const i = this.decodeChallengeWindowSize();
            void 0 !== n && ({challengeDisplayedCallback: this.challengeDisplayedCallback, challengeHiddenCallback: this.challengeHiddenCallback, elementSelector: this.iframeSelector} = n);
            const o = {
                baseID: "sq-threeds-challenge-flow",
                baseName: "3DSChallengeFlow",
                getErrorMessage: Ap,
                height: `${i.height}`,
                listenerMessageType: "challengeResponse",
                notificationData: {
                    data: this.challengeFlowData.encodedCReq,
                    name: "creq"
                },
                notificationURL: this.acsUrl,
                onDestroy: this.onDestroy.bind(this),
                onShow: this.onShow.bind(this),
                timeoutSeconds: 610,
                validateMessage: this.validateMessage.bind(this),
                width: `${i.width}`
            };
            void 0 !== this.iframeSelector && (o.iframeSelector = this.iframeSelector),
            this.squareChallengeFlowIframe = new fp(o)
        }
        async handleChallengeFlow() {
            const e = this.decodeCReq(this.challengeFlowData.encodedCReq);
            return e && this.esLogger.trackTdsEvent({
                catalog_name: "tds_analyticsjs_c_req",
                tds_analyticsjs_c_req_message_version: e.messageVersion,
                tds_base_three_ds_server_trans_id: e.threeDsServerTransId || this.challengeFlowData.threeDSServerTransID
            }),
            this.squareChallengeFlowIframe.handle().then((e => (this.esLogger.trackTdsEvent({
                catalog_name: "tds_analyticsjs_c_res",
                tds_analyticsjs_c_res_message_version: e.messageVersion,
                tds_analyticsjs_c_res_trans_status: e.transStatus,
                tds_base_three_ds_server_trans_id: e.threeDsServerTransId
            }),
            e)))
        }
        onShow(e, t) {
            e.setAttribute(Cp, Tp),
            e.style.visibility = "visible",
            void 0 !== this.challengeDisplayedCallback && this.challengeDisplayedCallback(),
            t && t.classList.add("square_threeds_modal__show")
        }
        onDestroy(e) {
            const t = e.getAttribute(Cp) === Tp;
            e.setAttribute(Cp, "REMOVED"),
            void 0 !== this.challengeHiddenCallback && t && this.challengeHiddenCallback()
        }
        validateMessage(e) {
            if (e.threeDsServerTransId !== this.challengeFlowData.threeDSServerTransID)
                throw new Op(e.threeDsServerTransId,this.challengeFlowData.threeDSServerTransID)
        }
        decodeChallengeWindowSize() {
            let e = Ip._250X400;
            try {
                const t = JSON.parse(atob(this.challengeFlowData.encodedCReq));
                null !== t && "object" == typeof t && "challengeWindowSize"in t && (e = t.challengeWindowSize)
            } catch (e) {
                this.errorLogger.captureException(e, {
                    captureContext: {
                        tags: {
                            action: "nonFatal-challenge"
                        }
                    }
                })
            }
            switch (e) {
            case Ip._390X400:
                return {
                    height: 400,
                    width: 390
                };
            case Ip._500X600:
                return {
                    height: 600,
                    width: 500
                };
            case Ip._600X400:
                return {
                    height: 400,
                    width: 600
                };
            case Ip.FULL_SCREEN:
                return {
                    height: document.documentElement.clientHeight,
                    width: document.documentElement.clientWidth
                };
            case Ip._250X400:
            default:
                return {
                    height: 400,
                    width: 250
                }
            }
        }
        decodeCReq(e) {
            try {
                return JSON.parse(atob(e))
            } catch (t) {
                return this.errorLogger.addBreadcrumb({
                    data: {
                        encodedCReq: e
                    },
                    message: "Unable to parse JSON for challenge request message",
                    type: "error"
                }),
                this.errorLogger.captureException(t, {
                    captureContext: {
                        tags: {
                            action: "nonFatal-challenge"
                        }
                    }
                }),
                null
            }
        }
    }
    var Rp;
    !function(e) {
        e.COMPLETED = "COMPLETED",
        e.ERROR = "ERROR"
    }(Rp || (Rp = {}));
    class Np {
        constructor(e, t, r) {
            this.userChallenged = !1,
            this.esLogger = e,
            this.errorLogger = t,
            this.threeDsMethodData = r
        }
        async execute3dsAuthentication(e, t) {
            this.configuration = e,
            this.threeDsTransactionData = t,
            await this.handle3DSMethodFlow();
            try {
                const e = await this.authenticate();
                await this.handleAuthenticateResponse(e)
            } catch (e) {
                this.handleError(e)
            }
        }
        async handle3DSMethodFlow() {
            if (void 0 === this.threeDsMethodData.threeDsServerTransactionId || void 0 === this.threeDsMethodData.threeDsMethodPromise) {
                if (void 0 !== this.threeDsTransactionData?.threeDsMethodUrl)
                    try {
                        const e = new vp(this.threeDsTransactionData);
                        this.esLogger.trackAnalyticsEvent({
                            analyticsjs_event: "three_ds_method_invoked",
                            analyticsjsverification_id: this.threeDsTransactionData.verificationId,
                            analyticsjsverification_verification_token: this.threeDsTransactionData.verificationToken,
                            is_eager_three_ds_method_execution: !1,
                            three_ds_server_transaction_id: this.threeDsTransactionData.threeDSServerTransId
                        }),
                        await e.handle3DSMethod(),
                        this.esLogger.trackAnalyticsEvent({
                            analyticsjs_event: "three_ds_method_completed",
                            analyticsjsverification_id: this.threeDsTransactionData.verificationId,
                            analyticsjsverification_verification_token: this.threeDsTransactionData.verificationToken,
                            is_eager_three_ds_method_execution: !1,
                            three_ds_server_transaction_id: this.threeDsTransactionData.threeDSServerTransId
                        })
                    } catch (e) {
                        this.errorLogger.captureException(e, {
                            captureContext: {
                                tags: {
                                    action: "nonFatal-challenge"
                                }
                            }
                        })
                    }
            } else
                try {
                    await this.threeDsMethodData.threeDsMethodPromise
                } catch (e) {
                    this.errorLogger.captureException(e, {
                        captureContext: {
                            tags: {
                                action: "nonFatal-challenge"
                            }
                        }
                    })
                }
        }
        async handleChallengeFlow(e) {
            this.esLogger.trackAnalyticsEvent({
                analyticsjs_event: "buyer_challenged",
                analyticsjsverification_challenge_type: "3DS",
                analyticsjsverification_id: this.threeDsTransactionData.verificationId,
                analyticsjsverification_user_challenged: !0,
                analyticsjsverification_verification_token: this.threeDsTransactionData.verificationToken
            });
            const t = {
                threeDSServerTransId: e.three_ds_server_trans_id
            };
            return void 0 !== e.encoded_creq && (t.encodedCReq = e.encoded_creq),
            void 0 !== e.challenge_acs_url && (t.acsUrl = e.challenge_acs_url),
            new Pp(t,this.errorLogger,this.esLogger,this.configuration.verifyBuyerCustomElement).handleChallengeFlow()
        }
        authenticate() {
            const e = {
                browser_info: {
                    color_depth: window.screen.colorDepth,
                    java_enabled: window.navigator.javaEnabled(),
                    screen_height: window.innerHeight,
                    screen_width: window.innerWidth
                },
                client_id: "",
                token: this.threeDsTransactionData.verificationToken
            };
            return this.configuration.callbacks.postAuthenticate(e)
        }
        async handleAuthenticateResponse(e) {
            if (void 0 === e.errors)
                if (e.three_ds_trans_status === bp.CHALLENGE_REQUIRED)
                    try {
                        this.userChallenged = !0,
                        await this.handleChallengeFlow(e),
                        this.configuration.callbacks.onComplete({
                            status: Rp.COMPLETED,
                            threeDsServerTransId: this.threeDsTransactionData.threeDSServerTransId,
                            userChallenged: !0
                        })
                    } catch (e) {
                        this.handleError(e)
                    }
                else
                    this.configuration.callbacks.onComplete({
                        status: Rp.COMPLETED,
                        threeDsServerTransId: this.threeDsTransactionData.threeDSServerTransId,
                        userChallenged: this.userChallenged
                    });
            else
                this.configuration.callbacks.onComplete({
                    status: Rp.ERROR,
                    threeDsServerTransId: this.threeDsTransactionData.threeDSServerTransId,
                    userChallenged: this.userChallenged
                })
        }
        handleError(e) {
            this.errorLogger.captureException(e, {
                captureContext: {
                    tags: {
                        action: "nonFatal-challenge"
                    }
                }
            }),
            this.configuration.callbacks.onComplete({
                status: Rp.ERROR,
                threeDsServerTransId: this.threeDsTransactionData.threeDSServerTransId,
                userChallenged: this.userChallenged
            })
        }
    }
    class Dp {
        constructor(e, t, r) {
            this.callback = e,
            this.onError = r,
            this.called = !1,
            this.callback = e,
            this.timeout = window.setTimeout(( () => this.timedOut()), t),
            this.onError = r
        }
        invoke(...e) {
            this.called ? this.callback(...this.onError) : (clearTimeout(this.timeout),
            this.called = !0,
            this.callback(...e))
        }
        timedOut() {
            this.invoke(...this.onError)
        }
    }
    class Lp {
        constructor(e, t, r, n, i, o) {
            this.applicationId = e,
            this.analyticsParameters = t,
            this.esLogger = r,
            this.errorLogger = n,
            this.challengeUpdatesQueue = [],
            this.verificationUpdatePending = !1,
            this.userChallenged = !1,
            this.messenger = i,
            this.threeDsMethodData = o,
            this.squareThreeds = new Np(this.esLogger,this.errorLogger,this.threeDsMethodData),
            ( () => {
                this.pendingVerifyBuyerCall && this.verifyBuyer(this.pendingVerifyBuyerCall.verificationId, this.pendingVerifyBuyerCall.source, this.pendingVerifyBuyerCall.details, this.pendingVerifyBuyerCall.callback, this.pendingVerifyBuyerCall.verifyBuyerCustomElement)
            }
            )()
        }
        verifyBuyer(e, t, r, n, i) {
            void 0 === this.verifyBuyerCallback ? (this.verifyBuyerCallback = new Dp(( (e, t) => {
                n(e, t),
                delete this.verifyBuyerCallback
            }
            ),9e5,[new _p(e)]),
            this.getVerification(e, t, r)) : n(new Ep, null)
        }
        async updateVerification(e, t) {
            const r = t.some((e => {
                if ("SQUARE_THREEDS" === e.type) {
                    const t = e.square_threeds_verification?.status;
                    return function(e) {
                        return "CANCELED" === e || "REJECTED" === e || "AUTHENTICATED" === e || "COMPLETED" === e
                    }(t) || "ERROR" === t
                }
                return !1
            }
            ));
            if (!this.verificationUpdatePending || r) {
                this.verificationUpdatePending = !r;
                try {
                    const r = {
                        analyticsParameters: this.analyticsParameters,
                        applicationId: this.applicationId,
                        challengeUpdates: t,
                        token: this.token,
                        verificationId: e
                    }
                      , n = await this.messenger.request("REQUEST_VERIFICATION_UPDATE", {
                        body: {
                            ...r
                        }
                    });
                    this.esLogger.trackAnalyticsEvent({
                        analyticsjs_event: "receive_verification_update",
                        analyticsjsverification_id: e,
                        analyticsjsverification_verification_token: this.token
                    }),
                    this.handleChallenges(e, n)
                } catch (t) {
                    this.esLogger.trackAnalyticsEvent({
                        analyticsjs_event: "receive_verification_update",
                        analyticsjsverification_id: e,
                        analyticsjsverification_verification_token: this.token
                    }),
                    this.handleChallenges(e, t instanceof up ? t : new up("Update verification failed",this.token))
                }
            } else
                this.challengeUpdatesQueue.push(t)
        }
        handleChallenges(e, t) {
            if (void 0 === this.verifyBuyerCallback)
                return;
            const r = this.challengeUpdatesQueue.shift();
            if (void 0 !== r ? this.updateVerification(e, r) : this.verificationUpdatePending = !1,
            t instanceof up)
                return void this.verifyBuyerCallback.invoke(t, null);
            this.token = t.token;
            const n = {
                token: this.token,
                userChallenged: this.userChallenged
            };
            switch (t.status) {
            case "COMPLETED":
                this.verifyBuyerCallback.invoke(null, n);
                break;
            case "CANCELED":
                this.verifyBuyerCallback.invoke(new yp(t.token), null);
                break;
            case "PENDING":
                if (void 0 === t.challenges || 0 === t.challenges.length)
                    return void this.verifyBuyerCallback.invoke(new yp(t.token), null);
                for (const r of t.challenges)
                    if ("SQUARE_THREEDS" === r.type) {
                        if (this.squareThreedsConfiguration = {
                            callbacks: {
                                onComplete: t => {
                                    this.handleSquareThreeDsComplete(t, e)
                                }
                                ,
                                postAuthenticate: t => this.handlePostAuthenticate(t, e)
                            }
                        },
                        !this.isValidSquareThreeDsChallenge(r))
                            return;
                        this.squareThreeDsTransactionData = {
                            directoryServerId: r.square_three_ds_verification.directory_server_id,
                            messageVersion: r.square_three_ds_verification.message_version,
                            threeDSServerTransId: r.square_three_ds_verification.three_ds_server_transaction_id,
                            ...void 0 !== r.square_three_ds_verification?.three_ds_method_notification_url && {
                                threeDsMethodNotificationUrl: r.square_three_ds_verification.three_ds_method_notification_url
                            },
                            ...void 0 !== r.square_three_ds_verification?.three_ds_method_url && {
                                threeDsMethodUrl: r.square_three_ds_verification.three_ds_method_url
                            },
                            verificationId: e,
                            verificationToken: this.token
                        },
                        this.squareThreeds.execute3dsAuthentication(this.squareThreedsConfiguration, this.squareThreeDsTransactionData)
                    }
                break;
            default:
                this.errorLogger.captureException(new up(`Invalid verification response status: ${t.status}`), {
                    captureContext: {
                        tags: {
                            action: "nonFatal-verify"
                        }
                    }
                })
            }
        }
        isValidSquareThreeDsChallenge(e) {
            return void 0 !== e.square_three_ds_verification?.three_ds_server_transaction_id
        }
        async getVerification(e, t, r) {
            const n = {
                analyticsParameters: this.analyticsParameters,
                applicationId: this.applicationId,
                source: t,
                verificationDetails: r,
                verificationId: e
            };
            try {
                const t = await this.messenger.request("REQUEST_VERIFICATION_CREATE", {
                    body: {
                        ...n,
                        ...void 0 !== this.threeDsMethodData.threeDsMethodPromise && void 0 !== this.threeDsMethodData.threeDsServerTransactionId ? {
                            threeDsServerTransactionId: this.threeDsMethodData.threeDsServerTransactionId
                        } : {}
                    }
                })
                  , r = t.challenges?.find((e => "SQUARE_THREEDS" === e.type));
                r?.square_three_ds_verification?.three_ds_server_transaction_id === this.threeDsMethodData.threeDsServerTransactionId || this.threeDsMethodData.reset(),
                this.esLogger.trackAnalyticsEvent({
                    analyticsjs_event: "receive_verification",
                    analyticsjsverification_id: e,
                    analyticsjsverification_verification_token: t.token
                }),
                this.handleChallenges(e, t)
            } catch (t) {
                this.esLogger.trackAnalyticsEvent({
                    analyticsjs_event: "receive_verification",
                    analyticsjsverification_id: e,
                    analyticsjsverification_verification_token: this.token
                }),
                this.handleChallenges(e, t instanceof up ? t : new up("Create verification failed",this.token))
            }
        }
        handleSquareThreeDsComplete(e, t) {
            this.userChallenged = e.userChallenged;
            const r = {
                square_threeds_verification: {
                    directory_server_id: this.squareThreeDsTransactionData.directoryServerId,
                    message_version: this.squareThreeDsTransactionData.messageVersion,
                    status: e.status === Rp.COMPLETED ? Rp.COMPLETED : Rp.ERROR,
                    three_ds_server_transaction_id: e.threeDsServerTransId
                },
                type: "SQUARE_THREEDS"
            };
            this.updateVerification(t, [r])
        }
        async handlePostAuthenticate(e, t) {
            const r = {
                analyticsParameters: this.analyticsParameters,
                applicationId: this.applicationId,
                browser_info: e.browser_info,
                client_id: e.client_id,
                token: this.token,
                verificationId: t
            };
            try {
                const e = await this.messenger.request("REQUEST_THREE_DS_AUTHENTICATION", {
                    body: {
                        ...r
                    }
                });
                return this.esLogger.trackAnalyticsEvent({
                    analyticsjs_event: "receive_three_ds_authenticate",
                    analyticsjsverification_id: t,
                    analyticsjsverification_verification_token: this.token
                }),
                e
            } catch (e) {
                throw this.esLogger.trackAnalyticsEvent({
                    analyticsjs_event: "receive_three_ds_authenticate",
                    analyticsjsverification_id: t,
                    analyticsjsverification_verification_token: this.token
                }),
                e instanceof up ? e : new up("Three ds authentication failed",this.token)
            }
        }
    }
    function xp(e, t) {
        if (!e)
            throw ip("IframeCustomElement", t);
        if ("function" != typeof e)
            throw Zh("IframeCustomElement", t)
    }
    function kp(e) {
        if ("object" != typeof e || !e)
            return "";
        const t = [];
        return "string" == typeof e.familyName && e.familyName && t.push("familyName"),
        "string" == typeof e.givenName && e.givenName && t.push("givenName"),
        "string" == typeof e.email && e.email && t.push("email"),
        "string" == typeof e.country && e.country && t.push("country"),
        "string" == typeof e.countryName && e.countryName && t.push("countryName"),
        "string" == typeof e.region && e.region && t.push("region"),
        "string" == typeof e.city && e.city && t.push("city"),
        "object" == typeof e.addressLines && e.addressLines.join() && t.push("addressLines"),
        "string" == typeof e.postalCode && e.postalCode && t.push("postalCode"),
        "string" == typeof e.phone && e.phone && t.push("phone"),
        t.join(",")
    }
    function Mp() {
        return `verify-buyer-${(new Date).getMilliseconds()}-${1e5 * Math.random()}`
    }
    class jp {
        constructor(e, t, r, n, i, o={
            generateVerificationId: Mp
        }) {
            this.verificationId = void 0,
            this.applicationId = e,
            this.esLogger = t,
            this.errorLogger = r,
            this.messenger = n,
            this.threeDsMethodData = new mp,
            this.verificationIdGenerator = o,
            function(e, t) {
                if (!e)
                    throw Qh("applicationId");
                if ("string" != typeof e)
                    throw Kh("applicationId", "string");
                if (t) {
                    const e = "locationId"in t
                      , r = "accountId"in t;
                    if (!e && !r)
                        throw op();
                    if (e && r)
                        throw sp();
                    if (e && "string" != typeof t.locationId)
                        throw Kh("analyticsParameters.locationId", "string");
                    if (r && "string" != typeof t.accountId)
                        throw Kh("analyticsParameters.accountId", "string")
                }
            }(e, i),
            i && (this.verifier = new Lp(this.applicationId,i,this.esLogger,this.errorLogger,this.messenger,this.threeDsMethodData),
            this.analyticsParameters = i)
        }
        async execute3DSMethod(e) {
            const t = new vp({
                threeDSServerTransId: e.threeDSServerTransId,
                threeDsMethodNotificationUrl: e.threeDsMethodNotificationUrl,
                threeDsMethodUrl: e.threeDsMethodUrl
            });
            this.verificationId = this.verificationIdGenerator.generateVerificationId(),
            this.esLogger.trackAnalyticsEvent({
                analyticsjs_event: "three_ds_method_invoked",
                analyticsjsverification_id: this.verificationId,
                analyticsjsverification_verification_token: void 0,
                is_eager_three_ds_method_execution: !0,
                three_ds_server_transaction_id: e.threeDSServerTransId
            });
            const r = t.handle3DSMethod();
            this.threeDsMethodData.threeDsMethodPromise = r,
            this.threeDsMethodData.threeDsServerTransactionId = e.threeDSServerTransId;
            try {
                await r
            } catch (e) {
                throw this.errorLogger.captureException(e, {
                    captureContext: {
                        tags: {
                            action: "nonFatal-challenge"
                        }
                    }
                }),
                e
            } finally {
                this.esLogger.trackAnalyticsEvent({
                    analyticsjs_event: "three_ds_method_completed",
                    analyticsjsverification_id: this.verificationId,
                    analyticsjsverification_verification_token: void 0,
                    is_eager_three_ds_method_execution: !0,
                    three_ds_server_transaction_id: e.threeDSServerTransId
                })
            }
        }
        async verifyBuyer(e, t, r) {
            return new Promise(( (n, i) => {
                this._verifyBuyer(e, t, ( (e, t) => {
                    this.threeDsMethodData.reset(),
                    this.verificationId = void 0,
                    e ? i(e) : n(t)
                }
                ), r)
            }
            ))
        }
        _verifyBuyer(e, t, r, n) {
            const i = t
              , o = this.verificationId ?? this.verificationIdGenerator.generateVerificationId();
            try {
                this.esLogger.trackAnalyticsEvent({
                    analyticsjs_event: "verify_buyer_invoked",
                    analyticsjsverification_amount: i.amount,
                    analyticsjsverification_contact_fields: kp(i.billingContact),
                    analyticsjsverification_currency: i.currencyCode,
                    analyticsjsverification_custom_score: null === i.customScore ? void 0 : i.customScore,
                    analyticsjsverification_id: o,
                    analyticsjsverification_intent: i.intent,
                    analyticsjsverification_source: e,
                    analyticsjsverification_source_prefix: e.substr(0, 5),
                    analyticsjsverification_square_product: i.squareProduct
                })
            } catch (e) {
                throw this.errorLogger.captureException(e, {
                    captureContext: {
                        tags: {
                            action: "verifyBuyer"
                        }
                    }
                }),
                cp()
            }
            try {
                !function(e, t, r, n, i) {
                    const o = "verifyBuyer";
                    if (!e)
                        throw Yh();
                    if (void 0 === t)
                        throw np(o, "source");
                    if ("string" != typeof t)
                        throw Jh(o, "source", "string");
                    if (!r)
                        throw np(o, "verificationDetails");
                    if ("object" != typeof r)
                        throw Jh(o, "verificationDetails", "object");
                    if (function(e, t) {
                        const r = "verificationDetails";
                        if ("object" != typeof t.billingContact)
                            throw Jh(e, `${r}.billingContact`, "object");
                        const {customScore: n} = t;
                        if (null != n) {
                            if ("number" != typeof n || Number.isNaN(n))
                                throw Jh(e, `${r}.customScore`, "integer");
                            if (n < 0 || n > 1e3)
                                throw ap(e, `${r}.customScore`, 0, 1e3, !0)
                        }
                        if ("string" != typeof t.intent)
                            throw Jh(e, `${r}.intent`, "string");
                        if ("CHARGE" === t.intent || "CHARGE_AND_STORE" === t.intent) {
                            if (!t.currencyCode)
                                throw ep(e, `${r}.currencyCode`);
                            if ("string" != typeof t.currencyCode)
                                throw Jh(e, `${r}.currencyCode`, "string");
                            if (!t.amount)
                                throw ep(e, `${r}.amount`);
                            if ("string" != typeof t.amount)
                                throw Jh(e, `${r}.amount`, "string")
                        }
                    }(o, r),
                    !n)
                        throw ip(o, "verifyBuyerCallback");
                    if ("function" != typeof n)
                        throw Zh(o, "verifyBuyerCallback");
                    void 0 !== i && (function(e) {
                        if ("string" != typeof e)
                            throw Kh("iframeElementSelector", "string");
                        const t = document.querySelector(e);
                        if (null === t)
                            throw rp(e);
                        if (null === t.getAttribute("name"))
                            throw tp(e, "name");
                        if ("iframe" !== t.tagName.toLowerCase() || null === t.contentDocument && null === t.contentWindow)
                            throw Xh(e, "IFrameElement")
                    }(i.elementSelector),
                    xp(i.challengeDisplayedCallback, "elementVisibleCallback"),
                    xp(i.challengeHiddenCallback, "elementRemovedCallback"))
                }(this.analyticsParameters, e, i, r, n)
            } catch (t) {
                throw this.esLogger.trackAnalyticsEvent({
                    analyticsjs_event: "verify_buyer_completed",
                    analyticsjsverification_error: t.name,
                    analyticsjsverification_id: o,
                    analyticsjsverification_source: e
                }),
                t
            }
            try {
                this.verifier.verifyBuyer(o, e, i, ( (t, n) => {
                    const i = {
                        analyticsjs_event: "verify_buyer_completed",
                        analyticsjsverification_id: o,
                        analyticsjsverification_source: e
                    };
                    t && (i.analyticsjsverification_error = t.name),
                    n && (i.analyticsjsverification_user_challenged = n.userChallenged,
                    i.analyticsjsverification_verification_token = n.token),
                    this.esLogger.trackAnalyticsEvent(i),
                    r(t, n)
                }
                ), n)
            } catch (e) {
                throw this.errorLogger.captureException(e, {
                    captureContext: {
                        tags: {
                            action: "verifyBuyer"
                        }
                    }
                }),
                cp()
            }
        }
    }
    const Up = (e, t, r, n, i) => new jp(e,t,r,n,i)
      , Hp = {
        get documentVisibilityState() {
            return document.visibilityState
        },
        windowLocationHref: () => window.location.href,
        get windowLocationOrigin() {
            return window.location.origin
        },
        get windowNavigationBeacon() {
            return window.navigator.sendBeacon.bind(window.navigator)
        }
    }
      , Bp = /^https?:\/\//;
    function Fp(e) {
        if (!e)
            return "";
        if (!Bp.test(e))
            return "[Not Parsable]";
        const t = new URL(e);
        return `${t.protocol}//${t.host}`
    }
    const qp = {
        buyer_challenged: "analyticsjsverification",
        receive_three_ds_authenticate: "analyticsjsverification",
        receive_verification: "analyticsjsverification",
        receive_verification_update: "analyticsjsverification",
        three_ds_method_completed: "analyticsjsverification",
        three_ds_method_invoked: "analyticsjsverification",
        verify_buyer_completed: "analyticsjsverification",
        verify_buyer_invoked: "analyticsjsverification"
    };
    function Vp(e) {
        const t = document.cookie.split(";");
        for (const r of t) {
            const [t,n] = r.split("=");
            if (void 0 !== t && t.trim() === e && void 0 !== n)
                return decodeURIComponent(n)
        }
        return null
    }
    class Gp {
        constructor(e, t, r, n) {
            const {locationId: i, avt: o} = r;
            this.es = e,
            this.errorLogger = n,
            this.telemetryStarts = {},
            this.baseEvent = function(e, t, r) {
                return "accountId"in r ? {
                    anonymous_user_token: t,
                    oauth_credential_account_id: r.accountId,
                    oauth_credential_client_id: e
                } : {
                    anonymous_user_token: t,
                    oauth_credential_client_id: e,
                    oauth_credential_location_id: r.locationId
                }
            }(t, o, {
                locationId: i ?? ""
            })
        }
        trackAnalyticsEvent(e) {
            try {
                const t = {
                    catalog_name: qp[e.analyticsjs_event],
                    ...this.baseEvent,
                    analyticsjsverification_duration: this.getAnalyticsEventDuration(e),
                    browser_height: window.innerHeight,
                    browser_width: window.innerWidth,
                    device_screen_height: window.screen.height,
                    device_screen_width: window.screen.width,
                    subject_anonymous_token: Vp("_savt"),
                    webpage_base_url: Hp.windowLocationOrigin,
                    webpage_full_url: Fp(Hp.windowLocationHref()),
                    webpage_path: "",
                    webpage_referrer: Fp(window.document.referrer),
                    webpage_referrer_path: "",
                    webpage_referrer_search: "",
                    webpage_search: "",
                    webpage_title: window.document.title,
                    ...e
                };
                this.es.trackV2(t)
            } catch (t) {
                this.errorLogger.addBreadcrumb({
                    data: {
                        event: e
                    },
                    message: "Eventstream Track Error",
                    type: "error"
                }),
                this.errorLogger.captureException(t, {
                    captureContext: {
                        tags: {
                            action: "nonFatal-es2"
                        }
                    }
                })
            }
        }
        trackTdsEvent(e) {
            try {
                this.es.trackV2(e)
            } catch (t) {
                this.errorLogger.addBreadcrumb({
                    data: {
                        event: e
                    },
                    message: "Eventstream TrackTdsEvent Error",
                    type: "error"
                }),
                this.errorLogger.captureException(t, {
                    captureContext: {
                        tags: {
                            action: "nonFatal-es2"
                        }
                    }
                })
            }
        }
        getAnalyticsEventDuration(e) {
            const {analyticsjs_event: t, analyticsjsverification_id: r} = e
              , n = e => (this.telemetryStarts[e] = Date.now(),
            null)
              , i = e => {
                const t = this.telemetryStarts[e];
                return void 0 === t ? null : (delete this.telemetryStarts[e],
                Date.now() - t)
            }
            ;
            switch (t) {
            case "verify_buyer_invoked":
                return n(r);
            case "verify_buyer_completed":
                return i(r);
            case "three_ds_method_invoked":
                return n(`three_ds_method_${r}`);
            case "three_ds_method_completed":
                return i(`three_ds_method_${r}`);
            default:
                return null
            }
        }
    }
    class zp {
        constructor(e) {
            this.metricsBatchUrl = `${e.pciConnectApiUrl}/v2/analytics/aux`,
            this.errorLogger = e.errorLogger,
            this.analyticsClientVersion = e.analyticsClientVersion,
            this.webSdkVersion = e.webSdkVersion,
            this.metricsBuffer = [],
            this.disableBeacon = !1
        }
        trackV2(e) {
            const t = {
                u_library_name: "analytics-client",
                u_library_version: this.analyticsClientVersion,
                web_sdk_version: this.webSdkVersion,
                ...e
            };
            this.postMetricsEvent(t, !1)
        }
        postMetricsEvent(e, t=!1) {
            this.disableBeacon ? In(this.metricsBatchUrl, {
                body: {
                    analytics: [e]
                }
            }).catch((t => {
                this.errorLogger.addBreadcrumb({
                    data: {
                        event: e
                    },
                    message: "Unable to HTTP Post analytics event",
                    type: "error"
                }),
                this.errorLogger.captureException(t, {
                    captureContext: {
                        tags: {
                            action: "nonFatal-es2"
                        }
                    }
                })
            }
            )) : (this.metricsBuffer.push(e),
            t && this.buildAndSendBeacon(),
            void 0 === this.currentInterval && (document.addEventListener("visibilitychange", ( () => {
                "hidden" === Hp.documentVisibilityState && (this.buildAndSendBeacon(),
                clearInterval(this.currentInterval),
                this.currentInterval = void 0)
            }
            )),
            this.currentInterval = setInterval(( () => {
                this.buildAndSendBeacon()
            }
            ), 1e3)))
        }
        buildAndSendBeacon() {
            if (0 !== this.metricsBuffer.length) {
                try {
                    const e = new Blob([JSON.stringify({
                        analytics: this.metricsBuffer
                    })],{
                        type: "text/plain;charset=UTF-8"
                    });
                    Hp.windowNavigationBeacon(this.metricsBatchUrl, e)
                } catch (e) {
                    this.errorLogger.addBreadcrumb({
                        data: {
                            events: this.metricsBuffer
                        },
                        message: "Unable to send beacons for analytics events",
                        type: "error"
                    }),
                    this.errorLogger.captureException(e, {
                        captureContext: {
                            tags: {
                                action: "nonFatal-es2"
                            }
                        }
                    }),
                    this.disableBeacon = !0,
                    void 0 !== this.currentInterval && (clearInterval(this.currentInterval),
                    this.currentInterval = void 0),
                    In(this.metricsBatchUrl, {
                        body: {
                            analytics: this.metricsBuffer
                        }
                    }).catch((e => {
                        this.errorLogger.addBreadcrumb({
                            data: {
                                events: this.metricsBuffer
                            },
                            message: "Unable to send HTTP request for analytics events",
                            type: "error"
                        }),
                        this.errorLogger.captureException(e, {
                            captureContext: {
                                tags: {
                                    action: "nonFatal-es2"
                                }
                            }
                        })
                    }
                    ))
                }
                this.metricsBuffer = []
            }
        }
    }
    const $p = {
        setupClient(e, t) {
            const {environment: r, hostname: n, locationId: i, pciConnectApiUrl: o, clientVersion: a, webSdkVersion: s, messenger: c} = t
              , u = void 0 === a || "" === a ? `web-payments-sdk@${s}` : `analytics-client@${a}`
              , l = new pn({
                dsn: "https://4197e265423545aba2d849d023e8cd33@o160250.ingest.sentry.io/1516559",
                environment: r,
                initialScope: {
                    tags: {
                        applicationId: e,
                        applicationUrl: n,
                        source: "analytics-client",
                        webSdkVersion: s
                    }
                },
                release: u
            })
              , d = new zp({
                analyticsClientVersion: u,
                errorLogger: l,
                pciConnectApiUrl: o,
                webSdkVersion: s
            })
              , h = new Gp(d,e,t,l);
            return void 0 === i ? Up(e, h, l, c) : Up(e, h, l, c, {
                locationId: i
            })
        }
    };
    function Wp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Yp(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Wp(Object(r), !0).forEach((function(t) {
                Kp(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wp(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Kp(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    var Xp = "".concat(qn.ASSET_URL, "/square-threeds-modal.css");
    class Jp {
        constructor(e) {
            var {applePayMerchantIdentifier: t, cashAppPayMerchantIdentifier: r, merchantName: n, applicationId: i, avt: o, hostname: a, locationId: s, instanceId: c, sessionId: u, sourceUrl: l, locale: d} = e;
            this.applicationId = i,
            this.locationId = s,
            this._sessionId = u,
            this.instanceId = c,
            this.applePayMerchantIdentifier = t,
            this.cashAppPayMerchantIdentifier = r,
            this.merchantName = n,
            this.hostname = a,
            this.sourceUrl = l,
            this._locale = d,
            this.avt = o
        }
        get sessionId() {
            return this._sessionId
        }
        get powCounter() {
            return this._powCounter
        }
        setSessionId(e) {
            this._sessionId = e,
            this._serialized = void 0
        }
        setTranslationOverrides(e) {
            this._translationOverrides = e,
            this._serialized = void 0
        }
        setLocale(e) {
            this._locale = e,
            this._serialized = void 0
        }
        setPowCounter(e) {
            this._powCounter = e,
            this._serialized = void 0
        }
        serializationHasChanged() {
            return void 0 === this._serialized
        }
        serialize() {
            var e, t;
            return this._serialized || (this._serialized = {
                applePayMerchantIdentifier: null !== (e = this.applePayMerchantIdentifier) && void 0 !== e ? e : "",
                applicationId: this.applicationId,
                avt: this.avt,
                cashAppPayMerchantIdentifier: null !== (t = this.cashAppPayMerchantIdentifier) && void 0 !== t ? t : "",
                hostname: this.hostname,
                instanceId: this.instanceId,
                locale: this._locale,
                locationId: this.locationId,
                merchantName: this.merchantName,
                sessionId: this._sessionId,
                sourceUrl: this.sourceUrl
            },
            void 0 !== this._translationOverrides && (this._serialized.translationOverrides = this._translationOverrides),
            void 0 !== this._powCounter && (this._serialized.powCounter = this._powCounter)),
            this._serialized
        }
    }
    function Zp(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function Qp(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    Zp(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    Zp(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    function ef() {
        return ef = Qp((function*(e, t) {
            var r = new Promise(( (e, r) => {
                var n = setTimeout((function() {
                    var e;
                    window.removeEventListener("message", i),
                    r(((e = new Error("Web Payments SDK was unable to be initialized in time")).type = "InitializationTimeoutError",
                    e))
                }
                ), 1e4)
                  , i = function(r) {
                    "main-iframe:loaded" === r.data && r.origin === qn.ASSET_BASE_URL && (clearTimeout(n),
                    window.removeEventListener("message", i),
                    t.addBreadcrumb({
                        message: "Processed main-iframe:loaded message"
                    }),
                    e())
                };
                window.addEventListener("message", i)
            }
            ))
              , n = function(e, t) {
                return tf.apply(this, arguments)
            }(e, t)
              , [i,o] = yield Promise.all([n, r]);
            return i
        }
        )),
        ef.apply(this, arguments)
    }
    function tf() {
        return (tf = Qp((function*(e, t) {
            var r = yield Mu({
                frameborder: "0",
                height: "0",
                scrolling: "no",
                src: e,
                style: {
                    border: "none",
                    display: "block",
                    visibility: "hidden"
                },
                width: "0"
            });
            return t.addBreadcrumb({
                message: "main iframe loaded"
            }),
            r
        }
        ))).apply(this, arguments)
    }
    var rf = {
        build: function(e, t) {
            return ef.apply(this, arguments)
        },
        getIframeSrc: function(e) {
            var t = new URL(qn.IFRAME_SRC);
            return Object.entries(e).forEach((e => {
                var [r,n] = e;
                t.searchParams.set(r, n)
            }
            )),
            t.toString()
        }
    };
    function nf(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function of() {
        var e;
        return e = function*(e, t, r, n) {
            var i = zs({
                errorSerializer: {
                    deserialize: e => e instanceof Error ? e : ys(e),
                    serialize: e => e instanceof Vn ? Es(e) : e
                },
                name: n
            });
            return i.setErrorHandler((function(e) {
                t.captureException(e)
            }
            )),
            i.connect({
                origin: qn.ASSET_URL,
                window: e.contentWindow
            }, e.id),
            yield i.sendMessage("INITIALIZE", r),
            i
        }
        ,
        of = function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    nf(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    nf(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
        ,
        of.apply(this, arguments)
    }
    var af = {
        build: function(e, t, r, n) {
            return of.apply(this, arguments)
        }
    };
    function sf(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function cf(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    sf(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    sf(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    function uf(e) {
        return lf.apply(this, arguments)
    }
    function lf() {
        return (lf = cf((function*(e) {
            var t;
            if (c.supportsCryptoDigest) {
                var r = (new TextEncoder).encode(e)
                  , n = yield crypto.subtle.digest("SHA-256", r);
                t = new Uint8Array(n)
            } else {
                var i = new (yield uc({
                    crossorigin: "anonymous",
                    id: "square-sha256",
                    integrity: "sha256-4wDf1MFeUObkJyxW9pU1Vs6xVxFFeuND/SlfPgCEW8E=",
                    src: "".concat(qn.ASSET_URL, "/sha256.js")
                }, ( () => window.Square ? window.Square._utils.Sha256 : void 0)));
                i.update(e),
                t = yield i.digest()
            }
            return Array.from(t).map((e => e.toString(16).padStart(2, "0"))).join("")
        }
        ))).apply(this, arguments)
    }
    function df() {
        return (df = cf((function*(e, t, r) {
            var n = 0
              , i = ""
              , o = r.join(",");
            do {
                n += 1;
                var a = "".concat(e, ":").concat(n, ":").concat(o);
                i = yield uf(a)
            } while (!i.startsWith(t));
            return n
        }
        ))).apply(this, arguments)
    }
    r(7239),
    r(8033),
    r(9964),
    r(3025),
    r(6852),
    r(5437),
    r(2181),
    r(2637);
    var hf = {
        compute: function(e, t, r) {
            return df.apply(this, arguments)
        }
    };
    function pf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function ff(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    var gf = {
        block_insecure_contexts: !1,
        can_use_ach_auth: "REQUIRED",
        can_use_interac: !1,
        can_use_override_strings: !1,
        client_log_level: "NONE",
        client_side_encryption: "NO",
        eager_three_ds_method_execution_eligibility: !1,
        haasv2_encryption_of_paymentdata: !1,
        one_shot_authentication_eligibility: !1,
        record_dev_errors_to_snowflake: !1,
        record_error_metrics: !1,
        use_new_afterpay_buttons: !1,
        use_new_afterpay_checkout_widget: !1,
        use_new_afterpay_script: !1
    };
    function vf(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function mf(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    vf(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    vf(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    function yf() {
        return yf = mf((function*(e, t, r, n) {
            var {applicationId: i, locationId: o, hostname: a, sourceUrl: s} = e;
            t.logEvent({
                event: "INITIALIZATION:START",
                eventSource: "WebSDK"
            });
            var u, l, d = n.getCurrentLocale();
            try {
                u = yield function(e, t, r, n, i) {
                    return _f.apply(this, arguments)
                }(i, o, a, d, r)
            } catch (e) {
                var h = (l = e)instanceof Error && "type"in l && "InitializationTimeoutError" === l.type ? "good" : "bad";
                if (t.logEvent({
                    event: "INITIALIZATION:ERROR",
                    eventSource: "WebSDK",
                    sloStatus: h
                }),
                "bad" === h && r.captureException(e),
                Ho(e))
                    throw new Ai("initializing the payment method");
                throw e
            }
            try {
                var {avt: p, sessionId: f, applePartnerInternalMerchantIdentifier: g, cashAppPayMerchantIdentifier: v, merchantName: m, instanceId: y, paymentMethodSupportDetail: E, featureFlagValues: _, isTestMerchant: b, powPrefix: I} = yield u.request("REQUEST_HYDRATION", {
                    body: {
                        applicationId: i,
                        hostname: a,
                        locationId: o
                    }
                })
                  , S = function(e) {
                    var t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? pf(Object(r), !0).forEach((function(t) {
                                ff(e, t, r[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pf(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }
                            ))
                        }
                        return e
                    }({}, gf);
                    for (var [r,n] of Object.entries(gf)) {
                        var i = r;
                        if (i in e) {
                            var o = e[i];
                            t[i] = "boolean" == typeof n ? "true" === o : o
                        }
                    }
                    return t
                }(_);
                if (S.block_insecure_contexts && !0 !== c.isSecureContext)
                    throw new vi;
                t.setAvt(p);
                var w = new Jp({
                    applePayMerchantIdentifier: g,
                    applicationId: i,
                    avt: p,
                    cashAppPayMerchantIdentifier: v,
                    hostname: a,
                    instanceId: y,
                    locale: d,
                    locationId: o,
                    merchantName: m,
                    sessionId: f,
                    sourceUrl: s
                })
                  , O = Promise.resolve(void 0);
                void 0 !== I && (O = function(e, t, r, n, i, o, a) {
                    return Ef.apply(this, arguments)
                }(i, o, f, y, I, t, r)),
                t.setFeatureFlagValues(S),
                t.logEvent({
                    event: "INITIALIZATION:OK",
                    eventSource: "WebSDK",
                    sloStatus: "good"
                }, y, f);
                var C = function(e, t, r, n) {
                    var i, o = void 0 !== t && t.length > 0 ? t : void 0, a = null != r ? r : "";
                    function s() {
                        if (i)
                            return i;
                        Fc(Xp, "sq-threeds-modal-styles", document.head);
                        var t = $p.setupClient(e, {
                            avt: a,
                            clientVersion: qn.ANALYTICS_CLIENT_VERSION,
                            connectApiUrl: qn.CONNECT_API_URL,
                            environment: qn.env,
                            hostname: c.windowLocation.origin,
                            locationId: o,
                            messenger: n,
                            pciConnectApiUrl: qn.API_URL,
                            webSdkVersion: qn.VERSION
                        });
                        return i = t,
                        t
                    }
                    return Object.freeze({
                        execute3DSMethod: function(e) {
                            return s().execute3DSMethod(e)
                        },
                        verifyBuyer: function(e, t) {
                            var r, n = s(), i = Yp(Yp({}, t), {}, {
                                billingContact: (r = t.billingContact,
                                function(e) {
                                    return "region"in e || "country"in e || "countryName"in e
                                }(r) ? r : {
                                    addressLines: r.addressLines,
                                    city: r.city,
                                    country: r.countryCode,
                                    email: r.email,
                                    familyName: r.familyName,
                                    givenName: r.givenName,
                                    phone: r.phone,
                                    postalCode: r.postalCode,
                                    region: r.state
                                })
                            });
                            return n.verifyBuyer(e, i)
                        }
                    })
                }(w.applicationId, w.locationId, w.avt, u);
                return {
                    analyticsBackend: C,
                    featureFlagValues: S,
                    isTestMerchant: b,
                    localeStrings: n,
                    messenger: u,
                    paymentMethodSupportDetail: E,
                    proofOfWorkComputePromise: O,
                    session: w
                }
            } catch (e) {
                if (t.logEvent({
                    event: "INITIALIZATION:ERROR",
                    eventSource: "WebSDK",
                    sloStatus: "WebSdkEmbedError" === vs(e).name ? "good" : "bad"
                }),
                Ho(e))
                    throw new Ai("initializing the payment method");
                throw e
            }
        }
        )),
        yf.apply(this, arguments)
    }
    function Ef() {
        return (Ef = mf((function*(e, t, r, n, i, o, a) {
            o.logEvent({
                event: "PROOF_OF_WORK:START",
                eventSource: "WebSDK"
            }, n, r);
            var s = [e, t, n];
            try {
                var c = yield hf.compute(r, i, s);
                return o.logEvent({
                    event: "PROOF_OF_WORK:OK",
                    eventSource: "WebSDK"
                }, n, r),
                c
            } catch (e) {
                a.captureException(e),
                o.logEvent({
                    event: "PROOF_OF_WORK:ERROR",
                    eventSource: "WebSDK"
                }, n, r)
            }
        }
        ))).apply(this, arguments)
    }
    function _f() {
        return (_f = mf((function*(e, t, r, n, i) {
            var o = yield rf.build(rf.getIframeSrc({
                applicationId: e,
                hostname: r
            }), i);
            return yield af.build(o, i, {
                applicationId: e,
                hostname: r,
                locale: n,
                locationId: t
            })
        }
        ))).apply(this, arguments)
    }
    var bf = {
        initializePayment: function(e, t, r, n) {
            return yf.apply(this, arguments)
        },
        validateVerificationDetails: function(e, t) {
            var r = [];
            return null !== e.billingContact && "object" == typeof e.billingContact || r.push(new fs(t,"details.billingContact","object")),
            e.intent && "string" == typeof e.intent && ["CHARGE", "STORE", "CHARGE_AND_STORE"].includes(e.intent) || r.push(new fs(t,"details.intent","string")),
            "CHARGE" !== e.intent && "CHARGE_AND_STORE" !== e.intent || (e.amount && "string" == typeof e.amount || r.push(new fs(t,"details.amount","string")),
            e.currencyCode && "string" == typeof e.currencyCode || r.push(new fs(t,"details.currencyCode","string"))),
            r
        }
    }
      , If = [yi, _i, Ei, Ti];
    function Sf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function wf(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Sf(Object(r), !0).forEach((function(t) {
                Of(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sf(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Of(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    var Cf = {
        addressLines: "addressLines",
        city: "locality",
        country: "countryCode",
        postalCode: "postalCode",
        state: "administrativeArea"
    }
      , Tf = ["visa", "masterCard", "jcb", "discover", "amex"];
    function Af(e) {
        var t;
        return {
            amount: e.amount,
            label: e.label,
            type: null !== (t = e.pending) && void 0 !== t && t ? "pending" : "final"
        }
    }
    function Pf(e) {
        return {
            amount: e.amount,
            detail: "",
            identifier: e.id,
            label: e.label
        }
    }
    function Rf(e, t) {
        return t ? Af(t) : e
    }
    function Nf(e, t) {
        return t ? t.map(Af) : e
    }
    function Df(e, t) {
        return t ? t.map(Pf) : e
    }
    function Lf(e) {
        for (var t = 3; t > 0 && !e.supportsVersion(t); )
            t -= 1;
        return t
    }
    function xf(e) {
        var {addressLines: t, locality: r, administrativeArea: n, postalCode: i, countryCode: o, givenName: a, familyName: s, emailAddress: c, phoneNumber: u} = e;
        return {
            addressLines: t,
            city: r,
            countryCode: null == o ? void 0 : o.toUpperCase(),
            email: c,
            familyName: s,
            givenName: a,
            phone: u,
            postalCode: i,
            state: n
        }
    }
    function kf(e) {
        var {amount: t, identifier: r, label: n} = e;
        return {
            amount: t,
            id: r,
            label: n
        }
    }
    function Mf(e, t, r) {
        return {
            errors: (n = e,
            i = [],
            void 0 !== n.error && i.push(new window.ApplePayError("addressUnserviceable","postalAddress",n.error)),
            n.shippingErrors && Object.entries(n.shippingErrors).forEach((e => {
                var t, [r,n] = e, o = null !== (t = Cf[r]) && void 0 !== t ? t : "postalAddress";
                i.push(new window.ApplePayError("shippingContactInvalid",o,n))
            }
            )),
            i),
            newLineItems: Nf(t.lineItems, gh(e, r)),
            newShippingMethods: Df(t.shippingMethods, e.shippingOptions),
            newTotal: Rf(t.total, e.total)
        };
        var n, i
    }
    function jf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Uf(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? jf(Object(r), !0).forEach((function(t) {
                Hf(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jf(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Hf(e, t, r) {
        return (t = function(e) {
            var t = function(e) {
                if ("object" != typeof e || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(e, "string");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function Bf(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function Ff(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    Bf(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    Bf(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    class qf extends Error {
    }
    class Vf extends Cs {
        constructor(e, t, r) {
            if (super(t),
            this.methodType = Fi.APPLE_PAY,
            this.sessionInProgress = !1,
            this.wasFirstInteractionCalled = !1,
            this.paymentMethodMessenger = new oc(this.context),
            this.paymentRequestLockController = r,
            this.req = e,
            void 0 === window.ApplePaySession)
                throw new mi(os);
            var n = !1;
            try {
                n = window.ApplePaySession.canMakePayments()
            } catch (e) {
                if ("SecurityError" === vs(e).name)
                    throw new mi(ls);
                throw e
            }
            if (!n)
                throw new mi(as);
            this.SessionHandle = window.ApplePaySession,
            this.validateConfiguration(),
            this.tokenize = this.withErrorHandling(this.tokenize.bind(this), If, "tokenize").bind(this)
        }
        tokenize() {
            var e = this;
            return Ff((function*() {
                if (e.handleFirstInteraction(),
                e.throwIfDestroyed(),
                e.sessionInProgress)
                    throw new Ti([Ts]);
                e.applePayPaymentRequest = function(e, t) {
                    var r = [...Tf];
                    null != t && t && r.push("interac");
                    var n, i, o = {
                        countryCode: e.countryCode,
                        currencyCode: e.currencyCode,
                        lineItems: Nf([], gh(e)),
                        merchantCapabilities: ["supports3DS"],
                        requiredBillingContactFields: ["postalAddress"],
                        shippingMethods: Df([], e.shippingOptions),
                        supportedNetworks: r,
                        total: Af(e.total)
                    };
                    return e.shippingContact && (o.shippingContact = {
                        addressLines: (n = e.shippingContact).addressLines,
                        administrativeArea: n.state,
                        country: th[null !== (i = n.countryCode) && void 0 !== i ? i : ""],
                        countryCode: n.countryCode,
                        emailAddress: n.email,
                        familyName: n.familyName,
                        givenName: n.givenName,
                        locality: n.city,
                        phoneNumber: n.phone,
                        postalCode: n.postalCode
                    }),
                    e.requestBillingContact && (o.requiredShippingContactFields = ["email", "name", "phone"]),
                    e.requestShippingContact && (o.requiredShippingContactFields = ["postalAddress", "name", "email", "phone"]),
                    o
                }(e.req, e.context.getFeatureFlagValues().can_use_interac);
                var t = new e.SessionHandle(Lf(e.SessionHandle),e.applePayPaymentRequest)
                  , r = e.shippingContactChanged.bind(e);
                t.onshippingcontactselected = t => {
                    r(t.shippingContact, e.applePayPaymentRequest)
                }
                ;
                var n = e.shippingOptionChanged.bind(e);
                t.onshippingmethodselected = t => {
                    n(t.shippingMethod, e.applePayPaymentRequest)
                }
                ;
                var i = new Promise(( (e, r) => {
                    t.oncancel = () => {
                        r(new qf)
                    }
                }
                ))
                  , o = new Promise(( (r, n) => {
                    t.onvalidatemerchant = function() {
                        var t = Ff((function*(t) {
                            try {
                                var i = yield e.requestApplePayMerchantValidity(t.validationURL, e.applePayPaymentRequest);
                                r(i)
                            } catch (e) {
                                n(e)
                            }
                        }
                        ));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
                ))
                  , a = new Promise(( (r, n) => {
                    t.onpaymentauthorized = function() {
                        var t = Ff((function*(t) {
                            try {
                                var i = yield e.requestApplePayCardNonce(t);
                                r(i)
                            } catch (e) {
                                n(e)
                            }
                        }
                        ));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
                ));
                e.currentSession = t,
                e.sessionInProgress = !0,
                e.paymentRequestLockController.lock(e),
                e.metricsHandler.logEvent("EXTERNAL_SESSION:START"),
                t.begin();
                try {
                    var s = yield Promise.race([o, i]);
                    t.completeMerchantValidation(s);
                    var {token: c, details: u} = yield Promise.race([a, i]);
                    return e.metricsHandler.logEvent("EXTERNAL_SESSION:OK"),
                    {
                        details: u,
                        status: Vi.OK,
                        token: c
                    }
                } catch (t) {
                    if (t instanceof qf)
                        return e.metricsHandler.logEvent("EXTERNAL_SESSION:CANCEL"),
                        {
                            status: Vi.CANCEL
                        };
                    throw e.metricsHandler.logEvent("EXTERNAL_SESSION:ERROR"),
                    t
                } finally {
                    e.deleteApplePaySession()
                }
            }
            ))()
        }
        destroy() {
            return this.currentSession && (this.currentSession.abort(),
            this.deleteApplePaySession()),
            this.status = bs.DESTROYED,
            this.metricsHandler.logEvent("DESTROYED"),
            Promise.resolve(!0)
        }
        validateConfiguration() {
            var e = this.session;
            if (void 0 === e.applePayMerchantIdentifier || "" === e.applePayMerchantIdentifier)
                throw new mi(us,"applePayMerchantIdentifier");
            if (void 0 === e.locationId || "" === e.locationId)
                throw new mi(us,"locationId")
        }
        requestApplePayCardNonce(e) {
            var t = this;
            return Ff((function*() {
                var r;
                yield t.context.waitForProofOfWorkCompletion();
                var n = {
                    applepayData: e.payment
                }
                  , i = null !== (r = t.selectedShippingMethod) && void 0 !== r ? r : t.getDefaultShippingMethod();
                try {
                    var o = yield t.paymentMethodMessenger.request("REQUEST_APPLE_PAY_CARD_NONCE", n);
                    return t.getApplePaySession().completePayment(t.SessionHandle.STATUS_SUCCESS),
                    t.context.setPaymentMethodTrackingId(o.paymentMethodTrackingId),
                    t.wasFirstInteractionCalled = !1,
                    function(e, t) {
                        var {card: r, cardNonce: n, shippingContact: i, billingContact: o} = e
                          , a = {
                            details: {
                                card: r,
                                method: Fi.APPLE_PAY
                            },
                            token: n
                        };
                        if (i) {
                            var s = {
                                contact: i
                            };
                            t && (s.option = kf(t)),
                            a.details.shipping = s
                        }
                        return o && (a.details.card && (a.details.card.billing = o),
                        a.details.billing = o),
                        a
                    }(o, i)
                } catch (e) {
                    throw t.getApplePaySession().completePayment(t.SessionHandle.STATUS_FAILURE),
                    e
                }
            }
            ))()
        }
        requestApplePayMerchantValidity(e, t) {
            var r = this;
            return Ff((function*() {
                var n, i = t.total.label, o = r.session, a = {
                    clientId: o.applicationId,
                    locationId: o.locationId,
                    merchantName: i,
                    sourceUrl: o.sourceUrl,
                    validationUrl: e
                };
                try {
                    n = yield r.paymentMethodMessenger.request("REQUEST_APPLE_PAY_MERCHANT_VALIDITY", a)
                } catch (e) {
                    throw r.getApplePaySession().abort(),
                    e
                }
                try {
                    return JSON.parse(n.session)
                } catch (e) {
                    throw r.getApplePaySession().abort(),
                    e
                }
            }
            ))()
        }
        shippingContactChanged(e, t) {
            var r = Lf(this.SessionHandle) >= 3 ? this.updateApplePayShippingContactV3(t) : this.updateApplePayShippingContactLegacy(t);
            this.req.hasEventListener(qi.SHIPPING_CONTACT_CHANGED) ? this.req.dispatchEvent(qi.SHIPPING_CONTACT_CHANGED, {
                contactOrOption: xf(e)
            }, (e => {
                this.metricsHandler.logEvent("EVENT_LISTENER_ON_COMPLETE_RESPONSE", Uf(Uf({}, e), {}, {
                    eventName: qi.SHIPPING_CONTACT_CHANGED
                })),
                this.handleShippingContactUpdate(r, e)
            }
            )) : this.handleShippingContactUpdate(r)
        }
        handleShippingContactUpdate(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null === (t = r.shippingOptions) || void 0 === t ? void 0 : t[0], i = this.getDefaultShippingMethod();
            void 0 === n && null !== i && (n = kf(i)),
            void 0 !== n && this.req.hasEventListener(qi.SHIPPING_OPTION_CHANGED) ? (this.selectedShippingMethod = Pf(n),
            this.req.dispatchEvent(qi.SHIPPING_OPTION_CHANGED, {
                contactOrOption: n
            }, (t => {
                this.metricsHandler.logEvent("EVENT_LISTENER_ON_COMPLETE_RESPONSE", Uf(Uf({}, t), {}, {
                    eventName: qi.SHIPPING_OPTION_CHANGED
                })),
                e(Uf(Uf({}, r), t))
            }
            ))) : e(r)
        }
        shippingOptionChanged(e, t) {
            this.selectedShippingMethod = e;
            var r = Lf(this.SessionHandle) >= 3 ? this.updateApplePayShippingMethodV3(t) : this.updateApplePayShippingMethodLegacy(t);
            this.req.hasEventListener(qi.SHIPPING_OPTION_CHANGED) ? this.req.dispatchEvent(qi.SHIPPING_OPTION_CHANGED, {
                contactOrOption: kf(e)
            }, r) : r({})
        }
        updateApplePayPaymentRequest(e) {
            this.applePayPaymentRequest.total = e.newTotal,
            e.newLineItems && (this.applePayPaymentRequest.lineItems = e.newLineItems),
            function(e) {
                return "newShippingMethods"in e
            }(e) && (this.applePayPaymentRequest.shippingMethods = e.newShippingMethods)
        }
        updateApplePayShippingContactV3(e) {
            return t => {
                var r = Mf(t, e, this.req);
                this.updateApplePayPaymentRequest(r),
                this.metricsHandler.logEvent("SHIPPING_ADDRESS_CHANGE:OK"),
                this.getApplePaySession().completeShippingContactSelection(r)
            }
        }
        updateApplePayShippingContactLegacy(e) {
            return t => {
                var r = function(e, t, r, n) {
                    return wf({
                        status: n
                    }, Mf(e, t, r))
                }(t, e, this.req, this.SessionHandle.STATUS_SUCCESS);
                this.updateApplePayPaymentRequest(r),
                this.metricsHandler.logEvent("SHIPPING_ADDRESS_CHANGE:OK"),
                this.getApplePaySession().completeShippingContactSelection(r.status, r.newShippingMethods, r.newTotal, r.newLineItems)
            }
        }
        updateApplePayShippingMethodV3(e) {
            return t => {
                var r = function(e, t, r) {
                    return {
                        newLineItems: Nf(t.lineItems, gh(e, r)),
                        newTotal: Rf(t.total, e.total)
                    }
                }(t, e, this.req);
                this.updateApplePayPaymentRequest(r),
                this.metricsHandler.logEvent("SHIPPING_OPTION_CHANGE:OK"),
                this.getApplePaySession().completeShippingMethodSelection(r)
            }
        }
        updateApplePayShippingMethodLegacy(e) {
            return t => {
                var r = function(e, t, r, n) {
                    return wf({
                        status: n
                    }, Mf(e, t, r))
                }(t, e, this.req, this.SessionHandle.STATUS_SUCCESS);
                this.updateApplePayPaymentRequest(r),
                this.metricsHandler.logEvent("SHIPPING_OPTION_CHANGE:OK"),
                this.getApplePaySession().completeShippingMethodSelection(r.status, r.newTotal, r.newLineItems)
            }
        }
        getDefaultShippingMethod() {
            var {shippingMethods: e} = this.applePayPaymentRequest;
            return e.length > 0 ? this.applePayPaymentRequest.shippingMethods[0] : null
        }
        deleteApplePaySession() {
            delete this.currentSession,
            this.paymentRequestLockController.unlock(this),
            this.sessionInProgress = !1
        }
        handleFirstInteraction() {
            this.wasFirstInteractionCalled || (this.metricsHandler.logEvent("FIRST_INTERACTION:OK"),
            this.wasFirstInteractionCalled = !0)
        }
        getApplePaySession() {
            if (void 0 === this.currentSession)
                throw new Ai("getting Apple Pay Session");
            return this.currentSession
        }
    }
    var Gf = function(e, t, r, n, i) {
        return new Lu(e,t,r,n,i)
    }
      , zf = function(e, t, r) {
        return new Vf(e,t,r)
    }
      , $f = function(e, t, r, n, i) {
        return new Ud(e,t,r,n,i)
    }
      , Wf = function(e, t, r, n, i) {
        return new Vh(e,t,r,n,i)
    };
    function Yf(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
    }
    function Kf(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                    Yf(o, n, i, a, s, "next", e)
                }
                function s(e) {
                    Yf(o, n, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var Xf = ["addEventListener", "attach", "clear", "configure", "destroy", "detach", "focus", "recalculateSize", "removeEventListener", "setError", "tokenize"]
      , Jf = ["addEventListener", "attach", "destroy", "detach", "removeEventListener", "tokenize"]
      , Zf = ["addEventListener", "destroy", "removeEventListener", "tokenize"]
      , Qf = ["addEventListener", "destroy", "removeEventListener", "tokenize"]
      , eg = ["addEventListener", "attach", "clear", "configure", "destroy", "detach", "focus", "removeEventListener", "setError", "tokenize"]
      , tg = ["addEventListener", "attach", "attachCheckoutWidget", "attachMessaging", "destroy", "detach", "displayInformationModal", "removeEventListener", "tokenize"]
      , rg = ["addEventListener", "attach", "destroy", "detach", "removeEventListener"];
    function ng(e, t) {
        var {paymentMethodSupportDetail: r} = t
          , n = t.getSession();
        if (void 0 === n.locationId || 0 === n.locationId.length)
            throw new mi(us,"locationId");
        if (null != r && r[e] && !r[e].IsSupported) {
            var {UnsupportedReasonType: i} = r[e]
              , o = hs;
            throw void 0 !== i && i in is && (o = ps[i]),
            new mi(o)
        }
    }
    function ig(e) {
        if (!(e instanceof bh))
            throw new ti([["paymentRequest", "PaymentRequest"]])
    }
    function og(e, t, r, n) {
        var i = t instanceof Error && r.some((e => t instanceof e));
        return e.metricsHandler.logEvent("BUILD:ERROR", i ? "good" : "bad"),
        i ? t : (e.errorLogger.captureException(t),
        new Ai(n))
    }
    class ag {
        constructor(e, t, r) {
            this.localeStrings = new Yo(navigator.language),
            this.paymentOptions = e,
            this.metrics = t,
            this.errorLogger = r,
            this.paymentRequestLockMap = new WeakMap,
            this.paymentsNumCalls = 1
        }
        overrideStrings(e) {
            var t = this;
            return Kf((function*() {
                try {
                    var r = yield t.getPaymentContext("WebSDK");
                    if (!r.getFeatureFlagValues().can_use_override_strings)
                        throw new fi("overrideStrings");
                    r.metricsHandler.logEvent("OVERRIDE_STRINGS", e),
                    r.setTranslationOverrides(e)
                } catch (e) {
                    if (Ho(e))
                        throw t.errorLogger.captureException(e),
                        new Ai("overriding the strings");
                    throw e
                }
            }
            ))()
        }
        setLocale(e) {
            var t = this;
            return Kf((function*() {
                try {
                    var r = yield t.getPaymentContext("WebSDK");
                    return r.metricsHandler.logEvent("SET_LOCALE", e),
                    r.setLocale(e)
                } catch (e) {
                    if (Ho(e))
                        throw t.errorLogger.captureException(e),
                        new Ai("setting the locale");
                    throw e
                }
            }
            ))()
        }
        verifyBuyer(e, t) {
            var r = this;
            return Kf((function*() {
                var n = [];
                if (r.paymentOptions.locationId && 0 !== r.paymentOptions.locationId.length || n.push(new fs("verifyBuyer","locationId","string")),
                e && "string" == typeof e && 0 !== e.length || n.push(new fs("verifyBuyer","source","string")),
                null === t || "object" != typeof t ? n.push(new fs("verifyBuyer","details","object")) : n.push(...bf.validateVerificationDetails(t, "verifyBuyer")),
                n.length > 0)
                    throw new gs(n);
                var i = yield r.getPaymentContext("WebSDK");
                try {
                    i.metricsHandler.logEvent("VERIFICATION:START");
                    var o = yield i.analyticsBackend.verifyBuyer(e, t);
                    return i.metricsHandler.logEvent("VERIFICATION:OK"),
                    o
                } catch (e) {
                    if (i.metricsHandler.logEvent("VERIFICATION:ERROR"),
                    Qn(e))
                        throw new Zn(e);
                    throw "UnexpectedAnalyticsClientError" !== vs(e).name && r.errorLogger.captureException(e),
                    new Ai("verifying buyer")
                }
            }
            ))()
        }
        card(e) {
            var t = this;
            return Kf((function*() {
                var r = yield t.getPaymentContext("Card");
                r.metricsHandler.logEvent("BUILD:START");
                try {
                    var n = new Pd(r,e);
                    return r.metricsHandler.logEvent("BUILD:OK", "good"),
                    sg(n, Xf)
                } catch (e) {
                    throw og(r, e, [ai, si], "initializing card")
                }
            }
            ))()
        }
        paymentRequest(e) {
            var t = new $h
              , r = new bh(e,this.localeStrings,t);
            return this.paymentRequestLockMap.set(r, t),
            this.getPaymentContext("Payment Request").then((t => {
                var {metricsHandler: n} = t;
                r.setMetricsHandler(n),
                n.logEvent("CONFIGURED", e)
            }
            )),
            r
        }
        googlePay(e) {
            var t = this;
            return Kf((function*() {
                var r = yield t.getPaymentContext("Google Pay");
                r.metricsHandler.logEvent("BUILD:START");
                try {
                    ng(za.GOOGLE_PAY, r),
                    function() {
                        if ("undefined" == typeof ShadowRoot)
                            throw new mi(ss)
                    }(),
                    ig(e);
                    var n = t.getPaymentRequestLock(e)
                      , [i,o] = yield zh(r)
                      , a = Wf(i, e, r, o, n);
                    return r.metricsHandler.logEvent("BUILD:OK", "good"),
                    sg(a, Jf)
                } catch (e) {
                    throw og(r, e, [Ii, ti, mi], "initializing googlePay")
                }
            }
            ))()
        }
        applePay(e) {
            var t = this;
            return Kf((function*() {
                var r = yield t.getPaymentContext("Apple Pay");
                r.metricsHandler.logEvent("BUILD:START");
                try {
                    ng(za.APPLE_PAY, r),
                    ig(e);
                    var n = t.getPaymentRequestLock(e)
                      , i = zf(e, r, n);
                    return r.metricsHandler.logEvent("BUILD:OK", "good"),
                    sg(i, Zf)
                } catch (e) {
                    throw og(r, e, [ti, mi], "initializing applePay")
                }
            }
            ))()
        }
        ach(e) {
            var t = this;
            return Kf((function*() {
                var r = yield t.getPaymentContext("ACH");
                r.metricsHandler.logEvent("BUILD:START");
                try {
                    ng(za.ACH, r);
                    var n = new wc(r,e);
                    return yield n.initialize(),
                    r.metricsHandler.logEvent("BUILD:OK", "good"),
                    sg(n, Qf)
                } catch (e) {
                    throw og(r, e, [si, mi], "initializing ach")
                }
            }
            ))()
        }
        giftCard(e) {
            var t = this;
            return Kf((function*() {
                var r = yield t.getPaymentContext("Gift Card");
                r.metricsHandler.logEvent("BUILD:START");
                try {
                    var n = new Yd(r,e);
                    return r.metricsHandler.logEvent("BUILD:OK", "good"),
                    sg(n, eg)
                } catch (e) {
                    throw og(r, e, [ai, si], "initializing giftcard")
                }
            }
            ))()
        }
        afterpayClearpay(e) {
            var t = this;
            return Kf((function*() {
                var r = yield t.getPaymentContext("Afterpay");
                r.metricsHandler.logEvent("BUILD:START");
                try {
                    ng(za.AFTERPAY, r),
                    ig(e);
                    var n = t.getPaymentRequestLock(e)
                      , [i,o] = yield ku(r)
                      , a = Gf(i, o, e, r, n);
                    return yield a.internalSetCheckoutToken(),
                    r.metricsHandler.logEvent("BUILD:OK", "good"),
                    sg(a, tg)
                } catch (e) {
                    throw og(r, e, [zn, Jn, Wn, pi, ti, mi], "initializing afterpay")
                }
            }
            ))()
        }
        cashAppPay(e, t) {
            var r = this;
            return Kf((function*() {
                var n = yield r.getPaymentContext("Cash App Pay V1");
                n.metricsHandler.logEvent("BUILD:START");
                try {
                    ng(za.CASH_APP_PAY_V1, n),
                    ig(e);
                    var i = r.getPaymentRequestLock(e)
                      , o = yield Bd.initialize(n)
                      , a = $f(o, e, t, n, i);
                    return n.metricsHandler.logEvent("BUILD:OK", "good"),
                    sg(a, rg)
                } catch (e) {
                    throw og(n, e, [li, di, ti, mi], "initializing cashAppPay")
                }
            }
            ))()
        }
        markPaymentsReuse() {
            this.paymentsNumCalls += 1,
            this.metrics.logEvent({
                errorMessage: JSON.stringify({
                    paymentsNumCalls: this.paymentsNumCalls
                }),
                event: "PAYMENTS_REUSE",
                eventSource: "WebSDK"
            })
        }
        getPaymentContext(e) {
            var t = this;
            return Kf((function*() {
                var {featureFlagValues: r, messenger: n, session: i, paymentMethodSupportDetail: o, proofOfWorkComputePromise: a, isTestMerchant: s, analyticsBackend: c} = yield t.initializePaymentMethod()
                  , u = {
                    instanceId: i.instanceId,
                    sessionId: i.sessionId
                };
                void 0 !== i.avt && (t.errorLogger.setUser(i.avt),
                u.avt = i.avt),
                t.errorLogger.setCustomTags(u);
                var l = Is()
                  , d = new Ss(t.metrics,i,e,l);
                t.contextEventTarget || (t.contextEventTarget = new _s);
                var h = new ns(t.errorLogger,n,d,i,o,t.localeStrings,t.contextEventTarget,r,s,c,a);
                return t.errorLogger.setRecordErrorMetrics(h.getFeatureFlagValues().record_error_metrics),
                h
            }
            ))()
        }
        initializePaymentMethod() {
            return this.initializePaymentParamPromise || (this.initializePaymentParamPromise = bf.initializePayment(this.paymentOptions, this.metrics, this.errorLogger, this.localeStrings)),
            this.initializePaymentParamPromise
        }
        getPaymentRequestLock(e) {
            var t = this.paymentRequestLockMap.get(e);
            if (!t) {
                var r = new Ai("PaymentRequestLockMap entry does not exist. This should never happen.");
                throw this.errorLogger.captureException(r),
                r
            }
            return t
        }
    }
    function sg(e, t) {
        var r = {};
        for (var n of t)
            "function" == typeof e[n] && (r[n] = e[n].bind(e));
        return Object.freeze(r)
    }
    var cg = new Map
      , ug = ["ach", "afterpayClearpay", "applePay", "card", "cashAppPay", "giftCard", "googlePay", "paymentRequest", "setLocale", "verifyBuyer"]
      , lg = {
        _utils: {},
        errors: qo,
        payments: function(e, t) {
            var r, n = function(e) {
                if (null != e && "string" != typeof e)
                    throw new Ji;
                return null != e ? e : ""
            }(t), i = "".concat(e, "-").concat(n), o = cg.get(i);
            if (void 0 !== o) {
                var [a,s] = o;
                return a.markPaymentsReuse(),
                s
            }
            if (!(r = c.windowLocation).hostname.endsWith("localhost") && "https:" !== r.protocol)
                throw new vi;
            if (!c.isSupported())
                throw new gi;
            !function(e) {
                if (!function(e) {
                    return !(e.length < 22 || e.length > 37) && Zi.test(e) && !Qi.test(e)
                }(e))
                    throw new Ki;
                var t = e.match(/^[\w-]{22}$/)
                  , r = e.startsWith("sq0idp-")
                  , n = e.startsWith("sandbox-sq0idb")
                  , i = e.startsWith("sq0ids-");
                if (!(t || r || n || i))
                    throw new Ki;
                if (r && !to())
                    throw new Xi("production",qn.env);
                if (n && !eo("sandbox"))
                    throw new Xi("sandbox",qn.env)
            }(e);
            var {hostname: u, origin: l} = c.windowLocation
              , d = new mo({
                applicationId: e,
                applicationUrl: l,
                source: "web-payments-sdk-public",
                useGlobalHandlers: !1
            })
              , h = {
                applicationId: e,
                hostname: u,
                locationId: n,
                sourceUrl: l
            }
              , p = new Ja(d,{
                applicationId: e,
                hostname: u,
                locationId: n
            });
            p.logEvent({
                event: "LOAD:OK",
                eventSource: "WebSDK"
            });
            var f = new ag(h,p,d)
              , g = sg(f, ug);
            return cg.set(i, [f, g]),
            g
        }
    };
    "Square"in window ? Object.assign(window.Square, lg) : window.Square = lg
}
)();
//# debugId=9dcdba89-beb0-51d1-a8f3-07481142779a
