import { _ as b, Y as u, a1 as $, n as B, m, j as C, i as S, I as D, J as P, h as T, s as z, Z as E, $ as F, P as A } from "./mermaid-VLURNSYL-KtsFwY3v.js";
import { p as W } from "./chunk-4BX2VUAB-HhHWw7aj.js";
import { p as _ } from "./treemap-KMMF4GRG-Cc2R6JQP.js";
var N = F.packet, w = class {
  constructor() {
    this.packet = [], this.setAccTitle = C, this.getAccTitle = S, this.setDiagramTitle = D, this.getDiagramTitle = P, this.getAccDescription = T, this.setAccDescription = z;
  }
  static {
    b(this, "PacketDB");
  }
  getConfig() {
    const t = u({
      ...N,
      ...E().packet
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
    A(), this.packet = [];
  }
}, Y = 1e4, I = /* @__PURE__ */ b((t, e) => {
  W(t, e);
  let r = -1, s = [], n = 1;
  const { bitsPerRow: l } = e.getConfig();
  for (let { start: a, end: i, bits: d, label: c } of t.blocks) {
    if (a !== void 0 && i !== void 0 && i < a)
      throw new Error(`Packet block ${a} - ${i} is invalid. End must be greater than start.`);
    if (a ??= r + 1, a !== r + 1)
      throw new Error(
        `Packet block ${a} - ${i ?? a} is not contiguous. It should start from ${r + 1}.`
      );
    if (d === 0)
      throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);
    for (i ??= a + (d ?? 1) - 1, d ??= i - a + 1, r = i, m.debug(`Packet block ${a} - ${r} with label ${c}`); s.length <= l + 1 && e.getPacket().length < Y; ) {
      const [p, o] = L({ start: a, end: i, bits: d, label: c }, n, l);
      if (s.push(p), p.end + 1 === n * l && (e.pushWord(s), s = [], n++), !o)
        break;
      ({ start: a, end: i, bits: d, label: c } = o);
    }
  }
  e.pushWord(s);
}, "populate"), L = /* @__PURE__ */ b((t, e, r) => {
  if (t.start === void 0)
    throw new Error("start should have been set during first phase");
  if (t.end === void 0)
    throw new Error("end should have been set during first phase");
  if (t.start > t.end)
    throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);
  if (t.end + 1 <= e * r)
    return [t, void 0];
  const s = e * r - 1, n = e * r;
  return [
    {
      start: t.start,
      end: s,
      label: t.label,
      bits: s - t.start
    },
    {
      start: n,
      end: t.end,
      label: t.label,
      bits: t.end - n
    }
  ];
}, "getNextFittingBlock"), v = {
  // @ts-expect-error - PacketDB is not assignable to DiagramDB
  parser: { yy: void 0 },
  parse: /* @__PURE__ */ b(async (t) => {
    const e = await _("packet", t), r = v.parser?.yy;
    if (!(r instanceof w))
      throw new Error(
        "parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues."
      );
    m.debug(e), I(e, r);
  }, "parse")
}, M = /* @__PURE__ */ b((t, e, r, s) => {
  const n = s.db, l = n.getConfig(), { rowHeight: a, paddingY: i, bitWidth: d, bitsPerRow: c } = l, p = n.getPacket(), o = n.getDiagramTitle(), g = a + i, h = g * (p.length + 1) - (o ? 0 : a), k = d * c + 2, f = $(e);
  f.attr("viewbox", `0 0 ${k} ${h}`), B(f, h, k, l.useMaxWidth);
  for (const [x, y] of p.entries())
    j(f, y, x, l);
  f.append("text").text(o).attr("x", k / 2).attr("y", h - g / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), j = /* @__PURE__ */ b((t, e, r, { rowHeight: s, paddingX: n, paddingY: l, bitWidth: a, bitsPerRow: i, showBits: d }) => {
  const c = t.append("g"), p = r * (s + l) + l;
  for (const o of e) {
    const g = o.start % i * a + 1, h = (o.end - o.start + 1) * a - n;
    if (c.append("rect").attr("x", g).attr("y", p).attr("width", h).attr("height", s).attr("class", "packetBlock"), c.append("text").attr("x", g + h / 2).attr("y", p + s / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(o.label), !d)
      continue;
    const k = o.end === o.start, f = p - 2;
    c.append("text").attr("x", g + (k ? h / 2 : 0)).attr("y", f).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", k ? "middle" : "start").text(o.start), k || c.append("text").attr("x", g + h).attr("y", f).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(o.end);
  }
}, "drawWord"), O = { draw: M }, G = {
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
}, H = /* @__PURE__ */ b(({ packet: t } = {}) => {
  const e = u(G, t);
  return `
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`;
}, "styles"), U = {
  parser: v,
  get db() {
    return new w();
  },
  renderer: O,
  styles: H
};
export {
  U as diagram
};
