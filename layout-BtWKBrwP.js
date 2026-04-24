import { c as Z, b1 as He, b2 as ye, b3 as Te, b4 as Ie, aq as Se, r as h, j as t, aY as d, ay as ee, b5 as Pe, H as ke, aX as O, as as u, b6 as Be, y as le, F as ce, ap as te, ar as Ve, b7 as B, b8 as De, b9 as Qe, a$ as Ye, ba as Ke, bb as We, aa as Ge, J as fe, bc as Ze, bd as Je, be as Xe, bf as et, bg as tt, _ as st, bh as at, bi as nt, bj as rt, bk as Ce, a9 as ot, a_ as it, D as lt, av as ct, ax as dt, O as ut, bl as mt, bm as ht } from "./embed-entry-B68VGA8B.js";
import { c as Ee, a as Ae, u as ft } from "./list-threads.graphql-DnOAwy1M.js";
import { a as ge, c as W, u as se, e as gt, b as pe, t as ie, d as pt, E as xt, f as bt, S as yt } from "./index-B5gTIgOH.js";
import { T as vt } from "./trash-2-DhCndcdo.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], Nt = Z("book-open", wt);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], ve = Z("message-square", jt);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], It = Z("panel-left", Tt);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], kt = Z("pencil", St);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
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
], Ct = Z("pin-off", Dt);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      key: "1nkz8b"
    }
  ]
], we = Z("pin", Et);
function Me(s, e) {
  const a = () => He(e == null ? void 0 : e.in, NaN), r = $t(s);
  let i;
  if (r.date) {
    const l = Lt(r.date, 2);
    i = _t(l.restDateString, l.year);
  }
  if (!i || isNaN(+i)) return a();
  const c = +i;
  let o = 0, m;
  if (r.time && (o = zt(r.time), isNaN(o)))
    return a();
  if (r.timezone) {
    if (m = Rt(r.timezone), isNaN(m)) return a();
  } else {
    const l = new Date(c + o), x = ye(0, e == null ? void 0 : e.in);
    return x.setFullYear(
      l.getUTCFullYear(),
      l.getUTCMonth(),
      l.getUTCDate()
    ), x.setHours(
      l.getUTCHours(),
      l.getUTCMinutes(),
      l.getUTCSeconds(),
      l.getUTCMilliseconds()
    ), x;
  }
  return ye(c + o + m, e == null ? void 0 : e.in);
}
const re = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, At = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Mt = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Ft = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function $t(s) {
  const e = {}, a = s.split(re.dateTimeDelimiter);
  let n;
  if (a.length > 2)
    return e;
  if (/:/.test(a[0]) ? n = a[0] : (e.date = a[0], n = a[1], re.timeZoneDelimiter.test(e.date) && (e.date = s.split(re.timeZoneDelimiter)[0], n = s.substr(
    e.date.length,
    s.length
  ))), n) {
    const r = re.timezone.exec(n);
    r ? (e.time = n.replace(r[1], ""), e.timezone = r[1]) : e.time = n;
  }
  return e;
}
function Lt(s, e) {
  const a = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + e) + "})|(\\d{2}|[+-]\\d{" + (2 + e) + "})$)"
  ), n = s.match(a);
  if (!n) return { year: NaN, restDateString: "" };
  const r = n[1] ? parseInt(n[1]) : null, i = n[2] ? parseInt(n[2]) : null;
  return {
    year: i === null ? r : i * 100,
    restDateString: s.slice((n[1] || n[2]).length)
  };
}
function _t(s, e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  const a = s.match(At);
  if (!a) return /* @__PURE__ */ new Date(NaN);
  const n = !!a[4], r = X(a[1]), i = X(a[2]) - 1, c = X(a[3]), o = X(a[4]), m = X(a[5]) - 1;
  if (n)
    return Pt(e, o, m) ? qt(e, o, m) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !Ut(e, i, c) || !Ht(e, r) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(e, i, Math.max(r, c)), l);
  }
}
function X(s) {
  return s ? parseInt(s) : 1;
}
function zt(s) {
  const e = s.match(Mt);
  if (!e) return NaN;
  const a = me(e[1]), n = me(e[2]), r = me(e[3]);
  return Bt(a, n, r) ? a * Te + n * Ie + r * 1e3 : NaN;
}
function me(s) {
  return s && parseFloat(s.replace(",", ".")) || 0;
}
function Rt(s) {
  if (s === "Z") return 0;
  const e = s.match(Ft);
  if (!e) return 0;
  const a = e[1] === "+" ? -1 : 1, n = parseInt(e[2]), r = e[3] && parseInt(e[3]) || 0;
  return Vt(n, r) ? a * (n * Te + r * Ie) : NaN;
}
function qt(s, e, a) {
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(s, 0, 4);
  const r = n.getUTCDay() || 7, i = (e - 1) * 7 + a + 1 - r;
  return n.setUTCDate(n.getUTCDate() + i), n;
}
const Ot = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Fe(s) {
  return s % 400 === 0 || s % 4 === 0 && s % 100 !== 0;
}
function Ut(s, e, a) {
  return e >= 0 && e <= 11 && a >= 1 && a <= (Ot[e] || (Fe(s) ? 29 : 28));
}
function Ht(s, e) {
  return e >= 1 && e <= (Fe(s) ? 366 : 365);
}
function Pt(s, e, a) {
  return e >= 1 && e <= 53 && a >= 0 && a <= 6;
}
function Bt(s, e, a) {
  return s === 24 ? e === 0 && a === 0 : a >= 0 && a < 60 && e >= 0 && e < 60 && s >= 0 && s < 25;
}
function Vt(s, e) {
  return e >= 0 && e <= 59;
}
const Qt = () => {
  const { data: s, isLoading: e } = ge(), a = Se();
  return {
    currentThread: h.useMemo(() => s != null && s.pages ? s.pages.flatMap((i) => i.page).find((i) => i.id === a) : void 0, [s, a]),
    isLoading: e
  };
}, Yt = W({
  slots: {
    container: "flex flex-col gap-[2px] w-full"
  }
}), Kt = W({
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
}), Wt = ({
  id: s,
  persona: e,
  onSelect: a
}) => {
  var j, D;
  const { assistantProperties: n } = se(), { selectAssistant: r, selectThread: i } = ee(), { setSelectedAssistantId: c } = Ae(), o = Pe(), m = ke(), { item: l, itemName: x, avatar: b } = Kt({
    isCurrent: (n == null ? void 0 : n.id) === s
  });
  h.useEffect(() => {
    var v;
    (v = o.data) != null && v.success && m(o.data.redirectTo);
  }, [o.data, m]);
  const y = (v) => {
    if (!v) return;
    a == null || a(), i(null), r(v), c(v);
    const I = new FormData();
    I.append("assistantId", v);
    const w = window.location.pathname, S = gt(w);
    I.append("subRoute", S), o.submit(I, { method: "post", action: "/select-assistant" });
  };
  return /* @__PURE__ */ t.jsx(
    O,
    {
      type: "button",
      variant: "ghost",
      size: "sm",
      className: d(l()),
      "data-testid": "assistant-item",
      onClick: () => y(s),
      "aria-label": u("home.assistantSelect.buttonSelectAriaLabel", {
        assistantName: e == null ? void 0 : e.name
      }),
      children: /* @__PURE__ */ t.jsxs("div", { className: d(x()), children: [
        /* @__PURE__ */ t.jsx(
          Be,
          {
            src: (j = e == null ? void 0 : e.avatar) == null ? void 0 : j.uri,
            alt: (e == null ? void 0 : e.name) ?? u("common.fallback.noName"),
            fallback: ((D = e == null ? void 0 : e.name) == null ? void 0 : D[0]) ?? "",
            size: "xs",
            className: d(b())
          }
        ),
        /* @__PURE__ */ t.jsx(
          "span",
          {
            className: "truncate max-w-40",
            title: (e == null ? void 0 : e.name) ?? u("common.fallback.noName"),
            children: (e == null ? void 0 : e.name) ?? u("common.fallback.noName")
          }
        )
      ] })
    }
  );
}, Gt = ({
  onAssistantSelect: s
} = {}) => {
  const e = Ee(), { container: a } = Yt();
  return /* @__PURE__ */ t.jsx("div", { className: d(a()), children: e.map(({ id: n, persona: r }) => /* @__PURE__ */ t.jsx(
    Wt,
    {
      id: n,
      persona: r,
      onSelect: s
    },
    n
  )) });
}, Zt = le`
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
async function Jt(s, e) {
  const a = e.q.trim(), n = e.page ?? 1, r = e.perPage ?? 20;
  return (await ce.request(Zt, {
    token: s,
    assistantId: e.assistantId,
    q: a,
    pagination: { page: n, perPage: r }
  })).searchThreadMessages;
}
function Xt(s, e = {}) {
  const a = te();
  return Ve({
    queryKey: [
      "thread-message-search",
      s.assistantId,
      s.q,
      s.page ?? 1,
      s.perPage ?? 20
    ],
    queryFn: () => {
      if (!a) throw new Error("Missing token");
      return Jt(a, s);
    },
    enabled: (e.enabled ?? !0) && !!a && !!s.assistantId && !!s.q,
    staleTime: 1e3 * 10
  });
}
function es(s, e) {
  const a = Math.max(0, Math.min(e, s.start)), n = Math.max(0, Math.min(e, s.end));
  return n <= a ? null : { start: a, end: n };
}
function ts(s, e, a) {
  const n = s ?? "";
  if (!n) return n;
  const r = Array.isArray(e) && e.length > 0 ? e.map((o) => es(o, n.length)).filter((o) => !!o).sort((o, m) => o.start - m.start) : [];
  if (r.length === 0) {
    const o = (a ?? "").trim();
    if (!o) return n;
    const l = n.toLowerCase().indexOf(o.toLowerCase());
    if (l === -1) return n;
    const x = l, b = l + o.length;
    return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      n.slice(0, x),
      /* @__PURE__ */ t.jsx("span", { className: "font-medium text-primary", children: n.slice(x, b) }),
      n.slice(b)
    ] });
  }
  const i = [];
  let c = 0;
  for (const o of r)
    o.start > c && i.push(n.slice(c, o.start)), i.push(
      /* @__PURE__ */ t.jsx("span", { className: "font-medium text-primary", children: n.slice(o.start, o.end) }, `${o.start}-${o.end}`)
    ), c = Math.max(c, o.end);
  return c < n.length && i.push(n.slice(c)), /* @__PURE__ */ t.jsx(t.Fragment, { children: i });
}
const oe = "bg-border", ss = ["r0", "r1", "r2", "r3", "r4"];
function Ne() {
  return /* @__PURE__ */ t.jsx("div", { className: "w-full pt-1", "data-testid": "chat-search-skeleton", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: ss.map((s) => /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "flex items-start gap-3 rounded-lg px-2 py-3",
      children: [
        /* @__PURE__ */ t.jsx(
          B,
          {
            className: d(
              "mt-0.5 h-4 w-4 shrink-0 rounded-sm",
              oe
            )
          }
        ),
        /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-2 text-left", children: [
          /* @__PURE__ */ t.jsx(
            B,
            {
              className: d(
                "h-4 w-[55%] max-w-[240px] rounded-full",
                oe
              )
            }
          ),
          /* @__PURE__ */ t.jsx(
            B,
            {
              className: d(
                "h-4 w-full max-w-[320px] rounded-full",
                oe
              )
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx(
          B,
          {
            className: d("h-3 w-10 shrink-0 rounded-full", oe)
          }
        )
      ]
    },
    s
  )) }) });
}
const as = W({
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
function je(s) {
  if (!s) return "";
  const e = typeof s == "string" ? new Date(s) : s;
  return Number.isNaN(e.getTime()) ? "" : new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }).format(e);
}
function ns(s, e) {
  return s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth() && s.getDate() === e.getDate();
}
const rs = 200;
function os({
  open: s,
  onOpenChange: e,
  onSelectThread: a
}) {
  var xe;
  const n = h.useId(), r = `${n}-title`, i = `${n}-desc`, c = te(), { assistantProperties: o } = se(), { selectThread: m } = ee(), l = De(), x = h.useRef(null), [b, y] = h.useState(""), [j, D] = h.useState(""), [v, I] = h.useState(s), [w, S] = h.useState(!1), _ = s || v;
  h.useLayoutEffect(() => {
    if (l) {
      if (s) {
        I(!0);
        const p = requestAnimationFrame(() => {
          requestAnimationFrame(() => S(!0));
        });
        return () => cancelAnimationFrame(p);
      }
      if (v) {
        S(!1);
        const p = window.setTimeout(() => {
          I(!1);
        }, rs);
        return () => clearTimeout(p);
      }
    }
  }, [s, l, v]), h.useEffect(() => {
    w && requestAnimationFrame(() => {
      var p;
      return (p = x.current) == null ? void 0 : p.focus();
    });
  }, [w]), h.useEffect(() => {
    const p = window.setTimeout(() => D(b.trim()), 300);
    return () => window.clearTimeout(p);
  }, [b]), h.useEffect(() => {
    if (!s) return;
    const p = (P) => {
      P.key === "Escape" && (P.preventDefault(), e(!1), y(""));
    };
    return window.addEventListener("keydown", p), () => window.removeEventListener("keydown", p);
  }, [s, e]);
  const f = as(), A = o == null ? void 0 : o.id, {
    data: C,
    isLoading: z,
    isFetching: V
  } = ge(), Q = h.useMemo(() => {
    var be;
    const P = [...((be = C == null ? void 0 : C.pages) == null ? void 0 : be.flatMap((q) => q.page)) ?? []].sort((q, K) => {
      const ne = new Date(q.updatedAt ?? q.createdAt).getTime();
      return new Date(K.updatedAt ?? K.createdAt).getTime() - ne;
    }), Ue = /* @__PURE__ */ new Date(), de = /* @__PURE__ */ new Map();
    for (const q of P) {
      const K = new Date(q.updatedAt ?? q.createdAt), ne = Number.isNaN(K.getTime()) ? u("common.fallback.unknown", { defaultValue: "—" }) : ns(K, Ue) ? u("common.date.today", { defaultValue: "Hoje" }) : je(K), ue = de.get(ne) ?? [];
      ue.push(q), de.set(ne, ue);
    }
    return Array.from(de.entries()).map(([q, K]) => ({
      label: q,
      items: K
    }));
  }, [C]), M = j.length > 0, F = b.trim(), k = F.length > 0, Y = k && F !== j, R = s && M && !!c && !!A && !!j, {
    data: N,
    isFetching: E,
    isPending: U,
    isError: $,
    refetch: G
  } = Xt(
    {
      q: j,
      assistantId: A ?? "",
      page: 1,
      perPage: 50
    },
    { enabled: R }
  ), g = (N == null ? void 0 : N.totalRows) ?? 0, H = M && (U || E), T = _ && k && (Y || U || E || R && !N && !$), L = _ && M && !T && !H && !$ && g === 0, J = () => e(!1), ae = (p) => {
    J(), m(p), a == null || a(p);
  }, ze = /* @__PURE__ */ t.jsxs("div", { className: d(f.header()), children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: d(
          "min-w-0 flex-1",
          "**:[[cmdk-input-wrapper]]:w-full **:[[cmdk-input-wrapper]]:min-w-0 **:[[cmdk-input-wrapper]]:border-b-0 **:[[cmdk-input-wrapper]]:px-2"
        ),
        children: /* @__PURE__ */ t.jsx(
          Qe,
          {
            ref: x,
            value: b,
            onValueChange: y,
            placeholder: u("home.search"),
            "data-testid": "chat-search-input"
          }
        )
      }
    ),
    /* @__PURE__ */ t.jsx(
      O,
      {
        variant: "ghost",
        size: "icon",
        type: "button",
        onClick: J,
        "data-testid": "chat-search-close",
        "aria-label": u("common.button.close"),
        icon: /* @__PURE__ */ t.jsx(Ye, { className: "size-4", "aria-hidden": !0 }),
        children: /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: u("common.button.close") })
      }
    )
  ] }), Re = u("home.search"), qe = u("home.searchPlaceholder", {
    defaultValue: "Buscar em chats"
  }), Oe = /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        className: "absolute inset-0 z-0 bg-background/70",
        "aria-hidden": !0,
        tabIndex: -1,
        onClick: () => {
          e(!1), y("");
        }
      }
    ),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": r,
        "aria-describedby": i,
        className: d(f.panel()),
        onMouseDown: (p) => p.stopPropagation(),
        children: [
          /* @__PURE__ */ t.jsx("h2", { id: r, className: "sr-only", children: Re }),
          /* @__PURE__ */ t.jsx("p", { id: i, className: "sr-only", children: qe }),
          /* @__PURE__ */ t.jsx(Ke, { className: "min-h-0 flex-1", shouldFilter: !1, children: /* @__PURE__ */ t.jsxs("div", { className: d(f.container()), "data-testid": "chat-search-dialog", children: [
            ze,
            k && T ? /* @__PURE__ */ t.jsx(
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
                children: /* @__PURE__ */ t.jsx(Ne, {})
              }
            ) : /* @__PURE__ */ t.jsxs(
              We,
              {
                className: d(
                  f.list(),
                  k && f.searchBody()
                ),
                children: [
                  !k && /* @__PURE__ */ t.jsx("div", { className: d(f.section()), children: z || V ? /* @__PURE__ */ t.jsx(Ne, {}) : Q.map((p) => /* @__PURE__ */ t.jsxs("div", { children: [
                    /* @__PURE__ */ t.jsx("div", { className: d(f.sectionTitle()), children: p.label }),
                    /* @__PURE__ */ t.jsx("div", { className: d(f.recentItems()), children: p.items.map((P) => /* @__PURE__ */ t.jsxs(
                      "button",
                      {
                        type: "button",
                        className: d(f.recentItem()),
                        onClick: () => ae(P.id),
                        "data-testid": "chat-search-recent-item",
                        children: [
                          /* @__PURE__ */ t.jsx(
                            ve,
                            {
                              className: d(
                                "size-4 shrink-0 fill-none stroke-current",
                                f.recentItemIcon()
                              ),
                              "aria-hidden": !0
                            }
                          ),
                          /* @__PURE__ */ t.jsx(
                            "div",
                            {
                              title: P.title,
                              className: d(f.recentItemText()),
                              children: P.title || u("common.fallback.noTitle")
                            }
                          )
                        ]
                      },
                      P.id
                    )) })
                  ] }, p.label)) }),
                  M && !T && !$ && g > 0 && /* @__PURE__ */ t.jsx("div", { className: d(f.resultsList()), children: (xe = N == null ? void 0 : N.items) == null ? void 0 : xe.map((p) => /* @__PURE__ */ t.jsxs(
                    "button",
                    {
                      type: "button",
                      className: d(f.resultItem()),
                      onClick: () => ae(p.threadId),
                      "data-testid": "chat-search-result-item",
                      children: [
                        /* @__PURE__ */ t.jsx(
                          ve,
                          {
                            className: d(
                              "size-4 shrink-0 fill-none stroke-current",
                              f.resultIcon()
                            ),
                            "aria-hidden": !0
                          }
                        ),
                        /* @__PURE__ */ t.jsxs("div", { className: d(f.resultContent()), children: [
                          /* @__PURE__ */ t.jsx("div", { className: d(f.resultTitle()), children: p.threadTitle || u("common.fallback.noTitle") }),
                          /* @__PURE__ */ t.jsx("div", { className: d(f.resultSnippet()), children: ts(
                            p.snippet,
                            p.highlights,
                            j
                          ) })
                        ] }),
                        /* @__PURE__ */ t.jsx("div", { className: d(f.resultDate()), children: je(
                          p.messageUpdatedAt ?? p.messageCreatedAt
                        ) })
                      ]
                    },
                    p.messageId
                  )) }),
                  L && /* @__PURE__ */ t.jsx("div", { className: d(f.emptyState()), "data-testid": "chat-search-empty", children: u("common.results.empty") }),
                  M && !T && $ && /* @__PURE__ */ t.jsx("div", { className: d(f.errorState()), "data-testid": "chat-search-error", children: /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
                    /* @__PURE__ */ t.jsx("span", { children: u("common.error.generic", {
                      defaultValue: "Não foi possível carregar os resultados agora."
                    }) }),
                    /* @__PURE__ */ t.jsx(
                      O,
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
  return !l || !v ? null : Ge.createPortal(
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: d(
          "absolute inset-0 z-[200] flex min-h-0 flex-col transition-opacity duration-200 ease-out",
          w ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        ),
        children: Oe
      }
    ),
    l
  );
}
const is = le`
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
`, ls = async (s, e) => (await ce.request(is, { ...s, assistantId: e })).updateThreadTitle, $e = () => {
  const s = fe(), e = te(), { assistantProperties: a } = se();
  return pe({
    mutationFn: (n) => {
      const r = a == null ? void 0 : a.id;
      if (!e || !r)
        throw new Error(u("common.validation.missingParameters"));
      return ls({ ...n, token: e }, r);
    },
    onSuccess: (n, r) => {
      const i = a == null ? void 0 : a.id;
      s.setQueryData(
        ["threads", i],
        (c) => {
          if (!c) return c;
          const o = c.pages.map((m) => ({
            ...m,
            page: m.page.map(
              (l) => l.id === r.threadId ? { ...l, title: n.title } : l
            )
          }));
          return {
            ...c,
            pages: o
          };
        }
      );
    },
    onError: (n) => {
      ie.error(u("home.toast.error.rename"), { duration: 2e3 });
    }
  });
}, cs = "absolute inset-0 z-[150] bg-background/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", ds = "absolute left-1/2 top-1/2 z-[151] grid w-full max-w-lg max-h-[min(22rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 gap-4 border border-border bg-sidebar p-6 text-sidebar-foreground shadow-lg duration-200 overflow-y-auto custom-scroll data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-h-[min(32rem,calc(100%-2rem))] sm:rounded-2xl", us = Ze;
function ms({
  className: s,
  children: e,
  ...a
}) {
  const n = De();
  return n == null ? null : /* @__PURE__ */ t.jsx(
    et,
    {
      portalProps: { container: n },
      overlayClassName: cs,
      className: d(ds, s),
      ...a,
      children: e
    }
  );
}
const hs = Je, fs = Xe, gs = W({
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
}), Le = ({
  id: s,
  title: e,
  isFavorite: a,
  updateThreadTitle: n,
  isCurrentThread: r,
  onToggleFavorite: i,
  onDeleteThread: c,
  onSelectThread: o,
  deletingThread: m,
  togglingThread: l,
  canRenameThread: x = !0,
  canDeleteThread: b = !0
}) => {
  const { isLoading: y } = pt(), [j, D] = h.useState(!1), [v, I] = h.useState(!1), [w, S] = h.useState(e || "Sem título"), [_, f] = h.useState(!1), [A, C] = h.useState(!1), z = h.useRef(null), { containerStyle: V, titleStyle: Q, iconButtonStyle: M, inputStyle: F } = gs({
    isCurrentThread: r,
    menuOpen: j,
    isEditing: v
  }), { isPending: k } = $e(), { selectThread: Y } = ee(), R = (g) => {
    g != null && g.defaultPrevented || j || v || (Y(s), o == null || o(s));
  }, N = h.useCallback(() => {
    const g = w.trim();
    if (g === "" || g.length === 1) {
      C(!0);
      return;
    }
    g !== e && !k && n(s, g), I(!1), D(!1), C(!1);
  }, [w, e, k, n, s]), E = h.useCallback(
    (g) => {
      if (z.current && !z.current.contains(g.target)) {
        const H = w.trim();
        if (H === "" || H.length === 1) {
          I(!1), S(e || "Sem título"), D(!1), C(!1);
          return;
        }
        N();
      }
    },
    [N, w, e]
  ), U = h.useCallback(
    (g) => {
      g.key === "Enter" && N(), g.key === "Tab" && g.preventDefault(), g.key === "Escape" && (I(!1), S(e || "Sem título"), D(!1), C(!1), g.stopPropagation());
    },
    [N, e]
  ), $ = () => {
    c(s), f(!1);
  }, G = h.useMemo(() => {
    const g = [
      {
        label: a ? u("home.thread.button.unpin") : u("home.thread.button.pin"),
        icon: a ? /* @__PURE__ */ t.jsx(Ct, { className: "size-4", "aria-hidden": !0 }) : /* @__PURE__ */ t.jsx(we, { className: "size-4", "aria-hidden": !0 }),
        onSelect: () => i(s, !a),
        disabled: l
      }
    ];
    return x && g.push({
      label: u("home.thread.button.rename"),
      icon: /* @__PURE__ */ t.jsx(kt, { className: "size-4", "aria-hidden": !0 }),
      onSelect: () => I(!0)
    }), b && g.push({
      label: /* @__PURE__ */ t.jsx("span", { className: "text-destructive", children: u("common.button.delete") }),
      icon: /* @__PURE__ */ t.jsx(vt, { className: "size-4 text-destructive", "aria-hidden": !0 }),
      onSelect: () => f(!0)
    }), g;
  }, [b, x, s, a, i, l]);
  return h.useEffect(() => (v ? document.addEventListener("mousedown", E) : document.removeEventListener("mousedown", E), () => {
    document.removeEventListener("mousedown", E);
  }), [v, E]), /* @__PURE__ */ t.jsxs("div", { className: d(V()), children: [
    v ? /* @__PURE__ */ t.jsx(
      tt,
      {
        autoFocus: !0,
        value: w,
        ref: z,
        className: d(F(), {
          "focus-visible:ring-red-500": A
        }),
        onChange: (g) => {
          const H = g.target.value;
          S(H);
          const T = H.trim();
          T === "" || T.length === 1 ? C(!0) : C(!1);
        },
        onKeyDown: U
      }
    ) : /* @__PURE__ */ t.jsxs(
      O,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: R,
        className: d(Q()),
        children: [
          /* @__PURE__ */ t.jsxs("span", { className: "flex-1 min-w-0 flex items-center gap-2", children: [
            a ? /* @__PURE__ */ t.jsx(we, { className: "size-4", "aria-hidden": !0 }) : null,
            /* @__PURE__ */ t.jsx("span", { className: "flex-1 min-w-0 truncate", children: e || u("common.fallback.noTitle") })
          ] }),
          !v && (y && r ? /* @__PURE__ */ t.jsx(
            st,
            {
              size: "sm",
              "aria-label": u("common.loading", {
                defaultValue: "Carregando..."
              }),
              degree: "normal"
            }
          ) : /* @__PURE__ */ t.jsx(
            at,
            {
              trigger: /* @__PURE__ */ t.jsx(
                xt,
                {
                  className: d(M(), "size-4"),
                  "aria-label": u("home.titles.actions"),
                  "data-testid": "conversation-highlight-menu-button",
                  onClick: (g) => {
                    g.preventDefault(), g.stopPropagation();
                  }
                }
              ),
              items: G,
              align: "start",
              onOpenChange: D
            }
          ))
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      us,
      {
        open: _,
        onOpenChange: f,
        children: /* @__PURE__ */ t.jsxs(ms, { showCloseButton: !1, children: [
          /* @__PURE__ */ t.jsxs(nt, { children: [
            /* @__PURE__ */ t.jsx(hs, { children: u("home.thread.dialog.delete.title") }),
            /* @__PURE__ */ t.jsx(fs, { children: u("home.thread.dialog.delete.description") })
          ] }),
          /* @__PURE__ */ t.jsxs(rt, { className: "flex flex-row justify-end", children: [
            /* @__PURE__ */ t.jsx(
              O,
              {
                type: "button",
                variant: "secondary",
                onClick: () => f(!1),
                children: u("common.button.cancel")
              }
            ),
            /* @__PURE__ */ t.jsx(
              O,
              {
                type: "button",
                variant: "destructive",
                loading: m,
                onClick: $,
                children: m ? u("common.button.deleting") : u("common.button.delete")
              }
            )
          ] })
        ] })
      }
    )
  ] });
};
Le.displayName = "ConversationHighlight";
const ps = W({
  slots: {
    containerStyle: "flex flex-col gap-0.5 w-full",
    titleStyle: "text-neutral-1 text-xs pl-[10px] mt-8"
  }
}), xs = (s) => s.reduce(
  (e, a) => {
    const n = typeof a.createdAt == "string" ? Me(a.createdAt) : a.createdAt, r = Ce(n, "yyyy-MM-dd");
    return e[r] || (e[r] = []), e[r].push(a), e;
  },
  {}
), bs = (s) => s.sort((e, a) => new Date(a).getTime() - new Date(e).getTime()), ys = (s) => s.sort(
  (e, a) => new Date(a.createdAt).getTime() - new Date(e.createdAt).getTime()
), vs = (s) => Ce(Me(s), "dd/MM/yy"), he = ({
  items: s,
  updateThreadTitle: e,
  onDeleteThread: a,
  onlyFavorites: n,
  currentThreadId: r,
  onSelectThread: i,
  onToggleFavorite: c = () => {
  },
  deletingThread: o,
  togglingThread: m,
  canRenameThread: l = !0,
  canDeleteThread: x = !0
}) => {
  const { containerStyle: b, titleStyle: y } = ps(), j = n ? s == null ? void 0 : s.filter((w) => w.isFavorite) : s == null ? void 0 : s.filter((w) => !w.isFavorite), D = xs(j || []), v = bs(Object.keys(D)), I = (w, S) => {
    if (!w.length) return null;
    const _ = ys(w), f = vs(S);
    return /* @__PURE__ */ t.jsxs(ot.Fragment, { children: [
      !n && /* @__PURE__ */ t.jsx("div", { className: y(), children: f }),
      _.map((A) => /* @__PURE__ */ t.jsx(
        Le,
        {
          updateThreadTitle: e,
          onDeleteThread: a,
          onSelectThread: i,
          onToggleFavorite: c,
          isCurrentThread: A.id === r,
          deletingThread: o,
          togglingThread: m,
          canRenameThread: l,
          canDeleteThread: x,
          ...A
        },
        A.id
      ))
    ] }, S);
  };
  return /* @__PURE__ */ t.jsx("div", { className: b(), children: v.map((w) => I(D[w], w)) });
};
he.displayName = "ConversationList";
const _e = W({
  slots: {
    sidebar: "flex min-h-0 flex-1 flex-col overflow-hidden bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out h-full",
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
function ws() {
  const { sidebar: s, header: e } = _e({ open: !0 });
  return /* @__PURE__ */ t.jsxs("aside", { className: s(), children: [
    /* @__PURE__ */ t.jsx("header", { className: e(), children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3 px-4 py-3", children: [
      /* @__PURE__ */ t.jsx(B, { className: "h-8 w-8 rounded-full" }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-1 flex-1", children: [
        /* @__PURE__ */ t.jsx(B, { className: "h-4 w-24 rounded-full" }),
        /* @__PURE__ */ t.jsx(B, { className: "h-3 w-16 rounded-full" })
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "px-3 pt-3 pb-4 space-y-3", children: [
      /* @__PURE__ */ t.jsx(B, { className: "h-8 w-full rounded-md" }),
      /* @__PURE__ */ t.jsx(B, { className: "h-8 w-full rounded-md" })
    ] })
  ] });
}
const Ns = ({
  open: s,
  defaultOpen: e = !0,
  onOpenChange: a,
  headerAdornment: n,
  headerAction: r,
  items: i,
  children: c,
  showToggleButtons: o,
  isLoading: m
}) => {
  const [l, x] = h.useState(e), b = typeof s == "boolean" && !!a, y = b ? s : l, {
    sidebar: j,
    header: D,
    menuItem: v,
    menuItemButton: I,
    menuItemText: w,
    toggleButton: S,
    contentFrame: _
  } = _e({ open: y });
  if (m)
    return /* @__PURE__ */ t.jsx(ws, {});
  const f = "w-0 -translate-x-full opacity-0 pointer-events-none border-r-0", A = typeof o == "boolean" ? o : !i, C = () => {
    b ? a == null || a(!y) : x((F) => !F);
  }, z = () => A ? /* @__PURE__ */ t.jsx(it, { content: u("home.sidebar.close"), side: "right", children: /* @__PURE__ */ t.jsx("span", { className: "inline-flex rounded-lg transition-colors hover:bg-background", children: /* @__PURE__ */ t.jsx(
    O,
    {
      type: "button",
      variant: "ghost",
      size: "icon",
      className: d(S(), "cursor-w-resize"),
      "data-testid": "sidebar-toggle-button-internal",
      onClick: C,
      icon: /* @__PURE__ */ t.jsx(It, { "aria-label": u("home.sidebar.close") }),
      "aria-label": u("home.sidebar.close")
    }
  ) }) }) : null, V = () => n ? typeof n == "string" ? /* @__PURE__ */ t.jsx("h1", { children: n }) : n : null, Q = () => !y || !r ? null : typeof r == "string" ? /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: r }) : r, M = (F) => !F || !y ? null : /* @__PURE__ */ t.jsx("nav", { className: "p-5", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-4", children: F.map((k, Y) => {
    var R;
    return /* @__PURE__ */ t.jsxs("div", { children: [
      k.header && /* @__PURE__ */ t.jsx("h2", { className: "text-sidebar-foreground font-semibold text-sm mb-2 ml-2", children: k.header }),
      /* @__PURE__ */ t.jsx("ul", { className: "space-y-1", children: k.items.map((N) => {
        var E;
        return /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsx("div", { className: d(v({ isActive: N.active })), children: typeof N.label == "string" ? /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            onClick: N.onNavItemClick,
            onKeyUp: (U) => {
              var $;
              (U.key === "Enter" || U.key === " ") && (($ = N.onNavItemClick) == null || $.call(N));
            },
            className: d(
              I({ isActive: N.active })
            ),
            children: /* @__PURE__ */ t.jsx("span", { className: d(w()), children: N.label })
          }
        ) : N.label }) }, (E = N.label) == null ? void 0 : E.toString());
      }) })
    ] }, `group-${Y}-${(R = k == null ? void 0 : k.header) == null ? void 0 : R.toString()}`);
  }) }) });
  return /* @__PURE__ */ t.jsxs(
    "aside",
    {
      className: d(
        j(),
        "transform-gpu transition-[width,transform,opacity] duration-300 ease-in-out",
        !y && f
      ),
      "aria-hidden": !y,
      children: [
        /* @__PURE__ */ t.jsx("header", { className: d(D()), children: y ? /* @__PURE__ */ t.jsxs("div", { className: "relative flex items-center justify-between w-full", children: [
          V(),
          z()
        ] }) : null }),
        y ? Q() : null,
        y ? M(i) : null,
        y ? /* @__PURE__ */ t.jsx("div", { className: _(), children: c }) : null
      ]
    }
  );
}, js = le`
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
`, Ts = async (s) => (await ce.request(js, s)).deleteThread, Is = () => {
  const s = fe(), e = ke(), a = te(), { assistantProperties: n } = se(), r = Se(), { selectThread: i } = ee();
  return pe({
    mutationFn: (c) => {
      const o = n == null ? void 0 : n.id;
      if (!a || !o)
        throw new Error(u("common.validation.missingParameters"));
      return Ts({ token: a, threadId: c, assistantId: o });
    },
    onMutate: async (c) => {
      const m = ["threads", n == null ? void 0 : n.id];
      await s.cancelQueries({ queryKey: m });
      const l = s.getQueryData(m);
      return s.setQueryData(
        m,
        (x) => {
          if (!x) return;
          const b = x.pages.map((y) => ({
            ...y,
            page: y.page.filter((j) => j.id !== c)
          }));
          return {
            ...x,
            pages: b
          };
        }
      ), { previousThreads: l };
    },
    onError: (c, o, m) => {
      const l = n == null ? void 0 : n.id;
      m != null && m.previousThreads && s.setQueryData(
        ["threads", l],
        m.previousThreads
      ), ie.error(u("home.toast.error.delete"), { duration: 2e3 });
    },
    onSuccess: (c, o) => {
      c.success && r === o ? (i(null), e(`/${n == null ? void 0 : n.id}`)) : c.success || ie.error(c.message || u("home.toast.error.delete"), {
        duration: 2e3
      });
    },
    onSettled: () => {
      const c = n == null ? void 0 : n.id;
      s.invalidateQueries({ queryKey: ["threads", c] });
    }
  });
}, Ss = le`
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
`, ks = async (s) => (await ce.request(Ss, s)).toggleThreadFavorite, Ds = () => {
  const s = fe(), e = te(), { assistantProperties: a } = se();
  return pe({
    mutationFn: (n) => {
      const r = a == null ? void 0 : a.id;
      if (!e || !r)
        throw new Error(u("common.validation.missingParameters"));
      return ks({ ...n, token: e, assistantId: r });
    },
    onMutate: async ({ threadId: n, isFavorite: r }) => {
      const c = ["threads", a == null ? void 0 : a.id];
      await s.cancelQueries({ queryKey: c });
      const o = s.getQueryData(c);
      return s.setQueryData(
        c,
        (m) => {
          if (!m) return;
          const l = m.pages.map((x) => ({
            ...x,
            page: x.page.map(
              (b) => b.id === n ? { ...b, isFavorite: r } : b
            )
          }));
          return {
            ...m,
            pages: l
          };
        }
      ), { previousThreads: o };
    },
    onError: (n, r, i) => {
      const c = a == null ? void 0 : a.id;
      i != null && i.previousThreads && s.setQueryData(
        ["threads", c],
        i.previousThreads
      ), ie.error(u("home.toast.error.pin"), { duration: 2e3 });
    },
    onSettled: () => {
      const n = a == null ? void 0 : a.id;
      s.invalidateQueries({ queryKey: ["threads", n] });
    }
  });
};
function Cs(s, e) {
  const a = h.useRef(0);
  h.useEffect(() => {
    const n = () => {
      const i = s.current;
      if (!i) return;
      const c = i.scrollTop, o = c > a.current;
      a.current = c, o && i.scrollHeight - c <= i.clientHeight + 1 && e();
    }, r = s.current;
    return r && r.addEventListener("scroll", n), () => {
      r && r.removeEventListener("scroll", n);
    };
  }, [s, e]);
}
const Es = W({
  slots: {
    sidebarContent: "flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden custom-scroll w-full",
    logoContainer: "flex items-center gap-2 h-8",
    logo: "h-8 w-8 object-cover rounded-lg"
  }
});
function Ls() {
  const [s, e] = h.useState(!1), [a, n] = h.useState(!0), [r, i] = h.useState(!1), c = bt(), o = Es(), { currentThread: m } = Qt(), { data: l, isLoading: x } = lt(), { selectThread: b, clearMessages: y } = ee(), { assistantId: j } = ct(), [D, v] = dt(), I = Ee(), { setSelectedAssistantId: w } = Ae();
  h.useEffect(() => {
    var J;
    if (I.length === 0) return;
    const L = (J = (j ? I.find((ae) => ae.id === j) : void 0) ?? I[0]) == null ? void 0 : J.id;
    L && ft.getState().selectedAssistantId !== L && w(L);
  }, [I, j, w]);
  const { data: S, fetchNextPage: _, hasNextPage: f, isFetchingNextPage: A } = ge(), C = h.useMemo(() => {
    var T;
    return ((T = S == null ? void 0 : S.pages) == null ? void 0 : T.flatMap((L) => L.page)) || [];
  }, [S]), z = h.useMemo(
    () => C.filter((T) => T.isFavorite),
    [C]
  ), { mutate: V, isPending: Q } = Ds(), { mutate: M } = $e(), { mutate: F, isPending: k } = Is(), Y = h.useCallback(
    (T, L) => {
      V({ threadId: T, isFavorite: L });
    },
    [V]
  ), R = h.useCallback(
    (T) => {
      F(T);
    },
    [F]
  ), N = h.useCallback(
    (T, L) => {
      M({
        threadId: T,
        title: L
      });
    },
    [M]
  ), E = h.useCallback(() => {
    c.isFullscreen || e(!1);
  }, [c.isFullscreen]), U = h.useCallback(() => {
    if (!j) return;
    b(null), y();
    const T = new URLSearchParams(D);
    T.delete("lastThreadId"), v(T, { replace: !0 }), E();
  }, [
    y,
    E,
    j,
    D,
    b,
    v
  ]), $ = () => /* @__PURE__ */ t.jsxs("div", { className: d(o.logoContainer()), children: [
    /* @__PURE__ */ t.jsx(
      "img",
      {
        src: (l == null ? void 0 : l.logoUri) || "",
        alt: "Logo",
        className: d(o.logo())
      }
    ),
    (l == null ? void 0 : l.name) && /* @__PURE__ */ t.jsx("span", { className: "text-sm font-semibold text-foreground", children: l.name })
  ] }), G = h.useRef(null);
  Cs(G, () => {
    !A && f && _();
  });
  const g = () => /* @__PURE__ */ t.jsxs("div", { className: d(o.sidebarContent()), ref: G, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "space-y-2 w-full p-2", children: [
      /* @__PURE__ */ t.jsx(
        O,
        {
          variant: "ghost",
          size: "sm",
          className: "w-full flex items-center gap-2 h-8 rounded-md p-2 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground",
          onClick: U,
          "data-testid": "create-thread-button",
          "aria-label": u("home.newChat"),
          icon: /* @__PURE__ */ t.jsx(yt, { className: "size-4", "aria-hidden": !0 }),
          children: /* @__PURE__ */ t.jsx("span", { className: "flex items-center text-sm font-normal gap-2 w-full", children: u("home.newChat") })
        }
      ),
      /* @__PURE__ */ t.jsx(
        O,
        {
          variant: "ghost",
          size: "sm",
          className: "w-full flex items-center gap-2 h-8 rounded-md p-2 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground",
          type: "button",
          onClick: () => i(!0),
          disabled: !j,
          "data-testid": "global-search-button",
          "aria-label": u("home.search"),
          icon: /* @__PURE__ */ t.jsx(mt, { className: "size-4", "aria-hidden": !0 }),
          children: /* @__PURE__ */ t.jsx("span", { className: "flex items-center text-sm font-normal gap-2 w-full", children: u("home.search") })
        }
      ),
      /* @__PURE__ */ t.jsxs(
        O,
        {
          variant: "ghost",
          size: "sm",
          type: "button",
          className: "w-full flex items-center justify-between h-8 rounded-md p-2 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground",
          onClick: () => n((T) => !T),
          "aria-label": u("home.assistants"),
          "data-testid": "assistants-toggle",
          children: [
            /* @__PURE__ */ t.jsxs("span", { className: "flex items-center text-sm font-normal gap-2", children: [
              /* @__PURE__ */ t.jsx(Nt, { className: "size-4", "aria-hidden": !0 }),
              /* @__PURE__ */ t.jsx("span", { className: "truncate", children: u("home.assistants") })
            ] }),
            /* @__PURE__ */ t.jsx(
              ht,
              {
                className: d(
                  "size-4 transition-transform duration-200",
                  a && "rotate-90"
                ),
                "aria-hidden": !0
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: d(
            "overflow-hidden transition-all duration-200",
            a ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          ),
          children: /* @__PURE__ */ t.jsx("div", { className: "border-l border-sidebar-border ml-4.5 pl-2.5 py-1.5", children: /* @__PURE__ */ t.jsx(Gt, { onAssistantSelect: E }) })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-2", children: [
      z.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "p-2", children: /* @__PURE__ */ t.jsx(
        he,
        {
          onlyFavorites: !0,
          items: z,
          currentThreadId: m == null ? void 0 : m.id,
          onSelectThread: E,
          onDeleteThread: R,
          onToggleFavorite: Y,
          updateThreadTitle: N,
          deletingThread: k,
          togglingThread: Q,
          canRenameThread: !0,
          canDeleteThread: !0
        }
      ) }),
      /* @__PURE__ */ t.jsx("div", { className: "p-2", children: /* @__PURE__ */ t.jsx(
        he,
        {
          items: C,
          currentThreadId: m == null ? void 0 : m.id,
          onSelectThread: E,
          onDeleteThread: R,
          onToggleFavorite: Y,
          updateThreadTitle: N,
          deletingThread: k,
          togglingThread: Q,
          canRenameThread: !0,
          canDeleteThread: !0
        }
      ) })
    ] })
  ] }), H = x;
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-1 min-h-0 h-full relative overflow-hidden", children: [
    /* @__PURE__ */ t.jsx("div", { className: "flex h-full min-h-0 shrink-0 flex-col", children: /* @__PURE__ */ t.jsx(
      Ns,
      {
        open: s,
        onOpenChange: e,
        headerAdornment: l != null && l.logoUri ? $() : "",
        isLoading: H,
        children: g()
      }
    ) }),
    /* @__PURE__ */ t.jsx(
      os,
      {
        open: r,
        onOpenChange: i,
        onSelectThread: E
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col h-full overflow-hidden", children: /* @__PURE__ */ t.jsx(ut, { context: { isSidebarOpen: s, setIsSidebarOpen: e } }) })
  ] });
}
export {
  Ls as default
};
