import { _ as p, h as U, s as J, i as Y, j as Z, J as q, I as H, m as F, k as K, Y as Q, a1 as X, a7 as ee, n as te, P as ae, $ as re } from "./mermaid-VLURNSYL-DR5qm_B6.js";
import { p as ne } from "./chunk-4BX2VUAB-OWun39vr.js";
import { p as ie } from "./treemap-KMMF4GRG-2eYaQy68.js";
import { d as R } from "./arc-V1FMzaqQ.js";
import { b as S, t as z, B as se, C as le } from "./embed-entry-B68VGA8B.js";
function oe(e, a) {
  return a < e ? -1 : a > e ? 1 : a >= e ? 0 : NaN;
}
function ce(e) {
  return e;
}
function ue() {
  var e = ce, a = oe, f = null, x = S(0), s = S(z), o = S(0);
  function l(t) {
    var n, c = (t = se(t)).length, g, y, m = 0, u = new Array(c), i = new Array(c), v = +x.apply(this, arguments), w = Math.min(z, Math.max(-z, s.apply(this, arguments) - v)), h, D = Math.min(Math.abs(w) / c, o.apply(this, arguments)), $ = D * (w < 0 ? -1 : 1), d;
    for (n = 0; n < c; ++n)
      (d = i[u[n] = n] = +e(t[n], n, t)) > 0 && (m += d);
    for (a != null ? u.sort(function(A, C) {
      return a(i[A], i[C]);
    }) : f != null && u.sort(function(A, C) {
      return f(t[A], t[C]);
    }), n = 0, y = m ? (w - c * $) / m : 0; n < c; ++n, v = h)
      g = u[n], d = i[g], h = v + (d > 0 ? d * y : 0) + $, i[g] = {
        data: t[g],
        index: n,
        value: d,
        startAngle: v,
        endAngle: h,
        padAngle: D
      };
    return i;
  }
  return l.value = function(t) {
    return arguments.length ? (e = typeof t == "function" ? t : S(+t), l) : e;
  }, l.sortValues = function(t) {
    return arguments.length ? (a = t, f = null, l) : a;
  }, l.sort = function(t) {
    return arguments.length ? (f = t, a = null, l) : f;
  }, l.startAngle = function(t) {
    return arguments.length ? (x = typeof t == "function" ? t : S(+t), l) : x;
  }, l.endAngle = function(t) {
    return arguments.length ? (s = typeof t == "function" ? t : S(+t), l) : s;
  }, l.padAngle = function(t) {
    return arguments.length ? (o = typeof t == "function" ? t : S(+t), l) : o;
  }, l;
}
var pe = re.pie, G = {
  sections: /* @__PURE__ */ new Map(),
  showData: !1
}, T = G.sections, N = G.showData, ge = structuredClone(pe), de = /* @__PURE__ */ p(() => structuredClone(ge), "getConfig"), fe = /* @__PURE__ */ p(() => {
  T = /* @__PURE__ */ new Map(), N = G.showData, ae();
}, "clear"), he = /* @__PURE__ */ p(({ label: e, value: a }) => {
  if (a < 0)
    throw new Error(
      `"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`
    );
  T.has(e) || (T.set(e, a), F.debug(`added new section: ${e}, with value: ${a}`));
}, "addSection"), me = /* @__PURE__ */ p(() => T, "getSections"), ve = /* @__PURE__ */ p((e) => {
  N = e;
}, "setShowData"), Se = /* @__PURE__ */ p(() => N, "getShowData"), L = {
  getConfig: de,
  clear: fe,
  setDiagramTitle: H,
  getDiagramTitle: q,
  setAccTitle: Z,
  getAccTitle: Y,
  setAccDescription: J,
  getAccDescription: U,
  addSection: he,
  getSections: me,
  setShowData: ve,
  getShowData: Se
}, xe = /* @__PURE__ */ p((e, a) => {
  ne(e, a), a.setShowData(e.showData), e.sections.map(a.addSection);
}, "populateDb"), ye = {
  parse: /* @__PURE__ */ p(async (e) => {
    const a = await ie("pie", e);
    F.debug(a), xe(a, L);
  }, "parse")
}, we = /* @__PURE__ */ p((e) => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`, "getStyles"), Ae = we, Ce = /* @__PURE__ */ p((e) => {
  const a = [...e.values()].reduce((s, o) => s + o, 0), f = [...e.entries()].map(([s, o]) => ({ label: s, value: o })).filter((s) => s.value / a * 100 >= 1).sort((s, o) => o.value - s.value);
  return ue().value((s) => s.value)(f);
}, "createPieArcs"), De = /* @__PURE__ */ p((e, a, f, x) => {
  F.debug(`rendering pie chart
` + e);
  const s = x.db, o = K(), l = Q(s.getConfig(), o.pie), t = 40, n = 18, c = 4, g = 450, y = g, m = X(a), u = m.append("g");
  u.attr("transform", "translate(" + y / 2 + "," + g / 2 + ")");
  const { themeVariables: i } = o;
  let [v] = ee(i.pieOuterStrokeWidth);
  v ?? (v = 2);
  const w = l.textPosition, h = Math.min(y, g) / 2 - t, D = R().innerRadius(0).outerRadius(h), $ = R().innerRadius(h * w).outerRadius(h * w);
  u.append("circle").attr("cx", 0).attr("cy", 0).attr("r", h + v / 2).attr("class", "pieOuterCircle");
  const d = s.getSections(), A = Ce(d), C = [
    i.pie1,
    i.pie2,
    i.pie3,
    i.pie4,
    i.pie5,
    i.pie6,
    i.pie7,
    i.pie8,
    i.pie9,
    i.pie10,
    i.pie11,
    i.pie12
  ];
  let b = 0;
  d.forEach((r) => {
    b += r;
  });
  const P = A.filter((r) => (r.data.value / b * 100).toFixed(0) !== "0"), k = le(C);
  u.selectAll("mySlices").data(P).enter().append("path").attr("d", D).attr("fill", (r) => k(r.data.label)).attr("class", "pieCircle"), u.selectAll("mySlices").data(P).enter().append("text").text((r) => (r.data.value / b * 100).toFixed(0) + "%").attr("transform", (r) => "translate(" + $.centroid(r) + ")").style("text-anchor", "middle").attr("class", "slice"), u.append("text").text(s.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
  const W = [...d.entries()].map(([r, M]) => ({
    label: r,
    value: M
  })), E = u.selectAll(".legend").data(W).enter().append("g").attr("class", "legend").attr("transform", (r, M) => {
    const O = n + c, B = O * W.length / 2, V = 12 * n, j = M * O - B;
    return "translate(" + V + "," + j + ")";
  });
  E.append("rect").attr("width", n).attr("height", n).style("fill", (r) => k(r.label)).style("stroke", (r) => k(r.label)), E.append("text").attr("x", n + c).attr("y", n - c).text((r) => s.getShowData() ? `${r.label} [${r.value}]` : r.label);
  const _ = Math.max(
    ...E.selectAll("text").nodes().map((r) => (r == null ? void 0 : r.getBoundingClientRect().width) ?? 0)
  ), I = y + t + n + c + _;
  m.attr("viewBox", `0 0 ${I} ${g}`), te(m, g, I, l.useMaxWidth);
}, "draw"), $e = { draw: De }, ze = {
  parser: ye,
  db: L,
  renderer: $e,
  styles: Ae
};
export {
  ze as diagram
};
