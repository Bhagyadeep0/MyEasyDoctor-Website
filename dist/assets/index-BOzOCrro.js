function u0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function c0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qf = { exports: {} },
  ro = {},
  Zf = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xi = Symbol.for("react.element"),
  d0 = Symbol.for("react.portal"),
  f0 = Symbol.for("react.fragment"),
  p0 = Symbol.for("react.strict_mode"),
  h0 = Symbol.for("react.profiler"),
  m0 = Symbol.for("react.provider"),
  g0 = Symbol.for("react.context"),
  v0 = Symbol.for("react.forward_ref"),
  y0 = Symbol.for("react.suspense"),
  x0 = Symbol.for("react.memo"),
  w0 = Symbol.for("react.lazy"),
  yc = Symbol.iterator;
function S0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yc && e[yc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Jf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ep = Object.assign,
  tp = {};
function gr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = tp),
    (this.updater = n || Jf);
}
gr.prototype.isReactComponent = {};
gr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function np() {}
np.prototype = gr.prototype;
function Ul(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = tp),
    (this.updater = n || Jf);
}
var Hl = (Ul.prototype = new np());
Hl.constructor = Ul;
ep(Hl, gr.prototype);
Hl.isPureReactComponent = !0;
var xc = Array.isArray,
  rp = Object.prototype.hasOwnProperty,
  Wl = { current: null },
  ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function sp(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      rp.call(t, r) && !ip.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: xi,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Wl.current,
  };
}
function T0(e, t) {
  return {
    $$typeof: xi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function E0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wc = /\/+/g;
function Lo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? E0("" + e.key)
    : t.toString(36);
}
function es(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xi:
          case d0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Lo(o, 0) : r),
      xc(i)
        ? ((n = ""),
          e != null && (n = e.replace(wc, "$&/") + "/"),
          es(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Gl(i) &&
            (i = T0(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(wc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), xc(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + Lo(s, l);
      o += es(s, t, n, a, i);
    }
  else if (((a = S0(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Lo(s, l++)), (o += es(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Di(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    es(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function C0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  ts = { transition: null },
  P0 = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: ts,
    ReactCurrentOwner: Wl,
  };
F.Children = {
  map: Di,
  forEach: function (e, t, n) {
    Di(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Di(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Di(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = gr;
F.Fragment = f0;
F.Profiler = h0;
F.PureComponent = Ul;
F.StrictMode = p0;
F.Suspense = y0;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P0;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ep({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Wl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      rp.call(t, a) &&
        !ip.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: xi, type: e.type, key: i, ref: s, props: r, _owner: o };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: g0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: m0, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = sp;
F.createFactory = function (e) {
  var t = sp.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: v0, render: e };
};
F.isValidElement = Gl;
F.lazy = function (e) {
  return { $$typeof: w0, _payload: { _status: -1, _result: e }, _init: C0 };
};
F.memo = function (e, t) {
  return { $$typeof: x0, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = ts.transition;
  ts.transition = {};
  try {
    e();
  } finally {
    ts.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
F.useContext = function (e) {
  return be.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
F.useId = function () {
  return be.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return be.current.useRef(e);
};
F.useState = function (e) {
  return be.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return be.current.useTransition();
};
F.version = "18.2.0";
Zf.exports = F;
var E = Zf.exports;
const $ = c0(E),
  j0 = u0({ __proto__: null, default: $ }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b0 = E,
  k0 = Symbol.for("react.element"),
  M0 = Symbol.for("react.fragment"),
  N0 = Object.prototype.hasOwnProperty,
  L0 = b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  D0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function op(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) N0.call(t, r) && !D0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: k0,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: L0.current,
  };
}
ro.Fragment = M0;
ro.jsx = op;
ro.jsxs = op;
Qf.exports = ro;
var f = Qf.exports,
  ja = {},
  ap = { exports: {} },
  Be = {},
  lp = { exports: {} },
  up = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, R) {
    var V = k.length;
    k.push(R);
    e: for (; 0 < V; ) {
      var U = (V - 1) >>> 1,
        q = k[U];
      if (0 < i(q, R)) (k[U] = R), (k[V] = q), (V = U);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var R = k[0],
      V = k.pop();
    if (V !== R) {
      k[0] = V;
      e: for (var U = 0, q = k.length, Ni = q >>> 1; U < Ni; ) {
        var cn = 2 * (U + 1) - 1,
          No = k[cn],
          dn = cn + 1,
          Li = k[dn];
        if (0 > i(No, V))
          dn < q && 0 > i(Li, No)
            ? ((k[U] = Li), (k[dn] = V), (U = dn))
            : ((k[U] = No), (k[cn] = V), (U = cn));
        else if (dn < q && 0 > i(Li, V)) (k[U] = Li), (k[dn] = V), (U = dn);
        else break e;
      }
    }
    return R;
  }
  function i(k, R) {
    var V = k.sortIndex - R.sortIndex;
    return V !== 0 ? V : k.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    v = !1,
    y = !1,
    x = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(k) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= k)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function w(k) {
    if (((x = !1), g(k), !y))
      if (n(a) !== null) (y = !0), W(T);
      else {
        var R = n(u);
        R !== null && Re(w, R.startTime - k);
      }
  }
  function T(k, R) {
    (y = !1), x && ((x = !1), p(C), (C = -1)), (v = !0);
    var V = h;
    try {
      for (
        g(R), d = n(a);
        d !== null && (!(d.expirationTime > R) || (k && !L()));

      ) {
        var U = d.callback;
        if (typeof U == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var q = U(d.expirationTime <= R);
          (R = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(a) && r(a),
            g(R);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Ni = !0;
      else {
        var cn = n(u);
        cn !== null && Re(w, cn.startTime - R), (Ni = !1);
      }
      return Ni;
    } finally {
      (d = null), (h = V), (v = !1);
    }
  }
  var j = !1,
    M = null,
    C = -1,
    b = 5,
    P = -1;
  function L() {
    return !(e.unstable_now() - P < b);
  }
  function A() {
    if (M !== null) {
      var k = e.unstable_now();
      P = k;
      var R = !0;
      try {
        R = M(!0, k);
      } finally {
        R ? D() : ((j = !1), (M = null));
      }
    } else j = !1;
  }
  var D;
  if (typeof m == "function")
    D = function () {
      m(A);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      _ = z.port2;
    (z.port1.onmessage = A),
      (D = function () {
        _.postMessage(null);
      });
  } else
    D = function () {
      S(A, 0);
    };
  function W(k) {
    (M = k), j || ((j = !0), D());
  }
  function Re(k, R) {
    C = S(function () {
      k(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), W(T));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (b = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (k) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h;
      }
      var V = h;
      h = R;
      try {
        return k();
      } finally {
        h = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var V = h;
      h = k;
      try {
        return R();
      } finally {
        h = V;
      }
    }),
    (e.unstable_scheduleCallback = function (k, R, V) {
      var U = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? U + V : U))
          : (V = U),
        k)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = V + q),
        (k = {
          id: c++,
          callback: R,
          priorityLevel: k,
          startTime: V,
          expirationTime: q,
          sortIndex: -1,
        }),
        V > U
          ? ((k.sortIndex = V),
            t(u, k),
            n(a) === null &&
              k === n(u) &&
              (x ? (p(C), (C = -1)) : (x = !0), Re(w, V - U)))
          : ((k.sortIndex = q), t(a, k), y || v || ((y = !0), W(T))),
        k
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (k) {
      var R = h;
      return function () {
        var V = h;
        h = R;
        try {
          return k.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    });
})(up);
lp.exports = up;
var A0 = lp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cp = E,
  _e = A0;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var dp = new Set(),
  qr = {};
function Dn(e, t) {
  ar(e, t), ar(e + "Capture", t);
}
function ar(e, t) {
  for (qr[e] = t, e = 0; e < t.length; e++) dp.add(t[e]);
}
var Et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ba = Object.prototype.hasOwnProperty,
  R0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sc = {},
  Tc = {};
function O0(e) {
  return ba.call(Tc, e)
    ? !0
    : ba.call(Sc, e)
    ? !1
    : R0.test(e)
    ? (Tc[e] = !0)
    : ((Sc[e] = !0), !1);
}
function V0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function I0(e, t, n, r) {
  if (t === null || typeof t > "u" || V0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ke(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ve[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Kl = /[\-:]([a-z])/g;
function Yl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Kl, Yl);
    ve[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Kl, Yl);
    ve[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Kl, Yl);
  ve[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xl(e, t, n, r) {
  var i = ve.hasOwnProperty(t) ? ve[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (I0(t, n, i, r) && (n = null),
    r || i === null
      ? O0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bt = cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ai = Symbol.for("react.element"),
  In = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  ql = Symbol.for("react.strict_mode"),
  ka = Symbol.for("react.profiler"),
  fp = Symbol.for("react.provider"),
  pp = Symbol.for("react.context"),
  Ql = Symbol.for("react.forward_ref"),
  Ma = Symbol.for("react.suspense"),
  Na = Symbol.for("react.suspense_list"),
  Zl = Symbol.for("react.memo"),
  Lt = Symbol.for("react.lazy"),
  hp = Symbol.for("react.offscreen"),
  Ec = Symbol.iterator;
function Sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ec && e[Ec]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  Do;
function Lr(e) {
  if (Do === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Do = (t && t[1]) || "";
    }
  return (
    `
` +
    Do +
    e
  );
}
var Ao = !1;
function Ro(e, t) {
  if (!e || Ao) return "";
  Ao = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Ao = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Lr(e) : "";
}
function z0(e) {
  switch (e.tag) {
    case 5:
      return Lr(e.type);
    case 16:
      return Lr("Lazy");
    case 13:
      return Lr("Suspense");
    case 19:
      return Lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ro(e.type, !1)), e;
    case 11:
      return (e = Ro(e.type.render, !1)), e;
    case 1:
      return (e = Ro(e.type, !0)), e;
    default:
      return "";
  }
}
function La(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case In:
      return "Portal";
    case ka:
      return "Profiler";
    case ql:
      return "StrictMode";
    case Ma:
      return "Suspense";
    case Na:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pp:
        return (e.displayName || "Context") + ".Consumer";
      case fp:
        return (e._context.displayName || "Context") + ".Provider";
      case Ql:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zl:
        return (
          (t = e.displayName || null), t !== null ? t : La(e.type) || "Memo"
        );
      case Lt:
        (t = e._payload), (e = e._init);
        try {
          return La(e(t));
        } catch {}
    }
  return null;
}
function _0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return La(t);
    case 8:
      return t === ql ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function mp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function F0(e) {
  var t = mp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ri(e) {
  e._valueTracker || (e._valueTracker = F0(e));
}
function gp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = mp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function gs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Da(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Cc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function vp(e, t) {
  (t = t.checked), t != null && Xl(e, "checked", t, !1);
}
function Aa(e, t) {
  vp(e, t);
  var n = Zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ra(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ra(e, t.type, Zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Pc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ra(e, t, n) {
  (t !== "number" || gs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dr = Array.isArray;
function er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Oa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function jc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Dr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function yp(e, t) {
  var n = Zt(t.value),
    r = Zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function bc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Va(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? xp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Oi,
  wp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Oi = Oi || document.createElement("div"),
          Oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Oi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vr = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
    gridArea: !0,
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
  B0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vr).forEach(function (e) {
  B0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vr[t] = Vr[e]);
  });
});
function Sp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vr.hasOwnProperty(e) && Vr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Sp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var $0 = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ia(e, t) {
  if (t) {
    if ($0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function za(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _a = null;
function Jl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fa = null,
  tr = null,
  nr = null;
function kc(e) {
  if ((e = Ti(e))) {
    if (typeof Fa != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = lo(t)), Fa(e.stateNode, e.type, t));
  }
}
function Ep(e) {
  tr ? (nr ? nr.push(e) : (nr = [e])) : (tr = e);
}
function Cp() {
  if (tr) {
    var e = tr,
      t = nr;
    if (((nr = tr = null), kc(e), t)) for (e = 0; e < t.length; e++) kc(t[e]);
  }
}
function Pp(e, t) {
  return e(t);
}
function jp() {}
var Oo = !1;
function bp(e, t, n) {
  if (Oo) return e(t, n);
  Oo = !0;
  try {
    return Pp(e, t, n);
  } finally {
    (Oo = !1), (tr !== null || nr !== null) && (jp(), Cp());
  }
}
function Zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = lo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Ba = !1;
if (Et)
  try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", {
      get: function () {
        Ba = !0;
      },
    }),
      window.addEventListener("test", Tr, Tr),
      window.removeEventListener("test", Tr, Tr);
  } catch {
    Ba = !1;
  }
function U0(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ir = !1,
  vs = null,
  ys = !1,
  $a = null,
  H0 = {
    onError: function (e) {
      (Ir = !0), (vs = e);
    },
  };
function W0(e, t, n, r, i, s, o, l, a) {
  (Ir = !1), (vs = null), U0.apply(H0, arguments);
}
function G0(e, t, n, r, i, s, o, l, a) {
  if ((W0.apply(this, arguments), Ir)) {
    if (Ir) {
      var u = vs;
      (Ir = !1), (vs = null);
    } else throw Error(N(198));
    ys || ((ys = !0), ($a = u));
  }
}
function An(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Mc(e) {
  if (An(e) !== e) throw Error(N(188));
}
function K0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = An(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Mc(i), e;
        if (s === r) return Mc(i), t;
        s = s.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Mp(e) {
  return (e = K0(e)), e !== null ? Np(e) : null;
}
function Np(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Np(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Lp = _e.unstable_scheduleCallback,
  Nc = _e.unstable_cancelCallback,
  Y0 = _e.unstable_shouldYield,
  X0 = _e.unstable_requestPaint,
  se = _e.unstable_now,
  q0 = _e.unstable_getCurrentPriorityLevel,
  eu = _e.unstable_ImmediatePriority,
  Dp = _e.unstable_UserBlockingPriority,
  xs = _e.unstable_NormalPriority,
  Q0 = _e.unstable_LowPriority,
  Ap = _e.unstable_IdlePriority,
  io = null,
  ut = null;
function Z0(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(io, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : tv,
  J0 = Math.log,
  ev = Math.LN2;
function tv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((J0(e) / ev) | 0)) | 0;
}
var Vi = 64,
  Ii = 4194304;
function Ar(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ws(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Ar(l)) : ((s &= o), s !== 0 && (r = Ar(s)));
  } else (o = n & ~i), o !== 0 ? (r = Ar(o)) : s !== 0 && (r = Ar(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - nt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function nv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function rv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - nt(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = nv(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Ua(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Rp() {
  var e = Vi;
  return (Vi <<= 1), !(Vi & 4194240) && (Vi = 64), e;
}
function Vo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nt(t)),
    (e[t] = n);
}
function iv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - nt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function tu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var H = 0;
function Op(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vp,
  nu,
  Ip,
  zp,
  _p,
  Ha = !1,
  zi = [],
  Bt = null,
  $t = null,
  Ut = null,
  Jr = new Map(),
  ei = new Map(),
  Rt = [],
  sv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Lc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Bt = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      Ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ei.delete(t.pointerId);
  }
}
function Er(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Ti(t)), t !== null && nu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ov(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Bt = Er(Bt, e, t, n, r, i)), !0;
    case "dragenter":
      return ($t = Er($t, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ut = Er(Ut, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Jr.set(s, Er(Jr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), ei.set(s, Er(ei.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Fp(e) {
  var t = yn(e.target);
  if (t !== null) {
    var n = An(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = kp(n)), t !== null)) {
          (e.blockedOn = t),
            _p(e.priority, function () {
              Ip(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ns(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Wa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_a = r), n.target.dispatchEvent(r), (_a = null);
    } else return (t = Ti(n)), t !== null && nu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Dc(e, t, n) {
  ns(e) && n.delete(t);
}
function av() {
  (Ha = !1),
    Bt !== null && ns(Bt) && (Bt = null),
    $t !== null && ns($t) && ($t = null),
    Ut !== null && ns(Ut) && (Ut = null),
    Jr.forEach(Dc),
    ei.forEach(Dc);
}
function Cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ha ||
      ((Ha = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, av)));
}
function ti(e) {
  function t(i) {
    return Cr(i, e);
  }
  if (0 < zi.length) {
    Cr(zi[0], e);
    for (var n = 1; n < zi.length; n++) {
      var r = zi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Bt !== null && Cr(Bt, e),
      $t !== null && Cr($t, e),
      Ut !== null && Cr(Ut, e),
      Jr.forEach(t),
      ei.forEach(t),
      n = 0;
    n < Rt.length;
    n++
  )
    (r = Rt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
    Fp(n), n.blockedOn === null && Rt.shift();
}
var rr = bt.ReactCurrentBatchConfig,
  Ss = !0;
function lv(e, t, n, r) {
  var i = H,
    s = rr.transition;
  rr.transition = null;
  try {
    (H = 1), ru(e, t, n, r);
  } finally {
    (H = i), (rr.transition = s);
  }
}
function uv(e, t, n, r) {
  var i = H,
    s = rr.transition;
  rr.transition = null;
  try {
    (H = 4), ru(e, t, n, r);
  } finally {
    (H = i), (rr.transition = s);
  }
}
function ru(e, t, n, r) {
  if (Ss) {
    var i = Wa(e, t, n, r);
    if (i === null) Go(e, t, r, Ts, n), Lc(e, r);
    else if (ov(i, e, t, n, r)) r.stopPropagation();
    else if ((Lc(e, r), t & 4 && -1 < sv.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ti(i);
        if (
          (s !== null && Vp(s),
          (s = Wa(e, t, n, r)),
          s === null && Go(e, t, r, Ts, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Go(e, t, r, null, n);
  }
}
var Ts = null;
function Wa(e, t, n, r) {
  if (((Ts = null), (e = Jl(r)), (e = yn(e)), e !== null))
    if (((t = An(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = kp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ts = e), null;
}
function Bp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (q0()) {
        case eu:
          return 1;
        case Dp:
          return 4;
        case xs:
        case Q0:
          return 16;
        case Ap:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null,
  iu = null,
  rs = null;
function $p() {
  if (rs) return rs;
  var e,
    t = iu,
    n = t.length,
    r,
    i = "value" in Vt ? Vt.value : Vt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (rs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function is(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _i() {
  return !0;
}
function Ac() {
  return !1;
}
function $e(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? _i
        : Ac),
      (this.isPropagationStopped = Ac),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _i));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _i));
      },
      persist: function () {},
      isPersistent: _i,
    }),
    t
  );
}
var vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  su = $e(vr),
  Si = ee({}, vr, { view: 0, detail: 0 }),
  cv = $e(Si),
  Io,
  zo,
  Pr,
  so = ee({}, Si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ou,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Pr &&
            (Pr && e.type === "mousemove"
              ? ((Io = e.screenX - Pr.screenX), (zo = e.screenY - Pr.screenY))
              : (zo = Io = 0),
            (Pr = e)),
          Io);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zo;
    },
  }),
  Rc = $e(so),
  dv = ee({}, so, { dataTransfer: 0 }),
  fv = $e(dv),
  pv = ee({}, Si, { relatedTarget: 0 }),
  _o = $e(pv),
  hv = ee({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mv = $e(hv),
  gv = ee({}, vr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vv = $e(gv),
  yv = ee({}, vr, { data: 0 }),
  Oc = $e(yv),
  xv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  wv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Sv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Tv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sv[e]) ? !!t[e] : !1;
}
function ou() {
  return Tv;
}
var Ev = ee({}, Si, {
    key: function (e) {
      if (e.key) {
        var t = xv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = is(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? wv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ou,
    charCode: function (e) {
      return e.type === "keypress" ? is(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? is(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Cv = $e(Ev),
  Pv = ee({}, so, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vc = $e(Pv),
  jv = ee({}, Si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ou,
  }),
  bv = $e(jv),
  kv = ee({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mv = $e(kv),
  Nv = ee({}, so, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Lv = $e(Nv),
  Dv = [9, 13, 27, 32],
  au = Et && "CompositionEvent" in window,
  zr = null;
Et && "documentMode" in document && (zr = document.documentMode);
var Av = Et && "TextEvent" in window && !zr,
  Up = Et && (!au || (zr && 8 < zr && 11 >= zr)),
  Ic = " ",
  zc = !1;
function Hp(e, t) {
  switch (e) {
    case "keyup":
      return Dv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var _n = !1;
function Rv(e, t) {
  switch (e) {
    case "compositionend":
      return Wp(t);
    case "keypress":
      return t.which !== 32 ? null : ((zc = !0), Ic);
    case "textInput":
      return (e = t.data), e === Ic && zc ? null : e;
    default:
      return null;
  }
}
function Ov(e, t) {
  if (_n)
    return e === "compositionend" || (!au && Hp(e, t))
      ? ((e = $p()), (rs = iu = Vt = null), (_n = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Up && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _c(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vv[e.type] : t === "textarea";
}
function Gp(e, t, n, r) {
  Ep(r),
    (t = Es(t, "onChange")),
    0 < t.length &&
      ((n = new su("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _r = null,
  ni = null;
function Iv(e) {
  rh(e, 0);
}
function oo(e) {
  var t = $n(e);
  if (gp(t)) return e;
}
function zv(e, t) {
  if (e === "change") return t;
}
var Kp = !1;
if (Et) {
  var Fo;
  if (Et) {
    var Bo = "oninput" in document;
    if (!Bo) {
      var Fc = document.createElement("div");
      Fc.setAttribute("oninput", "return;"),
        (Bo = typeof Fc.oninput == "function");
    }
    Fo = Bo;
  } else Fo = !1;
  Kp = Fo && (!document.documentMode || 9 < document.documentMode);
}
function Bc() {
  _r && (_r.detachEvent("onpropertychange", Yp), (ni = _r = null));
}
function Yp(e) {
  if (e.propertyName === "value" && oo(ni)) {
    var t = [];
    Gp(t, ni, e, Jl(e)), bp(Iv, t);
  }
}
function _v(e, t, n) {
  e === "focusin"
    ? (Bc(), (_r = t), (ni = n), _r.attachEvent("onpropertychange", Yp))
    : e === "focusout" && Bc();
}
function Fv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return oo(ni);
}
function Bv(e, t) {
  if (e === "click") return oo(t);
}
function $v(e, t) {
  if (e === "input" || e === "change") return oo(t);
}
function Uv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var it = typeof Object.is == "function" ? Object.is : Uv;
function ri(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ba.call(t, i) || !it(e[i], t[i])) return !1;
  }
  return !0;
}
function $c(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uc(e, t) {
  var n = $c(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $c(n);
  }
}
function Xp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qp() {
  for (var e = window, t = gs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = gs(e.document);
  }
  return t;
}
function lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hv(e) {
  var t = qp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && lu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Uc(n, s));
        var o = Uc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Wv = Et && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  Ga = null,
  Fr = null,
  Ka = !1;
function Hc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ka ||
    Fn == null ||
    Fn !== gs(r) ||
    ((r = Fn),
    "selectionStart" in r && lu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && ri(Fr, r)) ||
      ((Fr = r),
      (r = Es(Ga, "onSelect")),
      0 < r.length &&
        ((t = new su("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fn))));
}
function Fi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bn = {
    animationend: Fi("Animation", "AnimationEnd"),
    animationiteration: Fi("Animation", "AnimationIteration"),
    animationstart: Fi("Animation", "AnimationStart"),
    transitionend: Fi("Transition", "TransitionEnd"),
  },
  $o = {},
  Qp = {};
Et &&
  ((Qp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bn.animationend.animation,
    delete Bn.animationiteration.animation,
    delete Bn.animationstart.animation),
  "TransitionEvent" in window || delete Bn.transitionend.transition);
function ao(e) {
  if ($o[e]) return $o[e];
  if (!Bn[e]) return e;
  var t = Bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qp) return ($o[e] = t[n]);
  return e;
}
var Zp = ao("animationend"),
  Jp = ao("animationiteration"),
  eh = ao("animationstart"),
  th = ao("transitionend"),
  nh = new Map(),
  Wc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function sn(e, t) {
  nh.set(e, t), Dn(t, [e]);
}
for (var Uo = 0; Uo < Wc.length; Uo++) {
  var Ho = Wc[Uo],
    Gv = Ho.toLowerCase(),
    Kv = Ho[0].toUpperCase() + Ho.slice(1);
  sn(Gv, "on" + Kv);
}
sn(Zp, "onAnimationEnd");
sn(Jp, "onAnimationIteration");
sn(eh, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(th, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Yv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function Gc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), G0(r, t, void 0, e), (e.currentTarget = null);
}
function rh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          Gc(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Gc(i, l, u), (s = a);
        }
    }
  }
  if (ys) throw ((e = $a), (ys = !1), ($a = null), e);
}
function K(e, t) {
  var n = t[Za];
  n === void 0 && (n = t[Za] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ih(t, e, 2, !1), n.add(r));
}
function Wo(e, t, n) {
  var r = 0;
  t && (r |= 4), ih(n, e, r, t);
}
var Bi = "_reactListening" + Math.random().toString(36).slice(2);
function ii(e) {
  if (!e[Bi]) {
    (e[Bi] = !0),
      dp.forEach(function (n) {
        n !== "selectionchange" && (Yv.has(n) || Wo(n, !1, e), Wo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bi] || ((t[Bi] = !0), Wo("selectionchange", !1, t));
  }
}
function ih(e, t, n, r) {
  switch (Bp(t)) {
    case 1:
      var i = lv;
      break;
    case 4:
      i = uv;
      break;
    default:
      i = ru;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ba ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Go(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = yn(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  bp(function () {
    var u = s,
      c = Jl(n),
      d = [];
    e: {
      var h = nh.get(e);
      if (h !== void 0) {
        var v = su,
          y = e;
        switch (e) {
          case "keypress":
            if (is(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Cv;
            break;
          case "focusin":
            (y = "focus"), (v = _o);
            break;
          case "focusout":
            (y = "blur"), (v = _o);
            break;
          case "beforeblur":
          case "afterblur":
            v = _o;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Rc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = fv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = bv;
            break;
          case Zp:
          case Jp:
          case eh:
            v = mv;
            break;
          case th:
            v = Mv;
            break;
          case "scroll":
            v = cv;
            break;
          case "wheel":
            v = Lv;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = vv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Vc;
        }
        var x = (t & 4) !== 0,
          S = !x && e === "scroll",
          p = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var m = u, g; m !== null; ) {
          g = m;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              p !== null && ((w = Zr(m, p)), w != null && x.push(si(m, w, g)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < x.length &&
          ((h = new v(h, y, null, n, c)), d.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== _a &&
            (y = n.relatedTarget || n.fromElement) &&
            (yn(y) || y[Ct]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? yn(y) : null),
              y !== null &&
                ((S = An(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((x = Rc),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Vc),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (S = v == null ? h : $n(v)),
            (g = y == null ? h : $n(y)),
            (h = new x(w, m + "leave", v, n, c)),
            (h.target = S),
            (h.relatedTarget = g),
            (w = null),
            yn(c) === u &&
              ((x = new x(p, m + "enter", y, n, c)),
              (x.target = g),
              (x.relatedTarget = S),
              (w = x)),
            (S = w),
            v && y)
          )
            t: {
              for (x = v, p = y, m = 0, g = x; g; g = Vn(g)) m++;
              for (g = 0, w = p; w; w = Vn(w)) g++;
              for (; 0 < m - g; ) (x = Vn(x)), m--;
              for (; 0 < g - m; ) (p = Vn(p)), g--;
              for (; m--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = Vn(x)), (p = Vn(p));
              }
              x = null;
            }
          else x = null;
          v !== null && Kc(d, h, v, x, !1),
            y !== null && S !== null && Kc(d, S, y, x, !0);
        }
      }
      e: {
        if (
          ((h = u ? $n(u) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var T = zv;
        else if (_c(h))
          if (Kp) T = $v;
          else {
            T = Fv;
            var j = _v;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (T = Bv);
        if (T && (T = T(e, u))) {
          Gp(d, T, n, c);
          break e;
        }
        j && j(e, h, u),
          e === "focusout" &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === "number" &&
            Ra(h, "number", h.value);
      }
      switch (((j = u ? $n(u) : window), e)) {
        case "focusin":
          (_c(j) || j.contentEditable === "true") &&
            ((Fn = j), (Ga = u), (Fr = null));
          break;
        case "focusout":
          Fr = Ga = Fn = null;
          break;
        case "mousedown":
          Ka = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ka = !1), Hc(d, n, c);
          break;
        case "selectionchange":
          if (Wv) break;
        case "keydown":
        case "keyup":
          Hc(d, n, c);
      }
      var M;
      if (au)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        _n
          ? Hp(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Up &&
          n.locale !== "ko" &&
          (_n || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && _n && (M = $p())
            : ((Vt = c),
              (iu = "value" in Vt ? Vt.value : Vt.textContent),
              (_n = !0))),
        (j = Es(u, C)),
        0 < j.length &&
          ((C = new Oc(C, e, null, n, c)),
          d.push({ event: C, listeners: j }),
          M ? (C.data = M) : ((M = Wp(n)), M !== null && (C.data = M)))),
        (M = Av ? Rv(e, n) : Ov(e, n)) &&
          ((u = Es(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Oc("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = M)));
    }
    rh(d, t);
  });
}
function si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Es(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Zr(e, n)),
      s != null && r.unshift(si(e, s, i)),
      (s = Zr(e, t)),
      s != null && r.push(si(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Kc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Zr(n, s)), a != null && o.unshift(si(n, a, l)))
        : i || ((a = Zr(n, s)), a != null && o.push(si(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Xv = /\r\n?/g,
  qv = /\u0000|\uFFFD/g;
function Yc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Xv,
      `
`
    )
    .replace(qv, "");
}
function $i(e, t, n) {
  if (((t = Yc(t)), Yc(e) !== t && n)) throw Error(N(425));
}
function Cs() {}
var Ya = null,
  Xa = null;
function qa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Qa = typeof setTimeout == "function" ? setTimeout : void 0,
  Qv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xc = typeof Promise == "function" ? Promise : void 0,
  Zv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xc < "u"
      ? function (e) {
          return Xc.resolve(null).then(e).catch(Jv);
        }
      : Qa;
function Jv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ko(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ti(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ti(t);
}
function Ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yr = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + yr,
  oi = "__reactProps$" + yr,
  Ct = "__reactContainer$" + yr,
  Za = "__reactEvents$" + yr,
  e1 = "__reactListeners$" + yr,
  t1 = "__reactHandles$" + yr;
function yn(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ct] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qc(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = qc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ti(e) {
  return (
    (e = e[at] || e[Ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function lo(e) {
  return e[oi] || null;
}
var Ja = [],
  Un = -1;
function on(e) {
  return { current: e };
}
function Y(e) {
  0 > Un || ((e.current = Ja[Un]), (Ja[Un] = null), Un--);
}
function G(e, t) {
  Un++, (Ja[Un] = e.current), (e.current = t);
}
var Jt = {},
  Ce = on(Jt),
  Le = on(!1),
  jn = Jt;
function lr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function De(e) {
  return (e = e.childContextTypes), e != null;
}
function Ps() {
  Y(Le), Y(Ce);
}
function Qc(e, t, n) {
  if (Ce.current !== Jt) throw Error(N(168));
  G(Ce, t), G(Le, n);
}
function sh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, _0(e) || "Unknown", i));
  return ee({}, n, r);
}
function js(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (jn = Ce.current),
    G(Ce, e),
    G(Le, Le.current),
    !0
  );
}
function Zc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = sh(e, t, jn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Le),
      Y(Ce),
      G(Ce, e))
    : Y(Le),
    G(Le, n);
}
var ht = null,
  uo = !1,
  Yo = !1;
function oh(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
function n1(e) {
  (uo = !0), oh(e);
}
function an() {
  if (!Yo && ht !== null) {
    Yo = !0;
    var e = 0,
      t = H;
    try {
      var n = ht;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ht = null), (uo = !1);
    } catch (i) {
      throw (ht !== null && (ht = ht.slice(e + 1)), Lp(eu, an), i);
    } finally {
      (H = t), (Yo = !1);
    }
  }
  return null;
}
var Hn = [],
  Wn = 0,
  bs = null,
  ks = 0,
  Ge = [],
  Ke = 0,
  bn = null,
  mt = 1,
  gt = "";
function pn(e, t) {
  (Hn[Wn++] = ks), (Hn[Wn++] = bs), (bs = e), (ks = t);
}
function ah(e, t, n) {
  (Ge[Ke++] = mt), (Ge[Ke++] = gt), (Ge[Ke++] = bn), (bn = e);
  var r = mt;
  e = gt;
  var i = 32 - nt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - nt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (mt = (1 << (32 - nt(t) + i)) | (n << i) | r),
      (gt = s + e);
  } else (mt = (1 << s) | (n << i) | r), (gt = e);
}
function uu(e) {
  e.return !== null && (pn(e, 1), ah(e, 1, 0));
}
function cu(e) {
  for (; e === bs; )
    (bs = Hn[--Wn]), (Hn[Wn] = null), (ks = Hn[--Wn]), (Hn[Wn] = null);
  for (; e === bn; )
    (bn = Ge[--Ke]),
      (Ge[Ke] = null),
      (gt = Ge[--Ke]),
      (Ge[Ke] = null),
      (mt = Ge[--Ke]),
      (Ge[Ke] = null);
}
var ze = null,
  Ie = null,
  X = !1,
  tt = null;
function lh(e, t) {
  var n = Ye(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Jc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Ie = Ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bn !== null ? { id: mt, overflow: gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ye(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function el(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tl(e) {
  if (X) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!Jc(e, t)) {
        if (el(e)) throw Error(N(418));
        t = Ht(n.nextSibling);
        var r = ze;
        t && Jc(e, t)
          ? lh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (ze = e));
      }
    } else {
      if (el(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (ze = e);
    }
  }
}
function ed(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function Ui(e) {
  if (e !== ze) return !1;
  if (!X) return ed(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !qa(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (el(e)) throw (uh(), Error(N(418)));
    for (; t; ) lh(e, t), (t = Ht(t.nextSibling));
  }
  if ((ed(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = ze ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function uh() {
  for (var e = Ie; e; ) e = Ht(e.nextSibling);
}
function ur() {
  (Ie = ze = null), (X = !1);
}
function du(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
var r1 = bt.ReactCurrentBatchConfig;
function Je(e, t) {
  if (e && e.defaultProps) {
    (t = ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ms = on(null),
  Ns = null,
  Gn = null,
  fu = null;
function pu() {
  fu = Gn = Ns = null;
}
function hu(e) {
  var t = Ms.current;
  Y(Ms), (e._currentValue = t);
}
function nl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ir(e, t) {
  (Ns = e),
    (fu = Gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function qe(e) {
  var t = e._currentValue;
  if (fu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
      if (Ns === null) throw Error(N(308));
      (Gn = e), (Ns.dependencies = { lanes: 0, firstContext: e });
    } else Gn = Gn.next = e;
  return t;
}
var xn = null;
function mu(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function ch(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), mu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Pt(e, r)
  );
}
function Pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Dt = !1;
function gu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function dh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Pt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), mu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Pt(e, n)
  );
}
function ss(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), tu(e, n);
  }
}
function td(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ls(e, t, n, r) {
  var i = e.updateQueue;
  Dt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var h = l.lane,
        v = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            x = l;
          switch (((h = t), (v = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                d = y.call(v, d, h);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (h = typeof y == "function" ? y.call(v, d, h) : y),
                h == null)
              )
                break e;
              d = ee({}, d, h);
              break e;
            case 2:
              Dt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [l]) : h.push(l));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = d)) : (c = c.next = v),
          (o |= h);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Mn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function nd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var fh = new cp.Component().refs;
function rl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var co = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? An(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      i = Kt(e),
      s = yt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Wt(e, s, i)),
      t !== null && (rt(t, e, i, r), ss(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      i = Kt(e),
      s = yt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Wt(e, s, i)),
      t !== null && (rt(t, e, i, r), ss(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = Kt(e),
      i = yt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Wt(e, i, r)),
      t !== null && (rt(t, e, r, n), ss(t, e, r));
  },
};
function rd(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ri(n, r) || !ri(i, s)
      : !0
  );
}
function ph(e, t, n) {
  var r = !1,
    i = Jt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = qe(s))
      : ((i = De(t) ? jn : Ce.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? lr(e, i) : Jt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = co),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function id(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && co.enqueueReplaceState(t, t.state, null);
}
function il(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = fh), gu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = qe(s))
    : ((s = De(t) ? jn : Ce.current), (i.context = lr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (rl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && co.enqueueReplaceState(i, i.state, null),
      Ls(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === fh && (l = i.refs = {}),
              o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Hi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sd(e) {
  var t = e._init;
  return t(e._payload);
}
function hh(e) {
  function t(p, m) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function i(p, m) {
    return (p = Yt(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, m, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, m, g, w) {
    return m === null || m.tag !== 6
      ? ((m = ta(g, p.mode, w)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m);
  }
  function a(p, m, g, w) {
    var T = g.type;
    return T === zn
      ? c(p, m, g.props.children, w, g.key)
      : m !== null &&
        (m.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === Lt &&
            sd(T) === m.type))
      ? ((w = i(m, g.props)), (w.ref = jr(p, m, g)), (w.return = p), w)
      : ((w = ds(g.type, g.key, g.props, null, p.mode, w)),
        (w.ref = jr(p, m, g)),
        (w.return = p),
        w);
  }
  function u(p, m, g, w) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = na(g, p.mode, w)), (m.return = p), m)
      : ((m = i(m, g.children || [])), (m.return = p), m);
  }
  function c(p, m, g, w, T) {
    return m === null || m.tag !== 7
      ? ((m = En(g, p.mode, w, T)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m);
  }
  function d(p, m, g) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = ta("" + m, p.mode, g)), (m.return = p), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ai:
          return (
            (g = ds(m.type, m.key, m.props, null, p.mode, g)),
            (g.ref = jr(p, null, m)),
            (g.return = p),
            g
          );
        case In:
          return (m = na(m, p.mode, g)), (m.return = p), m;
        case Lt:
          var w = m._init;
          return d(p, w(m._payload), g);
      }
      if (Dr(m) || Sr(m))
        return (m = En(m, p.mode, g, null)), (m.return = p), m;
      Hi(p, m);
    }
    return null;
  }
  function h(p, m, g, w) {
    var T = m !== null ? m.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return T !== null ? null : l(p, m, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ai:
          return g.key === T ? a(p, m, g, w) : null;
        case In:
          return g.key === T ? u(p, m, g, w) : null;
        case Lt:
          return (T = g._init), h(p, m, T(g._payload), w);
      }
      if (Dr(g) || Sr(g)) return T !== null ? null : c(p, m, g, w, null);
      Hi(p, g);
    }
    return null;
  }
  function v(p, m, g, w, T) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(g) || null), l(m, p, "" + w, T);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ai:
          return (p = p.get(w.key === null ? g : w.key) || null), a(m, p, w, T);
        case In:
          return (p = p.get(w.key === null ? g : w.key) || null), u(m, p, w, T);
        case Lt:
          var j = w._init;
          return v(p, m, g, j(w._payload), T);
      }
      if (Dr(w) || Sr(w)) return (p = p.get(g) || null), c(m, p, w, T, null);
      Hi(m, w);
    }
    return null;
  }
  function y(p, m, g, w) {
    for (
      var T = null, j = null, M = m, C = (m = 0), b = null;
      M !== null && C < g.length;
      C++
    ) {
      M.index > C ? ((b = M), (M = null)) : (b = M.sibling);
      var P = h(p, M, g[C], w);
      if (P === null) {
        M === null && (M = b);
        break;
      }
      e && M && P.alternate === null && t(p, M),
        (m = s(P, m, C)),
        j === null ? (T = P) : (j.sibling = P),
        (j = P),
        (M = b);
    }
    if (C === g.length) return n(p, M), X && pn(p, C), T;
    if (M === null) {
      for (; C < g.length; C++)
        (M = d(p, g[C], w)),
          M !== null &&
            ((m = s(M, m, C)), j === null ? (T = M) : (j.sibling = M), (j = M));
      return X && pn(p, C), T;
    }
    for (M = r(p, M); C < g.length; C++)
      (b = v(M, p, C, g[C], w)),
        b !== null &&
          (e && b.alternate !== null && M.delete(b.key === null ? C : b.key),
          (m = s(b, m, C)),
          j === null ? (T = b) : (j.sibling = b),
          (j = b));
    return (
      e &&
        M.forEach(function (L) {
          return t(p, L);
        }),
      X && pn(p, C),
      T
    );
  }
  function x(p, m, g, w) {
    var T = Sr(g);
    if (typeof T != "function") throw Error(N(150));
    if (((g = T.call(g)), g == null)) throw Error(N(151));
    for (
      var j = (T = null), M = m, C = (m = 0), b = null, P = g.next();
      M !== null && !P.done;
      C++, P = g.next()
    ) {
      M.index > C ? ((b = M), (M = null)) : (b = M.sibling);
      var L = h(p, M, P.value, w);
      if (L === null) {
        M === null && (M = b);
        break;
      }
      e && M && L.alternate === null && t(p, M),
        (m = s(L, m, C)),
        j === null ? (T = L) : (j.sibling = L),
        (j = L),
        (M = b);
    }
    if (P.done) return n(p, M), X && pn(p, C), T;
    if (M === null) {
      for (; !P.done; C++, P = g.next())
        (P = d(p, P.value, w)),
          P !== null &&
            ((m = s(P, m, C)), j === null ? (T = P) : (j.sibling = P), (j = P));
      return X && pn(p, C), T;
    }
    for (M = r(p, M); !P.done; C++, P = g.next())
      (P = v(M, p, C, P.value, w)),
        P !== null &&
          (e && P.alternate !== null && M.delete(P.key === null ? C : P.key),
          (m = s(P, m, C)),
          j === null ? (T = P) : (j.sibling = P),
          (j = P));
    return (
      e &&
        M.forEach(function (A) {
          return t(p, A);
        }),
      X && pn(p, C),
      T
    );
  }
  function S(p, m, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === zn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ai:
          e: {
            for (var T = g.key, j = m; j !== null; ) {
              if (j.key === T) {
                if (((T = g.type), T === zn)) {
                  if (j.tag === 7) {
                    n(p, j.sibling),
                      (m = i(j, g.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  j.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Lt &&
                    sd(T) === j.type)
                ) {
                  n(p, j.sibling),
                    (m = i(j, g.props)),
                    (m.ref = jr(p, j, g)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, j);
                break;
              } else t(p, j);
              j = j.sibling;
            }
            g.type === zn
              ? ((m = En(g.props.children, p.mode, w, g.key)),
                (m.return = p),
                (p = m))
              : ((w = ds(g.type, g.key, g.props, null, p.mode, w)),
                (w.ref = jr(p, m, g)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case In:
          e: {
            for (j = g.key; m !== null; ) {
              if (m.key === j)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  n(p, m.sibling),
                    (m = i(m, g.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = na(g, p.mode, w)), (m.return = p), (p = m);
          }
          return o(p);
        case Lt:
          return (j = g._init), S(p, m, j(g._payload), w);
      }
      if (Dr(g)) return y(p, m, g, w);
      if (Sr(g)) return x(p, m, g, w);
      Hi(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, g)), (m.return = p), (p = m))
          : (n(p, m), (m = ta(g, p.mode, w)), (m.return = p), (p = m)),
        o(p))
      : n(p, m);
  }
  return S;
}
var cr = hh(!0),
  mh = hh(!1),
  Ei = {},
  ct = on(Ei),
  ai = on(Ei),
  li = on(Ei);
function wn(e) {
  if (e === Ei) throw Error(N(174));
  return e;
}
function vu(e, t) {
  switch ((G(li, t), G(ai, e), G(ct, Ei), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Va(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Va(t, e));
  }
  Y(ct), G(ct, t);
}
function dr() {
  Y(ct), Y(ai), Y(li);
}
function gh(e) {
  wn(li.current);
  var t = wn(ct.current),
    n = Va(t, e.type);
  t !== n && (G(ai, e), G(ct, n));
}
function yu(e) {
  ai.current === e && (Y(ct), Y(ai));
}
var Q = on(0);
function Ds(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Xo = [];
function xu() {
  for (var e = 0; e < Xo.length; e++)
    Xo[e]._workInProgressVersionPrimary = null;
  Xo.length = 0;
}
var os = bt.ReactCurrentDispatcher,
  qo = bt.ReactCurrentBatchConfig,
  kn = 0,
  J = null,
  le = null,
  de = null,
  As = !1,
  Br = !1,
  ui = 0,
  i1 = 0;
function ye() {
  throw Error(N(321));
}
function wu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1;
  return !0;
}
function Su(e, t, n, r, i, s) {
  if (
    ((kn = s),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (os.current = e === null || e.memoizedState === null ? l1 : u1),
    (e = n(r, i)),
    Br)
  ) {
    s = 0;
    do {
      if (((Br = !1), (ui = 0), 25 <= s)) throw Error(N(301));
      (s += 1),
        (de = le = null),
        (t.updateQueue = null),
        (os.current = c1),
        (e = n(r, i));
    } while (Br);
  }
  if (
    ((os.current = Rs),
    (t = le !== null && le.next !== null),
    (kn = 0),
    (de = le = J = null),
    (As = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Tu() {
  var e = ui !== 0;
  return (ui = 0), e;
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (J.memoizedState = de = e) : (de = de.next = e), de;
}
function Qe() {
  if (le === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = de === null ? J.memoizedState : de.next;
  if (t !== null) (de = t), (le = e);
  else {
    if (e === null) throw Error(N(310));
    (le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      de === null ? (J.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function ci(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qo(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = le,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((kn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (o = r)) : (a = a.next = d),
          (J.lanes |= c),
          (Mn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      it(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (J.lanes |= s), (Mn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zo(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    it(s, t.memoizedState) || (Ne = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function vh() {}
function yh(e, t) {
  var n = J,
    r = Qe(),
    i = t(),
    s = !it(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ne = !0)),
    (r = r.queue),
    Eu(Sh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      di(9, wh.bind(null, n, r, i, t), void 0, null),
      fe === null)
    )
      throw Error(N(349));
    kn & 30 || xh(n, t, i);
  }
  return i;
}
function xh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Th(t) && Eh(e);
}
function Sh(e, t, n) {
  return n(function () {
    Th(t) && Eh(e);
  });
}
function Th(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function Eh(e) {
  var t = Pt(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function od(e) {
  var t = ot();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ci,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = a1.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function di(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ch() {
  return Qe().memoizedState;
}
function as(e, t, n, r) {
  var i = ot();
  (J.flags |= e),
    (i.memoizedState = di(1 | t, n, void 0, r === void 0 ? null : r));
}
function fo(e, t, n, r) {
  var i = Qe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (le !== null) {
    var o = le.memoizedState;
    if (((s = o.destroy), r !== null && wu(r, o.deps))) {
      i.memoizedState = di(t, n, s, r);
      return;
    }
  }
  (J.flags |= e), (i.memoizedState = di(1 | t, n, s, r));
}
function ad(e, t) {
  return as(8390656, 8, e, t);
}
function Eu(e, t) {
  return fo(2048, 8, e, t);
}
function Ph(e, t) {
  return fo(4, 2, e, t);
}
function jh(e, t) {
  return fo(4, 4, e, t);
}
function bh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function kh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fo(4, 4, bh.bind(null, t, e), n)
  );
}
function Cu() {}
function Mh(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Nh(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lh(e, t, n) {
  return kn & 21
    ? (it(n, t) || ((n = Rp()), (J.lanes |= n), (Mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function s1(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = qo.transition;
  qo.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (qo.transition = r);
  }
}
function Dh() {
  return Qe().memoizedState;
}
function o1(e, t, n) {
  var r = Kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ah(e))
  )
    Rh(t, n);
  else if (((n = ch(e, t, n, r)), n !== null)) {
    var i = je();
    rt(n, e, r, i), Oh(n, t, r);
  }
}
function a1(e, t, n) {
  var r = Kt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ah(e)) Rh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), it(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), mu(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ch(e, t, i, r)),
      n !== null && ((i = je()), rt(n, e, r, i), Oh(n, t, r));
  }
}
function Ah(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function Rh(e, t) {
  Br = As = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Oh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), tu(e, n);
  }
}
var Rs = {
    readContext: qe,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  l1 = {
    readContext: qe,
    useCallback: function (e, t) {
      return (ot().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qe,
    useEffect: ad,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        as(4194308, 4, bh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return as(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return as(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ot();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ot();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = o1.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: od,
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      return (ot().memoizedState = e);
    },
    useTransition: function () {
      var e = od(!1),
        t = e[0];
      return (e = s1.bind(null, e[1])), (ot().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        i = ot();
      if (X) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(N(349));
        kn & 30 || xh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        ad(Sh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        di(9, wh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ot(),
        t = fe.identifierPrefix;
      if (X) {
        var n = gt,
          r = mt;
        (n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ui++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = i1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  u1 = {
    readContext: qe,
    useCallback: Mh,
    useContext: qe,
    useEffect: Eu,
    useImperativeHandle: kh,
    useInsertionEffect: Ph,
    useLayoutEffect: jh,
    useMemo: Nh,
    useReducer: Qo,
    useRef: Ch,
    useState: function () {
      return Qo(ci);
    },
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      var t = Qe();
      return Lh(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = Qo(ci)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: vh,
    useSyncExternalStore: yh,
    useId: Dh,
    unstable_isNewReconciler: !1,
  },
  c1 = {
    readContext: qe,
    useCallback: Mh,
    useContext: qe,
    useEffect: Eu,
    useImperativeHandle: kh,
    useInsertionEffect: Ph,
    useLayoutEffect: jh,
    useMemo: Nh,
    useReducer: Zo,
    useRef: Ch,
    useState: function () {
      return Zo(ci);
    },
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      var t = Qe();
      return le === null ? (t.memoizedState = e) : Lh(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = Zo(ci)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: vh,
    useSyncExternalStore: yh,
    useId: Dh,
    unstable_isNewReconciler: !1,
  };
function fr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += z0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Jo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var d1 = typeof WeakMap == "function" ? WeakMap : Map;
function Vh(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vs || ((Vs = !0), (ml = r)), sl(e, t);
    }),
    n
  );
}
function Ih(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        sl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        sl(e, t),
          typeof r != "function" &&
            (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ld(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new d1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = P1.bind(null, e, t, n)), t.then(e, e));
}
function ud(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var f1 = bt.ReactCurrentOwner,
  Ne = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? mh(t, null, n, r) : cr(t, e.child, n, r);
}
function dd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    ir(t, i),
    (r = Su(e, t, n, r, s, i)),
    (n = Tu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        jt(e, t, i))
      : (X && n && uu(t), (t.flags |= 1), Pe(e, t, r, i), t.child)
  );
}
function fd(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Du(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), zh(e, t, s, r, i))
      : ((e = ds(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ri), n(o, r) && e.ref === t.ref)
    )
      return jt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Yt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ri(s, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), jt(e, t, i);
  }
  return ol(e, t, n, r, i);
}
function _h(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(Yn, Oe),
        (Oe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(Yn, Oe),
          (Oe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        G(Yn, Oe),
        (Oe |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(Yn, Oe),
      (Oe |= r);
  return Pe(e, t, i, n), t.child;
}
function Fh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ol(e, t, n, r, i) {
  var s = De(n) ? jn : Ce.current;
  return (
    (s = lr(t, s)),
    ir(t, i),
    (n = Su(e, t, n, r, s, i)),
    (r = Tu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        jt(e, t, i))
      : (X && r && uu(t), (t.flags |= 1), Pe(e, t, n, i), t.child)
  );
}
function pd(e, t, n, r, i) {
  if (De(n)) {
    var s = !0;
    js(t);
  } else s = !1;
  if ((ir(t, i), t.stateNode === null))
    ls(e, t), ph(t, n, r), il(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = qe(u))
      : ((u = De(n) ? jn : Ce.current), (u = lr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && id(t, o, r, u)),
      (Dt = !1);
    var h = t.memoizedState;
    (o.state = h),
      Ls(t, r, o, i),
      (a = t.memoizedState),
      l !== r || h !== a || Le.current || Dt
        ? (typeof c == "function" && (rl(t, n, c, r), (a = t.memoizedState)),
          (l = Dt || rd(t, n, l, r, h, a, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      dh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Je(t.type, l)),
      (o.props = u),
      (d = t.pendingProps),
      (h = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = qe(a))
        : ((a = De(n) ? jn : Ce.current), (a = lr(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== d || h !== a) && id(t, o, r, a)),
      (Dt = !1),
      (h = t.memoizedState),
      (o.state = h),
      Ls(t, r, o, i);
    var y = t.memoizedState;
    l !== d || h !== y || Le.current || Dt
      ? (typeof v == "function" && (rl(t, n, v, r), (y = t.memoizedState)),
        (u = Dt || rd(t, n, u, r, h, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return al(e, t, n, r, s, i);
}
function al(e, t, n, r, i, s) {
  Fh(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Zc(t, n, !1), jt(e, t, s);
  (r = t.stateNode), (f1.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = cr(t, e.child, null, s)), (t.child = cr(t, null, l, s)))
      : Pe(e, t, l, s),
    (t.memoizedState = r.state),
    i && Zc(t, n, !0),
    t.child
  );
}
function Bh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qc(e, t.context, !1),
    vu(e, t.containerInfo);
}
function hd(e, t, n, r, i) {
  return ur(), du(i), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var ll = { dehydrated: null, treeContext: null, retryLane: 0 };
function ul(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $h(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    G(Q, i & 1),
    e === null)
  )
    return (
      tl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = mo(o, r, 0, null)),
              (e = En(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = ul(n)),
              (t.memoizedState = ll),
              e)
            : Pu(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return p1(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Yt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Yt(l, s)) : ((s = En(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ul(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ll),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Yt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Pu(e, t) {
  return (
    (t = mo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wi(e, t, n, r) {
  return (
    r !== null && du(r),
    cr(t, e.child, null, n),
    (e = Pu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function p1(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Jo(Error(N(422)))), Wi(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = mo({ mode: "visible", children: r.children }, i, 0, null)),
        (s = En(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && cr(t, e.child, null, o),
        (t.child.memoizedState = ul(o)),
        (t.memoizedState = ll),
        s);
  if (!(t.mode & 1)) return Wi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(N(419))), (r = Jo(s, r, void 0)), Wi(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Ne || l)) {
    if (((r = fe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Pt(e, i), rt(r, e, i, -1));
    }
    return Lu(), (r = Jo(Error(N(421)))), Wi(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = j1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ie = Ht(i.nextSibling)),
      (ze = t),
      (X = !0),
      (tt = null),
      e !== null &&
        ((Ge[Ke++] = mt),
        (Ge[Ke++] = gt),
        (Ge[Ke++] = bn),
        (mt = e.id),
        (gt = e.overflow),
        (bn = t)),
      (t = Pu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function md(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nl(e.return, t, n);
}
function ea(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Uh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Pe(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && md(e, n, t);
        else if (e.tag === 19) md(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ds(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ea(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ds(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ea(t, !0, n, null, s);
        break;
      case "together":
        ea(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ls(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Yt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function h1(e, t, n) {
  switch (t.tag) {
    case 3:
      Bh(t), ur();
      break;
    case 5:
      gh(t);
      break;
    case 1:
      De(t.type) && js(t);
      break;
    case 4:
      vu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      G(Ms, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $h(e, t, n)
          : (G(Q, Q.current & 1),
            (e = jt(e, t, n)),
            e !== null ? e.sibling : null);
      G(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Uh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _h(e, t, n);
  }
  return jt(e, t, n);
}
var Hh, cl, Wh, Gh;
Hh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
cl = function () {};
Wh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), wn(ct.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Da(e, i)), (r = Da(e, r)), (s = []);
        break;
      case "select":
        (i = ee({}, i, { value: void 0 })),
          (r = ee({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Oa(e, i)), (r = Oa(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Cs);
    }
    Ia(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (qr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (qr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && K("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Gh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function br(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function m1(e, t, n) {
  var r = t.pendingProps;
  switch ((cu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return xe(t), null;
    case 1:
      return De(t.type) && Ps(), xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dr(),
        Y(Le),
        Y(Ce),
        xu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ui(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tt !== null && (yl(tt), (tt = null)))),
        cl(e, t),
        xe(t),
        null
      );
    case 5:
      yu(t);
      var i = wn(li.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return xe(t), null;
        }
        if (((e = wn(ct.current)), Ui(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[at] = t), (r[oi] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Rr.length; i++) K(Rr[i], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K("error", r), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Cc(r, s), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              jc(r, s), K("invalid", r);
          }
          Ia(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      $i(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      $i(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : qr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              Ri(r), Pc(r, s, !0);
              break;
            case "textarea":
              Ri(r), bc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Cs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = xp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[at] = t),
            (e[oi] = r),
            Hh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = za(n, r)), n)) {
              case "dialog":
                K("cancel", e), K("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Rr.length; i++) K(Rr[i], e);
                i = r;
                break;
              case "source":
                K("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                K("error", e), K("load", e), (i = r);
                break;
              case "details":
                K("toggle", e), (i = r);
                break;
              case "input":
                Cc(e, r), (i = Da(e, r)), K("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ee({}, r, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                jc(e, r), (i = Oa(e, r)), K("invalid", e);
                break;
              default:
                i = r;
            }
            Ia(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Tp(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && wp(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Qr(e, a)
                    : typeof a == "number" && Qr(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (qr.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && K("scroll", e)
                      : a != null && Xl(e, s, a, o));
              }
            switch (n) {
              case "input":
                Ri(e), Pc(e, r, !1);
                break;
              case "textarea":
                Ri(e), bc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? er(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      er(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Cs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) Gh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = wn(li.current)), wn(ct.current), Ui(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (s = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                $i(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $i(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return xe(t), null;
    case 13:
      if (
        (Y(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && Ie !== null && t.mode & 1 && !(t.flags & 128))
          uh(), ur(), (t.flags |= 98560), (s = !1);
        else if (((s = Ui(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(N(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(N(317));
            s[at] = t;
          } else
            ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          xe(t), (s = !1);
        } else tt !== null && (yl(tt), (tt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ue === 0 && (ue = 3) : Lu())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return (
        dr(), cl(e, t), e === null && ii(t.stateNode.containerInfo), xe(t), null
      );
    case 10:
      return hu(t.type._context), xe(t), null;
    case 17:
      return De(t.type) && Ps(), xe(t), null;
    case 19:
      if ((Y(Q), (s = t.memoizedState), s === null)) return xe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) br(s, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ds(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    br(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            se() > pr &&
            ((t.flags |= 128), (r = !0), br(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ds(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              br(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !X)
            )
              return xe(t), null;
          } else
            2 * se() - s.renderingStartTime > pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), br(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = se()),
          (t.sibling = null),
          (n = Q.current),
          G(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        Nu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Oe & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function g1(e, t) {
  switch ((cu(t), t.tag)) {
    case 1:
      return (
        De(t.type) && Ps(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dr(),
        Y(Le),
        Y(Ce),
        xu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return yu(t), null;
    case 13:
      if ((Y(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        ur();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(Q), null;
    case 4:
      return dr(), null;
    case 10:
      return hu(t.type._context), null;
    case 22:
    case 23:
      return Nu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gi = !1,
  Se = !1,
  v1 = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function dl(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var gd = !1;
function y1(e, t) {
  if (((Ya = Ss), (e = qp()), lu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (h = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === i && (l = o),
                h === s && ++c === r && (a = o),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xa = { focusedElem: e, selectionRange: n }, Ss = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    S = y.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Je(t.type, x),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (w) {
          te(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (y = gd), (gd = !1), y;
}
function $r(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && dl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function po(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function fl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Kh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Kh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[oi], delete t[Za], delete t[e1], delete t[t1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Yh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Cs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pl(e, t, n), e = e.sibling; e !== null; ) pl(e, t, n), (e = e.sibling);
}
function hl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hl(e, t, n), e = e.sibling; e !== null; ) hl(e, t, n), (e = e.sibling);
}
var he = null,
  et = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) Xh(e, t, n), (n = n.sibling);
}
function Xh(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(io, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Se || Kn(n, t);
    case 6:
      var r = he,
        i = et;
      (he = null),
        kt(e, t, n),
        (he = r),
        (et = i),
        he !== null &&
          (et
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (et
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ko(e.parentNode, n)
              : e.nodeType === 1 && Ko(e, n),
            ti(e))
          : Ko(he, n.stateNode));
      break;
    case 4:
      (r = he),
        (i = et),
        (he = n.stateNode.containerInfo),
        (et = !0),
        kt(e, t, n),
        (he = r),
        (et = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && dl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !Se &&
        (Kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          te(n, t, l);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Se = (r = Se) || n.memoizedState !== null), kt(e, t, n), (Se = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function yd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new v1()),
      t.forEach(function (r) {
        var i = b1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (he = l.stateNode), (et = !1);
              break e;
            case 3:
              (he = l.stateNode.containerInfo), (et = !0);
              break e;
            case 4:
              (he = l.stateNode.containerInfo), (et = !0);
              break e;
          }
          l = l.return;
        }
        if (he === null) throw Error(N(160));
        Xh(s, o, i), (he = null), (et = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        te(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qh(t, e), (t = t.sibling);
}
function qh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), st(e), r & 4)) {
        try {
          $r(3, e, e.return), po(3, e);
        } catch (x) {
          te(e, e.return, x);
        }
        try {
          $r(5, e, e.return);
        } catch (x) {
          te(e, e.return, x);
        }
      }
      break;
    case 1:
      Ze(t, e), st(e), r & 512 && n !== null && Kn(n, n.return);
      break;
    case 5:
      if (
        (Ze(t, e),
        st(e),
        r & 512 && n !== null && Kn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Qr(i, "");
        } catch (x) {
          te(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && vp(i, s),
              za(l, o);
            var u = za(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                d = a[o + 1];
              c === "style"
                ? Tp(i, d)
                : c === "dangerouslySetInnerHTML"
                ? wp(i, d)
                : c === "children"
                ? Qr(i, d)
                : Xl(i, c, d, u);
            }
            switch (l) {
              case "input":
                Aa(i, s);
                break;
              case "textarea":
                yp(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? er(i, !!s.multiple, v, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? er(i, !!s.multiple, s.defaultValue, !0)
                      : er(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[oi] = s;
          } catch (x) {
            te(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          te(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ti(t.containerInfo);
        } catch (x) {
          te(e, e.return, x);
        }
      break;
    case 4:
      Ze(t, e), st(e);
      break;
    case 13:
      Ze(t, e),
        st(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ku = se())),
        r & 4 && yd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Se = (u = Se) || c), Ze(t, e), (Se = u)) : Ze(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (d = O = c; O !== null; ) {
              switch (((h = O), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, h, h.return);
                  break;
                case 1:
                  Kn(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      te(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Kn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    wd(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (O = v)) : wd(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Sp("display", o)));
              } catch (x) {
                te(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                te(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ze(t, e), st(e), r & 4 && yd(e);
      break;
    case 21:
      break;
    default:
      Ze(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Qr(i, ""), (r.flags &= -33));
          var s = vd(e);
          hl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = vd(e);
          pl(e, l, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      te(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function x1(e, t, n) {
  (O = e), Qh(e);
}
function Qh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Gi;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || Se;
        l = Gi;
        var u = Se;
        if (((Gi = o), (Se = a) && !u))
          for (O = i; O !== null; )
            (o = O),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Sd(i)
                : a !== null
                ? ((a.return = o), (O = a))
                : Sd(i);
        for (; s !== null; ) (O = s), Qh(s), (s = s.sibling);
        (O = i), (Gi = l), (Se = u);
      }
      xd(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (O = s)) : xd(e);
  }
}
function xd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Se || po(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && nd(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                nd(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ti(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Se || (t.flags & 512 && fl(t));
      } catch (h) {
        te(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function wd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Sd(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            po(4, t);
          } catch (a) {
            te(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              te(t, i, a);
            }
          }
          var s = t.return;
          try {
            fl(t);
          } catch (a) {
            te(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            fl(t);
          } catch (a) {
            te(t, o, a);
          }
      }
    } catch (a) {
      te(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (O = l);
      break;
    }
    O = t.return;
  }
}
var w1 = Math.ceil,
  Os = bt.ReactCurrentDispatcher,
  ju = bt.ReactCurrentOwner,
  Xe = bt.ReactCurrentBatchConfig,
  B = 0,
  fe = null,
  ae = null,
  ge = 0,
  Oe = 0,
  Yn = on(0),
  ue = 0,
  fi = null,
  Mn = 0,
  ho = 0,
  bu = 0,
  Ur = null,
  Me = null,
  ku = 0,
  pr = 1 / 0,
  pt = null,
  Vs = !1,
  ml = null,
  Gt = null,
  Ki = !1,
  It = null,
  Is = 0,
  Hr = 0,
  gl = null,
  us = -1,
  cs = 0;
function je() {
  return B & 6 ? se() : us !== -1 ? us : (us = se());
}
function Kt(e) {
  return e.mode & 1
    ? B & 2 && ge !== 0
      ? ge & -ge
      : r1.transition !== null
      ? (cs === 0 && (cs = Rp()), cs)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bp(e.type))),
        e)
    : 1;
}
function rt(e, t, n, r) {
  if (50 < Hr) throw ((Hr = 0), (gl = null), Error(N(185)));
  wi(e, n, r),
    (!(B & 2) || e !== fe) &&
      (e === fe && (!(B & 2) && (ho |= n), ue === 4 && Ot(e, ge)),
      Ae(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((pr = se() + 500), uo && an()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  rv(e, t);
  var r = ws(e, e === fe ? ge : 0);
  if (r === 0)
    n !== null && Nc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Nc(n), t === 1))
      e.tag === 0 ? n1(Td.bind(null, e)) : oh(Td.bind(null, e)),
        Zv(function () {
          !(B & 6) && an();
        }),
        (n = null);
    else {
      switch (Op(r)) {
        case 1:
          n = eu;
          break;
        case 4:
          n = Dp;
          break;
        case 16:
          n = xs;
          break;
        case 536870912:
          n = Ap;
          break;
        default:
          n = xs;
      }
      n = sm(n, Zh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Zh(e, t) {
  if (((us = -1), (cs = 0), B & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = ws(e, e === fe ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zs(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var s = em();
    (fe !== e || ge !== t) && ((pt = null), (pr = se() + 500), Tn(e, t));
    do
      try {
        E1();
        break;
      } catch (l) {
        Jh(e, l);
      }
    while (!0);
    pu(),
      (Os.current = s),
      (B = i),
      ae !== null ? (t = 0) : ((fe = null), (ge = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ua(e)), i !== 0 && ((r = i), (t = vl(e, i)))), t === 1)
    )
      throw ((n = fi), Tn(e, 0), Ot(e, r), Ae(e, se()), n);
    if (t === 6) Ot(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !S1(i) &&
          ((t = zs(e, r)),
          t === 2 && ((s = Ua(e)), s !== 0 && ((r = s), (t = vl(e, s)))),
          t === 1))
      )
        throw ((n = fi), Tn(e, 0), Ot(e, r), Ae(e, se()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          hn(e, Me, pt);
          break;
        case 3:
          if (
            (Ot(e, r), (r & 130023424) === r && ((t = ku + 500 - se()), 10 < t))
          ) {
            if (ws(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Qa(hn.bind(null, e, Me, pt), t);
            break;
          }
          hn(e, Me, pt);
          break;
        case 4:
          if ((Ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - nt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * w1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qa(hn.bind(null, e, Me, pt), r);
            break;
          }
          hn(e, Me, pt);
          break;
        case 5:
          hn(e, Me, pt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ae(e, se()), e.callbackNode === n ? Zh.bind(null, e) : null;
}
function vl(e, t) {
  var n = Ur;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = zs(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && yl(t)),
    e
  );
}
function yl(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function S1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!it(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ot(e, t) {
  for (
    t &= ~bu,
      t &= ~ho,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - nt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Td(e) {
  if (B & 6) throw Error(N(327));
  sr();
  var t = ws(e, 0);
  if (!(t & 1)) return Ae(e, se()), null;
  var n = zs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ua(e);
    r !== 0 && ((t = r), (n = vl(e, r)));
  }
  if (n === 1) throw ((n = fi), Tn(e, 0), Ot(e, t), Ae(e, se()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    hn(e, Me, pt),
    Ae(e, se()),
    null
  );
}
function Mu(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((pr = se() + 500), uo && an());
  }
}
function Nn(e) {
  It !== null && It.tag === 0 && !(B & 6) && sr();
  var t = B;
  B |= 1;
  var n = Xe.transition,
    r = H;
  try {
    if (((Xe.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (Xe.transition = n), (B = t), !(B & 6) && an();
  }
}
function Nu() {
  (Oe = Yn.current), Y(Yn);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qv(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((cu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ps();
          break;
        case 3:
          dr(), Y(Le), Y(Ce), xu();
          break;
        case 5:
          yu(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          Y(Q);
          break;
        case 19:
          Y(Q);
          break;
        case 10:
          hu(r.type._context);
          break;
        case 22:
        case 23:
          Nu();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (ae = e = Yt(e.current, null)),
    (ge = Oe = t),
    (ue = 0),
    (fi = null),
    (bu = ho = Mn = 0),
    (Me = Ur = null),
    xn !== null)
  ) {
    for (t = 0; t < xn.length; t++)
      if (((n = xn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    xn = null;
  }
  return e;
}
function Jh(e, t) {
  do {
    var n = ae;
    try {
      if ((pu(), (os.current = Rs), As)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        As = !1;
      }
      if (
        ((kn = 0),
        (de = le = J = null),
        (Br = !1),
        (ui = 0),
        (ju.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (fi = t), (ae = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = ge),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = ud(o);
          if (v !== null) {
            (v.flags &= -257),
              cd(v, o, l, s, t),
              v.mode & 1 && ld(s, u, t),
              (t = v),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ld(s, u, t), Lu();
              break e;
            }
            a = Error(N(426));
          }
        } else if (X && l.mode & 1) {
          var S = ud(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              cd(S, o, l, s, t),
              du(fr(a, l));
            break e;
          }
        }
        (s = a = fr(a, l)),
          ue !== 4 && (ue = 2),
          Ur === null ? (Ur = [s]) : Ur.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = Vh(s, a, t);
              td(s, p);
              break e;
            case 1:
              l = a;
              var m = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Gt === null || !Gt.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = Ih(s, l, t);
                td(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      nm(n);
    } catch (T) {
      (t = T), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function em() {
  var e = Os.current;
  return (Os.current = Rs), e === null ? Rs : e;
}
function Lu() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    fe === null || (!(Mn & 268435455) && !(ho & 268435455)) || Ot(fe, ge);
}
function zs(e, t) {
  var n = B;
  B |= 2;
  var r = em();
  (fe !== e || ge !== t) && ((pt = null), Tn(e, t));
  do
    try {
      T1();
      break;
    } catch (i) {
      Jh(e, i);
    }
  while (!0);
  if ((pu(), (B = n), (Os.current = r), ae !== null)) throw Error(N(261));
  return (fe = null), (ge = 0), ue;
}
function T1() {
  for (; ae !== null; ) tm(ae);
}
function E1() {
  for (; ae !== null && !Y0(); ) tm(ae);
}
function tm(e) {
  var t = im(e.alternate, e, Oe);
  (e.memoizedProps = e.pendingProps),
    t === null ? nm(e) : (ae = t),
    (ju.current = null);
}
function nm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = g1(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (ae = null);
        return;
      }
    } else if (((n = m1(n, t, Oe)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function hn(e, t, n) {
  var r = H,
    i = Xe.transition;
  try {
    (Xe.transition = null), (H = 1), C1(e, t, n, r);
  } finally {
    (Xe.transition = i), (H = r);
  }
  return null;
}
function C1(e, t, n, r) {
  do sr();
  while (It !== null);
  if (B & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (iv(e, s),
    e === fe && ((ae = fe = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ki ||
      ((Ki = !0),
      sm(xs, function () {
        return sr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Xe.transition), (Xe.transition = null);
    var o = H;
    H = 1;
    var l = B;
    (B |= 4),
      (ju.current = null),
      y1(e, n),
      qh(n, e),
      Hv(Xa),
      (Ss = !!Ya),
      (Xa = Ya = null),
      (e.current = n),
      x1(n),
      X0(),
      (B = l),
      (H = o),
      (Xe.transition = s);
  } else e.current = n;
  if (
    (Ki && ((Ki = !1), (It = e), (Is = i)),
    (s = e.pendingLanes),
    s === 0 && (Gt = null),
    Z0(n.stateNode),
    Ae(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Vs) throw ((Vs = !1), (e = ml), (ml = null), e);
  return (
    Is & 1 && e.tag !== 0 && sr(),
    (s = e.pendingLanes),
    s & 1 ? (e === gl ? Hr++ : ((Hr = 0), (gl = e))) : (Hr = 0),
    an(),
    null
  );
}
function sr() {
  if (It !== null) {
    var e = Op(Is),
      t = Xe.transition,
      n = H;
    try {
      if (((Xe.transition = null), (H = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (Is = 0), B & 6)) throw Error(N(331));
        var i = B;
        for (B |= 4, O = e.current; O !== null; ) {
          var s = O,
            o = s.child;
          if (O.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $r(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (O = d);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var h = c.sibling,
                        v = c.return;
                      if ((Kh(c), c === u)) {
                        O = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (O = h);
                        break;
                      }
                      O = v;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var S = x.sibling;
                    (x.sibling = null), (x = S);
                  } while (x !== null);
                }
              }
              O = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (O = o);
          else
            e: for (; O !== null; ) {
              if (((s = O), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $r(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (O = p);
                break e;
              }
              O = s.return;
            }
        }
        var m = e.current;
        for (O = m; O !== null; ) {
          o = O;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (O = g);
          else
            e: for (o = m; O !== null; ) {
              if (((l = O), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      po(9, l);
                  }
                } catch (T) {
                  te(l, l.return, T);
                }
              if (l === o) {
                O = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (O = w);
                break e;
              }
              O = l.return;
            }
        }
        if (
          ((B = i), an(), ut && typeof ut.onPostCommitFiberRoot == "function")
        )
          try {
            ut.onPostCommitFiberRoot(io, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (Xe.transition = t);
    }
  }
  return !1;
}
function Ed(e, t, n) {
  (t = fr(n, t)),
    (t = Vh(e, t, 1)),
    (e = Wt(e, t, 1)),
    (t = je()),
    e !== null && (wi(e, 1, t), Ae(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) Ed(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gt === null || !Gt.has(r)))
        ) {
          (e = fr(n, e)),
            (e = Ih(t, e, 1)),
            (t = Wt(t, e, 1)),
            (e = je()),
            t !== null && (wi(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function P1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (ge & n) === n &&
      (ue === 4 || (ue === 3 && (ge & 130023424) === ge && 500 > se() - ku)
        ? Tn(e, 0)
        : (bu |= n)),
    Ae(e, t);
}
function rm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ii), (Ii <<= 1), !(Ii & 130023424) && (Ii = 4194304))
      : (t = 1));
  var n = je();
  (e = Pt(e, t)), e !== null && (wi(e, t, n), Ae(e, n));
}
function j1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), rm(e, n);
}
function b1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), rm(e, n);
}
var im;
im = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), h1(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), X && t.flags & 1048576 && ah(t, ks, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ls(e, t), (e = t.pendingProps);
      var i = lr(t, Ce.current);
      ir(t, n), (i = Su(null, t, r, e, i, n));
      var s = Tu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            De(r) ? ((s = !0), js(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            gu(t),
            (i.updater = co),
            (t.stateNode = i),
            (i._reactInternals = t),
            il(t, r, e, n),
            (t = al(null, t, r, !0, s, n)))
          : ((t.tag = 0), X && s && uu(t), Pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ls(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = M1(r)),
          (e = Je(r, e)),
          i)
        ) {
          case 0:
            t = ol(null, t, r, e, n);
            break e;
          case 1:
            t = pd(null, t, r, e, n);
            break e;
          case 11:
            t = dd(null, t, r, e, n);
            break e;
          case 14:
            t = fd(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        ol(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        pd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Bh(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          dh(e, t),
          Ls(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = fr(Error(N(423)), t)), (t = hd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = fr(Error(N(424)), t)), (t = hd(e, t, r, n, i));
            break e;
          } else
            for (
              Ie = Ht(t.stateNode.containerInfo.firstChild),
                ze = t,
                X = !0,
                tt = null,
                n = mh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ur(), r === i)) {
            t = jt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gh(t),
        e === null && tl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        qa(r, i) ? (o = null) : s !== null && qa(r, s) && (t.flags |= 32),
        Fh(e, t),
        Pe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && tl(t), null;
    case 13:
      return $h(e, t, n);
    case 4:
      return (
        vu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cr(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        dd(e, t, r, i, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          G(Ms, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (it(s.value, o)) {
            if (s.children === i.children && !Le.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = yt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      nl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(N(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  nl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ir(t, n),
        (i = qe(i)),
        (r = r(i)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Je(r, t.pendingProps)),
        (i = Je(r.type, i)),
        fd(e, t, r, i, n)
      );
    case 15:
      return zh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        ls(e, t),
        (t.tag = 1),
        De(r) ? ((e = !0), js(t)) : (e = !1),
        ir(t, n),
        ph(t, r, i),
        il(t, r, i, n),
        al(null, t, r, !0, e, n)
      );
    case 19:
      return Uh(e, t, n);
    case 22:
      return _h(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function sm(e, t) {
  return Lp(e, t);
}
function k1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ye(e, t, n, r) {
  return new k1(e, t, n, r);
}
function Du(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function M1(e) {
  if (typeof e == "function") return Du(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ql)) return 11;
    if (e === Zl) return 14;
  }
  return 2;
}
function Yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ye(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ds(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Du(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case zn:
        return En(n.children, i, s, t);
      case ql:
        (o = 8), (i |= 8);
        break;
      case ka:
        return (
          (e = Ye(12, n, t, i | 2)), (e.elementType = ka), (e.lanes = s), e
        );
      case Ma:
        return (e = Ye(13, n, t, i)), (e.elementType = Ma), (e.lanes = s), e;
      case Na:
        return (e = Ye(19, n, t, i)), (e.elementType = Na), (e.lanes = s), e;
      case hp:
        return mo(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fp:
              o = 10;
              break e;
            case pp:
              o = 9;
              break e;
            case Ql:
              o = 11;
              break e;
            case Zl:
              o = 14;
              break e;
            case Lt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ye(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function En(e, t, n, r) {
  return (e = Ye(7, e, r, t)), (e.lanes = n), e;
}
function mo(e, t, n, r) {
  return (
    (e = Ye(22, e, r, t)),
    (e.elementType = hp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ta(e, t, n) {
  return (e = Ye(6, e, null, t)), (e.lanes = n), e;
}
function na(e, t, n) {
  return (
    (t = Ye(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function N1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Vo(0)),
    (this.expirationTimes = Vo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Au(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new N1(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ye(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    gu(s),
    e
  );
}
function L1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: In,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function om(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (An(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (De(n)) return sh(e, n, t);
  }
  return t;
}
function am(e, t, n, r, i, s, o, l, a) {
  return (
    (e = Au(n, r, !0, e, i, s, o, l, a)),
    (e.context = om(null)),
    (n = e.current),
    (r = je()),
    (i = Kt(n)),
    (s = yt(r, i)),
    (s.callback = t ?? null),
    Wt(n, s, i),
    (e.current.lanes = i),
    wi(e, i, r),
    Ae(e, r),
    e
  );
}
function go(e, t, n, r) {
  var i = t.current,
    s = je(),
    o = Kt(i);
  return (
    (n = om(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wt(i, t, o)),
    e !== null && (rt(e, i, o, s), ss(e, i, o)),
    o
  );
}
function _s(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ru(e, t) {
  Cd(e, t), (e = e.alternate) && Cd(e, t);
}
function D1() {
  return null;
}
var lm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ou(e) {
  this._internalRoot = e;
}
vo.prototype.render = Ou.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  go(e, t, null, null);
};
vo.prototype.unmount = Ou.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function () {
      go(null, e, null, null);
    }),
      (t[Ct] = null);
  }
};
function vo(e) {
  this._internalRoot = e;
}
vo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
    Rt.splice(n, 0, e), n === 0 && Fp(e);
  }
};
function Vu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pd() {}
function A1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = _s(o);
        s.call(u);
      };
    }
    var o = am(t, r, e, 0, null, !1, !1, "", Pd);
    return (
      (e._reactRootContainer = o),
      (e[Ct] = o.current),
      ii(e.nodeType === 8 ? e.parentNode : e),
      Nn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = _s(a);
      l.call(u);
    };
  }
  var a = Au(e, 0, !1, null, null, !1, !1, "", Pd);
  return (
    (e._reactRootContainer = a),
    (e[Ct] = a.current),
    ii(e.nodeType === 8 ? e.parentNode : e),
    Nn(function () {
      go(t, a, n, r);
    }),
    a
  );
}
function xo(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = _s(o);
        l.call(a);
      };
    }
    go(t, o, e, i);
  } else o = A1(n, t, e, i, r);
  return _s(o);
}
Vp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ar(t.pendingLanes);
        n !== 0 &&
          (tu(t, n | 1), Ae(t, se()), !(B & 6) && ((pr = se() + 500), an()));
      }
      break;
    case 13:
      Nn(function () {
        var r = Pt(e, 1);
        if (r !== null) {
          var i = je();
          rt(r, e, 1, i);
        }
      }),
        Ru(e, 1);
  }
};
nu = function (e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = je();
      rt(t, e, 134217728, n);
    }
    Ru(e, 134217728);
  }
};
Ip = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = Pt(e, t);
    if (n !== null) {
      var r = je();
      rt(n, e, t, r);
    }
    Ru(e, t);
  }
};
zp = function () {
  return H;
};
_p = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
Fa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Aa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = lo(r);
            if (!i) throw Error(N(90));
            gp(r), Aa(r, i);
          }
        }
      }
      break;
    case "textarea":
      yp(e, n);
      break;
    case "select":
      (t = n.value), t != null && er(e, !!n.multiple, t, !1);
  }
};
Pp = Mu;
jp = Nn;
var R1 = { usingClientEntryPoint: !1, Events: [Ti, $n, lo, Ep, Cp, Mu] },
  kr = {
    findFiberByHostInstance: yn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  O1 = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || D1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yi.isDisabled && Yi.supportsFiber)
    try {
      (io = Yi.inject(O1)), (ut = Yi);
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R1;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vu(t)) throw Error(N(200));
  return L1(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!Vu(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = lm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Au(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ct] = t.current),
    ii(e.nodeType === 8 ? e.parentNode : e),
    new Ou(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Mp(t)), (e = e === null ? null : e.stateNode), e;
};
Be.flushSync = function (e) {
  return Nn(e);
};
Be.hydrate = function (e, t, n) {
  if (!yo(t)) throw Error(N(200));
  return xo(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!Vu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = lm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = am(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Ct] = t.current),
    ii(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new vo(t);
};
Be.render = function (e, t, n) {
  if (!yo(t)) throw Error(N(200));
  return xo(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!yo(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Nn(function () {
        xo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ct] = null);
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = Mu;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yo(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return xo(e, t, n, !1, r);
};
Be.version = "18.2.0-next-9e3b772b8-20220608";
function um() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um);
    } catch (e) {
      console.error(e);
    }
}
um(), (ap.exports = Be);
var V1 = ap.exports,
  jd = V1;
(ja.createRoot = jd.createRoot), (ja.hydrateRoot = jd.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
  return (
    (pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pi.apply(this, arguments)
  );
}
var zt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(zt || (zt = {}));
const bd = "popstate";
function I1(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return xl(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Fs(i);
  }
  return _1(t, n, null, e);
}
function ne(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function cm(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function z1() {
  return Math.random().toString(36).substr(2, 8);
}
function kd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function xl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    pi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? xr(t) : t,
      { state: n, key: (t && t.key) || r || z1() }
    )
  );
}
function Fs(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function xr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function _1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = zt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), o.replaceState(pi({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    l = zt.Pop;
    let S = c(),
      p = S == null ? null : S - u;
    (u = S), a && a({ action: l, location: x.location, delta: p });
  }
  function h(S, p) {
    l = zt.Push;
    let m = xl(x.location, S, p);
    n && n(m, S), (u = c() + 1);
    let g = kd(m, u),
      w = x.createHref(m);
    try {
      o.pushState(g, "", w);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      i.location.assign(w);
    }
    s && a && a({ action: l, location: x.location, delta: 1 });
  }
  function v(S, p) {
    l = zt.Replace;
    let m = xl(x.location, S, p);
    n && n(m, S), (u = c());
    let g = kd(m, u),
      w = x.createHref(m);
    o.replaceState(g, "", w),
      s && a && a({ action: l, location: x.location, delta: 0 });
  }
  function y(S) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof S == "string" ? S : Fs(S);
    return (
      (m = m.replace(/ $/, "%20")),
      ne(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, p)
    );
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(bd, d),
        (a = S),
        () => {
          i.removeEventListener(bd, d), (a = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: y,
    encodeLocation(S) {
      let p = y(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: v,
    go(S) {
      return o.go(S);
    },
  };
  return x;
}
var Md;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Md || (Md = {}));
function F1(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? xr(t) : t,
    i = hr(r.pathname || "/", n);
  if (i == null) return null;
  let s = dm(e);
  B1(s);
  let o = null;
  for (let l = 0; o == null && l < s.length; ++l) {
    let a = Z1(i);
    o = q1(s[l], a);
  }
  return o;
}
function dm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (ne(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Xt([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (ne(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      dm(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: Y1(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a of fm(s.path)) i(s, o, a);
    }),
    t
  );
}
function fm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = fm(r.join("/")),
    l = [];
  return (
    l.push(...o.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && l.push(...o),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function B1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : X1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const $1 = /^:[\w-]+$/,
  U1 = 3,
  H1 = 2,
  W1 = 1,
  G1 = 10,
  K1 = -2,
  Nd = (e) => e === "*";
function Y1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Nd) && (r += K1),
    t && (r += H1),
    n
      .filter((i) => !Nd(i))
      .reduce((i, s) => i + ($1.test(s) ? U1 : s === "" ? W1 : G1), r)
  );
}
function X1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function q1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o],
      a = o === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = wl(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    s.push({
      params: r,
      pathname: Xt([i, c.pathname]),
      pathnameBase: ny(Xt([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = Xt([i, c.pathnameBase]));
  }
  return s;
}
function wl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Q1(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: h, isOptional: v } = c;
      if (h === "*") {
        let x = l[d] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[d];
      return (
        v && !y ? (u[h] = void 0) : (u[h] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function Q1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cm(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Z1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      cm(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function hr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function J1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? xr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ey(n, t)) : t,
    search: ry(r),
    hash: iy(i),
  };
}
function ey(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ra(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ty(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function pm(e, t) {
  let n = ty(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function hm(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = xr(e))
    : ((i = pi({}, e)),
      ne(
        !i.pathname || !i.pathname.includes("?"),
        ra("?", "pathname", "search", i)
      ),
      ne(
        !i.pathname || !i.pathname.includes("#"),
        ra("#", "pathname", "hash", i)
      ),
      ne(!i.search || !i.search.includes("#"), ra("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (o == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      i.pathname = h.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let a = J1(i, l),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Xt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  ny = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ry = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  iy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function sy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const mm = ["post", "put", "patch", "delete"];
new Set(mm);
const oy = ["get", ...mm];
new Set(oy);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hi() {
  return (
    (hi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hi.apply(this, arguments)
  );
}
const wo = E.createContext(null),
  gm = E.createContext(null),
  ln = E.createContext(null),
  So = E.createContext(null),
  Rn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  vm = E.createContext(null);
function ay(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ci() || ne(!1);
  let { basename: r, navigator: i } = E.useContext(ln),
    { hash: s, pathname: o, search: l } = To(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : Xt([r, o])),
    i.createHref({ pathname: a, search: l, hash: s })
  );
}
function Ci() {
  return E.useContext(So) != null;
}
function Pi() {
  return Ci() || ne(!1), E.useContext(So).location;
}
function ym(e) {
  E.useContext(ln).static || E.useLayoutEffect(e);
}
function ly() {
  let { isDataRoute: e } = E.useContext(Rn);
  return e ? Sy() : uy();
}
function uy() {
  Ci() || ne(!1);
  let e = E.useContext(wo),
    { basename: t, future: n, navigator: r } = E.useContext(ln),
    { matches: i } = E.useContext(Rn),
    { pathname: s } = Pi(),
    o = JSON.stringify(pm(i, n.v7_relativeSplatPath)),
    l = E.useRef(!1);
  return (
    ym(() => {
      l.current = !0;
    }),
    E.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = hm(u, JSON.parse(o), s, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Xt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, s, e]
    )
  );
}
function To(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = E.useContext(ln),
    { matches: i } = E.useContext(Rn),
    { pathname: s } = Pi(),
    o = JSON.stringify(pm(i, r.v7_relativeSplatPath));
  return E.useMemo(() => hm(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function cy(e, t) {
  return dy(e, t);
}
function dy(e, t, n, r) {
  Ci() || ne(!1);
  let { navigator: i } = E.useContext(ln),
    { matches: s } = E.useContext(Rn),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Pi(),
    c;
  if (t) {
    var d;
    let S = typeof t == "string" ? xr(t) : t;
    a === "/" || ((d = S.pathname) != null && d.startsWith(a)) || ne(!1),
      (c = S);
  } else c = u;
  let h = c.pathname || "/",
    v = h;
  if (a !== "/") {
    let S = a.replace(/^\//, "").split("/");
    v = "/" + h.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let y = F1(e, { pathname: v }),
    x = gy(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: Xt([
              a,
              i.encodeLocation
                ? i.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? a
                : Xt([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && x
    ? E.createElement(
        So.Provider,
        {
          value: {
            location: hi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: zt.Pop,
          },
        },
        x
      )
    : x;
}
function fy() {
  let e = wy(),
    t = sy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: i }, n) : null,
    null
  );
}
const py = E.createElement(fy, null);
class hy extends E.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          Rn.Provider,
          { value: this.props.routeContext },
          E.createElement(vm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function my(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = E.useContext(wo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Rn.Provider, { value: t }, r)
  );
}
function gy(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = o.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id])
    );
    c >= 0 || ne(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: h, errors: v } = n,
          y =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!v || v[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, h) => {
    let v,
      y = !1,
      x = null,
      S = null;
    n &&
      ((v = l && d.route.id ? l[d.route.id] : void 0),
      (x = d.route.errorElement || py),
      a &&
        (u < 0 && h === 0
          ? (Ty("route-fallback", !1), (y = !0), (S = null))
          : u === h &&
            ((y = !0), (S = d.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, h + 1)),
      m = () => {
        let g;
        return (
          v
            ? (g = x)
            : y
            ? (g = S)
            : d.route.Component
            ? (g = E.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = c),
          E.createElement(my, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? E.createElement(hy, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: v,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var xm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(xm || {}),
  Bs = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Bs || {});
function vy(e) {
  let t = E.useContext(wo);
  return t || ne(!1), t;
}
function yy(e) {
  let t = E.useContext(gm);
  return t || ne(!1), t;
}
function xy(e) {
  let t = E.useContext(Rn);
  return t || ne(!1), t;
}
function wm(e) {
  let t = xy(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ne(!1), n.route.id;
}
function wy() {
  var e;
  let t = E.useContext(vm),
    n = yy(Bs.UseRouteError),
    r = wm(Bs.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Sy() {
  let { router: e } = vy(xm.UseNavigateStable),
    t = wm(Bs.UseNavigateStable),
    n = E.useRef(!1);
  return (
    ym(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, hi({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const Ld = {};
function Ty(e, t, n) {
  !t && !Ld[e] && (Ld[e] = !0);
}
function Mt(e) {
  ne(!1);
}
function Ey(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = zt.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  Ci() && ne(!1);
  let a = t.replace(/^\/*/, "/"),
    u = E.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: o,
        future: hi({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, o]
    );
  typeof r == "string" && (r = xr(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: h = "",
      state: v = null,
      key: y = "default",
    } = r,
    x = E.useMemo(() => {
      let S = hr(c, a);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: h, state: v, key: y },
            navigationType: i,
          };
    }, [a, c, d, h, v, y, i]);
  return x == null
    ? null
    : E.createElement(
        ln.Provider,
        { value: u },
        E.createElement(So.Provider, { children: n, value: x })
      );
}
function Cy(e) {
  let { children: t, location: n } = e;
  return cy(Sl(t), n);
}
new Promise(() => {});
function Sl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    E.Children.forEach(e, (r, i) => {
      if (!E.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === E.Fragment) {
        n.push.apply(n, Sl(r.props.children, s));
        return;
      }
      r.type !== Mt && ne(!1), !r.props.index || !r.props.children || ne(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Sl(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $s() {
  return (
    ($s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $s.apply(this, arguments)
  );
}
function Sm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Py(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function jy(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Py(e);
}
const by = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  ky = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  My = "6";
try {
  window.__reactRouterVersion = My;
} catch {}
const Ny = E.createContext({ isTransitioning: !1 }),
  Ly = "startTransition",
  Dd = j0[Ly];
function Dy(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = E.useRef();
  s.current == null && (s.current = I1({ window: i, v5Compat: !0 }));
  let o = s.current,
    [l, a] = E.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = E.useCallback(
      (d) => {
        u && Dd ? Dd(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    E.useLayoutEffect(() => o.listen(c), [o, c]),
    E.createElement(Ey, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
const Ay =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ry = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  en = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      h = Sm(t, by),
      { basename: v } = E.useContext(ln),
      y,
      x = !1;
    if (typeof u == "string" && Ry.test(u) && ((y = u), Ay))
      try {
        let g = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          T = hr(w.pathname, v);
        w.origin === g.origin && T != null
          ? (u = T + w.search + w.hash)
          : (x = !0);
      } catch {}
    let S = ay(u, { relative: i }),
      p = Vy(u, {
        replace: o,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function m(g) {
      r && r(g), g.defaultPrevented || p(g);
    }
    return E.createElement(
      "a",
      $s({}, h, { href: y || S, onClick: x || s ? r : m, ref: n, target: a })
    );
  }),
  Iu = E.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: l,
        to: a,
        unstable_viewTransition: u,
        children: c,
      } = t,
      d = Sm(t, ky),
      h = To(a, { relative: d.relative }),
      v = Pi(),
      y = E.useContext(gm),
      { navigator: x, basename: S } = E.useContext(ln),
      p = y != null && Iy(h) && u === !0,
      m = x.encodeLocation ? x.encodeLocation(h).pathname : h.pathname,
      g = v.pathname,
      w =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    i ||
      ((g = g.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (m = m.toLowerCase())),
      w && S && (w = hr(w, S) || w);
    const T = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length;
    let j = g === m || (!o && g.startsWith(m) && g.charAt(T) === "/"),
      M =
        w != null &&
        (w === m || (!o && w.startsWith(m) && w.charAt(m.length) === "/")),
      C = { isActive: j, isPending: M, isTransitioning: p },
      b = j ? r : void 0,
      P;
    typeof s == "function"
      ? (P = s(C))
      : (P = [
          s,
          j ? "active" : null,
          M ? "pending" : null,
          p ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let L = typeof l == "function" ? l(C) : l;
    return E.createElement(
      en,
      $s({}, d, {
        "aria-current": b,
        className: P,
        ref: n,
        style: L,
        to: a,
        unstable_viewTransition: u,
      }),
      typeof c == "function" ? c(C) : c
    );
  });
var Tl;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Tl || (Tl = {}));
var Ad;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ad || (Ad = {}));
function Oy(e) {
  let t = E.useContext(wo);
  return t || ne(!1), t;
}
function Vy(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = ly(),
    u = Pi(),
    c = To(e, { relative: o });
  return E.useCallback(
    (d) => {
      if (jy(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : Fs(u) === Fs(c);
        a(e, {
          replace: h,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, c, r, i, n, e, s, o, l]
  );
}
function Iy(e, t) {
  t === void 0 && (t = {});
  let n = E.useContext(Ny);
  n == null && ne(!1);
  let { basename: r } = Oy(Tl.useViewTransitionState),
    i = To(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let s = hr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = hr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return wl(i.pathname, o) != null || wl(i.pathname, s) != null;
}
const zu = E.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Eo = E.createContext({}),
  Co = E.createContext(null),
  _u = typeof document < "u",
  Fu = _u ? E.useLayoutEffect : E.useEffect,
  Tm = E.createContext({ strict: !1 }),
  Bu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  zy = "framerAppearId",
  Em = "data-" + Bu(zy),
  _y = { skipAnimations: !1, useManualTiming: !1 };
class Rd {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function Fy(e) {
  let t = new Rd(),
    n = new Rd(),
    r = 0,
    i = !1,
    s = !1;
  const o = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const d = c && i,
          h = d ? t : n;
        return u && o.add(a), h.add(a) && d && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), o.delete(a);
      },
      process: (a) => {
        if (i) {
          s = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            o.has(c) && (l.schedule(c), e()), c(a);
          }
        (i = !1), s && ((s = !1), l.process(a));
      },
    };
  return l;
}
const Xi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  By = 40;
function Cm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = Xi.reduce((d, h) => ((d[h] = Fy(() => (n = !0))), d), {}),
    o = (d) => {
      s[d].process(i);
    },
    l = () => {
      const d = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, By), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        Xi.forEach(o),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: Xi.reduce((d, h) => {
      const v = s[h];
      return (d[h] = (y, x = !1, S = !1) => (n || a(), v.schedule(y, x, S))), d;
    }, {}),
    cancel: (d) => Xi.forEach((h) => s[h].cancel(d)),
    state: i,
    steps: s,
  };
}
const { schedule: $u, cancel: N5 } = Cm(queueMicrotask, !1);
function $y(e, t, n, r) {
  const { visualElement: i } = E.useContext(Eo),
    s = E.useContext(Tm),
    o = E.useContext(Co),
    l = E.useContext(zu).reducedMotion,
    a = E.useRef();
  (r = r || s.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  E.useInsertionEffect(() => {
    u && u.update(n, o);
  });
  const c = E.useRef(!!(n[Em] && !window.HandoffComplete));
  return (
    Fu(() => {
      u &&
        ($u.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    E.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function Xn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Uy(e, t, n) {
  return E.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Xn(n) && (n.current = r));
    },
    [t]
  );
}
function mi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Po(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Uu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Hu = ["initial", ...Uu];
function jo(e) {
  return Po(e.animate) || Hu.some((t) => mi(e[t]));
}
function Pm(e) {
  return !!(jo(e) || e.variants);
}
function Hy(e, t) {
  if (jo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || mi(n) ? n : void 0,
      animate: mi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Wy(e) {
  const { initial: t, animate: n } = Hy(e, E.useContext(Eo));
  return E.useMemo(() => ({ initial: t, animate: n }), [Od(t), Od(n)]);
}
function Od(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Vd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  gi = {};
for (const e in Vd) gi[e] = { isEnabled: (t) => Vd[e].some((n) => !!t[n]) };
function Gy(e) {
  for (const t in e) gi[t] = { ...gi[t], ...e[t] };
}
const Wu = E.createContext({}),
  jm = E.createContext({}),
  Ky = Symbol.for("motionComponentSymbol");
function Yy({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Gy(e);
  function s(l, a) {
    let u;
    const c = { ...E.useContext(zu), ...l, layoutId: Xy(l) },
      { isStatic: d } = c,
      h = Wy(l),
      v = r(l, d);
    if (!d && _u) {
      h.visualElement = $y(i, v, c, t);
      const y = E.useContext(jm),
        x = E.useContext(Tm).strict;
      h.visualElement && (u = h.visualElement.loadFeatures(c, x, e, y));
    }
    return E.createElement(
      Eo.Provider,
      { value: h },
      u && h.visualElement
        ? E.createElement(u, { visualElement: h.visualElement, ...c })
        : null,
      n(i, l, Uy(v, h.visualElement, a), v, d, h.visualElement)
    );
  }
  const o = E.forwardRef(s);
  return (o[Ky] = i), o;
}
function Xy({ layoutId: e }) {
  const t = E.useContext(Wu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function qy(e) {
  function t(r, i = {}) {
    return Yy(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const Qy = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Gu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Qy.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const Us = {};
function Zy(e) {
  Object.assign(Us, e);
}
const ji = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  On = new Set(ji);
function bm(e, { layout: t, layoutId: n }) {
  return (
    On.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Us[e] || e === "opacity"))
  );
}
const Te = (e) => !!(e && e.getVelocity),
  Jy = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  ex = ji.length;
function tx(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let s = "";
  for (let o = 0; o < ex; o++) {
    const l = ji[o];
    if (e[l] !== void 0) {
      const a = Jy[l] || l;
      s += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (s += "translateZ(0)"),
    (s = s.trim()),
    i ? (s = i(e, r ? "" : s)) : n && r && (s = "none"),
    s
  );
}
const km = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Mm = km("--"),
  nx = km("var(--"),
  Ku = (e) => (nx(e) ? rx.test(e.split("/*")[0].trim()) : !1),
  rx =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ix = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  tn = (e, t, n) => (n > t ? t : n < e ? e : n),
  wr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Wr = { ...wr, transform: (e) => tn(0, 1, e) },
  qi = { ...wr, default: 1 },
  Gr = (e) => Math.round(e * 1e5) / 1e5,
  Yu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  sx =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  ox =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function bi(e) {
  return typeof e == "string";
}
const ki = (e) => ({
    test: (t) => bi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Nt = ki("deg"),
  dt = ki("%"),
  I = ki("px"),
  ax = ki("vh"),
  lx = ki("vw"),
  Id = {
    ...dt,
    parse: (e) => dt.parse(e) / 100,
    transform: (e) => dt.transform(e * 100),
  },
  zd = { ...wr, transform: Math.round },
  Nm = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    size: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    rotate: Nt,
    rotateX: Nt,
    rotateY: Nt,
    rotateZ: Nt,
    scale: qi,
    scaleX: qi,
    scaleY: qi,
    scaleZ: qi,
    skew: Nt,
    skewX: Nt,
    skewY: Nt,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: Wr,
    originX: Id,
    originY: Id,
    originZ: I,
    zIndex: zd,
    backgroundPositionX: I,
    backgroundPositionY: I,
    fillOpacity: Wr,
    strokeOpacity: Wr,
    numOctaves: zd,
  };
function Xu(e, t, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const h = t[d];
    if (Mm(d)) {
      s[d] = h;
      continue;
    }
    const v = Nm[d],
      y = ix(h, v);
    if (On.has(d)) {
      if (((a = !0), (o[d] = y), !c)) continue;
      h !== (v.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (l[d] = y)) : (i[d] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = tx(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: h = "50%", originZ: v = 0 } = l;
    i.transformOrigin = `${d} ${h} ${v}`;
  }
}
const qu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Lm(e, t, n) {
  for (const r in t) !Te(t[r]) && !bm(r, n) && (e[r] = t[r]);
}
function ux({ transformTemplate: e }, t, n) {
  return E.useMemo(() => {
    const r = qu();
    return (
      Xu(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function cx(e, t, n) {
  const r = e.style || {},
    i = {};
  return Lm(i, r, e), Object.assign(i, ux(e, t, n)), i;
}
function dx(e, t, n) {
  const r = {},
    i = cx(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const fx = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Hs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    fx.has(e)
  );
}
let Dm = (e) => !Hs(e);
function px(e) {
  e && (Dm = (t) => (t.startsWith("on") ? !Hs(t) : e(t)));
}
try {
  px(require("@emotion/is-prop-valid").default);
} catch {}
function hx(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Dm(i) ||
        (n === !0 && Hs(i)) ||
        (!t && !Hs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function _d(e, t, n) {
  return typeof e == "string" ? e : I.transform(t + n * e);
}
function mx(e, t, n) {
  const r = _d(t, e.x, e.width),
    i = _d(n, e.y, e.height);
  return `${r} ${i}`;
}
const gx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  vx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function yx(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? gx : vx;
  e[s.offset] = I.transform(-r);
  const o = I.transform(t),
    l = I.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Qu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  d,
  h
) {
  if ((Xu(e, u, c, h), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: v, style: y, dimensions: x } = e;
  v.transform && (x && (y.transform = v.transform), delete v.transform),
    x &&
      (i !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = mx(
        x,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (v.x = t),
    n !== void 0 && (v.y = n),
    r !== void 0 && (v.scale = r),
    o !== void 0 && yx(v, o, l, a, !1);
}
const Am = () => ({ ...qu(), attrs: {} }),
  Zu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function xx(e, t, n, r) {
  const i = E.useMemo(() => {
    const s = Am();
    return (
      Qu(s, t, { enableHardwareAcceleration: !1 }, Zu(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Lm(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function wx(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (Gu(n) ? xx : dx)(r, s, o, n),
      u = hx(r, typeof n == "string", e),
      c = n !== E.Fragment ? { ...u, ...a, ref: i } : {},
      { children: d } = r,
      h = E.useMemo(() => (Te(d) ? d.get() : d), [d]);
    return E.createElement(n, { ...c, children: h });
  };
}
function Rm(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Om = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Vm(e, t, n, r) {
  Rm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Om.has(i) ? i : Bu(i), t.attrs[i]);
}
function Ju(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (Te(i[o]) ||
      (t.style && Te(t.style[o])) ||
      bm(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function Im(e, t, n) {
  const r = Ju(e, t, n);
  for (const i in e)
    if (Te(e[i]) || Te(t[i])) {
      const s =
        ji.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function ec(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function zm(e) {
  const t = E.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const El = (e) => Array.isArray(e),
  Sx = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Tx = (e) => (El(e) ? e[e.length - 1] || 0 : e);
function fs(e) {
  const t = Te(e) ? e.get() : e;
  return Sx(t) ? t.toValue() : t;
}
function Ex(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: Cx(r, i, s, e), renderState: t() };
  return n && (o.mount = (l) => n(r, l, o)), o;
}
const _m = (e) => (t, n) => {
  const r = E.useContext(Eo),
    i = E.useContext(Co),
    s = () => Ex(e, t, r, i);
  return n ? s() : zm(s);
};
function Cx(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = fs(s[h]);
  let { initial: o, animate: l } = e;
  const a = jo(e),
    u = Pm(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? l : o;
  return (
    d &&
      typeof d != "boolean" &&
      !Po(d) &&
      (Array.isArray(d) ? d : [d]).forEach((v) => {
        const y = ec(e, v);
        if (!y) return;
        const { transitionEnd: x, transition: S, ...p } = y;
        for (const m in p) {
          let g = p[m];
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0;
            g = g[w];
          }
          g !== null && (i[m] = g);
        }
        for (const m in x) i[m] = x[m];
      }),
    i
  );
}
const Ee = (e) => e,
  {
    schedule: pe,
    cancel: nn,
    state: me,
    steps: ia,
  } = Cm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ee, !0),
  Px = {
    useVisualState: _m({
      scrapeMotionValuesFromProps: Im,
      createRenderState: Am,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        pe.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          pe.render(() => {
            Qu(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Zu(t.tagName),
              e.transformTemplate
            ),
              Vm(t, n);
          });
      },
    }),
  },
  jx = {
    useVisualState: _m({
      scrapeMotionValuesFromProps: Ju,
      createRenderState: qu,
    }),
  };
function bx(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Gu(e) ? Px : jx),
    preloadedFeatures: n,
    useRender: wx(t),
    createVisualElement: r,
    Component: e,
  };
}
function vt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Fm = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function bo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const kx = (e) => (t) => Fm(t) && e(t, bo(t));
function xt(e, t, n, r) {
  return vt(e, t, kx(n), r);
}
const Mx = (e, t) => (n) => t(e(n)),
  wt = (...e) => e.reduce(Mx);
function Bm(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Fd = Bm("dragHorizontal"),
  Bd = Bm("dragVertical");
function $m(e) {
  let t = !1;
  if (e === "y") t = Bd();
  else if (e === "x") t = Fd();
  else {
    const n = Fd(),
      r = Bd();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Um() {
  const e = $m(!0);
  return e ? (e(), !1) : !0;
}
let un = class {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
};
function $d(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (s, o) => {
      if (s.pointerType === "touch" || Um()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && l[r](s, o);
    };
  return xt(e.current, n, i, { passive: !e.getProps()[r] });
}
class Nx extends un {
  mount() {
    this.unmount = wt($d(this.node, !0), $d(this.node, !1));
  }
  unmount() {}
}
class Lx extends un {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = wt(
      vt(this.node.current, "focus", () => this.onFocus()),
      vt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Hm = (e, t) => (t ? (e === t ? !0 : Hm(e, t.parentElement)) : !1);
function sa(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, bo(n));
}
class Dx extends un {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ee),
      (this.removeEndListeners = Ee),
      (this.removeAccessibleListeners = Ee),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = xt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: d,
              } = this.node.getProps();
              !d && !Hm(this.node.current, l.target)
                ? c && c(l, a)
                : u && u(l, a);
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = xt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = wt(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                sa("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && c(a, u);
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = vt(this.node.current, "keyup", o)),
              sa("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = vt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && sa("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = vt(this.node.current, "blur", r);
        this.removeAccessibleListeners = wt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && r(t, n);
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Um()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && r(t, n);
  }
  mount() {
    const t = this.node.getProps(),
      n = xt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = vt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = wt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Cl = new WeakMap(),
  oa = new WeakMap(),
  Ax = (e) => {
    const t = Cl.get(e.target);
    t && t(e);
  },
  Rx = (e) => {
    e.forEach(Ax);
  };
function Ox({ root: e, ...t }) {
  const n = e || document;
  oa.has(n) || oa.set(n, {});
  const r = oa.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Rx, { root: e, ...t })), r[i];
}
function Vx(e, t, n) {
  const r = Ox(t);
  return (
    Cl.set(e, n),
    r.observe(e),
    () => {
      Cl.delete(e), r.unobserve(e);
    }
  );
}
const Ix = { some: 0, all: 1 };
class zx extends un {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Ix[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          h = u ? c : d;
        h && h(a);
      };
    return Vx(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(_x(t, n)) && this.startObserver();
  }
  unmount() {}
}
function _x({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Fx = {
  inView: { Feature: zx },
  tap: { Feature: Dx },
  focus: { Feature: Lx },
  hover: { Feature: Nx },
};
function Wm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Bx(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function $x(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function ko(e, t, n) {
  const r = e.getProps();
  return ec(r, t, n !== void 0 ? n : r.custom, Bx(e), $x(e));
}
const qt = (e) => e * 1e3,
  St = (e) => e / 1e3,
  Ux = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Hx = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Wx = { type: "keyframes", duration: 0.8 },
  Gx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Kx = (e, { keyframes: t }) =>
    t.length > 2
      ? Wx
      : On.has(e)
      ? e.startsWith("scale")
        ? Hx(t[1])
        : Ux
      : Gx;
function Yx({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function tc(e, t) {
  return e[t] || e.default || e;
}
const Xx = (e) => e !== null;
function Mo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Xx),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
let ps;
function qx() {
  ps = void 0;
}
const Qt = {
    now: () => (
      ps === void 0 &&
        Qt.set(
          me.isProcessing || _y.useManualTiming
            ? me.timestamp
            : performance.now()
        ),
      ps
    ),
    set: (e) => {
      (ps = e), queueMicrotask(qx);
    },
  },
  Gm = (e) => /^0[^.\s]+$/u.test(e);
function Qx(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Gm(e)
    : !0;
}
let nc = Ee;
const Km = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Zx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Jx(e) {
  const t = Zx.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Ym(e, t, n = 1) {
  const [r, i] = Jx(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Km(o) ? parseFloat(o) : o;
  }
  return Ku(i) ? Ym(i, t, n + 1) : i;
}
const e2 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Ud = (e) => e === wr || e === I,
  Hd = (e, t) => parseFloat(e.split(", ")[t]),
  Wd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Hd(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Hd(s[1], e) : 0;
      }
    },
  t2 = new Set(["x", "y", "z"]),
  n2 = ji.filter((e) => !t2.has(e));
function Gd(e) {
  const t = [];
  return (
    n2.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const mr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Wd(4, 13),
  y: Wd(5, 14),
};
mr.translateX = mr.x;
mr.translateY = mr.y;
const Xm = (e) => (t) => t.test(e),
  r2 = { test: (e) => e === "auto", parse: (e) => e },
  qm = [wr, I, dt, Nt, lx, ax, r2],
  Kd = (e) => qm.find(Xm(e)),
  Cn = new Set();
let Pl = !1,
  jl = !1;
function Qm() {
  if (jl) {
    const e = Array.from(Cn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      Gd(r).length && (n.set(r, Gd(r)), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (jl = !1), (Pl = !1), Cn.forEach((e) => e.complete()), Cn.clear();
}
function Zm() {
  Cn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (jl = !0);
  });
}
function i2() {
  Zm(), Qm();
}
class rc {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Cn.add(this),
          Pl || ((Pl = !0), pe.read(Zm), pe.resolveKeyframes(Qm)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Cn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Cn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ic = (e, t) => (n) =>
    !!(
      (bi(n) && ox.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Jm = (e, t, n) => (r) => {
    if (!bi(r)) return r;
    const [i, s, o, l] = r.match(Yu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  s2 = (e) => tn(0, 255, e),
  aa = { ...wr, transform: (e) => Math.round(s2(e)) },
  Sn = {
    test: ic("rgb", "red"),
    parse: Jm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      aa.transform(e) +
      ", " +
      aa.transform(t) +
      ", " +
      aa.transform(n) +
      ", " +
      Gr(Wr.transform(r)) +
      ")",
  };
function o2(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const bl = { test: ic("#"), parse: o2, transform: Sn.transform },
  qn = {
    test: ic("hsl", "hue"),
    parse: Jm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      dt.transform(Gr(t)) +
      ", " +
      dt.transform(Gr(n)) +
      ", " +
      Gr(Wr.transform(r)) +
      ")",
  },
  we = {
    test: (e) => Sn.test(e) || bl.test(e) || qn.test(e),
    parse: (e) =>
      Sn.test(e) ? Sn.parse(e) : qn.test(e) ? qn.parse(e) : bl.parse(e),
    transform: (e) =>
      bi(e) ? e : e.hasOwnProperty("red") ? Sn.transform(e) : qn.transform(e),
  };
function a2(e) {
  var t, n;
  return (
    isNaN(e) &&
    bi(e) &&
    (((t = e.match(Yu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(sx)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const eg = "number",
  tg = "color",
  l2 = "var",
  u2 = "var(",
  Yd = "${}",
  c2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ws(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const l = t
    .replace(
      c2,
      (a) => (
        we.test(a)
          ? (r.color.push(s), i.push(tg), n.push(we.parse(a)))
          : a.startsWith(u2)
          ? (r.var.push(s), i.push(l2), n.push(a))
          : (r.number.push(s), i.push(eg), n.push(parseFloat(a))),
        ++s,
        Yd
      )
    )
    .split(Yd);
  return { values: n, split: l, indexes: r, types: i };
}
function ng(e) {
  return Ws(e).values;
}
function rg(e) {
  const { split: t, types: n } = Ws(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const l = n[o];
        l === eg
          ? (s += Gr(i[o]))
          : l === tg
          ? (s += we.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const d2 = (e) => (typeof e == "number" ? 0 : e);
function f2(e) {
  const t = ng(e);
  return rg(e)(t.map(d2));
}
const rn = {
    test: a2,
    parse: ng,
    createTransformer: rg,
    getAnimatableNone: f2,
  },
  p2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function h2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Yu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = p2.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const m2 = /\b([a-z-]*)\(.*?\)/gu,
  kl = {
    ...rn,
    getAnimatableNone: (e) => {
      const t = e.match(m2);
      return t ? t.map(h2).join(" ") : e;
    },
  },
  g2 = {
    ...Nm,
    color: we,
    backgroundColor: we,
    outlineColor: we,
    fill: we,
    stroke: we,
    borderColor: we,
    borderTopColor: we,
    borderRightColor: we,
    borderBottomColor: we,
    borderLeftColor: we,
    filter: kl,
    WebkitFilter: kl,
  },
  sc = (e) => g2[e];
function ig(e, t) {
  let n = sc(e);
  return (
    n !== kl && (n = rn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function v2(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; )
    typeof e[r] == "string" && e[r] !== "none" && e[r] !== "0" && (i = e[r]),
      r++;
  if (i && n) for (const s of t) e[s] = ig(n, i);
}
class sg extends rc {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      const u = t[a];
      if (typeof u == "string" && Ku(u)) {
        const c = Ym(u, n.current);
        c !== void 0 && (t[a] = c);
      }
    }
    if (!e2.has(r) || t.length !== 2) return this.resolveNoneKeyframes();
    const [i, s] = t,
      o = Kd(i),
      l = Kd(s);
    if (o !== l)
      if (Ud(o) && Ud(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Qx(t[i]) && r.push(i);
    r.length && v2(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = mr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      l = i[o];
    (i[o] = mr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function y2(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Xd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (rn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function x2(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function w2(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  const s = e[e.length - 1],
    o = Xd(i, t),
    l = Xd(s, t);
  return !o || !l ? !1 : x2(e) || (n === "spring" && r);
}
class og {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && i2(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !w2(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        a == null || a(Mo(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function ag(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const S2 = 5;
function lg(e, t, n) {
  const r = Math.max(t - S2, 0);
  return ag(n - e(r), t - r);
}
const la = 0.001,
  T2 = 0.01,
  E2 = 10,
  C2 = 0.05,
  P2 = 1;
function j2({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - t;
  (o = tn(C2, P2, o)),
    (e = tn(T2, E2, St(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            h = c - n,
            v = Ml(u, o),
            y = Math.exp(-d);
          return la - (h / v) * y;
        }),
        (s = (u) => {
          const d = u * o * e,
            h = d * n + n,
            v = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            x = Ml(Math.pow(u, 2), o);
          return ((-i(u) + la > 0 ? -1 : 1) * ((h - v) * y)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -la + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const l = 5 / e,
    a = k2(i, s, l);
  if (((e = qt(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const b2 = 12;
function k2(e, t, n) {
  let r = n;
  for (let i = 1; i < b2; i++) r = r - e(r) / t(r);
  return r;
}
function Ml(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const M2 = ["duration", "bounce"],
  N2 = ["stiffness", "damping", "mass"];
function qd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function L2(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!qd(e, N2) && qd(e, M2)) {
    const n = j2(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function ug({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: h,
    } = L2({ ...r, velocity: -St(r.velocity || 0) }),
    v = d || 0,
    y = a / (2 * Math.sqrt(l * u)),
    x = s - i,
    S = St(Math.sqrt(l / u)),
    p = Math.abs(x) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let m;
  if (y < 1) {
    const g = Ml(S, y);
    m = (w) => {
      const T = Math.exp(-y * S * w);
      return (
        s - T * (((v + y * S * x) / g) * Math.sin(g * w) + x * Math.cos(g * w))
      );
    };
  } else if (y === 1) m = (g) => s - Math.exp(-S * g) * (x + (v + S * x) * g);
  else {
    const g = S * Math.sqrt(y * y - 1);
    m = (w) => {
      const T = Math.exp(-y * S * w),
        j = Math.min(g * w, 300);
      return (
        s - (T * ((v + y * S * x) * Math.sinh(j) + g * x * Math.cosh(j))) / g
      );
    };
  }
  return {
    calculatedDuration: (h && c) || null,
    next: (g) => {
      const w = m(g);
      if (h) o.done = g >= c;
      else {
        let T = v;
        g !== 0 && (y < 1 ? (T = lg(m, g, w)) : (T = 0));
        const j = Math.abs(T) <= n,
          M = Math.abs(s - w) <= t;
        o.done = j && M;
      }
      return (o.value = o.done ? s : w), o;
    },
  };
}
function Qd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    h = { done: !1, value: d },
    v = (C) => (l !== void 0 && C < l) || (a !== void 0 && C > a),
    y = (C) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - C) < Math.abs(a - C)
        ? l
        : a;
  let x = n * t;
  const S = d + x,
    p = o === void 0 ? S : o(S);
  p !== S && (x = p - d);
  const m = (C) => -x * Math.exp(-C / r),
    g = (C) => p + m(C),
    w = (C) => {
      const b = m(C),
        P = g(C);
      (h.done = Math.abs(b) <= u), (h.value = h.done ? p : P);
    };
  let T, j;
  const M = (C) => {
    v(h.value) &&
      ((T = C),
      (j = ug({
        keyframes: [h.value, y(h.value)],
        velocity: lg(g, C, h.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    M(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let b = !1;
        return (
          !j && T === void 0 && ((b = !0), w(C), M(C)),
          T !== void 0 && C >= T ? j.next(C - T) : (!b && w(C), h)
        );
      },
    }
  );
}
const cg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  D2 = 1e-7,
  A2 = 12;
function R2(e, t, n, r, i) {
  let s,
    o,
    l = 0;
  do (o = t + (n - t) / 2), (s = cg(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > D2 && ++l < A2);
  return o;
}
function Mi(e, t, n, r) {
  if (e === t && n === r) return Ee;
  const i = (s) => R2(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : cg(i(s), t, r));
}
const O2 = Mi(0.42, 0, 1, 1),
  V2 = Mi(0, 0, 0.58, 1),
  Gs = Mi(0.42, 0, 0.58, 1),
  I2 = (e) => Array.isArray(e) && typeof e[0] != "number",
  dg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  fg = (e) => (t) => 1 - e(1 - t),
  oc = (e) => 1 - Math.sin(Math.acos(e)),
  pg = fg(oc),
  z2 = dg(oc),
  hg = Mi(0.33, 1.53, 0.69, 0.99),
  ac = fg(hg),
  _2 = dg(ac),
  F2 = (e) =>
    (e *= 2) < 1 ? 0.5 * ac(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  B2 = {
    linear: Ee,
    easeIn: O2,
    easeInOut: Gs,
    easeOut: V2,
    circIn: oc,
    circInOut: z2,
    circOut: pg,
    backIn: ac,
    backInOut: _2,
    backOut: hg,
    anticipate: F2,
  },
  Zd = (e) => {
    if (Array.isArray(e)) {
      nc(e.length === 4);
      const [t, n, r, i] = e;
      return Mi(t, n, r, i);
    } else if (typeof e == "string") return B2[e];
    return e;
  },
  vi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Z = (e, t, n) => e + (t - e) * n;
function ua(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function $2({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = ua(a, l, e + 1 / 3)), (s = ua(a, l, e)), (o = ua(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const ca = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  U2 = [bl, Sn, qn],
  H2 = (e) => U2.find((t) => t.test(e));
function Jd(e) {
  const t = H2(e);
  let n = t.parse(e);
  return t === qn && (n = $2(n)), n;
}
const ef = (e, t) => {
  const n = Jd(e),
    r = Jd(t),
    i = { ...n };
  return (s) => (
    (i.red = ca(n.red, r.red, s)),
    (i.green = ca(n.green, r.green, s)),
    (i.blue = ca(n.blue, r.blue, s)),
    (i.alpha = Z(n.alpha, r.alpha, s)),
    Sn.transform(i)
  );
};
function Nl(e, t) {
  return (n) => (n > 0 ? t : e);
}
function W2(e, t) {
  return (n) => Z(e, t, n);
}
function lc(e) {
  return typeof e == "number"
    ? W2
    : typeof e == "string"
    ? Ku(e)
      ? Nl
      : we.test(e)
      ? ef
      : Y2
    : Array.isArray(e)
    ? mg
    : typeof e == "object"
    ? we.test(e)
      ? ef
      : G2
    : Nl;
}
function mg(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => lc(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function G2(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = lc(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function K2(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      l = e.indexes[o][i[o]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[s] = a), i[o]++;
  }
  return r;
}
const Y2 = (e, t) => {
  const n = rn.createTransformer(t),
    r = Ws(e),
    i = Ws(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? wt(mg(K2(r, i), i.values), n)
    : Nl(e, t);
};
function gg(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Z(e, t, n)
    : lc(e)(e, t);
}
function X2(e, t, n) {
  const r = [],
    i = n || gg,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || Ee : t;
      l = wt(a, l);
    }
    r.push(l);
  }
  return r;
}
function q2(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((nc(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = X2(t, r, i),
    l = o.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = vi(e[c], e[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => a(tn(e[0], e[s - 1], u)) : a;
}
function Q2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = vi(0, t, r);
    e.push(Z(n, 1, i));
  }
}
function Z2(e) {
  const t = [0];
  return Q2(t, e.length - 1), t;
}
function J2(e, t) {
  return e.map((n) => n * t);
}
function ew(e, t) {
  return e.map(() => t || Gs).splice(0, e.length - 1);
}
function Ks({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = I2(r) ? r.map(Zd) : Zd(r),
    s = { done: !1, value: t[0] },
    o = J2(n && n.length === t.length ? n : Z2(t), e),
    l = q2(o, t, { ease: Array.isArray(i) ? i : ew(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((s.value = l(a)), (s.done = a >= e), s),
  };
}
const tf = 2e4;
function tw(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < tf; ) (t += n), (r = e.next(t));
  return t >= tf ? 1 / 0 : t;
}
const nw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => pe.update(t, !0),
      stop: () => nn(t),
      now: () => (me.isProcessing ? me.timestamp : Qt.now()),
    };
  },
  rw = { decay: Qd, inertia: Qd, tween: Ks, keyframes: Ks, spring: ug },
  iw = (e) => e / 100;
class uc extends og {
  constructor({ KeyframeResolver: t = rc, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle");
    const { name: r, motionValue: i, keyframes: s } = this.options,
      o = (l, a) => this.onKeyframesResolved(l, a);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(s, o, r, i))
      : (this.resolver = new t(s, o, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      l = rw[n] || Ks;
    let a, u;
    l !== Ks &&
      typeof t[0] != "number" &&
      ((a = wt(iw, gg(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = tw(c));
    const { calculatedDuration: d } = c,
      h = d + i,
      v = h * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: d,
      resolvedDuration: h,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: C } = this.options;
      return { done: !0, value: C[C.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: h,
      repeat: v,
      repeatType: y,
      repeatDelay: x,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      m = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      w = s;
    if (v) {
      const C = Math.min(this.currentTime, c) / d;
      let b = Math.floor(C),
        P = C % 1;
      !P && C >= 1 && (P = 1),
        P === 1 && b--,
        (b = Math.min(b, v + 1)),
        !!(b % 2) &&
          (y === "reverse"
            ? ((P = 1 - P), x && (P -= x / d))
            : y === "mirror" && (w = o)),
        (g = tn(0, 1, P) * d);
    }
    const T = m ? { done: !1, value: a[0] } : w.next(g);
    l && (T.value = l(T.value));
    let { done: j } = T;
    !m &&
      u !== null &&
      (j = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const M =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && j));
    return (
      M && i !== void 0 && (T.value = Mo(a, this.options, i)),
      S && S(T.value),
      M && this.finish(),
      T
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? St(t.calculatedDuration) : 0;
  }
  get time() {
    return St(this.currentTime);
  }
  set time(t) {
    (t = qt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = St(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = nw, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.teardown();
    const { onStop: t } = this.options;
    t && t();
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const vg = (e) => Array.isArray(e) && typeof e[0] == "number";
function yg(e) {
  return !!(
    !e ||
    (typeof e == "string" && xg[e]) ||
    vg(e) ||
    (Array.isArray(e) && e.every(yg))
  );
}
const Or = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  xg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Or([0, 0.65, 0.55, 1]),
    circOut: Or([0.55, 0, 1, 0.45]),
    backIn: Or([0.31, 0.01, 0.66, -0.59]),
    backOut: Or([0.33, 1.53, 0.69, 0.99]),
  };
function wg(e) {
  if (e) return vg(e) ? Or(e) : Array.isArray(e) ? e.map(wg) : xg[e];
}
function sw(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = wg(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const ow = y2(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  aw = new Set(["opacity", "clipPath", "filter", "transform"]),
  Ys = 10,
  lw = 2e4;
function uw(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !yg(e.ease);
}
function cw(e, t) {
  const n = new uc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < lw; ) (r = n.sample(s)), i.push(r.value), (s += Ys);
  return { times: void 0, keyframes: i, duration: s - Ys, ease: "linear" };
}
class nf extends og {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new sg(i, (s, o) => this.onKeyframesResolved(s, o), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: l,
      motionValue: a,
      name: u,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (uw(this.options)) {
      const { onComplete: d, onUpdate: h, motionValue: v, ...y } = this.options,
        x = cw(t, y);
      (t = x.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = x.duration),
        (s = x.times),
        (o = x.ease),
        (l = "keyframes");
    }
    const c = sw(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (c.startTime = Qt.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(Mo(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: i, times: s, type: l, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return St(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return St(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = qt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ee;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Ee;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: l,
    } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: a,
            onUpdate: u,
            onComplete: c,
            ...d
          } = this.options,
          h = new uc({
            ...d,
            keyframes: r,
            duration: i,
            type: s,
            ease: o,
            times: l,
            isGenerator: !0,
          }),
          v = qt(this.time);
        a.setWithVelocity(h.sample(v - Ys).value, h.sample(v).value, Ys);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: l,
    } = t;
    return (
      ow() &&
      r &&
      aw.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      l !== "inertia"
    );
  }
}
const cc =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const l = tc(r, e) || {},
      a = l.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - qt(a);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -u,
      onUpdate: (h) => {
        t.set(h), l.onUpdate && l.onUpdate(h);
      },
      onComplete: () => {
        o(), l.onComplete && l.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    Yx(l) || (c = { ...c, ...Kx(e, c) }),
      c.duration && (c.duration = qt(c.duration)),
      c.repeatDelay && (c.repeatDelay = qt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      (c.type === !1 && ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !s && t.get() !== void 0)
    ) {
      const h = Mo(c.keyframes, l);
      if (h !== void 0) {
        pe.update(() => {
          c.onUpdate(h), c.onComplete();
        });
        return;
      }
    }
    return !s && nf.supports(c) ? new nf(c) : new uc(c);
  };
function Xs(e) {
  return !!(Te(e) && e.add);
}
function dc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function fc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class pc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return dc(this.subscriptions, t), () => fc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const rf = 30,
  dw = (e) => !isNaN(parseFloat(e));
class fw {
  constructor(t, n = {}) {
    (this.version = "11.0.24"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = Qt.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = dw(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = Qt.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new pc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            pe.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Qt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > rf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, rf);
    return ag(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function yi(e, t) {
  return new fw(e, t);
}
function pw(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, yi(n));
}
function hw(e, t) {
  const n = ko(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = Tx(s[o]);
    pw(e, o, l);
  }
}
function mw({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Sg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  const u = e.getValue("willChange");
  r && (o = r);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const h in a) {
    const v = e.getValue(
        h,
        (s = e.latestValues[h]) !== null && s !== void 0 ? s : null
      ),
      y = a[h];
    if (y === void 0 || (d && mw(d, h))) continue;
    const x = { delay: n, elapsed: 0, ...tc(o || {}, h) };
    let S = !1;
    if (window.HandoffAppearAnimations) {
      const m = e.getProps()[Em];
      if (m) {
        const g = window.HandoffAppearAnimations(m, h);
        g !== null && ((x.elapsed = g), (S = !0));
      }
    }
    v.start(
      cc(h, v, y, e.shouldReduceMotion && On.has(h) ? { type: !1 } : x, e, S)
    );
    const p = v.animation;
    p && (Xs(u) && (u.add(h), p.then(() => u.remove(h))), c.push(p));
  }
  return (
    l &&
      Promise.all(c).then(() => {
        pe.update(() => {
          l && hw(e, l);
        });
      }),
    c
  );
}
function Ll(e, t, n = {}) {
  var r;
  const i = ko(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Sg(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: h,
            } = s;
            return gw(e, t, c + u, d, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else return Promise.all([o(), l(n.delay)]);
}
function gw(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(vw)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            Ll(u, t, { ...s, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function vw(e, t) {
  return e.sortNodePosition(t);
}
function yw(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ll(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ll(e, t, n);
  else {
    const i = typeof t == "function" ? ko(e, t, n.custom) : t;
    r = Promise.all(Sg(e, i, n));
  }
  return r.then(() => {
    pe.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const xw = [...Uu].reverse(),
  ww = Uu.length;
function Sw(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => yw(e, n, r)));
}
function Tw(e) {
  let t = Sw(e);
  const n = Cw();
  let r = !0;
  const i = (a) => (u, c) => {
    var d;
    const h = ko(
      e,
      c,
      a === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (h) {
      const { transition: v, transitionEnd: y, ...x } = h;
      u = { ...u, ...x, ...y };
    }
    return u;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      h = new Set();
    let v = {},
      y = 1 / 0;
    for (let S = 0; S < ww; S++) {
      const p = xw[S],
        m = n[p],
        g = u[p] !== void 0 ? u[p] : c[p],
        w = mi(g),
        T = p === a ? m.isActive : null;
      T === !1 && (y = S);
      let j = g === c[p] && g !== u[p] && w;
      if (
        (j && r && e.manuallyAnimateOnMount && (j = !1),
        (m.protectedKeys = { ...v }),
        (!m.isActive && T === null) ||
          (!g && !m.prevProp) ||
          Po(g) ||
          typeof g == "boolean")
      )
        continue;
      let C =
          Ew(m.prevProp, g) ||
          (p === a && m.isActive && !j && w) ||
          (S > y && w),
        b = !1;
      const P = Array.isArray(g) ? g : [g];
      let L = P.reduce(i(p), {});
      T === !1 && (L = {});
      const { prevResolvedValues: A = {} } = m,
        D = { ...A, ...L },
        z = (_) => {
          (C = !0),
            h.has(_) && ((b = !0), h.delete(_)),
            (m.needsAnimating[_] = !0);
          const W = e.getValue(_);
          W && (W.liveStyle = !1);
        };
      for (const _ in D) {
        const W = L[_],
          Re = A[_];
        if (v.hasOwnProperty(_)) continue;
        let k = !1;
        El(W) && El(Re) ? (k = !Wm(W, Re)) : (k = W !== Re),
          k
            ? W != null
              ? z(_)
              : h.add(_)
            : W !== void 0 && h.has(_)
            ? z(_)
            : (m.protectedKeys[_] = !0);
      }
      (m.prevProp = g),
        (m.prevResolvedValues = L),
        m.isActive && (v = { ...v, ...L }),
        r && e.blockInitialAnimation && (C = !1),
        C &&
          (!j || b) &&
          d.push(...P.map((_) => ({ animation: _, options: { type: p } })));
    }
    if (h.size) {
      const S = {};
      h.forEach((p) => {
        const m = e.getBaseTarget(p),
          g = e.getValue(p);
        g && (g.liveStyle = !0), (S[p] = m === void 0 ? null : m);
      }),
        d.push({ animation: S });
    }
    let x = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((h) => {
        var v;
        return (v = h.animationState) === null || v === void 0
          ? void 0
          : v.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = o(a);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
  };
}
function Ew(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Wm(t, e) : !1;
}
function fn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Cw() {
  return {
    animate: fn(!0),
    whileInView: fn(),
    whileHover: fn(),
    whileTap: fn(),
    whileDrag: fn(),
    whileFocus: fn(),
    exit: fn(),
  };
}
class Pw extends un {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Tw(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Po(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let jw = 0;
class bw extends un {
  constructor() {
    super(...arguments), (this.id = jw++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const kw = { animation: { Feature: Pw }, exit: { Feature: bw } },
  sf = (e, t) => Math.abs(e - t);
function Mw(e, t) {
  const n = sf(e.x, t.x),
    r = sf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Tg {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = fa(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          v = Mw(d.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !v) return;
        const { point: y } = d,
          { timestamp: x } = me;
        this.history.push({ ...y, timestamp: x });
        const { onStart: S, onMove: p } = this.handlers;
        h ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, h) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = da(h, this.transformPagePoint)),
          pe.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, h) => {
        this.end();
        const { onEnd: v, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = fa(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : da(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(d, S), y && y(d, S);
      }),
      !Fm(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = bo(t),
      l = da(o, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = me;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, fa(l, this.history)),
      (this.removeListeners = wt(
        xt(this.contextWindow, "pointermove", this.handlePointerMove),
        xt(this.contextWindow, "pointerup", this.handlePointerUp),
        xt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), nn(this.updatePoint);
  }
}
function da(e, t) {
  return t ? { point: t(e.point) } : e;
}
function of(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function fa({ point: e }, t) {
  return {
    point: e,
    delta: of(e, Eg(t)),
    offset: of(e, Nw(t)),
    velocity: Lw(t, 0.1),
  };
}
function Nw(e) {
  return e[0];
}
function Eg(e) {
  return e[e.length - 1];
}
function Lw(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Eg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > qt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = St(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Fe(e) {
  return e.max - e.min;
}
function Dl(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function af(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Z(t.min, t.max, e.origin)),
    (e.scale = Fe(n) / Fe(t)),
    (Dl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Z(n.min, n.max, e.origin) - e.originPoint),
    (Dl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Kr(e, t, n, r) {
  af(e.x, t.x, n.x, r ? r.originX : void 0),
    af(e.y, t.y, n.y, r ? r.originY : void 0);
}
function lf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Fe(t));
}
function Dw(e, t, n) {
  lf(e.x, t.x, n.x), lf(e.y, t.y, n.y);
}
function uf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Fe(t));
}
function Yr(e, t, n) {
  uf(e.x, t.x, n.x), uf(e.y, t.y, n.y);
}
function Aw(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Z(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function cf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Rw(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: cf(e.x, n, i), y: cf(e.y, t, r) };
}
function df(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Ow(e, t) {
  return { x: df(e.x, t.x), y: df(e.y, t.y) };
}
function Vw(e, t) {
  let n = 0.5;
  const r = Fe(e),
    i = Fe(t);
  return (
    i > r
      ? (n = vi(t.min, t.max - r, e.min))
      : r > i && (n = vi(e.min, e.max - i, t.min)),
    tn(0, 1, n)
  );
}
function Iw(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Al = 0.35;
function zw(e = Al) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Al),
    { x: ff(e, "left", "right"), y: ff(e, "top", "bottom") }
  );
}
function ff(e, t, n) {
  return { min: pf(e, t), max: pf(e, n) };
}
function pf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const hf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Qn = () => ({ x: hf(), y: hf() }),
  mf = () => ({ min: 0, max: 0 }),
  ie = () => ({ x: mf(), y: mf() });
function We(e) {
  return [e("x"), e("y")];
}
function Cg({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function _w({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Fw(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function pa(e) {
  return e === void 0 || e === 1;
}
function Rl({ scale: e, scaleX: t, scaleY: n }) {
  return !pa(e) || !pa(t) || !pa(n);
}
function mn(e) {
  return (
    Rl(e) ||
    Pg(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Pg(e) {
  return gf(e.x) || gf(e.y);
}
function gf(e) {
  return e && e !== "0%";
}
function qs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function vf(e, t, n, r, i) {
  return i !== void 0 && (e = qs(e, i, r)), qs(e, n, r) + t;
}
function Ol(e, t = 0, n = 1, r, i) {
  (e.min = vf(e.min, t, n, r, i)), (e.max = vf(e.max, t, n, r, i));
}
function jg(e, { x: t, y: n }) {
  Ol(e.x, t.translate, t.scale, t.originPoint),
    Ol(e.y, n.translate, n.scale, n.originPoint);
}
function Bw(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    (s = n[l]), (o = s.projectionDelta);
    const a = s.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Zn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), jg(e, o)),
      r && mn(s.latestValues) && Zn(e, s.latestValues));
  }
  (t.x = yf(t.x)), (t.y = yf(t.y));
}
function yf(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function At(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function xf(e, t, [n, r, i]) {
  const s = t[i] !== void 0 ? t[i] : 0.5,
    o = Z(e.min, e.max, s);
  Ol(e, t[n], t[r], o, t.scale);
}
const $w = ["x", "scaleX", "originX"],
  Uw = ["y", "scaleY", "originY"];
function Zn(e, t) {
  xf(e.x, t, $w), xf(e.y, t, Uw);
}
function bg(e, t) {
  return Cg(Fw(e.getBoundingClientRect(), t));
}
function Hw(e, t, n) {
  const r = bg(e, n),
    { scroll: i } = t;
  return i && (At(r.x, i.offset.x), At(r.y, i.offset.y)), r;
}
const kg = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Ww = new WeakMap();
class Gw {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ie()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(bo(c, "page").point);
      },
      s = (c, d) => {
        const { drag: h, dragPropagation: v, onDragStart: y } = this.getProps();
        if (
          h &&
          !v &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = $m(h)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          We((S) => {
            let p = this.getAxisMotionValue(S).get() || 0;
            if (dt.test(p)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const g = m.layout.layoutBox[S];
                g && (p = Fe(g) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[S] = p;
          }),
          y && y(c, d);
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: y,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: S } = d;
        if (v && this.currentDirection === null) {
          (this.currentDirection = Kw(S)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          x && x(c, d);
      },
      l = (c, d) => this.stop(c, d),
      a = () =>
        We((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Tg(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: kg(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && s(t, n);
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Qi(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = Aw(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && Xn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = Rw(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = zw(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        We((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = Iw(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Xn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = Hw(r, i.root, this.visualElement.getTransformPagePoint());
    let o = Ow(i.layout.layoutBox, s);
    if (n) {
      const l = n(_w(o));
      (this.hasMutatedConstraints = !!l), l && (o = Cg(l));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = We((c) => {
        if (!Qi(c, n, this.currentDirection)) return;
        let d = (a && a[c]) || {};
        o && (d = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          v = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: h,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(cc(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    We((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    We((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    We((n) => {
      const { drag: r } = this.getProps();
      if (!Qi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - Z(o, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Xn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    We((o) => {
      const l = this.getAxisMotionValue(o);
      if (l) {
        const a = l.get();
        i[o] = Vw({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      We((o) => {
        if (!Qi(o, t, null)) return;
        const l = this.getAxisMotionValue(o),
          { min: a, max: u } = this.constraints[o];
        l.set(Z(a, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Ww.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = xt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Xn(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = vt(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (We((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += a[c].translate),
                d.set(d.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Al,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l,
    };
  }
}
function Qi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Kw(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Yw extends un {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ee),
      (this.removeListeners = Ee),
      (this.controls = new Gw(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ee);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const wf = (e) => (t, n) => {
  e && e(t, n);
};
class Xw extends un {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ee);
  }
  onPointerDown(t) {
    this.session = new Tg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: kg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: wf(t),
      onStart: wf(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && i(s, o);
      },
    };
  }
  mount() {
    this.removePointerDownListener = xt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function qw() {
  const e = E.useContext(Co);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = E.useId();
  return E.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const hs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Sf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Mr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (I.test(e)) e = parseFloat(e);
        else return e;
      const n = Sf(e, t.target.x),
        r = Sf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Qw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = rn.parse(e);
      if (i.length > 5) return r;
      const s = rn.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + o] /= l), (i[1 + o] /= a);
      const u = Z(l, a, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class Zw extends $.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    Zy(Jw),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (hs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              pe.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      $u.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Mg(e) {
  const [t, n] = qw(),
    r = E.useContext(Wu);
  return $.createElement(Zw, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(jm),
    isPresent: t,
    safeToRemove: n,
  });
}
const Jw = {
    borderRadius: {
      ...Mr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Mr,
    borderTopRightRadius: Mr,
    borderBottomLeftRadius: Mr,
    borderBottomRightRadius: Mr,
    boxShadow: Qw,
  },
  Ng = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  eS = Ng.length,
  Tf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Ef = (e) => typeof e == "number" || I.test(e);
function tS(e, t, n, r, i, s) {
  i
    ? ((e.opacity = Z(0, n.opacity !== void 0 ? n.opacity : 1, nS(r))),
      (e.opacityExit = Z(t.opacity !== void 0 ? t.opacity : 1, 0, rS(r))))
    : s &&
      (e.opacity = Z(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < eS; o++) {
    const l = `border${Ng[o]}Radius`;
    let a = Cf(t, l),
      u = Cf(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Ef(a) === Ef(u)
        ? ((e[l] = Math.max(Z(Tf(a), Tf(u), r), 0)),
          (dt.test(u) || dt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r));
}
function Cf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const nS = Lg(0, 0.5, pg),
  rS = Lg(0.5, 0.95, Ee);
function Lg(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(vi(e, t, r)));
}
function Pf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function He(e, t) {
  Pf(e.x, t.x), Pf(e.y, t.y);
}
function jf(e, t, n, r, i) {
  return (
    (e -= t), (e = qs(e, 1 / n, r)), i !== void 0 && (e = qs(e, 1 / i, r)), e
  );
}
function iS(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (dt.test(t) &&
      ((t = parseFloat(t)), (t = Z(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let l = Z(s.min, s.max, r);
  e === s && (l -= t),
    (e.min = jf(e.min, t, n, l, i)),
    (e.max = jf(e.max, t, n, l, i));
}
function bf(e, t, [n, r, i], s, o) {
  iS(e, t[n], t[r], t[i], t.scale, s, o);
}
const sS = ["x", "scaleX", "originX"],
  oS = ["y", "scaleY", "originY"];
function kf(e, t, n, r) {
  bf(e.x, t, sS, n ? n.x : void 0, r ? r.x : void 0),
    bf(e.y, t, oS, n ? n.y : void 0, r ? r.y : void 0);
}
function Mf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Dg(e) {
  return Mf(e.x) && Mf(e.y);
}
function aS(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Ag(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Nf(e) {
  return Fe(e.x) / Fe(e.y);
}
class lS {
  constructor() {
    this.members = [];
  }
  add(t) {
    dc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (fc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Lf(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: u, rotateX: c, rotateY: d, skewX: h, skewY: v } = n;
    u && (r += `rotate(${u}deg) `),
      c && (r += `rotateX(${c}deg) `),
      d && (r += `rotateY(${d}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const uS = (e, t) => e.depth - t.depth;
class cS {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    dc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    fc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(uS),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function dS(e, t) {
  const n = Qt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (nn(r), e(s - t));
    };
  return pe.read(r, !0), () => nn(r);
}
function fS(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function pS(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function hS(e, t, n) {
  const r = Te(e) ? e : yi(e);
  return r.start(cc("", r, t, n)), r.animation;
}
const ha = ["", "X", "Y", "Z"],
  mS = { visibility: "hidden" },
  Df = 1e3;
let gS = 0;
const gn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function ma(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Rg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      (this.id = gS++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (gn.totalNodes =
              gn.resolvedTargetDeltas =
              gn.recalculatedProjection =
                0),
            this.nodes.forEach(xS),
            this.nodes.forEach(CS),
            this.nodes.forEach(PS),
            this.nodes.forEach(wS),
            fS(gn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new cS());
    }
    addEventListener(o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new pc()),
        this.eventHandlers.get(o).add(l)
      );
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = pS(o)), (this.instance = o);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = dS(h, 250)),
            hs.hasAnimatedSinceResize &&
              ((hs.hasAnimatedSinceResize = !1), this.nodes.forEach(Rf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: v,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || NS,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: p } =
                  c.getProps(),
                m = !this.targetLayout || !Ag(this.targetLayout, y) || v,
                g = !h && v;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const w = { ...tc(x, "layout"), onPlay: S, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                h || Rf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        nn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(jS),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Af);
        return;
      }
      this.isUpdating || this.nodes.forEach(TS),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(ES),
        this.nodes.forEach(vS),
        this.nodes.forEach(yS),
        this.clearAllSnapshots();
      const l = Qt.now();
      (me.delta = tn(0, 1e3 / 60, l - me.timestamp)),
        (me.timestamp = l),
        (me.isProcessing = !0),
        ia.update.process(me),
        ia.preRender.process(me),
        ia.render.process(me),
        (me.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), $u.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(SS), this.sharedNodes.forEach(bS);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        pe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      pe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ie()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !Dg(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (l || mn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        o && (a = this.removeTransform(a)),
        LS(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return ie();
      const l = o.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (At(l.x, a.offset.x), At(l.y, a.offset.y)), l;
    }
    removeElementScroll(o) {
      const l = ie();
      He(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            He(l, o);
            const { scroll: h } = this.root;
            h && (At(l.x, -h.offset.x), At(l.y, -h.offset.y));
          }
          At(l.x, c.offset.x), At(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(o, l = !1) {
      const a = ie();
      He(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Zn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          mn(c.latestValues) && Zn(a, c.latestValues);
      }
      return mn(this.latestValues) && Zn(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = ie();
      He(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !mn(u.latestValues)) continue;
        Rl(u.latestValues) && u.updateSnapshot();
        const c = ie(),
          d = u.measurePageBox();
        He(c, d),
          kf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return mn(this.latestValues) && kf(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== me.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (
          ((this.resolvedRelativeTargetAt = me.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ie()),
              (this.relativeTargetOrigin = ie()),
              Yr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                v.layout.layoutBox
              ),
              He(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ie()), (this.targetWithTransforms = ie())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Dw(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : He(this.target, this.layout.layoutBox),
                jg(this.target, this.targetDelta))
              : He(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v &&
            !!v.resumingFrom == !!this.resumingFrom &&
            !v.options.layoutScroll &&
            v.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = v),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ie()),
                (this.relativeTargetOrigin = ie()),
                Yr(this.relativeTargetOrigin, this.target, v.target),
                He(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          gn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Rl(this.parent.latestValues) ||
          Pg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === me.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      He(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        v = this.treeScale.y;
      Bw(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = ie()));
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = Qn()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Qn()),
        (this.projectionDeltaWithTransform = Qn()));
      const x = this.projectionTransform;
      Kr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = Lf(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x ||
          this.treeScale.x !== h ||
          this.treeScale.y !== v) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        gn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        d = Qn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const h = ie(),
        v = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = v !== y,
        S = this.getStack(),
        p = !S || S.members.length <= 1,
        m = !!(x && !p && this.options.crossfade === !0 && !this.path.some(MS));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (w) => {
        const T = w / 1e3;
        Of(d.x, o.x, T),
          Of(d.y, o.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Yr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            kS(this.relativeTarget, this.relativeTargetOrigin, h, T),
            g && aS(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ie()),
            He(g, this.relativeTarget)),
          x &&
            ((this.animationValues = c), tS(c, u, this.latestValues, T, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (nn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = pe.update(() => {
          (hs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = hS(0, Df, {
              ...o,
              onUpdate: (l) => {
                this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Df),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!l || !a || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Og(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || ie();
          const d = Fe(this.layout.layoutBox.x);
          (a.x.min = o.target.x.min), (a.x.max = a.x.min + d);
          const h = Fe(this.layout.layoutBox.y);
          (a.y.min = o.target.y.min), (a.y.max = a.y.min + h);
        }
        He(l, a),
          Zn(l, c),
          Kr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new lS()),
        this.sharedNodes.get(o).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let l = !1;
      const { latestValues: a } = o;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && ma("z", o, u, this.animationValues);
      for (let c = 0; c < ha.length; c++)
        ma(`rotate${ha[c]}`, o, u, this.animationValues),
          ma(`skew${ha[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return mS;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = fs(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = fs(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !mn(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Lf(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        c && (u.transform = c(h, u.transform));
      const { x: v, y } = this.projectionDelta;
      (u.transformOrigin = `${v.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (a =
                    (l = h.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (u.opacity =
              d === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const x in Us) {
        if (h[x] === void 0) continue;
        const { correct: S, applyTo: p } = Us[x],
          m = u.transform === "none" ? h[x] : S(h[x], d);
        if (p) {
          const g = p.length;
          for (let w = 0; w < g; w++) u[p[w]] = m;
        } else u[x] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? fs(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Af),
        this.root.sharedNodes.clear();
    }
  };
}
function vS(e) {
  e.updateLayout();
}
function yS(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? We((d) => {
          const h = o ? n.measuredBox[d] : n.layoutBox[d],
            v = Fe(h);
          (h.min = r[d].min), (h.max = h.min + v);
        })
      : Og(s, n.layoutBox, r) &&
        We((d) => {
          const h = o ? n.measuredBox[d] : n.layoutBox[d],
            v = Fe(r[d]);
          (h.max = h.min + v),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + v));
        });
    const l = Qn();
    Kr(l, r, n.layoutBox);
    const a = Qn();
    o ? Kr(a, e.applyTransform(i, !0), n.measuredBox) : Kr(a, r, n.layoutBox);
    const u = !Dg(l);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: v } = d;
        if (h && v) {
          const y = ie();
          Yr(y, n.layoutBox, h.layoutBox);
          const x = ie();
          Yr(x, r, v.layoutBox),
            Ag(y, x) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function xS(e) {
  gn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function wS(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function SS(e) {
  e.clearSnapshot();
}
function Af(e) {
  e.clearMeasurements();
}
function TS(e) {
  e.isLayoutDirty = !1;
}
function ES(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Rf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function CS(e) {
  e.resolveTargetDelta();
}
function PS(e) {
  e.calcProjection();
}
function jS(e) {
  e.resetSkewAndRotation();
}
function bS(e) {
  e.removeLeadSnapshot();
}
function Of(e, t, n) {
  (e.translate = Z(t.translate, 0, n)),
    (e.scale = Z(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Vf(e, t, n, r) {
  (e.min = Z(t.min, n.min, r)), (e.max = Z(t.max, n.max, r));
}
function kS(e, t, n, r) {
  Vf(e.x, t.x, n.x, r), Vf(e.y, t.y, n.y, r);
}
function MS(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const NS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  If = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  zf = If("applewebkit/") && !If("chrome/") ? Math.round : Ee;
function _f(e) {
  (e.min = zf(e.min)), (e.max = zf(e.max));
}
function LS(e) {
  _f(e.x), _f(e.y);
}
function Og(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Dl(Nf(t), Nf(n), 0.2))
  );
}
const DS = Rg({
    attachResizeListener: (e, t) => vt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ga = { current: void 0 },
  Vg = Rg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ga.current) {
        const e = new DS({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ga.current = e);
      }
      return ga.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  AS = {
    pan: { Feature: Xw },
    drag: { Feature: Yw, ProjectionNode: Vg, MeasureLayout: Mg },
  },
  Vl = { current: null },
  Ig = { current: !1 };
function RS() {
  if (((Ig.current = !0), !!_u))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Vl.current = e.matches);
      e.addListener(t), t();
    } else Vl.current = !1;
}
function OS(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const s = t[i],
      o = n[i];
    if (Te(s)) e.addValue(i, s), Xs(r) && r.add(i);
    else if (Te(o)) e.addValue(i, yi(s, { owner: e })), Xs(r) && r.remove(i);
    else if (o !== s)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        l.liveStyle === !0 ? l.jump(s) : l.hasAnimated || l.set(s);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, yi(l !== void 0 ? l : s, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Ff = new WeakMap(),
  VS = [...qm, we, rn],
  IS = (e) => VS.find(Xm(e)),
  zg = Object.keys(gi),
  zS = zg.length,
  Bf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  _S = Hu.length;
class FS {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    l = {}
  ) {
    (this.resolveKeyframes = (h, v, y, x) =>
      new this.KeyframeResolver(h, v, y, x, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = rc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => pe.render(this.render, !1, !0));
    const { latestValues: a, renderState: u } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = jo(n)),
      (this.isVariantNode = Pm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in d) {
      const v = d[h];
      a[h] !== void 0 && Te(v) && (v.set(a[h], !1), Xs(c) && c.add(h));
    }
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Ff.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Ig.current || RS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Vl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ff.delete(this.current),
      this.projection && this.projection.unmount(),
      nn(this.notifyUpdate),
      nn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = On.has(t),
      i = n.on("change", (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && pe.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, s) {
    let o, l;
    for (let a = 0; a < zS; a++) {
      const u = zg[a],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: h,
          MeasureLayout: v,
        } = gi[u];
      h && (o = h),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          v && (l = v));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      o
    ) {
      this.projection = new o(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: h,
        layoutRoot: v,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (d && Xn(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: s,
        layoutScroll: h,
        layoutRoot: v,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ie();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Bf.length; r++) {
      const i = Bf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = t["on" + i];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = OS(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < _S; r++) {
      const i = Hu[r],
        s = this.props[i];
      (mi(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = yi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Km(i) || Gm(i))
          ? (i = parseFloat(i))
          : !IS(i) && rn.test(n) && (i = ig(t, n)),
        this.setBaseTarget(t, Te(i) ? i.get() : i)),
      Te(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n, r;
    const { initial: i } = this.props,
      s =
        typeof i == "string" || typeof i == "object"
          ? (r = ec(
              this.props,
              i,
              (n = this.presenceContext) === null || n === void 0
                ? void 0
                : n.custom
            )) === null || r === void 0
            ? void 0
            : r[t]
          : void 0;
    if (i && s !== void 0) return s;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Te(o)
      ? o
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new pc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class _g extends FS {
  constructor() {
    super(...arguments), (this.KeyframeResolver = sg);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function BS(e) {
  return window.getComputedStyle(e);
}
class $S extends _g {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (On.has(n)) {
      const r = sc(n);
      return (r && r.default) || 0;
    } else {
      const r = BS(t),
        i = (Mm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return bg(t, n);
  }
  build(t, n, r, i) {
    Xu(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ju(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Te(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Rm(t, n, r, i);
  }
}
class US extends _g {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (On.has(n)) {
      const r = sc(n);
      return (r && r.default) || 0;
    }
    return (n = Om.has(n) ? n : Bu(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ie();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Im(t, n, this);
  }
  build(t, n, r, i) {
    Qu(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Vm(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Zu(t.tagName)), super.mount(t);
  }
}
const HS = (e, t) =>
    Gu(e)
      ? new US(t, { enableHardwareAcceleration: !1 })
      : new $S(t, { enableHardwareAcceleration: !0 }),
  WS = { layout: { ProjectionNode: Vg, MeasureLayout: Mg } },
  GS = { ...kw, ...Fx, ...AS, ...WS },
  oe = qy((e, t) => bx(e, t, GS, HS));
function Fg() {
  const e = E.useRef(!1);
  return (
    Fu(
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
}
function KS() {
  const e = Fg(),
    [t, n] = E.useState(0),
    r = E.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [E.useCallback(() => pe.postRender(r), [r]), t];
}
class YS extends E.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function XS({ children: e, isPresent: t }) {
  const n = E.useId(),
    r = E.useRef(null),
    i = E.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = E.useContext(zu);
  return (
    E.useInsertionEffect(() => {
      const { width: o, height: l, top: a, left: u } = i.current;
      if (t || !r.current || !o || !l) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    E.createElement(
      YS,
      { isPresent: t, childRef: r, sizeRef: i },
      E.cloneElement(e, { ref: r })
    )
  );
}
const va = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const l = zm(qS),
    a = E.useId(),
    u = E.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          l.set(c, !0);
          for (const d of l.values()) if (!d) return;
          r && r();
        },
        register: (c) => (l.set(c, !1), () => l.delete(c)),
      }),
      s ? void 0 : [n]
    );
  return (
    E.useMemo(() => {
      l.forEach((c, d) => l.set(d, !1));
    }, [n]),
    E.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    o === "popLayout" && (e = E.createElement(XS, { isPresent: n }, e)),
    E.createElement(Co.Provider, { value: u }, e)
  );
};
function qS() {
  return new Map();
}
function QS(e) {
  return E.useEffect(() => () => e(), []);
}
const vn = (e) => e.key || "";
function ZS(e, t) {
  e.forEach((n) => {
    const r = vn(n);
    t.set(r, n);
  });
}
function JS(e) {
  const t = [];
  return (
    E.Children.forEach(e, (n) => {
      E.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const e4 = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: s = !0,
  mode: o = "sync",
}) => {
  const l = E.useContext(Wu).forceRender || KS()[0],
    a = Fg(),
    u = JS(e);
  let c = u;
  const d = E.useRef(new Map()).current,
    h = E.useRef(c),
    v = E.useRef(new Map()).current,
    y = E.useRef(!0);
  if (
    (Fu(() => {
      (y.current = !1), ZS(u, v), (h.current = c);
    }),
    QS(() => {
      (y.current = !0), v.clear(), d.clear();
    }),
    y.current)
  )
    return E.createElement(
      E.Fragment,
      null,
      c.map((m) =>
        E.createElement(
          va,
          {
            key: vn(m),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: s,
            mode: o,
          },
          m
        )
      )
    );
  c = [...c];
  const x = h.current.map(vn),
    S = u.map(vn),
    p = x.length;
  for (let m = 0; m < p; m++) {
    const g = x[m];
    S.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
  }
  return (
    o === "wait" && d.size && (c = []),
    d.forEach((m, g) => {
      if (S.indexOf(g) !== -1) return;
      const w = v.get(g);
      if (!w) return;
      const T = x.indexOf(g);
      let j = m;
      if (!j) {
        const M = () => {
          d.delete(g);
          const C = Array.from(v.keys()).filter((b) => !S.includes(b));
          if (
            (C.forEach((b) => v.delete(b)),
            (h.current = u.filter((b) => {
              const P = vn(b);
              return P === g || C.includes(P);
            })),
            !d.size)
          ) {
            if (a.current === !1) return;
            l(), r && r();
          }
        };
        (j = E.createElement(
          va,
          {
            key: vn(w),
            isPresent: !1,
            onExitComplete: M,
            custom: t,
            presenceAffectsLayout: s,
            mode: o,
          },
          w
        )),
          d.set(g, j);
      }
      c.splice(T, 0, j);
    }),
    (c = c.map((m) => {
      const g = m.key;
      return d.has(g)
        ? m
        : E.createElement(
            va,
            { key: vn(m), isPresent: !0, presenceAffectsLayout: s, mode: o },
            m
          );
    })),
    E.createElement(
      E.Fragment,
      null,
      d.size ? c : c.map((m) => E.cloneElement(m))
    )
  );
};
function t4(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t && (nc(!!t.current), (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
const n4 = (e, t, n) => {
  const r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function r4(...e) {
  const t = E.useRef(0),
    [n, r] = E.useState(e[t.current]),
    i = E.useCallback(
      (s) => {
        (t.current = typeof s != "number" ? n4(0, e.length, t.current + 1) : s),
          r(e[t.current]);
      },
      [e.length, ...e]
    );
  return [n, i];
}
const i4 = { some: 0, all: 1 };
function s4(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const s = t4(e),
    o = new WeakMap(),
    l = (u) => {
      u.forEach((c) => {
        const d = o.get(c.target);
        if (c.isIntersecting !== !!d)
          if (c.isIntersecting) {
            const h = t(c);
            typeof h == "function" ? o.set(c.target, h) : a.unobserve(c.target);
          } else d && (d(c), o.delete(c.target));
      });
    },
    a = new IntersectionObserver(l, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : i4[i],
    });
  return s.forEach((u) => a.observe(u)), () => a.disconnect();
}
function o4(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  const [s, o] = E.useState(!1);
  return (
    E.useEffect(() => {
      if (!e.current || (i && s)) return;
      const l = () => (o(!0), i ? void 0 : () => o(!1)),
        a = { root: (t && t.current) || void 0, margin: n, amount: r };
      return s4(e.current, l, a);
    }, [t, e, n, i, r]),
    s
  );
}
const $f = () =>
    f.jsxs("div", {
      className: "space-x-2 text-lg",
      children: [
        f.jsx(en, {
          to: "/login",
          children: f.jsx("button", {
            className:
              "border-none py-[6px] px-3 leading-4 rounded-xl bg-blue-400/50 hover:bg-blue-400 transition-all duration-300 ease-in",
            children: "Login",
          }),
        }),
        f.jsx(en, {
          to: "/sign-up",
          children: f.jsx("button", {
            className:
              "border-none py-[6px] px-3 leading-4 rounded-xl bg-red-400/50 hover:bg-red-400 transition-all duration-300 ease-in",
            children: "Register",
          }),
        }),
      ],
    }),
  Uf = () => {
    const e = [
      { id: "1", name: "home", path: "/" },
      { id: "2", name: "doctors", path: "/doctors" },
      { id: "3", name: "about us", path: "/about" },
      { id: "4", name: "contact", path: "/contact" },
    ];
    return f.jsx("ul", {
      className: "flex flex-col lg:flex-row gap-y-5 gap-x-8 items-center",
      children: e.map((t) =>
        f.jsx("li", {
          className: "text-[20px] capitalize",
          children: f.jsx(
            Iu,
            {
              to: t.path,
              className: (n) =>
                n.isActive
                  ? "text-red-500"
                  : "text-blue-500 hover:text-red-500",
              children: t.name,
            },
            t.id
          ),
        })
      ),
    });
  },
  a4 = () => {
    const [e, t] = r4(!1, !0);
    return f.jsx("header", {
      className:
        " w-full bg-white/80 backdrop-blur-sm shadow-md fixed top-0 z-[99]",
      children: f.jsxs("div", {
        className:
          " container m-auto w-full h-[90px] px-4 flex justify-between items-center",
        children: [
          f.jsx("div", {
            children: f.jsx("a", {
              href: "/",
              children: f.jsx("img", {
                src: "./MED-LOGO.jpg",
                alt: "med_logo",
                className: "logo",
              }),
            }),
          }),
          f.jsxs("div", {
            children: [
              f.jsxs("div", {
                className: "flex lg:hidden",
                children: [
                  f.jsxs(oe.button, {
                    onClick: () => t(),
                    animate: e ? "open" : "close",
                    className:
                      "flex flex-col justify-center space-y-1 border-[6px] py-3 px-2 border-red-400 w-fit h-fit outline-none items-center z-[999]",
                    children: [
                      f.jsx(oe.span, {
                        variants: {
                          close: { rotate: 0, y: 0 },
                          open: { rotate: 50, y: "7.5px" },
                        },
                        className: "w-10 h-1 bg-black",
                      }),
                      f.jsx(oe.span, {
                        variants: {
                          close: { rotate: 0, y: 0 },
                          open: { rotate: -50, width: "40px" },
                        },
                        className: "w-8 h-1 bg-black",
                      }),
                      f.jsx(oe.span, {
                        variants: {
                          close: { rotate: 0, opacity: 1 },
                          open: { rotate: 0, opacity: 0 },
                        },
                        className: "w-5 h-1 bg-black",
                      }),
                    ],
                  }),
                  f.jsx("div", {
                    children: f.jsx(e4, {
                      children:
                        e &&
                        f.jsxs(oe.div, {
                          initial: "close",
                          animate: "open",
                          exit: "close",
                          variants: {
                            close: {
                              x: "-100%",
                              transition: {
                                staggerChildren: 0.25,
                                when: "afterChildren",
                                duration: 0.5,
                                ease: Gs,
                              },
                            },
                            open: {
                              x: "0%",
                              transition: {
                                staggerChildren: 0.25,
                                when: "beforeChildren",
                                duration: 0.5,
                                ease: Gs,
                              },
                            },
                          },
                          className:
                            "absolute flex flex-col justify-center items-center top-0 left-0 gap-y-[50px] text-3xl bg-blue-200 h-screen w-screen container m-auto",
                          children: [
                            f.jsx(oe.div, {
                              variants: {
                                close: { y: "-100%", opacity: 0 },
                                open: { y: "0%", opacity: 1 },
                              },
                              children: f.jsx("a", {
                                href: "/",
                                children: f.jsx("img", {
                                  src: "./MED-LOGO.jpg",
                                  alt: "med_logo",
                                  className: "logo",
                                }),
                              }),
                            }),
                            f.jsx(oe.nav, {
                              variants: {
                                close: { y: "-20%", opacity: 0 },
                                open: { y: "0%", opacity: 1 },
                              },
                              className: "space-y-10 lg:hidden",
                              children: f.jsx(Uf, {}),
                            }),
                            f.jsx(oe.div, {
                              variants: {
                                close: { y: "-20%", opacity: 0 },
                                open: { y: "0%", opacity: 1 },
                              },
                              children: f.jsx($f, {}),
                            }),
                          ],
                        }),
                    }),
                  }),
                ],
              }),
              f.jsx("nav", {
                className: "lg:flex gap-x-8 hidden",
                children: f.jsx(Uf, {}),
              }),
            ],
          }),
          f.jsx("div", {
            className: "hidden lg:flex text-2xl",
            children: f.jsx($f, {}),
          }),
        ],
      }),
    });
  },
  l4 = () =>
    f.jsx("section", {
      className: "pt-[120px]",
      children: f.jsxs("div", {
        className:
          "flex flex-col md:flex-row flex-wrap justify-between items-center container mx-auto",
        children: [
          f.jsx("div", {
            className: "flex-1",
            children: f.jsx("img", {
              src: "./about.png",
              alt: "about_img",
              className: " object-cover",
            }),
          }),
          f.jsxs("div", {
            className: "flex-1 px-5 md:px-2 ",
            children: [
              f.jsx("h2", { className: "h2", children: "Our Story" }),
              f.jsxs("p", {
                className: "break-words",
                children: [
                  "We strive to create a community where every individual realizes their utmost potential for lifelong health and well-being.",
                  f.jsx("br", {}),
                  " Our commitment is to earn the trust of patients, be a cherished partner in the community, and be catalysts for positive transformation for all.",
                ],
              }),
              f.jsx(en, {
                to: "/about",
                children: f.jsx("button", {
                  className: "mt-5 btn",
                  children: "Tell Me More",
                }),
              }),
              f.jsxs("div", {
                className: "mt-[30px] italic",
                children: [
                  f.jsxs("h2", {
                    className: "text-[20px] lg:text-[25px]  capitalize ",
                    children: [
                      "“ ",
                      f.jsx("span", {
                        className: "text-red-500",
                        children: "Medicines",
                      }),
                      " cure diseases, but only doctors can cure ",
                      f.jsx("span", {
                        className: "text-blue-500",
                        children: "patients.",
                      }),
                      "”",
                    ],
                  }),
                  f.jsx("p", {
                    className:
                      "break-words text-gray-600/50 font-[600] text-right",
                    children: "-Carl Jung",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
var Bg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Hf = $.createContext && $.createContext(Bg),
  u4 = ["attr", "size", "title"];
function c4(e, t) {
  if (e == null) return {};
  var n = d4(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function d4(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qs() {
  return (
    (Qs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qs.apply(this, arguments)
  );
}
function Wf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wf(Object(n), !0).forEach(function (r) {
          f4(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Wf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function f4(e, t, n) {
  return (
    (t = p4(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function p4(e) {
  var t = h4(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function h4(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $g(e) {
  return (
    e &&
    e.map((t, n) => $.createElement(t.tag, Zs({ key: n }, t.attr), $g(t.child)))
  );
}
function re(e) {
  return (t) =>
    $.createElement(m4, Qs({ attr: Zs({}, e.attr) }, t), $g(e.child));
}
function m4(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = c4(e, u4),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      $.createElement(
        "svg",
        Qs(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: Zs(Zs({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && $.createElement("title", null, s),
        e.children
      )
    );
  };
  return Hf !== void 0
    ? $.createElement(Hf.Consumer, null, (n) => t(n))
    : t(Bg);
}
function _t(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ug(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function g4(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
        },
        child: [],
      },
    ],
  })(e);
}
const v4 = () => {
  const e = [
    {
      id: 1,
      title: "Find a doctor",
      desc: "World class treatment for everyone. Our health system offers unmatched, expert health care.",
      img: "/find_doctor.jpg",
    },
    {
      id: 2,
      title: "Find a location",
      desc: "World class treatment for everyone. Our health system offers unmatched, expert health care.",
      img: "/gps.jpg",
    },
    {
      id: 3,
      title: "Book an appointment",
      desc: "World class treatment for everyone. Our health system offers unmatched, expert health care.",
      img: "/appointment.jpg",
    },
  ];
  return f.jsx("section", {
    className: "pt-[80px]",
    children: f.jsx("div", {
      className:
        "flex justify-center items-center w-full h-full container  mx-auto",
      children: f.jsxs("div", {
        className:
          "w-full h-full flex flex-col gap-5 lg:gap-[50px] justify-between items-center ",
        children: [
          f.jsxs("div", {
            className: "text-center pt-5 pb-8 lg:pb-4 capitalize",
            children: [
              f.jsxs("h1", {
                className: "h1",
                children: [
                  "Providing the Best ",
                  f.jsx("span", {
                    className: "text-blue-400",
                    children: "Medical",
                  }),
                  " ",
                  "Services.",
                ],
              }),
              f.jsx("hr", { className: "max-w-[100%] bg-black m-auto" }),
              f.jsx("p", {
                className: "p",
                children:
                  "World class treatment for everyone. Our health system offers unmatched, expert health care.",
              }),
            ],
          }),
          f.jsx("div", {
            className:
              " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3",
            children: e.map((t) =>
              f.jsxs("div", {
                className:
                  "py-2 px-4 rounded flex-1 flex flex-col text-center items-center justify-between border border-blue-400/20 hover:border-blue-400 transition-all duration-300 ease-in-out",
                children: [
                  f.jsxs(
                    "div",
                    {
                      className: "",
                      children: [
                        f.jsx("h2", {
                          className: "h2 capitalize",
                          children: t.title,
                        }),
                        f.jsxs("p", {
                          className: "p",
                          children: [t.desc, " "],
                        }),
                      ],
                    },
                    t.id
                  ),
                  f.jsx("div", {
                    className: "rounded self-center w-1/2",
                    children: f.jsx("img", {
                      src: t.img,
                      alt: "",
                      className: "w-100% object-cover",
                    }),
                  }),
                  f.jsx("div", {
                    children: f.jsx("a", {
                      href: "/doctors",
                      children: f.jsxs("button", {
                        className:
                          "flex gap-1 group rounded-full bg-blue-800/10 p-2 leading-none",
                        children: [
                          f.jsx("span", {
                            className: "text-[16.5px]",
                            children: "Go",
                          }),
                          f.jsx("span", {
                            className:
                              "group-hover:translate-x-1 transition-all duration-500 ease-in",
                            children: f.jsx(Ug, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            ),
          }),
        ],
      }),
    }),
  });
};
function Jn(e) {
  return re({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.628 16.186l-2.047-2.14 6.791-5.953 1.21 1.302zm8.837 6.047c2.14-2.14 3.535-5.117 3.535-8.466 0-6.604-5.395-12-12-12s-12 5.396-12 12c0 3.35 1.302 6.326 3.535 8.466l1.674-1.675c-1.767-1.767-2.79-4.093-2.79-6.79A9.568 9.568 0 0 1 12 4.185a9.568 9.568 0 0 1 9.581 9.581c0 2.605-1.116 5.024-2.79 6.791Z",
        },
        child: [],
      },
    ],
  })(e);
}
function y4(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
        child: [],
      },
    ],
  })(e);
}
function x4(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function w4(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function Il(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z",
        },
        child: [],
      },
    ],
  })(e);
}
function S4(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M636.11 390.15C614.44 308.85 580.07 231 534.1 159.13 511.98 124.56 498.03 96 454.05 96 415.36 96 384 125.42 384 161.71v60.11l-32.88-21.92a15.996 15.996 0 0 1-7.12-13.31V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v170.59c0 5.35-2.67 10.34-7.12 13.31L256 221.82v-60.11C256 125.42 224.64 96 185.95 96c-43.98 0-57.93 28.56-80.05 63.13C59.93 231 25.56 308.85 3.89 390.15 1.3 399.84 0 409.79 0 419.78c0 61.23 62.48 105.44 125.24 88.62l59.5-15.95c42.18-11.3 71.26-47.47 71.26-88.62v-87.49l-85.84 57.23a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09L320 235.23l167.59 111.72a7.994 7.994 0 0 1 2.22 11.09l-8.88 13.31a7.994 7.994 0 0 1-11.09 2.22L384 316.34v87.49c0 41.15 29.08 77.31 71.26 88.62l59.5 15.95C577.52 525.22 640 481.01 640 419.78c0-9.99-1.3-19.94-3.89-29.63z",
        },
        child: [],
      },
    ],
  })(e);
}
function T4(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z",
        },
        child: [],
      },
    ],
  })(e);
}
function E4(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M483.55,227.55H462c-50.68,0-76.07-61.27-40.23-97.11L437,115.19A28.44,28.44,0,0,0,396.8,75L381.56,90.22c-35.84,35.83-97.11,10.45-97.11-40.23V28.44a28.45,28.45,0,0,0-56.9,0V50c0,50.68-61.27,76.06-97.11,40.23L115.2,75A28.44,28.44,0,0,0,75,115.19l15.25,15.25c35.84,35.84,10.45,97.11-40.23,97.11H28.45a28.45,28.45,0,1,0,0,56.89H50c50.68,0,76.07,61.28,40.23,97.12L75,396.8A28.45,28.45,0,0,0,115.2,437l15.24-15.25c35.84-35.84,97.11-10.45,97.11,40.23v21.54a28.45,28.45,0,0,0,56.9,0V462c0-50.68,61.27-76.07,97.11-40.23L396.8,437A28.45,28.45,0,0,0,437,396.8l-15.25-15.24c-35.84-35.84-10.45-97.12,40.23-97.12h21.54a28.45,28.45,0,1,0,0-56.89ZM224,272a48,48,0,1,1,48-48A48,48,0,0,1,224,272Zm80,56a24,24,0,1,1,24-24A24,24,0,0,1,304,328Z",
        },
        child: [],
      },
    ],
  })(e);
}
function zl(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z",
        },
        child: [],
      },
    ],
  })(e);
}
const C4 = () =>
  f.jsx(f.Fragment, {
    children: f.jsx("section", {
      className: "w-full h-full xl:h-[82vh]  bg-cyan-400/30 relative",
      children: f.jsx("div", {
        className: "flex flex-wrap justify-center w-full h-full ",
        children: f.jsxs(oe.div, {
          className:
            "flex flex-col lg:flex-row justify-between items-center container m-auto",
          children: [
            f.jsxs("div", {
              className:
                "flex-1 text-center lg:text-left lg:max-w-[50%] py-3 px-4",
              children: [
                f.jsxs("h1", {
                  className: "h1 text-wrap",
                  children: [
                    f.jsx("span", {
                      className: "text-red-500",
                      children: "MyEasyDoctor",
                    }),
                    f.jsx("br", {}),
                    "Where ",
                    f.jsx("i", { children: "Appointments" }),
                    " Meet ",
                    f.jsx("i", { children: "Convenience" }),
                    ".",
                  ],
                }),
                f.jsx("p", {
                  className: "text-red-500 mb-4 p text-wrap",
                  children:
                    "MyEasyDoctor is like a helpful digital assistant for your health! It's a safe and flexible platform that makes it easy for hospitals and clinics to support people on their health journeys. With its user-friendly design, it helps collect information smoothly and improves how doctors and patients talk to each other. It's all about making healthcare simpler and better for everyone!",
                }),
                f.jsxs("div", {
                  className: " lg:hidden flex relative pointer-events-none",
                  children: [
                    f.jsx("div", {
                      className:
                        "imageContainer flex-1 flex justify-center rounded-full ",
                      children: f.jsx("img", {
                        src: "/doctor01.png",
                        alt: "doctor.png",
                        width: 300,
                      }),
                    }),
                    f.jsxs("div", {
                      className: "text-sm leading-3",
                      children: [
                        f.jsxs("p", {
                          className:
                            "flex items-center gap-2 absolute top-[.5em] left-0 bg-white rounded-full px-2 font-semibold animate-moveX",
                          children: [
                            f.jsxs("span", { children: [f.jsx(Jn, {}), " "] }),
                            f.jsx("span", { children: "Fast & Secure" }),
                          ],
                        }),
                        f.jsxs("p", {
                          className:
                            "flex items-center gap-2 absolute bottom-[10em] left-[2em] bg-white rounded-full px-2 font-semibold animate-moveXRe",
                          children: [
                            f.jsxs("span", { children: [f.jsx(Il, {}), " "] }),
                            f.jsx("span", { children: "Talk to Doctor" }),
                          ],
                        }),
                        f.jsxs("p", {
                          className:
                            "flex items-center gap-2 absolute top-[12.5em] right-[3em] bg-white rounded-full px-2 font-semibold animate-moveX",
                          children: [
                            f.jsxs("span", { children: [f.jsx(zl, {}), " "] }),
                            f.jsx("span", { children: "Save Records" }),
                          ],
                        }),
                        f.jsxs("p", {
                          className:
                            "flex items-center gap-2 absolute bottom-[.5em] right-0 bg-white rounded-full px-2 font-semibold animate-moveXRe",
                          children: [
                            f.jsxs("span", { children: [f.jsx(Jn, {}), " "] }),
                            f.jsx("span", { children: "Fast & Secure" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: " space-x-3",
                  children: [
                    f.jsx(en, {
                      to: "/doctors",
                      children: f.jsx("button", {
                        className: "btn",
                        children: "Book Appointment",
                      }),
                    }),
                    f.jsx(en, {
                      to: "https://youtu.be/w4o1bsGnjlQ?si=zrdSJttGhysTk_p8",
                      target: "_blank",
                      children: f.jsx("button", {
                        className: "btn",
                        children: "Watch Intro",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className: " hidden lg:flex relative pointer-events-none ",
              children: [
                f.jsx("div", {
                  className: "imageContainer",
                  children: f.jsx("img", {
                    src: "/doctor01.png",
                    alt: "doctor.png",
                  }),
                }),
                f.jsxs("div", {
                  className: "text-xl",
                  children: [
                    f.jsxs("p", {
                      className:
                        "flex items-center gap-2 absolute bottom-[15.5em] left-[-6em] bg-white rounded-full px-2 font-semibold animate-moveY",
                      children: [
                        f.jsx("span", { children: f.jsx(Jn, {}) }),
                        f.jsx("span", { children: "Fast & Secure" }),
                      ],
                    }),
                    f.jsxs("p", {
                      className:
                        "flex items-center gap-2 absolute bottom-[5em] left-[1em] bg-white rounded-full px-2 font-semibold animate-moveYRe",
                      children: [
                        f.jsxs("span", { children: [f.jsx(Il, {}), " "] }),
                        f.jsx("span", { children: "Talk to Doctor" }),
                      ],
                    }),
                    f.jsxs("p", {
                      className:
                        "flex items-center gap-2 absolute top-[12em] right-[6em] bg-white rounded-full px-2 font-semibold animate-moveYRe",
                      children: [
                        f.jsxs("span", { children: [f.jsx(zl, {}), " "] }),
                        f.jsx("span", { children: "Save Records" }),
                      ],
                    }),
                    f.jsxs("p", {
                      className:
                        "flex items-center gap-2 absolute top-[17.5em] right-[2em] bg-white rounded-full px-2 font-semibold animate-moveY",
                      children: [
                        f.jsx("span", { children: f.jsx(Jn, {}) }),
                        f.jsx("span", { children: "Fast & Secure" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
function Gf(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function hc(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Gf(t[n]) &&
          Gf(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          hc(e[n], t[n]);
    });
}
const Hg = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
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
function Tt() {
  const e = typeof document < "u" ? document : {};
  return hc(e, Hg), e;
}
const P4 = {
  document: Hg,
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
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Ue() {
  const e = typeof window < "u" ? window : {};
  return hc(e, P4), e;
}
function j4(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function b4(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function _l(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Pn() {
  return Date.now();
}
function k4(e) {
  const t = Ue();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function M4(e, t) {
  t === void 0 && (t = "x");
  const n = Ue();
  let r, i, s;
  const o = k4(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Zi(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function N4(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ve() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !N4(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, o = i.length; s < o; s += 1) {
        const l = i[s],
          a = Object.getOwnPropertyDescriptor(r, l);
        a !== void 0 &&
          a.enumerable &&
          (Zi(e[l]) && Zi(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : Ve(e[l], r[l])
            : !Zi(e[l]) && Zi(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : Ve(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function Ji(e, t, n) {
  e.style.setProperty(t, n);
}
function Wg(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Ue(),
    s = -t.translate;
  let o = null,
    l;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > s ? "next" : "prev",
    c = (h, v) => (u === "next" && h >= v) || (u === "prev" && h <= v),
    d = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const h = Math.max(Math.min((l - o) / a, 1), 0),
        v = 0.5 - Math.cos(h * Math.PI) / 2;
      let y = s + v * (n - s);
      if ((c(y, n) && (y = n), t.wrapperEl.scrollTo({ [r]: y }), c(y, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: y });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function lt(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function Js(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function eo(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : j4(t))), n;
}
function L4(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function D4(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Ft(e, t) {
  return Ue().getComputedStyle(e, null).getPropertyValue(t);
}
function to(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Gg(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function ya(e, t) {
  function n(r) {
    r.target === e && (t.call(e, r), e.removeEventListener("transitionend", n));
  }
  t && e.addEventListener("transitionend", n);
}
function Fl(e, t, n) {
  const r = Ue();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
function ce(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let xa;
function A4() {
  const e = Ue(),
    t = Tt();
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
}
function Kg() {
  return xa || (xa = A4()), xa;
}
let wa;
function R4(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Kg(),
    r = Ue(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = r.screen.width,
    a = r.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let y = i === "MacIntel";
  const x = [
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
  ];
  return (
    !c &&
      y &&
      n.touch &&
      x.indexOf(`${l}x${a}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (y = !1)),
    u && !v && ((o.os = "android"), (o.android = !0)),
    (c || h || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Yg(e) {
  return e === void 0 && (e = {}), wa || (wa = R4(e)), wa;
}
let Sa;
function O4() {
  const e = Ue(),
    t = Yg();
  let n = !1;
  function r() {
    const l = e.navigator.userAgent.toLowerCase();
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    );
  }
  if (r()) {
    const l = String(e.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, u] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = a < 16 || (a === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    o = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: i,
  };
}
function V4() {
  return Sa || (Sa = O4()), Sa;
}
function I4(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Ue();
  let s = null,
    o = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: h, height: v } = t;
            let y = h,
              x = v;
            d.forEach((S) => {
              let { contentBoxSize: p, contentRect: m, target: g } = S;
              (g && g !== t.el) ||
                ((y = m ? m.width : (p[0] || p).inlineSize),
                (x = m ? m.height : (p[0] || p).blockSize));
            }),
              (y !== h || x !== v) && l();
          });
        })),
        s.observe(t.el));
    },
    u = () => {
      o && i.cancelAnimationFrame(o),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", c);
    });
}
function z4(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    o = Ue(),
    l = function (c, d) {
      d === void 0 && (d = {});
      const h = o.MutationObserver || o.WebkitMutationObserver,
        v = new h((y) => {
          if (t.__preventObserver__) return;
          if (y.length === 1) {
            i("observerUpdate", y[0]);
            return;
          }
          const x = function () {
            i("observerUpdate", y[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(x)
            : o.setTimeout(x, 0);
        });
      v.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(v);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = Gg(t.hostEl);
          for (let d = 0; d < c.length; d += 1) l(c[d]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      s.forEach((c) => {
        c.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", a),
    r("destroy", u);
}
var _4 = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), l = 0; l < s; l++)
        o[l] = arguments[l];
      t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function F4() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Ft(r, "padding-left") || 0, 10) -
        parseInt(Ft(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Ft(r, "padding-top") || 0, 10) -
        parseInt(Ft(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function B4() {
  const e = this;
  function t(P, L) {
    return parseFloat(P.getPropertyValue(e.getDirectionLabel(L)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: o, wrongRTL: l } = e,
    a = e.virtual && n.virtual.enabled,
    u = a ? e.virtual.slides.length : e.slides.length,
    c = lt(i, `.${e.params.slideClass}, swiper-slide`),
    d = a ? e.virtual.slides.length : c.length;
  let h = [];
  const v = [],
    y = [];
  let x = n.slidesOffsetBefore;
  typeof x == "function" && (x = n.slidesOffsetBefore.call(e));
  let S = n.slidesOffsetAfter;
  typeof S == "function" && (S = n.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    m = e.slidesGrid.length;
  let g = n.spaceBetween,
    w = -x,
    T = 0,
    j = 0;
  if (typeof s > "u") return;
  typeof g == "string" && g.indexOf("%") >= 0
    ? (g = (parseFloat(g.replace("%", "")) / 100) * s)
    : typeof g == "string" && (g = parseFloat(g)),
    (e.virtualSize = -g),
    c.forEach((P) => {
      o ? (P.style.marginLeft = "") : (P.style.marginRight = ""),
        (P.style.marginBottom = ""),
        (P.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Ji(r, "--swiper-centered-offset-before", ""),
      Ji(r, "--swiper-centered-offset-after", ""));
  const M = n.grid && n.grid.rows > 1 && e.grid;
  M ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let C;
  const b =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (P) => typeof n.breakpoints[P].slidesPerView < "u"
    ).length > 0;
  for (let P = 0; P < d; P += 1) {
    C = 0;
    let L;
    if (
      (c[P] && (L = c[P]),
      M && e.grid.updateSlide(P, L, c),
      !(c[P] && Ft(L, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        b && (c[P].style[e.getDirectionLabel("width")] = "");
        const A = getComputedStyle(L),
          D = L.style.transform,
          z = L.style.webkitTransform;
        if (
          (D && (L.style.transform = "none"),
          z && (L.style.webkitTransform = "none"),
          n.roundLengths)
        )
          C = e.isHorizontal() ? Fl(L, "width", !0) : Fl(L, "height", !0);
        else {
          const _ = t(A, "width"),
            W = t(A, "padding-left"),
            Re = t(A, "padding-right"),
            k = t(A, "margin-left"),
            R = t(A, "margin-right"),
            V = A.getPropertyValue("box-sizing");
          if (V && V === "border-box") C = _ + k + R;
          else {
            const { clientWidth: U, offsetWidth: q } = L;
            C = _ + W + Re + k + R + (q - U);
          }
        }
        D && (L.style.transform = D),
          z && (L.style.webkitTransform = z),
          n.roundLengths && (C = Math.floor(C));
      } else
        (C = (s - (n.slidesPerView - 1) * g) / n.slidesPerView),
          n.roundLengths && (C = Math.floor(C)),
          c[P] && (c[P].style[e.getDirectionLabel("width")] = `${C}px`);
      c[P] && (c[P].swiperSlideSize = C),
        y.push(C),
        n.centeredSlides
          ? ((w = w + C / 2 + T / 2 + g),
            T === 0 && P !== 0 && (w = w - s / 2 - g),
            P === 0 && (w = w - s / 2 - g),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            j % n.slidesPerGroup === 0 && h.push(w),
            v.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (j - Math.min(e.params.slidesPerGroupSkip, j)) %
              e.params.slidesPerGroup ===
              0 && h.push(w),
            v.push(w),
            (w = w + C + g)),
        (e.virtualSize += C + g),
        (T = C),
        (j += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + S),
    o &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + g}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + g}px`),
    M && e.grid.updateWrapperSize(C, h),
    !n.centeredSlides)
  ) {
    const P = [];
    for (let L = 0; L < h.length; L += 1) {
      let A = h[L];
      n.roundLengths && (A = Math.floor(A)),
        h[L] <= e.virtualSize - s && P.push(A);
    }
    (h = P),
      Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
        h.push(e.virtualSize - s);
  }
  if (a && n.loop) {
    const P = y[0] + g;
    if (n.slidesPerGroup > 1) {
      const L = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        A = P * n.slidesPerGroup;
      for (let D = 0; D < L; D += 1) h.push(h[h.length - 1] + A);
    }
    for (let L = 0; L < e.virtual.slidesBefore + e.virtual.slidesAfter; L += 1)
      n.slidesPerGroup === 1 && h.push(h[h.length - 1] + P),
        v.push(v[v.length - 1] + P),
        (e.virtualSize += P);
  }
  if ((h.length === 0 && (h = [0]), g !== 0)) {
    const P =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((L, A) =>
      !n.cssMode || n.loop ? !0 : A !== c.length - 1
    ).forEach((L) => {
      L.style[P] = `${g}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let P = 0;
    y.forEach((A) => {
      P += A + (g || 0);
    }),
      (P -= g);
    const L = P - s;
    h = h.map((A) => (A <= 0 ? -x : A > L ? L + S : A));
  }
  if (n.centerInsufficientSlides) {
    let P = 0;
    if (
      (y.forEach((L) => {
        P += L + (g || 0);
      }),
      (P -= g),
      P < s)
    ) {
      const L = (s - P) / 2;
      h.forEach((A, D) => {
        h[D] = A - L;
      }),
        v.forEach((A, D) => {
          v[D] = A + L;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: h,
      slidesGrid: v,
      slidesSizesGrid: y,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Ji(r, "--swiper-centered-offset-before", `${-h[0]}px`),
      Ji(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`
      );
    const P = -e.snapGrid[0],
      L = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((A) => A + P)),
      (e.slidesGrid = e.slidesGrid.map((A) => A + L));
  }
  if (
    (d !== u && e.emit("slidesLengthChange"),
    h.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== m && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const P = `${n.containerModifierClass}backface-hidden`,
      L = e.el.classList.contains(P);
    d <= n.maxBackfaceHiddenSlides
      ? L || e.el.classList.add(P)
      : L && e.el.classList.remove(P);
  }
}
function $4(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const l = t.activeIndex + s;
        if (l > t.slides.length && !r) break;
        n.push(o(l));
      }
  else n.push(o(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const l = n[s].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function U4() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function H4(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e),
    r.forEach((a) => {
      a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < r.length; a += 1) {
    const u = r[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      h =
        (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      v = -(o - c),
      y = v + t.slidesSizesGrid[a],
      x = v >= 0 && v <= t.size - t.slidesSizesGrid[a];
    ((v >= 0 && v < t.size - 1) ||
      (y > 1 && y <= t.size) ||
      (v <= 0 && y >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(a),
      r[a].classList.add(n.slideVisibleClass)),
      x && r[a].classList.add(n.slideFullyVisibleClass),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -h : h);
  }
}
function W4(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: o, progressLoop: l } = t;
  const a = s,
    u = o;
  if (r === 0) (i = 0), (s = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (s = c || i <= 0), (o = d || i >= 1), c && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[c],
      v = t.slidesGrid[d],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      x = Math.abs(e);
    x >= h ? (l = (x - h) / y) : (l = (x + y - v) / y), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: l, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !a && t.emit("reachBeginning toEdge"),
    o && !u && t.emit("reachEnd toEdge"),
    ((a && !s) || (u && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const Ta = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function G4() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    l = (d) => lt(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let a, u, c;
  if (s)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${d}"]`));
    } else a = l(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((a = t.filter((d) => d.column === i)[0]),
        (c = t.filter((d) => d.column === i + 1)[0]),
        (u = t.filter((d) => d.column === i - 1)[0]))
      : (a = t[i]);
  a &&
    (o ||
      ((c = D4(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = L4(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((d) => {
      Ta(d, d === a, n.slideActiveClass),
        Ta(d, d === c, n.slideNextClass),
        Ta(d, d === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const ms = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Ea = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Bl = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        l = [o - t];
      l.push(...Array.from({ length: t }).map((a, u) => o + r + u)),
        e.slides.forEach((a, u) => {
          l.includes(a.column) && Ea(e, u);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= s + t; o += 1) {
        const l = ((o % n) + n) % n;
        (l < i || l > s) && Ea(e, l);
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(s + t, n - 1); o += 1)
        o !== i && (o > s || o < i) && Ea(e, o);
  };
function K4(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Y4(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: l } = t;
  let a = e,
    u;
  const c = (v) => {
    let y = v - t.virtual.slidesBefore;
    return (
      y < 0 && (y = t.virtual.slides.length + y),
      y >= t.virtual.slides.length && (y -= t.virtual.slides.length),
      y
    );
  };
  if ((typeof a > "u" && (a = K4(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const v = Math.min(i.slidesPerGroupSkip, a);
    u = v + Math.floor((a - v) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), a === s && !t.params.loop)) {
    u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (a === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let h;
  if (t.virtual && i.virtual.enabled && i.loop) h = c(a);
  else if (d) {
    const v = t.slides.filter((x) => x.column === a)[0];
    let y = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(y) && (y = Math.max(t.slides.indexOf(v), 0)),
      (h = Math.floor(y / i.grid.rows));
  } else if (t.slides[a]) {
    const v = t.slides[a].getAttribute("data-swiper-slide-index");
    v ? (h = parseInt(v, 10)) : (h = a);
  } else h = a;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: h,
    previousIndex: s,
    activeIndex: a,
  }),
    t.initialized && Bl(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== h && t.emit("realIndexChange"), t.emit("slideChange"));
}
function X4(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !i && l.matches && l.matches(`.${r.slideClass}, swiper-slide`) && (i = l);
    });
  let s = !1,
    o;
  if (i) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === i) {
        (s = !0), (o = l);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var q4 = {
  updateSize: F4,
  updateSlides: B4,
  updateAutoHeight: $4,
  updateSlidesOffset: U4,
  updateSlidesProgress: H4,
  updateProgress: W4,
  updateSlidesClasses: G4,
  updateActiveIndex: Y4,
  updateClickedSlide: X4,
};
function Q4(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = M4(s, e);
  return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0;
}
function Z4(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: o } = n;
  let l = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (l = r ? -e : e) : (a = e),
    i.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function J4() {
  return -this.snapGrid[0];
}
function e3() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function t3(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: o, wrapperEl: l } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const a = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if (
    (r && e > a ? (c = a) : r && e < u ? (c = u) : (c = e),
    s.updateProgress(c),
    o.cssMode)
  ) {
    const d = s.isHorizontal();
    if (t === 0) l[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return (
          Wg({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      l.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (h) {
              !s ||
                s.destroyed ||
                (h.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var n3 = {
  getTranslate: Q4,
  setTranslate: Z4,
  minTranslate: J4,
  maxTranslate: e3,
  translateTo: t3,
};
function r3(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Xg(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: o } = t;
  let l = r;
  if (
    (l || (s > o ? (l = "next") : s < o ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && s !== o)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      l === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function i3(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Xg({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function s3(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Xg({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var o3 = { setTransition: r3, transitionStart: i3, transitionEnd: s3 };
function a3(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: h,
    wrapperEl: v,
    enabled: y,
  } = s;
  if (
    (!y && !r && !i) ||
    s.destroyed ||
    (s.animating && l.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const x = Math.min(s.params.slidesPerGroupSkip, o);
  let S = x + Math.floor((o - x) / s.params.slidesPerGroup);
  S >= a.length && (S = a.length - 1);
  const p = -a[S];
  if (l.normalizeSlideIndex)
    for (let g = 0; g < u.length; g += 1) {
      const w = -Math.floor(p * 100),
        T = Math.floor(u[g] * 100),
        j = Math.floor(u[g + 1] * 100);
      typeof u[g + 1] < "u"
        ? w >= T && w < j - (j - T) / 2
          ? (o = g)
          : w >= T && w < j && (o = g + 1)
        : w >= T && (o = g);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (h
        ? p > s.translate && p > s.minTranslate()
        : p < s.translate && p < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        p > s.translate &&
        p > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(p);
  let m;
  if (
    (o > d ? (m = "next") : o < d ? (m = "prev") : (m = "reset"),
    (h && -p === s.translate) || (!h && p === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      l.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      l.effect !== "slide" && s.setTranslate(p),
      m !== "reset" && (s.transitionStart(n, m), s.transitionEnd(n, m)),
      !1
    );
  if (l.cssMode) {
    const g = s.isHorizontal(),
      w = h ? p : -p;
    if (t === 0) {
      const T = s.virtual && s.params.virtual.enabled;
      T &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        T && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[g ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (v[g ? "scrollLeft" : "scrollTop"] = w),
        T &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          Wg({ swiper: s, targetPosition: w, side: g ? "left" : "top" }), !0
        );
      v.scrollTo({ [g ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(p),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, m),
    t === 0
      ? s.transitionEnd(n, m)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (w) {
            !s ||
              s.destroyed ||
              (w.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, m)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function l3(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let l;
      if (s) {
        const h = o * i.params.grid.rows;
        l = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === h
        )[0].column;
      } else l = i.getSlideIndexByData(o);
      const a = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let d = a - l < c;
      if (
        (u && (d = d || l < Math.ceil(c / 2)),
        r && u && i.params.slidesPerView !== "auto" && !s && (d = !1),
        d)
      ) {
        const h = u
          ? l < i.activeIndex
            ? "prev"
            : "next"
          : l - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? l + 1 : l - a + 1,
          slideRealIndex: h === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const h = o * i.params.grid.rows;
        o = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === h
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, r);
    }),
    i
  );
}
function u3(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: o } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let l = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const a = r.activeIndex < s.slidesPerGroupSkip ? 1 : l,
    u = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !u && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function c3(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: u,
    } = r;
  if (!a || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = l ? r.translate : -r.translate;
  function h(p) {
    return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
  }
  const v = h(d),
    y = s.map((p) => h(p));
  let x = s[y.indexOf(v) - 1];
  if (typeof x > "u" && i.cssMode) {
    let p;
    s.forEach((m, g) => {
      v >= m && (p = g);
    }),
      typeof p < "u" && (x = s[p > 0 ? p - 1 : p]);
  }
  let S = 0;
  if (
    (typeof x < "u" &&
      ((S = o.indexOf(x)),
      S < 0 && (S = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((S = S - r.slidesPerViewDynamic("previous", !0) + 1),
        (S = Math.max(S, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const p =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(p, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(S, e, t, n);
      }),
      !0
    );
  return r.slideTo(S, e, t, n);
}
function d3(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function f3(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, s),
    l = o + Math.floor((s - o) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[l]) {
    const u = i.snapGrid[l],
      c = i.snapGrid[l + 1];
    a - u > (c - u) * r && (s += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[l - 1],
      c = i.snapGrid[l];
    a - u <= (c - u) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function p3() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              lt(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            _l(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            lt(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
          )),
          _l(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var h3 = {
  slideTo: a3,
  slideToLoop: l3,
  slideNext: u3,
  slidePrev: c3,
  slideReset: d3,
  slideToClosest: f3,
  slideToClickedSlide: p3,
};
function m3(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      lt(r, `.${n.slideClass}, swiper-slide`).forEach((d, h) => {
        d.setAttribute("data-swiper-slide-index", h);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (s ? n.grid.rows : 1),
    l = t.slides.length % o !== 0,
    a = s && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let d = 0; d < c; d += 1) {
        const h = t.isElement
          ? eo("swiper-slide", [n.slideBlankClass])
          : eo("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(h);
      }
    };
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = o - (t.slides.length % o);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      Js(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (a) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      Js(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function g3(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: d,
      slidesEl: h,
      params: v,
    } = a,
    { centeredSlides: y } = v;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && a.snapIndex < v.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = d),
      a.emit("loopFix");
    return;
  }
  let x = v.slidesPerView;
  x === "auto"
    ? (x = a.slidesPerViewDynamic())
    : ((x = Math.ceil(parseFloat(v.slidesPerView, 10))),
      y && x % 2 === 0 && (x = x + 1));
  const S = v.slidesPerGroupAuto ? x : v.slidesPerGroup;
  let p = S;
  p % S !== 0 && (p += S - (p % S)),
    (p += v.loopAdditionalSlides),
    (a.loopedSlides = p);
  const m = a.grid && v.grid && v.grid.rows > 1;
  u.length < x + p
    ? Js(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : m &&
      v.grid.fill === "row" &&
      Js(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const g = [],
    w = [];
  let T = a.activeIndex;
  typeof s > "u"
    ? (s = a.getSlideIndex(
        u.filter((D) => D.classList.contains(v.slideActiveClass))[0]
      ))
    : (T = s);
  const j = r === "next" || !r,
    M = r === "prev" || !r;
  let C = 0,
    b = 0;
  const P = m ? Math.ceil(u.length / v.grid.rows) : u.length,
    A = (m ? u[s].column : s) + (y && typeof i > "u" ? -x / 2 + 0.5 : 0);
  if (A < p) {
    C = Math.max(p - A, S);
    for (let D = 0; D < p - A; D += 1) {
      const z = D - Math.floor(D / P) * P;
      if (m) {
        const _ = P - z - 1;
        for (let W = u.length - 1; W >= 0; W -= 1)
          u[W].column === _ && g.push(W);
      } else g.push(P - z - 1);
    }
  } else if (A + x > P - p) {
    b = Math.max(A - (P - p * 2), S);
    for (let D = 0; D < b; D += 1) {
      const z = D - Math.floor(D / P) * P;
      m
        ? u.forEach((_, W) => {
            _.column === z && w.push(W);
          })
        : w.push(z);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    M &&
      g.forEach((D) => {
        (u[D].swiperLoopMoveDOM = !0),
          h.prepend(u[D]),
          (u[D].swiperLoopMoveDOM = !1);
      }),
    j &&
      w.forEach((D) => {
        (u[D].swiperLoopMoveDOM = !0),
          h.append(u[D]),
          (u[D].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    v.slidesPerView === "auto"
      ? a.updateSlides()
      : m &&
        ((g.length > 0 && M) || (w.length > 0 && j)) &&
        a.slides.forEach((D, z) => {
          a.grid.updateSlide(z, D, a.slides);
        }),
    v.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (g.length > 0 && M) {
      if (typeof t > "u") {
        const D = a.slidesGrid[T],
          _ = a.slidesGrid[T + C] - D;
        l
          ? a.setTranslate(a.translate - _)
          : (a.slideTo(T + Math.ceil(C), 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - _),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - _)));
      } else if (i) {
        const D = m ? g.length / v.grid.rows : g.length;
        a.slideTo(a.activeIndex + D, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (w.length > 0 && j)
      if (typeof t > "u") {
        const D = a.slidesGrid[T],
          _ = a.slidesGrid[T - b] - D;
        l
          ? a.setTranslate(a.translate - _)
          : (a.slideTo(T - b, 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - _),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - _)));
      } else {
        const D = m ? w.length / v.grid.rows : w.length;
        a.slideTo(a.activeIndex - D, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = d),
    a.controller && a.controller.control && !o)
  ) {
    const D = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((z) => {
          !z.destroyed &&
            z.params.loop &&
            z.loopFix({
              ...D,
              slideTo: z.params.slidesPerView === v.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...D,
          slideTo:
            a.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function v3() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var y3 = { loopCreate: m3, loopFix: g3, loopDestroy: v3 };
function x3(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function w3() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var S3 = { setGrabCursor: x3, unsetGrabCursor: w3 };
function T3(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Tt() || r === Ue()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Kf(e, t, n) {
  const r = Ue(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return s && (n <= o || n >= r.innerWidth - o)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function E3(e) {
  const t = this,
    n = Tt();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Kf(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: o, enabled: l } = t;
  if (
    !l ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let a = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(a)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "",
    c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (a = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    h = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (h ? T3(d, a) : a.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !a.closest(s.swipeHandler)) return;
  (o.currentX = r.pageX), (o.currentY = r.pageY);
  const v = o.currentX,
    y = o.currentY;
  if (!Kf(t, r, v)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = v),
    (o.startY = y),
    (i.touchStartTime = Pn()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let x = !0;
  a.matches(i.focusableElements) &&
    ((x = !1), a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== a &&
      n.activeElement.blur();
  const S = x && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || S) &&
    !a.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function C3(e) {
  const t = Tt(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: o, enabled: l } = n;
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (r.touchId !== null || a.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].filter((j) => j.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = a;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = u.pageX,
    d = u.pageY;
  if (a.preventedByNestedSwiper) {
    (s.startX = c), (s.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: c, startY: d, currentX: c, currentY: d }),
        (r.touchStartTime = Pn()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < s.startY && n.translate <= n.maxTranslate()) ||
        (d > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < s.startX && n.translate <= n.maxTranslate()) ||
      (c > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", a),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = c),
    (s.currentY = d);
  const h = s.currentX - s.startX,
    v = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(h ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let j;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : h * h + v * v >= 25 &&
        ((j = (Math.atan2(Math.abs(v), Math.abs(h)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? j > i.touchAngle
          : 90 - j > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let y = n.isHorizontal() ? h : v,
    x = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (o ? 1 : -1)), (x = Math.abs(x) * (o ? 1 : -1))),
    (s.diff = y),
    (y *= i.touchRatio),
    o && ((y = -y), (x = -x));
  const S = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = x > 0 ? "prev" : "next");
  const p = n.params.loop && !i.cssMode,
    m =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (p && m && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const j = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(j);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let g;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      S !== n.touchesDirection &&
      p &&
      m &&
      Math.abs(y) >= 1)
  ) {
    Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let w = !0,
    T = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (T = 0),
    y > 0
      ? (p &&
          m &&
          !g &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** T)))
      : y < 0 &&
        (p &&
          m &&
          !g &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** T))),
    w && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function P3(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((T) => T.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!o.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = Pn(),
    h = d - n.touchStartTime;
  if (t.allowClick) {
    const T = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((T && T[0]) || r.target, T),
      t.emit("tap click", r),
      h < 300 &&
        d - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = Pn()),
    _l(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if (
    (o.followFinger
      ? (v = a ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const y = v >= -t.maxTranslate() && !t.params.loop;
  let x = 0,
    S = t.slidesSizesGrid[0];
  for (
    let T = 0;
    T < u.length;
    T += T < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const j = T < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[T + j] < "u"
      ? (y || (v >= u[T] && v < u[T + j])) && ((x = T), (S = u[T + j] - u[T]))
      : (y || v >= u[T]) && ((x = T), (S = u[u.length - 1] - u[u.length - 2]));
  }
  let p = null,
    m = null;
  o.rewind &&
    (t.isBeginning
      ? (m =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (p = 0));
  const g = (v - u[x]) / S,
    w = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (h > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (g >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? p : x + w)
        : t.slideTo(x)),
      t.swipeDirection === "prev" &&
        (g > 1 - o.longSwipesRatio
          ? t.slideTo(x + w)
          : m !== null && g < 0 && Math.abs(g) > o.longSwipesRatio
          ? t.slideTo(m)
          : t.slideTo(x));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(x + w)
        : t.slideTo(x)
      : (t.swipeDirection === "next" && t.slideTo(p !== null ? p : x + w),
        t.swipeDirection === "prev" && t.slideTo(m !== null ? m : x));
  }
}
function Yf() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
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
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function j3(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function b3() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function k3(e) {
  const t = this;
  ms(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function M3() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const qg = (e, t) => {
  const n = Tt(),
    { params: r, el: i, wrapperEl: s, device: o } = e,
    l = !!r.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    i[a]("touchstart", e.onTouchStart, { passive: !1 }),
    i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && s[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Yf,
          !0
        )
      : e[u]("observerUpdate", Yf, !0),
    i[a]("load", e.onLoad, { capture: !0 });
};
function N3() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = E3.bind(e)),
    (e.onTouchMove = C3.bind(e)),
    (e.onTouchEnd = P3.bind(e)),
    (e.onDocumentTouchStart = M3.bind(e)),
    t.cssMode && (e.onScroll = b3.bind(e)),
    (e.onClick = j3.bind(e)),
    (e.onLoad = k3.bind(e)),
    qg(e, "on");
}
function L3() {
  qg(this, "off");
}
var D3 = { attachEvents: N3, detachEvents: L3 };
const Xf = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function A3() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const a = (o in s ? s[o] : void 0) || e.originalParams,
    u = Xf(e, r),
    c = Xf(e, a),
    d = e.params.grabCursor,
    h = a.grabCursor,
    v = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    d && !h ? e.unsetGrabCursor() : !d && h && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((g) => {
      if (typeof a[g] > "u") return;
      const w = r[g] && r[g].enabled,
        T = a[g] && a[g].enabled;
      w && !T && e[g].disable(), !w && T && e[g].enable();
    });
  const y = a.direction && a.direction !== r.direction,
    x = r.loop && (a.slidesPerView !== r.slidesPerView || y),
    S = r.loop;
  y && n && e.changeDirection(), Ve(e.params, a);
  const p = e.params.enabled,
    m = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    v && !p ? e.disable() : !v && p && e.enable(),
    (e.currentBreakpoint = o),
    e.emit("_beforeBreakpoint", a),
    n &&
      (x
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !S && m
        ? (e.loopCreate(t), e.updateSlides())
        : S && !m && e.loopDestroy()),
    e.emit("breakpoint", a);
}
function R3(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Ue(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: s * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: u } = o[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
      : u <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var O3 = { setBreakpoint: A3, getBreakpoint: R3 };
function V3(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function I3() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    o = V3(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...o), i.classList.add(...t), e.emitContainerClasses();
}
function z3() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var _3 = { addClasses: I3, removeClasses: z3 };
function F3() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var B3 = { checkOverflow: F3 },
  $l = {
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
    focusableElements: "input, select, option, textarea, button, video, label",
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
function $3(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      Ve(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      Ve(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Ve(t, r);
  };
}
const Ca = {
    eventsEmitter: _4,
    update: q4,
    translate: n3,
    transition: o3,
    slide: h3,
    loop: y3,
    grabCursor: S3,
    events: D3,
    breakpoints: O3,
    checkOverflow: B3,
    classes: _3,
  },
  Pa = {};
let mc = class ft {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Ve({}, n)),
      t && !n.el && (n.el = t);
    const o = Tt();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const h = Ve({}, n, { el: d });
          c.push(new ft(h));
        }),
        c
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = Kg()),
      (l.device = Yg({ userAgent: n.userAgent })),
      (l.browser = V4()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const a = {};
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: $3(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const u = Ve({}, $l, a);
    return (
      (l.params = Ve({}, u, Pa, n)),
      (l.originalParams = Ve({}, l.params)),
      (l.passedParams = Ve({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((c) => {
          l.on(c, l.params.on[c]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
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
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = lt(n, `.${r.slideClass}, swiper-slide`),
      s = to(i[0]);
    return to(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = lt(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: u,
      } = r;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
        h;
      for (let v = u + 1; v < s.length; v += 1)
        s[v] &&
          !h &&
          ((d += Math.ceil(s[v].swiperSlideSize)), (c += 1), d > a && (h = !0));
      for (let v = u - 1; v >= 0; v -= 1)
        s[v] &&
          !h &&
          ((d += s[v].swiperSlideSize), (c += 1), d > a && (h = !0));
    } else if (t === "current")
      for (let d = u + 1; d < s.length; d += 1)
        (n ? o[d] + l[d] - o[u] < a : o[d] - o[u] < a) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && ms(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(o.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : lt(r, i())[0];
    return (
      !o &&
        n.params.createElements &&
        ((o = eo("div", n.params.wrapperClass)),
        r.append(o),
        lt(r, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Ft(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Ft(r, "direction") === "rtl"),
        wrongRTL: Ft(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? ms(n, s)
          : s.addEventListener("load", (o) => {
              ms(n, o.target);
            });
      }),
      Bl(n),
      (n.initialized = !0),
      Bl(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: o, slides: l } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s.removeAttribute("style"),
          o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((a) => {
          r.off(a);
        }),
        t !== !1 && ((r.el.swiper = null), b4(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ve(Pa, t);
  }
  static get extendedDefaults() {
    return Pa;
  }
  static get defaults() {
    return $l;
  }
  static installModule(t) {
    ft.prototype.__modules__ || (ft.prototype.__modules__ = []);
    const n = ft.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => ft.installModule(n)), ft)
      : (ft.installModule(t), ft);
  }
};
Object.keys(Ca).forEach((e) => {
  Object.keys(Ca[e]).forEach((t) => {
    mc.prototype[t] = Ca[e][t];
  });
});
mc.use([I4, z4]);
const Qg = [
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
function Ln(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function or(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Ln(t[r]) && Ln(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : or(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Zg(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Jg(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function e0(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function t0(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function U3(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function H3(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a,
  } = e;
  const u = i.filter(
      (b) => b !== "children" && b !== "direction" && b !== "wrapperClass"
    ),
    {
      params: c,
      pagination: d,
      navigation: h,
      scrollbar: v,
      virtual: y,
      thumbs: x,
    } = t;
  let S, p, m, g, w, T, j, M;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (S = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (p = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (m = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      v &&
      !v.el &&
      (g = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      h &&
      !h.prevEl &&
      !h.nextEl &&
      (w = !0);
  const C = (b) => {
    t[b] &&
      (t[b].destroy(),
      b === "navigation"
        ? (t.isElement && (t[b].prevEl.remove(), t[b].nextEl.remove()),
          (c[b].prevEl = void 0),
          (c[b].nextEl = void 0),
          (t[b].prevEl = void 0),
          (t[b].nextEl = void 0))
        : (t.isElement && t[b].el.remove(),
          (c[b].el = void 0),
          (t[b].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !r.loop ? (T = !0) : !c.loop && r.loop ? (j = !0) : (M = !0)),
    u.forEach((b) => {
      if (Ln(c[b]) && Ln(r[b]))
        Object.assign(c[b], r[b]),
          (b === "navigation" || b === "pagination" || b === "scrollbar") &&
            "enabled" in r[b] &&
            !r[b].enabled &&
            C(b);
      else {
        const P = r[b];
        (P === !0 || P === !1) &&
        (b === "navigation" || b === "pagination" || b === "scrollbar")
          ? P === !1 && C(b)
          : (c[b] = r[b]);
      }
    }),
    u.includes("controller") &&
      !p &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") && n && y && c.virtual.enabled
      ? ((y.slides = n), y.update(!0))
      : i.includes("virtual") &&
        y &&
        c.virtual.enabled &&
        (n && (y.slides = n), y.update(!0)),
    i.includes("children") && n && c.loop && (M = !0),
    S && x.init() && x.update(!0),
    p && (t.controller.control = c.controller.control),
    m &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      d.init(),
      d.render(),
      d.update()),
    g &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    w &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      s && (c.navigation.nextEl = s),
      o && (c.navigation.prevEl = o),
      h.init(),
      h.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (T || M) && t.loopDestroy(),
    (j || M) && t.loopCreate(),
    t.update();
}
function W3(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  or(n, $l), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    o = Qg.map((a) => a.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((a) => {
      typeof e[a] > "u" ||
        (o.indexOf(a) >= 0
          ? Ln(e[a])
            ? ((n[a] = {}), (i[a] = {}), or(n[a], e[a]), or(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (s[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function G3(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: o,
    swiper: l,
  } = e;
  Zg(t) &&
    r &&
    i &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    Jg(t) &&
      s &&
      ((l.params.pagination.el = s), (l.originalParams.pagination.el = s)),
    e0(t) &&
      o &&
      ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(n);
}
function K3(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const o = (a) => {
    s.indexOf(a) < 0 && s.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      u = n.map(i);
    a.join("") !== u.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    Qg.filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (Ln(e[a]) && Ln(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a]);
            u.length !== c.length
              ? o(a)
              : (u.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a);
                }),
                c.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a);
                }));
          } else e[a] !== t[a] && o(a);
      }),
    s
  );
}
const Y3 = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function no() {
  return (
    (no = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    no.apply(this, arguments)
  );
}
function n0(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function r0(e) {
  const t = [];
  return (
    $.Children.toArray(e).forEach((n) => {
      n0(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          r0(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function X3(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    $.Children.toArray(e).forEach((r) => {
      if (n0(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = r0(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function q3(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let d = c;
      return (
        c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    l = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = l; c < a; c += 1) c >= s && c <= o && u.push(t[r(c)]);
  return u.map((c, d) =>
    $.cloneElement(c, {
      swiper: e,
      style: i,
      key: c.props.virtualIndex || c.key || `slide-${d}`,
    })
  );
}
function Xr(e, t) {
  return typeof window > "u" ? E.useEffect(e, t) : E.useLayoutEffect(e, t);
}
const qf = E.createContext(null),
  Q3 = E.createContext(null),
  gc = E.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: o,
        ...l
      } = e === void 0 ? {} : e,
      a = !1;
    const [u, c] = E.useState("swiper"),
      [d, h] = E.useState(null),
      [v, y] = E.useState(!1),
      x = E.useRef(!1),
      S = E.useRef(null),
      p = E.useRef(null),
      m = E.useRef(null),
      g = E.useRef(null),
      w = E.useRef(null),
      T = E.useRef(null),
      j = E.useRef(null),
      M = E.useRef(null),
      { params: C, passedParams: b, rest: P, events: L } = W3(l),
      { slides: A, slots: D } = X3(s),
      z = () => {
        y(!v);
      };
    Object.assign(C.on, {
      _containerClasses(R, V) {
        c(V);
      },
    });
    const _ = () => {
      Object.assign(C.on, L), (a = !0);
      const R = { ...C };
      if (
        (delete R.wrapperClass,
        (p.current = new mc(R)),
        p.current.virtual && p.current.params.virtual.enabled)
      ) {
        p.current.virtual.slides = A;
        const V = {
          cache: !1,
          slides: A,
          renderExternal: h,
          renderExternalUpdate: !1,
        };
        or(p.current.params.virtual, V),
          or(p.current.originalParams.virtual, V);
      }
    };
    S.current || _(), p.current && p.current.on("_beforeBreakpoint", z);
    const W = () => {
        a ||
          !L ||
          !p.current ||
          Object.keys(L).forEach((R) => {
            p.current.on(R, L[R]);
          });
      },
      Re = () => {
        !L ||
          !p.current ||
          Object.keys(L).forEach((R) => {
            p.current.off(R, L[R]);
          });
      };
    E.useEffect(() => () => {
      p.current && p.current.off("_beforeBreakpoint", z);
    }),
      E.useEffect(() => {
        !x.current &&
          p.current &&
          (p.current.emitSlidesClasses(), (x.current = !0));
      }),
      Xr(() => {
        if ((t && (t.current = S.current), !!S.current))
          return (
            p.current.destroyed && _(),
            G3(
              {
                el: S.current,
                nextEl: w.current,
                prevEl: T.current,
                paginationEl: j.current,
                scrollbarEl: M.current,
                swiper: p.current,
              },
              C
            ),
            o && !p.current.destroyed && o(p.current),
            () => {
              p.current && !p.current.destroyed && p.current.destroy(!0, !1);
            }
          );
      }, []),
      Xr(() => {
        W();
        const R = K3(b, m.current, A, g.current, (V) => V.key);
        return (
          (m.current = b),
          (g.current = A),
          R.length &&
            p.current &&
            !p.current.destroyed &&
            H3({
              swiper: p.current,
              slides: A,
              passedParams: b,
              changedParams: R,
              nextEl: w.current,
              prevEl: T.current,
              scrollbarEl: M.current,
              paginationEl: j.current,
            }),
          () => {
            Re();
          }
        );
      }),
      Xr(() => {
        Y3(p.current);
      }, [d]);
    function k() {
      return C.virtual
        ? q3(p.current, A, d)
        : A.map((R, V) =>
            $.cloneElement(R, { swiper: p.current, swiperSlideIndex: V })
          );
    }
    return $.createElement(
      r,
      no({ ref: S, className: t0(`${u}${n ? ` ${n}` : ""}`) }, P),
      $.createElement(
        Q3.Provider,
        { value: p.current },
        D["container-start"],
        $.createElement(
          i,
          { className: U3(C.wrapperClass) },
          D["wrapper-start"],
          k(),
          D["wrapper-end"]
        ),
        Zg(C) &&
          $.createElement(
            $.Fragment,
            null,
            $.createElement("div", { ref: T, className: "swiper-button-prev" }),
            $.createElement("div", { ref: w, className: "swiper-button-next" })
          ),
        e0(C) &&
          $.createElement("div", { ref: M, className: "swiper-scrollbar" }),
        Jg(C) &&
          $.createElement("div", { ref: j, className: "swiper-pagination" }),
        D["container-end"]
      )
    );
  });
gc.displayName = "Swiper";
const vc = E.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: o,
    lazy: l,
    virtualIndex: a,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const d = E.useRef(null),
    [h, v] = E.useState("swiper-slide"),
    [y, x] = E.useState(!1);
  function S(w, T, j) {
    T === d.current && v(j);
  }
  Xr(() => {
    if (
      (typeof u < "u" && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        h !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", S),
        () => {
          s && s.off("_slideClass", S);
        }
      );
    }
  }),
    Xr(() => {
      s && d.current && !s.destroyed && v(s.getSlideClasses(d.current));
    }, [s]);
  const p = {
      isActive: h.indexOf("swiper-slide-active") >= 0,
      isVisible: h.indexOf("swiper-slide-visible") >= 0,
      isPrev: h.indexOf("swiper-slide-prev") >= 0,
      isNext: h.indexOf("swiper-slide-next") >= 0,
    },
    m = () => (typeof r == "function" ? r(p) : r),
    g = () => {
      x(!0);
    };
  return $.createElement(
    n,
    no(
      {
        ref: d,
        className: t0(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: g,
      },
      c
    ),
    o &&
      $.createElement(
        qf.Provider,
        { value: p },
        $.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          m(),
          l &&
            !y &&
            $.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !o &&
      $.createElement(
        qf.Provider,
        { value: p },
        m(),
        l &&
          !y &&
          $.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
vc.displayName = "SwiperSlide";
function i0(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let s = lt(e.el, `.${r[i]}`)[0];
          s || ((s = eo("div", r[i])), (s.className = r[i]), e.el.append(s)),
            (n[i] = s),
            (t[i] = s);
        }
      }),
    n
  );
}
function Z3(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
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
    (t.navigation = { nextEl: null, prevEl: null });
  function s(y) {
    let x;
    return y &&
      typeof y == "string" &&
      t.isElement &&
      ((x = t.el.querySelector(y)), x)
      ? x
      : (y &&
          (typeof y == "string" && (x = [...document.querySelectorAll(y)]),
          t.params.uniqueNavElements &&
          typeof y == "string" &&
          x &&
          x.length > 1 &&
          t.el.querySelectorAll(y).length === 1
            ? (x = t.el.querySelector(y))
            : x && x.length === 1 && (x = x[0])),
        y && !x ? y : x);
  }
  function o(y, x) {
    const S = t.params.navigation;
    (y = ce(y)),
      y.forEach((p) => {
        p &&
          (p.classList[x ? "add" : "remove"](...S.disabledClass.split(" ")),
          p.tagName === "BUTTON" && (p.disabled = x),
          t.params.watchOverflow &&
            t.enabled &&
            p.classList[t.isLocked ? "add" : "remove"](S.lockClass));
      });
  }
  function l() {
    const { nextEl: y, prevEl: x } = t.navigation;
    if (t.params.loop) {
      o(x, !1), o(y, !1);
      return;
    }
    o(x, t.isBeginning && !t.params.rewind), o(y, t.isEnd && !t.params.rewind);
  }
  function a(y) {
    y.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function u(y) {
    y.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function c() {
    const y = t.params.navigation;
    if (
      ((t.params.navigation = i0(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(y.nextEl || y.prevEl))
    )
      return;
    let x = s(y.nextEl),
      S = s(y.prevEl);
    Object.assign(t.navigation, { nextEl: x, prevEl: S }),
      (x = ce(x)),
      (S = ce(S));
    const p = (m, g) => {
      m && m.addEventListener("click", g === "next" ? u : a),
        !t.enabled && m && m.classList.add(...y.lockClass.split(" "));
    };
    x.forEach((m) => p(m, "next")), S.forEach((m) => p(m, "prev"));
  }
  function d() {
    let { nextEl: y, prevEl: x } = t.navigation;
    (y = ce(y)), (x = ce(x));
    const S = (p, m) => {
      p.removeEventListener("click", m === "next" ? u : a),
        p.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    y.forEach((p) => S(p, "next")), x.forEach((p) => S(p, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? v() : (c(), l());
  }),
    r("toEdge fromEdge lock unlock", () => {
      l();
    }),
    r("destroy", () => {
      d();
    }),
    r("enable disable", () => {
      let { nextEl: y, prevEl: x } = t.navigation;
      if (((y = ce(y)), (x = ce(x)), t.enabled)) {
        l();
        return;
      }
      [...y, ...x]
        .filter((S) => !!S)
        .forEach((S) => S.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (y, x) => {
      let { nextEl: S, prevEl: p } = t.navigation;
      (S = ce(S)), (p = ce(p));
      const m = x.target;
      if (t.params.navigation.hideOnClick && !p.includes(m) && !S.includes(m)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === m || t.pagination.el.contains(m))
        )
          return;
        let g;
        S.length
          ? (g = S[0].classList.contains(t.params.navigation.hiddenClass))
          : p.length &&
            (g = p[0].classList.contains(t.params.navigation.hiddenClass)),
          i(g === !0 ? "navigationShow" : "navigationHide"),
          [...S, ...p]
            .filter((w) => !!w)
            .forEach((w) =>
              w.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const h = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        c(),
        l();
    },
    v = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        d();
    };
  Object.assign(t.navigation, {
    enable: h,
    disable: v,
    update: l,
    init: c,
    destroy: d,
  });
}
function Nr(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function s0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (p) => p,
      formatFractionTotal: (p) => p,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let o,
    l = 0;
  function a() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function u(p, m) {
    const { bulletActiveClass: g } = t.params.pagination;
    p &&
      ((p = p[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
      p &&
        (p.classList.add(`${g}-${m}`),
        (p = p[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
        p && p.classList.add(`${g}-${m}-${m}`)));
  }
  function c(p) {
    const m = p.target.closest(Nr(t.params.pagination.bulletClass));
    if (!m) return;
    p.preventDefault();
    const g = to(m) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === g) return;
      t.slideToLoop(g);
    } else t.slideTo(g);
  }
  function d() {
    const p = t.rtl,
      m = t.params.pagination;
    if (a()) return;
    let g = t.pagination.el;
    g = ce(g);
    let w, T;
    const j =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      M = t.params.loop
        ? Math.ceil(j / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((T = t.previousRealIndex || 0),
          (w =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((w = t.snapIndex), (T = t.previousSnapIndex))
        : ((T = t.previousIndex || 0), (w = t.activeIndex || 0)),
      m.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const C = t.pagination.bullets;
      let b, P, L;
      if (
        (m.dynamicBullets &&
          ((o = Fl(C[0], t.isHorizontal() ? "width" : "height", !0)),
          g.forEach((A) => {
            A.style[t.isHorizontal() ? "width" : "height"] = `${
              o * (m.dynamicMainBullets + 4)
            }px`;
          }),
          m.dynamicMainBullets > 1 &&
            T !== void 0 &&
            ((l += w - (T || 0)),
            l > m.dynamicMainBullets - 1
              ? (l = m.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          (b = Math.max(w - l, 0)),
          (P = b + (Math.min(C.length, m.dynamicMainBullets) - 1)),
          (L = (P + b) / 2)),
        C.forEach((A) => {
          const D = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (z) => `${m.bulletActiveClass}${z}`
            ),
          ]
            .map((z) =>
              typeof z == "string" && z.includes(" ") ? z.split(" ") : z
            )
            .flat();
          A.classList.remove(...D);
        }),
        g.length > 1)
      )
        C.forEach((A) => {
          const D = to(A);
          D === w
            ? A.classList.add(...m.bulletActiveClass.split(" "))
            : t.isElement && A.setAttribute("part", "bullet"),
            m.dynamicBullets &&
              (D >= b &&
                D <= P &&
                A.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),
              D === b && u(A, "prev"),
              D === P && u(A, "next"));
        });
      else {
        const A = C[w];
        if (
          (A && A.classList.add(...m.bulletActiveClass.split(" ")),
          t.isElement &&
            C.forEach((D, z) => {
              D.setAttribute("part", z === w ? "bullet-active" : "bullet");
            }),
          m.dynamicBullets)
        ) {
          const D = C[b],
            z = C[P];
          for (let _ = b; _ <= P; _ += 1)
            C[_] &&
              C[_].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          u(D, "prev"), u(z, "next");
        }
      }
      if (m.dynamicBullets) {
        const A = Math.min(C.length, m.dynamicMainBullets + 4),
          D = (o * A - o) / 2 - L * o,
          z = p ? "right" : "left";
        C.forEach((_) => {
          _.style[t.isHorizontal() ? z : "top"] = `${D}px`;
        });
      }
    }
    g.forEach((C, b) => {
      if (
        (m.type === "fraction" &&
          (C.querySelectorAll(Nr(m.currentClass)).forEach((P) => {
            P.textContent = m.formatFractionCurrent(w + 1);
          }),
          C.querySelectorAll(Nr(m.totalClass)).forEach((P) => {
            P.textContent = m.formatFractionTotal(M);
          })),
        m.type === "progressbar")
      ) {
        let P;
        m.progressbarOpposite
          ? (P = t.isHorizontal() ? "vertical" : "horizontal")
          : (P = t.isHorizontal() ? "horizontal" : "vertical");
        const L = (w + 1) / M;
        let A = 1,
          D = 1;
        P === "horizontal" ? (A = L) : (D = L),
          C.querySelectorAll(Nr(m.progressbarFillClass)).forEach((z) => {
            (z.style.transform = `translate3d(0,0,0) scaleX(${A}) scaleY(${D})`),
              (z.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      m.type === "custom" && m.renderCustom
        ? ((C.innerHTML = m.renderCustom(t, w + 1, M)),
          b === 0 && i("paginationRender", C))
        : (b === 0 && i("paginationRender", C), i("paginationUpdate", C)),
        t.params.watchOverflow &&
          t.enabled &&
          C.classList[t.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function h() {
    const p = t.params.pagination;
    if (a()) return;
    const m =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let g = t.pagination.el;
    g = ce(g);
    let w = "";
    if (p.type === "bullets") {
      let T = t.params.loop
        ? Math.ceil(m / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && T > m && (T = m);
      for (let j = 0; j < T; j += 1)
        p.renderBullet
          ? (w += p.renderBullet.call(t, j, p.bulletClass))
          : (w += `<${p.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${p.bulletClass}"></${p.bulletElement}>`);
    }
    p.type === "fraction" &&
      (p.renderFraction
        ? (w = p.renderFraction.call(t, p.currentClass, p.totalClass))
        : (w = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`)),
      p.type === "progressbar" &&
        (p.renderProgressbar
          ? (w = p.renderProgressbar.call(t, p.progressbarFillClass))
          : (w = `<span class="${p.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      g.forEach((T) => {
        p.type !== "custom" && (T.innerHTML = w || ""),
          p.type === "bullets" &&
            t.pagination.bullets.push(...T.querySelectorAll(Nr(p.bulletClass)));
      }),
      p.type !== "custom" && i("paginationRender", g[0]);
  }
  function v() {
    t.params.pagination = i0(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const p = t.params.pagination;
    if (!p.el) return;
    let m;
    typeof p.el == "string" && t.isElement && (m = t.el.querySelector(p.el)),
      !m &&
        typeof p.el == "string" &&
        (m = [...document.querySelectorAll(p.el)]),
      m || (m = p.el),
      !(!m || m.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof p.el == "string" &&
          Array.isArray(m) &&
          m.length > 1 &&
          ((m = [...t.el.querySelectorAll(p.el)]),
          m.length > 1 &&
            (m = m.filter((g) => Gg(g, ".swiper")[0] === t.el)[0])),
        Array.isArray(m) && m.length === 1 && (m = m[0]),
        Object.assign(t.pagination, { el: m }),
        (m = ce(m)),
        m.forEach((g) => {
          p.type === "bullets" &&
            p.clickable &&
            g.classList.add(...(p.clickableClass || "").split(" ")),
            g.classList.add(p.modifierClass + p.type),
            g.classList.add(
              t.isHorizontal() ? p.horizontalClass : p.verticalClass
            ),
            p.type === "bullets" &&
              p.dynamicBullets &&
              (g.classList.add(`${p.modifierClass}${p.type}-dynamic`),
              (l = 0),
              p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)),
            p.type === "progressbar" &&
              p.progressbarOpposite &&
              g.classList.add(p.progressbarOppositeClass),
            p.clickable && g.addEventListener("click", c),
            t.enabled || g.classList.add(p.lockClass);
        }));
  }
  function y() {
    const p = t.params.pagination;
    if (a()) return;
    let m = t.pagination.el;
    m &&
      ((m = ce(m)),
      m.forEach((g) => {
        g.classList.remove(p.hiddenClass),
          g.classList.remove(p.modifierClass + p.type),
          g.classList.remove(
            t.isHorizontal() ? p.horizontalClass : p.verticalClass
          ),
          p.clickable &&
            (g.classList.remove(...(p.clickableClass || "").split(" ")),
            g.removeEventListener("click", c));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((g) =>
          g.classList.remove(...p.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const p = t.params.pagination;
    let { el: m } = t.pagination;
    (m = ce(m)),
      m.forEach((g) => {
        g.classList.remove(p.horizontalClass, p.verticalClass),
          g.classList.add(
            t.isHorizontal() ? p.horizontalClass : p.verticalClass
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? S() : (v(), h(), d());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && d();
    }),
    r("snapIndexChange", () => {
      d();
    }),
    r("snapGridLengthChange", () => {
      h(), d();
    }),
    r("destroy", () => {
      y();
    }),
    r("enable disable", () => {
      let { el: p } = t.pagination;
      p &&
        ((p = ce(p)),
        p.forEach((m) =>
          m.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      d();
    }),
    r("click", (p, m) => {
      const g = m.target,
        w = ce(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        w &&
        w.length > 0 &&
        !g.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && g === t.navigation.nextEl) ||
            (t.navigation.prevEl && g === t.navigation.prevEl))
        )
          return;
        const T = w[0].classList.contains(t.params.pagination.hiddenClass);
        i(T === !0 ? "paginationShow" : "paginationHide"),
          w.forEach((j) => j.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const x = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: p } = t.pagination;
      p &&
        ((p = ce(p)),
        p.forEach((m) =>
          m.classList.remove(t.params.pagination.paginationDisabledClass)
        )),
        v(),
        h(),
        d();
    },
    S = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: p } = t.pagination;
      p &&
        ((p = ce(p)),
        p.forEach((m) =>
          m.classList.add(t.params.pagination.paginationDisabledClass)
        )),
        y();
    };
  Object.assign(t.pagination, {
    enable: x,
    disable: S,
    render: h,
    update: d,
    init: v,
    destroy: y,
  });
}
function J3(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: s } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
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
  let o,
    l,
    a = s && s.autoplay ? s.autoplay.delay : 3e3,
    u = s && s.autoplay ? s.autoplay.delay : 3e3,
    c,
    d = new Date().getTime(),
    h,
    v,
    y,
    x,
    S,
    p,
    m;
  function g(k) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (k.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", g), !m && P()));
  }
  const w = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (h = !0) : h && ((u = c), (h = !1));
      const k = t.autoplay.paused ? c : d + u - new Date().getTime();
      (t.autoplay.timeLeft = k),
        i("autoplayTimeLeft", k, k / a),
        (l = requestAnimationFrame(() => {
          w();
        }));
    },
    T = () => {
      let k;
      return (
        t.virtual && t.params.virtual.enabled
          ? (k = t.slides.filter((V) =>
              V.classList.contains("swiper-slide-active")
            )[0])
          : (k = t.slides[t.activeIndex]),
        k ? parseInt(k.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    j = (k) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(l), w();
      let R = typeof k > "u" ? t.params.autoplay.delay : k;
      (a = t.params.autoplay.delay), (u = t.params.autoplay.delay);
      const V = T();
      !Number.isNaN(V) &&
        V > 0 &&
        typeof k > "u" &&
        ((R = V), (a = V), (u = V)),
        (c = R);
      const U = t.params.speed,
        q = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(U, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, U, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(U, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, U, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                j();
              })));
        };
      return (
        R > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              q();
            }, R)))
          : requestAnimationFrame(() => {
              q();
            }),
        R
      );
    },
    M = () => {
      (d = new Date().getTime()),
        (t.autoplay.running = !0),
        j(),
        i("autoplayStart");
    },
    C = () => {
      (t.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(l),
        i("autoplayStop");
    },
    b = (k, R) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(o), k || (p = !0);
      const V = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", g)
            : P();
      };
      if (((t.autoplay.paused = !0), R)) {
        S && (c = t.params.autoplay.delay), (S = !1), V();
        return;
      }
      (c = (c || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), V());
    },
    P = () => {
      (t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        p ? ((p = !1), j(c)) : j(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    L = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const k = Tt();
      k.visibilityState === "hidden" && ((p = !0), b(!0)),
        k.visibilityState === "visible" && P();
    },
    A = (k) => {
      k.pointerType === "mouse" &&
        ((p = !0), (m = !0), !(t.animating || t.autoplay.paused) && b(!0));
    },
    D = (k) => {
      k.pointerType === "mouse" && ((m = !1), t.autoplay.paused && P());
    },
    z = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", A),
        t.el.addEventListener("pointerleave", D));
    },
    _ = () => {
      t.el.removeEventListener("pointerenter", A),
        t.el.removeEventListener("pointerleave", D);
    },
    W = () => {
      Tt().addEventListener("visibilitychange", L);
    },
    Re = () => {
      Tt().removeEventListener("visibilitychange", L);
    };
  r("init", () => {
    t.params.autoplay.enabled && (z(), W(), M());
  }),
    r("destroy", () => {
      _(), Re(), t.autoplay.running && C();
    }),
    r("_freeModeStaticRelease", () => {
      (y || p) && P();
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? C() : b(!0, !0);
    }),
    r("beforeTransitionStart", (k, R, V) => {
      t.destroyed ||
        !t.autoplay.running ||
        (V || !t.params.autoplay.disableOnInteraction ? b(!0, !0) : C());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          C();
          return;
        }
        (v = !0),
          (y = !1),
          (p = !1),
          (x = setTimeout(() => {
            (p = !0), (y = !0), b(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !v)) {
        if (
          (clearTimeout(x),
          clearTimeout(o),
          t.params.autoplay.disableOnInteraction)
        ) {
          (y = !1), (v = !1);
          return;
        }
        y && t.params.cssMode && P(), (y = !1), (v = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (S = !0);
    }),
    Object.assign(t.autoplay, { start: M, stop: C, pause: b, resume: P });
}
function o0(e) {
  let { swiper: t, extendParams: n, emit: r, once: i } = e;
  n({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function s() {
    if (t.params.cssMode) return;
    const a = t.getTranslate();
    t.setTranslate(a),
      t.setTransition(0),
      (t.touchEventsData.velocities.length = 0),
      t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
  }
  function o() {
    if (t.params.cssMode) return;
    const { touchEventsData: a, touches: u } = t;
    a.velocities.length === 0 &&
      a.velocities.push({
        position: u[t.isHorizontal() ? "startX" : "startY"],
        time: a.touchStartTime,
      }),
      a.velocities.push({
        position: u[t.isHorizontal() ? "currentX" : "currentY"],
        time: Pn(),
      });
  }
  function l(a) {
    let { currentPos: u } = a;
    if (t.params.cssMode) return;
    const {
        params: c,
        wrapperEl: d,
        rtlTranslate: h,
        snapGrid: v,
        touchEventsData: y,
      } = t,
      S = Pn() - y.touchStartTime;
    if (u < -t.minTranslate()) {
      t.slideTo(t.activeIndex);
      return;
    }
    if (u > -t.maxTranslate()) {
      t.slides.length < v.length
        ? t.slideTo(v.length - 1)
        : t.slideTo(t.slides.length - 1);
      return;
    }
    if (c.freeMode.momentum) {
      if (y.velocities.length > 1) {
        const C = y.velocities.pop(),
          b = y.velocities.pop(),
          P = C.position - b.position,
          L = C.time - b.time;
        (t.velocity = P / L),
          (t.velocity /= 2),
          Math.abs(t.velocity) < c.freeMode.minimumVelocity && (t.velocity = 0),
          (L > 150 || Pn() - C.time > 300) && (t.velocity = 0);
      } else t.velocity = 0;
      (t.velocity *= c.freeMode.momentumVelocityRatio),
        (y.velocities.length = 0);
      let p = 1e3 * c.freeMode.momentumRatio;
      const m = t.velocity * p;
      let g = t.translate + m;
      h && (g = -g);
      let w = !1,
        T;
      const j = Math.abs(t.velocity) * 20 * c.freeMode.momentumBounceRatio;
      let M;
      if (g < t.maxTranslate())
        c.freeMode.momentumBounce
          ? (g + t.maxTranslate() < -j && (g = t.maxTranslate() - j),
            (T = t.maxTranslate()),
            (w = !0),
            (y.allowMomentumBounce = !0))
          : (g = t.maxTranslate()),
          c.loop && c.centeredSlides && (M = !0);
      else if (g > t.minTranslate())
        c.freeMode.momentumBounce
          ? (g - t.minTranslate() > j && (g = t.minTranslate() + j),
            (T = t.minTranslate()),
            (w = !0),
            (y.allowMomentumBounce = !0))
          : (g = t.minTranslate()),
          c.loop && c.centeredSlides && (M = !0);
      else if (c.freeMode.sticky) {
        let C;
        for (let b = 0; b < v.length; b += 1)
          if (v[b] > -g) {
            C = b;
            break;
          }
        Math.abs(v[C] - g) < Math.abs(v[C - 1] - g) ||
        t.swipeDirection === "next"
          ? (g = v[C])
          : (g = v[C - 1]),
          (g = -g);
      }
      if (
        (M &&
          i("transitionEnd", () => {
            t.loopFix();
          }),
        t.velocity !== 0)
      ) {
        if (
          (h
            ? (p = Math.abs((-g - t.translate) / t.velocity))
            : (p = Math.abs((g - t.translate) / t.velocity)),
          c.freeMode.sticky)
        ) {
          const C = Math.abs((h ? -g : g) - t.translate),
            b = t.slidesSizesGrid[t.activeIndex];
          C < b
            ? (p = c.speed)
            : C < 2 * b
            ? (p = c.speed * 1.5)
            : (p = c.speed * 2.5);
        }
      } else if (c.freeMode.sticky) {
        t.slideToClosest();
        return;
      }
      c.freeMode.momentumBounce && w
        ? (t.updateProgress(T),
          t.setTransition(p),
          t.setTranslate(g),
          t.transitionStart(!0, t.swipeDirection),
          (t.animating = !0),
          ya(d, () => {
            !t ||
              t.destroyed ||
              !y.allowMomentumBounce ||
              (r("momentumBounce"),
              t.setTransition(c.speed),
              setTimeout(() => {
                t.setTranslate(T),
                  ya(d, () => {
                    !t || t.destroyed || t.transitionEnd();
                  });
              }, 0));
          }))
        : t.velocity
        ? (r("_freeModeNoMomentumRelease"),
          t.updateProgress(g),
          t.setTransition(p),
          t.setTranslate(g),
          t.transitionStart(!0, t.swipeDirection),
          t.animating ||
            ((t.animating = !0),
            ya(d, () => {
              !t || t.destroyed || t.transitionEnd();
            })))
        : t.updateProgress(g),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    } else if (c.freeMode.sticky) {
      t.slideToClosest();
      return;
    } else c.freeMode && r("_freeModeNoMomentumRelease");
    (!c.freeMode.momentum || S >= c.longSwipesMs) &&
      (r("_freeModeStaticRelease"),
      t.updateProgress(),
      t.updateActiveIndex(),
      t.updateSlidesClasses());
  }
  Object.assign(t, {
    freeMode: { onTouchStart: s, onTouchMove: o, onTouchEnd: l },
  });
}
function e5(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M241.063 54.406c-2.31.008-4.61.032-6.907.094-1.805.05-3.61.106-5.406.188-8.814 1.567-12.884 5.426-15.094 9.843-2.435 4.87-2.34 11.423.375 17.25 2.717 5.83 7.7 10.596 14.657 12.376 6.958 1.78 16.536.86 29.125-7.187l10.063 15.75c-15.818 10.11-31.124 12.777-43.813 9.53-12.688-3.247-22.103-12.123-26.968-22.563-4.584-9.836-5.426-21.376-1.03-31.624-42.917 6.94-81.777 23.398-111.626 46.562-9.81 10.688-10.77 23.11-6.47 31.594 4.83 9.526 16.21 16.48 38.97 9.28l5.656 17.813c-28.58 9.04-52.137-.588-61.28-18.625-2.23-4.397-3.592-9.156-4.127-14.063-4.814 5.712-9.16 11.658-13 17.844l.126.06c-8.614 19.616-8.81 33.203-5.376 42.032 3.436 8.83 10.635 14.44 21.72 17.532 22.168 6.18 58.065-1.277 83.343-20.156 10.82-8.08 21.077-27.677 21.97-42.875.445-7.6-1.165-13.604-4.345-17.438-3.18-3.834-8.272-6.703-18.813-6.594l-.187-18.686c14.487-.15 26.25 4.754 33.375 13.344 7.124 8.59 9.26 19.652 8.625 30.468-1.27 21.633-12.595 44.172-29.438 56.75-29.876 22.314-69.336 31.606-99.53 23.188-13.988-3.9-26.37-12.386-32.75-25.53-9.546 45.446 4.323 87.66 30.718 116.874 3.45 3.82 7.122 7.43 10.97 10.78-2.754-7.887-4.016-16.1-3.72-24.093.53-14.325 6.082-28.346 17.22-38.03 9.134-7.946 21.752-12.53 36.843-12.5 1.006 0 2.034.018 3.062.06 2.35.1 4.763.304 7.22.626l-2.44 18.532c-15.588-2.048-25.705 1.522-32.436 7.375-6.73 5.854-10.443 14.614-10.813 24.625-.74 20.024 12.07 43.406 39.69 50.188l-.032.188c27.192 5.19 57.536.372 88-18.22.018-.012.043-.017.062-.03 6.34-4.45 9.755-8.808 11.438-12.563 1.985-4.432 1.943-8.292.53-12.438-2.824-8.29-12.94-16.812-22.218-19.187-15.002-3.84-24.532 1.436-29 7.72-4.468 6.28-4.74 12.45 2.156 17.81l-11.47 14.75c-14.187-11.033-15.092-30.487-5.905-43.405 6.892-9.688 18.985-16.326 33.564-16.75.607-.018 1.228-.036 1.844-.03 4.306.03 8.79.622 13.437 1.81 15.505 3.97 29.84 15.277 35.28 31.25 1.416 4.155 2.09 8.69 1.876 13.314 16.71-8.538 34.332-16.12 52.282-21.814 30.156-13.78 43.23-37.938 42.72-58.28-.515-20.493-13.187-37.74-42.376-40.626l1.844-18.594c36.666 3.626 58.462 29.848 59.188 58.75.422 16.84-5.754 34.363-18.188 49.28 16.072-1.8 32.044-1.495 47.53 1.627-3.152-6.472-4.68-13.478-4.467-20.438.677-22.036 19.42-42.593 48.875-42.906 1.963-.022 3.974.053 6.03.218l-1.5 18.625c-24.927-1.998-34.3 11.086-34.718 24.656-.412 13.42 8.545 28.442 34.22 30.436 28.3.25 48.588-15.098 58.53-37.906 13.31-30.536 6.997-76.317-34.844-118.188-.792-.793-1.578-1.593-2.375-2.375-.444 3.792-1.424 7.443-2.842 10.844-7.25 17.39-24.233 29.128-41.875 32.407-24.335 4.522-44.29-5.347-53.5-20.406-9.21-15.057-6.792-36.35 9.78-47.56l10.47 15.5c-8.913 6.028-9.28 14.19-4.313 22.31 4.967 8.122 16.17 15.156 34.156 11.814 11.306-2.102 23.896-11.33 28.03-21.25 2.07-4.96 2.47-9.862.408-15.47-1.675-4.555-5.187-9.764-11.72-15.25l-.187-.155c-27.316-20.587-56.338-35.393-85.75-45.157.018.032.045.06.063.093 6.684 12.22 7.18 26.082 3.063 38.344-8.233 24.525-34.07 43.848-66.032 42.78-6.948-.23-13.56 3.12-19.186 9.657-5.627 6.537-9.735 16.113-10.688 26.313-1.905 20.4 6.923 42.886 41.344 54L277 258.28c-41.083-13.264-56.83-45.546-54.22-73.5 1.307-13.975 6.706-26.962 15.157-36.78 8.452-9.818 20.475-16.603 33.97-16.156 24.04.802 42.323-14.084 47.687-30.063 2.682-7.988 2.335-15.937-1.75-23.405-3.968-7.252-11.83-14.423-25.906-19.656-17.114-2.967-34.16-4.367-50.875-4.314zM342.28 306.344c-41.915 3.41-87.366 23.4-125.28 46.562-55.98 34.198-114.89 26.733-156.688-4.28 16.444 58.844 74.712 70.788 135.5 55.905 6.083-2.285 12.06-6.538 17.157-12.03 7.057-7.607 12.17-17.47 13.78-25.625l18.344 3.625c-2.445 12.383-9.078 24.666-18.406 34.72-8.95 9.645-20.61 17.35-34.094 19.374-6.766 15.07-12.334 29.68-14.594 39.906-3.55 16.06 14.206 22.225 22.156 6.03 19.022-38.743 45.87-73.23 79.406-102.967 26.064-17.153 48.406-38.303 62.72-61.22z",
        },
        child: [],
      },
    ],
  })(e);
}
function t5(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M301.486 20.37l-33.19 134.755 15.306 49.895 43.55-103.81-25.666-80.84zM161.324 43.46l2.03 110.69 90.68 36.516-92.71-147.207zm180.358 126.73l-29.532 40.572 85.268-39.008-55.736-1.563zm-99.346 39.134c-59.628 41.982-124.36 74.982-199.207 81.297-13.185 1.113-21.704 8.3-26.302 15.185-13.788 20.652 8.285 51.02 54.332 33.37-55.518 33.324-8.274 81.184 25.113 43.495 34.24-38.648 74.95-74.53 117.74-91.58l12.696-28.235-32.81 6.272 48.436-59.803zm59.62 21.973l120.356 61.736-8.443-53.13-111.913-8.606zm-19.214 25.398l5.78 34.688-40.055-13.627c70.405 49.457 118.18 111.73 161.883 190.79 22.65 40.976 71.903 6.46 34.275-34.278 41.4 33.974 78.094-24.99 40.883-40.883-63.653-27.187-118.033-62.682-150.73-109.434h-.003l-52.033-27.255zm-53.697 46.844v.003l.002-.004h-.002zm0 .003l-60.248 79.27 46.773-10.303 13.475-68.967zm18.963.934l18.996 118.392 36.414-19.62-55.41-98.773z",
        },
        child: [],
      },
    ],
  })(e);
}
function n5(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M246.752 23.084c-11.678-.205-23.032 4.26-30.952 15.185-29.264 40.35-39.476 78.655-44.385 111.545-4.514 30.235-13.507 59.72-30.952 87.02-31.793 49.747-65.857 124.744-73.587 167.612-5.864 32.387 17.908 42.053 32.705 7.008 20.245-47.94 65.492-125.768 122.06-103.955 51.25 19.76 8.924 122.165-22.193 152.43-25.11 24.424-7.202 51.466 23.944 22.192 33.048-31.062 78.602-92.256 94.612-147.172 6.233-21.378 15.79-43.776 34.458-54.315 39.813-22.477 81.826-58.99 98.115-133.156 10.9-49.632-50.517-70.425-85.266-37.378-5.303-50.398-46.487-62.34-76.51-35.624 10.073-27.63-16.357-50.942-42.048-51.394z",
        },
        child: [],
      },
    ],
  })(e);
}
function r5(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7C11.4872 7 10.9925 7.07719 10.5269 7.21995C11.3954 7.61175 12 8.48527 12 9.5C12 10.8807 10.8807 12 9.5 12C8.48527 12 7.61175 11.3954 7.22057 10.5268C7.07719 10.9925 7 11.4872 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z",
        },
        child: [],
      },
    ],
  })(e);
}
const i5 = () => {
    const e = [
      { id: 1, name: "Cardiology", icon: f.jsx(_t, {}) },
      { id: 2, name: "orthopedic", icon: f.jsx(t5, {}) },
      { id: 3, name: "dentist", icon: f.jsx(n5, {}) },
      { id: 4, name: "neurology", icon: f.jsx(e5, {}) },
      { id: 5, name: "urology", icon: f.jsx(_t, {}) },
      { id: 6, name: "ophthalmology", icon: f.jsx(r5, {}) },
      { id: 7, name: "Cardiology", icon: f.jsx(S4, {}) },
      { id: 8, name: "Co-vid", icon: f.jsx(E4, {}) },
      { id: 9, name: "Cardiology", icon: f.jsx(_t, {}) },
      { id: 10, name: "Cardiology", icon: f.jsx(_t, {}) },
    ];
    return f.jsx("section", {
      className: "py-[80px]",
      children: f.jsxs("div", {
        className: "w-full h-full container mx-auto",
        children: [
          f.jsxs("div", {
            className: "text-center py-3 px-4 ",
            children: [
              f.jsxs("h1", {
                className: "h1",
                children: [
                  "Personalized ",
                  f.jsx("span", {
                    className: "text-red-600/80",
                    children: "Patient",
                  }),
                  " Care Services.",
                ],
              }),
              f.jsx("hr", { className: "max-w-[80%] m-auto" }),
            ],
          }),
          f.jsxs("div", {
            children: [
              " ",
              f.jsx(gc, {
                breakpoints: {
                  320: { slidesPerView: 2, spaceBetween: 15 },
                  640: { slidesPerView: 4, spaceBetween: 15 },
                },
                freeMode: !0,
                grabCursor: !0,
                pagination: { clickable: !0 },
                autoplay: !0,
                modules: [o0, s0, J3],
                className: "h-full container m-auto",
                children: f.jsx("div", {
                  className: "",
                  children: e.map((t) =>
                    f.jsx(
                      vc,
                      {
                        className:
                          "flex justify-center gap-x-5 lg:gap-[100px] p-5 items-center container m-auto",
                        children: f.jsxs("div", {
                          className: `border-[0.1px] border-gray-500/20 h-max rounded-lg px-2 py-4 flex-1 flex flex-col  items-center sm:gap-x-6 lg:gap-y-6 group\r
            hover:border-blue-500/60 transition-all duration-300 group`,
                          children: [
                            f.jsx("div", {
                              className:
                                "text-[60px] text-red-500 group-hover:text-blue-500 transition-all duration-500 ease-linear",
                              children: t.icon,
                            }),
                            f.jsx("div", {
                              className:
                                "text-base lg:text-2xl  capitalize break-words break-all",
                              children: t.name,
                            }),
                          ],
                        }),
                      },
                      t.id
                    )
                  ),
                }),
              }),
            ],
          }),
          f.jsx("div", {
            className: "text-center m-9",
            children: f.jsxs("a", {
              href: "/doctors",
              children: [
                " ",
                f.jsx("button", { className: "btn", children: "Show Me More" }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  s5 = () => {
    const e = {
      initial: { x: 0 },
      animate: {
        x: "-100%",
        transition: {
          delay: 1.5,
          duration: 90,
          repeat: 1 / 0,
          repeatType: "mirror",
          repeatDelay: 0.2,
        },
      },
    };
    return f.jsx("div", {
      className:
        " w-full h-fit py-2 px-[10px]text-blue-500/55 bg-blue-400/10 overflow-hidden",
      children: f.jsxs(oe.div, {
        variants: e,
        initial: "initial",
        animate: "animate",
        className:
          "flex justify-between items-center w-full h-full container m-auto overflow-x-hidden",
        children: [
          f.jsx("img", {
            src: "./jeevan_rekha_hospital.jpg",
            alt: "img",
            className: "logo w-[50px] lg:w-[100px] lg:w-max-[120px]",
          }),
          f.jsx("img", {
            src: "./jeevan_rekha_hospital.jpg",
            alt: "img",
            className: "logo w-[50px] lg:w-[100px] lg:w-max-[120px]",
          }),
          f.jsx("img", {
            src: "./jeevan_rekha_hospital.jpg",
            alt: "img",
            className: "logo w-[50px] lg:w-[100px] lg:w-max-[120px]",
          }),
          f.jsx("img", {
            src: "./jeevan_rekha_hospital.jpg",
            alt: "img",
            className: "logo w-[50px] lg:w-[100px] lg:w-max-[120px]",
          }),
          f.jsx("img", {
            src: "./jeevan_rekha_hospital.jpg",
            alt: "img",
            className: "logo w-[50px] lg:w-[100px] lg:w-max-[120px]",
          }),
        ],
      }),
    });
  },
  o5 = () => {
    const e = [
      {
        id: 1,
        name: "Swasthya Sathi Card",
        title: "Get the benefit of Swasthya Sathi Card",
        desc: "Basic health cover for secondary and tertiary care up to Rs. 5 lakh per annum per family. Paperless, Cashless, Smart Card based. All pre-existing diseases are covered. There is no cap on the family size and Parents from both the Spouse are included.cost.",
        img: "/swasthya_sathi_card.jpg",
        url: "https://swasthyasathi.gov.in/",
      },
    ];
    return f.jsx("section", {
      className: "container py-[80px] mb-[60px] mx-auto",
      children: e.map((t) =>
        f.jsxs(
          "div",
          {
            className:
              "flex flex-col md:flex-row flex-wrap justify-between items-center container mx-auto px-5 gap-10",
            children: [
              f.jsx("div", {
                className: "flex-1 w-1/2  ",
                children: f.jsx("img", {
                  src: t.img,
                  alt: "img",
                  className: "lg:w-1/2 object-cover",
                }),
              }),
              f.jsxs("div", {
                className: "flex-1 px-5",
                children: [
                  f.jsx("h2", { className: "h2", children: t.title }),
                  f.jsx("p", {
                    className: "break-words mb-3",
                    children: t.desc,
                  }),
                  f.jsx(en, {
                    to: t.url,
                    target: "_blank",
                    className:
                      "text-blue-400 hover:text-red-400 transition-all duration-300 ease-in italic underline",
                    children: "Learn more",
                  }),
                ],
              }),
            ],
          },
          t.id
        )
      ),
    });
  },
  a0 = () => {
    const e = [
      {
        name: "Mr. Gwen Ryan",
        msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
        img: "/t-avt-1.png",
        title: "patient",
      },
      {
        name: "Eda",
        msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
        img: "/t-avt-2.png",
        title: "customer",
      },
      {
        name: "Dr. Sherri Fahey",
        msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
        img: "/t-avt-3.png",
        title: "doctor",
      },
      {
        name: "Irma Bode",
        msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
        img: "/t-avt-4.png",
        title: "Regional Factors Specialist",
      },
      {
        name: "Miss Casey Bartoletti",
        msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
        img: "/t-avt-5.png",
        title: "Global Web Agent",
      },
      {
        name: "Gladys Bode",
        msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
        img: "/t-avt-6.png",
        title: "Human Solutions Designer",
      },
      {
        name: "William Gorczany",
        msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
        img: "/t-avt-7.png",
        title: "Senior Functionality Director",
      },
    ];
    return f.jsx("section", {
      className: "pt-[80px]",
      children: f.jsxs("div", {
        className:
          "flex flex-col justify-center items-center container mx-auto ",
        children: [
          f.jsxs("div", {
            className:
              "flex flex-col text-center items-center container mx-auto ",
            children: [
              f.jsxs("h1", {
                className: "h1",
                children: [
                  "Voices of ",
                  f.jsx("span", {
                    className: "text-red-400",
                    children: "Trust",
                  }),
                  f.jsx("hr", { className: "max-w-[100%] bg-blue-600 m-auto" }),
                ],
              }),
              f.jsx("p", {
                children:
                  "Entrusted with your well-being, we shoulder the promise of health with unwavering dedication.",
              }),
            ],
          }),
          f.jsx(gc, {
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 15 },
            },
            freeMode: !0,
            pagination: { clickable: !0 },
            navigation: { clickable: !0 },
            modules: [o0, s0, Z3],
            className: "h-full w-full m-[100px] p-[500px] container mx-auto",
            children: e.map((t, n) =>
              f.jsx(
                vc,
                {
                  children: f.jsxs("div", {
                    className:
                      "flex flex-col lg:flex-row justify-between items-center mx-[50px] lg:py-[50px] lg:px-5",
                    children: [
                      f.jsxs("div", {
                        className:
                          "flex-1 flex flex-col items-center space-y-3 px-3 py-[6px]",
                        children: [
                          f.jsx("div", {
                            className: "w-[100px] self-center",
                            children: f.jsx("img", {
                              src: t.img,
                              alt: "img",
                              className: "rounded-full object-cover",
                            }),
                          }),
                          f.jsx("h3", {
                            className: "h3 capitalize",
                            children: t.name,
                          }),
                          f.jsx("p", {
                            className: "capitalize",
                            children: t.title,
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "bg-blue-100 flex-1 flex flex-col px-3 py-[6px] rounded-md capitalize",
                        children: [
                          f.jsx("p", {
                            className: "text-3xl text-red-800/30 self-center",
                            children: f.jsx(T4, {}),
                          }),
                          f.jsx("p", { className: "my-5", children: t.msg }),
                        ],
                      }),
                    ],
                  }),
                },
                n
              )
            ),
          }),
        ],
      }),
    });
  },
  a5 = () => {
    const e = [
        {
          question: "How do I book an appointment?",
          answer:
            "To book an appointment, visit our website and follow these steps: Select the “Book Appointment” option. Choose your preferred doctor or specialist.    Select the date and time slot. Provide your contact details and any relevant information. Confirm your booking.",
        },
        {
          question: "Can I reschedule or cancel an appointment?",
          answer:
            "Yes, you can reschedule your appointment by logging into your account and selecting the “Reschedule” option. Please do so at least 24 hours before the scheduled appointment.",
        },
        {
          question:
            "Can I get my money back after an appointment is canceled ?",
          answer:
            "Yes, you can get your money after an appointment is canceled. But you need to cancel it at least 24 hours before the scheduled appointment.",
        },
        {
          question: "How do I find a specific doctor or specialist?",
          answer:
            "Use the search bar on our website to find doctors by name, specialty, or location",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept credit/debit cards, online payments. Payment details will be provided during the booking process.",
        },
      ],
      [t, n] = E.useState(Array(e.length).fill(!1)),
      r = (i) => {
        const s = [...t];
        (s[i] = !s[i]), n(s);
      };
    return f.jsx("section", {
      children: f.jsxs("div", {
        className: "w-full h-full container mx-auto space-y-5 py-10",
        children: [
          f.jsxs("div", {
            className: "text-center",
            children: [
              f.jsxs("h1", {
                className: "h1 leading-none",
                children: [
                  "FA",
                  f.jsx("span", { className: "text-red-500", children: "Q" }),
                ],
              }),
              f.jsx("p", {
                className: "p capitalize",
                children: "Questions? We have answers",
              }),
            ],
          }),
          f.jsx("div", {
            className: "space-y-5",
            children: e.map((i, s) =>
              f.jsxs(
                "div",
                {
                  className: "bg-blue-300 px-3 py-2 w-full rounded-xl",
                  children: [
                    f.jsxs("button", {
                      className:
                        "flex items-center overflow-hidden w-full justify-between",
                      onClick: () => r(s),
                      children: [
                        f.jsx("span", {
                          className: "text-2xl font-[600] leading-tight",
                          children: i.question,
                        }),
                        f.jsx("span", {
                          className: "transition-all duration-300 ease-in-out",
                          children: f.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            children: [
                              f.jsx("path", {
                                className: `transition-all duration-300 ease-in-out ${
                                  t[s] ? "opacity-100" : "opacity-0"
                                }`,
                                stroke: t[s] ? "red" : "blue",
                                d: "M2 12h20M12 12H2",
                              }),
                              f.jsx("path", {
                                className: `transition-all duration-300 ease-in-out ${
                                  t[s] ? "opacity-0" : "opacity-100"
                                }`,
                                stroke: t[s] ? "red" : "blue",
                                d: "M2 12h20M12 2v20",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      className: `grid overflow-hidden transition-all duration-700 ease-in-out ${
                        t[s]
                          ? "grid-rows-[1fr] opacity-100 py-5"
                          : "grid-rows-[0fr] opacity-0"
                      }`,
                      children: f.jsx("p", {
                        className: "overflow-hidden text-[25px]",
                        children: i.answer,
                      }),
                    }),
                  ],
                },
                s
              )
            ),
          }),
        ],
      }),
    });
  },
  l5 = () =>
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(C4, {}),
        f.jsx(s5, {}),
        f.jsx(v4, {}),
        f.jsx(l4, {}),
        f.jsx(i5, {}),
        f.jsx(o5, {}),
        f.jsx(a5, {}),
        f.jsx(a0, {}),
      ],
    }),
  u5 = () => {
    const e = [
      {
        id: 1,
        title: "Qualified Staff of Doctors",
        desc: "World class treatment for everyone. Our health system offers unmatched, expert health care.",
        img: "/find_doctor.jpg",
      },
      {
        id: 2,
        title: "Qualified Staff of Doctors",
        desc: "World class treatment for everyone. Our health system offers unmatched, expert health care.",
        img: "/gps.jpg",
      },
      {
        id: 3,
        title: "Book an appointment",
        desc: "World class treatment for everyone. Our health system offers unmatched, expert health care.",
        img: "/appointment.jpg",
      },
    ];
    return f.jsx("section", {
      className: "pt-[80px] pb-[80px] lg:pb-[100px]",
      children: f.jsx("div", {
        className:
          "flex justify-center items-center w-full h-full container  mx-auto",
        children: f.jsxs("div", {
          className:
            "w-full h-full flex flex-col gap-5 lg:gap-[50px] justify-between items-center ",
          children: [
            f.jsxs("div", {
              className: "text-center pt-5 pb-8 lg:pb-4 capitalize",
              children: [
                f.jsxs("h1", {
                  className: "h1",
                  children: [
                    "Why Choose ",
                    f.jsx("span", {
                      className: "text-blue-400",
                      children: "Us.",
                    }),
                  ],
                }),
                f.jsx("hr", { className: "max-w-[100%] bg-black m-auto" }),
                f.jsx("p", {
                  className: "p",
                  children:
                    "World class treatment for everyone. Our health system offers unmatched, expert health care.",
                }),
              ],
            }),
            f.jsx("div", {
              className:
                " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3",
              children: e.map((t) =>
                f.jsxs("div", {
                  className:
                    "py-2 px-4 rounded flex-1 flex flex-col text-center items-center justify-between border border-blue-400/20 hover:border-blue-400 transition-all duration-300 ease-in-out",
                  children: [
                    f.jsxs(
                      "div",
                      {
                        className: "",
                        children: [
                          f.jsx("h2", {
                            className: "h2 capitalize",
                            children: t.title,
                          }),
                          f.jsxs("p", {
                            className: "p",
                            children: [t.desc, " "],
                          }),
                        ],
                      },
                      t.id
                    ),
                    f.jsx("div", {
                      className: "rounded self-center w-1/2",
                      children: f.jsx("img", {
                        src: t.img,
                        alt: "",
                        className: "w-100% object-cover",
                      }),
                    }),
                    f.jsx("div", {
                      children: f.jsx("a", {
                        href: "/doctors",
                        children: f.jsxs("button", {
                          className:
                            "flex gap-1 group rounded-full bg-blue-800/10 p-2 leading-none",
                          children: [
                            f.jsx("span", {
                              className: "text-[16.5px]",
                              children: "Go",
                            }),
                            f.jsx("span", {
                              className:
                                "group-hover:translate-x-1 transition-all duration-500 ease-in",
                              children: f.jsx(Ug, {}),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                })
              ),
            }),
          ],
        }),
      }),
    });
  };
function c5(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function d5(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
        },
        child: [],
      },
    ],
  })(e);
}
function f5(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: { d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" },
        child: [],
      },
    ],
  })(e);
}
function p5(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z",
        },
        child: [],
      },
    ],
  })(e);
}
function l0(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z",
        },
        child: [],
      },
    ],
  })(e);
}
function h5(e) {
  return re({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z",
        },
        child: [],
      },
    ],
  })(e);
}
const m5 = () =>
    f.jsx("section", {
      className: "pt-[120px]",
      children: f.jsxs("div", {
        className:
          "flex flex-col md:flex-row flex-wrap justify-between items-center container mx-auto",
        children: [
          f.jsx("div", {
            className: "flex-1",
            children: f.jsx("img", {
              src: "./about.png",
              alt: "about_img",
              className: " object-cover",
            }),
          }),
          f.jsxs("div", {
            className: "flex-1 px-5 md:px-2 ",
            children: [
              f.jsx("h6", {
                className: "text-base capitalize text-blue-400",
                children: "About our Company",
              }),
              f.jsx("h2", {
                className: "h2",
                children:
                  "We Are Always Ensure Best Medical Treatment For Your Health",
              }),
              f.jsxs("p", {
                className: "break-words",
                children: [
                  "We strive to create a community where every individual realizes their utmost potential for lifelong health and well-being.",
                  f.jsx("br", {}),
                  " Our commitment is to earn the trust of patients, be a cherished partner in the community, and be catalysts for positive transformation for all.",
                ],
              }),
              f.jsx("div", {
                className: "mt-[30px] text-2xl italic group",
                children: f.jsxs("a", {
                  href: "/",
                  className: "flex items-center gap-x-5",
                  children: [
                    f.jsx("span", {
                      className:
                        "bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-all duration-300 ease-in",
                      children: f.jsx(l0, {}),
                    }),
                    f.jsx("span", { children: "Need Emergency?" }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  g5 = () =>
    f.jsx(f.Fragment, {
      children: f.jsx("section", {
        className: "w-full h-full xl:h-full bg-indigo-500/30 pt-5 relative",
        children: f.jsx("div", {
          className: "flex flex-wrap justify-center w-full h-full ",
          children: f.jsxs(oe.div, {
            className:
              "flex flex-col lg:flex-row justify-between items-center container m-auto",
            children: [
              f.jsxs("div", {
                className:
                  "flex-1 text-center lg:text-left lg:max-w-[50%] py-3 px-4",
                children: [
                  f.jsxs("h1", {
                    className: "h1 text-wrap",
                    children: [
                      "Blueprints of Our ",
                      f.jsx("span", {
                        className: "text-tiffanyBlue",
                        children: "Vision",
                      }),
                      f.jsx("br", {}),
                      "Where ",
                      f.jsx("i", { children: "Appointments" }),
                      " Meet ",
                      f.jsx("i", { children: "Convenience" }),
                      ".",
                    ],
                  }),
                  f.jsx("p", {
                    className: "text-red-500 mb-4 p text-wrap",
                    children:
                      "Envisioning Healthier Tomorrows. Delivering Excellence Today.",
                  }),
                ],
              }),
              f.jsxs("div", {
                className: " flex relative pointer-events-none ",
                children: [
                  f.jsx("div", {
                    className: "",
                    children: f.jsx("img", {
                      src: "/doctor01.png",
                      alt: "doctor.png",
                      className: "w-[250px] lg:w-fit",
                    }),
                  }),
                  f.jsxs("div", {
                    className: "text-xl",
                    children: [
                      f.jsxs("p", {
                        className:
                          "flex items-center gap-2 absolute bottom-[15.5em] left-[-6em] bg-white rounded-full px-2 font-semibold animate-moveY",
                        children: [
                          f.jsx("span", { children: f.jsx(Jn, {}) }),
                          f.jsx("span", { children: "Fast & Secure" }),
                        ],
                      }),
                      f.jsxs("p", {
                        className:
                          "flex items-center gap-2 absolute bottom-[5em] left-[1em] bg-white rounded-full px-2 font-semibold animate-moveYRe",
                        children: [
                          f.jsxs("span", { children: [f.jsx(Il, {}), " "] }),
                          f.jsx("span", { children: "Talk to Doctor" }),
                        ],
                      }),
                      f.jsxs("p", {
                        className:
                          "flex items-center gap-2 absolute top-[12em] right-[6em] bg-white rounded-full px-2 font-semibold animate-moveYRe",
                        children: [
                          f.jsxs("span", { children: [f.jsx(zl, {}), " "] }),
                          f.jsx("span", { children: "Save Records" }),
                        ],
                      }),
                      f.jsxs("p", {
                        className:
                          "flex items-center gap-2 absolute top-[17.5em] right-[2em] bg-white rounded-full px-2 font-semibold animate-moveY",
                        children: [
                          f.jsx("span", { children: f.jsx(Jn, {}) }),
                          f.jsx("span", { children: "Fast & Secure" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  v5 = () =>
    f.jsxs(f.Fragment, {
      children: [f.jsx(g5, {}), f.jsx(m5, {}), f.jsx(u5, {}), f.jsx(a0, {})],
    }),
  y5 = () => {
    const [e, t] = E.useState({
        name: "",
        email: "",
        number: "",
        textarea: "",
      }),
      [n, r] = E.useState({}),
      i = (l, a) => {
        switch (l) {
          case "name":
            if (a) {
              if (a.length > 20)
                return "Name is too long, must be within 20 characters";
            } else return "Name is required";
            break;
          case "email":
            if (a) {
              if (!/\S+@\S+\.\S+/.test(a)) return "Email is invalid";
            } else return "Email is required";
            break;
          case "number":
            if (a) {
              if (a.length < 10 || a.length >= 11)
                return "number is too short, should be in 10 digit format";
            } else return "number is required";
          case "subject":
            if (a) {
              if (a.length < 5)
                return "subject is too short, must be at least 5 characters";
              if (a.length > 20)
                return "subject is too long, must be within 20 characters";
            } else return "subject is required";
            break;
          case "textarea":
            if (!a) return "textarea is required";
            break;
          default:
            return "";
        }
      },
      s = (l) => {
        const { name: a, value: u } = l.target;
        t({ ...e, [a]: u }), r({ ...n, [a]: i(a, u) });
      },
      o = (l) => {
        l.preventDefault();
        const a = {};
        Object.keys(e).forEach((u) => {
          const c = i(u, e[u]);
          c && (a[u] = c);
        }),
          r(a),
          Object.keys(a).length === 0 && console.log("Form data submitted:", e);
      };
    return f.jsx(oe.div, {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { delay: 4, duration: 3 },
      className: "flex items-center justify-center min-h-screen",
      children: f.jsxs("div", {
        className: "px-8 w-full py-6 mt-4 text-left bg-white shadow-lg",
        children: [
          f.jsx("h3", {
            className: "text-2xl font-bold text-center",
            children: "Contact Us",
          }),
          f.jsxs("form", {
            onSubmit: o,
            children: [
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "name",
                    children: "Name",
                  }),
                  f.jsx("input", {
                    type: "name",
                    name: "name",
                    id: "name",
                    value: e.name,
                    onChange: s,
                    className: `w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                      n.name ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Enter Your Name",
                  }),
                  n.name &&
                    f.jsx("p", { className: "error", children: n.name }),
                ],
              }),
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "email",
                    children: "Email",
                  }),
                  f.jsx("input", {
                    type: "email",
                    name: "email",
                    id: "email",
                    value: e.email,
                    onChange: s,
                    className: `w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                      n.email ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Enter Your Email",
                  }),
                  n.email &&
                    f.jsx("p", { className: "error", children: n.email }),
                ],
              }),
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "number",
                    children: "Number",
                  }),
                  f.jsx("input", {
                    type: "number",
                    name: "number",
                    id: "number",
                    value: e.number,
                    onChange: s,
                    className: `input w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                      n.number ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Enter Your Phone Number",
                  }),
                  n.number &&
                    f.jsx("p", { className: "error", children: n.number }),
                ],
              }),
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "subject",
                    children: "Subject",
                  }),
                  f.jsx("input", {
                    type: "subject",
                    name: "subject",
                    id: "subject",
                    value: e.subject,
                    onChange: s,
                    className: `input w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                      n.subject ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Enter Your Subject",
                  }),
                  n.subject &&
                    f.jsx("p", { className: "error", children: n.subject }),
                ],
              }),
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "textarea",
                    children: "Message",
                  }),
                  f.jsx("textarea", {
                    type: "textarea",
                    name: "textarea",
                    id: "textarea",
                    rows: 8,
                    value: e.textarea,
                    onChange: s,
                    className: `w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                      n.textarea ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Enter Your Message...",
                  }),
                  n.textarea &&
                    f.jsx("p", { className: "error", children: n.textarea }),
                ],
              }),
              f.jsx("div", {
                className: "flex items-baseline justify-between",
                children: f.jsx("button", {
                  type: "submit",
                  className:
                    "px-6 py-4 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900",
                  children: f.jsx(f5, {}),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  x5 = () => {
    const e = E.useRef(),
      t = o4(e, { margin: "-100px" });
    return f.jsx("div", {
      className:
        "w-full h-screen flex justify-center items-center pointer-events-none absolute bottom-0 right-0",
      children: f.jsx(oe.div, {
        ref: e,
        animate: t ? "animate" : "",
        children: f.jsx(oe.div, {
          initial: { opacity: 1 },
          whileInView: { opacity: 0 },
          transition: { delay: 3, duration: 2 },
          children: f.jsx("svg", {
            version: "1.0",
            xmlns: "http://www.w3.org/2000/svg",
            width: "516.000000pt",
            height: "483.000000pt",
            fill: "none",
            viewBox: "0 0 516.000000 483.000000",
            preserveAspectRatio: "xMidYMid meet",
            className: "w-[250px] md:w-[500px] lg:w-[1000px]",
            children: f.jsxs(oe.g, {
              transform:
                "translate(0.000000,483.000000) scale(0.100000,-0.100000)",
              fill: "none",
              stroke: "#000",
              strokeWidth: 40,
              initial: { pathLength: 0 },
              animate: t ? { pathLength: 1 } : "",
              transition: { duration: 10 },
              children: [
                f.jsx(oe.path, {
                  fill: "none",
                  stroke: "red",
                  initial: { pathLength: 0 },
                  animate: t ? { pathLength: 1 } : "",
                  transition: { duration: 6 },
                  d: `M2410 4781 c-338 -91 -540 -425 -466 -770 46 -212 222 -402 439 -474\r
96 -31 296 -29 394 5 196 68 354 227 414 418 29 91 35 235 15 330 -49 235\r
-236 431 -470 491 -92 24 -238 24 -326 0z m317 -192 c157 -53 278 -203 302\r
-369 27 -199 -74 -387 -258 -478 -74 -36 -77 -37 -196 -37 -120 0 -122 0 -197\r
38 -168 83 -263 235 -261 417 3 317 310 532 610 429z`,
                }),
                f.jsx(oe.path, {
                  fill: "none",
                  stroke: "blue",
                  initial: { pathLength: 0 },
                  animate: t ? { pathLength: 1 } : "",
                  transition: { duration: 6 },
                  d: `M450 3545 c-141 -36 -282 -140 -353 -263 -61 -104 -80 -184 -75 -315\r
4 -99 8 -121 37 -190 68 -159 183 -269 343 -324 302 -105 632 64 728 373 32\r
104 28 249 -8 353 -60 168 -185 293 -352 351 -81 28 -238 36 -320 15z m291\r
-208 c159 -76 248 -241 219 -404 -53 -309 -423 -429 -643 -209 -198 198 -122\r
528 146 627 77 29 202 22 278 -14z`,
                }),
                f.jsx(oe.path, {
                  initial: { pathLength: 0 },
                  animate: t ? { pathLength: 1 } : "",
                  transition: { duration: 6 },
                  fill: "none",
                  stroke: "blue",
                  d: `M4427 3544 c-190 -46 -355 -203 -410 -391 -59 -199 -4 -413 144 -562\r
226 -229 592 -225 813 9 297 316 149 833 -269 940 -90 23 -194 25 -278 4z\r
m296 -208 c75 -36 146 -106 183 -181 26 -55 29 -69 29 -165 0 -94 -3 -111 -27\r
-160 -36 -74 -108 -144 -188 -183 -59 -29 -73 -32 -155 -31 -70 0 -102 5 -145\r
23 -179 74 -277 271 -224 452 36 122 111 205 233 256 48 20 69 23 146 20 73\r
-3 101 -9 148 -31z`,
                }),
                f.jsx(oe.path, {
                  initial: { pathLength: 0 },
                  animate: t ? { pathLength: 1 } : "",
                  transition: { duration: 10 },
                  d: `M2330 3419 c-282 -32 -550 -124 -760 -261 -84 -55 -222 -174 -240\r
-208 -5 -10 -12 -73 -15 -140 l-5 -123 -87 -37 c-445 -189 -816 -574 -926\r
-960 -45 -158 -46 -153 20 -257 154 -244 396 -483 688 -681 355 -240 876 -486\r
1415 -669 74 -25 139 -49 144 -54 5 -4 16 -3 25 2 9 5 88 34 176 65 587 205\r
1096 453 1450 705 255 181 499 435 633 657 37 60 39 90 16 189 -92 395 -473\r
803 -939 1003 l-90 39 -5 132 -5 131 -66 63 c-287 271 -706 417 -1189 414 -91\r
-1 -199 -5 -240 -10z m394 -204 c190 -33 312 -135 339 -282 6 -28 3 -35 -24\r
-50 -40 -23 -86 -94 -94 -144 -15 -86 22 -173 93 -224 40 -27 51 -30 120 -30\r
69 0 82 3 122 30 57 38 100 118 100 184 -1 73 -41 145 -105 187 -19 12 -25 25\r
-25 53 0 30 -24 110 -55 184 -11 27 11 21 121 -32 115 -55 229 -130 292 -190\r
41 -40 42 -44 42 -104 -1 -581 -250 -1239 -766 -2022 -140 -213 -300 -440\r
-310 -440 -16 0 -322 451 -456 670 -410 674 -617 1265 -618 1766 l0 97 53 44\r
c28 25 75 61 104 81 72 50 265 147 294 147 5 0 -4 -26 -20 -57 -16 -32 -37\r
-74 -45 -93 -9 -19 -34 -57 -56 -85 -71 -90 -92 -193 -66 -323 17 -86 48 -175\r
71 -205 12 -17 16 -16 64 13 28 18 51 34 51 36 0 3 -11 31 -25 64 -37 89 -52\r
189 -37 248 14 52 55 117 79 126 24 10 74 -25 110 -75 45 -64 67 -154 60 -251\r
-7 -85 -9 -82 66 -93 51 -8 51 -8 62 81 18 138 -40 310 -135 398 l-50 47 19\r
38 c29 56 107 128 176 161 117 58 281 74 449 45z m497 -454 c38 -38 39 -85 4\r
-124 -54 -58 -155 -19 -155 60 0 46 45 93 90 93 22 0 41 -9 61 -29z m-1876\r
-368 c50 -288 146 -582 286 -883 156 -336 398 -742 668 -1118 29 -41 50 -76\r
48 -78 -12 -13 -491 188 -722 302 -531 262 -916 565 -1133 892 -35 53 -35 53\r
-23 105 60 239 259 502 523 690 74 52 309 186 329 187 4 0 14 -44 24 -97z\r
m2584 47 c378 -194 661 -503 747 -816 l17 -62 -33 -48 c-230 -339 -584 -621\r
-1118 -888 -273 -137 -742 -332 -742 -309 0 3 31 49 69 102 348 488 629 995\r
778 1401 75 204 143 459 159 595 7 60 11 75 20 75 3 0 49 -22 103 -50z`,
                }),
              ],
            }),
          }),
        }),
      }),
    });
  },
  w5 = () =>
    f.jsxs("div", {
      className:
        "flex flex-col lg:flex-row justify-between items-center container mx-auto gap-5",
      children: [
        f.jsxs(oe.div, {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { delay: 4, duration: 3 },
          className: "flex-1 gap-y-5 space-y-5 px-3",
          children: [
            f.jsx("h6", {
              className: "text-[15px] text-blue-600",
              children: "Get in touch",
            }),
            f.jsx("h1", { className: "h1", children: "Have Any Question?" }),
            f.jsxs("div", {
              className:
                "flex items-center gap-x-5 border border-solid rounded-md border-blue-500/30 px-4 py-2 ",
              children: [
                f.jsx("div", {
                  className: "bg-blue-300 rounded-full p-3",
                  children: f.jsx(p5, { className: "text-[40px]" }),
                }),
                f.jsxs("div", {
                  children: [
                    f.jsx("h2", {
                      className: "h2 mb-2 leading-none",
                      children: "Address",
                    }),
                    f.jsx("p", {
                      className: "text-[25px] underline italic",
                      children: "8432 Mante Highway, Aminaport, USA",
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className:
                "flex items-center gap-x-5 border border-solid rounded-md border-blue-500/30 px-4 py-2 ",
              children: [
                f.jsx("div", {
                  className: "bg-blue-300 rounded-full p-3",
                  children: f.jsx(c5, { className: "text-[40px]" }),
                }),
                f.jsxs("div", {
                  children: [
                    f.jsx("h2", {
                      className: "h2 mb-2 leading-none",
                      children: "Phone Number",
                    }),
                    f.jsx("p", {
                      className: "text-[25px] underline italic",
                      children: "0123456789",
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className:
                "flex items-center gap-x-5 border border-solid rounded-md border-blue-500/30 px-4 py-2 ",
              children: [
                f.jsx("div", {
                  className: "bg-blue-300 rounded-full p-3",
                  children: f.jsx(d5, { className: "text-[40px]" }),
                }),
                f.jsxs("div", {
                  children: [
                    f.jsx("h2", {
                      className: "h2 mb-2 leading-none",
                      children: "Email",
                    }),
                    f.jsx("p", {
                      className: "text-[25px] underline italic",
                      children: "med@mail",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        f.jsxs("div", {
          className: "flex-1",
          children: [f.jsx(y5, {}), f.jsx(x5, {})],
        }),
      ],
    }),
  S5 = () => {
    const [e, t] = E.useState({
        name: "",
        email: "",
        password: "",
        isDoctor: "",
        gender: "",
      }),
      [n, r] = E.useState({}),
      i = (l, a) => {
        switch (l) {
          case "name":
            if (a) {
              if (a.length >= 20) return "Name is too Long.";
            } else return "Name is required";
            break;
          case "email":
            if (a) {
              if (!/\S+@\S+\.\S+/.test(a)) return "Email is invalid";
            } else return "Email is required";
            break;
          case "password":
            if (a) {
              if (a.length < 6) return "Password must be at least 6 characters";
            } else return "Password is required";
            break;
          case "isDoctor":
            if (!a) return "Please select if you are a doctor";
            break;
          case "gender":
            if (!a) return "Gender is required";
            break;
          default:
            return "";
        }
      },
      s = (l) => {
        const { name: a, value: u } = l.target;
        t({ ...e, [a]: u }), r({ ...n, [a]: i(a, u) });
      },
      o = (l) => {
        l.preventDefault();
        const a = {};
        Object.keys(e).forEach((u) => {
          const c = i(u, e[u]);
          c && (a[u] = c);
        }),
          r(a),
          Object.keys(a).length === 0 && console.log("Form data submitted:", e);
      };
    return f.jsx("div", {
      className: "flex items-center justify-center min-h-screen bg-gray-100",
      children: f.jsxs("div", {
        className: "px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-xl",
        children: [
          f.jsx("h3", {
            className: "text-2xl font-bold text-center",
            children: "New Account",
          }),
          f.jsxs("form", {
            onSubmit: o,
            children: [
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "name",
                    children: "Name",
                  }),
                  f.jsx("input", {
                    type: "text",
                    name: "name",
                    id: "name",
                    value: e.name,
                    onChange: s,
                    className: `w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                      n.name ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Name",
                  }),
                  n.name &&
                    f.jsx("p", {
                      className: "text-red-500 text-xs italic",
                      children: n.name,
                    }),
                ],
              }),
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "email",
                    children: "Email",
                  }),
                  f.jsx("input", {
                    type: "email",
                    name: "email",
                    id: "email",
                    value: e.email,
                    onChange: s,
                    className: `w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                      n.email ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Email",
                  }),
                  n.email &&
                    f.jsx("p", {
                      className: "text-red-500 text-xs italic",
                      children: n.email,
                    }),
                ],
              }),
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "password",
                    children: "Password",
                  }),
                  f.jsx("input", {
                    type: "password",
                    name: "password",
                    id: "password",
                    value: e.password,
                    onChange: s,
                    className: `w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                      n.password ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Password",
                  }),
                  n.password &&
                    f.jsx("p", {
                      className: "text-red-500 text-xs italic",
                      children: n.password,
                    }),
                ],
              }),
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    children: "Are you a Doctor?",
                  }),
                  f.jsxs("div", {
                    className: "flex",
                    children: [
                      f.jsxs("label", {
                        className: "inline-flex items-center mr-4",
                        children: [
                          f.jsx("input", {
                            type: "radio",
                            name: "isDoctor",
                            value: !0,
                            checked: e.isDoctor === "true",
                            onChange: s,
                            className: "form-radio",
                          }),
                          f.jsx("span", { className: "m-2", children: "Yes" }),
                        ],
                      }),
                      f.jsxs("label", {
                        className: "inline-flex items-center",
                        children: [
                          f.jsx("input", {
                            type: "radio",
                            name: "isDoctor",
                            value: !1,
                            checked: e.isDoctor === "false",
                            onChange: s,
                            className: "form-radio",
                          }),
                          f.jsx("span", { className: "m-2", children: "No" }),
                        ],
                      }),
                    ],
                  }),
                  n.isDoctor &&
                    f.jsx("p", {
                      className: "text-red-500 text-xs italic",
                      children: n.isDoctor,
                    }),
                ],
              }),
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", { className: "block", children: "Gender" }),
                  f.jsxs("select", {
                    name: "gender",
                    value: e.gender,
                    onChange: s,
                    className: `w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                      n.gender ? "border-red-500" : "border-blue-300"
                    }`,
                    children: [
                      f.jsx("option", { value: "", children: "Select Gender" }),
                      f.jsx("option", { value: "male", children: "Male" }),
                      f.jsx("option", { value: "female", children: "Female" }),
                      f.jsx("option", { value: "other", children: "Other" }),
                    ],
                  }),
                  n.gender &&
                    f.jsx("p", {
                      className: "text-red-500 text-xs italic",
                      children: n.gender,
                    }),
                ],
              }),
              f.jsx("div", {
                children: f.jsxs(Iu, {
                  to: "/login",
                  children: [
                    " ",
                    f.jsx("p", {
                      className: "text-[15px] my-3 text-blue-500",
                      children: "Already have an account?",
                    }),
                  ],
                }),
              }),
              f.jsx("div", {
                className: "flex items-baseline justify-between",
                children: f.jsx("button", {
                  type: "submit",
                  className:
                    "px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900",
                  children: "Register",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  T5 = () => {
    const e = [
      {
        title: "for patient",
        desc1: "search for doctor",
        desc2: "login",
        desc3: "register",
        path1: "/doctors",
        path2: "/sign-up",
        path3: "/sign-up",
      },
      {
        title: "for Doctor",
        desc1: "appointments",
        desc2: "login",
        desc3: "register",
        path1: "/",
        path2: "/sign-up",
        path3: "/sign-up",
      },
      {
        title: "Legal",
        desc1: "Privacy Policy",
        desc2: "Terms & Conditions",
        path1: "/",
        path2: "/sign-up",
      },
      {
        title: "Contact Us",
        desc1: "location",
        desc2: "support@med",
        desc3: "others",
        path1: "/",
        path2: "/sign-up",
        path3: "/sign-up",
      },
      {
        title: "Follow Us",
        desc1: f.jsx(y4, {}),
        desc2: f.jsx(x4, {}),
        desc3: f.jsx(w4, {}),
        path1: "https://www.facebook.com/myeasydoctor2020/",
        path2: "https://www.instagram.com/myeasydoctor/",
        path3: "https://twitter.com/myeasydoctor/",
      },
    ];
    return f.jsx("section", {
      children: f.jsx("div", {
        className:
          "flex justify-center w-full h-full bg-blue-400 py-10 px-2 capitalize",
        children: f.jsxs("div", {
          className:
            "flex flex-col md:flex-row justify-between container m-auto",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("a", {
                  href: "/",
                  children: f.jsx("img", {
                    src: "./MED-LOGO.jpg",
                    alt: "med_logo",
                    className: "logo",
                  }),
                }),
                f.jsx("p", { children: "MyEasyDoctor" }),
              ],
            }),
            e.map((t, n) =>
              f.jsxs(
                "div",
                {
                  className: "space-y-4",
                  children: [
                    f.jsx("h3", { className: "h3", children: t.title }),
                    f.jsx("a", {
                      href: t.path1,
                      target: "_blank",
                      className: "cursor-pointer hover:text-blue-800",
                      children: f.jsx("p", {
                        className: "p text-base mb-3",
                        children: t.desc1,
                      }),
                    }),
                    f.jsx("a", {
                      href: t.path2,
                      target: "_blank",
                      className: "cursor-pointer hover:text-blue-800",
                      children: f.jsx("p", {
                        className: "p text-base mb-3",
                        children: t.desc2,
                      }),
                    }),
                    f.jsx("a", {
                      href: t.path3,
                      target: "_blank",
                      className: "cursor-pointer hover:text-blue-800",
                      children: f.jsx("p", {
                        className: "p text-base",
                        children: t.desc3,
                      }),
                    }),
                  ],
                },
                n
              )
            ),
          ],
        }),
      }),
    });
  },
  E5 = () => {
    const e = [
      {
        name: "Dr. Ruby Perrin",
        desc: "MDS - Periodontology and Oral Implantology, BDS",
        icon: f.jsx(_t, {}),
        category: "Dentist",
        location: "Bakersfield,GS",
      },
      {
        name: "Dr. Ruby Perrin",
        desc: "BDS, MDS - Oral & Maxillofacial Surgery",
        icon: f.jsx(_t, {}),
        category: "Dentist",
        location: "Thailand",
      },
      {
        name: "Dr. Ruby Perrin",
        desc: "MBBS, MD - General Medicine, DNB - Cardiology",
        icon: f.jsx(_t, {}),
        category: "Dentist",
        location: "Cambridgeshire",
      },
      {
        name: "Dr. Ruby Perrin",
        desc: "MBBS, MS - General Surgery, MCh - Urology",
        icon: f.jsx(_t, {}),
        category: "Dentist",
        location: "Nigeria",
      },
    ];
    return f.jsx("section", {
      className: "py-[80px]",
      children: f.jsx("div", {
        className:
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-full h-full container px-1 mx-auto gap-5",
        children: e.map((t) =>
          f.jsxs(
            "div",
            {
              className:
                "flex flex-col items-center justify-between gap-y-10 gap-x-2 border border-blue-600 hover:border-red-400 rounded-md transition-all duration-300 ease-in py-5 px-3",
              children: [
                f.jsxs("div", {
                  className: "flex-1 flex flex-col  items-center  space-y-5 ",
                  children: [
                    f.jsx("div", {
                      className: "w-1/2",
                      children: f.jsx("img", {
                        src: "/doctor01.png",
                        alt: "",
                        className: "object-cover",
                      }),
                    }),
                    f.jsxs("div", {
                      className: "capitalize",
                      children: [
                        f.jsx("h3", { className: "h3", children: t.name }),
                        f.jsx("p", {
                          className: "text-[15px]",
                          children: t.desc,
                        }),
                        f.jsxs("div", {
                          className: "flex gap-x-2 text-red-600",
                          children: [
                            f.jsx("span", { children: t.icon }),
                            f.jsx("span", { children: t.category }),
                          ],
                        }),
                        f.jsx("p", {
                          className: "text-blue-400",
                          children: t.location,
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "flex-1 flex flex-col mb-3 space-y-5",
                  children: [
                    f.jsx(en, {
                      href: "/doctor-profile",
                      children: f.jsx("button", {
                        className: "btn",
                        children: "Open profile",
                      }),
                    }),
                    f.jsx("button", {
                      className: "btn",
                      children: "Book Appointment",
                    }),
                  ],
                }),
              ],
            },
            t
          )
        ),
      }),
    });
  },
  C5 = () =>
    f.jsx(f.Fragment, {
      children: f.jsx("section", {
        className:
          "w-full h-full xl:h-screen bg-doctor01 bg-no-repeat bg-cover relative",
        children: f.jsx("div", {
          className:
            "flex flex-wrap justify-center items-center w-full h-full ",
          children: f.jsxs("div", {
            className:
              "flex flex-wrap  flex-col justify-between items-center container m-auto",
            children: [
              f.jsxs("div", {
                className: "flex-1 text-center py-3 px-4",
                children: [
                  f.jsxs("h1", {
                    className: "h1 text-wrap text-center",
                    children: [
                      f.jsx("span", {
                        className: "text-tiffanyBlue",
                        children: "Search Doctor",
                      }),
                      ", Make an Appointment.",
                    ],
                  }),
                  f.jsx("p", {
                    className: "text-red-500 mb-4 p text-wrap",
                    children:
                      "Discover the best doctors, clinic & hospital the city nearest to you.",
                  }),
                  f.jsxs("div", {
                    className: "mt-[30px] italic",
                    children: [
                      f.jsxs("h2", {
                        className: "text-[20px] lg:text-[25px]  capitalize ",
                        children: [
                          "“ ",
                          f.jsx("span", {
                            className: "text-red-500",
                            children: "Medicines",
                          }),
                          " cure diseases, but only doctors can cure ",
                          f.jsx("span", {
                            className: "text-blue-500",
                            children: "patients.",
                          }),
                          "”",
                        ],
                      }),
                      f.jsx("p", {
                        className:
                          "break-words text-gray-600/50 font-[600] text-right",
                        children: "-Carl Jung",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className:
                  " flex-1 flex w-full gap-x-5 justify-center items-center relative",
                children: f.jsxs("div", {
                  className: "w-[80%] max-w-5xl mb-5 flex items-center gap-x-5",
                  children: [
                    f.jsx("input", {
                      type: "text",
                      className:
                        "input w-full bg-blue-800/50 text-2xl py-4 px-5",
                      placeholder: "type doctor,clinic,hospital....name",
                    }),
                    f.jsx("span", {
                      className: "bg-white p-2 rounded-full cursor-pointer",
                      children: f.jsx(g4, {
                        className: "text-2xl lg:text-[38px]",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  P5 = () => f.jsxs(f.Fragment, { children: [f.jsx(C5, {}), f.jsx(E5, {})] }),
  j5 = () =>
    f.jsx("section", {
      className: "py-[50px] px-5 lg:py-[150px]",
      children: f.jsxs("div", {
        className:
          "flex flex-col lg:flex-row justify-between items-center gap-5 container mx-auto",
        children: [
          f.jsx("div", {
            className: "flex-1 space-y-5 ",
            children: f.jsx("img", { src: "/doctor01.png", alt: "" }),
          }),
          f.jsxs("div", {
            className: "flex-1 space-y-5",
            children: [
              f.jsx("h1", { className: "h1", children: "Dr. Israel Bauch" }),
              f.jsx("p", {
                className: "italic text-red-600 text-[30px]",
                children: "Infrastructure",
              }),
              f.jsxs("p", {
                className:
                  "text-[25px] underline flex items-center gap-x-5 group",
                children: [
                  f.jsx("span", {
                    className:
                      "bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-all duration-300 ease-in",
                    children: f.jsx(h5, {}),
                  }),
                  " ",
                  f.jsx("span", {
                    children: "38979 Emilie Club,Giovani Knoll,GD",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "mt-[30px] text-2xl italic group",
                children: f.jsxs("a", {
                  href: "/",
                  className: "flex items-center gap-x-5",
                  children: [
                    f.jsx("span", {
                      className:
                        "bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-all duration-300 ease-in",
                      children: f.jsx(l0, {}),
                    }),
                    f.jsx("span", { children: "998.244.6316 x495" }),
                  ],
                }),
              }),
              f.jsx("p", {
                children:
                  "Quia ipsa nihil. Dicta in expedita quis delectus ducimus necessitatibus occaecati voluptatum. Amet consequatur aut. Deserunt rerum nobis qui ea. Maxime quia nihil corporis rerum ea. Eum illo neque aspernatur. Cupiditate perspiciatis in cumque velit et possimus praesentium aut adipisci. Facere dolor aut hic nobis hic unde. Blanditiis sequi eveniet ea. Voluptas porro dolorum et tenetur ut. Est ea eaque. Ab ex voluptas dolor sunt quia vel accusamus. Et optio quia ut quo. Repellat velit excepturi facilis sint nostrum officiis sit.",
              }),
              f.jsx("button", { className: "btn", children: "Book Now" }),
            ],
          }),
        ],
      }),
    }),
  b5 = () => {
    const [e, t] = E.useState({ email: "", password: "" }),
      [n, r] = E.useState({}),
      i = (l, a) => {
        switch (l) {
          case "email":
            if (a) {
              if (!/\S+@\S+\.\S+/.test(a)) return "Email is invalid";
            } else return "Email is required";
            break;
          case "password":
            if (a) {
              if (a.length < 6) return "Password must be at least 6 characters";
            } else return "Password is required";
            break;
          default:
            return "";
        }
      },
      s = (l) => {
        const { name: a, value: u } = l.target;
        t({ ...e, [a]: u }), r({ ...n, [a]: i(a, u) });
      },
      o = (l) => {
        l.preventDefault();
        const a = {};
        Object.keys(e).forEach((u) => {
          const c = i(u, e[u]);
          c && (a[u] = c);
        }),
          r(a),
          Object.keys(a).length === 0 && console.log("Form data submitted:", e);
      };
    return f.jsx("div", {
      className: "flex items-center justify-center min-h-screen bg-gray-100",
      children: f.jsxs("div", {
        className: "px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-xl",
        children: [
          f.jsx("h3", {
            className: "text-2xl font-bold text-center",
            children: "Login",
          }),
          f.jsxs("form", {
            onSubmit: o,
            children: [
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "email",
                    children: "Email",
                  }),
                  f.jsx("input", {
                    type: "email",
                    name: "email",
                    id: "email",
                    value: e.email,
                    onChange: s,
                    className: `w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                      n.email ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Email",
                  }),
                  n.email &&
                    f.jsx("p", {
                      className: "text-red-500 text-xs italic",
                      children: n.email,
                    }),
                ],
              }),
              f.jsxs("div", {
                className: "mt-4",
                children: [
                  f.jsx("label", {
                    className: "block",
                    htmlFor: "password",
                    children: "Password",
                  }),
                  f.jsx("input", {
                    type: "password",
                    name: "password",
                    id: "password",
                    value: e.password,
                    onChange: s,
                    className: `w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                      n.password ? "border-red-500" : "border-blue-300"
                    }`,
                    placeholder: "Password",
                  }),
                  n.password &&
                    f.jsx("p", {
                      className: "text-red-500 text-xs italic",
                      children: n.password,
                    }),
                ],
              }),
              f.jsx("div", {
                children: f.jsxs(Iu, {
                  to: "/sign-up",
                  children: [
                    " ",
                    f.jsx("p", {
                      className: "text-[15px] my-3 text-blue-500",
                      children: "Create an account.",
                    }),
                  ],
                }),
              }),
              f.jsx("div", {
                className: "flex items-baseline justify-between",
                children: f.jsx("button", {
                  type: "submit",
                  className:
                    "px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900",
                  children: "Register",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  k5 = () =>
    f.jsxs(Dy, {
      children: [
        f.jsx(a4, {}),
        f.jsx("main", {
          children: f.jsxs(Cy, {
            children: [
              f.jsx(Mt, { exact: !0, path: "/", element: f.jsx(l5, {}) }),
              f.jsx(Mt, { path: "/doctors", element: f.jsx(P5, {}) }),
              f.jsx(Mt, { path: "/about", element: f.jsx(v5, {}) }),
              f.jsx(Mt, { path: "/contact", element: f.jsx(w5, {}) }),
              f.jsx(Mt, { path: "/sign-up", element: f.jsx(S5, {}) }),
              f.jsx(Mt, { path: "/login", element: f.jsx(b5, {}) }),
              f.jsx(Mt, { path: "/doctor-profile", element: f.jsx(j5, {}) }),
            ],
          }),
        }),
        f.jsx(T5, {}),
      ],
    }),
  M5 = () => f.jsx("div", { children: f.jsx(k5, {}) });
ja.createRoot(document.getElementById("root")).render(
  f.jsx($.StrictMode, { children: f.jsx(M5, {}) })
);
