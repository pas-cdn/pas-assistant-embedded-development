import { _ as b, Y as m, a1 as B, n as C, m as w, j as S, i as D, I as P, J as T, h as z, s as E, Z as F, $ as A, P as W } from "./mermaid-VLURNSYL-DR5qm_B6.js";
import { p as _ } from "./chunk-4BX2VUAB-OWun39vr.js";
import { p as N } from "./treemap-KMMF4GRG-2eYaQy68.js";
var Y = A.packet, u, v = (u = class {
  constructor() {
    this.packet = [], this.setAccTitle = S, this.getAccTitle = D, this.setDiagramTitle = P, this.getDiagramTitle = T, this.getAccDescription = z, this.setAccDescription = E;
  }
  getConfig() {
    const t = m({
      ...Y,
      ...F().packet
    });
    return t.showBits && (t.paddingY += 10), t;
  }
  getPacket() {
    return this.packet;
  }
  pushWord(t) {
    t.length > 0 && this.packet.push(t);
  }
  clear() {
    W(), this.packet = [];
  }
}, b(u, "PacketDB"), u), I = 1e4, L = /* @__PURE__ */ b((e, t) => {
  _(e, t);
  let s = -1, r = [], n = 1;
  const { bitsPerRow: l } = t.getConfig();
  for (let { start: a, end: i, bits: d, label: c } of e.blocks) {
    if (a !== void 0 && i !== void 0 && i < a)
      throw new Error(`Packet block ${a} - ${i} is invalid. End must be greater than start.`);
    if (a ?? (a = s + 1), a !== s + 1)
      throw new Error(
        `Packet block ${a} - ${i ?? a} is not contiguous. It should start from ${s + 1}.`
      );
    if (d === 0)
      throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);
    for (i ?? (i = a + (d ?? 1) - 1), d ?? (d = i - a + 1), s = i, w.debug(`Packet block ${a} - ${s} with label ${c}`); r.length <= l + 1 && t.getPacket().length < I; ) {
      const [p, o] = M({ start: a, end: i, bits: d, label: c }, n, l);
      if (r.push(p), p.end + 1 === n * l && (t.pushWord(r), r = [], n++), !o)
        break;
      ({ start: a, end: i, bits: d, label: c } = o);
    }
  }
  t.pushWord(r);
}, "populate"), M = /* @__PURE__ */ b((e, t, s) => {
  if (e.start === void 0)
    throw new Error("start should have been set during first phase");
  if (e.end === void 0)
    throw new Error("end should have been set during first phase");
  if (e.start > e.end)
    throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);
  if (e.end + 1 <= t * s)
    return [e, void 0];
  const r = t * s - 1, n = t * s;
  return [
    {
      start: e.start,
      end: r,
      label: e.label,
      bits: r - e.start
    },
    {
      start: n,
      end: e.end,
      label: e.label,
      bits: e.end - n
    }
  ];
}, "getNextFittingBlock"), x = {
  // @ts-expect-error - PacketDB is not assignable to DiagramDB
  parser: { yy: void 0 },
  parse: /* @__PURE__ */ b(async (e) => {
    var r;
    const t = await N("packet", e), s = (r = x.parser) == null ? void 0 : r.yy;
    if (!(s instanceof v))
      throw new Error(
        "parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues."
      );
    w.debug(t), L(t, s);
  }, "parse")
}, j = /* @__PURE__ */ b((e, t, s, r) => {
  const n = r.db, l = n.getConfig(), { rowHeight: a, paddingY: i, bitWidth: d, bitsPerRow: c } = l, p = n.getPacket(), o = n.getDiagramTitle(), g = a + i, h = g * (p.length + 1) - (o ? 0 : a), k = d * c + 2, f = B(t);
  f.attr("viewbox", `0 0 ${k} ${h}`), C(f, h, k, l.useMaxWidth);
  for (const [y, $] of p.entries())
    O(f, $, y, l);
  f.append("text").text(o).attr("x", k / 2).attr("y", h - g / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), O = /* @__PURE__ */ b((e, t, s, { rowHeight: r, paddingX: n, paddingY: l, bitWidth: a, bitsPerRow: i, showBits: d }) => {
  const c = e.append("g"), p = s * (r + l) + l;
  for (const o of t) {
    const g = o.start % i * a + 1, h = (o.end - o.start + 1) * a - n;
    if (c.append("rect").attr("x", g).attr("y", p).attr("width", h).attr("height", r).attr("class", "packetBlock"), c.append("text").attr("x", g + h / 2).attr("y", p + r / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(o.label), !d)
      continue;
    const k = o.end === o.start, f = p - 2;
    c.append("text").attr("x", g + (k ? h / 2 : 0)).attr("y", f).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", k ? "middle" : "start").text(o.start), k || c.append("text").attr("x", g + h).attr("y", f).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(o.end);
  }
}, "drawWord"), G = { draw: j }, H = {
  byteFontSize: "10px",
  startByteColor: "black",
  endByteColor: "black",
  labelColor: "black",
  labelFontSize: "12px",
  titleColor: "black",
  titleFontSize: "14px",
  blockStrokeColor: "black",
  blockStrokeWidth: "1",
  blockFillColor: "#efefef"
}, J = /* @__PURE__ */ b(({ packet: e } = {}) => {
  const t = m(H, e);
  return `
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`;
}, "styles"), X = {
  parser: x,
  get db() {
    return new v();
  },
  renderer: G,
  styles: J
};
export {
  X as diagram
};
