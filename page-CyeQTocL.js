import { U as ml, p as Da, r as D, q as Tt, v as Q, j as k, V as gl, W as hl, X as bl, Y as _l, Z as yl, _ as La, x as El, t as Ve, I as ai, $ as vl, a0 as Rr, a1 as Pa, a2 as He, F as et, a3 as mt, L as si, e as Fa, a4 as wl, a5 as jr, a6 as Ba, S as zn, f as xl, c as kl, n as Tl, H as Sl, J as Ua, a7 as dn, N as Ue, a8 as Nl, a9 as Al } from "./embed-entry-B5uCwhPF.js";
import { u as br, d as oi, e as $a, A as Ol, b as Cl, f as za, a as Rl, c as Il } from "./assistant-list-BPI58Rb6.js";
function Ml() {
  const [e, t] = ml(), n = Da(), r = D.useRef(null);
  D.useEffect(() => {
    const i = e.get("lastThreadId");
    if (n && !n.startsWith("optimistic-") && (r.current = n), n && !n.startsWith("optimistic-") && n !== i) {
      const a = new URLSearchParams(e);
      a.set("lastThreadId", n), t(a, { replace: !0 });
      return;
    }
    if (!(n != null && n.startsWith("optimistic-") && (i != null && i.startsWith("optimistic-"))) && !(!n && r.current || n != null && n.startsWith("optimistic-")) && !n && !r.current) {
      const a = new URLSearchParams(e);
      a.delete("lastThreadId"), t(a, { replace: !0 });
    }
  }, [n, e, t]);
}
var Ct = /* @__PURE__ */ ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(Ct || {}), je = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Default = "default", e.Large = "large", e))(je || {});
const Dl = je.Default, Ll = Tt({
  base: "text-white font-medium",
  variants: {
    size: {
      [je.Small]: "text-xs",
      [je.Medium]: "text-sm",
      [je.Default]: "text-base",
      [je.Large]: "text-lg"
    }
  },
  defaultVariants: {
    size: je.Default
  }
});
function Pl(e) {
  switch (e) {
    case je.Large:
      return Ct.H1;
    case je.Default:
      return Ct.H2;
    case je.Medium:
      return Ct.H3;
    case je.Small:
      return Ct.H4;
    default:
      return Ct.H1;
  }
}
const Va = ({
  children: e,
  size: t = Dl,
  level: n,
  className: r,
  ...i
}) => {
  const s = n || Pl(t), o = Q(Ll({ size: t }), r);
  return /* @__PURE__ */ k.jsx(s, { className: o, ...i, children: e });
};
Va.displayName = "Heading";
var _t = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Default = "default", e.Large = "large", e))(_t || {});
const Fl = _t.Medium, Bl = Tt({
  base: "text-white font-normal",
  variants: {
    size: {
      [_t.Small]: "text-xs",
      [_t.Medium]: "text-sm",
      [_t.Default]: "text-base",
      [_t.Large]: "text-lg"
    }
  },
  defaultVariants: {
    size: _t.Default
  }
}), Ha = ({
  children: e,
  size: t = Fl,
  className: n,
  ...r
}) => {
  const i = "p", a = Q(Bl({ size: t }), n);
  return /* @__PURE__ */ k.jsx(i, { className: a, ...r, children: e });
};
Ha.displayName = "Paragraph";
var gt = /* @__PURE__ */ ((e) => (e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right", e))(gt || {}), tt = /* @__PURE__ */ ((e) => (e.Click = "click", e.Hover = "hover", e))(tt || {}), ja = /* @__PURE__ */ ((e) => (e.Start = "start", e.Center = "center", e.End = "end", e))(ja || {});
const Ul = 200, Li = 200, $l = 5, zl = gt.Top, Vl = tt.Hover, Hl = ja.Center;
function jl(e, t, n) {
  const [r, i] = D.useState(!1), a = D.useRef(null), s = D.useRef(null), o = e !== void 0, l = o ? e : r, c = D.useCallback(() => {
    a.current && clearTimeout(a.current), s.current && clearTimeout(s.current);
  }, []), u = D.useCallback(
    (v) => {
      o ? t == null || t(v) : i(v);
    },
    [o, t]
  ), d = D.useCallback(() => u(!0), [u]), p = D.useCallback(() => u(!1), [u]), f = D.useCallback(() => {
    n === tt.Hover && (c(), a.current = setTimeout(d, Ul));
  }, [n, c, d]), g = D.useCallback(() => {
    n === tt.Hover && (c(), s.current = setTimeout(p, Li));
  }, [n, c, p]), h = D.useCallback(() => {
    n === tt.Hover && l && c();
  }, [n, l, c]), b = D.useCallback(() => {
    n === tt.Hover && (c(), s.current = setTimeout(p, Li));
  }, [n, c, p]), E = D.useCallback(() => {
    n === tt.Click && u(!l);
  }, [n, l, u]);
  return D.useEffect(() => {
    const v = (O) => {
      O.key === "Escape" && p();
    };
    return l && document.addEventListener("keydown", v), () => {
      document.removeEventListener("keydown", v), c();
    };
  }, [l, p, c]), {
    isOpen: l,
    handleOpen: d,
    handleClose: p,
    handleMouseEnterTrigger: f,
    handleMouseLeaveTrigger: g,
    handleMouseEnterContent: h,
    handleMouseLeaveContent: b,
    handleClick: E
  };
}
const Zl = Tt({
  slots: {
    base: "relative inline-block",
    content: [
      "z-[2147483647] rounded-md shadow-lg bg-background-dialog outline-none",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
    ],
    title: "pt-2 px-2 font-semibold text-white",
    body: "p-2",
    arrow: "fill-background-dialog border-none"
  },
  variants: {
    position: {
      [gt.Top]: {
        content: "data-[side=top]:slide-in-from-bottom-2"
      },
      [gt.Bottom]: {
        content: "data-[side=bottom]:slide-in-from-top-2"
      },
      [gt.Left]: {
        content: "data-[side=left]:slide-in-from-right-2"
      },
      [gt.Right]: {
        content: "data-[side=right]:slide-in-from-left-2"
      }
    }
  }
});
function li({
  children: e,
  title: t,
  content: n,
  className: r,
  position: i = zl,
  trigger: a = Vl,
  align: s = Hl,
  open: o,
  onOpenChange: l,
  container: c,
  ...u
}) {
  const {
    base: d,
    content: p,
    title: f,
    body: g,
    arrow: h
  } = Zl({ position: i }), {
    isOpen: b,
    handleMouseEnterTrigger: E,
    handleMouseLeaveTrigger: v,
    handleMouseEnterContent: O,
    handleMouseLeaveContent: N,
    handleClick: I
  } = jl(o, l, a);
  return /* @__PURE__ */ k.jsxs(gl, { open: b, onOpenChange: l, children: [
    /* @__PURE__ */ k.jsx(
      hl,
      {
        asChild: !0,
        onMouseEnter: E,
        onMouseLeave: v,
        onClick: I,
        children: /* @__PURE__ */ k.jsx("div", { className: Q(d(), r), ...u, children: e })
      }
    ),
    /* @__PURE__ */ k.jsx(bl, { container: c, children: /* @__PURE__ */ k.jsxs(
      _l,
      {
        className: Q(p()),
        side: i,
        sideOffset: $l,
        align: s,
        onMouseEnter: O,
        onMouseLeave: N,
        children: [
          t && /* @__PURE__ */ k.jsx("div", { className: f(), children: t }),
          /* @__PURE__ */ k.jsx("div", { className: g(), children: n }),
          /* @__PURE__ */ k.jsx(yl, { className: h() })
        ]
      }
    ) })
  ] });
}
const Kl = Tt({
  slots: {
    button: "relative z-10 flex items-center gap-2 w-full text-white cursor-pointer"
  }
}), Gl = ({
  initialSelectedAssistant: e,
  initialAssistants: t
}) => {
  var d, p, f, g;
  const { assistantProperties: n } = br(), { data: r } = La(), { button: i } = Kl(), [a, s] = D.useState(!1), o = El(), l = D.useMemo(
    () => e || n,
    [e, n]
  ), c = D.useMemo(
    () => t || (r == null ? void 0 : r.page) || [],
    [t, r]
  ), u = (p = (d = l == null ? void 0 : l.persona) == null ? void 0 : d.avatar) == null ? void 0 : p.uri;
  return /* @__PURE__ */ k.jsx(
    li,
    {
      trigger: tt.Click,
      position: gt.Bottom,
      open: a,
      onOpenChange: s,
      container: o ?? void 0,
      content: /* @__PURE__ */ k.jsx(
        Ol,
        {
          initialAssistants: c,
          onAssistantSelect: () => s(!1),
          "data-testid": "assistant-list"
        }
      ),
      children: /* @__PURE__ */ k.jsxs(
        "button",
        {
          type: "button",
          className: Q(i()),
          "data-testid": "assistant-select-button",
          children: [
            /* @__PURE__ */ k.jsx(oi, { size: $a.Default, src: u }),
            /* @__PURE__ */ k.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ k.jsx(
                "span",
                {
                  className: "truncate mr-2",
                  title: ((f = l == null ? void 0 : l.persona) == null ? void 0 : f.name) || Ve("common.fallback.noName"),
                  children: ((g = l == null ? void 0 : l.persona) == null ? void 0 : g.name) || Ve("common.fallback.noName")
                }
              ),
              ((c == null ? void 0 : c.length) ?? 0) > 1 && /* @__PURE__ */ k.jsx(
                ai,
                {
                  size: "xxs",
                  className: `transform transition-transform ${a ? "rotate-180" : ""}`,
                  name: "arrow-down",
                  "aria-label": Ve("home.assistantSelect.selectAssistant")
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
var Wl = function(t, n, r) {
  var i = document.head || document.getElementsByTagName("head")[0], a = document.createElement("script");
  typeof n == "function" && (r = n, n = {}), n = n || {}, r = r || function() {
  }, a.type = n.type || "text/javascript", a.charset = n.charset || "utf8", a.async = "async" in n ? !!n.async : !0, a.src = t, n.attrs && ql(a, n.attrs), n.text && (a.text = "" + n.text);
  var s = "onload" in a ? Pi : Yl;
  s(a, r), a.onload || Pi(a, r), i.appendChild(a);
};
function ql(e, t) {
  for (var n in t)
    e.setAttribute(n, t[n]);
}
function Pi(e, t) {
  e.onload = function() {
    this.onerror = this.onload = null, t(null, e);
  }, e.onerror = function() {
    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e);
  };
}
function Yl(e, t) {
  e.onreadystatechange = function() {
    this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, t(null, e));
  };
}
var Xl = function(t) {
  return Ql(t) && !Jl(t);
};
function Ql(e) {
  return !!e && typeof e == "object";
}
function Jl(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || nc(e);
}
var ec = typeof Symbol == "function" && Symbol.for, tc = ec ? Symbol.for("react.element") : 60103;
function nc(e) {
  return e.$$typeof === tc;
}
function rc(e) {
  return Array.isArray(e) ? [] : {};
}
function xn(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? nn(rc(e), e, t) : e;
}
function ic(e, t, n) {
  return e.concat(t).map(function(r) {
    return xn(r, n);
  });
}
function ac(e, t) {
  if (!t.customMerge)
    return nn;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : nn;
}
function sc(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Fi(e) {
  return Object.keys(e).concat(sc(e));
}
function Za(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function oc(e, t) {
  return Za(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function lc(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && Fi(e).forEach(function(i) {
    r[i] = xn(e[i], n);
  }), Fi(t).forEach(function(i) {
    oc(e, i) || (Za(e, i) && n.isMergeableObject(t[i]) ? r[i] = ac(i, n)(e[i], t[i], n) : r[i] = xn(t[i], n));
  }), r;
}
function nn(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || ic, n.isMergeableObject = n.isMergeableObject || Xl, n.cloneUnlessOtherwiseSpecified = xn;
  var r = Array.isArray(t), i = Array.isArray(e), a = r === i;
  return a ? r ? n.arrayMerge(e, t, n) : lc(e, t, n) : xn(t, n);
}
nn.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return nn(r, i, n);
  }, {});
};
var cc = nn, Ka = cc, uc = Object.create, _r = Object.defineProperty, dc = Object.getOwnPropertyDescriptor, fc = Object.getOwnPropertyNames, pc = Object.getPrototypeOf, mc = Object.prototype.hasOwnProperty, gc = (e, t) => {
  for (var n in t)
    _r(e, n, { get: t[n], enumerable: !0 });
}, Ga = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of fc(t))
      !mc.call(e, i) && i !== n && _r(e, i, { get: () => t[i], enumerable: !(r = dc(t, i)) || r.enumerable });
  return e;
}, ci = (e, t, n) => (n = e != null ? uc(pc(e)) : {}, Ga(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? _r(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), hc = (e) => Ga(_r({}, "__esModule", { value: !0 }), e), Wa = {};
gc(Wa, {
  callPlayer: () => Ic,
  getConfig: () => Cc,
  getSDK: () => Oc,
  isBlobUrl: () => Dc,
  isMediaStream: () => Mc,
  lazy: () => Ec,
  omit: () => Rc,
  parseEndTime: () => Sc,
  parseStartTime: () => Tc,
  queryString: () => Ac,
  randomString: () => Nc,
  supportsWebKitPresentationMode: () => Lc
});
var yr = hc(Wa), bc = ci(D), _c = ci(Wl), yc = ci(Ka);
const Ec = (e) => bc.default.lazy(async () => {
  const t = await e();
  return typeof t.default == "function" ? t : t.default;
}), vc = /[?&#](?:start|t)=([0-9hms]+)/, wc = /[?&#]end=([0-9hms]+)/, Zr = /(\d+)(h|m|s)/g, xc = /^\d+$/;
function qa(e, t) {
  if (e instanceof Array)
    return;
  const n = e.match(t);
  if (n) {
    const r = n[1];
    if (r.match(Zr))
      return kc(r);
    if (xc.test(r))
      return parseInt(r);
  }
}
function kc(e) {
  let t = 0, n = Zr.exec(e);
  for (; n !== null; ) {
    const [, r, i] = n;
    i === "h" && (t += parseInt(r, 10) * 60 * 60), i === "m" && (t += parseInt(r, 10) * 60), i === "s" && (t += parseInt(r, 10)), n = Zr.exec(e);
  }
  return t;
}
function Tc(e) {
  return qa(e, vc);
}
function Sc(e) {
  return qa(e, wc);
}
function Nc() {
  return Math.random().toString(36).substr(2, 5);
}
function Ac(e) {
  return Object.keys(e).map((t) => `${t}=${e[t]}`).join("&");
}
function Ir(e) {
  return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null;
}
const Ht = {}, Oc = function(t, n, r = null, i = () => !0, a = _c.default) {
  const s = Ir(n);
  return s && i(s) ? Promise.resolve(s) : new Promise((o, l) => {
    if (Ht[t]) {
      Ht[t].push({ resolve: o, reject: l });
      return;
    }
    Ht[t] = [{ resolve: o, reject: l }];
    const c = (u) => {
      Ht[t].forEach((d) => d.resolve(u));
    };
    if (r) {
      const u = window[r];
      window[r] = function() {
        u && u(), c(Ir(n));
      };
    }
    a(t, (u) => {
      u ? (Ht[t].forEach((d) => d.reject(u)), Ht[t] = null) : r || c(Ir(n));
    });
  });
};
function Cc(e, t) {
  return (0, yc.default)(t.config, e.config);
}
function Rc(e, ...t) {
  const n = [].concat(...t), r = {}, i = Object.keys(e);
  for (const a of i)
    n.indexOf(a) === -1 && (r[a] = e[a]);
  return r;
}
function Ic(e, ...t) {
  if (!this.player || !this.player[e]) {
    let n = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;
    return this.player ? this.player[e] || (n += "The method was not available") : n += "The player was not available", console.warn(n, "font-weight: bold", ""), null;
  }
  return this.player[e](...t);
}
function Mc(e) {
  return typeof window < "u" && typeof window.MediaStream < "u" && e instanceof window.MediaStream;
}
function Dc(e) {
  return /^blob:/.test(e);
}
function Lc(e = document.createElement("video")) {
  const t = /iPhone|iPod/.test(navigator.userAgent) === !1;
  return e.webkitSupportsPresentationMode && typeof e.webkitSetPresentationMode == "function" && t;
}
var ui = Object.defineProperty, Pc = Object.getOwnPropertyDescriptor, Fc = Object.getOwnPropertyNames, Bc = Object.prototype.hasOwnProperty, Uc = (e, t) => {
  for (var n in t)
    ui(e, n, { get: t[n], enumerable: !0 });
}, $c = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Fc(t))
      !Bc.call(e, i) && i !== n && ui(e, i, { get: () => t[i], enumerable: !(r = Pc(t, i)) || r.enumerable });
  return e;
}, zc = (e) => $c(ui({}, "__esModule", { value: !0 }), e), Ya = {};
Uc(Ya, {
  AUDIO_EXTENSIONS: () => di,
  DASH_EXTENSIONS: () => us,
  FLV_EXTENSIONS: () => ds,
  HLS_EXTENSIONS: () => pi,
  MATCH_URL_DAILYMOTION: () => ss,
  MATCH_URL_FACEBOOK: () => es,
  MATCH_URL_FACEBOOK_WATCH: () => ts,
  MATCH_URL_KALTURA: () => cs,
  MATCH_URL_MIXCLOUD: () => os,
  MATCH_URL_MUX: () => Ja,
  MATCH_URL_SOUNDCLOUD: () => Xa,
  MATCH_URL_STREAMABLE: () => ns,
  MATCH_URL_TWITCH_CHANNEL: () => as,
  MATCH_URL_TWITCH_VIDEO: () => is,
  MATCH_URL_VIDYARD: () => ls,
  MATCH_URL_VIMEO: () => Qa,
  MATCH_URL_WISTIA: () => rs,
  MATCH_URL_YOUTUBE: () => Kr,
  VIDEO_EXTENSIONS: () => fi,
  canPlay: () => Hc
});
var Vc = zc(Ya), Bi = yr;
const Kr = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//, Xa = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/, Qa = /vimeo\.com\/(?!progressive_redirect).+/, Ja = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/, es = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/, ts = /^https?:\/\/fb\.watch\/.+$/, ns = /streamable\.com\/([a-z0-9]+)$/, rs = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/, is = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/, as = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/, ss = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/, os = /mixcloud\.com\/([^/]+\/[^/]+)/, ls = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/, cs = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/, di = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i, fi = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i, pi = /\.(m3u8)($|\?)/i, us = /\.(mpd)($|\?)/i, ds = /\.(flv)($|\?)/i, Gr = (e) => {
  if (e instanceof Array) {
    for (const t of e)
      if (typeof t == "string" && Gr(t) || Gr(t.src))
        return !0;
    return !1;
  }
  return (0, Bi.isMediaStream)(e) || (0, Bi.isBlobUrl)(e) ? !0 : di.test(e) || fi.test(e) || pi.test(e) || us.test(e) || ds.test(e);
}, Hc = {
  youtube: (e) => e instanceof Array ? e.every((t) => Kr.test(t)) : Kr.test(e),
  soundcloud: (e) => Xa.test(e) && !di.test(e),
  vimeo: (e) => Qa.test(e) && !fi.test(e) && !pi.test(e),
  mux: (e) => Ja.test(e),
  facebook: (e) => es.test(e) || ts.test(e),
  streamable: (e) => ns.test(e),
  wistia: (e) => rs.test(e),
  twitch: (e) => is.test(e) || as.test(e),
  dailymotion: (e) => ss.test(e),
  mixcloud: (e) => os.test(e),
  vidyard: (e) => ls.test(e),
  kaltura: (e) => cs.test(e),
  file: Gr
};
var mi = Object.defineProperty, jc = Object.getOwnPropertyDescriptor, Zc = Object.getOwnPropertyNames, Kc = Object.prototype.hasOwnProperty, Gc = (e, t) => {
  for (var n in t)
    mi(e, n, { get: t[n], enumerable: !0 });
}, Wc = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Zc(t))
      !Kc.call(e, i) && i !== n && mi(e, i, { get: () => t[i], enumerable: !(r = jc(t, i)) || r.enumerable });
  return e;
}, qc = (e) => Wc(mi({}, "__esModule", { value: !0 }), e), fs = {};
Gc(fs, {
  default: () => Xc
});
var Yc = qc(fs), Le = yr, Oe = Vc, Xc = [
  {
    key: "youtube",
    name: "YouTube",
    canPlay: Oe.canPlay.youtube,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerYouTube' */
      "./YouTube-9tx2DSM_.js"
    ).then((e) => e.Y))
  },
  {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: Oe.canPlay.soundcloud,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerSoundCloud' */
      "./SoundCloud-Dm4x6ZqH.js"
    ).then((e) => e.S))
  },
  {
    key: "vimeo",
    name: "Vimeo",
    canPlay: Oe.canPlay.vimeo,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerVimeo' */
      "./Vimeo-BiJMeLlw.js"
    ).then((e) => e.V))
  },
  {
    key: "mux",
    name: "Mux",
    canPlay: Oe.canPlay.mux,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerMux' */
      "./Mux-BH8kt47n.js"
    ).then((e) => e.M))
  },
  {
    key: "facebook",
    name: "Facebook",
    canPlay: Oe.canPlay.facebook,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerFacebook' */
      "./Facebook-DxO1zaGd.js"
    ).then((e) => e.F))
  },
  {
    key: "streamable",
    name: "Streamable",
    canPlay: Oe.canPlay.streamable,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerStreamable' */
      "./Streamable-aTKAm3nB.js"
    ).then((e) => e.S))
  },
  {
    key: "wistia",
    name: "Wistia",
    canPlay: Oe.canPlay.wistia,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerWistia' */
      "./Wistia-DnXxHGvb.js"
    ).then((e) => e.W))
  },
  {
    key: "twitch",
    name: "Twitch",
    canPlay: Oe.canPlay.twitch,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerTwitch' */
      "./Twitch-CsnT2-2Z.js"
    ).then((e) => e.T))
  },
  {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: Oe.canPlay.dailymotion,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerDailyMotion' */
      "./DailyMotion-DBZtgtLv.js"
    ).then((e) => e.D))
  },
  {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: Oe.canPlay.mixcloud,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerMixcloud' */
      "./Mixcloud-DBBuQ38g.js"
    ).then((e) => e.M))
  },
  {
    key: "vidyard",
    name: "Vidyard",
    canPlay: Oe.canPlay.vidyard,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerVidyard' */
      "./Vidyard-Cesvb9G_.js"
    ).then((e) => e.V))
  },
  {
    key: "kaltura",
    name: "Kaltura",
    canPlay: Oe.canPlay.kaltura,
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerKaltura' */
      "./Kaltura-CK4bT8lD.js"
    ).then((e) => e.K))
  },
  {
    key: "file",
    name: "FilePlayer",
    canPlay: Oe.canPlay.file,
    canEnablePIP: (e) => Oe.canPlay.file(e) && (document.pictureInPictureEnabled || (0, Le.supportsWebKitPresentationMode)()) && !Oe.AUDIO_EXTENSIONS.test(e),
    lazyPlayer: (0, Le.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerFilePlayer' */
      "./FilePlayer-nOFQYJ50.js"
    ).then((e) => e.F))
  }
], Ui = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Qc(e, t) {
  return !!(e === t || Ui(e) && Ui(t));
}
function Jc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Qc(e[n], t[n]))
      return !1;
  return !0;
}
function eu(e, t) {
  t === void 0 && (t = Jc);
  var n, r = [], i, a = !1;
  function s() {
    for (var o = [], l = 0; l < arguments.length; l++)
      o[l] = arguments[l];
    return a && n === this && t(o, r) || (i = e.apply(this, o), a = !0, n = this, r = o), i;
  }
  return s;
}
const tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eu
}, Symbol.toStringTag, { value: "Module" })), nu = /* @__PURE__ */ vl(tu);
var ru = typeof Element < "u", iu = typeof Map == "function", au = typeof Set == "function", su = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function nr(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!nr(e[r], t[r])) return !1;
      return !0;
    }
    var a;
    if (iu && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!nr(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (au && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (su && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (ru && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !nr(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var ps = function(t, n) {
  try {
    return nr(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, ms = { exports: {} }, ou = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", lu = ou, cu = lu;
function gs() {
}
function hs() {
}
hs.resetWarningCache = gs;
var uu = function() {
  function e(r, i, a, s, o, l) {
    if (l !== cu) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw c.name = "Invariant Violation", c;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: hs,
    resetWarningCache: gs
  };
  return n.PropTypes = n, n;
};
ms.exports = uu();
var du = ms.exports, fu = Object.create, Er = Object.defineProperty, pu = Object.getOwnPropertyDescriptor, mu = Object.getOwnPropertyNames, gu = Object.getPrototypeOf, hu = Object.prototype.hasOwnProperty, bu = (e, t) => {
  for (var n in t)
    Er(e, n, { get: t[n], enumerable: !0 });
}, bs = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of mu(t))
      !hu.call(e, i) && i !== n && Er(e, i, { get: () => t[i], enumerable: !(r = pu(t, i)) || r.enumerable });
  return e;
}, _u = (e, t, n) => (n = e != null ? fu(gu(e)) : {}, bs(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Er(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), yu = (e) => bs(Er({}, "__esModule", { value: !0 }), e), _s = {};
bu(_s, {
  defaultProps: () => wu,
  propTypes: () => vu
});
var ys = yu(_s), Eu = _u(du);
const { string: xe, bool: Ce, number: jt, array: Mr, oneOfType: fn, shape: Be, object: Te, func: ye, node: $i } = Eu.default, vu = {
  url: fn([xe, Mr, Te]),
  playing: Ce,
  loop: Ce,
  controls: Ce,
  volume: jt,
  muted: Ce,
  playbackRate: jt,
  width: fn([xe, jt]),
  height: fn([xe, jt]),
  style: Te,
  progressInterval: jt,
  playsinline: Ce,
  pip: Ce,
  stopOnUnmount: Ce,
  light: fn([Ce, xe, Te]),
  playIcon: $i,
  previewTabIndex: jt,
  previewAriaLabel: xe,
  fallback: $i,
  oEmbedUrl: xe,
  wrapper: fn([
    xe,
    ye,
    Be({ render: ye.isRequired })
  ]),
  config: Be({
    soundcloud: Be({
      options: Te
    }),
    youtube: Be({
      playerVars: Te,
      embedOptions: Te,
      onUnstarted: ye
    }),
    facebook: Be({
      appId: xe,
      version: xe,
      playerId: xe,
      attributes: Te
    }),
    dailymotion: Be({
      params: Te
    }),
    vimeo: Be({
      playerOptions: Te,
      title: xe
    }),
    mux: Be({
      attributes: Te,
      version: xe
    }),
    file: Be({
      attributes: Te,
      tracks: Mr,
      forceVideo: Ce,
      forceAudio: Ce,
      forceHLS: Ce,
      forceSafariHLS: Ce,
      forceDisableHls: Ce,
      forceDASH: Ce,
      forceFLV: Ce,
      hlsOptions: Te,
      hlsVersion: xe,
      dashVersion: xe,
      flvVersion: xe
    }),
    wistia: Be({
      options: Te,
      playerId: xe,
      customControls: Mr
    }),
    mixcloud: Be({
      options: Te
    }),
    twitch: Be({
      options: Te,
      playerId: xe
    }),
    vidyard: Be({
      options: Te
    })
  }),
  onReady: ye,
  onStart: ye,
  onPlay: ye,
  onPause: ye,
  onBuffer: ye,
  onBufferEnd: ye,
  onEnded: ye,
  onError: ye,
  onDuration: ye,
  onSeek: ye,
  onPlaybackRateChange: ye,
  onPlaybackQualityChange: ye,
  onProgress: ye,
  onClickPreview: ye,
  onEnablePIP: ye,
  onDisablePIP: ye
}, ke = () => {
}, wu = {
  playing: !1,
  loop: !1,
  controls: !1,
  volume: null,
  muted: !1,
  playbackRate: 1,
  width: "640px",
  height: "360px",
  style: {},
  progressInterval: 1e3,
  playsinline: !1,
  pip: !1,
  stopOnUnmount: !0,
  light: !1,
  fallback: null,
  wrapper: "div",
  previewTabIndex: 0,
  previewAriaLabel: "",
  oEmbedUrl: "https://noembed.com/embed?url={url}",
  config: {
    soundcloud: {
      options: {
        visual: !0,
        // Undocumented, but makes player fill container and look better
        buying: !1,
        liking: !1,
        download: !1,
        sharing: !1,
        show_comments: !1,
        show_playcount: !1
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: ke
    },
    facebook: {
      appId: "1309697205772819",
      version: "v3.3",
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        "endscreen-enable": !1
      }
    },
    vimeo: {
      playerOptions: {
        autopause: !1,
        byline: !1,
        portrait: !1,
        title: !1
      },
      title: null
    },
    mux: {
      attributes: {},
      version: "2"
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: !1,
      forceAudio: !1,
      forceHLS: !1,
      forceDASH: !1,
      forceFLV: !1,
      hlsOptions: {},
      hlsVersion: "1.1.4",
      dashVersion: "3.1.3",
      flvVersion: "1.5.0",
      forceDisableHls: !1
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: ke,
  onStart: ke,
  onPlay: ke,
  onPause: ke,
  onBuffer: ke,
  onBufferEnd: ke,
  onEnded: ke,
  onError: ke,
  onDuration: ke,
  onSeek: ke,
  onPlaybackRateChange: ke,
  onPlaybackQualityChange: ke,
  onProgress: ke,
  onClickPreview: ke,
  onEnablePIP: ke,
  onDisablePIP: ke
};
var xu = Object.create, Vn = Object.defineProperty, ku = Object.getOwnPropertyDescriptor, Tu = Object.getOwnPropertyNames, Su = Object.getPrototypeOf, Nu = Object.prototype.hasOwnProperty, Au = (e, t, n) => t in e ? Vn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ou = (e, t) => {
  for (var n in t)
    Vn(e, n, { get: t[n], enumerable: !0 });
}, Es = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Tu(t))
      !Nu.call(e, i) && i !== n && Vn(e, i, { get: () => t[i], enumerable: !(r = ku(t, i)) || r.enumerable });
  return e;
}, vs = (e, t, n) => (n = e != null ? xu(Su(e)) : {}, Es(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Vn(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), Cu = (e) => Es(Vn({}, "__esModule", { value: !0 }), e), ge = (e, t, n) => (Au(e, typeof t != "symbol" ? t + "" : t, n), n), ws = {};
Ou(ws, {
  default: () => vr
});
var Ru = Cu(ws), zi = vs(D), Iu = vs(ps), xs = ys, Mu = yr;
const Du = 5e3;
class vr extends zi.Component {
  constructor() {
    super(...arguments), ge(this, "mounted", !1), ge(this, "isReady", !1), ge(this, "isPlaying", !1), ge(this, "isLoading", !0), ge(this, "loadOnReady", null), ge(this, "startOnPlay", !0), ge(this, "seekOnPlay", null), ge(this, "onDurationCalled", !1), ge(this, "handlePlayerMount", (t) => {
      if (this.player) {
        this.progress();
        return;
      }
      this.player = t, this.player.load(this.props.url), this.progress();
    }), ge(this, "getInternalPlayer", (t) => this.player ? this.player[t] : null), ge(this, "progress", () => {
      if (this.props.url && this.player && this.isReady) {
        const t = this.getCurrentTime() || 0, n = this.getSecondsLoaded(), r = this.getDuration();
        if (r) {
          const i = {
            playedSeconds: t,
            played: t / r
          };
          n !== null && (i.loadedSeconds = n, i.loaded = n / r), (i.playedSeconds !== this.prevPlayed || i.loadedSeconds !== this.prevLoaded) && this.props.onProgress(i), this.prevPlayed = i.playedSeconds, this.prevLoaded = i.loadedSeconds;
        }
      }
      this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
    }), ge(this, "handleReady", () => {
      if (!this.mounted)
        return;
      this.isReady = !0, this.isLoading = !1;
      const { onReady: t, playing: n, volume: r, muted: i } = this.props;
      t(), !i && r !== null && this.player.setVolume(r), this.loadOnReady ? (this.player.load(this.loadOnReady, !0), this.loadOnReady = null) : n && this.player.play(), this.handleDurationCheck();
    }), ge(this, "handlePlay", () => {
      this.isPlaying = !0, this.isLoading = !1;
      const { onStart: t, onPlay: n, playbackRate: r } = this.props;
      this.startOnPlay && (this.player.setPlaybackRate && r !== 1 && this.player.setPlaybackRate(r), t(), this.startOnPlay = !1), n(), this.seekOnPlay && (this.seekTo(this.seekOnPlay), this.seekOnPlay = null), this.handleDurationCheck();
    }), ge(this, "handlePause", (t) => {
      this.isPlaying = !1, this.isLoading || this.props.onPause(t);
    }), ge(this, "handleEnded", () => {
      const { activePlayer: t, loop: n, onEnded: r } = this.props;
      t.loopOnEnded && n && this.seekTo(0), n || (this.isPlaying = !1, r());
    }), ge(this, "handleError", (...t) => {
      this.isLoading = !1, this.props.onError(...t);
    }), ge(this, "handleDurationCheck", () => {
      clearTimeout(this.durationCheckTimeout);
      const t = this.getDuration();
      t ? this.onDurationCalled || (this.props.onDuration(t), this.onDurationCalled = !0) : this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
    }), ge(this, "handleLoaded", () => {
      this.isLoading = !1;
    });
  }
  componentDidMount() {
    this.mounted = !0;
  }
  componentWillUnmount() {
    clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1;
  }
  componentDidUpdate(t) {
    if (!this.player)
      return;
    const { url: n, playing: r, volume: i, muted: a, playbackRate: s, pip: o, loop: l, activePlayer: c, disableDeferredLoading: u } = this.props;
    if (!(0, Iu.default)(t.url, n)) {
      if (this.isLoading && !c.forceLoad && !u && !(0, Mu.isMediaStream)(n)) {
        console.warn(`ReactPlayer: the attempt to load ${n} is being deferred until the player has loaded`), this.loadOnReady = n;
        return;
      }
      this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(n, this.isReady);
    }
    !t.playing && r && !this.isPlaying && this.player.play(), t.playing && !r && this.isPlaying && this.player.pause(), !t.pip && o && this.player.enablePIP && this.player.enablePIP(), t.pip && !o && this.player.disablePIP && this.player.disablePIP(), t.volume !== i && i !== null && this.player.setVolume(i), t.muted !== a && (a ? this.player.mute() : (this.player.unmute(), i !== null && setTimeout(() => this.player.setVolume(i)))), t.playbackRate !== s && this.player.setPlaybackRate && this.player.setPlaybackRate(s), t.loop !== l && this.player.setLoop && this.player.setLoop(l);
  }
  getDuration() {
    return this.isReady ? this.player.getDuration() : null;
  }
  getCurrentTime() {
    return this.isReady ? this.player.getCurrentTime() : null;
  }
  getSecondsLoaded() {
    return this.isReady ? this.player.getSecondsLoaded() : null;
  }
  seekTo(t, n, r) {
    if (!this.isReady) {
      t !== 0 && (this.seekOnPlay = t, setTimeout(() => {
        this.seekOnPlay = null;
      }, Du));
      return;
    }
    if (n ? n === "fraction" : t > 0 && t < 1) {
      const a = this.player.getDuration();
      if (!a) {
        console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
        return;
      }
      this.player.seekTo(a * t, r);
      return;
    }
    this.player.seekTo(t, r);
  }
  render() {
    const t = this.props.activePlayer;
    return t ? /* @__PURE__ */ zi.default.createElement(
      t,
      {
        ...this.props,
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }
    ) : null;
  }
}
ge(vr, "displayName", "Player");
ge(vr, "propTypes", xs.propTypes);
ge(vr, "defaultProps", xs.defaultProps);
var Lu = Object.create, Hn = Object.defineProperty, Pu = Object.getOwnPropertyDescriptor, Fu = Object.getOwnPropertyNames, Bu = Object.getPrototypeOf, Uu = Object.prototype.hasOwnProperty, $u = (e, t, n) => t in e ? Hn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zu = (e, t) => {
  for (var n in t)
    Hn(e, n, { get: t[n], enumerable: !0 });
}, ks = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Fu(t))
      !Uu.call(e, i) && i !== n && Hn(e, i, { get: () => t[i], enumerable: !(r = Pu(t, i)) || r.enumerable });
  return e;
}, jn = (e, t, n) => (n = e != null ? Lu(Bu(e)) : {}, ks(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Hn(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), Vu = (e) => ks(Hn({}, "__esModule", { value: !0 }), e), me = (e, t, n) => ($u(e, typeof t != "symbol" ? t + "" : t, n), n), Ts = {};
zu(Ts, {
  createReactPlayer: () => Xu
});
var Hu = Vu(Ts), Gt = jn(D), ju = jn(Ka), Dr = jn(nu), Vi = jn(ps), bn = ys, Ss = yr, Zu = jn(Ru);
const Ku = (0, Ss.lazy)(() => import(
  /* webpackChunkName: 'reactPlayerPreview' */
  "./Preview-Tzz-SXxK.js"
).then((e) => e.P)), Gu = typeof window < "u" && window.document && typeof document < "u", Wu = typeof Rr < "u" && Rr.window && Rr.window.document, qu = Object.keys(bn.propTypes), Yu = Gu || Wu ? Gt.Suspense : () => null, pn = [], Xu = (e, t) => {
  var n;
  return n = class extends Gt.Component {
    constructor() {
      super(...arguments), me(this, "state", {
        showPreview: !!this.props.light
      }), me(this, "references", {
        wrapper: (r) => {
          this.wrapper = r;
        },
        player: (r) => {
          this.player = r;
        }
      }), me(this, "handleClickPreview", (r) => {
        this.setState({ showPreview: !1 }), this.props.onClickPreview(r);
      }), me(this, "showPreview", () => {
        this.setState({ showPreview: !0 });
      }), me(this, "getDuration", () => this.player ? this.player.getDuration() : null), me(this, "getCurrentTime", () => this.player ? this.player.getCurrentTime() : null), me(this, "getSecondsLoaded", () => this.player ? this.player.getSecondsLoaded() : null), me(this, "getInternalPlayer", (r = "player") => this.player ? this.player.getInternalPlayer(r) : null), me(this, "seekTo", (r, i, a) => {
        if (!this.player)
          return null;
        this.player.seekTo(r, i, a);
      }), me(this, "handleReady", () => {
        this.props.onReady(this);
      }), me(this, "getActivePlayer", (0, Dr.default)((r) => {
        for (const i of [...pn, ...e])
          if (i.canPlay(r))
            return i;
        return t || null;
      })), me(this, "getConfig", (0, Dr.default)((r, i) => {
        const { config: a } = this.props;
        return ju.default.all([
          bn.defaultProps.config,
          bn.defaultProps.config[i] || {},
          a,
          a[i] || {}
        ]);
      })), me(this, "getAttributes", (0, Dr.default)((r) => (0, Ss.omit)(this.props, qu))), me(this, "renderActivePlayer", (r) => {
        if (!r)
          return null;
        const i = this.getActivePlayer(r);
        if (!i)
          return null;
        const a = this.getConfig(r, i.key);
        return /* @__PURE__ */ Gt.default.createElement(
          Zu.default,
          {
            ...this.props,
            key: i.key,
            ref: this.references.player,
            config: a,
            activePlayer: i.lazyPlayer || i,
            onReady: this.handleReady
          }
        );
      });
    }
    shouldComponentUpdate(r, i) {
      return !(0, Vi.default)(this.props, r) || !(0, Vi.default)(this.state, i);
    }
    componentDidUpdate(r) {
      const { light: i } = this.props;
      !r.light && i && this.setState({ showPreview: !0 }), r.light && !i && this.setState({ showPreview: !1 });
    }
    renderPreview(r) {
      if (!r)
        return null;
      const { light: i, playIcon: a, previewTabIndex: s, oEmbedUrl: o, previewAriaLabel: l } = this.props;
      return /* @__PURE__ */ Gt.default.createElement(
        Ku,
        {
          url: r,
          light: i,
          playIcon: a,
          previewTabIndex: s,
          previewAriaLabel: l,
          oEmbedUrl: o,
          onClick: this.handleClickPreview
        }
      );
    }
    render() {
      const { url: r, style: i, width: a, height: s, fallback: o, wrapper: l } = this.props, { showPreview: c } = this.state, u = this.getAttributes(r), d = typeof l == "string" ? this.references.wrapper : void 0;
      return /* @__PURE__ */ Gt.default.createElement(l, { ref: d, style: { ...i, width: a, height: s }, ...u }, /* @__PURE__ */ Gt.default.createElement(Yu, { fallback: o }, c ? this.renderPreview(r) : this.renderActivePlayer(r)));
    }
  }, me(n, "displayName", "ReactPlayer"), me(n, "propTypes", bn.propTypes), me(n, "defaultProps", bn.defaultProps), me(n, "addCustomPlayer", (r) => {
    pn.push(r);
  }), me(n, "removeCustomPlayers", () => {
    pn.length = 0;
  }), me(n, "canPlay", (r) => {
    for (const i of [...pn, ...e])
      if (i.canPlay(r))
        return !0;
    return !1;
  }), me(n, "canEnablePIP", (r) => {
    for (const i of [...pn, ...e])
      if (i.canEnablePIP && i.canEnablePIP(r))
        return !0;
    return !1;
  }), n;
};
var Qu = Object.create, wr = Object.defineProperty, Ju = Object.getOwnPropertyDescriptor, ed = Object.getOwnPropertyNames, td = Object.getPrototypeOf, nd = Object.prototype.hasOwnProperty, rd = (e, t) => {
  for (var n in t)
    wr(e, n, { get: t[n], enumerable: !0 });
}, Ns = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of ed(t))
      !nd.call(e, i) && i !== n && wr(e, i, { get: () => t[i], enumerable: !(r = Ju(t, i)) || r.enumerable });
  return e;
}, id = (e, t, n) => (n = e != null ? Qu(td(e)) : {}, Ns(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? wr(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), ad = (e) => Ns(wr({}, "__esModule", { value: !0 }), e), As = {};
rd(As, {
  default: () => cd
});
var sd = ad(As), Wr = id(Yc), od = Hu;
const ld = Wr.default[Wr.default.length - 1];
var cd = (0, od.createReactPlayer)(Wr.default, ld);
const ud = /* @__PURE__ */ Pa(sd), Zn = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return md;
    if (typeof e == "function")
      return xr(e);
    if (typeof e == "object")
      return Array.isArray(e) ? dd(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        fd(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return pd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function dd(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Zn(e[n]);
  return xr(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function fd(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return xr(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let a;
    for (a in e)
      if (i[a] !== t[a]) return !1;
    return !0;
  }
}
function pd(e) {
  return xr(t);
  function t(n) {
    return n && n.type === e;
  }
}
function xr(e) {
  return t;
  function t(n, r, i) {
    return !!(gd(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function md() {
  return !0;
}
function gd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Hi = (
  // Note: overloads like this are needed to support optional generics.
  /**
   * @type {(
   *   (<Kind extends UnistParent, Check extends Test>(parent: Kind, index: Child<Kind> | number, test: Check) => Matches<Child<Kind>, Check> | undefined) &
   *   (<Kind extends UnistParent>(parent: Kind, index: Child<Kind> | number, test?: null | undefined) => Child<Kind> | undefined)
   * )}
   */
  /**
   * @param {UnistParent} parent
   * @param {UnistNode | number} index
   * @param {Test} [test]
   * @returns {UnistNode | undefined}
   */
  function(e, t, n) {
    const r = Zn(n);
    if (!e || !e.type || !e.children)
      throw new Error("Expected parent node");
    if (typeof t == "number") {
      if (t < 0 || t === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (t = e.children.indexOf(t), t < 0)
      throw new Error("Expected child node or index");
    for (; ++t < e.children.length; )
      if (r(e.children[t], t, e))
        return e.children[t];
  }
), Bt = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends TestFunction>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & Predicate<Condition, Element>) &
   *   (<Condition extends string>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & {tagName: Condition}) &
   *   ((test?: null | undefined) => (element?: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test | null | undefined} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return _d;
    if (typeof e == "string")
      return bd(e);
    if (typeof e == "object")
      return hd(e);
    if (typeof e == "function")
      return gi(e);
    throw new Error("Expected function, string, or array as `test`");
  }
);
function hd(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Bt(e[n]);
  return gi(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function bd(e) {
  return gi(t);
  function t(n) {
    return n.tagName === e;
  }
}
function gi(e) {
  return t;
  function t(n, r, i) {
    return !!(yd(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function _d(e) {
  return !!(e && typeof e == "object" && "type" in e && e.type === "element" && "tagName" in e && typeof e.tagName == "string");
}
function yd(e) {
  return e !== null && typeof e == "object" && "type" in e && "tagName" in e;
}
const ji = /\n/g, Zi = /[\t ]+/g, qr = Bt("br"), Ki = Bt(Nd), Ed = Bt("p"), Gi = Bt("tr"), vd = Bt([
  // List from: <https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements>
  "datalist",
  "head",
  "noembed",
  "noframes",
  "noscript",
  // Act as if we support scripting.
  "rp",
  "script",
  "style",
  "template",
  "title",
  // Hidden attribute.
  Sd,
  // From: <https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3>
  Ad
]), Os = Bt([
  "address",
  // Flow content
  "article",
  // Sections and headings
  "aside",
  // Sections and headings
  "blockquote",
  // Flow content
  "body",
  // Page
  "caption",
  // `table-caption`
  "center",
  // Flow content (legacy)
  "dd",
  // Lists
  "dialog",
  // Flow content
  "dir",
  // Lists (legacy)
  "dl",
  // Lists
  "dt",
  // Lists
  "div",
  // Flow content
  "figure",
  // Flow content
  "figcaption",
  // Flow content
  "footer",
  // Flow content
  "form,",
  // Flow content
  "h1",
  // Sections and headings
  "h2",
  // Sections and headings
  "h3",
  // Sections and headings
  "h4",
  // Sections and headings
  "h5",
  // Sections and headings
  "h6",
  // Sections and headings
  "header",
  // Flow content
  "hgroup",
  // Sections and headings
  "hr",
  // Flow content
  "html",
  // Page
  "legend",
  // Flow content
  "li",
  // Lists (as `display: list-item`)
  "listing",
  // Flow content (legacy)
  "main",
  // Flow content
  "menu",
  // Lists
  "nav",
  // Sections and headings
  "ol",
  // Lists
  "p",
  // Flow content
  "plaintext",
  // Flow content (legacy)
  "pre",
  // Flow content
  "section",
  // Sections and headings
  "ul",
  // Lists
  "xmp"
  // Flow content (legacy)
]);
function wd(e, t) {
  const n = t || {}, r = "children" in e ? e.children : [], i = Os(e), a = Is(e, {
    whitespace: n.whitespace || "normal"
  }), s = [];
  (e.type === "text" || e.type === "comment") && s.push(
    ...Rs(e, {
      breakBefore: !0,
      breakAfter: !0
    })
  );
  let o = -1;
  for (; ++o < r.length; )
    s.push(
      ...Cs(
        r[o],
        // @ts-expect-error: `tree` is a parent if we’re here.
        e,
        {
          whitespace: a,
          breakBefore: o ? void 0 : i,
          breakAfter: o < r.length - 1 ? qr(r[o + 1]) : i
        }
      )
    );
  const l = [];
  let c;
  for (o = -1; ++o < s.length; ) {
    const u = s[o];
    typeof u == "number" ? c !== void 0 && u > c && (c = u) : u && (c !== void 0 && c > -1 && l.push(`
`.repeat(c) || " "), c = -1, l.push(u));
  }
  return l.join("");
}
function Cs(e, t, n) {
  return e.type === "element" ? xd(e, t, n) : e.type === "text" ? n.whitespace === "normal" ? Rs(e, n) : kd(e) : [];
}
function xd(e, t, n) {
  const r = Is(e, n), i = e.children || [];
  let a = -1, s = [];
  if (vd(e))
    return s;
  let o, l;
  for (qr(e) || Gi(e) && // @ts-expect-error: something up with types of parents.
  Hi(t, e, Gi) ? l = `
` : Ed(e) ? (o = 2, l = 2) : Os(e) && (o = 1, l = 1); ++a < i.length; )
    s = s.concat(
      Cs(i[a], e, {
        whitespace: r,
        breakBefore: a ? void 0 : o,
        breakAfter: a < i.length - 1 ? qr(i[a + 1]) : l
      })
    );
  return Ki(e) && // @ts-expect-error: something up with types of parents.
  Hi(t, e, Ki) && s.push("	"), o && s.unshift(o), l && s.push(l), s;
}
function Rs(e, t) {
  const n = String(e.value), r = [], i = [];
  let a = 0;
  for (; a <= n.length; ) {
    ji.lastIndex = a;
    const l = ji.exec(n), c = l && "index" in l ? l.index : n.length;
    r.push(
      // Any sequence of collapsible spaces and tabs immediately preceding or
      // following a segment break is removed.
      Td(
        // […] ignoring bidi formatting characters (characters with the
        // Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
        // they were not there.
        n.slice(a, c).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        a === 0 ? t.breakBefore : !0,
        c === n.length ? t.breakAfter : !0
      )
    ), a = c + 1;
  }
  let s = -1, o;
  for (; ++s < r.length; )
    r[s].charCodeAt(r[s].length - 1) === 8203 || s < r.length - 1 && r[s + 1].charCodeAt(0) === 8203 ? (i.push(r[s]), o = void 0) : r[s] ? (typeof o == "number" && i.push(o), i.push(r[s]), o = 0) : (s === 0 || s === r.length - 1) && i.push(0);
  return i;
}
function kd(e) {
  return [String(e.value)];
}
function Td(e, t, n) {
  const r = [];
  let i = 0, a;
  for (; i < e.length; ) {
    Zi.lastIndex = i;
    const s = Zi.exec(e);
    a = s ? s.index : e.length, !i && !a && s && !t && r.push(""), i !== a && r.push(e.slice(i, a)), i = s ? a + s[0].length : a;
  }
  return i !== a && !n && r.push(""), r.join(" ");
}
function Is(e, t) {
  if (e.type === "element") {
    const n = e.properties || {};
    switch (e.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return n.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return n.noWrap ? "nowrap" : t.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  }
  return t.whitespace;
}
function Sd(e) {
  return !!(e.properties || {}).hidden;
}
function Nd(e) {
  return e.tagName === "td" || e.tagName === "th";
}
function Ad(e) {
  return e.tagName === "dialog" && !(e.properties || {}).open;
}
function Od(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", s = "(?!struct)(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", o = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  }, c = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, u = {
    className: "number",
    variants: [
      // Floating-point literal.
      {
        begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
      },
      // Integer literal.
      {
        begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
        // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
        // literal highlight actually makes it stand out more.
      }
    ],
    relevance: 0
  }, d = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(c, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      n,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, p = {
    className: "title",
    begin: t.optional(i) + e.IDENT_RE,
    relevance: 0
  }, f = t.optional(i) + e.IDENT_RE + "\\s*\\(", g = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ], h = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ], b = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "flat_map",
    "flat_set",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ], E = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ], N = {
    type: h,
    keyword: g,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: b
  }, I = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: E
    },
    begin: t.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      e.IDENT_RE,
      t.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  }, F = [
    I,
    d,
    o,
    n,
    e.C_BLOCK_COMMENT_MODE,
    u,
    c
  ], G = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: N,
    contains: F.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: N,
        contains: F.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, Z = {
    className: "function",
    begin: "(" + s + "[\\*&\\s]+)+" + f,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: N,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: N,
        relevance: 0
      },
      {
        begin: f,
        returnBegin: !0,
        contains: [p],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: !0,
        contains: [
          c,
          u
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: N,
        relevance: 0,
        contains: [
          n,
          e.C_BLOCK_COMMENT_MODE,
          c,
          u,
          o,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: N,
            relevance: 0,
            contains: [
              "self",
              n,
              e.C_BLOCK_COMMENT_MODE,
              c,
              u,
              o
            ]
          }
        ]
      },
      o,
      n,
      e.C_BLOCK_COMMENT_MODE,
      d
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: N,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      G,
      Z,
      I,
      F,
      [
        d,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: N,
          contains: [
            "self",
            o
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: N
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}
function Cd(e) {
  const t = {
    type: [
      "boolean",
      "byte",
      "word",
      "String"
    ],
    built_in: [
      "KeyboardController",
      "MouseController",
      "SoftwareSerial",
      "EthernetServer",
      "EthernetClient",
      "LiquidCrystal",
      "RobotControl",
      "GSMVoiceCall",
      "EthernetUDP",
      "EsploraTFT",
      "HttpClient",
      "RobotMotor",
      "WiFiClient",
      "GSMScanner",
      "FileSystem",
      "Scheduler",
      "GSMServer",
      "YunClient",
      "YunServer",
      "IPAddress",
      "GSMClient",
      "GSMModem",
      "Keyboard",
      "Ethernet",
      "Console",
      "GSMBand",
      "Esplora",
      "Stepper",
      "Process",
      "WiFiUDP",
      "GSM_SMS",
      "Mailbox",
      "USBHost",
      "Firmata",
      "PImage",
      "Client",
      "Server",
      "GSMPIN",
      "FileIO",
      "Bridge",
      "Serial",
      "EEPROM",
      "Stream",
      "Mouse",
      "Audio",
      "Servo",
      "File",
      "Task",
      "GPRS",
      "WiFi",
      "Wire",
      "TFT",
      "GSM",
      "SPI",
      "SD"
    ],
    _hints: [
      "setup",
      "loop",
      "runShellCommandAsynchronously",
      "analogWriteResolution",
      "retrieveCallingNumber",
      "printFirmwareVersion",
      "analogReadResolution",
      "sendDigitalPortPair",
      "noListenOnLocalhost",
      "readJoystickButton",
      "setFirmwareVersion",
      "readJoystickSwitch",
      "scrollDisplayRight",
      "getVoiceCallStatus",
      "scrollDisplayLeft",
      "writeMicroseconds",
      "delayMicroseconds",
      "beginTransmission",
      "getSignalStrength",
      "runAsynchronously",
      "getAsynchronously",
      "listenOnLocalhost",
      "getCurrentCarrier",
      "readAccelerometer",
      "messageAvailable",
      "sendDigitalPorts",
      "lineFollowConfig",
      "countryNameWrite",
      "runShellCommand",
      "readStringUntil",
      "rewindDirectory",
      "readTemperature",
      "setClockDivider",
      "readLightSensor",
      "endTransmission",
      "analogReference",
      "detachInterrupt",
      "countryNameRead",
      "attachInterrupt",
      "encryptionType",
      "readBytesUntil",
      "robotNameWrite",
      "readMicrophone",
      "robotNameRead",
      "cityNameWrite",
      "userNameWrite",
      "readJoystickY",
      "readJoystickX",
      "mouseReleased",
      "openNextFile",
      "scanNetworks",
      "noInterrupts",
      "digitalWrite",
      "beginSpeaker",
      "mousePressed",
      "isActionDone",
      "mouseDragged",
      "displayLogos",
      "noAutoscroll",
      "addParameter",
      "remoteNumber",
      "getModifiers",
      "keyboardRead",
      "userNameRead",
      "waitContinue",
      "processInput",
      "parseCommand",
      "printVersion",
      "readNetworks",
      "writeMessage",
      "blinkVersion",
      "cityNameRead",
      "readMessage",
      "setDataMode",
      "parsePacket",
      "isListening",
      "setBitOrder",
      "beginPacket",
      "isDirectory",
      "motorsWrite",
      "drawCompass",
      "digitalRead",
      "clearScreen",
      "serialEvent",
      "rightToLeft",
      "setTextSize",
      "leftToRight",
      "requestFrom",
      "keyReleased",
      "compassRead",
      "analogWrite",
      "interrupts",
      "WiFiServer",
      "disconnect",
      "playMelody",
      "parseFloat",
      "autoscroll",
      "getPINUsed",
      "setPINUsed",
      "setTimeout",
      "sendAnalog",
      "readSlider",
      "analogRead",
      "beginWrite",
      "createChar",
      "motorsStop",
      "keyPressed",
      "tempoWrite",
      "readButton",
      "subnetMask",
      "debugPrint",
      "macAddress",
      "writeGreen",
      "randomSeed",
      "attachGPRS",
      "readString",
      "sendString",
      "remotePort",
      "releaseAll",
      "mouseMoved",
      "background",
      "getXChange",
      "getYChange",
      "answerCall",
      "getResult",
      "voiceCall",
      "endPacket",
      "constrain",
      "getSocket",
      "writeJSON",
      "getButton",
      "available",
      "connected",
      "findUntil",
      "readBytes",
      "exitValue",
      "readGreen",
      "writeBlue",
      "startLoop",
      "IPAddress",
      "isPressed",
      "sendSysex",
      "pauseMode",
      "gatewayIP",
      "setCursor",
      "getOemKey",
      "tuneWrite",
      "noDisplay",
      "loadImage",
      "switchPIN",
      "onRequest",
      "onReceive",
      "changePIN",
      "playFile",
      "noBuffer",
      "parseInt",
      "overflow",
      "checkPIN",
      "knobRead",
      "beginTFT",
      "bitClear",
      "updateIR",
      "bitWrite",
      "position",
      "writeRGB",
      "highByte",
      "writeRed",
      "setSpeed",
      "readBlue",
      "noStroke",
      "remoteIP",
      "transfer",
      "shutdown",
      "hangCall",
      "beginSMS",
      "endWrite",
      "attached",
      "maintain",
      "noCursor",
      "checkReg",
      "checkPUK",
      "shiftOut",
      "isValid",
      "shiftIn",
      "pulseIn",
      "connect",
      "println",
      "localIP",
      "pinMode",
      "getIMEI",
      "display",
      "noBlink",
      "process",
      "getBand",
      "running",
      "beginSD",
      "drawBMP",
      "lowByte",
      "setBand",
      "release",
      "bitRead",
      "prepare",
      "pointTo",
      "readRed",
      "setMode",
      "noFill",
      "remove",
      "listen",
      "stroke",
      "detach",
      "attach",
      "noTone",
      "exists",
      "buffer",
      "height",
      "bitSet",
      "circle",
      "config",
      "cursor",
      "random",
      "IRread",
      "setDNS",
      "endSMS",
      "getKey",
      "micros",
      "millis",
      "begin",
      "print",
      "write",
      "ready",
      "flush",
      "width",
      "isPIN",
      "blink",
      "clear",
      "press",
      "mkdir",
      "rmdir",
      "close",
      "point",
      "yield",
      "image",
      "BSSID",
      "click",
      "delay",
      "read",
      "text",
      "move",
      "peek",
      "beep",
      "rect",
      "line",
      "open",
      "seek",
      "fill",
      "size",
      "turn",
      "stop",
      "home",
      "find",
      "step",
      "tone",
      "sqrt",
      "RSSI",
      "SSID",
      "end",
      "bit",
      "tan",
      "cos",
      "sin",
      "pow",
      "map",
      "abs",
      "max",
      "min",
      "get",
      "run",
      "put"
    ],
    literal: [
      "DIGITAL_MESSAGE",
      "FIRMATA_STRING",
      "ANALOG_MESSAGE",
      "REPORT_DIGITAL",
      "REPORT_ANALOG",
      "INPUT_PULLUP",
      "SET_PIN_MODE",
      "INTERNAL2V56",
      "SYSTEM_RESET",
      "LED_BUILTIN",
      "INTERNAL1V1",
      "SYSEX_START",
      "INTERNAL",
      "EXTERNAL",
      "DEFAULT",
      "OUTPUT",
      "INPUT",
      "HIGH",
      "LOW"
    ]
  }, n = Od(e), r = (
    /** @type {Record<string,any>} */
    n.keywords
  );
  return r.type = [
    ...r.type,
    ...t.type
  ], r.literal = [
    ...r.literal,
    ...t.literal
  ], r.built_in = [
    ...r.built_in,
    ...t.built_in
  ], r._hints = t._hints, n.name = "Arduino", n.aliases = ["ino"], n.supersetOf = "cpp", n;
}
function Rd(e) {
  const t = e.regex, n = {}, r = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      r
    ]
  });
  const i = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, a = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), s = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, o = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      i
    ]
  };
  i.contains.push(o);
  const l = {
    match: /\\"/
  }, c = {
    className: "string",
    begin: /'/,
    end: /'/
  }, u = {
    match: /\\'/
  }, d = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, p = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], f = e.SHEBANG({
    binary: `(${p.join("|")})`,
    relevance: 10
  }), g = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, h = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], b = [
    "true",
    "false"
  ], E = { match: /(\/[a-z._-]+)+/ }, v = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], O = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], N = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], I = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: h,
      literal: b,
      built_in: [
        ...v,
        ...O,
        // Shell modifiers
        "set",
        "shopt",
        ...N,
        ...I
      ]
    },
    contains: [
      f,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      g,
      d,
      a,
      s,
      E,
      o,
      l,
      c,
      u,
      n
    ]
  };
}
function Id(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", s = "(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", o = {
    className: "type",
    variants: [
      { begin: "\\b[a-z\\d_]*_t\\b" },
      { match: /\batomic_[a-z]{3,6}\b/ }
    ]
  }, c = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, u = {
    className: "number",
    variants: [
      { match: /\b(0b[01']+)/ },
      { match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
      { match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/ },
      { match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ }
    ],
    relevance: 0
  }, d = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(c, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      n,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, p = {
    className: "title",
    begin: t.optional(i) + e.IDENT_RE,
    relevance: 0
  }, f = t.optional(i) + e.IDENT_RE + "\\s*\\(", b = {
    keyword: [
      "asm",
      "auto",
      "break",
      "case",
      "continue",
      "default",
      "do",
      "else",
      "enum",
      "extern",
      "for",
      "fortran",
      "goto",
      "if",
      "inline",
      "register",
      "restrict",
      "return",
      "sizeof",
      "typeof",
      "typeof_unqual",
      "struct",
      "switch",
      "typedef",
      "union",
      "volatile",
      "while",
      "_Alignas",
      "_Alignof",
      "_Atomic",
      "_Generic",
      "_Noreturn",
      "_Static_assert",
      "_Thread_local",
      // aliases
      "alignas",
      "alignof",
      "noreturn",
      "static_assert",
      "thread_local",
      // not a C keyword but is, for all intents and purposes, treated exactly like one.
      "_Pragma"
    ],
    type: [
      "float",
      "double",
      "signed",
      "unsigned",
      "int",
      "short",
      "long",
      "char",
      "void",
      "_Bool",
      "_BitInt",
      "_Complex",
      "_Imaginary",
      "_Decimal32",
      "_Decimal64",
      "_Decimal96",
      "_Decimal128",
      "_Decimal64x",
      "_Decimal128x",
      "_Float16",
      "_Float32",
      "_Float64",
      "_Float128",
      "_Float32x",
      "_Float64x",
      "_Float128x",
      // modifiers
      "const",
      "static",
      "constexpr",
      // aliases
      "complex",
      "bool",
      "imaginary"
    ],
    literal: "true false NULL",
    // TODO: apply hinting work similar to what was done in cpp.js
    built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
  }, E = [
    d,
    o,
    n,
    e.C_BLOCK_COMMENT_MODE,
    u,
    c
  ], v = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: b,
    contains: E.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: b,
        contains: E.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, O = {
    begin: "(" + s + "[\\*&\\s]+)+" + f,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: b,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: b,
        relevance: 0
      },
      {
        begin: f,
        returnBegin: !0,
        contains: [e.inherit(p, { className: "title.function" })],
        relevance: 0
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: b,
        relevance: 0,
        contains: [
          n,
          e.C_BLOCK_COMMENT_MODE,
          c,
          u,
          o,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: b,
            relevance: 0,
            contains: [
              "self",
              n,
              e.C_BLOCK_COMMENT_MODE,
              c,
              u,
              o
            ]
          }
        ]
      },
      o,
      n,
      e.C_BLOCK_COMMENT_MODE,
      d
    ]
  };
  return {
    name: "C",
    aliases: ["h"],
    keywords: b,
    // Until differentiations are added between `c` and `cpp`, `c` will
    // not be auto-detected to avoid auto-detect conflicts between C and C++
    disableAutodetect: !0,
    illegal: "</",
    contains: [].concat(
      v,
      O,
      E,
      [
        d,
        {
          begin: e.IDENT_RE + "::",
          keywords: b
        },
        {
          className: "class",
          beginKeywords: "enum class struct union",
          end: /[{;:<>=]/,
          contains: [
            { beginKeywords: "final class struct" },
            e.TITLE_MODE
          ]
        }
      ]
    ),
    exports: {
      preprocessor: d,
      strings: c,
      keywords: b
    }
  };
}
function Md(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", s = "(?!struct)(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", o = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  }, c = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, u = {
    className: "number",
    variants: [
      // Floating-point literal.
      {
        begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
      },
      // Integer literal.
      {
        begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
        // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
        // literal highlight actually makes it stand out more.
      }
    ],
    relevance: 0
  }, d = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(c, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      n,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, p = {
    className: "title",
    begin: t.optional(i) + e.IDENT_RE,
    relevance: 0
  }, f = t.optional(i) + e.IDENT_RE + "\\s*\\(", g = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ], h = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ], b = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "flat_map",
    "flat_set",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ], E = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ], N = {
    type: h,
    keyword: g,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: b
  }, I = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: E
    },
    begin: t.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      e.IDENT_RE,
      t.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  }, F = [
    I,
    d,
    o,
    n,
    e.C_BLOCK_COMMENT_MODE,
    u,
    c
  ], G = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: N,
    contains: F.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: N,
        contains: F.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, Z = {
    className: "function",
    begin: "(" + s + "[\\*&\\s]+)+" + f,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: N,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: N,
        relevance: 0
      },
      {
        begin: f,
        returnBegin: !0,
        contains: [p],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: !0,
        contains: [
          c,
          u
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: N,
        relevance: 0,
        contains: [
          n,
          e.C_BLOCK_COMMENT_MODE,
          c,
          u,
          o,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: N,
            relevance: 0,
            contains: [
              "self",
              n,
              e.C_BLOCK_COMMENT_MODE,
              c,
              u,
              o
            ]
          }
        ]
      },
      o,
      n,
      e.C_BLOCK_COMMENT_MODE,
      d
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: N,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      G,
      Z,
      I,
      F,
      [
        d,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: N,
          contains: [
            "self",
            o
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: N
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}
function Dd(e) {
  const t = [
    "bool",
    "byte",
    "char",
    "decimal",
    "delegate",
    "double",
    "dynamic",
    "enum",
    "float",
    "int",
    "long",
    "nint",
    "nuint",
    "object",
    "sbyte",
    "short",
    "string",
    "ulong",
    "uint",
    "ushort"
  ], n = [
    "public",
    "private",
    "protected",
    "static",
    "internal",
    "protected",
    "abstract",
    "async",
    "extern",
    "override",
    "unsafe",
    "virtual",
    "new",
    "sealed",
    "partial"
  ], r = [
    "default",
    "false",
    "null",
    "true"
  ], i = [
    "abstract",
    "as",
    "base",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "do",
    "else",
    "event",
    "explicit",
    "extern",
    "finally",
    "fixed",
    "for",
    "foreach",
    "goto",
    "if",
    "implicit",
    "in",
    "interface",
    "internal",
    "is",
    "lock",
    "namespace",
    "new",
    "operator",
    "out",
    "override",
    "params",
    "private",
    "protected",
    "public",
    "readonly",
    "record",
    "ref",
    "return",
    "scoped",
    "sealed",
    "sizeof",
    "stackalloc",
    "static",
    "struct",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "unchecked",
    "unsafe",
    "using",
    "virtual",
    "void",
    "volatile",
    "while"
  ], a = [
    "add",
    "alias",
    "and",
    "ascending",
    "args",
    "async",
    "await",
    "by",
    "descending",
    "dynamic",
    "equals",
    "file",
    "from",
    "get",
    "global",
    "group",
    "init",
    "into",
    "join",
    "let",
    "nameof",
    "not",
    "notnull",
    "on",
    "or",
    "orderby",
    "partial",
    "record",
    "remove",
    "required",
    "scoped",
    "select",
    "set",
    "unmanaged",
    "value|0",
    "var",
    "when",
    "where",
    "with",
    "yield"
  ], s = {
    keyword: i.concat(a),
    built_in: t,
    literal: r
  }, o = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), l = {
    className: "number",
    variants: [
      { begin: "\\b(0b[01']+)" },
      { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
      { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
    ],
    relevance: 0
  }, c = {
    className: "string",
    begin: /"""("*)(?!")(.|\n)*?"""\1/,
    relevance: 1
  }, u = {
    className: "string",
    begin: '@"',
    end: '"',
    contains: [{ begin: '""' }]
  }, d = e.inherit(u, { illegal: /\n/ }), p = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: s
  }, f = e.inherit(p, { illegal: /\n/ }), g = {
    className: "string",
    begin: /\$"/,
    end: '"',
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, h = {
    className: "string",
    begin: /\$@"/,
    end: '"',
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      p
    ]
  }, b = e.inherit(h, {
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      f
    ]
  });
  p.contains = [
    h,
    g,
    u,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    l,
    e.C_BLOCK_COMMENT_MODE
  ], f.contains = [
    b,
    g,
    d,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    l,
    e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
  ];
  const E = { variants: [
    c,
    h,
    g,
    u,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ] }, v = {
    begin: "<",
    end: ">",
    contains: [
      { beginKeywords: "in out" },
      o
    ]
  }, O = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", N = {
    // prevents expressions like `@class` from incorrect flagging
    // `class` as a keyword
    begin: "@" + e.IDENT_RE,
    relevance: 0
  };
  return {
    name: "C#",
    aliases: [
      "cs",
      "c#"
    ],
    keywords: s,
    illegal: /::/,
    contains: [
      e.COMMENT(
        "///",
        "$",
        {
          returnBegin: !0,
          contains: [
            {
              className: "doctag",
              variants: [
                {
                  begin: "///",
                  relevance: 0
                },
                { begin: "<!--|-->" },
                {
                  begin: "</?",
                  end: ">"
                }
              ]
            }
          ]
        }
      ),
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
      },
      E,
      l,
      {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [
          { beginKeywords: "where class" },
          o,
          v,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          o,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "record",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          o,
          v,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // [Attributes("")]
        className: "meta",
        begin: "^\\s*\\[(?=[\\w])",
        excludeBegin: !0,
        end: "\\]",
        excludeEnd: !0,
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/
          }
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new return throw await else",
        relevance: 0
      },
      {
        className: "function",
        begin: "(" + O + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: s,
        contains: [
          // prevents these from being highlighted `title`
          {
            beginKeywords: n.join(" "),
            relevance: 0
          },
          {
            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: !0,
            contains: [
              e.TITLE_MODE,
              v
            ],
            relevance: 0
          },
          { match: /\(\)/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: s,
            relevance: 0,
            contains: [
              E,
              l,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      N
    ]
  };
}
const Ld = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), Pd = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], Fd = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], Bd = [
  ...Pd,
  ...Fd
], Ud = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), $d = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), zd = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), Vd = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function Hd(e) {
  const t = e.regex, n = Ld(e), r = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", a = /@-?\w[\w]*(-\w+)*/, s = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      n.BLOCK_COMMENT,
      r,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      n.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + s,
        relevance: 0
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + $d.join("|") + ")" },
          { begin: ":(:)?(" + zd.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Vd.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...o,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...o,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          n.FUNCTION_DISPATCH
        ]
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: a
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: i,
              attribute: Ud.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...o,
              n.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + Bd.join("|") + ")\\b"
      }
    ]
  };
}
function jd(e) {
  const t = e.regex;
  return {
    name: "Diff",
    aliases: ["patch"],
    contains: [
      {
        className: "meta",
        relevance: 10,
        match: t.either(
          /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
          /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
          /^--- +\d+,\d+ +----$/
        )
      },
      {
        className: "comment",
        variants: [
          {
            begin: t.either(
              /Index: /,
              /^index/,
              /={3,}/,
              /^-{3}/,
              /^\*{3} /,
              /^\+{3}/,
              /^diff --git/
            ),
            end: /$/
          },
          { match: /^\*{15}$/ }
        ]
      },
      {
        className: "addition",
        begin: /^\+/,
        end: /$/
      },
      {
        className: "deletion",
        begin: /^-/,
        end: /$/
      },
      {
        className: "addition",
        begin: /^!/,
        end: /$/
      }
    ]
  };
}
function Zd(e) {
  const a = {
    keyword: [
      "break",
      "case",
      "chan",
      "const",
      "continue",
      "default",
      "defer",
      "else",
      "fallthrough",
      "for",
      "func",
      "go",
      "goto",
      "if",
      "import",
      "interface",
      "map",
      "package",
      "range",
      "return",
      "select",
      "struct",
      "switch",
      "type",
      "var"
    ],
    type: [
      "bool",
      "byte",
      "complex64",
      "complex128",
      "error",
      "float32",
      "float64",
      "int8",
      "int16",
      "int32",
      "int64",
      "string",
      "uint8",
      "uint16",
      "uint32",
      "uint64",
      "int",
      "uint",
      "uintptr",
      "rune"
    ],
    literal: [
      "true",
      "false",
      "iota",
      "nil"
    ],
    built_in: [
      "append",
      "cap",
      "close",
      "complex",
      "copy",
      "imag",
      "len",
      "make",
      "new",
      "panic",
      "print",
      "println",
      "real",
      "recover",
      "delete"
    ]
  };
  return {
    name: "Go",
    aliases: ["golang"],
    keywords: a,
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "string",
        variants: [
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          {
            begin: "`",
            end: "`"
          }
        ]
      },
      {
        className: "number",
        variants: [
          {
            match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
            // hex without a present digit before . (making a digit afterwards required)
            relevance: 0
          },
          {
            match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
            // hex with a present digit before . (making a digit afterwards optional)
            relevance: 0
          },
          {
            match: /-?\b0[oO](_?[0-7])*i?/,
            // leading 0o octal
            relevance: 0
          },
          {
            match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
            // decimal without a present digit before . (making a digit afterwards required)
            relevance: 0
          },
          {
            match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
            // decimal with a present digit before . (making a digit afterwards optional)
            relevance: 0
          }
        ]
      },
      {
        begin: /:=/
        // relevance booster
      },
      {
        className: "function",
        beginKeywords: "func",
        end: "\\s*(\\{|$)",
        excludeEnd: !0,
        contains: [
          e.TITLE_MODE,
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: !0,
            keywords: a,
            illegal: /["']/
          }
        ]
      }
    ]
  };
}
function Kd(e) {
  const t = e.regex, n = /[_A-Za-z][_0-9A-Za-z]*/;
  return {
    name: "GraphQL",
    aliases: ["gql"],
    case_insensitive: !0,
    disableAutodetect: !1,
    keywords: {
      keyword: [
        "query",
        "mutation",
        "subscription",
        "type",
        "input",
        "schema",
        "directive",
        "interface",
        "union",
        "scalar",
        "fragment",
        "enum",
        "on"
      ],
      literal: [
        "true",
        "false",
        "null"
      ]
    },
    contains: [
      e.HASH_COMMENT_MODE,
      e.QUOTE_STRING_MODE,
      e.NUMBER_MODE,
      {
        scope: "punctuation",
        match: /[.]{3}/,
        relevance: 0
      },
      {
        scope: "punctuation",
        begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
        relevance: 0
      },
      {
        scope: "variable",
        begin: /\$/,
        end: /\W/,
        excludeEnd: !0,
        relevance: 0
      },
      {
        scope: "meta",
        match: /@\w+/,
        excludeEnd: !0
      },
      {
        scope: "symbol",
        begin: t.concat(n, t.lookahead(/\s*:/)),
        relevance: 0
      }
    ],
    illegal: [
      /[;<']/,
      /BEGIN/
    ]
  };
}
function Gd(e) {
  const t = e.regex, n = {
    className: "number",
    relevance: 0,
    variants: [
      { begin: /([+-]+)?[\d]+_[\d_]+/ },
      { begin: e.NUMBER_RE }
    ]
  }, r = e.COMMENT();
  r.variants = [
    {
      begin: /;/,
      end: /$/
    },
    {
      begin: /#/,
      end: /$/
    }
  ];
  const i = {
    className: "variable",
    variants: [
      { begin: /\$[\w\d"][\w\d_]*/ },
      { begin: /\$\{(.*?)\}/ }
    ]
  }, a = {
    className: "literal",
    begin: /\bon|off|true|false|yes|no\b/
  }, s = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: "'''",
        end: "'''",
        relevance: 10
      },
      {
        begin: '"""',
        end: '"""',
        relevance: 10
      },
      {
        begin: '"',
        end: '"'
      },
      {
        begin: "'",
        end: "'"
      }
    ]
  }, o = {
    begin: /\[/,
    end: /\]/,
    contains: [
      r,
      a,
      i,
      s,
      n,
      "self"
    ],
    relevance: 0
  }, l = /[A-Za-z0-9_-]+/, c = /"(\\"|[^"])*"/, u = /'[^']*'/, d = t.either(
    l,
    c,
    u
  ), p = t.concat(
    d,
    "(\\s*\\.\\s*",
    d,
    ")*",
    t.lookahead(/\s*=\s*[^#\s]/)
  );
  return {
    name: "TOML, also INI",
    aliases: ["toml"],
    case_insensitive: !0,
    illegal: /\S/,
    contains: [
      r,
      {
        className: "section",
        begin: /\[+/,
        end: /\]+/
      },
      {
        begin: p,
        className: "attr",
        starts: {
          end: /$/,
          contains: [
            r,
            o,
            a,
            i,
            s,
            n
          ]
        }
      }
    ]
  };
}
var Wt = "[0-9](_*[0-9])*", qn = `\\.(${Wt})`, Yn = "[0-9a-fA-F](_*[0-9a-fA-F])*", Wi = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${Wt})((${qn})|\\.)?|(${qn}))[eE][+-]?(${Wt})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${Wt})((${qn})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${qn})[fFdD]?\\b` },
    { begin: `\\b(${Wt})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${Yn})\\.?|(${Yn})?\\.(${Yn}))[pP][+-]?(${Wt})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${Yn})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function Ms(e, t, n) {
  return n === -1 ? "" : e.replace(t, (r) => Ms(e, t, n - 1));
}
function Wd(e) {
  const t = e.regex, n = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", r = n + Ms("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2), l = {
    keyword: [
      "synchronized",
      "abstract",
      "private",
      "var",
      "static",
      "if",
      "const ",
      "for",
      "while",
      "strictfp",
      "finally",
      "protected",
      "import",
      "native",
      "final",
      "void",
      "enum",
      "else",
      "break",
      "transient",
      "catch",
      "instanceof",
      "volatile",
      "case",
      "assert",
      "package",
      "default",
      "public",
      "try",
      "switch",
      "continue",
      "throws",
      "protected",
      "public",
      "private",
      "module",
      "requires",
      "exports",
      "do",
      "sealed",
      "yield",
      "permits",
      "goto",
      "when"
    ],
    literal: [
      "false",
      "true",
      "null"
    ],
    type: [
      "char",
      "boolean",
      "long",
      "float",
      "int",
      "byte",
      "short",
      "double"
    ],
    built_in: [
      "super",
      "this"
    ]
  }, c = {
    className: "meta",
    begin: "@" + n,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  }, u = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: l,
    relevance: 0,
    contains: [e.C_BLOCK_COMMENT_MODE],
    endsParent: !0
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: l,
    illegal: /<\/|#/,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/,
              relevance: 0
            },
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      // relevance boost
      {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      },
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [e.BACKSLASH_ESCAPE]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          n
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        // Exceptions for hyphenated keywords
        match: /non-sealed/,
        scope: "keyword"
      },
      {
        begin: [
          t.concat(/(?!else)/, n),
          /\s+/,
          n,
          /\s+/,
          /=(?!=)/
        ],
        className: {
          1: "type",
          3: "variable",
          5: "operator"
        }
      },
      {
        begin: [
          /record/,
          /\s+/,
          n
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          u,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new throw return else",
        relevance: 0
      },
      {
        begin: [
          "(?:" + r + "\\s+)",
          e.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: l,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: l,
            relevance: 0,
            contains: [
              c,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              Wi,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      Wi,
      c
    ]
  };
}
const qi = "[A-Za-z$_][0-9A-Za-z$_]*", qd = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Yd = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Ds = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Ls = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Ps = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Xd = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Qd = [].concat(
  Ps,
  Ds,
  Ls
);
function Jd(e) {
  const t = e.regex, n = (C, { after: W }) => {
    const ee = "</" + C[0].slice(1);
    return C.input.indexOf(ee, W) !== -1;
  }, r = qi, i = {
    begin: "<>",
    end: "</>"
  }, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (C, W) => {
      const ee = C[0].length + C.index, ae = C.input[ee];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        ae === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        ae === ","
      ) {
        W.ignoreMatch();
        return;
      }
      ae === ">" && (n(C, { after: ee }) || W.ignoreMatch());
      let ue;
      const De = C.input.substring(ee);
      if (ue = De.match(/^\s*=/)) {
        W.ignoreMatch();
        return;
      }
      if ((ue = De.match(/^\s+extends\s+/)) && ue.index === 0) {
        W.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: qi,
    keyword: qd,
    literal: Yd,
    built_in: Qd,
    "variable.language": Xd
  }, l = "[0-9](_?[0-9])*", c = `\\.(${l})`, u = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: o,
    contains: []
    // defined later
  }, f = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, h = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, b = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, v = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, O = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    f,
    g,
    h,
    b,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    d
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = O.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(O)
  });
  const N = [].concat(v, p.contains), I = N.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(N)
    }
  ]), F = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: I
  }, G = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, Z = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Ds,
        ...Ls
      ]
    }
  }, z = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, w = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [F],
    illegal: /%/
  }, le = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function H(C) {
    return t.concat("(?!", C.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      H([
        ...Ps,
        "super",
        "import"
      ].map((C) => `${C}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, J = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, re = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      F
    ]
  }, T = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", M = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(T)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      F
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: I, CLASS_REFERENCE: Z },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      z,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      f,
      g,
      h,
      b,
      v,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      d,
      Z,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      M,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          v,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: T,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: o,
                    contains: I
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: a },
              {
                begin: s.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": s.isTrulyOpeningTag,
                end: s.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: s.begin,
                end: s.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      w,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          F,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      J,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [F]
      },
      K,
      le,
      G,
      re,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function ef(e) {
  const t = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, n = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, r = [
    "true",
    "false",
    "null"
  ], i = {
    scope: "literal",
    beginKeywords: r.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: r
    },
    contains: [
      t,
      n,
      e.QUOTE_STRING_MODE,
      i,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
var qt = "[0-9](_*[0-9])*", Xn = `\\.(${qt})`, Qn = "[0-9a-fA-F](_*[0-9a-fA-F])*", tf = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${qt})((${Xn})|\\.)?|(${Xn}))[eE][+-]?(${qt})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${qt})((${Xn})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${Xn})[fFdD]?\\b` },
    { begin: `\\b(${qt})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${Qn})\\.?|(${Qn})?\\.(${Qn}))[pP][+-]?(${qt})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${Qn})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function nf(e) {
  const t = {
    keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
    built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
    literal: "true false null"
  }, n = {
    className: "keyword",
    begin: /\b(break|continue|return|this)\b/,
    starts: { contains: [
      {
        className: "symbol",
        begin: /@\w+/
      }
    ] }
  }, r = {
    className: "symbol",
    begin: e.UNDERSCORE_IDENT_RE + "@"
  }, i = {
    className: "subst",
    begin: /\$\{/,
    end: /\}/,
    contains: [e.C_NUMBER_MODE]
  }, a = {
    className: "variable",
    begin: "\\$" + e.UNDERSCORE_IDENT_RE
  }, s = {
    className: "string",
    variants: [
      {
        begin: '"""',
        end: '"""(?=[^"])',
        contains: [
          a,
          i
        ]
      },
      // Can't use built-in modes easily, as we want to use STRING in the meta
      // context as 'meta-string' and there's no syntax to remove explicitly set
      // classNames in built-in modes.
      {
        begin: "'",
        end: "'",
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: '"',
        end: '"',
        illegal: /\n/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          i
        ]
      }
    ]
  };
  i.contains.push(s);
  const o = {
    className: "meta",
    begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
  }, l = {
    className: "meta",
    begin: "@" + e.UNDERSCORE_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          e.inherit(s, { className: "string" }),
          "self"
        ]
      }
    ]
  }, c = tf, u = e.COMMENT(
    "/\\*",
    "\\*/",
    { contains: [e.C_BLOCK_COMMENT_MODE] }
  ), d = { variants: [
    {
      className: "type",
      begin: e.UNDERSCORE_IDENT_RE
    },
    {
      begin: /\(/,
      end: /\)/,
      contains: []
      // defined later
    }
  ] }, p = d;
  return p.variants[1].contains = [d], d.variants[1].contains = [p], {
    name: "Kotlin",
    aliases: [
      "kt",
      "kts"
    ],
    keywords: t,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      e.C_LINE_COMMENT_MODE,
      u,
      n,
      r,
      o,
      l,
      {
        className: "function",
        beginKeywords: "fun",
        end: "[(]|$",
        returnBegin: !0,
        excludeEnd: !0,
        keywords: t,
        relevance: 5,
        contains: [
          {
            begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
            returnBegin: !0,
            relevance: 0,
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          {
            className: "type",
            begin: /</,
            end: />/,
            keywords: "reified",
            relevance: 0
          },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: !0,
            keywords: t,
            relevance: 0,
            contains: [
              {
                begin: /:/,
                end: /[=,\/]/,
                endsWithParent: !0,
                contains: [
                  d,
                  e.C_LINE_COMMENT_MODE,
                  u
                ],
                relevance: 0
              },
              e.C_LINE_COMMENT_MODE,
              u,
              o,
              l,
              s,
              e.C_NUMBER_MODE
            ]
          },
          u
        ]
      },
      {
        begin: [
          /class|interface|trait/,
          /\s+/,
          e.UNDERSCORE_IDENT_RE
        ],
        beginScope: {
          3: "title.class"
        },
        keywords: "class interface trait",
        end: /[:\{(]|$/,
        excludeEnd: !0,
        illegal: "extends implements",
        contains: [
          { beginKeywords: "public protected internal private constructor" },
          e.UNDERSCORE_TITLE_MODE,
          {
            className: "type",
            begin: /</,
            end: />/,
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0
          },
          {
            className: "type",
            begin: /[,:]\s*/,
            end: /[<\(,){\s]|$/,
            excludeBegin: !0,
            returnEnd: !0
          },
          o,
          l
        ]
      },
      s,
      {
        className: "meta",
        begin: "^#!/usr/bin/env",
        end: "$",
        illegal: `
`
      },
      c
    ]
  };
}
const rf = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), af = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], sf = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], of = [
  ...af,
  ...sf
], lf = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), Fs = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), Bs = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), cf = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse(), uf = Fs.concat(Bs).sort().reverse();
function df(e) {
  const t = rf(e), n = uf, r = "and or not only", i = "[\\w-]+", a = "(" + i + "|@\\{" + i + "\\})", s = [], o = [], l = function(O) {
    return {
      // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
      className: "string",
      begin: "~?" + O + ".*?" + O
    };
  }, c = function(O, N, I) {
    return {
      className: O,
      begin: N,
      relevance: I
    };
  }, u = {
    $pattern: /[a-z-]+/,
    keyword: r,
    attribute: lf.join(" ")
  }, d = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: "\\(",
    end: "\\)",
    contains: o,
    keywords: u,
    relevance: 0
  };
  o.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    l("'"),
    l('"'),
    t.CSS_NUMBER_MODE,
    // fixme: it does not include dot for numbers like .5em :(
    {
      begin: "(url|data-uri)\\(",
      starts: {
        className: "string",
        end: "[\\)\\n]",
        excludeEnd: !0
      }
    },
    t.HEXCOLOR,
    d,
    c("variable", "@@?" + i, 10),
    c("variable", "@\\{" + i + "\\}"),
    c("built_in", "~?`[^`]*?`"),
    // inline javascript (or whatever host language) *multiline* string
    {
      // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
      className: "attribute",
      begin: i + "\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0
    },
    t.IMPORTANT,
    { beginKeywords: "and not" },
    t.FUNCTION_DISPATCH
  );
  const p = o.concat({
    begin: /\{/,
    end: /\}/,
    contains: s
  }), f = {
    beginKeywords: "when",
    endsWithParent: !0,
    contains: [{ beginKeywords: "and not" }].concat(o)
    // using this form to override VALUE’s 'function' match
  }, g = {
    begin: a + "\\s*:",
    returnBegin: !0,
    end: /[;}]/,
    relevance: 0,
    contains: [
      { begin: /-(webkit|moz|ms|o)-/ },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + cf.join("|") + ")\\b",
        end: /(?=:)/,
        starts: {
          endsWithParent: !0,
          illegal: "[<=$]",
          relevance: 0,
          contains: o
        }
      }
    ]
  }, h = {
    className: "keyword",
    begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
    starts: {
      end: "[;{}]",
      keywords: u,
      returnEnd: !0,
      contains: o,
      relevance: 0
    }
  }, b = {
    className: "variable",
    variants: [
      // using more strict pattern for higher relevance to increase chances of Less detection.
      // this is *the only* Less specific statement used in most of the sources, so...
      // (we’ll still often loose to the css-parser unless there's '//' comment,
      // simply because 1 variable just can't beat 99 properties :)
      {
        begin: "@" + i + "\\s*:",
        relevance: 15
      },
      { begin: "@" + i }
    ],
    starts: {
      end: "[;}]",
      returnEnd: !0,
      contains: p
    }
  }, E = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [
      {
        begin: "[\\.#:&\\[>]",
        end: "[;{}]"
        // mixin calls end with ';'
      },
      {
        begin: a,
        end: /\{/
      }
    ],
    returnBegin: !0,
    returnEnd: !0,
    illegal: `[<='$"]`,
    relevance: 0,
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      f,
      c("keyword", "all\\b"),
      c("variable", "@\\{" + i + "\\}"),
      // otherwise it’s identified as tag
      {
        begin: "\\b(" + of.join("|") + ")\\b",
        className: "selector-tag"
      },
      t.CSS_NUMBER_MODE,
      c("selector-tag", a, 0),
      c("selector-id", "#" + a),
      c("selector-class", "\\." + a, 0),
      c("selector-tag", "&", 0),
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        begin: ":(" + Fs.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + Bs.join("|") + ")"
      },
      {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        contains: p
      },
      // argument list of parametric mixins
      { begin: "!important" },
      // eat !important after mixin call or it will be colored as tag
      t.FUNCTION_DISPATCH
    ]
  }, v = {
    begin: i + `:(:)?(${n.join("|")})`,
    returnBegin: !0,
    contains: [E]
  };
  return s.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    h,
    b,
    v,
    g,
    E,
    f,
    t.FUNCTION_DISPATCH
  ), {
    name: "Less",
    case_insensitive: !0,
    illegal: `[=>'/<($"]`,
    contains: s
  };
}
function ff(e) {
  const t = "\\[=*\\[", n = "\\]=*\\]", r = {
    begin: t,
    end: n,
    contains: ["self"]
  }, i = [
    e.COMMENT("--(?!" + t + ")", "$"),
    e.COMMENT(
      "--" + t,
      n,
      {
        contains: [r],
        relevance: 10
      }
    )
  ];
  return {
    name: "Lua",
    aliases: ["pluto"],
    keywords: {
      $pattern: e.UNDERSCORE_IDENT_RE,
      literal: "true false nil",
      keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in: (
        // Metatags and globals:
        "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
      )
    },
    contains: i.concat([
      {
        className: "function",
        beginKeywords: "function",
        end: "\\)",
        contains: [
          e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
          {
            className: "params",
            begin: "\\(",
            endsWithParent: !0,
            contains: i
          }
        ].concat(i)
      },
      e.C_NUMBER_MODE,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        className: "string",
        begin: t,
        end: n,
        contains: [r],
        relevance: 5
      }
    ])
  };
}
function pf(e) {
  const t = {
    className: "variable",
    variants: [
      {
        begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
        contains: [e.BACKSLASH_ESCAPE]
      },
      { begin: /\$[@%<?\^\+\*]/ }
    ]
  }, n = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      t
    ]
  }, r = {
    className: "variable",
    begin: /\$\([\w-]+\s/,
    end: /\)/,
    keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
    contains: [
      t,
      n
      // Added QUOTE_STRING as they can be a part of functions
    ]
  }, i = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, a = {
    className: "meta",
    begin: /^\.PHONY:/,
    end: /$/,
    keywords: {
      $pattern: /[\.\w]+/,
      keyword: ".PHONY"
    }
  }, s = {
    className: "section",
    begin: /^[^\s]+:/,
    end: /$/,
    contains: [t]
  };
  return {
    name: "Makefile",
    aliases: [
      "mk",
      "mak",
      "make"
    ],
    keywords: {
      $pattern: /[\w-]+/,
      keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
    },
    contains: [
      e.HASH_COMMENT_MODE,
      t,
      n,
      r,
      i,
      a,
      s
    ]
  };
}
function mf(e) {
  const t = e.regex, n = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, r = {
    begin: "^[-\\*]{3,}",
    end: "$"
  }, i = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      { begin: "`.+?`" },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  }, a = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: !0
  }, s = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: !0,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: !0
      }
    ]
  }, o = /[A-Za-z][A-Za-z0-9+.-]*/, l = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: t.concat(/\[.+?\]\(/, o, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: !0,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/
      },
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: !0,
        returnEnd: !0
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: !0,
        excludeEnd: !0
      }
    ]
  }, c = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      },
      {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }
    ]
  }, u = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?![*\s])/,
        end: /\*/
      },
      {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }
    ]
  }, d = e.inherit(c, { contains: [] }), p = e.inherit(u, { contains: [] });
  c.contains.push(p), u.contains.push(d);
  let f = [
    n,
    l
  ];
  return [
    c,
    u,
    d,
    p
  ].forEach((E) => {
    E.contains = E.contains.concat(f);
  }), f = f.concat(c, u), {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: f
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: f
              }
            ]
          }
        ]
      },
      n,
      a,
      c,
      u,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: f,
        end: "$"
      },
      i,
      r,
      l,
      s,
      {
        //https://spec.commonmark.org/0.31.2/#entity-references
        scope: "literal",
        match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
      }
    ]
  };
}
function gf(e) {
  const t = {
    className: "built_in",
    begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
  }, n = /[a-zA-Z@][a-zA-Z0-9_]*/, o = {
    "variable.language": [
      "this",
      "super"
    ],
    $pattern: n,
    keyword: [
      "while",
      "export",
      "sizeof",
      "typedef",
      "const",
      "struct",
      "for",
      "union",
      "volatile",
      "static",
      "mutable",
      "if",
      "do",
      "return",
      "goto",
      "enum",
      "else",
      "break",
      "extern",
      "asm",
      "case",
      "default",
      "register",
      "explicit",
      "typename",
      "switch",
      "continue",
      "inline",
      "readonly",
      "assign",
      "readwrite",
      "self",
      "@synchronized",
      "id",
      "typeof",
      "nonatomic",
      "IBOutlet",
      "IBAction",
      "strong",
      "weak",
      "copy",
      "in",
      "out",
      "inout",
      "bycopy",
      "byref",
      "oneway",
      "__strong",
      "__weak",
      "__block",
      "__autoreleasing",
      "@private",
      "@protected",
      "@public",
      "@try",
      "@property",
      "@end",
      "@throw",
      "@catch",
      "@finally",
      "@autoreleasepool",
      "@synthesize",
      "@dynamic",
      "@selector",
      "@optional",
      "@required",
      "@encode",
      "@package",
      "@import",
      "@defs",
      "@compatibility_alias",
      "__bridge",
      "__bridge_transfer",
      "__bridge_retained",
      "__bridge_retain",
      "__covariant",
      "__contravariant",
      "__kindof",
      "_Nonnull",
      "_Nullable",
      "_Null_unspecified",
      "__FUNCTION__",
      "__PRETTY_FUNCTION__",
      "__attribute__",
      "getter",
      "setter",
      "retain",
      "unsafe_unretained",
      "nonnull",
      "nullable",
      "null_unspecified",
      "null_resettable",
      "class",
      "instancetype",
      "NS_DESIGNATED_INITIALIZER",
      "NS_UNAVAILABLE",
      "NS_REQUIRES_SUPER",
      "NS_RETURNS_INNER_POINTER",
      "NS_INLINE",
      "NS_AVAILABLE",
      "NS_DEPRECATED",
      "NS_ENUM",
      "NS_OPTIONS",
      "NS_SWIFT_UNAVAILABLE",
      "NS_ASSUME_NONNULL_BEGIN",
      "NS_ASSUME_NONNULL_END",
      "NS_REFINED_FOR_SWIFT",
      "NS_SWIFT_NAME",
      "NS_SWIFT_NOTHROW",
      "NS_DURING",
      "NS_HANDLER",
      "NS_ENDHANDLER",
      "NS_VALUERETURN",
      "NS_VOIDRETURN"
    ],
    literal: [
      "false",
      "true",
      "FALSE",
      "TRUE",
      "nil",
      "YES",
      "NO",
      "NULL"
    ],
    built_in: [
      "dispatch_once_t",
      "dispatch_queue_t",
      "dispatch_sync",
      "dispatch_async",
      "dispatch_once"
    ],
    type: [
      "int",
      "float",
      "char",
      "unsigned",
      "signed",
      "short",
      "long",
      "double",
      "wchar_t",
      "unichar",
      "void",
      "bool",
      "BOOL",
      "id|0",
      "_Bool"
    ]
  }, l = {
    $pattern: n,
    keyword: [
      "@interface",
      "@class",
      "@protocol",
      "@implementation"
    ]
  };
  return {
    name: "Objective-C",
    aliases: [
      "mm",
      "objc",
      "obj-c",
      "obj-c++",
      "objective-c++"
    ],
    keywords: o,
    illegal: "</",
    contains: [
      t,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      e.C_NUMBER_MODE,
      e.QUOTE_STRING_MODE,
      e.APOS_STRING_MODE,
      {
        className: "string",
        variants: [
          {
            begin: '@"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
          }
        ]
      },
      {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
          {
            className: "string",
            begin: /<.*?>/,
            end: /$/,
            illegal: "\\n"
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        className: "class",
        begin: "(" + l.keyword.join("|") + ")\\b",
        end: /(\{|$)/,
        excludeEnd: !0,
        keywords: l,
        contains: [e.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: "\\." + e.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };
}
function hf(e) {
  const t = e.regex, n = [
    "abs",
    "accept",
    "alarm",
    "and",
    "atan2",
    "bind",
    "binmode",
    "bless",
    "break",
    "caller",
    "chdir",
    "chmod",
    "chomp",
    "chop",
    "chown",
    "chr",
    "chroot",
    "class",
    "close",
    "closedir",
    "connect",
    "continue",
    "cos",
    "crypt",
    "dbmclose",
    "dbmopen",
    "defined",
    "delete",
    "die",
    "do",
    "dump",
    "each",
    "else",
    "elsif",
    "endgrent",
    "endhostent",
    "endnetent",
    "endprotoent",
    "endpwent",
    "endservent",
    "eof",
    "eval",
    "exec",
    "exists",
    "exit",
    "exp",
    "fcntl",
    "field",
    "fileno",
    "flock",
    "for",
    "foreach",
    "fork",
    "format",
    "formline",
    "getc",
    "getgrent",
    "getgrgid",
    "getgrnam",
    "gethostbyaddr",
    "gethostbyname",
    "gethostent",
    "getlogin",
    "getnetbyaddr",
    "getnetbyname",
    "getnetent",
    "getpeername",
    "getpgrp",
    "getpriority",
    "getprotobyname",
    "getprotobynumber",
    "getprotoent",
    "getpwent",
    "getpwnam",
    "getpwuid",
    "getservbyname",
    "getservbyport",
    "getservent",
    "getsockname",
    "getsockopt",
    "given",
    "glob",
    "gmtime",
    "goto",
    "grep",
    "gt",
    "hex",
    "if",
    "index",
    "int",
    "ioctl",
    "join",
    "keys",
    "kill",
    "last",
    "lc",
    "lcfirst",
    "length",
    "link",
    "listen",
    "local",
    "localtime",
    "log",
    "lstat",
    "lt",
    "ma",
    "map",
    "method",
    "mkdir",
    "msgctl",
    "msgget",
    "msgrcv",
    "msgsnd",
    "my",
    "ne",
    "next",
    "no",
    "not",
    "oct",
    "open",
    "opendir",
    "or",
    "ord",
    "our",
    "pack",
    "package",
    "pipe",
    "pop",
    "pos",
    "print",
    "printf",
    "prototype",
    "push",
    "q|0",
    "qq",
    "quotemeta",
    "qw",
    "qx",
    "rand",
    "read",
    "readdir",
    "readline",
    "readlink",
    "readpipe",
    "recv",
    "redo",
    "ref",
    "rename",
    "require",
    "reset",
    "return",
    "reverse",
    "rewinddir",
    "rindex",
    "rmdir",
    "say",
    "scalar",
    "seek",
    "seekdir",
    "select",
    "semctl",
    "semget",
    "semop",
    "send",
    "setgrent",
    "sethostent",
    "setnetent",
    "setpgrp",
    "setpriority",
    "setprotoent",
    "setpwent",
    "setservent",
    "setsockopt",
    "shift",
    "shmctl",
    "shmget",
    "shmread",
    "shmwrite",
    "shutdown",
    "sin",
    "sleep",
    "socket",
    "socketpair",
    "sort",
    "splice",
    "split",
    "sprintf",
    "sqrt",
    "srand",
    "stat",
    "state",
    "study",
    "sub",
    "substr",
    "symlink",
    "syscall",
    "sysopen",
    "sysread",
    "sysseek",
    "system",
    "syswrite",
    "tell",
    "telldir",
    "tie",
    "tied",
    "time",
    "times",
    "tr",
    "truncate",
    "uc",
    "ucfirst",
    "umask",
    "undef",
    "unless",
    "unlink",
    "unpack",
    "unshift",
    "untie",
    "until",
    "use",
    "utime",
    "values",
    "vec",
    "wait",
    "waitpid",
    "wantarray",
    "warn",
    "when",
    "while",
    "write",
    "x|0",
    "xor",
    "y|0"
  ], r = /[dualxmsipngr]{0,12}/, i = {
    $pattern: /[\w.]+/,
    keyword: n.join(" ")
  }, a = {
    className: "subst",
    begin: "[$@]\\{",
    end: "\\}",
    keywords: i
  }, s = {
    begin: /->\{/,
    end: /\}/
    // contains defined later
  }, o = {
    scope: "attr",
    match: /\s+:\s*\w+(\s*\(.*?\))?/
  }, l = {
    scope: "variable",
    variants: [
      { begin: /\$\d/ },
      {
        begin: t.concat(
          /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          "(?![A-Za-z])(?![@$%])"
        )
      },
      {
        // Only $= is a special Perl variable and one can't declare @= or %=.
        begin: /[$%@](?!")[^\s\w{=]|\$=/,
        relevance: 0
      }
    ],
    contains: [o]
  }, c = {
    className: "number",
    variants: [
      // decimal numbers:
      // include the case where a number starts with a dot (eg. .9), and
      // the leading 0? avoids mixing the first and second match on 0.x cases
      { match: /0?\.[0-9][0-9_]+\b/ },
      // include the special versioned number (eg. v5.38)
      { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
      // non-decimal numbers:
      { match: /\b0[0-7][0-7_]*\b/ },
      { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
      { match: /\b0b[0-1][0-1_]*\b/ }
    ],
    relevance: 0
  }, u = [
    e.BACKSLASH_ESCAPE,
    a,
    l
  ], d = [
    /!/,
    /\//,
    /\|/,
    /\?/,
    /'/,
    /"/,
    // valid but infrequent and weird
    /#/
    // valid but infrequent and weird
  ], p = (h, b, E = "\\1") => {
    const v = E === "\\1" ? E : t.concat(E, b);
    return t.concat(
      t.concat("(?:", h, ")"),
      b,
      /(?:\\.|[^\\\/])*?/,
      v,
      /(?:\\.|[^\\\/])*?/,
      E,
      r
    );
  }, f = (h, b, E) => t.concat(
    t.concat("(?:", h, ")"),
    b,
    /(?:\\.|[^\\\/])*?/,
    E,
    r
  ), g = [
    l,
    e.HASH_COMMENT_MODE,
    e.COMMENT(
      /^=\w/,
      /=cut/,
      { endsWithParent: !0 }
    ),
    s,
    {
      className: "string",
      contains: u,
      variants: [
        {
          begin: "q[qwxr]?\\s*\\(",
          end: "\\)",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\[",
          end: "\\]",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\{",
          end: "\\}",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\|",
          end: "\\|",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*<",
          end: ">",
          relevance: 5
        },
        {
          begin: "qw\\s+q",
          end: "q",
          relevance: 5
        },
        {
          begin: "'",
          end: "'",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "`",
          end: "`",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: /\{\w+\}/,
          relevance: 0
        },
        {
          begin: "-?\\w+\\s*=>",
          relevance: 0
        }
      ]
    },
    c,
    {
      // regexp container
      begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
      keywords: "split return print reverse grep",
      relevance: 0,
      contains: [
        e.HASH_COMMENT_MODE,
        {
          className: "regexp",
          variants: [
            // allow matching common delimiters
            { begin: p("s|tr|y", t.either(...d, { capture: !0 })) },
            // and then paired delmis
            { begin: p("s|tr|y", "\\(", "\\)") },
            { begin: p("s|tr|y", "\\[", "\\]") },
            { begin: p("s|tr|y", "\\{", "\\}") }
          ],
          relevance: 2
        },
        {
          className: "regexp",
          variants: [
            {
              // could be a comment in many languages so do not count
              // as relevant
              begin: /(m|qr)\/\//,
              relevance: 0
            },
            // prefix is optional with /regex/
            { begin: f("(?:m|qr)?", /\//, /\//) },
            // allow matching common delimiters
            { begin: f("m|qr", t.either(...d, { capture: !0 }), /\1/) },
            // allow common paired delmins
            { begin: f("m|qr", /\(/, /\)/) },
            { begin: f("m|qr", /\[/, /\]/) },
            { begin: f("m|qr", /\{/, /\}/) }
          ]
        }
      ]
    },
    {
      className: "function",
      beginKeywords: "sub method",
      end: "(\\s*\\(.*?\\))?[;{]",
      excludeEnd: !0,
      relevance: 5,
      contains: [e.TITLE_MODE, o]
    },
    {
      className: "class",
      beginKeywords: "class",
      end: "[;{]",
      excludeEnd: !0,
      relevance: 5,
      contains: [e.TITLE_MODE, o, c]
    },
    {
      begin: "-\\w\\b",
      relevance: 0
    },
    {
      begin: "^__DATA__$",
      end: "^__END__$",
      subLanguage: "mojolicious",
      contains: [
        {
          begin: "^@@.*",
          end: "$",
          className: "comment"
        }
      ]
    }
  ];
  return a.contains = g, s.contains = g, {
    name: "Perl",
    aliases: [
      "pl",
      "pm"
    ],
    keywords: i,
    contains: g
  };
}
function bf(e) {
  const t = e.regex, n = /(?![A-Za-z0-9])(?![$])/, r = t.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    n
  ), i = t.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    n
  ), a = t.concat(
    /[A-Z]+/,
    n
  ), s = {
    scope: "variable",
    match: "\\$+" + r
  }, o = {
    scope: "meta",
    variants: [
      { begin: /<\?php/, relevance: 10 },
      // boost for obvious PHP
      { begin: /<\?=/ },
      // less relevant per PSR-1 which says not to use short-tags
      { begin: /<\?/, relevance: 0.1 },
      { begin: /\?>/ }
      // end php tag
    ]
  }, l = {
    scope: "subst",
    variants: [
      { begin: /\$\w+/ },
      {
        begin: /\{\$/,
        end: /\}/
      }
    ]
  }, c = e.inherit(e.APOS_STRING_MODE, { illegal: null }), u = e.inherit(e.QUOTE_STRING_MODE, {
    illegal: null,
    contains: e.QUOTE_STRING_MODE.contains.concat(l)
  }), d = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(l),
    "on:begin": (J, re) => {
      re.data._beginMatch = J[1] || J[2];
    },
    "on:end": (J, re) => {
      re.data._beginMatch !== J[1] && re.ignoreMatch();
    }
  }, p = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), f = `[ 	
]`, g = {
    scope: "string",
    variants: [
      u,
      c,
      d,
      p
    ]
  }, h = {
    scope: "number",
    variants: [
      { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
      // Binary w/ underscore support
      { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
      // Octals w/ underscore support
      { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
      // Hex w/ underscore support
      // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
      { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
    ],
    relevance: 0
  }, b = [
    "false",
    "null",
    "true"
  ], E = [
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    "__CLASS__",
    "__DIR__",
    "__FILE__",
    "__FUNCTION__",
    "__COMPILER_HALT_OFFSET__",
    "__LINE__",
    "__METHOD__",
    "__NAMESPACE__",
    "__TRAIT__",
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    "die",
    "echo",
    "exit",
    "include",
    "include_once",
    "print",
    "require",
    "require_once",
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    "array",
    "abstract",
    "and",
    "as",
    "binary",
    "bool",
    "boolean",
    "break",
    "callable",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "do",
    "double",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "enum",
    "eval",
    "extends",
    "final",
    "finally",
    "float",
    "for",
    "foreach",
    "from",
    "global",
    "goto",
    "if",
    "implements",
    "instanceof",
    "insteadof",
    "int",
    "integer",
    "interface",
    "isset",
    "iterable",
    "list",
    "match|0",
    "mixed",
    "new",
    "never",
    "object",
    "or",
    "private",
    "protected",
    "public",
    "readonly",
    "real",
    "return",
    "string",
    "switch",
    "throw",
    "trait",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield"
  ], v = [
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    "Error|0",
    "AppendIterator",
    "ArgumentCountError",
    "ArithmeticError",
    "ArrayIterator",
    "ArrayObject",
    "AssertionError",
    "BadFunctionCallException",
    "BadMethodCallException",
    "CachingIterator",
    "CallbackFilterIterator",
    "CompileError",
    "Countable",
    "DirectoryIterator",
    "DivisionByZeroError",
    "DomainException",
    "EmptyIterator",
    "ErrorException",
    "Exception",
    "FilesystemIterator",
    "FilterIterator",
    "GlobIterator",
    "InfiniteIterator",
    "InvalidArgumentException",
    "IteratorIterator",
    "LengthException",
    "LimitIterator",
    "LogicException",
    "MultipleIterator",
    "NoRewindIterator",
    "OutOfBoundsException",
    "OutOfRangeException",
    "OuterIterator",
    "OverflowException",
    "ParentIterator",
    "ParseError",
    "RangeException",
    "RecursiveArrayIterator",
    "RecursiveCachingIterator",
    "RecursiveCallbackFilterIterator",
    "RecursiveDirectoryIterator",
    "RecursiveFilterIterator",
    "RecursiveIterator",
    "RecursiveIteratorIterator",
    "RecursiveRegexIterator",
    "RecursiveTreeIterator",
    "RegexIterator",
    "RuntimeException",
    "SeekableIterator",
    "SplDoublyLinkedList",
    "SplFileInfo",
    "SplFileObject",
    "SplFixedArray",
    "SplHeap",
    "SplMaxHeap",
    "SplMinHeap",
    "SplObjectStorage",
    "SplObserver",
    "SplPriorityQueue",
    "SplQueue",
    "SplStack",
    "SplSubject",
    "SplTempFileObject",
    "TypeError",
    "UnderflowException",
    "UnexpectedValueException",
    "UnhandledMatchError",
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    "ArrayAccess",
    "BackedEnum",
    "Closure",
    "Fiber",
    "Generator",
    "Iterator",
    "IteratorAggregate",
    "Serializable",
    "Stringable",
    "Throwable",
    "Traversable",
    "UnitEnum",
    "WeakReference",
    "WeakMap",
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    "Directory",
    "__PHP_Incomplete_Class",
    "parent",
    "php_user_filter",
    "self",
    "static",
    "stdClass"
  ], N = {
    keyword: E,
    literal: ((J) => {
      const re = [];
      return J.forEach((T) => {
        re.push(T), T.toLowerCase() === T ? re.push(T.toUpperCase()) : re.push(T.toLowerCase());
      }), re;
    })(b),
    built_in: v
  }, I = (J) => J.map((re) => re.replace(/\|\d+$/, "")), F = { variants: [
    {
      match: [
        /new/,
        t.concat(f, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", I(v).join("\\b|"), "\\b)"),
        i
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, G = t.concat(r, "\\b(?!\\()"), Z = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        G
      ],
      scope: { 2: "variable.constant" }
    },
    {
      match: [
        /::/,
        /class/
      ],
      scope: { 2: "variable.language" }
    },
    {
      match: [
        i,
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        G
      ],
      scope: {
        1: "title.class",
        3: "variable.constant"
      }
    },
    {
      match: [
        i,
        t.concat(
          "::",
          t.lookahead(/(?!class\b)/)
        )
      ],
      scope: { 1: "title.class" }
    },
    {
      match: [
        i,
        /::/,
        /class/
      ],
      scope: {
        1: "title.class",
        3: "variable.language"
      }
    }
  ] }, z = {
    scope: "attr",
    match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, w = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: N,
    contains: [
      z,
      s,
      Z,
      e.C_BLOCK_COMMENT_MODE,
      g,
      h,
      F
    ]
  }, le = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", I(E).join("\\b|"), "|", I(v).join("\\b|"), "\\b)"),
      r,
      t.concat(f, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [w]
  };
  w.contains.push(le);
  const H = [
    z,
    Z,
    e.C_BLOCK_COMMENT_MODE,
    g,
    h,
    F
  ], K = {
    begin: t.concat(
      /#\[\s*\\?/,
      t.either(
        i,
        a
      )
    ),
    beginScope: "meta",
    end: /]/,
    endScope: "meta",
    keywords: {
      literal: b,
      keyword: [
        "new",
        "array"
      ]
    },
    contains: [
      {
        begin: /\[/,
        end: /]/,
        keywords: {
          literal: b,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...H
        ]
      },
      ...H,
      {
        scope: "meta",
        variants: [
          { match: i },
          { match: a }
        ]
      }
    ]
  };
  return {
    case_insensitive: !1,
    keywords: N,
    contains: [
      K,
      e.HASH_COMMENT_MODE,
      e.COMMENT("//", "$"),
      e.COMMENT(
        "/\\*",
        "\\*/",
        { contains: [
          {
            scope: "doctag",
            match: "@[A-Za-z]+"
          }
        ] }
      ),
      {
        match: /__halt_compiler\(\);/,
        keywords: "__halt_compiler",
        starts: {
          scope: "comment",
          end: e.MATCH_NOTHING_RE,
          contains: [
            {
              match: /\?>/,
              scope: "meta",
              endsParent: !0
            }
          ]
        }
      },
      o,
      {
        scope: "variable.language",
        match: /\$this\b/
      },
      s,
      le,
      Z,
      {
        match: [
          /const/,
          /\s/,
          r
        ],
        scope: {
          1: "keyword",
          3: "variable.constant"
        }
      },
      F,
      {
        scope: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [
          { beginKeywords: "use" },
          e.UNDERSCORE_TITLE_MODE,
          {
            begin: "=>",
            // No markup, just a relevance booster
            endsParent: !0
          },
          {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: N,
            contains: [
              "self",
              K,
              s,
              Z,
              e.C_BLOCK_COMMENT_MODE,
              g,
              h
            ]
          }
        ]
      },
      {
        scope: "class",
        variants: [
          {
            beginKeywords: "enum",
            illegal: /[($"]/
          },
          {
            beginKeywords: "class interface trait",
            illegal: /[:($"]/
          }
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [
          { beginKeywords: "extends implements" },
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      // both use and namespace still use "old style" rules (vs multi-match)
      // because the namespace name can include `\` and we still want each
      // element to be treated as its own *individual* title
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [
          // TODO: title.function vs title.class
          {
            match: /\b(as|const|function)\b/,
            scope: "keyword"
          },
          // TODO: could be title.class or title.function
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      g,
      h
    ]
  };
}
function _f(e) {
  return {
    name: "PHP template",
    subLanguage: "xml",
    contains: [
      {
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: "php",
        contains: [
          // We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {
            begin: "/\\*",
            end: "\\*/",
            skip: !0
          },
          {
            begin: 'b"',
            end: '"',
            skip: !0
          },
          {
            begin: "b'",
            end: "'",
            skip: !0
          },
          e.inherit(e.APOS_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0
          }),
          e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0
          })
        ]
      }
    ]
  };
}
function yf(e) {
  return {
    name: "Plain text",
    aliases: [
      "text",
      "txt"
    ],
    disableAutodetect: !0
  };
}
function Ef(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), r = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], o = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: r,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, l = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, c = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: o,
    illegal: /#/
  }, u = {
    begin: /\{\{/,
    relevance: 0
  }, d = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          u,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          u,
          c
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          u,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          u,
          c
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, p = "[0-9](_?[0-9])*", f = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`, g = `\\b|${r.join("|")}`, h = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${p})|(${f}))[eE][+-]?(${p})[jJ]?(?=${g})`
      },
      {
        begin: `(${f})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${g})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${g})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${p})[jJ](?=${g})`
      }
    ]
  }, b = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: o,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, E = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: o,
        contains: [
          "self",
          l,
          h,
          d,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return c.contains = [
    d,
    h,
    l
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: o,
    illegal: /(<\/|\?)|=>/,
    contains: [
      l,
      h,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      d,
      b,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [E]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          h,
          E,
          d
        ]
      }
    ]
  };
}
function vf(e) {
  return {
    aliases: ["pycon"],
    contains: [
      {
        className: "meta.prompt",
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: "$",
            subLanguage: "python"
          }
        },
        variants: [
          { begin: /^>>>(?=[ ]|$)/ },
          { begin: /^\.\.\.(?=[ ]|$)/ }
        ]
      }
    ]
  };
}
function wf(e) {
  const t = e.regex, n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, r = t.either(
    // Special case: only hexadecimal binary powers can contain fractions
    /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
    // Hexadecimal numbers without fraction and optional binary power
    /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
    // Decimal numbers
    /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
  ), i = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, a = t.either(
    /[()]/,
    /[{}]/,
    /\[\[/,
    /[[\]]/,
    /\\/,
    /,/
  );
  return {
    name: "R",
    keywords: {
      $pattern: n,
      keyword: "function if in break next repeat else for while",
      literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
      built_in: (
        // Builtin constants
        "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
      )
    },
    contains: [
      // Roxygen comments
      e.COMMENT(
        /#'/,
        /$/,
        { contains: [
          {
            // Handle `@examples` separately to cause all subsequent code
            // until the next `@`-tag on its own line to be kept as-is,
            // preventing highlighting. This code is example R code, so nested
            // doctags shouldn’t be treated as such. See
            // `test/markup/r/roxygen.txt` for an example.
            scope: "doctag",
            match: /@examples/,
            starts: {
              end: t.lookahead(t.either(
                // end if another doc comment
                /\n^#'\s*(?=@[a-zA-Z]+)/,
                // or a line with no comment
                /\n^(?!#')/
              )),
              endsParent: !0
            }
          },
          {
            // Handle `@param` to highlight the parameter name following
            // after.
            scope: "doctag",
            begin: "@param",
            end: /$/,
            contains: [
              {
                scope: "variable",
                variants: [
                  { match: n },
                  { match: /`(?:\\.|[^`\\])+`/ }
                ],
                endsParent: !0
              }
            ]
          },
          {
            scope: "doctag",
            match: /@[a-zA-Z]+/
          },
          {
            scope: "keyword",
            match: /\\[a-zA-Z]+/
          }
        ] }
      ),
      e.HASH_COMMENT_MODE,
      {
        scope: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\(/,
            end: /\)(-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\{/,
            end: /\}(-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\[/,
            end: /\](-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\(/,
            end: /\)(-*)'/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\{/,
            end: /\}(-*)'/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\[/,
            end: /\](-*)'/
          }),
          {
            begin: '"',
            end: '"',
            relevance: 0
          },
          {
            begin: "'",
            end: "'",
            relevance: 0
          }
        ]
      },
      // Matching numbers immediately following punctuation and operators is
      // tricky since we need to look at the character ahead of a number to
      // ensure the number is not part of an identifier, and we cannot use
      // negative look-behind assertions. So instead we explicitly handle all
      // possible combinations of (operator|punctuation), number.
      // TODO: replace with negative look-behind when available
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
      // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
      {
        relevance: 0,
        variants: [
          {
            scope: {
              1: "operator",
              2: "number"
            },
            match: [
              i,
              r
            ]
          },
          {
            scope: {
              1: "operator",
              2: "number"
            },
            match: [
              /%[^%]*%/,
              r
            ]
          },
          {
            scope: {
              1: "punctuation",
              2: "number"
            },
            match: [
              a,
              r
            ]
          },
          {
            scope: { 2: "number" },
            match: [
              /[^a-zA-Z0-9._]|^/,
              // not part of an identifier, or start of document
              r
            ]
          }
        ]
      },
      // Operators/punctuation when they're not directly followed by numbers
      {
        // Relevance boost for the most common assignment form.
        scope: { 3: "operator" },
        match: [
          n,
          /\s+/,
          /<-/,
          /\s+/
        ]
      },
      {
        scope: "operator",
        relevance: 0,
        variants: [
          { match: i },
          { match: /%[^%]*%/ }
        ]
      },
      {
        scope: "punctuation",
        relevance: 0,
        match: a
      },
      {
        // Escaped identifier
        begin: "`",
        end: "`",
        contains: [{ begin: /\\./ }]
      }
    ]
  };
}
function xf(e) {
  const t = e.regex, n = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", r = t.either(
    /\b([A-Z]+[a-z0-9]+)+/,
    // ends in caps
    /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
  ), i = t.concat(r, /(::\w+)*/), s = {
    "variable.constant": [
      "__FILE__",
      "__LINE__",
      "__ENCODING__"
    ],
    "variable.language": [
      "self",
      "super"
    ],
    keyword: [
      "alias",
      "and",
      "begin",
      "BEGIN",
      "break",
      "case",
      "class",
      "defined",
      "do",
      "else",
      "elsif",
      "end",
      "END",
      "ensure",
      "for",
      "if",
      "in",
      "module",
      "next",
      "not",
      "or",
      "redo",
      "require",
      "rescue",
      "retry",
      "return",
      "then",
      "undef",
      "unless",
      "until",
      "when",
      "while",
      "yield",
      ...[
        "include",
        "extend",
        "prepend",
        "public",
        "private",
        "protected",
        "raise",
        "throw"
      ]
    ],
    built_in: [
      "proc",
      "lambda",
      "attr_accessor",
      "attr_reader",
      "attr_writer",
      "define_method",
      "private_constant",
      "module_function"
    ],
    literal: [
      "true",
      "false",
      "nil"
    ]
  }, o = {
    className: "doctag",
    begin: "@[A-Za-z]+"
  }, l = {
    begin: "#<",
    end: ">"
  }, c = [
    e.COMMENT(
      "#",
      "$",
      { contains: [o] }
    ),
    e.COMMENT(
      "^=begin",
      "^=end",
      {
        contains: [o],
        relevance: 10
      }
    ),
    e.COMMENT("^__END__", e.MATCH_NOTHING_RE)
  ], u = {
    className: "subst",
    begin: /#\{/,
    end: /\}/,
    keywords: s
  }, d = {
    className: "string",
    contains: [
      e.BACKSLASH_ESCAPE,
      u
    ],
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /`/,
        end: /`/
      },
      {
        begin: /%[qQwWx]?\(/,
        end: /\)/
      },
      {
        begin: /%[qQwWx]?\[/,
        end: /\]/
      },
      {
        begin: /%[qQwWx]?\{/,
        end: /\}/
      },
      {
        begin: /%[qQwWx]?</,
        end: />/
      },
      {
        begin: /%[qQwWx]?\//,
        end: /\//
      },
      {
        begin: /%[qQwWx]?%/,
        end: /%/
      },
      {
        begin: /%[qQwWx]?-/,
        end: /-/
      },
      {
        begin: /%[qQwWx]?\|/,
        end: /\|/
      },
      // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
      // where ? is the last character of a preceding identifier, as in: `func?4`
      { begin: /\B\?(\\\d{1,3})/ },
      { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
      { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
      { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
      { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
      { begin: /\B\?\\?\S/ },
      // heredocs
      {
        // this guard makes sure that we have an entire heredoc and not a false
        // positive (auto-detect, etc.)
        begin: t.concat(
          /<<[-~]?'?/,
          t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
        ),
        contains: [
          e.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [
              e.BACKSLASH_ESCAPE,
              u
            ]
          })
        ]
      }
    ]
  }, p = "[1-9](_?[0-9])*|0", f = "[0-9](_?[0-9])*", g = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal integer/float, optionally exponential or rational, optionally imaginary
      { begin: `\\b(${p})(\\.(${f}))?([eE][+-]?(${f})|r)?i?\\b` },
      // explicit decimal/binary/octal/hexadecimal integer,
      // optionally rational and/or imaginary
      { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
      // 0-prefixed implicit octal integer, optionally rational and/or imaginary
      { begin: "\\b0(_?[0-7])+r?i?\\b" }
    ]
  }, h = {
    variants: [
      {
        match: /\(\)/
      },
      {
        className: "params",
        begin: /\(/,
        end: /(?=\))/,
        excludeBegin: !0,
        endsParent: !0,
        keywords: s
      }
    ]
  }, F = [
    d,
    {
      variants: [
        {
          match: [
            /class\s+/,
            i,
            /\s+<\s+/,
            i
          ]
        },
        {
          match: [
            /\b(class|module)\s+/,
            i
          ]
        }
      ],
      scope: {
        2: "title.class",
        4: "title.class.inherited"
      },
      keywords: s
    },
    {
      match: [
        /(include|extend)\s+/,
        i
      ],
      scope: {
        2: "title.class"
      },
      keywords: s
    },
    {
      relevance: 0,
      match: [
        i,
        /\.new[. (]/
      ],
      scope: {
        1: "title.class"
      }
    },
    {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    },
    {
      relevance: 0,
      match: r,
      scope: "title.class"
    },
    {
      match: [
        /def/,
        /\s+/,
        n
      ],
      scope: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        h
      ]
    },
    {
      // swallow namespace qualifiers before symbols
      begin: e.IDENT_RE + "::"
    },
    {
      className: "symbol",
      begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
      relevance: 0
    },
    {
      className: "symbol",
      begin: ":(?!\\s)",
      contains: [
        d,
        { begin: n }
      ],
      relevance: 0
    },
    g,
    {
      // negative-look forward attempts to prevent false matches like:
      // @ident@ or $ident$ that might indicate this is not ruby at all
      className: "variable",
      begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
    },
    {
      className: "params",
      begin: /\|(?!=)/,
      end: /\|/,
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0,
      // this could be a lot of things (in other languages) other than params
      keywords: s
    },
    {
      // regexp container
      begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
      keywords: "unless",
      contains: [
        {
          className: "regexp",
          contains: [
            e.BACKSLASH_ESCAPE,
            u
          ],
          illegal: /\n/,
          variants: [
            {
              begin: "/",
              end: "/[a-z]*"
            },
            {
              begin: /%r\{/,
              end: /\}[a-z]*/
            },
            {
              begin: "%r\\(",
              end: "\\)[a-z]*"
            },
            {
              begin: "%r!",
              end: "![a-z]*"
            },
            {
              begin: "%r\\[",
              end: "\\][a-z]*"
            }
          ]
        }
      ].concat(l, c),
      relevance: 0
    }
  ].concat(l, c);
  u.contains = F, h.contains = F;
  const w = [
    {
      begin: /^\s*=>/,
      starts: {
        end: "$",
        contains: F
      }
    },
    {
      className: "meta.prompt",
      begin: "^(" + "[>?]>" + "|" + "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]" + "|" + "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>" + ")(?=[ ])",
      starts: {
        end: "$",
        keywords: s,
        contains: F
      }
    }
  ];
  return c.unshift(l), {
    name: "Ruby",
    aliases: [
      "rb",
      "gemspec",
      "podspec",
      "thor",
      "irb"
    ],
    keywords: s,
    illegal: /\/\*/,
    contains: [e.SHEBANG({ binary: "ruby" })].concat(w).concat(c).concat(F)
  };
}
function kf(e) {
  const t = e.regex, n = /(r#)?/, r = t.concat(n, e.UNDERSCORE_IDENT_RE), i = t.concat(n, e.IDENT_RE), a = {
    className: "title.function.invoke",
    relevance: 0,
    begin: t.concat(
      /\b/,
      /(?!let|for|while|if|else|match\b)/,
      i,
      t.lookahead(/\s*\(/)
    )
  }, s = "([ui](8|16|32|64|128|size)|f(32|64))?", o = [
    "abstract",
    "as",
    "async",
    "await",
    "become",
    "box",
    "break",
    "const",
    "continue",
    "crate",
    "do",
    "dyn",
    "else",
    "enum",
    "extern",
    "false",
    "final",
    "fn",
    "for",
    "if",
    "impl",
    "in",
    "let",
    "loop",
    "macro",
    "match",
    "mod",
    "move",
    "mut",
    "override",
    "priv",
    "pub",
    "ref",
    "return",
    "self",
    "Self",
    "static",
    "struct",
    "super",
    "trait",
    "true",
    "try",
    "type",
    "typeof",
    "union",
    "unsafe",
    "unsized",
    "use",
    "virtual",
    "where",
    "while",
    "yield"
  ], l = [
    "true",
    "false",
    "Some",
    "None",
    "Ok",
    "Err"
  ], c = [
    // functions
    "drop ",
    // traits
    "Copy",
    "Send",
    "Sized",
    "Sync",
    "Drop",
    "Fn",
    "FnMut",
    "FnOnce",
    "ToOwned",
    "Clone",
    "Debug",
    "PartialEq",
    "PartialOrd",
    "Eq",
    "Ord",
    "AsRef",
    "AsMut",
    "Into",
    "From",
    "Default",
    "Iterator",
    "Extend",
    "IntoIterator",
    "DoubleEndedIterator",
    "ExactSizeIterator",
    "SliceConcatExt",
    "ToString",
    // macros
    "assert!",
    "assert_eq!",
    "bitflags!",
    "bytes!",
    "cfg!",
    "col!",
    "concat!",
    "concat_idents!",
    "debug_assert!",
    "debug_assert_eq!",
    "env!",
    "eprintln!",
    "panic!",
    "file!",
    "format!",
    "format_args!",
    "include_bytes!",
    "include_str!",
    "line!",
    "local_data_key!",
    "module_path!",
    "option_env!",
    "print!",
    "println!",
    "select!",
    "stringify!",
    "try!",
    "unimplemented!",
    "unreachable!",
    "vec!",
    "write!",
    "writeln!",
    "macro_rules!",
    "assert_ne!",
    "debug_assert_ne!"
  ], u = [
    "i8",
    "i16",
    "i32",
    "i64",
    "i128",
    "isize",
    "u8",
    "u16",
    "u32",
    "u64",
    "u128",
    "usize",
    "f32",
    "f64",
    "str",
    "char",
    "bool",
    "Box",
    "Option",
    "Result",
    "String",
    "Vec"
  ];
  return {
    name: "Rust",
    aliases: ["rs"],
    keywords: {
      $pattern: e.IDENT_RE + "!?",
      type: u,
      keyword: o,
      literal: l,
      built_in: c
    },
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
      e.inherit(e.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }),
      {
        className: "symbol",
        // negative lookahead to avoid matching `'`
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
      },
      {
        scope: "string",
        variants: [
          { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
          {
            begin: /b?'/,
            end: /'/,
            contains: [
              {
                scope: "char.escape",
                match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
              }
            ]
          }
        ]
      },
      {
        className: "number",
        variants: [
          { begin: "\\b0b([01_]+)" + s },
          { begin: "\\b0o([0-7_]+)" + s },
          { begin: "\\b0x([A-Fa-f0-9_]+)" + s },
          { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + s }
        ],
        relevance: 0
      },
      {
        begin: [
          /fn/,
          /\s+/,
          r
        ],
        className: {
          1: "keyword",
          3: "title.function"
        }
      },
      {
        className: "meta",
        begin: "#!?\\[",
        end: "\\]",
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [
              e.BACKSLASH_ESCAPE
            ]
          }
        ]
      },
      {
        begin: [
          /let/,
          /\s+/,
          /(?:mut\s+)?/,
          r
        ],
        className: {
          1: "keyword",
          3: "keyword",
          4: "variable"
        }
      },
      // must come before impl/for rule later
      {
        begin: [
          /for/,
          /\s+/,
          r,
          /\s+/,
          /in/
        ],
        className: {
          1: "keyword",
          3: "variable",
          5: "keyword"
        }
      },
      {
        begin: [
          /type/,
          /\s+/,
          r
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: [
          /(?:trait|enum|struct|union|impl|for)/,
          /\s+/,
          r
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: e.IDENT_RE + "::",
        keywords: {
          keyword: "Self",
          built_in: c,
          type: u
        }
      },
      {
        className: "punctuation",
        begin: "->"
      },
      a
    ]
  };
}
const Tf = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), Sf = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], Nf = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], Af = [
  ...Sf,
  ...Nf
], Of = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), Cf = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), Rf = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), If = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function Mf(e) {
  const t = Tf(e), n = Rf, r = Cf, i = "@[a-z-]+", a = "and or not only", o = {
    className: "variable",
    begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
    relevance: 0
  };
  return {
    name: "SCSS",
    case_insensitive: !0,
    illegal: "[=/|']",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      t.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: "#[A-Za-z0-9_-]+",
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\.[A-Za-z0-9_-]+",
        relevance: 0
      },
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-tag",
        begin: "\\b(" + Af.join("|") + ")\\b",
        // was there, before, but why?
        relevance: 0
      },
      {
        className: "selector-pseudo",
        begin: ":(" + r.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + n.join("|") + ")"
      },
      o,
      {
        // pseudo-selector params
        begin: /\(/,
        end: /\)/,
        contains: [t.CSS_NUMBER_MODE]
      },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + If.join("|") + ")\\b"
      },
      { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
      {
        begin: /:/,
        end: /[;}{]/,
        relevance: 0,
        contains: [
          t.BLOCK_COMMENT,
          o,
          t.HEXCOLOR,
          t.CSS_NUMBER_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          t.IMPORTANT,
          t.FUNCTION_DISPATCH
        ]
      },
      // matching these here allows us to treat them more like regular CSS
      // rules so everything between the {} gets regular rule highlighting,
      // which is what we want for page and font-face
      {
        begin: "@(page|font-face)",
        keywords: {
          $pattern: i,
          keyword: "@page @font-face"
        }
      },
      {
        begin: "@",
        end: "[{;]",
        returnBegin: !0,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: a,
          attribute: Of.join(" ")
        },
        contains: [
          {
            begin: i,
            className: "keyword"
          },
          {
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          },
          o,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          t.HEXCOLOR,
          t.CSS_NUMBER_MODE
        ]
      },
      t.FUNCTION_DISPATCH
    ]
  };
}
function Df(e) {
  return {
    name: "Shell Session",
    aliases: [
      "console",
      "shellsession"
    ],
    contains: [
      {
        className: "meta.prompt",
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }
    ]
  };
}
function Lf(e) {
  const t = e.regex, n = e.COMMENT("--", "$"), r = {
    scope: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [{ match: /''/ }]
      }
    ]
  }, i = {
    begin: /"/,
    end: /"/,
    contains: [{ match: /""/ }]
  }, a = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ], s = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ], o = [
    "bigint",
    "binary",
    "blob",
    "boolean",
    "char",
    "character",
    "clob",
    "date",
    "dec",
    "decfloat",
    "decimal",
    "float",
    "int",
    "integer",
    "interval",
    "nchar",
    "nclob",
    "national",
    "numeric",
    "real",
    "row",
    "smallint",
    "time",
    "timestamp",
    "varchar",
    "varying",
    // modifier (character varying)
    "varbinary"
  ], l = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ], c = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year"
  ], u = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket"
  ], d = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ], p = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ], f = u, g = [
    ...c,
    ...l
  ].filter((I) => !u.includes(I)), h = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, b = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, E = {
    match: t.concat(/\b/, t.either(...f), /\s*\(/),
    relevance: 0,
    keywords: { built_in: f }
  };
  function v(I) {
    return t.concat(
      /\b/,
      t.either(...I.map((F) => F.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const O = {
    scope: "keyword",
    match: v(p),
    relevance: 0
  };
  function N(I, {
    exceptions: F,
    when: G
  } = {}) {
    const Z = G;
    return F = F || [], I.map((z) => z.match(/\|\d+$/) || F.includes(z) ? z : Z(z) ? `${z}|0` : z);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: N(g, { when: (I) => I.length < 3 }),
      literal: a,
      type: o,
      built_in: d
    },
    contains: [
      {
        scope: "type",
        match: v(s)
      },
      O,
      E,
      h,
      r,
      i,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      n,
      b
    ]
  };
}
function Us(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function mn(e) {
  return ce("(?=", e, ")");
}
function ce(...e) {
  return e.map((n) => Us(n)).join("");
}
function Pf(e) {
  const t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function Ie(...e) {
  return "(" + (Pf(e).capture ? "" : "?:") + e.map((r) => Us(r)).join("|") + ")";
}
const hi = (e) => ce(
  /\b/,
  e,
  /\w$/.test(e) ? /\b/ : /\B/
), Ff = [
  "Protocol",
  // contextual
  "Type"
  // contextual
].map(hi), Yi = [
  "init",
  "self"
].map(hi), Bf = [
  "Any",
  "Self"
], Lr = [
  // strings below will be fed into the regular `keywords` engine while regex
  // will result in additional modes being created to scan for those keywords to
  // avoid conflicts with other rules
  "actor",
  "any",
  // contextual
  "associatedtype",
  "async",
  "await",
  /as\?/,
  // operator
  /as!/,
  // operator
  "as",
  // operator
  "borrowing",
  // contextual
  "break",
  "case",
  "catch",
  "class",
  "consume",
  // contextual
  "consuming",
  // contextual
  "continue",
  "convenience",
  // contextual
  "copy",
  // contextual
  "default",
  "defer",
  "deinit",
  "didSet",
  // contextual
  "distributed",
  "do",
  "dynamic",
  // contextual
  "each",
  "else",
  "enum",
  "extension",
  "fallthrough",
  /fileprivate\(set\)/,
  "fileprivate",
  "final",
  // contextual
  "for",
  "func",
  "get",
  // contextual
  "guard",
  "if",
  "import",
  "indirect",
  // contextual
  "infix",
  // contextual
  /init\?/,
  /init!/,
  "inout",
  /internal\(set\)/,
  "internal",
  "in",
  "is",
  // operator
  "isolated",
  // contextual
  "nonisolated",
  // contextual
  "lazy",
  // contextual
  "let",
  "macro",
  "mutating",
  // contextual
  "nonmutating",
  // contextual
  /open\(set\)/,
  // contextual
  "open",
  // contextual
  "operator",
  "optional",
  // contextual
  "override",
  // contextual
  "package",
  "postfix",
  // contextual
  "precedencegroup",
  "prefix",
  // contextual
  /private\(set\)/,
  "private",
  "protocol",
  /public\(set\)/,
  "public",
  "repeat",
  "required",
  // contextual
  "rethrows",
  "return",
  "set",
  // contextual
  "some",
  // contextual
  "static",
  "struct",
  "subscript",
  "super",
  "switch",
  "throws",
  "throw",
  /try\?/,
  // operator
  /try!/,
  // operator
  "try",
  // operator
  "typealias",
  /unowned\(safe\)/,
  // contextual
  /unowned\(unsafe\)/,
  // contextual
  "unowned",
  // contextual
  "var",
  "weak",
  // contextual
  "where",
  "while",
  "willSet"
  // contextual
], Xi = [
  "false",
  "nil",
  "true"
], Uf = [
  "assignment",
  "associativity",
  "higherThan",
  "left",
  "lowerThan",
  "none",
  "right"
], $f = [
  "#colorLiteral",
  "#column",
  "#dsohandle",
  "#else",
  "#elseif",
  "#endif",
  "#error",
  "#file",
  "#fileID",
  "#fileLiteral",
  "#filePath",
  "#function",
  "#if",
  "#imageLiteral",
  "#keyPath",
  "#line",
  "#selector",
  "#sourceLocation",
  "#warning"
], Qi = [
  "abs",
  "all",
  "any",
  "assert",
  "assertionFailure",
  "debugPrint",
  "dump",
  "fatalError",
  "getVaList",
  "isKnownUniquelyReferenced",
  "max",
  "min",
  "numericCast",
  "pointwiseMax",
  "pointwiseMin",
  "precondition",
  "preconditionFailure",
  "print",
  "readLine",
  "repeatElement",
  "sequence",
  "stride",
  "swap",
  "swift_unboxFromSwiftValueWithType",
  "transcode",
  "type",
  "unsafeBitCast",
  "unsafeDowncast",
  "withExtendedLifetime",
  "withUnsafeMutablePointer",
  "withUnsafePointer",
  "withVaList",
  "withoutActuallyEscaping",
  "zip"
], $s = Ie(
  /[/=\-+!*%<>&|^~?]/,
  /[\u00A1-\u00A7]/,
  /[\u00A9\u00AB]/,
  /[\u00AC\u00AE]/,
  /[\u00B0\u00B1]/,
  /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
  /[\u2016-\u2017]/,
  /[\u2020-\u2027]/,
  /[\u2030-\u203E]/,
  /[\u2041-\u2053]/,
  /[\u2055-\u205E]/,
  /[\u2190-\u23FF]/,
  /[\u2500-\u2775]/,
  /[\u2794-\u2BFF]/,
  /[\u2E00-\u2E7F]/,
  /[\u3001-\u3003]/,
  /[\u3008-\u3020]/,
  /[\u3030]/
), zs = Ie(
  $s,
  /[\u0300-\u036F]/,
  /[\u1DC0-\u1DFF]/,
  /[\u20D0-\u20FF]/,
  /[\uFE00-\uFE0F]/,
  /[\uFE20-\uFE2F]/
  // TODO: The following characters are also allowed, but the regex isn't supported yet.
  // /[\u{E0100}-\u{E01EF}]/u
), Pr = ce($s, zs, "*"), Vs = Ie(
  /[a-zA-Z_]/,
  /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
  /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
  /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
  /[\u1E00-\u1FFF]/,
  /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
  /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
  /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
  /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
  /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
  /[\uFE47-\uFEFE\uFF00-\uFFFD]/
  // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
  // The following characters are also allowed, but the regexes aren't supported yet.
  // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
  // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
  // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
  // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
), rr = Ie(
  Vs,
  /\d/,
  /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
), Qe = ce(Vs, rr, "*"), Jn = ce(/[A-Z]/, rr, "*"), zf = [
  "attached",
  "autoclosure",
  ce(/convention\(/, Ie("swift", "block", "c"), /\)/),
  "discardableResult",
  "dynamicCallable",
  "dynamicMemberLookup",
  "escaping",
  "freestanding",
  "frozen",
  "GKInspectable",
  "IBAction",
  "IBDesignable",
  "IBInspectable",
  "IBOutlet",
  "IBSegueAction",
  "inlinable",
  "main",
  "nonobjc",
  "NSApplicationMain",
  "NSCopying",
  "NSManaged",
  ce(/objc\(/, Qe, /\)/),
  "objc",
  "objcMembers",
  "propertyWrapper",
  "requires_stored_property_inits",
  "resultBuilder",
  "Sendable",
  "testable",
  "UIApplicationMain",
  "unchecked",
  "unknown",
  "usableFromInline",
  "warn_unqualified_access"
], Vf = [
  "iOS",
  "iOSApplicationExtension",
  "macOS",
  "macOSApplicationExtension",
  "macCatalyst",
  "macCatalystApplicationExtension",
  "watchOS",
  "watchOSApplicationExtension",
  "tvOS",
  "tvOSApplicationExtension",
  "swift"
];
function Hf(e) {
  const t = {
    match: /\s+/,
    relevance: 0
  }, n = e.COMMENT(
    "/\\*",
    "\\*/",
    { contains: ["self"] }
  ), r = [
    e.C_LINE_COMMENT_MODE,
    n
  ], i = {
    match: [
      /\./,
      Ie(...Ff, ...Yi)
    ],
    className: { 2: "keyword" }
  }, a = {
    // Consume .keyword to prevent highlighting properties and methods as keywords.
    match: ce(/\./, Ie(...Lr)),
    relevance: 0
  }, s = Lr.filter((oe) => typeof oe == "string").concat(["_|0"]), o = Lr.filter((oe) => typeof oe != "string").concat(Bf).map(hi), l = { variants: [
    {
      className: "keyword",
      match: Ie(...o, ...Yi)
    }
  ] }, c = {
    $pattern: Ie(
      /\b\w+/,
      // regular keywords
      /#\w+/
      // number keywords
    ),
    keyword: s.concat($f),
    literal: Xi
  }, u = [
    i,
    a,
    l
  ], d = {
    // Consume .built_in to prevent highlighting properties and methods.
    match: ce(/\./, Ie(...Qi)),
    relevance: 0
  }, p = {
    className: "built_in",
    match: ce(/\b/, Ie(...Qi), /(?=\()/)
  }, f = [
    d,
    p
  ], g = {
    // Prevent -> from being highlighting as an operator.
    match: /->/,
    relevance: 0
  }, h = {
    className: "operator",
    relevance: 0,
    variants: [
      { match: Pr },
      {
        // dot-operator: only operators that start with a dot are allowed to use dots as
        // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
        // characters that may also include dots.
        match: `\\.(\\.|${zs})+`
      }
    ]
  }, b = [
    g,
    h
  ], E = "([0-9]_*)+", v = "([0-9a-fA-F]_*)+", O = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal floating-point-literal (subsumes decimal-literal)
      { match: `\\b(${E})(\\.(${E}))?([eE][+-]?(${E}))?\\b` },
      // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
      { match: `\\b0x(${v})(\\.(${v}))?([pP][+-]?(${E}))?\\b` },
      // octal-literal
      { match: /\b0o([0-7]_*)+\b/ },
      // binary-literal
      { match: /\b0b([01]_*)+\b/ }
    ]
  }, N = (oe = "") => ({
    className: "subst",
    variants: [
      { match: ce(/\\/, oe, /[0\\tnr"']/) },
      { match: ce(/\\/, oe, /u\{[0-9a-fA-F]{1,8}\}/) }
    ]
  }), I = (oe = "") => ({
    className: "subst",
    match: ce(/\\/, oe, /[\t ]*(?:[\r\n]|\r\n)/)
  }), F = (oe = "") => ({
    className: "subst",
    label: "interpol",
    begin: ce(/\\/, oe, /\(/),
    end: /\)/
  }), G = (oe = "") => ({
    begin: ce(oe, /"""/),
    end: ce(/"""/, oe),
    contains: [
      N(oe),
      I(oe),
      F(oe)
    ]
  }), Z = (oe = "") => ({
    begin: ce(oe, /"/),
    end: ce(/"/, oe),
    contains: [
      N(oe),
      F(oe)
    ]
  }), z = {
    className: "string",
    variants: [
      G(),
      G("#"),
      G("##"),
      G("###"),
      Z(),
      Z("#"),
      Z("##"),
      Z("###")
    ]
  }, w = [
    e.BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [e.BACKSLASH_ESCAPE]
    }
  ], le = {
    begin: /\/[^\s](?=[^/\n]*\/)/,
    end: /\//,
    contains: w
  }, H = (oe) => {
    const Ye = ce(oe, /\//), q = ce(/\//, oe);
    return {
      begin: Ye,
      end: q,
      contains: [
        ...w,
        {
          scope: "comment",
          begin: `#(?!.*${q})`,
          end: /$/
        }
      ]
    };
  }, K = {
    scope: "regexp",
    variants: [
      H("###"),
      H("##"),
      H("#"),
      le
    ]
  }, J = { match: ce(/`/, Qe, /`/) }, re = {
    className: "variable",
    match: /\$\d+/
  }, T = {
    className: "variable",
    match: `\\$${rr}+`
  }, M = [
    J,
    re,
    T
  ], C = {
    match: /(@|#(un)?)available/,
    scope: "keyword",
    starts: { contains: [
      {
        begin: /\(/,
        end: /\)/,
        keywords: Vf,
        contains: [
          ...b,
          O,
          z
        ]
      }
    ] }
  }, W = {
    scope: "keyword",
    match: ce(/@/, Ie(...zf), mn(Ie(/\(/, /\s+/)))
  }, ee = {
    scope: "meta",
    match: ce(/@/, Qe)
  }, ae = [
    C,
    W,
    ee
  ], ue = {
    match: mn(/\b[A-Z]/),
    relevance: 0,
    contains: [
      {
        // Common Apple frameworks, for relevance boost
        className: "type",
        match: ce(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, rr, "+")
      },
      {
        // Type identifier
        className: "type",
        match: Jn,
        relevance: 0
      },
      {
        // Optional type
        match: /[?!]+/,
        relevance: 0
      },
      {
        // Variadic parameter
        match: /\.\.\./,
        relevance: 0
      },
      {
        // Protocol composition
        match: ce(/\s+&\s+/, mn(Jn)),
        relevance: 0
      }
    ]
  }, De = {
    begin: /</,
    end: />/,
    keywords: c,
    contains: [
      ...r,
      ...u,
      ...ae,
      g,
      ue
    ]
  };
  ue.contains.push(De);
  const ve = {
    match: ce(Qe, /\s*:/),
    keywords: "_|0",
    relevance: 0
  }, Ne = {
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    keywords: c,
    contains: [
      "self",
      ve,
      ...r,
      K,
      ...u,
      ...f,
      ...b,
      O,
      z,
      ...M,
      ...ae,
      ue
    ]
  }, st = {
    begin: /</,
    end: />/,
    keywords: "repeat each",
    contains: [
      ...r,
      ue
    ]
  }, $t = {
    begin: Ie(
      mn(ce(Qe, /\s*:/)),
      mn(ce(Qe, /\s+/, Qe, /\s*:/))
    ),
    end: /:/,
    relevance: 0,
    contains: [
      {
        className: "keyword",
        match: /\b_\b/
      },
      {
        className: "params",
        match: Qe
      }
    ]
  }, ot = {
    begin: /\(/,
    end: /\)/,
    keywords: c,
    contains: [
      $t,
      ...r,
      ...u,
      ...b,
      O,
      z,
      ...ae,
      ue,
      Ne
    ],
    endsParent: !0,
    illegal: /["']/
  }, zt = {
    match: [
      /(func|macro)/,
      /\s+/,
      Ie(J.match, Qe, Pr)
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      st,
      ot,
      t
    ],
    illegal: [
      /\[/,
      /%/
    ]
  }, Nt = {
    match: [
      /\b(?:subscript|init[?!]?)/,
      /\s*(?=[<(])/
    ],
    className: { 1: "keyword" },
    contains: [
      st,
      ot,
      t
    ],
    illegal: /\[|%/
  }, At = {
    match: [
      /operator/,
      /\s+/,
      Pr
    ],
    className: {
      1: "keyword",
      3: "title"
    }
  }, cn = {
    begin: [
      /precedencegroup/,
      /\s+/,
      Jn
    ],
    className: {
      1: "keyword",
      3: "title"
    },
    contains: [ue],
    keywords: [
      ...Uf,
      ...Xi
    ],
    end: /}/
  }, lt = {
    match: [
      /class\b/,
      /\s+/,
      /func\b/,
      /\s+/,
      /\b[A-Za-z_][A-Za-z0-9_]*\b/
    ],
    scope: {
      1: "keyword",
      3: "keyword",
      5: "title.function"
    }
  }, Vt = {
    match: [
      /class\b/,
      /\s+/,
      /var\b/
    ],
    scope: {
      1: "keyword",
      3: "keyword"
    }
  }, Ae = {
    begin: [
      /(struct|protocol|class|extension|enum|actor)/,
      /\s+/,
      Qe,
      /\s*/
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    },
    keywords: c,
    contains: [
      st,
      ...u,
      {
        begin: /:/,
        end: /\{/,
        keywords: c,
        contains: [
          {
            scope: "title.class.inherited",
            match: Jn
          },
          ...u
        ],
        relevance: 0
      }
    ]
  };
  for (const oe of z.variants) {
    const Ye = oe.contains.find((un) => un.label === "interpol");
    Ye.keywords = c;
    const q = [
      ...u,
      ...f,
      ...b,
      O,
      z,
      ...M
    ];
    Ye.contains = [
      ...q,
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          "self",
          ...q
        ]
      }
    ];
  }
  return {
    name: "Swift",
    keywords: c,
    contains: [
      ...r,
      zt,
      Nt,
      lt,
      Vt,
      Ae,
      At,
      cn,
      {
        beginKeywords: "import",
        end: /$/,
        contains: [...r],
        relevance: 0
      },
      K,
      ...u,
      ...f,
      ...b,
      O,
      z,
      ...M,
      ...ae,
      ue,
      Ne
    ]
  };
}
const ir = "[A-Za-z$_][0-9A-Za-z$_]*", Hs = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], js = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Zs = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Ks = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Gs = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Ws = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], qs = [].concat(
  Gs,
  Zs,
  Ks
);
function jf(e) {
  const t = e.regex, n = (C, { after: W }) => {
    const ee = "</" + C[0].slice(1);
    return C.input.indexOf(ee, W) !== -1;
  }, r = ir, i = {
    begin: "<>",
    end: "</>"
  }, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (C, W) => {
      const ee = C[0].length + C.index, ae = C.input[ee];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        ae === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        ae === ","
      ) {
        W.ignoreMatch();
        return;
      }
      ae === ">" && (n(C, { after: ee }) || W.ignoreMatch());
      let ue;
      const De = C.input.substring(ee);
      if (ue = De.match(/^\s*=/)) {
        W.ignoreMatch();
        return;
      }
      if ((ue = De.match(/^\s+extends\s+/)) && ue.index === 0) {
        W.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: ir,
    keyword: Hs,
    literal: js,
    built_in: qs,
    "variable.language": Ws
  }, l = "[0-9](_?[0-9])*", c = `\\.(${l})`, u = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: o,
    contains: []
    // defined later
  }, f = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, h = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, b = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, v = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, O = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    f,
    g,
    h,
    b,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    d
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = O.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(O)
  });
  const N = [].concat(v, p.contains), I = N.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(N)
    }
  ]), F = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: I
  }, G = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, Z = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Zs,
        ...Ks
      ]
    }
  }, z = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, w = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [F],
    illegal: /%/
  }, le = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function H(C) {
    return t.concat("(?!", C.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      H([
        ...Gs,
        "super",
        "import"
      ].map((C) => `${C}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, J = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, re = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      F
    ]
  }, T = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", M = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(T)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      F
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: I, CLASS_REFERENCE: Z },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      z,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      f,
      g,
      h,
      b,
      v,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      d,
      Z,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      M,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          v,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: T,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: o,
                    contains: I
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: a },
              {
                begin: s.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": s.isTrulyOpeningTag,
                end: s.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: s.begin,
                end: s.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      w,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          F,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      J,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [F]
      },
      K,
      le,
      G,
      re,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Zf(e) {
  const t = e.regex, n = jf(e), r = ir, i = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], a = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, s = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: i
    },
    contains: [n.exports.CLASS_REFERENCE]
  }, o = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, l = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], c = {
    $pattern: ir,
    keyword: Hs.concat(l),
    literal: js,
    built_in: qs.concat(i),
    "variable.language": Ws
  }, u = {
    className: "meta",
    begin: "@" + r
  }, d = (h, b, E) => {
    const v = h.contains.findIndex((O) => O.label === b);
    if (v === -1)
      throw new Error("can not find mode to replace");
    h.contains.splice(v, 1, E);
  };
  Object.assign(n.keywords, c), n.exports.PARAMS_CONTAINS.push(u);
  const p = n.contains.find((h) => h.scope === "attr"), f = Object.assign(
    {},
    p,
    { match: t.concat(r, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    p,
    // highlight the params key
    f
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    u,
    a,
    s,
    f
    // Added for optional property assignment highlighting
  ]), d(n, "shebang", e.SHEBANG()), d(n, "use_strict", o);
  const g = n.contains.find((h) => h.label === "func.def");
  return g.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
function Kf(e) {
  const t = e.regex, n = {
    className: "string",
    begin: /"(""|[^/n])"C\b/
  }, r = {
    className: "string",
    begin: /"/,
    end: /"/,
    illegal: /\n/,
    contains: [
      {
        // double quote escape
        begin: /""/
      }
    ]
  }, i = /\d{1,2}\/\d{1,2}\/\d{4}/, a = /\d{4}-\d{1,2}-\d{1,2}/, s = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, o = /\d{1,2}(:\d{1,2}){1,2}/, l = {
    className: "literal",
    variants: [
      {
        // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
        begin: t.concat(/# */, t.either(a, i), / *#/)
      },
      {
        // #H:mm[:ss]# (24h Time)
        begin: t.concat(/# */, o, / *#/)
      },
      {
        // #h[:mm[:ss]] A# (12h Time)
        begin: t.concat(/# */, s, / *#/)
      },
      {
        // date plus time
        begin: t.concat(
          /# */,
          t.either(a, i),
          / +/,
          t.either(s, o),
          / *#/
        )
      }
    ]
  }, c = {
    className: "number",
    relevance: 0,
    variants: [
      {
        // Float
        begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
      },
      {
        // Integer (base 10)
        begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 16)
        begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 8)
        begin: /&O[0-7_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 2)
        begin: /&B[01_]+((U?[SIL])|[%&])?/
      }
    ]
  }, u = {
    className: "label",
    begin: /^\w+:/
  }, d = e.COMMENT(/'''/, /$/, { contains: [
    {
      className: "doctag",
      begin: /<\/?/,
      end: />/
    }
  ] }), p = e.COMMENT(null, /$/, { variants: [
    { begin: /'/ },
    {
      // TODO: Use multi-class for leading spaces
      begin: /([\t ]|^)REM(?=\s)/
    }
  ] });
  return {
    name: "Visual Basic .NET",
    aliases: ["vb"],
    case_insensitive: !0,
    classNameAliases: { label: "symbol" },
    keywords: {
      keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
      built_in: (
        // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
        "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
      ),
      type: (
        // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
        "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
      ),
      literal: "true false nothing"
    },
    illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
    contains: [
      n,
      r,
      l,
      c,
      u,
      d,
      p,
      {
        className: "meta",
        // TODO: Use multi-class for indentation once available
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
        contains: [p]
      }
    ]
  };
}
function Gf(e) {
  e.regex;
  const t = e.COMMENT(/\(;/, /;\)/);
  t.contains.push("self");
  const n = e.COMMENT(/;;/, /$/), r = [
    "anyfunc",
    "block",
    "br",
    "br_if",
    "br_table",
    "call",
    "call_indirect",
    "data",
    "drop",
    "elem",
    "else",
    "end",
    "export",
    "func",
    "global.get",
    "global.set",
    "local.get",
    "local.set",
    "local.tee",
    "get_global",
    "get_local",
    "global",
    "if",
    "import",
    "local",
    "loop",
    "memory",
    "memory.grow",
    "memory.size",
    "module",
    "mut",
    "nop",
    "offset",
    "param",
    "result",
    "return",
    "select",
    "set_global",
    "set_local",
    "start",
    "table",
    "tee_local",
    "then",
    "type",
    "unreachable"
  ], i = {
    begin: [
      /(?:func|call|call_indirect)/,
      /\s+/,
      /\$[^\s)]+/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    }
  }, a = {
    className: "variable",
    begin: /\$[\w_]+/
  }, s = {
    match: /(\((?!;)|\))+/,
    className: "punctuation",
    relevance: 0
  }, o = {
    className: "number",
    relevance: 0,
    // borrowed from Prism, TODO: split out into variants
    match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
  }, l = {
    // look-ahead prevents us from gobbling up opcodes
    match: /(i32|i64|f32|f64)(?!\.)/,
    className: "type"
  }, c = {
    className: "keyword",
    // borrowed from Prism, TODO: split out into variants
    match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
  };
  return {
    name: "WebAssembly",
    keywords: {
      $pattern: /[\w.]+/,
      keyword: r
    },
    contains: [
      n,
      t,
      {
        match: [
          /(?:offset|align)/,
          /\s*/,
          /=/
        ],
        className: {
          1: "keyword",
          3: "operator"
        }
      },
      a,
      s,
      i,
      e.QUOTE_STRING_MODE,
      l,
      c,
      o
    ]
  };
}
function Wf(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, i = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, a = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, s = e.inherit(a, {
    begin: /\(/,
    end: /\)/
  }), o = e.inherit(e.APOS_STRING_MODE, { className: "string" }), l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), c = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [i]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [i]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          a,
          l,
          o,
          s,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  a,
                  s,
                  l,
                  o
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      i,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              l
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [c],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [c],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: c
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
function qf(e) {
  const t = "true false yes no null", n = "[\\w#;/?:@&=+$,.~*'()[\\]]+", r = {
    className: "attr",
    variants: [
      // added brackets support and special char support
      { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
      {
        // double quoted keys - with brackets and special char support
        begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
      },
      {
        // single quoted keys - with brackets and special char support
        begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
      }
    ]
  }, i = {
    className: "template-variable",
    variants: [
      {
        // jinja templates Ansible
        begin: /\{\{/,
        end: /\}\}/
      },
      {
        // Ruby i18n
        begin: /%\{/,
        end: /\}/
      }
    ]
  }, a = {
    className: "string",
    relevance: 0,
    begin: /'/,
    end: /'/,
    contains: [
      {
        match: /''/,
        scope: "char.escape",
        relevance: 0
      }
    ]
  }, s = {
    className: "string",
    relevance: 0,
    variants: [
      {
        begin: /"/,
        end: /"/
      },
      { begin: /\S+/ }
    ],
    contains: [
      e.BACKSLASH_ESCAPE,
      i
    ]
  }, o = e.inherit(s, { variants: [
    {
      begin: /'/,
      end: /'/,
      contains: [
        {
          begin: /''/,
          relevance: 0
        }
      ]
    },
    {
      begin: /"/,
      end: /"/
    },
    { begin: /[^\s,{}[\]]+/ }
  ] }), p = {
    className: "number",
    begin: "\\b" + "[0-9]{4}(-[0-9][0-9]){0,2}" + "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" + "(\\.[0-9]*)?" + "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" + "\\b"
  }, f = {
    end: ",",
    endsWithParent: !0,
    excludeEnd: !0,
    keywords: t,
    relevance: 0
  }, g = {
    begin: /\{/,
    end: /\}/,
    contains: [f],
    illegal: "\\n",
    relevance: 0
  }, h = {
    begin: "\\[",
    end: "\\]",
    contains: [f],
    illegal: "\\n",
    relevance: 0
  }, b = [
    r,
    {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    },
    {
      // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    },
    {
      // Ruby/Rails erb
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0
    },
    {
      // named tags
      className: "type",
      begin: "!\\w+!" + n
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    {
      // verbatim tags
      className: "type",
      begin: "!<" + n + ">"
    },
    {
      // primary tags
      className: "type",
      begin: "!" + n
    },
    {
      // secondary tags
      className: "type",
      begin: "!!" + n
    },
    {
      // fragment id &ref
      className: "meta",
      begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // fragment reference *ref
      className: "meta",
      begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // array listing
      className: "bullet",
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: "-(?=[ ]|$)",
      relevance: 0
    },
    e.HASH_COMMENT_MODE,
    {
      beginKeywords: t,
      keywords: { literal: t }
    },
    p,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: "number",
      begin: e.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    g,
    h,
    a,
    s
  ], E = [...b];
  return E.pop(), E.push(o), f.contains = E, {
    name: "YAML",
    case_insensitive: !0,
    aliases: ["yml"],
    contains: b
  };
}
const Yf = {
  arduino: Cd,
  bash: Rd,
  c: Id,
  cpp: Md,
  csharp: Dd,
  css: Hd,
  diff: jd,
  go: Zd,
  graphql: Kd,
  ini: Gd,
  java: Wd,
  javascript: Jd,
  json: ef,
  kotlin: nf,
  less: df,
  lua: ff,
  makefile: pf,
  markdown: mf,
  objectivec: gf,
  perl: hf,
  php: bf,
  "php-template": _f,
  plaintext: yf,
  python: Ef,
  "python-repl": vf,
  r: wf,
  ruby: xf,
  rust: kf,
  scss: Mf,
  shell: Df,
  sql: Lf,
  swift: Hf,
  typescript: Zf,
  vbnet: Kf,
  wasm: Gf,
  xml: Wf,
  yaml: qf
};
function A_() {
}
function O_() {
}
function Ys(e) {
  return e instanceof Map ? e.clear = e.delete = e.set = function() {
    throw new Error("map is read-only");
  } : e instanceof Set && (e.add = e.clear = e.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
    const n = e[t], r = typeof n;
    (r === "object" || r === "function") && !Object.isFrozen(n) && Ys(n);
  }), e;
}
class Ji {
  /**
   * @param {CompiledMode} mode
   */
  constructor(t) {
    t.data === void 0 && (t.data = {}), this.data = t.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function Xs(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function Et(e, ...t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    n[r] = e[r];
  return t.forEach(function(r) {
    for (const i in r)
      n[i] = r[i];
  }), /** @type {T} */
  n;
}
const Xf = "</span>", ea = (e) => !!e.scope, Qf = (e, { prefix: t }) => {
  if (e.startsWith("language:"))
    return e.replace("language:", "language-");
  if (e.includes(".")) {
    const n = e.split(".");
    return [
      `${t}${n.shift()}`,
      ...n.map((r, i) => `${r}${"_".repeat(i + 1)}`)
    ].join(" ");
  }
  return `${t}${e}`;
};
class Jf {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(t, n) {
    this.buffer = "", this.classPrefix = n.classPrefix, t.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(t) {
    this.buffer += Xs(t);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(t) {
    if (!ea(t)) return;
    const n = Qf(
      t.scope,
      { prefix: this.classPrefix }
    );
    this.span(n);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(t) {
    ea(t) && (this.buffer += Xf);
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
  span(t) {
    this.buffer += `<span class="${t}">`;
  }
}
const ta = (e = {}) => {
  const t = { children: [] };
  return Object.assign(t, e), t;
};
class bi {
  constructor() {
    this.rootNode = ta(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(t) {
    this.top.children.push(t);
  }
  /** @param {string} scope */
  openNode(t) {
    const n = ta({ scope: t });
    this.add(n), this.stack.push(n);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); ) ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(t) {
    return this.constructor._walk(t, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(t, n) {
    return typeof n == "string" ? t.addText(n) : n.children && (t.openNode(n), n.children.forEach((r) => this._walk(t, r)), t.closeNode(n)), t;
  }
  /**
   * @param {Node} node
   */
  static _collapse(t) {
    typeof t != "string" && t.children && (t.children.every((n) => typeof n == "string") ? t.children = [t.children.join("")] : t.children.forEach((n) => {
      bi._collapse(n);
    }));
  }
}
class ep extends bi {
  /**
   * @param {*} options
   */
  constructor(t) {
    super(), this.options = t;
  }
  /**
   * @param {string} text
   */
  addText(t) {
    t !== "" && this.add(t);
  }
  /** @param {string} scope */
  startScope(t) {
    this.openNode(t);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(t, n) {
    const r = t.root;
    n && (r.scope = `language:${n}`), this.add(r);
  }
  toHTML() {
    return new Jf(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function kn(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function Qs(e) {
  return Ut("(?=", e, ")");
}
function tp(e) {
  return Ut("(?:", e, ")*");
}
function np(e) {
  return Ut("(?:", e, ")?");
}
function Ut(...e) {
  return e.map((n) => kn(n)).join("");
}
function rp(e) {
  const t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function _i(...e) {
  return "(" + (rp(e).capture ? "" : "?:") + e.map((r) => kn(r)).join("|") + ")";
}
function Js(e) {
  return new RegExp(e.toString() + "|").exec("").length - 1;
}
function ip(e, t) {
  const n = e && e.exec(t);
  return n && n.index === 0;
}
const ap = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function yi(e, { joinWith: t }) {
  let n = 0;
  return e.map((r) => {
    n += 1;
    const i = n;
    let a = kn(r), s = "";
    for (; a.length > 0; ) {
      const o = ap.exec(a);
      if (!o) {
        s += a;
        break;
      }
      s += a.substring(0, o.index), a = a.substring(o.index + o[0].length), o[0][0] === "\\" && o[1] ? s += "\\" + String(Number(o[1]) + i) : (s += o[0], o[0] === "(" && n++);
    }
    return s;
  }).map((r) => `(${r})`).join(t);
}
const sp = /\b\B/, eo = "[a-zA-Z]\\w*", Ei = "[a-zA-Z_]\\w*", to = "\\b\\d+(\\.\\d+)?", no = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", ro = "\\b(0b[01]+)", op = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", lp = (e = {}) => {
  const t = /^#![ ]*\//;
  return e.binary && (e.begin = Ut(
    t,
    /.*\b/,
    e.binary,
    /\b.*/
  )), Et({
    scope: "meta",
    begin: t,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (n, r) => {
      n.index !== 0 && r.ignoreMatch();
    }
  }, e);
}, Tn = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, cp = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [Tn]
}, up = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [Tn]
}, dp = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, kr = function(e, t, n = {}) {
  const r = Et(
    {
      scope: "comment",
      begin: e,
      end: t,
      contains: []
    },
    n
  );
  r.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: !0,
    relevance: 0
  });
  const i = _i(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  return r.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: Ut(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        i,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  ), r;
}, fp = kr("//", "$"), pp = kr("/\\*", "\\*/"), mp = kr("#", "$"), gp = {
  scope: "number",
  begin: to,
  relevance: 0
}, hp = {
  scope: "number",
  begin: no,
  relevance: 0
}, bp = {
  scope: "number",
  begin: ro,
  relevance: 0
}, _p = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    Tn,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [Tn]
    }
  ]
}, yp = {
  scope: "title",
  begin: eo,
  relevance: 0
}, Ep = {
  scope: "title",
  begin: Ei,
  relevance: 0
}, vp = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + Ei,
  relevance: 0
}, wp = function(e) {
  return Object.assign(
    e,
    {
      /** @type {ModeCallback} */
      "on:begin": (t, n) => {
        n.data._beginMatch = t[1];
      },
      /** @type {ModeCallback} */
      "on:end": (t, n) => {
        n.data._beginMatch !== t[1] && n.ignoreMatch();
      }
    }
  );
};
var er = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: cp,
  BACKSLASH_ESCAPE: Tn,
  BINARY_NUMBER_MODE: bp,
  BINARY_NUMBER_RE: ro,
  COMMENT: kr,
  C_BLOCK_COMMENT_MODE: pp,
  C_LINE_COMMENT_MODE: fp,
  C_NUMBER_MODE: hp,
  C_NUMBER_RE: no,
  END_SAME_AS_BEGIN: wp,
  HASH_COMMENT_MODE: mp,
  IDENT_RE: eo,
  MATCH_NOTHING_RE: sp,
  METHOD_GUARD: vp,
  NUMBER_MODE: gp,
  NUMBER_RE: to,
  PHRASAL_WORDS_MODE: dp,
  QUOTE_STRING_MODE: up,
  REGEXP_MODE: _p,
  RE_STARTERS_RE: op,
  SHEBANG: lp,
  TITLE_MODE: yp,
  UNDERSCORE_IDENT_RE: Ei,
  UNDERSCORE_TITLE_MODE: Ep
});
function xp(e, t) {
  e.input[e.index - 1] === "." && t.ignoreMatch();
}
function kp(e, t) {
  e.className !== void 0 && (e.scope = e.className, delete e.className);
}
function Tp(e, t) {
  t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = xp, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
}
function Sp(e, t) {
  Array.isArray(e.illegal) && (e.illegal = _i(...e.illegal));
}
function Np(e, t) {
  if (e.match) {
    if (e.begin || e.end) throw new Error("begin & end are not supported with match");
    e.begin = e.match, delete e.match;
  }
}
function Ap(e, t) {
  e.relevance === void 0 && (e.relevance = 1);
}
const Op = (e, t) => {
  if (!e.beforeMatch) return;
  if (e.starts) throw new Error("beforeMatch cannot be used with starts");
  const n = Object.assign({}, e);
  Object.keys(e).forEach((r) => {
    delete e[r];
  }), e.keywords = n.keywords, e.begin = Ut(n.beforeMatch, Qs(n.begin)), e.starts = {
    relevance: 0,
    contains: [
      Object.assign(n, { endsParent: !0 })
    ]
  }, e.relevance = 0, delete n.beforeMatch;
}, Cp = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
], Rp = "keyword";
function io(e, t, n = Rp) {
  const r = /* @__PURE__ */ Object.create(null);
  return typeof e == "string" ? i(n, e.split(" ")) : Array.isArray(e) ? i(n, e) : Object.keys(e).forEach(function(a) {
    Object.assign(
      r,
      io(e[a], t, a)
    );
  }), r;
  function i(a, s) {
    t && (s = s.map((o) => o.toLowerCase())), s.forEach(function(o) {
      const l = o.split("|");
      r[l[0]] = [a, Ip(l[0], l[1])];
    });
  }
}
function Ip(e, t) {
  return t ? Number(t) : Mp(e) ? 0 : 1;
}
function Mp(e) {
  return Cp.includes(e.toLowerCase());
}
const na = {}, It = (e) => {
  console.error(e);
}, ra = (e, ...t) => {
  console.log(`WARN: ${e}`, ...t);
}, Zt = (e, t) => {
  na[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), na[`${e}/${t}`] = !0);
}, ar = new Error();
function ao(e, t, { key: n }) {
  let r = 0;
  const i = e[n], a = {}, s = {};
  for (let o = 1; o <= t.length; o++)
    s[o + r] = i[o], a[o + r] = !0, r += Js(t[o - 1]);
  e[n] = s, e[n]._emit = a, e[n]._multi = !0;
}
function Dp(e) {
  if (Array.isArray(e.begin)) {
    if (e.skip || e.excludeBegin || e.returnBegin)
      throw It("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ar;
    if (typeof e.beginScope != "object" || e.beginScope === null)
      throw It("beginScope must be object"), ar;
    ao(e, e.begin, { key: "beginScope" }), e.begin = yi(e.begin, { joinWith: "" });
  }
}
function Lp(e) {
  if (Array.isArray(e.end)) {
    if (e.skip || e.excludeEnd || e.returnEnd)
      throw It("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ar;
    if (typeof e.endScope != "object" || e.endScope === null)
      throw It("endScope must be object"), ar;
    ao(e, e.end, { key: "endScope" }), e.end = yi(e.end, { joinWith: "" });
  }
}
function Pp(e) {
  e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
}
function Fp(e) {
  Pp(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), Dp(e), Lp(e);
}
function Bp(e) {
  function t(s, o) {
    return new RegExp(
      kn(s),
      "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (o ? "g" : "")
    );
  }
  class n {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(o, l) {
      l.position = this.position++, this.matchIndexes[this.matchAt] = l, this.regexes.push([l, o]), this.matchAt += Js(o) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const o = this.regexes.map((l) => l[1]);
      this.matcherRe = t(yi(o, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(o) {
      this.matcherRe.lastIndex = this.lastIndex;
      const l = this.matcherRe.exec(o);
      if (!l)
        return null;
      const c = l.findIndex((d, p) => p > 0 && d !== void 0), u = this.matchIndexes[c];
      return l.splice(0, c), Object.assign(l, u);
    }
  }
  class r {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(o) {
      if (this.multiRegexes[o]) return this.multiRegexes[o];
      const l = new n();
      return this.rules.slice(o).forEach(([c, u]) => l.addRule(c, u)), l.compile(), this.multiRegexes[o] = l, l;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(o, l) {
      this.rules.push([o, l]), l.type === "begin" && this.count++;
    }
    /** @param {string} s */
    exec(o) {
      const l = this.getMatcher(this.regexIndex);
      l.lastIndex = this.lastIndex;
      let c = l.exec(o);
      if (this.resumingScanAtSamePosition() && !(c && c.index === this.lastIndex)) {
        const u = this.getMatcher(0);
        u.lastIndex = this.lastIndex + 1, c = u.exec(o);
      }
      return c && (this.regexIndex += c.position + 1, this.regexIndex === this.count && this.considerAll()), c;
    }
  }
  function i(s) {
    const o = new r();
    return s.contains.forEach((l) => o.addRule(l.begin, { rule: l, type: "begin" })), s.terminatorEnd && o.addRule(s.terminatorEnd, { type: "end" }), s.illegal && o.addRule(s.illegal, { type: "illegal" }), o;
  }
  function a(s, o) {
    const l = (
      /** @type CompiledMode */
      s
    );
    if (s.isCompiled) return l;
    [
      kp,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      Np,
      Fp,
      Op
    ].forEach((u) => u(s, o)), e.compilerExtensions.forEach((u) => u(s, o)), s.__beforeBegin = null, [
      Tp,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      Sp,
      // default to 1 relevance if not specified
      Ap
    ].forEach((u) => u(s, o)), s.isCompiled = !0;
    let c = null;
    return typeof s.keywords == "object" && s.keywords.$pattern && (s.keywords = Object.assign({}, s.keywords), c = s.keywords.$pattern, delete s.keywords.$pattern), c = c || /\w+/, s.keywords && (s.keywords = io(s.keywords, e.case_insensitive)), l.keywordPatternRe = t(c, !0), o && (s.begin || (s.begin = /\B|\b/), l.beginRe = t(l.begin), !s.end && !s.endsWithParent && (s.end = /\B|\b/), s.end && (l.endRe = t(l.end)), l.terminatorEnd = kn(l.end) || "", s.endsWithParent && o.terminatorEnd && (l.terminatorEnd += (s.end ? "|" : "") + o.terminatorEnd)), s.illegal && (l.illegalRe = t(
      /** @type {RegExp | string} */
      s.illegal
    )), s.contains || (s.contains = []), s.contains = [].concat(...s.contains.map(function(u) {
      return Up(u === "self" ? s : u);
    })), s.contains.forEach(function(u) {
      a(
        /** @type Mode */
        u,
        l
      );
    }), s.starts && a(s.starts, o), l.matcher = i(l), l;
  }
  if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return e.classNameAliases = Et(e.classNameAliases || {}), a(
    /** @type Mode */
    e
  );
}
function so(e) {
  return e ? e.endsWithParent || so(e.starts) : !1;
}
function Up(e) {
  return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
    return Et(e, { variants: null }, t);
  })), e.cachedVariants ? e.cachedVariants : so(e) ? Et(e, { starts: e.starts ? Et(e.starts) : null }) : Object.isFrozen(e) ? Et(e) : e;
}
var $p = "11.11.1";
class zp extends Error {
  constructor(t, n) {
    super(t), this.name = "HTMLInjectionError", this.html = n;
  }
}
const Fr = Xs, ia = Et, aa = Symbol("nomatch"), Vp = 7, oo = function(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = [];
  let i = !0;
  const a = "Could not find the language '{}', did you forget to load/include a language module?", s = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let o = {
    ignoreUnescapedHTML: !1,
    throwUnescapedHTML: !1,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: ep
  };
  function l(T) {
    return o.noHighlightRe.test(T);
  }
  function c(T) {
    let M = T.className + " ";
    M += T.parentNode ? T.parentNode.className : "";
    const C = o.languageDetectRe.exec(M);
    if (C) {
      const W = Z(C[1]);
      return W || (ra(a.replace("{}", C[1])), ra("Falling back to no-highlight mode for this block.", T)), W ? C[1] : "no-highlight";
    }
    return M.split(/\s+/).find((W) => l(W) || Z(W));
  }
  function u(T, M, C) {
    let W = "", ee = "";
    typeof M == "object" ? (W = T, C = M.ignoreIllegals, ee = M.language) : (Zt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Zt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), ee = T, W = M), C === void 0 && (C = !0);
    const ae = {
      code: W,
      language: ee
    };
    J("before:highlight", ae);
    const ue = ae.result ? ae.result : d(ae.language, ae.code, C);
    return ue.code = ae.code, J("after:highlight", ue), ue;
  }
  function d(T, M, C, W) {
    const ee = /* @__PURE__ */ Object.create(null);
    function ae(_, S) {
      return _.keywords[S];
    }
    function ue() {
      if (!q.keywords) {
        he.addText(m);
        return;
      }
      let _ = 0;
      q.keywordPatternRe.lastIndex = 0;
      let S = q.keywordPatternRe.exec(m), B = "";
      for (; S; ) {
        B += m.substring(_, S.index);
        const j = Ae.case_insensitive ? S[0].toLowerCase() : S[0], se = ae(q, j);
        if (se) {
          const [we, Xe] = se;
          if (he.addText(B), B = "", ee[j] = (ee[j] || 0) + 1, ee[j] <= Vp && (y += Xe), we.startsWith("_"))
            B += S[0];
          else {
            const Ar = Ae.classNameAliases[we] || we;
            Ne(S[0], Ar);
          }
        } else
          B += S[0];
        _ = q.keywordPatternRe.lastIndex, S = q.keywordPatternRe.exec(m);
      }
      B += m.substring(_), he.addText(B);
    }
    function De() {
      if (m === "") return;
      let _ = null;
      if (typeof q.subLanguage == "string") {
        if (!t[q.subLanguage]) {
          he.addText(m);
          return;
        }
        _ = d(q.subLanguage, m, !0, un[q.subLanguage]), un[q.subLanguage] = /** @type {CompiledMode} */
        _._top;
      } else
        _ = f(m, q.subLanguage.length ? q.subLanguage : null);
      q.relevance > 0 && (y += _.relevance), he.__addSublanguage(_._emitter, _.language);
    }
    function ve() {
      q.subLanguage != null ? De() : ue(), m = "";
    }
    function Ne(_, S) {
      _ !== "" && (he.startScope(S), he.addText(_), he.endScope());
    }
    function st(_, S) {
      let B = 1;
      const j = S.length - 1;
      for (; B <= j; ) {
        if (!_._emit[B]) {
          B++;
          continue;
        }
        const se = Ae.classNameAliases[_[B]] || _[B], we = S[B];
        se ? Ne(we, se) : (m = we, ue(), m = ""), B++;
      }
    }
    function $t(_, S) {
      return _.scope && typeof _.scope == "string" && he.openNode(Ae.classNameAliases[_.scope] || _.scope), _.beginScope && (_.beginScope._wrap ? (Ne(m, Ae.classNameAliases[_.beginScope._wrap] || _.beginScope._wrap), m = "") : _.beginScope._multi && (st(_.beginScope, S), m = "")), q = Object.create(_, { parent: { value: q } }), q;
    }
    function ot(_, S, B) {
      let j = ip(_.endRe, B);
      if (j) {
        if (_["on:end"]) {
          const se = new Ji(_);
          _["on:end"](S, se), se.isMatchIgnored && (j = !1);
        }
        if (j) {
          for (; _.endsParent && _.parent; )
            _ = _.parent;
          return _;
        }
      }
      if (_.endsWithParent)
        return ot(_.parent, S, B);
    }
    function zt(_) {
      return q.matcher.regexIndex === 0 ? (m += _[0], 1) : (R = !0, 0);
    }
    function Nt(_) {
      const S = _[0], B = _.rule, j = new Ji(B), se = [B.__beforeBegin, B["on:begin"]];
      for (const we of se)
        if (we && (we(_, j), j.isMatchIgnored))
          return zt(S);
      return B.skip ? m += S : (B.excludeBegin && (m += S), ve(), !B.returnBegin && !B.excludeBegin && (m = S)), $t(B, _), B.returnBegin ? 0 : S.length;
    }
    function At(_) {
      const S = _[0], B = M.substring(_.index), j = ot(q, _, B);
      if (!j)
        return aa;
      const se = q;
      q.endScope && q.endScope._wrap ? (ve(), Ne(S, q.endScope._wrap)) : q.endScope && q.endScope._multi ? (ve(), st(q.endScope, _)) : se.skip ? m += S : (se.returnEnd || se.excludeEnd || (m += S), ve(), se.excludeEnd && (m = S));
      do
        q.scope && he.closeNode(), !q.skip && !q.subLanguage && (y += q.relevance), q = q.parent;
      while (q !== j.parent);
      return j.starts && $t(j.starts, _), se.returnEnd ? 0 : S.length;
    }
    function cn() {
      const _ = [];
      for (let S = q; S !== Ae; S = S.parent)
        S.scope && _.unshift(S.scope);
      _.forEach((S) => he.openNode(S));
    }
    let lt = {};
    function Vt(_, S) {
      const B = S && S[0];
      if (m += _, B == null)
        return ve(), 0;
      if (lt.type === "begin" && S.type === "end" && lt.index === S.index && B === "") {
        if (m += M.slice(S.index, S.index + 1), !i) {
          const j = new Error(`0 width match regex (${T})`);
          throw j.languageName = T, j.badRule = lt.rule, j;
        }
        return 1;
      }
      if (lt = S, S.type === "begin")
        return Nt(S);
      if (S.type === "illegal" && !C) {
        const j = new Error('Illegal lexeme "' + B + '" for mode "' + (q.scope || "<unnamed>") + '"');
        throw j.mode = q, j;
      } else if (S.type === "end") {
        const j = At(S);
        if (j !== aa)
          return j;
      }
      if (S.type === "illegal" && B === "")
        return m += `
`, 1;
      if (P > 1e5 && P > S.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return m += B, B.length;
    }
    const Ae = Z(T);
    if (!Ae)
      throw It(a.replace("{}", T)), new Error('Unknown language: "' + T + '"');
    const oe = Bp(Ae);
    let Ye = "", q = W || oe;
    const un = {}, he = new o.__emitter(o);
    cn();
    let m = "", y = 0, x = 0, P = 0, R = !1;
    try {
      if (Ae.__emitTokens)
        Ae.__emitTokens(M, he);
      else {
        for (q.matcher.considerAll(); ; ) {
          P++, R ? R = !1 : q.matcher.considerAll(), q.matcher.lastIndex = x;
          const _ = q.matcher.exec(M);
          if (!_) break;
          const S = M.substring(x, _.index), B = Vt(S, _);
          x = _.index + B;
        }
        Vt(M.substring(x));
      }
      return he.finalize(), Ye = he.toHTML(), {
        language: T,
        value: Ye,
        relevance: y,
        illegal: !1,
        _emitter: he,
        _top: q
      };
    } catch (_) {
      if (_.message && _.message.includes("Illegal"))
        return {
          language: T,
          value: Fr(M),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: _.message,
            index: x,
            context: M.slice(x - 100, x + 100),
            mode: _.mode,
            resultSoFar: Ye
          },
          _emitter: he
        };
      if (i)
        return {
          language: T,
          value: Fr(M),
          illegal: !1,
          relevance: 0,
          errorRaised: _,
          _emitter: he,
          _top: q
        };
      throw _;
    }
  }
  function p(T) {
    const M = {
      value: Fr(T),
      illegal: !1,
      relevance: 0,
      _top: s,
      _emitter: new o.__emitter(o)
    };
    return M._emitter.addText(T), M;
  }
  function f(T, M) {
    M = M || o.languages || Object.keys(t);
    const C = p(T), W = M.filter(Z).filter(w).map(
      (ve) => d(ve, T, !1)
    );
    W.unshift(C);
    const ee = W.sort((ve, Ne) => {
      if (ve.relevance !== Ne.relevance) return Ne.relevance - ve.relevance;
      if (ve.language && Ne.language) {
        if (Z(ve.language).supersetOf === Ne.language)
          return 1;
        if (Z(Ne.language).supersetOf === ve.language)
          return -1;
      }
      return 0;
    }), [ae, ue] = ee, De = ae;
    return De.secondBest = ue, De;
  }
  function g(T, M, C) {
    const W = M && n[M] || C;
    T.classList.add("hljs"), T.classList.add(`language-${W}`);
  }
  function h(T) {
    let M = null;
    const C = c(T);
    if (l(C)) return;
    if (J(
      "before:highlightElement",
      { el: T, language: C }
    ), T.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", T);
      return;
    }
    if (T.children.length > 0 && (o.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(T)), o.throwUnescapedHTML))
      throw new zp(
        "One of your code blocks includes unescaped HTML.",
        T.innerHTML
      );
    M = T;
    const W = M.textContent, ee = C ? u(W, { language: C, ignoreIllegals: !0 }) : f(W);
    T.innerHTML = ee.value, T.dataset.highlighted = "yes", g(T, C, ee.language), T.result = {
      language: ee.language,
      // TODO: remove with version 11.0
      re: ee.relevance,
      relevance: ee.relevance
    }, ee.secondBest && (T.secondBest = {
      language: ee.secondBest.language,
      relevance: ee.secondBest.relevance
    }), J("after:highlightElement", { el: T, result: ee, text: W });
  }
  function b(T) {
    o = ia(o, T);
  }
  const E = () => {
    N(), Zt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function v() {
    N(), Zt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let O = !1;
  function N() {
    function T() {
      N();
    }
    if (document.readyState === "loading") {
      O || window.addEventListener("DOMContentLoaded", T, !1), O = !0;
      return;
    }
    document.querySelectorAll(o.cssSelector).forEach(h);
  }
  function I(T, M) {
    let C = null;
    try {
      C = M(e);
    } catch (W) {
      if (It("Language definition for '{}' could not be registered.".replace("{}", T)), i)
        It(W);
      else
        throw W;
      C = s;
    }
    C.name || (C.name = T), t[T] = C, C.rawDefinition = M.bind(null, e), C.aliases && z(C.aliases, { languageName: T });
  }
  function F(T) {
    delete t[T];
    for (const M of Object.keys(n))
      n[M] === T && delete n[M];
  }
  function G() {
    return Object.keys(t);
  }
  function Z(T) {
    return T = (T || "").toLowerCase(), t[T] || t[n[T]];
  }
  function z(T, { languageName: M }) {
    typeof T == "string" && (T = [T]), T.forEach((C) => {
      n[C.toLowerCase()] = M;
    });
  }
  function w(T) {
    const M = Z(T);
    return M && !M.disableAutodetect;
  }
  function le(T) {
    T["before:highlightBlock"] && !T["before:highlightElement"] && (T["before:highlightElement"] = (M) => {
      T["before:highlightBlock"](
        Object.assign({ block: M.el }, M)
      );
    }), T["after:highlightBlock"] && !T["after:highlightElement"] && (T["after:highlightElement"] = (M) => {
      T["after:highlightBlock"](
        Object.assign({ block: M.el }, M)
      );
    });
  }
  function H(T) {
    le(T), r.push(T);
  }
  function K(T) {
    const M = r.indexOf(T);
    M !== -1 && r.splice(M, 1);
  }
  function J(T, M) {
    const C = T;
    r.forEach(function(W) {
      W[C] && W[C](M);
    });
  }
  function re(T) {
    return Zt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Zt("10.7.0", "Please use highlightElement now."), h(T);
  }
  Object.assign(e, {
    highlight: u,
    highlightAuto: f,
    highlightAll: N,
    highlightElement: h,
    // TODO: Remove with v12 API
    highlightBlock: re,
    configure: b,
    initHighlighting: E,
    initHighlightingOnLoad: v,
    registerLanguage: I,
    unregisterLanguage: F,
    listLanguages: G,
    getLanguage: Z,
    registerAliases: z,
    autoDetection: w,
    inherit: ia,
    addPlugin: H,
    removePlugin: K
  }), e.debugMode = function() {
    i = !1;
  }, e.safeMode = function() {
    i = !0;
  }, e.versionString = $p, e.regex = {
    concat: Ut,
    lookahead: Qs,
    either: _i,
    optional: np,
    anyNumberOfTimes: tp
  };
  for (const T in er)
    typeof er[T] == "object" && Ys(er[T]);
  return Object.assign(e, er), e;
}, rn = oo({});
rn.newInstance = () => oo({});
var Hp = rn;
rn.HighlightJS = rn;
rn.default = rn;
const jp = /* @__PURE__ */ Pa(Hp), sa = {}, Zp = "hljs-";
function Kp(e) {
  const t = jp.newInstance();
  return e && a(e), {
    highlight: n,
    highlightAuto: r,
    listLanguages: i,
    register: a,
    registerAlias: s,
    registered: o
  };
  function n(l, c, u) {
    const d = u || sa, p = typeof d.prefix == "string" ? d.prefix : Zp;
    if (!t.getLanguage(l))
      throw new Error("Unknown language: `" + l + "` is not registered");
    t.configure({ __emitter: Gp, classPrefix: p });
    const f = (
      /** @type {HighlightResult & {_emitter: HastEmitter}} */
      t.highlight(c, { ignoreIllegals: !0, language: l })
    );
    if (f.errorRaised)
      throw new Error("Could not highlight with `Highlight.js`", {
        cause: f.errorRaised
      });
    const g = f._emitter.root, h = (
      /** @type {RootData} */
      g.data
    );
    return h.language = f.language, h.relevance = f.relevance, g;
  }
  function r(l, c) {
    const d = (c || sa).subset || i();
    let p = -1, f = 0, g;
    for (; ++p < d.length; ) {
      const h = d[p];
      if (!t.getLanguage(h)) continue;
      const b = n(h, l, c);
      b.data && b.data.relevance !== void 0 && b.data.relevance > f && (f = b.data.relevance, g = b);
    }
    return g || {
      type: "root",
      children: [],
      data: { language: void 0, relevance: f }
    };
  }
  function i() {
    return t.listLanguages();
  }
  function a(l, c) {
    if (typeof l == "string")
      t.registerLanguage(l, c);
    else {
      let u;
      for (u in l)
        Object.hasOwn(l, u) && t.registerLanguage(u, l[u]);
    }
  }
  function s(l, c) {
    if (typeof l == "string")
      t.registerAliases(
        // Note: copy needed because hljs doesn’t accept readonly arrays yet.
        typeof c == "string" ? c : [...c],
        { languageName: l }
      );
    else {
      let u;
      for (u in l)
        if (Object.hasOwn(l, u)) {
          const d = l[u];
          t.registerAliases(
            // Note: copy needed because hljs doesn’t accept readonly arrays yet.
            typeof d == "string" ? d : [...d],
            { languageName: u }
          );
        }
    }
  }
  function o(l) {
    return !!t.getLanguage(l);
  }
}
class Gp {
  /**
   * @param {Readonly<HljsOptions>} options
   *   Configuration.
   * @returns
   *   Instance.
   */
  constructor(t) {
    this.options = t, this.root = {
      type: "root",
      children: [],
      data: { language: void 0, relevance: 0 }
    }, this.stack = [this.root];
  }
  /**
   * @param {string} value
   *   Text to add.
   * @returns {undefined}
   *   Nothing.
   *
   */
  addText(t) {
    if (t === "") return;
    const n = this.stack[this.stack.length - 1], r = n.children[n.children.length - 1];
    r && r.type === "text" ? r.value += t : n.children.push({ type: "text", value: t });
  }
  /**
   *
   * @param {unknown} rawName
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  startScope(t) {
    this.openNode(String(t));
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  endScope() {
    this.closeNode();
  }
  /**
   * @param {HastEmitter} other
   *   Other emitter.
   * @param {string} name
   *   Name of the sublanguage.
   * @returns {undefined}
   *   Nothing.
   */
  __addSublanguage(t, n) {
    const r = this.stack[this.stack.length - 1], i = (
      /** @type {Array<ElementContent>} */
      t.root.children
    );
    n ? r.children.push({
      type: "element",
      tagName: "span",
      properties: { className: [n] },
      children: i
    }) : r.children.push(...i);
  }
  /**
   * @param {string} name
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  openNode(t) {
    const n = this, r = t.split(".").map(function(s, o) {
      return o ? s + "_".repeat(o) : n.options.classPrefix + s;
    }), i = this.stack[this.stack.length - 1], a = {
      type: "element",
      tagName: "span",
      properties: { className: r },
      children: []
    };
    i.children.push(a), this.stack.push(a);
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  closeNode() {
    this.stack.pop();
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  finalize() {
  }
  /**
   * @returns {string}
   *   Nothing.
   */
  toHTML() {
    return "";
  }
}
const lo = [], Wp = !0, Yr = !1, qp = "skip";
function co(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = Zn(i), s = r ? -1 : 1;
  o(e, void 0, [])();
  function o(l, c, u) {
    const d = (
      /** @type {Record<string, unknown>} */
      l && typeof l == "object" ? l : {}
    );
    if (typeof d.type == "string") {
      const f = (
        // `hast`
        typeof d.tagName == "string" ? d.tagName : (
          // `xast`
          typeof d.name == "string" ? d.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (l.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let f = lo, g, h, b;
      if ((!t || a(l, c, u[u.length - 1] || void 0)) && (f = Yp(n(l, u)), f[0] === Yr))
        return f;
      if ("children" in l && l.children) {
        const E = (
          /** @type {UnistParent} */
          l
        );
        if (E.children && f[0] !== qp)
          for (h = (r ? E.children.length : -1) + s, b = u.concat(E); h > -1 && h < E.children.length; ) {
            const v = E.children[h];
            if (g = o(v, h, b)(), g[0] === Yr)
              return g;
            h = typeof g[1] == "number" ? g[1] : h + s;
          }
      }
      return f;
    }
  }
}
function Yp(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Wp, e] : e == null ? lo : [e];
}
function uo(e, t, n, r) {
  let i, a, s;
  typeof t == "function" && typeof n != "function" ? (a = void 0, s = t, i = n) : (a = t, s = n, i = r), co(e, a, o, i);
  function o(l, c) {
    const u = c[c.length - 1], d = u ? u.children.indexOf(l) : void 0;
    return s(l, d, u);
  }
}
const Xp = {};
function Qp(e) {
  const t = e || Xp, n = t.aliases, r = t.detect || !1, i = t.languages || Yf, a = t.plainText, s = t.prefix, o = t.subset;
  let l = "hljs";
  const c = Kp(i);
  if (n && c.registerAlias(n), s) {
    const u = s.indexOf("-");
    l = u === -1 ? s : s.slice(0, u);
  }
  return function(u, d) {
    uo(u, "element", function(p, f, g) {
      if (p.tagName !== "code" || !g || g.type !== "element" || g.tagName !== "pre")
        return;
      const h = Jp(p);
      if (h === !1 || !h && !r || h && a && a.includes(h))
        return;
      Array.isArray(p.properties.className) || (p.properties.className = []), p.properties.className.includes(l) || p.properties.className.unshift(l);
      const b = wd(p, { whitespace: "pre" });
      let E;
      try {
        E = h ? c.highlight(h, b, { prefix: s }) : c.highlightAuto(b, { prefix: s, subset: o });
      } catch (v) {
        const O = (
          /** @type {Error} */
          v
        );
        if (h && /Unknown language/.test(O.message)) {
          d.message(
            "Cannot highlight as `" + h + "`, it’s not registered",
            {
              ancestors: [g, p],
              cause: O,
              place: p.position,
              ruleId: "missing-language",
              source: "rehype-highlight"
            }
          );
          return;
        }
        throw O;
      }
      !h && E.data && E.data.language && p.properties.className.push("language-" + E.data.language), E.children.length > 0 && (p.children = /** @type {Array<ElementContent>} */
      E.children);
    });
  };
}
function Jp(e) {
  const t = e.properties.className;
  let n = -1;
  if (!Array.isArray(t))
    return;
  let r;
  for (; ++n < t.length; ) {
    const i = String(t[n]);
    if (i === "no-highlight" || i === "nohighlight")
      return !1;
    !r && i.slice(0, 5) === "lang-" && (r = i.slice(5)), !r && i.slice(0, 9) === "language-" && (r = i.slice(9));
  }
  return r;
}
function oa(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
const Sn = St(/[A-Za-z]/), vi = St(/[\dA-Za-z]/), C_ = St(/[#-'*+\--9=?A-Z^-~]/);
function em(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const R_ = St(/\d/), I_ = St(/[\dA-Fa-f]/), M_ = St(/[!-/:-@[-`{-~]/);
function Jt(e) {
  return e !== null && e < -2;
}
function Fe(e) {
  return e !== null && (e < 0 || e === 32);
}
function ft(e) {
  return e === -2 || e === -1 || e === 32;
}
const Tr = St(new RegExp("\\p{P}|\\p{S}", "u")), Dt = St(/\s/);
function St(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function tm(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function nm(e, t, n) {
  const i = Zn((n || {}).ignore || []), a = rm(t);
  let s = -1;
  for (; ++s < a.length; )
    co(e, "text", o);
  function o(c, u) {
    let d = -1, p;
    for (; ++d < u.length; ) {
      const f = u[d], g = p ? p.children : void 0;
      if (i(
        f,
        g ? g.indexOf(f) : void 0,
        p
      ))
        return;
      p = f;
    }
    if (p)
      return l(c, u);
  }
  function l(c, u) {
    const d = u[u.length - 1], p = a[s][0], f = a[s][1];
    let g = 0;
    const b = d.children.indexOf(c);
    let E = !1, v = [];
    p.lastIndex = 0;
    let O = p.exec(c.value);
    for (; O; ) {
      const N = O.index, I = {
        index: O.index,
        input: O.input,
        stack: [...u, c]
      };
      let F = f(...O, I);
      if (typeof F == "string" && (F = F.length > 0 ? { type: "text", value: F } : void 0), F === !1 ? p.lastIndex = N + 1 : (g !== N && v.push({
        type: "text",
        value: c.value.slice(g, N)
      }), Array.isArray(F) ? v.push(...F) : F && v.push(F), g = N + O[0].length, E = !0), !p.global)
        break;
      O = p.exec(c.value);
    }
    return E ? (g < c.value.length && v.push({ type: "text", value: c.value.slice(g) }), d.children.splice(b, 1, ...v)) : v = [c], b + v.length;
  }
}
function rm(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([im(i[0]), am(i[1])]);
  }
  return t;
}
function im(e) {
  return typeof e == "string" ? new RegExp(tm(e), "g") : e;
}
function am(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Br = "phrasing", Ur = ["autolink", "link", "image", "label"];
function sm() {
  return {
    transforms: [pm],
    enter: {
      literalAutolink: lm,
      literalAutolinkEmail: $r,
      literalAutolinkHttp: $r,
      literalAutolinkWww: $r
    },
    exit: {
      literalAutolink: fm,
      literalAutolinkEmail: dm,
      literalAutolinkHttp: cm,
      literalAutolinkWww: um
    }
  };
}
function om() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Br,
        notInConstruct: Ur
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Br,
        notInConstruct: Ur
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Br,
        notInConstruct: Ur
      }
    ]
  };
}
function lm(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function $r(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function cm(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function um(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function dm(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function fm(e) {
  this.exit(e);
}
function pm(e) {
  nm(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, mm],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), gm]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function mm(e, t, n, r, i) {
  let a = "";
  if (!fo(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !hm(n)))
    return !1;
  const s = bm(n + r);
  if (!s[0]) return !1;
  const o = {
    type: "link",
    title: null,
    url: a + t + s[0],
    children: [{ type: "text", value: t + s[0] }]
  };
  return s[1] ? [o, { type: "text", value: s[1] }] : o;
}
function gm(e, t, n, r) {
  return (
    // Not an expected previous character.
    !fo(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function hm(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function bm(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = oa(e, "(");
  let a = oa(e, ")");
  for (; r !== -1 && i > a; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
  return [e, n];
}
function fo(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Dt(n) || Tr(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
function Kn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
po.peek = Sm;
function _m() {
  this.buffer();
}
function ym(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Em() {
  this.buffer();
}
function vm(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function wm(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Kn(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function xm(e) {
  this.exit(e);
}
function km(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Kn(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Tm(e) {
  this.exit(e);
}
function Sm() {
  return "[";
}
function po(e, t, n, r) {
  const i = n.createTracker(r);
  let a = i.move("[^");
  const s = n.enter("footnoteReference"), o = n.enter("reference");
  return a += i.move(
    n.safe(n.associationId(e), { after: "]", before: a })
  ), o(), s(), a += i.move("]"), a;
}
function Nm() {
  return {
    enter: {
      gfmFootnoteCallString: _m,
      gfmFootnoteCall: ym,
      gfmFootnoteDefinitionLabelString: Em,
      gfmFootnoteDefinition: vm
    },
    exit: {
      gfmFootnoteCallString: wm,
      gfmFootnoteCall: xm,
      gfmFootnoteDefinitionLabelString: km,
      gfmFootnoteDefinition: Tm
    }
  };
}
function Am(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: po },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, a, s) {
    const o = a.createTracker(s);
    let l = o.move("[^");
    const c = a.enter("footnoteDefinition"), u = a.enter("label");
    return l += o.move(
      a.safe(a.associationId(r), { before: l, after: "]" })
    ), u(), l += o.move("]:"), r.children && r.children.length > 0 && (o.shift(4), l += o.move(
      (t ? `
` : " ") + a.indentLines(
        a.containerFlow(r, o.current()),
        t ? mo : Om
      )
    )), c(), l;
  }
}
function Om(e, t, n) {
  return t === 0 ? e : mo(e, t, n);
}
function mo(e, t, n) {
  return (n ? "" : "    ") + e;
}
const Cm = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
go.peek = Lm;
function Rm() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Mm },
    exit: { strikethrough: Dm }
  };
}
function Im() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Cm
      }
    ],
    handlers: { delete: go }
  };
}
function Mm(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Dm(e) {
  this.exit(e);
}
function go(e, t, n, r) {
  const i = n.createTracker(r), a = n.enter("strikethrough");
  let s = i.move("~~");
  return s += n.containerPhrasing(e, {
    ...i.current(),
    before: s,
    after: "~"
  }), s += i.move("~~"), a(), s;
}
function Lm() {
  return "~";
}
function Pm(e) {
  return e.length;
}
function Fm(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Pm, a = [], s = [], o = [], l = [];
  let c = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], b = [];
    let E = -1;
    for (e[u].length > c && (c = e[u].length); ++E < e[u].length; ) {
      const v = Bm(e[u][E]);
      if (n.alignDelimiters !== !1) {
        const O = i(v);
        b[E] = O, (l[E] === void 0 || O > l[E]) && (l[E] = O);
      }
      h.push(v);
    }
    s[u] = h, o[u] = b;
  }
  let d = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++d < c; )
      a[d] = la(r[d]);
  else {
    const h = la(r);
    for (; ++d < c; )
      a[d] = h;
  }
  d = -1;
  const p = [], f = [];
  for (; ++d < c; ) {
    const h = a[d];
    let b = "", E = "";
    h === 99 ? (b = ":", E = ":") : h === 108 ? b = ":" : h === 114 && (E = ":");
    let v = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      l[d] - b.length - E.length
    );
    const O = b + "-".repeat(v) + E;
    n.alignDelimiters !== !1 && (v = b.length + v + E.length, v > l[d] && (l[d] = v), f[d] = v), p[d] = O;
  }
  s.splice(1, 0, p), o.splice(1, 0, f), u = -1;
  const g = [];
  for (; ++u < s.length; ) {
    const h = s[u], b = o[u];
    d = -1;
    const E = [];
    for (; ++d < c; ) {
      const v = h[d] || "";
      let O = "", N = "";
      if (n.alignDelimiters !== !1) {
        const I = l[d] - (b[d] || 0), F = a[d];
        F === 114 ? O = " ".repeat(I) : F === 99 ? I % 2 ? (O = " ".repeat(I / 2 + 0.5), N = " ".repeat(I / 2 - 0.5)) : (O = " ".repeat(I / 2), N = O) : N = " ".repeat(I);
      }
      n.delimiterStart !== !1 && !d && E.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && v === "") && (n.delimiterStart !== !1 || d) && E.push(" "), n.alignDelimiters !== !1 && E.push(O), E.push(v), n.alignDelimiters !== !1 && E.push(N), n.padding !== !1 && E.push(" "), (n.delimiterEnd !== !1 || d !== c - 1) && E.push("|");
    }
    g.push(
      n.delimiterEnd === !1 ? E.join("").replace(/ +$/, "") : E.join("")
    );
  }
  return g.join(`
`);
}
function Bm(e) {
  return e == null ? "" : String(e);
}
function la(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Um(e, t, n, r) {
  const i = n.enter("blockquote"), a = n.createTracker(r);
  a.move("> "), a.shift(2);
  const s = n.indentLines(
    n.containerFlow(e, a.current()),
    $m
  );
  return i(), s;
}
function $m(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function zm(e, t) {
  return ca(e, t.inConstruct, !0) && !ca(e, t.notInConstruct, !1);
}
function ca(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function ua(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && zm(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Vm(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, a = 0, s = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++a > s && (s = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
  return s;
}
function Hm(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function jm(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Zm(e, t, n, r) {
  const i = jm(n), a = e.value || "", s = i === "`" ? "GraveAccent" : "Tilde";
  if (Hm(e, n)) {
    const d = n.enter("codeIndented"), p = n.indentLines(a, Km);
    return d(), p;
  }
  const o = n.createTracker(r), l = i.repeat(Math.max(Vm(a, i) + 1, 3)), c = n.enter("codeFenced");
  let u = o.move(l);
  if (e.lang) {
    const d = n.enter(`codeFencedLang${s}`);
    u += o.move(
      n.safe(e.lang, {
        before: u,
        after: " ",
        encode: ["`"],
        ...o.current()
      })
    ), d();
  }
  if (e.lang && e.meta) {
    const d = n.enter(`codeFencedMeta${s}`);
    u += o.move(" "), u += o.move(
      n.safe(e.meta, {
        before: u,
        after: `
`,
        encode: ["`"],
        ...o.current()
      })
    ), d();
  }
  return u += o.move(`
`), a && (u += o.move(a + `
`)), u += o.move(l), c(), u;
}
function Km(e, t, n) {
  return (n ? "" : "    ") + e;
}
function wi(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Gm(e, t, n, r) {
  const i = wi(n), a = i === '"' ? "Quote" : "Apostrophe", s = n.enter("definition");
  let o = n.enter("label");
  const l = n.createTracker(r);
  let c = l.move("[");
  return c += l.move(
    n.safe(n.associationId(e), {
      before: c,
      after: "]",
      ...l.current()
    })
  ), c += l.move("]: "), o(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (o = n.enter("destinationLiteral"), c += l.move("<"), c += l.move(
    n.safe(e.url, { before: c, after: ">", ...l.current() })
  ), c += l.move(">")) : (o = n.enter("destinationRaw"), c += l.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : `
`,
      ...l.current()
    })
  )), o(), e.title && (o = n.enter(`title${a}`), c += l.move(" " + i), c += l.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...l.current()
    })
  ), c += l.move(i), o()), s(), c;
}
function Wm(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function Nn(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function sr(e) {
  if (e === null || Fe(e) || Dt(e))
    return 1;
  if (Tr(e))
    return 2;
}
function or(e, t, n) {
  const r = sr(e), i = sr(t);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
ho.peek = qm;
function ho(e, t, n, r) {
  const i = Wm(n), a = n.enter("emphasis"), s = n.createTracker(r), o = s.move(i);
  let l = s.move(
    n.containerPhrasing(e, {
      after: i,
      before: o,
      ...s.current()
    })
  );
  const c = l.charCodeAt(0), u = or(
    r.before.charCodeAt(r.before.length - 1),
    c,
    i
  );
  u.inside && (l = Nn(c) + l.slice(1));
  const d = l.charCodeAt(l.length - 1), p = or(r.after.charCodeAt(0), d, i);
  p.inside && (l = l.slice(0, -1) + Nn(d));
  const f = s.move(i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: u.outside
  }, o + l + f;
}
function qm(e, t, n) {
  return n.options.emphasis || "*";
}
const Ym = {};
function bo(e, t) {
  const n = Ym, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return _o(e, r, i);
}
function _o(e, t, n) {
  if (Xm(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return da(e.children, t, n);
  }
  return Array.isArray(e) ? da(e, t, n) : "";
}
function da(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = _o(e[i], t, n);
  return r.join("");
}
function Xm(e) {
  return !!(e && typeof e == "object");
}
function Qm(e, t) {
  let n = !1;
  return uo(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, Yr;
  }), !!((!e.depth || e.depth < 3) && bo(e) && (t.options.setext || n));
}
function Jm(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
  if (Qm(e, n)) {
    const u = n.enter("headingSetext"), d = n.enter("phrasing"), p = n.containerPhrasing(e, {
      ...a.current(),
      before: `
`,
      after: `
`
    });
    return d(), u(), p + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      p.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1)
    );
  }
  const s = "#".repeat(i), o = n.enter("headingAtx"), l = n.enter("phrasing");
  a.move(s + " ");
  let c = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...a.current()
  });
  return /^[\t ]/.test(c) && (c = Nn(c.charCodeAt(0)) + c.slice(1)), c = c ? s + " " + c : s, n.options.closeAtx && (c += " " + s), l(), o(), c;
}
yo.peek = eg;
function yo(e) {
  return e.value || "";
}
function eg() {
  return "<";
}
Eo.peek = tg;
function Eo(e, t, n, r) {
  const i = wi(n), a = i === '"' ? "Quote" : "Apostrophe", s = n.enter("image");
  let o = n.enter("label");
  const l = n.createTracker(r);
  let c = l.move("![");
  return c += l.move(
    n.safe(e.alt, { before: c, after: "]", ...l.current() })
  ), c += l.move("]("), o(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (o = n.enter("destinationLiteral"), c += l.move("<"), c += l.move(
    n.safe(e.url, { before: c, after: ">", ...l.current() })
  ), c += l.move(">")) : (o = n.enter("destinationRaw"), c += l.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), o(), e.title && (o = n.enter(`title${a}`), c += l.move(" " + i), c += l.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...l.current()
    })
  ), c += l.move(i), o()), c += l.move(")"), s(), c;
}
function tg() {
  return "!";
}
vo.peek = ng;
function vo(e, t, n, r) {
  const i = e.referenceType, a = n.enter("imageReference");
  let s = n.enter("label");
  const o = n.createTracker(r);
  let l = o.move("![");
  const c = n.safe(e.alt, {
    before: l,
    after: "]",
    ...o.current()
  });
  l += o.move(c + "]["), s();
  const u = n.stack;
  n.stack = [], s = n.enter("reference");
  const d = n.safe(n.associationId(e), {
    before: l,
    after: "]",
    ...o.current()
  });
  return s(), n.stack = u, a(), i === "full" || !c || c !== d ? l += o.move(d + "]") : i === "shortcut" ? l = l.slice(0, -1) : l += o.move("]"), l;
}
function ng() {
  return "!";
}
wo.peek = rg;
function wo(e, t, n) {
  let r = e.value || "", i = "`", a = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length; ) {
    const s = n.unsafe[a], o = n.compilePattern(s);
    let l;
    if (s.atBreak)
      for (; l = o.exec(r); ) {
        let c = l.index;
        r.charCodeAt(c) === 10 && r.charCodeAt(c - 1) === 13 && c--, r = r.slice(0, c) + " " + r.slice(l.index + 1);
      }
  }
  return i + r + i;
}
function rg() {
  return "`";
}
function xo(e, t) {
  const n = bo(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
ko.peek = ig;
function ko(e, t, n, r) {
  const i = wi(n), a = i === '"' ? "Quote" : "Apostrophe", s = n.createTracker(r);
  let o, l;
  if (xo(e, n)) {
    const u = n.stack;
    n.stack = [], o = n.enter("autolink");
    let d = s.move("<");
    return d += s.move(
      n.containerPhrasing(e, {
        before: d,
        after: ">",
        ...s.current()
      })
    ), d += s.move(">"), o(), n.stack = u, d;
  }
  o = n.enter("link"), l = n.enter("label");
  let c = s.move("[");
  return c += s.move(
    n.containerPhrasing(e, {
      before: c,
      after: "](",
      ...s.current()
    })
  ), c += s.move("]("), l(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), c += s.move("<"), c += s.move(
    n.safe(e.url, { before: c, after: ">", ...s.current() })
  ), c += s.move(">")) : (l = n.enter("destinationRaw"), c += s.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${a}`), c += s.move(" " + i), c += s.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...s.current()
    })
  ), c += s.move(i), l()), c += s.move(")"), o(), c;
}
function ig(e, t, n) {
  return xo(e, n) ? "<" : "[";
}
To.peek = ag;
function To(e, t, n, r) {
  const i = e.referenceType, a = n.enter("linkReference");
  let s = n.enter("label");
  const o = n.createTracker(r);
  let l = o.move("[");
  const c = n.containerPhrasing(e, {
    before: l,
    after: "]",
    ...o.current()
  });
  l += o.move(c + "]["), s();
  const u = n.stack;
  n.stack = [], s = n.enter("reference");
  const d = n.safe(n.associationId(e), {
    before: l,
    after: "]",
    ...o.current()
  });
  return s(), n.stack = u, a(), i === "full" || !c || c !== d ? l += o.move(d + "]") : i === "shortcut" ? l = l.slice(0, -1) : l += o.move("]"), l;
}
function ag() {
  return "[";
}
function xi(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function sg(e) {
  const t = xi(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function og(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function So(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function lg(e, t, n, r) {
  const i = n.enter("list"), a = n.bulletCurrent;
  let s = e.ordered ? og(n) : xi(n);
  const o = e.ordered ? s === "." ? ")" : "." : sg(n);
  let l = t && n.bulletLastUsed ? s === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const u = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (s === "*" || s === "-") && // Empty first list item:
      u && (!u.children || !u.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (l = !0), So(n) === s && u
    ) {
      let d = -1;
      for (; ++d < e.children.length; ) {
        const p = e.children[d];
        if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
          l = !0;
          break;
        }
      }
    }
  }
  l && (s = o), n.bulletCurrent = s;
  const c = n.containerFlow(e, r);
  return n.bulletLastUsed = s, n.bulletCurrent = a, i(), c;
}
function cg(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function ug(e, t, n, r) {
  const i = cg(n);
  let a = n.bulletCurrent || xi(n);
  t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
  let s = a.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (s = Math.ceil(s / 4) * 4);
  const o = n.createTracker(r);
  o.move(a + " ".repeat(s - a.length)), o.shift(s);
  const l = n.enter("listItem"), c = n.indentLines(
    n.containerFlow(e, o.current()),
    u
  );
  return l(), c;
  function u(d, p, f) {
    return p ? (f ? "" : " ".repeat(s)) + d : (f ? a : a + " ".repeat(s - a.length)) + d;
  }
}
function dg(e, t, n, r) {
  const i = n.enter("paragraph"), a = n.enter("phrasing"), s = n.containerPhrasing(e, r);
  return a(), i(), s;
}
const fg = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Zn([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function pg(e, t, n, r) {
  return (e.children.some(function(s) {
    return fg(s);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function mg(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
No.peek = gg;
function No(e, t, n, r) {
  const i = mg(n), a = n.enter("strong"), s = n.createTracker(r), o = s.move(i + i);
  let l = s.move(
    n.containerPhrasing(e, {
      after: i,
      before: o,
      ...s.current()
    })
  );
  const c = l.charCodeAt(0), u = or(
    r.before.charCodeAt(r.before.length - 1),
    c,
    i
  );
  u.inside && (l = Nn(c) + l.slice(1));
  const d = l.charCodeAt(l.length - 1), p = or(r.after.charCodeAt(0), d, i);
  p.inside && (l = l.slice(0, -1) + Nn(d));
  const f = s.move(i + i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: u.outside
  }, o + l + f;
}
function gg(e, t, n) {
  return n.options.strong || "*";
}
function hg(e, t, n, r) {
  return n.safe(e.value, r);
}
function bg(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function _g(e, t, n) {
  const r = (So(n) + (n.options.ruleSpaces ? " " : "")).repeat(bg(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Ao = {
  blockquote: Um,
  break: ua,
  code: Zm,
  definition: Gm,
  emphasis: ho,
  hardBreak: ua,
  heading: Jm,
  html: yo,
  image: Eo,
  imageReference: vo,
  inlineCode: wo,
  link: ko,
  linkReference: To,
  list: lg,
  listItem: ug,
  paragraph: dg,
  root: pg,
  strong: No,
  text: hg,
  thematicBreak: _g
};
function yg() {
  return {
    enter: {
      table: Eg,
      tableData: fa,
      tableHeader: fa,
      tableRow: wg
    },
    exit: {
      codeText: xg,
      table: vg,
      tableData: zr,
      tableHeader: zr,
      tableRow: zr
    }
  };
}
function Eg(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function vg(e) {
  this.exit(e), this.data.inTable = void 0;
}
function wg(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function zr(e) {
  this.exit(e);
}
function fa(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function xg(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, kg));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function kg(e, t) {
  return t === "|" ? t : e;
}
function Tg(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: p,
      table: s,
      tableCell: l,
      tableRow: o
    }
  };
  function s(f, g, h, b) {
    return c(u(f, h, b), f.align);
  }
  function o(f, g, h, b) {
    const E = d(f, h, b), v = c([E]);
    return v.slice(0, v.indexOf(`
`));
  }
  function l(f, g, h, b) {
    const E = h.enter("tableCell"), v = h.enter("phrasing"), O = h.containerPhrasing(f, {
      ...b,
      before: a,
      after: a
    });
    return v(), E(), O;
  }
  function c(f, g) {
    return Fm(f, {
      align: g,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function u(f, g, h) {
    const b = f.children;
    let E = -1;
    const v = [], O = g.enter("table");
    for (; ++E < b.length; )
      v[E] = d(b[E], g, h);
    return O(), v;
  }
  function d(f, g, h) {
    const b = f.children;
    let E = -1;
    const v = [], O = g.enter("tableRow");
    for (; ++E < b.length; )
      v[E] = l(b[E], f, g, h);
    return O(), v;
  }
  function p(f, g, h) {
    let b = Ao.inlineCode(f, g, h);
    return h.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function Sg() {
  return {
    exit: {
      taskListCheckValueChecked: pa,
      taskListCheckValueUnchecked: pa,
      paragraph: Ag
    }
  };
}
function Ng() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Og }
  };
}
function pa(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Ag(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let a = -1, s;
      for (; ++a < i.length; ) {
        const o = i[a];
        if (o.type === "paragraph") {
          s = o;
          break;
        }
      }
      s === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Og(e, t, n, r) {
  const i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", s = "[" + (e.checked ? "x" : " ") + "] ", o = n.createTracker(r);
  a && o.move(s);
  let l = Ao.listItem(e, t, n, {
    ...r,
    ...o.current()
  });
  return a && (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, c)), l;
  function c(u) {
    return u + s;
  }
}
function Cg() {
  return [
    sm(),
    Nm(),
    Rm(),
    yg(),
    Sg()
  ];
}
function Rg(e) {
  return {
    extensions: [
      om(),
      Am(e),
      Im(),
      Tg(e),
      Ng()
    ]
  };
}
function En(e, t, n, r) {
  const i = e.length;
  let a = 0, s;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    s = Array.from(r), s.unshift(t, n), e.splice(...s);
  else
    for (n && e.splice(t, n); a < r.length; )
      s = r.slice(a, a + 1e4), s.unshift(t, 0), e.splice(...s), a += 1e4, t += 1e4;
}
function D_(e, t) {
  return e.length > 0 ? (En(e, e.length, 0, t), e) : t;
}
const ma = {}.hasOwnProperty;
function Ig(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Mg(t, e[n]);
  return t;
}
function Mg(e, t) {
  let n;
  for (n in t) {
    const i = (ma.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let s;
    if (a)
      for (s in a) {
        ma.call(i, s) || (i[s] = []);
        const o = a[s];
        Dg(
          // @ts-expect-error Looks like a list.
          i[s],
          Array.isArray(o) ? o : o ? [o] : []
        );
      }
  }
}
function Dg(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  En(e, 0, 0, r);
}
const Lg = {
  tokenize: zg,
  partial: !0
}, Oo = {
  tokenize: Vg,
  partial: !0
}, Co = {
  tokenize: Hg,
  partial: !0
}, Ro = {
  tokenize: jg,
  partial: !0
}, Pg = {
  tokenize: Zg,
  partial: !0
}, Io = {
  name: "wwwAutolink",
  tokenize: Ug,
  previous: Do
}, Mo = {
  name: "protocolAutolink",
  tokenize: $g,
  previous: Lo
}, bt = {
  name: "emailAutolink",
  tokenize: Bg,
  previous: Po
}, at = {};
function Fg() {
  return {
    text: at
  };
}
let Ot = 48;
for (; Ot < 123; )
  at[Ot] = bt, Ot++, Ot === 58 ? Ot = 65 : Ot === 91 && (Ot = 97);
at[43] = bt;
at[45] = bt;
at[46] = bt;
at[95] = bt;
at[72] = [bt, Mo];
at[104] = [bt, Mo];
at[87] = [bt, Io];
at[119] = [bt, Io];
function Bg(e, t, n) {
  const r = this;
  let i, a;
  return s;
  function s(d) {
    return !Xr(d) || !Po.call(r, r.previous) || ki(r.events) ? n(d) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), o(d));
  }
  function o(d) {
    return Xr(d) ? (e.consume(d), o) : d === 64 ? (e.consume(d), l) : n(d);
  }
  function l(d) {
    return d === 46 ? e.check(Pg, u, c)(d) : d === 45 || d === 95 || vi(d) ? (a = !0, e.consume(d), l) : u(d);
  }
  function c(d) {
    return e.consume(d), i = !0, l;
  }
  function u(d) {
    return a && i && Sn(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(d)) : n(d);
  }
}
function Ug(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return s !== 87 && s !== 119 || !Do.call(r, r.previous) || ki(r.events) ? n(s) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Lg, e.attempt(Oo, e.attempt(Co, a), n), n)(s));
  }
  function a(s) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(s);
  }
}
function $g(e, t, n) {
  const r = this;
  let i = "", a = !1;
  return s;
  function s(d) {
    return (d === 72 || d === 104) && Lo.call(r, r.previous) && !ki(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(d), e.consume(d), o) : n(d);
  }
  function o(d) {
    if (Sn(d) && i.length < 5)
      return i += String.fromCodePoint(d), e.consume(d), o;
    if (d === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(d), l;
    }
    return n(d);
  }
  function l(d) {
    return d === 47 ? (e.consume(d), a ? c : (a = !0, l)) : n(d);
  }
  function c(d) {
    return d === null || em(d) || Fe(d) || Dt(d) || Tr(d) ? n(d) : e.attempt(Oo, e.attempt(Co, u), n)(d);
  }
  function u(d) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(d);
  }
}
function zg(e, t, n) {
  let r = 0;
  return i;
  function i(s) {
    return (s === 87 || s === 119) && r < 3 ? (r++, e.consume(s), i) : s === 46 && r === 3 ? (e.consume(s), a) : n(s);
  }
  function a(s) {
    return s === null ? n(s) : t(s);
  }
}
function Vg(e, t, n) {
  let r, i, a;
  return s;
  function s(c) {
    return c === 46 || c === 95 ? e.check(Ro, l, o)(c) : c === null || Fe(c) || Dt(c) || c !== 45 && Tr(c) ? l(c) : (a = !0, e.consume(c), s);
  }
  function o(c) {
    return c === 95 ? r = !0 : (i = r, r = void 0), e.consume(c), s;
  }
  function l(c) {
    return i || r || !a ? n(c) : t(c);
  }
}
function Hg(e, t) {
  let n = 0, r = 0;
  return i;
  function i(s) {
    return s === 40 ? (n++, e.consume(s), i) : s === 41 && r < n ? a(s) : s === 33 || s === 34 || s === 38 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 60 || s === 63 || s === 93 || s === 95 || s === 126 ? e.check(Ro, t, a)(s) : s === null || Fe(s) || Dt(s) ? t(s) : (e.consume(s), i);
  }
  function a(s) {
    return s === 41 && r++, e.consume(s), i;
  }
}
function jg(e, t, n) {
  return r;
  function r(o) {
    return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : (
      // `<` is an end.
      o === 60 || // So is whitespace.
      o === null || Fe(o) || Dt(o) ? t(o) : n(o)
    );
  }
  function i(o) {
    return o === null || o === 40 || o === 91 || Fe(o) || Dt(o) ? t(o) : r(o);
  }
  function a(o) {
    return Sn(o) ? s(o) : n(o);
  }
  function s(o) {
    return o === 59 ? (e.consume(o), r) : Sn(o) ? (e.consume(o), s) : n(o);
  }
}
function Zg(e, t, n) {
  return r;
  function r(a) {
    return e.consume(a), i;
  }
  function i(a) {
    return vi(a) ? n(a) : t(a);
  }
}
function Do(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Fe(e);
}
function Lo(e) {
  return !Sn(e);
}
function Po(e) {
  return !(e === 47 || Xr(e));
}
function Xr(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || vi(e);
}
function ki(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
function Kg(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
function pt(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return s;
  function s(l) {
    return ft(l) ? (e.enter(n), o(l)) : t(l);
  }
  function o(l) {
    return ft(l) && a++ < i ? (e.consume(l), o) : (e.exit(n), t(l));
  }
}
const Gg = {
  partial: !0,
  tokenize: Wg
};
function Wg(e, t, n) {
  return r;
  function r(a) {
    return ft(a) ? pt(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || Jt(a) ? t(a) : n(a);
  }
}
const qg = {
  tokenize: rh,
  partial: !0
};
function Yg() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: eh,
        continuation: {
          tokenize: th
        },
        exit: nh
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Jg
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Xg,
        resolveTo: Qg
      }
    }
  };
}
function Xg(e, t, n) {
  const r = this;
  let i = r.events.length;
  const a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s;
  for (; i--; ) {
    const l = r.events[i][1];
    if (l.type === "labelImage") {
      s = l;
      break;
    }
    if (l.type === "gfmFootnoteCall" || l.type === "labelLink" || l.type === "label" || l.type === "image" || l.type === "link")
      break;
  }
  return o;
  function o(l) {
    if (!s || !s._balanced)
      return n(l);
    const c = Kn(r.sliceSerialize({
      start: s.end,
      end: r.now()
    }));
    return c.codePointAt(0) !== 94 || !a.includes(c.slice(1)) ? n(l) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l));
  }
}
function Qg(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const a = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, s = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, a.start),
    end: Object.assign({}, a.end)
  }, o = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", a, t],
    ["enter", s, t],
    ["exit", s, t],
    ["exit", a, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...o), e;
}
function Jg(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a = 0, s;
  return o;
  function o(d) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(d), e.exit("gfmFootnoteCallLabelMarker"), l;
  }
  function l(d) {
    return d !== 94 ? n(d) : (e.enter("gfmFootnoteCallMarker"), e.consume(d), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", c);
  }
  function c(d) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      d === 93 && !s || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      d === null || d === 91 || Fe(d)
    )
      return n(d);
    if (d === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(Kn(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(d), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(d);
    }
    return Fe(d) || (s = !0), a++, e.consume(d), d === 92 ? u : c;
  }
  function u(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), a++, c) : c(d);
  }
}
function eh(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a, s = 0, o;
  return l;
  function l(g) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), c;
  }
  function c(g) {
    return g === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(g);
  }
  function u(g) {
    if (
      // Too long.
      s > 999 || // Closing brace with nothing.
      g === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      g === null || g === 91 || Fe(g)
    )
      return n(g);
    if (g === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteDefinitionLabelString");
      return a = Kn(r.sliceSerialize(h)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return Fe(g) || (o = !0), s++, e.consume(g), g === 92 ? d : u;
  }
  function d(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), s++, u) : u(g);
  }
  function p(g) {
    return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(a) || i.push(a), pt(e, f, "gfmFootnoteDefinitionWhitespace")) : n(g);
  }
  function f(g) {
    return t(g);
  }
}
function th(e, t, n) {
  return e.check(Gg, t, e.attempt(qg, t, n));
}
function nh(e) {
  e.exit("gfmFootnoteDefinition");
}
function rh(e, t, n) {
  const r = this;
  return pt(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(a) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "gfmFootnoteDefinitionIndent" && s[2].sliceSerialize(s[1], !0).length === 4 ? t(a) : n(a);
  }
}
function ih(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: a,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(s, o) {
    let l = -1;
    for (; ++l < s.length; )
      if (s[l][0] === "enter" && s[l][1].type === "strikethroughSequenceTemporary" && s[l][1]._close) {
        let c = l;
        for (; c--; )
          if (s[c][0] === "exit" && s[c][1].type === "strikethroughSequenceTemporary" && s[c][1]._open && // If the sizes are the same:
          s[l][1].end.offset - s[l][1].start.offset === s[c][1].end.offset - s[c][1].start.offset) {
            s[l][1].type = "strikethroughSequence", s[c][1].type = "strikethroughSequence";
            const u = {
              type: "strikethrough",
              start: Object.assign({}, s[c][1].start),
              end: Object.assign({}, s[l][1].end)
            }, d = {
              type: "strikethroughText",
              start: Object.assign({}, s[c][1].end),
              end: Object.assign({}, s[l][1].start)
            }, p = [["enter", u, o], ["enter", s[c][1], o], ["exit", s[c][1], o], ["enter", d, o]], f = o.parser.constructs.insideSpan.null;
            f && En(p, p.length, 0, Kg(f, s.slice(c + 1, l), o)), En(p, p.length, 0, [["exit", d, o], ["enter", s[l][1], o], ["exit", s[l][1], o], ["exit", u, o]]), En(s, c - 1, l - c + 3, p), l = c + p.length - 2;
            break;
          }
      }
    for (l = -1; ++l < s.length; )
      s[l][1].type === "strikethroughSequenceTemporary" && (s[l][1].type = "data");
    return s;
  }
  function a(s, o, l) {
    const c = this.previous, u = this.events;
    let d = 0;
    return p;
    function p(g) {
      return c === 126 && u[u.length - 1][1].type !== "characterEscape" ? l(g) : (s.enter("strikethroughSequenceTemporary"), f(g));
    }
    function f(g) {
      const h = sr(c);
      if (g === 126)
        return d > 1 ? l(g) : (s.consume(g), d++, f);
      if (d < 2 && !n) return l(g);
      const b = s.exit("strikethroughSequenceTemporary"), E = sr(g);
      return b._open = !E || E === 2 && !!h, b._close = !h || h === 2 && !!E, o(g);
    }
  }
}
class ah {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    sh(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(a, s) {
      return a[0] - s[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const a of i)
        t.push(a);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function sh(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function oh(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const a = r.length - 1;
          r[a] = r[a] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function lh() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: ch,
        resolveAll: uh
      }
    }
  };
}
function ch(e, t, n) {
  const r = this;
  let i = 0, a = 0, s;
  return o;
  function o(w) {
    let le = r.events.length - 1;
    for (; le > -1; ) {
      const J = r.events[le][1].type;
      if (J === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      J === "linePrefix") le--;
      else break;
    }
    const H = le > -1 ? r.events[le][1].type : null, K = H === "tableHead" || H === "tableRow" ? F : l;
    return K === F && r.parser.lazy[r.now().line] ? n(w) : K(w);
  }
  function l(w) {
    return e.enter("tableHead"), e.enter("tableRow"), c(w);
  }
  function c(w) {
    return w === 124 || (s = !0, a += 1), u(w);
  }
  function u(w) {
    return w === null ? n(w) : Jt(w) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), f) : n(w) : ft(w) ? pt(e, u, "whitespace")(w) : (a += 1, s && (s = !1, i += 1), w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), s = !0, u) : (e.enter("data"), d(w)));
  }
  function d(w) {
    return w === null || w === 124 || Fe(w) ? (e.exit("data"), u(w)) : (e.consume(w), w === 92 ? p : d);
  }
  function p(w) {
    return w === 92 || w === 124 ? (e.consume(w), d) : d(w);
  }
  function f(w) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(w) : (e.enter("tableDelimiterRow"), s = !1, ft(w) ? pt(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : g(w));
  }
  function g(w) {
    return w === 45 || w === 58 ? b(w) : w === 124 ? (s = !0, e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), h) : I(w);
  }
  function h(w) {
    return ft(w) ? pt(e, b, "whitespace")(w) : b(w);
  }
  function b(w) {
    return w === 58 ? (a += 1, s = !0, e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), E) : w === 45 ? (a += 1, E(w)) : w === null || Jt(w) ? N(w) : I(w);
  }
  function E(w) {
    return w === 45 ? (e.enter("tableDelimiterFiller"), v(w)) : I(w);
  }
  function v(w) {
    return w === 45 ? (e.consume(w), v) : w === 58 ? (s = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), O) : (e.exit("tableDelimiterFiller"), O(w));
  }
  function O(w) {
    return ft(w) ? pt(e, N, "whitespace")(w) : N(w);
  }
  function N(w) {
    return w === 124 ? g(w) : w === null || Jt(w) ? !s || i !== a ? I(w) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(w)) : I(w);
  }
  function I(w) {
    return n(w);
  }
  function F(w) {
    return e.enter("tableRow"), G(w);
  }
  function G(w) {
    return w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), G) : w === null || Jt(w) ? (e.exit("tableRow"), t(w)) : ft(w) ? pt(e, G, "whitespace")(w) : (e.enter("data"), Z(w));
  }
  function Z(w) {
    return w === null || w === 124 || Fe(w) ? (e.exit("data"), G(w)) : (e.consume(w), w === 92 ? z : Z);
  }
  function z(w) {
    return w === 92 || w === 124 ? (e.consume(w), Z) : Z(w);
  }
}
function uh(e, t) {
  let n = -1, r = !0, i = 0, a = [0, 0, 0, 0], s = [0, 0, 0, 0], o = !1, l = 0, c, u, d;
  const p = new ah();
  for (; ++n < e.length; ) {
    const f = e[n], g = f[1];
    f[0] === "enter" ? g.type === "tableHead" ? (o = !1, l !== 0 && (ga(p, t, l, c, u), u = void 0, l = 0), c = {
      type: "table",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, p.add(n, 0, [["enter", c, t]])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [0, 0, 0, 0], s = [0, n + 1, 0, 0], o && (o = !1, u = {
      type: "tableBody",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, p.add(n, 0, [["enter", u, t]])), i = g.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = !1, s[2] === 0 && (a[1] !== 0 && (s[0] = s[1], d = tr(p, t, a, i, void 0, d), a = [0, 0, 0, 0]), s[2] = n)) : g.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (s[0] = s[1], d = tr(p, t, a, i, void 0, d)), a = s, s = [a[1], n, 0, 0])) : g.type === "tableHead" ? (o = !0, l = n) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (l = n, a[1] !== 0 ? (s[0] = s[1], d = tr(p, t, a, i, n, d)) : s[1] !== 0 && (d = tr(p, t, s, i, n, d)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (s[3] = n);
  }
  for (l !== 0 && ga(p, t, l, c, u), p.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = oh(t.events, n));
  }
  return e;
}
function tr(e, t, n, r, i, a) {
  const s = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", o = "tableContent";
  n[0] !== 0 && (a.end = Object.assign({}, Yt(t.events, n[0])), e.add(n[0], 0, [["exit", a, t]]));
  const l = Yt(t.events, n[1]);
  if (a = {
    type: s,
    start: Object.assign({}, l),
    // Note: correct end is set later.
    end: Object.assign({}, l)
  }, e.add(n[1], 0, [["enter", a, t]]), n[2] !== 0) {
    const c = Yt(t.events, n[2]), u = Yt(t.events, n[3]), d = {
      type: o,
      start: Object.assign({}, c),
      end: Object.assign({}, u)
    };
    if (e.add(n[2], 0, [["enter", d, t]]), r !== 2) {
      const p = t.events[n[2]], f = t.events[n[3]];
      if (p[1].end = Object.assign({}, f[1].end), p[1].type = "chunkText", p[1].contentType = "text", n[3] > n[2] + 1) {
        const g = n[2] + 1, h = n[3] - n[2] - 1;
        e.add(g, h, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", d, t]]);
  }
  return i !== void 0 && (a.end = Object.assign({}, Yt(t.events, i)), e.add(i, 0, [["exit", a, t]]), a = void 0), a;
}
function ga(e, t, n, r, i) {
  const a = [], s = Yt(t.events, n);
  i && (i.end = Object.assign({}, s), a.push(["exit", i, t])), r.end = Object.assign({}, s), a.push(["exit", r, t]), e.add(n + 1, 0, a);
}
function Yt(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const dh = {
  name: "tasklistCheck",
  tokenize: ph
};
function fh() {
  return {
    text: {
      91: dh
    }
  };
}
function ph(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(l) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), a)
    );
  }
  function a(l) {
    return Fe(l) ? (e.enter("taskListCheckValueUnchecked"), e.consume(l), e.exit("taskListCheckValueUnchecked"), s) : l === 88 || l === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(l), e.exit("taskListCheckValueChecked"), s) : n(l);
  }
  function s(l) {
    return l === 93 ? (e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(l);
  }
  function o(l) {
    return Jt(l) ? t(l) : ft(l) ? e.check({
      tokenize: mh
    }, t, n)(l) : n(l);
  }
}
function mh(e, t, n) {
  return pt(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function gh(e) {
  return Ig([
    Fg(),
    Yg(),
    ih(e),
    lh(),
    fh()
  ]);
}
const hh = {};
function bh(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || hh, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), s = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(gh(n)), a.push(Cg()), s.push(Rg(n));
}
const ln = Tt({
  slots: {
    container: "flex w-full min-w-0 max-w-full items-start gap-3 transition-opacity duration-200",
    dialogContent: "flex flex-col max-w-full min-w-0 w-full",
    contentWrapper: "",
    message: "inline-flex text-sm leading-[21px] break-words max-w-full",
    video: "relative inline-flex overflow-hidden rounded-xl w-full",
    image: "inline-flex max-w-[30rem] h-auto overflow-hidden",
    markdownContent: "flex flex-col gap-4 break-normal w-full max-w-full min-w-0 text-white",
    copyButtonWrapper: "flex items-center justify-center shrink-0",
    copyIconWrapper: "relative",
    copyButton: [
      "h-8 w-8 flex items-center justify-center rounded-[6px]",
      "transition-all duration-200 ease-in-out",
      // Always show a dark background so the icon is visible,
      // hover keeps the same token for consistency.
      "bg-copy-button-hover hover:bg-copy-button-hover",
      "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
      "[&_svg]:h-5 [&_svg]:w-5",
      "cursor-pointer"
    ],
    markdownTableWrapper: "relative w-full max-w-full min-w-0 rounded-xl border border-gray-600/70 bg-neutral-900/40 my-4 group overflow-hidden",
    markdownTableContainer: "w-full max-w-full max-h-[24rem] min-h-0 overflow-x-auto overflow-y-auto custom-scroll",
    markdownTable: "w-max min-w-full text-left border-collapse border-none my-0 text-sm",
    markdownTableButton: "absolute top-2 right-2 z-10",
    markdownThead: "bg-neutral-900",
    markdownTr: "border-b border-gray-700 last:border-b-0",
    markdownTh: "px-4 py-2 font-semibold border-b border-gray-700 whitespace-nowrap bg-neutral-900",
    markdownTd: "px-4 py-2 border-b border-gray-700/60 text-sm align-top whitespace-nowrap",
    markdownCodeInline: "bg-gray-600 rounded px-1 py-0.5 text-sm break-words max-w-full",
    markdownCodeBlock: "code-block my-4 w-full max-w-full min-w-0 rounded-xl border border-neutral-700 overflow-hidden",
    markdownCodeBlockWrapper: "relative w-full max-w-full min-w-0 group overflow-hidden",
    markdownCodeBlockContainer: "w-full max-w-full max-h-[24rem] min-h-0 overflow-x-auto overflow-y-auto custom-scroll",
    markdownCodeBlockButton: "absolute top-2 right-2 z-10",
    markdownPreBlock: "p-4 rounded-lg bg-gray-900 text-white text-sm leading-6 whitespace-pre m-0 w-max min-w-full"
  },
  variants: {
    role: {
      [He.USER]: {
        container: "justify-end",
        dialogContent: "items-end w-full max-w-full",
        contentWrapper: "flex flex-row items-center gap-2",
        message: "bg-primary rounded-2xl text-white px-5 py-2.5 max-w-[36rem] justify-start",
        video: "max-w-[calc(100%-2rem)]"
      },
      [He.ASSISTANT]: {
        container: "justify-start",
        dialogContent: "items-start w-full max-w-full",
        contentWrapper: "flex flex-col gap-4 items-start w-full max-w-full min-w-0",
        message: "text-white max-w-[48rem]",
        video: "max-w-[calc(100%-2rem)]"
      }
    },
    copyAlwaysVisible: {
      true: {
        copyButtonWrapper: "opacity-100"
      },
      false: {
        copyButtonWrapper: "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      }
    },
    copyIsCopied: {
      true: {
        copyButton: "hover:bg-copy-button-hover"
      },
      false: {
        copyButton: ""
      }
    },
    copyIsFading: {
      true: {
        copyIconWrapper: "opacity-0 transition-opacity duration-150 ease-in-out"
      },
      false: {
        copyIconWrapper: "opacity-100 transition-opacity duration-150 ease-in-out"
      }
    }
  },
  defaultVariants: {
    copyAlwaysVisible: !1,
    copyIsCopied: !1,
    copyIsFading: !1
  }
}), _h = (e, t) => {
  const n = e.textContent || "";
  return n.trim() ? n : "";
}, yh = (e) => {
  var l, c;
  const t = [], n = e.querySelector("thead"), r = e.querySelector("tbody") || e;
  if (n) {
    const u = n.querySelectorAll("tr");
    for (const d of u) {
      const p = [];
      for (const f of d.querySelectorAll("th, td"))
        p.push(((l = f.textContent) == null ? void 0 : l.trim()) || "");
      p.length > 0 && t.push(p);
    }
  }
  const i = r.querySelectorAll("tr");
  for (const u of i) {
    if (n != null && n.contains(u))
      continue;
    const d = [];
    for (const p of u.querySelectorAll("th, td"))
      d.push(((c = p.textContent) == null ? void 0 : c.trim()) || "");
    d.length > 0 && t.push(d);
  }
  if (t.length === 0)
    return "";
  const a = Math.max(...t.map((u) => u.length)), s = t.map((u) => {
    const d = [...u];
    for (; d.length < a; )
      d.push("");
    return d;
  }), o = [];
  if (s.length > 0) {
    const u = s[0];
    o.push(`| ${u.join(" | ")} |`);
    const d = u.map(() => "--------").join(" | ");
    o.push(`| ${d} |`);
    for (let p = 1; p < s.length; p++) {
      const f = s[p];
      o.push(`| ${f.join(" | ")} |`);
    }
  }
  return o.join(`
`);
}, Ti = D.memo(
  ({
    content: e,
    className: t
  }) => {
    const [n, r] = D.useState(!1), [i, a] = D.useState(!1), s = D.useCallback(async () => {
      try {
        a(!0), await new Promise((c) => setTimeout(c, 150)), await navigator.clipboard.writeText(e), r(!0), a(!1);
      } catch (c) {
        console.error("Failed to copy content:", c), a(!1);
      }
    }, [e]);
    D.useEffect(() => {
      if (n) {
        const c = setTimeout(() => {
          a(!0), setTimeout(() => {
            r(!1), a(!1);
          }, 150);
        }, 3e3);
        return () => clearTimeout(c);
      }
    }, [n]);
    const o = n ? "check" : "copy", l = n ? Ve("home.messageDialog.copyButton.copied") : Ve("home.messageDialog.copyButton.copy");
    return /* @__PURE__ */ k.jsx("div", { className: Q(t), children: /* @__PURE__ */ k.jsx(
      li,
      {
        content: /* @__PURE__ */ k.jsx("div", { className: "p-0.5 flex items-center justify-center bg-list-normal-side-nav rounded-md", children: /* @__PURE__ */ k.jsx("span", { className: "text-neutral-1 text-center text-xs", children: l }) }),
        position: gt.Bottom,
        trigger: tt.Hover,
        children: /* @__PURE__ */ k.jsx(
          et,
          {
            name: o,
            size: "sm",
            onClick: s,
            className: Q(
              "h-8 w-8 flex items-center justify-center rounded-[6px]",
              "transition-all duration-200 ease-in-out",
              "hover:bg-copy-button-hover",
              "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
              "[&_svg]:h-5 [&_svg]:w-5",
              "cursor-pointer",
              i && "opacity-0 transition-opacity duration-150 ease-in-out",
              !i && "opacity-100 transition-opacity duration-150 ease-in-out"
            ),
            iconClassName: Q(
              "[&_*]:fill-none",
              n ? "[&_*]:stroke-white [&_*]:stroke-[1.5]" : "[&_*]:stroke-white/70 [&_*]:stroke-[1.5]"
            ),
            colorFill: "fill-none",
            "aria-label": l,
            "data-testid": "inline-copy-button"
          }
        )
      }
    ) });
  }
);
Ti.displayName = "InlineCopyButton";
const Fo = D.memo(
  ({ children: e }) => {
    const t = D.useRef(null), [n, r] = D.useState(""), {
      markdownTableWrapper: i,
      markdownTableContainer: a,
      markdownTableButton: s,
      markdownTable: o
    } = ln({ role: He.ASSISTANT });
    return D.useLayoutEffect(() => {
      if (t.current) {
        const l = yh(t.current);
        r(l);
      }
    }), /* @__PURE__ */ k.jsxs("div", { className: Q(i(), "group relative"), children: [
      n && /* @__PURE__ */ k.jsx(
        Ti,
        {
          content: n,
          className: Q(
            s(),
            "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          )
        }
      ),
      /* @__PURE__ */ k.jsx("div", { className: Q(a()), children: /* @__PURE__ */ k.jsx("table", { ref: t, className: o(), children: e }) })
    ] });
  }
);
Fo.displayName = "TableWithCopy";
const Bo = D.memo(
  ({
    children: e,
    className: t,
    language: n,
    ...r
  }) => {
    const i = D.useRef(null), [a, s] = D.useState(""), {
      markdownCodeBlock: o,
      markdownCodeBlockWrapper: l,
      markdownCodeBlockContainer: c,
      markdownCodeBlockButton: u,
      markdownPreBlock: d
    } = ln({ role: He.ASSISTANT });
    return D.useLayoutEffect(() => {
      if (i.current) {
        const p = _h(i.current);
        s(p);
      }
    }, [n]), /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: Q(
          o(),
          l(),
          "group relative"
        ),
        children: [
          a && /* @__PURE__ */ k.jsx(
            Ti,
            {
              content: a,
              className: Q(u())
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: Q(c()), children: /* @__PURE__ */ k.jsx("pre", { className: Q(t, d()), children: /* @__PURE__ */ k.jsx("code", { ref: i, ...r, children: e }) }) })
        ]
      }
    );
  }
);
Bo.displayName = "CodeBlockWithCopy";
const Eh = D.lazy(() => import("./index-C3QqqA8e.js")), Uo = D.memo(
  ({
    content: e,
    messageId: t,
    ...n
  }) => {
    const {
      markdownContent: r,
      markdownThead: i,
      markdownTr: a,
      markdownTh: s,
      markdownTd: o,
      markdownCodeInline: l
    } = ln({ role: He.ASSISTANT });
    return /* @__PURE__ */ k.jsx("div", { className: Q(r()), ...n, children: /* @__PURE__ */ k.jsx(
      D.Suspense,
      {
        fallback: /* @__PURE__ */ k.jsx("div", { children: /* @__PURE__ */ k.jsx(si, { isLoading: !0, variant: Fa.Dots }) }),
        children: /* @__PURE__ */ k.jsx(
          Eh,
          {
            skipHtml: !0,
            rehypePlugins: [Qp],
            remarkPlugins: [bh],
            components: {
              p({ children: c }) {
                return /* @__PURE__ */ k.jsx(
                  "p",
                  {
                    className: "whitespace-pre-wrap break-normal max-w-full",
                    style: { wordBreak: "break-word" },
                    children: c
                  }
                );
              },
              table({ children: c }) {
                return /* @__PURE__ */ k.jsx(Fo, { children: c });
              },
              thead({ children: c }) {
                return /* @__PURE__ */ k.jsx("thead", { className: i(), children: c });
              },
              tr({ children: c }) {
                return /* @__PURE__ */ k.jsx("tr", { className: a(), children: c });
              },
              th({ children: c }) {
                return /* @__PURE__ */ k.jsx("th", { className: s(), children: c });
              },
              td({ children: c }) {
                return /* @__PURE__ */ k.jsx("td", { className: o(), children: c });
              },
              code({ node: c, className: u, children: d, ...p }) {
                const f = /language-(\w+)/.exec(u || "");
                if (f) {
                  const g = f[1];
                  return /* @__PURE__ */ k.jsx(
                    Bo,
                    {
                      className: u,
                      language: g,
                      ...p,
                      children: d
                    }
                  );
                }
                return /* @__PURE__ */ k.jsx("code", { className: l(), ...p, children: d });
              }
            },
            children: e
          }
        )
      }
    ) });
  }
);
Uo.displayName = "DialogContentMarkdown";
const $o = D.memo(
  ({
    urlImage: e,
    altText: t = "Chatbot PAS Image",
    ...n
  }) => /* @__PURE__ */ k.jsx("img", { src: e, alt: t, ...n })
);
$o.displayName = "DialogContentImage";
const zo = D.memo(
  ({
    urlVideo: e,
    videoTitle: t = "Chatbot PAS Video",
    ...n
  }) => /* @__PURE__ */ k.jsx("div", { ...n, children: /* @__PURE__ */ k.jsx(
    ud,
    {
      url: e,
      controls: !0,
      "aria-label": t,
      title: t,
      config: {
        youtube: {
          playerVars: { showinfo: 0 }
        }
      }
    }
  ) })
);
zo.displayName = "DialogContentVideo";
const vh = ({
  message: e,
  role: t
}) => {
  var n, r, i;
  switch (e.type) {
    case mt.TEXT:
      return /* @__PURE__ */ k.jsx(
        Uo,
        {
          content: ((n = e.text) == null ? void 0 : n.value) || "",
          messageId: e.id
        }
      );
    case mt.IMAGE:
      return /* @__PURE__ */ k.jsx(
        $o,
        {
          urlImage: ((r = e.text) == null ? void 0 : r.value) || "",
          altText: Ve("home.messageList.sentBy", {
            role: t
          })
        }
      );
    case mt.VIDEO:
      return /* @__PURE__ */ k.jsx(
        zo,
        {
          urlVideo: ((i = e.text) == null ? void 0 : i.value) || "",
          videoTitle: Ve("home.messageList.sentBy", {
            role: t
          })
        }
      );
    default:
      return null;
  }
};
var Vo = /* @__PURE__ */ ((e) => (e.PT_BR = "Português (Brasil)", e.EN_US = "English (US)", e.ES_ES = "Español (ES)", e))(Vo || {});
const wh = wl((e) => ({
  theme: "dark",
  language: jr.language || Vo.PT_BR,
  actions: {
    changeTheme: (t) => e({ theme: t }),
    changeLanguage: (t, n) => {
      e({ language: t }), jr.changeLanguage(t);
      const r = new FormData();
      r.append("language", t), n.submit(r, { method: "post", action: "/language-session" });
    },
    initializeLanguage: (t) => {
      e({ language: t });
    }
  }
})), xh = () => wh((e) => e.theme), Qr = D.memo(
  ({
    content: e,
    alwaysVisible: t = !1
  }) => {
    const [n, r] = D.useState(!1), [i, a] = D.useState(!1), o = xh() === "light", { copyButton: l, copyButtonWrapper: c, copyIconWrapper: u } = ln({
      role: He.ASSISTANT,
      copyAlwaysVisible: t,
      copyIsCopied: n,
      copyIsFading: i
    }), d = D.useCallback(async () => {
      try {
        a(!0), await new Promise((g) => setTimeout(g, 150)), await navigator.clipboard.writeText(e), r(!0), a(!1);
      } catch (g) {
        console.error("Failed to copy content:", g), a(!1);
      }
    }, [e]);
    D.useEffect(() => {
      if (n) {
        const g = setTimeout(() => {
          a(!0), setTimeout(() => {
            r(!1), a(!1);
          }, 150);
        }, 3e3);
        return () => clearTimeout(g);
      }
    }, [n]);
    const p = n ? "check" : "copy", f = n ? Ve("home.messageDialog.copyButton.copied") : Ve("home.messageDialog.copyButton.copy");
    return /* @__PURE__ */ k.jsx(
      li,
      {
        content: /* @__PURE__ */ k.jsx("div", { className: "p-0.5 flex items-center justify-center bg-list-normal-side-nav rounded-md", children: /* @__PURE__ */ k.jsx("span", { className: "text-neutral-1 text-center text-xs", children: f }) }),
        position: gt.Bottom,
        trigger: tt.Hover,
        children: /* @__PURE__ */ k.jsx("div", { className: Q(c()), children: /* @__PURE__ */ k.jsx("div", { className: Q(u()), children: /* @__PURE__ */ k.jsx(
          et,
          {
            name: p,
            size: "sm",
            onClick: d,
            className: Q(
              l(),
              // Light theme: white background by default
              o && "bg-white",
              // Light theme hover: black background
              o && "hover:bg-black"
            ),
            colorFill: n ? "fill-white" : "fill-none",
            iconClassName: Q(
              n ? "[&_path]:fill-white [&_path]:stroke-none" : o ? "[&_path]:stroke-black [&_path]:fill-none" : "[&_path]:fill-none [&_path]:stroke-white/70",
              // Light theme hover: white SVG
              o && !n && "hover:[&_path]:stroke-white hover:[&_path]:fill-none"
            ),
            "aria-label": f,
            "data-testid": "copy-button",
            "data-copied": n ? "true" : "false"
          }
        ) }) })
      }
    );
  }
);
Qr.displayName = "CopyButtonInternal";
const Ho = D.memo(
  ({ message: e, role: t }) => {
    var u;
    const {
      message: n,
      image: r,
      video: i,
      contentWrapper: a
    } = ln({ role: t }), s = Q(
      e.type === mt.TEXT && n(),
      e.type === mt.IMAGE && r(),
      e.type === mt.VIDEO && i()
    ), o = ((u = e.text) == null ? void 0 : u.value) || "", l = o && e.type === mt.TEXT && !e.isInitial, c = t === He.ASSISTANT;
    return /* @__PURE__ */ k.jsxs("div", { className: Q(a()), children: [
      l && !c && /* @__PURE__ */ k.jsx(Qr, { content: o }),
      /* @__PURE__ */ k.jsx("div", { className: s, children: vh({ message: e, role: t }) }),
      l && c && /* @__PURE__ */ k.jsx(Qr, { content: o, alwaysVisible: !0 })
    ] }, e.id);
  }
);
Ho.displayName = "DialogContent";
const jo = ({ className: e, message: t }) => {
  const { container: n, dialogContent: r } = ln({
    role: t.role
  }), i = t.role === He.ASSISTANT && t.avatar, a = t.role === He.USER;
  return /* @__PURE__ */ k.jsxs("div", { className: Q(n(), a && "group", e), children: [
    i && /* @__PURE__ */ k.jsx(oi, { ...t.avatar }),
    /* @__PURE__ */ k.jsx("div", { className: Q(r()), children: /* @__PURE__ */ k.jsx(Ho, { message: t, role: t.role }) })
  ] });
};
jo.displayName = "MessageDialog";
const gn = {
  base: "max-w-[95%]",
  md: "md:max-w-[90%]",
  lg: "lg:max-w-[85%]",
  xl: "xl:max-w-[80%]",
  "2xl": "2xl:max-w-[75%]"
}, Si = Tt({
  slots: {
    containerStyle: Q(
      "flex flex-col gap-8 overflow-y-auto custom-scroll w-full mx-auto pb-4 pt-18",
      "lg:pt-4",
      gn.base,
      gn.md,
      gn.lg,
      gn.xl,
      gn["2xl"]
    ),
    newConversation: "flex flex-col items-center justify-center text-white text-lg font-medium text-neutral-2",
    loaderStyle: "flex w-full items-center justify-start gap-4",
    thinkingLoader: "flex w-full items-center justify-start gap-4 pl-1.5",
    thinkingLoaderAvatar: "relative flex items-center justify-center h-6 w-6",
    thinkingLoaderText: "text-white text-sm",
    errorState: "flex flex-col items-center justify-center gap-4 py-8",
    errorStateIcon: "w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center",
    errorStateText: "text-white text-sm text-center"
  }
}), kh = ({ messages: e }) => /* @__PURE__ */ k.jsx(k.Fragment, { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ k.jsx(jo, { message: t }, t.id)) }), Th = ({
  awaitingResponse: e,
  newConversation: t,
  assistantName: n
}) => {
  const { t: r } = zn();
  return e ? null : /* @__PURE__ */ k.jsxs("div", { children: [
    /* @__PURE__ */ k.jsx(Va, { level: Ct.H1, className: t(), children: r("home.emptyAssistant", {
      assistantName: n
    }) }),
    /* @__PURE__ */ k.jsx(si, { isLoading: !0, variant: Fa.Spinner })
  ] });
}, Sh = ({
  avatarSrc: e,
  fullName: t,
  className: n
}) => {
  const { t: r } = zn(), { thinkingLoader: i, thinkingLoaderAvatar: a, thinkingLoaderText: s } = Si();
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: Q(i(), n),
      "data-testid": "assistant-thinking-loader",
      children: [
        /* @__PURE__ */ k.jsxs("div", { className: a(), children: [
          /* @__PURE__ */ k.jsx(
            oi,
            {
              src: e,
              fullName: t,
              size: $a.Small
            }
          ),
          /* @__PURE__ */ k.jsx(
            "div",
            {
              className: "assistant-thinking-ring",
              "data-testid": "assistant-thinking-loader-ring"
            }
          )
        ] }),
        /* @__PURE__ */ k.jsx(
          "span",
          {
            className: s(),
            "data-testid": "assistant-thinking-loader-text",
            children: r("home.assistantThinking")
          }
        )
      ]
    }
  );
}, Nh = ({
  errorType: e = "response"
}) => {
  const { t } = zn(), { errorState: n, errorStateIcon: r, errorStateText: i } = Si(), a = t(e === "loading" ? "home.error.chatLoading" : "home.error.responseLoading");
  return /* @__PURE__ */ k.jsxs("div", { className: n(), "data-testid": "chat-error-state", children: [
    /* @__PURE__ */ k.jsx("div", { className: r(), "data-testid": "chat-error-icon", children: /* @__PURE__ */ k.jsx(ai, { name: "info", className: "w-6 h-6 text-red-500" }) }),
    /* @__PURE__ */ k.jsx("p", { className: i(), children: a })
  ] });
}, Zo = ({ containerRef: e, messagesEndRef: t, initialMessages: n }) => {
  var b, E;
  const { isLoading: r, displayMessages: i, assistantName: a } = Cl(), {
    data: s,
    error: o,
    refetch: l
  } = za(), c = D.useMemo(() => n != null && n.length ? n : i, [n, i]), u = Ba(), { assistantProperties: d } = br(), { containerStyle: p, newConversation: f } = Si(), h = !!o && !r;
  return D.useLayoutEffect(() => {
    var v;
    (v = t.current) == null || v.scrollIntoView({ behavior: "smooth" });
  }, [c, u, t]), /* @__PURE__ */ k.jsxs("div", { ref: e, className: p(), children: [
    h ? /* @__PURE__ */ k.jsx(
      Nh,
      {
        errorType: c.length > 0 ? "response" : "loading"
      }
    ) : r ? /* @__PURE__ */ k.jsx(si, { isLoading: !0 }) : c.length > 0 ? /* @__PURE__ */ k.jsx(kh, { messages: c }) : /* @__PURE__ */ k.jsx(
      Th,
      {
        awaitingResponse: u,
        newConversation: f,
        assistantName: a
      }
    ),
    u && !h && /* @__PURE__ */ k.jsx(
      Sh,
      {
        avatarSrc: (E = (b = d == null ? void 0 : d.persona) == null ? void 0 : b.avatar) == null ? void 0 : E.uri,
        fullName: a
      }
    ),
    /* @__PURE__ */ k.jsx("div", { ref: t })
  ] });
};
Zo.displayName = "DialogList";
const Ah = { VITE_API_BFF_URL: "https://api.dsv.pas.app.br/" }, Oh = Ah;
async function Ch(e, t = {}) {
  const { token: n, hostname: r, headers: i, ...a } = t, s = xl(), o = Oh.VITE_API_BFF_URL, l = e.startsWith("http") ? e : `${o.replace(/\/$/, "")}/${e.replace(/^\//, "")}`, c = r ?? s.hostname ?? "embed-host";
  !r && !s.hostname && console.warn(
    '⚠️ hostname attribute not provided to <pas-assistant-embedded>. Using fallback "embed-host" for HTTP requests.'
  );
  const u = {
    ...i || {},
    "Content-Type": "application/json",
    "accept-language": jr.language,
    "x-hostname": c,
    ...s.apiKey ? { "x-api-key": s.apiKey } : {},
    ...s.userId ? { "x-user-id": s.userId } : {},
    ...n ? { Authorization: `Bearer ${n}` } : {}
  };
  return fetch(l, {
    ...a,
    headers: u
  });
}
function Rh() {
  return "assistant-ai/api/v1/threads/stream";
}
async function Ih(e, t) {
  var a, s, o, l, c, u, d, p, f;
  if (!e.body) throw new Error("Response body not readable");
  const n = e.body.getReader(), r = new TextDecoder();
  let i = "";
  for (; ; ) {
    const { value: g, done: h } = await n.read();
    if (h) break;
    i += r.decode(g, { stream: !0 });
    const b = i.split(`
`);
    i = b.pop() ?? "";
    for (const E of b) {
      const v = E.trim();
      if (!v.startsWith("data:")) continue;
      const O = v.replace(/^data:\s*/, "");
      try {
        const N = JSON.parse(O);
        switch (N.type) {
          case "RUN_STARTED":
            (a = t.onRunStarted) == null || a.call(t, N.run_id, N.thread_id);
            break;
          case "TEXT_MESSAGE_START":
            (s = t.onStart) == null || s.call(t);
            break;
          case "TEXT_MESSAGE_CONTENT": {
            N.content !== "*" && ((o = t.onContent) == null || o.call(t, N.content));
            break;
          }
          case "TEXT_MESSAGE_END":
            (l = t.onEnd) == null || l.call(t);
            break;
          case "RUN_FINISHED":
            (c = t.onRunFinished) == null || c.call(t, N.run_id, N.thread_id);
            break;
          case "DONE":
            (u = t.onRunFinished) == null || u.call(t, N.run_id, N.thread_id);
            break;
          case "TOOL_CALL_START":
            (d = t.onToolCallStart) == null || d.call(t, N.tool_name, N.run_id);
            break;
          case "TOOL_CALL_END":
            (p = t.onToolCallEnd) == null || p.call(t, N.tool_name, N.run_id);
            break;
          case "ERROR":
            (f = t.onStreamError) == null || f.call(t, N.message);
            break;
        }
      } catch (N) {
        console.warn("Falha ao processar evento SSE:", E, N);
      }
    }
  }
}
function Mh(e, t) {
  const { token: n, assistantId: r, content: i, threadId: a } = e;
  Ch(Rh(), {
    method: "POST",
    token: n,
    body: JSON.stringify({ content: i, assistantId: r, threadId: a })
  }).then((s) => {
    if (!s.ok)
      throw new Error(`HTTP ${s.status}: ${s.statusText}`);
    Ih(s, t);
  }).catch((s) => {
    var o;
    (o = t.onError) == null || o.call(t, s instanceof Error ? s : new Error(String(s)));
  });
}
const Dh = () => {
  const e = kl(), t = Tl(), { assistantProperties: n } = br(), { showToast: r } = Sl(), {
    addMessage: i,
    setIsTyping: a,
    selectThread: s,
    setNewlyCreatedThreadId: o,
    setIsAwaitingResponse: l
  } = Ua();
  return Rl(
    {
      mutationFn: async ({ content: c, threadId: u }) => {
        if (!t || !(n != null && n.id))
          throw new Error(Ve("common.validation.missingParameters"));
        return new Promise((d, p) => {
          Mh(
            {
              token: t,
              assistantId: n.id,
              content: c,
              threadId: u || void 0
            },
            {
              onStart: () => {
                l(!0);
                const f = {
                  id: `temp-assistant-${Date.now()}`,
                  type: mt.TEXT,
                  text: { value: "" },
                  createdAt: (/* @__PURE__ */ new Date()).toISOString(),
                  role: He.ASSISTANT
                }, g = dn.getState().currentThreadId;
                e.setQueryData(
                  ["messages", g],
                  (h) => ({
                    ...h,
                    messages: [
                      ...(h == null ? void 0 : h.messages) || [],
                      f
                    ]
                  })
                );
              },
              onContent: (f) => {
                const g = dn.getState(), h = g.currentThreadId;
                g.isAwaitingResponse && l(!1), e.setQueryData(
                  ["messages", h],
                  (b) => {
                    var O;
                    if (!((O = b == null ? void 0 : b.messages) != null && O.length)) return b;
                    const E = [...b.messages], v = E[E.length - 1];
                    return v.role !== He.ASSISTANT ? b : (E[E.length - 1] = {
                      ...v,
                      text: {
                        ...v.text,
                        value: v.text.value + f
                      }
                    }, { ...b, messages: E });
                  }
                );
              },
              onRunStarted: (f, g) => {
                if (!g)
                  return;
                const h = dn.getState().newlyCreatedThreadId;
                if (h && h !== g) {
                  const b = e.getQueryData([
                    "messages",
                    h
                  ]);
                  b && (e.setQueryData(
                    ["messages", g],
                    b
                  ), e.removeQueries({
                    queryKey: ["messages", h]
                  })), o(null);
                }
                s(g);
              },
              onToolCallStart: (f) => {
                console.debug(`Iniciando ferramenta: ${f}`), a(!0);
              },
              onToolCallEnd: (f) => {
                console.debug(`Ferramenta finalizada: ${f}`), a(!0);
              },
              onRunFinished: (f, g) => {
                a(!1);
                const h = {
                  currentThreadIdFromStore: dn.getState().currentThreadId,
                  optimisticFromStore: dn.getState().newlyCreatedThreadId
                }, b = g || h.optimisticFromStore;
                if (!b)
                  return;
                const E = h.optimisticFromStore;
                if (E && E !== b) {
                  const v = e.getQueryData([
                    "messages",
                    E
                  ]);
                  v && (e.setQueryData(
                    ["messages", b],
                    v
                  ), e.removeQueries({
                    queryKey: ["messages", E]
                  })), o(null);
                }
                s(b), !b.startsWith("optimistic-") && (e.invalidateQueries({
                  queryKey: ["messages", b]
                }), e.invalidateQueries({
                  queryKey: ["threads", n == null ? void 0 : n.id]
                }), d({ finalThreadId: b }));
              },
              onStreamError: (f) => {
                a(!1), l(!1), p(new Error(f));
              },
              onError: (f) => {
                a(!1), l(!1), r({
                  type: "error",
                  title: Ve("home.toast.error.create"),
                  duration: 2500
                }), p(f);
              }
            }
          );
        });
      },
      onMutate: async ({ content: c, threadId: u }) => {
        a(!0), await e.cancelQueries();
        const d = {
          id: `temp-user-${Date.now()}`,
          role: He.USER,
          text: { value: c },
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          type: mt.TEXT
        };
        let p, f;
        return u ? f = ["messages", u] : (p = `optimistic-${Date.now()}`, f = ["messages", p], s(p), o(p), e.setQueryData(f, { messages: [] })), e.setQueryData(f, (g) => ({
          ...g,
          messages: [...(g == null ? void 0 : g.messages) || [], d]
        })), i(d), { optimisticThreadId: p };
      },
      onSettled: (c, u, d, p) => {
        a(!1);
        const f = c == null ? void 0 : c.finalThreadId, g = p == null ? void 0 : p.optimisticThreadId;
        if (u || !f) {
          g && s(null);
          return;
        }
        g && e.removeQueries({
          queryKey: ["messages", g]
        }), e.invalidateQueries({ queryKey: ["messages", f] }), g && e.invalidateQueries({
          queryKey: ["threads", n == null ? void 0 : n.id]
        });
      }
    }
  );
}, Lh = () => {
  const [e, t] = D.useState("idle"), [n, r] = D.useState(""), [i, a] = D.useState(null), s = D.useRef(null), o = D.useCallback(() => {
    if (s.current)
      return;
    const c = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!c) {
      a("Speech Recognition API is not supported in this browser."), t("error");
      return;
    }
    const u = new c();
    s.current = u, u.lang = "pt-BR", u.continuous = !0, u.interimResults = !0, u.onresult = (d) => {
      const p = Array.from(
        d.results
      ).map((f) => f[0]).map((f) => f.transcript).join("");
      r(p);
    }, u.onerror = (d) => {
      console.error("Error during speech recognition:", d.error), a(d.error), t("error");
    }, u.onstart = () => {
      r(""), t("recognizing");
    }, u.onend = () => {
      t("stopped"), s.current = null;
    }, u.start();
  }, []), l = D.useCallback(() => {
    s.current && s.current.stop();
  }, []);
  return D.useEffect(() => () => {
    s.current && (s.current.abort(), s.current = null);
  }, []), {
    startRecognition: o,
    stopRecognition: l,
    status: e,
    transcript: n,
    error: i,
    isRecognizing: e === "recognizing"
  };
};
var Gn = (e) => e.type === "checkbox", Rt = (e) => e instanceof Date, Pe = (e) => e == null;
const Ko = (e) => typeof e == "object";
var _e = (e) => !Pe(e) && !Array.isArray(e) && Ko(e) && !Rt(e), Ph = (e) => _e(e) && e.target ? Gn(e.target) ? e.target.checked : e.target.value : e, Fh = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Bh = (e, t) => e.has(Fh(t)), Uh = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return _e(t) && t.hasOwnProperty("isPrototypeOf");
}, Ni = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ee(e) {
  if (e instanceof Date)
    return new Date(e);
  const t = typeof FileList < "u" && e instanceof FileList;
  if (Ni && (e instanceof Blob || t))
    return e;
  const n = Array.isArray(e);
  if (!n && !(_e(e) && Uh(e)))
    return e;
  const r = n ? [] : Object.create(Object.getPrototypeOf(e));
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (r[i] = Ee(e[i]));
  return r;
}
var Sr = (e) => /^\w*$/.test(e), fe = (e) => e === void 0, Ai = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Oi = (e) => Ai(e.replace(/["|']|\]/g, "").split(/\.|\[/)), $ = (e, t, n) => {
  if (!t || !_e(e))
    return n;
  const r = (Sr(t) ? [t] : Oi(t)).reduce((i, a) => Pe(i) ? i : i[a], e);
  return fe(r) || r === e ? fe(e[t]) ? n : e[t] : r;
}, Je = (e) => typeof e == "boolean", Ze = (e) => typeof e == "function", de = (e, t, n) => {
  let r = -1;
  const i = Sr(t) ? [t] : Oi(t), a = i.length, s = a - 1;
  for (; ++r < a; ) {
    const o = i[r];
    let l = n;
    if (r !== s) {
      const c = e[o];
      l = _e(c) || Array.isArray(c) ? c : isNaN(+i[r + 1]) ? {} : [];
    }
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    e[o] = l, e = e[o];
  }
};
const ha = {
  BLUR: "blur",
  FOCUS_OUT: "focusout"
}, Ke = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, ct = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, $h = Ue.createContext(null);
$h.displayName = "HookFormContext";
var zh = (e, t, n, r = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(i, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Ke.all && (t._proxyFormState[s] = !r || Ke.all), e[s];
      }
    });
  return i;
};
const Vh = typeof window < "u" ? Ue.useLayoutEffect : Ue.useEffect;
var $e = (e) => typeof e == "string", Hh = (e, t, n, r, i) => $e(e) ? (r && t.watch.add(e), $(n, e, i)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), $(n, a))) : (r && (t.watchAll = !0), n), Jr = (e) => Pe(e) || !Ko(e);
function yt(e, t, n = /* @__PURE__ */ new WeakSet()) {
  if (Jr(e) || Jr(t))
    return Object.is(e, t);
  if (Rt(e) && Rt(t))
    return Object.is(e.getTime(), t.getTime());
  const r = Object.keys(e), i = Object.keys(t);
  if (r.length !== i.length)
    return !1;
  if (n.has(e) || n.has(t))
    return !0;
  n.add(e), n.add(t);
  for (const a of r) {
    const s = e[a];
    if (!i.includes(a))
      return !1;
    if (a !== "ref") {
      const o = t[a];
      if (Rt(s) && Rt(o) || _e(s) && _e(o) || Array.isArray(s) && Array.isArray(o) ? !yt(s, o, n) : !Object.is(s, o))
        return !1;
    }
  }
  return !0;
}
var Go = (e, t, n, r, i) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: i || !0
  }
} : {}, vn = (e) => Array.isArray(e) ? e : [e], ba = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const a of e)
        a.next && a.next(i);
    },
    subscribe: (i) => (e.push(i), {
      unsubscribe: () => {
        e = e.filter((a) => a !== i);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
function Wo(e, t) {
  const n = {};
  for (const r in e)
    if (e.hasOwnProperty(r)) {
      const i = e[r], a = t[r];
      if (i && _e(i) && a) {
        const s = Wo(i, a);
        _e(s) && (n[r] = s);
      } else e[r] && (n[r] = a);
    }
  return n;
}
var Re = (e) => _e(e) && !Object.keys(e).length, Ci = (e) => e.type === "file", lr = (e) => {
  if (!Ni)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, qo = (e) => e.type === "select-multiple", Ri = (e) => e.type === "radio", jh = (e) => Ri(e) || Gn(e), Vr = (e) => lr(e) && e.isConnected;
function Zh(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = fe(e) ? r++ : e[t[r++]];
  return e;
}
function Kh(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !fe(e[t]))
      return !1;
  return !0;
}
function be(e, t) {
  const n = Array.isArray(t) ? t : Sr(t) ? [t] : Oi(t), r = n.length === 1 ? e : Zh(e, n), i = n.length - 1, a = n[i];
  return r && delete r[a], i !== 0 && (_e(r) && Re(r) || Array.isArray(r) && Kh(r)) && be(e, n.slice(0, -1)), e;
}
var Gh = (e) => {
  for (const t in e)
    if (Ze(e[t]))
      return !0;
  return !1;
};
function Yo(e) {
  return Array.isArray(e) || _e(e) && !Gh(e);
}
function ei(e, t = {}) {
  for (const n in e) {
    const r = e[n];
    Yo(r) ? (t[n] = Array.isArray(r) ? [] : {}, ei(r, t[n])) : fe(r) || (t[n] = !0);
  }
  return t;
}
function Xt(e, t, n) {
  n || (n = ei(t));
  for (const r in e) {
    const i = e[r];
    if (Yo(i))
      fe(t) || Jr(n[r]) ? n[r] = ei(i, Array.isArray(i) ? [] : {}) : Xt(i, Pe(t) ? {} : t[r], n[r]);
    else {
      const a = t[r];
      n[r] = !yt(i, a);
    }
  }
  return n;
}
const _a = {
  value: !1,
  isValid: !1
}, ya = { value: !0, isValid: !0 };
var Xo = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !fe(e[0].attributes.value) ? fe(e[0].value) || e[0].value === "" ? ya : { value: e[0].value, isValid: !0 } : ya
    ) : _a;
  }
  return _a;
}, Qo = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => fe(e) ? e : t ? e === "" ? NaN : e && +e : n && $e(e) ? new Date(e) : r ? r(e) : e;
const Ea = {
  isValid: !1,
  value: null
};
var Jo = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Ea) : Ea;
function va(e) {
  const t = e.ref;
  return Ci(t) ? t.files : Ri(t) ? Jo(e.refs).value : qo(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Gn(t) ? Xo(e.refs).value : Qo(fe(t.value) ? e.ref.value : t.value, e);
}
var Wh = (e, t, n, r) => {
  const i = {};
  for (const a of e) {
    const s = $(t, a);
    s && de(i, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: r
  };
}, cr = (e) => e instanceof RegExp, hn = (e) => fe(e) ? e : cr(e) ? e.source : _e(e) ? cr(e.value) ? e.value.source : e.value : e, wa = (e) => ({
  isOnSubmit: !e || e === Ke.onSubmit,
  isOnBlur: e === Ke.onBlur,
  isOnChange: e === Ke.onChange,
  isOnAll: e === Ke.all,
  isOnTouch: e === Ke.onTouched
});
const xa = "AsyncFunction";
var qh = (e) => !!e && !!e.validate && !!(Ze(e.validate) && e.validate.constructor.name === xa || _e(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === xa)), Yh = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), ka = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const wn = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const a = $(e, i);
    if (a) {
      const { _f: s, ...o } = a;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], i) && !r)
          return !0;
        if (s.ref && t(s.ref, s.name) && !r)
          return !0;
        if (wn(o, t))
          break;
      } else if (_e(o) && wn(o, t))
        break;
    }
  }
};
function Ta(e, t, n) {
  const r = $(e, n);
  if (r || Sr(n))
    return {
      error: r,
      name: n
    };
  const i = n.split(".");
  for (; i.length; ) {
    const a = i.join("."), s = $(t, a), o = $(e, a);
    if (s && !Array.isArray(s) && n !== a)
      return { name: n };
    if (o && o.type)
      return {
        name: a,
        error: o
      };
    if (o && o.root && o.root.type)
      return {
        name: `${a}.root`,
        error: o.root
      };
    i.pop();
  }
  return {
    name: n
  };
}
var Xh = (e, t, n, r) => {
  n(e);
  const { name: i, ...a } = e;
  return Re(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Ke.all));
}, Qh = (e, t, n) => !e || !t || e === t || vn(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r))), Jh = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, eb = (e, t) => !Ai($(e, t)).length && be(e, t), tb = (e, t, n) => {
  const r = vn($(e, n));
  return de(r, "root", t[n]), de(e, n, r), e;
};
function Sa(e, t, n = "validate") {
  if ($e(e) || Array.isArray(e) && e.every($e) || Je(e) && !e)
    return {
      type: n,
      message: $e(e) ? e : "",
      ref: t
    };
}
var Kt = (e) => _e(e) && !cr(e) ? e : {
  value: e,
  message: ""
}, Na = async (e, t, n, r, i, a) => {
  const { ref: s, refs: o, required: l, maxLength: c, minLength: u, min: d, max: p, pattern: f, validate: g, name: h, valueAsNumber: b, mount: E } = e._f, v = $(n, h);
  if (!E || t.has(h))
    return {};
  const O = o ? o[0] : s, N = (H) => {
    i && O.reportValidity && (O.setCustomValidity(Je(H) ? "" : H || ""), O.reportValidity());
  }, I = {}, F = Ri(s), G = Gn(s), Z = F || G, z = (b || Ci(s)) && fe(s.value) && fe(v) || lr(s) && s.value === "" || v === "" || Array.isArray(v) && !v.length, w = Go.bind(null, h, r, I), le = (H, K, J, re = ct.maxLength, T = ct.minLength) => {
    const M = H ? K : J;
    I[h] = {
      type: H ? re : T,
      message: M,
      ref: s,
      ...w(H ? re : T, M)
    };
  };
  if (a ? !Array.isArray(v) || !v.length : l && (!Z && (z || Pe(v)) || Je(v) && !v || G && !Xo(o).isValid || F && !Jo(o).isValid)) {
    const { value: H, message: K } = $e(l) ? { value: !!l, message: l } : Kt(l);
    if (H && (I[h] = {
      type: ct.required,
      message: K,
      ref: O,
      ...w(ct.required, K)
    }, !r))
      return N(K), I;
  }
  if (!z && (!Pe(d) || !Pe(p))) {
    let H, K;
    const J = Kt(p), re = Kt(d);
    if (!Pe(v) && !isNaN(v)) {
      const T = s.valueAsNumber || v && +v;
      Pe(J.value) || (H = T > J.value), Pe(re.value) || (K = T < re.value);
    } else {
      const T = s.valueAsDate || new Date(v), M = (ee) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ee), C = s.type == "time", W = s.type == "week";
      $e(J.value) && v && (H = C ? M(v) > M(J.value) : W ? v > J.value : T > new Date(J.value)), $e(re.value) && v && (K = C ? M(v) < M(re.value) : W ? v < re.value : T < new Date(re.value));
    }
    if ((H || K) && (le(!!H, J.message, re.message, ct.max, ct.min), !r))
      return N(I[h].message), I;
  }
  if ((c || u) && !z && ($e(v) || a && Array.isArray(v))) {
    const H = Kt(c), K = Kt(u), J = !Pe(H.value) && v.length > +H.value, re = !Pe(K.value) && v.length < +K.value;
    if ((J || re) && (le(J, H.message, K.message), !r))
      return N(I[h].message), I;
  }
  if (f && !z && $e(v)) {
    const { value: H, message: K } = Kt(f);
    if (cr(H) && !v.match(H) && (I[h] = {
      type: ct.pattern,
      message: K,
      ref: s,
      ...w(ct.pattern, K)
    }, !r))
      return N(K), I;
  }
  if (g) {
    if (Ze(g)) {
      const H = await g(v, n), K = Sa(H, O);
      if (K && (I[h] = {
        ...K,
        ...w(ct.validate, K.message)
      }, !r))
        return N(K.message), I;
    } else if (_e(g)) {
      let H = {};
      for (const K in g) {
        if (!Re(H) && !r)
          break;
        const J = Sa(await g[K](v, n), O, K);
        J && (H = {
          ...J,
          ...w(K, J.message)
        }, N(J.message), r && (I[h] = H));
      }
      if (!Re(H) && (I[h] = {
        ref: O,
        ...H
      }, !r))
        return I;
    }
  }
  return N(!0), I;
};
const nb = {
  mode: Ke.onSubmit,
  reValidateMode: Ke.onChange,
  shouldFocusError: !0
};
function rb(e = {}) {
  let t = {
    ...nb,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: Ze(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, i = _e(t.defaultValues) || _e(t.values) ? Ee(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : Ee(i), s = {
    action: !1,
    mount: !1,
    watch: !1,
    keepIsValid: !1
  }, o = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, c = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, d = {
    ...u
  };
  let p = {
    ...d
  };
  const f = {
    array: ba(),
    state: ba()
  }, g = t.criteriaMode === Ke.all, h = (m) => (y) => {
    clearTimeout(c), c = setTimeout(m, y);
  }, b = async (m) => {
    if (!s.keepIsValid && !t.disabled && (d.isValid || p.isValid || m)) {
      let y;
      t.resolver ? (y = Re((await Z()).errors), E()) : y = await w(r, !0), y !== n.isValid && f.state.next({
        isValid: y
      });
    }
  }, E = (m, y) => {
    !t.disabled && (d.isValidating || d.validatingFields || p.isValidating || p.validatingFields) && ((m || Array.from(o.mount)).forEach((x) => {
      x && (y ? de(n.validatingFields, x, y) : be(n.validatingFields, x));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Re(n.validatingFields)
    }));
  }, v = (m, y = [], x, P, R = !0, _ = !0) => {
    if (P && x && !t.disabled) {
      if (s.action = !0, _ && Array.isArray($(r, m))) {
        const S = x($(r, m), P.argA, P.argB);
        R && de(r, m, S);
      }
      if (_ && Array.isArray($(n.errors, m))) {
        const S = x($(n.errors, m), P.argA, P.argB);
        R && de(n.errors, m, S), eb(n.errors, m);
      }
      if ((d.touchedFields || p.touchedFields) && _ && Array.isArray($(n.touchedFields, m))) {
        const S = x($(n.touchedFields, m), P.argA, P.argB);
        R && de(n.touchedFields, m, S);
      }
      (d.dirtyFields || p.dirtyFields) && (n.dirtyFields = Xt(i, a)), f.state.next({
        name: m,
        isDirty: H(m, y),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      de(a, m, y);
  }, O = (m, y) => {
    de(n.errors, m, y), f.state.next({
      errors: n.errors
    });
  }, N = (m) => {
    n.errors = m, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, I = (m, y, x, P) => {
    const R = $(r, m);
    if (R) {
      const _ = $(a, m, fe(x) ? $(i, m) : x);
      fe(_) || P && P.defaultChecked || y ? de(a, m, y ? _ : va(R._f)) : re(m, _), s.mount && !s.action && b();
    }
  }, F = (m, y, x, P, R) => {
    let _ = !1, S = !1;
    const B = {
      name: m
    };
    if (!t.disabled) {
      if (!x || P) {
        (d.isDirty || p.isDirty) && (S = n.isDirty, n.isDirty = B.isDirty = H(), _ = S !== B.isDirty);
        const j = yt($(i, m), y);
        S = !!$(n.dirtyFields, m), j ? be(n.dirtyFields, m) : de(n.dirtyFields, m, !0), B.dirtyFields = n.dirtyFields, _ = _ || (d.dirtyFields || p.dirtyFields) && S !== !j;
      }
      if (x) {
        const j = $(n.touchedFields, m);
        j || (de(n.touchedFields, m, x), B.touchedFields = n.touchedFields, _ = _ || (d.touchedFields || p.touchedFields) && j !== x);
      }
      _ && R && f.state.next(B);
    }
    return _ ? B : {};
  }, G = (m, y, x, P) => {
    const R = $(n.errors, m), _ = (d.isValid || p.isValid) && Je(y) && n.isValid !== y;
    if (t.delayError && x ? (l = h(() => O(m, x)), l(t.delayError)) : (clearTimeout(c), l = null, x ? de(n.errors, m, x) : be(n.errors, m)), (x ? !yt(R, x) : R) || !Re(P) || _) {
      const S = {
        ...P,
        ..._ && Je(y) ? { isValid: y } : {},
        errors: n.errors,
        name: m
      };
      n = {
        ...n,
        ...S
      }, f.state.next(S);
    }
  }, Z = async (m) => (E(m, !0), await t.resolver(a, t.context, Wh(m || o.mount, r, t.criteriaMode, t.shouldUseNativeValidation))), z = async (m) => {
    const { errors: y } = await Z(m);
    if (E(m), m)
      for (const x of m) {
        const P = $(y, x);
        P ? de(n.errors, x, P) : be(n.errors, x);
      }
    else
      n.errors = y;
    return y;
  }, w = async (m, y, x = {
    valid: !0
  }) => {
    for (const P in m) {
      const R = m[P];
      if (R) {
        const { _f: _, ...S } = R;
        if (_) {
          const B = o.array.has(_.name), j = R._f && qh(R._f);
          j && d.validatingFields && E([_.name], !0);
          const se = await Na(R, o.disabled, a, g, t.shouldUseNativeValidation && !y, B);
          if (j && d.validatingFields && E([_.name]), se[_.name] && (x.valid = !1, y || e.shouldUseNativeValidation))
            break;
          !y && ($(se, _.name) ? B ? tb(n.errors, se, _.name) : de(n.errors, _.name, se[_.name]) : be(n.errors, _.name));
        }
        !Re(S) && await w(S, y, x);
      }
    }
    return x.valid;
  }, le = () => {
    for (const m of o.unMount) {
      const y = $(r, m);
      y && (y._f.refs ? y._f.refs.every((x) => !Vr(x)) : !Vr(y._f.ref)) && ot(m);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, H = (m, y) => !t.disabled && (m && y && de(a, m, y), !yt(ae(), i)), K = (m, y, x) => Hh(m, o, {
    ...s.mount ? a : fe(y) ? i : $e(m) ? { [m]: y } : y
  }, x, y), J = (m) => Ai($(s.mount ? a : i, m, t.shouldUnregister ? $(i, m, []) : [])), re = (m, y, x = {}) => {
    const P = $(r, m);
    let R = y;
    if (P) {
      const _ = P._f;
      _ && (!_.disabled && de(a, m, Qo(y, _)), R = lr(_.ref) && Pe(y) ? "" : y, qo(_.ref) ? [..._.ref.options].forEach((S) => S.selected = R.includes(S.value)) : _.refs ? Gn(_.ref) ? _.refs.forEach((S) => {
        (!S.defaultChecked || !S.disabled) && (Array.isArray(R) ? S.checked = !!R.find((B) => B === S.value) : S.checked = R === S.value || !!R);
      }) : _.refs.forEach((S) => S.checked = S.value === R) : Ci(_.ref) ? _.ref.value = "" : (_.ref.value = R, _.ref.type || f.state.next({
        name: m,
        values: Ee(a)
      })));
    }
    (x.shouldDirty || x.shouldTouch) && F(m, R, x.shouldTouch, x.shouldDirty, !0), x.shouldValidate && ee(m);
  }, T = (m, y, x) => {
    for (const P in y) {
      if (!y.hasOwnProperty(P))
        return;
      const R = y[P], _ = m + "." + P, S = $(r, _);
      (o.array.has(m) || _e(R) || S && !S._f) && !Rt(R) ? T(_, R, x) : re(_, R, x);
    }
  }, M = (m, y, x = {}) => {
    const P = $(r, m), R = o.array.has(m), _ = Ee(y);
    de(a, m, _), R ? (f.array.next({
      name: m,
      values: Ee(a)
    }), (d.isDirty || d.dirtyFields || p.isDirty || p.dirtyFields) && x.shouldDirty && f.state.next({
      name: m,
      dirtyFields: Xt(i, a),
      isDirty: H(m, _)
    })) : P && !P._f && !Pe(_) ? T(m, _, x) : re(m, _, x), ka(m, o) ? f.state.next({
      ...n,
      name: m,
      values: Ee(a)
    }) : f.state.next({
      name: s.mount ? m : void 0,
      values: Ee(a)
    });
  }, C = async (m) => {
    s.mount = !0;
    const y = m.target;
    let x = y.name, P = !0;
    const R = $(r, x), _ = (j) => {
      P = Number.isNaN(j) || Rt(j) && isNaN(j.getTime()) || yt(j, $(a, x, j));
    }, S = wa(t.mode), B = wa(t.reValidateMode);
    if (R) {
      let j, se;
      const we = y.type ? va(R._f) : Ph(m), Xe = m.type === ha.BLUR || m.type === ha.FOCUS_OUT, Ar = !Yh(R._f) && !t.resolver && !$(n.errors, x) && !R._f.deps || Jh(Xe, $(n.touchedFields, x), n.isSubmitted, B, S), Or = ka(x, o, Xe);
      de(a, x, we), Xe ? (!y || !y.readOnly) && (R._f.onBlur && R._f.onBlur(m), l && l(0)) : R._f.onChange && R._f.onChange(m);
      const Cr = F(x, we, Xe), fl = !Re(Cr) || Or;
      if (!Xe && f.state.next({
        name: x,
        type: m.type,
        values: Ee(a)
      }), Ar)
        return (d.isValid || p.isValid) && (t.mode === "onBlur" ? Xe && b() : Xe || b()), fl && f.state.next({ name: x, ...Or ? {} : Cr });
      if (!Xe && Or && f.state.next({ ...n }), t.resolver) {
        const { errors: Mi } = await Z([x]);
        if (E([x]), _(we), P) {
          const pl = Ta(n.errors, r, x), Di = Ta(Mi, r, pl.name || x);
          j = Di.error, x = Di.name, se = Re(Mi);
        }
      } else
        E([x], !0), j = (await Na(R, o.disabled, a, g, t.shouldUseNativeValidation))[x], E([x]), _(we), P && (j ? se = !1 : (d.isValid || p.isValid) && (se = await w(r, !0)));
      P && (R._f.deps && (!Array.isArray(R._f.deps) || R._f.deps.length > 0) && ee(R._f.deps), G(x, se, j, Cr));
    }
  }, W = (m, y) => {
    if ($(n.errors, y) && m.focus)
      return m.focus(), 1;
  }, ee = async (m, y = {}) => {
    let x, P;
    const R = vn(m);
    if (t.resolver) {
      const _ = await z(fe(m) ? m : R);
      x = Re(_), P = m ? !R.some((S) => $(_, S)) : x;
    } else m ? (P = (await Promise.all(R.map(async (_) => {
      const S = $(r, _);
      return await w(S && S._f ? { [_]: S } : S);
    }))).every(Boolean), !(!P && !n.isValid) && b()) : P = x = await w(r);
    return f.state.next({
      ...!$e(m) || (d.isValid || p.isValid) && x !== n.isValid ? {} : { name: m },
      ...t.resolver || !m ? { isValid: x } : {},
      errors: n.errors
    }), y.shouldFocus && !P && wn(r, W, m ? R : o.mount), P;
  }, ae = (m, y) => {
    let x = {
      ...s.mount ? a : i
    };
    return y && (x = Wo(y.dirtyFields ? n.dirtyFields : n.touchedFields, x)), fe(m) ? x : $e(m) ? $(x, m) : m.map((P) => $(x, P));
  }, ue = (m, y) => ({
    invalid: !!$((y || n).errors, m),
    isDirty: !!$((y || n).dirtyFields, m),
    error: $((y || n).errors, m),
    isValidating: !!$(n.validatingFields, m),
    isTouched: !!$((y || n).touchedFields, m)
  }), De = (m) => {
    m && vn(m).forEach((y) => be(n.errors, y)), f.state.next({
      errors: m ? n.errors : {}
    });
  }, ve = (m, y, x) => {
    const P = ($(r, m, { _f: {} })._f || {}).ref, R = $(n.errors, m) || {}, { ref: _, message: S, type: B, ...j } = R;
    de(n.errors, m, {
      ...j,
      ...y,
      ref: P
    }), f.state.next({
      name: m,
      errors: n.errors,
      isValid: !1
    }), x && x.shouldFocus && P && P.focus && P.focus();
  }, Ne = (m, y) => Ze(m) ? f.state.subscribe({
    next: (x) => "values" in x && m(K(void 0, y), x)
  }) : K(m, y, !0), st = (m) => f.state.subscribe({
    next: (y) => {
      Qh(m.name, y.name, m.exact) && Xh(y, m.formState || d, q, m.reRenderRoot) && m.callback({
        values: { ...a },
        ...n,
        ...y,
        defaultValues: i
      });
    }
  }).unsubscribe, $t = (m) => (s.mount = !0, p = {
    ...p,
    ...m.formState
  }, st({
    ...m,
    formState: {
      ...u,
      ...m.formState
    }
  })), ot = (m, y = {}) => {
    for (const x of m ? vn(m) : o.mount)
      o.mount.delete(x), o.array.delete(x), y.keepValue || (be(r, x), be(a, x)), !y.keepError && be(n.errors, x), !y.keepDirty && be(n.dirtyFields, x), !y.keepTouched && be(n.touchedFields, x), !y.keepIsValidating && be(n.validatingFields, x), !t.shouldUnregister && !y.keepDefaultValue && be(i, x);
    f.state.next({
      values: Ee(a)
    }), f.state.next({
      ...n,
      ...y.keepDirty ? { isDirty: H() } : {}
    }), !y.keepIsValid && b();
  }, zt = ({ disabled: m, name: y }) => {
    (Je(m) && s.mount || m || o.disabled.has(y)) && (m ? o.disabled.add(y) : o.disabled.delete(y));
  }, Nt = (m, y = {}) => {
    let x = $(r, m);
    const P = Je(y.disabled) || Je(t.disabled);
    return de(r, m, {
      ...x || {},
      _f: {
        ...x && x._f ? x._f : { ref: { name: m } },
        name: m,
        mount: !0,
        ...y
      }
    }), o.mount.add(m), x ? zt({
      disabled: Je(y.disabled) ? y.disabled : t.disabled,
      name: m
    }) : I(m, !0, y.value), {
      ...P ? { disabled: y.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!y.required,
        min: hn(y.min),
        max: hn(y.max),
        minLength: hn(y.minLength),
        maxLength: hn(y.maxLength),
        pattern: hn(y.pattern)
      } : {},
      name: m,
      onChange: C,
      onBlur: C,
      ref: (R) => {
        if (R) {
          Nt(m, y), x = $(r, m);
          const _ = fe(R.value) && R.querySelectorAll && R.querySelectorAll("input,select,textarea")[0] || R, S = jh(_), B = x._f.refs || [];
          if (S ? B.find((j) => j === _) : _ === x._f.ref)
            return;
          de(r, m, {
            _f: {
              ...x._f,
              ...S ? {
                refs: [
                  ...B.filter(Vr),
                  _,
                  ...Array.isArray($(i, m)) ? [{}] : []
                ],
                ref: { type: _.type, name: m }
              } : { ref: _ }
            }
          }), I(m, !1, void 0, _);
        } else
          x = $(r, m, {}), x._f && (x._f.mount = !1), (t.shouldUnregister || y.shouldUnregister) && !(Bh(o.array, m) && s.action) && o.unMount.add(m);
      }
    };
  }, At = () => t.shouldFocusError && wn(r, W, o.mount), cn = (m) => {
    Je(m) && (f.state.next({ disabled: m }), wn(r, (y, x) => {
      const P = $(r, x);
      P && (y.disabled = P._f.disabled || m, Array.isArray(P._f.refs) && P._f.refs.forEach((R) => {
        R.disabled = P._f.disabled || m;
      }));
    }, 0, !1));
  }, lt = (m, y) => async (x) => {
    let P;
    x && (x.preventDefault && x.preventDefault(), x.persist && x.persist());
    let R = Ee(a);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: _, values: S } = await Z();
      E(), n.errors = _, R = Ee(S);
    } else
      await w(r);
    if (o.disabled.size)
      for (const _ of o.disabled)
        be(R, _);
    if (be(n.errors, "root"), Re(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await m(R, x);
      } catch (_) {
        P = _;
      }
    } else
      y && await y({ ...n.errors }, x), At(), setTimeout(At);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Re(n.errors) && !P,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), P)
      throw P;
  }, Vt = (m, y = {}) => {
    $(r, m) && (fe(y.defaultValue) ? M(m, Ee($(i, m))) : (M(m, y.defaultValue), de(i, m, Ee(y.defaultValue))), y.keepTouched || be(n.touchedFields, m), y.keepDirty || (be(n.dirtyFields, m), n.isDirty = y.defaultValue ? H(m, Ee($(i, m))) : H()), y.keepError || (be(n.errors, m), d.isValid && b()), f.state.next({ ...n }));
  }, Ae = (m, y = {}) => {
    const x = m ? Ee(m) : i, P = Ee(x), R = Re(m), _ = R ? i : P;
    if (y.keepDefaultValues || (i = x), !y.keepValues) {
      if (y.keepDirtyValues) {
        const S = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(Xt(i, a))
        ]);
        for (const B of Array.from(S)) {
          const j = $(n.dirtyFields, B), se = $(a, B), we = $(_, B);
          j && !fe(se) ? de(_, B, se) : !j && !fe(we) && M(B, we);
        }
      } else {
        if (Ni && fe(m))
          for (const S of o.mount) {
            const B = $(r, S);
            if (B && B._f) {
              const j = Array.isArray(B._f.refs) ? B._f.refs[0] : B._f.ref;
              if (lr(j)) {
                const se = j.closest("form");
                if (se) {
                  se.reset();
                  break;
                }
              }
            }
          }
        if (y.keepFieldsRef)
          for (const S of o.mount)
            M(S, $(_, S));
        else
          r = {};
      }
      a = t.shouldUnregister ? y.keepDefaultValues ? Ee(i) : {} : Ee(_), f.array.next({
        values: { ..._ }
      }), f.state.next({
        values: { ..._ }
      });
    }
    o = {
      mount: y.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !d.isValid || !!y.keepIsValid || !!y.keepDirtyValues || !t.shouldUnregister && !Re(_), s.watch = !!t.shouldUnregister, s.keepIsValid = !!y.keepIsValid, s.action = !1, y.keepErrors || (n.errors = {}), f.state.next({
      submitCount: y.keepSubmitCount ? n.submitCount : 0,
      isDirty: R ? !1 : y.keepDirty ? n.isDirty : !!(y.keepDefaultValues && !yt(m, i)),
      isSubmitted: y.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: R ? {} : y.keepDirtyValues ? y.keepDefaultValues && a ? Xt(i, a) : n.dirtyFields : y.keepDefaultValues && m ? Xt(i, m) : y.keepDirty ? n.dirtyFields : {},
      touchedFields: y.keepTouched ? n.touchedFields : {},
      errors: y.keepErrors ? n.errors : {},
      isSubmitSuccessful: y.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: i
    });
  }, oe = (m, y) => Ae(Ze(m) ? m(a) : m, { ...t.resetOptions, ...y }), Ye = (m, y = {}) => {
    const x = $(r, m), P = x && x._f;
    if (P) {
      const R = P.refs ? P.refs[0] : P.ref;
      R.focus && setTimeout(() => {
        R.focus(), y.shouldSelect && Ze(R.select) && R.select();
      });
    }
  }, q = (m) => {
    n = {
      ...n,
      ...m
    };
  }, he = {
    control: {
      register: Nt,
      unregister: ot,
      getFieldState: ue,
      handleSubmit: lt,
      setError: ve,
      _subscribe: st,
      _runSchema: Z,
      _updateIsValidating: E,
      _focusError: At,
      _getWatch: K,
      _getDirty: H,
      _setValid: b,
      _setFieldArray: v,
      _setDisabledField: zt,
      _setErrors: N,
      _getFieldArray: J,
      _reset: Ae,
      _resetDefaultValues: () => Ze(t.defaultValues) && t.defaultValues().then((m) => {
        oe(m, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: le,
      _disableForm: cn,
      _subjects: f,
      _proxyFormState: d,
      get _fields() {
        return r;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(m) {
        s = m;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return o;
      },
      set _names(m) {
        o = m;
      },
      get _formState() {
        return n;
      },
      get _options() {
        return t;
      },
      set _options(m) {
        t = {
          ...t,
          ...m
        };
      }
    },
    subscribe: $t,
    trigger: ee,
    register: Nt,
    handleSubmit: lt,
    watch: Ne,
    setValue: M,
    getValues: ae,
    reset: oe,
    resetField: Vt,
    clearErrors: De,
    unregister: ot,
    setError: ve,
    setFocus: Ye,
    getFieldState: ue
  };
  return {
    ...he,
    formControl: he
  };
}
function ib(e = {}) {
  const t = Ue.useRef(void 0), n = Ue.useRef(void 0), [r, i] = Ue.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ze(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: Ze(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!t.current)
    if (e.formControl)
      t.current = {
        ...e.formControl,
        formState: r
      }, e.defaultValues && !Ze(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: s, ...o } = rb(e);
      t.current = {
        ...o,
        formState: r
      };
    }
  const a = t.current.control;
  return a._options = e, Vh(() => {
    const s = a._subscribe({
      formState: a._proxyFormState,
      callback: () => i({ ...a._formState }),
      reRenderRoot: !0
    });
    return i((o) => ({
      ...o,
      isReady: !0
    })), a._formState.isReady = !0, s;
  }, [a]), Ue.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), Ue.useEffect(() => {
    e.mode && (a._options.mode = e.mode), e.reValidateMode && (a._options.reValidateMode = e.reValidateMode);
  }, [a, e.mode, e.reValidateMode]), Ue.useEffect(() => {
    e.errors && (a._setErrors(e.errors), a._focusError());
  }, [a, e.errors]), Ue.useEffect(() => {
    e.shouldUnregister && a._subjects.state.next({
      values: a._getWatch()
    });
  }, [a, e.shouldUnregister]), Ue.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== r.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, r.isDirty]), Ue.useEffect(() => {
    var s;
    e.values && !yt(e.values, n.current) ? (a._reset(e.values, {
      keepFieldsRef: !0,
      ...a._options.resetOptions
    }), !((s = a._options.resetOptions) === null || s === void 0) && s.keepIsValid || a._setValid(), n.current = e.values, i((o) => ({ ...o }))) : a._resetDefaultValues();
  }, [a, e.values]), Ue.useEffect(() => {
    a._state.mount || (a._setValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = zh(r, a), t.current;
}
const Aa = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = $(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, el = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? Aa(r.ref, n, e) : r.refs && r.refs.forEach((i) => Aa(i, n, e));
  }
}, ab = (e, t) => {
  t.shouldUseNativeValidation && el(e, t);
  const n = {};
  for (const r in e) {
    const i = $(t.fields, r), a = Object.assign(e[r] || {}, { ref: i && i.ref });
    if (sb(t.names || Object.keys(e), r)) {
      const s = Object.assign({}, $(n, r));
      de(s, "root", a), de(n, r, s);
    } else de(n, r, a);
  }
  return n;
}, sb = (e, t) => e.some((n) => n.startsWith(t + "."));
var ob = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], i = r.code, a = r.message, s = r.path.join(".");
    if (!n[s]) if ("unionErrors" in r) {
      var o = r.unionErrors[0].errors[0];
      n[s] = { message: o.message, type: o.code };
    } else n[s] = { message: a, type: i };
    if ("unionErrors" in r && r.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(d) {
        return e.push(d);
      });
    }), t) {
      var l = n[s].types, c = l && l[r.code];
      n[s] = Go(s, t, n, i, c ? [].concat(c, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, lb = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, i, a) {
    try {
      return Promise.resolve(function(s, o) {
        try {
          var l = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(c) {
            return a.shouldUseNativeValidation && el({}, a), { errors: {}, values: n.raw ? r : c };
          });
        } catch (c) {
          return o(c);
        }
        return l && l.then ? l.then(void 0, o) : l;
      }(0, function(s) {
        if (function(o) {
          return Array.isArray(o == null ? void 0 : o.errors);
        }(s)) return { values: {}, errors: ab(ob(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
};
const Oa = 120, cb = 0.8, ub = 1, db = 8, fb = ({
  isActive: e,
  className: t
}) => {
  const n = D.useRef(null), r = D.useRef(null), i = D.useRef(null), a = D.useRef(null), s = D.useRef(null), o = D.useRef(null), l = D.useRef([]), c = D.useRef(0);
  return D.useEffect(() => {
    const u = async () => {
      if (!(!e || !n.current))
        try {
          const f = await navigator.mediaDevices.getUserMedia({
            audio: !0
          });
          o.current = f;
          const g = new (window.AudioContext || window.webkitAudioContext)();
          r.current = g;
          const h = g.createMediaStreamSource(f);
          a.current = h;
          const b = g.createAnalyser();
          b.fftSize = 256, b.smoothingTimeConstant = 0.3, i.current = b, h.connect(b), d();
        } catch (f) {
          console.error("Erro ao acessar o microfone:", f);
        }
    }, d = () => {
      if (c.current++, c.current % ub === 0) {
        const F = i.current;
        if (F) {
          const G = new Uint8Array(F.frequencyBinCount);
          F.getByteFrequencyData(G);
          let z = G.reduce((H, K) => H + K, 0) / G.length;
          z *= cb;
          const w = z > db ? z : 0, le = l.current;
          le.push(w), le.length > Oa && le.shift();
        }
      }
      const f = n.current;
      if (!f) return;
      const g = f.getContext("2d");
      if (!g) return;
      g.clearRect(0, 0, f.width, f.height);
      const h = f.width / Oa, b = l.current, v = window.getComputedStyle(f).getPropertyValue("--text-primary").trim(), N = v === "#1c2024" || v === "rgb(28, 32, 36)" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)", I = f.height * 0.9;
      b.forEach((F, G) => {
        let z = Math.log(1 + F) * 6;
        z < 3 && (z = 3), z > I && (z = I);
        const w = G * h, le = f.height / 2 - z / 2;
        g.fillStyle = N;
        const H = 4, K = h > 2 ? h - 1 : h;
        g.beginPath(), g.roundRect(w, le, K, z, H), g.fill();
      }), e && (s.current = requestAnimationFrame(d));
    }, p = () => {
      var g, h;
      s.current && cancelAnimationFrame(s.current), l.current = [];
      const f = n.current;
      if (f) {
        const b = f.getContext("2d");
        b == null || b.clearRect(0, 0, f.width, f.height);
      }
      if ((g = a.current) == null || g.disconnect(), (h = i.current) == null || h.disconnect(), o.current)
        for (const b of o.current.getTracks())
          b.stop();
      r.current && r.current.state !== "closed" && r.current.close().catch(() => {
      });
    };
    return e ? u() : p(), p;
  }, [e]), D.useEffect(() => {
    const u = n.current;
    if (!u) return;
    const d = () => {
      const g = u.parentElement;
      if (!g) return;
      const h = g.clientWidth || g.offsetWidth, b = 32;
      u.width = h, u.height = b;
    };
    d();
    const p = setTimeout(d, 0), f = new ResizeObserver(() => {
      d();
    });
    return u.parentElement && f.observe(u.parentElement), window.addEventListener("resize", d), () => {
      clearTimeout(p), f.disconnect(), window.removeEventListener("resize", d);
    };
  }, []), /* @__PURE__ */ k.jsx("div", { className: Q("flex-1 min-w-0 h-8", t), children: /* @__PURE__ */ k.jsx("canvas", { ref: n, className: "w-full h-8" }) });
};
var ie;
(function(e) {
  e.assertEqual = (i) => i;
  function t(i) {
  }
  e.assertIs = t;
  function n(i) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (i) => {
    const a = {};
    for (const s of i)
      a[s] = s;
    return a;
  }, e.getValidEnumValues = (i) => {
    const a = e.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), s = {};
    for (const o of a)
      s[o] = i[o];
    return e.objectValues(s);
  }, e.objectValues = (i) => e.objectKeys(i).map(function(a) {
    return i[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const a = [];
    for (const s in i)
      Object.prototype.hasOwnProperty.call(i, s) && a.push(s);
    return a;
  }, e.find = (i, a) => {
    for (const s of i)
      if (a(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function r(i, a = " | ") {
    return i.map((s) => typeof s == "string" ? `'${s}'` : s).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (i, a) => typeof a == "bigint" ? a.toString() : a;
})(ie || (ie = {}));
var ti;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(ti || (ti = {}));
const U = ie.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), dt = (e) => {
  switch (typeof e) {
    case "undefined":
      return U.undefined;
    case "string":
      return U.string;
    case "number":
      return isNaN(e) ? U.nan : U.number;
    case "boolean":
      return U.boolean;
    case "function":
      return U.function;
    case "bigint":
      return U.bigint;
    case "symbol":
      return U.symbol;
    case "object":
      return Array.isArray(e) ? U.array : e === null ? U.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? U.promise : typeof Map < "u" && e instanceof Map ? U.map : typeof Set < "u" && e instanceof Set ? U.set : typeof Date < "u" && e instanceof Date ? U.date : U.object;
    default:
      return U.unknown;
  }
}, A = ie.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), pb = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ze extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const n = t || function(a) {
      return a.message;
    }, r = { _errors: [] }, i = (a) => {
      for (const s of a.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(i);
        else if (s.code === "invalid_return_type")
          i(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          i(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(n(s));
        else {
          let o = r, l = 0;
          for (; l < s.path.length; ) {
            const c = s.path[l];
            l === s.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(n(s))) : o[c] = o[c] || { _errors: [] }, o = o[c], l++;
          }
        }
    };
    return i(this), r;
  }
  static assert(t) {
    if (!(t instanceof ze))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ie.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const i of this.issues)
      i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
ze.create = (e) => new ze(e);
const an = (e, t) => {
  let n;
  switch (e.code) {
    case A.invalid_type:
      e.received === U.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case A.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ie.jsonStringifyReplacer)}`;
      break;
    case A.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ie.joinValues(e.keys, ", ")}`;
      break;
    case A.invalid_union:
      n = "Invalid input";
      break;
    case A.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ie.joinValues(e.options)}`;
      break;
    case A.invalid_enum_value:
      n = `Invalid enum value. Expected ${ie.joinValues(e.options)}, received '${e.received}'`;
      break;
    case A.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case A.invalid_return_type:
      n = "Invalid function return type";
      break;
    case A.invalid_date:
      n = "Invalid date";
      break;
    case A.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ie.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case A.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case A.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case A.custom:
      n = "Invalid input";
      break;
    case A.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case A.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case A.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, ie.assertNever(e);
  }
  return { message: n };
};
let tl = an;
function mb(e) {
  tl = e;
}
function ur() {
  return tl;
}
const dr = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: i } = e, a = [...n, ...i.path || []], s = {
    ...i,
    path: a
  };
  if (i.message !== void 0)
    return {
      ...i,
      path: a,
      message: i.message
    };
  let o = "";
  const l = r.filter((c) => !!c).slice().reverse();
  for (const c of l)
    o = c(s, { data: t, defaultError: o }).message;
  return {
    ...i,
    path: a,
    message: o
  };
}, gb = [];
function L(e, t) {
  const n = ur(), r = dr({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      n,
      // then global override map
      n === an ? void 0 : an
      // then global default map
    ].filter((i) => !!i)
  });
  e.common.issues.push(r);
}
class Se {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted")
        return X;
      i.status === "dirty" && t.dirty(), r.push(i.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const i of n) {
      const a = await i.key, s = await i.value;
      r.push({
        key: a,
        value: s
      });
    }
    return Se.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: a, value: s } = i;
      if (a.status === "aborted" || s.status === "aborted")
        return X;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || i.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const X = Object.freeze({
  status: "aborted"
}), en = (e) => ({ status: "dirty", value: e }), Me = (e) => ({ status: "valid", value: e }), ni = (e) => e.status === "aborted", ri = (e) => e.status === "dirty", Lt = (e) => e.status === "valid", An = (e) => typeof Promise < "u" && e instanceof Promise;
function fr(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function nl(e, t, n, r, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var V;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(V || (V = {}));
var _n, yn;
class rt {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ca = (e, t) => {
  if (Lt(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new ze(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function te(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: i } : { errorMap: (s, o) => {
    var l, c;
    const { message: u } = e;
    return s.code === "invalid_enum_value" ? { message: u ?? o.defaultError } : typeof o.data > "u" ? { message: (l = u ?? r) !== null && l !== void 0 ? l : o.defaultError } : s.code !== "invalid_type" ? { message: o.defaultError } : { message: (c = u ?? n) !== null && c !== void 0 ? c : o.defaultError };
  }, description: i };
}
class ne {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return dt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: dt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Se(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: dt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (An(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const i = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: dt(t)
    }, a = this._parseSync({ data: t, path: i.path, parent: i });
    return Ca(i, a);
  }
  "~validate"(t) {
    var n, r;
    const i = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: dt(t)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: t, path: [], parent: i });
        return Lt(a) ? {
          value: a.value
        } : {
          issues: i.common.issues
        };
      } catch (a) {
        !((r = (n = a == null ? void 0 : a.message) === null || n === void 0 ? void 0 : n.toLowerCase()) === null || r === void 0) && r.includes("encountered") && (this["~standard"].async = !0), i.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: i }).then((a) => Lt(a) ? {
      value: a.value
    } : {
      issues: i.common.issues
    });
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: dt(t)
    }, i = this._parse({ data: t, path: r.path, parent: r }), a = await (An(i) ? i : Promise.resolve(i));
    return Ca(r, a);
  }
  refine(t, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, a) => {
      const s = t(i), o = () => a.addIssue({
        code: A.custom,
        ...r(i)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((l) => l ? !0 : (o(), !1)) : s ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) => t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(t) {
    return new qe({
      schema: this,
      typeName: Y.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (n) => this["~validate"](n)
    };
  }
  optional() {
    return nt.create(this, this._def);
  }
  nullable() {
    return kt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return We.create(this);
  }
  promise() {
    return on.create(this, this._def);
  }
  or(t) {
    return In.create([this, t], this._def);
  }
  and(t) {
    return Mn.create(this, t, this._def);
  }
  transform(t) {
    return new qe({
      ...te(this._def),
      schema: this,
      typeName: Y.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Bn({
      ...te(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Y.ZodDefault
    });
  }
  brand() {
    return new Ii({
      typeName: Y.ZodBranded,
      type: this,
      ...te(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Un({
      ...te(this._def),
      innerType: this,
      catchValue: n,
      typeName: Y.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Wn.create(this, t);
  }
  readonly() {
    return $n.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const hb = /^c[^\s-]{8,}$/i, bb = /^[0-9a-z]+$/, _b = /^[0-9A-HJKMNP-TV-Z]{26}$/i, yb = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Eb = /^[a-z0-9_-]{21}$/i, vb = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, wb = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, xb = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, kb = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Hr;
const Tb = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Sb = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Nb = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Ab = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ob = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Cb = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, rl = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Rb = new RegExp(`^${rl}$`);
function il(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function Ib(e) {
  return new RegExp(`^${il(e)}$`);
}
function al(e) {
  let t = `${rl}T${il(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Mb(e, t) {
  return !!((t === "v4" || !t) && Tb.test(e) || (t === "v6" || !t) && Nb.test(e));
}
function Db(e, t) {
  if (!vb.test(e))
    return !1;
  try {
    const [n] = e.split("."), r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), i = JSON.parse(atob(r));
    return !(typeof i != "object" || i === null || !i.typ || !i.alg || t && i.alg !== t);
  } catch {
    return !1;
  }
}
function Lb(e, t) {
  return !!((t === "v4" || !t) && Sb.test(e) || (t === "v6" || !t) && Ab.test(e));
}
class Ge extends ne {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== U.string) {
      const a = this._getOrReturnCtx(t);
      return L(a, {
        code: A.invalid_type,
        expected: U.string,
        received: a.parsedType
      }), X;
    }
    const r = new Se();
    let i;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (i = this._getOrReturnCtx(t, i), L(i, {
          code: A.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (i = this._getOrReturnCtx(t, i), L(i, {
          code: A.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, o = t.data.length < a.value;
        (s || o) && (i = this._getOrReturnCtx(t, i), s ? L(i, {
          code: A.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && L(i, {
          code: A.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        xb.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "email",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        Hr || (Hr = new RegExp(kb, "u")), Hr.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "emoji",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        yb.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "uuid",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        Eb.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "nanoid",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        hb.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "cuid",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        bb.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "cuid2",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        _b.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "ulid",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          i = this._getOrReturnCtx(t, i), L(i, {
            validation: "url",
            code: A.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
        validation: "regex",
        code: A.invalid_string,
        message: a.message
      }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (i = this._getOrReturnCtx(t, i), L(i, {
        code: A.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (i = this._getOrReturnCtx(t, i), L(i, {
        code: A.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (i = this._getOrReturnCtx(t, i), L(i, {
        code: A.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "datetime" ? al(a).test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
        code: A.invalid_string,
        validation: "datetime",
        message: a.message
      }), r.dirty()) : a.kind === "date" ? Rb.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
        code: A.invalid_string,
        validation: "date",
        message: a.message
      }), r.dirty()) : a.kind === "time" ? Ib(a).test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
        code: A.invalid_string,
        validation: "time",
        message: a.message
      }), r.dirty()) : a.kind === "duration" ? wb.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
        validation: "duration",
        code: A.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "ip" ? Mb(t.data, a.version) || (i = this._getOrReturnCtx(t, i), L(i, {
        validation: "ip",
        code: A.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "jwt" ? Db(t.data, a.alg) || (i = this._getOrReturnCtx(t, i), L(i, {
        validation: "jwt",
        code: A.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "cidr" ? Lb(t.data, a.version) || (i = this._getOrReturnCtx(t, i), L(i, {
        validation: "cidr",
        code: A.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64" ? Ob.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
        validation: "base64",
        code: A.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64url" ? Cb.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
        validation: "base64url",
        code: A.invalid_string,
        message: a.message
      }), r.dirty()) : ie.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: A.invalid_string,
      ...V.errToObj(r)
    });
  }
  _addCheck(t) {
    return new Ge({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...V.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...V.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...V.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...V.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...V.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...V.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...V.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...V.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...V.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...V.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...V.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...V.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...V.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...V.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...V.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...V.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...V.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...V.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...V.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...V.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...V.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...V.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...V.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, V.errToObj(t));
  }
  trim() {
    return new Ge({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Ge({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Ge({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Ge.create = (e) => {
  var t;
  return new Ge({
    checks: [],
    typeName: Y.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...te(e)
  });
};
function Pb(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, a = parseInt(e.toFixed(i).replace(".", "")), s = parseInt(t.toFixed(i).replace(".", ""));
  return a % s / Math.pow(10, i);
}
class vt extends ne {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== U.number) {
      const a = this._getOrReturnCtx(t);
      return L(a, {
        code: A.invalid_type,
        expected: U.number,
        received: a.parsedType
      }), X;
    }
    let r;
    const i = new Se();
    for (const a of this._def.checks)
      a.kind === "int" ? ie.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), L(r, {
        code: A.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), i.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), L(r, {
        code: A.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), L(r, {
        code: A.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? Pb(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), L(r, {
        code: A.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), L(r, {
        code: A.not_finite,
        message: a.message
      }), i.dirty()) : ie.assertNever(a);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, V.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, V.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, V.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, V.toString(n));
  }
  setLimit(t, n, r, i) {
    return new vt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: V.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new vt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: V.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: V.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: V.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: V.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: V.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: V.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: V.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: V.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: V.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ie.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
vt.create = (e) => new vt({
  checks: [],
  typeName: Y.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...te(e)
});
class wt extends ne {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== U.bigint)
      return this._getInvalidInput(t);
    let r;
    const i = new Se();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), L(r, {
        code: A.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), L(r, {
        code: A.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), L(r, {
        code: A.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : ie.assertNever(a);
    return { status: i.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return L(n, {
      code: A.invalid_type,
      expected: U.bigint,
      received: n.parsedType
    }), X;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, V.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, V.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, V.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, V.toString(n));
  }
  setLimit(t, n, r, i) {
    return new wt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: V.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new wt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: V.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: V.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: V.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: V.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: V.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
wt.create = (e) => {
  var t;
  return new wt({
    checks: [],
    typeName: Y.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...te(e)
  });
};
class On extends ne {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== U.boolean) {
      const r = this._getOrReturnCtx(t);
      return L(r, {
        code: A.invalid_type,
        expected: U.boolean,
        received: r.parsedType
      }), X;
    }
    return Me(t.data);
  }
}
On.create = (e) => new On({
  typeName: Y.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...te(e)
});
class Pt extends ne {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== U.date) {
      const a = this._getOrReturnCtx(t);
      return L(a, {
        code: A.invalid_type,
        expected: U.date,
        received: a.parsedType
      }), X;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return L(a, {
        code: A.invalid_date
      }), X;
    }
    const r = new Se();
    let i;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (i = this._getOrReturnCtx(t, i), L(i, {
        code: A.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (i = this._getOrReturnCtx(t, i), L(i, {
        code: A.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : ie.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Pt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: V.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: V.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Pt.create = (e) => new Pt({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Y.ZodDate,
  ...te(e)
});
class pr extends ne {
  _parse(t) {
    if (this._getType(t) !== U.symbol) {
      const r = this._getOrReturnCtx(t);
      return L(r, {
        code: A.invalid_type,
        expected: U.symbol,
        received: r.parsedType
      }), X;
    }
    return Me(t.data);
  }
}
pr.create = (e) => new pr({
  typeName: Y.ZodSymbol,
  ...te(e)
});
class Cn extends ne {
  _parse(t) {
    if (this._getType(t) !== U.undefined) {
      const r = this._getOrReturnCtx(t);
      return L(r, {
        code: A.invalid_type,
        expected: U.undefined,
        received: r.parsedType
      }), X;
    }
    return Me(t.data);
  }
}
Cn.create = (e) => new Cn({
  typeName: Y.ZodUndefined,
  ...te(e)
});
class Rn extends ne {
  _parse(t) {
    if (this._getType(t) !== U.null) {
      const r = this._getOrReturnCtx(t);
      return L(r, {
        code: A.invalid_type,
        expected: U.null,
        received: r.parsedType
      }), X;
    }
    return Me(t.data);
  }
}
Rn.create = (e) => new Rn({
  typeName: Y.ZodNull,
  ...te(e)
});
class sn extends ne {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Me(t.data);
  }
}
sn.create = (e) => new sn({
  typeName: Y.ZodAny,
  ...te(e)
});
class Mt extends ne {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Me(t.data);
  }
}
Mt.create = (e) => new Mt({
  typeName: Y.ZodUnknown,
  ...te(e)
});
class ht extends ne {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return L(n, {
      code: A.invalid_type,
      expected: U.never,
      received: n.parsedType
    }), X;
  }
}
ht.create = (e) => new ht({
  typeName: Y.ZodNever,
  ...te(e)
});
class mr extends ne {
  _parse(t) {
    if (this._getType(t) !== U.undefined) {
      const r = this._getOrReturnCtx(t);
      return L(r, {
        code: A.invalid_type,
        expected: U.void,
        received: r.parsedType
      }), X;
    }
    return Me(t.data);
  }
}
mr.create = (e) => new mr({
  typeName: Y.ZodVoid,
  ...te(e)
});
class We extends ne {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), i = this._def;
    if (n.parsedType !== U.array)
      return L(n, {
        code: A.invalid_type,
        expected: U.array,
        received: n.parsedType
      }), X;
    if (i.exactLength !== null) {
      const s = n.data.length > i.exactLength.value, o = n.data.length < i.exactLength.value;
      (s || o) && (L(n, {
        code: s ? A.too_big : A.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: s ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (L(n, {
      code: A.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (L(n, {
      code: A.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, o) => i.type._parseAsync(new rt(n, s, n.path, o)))).then((s) => Se.mergeArray(r, s));
    const a = [...n.data].map((s, o) => i.type._parseSync(new rt(n, s, n.path, o)));
    return Se.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new We({
      ...this._def,
      minLength: { value: t, message: V.toString(n) }
    });
  }
  max(t, n) {
    return new We({
      ...this._def,
      maxLength: { value: t, message: V.toString(n) }
    });
  }
  length(t, n) {
    return new We({
      ...this._def,
      exactLength: { value: t, message: V.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
We.create = (e, t) => new We({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Y.ZodArray,
  ...te(t)
});
function Qt(e) {
  if (e instanceof pe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = nt.create(Qt(r));
    }
    return new pe({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof We ? new We({
    ...e._def,
    type: Qt(e.element)
  }) : e instanceof nt ? nt.create(Qt(e.unwrap())) : e instanceof kt ? kt.create(Qt(e.unwrap())) : e instanceof it ? it.create(e.items.map((t) => Qt(t))) : e;
}
class pe extends ne {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = ie.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== U.object) {
      const c = this._getOrReturnCtx(t);
      return L(c, {
        code: A.invalid_type,
        expected: U.object,
        received: c.parsedType
      }), X;
    }
    const { status: r, ctx: i } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof ht && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        s.includes(c) || o.push(c);
    const l = [];
    for (const c of s) {
      const u = a[c], d = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new rt(i, d, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof ht) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: i.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (L(i, {
          code: A.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of o) {
        const d = i.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new rt(i, d, i.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const d = await u.key, p = await u.value;
        c.push({
          key: d,
          value: p,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Se.mergeObjectSync(r, c)) : Se.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return V.errToObj, new pe({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var i, a, s, o;
          const l = (s = (a = (i = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(i, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (o = V.errToObj(t).message) !== null && o !== void 0 ? o : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new pe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new pe({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new pe({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new pe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Y.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new pe({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return ie.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new pe({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return ie.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new pe({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Qt(this);
  }
  partial(t) {
    const n = {};
    return ie.objectKeys(this.shape).forEach((r) => {
      const i = this.shape[r];
      t && !t[r] ? n[r] = i : n[r] = i.optional();
    }), new pe({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return ie.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof nt; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new pe({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return sl(ie.objectKeys(this.shape));
  }
}
pe.create = (e, t) => new pe({
  shape: () => e,
  unknownKeys: "strip",
  catchall: ht.create(),
  typeName: Y.ZodObject,
  ...te(t)
});
pe.strictCreate = (e, t) => new pe({
  shape: () => e,
  unknownKeys: "strict",
  catchall: ht.create(),
  typeName: Y.ZodObject,
  ...te(t)
});
pe.lazycreate = (e, t) => new pe({
  shape: e,
  unknownKeys: "strip",
  catchall: ht.create(),
  typeName: Y.ZodObject,
  ...te(t)
});
class In extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function i(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const s = a.map((o) => new ze(o.ctx.common.issues));
      return L(n, {
        code: A.invalid_union,
        unionErrors: s
      }), X;
    }
    if (n.common.async)
      return Promise.all(r.map(async (a) => {
        const s = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: s
          }),
          ctx: s
        };
      })).then(i);
    {
      let a;
      const s = [];
      for (const l of r) {
        const c = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: n.data,
          path: n.path,
          parent: c
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !a && (a = { result: u, ctx: c }), c.common.issues.length && s.push(c.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((l) => new ze(l));
      return L(n, {
        code: A.invalid_union,
        unionErrors: o
      }), X;
    }
  }
  get options() {
    return this._def.options;
  }
}
In.create = (e, t) => new In({
  options: e,
  typeName: Y.ZodUnion,
  ...te(t)
});
const ut = (e) => e instanceof Ln ? ut(e.schema) : e instanceof qe ? ut(e.innerType()) : e instanceof Pn ? [e.value] : e instanceof xt ? e.options : e instanceof Fn ? ie.objectValues(e.enum) : e instanceof Bn ? ut(e._def.innerType) : e instanceof Cn ? [void 0] : e instanceof Rn ? [null] : e instanceof nt ? [void 0, ...ut(e.unwrap())] : e instanceof kt ? [null, ...ut(e.unwrap())] : e instanceof Ii || e instanceof $n ? ut(e.unwrap()) : e instanceof Un ? ut(e._def.innerType) : [];
class Nr extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.object)
      return L(n, {
        code: A.invalid_type,
        expected: U.object,
        received: n.parsedType
      }), X;
    const r = this.discriminator, i = n.data[r], a = this.optionsMap.get(i);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (L(n, {
      code: A.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), X);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const i = /* @__PURE__ */ new Map();
    for (const a of n) {
      const s = ut(a.shape[t]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of s) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        i.set(o, a);
      }
    }
    return new Nr({
      typeName: Y.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...te(r)
    });
  }
}
function ii(e, t) {
  const n = dt(e), r = dt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === U.object && r === U.object) {
    const i = ie.objectKeys(t), a = ie.objectKeys(e).filter((o) => i.indexOf(o) !== -1), s = { ...e, ...t };
    for (const o of a) {
      const l = ii(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      s[o] = l.data;
    }
    return { valid: !0, data: s };
  } else if (n === U.array && r === U.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], o = t[a], l = ii(s, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return n === U.date && r === U.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Mn extends ne {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (a, s) => {
      if (ni(a) || ni(s))
        return X;
      const o = ii(a.value, s.value);
      return o.valid ? ((ri(a) || ri(s)) && n.dirty(), { status: n.value, value: o.data }) : (L(r, {
        code: A.invalid_intersection_types
      }), X);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([a, s]) => i(a, s)) : i(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Mn.create = (e, t, n) => new Mn({
  left: e,
  right: t,
  typeName: Y.ZodIntersection,
  ...te(n)
});
class it extends ne {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.array)
      return L(r, {
        code: A.invalid_type,
        expected: U.array,
        received: r.parsedType
      }), X;
    if (r.data.length < this._def.items.length)
      return L(r, {
        code: A.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), X;
    !this._def.rest && r.data.length > this._def.items.length && (L(r, {
      code: A.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new rt(r, s, r.path, o)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Se.mergeArray(n, s)) : Se.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new it({
      ...this._def,
      rest: t
    });
  }
}
it.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new it({
    items: e,
    typeName: Y.ZodTuple,
    rest: null,
    ...te(t)
  });
};
class Dn extends ne {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.object)
      return L(r, {
        code: A.invalid_type,
        expected: U.object,
        received: r.parsedType
      }), X;
    const i = [], a = this._def.keyType, s = this._def.valueType;
    for (const o in r.data)
      i.push({
        key: a._parse(new rt(r, o, r.path, o)),
        value: s._parse(new rt(r, r.data[o], r.path, o)),
        alwaysSet: o in r.data
      });
    return r.common.async ? Se.mergeObjectAsync(n, i) : Se.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ne ? new Dn({
      keyType: t,
      valueType: n,
      typeName: Y.ZodRecord,
      ...te(r)
    }) : new Dn({
      keyType: Ge.create(),
      valueType: t,
      typeName: Y.ZodRecord,
      ...te(n)
    });
  }
}
class gr extends ne {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.map)
      return L(r, {
        code: A.invalid_type,
        expected: U.map,
        received: r.parsedType
      }), X;
    const i = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([o, l], c) => ({
      key: i._parse(new rt(r, o, r.path, [c, "key"])),
      value: a._parse(new rt(r, l, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of s) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return X;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of s) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return X;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
gr.create = (e, t, n) => new gr({
  valueType: t,
  keyType: e,
  typeName: Y.ZodMap,
  ...te(n)
});
class Ft extends ne {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.set)
      return L(r, {
        code: A.invalid_type,
        expected: U.set,
        received: r.parsedType
      }), X;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (L(r, {
      code: A.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (L(r, {
      code: A.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function s(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return X;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...r.data.values()].map((l, c) => a._parse(new rt(r, l, r.path, c)));
    return r.common.async ? Promise.all(o).then((l) => s(l)) : s(o);
  }
  min(t, n) {
    return new Ft({
      ...this._def,
      minSize: { value: t, message: V.toString(n) }
    });
  }
  max(t, n) {
    return new Ft({
      ...this._def,
      maxSize: { value: t, message: V.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ft.create = (e, t) => new Ft({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Y.ZodSet,
  ...te(t)
});
class tn extends ne {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.function)
      return L(n, {
        code: A.invalid_type,
        expected: U.function,
        received: n.parsedType
      }), X;
    function r(o, l) {
      return dr({
        data: o,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ur(),
          an
        ].filter((c) => !!c),
        issueData: {
          code: A.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function i(o, l) {
      return dr({
        data: o,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ur(),
          an
        ].filter((c) => !!c),
        issueData: {
          code: A.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof on) {
      const o = this;
      return Me(async function(...l) {
        const c = new ze([]), u = await o._def.args.parseAsync(l, a).catch((f) => {
          throw c.addIssue(r(l, f)), c;
        }), d = await Reflect.apply(s, this, u);
        return await o._def.returns._def.type.parseAsync(d, a).catch((f) => {
          throw c.addIssue(i(d, f)), c;
        });
      });
    } else {
      const o = this;
      return Me(function(...l) {
        const c = o._def.args.safeParse(l, a);
        if (!c.success)
          throw new ze([r(l, c.error)]);
        const u = Reflect.apply(s, this, c.data), d = o._def.returns.safeParse(u, a);
        if (!d.success)
          throw new ze([i(u, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new tn({
      ...this._def,
      args: it.create(t).rest(Mt.create())
    });
  }
  returns(t) {
    return new tn({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new tn({
      args: t || it.create([]).rest(Mt.create()),
      returns: n || Mt.create(),
      typeName: Y.ZodFunction,
      ...te(r)
    });
  }
}
class Ln extends ne {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ln.create = (e, t) => new Ln({
  getter: e,
  typeName: Y.ZodLazy,
  ...te(t)
});
class Pn extends ne {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return L(n, {
        received: n.data,
        code: A.invalid_literal,
        expected: this._def.value
      }), X;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Pn.create = (e, t) => new Pn({
  value: e,
  typeName: Y.ZodLiteral,
  ...te(t)
});
function sl(e, t) {
  return new xt({
    values: e,
    typeName: Y.ZodEnum,
    ...te(t)
  });
}
class xt extends ne {
  constructor() {
    super(...arguments), _n.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return L(n, {
        expected: ie.joinValues(r),
        received: n.parsedType,
        code: A.invalid_type
      }), X;
    }
    if (fr(this, _n) || nl(this, _n, new Set(this._def.values)), !fr(this, _n).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return L(n, {
        received: n.data,
        code: A.invalid_enum_value,
        options: r
      }), X;
    }
    return Me(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return xt.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return xt.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
_n = /* @__PURE__ */ new WeakMap();
xt.create = sl;
class Fn extends ne {
  constructor() {
    super(...arguments), yn.set(this, void 0);
  }
  _parse(t) {
    const n = ie.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== U.string && r.parsedType !== U.number) {
      const i = ie.objectValues(n);
      return L(r, {
        expected: ie.joinValues(i),
        received: r.parsedType,
        code: A.invalid_type
      }), X;
    }
    if (fr(this, yn) || nl(this, yn, new Set(ie.getValidEnumValues(this._def.values))), !fr(this, yn).has(t.data)) {
      const i = ie.objectValues(n);
      return L(r, {
        received: r.data,
        code: A.invalid_enum_value,
        options: i
      }), X;
    }
    return Me(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
yn = /* @__PURE__ */ new WeakMap();
Fn.create = (e, t) => new Fn({
  values: e,
  typeName: Y.ZodNativeEnum,
  ...te(t)
});
class on extends ne {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.promise && n.common.async === !1)
      return L(n, {
        code: A.invalid_type,
        expected: U.promise,
        received: n.parsedType
      }), X;
    const r = n.parsedType === U.promise ? n.data : Promise.resolve(n.data);
    return Me(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
on.create = (e, t) => new on({
  type: e,
  typeName: Y.ZodPromise,
  ...te(t)
});
class qe extends ne {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Y.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = this._def.effect || null, a = {
      addIssue: (s) => {
        L(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), i.type === "preprocess") {
      const s = i.transform(r.data, a);
      if (r.common.async)
        return Promise.resolve(s).then(async (o) => {
          if (n.value === "aborted")
            return X;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? X : l.status === "dirty" || n.value === "dirty" ? en(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return X;
        const o = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? X : o.status === "dirty" || n.value === "dirty" ? en(o.value) : o;
      }
    }
    if (i.type === "refinement") {
      const s = (o) => {
        const l = i.refinement(o, a);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? X : (o.status === "dirty" && n.dirty(), s(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? X : (o.status === "dirty" && n.dirty(), s(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Lt(s))
          return s;
        const o = i.transform(s.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => Lt(s) ? Promise.resolve(i.transform(s.value, a)).then((o) => ({ status: n.value, value: o })) : s);
    ie.assertNever(i);
  }
}
qe.create = (e, t, n) => new qe({
  schema: e,
  typeName: Y.ZodEffects,
  effect: t,
  ...te(n)
});
qe.createWithPreprocess = (e, t, n) => new qe({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Y.ZodEffects,
  ...te(n)
});
class nt extends ne {
  _parse(t) {
    return this._getType(t) === U.undefined ? Me(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
nt.create = (e, t) => new nt({
  innerType: e,
  typeName: Y.ZodOptional,
  ...te(t)
});
class kt extends ne {
  _parse(t) {
    return this._getType(t) === U.null ? Me(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
kt.create = (e, t) => new kt({
  innerType: e,
  typeName: Y.ZodNullable,
  ...te(t)
});
class Bn extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === U.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Bn.create = (e, t) => new Bn({
  innerType: e,
  typeName: Y.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...te(t)
});
class Un extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return An(i) ? i.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new ze(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new ze(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Un.create = (e, t) => new Un({
  innerType: e,
  typeName: Y.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...te(t)
});
class hr extends ne {
  _parse(t) {
    if (this._getType(t) !== U.nan) {
      const r = this._getOrReturnCtx(t);
      return L(r, {
        code: A.invalid_type,
        expected: U.nan,
        received: r.parsedType
      }), X;
    }
    return { status: "valid", value: t.data };
  }
}
hr.create = (e) => new hr({
  typeName: Y.ZodNaN,
  ...te(e)
});
const Fb = Symbol("zod_brand");
class Ii extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Wn extends ne {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? X : a.status === "dirty" ? (n.dirty(), en(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return i.status === "aborted" ? X : i.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Wn({
      in: t,
      out: n,
      typeName: Y.ZodPipeline
    });
  }
}
class $n extends ne {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (i) => (Lt(i) && (i.value = Object.freeze(i.value)), i);
    return An(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$n.create = (e, t) => new $n({
  innerType: e,
  typeName: Y.ZodReadonly,
  ...te(t)
});
function Ra(e, t) {
  const n = typeof e == "function" ? e(t) : typeof e == "string" ? { message: e } : e;
  return typeof n == "string" ? { message: n } : n;
}
function ol(e, t = {}, n) {
  return e ? sn.create().superRefine((r, i) => {
    var a, s;
    const o = e(r);
    if (o instanceof Promise)
      return o.then((l) => {
        var c, u;
        if (!l) {
          const d = Ra(t, r), p = (u = (c = d.fatal) !== null && c !== void 0 ? c : n) !== null && u !== void 0 ? u : !0;
          i.addIssue({ code: "custom", ...d, fatal: p });
        }
      });
    if (!o) {
      const l = Ra(t, r), c = (s = (a = l.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0;
      i.addIssue({ code: "custom", ...l, fatal: c });
    }
  }) : sn.create();
}
const Bb = {
  object: pe.lazycreate
};
var Y;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Y || (Y = {}));
const Ub = (e, t = {
  message: `Input not instance of ${e.name}`
}) => ol((n) => n instanceof e, t), ll = Ge.create, cl = vt.create, $b = hr.create, zb = wt.create, ul = On.create, Vb = Pt.create, Hb = pr.create, jb = Cn.create, Zb = Rn.create, Kb = sn.create, Gb = Mt.create, Wb = ht.create, qb = mr.create, Yb = We.create, Xb = pe.create, Qb = pe.strictCreate, Jb = In.create, e_ = Nr.create, t_ = Mn.create, n_ = it.create, r_ = Dn.create, i_ = gr.create, a_ = Ft.create, s_ = tn.create, o_ = Ln.create, l_ = Pn.create, c_ = xt.create, u_ = Fn.create, d_ = on.create, Ia = qe.create, f_ = nt.create, p_ = kt.create, m_ = qe.createWithPreprocess, g_ = Wn.create, h_ = () => ll().optional(), b_ = () => cl().optional(), __ = () => ul().optional(), y_ = {
  string: (e) => Ge.create({ ...e, coerce: !0 }),
  number: (e) => vt.create({ ...e, coerce: !0 }),
  boolean: (e) => On.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => wt.create({ ...e, coerce: !0 }),
  date: (e) => Pt.create({ ...e, coerce: !0 })
}, E_ = X;
var Ma = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: an,
  setErrorMap: mb,
  getErrorMap: ur,
  makeIssue: dr,
  EMPTY_PATH: gb,
  addIssueToContext: L,
  ParseStatus: Se,
  INVALID: X,
  DIRTY: en,
  OK: Me,
  isAborted: ni,
  isDirty: ri,
  isValid: Lt,
  isAsync: An,
  get util() {
    return ie;
  },
  get objectUtil() {
    return ti;
  },
  ZodParsedType: U,
  getParsedType: dt,
  ZodType: ne,
  datetimeRegex: al,
  ZodString: Ge,
  ZodNumber: vt,
  ZodBigInt: wt,
  ZodBoolean: On,
  ZodDate: Pt,
  ZodSymbol: pr,
  ZodUndefined: Cn,
  ZodNull: Rn,
  ZodAny: sn,
  ZodUnknown: Mt,
  ZodNever: ht,
  ZodVoid: mr,
  ZodArray: We,
  ZodObject: pe,
  ZodUnion: In,
  ZodDiscriminatedUnion: Nr,
  ZodIntersection: Mn,
  ZodTuple: it,
  ZodRecord: Dn,
  ZodMap: gr,
  ZodSet: Ft,
  ZodFunction: tn,
  ZodLazy: Ln,
  ZodLiteral: Pn,
  ZodEnum: xt,
  ZodNativeEnum: Fn,
  ZodPromise: on,
  ZodEffects: qe,
  ZodTransformer: qe,
  ZodOptional: nt,
  ZodNullable: kt,
  ZodDefault: Bn,
  ZodCatch: Un,
  ZodNaN: hr,
  BRAND: Fb,
  ZodBranded: Ii,
  ZodPipeline: Wn,
  ZodReadonly: $n,
  custom: ol,
  Schema: ne,
  ZodSchema: ne,
  late: Bb,
  get ZodFirstPartyTypeKind() {
    return Y;
  },
  coerce: y_,
  any: Kb,
  array: Yb,
  bigint: zb,
  boolean: ul,
  date: Vb,
  discriminatedUnion: e_,
  effect: Ia,
  enum: c_,
  function: s_,
  instanceof: Ub,
  intersection: t_,
  lazy: o_,
  literal: l_,
  map: i_,
  nan: $b,
  nativeEnum: u_,
  never: Wb,
  null: Zb,
  nullable: p_,
  number: cl,
  object: Xb,
  oboolean: __,
  onumber: b_,
  optional: f_,
  ostring: h_,
  pipeline: g_,
  preprocess: m_,
  promise: d_,
  record: r_,
  set: a_,
  strictObject: Qb,
  string: ll,
  symbol: Hb,
  transformer: Ia,
  tuple: n_,
  undefined: jb,
  union: Jb,
  unknown: Gb,
  void: qb,
  NEVER: E_,
  ZodIssueCode: A,
  quotelessJson: pb,
  ZodError: ze
});
const v_ = Ma.object({
  content: Ma.string().min(1, Ve("home.form.validation.content.minLength")).trim()
}), w_ = Tt({
  slots: {
    wrapper: Q(
      "flex flex-col items-center justify-center w-full max-w-full relative gap-2.5 mx-auto",
      "bg-list-active-side-nav rounded-b-3xl px-2.5 pb-2.5 pt-5",
      "max-w-[47.25rem]"
    ),
    container: Q(
      "bg-background-dialog rounded-xl w-full max-w-full min-w-0 transition-all duration-300 ease-in-out",
      "flex gap-4 px-5 py-5 items-end"
    ),
    scrollButtonStyle: Q(
      "cursor-pointer absolute -top-10 left-1/2 transform -translate-x-1/2",
      "bg-neutral-800 text-white rounded-full w-8 h-8 flex items-center justify-center",
      "hover:bg-neutral-700 transition-colors duration-200",
      "focus:outline-none focus:ring-2 focus:ring-neutral-500"
    ),
    contentWrapper: Q("flex-1 flex flex-col min-w-0 px-2"),
    input: Q(
      "prompt-textarea bg-transparent text-white border-none outline-none w-full placeholder:text-white/50",
      "text-sm tracking-[0.0125rem] leading-[1.4] resize-none",
      "min-h-6 max-h-[10rem] overflow-y-auto custom-scroll"
    ),
    transcriptText: Q(
      "text-white text-sm tracking-[0.0125rem] leading-[1.4] w-full block h-fit max-h-[3.75rem] overflow-y-auto custom-scroll"
    ),
    actionsWrapper: Q("flex items-end gap-1 shrink-0"),
    submitStyle: Q(
      "w-8 h-8 bg-white hover:bg-white/70 focus:bg-white/70 p-0 rounded-full flex items-center justify-center shrink-0"
    ),
    trashStyle: Q("w-8 h-8 flex items-center justify-center"),
    errorText: Q("text-white/70 text-sm")
  },
  variants: {
    state: {
      idle_typing: {
        container: Q(
          "min-h-[3.5rem] max-h-[12.5rem] overflow-hidden gap-[1.4375rem]"
        ),
        contentWrapper: "justify-center",
        iconButton: "bg-white size-10 hover:bg-white/90 text-black"
      },
      recognizing: {
        container: "h-fit flex-col items-stretch",
        contentWrapper: "justify-start",
        iconButton: "bg-white/10 size-10 hover:bg-white/20 text-white",
        actionsWrapper: "mt-3 items-center justify-start"
      },
      reviewing: {
        container: "h-fit flex-col items-stretch justify-between",
        contentWrapper: "flex-1 flex flex-col justify-start min-w-0 px-2",
        input: "resize-none min-h-fit max-h-[9.375rem] overflow-y-auto custom-scroll pt-1.5",
        actionsWrapper: "flex items-center justify-end gap-4 mt-auto mt-3",
        iconButton: "bg-white/10 size-10 hover:bg-white/20 text-white"
      },
      error: {
        container: "h-[3.5rem] bg-red-900/50",
        iconButton: "bg-white size-10 hover:bg-white/90 text-black"
      }
    }
  },
  defaultVariants: {
    state: "idle_typing"
  }
}), x_ = ({
  placeholder: e,
  assistantProperties: t,
  t: n
}) => {
  var i;
  const r = ((i = t == null ? void 0 : t.persona) == null ? void 0 : i.name) || n("home.prompt.defaultAssistantName");
  return e || n("home.prompt.placeholder", { assistantName: r });
}, dl = ({
  disabled: e,
  placeholder: t,
  showScrollButton: n,
  scrollToBottom: r
}) => {
  const [i, a] = D.useState("idle"), s = D.useRef(null), o = D.useRef(null), { assistantProperties: l } = br(), c = Da(), { mutate: u, isPending: d } = Dh(), {
    startRecognition: p,
    stopRecognition: f,
    transcript: g,
    isRecognizing: h,
    error: b
  } = Lh(), { t: E } = zn(), {
    register: v,
    handleSubmit: O,
    watch: N,
    reset: I,
    formState: { isValid: F },
    setValue: G
  } = ib({
    resolver: lb(v_),
    defaultValues: { content: "" },
    mode: "onChange"
  }), Z = N("content"), z = w_({
    state: i === "idle" || i === "typing" ? "idle_typing" : i
  }), w = d, le = x_({
    placeholder: t,
    assistantProperties: l ?? null,
    t: E
  }), H = (C) => {
    C.content.trim() && (u({
      content: C.content,
      threadId: c || void 0
    }), o.current && (o.current.style.height = "auto"), I(), a("idle"));
  }, K = () => {
    I(), o.current && (o.current.style.height = "auto");
  }, J = () => {
    f(), K(), a("idle");
  }, re = (C) => {
    C.key !== "Enter" || C.shiftKey || (C.preventDefault(), w) || !C.currentTarget.value.trim() || O(H)(C);
  };
  D.useEffect(() => {
    h ? a("recognizing") : b ? a("error") : i === "recognizing" && !h && a("reviewing");
  }, [h, b, i]), D.useEffect(() => {
    i === "reviewing" && !Z.trim() ? a("idle") : i !== "recognizing" && i !== "reviewing" && a(Z ? "typing" : "idle");
  }, [Z, i]), D.useEffect(() => {
    G("content", g);
  }, [g, G]), D.useEffect(() => {
    if (s.current) {
      const C = s.current;
      C.scrollTop = C.scrollHeight;
    }
  }, [g]);
  const T = () => {
    switch (i) {
      case "idle":
        return /* @__PURE__ */ k.jsx(
          et,
          {
            disabled: e,
            type: "button",
            onClick: p,
            className: z.submitStyle(),
            iconClassName: "icon-size-custom cursor-pointer",
            colorFill: "fill-list-active-side-nav",
            name: "microphone"
          }
        );
      case "typing":
        return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
          Z.trim() && /* @__PURE__ */ k.jsx(
            et,
            {
              onClick: K,
              className: z.trashStyle(),
              size: "sm",
              iconClassName: "!rounded-md transition-all duration-300 ease-in-out text-white hover:bg-neutral-2 focus-visible:bg-neutral-2 focus-visible:ring-1 focus-visible:ring-neutral-2 focus-visible:border-neutral-2 icon-size-custom cursor-pointer",
              name: "trash"
            }
          ),
          /* @__PURE__ */ k.jsx(
            et,
            {
              disabled: e || !Z.trim(),
              type: "submit",
              className: z.submitStyle(),
              iconClassName: "icon-size-custom cursor-pointer",
              colorFill: "fill-list-active-side-nav",
              name: "send-solid"
            }
          )
        ] });
      case "recognizing":
      case "reviewing": {
        const C = i === "reviewing";
        return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
          /* @__PURE__ */ k.jsx(
            et,
            {
              type: "button",
              onClick: J,
              className: z.trashStyle(),
              size: "xxs",
              iconClassName: "rounded-md transition-all duration-300 ease-in-out text-white hover:bg-neutral-2 focus-visible:bg-neutral-2 focus-visible:ring-1 focus-visible:ring-neutral-2 focus-visible:border-neutral-2 icon-size-custom cursor-pointer",
              name: "trash"
            }
          ),
          /* @__PURE__ */ k.jsx(
            et,
            {
              type: C ? "submit" : "button",
              onClick: C ? void 0 : f,
              className: z.submitStyle(),
              iconClassName: "icon-size-custom cursor-pointer",
              colorFill: "fill-list-active-side-nav",
              name: C ? "send-solid" : "check"
            }
          )
        ] });
      }
      case "error":
        return /* @__PURE__ */ k.jsx(
          et,
          {
            type: "button",
            onClick: p,
            className: z.submitStyle(),
            iconClassName: "icon-size-custom cursor-pointer",
            colorFill: "fill-list-active-side-nav",
            name: "microphone"
          }
        );
      default:
        return null;
    }
  }, M = () => {
    switch (i) {
      case "recognizing":
        return /* @__PURE__ */ k.jsx("span", { ref: s, className: z.transcriptText(), children: g || E("home.prompt.listening") });
      case "reviewing":
        return /* @__PURE__ */ k.jsx(
          "textarea",
          {
            ...v("content"),
            className: Q(z.input(), "resize-none")
          }
        );
      case "error":
        return /* @__PURE__ */ k.jsx("p", { className: z.errorText(), children: E("home.prompt.transcriptionError") });
      default: {
        const { ref: C, ...W } = v("content");
        return /* @__PURE__ */ k.jsx(
          "textarea",
          {
            ref: (ee) => {
              C(ee), o.current = ee;
            },
            ...W,
            placeholder: le,
            disabled: e,
            rows: 1,
            className: Q(z.input(), "resize-none"),
            onInput: (ee) => {
              const ae = ee.currentTarget;
              ae.style.height = "auto", ae.style.height = `${Math.min(ae.scrollHeight, 160)}px`;
            },
            onKeyDown: re
          }
        );
      }
    }
  };
  return /* @__PURE__ */ k.jsxs(
    "form",
    {
      onSubmit: O(H),
      className: z.wrapper(),
      children: [
        n && /* @__PURE__ */ k.jsx(
          "button",
          {
            onClick: r,
            className: Q(
              z.scrollButtonStyle(),
              "absolute -top-10 left-1/2 transform -translate-x-1/2"
            ),
            "aria-label": E("home.prompt.scrollToBottom"),
            type: "button",
            children: /* @__PURE__ */ k.jsx(
              ai,
              {
                className: "icon-size-custom text-white",
                name: "arrow-down",
                title: E("home.prompt.scrollToBottom")
              }
            )
          }
        ),
        /* @__PURE__ */ k.jsxs("div", { className: z.container(), children: [
          /* @__PURE__ */ k.jsx("div", { className: z.contentWrapper(), children: M() }),
          /* @__PURE__ */ k.jsxs("div", { className: z.actionsWrapper(), children: [
            i === "recognizing" && /* @__PURE__ */ k.jsx("div", { className: "flex-1 min-w-0 flex items-center", children: /* @__PURE__ */ k.jsx(fb, { isActive: h }) }),
            T()
          ] })
        ] })
      ]
    }
  );
};
dl.displayName = "Prompt";
const k_ = Tt({
  slots: {
    headerBase: "flex items-center justify-between gap-3 px-4 py-4 shrink-0 bg-list-active-side-nav",
    container: "w-full h-full min-h-0 bg-list-active-side-nav flex flex-col overflow-hidden",
    mainContent: "flex flex-col flex-1 w-full h-full min-h-0",
    chatList: "flex-1 overflow-y-auto custom-scroll min-h-0",
    buttonAction: "cursor-pointer flex items-center justify-center rounded-lg hover:bg-neutral-2 p-2 transition-all duration-300 ease-in-out"
  }
});
function T_() {
  var F;
  const e = k_(), t = Ba(), {
    data: n,
    error: r,
    refetch: i
  } = za(), { isSidebarOpen: a, setIsSidebarOpen: s } = Nl(), o = D.useRef(null), l = D.useRef(null), [c, u] = D.useState(!1), { assistantId: d } = Al(), { data: p, isSuccess: f } = La(), { initializeAssistantId: g, selectThread: h } = Ua(), { t: b } = zn(), E = D.useRef(!1), { isFullscreen: v, isMobile: O } = Il();
  D.useEffect(() => {
    if (f && (p != null && p.page)) {
      const G = p.page.filter(
        (Z) => typeof Z.id == "string"
      );
      g(G, d);
    }
  }, [f, p, d]);
  const N = () => {
    var G;
    (G = l.current) == null || G.scrollIntoView({ behavior: "smooth" });
  };
  D.useEffect(() => {
    const G = o.current;
    if (!G) return;
    const Z = () => {
      const z = G.scrollHeight - G.scrollTop - G.clientHeight < 10;
      u(!z);
    };
    return G.addEventListener("scroll", Z, { passive: !0 }), Z(), () => {
      G.removeEventListener("scroll", Z);
    };
  }, []), Ml(), D.useEffect(() => {
    v && !O ? s(!0) : (O || E.current && !v) && s(!1), E.current = v;
  }, [v, O, s]);
  const I = () => /* @__PURE__ */ k.jsxs("div", { className: Q(e.headerBase()), children: [
    /* @__PURE__ */ k.jsx("div", { className: "flex items-center justify-start min-w-[40px]", children: !a && /* @__PURE__ */ k.jsx(
      et,
      {
        size: "md",
        type: "button",
        className: Q(e.buttonAction()),
        "data-testid": "sidebar-toggle-button",
        onClick: () => s(!0),
        name: "user-list-icon-closed",
        colorFill: "fill-white",
        title: "Abrir menu"
      }
    ) }),
    /* @__PURE__ */ k.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ k.jsx(Gl, {}) }),
    /* @__PURE__ */ k.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ k.jsx(
      et,
      {
        size: "md",
        type: "button",
        className: Q(e.buttonAction()),
        "aria-label": b("home.newConversation"),
        title: b("home.newConversation"),
        onClick: () => h(null),
        name: "edit",
        colorFill: "fill-white"
      }
    ) })
  ] });
  return /* @__PURE__ */ k.jsx("div", { className: Q(e.container()), children: /* @__PURE__ */ k.jsxs("div", { className: Q(e.mainContent()), children: [
    I(),
    /* @__PURE__ */ k.jsx("div", { className: Q(e.chatList()), ref: o, children: /* @__PURE__ */ k.jsx(
      Zo,
      {
        containerRef: o,
        messagesEndRef: l
      }
    ) }),
    /* @__PURE__ */ k.jsxs("div", { className: "w-full max-w-full overflow-x-hidden", children: [
      /* @__PURE__ */ k.jsx(
        dl,
        {
          disabled: t,
          showScrollButton: c && (((F = n == null ? void 0 : n.messages) == null ? void 0 : F.length) ?? 0) > 0,
          scrollToBottom: N
        }
      ),
      /* @__PURE__ */ k.jsx(
        Ha,
        {
          size: _t.Small,
          className: "mb-2.5 privacy-notice-text text-center text-white/50 text-[10px]",
          children: b("home.prompt.privacyNotice")
        }
      )
    ] })
  ] }) });
}
const L_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T_
}, Symbol.toStringTag, { value: "Module" }));
export {
  vi as a,
  Sn as b,
  sr as c,
  em as d,
  C_ as e,
  pt as f,
  M_ as g,
  I_ as h,
  R_ as i,
  Jt as j,
  Fe as k,
  Gg as l,
  ft as m,
  Kn as n,
  A_ as o,
  D_ as p,
  Ig as q,
  Kg as r,
  En as s,
  bo as t,
  O_ as u,
  uo as v,
  yr as w,
  Vc as x,
  L_ as y
};
