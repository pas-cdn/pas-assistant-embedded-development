import { aM as Y, aN as te, aO as re, aP as ne, aQ as Ae, aR as Re, aS as It, aT as _t, aU as kt, aV as At, aW as we, aX as K, aY as b, aZ as de, a_ as xe, a$ as W, b0 as Te, b1 as Ke, b2 as Ne, b3 as Rt, b4 as wt, b5 as Tt, b6 as Kt, b7 as ue, b8 as Nt, b9 as jt, ba as Dt, bb as Mt } from "./mermaid-VLURNSYL-KtsFwY3v.js";
import { bc as An, bd as Rn } from "./mermaid-VLURNSYL-KtsFwY3v.js";
import { j as v, a9 as je, r as s, aa as Ot } from "./embed-entry-DNbXY835.js";
var De = "https://api.cloud.copilotkit.ai", $t = "v1", Lt = `${De}/copilotkit/${$t}`, Me = "X-CopilotCloud-Public-Api-Key", Pt = 1e3 * 60 * 5, Ut = class {
  constructor() {
    this.activeKey = null, this.intervalId = null, this.instanceCount = 0, this.lastResponse = null;
  }
  start(e, n) {
    return Y(this, null, function* () {
      if (this.instanceCount++, this.activeKey === e)
        return;
      this.intervalId && clearInterval(this.intervalId);
      const r = () => Y(this, null, function* () {
        try {
          const t = yield fetch(`${De}/ciu`, {
            method: "GET",
            headers: {
              [Me]: e
            }
          }).then((c) => c.json());
          return this.lastResponse = t, n?.(t), t;
        } catch {
          return null;
        }
      }), o = yield r();
      return this.intervalId = setInterval(r, Pt), this.activeKey = e, o;
    });
  }
  getLastResponse() {
    return this.lastResponse;
  }
  stop() {
    this.instanceCount--, this.instanceCount === 0 && this.intervalId && (clearInterval(this.intervalId), this.intervalId = null, this.activeKey = null, this.lastResponse = null);
  }
};
function Oe({
  severity: e = te.CRITICAL,
  message: n = "",
  onClose: r,
  actions: o
}) {
  if (!n || !e)
    return null;
  const c = {
    [te.INFO]: {
      bg: "#f8fafc",
      border: "#e2e8f0",
      text: "#475569",
      accent: "#3b82f6"
    },
    [te.WARNING]: {
      bg: "#fffbeb",
      border: "#fbbf24",
      text: "#92400e",
      accent: "#f59e0b"
    },
    [te.CRITICAL]: {
      bg: "#fef2f2",
      border: "#fecaca",
      text: "#dc2626",
      accent: "#ef4444"
    }
  }[e];
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("style", { children: `
          @keyframes slideUp {
            from { opacity: 0; transform: translateX(-50%) translateY(8px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
          }
          
          .usage-banner {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            width: min(600px, calc(100vw - 32px));
            z-index: 10000;
            animation: slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          .banner-content {
            background: linear-gradient(135deg, ${c.bg} 0%, ${c.bg}f5 100%);
            border: 1px solid ${c.border};
            border-radius: 12px;
            padding: 18px 20px;
            box-shadow: 
              0 4px 24px rgba(0, 0, 0, 0.08),
              0 2px 8px rgba(0, 0, 0, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            gap: 16px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            backdrop-filter: blur(12px);
            position: relative;
            overflow: hidden;
          }
          
          .banner-content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, ${c.accent}40, transparent);
          }
          
          .banner-message {
            color: ${c.text};
            font-size: 14px;
            line-height: 1.5;
            font-weight: 500;
            flex: 1;
            letter-spacing: -0.01em;
          }
          
          .close-btn {
            background: rgba(0, 0, 0, 0.05);
            border: none;
            color: ${c.text};
            cursor: pointer;
            padding: 0;
            border-radius: 6px;
            opacity: 0.6;
            transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
            font-size: 14px;
            line-height: 1;
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .close-btn:hover {
            opacity: 1;
            background: rgba(0, 0, 0, 0.08);
            transform: scale(1.05);
          }
          
          .btn-primary {
            background: linear-gradient(135deg, ${c.accent} 0%, ${c.accent}e6 100%);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 18px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
            font-family: inherit;
            flex-shrink: 0;
            box-shadow: 
              0 2px 8px ${c.accent}30,
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
            letter-spacing: -0.01em;
          }
          
          .btn-primary:hover {
            transform: translateY(-1px) scale(1.02);
            box-shadow: 
              0 4px 12px ${c.accent}40,
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
          }
          
          .btn-primary:active {
            transform: translateY(0) scale(0.98);
            transition: all 0.08s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          @media (max-width: 640px) {
            .usage-banner {
              width: calc(100vw - 24px);
            }
            
            .banner-content {
              padding: 16px;
              gap: 12px;
            }
            
            .banner-message {
              font-size: 13px;
              line-height: 1.45;
            }
            
            .btn-primary {
              padding: 8px 14px;
              font-size: 12px;
            }
            
            .close-btn {
              width: 22px;
              height: 22px;
              font-size: 12px;
            }
          }
        ` }),
    /* @__PURE__ */ v.jsx("div", { className: "usage-banner", children: /* @__PURE__ */ v.jsxs("div", { className: "banner-content", children: [
      /* @__PURE__ */ v.jsx("div", { className: "banner-message", children: n }),
      o?.primary && /* @__PURE__ */ v.jsx("button", { className: "btn-primary", onClick: o.primary.onClick, children: o.primary.label }),
      r && /* @__PURE__ */ v.jsx("button", { className: "close-btn", onClick: r, title: "Close", children: "×" })
    ] }) })
  ] });
}
var $e = (e) => {
  switch (e.code) {
    case re.MISSING_PUBLIC_API_KEY_ERROR:
      return {
        primary: {
          label: "Show me how",
          onClick: () => window.open(
            "https://docs.copilotkit.ai/premium#how-do-i-get-access-to-premium-features",
            "_blank",
            "noopener,noreferrer"
          )
        }
      };
    case re.UPGRADE_REQUIRED_ERROR:
      return {
        primary: {
          label: "Upgrade",
          onClick: () => window.open("https://cloud.copilotkit.ai", "_blank", "noopener,noreferrer")
        }
      };
    default:
      return;
  }
}, ye = new Ut(), zt = class extends je.Component {
  constructor(e) {
    super(e), this.state = {
      hasError: !1
    };
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0, error: e };
  }
  componentDidMount() {
    this.props.publicApiKey && ye.start(this.props.publicApiKey, (e) => {
      this.setState((n) => {
        var r;
        return e?.severity !== ((r = n.status) == null ? void 0 : r.severity) ? { status: e ?? void 0 } : null;
      });
    });
  }
  componentWillUnmount() {
    ye.stop();
  }
  componentDidCatch(e, n) {
    console.error("CopilotKit Error:", e, n);
  }
  render() {
    var e, n, r, o;
    if (this.state.hasError) {
      if (this.state.error instanceof ne)
        return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          this.props.children,
          this.props.showUsageBanner && /* @__PURE__ */ v.jsx(
            Oe,
            {
              severity: (n = (e = this.state.status) == null ? void 0 : e.severity) != null ? n : this.state.error.severity,
              message: (o = (r = this.state.status) == null ? void 0 : r.message) != null ? o : this.state.error.message,
              actions: $e(this.state.error)
            }
          )
        ] });
      throw this.state.error;
    }
    return this.props.children;
  }
};
function Bt() {
  return typeof window > "u" ? !1 : window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "0.0.0.0";
}
function Z(e) {
  return e !== void 0 ? e : Bt();
}
var Ft = {
  messages: [],
  setMessages: () => [],
  // suggestions state
  suggestions: [],
  setSuggestions: () => []
}, Ht = je.createContext(Ft), Le = s.createContext(null);
function Wt() {
  const e = s.useContext(Le);
  if (!e)
    throw new Error("useMessagesTap must be used inside <MessagesTapProvider>");
  return e;
}
function Vt({ children: e }) {
  const n = s.useRef([]), r = s.useRef({
    getMessagesFromTap: () => n.current,
    updateTapMessages: (o) => {
      n.current = o;
    }
  });
  return /* @__PURE__ */ v.jsx(Le.Provider, { value: r.current, children: e });
}
function Qt({ children: e }) {
  const [n, r] = s.useState([]);
  s.useRef(void 0), s.useRef(void 0), s.useRef(void 0);
  const { updateTapMessages: o } = Wt(), { threadId: t, agentSession: c, showDevConsole: l, onError: i, copilotApiConfig: p } = Ae(), { setBannerError: f } = Re(), g = s.useCallback(
    (y, I) => Y(this, null, function* () {
      if (!(!i || !p.publicApiKey))
        try {
          const m = {
            type: "error",
            timestamp: Date.now(),
            context: {
              source: "ui",
              request: {
                operation: "loadAgentState",
                url: p.chatApiEndpoint,
                startTime: Date.now()
              },
              technical: {
                environment: "browser",
                userAgent: typeof navigator < "u" ? navigator.userAgent : void 0,
                stackTrace: I instanceof Error ? I.stack : void 0
              }
            },
            error: y
          };
          yield i(m);
        } catch (m) {
          console.error("Error in CopilotMessages onError handler:", m);
        }
    }),
    [i, p.publicApiKey, p.chatApiEndpoint]
  ), x = (y) => {
    const I = y.extensions, m = I?.originalError;
    if (m?.stack) {
      if (m.stack.includes("CopilotApiDiscoveryError"))
        return new _t({ message: m.message });
      if (m.stack.includes("CopilotKitRemoteEndpointDiscoveryError"))
        return new kt({ message: m.message });
      if (m.stack.includes("CopilotKitAgentDiscoveryError"))
        return new At({
          agentName: "",
          availableAgents: []
        });
    }
    const _ = m?.message || y.message, h = I?.code;
    return h ? new ne({ message: _, code: h }) : null;
  };
  s.useCallback(
    (y) => {
      var I;
      if ((I = y.graphQLErrors) != null && I.length) {
        const m = y.graphQLErrors, _ = (h) => {
          const j = h.extensions, R = j?.visibility;
          if (!Z(l)) {
            console.error("CopilotKit Error (hidden in production):", h.message);
            return;
          }
          if (R === It.SILENT) {
            console.error("CopilotKit Silent Error:", h.message);
            return;
          }
          const L = x(h);
          if (L)
            f(L), g(L, h);
          else {
            const D = new ne({
              message: h.message,
              code: re.UNKNOWN
            });
            f(D), g(D, h);
          }
        };
        m.forEach(_);
      } else if (!Z(l))
        console.error("CopilotKit Error (hidden in production):", y);
      else {
        const _ = new ne({
          message: y?.message || String(y),
          code: re.UNKNOWN
        });
        f(_), g(_, y);
      }
    },
    [f, l, g]
  ), s.useEffect(() => {
    o(n);
  }, [n, o]);
  const S = s.useMemo(() => e, [e]), [k, C] = s.useState([]);
  return /* @__PURE__ */ v.jsx(
    Ht.Provider,
    {
      value: {
        messages: n,
        setMessages: r,
        suggestions: k,
        setSuggestions: C
      },
      children: S
    }
  );
}
var Pe = (e, n) => e.reduce((r, o) => {
  if (o.id !== n) {
    const t = K(b({}, o), { children: Pe(o.children, n) });
    r.push(t);
  }
  return r;
}, []), Ue = (e, n, r) => r ? e.map((o) => o.id === r ? K(b({}, o), { children: [...o.children, n] }) : o.children.length ? K(b({}, o), { children: Ue(o.children, n, r) }) : o) : [...e, n], ze = (e, n) => n === 0 ? (e + 1).toString() : n === 1 ? String.fromCharCode(65 + e) : n === 2 ? String.fromCharCode(97 + e) : "-", Be = (e, n = "", r = 0) => {
  const o = " ".repeat(3).repeat(r), t = n.length + o.length, c = " ".repeat(t), l = e.value.split(`
`), i = `${o}${n}${l[0]}`, p = l.slice(1).map((x) => `${c}${x}`).join(`
`);
  let f = `${i}
`;
  p && (f += `${p}
`);
  const g = " ".repeat(n.length);
  return e.children.forEach(
    (x, S) => f += Be(
      x,
      `${g}${ze(S, r + 1)}. `,
      r + 1
    )
  ), f;
};
function Yt(e, n) {
  switch (n.type) {
    case "ADD_NODE": {
      const { value: r, parentId: o, id: t } = n, c = {
        id: t,
        value: r,
        children: [],
        categories: new Set(n.categories)
      };
      try {
        return Ue(e, c, o);
      } catch (l) {
        return console.error(`Error while adding node with id ${t}: ${l}`), e;
      }
    }
    case "REMOVE_NODE":
      return Pe(e, n.id);
    default:
      return e;
  }
}
var Xt = () => {
  const [e, n] = s.useReducer(Yt, []), r = s.useCallback(
    (l, i, p) => {
      const f = we();
      return n({
        type: "ADD_NODE",
        value: l,
        parentId: p,
        id: f,
        categories: i
      }), f;
    },
    []
  ), o = s.useCallback((l) => {
    n({ type: "REMOVE_NODE", id: l });
  }, []), t = s.useCallback(() => e, [e]), c = s.useCallback(
    (l) => {
      const i = new Set(l);
      let p = "";
      return e.forEach((f, g) => {
        Jt(i, f.categories) && (g !== 0 && (p += `
`), p += Be(f, `${ze(g, 0)}. `));
      }), p;
    },
    [e]
  );
  return { tree: e, addElement: r, printTree: c, removeElement: o, getAllElements: t };
}, Gt = Xt;
function Jt(e, n) {
  const [r, o] = e.size <= n.size ? [e, n] : [n, e];
  for (let t of r)
    if (o.has(t))
      return !0;
  return !1;
}
var Zt = () => {
  const [e, n] = s.useReducer(
    en,
    /* @__PURE__ */ new Map()
  ), r = s.useCallback((c, l) => {
    const i = we();
    return n({
      type: "ADD_ELEMENT",
      value: c,
      id: i,
      categories: l
    }), i;
  }, []), o = s.useCallback((c) => {
    n({ type: "REMOVE_ELEMENT", id: c });
  }, []), t = s.useCallback(
    (c) => {
      const l = new Set(c), i = [];
      return e.forEach((p) => {
        tn(l, p.categories) && i.push(p.value);
      }), i;
    },
    [e]
  );
  return { addElement: r, removeElement: o, allElements: t };
}, qt = Zt;
function en(e, n) {
  switch (n.type) {
    case "ADD_ELEMENT": {
      const { value: r, id: o, categories: t } = n, c = {
        id: o,
        value: r,
        categories: new Set(t)
      }, l = new Map(e);
      return l.set(o, c), l;
    }
    case "REMOVE_ELEMENT": {
      const r = new Map(e);
      return r.delete(n.id), r;
    }
    default:
      return e;
  }
}
function tn(e, n) {
  const [r, o] = e.size <= n.size ? [e, n] : [n, e];
  for (let t of r)
    if (o.has(t))
      return !0;
  return !1;
}
function Ie(e) {
  if (!e)
    return {};
  const n = e, { messages: r, tools: o, copilotkit: t } = n;
  return W(n, ["messages", "tools", "copilotkit"]);
}
function pe(e, n) {
  if (e && !n || !e && n)
    return !1;
  const r = e, { messages: o, tools: t, copilotkit: c } = r, l = W(r, ["messages", "tools", "copilotkit"]), i = n, {
    messages: p,
    tools: f,
    copilotkit: g
  } = i, x = W(i, [
    "messages",
    "tools",
    "copilotkit"
  ]);
  return JSON.stringify(l) === JSON.stringify(x);
}
function J(e) {
  return !!e && e.startsWith("coagent-state-render-");
}
function _e(e) {
  return e === "coagent-state-render";
}
function Fe(e) {
  if (!e || typeof e != "object")
    return { snapshot: e, runId: void 0 };
  const n = "snapshot" in e ? e.snapshot : e, r = "runId" in e ? e.runId : void 0;
  return { snapshot: n, runId: r };
}
function nn({
  existingClaimRunId: e,
  cachedMessageRunId: n,
  runId: r
}) {
  return e || n || r || "pending";
}
function rn({
  claims: e,
  context: n,
  stateSnapshot: r
}) {
  const { messageId: o, stateRenderId: t, runId: c, messageIndex: l } = n, i = e[o];
  if (i) {
    const S = i.stateRenderId === t, k = S && c && (!i.runId || i.runId === "pending");
    return {
      canRender: S,
      action: S ? "existing" : "block",
      updateRunId: k ? c : void 0
    };
  }
  const p = c ?? "pending", f = Object.entries(e).find(
    ([, S]) => {
      var k;
      return S.stateRenderId === t && ((k = S.runId) != null ? k : "pending") === p && xe(Ie(S.stateSnapshot)) === xe(Ie(r));
    }
  ), g = f?.[1], x = f?.[0];
  return g ? l !== void 0 && g.messageIndex !== void 0 && l > g.messageIndex ? {
    canRender: !0,
    action: "override",
    nextClaim: { stateRenderId: t, runId: c, messageIndex: l },
    lockOthers: c === g.runId || J(x)
  } : c && g.runId && c !== g.runId ? {
    canRender: !0,
    action: "override",
    nextClaim: { stateRenderId: t, runId: c, messageIndex: l },
    lockOthers: J(x)
  } : J(x) ? {
    canRender: !0,
    action: "override",
    nextClaim: { stateRenderId: t, runId: c, messageIndex: l },
    lockOthers: !0
  } : r && g.stateSnapshot && !pe(g.stateSnapshot, r) ? {
    canRender: !0,
    action: "override",
    nextClaim: { stateRenderId: t, runId: c }
  } : {
    canRender: !1,
    action: "block"
    /* Block */
  } : c ? {
    canRender: !0,
    action: "create",
    nextClaim: { stateRenderId: t, runId: c, messageIndex: l }
  } : {
    canRender: !1,
    action: "block"
    /* Block */
  };
}
function sn({
  messageId: e,
  messageName: n,
  allowLiveState: r,
  skipLatestCache: o,
  stateRenderId: t,
  effectiveRunId: c,
  stateSnapshotProp: l,
  agentState: i,
  agentMessages: p,
  existingClaim: f,
  caches: g
}) {
  var x, S, k, C, y, I;
  const m = p ? (x = [...p].reverse().find((w) => w.role === "assistant")) == null ? void 0 : x.id : void 0, _ = t !== void 0 ? g.byStateRenderAndRun[`${t}::latest`] : void 0, h = p ? p.findIndex((w) => w.id === e) : -1, j = h >= 0 && p ? (S = p[h]) == null ? void 0 : S.role : void 0;
  let R;
  if (h > 0 && p) {
    for (let w = h - 1; w >= 0; w -= 1)
      if (((k = p[w]) == null ? void 0 : k.role) === "user") {
        R = (C = p[w]) == null ? void 0 : C.id;
        break;
      }
  }
  const $ = l === void 0 && _ !== void 0 && i !== void 0 && pe(_, i), L = (!!r || !m || e === m) && !$, D = l ? de(l, l) : L ? i : void 0, M = !!(D && Object.keys(D).length > 0), P = D !== void 0 && !M && (l !== void 0 || L), V = g.byMessageId[e], B = Fe(V).snapshot, A = t !== void 0 ? `${t}::${c}` : void 0;
  let E = B ?? g.byMessageId[e];
  E === void 0 && A && g.byStateRenderAndRun[A] !== void 0 && (E = g.byStateRenderAndRun[A]), E === void 0 && t && R && g.byStateRenderAndRun[`${t}::pending:${R}`] !== void 0 && (E = g.byStateRenderAndRun[`${t}::pending:${R}`]), E === void 0 && !o && t && j !== "assistant" && (l !== void 0 || i && Object.keys(i).length > 0) && (E = g.byStateRenderAndRun[`${t}::latest`]);
  const U = f?.locked ? (y = f.stateSnapshot) != null ? y : E : M ? D : (I = f?.stateSnapshot) != null ? I : E;
  return { snapshot: D, hasSnapshotKeys: M, cachedSnapshot: E, allowEmptySnapshot: P, snapshotForClaim: U };
}
var Q = "__lastSnapshotsByStateRenderIdAndRun", H = "__lastSnapshotsByMessageId";
function He(e) {
  return e.current;
}
function on(e) {
  var n, r;
  const o = He(e);
  return {
    byStateRenderAndRun: (n = o[Q]) != null ? n : {},
    byMessageId: (r = o[H]) != null ? r : {}
  };
}
function an({
  agentId: e,
  stateRenderId: n,
  message: r,
  messageIndex: o,
  stateSnapshot: t,
  agentState: c,
  agentMessages: l,
  claimsRef: i
}) {
  var p, f, g, x, S, k;
  const C = He(i), y = r.runId, I = (p = C[H]) == null ? void 0 : p[r.id], { runId: m } = Fe(I), _ = (f = i.current[r.id]) == null ? void 0 : f.runId, h = nn({
    existingClaimRunId: _,
    cachedMessageRunId: m,
    runId: y
  });
  if (s.useEffect(() => () => {
    var A, E, U, w;
    const O = i.current[r.id];
    if (O?.stateSnapshot && Object.keys(O.stateSnapshot).length > 0) {
      const X = b({}, (A = C[Q]) != null ? A : {}), se = `${O.stateRenderId}::${(E = O.runId) != null ? E : "pending"}`;
      X[se] = O.stateSnapshot, X[`${O.stateRenderId}::latest`] = O.stateSnapshot, C[Q] = X;
      const q = b({}, (U = C[H]) != null ? U : {});
      q[r.id] = {
        snapshot: O.stateSnapshot,
        runId: (w = O.runId) != null ? w : h
      }, C[H] = q;
    }
    delete i.current[r.id];
  }, [i, h, r.id]), !n)
    return { canRender: !1 };
  const j = on(i), R = i.current[r.id], { snapshot: $, hasSnapshotKeys: L, allowEmptySnapshot: D, snapshotForClaim: M } = sn({
    messageId: r.id,
    messageName: r.name,
    allowLiveState: _e(r.name) || J(r.id),
    skipLatestCache: _e(r.name) || J(r.id),
    stateRenderId: n,
    effectiveRunId: h,
    stateSnapshotProp: t,
    agentState: c,
    agentMessages: l,
    existingClaim: R,
    caches: j
  }), P = rn({
    claims: i.current,
    context: {
      messageId: r.id,
      stateRenderId: n,
      runId: h,
      messageIndex: o
    },
    stateSnapshot: M
  });
  if (P.action === "block")
    return { canRender: !1 };
  if (P.updateRunId && i.current[r.id] && (i.current[r.id].runId = P.updateRunId), P.nextClaim && (i.current[r.id] = P.nextClaim), P.lockOthers && Object.entries(i.current).forEach(([A, E]) => {
    A !== r.id && E.stateRenderId === n && (E.locked = !0);
  }), R && !R.locked && l?.length) {
    const A = l.findIndex((E) => E.id === r.id);
    A >= 0 && A < l.length - 1 && (R.locked = !0);
  }
  const V = i.current[r.id].stateSnapshot, B = t && V !== void 0 && !pe(V, $);
  if ($ && (t || L || D) && (!i.current[r.id].locked || B)) {
    if (!i.current[r.id].locked || B) {
      i.current[r.id].stateSnapshot = $;
      const A = b({}, (g = C[Q]) != null ? g : {}), E = `${n}::${h}`;
      A[E] = $, A[`${n}::latest`] = $, C[Q] = A;
      const U = b({}, (x = C[H]) != null ? x : {});
      U[r.id] = { snapshot: $, runId: h }, C[H] = U, t && (i.current[r.id].locked = !0);
    }
  } else if (M && !i.current[r.id].stateSnapshot) {
    i.current[r.id].stateSnapshot = M;
    const E = b({}, (S = C[Q]) != null ? S : {}), U = `${n}::${h}`;
    E[U] = M, E[`${n}::latest`] = M, C[Q] = E;
    const w = b({}, (k = C[H]) != null ? k : {});
    w[r.id] = { snapshot: M, runId: h }, C[H] = w;
  }
  return { canRender: !0 };
}
var We = s.createContext(
  void 0
);
function cn({ children: e }) {
  const [n, r] = s.useState({}), o = s.useCallback((l, i) => {
    r((p) => K(b({}, p), {
      [l]: i
    }));
  }, []), t = s.useCallback((l) => {
    r((i) => {
      const p = b({}, i);
      return delete p[l], p;
    });
  }, []), c = s.useRef({});
  return /* @__PURE__ */ v.jsx(
    We.Provider,
    {
      value: {
        coAgentStateRenders: n,
        setCoAgentStateRender: o,
        removeCoAgentStateRender: t,
        claimsRef: c
      },
      children: e
    }
  );
}
function ln() {
  const e = s.useContext(We);
  if (!e)
    throw new Error("useCoAgentStateRenders must be used within CoAgentStateRendersProvider");
  return e;
}
function un(e, n) {
  var r;
  const { stateSnapshot: o, message: t } = n, { coAgentStateRenders: c, claimsRef: l } = ln(), { agent: i } = Te({ agentId: e }), [p, f] = s.useState(void 0), [, g] = s.useState(0);
  s.useEffect(() => {
    if (!i)
      return;
    const m = {
      onStateChanged: () => {
        g((h) => h + 1);
      },
      onStepStartedEvent: ({ event: h }) => {
        h.stepName !== p && f(h.stepName);
      },
      onStepFinishedEvent: ({ event: h }) => {
        h.stepName === p && f(void 0);
      }
    }, { unsubscribe: _ } = i.subscribe(m);
    return () => {
      _();
    };
  }, [e, p]);
  const x = s.useCallback(
    (m) => Object.entries(c).find(([_, h]) => {
      if (l.current[m])
        return _ === l.current[m].stateRenderId;
      const j = h.name === e, R = h.nodeName ? h.nodeName === p : !0;
      return j && R;
    }),
    [c, p, e]
  ), S = s.useMemo(() => x(t.id), [x, t.id]), k = S?.[0], C = S?.[1], y = K(b({}, t), {
    runId: (r = n.runId) != null ? r : t.runId
  }), { canRender: I } = an({
    agentId: e,
    stateRenderId: k,
    message: y,
    messageIndex: n.messageIndex,
    stateSnapshot: o,
    agentState: i?.state,
    agentMessages: i?.messages,
    claimsRef: l
  });
  return s.useMemo(() => {
    var m, _;
    if (!C || !k || !I)
      return null;
    if (C.handler && C.handler({
      state: o ? de(o, o) : (m = i?.state) != null ? m : {},
      nodeName: p ?? ""
    }), C.render) {
      const h = i?.isRunning ? "inProgress" : "complete";
      return typeof C.render == "string" ? C.render : C.render({
        status: h,
        // Always use state from claim, to make sure the state does not seem "wiped" for a fraction of a second
        state: (_ = l.current[t.id].stateSnapshot) != null ? _ : {},
        nodeName: p ?? ""
      });
    }
  }, [
    C,
    k,
    i?.state,
    i?.isRunning,
    p,
    t.id,
    o,
    I
  ]);
}
function dn(e) {
  return un(e.agentId, e);
}
var Ve = s.createContext(void 0);
function pn({ children: e, threadId: n }) {
  const [r, o] = s.useState(() => Ke()), t = n ?? r;
  return /* @__PURE__ */ v.jsx(
    Ve.Provider,
    {
      value: {
        threadId: t,
        setThreadId: o
      },
      children: e
    }
  );
}
function hn() {
  const e = s.useContext(Ve);
  if (!e)
    throw new Error("useThreads must be used within ThreadsProvider");
  return e;
}
var fn = (e) => {
  const n = s.useRef([]), r = s.useCallback(
    (o) => ({
      onCustomEvent: ({ event: t }) => {
        t.name === "PredictState" && (n.current = t.value);
      },
      onToolCallArgsEvent: ({ partialToolCallArgs: t, toolCallName: c }) => {
        n.current.forEach((l) => {
          if (l?.tool !== c)
            return;
          const i = typeof t == "string" ? de(t, t) : t;
          o.setState({
            [l.state_key]: i[l.state_key]
          });
        });
      }
    }),
    []
  );
  s.useEffect(() => {
    if (!e)
      return;
    const o = r(e), { unsubscribe: t } = e.subscribe(o);
    return () => {
      t();
    };
  }, [e, r]);
};
function gn() {
  const { copilotkit: e } = Ne(), n = Rt(), r = n?.agentId, { setBannerError: o } = Re(), { agent: t } = Te({ agentId: r });
  return fn(t), s.useEffect(() => {
    const c = {
      onError: ({ error: i }) => {
        o(new wt({ error: i, message: i.message }));
      }
    }, l = e.subscribe(c);
    return () => {
      l.unsubscribe();
    };
  }, [e?.subscribe]), null;
}
function In(e) {
  var n = e, { children: r } = n, o = W(n, ["children"]);
  const t = Z(o.showDevConsole), c = Z(o.enableInspector), l = o.publicApiKey || o.publicLicenseKey, i = s.useMemo(() => [{ render: dn }], []);
  return /* @__PURE__ */ v.jsx(Tt, { enabled: t, children: /* @__PURE__ */ v.jsx(zt, { publicApiKey: l, showUsageBanner: t, children: /* @__PURE__ */ v.jsx(pn, { threadId: o.threadId, children: /* @__PURE__ */ v.jsx(
    Kt,
    K(b({}, o), {
      showDevConsole: c,
      renderCustomMessages: i,
      useSingleEndpoint: !0,
      children: /* @__PURE__ */ v.jsx(vn, K(b({}, o), { children: r }))
    })
  ) }) }) });
}
function bn() {
  const { copilotkit: e } = Ne(), { onError: n, copilotApiConfig: r } = Ae();
  return s.useEffect(() => {
    if (!e)
      return;
    const o = e.subscribe({
      onError: (t) => Y(this, null, function* () {
        const c = {
          type: "error",
          timestamp: Date.now(),
          context: b({
            source: "agent",
            request: {
              operation: t.code || "unknown",
              url: r?.chatApiEndpoint,
              startTime: Date.now()
            },
            technical: {
              environment: "browser",
              userAgent: typeof navigator < "u" ? navigator.userAgent : void 0,
              stackTrace: t.error.stack
            }
          }, t.context),
          error: t.error
        };
        try {
          yield n(c);
        } catch (l) {
          console.error("Error in onError handler:", l);
        }
      })
    });
    return () => {
      o.unsubscribe();
    };
  }, [e, n, r]), null;
}
function vn(e) {
  var n;
  const r = e, { children: o } = r, t = W(r, ["children"]);
  Sn(e);
  const c = t.publicLicenseKey || t.publicApiKey, l = t.runtimeUrl || Lt, [i, p] = s.useState({}), [f, g] = s.useState(/* @__PURE__ */ new Map()), x = s.useRef({
    actions: {},
    coAgentStateRenders: {}
  }), { addElement: S, removeElement: k, printTree: C, getAllElements: y } = Gt(), [I, m] = s.useState(!1), [_, h] = s.useState(""), [j, R] = s.useState({}), [$, L] = s.useState({}), [D, M] = s.useState([]), {
    addElement: P,
    removeElement: V,
    allElements: B
  } = qt(), A = s.useCallback((a, u) => {
    p((d) => K(b({}, d), {
      [a]: u
    }));
  }, []), E = s.useCallback((a) => {
    p((u) => {
      const d = b({}, u);
      return delete d[a], d;
    });
  }, []), U = s.useCallback(
    (a, u) => {
      const d = a.map((N) => `${N.name} (${N.sourceApplication}):
${N.getContents()}`).join(`

`), T = C(u);
      return `${d}

${T}`;
    },
    [C]
  ), w = s.useCallback(
    (a, u, d = ke) => S(a, d, u),
    [S]
  ), O = s.useCallback(
    (a) => {
      k(a);
    },
    [k]
  ), X = s.useCallback(() => y(), [y]), se = s.useCallback(
    (a) => mn(Object.values(a || i)),
    [i]
  ), q = s.useCallback(
    (a) => B(a),
    [B]
  ), Qe = s.useCallback(
    (a, u = ke) => P(a, u),
    [P]
  ), Ye = s.useCallback(
    (a) => {
      V(a);
    },
    [V]
  ), F = s.useMemo(() => {
    var a, u;
    let d;
    return c && (d = {
      guardrails: {
        input: {
          restrictToTopic: {
            enabled: !!t.guardrails_c,
            validTopics: ((a = t.guardrails_c) == null ? void 0 : a.validTopics) || [],
            invalidTopics: ((u = t.guardrails_c) == null ? void 0 : u.invalidTopics) || []
          }
        }
      }
    }), K(b({
      publicApiKey: c
    }, d ? { cloud: d } : {}), {
      chatApiEndpoint: l,
      headers: t.headers || {},
      properties: t.properties || {},
      transcribeAudioUrl: t.transcribeAudioUrl,
      textToSpeechUrl: t.textToSpeechUrl,
      credentials: t.credentials
    });
  }, [
    c,
    t.headers,
    t.properties,
    t.transcribeAudioUrl,
    t.textToSpeechUrl,
    t.credentials,
    t.cloudRestrictToTopic,
    t.guardrails_c
  ]);
  s.useMemo(() => {
    const a = Object.values(j || {}).reduce((u, d) => d.status === "authenticated" && d.authHeaders ? b(b({}, u), Object.entries(d.authHeaders).reduce(
      (T, [N, z]) => K(b({}, T), {
        [N.startsWith("X-Custom-") ? N : `X-Custom-${N}`]: z
      }),
      {}
    )) : u, {});
    return b(b(b({}, F.headers || {}), F.publicApiKey ? { [Me]: F.publicApiKey } : {}), a);
  }, [F.headers, F.publicApiKey, j]);
  const [oe, he] = s.useState({}), Xe = s.useCallback((a) => {
    he((u) => b(b({}, u), a));
  }, []), Ge = s.useCallback((a) => {
    he((u) => {
      const d = u, { [a]: T } = d;
      return W(d, [ue(a)]);
    });
  }, []), ie = s.useRef(t.onError);
  s.useEffect(() => {
    ie.current = t.onError;
  }, [t.onError]);
  const fe = s.useRef({});
  s.useEffect(() => {
    fe.current = oe;
  }, [oe]);
  const Je = s.useCallback(
    (a) => Y(this, null, function* () {
      if (F.publicApiKey && ie.current)
        try {
          yield ie.current(a);
        } catch (d) {
          console.error("Error in public onError handler:", d);
        }
      const u = Object.values(fe.current);
      yield Promise.all(
        u.map(
          (d) => Promise.resolve(d(a)).catch(
            (T) => console.error("Error in internal error handler:", T)
          )
        )
      );
    }),
    [F.publicApiKey]
  ), [Ze, ee] = s.useState({}), qe = s.useCallback(
    (a, u) => {
      ee((d) => K(b({}, d), { [a]: u }));
    },
    [ee]
  ), et = s.useCallback(
    (a) => {
      ee((u) => {
        const d = u, { [a]: T } = d;
        return W(d, [ue(a)]);
      });
    },
    [ee]
  ), [tt, En] = s.useState([]), [nt, ge] = s.useState({}), ae = s.useRef({}), rt = s.useCallback(
    (a) => {
      const u = typeof a == "function" ? a(ae.current) : a;
      ae.current = u, ge((d) => u);
    },
    []
  );
  let be = null;
  t.agent && (be = {
    agentName: t.agent
  });
  const [st, ce] = s.useState(be);
  s.useEffect(() => {
    t.agent ? ce({
      agentName: t.agent
    }) : ce(null);
  }, [t.agent]);
  const { threadId: ve, setThreadId: ot } = hn(), it = s.useCallback(
    (a) => {
      if (t.threadId)
        throw new Error("Cannot call setThreadId() when threadId is provided via props.");
      ot(a);
    },
    [t.threadId]
  ), [at, ct] = s.useState(null), lt = s.useRef(null), me = Z(t.showDevConsole), [ut, Ce] = s.useState({}), dt = s.useCallback((a) => {
    Ce((u) => {
      var d;
      return a == null || !a.id ? u : K(b({}, u), {
        [a.id]: b(b({}, (d = u[a.id]) != null ? d : {}), a)
      });
    });
  }, []), pt = s.useCallback((a) => {
    Ce((u) => {
      const d = u, { [a]: T } = d;
      return W(d, [ue(a)]);
    });
  }, []), [ht, Se] = s.useState({}), ft = s.useCallback((a) => {
    Se((u) => {
      const d = u[a.threadId] || [];
      return K(b({}, u), {
        [a.threadId]: [...d, a]
      });
    });
  }, []), gt = s.useCallback(
    (a, u, d) => {
      Se((T) => {
        const N = T[a] || [];
        return K(b({}, T), {
          [a]: N.map(
            (z) => z.eventId === u ? K(b({}, z), { event: K(b({}, z.event), { response: d }) }) : z
          )
        });
      });
    },
    []
  ), bt = s.useMemo(() => o, [o]), [G, Ee] = s.useState(null), vt = s.useMemo(() => {
    var a;
    return (a = t.agent) != null ? a : null;
  }, [t.agent]), mt = s.useMemo(
    () => {
      var a;
      return (a = t.forwardedParameters) != null ? a : {};
    },
    [t.forwardedParameters]
  ), Ct = s.useCallback(
    (a) => {
      L((u) => {
        const d = typeof a == "function" ? a(u) : a;
        return Object.keys(d).length === Object.keys(u).length && // @ts-ignore
        Object.entries(d).every(([z, le]) => u[z] === le) ? u : d;
      });
    },
    [L]
  ), St = s.useCallback(
    (a) => {
      R((u) => {
        const d = typeof a == "function" ? a(u) : a;
        return Object.keys(d).length === Object.keys(u).length && // @ts-ignore
        Object.entries(d).every(([z, le]) => u[z] === le) ? u : d;
      });
    },
    [R]
  ), Et = s.useCallback((a) => {
    const u = a.action.name || Ke();
    return g((d) => {
      const T = new Map(d);
      return T.set(u, a), T;
    }), u;
  }, []), xt = s.useCallback((a) => {
    g((u) => {
      const d = new Map(u);
      return d.delete(a), d;
    });
  }, []), yt = s.useMemo(() => () => /* @__PURE__ */ v.jsx(v.Fragment, { children: Array.from(f.entries()).map(([a, u]) => {
    const d = u.component;
    return /* @__PURE__ */ v.jsx(d, { action: u.action }, a);
  }) }), [f]);
  return /* @__PURE__ */ v.jsx(
    Nt,
    {
      agentId: (n = t.agent) != null ? n : "default",
      threadId: ve,
      children: /* @__PURE__ */ v.jsxs(
        jt.Provider,
        {
          value: {
            actions: i,
            chatComponentsCache: x,
            getFunctionCallHandler: se,
            setAction: A,
            removeAction: E,
            setRegisteredActions: Et,
            removeRegisteredAction: xt,
            getContextString: U,
            addContext: w,
            removeContext: O,
            getAllContext: X,
            getDocumentsContext: q,
            addDocumentContext: Qe,
            removeDocumentContext: Ye,
            copilotApiConfig: F,
            isLoading: I,
            setIsLoading: m,
            chatSuggestionConfiguration: Ze,
            addChatSuggestionConfiguration: qe,
            removeChatSuggestionConfiguration: et,
            chatInstructions: _,
            setChatInstructions: h,
            additionalInstructions: D,
            setAdditionalInstructions: M,
            showDevConsole: me,
            coagentStates: nt,
            setCoagentStates: ge,
            coagentStatesRef: ae,
            setCoagentStatesWithRef: rt,
            agentSession: st,
            setAgentSession: ce,
            forwardedParameters: mt,
            agentLock: vt,
            threadId: ve,
            setThreadId: it,
            runId: at,
            setRunId: ct,
            chatAbortControllerRef: lt,
            availableAgents: tt,
            authConfig_c: t.authConfig_c,
            authStates_c: j,
            setAuthStates_c: St,
            extensions: $,
            setExtensions: Ct,
            interruptActions: ut,
            setInterruptAction: dt,
            removeInterruptAction: pt,
            interruptEventQueue: ht,
            addInterruptEvent: ft,
            resolveInterruptEvent: gt,
            bannerError: G,
            setBannerError: Ee,
            onError: Je,
            internalErrorHandlers: oe,
            setInternalErrorHandler: Xe,
            removeInternalErrorHandler: Ge
          },
          children: [
            /* @__PURE__ */ v.jsx(gn, {}),
            /* @__PURE__ */ v.jsx(bn, {}),
            /* @__PURE__ */ v.jsxs(cn, { children: [
              /* @__PURE__ */ v.jsx(Vt, { children: /* @__PURE__ */ v.jsxs(Qt, { children: [
                bt,
                /* @__PURE__ */ v.jsx(yt, {})
              ] }) }),
              G && me && /* @__PURE__ */ v.jsx(
                Oe,
                {
                  severity: G.severity,
                  message: G.message,
                  onClose: () => Ee(null),
                  actions: $e(G)
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
var ke = ["global"];
function mn(e) {
  return (n) => Y(this, [n], function* ({ name: r, args: o }) {
    let t = {};
    for (let i of e)
      t[i.name] = i;
    const c = t[r];
    let l;
    return c && (yield new Promise((i, p) => {
      Ot.flushSync(() => Y(this, null, function* () {
        var f;
        try {
          l = yield (f = c.handler) == null ? void 0 : f.call(c, o), i();
        } catch (g) {
          p(g);
        }
      }));
    }), yield new Promise((i) => setTimeout(i, 20))), l;
  });
}
function Cn(e) {
  return e.replace(/_c$/, "").split("_").map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(" ");
}
function Sn(e) {
  const n = Object.keys(e).filter((o) => o.endsWith("_c")), r = e.publicApiKey || e.publicLicenseKey;
  if (!e.runtimeUrl && !r)
    throw new Dt(
      "Missing required prop: 'runtimeUrl' or 'publicApiKey' or 'publicLicenseKey'"
    );
  if (n.length > 0 && !r)
    throw new Mt(
      `Missing required prop: 'publicApiKey' or 'publicLicenseKey' to use cloud features: ${n.map(Cn).join(", ")}`
    );
}
export {
  We as CoAgentStateRendersContext,
  cn as CoAgentStateRendersProvider,
  jt as CopilotContext,
  In as CopilotKit,
  Ht as CopilotMessagesContext,
  Ve as ThreadsContext,
  pn as ThreadsProvider,
  ke as defaultCopilotContextCategories,
  Z as shouldShowDevConsole,
  ln as useCoAgentStateRenders,
  Ae as useCopilotContext,
  An as useFrontendTool,
  Rn as useLangGraphInterrupt,
  hn as useThreads
};
