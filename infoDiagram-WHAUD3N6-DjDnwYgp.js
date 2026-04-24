import { _ as e, m as s, a1 as o, n as i, a2 as g } from "./mermaid-VLURNSYL-DR5qm_B6.js";
import { p } from "./treemap-KMMF4GRG-2eYaQy68.js";
var v = {
  parse: /* @__PURE__ */ e(async (a) => {
    const r = await p("info", a);
    s.debug(r);
  }, "parse")
}, d = {
  version: g.version + ""
}, m = /* @__PURE__ */ e(() => d.version, "getVersion"), c = {
  getVersion: m
}, f = /* @__PURE__ */ e((a, r, n) => {
  s.debug(`rendering info diagram
` + a);
  const t = o(r);
  i(t, 100, 400, !0), t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
}, "draw"), l = { draw: f }, b = {
  parser: v,
  db: c,
  renderer: l
};
export {
  b as diagram
};
