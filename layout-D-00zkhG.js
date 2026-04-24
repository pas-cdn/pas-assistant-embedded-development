import { r as h, D as I, F as _, G as A, H as v, I as P, J as j, j as i, _ as L, O as S, K as U } from "./embed-entry-B68VGA8B.js";
import { a as H } from "./list-threads.graphql-DnOAwy1M.js";
import { G as b, u as D } from "./permissions.store-jr1NG_r2.js";
const R = "Assistente IA", T = "/favicon.ico";
function k(e, n) {
  h.useEffect(() => {
    if (typeof window < "u" && window.__PAS_ASSISTANT_EMBEDDED__ === !0)
      return;
    document.title = e;
    let a = document.querySelector("link[rel*='icon']");
    a || (a = document.createElement("link"), a.rel = "icon", document.head.appendChild(a)), a.href = n;
  }, [e, n]);
}
function x() {
  const { data: e } = I(), n = (e == null ? void 0 : e.name) || R, t = (e == null ? void 0 : e.faviconUri) || T;
  return k(n, t), null;
}
const C = async (e, n, t) => {
  const { apiKey: a, hostname: d } = A(), o = (t == null ? void 0 : t.apiKey) ?? a, l = {
    "x-hostname": (t == null ? void 0 : t.hostname) ?? d ?? "embed-host"
  };
  o && (l["x-api-key"] = o);
  const c = await _.request(b, { token: e, userId: n }, l);
  if (!c.getUserPermissions)
    throw new Error("User permissions not found");
  return c.getUserPermissions;
};
function q() {
  const e = v(), { pathname: n } = P(), t = j(), [a, d] = h.useState(!0), { setAssistants: o } = H(), { setPermissions: f, clearPermissions: l, setLoading: c } = D();
  return h.useEffect(() => {
    let r = !0;
    return (async () => {
      const { token: m, hostname: w, apiKey: g, userId: y } = A();
      if (!m) {
        d(!1);
        return;
      }
      const p = w ?? (typeof window < "u" ? window.location.hostname : void 0), E = async () => {
        if (!y) {
          console.warn(
            "[AuthenticatedLayout] host userId is missing; permission-based checks may stay disabled. Ensure setHostConfig({ userId }) in the embed parent."
          );
          return;
        }
        if (r) {
          c(!0);
          try {
            const s = await C(m, y, {
              hostname: p,
              apiKey: g
            });
            r && f(s);
          } catch (s) {
            console.error(
              "[AuthenticatedLayout] Failed to load user permissions",
              s
            ), r && l();
          } finally {
            r && c(!1);
          }
        }
      }, u = t.getQueryData(["assistants"]);
      if (u != null && u.page) {
        o(u.page), n === "/" && u.page.length > 0 && e(`/${u.page[0].id}`, { replace: !0 }), await E(), r && d(!1);
        return;
      }
      try {
        const s = await U(m, {
          hostname: p,
          apiKey: g
        });
        if (!r)
          return;
        s != null && s.page && (t.setQueryData(
          ["assistants"],
          s
        ), o(s.page), n === "/" && s.page.length > 0 && e(`/${s.page[0].id}`, { replace: !0 })), await E();
      } catch (s) {
        console.error("[AuthenticatedLayout] Initialization failed", s);
      } finally {
        r && d(!1);
      }
    })(), () => {
      r = !1;
    };
  }, [
    l,
    e,
    n,
    t,
    o,
    f,
    c
  ]), a ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(x, {}),
    /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex items-center justify-center bg-sidebar", children: /* @__PURE__ */ i.jsx(L, { size: "md" }) })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(x, {}),
    /* @__PURE__ */ i.jsx("div", { className: "flex min-h-0 flex-1 flex-col", children: /* @__PURE__ */ i.jsx(S, {}) })
  ] });
}
export {
  q as default
};
