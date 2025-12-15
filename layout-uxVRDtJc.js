import { r as c, u as h, a as p, b as E, c as y, j as i, L as x, d as v, e as A, O as L, g as j, f as _ } from "./embed-entry-Bpg_TWAa.js";
const w = "Assistente IA", I = "/favicon.ico";
function D(e, s) {
  c.useEffect(() => {
    if (typeof window < "u" && window.__PAS_ASSISTANT_EMBEDDED__ === !0)
      return;
    document.title = e;
    let t = document.querySelector("link[rel*='icon']");
    t || (t = document.createElement("link"), t.rel = "icon", document.head.appendChild(t)), t.href = s;
  }, [e, s]);
}
function l() {
  var t, o;
  const { data: e } = h(), s = (t = e == null ? void 0 : e.solution) != null && t.name && (e != null && e.name) ? `${e.solution.name} | ${e.name}` : w, a = ((o = e == null ? void 0 : e.solution) == null ? void 0 : o.faviconUri) || I;
  return D(s, a), null;
}
function C() {
  const e = p(), { pathname: s } = E(), a = y(), [t, o] = c.useState(!0);
  return c.useEffect(() => {
    let u = !0;
    return (async () => {
      const { token: d, hostname: f, apiKey: m } = _();
      if (!d) {
        o(!1);
        return;
      }
      const r = a.getQueryData(["assistants"]);
      if (r != null && r.page) {
        s === "/" && r.page.length > 0 && e(`/${r.page[0].id}`, { replace: !0 }), u && o(!1);
        return;
      }
      const g = f ?? (typeof window < "u" ? window.location.hostname : void 0);
      try {
        const n = await j(d, {
          hostname: g,
          apiKey: m
        });
        if (!u) return;
        n != null && n.page && (a.setQueryData(
          ["assistants"],
          n
        ), s === "/" && n.page.length > 0 && e(`/${n.page[0].id}`, { replace: !0 }));
      } catch (n) {
        console.error("[AuthenticatedLayout] Initialization failed", n);
      } finally {
        u && o(!1);
      }
    })(), () => {
      u = !1;
    };
  }, [e, s, a]), t ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(l, {}),
    /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex items-center justify-center bg-list-active-side-nav", children: /* @__PURE__ */ i.jsx(
      x,
      {
        isLoading: !0,
        variant: A.Dots,
        size: v.Medium
      }
    ) })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(l, {}),
    /* @__PURE__ */ i.jsx(L, {})
  ] });
}
export {
  C as default
};
