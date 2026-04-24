import { _ as a, n as w, m as x } from "./mermaid-VLURNSYL-DR5qm_B6.js";
var g = /* @__PURE__ */ a((e, t, i, o) => {
  e.attr("class", i);
  const { width: r, height: h, x: s, y: c } = u(e, t);
  w(e, h, r, o);
  const n = B(s, c, r, h, t);
  e.attr("viewBox", n), x.debug(`viewBox configured: ${n} with padding: ${t}`);
}, "setupViewPortForSVG"), u = /* @__PURE__ */ a((e, t) => {
  var o;
  const i = ((o = e.node()) == null ? void 0 : o.getBBox()) || { width: 0, height: 0, x: 0, y: 0 };
  return {
    width: i.width + t * 2,
    height: i.height + t * 2,
    x: i.x,
    y: i.y
  };
}, "calculateDimensionsWithPadding"), B = /* @__PURE__ */ a((e, t, i, o, r) => `${e - r} ${t - r} ${i} ${o}`, "createViewBox");
export {
  g as s
};
