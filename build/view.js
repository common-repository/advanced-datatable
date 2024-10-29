/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
(function ($$1) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
      'default': e
    };
  }
  var $__default = /*#__PURE__*/_interopDefaultLegacy($$1);

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
     Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
     THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    })(e, n);
  };
  function e(e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    function r() {
      this.constructor = e;
    }
    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  }
  var n = function () {
    return (n = Object.assign || function (t) {
      for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t;
    }).apply(this, arguments);
  };
  function r(t, e, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(t) {
        try {
          u(r.next(t));
        } catch (t) {
          i(t);
        }
      }
      function a(t) {
        try {
          u(r.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        var e;
        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
          t(e);
        })).then(s, a);
      }
      u((r = r.apply(t, e || [])).next());
    });
  }
  function o(t, e) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
    return i = {
      next: a(0),
      throw: a(1),
      return: a(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;
    function a(i) {
      return function (a) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; s;) try {
            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                return s.label++, {
                  value: i[1],
                  done: !1
                };
              case 5:
                s.label++, r = i[1], i = [0];
                continue;
              case 7:
                i = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                  s = 0;
                  continue;
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                  s.label = i[1];
                  break;
                }
                if (6 === i[0] && s.label < o[1]) {
                  s.label = o[1], o = i;
                  break;
                }
                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(i);
                  break;
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            i = e.call(t, s);
          } catch (t) {
            i = [6, t], r = 0;
          } finally {
            n = o = 0;
          }
          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, a]);
      };
    }
  }
  function i() {
    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
    var r = Array(t),
      o = 0;
    for (e = 0; e < n; e++) for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
    return r;
  }
  var s,
    a,
    u,
    l,
    p,
    c,
    h = {},
    f = [],
    d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function _(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function g(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function m(t, e, n) {
    var r,
      o,
      i,
      s = arguments,
      a = {};
    for (i in e) "key" == i ? r = e[i] : "ref" == i ? o = e[i] : a[i] = e[i];
    if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(s[i]);
    if (null != n && (a.children = n), "function" == typeof t && null != t.defaultProps) for (i in t.defaultProps) void 0 === a[i] && (a[i] = t.defaultProps[i]);
    return y(t, a, r, o, null);
  }
  function y(t, e, n, r, o) {
    var i = {
      type: t,
      props: e,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++s.__v : o
    };
    return null != s.vnode && s.vnode(i), i;
  }
  function b(t) {
    return t.children;
  }
  function w(t, e) {
    this.props = t, this.context = e;
  }
  function P(t, e) {
    if (null == e) return t.__ ? P(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var n; e < t.__k.length; e++) if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
    return "function" == typeof t.type ? P(t) : null;
  }
  function S(t) {
    var e, n;
    if (null != (t = t.__) && null != t.__c) {
      for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if (null != (n = t.__k[e]) && null != n.__e) {
        t.__e = t.__c.base = n.__e;
        break;
      }
      return S(t);
    }
  }
  function x(t) {
    (!t.__d && (t.__d = !0) && u.push(t) && !C.__r++ || p !== s.debounceRendering) && ((p = s.debounceRendering) || l)(C);
  }
  function C() {
    for (var t; C.__r = u.length;) t = u.sort(function (t, e) {
      return t.__v.__b - e.__v.__b;
    }), u = [], t.some(function (t) {
      var e, n, r, o, i, s;
      t.__d && (i = (o = (e = t).__v).__e, (s = e.__P) && (n = [], (r = _({}, o)).__v = o.__v + 1, R(s, o, r, e.__n, void 0 !== s.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? P(o) : i, o.__h), L(n, o), o.__e != i && S(o)));
    });
  }
  function k(t, e, n, r, o, i, s, a, u, l) {
    var p,
      c,
      d,
      _,
      g,
      m,
      v,
      w = r && r.__k || f,
      S = w.length;
    for (n.__k = [], p = 0; p < e.length; p++) if (null != (_ = n.__k[p] = null == (_ = e[p]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y(null, _, null, null, _) : Array.isArray(_) ? y(b, {
      children: _
    }, null, null, null) : _.__b > 0 ? y(_.type, _.props, _.key, null, _.__v) : _)) {
      if (_.__ = n, _.__b = n.__b + 1, null === (d = w[p]) || d && _.key == d.key && _.type === d.type) w[p] = void 0;else for (c = 0; c < S; c++) {
        if ((d = w[c]) && _.key == d.key && _.type === d.type) {
          w[c] = void 0;
          break;
        }
        d = null;
      }
      R(t, _, d = d || h, o, i, s, a, u, l), g = _.__e, (c = _.ref) && d.ref != c && (v || (v = []), d.ref && v.push(d.ref, null, _), v.push(c, _.__c || g, _)), null != g ? (null == m && (m = g), "function" == typeof _.type && null != _.__k && _.__k === d.__k ? _.__d = u = N(_, u, t) : u = E(t, _, d, w, g, u), l || "option" !== n.type ? "function" == typeof n.type && (n.__d = u) : t.value = "") : u && d.__e == u && u.parentNode != t && (u = P(d));
    }
    for (n.__e = m, p = S; p--;) null != w[p] && ("function" == typeof n.type && null != w[p].__e && w[p].__e == n.__d && (n.__d = P(r, p + 1)), U(w[p], w[p]));
    if (v) for (p = 0; p < v.length; p++) A(v[p], v[++p], v[++p]);
  }
  function N(t, e, n) {
    var r, o;
    for (r = 0; r < t.__k.length; r++) (o = t.__k[r]) && (o.__ = t, e = "function" == typeof o.type ? N(o, e, n) : E(n, o, o, t.__k, o.__e, e));
    return e;
  }
  function E(t, e, n, r, o, i) {
    var s, a, u;
    if (void 0 !== e.__d) s = e.__d, e.__d = void 0;else if (null == n || o != i || null == o.parentNode) t: if (null == i || i.parentNode !== t) t.appendChild(o), s = null;else {
      for (a = i, u = 0; (a = a.nextSibling) && u < r.length; u += 2) if (a == o) break t;
      t.insertBefore(o, i), s = i;
    }
    return void 0 !== s ? s : o.nextSibling;
  }
  function T(t, e, n) {
    "-" === e[0] ? t.setProperty(e, n) : t[e] = null == n ? "" : "number" != typeof n || d.test(e) ? n : n + "px";
  }
  function F(t, e, n, r, o) {
    var i;
    t: if ("style" === e) {
      if ("string" == typeof n) t.style.cssText = n;else {
        if ("string" == typeof r && (t.style.cssText = r = ""), r) for (e in r) n && e in n || T(t.style, e, "");
        if (n) for (e in n) r && n[e] === r[e] || T(t.style, e, n[e]);
      }
    } else if ("o" === e[0] && "n" === e[1]) i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r || t.addEventListener(e, i ? O : D, i) : t.removeEventListener(e, i ? O : D, i);else if ("dangerouslySetInnerHTML" !== e) {
      if (o) e = e.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== e && "list" !== e && "form" !== e && "tabIndex" !== e && "download" !== e && e in t) try {
        t[e] = null == n ? "" : n;
        break t;
      } catch (t) {}
      "function" == typeof n || (null != n && (!1 !== n || "a" === e[0] && "r" === e[1]) ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
  }
  function D(t) {
    this.l[t.type + !1](s.event ? s.event(t) : t);
  }
  function O(t) {
    this.l[t.type + !0](s.event ? s.event(t) : t);
  }
  function R(t, e, n, r, o, i, a, u, l) {
    var p,
      c,
      h,
      f,
      d,
      g,
      m,
      y,
      v,
      P,
      S,
      x = e.type;
    if (void 0 !== e.constructor) return null;
    null != n.__h && (l = n.__h, u = e.__e = n.__e, e.__h = null, i = [u]), (p = s.__b) && p(e);
    try {
      t: if ("function" == typeof x) {
        if (y = e.props, v = (p = x.contextType) && r[p.__c], P = p ? v ? v.props.value : p.__ : r, n.__c ? m = (c = e.__c = n.__c).__ = c.__E : ("prototype" in x && x.prototype.render ? e.__c = c = new x(y, P) : (e.__c = c = new w(y, P), c.constructor = x, c.render = j), v && v.sub(c), c.props = y, c.state || (c.state = {}), c.context = P, c.__n = r, h = c.__d = !0, c.__h = []), null == c.__s && (c.__s = c.state), null != x.getDerivedStateFromProps && (c.__s == c.state && (c.__s = _({}, c.__s)), _(c.__s, x.getDerivedStateFromProps(y, c.__s))), f = c.props, d = c.state, h) null == x.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(), null != c.componentDidMount && c.__h.push(c.componentDidMount);else {
          if (null == x.getDerivedStateFromProps && y !== f && null != c.componentWillReceiveProps && c.componentWillReceiveProps(y, P), !c.__e && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(y, c.__s, P) || e.__v === n.__v) {
            c.props = y, c.state = c.__s, e.__v !== n.__v && (c.__d = !1), c.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function (t) {
              t && (t.__ = e);
            }), c.__h.length && a.push(c);
            break t;
          }
          null != c.componentWillUpdate && c.componentWillUpdate(y, c.__s, P), null != c.componentDidUpdate && c.__h.push(function () {
            c.componentDidUpdate(f, d, g);
          });
        }
        c.context = P, c.props = y, c.state = c.__s, (p = s.__r) && p(e), c.__d = !1, c.__v = e, c.__P = t, p = c.render(c.props, c.state, c.context), c.state = c.__s, null != c.getChildContext && (r = _(_({}, r), c.getChildContext())), h || null == c.getSnapshotBeforeUpdate || (g = c.getSnapshotBeforeUpdate(f, d)), S = null != p && p.type === b && null == p.key ? p.props.children : p, k(t, Array.isArray(S) ? S : [S], e, n, r, o, i, a, u, l), c.base = e.__e, e.__h = null, c.__h.length && a.push(c), m && (c.__E = c.__ = null), c.__e = !1;
      } else null == i && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = I(n.__e, e, n, r, o, i, a, l);
      (p = s.diffed) && p(e);
    } catch (t) {
      e.__v = null, (l || null != i) && (e.__e = u, e.__h = !!l, i[i.indexOf(u)] = null), s.__e(t, e, n);
    }
  }
  function L(t, e) {
    s.__c && s.__c(e, t), t.some(function (e) {
      try {
        t = e.__h, e.__h = [], t.some(function (t) {
          t.call(e);
        });
      } catch (t) {
        s.__e(t, e.__v);
      }
    });
  }
  function I(t, e, n, r, o, i, s, a) {
    var u,
      l,
      p,
      c,
      d = n.props,
      _ = e.props,
      m = e.type,
      y = 0;
    if ("svg" === m && (o = !0), null != i) for (; y < i.length; y++) if ((u = i[y]) && (u === t || (m ? u.localName == m : 3 == u.nodeType))) {
      t = u, i[y] = null;
      break;
    }
    if (null == t) {
      if (null === m) return document.createTextNode(_);
      t = o ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, _.is && _), i = null, a = !1;
    }
    if (null === m) d === _ || a && t.data === _ || (t.data = _);else {
      if (i = i && f.slice.call(t.childNodes), l = (d = n.props || h).dangerouslySetInnerHTML, p = _.dangerouslySetInnerHTML, !a) {
        if (null != i) for (d = {}, c = 0; c < t.attributes.length; c++) d[t.attributes[c].name] = t.attributes[c].value;
        (p || l) && (p && (l && p.__html == l.__html || p.__html === t.innerHTML) || (t.innerHTML = p && p.__html || ""));
      }
      if (function (t, e, n, r, o) {
        var i;
        for (i in n) "children" === i || "key" === i || i in e || F(t, i, null, n[i], r);
        for (i in e) o && "function" != typeof e[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === e[i] || F(t, i, e[i], n[i], r);
      }(t, _, d, o, a), p) e.__k = [];else if (y = e.props.children, k(t, Array.isArray(y) ? y : [y], e, n, r, o && "foreignObject" !== m, i, s, t.firstChild, a), null != i) for (y = i.length; y--;) null != i[y] && g(i[y]);
      a || ("value" in _ && void 0 !== (y = _.value) && (y !== t.value || "progress" === m && !y) && F(t, "value", y, d.value, !1), "checked" in _ && void 0 !== (y = _.checked) && y !== t.checked && F(t, "checked", y, d.checked, !1));
    }
    return t;
  }
  function A(t, e, n) {
    try {
      "function" == typeof t ? t(e) : t.current = e;
    } catch (t) {
      s.__e(t, n);
    }
  }
  function U(t, e, n) {
    var r, o, i;
    if (s.unmount && s.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || A(r, null, e)), n || "function" == typeof t.type || (n = null != (o = t.__e)), t.__e = t.__d = void 0, null != (r = t.__c)) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount();
      } catch (t) {
        s.__e(t, e);
      }
      r.base = r.__P = null;
    }
    if (r = t.__k) for (i = 0; i < r.length; i++) r[i] && U(r[i], e, n);
    null != o && g(o);
  }
  function j(t, e, n) {
    return this.constructor(t, n);
  }
  function M(t, e, n) {
    var r, o, i;
    s.__ && s.__(t, e), o = (r = "function" == typeof n) ? null : n && n.__k || e.__k, i = [], R(e, t = (!r && n || e).__k = m(b, null, [t]), o || h, h, void 0 !== e.ownerSVGElement, !r && n ? [n] : o ? null : e.firstChild ? f.slice.call(e.childNodes) : null, i, !r && n ? n : o ? o.__e : e.firstChild, r), L(i, t);
  }
  function H() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var e = 16 * Math.random() | 0;
      return ("x" == t ? e : 3 & e | 8).toString(16);
    });
  }
  s = {
    __e: function (t, e) {
      for (var n, r, o; e = e.__;) if ((n = e.__c) && !n.__) try {
        if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(t)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(t), o = n.__d), o) return n.__E = n;
      } catch (e) {
        t = e;
      }
      throw t;
    },
    __v: 0
  }, a = function (t) {
    return null != t && void 0 === t.constructor;
  }, w.prototype.setState = function (t, e) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof t && (t = t(_({}, n), this.props)), t && _(n, t), null != t && this.__v && (e && this.__h.push(e), x(this));
  }, w.prototype.forceUpdate = function (t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), x(this));
  }, w.prototype.render = b, u = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, C.__r = 0, c = 0;
  var W = function () {
    function t(t) {
      this._id = t || H();
    }
    return Object.defineProperty(t.prototype, "id", {
      get: function () {
        return this._id;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }();
  var B = {
      search: {
        placeholder: "Type a keyword..."
      },
      sort: {
        sortAsc: "Sort column ascending",
        sortDesc: "Sort column descending"
      },
      pagination: {
        previous: "Previous",
        next: "Next",
        navigate: function (t, e) {
          return "Page " + t + " of " + e;
        },
        page: function (t) {
          return "Page " + t;
        },
        showing: "Showing",
        of: "of",
        to: "to",
        results: "results"
      },
      loading: "Loading...",
      noRecordsFound: "No matching records found",
      error: "An error happened while fetching the data"
    },
    z = function () {
      function t(t) {
        this._language = t, this._defaultLanguage = B;
      }
      return t.prototype.getString = function (t, e) {
        if (!e || !t) return null;
        var n = t.split("."),
          r = n[0];
        if (e[r]) {
          var o = e[r];
          return "string" == typeof o ? function () {
            return o;
          } : "function" == typeof o ? o : this.getString(n.slice(1).join("."), o);
        }
        return null;
      }, t.prototype.translate = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var r,
          o = this.getString(t, this._language);
        return (r = o || this.getString(t, this._defaultLanguage)) ? r.apply(void 0, e) : t;
      }, t;
    }();
  var q = function (t) {
      function n(e, n) {
        var r,
          o = t.call(this, e, n) || this;
        return o.config = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e.length ? t[e[0]].props.value : null;
        }(n), o.config && (o._ = (r = o.config.translator, function (t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          return r.translate.apply(r, i([t], e));
        })), o;
      }
      return e(n, t), n;
    }(w),
    G = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.render = function () {
        return m(this.props.parentElement, {
          dangerouslySetInnerHTML: {
            __html: this.props.content
          }
        });
      }, n.defaultProps = {
        parentElement: "span"
      }, n;
    }(q);
  function X(t, e) {
    return m(G, {
      content: t,
      parentElement: e
    });
  }
  var $ = function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return n.update(e), n;
      }
      return e(n, t), n.prototype.cast = function (t) {
        return t instanceof HTMLElement ? X(t.outerHTML) : t;
      }, n.prototype.update = function (t) {
        return this.data = this.cast(t), this;
      }, n;
    }(W),
    K = function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return n.cells = e || [], n;
      }
      return e(n, t), n.prototype.cell = function (t) {
        return this._cells[t];
      }, Object.defineProperty(n.prototype, "cells", {
        get: function () {
          return this._cells;
        },
        set: function (t) {
          this._cells = t;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.toArray = function () {
        return this.cells.map(function (t) {
          return t.data;
        });
      }, n.fromCells = function (t) {
        return new n(t.map(function (t) {
          return new $(t.data);
        }));
      }, Object.defineProperty(n.prototype, "length", {
        get: function () {
          return this.cells.length;
        },
        enumerable: !1,
        configurable: !0
      }), n;
    }(W);
  var V = function (t) {
    function n(e) {
      var n = t.call(this) || this;
      return n.rows = e instanceof Array ? e : e instanceof K ? [e] : [], n;
    }
    return e(n, t), Object.defineProperty(n.prototype, "rows", {
      get: function () {
        return this._rows;
      },
      set: function (t) {
        this._rows = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "length", {
      get: function () {
        return this._length || this.rows.length;
      },
      set: function (t) {
        this._length = t;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.toArray = function () {
      return this.rows.map(function (t) {
        return t.toArray();
      });
    }, n.fromRows = function (t) {
      return new n(t.map(function (t) {
        return K.fromCells(t.cells);
      }));
    }, n.fromArray = function (t) {
      return new n((t = function (t) {
        return !t[0] || t[0] instanceof Array ? t : [t];
      }(t)).map(function (t) {
        return new K(t.map(function (t) {
          return new $(t);
        }));
      }));
    }, n;
  }(W);
  var Y,
    Z = function () {
      function t() {}
      return t.prototype.init = function (t) {
        this.callbacks || (this.callbacks = {}), t && !this.callbacks[t] && (this.callbacks[t] = []);
      }, t.prototype.on = function (t, e) {
        return this.init(t), this.callbacks[t].push(e), this;
      }, t.prototype.off = function (t, e) {
        var n = t;
        return this.init(), this.callbacks[n] && 0 !== this.callbacks[n].length ? (this.callbacks[n] = this.callbacks[n].filter(function (t) {
          return t != e;
        }), this) : this;
      }, t.prototype.emit = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var r = t;
        return this.init(r), this.callbacks[r].length > 0 && (this.callbacks[r].forEach(function (t) {
          return t.apply(void 0, e);
        }), !0);
      }, t;
    }();
  !function (t) {
    t[t.Initiator = 0] = "Initiator", t[t.ServerFilter = 1] = "ServerFilter", t[t.ServerSort = 2] = "ServerSort", t[t.ServerLimit = 3] = "ServerLimit", t[t.Extractor = 4] = "Extractor", t[t.Transformer = 5] = "Transformer", t[t.Filter = 6] = "Filter", t[t.Sort = 7] = "Sort", t[t.Limit = 8] = "Limit";
  }(Y || (Y = {}));
  var J = function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return n._props = {}, n.id = H(), e && n.setProps(e), n;
      }
      return e(n, t), n.prototype.process = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.validateProps instanceof Function && this.validateProps.apply(this, t), this.emit.apply(this, i(["beforeProcess"], t));
        var n = this._process.apply(this, t);
        return this.emit.apply(this, i(["afterProcess"], t)), n;
      }, n.prototype.setProps = function (t) {
        return Object.assign(this._props, t), this.emit("propsUpdated", this), this;
      }, Object.defineProperty(n.prototype, "props", {
        get: function () {
          return this._props;
        },
        enumerable: !1,
        configurable: !0
      }), n;
    }(Z),
    Q = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), Object.defineProperty(n.prototype, "type", {
        get: function () {
          return Y.Filter;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype._process = function (t) {
        return this.props.keyword ? (e = String(this.props.keyword).trim(), n = t, r = this.props.selector, e = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), new V(n.rows.filter(function (t, n) {
          return t.cells.some(function (t, o) {
            if (!t) return !1;
            var i = "";
            if ("function" == typeof r) i = r(t.data, n, o);else if ("object" == typeof t.data) {
              var s = t.data;
              s && s.props && s.props.content && (i = s.props.content);
            } else i = String(t.data);
            return new RegExp(e, "gi").test(i);
          });
        }))) : t;
        var e, n, r;
      }, n;
    }(J);
  function tt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = "gridjs";
    return "" + n + t.reduce(function (t, e) {
      return t + "-" + e;
    }, "");
  }
  function et() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return t.filter(function (t) {
      return t;
    }).reduce(function (t, e) {
      return (t || "") + " " + e;
    }, "").trim() || null;
  }
  var nt,
    rt = function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return n.dispatcher = e, n._state = n.getInitialState(), e.register(n._handle.bind(n)), n;
      }
      return e(n, t), n.prototype._handle = function (t) {
        this.handle(t.type, t.payload);
      }, n.prototype.setState = function (t) {
        var e = this._state;
        this._state = t, this.emit("updated", t, e);
      }, Object.defineProperty(n.prototype, "state", {
        get: function () {
          return this._state;
        },
        enumerable: !1,
        configurable: !0
      }), n;
    }(Z),
    ot = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.getInitialState = function () {
        return {
          keyword: null
        };
      }, n.prototype.handle = function (t, e) {
        if ("SEARCH_KEYWORD" === t) {
          var n = e.keyword;
          this.search(n);
        }
      }, n.prototype.search = function (t) {
        this.setState({
          keyword: t
        });
      }, n;
    }(rt),
    it = function () {
      function t(t) {
        this.dispatcher = t;
      }
      return t.prototype.dispatch = function (t, e) {
        this.dispatcher.dispatch({
          type: t,
          payload: e
        });
      }, t;
    }(),
    st = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.search = function (t) {
        this.dispatch("SEARCH_KEYWORD", {
          keyword: t
        });
      }, n;
    }(it),
    at = function (t) {
      function r() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(r, t), Object.defineProperty(r.prototype, "type", {
        get: function () {
          return Y.ServerFilter;
        },
        enumerable: !1,
        configurable: !0
      }), r.prototype._process = function (t) {
        if (!this.props.keyword) return t;
        var e = {};
        return this.props.url && (e.url = this.props.url(t.url, this.props.keyword)), this.props.body && (e.body = this.props.body(t.body, this.props.keyword)), n(n({}, t), e);
      }, r;
    }(J),
    ut = new (function () {
      function t() {}
      return t.prototype.format = function (t, e) {
        return "[Grid.js] [" + e.toUpperCase() + "]: " + t;
      }, t.prototype.error = function (t, e) {
        void 0 === e && (e = !1);
        var n = this.format(t, "error");
        if (e) throw Error(n);
        console.error(n);
      }, t.prototype.warn = function (t) {
        console.warn(this.format(t, "warn"));
      }, t.prototype.info = function (t) {
        console.info(this.format(t, "info"));
      }, t;
    }())(),
    lt = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n;
    }(q);
  !function (t) {
    t[t.Header = 0] = "Header", t[t.Footer = 1] = "Footer", t[t.Cell = 2] = "Cell";
  }(nt || (nt = {}));
  var pt = function () {
      function t() {
        this.plugins = [];
      }
      return t.prototype.get = function (t) {
        var e = this.plugins.filter(function (e) {
          return e.id === t;
        });
        return e.length > 0 ? e[0] : null;
      }, t.prototype.add = function (t) {
        return t.id ? null !== this.get(t.id) ? (ut.error("Duplicate plugin ID: " + t.id), this) : (this.plugins.push(t), this) : (ut.error("Plugin ID cannot be empty"), this);
      }, t.prototype.remove = function (t) {
        return this.plugins.splice(this.plugins.indexOf(this.get(t)), 1), this;
      }, t.prototype.list = function (t) {
        return (null != t || null != t ? this.plugins.filter(function (e) {
          return e.position === t;
        }) : this.plugins).sort(function (t, e) {
          return t.order - e.order;
        });
      }, t;
    }(),
    ct = function (t) {
      function r() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(r, t), r.prototype.render = function () {
        var t = this;
        if (this.props.pluginId) {
          var e = this.config.plugin.get(this.props.pluginId);
          return e ? m(b, {}, m(e.component, n(n({
            plugin: e
          }, e.props), this.props.props))) : null;
        }
        return void 0 !== this.props.position ? m(b, {}, this.config.plugin.list(this.props.position).map(function (e) {
          return m(e.component, n(n({
            plugin: e
          }, e.props), t.props.props));
        })) : null;
      }, r;
    }(q),
    ht = function (t) {
      function n(e, n) {
        var r = t.call(this, e, n) || this;
        r.actions = new st(r.config.dispatcher), r.store = new ot(r.config.dispatcher);
        var o = e.enabled,
          i = e.keyword;
        if (o) {
          i && r.actions.search(i), r.storeUpdatedFn = r.storeUpdated.bind(r), r.store.on("updated", r.storeUpdatedFn);
          var s = void 0;
          s = e.server ? new at({
            keyword: e.keyword,
            url: e.server.url,
            body: e.server.body
          }) : new Q({
            keyword: e.keyword,
            selector: e.selector
          }), r.searchProcessor = s, r.config.pipeline.register(s);
        }
        return r;
      }
      return e(n, t), n.prototype.componentWillUnmount = function () {
        this.config.pipeline.unregister(this.searchProcessor), this.store.off("updated", this.storeUpdatedFn);
      }, n.prototype.storeUpdated = function (t) {
        this.searchProcessor.setProps({
          keyword: t.keyword
        });
      }, n.prototype.onChange = function (t) {
        var e = t.target.value;
        this.actions.search(e);
      }, n.prototype.render = function () {
        if (!this.props.enabled) return null;
        var t,
          e,
          n,
          r = this.onChange.bind(this);
        return this.searchProcessor instanceof at && (t = r, e = this.props.debounceTimeout, r = function () {
          for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
          return new Promise(function (o) {
            n && clearTimeout(n), n = setTimeout(function () {
              return o(t.apply(void 0, r));
            }, e);
          });
        }), m("div", {
          className: tt(et("search", this.config.className.search))
        }, m("input", {
          type: "search",
          placeholder: this._("search.placeholder"),
          "aria-label": this._("search.placeholder"),
          onInput: r,
          className: et(tt("input"), tt("search", "input")),
          value: this.store.state.keyword
        }));
      }, n.defaultProps = {
        debounceTimeout: 250
      }, n;
    }(lt),
    ft = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.validateProps = function () {
        if (isNaN(Number(this.props.limit)) || isNaN(Number(this.props.page))) throw Error("Invalid parameters passed");
      }, Object.defineProperty(n.prototype, "type", {
        get: function () {
          return Y.Limit;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype._process = function (t) {
        var e = this.props.page,
          n = e * this.props.limit,
          r = (e + 1) * this.props.limit;
        return new V(t.rows.slice(n, r));
      }, n;
    }(J),
    dt = function (t) {
      function r() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(r, t), Object.defineProperty(r.prototype, "type", {
        get: function () {
          return Y.ServerLimit;
        },
        enumerable: !1,
        configurable: !0
      }), r.prototype._process = function (t) {
        var e = {};
        return this.props.url && (e.url = this.props.url(t.url, this.props.page, this.props.limit)), this.props.body && (e.body = this.props.body(t.body, this.props.page, this.props.limit)), n(n({}, t), e);
      }, r;
    }(J),
    _t = function (t) {
      function n(e, n) {
        var r = t.call(this, e, n) || this;
        return r.state = {
          limit: e.limit,
          page: e.page || 0,
          total: 0
        }, r;
      }
      return e(n, t), n.prototype.componentWillMount = function () {
        var t = this;
        if (this.props.enabled) {
          var e = void 0;
          this.setTotalFromTabularFn = this.setTotalFromTabular.bind(this), this.props.server ? (e = new dt({
            limit: this.state.limit,
            page: this.state.page,
            url: this.props.server.url,
            body: this.props.server.body
          }), this.config.pipeline.on("afterProcess", this.setTotalFromTabularFn)) : (e = new ft({
            limit: this.state.limit,
            page: this.state.page
          })).on("beforeProcess", this.setTotalFromTabularFn), this.processor = e, this.config.pipeline.register(e), this.config.pipeline.on("error", function () {
            t.setState({
              total: 0,
              page: 0
            });
          });
        }
      }, n.prototype.setTotalFromTabular = function (t) {
        this.setTotal(t.length);
      }, n.prototype.onUpdate = function (t) {
        this.props.resetPageOnUpdate && t !== this.processor && this.setPage(0);
      }, n.prototype.componentDidMount = function () {
        this.onUpdateFn = this.onUpdate.bind(this), this.config.pipeline.on("updated", this.onUpdateFn);
      }, n.prototype.componentWillUnmount = function () {
        this.config.pipeline.unregister(this.processor), this.config.pipeline.off("updated", this.onUpdateFn);
      }, Object.defineProperty(n.prototype, "pages", {
        get: function () {
          return Math.ceil(this.state.total / this.state.limit);
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.setPage = function (t) {
        if (t >= this.pages || t < 0 || t === this.state.page) return null;
        this.setState({
          page: t
        }), this.processor.setProps({
          page: t
        });
      }, n.prototype.setTotal = function (t) {
        this.setState({
          total: t
        });
      }, n.prototype.renderPages = function () {
        var t = this;
        if (this.props.buttonsCount <= 0) return null;
        var e = Math.min(this.pages, this.props.buttonsCount),
          n = Math.min(this.state.page, Math.floor(e / 2));
        return this.state.page + Math.floor(e / 2) >= this.pages && (n = e - (this.pages - this.state.page)), m(b, null, this.pages > e && this.state.page - n > 0 && m(b, null, m("button", {
          tabIndex: 0,
          role: "button",
          onClick: this.setPage.bind(this, 0),
          title: this._("pagination.firstPage"),
          "aria-label": this._("pagination.firstPage"),
          className: this.config.className.paginationButton
        }, this._("1")), m("button", {
          tabIndex: -1,
          className: et(tt("spread"), this.config.className.paginationButton)
        }, "...")), Array.from(Array(e).keys()).map(function (e) {
          return t.state.page + (e - n);
        }).map(function (e) {
          return m("button", {
            tabIndex: 0,
            role: "button",
            onClick: t.setPage.bind(t, e),
            className: et(t.state.page === e ? et(tt("currentPage"), t.config.className.paginationButtonCurrent) : null, t.config.className.paginationButton),
            title: t._("pagination.page", e + 1),
            "aria-label": t._("pagination.page", e + 1)
          }, t._("" + (e + 1)));
        }), this.pages > e && this.pages > this.state.page + n + 1 && m(b, null, m("button", {
          tabIndex: -1,
          className: et(tt("spread"), this.config.className.paginationButton)
        }, "..."), m("button", {
          tabIndex: 0,
          role: "button",
          onClick: this.setPage.bind(this, this.pages - 1),
          title: this._("pagination.page", this.pages),
          "aria-label": this._("pagination.page", this.pages),
          className: this.config.className.paginationButton
        }, this._("" + this.pages))));
      }, n.prototype.renderSummary = function () {
        return m(b, null, this.props.summary && this.state.total > 0 && m("div", {
          role: "status",
          "aria-live": "polite",
          className: et(tt("summary"), this.config.className.paginationSummary),
          title: this._("pagination.navigate", this.state.page + 1, this.pages)
        }, this._("pagination.showing"), " ", m("b", null, this._("" + (this.state.page * this.state.limit + 1))), " ", this._("pagination.to"), " ", m("b", null, this._("" + Math.min((this.state.page + 1) * this.state.limit, this.state.total))), " ", this._("pagination.of"), " ", m("b", null, this._("" + this.state.total)), " ", this._("pagination.results")));
      }, n.prototype.render = function () {
        return this.props.enabled ? m("div", {
          className: et(tt("pagination"), this.config.className.pagination)
        }, this.renderSummary(), m("div", {
          className: tt("pages")
        }, this.props.prevButton && m("button", {
          tabIndex: 0,
          role: "button",
          disabled: 0 === this.state.page,
          onClick: this.setPage.bind(this, this.state.page - 1),
          title: this._("pagination.previous"),
          "aria-label": this._("pagination.previous"),
          className: et(this.config.className.paginationButton, this.config.className.paginationButtonPrev)
        }, this._("pagination.previous")), this.renderPages(), this.props.nextButton && m("button", {
          tabIndex: 0,
          role: "button",
          disabled: this.pages === this.state.page + 1 || 0 === this.pages,
          onClick: this.setPage.bind(this, this.state.page + 1),
          title: this._("pagination.next"),
          "aria-label": this._("pagination.next"),
          className: et(this.config.className.paginationButton, this.config.className.paginationButtonNext)
        }, this._("pagination.next")))) : null;
      }, n.defaultProps = {
        summary: !0,
        nextButton: !0,
        prevButton: !0,
        buttonsCount: 3,
        limit: 10,
        resetPageOnUpdate: !0
      }, n;
    }(lt);
  function gt(t, e) {
    return "string" == typeof t ? t.indexOf("%") > -1 ? e / 100 * parseInt(t, 10) : parseInt(t, 10) : t;
  }
  function mt(t) {
    return t ? Math.floor(t) + "px" : "";
  }
  var yt = function (t) {
    function r(e, n) {
      var r = t.call(this, e, n) || this,
        o = r.props.tableRef;
      return r.tableElement = o.current.base.cloneNode(!0), r.tableElement.style.position = "absolute", r.tableElement.style.width = "100%", r.tableElement.style.zIndex = "-2147483640", r.tableElement.style.visibility = "hidden", r.tableClassName = r.tableElement.className, r.tableStyle = r.tableElement.style.cssText, r;
    }
    return e(r, t), r.prototype.widths = function () {
      this.tableElement.className = this.tableClassName + " " + tt("shadowTable"), this.tableElement.style.tableLayout = "auto", this.tableElement.style.width = "auto", this.tableElement.style.padding = "0", this.tableElement.style.margin = "0", this.tableElement.style.border = "none", this.tableElement.style.outline = "none";
      var t = Array.from(this.base.parentNode.querySelectorAll("thead th")).reduce(function (t, e) {
        var r;
        return e.style.width = e.clientWidth + "px", n(((r = {})[e.getAttribute("data-column-id")] = {
          minWidth: e.clientWidth
        }, r), t);
      }, {});
      return this.tableElement.className = this.tableClassName, this.tableElement.style.cssText = this.tableStyle, this.tableElement.style.tableLayout = "auto", t = Array.from(this.base.parentNode.querySelectorAll("thead th")).reduce(function (t, e) {
        return t[e.getAttribute("data-column-id")].width = e.clientWidth, t;
      }, t);
    }, r.prototype.render = function () {
      var t = this;
      return this.props.tableRef.current ? m("div", {
        ref: function (e) {
          e && e.appendChild(t.tableElement);
        }
      }) : null;
    }, r;
  }(q);
  function vt(t) {
    if (!t) return "";
    var e = t.split(" ");
    return 1 === e.length && /([a-z][A-Z])+/g.test(t) ? t : e.map(function (t, e) {
      return 0 == e ? t.toLowerCase() : t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
    }).join("");
  }
  var bt,
    wt = function (t) {
      function r() {
        var e = t.call(this) || this;
        return e._columns = [], e;
      }
      return e(r, t), Object.defineProperty(r.prototype, "columns", {
        get: function () {
          return this._columns;
        },
        set: function (t) {
          this._columns = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "visibleColumns", {
        get: function () {
          return this._columns.filter(function (t) {
            return !t.hidden;
          });
        },
        enumerable: !1,
        configurable: !0
      }), r.prototype.adjustWidth = function (t) {
        var e = t.container,
          n = t.tableRef,
          o = t.tempRef,
          i = t.tempRef || !0;
        if (!e) return this;
        var s = e.clientWidth,
          a = {
            current: null
          },
          u = {};
        if (n.current && i) {
          var l = m(yt, {
            tableRef: n
          });
          l.ref = a, M(l, o.current), u = a.current.widths();
        }
        for (var p = 0, c = r.tabularFormat(this.columns).reduce(function (t, e) {
            return t.concat(e);
          }, []); p < c.length; p++) {
          var h = c[p];
          h.columns && h.columns.length > 0 || (!h.width && i ? h.id in u && (h.width = mt(u[h.id].width), h.minWidth = mt(u[h.id].minWidth)) : h.width = mt(gt(h.width, s)));
        }
        return n.current && i && M(null, o.current), this;
      }, r.prototype.setSort = function (t, e) {
        for (var r = 0, o = e || this.columns || []; r < o.length; r++) {
          var i = o[r];
          i.columns && i.columns.length > 0 && (i.sort = {
            enabled: !1
          }), void 0 === i.sort && t.sort && (i.sort = {
            enabled: !0
          }), i.sort ? "object" == typeof i.sort && (i.sort = n({
            enabled: !0
          }, i.sort)) : i.sort = {
            enabled: !1
          }, i.columns && this.setSort(t, i.columns);
        }
      }, r.prototype.setFixedHeader = function (t, e) {
        for (var n = 0, r = e || this.columns || []; n < r.length; n++) {
          var o = r[n];
          void 0 === o.fixedHeader && (o.fixedHeader = t.fixedHeader), o.columns && this.setFixedHeader(t, o.columns);
        }
      }, r.prototype.setResizable = function (t, e) {
        for (var n = 0, r = e || this.columns || []; n < r.length; n++) {
          var o = r[n];
          void 0 === o.resizable && (o.resizable = t.resizable), o.columns && this.setResizable(t, o.columns);
        }
      }, r.prototype.setID = function (t) {
        for (var e = 0, n = t || this.columns || []; e < n.length; e++) {
          var r = n[e];
          r.id || "string" != typeof r.name || (r.id = vt(r.name)), r.id || ut.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'), r.columns && this.setID(r.columns);
        }
      }, r.prototype.populatePlugins = function (t, e) {
        for (var r = 0, o = e; r < o.length; r++) {
          var i = o[r];
          void 0 !== i.plugin && t.plugin.add(n(n({
            id: i.id,
            props: {}
          }, i.plugin), {
            position: nt.Cell
          }));
        }
      }, r.fromColumns = function (t) {
        for (var e = new r(), n = 0, o = t; n < o.length; n++) {
          var i = o[n];
          if ("string" == typeof i || a(i)) e.columns.push({
            name: i
          });else if ("object" == typeof i) {
            var s = i;
            s.columns && (s.columns = r.fromColumns(s.columns).columns), "object" == typeof s.plugin && void 0 === s.data && (s.data = null), e.columns.push(i);
          }
        }
        return e;
      }, r.fromUserConfig = function (t) {
        var e = new r();
        return t.from ? e.columns = r.fromHTMLTable(t.from).columns : t.columns ? e.columns = r.fromColumns(t.columns).columns : !t.data || "object" != typeof t.data[0] || t.data[0] instanceof Array || (e.columns = Object.keys(t.data[0]).map(function (t) {
          return {
            name: t
          };
        })), e.columns.length ? (e.setID(), e.setSort(t), e.setFixedHeader(t), e.setResizable(t), e.populatePlugins(t, e.columns), e) : null;
      }, r.fromHTMLTable = function (t) {
        for (var e = new r(), n = 0, o = t.querySelector("thead").querySelectorAll("th"); n < o.length; n++) {
          var i = o[n];
          e.columns.push({
            name: i.innerHTML,
            width: i.width
          });
        }
        return e;
      }, r.tabularFormat = function (t) {
        var e = [],
          n = t || [],
          r = [];
        if (n && n.length) {
          e.push(n);
          for (var o = 0, i = n; o < i.length; o++) {
            var s = i[o];
            s.columns && s.columns.length && (r = r.concat(s.columns));
          }
          r.length && (e = e.concat(this.tabularFormat(r)));
        }
        return e;
      }, r.leafColumns = function (t) {
        var e = [],
          n = t || [];
        if (n && n.length) for (var r = 0, o = n; r < o.length; r++) {
          var i = o[r];
          i.columns && 0 !== i.columns.length || e.push(i), i.columns && (e = e.concat(this.leafColumns(i.columns)));
        }
        return e;
      }, r.maximumDepth = function (t) {
        return this.tabularFormat([t]).length - 1;
      }, r;
    }(W),
    Pt = function () {
      function t() {
        this._callbacks = {}, this._isDispatching = !1, this._isHandled = {}, this._isPending = {}, this._lastID = 1;
      }
      return t.prototype.register = function (t) {
        var e = "ID_" + this._lastID++;
        return this._callbacks[e] = t, e;
      }, t.prototype.unregister = function (t) {
        if (!this._callbacks[t]) throw Error("Dispatcher.unregister(...): " + t + " does not map to a registered callback.");
        delete this._callbacks[t];
      }, t.prototype.waitFor = function (t) {
        if (!this._isDispatching) throw Error("Dispatcher.waitFor(...): Must be invoked while dispatching.");
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if (this._isPending[n]) {
            if (!this._isHandled[n]) throw Error("Dispatcher.waitFor(...): Circular dependency detected while ' +\n            'waiting for " + n + ".");
          } else {
            if (!this._callbacks[n]) throw Error("Dispatcher.waitFor(...): " + n + " does not map to a registered callback.");
            this._invokeCallback(n);
          }
        }
      }, t.prototype.dispatch = function (t) {
        if (this._isDispatching) throw Error("Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");
        this._startDispatching(t);
        try {
          for (var e in this._callbacks) this._isPending[e] || this._invokeCallback(e);
        } finally {
          this._stopDispatching();
        }
      }, t.prototype.isDispatching = function () {
        return this._isDispatching;
      }, t.prototype._invokeCallback = function (t) {
        this._isPending[t] = !0, this._callbacks[t](this._pendingPayload), this._isHandled[t] = !0;
      }, t.prototype._startDispatching = function (t) {
        for (var e in this._callbacks) this._isPending[e] = !1, this._isHandled[e] = !1;
        this._pendingPayload = t, this._isDispatching = !0;
      }, t.prototype._stopDispatching = function () {
        delete this._pendingPayload, this._isDispatching = !1;
      }, t;
    }(),
    St = function () {},
    xt = function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return n.set(e), n;
      }
      return e(n, t), n.prototype.get = function () {
        return r(this, void 0, void 0, function () {
          var t;
          return o(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.data()];
              case 1:
                return [2, {
                  data: t = e.sent(),
                  total: t.length
                }];
            }
          });
        });
      }, n.prototype.set = function (t) {
        return t instanceof Array ? this.data = function () {
          return t;
        } : t instanceof Function && (this.data = t), this;
      }, n;
    }(St),
    Ct = function (t) {
      function r(e) {
        var n = t.call(this) || this;
        return n.options = e, n;
      }
      return e(r, t), r.prototype.handler = function (t) {
        return "function" == typeof this.options.handle ? this.options.handle(t) : t.ok ? t.json() : (ut.error("Could not fetch data: " + t.status + " - " + t.statusText, !0), null);
      }, r.prototype.get = function (t) {
        var e = n(n({}, this.options), t);
        return "function" == typeof e.data ? e.data(e) : fetch(e.url, e).then(this.handler.bind(this)).then(function (t) {
          return {
            data: e.then(t),
            total: "function" == typeof e.total ? e.total(t) : void 0
          };
        });
      }, r;
    }(St),
    kt = function () {
      function t() {}
      return t.createFromUserConfig = function (t) {
        var e = null;
        return t.data && (e = new xt(t.data)), t.from && (e = new xt(this.tableElementToArray(t.from)), t.from.style.display = "none"), t.server && (e = new Ct(t.server)), e || ut.error("Could not determine the storage type", !0), e;
      }, t.tableElementToArray = function (t) {
        for (var e, n = [], r = 0, o = t.querySelector("tbody").querySelectorAll("tr"); r < o.length; r++) {
          for (var i = [], s = 0, a = o[r].querySelectorAll("td"); s < a.length; s++) {
            var u = a[s];
            1 === u.childNodes.length && u.childNodes[0].nodeType === Node.TEXT_NODE ? i.push((e = u.innerHTML, new DOMParser().parseFromString(e, "text/html").documentElement.textContent)) : i.push(X(u.innerHTML));
          }
          n.push(i);
        }
        return n;
      }, t;
    }(),
    Nt = function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return n._steps = new Map(), n.cache = new Map(), n.lastProcessorIndexUpdated = -1, e && e.forEach(function (t) {
          return n.register(t);
        }), n;
      }
      return e(n, t), n.prototype.clearCache = function () {
        this.cache = new Map(), this.lastProcessorIndexUpdated = -1;
      }, n.prototype.register = function (t, e) {
        if (void 0 === e && (e = null), null === t.type) throw Error("Processor type is not defined");
        t.on("propsUpdated", this.processorPropsUpdated.bind(this)), this.addProcessorByPriority(t, e), this.afterRegistered(t);
      }, n.prototype.unregister = function (t) {
        if (t) {
          var e = this._steps.get(t.type);
          e && e.length && (this._steps.set(t.type, e.filter(function (e) {
            return e != t;
          })), this.emit("updated", t));
        }
      }, n.prototype.addProcessorByPriority = function (t, e) {
        var n = this._steps.get(t.type);
        if (!n) {
          var r = [];
          this._steps.set(t.type, r), n = r;
        }
        if (null === e || e < 0) n.push(t);else if (n[e]) {
          var o = n.slice(0, e - 1),
            i = n.slice(e + 1);
          this._steps.set(t.type, o.concat(t).concat(i));
        } else n[e] = t;
      }, Object.defineProperty(n.prototype, "steps", {
        get: function () {
          for (var t = [], e = 0, n = this.getSortedProcessorTypes(); e < n.length; e++) {
            var r = n[e],
              o = this._steps.get(r);
            o && o.length && (t = t.concat(o));
          }
          return t.filter(function (t) {
            return t;
          });
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.getStepsByType = function (t) {
        return this.steps.filter(function (e) {
          return e.type === t;
        });
      }, n.prototype.getSortedProcessorTypes = function () {
        return Object.keys(Y).filter(function (t) {
          return !isNaN(Number(t));
        }).map(function (t) {
          return Number(t);
        });
      }, n.prototype.process = function (t) {
        return r(this, void 0, void 0, function () {
          var e, n, r, i, s, a, u;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                e = this.lastProcessorIndexUpdated, n = this.steps, r = t, o.label = 1;
              case 1:
                o.trys.push([1, 7,, 8]), i = 0, s = n, o.label = 2;
              case 2:
                return i < s.length ? (a = s[i], this.findProcessorIndexByID(a.id) >= e ? [4, a.process(r)] : [3, 4]) : [3, 6];
              case 3:
                return r = o.sent(), this.cache.set(a.id, r), [3, 5];
              case 4:
                r = this.cache.get(a.id), o.label = 5;
              case 5:
                return i++, [3, 2];
              case 6:
                return [3, 8];
              case 7:
                throw u = o.sent(), ut.error(u), this.emit("error", r), u;
              case 8:
                return this.lastProcessorIndexUpdated = n.length, this.emit("afterProcess", r), [2, r];
            }
          });
        });
      }, n.prototype.findProcessorIndexByID = function (t) {
        return this.steps.findIndex(function (e) {
          return e.id == t;
        });
      }, n.prototype.setLastProcessorIndex = function (t) {
        var e = this.findProcessorIndexByID(t.id);
        this.lastProcessorIndexUpdated > e && (this.lastProcessorIndexUpdated = e);
      }, n.prototype.processorPropsUpdated = function (t) {
        this.setLastProcessorIndex(t), this.emit("propsUpdated"), this.emit("updated", t);
      }, n.prototype.afterRegistered = function (t) {
        this.setLastProcessorIndex(t), this.emit("afterRegister"), this.emit("updated", t);
      }, n;
    }(Z),
    Et = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), Object.defineProperty(n.prototype, "type", {
        get: function () {
          return Y.Extractor;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype._process = function (t) {
        return r(this, void 0, void 0, function () {
          return o(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.props.storage.get(t)];
              case 1:
                return [2, e.sent()];
            }
          });
        });
      }, n;
    }(J),
    Tt = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), Object.defineProperty(n.prototype, "type", {
        get: function () {
          return Y.Transformer;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype._process = function (t) {
        var e = V.fromArray(t.data);
        return e.length = t.total, e;
      }, n;
    }(J),
    Ft = function (t) {
      function r() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(r, t), Object.defineProperty(r.prototype, "type", {
        get: function () {
          return Y.Initiator;
        },
        enumerable: !1,
        configurable: !0
      }), r.prototype._process = function () {
        return Object.entries(this.props.serverStorageOptions).filter(function (t) {
          return t[0], "function" != typeof t[1];
        }).reduce(function (t, e) {
          var r,
            o = e[0],
            i = e[1];
          return n(n({}, t), ((r = {})[o] = i, r));
        }, {});
      }, r;
    }(J),
    Dt = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), Object.defineProperty(n.prototype, "type", {
        get: function () {
          return Y.Transformer;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.castData = function (t) {
        if (!t || !t.length) return [];
        if (!this.props.header || !this.props.header.columns) return t;
        var e = wt.leafColumns(this.props.header.columns);
        return t[0] instanceof Array ? t.map(function (t) {
          var n = 0;
          return e.map(function (e, r) {
            return void 0 !== e.data ? (n++, "function" == typeof e.data ? e.data(t) : e.data) : t[r - n];
          });
        }) : "object" != typeof t[0] || t[0] instanceof Array ? [] : t.map(function (t) {
          return e.map(function (e, n) {
            return void 0 !== e.data ? "function" == typeof e.data ? e.data(t) : e.data : e.id ? t[e.id] : (ut.error("Could not find the correct cell for column at position " + n + ".\n                          Make sure either 'id' or 'selector' is defined for all columns."), null);
          });
        });
      }, n.prototype._process = function (t) {
        return {
          data: this.castData(t.data),
          total: t.total
        };
      }, n;
    }(J),
    Ot = function () {
      function t() {}
      return t.createFromConfig = function (t) {
        var e = new Nt();
        return t.storage instanceof Ct && e.register(new Ft({
          serverStorageOptions: t.server
        })), e.register(new Et({
          storage: t.storage
        })), e.register(new Dt({
          header: t.header
        })), e.register(new Tt()), e;
      }, t;
    }(),
    Rt = function () {
      function t(e) {
        Object.assign(this, n(n({}, t.defaultConfig()), e)), this._userConfig = {};
      }
      return t.prototype.assign = function (t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
          var r = n[e];
          "_userConfig" !== r && (this[r] = t[r]);
        }
        return this;
      }, t.prototype.update = function (e) {
        return e ? (this._userConfig = n(n({}, this._userConfig), e), this.assign(t.fromUserConfig(this._userConfig)), this) : this;
      }, t.defaultConfig = function () {
        return {
          plugin: new pt(),
          dispatcher: new Pt(),
          tableRef: {
            current: null
          },
          tempRef: {
            current: null
          },
          width: "100%",
          height: "auto",
          autoWidth: !0,
          style: {},
          className: {}
        };
      }, t.fromUserConfig = function (e) {
        var r = new t(e);
        return r._userConfig = e, "boolean" == typeof e.sort && e.sort && r.assign({
          sort: {
            multiColumn: !0
          }
        }), r.assign({
          header: wt.fromUserConfig(r)
        }), r.assign({
          storage: kt.createFromUserConfig(e)
        }), r.assign({
          pipeline: Ot.createFromConfig(r)
        }), r.assign({
          translator: new z(e.language)
        }), r.plugin.add({
          id: "search",
          position: nt.Header,
          component: ht,
          props: n({
            enabled: !0 === e.search || e.search instanceof Object
          }, e.search)
        }), r.plugin.add({
          id: "pagination",
          position: nt.Footer,
          component: _t,
          props: n({
            enabled: !0 === e.pagination || e.pagination instanceof Object
          }, e.pagination)
        }), e.plugins && e.plugins.forEach(function (t) {
          return r.plugin.add(t);
        }), r;
      }, t;
    }();
  !function (t) {
    t[t.Init = 0] = "Init", t[t.Loading = 1] = "Loading", t[t.Loaded = 2] = "Loaded", t[t.Rendered = 3] = "Rendered", t[t.Error = 4] = "Error";
  }(bt || (bt = {}));
  var Lt = function (t) {
      function r() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(r, t), r.prototype.content = function () {
        return this.props.column && "function" == typeof this.props.column.formatter ? this.props.column.formatter(this.props.cell.data, this.props.row, this.props.column) : this.props.column && this.props.column.plugin ? m(ct, {
          pluginId: this.props.column.id,
          props: {
            column: this.props.column,
            cell: this.props.cell,
            row: this.props.row
          }
        }) : this.props.cell.data;
      }, r.prototype.handleClick = function (t) {
        this.props.messageCell || this.config.eventEmitter.emit("cellClick", t, this.props.cell, this.props.column, this.props.row);
      }, r.prototype.getCustomAttributes = function (t) {
        return t ? "function" == typeof t.attributes ? t.attributes(this.props.cell.data, this.props.row, this.props.column) : t.attributes : {};
      }, r.prototype.render = function () {
        return m("td", n({
          role: this.props.role,
          colSpan: this.props.colSpan,
          "data-column-id": this.props.column && this.props.column.id,
          className: et(tt("td"), this.props.className, this.config.className.td),
          style: n(n({}, this.props.style), this.config.style.td),
          onClick: this.handleClick.bind(this)
        }, this.getCustomAttributes(this.props.column)), this.content());
      }, r;
    }(q),
    It = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.getColumn = function (t) {
        if (this.props.header) {
          var e = wt.leafColumns(this.props.header.columns);
          if (e) return e[t];
        }
        return null;
      }, n.prototype.handleClick = function (t) {
        this.props.messageRow || this.config.eventEmitter.emit("rowClick", t, this.props.row);
      }, n.prototype.getChildren = function () {
        var t = this;
        return this.props.children ? this.props.children : m(b, null, this.props.row.cells.map(function (e, n) {
          var r = t.getColumn(n);
          return r && r.hidden ? null : m(Lt, {
            key: e.id,
            cell: e,
            row: t.props.row,
            column: r
          });
        }));
      }, n.prototype.render = function () {
        return m("tr", {
          className: et(tt("tr"), this.config.className.tr),
          onClick: this.handleClick.bind(this)
        }, this.getChildren());
      }, n;
    }(q),
    At = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.render = function () {
        return m(It, {
          messageRow: !0
        }, m(Lt, {
          role: "alert",
          colSpan: this.props.colSpan,
          messageCell: !0,
          cell: new $(this.props.message),
          className: et(tt("message"), this.props.className ? this.props.className : null)
        }));
      }, n;
    }(q),
    Ut = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.headerLength = function () {
        return this.props.header ? this.props.header.visibleColumns.length : 0;
      }, n.prototype.render = function () {
        var t = this;
        return m("tbody", {
          className: et(tt("tbody"), this.config.className.tbody)
        }, this.props.data && this.props.data.rows.map(function (e) {
          return m(It, {
            key: e.id,
            row: e,
            header: t.props.header
          });
        }), this.props.status === bt.Loading && (!this.props.data || 0 === this.props.data.length) && m(At, {
          message: this._("loading"),
          colSpan: this.headerLength(),
          className: et(tt("loading"), this.config.className.loading)
        }), this.props.status === bt.Rendered && this.props.data && 0 === this.props.data.length && m(At, {
          message: this._("noRecordsFound"),
          colSpan: this.headerLength(),
          className: et(tt("notfound"), this.config.className.notfound)
        }), this.props.status === bt.Error && m(At, {
          message: this._("error"),
          colSpan: this.headerLength(),
          className: et(tt("error"), this.config.className.error)
        }));
      }, n;
    }(q),
    jt = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.validateProps = function () {
        for (var t = 0, e = this.props.columns; t < e.length; t++) {
          var n = e[t];
          void 0 === n.direction && (n.direction = 1), 1 !== n.direction && -1 !== n.direction && ut.error("Invalid sort direction " + n.direction);
        }
      }, Object.defineProperty(n.prototype, "type", {
        get: function () {
          return Y.Sort;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.compare = function (t, e) {
        return t > e ? 1 : t < e ? -1 : 0;
      }, n.prototype.compareWrapper = function (t, e) {
        for (var n = 0, r = 0, o = this.props.columns; r < o.length; r++) {
          var i = o[r];
          if (0 !== n) break;
          var s = t.cells[i.index].data,
            a = e.cells[i.index].data;
          "function" == typeof i.compare ? n |= i.compare(s, a) * i.direction : n |= this.compare(s, a) * i.direction;
        }
        return n;
      }, n.prototype._process = function (t) {
        var e = i(t.rows);
        e.sort(this.compareWrapper.bind(this));
        var n = new V(e);
        return n.length = t.length, n;
      }, n;
    }(J),
    Mt = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.getInitialState = function () {
        return [];
      }, n.prototype.handle = function (t, e) {
        if ("SORT_COLUMN" === t) {
          var n = e.index,
            r = e.direction,
            o = e.multi,
            i = e.compare;
          this.sortColumn(n, r, o, i);
        } else if ("SORT_COLUMN_TOGGLE" === t) {
          n = e.index, o = e.multi, i = e.compare;
          this.sortToggle(n, o, i);
        }
      }, n.prototype.sortToggle = function (t, e, n) {
        var r = i(this.state).find(function (e) {
          return e.index === t;
        });
        r ? this.sortColumn(t, 1 === r.direction ? -1 : 1, e, n) : this.sortColumn(t, 1, e, n);
      }, n.prototype.sortColumn = function (t, e, n, r) {
        var o = i(this.state),
          s = o.length,
          a = o.find(function (e) {
            return e.index === t;
          }),
          u = !1,
          l = !1,
          p = !1,
          c = !1;
        if (void 0 !== a ? n ? -1 === a.direction ? p = !0 : c = !0 : 1 === s ? c = !0 : s > 1 && (l = !0, u = !0) : 0 === s ? u = !0 : s > 0 && !n ? (u = !0, l = !0) : s > 0 && n && (u = !0), l && (o = []), u) o.push({
          index: t,
          direction: e,
          compare: r
        });else if (c) {
          var h = o.indexOf(a);
          o[h].direction = e;
        } else if (p) {
          var f = o.indexOf(a);
          o.splice(f, 1);
        }
        this.setState(o);
      }, n;
    }(rt),
    Ht = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.sortColumn = function (t, e, n, r) {
        this.dispatch("SORT_COLUMN", {
          index: t,
          direction: e,
          multi: n,
          compare: r
        });
      }, n.prototype.sortToggle = function (t, e, n) {
        this.dispatch("SORT_COLUMN_TOGGLE", {
          index: t,
          multi: e,
          compare: n
        });
      }, n;
    }(it),
    Wt = function (t) {
      function r() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(r, t), Object.defineProperty(r.prototype, "type", {
        get: function () {
          return Y.ServerSort;
        },
        enumerable: !1,
        configurable: !0
      }), r.prototype._process = function (t) {
        var e = {};
        return this.props.url && (e.url = this.props.url(t.url, this.props.columns)), this.props.body && (e.body = this.props.body(t.body, this.props.columns)), n(n({}, t), e);
      }, r;
    }(J),
    Bt = function (t) {
      function r(e, n) {
        var r = t.call(this, e, n) || this;
        return r.actions = new Ht(r.config.dispatcher), r.store = new Mt(r.config.dispatcher), e.enabled && (r.sortProcessor = r.getOrCreateSortProcessor(), r.updateStateFn = r.updateState.bind(r), r.store.on("updated", r.updateStateFn), r.state = {
          direction: 0
        }), r;
      }
      return e(r, t), r.prototype.componentWillUnmount = function () {
        this.config.pipeline.unregister(this.sortProcessor), this.store.off("updated", this.updateStateFn), this.updateSortProcessorFn && this.store.off("updated", this.updateSortProcessorFn);
      }, r.prototype.updateState = function () {
        var t = this,
          e = this.store.state.find(function (e) {
            return e.index === t.props.index;
          });
        e ? this.setState({
          direction: e.direction
        }) : this.setState({
          direction: 0
        });
      }, r.prototype.updateSortProcessor = function (t) {
        this.sortProcessor.setProps({
          columns: t
        });
      }, r.prototype.getOrCreateSortProcessor = function () {
        var t = Y.Sort;
        this.config.sort && "object" == typeof this.config.sort.server && (t = Y.ServerSort);
        var e,
          r = this.config.pipeline.getStepsByType(t);
        return r.length > 0 ? e = r[0] : (this.updateSortProcessorFn = this.updateSortProcessor.bind(this), this.store.on("updated", this.updateSortProcessorFn), e = t === Y.ServerSort ? new Wt(n({
          columns: this.store.state
        }, this.config.sort.server)) : new jt({
          columns: this.store.state
        }), this.config.pipeline.register(e)), e;
      }, r.prototype.changeDirection = function (t) {
        t.preventDefault(), t.stopPropagation(), this.actions.sortToggle(this.props.index, !0 === t.shiftKey && this.config.sort.multiColumn, this.props.compare);
      }, r.prototype.render = function () {
        if (!this.props.enabled) return null;
        var t = this.state.direction,
          e = "neutral";
        return 1 === t ? e = "asc" : -1 === t && (e = "desc"), m("button", {
          tabIndex: -1,
          "aria-label": this._("sort.sort" + (1 === t ? "Desc" : "Asc")),
          title: this._("sort.sort" + (1 === t ? "Desc" : "Asc")),
          className: et(tt("sort"), tt("sort", e), this.config.className.sort),
          onClick: this.changeDirection.bind(this)
        });
      }, r;
    }(q),
    zt = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.getPageX = function (t) {
        return t instanceof MouseEvent ? Math.floor(t.pageX) : Math.floor(t.changedTouches[0].pageX);
      }, n.prototype.start = function (t) {
        t.stopPropagation();
        var e,
          n,
          r,
          o,
          i,
          s = this.props.thRef.current;
        this.setState({
          offsetStart: parseInt(s.style.width, 10) - this.getPageX(t)
        }), this.upFn = this.end.bind(this), this.moveFn = (e = this.move.bind(this), void 0 === (n = 10) && (n = 100), function () {
          for (var t = [], s = 0; s < arguments.length; s++) t[s] = arguments[s];
          r ? (clearTimeout(o), o = setTimeout(function () {
            Date.now() - i >= n && (e.apply(void 0, t), i = Date.now());
          }, Math.max(n - (Date.now() - i), 0))) : (e.apply(void 0, t), i = Date.now(), r = !0);
        }), document.addEventListener("mouseup", this.upFn), document.addEventListener("touchend", this.upFn), document.addEventListener("mousemove", this.moveFn), document.addEventListener("touchmove", this.moveFn);
      }, n.prototype.move = function (t) {
        t.stopPropagation();
        var e = this.props.thRef.current;
        this.state.offsetStart + this.getPageX(t) >= parseInt(e.style.minWidth, 10) && (e.style.width = this.state.offsetStart + this.getPageX(t) + "px");
      }, n.prototype.end = function (t) {
        t.stopPropagation(), document.removeEventListener("mouseup", this.upFn), document.removeEventListener("mousemove", this.moveFn), document.removeEventListener("touchmove", this.moveFn), document.removeEventListener("touchend", this.upFn);
      }, n.prototype.render = function () {
        return m("div", {
          className: et(tt("th"), tt("resizable")),
          onMouseDown: this.start.bind(this),
          onTouchStart: this.start.bind(this),
          onClick: function (t) {
            return t.stopPropagation();
          }
        });
      }, n;
    }(q),
    qt = function (t) {
      function r(e, n) {
        var r = t.call(this, e, n) || this;
        return r.sortRef = {
          current: null
        }, r.thRef = {
          current: null
        }, r.state = {
          style: {}
        }, r;
      }
      return e(r, t), r.prototype.isSortable = function () {
        return this.props.column.sort.enabled;
      }, r.prototype.isResizable = function () {
        return this.props.column.resizable;
      }, r.prototype.onClick = function (t) {
        t.stopPropagation(), this.isSortable() && this.sortRef.current.changeDirection(t);
      }, r.prototype.keyDown = function (t) {
        this.isSortable() && 13 === t.which && this.onClick(t);
      }, r.prototype.componentDidMount = function () {
        var t = this;
        setTimeout(function () {
          if (t.props.column.fixedHeader && t.thRef.current) {
            var e = t.thRef.current.offsetTop;
            "number" == typeof e && t.setState({
              style: {
                top: e
              }
            });
          }
        }, 0);
      }, r.prototype.content = function () {
        return void 0 !== this.props.column.name ? this.props.column.name : void 0 !== this.props.column.plugin ? m(ct, {
          pluginId: this.props.column.plugin.id,
          props: {
            column: this.props.column
          }
        }) : null;
      }, r.prototype.getCustomAttributes = function () {
        var t = this.props.column;
        return t ? "function" == typeof t.attributes ? t.attributes(null, null, this.props.column) : t.attributes : {};
      }, r.prototype.render = function () {
        var t = {};
        return this.isSortable() && (t.tabIndex = 0), m("th", n({
          ref: this.thRef,
          "data-column-id": this.props.column && this.props.column.id,
          className: et(tt("th"), this.isSortable() ? tt("th", "sort") : null, this.props.column.fixedHeader ? tt("th", "fixed") : null, this.config.className.th),
          onClick: this.onClick.bind(this),
          style: n(n(n(n({}, this.config.style.th), {
            minWidth: this.props.column.minWidth,
            width: this.props.column.width
          }), this.state.style), this.props.style),
          onKeyDown: this.keyDown.bind(this),
          rowSpan: this.props.rowSpan > 1 ? this.props.rowSpan : void 0,
          colSpan: this.props.colSpan > 1 ? this.props.colSpan : void 0
        }, this.getCustomAttributes(), t), m("div", {
          className: tt("th", "content")
        }, this.content()), this.isSortable() && m(Bt, n({
          ref: this.sortRef,
          index: this.props.index
        }, this.props.column.sort)), this.isResizable() && this.props.index < this.config.header.visibleColumns.length - 1 && m(zt, {
          column: this.props.column,
          thRef: this.thRef
        }));
      }, r;
    }(q);
  var Xt,
    $t,
    Kt = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(n, t), n.prototype.renderColumn = function (t, e, n, r) {
        var o = function (t, e, n) {
            var r = wt.maximumDepth(t),
              o = n - e;
            return {
              rowSpan: Math.floor(o - r - r / o),
              colSpan: t.columns && t.columns.length || 1
            };
          }(t, e, r),
          i = o.rowSpan,
          s = o.colSpan;
        return m(qt, {
          column: t,
          index: n,
          colSpan: s,
          rowSpan: i
        });
      }, n.prototype.renderRow = function (t, e, n) {
        var r = this,
          o = wt.leafColumns(this.props.header.columns);
        return m(It, null, t.map(function (t) {
          return t.hidden ? null : r.renderColumn(t, e, o.indexOf(t), n);
        }));
      }, n.prototype.renderRows = function () {
        var t = this,
          e = wt.tabularFormat(this.props.header.columns);
        return e.map(function (n, r) {
          return t.renderRow(n, r, e.length);
        });
      }, n.prototype.render = function () {
        return this.props.header ? m("thead", {
          key: this.props.header.id,
          className: et(tt("thead"), this.config.className.thead)
        }, this.renderRows()) : null;
      }, n;
    }(q),
    Vt = function (t) {
      function r() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return e(r, t), r.prototype.render = function () {
        return m("table", {
          role: "grid",
          className: et(tt("table"), this.config.className.table),
          style: n(n({}, this.config.style.table), {
            height: this.props.height
          })
        }, m(Kt, {
          header: this.props.header
        }), m(Ut, {
          data: this.props.data,
          status: this.props.status,
          header: this.props.header
        }));
      }, r;
    }(q),
    Yt = function (t) {
      function r(e, n) {
        var r = t.call(this, e, n) || this;
        return r.headerRef = {
          current: null
        }, r.state = {
          isActive: !0
        }, r;
      }
      return e(r, t), r.prototype.componentDidMount = function () {
        0 === this.headerRef.current.children.length && this.setState({
          isActive: !1
        });
      }, r.prototype.render = function () {
        return this.state.isActive ? m("div", {
          ref: this.headerRef,
          className: et(tt("head"), this.config.className.header),
          style: n({}, this.config.style.header)
        }, m(ct, {
          position: nt.Header
        })) : null;
      }, r;
    }(q),
    Zt = function (t) {
      function r(e, n) {
        var r = t.call(this, e, n) || this;
        return r.footerRef = {
          current: null
        }, r.state = {
          isActive: !0
        }, r;
      }
      return e(r, t), r.prototype.componentDidMount = function () {
        0 === this.footerRef.current.children.length && this.setState({
          isActive: !1
        });
      }, r.prototype.render = function () {
        return this.state.isActive ? m("div", {
          ref: this.footerRef,
          className: et(tt("footer"), this.config.className.footer),
          style: n({}, this.config.style.footer)
        }, m(ct, {
          position: nt.Footer
        })) : null;
      }, r;
    }(q),
    Jt = function (t) {
      function i(e, n) {
        var r = t.call(this, e, n) || this;
        return r.configContext = function (t, e) {
          var n = {
            __c: e = "__cC" + c++,
            __: t,
            Consumer: function (t, e) {
              return t.children(e);
            },
            Provider: function (t) {
              var n, r;
              return this.getChildContext || (n = [], (r = {})[e] = this, this.getChildContext = function () {
                return r;
              }, this.shouldComponentUpdate = function (t) {
                this.props.value !== t.value && n.some(x);
              }, this.sub = function (t) {
                n.push(t);
                var e = t.componentWillUnmount;
                t.componentWillUnmount = function () {
                  n.splice(n.indexOf(t), 1), e && e.call(t);
                };
              }), t.children;
            }
          };
          return n.Provider.__ = n.Consumer.contextType = n;
        }(null), r.state = {
          status: bt.Loading,
          header: e.header,
          data: null
        }, r;
      }
      return e(i, t), i.prototype.processPipeline = function () {
        return r(this, void 0, void 0, function () {
          var t, e;
          return o(this, function (n) {
            switch (n.label) {
              case 0:
                this.props.config.eventEmitter.emit("beforeLoad"), this.setState({
                  status: bt.Loading
                }), n.label = 1;
              case 1:
                return n.trys.push([1, 3,, 4]), [4, this.props.pipeline.process()];
              case 2:
                return t = n.sent(), this.setState({
                  data: t,
                  status: bt.Loaded
                }), this.props.config.eventEmitter.emit("load", t), [3, 4];
              case 3:
                return e = n.sent(), ut.error(e), this.setState({
                  status: bt.Error,
                  data: null
                }), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }, i.prototype.componentDidMount = function () {
        return r(this, void 0, void 0, function () {
          var t;
          return o(this, function (e) {
            switch (e.label) {
              case 0:
                return t = this.props.config, [4, this.processPipeline()];
              case 1:
                return e.sent(), t.header && this.state.data && this.state.data.length && this.setState({
                  header: t.header.adjustWidth(t)
                }), this.processPipelineFn = this.processPipeline.bind(this), this.props.pipeline.on("updated", this.processPipelineFn), [2];
            }
          });
        });
      }, i.prototype.componentWillUnmount = function () {
        this.props.pipeline.off("updated", this.processPipelineFn);
      }, i.prototype.componentDidUpdate = function (t, e) {
        e.status != bt.Rendered && this.state.status == bt.Loaded && (this.setState({
          status: bt.Rendered
        }), this.props.config.eventEmitter.emit("ready"));
      }, i.prototype.render = function () {
        return m(this.configContext.Provider, {
          value: this.props.config
        }, m("div", {
          role: "complementary",
          className: et("gridjs", tt("container"), this.state.status === bt.Loading ? tt("loading") : null, this.props.config.className.container),
          style: n(n({}, this.props.config.style.container), {
            width: this.props.width
          })
        }, this.state.status === bt.Loading && m("div", {
          className: tt("loading-bar")
        }), m(Yt, null), m("div", {
          className: tt("wrapper"),
          style: {
            height: this.props.height
          }
        }, m(Vt, {
          ref: this.props.config.tableRef,
          data: this.state.data,
          header: this.state.header,
          width: this.props.width,
          height: this.props.height,
          status: this.state.status
        })), m(Zt, null), m("div", {
          ref: this.props.config.tempRef,
          id: "gridjs-temp",
          className: tt("temp")
        })));
      }, i;
    }(q),
    Qt = function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return n.config = new Rt({
          instance: n,
          eventEmitter: n
        }).update(e), n.plugin = n.config.plugin, n;
      }
      return e(n, t), n.prototype.updateConfig = function (t) {
        return this.config.update(t), this;
      }, n.prototype.createElement = function () {
        return m(Jt, {
          config: this.config,
          pipeline: this.config.pipeline,
          header: this.config.header,
          width: this.config.width,
          height: this.config.height
        });
      }, n.prototype.forceRender = function () {
        return this.config && this.config.container || ut.error("Container is empty. Make sure you call render() before forceRender()", !0), this.config.pipeline.clearCache(), M(null, this.config.container), M(this.createElement(), this.config.container), this;
      }, n.prototype.render = function (t) {
        return t || ut.error("Container element cannot be null", !0), t.childNodes.length > 0 ? (ut.error("The container element " + t + " is not empty. Make sure the container is empty and call render() again"), this) : (this.config.container = t, M(this.createElement(), t), this);
      }, n;
    }(Z),
    ee = [],
    ne = s.__b,
    re = s.__r,
    oe = s.diffed,
    ie = s.__c,
    se = s.unmount;
  function pe() {
    ee.forEach(function (t) {
      if (t.__P) try {
        t.__H.__h.forEach(he), t.__H.__h.forEach(fe), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], s.__e(e, t.__v);
      }
    }), ee = [];
  }
  s.__b = function (t) {
    Xt = null, ne && ne(t);
  }, s.__r = function (t) {
    re && re(t), 0;
    var e = (Xt = t.__c).__H;
    e && (e.__h.forEach(he), e.__h.forEach(fe), e.__h = []);
  }, s.diffed = function (t) {
    oe && oe(t);
    var e = t.__c;
    e && e.__H && e.__H.__h.length && (1 !== ee.push(e) && $t === s.requestAnimationFrame || (($t = s.requestAnimationFrame) || function (t) {
      var e,
        n = function () {
          clearTimeout(r), ce && cancelAnimationFrame(e), setTimeout(t);
        },
        r = setTimeout(n, 100);
      ce && (e = requestAnimationFrame(n));
    })(pe)), Xt = void 0;
  }, s.__c = function (t, e) {
    e.some(function (t) {
      try {
        t.__h.forEach(he), t.__h = t.__h.filter(function (t) {
          return !t.__ || fe(t);
        });
      } catch (n) {
        e.some(function (t) {
          t.__h && (t.__h = []);
        }), e = [], s.__e(n, t.__v);
      }
    }), ie && ie(t, e);
  }, s.unmount = function (t) {
    se && se(t);
    var e = t.__c;
    if (e && e.__H) try {
      e.__H.__.forEach(he);
    } catch (t) {
      s.__e(t, e.__v);
    }
  };
  var ce = "function" == typeof requestAnimationFrame;
  function he(t) {
    var e = Xt;
    "function" == typeof t.__c && t.__c(), Xt = e;
  }
  function fe(t) {
    var e = Xt;
    t.__c = t.__(), Xt = e;
  }

  /// <reference path="jquery.d.ts"/>
  $__default['default'].fn.Grid = function (userConfig) {
    userConfig = userConfig || {};
    var container = $__default['default'](this).get(0);
    if (container.tagName.toLowerCase() === "table" && !userConfig["from"]) {
      var table = container;
      // load data from the table
      userConfig["from"] = table;
      // add a new element _after_ the existing table
      // and use this as the Grid.js container
      var newContainer = $__default['default']("<div></div>");
      $__default['default'](newContainer).insertAfter(table);
      container = newContainer.get(0);
    }
    return new Qt(userConfig).render(container);
  };
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map