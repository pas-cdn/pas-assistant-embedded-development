import { c as Z, ak as Re, al as xe, am as Ne, an as je, D as Te, r as m, j as e, ae as d, M as X, ao as qe, i as Ie, ad as _, G as u, ap as Ue, a as ie, f as le, C as ee, F as He, aq as U, ar as Se, as as Be, ai as Ve, at as Qe, au as Ye, n as Ke, l as he, av as We, aw as Ge, ax as Ze, ay as Je, az as Xe, _ as et, aA as tt, aB as st, aC as at, aD as ke, R as nt, ah as rt, e as ot, J as it, L as lt, O as ct, aE as dt, aF as ut } from "./embed-entry-Ba0tPvER.js";
import { c as De, a as Ce, u as mt } from "./list-threads.graphql-B-NIpOtR.js";
import { a as fe, c as K, u as te, e as ht, b as pe, t as oe, d as ft, E as pt, f as gt, S as xt } from "./index-CF0nZDYT.js";
import { T as bt } from "./trash-2-Cj4GX0Tk.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], yt = Z("book-open", vt);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], be = Z("message-square", wt);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], jt = Z("panel-left", Nt);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], It = Z("pencil", Tt);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89", key: "znwnzq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",
      key: "c9qhm2"
    }
  ]
], kt = Z("pin-off", St);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      key: "1nkz8b"
    }
  ]
], ve = Z("pin", Dt);
function Ee(s, t) {
  const n = () => Re(t?.in, NaN), r = Mt(s);
  let i;
  if (r.date) {
    const c = Ft(r.date, 2);
    i = zt(c.restDateString, c.year);
  }
  if (!i || isNaN(+i)) return n();
  const l = +i;
  let o = 0, h;
  if (r.time && (o = Pt(r.time), isNaN(o)))
    return n();
  if (r.timezone) {
    if (h = $t(r.timezone), isNaN(h)) return n();
  } else {
    const c = new Date(l + o), g = xe(0, t?.in);
    return g.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), g.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), g;
  }
  return xe(l + o + h, t?.in);
}
const ne = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Ct = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Et = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, At = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Mt(s) {
  const t = {}, n = s.split(ne.dateTimeDelimiter);
  let a;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? a = n[0] : (t.date = n[0], a = n[1], ne.timeZoneDelimiter.test(t.date) && (t.date = s.split(ne.timeZoneDelimiter)[0], a = s.substr(
    t.date.length,
    s.length
  ))), a) {
    const r = ne.timezone.exec(a);
    r ? (t.time = a.replace(r[1], ""), t.timezone = r[1]) : t.time = a;
  }
  return t;
}
function Ft(s, t) {
  const n = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"
  ), a = s.match(n);
  if (!a) return { year: NaN, restDateString: "" };
  const r = a[1] ? parseInt(a[1]) : null, i = a[2] ? parseInt(a[2]) : null;
  return {
    year: i === null ? r : i * 100,
    restDateString: s.slice((a[1] || a[2]).length)
  };
}
function zt(s, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const n = s.match(Ct);
  if (!n) return /* @__PURE__ */ new Date(NaN);
  const a = !!n[4], r = J(n[1]), i = J(n[2]) - 1, l = J(n[3]), o = J(n[4]), h = J(n[5]) - 1;
  if (a)
    return qt(t, o, h) ? Lt(t, o, h) : /* @__PURE__ */ new Date(NaN);
  {
    const c = /* @__PURE__ */ new Date(0);
    return !Ot(t, i, l) || !Rt(t, r) ? /* @__PURE__ */ new Date(NaN) : (c.setUTCFullYear(t, i, Math.max(r, l)), c);
  }
}
function J(s) {
  return s ? parseInt(s) : 1;
}
function Pt(s) {
  const t = s.match(Et);
  if (!t) return NaN;
  const n = ue(t[1]), a = ue(t[2]), r = ue(t[3]);
  return Ut(n, a, r) ? n * Ne + a * je + r * 1e3 : NaN;
}
function ue(s) {
  return s && parseFloat(s.replace(",", ".")) || 0;
}
function $t(s) {
  if (s === "Z") return 0;
  const t = s.match(At);
  if (!t) return 0;
  const n = t[1] === "+" ? -1 : 1, a = parseInt(t[2]), r = t[3] && parseInt(t[3]) || 0;
  return Ht(a, r) ? n * (a * Ne + r * je) : NaN;
}
function Lt(s, t, n) {
  const a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(s, 0, 4);
  const r = a.getUTCDay() || 7, i = (t - 1) * 7 + n + 1 - r;
  return a.setUTCDate(a.getUTCDate() + i), a;
}
const _t = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ae(s) {
  return s % 400 === 0 || s % 4 === 0 && s % 100 !== 0;
}
function Ot(s, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (_t[t] || (Ae(s) ? 29 : 28));
}
function Rt(s, t) {
  return t >= 1 && t <= (Ae(s) ? 366 : 365);
}
function qt(s, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function Ut(s, t, n) {
  return s === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && s >= 0 && s < 25;
}
function Ht(s, t) {
  return t >= 0 && t <= 59;
}
const Bt = () => {
  const { data: s, isLoading: t } = fe(), n = Te();
  return {
    currentThread: m.useMemo(() => s?.pages ? s.pages.flatMap((i) => i.page).find((i) => i.id === n) : void 0, [s, n]),
    isLoading: t
  };
}, Vt = K({
  slots: {
    container: "flex flex-col gap-[2px] w-full"
  }
}), Qt = K({
  slots: {
    avatar: "h-5 w-5",
    itemIcon: "opacity-0 text-muted-foreground w-4 flex items-center justify-center transition-opacity",
    itemName: "flex items-center text-sm text-sidebar-foreground gap-2 w-full",
    /** Ghost Button: hover = DS `hover:bg-accent`; não duplicar para o merge não “comer” o hover. */
    item: "group w-full justify-start gap-2 font-normal transition-colors"
  },
  variants: {
    isCurrent: {
      true: {
        item: "bg-accent text-accent-foreground"
      },
      false: {
        itemIcon: "group-hover:opacity-100"
      }
    }
  }
}), Yt = ({
  id: s,
  persona: t,
  onSelect: n
}) => {
  const { assistantProperties: a } = te(), { selectAssistant: r, selectThread: i } = X(), { setSelectedAssistantId: l } = Ce(), o = qe(), h = Ie(), { item: c, itemName: g, avatar: x } = Qt({
    isCurrent: a?.id === s
  });
  m.useEffect(() => {
    o.data?.success && h(o.data.redirectTo);
  }, [o.data, h]);
  const b = (v) => {
    if (!v) return;
    n?.(), i(null), r(v), l(v);
    const T = new FormData();
    T.append("assistantId", v);
    const j = window.location.pathname, I = ht(j);
    T.append("subRoute", I), o.submit(T, { method: "post", action: "/select-assistant" });
  };
  return /* @__PURE__ */ e.jsx(
    _,
    {
      type: "button",
      variant: "ghost",
      size: "sm",
      className: d(c()),
      "data-testid": "assistant-item",
      onClick: () => b(s),
      "aria-label": u("home.assistantSelect.buttonSelectAriaLabel", {
        assistantName: t?.name
      }),
      children: /* @__PURE__ */ e.jsxs("div", { className: d(g()), children: [
        /* @__PURE__ */ e.jsx(
          Ue,
          {
            src: t?.avatar?.uri,
            alt: t?.name ?? u("common.fallback.noName"),
            fallback: t?.name?.[0] ?? "",
            size: "xs",
            className: d(x())
          }
        ),
        /* @__PURE__ */ e.jsx(
          "span",
          {
            className: "truncate max-w-40",
            title: t?.name ?? u("common.fallback.noName"),
            children: t?.name ?? u("common.fallback.noName")
          }
        )
      ] })
    }
  );
}, Kt = ({
  onAssistantSelect: s
} = {}) => {
  const t = De(), { container: n } = Vt();
  return /* @__PURE__ */ e.jsx("div", { className: d(n()), children: t.map(({ id: a, persona: r }) => /* @__PURE__ */ e.jsx(
    Yt,
    {
      id: a,
      persona: r,
      onSelect: s
    },
    a
  )) });
}, Wt = ie`
  query SearchThreadMessages(
    $token: String!
    $assistantId: ID!
    $q: String!
    $pagination: PaginationInput
  ) {
    searchThreadMessages(
      token: $token
      assistantId: $assistantId
      q: $q
      pagination: $pagination
    ) {
      items {
        threadId
        threadTitle
        messageId
        messageRole
        messageSequence
        messageCreatedAt
        messageUpdatedAt
        snippet
        highlights {
          start
          end
        }
      }
      currentPage
      perPage
      totalRows
      totalPages
    }
  }
`;
async function Gt(s, t) {
  const n = t.q.trim(), a = t.page ?? 1, r = t.perPage ?? 20;
  return (await le.request(Wt, {
    token: s,
    assistantId: t.assistantId,
    q: n,
    pagination: { page: a, perPage: r }
  })).searchThreadMessages;
}
function Zt(s, t = {}) {
  const n = ee();
  return He({
    queryKey: [
      "thread-message-search",
      s.assistantId,
      s.q,
      s.page ?? 1,
      s.perPage ?? 20
    ],
    queryFn: () => {
      if (!n) throw new Error("Missing token");
      return Gt(n, s);
    },
    enabled: (t.enabled ?? !0) && !!n && !!s.assistantId && !!s.q,
    staleTime: 1e3 * 10
  });
}
function Jt(s, t) {
  const n = Math.max(0, Math.min(t, s.start)), a = Math.max(0, Math.min(t, s.end));
  return a <= n ? null : { start: n, end: a };
}
function Xt(s, t, n) {
  const a = s ?? "";
  if (!a) return a;
  const r = Array.isArray(t) && t.length > 0 ? t.map((o) => Jt(o, a.length)).filter((o) => !!o).sort((o, h) => o.start - h.start) : [];
  if (r.length === 0) {
    const o = (n ?? "").trim();
    if (!o) return a;
    const c = a.toLowerCase().indexOf(o.toLowerCase());
    if (c === -1) return a;
    const g = c, x = c + o.length;
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      a.slice(0, g),
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-primary", children: a.slice(g, x) }),
      a.slice(x)
    ] });
  }
  const i = [];
  let l = 0;
  for (const o of r)
    o.start > l && i.push(a.slice(l, o.start)), i.push(
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-primary", children: a.slice(o.start, o.end) }, `${o.start}-${o.end}`)
    ), l = Math.max(l, o.end);
  return l < a.length && i.push(a.slice(l)), /* @__PURE__ */ e.jsx(e.Fragment, { children: i });
}
const re = "bg-border", es = ["r0", "r1", "r2", "r3", "r4"];
function ye() {
  return /* @__PURE__ */ e.jsx("div", { className: "w-full pt-1", "data-testid": "chat-search-skeleton", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: es.map((s) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-start gap-3 rounded-lg px-2 py-3",
      children: [
        /* @__PURE__ */ e.jsx(
          U,
          {
            className: d(
              "mt-0.5 h-4 w-4 shrink-0 rounded-sm",
              re
            )
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-2 text-left", children: [
          /* @__PURE__ */ e.jsx(
            U,
            {
              className: d(
                "h-4 w-[55%] max-w-[240px] rounded-full",
                re
              )
            }
          ),
          /* @__PURE__ */ e.jsx(
            U,
            {
              className: d(
                "h-4 w-full max-w-[320px] rounded-full",
                re
              )
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx(
          U,
          {
            className: d("h-3 w-10 shrink-0 rounded-full", re)
          }
        )
      ]
    },
    s
  )) }) });
}
const ts = K({
  slots: {
    panel: "relative z-10 flex min-h-0 h-full w-full max-h-full flex-1 flex-col overflow-hidden bg-background outline-none",
    container: "flex h-full min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden",
    header: "flex shrink-0 items-center gap-2 border-b border-list-active pt-2 pb-[11px] pl-3 pr-3 md:pt-[13px] md:pl-4 md:pr-4",
    // `CommandList` do `@pas/ui` inclui `max-h-[300px]` — aqui precisamos ocupar o restante do painel.
    list: "mt-1 min-h-0 max-h-none w-full min-w-0 flex-1 overflow-y-auto overflow-x-hidden custom-scroll",
    searchBody: "bg-popover px-4 pb-4 pt-4 text-left",
    section: "w-full px-4 md:px-5",
    sectionTitle: "mt-4 text-sm font-medium text-popover-foreground md:mt-5",
    recentItems: "mt-5 flex flex-col gap-[10px]",
    recentItem: "group flex w-full min-w-0 items-center gap-3 rounded-lg px-2 py-3 text-left transition-colors hover:bg-accent md:px-2",
    recentItemIcon: "shrink-0 text-popover-foreground [&_svg]:fill-none [&_svg]:stroke-current",
    recentItemText: "min-w-0 flex-1 text-left text-sm font-normal text-popover-foreground",
    resultsList: "mt-0 flex w-full min-w-0 flex-col gap-1",
    resultItem: "group relative flex w-full min-w-0 items-center gap-3 rounded-lg px-2 py-3 text-left transition-colors hover:bg-accent md:gap-3 md:px-2",
    resultIcon: "shrink-0 text-popover-foreground [&_svg]:fill-none [&_svg]:stroke-current",
    resultContent: "min-w-0 flex-1 flex flex-col gap-1 text-left",
    resultTitle: "text-left text-sm font-medium text-popover-foreground",
    resultSnippet: "line-clamp-2 text-left text-sm font-normal text-neutral-1",
    resultDate: "w-14 shrink-0 self-center text-right text-xs font-medium text-neutral-1 tabular-nums opacity-0 transition-opacity group-hover:opacity-100 md:w-16 md:text-sm",
    emptyState: "pt-2 text-sm text-neutral-1",
    errorState: "pt-2 text-sm text-neutral-1"
  }
});
function we(s) {
  if (!s) return "";
  const t = typeof s == "string" ? new Date(s) : s;
  return Number.isNaN(t.getTime()) ? "" : new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }).format(t);
}
function ss(s, t) {
  return s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth() && s.getDate() === t.getDate();
}
const as = 200;
function ns({
  open: s,
  onOpenChange: t,
  onSelectThread: n
}) {
  const a = m.useId(), r = `${a}-title`, i = `${a}-desc`, l = ee(), { assistantProperties: o } = te(), { selectThread: h } = X(), c = Se(), g = m.useRef(null), [x, b] = m.useState(""), [v, T] = m.useState(""), [j, I] = m.useState(s), [w, C] = m.useState(!1), P = s || j;
  m.useLayoutEffect(() => {
    if (c) {
      if (s) {
        I(!0);
        const y = requestAnimationFrame(() => {
          requestAnimationFrame(() => C(!0));
        });
        return () => cancelAnimationFrame(y);
      }
      if (j) {
        C(!1);
        const y = window.setTimeout(() => {
          I(!1);
        }, as);
        return () => clearTimeout(y);
      }
    }
  }, [s, c, j]), m.useEffect(() => {
    w && requestAnimationFrame(() => g.current?.focus());
  }, [w]), m.useEffect(() => {
    const y = window.setTimeout(() => T(x.trim()), 300);
    return () => window.clearTimeout(y);
  }, [x]), m.useEffect(() => {
    if (!s) return;
    const y = (q) => {
      q.key === "Escape" && (q.preventDefault(), t(!1), b(""));
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [s, t]);
  const f = ts(), M = o?.id, {
    data: D,
    isLoading: $,
    isFetching: H
  } = fe(), B = m.useMemo(() => {
    const q = [...D?.pages?.flatMap((L) => L.page) ?? []].sort((L, Y) => {
      const ae = new Date(L.updatedAt ?? L.createdAt).getTime();
      return new Date(Y.updatedAt ?? Y.createdAt).getTime() - ae;
    }), Oe = /* @__PURE__ */ new Date(), ce = /* @__PURE__ */ new Map();
    for (const L of q) {
      const Y = new Date(L.updatedAt ?? L.createdAt), ae = Number.isNaN(Y.getTime()) ? u("common.fallback.unknown", { defaultValue: "—" }) : ss(Y, Oe) ? u("common.date.today", { defaultValue: "Hoje" }) : we(Y), de = ce.get(ae) ?? [];
      de.push(L), ce.set(ae, de);
    }
    return Array.from(ce.entries()).map(([L, Y]) => ({
      label: L,
      items: Y
    }));
  }, [D]), F = v.length > 0, z = x.trim(), S = z.length > 0, V = S && z !== v, k = s && F && !!l && !!M && !!v, {
    data: E,
    isFetching: A,
    isPending: W,
    isError: Q,
    refetch: G
  } = Zt(
    {
      q: v,
      assistantId: M ?? "",
      page: 1,
      perPage: 50
    },
    { enabled: k }
  ), p = E?.totalRows ?? 0, O = F && (W || A), N = P && S && (V || W || A || k && !E && !Q), R = P && F && !N && !O && !Q && p === 0, se = () => t(!1), ge = (y) => {
    se(), h(y), n?.(y);
  }, Pe = /* @__PURE__ */ e.jsxs("div", { className: d(f.header()), children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: d(
          "min-w-0 flex-1",
          "**:[[cmdk-input-wrapper]]:w-full **:[[cmdk-input-wrapper]]:min-w-0 **:[[cmdk-input-wrapper]]:border-b-0 **:[[cmdk-input-wrapper]]:px-2"
        ),
        children: /* @__PURE__ */ e.jsx(
          Be,
          {
            ref: g,
            value: x,
            onValueChange: b,
            placeholder: u("home.search"),
            "data-testid": "chat-search-input"
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsx(
      _,
      {
        variant: "ghost",
        size: "icon",
        type: "button",
        onClick: se,
        "data-testid": "chat-search-close",
        "aria-label": u("common.button.close"),
        icon: /* @__PURE__ */ e.jsx(Ve, { className: "size-4", "aria-hidden": !0 }),
        children: /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: u("common.button.close") })
      }
    )
  ] }), $e = u("home.search"), Le = u("home.searchPlaceholder", {
    defaultValue: "Buscar em chats"
  }), _e = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "absolute inset-0 z-0 bg-background/70",
        "aria-hidden": !0,
        tabIndex: -1,
        onClick: () => {
          t(!1), b("");
        }
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": r,
        "aria-describedby": i,
        className: d(f.panel()),
        onMouseDown: (y) => y.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx("h2", { id: r, className: "sr-only", children: $e }),
          /* @__PURE__ */ e.jsx("p", { id: i, className: "sr-only", children: Le }),
          /* @__PURE__ */ e.jsx(Qe, { className: "min-h-0 flex-1", shouldFilter: !1, children: /* @__PURE__ */ e.jsxs("div", { className: d(f.container()), "data-testid": "chat-search-dialog", children: [
            Pe,
            S && N ? /* @__PURE__ */ e.jsx(
              "output",
              {
                className: d(
                  "block w-full",
                  f.list(),
                  f.searchBody()
                ),
                "data-testid": "chat-search-loading",
                "aria-busy": "true",
                "aria-live": "polite",
                "aria-label": u("common.paginator.loading"),
                children: /* @__PURE__ */ e.jsx(ye, {})
              }
            ) : /* @__PURE__ */ e.jsxs(
              Ye,
              {
                className: d(
                  f.list(),
                  S && f.searchBody()
                ),
                children: [
                  !S && /* @__PURE__ */ e.jsx("div", { className: d(f.section()), children: $ || H ? /* @__PURE__ */ e.jsx(ye, {}) : B.map((y) => /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("div", { className: d(f.sectionTitle()), children: y.label }),
                    /* @__PURE__ */ e.jsx("div", { className: d(f.recentItems()), children: y.items.map((q) => /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        className: d(f.recentItem()),
                        onClick: () => ge(q.id),
                        "data-testid": "chat-search-recent-item",
                        children: [
                          /* @__PURE__ */ e.jsx(
                            be,
                            {
                              className: d(
                                "size-4 shrink-0 fill-none stroke-current",
                                f.recentItemIcon()
                              ),
                              "aria-hidden": !0
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              title: q.title,
                              className: d(f.recentItemText()),
                              children: q.title || u("common.fallback.noTitle")
                            }
                          )
                        ]
                      },
                      q.id
                    )) })
                  ] }, y.label)) }),
                  F && !N && !Q && p > 0 && /* @__PURE__ */ e.jsx("div", { className: d(f.resultsList()), children: E?.items?.map((y) => /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      className: d(f.resultItem()),
                      onClick: () => ge(y.threadId),
                      "data-testid": "chat-search-result-item",
                      children: [
                        /* @__PURE__ */ e.jsx(
                          be,
                          {
                            className: d(
                              "size-4 shrink-0 fill-none stroke-current",
                              f.resultIcon()
                            ),
                            "aria-hidden": !0
                          }
                        ),
                        /* @__PURE__ */ e.jsxs("div", { className: d(f.resultContent()), children: [
                          /* @__PURE__ */ e.jsx("div", { className: d(f.resultTitle()), children: y.threadTitle || u("common.fallback.noTitle") }),
                          /* @__PURE__ */ e.jsx("div", { className: d(f.resultSnippet()), children: Xt(
                            y.snippet,
                            y.highlights,
                            v
                          ) })
                        ] }),
                        /* @__PURE__ */ e.jsx("div", { className: d(f.resultDate()), children: we(
                          y.messageUpdatedAt ?? y.messageCreatedAt
                        ) })
                      ]
                    },
                    y.messageId
                  )) }),
                  R && /* @__PURE__ */ e.jsx("div", { className: d(f.emptyState()), "data-testid": "chat-search-empty", children: u("common.results.empty") }),
                  F && !N && Q && /* @__PURE__ */ e.jsx("div", { className: d(f.errorState()), "data-testid": "chat-search-error", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: u("common.error.generic", {
                      defaultValue: "Não foi possível carregar os resultados agora."
                    }) }),
                    /* @__PURE__ */ e.jsx(
                      _,
                      {
                        type: "button",
                        variant: "secondary",
                        size: "sm",
                        onClick: () => void G(),
                        children: u("common.button.retry", {
                          defaultValue: "Tentar novamente"
                        })
                      }
                    )
                  ] }) })
                ]
              }
            )
          ] }) })
        ]
      }
    )
  ] });
  return !c || !j ? null : Ke.createPortal(
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: d(
          "absolute inset-0 z-[200] flex min-h-0 flex-col transition-opacity duration-200 ease-out",
          w ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        ),
        children: _e
      }
    ),
    c
  );
}
const rs = ie`
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
`, os = async (s, t) => (await le.request(rs, { ...s, assistantId: t })).updateThreadTitle, Me = () => {
  const s = he(), t = ee(), { assistantProperties: n } = te();
  return pe({
    mutationFn: (a) => {
      const r = n?.id;
      if (!t || !r)
        throw new Error(u("common.validation.missingParameters"));
      return os({ ...a, token: t }, r);
    },
    onSuccess: (a, r) => {
      const i = n?.id;
      s.setQueryData(
        ["threads", i],
        (l) => {
          if (!l) return l;
          const o = l.pages.map((h) => ({
            ...h,
            page: h.page.map(
              (c) => c.id === r.threadId ? { ...c, title: a.title } : c
            )
          }));
          return {
            ...l,
            pages: o
          };
        }
      );
    },
    onError: (a) => {
      oe.error(u("home.toast.error.rename"), { duration: 2e3 });
    }
  });
}, is = "absolute inset-0 z-[150] bg-background/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", ls = "absolute left-1/2 top-1/2 z-[151] grid w-full max-w-lg max-h-[min(22rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 gap-4 border border-border bg-sidebar p-6 text-sidebar-foreground shadow-lg duration-200 overflow-y-auto custom-scroll data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-h-[min(32rem,calc(100%-2rem))] sm:rounded-2xl", cs = We;
function ds({
  className: s,
  children: t,
  ...n
}) {
  const a = Se();
  return a == null ? null : /* @__PURE__ */ e.jsx(
    Je,
    {
      portalProps: { container: a },
      overlayClassName: is,
      className: d(ls, s),
      ...n,
      children: t
    }
  );
}
const us = Ge, ms = Ze, hs = K({
  slots: {
    containerStyle: "group w-full flex items-center gap-2 overflow-hidden",
    /** Ghost Button: hover vem do DS (`hover:bg-accent`); aqui só layout + texto base. */
    titleStyle: "w-full max-w-full min-w-0 justify-start gap-2 text-sm font-normal text-sidebar-foreground text-left transition-colors",
    iconButtonStyle: "text-muted-foreground cursor-pointer flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-transparent hover:text-muted-foreground opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto",
    inputStyle: "flex-1 h-8 rounded-md px-2 text-sm bg-sidebar-accent text-foreground focus-visible:ring-0 outline-none border-none"
  },
  variants: {
    isCurrentThread: {
      true: {
        titleStyle: "bg-accent text-accent-foreground"
      }
    },
    menuOpen: {
      true: {
        iconButtonStyle: "opacity-100 pointer-events-auto"
      },
      false: {}
    },
    isEditing: {
      true: {
        iconButtonStyle: "hidden"
      },
      false: {}
    }
  }
}), Fe = ({
  id: s,
  title: t,
  isFavorite: n,
  updateThreadTitle: a,
  isCurrentThread: r,
  onToggleFavorite: i,
  onDeleteThread: l,
  onSelectThread: o,
  deletingThread: h,
  togglingThread: c,
  canRenameThread: g = !0,
  canDeleteThread: x = !0
}) => {
  const { isLoading: b } = ft(), [v, T] = m.useState(!1), [j, I] = m.useState(!1), [w, C] = m.useState(t || "Sem título"), [P, f] = m.useState(!1), [M, D] = m.useState(!1), $ = m.useRef(null), { containerStyle: H, titleStyle: B, iconButtonStyle: F, inputStyle: z } = hs({
    isCurrentThread: r,
    menuOpen: v,
    isEditing: j
  }), { isPending: S } = Me(), { selectThread: V } = X(), k = (p) => {
    p?.defaultPrevented || v || j || (V(s), o?.(s));
  }, E = m.useCallback(() => {
    const p = w.trim();
    if (p === "" || p.length === 1) {
      D(!0);
      return;
    }
    p !== t && !S && a(s, p), I(!1), T(!1), D(!1);
  }, [w, t, S, a, s]), A = m.useCallback(
    (p) => {
      if ($.current && !$.current.contains(p.target)) {
        const O = w.trim();
        if (O === "" || O.length === 1) {
          I(!1), C(t || "Sem título"), T(!1), D(!1);
          return;
        }
        E();
      }
    },
    [E, w, t]
  ), W = m.useCallback(
    (p) => {
      p.key === "Enter" && E(), p.key === "Tab" && p.preventDefault(), p.key === "Escape" && (I(!1), C(t || "Sem título"), T(!1), D(!1), p.stopPropagation());
    },
    [E, t]
  ), Q = () => {
    l(s), f(!1);
  }, G = m.useMemo(() => {
    const p = [
      {
        label: n ? u("home.thread.button.unpin") : u("home.thread.button.pin"),
        icon: n ? /* @__PURE__ */ e.jsx(kt, { className: "size-4", "aria-hidden": !0 }) : /* @__PURE__ */ e.jsx(ve, { className: "size-4", "aria-hidden": !0 }),
        onSelect: () => i(s, !n),
        disabled: c
      }
    ];
    return g && p.push({
      label: u("home.thread.button.rename"),
      icon: /* @__PURE__ */ e.jsx(It, { className: "size-4", "aria-hidden": !0 }),
      onSelect: () => I(!0)
    }), x && p.push({
      label: /* @__PURE__ */ e.jsx("span", { className: "text-destructive", children: u("common.button.delete") }),
      icon: /* @__PURE__ */ e.jsx(bt, { className: "size-4 text-destructive", "aria-hidden": !0 }),
      onSelect: () => f(!0)
    }), p;
  }, [x, g, s, n, i, c]);
  return m.useEffect(() => (j ? document.addEventListener("mousedown", A) : document.removeEventListener("mousedown", A), () => {
    document.removeEventListener("mousedown", A);
  }), [j, A]), /* @__PURE__ */ e.jsxs("div", { className: d(H()), children: [
    j ? /* @__PURE__ */ e.jsx(
      Xe,
      {
        autoFocus: !0,
        value: w,
        ref: $,
        className: d(z(), {
          "focus-visible:ring-red-500": M
        }),
        onChange: (p) => {
          const O = p.target.value;
          C(O);
          const N = O.trim();
          N === "" || N.length === 1 ? D(!0) : D(!1);
        },
        onKeyDown: W
      }
    ) : /* @__PURE__ */ e.jsxs(
      _,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: k,
        className: d(B()),
        children: [
          /* @__PURE__ */ e.jsxs("span", { className: "flex-1 min-w-0 flex items-center gap-2", children: [
            n ? /* @__PURE__ */ e.jsx(ve, { className: "size-4", "aria-hidden": !0 }) : null,
            /* @__PURE__ */ e.jsx("span", { className: "flex-1 min-w-0 truncate", children: t || u("common.fallback.noTitle") })
          ] }),
          !j && (b && r ? /* @__PURE__ */ e.jsx(
            et,
            {
              size: "sm",
              "aria-label": u("common.loading", {
                defaultValue: "Carregando..."
              }),
              degree: "normal"
            }
          ) : /* @__PURE__ */ e.jsx(
            tt,
            {
              trigger: /* @__PURE__ */ e.jsx(
                pt,
                {
                  className: d(F(), "size-4"),
                  "aria-label": u("home.titles.actions"),
                  "data-testid": "conversation-highlight-menu-button",
                  onClick: (p) => {
                    p.preventDefault(), p.stopPropagation();
                  }
                }
              ),
              items: G,
              align: "start",
              onOpenChange: T
            }
          ))
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      cs,
      {
        open: P,
        onOpenChange: f,
        children: /* @__PURE__ */ e.jsxs(ds, { showCloseButton: !1, children: [
          /* @__PURE__ */ e.jsxs(st, { children: [
            /* @__PURE__ */ e.jsx(us, { children: u("home.thread.dialog.delete.title") }),
            /* @__PURE__ */ e.jsx(ms, { children: u("home.thread.dialog.delete.description") })
          ] }),
          /* @__PURE__ */ e.jsxs(at, { className: "flex flex-row justify-end", children: [
            /* @__PURE__ */ e.jsx(
              _,
              {
                type: "button",
                variant: "secondary",
                onClick: () => f(!1),
                children: u("common.button.cancel")
              }
            ),
            /* @__PURE__ */ e.jsx(
              _,
              {
                type: "button",
                variant: "destructive",
                loading: h,
                onClick: Q,
                children: h ? u("common.button.deleting") : u("common.button.delete")
              }
            )
          ] })
        ] })
      }
    )
  ] });
};
Fe.displayName = "ConversationHighlight";
const fs = K({
  slots: {
    containerStyle: "flex flex-col gap-0.5 w-full",
    titleStyle: "text-neutral-1 text-xs pl-[10px] mt-8"
  }
}), ps = (s) => s.reduce(
  (t, n) => {
    const a = typeof n.createdAt == "string" ? Ee(n.createdAt) : n.createdAt, r = ke(a, "yyyy-MM-dd");
    return t[r] || (t[r] = []), t[r].push(n), t;
  },
  {}
), gs = (s) => s.sort((t, n) => new Date(n).getTime() - new Date(t).getTime()), xs = (s) => s.sort(
  (t, n) => new Date(n.createdAt).getTime() - new Date(t.createdAt).getTime()
), bs = (s) => ke(Ee(s), "dd/MM/yy"), me = ({
  items: s,
  updateThreadTitle: t,
  onDeleteThread: n,
  onlyFavorites: a,
  currentThreadId: r,
  onSelectThread: i,
  onToggleFavorite: l = () => {
  },
  deletingThread: o,
  togglingThread: h,
  canRenameThread: c = !0,
  canDeleteThread: g = !0
}) => {
  const { containerStyle: x, titleStyle: b } = fs(), v = a ? s?.filter((w) => w.isFavorite) : s?.filter((w) => !w.isFavorite), T = ps(v || []), j = gs(Object.keys(T)), I = (w, C) => {
    if (!w.length) return null;
    const P = xs(w), f = bs(C);
    return /* @__PURE__ */ e.jsxs(nt.Fragment, { children: [
      !a && /* @__PURE__ */ e.jsx("div", { className: b(), children: f }),
      P.map((M) => /* @__PURE__ */ e.jsx(
        Fe,
        {
          updateThreadTitle: t,
          onDeleteThread: n,
          onSelectThread: i,
          onToggleFavorite: l,
          isCurrentThread: M.id === r,
          deletingThread: o,
          togglingThread: h,
          canRenameThread: c,
          canDeleteThread: g,
          ...M
        },
        M.id
      ))
    ] }, C);
  };
  return /* @__PURE__ */ e.jsx("div", { className: x(), children: j.map((w) => I(T[w], w)) });
};
me.displayName = "ConversationList";
const ze = K({
  slots: {
    sidebar: "pas-embed-sidebar-aside flex min-h-0 flex-1 flex-col overflow-hidden bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out h-full",
    header: "flex items-center justify-between gap-2 p-4 bg-sidebar text-sidebar-foreground shrink-0",
    menuItem: "w-full flex items-center justify-between h-10 rounded-lg px-2 my-2 hover:bg-sidebar-accent transition-colors cursor-pointer",
    menuItemButton: "w-full h-full flex items-center cursor-pointer",
    menuItemText: "text-sm text-sidebar-foreground truncate px-1",
    toggleButton: "cursor-pointer h-8 w-8 shrink-0 flex items-center justify-center rounded-lg hover:bg-accent transition-all duration-300 ease-in-out",
    body: "pl-4",
    contentFrame: "flex min-h-0 flex-1 flex-col overflow-hidden"
  },
  variants: {
    open: {
      true: {
        sidebar: "w-64"
      },
      false: {
        sidebar: "w-16",
        header: "justify-center p-2"
      }
    },
    isActive: {
      true: {
        menuItem: "bg-sidebar-accent"
      },
      false: {
        menuItem: "text-sidebar-foreground/70"
      }
    }
  }
});
function vs() {
  const { sidebar: s, header: t } = ze({ open: !0 });
  return /* @__PURE__ */ e.jsxs("aside", { className: s(), children: [
    /* @__PURE__ */ e.jsx("header", { className: t(), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 px-4 py-3", children: [
      /* @__PURE__ */ e.jsx(U, { className: "h-8 w-8 rounded-full" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1 flex-1", children: [
        /* @__PURE__ */ e.jsx(U, { className: "h-4 w-24 rounded-full" }),
        /* @__PURE__ */ e.jsx(U, { className: "h-3 w-16 rounded-full" })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "px-3 pt-3 pb-4 space-y-3", children: [
      /* @__PURE__ */ e.jsx(U, { className: "h-8 w-full rounded-md" }),
      /* @__PURE__ */ e.jsx(U, { className: "h-8 w-full rounded-md" })
    ] })
  ] });
}
const ys = ({
  open: s,
  defaultOpen: t = !0,
  onOpenChange: n,
  headerAdornment: a,
  headerAction: r,
  items: i,
  children: l,
  showToggleButtons: o,
  isLoading: h
}) => {
  const [c, g] = m.useState(t), x = typeof s == "boolean" && !!n, b = x ? s : c, {
    sidebar: v,
    header: T,
    menuItem: j,
    menuItemButton: I,
    menuItemText: w,
    toggleButton: C,
    contentFrame: P
  } = ze({ open: b });
  if (h)
    return /* @__PURE__ */ e.jsx(vs, {});
  const f = "w-0 -translate-x-full opacity-0 pointer-events-none border-r-0", M = typeof o == "boolean" ? o : !i, D = () => {
    x ? n?.(!b) : g((z) => !z);
  }, $ = () => M ? /* @__PURE__ */ e.jsx(rt, { content: u("home.sidebar.close"), side: "right", children: /* @__PURE__ */ e.jsx("span", { className: "inline-flex rounded-lg transition-colors hover:bg-background", children: /* @__PURE__ */ e.jsx(
    _,
    {
      type: "button",
      variant: "ghost",
      size: "icon",
      className: d(C(), "cursor-w-resize"),
      "data-testid": "sidebar-toggle-button-internal",
      onClick: D,
      icon: /* @__PURE__ */ e.jsx(jt, { "aria-label": u("home.sidebar.close") }),
      "aria-label": u("home.sidebar.close")
    }
  ) }) }) : null, H = () => a ? typeof a == "string" ? /* @__PURE__ */ e.jsx("h1", { children: a }) : a : null, B = () => !b || !r ? null : typeof r == "string" ? /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: r }) : r, F = (z) => !z || !b ? null : /* @__PURE__ */ e.jsx("nav", { className: "p-5", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: z.map((S, V) => /* @__PURE__ */ e.jsxs("div", { children: [
    S.header && /* @__PURE__ */ e.jsx("h2", { className: "text-sidebar-foreground font-semibold text-sm mb-2 ml-2", children: S.header }),
    /* @__PURE__ */ e.jsx("ul", { className: "space-y-1", children: S.items.map((k) => /* @__PURE__ */ e.jsx("li", { children: /* @__PURE__ */ e.jsx("div", { className: d(j({ isActive: k.active })), children: typeof k.label == "string" ? /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: k.onNavItemClick,
        onKeyUp: (E) => {
          (E.key === "Enter" || E.key === " ") && k.onNavItemClick?.();
        },
        className: d(
          I({ isActive: k.active })
        ),
        children: /* @__PURE__ */ e.jsx("span", { className: d(w()), children: k.label })
      }
    ) : k.label }) }, k.label?.toString())) })
  ] }, `group-${V}-${S?.header?.toString()}`)) }) });
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      className: d(
        v(),
        "transform-gpu transition-[width,transform,opacity] duration-300 ease-in-out",
        !b && f
      ),
      "aria-hidden": !b,
      children: [
        /* @__PURE__ */ e.jsx("header", { className: d(T()), children: b ? /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between w-full", children: [
          H(),
          $()
        ] }) : null }),
        b ? B() : null,
        b ? F(i) : null,
        b ? /* @__PURE__ */ e.jsx("div", { className: P(), children: l }) : null
      ]
    }
  );
}, ws = ie`
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
`, Ns = async (s) => (await le.request(ws, s)).deleteThread, js = () => {
  const s = he(), t = Ie(), n = ee(), { assistantProperties: a } = te(), r = Te(), { selectThread: i } = X();
  return pe({
    mutationFn: (l) => {
      const o = a?.id;
      if (!n || !o)
        throw new Error(u("common.validation.missingParameters"));
      return Ns({ token: n, threadId: l, assistantId: o });
    },
    onMutate: async (l) => {
      const h = ["threads", a?.id];
      await s.cancelQueries({ queryKey: h });
      const c = s.getQueryData(h);
      return s.setQueryData(
        h,
        (g) => {
          if (!g) return;
          const x = g.pages.map((b) => ({
            ...b,
            page: b.page.filter((v) => v.id !== l)
          }));
          return {
            ...g,
            pages: x
          };
        }
      ), { previousThreads: c };
    },
    onError: (l, o, h) => {
      const c = a?.id;
      h?.previousThreads && s.setQueryData(
        ["threads", c],
        h.previousThreads
      ), oe.error(u("home.toast.error.delete"), { duration: 2e3 });
    },
    onSuccess: (l, o) => {
      l.success && r === o ? (i(null), t(`/${a?.id}`)) : l.success || oe.error(l.message || u("home.toast.error.delete"), {
        duration: 2e3
      });
    },
    onSettled: () => {
      const l = a?.id;
      s.invalidateQueries({ queryKey: ["threads", l] });
    }
  });
}, Ts = ie`
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
`, Is = async (s) => (await le.request(Ts, s)).toggleThreadFavorite, Ss = () => {
  const s = he(), t = ee(), { assistantProperties: n } = te();
  return pe({
    mutationFn: (a) => {
      const r = n?.id;
      if (!t || !r)
        throw new Error(u("common.validation.missingParameters"));
      return Is({ ...a, token: t, assistantId: r });
    },
    onMutate: async ({ threadId: a, isFavorite: r }) => {
      const l = ["threads", n?.id];
      await s.cancelQueries({ queryKey: l });
      const o = s.getQueryData(l);
      return s.setQueryData(
        l,
        (h) => {
          if (!h) return;
          const c = h.pages.map((g) => ({
            ...g,
            page: g.page.map(
              (x) => x.id === a ? { ...x, isFavorite: r } : x
            )
          }));
          return {
            ...h,
            pages: c
          };
        }
      ), { previousThreads: o };
    },
    onError: (a, r, i) => {
      const l = n?.id;
      i?.previousThreads && s.setQueryData(
        ["threads", l],
        i.previousThreads
      ), oe.error(u("home.toast.error.pin"), { duration: 2e3 });
    },
    onSettled: () => {
      const a = n?.id;
      s.invalidateQueries({ queryKey: ["threads", a] });
    }
  });
};
function ks(s, t) {
  const n = m.useRef(0);
  m.useEffect(() => {
    const a = () => {
      const i = s.current;
      if (!i) return;
      const l = i.scrollTop, o = l > n.current;
      n.current = l, o && i.scrollHeight - l <= i.clientHeight + 1 && t();
    }, r = s.current;
    return r && r.addEventListener("scroll", a), () => {
      r && r.removeEventListener("scroll", a);
    };
  }, [s, t]);
}
const Ds = K({
  slots: {
    sidebarContent: "flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden custom-scroll w-full",
    logoContainer: "flex items-center gap-2 h-8",
    logo: "h-8 w-8 object-cover rounded-lg"
  }
});
function Fs() {
  const [s, t] = m.useState(!1), [n, a] = m.useState(!0), [r, i] = m.useState(!1), l = gt(), o = Ds(), { currentThread: h } = Bt(), { data: c, isLoading: g } = ot(), { selectThread: x, clearMessages: b } = X(), { assistantId: v } = it(), [T, j] = lt(), I = De(), { setSelectedAssistantId: w } = Ce();
  m.useEffect(() => {
    if (I.length === 0) return;
    const R = ((v ? I.find((se) => se.id === v) : void 0) ?? I[0])?.id;
    R && mt.getState().selectedAssistantId !== R && w(R);
  }, [I, v, w]);
  const { data: C, fetchNextPage: P, hasNextPage: f, isFetchingNextPage: M } = fe(), D = m.useMemo(() => C?.pages?.flatMap((N) => N.page) || [], [C]), $ = m.useMemo(
    () => D.filter((N) => N.isFavorite),
    [D]
  ), { mutate: H, isPending: B } = Ss(), { mutate: F } = Me(), { mutate: z, isPending: S } = js(), V = m.useCallback(
    (N, R) => {
      H({ threadId: N, isFavorite: R });
    },
    [H]
  ), k = m.useCallback(
    (N) => {
      z(N);
    },
    [z]
  ), E = m.useCallback(
    (N, R) => {
      F({
        threadId: N,
        title: R
      });
    },
    [F]
  ), A = m.useCallback(() => {
    l.isFullscreen || t(!1);
  }, [l.isFullscreen]), W = m.useCallback(() => {
    if (!v) return;
    x(null), b();
    const N = new URLSearchParams(T);
    N.delete("lastThreadId"), j(N, { replace: !0 }), A();
  }, [
    b,
    A,
    v,
    T,
    x,
    j
  ]), Q = () => /* @__PURE__ */ e.jsxs("div", { className: d(o.logoContainer()), children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: c?.logoUri || "",
        alt: "Logo",
        className: d(o.logo())
      }
    ),
    c?.name && /* @__PURE__ */ e.jsx("span", { className: "text-sm font-semibold text-foreground", children: c.name })
  ] }), G = m.useRef(null);
  ks(G, () => {
    !M && f && P();
  });
  const p = () => /* @__PURE__ */ e.jsxs("div", { className: d(o.sidebarContent()), ref: G, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 w-full p-2", children: [
      /* @__PURE__ */ e.jsx(
        _,
        {
          variant: "ghost",
          size: "sm",
          className: "w-full flex items-center gap-2 h-8 rounded-md p-2 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground",
          onClick: W,
          "data-testid": "create-thread-button",
          "aria-label": u("home.newChat"),
          icon: /* @__PURE__ */ e.jsx(xt, { className: "size-4", "aria-hidden": !0 }),
          children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center text-sm font-normal gap-2 w-full", children: u("home.newChat") })
        }
      ),
      /* @__PURE__ */ e.jsx(
        _,
        {
          variant: "ghost",
          size: "sm",
          className: "w-full flex items-center gap-2 h-8 rounded-md p-2 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground",
          type: "button",
          onClick: () => i(!0),
          disabled: !v,
          "data-testid": "global-search-button",
          "aria-label": u("home.search"),
          icon: /* @__PURE__ */ e.jsx(dt, { className: "size-4", "aria-hidden": !0 }),
          children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center text-sm font-normal gap-2 w-full", children: u("home.search") })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        _,
        {
          variant: "ghost",
          size: "sm",
          type: "button",
          className: "w-full flex items-center justify-between h-8 rounded-md p-2 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground",
          onClick: () => a((N) => !N),
          "aria-label": u("home.assistants"),
          "data-testid": "assistants-toggle",
          children: [
            /* @__PURE__ */ e.jsxs("span", { className: "flex items-center text-sm font-normal gap-2", children: [
              /* @__PURE__ */ e.jsx(yt, { className: "size-4", "aria-hidden": !0 }),
              /* @__PURE__ */ e.jsx("span", { className: "truncate", children: u("home.assistants") })
            ] }),
            /* @__PURE__ */ e.jsx(
              ut,
              {
                className: d(
                  "size-4 transition-transform duration-200",
                  n && "rotate-90"
                ),
                "aria-hidden": !0
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: d(
            "overflow-hidden transition-all duration-200",
            n ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          ),
          children: /* @__PURE__ */ e.jsx("div", { className: "pas-embed-sidebar-inset border-l border-sidebar-border ml-4.5 pl-2.5 py-1.5", children: /* @__PURE__ */ e.jsx(Kt, { onAssistantSelect: A }) })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-2", children: [
      $.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "p-2", children: /* @__PURE__ */ e.jsx(
        me,
        {
          onlyFavorites: !0,
          items: $,
          currentThreadId: h?.id,
          onSelectThread: A,
          onDeleteThread: k,
          onToggleFavorite: V,
          updateThreadTitle: E,
          deletingThread: S,
          togglingThread: B,
          canRenameThread: !0,
          canDeleteThread: !0
        }
      ) }),
      /* @__PURE__ */ e.jsx("div", { className: "p-2", children: /* @__PURE__ */ e.jsx(
        me,
        {
          items: D,
          currentThreadId: h?.id,
          onSelectThread: A,
          onDeleteThread: k,
          onToggleFavorite: V,
          updateThreadTitle: E,
          deletingThread: S,
          togglingThread: B,
          canRenameThread: !0,
          canDeleteThread: !0
        }
      ) })
    ] })
  ] }), O = g;
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 min-h-0 h-full relative overflow-hidden", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex h-full min-h-0 shrink-0 flex-col", children: /* @__PURE__ */ e.jsx(
      ys,
      {
        open: s,
        onOpenChange: t,
        headerAdornment: c?.logoUri ? Q() : "",
        isLoading: O,
        children: p()
      }
    ) }),
    /* @__PURE__ */ e.jsx(
      ns,
      {
        open: r,
        onOpenChange: i,
        onSelectThread: A
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col h-full overflow-hidden", children: /* @__PURE__ */ e.jsx(ct, { context: { isSidebarOpen: s, setIsSidebarOpen: t } }) })
  ] });
}
export {
  Fs as default
};
