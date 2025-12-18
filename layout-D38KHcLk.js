import { r as u, u as h, a as p, b as E, c as y, j as n, L as x, d as v, e as A, O as L, g as j, f as _ } from "./embed-entry-Dnm00syM.js";
const w = "Assistente IA", I = "/favicon.ico";
function D(e, i) {
  u.useEffect(() => {
    if (typeof window < "u" && window.__PAS_ASSISTANT_EMBEDDED__ === !0)
      return;
    document.title = e;
    let a = document.querySelector("link[rel*='icon']");
    a || (a = document.createElement("link"), a.rel = "icon", document.head.appendChild(a)), a.href = i;
  }, [e, i]);
}
function l() {
  const { data: e } = h(), i = (e == null ? void 0 : e.name) || w, s = (e == null ? void 0 : e.faviconUri) || I;
  return D(i, s), null;
}
function z() {
  const e = p(), { pathname: i } = E(), s = y(), [a, c] = u.useState(!0);
  return u.useEffect(() => {
    let r = !0;
    return (async () => {
      const { token: d, hostname: f, apiKey: m } = _();
      if (!d) {
        c(!1);
        return;
      }
      const o = s.getQueryData(["assistants"]);
      if (o != null && o.page) {
        i === "/" && o.page.length > 0 && e(`/${o.page[0].id}`, { replace: !0 }), r && c(!1);
        return;
      }
      const g = f ?? (typeof window < "u" ? window.location.hostname : void 0);
      try {
        const t = await j(d, {
          hostname: g,
          apiKey: m
        });
        if (!r) return;
        t != null && t.page && (s.setQueryData(
          ["assistants"],
          t
        ), i === "/" && t.page.length > 0 && e(`/${t.page[0].id}`, { replace: !0 }));
      } catch (t) {
        console.error("[AuthenticatedLayout] Initialization failed", t);
      } finally {
        r && c(!1);
      }
    })(), () => {
      r = !1;
    };
  }, [e, i, s]), a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(l, {}),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 flex items-center justify-center bg-list-active-side-nav", children: /* @__PURE__ */ n.jsx(
      x,
      {
        isLoading: !0,
        variant: A.Dots,
        size: v.Medium
      }
    ) })
  ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(l, {}),
    /* @__PURE__ */ n.jsx(L, {})
  ] });
}
export {
  z as default
};
