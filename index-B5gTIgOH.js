var Pt = (e) => {
  throw TypeError(e);
};
var mt = (e, t, r) => t.has(e) || Pt("Cannot " + r);
var z = (e, t, r) => (mt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), D = (e, t, r) => t.has(e) ? Pt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), X = (e, t, r, o) => (mt(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r), J = (e, t, r) => (mt(e, t, "access private method"), r);
import { ab as le, ac as Rt, ad as ce, ae as de, af as ue, ag as fe, ah as Tt, ai as pe, aj as qt, J as Ut, r as L, ak as ge, al as he, am as be, c as Wt, an as me, a9 as Z, F as Kt, ao as ye, ap as Et, aq as $t, ar as Ht, as as pt, at as ve, au as xe, av as we, aw as ke, ax as Se, ay as Ce, az as Me, aA as jt, aB as Ee, aC as Qt, aD as Bt, aE as Ae } from "./embed-entry-B68VGA8B.js";
import { G as ze, b as Pe } from "./list-threads.graphql-DnOAwy1M.js";
var Re = class extends le {
  constructor(e, t) {
    super(e, t);
  }
  bindMethods() {
    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(e) {
    super.setOptions({
      ...e,
      behavior: Rt()
    });
  }
  getOptimisticResult(e) {
    return e.behavior = Rt(), super.getOptimisticResult(e);
  }
  fetchNextPage(e) {
    return this.fetch({
      ...e,
      meta: {
        fetchMore: { direction: "forward" }
      }
    });
  }
  fetchPreviousPage(e) {
    return this.fetch({
      ...e,
      meta: {
        fetchMore: { direction: "backward" }
      }
    });
  }
  createResult(e, t) {
    var C, k;
    const { state: r } = e, o = super.createResult(e, t), { isFetching: n, isRefetching: s, isError: i, isRefetchError: a } = o, l = (k = (C = r.fetchMeta) == null ? void 0 : C.fetchMore) == null ? void 0 : k.direction, u = i && l === "forward", d = n && l === "forward", f = i && l === "backward", b = n && l === "backward";
    return {
      ...o,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: de(t, r.data),
      hasPreviousPage: ce(t, r.data),
      isFetchNextPageError: u,
      isFetchingNextPage: d,
      isFetchPreviousPageError: f,
      isFetchingPreviousPage: b,
      isRefetchError: a && !u && !f,
      isRefetching: s && !d && !b
    };
  }
}, U, Q, I, W, K, ft, xt, Yt, Te = (Yt = class extends ue {
  constructor(t, r) {
    super();
    D(this, K);
    D(this, U);
    D(this, Q);
    D(this, I);
    D(this, W);
    X(this, U, t), this.setOptions(r), this.bindMethods(), J(this, K, ft).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var o;
    const r = this.options;
    this.options = z(this, U).defaultMutationOptions(t), fe(this.options, r) || z(this, U).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: z(this, I),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && Tt(r.mutationKey) !== Tt(this.options.mutationKey) ? this.reset() : ((o = z(this, I)) == null ? void 0 : o.state.status) === "pending" && z(this, I).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = z(this, I)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    J(this, K, ft).call(this), J(this, K, xt).call(this, t);
  }
  getCurrentResult() {
    return z(this, Q);
  }
  reset() {
    var t;
    (t = z(this, I)) == null || t.removeObserver(this), X(this, I, void 0), J(this, K, ft).call(this), J(this, K, xt).call(this);
  }
  mutate(t, r) {
    var o;
    return X(this, W, r), (o = z(this, I)) == null || o.removeObserver(this), X(this, I, z(this, U).getMutationCache().build(z(this, U), this.options)), z(this, I).addObserver(this), z(this, I).execute(t);
  }
}, U = new WeakMap(), Q = new WeakMap(), I = new WeakMap(), W = new WeakMap(), K = new WeakSet(), ft = function() {
  var r;
  const t = ((r = z(this, I)) == null ? void 0 : r.state) ?? pe();
  X(this, Q, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, xt = function(t) {
  qt.batch(() => {
    var r, o, n, s, i, a, l, u;
    if (z(this, W) && this.hasListeners()) {
      const d = z(this, Q).variables, f = z(this, Q).context, b = {
        client: z(this, U),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      if ((t == null ? void 0 : t.type) === "success") {
        try {
          (o = (r = z(this, W)).onSuccess) == null || o.call(
            r,
            t.data,
            d,
            f,
            b
          );
        } catch (v) {
          Promise.reject(v);
        }
        try {
          (s = (n = z(this, W)).onSettled) == null || s.call(
            n,
            t.data,
            null,
            d,
            f,
            b
          );
        } catch (v) {
          Promise.reject(v);
        }
      } else if ((t == null ? void 0 : t.type) === "error") {
        try {
          (a = (i = z(this, W)).onError) == null || a.call(
            i,
            t.error,
            d,
            f,
            b
          );
        } catch (v) {
          Promise.reject(v);
        }
        try {
          (u = (l = z(this, W)).onSettled) == null || u.call(
            l,
            void 0,
            t.error,
            d,
            f,
            b
          );
        } catch (v) {
          Promise.reject(v);
        }
      }
    }
    this.listeners.forEach((d) => {
      d(z(this, Q));
    });
  });
}, Yt);
function Nr(e, t) {
  const r = Ut(), [o] = L.useState(
    () => new Te(
      r,
      e
    )
  );
  L.useEffect(() => {
    o.setOptions(e);
  }, [o, e]);
  const n = L.useSyncExternalStore(
    L.useCallback(
      (i) => o.subscribe(qt.batchCalls(i)),
      [o]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), s = L.useCallback(
    (i, a) => {
      o.mutate(i, a).catch(ge);
    },
    [o]
  );
  if (n.error && he(o.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: s, mutateAsync: n.mutate };
}
function je(e, t) {
  return be(
    e,
    Re
  );
}
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Gr = Wt("ellipsis", Oe);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], Lr = Wt("square-pen", Ie), Ne = {
  isFullscreen: !1,
  isMobile: !1,
  isFixedRight: !1
}, Fr = (e = Ne) => {
  const [t, r] = L.useState(e);
  return L.useEffect(() => me(r), []), t;
}, Ot = (e) => Symbol.iterator in e, It = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), Nt = (e, t) => {
  const r = e instanceof Map ? e : new Map(e.entries()), o = t instanceof Map ? t : new Map(t.entries());
  if (r.size !== o.size)
    return !1;
  for (const [n, s] of r)
    if (!o.has(n) || !Object.is(s, o.get(n)))
      return !1;
  return !0;
}, Ge = (e, t) => {
  const r = e[Symbol.iterator](), o = t[Symbol.iterator]();
  let n = r.next(), s = o.next();
  for (; !n.done && !s.done; ) {
    if (!Object.is(n.value, s.value))
      return !1;
    n = r.next(), s = o.next();
  }
  return !!n.done && !!s.done;
};
function Le(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : Ot(e) && Ot(t) ? It(e) && It(t) ? Nt(e, t) : Ge(e, t) : Nt(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(t) }
  );
}
function Fe(e) {
  const t = Z.useRef(void 0);
  return (r) => {
    const o = e(r);
    return Le(t.current, o) ? t.current : t.current = o;
  };
}
const Ve = async (e, t, r) => {
  try {
    const o = await Kt.request(ze, {
      token: e,
      threadId: t,
      assistantId: r
    });
    if (!(o != null && o.threadMessagesList))
      throw new Error(
        "Invalid response from server: threadMessagesList is missing"
      );
    const n = o.threadMessagesList.messages.map(
      (s, i) => {
        try {
          return ye(s);
        } catch (a) {
          throw console.error(
            `Error converting message at index ${i}:`,
            a,
            s
          ), a;
        }
      }
    );
    return {
      ...o.threadMessagesList,
      messages: n
    };
  } catch (o) {
    throw console.error("Error in getThreadMessages:", {
      error: o,
      threadId: t,
      assistantId: r,
      errorMessage: o instanceof Error ? o.message : String(o),
      errorStack: o instanceof Error ? o.stack : void 0
    }), o;
  }
}, _e = () => {
  const e = Et(), t = $t(), { assistantProperties: r } = gt();
  return Ht({
    queryKey: ["messages", t],
    queryFn: async () => {
      if (!e || !t || !(r != null && r.id))
        throw new Error(pt("common.validation.missingParameters"));
      return Ve(e, t, r.id);
    },
    enabled: !!e && !!t && !!(r != null && r.id) && !t.startsWith("optimistic"),
    staleTime: 1e3 * 30
  });
}, gt = () => {
  const { data: e, isLoading: t } = ve(), r = xe(), { assistantId: o } = we(), n = ke();
  return {
    assistantProperties: L.useMemo(() => {
      var l;
      if (!(e != null && e.page))
        return;
      const i = r || o;
      if (!i)
        return;
      const a = e.page.find(
        (u) => u.id === i
      );
      return a && n ? {
        ...a,
        persona: {
          ...a.persona,
          avatar: {
            ...((l = a.persona) == null ? void 0 : l.avatar) ?? { id: "" },
            uri: n
          }
        }
      } : a;
    }, [
      e,
      r,
      o,
      n
    ]),
    isLoading: t
  };
}, Vr = () => {
  var P;
  const e = Ut(), t = $t(), [r] = Se(), { initialMessagesFn: o } = Ce(), n = Me(
    Fe((g) => g.hiddenMessageIdsAfterEdit)
  ), s = L.useMemo(
    () => new Set(n),
    [n]
  ), { data: i, isLoading: a } = qe(), { data: l, isLoading: u } = _e(), { assistantProperties: d, isLoading: f } = gt(), b = r.get("lastThreadId"), v = L.useMemo(() => {
    if (!t) return [];
    const g = e.getQueryData([
      "messages",
      t
    ]);
    return Array.isArray(g == null ? void 0 : g.messages) ? g.messages : [];
  }, [e, t]), C = L.useMemo(() => {
    const g = typeof b == "string" && b.trim().length > 0, _ = t == null ? void 0 : t.startsWith("optimistic-");
    if (!t)
      return i ? o(i) : [];
    if (!g && !_) {
      if (v.length > 0) {
        const F = s.size === 0 ? v : v.filter(
          (V) => !V.id || !s.has(V.id)
        );
        return jt(F);
      }
      return i ? o(i) : [];
    }
    const j = (l == null ? void 0 : l.messages) ?? v;
    if (j.length > 0) {
      const F = s.size === 0 ? j : j.filter((V) => !V.id || !s.has(V.id));
      return jt(F);
    }
    return [];
  }, [
    t,
    b,
    l == null ? void 0 : l.messages,
    v,
    i,
    o,
    s
  ]), k = ((P = d == null ? void 0 : d.persona) == null ? void 0 : P.name) || pt("common.fallback.noName");
  return {
    isLoading: f || a || !!t && u,
    displayMessages: C,
    assistantName: k
  };
}, Dt = 100, Ye = async (e, t, r = Ee.page, o = Dt) => {
  const n = {
    token: e,
    assistantId: t,
    pagination: {
      page: r,
      perPage: o
    }
  };
  return (await Kt.request(Pe, n)).threadsByAssistant;
}, _r = () => {
  const e = Et(), { assistantProperties: t } = gt();
  return je({
    queryKey: ["threads", t == null ? void 0 : t.id],
    queryFn: ({ pageParam: r = 1 }) => {
      if (!e || !(t != null && t.id))
        throw new Error(pt("common.validation.missingParameters"));
      return Ye(
        e,
        t.id,
        r,
        Dt
      );
    },
    enabled: !!e && !!(t != null && t.id),
    staleTime: 1e3 * 60,
    getNextPageParam: (r) => {
      if (r.totalPages !== null && r.currentPage < r.totalPages)
        return r.currentPage + 1;
    },
    initialPageParam: 1,
    retry: (r, o) => Bt(r, o, 2),
    retryDelay: Qt,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
  });
}, qe = () => {
  var o;
  const e = Et(), { assistantProperties: t } = gt(), r = (o = t == null ? void 0 : t.persona) == null ? void 0 : o.id;
  return Ht({
    queryKey: ["persona", t == null ? void 0 : t.id],
    queryFn: async () => {
      if (!e || !(t != null && t.id) || !r)
        throw new Error(pt("common.validation.missingParameters"));
      try {
        return await Ae(e, t.id, r);
      } catch (n) {
        if (console.error(
          "[useGetPersona] Failed to load persona. Using assistant persona fallback.",
          n
        ), t != null && t.persona)
          return t.persona;
        throw n;
      }
    },
    enabled: !!e && !!(t != null && t.id) && !!r,
    retry: (n, s) => Bt(n, s, 2),
    retryDelay: Qt,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
  });
};
var Gt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, O = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Ue = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Xt(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? Xt(r, t) : t.push(r);
  });
}
function Jt(e) {
  let t = [];
  return Xt(e, t), t;
}
var Zt = (...e) => Jt(e).filter(Boolean), te = (e, t) => {
  let r = {}, o = Object.keys(e), n = Object.keys(t);
  for (let s of o) if (n.includes(s)) {
    let i = e[s], a = t[s];
    Array.isArray(i) || Array.isArray(a) ? r[s] = Zt(a, i) : typeof i == "object" && typeof a == "object" ? r[s] = te(i, a) : r[s] = a + " " + i;
  } else r[s] = e[s];
  for (let s of n) o.includes(s) || (r[s] = t[s]);
  return r;
}, Lt = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const At = "-", We = (e) => {
  const t = $e(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(At);
      return a[0] === "" && a.length !== 1 && a.shift(), ee(a, t) || Ke(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = r[i] || [];
      return a && o[i] ? [...l, ...o[i]] : l;
    }
  };
}, ee = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? ee(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const s = e.join(At);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Ft = /^\[(.+)\]$/, Ke = (e) => {
  if (Ft.test(e)) {
    const t = Ft.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, $e = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Qe(Object.entries(e.classGroups), r).forEach(([s, i]) => {
    wt(i, o, s, t);
  }), o;
}, wt = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? t : Vt(t, n);
      s.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (He(n)) {
        wt(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([s, i]) => {
      wt(i, Vt(t, s), r, o);
    });
  });
}, Vt = (e, t) => {
  let r = e;
  return t.split(At).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, He = (e) => e.isThemeGetter, Qe = (e, t) => t ? e.map(([r, o]) => {
  const n = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [r, n];
}) : e, Be = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (s, i) => {
    r.set(s, i), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = r.get(s);
      if (i !== void 0)
        return i;
      if ((i = o.get(s)) !== void 0)
        return n(s, i), i;
    },
    set(s, i) {
      r.has(s) ? r.set(s, i) : n(s, i);
    }
  };
}, re = "!", De = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, n = t[0], s = t.length, i = (a) => {
    const l = [];
    let u = 0, d = 0, f;
    for (let x = 0; x < a.length; x++) {
      let P = a[x];
      if (u === 0) {
        if (P === n && (o || a.slice(x, x + s) === t)) {
          l.push(a.slice(d, x)), d = x + s;
          continue;
        }
        if (P === "/") {
          f = x;
          continue;
        }
      }
      P === "[" ? u++ : P === "]" && u--;
    }
    const b = l.length === 0 ? a : a.substring(d), v = b.startsWith(re), C = v ? b.substring(1) : b, k = f && f > d ? f - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: v,
      baseClassName: C,
      maybePostfixModifierPosition: k
    };
  };
  return r ? (a) => r({
    className: a,
    parseClassName: i
  }) : i;
}, Xe = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, Je = (e) => ({
  cache: Be(e.cacheSize),
  parseClassName: De(e),
  ...We(e)
}), Ze = /\s+/, tr = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n
  } = t, s = [], i = e.trim().split(Ze);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: b,
      maybePostfixModifierPosition: v
    } = r(u);
    let C = !!v, k = o(C ? b.substring(0, v) : b);
    if (!k) {
      if (!C) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (k = o(b), !k) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      C = !1;
    }
    const x = Xe(d).join(":"), P = f ? x + re : x, g = P + k;
    if (s.includes(g))
      continue;
    s.push(g);
    const _ = n(k, C);
    for (let j = 0; j < _.length; ++j) {
      const F = _[j];
      s.push(P + F);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function er() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = oe(t)) && (o && (o += " "), o += r);
  return o;
}
const oe = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = oe(e[o])) && (r && (r += " "), r += t);
  return r;
};
function kt(e, ...t) {
  let r, o, n, s = i;
  function i(l) {
    const u = t.reduce((d, f) => f(d), e());
    return r = Je(u), o = r.cache.get, n = r.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = o(l);
    if (u)
      return u;
    const d = tr(l, r);
    return n(l, d), d;
  }
  return function() {
    return s(er.apply(null, arguments));
  };
}
const A = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, se = /^\[(?:([a-z-]+):)?(.+)\]$/i, rr = /^\d+\/\d+$/, or = /* @__PURE__ */ new Set(["px", "full", "screen"]), sr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ar = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ir = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, lr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Y = (e) => tt(e) || or.has(e) || rr.test(e), $ = (e) => et(e, "length", br), tt = (e) => !!e && !Number.isNaN(Number(e)), yt = (e) => et(e, "number", tt), nt = (e) => !!e && Number.isInteger(Number(e)), cr = (e) => e.endsWith("%") && tt(e.slice(0, -1)), p = (e) => se.test(e), H = (e) => sr.test(e), dr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ur = (e) => et(e, dr, ae), fr = (e) => et(e, "position", ae), pr = /* @__PURE__ */ new Set(["image", "url"]), gr = (e) => et(e, pr, yr), hr = (e) => et(e, "", mr), it = () => !0, et = (e, t, r) => {
  const o = se.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, br = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ar.test(e) && !nr.test(e)
), ae = () => !1, mr = (e) => ir.test(e), yr = (e) => lr.test(e), St = () => {
  const e = A("colors"), t = A("spacing"), r = A("blur"), o = A("brightness"), n = A("borderColor"), s = A("borderRadius"), i = A("borderSpacing"), a = A("borderWidth"), l = A("contrast"), u = A("grayscale"), d = A("hueRotate"), f = A("invert"), b = A("gap"), v = A("gradientColorStops"), C = A("gradientColorStopPositions"), k = A("inset"), x = A("margin"), P = A("opacity"), g = A("padding"), _ = A("saturate"), j = A("scale"), F = A("sepia"), V = A("skew"), rt = A("space"), ot = A("translate"), B = () => ["auto", "contain", "none"], st = () => ["auto", "hidden", "clip", "visible", "scroll"], at = () => ["auto", p, t], c = () => [p, t], m = () => ["", Y, $], h = () => ["auto", tt, p], w = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], y = () => ["solid", "dashed", "dotted", "double", "none"], S = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], E = () => ["", "0", p], R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [tt, p];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [it],
      spacing: [Y, $],
      blur: ["none", "", H, p],
      brightness: T(),
      borderColor: [e],
      borderRadius: ["none", "", "full", H, p],
      borderSpacing: c(),
      borderWidth: m(),
      contrast: T(),
      grayscale: E(),
      hueRotate: T(),
      invert: E(),
      gap: c(),
      gradientColorStops: [e],
      gradientColorStopPositions: [cr, $],
      inset: at(),
      margin: at(),
      opacity: T(),
      padding: c(),
      saturate: T(),
      scale: T(),
      sepia: E(),
      skew: T(),
      space: c(),
      translate: c()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", p]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [H]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": R()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": R()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...w(), p]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: st()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": st()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": st()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", nt, p]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: at()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", p]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: E()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: E()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", nt, p]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [it]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", nt, p]
        }, p]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": h()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": h()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [it]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [nt, p]
        }, p]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": h()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": h()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", p]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", p]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...M()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...M(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...M(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [g]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [g]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [g]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [g]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [g]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [g]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [g]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [g]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [g]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [rt]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [rt]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", p, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [p, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [p, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [H]
        }, H]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [p, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [p, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [p, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [p, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", H, $]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [it]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", p]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", tt, yt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Y, p]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", p]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", p]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [P]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [P]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Y, $]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Y, p]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: c()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", p]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", p]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [P]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...w(), fr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ur]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, gr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [C]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [P]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...y(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [P]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: y()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [n]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...y()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Y, p]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Y, $]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: m()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [P]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Y, $]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", H, hr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [it]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...S(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": S()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", H, p]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [F]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [F]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", p]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: T()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", p]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: T()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", p]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [j]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [j]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [j]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [nt, p]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ot]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ot]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [V]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [V]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", p]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", p]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": c()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": c()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": c()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": c()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": c()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": c()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": c()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": c()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": c()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": c()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": c()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": c()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": c()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": c()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": c()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": c()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": c()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": c()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", p]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Y, $, yt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, vr = (e, {
  cacheSize: t,
  prefix: r,
  separator: o,
  experimentalParseClassName: n,
  extend: s = {},
  override: i = {}
}) => {
  ct(e, "cacheSize", t), ct(e, "prefix", r), ct(e, "separator", o), ct(e, "experimentalParseClassName", n);
  for (const a in i)
    xr(e[a], i[a]);
  for (const a in s)
    wr(e[a], s[a]);
  return e;
}, ct = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, xr = (e, t) => {
  if (t)
    for (const r in t)
      ct(e, r, t[r]);
}, wr = (e, t) => {
  if (t)
    for (const r in t) {
      const o = t[r];
      o !== void 0 && (e[r] = (e[r] || []).concat(o));
    }
}, kr = (e, ...t) => typeof e == "function" ? kt(St, e, ...t) : kt(() => vr(St(), e), ...t), Sr = /* @__PURE__ */ kt(St);
var Cr = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, ne = (e) => e || void 0, dt = (...e) => ne(Jt(e).filter(Boolean).join(" ")), vt = null, q = {}, Ct = !1, lt = (...e) => (t) => t.twMerge ? ((!vt || Ct) && (Ct = !1, vt = O(q) ? Sr : kr({ ...q, extend: { theme: q.theme, classGroups: q.classGroups, conflictingClassGroupModifiers: q.conflictingClassGroupModifiers, conflictingClassGroups: q.conflictingClassGroups, ...q.extend } })), ne(vt(dt(e)))) : dt(e), _t = (e, t) => {
  for (let r in t) e.hasOwnProperty(r) ? e[r] = dt(e[r], t[r]) : e[r] = t[r];
  return e;
}, Yr = (e, t) => {
  let { extend: r = null, slots: o = {}, variants: n = {}, compoundVariants: s = [], compoundSlots: i = [], defaultVariants: a = {} } = e, l = { ...Cr, ...t }, u = r != null && r.base ? dt(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = r != null && r.variants && !O(r.variants) ? te(n, r.variants) : n, f = r != null && r.defaultVariants && !O(r.defaultVariants) ? { ...r.defaultVariants, ...a } : a;
  !O(l.twMergeConfig) && !Ue(l.twMergeConfig, q) && (Ct = !0, q = l.twMergeConfig);
  let b = O(r == null ? void 0 : r.slots), v = O(o) ? {} : { base: dt(e == null ? void 0 : e.base, b && (r == null ? void 0 : r.base)), ...o }, C = b ? v : _t({ ...r == null ? void 0 : r.slots }, O(v) ? { base: e == null ? void 0 : e.base } : v), k = O(r == null ? void 0 : r.compoundVariants) ? s : Zt(r == null ? void 0 : r.compoundVariants, s), x = (g) => {
    if (O(d) && O(o) && b) return lt(u, g == null ? void 0 : g.class, g == null ? void 0 : g.className)(l);
    if (k && !Array.isArray(k)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof k}`);
    if (i && !Array.isArray(i)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);
    let _ = (c, m, h = [], w) => {
      let y = h;
      if (typeof m == "string") y = y.concat(Lt(m).split(" ").map((S) => `${c}:${S}`));
      else if (Array.isArray(m)) y = y.concat(m.reduce((S, M) => S.concat(`${c}:${M}`), []));
      else if (typeof m == "object" && typeof w == "string") {
        for (let S in m) if (m.hasOwnProperty(S) && S === w) {
          let M = m[S];
          if (M && typeof M == "string") {
            let E = Lt(M);
            y[w] ? y[w] = y[w].concat(E.split(" ").map((R) => `${c}:${R}`)) : y[w] = E.split(" ").map((R) => `${c}:${R}`);
          } else Array.isArray(M) && M.length > 0 && (y[w] = M.reduce((E, R) => E.concat(`${c}:${R}`), []));
        }
      }
      return y;
    }, j = (c, m = d, h = null, w = null) => {
      var y;
      let S = m[c];
      if (!S || O(S)) return null;
      let M = (y = w == null ? void 0 : w[c]) != null ? y : g == null ? void 0 : g[c];
      if (M === null) return null;
      let E = Gt(M), R = Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0 || l.responsiveVariants === !0, T = f == null ? void 0 : f[c], N = [];
      if (typeof E == "object" && R) for (let [bt, zt] of Object.entries(E)) {
        let ie = S[zt];
        if (bt === "initial") {
          T = zt;
          continue;
        }
        Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(bt) || (N = _(bt, ie, N, h));
      }
      let ut = E != null && typeof E != "object" ? E : Gt(T), ht = S[ut || "false"];
      return typeof N == "object" && typeof h == "string" && N[h] ? _t(N, ht) : N.length > 0 ? (N.push(ht), h === "base" ? N.join(" ") : N) : ht;
    }, F = () => d ? Object.keys(d).map((c) => j(c, d)) : null, V = (c, m) => {
      if (!d || typeof d != "object") return null;
      let h = new Array();
      for (let w in d) {
        let y = j(w, d, c, m), S = c === "base" && typeof y == "string" ? y : y && y[c];
        S && (h[h.length] = S);
      }
      return h;
    }, rt = {};
    for (let c in g) g[c] !== void 0 && (rt[c] = g[c]);
    let ot = (c, m) => {
      var h;
      let w = typeof (g == null ? void 0 : g[c]) == "object" ? { [c]: (h = g[c]) == null ? void 0 : h.initial } : {};
      return { ...f, ...rt, ...w, ...m };
    }, B = (c = [], m) => {
      let h = [];
      for (let { class: w, className: y, ...S } of c) {
        let M = !0;
        for (let [E, R] of Object.entries(S)) {
          let T = ot(E, m)[E];
          if (Array.isArray(R)) {
            if (!R.includes(T)) {
              M = !1;
              break;
            }
          } else {
            let N = (ut) => ut == null || ut === !1;
            if (N(R) && N(T)) continue;
            if (T !== R) {
              M = !1;
              break;
            }
          }
        }
        M && (w && h.push(w), y && h.push(y));
      }
      return h;
    }, st = (c) => {
      let m = B(k, c);
      if (!Array.isArray(m)) return m;
      let h = {};
      for (let w of m) if (typeof w == "string" && (h.base = lt(h.base, w)(l)), typeof w == "object") for (let [y, S] of Object.entries(w)) h[y] = lt(h[y], S)(l);
      return h;
    }, at = (c) => {
      if (i.length < 1) return null;
      let m = {};
      for (let { slots: h = [], class: w, className: y, ...S } of i) {
        if (!O(S)) {
          let M = !0;
          for (let E of Object.keys(S)) {
            let R = ot(E, c)[E];
            if (R === void 0 || (Array.isArray(S[E]) ? !S[E].includes(R) : S[E] !== R)) {
              M = !1;
              break;
            }
          }
          if (!M) continue;
        }
        for (let M of h) m[M] = m[M] || [], m[M].push([w, y]);
      }
      return m;
    };
    if (!O(o) || !b) {
      let c = {};
      if (typeof C == "object" && !O(C)) for (let m of Object.keys(C)) c[m] = (h) => {
        var w, y;
        return lt(C[m], V(m, h), ((w = st(h)) != null ? w : [])[m], ((y = at(h)) != null ? y : [])[m], h == null ? void 0 : h.class, h == null ? void 0 : h.className)(l);
      };
      return c;
    }
    return lt(u, F(), B(k), g == null ? void 0 : g.class, g == null ? void 0 : g.className)(l);
  }, P = () => {
    if (!(!d || typeof d != "object")) return Object.keys(d);
  };
  return x.variantKeys = P(), x.extend = r, x.base = u, x.slots = C, x.variants = d, x.defaultVariants = f, x.compoundSlots = i, x.compoundVariants = k, x;
};
const qr = (e) => {
  const t = e.match(/^\/assistant\/[^/]+(\/.*)?$/);
  return (t == null ? void 0 : t[1]) || "/";
};
function Mr(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
Array(12).fill(0);
let Mt = 1;
class Er {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      const r = this.subscribers.indexOf(t);
      this.subscribers.splice(r, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((r) => r(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [
        ...this.toasts,
        t
      ];
    }, this.create = (t) => {
      var r;
      const { message: o, ...n } = t, s = typeof (t == null ? void 0 : t.id) == "number" || ((r = t.id) == null ? void 0 : r.length) > 0 ? t.id : Mt++, i = this.toasts.find((l) => l.id === s), a = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), i ? this.toasts = this.toasts.map((l) => l.id === s ? (this.publish({
        ...l,
        ...t,
        id: s,
        title: o
      }), {
        ...l,
        ...t,
        id: s,
        dismissible: a,
        title: o
      }) : l) : this.addToast({
        title: o,
        ...n,
        dismissible: a,
        id: s
      }), s;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((r) => r({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((r) => {
      this.subscribers.forEach((o) => o({
        id: r.id,
        dismiss: !0
      }));
    }), t), this.message = (t, r) => this.create({
      ...r,
      message: t
    }), this.error = (t, r) => this.create({
      ...r,
      message: t,
      type: "error"
    }), this.success = (t, r) => this.create({
      ...r,
      type: "success",
      message: t
    }), this.info = (t, r) => this.create({
      ...r,
      type: "info",
      message: t
    }), this.warning = (t, r) => this.create({
      ...r,
      type: "warning",
      message: t
    }), this.loading = (t, r) => this.create({
      ...r,
      type: "loading",
      message: t
    }), this.promise = (t, r) => {
      if (!r)
        return;
      let o;
      r.loading !== void 0 && (o = this.create({
        ...r,
        promise: t,
        type: "loading",
        message: r.loading,
        description: typeof r.description != "function" ? r.description : void 0
      }));
      const n = Promise.resolve(t instanceof Function ? t() : t);
      let s = o !== void 0, i;
      const a = n.then(async (u) => {
        if (i = [
          "resolve",
          u
        ], Z.isValidElement(u))
          s = !1, this.create({
            id: o,
            type: "default",
            message: u
          });
        else if (zr(u) && !u.ok) {
          s = !1;
          const f = typeof r.error == "function" ? await r.error(`HTTP error! status: ${u.status}`) : r.error, b = typeof r.description == "function" ? await r.description(`HTTP error! status: ${u.status}`) : r.description, C = typeof f == "object" && !Z.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: o,
            type: "error",
            description: b,
            ...C
          });
        } else if (u instanceof Error) {
          s = !1;
          const f = typeof r.error == "function" ? await r.error(u) : r.error, b = typeof r.description == "function" ? await r.description(u) : r.description, C = typeof f == "object" && !Z.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: o,
            type: "error",
            description: b,
            ...C
          });
        } else if (r.success !== void 0) {
          s = !1;
          const f = typeof r.success == "function" ? await r.success(u) : r.success, b = typeof r.description == "function" ? await r.description(u) : r.description, C = typeof f == "object" && !Z.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: o,
            type: "success",
            description: b,
            ...C
          });
        }
      }).catch(async (u) => {
        if (i = [
          "reject",
          u
        ], r.error !== void 0) {
          s = !1;
          const d = typeof r.error == "function" ? await r.error(u) : r.error, f = typeof r.description == "function" ? await r.description(u) : r.description, v = typeof d == "object" && !Z.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: o,
            type: "error",
            description: f,
            ...v
          });
        }
      }).finally(() => {
        s && (this.dismiss(o), o = void 0), r.finally == null || r.finally.call(r);
      }), l = () => new Promise((u, d) => a.then(() => i[0] === "reject" ? d(i[1]) : u(i[1])).catch(d));
      return typeof o != "string" && typeof o != "number" ? {
        unwrap: l
      } : Object.assign(o, {
        unwrap: l
      });
    }, this.custom = (t, r) => {
      const o = (r == null ? void 0 : r.id) || Mt++;
      return this.create({
        jsx: t(o),
        id: o,
        ...r
      }), o;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const G = new Er(), Ar = (e, t) => {
  const r = (t == null ? void 0 : t.id) || Mt++;
  return G.addToast({
    title: e,
    ...t,
    id: r
  }), r;
}, zr = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Pr = Ar, Rr = () => G.toasts, Tr = () => G.getActiveToasts(), Ur = Object.assign(Pr, {
  success: G.success,
  info: G.info,
  warning: G.warning,
  error: G.error,
  custom: G.custom,
  message: G.message,
  promise: G.promise,
  dismiss: G.dismiss,
  loading: G.loading
}, {
  getHistory: Rr,
  getToasts: Tr
});
Mr("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
export {
  Gr as E,
  Lr as S,
  _r as a,
  Nr as b,
  Yr as c,
  Vr as d,
  qr as e,
  Fr as f,
  Ve as g,
  _e as h,
  Ur as t,
  gt as u
};
