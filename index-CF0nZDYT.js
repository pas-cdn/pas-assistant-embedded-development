import { Q as Ht, o as mt, p as Qt, q as Bt, S as Xt, s as Jt, t as yt, v as Zt, w as Et, l as Tt, r as L, x as te, y as ee, z as re, c as zt, A as oe, R as q, f as Rt, B as se, C as gt, D as jt, F as Ot, G as ot, H as ae, I as ne, J as ie, K as le, L as ce, M as de, N as ue, P as vt, T as pe, U as It, V as Nt, W as fe } from "./embed-entry-Ba0tPvER.js";
import { G as ge, b as he } from "./list-threads.graphql-B-NIpOtR.js";
var be = class extends Ht {
  constructor(t, r) {
    super(t, r);
  }
  bindMethods() {
    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(t) {
    super.setOptions({
      ...t,
      behavior: mt()
    });
  }
  getOptimisticResult(t) {
    return t.behavior = mt(), super.getOptimisticResult(t);
  }
  fetchNextPage(t) {
    return this.fetch({
      ...t,
      meta: {
        fetchMore: { direction: "forward" }
      }
    });
  }
  fetchPreviousPage(t) {
    return this.fetch({
      ...t,
      meta: {
        fetchMore: { direction: "backward" }
      }
    });
  }
  createResult(t, r) {
    const { state: e } = t, o = super.createResult(t, r), { isFetching: a, isRefetching: s, isError: i, isRefetchError: n } = o, c = e.fetchMeta?.fetchMore?.direction, d = i && c === "forward", u = a && c === "forward", f = i && c === "backward", v = a && c === "backward";
    return {
      ...o,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: Bt(r, e.data),
      hasPreviousPage: Qt(r, e.data),
      isFetchNextPageError: d,
      isFetchingNextPage: u,
      isFetchPreviousPageError: f,
      isFetchingPreviousPage: v,
      isRefetchError: n && !d && !f,
      isRefetching: s && !u && !v
    };
  }
}, me = class extends Xt {
  #e;
  #o = void 0;
  #t;
  #r;
  constructor(t, r) {
    super(), this.#e = t, this.setOptions(r), this.bindMethods(), this.#s();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    const r = this.options;
    this.options = this.#e.defaultMutationOptions(t), Jt(this.options, r) || this.#e.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.#t,
      observer: this
    }), r?.mutationKey && this.options.mutationKey && yt(r.mutationKey) !== yt(this.options.mutationKey) ? this.reset() : this.#t?.state.status === "pending" && this.#t.setOptions(this.options);
  }
  onUnsubscribe() {
    this.hasListeners() || this.#t?.removeObserver(this);
  }
  onMutationUpdate(t) {
    this.#s(), this.#a(t);
  }
  getCurrentResult() {
    return this.#o;
  }
  reset() {
    this.#t?.removeObserver(this), this.#t = void 0, this.#s(), this.#a();
  }
  mutate(t, r) {
    return this.#r = r, this.#t?.removeObserver(this), this.#t = this.#e.getMutationCache().build(this.#e, this.options), this.#t.addObserver(this), this.#t.execute(t);
  }
  #s() {
    const t = this.#t?.state ?? Zt();
    this.#o = {
      ...t,
      isPending: t.status === "pending",
      isSuccess: t.status === "success",
      isError: t.status === "error",
      isIdle: t.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #a(t) {
    Et.batch(() => {
      if (this.#r && this.hasListeners()) {
        const r = this.#o.variables, e = this.#o.context, o = {
          client: this.#e,
          meta: this.options.meta,
          mutationKey: this.options.mutationKey
        };
        if (t?.type === "success") {
          try {
            this.#r.onSuccess?.(
              t.data,
              r,
              e,
              o
            );
          } catch (a) {
            Promise.reject(a);
          }
          try {
            this.#r.onSettled?.(
              t.data,
              null,
              r,
              e,
              o
            );
          } catch (a) {
            Promise.reject(a);
          }
        } else if (t?.type === "error") {
          try {
            this.#r.onError?.(
              t.error,
              r,
              e,
              o
            );
          } catch (a) {
            Promise.reject(a);
          }
          try {
            this.#r.onSettled?.(
              void 0,
              t.error,
              r,
              e,
              o
            );
          } catch (a) {
            Promise.reject(a);
          }
        }
      }
      this.listeners.forEach((r) => {
        r(this.#o);
      });
    });
  }
};
function xr(t, r) {
  const e = Tt(), [o] = L.useState(
    () => new me(
      e,
      t
    )
  );
  L.useEffect(() => {
    o.setOptions(t);
  }, [o, t]);
  const a = L.useSyncExternalStore(
    L.useCallback(
      (i) => o.subscribe(Et.batchCalls(i)),
      [o]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), s = L.useCallback(
    (i, n) => {
      o.mutate(i, n).catch(te);
    },
    [o]
  );
  if (a.error && ee(o.options.throwOnError, [a.error]))
    throw a.error;
  return { ...a, mutate: s, mutateAsync: a.mutate };
}
function ye(t, r) {
  return re(
    t,
    be
  );
}
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], wr = zt("ellipsis", ve);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], kr = zt("square-pen", xe), we = {
  isFullscreen: !1,
  isMobile: !1,
  isFixedRight: !1
}, Sr = (t = we) => {
  const [r, e] = L.useState(t);
  return L.useEffect(() => oe(e), []), r;
}, xt = (t) => Symbol.iterator in t, wt = (t) => (
  // HACK: avoid checking entries type
  "entries" in t
), kt = (t, r) => {
  const e = t instanceof Map ? t : new Map(t.entries()), o = r instanceof Map ? r : new Map(r.entries());
  if (e.size !== o.size)
    return !1;
  for (const [a, s] of e)
    if (!o.has(a) || !Object.is(s, o.get(a)))
      return !1;
  return !0;
}, ke = (t, r) => {
  const e = t[Symbol.iterator](), o = r[Symbol.iterator]();
  let a = e.next(), s = o.next();
  for (; !a.done && !s.done; ) {
    if (!Object.is(a.value, s.value))
      return !1;
    a = e.next(), s = o.next();
  }
  return !!a.done && !!s.done;
};
function Se(t, r) {
  return Object.is(t, r) ? !0 : typeof t != "object" || t === null || typeof r != "object" || r === null || Object.getPrototypeOf(t) !== Object.getPrototypeOf(r) ? !1 : xt(t) && xt(r) ? wt(t) && wt(r) ? kt(t, r) : ke(t, r) : kt(
    { entries: () => Object.entries(t) },
    { entries: () => Object.entries(r) }
  );
}
function Pe(t) {
  const r = q.useRef(void 0);
  return (e) => {
    const o = t(e);
    return Se(r.current, o) ? r.current : r.current = o;
  };
}
const Ce = async (t, r, e) => {
  try {
    const o = await Rt.request(ge, {
      token: t,
      threadId: r,
      assistantId: e
    });
    if (!o?.threadMessagesList)
      throw new Error(
        "Invalid response from server: threadMessagesList is missing"
      );
    const a = o.threadMessagesList.messages.map(
      (s, i) => {
        try {
          return se(s);
        } catch (n) {
          throw console.error(
            `Error converting message at index ${i}:`,
            n,
            s
          ), n;
        }
      }
    );
    return {
      ...o.threadMessagesList,
      messages: a
    };
  } catch (o) {
    throw console.error("Error in getThreadMessages:", {
      error: o,
      threadId: r,
      assistantId: e,
      errorMessage: o instanceof Error ? o.message : String(o),
      errorStack: o instanceof Error ? o.stack : void 0
    }), o;
  }
}, Me = () => {
  const t = gt(), r = jt(), { assistantProperties: e } = st();
  return Ot({
    queryKey: ["messages", r],
    queryFn: async () => {
      if (!t || !r || !e?.id)
        throw new Error(ot("common.validation.missingParameters"));
      return Ce(t, r, e.id);
    },
    enabled: !!t && !!r && !!e?.id && !r.startsWith("optimistic"),
    staleTime: 1e3 * 30
  });
}, st = () => {
  const { data: t, isLoading: r } = ae(), e = ne(), { assistantId: o } = ie(), a = le();
  return {
    assistantProperties: L.useMemo(() => {
      if (!t?.page)
        return;
      const i = e || o;
      if (!i)
        return;
      const n = t.page.find(
        (c) => c.id === i
      );
      return n && a ? {
        ...n,
        persona: {
          ...n.persona,
          avatar: {
            ...n.persona?.avatar ?? { id: "" },
            uri: a
          }
        }
      } : n;
    }, [
      t,
      e,
      o,
      a
    ]),
    isLoading: r
  };
}, Pr = () => {
  const t = Tt(), r = jt(), [e] = ce(), { initialMessagesFn: o } = de(), a = ue(
    Pe((C) => C.hiddenMessageIdsAfterEdit)
  ), s = L.useMemo(
    () => new Set(a),
    [a]
  ), { data: i, isLoading: n } = Ee(), { data: c, isLoading: d } = Me(), { assistantProperties: u, isLoading: f } = st(), v = e.get("lastThreadId"), P = L.useMemo(() => {
    if (!r) return [];
    const C = t.getQueryData([
      "messages",
      r
    ]);
    return Array.isArray(C?.messages) ? C.messages : [];
  }, [t, r]), E = L.useMemo(() => {
    const C = typeof v == "string" && v.trim().length > 0, y = r?.startsWith("optimistic-");
    if (!r)
      return i ? o(i) : [];
    if (!C && !y) {
      if (P.length > 0) {
        const R = s.size === 0 ? P : P.filter(
          (O) => !O.id || !s.has(O.id)
        );
        return vt(R);
      }
      return i ? o(i) : [];
    }
    const G = c?.messages ?? P;
    if (G.length > 0) {
      const R = s.size === 0 ? G : G.filter((O) => !O.id || !s.has(O.id));
      return vt(R);
    }
    return [];
  }, [
    r,
    v,
    c?.messages,
    P,
    i,
    o,
    s
  ]), k = u?.persona?.name || ot("common.fallback.noName");
  return {
    isLoading: f || n || !!r && d,
    displayMessages: E,
    assistantName: k
  };
}, Gt = 100, Ae = async (t, r, e = pe.page, o = Gt) => {
  const a = {
    token: t,
    assistantId: r,
    pagination: {
      page: e,
      perPage: o
    }
  };
  return (await Rt.request(he, a)).threadsByAssistant;
}, Cr = () => {
  const t = gt(), { assistantProperties: r } = st();
  return ye({
    queryKey: ["threads", r?.id],
    queryFn: ({ pageParam: e = 1 }) => {
      if (!t || !r?.id)
        throw new Error(ot("common.validation.missingParameters"));
      return Ae(
        t,
        r.id,
        e,
        Gt
      );
    },
    enabled: !!t && !!r?.id,
    staleTime: 1e3 * 60,
    getNextPageParam: (e) => {
      if (e.totalPages !== null && e.currentPage < e.totalPages)
        return e.currentPage + 1;
    },
    initialPageParam: 1,
    retry: (e, o) => Nt(e, o, 2),
    retryDelay: It,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
  });
}, Ee = () => {
  const t = gt(), { assistantProperties: r } = st(), e = r?.persona?.id;
  return Ot({
    queryKey: ["persona", r?.id],
    queryFn: async () => {
      if (!t || !r?.id || !e)
        throw new Error(ot("common.validation.missingParameters"));
      try {
        return await fe(t, r.id, e);
      } catch (o) {
        if (console.error(
          "[useGetPersona] Failed to load persona. Using assistant persona fallback.",
          o
        ), r?.persona)
          return r.persona;
        throw o;
      }
    },
    enabled: !!t && !!r?.id && !!e,
    retry: (o, a) => Nt(o, a, 2),
    retryDelay: It,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
  });
};
var St = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, j = (t) => !t || typeof t != "object" || Object.keys(t).length === 0, Te = (t, r) => JSON.stringify(t) === JSON.stringify(r);
function Lt(t, r) {
  t.forEach(function(e) {
    Array.isArray(e) ? Lt(e, r) : r.push(e);
  });
}
function Vt(t) {
  let r = [];
  return Lt(t, r), r;
}
var Ft = (...t) => Vt(t).filter(Boolean), _t = (t, r) => {
  let e = {}, o = Object.keys(t), a = Object.keys(r);
  for (let s of o) if (a.includes(s)) {
    let i = t[s], n = r[s];
    Array.isArray(i) || Array.isArray(n) ? e[s] = Ft(n, i) : typeof i == "object" && typeof n == "object" ? e[s] = _t(i, n) : e[s] = n + " " + i;
  } else e[s] = t[s];
  for (let s of a) o.includes(s) || (e[s] = r[s]);
  return e;
}, Pt = (t) => !t || typeof t != "string" ? t : t.replace(/\s+/g, " ").trim();
const ht = "-", ze = (t) => {
  const r = je(t), {
    conflictingClassGroups: e,
    conflictingClassGroupModifiers: o
  } = t;
  return {
    getClassGroupId: (i) => {
      const n = i.split(ht);
      return n[0] === "" && n.length !== 1 && n.shift(), Ut(n, r) || Re(i);
    },
    getConflictingClassGroupIds: (i, n) => {
      const c = e[i] || [];
      return n && o[i] ? [...c, ...o[i]] : c;
    }
  };
}, Ut = (t, r) => {
  if (t.length === 0)
    return r.classGroupId;
  const e = t[0], o = r.nextPart.get(e), a = o ? Ut(t.slice(1), o) : void 0;
  if (a)
    return a;
  if (r.validators.length === 0)
    return;
  const s = t.join(ht);
  return r.validators.find(({
    validator: i
  }) => i(s))?.classGroupId;
}, Ct = /^\[(.+)\]$/, Re = (t) => {
  if (Ct.test(t)) {
    const r = Ct.exec(t)[1], e = r?.substring(0, r.indexOf(":"));
    if (e)
      return "arbitrary.." + e;
  }
}, je = (t) => {
  const {
    theme: r,
    prefix: e
  } = t, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ie(Object.entries(t.classGroups), e).forEach(([s, i]) => {
    ct(i, o, s, r);
  }), o;
}, ct = (t, r, e, o) => {
  t.forEach((a) => {
    if (typeof a == "string") {
      const s = a === "" ? r : Mt(r, a);
      s.classGroupId = e;
      return;
    }
    if (typeof a == "function") {
      if (Oe(a)) {
        ct(a(o), r, e, o);
        return;
      }
      r.validators.push({
        validator: a,
        classGroupId: e
      });
      return;
    }
    Object.entries(a).forEach(([s, i]) => {
      ct(i, Mt(r, s), e, o);
    });
  });
}, Mt = (t, r) => {
  let e = t;
  return r.split(ht).forEach((o) => {
    e.nextPart.has(o) || e.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), e = e.nextPart.get(o);
  }), e;
}, Oe = (t) => t.isThemeGetter, Ie = (t, r) => r ? t.map(([e, o]) => {
  const a = o.map((s) => typeof s == "string" ? r + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, n]) => [r + i, n])) : s);
  return [e, a];
}) : t, Ne = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, e = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const a = (s, i) => {
    e.set(s, i), r++, r > t && (r = 0, o = e, e = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = e.get(s);
      if (i !== void 0)
        return i;
      if ((i = o.get(s)) !== void 0)
        return a(s, i), i;
    },
    set(s, i) {
      e.has(s) ? e.set(s, i) : a(s, i);
    }
  };
}, Yt = "!", Ge = (t) => {
  const {
    separator: r,
    experimentalParseClassName: e
  } = t, o = r.length === 1, a = r[0], s = r.length, i = (n) => {
    const c = [];
    let d = 0, u = 0, f;
    for (let m = 0; m < n.length; m++) {
      let C = n[m];
      if (d === 0) {
        if (C === a && (o || n.slice(m, m + s) === r)) {
          c.push(n.slice(u, m)), u = m + s;
          continue;
        }
        if (C === "/") {
          f = m;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" && d--;
    }
    const v = c.length === 0 ? n : n.substring(u), P = v.startsWith(Yt), E = P ? v.substring(1) : v, k = f && f > u ? f - u : void 0;
    return {
      modifiers: c,
      hasImportantModifier: P,
      baseClassName: E,
      maybePostfixModifierPosition: k
    };
  };
  return e ? (n) => e({
    className: n,
    parseClassName: i
  }) : i;
}, Le = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let e = [];
  return t.forEach((o) => {
    o[0] === "[" ? (r.push(...e.sort(), o), e = []) : e.push(o);
  }), r.push(...e.sort()), r;
}, Ve = (t) => ({
  cache: Ne(t.cacheSize),
  parseClassName: Ge(t),
  ...ze(t)
}), Fe = /\s+/, _e = (t, r) => {
  const {
    parseClassName: e,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = r, s = [], i = t.trim().split(Fe);
  let n = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const d = i[c], {
      modifiers: u,
      hasImportantModifier: f,
      baseClassName: v,
      maybePostfixModifierPosition: P
    } = e(d);
    let E = !!P, k = o(E ? v.substring(0, P) : v);
    if (!k) {
      if (!E) {
        n = d + (n.length > 0 ? " " + n : n);
        continue;
      }
      if (k = o(v), !k) {
        n = d + (n.length > 0 ? " " + n : n);
        continue;
      }
      E = !1;
    }
    const m = Le(u).join(":"), C = f ? m + Yt : m, y = C + k;
    if (s.includes(y))
      continue;
    s.push(y);
    const G = a(k, E);
    for (let R = 0; R < G.length; ++R) {
      const O = G[R];
      s.push(C + O);
    }
    n = d + (n.length > 0 ? " " + n : n);
  }
  return n;
};
function Ue() {
  let t = 0, r, e, o = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (e = qt(r)) && (o && (o += " "), o += e);
  return o;
}
const qt = (t) => {
  if (typeof t == "string")
    return t;
  let r, e = "";
  for (let o = 0; o < t.length; o++)
    t[o] && (r = qt(t[o])) && (e && (e += " "), e += r);
  return e;
};
function dt(t, ...r) {
  let e, o, a, s = i;
  function i(c) {
    const d = r.reduce((u, f) => f(u), t());
    return e = Ve(d), o = e.cache.get, a = e.cache.set, s = n, n(c);
  }
  function n(c) {
    const d = o(c);
    if (d)
      return d;
    const u = _e(c, e);
    return a(c, u), u;
  }
  return function() {
    return s(Ue.apply(null, arguments));
  };
}
const A = (t) => {
  const r = (e) => e[t] || [];
  return r.isThemeGetter = !0, r;
}, Wt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ye = /^\d+\/\d+$/, qe = /* @__PURE__ */ new Set(["px", "full", "screen"]), We = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ke = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, De = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, $e = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, He = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, V = (t) => W(t) || qe.has(t) || Ye.test(t), _ = (t) => K(t, "length", rr), W = (t) => !!t && !Number.isNaN(Number(t)), it = (t) => K(t, "number", W), B = (t) => !!t && Number.isInteger(Number(t)), Qe = (t) => t.endsWith("%") && W(t.slice(0, -1)), p = (t) => Wt.test(t), U = (t) => We.test(t), Be = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Xe = (t) => K(t, Be, Kt), Je = (t) => K(t, "position", Kt), Ze = /* @__PURE__ */ new Set(["image", "url"]), tr = (t) => K(t, Ze, sr), er = (t) => K(t, "", or), X = () => !0, K = (t, r, e) => {
  const o = Wt.exec(t);
  return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : e(o[2]) : !1;
}, rr = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ke.test(t) && !De.test(t)
), Kt = () => !1, or = (t) => $e.test(t), sr = (t) => He.test(t), ut = () => {
  const t = A("colors"), r = A("spacing"), e = A("blur"), o = A("brightness"), a = A("borderColor"), s = A("borderRadius"), i = A("borderSpacing"), n = A("borderWidth"), c = A("contrast"), d = A("grayscale"), u = A("hueRotate"), f = A("invert"), v = A("gap"), P = A("gradientColorStops"), E = A("gradientColorStopPositions"), k = A("inset"), m = A("margin"), C = A("opacity"), y = A("padding"), G = A("saturate"), R = A("scale"), O = A("sepia"), et = A("skew"), D = A("space"), $ = A("translate"), Y = () => ["auto", "contain", "none"], H = () => ["auto", "hidden", "clip", "visible", "scroll"], Q = () => ["auto", p, r], l = () => [p, r], h = () => ["", V, _], g = () => ["auto", W, p], x = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], b = () => ["solid", "dashed", "dotted", "double", "none"], w = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", p], T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [W, p];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [X],
      spacing: [V, _],
      blur: ["none", "", U, p],
      brightness: z(),
      borderColor: [t],
      borderRadius: ["none", "", "full", U, p],
      borderSpacing: l(),
      borderWidth: h(),
      contrast: z(),
      grayscale: M(),
      hueRotate: z(),
      invert: M(),
      gap: l(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Qe, _],
      inset: Q(),
      margin: Q(),
      opacity: z(),
      padding: l(),
      saturate: z(),
      scale: z(),
      sepia: M(),
      skew: z(),
      space: l(),
      translate: l()
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
        columns: [U]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": T()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": T()
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
        object: [...x(), p]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
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
        z: ["auto", B, p]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Q()
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
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", B, p]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [X]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", B, p]
        }, p]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": g()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": g()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [X]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [B, p]
        }, p]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": g()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": g()
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
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...S()]
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
        content: ["normal", ...S(), "baseline"]
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
        "place-content": [...S(), "baseline"]
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
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
        "space-y": [D]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", p, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [p, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [p, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [U]
        }, U]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [p, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [p, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [p, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [p, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", U, _]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", it]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [X]
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
        "line-clamp": ["none", W, it]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", V, p]
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
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [C]
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
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [C]
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
        decoration: [...b(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", V, _]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", V, p]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
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
        indent: l()
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
        "bg-opacity": [C]
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
        bg: [...x(), Je]
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
        bg: ["auto", "cover", "contain", Xe]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, tr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [E]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [E]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [E]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [P]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [P]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [P]
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
        border: [n]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [n]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [n]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [n]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [n]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [n]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [n]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [n]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [n]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...b(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [n]
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
        "divide-y": [n]
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
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: b()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...b()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [V, p]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [V, _]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: h()
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
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [V, _]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", U, er]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [X]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...w(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": w()
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
        blur: [e]
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", U, p]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
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
        saturate: [G]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [O]
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
        "backdrop-blur": [e]
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
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
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
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [G]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [O]
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
        duration: z()
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
        delay: z()
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
        scale: [R]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [R]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [R]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [B, p]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [$]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [$]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [et]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [et]
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
        accent: ["auto", t]
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
        caret: [t]
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
        "scroll-m": l()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": l()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": l()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": l()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": l()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": l()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": l()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": l()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": l()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": l()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": l()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": l()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": l()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": l()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": l()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": l()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": l()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": l()
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
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [V, _, it]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
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
}, ar = (t, {
  cacheSize: r,
  prefix: e,
  separator: o,
  experimentalParseClassName: a,
  extend: s = {},
  override: i = {}
}) => {
  Z(t, "cacheSize", r), Z(t, "prefix", e), Z(t, "separator", o), Z(t, "experimentalParseClassName", a);
  for (const n in i)
    nr(t[n], i[n]);
  for (const n in s)
    ir(t[n], s[n]);
  return t;
}, Z = (t, r, e) => {
  e !== void 0 && (t[r] = e);
}, nr = (t, r) => {
  if (r)
    for (const e in r)
      Z(t, e, r[e]);
}, ir = (t, r) => {
  if (r)
    for (const e in r) {
      const o = r[e];
      o !== void 0 && (t[e] = (t[e] || []).concat(o));
    }
}, lr = (t, ...r) => typeof t == "function" ? dt(ut, t, ...r) : dt(() => ar(ut(), t), ...r), cr = /* @__PURE__ */ dt(ut);
var dr = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Dt = (t) => t || void 0, tt = (...t) => Dt(Vt(t).filter(Boolean).join(" ")), lt = null, F = {}, pt = !1, J = (...t) => (r) => r.twMerge ? ((!lt || pt) && (pt = !1, lt = j(F) ? cr : lr({ ...F, extend: { theme: F.theme, classGroups: F.classGroups, conflictingClassGroupModifiers: F.conflictingClassGroupModifiers, conflictingClassGroups: F.conflictingClassGroups, ...F.extend } })), Dt(lt(tt(t)))) : tt(t), At = (t, r) => {
  for (let e in r) t.hasOwnProperty(e) ? t[e] = tt(t[e], r[e]) : t[e] = r[e];
  return t;
}, Mr = (t, r) => {
  let { extend: e = null, slots: o = {}, variants: a = {}, compoundVariants: s = [], compoundSlots: i = [], defaultVariants: n = {} } = t, c = { ...dr, ...r }, d = e != null && e.base ? tt(e.base, t?.base) : t?.base, u = e != null && e.variants && !j(e.variants) ? _t(a, e.variants) : a, f = e != null && e.defaultVariants && !j(e.defaultVariants) ? { ...e.defaultVariants, ...n } : n;
  !j(c.twMergeConfig) && !Te(c.twMergeConfig, F) && (pt = !0, F = c.twMergeConfig);
  let v = j(e?.slots), P = j(o) ? {} : { base: tt(t?.base, v && e?.base), ...o }, E = v ? P : At({ ...e?.slots }, j(P) ? { base: t?.base } : P), k = j(e?.compoundVariants) ? s : Ft(e?.compoundVariants, s), m = (y) => {
    if (j(u) && j(o) && v) return J(d, y?.class, y?.className)(c);
    if (k && !Array.isArray(k)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof k}`);
    if (i && !Array.isArray(i)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);
    let G = (l, h, g = [], x) => {
      let b = g;
      if (typeof h == "string") b = b.concat(Pt(h).split(" ").map((w) => `${l}:${w}`));
      else if (Array.isArray(h)) b = b.concat(h.reduce((w, S) => w.concat(`${l}:${S}`), []));
      else if (typeof h == "object" && typeof x == "string") {
        for (let w in h) if (h.hasOwnProperty(w) && w === x) {
          let S = h[w];
          if (S && typeof S == "string") {
            let M = Pt(S);
            b[x] ? b[x] = b[x].concat(M.split(" ").map((T) => `${l}:${T}`)) : b[x] = M.split(" ").map((T) => `${l}:${T}`);
          } else Array.isArray(S) && S.length > 0 && (b[x] = S.reduce((M, T) => M.concat(`${l}:${T}`), []));
        }
      }
      return b;
    }, R = (l, h = u, g = null, x = null) => {
      var b;
      let w = h[l];
      if (!w || j(w)) return null;
      let S = (b = x?.[l]) != null ? b : y?.[l];
      if (S === null) return null;
      let M = St(S), T = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || c.responsiveVariants === !0, z = f?.[l], I = [];
      if (typeof M == "object" && T) for (let [nt, bt] of Object.entries(M)) {
        let $t = w[bt];
        if (nt === "initial") {
          z = bt;
          continue;
        }
        Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(nt) || (I = G(nt, $t, I, g));
      }
      let rt = M != null && typeof M != "object" ? M : St(z), at = w[rt || "false"];
      return typeof I == "object" && typeof g == "string" && I[g] ? At(I, at) : I.length > 0 ? (I.push(at), g === "base" ? I.join(" ") : I) : at;
    }, O = () => u ? Object.keys(u).map((l) => R(l, u)) : null, et = (l, h) => {
      if (!u || typeof u != "object") return null;
      let g = new Array();
      for (let x in u) {
        let b = R(x, u, l, h), w = l === "base" && typeof b == "string" ? b : b && b[l];
        w && (g[g.length] = w);
      }
      return g;
    }, D = {};
    for (let l in y) y[l] !== void 0 && (D[l] = y[l]);
    let $ = (l, h) => {
      var g;
      let x = typeof y?.[l] == "object" ? { [l]: (g = y[l]) == null ? void 0 : g.initial } : {};
      return { ...f, ...D, ...x, ...h };
    }, Y = (l = [], h) => {
      let g = [];
      for (let { class: x, className: b, ...w } of l) {
        let S = !0;
        for (let [M, T] of Object.entries(w)) {
          let z = $(M, h)[M];
          if (Array.isArray(T)) {
            if (!T.includes(z)) {
              S = !1;
              break;
            }
          } else {
            let I = (rt) => rt == null || rt === !1;
            if (I(T) && I(z)) continue;
            if (z !== T) {
              S = !1;
              break;
            }
          }
        }
        S && (x && g.push(x), b && g.push(b));
      }
      return g;
    }, H = (l) => {
      let h = Y(k, l);
      if (!Array.isArray(h)) return h;
      let g = {};
      for (let x of h) if (typeof x == "string" && (g.base = J(g.base, x)(c)), typeof x == "object") for (let [b, w] of Object.entries(x)) g[b] = J(g[b], w)(c);
      return g;
    }, Q = (l) => {
      if (i.length < 1) return null;
      let h = {};
      for (let { slots: g = [], class: x, className: b, ...w } of i) {
        if (!j(w)) {
          let S = !0;
          for (let M of Object.keys(w)) {
            let T = $(M, l)[M];
            if (T === void 0 || (Array.isArray(w[M]) ? !w[M].includes(T) : w[M] !== T)) {
              S = !1;
              break;
            }
          }
          if (!S) continue;
        }
        for (let S of g) h[S] = h[S] || [], h[S].push([x, b]);
      }
      return h;
    };
    if (!j(o) || !v) {
      let l = {};
      if (typeof E == "object" && !j(E)) for (let h of Object.keys(E)) l[h] = (g) => {
        var x, b;
        return J(E[h], et(h, g), ((x = H(g)) != null ? x : [])[h], ((b = Q(g)) != null ? b : [])[h], g?.class, g?.className)(c);
      };
      return l;
    }
    return J(d, O(), Y(k), y?.class, y?.className)(c);
  }, C = () => {
    if (!(!u || typeof u != "object")) return Object.keys(u);
  };
  return m.variantKeys = C(), m.extend = e, m.base = d, m.slots = E, m.variants = u, m.defaultVariants = f, m.compoundSlots = i, m.compoundVariants = k, m;
};
const Ar = (t) => t.match(/^\/assistant\/[^/]+(\/.*)?$/)?.[1] || "/";
function ur(t) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", r.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
Array(12).fill(0);
let ft = 1;
class pr {
  constructor() {
    this.subscribe = (r) => (this.subscribers.push(r), () => {
      const e = this.subscribers.indexOf(r);
      this.subscribers.splice(e, 1);
    }), this.publish = (r) => {
      this.subscribers.forEach((e) => e(r));
    }, this.addToast = (r) => {
      this.publish(r), this.toasts = [
        ...this.toasts,
        r
      ];
    }, this.create = (r) => {
      var e;
      const { message: o, ...a } = r, s = typeof r?.id == "number" || ((e = r.id) == null ? void 0 : e.length) > 0 ? r.id : ft++, i = this.toasts.find((c) => c.id === s), n = r.dismissible === void 0 ? !0 : r.dismissible;
      return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), i ? this.toasts = this.toasts.map((c) => c.id === s ? (this.publish({
        ...c,
        ...r,
        id: s,
        title: o
      }), {
        ...c,
        ...r,
        id: s,
        dismissible: n,
        title: o
      }) : c) : this.addToast({
        title: o,
        ...a,
        dismissible: n,
        id: s
      }), s;
    }, this.dismiss = (r) => (r ? (this.dismissedToasts.add(r), requestAnimationFrame(() => this.subscribers.forEach((e) => e({
      id: r,
      dismiss: !0
    })))) : this.toasts.forEach((e) => {
      this.subscribers.forEach((o) => o({
        id: e.id,
        dismiss: !0
      }));
    }), r), this.message = (r, e) => this.create({
      ...e,
      message: r
    }), this.error = (r, e) => this.create({
      ...e,
      message: r,
      type: "error"
    }), this.success = (r, e) => this.create({
      ...e,
      type: "success",
      message: r
    }), this.info = (r, e) => this.create({
      ...e,
      type: "info",
      message: r
    }), this.warning = (r, e) => this.create({
      ...e,
      type: "warning",
      message: r
    }), this.loading = (r, e) => this.create({
      ...e,
      type: "loading",
      message: r
    }), this.promise = (r, e) => {
      if (!e)
        return;
      let o;
      e.loading !== void 0 && (o = this.create({
        ...e,
        promise: r,
        type: "loading",
        message: e.loading,
        description: typeof e.description != "function" ? e.description : void 0
      }));
      const a = Promise.resolve(r instanceof Function ? r() : r);
      let s = o !== void 0, i;
      const n = a.then(async (d) => {
        if (i = [
          "resolve",
          d
        ], q.isValidElement(d))
          s = !1, this.create({
            id: o,
            type: "default",
            message: d
          });
        else if (gr(d) && !d.ok) {
          s = !1;
          const f = typeof e.error == "function" ? await e.error(`HTTP error! status: ${d.status}`) : e.error, v = typeof e.description == "function" ? await e.description(`HTTP error! status: ${d.status}`) : e.description, E = typeof f == "object" && !q.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: o,
            type: "error",
            description: v,
            ...E
          });
        } else if (d instanceof Error) {
          s = !1;
          const f = typeof e.error == "function" ? await e.error(d) : e.error, v = typeof e.description == "function" ? await e.description(d) : e.description, E = typeof f == "object" && !q.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: o,
            type: "error",
            description: v,
            ...E
          });
        } else if (e.success !== void 0) {
          s = !1;
          const f = typeof e.success == "function" ? await e.success(d) : e.success, v = typeof e.description == "function" ? await e.description(d) : e.description, E = typeof f == "object" && !q.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: o,
            type: "success",
            description: v,
            ...E
          });
        }
      }).catch(async (d) => {
        if (i = [
          "reject",
          d
        ], e.error !== void 0) {
          s = !1;
          const u = typeof e.error == "function" ? await e.error(d) : e.error, f = typeof e.description == "function" ? await e.description(d) : e.description, P = typeof u == "object" && !q.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: o,
            type: "error",
            description: f,
            ...P
          });
        }
      }).finally(() => {
        s && (this.dismiss(o), o = void 0), e.finally == null || e.finally.call(e);
      }), c = () => new Promise((d, u) => n.then(() => i[0] === "reject" ? u(i[1]) : d(i[1])).catch(u));
      return typeof o != "string" && typeof o != "number" ? {
        unwrap: c
      } : Object.assign(o, {
        unwrap: c
      });
    }, this.custom = (r, e) => {
      const o = e?.id || ft++;
      return this.create({
        jsx: r(o),
        id: o,
        ...e
      }), o;
    }, this.getActiveToasts = () => this.toasts.filter((r) => !this.dismissedToasts.has(r.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const N = new pr(), fr = (t, r) => {
  const e = r?.id || ft++;
  return N.addToast({
    title: t,
    ...r,
    id: e
  }), e;
}, gr = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", hr = fr, br = () => N.toasts, mr = () => N.getActiveToasts(), Er = Object.assign(hr, {
  success: N.success,
  info: N.info,
  warning: N.warning,
  error: N.error,
  custom: N.custom,
  message: N.message,
  promise: N.promise,
  dismiss: N.dismiss,
  loading: N.loading
}, {
  getHistory: br,
  getToasts: mr
});
ur("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
export {
  wr as E,
  kr as S,
  Cr as a,
  xr as b,
  Mr as c,
  Pr as d,
  Ar as e,
  Sr as f,
  Ce as g,
  Me as h,
  Er as t,
  st as u
};
