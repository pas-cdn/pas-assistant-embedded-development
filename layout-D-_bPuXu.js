import { Q as ot, i as le, h as ct, k as ut, l as lt, D as de, m as V, n as X, o as dt, s as ft, t as x, p as Se, r as y, q as P, j as u, v as b, I as _, R as ht, T as mt, w as gt, x as De, P as bt, y as yt, z as Ne, A as ke, B as wt, C as vt, E as xt, L as Oe, d as pt, e as Me, F as ne, G as ae, c as se, H as ie, J as Ee, K as Tt, M as St, N as Dt, a as Nt, O as kt } from "./embed-entry-Dnm00syM.js";
import { G as Ot, u as J, a as oe, b as Mt, c as Et, A as Pt } from "./assistant-list-Cq_twGY4.js";
var Ct = class extends ot {
  constructor(e, t) {
    super(e, t);
  }
  bindMethods() {
    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(e) {
    super.setOptions({
      ...e,
      behavior: le()
    });
  }
  getOptimisticResult(e) {
    return e.behavior = le(), super.getOptimisticResult(e);
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
    var g, f;
    const { state: r } = e, n = super.createResult(e, t), { isFetching: a, isRefetching: s, isError: o, isRefetchError: i } = n, l = (f = (g = r.fetchMeta) == null ? void 0 : g.fetchMore) == null ? void 0 : f.direction, c = o && l === "forward", d = a && l === "forward", m = o && l === "backward", h = a && l === "backward";
    return {
      ...n,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: ut(t, r.data),
      hasPreviousPage: ct(t, r.data),
      isFetchNextPageError: c,
      isFetchingNextPage: d,
      isFetchPreviousPageError: m,
      isFetchingPreviousPage: h,
      isRefetchError: i && !c && !m,
      isRefetching: s && !d && !h
    };
  }
};
function It(e, t) {
  return lt(
    e,
    Ct
  );
}
const Ft = async (e, t, r = de.page, n = de.perPage) => {
  const a = {
    token: e,
    assistantId: t,
    pagination: {
      page: r,
      perPage: n
    }
  };
  return (await V.request(Ot, a)).threadsByAssistant;
}, Pe = () => {
  const e = X(), { assistantProperties: t } = J();
  return It({
    queryKey: ["threads", t == null ? void 0 : t.id],
    queryFn: ({ pageParam: r = 1 }) => {
      if (!e || !(t != null && t.id))
        throw new Error(x("common.validation.missingParameters"));
      return Ft(e, t.id, r, 10);
    },
    enabled: !!e && !!(t != null && t.id),
    staleTime: 1e3 * 60,
    getNextPageParam: (r, n) => {
      if (r.totalPages !== null && r.currentPage < r.totalPages)
        return r.currentPage + 1;
    },
    initialPageParam: 1,
    retry: (r, n) => ft(r, n, 2),
    retryDelay: dt,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
  });
}, jt = () => {
  const { data: e, isLoading: t } = Pe(), r = Se();
  return {
    currentThread: y.useMemo(() => e != null && e.pages ? e.pages.flatMap((s) => s.page).find((s) => s.id === r) : void 0, [e, r]),
    isLoading: t
  };
};
var p = /* @__PURE__ */ ((e) => (e.Error = "error", e.Warning = "warning", e.Success = "success", e.Info = "info", e))(p || {});
const Wt = p.Info, Lt = !0, Yt = !0, _t = P({
  base: "flex gap-1 items-center min-h-5",
  variants: {
    kind: {
      [p.Error]: "text-red-9",
      [p.Warning]: "text-amber-500",
      [p.Success]: "text-green-600",
      [p.Info]: "text-primary/75"
    },
    small: {
      true: "text-xs",
      false: "text-sm"
    }
  },
  compoundVariants: [
    {
      kind: p.Error,
      class: "icon-color-red-9"
    },
    {
      kind: p.Warning,
      class: "icon-color-amber-500"
    },
    {
      kind: p.Success,
      class: "icon-color-green-600"
    },
    {
      kind: p.Info,
      class: "icon-color-primary/75"
    }
  ]
}), At = P({
  base: "",
  variants: {
    kind: {
      [p.Error]: "text-red-9",
      [p.Warning]: "text-amber-500",
      [p.Success]: "text-green-600",
      [p.Info]: "text-primary/75"
    }
  }
}), Rt = {
  [p.Error]: "close-circle-line",
  [p.Warning]: "alert-line",
  [p.Success]: "check",
  [p.Info]: "information-line"
};
function qt(e) {
  return Rt[e] || "information-line";
}
function Ut({
  message: e,
  kind: t = Wt,
  className: r,
  icon: n,
  showIcon: a = Lt,
  small: s = Yt,
  ...o
}) {
  const i = _t({ kind: t, small: s }), l = At({ kind: t }), c = n ?? qt(t);
  return /* @__PURE__ */ u.jsxs("div", { className: b(i, r), ...o, children: [
    a && /* @__PURE__ */ u.jsx(_, { name: c, width: 15, height: 15, className: l }),
    e
  ] });
}
var k = /* @__PURE__ */ ((e) => (e.Small = "small", e.Regular = "regular", e.Large = "large", e))(k || {}), Y = /* @__PURE__ */ ((e) => (e.Default = "default", e.Transparent = "transparent", e.Outlined = "outlined", e))(Y || {}), Ce = /* @__PURE__ */ ((e) => (e.Text = "text", e.Password = "password", e.Email = "email", e.Number = "number", e.Search = "search", e))(Ce || {});
const Ie = k.Regular, Fe = Y.Default, fe = "Adornment", Ht = Ce.Text, Bt = !1, Qt = P({
  slots: {
    labelStyles: "flex text-sm text-white gap-1",
    adornmentStyles: "absolute h-full flex items-center justify-center text-white",
    fieldStyles: "flex flex-col gap-2.5 w-full relative",
    labelAndInputWrapper: "flex flex-col gap-2 text-white",
    inputContainerStyles: "flex w-full relative",
    inputStyles: b(
      "w-full bg-transparent border py-3 px-4 h-12",
      "rounded-lg placeholder:text-white/50 outline-none text-sm text-white font-regular",
      "focus:ring-4 focus:ring-neutral-1/15 focus:border-neutral-1 focus-visible:ring-4 focus-visible:ring-neutral-1/15 focus-visible:border-neutral-1"
    ),
    errorMessageStyles: "text-red-9 text-xs",
    requiredAsterisk: "text-red-9 text-sm"
  },
  variants: {
    error: {
      true: {
        inputStyles: "border-error-9 focus:border-error-9 focus:ring-error-9/15",
        labelStyles: "text-error-9"
      }
    },
    disabled: {
      true: {
        inputStyles: "bg-gray-200 text-gray-500 cursor-not-allowed",
        adornmentStyles: "text-gray-500"
      }
    },
    size: {
      [k.Small]: {
        inputStyles: "py-2 px-3 h-9 text-xs"
      },
      [k.Regular]: {
        inputStyles: "py-2 px-3 h-11 text-sm"
      },
      [k.Large]: {
        inputStyles: "py-3 px-5 h-12 text-base"
      }
    },
    variant: {
      [Y.Default]: {
        inputStyles: "border-neutral-2 bg-transparent"
      },
      [Y.Transparent]: {
        inputStyles: b("bg-list-active", "border-none")
      },
      [Y.Outlined]: {
        inputStyles: "border-border-drawer bg-transparent"
      }
    },
    hasStartAdornment: { true: {} },
    hasEndAdornment: { true: {} }
  },
  compoundVariants: [
    {
      size: k.Small,
      hasStartAdornment: !0,
      class: {
        inputStyles: "pl-9",
        adornmentStyles: "left-2"
      }
    },
    {
      size: k.Small,
      hasEndAdornment: !0,
      class: {
        inputStyles: "pr-9",
        adornmentStyles: "right-2"
      }
    },
    {
      size: k.Regular,
      hasStartAdornment: !0,
      class: {
        inputStyles: "pl-9",
        adornmentStyles: "left-2"
      }
    },
    {
      size: k.Regular,
      hasEndAdornment: !0,
      class: {
        inputStyles: "pr-9",
        adornmentStyles: "right-2"
      }
    },
    {
      size: k.Large,
      hasStartAdornment: !0,
      class: {
        inputStyles: "pl-11",
        adornmentStyles: "left-3"
      }
    },
    {
      size: k.Large,
      hasEndAdornment: !0,
      class: {
        inputStyles: "pr-11",
        adornmentStyles: "right-3"
      }
    }
  ],
  defaultVariants: {
    size: Ie,
    variant: Fe
  }
}), je = y.forwardRef(
  ({
    type: e = Ht,
    label: t,
    className: r,
    endAdornment: n,
    startAdornment: a,
    error: s,
    disabled: o = Bt,
    size: i = Ie,
    variant: l = Fe,
    onChange: c,
    ...d
  }, m) => {
    const h = !!a, v = !!n, {
      labelStyles: g,
      adornmentStyles: f,
      fieldStyles: T,
      inputContainerStyles: I,
      inputStyles: O,
      errorMessageStyles: M,
      labelAndInputWrapper: E,
      requiredAsterisk: S
    } = Qt({
      error: !!s,
      disabled: !!o,
      size: i,
      variant: l,
      hasStartAdornment: h,
      hasEndAdornment: v
    });
    return /* @__PURE__ */ u.jsxs("div", { className: T(), children: [
      /* @__PURE__ */ u.jsxs("div", { className: E(), children: [
        t && /* @__PURE__ */ u.jsxs(
          "label",
          {
            className: b(g()),
            htmlFor: d.name,
            "aria-label": t,
            children: [
              t,
              d.required && /* @__PURE__ */ u.jsx("span", { className: S(), children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: b(I()), children: [
          h && /* @__PURE__ */ u.jsx("div", { className: f(), children: /* @__PURE__ */ u.jsx(
            _,
            {
              "aria-label": (a == null ? void 0 : a.title) || (a == null ? void 0 : a.name) || fe,
              ...a
            }
          ) }),
          /* @__PURE__ */ u.jsx(
            "input",
            {
              ref: m,
              id: d.name,
              className: b(O(), r),
              disabled: o,
              onChange: c,
              "aria-label": d["aria-label"] ?? d.placeholder ?? t ?? d.name,
              type: e,
              ...d
            }
          ),
          v && /* @__PURE__ */ u.jsx("div", { className: f(), children: /* @__PURE__ */ u.jsx(
            _,
            {
              "aria-label": (n == null ? void 0 : n.title) || (n == null ? void 0 : n.name) || fe,
              ...n
            }
          ) })
        ] })
      ] }),
      s && /* @__PURE__ */ u.jsx(Ut, { message: s, kind: p.Error })
    ] });
  }
);
je.displayName = "Input";
const $t = ht, he = mt, zt = bt, We = y.forwardRef(({ className: e, onOverlayClick: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  wt,
  {
    ...r,
    ref: n,
    className: b(
      "absolute inset-0 z-50 bg-black/35",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    onClick: t
  }
));
We.displayName = vt.displayName;
const Le = y.forwardRef(
  ({ className: e, children: t, overlayClassName: r, onOverlayClick: n, ...a }, s) => {
    const o = gt(), i = De(), l = o ?? i ?? void 0;
    return /* @__PURE__ */ u.jsxs(zt, { container: l, children: [
      /* @__PURE__ */ u.jsx(
        We,
        {
          onOverlayClick: n,
          className: b("z-[1000] !z-[1000]", r)
        }
      ),
      /* @__PURE__ */ u.jsx(
        yt,
        {
          ...a,
          ref: s,
          className: b(
            "grid w-full absolute",
            "left-1/2 top-1/2 z-[1100] !z-[1100] -translate-x-1/2 -translate-y-1/2",
            "rounded-xl bg-drawer duration-200",
            e
          ),
          children: t
        }
      )
    ] });
  }
);
Le.displayName = xt.displayName;
const Ye = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: b("flex justify-between items-center px-5 pt-5", e),
    ...t
  }
);
Ye.displayName = "DialogHeader";
const _e = y.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  ke,
  {
    ref: r,
    className: b(
      "text-lg font-medium flex w-full tracking-tighter gap-2.5",
      e
    ),
    ...t
  }
));
_e.displayName = ke.displayName;
const Ae = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: b("flex justify-end items-center gap-2.5 py-5", e),
    ...t
  }
);
Ae.displayName = "DialogFooter";
const Re = y.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ne,
  {
    ref: r,
    className: b("text-white text-sm", e),
    ...t
  }
));
Re.displayName = Ne.displayName;
const Gt = "button", Vt = "default", Xt = "auto", Jt = "regular", Zt = "solid", Kt = "rounded", me = "Adornment", er = P({
  base: b(
    "cursor-pointer inline-flex items-center justify-center font-medium gap-2 select-none text-center transition-all",
    "focus:outline-none focus-visible:outline-none",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  ),
  variants: {
    kind: {
      primary: "",
      default: "",
      danger: "",
      ghost: ""
    },
    variant: {
      solid: "",
      outlined: ""
    },
    format: {
      rounded: "rounded-lg",
      "rounded-full": "rounded-full"
    },
    loading: {
      true: "cursor-not-allowed disabled:opacity-50"
    }
  },
  compoundVariants: [
    {
      kind: "default",
      variant: "solid",
      class: b(
        "bg-semantic-default text-white",
        "hover:bg-white hover:text-semantic-default hover:ring-1 hover:ring-semantic-default hover:border-semantic-default",
        "focus:bg-white focus:text-semantic-default focus:ring-1 focus:ring-semantic-default focus:border-semantic-default",
        "focus-visible:bg-white focus-visible:text-semantic-default focus-visible:ring-1 focus-visible:ring-semantic-default focus-visible:border-semantic-default",
        "active:scale-95"
      )
    },
    {
      kind: "primary",
      variant: "solid",
      class: b(
        "bg-primary text-white",
        "hover:bg-primary/70 hover:ring-1 hover:ring-primary hover:border-primary",
        "focus:bg-primary/70 focus:ring-1 focus:ring-primary focus:border-primary",
        "focus-visible:bg-primary/70 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary",
        "active:scale-95"
      )
    },
    {
      kind: "danger",
      variant: "solid",
      class: b(
        "bg-red-9 text-white",
        "hover:bg-red-9/70 hover:ring-1 hover:ring-red-9 hover:border-red-9",
        "focus:bg-red-9/70 focus:ring-1 focus:ring-red-9 focus:border-red-9",
        "focus-visible:bg-red-9/70 focus-visible:ring-1 focus-visible:ring-red-9 focus-visible:border-red-9",
        "active:scale-95"
      )
    },
    {
      kind: "ghost",
      variant: "solid",
      class: b(
        "bg-transparent",
        "hover:opacity-70 hover:ring-1 hover:ring-white hover:border-white",
        "focus:opacity-70 focus:ring-1 focus:ring-white focus:border-white",
        "focus-visible:opacity-70 focus-visible:ring-1 focus-visible:ring-white focus-visible:border-white",
        "active:scale-95"
      )
    },
    {
      kind: "default",
      variant: "outlined",
      class: b(
        "border border-neutral-1 text-white",
        "hover:border-neutral-1/70 hover:text-white/70 hover:ring-1 hover:ring-neutral-1",
        "focus:border-neutral-1/70 focus:text-white/70 focus:ring-1 focus:ring-neutral-1",
        "focus-visible:border-neutral-1/70 focus-visible:text-white/70 focus-visible:ring-1 focus-visible:ring-neutral-1",
        "active:scale-95"
      )
    },
    {
      kind: "primary",
      variant: "outlined",
      class: b(
        "border border-primary text-primary",
        "hover:border-primary/70 text-primary/70 hover:ring-1 hover:ring-primary",
        "focus:border-primary/70 focus:text-primary/70 focus:ring-1 focus:ring-primary",
        "focus-visible:border-primary/70 focus-visible:text-primary/70 focus-visible:ring-1 focus-visible:ring-primary",
        "active:scale-95"
      )
    },
    {
      kind: "danger",
      variant: "outlined",
      class: b(
        "border border-red-9 text-red-9",
        "hover:border-red-9/70 text-red-9/70 hover:ring-1 hover:ring-red-9",
        "focus:border-red-9/70 focus:text-red-9/70 focus:ring-1 focus:ring-red-9",
        "focus-visible:border-red-9/70 focus-visible:text-red-9/70 focus-visible:ring-1 focus-visible:ring-red-9",
        "active:scale-95"
      )
    },
    {
      kind: "ghost",
      variant: "outlined",
      class: b(
        "border border-transparent text-blue-600",
        "hover:text-blue-600/70 hover:ring-1 hover:ring-blue-600",
        "focus:text-blue-600/70 focus:ring-1 focus:ring-blue-600",
        "focus-visible:text-blue-600/70 focus-visible:ring-1 focus-visible:ring-blue-600",
        "active:scale-95"
      )
    }
  ]
}), tr = P({
  extend: er,
  variants: {
    size: {
      regular: "text-base py-4 px-6",
      large: "text-xl py-5 px-7",
      small: "text-sm py-2 px-3.5"
    },
    width: {
      auto: "w-auto",
      half: "w-1/2",
      full: "w-full text-center",
      fitContent: "w-fit"
    }
  },
  defaultVariants: {
    kind: "primary",
    size: "regular",
    width: "auto",
    variant: "solid",
    format: "rounded"
  }
}), ge = P({
  base: "flex items-center justify-center",
  variants: {
    size: {
      small: "w-4 h-4",
      regular: "w-5 h-5",
      large: "w-6 h-6"
    }
  },
  defaultVariants: {
    size: "regular"
  }
}), rr = (e, t, r) => y.useCallback(
  (n) => {
    if (t || r) {
      n.preventDefault();
      return;
    }
    e == null || e(n);
  },
  [t, r, e]
), te = y.memo(
  y.forwardRef(
    ({
      children: e,
      className: t,
      type: r = Gt,
      loading: n = !1,
      kind: a = Vt,
      width: s = Xt,
      startAdornment: o,
      endAdornment: i,
      size: l = Jt,
      variant: c = Zt,
      format: d = Kt,
      onClick: m,
      disabled: h,
      ...v
    }, g) => {
      const f = tr({
        kind: a,
        width: s,
        size: l,
        variant: c,
        format: d
      }), T = rr(m, h, n);
      return /* @__PURE__ */ u.jsxs(
        "button",
        {
          ref: g,
          className: b(f, t),
          type: r,
          onClick: T,
          disabled: h || n,
          ...v,
          children: [
            !n && o && /* @__PURE__ */ u.jsx(
              _,
              {
                ...o,
                className: b(ge({ size: l })),
                "aria-label": o.name || me
              }
            ),
            n ? /* @__PURE__ */ u.jsx(
              Oe,
              {
                isLoading: !0,
                variant: Me.Spinner,
                size: pt.Small
              }
            ) : e,
            !n && i && /* @__PURE__ */ u.jsx(
              _,
              {
                ...i,
                className: b(ge({ size: l })),
                "aria-label": i.name || me
              }
            )
          ]
        }
      );
    }
  )
);
te.displayName = "Button";
var z = /* @__PURE__ */ ((e) => (e.information = "information", e.danger = "danger", e))(z || {});
const qe = ({
  isOpen: e,
  onOpenChange: t,
  onConfirm: r,
  onCancel: n,
  kind: a = z.information,
  title: s,
  message: o,
  description: i,
  labelConfirmButton: l = "Confirmar",
  labelCancelButton: c = "Cancelar",
  hasCancelButton: d = !0,
  hasIconTitle: m = !0,
  hasCloseButton: h = !1,
  loading: v = !1,
  disabledSaveButton: g = !1
}) => {
  const f = a === z.danger ? "danger" : "primary";
  return /* @__PURE__ */ u.jsx($t, { open: e, onOpenChange: t, children: /* @__PURE__ */ u.jsxs(
    Le,
    {
      className: "gap-4 max-w-[23.75rem]",
      overlayClassName: "bg-black/50",
      children: [
        /* @__PURE__ */ u.jsx(Re, { className: "hidden", children: i || s }),
        /* @__PURE__ */ u.jsx(Ye, { children: /* @__PURE__ */ u.jsxs(_e, { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2.5", children: [
            m && /* @__PURE__ */ u.jsx(_, { size: "md", name: "info", className: "text-white" }),
            /* @__PURE__ */ u.jsx("div", { className: "text-base/7 text-white tracking-[-0.08px]", children: s })
          ] }),
          h && /* @__PURE__ */ u.jsx(he, { asChild: !0, children: /* @__PURE__ */ u.jsx(
            ne,
            {
              name: "close",
              title: x("common.button.close"),
              onClick: n,
              className: "transition-all duration-300 ease-in-out hover:bg-neutral-2 focus-visible:bg-neutral-2 focus-visible:ring-1 focus-visible:ring-neutral-2 focus-visible:border-neutral-2 rounded-md",
              "aria-label": "Close dialog"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ u.jsx("div", { className: "text-sm text-white tracking-[-0.08px] px-5", children: o }),
        /* @__PURE__ */ u.jsx(Ae, { className: "border-t border-border-drawer p-4", children: /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: b("", {
              "flex gap-2.5": d,
              "w-full": !d
            }),
            children: [
              d && /* @__PURE__ */ u.jsx(he, { asChild: !0, children: /* @__PURE__ */ u.jsx(
                te,
                {
                  onClick: n,
                  size: "small",
                  "aria-label": c,
                  variant: "outlined",
                  children: c
                }
              ) }),
              /* @__PURE__ */ u.jsx(
                te,
                {
                  kind: f,
                  onClick: r,
                  size: "small",
                  loading: v,
                  disabled: g,
                  className: "w-fit",
                  children: l
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
};
qe.displayName = "ConfirmationDialog";
const nr = ae`
  mutation UpdateThreadTitle(
    $threadId: ID!
    $token: String!
    $assistantId: ID!
    $title: String!
  ) {
    updateThreadTitle(
      threadId: $threadId
      token: $token
      assistantId: $assistantId
      title: $title
    ) {
      id
      title
      isFavorite
    }
  }
`, ar = async (e, t) => (await V.request(nr, { ...e, assistantId: t })).updateThreadTitle, Ue = () => {
  const e = se(), { showToast: t } = ie(), r = X(), { assistantProperties: n } = J();
  return oe({
    mutationFn: (a) => {
      const s = n == null ? void 0 : n.id;
      if (!r || !s)
        throw new Error(x("common.validation.missingParameters"));
      return ar({ ...a, token: r }, s);
    },
    onSuccess: (a, s) => {
      const o = n == null ? void 0 : n.id;
      e.setQueryData(
        ["threads", o],
        (i) => {
          if (!i) return i;
          const l = i.pages.map((c) => ({
            ...c,
            page: c.page.map(
              (d) => d.id === s.threadId ? { ...d, title: a.title } : d
            )
          }));
          return {
            ...i,
            pages: l
          };
        }
      );
    },
    onError: (a) => {
      t({
        type: "error",
        title: x("home.toast.error.rename"),
        duration: 2e3
      });
    }
  });
}, sr = P({
  slots: {
    containerStyle: "group w-full flex items-center justify-start hover:justify-between hover:bg-list-active-side-nav h-10 rounded-lg p-2.5 cursor-pointer",
    titleStyle: "text-white truncate text-sm w-full text-left cursor-pointer",
    iconButtonStyle: "text-white cursor-pointer hidden group-hover:block",
    inputStyle: "bg-list-active-side-nav rounded-none h-5 !p-0 focus-visible:ring-1 focus-visible:ring-blue-500/50"
  },
  variants: {
    isCurrentThread: {
      true: {
        containerStyle: "bg-list-active-side-nav"
      }
    },
    menuOpen: {
      true: {
        containerStyle: "bg-list-active-side-nav",
        iconButtonStyle: "block"
      },
      false: {
        iconButtonStyle: "hidden group-hover:block"
      }
    },
    isEditing: {
      true: {
        iconButtonStyle: "hidden",
        containerStyle: "bg-list-active-side-nav"
      },
      false: {}
    }
  }
}), He = ({
  id: e,
  title: t,
  isFavorite: r,
  updateThreadTitle: n,
  isCurrentThread: a,
  onToggleFavorite: s,
  onDeleteThread: o,
  deletingThread: i,
  togglingThread: l,
  onThreadSelect: c
}) => {
  const { isLoading: d } = Mt(), [m, h] = y.useState(!1), [v, g] = y.useState(!1), [f, T] = y.useState(t || "Sem título"), [I, O] = y.useState(!1), [M, E] = y.useState(!1), S = y.useRef(null), { containerStyle: j, titleStyle: Ke, iconButtonStyle: Hn, inputStyle: et } = sr({
    isCurrentThread: a,
    menuOpen: m,
    isEditing: v
  }), { isPending: ce } = Ue(), { selectThread: tt } = Ee(), rt = De(), nt = () => {
    c == null || c(), tt(e);
  }, B = y.useCallback(() => {
    const D = f.trim();
    if (D === "" || D.length === 1) {
      E(!0);
      return;
    }
    D !== t && !ce && n(e, D), g(!1), h(!1), E(!1);
  }, [f, t, ce, n, e]), Q = y.useCallback(
    (D) => {
      if (S.current && !S.current.contains(D.target)) {
        const A = f.trim();
        if (A === "" || A.length === 1) {
          g(!1), T(t || "Sem título"), h(!1), E(!1);
          return;
        }
        B();
      }
    },
    [B, f, t]
  ), at = y.useCallback(
    (D) => {
      D.key === "Enter" && B(), D.key === "Tab" && D.preventDefault(), D.key === "Escape" && (g(!1), T(t || "Sem título"), h(!1), E(!1), D.stopPropagation());
    },
    [B, t]
  ), st = () => {
    o(e), O(!1);
  }, it = y.useMemo(() => [
    {
      id: 1,
      onClick: () => s(e, !r),
      title: r ? x("home.thread.button.unpin") : x("home.thread.button.pin"),
      icon: r ? "push-pin-slash" : "push-pin",
      loading: l
    },
    {
      id: 2,
      icon: "edit",
      title: x("home.thread.button.rename"),
      onClick: () => {
        h(!1), requestAnimationFrame(() => g(!0));
      }
    },
    {
      id: 3,
      icon: "bin",
      title: x("common.button.delete"),
      iconClassName: "text-red-9",
      titleClassName: "text-red-9",
      onClick: () => {
        h(!1), requestAnimationFrame(() => O(!0));
      }
    }
  ], [r, e, s, l]);
  return y.useEffect(() => (v ? document.addEventListener("mousedown", Q) : document.removeEventListener("mousedown", Q), () => {
    document.removeEventListener("mousedown", Q);
  }), [v, Q]), /* @__PURE__ */ u.jsxs("div", { className: b(j()), children: [
    v ? /* @__PURE__ */ u.jsx(
      je,
      {
        autoFocus: !0,
        value: f,
        ref: S,
        className: b(et(), {
          "focus-visible:ring-red-500": M
        }),
        size: k.Small,
        variant: Y.Transparent,
        onChange: (D) => {
          const A = D.target.value;
          T(A);
          const ue = A.trim();
          ue === "" || ue.length === 1 ? E(!0) : E(!1);
        },
        onKeyDown: at
      }
    ) : /* @__PURE__ */ u.jsx(
      "button",
      {
        type: "button",
        onClick: nt,
        className: b(Ke()),
        children: t || x("common.fallback.noTitle")
      }
    ),
    !v && (d && a ? /* @__PURE__ */ u.jsx(Oe, { isLoading: d, variant: Me.Spinner }) : /* @__PURE__ */ u.jsx(
      Tt,
      {
        align: St.Start,
        options: it,
        controlled: !0,
        open: m,
        handleOpenChange: h,
        container: rt ?? void 0,
        contentClassName: "!z-[800]",
        children: /* @__PURE__ */ u.jsx(
          ne,
          {
            iconClassName: "rounded-md transition-all duration-300 ease-in-out text-white hover:bg-neutral-2 focus-visible:bg-neutral-2 focus-visible:ring-1 focus-visible:ring-neutral-2 focus-visible:border-neutral-2 triple-dots-icon",
            size: "sm",
            name: "triple-dots"
          }
        )
      }
    )),
    /* @__PURE__ */ u.jsx(
      qe,
      {
        onConfirm: st,
        isOpen: I,
        labelCancelButton: x("common.button.cancel"),
        labelConfirmButton: i ? x("common.button.deleting") : x("common.button.delete"),
        kind: z.danger,
        title: x("home.thread.dialog.delete.title"),
        onCancel: () => O(!1),
        message: x("home.thread.dialog.delete.description"),
        loading: i
      }
    )
  ] });
};
He.displayName = "ConversationHighlight";
const ir = P({
  slots: {
    containerStyle: "flex flex-col gap-2.5 w-full",
    titleStyle: "text-neutral-1 text-xs pl-2.5 mt-8"
  }
}), Be = 6048e5, or = 864e5, Qe = 6e4, $e = 36e5, be = Symbol.for("constructDateFrom");
function C(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && be in e ? e[be](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function N(e, t) {
  return C(t || e, e);
}
let cr = {};
function Z() {
  return cr;
}
function H(e, t) {
  var i, l, c, d;
  const r = Z(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = N(e, t == null ? void 0 : t.in), s = a.getDay(), o = (s < n ? 7 : 0) + s - n;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function G(e, t) {
  return H(e, { ...t, weekStartsOn: 1 });
}
function ze(e, t) {
  const r = N(e, t == null ? void 0 : t.in), n = r.getFullYear(), a = C(r, 0);
  a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const s = G(a), o = C(r, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const i = G(o);
  return r.getTime() >= s.getTime() ? n + 1 : r.getTime() >= i.getTime() ? n : n - 1;
}
function ye(e) {
  const t = N(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function ur(e, ...t) {
  const r = C.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function we(e, t) {
  const r = N(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function lr(e, t, r) {
  const [n, a] = ur(
    r == null ? void 0 : r.in,
    e,
    t
  ), s = we(n), o = we(a), i = +s - ye(s), l = +o - ye(o);
  return Math.round((i - l) / or);
}
function dr(e, t) {
  const r = ze(e, t), n = C(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), G(n);
}
function fr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function hr(e) {
  return !(!fr(e) && typeof e != "number" || isNaN(+N(e)));
}
function mr(e, t) {
  const r = N(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const gr = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, br = (e, t, r) => {
  let n;
  const a = gr[e];
  return typeof a == "string" ? n = a : t === 1 ? n = a.one : n = a.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function K(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const yr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, wr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, vr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xr = {
  date: K({
    formats: yr,
    defaultWidth: "full"
  }),
  time: K({
    formats: wr,
    defaultWidth: "full"
  }),
  dateTime: K({
    formats: vr,
    defaultWidth: "full"
  })
}, pr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Tr = (e, t, r, n) => pr[e];
function R(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let a;
    if (n === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, i = r != null && r.width ? String(r.width) : o;
      a = e.formattingValues[i] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, i = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[i] || e.values[o];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[s];
  };
}
const Sr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Dr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Nr = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, kr = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Or = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Mr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Er = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Pr = {
  ordinalNumber: Er,
  era: R({
    values: Sr,
    defaultWidth: "wide"
  }),
  quarter: R({
    values: Dr,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: R({
    values: Nr,
    defaultWidth: "wide"
  }),
  day: R({
    values: kr,
    defaultWidth: "wide"
  }),
  dayPeriod: R({
    values: Or,
    defaultWidth: "wide",
    formattingValues: Mr,
    defaultFormattingWidth: "wide"
  })
};
function q(e) {
  return (t, r = {}) => {
    const n = r.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], s = t.match(a);
    if (!s)
      return null;
    const o = s[0], i = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? Ir(i, (m) => m.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      Cr(i, (m) => m.test(o))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(c)
    ) : c;
    const d = t.slice(o.length);
    return { value: c, rest: d };
  };
}
function Cr(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function Ir(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Fr(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const a = n[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let o = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    o = r.valueCallback ? r.valueCallback(o) : o;
    const i = t.slice(a.length);
    return { value: o, rest: i };
  };
}
const jr = /^(\d+)(th|st|nd|rd)?/i, Wr = /\d+/i, Lr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Yr = {
  any: [/^b/i, /^(a|c)/i]
}, _r = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ar = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Rr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, qr = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ur = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Hr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Br = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Qr = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, $r = {
  ordinalNumber: Fr({
    matchPattern: jr,
    parsePattern: Wr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: q({
    matchPatterns: Lr,
    defaultMatchWidth: "wide",
    parsePatterns: Yr,
    defaultParseWidth: "any"
  }),
  quarter: q({
    matchPatterns: _r,
    defaultMatchWidth: "wide",
    parsePatterns: Ar,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: q({
    matchPatterns: Rr,
    defaultMatchWidth: "wide",
    parsePatterns: qr,
    defaultParseWidth: "any"
  }),
  day: q({
    matchPatterns: Ur,
    defaultMatchWidth: "wide",
    parsePatterns: Hr,
    defaultParseWidth: "any"
  }),
  dayPeriod: q({
    matchPatterns: Br,
    defaultMatchWidth: "any",
    parsePatterns: Qr,
    defaultParseWidth: "any"
  })
}, zr = {
  code: "en-US",
  formatDistance: br,
  formatLong: xr,
  formatRelative: Tr,
  localize: Pr,
  match: $r,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Gr(e, t) {
  const r = N(e, t == null ? void 0 : t.in);
  return lr(r, mr(r)) + 1;
}
function Vr(e, t) {
  const r = N(e, t == null ? void 0 : t.in), n = +G(r) - +dr(r);
  return Math.round(n / Be) + 1;
}
function Ge(e, t) {
  var d, m, h, v;
  const r = N(e, t == null ? void 0 : t.in), n = r.getFullYear(), a = Z(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : m.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((v = (h = a.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, o = C((t == null ? void 0 : t.in) || e, 0);
  o.setFullYear(n + 1, 0, s), o.setHours(0, 0, 0, 0);
  const i = H(o, t), l = C((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(n, 0, s), l.setHours(0, 0, 0, 0);
  const c = H(l, t);
  return +r >= +i ? n + 1 : +r >= +c ? n : n - 1;
}
function Xr(e, t) {
  var i, l, c, d;
  const r = Z(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = Ge(e, t), s = C((t == null ? void 0 : t.in) || e, 0);
  return s.setFullYear(a, 0, n), s.setHours(0, 0, 0, 0), H(s, t);
}
function Jr(e, t) {
  const r = N(e, t == null ? void 0 : t.in), n = +H(r, t) - +Xr(r, t);
  return Math.round(n / Be) + 1;
}
function w(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const F = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return w(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : w(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return w(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return w(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return w(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return w(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return w(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return w(a, t.length);
  }
}, L = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ve = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
      return r.ordinalNumber(a, { unit: "year" });
    }
    return F.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const a = Ge(e, n), s = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const o = s % 100;
      return w(o, 2);
    }
    return t === "Yo" ? r.ordinalNumber(s, { unit: "year" }) : w(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = ze(e);
    return w(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return w(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return w(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return w(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return F.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return w(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const a = Jr(e, n);
    return t === "wo" ? r.ordinalNumber(a, { unit: "week" }) : w(a, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Vr(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : w(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : F.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Gr(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : w(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const a = e.getDay(), s = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(s);
      case "ee":
        return w(s, 2);
      case "eo":
        return r.ordinalNumber(s, { unit: "day" });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const a = e.getDay(), s = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(s);
      case "cc":
        return w(s, t.length);
      case "co":
        return r.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), a = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return w(a, t.length);
      case "io":
        return r.ordinalNumber(a, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n === 12 ? a = L.noon : n === 0 ? a = L.midnight : a = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n >= 17 ? a = L.evening : n >= 12 ? a = L.afternoon : n >= 4 ? a = L.morning : a = L.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return F.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : F.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : w(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : w(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : F.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : F.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return F.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return pe(n);
      case "XXXX":
      case "XX":
        return W(n);
      case "XXXXX":
      case "XXX":
      default:
        return W(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return pe(n);
      case "xxxx":
      case "xx":
        return W(n);
      case "xxxxx":
      case "xxx":
      default:
        return W(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + xe(n, ":");
      case "OOOO":
      default:
        return "GMT" + W(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + xe(n, ":");
      case "zzzz":
      default:
        return "GMT" + W(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return w(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return w(+e, t.length);
  }
};
function xe(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), s = n % 60;
  return s === 0 ? r + String(a) : r + String(a) + t + w(s, 2);
}
function pe(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + w(Math.abs(e) / 60, 2) : W(e, t);
}
function W(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = w(Math.trunc(n / 60), 2), s = w(n % 60, 2);
  return r + a + t + s;
}
const Te = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Ve = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Zr = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return Te(e, t);
  let s;
  switch (n) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Te(n, t)).replace("{{time}}", Ve(a, t));
}, Kr = {
  p: Ve,
  P: Zr
}, en = /^D+$/, tn = /^Y+$/, rn = ["D", "DD", "YY", "YYYY"];
function nn(e) {
  return en.test(e);
}
function an(e) {
  return tn.test(e);
}
function sn(e, t, r) {
  const n = on(e, t, r);
  if (console.warn(n), rn.includes(e)) throw new RangeError(n);
}
function on(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const cn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, un = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ln = /^'([^]*?)'?$/, dn = /''/g, fn = /[a-zA-Z]/;
function Xe(e, t, r) {
  var d, m, h, v;
  const n = Z(), a = n.locale ?? zr, s = n.firstWeekContainsDate ?? ((m = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, o = n.weekStartsOn ?? ((v = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? 0, i = N(e, r == null ? void 0 : r.in);
  if (!hr(i))
    throw new RangeError("Invalid time value");
  let l = t.match(un).map((g) => {
    const f = g[0];
    if (f === "p" || f === "P") {
      const T = Kr[f];
      return T(g, a.formatLong);
    }
    return g;
  }).join("").match(cn).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const f = g[0];
    if (f === "'")
      return { isToken: !1, value: hn(g) };
    if (ve[f])
      return { isToken: !0, value: g };
    if (f.match(fn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: g };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(i, l));
  const c = {
    firstWeekContainsDate: s,
    weekStartsOn: o,
    locale: a
  };
  return l.map((g) => {
    if (!g.isToken) return g.value;
    const f = g.value;
    (an(f) || nn(f)) && sn(f, t, String(e));
    const T = ve[f[0]];
    return T(i, f, a.localize, c);
  }).join("");
}
function hn(e) {
  const t = e.match(ln);
  return t ? t[1].replace(dn, "'") : e;
}
function Je(e, t) {
  const r = () => C(t == null ? void 0 : t.in, NaN), a = yn(e);
  let s;
  if (a.date) {
    const c = wn(a.date, 2);
    s = vn(c.restDateString, c.year);
  }
  if (!s || isNaN(+s)) return r();
  const o = +s;
  let i = 0, l;
  if (a.time && (i = xn(a.time), isNaN(i)))
    return r();
  if (a.timezone) {
    if (l = pn(a.timezone), isNaN(l)) return r();
  } else {
    const c = new Date(o + i), d = N(0, t == null ? void 0 : t.in);
    return d.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), d.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), d;
  }
  return N(o + i + l, t == null ? void 0 : t.in);
}
const $ = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, mn = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, gn = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, bn = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function yn(e) {
  const t = {}, r = e.split($.dateTimeDelimiter);
  let n;
  if (r.length > 2)
    return t;
  if (/:/.test(r[0]) ? n = r[0] : (t.date = r[0], n = r[1], $.timeZoneDelimiter.test(t.date) && (t.date = e.split($.timeZoneDelimiter)[0], n = e.substr(
    t.date.length,
    e.length
  ))), n) {
    const a = $.timezone.exec(n);
    a ? (t.time = n.replace(a[1], ""), t.timezone = a[1]) : t.time = n;
  }
  return t;
}
function wn(e, t) {
  const r = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"
  ), n = e.match(r);
  if (!n) return { year: NaN, restDateString: "" };
  const a = n[1] ? parseInt(n[1]) : null, s = n[2] ? parseInt(n[2]) : null;
  return {
    year: s === null ? a : s * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function vn(e, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const r = e.match(mn);
  if (!r) return /* @__PURE__ */ new Date(NaN);
  const n = !!r[4], a = U(r[1]), s = U(r[2]) - 1, o = U(r[3]), i = U(r[4]), l = U(r[5]) - 1;
  if (n)
    return kn(t, i, l) ? Tn(t, i, l) : /* @__PURE__ */ new Date(NaN);
  {
    const c = /* @__PURE__ */ new Date(0);
    return !Dn(t, s, o) || !Nn(t, a) ? /* @__PURE__ */ new Date(NaN) : (c.setUTCFullYear(t, s, Math.max(a, o)), c);
  }
}
function U(e) {
  return e ? parseInt(e) : 1;
}
function xn(e) {
  const t = e.match(gn);
  if (!t) return NaN;
  const r = ee(t[1]), n = ee(t[2]), a = ee(t[3]);
  return On(r, n, a) ? r * $e + n * Qe + a * 1e3 : NaN;
}
function ee(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function pn(e) {
  if (e === "Z") return 0;
  const t = e.match(bn);
  if (!t) return 0;
  const r = t[1] === "+" ? -1 : 1, n = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return Mn(n, a) ? r * (n * $e + a * Qe) : NaN;
}
function Tn(e, t, r) {
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const a = n.getUTCDay() || 7, s = (t - 1) * 7 + r + 1 - a;
  return n.setUTCDate(n.getUTCDate() + s), n;
}
const Sn = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ze(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Dn(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (Sn[t] || (Ze(e) ? 29 : 28));
}
function Nn(e, t) {
  return t >= 1 && t <= (Ze(e) ? 366 : 365);
}
function kn(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function On(e, t, r) {
  return e === 24 ? t === 0 && r === 0 : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Mn(e, t) {
  return t >= 0 && t <= 59;
}
const En = (e) => e.reduce(
  (t, r) => {
    const n = typeof r.createdAt == "string" ? Je(r.createdAt) : r.createdAt, a = Xe(n, "yyyy-MM-dd");
    return t[a] || (t[a] = []), t[a].push(r), t;
  },
  {}
), Pn = (e) => e.sort((t, r) => new Date(r).getTime() - new Date(t).getTime()), Cn = (e) => e.sort(
  (t, r) => new Date(r.createdAt).getTime() - new Date(t.createdAt).getTime()
), In = (e) => Xe(Je(e), "dd/MM/yy"), re = ({
  items: e,
  updateThreadTitle: t,
  onDeleteThread: r,
  onlyFavorites: n,
  currentThreadId: a,
  onToggleFavorite: s = () => {
  },
  deletingThread: o,
  togglingThread: i,
  onThreadSelect: l
}) => {
  const { containerStyle: c, titleStyle: d } = ir(), m = n ? e == null ? void 0 : e.filter((f) => f.isFavorite) : e == null ? void 0 : e.filter((f) => !f.isFavorite), h = En(m || []), v = Pn(Object.keys(h)), g = (f, T) => {
    if (!f.length) return null;
    const I = Cn(f), O = In(T);
    return /* @__PURE__ */ u.jsxs(Dt.Fragment, { children: [
      !n && /* @__PURE__ */ u.jsx("div", { className: d(), children: O }),
      I.map((M) => /* @__PURE__ */ u.jsx(
        He,
        {
          updateThreadTitle: t,
          onDeleteThread: r,
          onToggleFavorite: s,
          isCurrentThread: M.id === a,
          deletingThread: o,
          togglingThread: i,
          onThreadSelect: l,
          ...M
        },
        M.id
      ))
    ] }, T);
  };
  return /* @__PURE__ */ u.jsx("div", { className: c(), children: v.map((f) => g(h[f], f)) });
};
re.displayName = "ConversationList";
const Fn = P({
  slots: {
    buttonCloseSidebar: "cursor-pointer flex items-center justify-center rounded-lg hover:bg-neutral-2 p-1 transition-all duration-300 ease-in-out h-8 w-8",
    container: "relative z-40 flex flex-col h-full bg-list-normal-side-nav transition-all duration-300 ease-in-out shadow-lg",
    header: "flex items-center justify-between gap-2 p-4 shrink-0",
    body: "flex-1 overflow-y-auto custom-scroll pl-4 pr-4 pb-6 min-h-0"
  },
  variants: {
    open: {
      true: {
        container: "w-[250px]"
      },
      false: {
        container: "w-0"
      }
    }
  }
}), jn = ({ open: e, setOpen: t, title: r, children: n }) => {
  const [a, s] = y.useState(!1), { container: o, header: i, body: l, buttonCloseSidebar: c } = Fn({
    open: e
  }), d = () => {
    s(!0), t(!e);
  };
  y.useEffect(() => {
    if (a) {
      const h = setTimeout(() => s(!1), 300);
      return () => clearTimeout(h);
    }
  }, [e, a]);
  const m = () => /* @__PURE__ */ u.jsx(
    ne,
    {
      size: "md",
      type: "button",
      className: b(c()),
      onClick: d,
      "data-testid": "sidebar-toggle-button",
      name: e ? "user-list-icon" : "user-list-icon-closed",
      colorFill: "fill-white",
      title: e ? "Fechar menu" : "Abrir menu"
    }
  );
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: b(
        o(),
        a && (e ? "animate-slide-in" : "animate-slide-out"),
        !e && !a && "w-0 overflow-hidden"
      ),
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: b(i()), children: [
          e && m(),
          e && r
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: b(l()), children: e && n })
      ]
    }
  ) });
}, Wn = ae`
  mutation DeleteThread($token: String!, $threadId: ID!, $assistantId: ID!) {
    deleteThread(
      token: $token
      threadId: $threadId
      assistantId: $assistantId
    ) {
      deletedId
      success
      message
    }
  }
`, Ln = async (e) => (await V.request(Wn, e)).deleteThread, Yn = () => {
  const e = se(), t = Nt(), { showToast: r } = ie(), n = X(), { assistantProperties: a } = J(), s = Se(), { selectThread: o } = Ee();
  return oe({
    mutationFn: (i) => {
      const l = a == null ? void 0 : a.id;
      if (!n || !l)
        throw new Error(x("common.validation.missingParameters"));
      return Ln({ token: n, threadId: i, assistantId: l });
    },
    onMutate: async (i) => {
      const c = ["threads", a == null ? void 0 : a.id];
      await e.cancelQueries({ queryKey: c });
      const d = e.getQueryData(c);
      return e.setQueryData(
        c,
        (m) => {
          if (!m) return;
          const h = m.pages.map((v) => ({
            ...v,
            page: v.page.filter((g) => g.id !== i)
          }));
          return {
            ...m,
            pages: h
          };
        }
      ), { previousThreads: d };
    },
    onError: (i, l, c) => {
      const d = a == null ? void 0 : a.id;
      c != null && c.previousThreads && e.setQueryData(
        ["threads", d],
        c.previousThreads
      ), r({
        type: "error",
        title: x("home.toast.error.delete"),
        duration: 2e3
      });
    },
    onSuccess: (i, l) => {
      i.success && s === l ? (o(null), t(`/${a == null ? void 0 : a.id}`)) : i.success || r({
        type: "error",
        title: i.message || x("home.toast.error.delete"),
        duration: 2e3
      });
    },
    onSettled: () => {
      const i = a == null ? void 0 : a.id;
      e.invalidateQueries({ queryKey: ["threads", i] });
    }
  });
}, _n = ae`
  mutation ToggleThreadFavorite(
    $threadId: ID!
    $token: String!
    $assistantId: ID!
    $isFavorite: Boolean!
  ) {
    toggleThreadFavorite(
      threadId: $threadId
      token: $token
      assistantId: $assistantId
      isFavorite: $isFavorite
    ) {
      id
      isFavorite
    }
  }
`, An = async (e) => (await V.request(_n, e)).toggleThreadFavorite, Rn = () => {
  const e = se(), { showToast: t } = ie(), r = X(), { assistantProperties: n } = J();
  return oe({
    mutationFn: (a) => {
      const s = n == null ? void 0 : n.id;
      if (!r || !s)
        throw new Error(x("common.validation.missingParameters"));
      return An({ ...a, token: r, assistantId: s });
    },
    onMutate: async ({ threadId: a, isFavorite: s }) => {
      const i = ["threads", n == null ? void 0 : n.id];
      await e.cancelQueries({ queryKey: i });
      const l = e.getQueryData(i);
      return e.setQueryData(
        i,
        (c) => {
          if (!c) return;
          const d = c.pages.map((m) => ({
            ...m,
            page: m.page.map(
              (h) => h.id === a ? { ...h, isFavorite: s } : h
            )
          }));
          return {
            ...c,
            pages: d
          };
        }
      ), { previousThreads: l };
    },
    onError: (a, s, o) => {
      const i = n == null ? void 0 : n.id;
      o != null && o.previousThreads && e.setQueryData(
        ["threads", i],
        o.previousThreads
      ), t({
        type: "error",
        title: x("home.toast.error.pin"),
        duration: 2e3
      });
    },
    onSettled: () => {
      const a = n == null ? void 0 : n.id;
      e.invalidateQueries({ queryKey: ["threads", a] });
    }
  });
};
function qn(e, t) {
  const r = y.useRef(0);
  y.useEffect(() => {
    const n = () => {
      const s = e.current;
      if (!s) return;
      const o = s.scrollTop, i = o > r.current;
      r.current = o, i && s.scrollHeight - o <= s.clientHeight + 1 && t();
    }, a = e.current;
    return a && a.addEventListener("scroll", n), () => {
      a && a.removeEventListener("scroll", n);
    };
  }, [e, t]);
}
const Un = P({
  slots: {
    sidebarContent: "mt-6 h-[calc(100%-100px)] overflow-y-auto custom-scroll pr-2",
    logoContainer: "flex justify-end h-[1.25rem] w-[8.125rem]",
    logo: "h-[1.25rem] max-w-[8.125rem] object-contain"
  }
});
function $n() {
  const [e, t] = y.useState(!1), r = Et(), n = Un(), { currentThread: a } = jt(), { data: s, fetchNextPage: o, hasNextPage: i, isFetchingNextPage: l } = Pe(), c = y.useMemo(() => {
    var S;
    return ((S = s == null ? void 0 : s.pages) == null ? void 0 : S.flatMap((j) => j.page)) || [];
  }, [s]), { mutate: d, isPending: m } = Rn(), { mutate: h } = Ue(), { mutate: v, isPending: g } = Yn(), f = y.useCallback(
    (S, j) => {
      d({ threadId: S, isFavorite: j });
    },
    [d]
  ), T = y.useCallback(
    (S) => {
      v(S);
    },
    [v]
  ), I = y.useCallback(
    async (S, j) => {
      h({
        threadId: S,
        title: j
      });
    },
    [h]
  ), O = y.useRef(null);
  qn(O, () => {
    !l && i && o();
  });
  const M = y.useCallback(() => {
    r.isFullscreen || t(!1);
  }, [r.isFullscreen]), E = () => /* @__PURE__ */ u.jsxs("div", { className: b(n.sidebarContent()), ref: O, children: [
    /* @__PURE__ */ u.jsx(Pt, { onAssistantSelect: M }),
    /* @__PURE__ */ u.jsx("div", { className: "mt-[30px]", children: /* @__PURE__ */ u.jsx(
      re,
      {
        onlyFavorites: !0,
        items: c == null ? void 0 : c.filter((S) => S.isFavorite),
        currentThreadId: a == null ? void 0 : a.id,
        onDeleteThread: T,
        onToggleFavorite: f,
        updateThreadTitle: I,
        deletingThread: g,
        togglingThread: m,
        onThreadSelect: M
      }
    ) }),
    /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx(
      re,
      {
        items: c,
        currentThreadId: a == null ? void 0 : a.id,
        onDeleteThread: T,
        onToggleFavorite: f,
        updateThreadTitle: I,
        deletingThread: g,
        togglingThread: m,
        onThreadSelect: M
      }
    ) })
  ] });
  return /* @__PURE__ */ u.jsxs("div", { className: "flex h-full min-h-0 relative overflow-x-hidden", children: [
    /* @__PURE__ */ u.jsx(jn, { open: e, setOpen: t, children: E() }),
    /* @__PURE__ */ u.jsx("div", { className: "flex-1 relative min-h-0 overflow-x-hidden", children: /* @__PURE__ */ u.jsx(kt, { context: { isSidebarOpen: e, setIsSidebarOpen: t } }) })
  ] });
}
export {
  $n as default
};
