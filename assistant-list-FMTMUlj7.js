var W = (e) => {
  throw TypeError(e);
};
var D = (e, t, s) => t.has(e) || W("Cannot " + s);
var l = (e, t, s) => (D(e, t, "read from private field"), s ? s.call(e) : t.get(e)), C = (e, t, s) => t.has(e) ? W("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), M = (e, t, s, a) => (D(e, t, "write to private field"), a ? a.call(e, s) : t.set(e, s), s), T = (e, t, s) => (D(e, t, "access private method"), s);
import { aa as At, ab as St, ac as H, ad as bt, ae as Y, c as xt, r as u, af as It, ag as wt, ah as Lt, j as m, ai as G, aj as Et, ak as O, q as N, v as p, _ as J, al as Ct, a9 as Mt, am as Tt, G as X, n as Z, an as tt, o as et, s as st, t as L, ao as kt, m as Rt, ap as _t, p as at, aq as jt, J as K, a as Ft, I as Nt } from "./embed-entry-BpPVpfZi.js";
var S, I, v, b, x, j, q, z, $t = (z = class extends At {
  constructor(t, s) {
    super();
    C(this, x);
    C(this, S);
    C(this, I);
    C(this, v);
    C(this, b);
    M(this, S, t), this.setOptions(s), this.bindMethods(), T(this, x, j).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var a;
    const s = this.options;
    this.options = l(this, S).defaultMutationOptions(t), St(this.options, s) || l(this, S).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: l(this, v),
      observer: this
    }), s != null && s.mutationKey && this.options.mutationKey && H(s.mutationKey) !== H(this.options.mutationKey) ? this.reset() : ((a = l(this, v)) == null ? void 0 : a.state.status) === "pending" && l(this, v).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = l(this, v)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    T(this, x, j).call(this), T(this, x, q).call(this, t);
  }
  getCurrentResult() {
    return l(this, I);
  }
  reset() {
    var t;
    (t = l(this, v)) == null || t.removeObserver(this), M(this, v, void 0), T(this, x, j).call(this), T(this, x, q).call(this);
  }
  mutate(t, s) {
    var a;
    return M(this, b, s), (a = l(this, v)) == null || a.removeObserver(this), M(this, v, l(this, S).getMutationCache().build(l(this, S), this.options)), l(this, v).addObserver(this), l(this, v).execute(t);
  }
}, S = new WeakMap(), I = new WeakMap(), v = new WeakMap(), b = new WeakMap(), x = new WeakSet(), j = function() {
  var s;
  const t = ((s = l(this, v)) == null ? void 0 : s.state) ?? bt();
  M(this, I, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, q = function(t) {
  Y.batch(() => {
    var s, a, n, r, o, i, c, d;
    if (l(this, b) && this.hasListeners()) {
      const h = l(this, I).variables, f = l(this, I).context, g = {
        client: l(this, S),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      (t == null ? void 0 : t.type) === "success" ? ((a = (s = l(this, b)).onSuccess) == null || a.call(
        s,
        t.data,
        h,
        f,
        g
      ), (r = (n = l(this, b)).onSettled) == null || r.call(
        n,
        t.data,
        null,
        h,
        f,
        g
      )) : (t == null ? void 0 : t.type) === "error" && ((i = (o = l(this, b)).onError) == null || i.call(
        o,
        t.error,
        h,
        f,
        g
      ), (d = (c = l(this, b)).onSettled) == null || d.call(
        c,
        void 0,
        t.error,
        h,
        f,
        g
      ));
    }
    this.listeners.forEach((h) => {
      h(l(this, I));
    });
  });
}, z);
function xe(e, t) {
  const s = xt(), [a] = u.useState(
    () => new $t(
      s,
      e
    )
  );
  u.useEffect(() => {
    a.setOptions(e);
  }, [a, e]);
  const n = u.useSyncExternalStore(
    u.useCallback(
      (o) => a.subscribe(Y.batchCalls(o)),
      [a]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), r = u.useCallback(
    (o, i) => {
      a.mutate(o, i).catch(It);
    },
    [a]
  );
  if (n.error && wt(a.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: r, mutateAsync: n.mutate };
}
const Dt = {
  isFullscreen: !1,
  isMobile: !1,
  isFixedRight: !1
}, Ie = (e = Dt) => {
  const [t, s] = u.useState(e);
  return u.useEffect(() => Lt(s), []), t;
};
function Ut(e, t = []) {
  let s = [];
  function a(r, o) {
    const i = u.createContext(o);
    i.displayName = r + "Context";
    const c = s.length;
    s = [...s, o];
    const d = (f) => {
      var V;
      const { scope: g, children: A, ...w } = f, E = ((V = g == null ? void 0 : g[e]) == null ? void 0 : V[c]) || i, yt = u.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ m.jsx(E.Provider, { value: yt, children: A });
    };
    d.displayName = r + "Provider";
    function h(f, g) {
      var E;
      const A = ((E = g == null ? void 0 : g[e]) == null ? void 0 : E[c]) || i, w = u.useContext(A);
      if (w) return w;
      if (o !== void 0) return o;
      throw new Error(`\`${f}\` must be used within \`${r}\``);
    }
    return [d, h];
  }
  const n = () => {
    const r = s.map((o) => u.createContext(o));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || r;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return n.scopeName = e, [a, Ot(n, ...t)];
}
function Ot(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const s = () => {
    const a = e.map((n) => ({
      useScope: n(),
      scopeName: n.scopeName
    }));
    return function(r) {
      const o = a.reduce((i, { useScope: c, scopeName: d }) => {
        const f = c(r)[`__scope${d}`];
        return { ...i, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return s.scopeName = t.scopeName, s;
}
var nt = { exports: {} }, rt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R = u;
function qt(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Gt = typeof Object.is == "function" ? Object.is : qt, Kt = R.useState, Pt = R.useEffect, Bt = R.useLayoutEffect, Vt = R.useDebugValue;
function Wt(e, t) {
  var s = t(), a = Kt({ inst: { value: s, getSnapshot: t } }), n = a[0].inst, r = a[1];
  return Bt(
    function() {
      n.value = s, n.getSnapshot = t, U(n) && r({ inst: n });
    },
    [e, s, t]
  ), Pt(
    function() {
      return U(n) && r({ inst: n }), e(function() {
        U(n) && r({ inst: n });
      });
    },
    [e]
  ), Vt(s), s;
}
function U(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var s = t();
    return !Gt(e, s);
  } catch {
    return !0;
  }
}
function Ht(e, t) {
  return t();
}
var Qt = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Ht : Wt;
rt.useSyncExternalStore = R.useSyncExternalStore !== void 0 ? R.useSyncExternalStore : Qt;
nt.exports = rt;
var zt = nt.exports;
function Yt() {
  return zt.useSyncExternalStore(
    Jt,
    () => !0,
    () => !1
  );
}
function Jt() {
  return () => {
  };
}
var P = "Avatar", [Xt] = Ut(P), [Zt, ot] = Xt(P), it = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: s, ...a } = e, [n, r] = u.useState("idle");
    return /* @__PURE__ */ m.jsx(
      Zt,
      {
        scope: s,
        imageLoadingStatus: n,
        onImageLoadingStatusChange: r,
        children: /* @__PURE__ */ m.jsx(G.span, { ...a, ref: t })
      }
    );
  }
);
it.displayName = P;
var ut = "AvatarImage", ct = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: s, src: a, onLoadingStatusChange: n = () => {
    }, ...r } = e, o = ot(ut, s), i = te(a, r), c = Et((d) => {
      n(d), o.onImageLoadingStatusChange(d);
    });
    return O(() => {
      i !== "idle" && c(i);
    }, [i, c]), i === "loaded" ? /* @__PURE__ */ m.jsx(G.img, { ...r, ref: t, src: a }) : null;
  }
);
ct.displayName = ut;
var lt = "AvatarFallback", dt = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: s, delayMs: a, ...n } = e, r = ot(lt, s), [o, i] = u.useState(a === void 0);
    return u.useEffect(() => {
      if (a !== void 0) {
        const c = window.setTimeout(() => i(!0), a);
        return () => window.clearTimeout(c);
      }
    }, [a]), o && r.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ m.jsx(G.span, { ...n, ref: t }) : null;
  }
);
dt.displayName = lt;
function Q(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function te(e, { referrerPolicy: t, crossOrigin: s }) {
  const a = Yt(), n = u.useRef(null), r = a ? (n.current || (n.current = new window.Image()), n.current) : null, [o, i] = u.useState(
    () => Q(r, e)
  );
  return O(() => {
    i(Q(r, e));
  }, [r, e]), O(() => {
    const c = (f) => () => {
      i(f);
    };
    if (!r) return;
    const d = c("loaded"), h = c("error");
    return r.addEventListener("load", d), r.addEventListener("error", h), t && (r.referrerPolicy = t), typeof s == "string" && (r.crossOrigin = s), () => {
      r.removeEventListener("load", d), r.removeEventListener("error", h);
    };
  }, [r, s, t]), o;
}
var ee = it, se = ct, ae = dt, y = /* @__PURE__ */ ((e) => (e.Idle = "idle", e.Loading = "loading", e.Loaded = "loaded", e.Error = "error", e))(y || {}), F = /* @__PURE__ */ ((e) => (e.Safari = "safari", e.Chrome = "chrome", e.Android = "android", e))(F || {}), _ = /* @__PURE__ */ ((e) => (e.Anonymous = "anonymous", e.UseCredentials = "use-credentials", e.Empty = "", e))(_ || {});
const ne = (e, t) => {
  const s = new Image();
  s.onload = t, s.onerror = t, s.crossOrigin = _.Anonymous, s.src = e;
}, re = () => {
  var e;
  if (typeof window < "u") {
    const t = (e = window.navigator) == null ? void 0 : e.userAgent.toLowerCase(), s = t.includes(F.Safari) && !t.includes(F.Chrome) && !t.includes(F.Android), a = window.safari !== void 0;
    return s || a;
  }
  return !1;
};
function oe(e, t = !1) {
  const [s, a] = u.useState(
    y.Idle
  );
  u.useEffect(() => {
    if (!e) {
      a(y.Idle);
      return;
    }
    a(y.Loading), t && re() && ne(e, () => {
    });
  }, [e, t]);
  const n = u.useCallback(() => {
    a(y.Loaded);
  }, []), r = u.useCallback(() => {
    a(y.Error);
  }, []);
  return {
    imageStatus: s,
    handleImageLoad: n,
    handleImageError: r
  };
}
const B = N({
  slots: {
    root: p(
      "relative flex shrink-0 overflow-hidden rounded-full",
      "h-10 w-10"
    ),
    image: "aspect-square h-full w-full object-cover",
    fallback: p(
      "flex h-full w-full items-center justify-center rounded-full bg-gray-200"
    )
  },
  defaultVariants: {}
}), mt = u.forwardRef(
  ({ className: e, ...t }, s) => {
    const { root: a } = B();
    return /* @__PURE__ */ m.jsx(ee, { ref: s, className: p(a(), e), ...t });
  }
);
mt.displayName = "AvatarBase";
const ht = u.forwardRef(
  ({ className: e, src: t, alt: s, crossOrigin: a, onLoadFinish: n, ...r }, o) => {
    const { image: i } = B(), c = a === _.Anonymous || a === _.UseCredentials, { handleImageLoad: d, handleImageError: h } = oe(
      t,
      c
    );
    return /* @__PURE__ */ m.jsx(
      se,
      {
        ref: o,
        src: t,
        alt: s,
        className: p(i(), e),
        crossOrigin: a,
        onLoad: () => {
          d(), n(y.Loaded);
        },
        onError: () => {
          h(), n(y.Error);
        },
        ...r
      }
    );
  }
);
ht.displayName = "AvatarImage";
const ft = u.forwardRef(({ className: e, ...t }, s) => {
  const { fallback: a } = B();
  return /* @__PURE__ */ m.jsx(ae, { ref: s, className: p(a(), e), ...t });
});
ft.displayName = "AvatarFallback";
var k = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(k || {});
const ie = k.Default, gt = "Anonymous", ue = "User Avatar", ce = "AV", le = (e = "") => {
  var o;
  if (!e) return "";
  const t = e.replace(/ +/g, " ").trim(), s = t.split(" ");
  if (s.length === 1) return ((o = t[0]) == null ? void 0 : o.toUpperCase()) || "";
  const [a] = s, n = s.pop();
  return `${a[0] || ""}${(n == null ? void 0 : n[0]) || ""}`.toUpperCase();
};
function de(e, t) {
  const [s, a] = u.useState(
    y.Idle
  ), n = u.useMemo(
    () => le(t || gt) || ce,
    [t]
  ), r = u.useMemo(
    () => t || ue,
    [t]
  ), o = !!e && s !== y.Error, i = u.useCallback(
    (c) => {
      a(c);
    },
    []
  );
  return {
    imageLoadStatus: s,
    userInitials: n,
    userAltText: r,
    showImage: o,
    handleImageLoadingStatusChange: i
  };
}
const me = N({
  slots: {
    container: "flex items-center",
    avatar: "",
    avatarFallback: "flex items-center justify-center font-bold uppercase text-primary bg-slate-200"
  },
  variants: {
    size: {
      [k.Small]: {
        avatar: "h-6 w-6",
        avatarFallback: "text-xs"
      },
      [k.Default]: {
        avatar: "h-8 w-8",
        avatarFallback: "text-sm"
      },
      [k.Large]: {
        avatar: "h-10 w-10",
        avatarFallback: "text-base"
      }
    }
  },
  defaultVariants: {
    size: k.Default
  }
}), vt = ({
  id: e,
  src: t,
  fullName: s = gt,
  size: a = ie,
  className: n,
  enableCors: r = !1,
  ...o
}) => {
  const { avatar: i, avatarFallback: c, container: d } = me({ size: a }), {
    userInitials: h,
    userAltText: f,
    showImage: g,
    handleImageLoadingStatusChange: A
  } = de(t, s);
  return /* @__PURE__ */ m.jsx("div", { className: d(), ...o, children: /* @__PURE__ */ m.jsx(mt, { className: p(i(), n), id: e, children: g ? /* @__PURE__ */ m.jsx(
    ht,
    {
      src: t,
      alt: f,
      crossOrigin: r ? _.Anonymous : void 0,
      onLoadFinish: A
    }
  ) : /* @__PURE__ */ m.jsx(ft, { className: c(), children: h }) }) });
};
vt.displayName = "Avatar";
const $ = () => {
  const { data: e, isLoading: t } = J(), s = Ct(), { assistantId: a } = Mt(), n = Tt();
  return {
    assistantProperties: u.useMemo(() => {
      var c;
      if (!(e != null && e.page))
        return;
      const o = s || a;
      if (!o)
        return;
      const i = e.page.find(
        (d) => d.id === o
      );
      return i && n ? {
        ...i,
        persona: {
          ...i.persona,
          avatar: {
            ...((c = i.persona) == null ? void 0 : c.avatar) ?? { id: "" },
            uri: n
          }
        }
      } : i;
    }, [
      e,
      s,
      a,
      n
    ]),
    isLoading: t
  };
}, we = X`
  query ThreadsByAssistant($token: String!, $assistantId: ID!, $pagination: PaginationInput) {
    threadsByAssistant(token: $token, assistantId: $assistantId, pagination: $pagination) {
      currentPage
      totalPages
      totalRows
      perPage
      page {
        id
        title
        assistantId
        isFavorite
        createdAt
        updatedAt
      }
    }
  }
`, pt = () => {
  var a;
  const e = Z(), { assistantProperties: t } = $(), s = (a = t == null ? void 0 : t.persona) == null ? void 0 : a.id;
  return tt({
    queryKey: ["persona", t == null ? void 0 : t.id],
    queryFn: async () => {
      if (!e || !(t != null && t.id) || !s)
        throw new Error(L("common.validation.missingParameters"));
      try {
        return await kt(e, t.id, s);
      } catch (n) {
        if (console.error(
          "[useGetPersona] Failed to load persona. Using assistant persona fallback.",
          n
        ), t != null && t.persona)
          return t.persona;
        throw n;
      }
    },
    enabled: !!e && !!(t != null && t.id) && !!s,
    retry: (n, r) => st(n, r, 2),
    retryDelay: et,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
  });
}, he = X`
  query ThreadMessagesList($token: String!, $threadId: ID!, $assistantId: ID!) {
    threadMessagesList(token: $token, threadId: $threadId, assistantId: $assistantId) {
      id
      assistantId
      title
      isFavorite
      messages {
        id
        type
        content
      }
    }
}
`, fe = async (e, t, s) => {
  const a = await Rt.request(he, {
    token: e,
    threadId: t,
    assistantId: s
  }), n = a.threadMessagesList.messages.map(
    _t
  );
  return {
    ...a.threadMessagesList,
    messages: n
  };
}, ge = () => {
  const e = Z(), t = at(), s = jt(), { assistantProperties: a } = $(), { initialMessagesFn: n } = K(), { data: r } = pt();
  return tt({
    queryKey: ["messages", t],
    queryFn: async () => {
      if (!e || !t || !(a != null && a.id))
        throw new Error(L("common.validation.missingParameters"));
      const o = await fe(
        e,
        t,
        a.id
      );
      if (t === s && r) {
        const i = n(r);
        return {
          ...o,
          messages: [...i, ...o.messages]
        };
      }
      return o;
    },
    enabled: !!e && !!t && !!(a != null && a.id) && !t.startsWith("optimistic"),
    staleTime: 1e3 * 30,
    retry: (o, i) => st(o, i, 2),
    retryDelay: et,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
  });
}, Le = () => {
  var f;
  const e = at(), { initialMessagesFn: t } = K(), { data: s, isLoading: a } = pt(), { data: n, isLoading: r } = ge(), { assistantProperties: o, isLoading: i } = $(), c = u.useMemo(() => e && (n != null && n.messages) ? n.messages : !e && s ? t(s) : [], [e, n == null ? void 0 : n.messages, s, t]), d = ((f = o == null ? void 0 : o.persona) == null ? void 0 : f.name) || L("common.fallback.noName");
  return {
    isLoading: i || a || !!e && r,
    displayMessages: c,
    assistantName: d
  };
}, ve = N({
  slots: {
    container: "flex flex-col gap-0.5 w-full"
  }
}), pe = N({
  slots: {
    avatar: "h-5 w-5",
    itemIcon: "opacity-0 text-white w-4 flex items-center justify-center transition-opacity",
    itemName: "flex items-center text-sm text-white gap-2 w-full",
    item: "flex items-center justify-between group h-10 rounded-lg px-2 hover:bg-list-active-side-nav cursor-pointer transition-all duration-300 ease-in-out"
  },
  variants: {
    isCurrent: {
      true: {
        item: "bg-list-active-side-nav"
      },
      false: {
        itemIcon: "group-hover:opacity-100"
      }
    }
  }
}), ye = (e) => {
  const t = e.match(/^\/assistant\/[^/]+(\/.*)?$/);
  return (t == null ? void 0 : t[1]) || "/";
}, Ae = ({
  id: e,
  persona: t,
  onSelect: s
}) => {
  var g;
  const { assistantProperties: a } = $(), { selectAssistant: n, selectThread: r } = K(), o = Ft(), { item: i, itemName: c, itemIcon: d, avatar: h } = pe({
    isCurrent: (a == null ? void 0 : a.id) === e
  }), f = (A) => {
    if (!A) return;
    s == null || s(), r(null), n(A);
    const w = window.location.pathname, E = ye(w);
    o(`/${A}${E}`);
  };
  return /* @__PURE__ */ m.jsxs(
    "button",
    {
      type: "button",
      className: p(i()),
      "data-testid": "assistant-item",
      onClick: () => f(e),
      "aria-label": L("home.assistantSelect.buttonSelectAriaLabel", {
        assistantName: t == null ? void 0 : t.name
      }),
      children: [
        /* @__PURE__ */ m.jsxs("div", { className: p(c()), children: [
          /* @__PURE__ */ m.jsx(vt, { className: p(h()), src: (g = t == null ? void 0 : t.avatar) == null ? void 0 : g.uri }),
          /* @__PURE__ */ m.jsx(
            "span",
            {
              className: "truncate max-w-40",
              title: (t == null ? void 0 : t.name) ?? L("common.fallback.noName"),
              children: (t == null ? void 0 : t.name) ?? L("common.fallback.noName")
            }
          )
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: p(d()), children: /* @__PURE__ */ m.jsx(Nt, { name: "edit", title: L("home.newConversation"), size: "xxs" }) })
      ]
    }
  );
}, Ee = ({
  initialAssistants: e,
  onAssistantSelect: t
}) => {
  const { data: s } = J(), { container: a } = ve(), n = e || (s == null ? void 0 : s.page) || [];
  return /* @__PURE__ */ m.jsx("div", { className: p(a()), children: n.map(({ id: r, persona: o }) => /* @__PURE__ */ m.jsx(
    Ae,
    {
      id: r,
      persona: o,
      onSelect: t
    },
    r
  )) });
};
export {
  Ee as A,
  we as G,
  xe as a,
  Le as b,
  Ie as c,
  vt as d,
  k as e,
  ge as f,
  $ as u
};
