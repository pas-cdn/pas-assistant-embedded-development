import { r as h, e as I, f as _, h as x, i as v, k as P, l as j, j as n, _ as L, O as S, m as R } from "./embed-entry-BxfoUARY.js";
import { a as U } from "./list-threads.graphql-CcnK12Y7.js";
import { G as b, u as k } from "./permissions.store-C13ysoKm.js";
const z = "Assistente IA", H = "/favicon.ico";
function T(s, t) {
  h.useEffect(() => {
    if (typeof window < "u" && window.__PAS_ASSISTANT_EMBEDDED__ === !0)
      return;
    document.title = s;
    let a = document.querySelector("link[rel*='icon']");
    a || (a = document.createElement("link"), a.rel = "icon", document.head.appendChild(a)), a.href = t;
  }, [s, t]);
}
function E() {
  const { data: s } = I(), t = s?.name || z, i = s?.faviconUri || H;
  return T(t, i), null;
}
const C = async (s, t, i) => {
  const { apiKey: a, hostname: d } = x(), r = i?.apiKey ?? a, u = {
    "x-hostname": i?.hostname ?? d ?? "embed-host"
  };
  r && (u["x-api-key"] = r);
  const c = await _.request(b, { token: s, userId: t }, u);
  if (!c.getUserPermissions)
    throw new Error("User permissions not found");
  return c.getUserPermissions;
};
function O() {
  const s = v(), { pathname: t } = P(), i = j(), [a, d] = h.useState(!0), { setAssistants: r } = U(), { setPermissions: f, clearPermissions: u, setLoading: c } = k();
  return h.useEffect(() => {
    let o = !0;
    return (async () => {
      const { token: m, hostname: w, apiKey: p, userId: g } = x();
      if (!m) {
        d(!1);
        return;
      }
      const y = w ?? (typeof window < "u" ? window.location.hostname : void 0), A = async () => {
        if (!g) {
          console.warn(
            "[AuthenticatedLayout] host userId is missing; permission-based checks may stay disabled. Ensure setHostConfig({ userId }) in the embed parent."
          );
          return;
        }
        if (o) {
          c(!0);
          try {
            const e = await C(m, g, {
              hostname: y,
              apiKey: p
            });
            o && f(e);
          } catch (e) {
            console.error(
              "[AuthenticatedLayout] Failed to load user permissions",
              e
            ), o && u();
          } finally {
            o && c(!1);
          }
        }
      }, l = i.getQueryData(["assistants"]);
      if (l?.page) {
        r(l.page), t === "/" && l.page.length > 0 && s(`/${l.page[0].id}`, { replace: !0 }), await A(), o && d(!1);
        return;
      }
      try {
        const e = await R(m, {
          hostname: y,
          apiKey: p
        });
        if (!o)
          return;
        e?.page && (i.setQueryData(
          ["assistants"],
          e
        ), r(e.page), t === "/" && e.page.length > 0 && s(`/${e.page[0].id}`, { replace: !0 })), await A();
      } catch (e) {
        console.error("[AuthenticatedLayout] Initialization failed", e);
      } finally {
        o && d(!1);
      }
    })(), () => {
      o = !1;
    };
  }, [
    u,
    s,
    t,
    i,
    r,
    f,
    c
  ]), a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(E, {}),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 flex items-center justify-center bg-sidebar", children: /* @__PURE__ */ n.jsx(L, { size: "md" }) })
  ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(E, {}),
    /* @__PURE__ */ n.jsx("div", { className: "flex min-h-0 flex-1 flex-col", children: /* @__PURE__ */ n.jsx(S, {}) })
  ] });
}
export {
  O as default
};
