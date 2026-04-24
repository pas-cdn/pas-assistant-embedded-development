import { c as vt, aG as gr, aH as qe, aI as _e, aJ as mr, aK as Pe, aL as hr, aM as pr, aN as yr, aO as vr, aP as br, aQ as Er, aR as Sr, aS as wr, aT as _t, a9 as me, ap as ot, aq as bt, aU as Fr, ay as xr, G as _r, aV as Tr, r as b, aW as Ht, j as M, aX as Ce, as as ye, aY as Wt, az as Rr, x as Cr, aZ as Pr, a_ as dt, a$ as Ar, b0 as Vr } from "./embed-entry-B68VGA8B.js";
import { bC as Tt, bD as kr, bE as Ir, bF as Nr } from "./mermaid-VLURNSYL-DR5qm_B6.js";
import { u as Gt, t as xe, c as Ze } from "./index-B5gTIgOH.js";
import "./list-threads.graphql-DnOAwy1M.js";
import { T as Mr } from "./trash-2-DhCndcdo.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Rt = vt("mic", Dr);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Or = vt("plus", Ur);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [
  [
    "path",
    {
      d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
      key: "117uat"
    }
  ],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
], Ct = vt("send-horizontal", Lr);
var tt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Kt = !0, rt = !1;
function Yt(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function jr(e) {
  return Yt(e.source.body.substring(e.start, e.end));
}
function $r(e) {
  var t = /* @__PURE__ */ new Set(), r = [];
  return e.definitions.forEach(function(s) {
    if (s.kind === "FragmentDefinition") {
      var i = s.name.value, o = jr(s.loc), a = ht.get(i);
      a && !a.has(o) ? Kt && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : a || ht.set(i, a = /* @__PURE__ */ new Set()), a.add(o), t.has(o) || (t.add(o), r.push(s));
    } else
      r.push(s);
  }), qe(qe({}, e), { definitions: r });
}
function zr(e) {
  var t = new Set(e.definitions);
  t.forEach(function(s) {
    s.loc && delete s.loc, Object.keys(s).forEach(function(i) {
      var o = s[i];
      o && typeof o == "object" && t.add(o);
    });
  });
  var r = e.loc;
  return r && (delete r.startToken, delete r.endToken), e;
}
function Br(e) {
  var t = Yt(e);
  if (!tt.has(t)) {
    var r = gr(e, {
      experimentalFragmentVariables: rt,
      allowLegacyFragmentVariables: rt
    });
    if (!r || r.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    tt.set(t, zr($r(r)));
  }
  return tt.get(t);
}
function Me(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  typeof e == "string" && (e = [e]);
  var s = e[0];
  return t.forEach(function(i, o) {
    i && i.kind === "Document" ? s += i.loc.source.body : s += i, s += e[o + 1];
  }), Br(s);
}
function qr() {
  tt.clear(), ht.clear();
}
function Hr() {
  Kt = !1;
}
function Wr() {
  rt = !0;
}
function Gr() {
  rt = !1;
}
var ze = {
  gql: Me,
  resetCaches: qr,
  disableFragmentWarnings: Hr,
  enableExperimentalFragmentVariables: Wr,
  disableExperimentalFragmentVariables: Gr
};
(function(e) {
  e.gql = ze.gql, e.resetCaches = ze.resetCaches, e.disableFragmentWarnings = ze.disableFragmentWarnings, e.enableExperimentalFragmentVariables = ze.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = ze.disableExperimentalFragmentVariables;
})(Me || (Me = {}));
Me.default = Me;
function Kr(e) {
  var t = _e.useContext(mr()), r = e || t.client;
  return Pe(!!r, 79), r;
}
var Te;
(function(e) {
  e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription";
})(Te || (Te = {}));
var Ie;
function Pt(e) {
  var t;
  switch (e) {
    case Te.Query:
      t = "Query";
      break;
    case Te.Mutation:
      t = "Mutation";
      break;
    case Te.Subscription:
      t = "Subscription";
      break;
  }
  return t;
}
function Qt(e) {
  pr("parser", function() {
    globalThis.__DEV__ !== !1 && Pe.warn(94);
  }), Ie || (Ie = new yr(
    vr.parser || 1e3
    /* defaultCacheSizes.parser */
  ));
  var t = Ie.get(e);
  if (t)
    return t;
  var r, s, i;
  Pe(!!e && !!e.kind, 95, e);
  for (var o = [], a = [], l = [], h = [], p = 0, w = e.definitions; p < w.length; p++) {
    var S = w[p];
    if (S.kind === "FragmentDefinition") {
      o.push(S);
      continue;
    }
    if (S.kind === "OperationDefinition")
      switch (S.operation) {
        case "query":
          a.push(S);
          break;
        case "mutation":
          l.push(S);
          break;
        case "subscription":
          h.push(S);
          break;
      }
  }
  Pe(!o.length || a.length || l.length || h.length, 96), Pe(
    a.length + l.length + h.length <= 1,
    97,
    e,
    a.length,
    h.length,
    l.length
  ), s = a.length ? Te.Query : Te.Mutation, !a.length && !l.length && (s = Te.Subscription);
  var T = a.length ? a : l.length ? l : h;
  Pe(T.length === 1, 98, e, T.length);
  var g = T[0];
  r = g.variableDefinitions || [], g.name && g.name.kind === "Name" ? i = g.name.value : i = "data";
  var v = { name: i, type: s, variables: r };
  return Ie.set(e, v), v;
}
Qt.resetCache = function() {
  Ie = void 0;
};
globalThis.__DEV__ !== !1 && br("parser", function() {
  return Ie ? Ie.size : 0;
});
function Yr(e, t) {
  var r = hr("parser", Qt, [e]), s = Pt(t), i = Pt(r.type);
  Pe(
    r.type === t,
    99,
    s,
    s,
    i
  );
}
var Qr = Er ? _e.useLayoutEffect : _e.useEffect;
function Xr(e, t, r, s) {
  "use no memo";
  var i = _e.useRef(!1);
  t in e && !i.current && (globalThis.__DEV__ !== !1 && Pe.warn(78, r, t, s), i.current = !0);
}
function Xt(e, t) {
  globalThis.__DEV__ !== !1 && Xr(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
  var r = Kr(t == null ? void 0 : t.client);
  Yr(e, Te.Mutation);
  var s = _e.useState({
    called: !1,
    loading: !1,
    client: r
  }), i = s[0], o = s[1], a = _e.useRef({
    result: i,
    mutationId: 0,
    isMounted: !0,
    client: r,
    mutation: e,
    options: t
  });
  Qr(function() {
    Object.assign(a.current, { client: r, options: t, mutation: e });
  });
  var l = _e.useCallback(function(p) {
    p === void 0 && (p = {});
    var w = a.current, S = w.options, T = w.mutation, g = qe(qe({}, S), { mutation: T }), v = p.client || a.current.client;
    !a.current.result.loading && !g.ignoreResults && a.current.isMounted && o(a.current.result = {
      loading: !0,
      error: void 0,
      data: void 0,
      called: !0,
      client: v
    });
    var f = ++a.current.mutationId, A = Sr(g, p);
    return v.mutate(A).then(function(R) {
      var P, D, G = R.data, j = R.errors, O = j && j.length > 0 ? new wr({ graphQLErrors: j }) : void 0, $ = p.onError || ((P = a.current.options) === null || P === void 0 ? void 0 : P.onError);
      if (O && $ && $(O, A), f === a.current.mutationId && !A.ignoreResults) {
        var V = {
          called: !0,
          loading: !1,
          data: G,
          error: O,
          client: v
        };
        a.current.isMounted && !_t(a.current.result, V) && o(a.current.result = V);
      }
      var L = p.onCompleted || ((D = a.current.options) === null || D === void 0 ? void 0 : D.onCompleted);
      return O || L == null || L(R.data, A), R;
    }, function(R) {
      var P;
      if (f === a.current.mutationId && a.current.isMounted) {
        var D = {
          loading: !1,
          error: R,
          data: void 0,
          called: !0,
          client: v
        };
        _t(a.current.result, D) || o(a.current.result = D);
      }
      var G = p.onError || ((P = a.current.options) === null || P === void 0 ? void 0 : P.onError);
      if (G)
        return G(R, A), { data: void 0, errors: R };
      throw R;
    });
  }, []), h = _e.useCallback(function() {
    if (a.current.isMounted) {
      var p = {
        called: !1,
        loading: !1,
        client: a.current.client
      };
      Object.assign(a.current, { mutationId: 0, result: p }), o(p);
    }
  }, []);
  return _e.useEffect(function() {
    var p = a.current;
    return p.isMounted = !0, function() {
      p.isMounted = !1;
    };
  }, []), [l, qe({ reset: h }, i)];
}
var Ge = (e) => e.type === "checkbox", Ne = (e) => e instanceof Date, fe = (e) => e == null;
const Jt = (e) => typeof e == "object";
var ee = (e) => !fe(e) && !Array.isArray(e) && Jt(e) && !Ne(e), Jr = (e) => ee(e) && e.target ? Ge(e.target) ? e.target.checked : e.target.value : e, Zr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, es = (e, t) => e.has(Zr(t)), ts = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ee(t) && t.hasOwnProperty("isPrototypeOf");
}, Et = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function se(e) {
  if (e instanceof Date)
    return new Date(e);
  const t = typeof FileList < "u" && e instanceof FileList;
  if (Et && (e instanceof Blob || t))
    return e;
  const r = Array.isArray(e);
  if (!r && !(ee(e) && ts(e)))
    return e;
  const s = r ? [] : Object.create(Object.getPrototypeOf(e));
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (s[i] = se(e[i]));
  return s;
}
var it = (e) => /^\w*$/.test(e), Q = (e) => e === void 0, St = (e) => Array.isArray(e) ? e.filter(Boolean) : [], wt = (e) => St(e.replace(/["|']|\]/g, "").split(/\.|\[/)), x = (e, t, r) => {
  if (!t || !ee(e))
    return r;
  const s = (it(t) ? [t] : wt(t)).reduce((i, o) => fe(i) ? i : i[o], e);
  return Q(s) || s === e ? Q(e[t]) ? r : e[t] : s;
}, Ee = (e) => typeof e == "boolean", ve = (e) => typeof e == "function", K = (e, t, r) => {
  let s = -1;
  const i = it(t) ? [t] : wt(t), o = i.length, a = o - 1;
  for (; ++s < o; ) {
    const l = i[s];
    let h = r;
    if (s !== a) {
      const p = e[l];
      h = ee(p) || Array.isArray(p) ? p : isNaN(+i[s + 1]) ? {} : [];
    }
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return;
    e[l] = h, e = e[l];
  }
};
const At = {
  BLUR: "blur",
  FOCUS_OUT: "focusout"
}, be = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Fe = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, rs = me.createContext(null);
rs.displayName = "HookFormContext";
var ss = (e, t, r, s = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(i, o, {
      get: () => {
        const a = o;
        return t._proxyFormState[a] !== be.all && (t._proxyFormState[a] = !s || be.all), e[a];
      }
    });
  return i;
};
const ns = typeof window < "u" ? me.useLayoutEffect : me.useEffect;
var he = (e) => typeof e == "string", os = (e, t, r, s, i) => he(e) ? (s && t.watch.add(e), x(r, e, i)) : Array.isArray(e) ? e.map((o) => (s && t.watch.add(o), x(r, o))) : (s && (t.watchAll = !0), r), pt = (e) => fe(e) || !Jt(e);
function Ae(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (pt(e) || pt(t))
    return Object.is(e, t);
  if (Ne(e) && Ne(t))
    return Object.is(e.getTime(), t.getTime());
  const s = Object.keys(e), i = Object.keys(t);
  if (s.length !== i.length)
    return !1;
  if (r.has(e) || r.has(t))
    return !0;
  r.add(e), r.add(t);
  for (const o of s) {
    const a = e[o];
    if (!i.includes(o))
      return !1;
    if (o !== "ref") {
      const l = t[o];
      if (Ne(a) && Ne(l) || ee(a) && ee(l) || Array.isArray(a) && Array.isArray(l) ? !Ae(a, l, r) : !Object.is(a, l))
        return !1;
    }
  }
  return !0;
}
var Zt = (e, t, r, s, i) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [s]: i || !0
  }
} : {}, He = (e) => Array.isArray(e) ? e : [e], Vt = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const o of e)
        o.next && o.next(i);
    },
    subscribe: (i) => (e.push(i), {
      unsubscribe: () => {
        e = e.filter((o) => o !== i);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
function er(e, t) {
  const r = {};
  for (const s in e)
    if (e.hasOwnProperty(s)) {
      const i = e[s], o = t[s];
      if (i && ee(i) && o) {
        const a = er(i, o);
        ee(a) && (r[s] = a);
      } else e[s] && (r[s] = o);
    }
  return r;
}
var le = (e) => ee(e) && !Object.keys(e).length, Ft = (e) => e.type === "file", st = (e) => {
  if (!Et)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, tr = (e) => e.type === "select-multiple", xt = (e) => e.type === "radio", is = (e) => xt(e) || Ge(e), ft = (e) => st(e) && e.isConnected;
function as(e, t) {
  const r = t.slice(0, -1).length;
  let s = 0;
  for (; s < r; )
    e = Q(e) ? s++ : e[t[s++]];
  return e;
}
function cs(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Q(e[t]))
      return !1;
  return !0;
}
function Z(e, t) {
  const r = Array.isArray(t) ? t : it(t) ? [t] : wt(t), s = r.length === 1 ? e : as(e, r), i = r.length - 1, o = r[i];
  return s && delete s[o], i !== 0 && (ee(s) && le(s) || Array.isArray(s) && cs(s)) && Z(e, r.slice(0, -1)), e;
}
var ls = (e) => {
  for (const t in e)
    if (ve(e[t]))
      return !0;
  return !1;
};
function rr(e) {
  return Array.isArray(e) || ee(e) && !ls(e);
}
function yt(e, t = {}) {
  for (const r in e) {
    const s = e[r];
    rr(s) ? (t[r] = Array.isArray(s) ? [] : {}, yt(s, t[r])) : Q(s) || (t[r] = !0);
  }
  return t;
}
function Le(e, t, r) {
  r || (r = yt(t));
  for (const s in e) {
    const i = e[s];
    if (rr(i))
      Q(t) || pt(r[s]) ? r[s] = yt(i, Array.isArray(i) ? [] : {}) : Le(i, fe(t) ? {} : t[s], r[s]);
    else {
      const o = t[s];
      r[s] = !Ae(i, o);
    }
  }
  return r;
}
const kt = {
  value: !1,
  isValid: !1
}, It = { value: !0, isValid: !0 };
var sr = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Q(e[0].attributes.value) ? Q(e[0].value) || e[0].value === "" ? It : { value: e[0].value, isValid: !0 } : It
    ) : kt;
  }
  return kt;
}, nr = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) => Q(e) ? e : t ? e === "" ? NaN : e && +e : r && he(e) ? new Date(e) : s ? s(e) : e;
const Nt = {
  isValid: !1,
  value: null
};
var or = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Nt) : Nt;
function Mt(e) {
  const t = e.ref;
  return Ft(t) ? t.files : xt(t) ? or(e.refs).value : tr(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Ge(t) ? sr(e.refs).value : nr(Q(t.value) ? e.ref.value : t.value, e);
}
var us = (e, t, r, s) => {
  const i = {};
  for (const o of e) {
    const a = x(t, o);
    a && K(i, o, a._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: s
  };
}, nt = (e) => e instanceof RegExp, Be = (e) => Q(e) ? e : nt(e) ? e.source : ee(e) ? nt(e.value) ? e.value.source : e.value : e, Dt = (e) => ({
  isOnSubmit: !e || e === be.onSubmit,
  isOnBlur: e === be.onBlur,
  isOnChange: e === be.onChange,
  isOnAll: e === be.all,
  isOnTouch: e === be.onTouched
});
const Ut = "AsyncFunction";
var ds = (e) => !!e && !!e.validate && !!(ve(e.validate) && e.validate.constructor.name === Ut || ee(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Ut)), fs = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), Ot = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((s) => e.startsWith(s) && /^\.\w+/.test(e.slice(s.length))));
const We = (e, t, r, s) => {
  for (const i of r || Object.keys(e)) {
    const o = x(e, i);
    if (o) {
      const { _f: a, ...l } = o;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], i) && !s)
          return !0;
        if (a.ref && t(a.ref, a.name) && !s)
          return !0;
        if (We(l, t))
          break;
      } else if (ee(l) && We(l, t))
        break;
    }
  }
};
function Lt(e, t, r) {
  const s = x(e, r);
  if (s || it(r))
    return {
      error: s,
      name: r
    };
  const i = r.split(".");
  for (; i.length; ) {
    const o = i.join("."), a = x(t, o), l = x(e, o);
    if (a && !Array.isArray(a) && r !== o)
      return { name: r };
    if (l && l.type)
      return {
        name: o,
        error: l
      };
    if (l && l.root && l.root.type)
      return {
        name: `${o}.root`,
        error: l.root
      };
    i.pop();
  }
  return {
    name: r
  };
}
var gs = (e, t, r, s) => {
  r(e);
  const { name: i, ...o } = e;
  return le(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((a) => t[a] === (!s || be.all));
}, ms = (e, t, r) => !e || !t || e === t || He(e).some((s) => s && (r ? s === t : s.startsWith(t) || t.startsWith(s))), hs = (e, t, r, s, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(t || e) : (r ? s.isOnBlur : i.isOnBlur) ? !e : (r ? s.isOnChange : i.isOnChange) ? e : !0, ps = (e, t) => !St(x(e, t)).length && Z(e, t), ys = (e, t, r) => {
  const s = He(x(e, r));
  return K(s, "root", t[r]), K(e, r, s), e;
};
function jt(e, t, r = "validate") {
  if (he(e) || Array.isArray(e) && e.every(he) || Ee(e) && !e)
    return {
      type: r,
      message: he(e) ? e : "",
      ref: t
    };
}
var Oe = (e) => ee(e) && !nt(e) ? e : {
  value: e,
  message: ""
}, $t = async (e, t, r, s, i, o) => {
  const { ref: a, refs: l, required: h, maxLength: p, minLength: w, min: S, max: T, pattern: g, validate: v, name: f, valueAsNumber: A, mount: R } = e._f, P = x(r, f);
  if (!R || t.has(f))
    return {};
  const D = l ? l[0] : a, G = (k) => {
    i && D.reportValidity && (D.setCustomValidity(Ee(k) ? "" : k || ""), D.reportValidity());
  }, j = {}, O = xt(a), $ = Ge(a), V = O || $, L = (A || Ft(a)) && Q(a.value) && Q(P) || st(a) && a.value === "" || P === "" || Array.isArray(P) && !P.length, N = Zt.bind(null, f, s, j), Y = (k, I, W, X = Fe.maxLength, ie = Fe.minLength) => {
    const te = k ? I : W;
    j[f] = {
      type: k ? X : ie,
      message: te,
      ref: a,
      ...N(k ? X : ie, te)
    };
  };
  if (o ? !Array.isArray(P) || !P.length : h && (!V && (L || fe(P)) || Ee(P) && !P || $ && !sr(l).isValid || O && !or(l).isValid)) {
    const { value: k, message: I } = he(h) ? { value: !!h, message: h } : Oe(h);
    if (k && (j[f] = {
      type: Fe.required,
      message: I,
      ref: D,
      ...N(Fe.required, I)
    }, !s))
      return G(I), j;
  }
  if (!L && (!fe(S) || !fe(T))) {
    let k, I;
    const W = Oe(T), X = Oe(S);
    if (!fe(P) && !isNaN(P)) {
      const ie = a.valueAsNumber || P && +P;
      fe(W.value) || (k = ie > W.value), fe(X.value) || (I = ie < X.value);
    } else {
      const ie = a.valueAsDate || new Date(P), te = (q) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + q), ue = a.type == "time", U = a.type == "week";
      he(W.value) && P && (k = ue ? te(P) > te(W.value) : U ? P > W.value : ie > new Date(W.value)), he(X.value) && P && (I = ue ? te(P) < te(X.value) : U ? P < X.value : ie < new Date(X.value));
    }
    if ((k || I) && (Y(!!k, W.message, X.message, Fe.max, Fe.min), !s))
      return G(j[f].message), j;
  }
  if ((p || w) && !L && (he(P) || o && Array.isArray(P))) {
    const k = Oe(p), I = Oe(w), W = !fe(k.value) && P.length > +k.value, X = !fe(I.value) && P.length < +I.value;
    if ((W || X) && (Y(W, k.message, I.message), !s))
      return G(j[f].message), j;
  }
  if (g && !L && he(P)) {
    const { value: k, message: I } = Oe(g);
    if (nt(k) && !P.match(k) && (j[f] = {
      type: Fe.pattern,
      message: I,
      ref: a,
      ...N(Fe.pattern, I)
    }, !s))
      return G(I), j;
  }
  if (v) {
    if (ve(v)) {
      const k = await v(P, r), I = jt(k, D);
      if (I && (j[f] = {
        ...I,
        ...N(Fe.validate, I.message)
      }, !s))
        return G(I.message), j;
    } else if (ee(v)) {
      let k = {};
      for (const I in v) {
        if (!le(k) && !s)
          break;
        const W = jt(await v[I](P, r), D, I);
        W && (k = {
          ...W,
          ...N(I, W.message)
        }, G(W.message), s && (j[f] = k));
      }
      if (!le(k) && (j[f] = {
        ref: D,
        ...k
      }, !s))
        return j;
    }
  }
  return G(!0), j;
};
const vs = {
  mode: be.onSubmit,
  reValidateMode: be.onChange,
  shouldFocusError: !0
};
function bs(e = {}) {
  let t = {
    ...vs,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: ve(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, s = {}, i = ee(t.defaultValues) || ee(t.values) ? se(t.defaultValues || t.values) || {} : {}, o = t.shouldUnregister ? {} : se(i), a = {
    action: !1,
    mount: !1,
    watch: !1,
    keepIsValid: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, h, p = 0;
  const w = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, S = {
    ...w
  };
  let T = {
    ...S
  };
  const g = {
    array: Vt(),
    state: Vt()
  }, v = t.criteriaMode === be.all, f = (n) => (c) => {
    clearTimeout(p), p = setTimeout(n, c);
  }, A = async (n) => {
    if (!a.keepIsValid && !t.disabled && (S.isValid || T.isValid || n)) {
      let c;
      t.resolver ? (c = le((await V()).errors), R()) : c = await N(s, !0), c !== r.isValid && g.state.next({
        isValid: c
      });
    }
  }, R = (n, c) => {
    !t.disabled && (S.isValidating || S.validatingFields || T.isValidating || T.validatingFields) && ((n || Array.from(l.mount)).forEach((u) => {
      u && (c ? K(r.validatingFields, u, c) : Z(r.validatingFields, u));
    }), g.state.next({
      validatingFields: r.validatingFields,
      isValidating: !le(r.validatingFields)
    }));
  }, P = (n, c = [], u, E, y = !0, m = !0) => {
    if (E && u && !t.disabled) {
      if (a.action = !0, m && Array.isArray(x(s, n))) {
        const C = u(x(s, n), E.argA, E.argB);
        y && K(s, n, C);
      }
      if (m && Array.isArray(x(r.errors, n))) {
        const C = u(x(r.errors, n), E.argA, E.argB);
        y && K(r.errors, n, C), ps(r.errors, n);
      }
      if ((S.touchedFields || T.touchedFields) && m && Array.isArray(x(r.touchedFields, n))) {
        const C = u(x(r.touchedFields, n), E.argA, E.argB);
        y && K(r.touchedFields, n, C);
      }
      (S.dirtyFields || T.dirtyFields) && (r.dirtyFields = Le(i, o)), g.state.next({
        name: n,
        isDirty: k(n, c),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      K(o, n, c);
  }, D = (n, c) => {
    K(r.errors, n, c), g.state.next({
      errors: r.errors
    });
  }, G = (n) => {
    r.errors = n, g.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, j = (n, c, u, E) => {
    const y = x(s, n);
    if (y) {
      const m = x(o, n, Q(u) ? x(i, n) : u);
      Q(m) || E && E.defaultChecked || c ? K(o, n, c ? m : Mt(y._f)) : X(n, m), a.mount && !a.action && A();
    }
  }, O = (n, c, u, E, y) => {
    let m = !1, C = !1;
    const z = {
      name: n
    };
    if (!t.disabled) {
      if (!u || E) {
        (S.isDirty || T.isDirty) && (C = r.isDirty, r.isDirty = z.isDirty = k(), m = C !== z.isDirty);
        const H = Ae(x(i, n), c);
        C = !!x(r.dirtyFields, n), H ? Z(r.dirtyFields, n) : K(r.dirtyFields, n, !0), z.dirtyFields = r.dirtyFields, m = m || (S.dirtyFields || T.dirtyFields) && C !== !H;
      }
      if (u) {
        const H = x(r.touchedFields, n);
        H || (K(r.touchedFields, n, u), z.touchedFields = r.touchedFields, m = m || (S.touchedFields || T.touchedFields) && H !== u);
      }
      m && y && g.state.next(z);
    }
    return m ? z : {};
  }, $ = (n, c, u, E) => {
    const y = x(r.errors, n), m = (S.isValid || T.isValid) && Ee(c) && r.isValid !== c;
    if (t.delayError && u ? (h = f(() => D(n, u)), h(t.delayError)) : (clearTimeout(p), h = null, u ? K(r.errors, n, u) : Z(r.errors, n)), (u ? !Ae(y, u) : y) || !le(E) || m) {
      const C = {
        ...E,
        ...m && Ee(c) ? { isValid: c } : {},
        errors: r.errors,
        name: n
      };
      r = {
        ...r,
        ...C
      }, g.state.next(C);
    }
  }, V = async (n) => (R(n, !0), await t.resolver(o, t.context, us(n || l.mount, s, t.criteriaMode, t.shouldUseNativeValidation))), L = async (n) => {
    const { errors: c } = await V(n);
    if (R(n), n)
      for (const u of n) {
        const E = x(c, u);
        E ? K(r.errors, u, E) : Z(r.errors, u);
      }
    else
      r.errors = c;
    return c;
  }, N = async (n, c, u = {
    valid: !0
  }) => {
    for (const E in n) {
      const y = n[E];
      if (y) {
        const { _f: m, ...C } = y;
        if (m) {
          const z = l.array.has(m.name), H = y._f && ds(y._f);
          H && S.validatingFields && R([m.name], !0);
          const ne = await $t(y, l.disabled, o, v, t.shouldUseNativeValidation && !c, z);
          if (H && S.validatingFields && R([m.name]), ne[m.name] && (u.valid = !1, c || e.shouldUseNativeValidation))
            break;
          !c && (x(ne, m.name) ? z ? ys(r.errors, ne, m.name) : K(r.errors, m.name, ne[m.name]) : Z(r.errors, m.name));
        }
        !le(C) && await N(C, c, u);
      }
    }
    return u.valid;
  }, Y = () => {
    for (const n of l.unMount) {
      const c = x(s, n);
      c && (c._f.refs ? c._f.refs.every((u) => !ft(u)) : !ft(c._f.ref)) && ge(n);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, k = (n, c) => !t.disabled && (n && c && K(o, n, c), !Ae(ae(), i)), I = (n, c, u) => os(n, l, {
    ...a.mount ? o : Q(c) ? i : he(n) ? { [n]: c } : c
  }, u, c), W = (n) => St(x(a.mount ? o : i, n, t.shouldUnregister ? x(i, n, []) : [])), X = (n, c, u = {}) => {
    const E = x(s, n);
    let y = c;
    if (E) {
      const m = E._f;
      m && (!m.disabled && K(o, n, nr(c, m)), y = st(m.ref) && fe(c) ? "" : c, tr(m.ref) ? [...m.ref.options].forEach((C) => C.selected = y.includes(C.value)) : m.refs ? Ge(m.ref) ? m.refs.forEach((C) => {
        (!C.defaultChecked || !C.disabled) && (Array.isArray(y) ? C.checked = !!y.find((z) => z === C.value) : C.checked = y === C.value || !!y);
      }) : m.refs.forEach((C) => C.checked = C.value === y) : Ft(m.ref) ? m.ref.value = "" : (m.ref.value = y, m.ref.type || g.state.next({
        name: n,
        values: se(o)
      })));
    }
    (u.shouldDirty || u.shouldTouch) && O(n, y, u.shouldTouch, u.shouldDirty, !0), u.shouldValidate && q(n);
  }, ie = (n, c, u) => {
    for (const E in c) {
      if (!c.hasOwnProperty(E))
        return;
      const y = c[E], m = n + "." + E, C = x(s, m);
      (l.array.has(n) || ee(y) || C && !C._f) && !Ne(y) ? ie(m, y, u) : X(m, y, u);
    }
  }, te = (n, c, u = {}) => {
    const E = x(s, n), y = l.array.has(n), m = se(c);
    K(o, n, m), y ? (g.array.next({
      name: n,
      values: se(o)
    }), (S.isDirty || S.dirtyFields || T.isDirty || T.dirtyFields) && u.shouldDirty && g.state.next({
      name: n,
      dirtyFields: Le(i, o),
      isDirty: k(n, m)
    })) : E && !E._f && !fe(m) ? ie(n, m, u) : X(n, m, u), Ot(n, l) ? g.state.next({
      ...r,
      name: n,
      values: se(o)
    }) : g.state.next({
      name: a.mount ? n : void 0,
      values: se(o)
    });
  }, ue = async (n) => {
    a.mount = !0;
    const c = n.target;
    let u = c.name, E = !0;
    const y = x(s, u), m = (H) => {
      E = Number.isNaN(H) || Ne(H) && isNaN(H.getTime()) || Ae(H, x(o, u, H));
    }, C = Dt(t.mode), z = Dt(t.reValidateMode);
    if (y) {
      let H, ne;
      const d = c.type ? Mt(y._f) : Jr(n), _ = n.type === At.BLUR || n.type === At.FOCUS_OUT, F = !fs(y._f) && !t.resolver && !x(r.errors, u) && !y._f.deps || hs(_, x(r.touchedFields, u), r.isSubmitted, z, C), B = Ot(u, l, _);
      K(o, u, d), _ ? (!c || !c.readOnly) && (y._f.onBlur && y._f.onBlur(n), h && h(0)) : y._f.onChange && y._f.onChange(n);
      const ce = O(u, d, _), oe = !le(ce) || B;
      if (!_ && g.state.next({
        name: u,
        type: n.type,
        values: se(o)
      }), F)
        return (S.isValid || T.isValid) && (t.mode === "onBlur" ? _ && A() : _ || A()), oe && g.state.next({ name: u, ...B ? {} : ce });
      if (!_ && B && g.state.next({ ...r }), t.resolver) {
        const { errors: de } = await V([u]);
        if (R([u]), m(d), E) {
          const Re = Lt(r.errors, s, u), Ue = Lt(de, s, Re.name || u);
          H = Ue.error, u = Ue.name, ne = le(de);
        }
      } else
        R([u], !0), H = (await $t(y, l.disabled, o, v, t.shouldUseNativeValidation))[u], R([u]), m(d), E && (H ? ne = !1 : (S.isValid || T.isValid) && (ne = await N(s, !0)));
      E && (y._f.deps && (!Array.isArray(y._f.deps) || y._f.deps.length > 0) && q(y._f.deps), $(u, ne, H, ce));
    }
  }, U = (n, c) => {
    if (x(r.errors, c) && n.focus)
      return n.focus(), 1;
  }, q = async (n, c = {}) => {
    let u, E;
    const y = He(n);
    if (t.resolver) {
      const m = await L(Q(n) ? n : y);
      u = le(m), E = n ? !y.some((C) => x(m, C)) : u;
    } else n ? (E = (await Promise.all(y.map(async (m) => {
      const C = x(s, m);
      return await N(C && C._f ? { [m]: C } : C);
    }))).every(Boolean), !(!E && !r.isValid) && A()) : E = u = await N(s);
    return g.state.next({
      ...!he(n) || (S.isValid || T.isValid) && u !== r.isValid ? {} : { name: n },
      ...t.resolver || !n ? { isValid: u } : {},
      errors: r.errors
    }), c.shouldFocus && !E && We(s, U, n ? y : l.mount), E;
  }, ae = (n, c) => {
    let u = {
      ...a.mount ? o : i
    };
    return c && (u = er(c.dirtyFields ? r.dirtyFields : r.touchedFields, u)), Q(n) ? u : he(n) ? x(u, n) : n.map((E) => x(u, E));
  }, re = (n, c) => ({
    invalid: !!x((c || r).errors, n),
    isDirty: !!x((c || r).dirtyFields, n),
    error: x((c || r).errors, n),
    isValidating: !!x(r.validatingFields, n),
    isTouched: !!x((c || r).touchedFields, n)
  }), J = (n) => {
    n && He(n).forEach((c) => Z(r.errors, c)), g.state.next({
      errors: n ? r.errors : {}
    });
  }, Ve = (n, c, u) => {
    const E = (x(s, n, { _f: {} })._f || {}).ref, y = x(r.errors, n) || {}, { ref: m, message: C, type: z, ...H } = y;
    K(r.errors, n, {
      ...H,
      ...c,
      ref: E
    }), g.state.next({
      name: n,
      errors: r.errors,
      isValid: !1
    }), u && u.shouldFocus && E && E.focus && E.focus();
  }, at = (n, c) => ve(n) ? g.state.subscribe({
    next: (u) => "values" in u && n(I(void 0, c), u)
  }) : I(n, c, !0), je = (n) => g.state.subscribe({
    next: (c) => {
      ms(n.name, c.name, n.exact) && gs(c, n.formState || S, lt, n.reRenderRoot) && n.callback({
        values: { ...o },
        ...r,
        ...c,
        defaultValues: i
      });
    }
  }).unsubscribe, Se = (n) => (a.mount = !0, T = {
    ...T,
    ...n.formState
  }, je({
    ...n,
    formState: {
      ...w,
      ...n.formState
    }
  })), ge = (n, c = {}) => {
    for (const u of n ? He(n) : l.mount)
      l.mount.delete(u), l.array.delete(u), c.keepValue || (Z(s, u), Z(o, u)), !c.keepError && Z(r.errors, u), !c.keepDirty && Z(r.dirtyFields, u), !c.keepTouched && Z(r.touchedFields, u), !c.keepIsValidating && Z(r.validatingFields, u), !t.shouldUnregister && !c.keepDefaultValue && Z(i, u);
    g.state.next({
      values: se(o)
    }), g.state.next({
      ...r,
      ...c.keepDirty ? { isDirty: k() } : {}
    }), !c.keepIsValid && A();
  }, we = ({ disabled: n, name: c }) => {
    (Ee(n) && a.mount || n || l.disabled.has(c)) && (n ? l.disabled.add(c) : l.disabled.delete(c));
  }, De = (n, c = {}) => {
    let u = x(s, n);
    const E = Ee(c.disabled) || Ee(t.disabled);
    return K(s, n, {
      ...u || {},
      _f: {
        ...u && u._f ? u._f : { ref: { name: n } },
        name: n,
        mount: !0,
        ...c
      }
    }), l.mount.add(n), u ? we({
      disabled: Ee(c.disabled) ? c.disabled : t.disabled,
      name: n
    }) : j(n, !0, c.value), {
      ...E ? { disabled: c.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!c.required,
        min: Be(c.min),
        max: Be(c.max),
        minLength: Be(c.minLength),
        maxLength: Be(c.maxLength),
        pattern: Be(c.pattern)
      } : {},
      name: n,
      onChange: ue,
      onBlur: ue,
      ref: (y) => {
        if (y) {
          De(n, c), u = x(s, n);
          const m = Q(y.value) && y.querySelectorAll && y.querySelectorAll("input,select,textarea")[0] || y, C = is(m), z = u._f.refs || [];
          if (C ? z.find((H) => H === m) : m === u._f.ref)
            return;
          K(s, n, {
            _f: {
              ...u._f,
              ...C ? {
                refs: [
                  ...z.filter(ft),
                  m,
                  ...Array.isArray(x(i, n)) ? [{}] : []
                ],
                ref: { type: m.type, name: n }
              } : { ref: m }
            }
          }), j(n, !1, void 0, m);
        } else
          u = x(s, n, {}), u._f && (u._f.mount = !1), (t.shouldUnregister || c.shouldUnregister) && !(es(l.array, n) && a.action) && l.unMount.add(n);
      }
    };
  }, pe = () => t.shouldFocusError && We(s, U, l.mount), Ke = (n) => {
    Ee(n) && (g.state.next({ disabled: n }), We(s, (c, u) => {
      const E = x(s, u);
      E && (c.disabled = E._f.disabled || n, Array.isArray(E._f.refs) && E._f.refs.forEach((y) => {
        y.disabled = E._f.disabled || n;
      }));
    }, 0, !1));
  }, Ye = (n, c) => async (u) => {
    let E;
    u && (u.preventDefault && u.preventDefault(), u.persist && u.persist());
    let y = se(o);
    if (g.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: m, values: C } = await V();
      R(), r.errors = m, y = se(C);
    } else
      await N(s);
    if (l.disabled.size)
      for (const m of l.disabled)
        Z(y, m);
    if (Z(r.errors, "root"), le(r.errors)) {
      g.state.next({
        errors: {}
      });
      try {
        await n(y, u);
      } catch (m) {
        E = m;
      }
    } else
      c && await c({ ...r.errors }, u), pe(), setTimeout(pe);
    if (g.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: le(r.errors) && !E,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), E)
      throw E;
  }, Qe = (n, c = {}) => {
    x(s, n) && (Q(c.defaultValue) ? te(n, se(x(i, n))) : (te(n, c.defaultValue), K(i, n, se(c.defaultValue))), c.keepTouched || Z(r.touchedFields, n), c.keepDirty || (Z(r.dirtyFields, n), r.isDirty = c.defaultValue ? k(n, se(x(i, n))) : k()), c.keepError || (Z(r.errors, n), S.isValid && A()), g.state.next({ ...r }));
  }, Xe = (n, c = {}) => {
    const u = n ? se(n) : i, E = se(u), y = le(n), m = y ? i : E;
    if (c.keepDefaultValues || (i = u), !c.keepValues) {
      if (c.keepDirtyValues) {
        const C = /* @__PURE__ */ new Set([
          ...l.mount,
          ...Object.keys(Le(i, o))
        ]);
        for (const z of Array.from(C)) {
          const H = x(r.dirtyFields, z), ne = x(o, z), d = x(m, z);
          H && !Q(ne) ? K(m, z, ne) : !H && !Q(d) && te(z, d);
        }
      } else {
        if (Et && Q(n))
          for (const C of l.mount) {
            const z = x(s, C);
            if (z && z._f) {
              const H = Array.isArray(z._f.refs) ? z._f.refs[0] : z._f.ref;
              if (st(H)) {
                const ne = H.closest("form");
                if (ne) {
                  ne.reset();
                  break;
                }
              }
            }
          }
        if (c.keepFieldsRef)
          for (const C of l.mount)
            te(C, x(m, C));
        else
          s = {};
      }
      o = t.shouldUnregister ? c.keepDefaultValues ? se(i) : {} : se(m), g.array.next({
        values: { ...m }
      }), g.state.next({
        values: { ...m }
      });
    }
    l = {
      mount: c.keepDirtyValues ? l.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !S.isValid || !!c.keepIsValid || !!c.keepDirtyValues || !t.shouldUnregister && !le(m), a.watch = !!t.shouldUnregister, a.keepIsValid = !!c.keepIsValid, a.action = !1, c.keepErrors || (r.errors = {}), g.state.next({
      submitCount: c.keepSubmitCount ? r.submitCount : 0,
      isDirty: y ? !1 : c.keepDirty ? r.isDirty : !!(c.keepDefaultValues && !Ae(n, i)),
      isSubmitted: c.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: y ? {} : c.keepDirtyValues ? c.keepDefaultValues && o ? Le(i, o) : r.dirtyFields : c.keepDefaultValues && n ? Le(i, n) : c.keepDirty ? r.dirtyFields : {},
      touchedFields: c.keepTouched ? r.touchedFields : {},
      errors: c.keepErrors ? r.errors : {},
      isSubmitSuccessful: c.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: i
    });
  }, $e = (n, c) => Xe(ve(n) ? n(o) : n, { ...t.resetOptions, ...c }), ct = (n, c = {}) => {
    const u = x(s, n), E = u && u._f;
    if (E) {
      const y = E.refs ? E.refs[0] : E.ref;
      y.focus && setTimeout(() => {
        y.focus(), c.shouldSelect && ve(y.select) && y.select();
      });
    }
  }, lt = (n) => {
    r = {
      ...r,
      ...n
    };
  }, Je = {
    control: {
      register: De,
      unregister: ge,
      getFieldState: re,
      handleSubmit: Ye,
      setError: Ve,
      _subscribe: je,
      _runSchema: V,
      _updateIsValidating: R,
      _focusError: pe,
      _getWatch: I,
      _getDirty: k,
      _setValid: A,
      _setFieldArray: P,
      _setDisabledField: we,
      _setErrors: G,
      _getFieldArray: W,
      _reset: Xe,
      _resetDefaultValues: () => ve(t.defaultValues) && t.defaultValues().then((n) => {
        $e(n, t.resetOptions), g.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: Y,
      _disableForm: Ke,
      _subjects: g,
      _proxyFormState: S,
      get _fields() {
        return s;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return a;
      },
      set _state(n) {
        a = n;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return l;
      },
      set _names(n) {
        l = n;
      },
      get _formState() {
        return r;
      },
      get _options() {
        return t;
      },
      set _options(n) {
        t = {
          ...t,
          ...n
        };
      }
    },
    subscribe: Se,
    trigger: q,
    register: De,
    handleSubmit: Ye,
    watch: at,
    setValue: te,
    getValues: ae,
    reset: $e,
    resetField: Qe,
    clearErrors: J,
    unregister: ge,
    setError: Ve,
    setFocus: ct,
    getFieldState: re
  };
  return {
    ...Je,
    formControl: Je
  };
}
function Es(e = {}) {
  const t = me.useRef(void 0), r = me.useRef(void 0), [s, i] = me.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ve(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: ve(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!t.current)
    if (e.formControl)
      t.current = {
        ...e.formControl,
        formState: s
      }, e.defaultValues && !ve(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: a, ...l } = bs(e);
      t.current = {
        ...l,
        formState: s
      };
    }
  const o = t.current.control;
  return o._options = e, ns(() => {
    const a = o._subscribe({
      formState: o._proxyFormState,
      callback: () => i({ ...o._formState }),
      reRenderRoot: !0
    });
    return i((l) => ({
      ...l,
      isReady: !0
    })), o._formState.isReady = !0, a;
  }, [o]), me.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), me.useEffect(() => {
    e.mode && (o._options.mode = e.mode), e.reValidateMode && (o._options.reValidateMode = e.reValidateMode);
  }, [o, e.mode, e.reValidateMode]), me.useEffect(() => {
    e.errors && (o._setErrors(e.errors), o._focusError());
  }, [o, e.errors]), me.useEffect(() => {
    e.shouldUnregister && o._subjects.state.next({
      values: o._getWatch()
    });
  }, [o, e.shouldUnregister]), me.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== s.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, s.isDirty]), me.useEffect(() => {
    var a;
    e.values && !Ae(e.values, r.current) ? (o._reset(e.values, {
      keepFieldsRef: !0,
      ...o._options.resetOptions
    }), !((a = o._options.resetOptions) === null || a === void 0) && a.keepIsValid || o._setValid(), r.current = e.values, i((l) => ({ ...l }))) : o._resetDefaultValues();
  }, [o, e.values]), me.useEffect(() => {
    o._state.mount || (o._setValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), t.current.formState = ss(s, o), t.current;
}
const zt = (e, t, r) => {
  if (e && "reportValidity" in e) {
    const s = x(r, t);
    e.setCustomValidity(s && s.message || ""), e.reportValidity();
  }
}, ir = (e, t) => {
  for (const r in t.fields) {
    const s = t.fields[r];
    s && s.ref && "reportValidity" in s.ref ? zt(s.ref, r, e) : s.refs && s.refs.forEach((i) => zt(i, r, e));
  }
}, Ss = (e, t) => {
  t.shouldUseNativeValidation && ir(e, t);
  const r = {};
  for (const s in e) {
    const i = x(t.fields, s), o = Object.assign(e[s] || {}, { ref: i && i.ref });
    if (ws(t.names || Object.keys(e), s)) {
      const a = Object.assign({}, x(r, s));
      K(a, "root", o), K(r, s, a);
    } else K(r, s, o);
  }
  return r;
}, ws = (e, t) => e.some((r) => r.startsWith(t + "."));
var Fs = function(e, t) {
  for (var r = {}; e.length; ) {
    var s = e[0], i = s.code, o = s.message, a = s.path.join(".");
    if (!r[a]) if ("unionErrors" in s) {
      var l = s.unionErrors[0].errors[0];
      r[a] = { message: l.message, type: l.code };
    } else r[a] = { message: o, type: i };
    if ("unionErrors" in s && s.unionErrors.forEach(function(w) {
      return w.errors.forEach(function(S) {
        return e.push(S);
      });
    }), t) {
      var h = r[a].types, p = h && h[s.code];
      r[a] = Zt(a, t, r, i, p ? [].concat(p, s.message) : s.message);
    }
    e.shift();
  }
  return r;
}, xs = function(e, t, r) {
  return r === void 0 && (r = {}), function(s, i, o) {
    try {
      return Promise.resolve(function(a, l) {
        try {
          var h = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](s, t)).then(function(p) {
            return o.shouldUseNativeValidation && ir({}, o), { errors: {}, values: r.raw ? s : p };
          });
        } catch (p) {
          return l(p);
        }
        return h && h.then ? h.then(void 0, l) : h;
      }(0, function(a) {
        if (function(l) {
          return Array.isArray(l == null ? void 0 : l.errors);
        }(a)) return { values: {}, errors: Ss(Fs(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
};
const _s = Me`
  mutation ProcessFiles(
    $assistantId: String!
    $fileIds: [String!]!
    $threadId: String
    $token: String
  ) {
    processFiles(
      assistantId: $assistantId
      fileIds: $fileIds
      threadId: $threadId
      token: $token
    ) {
      success
      message
      processedFileIds
      threadId
    }
  }
`;
function ar() {
  const e = ot(), { assistantProperties: t } = Gt(), r = bt(), s = Fr(), { selectThread: i, setNewlyCreatedThreadId: o } = xr(), [a, { loading: l, error: h }] = Xt(_s);
  return { handleProcessFiles: async (w, S) => {
    var v;
    if (!(t != null && t.id))
      return console.error("Assistant ID is required to process files"), !1;
    if (w.length === 0)
      return !1;
    const T = e;
    if (!T)
      return console.error("ProcessFiles requires an access token"), xe.error("Sessão inválida. Faça login novamente."), !1;
    const g = S ?? r ?? void 0;
    try {
      const f = await a({
        variables: {
          assistantId: t.id,
          fileIds: w,
          threadId: g,
          token: T
        },
        context: {
          headers: {
            authorization: `Bearer ${T}`,
            ...(s == null ? void 0 : s.id) && { "x-user-id": s.id }
          }
        }
      });
      if (!((v = f.data) != null && v.processFiles))
        return console.error("Error processing files: response.data is null", f), xe.error("Erro ao processar arquivos: resposta vazia", {
          duration: 2e3
        }), !1;
      const { success: A, threadId: R } = f.data.processFiles;
      return R && (i(R), o(R)), A ? !0 : (console.warn(
        "File processing returned success=false:",
        f.data.processFiles
      ), !1);
    } catch (f) {
      const A = f;
      return console.error("Error processing files:", f), xe.error((A == null ? void 0 : A.message) || "Erro ao processar arquivos", {
        duration: 2e3
      }), !1;
    }
  }, loading: l, error: h };
}
const Ts = Me`
  mutation UploadFile($files: [Upload!]!, $token: String!, $scope: String) {
    uploadFile(files: $files, token: $token, scope: $scope) {
      page {
        id
        filename
        contentMimeType
        contentLength
      }
    }
  }
`;
function cr() {
  const e = ot(), [t, { data: r, loading: s, error: i }] = Xt(Ts, {
    context: {
      headers: {
        "apollo-require-preflight": "true"
      }
    }
  });
  return { handleUploadFiles: async (a, l) => {
    var h;
    try {
      return ((h = (await t({
        variables: {
          files: a,
          token: e,
          scope: l == null ? void 0 : l.scope
        }
      })).data) == null ? void 0 : h.uploadFile.page) || [];
    } catch (p) {
      throw console.error("Error uploading files:", p), p;
    }
  }, data: r, loading: s, error: i };
}
const Rs = { VITE_API_BFF_URL: "https://api.dsv.pas.app.br/" }, Cs = Rs;
async function lr(e, t = {}) {
  const { token: r, hostname: s, headers: i, ...o } = t, a = _r(), l = Cs.VITE_API_BFF_URL, h = e.startsWith("http") ? e : `${l.replace(/\/$/, "")}/${e.replace(/^\//, "")}`, p = s ?? a.hostname ?? "embed-host";
  !s && !a.hostname && console.warn(
    '⚠️ hostname attribute not provided to <pas-assistant-embedded>. Using fallback "embed-host" for HTTP requests.'
  );
  const w = {
    ...i || {},
    "Content-Type": "application/json",
    "accept-language": Tr.language,
    "x-hostname": p,
    ...a.apiKey ? { "x-api-key": a.apiKey } : {},
    ...a.userId ? { "x-user-id": a.userId } : {},
    ...r ? { Authorization: `Bearer ${r}` } : {}
  };
  return fetch(h, {
    ...o,
    headers: w
  });
}
const Ps = 350, As = 2e3;
function Vs(e) {
  const t = Ht(), r = e.join(",");
  return `${t.replace(/\/$/, "")}/progress?ids=${encodeURIComponent(r)}&entityType=file`;
}
async function ks(e, t) {
  var o, a, l, h;
  if (!e.body)
    throw new Error("Response body not readable");
  const r = e.body.getReader(), s = new TextDecoder();
  let i = "";
  for (; ; ) {
    const { value: p, done: w } = await r.read();
    if (w) break;
    i += s.decode(p, { stream: !0 });
    const S = i.split(`
`);
    i = S.pop() ?? "";
    for (const T of S) {
      const g = T.trim();
      if (!g.startsWith("data:")) continue;
      const v = g.replace(/^data:\s*/, "").trim();
      if (v && !(v === "[DONE]" || v === "[TIMEOUT]"))
        try {
          const f = JSON.parse(v);
          if (f.entityType !== "file") continue;
          switch (f.progressType) {
            case "PROCESSING_START":
              (o = t.onFileProcessingStart) == null || o.call(t, f.id, f);
              break;
            case "PROCESSING_PROGRESS":
              (a = t.onFileProcessingProgress) == null || a.call(t, f.id, f);
              break;
            case "PROCESSING_COMPLETE":
              (l = t.onFileProcessingComplete) == null || l.call(t, f.id, f);
              break;
            case "PROCESSING_ERROR":
              (h = t.onFileProcessingError) == null || h.call(
                t,
                f.id,
                f.error || "Unknown error",
                f
              );
              break;
          }
        } catch (f) {
          console.warn("[useFileProgressSSE] Failed to parse event:", T, f);
        }
    }
  }
}
function Is(e) {
  const {
    fileIds: t,
    onFileProcessingStart: r,
    onFileProcessingProgress: s,
    onFileProcessingComplete: i,
    onFileProcessingError: o,
    enabled: a = !0,
    fetchFileStatus: l
  } = e, h = ot(), p = b.useRef(null), w = b.useRef(null), S = b.useRef(null), [T, g] = b.useState(0), v = b.useRef(null), f = b.useRef(null), A = b.useMemo(
    () => t != null && t.length ? [...t].sort().join(",") : "",
    [t]
  ), R = b.useRef({
    onFileProcessingStart: r,
    onFileProcessingProgress: s,
    onFileProcessingComplete: i,
    onFileProcessingError: o
  });
  b.useEffect(() => {
    R.current = {
      onFileProcessingStart: r,
      onFileProcessingProgress: s,
      onFileProcessingComplete: i,
      onFileProcessingError: o
    };
  }, [
    r,
    s,
    i,
    o
  ]), b.useEffect(() => {
    if (!a || !t || t.length === 0 || !h) {
      f.current && (clearTimeout(f.current), f.current = null), v.current = null, S.current = null, w.current && (clearTimeout(w.current), w.current = null), p.current && (p.current.abort(), p.current = null);
      return;
    }
    if (v.current !== A && (v.current = null), !(S.current === A && (w.current || p.current)))
      return w.current && (clearTimeout(w.current), w.current = null), S.current = A, w.current = setTimeout(() => {
        w.current = null;
        const P = [...t].sort(), D = { current: /* @__PURE__ */ new Set() }, G = new AbortController();
        p.current = G, (async () => {
          try {
            const O = await lr(
              Vs(P),
              {
                method: "GET",
                token: h,
                signal: G.signal
              }
            );
            if (!O.ok)
              throw new Error(`HTTP ${O.status}: ${O.statusText}`);
            await ks(O, {
              onFileProcessingStart: R.current.onFileProcessingStart,
              onFileProcessingProgress: R.current.onFileProcessingProgress,
              onFileProcessingComplete: ($, V) => {
                var L, N;
                D.current.add($), (N = (L = R.current).onFileProcessingComplete) == null || N.call(L, $, V);
              },
              onFileProcessingError: ($, V, L) => {
                var N, Y;
                D.current.add($), (Y = (N = R.current).onFileProcessingError) == null || Y.call(N, $, V, L);
              }
            });
          } catch (O) {
            if (O instanceof Error && O.name === "AbortError") {
              S.current = null, v.current !== A && (v.current = A, f.current = setTimeout(() => {
                f.current = null, g((V) => V + 1);
              }, As));
              return;
            }
            console.error("[useFileProgressSSE] Error connecting to SSE:", O);
          } finally {
            if (S.current = null, G.signal.aborted) return;
            const O = D.current, $ = P.filter((V) => !O.has(V));
            $.length > 0 && l && l($).then((V) => {
              $.forEach((L) => {
                var Y, k, I, W;
                const N = V.get(L);
                N === "success" ? (k = (Y = R.current).onFileProcessingComplete) == null || k.call(Y, L, {
                  progressType: "PROCESSING_COMPLETE",
                  id: L,
                  entityType: "file",
                  stage: "completed",
                  progress: 1,
                  timestamp: (/* @__PURE__ */ new Date()).toISOString()
                }) : N === "error" && ((W = (I = R.current).onFileProcessingError) == null || W.call(
                  I,
                  L,
                  "Processing failed",
                  {
                    progressType: "PROCESSING_ERROR",
                    id: L,
                    entityType: "file",
                    stage: "error",
                    progress: 0,
                    error: "Processing failed",
                    timestamp: (/* @__PURE__ */ new Date()).toISOString()
                  }
                ));
              });
            }).catch(() => {
            });
          }
        })();
      }, Ps), () => {
        f.current && (clearTimeout(f.current), f.current = null), w.current && (clearTimeout(w.current), w.current = null), p.current && (p.current.abort(), p.current = null, S.current = null);
      };
  }, [A, a, h, T]);
}
const gt = {
  container: Ze({
    base: "flex items-center gap-2"
  }),
  fileInput: Ze({
    base: "hidden"
  }),
  uploadButton: Ze({
    base: "flex items-center justify-center rounded-full mb-0.5"
  }),
  uploadIcon: Ze({
    variants: {
      disabled: {
        true: "text-muted-foreground cursor-not-allowed",
        false: "text-foreground cursor-pointer hover:text-muted-foreground"
      }
    },
    defaultVariants: {
      disabled: !1
    }
  })
}, mt = 4, ur = 2.5 * 1024 * 1024, dr = [
  "application/pdf",
  // 'application/msword',
  // 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  "text/plain",
  // 'text/csv',
  // 'text/markdown',
  // 'application/json',
  // 'text/html',
  "image/png",
  "image/jpeg"
  // 'image/webp',
  // 'image/gif',
];
function Ns(e) {
  return dr.includes(e);
}
const fr = (e) => e.type.startsWith("image/") ? URL.createObjectURL(e) : "";
function Ms({
  onFilesChange: e,
  disabled: t = !1,
  selectedFiles: r,
  onSelectedFilesChange: s
}) {
  const [i, o] = b.useState([]), [a, l] = b.useState(/* @__PURE__ */ new Map()), h = b.useRef(null), { handleUploadFiles: p, loading: w } = cr(), { handleProcessFiles: S } = ar(), T = bt(), g = r ?? i, v = b.useMemo(
    () => g.filter((V) => V.status === "processing").map((V) => V.id),
    [g]
  ), f = b.useCallback(
    (V) => {
      s ? s(V) : o(V);
    },
    [s]
  ), A = b.useCallback(
    (V) => {
      f(
        (L) => L.map(
          (N) => N.id === V ? { ...N, status: "success" } : N
        )
      );
    },
    [f]
  ), R = b.useCallback(
    (V, L) => {
      f(
        (N) => N.map(
          (Y) => Y.id === V ? { ...Y, status: "error", errorMessage: L } : Y
        )
      );
    },
    [f]
  );
  Is({
    fileIds: v,
    enabled: v.length > 0,
    onFileProcessingComplete: A,
    onFileProcessingError: R
  }), b.useEffect(() => {
    !s && r && o(r);
  }, [r, s]), b.useEffect(() => () => {
    a.forEach((V) => {
      URL.revokeObjectURL(V);
    });
  }, [a]);
  const P = async (V, L) => {
    try {
      const N = await p([V], { scope: "chat" });
      if (!N || N.length === 0)
        throw new Error("Upload response is empty");
      if (f((k) => k.map(
        (I) => I.tempId === L.tempId ? {
          ...N[0],
          originalName: L.originalName,
          status: "processing",
          tempId: L.tempId,
          previewUrl: L.previewUrl
        } : I
      )), !await S(
        [N[0].id],
        T
      ))
        throw new Error(
          ye("chat.upload.processingError", {
            defaultValue: "Erro ao processar arquivo"
          })
        );
      return f(
        (k) => k.map(
          (I) => I.id === N[0].id ? { ...I, status: "success", errorMessage: void 0 } : I
        )
      ), N[0];
    } catch (N) {
      const Y = N instanceof Error ? N.message : ye("common.uploadingStatus.error", {
        defaultValue: "Erro ao fazer upload"
      });
      return f((k) => k.map(
        (I) => I.tempId === L.tempId ? {
          ...I,
          status: "error",
          errorMessage: Y
        } : I
      )), xe.error(
        Y || ye("chat.upload.error.description", {
          defaultValue: "Erro ao fazer upload"
        })
      ), null;
    }
  }, D = async (V) => {
    if (!V || V.length === 0) return;
    const L = Array.from(V), N = g.length, Y = mt - N;
    L.length > Y && (xe.error(
      ye("chat.upload.maxFilesExceeded", {
        defaultValue: "Máximo de 4 arquivos permitidos"
      })
    ), L.splice(Y));
    const k = [];
    if (L.forEach((U) => {
      U.size > ur ? xe.error(ye("chat.upload.fileSizeExceeded")) : Ns(U.type) ? k.push(U) : xe.error(
        ye("chat.upload.unsupportedFormat", {
          defaultValue: "Formato de arquivo não suportado. Envie apenas PDF ou imagem (PNG, JPG, JPEG)."
        })
      );
    }), k.length === 0) return;
    const I = new Set(g.map((U) => U.originalName)), W = k.filter(
      (U) => !I.has(U.name)
    );
    if (W.length === 0) {
      xe.error(
        ye("chat.upload.fileAlreadyExists", {
          defaultValue: "Um ou mais arquivos já foram adicionados"
        })
      );
      return;
    }
    const X = W.map((U) => {
      const q = fr(U);
      return q && l((ae) => new Map(ae).set(U.name, q)), {
        id: crypto.randomUUID(),
        tempId: crypto.randomUUID(),
        filename: U.name,
        originalName: U.name,
        contentMimeType: U.type,
        contentLength: U.size,
        status: "uploading",
        previewUrl: q
      };
    }), ie = new Set(g.map((U) => U.id)), te = new Set(g.map((U) => U.originalName)), ue = X.filter(
      (U) => !ie.has(U.id) && !te.has(U.originalName)
    );
    ue.length > 0 && (s ? s((U) => {
      const q = new Set(U.map((J) => J.id)), ae = new Set(U.map((J) => J.originalName)), re = ue.filter(
        (J) => !q.has(J.id) && !ae.has(J.originalName)
      );
      return [...U, ...re];
    }) : o((U) => {
      const q = new Set(U.map((J) => J.id)), ae = new Set(U.map((J) => J.originalName)), re = ue.filter(
        (J) => !q.has(J.id) && !ae.has(J.originalName)
      );
      return [...U, ...re];
    }));
    try {
      const U = [];
      for (const q of X) {
        const ae = W.find(
          (J) => J.name === q.originalName
        );
        if (!ae) continue;
        const re = await P(ae, q);
        re && U.push({
          id: re.id,
          filename: re.filename,
          contentMimeType: re.contentMimeType,
          contentLength: re.contentLength
        });
      }
      e(U);
    } catch (U) {
      const q = U instanceof Error ? U.message : ye("common.uploadingStatus.error", {
        defaultValue: "Erro ao fazer upload"
      });
      f(
        (ae) => ae.map((re) => X.some((Ve) => Ve.tempId === re.tempId) ? { ...re, status: "error", errorMessage: q } : re)
      ), xe.error(
        q || ye("chat.upload.error.description", {
          defaultValue: "Erro ao fazer upload"
        })
      );
      return;
    }
  }, G = (V) => {
    V.target.files && (D(V.target.files), h.current && (h.current.value = ""));
  }, j = () => {
    var V;
    t || w || g.length >= mt || (V = h.current) == null || V.click();
  }, O = g.length >= mt, $ = t || w || O;
  return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx(
      "input",
      {
        ref: h,
        type: "file",
        multiple: !0,
        onChange: G,
        className: gt.fileInput(),
        accept: dr.join(","),
        disabled: $,
        "data-testid": "chat-file-input"
      }
    ),
    /* @__PURE__ */ M.jsx("div", { className: gt.container(), children: /* @__PURE__ */ M.jsx(
      Ce,
      {
        disabled: $,
        className: gt.uploadButton(),
        icon: /* @__PURE__ */ M.jsx(Or, { className: "size-4", "aria-hidden": !0 }),
        variant: "secondary",
        size: "icon",
        "data-testid": "chat-upload-button",
        "aria-label": ye("home.prompt.actions.upload"),
        onClick: j
      }
    ) })
  ] });
}
const Ds = 350;
function Us(e, t) {
  const r = Ht(), s = e.join(",");
  let i = r.replace(/\/$/, "");
  return i = i.replace(/\/graphql$/, ""), `${i}/progress?ids=${encodeURIComponent(s)}&entityType=${encodeURIComponent(t)}`;
}
async function Os(e, t) {
  var o, a, l, h;
  if (!e.body)
    throw new Error("Response body not readable");
  const r = e.body.getReader(), s = new TextDecoder();
  let i = "";
  for (; ; ) {
    const { value: p, done: w } = await r.read();
    if (w) break;
    i += s.decode(p, { stream: !0 });
    const S = i.split(`
`);
    i = S.pop() ?? "";
    for (const T of S) {
      const g = T.trim();
      if (!g.startsWith("data:")) continue;
      const v = g.replace(/^data:\s*/, "").trim();
      if (v && !(v === "[DONE]" || v === "[TIMEOUT]"))
        try {
          const f = JSON.parse(v);
          switch (console.log(
            `[useProgressSSE] Event received: id=${f.id}, progressType=${f.progressType}, stage=${f.stage}, progress=${f.progress}, type=${f.type || "N/A"}`
          ), f.progressType) {
            case "PROCESSING_START":
              console.log(
                `[useProgressSSE] Calling onProcessingStart callback: id=${f.id}`
              ), (o = t.onProcessingStart) == null || o.call(t, f.id, f);
              break;
            case "PROCESSING_PROGRESS":
              console.log(
                `[useProgressSSE] Calling onProcessingProgress callback: id=${f.id}, progress=${f.progress}`
              ), (a = t.onProcessingProgress) == null || a.call(t, f.id, f);
              break;
            case "PROCESSING_COMPLETE":
              console.log(
                `[useProgressSSE] Calling onProcessingComplete callback: id=${f.id}`
              ), (l = t.onProcessingComplete) == null || l.call(t, f.id, f);
              break;
            case "PROCESSING_ERROR":
              console.log(
                `[useProgressSSE] Calling onProcessingError callback: id=${f.id}, error=${f.error || "Unknown error"}`
              ), (h = t.onProcessingError) == null || h.call(
                t,
                f.id,
                f.error || "Unknown error",
                f
              );
              break;
          }
        } catch {
        }
    }
  }
}
function Ls(e) {
  const {
    ids: t,
    entityType: r,
    onProcessingStart: s,
    onProcessingProgress: i,
    onProcessingComplete: o,
    onProcessingError: a,
    enabled: l = !0
  } = e, h = ot(), p = b.useRef(null), w = b.useRef(null), S = b.useRef(null), T = b.useRef(null), g = b.useRef({
    onProcessingStart: s,
    onProcessingProgress: i,
    onProcessingComplete: o,
    onProcessingError: a
  });
  b.useEffect(() => {
    g.current = {
      onProcessingStart: s,
      onProcessingProgress: i,
      onProcessingComplete: o,
      onProcessingError: a
    };
  }, [
    s,
    i,
    o,
    a
  ]);
  const v = b.useMemo(() => !t || t.length === 0 ? "" : [...t].sort().join(","), [t]), f = b.useMemo(() => !l || !v || !h ? null : `${v}:${r}`, [v, r, l, h]);
  b.useEffect(() => {
    var R;
    if (!l || !t || t.length === 0 || !h) {
      w.current && (clearTimeout(w.current), w.current = null), (!l || !v) && ((R = T.current) == null ? void 0 : R.entityType) === r && (p.current && (p.current.abort(), p.current = null), T.current = null);
      return;
    }
    const A = T.current;
    if (!(A && A.idsKey === v && A.entityType === r && p.current && !p.current.signal.aborted) && !(S.current === v && (w.current || p.current)))
      return w.current && (clearTimeout(w.current), w.current = null), S.current = v, w.current = setTimeout(() => {
        w.current = null, p.current && (A == null ? void 0 : A.entityType) === r && (p.current.abort(), p.current = null);
        const P = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
        T.current = {
          idsKey: v,
          entityType: r,
          effectId: P
        };
        const D = new AbortController();
        p.current = D, (async () => {
          try {
            const j = Us(t, r);
            console.log(
              `[useProgressSSE] Starting SSE connection: endpoint=${j}, ids=${t.join(",")}, entityType=${r}`
            );
            const O = await lr(j, {
              method: "GET",
              token: h,
              signal: D.signal,
              headers: {
                "Content-Type": ""
              }
            });
            if (!O.ok)
              throw new Error(`HTTP ${O.status}: ${O.statusText}`);
            console.log(
              `[useProgressSSE] SSE connection established: ids=${t.join(",")}, entityType=${r}`
            ), await Os(O, {
              onProcessingStart: g.current.onProcessingStart,
              onProcessingProgress: g.current.onProcessingProgress,
              onProcessingComplete: g.current.onProcessingComplete,
              onProcessingError: g.current.onProcessingError
            }), console.log(
              `[useProgressSSE] SSE connection closed: ids=${t.join(",")}, entityType=${r}`
            );
          } catch (j) {
            if (j instanceof Error && j.name === "AbortError") {
              console.log(
                `[useProgressSSE] SSE connection aborted: ids=${t.join(",")}, entityType=${r}`
              );
              return;
            }
            console.error(
              `[useProgressSSE] Error in SSE connection: ids=${t.join(",")}, entityType=${r}`,
              j
            );
          } finally {
            S.current = null;
          }
        })();
      }, Ds), () => {
        w.current && (clearTimeout(w.current), w.current = null);
        const P = p.current, D = T.current;
        P && (D != null && D.effectId) && D.idsKey === v && D.entityType === r && !P.signal.aborted && (P.abort(), p.current = null, T.current = null, S.current = null);
      };
  }, [v, r, l, h, f]);
}
const js = {
  "no-speech": "noSpeech",
  aborted: "aborted",
  "audio-capture": "audioCapture",
  network: "network",
  "not-allowed": "notAllowed",
  "service-not-allowed": "serviceNotAllowed",
  "bad-grammar": "badGrammar",
  "language-not-supported": "languageNotSupported"
};
function $s(e) {
  const t = e instanceof DOMException ? e.name : "";
  return t === "NotAllowedError" || t === "PermissionDeniedError" ? "micDenied" : t === "NotFoundError" || t === "DevicesNotFoundError" ? "micNotFound" : "micGeneric";
}
function zs(e) {
  return js[e] ?? "generic";
}
const Bs = () => {
  const [e, t] = b.useState("idle"), [r, s] = b.useState(""), [i, o] = b.useState(null), [a, l] = b.useState(null), h = b.useRef(null), p = b.useRef(null), w = b.useCallback(() => {
    const g = p.current;
    if (g) {
      for (const v of g.getTracks())
        v.stop();
      p.current = null, l(null);
    }
  }, []), S = b.useCallback(async () => {
    var A;
    if (h.current)
      return;
    o(null);
    const g = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!g) {
      o("unsupported"), t("error");
      return;
    }
    if (!((A = navigator.mediaDevices) != null && A.getUserMedia)) {
      o("micUnavailable"), t("error");
      return;
    }
    let v;
    try {
      v = await navigator.mediaDevices.getUserMedia({ audio: !0 });
    } catch (R) {
      console.error("Microphone access failed:", R), o($s(R)), t("error");
      return;
    }
    p.current = v, l(v);
    const f = new g();
    h.current = f, f.lang = "pt-BR", f.continuous = !0, f.interimResults = !0, f.onresult = (R) => {
      const P = Array.from(
        R.results
      ).map((D) => D[0]).map((D) => D.transcript).join("");
      s(P);
    }, f.onerror = (R) => {
      console.error("Error during speech recognition:", R.error), o(zs(String(R.error))), t("error"), h.current = null, w();
    }, f.onstart = () => {
      s(""), t("recognizing");
    }, f.onend = () => {
      t("stopped"), h.current = null, w();
    };
    try {
      f.start();
    } catch (R) {
      console.error("recognition.start() failed:", R), h.current = null, w(), o("startFailed"), t("error");
    }
  }, [w]), T = b.useCallback(() => {
    h.current && h.current.stop();
  }, []);
  return b.useEffect(() => () => {
    h.current && (h.current.abort(), h.current = null);
    const g = p.current;
    if (g) {
      for (const v of g.getTracks())
        v.stop();
      p.current = null;
    }
  }, []), {
    startRecognition: S,
    stopRecognition: T,
    status: e,
    transcript: r,
    error: i,
    mediaStream: a,
    isRecognizing: e === "recognizing"
  };
}, Bt = 120, qs = 0.6, Hs = 3, Ws = 10, Gs = ({
  isActive: e,
  className: t
}) => {
  const r = b.useRef(null), s = b.useRef(null), i = b.useRef(null), o = b.useRef(null), a = b.useRef(null), l = b.useRef(null), h = b.useRef([]), p = b.useRef(0);
  return b.useEffect(() => {
    const w = async () => {
      if (!(!e || !r.current))
        try {
          const g = await navigator.mediaDevices.getUserMedia({
            audio: !0
          });
          l.current = g;
          const v = new (window.AudioContext || window.webkitAudioContext)();
          s.current = v;
          const f = v.createMediaStreamSource(g);
          o.current = f;
          const A = v.createAnalyser();
          A.fftSize = 256, A.smoothingTimeConstant = 0.7, i.current = A, f.connect(A), S();
        } catch (g) {
          console.error("Erro ao acessar o microfone:", g);
        }
    }, S = () => {
      if (p.current++, p.current % Hs === 0) {
        const D = i.current;
        if (D) {
          const G = new Uint8Array(D.frequencyBinCount);
          D.getByteFrequencyData(G);
          let O = G.reduce((L, N) => L + N, 0) / G.length;
          O *= qs;
          const $ = O > Ws ? O : 0, V = h.current;
          V.push($), V.length > Bt && V.shift();
        }
      }
      const g = r.current;
      if (!g) return;
      const v = g.getContext("2d");
      if (!v) return;
      v.clearRect(0, 0, g.width, g.height);
      const f = g.parentElement, A = f ? getComputedStyle(f).color : "rgb(3, 7, 18)", R = g.width / Bt, P = h.current;
      v.save(), v.globalAlpha = 0.92, v.fillStyle = A, P.forEach((D, G) => {
        let O = Math.log(1 + D) * 6;
        O < 2 && (O = 2);
        const $ = G * R, V = g.height / 2 - O / 2, L = 4, N = R > 2 ? R - 1 : R;
        v.beginPath(), v.roundRect($, V, N, O, L), v.fill();
      }), v.restore(), e && (a.current = requestAnimationFrame(S));
    }, T = () => {
      var v, f;
      a.current && cancelAnimationFrame(a.current), h.current = [];
      const g = r.current;
      if (g) {
        const A = g.getContext("2d");
        A == null || A.clearRect(0, 0, g.width, g.height);
      }
      if ((v = o.current) == null || v.disconnect(), (f = i.current) == null || f.disconnect(), l.current)
        for (const A of l.current.getTracks())
          A.stop();
      s.current && s.current.state !== "closed" && s.current.close().catch(() => {
      });
    };
    return e ? w() : T(), T;
  }, [e]), b.useEffect(() => {
    const w = r.current;
    if (!w) return;
    const S = () => {
      const T = w.parentElement;
      T && (w.width = T.offsetWidth, w.height = T.offsetHeight);
    };
    return S(), window.addEventListener("resize", S), () => {
      window.removeEventListener("resize", S);
    };
  }, []), /* @__PURE__ */ M.jsx("div", { className: Wt("w-full h-full text-foreground", t), children: /* @__PURE__ */ M.jsx("canvas", { ref: r, className: "block w-full h-full" }) });
}, Ks = Tt.object({
  content: Tt.string().min(1, ye("home.form.validation.content.minLength")).trim()
}), Ys = ({
  placeholder: e,
  assistantProperties: t,
  t: r
}) => {
  var i;
  const s = ((i = t == null ? void 0 : t.persona) == null ? void 0 : i.name) || r("home.prompt.defaultAssistantName");
  return e || r("home.prompt.placeholder", { assistantName: s });
}, et = 220, qt = 38, Qs = 30, Xs = ({ disabled: e, placeholder: t }) => {
  const r = Rr((d) => d.focusPromptRequestId), [s, i] = b.useState("idle"), [o, a] = b.useState(!1), [l, h] = b.useState([]), [p, w] = b.useState(!1), [S, T] = b.useState(!1), [g, v] = b.useState(!1), [f, A] = b.useState(
    null
  ), [R, P] = b.useState(!1), [D, G] = b.useState(!1), j = b.useRef(null), O = b.useRef(null), $ = b.useRef(null), V = b.useRef(""), { assistantProperties: L } = Gt(), N = bt(), { handleUploadFiles: Y } = cr(), { handleProcessFiles: k } = ar(), { mutate: I, isPending: W } = kr(), {
    startRecognition: X,
    stopRecognition: ie,
    transcript: te,
    isRecognizing: ue,
    error: U
  } = Bs(), { t: q } = Cr(), {
    register: ae,
    handleSubmit: re,
    watch: J,
    reset: Ve,
    formState: { isValid: at },
    setValue: je
  } = Es({
    resolver: xs(Ks),
    defaultValues: { content: "" },
    mode: "onChange"
  }), Se = J("content"), ge = Ir({
    state: s === "idle" || s === "typing" ? "idle_typing" : s
  }), we = W || o, De = l.some(
    (d) => d.status === "uploading" || d.status === "processing"
  ), pe = b.useCallback((d) => {
    const _ = d.scrollHeight > et;
    T(_ && d.scrollTop > 2), v(
      _ && d.scrollTop < d.scrollHeight - d.clientHeight - 2
    );
  }, []), Ke = () => {
    w(!1), T(!1), v(!1), $.current && ($.current.style.height = "auto");
  };
  b.useEffect(() => {
    !W && o && a(!1);
  }, [W, o]), b.useEffect(() => {
    const d = $.current;
    if (!d) return;
    const _ = () => pe(d);
    return d.addEventListener("scroll", _, { passive: !0 }), () => d.removeEventListener("scroll", _);
  }, [pe]), b.useLayoutEffect(() => {
    const d = $.current;
    d && (d.style.height = "auto", d.style.height = `${Math.min(d.scrollHeight, et)}px`, pe(d));
  }, [p]), b.useLayoutEffect(() => {
    if (r === 0) return;
    let d = !1, _ = 0, F = 0;
    const B = () => {
      if (d) return;
      const ce = $.current;
      if (ce && !ce.disabled) {
        ce.focus({ preventScroll: !0 });
        return;
      }
      _++, _ < Qs && (F = requestAnimationFrame(B));
    };
    return F = requestAnimationFrame(B), () => {
      d = !0, cancelAnimationFrame(F);
    };
  }, [r, e, s]);
  const Ye = Ys({
    placeholder: t,
    assistantProperties: L ?? null,
    t: q
  }), Qe = b.useMemo(
    () => l.filter(
      (d) => d.status === "processing" || d.status === "success"
    ).map((d) => d.id),
    [l]
  );
  Ls({
    ids: Qe,
    entityType: "file",
    enabled: Qe.length > 0,
    onProcessingStart: (d) => {
      h(
        (_) => _.map(
          (F) => F.id === d ? { ...F, status: "processing" } : F
        )
      );
    },
    onProcessingProgress: (d) => {
      h(
        (_) => _.map(
          (F) => F.id === d && F.status === "processing" ? { ...F, status: "processing" } : F
        )
      );
    },
    onProcessingComplete: (d) => {
      h(
        (_) => _.map(
          (F) => F.id === d ? { ...F, status: "success" } : F
        )
      );
    },
    onProcessingError: (d, _) => {
      h(
        (F) => F.map(
          (B) => B.id === d ? {
            ...B,
            status: "error",
            errorMessage: _
          } : B
        )
      );
    }
  });
  const Xe = b.useCallback(
    async (d) => {
      const _ = fr(d), F = crypto.randomUUID(), ce = {
        id: crypto.randomUUID(),
        tempId: F,
        filename: d.name,
        originalName: d.name,
        contentMimeType: d.type,
        contentLength: d.size,
        status: "uploading",
        previewUrl: _
      };
      h((oe) => [...oe, ce]);
      try {
        const oe = await Y([d]);
        if (!oe || oe.length === 0)
          throw new Error("Upload response is empty");
        const de = oe[0];
        if (h(
          (Ue) => Ue.map(
            (ke) => ke.tempId === F ? {
              ...ke,
              id: de.id,
              filename: de.filename,
              contentMimeType: de.contentMimeType,
              contentLength: de.contentLength,
              status: "processing"
            } : ke
          )
        ), !await k(
          [de.id],
          N
        ))
          throw new Error("Erro ao processar arquivo");
        h(
          (Ue) => Ue.map(
            (ke) => ke.id === de.id ? { ...ke, status: "success", errorMessage: void 0 } : ke
          )
        );
      } catch (oe) {
        h(
          (de) => de.map(
            (Re) => Re.tempId === F ? {
              ...Re,
              status: "error",
              errorMessage: oe instanceof Error ? oe.message : "Upload failed"
            } : Re
          )
        );
      }
    },
    [N, k, Y]
  ), $e = (d) => {
    if (!d.content.trim() && l.length === 0) return;
    a(!0);
    const _ = l.filter(
      (F) => F.status === "success" || F.status === "processing"
    ).map((F) => F.id);
    h(
      (F) => F.map((B) => ({
        ...B,
        status: B.status === "success" ? "processing" : B.status
      }))
    ), Ke(), Ve(), i("idle"), h([]), I(
      {
        content: d.content,
        threadId: N || void 0,
        fileIds: _.length > 0 ? _ : void 0,
        files: _.length > 0 ? l.filter((F) => _.includes(F.id)).map((F) => ({
          id: F.id,
          filename: F.filename,
          contentMimeType: F.contentMimeType,
          fileUri: void 0
        })) : void 0
      },
      {
        onError: () => {
        }
      }
    );
  }, ct = b.useCallback(
    (d) => {
      const _ = l.find((F) => F.id === d);
      _ != null && _.previewUrl && URL.revokeObjectURL(_.previewUrl), h((F) => F.filter((B) => B.id !== d));
    },
    [l]
  );
  b.useEffect(() => {
    const d = j.current, _ = f;
    if (!d || !_) return;
    const F = (B) => {
      if (B.deltaY === 0) return;
      const ce = B.deltaY > 0 && _.canScrollNext(), oe = B.deltaY < 0 && _.canScrollPrev();
      !ce && !oe || (B.preventDefault(), ce ? _.scrollNext() : oe && _.scrollPrev());
    };
    return d.addEventListener("wheel", F, { passive: !1 }), () => d.removeEventListener("wheel", F);
  }, [f]), b.useEffect(() => {
    const d = f;
    if (!d) return;
    const _ = () => {
      P(d.canScrollPrev()), G(d.canScrollNext());
    };
    return _(), d.on("select", _), d.on("reInit", _), () => {
      d.off("select", _), d.off("reInit", _);
    };
  }, [f]);
  const lt = () => {
    Ve(), Ke();
  }, ut = () => {
    V.current = Se, X();
  }, Je = (d) => {
    d.preventDefault(), d.stopPropagation(), ie();
    const _ = V.current;
    window.setTimeout(() => {
      je("content", _, {
        shouldDirty: !0,
        shouldTouch: !0,
        shouldValidate: !0
      }), i(_.trim() ? "typing" : "idle");
    }, 0);
  }, n = (d) => {
    d.preventDefault(), d.stopPropagation(), ie();
    const _ = te.trim();
    window.setTimeout(() => {
      je("content", _, {
        shouldDirty: !0,
        shouldTouch: !0,
        shouldValidate: !0
      }), i(_ ? "typing" : "idle");
    }, 0);
  }, c = b.useCallback(() => {
    const d = $.current;
    d && (d.style.height = "auto", d.style.height = `${Math.min(d.scrollHeight, et)}px`, d.scrollHeight > qt ? w(!0) : d.value || w(!1), pe(d));
  }, [pe]), u = (d) => {
    d.key === "Enter" && !d.shiftKey && (d.preventDefault(), at && !we && re($e)());
  };
  b.useEffect(() => {
    ue ? i("recognizing") : U ? i("error") : s === "recognizing" && !ue && i("reviewing");
  }, [ue, U, s]), b.useEffect(() => {
    s === "reviewing" && !Se.trim() ? i("idle") : s !== "recognizing" && s !== "reviewing" && i(Se ? "typing" : "idle");
  }, [Se, s]), b.useLayoutEffect(() => {
    s !== "idle" && s !== "typing" || c();
  }, [Se, s, c]), b.useEffect(() => {
    if (O.current) {
      const d = O.current;
      d.scrollTop = d.scrollHeight;
    }
  }, [te]);
  const E = () => /* @__PURE__ */ M.jsx(
    Ms,
    {
      selectedFiles: l,
      onSelectedFilesChange: (d) => {
        h(d);
      },
      onFilesChange: (d) => {
      },
      disabled: we
    }
  ), y = () => {
    const d = l.length > 0;
    switch (s) {
      case "idle":
        if (d) {
          const _ = l.some(
            (F) => F.status === "success" || F.status === "processing"
          );
          return /* @__PURE__ */ M.jsx(
            Ce,
            {
              disabled: we || De || !_,
              variant: "ghost",
              type: "submit",
              size: "icon",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ M.jsx(Ct, {})
            }
          );
        }
        return /* @__PURE__ */ M.jsx(dt, { content: q("home.prompt.actions.mic"), children: /* @__PURE__ */ M.jsx(
          Ce,
          {
            disabled: we,
            variant: "ghost",
            type: "button",
            onClick: ut,
            size: "icon",
            className: "rounded-full mb-0.5",
            icon: /* @__PURE__ */ M.jsx(Rt, {}),
            "aria-label": q("home.prompt.actions.mic")
          }
        ) });
      case "typing":
        return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          Se.trim() && /* @__PURE__ */ M.jsx(dt, { content: q("home.prompt.actions.clear"), children: /* @__PURE__ */ M.jsx(
            Ce,
            {
              onClick: lt,
              variant: "ghost",
              size: "icon",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ M.jsx(Mr, {}),
              "aria-label": q("home.prompt.actions.clear")
            }
          ) }),
          /* @__PURE__ */ M.jsx(
            Ce,
            {
              disabled: we || De || !Se.trim() && !d,
              type: "submit",
              variant: "ghost",
              size: "icon",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ M.jsx(Ct, {})
            }
          )
        ] });
      case "recognizing":
      case "reviewing":
        return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          /* @__PURE__ */ M.jsx(
            Ce,
            {
              type: "button",
              onClick: Je,
              size: "icon",
              variant: "ghost",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ M.jsx(Ar, {}),
              "aria-label": q("common.button.cancel")
            }
          ),
          /* @__PURE__ */ M.jsx(
            Ce,
            {
              type: "button",
              onClick: n,
              size: "icon",
              variant: "ghost",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ M.jsx(Vr, {}),
              "aria-label": q("common.button.confirm")
            }
          )
        ] });
      case "error":
        return /* @__PURE__ */ M.jsx(dt, { content: q("home.prompt.actions.mic"), children: /* @__PURE__ */ M.jsx(
          Ce,
          {
            variant: "ghost",
            type: "button",
            onClick: ut,
            size: "icon",
            className: "rounded-full",
            icon: /* @__PURE__ */ M.jsx(Rt, {}),
            "aria-label": q("home.prompt.actions.mic")
          }
        ) });
      default:
        return null;
    }
  }, m = () => {
    switch (s) {
      case "recognizing":
      case "reviewing":
        return /* @__PURE__ */ M.jsxs("div", { className: "flex w-full flex-col gap-2 py-1", children: [
          /* @__PURE__ */ M.jsx(Gs, { isActive: ue, className: "h-8" }),
          /* @__PURE__ */ M.jsx("span", { ref: O, className: ge.transcriptText(), children: te || q("home.prompt.listening") })
        ] });
      case "error":
        return /* @__PURE__ */ M.jsx("p", { className: ge.errorText(), children: q("home.prompt.transcriptionError") });
      default: {
        const { ref: d, ..._ } = ae("content");
        return /* @__PURE__ */ M.jsx(
          "textarea",
          {
            ref: (F) => {
              d(F), $.current = F;
            },
            ..._,
            placeholder: Ye,
            disabled: we || e,
            rows: 1,
            className: Wt(ge.input(), "resize-none"),
            onPaste: (F) => {
              var de;
              const B = (de = F.clipboardData) == null ? void 0 : de.items;
              if (!B) return;
              const ce = Array.from(B).find(
                (Re) => Re.type.startsWith("image/")
              );
              if (!ce) return;
              const oe = ce.getAsFile();
              if (oe) {
                if (oe.size > ur) {
                  F.preventDefault();
                  return;
                }
                F.preventDefault(), Xe(oe);
              }
            },
            onInput: (F) => {
              const B = F.currentTarget;
              B.style.height = "auto", B.style.height = `${Math.min(B.scrollHeight, et)}px`, B.scrollHeight > qt ? w(!0) : B.value || w(!1), pe(B);
            },
            onScroll: (F) => pe(F.currentTarget),
            onKeyDown: u
          }
        );
      }
    }
  }, C = s === "idle" || s === "typing", z = C && p, H = S || g ? /* @__PURE__ */ (() => {
    const F = `linear-gradient(to bottom, ${S ? "transparent 0%, black 14px" : "black 0%"}, ${g ? "black calc(100% - 14px), transparent 100%" : "black 100%"})`;
    return { maskImage: F, WebkitMaskImage: F };
  })() : void 0, ne = R || D ? /* @__PURE__ */ (() => {
    const F = `linear-gradient(to right, ${R ? "transparent 0%, black 12px" : "black 0%"}, ${D ? "black calc(100% - 12px), transparent 100%" : "black 100%"})`;
    return { maskImage: F, WebkitMaskImage: F };
  })() : void 0;
  return /* @__PURE__ */ M.jsx(
    "form",
    {
      onSubmit: re($e),
      className: ge.wrapper(),
      children: /* @__PURE__ */ M.jsxs("div", { className: ge.container(), children: [
        /* @__PURE__ */ M.jsx("div", { className: "flex w-full min-w-0 max-w-full justify-start", children: l.length > 0 && /* @__PURE__ */ M.jsx(
          "div",
          {
            ref: j,
            className: "min-w-0 max-w-full w-max overflow-x-hidden overflow-y-visible",
            style: ne,
            children: /* @__PURE__ */ M.jsx(
              Pr,
              {
                showControls: !1,
                opts: { align: "start", containScroll: "trimSnaps" },
                contentClassName: "-ml-2",
                itemClassName: "pl-2 basis-auto",
                items: l.map((d) => ({
                  id: d.id,
                  content: /* @__PURE__ */ M.jsx(
                    Nr,
                    {
                      displayMode: "promptUpload",
                      file: {
                        id: d.id,
                        name: d.filename,
                        status: d.status,
                        contentMimeType: d.contentMimeType,
                        previewUrl: d.previewUrl,
                        errorMessage: d.errorMessage
                      },
                      onRemoveFile: ct
                    }
                  )
                })),
                setApi: A
              }
            )
          }
        ) }),
        /* @__PURE__ */ M.jsxs("div", { className: "flex w-full flex-col", children: [
          /* @__PURE__ */ M.jsxs("div", { className: "flex w-full items-center", children: [
            C && !z && E(),
            /* @__PURE__ */ M.jsx("div", { className: ge.contentWrapper(), style: H, children: m() }),
            !z && /* @__PURE__ */ M.jsx("div", { className: ge.actionsWrapper(), children: y() })
          ] }),
          z && /* @__PURE__ */ M.jsxs("div", { className: ge.footer(), children: [
            E(),
            /* @__PURE__ */ M.jsx("div", { className: ge.actionsWrapper(), children: y() })
          ] })
        ] })
      ] })
    }
  );
};
Xs.displayName = "Prompt";
export {
  Xs as Prompt,
  Ks as promptSchema,
  Ir as promptStyles
};
