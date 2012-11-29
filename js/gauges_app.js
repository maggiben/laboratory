/*!
 * jQuery JavaScript Library v1.6.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Jun 30 14:16:56 2011 -0400
 */ (function (a, b) {
    function c(a) {
        return J.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function d(a) {
        if (!cl[a]) {
            var b = G.body,
                c = J("<" + a + ">").appendTo(b),
                d = c.css("display");
            c.remove();
            if (d === "none" || d === "") {
                cm || (cm = G.createElement("iframe"), cm.frameBorder = cm.width = cm.height = 0), b.appendChild(cm);
                if (!cn || !cm.createElement) cn = (cm.contentWindow || cm.contentDocument).document, cn.write((G.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), cn.close();
                c = cn.createElement(a), cn.body.appendChild(c), d = J.css(c, "display"), b.removeChild(cm)
            }
            cl[a] = d
        }
        return cl[a]
    }
    function e(a, b) {
        var c = {};
        return J.each(cr.concat.apply([], cr.slice(0, b)), function () {
            c[this] = a
        }), c
    }
    function f() {
        cs = b
    }
    function g() {
        return setTimeout(f, 0), cs = J.now()
    }
    function h() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function i() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function j(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {}, f, g, h = d.length,
            i, j = d[0],
            k, l, m, n, o;
        for (f = 1; f < h; f++) {
            if (f === 1) for (g in a.converters) typeof g == "string" && (e[g.toLowerCase()] = a.converters[g]);
            k = j, j = d[f];
            if (j === "*") j = k;
            else if (k !== "*" && k !== j) {
                l = k + " " + j, m = e[l] || e["* " + j];
                if (!m) {
                    o = b;
                    for (n in e) {
                        i = n.split(" ");
                        if (i[0] === k || i[0] === "*") {
                            o = e[i[1] + " " + j];
                            if (o) {
                                n = e[n], n === !0 ? m = o : o === !0 && (m = n);
                                break
                            }
                        }
                    }
                }!m && !o && J.error("No conversion from " + l.replace(" ", " to ")), m !== !0 && (c = m ? m(c) : o(n(c)))
            }
        }
        return c
    }
    function k(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) return j !== f[0] && f.unshift(j), d[j]
    }
    function l(a, b, c, d) {
        if (J.isArray(b)) J.each(b, function (b, e) {
            c || bO.test(a) ? d(a, e) : l(a + "[" + (typeof e == "object" || J.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (!c && b != null && typeof b == "object") for (var e in b) l(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    function m(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === cb,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = m(a, c, d, e, l, g)));
        return (k || !l) && !g["*"] && (l = m(a, c, d, e, "*", g)), l
    }
    function n(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (J.isFunction(c)) {
                var d = b.toLowerCase().split(bZ),
                    e = 0,
                    f = d.length,
                    g, h, i;
                for (; e < f; e++) g = d[e], i = /^\+/.test(g), i && (g = g.substr(1) || "*"), h = a[g] = a[g] || [], h[i ? "unshift" : "push"](c)
            }
        }
    }
    function o(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bI : bJ;
        if (d > 0) return c !== "border" && J.each(e, function () {
            c || (d -= parseFloat(J.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(J.css(a, c + this)) || 0 : d -= parseFloat(J.css(a, "border" + this + "Width")) || 0
        }), d + "px";
        d = bK(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        return d = parseFloat(d) || 0, c && J.each(e, function () {
            d += parseFloat(J.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(J.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(J.css(a, c + this)) || 0)
        }), d + "px"
    }
    function p(a, b) {
        b.src ? J.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : J.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }
    function q(a) {
        J.nodeName(a, "input") ? r(a) : "getElementsByTagName" in a && J.grep(a.getElementsByTagName("input"), r)
    }
    function r(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }
    function s(a) {
        return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
    }
    function t(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(J.expando)
        }
    }
    function u(a, b) {
        if (b.nodeType === 1 && !! J.hasData(a)) {
            var c = J.expando,
                d = J.data(a),
                e = J.data(b, d);
            if (d = d[c]) {
                var f = d.events;
                e = e[c] = J.extend({}, d);
                if (f) {
                    delete e.handle, e.events = {};
                    for (var g in f) for (var h = 0, i = f[g].length; h < i; h++) J.event.add(b, g + (f[g][h].namespace ? "." : "") + f[g][h].namespace, f[g][h], f[g][h].data)
                }
            }
        }
    }
    function v(a, b) {
        return J.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function w(a, b, c) {
        b = b || 0;
        if (J.isFunction(b)) return J.grep(a, function (a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return J.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = J.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (bl.test(b)) return J.filter(b, d, !c);
            b = J.filter(b, d)
        }
        return J.grep(a, function (a, d) {
            return J.inArray(a, b) >= 0 === c
        })
    }
    function x(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function y(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace($, "`").replace(_, "&")
    }
    function z(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o = [],
            p = [],
            q = J._data(this, "events");
        if (!(a.liveFired === this || !q || !q.live || a.target.disabled || a.button && a.type === "click")) {
            a.namespace && (m = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired = this;
            var r = q.live.slice(0);
            for (h = 0; h < r.length; h++) f = r[h], f.origType.replace(Y, "") === a.type ? p.push(f.selector) : r.splice(h--, 1);
            e = J(a.target).closest(p, a.currentTarget);
            for (i = 0, j = e.length; i < j; i++) {
                l = e[i];
                for (h = 0; h < r.length; h++) {
                    f = r[h];
                    if (l.selector === f.selector && (!m || m.test(f.namespace)) && !l.elem.disabled) {
                        g = l.elem, d = null;
                        if (f.preType === "mouseenter" || f.preType === "mouseleave") a.type = f.preType, d = J(a.relatedTarget).closest(f.selector)[0], d && J.contains(g, d) && (d = g);
                        (!d || d !== g) && o.push({
                            elem: g,
                            handleObj: f,
                            level: l.level
                        })
                    }
                }
            }
            for (i = 0, j = o.length; i < j; i++) {
                e = o[i];
                if (c && e.level > c) break;
                a.currentTarget = e.elem, a.data = e.handleObj.data, a.handleObj = e.handleObj, n = e.handleObj.origHandler.apply(e.elem, arguments);
                if (n === !1 || a.isPropagationStopped()) {
                    c = e.level, n === !1 && (b = !1);
                    if (a.isImmediatePropagationStopped()) break
                }
            }
            return b
        }
    }
    function A(a, c, d) {
        var e = J.extend({}, d[0]);
        e.type = a, e.originalEvent = {}, e.liveFired = b, J.event.handle.call(c, e), e.isDefaultPrevented() && d[0].preventDefault()
    }
    function B() {
        return !0
    }
    function C() {
        return !1
    }
    function D(a, c, d) {
        var e = c + "defer",
            f = c + "queue",
            g = c + "mark",
            h = J.data(a, e, b, !0);
        h && (d === "queue" || !J.data(a, f, b, !0)) && (d === "mark" || !J.data(a, g, b, !0)) && setTimeout(function () {
            !J.data(a, f, b, !0) && !J.data(a, g, b, !0) && (J.removeData(a, e, !0), h.resolve())
        }, 0)
    }
    function E(a) {
        for (var b in a) if (b !== "toJSON") return !1;
        return !0
    }
    function F(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(N, "$1-$2").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : J.isNaN(d) ? M.test(d) ? J.parseJSON(d) : d : parseFloat(d)
                } catch (f) {}
                J.data(a, c, d)
            } else d = b
        }
        return d
    }
    var G = a.document,
        H = a.navigator,
        I = a.location,
        J = function () {
            function c() {
                if (!d.isReady) {
                    try {
                        G.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(c, 1);
                        return
                    }
                    d.ready()
                }
            }
            var d = function (a, b) {
                return new d.fn.init(a, b, g)
            }, e = a.jQuery,
                f = a.$,
                g, h = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                i = /\S/,
                j = /^\s+/,
                k = /\s+$/,
                l = /\d/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z])/ig,
                w = function (a, b) {
                    return b.toUpperCase()
                }, x = H.userAgent,
                y, z, A, B = Object.prototype.toString,
                C = Object.prototype.hasOwnProperty,
                D = Array.prototype.push,
                E = Array.prototype.slice,
                F = String.prototype.trim,
                I = Array.prototype.indexOf,
                J = {};
            return d.fn = d.prototype = {
                constructor: d,
                init: function (a, c, e) {
                    var f, g, i, j;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if (a === "body" && !c && G.body) return this.context = G, this[0] = G.body, this.selector = a, this.length = 1, this;
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? f = h.exec(a) : f = [null, a, null];
                        if (f && (f[1] || !c)) {
                            if (f[1]) return c = c instanceof d ? c[0] : c, j = c ? c.ownerDocument || c : G, i = m.exec(a), i ? d.isPlainObject(c) ? (a = [G.createElement(i[1])], d.fn.attr.call(a, c, !0)) : a = [j.createElement(i[1])] : (i = d.buildFragment([f[1]], [j]), a = (i.cacheable ? d.clone(i.fragment) : i.fragment).childNodes), d.merge(this, a);
                            g = G.getElementById(f[2]);
                            if (g && g.parentNode) {
                                if (g.id !== f[2]) return e.find(a);
                                this.length = 1, this[0] = g
                            }
                            return this.context = G, this.selector = a, this
                        }
                        return !c || c.jquery ? (c || e).find(a) : this.constructor(c).find(a)
                    }
                    return d.isFunction(a) ? e.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), d.makeArray(a, this))
                },
                selector: "",
                jquery: "1.6.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return E.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var e = this.constructor();
                    return d.isArray(a) ? D.apply(e, a) : d.merge(e, a), e.prevObject = this, e.context = this.context, b === "find" ? e.selector = this.selector + (this.selector ? " " : "") + c : b && (e.selector = this.selector + "." + b + "(" + c + ")"), e
                },
                each: function (a, b) {
                    return d.each(this, a, b)
                },
                ready: function (a) {
                    return d.bindReady(), z.done(a), this
                },
                eq: function (a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(d.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: D,
                sort: [].sort,
                splice: [].splice
            }, d.fn.init.prototype = d.fn, d.extend = d.fn.extend = function () {
                var a, c, e, f, g, h, i = arguments[0] || {}, j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !d.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                    e = i[c], f = a[c];
                    if (i === f) continue;
                    l && f && (d.isPlainObject(f) || (g = d.isArray(f))) ? (g ? (g = !1, h = e && d.isArray(e) ? e : []) : h = e && d.isPlainObject(e) ? e : {}, i[c] = d.extend(l, h, f)) : f !== b && (i[c] = f)
                }
                return i
            }, d.extend({
                noConflict: function (b) {
                    return a.$ === d && (a.$ = f), b && a.jQuery === d && (a.jQuery = e), d
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? d.readyWait++ : d.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--d.readyWait || a !== !0 && !d.isReady) {
                        if (!G.body) return setTimeout(d.ready, 1);
                        d.isReady = !0;
                        if (a !== !0 && --d.readyWait > 0) return;
                        z.resolveWith(G, [d]), d.fn.trigger && d(G).trigger("ready").unbind("ready")
                    }
                },
                bindReady: function () {
                    if (!z) {
                        z = d._Deferred();
                        if (G.readyState === "complete") return setTimeout(d.ready, 1);
                        if (G.addEventListener) G.addEventListener("DOMContentLoaded", A, !1), a.addEventListener("load", d.ready, !1);
                        else if (G.attachEvent) {
                            G.attachEvent("onreadystatechange", A), a.attachEvent("onload", d.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (e) {}
                            G.documentElement.doScroll && b && c()
                        }
                    }
                },
                isFunction: function (a) {
                    return d.type(a) === "function"
                },
                isArray: Array.isArray || function (a) {
                    return d.type(a) === "array"
                },
                isWindow: function (a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNaN: function (a) {
                    return a == null || !l.test(a) || isNaN(a)
                },
                type: function (a) {
                    return a == null ? String(a) : J[B.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || d.type(a) !== "object" || a.nodeType || d.isWindow(a)) return !1;
                    if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1;
                    var c;
                    for (c in a);
                    return c === b || C.call(a, c)
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw a
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = d.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                    d.error("Invalid JSON: " + b)
                },
                parseXML: function (b, c, e) {
                    return a.DOMParser ? (e = new DOMParser, c = e.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)), e = c.documentElement, (!e || !e.nodeName || e.nodeName === "parsererror") && d.error("Invalid XML: " + b), c
                },
                noop: function () {},
                globalEval: function (b) {
                    b && i.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(v, w)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, e) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || d.isFunction(a);
                    if (e) {
                        if (i) {
                            for (f in a) if (c.apply(a[f], e) === !1) break
                        } else for (; g < h;) if (c.apply(a[g++], e) === !1) break
                    } else if (i) {
                        for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                    } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                    return a
                },
                trim: F ? function (a) {
                    return a == null ? "" : F.call(a)
                } : function (a) {
                    return a == null ? "" : (a + "").replace(j, "").replace(k, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var e = d.type(a);
                        a.length == null || e === "string" || e === "function" || e === "regexp" || d.isWindow(a) ? D.call(c, a) : d.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b) {
                    if (I) return I.call(b, a);
                    for (var c = 0, d = b.length; c < d; c++) if (b[c] === a) return c;
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else while (c[e] !== b) a[d++] = c[e++];
                    return a.length = d, a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) e = !! b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function (a, c, e) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof d || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || d.isArray(a));
                    if (k) for (; i < j; i++) f = c(a[i], i, e), f != null && (h[h.length] = f);
                    else for (g in a) f = c(a[g], g, e), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var e = a[c];
                        c = a, a = e
                    }
                    if (!d.isFunction(a)) return b;
                    var f = E.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(E.call(arguments)))
                        };
                    return g.guid = a.guid = a.guid || g.guid || d.guid++, g
                },
                access: function (a, c, e, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c) d.access(a, j, c[j], f, g, e);
                        return a
                    }
                    if (e !== b) {
                        f = !h && f && d.isFunction(e);
                        for (var k = 0; k < i; k++) g(a[k], c, f ? e.call(a[k], k, g(a[k], c)) : e, h);
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    d.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (c, e) {
                        return e && e instanceof d && !(e instanceof a) && (e = a(e)), d.fn.init.call(this, c, e, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(G);
                    return a
                },
                browser: {}
            }), d.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), y = d.uaMatch(x), y.browser && (d.browser[y.browser] = !0, d.browser.version = y.version), d.browser.webkit && (d.browser.safari = !0), i.test(" ") && (j = /^[\s\xA0]+/, k = /[\s\xA0]+$/), g = d(G), G.addEventListener ? A = function () {
                G.removeEventListener("DOMContentLoaded", A, !1), d.ready()
            } : G.attachEvent && (A = function () {
                G.readyState === "complete" && (G.detachEvent("onreadystatechange", A), d.ready())
            }), d
        }(),
        K = "done fail isResolved isRejected promise then always pipe".split(" "),
        L = [].slice;
    J.extend({
        _Deferred: function () {
            var a = [],
                b, c, d, e = {
                    done: function () {
                        if (!d) {
                            var c = arguments,
                                f, g, h, i, j;
                            b && (j = b, b = 0);
                            for (f = 0, g = c.length; f < g; f++) h = c[f], i = J.type(h), i === "array" ? e.done.apply(e, h) : i === "function" && a.push(h);
                            j && e.resolveWith(j[0], j[1])
                        }
                        return this
                    },
                    resolveWith: function (e, f) {
                        if (!d && !b && !c) {
                            f = f || [], c = 1;
                            try {
                                while (a[0]) a.shift().apply(e, f)
                            } finally {
                                b = [e, f], c = 0
                            }
                        }
                        return this
                    },
                    resolve: function () {
                        return e.resolveWith(this, arguments), this
                    },
                    isResolved: function () {
                        return !!c || !! b
                    },
                    cancel: function () {
                        return d = 1, a = [], this
                    }
                };
            return e
        },
        Deferred: function (a) {
            var b = J._Deferred(),
                c = J._Deferred(),
                d;
            return J.extend(b, {
                then: function (a, c) {
                    return b.done(a).fail(c), this
                },
                always: function () {
                    return b.done.apply(b, arguments).fail.apply(this, arguments)
                },
                fail: c.done,
                rejectWith: c.resolveWith,
                reject: c.resolve,
                isRejected: c.isResolved,
                pipe: function (a, c) {
                    return J.Deferred(function (d) {
                        J.each({
                            done: [a, "resolve"],
                            fail: [c, "reject"]
                        }, function (a, c) {
                            var e = c[0],
                                f = c[1],
                                g;
                            J.isFunction(e) ? b[a](function () {
                                g = e.apply(this, arguments), g && J.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject) : d[f](g)
                            }) : b[a](d[f])
                        })
                    }).promise()
                },
                promise: function (a) {
                    if (a == null) {
                        if (d) return d;
                        d = a = {}
                    }
                    var c = K.length;
                    while (c--) a[K[c]] = b[K[c]];
                    return a
                }
            }), b.done(c.cancel).fail(b.cancel), delete b.cancel, a && a.call(b, b), b
        },
        when: function (a) {
            function b(a) {
                return function (b) {
                    c[a] = arguments.length > 1 ? L.call(arguments, 0) : b, --f || g.resolveWith(g, L.call(c, 0))
                }
            }
            var c = arguments,
                d = 0,
                e = c.length,
                f = e,
                g = e <= 1 && a && J.isFunction(a.promise) ? a : J.Deferred();
            if (e > 1) {
                for (; d < e; d++) c[d] && J.isFunction(c[d].promise) ? c[d].promise().then(b(d), g.reject) : --f;
                f || g.resolveWith(g, c)
            } else g !== a && g.resolveWith(g, e ? [a] : []);
            return g.promise()
        }
    }), J.support = function () {
        var a = G.createElement("div"),
            b = G.documentElement,
            c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
        a.setAttribute("className", "t"), a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = a.getElementsByTagName("*"), d = a.getElementsByTagName("a")[0];
        if (!c || !c.length || !d) return {};
        e = G.createElement("select"), f = e.appendChild(G.createElement("option")), g = a.getElementsByTagName("input")[0], i = {
            leadingWhitespace: a.firstChild.nodeType === 3,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !! a.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: d.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(d.style.opacity),
            cssFloat: !! d.style.cssFloat,
            checkOn: g.value === "on",
            optSelected: f.selected,
            getSetAttribute: a.className !== "t",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, g.checked = !0, i.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, i.optDisabled = !f.disabled;
        try {
            delete a.test
        } catch (t) {
            i.deleteExpando = !1
        }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
            i.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick")), g = G.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), i.radioValue = g.value === "t", g.setAttribute("checked", "checked"), a.appendChild(g), j = G.createDocumentFragment(), j.appendChild(a.firstChild), i.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", k = G.getElementsByTagName("body")[0], m = G.createElement(k ? "div" : "body"), n = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0
        }, k && J.extend(n, {
            position: "absolute",
            left: -1e3,
            top: -1e3
        });
        for (r in n) m.style[r] = n[r];
        m.appendChild(a), l = k || b, l.insertBefore(m, l.firstChild), i.appendChecked = g.checked, i.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, i.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", i.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", o = a.getElementsByTagName("td"), s = o[0].offsetHeight === 0, o[0].style.display = "", o[1].style.display = "none", i.reliableHiddenOffsets = s && o[0].offsetHeight === 0, a.innerHTML = "", G.defaultView && G.defaultView.getComputedStyle && (h = G.createElement("div"), h.style.width = "0", h.style.marginRight = "0", a.appendChild(h), i.reliableMarginRight = (parseInt((G.defaultView.getComputedStyle(h, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0), m.innerHTML = "", l.removeChild(m);
        if (a.attachEvent) for (r in {
            submit: 1,
            change: 1,
            focusin: 1
        }) q = "on" + r, s = q in a, s || (a.setAttribute(q, "return;"), s = typeof a[q] == "function"), i[r + "Bubbles"] = s;
        return m = j = e = f = k = h = a = g = null, i
    }(), J.boxModel = J.support.boxModel;
    var M = /^(?:\{.*\}|\[.*\])$/,
        N = /([a-z])([A-Z])/g;
    J.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            return a = a.nodeType ? J.cache[a[J.expando]] : a[J.expando], !! a && !E(a)
        },
        data: function (a, c, d, e) {
            if ( !! J.acceptData(a)) {
                var f = J.expando,
                    g = typeof c == "string",
                    h, i = a.nodeType,
                    j = i ? J.cache : a,
                    k = i ? a[J.expando] : a[J.expando] && J.expando;
                if ((!k || e && k && !j[k][f]) && g && d === b) return;
                k || (i ? a[J.expando] = k = ++J.uuid : k = J.expando), j[k] || (j[k] = {}, i || (j[k].toJSON = J.noop));
                if (typeof c == "object" || typeof c == "function") e ? j[k][f] = J.extend(j[k][f], c) : j[k] = J.extend(j[k], c);
                return h = j[k], e && (h[f] || (h[f] = {}), h = h[f]), d !== b && (h[J.camelCase(c)] = d), c === "events" && !h[c] ? h[f] && h[f].events : g ? h[J.camelCase(c)] || h[c] : h
            }
        },
        removeData: function (b, c, d) {
            if ( !! J.acceptData(b)) {
                var e = J.expando,
                    f = b.nodeType,
                    g = f ? J.cache : b,
                    h = f ? b[J.expando] : J.expando;
                if (!g[h]) return;
                if (c) {
                    var i = d ? g[h][e] : g[h];
                    if (i) {
                        delete i[c];
                        if (!E(i)) return
                    }
                }
                if (d) {
                    delete g[h][e];
                    if (!E(g[h])) return
                }
                var j = g[h][e];
                J.support.deleteExpando || g != a ? delete g[h] : g[h] = null, j ? (g[h] = {}, f || (g[h].toJSON = J.noop), g[h][e] = j) : f && (J.support.deleteExpando ? delete b[J.expando] : b.removeAttribute ? b.removeAttribute(J.expando) : b[J.expando] = null)
            }
        },
        _data: function (a, b, c) {
            return J.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = J.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), J.fn.extend({
        data: function (a, c) {
            var d = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    d = J.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var e = this[0].attributes,
                            f;
                        for (var g = 0, h = e.length; g < h; g++) f = e[g].name, f.indexOf("data-") === 0 && (f = J.camelCase(f.substring(5)), F(this[0], f, d[f]))
                    }
                }
                return d
            }
            if (typeof a == "object") return this.each(function () {
                J.data(this, a)
            });
            var i = a.split(".");
            return i[1] = i[1] ? "." + i[1] : "", c === b ? (d = this.triggerHandler("getData" + i[1] + "!", [i[0]]), d === b && this.length && (d = J.data(this[0], a), d = F(this[0], a, d)), d === b && i[1] ? this.data(i[0]) : d) : this.each(function () {
                var b = J(this),
                    d = [i[0], c];
                b.triggerHandler("setData" + i[1] + "!", d), J.data(this, a, c), b.triggerHandler("changeData" + i[1] + "!", d)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                J.removeData(this, a)
            })
        }
    }), J.extend({
        _mark: function (a, c) {
            a && (c = (c || "fx") + "mark", J.data(a, c, (J.data(a, c, b, !0) || 0) + 1, !0))
        },
        _unmark: function (a, c, d) {
            a !== !0 && (d = c, c = a, a = !1);
            if (c) {
                d = d || "fx";
                var e = d + "mark",
                    f = a ? 0 : (J.data(c, e, b, !0) || 1) - 1;
                f ? J.data(c, e, f, !0) : (J.removeData(c, e, !0), D(c, d, "mark"))
            }
        },
        queue: function (a, c, d) {
            if (a) {
                c = (c || "fx") + "queue";
                var e = J.data(a, c, b, !0);
                return d && (!e || J.isArray(d) ? e = J.data(a, c, J.makeArray(d), !0) : e.push(d)), e || []
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = J.queue(a, b),
                d = c.shift(),
                e;
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), d.call(a, function () {
                J.dequeue(a, b)
            })), c.length || (J.removeData(a, b + "queue", !0), D(a, b, "queue"))
        }
    }), J.fn.extend({
        queue: function (a, c) {
            return typeof a != "string" && (c = a, a = "fx"), c === b ? J.queue(this[0], a) : this.each(function () {
                var b = J.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && J.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                J.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            return a = J.fx ? J.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function () {
                var c = this;
                setTimeout(function () {
                    J.dequeue(c, b)
                }, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function d() {
                --h || e.resolveWith(f, [f])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var e = J.Deferred(),
                f = this,
                g = f.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) if (l = J.data(f[g], i, b, !0) || (J.data(f[g], j, b, !0) || J.data(f[g], k, b, !0)) && J.data(f[g], i, J._Deferred(), !0)) h++, l.done(d);
            return d(), e.promise()
        }
    });
    var O = /[\n\t\r]/g,
        P = /\s+/,
        Q = /\r/g,
        R = /^(?:button|input)$/i,
        S = /^(?:button|input|object|select|textarea)$/i,
        T = /^a(?:rea)?$/i,
        U = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = /\:|^on/,
        W, X;
    J.fn.extend({
        attr: function (a, b) {
            return J.access(this, a, b, !0, J.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                J.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return J.access(this, a, b, !0, J.prop)
        },
        removeProp: function (a) {
            return a = J.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, f, g, h;
            if (J.isFunction(a)) return this.each(function (b) {
                J(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(P);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
                    else {
                        f = " " + e.className + " ";
                        for (g = 0, h = b.length; g < h; g++)~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                        e.className = J.trim(f)
                    }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if (J.isFunction(a)) return this.each(function (b) {
                J(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(P);
                for (d = 0, e = this.length; d < e; d++) {
                    f = this[d];
                    if (f.nodeType === 1 && f.className) if (a) {
                        g = (" " + f.className + " ").replace(O, " ");
                        for (h = 0, i = c.length; h < i; h++) g = g.replace(" " + c[h] + " ", " ");
                        f.className = J.trim(g)
                    } else f.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            return J.isFunction(a) ? this.each(function (c) {
                J(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if (c === "string") {
                    var e, f = 0,
                        g = J(this),
                        h = b,
                        i = a.split(P);
                    while (e = i[f++]) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && J._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : J._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ";
            for (var c = 0, d = this.length; c < d; c++) if ((" " + this[c].className + " ").replace(O, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e = this[0];
            if (!arguments.length) return e ? (c = J.valHooks[e.nodeName.toLowerCase()] || J.valHooks[e.type], c && "get" in c && (d = c.get(e, "value")) !== b ? d : (d = e.value, typeof d == "string" ? d.replace(Q, "") : d == null ? "" : d)) : b;
            var f = J.isFunction(a);
            return this.each(function (d) {
                var e = J(this),
                    g;
                if (this.nodeType === 1) {
                    f ? g = a.call(this, d, e.val()) : g = a, g == null ? g = "" : typeof g == "number" ? g += "" : J.isArray(g) && (g = J.map(g, function (a) {
                        return a == null ? "" : a + ""
                    })), c = J.valHooks[this.nodeName.toLowerCase()] || J.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, g, "value") === b) this.value = g
                }
            })
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c = a.selectedIndex,
                        d = [],
                        e = a.options,
                        f = a.type === "select-one";
                    if (c < 0) return null;
                    for (var g = f ? c : 0, h = f ? c + 1 : e.length; g < h; g++) {
                        var i = e[g];
                        if (i.selected && (J.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !J.nodeName(i.parentNode, "optgroup"))) {
                            b = J(i).val();
                            if (f) return b;
                            d.push(b)
                        }
                    }
                    return f && !d.length && e.length ? J(e[c]).val() : d
                },
                set: function (a, b) {
                    var c = J.makeArray(b);
                    return J(a).find("option").each(function () {
                        this.selected = J.inArray(J(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function (a, c, d, e) {
            var f = a.nodeType;
            if (!a || f === 3 || f === 8 || f === 2) return b;
            if (e && c in J.attrFn) return J(a)[c](d);
            if ("getAttribute" in a) {
                var g, h, i = f !== 1 || !J.isXMLDoc(a);
                return i && (c = J.attrFix[c] || c, h = J.attrHooks[c], h || (U.test(c) ? h = X : W && c !== "className" && (J.nodeName(a, "form") || V.test(c)) && (h = W))), d !== b ? d === null ? (J.removeAttr(a, c), b) : h && "set" in h && i && (g = h.set(a, d, c)) !== b ? g : (a.setAttribute(c, "" + d), d) : h && "get" in h && i && (g = h.get(a, c)) !== null ? g : (g = a.getAttribute(c), g === null ? b : g)
            }
            return J.prop(a, c, d)
        },
        removeAttr: function (a, b) {
            var c;
            a.nodeType === 1 && (b = J.attrFix[b] || b, J.support.getSetAttribute ? a.removeAttribute(b) : (J.attr(a, b, ""), a.removeAttributeNode(a.getAttributeNode(b))), U.test(b) && (c = J.propFix[b] || b) in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (R.test(a.nodeName) && a.parentNode) J.error("type property can't be changed");
                    else if (!J.support.radioValue && b === "radio" && J.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabIndex");
                    return c && c.specified ? parseInt(c.value, 10) : S.test(a.nodeName) || T.test(a.nodeName) && a.href ? 0 : b
                }
            },
            value: {
                get: function (a, b) {
                    return W && J.nodeName(a, "button") ? W.get(a, b) : b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (W && J.nodeName(a, "button")) return W.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e = a.nodeType;
            if (!a || e === 3 || e === 8 || e === 2) return b;
            var f, g, h = e !== 1 || !J.isXMLDoc(a);
            return h && (c = J.propFix[c] || c, g = J.propHooks[c]), d !== b ? g && "set" in g && (f = g.set(a, d, c)) !== b ? f : a[c] = d : g && "get" in g && (f = g.get(a, c)) !== b ? f : a[c]
        },
        propHooks: {}
    }), X = {
        get: function (a, c) {
            return J.prop(a, c) ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            return b === !1 ? J.removeAttr(a, c) : (d = J.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, J.support.getSetAttribute || (J.attrFix = J.propFix, W = J.attrHooks.name = J.attrHooks.title = J.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c), d && d.nodeValue !== "" ? d.nodeValue : b
        },
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            if (d) return d.nodeValue = b, b
        }
    }, J.each(["width", "height"], function (a, b) {
        J.attrHooks[b] = J.extend(J.attrHooks[b], {
            set: function (a, c) {
                if (c === "") return a.setAttribute(b, "auto"), c
            }
        })
    })), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function (a, c) {
        J.attrHooks[c] = J.extend(J.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), J.support.style || (J.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    })), J.support.checkOn || J.each(["radio", "checkbox"], function () {
        J.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), J.each(["radio", "checkbox"], function () {
        J.valHooks[this] = J.extend(J.valHooks[this], {
            set: function (a, b) {
                if (J.isArray(b)) return a.checked = J.inArray(J(a).val(), b) >= 0
            }
        })
    });
    var Y = /\.(.*)$/,
        Z = /^(?:textarea|input|select)$/i,
        $ = /\./g,
        _ = / /g,
        ba = /[^\w\s.|`]/g,
        bb = function (a) {
            return a.replace(ba, "\\$&")
        };
    J.event = {
        add: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                if (d === !1) d = C;
                else if (!d) return;
                var f, g;
                d.handler && (f = d, d = f.handler), d.guid || (d.guid = J.guid++);
                var h = J._data(a);
                if (!h) return;
                var i = h.events,
                    j = h.handle;
                i || (h.events = i = {}), j || (h.handle = j = function (a) {
                    return typeof J == "undefined" || !! a && J.event.triggered === a.type ? b : J.event.handle.apply(j.elem, arguments)
                }), j.elem = a, c = c.split(" ");
                var k, l = 0,
                    m;
                while (k = c[l++]) {
                    g = f ? J.extend({}, f) : {
                        handler: d,
                        data: e
                    }, k.indexOf(".") > -1 ? (m = k.split("."), k = m.shift(), g.namespace = m.slice(0).sort().join(".")) : (m = [], g.namespace = ""), g.type = k, g.guid || (g.guid = d.guid);
                    var n = i[k],
                        o = J.event.special[k] || {};
                    if (!n) {
                        n = i[k] = [];
                        if (!o.setup || o.setup.call(a, e, m, j) === !1) a.addEventListener ? a.addEventListener(k, j, !1) : a.attachEvent && a.attachEvent("on" + k, j)
                    }
                    o.add && (o.add.call(a, g), g.handler.guid || (g.handler.guid = d.guid)), n.push(g), J.event.global[k] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                d === !1 && (d = C);
                var f, g, h, i, j = 0,
                    k, l, m, n, o, p, q, r = J.hasData(a) && J._data(a),
                    s = r && r.events;
                if (!r || !s) return;
                c && c.type && (d = c.handler, c = c.type);
                if (!c || typeof c == "string" && c.charAt(0) === ".") {
                    c = c || "";
                    for (g in s) J.event.remove(a, g + c);
                    return
                }
                c = c.split(" ");
                while (g = c[j++]) {
                    q = g, p = null, k = g.indexOf(".") < 0, l = [], k || (l = g.split("."), g = l.shift(), m = new RegExp("(^|\\.)" + J.map(l.slice(0).sort(), bb).join("\\.(?:.*\\.)?") + "(\\.|$)")), o = s[g];
                    if (!o) continue;
                    if (!d) {
                        for (i = 0; i < o.length; i++) {
                            p = o[i];
                            if (k || m.test(p.namespace)) J.event.remove(a, q, p.handler, i), o.splice(i--, 1)
                        }
                        continue
                    }
                    n = J.event.special[g] || {};
                    for (i = e || 0; i < o.length; i++) {
                        p = o[i];
                        if (d.guid === p.guid) {
                            if (k || m.test(p.namespace)) e == null && o.splice(i--, 1), n.remove && n.remove.call(a, p);
                            if (e != null) break
                        }
                    }
                    if (o.length === 0 || e != null && o.length === 1)(!n.teardown || n.teardown.call(a, l) === !1) && J.removeEvent(a, g, r.handle), f = null, delete s[g]
                }
                if (J.isEmptyObject(s)) {
                    var t = r.handle;
                    t && (t.elem = null), delete r.events, delete r.handle, J.isEmptyObject(r) && J.removeData(a, b, !0)
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, f) {
            var g = c.type || c,
                h = [],
                i;
            g.indexOf("!") >= 0 && (g = g.slice(0, -1), i = !0), g.indexOf(".") >= 0 && (h = g.split("."), g = h.shift(), h.sort());
            if ( !! e && !J.event.customEvent[g] || !! J.event.global[g]) {
                c = typeof c == "object" ? c[J.expando] ? c : new J.Event(g, c) : new J.Event(g), c.type = g, c.exclusive = i, c.namespace = h.join("."), c.namespace_re = new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (f || !e) c.preventDefault(), c.stopPropagation();
                if (!e) {
                    J.each(J.cache, function () {
                        var a = J.expando,
                            b = this[a];
                        b && b.events && b.events[g] && J.event.trigger(c, d, b.handle.elem)
                    });
                    return
                }
                if (e.nodeType === 3 || e.nodeType === 8) return;
                c.result = b, c.target = e, d = d != null ? J.makeArray(d) : [], d.unshift(c);
                var j = e,
                    k = g.indexOf(":") < 0 ? "on" + g : "";
                do {
                    var l = J._data(j, "handle");
                    c.currentTarget = j, l && l.apply(j, d), k && J.acceptData(j) && j[k] && j[k].apply(j, d) === !1 && (c.result = !1, c.preventDefault()), j = j.parentNode || j.ownerDocument || j === c.target.ownerDocument && a
                } while (j && !c.isPropagationStopped());
                if (!c.isDefaultPrevented()) {
                    var m, n = J.event.special[g] || {};
                    if ((!n._default || n._default.call(e.ownerDocument, c) === !1) && (g !== "click" || !J.nodeName(e, "a")) && J.acceptData(e)) {
                        try {
                            k && e[g] && (m = e[k], m && (e[k] = null), J.event.triggered = g, e[g]())
                        } catch (o) {}
                        m && (e[k] = m), J.event.triggered = b
                    }
                }
                return c.result
            }
        },
        handle: function (c) {
            c = J.event.fix(c || a.event);
            var d = ((J._data(this, "events") || {})[c.type] || []).slice(0),
                e = !c.exclusive && !c.namespace,
                f = Array.prototype.slice.call(arguments, 0);
            f[0] = c, c.currentTarget = this;
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (e || c.namespace_re.test(i.namespace)) {
                    c.handler = i.handler, c.data = i.data, c.handleObj = i;
                    var j = i.handler.apply(this, f);
                    j !== b && (c.result = j, j === !1 && (c.preventDefault(), c.stopPropagation()));
                    if (c.isImmediatePropagationStopped()) break
                }
            }
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[J.expando]) return a;
            var c = a;
            a = J.Event(c);
            for (var d = this.props.length, e; d;) e = this.props[--d], a[e] = c[e];
            a.target || (a.target = a.srcElement || G), a.target.nodeType === 3 && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
            if (a.pageX == null && a.clientX != null) {
                var f = a.target.ownerDocument || G,
                    g = f.documentElement,
                    h = f.body;
                a.pageX = a.clientX + (g && g.scrollLeft || h && h.scrollLeft || 0) - (g && g.clientLeft || h && h.clientLeft || 0), a.pageY = a.clientY + (g && g.scrollTop || h && h.scrollTop || 0) - (g && g.clientTop || h && h.clientTop || 0)
            }
            return a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode : a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), !a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0), a
        },
        guid: 1e8,
        proxy: J.proxy,
        special: {
            ready: {
                setup: J.bindReady,
                teardown: J.noop
            },
            live: {
                add: function (a) {
                    J.event.add(this, y(a.origType, a.selector), J.extend({}, a, {
                        handler: z,
                        guid: a.handler.guid
                    }))
                },
                remove: function (a) {
                    J.event.remove(this, y(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function (a, b, c) {
                    J.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    }, J.removeEvent = G.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, J.Event = function (a, b) {
        if (!this.preventDefault) return new J.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? B : C) : this.type = a, b && J.extend(this, b), this.timeStamp = J.now(), this[J.expando] = !0
    }, J.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = B;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = B;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = B, this.stopPropagation()
        },
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C
    };
    var bc = function (a) {
        var b = a.relatedTarget,
            c = !1,
            d = a.type;
        a.type = a.data, b !== this && (b && (c = J.contains(this, b)), c || (J.event.handle.apply(this, arguments), a.type = d))
    }, bd = function (a) {
        a.type = a.data, J.event.handle.apply(this, arguments)
    };
    J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        J.event.special[a] = {
            setup: function (c) {
                J.event.add(this, b, c && c.selector ? bd : bc, a)
            },
            teardown: function (a) {
                J.event.remove(this, b, a && a.selector ? bd : bc)
            }
        }
    }), J.support.submitBubbles || (J.event.special.submit = {
        setup: function (a, b) {
            if ( !! J.nodeName(this, "form")) return !1;
            J.event.add(this, "click.specialSubmit", function (a) {
                var b = a.target,
                    c = b.type;
                (c === "submit" || c === "image") && J(b).closest("form").length && A("submit", this, arguments)
            }), J.event.add(this, "keypress.specialSubmit", function (a) {
                var b = a.target,
                    c = b.type;
                (c === "text" || c === "password") && J(b).closest("form").length && a.keyCode === 13 && A("submit", this, arguments)
            })
        },
        teardown: function (a) {
            J.event.remove(this, ".specialSubmit")
        }
    });
    if (!J.support.changeBubbles) {
        var be, bf = function (a) {
            var b = a.type,
                c = a.value;
            return b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? J.map(a.options, function (a) {
                return a.selected
            }).join("-") : "" : J.nodeName(a, "select") && (c = a.selectedIndex), c
        }, bg = function (a) {
            var c = a.target,
                d, e;
            if ( !! Z.test(c.nodeName) && !c.readOnly) {
                d = J._data(c, "_change_data"), e = bf(c), (a.type !== "focusout" || c.type !== "radio") && J._data(c, "_change_data", e);
                if (d === b || e === d) return;
                if (d != null || e) a.type = "change", a.liveFired = b, J.event.trigger(a, arguments[1], c)
            }
        };
        J.event.special.change = {
            filters: {
                focusout: bg,
                beforedeactivate: bg,
                click: function (a) {
                    var b = a.target,
                        c = J.nodeName(b, "input") ? b.type : "";
                    (c === "radio" || c === "checkbox" || J.nodeName(b, "select")) && bg.call(this, a)
                },
                keydown: function (a) {
                    var b = a.target,
                        c = J.nodeName(b, "input") ? b.type : "";
                    (a.keyCode === 13 && !J.nodeName(b, "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && bg.call(this, a)
                },
                beforeactivate: function (a) {
                    var b = a.target;
                    J._data(b, "_change_data", bf(b))
                }
            },
            setup: function (a, b) {
                if (this.type === "file") return !1;
                for (var c in be) J.event.add(this, c + ".specialChange", be[c]);
                return Z.test(this.nodeName)
            },
            teardown: function (a) {
                return J.event.remove(this, ".specialChange"), Z.test(this.nodeName)
            }
        }, be = J.event.special.change.filters, be.focus = be.beforeactivate
    }
    J.support.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        function c(a) {
            var c = J.event.fix(a);
            c.type = b, c.originalEvent = {}, J.event.trigger(c, null, c.target), c.isDefaultPrevented() && a.preventDefault()
        }
        var d = 0;
        J.event.special[b] = {
            setup: function () {
                d++ === 0 && G.addEventListener(a, c, !0)
            },
            teardown: function () {
                --d === 0 && G.removeEventListener(a, c, !0)
            }
        }
    }), J.each(["bind", "one"], function (a, c) {
        J.fn[c] = function (a, d, e) {
            var f;
            if (typeof a == "object") {
                for (var g in a) this[c](g, d, a[g], e);
                return this
            }
            if (arguments.length === 2 || d === !1) e = d, d = b;
            c === "one" ? (f = function (a) {
                return J(this).unbind(a, f), e.apply(this, arguments)
            }, f.guid = e.guid || J.guid++) : f = e;
            if (a === "unload" && c !== "one") this.one(a, d, e);
            else for (var h = 0, i = this.length; h < i; h++) J.event.add(this[h], a, f, d);
            return this
        }
    }), J.fn.extend({
        unbind: function (a, b) {
            if (typeof a == "object" && !a.preventDefault) for (var c in a) this.unbind(c, a[c]);
            else for (var d = 0, e = this.length; d < e; d++) J.event.remove(this[d], a, b);
            return this
        },
        delegate: function (a, b, c, d) {
            return this.live(b, c, d, a)
        },
        undelegate: function (a, b, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
        },
        trigger: function (a, b) {
            return this.each(function () {
                J.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) return J.event.trigger(a, b, this[0], !0)
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || J.guid++,
                d = 0,
                e = function (c) {
                    var e = (J.data(this, "lastToggle" + a.guid) || 0) % d;
                    return J.data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var bh = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    J.each(["live", "die"], function (a, c) {
        J.fn[c] = function (a, d, e, f) {
            var g, h = 0,
                i, j, k, l = f || this.selector,
                m = f ? this : J(this.context);
            if (typeof a == "object" && !a.preventDefault) {
                for (var n in a) m[c](n, d, a[n], l);
                return this
            }
            if (c === "die" && !a && f && f.charAt(0) === ".") return m.unbind(f), this;
            if (d === !1 || J.isFunction(d)) e = d || C, d = b;
            a = (a || "").split(" ");
            while ((g = a[h++]) != null) {
                i = Y.exec(g), j = "", i && (j = i[0], g = g.replace(Y, ""));
                if (g === "hover") {
                    a.push("mouseenter" + j, "mouseleave" + j);
                    continue
                }
                k = g, bh[g] ? (a.push(bh[g] + j), g += j) : g = (bh[g] || g) + j;
                if (c === "live") for (var o = 0, p = m.length; o < p; o++) J.event.add(m[o], "live." + y(g, l), {
                    data: d,
                    selector: l,
                    handler: e,
                    origType: g,
                    origHandler: e,
                    preType: k
                });
                else m.unbind("live." + y(g, l), e)
            }
            return this
        }
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
        J.fn[b] = function (a, c) {
            return c == null && (c = a, a = null), arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        }, J.attrFn && (J.attrFn[b] = !0)
    }),
    function () {
        function a(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1) {
                            f || (i.sizcache = c, i.sizset = g);
                            if (typeof b != "string") {
                                if (i === b) {
                                    j = !0;
                                    break
                                }
                            } else if (k.filter(b, [i]).length > 0) {
                                j = i;
                                break
                            }
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }
        function c(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
                        if (i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }
        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            e = 0,
            f = Object.prototype.toString,
            g = !1,
            h = !0,
            i = /\\/g,
            j = /\W/;
        [0, 0].sort(function () {
            return h = !1, 0
        });
        var k = function (a, b, c, e) {
            c = c || [], b = b || G;
            var g = b;
            if (b.nodeType !== 1 && b.nodeType !== 9) return [];
            if (!a || typeof a != "string") return c;
            var h, i, j, n, o, q, r, s, u = !0,
                v = k.isXML(b),
                w = [],
                x = a;
            do {
                d.exec(""), h = d.exec(x);
                if (h) {
                    x = h[3], w.push(h[1]);
                    if (h[2]) {
                        n = h[3];
                        break
                    }
                }
            } while (h);
            if (w.length > 1 && m.exec(a)) if (w.length === 2 && l.relative[w[0]]) i = t(w[0] + w[1], b);
            else {
                i = l.relative[w[0]] ? [b] : k(w.shift(), b);
                while (w.length) a = w.shift(), l.relative[a] && (a += w.shift()), i = t(a, i)
            } else {
                !e && w.length > 1 && b.nodeType === 9 && !v && l.match.ID.test(w[0]) && !l.match.ID.test(w[w.length - 1]) && (o = k.find(w.shift(), b, v), b = o.expr ? k.filter(o.expr, o.set)[0] : o.set[0]);
                if (b) {
                    o = e ? {
                        expr: w.pop(),
                        set: p(e)
                    } : k.find(w.pop(), w.length !== 1 || w[0] !== "~" && w[0] !== "+" || !b.parentNode ? b : b.parentNode, v), i = o.expr ? k.filter(o.expr, o.set) : o.set, w.length > 0 ? j = p(i) : u = !1;
                    while (w.length) q = w.pop(), r = q, l.relative[q] ? r = w.pop() : q = "", r == null && (r = b), l.relative[q](j, r, v)
                } else j = w = []
            }
            j || (j = i), j || k.error(q || a);
            if (f.call(j) === "[object Array]") if (!u) c.push.apply(c, j);
            else if (b && b.nodeType === 1) for (s = 0; j[s] != null; s++) j[s] && (j[s] === !0 || j[s].nodeType === 1 && k.contains(b, j[s])) && c.push(i[s]);
            else for (s = 0; j[s] != null; s++) j[s] && j[s].nodeType === 1 && c.push(i[s]);
            else p(j, c);
            return n && (k(n, g, c, e), k.uniqueSort(c)), c
        };
        k.uniqueSort = function (a) {
            if (r) {
                g = h, a.sort(r);
                if (g) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, k.matches = function (a, b) {
            return k(a, null, null, b)
        }, k.matchesSelector = function (a, b) {
            return k(b, null, null, [a]).length > 0
        }, k.find = function (a, b, c) {
            var d;
            if (!a) return [];
            for (var e = 0, f = l.order.length; e < f; e++) {
                var g, h = l.order[e];
                if (g = l.leftMatch[h].exec(a)) {
                    var j = g[1];
                    g.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(i, ""), d = l.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(l.match[h], "");
                            break
                        }
                    }
                }
            }
            return d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []), {
                set: d,
                expr: a
            }
        }, k.filter = function (a, c, d, e) {
            var f, g, h = a,
                i = [],
                j = c,
                m = c && c[0] && k.isXML(c[0]);
            while (a && c.length) {
                for (var n in l.filter) if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
                    var o, p, q = l.filter[n],
                        r = f[1];
                    g = !1, f.splice(1, 1);
                    if (r.substr(r.length - 1) === "\\") continue;
                    j === i && (i = []);
                    if (l.preFilter[n]) {
                        f = l.preFilter[n](f, j, d, i, e, m);
                        if (!f) g = o = !0;
                        else if (f === !0) continue
                    }
                    if (f) for (var s = 0;
                    (p = j[s]) != null; s++) if (p) {
                        o = q(p, f, s, j);
                        var t = e ^ !! o;
                        d && o != null ? t ? g = !0 : j[s] = !1 : t && (i.push(p), g = !0)
                    }
                    if (o !== b) {
                        d || (j = i), a = a.replace(l.match[n], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === h) {
                    if (g != null) break;
                    k.error(a)
                }
                h = a
            }
            return j
        }, k.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var l = k.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                },
                type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string",
                        d = c && !j.test(b),
                        e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1);
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && k.filter(b, a, !0)
                },
                ">": function (a, b) {
                    var c, d = typeof b == "string",
                        e = 0,
                        f = a.length;
                    if (d && !j.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && k.filter(b, a, !0)
                    }
                },
                "": function (b, d, f) {
                    var g, h = e++,
                        i = a;
                    typeof d == "string" && !j.test(d) && (d = d.toLowerCase(), g = d, i = c), i("parentNode", d, h, b, g, f)
                },
                "~": function (b, d, f) {
                    var g, h = e++,
                        i = a;
                    typeof d == "string" && !j.test(d) && (d = d.toLowerCase(), g = d, i = c), i("previousSibling", d, h, b, g, f)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [],
                            d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                },
                TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(i, "") + " ";
                    if (f) return a;
                    for (var g = 0, h;
                    (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                },
                ID: function (a) {
                    return a[1].replace(i, "")
                },
                TAG: function (a, b) {
                    return a[1].replace(i, "").toLowerCase()
                },
                CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || k.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else a[2] && k.error(a[0]);
                    return a[0] = e++, a
                },
                ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(i, "");
                    return !f && l.attrMap[g] && (a[1] = l.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(i, ""), a[2] === "~=" && (a[4] = " " + a[4] + " "), a
                },
                PSEUDO: function (a, b, c, e, f) {
                    if (a[1] === "not") {
                        if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                            var g = k.filter(a[3], b, c, !0 ^ f);
                            return c || e.push.apply(e, g), !1
                        }
                        a[3] = k(a[3], null, null, b)
                    } else if (l.match.POS.test(a[0]) || l.match.CHILD.test(a[0])) return !0;
                    return a
                },
                POS: function (a) {
                    return a.unshift(!0), a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    return a.checked === !0
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                parent: function (a) {
                    return !!a.firstChild
                },
                empty: function (a) {
                    return !a.firstChild
                },
                has: function (a, b, c) {
                    return !!k(c[3], a).length
                },
                header: function (a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function (a) {
                    var b = a.getAttribute("type"),
                        c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                },
                radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },
                checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },
                file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },
                password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                },
                submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                },
                image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },
                reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                },
                input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                },
                last: function (a, b, c, d) {
                    return b === d.length - 1
                },
                even: function (a, b) {
                    return b % 2 === 0
                },
                odd: function (a, b) {
                    return b % 2 === 1
                },
                lt: function (a, b, c) {
                    return b < c[3] - 0
                },
                gt: function (a, b, c) {
                    return b > c[3] - 0
                },
                nth: function (a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1],
                        f = l.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1;
                        return !0
                    }
                    k.error(e)
                },
                CHILD: function (a, b) {
                    var c = b[1],
                        d = a;
                    switch (c) {
                        case "only":
                        case "first":
                            while (d = d.previousSibling) if (d.nodeType === 1) return !1;
                            if (c === "first") return !0;
                            d = a;
                        case "last":
                            while (d = d.nextSibling) if (d.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            var e = b[2],
                                f = b[3];
                            if (e === 1 && f === 0) return !0;
                            var g = b[0],
                                h = a.parentNode;
                            if (h && (h.sizcache !== g || !a.nodeIndex)) {
                                var i = 0;
                                for (d = h.firstChild; d; d = d.nextSibling) d.nodeType === 1 && (d.nodeIndex = ++i);
                                h.sizcache = g
                            }
                            var j = a.nodeIndex - f;
                            return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
                    }
                },
                ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                },
                CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function (a, b) {
                    var c = b[1],
                        d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                        e = d + "",
                        f = b[2],
                        g = b[4];
                    return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                },
                POS: function (a, b, c, d) {
                    var e = b[2],
                        f = l.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        }, m = l.match.POS,
            n = function (a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var o in l.match) l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
        var p = function (a, b) {
            return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
        };
        try {
            Array.prototype.slice.call(G.documentElement.childNodes, 0)[0].nodeType
        } catch (q) {
            p = function (a, b) {
                var c = 0,
                    d = b || [];
                if (f.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var r, s;
        G.documentElement.compareDocumentPosition ? r = function (a, b) {
            return a === b ? (g = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (r = function (a, b) {
            if (a === b) return g = !0, 0;
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [],
                h = a.parentNode,
                i = b.parentNode,
                j = h;
            if (h === i) return s(a, b);
            if (!h) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return s(e[k], f[k]);
            return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
        }, s = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }), k.getText = function (a) {
            var b = "",
                c;
            for (var d = 0; a[d]; d++) c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += k.getText(c.childNodes));
            return b
        },
        function () {
            var a = G.createElement("div"),
                c = "script" + (new Date).getTime(),
                d = G.documentElement;
            a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), G.getElementById(c) && (l.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, l.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), d.removeChild(a), d = a = null
        }(),
        function () {
            var a = G.createElement("div");
            a.appendChild(G.createComment("")), a.getElementsByTagName("*").length > 0 && (l.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), G.querySelectorAll && function () {
            var a = k,
                b = G.createElement("div"),
                c = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                k = function (b, d, e, f) {
                    d = d || G;
                    if (!f && !k.isXML(d)) {
                        var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (g && (d.nodeType === 1 || d.nodeType === 9)) {
                            if (g[1]) return p(d.getElementsByTagName(b), e);
                            if (g[2] && l.find.CLASS && d.getElementsByClassName) return p(d.getElementsByClassName(g[2]), e)
                        }
                        if (d.nodeType === 9) {
                            if (b === "body" && d.body) return p([d.body], e);
                            if (g && g[3]) {
                                var h = d.getElementById(g[3]);
                                if (!h || !h.parentNode) return p([], e);
                                if (h.id === g[3]) return p([h], e)
                            }
                            try {
                                return p(d.querySelectorAll(b), e)
                            } catch (i) {}
                        } else if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                            var j = d,
                                m = d.getAttribute("id"),
                                n = m || c,
                                o = d.parentNode,
                                q = /^\s*[+~]/.test(b);
                            m ? n = n.replace(/'/g, "\\$&") : d.setAttribute("id", n), q && o && (d = d.parentNode);
                            try {
                                if (!q || o) return p(d.querySelectorAll("[id='" + n + "'] " + b), e)
                            } catch (r) {} finally {
                                m || j.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, d, e, f)
                };
                for (var d in a) k[d] = a[d];
                b = null
            }
        }(),
        function () {
            var a = G.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var c = !b.call(G.createElement("div"), "div"),
                    d = !1;
                try {
                    b.call(G.documentElement, "[test!='']:sizzle")
                } catch (e) {
                    d = !0
                }
                k.matchesSelector = function (a, e) {
                    e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!k.isXML(a)) try {
                        if (d || !l.match.PSEUDO.test(e) && !/!=/.test(e)) {
                            var f = b.call(a, e);
                            if (f || !c || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {}
                    return k(e, null, null, [a]).length > 0
                }
            }
        }(),
        function () {
            var a = G.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                l.order.splice(1, 0, "CLASS"), l.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), G.documentElement.contains ? k.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : G.documentElement.compareDocumentPosition ? k.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : k.contains = function () {
            return !1
        }, k.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var t = function (a, b) {
            var c, d = [],
                e = "",
                f = b.nodeType ? [b] : b;
            while (c = l.match.PSEUDO.exec(a)) e += c[0], a = a.replace(l.match.PSEUDO, "");
            a = l.relative[a] ? a + "*" : a;
            for (var g = 0, h = f.length; g < h; g++) k(a, f[g], d);
            return k.filter(e, d)
        };
        J.find = k, J.expr = k.selectors, J.expr[":"] = J.expr.filters, J.unique = k.uniqueSort, J.text = k.getText, J.isXMLDoc = k.isXML, J.contains = k.contains
    }();
    var bi = /Until$/,
        bj = /^(?:parents|prevUntil|prevAll)/,
        bk = /,/,
        bl = /^.[^:#\[\.,]*$/,
        bm = Array.prototype.slice,
        bn = J.expr.match.POS,
        bo = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") return J(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) if (J.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                f, g, h;
            for (c = 0, d = this.length; c < d; c++) {
                f = e.length, J.find(a, this[c], e);
                if (c > 0) for (g = f; g < e.length; g++) for (h = 0; h < f; h++) if (e[h] === e[g]) {
                    e.splice(g--, 1);
                    break
                }
            }
            return e
        },
        has: function (a) {
            var b = J(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) if (J.contains(this, b[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(w(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(w(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? J.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, f = this[0];
            if (J.isArray(a)) {
                var g, h, i = {}, j = 1;
                if (f && a.length) {
                    for (d = 0, e = a.length; d < e; d++) h = a[d], i[h] || (i[h] = bn.test(h) ? J(h, b || this.context) : h);
                    while (f && f.ownerDocument && f !== b) {
                        for (h in i) g = i[h], (g.jquery ? g.index(f) > -1 : J(f).is(g)) && c.push({
                            selector: h,
                            elem: f,
                            level: j
                        });
                        f = f.parentNode, j++
                    }
                }
                return c
            }
            var k = bn.test(a) || typeof a != "string" ? J(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                f = this[d];
                while (f) {
                    if (k ? k.index(f) > -1 : J.find.matchesSelector(f, a)) {
                        c.push(f);
                        break
                    }
                    f = f.parentNode;
                    if (!f || !f.ownerDocument || f === b || f.nodeType === 11) break
                }
            }
            return c = c.length > 1 ? J.unique(c) : c, this.pushStack(c, "closest", a)
        },
        index: function (a) {
            return !a || typeof a == "string" ? J.inArray(this[0], a ? J(a) : this.parent().children()) : J.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? J(a, b) : J.makeArray(a && a.nodeType ? [a] : a),
                d = J.merge(this.get(), c);
            return this.pushStack(x(c[0]) || x(d[0]) ? d : J.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), J.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return J.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return J.dir(a, "parentNode", c)
        },
        next: function (a) {
            return J.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return J.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return J.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return J.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return J.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return J.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return J.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return J.sibling(a.firstChild)
        },
        contents: function (a) {
            return J.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : J.makeArray(a.childNodes)
        }
    }, function (a, b) {
        J.fn[a] = function (c, d) {
            var e = J.map(this, b, c),
                f = bm.call(arguments);
            return bi.test(a) || (d = c), d && typeof d == "string" && (e = J.filter(d, e)), e = this.length > 1 && !bo[a] ? J.unique(e) : e, (this.length > 1 || bk.test(d)) && bj.test(a) && (e = e.reverse()), this.pushStack(e, a, f.join(","))
        }
    }), J.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), b.length === 1 ? J.find.matchesSelector(b[0], a) ? [b[0]] : [] : J.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !J(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var bp = / jQuery\d+="(?:\d+|null)"/g,
        bq = /^\s+/,
        br = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        bs = /<([\w:]+)/,
        bt = /<tbody/i,
        bu = /<|&#?\w+;/,
        bv = /<(?:script|object|embed|option|style)/i,
        bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bx = /\/(java|ecma)script/i,
        by = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bz = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, J.support.htmlSerialize || (bz._default = [1, "div<div>", "</div>"]), J.fn.extend({
        text: function (a) {
            return J.isFunction(a) ? this.each(function (b) {
                var c = J(this);
                c.text(a.call(this, b, c.text()))
            }) : typeof a != "object" && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(a)) : J.text(this)
        },
        wrapAll: function (a) {
            if (J.isFunction(a)) return this.each(function (b) {
                J(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = J(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return J.isFunction(a) ? this.each(function (b) {
                J(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = J(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            return this.each(function () {
                J(this).wrapAll(a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = J(arguments[0]);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, J(arguments[0]).toArray()), a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
            (d = this[c]) != null; c++) if (!a || J.filter(a, [d]).length)!b && d.nodeType === 1 && (J.cleanData(d.getElementsByTagName("*")), J.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function () {
            for (var a = 0, b;
            (b = this[a]) != null; a++) {
                b.nodeType === 1 && J.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function (a, b) {
            return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function () {
                return J.clone(this, a, b)
            })
        },
        html: function (a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(bp, "") : null;
            if (typeof a == "string" && !bv.test(a) && (J.support.leadingWhitespace || !bq.test(a)) && !bz[(bs.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(br, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (J.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else J.isFunction(a) ? this.each(function (b) {
                var c = J(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function (a) {
            return this[0] && this[0].parentNode ? J.isFunction(a) ? this.each(function (b) {
                var c = J(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : (typeof a != "string" && (a = J(a).detach()), this.each(function () {
                var b = this.nextSibling,
                    c = this.parentNode;
                J(this).remove(), b ? J(b).before(a) : J(c).append(a)
            })) : this.length ? this.pushStack(J(J.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, f, g, h, i = a[0],
                j = [];
            if (!J.support.checkClone && arguments.length === 3 && typeof i == "string" && bw.test(i)) return this.each(function () {
                J(this).domManip(a, c, d, !0)
            });
            if (J.isFunction(i)) return this.each(function (e) {
                var f = J(this);
                a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                h = i && i.parentNode, J.support.parentNode && h && h.nodeType === 11 && h.childNodes.length === this.length ? e = {
                    fragment: h
                } : e = J.buildFragment(a, this, j), g = e.fragment, g.childNodes.length === 1 ? f = g = g.firstChild : f = g.firstChild;
                if (f) {
                    c = c && J.nodeName(f, "tr");
                    for (var k = 0, l = this.length, m = l - 1; k < l; k++) d.call(c ? v(this[k], f) : this[k], e.cacheable || l > 1 && k < m ? J.clone(g, !0, !0) : g)
                }
                j.length && J.each(j, p)
            }
            return this
        }
    }), J.buildFragment = function (a, b, c) {
        var d, e, f, g;
        return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = G), a.length === 1 && typeof a[0] == "string" && a[0].length < 512 && g === G && a[0].charAt(0) === "<" && !bv.test(a[0]) && (J.support.checkClone || !bw.test(a[0])) && (e = !0, f = J.fragments[a[0]], f && f !== 1 && (d = f)), d || (d = g.createDocumentFragment(), J.clean(a, g, d, c)), e && (J.fragments[a[0]] = f ? d : 1), {
            fragment: d,
            cacheable: e
        }
    }, J.fragments = {}, J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        J.fn[a] = function (c) {
            var d = [],
                e = J(c),
                f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && e.length === 1) return e[b](this[0]), this;
            for (var g = 0, h = e.length; g < h; g++) {
                var i = (g > 0 ? this.clone(!0) : this).get();
                J(e[g])[b](i), d = d.concat(i)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), J.extend({
        clone: function (a, b, c) {
            var d = a.cloneNode(!0),
                e, f, g;
            if ((!J.support.noCloneEvent || !J.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !J.isXMLDoc(a)) {
                t(a,
                d), e = s(a), f = s(d);
                for (g = 0; e[g]; ++g) t(e[g], f[g])
            }
            if (b) {
                u(a, d);
                if (c) {
                    e = s(a), f = s(d);
                    for (g = 0; e[g]; ++g) u(e[g], f[g])
                }
            }
            return e = f = null, d
        },
        clean: function (a, b, c, d) {
            var e;
            b = b || G, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || G);
            var f = [],
                g;
            for (var h = 0, i;
            (i = a[h]) != null; h++) {
                typeof i == "number" && (i += "");
                if (!i) continue;
                if (typeof i == "string") if (!bu.test(i)) i = b.createTextNode(i);
                else {
                    i = i.replace(br, "<$1></$2>");
                    var j = (bs.exec(i) || ["", ""])[1].toLowerCase(),
                        k = bz[j] || bz._default,
                        l = k[0],
                        m = b.createElement("div");
                    m.innerHTML = k[1] + i + k[2];
                    while (l--) m = m.lastChild;
                    if (!J.support.tbody) {
                        var n = bt.test(i),
                            o = j === "table" && !n ? m.firstChild && m.firstChild.childNodes : k[1] === "<table>" && !n ? m.childNodes : [];
                        for (g = o.length - 1; g >= 0; --g) J.nodeName(o[g], "tbody") && !o[g].childNodes.length && o[g].parentNode.removeChild(o[g])
                    }!J.support.leadingWhitespace && bq.test(i) && m.insertBefore(b.createTextNode(bq.exec(i)[0]), m.firstChild), i = m.childNodes
                }
                var p;
                if (!J.support.appendChecked) if (i[0] && typeof (p = i.length) == "number") for (g = 0; g < p; g++) q(i[g]);
                else q(i);
                i.nodeType ? f.push(i) : f = J.merge(f, i)
            }
            if (c) {
                e = function (a) {
                    return !a.type || bx.test(a.type)
                };
                for (h = 0; f[h]; h++) if (d && J.nodeName(f[h], "script") && (!f[h].type || f[h].type.toLowerCase() === "text/javascript")) d.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]);
                else {
                    if (f[h].nodeType === 1) {
                        var r = J.grep(f[h].getElementsByTagName("script"), e);
                        f.splice.apply(f, [h + 1, 0].concat(r))
                    }
                    c.appendChild(f[h])
                }
            }
            return f
        },
        cleanData: function (a) {
            var b, c, d = J.cache,
                e = J.expando,
                f = J.event.special,
                g = J.support.deleteExpando;
            for (var h = 0, i;
            (i = a[h]) != null; h++) {
                if (i.nodeName && J.noData[i.nodeName.toLowerCase()]) continue;
                c = i[J.expando];
                if (c) {
                    b = d[c] && d[c][e];
                    if (b && b.events) {
                        for (var j in b.events) f[j] ? J.event.remove(i, j) : J.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[J.expando] : i.removeAttribute && i.removeAttribute(J.expando), delete d[c]
                }
            }
        }
    });
    var bA = /alpha\([^)]*\)/i,
        bB = /opacity=([^)]*)/,
        bC = /([A-Z]|^ms)/g,
        bD = /^-?\d+(?:px)?$/i,
        bE = /^-?\d/,
        bF = /^[+\-]=/,
        bG = /[^+\-\.\de]+/g,
        bH = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, bI = ["Left", "Right"],
        bJ = ["Top", "Bottom"],
        bK, bL, bM;
    J.fn.css = function (a, c) {
        return arguments.length === 2 && c === b ? this : J.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? J.style(a, c, d) : J.css(a, c)
        })
    }, J.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bK(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !! a.style) {
                var f, g, h = J.camelCase(c),
                    i = a.style,
                    j = J.cssHooks[h];
                c = J.cssProps[h] || h;
                if (d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
                g = typeof d;
                if (g === "number" && isNaN(d) || d == null) return;
                g === "string" && bF.test(d) && (d = +d.replace(bG, "") + parseFloat(J.css(a, c)), g = "number"), g === "number" && !J.cssNumber[h] && (d += "px");
                if (!j || !("set" in j) || (d = j.set(a, d)) !== b) try {
                    i[c] = d
                } catch (k) {}
            }
        },
        css: function (a, c, d) {
            var e, f;
            c = J.camelCase(c), f = J.cssHooks[c], c = J.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (f && "get" in f && (e = f.get(a, !0, d)) !== b) return e;
            if (bK) return bK(a, c)
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), J.curCSS = J.css, J.each(["height", "width"], function (a, b) {
        J.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) return a.offsetWidth !== 0 ? o(a, b, d) : (J.swap(a, bH, function () {
                    e = o(a, b, d)
                }), e)
            },
            set: function (a, b) {
                if (!bD.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), J.support.opacity || (J.cssHooks.opacity = {
        get: function (a, b) {
            return bB.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle;
            c.zoom = 1;
            var e = J.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
                f = d && d.filter || c.filter || "";
            c.filter = bA.test(f) ? f.replace(bA, e) : f + " " + e
        }
    }), J(function () {
        J.support.reliableMarginRight || (J.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                return J.swap(a, {
                    display: "inline-block"
                }, function () {
                    b ? c = bK(a, "margin-right", "marginRight") : c = a.style.marginRight
                }), c
            }
        })
    }), G.defaultView && G.defaultView.getComputedStyle && (bL = function (a, c) {
        var d, e, f;
        c = c.replace(bC, "-$1").toLowerCase();
        if (!(e = a.ownerDocument.defaultView)) return b;
        if (f = e.getComputedStyle(a, null)) d = f.getPropertyValue(c), d === "" && !J.contains(a.ownerDocument.documentElement, a) && (d = J.style(a, c));
        return d
    }), G.documentElement.currentStyle && (bM = function (a, b) {
        var c, d = a.currentStyle && a.currentStyle[b],
            e = a.runtimeStyle && a.runtimeStyle[b],
            f = a.style;
        return !bD.test(d) && bE.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e)), d === "" ? "auto" : d
    }), bK = bL || bM, J.expr && J.expr.filters && (J.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !J.support.reliableHiddenOffsets && (a.style.display || J.css(a, "display")) === "none"
    }, J.expr.filters.visible = function (a) {
        return !J.expr.filters.hidden(a)
    });
    var bN = /%20/g,
        bO = /\[\]$/,
        bP = /\r?\n/g,
        bQ = /#.*$/,
        bR = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bS = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bT = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
        bU = /^(?:GET|HEAD)$/,
        bV = /^\/\//,
        bW = /\?/,
        bX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bY = /^(?:select|textarea)/i,
        bZ = /\s+/,
        b$ = /([?&])_=[^&]*/,
        b_ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        ca = J.fn.load,
        cb = {}, cc = {}, cd, ce;
    try {
        cd = I.href
    } catch (cf) {
        cd = G.createElement("a"), cd.href = "", cd = cd.href
    }
    ce = b_.exec(cd.toLowerCase()) || [], J.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && ca) return ca.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var g = "GET";
            c && (J.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = J.param(c, J.ajaxSettings.traditional), g = "POST"));
            var h = this;
            return J.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), h.html(f ? J("<div>").append(c.replace(bX, "")).find(f) : c)), d && h.each(d, [c, b, a])
                }
            }), this
        },
        serialize: function () {
            return J.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? J.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bY.test(this.nodeName) || bS.test(this.type))
            }).map(function (a, b) {
                var c = J(this).val();
                return c == null ? null : J.isArray(c) ? J.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bP, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bP, "\r\n")
                }
            }).get()
        }
    }), J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        J.fn[b] = function (a) {
            return this.bind(b, a)
        }
    }), J.each(["get", "post"], function (a, c) {
        J[c] = function (a, d, e, f) {
            return J.isFunction(d) && (f = f || e, e = d, d = b), J.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), J.extend({
        getScript: function (a, c) {
            return J.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return J.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? J.extend(!0, a, J.ajaxSettings, b) : (b = a, a = J.extend(!0, J.ajaxSettings, b));
            for (var c in {
                context: 1,
                url: 1
            }) c in b ? a[c] = b[c] : c in J.ajaxSettings && (a[c] = J.ajaxSettings[c]);
            return a
        },
        ajaxSettings: {
            url: cd,
            isLocal: bT.test(ce[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            }
        },
        ajaxPrefilter: n(cb),
        ajaxTransport: n(cc),
        ajax: function (a, c) {
            function d(a, c, d, m) {
                if (v !== 2) {
                    v = 2, t && clearTimeout(t), s = b, q = m || "", y.readyState = a ? 4 : 0;
                    var o, p, r, u = d ? k(e, y, d) : b,
                        x, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (e.ifModified) {
                            if (x = y.getResponseHeader("Last-Modified")) J.lastModified[n] = x;
                            if (z = y.getResponseHeader("Etag")) J.etag[n] = z
                        }
                        if (a === 304) c = "notmodified", o = !0;
                        else try {
                            p = j(e, u), c = "success", o = !0
                        } catch (A) {
                            c = "parsererror", r = A
                        }
                    } else {
                        r = c;
                        if (!c || a) c = "error", a < 0 && (a = 0)
                    }
                    y.status = a, y.statusText = c, o ? h.resolveWith(f, [p, c, y]) : h.rejectWith(f, [y, c, r]), y.statusCode(l), l = b, w && g.trigger("ajax" + (o ? "Success" : "Error"), [y, e, o ? p : r]), i.resolveWith(f, [y, c]), w && (g.trigger("ajaxComplete", [y, e]), --J.active || J.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var e = J.ajaxSetup({}, c),
                f = e.context || e,
                g = f !== e && (f.nodeType || f instanceof J) ? J(f) : J.event,
                h = J.Deferred(),
                i = J._Deferred(),
                l = e.statusCode || {}, n, o = {}, p = {}, q, r, s, t, u, v = 0,
                w, x, y = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!v) {
                            var c = a.toLowerCase();
                            a = p[c] = p[c] || a, o[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return v === 2 ? q : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (v === 2) {
                            if (!r) {
                                r = {};
                                while (c = bR.exec(q)) r[c[1].toLowerCase()] = c[2]
                            }
                            c = r[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        return v || (e.mimeType = a), this
                    },
                    abort: function (a) {
                        return a = a || "abort", s && s.abort(a), d(0, a), this
                    }
                };
            h.promise(y), y.success = y.done, y.error = y.fail, y.complete = i.done, y.statusCode = function (a) {
                if (a) {
                    var b;
                    if (v < 2) for (b in a) l[b] = [l[b], a[b]];
                    else b = a[y.status], y.then(b, b)
                }
                return this
            }, e.url = ((a || e.url) + "").replace(bQ, "").replace(bV, ce[1] + "//"), e.dataTypes = J.trim(e.dataType || "*").toLowerCase().split(bZ), e.crossDomain == null && (u = b_.exec(e.url.toLowerCase()), e.crossDomain = !(!u || u[1] == ce[1] && u[2] == ce[2] && (u[3] || (u[1] === "http:" ? 80 : 443)) == (ce[3] || (ce[1] === "http:" ? 80 : 443)))), e.data && e.processData && typeof e.data != "string" && (e.data = J.param(e.data, e.traditional)), m(cb, e, c, y);
            if (v === 2) return !1;
            w = e.global, e.type = e.type.toUpperCase(), e.hasContent = !bU.test(e.type), w && J.active++ === 0 && J.event.trigger("ajaxStart");
            if (!e.hasContent) {
                e.data && (e.url += (bW.test(e.url) ? "&" : "?") + e.data), n = e.url;
                if (e.cache === !1) {
                    var z = J.now(),
                        A = e.url.replace(b$, "$1_=" + z);
                    e.url = A + (A === e.url ? (bW.test(e.url) ? "&" : "?") + "_=" + z : "")
                }
            }(e.data && e.hasContent && e.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", e.contentType), e.ifModified && (n = n || e.url, J.lastModified[n] && y.setRequestHeader("If-Modified-Since", J.lastModified[n]), J.etag[n] && y.setRequestHeader("If-None-Match", J.etag[n])), y.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + (e.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : e.accepts["*"]);
            for (x in e.headers) y.setRequestHeader(x, e.headers[x]);
            if (!e.beforeSend || e.beforeSend.call(f, y, e) !== !1 && v !== 2) {
                for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) y[x](e[x]);
                s = m(cc, e, c, y);
                if (!s) d(-1, "No Transport");
                else {
                    y.readyState = 1, w && g.trigger("ajaxSend", [y, e]), e.async && e.timeout > 0 && (t = setTimeout(function () {
                        y.abort("timeout")
                    }, e.timeout));
                    try {
                        v = 1, s.send(o, d)
                    } catch (B) {
                        status < 2 ? d(-1, B) : J.error(B)
                    }
                }
                return y
            }
            return y.abort(), !1
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = J.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = J.ajaxSettings.traditional);
            if (J.isArray(a) || a.jquery && !J.isPlainObject(a)) J.each(a, function () {
                e(this.name, this.value)
            });
            else for (var f in a) l(f, a[f], c, e);
            return d.join("&").replace(bN, "+")
        }
    }), J.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cg = J.now(),
        ch = /(\=)\?(&|$)|\?\?/i;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return J.expando + "_" + cg++
        }
    }), J.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ch.test(b.url) || e && ch.test(b.data))) {
            var f, g = b.jsonpCallback = J.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                h = a[g],
                i = b.url,
                j = b.data,
                k = "$1" + g + "$2";
            return b.jsonp !== !1 && (i = i.replace(ch, k), b.url === i && (e && (j = j.replace(ch, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))), b.url = i, b.data = j, a[g] = function (a) {
                f = [a]
            }, d.always(function () {
                a[g] = h, f && J.isFunction(h) && a[g](f[0])
            }), b.converters["script json"] = function () {
                return f || J.error(g + " was not called"), f[0]
            }, b.dataTypes[0] = "json", "script"
        }
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                return J.globalEval(a), a
            }
        }
    }), J.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), J.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = G.head || G.getElementsByTagName("head")[0] || G.documentElement;
            return {
                send: function (e, f) {
                    c = G.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success")
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function () {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var ci = a.ActiveXObject ? function () {
            for (var a in ck) ck[a](0, 1)
        } : !1,
        cj = 0,
        ck;
    J.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && i() || h()
    } : i,
    function (a) {
        J.extend(J.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function (c) {
        if (!c.crossDomain || J.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g = c.xhr(),
                        h, i;
                    c.username ? g.open(c.type, c.url, c.async, c.username, c.password) : g.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (i in c.xhrFields) g[i] = c.xhrFields[i];
                    c.mimeType && g.overrideMimeType && g.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (i in e) g.setRequestHeader(i, e[i])
                    } catch (j) {}
                    g.send(c.hasContent && c.data || null), d = function (a, e) {
                        var i, j, k, l, m;
                        try {
                            if (d && (e || g.readyState === 4)) {
                                d = b, h && (g.onreadystatechange = J.noop, ci && delete ck[h]);
                                if (e) g.readyState !== 4 && g.abort();
                                else {
                                    i = g.status, k = g.getAllResponseHeaders(), l = {}, m = g.responseXML, m && m.documentElement && (l.xml = m), l.text = g.responseText;
                                    try {
                                        j = g.statusText
                                    } catch (n) {
                                        j = ""
                                    }!i && c.isLocal && !c.crossDomain ? i = l.text ? 200 : 404 : i === 1223 && (i = 204)
                                }
                            }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(i, j, l, k)
                    }, !c.async || g.readyState === 4 ? d() : (h = ++cj, ci && (ck || (ck = {}, J(a).unload(ci)), ck[h] = d), g.onreadystatechange = d)
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cl = {}, cm, cn, co = /^(?:toggle|show|hide)$/,
        cp = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cq, cr = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cs, ct = a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
    J.fn.extend({
        show: function (a, b, c) {
            var f, g;
            if (a || a === 0) return this.animate(e("show", 3), a, b, c);
            for (var h = 0, i = this.length; h < i; h++) f = this[h], f.style && (g = f.style.display, !J._data(f, "olddisplay") && g === "none" && (g = f.style.display = ""), g === "" && J.css(f, "display") === "none" && J._data(f, "olddisplay", d(f.nodeName)));
            for (h = 0; h < i; h++) {
                f = this[h];
                if (f.style) {
                    g = f.style.display;
                    if (g === "" || g === "none") f.style.display = J._data(f, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(e("hide", 3), a, b, c);
            for (var d = 0, f = this.length; d < f; d++) if (this[d].style) {
                var g = J.css(this[d], "display");
                g !== "none" && !J._data(this[d], "olddisplay") && J._data(this[d], "olddisplay", g)
            }
            for (d = 0; d < f; d++) this[d].style && (this[d].style.display = "none");
            return this
        },
        _toggle: J.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            return J.isFunction(a) && J.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : J(this).is(":hidden");
                J(this)[b ? "show" : "hide"]()
            }) : this.animate(e("toggle", 3), a, b, c), this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, e) {
            var f = J.speed(b, c, e);
            return J.isEmptyObject(a) ? this.each(f.complete, [!1]) : (a = J.extend({}, a), this[f.queue === !1 ? "each" : "queue"](function () {
                f.queue === !1 && J._mark(this);
                var b = J.extend({}, f),
                    c = this.nodeType === 1,
                    e = c && J(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = J.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], J.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && e || h === "show" && !e) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], J.css(this, "display") === "inline" && J.css(this, "float") === "none" && (J.support.inlineBlockNeedsLayout ? (j = d(this.nodeName), j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) k = new J.fx(this, b, i), h = a[i], co.test(h) ? k[h === "toggle" ? e ? "show" : "hide" : h]() : (l = cp.exec(h), m = k.cur(), l ? (n = parseFloat(l[2]), o = l[3] || (J.cssNumber[i] ? "" : "px"), o !== "px" && (J.style(this, i, (n || 1) + o), m = (n || 1) / k.cur() * m, J.style(this, i, m + o)), l[1] && (n = (l[1] === "-=" ? -1 : 1) * n + m), k.custom(m, n, o)) : k.custom(m, h, ""));
                return !0
            }))
        },
        stop: function (a, b) {
            return a && this.queue([]), this.each(function () {
                var a = J.timers,
                    c = a.length;
                b || J._unmark(!0, this);
                while (c--) a[c].elem === this && (b && a[c](!0), a.splice(c, 1))
            }), b || this.dequeue(), this
        }
    }), J.each({
        slideDown: e("show", 1),
        slideUp: e("hide", 1),
        slideToggle: e("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        J.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), J.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? J.extend({}, a) : {
                complete: c || !c && b || J.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !J.isFunction(b) && b
            };
            return d.duration = J.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in J.fx.speeds ? J.fx.speeds[d.duration] : J.fx.speeds._default, d.old = d.complete, d.complete = function (a) {
                J.isFunction(d.old) && d.old.call(this), d.queue !== !1 ? J.dequeue(this) : a !== !1 && J._unmark(this)
            }, d
        },
        easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            },
            swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), J.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (J.fx.step[this.prop] || J.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
                var a, b = J.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
            }
            return this.elem[this.prop]
        },
        custom: function (a, b, c) {
            function d(a) {
                return e.step(a)
            }
            var e = this,
                f = J.fx,
                h;
            this.startTime = cs || g(), this.start = a, this.end = b, this.unit = c || this.unit || (J.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, d.elem = this.elem, d() && J.timers.push(d) && !cq && (ct ? (cq = !0, h = function () {
                cq && (ct(h), f.tick())
            }, ct(h)) : cq = setInterval(f.tick, f.interval))
        },
        show: function () {
            this.options.orig[this.prop] = J.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), J(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = J.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b = cs || g(),
                c = !0,
                d = this.elem,
                e = this.options,
                f, h;
            if (a || b >= e.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), e.animatedProperties[this.prop] = !0;
                for (f in e.animatedProperties) e.animatedProperties[f] !== !0 && (c = !1);
                if (c) {
                    e.overflow != null && !J.support.shrinkWrapBlocks && J.each(["", "X", "Y"], function (a, b) {
                        d.style["overflow" + b] = e.overflow[a]
                    }), e.hide && J(d).hide();
                    if (e.hide || e.show) for (var i in e.animatedProperties) J.style(d, i, e.orig[i]);
                    e.complete.call(d)
                }
                return !1
            }
            return e.duration == Infinity ? this.now = b : (h = b - this.startTime, this.state = h / e.duration, this.pos = J.easing[e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, J.extend(J.fx, {
        tick: function () {
            for (var a = J.timers, b = 0; b < a.length; ++b) a[b]() || a.splice(b--, 1);
            a.length || J.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(cq), cq = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                J.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), J.expr && J.expr.filters && (J.expr.filters.animated = function (a) {
        return J.grep(J.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cu = /^t(?:able|d|h)$/i,
        cv = /^(?:body|html)$/i;
    "getBoundingClientRect" in G.documentElement ? J.fn.offset = function (a) {
        var b = this[0],
            d;
        if (a) return this.each(function (b) {
            J.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return J.offset.bodyOffset(b);
        try {
            d = b.getBoundingClientRect()
        } catch (e) {}
        var f = b.ownerDocument,
            g = f.documentElement;
        if (!d || !J.contains(g, b)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        var h = f.body,
            i = c(f),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || J.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || J.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = d.top + l - j,
            o = d.left + m - k;
        return {
            top: n,
            left: o
        }
    } : J.fn.offset = function (a) {
        var b = this[0];
        if (a) return this.each(function (b) {
            J.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return J.offset.bodyOffset(b);
        J.offset.initialize();
        var c, d = b.offsetParent,
            e = b,
            f = b.ownerDocument,
            g = f.documentElement,
            h = f.body,
            i = f.defaultView,
            j = i ? i.getComputedStyle(b, null) : b.currentStyle,
            k = b.offsetTop,
            l = b.offsetLeft;
        while ((b = b.parentNode) && b !== h && b !== g) {
            if (J.offset.supportsFixedPosition && j.position === "fixed") break;
            c = i ? i.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === d && (k += b.offsetTop, l += b.offsetLeft, J.offset.doesNotAddBorder && (!J.offset.doesAddBorderForTableAndCells || !cu.test(b.nodeName)) && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), J.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), j = c
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
        return J.offset.supportsFixedPosition && j.position === "fixed" && (k += Math.max(g.scrollTop, h.scrollTop), l += Math.max(g.scrollLeft, h.scrollLeft)), {
            top: k,
            left: l
        }
    }, J.offset = {
        initialize: function () {
            var a = G.body,
                b = G.createElement("div"),
                c, d, e, f, g = parseFloat(J.css(a, "marginTop")) || 0,
                h = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            J.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), b.innerHTML = h, a.insertBefore(b, a.firstChild), c = b.firstChild, d = c.firstChild, f = c.nextSibling.firstChild.firstChild, this.doesNotAddBorder = d.offsetTop !== 5, this.doesAddBorderForTableAndCells = f.offsetTop === 5, d.style.position = "fixed", d.style.top = "20px", this.supportsFixedPosition = d.offsetTop === 20 || d.offsetTop === 15, d.style.position = d.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", this.subtractsBorderForOverflowNotVisible = d.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== g, a.removeChild(b), J.offset.initialize = J.noop
        },
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return J.offset.initialize(), J.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(J.css(a, "marginTop")) || 0, c += parseFloat(J.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = J.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = J(a),
                f = e.offset(),
                g = J.css(a, "top"),
                h = J.css(a, "left"),
                i = (d === "absolute" || d === "fixed") && J.inArray("auto", [g, h]) > -1,
                j = {}, k = {}, l, m;
            i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), J.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
        }
    }, J.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cv.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(J.css(a, "marginTop")) || 0, c.left -= parseFloat(J.css(a, "marginLeft")) || 0, d.top += parseFloat(J.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(J.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || G.body;
                while (a && !cv.test(a.nodeName) && J.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), J.each(["Left", "Top"], function (a, d) {
        var e = "scroll" + d;
        J.fn[e] = function (d) {
            var f, g;
            return d === b ? (f = this[0], f ? (g = c(f), g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : J.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]) : null) : this.each(function () {
                g = c(this), g ? g.scrollTo(a ? J(g).scrollLeft() : d, a ? d : J(g).scrollTop()) : this[e] = d
            })
        }
    }), J.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        J.fn["inner" + c] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(J.css(a, d, "padding")) : null
        }, J.fn["outer" + c] = function (a) {
            var b = this[0];
            return b && b.style ? parseFloat(J.css(b, d, a ? "margin" : "border")) : null
        }, J.fn[d] = function (a) {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (J.isFunction(a)) return this.each(function (b) {
                var c = J(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (J.isWindow(e)) {
                var f = e.document.documentElement["client" + c];
                return e.document.compatMode === "CSS1Compat" && f || e.document.body["client" + c] || f
            }
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var g = J.css(e, d),
                    h = parseFloat(g);
                return J.isNaN(h) ? g : h
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = J
})(window),
function (a) {
    a.color = {}, a.color.make = function (b, c, d, e) {
        var f = {};
        return f.r = b || 0, f.g = c || 0, f.b = d || 0, f.a = e != null ? e : 1, f.add = function (a, b) {
            for (var c = 0; c < a.length; ++c) f[a.charAt(c)] += b;
            return f.normalize()
        }, f.scale = function (a, b) {
            for (var c = 0; c < a.length; ++c) f[a.charAt(c)] *= b;
            return f.normalize()
        }, f.toString = function () {
            return f.a >= 1 ? "rgb(" + [f.r, f.g, f.b].join(",") + ")" : "rgba(" + [f.r, f.g, f.b, f.a].join(",") + ")"
        }, f.normalize = function () {
            function a(a, b, c) {
                return b < a ? a : b > c ? c : b
            }
            return f.r = a(0, parseInt(f.r), 255), f.g = a(0, parseInt(f.g), 255), f.b = a(0, parseInt(f.b), 255), f.a = a(0, f.a, 1), f
        }, f.clone = function () {
            return a.color.make(f.r, f.b, f.g, f.a)
        }, f.normalize()
    }, a.color.extract = function (b, c) {
        var d;
        do {
            d = b.css(c).toLowerCase();
            if (d != "" && d != "transparent") break;
            b = b.parent()
        } while (!a.nodeName(b.get(0), "body"));
        return d == "rgba(0, 0, 0, 0)" && (d = "transparent"), a.color.parse(d)
    }, a.color.parse = function (c) {
        var d, e = a.color.make;
        if (d = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)) return e(parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10));
        if (d = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)) return e(parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10), parseFloat(d[4]));
        if (d = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)) return e(parseFloat(d[1]) * 2.55, parseFloat(d[2]) * 2.55, parseFloat(d[3]) * 2.55);
        if (d = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)) return e(parseFloat(d[1]) * 2.55, parseFloat(d[2]) * 2.55, parseFloat(d[3]) * 2.55, parseFloat(d[4]));
        if (d = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)) return e(parseInt(d[1], 16), parseInt(d[2], 16), parseInt(d[3], 16));
        if (d = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)) return e(parseInt(d[1] + d[1], 16), parseInt(d[2] + d[2], 16), parseInt(d[3] + d[3], 16));
        var f = a.trim(c).toLowerCase();
        return f == "transparent" ? e(255, 255, 255, 0) : (d = b[f] || [0, 0, 0], e(d[0], d[1], d[2]))
    };
    var b = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
}(jQuery),
function (a) {
    function b(b, d, e, f) {
        function x(a, b) {
            b = [w].concat(b);
            for (var c = 0; c < a.length; ++c) a[c].apply(this, b)
        }
        function y() {
            for (var b = 0; b < f.length; ++b) {
                var c = f[b];
                c.init(w), c.options && a.extend(!0, h, c.options)
            }
        }
        function z(b) {
            var c;
            a.extend(!0, h, b), h.xaxis.color == null && (h.xaxis.color = h.grid.color), h.yaxis.color == null && (h.yaxis.color = h.grid.color), h.xaxis.tickColor == null && (h.xaxis.tickColor = h.grid.tickColor), h.yaxis.tickColor == null && (h.yaxis.tickColor = h.grid.tickColor), h.grid.borderColor == null && (h.grid.borderColor = h.grid.color), h.grid.tickColor == null && (h.grid.tickColor = a.color.parse(h.grid.color).scale("a", .22).toString());
            for (c = 0; c < Math.max(1, h.xaxes.length); ++c) h.xaxes[c] = a.extend(!0, {}, h.xaxis, h.xaxes[c]);
            for (c = 0; c < Math.max(1, h.yaxes.length); ++c) h.yaxes[c] = a.extend(!0, {}, h.yaxis, h.yaxes[c]);
            h.xaxis.noTicks && h.xaxis.ticks == null && (h.xaxis.ticks = h.xaxis.noTicks), h.yaxis.noTicks && h.yaxis.ticks == null && (h.yaxis.ticks = h.yaxis.noTicks), h.x2axis && (h.xaxes[1] = a.extend(!0, {}, h.xaxis, h.x2axis), h.xaxes[1].position = "top"), h.y2axis && (h.yaxes[1] = a.extend(!0, {}, h.yaxis, h.y2axis), h.yaxes[1].position = "right"), h.grid.coloredAreas && (h.grid.markings = h.grid.coloredAreas), h.grid.coloredAreasColor && (h.grid.markingsColor = h.grid.coloredAreasColor), h.lines && a.extend(!0, h.series.lines, h.lines), h.points && a.extend(!0, h.series.points, h.points), h.bars && a.extend(!0, h.series.bars, h.bars), h.shadowSize != null && (h.series.shadowSize = h.shadowSize);
            for (c = 0; c < h.xaxes.length; ++c) G(o, c + 1).options = h.xaxes[c];
            for (c = 0; c < h.yaxes.length; ++c) G(p, c + 1).options = h.yaxes[c];
            for (var d in v) h.hooks[d] && h.hooks[d].length && (v[d] = v[d].concat(h.hooks[d]));
            x(v.processOptions, [h])
        }
        function A(a) {
            g = B(a), H(), I()
        }
        function B(b) {
            var c = [];
            for (var d = 0; d < b.length; ++d) {
                var e = a.extend(!0, {}, h.series);
                b[d].data != null ? (e.data = b[d].data, delete b[d].data, a.extend(!0, e, b[d]), b[d].data = e.data) : e.data = b[d], c.push(e)
            }
            return c
        }
        function C(a, b) {
            var c = a[b + "axis"];
            return typeof c == "object" && (c = c.n), typeof c != "number" && (c = 1), c
        }
        function D() {
            return a.grep(o.concat(p), function (a) {
                return a
            })
        }
        function E(a) {
            var b = {}, c, d;
            for (c = 0; c < o.length; ++c) d = o[c], d && d.used && (b["x" + d.n] = d.c2p(a.left));
            for (c = 0; c < p.length; ++c) d = p[c], d && d.used && (b["y" + d.n] = d.c2p(a.top));
            return b.x1 !== undefined && (b.x = b.x1), b.y1 !== undefined && (b.y = b.y1), b
        }
        function F(a) {
            var b = {}, c, d, e;
            for (c = 0; c < o.length; ++c) {
                d = o[c];
                if (d && d.used) {
                    e = "x" + d.n, a[e] == null && d.n == 1 && (e = "x");
                    if (a[e] != null) {
                        b.left = d.p2c(a[e]);
                        break
                    }
                }
            }
            for (c = 0; c < p.length; ++c) {
                d = p[c];
                if (d && d.used) {
                    e = "y" + d.n, a[e] == null && d.n == 1 && (e = "y");
                    if (a[e] != null) {
                        b.top = d.p2c(a[e]);
                        break
                    }
                }
            }
            return b
        }
        function G(b, c) {
            return b[c - 1] || (b[c - 1] = {
                n: c,
                direction: b == o ? "x" : "y",
                options: a.extend(!0, {}, b == o ? h.xaxis : h.yaxis)
            }), b[c - 1]
        }
        function H() {
            var b, c = g.length,
                d = [],
                e = [];
            for (b = 0; b < g.length; ++b) {
                var f = g[b].color;
                f != null && (--c, typeof f == "number" ? e.push(f) : d.push(a.color.parse(g[b].color)))
            }
            for (b = 0; b < e.length; ++b) c = Math.max(c, e[b] + 1);
            var i = [],
                j = 0;
            b = 0;
            while (i.length < c) {
                var k;
                h.colors.length == b ? k = a.color.make(100, 100, 100) : k = a.color.parse(h.colors[b]);
                var l = j % 2 == 1 ? -1 : 1;
                k.scale("rgb", 1 + l * Math.ceil(j / 2) * .2), i.push(k), ++b, b >= h.colors.length && (b = 0, ++j)
            }
            var m = 0,
                n;
            for (b = 0; b < g.length; ++b) {
                n = g[b], n.color == null ? (n.color = i[m].toString(), ++m) : typeof n.color == "number" && (n.color = i[n.color].toString());
                if (n.lines.show == null) {
                    var q, r = !0;
                    for (q in n) if (n[q] && n[q].show) {
                        r = !1;
                        break
                    }
                    r && (n.lines.show = !0)
                }
                n.xaxis = G(o, C(n, "x")), n.yaxis = G(p, C(n, "y"))
            }
        }
        function I() {
            function t(a, b, c) {
                b < a.datamin && b != -d && (a.datamin = b), c > a.datamax && c != d && (a.datamax = c)
            }
            var b = Number.POSITIVE_INFINITY,
                c = Number.NEGATIVE_INFINITY,
                d = Number.MAX_VALUE,
                e, f, h, i, j, k, l, m, n, o, p, q, r, s;
            a.each(D(), function (a, d) {
                d.datamin = b, d.datamax = c, d.used = !1
            });
            for (e = 0; e < g.length; ++e) k = g[e], k.datapoints = {
                points: []
            }, x(v.processRawData, [k, k.data, k.datapoints]);
            for (e = 0; e < g.length; ++e) {
                k = g[e];
                var u = k.data,
                    w = k.datapoints.format;
                if (!w) {
                    w = [], w.push({
                        x: !0,
                        number: !0,
                        required: !0
                    }), w.push({
                        y: !0,
                        number: !0,
                        required: !0
                    });
                    if (k.bars.show || k.lines.show && k.lines.fill) w.push({
                        y: !0,
                        number: !0,
                        required: !1,
                        defaultValue: 0
                    }), k.bars.horizontal && (delete w[w.length - 1].y, w[w.length - 1].x = !0);
                    k.datapoints.format = w
                }
                if (k.datapoints.pointsize != null) continue;
                k.datapoints.pointsize = w.length, m = k.datapoints.pointsize, l = k.datapoints.points, insertSteps = k.lines.show && k.lines.steps, k.xaxis.used = k.yaxis.used = !0;
                for (f = h = 0; f < u.length; ++f, h += m) {
                    s = u[f];
                    var y = s == null;
                    if (!y) for (i = 0; i < m; ++i) q = s[i], r = w[i], r && (r.number && q != null && (q = +q, isNaN(q) ? q = null : q == Infinity ? q = d : q == -Infinity && (q = -d)), q == null && (r.required && (y = !0), r.defaultValue != null && (q = r.defaultValue))), l[h + i] = q;
                    if (y) for (i = 0; i < m; ++i) q = l[h + i], q != null && (r = w[i], r.x && t(k.xaxis, q, q), r.y && t(k.yaxis, q, q)), l[h + i] = null;
                    else if (insertSteps && h > 0 && l[h - m] != null && l[h - m] != l[h] && l[h - m + 1] != l[h + 1]) {
                        for (i = 0; i < m; ++i) l[h + m + i] = l[h + i];
                        l[h + 1] = l[h - m + 1], h += m
                    }
                }
            }
            for (e = 0; e < g.length; ++e) k = g[e], x(v.processDatapoints, [k, k.datapoints]);
            for (e = 0; e < g.length; ++e) {
                k = g[e], l = k.datapoints.points, m = k.datapoints.pointsize;
                var z = b,
                    A = b,
                    B = c,
                    C = c;
                for (f = 0; f < l.length; f += m) {
                    if (l[f] == null) continue;
                    for (i = 0; i < m; ++i) {
                        q = l[f + i], r = w[i];
                        if (!r || q == d || q == -d) continue;
                        r.x && (q < z && (z = q), q > B && (B = q)), r.y && (q < A && (A = q), q > C && (C = q))
                    }
                }
                if (k.bars.show) {
                    var E = k.bars.align == "left" ? 0 : -k.bars.barWidth / 2;
                    k.bars.horizontal ? (A += E, C += E + k.bars.barWidth) : (z += E, B += E + k.bars.barWidth)
                }
                t(k.xaxis, z, B), t(k.yaxis, A, C)
            }
            a.each(D(), function (a, d) {
                d.datamin == b && (d.datamin = null), d.datamax == c && (d.datamax = null)
            })
        }
        function J(c, d) {
            var e = document.createElement("canvas");
            return e.className = d, e.width = r, e.height = s, c || a(e).css({
                position: "absolute",
                left: 0,
                top: 0
            }), a(e).appendTo(b), e.getContext || (e = window.G_vmlCanvasManager.initElement(e)), e.getContext("2d").save(), e
        }
        function K() {
            r = b.width(), s = b.height();
            if (r <= 0 || s <= 0) throw "Invalid dimensions for plot, width = " + r + ", height = " + s
        }
        function L(a) {
            a.width != r && (a.width = r), a.height != s && (a.height = s);
            var b = a.getContext("2d");
            b.restore(), b.save()
        }
        function M() {
            var c, d = b.children("canvas.base"),
                e = b.children("canvas.overlay");
            d.length == 0 || e == 0 ? (b.html(""), b.css({
                padding: 0
            }), b.css("position") == "static" && b.css("position", "relative"), K(), j = J(!0, "base"), k = J(!1, "overlay"), c = !1) : (j = d.get(0), k = e.get(0), c = !0), m = j.getContext("2d"), n = k.getContext("2d"), l = a([k, j]), c && (b.data("plot").shutdown(), w.resize(), n.clearRect(0, 0, r, s), l.unbind(), b.children().not([j, k]).remove()), b.data("plot", w)
        }
        function N() {
            h.grid.hoverable && (l.mousemove(bl), l.mouseleave(bm)), h.grid.clickable && l.click(bn), x(v.bindEvents, [l])
        }
        function O() {
            bj && clearTimeout(bj), l.unbind("mousemove", bl), l.unbind("mouseleave", bm), l.unbind("click", bn), x(v.shutdown, [l])
        }
        function P(a) {
            function b(a) {
                return a
            }
            var c, d, e = a.options.transform || b,
                f = a.options.inverseTransform;
            a.direction == "x" ? (c = a.scale = t / Math.abs(e(a.max) - e(a.min)), d = Math.min(e(a.max), e(a.min))) : (c = a.scale = u / Math.abs(e(a.max) - e(a.min)), c = -c, d = Math.max(e(a.max), e(a.min))), e == b ? a.p2c = function (a) {
                return (a - d) * c
            } : a.p2c = function (a) {
                return (e(a) - d) * c
            }, f ? a.c2p = function (a) {
                return f(d + a / c)
            } : a.c2p = function (a) {
                return d + a / c
            }
        }
        function Q(c) {
            function l(d, e) {
                return a('<div style="position:absolute;top:-10000px;' + e + 'font-size:smaller"><div class="' + c.direction + "Axis " + c.direction + c.n + 'Axis">' + d.join("") + "</div></div>").appendTo(b)
            }
            var d = c.options,
                e, f = c.ticks || [],
                g = [],
                h, i = d.labelWidth,
                j = d.labelHeight,
                k;
            if (c.direction == "x") {
                i == null && (i = Math.floor(r / (f.length > 0 ? f.length : 1)));
                if (j == null) {
                    g = [];
                    for (e = 0; e < f.length; ++e) h = f[e].label, h && g.push('<div class="tickLabel" style="float:left;width:' + i + 'px">' + h + "</div>");
                    g.length > 0 && (g.push('<div style="clear:left"></div>'), k = l(g, "width:10000px;"), j = k.height(), k.remove())
                }
            } else if (i == null || j == null) {
                for (e = 0; e < f.length; ++e) h = f[e].label, h && g.push('<div class="tickLabel">' + h + "</div>");
                g.length > 0 && (k = l(g, ""), i == null && (i = k.children().width()), j == null && (j = k.find("div.tickLabel").height()), k.remove())
            }
            i == null && (i = 0), j == null && (j = 0), c.labelWidth = i, c.labelHeight = j
        }
        function R(b) {
            var c = b.labelWidth,
                d = b.labelHeight,
                e = b.options.position,
                f = b.options.tickLength,
                g = h.grid.axisMargin,
                i = h.grid.labelMargin,
                j = b.direction == "x" ? o : p,
                k, l = a.grep(j, function (a) {
                    return a && a.options.position == e && a.reserveSpace
                });
            a.inArray(b, l) == l.length - 1 && (g = 0), f == null && (f = "full");
            var m = a.grep(j, function (a) {
                return a && a.reserveSpace
            }),
                n = a.inArray(b, m) == 0;
            !n && f == "full" && (f = 5), isNaN(+f) || (i += +f), b.direction == "x" ? (d += i, e == "bottom" ? (q.bottom += d + g, b.box = {
                top: s - q.bottom,
                height: d
            }) : (b.box = {
                top: q.top + g,
                height: d
            }, q.top += d + g)) : (c += i, e == "left" ? (b.box = {
                left: q.left + g,
                width: c
            }, q.left += c + g) : (q.right += c + g, b.box = {
                left: r - q.right,
                width: c
            })), b.position = e, b.tickLength = f, b.box.padding = i, b.innermost = n
        }
        function S(a) {
            a.direction == "x" ? (a.box.left = q.left, a.box.width = t) : (a.box.top = q.top, a.box.height = u)
        }
        function T() {
            var b, c = D();
            a.each(c, function (a, b) {
                b.show = b.options.show, b.show == null && (b.show = b.used), b.reserveSpace = b.show || b.options.reserveSpace, U(b)
            }), allocatedAxes = a.grep(c, function (a) {
                return a.reserveSpace
            }), q.left = q.right = q.top = q.bottom = 0;
            if (h.grid.show) {
                a.each(allocatedAxes, function (a, b) {
                    V(b), W(b), X(b, b.ticks), Q(b)
                });
                for (b = allocatedAxes.length - 1; b >= 0; --b) R(allocatedAxes[b]);
                var d = h.grid.minBorderMargin;
                if (d == null) {
                    d = 0;
                    for (b = 0; b < g.length; ++b) d = Math.max(d, g[b].points.radius + g[b].points.lineWidth / 2)
                }
                for (var e in q) q[e] += h.grid.borderWidth, q[e] = Math.max(d, q[e])
            }
            t = r - q.left - q.right, u = s - q.bottom - q.top, a.each(c, function (a, b) {
                P(b)
            }), h.grid.show && (a.each(allocatedAxes, function (a, b) {
                S(b)
            }), ba()), bh()
        }
        function U(a) {
            var b = a.options,
                c = +(b.min != null ? b.min : a.datamin),
                d = +(b.max != null ? b.max : a.datamax),
                e = d - c;
            if (e == 0) {
                var f = d == 0 ? 1 : .01;
                b.min == null && (c -= f);
                if (b.max == null || b.min != null) d += f
            } else {
                var g = b.autoscaleMargin;
                g != null && (b.min == null && (c -= e * g, c < 0 && a.datamin != null && a.datamin >= 0 && (c = 0)), b.max == null && (d += e * g, d > 0 && a.datamax != null && a.datamax <= 0 && (d = 0)))
            }
            a.min = c, a.max = d
        }
        function V(b) {
            var d = b.options,
                e;
            typeof d.ticks == "number" && d.ticks > 0 ? e = d.ticks : e = .3 * Math.sqrt(b.direction == "x" ? r : s);
            var f = (b.max - b.min) / e,
                g, h, i, j, k, l, m;
            if (d.mode == "time") {
                var n = {
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    month: 2592e6,
                    year: 525949.2 * 60 * 1e3
                }, q = [
                    [1, "second"],
                    [2, "second"],
                    [5, "second"],
                    [10, "second"],
                    [30, "second"],
                    [1, "minute"],
                    [2, "minute"],
                    [5, "minute"],
                    [10, "minute"],
                    [30, "minute"],
                    [1, "hour"],
                    [2, "hour"],
                    [4, "hour"],
                    [8, "hour"],
                    [12, "hour"],
                    [1, "day"],
                    [2, "day"],
                    [3, "day"],
                    [.25, "month"],
                    [.5, "month"],
                    [1, "month"],
                    [2, "month"],
                    [3, "month"],
                    [6, "month"],
                    [1, "year"]
                ],
                    t = 0;
                d.minTickSize != null && (typeof d.tickSize == "number" ? t = d.tickSize : t = d.minTickSize[0] * n[d.minTickSize[1]]);
                for (var k = 0; k < q.length - 1; ++k) if (f < (q[k][0] * n[q[k][1]] + q[k + 1][0] * n[q[k + 1][1]]) / 2 && q[k][0] * n[q[k][1]] >= t) break;
                g = q[k][0], i = q[k][1], i == "year" && (l = Math.pow(10, Math.floor(Math.log(f / n.year) / Math.LN10)), m = f / n.year / l, m < 1.5 ? g = 1 : m < 3 ? g = 2 : m < 7.5 ? g = 5 : g = 10, g *= l), b.tickSize = d.tickSize || [g, i], h = function (a) {
                    var b = [],
                        d = a.tickSize[0],
                        e = a.tickSize[1],
                        f = new Date(a.min),
                        g = d * n[e];
                    e == "second" && f.setUTCSeconds(c(f.getUTCSeconds(), d)), e == "minute" && f.setUTCMinutes(c(f.getUTCMinutes(), d)), e == "hour" && f.setUTCHours(c(f.getUTCHours(), d)), e == "month" && f.setUTCMonth(c(f.getUTCMonth(), d)), e == "year" && f.setUTCFullYear(c(f.getUTCFullYear(), d)), f.setUTCMilliseconds(0), g >= n.minute && f.setUTCSeconds(0), g >= n.hour && f.setUTCMinutes(0), g >= n.day && f.setUTCHours(0), g >= n.day * 4 && f.setUTCDate(1), g >= n.year && f.setUTCMonth(0);
                    var h = 0,
                        i = Number.NaN,
                        j;
                    do {
                        j = i, i = f.getTime(), b.push(i);
                        if (e == "month") if (d < 1) {
                            f.setUTCDate(1);
                            var k = f.getTime();
                            f.setUTCMonth(f.getUTCMonth() + 1);
                            var l = f.getTime();
                            f.setTime(i + h * n.hour + (l - k) * d), h = f.getUTCHours(), f.setUTCHours(0)
                        } else f.setUTCMonth(f.getUTCMonth() + d);
                        else e == "year" ? f.setUTCFullYear(f.getUTCFullYear() + d) : f.setTime(i + g)
                    } while (i < a.max && i != j);
                    return b
                }, j = function (b, c) {
                    var e = new Date(b);
                    if (d.timeformat != null) return a.plot.formatDate(e, d.timeformat, d.monthNames);
                    var f = c.tickSize[0] * n[c.tickSize[1]],
                        g = c.max - c.min,
                        h = d.twelveHourClock ? " %p" : "";
                    return f < n.minute ? fmt = "%h:%M:%S" + h : f < n.day ? g < 2 * n.day ? fmt = "%h:%M" + h : fmt = "%b %d %h:%M" + h : f < n.month ? fmt = "%b %d" : f < n.year ? g < n.year ? fmt = "%b" : fmt = "%b %y" : fmt = "%y", a.plot.formatDate(e, fmt, d.monthNames)
                }
            } else {
                var u = d.tickDecimals,
                    v = -Math.floor(Math.log(f) / Math.LN10);
                u != null && v > u && (v = u), l = Math.pow(10, -v), m = f / l, m < 1.5 ? g = 1 : m < 3 ? (g = 2, m > 2.25 && (u == null || v + 1 <= u) && (g = 2.5, ++v)) : m < 7.5 ? g = 5 : g = 10, g *= l, d.minTickSize != null && g < d.minTickSize && (g = d.minTickSize), b.tickDecimals = Math.max(0, u != null ? u : v), b.tickSize = d.tickSize || g, h = function (a) {
                    var b = [],
                        d = c(a.min, a.tickSize),
                        e = 0,
                        f = Number.NaN,
                        g;
                    do g = f, f = d + e * a.tickSize, b.push(f), ++e;
                    while (f < a.max && f != g);
                    return b
                }, j = function (a, b) {
                    return a.toFixed(b.tickDecimals)
                }
            }
            if (d.alignTicksWithAxis != null) {
                var w = (b.direction == "x" ? o : p)[d.alignTicksWithAxis - 1];
                if (w && w.used && w != b) {
                    var x = h(b);
                    x.length > 0 && (d.min == null && (b.min = Math.min(b.min, x[0])), d.max == null && x.length > 1 && (b.max = Math.max(b.max, x[x.length - 1]))), h = function (a) {
                        var b = [],
                            c, d;
                        for (d = 0; d < w.ticks.length; ++d) c = (w.ticks[d].v - w.min) / (w.max - w.min), c = a.min + c * (a.max - a.min), b.push(c);
                        return b
                    };
                    if (b.mode != "time" && d.tickDecimals == null) {
                        var y = Math.max(0, -Math.floor(Math.log(f) / Math.LN10) + 1),
                            z = h(b);
                        z.length > 1 && /\..*0$/.test((z[1] - z[0]).toFixed(y)) || (b.tickDecimals = y)
                    }
                }
            }
            b.tickGenerator = h, a.isFunction(d.tickFormatter) ? b.tickFormatter = function (a, b) {
                return "" + d.tickFormatter(a, b)
            } : b.tickFormatter = j
        }
        function W(b) {
            var c = b.options.ticks,
                d = [];
            c == null || typeof c == "number" && c > 0 ? d = b.tickGenerator(b) : c && (a.isFunction(c) ? d = c({
                min: b.min,
                max: b.max
            }) : d = c);
            var e, f;
            b.ticks = [];
            for (e = 0; e < d.length; ++e) {
                var g = null,
                    h = d[e];
                typeof h == "object" ? (f = +h[0], h.length > 1 && (g = h[1])) : f = +h, g == null && (g = b.tickFormatter(f, b)), isNaN(f) || b.ticks.push({
                    v: f,
                    label: g
                })
            }
        }
        function X(a, b) {
            a.options.autoscaleMargin && b.length > 0 && (a.options.min == null && (a.min = Math.min(a.min, b[0].v)), a.options.max == null && b.length > 1 && (a.max = Math.max(a.max, b[b.length - 1].v)))
        }
        function Y() {
            m.clearRect(0, 0, r, s);
            var a = h.grid;
            a.show && a.backgroundColor && $(), a.show && !a.aboveData && _();
            for (var b = 0; b < g.length; ++b) x(v.drawSeries, [m, g[b]]), bb(g[b]);
            x(v.draw, [m]), a.show && a.aboveData && _()
        }
        function Z(a, b) {
            var c, d, e, f, g = D();
            for (i = 0; i < g.length; ++i) {
                c = g[i];
                if (c.direction == b) {
                    f = b + c.n + "axis", !a[f] && c.n == 1 && (f = b + "axis");
                    if (a[f]) {
                        d = a[f].from, e = a[f].to;
                        break
                    }
                }
            }
            a[f] || (c = b == "x" ? o[0] : p[0], d = a[b + "1"], e = a[b + "2"]);
            if (d != null && e != null && d > e) {
                var h = d;
                d = e, e = h
            }
            return {
                from: d,
                to: e,
                axis: c
            }
        }
        function $() {
            m.save(), m.translate(q.left, q.top), m.fillStyle = bw(h.grid.backgroundColor, u, 0, "rgba(255, 255, 255, 0)"), m.fillRect(0, 0, t, u), m.restore()
        }
        function _() {
            var b;
            m.save(), m.translate(q.left, q.top);
            var c = h.grid.markings;
            if (c) {
                if (a.isFunction(c)) {
                    var d = w.getAxes();
                    d.xmin = d.xaxis.min, d.xmax = d.xaxis.max, d.ymin = d.yaxis.min, d.ymax = d.yaxis.max, c = c(d)
                }
                for (b = 0; b < c.length; ++b) {
                    var e = c[b],
                        f = Z(e, "x"),
                        g = Z(e, "y");
                    f.from == null && (f.from = f.axis.min), f.to == null && (f.to = f.axis.max), g.from == null && (g.from = g.axis.min), g.to == null && (g.to = g.axis.max);
                    if (f.to < f.axis.min || f.from > f.axis.max || g.to < g.axis.min || g.from > g.axis.max) continue;
                    f.from = Math.max(f.from, f.axis.min), f.to = Math.min(f.to, f.axis.max), g.from = Math.max(g.from, g.axis.min), g.to = Math.min(g.to, g.axis.max);
                    if (f.from == f.to && g.from == g.to) continue;
                    f.from = f.axis.p2c(f.from), f.to = f.axis.p2c(f.to), g.from = g.axis.p2c(g.from), g.to = g.axis.p2c(g.to), f.from == f.to || g.from == g.to ? (m.beginPath(), m.strokeStyle = e.color || h.grid.markingsColor, m.lineWidth = e.lineWidth || h.grid.markingsLineWidth, m.moveTo(f.from, g.from), m.lineTo(f.to, g.to), m.stroke()) : (m.fillStyle = e.color || h.grid.markingsColor, m.fillRect(f.from, g.to, f.to - f.from, g.from - g.to))
                }
            }
            var d = D(),
                i = h.grid.borderWidth;
            for (var j = 0; j < d.length; ++j) {
                var k = d[j],
                    l = k.box,
                    n = k.tickLength,
                    o, p, r, s;
                if (!k.show || k.ticks.length == 0) continue;
                m.strokeStyle = k.options.tickColor || a.color.parse(k.options.color).scale("a", .22).toString(), m.lineWidth = 1, k.direction == "x" ? (o = 0, n == "full" ? p = k.position == "top" ? 0 : u : p = l.top - q.top + (k.position == "top" ? l.height : 0)) : (p = 0, n == "full" ? o = k.position == "left" ? 0 : t : o = l.left - q.left + (k.position == "left" ? l.width : 0)), k.innermost || (m.beginPath(), r = s = 0, k.direction == "x" ? r = t : s = u, m.lineWidth == 1 && (o = Math.floor(o) + .5, p = Math.floor(p) + .5), m.moveTo(o, p), m.lineTo(o + r, p + s), m.stroke()), m.beginPath();
                for (b = 0; b < k.ticks.length; ++b) {
                    var v = k.ticks[b].v;
                    r = s = 0;
                    if (v < k.min || v > k.max || n == "full" && i > 0 && (v == k.min || v == k.max)) continue;
                    k.direction == "x" ? (o = k.p2c(v), s = n == "full" ? -u : n, k.position == "top" && (s = -s)) : (p = k.p2c(v), r = n == "full" ? -t : n, k.position == "left" && (r = -r)), m.lineWidth == 1 && (k.direction == "x" ? o = Math.floor(o) + .5 : p = Math.floor(p) + .5), m.moveTo(o, p), m.lineTo(o + r, p + s)
                }
                m.stroke()
            }
            i && (m.lineWidth = i, m.strokeStyle = h.grid.borderColor, m.strokeRect(-i / 2, -i / 2, t + i, u + i)), m.restore()
        }
        function ba() {
            b.find(".tickLabels").remove();
            var a = ['<div class="tickLabels" style="font-size:smaller">'],
                c = D();
            for (var d = 0; d < c.length; ++d) {
                var e = c[d],
                    f = e.box;
                if (!e.show) continue;
                a.push('<div class="' + e.direction + "Axis " + e.direction + e.n + 'Axis" style="color:' + e.options.color + '">');
                for (var g = 0; g < e.ticks.length; ++g) {
                    var h = e.ticks[g];
                    if (!h.label || h.v < e.min || h.v > e.max) continue;
                    var i = {}, j;
                    e.direction == "x" ? (j = "center", i.left = Math.round(q.left + e.p2c(h.v) - e.labelWidth / 2), e.position == "bottom" ? i.top = f.top + f.padding : i.bottom = s - (f.top + f.height - f.padding)) : (i.top = Math.round(q.top + e.p2c(h.v) - e.labelHeight / 2), e.position == "left" ? (i.right = r - (f.left + f.width - f.padding), j = "right") : (i.left = f.left + f.padding, j = "left")), i.width = e.labelWidth;
                    var k = ["position:absolute", "text-align:" + j];
                    for (var l in i) k.push(l + ":" + i[l] + "px");
                    a.push('<div class="tickLabel" style="' + k.join(";") + '">' + h.label + "</div>")
                }
                a.push("</div>")
            }
            a.push("</div>"), b.append(a.join(""))
        }
        function bb(a) {
            a.lines.show && bc(a), a.bars.show && bf(a), a.points.show && bd(a)
        }
        function bc(a) {
            function b(a, b, c, d, e) {
                var f = a.points,
                    g = a.pointsize,
                    h = null,
                    i = null;
                m.beginPath();
                for (var j = g; j < f.length; j += g) {
                    var k = f[j - g],
                        l = f[j - g + 1],
                        n = f[j],
                        o = f[j + 1];
                    if (k == null || n == null) continue;
                    if (l <= o && l < e.min) {
                        if (o < e.min) continue;
                        k = (e.min - l) / (o - l) * (n - k) + k, l = e.min
                    } else if (o <= l && o < e.min) {
                        if (l < e.min) continue;
                        n = (e.min - l) / (o - l) * (n - k) + k, o = e.min
                    }
                    if (l >= o && l > e.max) {
                        if (o > e.max) continue;
                        k = (e.max - l) / (o - l) * (n - k) + k, l = e.max
                    } else if (o >= l && o > e.max) {
                        if (l > e.max) continue;
                        n = (e.max - l) / (o - l) * (n - k) + k, o = e.max
                    }
                    if (k <= n && k < d.min) {
                        if (n < d.min) continue;
                        l = (d.min - k) / (n - k) * (o - l) + l, k = d.min
                    } else if (n <= k && n < d.min) {
                        if (k < d.min) continue;
                        o = (d.min - k) / (n - k) * (o - l) + l, n = d.min
                    }
                    if (k >= n && k > d.max) {
                        if (n > d.max) continue;
                        l = (d.max - k) / (n - k) * (o - l) + l, k = d.max
                    } else if (n >= k && n > d.max) {
                        if (k > d.max) continue;
                        o = (d.max - k) / (n - k) * (o - l) + l, n = d.max
                    }(k != h || l != i) && m.moveTo(d.p2c(k) + b, e.p2c(l) + c), h = n, i = o, m.lineTo(d.p2c(n) + b, e.p2c(o) + c)
                }
                m.stroke()
            }
            function c(a, b, c) {
                var d = a.points,
                    e = a.pointsize,
                    f = Math.min(Math.max(0, c.min), c.max),
                    g = 0,
                    h, i = !1,
                    j = 1,
                    k = 0,
                    l = 0;
                for (;;) {
                    if (e > 0 && g > d.length + e) break;
                    g += e;
                    var n = d[g - e],
                        o = d[g - e + j],
                        p = d[g],
                        q = d[g + j];
                    if (i) {
                        if (e > 0 && n != null && p == null) {
                            l = g, e = -e, j = 2;
                            continue
                        }
                        if (e < 0 && g == k + e) {
                            m.fill(), i = !1, e = -e, j = 1, g = k = l + e;
                            continue
                        }
                    }
                    if (n == null || p == null) continue;
                    if (n <= p && n < b.min) {
                        if (p < b.min) continue;
                        o = (b.min - n) / (p - n) * (q - o) + o, n = b.min
                    } else if (p <= n && p < b.min) {
                        if (n < b.min) continue;
                        q = (b.min - n) / (p - n) * (q - o) + o, p = b.min
                    }
                    if (n >= p && n > b.max) {
                        if (p > b.max) continue;
                        o = (b.max - n) / (p - n) * (q - o) + o, n = b.max
                    } else if (p >= n && p > b.max) {
                        if (n > b.max) continue;
                        q = (b.max - n) / (p - n) * (q - o) + o, p = b.max
                    }
                    i || (m.beginPath(), m.moveTo(b.p2c(n), c.p2c(f)), i = !0);
                    if (o >= c.max && q >= c.max) {
                        m.lineTo(b.p2c(n), c.p2c(c.max)), m.lineTo(b.p2c(p), c.p2c(c.max));
                        continue
                    }
                    if (o <= c.min && q <= c.min) {
                        m.lineTo(b.p2c(n), c.p2c(c.min)), m.lineTo(b.p2c(p), c.p2c(c.min));
                        continue
                    }
                    var r = n,
                        s = p;
                    o <= q && o < c.min && q >= c.min ? (n = (c.min - o) / (q - o) * (p - n) + n, o = c.min) : q <= o && q < c.min && o >= c.min && (p = (c.min - o) / (q - o) * (p - n) + n, q = c.min), o >= q && o > c.max && q <= c.max ? (n = (c.max - o) / (q - o) * (p - n) + n, o = c.max) : q >= o && q > c.max && o <= c.max && (p = (c.max - o) / (q - o) * (p - n) + n, q = c.max), n != r && m.lineTo(b.p2c(r), c.p2c(o)), m.lineTo(b.p2c(n), c.p2c(o)), m.lineTo(b.p2c(p), c.p2c(q)), p != s && (m.lineTo(b.p2c(p), c.p2c(q)), m.lineTo(b.p2c(s), c.p2c(q)))
                }
            }
            m.save(), m.translate(q.left, q.top), m.lineJoin = "round";
            var d = a.lines.lineWidth,
                e = a.shadowSize;
            if (d > 0 && e > 0) {
                m.lineWidth = e, m.strokeStyle = "rgba(0,0,0,0.1)";
                var f = Math.PI / 18;
                b(a.datapoints, Math.sin(f) * (d / 2 + e / 2), Math.cos(f) * (d / 2 + e / 2), a.xaxis, a.yaxis), m.lineWidth = e / 2, b(a.datapoints, Math.sin(f) * (d / 2 + e / 4), Math.cos(f) * (d / 2 + e / 4), a.xaxis, a.yaxis)
            }
            m.lineWidth = d, m.strokeStyle = a.color;
            var g = bg(a.lines, a.color, 0, u);
            g && (m.fillStyle = g, c(a.datapoints, a.xaxis, a.yaxis)), d > 0 && b(a.datapoints, 0, 0, a.xaxis, a.yaxis), m.restore()
        }
        function bd(a) {
            function b(a, b, c, d, e, f, g, h) {
                var i = a.points,
                    j = a.pointsize;
                for (var k = 0; k < i.length; k += j) {
                    var l = i[k],
                        n = i[k + 1];
                    if (l == null || l < f.min || l > f.max || n < g.min || n > g.max) continue;
                    m.beginPath(), l = f.p2c(l), n = g.p2c(n) + d, h == "circle" ? m.arc(l, n, b, 0, e ? Math.PI : Math.PI * 2, !1) : h(m, l, n, b, e), m.closePath(), c && (m.fillStyle = c, m.fill()), m.stroke()
                }
            }
            m.save(), m.translate(q.left, q.top);
            var c = a.points.lineWidth,
                d = a.shadowSize,
                e = a.points.radius,
                f = a.points.symbol;
            if (c > 0 && d > 0) {
                var g = d / 2;
                m.lineWidth = g, m.strokeStyle = "rgba(0,0,0,0.1)", b(a.datapoints, e, null, g + g / 2, !0, a.xaxis, a.yaxis, f), m.strokeStyle = "rgba(0,0,0,0.2)", b(a.datapoints, e, null, g / 2, !0, a.xaxis, a.yaxis, f)
            }
            m.lineWidth = c, m.strokeStyle = a.color, b(a.datapoints, e, bg(a.points, a.color), 0, !1, a.xaxis, a.yaxis, f), m.restore()
        }
        function be(a, b, c, d, e, f, g, h, i, j, k, l) {
            var m, n, o, p, q, r, s, t, u;
            k ? (t = r = s = !0, q = !1, m = c, n = a, p = b + d, o = b + e, n < m && (u = n, n = m, m = u, q = !0, r = !1)) : (q = r = s = !0, t = !1, m = a + d, n = a + e, o = c, p = b, p < o && (u = p, p = o, o = u, t = !0, s = !1));
            if (n < h.min || m > h.max || p < i.min || o > i.max) return;
            m < h.min && (m = h.min, q = !1), n > h.max && (n = h.max, r = !1), o < i.min && (o = i.min, t = !1), p > i.max && (p = i.max, s = !1), m = h.p2c(m), o = i.p2c(o), n = h.p2c(n), p = i.p2c(p), g && (j.beginPath(), j.moveTo(m, o), j.lineTo(m, p), j.lineTo(n, p), j.lineTo(n, o), j.fillStyle = g(o, p), j.fill()), l > 0 && (q || r || s || t) && (j.beginPath(), j.moveTo(m, o + f), q ? j.lineTo(m, p + f) : j.moveTo(m, p + f), s ? j.lineTo(n, p + f) : j.moveTo(n, p + f), r ? j.lineTo(n, o + f) : j.moveTo(n, o + f), t ? j.lineTo(m, o + f) : j.moveTo(m, o + f), j.stroke())
        }
        function bf(a) {
            function b(b, c, d, e, f, g, h) {
                var i = b.points,
                    j = b.pointsize;
                for (var k = 0; k < i.length; k += j) {
                    if (i[k] == null) continue;
                    be(i[k], i[k + 1], i[k + 2], c, d, e, f, g, h, m, a.bars.horizontal, a.bars.lineWidth)
                }
            }
            m.save(), m.translate(q.left, q.top), m.lineWidth = a.bars.lineWidth, m.strokeStyle = a.color;
            var c = a.bars.align == "left" ? 0 : -a.bars.barWidth / 2,
                d = a.bars.fill ? function (b, c) {
                    return bg(a.bars, a.color, b, c)
                } : null;
            b(a.datapoints, c, c + a.bars.barWidth, 0, d, a.xaxis, a.yaxis), m.restore()
        }
        function bg(b, c, d, e) {
            var f = b.fill;
            if (!f) return null;
            if (b.fillColor) return bw(b.fillColor, d, e, c);
            var g = a.color.parse(c);
            return g.a = typeof f == "number" ? f : .4, g.normalize(), g.toString()
        }
        function bh() {
            b.find(".legend").remove();
            if (!h.legend.show) return;
            var c = [],
                d = !1,
                e = h.legend.labelFormatter,
                f, i;
            for (var j = 0; j < g.length; ++j) {
                f = g[j], i = f.label;
                if (!i) continue;
                j % h.legend.noColumns == 0 && (d && c.push("</tr>"), c.push("<tr>"), d = !0), e && (i = e(i, f)), c.push('<td class="legendColorBox"><div style="border:1px solid ' + h.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + f.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + i + "</td>")
            }
            d && c.push("</tr>");
            if (c.length == 0) return;
            var k = '<table style="font-size:smaller;color:' + h.grid.color + '">' + c.join("") + "</table>";
            if (h.legend.container != null) a(h.legend.container).html(k);
            else {
                var l = "",
                    m = h.legend.position,
                    n = h.legend.margin;
                n[0] == null && (n = [n, n]), m.charAt(0) == "n" ? l += "top:" + (n[1] + q.top) + "px;" : m.charAt(0) == "s" && (l += "bottom:" + (n[1] + q.bottom) + "px;"), m.charAt(1) == "e" ? l += "right:" + (n[0] + q.right) + "px;" : m.charAt(1) == "w" && (l += "left:" + (n[0] + q.left) + "px;");
                var o = a('<div class="legend">' + k.replace('style="', 'style="position:absolute;' + l + ";") + "</div>").appendTo(b);
                if (h.legend.backgroundOpacity != 0) {
                    var p = h.legend.backgroundColor;
                    p == null && (p = h.grid.backgroundColor, p && typeof p == "string" ? p = a.color.parse(p) : p = a.color.extract(o, "background-color"), p.a = 1, p = p.toString());
                    var r = o.children();
                    a('<div style="position:absolute;width:' + r.width() + "px;height:" + r.height() + "px;" + l + "background-color:" + p + ';"> </div>').prependTo(o).css("opacity", h.legend.backgroundOpacity)
                }
            }
        }
        function bk(a, b, c) {
            var d = h.grid.mouseActiveRadius,
                e = d * d + 1,
                f = null,
                i = !1,
                j, k;
            for (j = g.length - 1; j >= 0; --j) {
                if (!c(g[j])) continue;
                var l = g[j],
                    m = l.xaxis,
                    n = l.yaxis,
                    o = l.datapoints.points,
                    p = l.datapoints.pointsize,
                    q = m.c2p(a),
                    r = n.c2p(b),
                    s = d / m.scale,
                    t = d / n.scale;
                m.options.inverseTransform && (s = Number.MAX_VALUE), n.options.inverseTransform && (t = Number.MAX_VALUE);
                if (l.lines.show || l.points.show) for (k = 0; k < o.length; k += p) {
                    var u = o[k],
                        v = o[k + 1];
                    if (u == null) continue;
                    if (u - q > s || u - q < -s || v - r > t || v - r < -t) continue;
                    var w = Math.abs(m.p2c(u) - a),
                        x = Math.abs(n.p2c(v) - b),
                        y = w * w + x * x;
                    y < e && (e = y, f = [j, k / p])
                }
                if (l.bars.show && !f) {
                    var z = l.bars.align == "left" ? 0 : -l.bars.barWidth / 2,
                        A = z + l.bars.barWidth;
                    for (k = 0; k < o.length; k += p) {
                        var u = o[k],
                            v = o[k + 1],
                            B = o[k + 2];
                        if (u == null) continue;
                        if (g[j].bars.horizontal ? q <= Math.max(B, u) && q >= Math.min(B, u) && r >= v + z && r <= v + A : q >= u + z && q <= u + A && r >= Math.min(B, v) && r <= Math.max(B, v)) f = [j, k / p]
                    }
                }
            }
            return f ? (j = f[0], k = f[1], p = g[j].datapoints.pointsize, {
                datapoint: g[j].datapoints.points.slice(k * p, (k + 1) * p),
                dataIndex: k,
                series: g[j],
                seriesIndex: j
            }) : null
        }
        function bl(a) {
            h.grid.hoverable && bo("plothover", a, function (a) {
                return a.hoverable != 0
            })
        }
        function bm(a) {
            h.grid.hoverable && bo("plothover", a, function (a) {
                return !1
            })
        }
        function bn(a) {
            bo("plotclick", a, function (a) {
                return a.clickable != 0
            })
        }
        function bo(a, c, d) {
            var e = l.offset(),
                f = c.pageX - e.left - q.left,
                g = c.pageY - e.top - q.top,
                i = E({
                    left: f,
                    top: g
                });
            i.pageX = c.pageX, i.pageY = c.pageY;
            var j = bk(f, g, d);
            j && (j.pageX = parseInt(j.series.xaxis.p2c(j.datapoint[0]) + e.left + q.left), j.pageY = parseInt(j.series.yaxis.p2c(j.datapoint[1]) + e.top + q.top));
            if (h.grid.autoHighlight) {
                for (var k = 0; k < bi.length; ++k) {
                    var m = bi[k];
                    m.auto == a && (!j || m.series != j.series || m.point[0] != j.datapoint[0] || m.point[1] != j.datapoint[1]) && bs(m.series, m.point)
                }
                j && br(j.series, j.datapoint, a)
            }
            b.trigger(a, [i, j])
        }
        function bp() {
            bj || (bj = setTimeout(bq, 30))
        }
        function bq() {
            bj = null, n.save(), n.clearRect(0, 0, r, s), n.translate(q.left, q.top);
            var a, b;
            for (a = 0; a < bi.length; ++a) b = bi[a], b.series.bars.show ? bv(b.series, b.point) : bu(b.series, b.point);
            n.restore(), x(v.drawOverlay, [n])
        }
        function br(a, b, c) {
            typeof a == "number" && (a = g[a]);
            if (typeof b == "number") {
                var d = a.datapoints.pointsize;
                b = a.datapoints.points.slice(d * b, d * (b + 1))
            }
            var e = bt(a, b);
            e == -1 ? (bi.push({
                series: a,
                point: b,
                auto: c
            }), bp()) : c || (bi[e].auto = !1)
        }
        function bs(a, b) {
            a == null && b == null && (bi = [], bp()), typeof a == "number" && (a = g[a]), typeof b == "number" && (b = a.data[b]);
            var c = bt(a, b);
            c != -1 && (bi.splice(c, 1), bp())
        }
        function bt(a, b) {
            for (var c = 0; c < bi.length; ++c) {
                var d = bi[c];
                if (d.series == a && d.point[0] == b[0] && d.point[1] == b[1]) return c
            }
            return -1
        }
        function bu(b, c) {
            var d = c[0],
                e = c[1],
                f = b.xaxis,
                g = b.yaxis;
            if (d < f.min || d > f.max || e < g.min || e > g.max) return;
            var h = b.points.radius + b.points.lineWidth / 2;
            n.lineWidth = h, n.strokeStyle = a.color.parse(b.color).scale("a", .5).toString();
            var i = 1.5 * h,
                d = f.p2c(d),
                e = g.p2c(e);
            n.beginPath(), b.points.symbol == "circle" ? n.arc(d, e, i, 0, 2 * Math.PI, !1) : b.points.symbol(n, d, e, i, !1), n.closePath(), n.stroke()
        }
        function bv(b, c) {
            n.lineWidth = b.bars.lineWidth, n.strokeStyle = a.color.parse(b.color).scale("a", .5).toString();
            var d = a.color.parse(b.color).scale("a", .5).toString(),
                e = b.bars.align == "left" ? 0 : -b.bars.barWidth / 2;
            be(c[0], c[1], c[2] || 0, e, e + b.bars.barWidth, 0, function () {
                return d
            }, b.xaxis, b.yaxis, n, b.bars.horizontal, b.bars.lineWidth)
        }
        function bw(b, c, d, e) {
            if (typeof b == "string") return b;
            var f = m.createLinearGradient(0, d, 0, c);
            for (var g = 0, h = b.colors.length; g < h; ++g) {
                var i = b.colors[g];
                if (typeof i != "string") {
                    var j = a.color.parse(e);
                    i.brightness != null && (j = j.scale("rgb", i.brightness)), i.opacity != null && (j.a *= i.opacity), i = j.toString()
                }
                f.addColorStop(g / (h - 1), i)
            }
            return f
        }
        var g = [],
            h = {
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: !0,
                    noColumns: 1,
                    labelFormatter: null,
                    labelBoxBorderColor: "#ccc",
                    container: null,
                    position: "ne",
                    margin: 5,
                    backgroundColor: null,
                    backgroundOpacity: .85
                },
                xaxis: {
                    show: null,
                    position: "bottom",
                    mode: null,
                    color: null,
                    tickColor: null,
                    transform: null,
                    inverseTransform: null,
                    min: null,
                    max: null,
                    autoscaleMargin: null,
                    ticks: null,
                    tickFormatter: null,
                    labelWidth: null,
                    labelHeight: null,
                    reserveSpace: null,
                    tickLength: null,
                    alignTicksWithAxis: null,
                    tickDecimals: null,
                    tickSize: null,
                    minTickSize: null,
                    monthNames: null,
                    timeformat: null,
                    twelveHourClock: !1
                },
                yaxis: {
                    autoscaleMargin: .02,
                    position: "left"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: !1,
                        radius: 3,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle"
                    },
                    lines: {
                        lineWidth: 2,
                        fill: !1,
                        fillColor: null,
                        steps: !1
                    },
                    bars: {
                        show: !1,
                        lineWidth: 2,
                        barWidth: 1,
                        fill: !0,
                        fillColor: null,
                        align: "left",
                        horizontal: !1
                    },
                    shadowSize: 3
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: "#545454",
                    backgroundColor: null,
                    borderColor: null,
                    tickColor: null,
                    labelMargin: 5,
                    axisMargin: 8,
                    borderWidth: 2,
                    minBorderMargin: null,
                    markings: null,
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    clickable: !1,
                    hoverable: !1,
                    autoHighlight: !0,
                    mouseActiveRadius: 10
                },
                hooks: {}
            }, j = null,
            k = null,
            l = null,
            m = null,
            n = null,
            o = [],
            p = [],
            q = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            }, w = this;
        w.setData = A, w.setupGrid = T, w.draw = Y, w.getPlaceholder = function () {
            return b
        }, w.getCanvas = function () {
            return j
        }, w.getPlotOffset = function () {
            return q
        }, w.width = function () {
            return t
        }, w.height = function () {
            return u
        }, w.offset = function () {
            var a = l.offset();
            return a.left += q.left, a.top += q.top, a
        }, w.getData = function () {
            return g
        }, w.getAxes = function () {
            var b = {}, c;
            return a.each(o.concat(p), function (a, c) {
                c && (b[c.direction + (c.n != 1 ? c.n : "") + "axis"] = c)
            }), b
        }, w.getXAxes = function () {
            return o
        }, w.getYAxes = function () {
            return p
        }, w.c2p = E, w.p2c = F, w.getOptions = function () {
            return h
        }, w.highlight = br, w.unhighlight = bs, w.triggerRedrawOverlay = bp, w.pointOffset = function (a) {
            return {
                left: parseInt(o[C(a, "x") - 1].p2c(+a.x) + q.left),
                top: parseInt(p[C(a, "y") - 1].p2c(+a.y) + q.top)
            }
        }, w.shutdown = O, w.resize = function () {
            K(), L(j), L(k)
        }, w.hooks = v, y(w), z(e), M(), A(d), T(), Y(), N();
        var bi = [],
            bj = null
    }
    function c(a, b) {
        return b * Math.floor(a / b)
    }
    a.plot = function (c, d, e) {
        var f = new b(a(c), d, e, a.plot.plugins);
        return f
    }, a.plot.version = "0.7", a.plot.plugins = [], a.plot.formatDate = function (a, b, c) {
        var d = function (a) {
            return a = "" + a, a.length == 1 ? "0" + a : a
        }, e = [],
            f = !1,
            g = !1,
            h = a.getUTCHours(),
            i = h < 12;
        c == null && (c = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), b.search(/%p|%P/) != -1 && (h > 12 ? h -= 12 : h == 0 && (h = 12));
        for (var j = 0; j < b.length; ++j) {
            var k = b.charAt(j);
            if (f) {
                switch (k) {
                    case "h":
                        k = "" + h;
                        break;
                    case "H":
                        k = d(h);
                        break;
                    case "M":
                        k = d(a.getUTCMinutes());
                        break;
                    case "S":
                        k = d(a.getUTCSeconds());
                        break;
                    case "d":
                        k = "" + a.getUTCDate();
                        break;
                    case "m":
                        k = "" + (a.getUTCMonth() + 1);
                        break;
                    case "y":
                        k = "" + a.getUTCFullYear();
                        break;
                    case "b":
                        k = "" + c[a.getUTCMonth()];
                        break;
                    case "p":
                        k = i ? "am" : "pm";
                        break;
                    case "P":
                        k = i ? "AM" : "PM";
                        break;
                    case "0":
                        k = "", g = !0
                }
                k && g && (k = d(k), g = !1), e.push(k), g || (f = !1)
            } else k == "%" ? f = !0 : e.push(k)
        }
        return e.join("")
    }
}(jQuery), document.createElement("canvas").getContext || function () {
    function j() {
        return this.context_ || (this.context_ = new M(this))
    }
    function m(a, b, c) {
        var d = k.call(arguments, 2);
        return function () {
            return a.apply(b, d.concat(k.call(arguments)))
        }
    }
    function n(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }
    function o(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML"), a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        if (!a.styleSheets.ex_canvas_) {
            var b = a.createStyleSheet();
            b.owningElement.id = "ex_canvas_", b.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
        }
    }
    function q(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect(), b.style.width = b.attributes.width.nodeValue + "px", b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px"
        }
    }
    function r(a) {
        var b = a.srcElement;
        b.firstChild && (b.firstChild.style.width = b.clientWidth + "px", b.firstChild.style.height = b.clientHeight + "px")
    }
    function w() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    }
    function x(a, b) {
        var c = w();
        for (var d = 0; d < 3; d++) for (var e = 0; e < 3; e++) {
            var f = 0;
            for (var g = 0; g < 3; g++) f += a[d][g] * b[g][e];
            c[d][e] = f
        }
        return c
    }
    function y(a, b) {
        b.fillStyle = a.fillStyle, b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.lineWidth = a.lineWidth, b.miterLimit = a.miterLimit, b.shadowBlur = a.shadowBlur, b.shadowColor = a.shadowColor, b.shadowOffsetX = a.shadowOffsetX, b.shadowOffsetY = a.shadowOffsetY, b.strokeStyle = a.strokeStyle, b.globalAlpha = a.globalAlpha, b.font = a.font, b.textAlign = a.textAlign, b.textBaseline = a.textBaseline, b.arcScaleX_ = a.arcScaleX_, b.arcScaleY_ = a.arcScaleY_, b.lineScale_ = a.lineScale_
    }
    function A(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            d = a.substring(b + 1, c).split(",");
        return d.length == 4 && a.substr(3, 1) == "a" ? alpha = Number(d[3]) : d[3] = 1, d
    }
    function B(a) {
        return parseFloat(a) / 100
    }
    function C(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }
    function D(a) {
        var b, c, d;
        h = parseFloat(a[0]) / 360 % 360, h < 0 && h++, s = C(B(a[1]), 0, 1), l = C(B(a[2]), 0, 1);
        if (s == 0) b = c = d = l;
        else {
            var e = l < .5 ? l * (1 + s) : l + s - l * s,
                f = 2 * l - e;
            b = E(f, e, h + 1 / 3), c = E(f, e, h), d = E(f, e, h - 1 / 3)
        }
        return "#" + t[Math.floor(b * 255)] + t[Math.floor(c * 255)] + t[Math.floor(d * 255)]
    }
    function E(a, b, c) {
        return c < 0 && c++, c > 1 && c--, 6 * c < 1 ? a + (b - a) * 6 * c : 2 * c < 1 ? b : 3 * c < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
    }
    function F(a) {
        var b, c = 1;
        a = String(a);
        if (a.charAt(0) == "#") b = a;
        else if (/^rgb/.test(a)) {
            var d = A(a),
                b = "#",
                e;
            for (var f = 0; f < 3; f++) d[f].indexOf("%") != -1 ? e = Math.floor(B(d[f]) * 255) : e = Number(d[f]), b += t[C(e, 0, 255)];
            c = d[3]
        } else if (/^hsl/.test(a)) {
            var d = A(a);
            b = D(d), c = d[3]
        } else b = z[a] || a;
        return {
            color: b,
            alpha: c
        }
    }
    function I(a) {
        if (H[a]) return H[a];
        var b = document.createElement("div"),
            c = b.style;
        try {
            c.font = a
        } catch (d) {}
        return H[a] = {
            style: c.fontStyle || G.style,
            variant: c.fontVariant || G.variant,
            weight: c.fontWeight || G.weight,
            size: c.fontSize || G.size,
            family: c.fontFamily || G.family
        }
    }
    function J(a, b) {
        var c = {};
        for (var d in a) c[d] = a[d];
        var e = parseFloat(b.currentStyle.fontSize),
            f = parseFloat(a.size);
        return typeof a.size == "number" ? c.size = a.size : a.size.indexOf("px") != -1 ? c.size = f : a.size.indexOf("em") != -1 ? c.size = e * f : a.size.indexOf("%") != -1 ? c.size = e / 100 * f : a.size.indexOf("pt") != -1 ? c.size = f / .75 : c.size = e, c.size *= .981, c
    }
    function K(a) {
        return a.style + " " + a.variant + " " + a.weight + " " + a.size + "px " + a.family
    }
    function L(a) {
        switch (a) {
            case "butt":
                return "flat";
            case "round":
                return "round";
            case "square":
            default:
                return "square"
        }
    }
    function M(a) {
        this.m_ = w(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.strokeStyle = "#000", this.fillStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = g * 1, this.globalAlpha = 1, this.font = "10px sans-serif", this.textAlign = "left", this.textBaseline = "alphabetic", this.canvas = a;
        var b = a.ownerDocument.createElement("div");
        b.style.width = a.clientWidth + "px", b.style.height = a.clientHeight + "px", b.style.overflow = "hidden", b.style.position = "absolute", a.appendChild(b), this.element_ = b, this.arcScaleX_ = 1, this.arcScaleY_ = 1, this.lineScale_ = 1
    }
    function O(a, b, c, d) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: d.x,
            y: d.y
        }), a.currentX_ = d.x, a.currentY_ = d.y
    }
    function P(a, b) {
        var c = F(a.strokeStyle),
            d = c.color,
            e = c.alpha * a.globalAlpha,
            f = a.lineScale_ * a.lineWidth;
        f < 1 && (e *= f), b.push("<g_vml_:stroke", ' opacity="', e, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', L(a.lineCap), '"', ' weight="', f, 'px"', ' color="', d, '" />')
    }
    function Q(b, c, d, e) {
        var f = b.fillStyle,
            h = b.arcScaleX_,
            i = b.arcScaleY_,
            j = e.x - d.x,
            k = e.y - d.y;
        if (f instanceof T) {
            var l = 0,
                m = {
                    x: 0,
                    y: 0
                }, n = 0,
                o = 1;
            if (f.type_ == "gradient") {
                var p = f.x0_ / h,
                    q = f.y0_ / i,
                    r = f.x1_ / h,
                    s = f.y1_ / i,
                    t = b.getCoords_(p, q),
                    u = b.getCoords_(r, s),
                    v = u.x - t.x,
                    w = u.y - t.y;
                l = Math.atan2(v, w) * 180 / Math.PI, l < 0 && (l += 360), l < 1e-6 && (l = 0)
            } else {
                var t = b.getCoords_(f.x0_, f.y0_);
                m = {
                    x: (t.x - d.x) / j,
                    y: (t.y - d.y) / k
                }, j /= h * g, k /= i * g;
                var x = a.max(j, k);
                n = 2 * f.r0_ / x, o = 2 * f.r1_ / x - n
            }
            var y = f.colors_;
            y.sort(function (a, b) {
                return a.offset - b.offset
            });
            var z = y.length,
                A = y[0].color,
                B = y[z - 1].color,
                C = y[0].alpha * b.globalAlpha,
                D = y[z - 1].alpha * b.globalAlpha,
                E = [];
            for (var G = 0; G < z; G++) {
                var H = y[G];
                E.push(H.offset * o + n + " " + H.color)
            }
            c.push('<g_vml_:fill type="', f.type_, '"', ' method="none" focus="100%"', ' color="', A, '"', ' color2="', B, '"', ' colors="', E.join(","), '"', ' opacity="', D, '"', ' g_o_:opacity2="', C, '"', ' angle="', l, '"', ' focusposition="', m.x, ",", m.y, '" />')
        } else if (f instanceof U) {
            if (j && k) {
                var I = -d.x,
                    J = -d.y;
                c.push("<g_vml_:fill", ' position="', I / j * h * h, ",", J / k * i * i, '"', ' type="tile"', ' src="', f.src_, '" />')
            }
        } else {
            var K = F(b.fillStyle),
                L = K.color,
                M = K.alpha * b.globalAlpha;
            c.push('<g_vml_:fill color="', L, '" opacity="', M, '" />')
        }
    }
    function R(a) {
        return isFinite(a[0][0]) && isFinite(a[0][1]) && isFinite(a[1][0]) && isFinite(a[1][1]) && isFinite(a[2][0]) && isFinite(a[2][1])
    }
    function S(a, b, c) {
        if (!R(b)) return;
        a.m_ = b;
        if (c) {
            var d = b[0][0] * b[1][1] - b[0][1] * b[1][0];
            a.lineScale_ = f(e(d))
        }
    }
    function T(a) {
        this.type_ = a, this.x0_ = 0, this.y0_ = 0, this.r0_ = 0, this.x1_ = 0, this.y1_ = 0, this.r1_ = 0, this.colors_ = []
    }
    function U(a, b) {
        W(a);
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                V("SYNTAX_ERR")
        }
        this.src_ = a.src, this.width_ = a.width, this.height_ = a.height
    }
    function V(a) {
        throw new X(a)
    }
    function W(a) {
        (!a || a.nodeType != 1 || a.tagName != "IMG") && V("TYPE_MISMATCH_ERR"), a.readyState != "complete" && V("INVALID_STATE_ERR")
    }
    function X(a) {
        this.code = this[a], this.message = a + ": DOM Exception " + this.code
    }
    var a = Math,
        b = a.round,
        c = a.sin,
        d = a.cos,
        e = a.abs,
        f = a.sqrt,
        g = 10,
        i = g / 2,
        k = Array.prototype.slice;
    o(document);
    var p = {
        init: function (a) {
            if (/MSIE/.test(navigator.userAgent) && !window.opera) {
                var b = a || document;
                b.createElement("canvas"), b.attachEvent("onreadystatechange", m(this.init_, this, b))
            }
        },
        init_: function (a) {
            var b = a.getElementsByTagName("canvas");
            for (var c = 0; c < b.length; c++) this.initElement(b[c])
        },
        initElement: function (a) {
            if (!a.getContext) {
                a.getContext = j, o(a.ownerDocument), a.innerHTML = "", a.attachEvent("onpropertychange", q), a.attachEvent("onresize", r);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth, b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    p.init();
    var t = [];
    for (var u = 0; u < 16; u++) for (var v = 0; v < 16; v++) t[u * 16 + v] = u.toString(16) + v.toString(16);
    var z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
    }, G = {
        style: "normal",
        variant: "normal",
        weight: "normal",
        size: 10,
        family: "sans-serif"
    }, H = {}, N = M.prototype;
    N.clearRect = function () {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null), this.element_.innerHTML = ""
    }, N.beginPath = function () {
        this.currentPath_ = []
    }, N.moveTo = function (a, b) {
        var c = this.getCoords_(a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        }), this.currentX_ = c.x, this.currentY_ = c.y
    }, N.lineTo = function (a, b) {
        var c = this.getCoords_(a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        }), this.currentX_ = c.x, this.currentY_ = c.y
    }, N.bezierCurveTo = function (a, b, c, d, e, f) {
        var g = this.getCoords_(e, f),
            h = this.getCoords_(a, b),
            i = this.getCoords_(c, d);
        O(this, h, i, g)
    }, N.quadraticCurveTo = function (a, b, c, d) {
        var e = this.getCoords_(a, b),
            f = this.getCoords_(c, d),
            g = {
                x: this.currentX_ + 2 / 3 * (e.x - this.currentX_),
                y: this.currentY_ + 2 / 3 * (e.y - this.currentY_)
            }, h = {
                x: g.x + (f.x - this.currentX_) / 3,
                y: g.y + (f.y - this.currentY_) / 3
            };
        O(this, g, h, f)
    }, N.arc = function (a, b, e, f, h, j) {
        e *= g;
        var k = j ? "at" : "wa",
            l = a + d(f) * e - i,
            m = b + c(f) * e - i,
            n = a + d(h) * e - i,
            o = b + c(h) * e - i;
        l == n && !j && (l += .125);
        var p = this.getCoords_(a, b),
            q = this.getCoords_(l, m),
            r = this.getCoords_(n, o);
        this.currentPath_.push({
            type: k,
            x: p.x,
            y: p.y,
            radius: e,
            xStart: q.x,
            yStart: q.y,
            xEnd: r.x,
            yEnd: r.y
        })
    }, N.rect = function (a, b, c, d) {
        this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.closePath()
    }, N.strokeRect = function (a, b, c, d) {
        var e = this.currentPath_;
        this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.closePath(), this.stroke(), this.currentPath_ = e
    }, N.fillRect = function (a, b, c, d) {
        var e = this.currentPath_;
        this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.closePath(), this.fill(), this.currentPath_ = e
    }, N.createLinearGradient = function (a, b, c, d) {
        var e = new T("gradient");
        return e.x0_ = a, e.y0_ = b, e.x1_ = c, e.y1_ = d, e
    }, N.createRadialGradient = function (a, b, c, d, e, f) {
        var g = new T("gradientradial");
        return g.x0_ = a, g.y0_ = b, g.r0_ = c, g.x1_ = d, g.y1_ = e, g.r1_ = f, g
    }, N.drawImage = function (c, d) {
        var e, f, h, i, j, k, l, m, n = c.runtimeStyle.width,
            o = c.runtimeStyle.height;
        c.runtimeStyle.width = "auto", c.runtimeStyle.height = "auto";
        var p = c.width,
            q = c.height;
        c.runtimeStyle.width = n, c.runtimeStyle.height = o;
        if (arguments.length == 3) e = arguments[1], f = arguments[2], j = k = 0, l = h = p, m = i = q;
        else if (arguments.length == 5) e = arguments[1], f = arguments[2], h = arguments[3], i = arguments[4], j = k = 0, l = p, m = q;
        else {
            if (arguments.length != 9) throw Error("Invalid number of arguments");
            j = arguments[1], k = arguments[2], l = arguments[3], m = arguments[4], e = arguments[5], f = arguments[6], h = arguments[7], i = arguments[8]
        }
        var r = this.getCoords_(e, f),
            s = l / 2,
            t = m / 2,
            u = [],
            v = 10,
            w = 10;
        u.push(" <g_vml_:group", ' coordsize="', g * v, ",", g * w, '"', ' coordorigin="0,0"', ' style="width:', v, "px;height:", w, "px;position:absolute;");
        if (this.m_[0][0] != 1 || this.m_[0][1] || this.m_[1][1] != 1 || this.m_[1][0]) {
            var x = [];
            x.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", b(r.x / g), ",", "Dy=", b(r.y / g), "");
            var y = r,
                z = this.getCoords_(e + h, f),
                A = this.getCoords_(e, f + i),
                B = this.getCoords_(e + h, f + i);
            y.x = a.max(y.x, z.x, A.x, B.x), y.y = a.max(y.y, z.y, A.y, B.y), u.push("padding:0 ", b(y.x / g), "px ", b(y.y / g), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", x.join(""), ", sizingmethod='clip');")
        } else u.push("top:", b(r.y / g), "px;left:", b(r.x / g), "px;");
        u.push(' ">', '<g_vml_:image src="', c.src, '"', ' style="width:', g * h, "px;", " height:", g * i, 'px"', ' cropleft="', j / p, '"', ' croptop="', k / q, '"', ' cropright="', (p - j - l) / p, '"', ' cropbottom="', (q - k - m) / q, '"', " />", "</g_vml_:group>"), this.element_.insertAdjacentHTML("BeforeEnd", u.join(""))
    }, N.stroke = function (a) {
        var c = 10,
            d = 10,
            e = 5e3,
            f = {
                x: null,
                y: null
            }, h = {
                x: null,
                y: null
            };
        for (var i = 0; i < this.currentPath_.length; i += e) {
            var j = [],
                k = !1;
            j.push("<g_vml_:shape", ' filled="', !! a, '"', ' style="position:absolute;width:', c, "px;height:", d, 'px;"', ' coordorigin="0,0"', ' coordsize="', g * c, ",", g * d, '"', ' stroked="', !a, '"', ' path="');
            var l = !1;
            for (var m = i; m < Math.min(i + e, this.currentPath_.length); m++) {
                m % e == 0 && m > 0 && j.push(" m ", b(this.currentPath_[m - 1].x), ",", b(this.currentPath_[m - 1].y));
                var n = this.currentPath_[m],
                    o;
                switch (n.type) {
                    case "moveTo":
                        o = n, j.push(" m ", b(n.x), ",", b(n.y));
                        break;
                    case "lineTo":
                        j.push(" l ", b(n.x), ",", b(n.y));
                        break;
                    case "close":
                        j.push(" x "), n = null;
                        break;
                    case "bezierCurveTo":
                        j.push(" c ", b(n.cp1x), ",", b(n.cp1y), ",", b(n.cp2x), ",", b(n.cp2y), ",", b(n.x), ",", b(n.y));
                        break;
                    case "at":
                    case "wa":
                        j.push(" ", n.type, " ", b(n.x - this.arcScaleX_ * n.radius), ",", b(n.y - this.arcScaleY_ * n.radius), " ", b(n.x + this.arcScaleX_ * n.radius), ",", b(n.y + this.arcScaleY_ * n.radius), " ", b(n.xStart), ",", b(n.yStart), " ", b(n.xEnd), ",", b(n.yEnd))
                }
                if (n) {
                    if (f.x == null || n.x < f.x) f.x = n.x;
                    if (h.x == null || n.x > h.x) h.x = n.x;
                    if (f.y == null || n.y < f.y) f.y = n.y;
                    if (h.y == null || n.y > h.y) h.y = n.y
                }
            }
            j.push(' ">'), a ? Q(this, j, f, h) : P(this, j), j.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", j.join(""))
        }
    }, N.fill = function () {
        this.stroke(!0)
    }, N.closePath = function () {
        this.currentPath_.push({
            type: "close"
        })
    }, N.getCoords_ = function (a, b) {
        var c = this.m_;
        return {
            x: g * (a * c[0][0] + b * c[1][0] + c[2][0]) - i,
            y: g * (a * c[0][1] + b * c[1][1] + c[2][1]) - i
        }
    }, N.save = function () {
        var a = {};
        y(this, a), this.aStack_.push(a), this.mStack_.push(this.m_), this.m_ = x(w(), this.m_)
    }, N.restore = function () {
        this.aStack_.length && (y(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    }, N.translate = function (a, b) {
        var c = [
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ];
        S(this, x(c, this.m_), !1)
    }, N.rotate = function (a) {
        var b = d(a),
            e = c(a),
            f = [
                [b, e, 0],
                [-e, b, 0],
                [0, 0, 1]
            ];
        S(this, x(f, this.m_), !1)
    }, N.scale = function (a, b) {
        this.arcScaleX_ *= a, this.arcScaleY_ *= b;
        var c = [
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ];
        S(this, x(c, this.m_), !0)
    }, N.transform = function (a, b, c, d, e, f) {
        var g = [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ];
        S(this, x(g, this.m_), !0)
    }, N.setTransform = function (a, b, c, d, e, f) {
        var g = [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ];
        S(this, g, !0)
    }, N.drawText_ = function (a, c, d, e, f) {
        var h = this.m_,
            i = 1e3,
            j = 0,
            k = i,
            l = {
                x: 0,
                y: 0
            }, m = [],
            o = J(I(this.font), this.element_),
            p = K(o),
            q = this.element_.currentStyle,
            r = this.textAlign.toLowerCase();
        switch (r) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                r = q.direction == "ltr" ? "right" : "left";
                break;
            case "start":
                r = q.direction == "rtl" ? "right" : "left";
                break;
            default:
                r = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                l.y = o.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                l.y = -o.size / 2.25
        }
        switch (r) {
            case "right":
                j = i, k = .05;
                break;
            case "center":
                j = k = i / 2
        }
        var s = this.getCoords_(c + l.x, d + l.y);
        m.push('<g_vml_:line from="', -j, ' 0" to="', k, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !f, '" stroked="', !! f, '" style="position:absolute;width:1px;height:1px;">'), f ? P(this, m) : Q(this, m, {
            x: -j,
            y: 0
        }, {
            x: k,
            y: o.size
        });
        var t = h[0][0].toFixed(3) + "," + h[1][0].toFixed(3) + "," + h[0][1].toFixed(3) + "," + h[1][1].toFixed(3) + ",0,0",
            u = b(s.x / g) + "," + b(s.y / g);
        m.push('<g_vml_:skew on="t" matrix="', t, '" ', ' offset="', u, '" origin="', j, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', n(a), '" style="v-text-align:', r, ";font:", n(p), '" /></g_vml_:line>'), this.element_.insertAdjacentHTML("beforeEnd", m.join(""))
    }, N.fillText = function (a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    }, N.strokeText = function (a, b, c, d) {
        this.drawText_(a, b, c, d, !0)
    }, N.measureText = function (a) {
        if (!this.textMeasureEl_) {
            var b = '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
            this.element_.insertAdjacentHTML("beforeEnd", b), this.textMeasureEl_ = this.element_.lastChild
        }
        var c = this.element_.ownerDocument;
        return this.textMeasureEl_.innerHTML = "", this.textMeasureEl_.style.font = this.font, this.textMeasureEl_.appendChild(c.createTextNode(a)), {
            width: this.textMeasureEl_.offsetWidth
        }
    }, N.clip = function () {}, N.arcTo = function () {}, N.createPattern = function (a, b) {
        return new U(a, b)
    }, T.prototype.addColorStop = function (a, b) {
        b = F(b), this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    var Y = X.prototype = new Error;
    Y.INDEX_SIZE_ERR = 1, Y.DOMSTRING_SIZE_ERR = 2, Y.HIERARCHY_REQUEST_ERR = 3, Y.WRONG_DOCUMENT_ERR = 4, Y.INVALID_CHARACTER_ERR = 5, Y.NO_DATA_ALLOWED_ERR = 6, Y.NO_MODIFICATION_ALLOWED_ERR = 7, Y.NOT_FOUND_ERR = 8, Y.NOT_SUPPORTED_ERR = 9, Y.INUSE_ATTRIBUTE_ERR = 10, Y.INVALID_STATE_ERR = 11, Y.SYNTAX_ERR = 12, Y.INVALID_MODIFICATION_ERR = 13, Y.NAMESPACE_ERR = 14, Y.INVALID_ACCESS_ERR = 15, Y.VALIDATION_ERR = 16, Y.TYPE_MISMATCH_ERR = 17, G_vmlCanvasManager = p, CanvasRenderingContext2D = M, CanvasGradient = T, CanvasPattern = U, DOMException = X
}(),
function (a) {
    var b = function () {
        var a = function () {};
        return a.prototype = {
            otag: "{{",
            ctag: "}}",
            pragmas: {},
            buffer: [],
            pragmas_implemented: {
                "IMPLICIT-ITERATOR": !0
            },
            context: {},
            render: function (a, b, c, d) {
                d || (this.context = b, this.buffer = []);
                if (!this.includes("", a)) {
                    if (d) return a;
                    this.send(a);
                    return
                }
                a = this.render_pragmas(a), a = this.render_section(a, b, c);
                if (d) return this.render_tags(a, b, c, d);
                this.render_tags(a, b, c, d)
            },
            send: function (a) {
                a != "" && this.buffer.push(a)
            },
            render_pragmas: function (a) {
                if (!this.includes("%", a)) return a;
                var b = this;
                return a.replace(RegExp(this.otag + "%([\\w-]+) ?([\\w]+=[\\w]+)?" + this.ctag), function (a, c, d) {
                    if (!b.pragmas_implemented[c]) throw {
                        message: "This implementation of mustache doesn't understand the '" + c + "' pragma"
                    };
                    return b.pragmas[c] = {}, d && (a = d.split("="), b.pragmas[c][a[0]] = a[1]), ""
                })
            },
            render_partial: function (a, b, c) {
                a = this.trim(a);
                if (!c || c[a] === undefined) throw {
                    message: "unknown_partial '" + a + "'"
                };
                return typeof b[a] != "object" ? this.render(c[a], b, c, !0) : this.render(c[a], b[a], c, !0)
            },
            render_section: function (a, b, c) {
                if (!this.includes("#", a) && !this.includes("^", a)) return a;
                var d = this;
                return a.replace(RegExp(this.otag + "(\\^|\\#)\\s*(.+)\\s*" + this.ctag + "\n*([\\s\\S]+?)" + this.otag + "\\/\\s*\\2\\s*" + this.ctag + "\\s*", "mg"), function (a, e, f, g) {
                    a = d.find(f, b);
                    if (e == "^") return !a || d.is_array(a) && a.length === 0 ? d.render(g, b, c, !0) : "";
                    if (e == "#") return d.is_array(a) ? d.map(a, function (a) {
                        return d.render(g, d.create_context(a), c, !0)
                    }).join("") : d.is_object(a) ? d.render(g, d.create_context(a), c, !0) : typeof a == "function" ? a.call(b, g, function (a) {
                        return d.render(a, b, c, !0)
                    }) : a ? d.render(g, b, c, !0) : ""
                })
            },
            render_tags: function (a, b, c, d) {
                var e = this,
                    f = function () {
                        return RegExp(e.otag + "(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?" + e.ctag + "+", "g")
                    }, g = f(),
                    h = function (a, d, h) {
                        switch (d) {
                            case "!":
                                return "";
                            case "=":
                                return e.set_delimiters(h), g = f(), "";
                            case ">":
                                return e.render_partial(h, b, c);
                            case "{":
                                return e.find(h, b);
                            default:
                                return e.escape(e.find(h, b))
                        }
                    };
                a = a.split("\n");
                for (var i = 0; i < a.length; i++) a[i] = a[i].replace(g, h, this), d || this.send(a[i]);
                if (d) return a.join("\n")
            },
            set_delimiters: function (a) {
                a = a.split(" "), this.otag = this.escape_regex(a[0]), this.ctag = this.escape_regex(a[1])
            },
            escape_regex: function (a) {
                return arguments.callee.sRE || (arguments.callee.sRE = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "g")), a.replace(arguments.callee.sRE, "\\$1")
            },
            find: function (a, b) {
                a = this.trim(a);
                var c;
                if (b[a] === !1 || b[a] === 0 || b[a]) c = b[a];
                else if (this.context[a] === !1 || this.context[a] === 0 || this.context[a]) c = this.context[a];
                return typeof c == "function" ? c.apply(b) : c !== undefined ? c : ""
            },
            includes: function (a, b) {
                return b.indexOf(this.otag + a) != -1
            },
            escape: function (a) {
                return a = String(a === null ? "" : a), a.replace(/&(?!\w+;)|["<>\\]/g, function (a) {
                    switch (a) {
                        case "&":
                            return "&amp;";
                        case "\\":
                            return "\\\\";
                        case '"':
                            return '"';
                        case "<":
                            return "&lt;";
                        case ">":
                            return "&gt;";
                        default:
                            return a
                    }
                })
            },
            create_context: function (a) {
                if (this.is_object(a)) return a;
                var b = ".";
                this.pragmas["IMPLICIT-ITERATOR"] && (b = this.pragmas["IMPLICIT-ITERATOR"].iterator);
                var c = {};
                return c[b] = a, c
            },
            is_object: function (a) {
                return a && typeof a == "object"
            },
            is_array: function (a) {
                return Object.prototype.toString.call(a) === "[object Array]"
            },
            trim: function (a) {
                return a.replace(/^\s*|\s*$/g, "")
            },
            map: function (a, b) {
                if (typeof a.map == "function") return a.map(b);
                for (var c = [], d = a.length, e = 0; e < d; e++) c.push(b(a[e]));
                return c
            }
        }, {
            name: "mustache.js",
            version: "0.3.0",
            to_html: function (b, c, d, e) {
                var g = new a;
                e && (g.send = e), g.render(b, c, d);
                if (!e) return g.buffer.join("\n")
            }
        }
    }();
    window.ich = new function () {
        var c = this;
        c.VERSION = "0.9", c.templates = {}, c.partials = {}, c.addTemplate = function (d, e) {
            if (c[d]) throw "Invalid name: " + d + ".";
            if (c.templates[d]) throw 'Template " + name + " exists';
            c.templates[d] = e, c[d] = function (e, g) {
                e = e || {};
                var h = b.to_html(c.templates[d], e, c.partials);
                return g ? h : a(h)
            }
        }, c.addPartial = function (a, b) {
            if (c.partials[a]) throw 'Partial " + name + " exists';
            c.partials[a] = b
        }, c.grabTemplates = function () {
            a('script[type="text/html"]').each(function (b, d) {
                var e = a(typeof b == "number" ? d : b),
                    g = "".trim ? e.html().trim() : a.trim(e.html());
                c[e.hasClass("partial") ? "addPartial" : "addTemplate"](e.attr("id"), g), e.remove()
            })
        }, c.clearAll = function () {
            for (var a in c.templates) delete c[a];
            c.templates = {}, c.partials = {}
        }, c.refresh = function () {
            c.clearAll(), c.grabTemplates()
        }
    }, a(function () {
        ich.grabTemplates()
    })
}(window.jQuery || window.Zepto),
function (a) {
    function c(a) {
        function c(c) {
            if (b.locked) return;
            b.x != -1 && (b.x = -1, a.triggerRedrawOverlay())
        }
        function d(c) {
            if (b.locked) return;
            if (a.getSelection && a.getSelection()) {
                b.x = -1;
                return
            }
            var d = a.offset();
            b.x = Math.max(0, Math.min(c.pageX - d.left, a.width())), b.y = Math.max(0, Math.min(c.pageY - d.top, a.height())), a.triggerRedrawOverlay()
        }
        var b = {
            x: -1,
            y: -1,
            locked: !1
        };
        a.setCrosshair = function (d) {
            if (!d) b.x = -1;
            else {
                var e = a.p2c(d);
                b.x = Math.max(0, Math.min(e.left, a.width())), b.y = Math.max(0, Math.min(e.top, a.height()))
            }
            a.triggerRedrawOverlay()
        }, a.clearCrosshair = a.setCrosshair, a.lockCrosshair = function (d) {
            d && a.setCrosshair(d), b.locked = !0
        }, a.unlockCrosshair = function () {
            b.locked = !1
        }, a.hooks.bindEvents.push(function (a, b) {
            if (!a.getOptions().crosshair.mode) return;
            b.mouseout(c), b.mousemove(d)
        }), a.hooks.drawOverlay.push(function (a, c) {
            var d = a.getOptions().crosshair;
            if (!d.mode) return;
            var e = a.getPlotOffset();
            c.save(), c.translate(e.left, e.top), b.x != -1 && (c.strokeStyle = d.color, c.lineWidth = d.lineWidth, c.lineJoin = "round", c.beginPath(), d.mode.indexOf("x") != -1 && (c.moveTo(b.x, 0), c.lineTo(b.x, a.height())), d.mode.indexOf("y") != -1 && (c.moveTo(0, b.y), c.lineTo(a.width(), b.y)), c.stroke()), c.restore()
        }), a.hooks.shutdown.push(function (a, b) {
            b.unbind("mouseout", c), b.unbind("mousemove", d)
        })
    }
    var b = {
        crosshair: {
            mode: null,
            color: "rgba(170, 0, 0, 0.80)",
            lineWidth: 1
        }
    };
    a.plot.plugins.push({
        init: c,
        options: b,
        name: "crosshair",
        version: "1.0"
    })
}(jQuery),
function (a) {
    function b(b) {
        function r(a, b) {
            b.series.pie.show && (b.grid.show = !1, b.series.pie.label.show == "auto" && (b.legend.show ? b.series.pie.label.show = !1 : b.series.pie.label.show = !0), b.series.pie.radius == "auto" && (b.series.pie.label.show ? b.series.pie.radius = .75 : b.series.pie.radius = 1), b.series.pie.tilt > 1 && (b.series.pie.tilt = 1), b.series.pie.tilt < 0 && (b.series.pie.tilt = 0), a.hooks.processDatapoints.push(v), a.hooks.drawOverlay.push(L), a.hooks.draw.push(B))
        }
        function s(a, b) {
            var c = a.getOptions();
            c.series.pie.show && c.grid.hoverable && b.unbind("mousemove").mousemove(F), c.series.pie.show && c.grid.clickable && b.unbind("click").click(G)
        }
        function t(a) {
            function c(a, d) {
                d || (d = 0);
                for (var e = 0; e < a.length; ++e) {
                    for (var f = 0; f < d; f++) b += "\t";
                    typeof a[e] == "object" ? (b += "" + e + ":\n", c(a[e], d + 1)) : b += "" + e + ": " + a[e] + "\n"
                }
            }
            var b = "";
            c(a), alert(b)
        }
        function u(a) {
            for (var b = 0; b < a.length; ++b) {
                var c = parseFloat(a[b].data[0][1]);
                c && (j += c)
            }
        }
        function v(b, f, g, h) {
            o || (o = !0, d = b.getCanvas(), e = a(d).parent(), c = b.getOptions(), b.setData(A(b.getData())))
        }
        function w() {
            n = e.children().filter(".legend").children().width(), f = Math.min(d.width, d.height / c.series.pie.tilt) / 2, h = d.height / 2 + c.series.pie.offset.top, g = d.width / 2, c.series.pie.offset.left == "auto" ? c.legend.position.match("w") ? g += n / 2 : g -= n / 2 : g += c.series.pie.offset.left, g < f ? g = f : g > d.width - f && (g = d.width - f)
        }
        function z(a) {
            for (var b = 0; b < a.length; ++b) if (typeof a[b].data == "number") a[b].data = [
                [1, a[b].data]
            ];
            else if (typeof a[b].data == "undefined" || typeof a[b].data[0] == "undefined") typeof a[b].data != "undefined" && typeof a[b].data.label != "undefined" && (a[b].label = a[b].data.label), a[b].data = [
                [1, 0]
            ];
            return a
        }
        function A(a) {
            a = z(a), u(a);
            var b = 0,
                d = 0,
                e = c.series.pie.combine.color,
                f = [];
            for (var g = 0; g < a.length; ++g) a[g].data[0][1] = parseFloat(a[g].data[0][1]), a[g].data[0][1] || (a[g].data[0][1] = 0), a[g].data[0][1] / j <= c.series.pie.combine.threshold ? (b += a[g].data[0][1], d++, e || (e = a[g].color)) : f.push({
                data: [
                    [1, a[g].data[0][1]]
                ],
                color: a[g].color,
                label: a[g].label,
                angle: a[g].data[0][1] * Math.PI * 2 / j,
                percent: a[g].data[0][1] / j * 100
            });
            return d > 0 && f.push({
                data: [
                    [1, b]
                ],
                color: e,
                label: c.series.pie.combine.label,
                angle: b * Math.PI * 2 / j,
                percent: b / j * 100
            }), f
        }
        function B(b, i) {
            function o() {
                ctx.clearRect(0, 0, d.width, d.height), e.children().filter(".pieLabel, .pieLabelBackground").remove()
            }
            function p() {
                var a = 5,
                    b = 15,
                    e = 10,
                    i = .02;
                if (c.series.pie.radius > 1) var j = c.series.pie.radius;
                else var j = f * c.series.pie.radius;
                if (j >= d.width / 2 - a || j * c.series.pie.tilt >= d.height / 2 - b || j <= e) return;
                ctx.save(), ctx.translate(a, b), ctx.globalAlpha = i, ctx.fillStyle = "#000", ctx.translate(g, h), ctx.scale(1, c.series.pie.tilt);
                for (var k = 1; k <= e; k++) ctx.beginPath(), ctx.arc(0, 0, j, 0, Math.PI * 2, !1), ctx.fill(), j -= k;
                ctx.restore()
            }
            function q() {
                function m(c, d, e) {
                    if (c <= 0) return;
                    e ? ctx.fillStyle = d : (ctx.strokeStyle = d, ctx.lineJoin = "round"), ctx.beginPath(), Math.abs(c - Math.PI * 2) > 1e-9 ? ctx.moveTo(0, 0) : a.browser.msie && (c -= 1e-4), ctx.arc(0, 0, b, i, i + c, !1), ctx.closePath(), i += c, e ? ctx.fill() : ctx.stroke()
                }
                function n() {
                    function m(b, f, j) {
                        if (b.data[0][1] == 0) return;
                        var l = c.legend.labelFormatter,
                            m, n = c.series.pie.label.formatter;
                        l ? m = l(b.label, b) : m = b.label, n && (m = n(m, b));
                        var o = (f + b.angle + f) / 2,
                            p = g + Math.round(Math.cos(o) * i),
                            q = h + Math.round(Math.sin(o) * i) * c.series.pie.tilt,
                            r = '<span class="pieLabel" id="pieLabel' + j + '" style="position:absolute;top:' + q + "px;left:" + p + 'px;">' + m + "</span>";
                        e.append(r);
                        var s = e.children("#pieLabel" + j),
                            t = q - s.height() / 2,
                            u = p - s.width() / 2;
                        s.css("top", t), s.css("left", u);
                        if (0 - t > 0 || 0 - u > 0 || d.height - (t + s.height()) < 0 || d.width - (u + s.width()) < 0) k = !0;
                        if (c.series.pie.label.background.opacity != 0) {
                            var v = c.series.pie.label.background.color;
                            v == null && (v = b.color);
                            var w = "top:" + t + "px;left:" + u + "px;";
                            a('<div class="pieLabelBackground" style="position:absolute;width:' + s.width() + "px;height:" + s.height() + "px;" + w + "background-color:" + v + ';"> </div>').insertBefore(s).css("opacity", c.series.pie.label.background.opacity)
                        }
                    }
                    var b = startAngle;
                    if (c.series.pie.label.radius > 1) var i = c.series.pie.label.radius;
                    else var i = f * c.series.pie.label.radius;
                    for (var l = 0; l < j.length; ++l) j[l].percent >= c.series.pie.label.threshold * 100 && m(j[l], b, l), b += j[l].angle
                }
                startAngle = Math.PI * c.series.pie.startAngle;
                if (c.series.pie.radius > 1) var b = c.series.pie.radius;
                else var b = f * c.series.pie.radius;
                ctx.save(), ctx.translate(g, h), ctx.scale(1, c.series.pie.tilt), ctx.save();
                var i = startAngle;
                for (var l = 0; l < j.length; ++l) j[l].startAngle = i, m(j[l].angle, j[l].color, !0);
                ctx.restore(), ctx.save(), ctx.lineWidth = c.series.pie.stroke.width, i = startAngle;
                for (var l = 0; l < j.length; ++l) m(j[l].angle, c.series.pie.stroke.color, !1);
                ctx.restore(), C(ctx), c.series.pie.label.show && n(), ctx.restore()
            }
            if (!e) return;
            ctx = i, w();
            var j = b.getData(),
                n = 0;
            while (k && n < l) k = !1, n > 0 && (f *= m), n += 1, o(), c.series.pie.tilt <= .8 && p(), q();
            n >= l && (o(), e.prepend('<div class="error">Could not draw pie with labels contained inside canvas</div>')), b.setSeries && b.insertLegend && (b.setSeries(j), b.insertLegend())
        }
        function C(a) {
            c.series.pie.innerRadius > 0 && (a.save(), innerRadius = c.series.pie.innerRadius > 1 ? c.series.pie.innerRadius : f * c.series.pie.innerRadius, a.globalCompositeOperation = "destination-out", a.beginPath(), a.fillStyle = c.series.pie.stroke.color, a.arc(0, 0, innerRadius, 0, Math.PI * 2, !1), a.fill(), a.closePath(), a.restore(), a.save(), a.beginPath(), a.strokeStyle = c.series.pie.stroke.color, a.arc(0, 0, innerRadius, 0, Math.PI * 2, !1), a.stroke(), a.closePath(), a.restore())
        }
        function D(a, b) {
            for (var c = !1, d = -1, e = a.length, f = e - 1; ++d < e; f = d)(a[d][1] <= b[1] && b[1] < a[f][1] || a[f][1] <= b[1] && b[1] < a[d][1]) && b[0] < (a[f][0] - a[d][0]) * (b[1] - a[d][1]) / (a[f][1] - a[d][1]) + a[d][0] && (c = !c);
            return c
        }
        function E(a, c) {
            var d = b.getData(),
                e = b.getOptions(),
                i = e.series.pie.radius > 1 ? e.series.pie.radius : f * e.series.pie.radius;
            for (var j = 0; j < d.length; ++j) {
                var k = d[j];
                if (k.pie.show) {
                    ctx.save(), ctx.beginPath(), ctx.moveTo(0, 0), ctx.arc(0, 0, i, k.startAngle, k.startAngle + k.angle, !1), ctx.closePath(), x = a - g, y = c - h;
                    if (ctx.isPointInPath) {
                        if (ctx.isPointInPath(a - g, c - h)) return ctx.restore(), {
                            datapoint: [k.percent, k.data],
                            dataIndex: 0,
                            series: k,
                            seriesIndex: j
                        }
                    } else {
                        p1X = i * Math.cos(k.startAngle), p1Y = i * Math.sin(k.startAngle), p2X = i * Math.cos(k.startAngle + k.angle / 4), p2Y = i * Math.sin(k.startAngle + k.angle / 4), p3X = i * Math.cos(k.startAngle + k.angle / 2), p3Y = i * Math.sin(k.startAngle + k.angle / 2), p4X = i * Math.cos(k.startAngle + k.angle / 1.5), p4Y = i * Math.sin(k.startAngle + k.angle / 1.5), p5X = i * Math.cos(k.startAngle + k.angle), p5Y = i * Math.sin(k.startAngle + k.angle), arrPoly = [
                            [0, 0],
                            [p1X, p1Y],
                            [p2X, p2Y],
                            [p3X, p3Y],
                            [p4X, p4Y],
                            [p5X, p5Y]
                        ], arrPoint = [x, y];
                        if (D(arrPoly, arrPoint)) return ctx.restore(), {
                            datapoint: [k.percent, k.data],
                            dataIndex: 0,
                            series: k,
                            seriesIndex: j
                        }
                    }
                    ctx.restore()
                }
            }
            return null
        }
        function F(a) {
            H("plothover", a)
        }
        function G(a) {
            H("plotclick", a)
        }
        function H(a, d) {
            var f = b.offset(),
                g = parseInt(d.pageX - f.left),
                h = parseInt(d.pageY - f.top),
                i = E(g, h);
            if (c.grid.autoHighlight) for (var j = 0; j < q.length; ++j) {
                var k = q[j];
                k.auto == a && (!i || k.series != i.series) && J(k.series)
            }
            i && I(i.series, a);
            var l = {
                pageX: d.pageX,
                pageY: d.pageY
            };
            e.trigger(a, [l, i])
        }
        function I(a, c) {
            typeof a == "number" && (a = series[a]);
            var d = K(a);
            d == -1 ? (q.push({
                series: a,
                auto: c
            }), b.triggerRedrawOverlay()) : c || (q[d].auto = !1)
        }
        function J(a) {
            a == null && (q = [], b.triggerRedrawOverlay()), typeof a == "number" && (a = series[a]);
            var c = K(a);
            c != -1 && (q.splice(c, 1), b.triggerRedrawOverlay())
        }
        function K(a) {
            for (var b = 0; b < q.length; ++b) {
                var c = q[b];
                if (c.series == a) return b
            }
            return -1
        }
        function L(a, b) {
            function e(a) {
                if (a.angle < 0) return;
                b.fillStyle = "rgba(255, 255, 255, " + c.series.pie.highlight.opacity + ")", b.beginPath(), Math.abs(a.angle - Math.PI * 2) > 1e-9 && b.moveTo(0, 0), b.arc(0, 0, d, a.startAngle, a.startAngle + a.angle, !1), b.closePath(), b.fill()
            }
            var c = a.getOptions(),
                d = c.series.pie.radius > 1 ? c.series.pie.radius : f * c.series.pie.radius;
            b.save(), b.translate(g, h), b.scale(1, c.series.pie.tilt);
            for (i = 0; i < q.length; ++i) e(q[i].series);
            C(b), b.restore()
        }
        var d = null,
            e = null,
            f = null,
            g = null,
            h = null,
            j = 0,
            k = !0,
            l = 10,
            m = .95,
            n = 0,
            o = !1,
            p = !1,
            q = [];
        b.hooks.processOptions.push(r), b.hooks.bindEvents.push(s)
    }
    var c = {
        series: {
            pie: {
                show: !1,
                radius: "auto",
                innerRadius: 0,
                startAngle: 1.5,
                tilt: 1,
                offset: {
                    top: 0,
                    left: "auto"
                },
                stroke: {
                    color: "#FFF",
                    width: 1
                },
                label: {
                    show: "auto",
                    formatter: function (a, b) {
                        return '<div style="font-size:x-small;text-align:center;padding:2px;color:' + b.color + ';">' + a + "<br/>" + Math.round(b.percent) + "%</div>"
                    },
                    radius: 1,
                    background: {
                        color: null,
                        opacity: 0
                    },
                    threshold: 0
                },
                combine: {
                    threshold: -1,
                    color: null,
                    label: "Other"
                },
                highlight: {
                    opacity: .5
                }
            }
        }
    };
    a.plot.plugins.push({
        init: b,
        options: c,
        name: "pie",
        version: "1.0"
    })
}(jQuery), $.fn.displayErrors = function (a, b) {
    var c = this.removeErrors();
    c.parent().addClass("error");
    for (key in a) {
        var d = b ? b + "[" + key + "]" : key,
            e = a[key].join(", "),
            f = '<strong class="error_explanation">' + e + "</strong>";
        c.find('[name="' + d + '"]').addClass("error").closest("p").append(f)
    }
    var g = c.closest("section");
    return g.length > 0 && g.trigger("resize.g", [c.closest(".panel").height()]), this
}, $.fn.removeErrors = function () {
    this.parent().removeClass("error").find("input.error").removeClass("error"), this.find("strong.error_explanation").remove();
    var a = this.closest("section");
    return a.length > 0 && a.trigger("resize.g", [this.closest(".panel").height()]), this
},
function (a) {
    a.fn.labelize = function () {
        return this.focus(function () {
            a(this).val() == a(this).attr("title") && (a(this).removeClass("labelized"), a(this).val(""))
        }).blur(function () {
            a.trim(a(this).val()) == "" && (a(this).addClass("labelized"), a(this).val(a(this).attr("title")))
        }).blur().each(function () {
            var b = a(this);
            a(this.form).submit(function (a) {
                b.focus()
            })
        })
    }
}(jQuery),
function (a) {
    function c(a) {
        return typeof a == "object" ? a : {
            top: a,
            left: a
        }
    }
    var b = a.scrollTo = function (b, c, e) {
        a(window).scrollTo(b, c, e)
    };
    b.defaults = {
        axis: "xy",
        duration: parseFloat(a.fn.jquery) >= 1.3 ? 0 : 1
    }, b.window = function (b) {
        return a(window)._scrollable()
    }, a.fn._scrollable = function () {
        return this.map(function () {
            var b = this,
                c = !b.nodeName || a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!c) return b;
            var e = (b.contentWindow || b).document || b.ownerDocument || b;
            return a.browser.safari || e.compatMode == "BackCompat" ? e.body : e.documentElement
        })
    }, a.fn.scrollTo = function (e, f, g) {
        return typeof f == "object" && (g = f, f = 0), typeof g == "function" && (g = {
            onAfter: g
        }), e == "max" && (e = 9e9), g = a.extend({}, b.defaults, g), f = f || g.speed || g.duration, g.queue = g.queue && g.axis.length > 1, g.queue && (f /= 2), g.offset = c(g.offset), g.over = c(g.over), this._scrollable().each(function () {
            function r(a) {
                i.animate(o, f, g.easing, a && function () {
                    a.call(this, e, g)
                })
            }
            var h = this,
                i = a(h),
                l = e,
                m, o = {}, q = i.is("html,body");
            switch (typeof l) {
                case "number":
                case "string":
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(l)) {
                        l = c(l);
                        break
                    }
                    l = a(l, this);
                case "object":
                    if (l.is || l.style) m = (l = a(l)).offset()
            }
            a.each(g.axis.split(""), function (a, c) {
                var d = c == "x" ? "Left" : "Top",
                    e = d.toLowerCase(),
                    f = "scroll" + d,
                    j = h[f],
                    n = b.max(h, c);
                if (m) o[f] = m[e] + (q ? 0 : j - i.offset()[e]), g.margin && (o[f] -= parseInt(l.css("margin" + d)) || 0, o[f] -= parseInt(l.css("border" + d + "Width")) || 0), o[f] += g.offset[e] || 0, g.over[e] && (o[f] += l[c == "x" ? "width" : "height"]() * g.over[e]);
                else {
                    var p = l[e];
                    o[f] = p.slice && p.slice(-1) == "%" ? parseFloat(p) / 100 * n : p
                }
                /^\d+$/.test(o[f]) && (o[f] = o[f] <= 0 ? 0 : Math.min(o[f], n)), !a && g.queue && (j != o[f] && r(g.onAfterFirst), delete o[f])
            }), r(g.onAfter)
        }).end()
    }, b.max = function (b, c) {
        var e = c == "x" ? "Width" : "Height",
            f = "scroll" + e;
        if (!a(b).is("html,body")) return b[f] - a(b)[e.toLowerCase()]();
        var g = "client" + e,
            h = b.ownerDocument.documentElement,
            i = b.ownerDocument.body;
        return Math.max(h[f], i[f]) - Math.min(h[g], i[g])
    }
}(jQuery),
function (a) {
    function c() {
        var b = d(this);
        return isNaN(b.datetime) || a(this).text(e(b.datetime)), this
    }
    function d(c) {
        c = a(c);
        if (!c.data("timeago")) {
            c.data("timeago", {
                datetime: b.datetime(c)
            });
            var d = a.trim(c.text());
            d.length > 0 && c.attr("title", d)
        }
        return c.data("timeago")
    }
    function e(a) {
        return b.inWords(f(a))
    }
    function f(a) {
        return (new Date).getTime() - a.getTime()
    }
    a.timeago = function (b) {
        return b instanceof Date ? e(b) : typeof b == "string" ? e(a.timeago.parse(b)) : e(a.timeago.datetime(b))
    };
    var b = a.timeago;
    a.extend(a.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowFuture: !1,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "",
                suffixFromNow: "from now",
                seconds: "now",
                minute: "1 min",
                minutes: "%d min",
                hour: "1 hour",
                hours: "%d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                numbers: []
            }
        },
        inWords: function (b) {
            function k(d, e) {
                var f = a.isFunction(d) ? d(e, b) : d,
                    g = c.numbers && c.numbers[e] || e;
                return f.replace(/%d/i, g)
            }
            var c = this.settings.strings,
                d = c.prefixAgo,
                e = c.suffixAgo;
            this.settings.allowFuture && (b < 0 && (d = c.prefixFromNow, e = c.suffixFromNow), b = Math.abs(b));
            var f = b / 1e3,
                g = f / 60,
                h = g / 60,
                i = h / 24,
                j = i / 365,
                l = f < 45 && k(c.seconds, Math.round(f)) || f < 90 && k(c.minute, 1) || g < 45 && k(c.minutes, Math.round(g)) || g < 90 && k(c.hour, 1) || h < 24 && k(c.hours, Math.round(h)) || h < 48 && k(c.day, 1) || i < 30 && k(c.days, Math.floor(i)) || i < 60 && k(c.month, 1) || i < 365 && k(c.months, Math.floor(i / 30)) || j < 2 && k(c.year, 1) || k(c.years, Math.floor(j));
            return a.trim([d, l, e].join(" "))
        },
        parse: function (b) {
            var c = a.trim(b);
            return c = c.replace(/\.\d\d\d+/, ""), c = c.replace(/-/, "/").replace(/-/, "/"), c = c.replace(/T/, " ").replace(/Z/, " UTC"), c = c.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(c)
        },
        datetime: function (c) {
            var d = a(c).get(0).tagName.toLowerCase() === "time",
                e = d ? a(c).attr("datetime") : a(c).attr("title");
            return b.parse(e)
        }
    }), a.fn.timeago = function () {
        var a = this;
        a.each(c);
        var d = b.settings;
        return d.refreshMillis > 0 && setInterval(function () {
            a.each(c)
        }, d.refreshMillis), a
    }, document.createElement("abbr"), document.createElement("time")
}(jQuery),
function (a, b) {
    function c(b, c) {
        var e = b.nodeName.toLowerCase();
        return "area" === e ? (c = b.parentNode, e = c.name, !b.href || !e || c.nodeName.toLowerCase() !== "map" ? !1 : (b = a("img[usemap=#" + e + "]")[0], !! b && d(b))) : (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b)
    }
    function d(b) {
        return !a(b).parents().andSelf().filter(function () {
            return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
        }).length
    }
    a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
        version: "1.8.16",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), a.fn.extend({
        propAttr: a.fn.prop || a.fn.attr,
        _focus: a.fn.focus,
        focus: function (b, c) {
            return typeof b == "number" ? this.each(function () {
                var d = this;
                setTimeout(function () {
                    a(d).focus(), c && c.call(d)
                }, b)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var b;
            return b = a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        },
        zIndex: function (c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length) {
                c = a(this[0]);
                for (var d; c.length && c[0] !== document;) {
                    d = c.css("position");
                    if (d === "absolute" || d === "relative" || d === "fixed") {
                        d = parseInt(c.css("zIndex"), 10);
                        if (!isNaN(d) && d !== 0) return d
                    }
                    c = c.parent()
                }
            }
            return 0
        },
        disableSelection: function () {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                a.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), a.each(["Width", "Height"], function (c, d) {
        function e(
        b, c, d, e) {
            return a.each(f, function () {
                c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), e && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
            }), c
        }
        var f = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            g = d.toLowerCase(),
            h = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + d] = function (c) {
            return c === b ? h["inner" + d].call(this) : this.each(function () {
                a(this).css(g, e(this, c) + "px")
            })
        }, a.fn["outer" + d] = function (b, c) {
            return typeof b != "number" ? h["outer" + d].call(this, b) : this.each(function () {
                a(this).css(g, e(this, b, !0, c) + "px")
            })
        }
    }), a.extend(a.expr[":"], {
        data: function (b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function (b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        },
        tabbable: function (b) {
            var d = a.attr(b, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && c(b, !e)
        }
    }), a(function () {
        var b = document.body,
            c = b.appendChild(c = document.createElement("div"));
        a.extend(c.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
    }), a.extend(a.ui, {
        plugin: {
            add: function (b, c, d) {
                b = a.ui[b].prototype;
                for (var e in d) b.plugins[e] = b.plugins[e] || [], b.plugins[e].push([c, d[e]])
            },
            call: function (a, b, c) {
                if ((b = a.plugins[b]) && a.element[0].parentNode) for (var d = 0; d < b.length; d++) a.options[b[d][0]] && b[d][1].apply(a.element, c)
            }
        },
        contains: function (a, b) {
            return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
        },
        hasScroll: function (b, c) {
            if (a(b).css("overflow") === "hidden") return !1;
            c = c && c === "left" ? "scrollLeft" : "scrollTop";
            var d = !1;
            return b[c] > 0 ? !0 : (b[c] = 1, d = b[c] > 0, b[c] = 0, d)
        },
        isOverAxis: function (a, b, c) {
            return a > b && a < b + c
        },
        isOver: function (b, c, d, e, f, g) {
            return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
        }
    }))
}(jQuery),
function (a, b) {
    if (a.cleanData) {
        var c = a.cleanData;
        a.cleanData = function (b) {
            for (var d = 0, e;
            (e = b[d]) != null; d++) try {
                a(e).triggerHandler("remove")
            } catch (f) {}
            c(b)
        }
    } else {
        var d = a.fn.remove;
        a.fn.remove = function (b, c) {
            return this.each(function () {
                return c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function () {
                    try {
                        a(this).triggerHandler("remove")
                    } catch (b) {}
                }), d.call(a(this), b, c)
            })
        }
    }
    a.widget = function (b, c, d) {
        var e = b.split(".")[0],
            f;
        b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function (c) {
            return !!a.data(c, b)
        }, a[e] = a[e] || {}, a[e][b] = function (a, b) {
            arguments.length && this._createWidget(a, b)
        }, c = new c, c.options = a.extend(!0, {}, c.options), a[e][b].prototype = a.extend(!0, c, {
            namespace: e,
            widgetName: b,
            widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
            widgetBaseClass: f
        }, d), a.widget.bridge(b, a[e][b])
    }, a.widget.bridge = function (c, d) {
        a.fn[c] = function (e) {
            var f = typeof e == "string",
                g = Array.prototype.slice.call(arguments, 1),
                h = this;
            return e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e, f && e.charAt(0) === "_" ? h : (f ? this.each(function () {
                var d = a.data(this, c),
                    f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
                if (f !== d && f !== b) return h = f, !1
            }) : this.each(function () {
                var b = a.data(this, c);
                b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
            }), h)
        }
    }, a.Widget = function (a, b) {
        arguments.length && this._createWidget(a, b)
    }, a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (b, c) {
            a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
            var d = this;
            this.element.bind("remove." + this.widgetName, function () {
                d.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function () {
            return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (c, d) {
            var e = c;
            if (arguments.length === 0) return a.extend({}, this.options);
            if (typeof c == "string") {
                if (d === b) return this.options[c];
                e = {}, e[c] = d
            }
            return this._setOptions(e), this
        },
        _setOptions: function (b) {
            var c = this;
            return a.each(b, function (a, b) {
                c._setOption(a, b)
            }), this
        },
        _setOption: function (a, b) {
            return this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", b), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (b, c, d) {
            var e = this.options[b];
            c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), d = d || {};
            if (c.originalEvent) {
                b = a.event.props.length;
                for (var f; b;) f = a.event.props[--b], c[f] = c.originalEvent[f]
            }
            return this.element.trigger(c, d), !(a.isFunction(e) && e.call(this.element[0], c, d) === !1 || c.isDefaultPrevented())
        }
    }
}(jQuery),
function (a) {
    var b = !1;
    a(document).mouseup(function () {
        b = !1
    }), a.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function (a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function (c) {
                if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (c) {
            if (!b) {
                this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var e = this,
                    f = c.which == 1,
                    g = typeof this.options.cancel == "string" && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                if (!f || g || !this._mouseCapture(c)) return !0;
                this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    e.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(c) && this._mouseDelayMet(c)) {
                    this._mouseStarted = this._mouseStart(c) !== !1;
                    if (!this._mouseStarted) return c.preventDefault(), !0
                }
                return !0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
                    return e._mouseMove(a)
                }, this._mouseUpDelegate = function (a) {
                    return e._mouseUp(a)
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0
            }
        },
        _mouseMove: function (b) {
            return !a.browser.msie || document.documentMode >= 9 || !! b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1) ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b)
        },
        _mouseUp: function (b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
        },
        _mouseDistanceMet: function (a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery),
function (a) {
    a.ui = a.ui || {};
    var b = /left|center|right/,
        c = /top|center|bottom/,
        d = a.fn.position,
        e = a.fn.offset;
    a.fn.position = function (e) {
        if (!e || !e.of) return d.apply(this, arguments);
        e = a.extend({}, e);
        var f = a(e.of),
            g = f[0],
            h = (e.collision || "flip").split(" "),
            i = e.offset ? e.offset.split(" ") : [0, 0],
            j, k, l;
        return g.nodeType === 9 ? (j = f.width(), k = f.height(), l = {
            top: 0,
            left: 0
        }) : g.setTimeout ? (j = f.width(), k = f.height(), l = {
            top: f.scrollTop(),
            left: f.scrollLeft()
        }) : g.preventDefault ? (e.at = "left top", j = k = 0, l = {
            top: e.of.pageY,
            left: e.of.pageX
        }) : (j = f.outerWidth(), k = f.outerHeight(), l = f.offset()), a.each(["my", "at"], function () {
            var a = (e[this] || "").split(" ");
            a.length === 1 && (a = b.test(a[0]) ? a.concat(["center"]) : c.test(a[0]) ? ["center"].concat(a) : ["center", "center"]), a[0] = b.test(a[0]) ? a[0] : "center", a[1] = c.test(a[1]) ? a[1] : "center", e[this] = a
        }), h.length === 1 && (h[1] = h[0]), i[0] = parseInt(i[0], 10) || 0, i.length === 1 && (i[1] = i[0]), i[1] = parseInt(i[1], 10) || 0, e.at[0] === "right" ? l.left += j : e.at[0] === "center" && (l.left += j / 2), e.at[1] === "bottom" ? l.top += k : e.at[1] === "center" && (l.top += k / 2), l.left += i[0], l.top += i[1], this.each(function () {
            var b = a(this),
                c = b.outerWidth(),
                d = b.outerHeight(),
                f = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
                g = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
                m = c + f + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
                n = d + g + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0),
                o = a.extend({}, l),
                p;
            e.my[0] === "right" ? o.left -= c : e.my[0] === "center" && (o.left -= c / 2), e.my[1] === "bottom" ? o.top -= d : e.my[1] === "center" && (o.top -= d / 2), o.left = Math.round(o.left), o.top = Math.round(o.top), p = {
                left: o.left - f,
                top: o.top - g
            }, a.each(["left", "top"], function (b, f) {
                a.ui.position[h[b]] && a.ui.position[h[b]][f](o, {
                    targetWidth: j,
                    targetHeight: k,
                    elemWidth: c,
                    elemHeight: d,
                    collisionPosition: p,
                    collisionWidth: m,
                    collisionHeight: n,
                    offset: i,
                    my: e.my,
                    at: e.at
                })
            }), a.fn.bgiframe && b.bgiframe(), b.offset(a.extend(o, {
                using: e.using
            }))
        })
    }, a.ui.position = {
        fit: {
            left: function (b, c) {
                var d = a(window);
                d = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(), b.left = d > 0 ? b.left - d : Math.max(b.left - c.collisionPosition.left, b.left)
            },
            top: function (b, c) {
                var d = a(window);
                d = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(), b.top = d > 0 ? b.top - d : Math.max(b.top - c.collisionPosition.top, b.top)
            }
        },
        flip: {
            left: function (b, c) {
                if (c.at[0] !== "center") {
                    var d = a(window);
                    d = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
                    var e = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0,
                        f = c.at[0] === "left" ? c.targetWidth : -c.targetWidth,
                        g = -2 * c.offset[0];
                    b.left += c.collisionPosition.left < 0 ? e + f + g : d > 0 ? e + f + g : 0
                }
            },
            top: function (b, c) {
                if (c.at[1] !== "center") {
                    var d = a(window);
                    d = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
                    var e = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0,
                        f = c.at[1] === "top" ? c.targetHeight : -c.targetHeight,
                        g = -2 * c.offset[1];
                    b.top += c.collisionPosition.top < 0 ? e + f + g : d > 0 ? e + f + g : 0
                }
            }
        }
    }, a.offset.setOffset || (a.offset.setOffset = function (b, c) {
        /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative");
        var d = a(b),
            e = d.offset(),
            f = parseInt(a.curCSS(b, "top", !0), 10) || 0,
            g = parseInt(a.curCSS(b, "left", !0), 10) || 0;
        e = {
            top: c.top - e.top + f,
            left: c.left - e.left + g
        }, "using" in c ? c.using.call(b, e) : d.css(e)
    }, a.fn.offset = function (b) {
        var c = this[0];
        return !c || !c.ownerDocument ? null : b ? this.each(function () {
            a.offset.setOffset(this, b)
        }) : e.call(this)
    })
}(jQuery),
function (a) {
    a.widget("ui.draggable", a.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function () {
            if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function (b) {
            var c = this.options;
            return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(b), this.handle ? (c.iframeFix && a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
                a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
        },
        _mouseDrag: function (b, c) {
            this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute");
            if (!c) {
                c = this._uiHash();
                if (this._trigger("drag", b, c) === !1) return this._mouseUp({}), !1;
                this.position = c.position
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            return a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
        },
        _mouseStop: function (b) {
            var c = !1;
            a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1);
            if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") return !1;
            if (this.options.revert == "invalid" && !c || this.options.revert == "valid" && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
                var e = this;
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    e._trigger("stop", b) !== !1 && e._clear()
                })
            } else this._trigger("stop", b) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function (b) {
            return this.options.iframeFix === !0 && a("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (b) {
            var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1;
            return a(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == b.target && (c = !0)
            }), c
        },
        _createHelper: function (b) {
            var c = this.options;
            return b = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element, b.parents("body").length || b.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo), b[0] != this.element[0] && !/(fixed|absolute)/.test(b.css("position")) && b.css("position", "absolute"), b
        },
        _adjustOffsetFromHelper: function (b) {
            typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) b = {
                top: 0,
                left: 0
            };
            return {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var b = this.options;
            b.containment == "parent" && (b.containment = this.helper[0].parentNode);
            if (b.containment == "document" || b.containment == "window") this.containment = [b.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (b.containment == "document" ? 0 : a(window).scrollLeft()) + a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b.containment == "document" ? 0 : a(window).scrollTop()) + (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) {
                b = a(b.containment);
                var c = b[0];
                if (c) {
                    b.offset();
                    var e = a(c).css("overflow") != "hidden";
                    this.containment = [(parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0), (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0), (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = b
                }
            } else b.containment.constructor == Array && (this.containment = b.containment)
        },
        _convertPositionTo: function (b, c) {
            c || (c = this.position), b = b == "absolute" ? 1 : -1;
            var e = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! a.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * b + this.offset.parent.top * b - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * b),
                left: c.left + this.offset.relative.left * b + this.offset.parent.left * b - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * b)
            }
        },
        _generatePosition: function (b) {
            var c = this.options,
                e = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! a.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(e[0].tagName),
                g = b.pageX,
                h = b.pageY;
            if (this.originalPosition) {
                var i;
                this.containment && (this.relative_container ? (i = this.relative_container.offset(), i = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : i = this.containment, b.pageX - this.offset.click.left < i[0] && (g = i[0] + this.offset.click.left), b.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), b.pageX - this.offset.click.left > i[2] && (g = i[2] + this.offset.click.left), b.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), c.grid && (h = c.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY, h = i ? h - this.offset.click.top < i[1] || h - this.offset.click.top > i[3] ? h - this.offset.click.top < i[1] ? h + c.grid[1] : h - c.grid[1] : h : h, g = c.grid[0] ? this.originalPageX + Math.round((g - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX, g = i ? g - this.offset.click.left < i[0] || g - this.offset.click.left > i[2] ? g - this.offset.click.left < i[0] ? g + c.grid[0] : g - c.grid[0] : g : g)
            }
            return {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()),
                left: g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (b, c, e) {
            return e = e || this._uiHash(), a.ui.plugin.call(this, b, [c, e]), b == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, e)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), a.extend(a.ui.draggable, {
        version: "1.8.16"
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function (b, c) {
            var e = a(this).data("draggable"),
                f = e.options,
                g = a.extend({}, c, {
                    item: e.element
                });
            e.sortables = [], a(f.connectToSortable).each(function () {
                var c = a.data(this, "sortable");
                c && !c.options.disabled && (e.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", b, g))
            })
        },
        stop: function (b, c) {
            var e = a(this).data("draggable"),
                f = a.extend({}, c, {
                    item: e.element
                });
            a.each(e.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, e.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, e.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, f))
            })
        },
        drag: function (b, c) {
            var e = a(this).data("draggable"),
                f = this;
            a.each(e.sortables, function () {
                this.instance.positionAbs = e.positionAbs, this.instance.helperProportions = e.helperProportions, this.instance.offset.click = e.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return c.helper[0]
                }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = e.offset.click.top, this.instance.offset.click.left = e.offset.click.left, this.instance.offset.parent.left -= e.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= e.offset.parent.top - this.instance.offset.parent.top, e._trigger("toSortable", b), e.dropped = this.instance.element, e.currentItem = e.element, this.instance.fromOutside = e), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), e._trigger("fromSortable", b), e.dropped = !1)
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var b = a("body"),
                c = a(this).data("draggable").options;
            b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor)
        },
        stop: function () {
            var b = a(this).data("draggable").options;
            b._cursor && a("body").css("cursor", b._cursor)
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function (b, c) {
            b = a(c.helper), c = a(this).data("draggable").options, b.css("opacity") && (c._opacity = b.css("opacity")), b.css("opacity", c.opacity)
        },
        stop: function (b, c) {
            b = a(this).data("draggable").options, b._opacity && a(c.helper).css("opacity", b._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var b = a(this).data("draggable");
            b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML" && (b.overflowOffset = b.scrollParent.offset())
        },
        drag: function (b) {
            var c = a(this).data("draggable"),
                e = c.options,
                f = !1;
            if (c.scrollParent[0] != document && c.scrollParent[0].tagName != "HTML") {
                if (!e.axis || e.axis != "x") c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? c.scrollParent[0].scrollTop = f = c.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - c.overflowOffset.top < e.scrollSensitivity && (c.scrollParent[0].scrollTop = f = c.scrollParent[0].scrollTop - e.scrollSpeed);
                if (!e.axis || e.axis != "y") c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? c.scrollParent[0].scrollLeft = f = c.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - c.overflowOffset.left < e.scrollSensitivity && (c.scrollParent[0].scrollLeft = f = c.scrollParent[0].scrollLeft - e.scrollSpeed)
            } else {
                if (!e.axis || e.axis != "x") b.pageY - a(document).scrollTop() < e.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed));
                if (!e.axis || e.axis != "y") b.pageX - a(document).scrollLeft() < e.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed))
            }
            f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function () {
            var b = a(this).data("draggable"),
                c = b.options;
            b.snapElements = [], a(c.snap.constructor != String ? c.snap.items || ":data(draggable)" : c.snap).each(function () {
                var c = a(this),
                    e = c.offset();
                this != b.element[0] && b.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        },
        drag: function (b, c) {
            for (var e = a(this).data("draggable"), f = e.options, g = f.snapTolerance, h = c.offset.left, i = h + e.helperProportions.width, j = c.offset.top, k = j + e.helperProportions.height, l = e.snapElements.length - 1; l >= 0; l--) {
                var m = e.snapElements[l].left,
                    n = m + e.snapElements[l].width,
                    o = e.snapElements[l].top,
                    p = o + e.snapElements[l].height;
                if (m - g < h && h < n + g && o - g < j && j < p + g || m - g < h && h < n + g && o - g < k && k < p + g || m - g < i && i < n + g && o - g < j && j < p + g || m - g < i && i < n + g && o - g < k && k < p + g) {
                    if (f.snapMode != "inner") {
                        var q = Math.abs(o - k) <= g,
                            r = Math.abs(p - j) <= g,
                            s = Math.abs(m - i) <= g,
                            t = Math.abs(n - h) <= g;
                        q && (c.position.top = e._convertPositionTo("relative", {
                            top: o - e.helperProportions.height,
                            left: 0
                        }).top - e.margins.top), r && (c.position.top = e._convertPositionTo("relative", {
                            top: p,
                            left: 0
                        }).top - e.margins.top), s && (c.position.left = e._convertPositionTo("relative", {
                            top: 0,
                            left: m - e.helperProportions.width
                        }).left - e.margins.left), t && (c.position.left = e._convertPositionTo("relative", {
                            top: 0,
                            left: n
                        }).left - e.margins.left)
                    }
                    var u = q || r || s || t;
                    f.snapMode != "outer" && (q = Math.abs(o - j) <= g, r = Math.abs(p - k) <= g, s = Math.abs(m - h) <= g, t = Math.abs(n - i) <= g, q && (c.position.top = e._convertPositionTo("relative", {
                        top: o,
                        left: 0
                    }).top - e.margins.top), r && (c.position.top = e._convertPositionTo("relative", {
                        top: p - e.helperProportions.height,
                        left: 0
                    }).top - e.margins.top), s && (c.position.left = e._convertPositionTo("relative", {
                        top: 0,
                        left: m
                    }).left - e.margins.left), t && (c.position.left = e._convertPositionTo("relative", {
                        top: 0,
                        left: n - e.helperProportions.width
                    }).left - e.margins.left)), !e.snapElements[l].snapping && (q || r || s || t || u) && e.options.snap.snap && e.options.snap.snap.call(e.element, b, a.extend(e._uiHash(), {
                        snapItem: e.snapElements[l].item
                    })), e.snapElements[l].snapping = q || r || s || t || u
                } else e.snapElements[l].snapping && e.options.snap.release && e.options.snap.release.call(e.element, b, a.extend(e._uiHash(), {
                    snapItem: e.snapElements[l].item
                })), e.snapElements[l].snapping = !1
            }
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function () {
            var b = a(this).data("draggable").options;
            b = a.makeArray(a(b.stack)).sort(function (b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
            });
            if (b.length) {
                var c = parseInt(b[0].style.zIndex) || 0;
                a(b).each(function (a) {
                    this.style.zIndex = c + a
                }), this[0].style.zIndex = c + b.length
            }
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function (b, c) {
            b = a(c.helper), c = a(this).data("draggable").options, b.css("zIndex") && (c._zIndex = b.css("zIndex")), b.css("zIndex", c.zIndex)
        },
        stop: function (b, c) {
            b = a(this).data("draggable").options, b._zIndex && a(c.helper).css("zIndex", b._zIndex)
        }
    })
}(jQuery),
function (a) {
    a.widget("ui.sortable", a.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var a = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? a.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit()
        },
        destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"), this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData("sortable-item");
            return this
        },
        _setOption: function (b, c) {
            b === "disabled" ? (this.options[b] = c, this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled")) : a.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (b, c) {
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(b);
            var e = null,
                f = this;
            a(b.target).parents().each(function () {
                if (a.data(this, "sortable-item") == f) return e = a(this), !1
            }), a.data(b.target, "sortable-item") == f && (e = a(b.target));
            if (!e) return !1;
            if (this.options.handle && !c) {
                var g = !1;
                a(this.options.handle, e).find("*").andSelf().each(function () {
                    this == b.target && (g = !0)
                });
                if (!g) return !1
            }
            return this.currentItem = e, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (b, c, e) {
            c = this.options;
            var f = this;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), c.containment && this._setContainment(), c.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", c.cursor)), c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity)), c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!e) for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, f._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
        },
        _mouseDrag: function (b) {
            this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var c = this.options,
                    e = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - a(document).scrollTop() < c.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)), b.pageX - a(document).scrollLeft() < c.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), e !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (c = this.items.length - 1; c >= 0; c--) {
                e = this.items[c];
                var f = e.item[0],
                    g = this._intersectsWithPointer(e);
                if (g && f != this.currentItem[0] && this.placeholder[g == 1 ? "next" : "prev"]()[0] != f && !a.ui.contains(this.placeholder[0], f) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0], f) : !0)) {
                    this.direction = g == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(e)) break;
                    this._rearrange(b, e), this._trigger("change", b, this._uiHash());
                    break
                }
            }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (b, c) {
            if (b) {
                a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b);
                if (this.options.revert) {
                    var e = this;
                    c = e.placeholder.offset(), e.reverting = !0, a(this.helper).animate({
                        left: c.left - this.offset.parent.left - e.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: c.top - this.offset.parent.top - e.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        e._clear(b)
                    })
                } else this._clear(b, c);
                return !1
            }
        },
        cancel: function () {
            var b = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var c = this.containers.length - 1; c >= 0; c--) this.containers[c]._trigger("deactivate", null, b._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, b._uiHash(this)), this.containers[c].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                e = [];
            return b = b || {}, a(c).each(function () {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/);
                c && e.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
            }), !e.length && b.key && e.push(b.key + "="), e.join("&")
        },
        toArray: function (b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                e = [];
            return b = b || {}, c.each(function () {
                e.push(a(b.item || this).attr(b.attribute || "id") || "")
            }), e
        },
        _intersectsWith: function (a) {
            var b = this.positionAbs.left,
                c = b + this.helperProportions.width,
                d = this.positionAbs.top,
                e = d + this.helperProportions.height,
                f = a.left,
                g = f + a.width,
                h = a.top,
                i = h + a.height,
                j = this.offset.click.top,
                k = this.offset.click.left;
            return j = d + j > h && d + j < i && b + k > f && b + k < g, this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? j : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
        },
        _intersectsWithPointer: function (b) {
            var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height);
            b = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width), c = c && b, b = this._getDragVerticalDirection();
            var e = this._getDragHorizontalDirection();
            return c ? this.floating ? e && e == "right" || b == "down" ? 2 : 1 : b && (b == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function (b) {
            var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height);
            b = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width);
            var e = this._getDragVerticalDirection(),
                f = this._getDragHorizontalDirection();
            return this.floating && f ? f == "right" && b || f == "left" && !b : e && (e == "down" && c || e == "up" && !c)
        },
        _getDragVerticalDirection: function () {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return a != 0 && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return a != 0 && (a > 0 ? "right" : "left")
        },
        refresh: function (a) {
            return this._refreshItems(a), this.refreshPositions(), this
        },
        _connectWith: function () {
            var a = this.options;
            return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function (b) {
            var c = [],
                e = [],
                f = this._connectWith();
            if (f && b) for (b = f.length - 1; b >= 0; b--) for (var g = a(f[b]), h = g.length - 1; h >= 0; h--) {
                var i = a.data(g[h], "sortable");
                i && i != this && !i.options.disabled && e.push([a.isFunction(i.options.items) ? i.options.items.call(i.element) : a(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i])
            }
            e.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (b = e.length - 1; b >= 0; b--) e[b][0].each(function () {
                c.push(this)
            });
            return a(c)
        },
        _removeCurrentsFromItems: function () {
            for (var a = this.currentItem.find(":data(sortable-item)"), b = 0; b < this.items.length; b++) for (var c = 0; c < a.length; c++) a[c] == this.items[b].item[0] && this.items.splice(b, 1)
        },
        _refreshItems: function (b) {
            this.items = [], this.containers = [this];
            var c = this.items,
                e = [
                    [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                        item: this.currentItem
                    }) : a(this.options.items, this.element), this]
                ],
                f = this._connectWith();
            if (f) for (var g = f.length - 1; g >= 0; g--) for (var h = a(f[g]), i = h.length - 1; i >= 0; i--) {
                var j = a.data(h[i], "sortable");
                j && j != this && !j.options.disabled && (e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element[0], b, {
                    item: this.currentItem
                }) : a(j.options.items, j.element), j]), this.containers.push(j))
            }
            for (g = e.length - 1; g >= 0; g--) {
                b = e[g][1], f = e[g][0], i = 0;
                for (h = f.length; i < h; i++) j = a(f[i]), j.data("sortable-item", b), c.push({
                    item: j,
                    instance: b,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function (b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var c = this.items.length - 1; c >= 0; c--) {
                var e = this.items[c];
                if (e.instance == this.currentContainer || !this.currentContainer || e.item[0] == this.currentItem[0]) {
                    var f = this.options.toleranceElement ? a(this.options.toleranceElement, e.item) : e.item;
                    b || (e.width = f.outerWidth(), e.height = f.outerHeight()), f = f.offset(), e.left = f.left, e.top = f.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        },
        _createPlaceholder: function (b) {
            var c = b || this,
                e = c.options;
            if (!e.placeholder || e.placeholder.constructor == String) {
                var f = e.placeholder;
                e.placeholder = {
                    element: function () {
                        var b = a(document.createElement(c.currentItem[0].nodeName)).addClass(f || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return f || (b.style.visibility = "hidden"), b
                    },
                    update: function (a, b) {
                        if (!f || !! e.forcePlaceholderSize) b.height() || b.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), b.width() || b.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            c.placeholder = a(e.placeholder.element.call(c.element, c.currentItem)), c.currentItem.after(c.placeholder), e.placeholder.update(c, c.placeholder)
        },
        _contactContainers: function (b) {
            for (var c = null, e = null, f = this.containers.length - 1; f >= 0; f--) if (!a.ui.contains(this.currentItem[0], this.containers[f].element[0])) if (this._intersectsWith(this.containers[f].containerCache)) {
                if (!c || !a.ui.contains(this.containers[f].element[0], c.element[0])) c = this.containers[f], e = f
            } else this.containers[f].containerCache.over && (this.containers[f]._trigger("out", b, this._uiHash(this)), this.containers[f].containerCache.over = 0);
            if (c) if (this.containers.length === 1) this.containers[e]._trigger("over", b, this._uiHash(this)), this.containers[e].containerCache.over = 1;
            else if (this.currentContainer != this.containers[e]) {
                c = 1e4, f = null;
                for (var g = this.positionAbs[this.containers[e].floating ? "left" : "top"], h = this.items.length - 1; h >= 0; h--) if (a.ui.contains(this.containers[e].element[0], this.items[h].item[0])) {
                    var i = this.items[h][this.containers[e].floating ? "left" : "top"];
                    Math.abs(i - g) < c && (c = Math.abs(i - g), f = this.items[h])
                }
                if (f || this.options.dropOnEmpty) this.currentContainer = this.containers[e], f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[e].element, !0), this._trigger("change", b, this._uiHash()), this.containers[e]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[e]._trigger("over", b, this._uiHash(this)), this.containers[e].containerCache.over = 1
            }
        },
        _createHelper: function (b) {
            var c = this.options;
            return b = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : c.helper == "clone" ? this.currentItem.clone() : this.currentItem, b.parents("body").length || a(c.appendTo != "parent" ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(b[0]), b[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (b[0].style.width == "" || c.forceHelperSize) && b.width(this.currentItem.width()), (b[0].style.height == "" || c.forceHelperSize) && b.height(this.currentItem.height()), b
        },
        _adjustOffsetFromHelper: function (b) {
            typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) b = {
                top: 0,
                left: 0
            };
            return {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var b = this.options;
            b.containment == "parent" && (b.containment = this.helper[0].parentNode);
            if (b.containment == "document" || b.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(b.containment)) {
                var c = a(b.containment)[0];
                b = a(b.containment).offset();
                var e = a(c).css("overflow") != "hidden";
                this.containment = [b.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, b.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, b.left + (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, b.top + (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (b, c) {
            c || (c = this.position), b = b == "absolute" ? 1 : -1;
            var e = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! a.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * b + this.offset.parent.top * b - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * b),
                left: c.left + this.offset.relative.left * b + this.offset.parent.left * b - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * b)
            }
        },
        _generatePosition: function (b) {
            var c = this.options,
                e = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! a.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(e[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var g = b.pageX,
                h = b.pageY;
            return this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (g = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (h = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (g = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (h = this.containment[3] + this.offset.click.top)), c.grid && (h = this.originalPageY + Math.round((h - this.originalPageY) / c.grid[1]) * c.grid[1], h = this.containment ? h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3] ? h - this.offset.click.top < this.containment[1] ? h + c.grid[1] : h - c.grid[1] : h : h, g = this.originalPageX + Math.round((g - this.originalPageX) / c.grid[0]) * c.grid[0], g = this.containment ? g - this.offset.click.left < this.containment[0] || g - this.offset.click.left > this.containment[2] ? g - this.offset.click.left < this.containment[0] ? g + c.grid[0] : g - c.grid[0] : g : g)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()),
                left: g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft())
            }
        },
        _rearrange: function (a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var e = this,
                f = this.counter;
            window.setTimeout(function () {
                f == e.counter && e.refreshPositions(!d)
            }, 0)
        },
        _clear: function (b, c) {
            this.reverting = !1;
            var e = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var f in this._storedCSS) if (this._storedCSS[f] == "auto" || this._storedCSS[f] == "static") this._storedCSS[f] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !c && e.push(function (a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !c && e.push(function (a) {
                this._trigger("update", a, this._uiHash())
            });
            if (!a.ui.contains(this.element[0], this.currentItem[0])) {
                c || e.push(function (a) {
                    this._trigger("remove", a, this._uiHash())
                });
                for (f = this.containers.length - 1; f >= 0; f--) a.ui.contains(this.containers[f].element[0], this.currentItem[0]) && !c && (e.push(function (a) {
                    return function (b) {
                        a._trigger("receive", b, this._uiHash(this))
                    }
                }.call(this, this.containers[f])), e.push(function (a) {
                    return function (b) {
                        a._trigger("update", b, this._uiHash(this))
                    }
                }.call(this, this.containers[f])))
            }
            for (f = this.containers.length - 1; f >= 0; f--) c || e.push(function (a) {
                return function (b) {
                    a._trigger("deactivate", b, this._uiHash(this))
                }
            }.call(this, this.containers[f])), this.containers[f].containerCache.over && (e.push(function (a) {
                return function (b) {
                    a._trigger("out", b, this._uiHash(this))
                }
            }.call(this, this.containers[f])), this.containers[f].containerCache.over = 0);
            this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!c) {
                    this._trigger("beforeStop", b, this._uiHash());
                    for (f = 0; f < e.length; f++) e[f].call(this, b);
                    this._trigger("stop", b, this._uiHash())
                }
                return !1
            }
            c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!c) {
                for (f = 0; f < e.length; f++) e[f].call(this, b);
                this._trigger("stop", b, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            }
        }
    }), a.extend(a.ui.sortable, {
        version: "1.8.16"
    })
}(jQuery);
var Lucid;
Lucid = Lucid || {}, Lucid.Events = {
    bind: function (a, b) {
        return this._events_ = this._events_ || {}, this._events_[a] = this._events_[a] || [], this._events_[a].push(b), this
    },
    trigger: function (a, b) {
        this._events_ = this._events_ || {};
        var c = this._events_[a] || [];
        this.constructor._events_ && (c = c.concat(this.constructor._events_[a] || []));
        for (var d = 0; d < c.length; d++) c[d].apply(this, b || []);
        return this
    },
    unbind: function (a, b) {
        this._events_ = this._events_ || {};
        if (b) {
            var c = this._events_[a] || [];
            for (var d = 0; d < c.length; d++) c[d] === b && this._events_[a].splice(d, 1)
        } else delete this._events_[a];
        return this
    }
},
function (a, b) {
    var c, d = "([^/]+)",
        e = /:([\w\d]+)/g,
        f = /\?([^#]*)$/,
        g = function (a) {
            return Array.prototype.slice.call(a)
        }, h = function (a) {
            return Object.prototype.toString.call(a) === "[object Function]"
        }, i = function (a) {
            return Object.prototype.toString.call(a) === "[object Array]"
        }, j = function (a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        }, k = encodeURIComponent,
        l = function (a) {
            return String(a).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }, m = function (a) {
            return function (b, c) {
                return this.route.apply(this, [a, b, c])
            }
        }, n = {}, o = [];
    c = function () {
        var b = g(arguments),
            d, e;
        c.apps = c.apps || {};
        if (b.length === 0 || b[0] && h(b[0])) return c.apply(c, ["body"].concat(b));
        if (typeof (e = b.shift()) == "string") return d = c.apps[e] || new c.Application, d.element_selector = e, b.length > 0 && a.each(b, function (a, b) {
            d.use(b)
        }), d.element_selector != e && delete c.apps[e], c.apps[d.element_selector] = d, d
    }, c.VERSION = "0.6.3", c.addLogger = function (a) {
        o.push(a)
    }, c.log = function () {
        var b = g(arguments);
        b.unshift("[" + Date() + "]"), a.each(o, function (a, d) {
            d.apply(c, b)
        })
    }, typeof b.console != "undefined" ? h(b.console.log.apply) ? c.addLogger(function () {
        b.console.log.apply(b.console, arguments)
    }) : c.addLogger(function () {
        b.console.log(arguments)
    }) : typeof console != "undefined" && c.addLogger(function () {
        console.log.apply(console, arguments)
    }), a.extend(c, {
        makeArray: g,
        isFunction: h,
        isArray: i
    }), c.Object = function (b) {
        return a.extend(this, b || {})
    }, a.extend(c.Object.prototype, {
        escapeHTML: l,
        h: l,
        toHash: function () {
            var b = {};
            return a.each(this, function (a, c) {
                h(c) || (b[a] = c)
            }), b
        },
        toHTML: function () {
            var b = "";
            return a.each(this, function (a, c) {
                h(c) || (b += "<strong>" + a + "</strong> " + c + "<br />")
            }), b
        },
        keys: function (a) {
            var b = [];
            for (var c in this)(!h(this[c]) || !a) && b.push(c);
            return b
        },
        has: function (b) {
            return this[b] && a.trim(this[b].toString()) != ""
        },
        join: function () {
            var a = g(arguments),
                b = a.shift();
            return a.join(b)
        },
        log: function () {
            c.log.apply(c, arguments)
        },
        toString: function (b) {
            var c = [];
            return a.each(this, function (a, d) {
                (!h(d) || b) && c.push('"' + a + '": ' + d.toString())
            }), "Sammy.Object: {" + c.join(",") + "}"
        }
    }), c.HashLocationProxy = function (a, b) {
        this.app = a, this.is_native = !1, this._startPolling(b)
    }, c.HashLocationProxy.prototype = {
        bind: function () {
            var d = this,
                e = this.app;
            a(b).bind("hashchange." + this.app.eventNamespace(), function (a, f) {
                d.is_native === !1 && !f && (c.log("native hash change exists, using"), d.is_native = !0, b.clearInterval(c.HashLocationProxy._interval)), e.trigger("location-changed")
            }), c.HashLocationProxy._bindings || (c.HashLocationProxy._bindings = 0), c.HashLocationProxy._bindings++
        },
        unbind: function () {
            a(b).unbind("hashchange." + this.app.eventNamespace()), c.HashLocationProxy._bindings--, c.HashLocationProxy._bindings <= 0 && b.clearInterval(c.HashLocationProxy._interval)
        },
        getLocation: function () {
            var a = b.location.toString().match(/^[^#]*(#.+)$/);
            return a ? a[1] : ""
        },
        setLocation: function (a) {
            return b.location = a
        },
        _startPolling: function (d) {
            var e = this;
            if (!c.HashLocationProxy._interval) {
                d || (d = 10);
                var f = function () {
                    var d = e.getLocation();
                    (!c.HashLocationProxy._last_location || d != c.HashLocationProxy._last_location) && b.setTimeout(function () {
                        a(b).trigger("hashchange", [!0])
                    }, 13), c.HashLocationProxy._last_location = d
                };
                f(), c.HashLocationProxy._interval = b.setInterval(f, d)
            }
        }
    }, c.Application = function (a) {
        var b = this;
        this.routes = {}, this.listeners = new c.Object({}), this.arounds = [], this.befores = [], this.namespace = (new Date).getTime() + "-" + parseInt(Math.random() * 1e3, 10), this.context_prototype = function () {
            c.EventContext.apply(this, arguments)
        }, this.context_prototype.prototype = new c.EventContext, h(a) && a.apply(this, [this]), this._location_proxy || this.setLocationProxy(new c.HashLocationProxy(this, this.run_interval_every)), this.debug && this.bindToAllEvents(function (a, c) {
            b.log(b.toString(), a.cleaned_type, c || {})
        })
    }, c.Application.prototype = a.extend({}, c.Object.prototype, {
        ROUTE_VERBS: ["get", "post", "put", "delete"],
        APP_EVENTS: ["run", "unload", "lookup-route", "run-route", "route-found", "event-context-before", "event-context-after", "changed", "error", "check-form-submission", "redirect", "location-changed"],
        _last_route: null,
        _location_proxy: null,
        _running: !1,
        element_selector: "body",
        debug: !1,
        raise_errors: !1,
        run_interval_every: 50,
        template_engine: null,
        toString: function () {
            return "Sammy.Application:" + this.element_selector
        },
        $element: function (b) {
            return b ? a(this.element_selector).find(b) : a(this.element_selector)
        },
        use: function () {
            var a = g(arguments),
                b = a.shift(),
                d = b || "";
            try {
                a.unshift(this), typeof b == "string" && (d = "Sammy." + b, b = c[b]), b.apply(this, a)
            } catch (e) {
                typeof b == "undefined" ? this.error("Plugin Error: called use() but plugin (" + d.toString() + ") is not defined", e) : h(b) ? this.error("Plugin Error", e) : this.error("Plugin Error: called use() but '" + d.toString() + "' is not a function", e)
            }
            return this
        },
        setLocationProxy: function (a) {
            var b = this._location_proxy;
            this._location_proxy = a, this.isRunning() && (b && b.unbind(), this._location_proxy.bind())
        },
        route: function (b, c, f) {
            var g = this,
                i = [],
                j, k;
            !f && h(c) && (c = b, f = c, b = "any"), b = b.toLowerCase();
            if (c.constructor == String) {
                e.lastIndex = 0;
                while ((k = e.exec(c)) !== null) i.push(k[1]);
                c = new RegExp("^" + c.replace(e, d) + "$")
            }
            return typeof f == "string" && (f = g[f]), j = function (a) {
                var b = {
                    verb: a,
                    path: c,
                    callback: f,
                    param_names: i
                };
                g.routes[a] = g.routes[a] || [], g.routes[a].push(b)
            }, b === "any" ? a.each(this.ROUTE_VERBS, function (a, b) {
                j(b)
            }) : j(b), this
        },
        get: m("get"),
        post: m("post"),
        put: m("put"),
        del: m("delete"),
        any: m("any"),
        mapRoutes: function (b) {
            var c = this;
            return a.each(b, function (a, b) {
                c.route.apply(c, b)
            }), this
        },
        eventNamespace: function () {
            return ["sammy-app", this.namespace].join("-")
        },
        bind: function (a, b, c) {
            var d = this;
            typeof c == "undefined" && (c = b);
            var e = function () {
                var a, b, e;
                a = arguments[0], e = arguments[1], e && e.context ? (b = e.context, delete e.context) : b = new d.context_prototype(d, "bind", a.type, e, a.target), a.cleaned_type = a.type.replace(d.eventNamespace(), ""), c.apply(b, [a, e])
            };
            return this.listeners[a] || (this.listeners[a] = []), this.listeners[a].push(e), this.isRunning() && this._listen(a, e), this
        },
        trigger: function (a, b) {
            return this.$element().trigger([a, this.eventNamespace()].join("."), [b]), this
        },
        refresh: function () {
            return this.last_location = null, this.trigger("location-changed"), this
        },
        before: function (a, b) {
            return h(a) && (b = a, a = {}), this.befores.push([a, b]), this
        },
        after: function (a) {
            return this.bind("event-context-after", a)
        },
        around: function (a) {
            return this.arounds.push(a), this
        },
        isRunning: function () {
            return this._running
        },
        helpers: function (b) {
            return a.extend(this.context_prototype.prototype, b), this
        },
        helper: function (a, b) {
            return this.context_prototype.prototype[a] = b, this
        },
        run: function (c) {
            if (this.isRunning()) return !1;
            var d = this;
            return a.each(this.listeners.toHash(), function (b, c) {
                a.each(c, function (a, c) {
                    d._listen(b, c)
                })
            }), this.trigger("run", {
                start_url: c
            }), this._running = !0, this.last_location = null, this.getLocation() == "" && typeof c != "undefined" && this.setLocation(c), this._checkLocation(), this._location_proxy.bind(), this.bind("location-changed", function () {
                d._checkLocation()
            }), this.bind("submit", function (b) {
                var c = d._checkFormSubmission(a(b.target).closest("form"));
                return c === !1 ? b.preventDefault() : !1
            }), a(b).bind("beforeunload", function () {
                d.unload()
            }), this.trigger("changed")
        },
        unload: function () {
            if (!this.isRunning()) return !1;
            var b = this;
            return this.trigger("unload"), this._location_proxy.unbind(), this.$element().unbind("submit").removeClass(b.eventNamespace()), a.each(this.listeners.toHash(), function (c, d) {
                a.each(d, function (a, d) {
                    b._unlisten(c, d)
                })
            }), this._running = !1, this
        },
        bindToAllEvents: function (b) {
            var c = this;
            return a.each(this.APP_EVENTS, function (a, d) {
                c.bind(d, b)
            }), a.each(this.listeners.keys(!0), function (a, d) {
                c.APP_EVENTS.indexOf(d) == -1 && c.bind(d, b)
            }), this
        },
        routablePath: function (a) {
            return a.replace(f, "")
        },
        lookupRoute: function (b, c) {
            var d = this,
                e = !1;
            return this.trigger("lookup-route", {
                verb: b,
                path: c
            }), typeof this.routes[b] != "undefined" && a.each(this.routes[b], function (a, b) {
                if (d.routablePath(c).match(b.path)) return e = b, !1
            }), e
        },
        runRoute: function (b, c, d, e) {
            var f = this,
                g = this.lookupRoute(b, c),
                h, i, k, l, m, n, o, p, q;
            this.log("runRoute", [b, c].join(" ")), this.trigger("run-route", {
                verb: b,
                path: c,
                params: d
            }), typeof d == "undefined" && (d = {}), a.extend(d, this._parseQueryString(c));
            if (g) {
                this.trigger("route-found", {
                    route: g
                }), (p = g.path.exec(this.routablePath(c))) !== null && (p.shift(), a.each(p, function (a, b) {
                    g.param_names[a] ? d[g.param_names[a]] = j(b) : (d.splat || (d.splat = []), d.splat.push(j(b)))
                })), h = new this.context_prototype(this, b, c, d, e), k = this.arounds.slice(0), m = this.befores.slice(0), o = [h].concat(d.splat), i = function () {
                    var a;
                    while (m.length > 0) {
                        n = m.shift();
                        if (f.contextMatchesOptions(h, n[0])) {
                            a = n[1].apply(h, [h]);
                            if (a === !1) return !1
                        }
                    }
                    return f.last_route = g, h.trigger("event-context-before", {
                        context: h
                    }), a = g.callback.apply(h, o), h.trigger("event-context-after", {
                        context: h
                    }), a
                }, a.each(k.reverse(), function (a, b) {
                    var c = i;
                    i = function () {
                        return b.apply(h, [c])
                    }
                });
                try {
                    q = i()
                } catch (r) {
                    this.error(["500 Error", b, c].join(" "), r)
                }
                return q
            }
            return this.notFound(b, c)
        },
        contextMatchesOptions: function (a, b, c) {
            var d = b;
            if (typeof d == "undefined" || d == {}) return !0;
            typeof c == "undefined" && (c = !0);
            if (typeof d == "string" || h(d.test)) d = {
                path: d
            };
            if (d.only) return this.contextMatchesOptions(a, d.only, !0);
            if (d.except) return this.contextMatchesOptions(a, d.except, !1);
            var e = !0,
                f = !0;
            return d.path && (h(d.path.test) ? e = d.path.test(a.path) : e = d.path.toString() === a.path), d.verb && (f = d.verb === a.verb), c ? f && e : !f || !e
        },
        getLocation: function () {
            return this._location_proxy.getLocation()
        },
        setLocation: function (a) {
            return this._location_proxy.setLocation(a)
        },
        swap: function (a) {
            return this.$element().html(a)
        },
        templateCache: function (a, b) {
            return typeof b != "undefined" ? n[a] = b : n[a]
        },
        clearTemplateCache: function () {
            return n = {}
        },
        notFound: function (a, b) {
            var c = this.error(["404 Not Found", a, b].join(" "));
            return a === "get" ? c : !0
        },
        error: function (a, b) {
            b || (b = new Error), b.message = [a, b.message].join(" "), this.trigger("error", {
                message: b.message,
                error: b
            });
            if (this.raise_errors) throw b;
            this.log(b.message, b)
        },
        _checkLocation: function () {
            var a, b;
            a = this.getLocation();
            if (!this.last_location || this.last_location[0] != "get" || this.last_location[1] != a) this.last_location = ["get", a], b = this.runRoute("get", a);
            return b
        },
        _getFormVerb: function (b) {
            var c = a(b),
                d, e;
            e = c.find('input[name="_method"]'), e.length > 0 && (d = e.val()), d || (d = c[0].getAttribute("method"));
            if (!d || d == "") d = "get";
            return a.trim(d.toString().toLowerCase())
        },
        _checkFormSubmission: function (b) {
            var c, d, e, f, g;
            return this.trigger("check-form-submission", {
                form: b
            }), c = a(b), d = c.attr("action"), e = this._getFormVerb(c), this.log("_checkFormSubmission", c, d, e), e === "get" ? (this.setLocation(d + "?" + this._serializeFormParams(c)), g = !1) : (f = a.extend({}, this._parseFormParams(c)), g = this.runRoute(e, d, f, b.get(0))), typeof g == "undefined" ? !1 : g
        },
        _serializeFormParams: function (a) {
            var b = "",
                c = a.serializeArray(),
                d;
            if (c.length > 0) {
                b = this._encodeFormPair(c[0].name, c[0].value);
                for (d = 1; d < c.length; d++) b = b + "&" + this._encodeFormPair(c[d].name, c[d].value)
            }
            return b
        },
        _encodeFormPair: function (a, b) {
            return k(a) + "=" + k(b)
        },
        _parseFormParams: function (a) {
            var b = {}, c = a.serializeArray(),
                d;
            for (d = 0; d < c.length; d++) b = this._parseParamPair(b, c[d].name, c[d].value);
            return b
        },
        _parseQueryString: function (a) {
            var b = {}, c, d, e, g;
            c = a.match(f);
            if (c) {
                d = c[1].split("&");
                for (g = 0; g < d.length; g++) e = d[g].split("="), b = this._parseParamPair(b, j(e[0]), j(e[1]))
            }
            return b
        },
        _parseParamPair: function (a, b, c) {
            return a[b] ? i(a[b]) ? a[b].push(c) : a[b] = [a[b], c] : a[b] = c, a
        },
        _listen: function (a, b) {
            return this.$element().bind([a, this.eventNamespace()].join("."), b)
        },
        _unlisten: function (a, b) {
            return this.$element().unbind([a, this.eventNamespace()].join("."), b)
        }
    }), c.RenderContext = function (a) {
        this.event_context = a, this.callbacks = [], this.previous_content = null, this.content = null, this.next_engine = !1, this.waiting = !1
    }, c.RenderContext.prototype = a.extend({}, c.Object.prototype, {
        then: function (a) {
            if (!h(a)) {
                if (!(typeof a == "string" && a in this.event_context)) return this;
                var c = this.event_context[a];
                a = function (a) {
                    return c.apply(this.event_context, [a])
                }
            }
            var d = this;
            return this.waiting ? this.callbacks.push(a) : (this.wait(), b.setTimeout(function () {
                var b = a.apply(d, [d.content, d.previous_content]);
                b !== !1 && d.next(b)
            }, 13)), this
        },
        wait: function () {
            this.waiting = !0
        },
        next: function (a) {
            this.waiting = !1, typeof a != "undefined" && (this.previous_content = this.content, this.content = a), this.callbacks.length > 0 && this.then(this.callbacks.shift())
        },
        load: function (b, c, d) {
            var e = this;
            return this.then(function () {
                var f, g, i, j;
                h(c) ? (d = c, c = {}) : c = a.extend({}, c), d && this.then(d);
                if (typeof b == "string") return i = b.match(/\.json$/) || c.json, f = i && c.cache === !0 || c.cache !== !1, e.next_engine = e.event_context.engineFor(b), delete c.cache, delete c.json, c.engine && (e.next_engine = c.engine, delete c.engine), f && (g = this.event_context.app.templateCache(b)) ? g : (this.wait(), a.ajax(a.extend({
                    url: b,
                    data: {},
                    dataType: i ? "json" : null,
                    type: "get",
                    success: function (a) {
                        f && e.event_context.app.templateCache(b, a), e.next(a)
                    }
                }, c)), !1);
                if (b.nodeType) return b.innerHTML;
                if (b.selector) return e.next_engine = b.attr("data-engine"), c.clone === !1 ? b.remove()[0].innerHTML.toString() : b[0].innerHTML.toString()
            })
        },
        render: function (a, b, c) {
            return h(a) && !b ? this.then(a) : (!b && this.content && (b = this.content), this.load(a).interpolate(b, a).then(c))
        },
        partial: function (a, b) {
            return this.render(a, b).swap()
        },
        send: function () {
            var a = this,
                b = g(arguments),
                c = b.shift();
            return i(b[0]) && (b = b[0]), this.then(function (d) {
                return b.push(function (b) {
                    a.next(b)
                }), a.wait(), c.apply(c, b), !1
            })
        },
        collect: function (b, c, d) {
            var e = this,
                f = function () {
                    h(b) && (c = b, b = this.content);
                    var d = [],
                        f = !1;
                    return a.each(b, function (a, b) {
                        var g = c.apply(e, [a, b]);
                        return g.jquery && g.length == 1 && (g = g[0], f = !0), d.push(g), g
                    }), f ? d : d.join("")
                };
            return d ? f() : this.then(f)
        },
        renderEach: function (b, c, d, e) {
            return i(c) && (e = d, d = c, c = null), this.load(b).then(function (f) {
                var g = this;
                d || (d = i(this.previous_content) ? this.previous_content : []);
                if (!e) return this.collect(d, function (a, d) {
                    var e = {}, g = this.next_engine || b;
                    return c ? e[c] = d : e = d, this.event_context.interpolate(f, e, g)
                }, !0);
                a.each(d, function (a, d) {
                    var h = {}, i = this.next_engine || b;
                    c ? h[c] = d : h = d, e(d, g.event_context.interpolate(f, h, i))
                })
            })
        },
        interpolate: function (a, b, c) {
            var d = this;
            return this.then(function (e, f) {
                !a && f && (a = f), this.next_engine && (b = this.next_engine, this.next_engine = !1);
                var g = d.event_context.interpolate(e, a, b);
                return c ? f + g : g
            })
        },
        swap: function () {
            return this.then(function (a) {
                this.event_context.swap(a)
            }).trigger("changed", {})
        },
        appendTo: function (b) {
            return this.then(function (c) {
                a(b).append(c)
            }).trigger("changed", {})
        },
        prependTo: function (b) {
            return this.then(function (c) {
                a(b).prepend(c)
            }).trigger("changed", {})
        },
        replace: function (b) {
            return this.then(function (c) {
                a(b).html(c)
            }).trigger("changed", {})
        },
        trigger: function (a, b) {
            return this.then(function (c) {
                typeof b == "undefined" && (b = {
                    content: c
                }), this.event_context.trigger(a, b)
            })
        }
    }), c.EventContext = function (a, b, d, e, f) {
        this.app = a, this.verb = b, this.path = d, this.params = new c.Object(e), this.target = f
    }, c.EventContext.prototype = a.extend({}, c.Object.prototype, {
        $element: function () {
            return this.app.$element(g(arguments).shift())
        },
        engineFor: function (a) {
            var b = this,
                c;
            if (h(a)) return a;
            a = (a || b.app.template_engine).toString();
            if (c = a.match(/\.([^\.]+)$/)) a = c[1];
            return a && h(b[a]) ? b[a] : b.app.template_engine ? this.engineFor(b.app.template_engine) : function (a, b) {
                return a
            }
        },
        interpolate: function (a, b, c) {
            return this.engineFor(c).apply(this, [a, b])
        },
        render: function (a, b, d) {
            return (new c.RenderContext(this)).render(a, b, d)
        },
        renderEach: function (a, b, d, e) {
            return (new c.RenderContext(this)).renderEach(a, b, d, e)
        },
        load: function (a, b, d) {
            return (new c.RenderContext(this)).load(a, b, d)
        },
        partial: function (a, b) {
            return (new c.RenderContext(this)).partial(a, b)
        },
        send: function () {
            var a = new c.RenderContext(this);
            return a.send.apply(a, arguments)
        },
        redirect: function () {
            var a, b = g(arguments),
                c = this.app.getLocation();
            b.length > 1 ? (b.unshift("/"), a = this.join.apply(this, b)) : a = b[0], this.trigger("redirect", {
                to: a
            }), this.app.last_location = [this.verb, this.path], this.app.setLocation(a), c == a && this.app.trigger("location-changed")
        },
        trigger: function (a, b) {
            return typeof b == "undefined" && (b = {}), b.context || (b.context = this), this.app.trigger(a, b)
        },
        eventNamespace: function () {
            return this.app.eventNamespace()
        },
        swap: function (a) {
            return this.app.swap(a)
        },
        notFound: function () {
            return this.app.notFound(this.verb, this.path)
        },
        json: function (b) {
            return a.parseJSON(b)
        },
        toString: function () {
            return "Sammy.EventContext: " + [this.verb, this.path, this.params].join(" ")
        }
    }), a.sammy = b.Sammy = c
}(jQuery, window);
var TZ = {
    selected: "Eastern Time (US & Canada)",
    zones: [
        ["International Date Line West", "(GMT-11:00) International Date Line West"],
        ["Midway Island", "(GMT-11:00) Midway Island"],
        ["Samoa", "(GMT-11:00) Samoa"],
        ["Hawaii", "(GMT-10:00) Hawaii"],
        ["Alaska", "(GMT-09:00) Alaska"],
        ["Pacific Time (US & Canada)", "(GMT-08:00) Pacific Time (US &amp; Canada)"],
        ["Tijuana", "(GMT-08:00) Tijuana"],
        ["Arizona", "(GMT-07:00) Arizona"],
        ["Chihuahua", "(GMT-07:00) Chihuahua"],
        ["Mazatlan", "(GMT-07:00) Mazatlan"],
        ["Mountain Time (US & Canada)", "(GMT-07:00) Mountain Time (US &amp; Canada)"],
        ["Central America", "(GMT-06:00) Central America"],
        ["Central Time (US & Canada)", "(GMT-06:00) Central Time (US &amp; Canada)"],
        ["Guadalajara", "(GMT-06:00) Guadalajara"],
        ["Mexico City", "(GMT-06:00) Mexico City"],
        ["Monterrey", "(GMT-06:00) Monterrey"],
        ["Saskatchewan", "(GMT-06:00) Saskatchewan"],
        ["Bogota", "(GMT-05:00) Bogota"],
        ["Eastern Time (US & Canada)", "(GMT-05:00) Eastern Time (US &amp; Canada)"],
        ["Indiana (East)", "(GMT-05:00) Indiana (East)"],
        ["Lima", "(GMT-05:00) Lima"],
        ["Quito", "(GMT-05:00) Quito"],
        ["Caracas", "(GMT-04:30) Caracas"],
        ["Atlantic Time (Canada)", "(GMT-04:00) Atlantic Time (Canada)"],
        ["La Paz", "(GMT-04:00) La Paz"],
        ["Santiago", "(GMT-04:00) Santiago"],
        ["Newfoundland", "(GMT-03:30) Newfoundland"],
        ["Brasilia", "(GMT-03:00) Brasilia"],
        ["Buenos Aires", "(GMT-03:00) Buenos Aires"],
        ["Georgetown", "(GMT-03:00) Georgetown"],
        ["Greenland", "(GMT-03:00) Greenland"],
        ["Mid-Atlantic", "(GMT-02:00) Mid-Atlantic"],
        ["Azores", "(GMT-01:00) Azores"],
        ["Cape Verde Is.", "(GMT-01:00) Cape Verde Is."],
        ["Casablanca", "(GMT+00:00) Casablanca"],
        ["Dublin", "(GMT+00:00) Dublin"],
        ["Edinburgh", "(GMT+00:00) Edinburgh"],
        ["Lisbon", "(GMT+00:00) Lisbon"],
        ["London", "(GMT+00:00) London"],
        ["Monrovia", "(GMT+00:00) Monrovia"],
        ["UTC", "(GMT+00:00) UTC"],
        ["Amsterdam", "(GMT+01:00) Amsterdam"],
        ["Belgrade", "(GMT+01:00) Belgrade"],
        ["Berlin", "(GMT+01:00) Berlin"],
        ["Bern", "(GMT+01:00) Bern"],
        ["Bratislava", "(GMT+01:00) Bratislava"],
        ["Brussels", "(GMT+01:00) Brussels"],
        ["Budapest", "(GMT+01:00) Budapest"],
        ["Copenhagen", "(GMT+01:00) Copenhagen"],
        ["Ljubljana", "(GMT+01:00) Ljubljana"],
        ["Madrid", "(GMT+01:00) Madrid"],
        ["Paris", "(GMT+01:00) Paris"],
        ["Prague", "(GMT+01:00) Prague"],
        ["Rome", "(GMT+01:00) Rome"],
        ["Sarajevo", "(GMT+01:00) Sarajevo"],
        ["Skopje", "(GMT+01:00) Skopje"],
        ["Stockholm", "(GMT+01:00) Stockholm"],
        ["Vienna", "(GMT+01:00) Vienna"],
        ["Warsaw", "(GMT+01:00) Warsaw"],
        ["West Central Africa", "(GMT+01:00) West Central Africa"],
        ["Zagreb", "(GMT+01:00) Zagreb"],
        ["Athens", "(GMT+02:00) Athens"],
        ["Bucharest", "(GMT+02:00) Bucharest"],
        ["Cairo", "(GMT+02:00) Cairo"],
        ["Harare", "(GMT+02:00) Harare"],
        ["Helsinki", "(GMT+02:00) Helsinki"],
        ["Istanbul", "(GMT+02:00) Istanbul"],
        ["Jerusalem", "(GMT+02:00) Jerusalem"],
        ["Minsk", "(GMT+02:00) Minsk"],
        ["Pretoria", "(GMT+02:00) Pretoria"],
        ["Riga", "(GMT+02:00) Riga"],
        ["Sofia", "(GMT+02:00) Sofia"],
        ["Tallinn", "(GMT+02:00) Tallinn"],
        ["Vilnius", "(GMT+02:00) Vilnius"],
        ["Baghdad", "(GMT+03:00) Baghdad"],
        ["Kuwait", "(GMT+03:00) Kuwait"],
        ["Moscow", "(GMT+03:00) Moscow"],
        ["Nairobi", "(GMT+03:00) Nairobi"],
        ["Riyadh", "(GMT+03:00) Riyadh"],
        ["St. Petersburg", "(GMT+03:00) St. Petersburg"],
        ["Volgograd", "(GMT+03:00) Volgograd"],
        ["Tehran", "(GMT+03:30) Tehran"],
        ["Abu Dhabi", "(GMT+04:00) Abu Dhabi"],
        ["Baku", "(GMT+04:00) Baku"],
        ["Muscat", "(GMT+04:00) Muscat"],
        ["Tbilisi", "(GMT+04:00) Tbilisi"],
        ["Yerevan", "(GMT+04:00) Yerevan"],
        ["Kabul", "(GMT+04:30) Kabul"],
        ["Ekaterinburg", "(GMT+05:00) Ekaterinburg"],
        ["Islamabad", "(GMT+05:00) Islamabad"],
        ["Karachi", "(GMT+05:00) Karachi"],
        ["Tashkent", "(GMT+05:00) Tashkent"],
        ["Chennai", "(GMT+05:30) Chennai"],
        ["Kolkata", "(GMT+05:30) Kolkata"],
        ["Mumbai", "(GMT+05:30) Mumbai"],
        ["New Delhi", "(GMT+05:30) New Delhi"],
        ["Sri Jayawardenepura", "(GMT+05:30) Sri Jayawardenepura"],
        ["Kathmandu", "(GMT+05:45) Kathmandu"],
        ["Almaty", "(GMT+06:00) Almaty"],
        ["Astana", "(GMT+06:00) Astana"],
        ["Dhaka", "(GMT+06:00) Dhaka"],
        ["Novosibirsk", "(GMT+06:00) Novosibirsk"],
        ["Rangoon", "(GMT+06:30) Rangoon"],
        ["Bangkok", "(GMT+07:00) Bangkok"],
        ["Hanoi", "(GMT+07:00) Hanoi"],
        ["Jakarta", "(GMT+07:00) Jakarta"],
        ["Krasnoyarsk", "(GMT+07:00) Krasnoyarsk"],
        ["Beijing", "(GMT+08:00) Beijing"],
        ["Chongqing", "(GMT+08:00) Chongqing"],
        ["Hong Kong", "(GMT+08:00) Hong Kong"],
        ["Irkutsk", "(GMT+08:00) Irkutsk"],
        ["Kuala Lumpur", "(GMT+08:00) Kuala Lumpur"],
        ["Perth", "(GMT+08:00) Perth"],
        ["Singapore", "(GMT+08:00) Singapore"],
        ["Taipei", "(GMT+08:00) Taipei"],
        ["Ulaan Bataar", "(GMT+08:00) Ulaan Bataar"],
        ["Urumqi", "(GMT+08:00) Urumqi"],
        ["Osaka", "(GMT+09:00) Osaka"],
        ["Sapporo", "(GMT+09:00) Sapporo"],
        ["Seoul", "(GMT+09:00) Seoul"],
        ["Tokyo", "(GMT+09:00) Tokyo"],
        ["Yakutsk", "(GMT+09:00) Yakutsk"],
        ["Adelaide", "(GMT+09:30) Adelaide"],
        ["Darwin", "(GMT+09:30) Darwin"],
        ["Brisbane", "(GMT+10:00) Brisbane"],
        ["Canberra", "(GMT+10:00) Canberra"],
        ["Guam", "(GMT+10:00) Guam"],
        ["Hobart", "(GMT+10:00) Hobart"],
        ["Melbourne", "(GMT+10:00) Melbourne"],
        ["Port Moresby", "(GMT+10:00) Port Moresby"],
        ["Sydney", "(GMT+10:00) Sydney"],
        ["Vladivostok", "(GMT+10:00) Vladivostok"],
        ["Magadan", "(GMT+11:00) Magadan"],
        ["New Caledonia", "(GMT+11:00) New Caledonia"],
        ["Solomon Is.", "(GMT+11:00) Solomon Is."],
        ["Auckland", "(GMT+12:00) Auckland"],
        ["Fiji", "(GMT+12:00) Fiji"],
        ["Kamchatka", "(GMT+12:00) Kamchatka"],
        ["Marshall Is.", "(GMT+12:00) Marshall Is."],
        ["Wellington", "(GMT+12:00) Wellington"],
        ["Nuku'alofa", "(GMT+13:00) Nuku'alofa"]
    ],
    select: function (a, b) {
        var b = b || TZ.selected,
            c = '<select id="' + a + '" name="tz">';
        return _.each(TZ.zones, function (a) {
            c += '<option value="' + a[0] + '"' + (a[0] == b ? " selected" : "") + ">" + a[1] + "</option>"
        }), c += "</select>", c
    }
};
(function () {
    var a = this,
        b = a._,
        c = {}, d = Array.prototype,
        e = Object.prototype,
        f = d.slice,
        g = d.unshift,
        h = e.toString,
        i = e.hasOwnProperty,
        j = d.forEach,
        k = d.map,
        l = d.reduce,
        m = d.reduceRight,
        n = d.filter,
        o = d.every,
        p = d.some,
        q = d.indexOf,
        r = d.lastIndexOf;
    e = Array.isArray;
    var s = Object.keys,
        t = function (a) {
            return new y(a)
        };
    typeof module != "undefined" && module.exports ? (module.exports = t, t._ = t) : a._ = t, t.VERSION = "1.1.4";
    var u = t.each = t.forEach = function (a, b, d) {
        if (a != null) if (j && a.forEach === j) a.forEach(b, d);
        else if (t.isNumber(a.length)) {
            for (var e = 0, f = a.length; e < f; e++) if (b.call(d, a[e], e, a) === c) break
        } else for (e in a) if (i.call(a, e) && b.call(d, a[e], e, a) === c) break
    };
    t.map = function (a, b, c) {
        var d = [];
        return a == null ? d : k && a.map === k ? a.map(b, c) : (u(a, function (a, e, f) {
            d[d.length] = b.call(c, a, e, f)
        }), d)
    }, t.reduce = t.foldl = t.inject = function (a, b, c, d) {
        var e = c !== void 0;
        a == null && (a = []);
        if (l && a.reduce === l) return d && (b = t.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        u(a, function (a, f, g) {
            !e && f === 0 ? (c = a, e = !0) : c = b.call(d, c, a, f, g)
        });
        if (!e) throw new TypeError("Reduce of empty array with no initial value");
        return c
    }, t.reduceRight = t.foldr = function (a, b, c, d) {
        return a == null && (a = []), m && a.reduceRight === m ? (d && (b = t.bind(b, d)), c !== void 0 ? a.reduceRight(b, c) : a.reduceRight(b)) : (a = (t.isArray(a) ? a.slice() : t.toArray(a)).reverse(), t.reduce(a, b, c, d))
    }, t.find = t.detect = function (a, b, c) {
        var d;
        return v(a, function (a, e, f) {
            if (b.call(c, a, e, f)) return d = a, !0
        }), d
    }, t.filter = t.select = function (a, b, c) {
        var d = [];
        return a == null ? d : n && a.filter === n ? a.filter(b, c) : (u(a, function (a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        }), d)
    }, t.reject = function (a, b, c) {
        var d = [];
        return a == null ? d : (u(a, function (a, e, f) {
            b.call(c, a, e, f) || (d[d.length] = a)
        }), d)
    }, t.every = t.all = function (a, b, d) {
        b = b || t.identity;
        var e = !0;
        return a == null ? e : o && a.every === o ? a.every(b, d) : (u(a, function (a, f, g) {
            if (!(e = e && b.call(d, a, f, g))) return c
        }), e)
    };
    var v = t.some = t.any = function (a, b, d) {
        b = b || t.identity;
        var e = !1;
        return a == null ? e : p && a.some === p ? a.some(b, d) : (u(a, function (a, f, g) {
            if (e = b.call(d, a, f, g)) return c
        }), e)
    };
    t.include = t.contains = function (a, b) {
        var c = !1;
        return a == null ? c : q && a.indexOf === q ? a.indexOf(b) != -1 : (v(a, function (a) {
            if (c = a === b) return !0
        }), c)
    }, t.invoke = function (a, b) {
        var c = f.call(arguments, 2);
        return t.map(a, function (a) {
            return (b ? a[b] : a).apply(a, c)
        })
    }, t.pluck = function (a, b) {
        return t.map(a, function (a) {
            return a[b]
        })
    }, t.max = function (a, b, c) {
        if (!b && t.isArray(a)) return Math.max.apply(Math, a);
        var d = {
            computed: -Infinity
        };
        return u(a, function (a, e, f) {
            e = b ? b.call(c, a, e, f) : a, e >= d.computed && (d = {
                value: a,
                computed: e
            })
        }), d.value
    }, t.min = function (a, b, c) {
        if (!b && t.isArray(a)) return Math.min.apply(Math, a);
        var d = {
            computed: Infinity
        };
        return u(a, function (a, e, f) {
            e = b ? b.call(c, a, e, f) : a, e < d.computed && (d = {
                value: a,
                computed: e
            })
        }), d.value
    }, t.sortBy = function (a, b, c) {
        return t.pluck(t.map(a, function (a, d, e) {
            return {
                value: a,
                criteria: b.call(c, a, d, e)
            }
        }).sort(function (a, b) {
            var c = a.criteria,
                d = b.criteria;
            return c < d ? -1 : c > d ? 1 : 0
        }), "value")
    }, t.sortedIndex = function (a, b, c) {
        c = c || t.identity;
        for (var d = 0, e = a.length; d < e;) {
            var f = d + e >> 1;
            c(a[f]) < c(b) ? d = f + 1 : e = f
        }
        return d
    }, t.toArray = function (a) {
        return a ? a.toArray ? a.toArray() : t.isArray(a) ? a : t.isArguments(a) ? f.call(a) : t.values(a) : []
    }, t.size = function (a) {
        return t.toArray(a).length
    }, t.first = t.head = function (a, b, c) {
        return b && !c ? f.call(a, 0, b) : a[0]
    }, t.rest = t.tail = function (a, b, c) {
        return f.call(a, t.isUndefined(b) || c ? 1 : b)
    }, t.last = function (a) {
        return a[a.length - 1]
    }, t.compact = function (a) {
        return t.filter(a, function (a) {
            return !!a
        })
    }, t.flatten = function (a) {
        return t.reduce(a, function (a, b) {
            return t.isArray(b) ? a.concat(t.flatten(b)) : (a[a.length] = b, a)
        }, [])
    }, t.without = function (a) {
        var b = f.call(arguments, 1);
        return t.filter(a, function (a) {
            return !t.include(b, a)
        })
    }, t.uniq = t.unique = function (a, b) {
        return t.reduce(a, function (a, c, d) {
            if (0 == d || (b === !0 ? t.last(a) != c : !t.include(a, c))) a[a.length] = c;
            return a
        }, [])
    }, t.intersect = function (a) {
        var b = f.call(arguments, 1);
        return t.filter(t.uniq(a), function (a) {
            return t.every(b, function (b) {
                return t.indexOf(b, a) >= 0
            })
        })
    }, t.zip = function () {
        for (var a = f.call(arguments), b = t.max(t.pluck(a, "length")), c = Array(b), d = 0; d < b; d++) c[d] = t.pluck(a, "" + d);
        return c
    }, t.indexOf = function (a, b, c) {
        if (a == null) return -1;
        if (c) return c = t.sortedIndex(a, b), a[c] === b ? c : -1;
        if (q && a.indexOf === q) return a.indexOf(b);
        c = 0;
        for (var d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1
    }, t.lastIndexOf = function (a, b) {
        if (a == null) return -1;
        if (r && a.lastIndexOf === r) return a.lastIndexOf(b);
        for (var c = a.length; c--;) if (a[c] === b) return c;
        return -1
    }, t.range = function (a, b, c) {
        var d = f.call(arguments),
            e = d.length <= 1;
        a = e ? 0 : d[0], b = e ? d[0] : d[1], c = d[2] || 1, d = Math.max(Math.ceil((b - a) / c), 0), e = 0;
        for (var g = Array(d); e < d;) g[e++] = a, a += c;
        return g
    }, t.bind = function (a, b) {
        var c = f.call(arguments, 2);
        return function () {
            return a.apply(b || {}, c.concat(f.call(arguments)))
        }
    }, t.bindAll = function (a) {
        var b = f.call(arguments, 1);
        return b.length == 0 && (b = t.functions(a)), u(b, function (b) {
            a[b] = t.bind(a[b], a)
        }), a
    }, t.memoize = function (a, b) {
        var c = {};
        return b = b || t.identity,
        function () {
            var d = b.apply(this, arguments);
            return d in c ? c[d] : c[d] = a.apply(this, arguments)
        }
    }, t.delay = function (a, b) {
        var c = f.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(a, c)
        }, b)
    }, t.defer = function (a) {
        return t.delay.apply(t, [a, 1].concat(f.call(arguments, 1)))
    };
    var w = function (a, b, c) {
        var d;
        return function () {
            var e = this,
                f = arguments,
                g = function () {
                    d = null, a.apply(e, f)
                };
            c && clearTimeout(d);
            if (c || !d) d = setTimeout(g, b)
        }
    };
    t.throttle = function (a, b) {
        return w(a, b, !1)
    }, t.debounce = function (a, b) {
        return w(a, b, !0)
    }, t.wrap = function (a, b) {
        return function () {
            var c = [a].concat(f.call(arguments));
            return b.apply(this, c)
        }
    }, t.compose = function () {
        var a = f.call(arguments);
        return function () {
            for (var b = f.call(arguments), c = a.length - 1; c >= 0; c--) b = [a[c].apply(this, b)];
            return b[0]
        }
    }, t.keys = s || function (a) {
        if (t.isArray(a)) return t.range(0, a.length);
        var b = [],
            c;
        for (c in a) i.call(a, c) && (b[b.length] = c);
        return b
    }, t.values = function (a) {
        return t.map(a, t.identity)
    }, t.functions = t.methods = function (a) {
        return t.filter(t.keys(a), function (b) {
            return t.isFunction(a[b])
        }).sort()
    }, t.extend = function (a) {
        return u(f.call(arguments, 1), function (b) {
            for (var c in b) a[c] = b[c]
        }), a
    }, t.clone = function (a) {
        return t.isArray(a) ? a.slice() : t.extend({}, a)
    }, t.tap = function (a, b) {
        return b(a), a
    }, t.isEqual = function (a, b) {
        if (a === b) return !0;
        var c = typeof a;
        if (c != typeof b) return !1;
        if (a == b) return !0;
        if (!a && b || a && !b) return !1;
        a._chain && (a = a._wrapped), b._chain && (b = b._wrapped);
        if (a.isEqual) return a.isEqual(b);
        if (t.isDate(a) && t.isDate(b)) return a.getTime() === b.getTime();
        if (t.isNaN(a) && t.isNaN(b)) return !1;
        if (t.isRegExp(a) && t.isRegExp(b)) return a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline;
        if (c !== "object") return !1;
        if (a.length && a.length !== b.length) return !1;
        c = t.keys(a);
        var d = t.keys(b);
        if (c.length != d.length) return !1;
        for (var e in a) if (!(e in b) || !t.isEqual(a[e], b[e])) return !1;
        return !0
    }, t.isEmpty = function (a) {
        if (t.isArray(a) || t.isString(a)) return a.length === 0;
        for (var b in a) if (i.call(a, b)) return !1;
        return !0
    }, t.isElement = function (a) {
        return !!a && a.nodeType == 1
    }, t.isArray = e || function (a) {
        return h.call(a) === "[object Array]"
    }, t.isArguments = function (a) {
        return !!a && !! i.call(a, "callee")
    }, t.isFunction = function (a) {
        return !!(a && a.constructor && a.call && a.apply)
    }, t.isString = function (a) {
        return !!(a === "" || a && a.charCodeAt && a.substr)
    }, t.isNumber = function (a) {
        return !!(a === 0 || a && a.toExponential && a.toFixed)
    }, t.isNaN = function (a) {
        return a !== a
    }, t.isBoolean = function (a) {
        return a === !0 || a === !1
    }, t.isDate = function (a) {
        return !!(a && a.getTimezoneOffset && a.setUTCFullYear)
    }, t.isRegExp = function (a) {
        return !(!(a && a.test && a.exec) || !a.ignoreCase && a.ignoreCase !== !1)
    }, t.isNull = function (a) {
        return a === null
    }, t.isUndefined = function (a) {
        return a === void 0
    }, t.noConflict = function () {
        return a._ = b, this
    }, t.identity = function (a) {
        return a
    }, t.times = function (a, b, c) {
        for (var d = 0; d < a; d++) b.call(c, d)
    }, t.mixin = function (a) {
        u(t.functions(a), function (b) {
            A(b, t[b] = a[b])
        })
    };
    var x = 0;
    t.uniqueId = function (a) {
        var b = x++;
        return a ? a + b : b
    }, t.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g
    }, t.template = function (a, b) {
        var c = t.templateSettings;
        return c = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(c.interpolate, function (a, b) {
            return "'," + b.replace(/\\'/g, "'") + ",'"
        }).replace(c.evaluate || null, function (a, b) {
            return "');" + b.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('"
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');", c = new Function("obj", c), b ? c(b) : c
    };
    var y = function (a) {
        this._wrapped = a
    };
    t.prototype = y.prototype;
    var z = function (a, b) {
        return b ? t(a).chain() : a
    }, A = function (a, b) {
        y.prototype[a] = function () {
            var a = f.call(arguments);
            return g.call(a, this._wrapped), z(b.apply(t, a), this._chain)
        }
    };
    t.mixin(t), u(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
        var b = d[a];
        y.prototype[a] = function () {
            return b.apply(this._wrapped, arguments), z(this._wrapped, this._chain)
        }
    }), u(["concat", "join", "slice"], function (a) {
        var b = d[a];
        y.prototype[a] = function () {
            return z(b.apply(this._wrapped, arguments), this._chain)
        }
    }), y.prototype.chain = function () {
        return this._chain = !0, this
    }, y.prototype.value = function () {
        return this._wrapped
    }
})();
var Site = function (a) {
    this.setup(a)
};
_.extend(Site, Lucid.Events), _.extend(Site.prototype, Lucid.Events, {
    setup: function (a) {
        this.referrer_page = 0, this.content_page = 0, this.shares = [], this.hits = [], this.iphone = Gauges.iphone(), this.store_hits = !0, this.timeouts = {}, _.extend(this, a || {}), this.server_offset = this.parseUTC(this.now_in_zone).getTime() - (new Date).getTime();
        var b = this.now_in_zone.match(/^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d([-+]\d\d|Z)/)[1];
        this.tz_offset = b == "Z" ? 0 : parseInt(b, 10), parsed_now_in_zone = this.parseUTC(this.now_in_zone);
        if (this.enabled) {
            var c = this.today.date.split("-");
            this.year = parseInt(c[0], 10), this.month = parseInt(c[1], 10), this.day = parseInt(c[2], 10), this.hour = parseInt(this.recent_hours[0].hour, 10)
        }
        this.searches = {
            category: "terms"
        }, this.ui = {
            toggles: {}
        }, this.loadHits(), this.trigger("setup.g")
    },
    colors: ["#71AA93", "#A8BED1", "#AD95C9", "#C6E5A2", "#A6DFDF", "#EEC17F", "#FF9899", "#E2B3FF"],
    language: {
        safari: "Safari",
        chrome: "Chrome",
        firefox: "Firefox",
        ie: "Internet Explorer",
        opera: "Opera",
        konqueror: "Konquerer",
        ps3: "PS3",
        psp: "PSP",
        windows: "Windows",
        macintosh: "Macintosh",
        linux: "Linux",
        ipad: "iPad",
        ipod: "iPod",
        iphone: "iPhone",
        android: "Android",
        wii: "Wii",
        playstation: "PlayStation",
        other: "Other",
        unknown: "Other",
        google: "Google",
        bing: "Bing",
        yahoo: "Yahoo",
        search: "Search",
        ask: "Ask",
        aol: "AOL"
    },
    browsers: ["chrome", "safari", "ie", "opera", "firefox"],
    mine: function () {
        return this.creator_id == Gauges.user.id
    },
    setOverviewTraffic: function () {
        this.traffic = {
            entries: this.recent_days.slice(0, 13),
            urls: {
                older: null,
                newer: null
            },
            group: "month",
            date: "past_two_weeks"
        }
    },
    setRecentTraffic: function () {
        this.traffic = {
            entries: this.recent_days.slice(0, 29),
            urls: {
                older: "/gauges/" + this.id + "/traffic?date=" + this.recent_days[0].date,
                newer: null
            },
            group: "month",
            date: "recent"
        }
    },
    setAllTimeTraffic: function () {
        this.traffic = {
            entries: this.recent_months,
            urls: {
                older: null,
                newer: null
            },
            group: "year",
            date: "recent"
        }
    },
    setPastDayTraffic: function () {
        this.traffic = {
            entries: this.recent_hours,
            urls: {
                older: null,
                newer: null
            },
            group: "past_day",
            date: "recent"
        }
    },
    overview: function () {
        return {
            views: this.formatNumber(this.today.views),
            people: this.formatNumber(this.today.people)
        }
    },
    last_7_hours: function () {
        var a = [];
        for (var b = 0; b < 7; b++) a.push({
            views: this.formatNumber(this.recent_hours[b].views),
            people: this.formatNumber(this.recent_hours[b].people),
            hour: this.hourText(this.recent_hours[b].hour),
            klass: b % 2 === 0 ? "alt" : ""
        });
        return a
    },
    last_7_days: function () {
        var a = [],
            b = _.max(this.recent_days.slice(0, 7), function (a) {
                return a.views
            }).views;
        for (var c = 0; c < 7; c++) a.push({
            views: this.formatNumber(this.recent_days[c].views),
            people: this.formatNumber(this.recent_days[c].people),
            day: parseInt(this.recent_days[c].date.split("-")[2], 10),
            date: this.dateHeadline(this.recent_days[c].date, "day"),
            views_size: this.pixelSize(this.recent_days[c].views, b, 40),
            people_size: this.pixelSize(this.recent_days[c].people, b, 40),
            weekend: this.weekend(this.recent_days[c].date)
        });
        return a
    },
    traffic_data: function () {
        this.traffic.next_url === "" && this.traffic.date != "recent" && this.traffic.group == "month" && (this.traffic.next_url = "recent");
        var a = this,
            b = _.max(this.traffic.entries, function (a) {
                return a.views
            }).views,
            c = this.total_views(),
            d = this.total_people(),
            e = {
                views: c ? this.formatNumber(c) : null,
                people: d ? this.formatNumber(d) : null,
                entries: _.map(this.traffic.entries, function (c) {
                    return c.formatted_date = a.traffic.group == "past_day" ? a.hourText(c.hour) : a.dateRow(c.date, a.traffic.group), c.views_size = a.pixelSize(c.views, b, 160), c.people_size = a.pixelSize(c.people, b, 160), c.formatted_views = a.formatNumber(c.views), c.formatted_people = a.formatNumber(c.people), c.weekend = a.traffic.group == "month" ? a.weekend(c.date) : !1, c
                }),
                today: this.traffic.date == this.recent_days[0].date,
                site_id: this.id,
                date: this.traffic.date,
                has_prev_url: this.traffic.urls.older,
                has_next_url: !1,
                group_by_past_day: this.traffic.group == "past_day",
                group_by_month: this.traffic.group == "month",
                group_by_year: this.traffic.group == "year",
                prev_url: this.traffic.urls.older ? "#/gauges/" + this.id + "/traffic/" + this.traffic.group + "/" + this.parseQueryString(this.traffic.urls.older).date : null,
                headline: this.trafficHeadline()
            };
        return this.traffic.date != "recent" && (e.next_url = "#/gauges/" + this.id + "/traffic/" + this.traffic.group + "/" + (this.traffic.urls.newer ? this.parseQueryString(this.traffic.urls.newer).date : "recent"), e.has_next_url = !0), e
    },
    locations_data: function () {
        var a = [],
            b = this.locations.locations,
            c = 0,
            d = 0;
        _.each(b, function (a) {
            d += a.views
        });
        var e = this,
            f = {
                views: d,
                show_locations: Object.keys(this.locations.locations).length > 0,
                entries: _.map(b, function (a, b) {
                    a.formatted_views = e.formatNumber(a.views), a.html_id = "toggle_" + a.title.toLowerCase().replace(" ", "_"), a.hidden = !e.ui.toggles[a.html_id], a.percentage = Math.round((a.views || a) * 100 / d) + "%", a.klass = c % 2 == 0 ? "odd" : "even", c++;
                    if (a.regions && Object.keys(a.regions).length > 0) {
                        a.has_regions = !0;
                        var f = 0,
                            g = _.map(a.regions, function (b) {
                                return b.formatted_views = e.formatNumber(b.views), b.percentage = Math.round(b.views * 100 / d) + "%", b.version_percentage = Math.round(b.views * 100 / a.views) + "%", b.klass = f % 2 == 0 ? "odd" : "even", f++, b
                            });
                        a.regions = g
                    } else a.regions = !1;
                    return a
                }),
                site_id: this.id,
                date: this.locations.date,
                has_prev_url: this.locations.urls.older,
                has_next_url: this.locations.urls.newer,
                browsers: this.locations.category == "browsers",
                platforms: this.locations.category == "platforms",
                prev_url: this.locations.urls.older ? "#/gauges/" + this.id + "/locations/map/" + this.parseQueryString(this.locations.urls.older).date : null,
                next_url: this.locations.urls.newer ? "#/gauges/" + this.id + "/locations/map/" + this.parseQueryString(this.locations.urls.newer).date : null,
                headline: this.locationsHeadline()
            };
        return f
    },
    locationsHeadline: function () {
        return this.locations.next_url == "" ? "This Month" : this.dateHeadline(this.locations.date, "month")
    },
    resolutions_data: function () {
        var a;
        switch (this.resolutions.category) {
            case "browserx":
                a = this.resolutions.browser_widths;
                break;
            case "browsery":
                a = this.resolutions.browser_heights;
                break;
            case "screenx":
                a = this.resolutions.screen_widths
        }
        var b = 0,
            c = 0;
        _.each(a, function (a) {
            b += a.views
        });
        var d = this,
            e = {
                views: b,
                entries: _.compact(_.map(a, function (a) {
                    a.resolution = a.title, a.formatted_views = d.formatNumber(a.views), a.percentage = Math.round(a.views * 100 / b) + "%", a.color = a.views / b > .03 ? d.colors[c % d.colors.length] : "#cccccc", c++;
                    if (a.views > 0) return a
                })),
                site_id: this.id,
                date: this.resolutions.date,
                has_prev_url: this.resolutions.urls.older,
                has_next_url: this.resolutions.urls.newer,
                browserx: this.resolutions.category == "browserx",
                browsery: this.resolutions.category == "browsery",
                screenx: this.resolutions.category == "screenx",
                prev_url: this.resolutions.urls.older ? "#/gauges/" + this.id + "/resolutions/" + this.resolutions.category + "/" + this.parseQueryString(this.resolutions.urls.older).date : null,
                next_url: this.resolutions.urls.newer ? "#/gauges/" + this.id + "/resolutions/" + this.resolutions.category + "/" + this.parseQueryString(this.resolutions.urls.newer).date : null,
                headline: this.resolutionsHeadline(),
                tagline: this.resolutionsTagline()
            };
        return e
    },
    resolutionsTagline: function () {
        switch (this.resolutions.category) {
            case "browserx":
                return "Browser Widths";
            case "browsery":
                return "Browser Heights";
            case "screenx":
                return "Screen Widths"
        }
    },
    resolutionsHeadline: function () {
        return this.resolutions.next_url == "" ? "This Month" : this.dateHeadline(this.resolutions.date, "month")
    },
    resolutionsGraphData: function () {
        var a = this.resolutions_data();
        return _.map(a.entries, function (a) {
            return {
                label: a.resolution,
                data: a.views
            }
        })
    },
    technology_data: function () {
        var a = 0,
            b = 0;
        _.each(this.technology.browsers, function (b) {
            a += b.views
        });
        var c = {
            views: this.formatNumber(a),
            browsers: this.technology.category == "browsers",
            browser_support: this.technology.category == "browser_support",
            platforms: this.technology.category == "platforms",
            site_id: this.id,
            date: this.technology.date,
            has_prev_url: this.technology.urls.older,
            has_next_url: this.technology.urls.newer,
            browsers: this.technology.category == "browsers",
            platforms: this.technology.category == "platforms",
            prev_url: this.technology.urls.older ? "#/gauges/" + this.id + "/technology/" + this.technology.category + "/" + this.parseQueryString(this.technology.urls.older).date : null,
            next_url: this.technology.urls.newer ? "#/gauges/" + this.id + "/technology/" + this.technology.category + "/" + this.parseQueryString(this.technology.urls.newer).date : null,
            headline: this.technologyHeadline(),
            tagline: this.technologyTagline()
        };
        switch (this.technology.category) {
            case "browsers":
                c.entries = this.technologyPresenter(this.technology.browsers);
                break;
            case "browser_support":
                c.entries = this.browserSupportPresenter(this.technology.browsers);
                break;
            case "platforms":
                c.entries = this.technologyPresenter(this.technology.platforms)
        }
        return c
    },
    browserSupportPresenter: function (a) {
        function e(b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if (d.title == b) return d
            }
        }
        var b = 0,
            c = ["Chrome", "Firefox", "Safari", "Internet Explorer", "Opera"],
            d = [];
        $.each(a, function () {
            b += this.views
        });
        if (b == 0) return [];
        for (h in browser_support) {
            var f = browser_support[h],
                g = Object.keys(f).sort(),
                h = {
                    title: h,
                    items: []
                };
            for (var i = 0; i < g.length; i++) {
                var j = g[i],
                    k = 0,
                    l = 0,
                    m = f[j],
                    n = m.partial,
                    o = m.full;
                for (var p = 0; p < c.length; p++) {
                    var q = c[p],
                        r = e(q);
                    r && r.versions && $.each(r.versions, function () {
                        var a = parseFloat(this.title.replace(/(\d+\.\d+)\..*/, "$1"));
                        n && n[q] && a >= n[q] && (!o || !o[q] || a < o[q]) && (l += this.views), o && a >= o[q] && (k += this.views)
                    })
                }
                function s(a) {
                    return a < .5 ? "low" : a < .9 ? "mid" : "high"
                }
                var t = {
                    title: j,
                    full: (k * 100 / b).toFixed(1),
                    partial: (l * 100 / b).toFixed(1),
                    total: ((k + l) * 100 / b).toFixed(1),
                    partial_opacity: Math.pow(.6 * ((k + l) / b), 2),
                    full_width: Math.round(k * 220 / b),
                    partial_width: Math.round(l * 220 / b),
                    partial_left: Math.round(k * 220 / b) + 2,
                    has_partial: l > 0,
                    has_full: k > 0,
                    klass: s((k + l) / b)
                };
                t.partial_width < 4 && t.partial_width > 0 && (t.full_width -= 4 - t.partial_width, t.partial_left = t.full_width + 2, t.partial_width = 4), h.items.push(t)
            }
            d.push(h)
        }
        return d
    },
    technologyPresenter: function (a) {
        var b = 0,
            c = 0;
        _.each(this.technology.browsers, function (a) {
            b += a.views
        });
        var d = this,
            e = _.map(a, function (a, e) {
                a.browsers = d.technology.category == "browsers", a.formatted_views = d.formatNumber(a.views), a.html_id = "toggle_" + a.key, a.hidden = !d.ui.toggles[a.html_id], a.percentage = Math.round((a.views || a) * 100 / b) + "%", a.color = a.views / b > .03 ? d.colors[c % d.colors.length] : "#cccccc", a.klass = c % 2 == 0 ? "odd" : "even", c++;
                if (a.title != "other" && a.versions && Object.keys(a.versions).length > 0) {
                    a.has_versions = !0;
                    var f = [],
                        g = 0,
                        h = _.map(a.versions, function (c) {
                            return c.formatted_views = d.formatNumber(c.views), c.percentage = Math.round(c.views * 100 / b) + "%", c.version_percentage = Math.round(c.views * 100 / a.views) + "%", c.klass = g % 2 == 0 ? "odd" : "even", g++, c
                        });
                    a.versions = h
                } else a.versions = !1;
                return a.title = d.language[a.title] || a.title, a
            });
        return e
    },
    technologyTagline: function () {
        switch (this.technology.category) {
            case "browsers":
                return "Browser Data";
            case "platforms":
                return "Platforms"
        }
    },
    technologyHeadline: function () {
        return this.technology.next_url == "" ? "This Month" : this.dateHeadline(this.technology.date, "month")
    },
    technologyGraphData: function () {
        var a = this.technology_data();
        return _.map(a.entries, function (a) {
            return {
                label: a.title,
                data: a.views
            }
        })
    },
    trafficHeadline: function () {
        return this.traffic.date == "past_two_weeks" ? "Past Two Weeks" : this.traffic.date == "recent" && this.traffic.group == "month" ? "Past Month" : this.traffic.group == "past_day" ? "Past 24 Hours" : this.dateHeadline(this.traffic.date, this.traffic.group)
    },
    hourText: function (a) {
        return a = parseInt(a, 10), a >= 12 ? (a == 12 ? a : a - 12) + "pm" : (a === 0 ? "12" : a) + "am"
    },
    pixelSize: function (a, b, c) {
        return b > 0 ? Math.ceil(a / b * (c - 1) + 1) + "px" : "1px"
    },
    top_referrer_data: function () {
        var a = 0,
            b = this.overview_data.referrers.length >= 5 ? 5 : this.overview_data.referrers.length,
            c = {
                site_id: this.id,
                show_referrers: b > 0,
                referrers: []
            };
        for (var d = 0; d < b; d++) c.referrers.push({
            url: this.overview_data.referrers[d].url,
            path: this.overview_data.referrers[d].path,
            host: this.overview_data.referrers[d].host,
            total: this.formatNumber(this.overview_data.referrers[d].views)
        });
        return c
    },
    referrer_data: function () {
        this.referrers.page === undefined && (this.referrers.page = 0);
        var a = this.referrers.referrers.length,
            b = this.referrers.page,
            c = this.referrers.per_page,
            d = c * (b - 1) + 1,
            e = c > a ? d + a - 1 : d + c - 1,
            f = {
                site_id: this.id,
                show_referrers: a > 0,
                prev_url: this.referrers.urls.older ? "#/gauges/" + this.id + "/referrers/day/" + this.parseQueryString(this.referrers.urls.older).date : null,
                next_url: this.referrers.urls.newer ? "#/gauges/" + this.id + "/referrers/day/" + this.parseQueryString(this.referrers.urls.newer).date : null,
                referrers: [],
                today: this.referrers.date === this.recent_days[0].date,
                group: this.referrers.group || "day",
                date: this.referrers.date,
                to: e,
                from: d,
                headline: this.referrers.date == this.recent_days[0].date ? "Today" : this.dateHeadline(this.referrers.date, "day"),
                has_prev_url: this.referrers.urls.older,
                has_next_url: this.referrers.urls.newer,
                previous: this.referrers.urls.previous_page,
                next: this.referrers.urls.next_page,
                previous_page: b - 1,
                next_page: b + 1,
                pagination: a === 0 ? "No Referrers" : "Viewing " + d + " to " + e
            };
        for (var g = 0; g < a; g++) f.referrers.push({
            url: this.referrers.referrers[g].url,
            path: this.referrers.referrers[g].path,
            host: this.referrers.referrers[g].host,
            total: this.formatNumber(this.referrers.referrers[g].views)
        });
        return f
    },
    terms_data: function () {
        this.searches.terms.page === undefined && (this.searches.terms.page = 0);
        var a = this.searches.terms.terms.length,
            b = this.searches.terms.page,
            c = this.searches.terms.per_page,
            d = c * (b - 1) + 1,
            e = c > a ? d + a - 1 : d + c - 1,
            f = {
                site_id: this.id,
                show_terms: a > 0,
                prev_url: this.searches.terms.urls.older ? "#/gauges/" + this.id + "/searches/terms/" + this.parseQueryString(this.searches.terms.urls.older).date : null,
                next_url: this.searches.terms.urls.newer ? "#/gauges/" + this.id + "/searches/terms/" + this.parseQueryString(this.searches.terms.urls.newer).date : null,
                entries: [],
                today: this.searches.terms.next_url === "",
                category: this.searches.category || "terms",
                date: this.searches.terms.date,
                to: e,
                from: d,
                headline: this.searches.terms.next_url == "" ? "This Month" : this.dateHeadline(this.searches.terms.date, "month"),
                has_prev_url: this.searches.terms.urls.older,
                has_next_url: this.searches.terms.urls.newer,
                previous: this.searches.terms.urls.previous_page,
                next: this.searches.terms.urls.next_page,
                previous_page: b - 1,
                next_page: b + 1,
                pagination: a === 0 ? "No Searches" : "Viewing " + d + " to " + e
            };
        for (var g = 0; g < a; g++) f.entries.push({
            title: this.searches.terms.terms[g].term,
            total: this.formatNumber(this.searches.terms.terms[g].views)
        });
        return f
    },
    engines_data: function () {
        var a = [],
            b = this.searches.engines.engines,
            c = 0,
            d = 0;
        _.each(b, function (a) {
            d += a.views
        });
        var e = this,
            d = data = {
                views: d,
                show_engines: b.length > 0,
                entries: _.map(b, function (a, b) {
                    return a.formatted_views = e.formatNumber(a.views), a.html_id = "toggle_" + a.title, a.percentage = Math.round((a.views || a) * 100 / d) + "%", a.color = a.views / d > .03 ? e.colors[c % e.colors.length] : "#cccccc", a.klass = c % 2 == 0 ? "odd" : "even", c++, a.title = e.language[a.title] || a.title, a
                }),
                site_id: this.id,
                date: this.searches.engines.date,
                has_prev_url: this.searches.engines.urls.older,
                has_next_url: this.searches.engines.urls.newer,
                prev_url: this.searches.engines.urls.older ? "#/gauges/" + this.id + "/searches/engines/" + this.parseQueryString(this.searches.engines.urls.older).date : null,
                next_url: this.searches.engines.urls.newer ? "#/gauges/" + this.id + "/searches/engines/" + this.parseQueryString(this.searches.engines.urls.newer).date : null,
                headline: this.enginesHeadline()
            };
        return data
    },
    enginesHeadline: function () {
        return this.searches.engines.next_url == "" ? "This Month" : this.dateHeadline(this.searches.engines.date, "month")
    },
    enginesGraphData: function () {
        var a = this.engines_data();
        return _.map(a.entries, function (a) {
            return {
                label: a.title,
                data: a.views
            }
        })
    },
    top_content_data: function () {
        var a = 0,
            b = this.overview_data.content.length >= 5 ? 5 : this.overview_data.content.length,
            c = {
                site_id: this.id,
                show_contents: b > 0,
                content: []
            };
        for (var d = 0; d < b; d++) c.content.push({
            url: "http://" + this.overview_data.content[d].host + this.overview_data.content[d].path,
            path: this.overview_data.content[d].path,
            title: this.separated_page_title(this.overview_data.content[d].title),
            total: this.formatNumber(this.overview_data.content[d].views)
        });
        return c
    },
    content_data: function () {
        this.contents.page === undefined && (this.contents.page = 0);
        var a = this.contents.content.length,
            b = this.contents.page,
            c = this.contents.per_page,
            d = c * (b - 1) + 1,
            e = c > a ? d + a - 1 : d + c - 1,
            f = {
                site_id: this.id,
                show_contents: a > 0,
                prev_url: this.contents.urls.older ? "#/gauges/" + this.id + "/contents/day/" + this.parseQueryString(this.contents.urls.older).date : null,
                next_url: this.contents.urls.newer ? "#/gauges/" + this.id + "/contents/day/" + this.parseQueryString(this.contents.urls.newer).date : null,
                group: this.contents.group || "day",
                date: this.contents.date,
                today: this.contents.date == this.recent_days[0].date,
                content: [],
                to: e,
                from: d,
                headline: this.contents.date == this.recent_days[0].date ? "Today" : this.dateHeadline(this.contents.date, "day"),
                has_prev_url: this.contents.urls.older,
                has_next_url: this.contents.urls.newer,
                previous: this.contents.urls.previous_page,
                next: this.contents.urls.next_page,
                previous_page: b - 1,
                next_page: b + 1,
                pagination: a === 0 ? "No Pages Viewed" : "Viewing " + d + " to " + e
            };
        for (var g = 0; g < a; g++) f.content.push({
            url: "http://" + this.contents.content[g].host + this.contents.content[g].path,
            path: this.contents.content[g].path,
            title: this.separated_page_title(this.contents.content[g].title),
            total: this.formatNumber(this.contents.content[g].views)
        });
        return f
    },
    shares_list: function () {
        var a = this;
        return _.compact(_.map(this.shares, function (b) {
            return b.id != Gauges.user.id ? (b.site_id = a.id, b.invite = b.type == "invite", b) : null
        }))
    },
    invites_list: function () {
        var a = this;
        return _.map(this.invites, function (b) {
            return b.site_id = a.id, b
        })
    },
    has_shares: function () {
        return this.shares_list().length + this.invites_list().length > 0
    },
    total_views: function () {
        return this.traffic.date == "recent" ? _.reduce(this.traffic.entries, function (a, b) {
            return a + b.views
        }, 0) : this.traffic.group == "year" ? this.all_time.views : this.traffic.views
    },
    total_people: function () {
        return this.traffic.group == "year" ? this.all_time.people : this.traffic.people
    },
    separated_page_title: function (a) {
        if (a) {
            var b = a.indexOf(" // ") == -1 ? " - " : " // ";
            return $.trim(a.split(b)[0])
        }
    },
    allow_sharing: function () {
        return Gauges.subscription && Gauges.subscription.can_share ? !0 : !1
    },
    getDateFromString: function (a) {
        var b = _.map(a.split("-"), function (a) {
            return parseInt(a, 10)
        });
        return new Date(b[0], b[1] - 1, b[2] || 1)
    },
    tz_select: function () {
        return TZ.select("tz_" + this.id, this.tz)
    },
    weekend: function (a) {
        return a = this.getDateFromString(a), a.getDay() === 0 || a.getDay() == 6
    },
    dateHeadline: function (a, b) {
        var c;
        a = typeof a == "string" ? this.getDateFromString(a) : a;
        switch (b) {
            case "year":
                c = "All Time Traffic";
                break;
            case "month":
                c = Gauges.monthTitle(a.getMonth()) + " " + a.getFullYear();
                break;
            case "day":
                c = Gauges.monthTitle(a.getMonth()) + " " + a.getDate() + ", " + a.getFullYear()
        }
        return c
    },
    dateRow: function (a, b) {
        a = typeof a == "string" ? this.getDateFromString(a) : a;
        switch (b) {
            case "month":
                return Gauges.monthAbbr(a.getMonth()) + " " + a.getDate();
            case "year":
                return Gauges.monthTitle(a.getMonth())
        }
    },
    formatNumber: function (a) {
        a += "";
        var b = /(\d+)(\d{3})/;
        while (b.test(a)) a = a.replace(b, "$1,$2");
        return a
    },
    parseQueryString: function (a) {
        if (a.indexOf("?") == -1) return {
            date: "recent"
        };
        var b = {};
        return _.each(a.split("?")[1].split("&"), function (a) {
            var c = a.split("=");
            b[c[0]] = c[1]
        }), b
    },
    titleInArray: function (a, b) {
        for (i = 0; i < b.length; i++) if (b[i]["title"] == a) return !0;
        return !1
    },
    addCountry: function (a) {
        var b = this.locations && this.locations.next_url == "",
            c = a.country,
            d = a.region,
            e = this;
        if (b && c && c != "") {
            if (this.titleInArray(c, this.locations.locations)) this.locations.locations = _.map(this.locations.locations, function (a) {
                return a["title"] == c && (a.views++, d && d != "" && (e.titleInArray(d, a.regions) ? a.regions = _.map(a.regions, function (a) {
                    return a.title == d && a.views++, a
                }) : a.regions.push({
                    title: d,
                    views: 1
                }), a.regions.sort(function (a, b) {
                    return b.views - a.views
                }))), a
            });
            else {
                var f = {
                    title: c,
                    views: 1
                };
                d && d != "" && (f.regions = [{
                    title: d,
                    views: 1
                }]), this.locations.locations.push(f)
            }
            this.locations.locations.sort(function (a, b) {
                return b.views - a.views
            })
        }
    },
    incrementByTitle: function (a, b) {
        return this.titleInArray(a, b) ? b = _.map(b, function (b) {
            return b["title"] == a && b.views++, b
        }) : b.push({
            title: a,
            views: 1
        }), b.sort(function (a, b) {
            return b.views - a.views
        })
    },
    addResolution: function (a) {
        var b = this.resolutions && this.resolutions.next_url == "";
        b && (this.resolutions.browser_heights = this.incrementByTitle(a.browsery, this.resolutions.browser_heights), this.resolutions.browser_widths = this.incrementByTitle(a.browserx, this.resolutions.browser_widths), this.resolutions.screen_widths = this.incrementByTitle(a.screenx, this.resolutions.screen_widths))
    },
    addTechnology: function (a) {
        var b = this.technology && this.technology.next_url == "",
            c = this,
            d = a.platform,
            e = a.browser_n,
            f = a.browser_v;
        d && (d = d == "unknown" ? "other" : d);
        if (b) {
            if (e) {
                if (this.titleInArray(c.language[e], this.technology.browsers)) this.technology.browsers = _.map(this.technology.browsers, function (a) {
                    return a["title"] == c.language[e] && (a.views++, f && f != "" && (c.titleInArray(f, a.versions) ? a.versions = _.map(a.versions, function (a) {
                        return a.title == f && a.views++, a
                    }) : a.versions.push({
                        title: f,
                        views: 1
                    }), a.versions.sort(function (a, b) {
                        return b.views - a.views
                    }))), a
                });
                else {
                    var g = {
                        title: c.language[e],
                        views: 1,
                        versions: []
                    };
                    f && f != "" && (g.versions = [{
                        title: f,
                        views: 1
                    }]), this.technology.browsers.push(g)
                }
                this.technology.browsers.sort(function (a, b) {
                    return b.views - a.views
                })
            }
            d && (this.technology.platforms = this.incrementByTitle(a.platform_t, this.technology.platforms))
        }
    },
    hit: function (a) {
        this.today.views++, this.recent_hours[0].views++, this.recent_days[0].views++, this.recent_months[0].views++, this.all_time.views++, a.u.hour && this.recent_hours[0].people++, a.u.day && (this.today.people++, this.recent_days[0].people++), a.u.month && this.recent_months[0].people++, a.u.overall && this.all_time.people++, this.addCountry(a), this.addResolution(a), this.addTechnology(a);
        var b = this.contents && this.contents.next_url == "",
            c = this.referrers && this.referrers.next_url == "";
        b && (this.contents.content = _.map(this.contents.content, function (b) {
            return b.path == a.path && b.views++, b
        }).sort(function (a, b) {
            return b.views - a.views
        })), c && (this.referrers.referrers = _.map(this.referrers.referrers, function (b) {
            return b.url == a.referrer && b.views++, b
        }).sort(function (a, b) {
            return b.views - a.views
        })), this.overview_data && (this.overview_data.content = _.map(this.overview_data.content, function (b) {
            return b.path == a.path && b.views++, b
        }).sort(function (a, b) {
            return b.views - a.views
        }), this.overview_data.referrers = _.map(this.overview_data.referrers, function (b) {
            return b.url == a.referrer && b.views++, b
        }).sort(function (a, b) {
            return b.views - a.views
        })), this.hits.unshift(a), this.hits.length > 50 && (this.hits = this.hits.slice(0, 50)), this.storeHits()
    },
    storeHits: _.throttle(function () {
        try {
            Gauges.supportsHtml5Storage() && this.store_hits && (localStorage["gauges.site." + this.id + ".hits"] = JSON.stringify(this.hits))
        } catch (a) {}
    }, 5e3),
    loadHits: function () {
        this.hits = [];
        try {
            if (Gauges.supportsHtml5Storage() && this.store_hits) if (localStorage["gauges.site." + this.id + ".hits"]) {
                var a = [];
                _.each(JSON.parse(localStorage["gauges.site." + this.id + ".hits"]), function (b) {
                    new Date - $.timeago.parse(b.date) <= 36e5 && a.push(b)
                }), this.hits = a
            } else this.hits = []
        } catch (b) {}
    },
    hit_data: function () {
        var a = {
            iphone: Gauges.iphone(),
            hits: this.hits,
            show_hits: this.hits.length != 0
        };
        return a
    },
    regenerateTraffic: function () {
        if (this.traffic) if (this.traffic.group != "month" || this.traffic.date != "recent" && this.traffic.date != "past_two_weeks") if (this.traffic.group == "month") {
            if (this.traffic.date.match(/(\d\d\d\d-\d\d)/)[1] == this.recent_months[0].date) for (var a = this.recent_days.length - 1; a >= 0; a--) {
                var b = this.recent_days[a];
                if (b.date.split("-")[1] == this.traffic.date.split("-")[1]) {
                    var c = !1;
                    for (var d = 0; d < this.traffic.entries.length; d++) if (this.traffic.entries[d].date == b.date) {
                        this.traffic.entries[d] = b, c = !0;
                        break
                    }
                    c || this.traffic.entries.push(b)
                }
            }
        } else this.traffic.group == "year" ? this.setAllTimeTraffic() : this.traffic.group == "past_day" && this.setPastDayTraffic();
        else this.setRecentTraffic()
    },
    addEmptyUntil: function (a, b, c, d) {
        this.addEmptyHours(a, b, c, d), this.addEmptyDays(a, b, c), this.addEmptyMonths(a, b), (this.year != a || this.month != b || this.day != c || this.hour != d) && this.trigger("data_updated.g"), this.year = a, this.month = b, this.day = c, this.hour = d
    },
    addEmptyHours: function (a, b, c, d) {
        var e = new Date(a, b, c - 1, d),
            f = new Date(this.year, this.month, this.day - 1, this.hour),
            g = (e - f) / 36e5;
        for (var h = 1; h <= g; h++) this.recent_hours.pop(), this.recent_hours.unshift({
            hour: "" + (this.hour + h) % 24,
            views: 0,
            people: 0
        })
    },
    addEmptyDays: function (a, b, c) {
        var d = new Date(a, b, c - 1),
            e = new Date(this.year, this.month, this.day - 1),
            f = new Date(e.getTime() + 864e5);
        for (f; f <= d; f) {
            var g = f.getFullYear(),
                h = f.getMonth(),
                i = f.getDate() + 1,
                j = g + "-" + h + "-" + i;
            h < 10 && (h = "0" + h), i < 10 && (i = "0" + i), this.recent_days.pop(), this.recent_days.unshift({
                date: j,
                views: 0,
                people: 0
            }), this.today = {
                date: j,
                views: 0,
                people: 0
            }, f = new Date(f.getTime() + 864e5)
        }
    },
    addEmptyMonths: function (a, b) {
        var c = new Date(a, b - 1),
            d = new Date(this.year, this.month);
        for (var e = 1; d <= c; e++) {
            var f = d.getFullYear(),
                g = d.getMonth() + 1;
            g < 10 && (g = "0" + g), this.recent_months.pop(), this.recent_months.unshift({
                date: f + "-" + g,
                views: 0,
                people: 0
            }), d = new Date(this.year, this.month + e)
        }
    },
    parseUTC: function (a) {
        var b = $.trim(a);
        return b = b.replace(/\.\d\d\d+/, ""), b = b.replace(/-/, "/").replace(/-/, "/"), b = b.replace(/T/, " ").replace(/Z/, " UTC"), b = b.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(b)
    },
    currentTime: function () {
        var a = new Date((new Date).getTime() + this.server_offset),
            b = a.getTime() + a.getTimezoneOffset() * 6e4,
            c = new Date(b + 36e5 * this.tz_offset);
        return [c.getFullYear(), c.getMonth() + 1, c.getDate(), c.getHours()]
    },
    updateTimes: function () {
        var a = this.currentTime();
        this.addEmptyUntil(a[0], a[1], a[2], a[3])
    },
    redraw: _.throttle(function () {
        this.regenerateTraffic(), this.trigger("data_updated.g")
    }, 1e3)
});
var Subscription = function (a) {
    this.setup(a)
};
_.extend(Subscription, Lucid.Events), _.extend(Subscription.prototype, Lucid.Events, {
    setup: function (a) {
        _.extend(this, a || {}), this.trigger("setup.g")
    },
    trial: function () {
        return this.plan_id == 5
    },
    free: function () {
        return this.plan_id == 4
    },
    solo: function () {
        return this.plan_id == 1
    },
    small: function () {
        return this.plan_id == 2
    },
    large: function () {
        return this.plan_id == 3
    },
    ten_million: function () {
        return this.plan_id == 6
    },
    twenty_million: function () {
        return this.plan_id == 7
    },
    thirty_million: function () {
        return this.plan_id == 8
    },
    paid_plan: function () {
        return !this.free() && !this.trial()
    },
    trial_days_left_text: function () {
        return this.trial_days_left + " day" + (this.trial_days_left == 1 ? "" : "s")
    },
    next_renew_date: function () {
        var a = this.parse_date(this.active_until);
        return Gauges.monthTitle(a.getMonth()) + " " + a.getDate() + ", " + a.getFullYear()
    },
    parse_date: function (a) {
        var b = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/,
            c = b.exec(a);
        return c ? new Date(c[1], c[2] - 1, c[3], c[4], c[5], c[6]) : new Date
    },
    has_store_credit: function () {
        return this.store_credit && this.store_credit > 0
    },
    formatted_plan_price: function () {
        return "$" + this.plan_price
    },
    formatted_store_credit: function () {
        var a = Math.floor(this.store_credit / 100),
            b = this.store_credit % 100;
        return b < 10 && (b = "0" + b), "$" + a + "." + b
    }
});
var DashboardSettings = function () {
    this.checkboxes = $("#dashboard_settings_list td :checkbox"), this.checkboxes.bind("change", _.bind(this.change, this))
};
_.extend(DashboardSettings, Lucid.Events), jQuery.extend(DashboardSettings.prototype, {
    change: function (a) {
        var b = $(a.target),
            c = b.closest("tr"),
            d = c.data("model"),
            e = a.target.checked ? "POST" : "DELETE";
        c.addClass("loading"), $.ajax({
            url: d.urls.self,
            type: e,
            dataType: "json",
            success: function (a) {
                var b = a.dashboard_setting;
                c.data("model", b);
                if (b.dashboard) $.ajax({
                    url: "/gauges/" + b.gauge.id,
                    success: function (a) {
                        Gauges.sites[a.gauge.id] = new Site(a.gauge)
                    },
                    complete: function () {
                        c.removeClass("loading")
                    }
                });
                else {
                    var d = Gauges.sites[b.gauge.id];
                    d && d.trigger("teardown.g"), c.removeClass("loading")
                }
            },
            error: function () {
                c.removeClass("loading")
            }
        })
    }
});
var HoursGraph = function (a, b, c) {
    function q(a) {
        p = null;
        var c = r.getAxes();
        if (a.x < c.xaxis.min || a.x > c.xaxis.max || a.y < c.yaxis.min || a.y > c.yaxis.max) return;
        var d, f = r.getData(),
            g = f[0];
        for (d = 0; d < g.data.length; ++d) if (g.data[d][0] < a.x + 18e5) break;
        var h, i, j;
        f[0].data[d][1] ? (h = f[0].data[d][1], i = f[1].data[d][1], j = f[0].data[d][0]) : (h = f[0].data[0][1], i = f[1].data[0][1], j = f[0].data[0][0]);
        var k = (new Date(j - 36e5 * b.tz_offset)).getHours(),
            l = "am";
        k >= 12 && (l = "pm", k -= 12), k == 0 && (k = 12);
        var m = k + l;
        e.find("td.legendLabel").html(m + ": <strong>" + b.formatNumber(h) + "</strong> views by <strong>" + b.formatNumber(i) + "</strong> people")
    }
    var d = [],
        e = $(a),
        f = [],
        g = b.recent_days[0].date.split("-"),
        h = g[0],
        i = g[1],
        j = g[2],
        k = b.recent_hours[0].hour,
        l = (new Date(h, i, j, k)).getTime() + b.tz_offset * 1e3 * 60 * 60,
        m = undefined;
    $.each(b.recent_hours.slice(0, c), function () {
        d.push([l, this.views, 0]), f.push([l, this.people, 0]), l -= 36e5, m == undefined ? m = this.views : this.views > m && (m = this.views)
    });
    var n = m * .05,
        o = [{
            data: d,
            color: "#86A4C3",
            lines: {
                show: !1
            },
            bars: {
                show: !0,
                barWidth: 324e4,
                align: "center",
                fillColor: {
                    colors: [{
                        opacity: .3
                    }, {
                        opacity: .7
                    }]
                },
                lineWidth: 0
            }
        }, {
            data: f,
            color: "#86A4C3",
            label: "Last " + d.length + " Hours",
            lines: {
                show: !1
            },
            bars: {
                show: !0,
                barWidth: 324e4,
                align: "center",
                fillColor: {
                    colors: [{
                        opacity: .3
                    }, {
                        opacity: .7
                    }]
                },
                lineWidth: 0
            }
        }],
        p = null,
        r = $.plot(e, o, {
            xaxis: {
                mode: "time",
                timeformat: "%h%p",
                tickLength: 0
            },
            yaxis: {
                min: 0,
                max: m + n
            },
            grid: {
                color: "#aaa",
                borderWidth: 0,
                axisMargin: 0,
                hoverable: !0,
                autoHighlight: !1
            },
            series: {
                shadowSize: 0,
                lines: {
                    show: !0
                }
            },
            crosshair: {
                mode: "x",
                color: "rgba(0,0,0,0.3)"
            },
            legend: {
                position: "sw",
                backgroundOpacity: 0
            }
        });
    e.bind("plothover", function (a, b, c) {
        q(b)
    }).live("mouseout", function () {
        e.find("td.legendLabel").text("Last " + d.length + " Hours")
    })
}, PieGraph = function (a, b, c) {
    var d = $(a),
        e = 0;
    c = _.map(c, function (a) {
        return a.color = b.colors[e % b.colors.length], e++, a
    }), $.plot(d, c, {
        series: {
            pie: {
                show: !0,
                radius: 1,
                innerRadius: .4,
                combine: {
                    color: "#ccc",
                    threshold: .03
                },
                label: {
                    show: !0,
                    radius: .7,
                    threshold: .04,
                    formatter: function (a, b) {
                        return '<div style="font-size:10px;text-align:center;padding:2px;color:white;">' + a + "</div>"
                    }
                }
            }
        },
        legend: {
            show: !1
        }
    })
}, TrafficGraph = function (a, b) {
    function m(a) {
        l = null;
        var e = p.getAxes();
        if (a.x < e.xaxis.min || a.x > e.xaxis.max || a.y < e.yaxis.min || a.y > e.yaxis.max) return;
        var f, g = p.getData(),
            h = g[0],
            i = d.group_by_month ? 432e5 : 1296e6,
            j = new Date(a.x + i);
        Date.prototype.monthDays = function () {
            var a = new Date(this.getFullYear(), this.getMonth() + 1, 0);
            return a.getDate()
        };
        if (d.group_by_month) var k = (new Date(j.getFullYear(), j.getMonth(), j.getDate(), b.tz_offset)).getTime();
        else var k = (new Date(j.getFullYear(), j.getMonth(), 1, b.tz_offset)).getTime();
        for (f = 0; f < h.data.length; ++f) if (g[0].data[f][0] == k) break;
        var m, n, k;
        g[0].data[f] ? (m = g[0].data[f][1], n = g[1].data[f][1], k = g[0].data[f][0]) : (m = g[0].data[0][1], n = g[1].data[0][1], k = g[0].data[0][0]);
        var o = b.dateHeadline(new Date(k - 36e5 * b.tz_offset), d.group_by_month ? "day" : "month");
        c.find("td.legendLabel").html(o + ": <strong>" + b.formatNumber(m) + "</strong> views by <strong>" + b.formatNumber(n) + "</strong> people")
    }
    var c = $(a),
        d = b.traffic_data(),
        e = [],
        f = [],
        g = undefined;
    d.date != "recent" ? d.entries = d.entries.reverse() : d.date == "past_two_weeks" && (d.entries = d.entries.slice(0, 13)), $.each(d.entries, function () {
        var a = this.date.split("-"),
            c = a[0],
            d = a[1] ? parseInt(a[1], 10) - 1 : null,
            h = a[2] || 1,
            i = (new Date(c, d, h)).getTime() + b.tz_offset * 1e3 * 60 * 60;
        e.push([i, this.views, 0]), f.push([i, this.people, 0]), g == undefined ? g = this.views : this.views > g && (g = this.views)
    });
    var h = g * .05;
    if (d.group_by_month) {
        var i = 792e5;

        function j(a) {
            var b = [],
                c = new Date(a.xaxis.min);
            c.setUTCDate(c.getUTCDate() - (c.getUTCDay() + 1) % 7), c.setUTCSeconds(0), c.setUTCMinutes(0), c.setUTCHours(0);
            var d = c.getTime() - 432e5;
            do b.push({
                xaxis: {
                    from: d,
                    to: d + 1728e5
                },
                color: "#e7e7e7"
            }), d += 6048e5;
            while (d < a.xaxis.max);
            return b
        }
    } else {
        var i = 22464e5;

        function j(a) {
            return !1
        }
    }
    var k = [{
        data: e,
        color: "#396",
        lines: {
            show: !1
        },
        bars: {
            show: !0,
            barWidth: i,
            align: "center",
            fillColor: {
                colors: [{
                    opacity: .3
                }, {
                    opacity: .7
                }]
            },
            lineWidth: 0
        }
    }, {
        data: f,
        color: "#31654B",
        label: d.headline,
        lines: {
            show: !1
        },
        bars: {
            show: !0,
            barWidth: i,
            align: "center",
            fillColor: {
                colors: [{
                    opacity: .3
                }, {
                    opacity: .7
                }]
            },
            lineWidth: 0
        }
    }],
        l = null;
    if (d.group_by_year) var n = "%b";
    else n = "%m/%d";
    var o = e.length < 8 ? e.length : null,
        p = $.plot(c, k, {
            xaxis: {
                mode: "time",
                timeformat: n,
                tickLength: 0,
                ticks: o
            },
            yaxis: {
                min: 0,
                max: g + h
            },
            grid: {
                color: "#aaa",
                borderWidth: 0,
                axisMargin: 0,
                markings: j,
                hoverable: !0,
                autoHighlight: !1
            },
            series: {
                shadowSize: 0,
                lines: {
                    show: !0
                }
            },
            crosshair: {
                mode: "x",
                color: "rgba(0,0,0,0.3)"
            },
            legend: {
                position: "sw",
                backgroundOpacity: 0
            }
        });
    c.bind("plothover", function (a, b, c) {
        m(b)
    }).live("mouseout", function () {
        c.find("td.legendLabel").text(d.headline)
    })
}, Map = function (a, b, c) {
    this.init(a, b, c)
};
_.extend(Map.prototype, {
    initproject: function () {
        this.m_pixelsPerLonDegree = 16 / 360, this.m_negpixelsPerLonRadian = -(16 / (2 * Math.PI)), this.m_bitmapOrigo = 8, this.m_ww = this.m_bitmapOrigo * 256 * 2
    },
    redrawPins: function () {
        _.each(this.pins, function (a) {
            a.reposition()
        })
    },
    pixelFor: function (a, b) {
        return this.project(a, b), {
            x: this.g_px * this.m_s - this.m_x,
            y: this.g_py * this.m_s - this.m_y
        }
    },
    project: function (a, b) {
        var c;
        return this.g_px = (this.m_bitmapOrigo + a * this.m_pixelsPerLonDegree) * 256, c = Math.sin(b * (Math.PI / 180)), c = Math.max(Math.min(c, .9999), -0.9999), this.g_py = (this.m_bitmapOrigo + .5 * Math.log((1 + c) / (1 - c)) * this.m_negpixelsPerLonRadian) * 256, {
            x: this.g_px,
            y: this.g_py
        }
    },
    getCountryColor: function (a) {
        var b = 51,
            c = 153,
            d = 102,
            e = 0,
            f = 0,
            g = this.dataSet();
        for (key in g) {
            var h = g[key].views ? g[key].views : g[key];
            h > f && (f = h), a == key && (e = h)
        }
        if (e == 0) return this.getColor("land", 0);
        var i = (e + f * .1) / (f + f * .1);
        return this.getColor("land", i)
    },
    dataSet: function () {
        switch (this.m_level) {
            case 1:
                return this.views.Canada ? this.views.Canada.regions : {};
            case 2:
                return this.views["United States"] ? this.views["United States"].regions : {};
            default:
                return this.views
        }
    },
    country: function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r = 0,
            s = 0,
            t = 1,
            u = 1;
        this.onscreen = !1, this.name = a.name, this.id = a.id, this.group = a.group, this.box = !1, this.name == "Alaska" ? (s = -25, r = -38.5, u = .65) : this.name == "Hawaii" && (s = 56, r = 1), b.project(s + u * parseFloat(a.clon), r + t * parseFloat(a.clat)), c = a.poly, this.numpolys = c.length, this.polys = new Array(this.numpolys);
        for (d = 0; d < c.length; ++d) {
            f = c[d].split(","), coords = new Array(f.length), this.polys[d] = coords;
            for (e = 0; e < f.length; e += 2) j = s + u * parseFloat(f[e]), k = r + t * parseFloat(f[e + 1]), b.project(j, k), coords[e] = b.g_px, coords[e + 1] = b.g_py, d == 0 && e == 0 ? (this.minx = this.maxx = coords[0], this.miny = this.maxy = coords[1]) : (coords[e] < this.minx && (this.minx = coords[e]), coords[e] > this.maxx && (this.maxx = coords[e]), coords[e + 1] < this.miny && (this.miny = coords[e + 1]), coords[e + 1] > this.maxy && (this.maxy = coords[e + 1]))
        }
    },
    draw: function () {
        var a, b, c, d, e, f, g, h, i, j, k = this.canvas.width,
            l = this.canvas.height,
            m, n, o, p, q = new Array,
            r, s, t, u;
        $(this.element).width(k), $(this.element).height(l), this.context.fillStyle = this.getColor("water"), this.context.fillRect(0, 0, k, l), this.m_x < 0 ? n = 2 : n = 1;
        for (m = 0; m < n; ++m) {
            m ? o = this.m_ww * this.m_ws : o = 0;
            for (a = 0; a < this.m_countries.length; ++a) {
                b = this.m_countries[a], m || (b.onscreen = !1);
                if (b.group == this.m_group) {
                    r = b.minx * this.m_s - this.m_x - o, s = b.maxx * this.m_s - this.m_x - o, t = b.miny * this.m_s - this.m_y, u = b.maxy * this.m_s - this.m_y;
                    if (!(s < 0 || r > k || t > l || u < 0)) {
                        b.onscreen = !0;
                        for (c = 0; c < b.numpolys; ++c) {
                            e = b.polys[c], this.context.beginPath(), this.context.moveTo(e[0] * this.m_s - this.m_x - o, e[1] * this.m_s - this.m_y);
                            for (d = 2; d < e.length; d += 2) this.context.lineTo(e[d] * this.m_s - this.m_x - o, e[d + 1] * this.m_s - this.m_y);
                            this.context.closePath(), this.context.fillStyle = this.getCountryColor(b.name), this.context.fill(), this.context.strokeStyle = this.getColor("stroke"), this.context.stroke()
                        }
                    }
                }
            }
        }
        this.context.strokeStyle = "white";
        for (a = 0; a < this.m_countries.length; ++a) b = this.m_countries[a], b.group == this.m_group && b.box && (this.context.beginPath(), this.context.moveTo(b.minx * this.m_s - this.m_x - 1, b.miny * this.m_s - this.m_y - 1), this.context.lineTo(b.maxx * this.m_s - this.m_x + 1, b.miny * this.m_s - this.m_y - 1), this.context.lineTo(b.maxx * this.m_s - this.m_x + 1, b.maxy * this.m_s - this.m_y + 1), this.context.lineTo(b.minx * this.m_s - this.m_x - 1, b.maxy * this.m_s - this.m_y + 1), this.context.closePath(), this.context.stroke())
    },
    checkInside: function (a, b, c) {
        var d, e = 0,
            f = !1;
        for (d = 0; d < a.length; d += 2) e += 2, e == a.length && (e = 0), (a[d + 1] < c && a[e + 1] >= c || a[e + 1] < c && a[d + 1] >= c) && a[d] + (c - a[d + 1]) / (a[e + 1] - a[d + 1]) * (a[e] - a[d]) < b && (f = !f);
        return f
    },
    mouseDown: function (a) {
        if (this.options.panzoom) {
            this.dragging = !0, this.mstart_x = a.pageX, this.mstart_y = a.pageY, this.pstart_x = $(this.element).position().left, this.pstart_y = $(this.element).position().top, this.doubleclicking && (a.ctrlKey || a.metaKey ? this.zoomOut(a) : this.zoomIn(a));
            var b = this;
            b.doubleclicking = !0, setTimeout(function () {
                b.doubleclicking = !1
            }, 250)
        }
    },
    mouseUp: function (a) {
        this.dragging = !1;
        if (!this.showregions) return !1;
        if (this.m_level == 0) {
            if (this.over >= 0) {
                var b = this.m_countries[this.over];
                switch (b.name) {
                    case "United States":
                        this.setRegion(2);
                        break;
                    case "Canada":
                        this.setRegion(1);
                        break;
                    default:
                        for (var c = 17; c < this.g_regions.length; c += 6) {
                            var d = this.g_regions[c].split(",");
                            if (d.indexOf(b.id) != -1) {
                                this.setRegion((c + 1) / 6 - 1);
                                break
                            }
                        }
                }
            }
        } else this.setRegion(0)
    },
    updateCursor: function () {
        this.mx = Gauges.pageX - this.element.offset().left, this.my = Gauges.pageY - this.element.offset().top, this.updateOverlay()
    },
    updateOverlay: function () {
        var a, b, c, d, e, f, g, h, i = this.element.width(),
            j = this.element.height(),
            k, l, m, n, c;
        this.over = -1;
        if (this.mx >= 0 && this.mx < i) {
            c = (this.mx + this.m_x) / this.m_s, d = (this.my + this.m_y) / this.m_s, c < 0 && (c += this.m_ww);
            for (a = 0; a < this.m_countries.length; ++a) {
                b = this.m_countries[a];
                if (b.group == this.m_group && b.numpolys && c >= b.minx && c <= b.maxx && d >= b.miny && d < b.maxy) {
                    k = b.polys;
                    for (p = 0; p < b.numpolys; ++p) if (this.checkInside(k[p], c, d)) {
                        this.over < 0 ? this.over = a : this.m_countries[a].expand > this.m_countries[this.over].expand && (this.over = a);
                        break
                    }
                }
            }
            if (this.over >= 0) {
                b = this.m_countries[this.over];
                var o = this.dataSet(),
                    q = o[b.name] ? o[b.name].views ? o[b.name].views : o[b.name] : 0;
                t = b.name, q > 0 && (t += ": <strong>" + this.site.formatNumber(q) + "</strong>"), this.map_label.html(t).css({
                    display: "inline-block"
                })
            } else this.map_label.hide()
        }
    },
    setSize: function () {
        this.color = $(this.parent).parents("#full_map").hasClass("dark") ? "dark" : "light", this.m_ws = this.parent.width() * this.zoom_level / 720, this.canvas.width = Math.floor(720 * this.m_ws), this.canvas.height = Math.floor(405 * this.m_ws), this.m_s = this.g_regions[this.m_index + 1] * this.m_ws, this.m_x = this.g_regions[this.m_index + 2] * this.m_ws, this.m_y = this.g_regions[this.m_index + 3] * this.m_ws, this.draw(), this.updateOverlay()
    },
    setRegion: function (a) {
        this.m_level = a, this.site && this.showregions && (this.site.map_region = a), this.m_index = this.m_level * 6, this.m_group = this.g_regions[this.m_index], this.setSize()
    },
    setup: function (a) {
        if (!Gauges.mapData) return !1;
        var b, c, d, e, f, g = document.createElement("canvas");
        g.className = "map", $(g).appendTo(this.element), g.getContext || (g = window.G_vmlCanvasManager.initElement(g)), this.context = g.getContext("2d"), g.getContext("2d").save(), this.canvas = g, this.parent = $(this.element).parent();
        if (!this.context) {
            alert("Error: failed to getContext!");
            return
        }
        this.initproject(), this.map_label = $('<div class="map_label"></div>'), this.map_label.appendTo(this.parent);
        var h = this;
        this.options.panzoom && (this.zoom_in = $('<div class="zoomin">Zoom In</div>').appendTo(this.parent).click(function () {
            h.zoomIn()
        }), this.zoom_out = $('<div class="zoomout">Zoom Out</div>').appendTo(this.parent).click(function () {
            h.zoomOut()
        })), $(this.canvas).disableSelection(), this.m_countries = new Array(Gauges.mapData.length);
        for (b = 0; b < this.m_countries.length; ++b) this.m_countries[b] = new this.country(Gauges.mapData[b], this);
        $(this.canvas).mousemove(function (a) {
            h.drag(a), h.updateCursor()
        }), $(this.canvas).mousedown(function (a) {
            h.mouseDown(a)
        }), this.canvas.onmouseup = function () {
            h.mouseUp()
        }, this.setRegion(this.site && this.site.map_region && this.showregions ? this.site.map_region : 0), this.options.complete && setTimeout(this.options.complete, 50)
    },
    zoomIn: function (a) {
        this.zoom_level < 4 && (this.zoom_level += 1, this.zoom(a))
    },
    zoomOut: function (a) {
        this.zoom_level > 1 && (this.zoom_level -= 1, this.zoom(a))
    },
    zoom: function (a) {
        var b = Math.floor($(this.parent).width() / 2),
            c = Math.floor($(this.parent).height() / 2),
            d = a ? a.pageX + 53 : b,
            e = a ? a.pageY : c,
            f = $(this.element).width(),
            g = $(this.element).parent().width() * this.zoom_level;
        oldh = Math.floor(.5625 * f), newh = Math.floor(g * .5625), oldx = $(this.element).position().left, oldy = $(this.element).position().top, left = oldx - (g - f) * ((d - oldx) / f) + (b - d), tip = oldy - (newh - oldh) * ((e - oldy) / oldh) + (c - e), tip < $(this.parent).height() - newh && (tip = $(this.parent).height() - newh), tip > 0 && (tip = 0), left < $(this.parent).width() - g - 100 && (left = $(this.parent).width() - g - 100), left > 100 && (left = 100), $(this.element).width(g).css({
            left: left,
            top: tip
        }), Gauges.showScreenMap()
    },
    drag: function (a) {
        if (!this.dragging) return !1;
        var b = this.pstart_y - (this.mstart_y - a.pageY),
            c = this.pstart_x - (this.mstart_x - a.pageX);
        b < $(this.parent).height() - $(this.element).height() && (b = $(this.parent).height() - $(this.element).height()), b > 0 && (b = 0), c < $(this.parent).width() - $(this.element).width() - 100 && (c = $(this.parent).width() - $(this.element).width() - 100), c > 100 && (c = 100), $(this.element).css({
            top: b,
            left: c
        })
    },
    getColor: function (a, b) {
        if (a == "land") {
            b || (b = 0);
            var c = this.colors[this.color].land[0],
                d = this.colors[this.color].land[1],
                e = this.colors[this.color].land[2],
                f = this.colors[this.color].views[0],
                g = this.colors[this.color].views[1],
                h = this.colors[this.color].views[2],
                i = Math.round(c - (c - f) * b),
                j = Math.round(d - (d - g) * b),
                k = Math.round(e - (e - h) * b);
            return "rgb(" + i + "," + j + "," + k + ")"
        }
        return this.colors[this.color][a]
    },
    init: function (a, b, c) {
        var d = this;
        this.site = b, this.zoom_level = 1, this.dragging = !1, this.site = b, this.options = {
            showregions: !0,
            colorCountries: !0,
            panzoom: !1
        };
        for (key in c) this.options[key] = c[key];
        this.m_s = 1, this.m_x = 1800, this.m_y = 1300, this.mx = 0, this.my = 0, this.over = -1, this.map_label, this.pins = [], this.showregions = this.options.showregions, this.views = {}, this.site && this.site.locations && this.options.colorCountries && _.each(this.site.locations.locations, function (a) {
            var b = {
                views: a.views,
                regions: {}
            };
            a.regions && _.each(a.regions, function (a) {
                b.regions[a.title] = {
                    views: a.views
                }
            }), d.views[a.title] = b
        }), this.color = "light", this.colors = {
            light: {
                water: "rgb(195,211,224)",
                stroke: "rgba(0,0,0,0.1)",
                land: [244, 244, 244],
                views: [51, 153, 102]
            },
            dark: {
                water: "#181818",
                stroke: "rgba(0,0,0,0.2)",
                land: [40, 40, 40],
                views: [182, 246, 255]
            }
        }, this.region = this.site && this.showregions ? this.site.map_region || 0 : 0, this.element = $(a), this.g_regions = [0, .165, -8, 65, "8", "*", 2, .55, 150, 450, "11", "*", 1, .86, 400, 1200, "9", "*", 0, .78, 1350, 880, "9", "c65,c68,c78,c85,c86,c92,c98,c118,c120,c121,c123,c132,c141,c148,c150,c151,c157,c165,c171,c172,c174,c187,c191,c192,c193,c194,c200,c206,c217,c240,c241,c245,c257,c207,c265,c266,c274,c281,c293,c298,c300,c306,c261,c209,c183,c227,c246", 0, 1.02, 1800, 900, "12", "c64,c123,c132,c135,c138,c166,c187,c192,c229,c246,c280", 0, .91, 1670, 1440, "11", "c66,c88,c99,c102,c106,c107,c117,c124,c128,c131,c133,c146,c149,c158,c159,c189,c190,c199,c203,c211,c222,c223,c260,c263,c268,c269,c276,c288,c292,c310", 0, .93, 1860, 1860, "11", "c69,c93,c100,c113,c114,c122,c130,c145,c181,c195,c196,c204,c212,c214,c140,c247,c258,c262,c270,c271,c279,c285,c297,c312,c313", 0, 1, 2320, 1460, "9", "c63,c74,c79,c81,c120,c128,c9,c167,c169,c170,c173,c178,c179,c180,c184,c185,c188,c216,c227,c230,c231,c233,c243,c259,c282,c284,c293,c294,c299,c304,c311", 0, .52, 1410, 740, "11", "c76,c77,c83,c90,c95,c97,c101,c109,c110,c111,c136,c244,c167,c168,c176,c226,c155,c273,c186,c197,c198,c208,c213,c216,c235,c228,c232,c238,c264,c267,c275,c283,c286,c287,c308", 0, 4, 4800, 7250, "12", "c70,c72,c75,c84,c96,c125,c126,c153,c154,c161,c202,c210,c218,c242,c248,c250,c251,c252,c254,c291,c302", 0, 1.2, 820, 1980, "12", "c80,c87,c105,c116,c119,c126,c129,c156,c161,c163,c175,c205,c221,c234,c295", 0, .48, 200, 920, "11", "c73,c91,c94,c108,c112,c127,c134,c142,c160,c236,c237,c239,c272,c277,c303,c307", 0, .37, 0, 260, "15", "c103,c301,c205", 0, 1, -330, 1900, "13", "c67,c82,c115,c137,c143,c164,c177,c182,c201,c136,c215,c219,c224,c255,c267,c290,c289,c296,c305,c309"];
        var d = this;
        Gauges.mapData ? this.setup(Gauges.mapData) : (d.element.parent().append('<div class="loading_indicator"><div></div></div>'), $.ajax({
            url: "/data/maps.json",
            dataType: "json",
            success: function (a) {
                d.element.parent().find(".loading_indicator").remove(), Gauges.mapData = a, d.setup()
            }
        }))
    }
});
var Pin = function (a, b, c, d) {
    var e = {
        autoOpen: !0,
        showInfo: !0,
        animate: !0
    };
    for (attr in d) e[attr] = d[attr];
    var f = b.latitude,
        g = b.longitude,
        h = h,
        a = a;
    if (!f || f == "" || f == 0 || !g || g == "" || g == 0) return !1;
    var i = a.pixelFor(g, f),
        j = Math.round(i.x),
        k = Math.round(i.y);
    this.x = j, this.y = k, b.referrer && b.referrer != "" && (b.has_referrer = !0);
    var l = ich.pin_template({
        animate: e.animate,
        info: e.showInfo,
        hit: b,
        location: Gauges.location(b),
        site: c,
        index: c.index % 10
    });
    a.element.find("div.pin.showinfo:not(.useropened)").removeClass("showinfo"), l.appendTo(a.element).css({
        top: k,
        left: j,
        "z-index": 1e3 + k
    }).mouseover(function () {
        $("#map_label").hide()
    }), _.reject(a.pins, function (a) {
        return a.at(j, k) ? (a.remove(), !0) : !1
    }), l.find("div.pin_icon").css({
        backgroundPosition: -(c.index % 10) * 13 + "px 0"
    }), a.pins.unshift(this);
    if (a.pins.length > 200) {
        for (var m = 199; m < a.pins.length; m++) a.pins[m].remove();
        a.pins = a.pins.slice(0, 200)
    }
    setTimeout(function () {
        e.animate && l.addClass("shown"), e.showInfo && (e.autoOpen && $("#full_map").hasClass("showinfo") && setTimeout(function () {
            l.addClass("showinfo")
        }, 300), l.find("a.close").click(function () {
            return l.removeClass("showinfo").removeClass("useropened"), !1
        }), l.find("div.pin_icon").click(function () {
            return l.toggleClass("showinfo").toggleClass("useropened"), !1
        }))
    }, 50), this.reposition = function () {
        i = a.pixelFor(g, f), j = Math.round(i.x), k = Math.round(i.y), l.css({
            top: k,
            left: j,
            "z-index": 1e3 + k
        })
    }, this.at = function (a, b) {
        return a == this.x && b == this.y
    }, this.remove = function () {
        l.remove()
    }
};
Site.bind("setup.g", function () {
    var a = this,
        b = $("#s" + a.id);
    b.length === 0 && (a.enabled ? ($("#sites").append(ich.site_template(this)), $("#s" + a.id).html(ich.site_preview_template(this)), b = $("#s" + a.id), b.data("site", this), this.setRecentTraffic(), Gauges.subscription && Gauges.subscription.can_share === !1 && b.find("div.nav .sharing").closest("li").remove()) : $("#sites").prepend(ich.disabled_site_template(this)))
}).bind("teardown.g", function () {
    this.channel && this.channel.disconnect();
    var a = $("#s" + this.id).css({
        height: 0,
        opacity: 0
    });
    setTimeout(function () {
        a.remove()
    }, 500), delete Gauges.sites[this.id]
}).bind("show_site.g", function () {
    var a = this,
        b = $("#s" + a.id);
    if (b.hasClass("current")) return !0;
    $("div.site.current").removeClass("current"), b.addClass("current"), $("#data").html(ich.site_data_template(this)), $("body").addClass("view-nav")
}).bind("show_panel.g", function (a) {
    var b = this,
        c = $("#s" + b.id),
        d = a == c.data("panel") ? $("#site_content div.display").scrollTop() : 0;
    b.trigger("show_site.g"), c.data("panel", a), $("#data div.nav li.current").removeClass("current"), $('#data div.nav a[href="#/gauges/' + b.id + "/" + a + '"]').closest("li").addClass("current");
    switch (a) {
        case "settings":
            $panel = $("#site_content").html(ich.site_settings_template(this));
            break;
        case "overview":
            b.setOverviewTraffic(), $("#site_content").html(ich.overview_template(this)), new TrafficGraph("#traffic_graph", this), $("#hours_graph").css("left", $("#site_content div.today").width() + 50 + "px"), new HoursGraph("#hours_graph", this, 12), b.overview_data ? ($("#top_content").html(ich.top_content_template(b)), $("#top_referrers").html(ich.top_referrers_template(b))) : b.trigger("load_overview.g");
            break;
        case "traffic":
            b.regenerateTraffic(), $("#site_content").html(ich.views_template(this)), b.traffic.group == "past_day" ? new HoursGraph("#traffic_graph", this) : new TrafficGraph("#traffic_graph", this);
            break;
        case "live":
            var e = this;
            $panel = $("#site_content").html(ich.live_data_template(this)), $("table.live_traffic abbr").timeago(), Gauges.iphone() || (this.map = new Map("#map", this, {
                colorCountries: !1,
                showregions: !1,
                complete: function () {
                    _.each(e.hits, function (a) {
                        new Pin(e.map, a, e, {
                            animate: !1,
                            autoOpen: !1,
                            showInfo: !1
                        })
                    })
                }
            }));
            break;
        case "code":
            $panel = $("#site_content").html(ich.tracking_code_template(this));
            break;
        case "sharing":
            $("#site_content").html(ich.sharing_template(this)), $("#site_content").find("input[title]").labelize(), b.trigger("update_sharing.g");
            break;
        case "referrers":
            this.referrers ? $("#site_content").html(ich.referrers_template(this)) : this.trigger("load_referrers.g");
            break;
        case "contents":
            this.contents ? $("#site_content").html(ich.content_template(this)) : this.trigger("load_contents.g");
            break;
        case "resolutions":
            this.resolutions ? ($("#site_content").html(ich.resolutions_template(this)), new PieGraph("#resolution_graph", this, this.resolutionsGraphData())) : this.trigger("load_resolutions.g");
            break;
        case "technology":
            this.technology ? ($("#site_content").html(ich.technology_template(this)), $("#technology_graph").length && new PieGraph("#technology_graph", this, this.technologyGraphData())) : this.trigger("load_technology.g");
            break;
        case "locations":
            this.locations ? ($("#site_content").html(ich.locations_template(this)), $("#map").length > 0 && (this.map = new Map("#map", b))) : this.trigger("load_locations.g");
            break;
        case "searches":
            this.searches.category == "terms" ? this.searches.terms ? $("#site_content").html(ich.terms_template(this)) : this.trigger("load_searches.g", [undefined, "terms"]) : this.searches.engines ? ($("#site_content").html(ich.engines_template(this)), new PieGraph("#engines_graph", this, this.enginesGraphData())) : this.trigger("load_searches.g", [undefined, "engines"])
    }
    $("body").addClass("view-panel"), $("#site_content div.display").scrollTop(d)
}).bind("data_updated.g", function () {
    var a = $("#s" + this.id),
        b = a.data("panel");
    a.hasClass("current") && b != "settings" && b != "live" && b != "sharing" && b != "code" && this.trigger("show_panel.g", [b]), a.html(ich.site_preview_template(this))
}).bind("update_sharing.g", function () {
    var a = this;
    $.ajax({
        url: "/gauges/" + a.id + "/shares",
        dataType: "json",
        type: "get",
        success: function (b) {
            a.shares = b.shares, $("#sharing_list").html(ich.shared_users_template(a)).removeClass("loading")
        }
    })
}).bind("referrers.paginate.g", function (a, b) {
    this.trigger("load_referrers.g", [b || this.referrers.date, this.referrers ? this.referrers.group : "day", a])
}).bind("contents.paginate.g", function (a, b) {
    this.trigger("load_contents.g", [b || this.contents.date, this.contents ? this.contents.group : "day", a])
}).bind("searches.paginate.g", function (a, b) {
    this.trigger("load_searches.g", [b || this.searches.terms.date, "terms", a])
}).bind("load_traffic.g", function (a, b) {
    var c = this,
        d = $("#s" + c.id);
    a == "recent" && b == "month" ? (this.setRecentTraffic(), this.trigger("show_panel.g", ["traffic"])) : a == "recent" && b == "year" ? (this.setAllTimeTraffic(), this.trigger("show_panel.g", ["traffic"])) : b == "past_day" ? (this.setPastDayTraffic(), this.trigger("show_panel.g", ["traffic"])) : b == "year" ? (this.setYearTraffic(), this.trigger("show_panel.g", ["traffic"])) : $.ajax({
        url: "/gauges/" + c.id + "/traffic",
        data: {
            date: a
        },
        dataType: "json",
        success: function (a) {
            a.entries = a.traffic, delete a.traffic, c.traffic = a, c.traffic.group = "month", c.trigger("show_panel.g", ["traffic"])
        }
    })
}).bind("load_referrers.g", function (a, b, c) {
    var d = this,
        e = $("#s" + d.id),
        b = b,
        c = c || 1;
    $.ajax({
        url: "/gauges/" + d.id + "/referrers",
        data: {
            date: a,
            group: b,
            page: c
        },
        dataType: "json",
        success: function (a) {
            d.referrers = a, d.trigger("data_updated.g"), d.timeouts.referrers && clearTimeout(d.timeouts.referrers), d.referrers.next_url == "" && (d.timeouts.referrers = setTimeout(function () {
                d.trigger("load_referrers.g", [d.today.date, b, c])
            }, 3e5))
        }
    })
}).bind("load_contents.g", function (a, b, c) {
    var d = this,
        e = $("#s" + d.id),
        b = b,
        c = c || 1;
    $.ajax({
        url: "/gauges/" + d.id + "/content",
        data: {
            date: a,
            group: b,
            page: c
        },
        dataType: "json",
        success: function (a) {
            d.contents = a, d.trigger("data_updated.g"), d.timeouts.contents && clearTimeout(d.timeouts.contents), d.contents.next_url == "" && (d.timeouts.contents = setTimeout(function () {
                d.trigger("load_contents.g", [d.today.date, b, c])
            }, 3e5))
        }
    })
}).bind("load_resolutions.g", function (a, b) {
    var c = this,
        d = $("#s" + c.id),
        e = e || 1,
        b = b || "browserx";
    $.ajax({
        url: "/gauges/" + c.id + "/resolutions",
        data: {
            date: a
        },
        dataType: "json",
        success: function (a) {
            c.resolutions = a, c.resolutions.category = b, c.trigger("data_updated.g")
        }
    })
}).bind("load_technology.g", function (a, b) {
    var c = this,
        d = $("#s" + c.id),
        e = e || 1,
        b = b || "browsers";
    $.ajax({
        url: "/gauges/" + c.id + "/technology",
        data: {
            date: a
        },
        dataType: "json",
        success: function (a) {
            c.technology = a, c.technology.category = b, c.trigger("data_updated.g")
        }
    })
}).bind("load_locations.g", function (a) {
    var b = this,
        c = $("#s" + b.id);
    $.ajax({
        url: "/gauges/" + b.id + "/locations",
        data: {
            date: a
        },
        dataType: "json",
        success: function (a) {
            b.locations = a, b.trigger("data_updated.g")
        }
    })
}).bind("load_overview.g", function () {
    var a = this,
        b = $("#s" + a.id);
    $.ajax({
        url: "/gauges/" + a.id + "/overview",
        dataType: "json",
        success: function (b) {
            a.overview_data = b.gauge, a.trigger("data_updated.g"), a.timeouts.overview && clearTimeout(a.timeouts.overview), a.timeouts.overview = setTimeout(function () {
                a.trigger("load_overview.g")
            }, 3e5)
        }
    })
}).bind("load_searches.g", function (a, b, c) {
    var d = this,
        e = $("#s" + d.id),
        b = b || "terms",
        c = c || 1,
        a = a;
    b == "terms" ? $.ajax({
        url: "/gauges/" + d.id + "/terms",
        data: {
            date: a,
            page: c
        },
        dataType: "json",
        success: function (a) {
            d.searches.terms = a, d.searches.category = "terms", d.trigger("data_updated.g"), d.timeouts.terms && clearTimeout(d.timeouts.terms), d.searches.terms.next_url == "" && (d.timeouts.terms = setTimeout(function () {
                d.trigger("load_searches.g", [d.today.date, "terms", c])
            }, 3e5))
        }
    }) : $.ajax({
        url: "/gauges/" + d.id + "/engines",
        data: {
            date: a
        },
        dataType: "json",
        success: function (a) {
            d.searches.engines = a, d.searches.category = "engines", d.trigger("data_updated.g"), d.timeouts.engines && clearTimeout(d.timeouts.engines), d.searches.engines.next_url == "" && (d.timeouts.engines = setTimeout(function () {
                d.trigger("load_searches.g", [d.today.date, "engines", c])
            }, 3e5))
        }
    })
}).bind("hit.g", function (a) {
    var b = this,
        c = $("#s" + b.id);
    Gauges.hit_timeout && clearTimeout(Gauges.hit_timeout), c.hasClass("current") && c.data("panel") == "live" && b.map && ($("div.live div.empty").remove(), $("table.live_traffic tr:nth-child(n+50)").remove(), $("table.live_traffic").removeClass("hide").find("tbody").prepend(ich.live_hit_template(a)), setTimeout(function () {
        $("table.live_traffic tr.off").removeClass("off")
    }, 50), $("table.live_traffic abbr").timeago(), new Pin(b.map, a, b, {
        autoOpen: !1,
        showInfo: !1
    })), Gauges.full_map && new Pin(Gauges.full_map, a, b), b.redraw(), $("li.live").addClass("hit"), Gauges.hit_timeout = setTimeout(function () {
        $("li.live").removeClass("hit"), Gauges.hit_timeout = null
    }, 300)
}).bind("title_updated.g", function () {
    var a = $("#s" + this.id);
    a.find("h2").text(this.title), $("#site_nav h2:first").text(this.title)
}), $("#new_site a.cancel").live("click", function () {
    return window.location.hash = "#/", $("body").removeClass("adding"), !1
}), $("a.toggle_delete").live("click", function () {
    return $("#site_content").toggleClass("delete"), !1
}), Subscription.bind("trial_notice.g", function () {
    this.show_trial_notice && $("#sites").prepend(ich.trial_template(this))
});
var SummarySettings = function () {
    this.toggleAll = $("#all_daily"), this.checkboxes = $("#site_summaries_list td :checkbox"), this.toggleAll.bind("change", _.bind(this.toggle, this)), this.checkboxes.bind("change", _.bind(this.change, this)), this.updateToggle()
};
jQuery.extend(SummarySettings.prototype, {
    updateToggle: function () {
        var a = !0;
        this.checkboxes.each(function () {
            if (!this.checked) return a = !1, !1
        }), this.toggleAll.attr("checked", a)
    },
    toggle: function (a) {
        this.checkboxes.attr("checked", a.target.checked).trigger("change")
    },
    change: function (a) {
        var b = $(a.target).closest("tr"),
            c = b.data("model");
        b.addClass("loading"), $.ajax({
            url: c.urls.self,
            type: "POST",
            data: {
                daily: a.target.checked
            },
            complete: function () {
                b.removeClass("loading")
            }
        }), this.updateToggle()
    }
}), $(function () {
    $("#full_map .lights").click(function () {
        return $("#full_map").toggleClass("dark"), $("#full_map").is(":visible") && Gauges.showScreenMap(), Gauges.store("gauges.full_map.lights", $("#full_map").hasClass("dark") ? "dark" : "light"), !1
    }), $("#full_map .top .info").click(function () {
        return $(this).hasClass("disabled") || ($("#full_map").toggleClass("showinfo"), $("#full_map_wrapper .info").hide(), Gauges.store("gauges.full_map.show_pin_info", $("#full_map").hasClass("showinfo") ? "on" : "off")), !1
    }), $("#full_map .pins").click(function () {
        return $("#full_map").removeClass("blips"), $("#full_map .info").removeClass("disabled"), Gauges.store("gauges.full_map.show_as_pins", "on"), !1
    }), $("#full_map .blips").click(function () {
        return $("#full_map").addClass("blips").removeClass("showinfo"), $("#full_map .info").addClass("disabled"), Gauges.store("gauges.full_map.show_as_pins", "off"), Gauges.store("gauges.full_map.show_pin_info", "off"), !1
    }), Gauges.store("gauges.full_map.lights") == "dark" && $("#full_map .lights").click(), Gauges.store("gauges.full_map.show_pin_info") == "off" && $("#full_map .top .info").click(), Gauges.store("gauges.full_map.show_as_pins") == "off" && $("#full_map .blips").click()
}), $("a.refresh").live("click", function () {
    var a = $(this),
        b = $("#sites div.current"),
        c = b.attr("id").replace(/^s/, ""),
        d = Gauges.sites[c],
        e = b.data("panel");
    return a.addClass("refreshing"), e == "contents" ? d.trigger("load_contents.g", [d.recent_days[0].date, "day"]) : e == "referrers" ? d.trigger("load_referrers.g", [d.recent_days[0].date, "day"]) : $.ajax({
        url: "/gauges/" + c,
        dataType: "json",
        success: function (a) {
            Gauges.sites[a.gauge.id].setup(a.gauge)
        },
        complete: function () {
            a.removeClass("refreshing")
        }
    }), !1
}), $(document).ready(function () {
    $("body").bind("orientationchange", function () {
        Gauges.setOrientation()
    }), $(".toggle_map").live("click", function () {
        $("#site_content #map_wrapper").toggle(), $("#site_content div.display").toggleClass("with_map")
    }), $("#sites").sortable({
        axis: "y",
        container: "#sites",
        opacity: .5,
        delay: 200,
        items: "div.site",
        start: function () {
            $("#sites").removeClass("meld")
        },
        stop: function () {
            $.ajax({
                url: "/gauges/reorder",
                dataType: "json",
                type: "put",
                data: {
                    ids: _.map($(this).sortable("toArray"), function (a) {
                        return a.replace(/^s/, "")
                    })
                }
            }), Gauges.meldSidebar()
        }
    }), $("tr.top").live("click", function () {
        var a = $(this),
            b = a.attr("id"),
            c = $("#sites div.site.current").attr("id").replace(/^s/, "");
        a.toggleClass("open"), $("#" + b + "_children").toggleClass("hidden"), Gauges.sites[c].ui.toggles[b] = $(this).hasClass("open")
    })
}), $(".state_toggler").live("click", function () {
    return $(this).closest(".state").toggleClass("edit"), $(this).closest(".state").trigger($(this).closest(".state").hasClass("edit") ? "edit_state" : "show_state"), !1
}), $("a.back").live("click", function () {
    var a = $("body");
    return a.hasClass("view-panel") ? (a.removeClass("view-panel"), window.location.hash = "/") : a.hasClass("view-nav") && (a.removeClass("view-nav"), $("#sites div.current").removeClass("current"), window.location.hash = "/"), !1
}), $(window).scroll(function () {
    var a = $(window).height(),
        b = $(document).height(),
        c = $(window).scrollTop(),
        d = $("#wrapper"),
        e = $("body");
    if (d.data("scrollTop") < c) $(document.body).height(b - e.css("padding-top").replace("px", ""));
    else {
        var f = e.height() - (d.data("scrollTop") - c);
        f >= d.height() ? e.height(f) : e.height(d.height())
    }
    d.data("scrollTop", c)
}), $("#reload_all").live("click", function () {
    Gauges.refresh()
}), $(".toolbar .next a, .toolbar .previous a").live("click", function () {
    $(this).addClass("loading")
}), $("a.disabled").live("click", function () {
    return !1
}),
function (a) {
    a.ajaxSetup({
        beforeSend: function (b) {
            var c = a('meta[name="_csrf"]').attr("content");
            b.setRequestHeader("X_CSRF_TOKEN", c)
        }
    })
}(jQuery);
var Gauges = {
    sites: {},
    clients: null,
    subscription: null,
    user: null,
    hit_timeout: null,
    connection_count: 0,
    start: function () {
        $("body").removeClass("loaded").addClass("loading"), this.setOrientation(), $.ajax({
            url: "/gauges/embedded",
            dataType: "json",
            success: function (a) {
                $.each(a.gauges, function (a) {
                    Gauges.sites[this.id] = new Site(this), Gauges.sites[this.id].index = a
                }), a.length === 0 ? gauges.runRoute("get", "#/account") : window.location.hash == "#/" && (window.location.hash = ""), $("#sites").removeClass("loading"), $("body").removeClass("loading").addClass("loaded"), Gauges.subscription ? Gauges.subscription.trigger("trial_notice.g") : _.size(Gauges.sites) == 0 && gauges.runRoute("get", "#/gauges/new");
                if (_.size(Gauges.sites) === 0 && $("body").hasClass("loaded") && Gauges.subscription.can_create_gauge) var b = "#/gauges/new";
                else {
                    var c = $("#sites div.site:not(.disabled):first a");
                    if (c.length == 0) window.location.hash = "/account/plan";
                    else var b = c.attr("href")
                }
                if (Gauges.iphone()) var b = undefined;
                gauges.run(b), setInterval(Gauges.incrementDates, 6e4), Gauges.meldSidebar()
            }
        })
    },
    setOrientation: function () {
        switch (window.orientation) {
            case 0:
                $("body").attr("data-orientation", "portrait");
                break;
            case -90:
            case 90:
                $("body").attr("data-orientation", "landscape")
        }
    },
    reset: function () {
        Gauges.sites = {}, $("body").removeClass("loaded"), $("#new_site").removeClass("no_cancel"), $("div.notice").remove(), $("#sites div.site").remove(), $("#data").html(""), window.location.hash = ""
    },
    iphone: function () {
        return navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPod") != -1
    },
    refresh: function () {
        $("body").addClass("refreshing"), $.ajax({
            url: "/gauges/embedded",
            dataType: "json",
            success: function (a) {
                $.each(a.gauges.reverse(), function () {
                    Gauges.sites[this.id] ? Gauges.sites[this.id].setup(this) : Gauges.sites[this.id] = new Site(this), Gauges.sites[this.id].trigger("data_updated.g");
                    var a = $("#s" + this.id);
                    a.find("div.panel.content a.refresh").click(), a.find("div.panel.referrers a.refresh").click()
                }), $("body").removeClass("refreshing")
            }
        })
    },
    setUser: function (a) {
        this.user = a.user, a.subscription && (this.subscription = new Subscription(a.subscription))
    },
    monthTitle: function (a) {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][a]
    },
    monthAbbr: function (a) {
        return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][a]
    },
    incrementDates: function () {
        if (Gauges.pusher && Gauges.pusher.connection.state == "connected") for (id in Gauges.sites) Gauges.sites[id].enabled && Gauges.sites[id].updateTimes()
    },
    meldSidebar: function () {
        var a = $("#sites div.current"),
            b = $("#data");
        $(window).scrollTop() == 0 ? $("#sites").removeClass("topcut") : $("#sites").addClass("topcut"), $("#sites").height() > b.outerHeight() ? $("#sites").addClass("bottomcut") : $("#sites").removeClass("bottomcut");
        if (a.length > 0) {
            var c = a.offset().top,
                d = c + a.outerHeight(),
                e = b.offset().top,
                f = e + b.outerHeight(),
                g = a.attr("id") == $("#sites > div:first").attr("id") ? 0 : 10;
            a.length > 0 && c >= e + g && d < f - 10 ? $("#sites").addClass("meld") : $("#sites").removeClass("meld")
        }
    },
    showScreenMap: function () {
        $("#full_map").show();
        if (!Gauges.full_map) {
            Gauges.full_map = new Map("#full_map_wrapper", null, {
                showregions: !1,
                panzoom: !0,
                complete: Gauges.addExistingPins
            });
            var a = $("#full_map_frame").height(),
                b = $("#full_map_frame").width() * .5625;
            a < b ? $("#full_map_wrapper").css({
                top: (a - b) / 2
            }) : $("#full_map_wrapper").css({
                top: 0
            })
        } else Gauges.full_map.setSize(), Gauges.full_map.redrawPins()
    },
    addExistingPins: function () {
        var a = 0;
        for (var b = 0; b < 50; b++) {
            for (id in Gauges.sites) Gauges.sites[id].hits[b] && (new Pin(Gauges.full_map, Gauges.sites[id].hits[b], Gauges.sites[id], {
                animate: !1,
                autoOpen: !1
            }), a++);
            if (a >= 200) break
        }
    },
    hideScreenMap: function () {
        $("#full_map").hide(), $("#map_label").hide()
    },
    location: function (a) {
        var b;
        return a.country && a.country != "" ? (b = a.country, (a.country == "United States" || a.country == "Canada") && a.region && a.region != "" && (b = a.region), a.city && a.city != "" && (b = a.city + ", " + b), b) : !1
    },
    store: function (a, b) {
        if (Gauges.supportsHtml5Storage()) try {
            if (b == undefined) return localStorage[a];
            localStorage[a] = b
        } catch (c) {}
    },
    resize: function () {
        Gauges.meldSidebar(), $("#full_map").is(":visible") && (Gauges.resize_timeout && clearTimeout(Gauges.resize_timeout), Gauges.resize_timeout = setTimeout(Gauges.showScreenMap, 300))
    },
    supportsHtml5Storage: function () {
        try {
            return "localStorage" in window && window.localStorage !== null
        } catch (a) {
            return !1
        }
    }
};
$(window).scroll(Gauges.meldSidebar).resize(Gauges.resize), $(function () {
    $("#new_site .tz").append(TZ.select("new_tz")), $("body").hasClass("loading") ? Gauges.start() : auth.run(), document.onmousemove = function (a) {
        Gauges.pageX = window.event ? window.event.clientX : a.pageX, Gauges.pageY = window.event ? window.event.clientY : a.pageY
    }
});
if (typeof Object.keys != "function") {
    function is_own(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    Object.keys = function (a) {
        var b = [],
            c;
        for (c in a) is_own(a, c) && b.push(c);
        return b
    }
}
var gauges = $.sammy(function () {
    this.get(/\#\/sites\/(.*)/, function () {
        this.redirect("#", "gauges", this.params.splat)
    }), this.get("#/", function (a) {
        $("body").removeClass("no_cancel").removeClass("my_account"), Gauges.hideScreenMap(), $.trim($("#data").html()) == "" && $("#sites div.site:first a").length > 0 && a.redirect($("#sites div.site:first a").attr("href"))
    }), this.get("#/deleting", function () {}), this.get("#/sign_out", function () {
        $.ajax({
            url: "/authenticate",
            type: "DELETE",
            complete: function () {
                window.location = "/signin"
            }
        }), $("body").addClass("loading").removeClass("loaded")
    }), this.get("#/map", function () {
        Gauges.showScreenMap()
    }), this.put("#/gauges/:id", function () {
        var a = $(this.target).removeErrors(),
            b = a.find("button span"),
            c = this;
        return clearTimeout(b.data("timeout")), b.data("text") === undefined && b.data("text", b.text()), b.text("Saving..."), $.ajax({
            url: "/gauges/" + this.params.id,
            type: "put",
            dataType: "json",
            data: {
                gauge: {
                    allowed_hosts: this.params.allowed_hosts,
                    title: this.params.title,
                    tz: this.params.tz
                }
            },
            success: function (a) {
                var d = a.gauge,
                    e = Gauges.sites[c.params.id];
                e.title = d.title, e.trigger("title_updated.g"), b.text("Saved"), b.data("timeout", setTimeout(function () {
                    b.text(b.data("text"))
                }, 3e3))
            },
            error: function (c) {
                var d = $.parseJSON(c.responseText);
                a.displayErrors(d.errors), b.text(b.data("text"))
            }
        }), !1
    }), this.get("#/gauges/new", function () {
        $("body").addClass("adding"), Gauges.subscription.can_create_gauge ? ($("#new_site").removeClass("upgrade").find("form").removeErrors(), setTimeout(function () {
            $("#new_site input[type=text]:first").focus()
        }, 200)) : $("#new_site").addClass("upgrade")
    }), this.post("#/gauges", function () {
        var a = $(this.target).removeErrors(),
            b = a.find(".submit button span");
        return clearTimeout(b.data("timeout")), b.data("text") === undefined && b.data("text", b.text()), b.text("Adding..."), $.ajax({
            url: "/gauges",
            type: "post",
            dataType: "json",
            data: {
                gauge: {
                    allowed_hosts: this.params.allowed_hosts,
                    title: this.params.title,
                    tz: this.params.tz
                }
            },
            success: function (b) {
                var c = b.gauge;
                Gauges.sites[c.id] = new Site(c), $("#new_title").val(""), setTimeout(function () {
                    window.location.hash = "/gauges/" + c.id + "/code"
                }, 400), $.scrollTo("#s" + c.id, {
                    duration: 600
                }), $("body").removeClass("adding"), a.removeErrors()
            },
            error: function (b) {
                var c = $.parseJSON(b.responseText);
                a.displayErrors(c.errors)
            },
            complete: function () {
                b.text(b.data("text"))
            }
        }), !1
    }), this.del("#/gauges/:id", function () {
        var a = $(this.target).removeErrors(),
            b = a.find(".submit button span");
        b.text("Deleting..."), window.location.hash = "/deleting", $.ajax({
            url: "/gauges/" + this.params.id,
            dataType: "json",
            type: "delete",
            success: function (a) {
                var b = a.gauge,
                    c = Gauges.sites[b.id];
                c.trigger("teardown.g"), $("#data").html(ich.deleted_site_template(b)), window.location.hash = "/"
            }
        })
    }), this.get("#/gauges/:id", function () {
        var a = Gauges.sites[this.params.id];
        a.trigger("show_site.g")
    }), this.get("#/gauges/:id/:data/:group/:date", function () {
        var a = Gauges.sites[this.params.id],
            b = this.params.data,
            c = $("#s" + this.params.id);
        a.trigger("show_site.g"), c.data("panel", b), a.trigger("load_" + b + ".g", [this.params.date, this.params.group])
    }), this.get("#/gauges/:id/:data/:group/:date/page/:page", function () {
        var a = Gauges.sites[this.params.id],
            b = parseInt(this.params.page, 10),
            c = this.params.data,
            d = $("#s" + this.params.id);
        a.trigger("show_site.g"), d.data("panel", c), a.trigger(c + ".paginate.g", [b, this.params.date])
    }), this.get("#/gauges/:id/:path", function () {
        var a = Gauges.sites[this.params.id];
        this.params.path == "overview" && a.setRecentTraffic(), a.trigger("show_panel.g", [this.params.path]), Gauges.meldSidebar()
    }), this.get("#/gauges/:id/code/:tab", function () {
        var a = Gauges.sites[this.params.id];
        a.trigger("show_panel.g", ["code"]), $("#site_content div.panel").hide(), $("#site_content ul.group_options li").removeClass("current"), $("#site_content div.panel." + this.params.tab).show(), $("#site_content ul.group_options li." + this.params.tab).addClass("current"), Gauges.meldSidebar()
    }), this.post("#/gauges/:id/shares", function () {
        var a = $(this.target).removeErrors(),
            b = a.find("button span"),
            c = Gauges.sites[this.params.id];
        clearTimeout(b.data("timeout")), b.data("text") === undefined && b.data("text", b.text()), b.text("..."), $.ajax({
            url: "/gauges/" + this.params.id + "/shares",
            dataType: "json",
            type: "post",
            data: {
                email: this.params.email
            },
            success: function (b) {
                c.trigger("update_sharing.g"), a.find("input").val("").focus()
            },
            error: function (b) {
                var c = $.parseJSON(b.responseText);
                a.displayErrors(c.errors)
            },
            complete: function () {
                b.text(b.data("text"))
            }
        })
    }), this.del("#/gauges/:site_id/shares/:id", function () {
        var a = $(this.target).removeErrors(),
            b = a.find(".submit button span"),
            c = Gauges.sites[this.params.site_id];
        clearTimeout(b.data("timeout")), b.data("text") === undefined && b.data("text", b.text()), b.text("Removing"), $.ajax({
            url: "/gauges/" + this.params.site_id + "/shares/" + this.params.id,
            dataType: "json",
            type: "delete",
            success: function (a) {
                c.shares = _.compact(_.map(c.shares, function (b) {
                    if (b.id != a.share.id) return b
                })), $("#sharing_list").html(ich.shared_users_template(c)).removeClass("loading")
            }
        })
    }), this.get("#/account", function () {
        $("body").removeClass("adding"), $.ajax({
            url: "/subscription",
            dataType: "json",
            success: function (a) {
                Gauges.subscription = new Subscription(a.subscription)
            }
        }), 
        $("#sites div.current").removeClass("current"), 
        $("#data").html(ich.account_template(Gauges.user)), 
        $('div.nav a[href="#/account"]').closest("li").addClass("current"), 
        $("#site_content").html(ich.my_info_template(Gauges.user))
    }), 
    this.get("#/account/plan", function () {
        $("body").removeClass("adding"), $("#sites div.current").removeClass("current"), $("#data").html(ich.account_template(Gauges.user)), $('div.nav a[href="#/account/plan"]').closest("li").addClass("current"), $("#site_content").html(ich.plan_template(Gauges.subscription))
    }), this.get("#/account/clients", function () {
        $("body").removeClass("adding"), $("#sites div.current").removeClass("current"), $("#data").html(ich.account_template(Gauges.user)), $('div.nav a[href="#/account/clients"]').closest("li").addClass("current"), $("#site_content").html(ich.clients_template(Gauges.user)), $("#site_content").find("input[title]").labelize(), Gauges.clients == null ? $.ajax({
            url: "/clients",
            dataType: "json",
            type: "get",
            success: function (a) {
                Gauges.clients = a.clients, $("#clients_list").removeClass("loading").html(ich.clients_list_template(Gauges))
            },
            error: function (a) {
                $("#clients_list").removeClass("loading").addClass("empty").text("Could not load API Keys")
            }
        }) : $("#clients_list").removeClass("loading").html(ich.clients_list_template(Gauges))
    }), this.post("#/account/clients", function () {
        var a = $(this.target).removeErrors(),
            b = a.find("button span");
        clearTimeout(b.data("timeout")), b.data("text") === undefined && b.data("text", b.text()), b.text("Creating..."), $.ajax({
            url: "/clients",
            dataType: "json",
            type: "post",
            data: {
                description: this.params.description
            },
            success: function (b) {
                Gauges.clients == null && (Gauges.clients = []), Gauges.clients.push(b.client), a.find("input[type=text]").val("").blur(), $("#clients_list").removeClass("loading").html(ich.clients_list_template(Gauges))
            },
            error: function (c) {
                var d = $.parseJSON(c.responseText);
                a.displayErrors(d.errors), b.text(b.data("text"))
            },
            complete: function () {
                b.text("Created"), setTimeout(function () {
                    b.text(b.data("text"))
                }, 2e3)
            }
        })
    }), this.del("#/account/clients/:key", function () {
        var a = $(this.target).removeErrors(),
            b = a.find("button span");
        clearTimeout(b.data("timeout")), b.data("text") === undefined && b.data("text", b.text()), b.text("Removing"), $.ajax({
            url: "/clients/" + this.params.key,
            dataType: "json",
            type: "delete",
            success: function (a) {
                Gauges.clients = _.compact(_.map(Gauges.clients, function (b) {
                    if (b.key != a.client.key) return b
                })), $("#clients_list").html(ich.clients_list_template(Gauges))
            }
        })
    }), this.get("#/account/summaries", function () {
        $("body").removeClass("adding"), $("#sites div.current").removeClass("current"), $("#data").html(ich.account_template(Gauges.user)), $('div.nav a[href="#/account/summaries"]').closest("li").addClass("current").siblings().removeClass("current"), $("#site_content").html(ich.summaries_template(Gauges.user)), $.ajax({
            url: "/me/summaries",
            dataType: "json",
            type: "get",
            success: function (a) {
                var b;
                for (var c in a.summaries) b = a.summaries[c], b.gauge = Gauges.sites[b.gauge_id], $("#site_summaries_list tbody").append(ich.site_summaries_list_template(b).data("model", b));
                new SummarySettings, $("#site_summaries_list").removeClass("loading")
            },
            error: function (a) {}
        })
    }), this.get("#/account/dashboard", function () {
        $("body").removeClass("adding"), $("#sites div.current").removeClass("current"), $("#data").html(ich.account_template(Gauges.user)), $('div.nav a[href="#/account/dashboard"]').closest("li").addClass("current").siblings().removeClass("current"), $("#site_content").html(ich.dashboard_settings_template()), $.ajax({
            url: "/me/dashboard",
            dataType: "json",
            type: "get",
            success: function (a) {
                for (var b in a.gauges) {
                    var c = a.gauges[b];
                    $("#dashboard_settings_list tbody").append(ich.dashboard_settings_list_template(c).data("model", c))
                }
                new DashboardSettings
            },
            complete: function () {
                $("#dashboard_settings_list").removeClass("loading")
            },
            error: function (a) {}
        })
    }), this.put("#/users", function () {
        var a = $(this.target).removeErrors(),
            b = a.find("p.submit button span");
        clearTimeout(b.data("timeout")), b.data("text") === undefined && b.data("text", b.text()), b.text("Updating Your Information"), $.ajax({
            url: "/me",
            dataType: "json",
            type: "put",
            data: {
                email: this.params.email,
                first_name: this.params.first_name,
                last_name: this.params.last_name,
                password: this.params.password
            },
            success: function (a) {
                Gauges.setUser({
                    user: a.user
                })
            },
            error: function (c) {
                var d = $.parseJSON(c.responseText);
                a.displayErrors(d.errors), b.text(b.data("text"))
            },
            complete: function () {
                b.text("Saved"), setTimeout(function () {
                    b.text(b.data("text"))
                }, 2e3)
            }
        })
    })
}),
    Gauges = Gauges || {};
$(function () {
    function a(a) {
        return a < 10 ? "0" + a : a
    }
    function b(b) {
        var c = "private-" + b.id;
        Gauges.pusher && _.include(_.keys(Gauges.pusher.channels.channels), c) === !1 && b.enabled && (b.channel = Gauges.pusher.subscribe(c), b.channel.bind("hit", function (c) {
            var d = new Date;
            c.title = b.separated_page_title(c.title), c.location = Gauges.location(c), c.url = "http://" + c.host + c.path, c.date = d, c.iso = d.getUTCFullYear() + "-" + a(d.getUTCMonth() + 1) + "-" + a(d.getUTCDate()) + "T" + a(d.getUTCHours()) + ":" + a(d.getUTCMinutes()) + ":" + a(d.getUTCSeconds()) + "Z", Gauges.incrementDates(), b.hit(c), b.trigger("hit.g", [c])
        }))
    }
    typeof Pusher != "undefined" && (Gauges.pusher = new Pusher(Gauges.pusher_key));
    if (Gauges.pusher) {
        var c = Gauges.pusher.subscribe(Gauges.environment + "-system"),
            d = "Press OK to refresh now. To finish what you are doing and refresh later, press Cancel.";
        c.bind("refresh", function (a) {
            var b = a.message || "We just pushed changes that require a browser refresh.";
            b += " " + d, confirm(b) && window.location.reload()
        }), Gauges.pusher.connection.bind("connected", function () {
            $("html").addClass("live"), $("li.live .status").text("on"), Gauges.connection_count > 0 && Gauges.refresh(), Gauges.connection_count++;
            for (id in Gauges.sites) b(Gauges.sites[id])
        }), Gauges.pusher.connection.bind("disconnected", function () {
            $("li.live .status").text("off"), $("html").removeClass("live");
            for (id in Gauges.sites) Gauges.sites[id].channel = !1
        }), Site.bind("setup.g", function () {
            b(this)
        })
    }
});
var browser_support = {
    "CSS Support": {
        "@font-face Web Fonts": {
            partial: {
                "Internet Explorer": 6
            },
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 9,
                Safari: 3.2,
                Opera: 10
            }
        },
        "Generated Content": {
            full: {
                Chrome: 4,
                Firefox: 2,
                "Internet Explorer": 8,
                Safari: 3.1,
                Opera: 9
            }
        },
        "CSS Gradients": {
            partial: {
                Chrome: 4,
                Safari: 4,
                Opera: 11.1
            },
            full: {
                Chrome: 10,
                Firefox: 3.6,
                "Internet Explorer": 10,
                Safari: 5.1,
                Opera: 11.6
            }
        },
        "display:table": {
            full: {
                Chrome: 4,
                Firefox: 2,
                "Internet Explorer": 8,
                Safari: 3.1,
                Opera: 9
            }
        },
        "Transforms: 3D": {
            full: {
                Chrome: 12,
                Firefox: 10,
                "Internet Explorer": 10,
                Safari: 4
            }
        },
        "CSS Animations": {
            full: {
                Chrome: 4,
                Firefox: 5,
                "Internet Explorer": 10,
                Safari: 4
            }
        },
        "Background Clip/Origin/Size": {
            partial: {
                Firefox: 3.6,
                Opera: 10,
                Safari: 3.1
            },
            full: {
                Chrome: 4,
                Firefox: 4,
                "Internet Explorer": 9,
                Safari: 5,
                Opera: 10.5
            }
        },
        "Border Images": {
            full: {
                Chrome: 4,
                Firefox: 3.5,
                Safari: 3.1,
                Opera: 10.5
            }
        },
        "Border Radius": {
            partial: {
                Firefox: 2
            },
            full: {
                Chrome: 4,
                Firefox: 3,
                "Internet Explorer": 9,
                Safari: 3.1,
                Opera: 10.5
            }
        },
        "Box Shadow": {
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 9,
                Safari: 3.1,
                Opera: 10.5
            }
        },
        "Box Sizing": {
            full: {
                Chrome: 4,
                Firefox: 2,
                "Internet Explorer": 8,
                Safari: 3.1,
                Opera: 9.5
            }
        },
        "Colors hsl(a)/rgba": {
            partial: {
                Firefox: 2,
                Opera: 9.5
            },
            full: {
                Chrome: 4,
                Firefox: 3,
                "Internet Explorer": 9,
                Safari: 3,
                Opera: 10
            }
        },
        "Media Queries": {
            partial: {
                Safari: 3.1
            },
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 9,
                Safari: 4,
                Opera: 9.5
            }
        },
        "Multiple Backgrounds": {
            full: {
                Chrome: 4,
                Firefox: 3.6,
                "Internet Explorer": 9,
                Safari: 3.1,
                Opera: 10.5
            }
        },
        "CSS Columns": {
            full: {
                Chrome: 4,
                Firefox: 2,
                "Internet Explorer": 10,
                Safari: 3.1,
                Opera: 11.1
            }
        },
        "CSS3 Selectors": {
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 9,
                Safari: 3.2,
                Opera: 9.5
            }
        },
        "Text Shadow": {
            partial: {
                Safari: 3.1
            },
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 10,
                Safari: 4,
                Opera: 9.5
            }
        },
        Transforms: {
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 9,
                Safari: 3.1,
                Opera: 10.5
            }
        },
        Transitions: {
            full: {
                Chrome: 4,
                Firefox: 4,
                "Internet Explorer": 10,
                Safari: 3.1,
                Opera: 10.5
            }
        },
        "Word Wrap": {
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 5.5,
                Safari: 3.1,
                Opera: 10.5
            }
        },
        "Flexible Box Module": {
            full: {
                Chrome: 4,
                Firefox: 2,
                "Internet Explorer": 10,
                Safari: 3.1
            }
        },
        "rem (root em) Units": {
            full: {
                Chrome: 6,
                Firefox: 3.6,
                "Internet Explorer": 9,
                Safari: 5,
                Opera: 11.6
            }
        }
    },
    HTML5: {
        "Audio Element": {
            partial: {
                Opera: 9.5
            },
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 9,
                Safari: 4,
                Opera: 10.5
            }
        },
        "Canvas Element": {
            full: {
                Chrome: 4,
                Firefox: 2,
                "Internet Explorer": 9,
                Safari: 3.1,
                Opera: 9
            }
        },
        "Canvas Text API": {
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 9,
                Safari: 4,
                Opera: 10.5
            }
        },
        "Datalist Element": {
            full: {
                Firefox: 4,
                "Internet Explorer": 10,
                Opera: 9
            }
        },
        "Drag and Drop": {
            full: {
                Chrome: 4,
                Safari: 3.1,
                Firefox: 3.5,
                "Internet Explorer": 5.5
            }
        },
        "Form Validation": {
            partial: {
                Safari: 5
            },
            full: {
                Chrome: 10,
                Firefox: 4,
                "Internet Explorer": 10,
                Opera: 10
            }
        },
        "New Semantic Elements": {
            partial: {
                Safari: 3.1,
                Chrome: 4,
                Firefox: 3,
                Opera: 9
            },
            full: {
                Chrome: 6,
                Firefox: 4,
                "Internet Explorer": 9,
                Opera: 11.1,
                Safari: 5
            }
        },
        "Offline Web Applications": {
            partial: {
                Firefox: 3
            },
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 10,
                Opera: 10.6,
                Safari: 4
            }
        },
        "Progress and Meter": {
            partial: {
                Firefox: 6,
                IE: 10
            },
            full: {
                Chrome: 8,
                Opera: 11
            }
        },
        "History State Management": {
            partial: {
                Safari: 5
            },
            full: {
                Chrome: 5,
                Firefox: 4,
                "Internet Explorer": 10,
                Opera: 11.5
            }
        },
        "Video Element": {
            full: {
                Chrome: 4,
                Firefox: 3.5,
                Safari: 4,
                Opera: 10.5,
                "Internet Explorer": 9
            }
        },
        "WebGL 3D Canvas Graphics": {
            partial: {
                Chrome: 8,
                Firefox: 4,
                Safari: 5.1,
                Opera: 12
            }
        }
    },
    JavaScript: {
        "dataset attribute": {
            full: {
                Chrome: 7,
                Firefox: 6,
                Safari: 5.1,
                Opera: 11.1
            }
        },
        "Blob URLs": {
            full: {
                Chrome: 8,
                Firefox: 4,
                "Internet Explorer": 10
            }
        },
        "Cross-Document postMessage": {
            partial: {
                "Internet Explorer": 8
            },
            full: {
                Chrome: 4,
                Firefox: 3,
                Safari: 4,
                Opera: 9.5
            }
        },
        "Cross-Origin Resource Sharing": {
            partial: {
                "Internet Explorer": 8
            },
            full: {
                Chrome: 4,
                Firefox: 3.5,
                Safari: 4,
                Opera: 12,
                "Internet Explorer": 10
            }
        },
        "File API": {
            partial: {
                "Internet Explorer": 10,
                Firefox: 3.6,
                Chrome: 6,
                Safari: 5.1,
                Opera: 11.1
            },
            full: {
                Chrome: 13
            }
        },
        "FileReader API": {
            full: {
                Chrome: 6,
                Firefox: 3.6,
                Opera: 11.1,
                "Internet Explorer": 10
            }
        },
        "Filesystem & FileWriter API": {
            partial: {
                Chrome: 8
            },
            full: {
                Chrome: 13
            }
        },
        Geolocation: {
            partial: {
                Chrome: 4
            },
            full: {
                Chrome: 5,
                Firefox: 3.5,
                Opera: 10.6,
                "Internet Explorer": 9,
                Safari: 5
            }
        },
        "Hashchange Event": {
            full: {
                Chrome: 5,
                Firefox: 3.6,
                Opera: 10.6,
                "Internet Explorer": 8,
                Safari: 5
            }
        },
        IndexedDB: {
            full: {
                Chrome: 11,
                Firefox: 4,
                "Internet Explorer": 10
            }
        },
        "JSON Parsing": {
            full: {
                Chrome: 4,
                Firefox: 3.5,
                Opera: 10.5,
                "Internet Explorer": 8,
                Safari: 4
            }
        },
        matchesSelector: {
            full: {
                Chrome: 4,
                Firefox: 3.6,
                Opera: 11.5,
                "Internet Explorer": 9,
                Safari: 5
            }
        },
        requestAnimationFrame: {
            full: {
                Chrome: 10,
                Firefox: 4,
                "Internet Explorer": 10
            }
        },
        "Web Workers": {
            full: {
                Chrome: 4,
                Safari: 4,
                Opera: 10.6,
                "Internet Explorer": 10,
                Firefox: 3.5
            }
        },
        "Web Workers (Shared)": {
            full: {
                Chrome: 4,
                Safari: 5,
                Opera: 10.6
            }
        },
        "Web Sockets": {
            partial: {
                Chrome: 4,
                Firefox: 4,
                Safari: 5,
                Opera: 11
            },
            full: {
                Chrome: 14,
                Firefox: 6,
                "Internet Explorer": 10
            }
        },
        "Key/Value Storage": {
            partial: {
                Firefox: 2
            },
            full: {
                Chrome: 4,
                Firefox: 3.5,
                "Internet Explorer": 8,
                Safari: 4,
                Opera: 10.5
            }
        }
    },
    "Video Formats": {
        "Ogg/Theora": {
            full: {
                Chrome: 4,
                Firefox: 3.5,
                Opera: 10.5
            }
        },
        "MPEG-4/H.264": {
            full: {
                "Internet Explorer": 9,
                Chrome: 4,
                Safari: 3.2
            }
        },
        "WebM/VP8": {
            full: {
                Firefox: 4,
                Chrome: 6,
                Opera: 10.6
            }
        }
    }
};
((function () {})).call(this);