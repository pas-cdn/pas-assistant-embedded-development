import { c as vt, X as mr, Y as He, Z as ke, $ as hr, a0 as Ce, a1 as pr, a2 as yr, a3 as vr, a4 as br, a5 as Er, a6 as Sr, a7 as wr, a8 as Fr, a9 as kt, R as fe, C as it, D as bt, aa as xr, M as _r, h as kr, ab as Tr, r as v, ac as Wt, j as I, ad as Re, G as ye, ae as Gt, af as Rr, N as Cr, u as Pr, ag as Ar, ah as dt, ai as Vr, aj as Ir } from "./embed-entry-BxfoUARY.js";
import { A as Tt, B as Nr, D as Mr, F as Dr } from "./mermaid-VLURNSYL-BjCM-CWA.js";
import { u as Kt, t as _e, c as et } from "./index-r1ZuDwdu.js";
import "./list-threads.graphql-CcnK12Y7.js";
import { T as Ur } from "./trash-2-B7my7Mh9.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Rt = vt("mic", Or);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], jr = vt("plus", Lr);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [
  [
    "path",
    {
      d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
      key: "117uat"
    }
  ],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
], Ct = vt("send-horizontal", $r);
var rt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Yt = !0, st = !1;
function Qt(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function zr(e) {
  return Qt(e.source.body.substring(e.start, e.end));
}
function Br(e) {
  var r = /* @__PURE__ */ new Set(), t = [];
  return e.definitions.forEach(function(s) {
    if (s.kind === "FragmentDefinition") {
      var i = s.name.value, o = zr(s.loc), a = ht.get(i);
      a && !a.has(o) ? Yt && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : a || ht.set(i, a = /* @__PURE__ */ new Set()), a.add(o), r.has(o) || (r.add(o), t.push(s));
    } else
      t.push(s);
  }), He(He({}, e), { definitions: t });
}
function qr(e) {
  var r = new Set(e.definitions);
  r.forEach(function(s) {
    s.loc && delete s.loc, Object.keys(s).forEach(function(i) {
      var o = s[i];
      o && typeof o == "object" && r.add(o);
    });
  });
  var t = e.loc;
  return t && (delete t.startToken, delete t.endToken), e;
}
function Hr(e) {
  var r = Qt(e);
  if (!rt.has(r)) {
    var t = mr(e, {
      experimentalFragmentVariables: st,
      allowLegacyFragmentVariables: st
    });
    if (!t || t.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    rt.set(r, qr(Br(t)));
  }
  return rt.get(r);
}
function Me(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  typeof e == "string" && (e = [e]);
  var s = e[0];
  return r.forEach(function(i, o) {
    i && i.kind === "Document" ? s += i.loc.source.body : s += i, s += e[o + 1];
  }), Hr(s);
}
function Wr() {
  rt.clear(), ht.clear();
}
function Gr() {
  Yt = !1;
}
function Kr() {
  st = !0;
}
function Yr() {
  st = !1;
}
var Be = {
  gql: Me,
  resetCaches: Wr,
  disableFragmentWarnings: Gr,
  enableExperimentalFragmentVariables: Kr,
  disableExperimentalFragmentVariables: Yr
};
(function(e) {
  e.gql = Be.gql, e.resetCaches = Be.resetCaches, e.disableFragmentWarnings = Be.disableFragmentWarnings, e.enableExperimentalFragmentVariables = Be.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = Be.disableExperimentalFragmentVariables;
})(Me || (Me = {}));
Me.default = Me;
function Qr(e) {
  var r = ke.useContext(hr()), t = e || r.client;
  return Ce(!!t, 79), t;
}
var Te;
(function(e) {
  e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription";
})(Te || (Te = {}));
var Ie;
function Pt(e) {
  var r;
  switch (e) {
    case Te.Query:
      r = "Query";
      break;
    case Te.Mutation:
      r = "Mutation";
      break;
    case Te.Subscription:
      r = "Subscription";
      break;
  }
  return r;
}
function Xt(e) {
  yr("parser", function() {
    globalThis.__DEV__ !== !1 && Ce.warn(94);
  }), Ie || (Ie = new vr(
    br.parser || 1e3
    /* defaultCacheSizes.parser */
  ));
  var r = Ie.get(e);
  if (r)
    return r;
  var t, s, i;
  Ce(!!e && !!e.kind, 95, e);
  for (var o = [], a = [], u = [], p = [], m = 0, E = e.definitions; m < E.length; m++) {
    var f = E[m];
    if (f.kind === "FragmentDefinition") {
      o.push(f);
      continue;
    }
    if (f.kind === "OperationDefinition")
      switch (f.operation) {
        case "query":
          a.push(f);
          break;
        case "mutation":
          u.push(f);
          break;
        case "subscription":
          p.push(f);
          break;
      }
  }
  Ce(!o.length || a.length || u.length || p.length, 96), Ce(
    a.length + u.length + p.length <= 1,
    97,
    e,
    a.length,
    p.length,
    u.length
  ), s = a.length ? Te.Query : Te.Mutation, !a.length && !u.length && (s = Te.Subscription);
  var C = a.length ? a : u.length ? u : p;
  Ce(C.length === 1, 98, e, C.length);
  var g = C[0];
  t = g.variableDefinitions || [], g.name && g.name.kind === "Name" ? i = g.name.value : i = "data";
  var b = { name: i, type: s, variables: t };
  return Ie.set(e, b), b;
}
Xt.resetCache = function() {
  Ie = void 0;
};
globalThis.__DEV__ !== !1 && Er("parser", function() {
  return Ie ? Ie.size : 0;
});
function Xr(e, r) {
  var t = pr("parser", Xt, [e]), s = Pt(r), i = Pt(t.type);
  Ce(
    t.type === r,
    99,
    s,
    s,
    i
  );
}
var Jr = Sr ? ke.useLayoutEffect : ke.useEffect;
function Zr(e, r, t, s) {
  "use no memo";
  var i = ke.useRef(!1);
  r in e && !i.current && (globalThis.__DEV__ !== !1 && Ce.warn(78, t, r, s), i.current = !0);
}
function Jt(e, r) {
  globalThis.__DEV__ !== !1 && Zr(r || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
  var t = Qr(r?.client);
  Xr(e, Te.Mutation);
  var s = ke.useState({
    called: !1,
    loading: !1,
    client: t
  }), i = s[0], o = s[1], a = ke.useRef({
    result: i,
    mutationId: 0,
    isMounted: !0,
    client: t,
    mutation: e,
    options: r
  });
  Jr(function() {
    Object.assign(a.current, { client: t, options: r, mutation: e });
  });
  var u = ke.useCallback(function(m) {
    m === void 0 && (m = {});
    var E = a.current, f = E.options, C = E.mutation, g = He(He({}, f), { mutation: C }), b = m.client || a.current.client;
    !a.current.result.loading && !g.ignoreResults && a.current.isMounted && o(a.current.result = {
      loading: !0,
      error: void 0,
      data: void 0,
      called: !0,
      client: b
    });
    var _ = ++a.current.mutationId, R = wr(g, m);
    return b.mutate(R).then(function(V) {
      var x, q, O = V.data, L = V.errors, j = L && L.length > 0 ? new Fr({ graphQLErrors: L }) : void 0, H = m.onError || ((x = a.current.options) === null || x === void 0 ? void 0 : x.onError);
      if (j && H && H(j, R), _ === a.current.mutationId && !R.ignoreResults) {
        var k = {
          called: !0,
          loading: !1,
          data: O,
          error: j,
          client: b
        };
        a.current.isMounted && !kt(a.current.result, k) && o(a.current.result = k);
      }
      var D = m.onCompleted || ((q = a.current.options) === null || q === void 0 ? void 0 : q.onCompleted);
      return j || D?.(V.data, R), V;
    }, function(V) {
      var x;
      if (_ === a.current.mutationId && a.current.isMounted) {
        var q = {
          loading: !1,
          error: V,
          data: void 0,
          called: !0,
          client: b
        };
        kt(a.current.result, q) || o(a.current.result = q);
      }
      var O = m.onError || ((x = a.current.options) === null || x === void 0 ? void 0 : x.onError);
      if (O)
        return O(V, R), { data: void 0, errors: V };
      throw V;
    });
  }, []), p = ke.useCallback(function() {
    if (a.current.isMounted) {
      var m = {
        called: !1,
        loading: !1,
        client: a.current.client
      };
      Object.assign(a.current, { mutationId: 0, result: m }), o(m);
    }
  }, []);
  return ke.useEffect(function() {
    var m = a.current;
    return m.isMounted = !0, function() {
      m.isMounted = !1;
    };
  }, []), [u, He({ reset: p }, i)];
}
var Ke = (e) => e.type === "checkbox", Ne = (e) => e instanceof Date, le = (e) => e == null;
const Zt = (e) => typeof e == "object";
var ee = (e) => !le(e) && !Array.isArray(e) && Zt(e) && !Ne(e), es = (e) => ee(e) && e.target ? Ke(e.target) ? e.target.checked : e.target.value : e, ts = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, rs = (e, r) => e.has(ts(r)), ss = (e) => {
  const r = e.constructor && e.constructor.prototype;
  return ee(r) && r.hasOwnProperty("isPrototypeOf");
}, Et = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function re(e) {
  if (e instanceof Date)
    return new Date(e);
  const r = typeof FileList < "u" && e instanceof FileList;
  if (Et && (e instanceof Blob || r))
    return e;
  const t = Array.isArray(e);
  if (!t && !(ee(e) && ss(e)))
    return e;
  const s = t ? [] : Object.create(Object.getPrototypeOf(e));
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (s[i] = re(e[i]));
  return s;
}
var at = (e) => /^\w*$/.test(e), Q = (e) => e === void 0, St = (e) => Array.isArray(e) ? e.filter(Boolean) : [], wt = (e) => St(e.replace(/["|']|\]/g, "").split(/\.|\[/)), F = (e, r, t) => {
  if (!r || !ee(e))
    return t;
  const s = (at(r) ? [r] : wt(r)).reduce((i, o) => le(i) ? i : i[o], e);
  return Q(s) || s === e ? Q(e[r]) ? t : e[r] : s;
}, Se = (e) => typeof e == "boolean", ve = (e) => typeof e == "function", W = (e, r, t) => {
  let s = -1;
  const i = at(r) ? [r] : wt(r), o = i.length, a = o - 1;
  for (; ++s < o; ) {
    const u = i[s];
    let p = t;
    if (s !== a) {
      const m = e[u];
      p = ee(m) || Array.isArray(m) ? m : isNaN(+i[s + 1]) ? {} : [];
    }
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return;
    e[u] = p, e = e[u];
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
}, xe = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, ns = fe.createContext(null);
ns.displayName = "HookFormContext";
var os = (e, r, t, s = !0) => {
  const i = {
    defaultValues: r._defaultValues
  };
  for (const o in e)
    Object.defineProperty(i, o, {
      get: () => {
        const a = o;
        return r._proxyFormState[a] !== be.all && (r._proxyFormState[a] = !s || be.all), e[a];
      }
    });
  return i;
};
const is = typeof window < "u" ? fe.useLayoutEffect : fe.useEffect;
var ge = (e) => typeof e == "string", as = (e, r, t, s, i) => ge(e) ? (s && r.watch.add(e), F(t, e, i)) : Array.isArray(e) ? e.map((o) => (s && r.watch.add(o), F(t, o))) : (s && (r.watchAll = !0), t), pt = (e) => le(e) || !Zt(e);
function Pe(e, r, t = /* @__PURE__ */ new WeakSet()) {
  if (pt(e) || pt(r))
    return Object.is(e, r);
  if (Ne(e) && Ne(r))
    return Object.is(e.getTime(), r.getTime());
  const s = Object.keys(e), i = Object.keys(r);
  if (s.length !== i.length)
    return !1;
  if (t.has(e) || t.has(r))
    return !0;
  t.add(e), t.add(r);
  for (const o of s) {
    const a = e[o];
    if (!i.includes(o))
      return !1;
    if (o !== "ref") {
      const u = r[o];
      if (Ne(a) && Ne(u) || ee(a) && ee(u) || Array.isArray(a) && Array.isArray(u) ? !Pe(a, u, t) : !Object.is(a, u))
        return !1;
    }
  }
  return !0;
}
var er = (e, r, t, s, i) => r ? {
  ...t[e],
  types: {
    ...t[e] && t[e].types ? t[e].types : {},
    [s]: i || !0
  }
} : {}, We = (e) => Array.isArray(e) ? e : [e], Vt = () => {
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
function tr(e, r) {
  const t = {};
  for (const s in e)
    if (e.hasOwnProperty(s)) {
      const i = e[s], o = r[s];
      if (i && ee(i) && o) {
        const a = tr(i, o);
        ee(a) && (t[s] = a);
      } else e[s] && (t[s] = o);
    }
  return t;
}
var ce = (e) => ee(e) && !Object.keys(e).length, Ft = (e) => e.type === "file", nt = (e) => {
  if (!Et)
    return !1;
  const r = e ? e.ownerDocument : 0;
  return e instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
}, rr = (e) => e.type === "select-multiple", xt = (e) => e.type === "radio", cs = (e) => xt(e) || Ke(e), ft = (e) => nt(e) && e.isConnected;
function ls(e, r) {
  const t = r.slice(0, -1).length;
  let s = 0;
  for (; s < t; )
    e = Q(e) ? s++ : e[r[s++]];
  return e;
}
function us(e) {
  for (const r in e)
    if (e.hasOwnProperty(r) && !Q(e[r]))
      return !1;
  return !0;
}
function Z(e, r) {
  const t = Array.isArray(r) ? r : at(r) ? [r] : wt(r), s = t.length === 1 ? e : ls(e, t), i = t.length - 1, o = t[i];
  return s && delete s[o], i !== 0 && (ee(s) && ce(s) || Array.isArray(s) && us(s)) && Z(e, t.slice(0, -1)), e;
}
var ds = (e) => {
  for (const r in e)
    if (ve(e[r]))
      return !0;
  return !1;
};
function sr(e) {
  return Array.isArray(e) || ee(e) && !ds(e);
}
function yt(e, r = {}) {
  for (const t in e) {
    const s = e[t];
    sr(s) ? (r[t] = Array.isArray(s) ? [] : {}, yt(s, r[t])) : Q(s) || (r[t] = !0);
  }
  return r;
}
function Le(e, r, t) {
  t || (t = yt(r));
  for (const s in e) {
    const i = e[s];
    if (sr(i))
      Q(r) || pt(t[s]) ? t[s] = yt(i, Array.isArray(i) ? [] : {}) : Le(i, le(r) ? {} : r[s], t[s]);
    else {
      const o = r[s];
      t[s] = !Pe(i, o);
    }
  }
  return t;
}
const It = {
  value: !1,
  isValid: !1
}, Nt = { value: !0, isValid: !0 };
var nr = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const r = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: r, isValid: !!r.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Q(e[0].attributes.value) ? Q(e[0].value) || e[0].value === "" ? Nt : { value: e[0].value, isValid: !0 } : Nt
    ) : It;
  }
  return It;
}, or = (e, { valueAsNumber: r, valueAsDate: t, setValueAs: s }) => Q(e) ? e : r ? e === "" ? NaN : e && +e : t && ge(e) ? new Date(e) : s ? s(e) : e;
const Mt = {
  isValid: !1,
  value: null
};
var ir = (e) => Array.isArray(e) ? e.reduce((r, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : r, Mt) : Mt;
function Dt(e) {
  const r = e.ref;
  return Ft(r) ? r.files : xt(r) ? ir(e.refs).value : rr(r) ? [...r.selectedOptions].map(({ value: t }) => t) : Ke(r) ? nr(e.refs).value : or(Q(r.value) ? e.ref.value : r.value, e);
}
var fs = (e, r, t, s) => {
  const i = {};
  for (const o of e) {
    const a = F(r, o);
    a && W(i, o, a._f);
  }
  return {
    criteriaMode: t,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: s
  };
}, ot = (e) => e instanceof RegExp, qe = (e) => Q(e) ? e : ot(e) ? e.source : ee(e) ? ot(e.value) ? e.value.source : e.value : e, Ut = (e) => ({
  isOnSubmit: !e || e === be.onSubmit,
  isOnBlur: e === be.onBlur,
  isOnChange: e === be.onChange,
  isOnAll: e === be.all,
  isOnTouch: e === be.onTouched
});
const Ot = "AsyncFunction";
var gs = (e) => !!e && !!e.validate && !!(ve(e.validate) && e.validate.constructor.name === Ot || ee(e.validate) && Object.values(e.validate).find((r) => r.constructor.name === Ot)), ms = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), Lt = (e, r, t) => !t && (r.watchAll || r.watch.has(e) || [...r.watch].some((s) => e.startsWith(s) && /^\.\w+/.test(e.slice(s.length))));
const Ge = (e, r, t, s) => {
  for (const i of t || Object.keys(e)) {
    const o = F(e, i);
    if (o) {
      const { _f: a, ...u } = o;
      if (a) {
        if (a.refs && a.refs[0] && r(a.refs[0], i) && !s)
          return !0;
        if (a.ref && r(a.ref, a.name) && !s)
          return !0;
        if (Ge(u, r))
          break;
      } else if (ee(u) && Ge(u, r))
        break;
    }
  }
};
function jt(e, r, t) {
  const s = F(e, t);
  if (s || at(t))
    return {
      error: s,
      name: t
    };
  const i = t.split(".");
  for (; i.length; ) {
    const o = i.join("."), a = F(r, o), u = F(e, o);
    if (a && !Array.isArray(a) && t !== o)
      return { name: t };
    if (u && u.type)
      return {
        name: o,
        error: u
      };
    if (u && u.root && u.root.type)
      return {
        name: `${o}.root`,
        error: u.root
      };
    i.pop();
  }
  return {
    name: t
  };
}
var hs = (e, r, t, s) => {
  t(e);
  const { name: i, ...o } = e;
  return ce(o) || Object.keys(o).length >= Object.keys(r).length || Object.keys(o).find((a) => r[a] === (!s || be.all));
}, ps = (e, r, t) => !e || !r || e === r || We(e).some((s) => s && (t ? s === r : s.startsWith(r) || r.startsWith(s))), ys = (e, r, t, s, i) => i.isOnAll ? !1 : !t && i.isOnTouch ? !(r || e) : (t ? s.isOnBlur : i.isOnBlur) ? !e : (t ? s.isOnChange : i.isOnChange) ? e : !0, vs = (e, r) => !St(F(e, r)).length && Z(e, r), bs = (e, r, t) => {
  const s = We(F(e, t));
  return W(s, "root", r[t]), W(e, t, s), e;
};
function $t(e, r, t = "validate") {
  if (ge(e) || Array.isArray(e) && e.every(ge) || Se(e) && !e)
    return {
      type: t,
      message: ge(e) ? e : "",
      ref: r
    };
}
var Oe = (e) => ee(e) && !ot(e) ? e : {
  value: e,
  message: ""
}, zt = async (e, r, t, s, i, o) => {
  const { ref: a, refs: u, required: p, maxLength: m, minLength: E, min: f, max: C, pattern: g, validate: b, name: _, valueAsNumber: R, mount: V } = e._f, x = F(t, _);
  if (!V || r.has(_))
    return {};
  const q = u ? u[0] : a, O = (A) => {
    i && q.reportValidity && (q.setCustomValidity(Se(A) ? "" : A || ""), q.reportValidity());
  }, L = {}, j = xt(a), H = Ke(a), k = j || H, D = (R || Ft(a)) && Q(a.value) && Q(x) || nt(a) && a.value === "" || x === "" || Array.isArray(x) && !x.length, U = er.bind(null, _, s, L), te = (A, N, G, Y = xe.maxLength, ae = xe.minLength) => {
    const se = A ? N : G;
    L[_] = {
      type: A ? Y : ae,
      message: se,
      ref: a,
      ...U(A ? Y : ae, se)
    };
  };
  if (o ? !Array.isArray(x) || !x.length : p && (!k && (D || le(x)) || Se(x) && !x || H && !nr(u).isValid || j && !ir(u).isValid)) {
    const { value: A, message: N } = ge(p) ? { value: !!p, message: p } : Oe(p);
    if (A && (L[_] = {
      type: xe.required,
      message: N,
      ref: q,
      ...U(xe.required, N)
    }, !s))
      return O(N), L;
  }
  if (!D && (!le(f) || !le(C))) {
    let A, N;
    const G = Oe(C), Y = Oe(f);
    if (!le(x) && !isNaN(x)) {
      const ae = a.valueAsNumber || x && +x;
      le(G.value) || (A = ae > G.value), le(Y.value) || (N = ae < Y.value);
    } else {
      const ae = a.valueAsDate || new Date(x), se = (X) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + X), ue = a.type == "time", M = a.type == "week";
      ge(G.value) && x && (A = ue ? se(x) > se(G.value) : M ? x > G.value : ae > new Date(G.value)), ge(Y.value) && x && (N = ue ? se(x) < se(Y.value) : M ? x < Y.value : ae < new Date(Y.value));
    }
    if ((A || N) && (te(!!A, G.message, Y.message, xe.max, xe.min), !s))
      return O(L[_].message), L;
  }
  if ((m || E) && !D && (ge(x) || o && Array.isArray(x))) {
    const A = Oe(m), N = Oe(E), G = !le(A.value) && x.length > +A.value, Y = !le(N.value) && x.length < +N.value;
    if ((G || Y) && (te(G, A.message, N.message), !s))
      return O(L[_].message), L;
  }
  if (g && !D && ge(x)) {
    const { value: A, message: N } = Oe(g);
    if (ot(A) && !x.match(A) && (L[_] = {
      type: xe.pattern,
      message: N,
      ref: a,
      ...U(xe.pattern, N)
    }, !s))
      return O(N), L;
  }
  if (b) {
    if (ve(b)) {
      const A = await b(x, t), N = $t(A, q);
      if (N && (L[_] = {
        ...N,
        ...U(xe.validate, N.message)
      }, !s))
        return O(N.message), L;
    } else if (ee(b)) {
      let A = {};
      for (const N in b) {
        if (!ce(A) && !s)
          break;
        const G = $t(await b[N](x, t), q, N);
        G && (A = {
          ...G,
          ...U(N, G.message)
        }, O(G.message), s && (L[_] = A));
      }
      if (!ce(A) && (L[_] = {
        ref: q,
        ...A
      }, !s))
        return L;
    }
  }
  return O(!0), L;
};
const Es = {
  mode: be.onSubmit,
  reValidateMode: be.onChange,
  shouldFocusError: !0
};
function Ss(e = {}) {
  let r = {
    ...Es,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: ve(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, s = {}, i = ee(r.defaultValues) || ee(r.values) ? re(r.defaultValues || r.values) || {} : {}, o = r.shouldUnregister ? {} : re(i), a = {
    action: !1,
    mount: !1,
    watch: !1,
    keepIsValid: !1
  }, u = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, p, m = 0;
  const E = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    ...E
  };
  let C = {
    ...f
  };
  const g = {
    array: Vt(),
    state: Vt()
  }, b = r.criteriaMode === be.all, _ = (n) => (c) => {
    clearTimeout(m), m = setTimeout(n, c);
  }, R = async (n) => {
    if (!a.keepIsValid && !r.disabled && (f.isValid || C.isValid || n)) {
      let c;
      r.resolver ? (c = ce((await k()).errors), V()) : c = await U(s, !0), c !== t.isValid && g.state.next({
        isValid: c
      });
    }
  }, V = (n, c) => {
    !r.disabled && (f.isValidating || f.validatingFields || C.isValidating || C.validatingFields) && ((n || Array.from(u.mount)).forEach((l) => {
      l && (c ? W(t.validatingFields, l, c) : Z(t.validatingFields, l));
    }), g.state.next({
      validatingFields: t.validatingFields,
      isValidating: !ce(t.validatingFields)
    }));
  }, x = (n, c = [], l, S, y = !0, h = !0) => {
    if (S && l && !r.disabled) {
      if (a.action = !0, h && Array.isArray(F(s, n))) {
        const T = l(F(s, n), S.argA, S.argB);
        y && W(s, n, T);
      }
      if (h && Array.isArray(F(t.errors, n))) {
        const T = l(F(t.errors, n), S.argA, S.argB);
        y && W(t.errors, n, T), vs(t.errors, n);
      }
      if ((f.touchedFields || C.touchedFields) && h && Array.isArray(F(t.touchedFields, n))) {
        const T = l(F(t.touchedFields, n), S.argA, S.argB);
        y && W(t.touchedFields, n, T);
      }
      (f.dirtyFields || C.dirtyFields) && (t.dirtyFields = Le(i, o)), g.state.next({
        name: n,
        isDirty: A(n, c),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      W(o, n, c);
  }, q = (n, c) => {
    W(t.errors, n, c), g.state.next({
      errors: t.errors
    });
  }, O = (n) => {
    t.errors = n, g.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, L = (n, c, l, S) => {
    const y = F(s, n);
    if (y) {
      const h = F(o, n, Q(l) ? F(i, n) : l);
      Q(h) || S && S.defaultChecked || c ? W(o, n, c ? h : Dt(y._f)) : Y(n, h), a.mount && !a.action && R();
    }
  }, j = (n, c, l, S, y) => {
    let h = !1, T = !1;
    const z = {
      name: n
    };
    if (!r.disabled) {
      if (!l || S) {
        (f.isDirty || C.isDirty) && (T = t.isDirty, t.isDirty = z.isDirty = A(), h = T !== z.isDirty);
        const $ = Pe(F(i, n), c);
        T = !!F(t.dirtyFields, n), $ ? Z(t.dirtyFields, n) : W(t.dirtyFields, n, !0), z.dirtyFields = t.dirtyFields, h = h || (f.dirtyFields || C.dirtyFields) && T !== !$;
      }
      if (l) {
        const $ = F(t.touchedFields, n);
        $ || (W(t.touchedFields, n, l), z.touchedFields = t.touchedFields, h = h || (f.touchedFields || C.touchedFields) && $ !== l);
      }
      h && y && g.state.next(z);
    }
    return h ? z : {};
  }, H = (n, c, l, S) => {
    const y = F(t.errors, n), h = (f.isValid || C.isValid) && Se(c) && t.isValid !== c;
    if (r.delayError && l ? (p = _(() => q(n, l)), p(r.delayError)) : (clearTimeout(m), p = null, l ? W(t.errors, n, l) : Z(t.errors, n)), (l ? !Pe(y, l) : y) || !ce(S) || h) {
      const T = {
        ...S,
        ...h && Se(c) ? { isValid: c } : {},
        errors: t.errors,
        name: n
      };
      t = {
        ...t,
        ...T
      }, g.state.next(T);
    }
  }, k = async (n) => (V(n, !0), await r.resolver(o, r.context, fs(n || u.mount, s, r.criteriaMode, r.shouldUseNativeValidation))), D = async (n) => {
    const { errors: c } = await k(n);
    if (V(n), n)
      for (const l of n) {
        const S = F(c, l);
        S ? W(t.errors, l, S) : Z(t.errors, l);
      }
    else
      t.errors = c;
    return c;
  }, U = async (n, c, l = {
    valid: !0
  }) => {
    for (const S in n) {
      const y = n[S];
      if (y) {
        const { _f: h, ...T } = y;
        if (h) {
          const z = u.array.has(h.name), $ = y._f && gs(y._f);
          $ && f.validatingFields && V([h.name], !0);
          const ie = await zt(y, u.disabled, o, b, r.shouldUseNativeValidation && !c, z);
          if ($ && f.validatingFields && V([h.name]), ie[h.name] && (l.valid = !1, c || e.shouldUseNativeValidation))
            break;
          !c && (F(ie, h.name) ? z ? bs(t.errors, ie, h.name) : W(t.errors, h.name, ie[h.name]) : Z(t.errors, h.name));
        }
        !ce(T) && await U(T, c, l);
      }
    }
    return l.valid;
  }, te = () => {
    for (const n of u.unMount) {
      const c = F(s, n);
      c && (c._f.refs ? c._f.refs.every((l) => !ft(l)) : !ft(c._f.ref)) && pe(n);
    }
    u.unMount = /* @__PURE__ */ new Set();
  }, A = (n, c) => !r.disabled && (n && c && W(o, n, c), !Pe(K(), i)), N = (n, c, l) => as(n, u, {
    ...a.mount ? o : Q(c) ? i : ge(n) ? { [n]: c } : c
  }, l, c), G = (n) => St(F(a.mount ? o : i, n, r.shouldUnregister ? F(i, n, []) : [])), Y = (n, c, l = {}) => {
    const S = F(s, n);
    let y = c;
    if (S) {
      const h = S._f;
      h && (!h.disabled && W(o, n, or(c, h)), y = nt(h.ref) && le(c) ? "" : c, rr(h.ref) ? [...h.ref.options].forEach((T) => T.selected = y.includes(T.value)) : h.refs ? Ke(h.ref) ? h.refs.forEach((T) => {
        (!T.defaultChecked || !T.disabled) && (Array.isArray(y) ? T.checked = !!y.find((z) => z === T.value) : T.checked = y === T.value || !!y);
      }) : h.refs.forEach((T) => T.checked = T.value === y) : Ft(h.ref) ? h.ref.value = "" : (h.ref.value = y, h.ref.type || g.state.next({
        name: n,
        values: re(o)
      })));
    }
    (l.shouldDirty || l.shouldTouch) && j(n, y, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && X(n);
  }, ae = (n, c, l) => {
    for (const S in c) {
      if (!c.hasOwnProperty(S))
        return;
      const y = c[S], h = n + "." + S, T = F(s, h);
      (u.array.has(n) || ee(y) || T && !T._f) && !Ne(y) ? ae(h, y, l) : Y(h, y, l);
    }
  }, se = (n, c, l = {}) => {
    const S = F(s, n), y = u.array.has(n), h = re(c);
    W(o, n, h), y ? (g.array.next({
      name: n,
      values: re(o)
    }), (f.isDirty || f.dirtyFields || C.isDirty || C.dirtyFields) && l.shouldDirty && g.state.next({
      name: n,
      dirtyFields: Le(i, o),
      isDirty: A(n, h)
    })) : S && !S._f && !le(h) ? ae(n, h, l) : Y(n, h, l), Lt(n, u) ? g.state.next({
      ...t,
      name: n,
      values: re(o)
    }) : g.state.next({
      name: a.mount ? n : void 0,
      values: re(o)
    });
  }, ue = async (n) => {
    a.mount = !0;
    const c = n.target;
    let l = c.name, S = !0;
    const y = F(s, l), h = ($) => {
      S = Number.isNaN($) || Ne($) && isNaN($.getTime()) || Pe($, F(o, l, $));
    }, T = Ut(r.mode), z = Ut(r.reValidateMode);
    if (y) {
      let $, ie;
      const Fe = c.type ? Dt(y._f) : es(n), d = n.type === At.BLUR || n.type === At.FOCUS_OUT, P = !ms(y._f) && !r.resolver && !F(t.errors, l) && !y._f.deps || ys(d, F(t.touchedFields, l), t.isSubmitted, z, T), w = Lt(l, u, d);
      W(o, l, Fe), d ? (!c || !c.readOnly) && (y._f.onBlur && y._f.onBlur(n), p && p(0)) : y._f.onChange && y._f.onChange(n);
      const B = j(l, Fe, d), de = !ce(B) || w;
      if (!d && g.state.next({
        name: l,
        type: n.type,
        values: re(o)
      }), P)
        return (f.isValid || C.isValid) && (r.mode === "onBlur" ? d && R() : d || R()), de && g.state.next({ name: l, ...w ? {} : B });
      if (!d && w && g.state.next({ ...t }), r.resolver) {
        const { errors: oe } = await k([l]);
        if (V([l]), h(Fe), S) {
          const he = jt(t.errors, s, l), Ae = jt(oe, s, he.name || l);
          $ = Ae.error, l = Ae.name, ie = ce(oe);
        }
      } else
        V([l], !0), $ = (await zt(y, u.disabled, o, b, r.shouldUseNativeValidation))[l], V([l]), h(Fe), S && ($ ? ie = !1 : (f.isValid || C.isValid) && (ie = await U(s, !0)));
      S && (y._f.deps && (!Array.isArray(y._f.deps) || y._f.deps.length > 0) && X(y._f.deps), H(l, ie, $, B));
    }
  }, M = (n, c) => {
    if (F(t.errors, c) && n.focus)
      return n.focus(), 1;
  }, X = async (n, c = {}) => {
    let l, S;
    const y = We(n);
    if (r.resolver) {
      const h = await D(Q(n) ? n : y);
      l = ce(h), S = n ? !y.some((T) => F(h, T)) : l;
    } else n ? (S = (await Promise.all(y.map(async (h) => {
      const T = F(s, h);
      return await U(T && T._f ? { [h]: T } : T);
    }))).every(Boolean), !(!S && !t.isValid) && R()) : S = l = await U(s);
    return g.state.next({
      ...!ge(n) || (f.isValid || C.isValid) && l !== t.isValid ? {} : { name: n },
      ...r.resolver || !n ? { isValid: l } : {},
      errors: t.errors
    }), c.shouldFocus && !S && Ge(s, M, n ? y : u.mount), S;
  }, K = (n, c) => {
    let l = {
      ...a.mount ? o : i
    };
    return c && (l = tr(c.dirtyFields ? t.dirtyFields : t.touchedFields, l)), Q(n) ? l : ge(n) ? F(l, n) : n.map((S) => F(l, S));
  }, ne = (n, c) => ({
    invalid: !!F((c || t).errors, n),
    isDirty: !!F((c || t).dirtyFields, n),
    error: F((c || t).errors, n),
    isValidating: !!F(t.validatingFields, n),
    isTouched: !!F((c || t).touchedFields, n)
  }), J = (n) => {
    n && We(n).forEach((c) => Z(t.errors, c)), g.state.next({
      errors: n ? t.errors : {}
    });
  }, De = (n, c, l) => {
    const S = (F(s, n, { _f: {} })._f || {}).ref, y = F(t.errors, n) || {}, { ref: h, message: T, type: z, ...$ } = y;
    W(t.errors, n, {
      ...$,
      ...c,
      ref: S
    }), g.state.next({
      name: n,
      errors: t.errors,
      isValid: !1
    }), l && l.shouldFocus && S && S.focus && S.focus();
  }, Ye = (n, c) => ve(n) ? g.state.subscribe({
    next: (l) => "values" in l && n(N(void 0, c), l)
  }) : N(n, c, !0), Qe = (n) => g.state.subscribe({
    next: (c) => {
      ps(n.name, c.name, n.exact) && hs(c, n.formState || f, lt, n.reRenderRoot) && n.callback({
        values: { ...o },
        ...t,
        ...c,
        defaultValues: i
      });
    }
  }).unsubscribe, Xe = (n) => (a.mount = !0, C = {
    ...C,
    ...n.formState
  }, Qe({
    ...n,
    formState: {
      ...E,
      ...n.formState
    }
  })), pe = (n, c = {}) => {
    for (const l of n ? We(n) : u.mount)
      u.mount.delete(l), u.array.delete(l), c.keepValue || (Z(s, l), Z(o, l)), !c.keepError && Z(t.errors, l), !c.keepDirty && Z(t.dirtyFields, l), !c.keepTouched && Z(t.touchedFields, l), !c.keepIsValidating && Z(t.validatingFields, l), !r.shouldUnregister && !c.keepDefaultValue && Z(i, l);
    g.state.next({
      values: re(o)
    }), g.state.next({
      ...t,
      ...c.keepDirty ? { isDirty: A() } : {}
    }), !c.keepIsValid && R();
  }, me = ({ disabled: n, name: c }) => {
    (Se(n) && a.mount || n || u.disabled.has(c)) && (n ? u.disabled.add(c) : u.disabled.delete(c));
  }, Ee = (n, c = {}) => {
    let l = F(s, n);
    const S = Se(c.disabled) || Se(r.disabled);
    return W(s, n, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: n } },
        name: n,
        mount: !0,
        ...c
      }
    }), u.mount.add(n), l ? me({
      disabled: Se(c.disabled) ? c.disabled : r.disabled,
      name: n
    }) : L(n, !0, c.value), {
      ...S ? { disabled: c.disabled || r.disabled } : {},
      ...r.progressive ? {
        required: !!c.required,
        min: qe(c.min),
        max: qe(c.max),
        minLength: qe(c.minLength),
        maxLength: qe(c.maxLength),
        pattern: qe(c.pattern)
      } : {},
      name: n,
      onChange: ue,
      onBlur: ue,
      ref: (y) => {
        if (y) {
          Ee(n, c), l = F(s, n);
          const h = Q(y.value) && y.querySelectorAll && y.querySelectorAll("input,select,textarea")[0] || y, T = cs(h), z = l._f.refs || [];
          if (T ? z.find(($) => $ === h) : h === l._f.ref)
            return;
          W(s, n, {
            _f: {
              ...l._f,
              ...T ? {
                refs: [
                  ...z.filter(ft),
                  h,
                  ...Array.isArray(F(i, n)) ? [{}] : []
                ],
                ref: { type: h.type, name: n }
              } : { ref: h }
            }
          }), L(n, !1, void 0, h);
        } else
          l = F(s, n, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || c.shouldUnregister) && !(rs(u.array, n) && a.action) && u.unMount.add(n);
      }
    };
  }, Ue = () => r.shouldFocusError && Ge(s, M, u.mount), we = (n) => {
    Se(n) && (g.state.next({ disabled: n }), Ge(s, (c, l) => {
      const S = F(s, l);
      S && (c.disabled = S._f.disabled || n, Array.isArray(S._f.refs) && S._f.refs.forEach((y) => {
        y.disabled = S._f.disabled || n;
      }));
    }, 0, !1));
  }, je = (n, c) => async (l) => {
    let S;
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let y = re(o);
    if (g.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: h, values: T } = await k();
      V(), t.errors = h, y = re(T);
    } else
      await U(s);
    if (u.disabled.size)
      for (const h of u.disabled)
        Z(y, h);
    if (Z(t.errors, "root"), ce(t.errors)) {
      g.state.next({
        errors: {}
      });
      try {
        await n(y, l);
      } catch (h) {
        S = h;
      }
    } else
      c && await c({ ...t.errors }, l), Ue(), setTimeout(Ue);
    if (g.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ce(t.errors) && !S,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), S)
      throw S;
  }, ct = (n, c = {}) => {
    F(s, n) && (Q(c.defaultValue) ? se(n, re(F(i, n))) : (se(n, c.defaultValue), W(i, n, re(c.defaultValue))), c.keepTouched || Z(t.touchedFields, n), c.keepDirty || (Z(t.dirtyFields, n), t.isDirty = c.defaultValue ? A(n, re(F(i, n))) : A()), c.keepError || (Z(t.errors, n), f.isValid && R()), g.state.next({ ...t }));
  }, $e = (n, c = {}) => {
    const l = n ? re(n) : i, S = re(l), y = ce(n), h = y ? i : S;
    if (c.keepDefaultValues || (i = l), !c.keepValues) {
      if (c.keepDirtyValues) {
        const T = /* @__PURE__ */ new Set([
          ...u.mount,
          ...Object.keys(Le(i, o))
        ]);
        for (const z of Array.from(T)) {
          const $ = F(t.dirtyFields, z), ie = F(o, z), Fe = F(h, z);
          $ && !Q(ie) ? W(h, z, ie) : !$ && !Q(Fe) && se(z, Fe);
        }
      } else {
        if (Et && Q(n))
          for (const T of u.mount) {
            const z = F(s, T);
            if (z && z._f) {
              const $ = Array.isArray(z._f.refs) ? z._f.refs[0] : z._f.ref;
              if (nt($)) {
                const ie = $.closest("form");
                if (ie) {
                  ie.reset();
                  break;
                }
              }
            }
          }
        if (c.keepFieldsRef)
          for (const T of u.mount)
            se(T, F(h, T));
        else
          s = {};
      }
      o = r.shouldUnregister ? c.keepDefaultValues ? re(i) : {} : re(h), g.array.next({
        values: { ...h }
      }), g.state.next({
        values: { ...h }
      });
    }
    u = {
      mount: c.keepDirtyValues ? u.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !f.isValid || !!c.keepIsValid || !!c.keepDirtyValues || !r.shouldUnregister && !ce(h), a.watch = !!r.shouldUnregister, a.keepIsValid = !!c.keepIsValid, a.action = !1, c.keepErrors || (t.errors = {}), g.state.next({
      submitCount: c.keepSubmitCount ? t.submitCount : 0,
      isDirty: y ? !1 : c.keepDirty ? t.isDirty : !!(c.keepDefaultValues && !Pe(n, i)),
      isSubmitted: c.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: y ? {} : c.keepDirtyValues ? c.keepDefaultValues && o ? Le(i, o) : t.dirtyFields : c.keepDefaultValues && n ? Le(i, n) : c.keepDirty ? t.dirtyFields : {},
      touchedFields: c.keepTouched ? t.touchedFields : {},
      errors: c.keepErrors ? t.errors : {},
      isSubmitSuccessful: c.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: i
    });
  }, Je = (n, c) => $e(ve(n) ? n(o) : n, { ...r.resetOptions, ...c }), Ze = (n, c = {}) => {
    const l = F(s, n), S = l && l._f;
    if (S) {
      const y = S.refs ? S.refs[0] : S.ref;
      y.focus && setTimeout(() => {
        y.focus(), c.shouldSelect && ve(y.select) && y.select();
      });
    }
  }, lt = (n) => {
    t = {
      ...t,
      ...n
    };
  }, ze = {
    control: {
      register: Ee,
      unregister: pe,
      getFieldState: ne,
      handleSubmit: je,
      setError: De,
      _subscribe: Qe,
      _runSchema: k,
      _updateIsValidating: V,
      _focusError: Ue,
      _getWatch: N,
      _getDirty: A,
      _setValid: R,
      _setFieldArray: x,
      _setDisabledField: me,
      _setErrors: O,
      _getFieldArray: G,
      _reset: $e,
      _resetDefaultValues: () => ve(r.defaultValues) && r.defaultValues().then((n) => {
        Je(n, r.resetOptions), g.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: te,
      _disableForm: we,
      _subjects: g,
      _proxyFormState: f,
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
        return u;
      },
      set _names(n) {
        u = n;
      },
      get _formState() {
        return t;
      },
      get _options() {
        return r;
      },
      set _options(n) {
        r = {
          ...r,
          ...n
        };
      }
    },
    subscribe: Xe,
    trigger: X,
    register: Ee,
    handleSubmit: je,
    watch: Ye,
    setValue: se,
    getValues: K,
    reset: Je,
    resetField: ct,
    clearErrors: J,
    unregister: pe,
    setError: De,
    setFocus: Ze,
    getFieldState: ne
  };
  return {
    ...ze,
    formControl: ze
  };
}
function ws(e = {}) {
  const r = fe.useRef(void 0), t = fe.useRef(void 0), [s, i] = fe.useState({
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
  if (!r.current)
    if (e.formControl)
      r.current = {
        ...e.formControl,
        formState: s
      }, e.defaultValues && !ve(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: a, ...u } = Ss(e);
      r.current = {
        ...u,
        formState: s
      };
    }
  const o = r.current.control;
  return o._options = e, is(() => {
    const a = o._subscribe({
      formState: o._proxyFormState,
      callback: () => i({ ...o._formState }),
      reRenderRoot: !0
    });
    return i((u) => ({
      ...u,
      isReady: !0
    })), o._formState.isReady = !0, a;
  }, [o]), fe.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), fe.useEffect(() => {
    e.mode && (o._options.mode = e.mode), e.reValidateMode && (o._options.reValidateMode = e.reValidateMode);
  }, [o, e.mode, e.reValidateMode]), fe.useEffect(() => {
    e.errors && (o._setErrors(e.errors), o._focusError());
  }, [o, e.errors]), fe.useEffect(() => {
    e.shouldUnregister && o._subjects.state.next({
      values: o._getWatch()
    });
  }, [o, e.shouldUnregister]), fe.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== s.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, s.isDirty]), fe.useEffect(() => {
    var a;
    e.values && !Pe(e.values, t.current) ? (o._reset(e.values, {
      keepFieldsRef: !0,
      ...o._options.resetOptions
    }), !((a = o._options.resetOptions) === null || a === void 0) && a.keepIsValid || o._setValid(), t.current = e.values, i((u) => ({ ...u }))) : o._resetDefaultValues();
  }, [o, e.values]), fe.useEffect(() => {
    o._state.mount || (o._setValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), r.current.formState = os(s, o), r.current;
}
const Bt = (e, r, t) => {
  if (e && "reportValidity" in e) {
    const s = F(t, r);
    e.setCustomValidity(s && s.message || ""), e.reportValidity();
  }
}, ar = (e, r) => {
  for (const t in r.fields) {
    const s = r.fields[t];
    s && s.ref && "reportValidity" in s.ref ? Bt(s.ref, t, e) : s.refs && s.refs.forEach((i) => Bt(i, t, e));
  }
}, Fs = (e, r) => {
  r.shouldUseNativeValidation && ar(e, r);
  const t = {};
  for (const s in e) {
    const i = F(r.fields, s), o = Object.assign(e[s] || {}, { ref: i && i.ref });
    if (xs(r.names || Object.keys(e), s)) {
      const a = Object.assign({}, F(t, s));
      W(a, "root", o), W(t, s, a);
    } else W(t, s, o);
  }
  return t;
}, xs = (e, r) => e.some((t) => t.startsWith(r + "."));
var _s = function(e, r) {
  for (var t = {}; e.length; ) {
    var s = e[0], i = s.code, o = s.message, a = s.path.join(".");
    if (!t[a]) if ("unionErrors" in s) {
      var u = s.unionErrors[0].errors[0];
      t[a] = { message: u.message, type: u.code };
    } else t[a] = { message: o, type: i };
    if ("unionErrors" in s && s.unionErrors.forEach(function(E) {
      return E.errors.forEach(function(f) {
        return e.push(f);
      });
    }), r) {
      var p = t[a].types, m = p && p[s.code];
      t[a] = er(a, r, t, i, m ? [].concat(m, s.message) : s.message);
    }
    e.shift();
  }
  return t;
}, ks = function(e, r, t) {
  return t === void 0 && (t = {}), function(s, i, o) {
    try {
      return Promise.resolve(function(a, u) {
        try {
          var p = Promise.resolve(e[t.mode === "sync" ? "parse" : "parseAsync"](s, r)).then(function(m) {
            return o.shouldUseNativeValidation && ar({}, o), { errors: {}, values: t.raw ? s : m };
          });
        } catch (m) {
          return u(m);
        }
        return p && p.then ? p.then(void 0, u) : p;
      }(0, function(a) {
        if (function(u) {
          return Array.isArray(u?.errors);
        }(a)) return { values: {}, errors: Fs(_s(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
};
const Ts = Me`
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
function cr() {
  const e = it(), { assistantProperties: r } = Kt(), t = bt(), s = xr(), { selectThread: i, setNewlyCreatedThreadId: o } = _r(), [a, { loading: u, error: p }] = Jt(Ts);
  return { handleProcessFiles: async (E, f) => {
    if (!r?.id)
      return console.error("Assistant ID is required to process files"), !1;
    if (E.length === 0)
      return !1;
    const C = e;
    if (!C)
      return console.error("ProcessFiles requires an access token"), _e.error("Sessão inválida. Faça login novamente."), !1;
    const g = f ?? t ?? void 0;
    try {
      const b = await a({
        variables: {
          assistantId: r.id,
          fileIds: E,
          threadId: g,
          token: C
        },
        context: {
          headers: {
            authorization: `Bearer ${C}`,
            ...s?.id && { "x-user-id": s.id }
          }
        }
      });
      if (!b.data?.processFiles)
        return console.error("Error processing files: response.data is null", b), _e.error("Erro ao processar arquivos: resposta vazia", {
          duration: 2e3
        }), !1;
      const { success: _, threadId: R } = b.data.processFiles;
      return R && (i(R), o(R)), _ ? !0 : (console.warn(
        "File processing returned success=false:",
        b.data.processFiles
      ), !1);
    } catch (b) {
      const _ = b;
      return console.error("Error processing files:", b), _e.error(_?.message || "Erro ao processar arquivos", {
        duration: 2e3
      }), !1;
    }
  }, loading: u, error: p };
}
const Rs = Me`
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
function lr() {
  const e = it(), [r, { data: t, loading: s, error: i }] = Jt(Rs, {
    context: {
      headers: {
        "apollo-require-preflight": "true"
      }
    }
  });
  return { handleUploadFiles: async (a, u) => {
    try {
      return (await r({
        variables: {
          files: a,
          token: e,
          scope: u?.scope
        }
      })).data?.uploadFile.page || [];
    } catch (p) {
      throw console.error("Error uploading files:", p), p;
    }
  }, data: t, loading: s, error: i };
}
const Cs = { VITE_API_BFF_URL: "https://api.dsv.pas.app.br/" }, Ps = Cs;
async function ur(e, r = {}) {
  const { token: t, hostname: s, headers: i, ...o } = r, a = kr(), u = Ps.VITE_API_BFF_URL, p = e.startsWith("http") ? e : `${u.replace(/\/$/, "")}/${e.replace(/^\//, "")}`, m = s ?? a.hostname ?? "embed-host";
  !s && !a.hostname && console.warn(
    '⚠️ hostname attribute not provided to <pas-assistant-embedded>. Using fallback "embed-host" for HTTP requests.'
  );
  const E = {
    ...i || {},
    "Content-Type": "application/json",
    "accept-language": Tr.language,
    "x-hostname": m,
    ...a.apiKey ? { "x-api-key": a.apiKey } : {},
    ...a.userId ? { "x-user-id": a.userId } : {},
    ...t ? { Authorization: `Bearer ${t}` } : {}
  };
  return fetch(p, {
    ...o,
    headers: E
  });
}
const As = 350, Vs = 2e3;
function Is(e) {
  const r = Wt(), t = e.join(",");
  return `${r.replace(/\/$/, "")}/progress?ids=${encodeURIComponent(t)}&entityType=file`;
}
async function Ns(e, r) {
  if (!e.body)
    throw new Error("Response body not readable");
  const t = e.body.getReader(), s = new TextDecoder();
  let i = "";
  for (; ; ) {
    const { value: o, done: a } = await t.read();
    if (a) break;
    i += s.decode(o, { stream: !0 });
    const u = i.split(`
`);
    i = u.pop() ?? "";
    for (const p of u) {
      const m = p.trim();
      if (!m.startsWith("data:")) continue;
      const E = m.replace(/^data:\s*/, "").trim();
      if (E && !(E === "[DONE]" || E === "[TIMEOUT]"))
        try {
          const f = JSON.parse(E);
          if (f.entityType !== "file") continue;
          switch (f.progressType) {
            case "PROCESSING_START":
              r.onFileProcessingStart?.(f.id, f);
              break;
            case "PROCESSING_PROGRESS":
              r.onFileProcessingProgress?.(f.id, f);
              break;
            case "PROCESSING_COMPLETE":
              r.onFileProcessingComplete?.(f.id, f);
              break;
            case "PROCESSING_ERROR":
              r.onFileProcessingError?.(
                f.id,
                f.error || "Unknown error",
                f
              );
              break;
          }
        } catch (f) {
          console.warn("[useFileProgressSSE] Failed to parse event:", p, f);
        }
    }
  }
}
function Ms(e) {
  const {
    fileIds: r,
    onFileProcessingStart: t,
    onFileProcessingProgress: s,
    onFileProcessingComplete: i,
    onFileProcessingError: o,
    enabled: a = !0,
    fetchFileStatus: u
  } = e, p = it(), m = v.useRef(null), E = v.useRef(null), f = v.useRef(null), [C, g] = v.useState(0), b = v.useRef(null), _ = v.useRef(null), R = v.useMemo(
    () => r?.length ? [...r].sort().join(",") : "",
    [r]
  ), V = v.useRef({
    onFileProcessingStart: t,
    onFileProcessingProgress: s,
    onFileProcessingComplete: i,
    onFileProcessingError: o
  });
  v.useEffect(() => {
    V.current = {
      onFileProcessingStart: t,
      onFileProcessingProgress: s,
      onFileProcessingComplete: i,
      onFileProcessingError: o
    };
  }, [
    t,
    s,
    i,
    o
  ]), v.useEffect(() => {
    if (!a || !r || r.length === 0 || !p) {
      _.current && (clearTimeout(_.current), _.current = null), b.current = null, f.current = null, E.current && (clearTimeout(E.current), E.current = null), m.current && (m.current.abort(), m.current = null);
      return;
    }
    if (b.current !== R && (b.current = null), !(f.current === R && (E.current || m.current)))
      return E.current && (clearTimeout(E.current), E.current = null), f.current = R, E.current = setTimeout(() => {
        E.current = null;
        const x = [...r].sort(), q = { current: /* @__PURE__ */ new Set() }, O = new AbortController();
        m.current = O, (async () => {
          try {
            const j = await ur(
              Is(x),
              {
                method: "GET",
                token: p,
                signal: O.signal
              }
            );
            if (!j.ok)
              throw new Error(`HTTP ${j.status}: ${j.statusText}`);
            await Ns(j, {
              onFileProcessingStart: V.current.onFileProcessingStart,
              onFileProcessingProgress: V.current.onFileProcessingProgress,
              onFileProcessingComplete: (H, k) => {
                q.current.add(H), V.current.onFileProcessingComplete?.(H, k);
              },
              onFileProcessingError: (H, k, D) => {
                q.current.add(H), V.current.onFileProcessingError?.(H, k, D);
              }
            });
          } catch (j) {
            if (j instanceof Error && j.name === "AbortError") {
              f.current = null, b.current !== R && (b.current = R, _.current = setTimeout(() => {
                _.current = null, g((k) => k + 1);
              }, Vs));
              return;
            }
            console.error("[useFileProgressSSE] Error connecting to SSE:", j);
          } finally {
            if (f.current = null, O.signal.aborted) return;
            const j = q.current, H = x.filter((k) => !j.has(k));
            H.length > 0 && u && u(H).then((k) => {
              H.forEach((D) => {
                const U = k.get(D);
                U === "success" ? V.current.onFileProcessingComplete?.(D, {
                  progressType: "PROCESSING_COMPLETE",
                  id: D,
                  entityType: "file",
                  stage: "completed",
                  progress: 1,
                  timestamp: (/* @__PURE__ */ new Date()).toISOString()
                }) : U === "error" && V.current.onFileProcessingError?.(
                  D,
                  "Processing failed",
                  {
                    progressType: "PROCESSING_ERROR",
                    id: D,
                    entityType: "file",
                    stage: "error",
                    progress: 0,
                    error: "Processing failed",
                    timestamp: (/* @__PURE__ */ new Date()).toISOString()
                  }
                );
              });
            }).catch(() => {
            });
          }
        })();
      }, As), () => {
        _.current && (clearTimeout(_.current), _.current = null), E.current && (clearTimeout(E.current), E.current = null), m.current && (m.current.abort(), m.current = null, f.current = null);
      };
  }, [R, a, p, C]);
}
const gt = {
  container: et({
    base: "flex items-center gap-2"
  }),
  fileInput: et({
    base: "hidden"
  }),
  uploadButton: et({
    base: "flex items-center justify-center rounded-full mb-0.5"
  }),
  uploadIcon: et({
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
}, mt = 4, dr = 2.5 * 1024 * 1024, fr = [
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
function Ds(e) {
  return fr.includes(e);
}
const gr = (e) => e.type.startsWith("image/") ? URL.createObjectURL(e) : "";
function Us({
  onFilesChange: e,
  disabled: r = !1,
  selectedFiles: t,
  onSelectedFilesChange: s
}) {
  const [i, o] = v.useState([]), [a, u] = v.useState(/* @__PURE__ */ new Map()), p = v.useRef(null), { handleUploadFiles: m, loading: E } = lr(), { handleProcessFiles: f } = cr(), C = bt(), g = t ?? i, b = v.useMemo(
    () => g.filter((k) => k.status === "processing").map((k) => k.id),
    [g]
  ), _ = v.useCallback(
    (k) => {
      s ? s(k) : o(k);
    },
    [s]
  ), R = v.useCallback(
    (k) => {
      _(
        (D) => D.map(
          (U) => U.id === k ? { ...U, status: "success" } : U
        )
      );
    },
    [_]
  ), V = v.useCallback(
    (k, D) => {
      _(
        (U) => U.map(
          (te) => te.id === k ? { ...te, status: "error", errorMessage: D } : te
        )
      );
    },
    [_]
  );
  Ms({
    fileIds: b,
    enabled: b.length > 0,
    onFileProcessingComplete: R,
    onFileProcessingError: V
  }), v.useEffect(() => {
    !s && t && o(t);
  }, [t, s]), v.useEffect(() => () => {
    a.forEach((k) => {
      URL.revokeObjectURL(k);
    });
  }, [a]);
  const x = async (k, D) => {
    try {
      const U = await m([k], { scope: "chat" });
      if (!U || U.length === 0)
        throw new Error("Upload response is empty");
      if (_((A) => A.map(
        (N) => N.tempId === D.tempId ? {
          ...U[0],
          originalName: D.originalName,
          status: "processing",
          tempId: D.tempId,
          previewUrl: D.previewUrl
        } : N
      )), !await f(
        [U[0].id],
        C
      ))
        throw new Error(
          ye("chat.upload.processingError", {
            defaultValue: "Erro ao processar arquivo"
          })
        );
      return _(
        (A) => A.map(
          (N) => N.id === U[0].id ? { ...N, status: "success", errorMessage: void 0 } : N
        )
      ), U[0];
    } catch (U) {
      const te = U instanceof Error ? U.message : ye("common.uploadingStatus.error", {
        defaultValue: "Erro ao fazer upload"
      });
      return _((A) => A.map(
        (N) => N.tempId === D.tempId ? {
          ...N,
          status: "error",
          errorMessage: te
        } : N
      )), _e.error(
        te || ye("chat.upload.error.description", {
          defaultValue: "Erro ao fazer upload"
        })
      ), null;
    }
  }, q = async (k) => {
    if (!k || k.length === 0) return;
    const D = Array.from(k), U = g.length, te = mt - U;
    D.length > te && (_e.error(
      ye("chat.upload.maxFilesExceeded", {
        defaultValue: "Máximo de 4 arquivos permitidos"
      })
    ), D.splice(te));
    const A = [];
    if (D.forEach((M) => {
      M.size > dr ? _e.error(ye("chat.upload.fileSizeExceeded")) : Ds(M.type) ? A.push(M) : _e.error(
        ye("chat.upload.unsupportedFormat", {
          defaultValue: "Formato de arquivo não suportado. Envie apenas PDF ou imagem (PNG, JPG, JPEG)."
        })
      );
    }), A.length === 0) return;
    const N = new Set(g.map((M) => M.originalName)), G = A.filter(
      (M) => !N.has(M.name)
    );
    if (G.length === 0) {
      _e.error(
        ye("chat.upload.fileAlreadyExists", {
          defaultValue: "Um ou mais arquivos já foram adicionados"
        })
      );
      return;
    }
    const Y = G.map((M) => {
      const X = gr(M);
      return X && u((K) => new Map(K).set(M.name, X)), {
        id: crypto.randomUUID(),
        tempId: crypto.randomUUID(),
        filename: M.name,
        originalName: M.name,
        contentMimeType: M.type,
        contentLength: M.size,
        status: "uploading",
        previewUrl: X
      };
    }), ae = new Set(g.map((M) => M.id)), se = new Set(g.map((M) => M.originalName)), ue = Y.filter(
      (M) => !ae.has(M.id) && !se.has(M.originalName)
    );
    ue.length > 0 && (s ? s((M) => {
      const X = new Set(M.map((J) => J.id)), K = new Set(M.map((J) => J.originalName)), ne = ue.filter(
        (J) => !X.has(J.id) && !K.has(J.originalName)
      );
      return [...M, ...ne];
    }) : o((M) => {
      const X = new Set(M.map((J) => J.id)), K = new Set(M.map((J) => J.originalName)), ne = ue.filter(
        (J) => !X.has(J.id) && !K.has(J.originalName)
      );
      return [...M, ...ne];
    }));
    try {
      const M = [];
      for (const X of Y) {
        const K = G.find(
          (J) => J.name === X.originalName
        );
        if (!K) continue;
        const ne = await x(K, X);
        ne && M.push({
          id: ne.id,
          filename: ne.filename,
          contentMimeType: ne.contentMimeType,
          contentLength: ne.contentLength
        });
      }
      e(M);
    } catch (M) {
      const X = M instanceof Error ? M.message : ye("common.uploadingStatus.error", {
        defaultValue: "Erro ao fazer upload"
      });
      _(
        (K) => K.map((ne) => Y.some((De) => De.tempId === ne.tempId) ? { ...ne, status: "error", errorMessage: X } : ne)
      ), _e.error(
        X || ye("chat.upload.error.description", {
          defaultValue: "Erro ao fazer upload"
        })
      );
      return;
    }
  }, O = (k) => {
    k.target.files && (q(k.target.files), p.current && (p.current.value = ""));
  }, L = () => {
    r || E || g.length >= mt || p.current?.click();
  }, j = g.length >= mt, H = r || E || j;
  return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    /* @__PURE__ */ I.jsx(
      "input",
      {
        ref: p,
        type: "file",
        multiple: !0,
        onChange: O,
        className: gt.fileInput(),
        accept: fr.join(","),
        disabled: H,
        "data-testid": "chat-file-input"
      }
    ),
    /* @__PURE__ */ I.jsx("div", { className: gt.container(), children: /* @__PURE__ */ I.jsx(
      Re,
      {
        disabled: H,
        className: gt.uploadButton(),
        icon: /* @__PURE__ */ I.jsx(jr, { className: "size-4", "aria-hidden": !0 }),
        variant: "secondary",
        size: "icon",
        "data-testid": "chat-upload-button",
        "aria-label": ye("home.prompt.actions.upload"),
        onClick: L
      }
    ) })
  ] });
}
const Os = 350;
function Ls(e, r) {
  const t = Wt(), s = e.join(",");
  let i = t.replace(/\/$/, "");
  return i = i.replace(/\/graphql$/, ""), `${i}/progress?ids=${encodeURIComponent(s)}&entityType=${encodeURIComponent(r)}`;
}
async function js(e, r) {
  if (!e.body)
    throw new Error("Response body not readable");
  const t = e.body.getReader(), s = new TextDecoder();
  let i = "";
  for (; ; ) {
    const { value: o, done: a } = await t.read();
    if (a) break;
    i += s.decode(o, { stream: !0 });
    const u = i.split(`
`);
    i = u.pop() ?? "";
    for (const p of u) {
      const m = p.trim();
      if (!m.startsWith("data:")) continue;
      const E = m.replace(/^data:\s*/, "").trim();
      if (E && !(E === "[DONE]" || E === "[TIMEOUT]"))
        try {
          const f = JSON.parse(E);
          switch (console.log(
            `[useProgressSSE] Event received: id=${f.id}, progressType=${f.progressType}, stage=${f.stage}, progress=${f.progress}, type=${f.type || "N/A"}`
          ), f.progressType) {
            case "PROCESSING_START":
              console.log(
                `[useProgressSSE] Calling onProcessingStart callback: id=${f.id}`
              ), r.onProcessingStart?.(f.id, f);
              break;
            case "PROCESSING_PROGRESS":
              console.log(
                `[useProgressSSE] Calling onProcessingProgress callback: id=${f.id}, progress=${f.progress}`
              ), r.onProcessingProgress?.(f.id, f);
              break;
            case "PROCESSING_COMPLETE":
              console.log(
                `[useProgressSSE] Calling onProcessingComplete callback: id=${f.id}`
              ), r.onProcessingComplete?.(f.id, f);
              break;
            case "PROCESSING_ERROR":
              console.log(
                `[useProgressSSE] Calling onProcessingError callback: id=${f.id}, error=${f.error || "Unknown error"}`
              ), r.onProcessingError?.(
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
function $s(e) {
  const {
    ids: r,
    entityType: t,
    onProcessingStart: s,
    onProcessingProgress: i,
    onProcessingComplete: o,
    onProcessingError: a,
    enabled: u = !0
  } = e, p = it(), m = v.useRef(null), E = v.useRef(null), f = v.useRef(null), C = v.useRef(null), g = v.useRef({
    onProcessingStart: s,
    onProcessingProgress: i,
    onProcessingComplete: o,
    onProcessingError: a
  });
  v.useEffect(() => {
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
  const b = v.useMemo(() => !r || r.length === 0 ? "" : [...r].sort().join(","), [r]), _ = v.useMemo(() => !u || !b || !p ? null : `${b}:${t}`, [b, t, u, p]);
  v.useEffect(() => {
    if (!u || !r || r.length === 0 || !p) {
      E.current && (clearTimeout(E.current), E.current = null), (!u || !b) && C.current?.entityType === t && (m.current && (m.current.abort(), m.current = null), C.current = null);
      return;
    }
    const R = C.current;
    if (!(R && R.idsKey === b && R.entityType === t && m.current && !m.current.signal.aborted) && !(f.current === b && (E.current || m.current)))
      return E.current && (clearTimeout(E.current), E.current = null), f.current = b, E.current = setTimeout(() => {
        E.current = null, m.current && R?.entityType === t && (m.current.abort(), m.current = null);
        const V = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
        C.current = {
          idsKey: b,
          entityType: t,
          effectId: V
        };
        const x = new AbortController();
        m.current = x, (async () => {
          try {
            const O = Ls(r, t);
            console.log(
              `[useProgressSSE] Starting SSE connection: endpoint=${O}, ids=${r.join(",")}, entityType=${t}`
            );
            const L = await ur(O, {
              method: "GET",
              token: p,
              signal: x.signal,
              headers: {
                "Content-Type": ""
              }
            });
            if (!L.ok)
              throw new Error(`HTTP ${L.status}: ${L.statusText}`);
            console.log(
              `[useProgressSSE] SSE connection established: ids=${r.join(",")}, entityType=${t}`
            ), await js(L, {
              onProcessingStart: g.current.onProcessingStart,
              onProcessingProgress: g.current.onProcessingProgress,
              onProcessingComplete: g.current.onProcessingComplete,
              onProcessingError: g.current.onProcessingError
            }), console.log(
              `[useProgressSSE] SSE connection closed: ids=${r.join(",")}, entityType=${t}`
            );
          } catch (O) {
            if (O instanceof Error && O.name === "AbortError") {
              console.log(
                `[useProgressSSE] SSE connection aborted: ids=${r.join(",")}, entityType=${t}`
              );
              return;
            }
            console.error(
              `[useProgressSSE] Error in SSE connection: ids=${r.join(",")}, entityType=${t}`,
              O
            );
          } finally {
            f.current = null;
          }
        })();
      }, Os), () => {
        E.current && (clearTimeout(E.current), E.current = null);
        const V = m.current, x = C.current;
        V && x?.effectId && x.idsKey === b && x.entityType === t && !V.signal.aborted && (V.abort(), m.current = null, C.current = null, f.current = null);
      };
  }, [b, t, u, p, _]);
}
const zs = {
  "no-speech": "noSpeech",
  aborted: "aborted",
  "audio-capture": "audioCapture",
  network: "network",
  "not-allowed": "notAllowed",
  "service-not-allowed": "serviceNotAllowed",
  "bad-grammar": "badGrammar",
  "language-not-supported": "languageNotSupported"
};
function Bs(e) {
  const r = e instanceof DOMException ? e.name : "";
  return r === "NotAllowedError" || r === "PermissionDeniedError" ? "micDenied" : r === "NotFoundError" || r === "DevicesNotFoundError" ? "micNotFound" : "micGeneric";
}
function qs(e) {
  return zs[e] ?? "generic";
}
const Hs = () => {
  const [e, r] = v.useState("idle"), [t, s] = v.useState(""), [i, o] = v.useState(null), [a, u] = v.useState(null), p = v.useRef(null), m = v.useRef(null), E = v.useCallback(() => {
    const g = m.current;
    if (g) {
      for (const b of g.getTracks())
        b.stop();
      m.current = null, u(null);
    }
  }, []), f = v.useCallback(async () => {
    if (p.current)
      return;
    o(null);
    const g = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!g) {
      o("unsupported"), r("error");
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      o("micUnavailable"), r("error");
      return;
    }
    let b;
    try {
      b = await navigator.mediaDevices.getUserMedia({ audio: !0 });
    } catch (R) {
      console.error("Microphone access failed:", R), o(Bs(R)), r("error");
      return;
    }
    m.current = b, u(b);
    const _ = new g();
    p.current = _, _.lang = "pt-BR", _.continuous = !0, _.interimResults = !0, _.onresult = (R) => {
      const V = Array.from(
        R.results
      ).map((x) => x[0]).map((x) => x.transcript).join("");
      s(V);
    }, _.onerror = (R) => {
      console.error("Error during speech recognition:", R.error), o(qs(String(R.error))), r("error"), p.current = null, E();
    }, _.onstart = () => {
      s(""), r("recognizing");
    }, _.onend = () => {
      r("stopped"), p.current = null, E();
    };
    try {
      _.start();
    } catch (R) {
      console.error("recognition.start() failed:", R), p.current = null, E(), o("startFailed"), r("error");
    }
  }, [E]), C = v.useCallback(() => {
    p.current && p.current.stop();
  }, []);
  return v.useEffect(() => () => {
    p.current && (p.current.abort(), p.current = null);
    const g = m.current;
    if (g) {
      for (const b of g.getTracks())
        b.stop();
      m.current = null;
    }
  }, []), {
    startRecognition: f,
    stopRecognition: C,
    status: e,
    transcript: t,
    error: i,
    mediaStream: a,
    isRecognizing: e === "recognizing"
  };
}, qt = 120, Ws = 0.6, Gs = 3, Ks = 10, Ys = ({
  isActive: e,
  className: r
}) => {
  const t = v.useRef(null), s = v.useRef(null), i = v.useRef(null), o = v.useRef(null), a = v.useRef(null), u = v.useRef(null), p = v.useRef([]), m = v.useRef(0);
  return v.useEffect(() => {
    const E = async () => {
      if (!(!e || !t.current))
        try {
          const g = await navigator.mediaDevices.getUserMedia({
            audio: !0
          });
          u.current = g;
          const b = new (window.AudioContext || window.webkitAudioContext)();
          s.current = b;
          const _ = b.createMediaStreamSource(g);
          o.current = _;
          const R = b.createAnalyser();
          R.fftSize = 256, R.smoothingTimeConstant = 0.7, i.current = R, _.connect(R), f();
        } catch (g) {
          console.error("Erro ao acessar o microfone:", g);
        }
    }, f = () => {
      if (m.current++, m.current % Gs === 0) {
        const q = i.current;
        if (q) {
          const O = new Uint8Array(q.frequencyBinCount);
          q.getByteFrequencyData(O);
          let j = O.reduce((D, U) => D + U, 0) / O.length;
          j *= Ws;
          const H = j > Ks ? j : 0, k = p.current;
          k.push(H), k.length > qt && k.shift();
        }
      }
      const g = t.current;
      if (!g) return;
      const b = g.getContext("2d");
      if (!b) return;
      b.clearRect(0, 0, g.width, g.height);
      const _ = g.parentElement, R = _ ? getComputedStyle(_).color : "rgb(3, 7, 18)", V = g.width / qt, x = p.current;
      b.save(), b.globalAlpha = 0.92, b.fillStyle = R, x.forEach((q, O) => {
        let j = Math.log(1 + q) * 6;
        j < 2 && (j = 2);
        const H = O * V, k = g.height / 2 - j / 2, D = 4, U = V > 2 ? V - 1 : V;
        b.beginPath(), b.roundRect(H, k, U, j, D), b.fill();
      }), b.restore(), e && (a.current = requestAnimationFrame(f));
    }, C = () => {
      a.current && cancelAnimationFrame(a.current), p.current = [];
      const g = t.current;
      if (g && g.getContext("2d")?.clearRect(0, 0, g.width, g.height), o.current?.disconnect(), i.current?.disconnect(), u.current)
        for (const b of u.current.getTracks())
          b.stop();
      s.current && s.current.state !== "closed" && s.current.close().catch(() => {
      });
    };
    return e ? E() : C(), C;
  }, [e]), v.useEffect(() => {
    const E = t.current;
    if (!E) return;
    const f = () => {
      const C = E.parentElement;
      C && (E.width = C.offsetWidth, E.height = C.offsetHeight);
    };
    return f(), window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  }, []), /* @__PURE__ */ I.jsx("div", { className: Gt("w-full h-full text-foreground", r), children: /* @__PURE__ */ I.jsx("canvas", { ref: t, className: "block w-full h-full" }) });
}, Qs = Tt.object({
  content: Tt.string().min(1, ye("home.form.validation.content.minLength")).trim()
}), Xs = ({
  placeholder: e,
  assistantProperties: r,
  t
}) => {
  const s = r?.persona?.name || t("home.prompt.defaultAssistantName");
  return e || t("home.prompt.placeholder", { assistantName: s });
}, tt = 220, Ht = 38, Js = 30, Zs = ({ disabled: e, placeholder: r }) => {
  const { disablePromptUpload: t } = Rr(), s = Cr((d) => d.focusPromptRequestId), [i, o] = v.useState("idle"), [a, u] = v.useState(!1), [p, m] = v.useState([]), [E, f] = v.useState(!1), [C, g] = v.useState(!1), [b, _] = v.useState(!1), [R, V] = v.useState(
    null
  ), [x, q] = v.useState(!1), [O, L] = v.useState(!1), j = v.useRef(null), H = v.useRef(null), k = v.useRef(null), D = v.useRef(""), { assistantProperties: U } = Kt(), te = bt(), { handleUploadFiles: A } = lr(), { handleProcessFiles: N } = cr(), { mutate: G, isPending: Y } = Nr(), {
    startRecognition: ae,
    stopRecognition: se,
    transcript: ue,
    isRecognizing: M,
    error: X
  } = Hs(), { t: K } = Pr(), {
    register: ne,
    handleSubmit: J,
    watch: De,
    reset: Ye,
    formState: { isValid: Qe },
    setValue: Xe
  } = ws({
    resolver: ks(Qs),
    defaultValues: { content: "" },
    mode: "onChange"
  }), pe = De("content"), me = Mr({
    state: i === "idle" || i === "typing" ? "idle_typing" : i
  }), Ee = Y || a, Ue = p.some(
    (d) => d.status === "uploading" || d.status === "processing"
  ), we = v.useCallback((d) => {
    const P = d.scrollHeight > tt;
    g(P && d.scrollTop > 2), _(
      P && d.scrollTop < d.scrollHeight - d.clientHeight - 2
    );
  }, []), je = () => {
    f(!1), g(!1), _(!1), k.current && (k.current.style.height = "auto");
  };
  v.useEffect(() => {
    !Y && a && u(!1);
  }, [Y, a]), v.useEffect(() => {
    const d = k.current;
    if (!d) return;
    const P = () => we(d);
    return d.addEventListener("scroll", P, { passive: !0 }), () => d.removeEventListener("scroll", P);
  }, [we]), v.useLayoutEffect(() => {
    const d = k.current;
    d && (d.style.height = "auto", d.style.height = `${Math.min(d.scrollHeight, tt)}px`, we(d));
  }, [E]), v.useLayoutEffect(() => {
    if (s === 0) return;
    let d = !1, P = 0, w = 0;
    const B = () => {
      if (d) return;
      const de = k.current;
      if (de && !de.disabled) {
        de.focus({ preventScroll: !0 });
        return;
      }
      P++, P < Js && (w = requestAnimationFrame(B));
    };
    return w = requestAnimationFrame(B), () => {
      d = !0, cancelAnimationFrame(w);
    };
  }, [s, e, i]);
  const ct = Xs({
    placeholder: r,
    assistantProperties: U ?? null,
    t: K
  }), $e = v.useMemo(
    () => p.filter(
      (d) => d.status === "processing" || d.status === "success"
    ).map((d) => d.id),
    [p]
  );
  $s({
    ids: $e,
    entityType: "file",
    enabled: $e.length > 0,
    onProcessingStart: (d) => {
      m(
        (P) => P.map(
          (w) => w.id === d ? { ...w, status: "processing" } : w
        )
      );
    },
    onProcessingProgress: (d) => {
      m(
        (P) => P.map(
          (w) => w.id === d && w.status === "processing" ? { ...w, status: "processing" } : w
        )
      );
    },
    onProcessingComplete: (d) => {
      m(
        (P) => P.map(
          (w) => w.id === d ? { ...w, status: "success" } : w
        )
      );
    },
    onProcessingError: (d, P) => {
      m(
        (w) => w.map(
          (B) => B.id === d ? {
            ...B,
            status: "error",
            errorMessage: P
          } : B
        )
      );
    }
  });
  const Je = v.useCallback(
    async (d) => {
      const P = gr(d), w = crypto.randomUUID(), de = {
        id: crypto.randomUUID(),
        tempId: w,
        filename: d.name,
        originalName: d.name,
        contentMimeType: d.type,
        contentLength: d.size,
        status: "uploading",
        previewUrl: P
      };
      m((oe) => [...oe, de]);
      try {
        const oe = await A([d]);
        if (!oe || oe.length === 0)
          throw new Error("Upload response is empty");
        const he = oe[0];
        if (m(
          (ut) => ut.map(
            (Ve) => Ve.tempId === w ? {
              ...Ve,
              id: he.id,
              filename: he.filename,
              contentMimeType: he.contentMimeType,
              contentLength: he.contentLength,
              status: "processing"
            } : Ve
          )
        ), !await N(
          [he.id],
          te
        ))
          throw new Error("Erro ao processar arquivo");
        m(
          (ut) => ut.map(
            (Ve) => Ve.id === he.id ? { ...Ve, status: "success", errorMessage: void 0 } : Ve
          )
        );
      } catch (oe) {
        m(
          (he) => he.map(
            (Ae) => Ae.tempId === w ? {
              ...Ae,
              status: "error",
              errorMessage: oe instanceof Error ? oe.message : "Upload failed"
            } : Ae
          )
        );
      }
    },
    [te, N, A]
  ), Ze = (d) => {
    if (!d.content.trim() && p.length === 0) return;
    u(!0);
    const P = p.filter(
      (w) => w.status === "success" || w.status === "processing"
    ).map((w) => w.id);
    m(
      (w) => w.map((B) => ({
        ...B,
        status: B.status === "success" ? "processing" : B.status
      }))
    ), je(), Ye(), o("idle"), m([]), G(
      {
        content: d.content,
        threadId: te || void 0,
        fileIds: P.length > 0 ? P : void 0,
        files: P.length > 0 ? p.filter((w) => P.includes(w.id)).map((w) => ({
          id: w.id,
          filename: w.filename,
          contentMimeType: w.contentMimeType,
          fileUri: void 0
        })) : void 0
      },
      {
        onError: () => {
        }
      }
    );
  }, lt = v.useCallback(
    (d) => {
      const P = p.find((w) => w.id === d);
      P?.previewUrl && URL.revokeObjectURL(P.previewUrl), m((w) => w.filter((B) => B.id !== d));
    },
    [p]
  );
  v.useEffect(() => {
    const d = j.current, P = R;
    if (!d || !P) return;
    const w = (B) => {
      if (B.deltaY === 0) return;
      const de = B.deltaY > 0 && P.canScrollNext(), oe = B.deltaY < 0 && P.canScrollPrev();
      !de && !oe || (B.preventDefault(), de ? P.scrollNext() : oe && P.scrollPrev());
    };
    return d.addEventListener("wheel", w, { passive: !1 }), () => d.removeEventListener("wheel", w);
  }, [R]), v.useEffect(() => {
    const d = R;
    if (!d) return;
    const P = () => {
      q(d.canScrollPrev()), L(d.canScrollNext());
    };
    return P(), d.on("select", P), d.on("reInit", P), () => {
      d.off("select", P), d.off("reInit", P);
    };
  }, [R]);
  const _t = () => {
    Ye(), je();
  }, ze = () => {
    D.current = pe, ae();
  }, n = (d) => {
    d.preventDefault(), d.stopPropagation(), se();
    const P = D.current;
    window.setTimeout(() => {
      Xe("content", P, {
        shouldDirty: !0,
        shouldTouch: !0,
        shouldValidate: !0
      }), o(P.trim() ? "typing" : "idle");
    }, 0);
  }, c = (d) => {
    d.preventDefault(), d.stopPropagation(), se();
    const P = ue.trim();
    window.setTimeout(() => {
      Xe("content", P, {
        shouldDirty: !0,
        shouldTouch: !0,
        shouldValidate: !0
      }), o(P ? "typing" : "idle");
    }, 0);
  }, l = v.useCallback(() => {
    const d = k.current;
    d && (d.style.height = "auto", d.style.height = `${Math.min(d.scrollHeight, tt)}px`, d.scrollHeight > Ht ? f(!0) : d.value || f(!1), we(d));
  }, [we]), S = (d) => {
    d.key === "Enter" && !d.shiftKey && (d.preventDefault(), Qe && !Ee && J(Ze)());
  };
  v.useEffect(() => {
    M ? o("recognizing") : X ? o("error") : i === "recognizing" && !M && o("reviewing");
  }, [M, X, i]), v.useEffect(() => {
    i === "reviewing" && !pe.trim() ? o("idle") : i !== "recognizing" && i !== "reviewing" && o(pe ? "typing" : "idle");
  }, [pe, i]), v.useLayoutEffect(() => {
    i !== "idle" && i !== "typing" || l();
  }, [pe, i, l]), v.useEffect(() => {
    if (H.current) {
      const d = H.current;
      d.scrollTop = d.scrollHeight;
    }
  }, [ue]);
  const y = () => t ? null : /* @__PURE__ */ I.jsx(
    Us,
    {
      selectedFiles: p,
      onSelectedFilesChange: (d) => {
        m(d);
      },
      onFilesChange: (d) => {
      },
      disabled: Ee
    }
  ), h = () => {
    const d = p.length > 0;
    switch (i) {
      case "idle":
        if (d) {
          const P = p.some(
            (w) => w.status === "success" || w.status === "processing"
          );
          return /* @__PURE__ */ I.jsx(
            Re,
            {
              disabled: Ee || Ue || !P,
              variant: "ghost",
              type: "submit",
              size: "icon",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ I.jsx(Ct, {})
            }
          );
        }
        return /* @__PURE__ */ I.jsx(dt, { content: K("home.prompt.actions.mic"), children: /* @__PURE__ */ I.jsx(
          Re,
          {
            disabled: Ee,
            variant: "ghost",
            type: "button",
            onClick: ze,
            size: "icon",
            className: "rounded-full mb-0.5",
            icon: /* @__PURE__ */ I.jsx(Rt, {}),
            "aria-label": K("home.prompt.actions.mic")
          }
        ) });
      case "typing":
        return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
          pe.trim() && /* @__PURE__ */ I.jsx(dt, { content: K("home.prompt.actions.clear"), children: /* @__PURE__ */ I.jsx(
            Re,
            {
              onClick: _t,
              variant: "ghost",
              size: "icon",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ I.jsx(Ur, {}),
              "aria-label": K("home.prompt.actions.clear")
            }
          ) }),
          /* @__PURE__ */ I.jsx(
            Re,
            {
              disabled: Ee || Ue || !pe.trim() && !d,
              type: "submit",
              variant: "ghost",
              size: "icon",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ I.jsx(Ct, {})
            }
          )
        ] });
      case "recognizing":
      case "reviewing":
        return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
          /* @__PURE__ */ I.jsx(
            Re,
            {
              type: "button",
              onClick: n,
              size: "icon",
              variant: "ghost",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ I.jsx(Vr, {}),
              "aria-label": K("common.button.cancel")
            }
          ),
          /* @__PURE__ */ I.jsx(
            Re,
            {
              type: "button",
              onClick: c,
              size: "icon",
              variant: "ghost",
              className: "rounded-full mb-0.5",
              icon: /* @__PURE__ */ I.jsx(Ir, {}),
              "aria-label": K("common.button.confirm")
            }
          )
        ] });
      case "error":
        return /* @__PURE__ */ I.jsx(dt, { content: K("home.prompt.actions.mic"), children: /* @__PURE__ */ I.jsx(
          Re,
          {
            variant: "ghost",
            type: "button",
            onClick: ze,
            size: "icon",
            className: "rounded-full",
            icon: /* @__PURE__ */ I.jsx(Rt, {}),
            "aria-label": K("home.prompt.actions.mic")
          }
        ) });
      default:
        return null;
    }
  }, T = () => {
    switch (i) {
      case "recognizing":
      case "reviewing":
        return /* @__PURE__ */ I.jsxs("div", { className: "flex w-full flex-col gap-2 py-1", children: [
          /* @__PURE__ */ I.jsx(Ys, { isActive: M, className: "h-8" }),
          /* @__PURE__ */ I.jsx("span", { ref: H, className: me.transcriptText(), children: ue || K("home.prompt.listening") })
        ] });
      case "error":
        return /* @__PURE__ */ I.jsx("p", { className: me.errorText(), children: K("home.prompt.transcriptionError") });
      default: {
        const { ref: d, ...P } = ne("content");
        return /* @__PURE__ */ I.jsx(
          "textarea",
          {
            ref: (w) => {
              d(w), k.current = w;
            },
            ...P,
            placeholder: ct,
            disabled: Ee || e,
            rows: 1,
            className: Gt(me.input(), "resize-none"),
            onPaste: (w) => {
              const B = w.clipboardData?.items;
              if (!B) return;
              const de = Array.from(B).find(
                (he) => he.type.startsWith("image/")
              );
              if (!de) return;
              const oe = de.getAsFile();
              if (oe) {
                if (oe.size > dr) {
                  w.preventDefault();
                  return;
                }
                w.preventDefault(), Je(oe);
              }
            },
            onInput: (w) => {
              const B = w.currentTarget;
              B.style.height = "auto", B.style.height = `${Math.min(B.scrollHeight, tt)}px`, B.scrollHeight > Ht ? f(!0) : B.value || f(!1), we(B);
            },
            onScroll: (w) => we(w.currentTarget),
            onKeyDown: S
          }
        );
      }
    }
  }, z = i === "idle" || i === "typing", $ = z && E, ie = C || b ? /* @__PURE__ */ (() => {
    const w = `linear-gradient(to bottom, ${C ? "transparent 0%, black 14px" : "black 0%"}, ${b ? "black calc(100% - 14px), transparent 100%" : "black 100%"})`;
    return { maskImage: w, WebkitMaskImage: w };
  })() : void 0, Fe = x || O ? /* @__PURE__ */ (() => {
    const w = `linear-gradient(to right, ${x ? "transparent 0%, black 12px" : "black 0%"}, ${O ? "black calc(100% - 12px), transparent 100%" : "black 100%"})`;
    return { maskImage: w, WebkitMaskImage: w };
  })() : void 0;
  return /* @__PURE__ */ I.jsx(
    "form",
    {
      onSubmit: J(Ze),
      className: me.wrapper(),
      children: /* @__PURE__ */ I.jsxs("div", { className: me.container(), children: [
        /* @__PURE__ */ I.jsx("div", { className: "flex w-full min-w-0 max-w-full justify-start", children: p.length > 0 && /* @__PURE__ */ I.jsx(
          "div",
          {
            ref: j,
            className: "min-w-0 max-w-full w-max overflow-x-hidden overflow-y-visible",
            style: Fe,
            children: /* @__PURE__ */ I.jsx(
              Ar,
              {
                showControls: !1,
                opts: { align: "start", containScroll: "trimSnaps" },
                contentClassName: "-ml-2",
                itemClassName: "pl-2 basis-auto",
                items: p.map((d) => ({
                  id: d.id,
                  content: /* @__PURE__ */ I.jsx(
                    Dr,
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
                      onRemoveFile: lt
                    }
                  )
                })),
                setApi: V
              }
            )
          }
        ) }),
        /* @__PURE__ */ I.jsxs("div", { className: "flex w-full flex-col", children: [
          /* @__PURE__ */ I.jsxs("div", { className: "flex w-full items-center", children: [
            z && !$ && y(),
            /* @__PURE__ */ I.jsx("div", { className: me.contentWrapper(), style: ie, children: T() }),
            !$ && /* @__PURE__ */ I.jsx("div", { className: me.actionsWrapper(), children: h() })
          ] }),
          $ && /* @__PURE__ */ I.jsxs("div", { className: me.footer(), children: [
            y(),
            /* @__PURE__ */ I.jsx("div", { className: me.actionsWrapper(), children: h() })
          ] })
        ] })
      ] })
    }
  );
};
Zs.displayName = "Prompt";
export {
  Zs as Prompt,
  Qs as promptSchema,
  Mr as promptStyles
};
