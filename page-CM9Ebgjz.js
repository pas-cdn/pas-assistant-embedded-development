import { U as Zo, p as va, r as D, q as _t, v as X, j as k, V as qo, W as Yo, X as Xo, Y as Qo, Z as Jo, _ as wa, x as el, t as $e, I as Mr, $ as tl, a0 as ir, a1 as xa, a2 as ze, F as qe, a3 as nt, L as Dr, e as ka, a4 as nl, a5 as br, a6 as Sa, S as yn, f as rl, c as il, n as al, H as sl, J as Ta, a7 as Jt, N as Fe, a8 as ol, a9 as ll } from "./embed-entry-BpPVpfZi.js";
import { u as Gn, d as Lr, e as Na, A as cl, b as ul, f as Aa, a as dl, c as fl } from "./assistant-list-FMTMUlj7.js";
function pl() {
  const [e, t] = Zo(), n = va(), r = D.useRef(null);
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
var St = /* @__PURE__ */ ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(St || {}), Ve = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Default = "default", e.Large = "large", e))(Ve || {});
const gl = Ve.Default, ml = _t({
  base: "text-white font-medium",
  variants: {
    size: {
      [Ve.Small]: "text-xs",
      [Ve.Medium]: "text-sm",
      [Ve.Default]: "text-base",
      [Ve.Large]: "text-lg"
    }
  },
  defaultVariants: {
    size: Ve.Default
  }
});
function hl(e) {
  switch (e) {
    case Ve.Large:
      return St.H1;
    case Ve.Default:
      return St.H2;
    case Ve.Medium:
      return St.H3;
    case Ve.Small:
      return St.H4;
    default:
      return St.H1;
  }
}
const Oa = ({
  children: e,
  size: t = gl,
  level: n,
  className: r,
  ...i
}) => {
  const s = n || hl(t), o = X(ml({ size: t }), r);
  return /* @__PURE__ */ k.jsx(s, { className: o, ...i, children: e });
};
Oa.displayName = "Heading";
var dt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Default = "default", e.Large = "large", e))(dt || {});
const bl = dt.Medium, _l = _t({
  base: "text-white font-normal",
  variants: {
    size: {
      [dt.Small]: "text-xs",
      [dt.Medium]: "text-sm",
      [dt.Default]: "text-base",
      [dt.Large]: "text-lg"
    }
  },
  defaultVariants: {
    size: dt.Default
  }
}), Ca = ({
  children: e,
  size: t = bl,
  className: n,
  ...r
}) => {
  const i = "p", a = X(_l({ size: t }), n);
  return /* @__PURE__ */ k.jsx(i, { className: a, ...r, children: e });
};
Ca.displayName = "Paragraph";
var rt = /* @__PURE__ */ ((e) => (e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right", e))(rt || {}), Ye = /* @__PURE__ */ ((e) => (e.Click = "click", e.Hover = "hover", e))(Ye || {}), Ra = /* @__PURE__ */ ((e) => (e.Start = "start", e.Center = "center", e.End = "end", e))(Ra || {});
const yl = 200, ci = 200, El = 5, vl = rt.Top, wl = Ye.Hover, xl = Ra.Center;
function kl(e, t, n) {
  const [r, i] = D.useState(!1), a = D.useRef(null), s = D.useRef(null), o = e !== void 0, l = o ? e : r, c = D.useCallback(() => {
    a.current && clearTimeout(a.current), s.current && clearTimeout(s.current);
  }, []), u = D.useCallback(
    (E) => {
      o ? t == null || t(E) : i(E);
    },
    [o, t]
  ), d = D.useCallback(() => u(!0), [u]), f = D.useCallback(() => u(!1), [u]), m = D.useCallback(() => {
    n === Ye.Hover && (c(), a.current = setTimeout(d, yl));
  }, [n, c, d]), p = D.useCallback(() => {
    n === Ye.Hover && (c(), s.current = setTimeout(f, ci));
  }, [n, c, f]), h = D.useCallback(() => {
    n === Ye.Hover && l && c();
  }, [n, l, c]), _ = D.useCallback(() => {
    n === Ye.Hover && (c(), s.current = setTimeout(f, ci));
  }, [n, c, f]), y = D.useCallback(() => {
    n === Ye.Click && u(!l);
  }, [n, l, u]);
  return D.useEffect(() => {
    const E = (N) => {
      N.key === "Escape" && f();
    };
    return l && document.addEventListener("keydown", E), () => {
      document.removeEventListener("keydown", E), c();
    };
  }, [l, f, c]), {
    isOpen: l,
    handleOpen: d,
    handleClose: f,
    handleMouseEnterTrigger: m,
    handleMouseLeaveTrigger: p,
    handleMouseEnterContent: h,
    handleMouseLeaveContent: _,
    handleClick: y
  };
}
const Sl = _t({
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
      [rt.Top]: {
        content: "data-[side=top]:slide-in-from-bottom-2"
      },
      [rt.Bottom]: {
        content: "data-[side=bottom]:slide-in-from-top-2"
      },
      [rt.Left]: {
        content: "data-[side=left]:slide-in-from-right-2"
      },
      [rt.Right]: {
        content: "data-[side=right]:slide-in-from-left-2"
      }
    }
  }
});
function Pr({
  children: e,
  title: t,
  content: n,
  className: r,
  position: i = vl,
  trigger: a = wl,
  align: s = xl,
  open: o,
  onOpenChange: l,
  container: c,
  ...u
}) {
  const {
    base: d,
    content: f,
    title: m,
    body: p,
    arrow: h
  } = Sl({ position: i }), {
    isOpen: _,
    handleMouseEnterTrigger: y,
    handleMouseLeaveTrigger: E,
    handleMouseEnterContent: N,
    handleMouseLeaveContent: T,
    handleClick: M
  } = kl(o, l, a);
  return /* @__PURE__ */ k.jsxs(qo, { open: _, onOpenChange: l, children: [
    /* @__PURE__ */ k.jsx(
      Yo,
      {
        asChild: !0,
        onMouseEnter: y,
        onMouseLeave: E,
        onClick: M,
        children: /* @__PURE__ */ k.jsx("div", { className: X(d(), r), ...u, children: e })
      }
    ),
    /* @__PURE__ */ k.jsx(Xo, { container: c, children: /* @__PURE__ */ k.jsxs(
      Qo,
      {
        className: X(f()),
        side: i,
        sideOffset: El,
        align: s,
        onMouseEnter: N,
        onMouseLeave: T,
        children: [
          t && /* @__PURE__ */ k.jsx("div", { className: m(), children: t }),
          /* @__PURE__ */ k.jsx("div", { className: p(), children: n }),
          /* @__PURE__ */ k.jsx(Jo, { className: h() })
        ]
      }
    ) })
  ] });
}
const Tl = _t({
  slots: {
    button: "relative z-10 flex items-center gap-2 w-full text-white cursor-pointer"
  }
}), Nl = ({
  initialSelectedAssistant: e,
  initialAssistants: t
}) => {
  var d, f, m, p;
  const { assistantProperties: n } = Gn(), { data: r } = wa(), { button: i } = Tl(), [a, s] = D.useState(!1), o = el(), l = D.useMemo(
    () => e || n,
    [e, n]
  ), c = D.useMemo(
    () => t || (r == null ? void 0 : r.page) || [],
    [t, r]
  ), u = (f = (d = l == null ? void 0 : l.persona) == null ? void 0 : d.avatar) == null ? void 0 : f.uri;
  return /* @__PURE__ */ k.jsx(
    Pr,
    {
      trigger: Ye.Click,
      position: rt.Bottom,
      open: a,
      onOpenChange: s,
      container: o ?? void 0,
      content: /* @__PURE__ */ k.jsx(
        cl,
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
          className: X(i()),
          "data-testid": "assistant-select-button",
          children: [
            /* @__PURE__ */ k.jsx(Lr, { size: Na.Default, src: u }),
            /* @__PURE__ */ k.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ k.jsx(
                "span",
                {
                  className: "truncate mr-2",
                  title: ((m = l == null ? void 0 : l.persona) == null ? void 0 : m.name) || $e("common.fallback.noName"),
                  children: ((p = l == null ? void 0 : l.persona) == null ? void 0 : p.name) || $e("common.fallback.noName")
                }
              ),
              ((c == null ? void 0 : c.length) ?? 0) > 1 && /* @__PURE__ */ k.jsx(
                Mr,
                {
                  size: "xxs",
                  className: `transform transition-transform ${a ? "rotate-180" : ""}`,
                  name: "arrow-down",
                  "aria-label": $e("home.assistantSelect.selectAssistant")
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
var Al = function(t, n, r) {
  var i = document.head || document.getElementsByTagName("head")[0], a = document.createElement("script");
  typeof n == "function" && (r = n, n = {}), n = n || {}, r = r || function() {
  }, a.type = n.type || "text/javascript", a.charset = n.charset || "utf8", a.async = "async" in n ? !!n.async : !0, a.src = t, n.attrs && Ol(a, n.attrs), n.text && (a.text = "" + n.text);
  var s = "onload" in a ? ui : Cl;
  s(a, r), a.onload || ui(a, r), i.appendChild(a);
};
function Ol(e, t) {
  for (var n in t)
    e.setAttribute(n, t[n]);
}
function ui(e, t) {
  e.onload = function() {
    this.onerror = this.onload = null, t(null, e);
  }, e.onerror = function() {
    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e);
  };
}
function Cl(e, t) {
  e.onreadystatechange = function() {
    this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, t(null, e));
  };
}
var Rl = function(t) {
  return Il(t) && !Ml(t);
};
function Il(e) {
  return !!e && typeof e == "object";
}
function Ml(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Pl(e);
}
var Dl = typeof Symbol == "function" && Symbol.for, Ll = Dl ? Symbol.for("react.element") : 60103;
function Pl(e) {
  return e.$$typeof === Ll;
}
function Fl(e) {
  return Array.isArray(e) ? [] : {};
}
function dn(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? jt(Fl(e), e, t) : e;
}
function Bl(e, t, n) {
  return e.concat(t).map(function(r) {
    return dn(r, n);
  });
}
function Ul(e, t) {
  if (!t.customMerge)
    return jt;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : jt;
}
function $l(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function di(e) {
  return Object.keys(e).concat($l(e));
}
function Ia(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function zl(e, t) {
  return Ia(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Hl(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && di(e).forEach(function(i) {
    r[i] = dn(e[i], n);
  }), di(t).forEach(function(i) {
    zl(e, i) || (Ia(e, i) && n.isMergeableObject(t[i]) ? r[i] = Ul(i, n)(e[i], t[i], n) : r[i] = dn(t[i], n));
  }), r;
}
function jt(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Bl, n.isMergeableObject = n.isMergeableObject || Rl, n.cloneUnlessOtherwiseSpecified = dn;
  var r = Array.isArray(t), i = Array.isArray(e), a = r === i;
  return a ? r ? n.arrayMerge(e, t, n) : Hl(e, t, n) : dn(t, n);
}
jt.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return jt(r, i, n);
  }, {});
};
var Vl = jt, Ma = Vl, jl = Object.create, Wn = Object.defineProperty, Kl = Object.getOwnPropertyDescriptor, Gl = Object.getOwnPropertyNames, Wl = Object.getPrototypeOf, Zl = Object.prototype.hasOwnProperty, ql = (e, t) => {
  for (var n in t)
    Wn(e, n, { get: t[n], enumerable: !0 });
}, Da = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Gl(t))
      !Zl.call(e, i) && i !== n && Wn(e, i, { get: () => t[i], enumerable: !(r = Kl(t, i)) || r.enumerable });
  return e;
}, Fr = (e, t, n) => (n = e != null ? jl(Wl(e)) : {}, Da(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Wn(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), Yl = (e) => Da(Wn({}, "__esModule", { value: !0 }), e), La = {};
ql(La, {
  callPlayer: () => fc,
  getConfig: () => uc,
  getSDK: () => cc,
  isBlobUrl: () => gc,
  isMediaStream: () => pc,
  lazy: () => ec,
  omit: () => dc,
  parseEndTime: () => sc,
  parseStartTime: () => ac,
  queryString: () => lc,
  randomString: () => oc,
  supportsWebKitPresentationMode: () => mc
});
var Zn = Yl(La), Xl = Fr(D), Ql = Fr(Al), Jl = Fr(Ma);
const ec = (e) => Xl.default.lazy(async () => {
  const t = await e();
  return typeof t.default == "function" ? t : t.default;
}), tc = /[?&#](?:start|t)=([0-9hms]+)/, nc = /[?&#]end=([0-9hms]+)/, _r = /(\d+)(h|m|s)/g, rc = /^\d+$/;
function Pa(e, t) {
  if (e instanceof Array)
    return;
  const n = e.match(t);
  if (n) {
    const r = n[1];
    if (r.match(_r))
      return ic(r);
    if (rc.test(r))
      return parseInt(r);
  }
}
function ic(e) {
  let t = 0, n = _r.exec(e);
  for (; n !== null; ) {
    const [, r, i] = n;
    i === "h" && (t += parseInt(r, 10) * 60 * 60), i === "m" && (t += parseInt(r, 10) * 60), i === "s" && (t += parseInt(r, 10)), n = _r.exec(e);
  }
  return t;
}
function ac(e) {
  return Pa(e, tc);
}
function sc(e) {
  return Pa(e, nc);
}
function oc() {
  return Math.random().toString(36).substr(2, 5);
}
function lc(e) {
  return Object.keys(e).map((t) => `${t}=${e[t]}`).join("&");
}
function ar(e) {
  return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null;
}
const Mt = {}, cc = function(t, n, r = null, i = () => !0, a = Ql.default) {
  const s = ar(n);
  return s && i(s) ? Promise.resolve(s) : new Promise((o, l) => {
    if (Mt[t]) {
      Mt[t].push({ resolve: o, reject: l });
      return;
    }
    Mt[t] = [{ resolve: o, reject: l }];
    const c = (u) => {
      Mt[t].forEach((d) => d.resolve(u));
    };
    if (r) {
      const u = window[r];
      window[r] = function() {
        u && u(), c(ar(n));
      };
    }
    a(t, (u) => {
      u ? (Mt[t].forEach((d) => d.reject(u)), Mt[t] = null) : r || c(ar(n));
    });
  });
};
function uc(e, t) {
  return (0, Jl.default)(t.config, e.config);
}
function dc(e, ...t) {
  const n = [].concat(...t), r = {}, i = Object.keys(e);
  for (const a of i)
    n.indexOf(a) === -1 && (r[a] = e[a]);
  return r;
}
function fc(e, ...t) {
  if (!this.player || !this.player[e]) {
    let n = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;
    return this.player ? this.player[e] || (n += "The method was not available") : n += "The player was not available", console.warn(n, "font-weight: bold", ""), null;
  }
  return this.player[e](...t);
}
function pc(e) {
  return typeof window < "u" && typeof window.MediaStream < "u" && e instanceof window.MediaStream;
}
function gc(e) {
  return /^blob:/.test(e);
}
function mc(e = document.createElement("video")) {
  const t = /iPhone|iPod/.test(navigator.userAgent) === !1;
  return e.webkitSupportsPresentationMode && typeof e.webkitSetPresentationMode == "function" && t;
}
var Br = Object.defineProperty, hc = Object.getOwnPropertyDescriptor, bc = Object.getOwnPropertyNames, _c = Object.prototype.hasOwnProperty, yc = (e, t) => {
  for (var n in t)
    Br(e, n, { get: t[n], enumerable: !0 });
}, Ec = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of bc(t))
      !_c.call(e, i) && i !== n && Br(e, i, { get: () => t[i], enumerable: !(r = hc(t, i)) || r.enumerable });
  return e;
}, vc = (e) => Ec(Br({}, "__esModule", { value: !0 }), e), Fa = {};
yc(Fa, {
  AUDIO_EXTENSIONS: () => Ur,
  DASH_EXTENSIONS: () => Xa,
  FLV_EXTENSIONS: () => Qa,
  HLS_EXTENSIONS: () => zr,
  MATCH_URL_DAILYMOTION: () => Wa,
  MATCH_URL_FACEBOOK: () => za,
  MATCH_URL_FACEBOOK_WATCH: () => Ha,
  MATCH_URL_KALTURA: () => Ya,
  MATCH_URL_MIXCLOUD: () => Za,
  MATCH_URL_MUX: () => $a,
  MATCH_URL_SOUNDCLOUD: () => Ba,
  MATCH_URL_STREAMABLE: () => Va,
  MATCH_URL_TWITCH_CHANNEL: () => Ga,
  MATCH_URL_TWITCH_VIDEO: () => Ka,
  MATCH_URL_VIDYARD: () => qa,
  MATCH_URL_VIMEO: () => Ua,
  MATCH_URL_WISTIA: () => ja,
  MATCH_URL_YOUTUBE: () => yr,
  VIDEO_EXTENSIONS: () => $r,
  canPlay: () => xc
});
var wc = vc(Fa), fi = Zn;
const yr = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//, Ba = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/, Ua = /vimeo\.com\/(?!progressive_redirect).+/, $a = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/, za = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/, Ha = /^https?:\/\/fb\.watch\/.+$/, Va = /streamable\.com\/([a-z0-9]+)$/, ja = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/, Ka = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/, Ga = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/, Wa = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/, Za = /mixcloud\.com\/([^/]+\/[^/]+)/, qa = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/, Ya = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/, Ur = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i, $r = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i, zr = /\.(m3u8)($|\?)/i, Xa = /\.(mpd)($|\?)/i, Qa = /\.(flv)($|\?)/i, Er = (e) => {
  if (e instanceof Array) {
    for (const t of e)
      if (typeof t == "string" && Er(t) || Er(t.src))
        return !0;
    return !1;
  }
  return (0, fi.isMediaStream)(e) || (0, fi.isBlobUrl)(e) ? !0 : Ur.test(e) || $r.test(e) || zr.test(e) || Xa.test(e) || Qa.test(e);
}, xc = {
  youtube: (e) => e instanceof Array ? e.every((t) => yr.test(t)) : yr.test(e),
  soundcloud: (e) => Ba.test(e) && !Ur.test(e),
  vimeo: (e) => Ua.test(e) && !$r.test(e) && !zr.test(e),
  mux: (e) => $a.test(e),
  facebook: (e) => za.test(e) || Ha.test(e),
  streamable: (e) => Va.test(e),
  wistia: (e) => ja.test(e),
  twitch: (e) => Ka.test(e) || Ga.test(e),
  dailymotion: (e) => Wa.test(e),
  mixcloud: (e) => Za.test(e),
  vidyard: (e) => qa.test(e),
  kaltura: (e) => Ya.test(e),
  file: Er
};
var Hr = Object.defineProperty, kc = Object.getOwnPropertyDescriptor, Sc = Object.getOwnPropertyNames, Tc = Object.prototype.hasOwnProperty, Nc = (e, t) => {
  for (var n in t)
    Hr(e, n, { get: t[n], enumerable: !0 });
}, Ac = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Sc(t))
      !Tc.call(e, i) && i !== n && Hr(e, i, { get: () => t[i], enumerable: !(r = kc(t, i)) || r.enumerable });
  return e;
}, Oc = (e) => Ac(Hr({}, "__esModule", { value: !0 }), e), Ja = {};
Nc(Ja, {
  default: () => Rc
});
var Cc = Oc(Ja), Me = Zn, Oe = wc, Rc = [
  {
    key: "youtube",
    name: "YouTube",
    canPlay: Oe.canPlay.youtube,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerYouTube' */
      "./YouTube-FN1mprIt.js"
    ).then((e) => e.Y))
  },
  {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: Oe.canPlay.soundcloud,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerSoundCloud' */
      "./SoundCloud-Dt8WkgIX.js"
    ).then((e) => e.S))
  },
  {
    key: "vimeo",
    name: "Vimeo",
    canPlay: Oe.canPlay.vimeo,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerVimeo' */
      "./Vimeo-CYjEhxTV.js"
    ).then((e) => e.V))
  },
  {
    key: "mux",
    name: "Mux",
    canPlay: Oe.canPlay.mux,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerMux' */
      "./Mux-DSqnJQ37.js"
    ).then((e) => e.M))
  },
  {
    key: "facebook",
    name: "Facebook",
    canPlay: Oe.canPlay.facebook,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerFacebook' */
      "./Facebook-BVC-dHBL.js"
    ).then((e) => e.F))
  },
  {
    key: "streamable",
    name: "Streamable",
    canPlay: Oe.canPlay.streamable,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerStreamable' */
      "./Streamable-DTP7ZVe_.js"
    ).then((e) => e.S))
  },
  {
    key: "wistia",
    name: "Wistia",
    canPlay: Oe.canPlay.wistia,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerWistia' */
      "./Wistia-DiXBM8mC.js"
    ).then((e) => e.W))
  },
  {
    key: "twitch",
    name: "Twitch",
    canPlay: Oe.canPlay.twitch,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerTwitch' */
      "./Twitch-CYluNX0Z.js"
    ).then((e) => e.T))
  },
  {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: Oe.canPlay.dailymotion,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerDailyMotion' */
      "./DailyMotion-CDUA_aTI.js"
    ).then((e) => e.D))
  },
  {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: Oe.canPlay.mixcloud,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerMixcloud' */
      "./Mixcloud-CBA8Z2Gz.js"
    ).then((e) => e.M))
  },
  {
    key: "vidyard",
    name: "Vidyard",
    canPlay: Oe.canPlay.vidyard,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerVidyard' */
      "./Vidyard-CGKWevR9.js"
    ).then((e) => e.V))
  },
  {
    key: "kaltura",
    name: "Kaltura",
    canPlay: Oe.canPlay.kaltura,
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerKaltura' */
      "./Kaltura-Bh6INGin.js"
    ).then((e) => e.K))
  },
  {
    key: "file",
    name: "FilePlayer",
    canPlay: Oe.canPlay.file,
    canEnablePIP: (e) => Oe.canPlay.file(e) && (document.pictureInPictureEnabled || (0, Me.supportsWebKitPresentationMode)()) && !Oe.AUDIO_EXTENSIONS.test(e),
    lazyPlayer: (0, Me.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerFilePlayer' */
      "./FilePlayer-D8mzQuhv.js"
    ).then((e) => e.F))
  }
], pi = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Ic(e, t) {
  return !!(e === t || pi(e) && pi(t));
}
function Mc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Ic(e[n], t[n]))
      return !1;
  return !0;
}
function Dc(e, t) {
  t === void 0 && (t = Mc);
  var n, r = [], i, a = !1;
  function s() {
    for (var o = [], l = 0; l < arguments.length; l++)
      o[l] = arguments[l];
    return a && n === this && t(o, r) || (i = e.apply(this, o), a = !0, n = this, r = o), i;
  }
  return s;
}
const Lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dc
}, Symbol.toStringTag, { value: "Module" })), Pc = /* @__PURE__ */ tl(Lc);
var Fc = typeof Element < "u", Bc = typeof Map == "function", Uc = typeof Set == "function", $c = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Mn(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Mn(e[r], t[r])) return !1;
      return !0;
    }
    var a;
    if (Bc && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!Mn(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (Uc && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if ($c && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Fc && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !Mn(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var es = function(t, n) {
  try {
    return Mn(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, ts = { exports: {} }, zc = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Hc = zc, Vc = Hc;
function ns() {
}
function rs() {
}
rs.resetWarningCache = ns;
var jc = function() {
  function e(r, i, a, s, o, l) {
    if (l !== Vc) {
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
    checkPropTypes: rs,
    resetWarningCache: ns
  };
  return n.PropTypes = n, n;
};
ts.exports = jc();
var Kc = ts.exports, Gc = Object.create, qn = Object.defineProperty, Wc = Object.getOwnPropertyDescriptor, Zc = Object.getOwnPropertyNames, qc = Object.getPrototypeOf, Yc = Object.prototype.hasOwnProperty, Xc = (e, t) => {
  for (var n in t)
    qn(e, n, { get: t[n], enumerable: !0 });
}, is = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Zc(t))
      !Yc.call(e, i) && i !== n && qn(e, i, { get: () => t[i], enumerable: !(r = Wc(t, i)) || r.enumerable });
  return e;
}, Qc = (e, t, n) => (n = e != null ? Gc(qc(e)) : {}, is(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? qn(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), Jc = (e) => is(qn({}, "__esModule", { value: !0 }), e), as = {};
Xc(as, {
  defaultProps: () => nu,
  propTypes: () => tu
});
var ss = Jc(as), eu = Qc(Kc);
const { string: xe, bool: Ce, number: Dt, array: sr, oneOfType: en, shape: Pe, object: Te, func: ye, node: gi } = eu.default, tu = {
  url: en([xe, sr, Te]),
  playing: Ce,
  loop: Ce,
  controls: Ce,
  volume: Dt,
  muted: Ce,
  playbackRate: Dt,
  width: en([xe, Dt]),
  height: en([xe, Dt]),
  style: Te,
  progressInterval: Dt,
  playsinline: Ce,
  pip: Ce,
  stopOnUnmount: Ce,
  light: en([Ce, xe, Te]),
  playIcon: gi,
  previewTabIndex: Dt,
  previewAriaLabel: xe,
  fallback: gi,
  oEmbedUrl: xe,
  wrapper: en([
    xe,
    ye,
    Pe({ render: ye.isRequired })
  ]),
  config: Pe({
    soundcloud: Pe({
      options: Te
    }),
    youtube: Pe({
      playerVars: Te,
      embedOptions: Te,
      onUnstarted: ye
    }),
    facebook: Pe({
      appId: xe,
      version: xe,
      playerId: xe,
      attributes: Te
    }),
    dailymotion: Pe({
      params: Te
    }),
    vimeo: Pe({
      playerOptions: Te,
      title: xe
    }),
    mux: Pe({
      attributes: Te,
      version: xe
    }),
    file: Pe({
      attributes: Te,
      tracks: sr,
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
    wistia: Pe({
      options: Te,
      playerId: xe,
      customControls: sr
    }),
    mixcloud: Pe({
      options: Te
    }),
    twitch: Pe({
      options: Te,
      playerId: xe
    }),
    vidyard: Pe({
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
}, nu = {
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
var ru = Object.create, En = Object.defineProperty, iu = Object.getOwnPropertyDescriptor, au = Object.getOwnPropertyNames, su = Object.getPrototypeOf, ou = Object.prototype.hasOwnProperty, lu = (e, t, n) => t in e ? En(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, cu = (e, t) => {
  for (var n in t)
    En(e, n, { get: t[n], enumerable: !0 });
}, os = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of au(t))
      !ou.call(e, i) && i !== n && En(e, i, { get: () => t[i], enumerable: !(r = iu(t, i)) || r.enumerable });
  return e;
}, ls = (e, t, n) => (n = e != null ? ru(su(e)) : {}, os(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? En(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), uu = (e) => os(En({}, "__esModule", { value: !0 }), e), ge = (e, t, n) => (lu(e, typeof t != "symbol" ? t + "" : t, n), n), cs = {};
cu(cs, {
  default: () => Yn
});
var du = uu(cs), mi = ls(D), fu = ls(es), us = ss, pu = Zn;
const gu = 5e3;
class Yn extends mi.Component {
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
    if (!(0, fu.default)(t.url, n)) {
      if (this.isLoading && !c.forceLoad && !u && !(0, pu.isMediaStream)(n)) {
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
      }, gu));
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
    return t ? /* @__PURE__ */ mi.default.createElement(
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
ge(Yn, "displayName", "Player");
ge(Yn, "propTypes", us.propTypes);
ge(Yn, "defaultProps", us.defaultProps);
var mu = Object.create, vn = Object.defineProperty, hu = Object.getOwnPropertyDescriptor, bu = Object.getOwnPropertyNames, _u = Object.getPrototypeOf, yu = Object.prototype.hasOwnProperty, Eu = (e, t, n) => t in e ? vn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vu = (e, t) => {
  for (var n in t)
    vn(e, n, { get: t[n], enumerable: !0 });
}, ds = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of bu(t))
      !yu.call(e, i) && i !== n && vn(e, i, { get: () => t[i], enumerable: !(r = hu(t, i)) || r.enumerable });
  return e;
}, wn = (e, t, n) => (n = e != null ? mu(_u(e)) : {}, ds(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? vn(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), wu = (e) => ds(vn({}, "__esModule", { value: !0 }), e), pe = (e, t, n) => (Eu(e, typeof t != "symbol" ? t + "" : t, n), n), fs = {};
vu(fs, {
  createReactPlayer: () => Ru
});
var xu = wu(fs), Ft = wn(D), ku = wn(Ma), or = wn(Pc), hi = wn(es), sn = ss, ps = Zn, Su = wn(du);
const Tu = (0, ps.lazy)(() => import(
  /* webpackChunkName: 'reactPlayerPreview' */
  "./Preview-DtNZ6KKu.js"
).then((e) => e.P)), Nu = typeof window < "u" && window.document && typeof document < "u", Au = typeof ir < "u" && ir.window && ir.window.document, Ou = Object.keys(sn.propTypes), Cu = Nu || Au ? Ft.Suspense : () => null, tn = [], Ru = (e, t) => {
  var n;
  return n = class extends Ft.Component {
    constructor() {
      super(...arguments), pe(this, "state", {
        showPreview: !!this.props.light
      }), pe(this, "references", {
        wrapper: (r) => {
          this.wrapper = r;
        },
        player: (r) => {
          this.player = r;
        }
      }), pe(this, "handleClickPreview", (r) => {
        this.setState({ showPreview: !1 }), this.props.onClickPreview(r);
      }), pe(this, "showPreview", () => {
        this.setState({ showPreview: !0 });
      }), pe(this, "getDuration", () => this.player ? this.player.getDuration() : null), pe(this, "getCurrentTime", () => this.player ? this.player.getCurrentTime() : null), pe(this, "getSecondsLoaded", () => this.player ? this.player.getSecondsLoaded() : null), pe(this, "getInternalPlayer", (r = "player") => this.player ? this.player.getInternalPlayer(r) : null), pe(this, "seekTo", (r, i, a) => {
        if (!this.player)
          return null;
        this.player.seekTo(r, i, a);
      }), pe(this, "handleReady", () => {
        this.props.onReady(this);
      }), pe(this, "getActivePlayer", (0, or.default)((r) => {
        for (const i of [...tn, ...e])
          if (i.canPlay(r))
            return i;
        return t || null;
      })), pe(this, "getConfig", (0, or.default)((r, i) => {
        const { config: a } = this.props;
        return ku.default.all([
          sn.defaultProps.config,
          sn.defaultProps.config[i] || {},
          a,
          a[i] || {}
        ]);
      })), pe(this, "getAttributes", (0, or.default)((r) => (0, ps.omit)(this.props, Ou))), pe(this, "renderActivePlayer", (r) => {
        if (!r)
          return null;
        const i = this.getActivePlayer(r);
        if (!i)
          return null;
        const a = this.getConfig(r, i.key);
        return /* @__PURE__ */ Ft.default.createElement(
          Su.default,
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
      return !(0, hi.default)(this.props, r) || !(0, hi.default)(this.state, i);
    }
    componentDidUpdate(r) {
      const { light: i } = this.props;
      !r.light && i && this.setState({ showPreview: !0 }), r.light && !i && this.setState({ showPreview: !1 });
    }
    renderPreview(r) {
      if (!r)
        return null;
      const { light: i, playIcon: a, previewTabIndex: s, oEmbedUrl: o, previewAriaLabel: l } = this.props;
      return /* @__PURE__ */ Ft.default.createElement(
        Tu,
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
      return /* @__PURE__ */ Ft.default.createElement(l, { ref: d, style: { ...i, width: a, height: s }, ...u }, /* @__PURE__ */ Ft.default.createElement(Cu, { fallback: o }, c ? this.renderPreview(r) : this.renderActivePlayer(r)));
    }
  }, pe(n, "displayName", "ReactPlayer"), pe(n, "propTypes", sn.propTypes), pe(n, "defaultProps", sn.defaultProps), pe(n, "addCustomPlayer", (r) => {
    tn.push(r);
  }), pe(n, "removeCustomPlayers", () => {
    tn.length = 0;
  }), pe(n, "canPlay", (r) => {
    for (const i of [...tn, ...e])
      if (i.canPlay(r))
        return !0;
    return !1;
  }), pe(n, "canEnablePIP", (r) => {
    for (const i of [...tn, ...e])
      if (i.canEnablePIP && i.canEnablePIP(r))
        return !0;
    return !1;
  }), n;
};
var Iu = Object.create, Xn = Object.defineProperty, Mu = Object.getOwnPropertyDescriptor, Du = Object.getOwnPropertyNames, Lu = Object.getPrototypeOf, Pu = Object.prototype.hasOwnProperty, Fu = (e, t) => {
  for (var n in t)
    Xn(e, n, { get: t[n], enumerable: !0 });
}, gs = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Du(t))
      !Pu.call(e, i) && i !== n && Xn(e, i, { get: () => t[i], enumerable: !(r = Mu(t, i)) || r.enumerable });
  return e;
}, Bu = (e, t, n) => (n = e != null ? Iu(Lu(e)) : {}, gs(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Xn(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), Uu = (e) => gs(Xn({}, "__esModule", { value: !0 }), e), ms = {};
Fu(ms, {
  default: () => Vu
});
var $u = Uu(ms), vr = Bu(Cc), zu = xu;
const Hu = vr.default[vr.default.length - 1];
var Vu = (0, zu.createReactPlayer)(vr.default, Hu);
const ju = /* @__PURE__ */ xa($u), xn = (
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
      return Zu;
    if (typeof e == "function")
      return Qn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Ku(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Gu(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Wu(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Ku(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = xn(e[n]);
  return Qn(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function Gu(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Qn(n);
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
function Wu(e) {
  return Qn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Qn(e) {
  return t;
  function t(n, r, i) {
    return !!(qu(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Zu() {
  return !0;
}
function qu(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const bi = (
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
    const r = xn(n);
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
), Ct = (
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
      return Qu;
    if (typeof e == "string")
      return Xu(e);
    if (typeof e == "object")
      return Yu(e);
    if (typeof e == "function")
      return Vr(e);
    throw new Error("Expected function, string, or array as `test`");
  }
);
function Yu(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Ct(e[n]);
  return Vr(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function Xu(e) {
  return Vr(t);
  function t(n) {
    return n.tagName === e;
  }
}
function Vr(e) {
  return t;
  function t(n, r, i) {
    return !!(Ju(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Qu(e) {
  return !!(e && typeof e == "object" && "type" in e && e.type === "element" && "tagName" in e && typeof e.tagName == "string");
}
function Ju(e) {
  return e !== null && typeof e == "object" && "type" in e && "tagName" in e;
}
const _i = /\n/g, yi = /[\t ]+/g, wr = Ct("br"), Ei = Ct(od), ed = Ct("p"), vi = Ct("tr"), td = Ct([
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
  sd,
  // From: <https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3>
  ld
]), hs = Ct([
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
function nd(e, t) {
  const n = t || {}, r = "children" in e ? e.children : [], i = hs(e), a = ys(e, {
    whitespace: n.whitespace || "normal"
  }), s = [];
  (e.type === "text" || e.type === "comment") && s.push(
    ..._s(e, {
      breakBefore: !0,
      breakAfter: !0
    })
  );
  let o = -1;
  for (; ++o < r.length; )
    s.push(
      ...bs(
        r[o],
        // @ts-expect-error: `tree` is a parent if we’re here.
        e,
        {
          whitespace: a,
          breakBefore: o ? void 0 : i,
          breakAfter: o < r.length - 1 ? wr(r[o + 1]) : i
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
function bs(e, t, n) {
  return e.type === "element" ? rd(e, t, n) : e.type === "text" ? n.whitespace === "normal" ? _s(e, n) : id(e) : [];
}
function rd(e, t, n) {
  const r = ys(e, n), i = e.children || [];
  let a = -1, s = [];
  if (td(e))
    return s;
  let o, l;
  for (wr(e) || vi(e) && // @ts-expect-error: something up with types of parents.
  bi(t, e, vi) ? l = `
` : ed(e) ? (o = 2, l = 2) : hs(e) && (o = 1, l = 1); ++a < i.length; )
    s = s.concat(
      bs(i[a], e, {
        whitespace: r,
        breakBefore: a ? void 0 : o,
        breakAfter: a < i.length - 1 ? wr(i[a + 1]) : l
      })
    );
  return Ei(e) && // @ts-expect-error: something up with types of parents.
  bi(t, e, Ei) && s.push("	"), o && s.unshift(o), l && s.push(l), s;
}
function _s(e, t) {
  const n = String(e.value), r = [], i = [];
  let a = 0;
  for (; a <= n.length; ) {
    _i.lastIndex = a;
    const l = _i.exec(n), c = l && "index" in l ? l.index : n.length;
    r.push(
      // Any sequence of collapsible spaces and tabs immediately preceding or
      // following a segment break is removed.
      ad(
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
function id(e) {
  return [String(e.value)];
}
function ad(e, t, n) {
  const r = [];
  let i = 0, a;
  for (; i < e.length; ) {
    yi.lastIndex = i;
    const s = yi.exec(e);
    a = s ? s.index : e.length, !i && !a && s && !t && r.push(""), i !== a && r.push(e.slice(i, a)), i = s ? a + s[0].length : a;
  }
  return i !== a && !n && r.push(""), r.join(" ");
}
function ys(e, t) {
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
function sd(e) {
  return !!(e.properties || {}).hidden;
}
function od(e) {
  return e.tagName === "td" || e.tagName === "th";
}
function ld(e) {
  return e.tagName === "dialog" && !(e.properties || {}).open;
}
function cd(e) {
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
  }, f = {
    className: "title",
    begin: t.optional(i) + e.IDENT_RE,
    relevance: 0
  }, m = t.optional(i) + e.IDENT_RE + "\\s*\\(", p = [
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
  ], _ = [
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
  ], y = [
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
  ], T = {
    type: h,
    keyword: p,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: _
  }, M = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: y
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
    M,
    d,
    o,
    n,
    e.C_BLOCK_COMMENT_MODE,
    u,
    c
  ], j = {
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
    keywords: T,
    contains: F.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: T,
        contains: F.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, G = {
    className: "function",
    begin: "(" + s + "[\\*&\\s]+)+" + m,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: T,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: T,
        relevance: 0
      },
      {
        begin: m,
        returnBegin: !0,
        contains: [f],
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
        keywords: T,
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
            keywords: T,
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
    keywords: T,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      j,
      G,
      M,
      F,
      [
        d,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: T,
          contains: [
            "self",
            o
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: T
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
function ud(e) {
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
  }, n = cd(e), r = (
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
function dd(e) {
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
  }, f = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], m = e.SHEBANG({
    binary: `(${f.join("|")})`,
    relevance: 10
  }), p = {
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
  ], _ = [
    "true",
    "false"
  ], y = { match: /(\/[a-z._-]+)+/ }, E = [
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
  ], N = [
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
  ], T = [
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
  ], M = [
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
      literal: _,
      built_in: [
        ...E,
        ...N,
        // Shell modifiers
        "set",
        "shopt",
        ...T,
        ...M
      ]
    },
    contains: [
      m,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      p,
      d,
      a,
      s,
      y,
      o,
      l,
      c,
      u,
      n
    ]
  };
}
function fd(e) {
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
  }, f = {
    className: "title",
    begin: t.optional(i) + e.IDENT_RE,
    relevance: 0
  }, m = t.optional(i) + e.IDENT_RE + "\\s*\\(", _ = {
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
  }, y = [
    d,
    o,
    n,
    e.C_BLOCK_COMMENT_MODE,
    u,
    c
  ], E = {
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
    keywords: _,
    contains: y.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: _,
        contains: y.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, N = {
    begin: "(" + s + "[\\*&\\s]+)+" + m,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: _,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: _,
        relevance: 0
      },
      {
        begin: m,
        returnBegin: !0,
        contains: [e.inherit(f, { className: "title.function" })],
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
        keywords: _,
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
            keywords: _,
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
    keywords: _,
    // Until differentiations are added between `c` and `cpp`, `c` will
    // not be auto-detected to avoid auto-detect conflicts between C and C++
    disableAutodetect: !0,
    illegal: "</",
    contains: [].concat(
      E,
      N,
      y,
      [
        d,
        {
          begin: e.IDENT_RE + "::",
          keywords: _
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
      keywords: _
    }
  };
}
function pd(e) {
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
  }, f = {
    className: "title",
    begin: t.optional(i) + e.IDENT_RE,
    relevance: 0
  }, m = t.optional(i) + e.IDENT_RE + "\\s*\\(", p = [
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
  ], _ = [
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
  ], y = [
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
  ], T = {
    type: h,
    keyword: p,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: _
  }, M = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: y
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
    M,
    d,
    o,
    n,
    e.C_BLOCK_COMMENT_MODE,
    u,
    c
  ], j = {
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
    keywords: T,
    contains: F.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: T,
        contains: F.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, G = {
    className: "function",
    begin: "(" + s + "[\\*&\\s]+)+" + m,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: T,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: T,
        relevance: 0
      },
      {
        begin: m,
        returnBegin: !0,
        contains: [f],
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
        keywords: T,
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
            keywords: T,
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
    keywords: T,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      j,
      G,
      M,
      F,
      [
        d,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: T,
          contains: [
            "self",
            o
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: T
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
function gd(e) {
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
  }, d = e.inherit(u, { illegal: /\n/ }), f = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: s
  }, m = e.inherit(f, { illegal: /\n/ }), p = {
    className: "string",
    begin: /\$"/,
    end: '"',
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      e.BACKSLASH_ESCAPE,
      m
    ]
  }, h = {
    className: "string",
    begin: /\$@"/,
    end: '"',
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      f
    ]
  }, _ = e.inherit(h, {
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      m
    ]
  });
  f.contains = [
    h,
    p,
    u,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    l,
    e.C_BLOCK_COMMENT_MODE
  ], m.contains = [
    _,
    p,
    d,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    l,
    e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
  ];
  const y = { variants: [
    c,
    h,
    p,
    u,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ] }, E = {
    begin: "<",
    end: ">",
    contains: [
      { beginKeywords: "in out" },
      o
    ]
  }, N = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", T = {
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
      y,
      l,
      {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [
          { beginKeywords: "where class" },
          o,
          E,
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
          E,
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
        begin: "(" + N + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
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
              E
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
              y,
              l,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      T
    ]
  };
}
const md = (e) => ({
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
}), hd = [
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
], bd = [
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
], _d = [
  ...hd,
  ...bd
], yd = [
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
].sort().reverse(), Ed = [
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
].sort().reverse(), vd = [
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
].sort().reverse(), wd = [
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
function xd(e) {
  const t = e.regex, n = md(e), r = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", a = /@-?\w[\w]*(-\w+)*/, s = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
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
          { begin: ":(" + Ed.join("|") + ")" },
          { begin: ":(:)?(" + vd.join("|") + ")" }
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
        begin: "\\b(" + wd.join("|") + ")\\b"
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
              attribute: yd.join(" ")
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
        begin: "\\b(" + _d.join("|") + ")\\b"
      }
    ]
  };
}
function kd(e) {
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
function Sd(e) {
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
function Td(e) {
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
function Nd(e) {
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
  ), f = t.concat(
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
        begin: f,
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
var Bt = "[0-9](_*[0-9])*", Tn = `\\.(${Bt})`, Nn = "[0-9a-fA-F](_*[0-9a-fA-F])*", wi = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${Bt})((${Tn})|\\.)?|(${Tn}))[eE][+-]?(${Bt})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${Bt})((${Tn})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${Tn})[fFdD]?\\b` },
    { begin: `\\b(${Bt})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${Nn})\\.?|(${Nn})?\\.(${Nn}))[pP][+-]?(${Bt})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${Nn})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function Es(e, t, n) {
  return n === -1 ? "" : e.replace(t, (r) => Es(e, t, n - 1));
}
function Ad(e) {
  const t = e.regex, n = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", r = n + Es("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2), l = {
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
              wi,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      wi,
      c
    ]
  };
}
const xi = "[A-Za-z$_][0-9A-Za-z$_]*", Od = [
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
], Cd = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], vs = [
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
], ws = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], xs = [
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
], Rd = [
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
], Id = [].concat(
  xs,
  vs,
  ws
);
function Md(e) {
  const t = e.regex, n = (C, { after: W }) => {
    const ee = "</" + C[0].slice(1);
    return C.input.indexOf(ee, W) !== -1;
  }, r = xi, i = {
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
      let de;
      const Ne = C.input.substring(ee);
      if (de = Ne.match(/^\s*=/)) {
        W.ignoreMatch();
        return;
      }
      if ((de = Ne.match(/^\s+extends\s+/)) && de.index === 0) {
        W.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: xi,
    keyword: Od,
    literal: Cd,
    built_in: Id,
    "variable.language": Rd
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
  }, f = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: o,
    contains: []
    // defined later
  }, m = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "xml"
    }
  }, p = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
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
        f
      ],
      subLanguage: "graphql"
    }
  }, _ = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, E = {
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
  }, N = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    m,
    p,
    h,
    _,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    d
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  f.contains = N.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(N)
  });
  const T = [].concat(E, f.contains), M = T.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(T)
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
    contains: M
  }, j = {
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
  }, G = {
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
        ...vs,
        ...ws
      ]
    }
  }, U = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, v = {
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
  }, ie = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function K(C) {
    return t.concat("(?!", C.join("|"), ")");
  }
  const Z = {
    match: t.concat(
      /\b/,
      K([
        ...xs,
        "super",
        "import"
      ].map((C) => `${C}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, Y = {
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
  }, S = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", P = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(S)
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
    exports: { PARAMS_CONTAINS: M, CLASS_REFERENCE: G },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      U,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      m,
      p,
      h,
      _,
      E,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      d,
      G,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      P,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          E,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: S,
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
                    contains: M
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
      v,
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
      Y,
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
      Z,
      ie,
      j,
      re,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Dd(e) {
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
var Ut = "[0-9](_*[0-9])*", An = `\\.(${Ut})`, On = "[0-9a-fA-F](_*[0-9a-fA-F])*", Ld = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${Ut})((${An})|\\.)?|(${An}))[eE][+-]?(${Ut})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${Ut})((${An})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${An})[fFdD]?\\b` },
    { begin: `\\b(${Ut})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${On})\\.?|(${On})?\\.(${On}))[pP][+-]?(${Ut})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${On})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function Pd(e) {
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
  }, c = Ld, u = e.COMMENT(
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
  ] }, f = d;
  return f.variants[1].contains = [d], d.variants[1].contains = [f], {
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
const Fd = (e) => ({
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
}), Bd = [
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
], Ud = [
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
], $d = [
  ...Bd,
  ...Ud
], zd = [
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
].sort().reverse(), ks = [
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
].sort().reverse(), Ss = [
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
].sort().reverse(), Hd = [
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
].sort().reverse(), Vd = ks.concat(Ss).sort().reverse();
function jd(e) {
  const t = Fd(e), n = Vd, r = "and or not only", i = "[\\w-]+", a = "(" + i + "|@\\{" + i + "\\})", s = [], o = [], l = function(N) {
    return {
      // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
      className: "string",
      begin: "~?" + N + ".*?" + N
    };
  }, c = function(N, T, M) {
    return {
      className: N,
      begin: T,
      relevance: M
    };
  }, u = {
    $pattern: /[a-z-]+/,
    keyword: r,
    attribute: zd.join(" ")
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
  const f = o.concat({
    begin: /\{/,
    end: /\}/,
    contains: s
  }), m = {
    beginKeywords: "when",
    endsWithParent: !0,
    contains: [{ beginKeywords: "and not" }].concat(o)
    // using this form to override VALUE’s 'function' match
  }, p = {
    begin: a + "\\s*:",
    returnBegin: !0,
    end: /[;}]/,
    relevance: 0,
    contains: [
      { begin: /-(webkit|moz|ms|o)-/ },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Hd.join("|") + ")\\b",
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
  }, _ = {
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
      contains: f
    }
  }, y = {
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
      m,
      c("keyword", "all\\b"),
      c("variable", "@\\{" + i + "\\}"),
      // otherwise it’s identified as tag
      {
        begin: "\\b(" + $d.join("|") + ")\\b",
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
        begin: ":(" + ks.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + Ss.join("|") + ")"
      },
      {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        contains: f
      },
      // argument list of parametric mixins
      { begin: "!important" },
      // eat !important after mixin call or it will be colored as tag
      t.FUNCTION_DISPATCH
    ]
  }, E = {
    begin: i + `:(:)?(${n.join("|")})`,
    returnBegin: !0,
    contains: [y]
  };
  return s.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    h,
    _,
    E,
    p,
    y,
    m,
    t.FUNCTION_DISPATCH
  ), {
    name: "Less",
    case_insensitive: !0,
    illegal: `[=>'/<($"]`,
    contains: s
  };
}
function Kd(e) {
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
function Gd(e) {
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
function Wd(e) {
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
  }, d = e.inherit(c, { contains: [] }), f = e.inherit(u, { contains: [] });
  c.contains.push(f), u.contains.push(d);
  let m = [
    n,
    l
  ];
  return [
    c,
    u,
    d,
    f
  ].forEach((y) => {
    y.contains = y.contains.concat(m);
  }), m = m.concat(c, u), {
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
            contains: m
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: m
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
        contains: m,
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
function Zd(e) {
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
function qd(e) {
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
  ], f = (h, _, y = "\\1") => {
    const E = y === "\\1" ? y : t.concat(y, _);
    return t.concat(
      t.concat("(?:", h, ")"),
      _,
      /(?:\\.|[^\\\/])*?/,
      E,
      /(?:\\.|[^\\\/])*?/,
      y,
      r
    );
  }, m = (h, _, y) => t.concat(
    t.concat("(?:", h, ")"),
    _,
    /(?:\\.|[^\\\/])*?/,
    y,
    r
  ), p = [
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
            { begin: f("s|tr|y", t.either(...d, { capture: !0 })) },
            // and then paired delmis
            { begin: f("s|tr|y", "\\(", "\\)") },
            { begin: f("s|tr|y", "\\[", "\\]") },
            { begin: f("s|tr|y", "\\{", "\\}") }
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
            { begin: m("(?:m|qr)?", /\//, /\//) },
            // allow matching common delimiters
            { begin: m("m|qr", t.either(...d, { capture: !0 }), /\1/) },
            // allow common paired delmins
            { begin: m("m|qr", /\(/, /\)/) },
            { begin: m("m|qr", /\[/, /\]/) },
            { begin: m("m|qr", /\{/, /\}/) }
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
  return a.contains = p, s.contains = p, {
    name: "Perl",
    aliases: [
      "pl",
      "pm"
    ],
    keywords: i,
    contains: p
  };
}
function Yd(e) {
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
    "on:begin": (Y, re) => {
      re.data._beginMatch = Y[1] || Y[2];
    },
    "on:end": (Y, re) => {
      re.data._beginMatch !== Y[1] && re.ignoreMatch();
    }
  }, f = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), m = `[ 	
]`, p = {
    scope: "string",
    variants: [
      u,
      c,
      d,
      f
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
  }, _ = [
    "false",
    "null",
    "true"
  ], y = [
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
  ], E = [
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
  ], T = {
    keyword: y,
    literal: ((Y) => {
      const re = [];
      return Y.forEach((S) => {
        re.push(S), S.toLowerCase() === S ? re.push(S.toUpperCase()) : re.push(S.toLowerCase());
      }), re;
    })(_),
    built_in: E
  }, M = (Y) => Y.map((re) => re.replace(/\|\d+$/, "")), F = { variants: [
    {
      match: [
        /new/,
        t.concat(m, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", M(E).join("\\b|"), "\\b)"),
        i
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, j = t.concat(r, "\\b(?!\\()"), G = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        j
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
        j
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
  ] }, U = {
    scope: "attr",
    match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, v = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: T,
    contains: [
      U,
      s,
      G,
      e.C_BLOCK_COMMENT_MODE,
      p,
      h,
      F
    ]
  }, ie = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", M(y).join("\\b|"), "|", M(E).join("\\b|"), "\\b)"),
      r,
      t.concat(m, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [v]
  };
  v.contains.push(ie);
  const K = [
    U,
    G,
    e.C_BLOCK_COMMENT_MODE,
    p,
    h,
    F
  ], Z = {
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
      literal: _,
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
          literal: _,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...K
        ]
      },
      ...K,
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
    keywords: T,
    contains: [
      Z,
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
      ie,
      G,
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
            keywords: T,
            contains: [
              "self",
              Z,
              s,
              G,
              e.C_BLOCK_COMMENT_MODE,
              p,
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
      p,
      h
    ]
  };
}
function Xd(e) {
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
function Qd(e) {
  return {
    name: "Plain text",
    aliases: [
      "text",
      "txt"
    ],
    disableAutodetect: !0
  };
}
function Jd(e) {
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
  }, f = "[0-9](_?[0-9])*", m = `(\\b(${f}))?\\.(${f})|\\b(${f})\\.`, p = `\\b|${r.join("|")}`, h = {
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
        begin: `(\\b(${f})|(${m}))[eE][+-]?(${f})[jJ]?(?=${p})`
      },
      {
        begin: `(${m})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${p})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${p})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${p})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${p})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${f})[jJ](?=${p})`
      }
    ]
  }, _ = {
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
  }, y = {
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
      _,
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
        contains: [y]
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
          y,
          d
        ]
      }
    ]
  };
}
function ef(e) {
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
function tf(e) {
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
function nf(e) {
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
  }, f = "[1-9](_?[0-9])*|0", m = "[0-9](_?[0-9])*", p = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal integer/float, optionally exponential or rational, optionally imaginary
      { begin: `\\b(${f})(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b` },
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
    p,
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
  const v = [
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
    contains: [e.SHEBANG({ binary: "ruby" })].concat(v).concat(c).concat(F)
  };
}
function rf(e) {
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
const af = (e) => ({
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
}), sf = [
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
], of = [
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
], lf = [
  ...sf,
  ...of
], cf = [
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
].sort().reverse(), uf = [
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
].sort().reverse(), df = [
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
].sort().reverse(), ff = [
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
function pf(e) {
  const t = af(e), n = df, r = uf, i = "@[a-z-]+", a = "and or not only", o = {
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
        begin: "\\b(" + lf.join("|") + ")\\b",
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
        begin: "\\b(" + ff.join("|") + ")\\b"
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
          attribute: cf.join(" ")
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
function gf(e) {
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
function mf(e) {
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
  ], f = [
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
  ], m = u, p = [
    ...c,
    ...l
  ].filter((M) => !u.includes(M)), h = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, _ = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, y = {
    match: t.concat(/\b/, t.either(...m), /\s*\(/),
    relevance: 0,
    keywords: { built_in: m }
  };
  function E(M) {
    return t.concat(
      /\b/,
      t.either(...M.map((F) => F.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const N = {
    scope: "keyword",
    match: E(f),
    relevance: 0
  };
  function T(M, {
    exceptions: F,
    when: j
  } = {}) {
    const G = j;
    return F = F || [], M.map((U) => U.match(/\|\d+$/) || F.includes(U) ? U : G(U) ? `${U}|0` : U);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: T(p, { when: (M) => M.length < 3 }),
      literal: a,
      type: o,
      built_in: d
    },
    contains: [
      {
        scope: "type",
        match: E(s)
      },
      N,
      y,
      h,
      r,
      i,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      n,
      _
    ]
  };
}
function Ts(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function nn(e) {
  return ce("(?=", e, ")");
}
function ce(...e) {
  return e.map((n) => Ts(n)).join("");
}
function hf(e) {
  const t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function Ie(...e) {
  return "(" + (hf(e).capture ? "" : "?:") + e.map((r) => Ts(r)).join("|") + ")";
}
const jr = (e) => ce(
  /\b/,
  e,
  /\w$/.test(e) ? /\b/ : /\B/
), bf = [
  "Protocol",
  // contextual
  "Type"
  // contextual
].map(jr), ki = [
  "init",
  "self"
].map(jr), _f = [
  "Any",
  "Self"
], lr = [
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
], Si = [
  "false",
  "nil",
  "true"
], yf = [
  "assignment",
  "associativity",
  "higherThan",
  "left",
  "lowerThan",
  "none",
  "right"
], Ef = [
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
], Ti = [
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
], Ns = Ie(
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
), As = Ie(
  Ns,
  /[\u0300-\u036F]/,
  /[\u1DC0-\u1DFF]/,
  /[\u20D0-\u20FF]/,
  /[\uFE00-\uFE0F]/,
  /[\uFE20-\uFE2F]/
  // TODO: The following characters are also allowed, but the regex isn't supported yet.
  // /[\u{E0100}-\u{E01EF}]/u
), cr = ce(Ns, As, "*"), Os = Ie(
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
), Dn = Ie(
  Os,
  /\d/,
  /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
), We = ce(Os, Dn, "*"), Cn = ce(/[A-Z]/, Dn, "*"), vf = [
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
  ce(/objc\(/, We, /\)/),
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
], wf = [
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
function xf(e) {
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
      Ie(...bf, ...ki)
    ],
    className: { 2: "keyword" }
  }, a = {
    // Consume .keyword to prevent highlighting properties and methods as keywords.
    match: ce(/\./, Ie(...lr)),
    relevance: 0
  }, s = lr.filter((le) => typeof le == "string").concat(["_|0"]), o = lr.filter((le) => typeof le != "string").concat(_f).map(jr), l = { variants: [
    {
      className: "keyword",
      match: Ie(...o, ...ki)
    }
  ] }, c = {
    $pattern: Ie(
      /\b\w+/,
      // regular keywords
      /#\w+/
      // number keywords
    ),
    keyword: s.concat(Ef),
    literal: Si
  }, u = [
    i,
    a,
    l
  ], d = {
    // Consume .built_in to prevent highlighting properties and methods.
    match: ce(/\./, Ie(...Ti)),
    relevance: 0
  }, f = {
    className: "built_in",
    match: ce(/\b/, Ie(...Ti), /(?=\()/)
  }, m = [
    d,
    f
  ], p = {
    // Prevent -> from being highlighting as an operator.
    match: /->/,
    relevance: 0
  }, h = {
    className: "operator",
    relevance: 0,
    variants: [
      { match: cr },
      {
        // dot-operator: only operators that start with a dot are allowed to use dots as
        // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
        // characters that may also include dots.
        match: `\\.(\\.|${As})+`
      }
    ]
  }, _ = [
    p,
    h
  ], y = "([0-9]_*)+", E = "([0-9a-fA-F]_*)+", N = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal floating-point-literal (subsumes decimal-literal)
      { match: `\\b(${y})(\\.(${y}))?([eE][+-]?(${y}))?\\b` },
      // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
      { match: `\\b0x(${E})(\\.(${E}))?([pP][+-]?(${y}))?\\b` },
      // octal-literal
      { match: /\b0o([0-7]_*)+\b/ },
      // binary-literal
      { match: /\b0b([01]_*)+\b/ }
    ]
  }, T = (le = "") => ({
    className: "subst",
    variants: [
      { match: ce(/\\/, le, /[0\\tnr"']/) },
      { match: ce(/\\/, le, /u\{[0-9a-fA-F]{1,8}\}/) }
    ]
  }), M = (le = "") => ({
    className: "subst",
    match: ce(/\\/, le, /[\t ]*(?:[\r\n]|\r\n)/)
  }), F = (le = "") => ({
    className: "subst",
    label: "interpol",
    begin: ce(/\\/, le, /\(/),
    end: /\)/
  }), j = (le = "") => ({
    begin: ce(le, /"""/),
    end: ce(/"""/, le),
    contains: [
      T(le),
      M(le),
      F(le)
    ]
  }), G = (le = "") => ({
    begin: ce(le, /"/),
    end: ce(/"/, le),
    contains: [
      T(le),
      F(le)
    ]
  }), U = {
    className: "string",
    variants: [
      j(),
      j("#"),
      j("##"),
      j("###"),
      G(),
      G("#"),
      G("##"),
      G("###")
    ]
  }, v = [
    e.BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [e.BACKSLASH_ESCAPE]
    }
  ], ie = {
    begin: /\/[^\s](?=[^/\n]*\/)/,
    end: /\//,
    contains: v
  }, K = (le) => {
    const Ge = ce(le, /\//), q = ce(/\//, le);
    return {
      begin: Ge,
      end: q,
      contains: [
        ...v,
        {
          scope: "comment",
          begin: `#(?!.*${q})`,
          end: /$/
        }
      ]
    };
  }, Z = {
    scope: "regexp",
    variants: [
      K("###"),
      K("##"),
      K("#"),
      ie
    ]
  }, Y = { match: ce(/`/, We, /`/) }, re = {
    className: "variable",
    match: /\$\d+/
  }, S = {
    className: "variable",
    match: `\\$${Dn}+`
  }, P = [
    Y,
    re,
    S
  ], C = {
    match: /(@|#(un)?)available/,
    scope: "keyword",
    starts: { contains: [
      {
        begin: /\(/,
        end: /\)/,
        keywords: wf,
        contains: [
          ..._,
          N,
          U
        ]
      }
    ] }
  }, W = {
    scope: "keyword",
    match: ce(/@/, Ie(...vf), nn(Ie(/\(/, /\s+/)))
  }, ee = {
    scope: "meta",
    match: ce(/@/, We)
  }, ae = [
    C,
    W,
    ee
  ], de = {
    match: nn(/\b[A-Z]/),
    relevance: 0,
    contains: [
      {
        // Common Apple frameworks, for relevance boost
        className: "type",
        match: ce(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, Dn, "+")
      },
      {
        // Type identifier
        className: "type",
        match: Cn,
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
        match: ce(/\s+&\s+/, nn(Cn)),
        relevance: 0
      }
    ]
  }, Ne = {
    begin: /</,
    end: />/,
    keywords: c,
    contains: [
      ...r,
      ...u,
      ...ae,
      p,
      de
    ]
  };
  de.contains.push(Ne);
  const we = {
    match: ce(We, /\s*:/),
    keywords: "_|0",
    relevance: 0
  }, Se = {
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    keywords: c,
    contains: [
      "self",
      we,
      ...r,
      Z,
      ...u,
      ...m,
      ..._,
      N,
      U,
      ...P,
      ...ae,
      de
    ]
  }, st = {
    begin: /</,
    end: />/,
    keywords: "repeat each",
    contains: [
      ...r,
      de
    ]
  }, ot = {
    begin: Ie(
      nn(ce(We, /\s*:/)),
      nn(ce(We, /\s+/, We, /\s*:/))
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
        match: We
      }
    ]
  }, lt = {
    begin: /\(/,
    end: /\)/,
    keywords: c,
    contains: [
      ot,
      ...r,
      ...u,
      ..._,
      N,
      U,
      ...ae,
      de,
      Se
    ],
    endsParent: !0,
    illegal: /["']/
  }, Et = {
    match: [
      /(func|macro)/,
      /\s+/,
      Ie(Y.match, We, cr)
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      st,
      lt,
      t
    ],
    illegal: [
      /\[/,
      /%/
    ]
  }, vt = {
    match: [
      /\b(?:subscript|init[?!]?)/,
      /\s*(?=[<(])/
    ],
    className: { 1: "keyword" },
    contains: [
      st,
      lt,
      t
    ],
    illegal: /\[|%/
  }, Xt = {
    match: [
      /operator/,
      /\s+/,
      cr
    ],
    className: {
      1: "keyword",
      3: "title"
    }
  }, It = {
    begin: [
      /precedencegroup/,
      /\s+/,
      Cn
    ],
    className: {
      1: "keyword",
      3: "title"
    },
    contains: [de],
    keywords: [
      ...yf,
      ...Si
    ],
    end: /}/
  }, ct = {
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
  }, wt = {
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
      We,
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
            match: Cn
          },
          ...u
        ],
        relevance: 0
      }
    ]
  };
  for (const le of U.variants) {
    const Ge = le.contains.find((xt) => xt.label === "interpol");
    Ge.keywords = c;
    const q = [
      ...u,
      ...m,
      ..._,
      N,
      U,
      ...P
    ];
    Ge.contains = [
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
      Et,
      vt,
      ct,
      wt,
      Ae,
      Xt,
      It,
      {
        beginKeywords: "import",
        end: /$/,
        contains: [...r],
        relevance: 0
      },
      Z,
      ...u,
      ...m,
      ..._,
      N,
      U,
      ...P,
      ...ae,
      de,
      Se
    ]
  };
}
const Ln = "[A-Za-z$_][0-9A-Za-z$_]*", Cs = [
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
], Rs = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Is = [
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
], Ms = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Ds = [
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
], Ls = [
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
], Ps = [].concat(
  Ds,
  Is,
  Ms
);
function kf(e) {
  const t = e.regex, n = (C, { after: W }) => {
    const ee = "</" + C[0].slice(1);
    return C.input.indexOf(ee, W) !== -1;
  }, r = Ln, i = {
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
      let de;
      const Ne = C.input.substring(ee);
      if (de = Ne.match(/^\s*=/)) {
        W.ignoreMatch();
        return;
      }
      if ((de = Ne.match(/^\s+extends\s+/)) && de.index === 0) {
        W.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: Ln,
    keyword: Cs,
    literal: Rs,
    built_in: Ps,
    "variable.language": Ls
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
  }, f = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: o,
    contains: []
    // defined later
  }, m = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "xml"
    }
  }, p = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
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
        f
      ],
      subLanguage: "graphql"
    }
  }, _ = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, E = {
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
  }, N = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    m,
    p,
    h,
    _,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    d
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  f.contains = N.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(N)
  });
  const T = [].concat(E, f.contains), M = T.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(T)
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
    contains: M
  }, j = {
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
  }, G = {
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
        ...Is,
        ...Ms
      ]
    }
  }, U = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, v = {
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
  }, ie = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function K(C) {
    return t.concat("(?!", C.join("|"), ")");
  }
  const Z = {
    match: t.concat(
      /\b/,
      K([
        ...Ds,
        "super",
        "import"
      ].map((C) => `${C}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, Y = {
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
  }, S = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", P = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(S)
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
    exports: { PARAMS_CONTAINS: M, CLASS_REFERENCE: G },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      U,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      m,
      p,
      h,
      _,
      E,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      d,
      G,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      P,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          E,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: S,
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
                    contains: M
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
      v,
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
      Y,
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
      Z,
      ie,
      j,
      re,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Sf(e) {
  const t = e.regex, n = kf(e), r = Ln, i = [
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
    $pattern: Ln,
    keyword: Cs.concat(l),
    literal: Rs,
    built_in: Ps.concat(i),
    "variable.language": Ls
  }, u = {
    className: "meta",
    begin: "@" + r
  }, d = (h, _, y) => {
    const E = h.contains.findIndex((N) => N.label === _);
    if (E === -1)
      throw new Error("can not find mode to replace");
    h.contains.splice(E, 1, y);
  };
  Object.assign(n.keywords, c), n.exports.PARAMS_CONTAINS.push(u);
  const f = n.contains.find((h) => h.scope === "attr"), m = Object.assign(
    {},
    f,
    { match: t.concat(r, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    f,
    // highlight the params key
    m
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    u,
    a,
    s,
    m
    // Added for optional property assignment highlighting
  ]), d(n, "shebang", e.SHEBANG()), d(n, "use_strict", o);
  const p = n.contains.find((h) => h.label === "func.def");
  return p.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
function Tf(e) {
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
  ] }), f = e.COMMENT(null, /$/, { variants: [
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
      f,
      {
        className: "meta",
        // TODO: Use multi-class for indentation once available
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
        contains: [f]
      }
    ]
  };
}
function Nf(e) {
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
function Af(e) {
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
function Of(e) {
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
  ] }), f = {
    className: "number",
    begin: "\\b" + "[0-9]{4}(-[0-9][0-9]){0,2}" + "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" + "(\\.[0-9]*)?" + "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" + "\\b"
  }, m = {
    end: ",",
    endsWithParent: !0,
    excludeEnd: !0,
    keywords: t,
    relevance: 0
  }, p = {
    begin: /\{/,
    end: /\}/,
    contains: [m],
    illegal: "\\n",
    relevance: 0
  }, h = {
    begin: "\\[",
    end: "\\]",
    contains: [m],
    illegal: "\\n",
    relevance: 0
  }, _ = [
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
    f,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: "number",
      begin: e.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    p,
    h,
    a,
    s
  ], y = [..._];
  return y.pop(), y.push(o), m.contains = y, {
    name: "YAML",
    case_insensitive: !0,
    aliases: ["yml"],
    contains: _
  };
}
const Cf = {
  arduino: ud,
  bash: dd,
  c: fd,
  cpp: pd,
  csharp: gd,
  css: xd,
  diff: kd,
  go: Sd,
  graphql: Td,
  ini: Nd,
  java: Ad,
  javascript: Md,
  json: Dd,
  kotlin: Pd,
  less: jd,
  lua: Kd,
  makefile: Gd,
  markdown: Wd,
  objectivec: Zd,
  perl: qd,
  php: Yd,
  "php-template": Xd,
  plaintext: Qd,
  python: Jd,
  "python-repl": ef,
  r: tf,
  ruby: nf,
  rust: rf,
  scss: pf,
  shell: gf,
  sql: mf,
  swift: xf,
  typescript: Sf,
  vbnet: Tf,
  wasm: Nf,
  xml: Af,
  yaml: Of
};
function Ab() {
}
function Ob() {
}
function Fs(e) {
  return e instanceof Map ? e.clear = e.delete = e.set = function() {
    throw new Error("map is read-only");
  } : e instanceof Set && (e.add = e.clear = e.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
    const n = e[t], r = typeof n;
    (r === "object" || r === "function") && !Object.isFrozen(n) && Fs(n);
  }), e;
}
class Ni {
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
function Bs(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function pt(e, ...t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    n[r] = e[r];
  return t.forEach(function(r) {
    for (const i in r)
      n[i] = r[i];
  }), /** @type {T} */
  n;
}
const Rf = "</span>", Ai = (e) => !!e.scope, If = (e, { prefix: t }) => {
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
class Mf {
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
    this.buffer += Bs(t);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(t) {
    if (!Ai(t)) return;
    const n = If(
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
    Ai(t) && (this.buffer += Rf);
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
const Oi = (e = {}) => {
  const t = { children: [] };
  return Object.assign(t, e), t;
};
class Kr {
  constructor() {
    this.rootNode = Oi(), this.stack = [this.rootNode];
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
    const n = Oi({ scope: t });
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
      Kr._collapse(n);
    }));
  }
}
class Df extends Kr {
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
    return new Mf(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function fn(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function Us(e) {
  return Rt("(?=", e, ")");
}
function Lf(e) {
  return Rt("(?:", e, ")*");
}
function Pf(e) {
  return Rt("(?:", e, ")?");
}
function Rt(...e) {
  return e.map((n) => fn(n)).join("");
}
function Ff(e) {
  const t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function Gr(...e) {
  return "(" + (Ff(e).capture ? "" : "?:") + e.map((r) => fn(r)).join("|") + ")";
}
function $s(e) {
  return new RegExp(e.toString() + "|").exec("").length - 1;
}
function Bf(e, t) {
  const n = e && e.exec(t);
  return n && n.index === 0;
}
const Uf = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Wr(e, { joinWith: t }) {
  let n = 0;
  return e.map((r) => {
    n += 1;
    const i = n;
    let a = fn(r), s = "";
    for (; a.length > 0; ) {
      const o = Uf.exec(a);
      if (!o) {
        s += a;
        break;
      }
      s += a.substring(0, o.index), a = a.substring(o.index + o[0].length), o[0][0] === "\\" && o[1] ? s += "\\" + String(Number(o[1]) + i) : (s += o[0], o[0] === "(" && n++);
    }
    return s;
  }).map((r) => `(${r})`).join(t);
}
const $f = /\b\B/, zs = "[a-zA-Z]\\w*", Zr = "[a-zA-Z_]\\w*", Hs = "\\b\\d+(\\.\\d+)?", Vs = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", js = "\\b(0b[01]+)", zf = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Hf = (e = {}) => {
  const t = /^#![ ]*\//;
  return e.binary && (e.begin = Rt(
    t,
    /.*\b/,
    e.binary,
    /\b.*/
  )), pt({
    scope: "meta",
    begin: t,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (n, r) => {
      n.index !== 0 && r.ignoreMatch();
    }
  }, e);
}, pn = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, Vf = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [pn]
}, jf = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [pn]
}, Kf = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, Jn = function(e, t, n = {}) {
  const r = pt(
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
  const i = Gr(
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
      begin: Rt(
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
}, Gf = Jn("//", "$"), Wf = Jn("/\\*", "\\*/"), Zf = Jn("#", "$"), qf = {
  scope: "number",
  begin: Hs,
  relevance: 0
}, Yf = {
  scope: "number",
  begin: Vs,
  relevance: 0
}, Xf = {
  scope: "number",
  begin: js,
  relevance: 0
}, Qf = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    pn,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [pn]
    }
  ]
}, Jf = {
  scope: "title",
  begin: zs,
  relevance: 0
}, ep = {
  scope: "title",
  begin: Zr,
  relevance: 0
}, tp = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + Zr,
  relevance: 0
}, np = function(e) {
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
var Rn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: Vf,
  BACKSLASH_ESCAPE: pn,
  BINARY_NUMBER_MODE: Xf,
  BINARY_NUMBER_RE: js,
  COMMENT: Jn,
  C_BLOCK_COMMENT_MODE: Wf,
  C_LINE_COMMENT_MODE: Gf,
  C_NUMBER_MODE: Yf,
  C_NUMBER_RE: Vs,
  END_SAME_AS_BEGIN: np,
  HASH_COMMENT_MODE: Zf,
  IDENT_RE: zs,
  MATCH_NOTHING_RE: $f,
  METHOD_GUARD: tp,
  NUMBER_MODE: qf,
  NUMBER_RE: Hs,
  PHRASAL_WORDS_MODE: Kf,
  QUOTE_STRING_MODE: jf,
  REGEXP_MODE: Qf,
  RE_STARTERS_RE: zf,
  SHEBANG: Hf,
  TITLE_MODE: Jf,
  UNDERSCORE_IDENT_RE: Zr,
  UNDERSCORE_TITLE_MODE: ep
});
function rp(e, t) {
  e.input[e.index - 1] === "." && t.ignoreMatch();
}
function ip(e, t) {
  e.className !== void 0 && (e.scope = e.className, delete e.className);
}
function ap(e, t) {
  t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = rp, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
}
function sp(e, t) {
  Array.isArray(e.illegal) && (e.illegal = Gr(...e.illegal));
}
function op(e, t) {
  if (e.match) {
    if (e.begin || e.end) throw new Error("begin & end are not supported with match");
    e.begin = e.match, delete e.match;
  }
}
function lp(e, t) {
  e.relevance === void 0 && (e.relevance = 1);
}
const cp = (e, t) => {
  if (!e.beforeMatch) return;
  if (e.starts) throw new Error("beforeMatch cannot be used with starts");
  const n = Object.assign({}, e);
  Object.keys(e).forEach((r) => {
    delete e[r];
  }), e.keywords = n.keywords, e.begin = Rt(n.beforeMatch, Us(n.begin)), e.starts = {
    relevance: 0,
    contains: [
      Object.assign(n, { endsParent: !0 })
    ]
  }, e.relevance = 0, delete n.beforeMatch;
}, up = [
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
], dp = "keyword";
function Ks(e, t, n = dp) {
  const r = /* @__PURE__ */ Object.create(null);
  return typeof e == "string" ? i(n, e.split(" ")) : Array.isArray(e) ? i(n, e) : Object.keys(e).forEach(function(a) {
    Object.assign(
      r,
      Ks(e[a], t, a)
    );
  }), r;
  function i(a, s) {
    t && (s = s.map((o) => o.toLowerCase())), s.forEach(function(o) {
      const l = o.split("|");
      r[l[0]] = [a, fp(l[0], l[1])];
    });
  }
}
function fp(e, t) {
  return t ? Number(t) : pp(e) ? 0 : 1;
}
function pp(e) {
  return up.includes(e.toLowerCase());
}
const Ci = {}, Nt = (e) => {
  console.error(e);
}, Ri = (e, ...t) => {
  console.log(`WARN: ${e}`, ...t);
}, Lt = (e, t) => {
  Ci[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), Ci[`${e}/${t}`] = !0);
}, Pn = new Error();
function Gs(e, t, { key: n }) {
  let r = 0;
  const i = e[n], a = {}, s = {};
  for (let o = 1; o <= t.length; o++)
    s[o + r] = i[o], a[o + r] = !0, r += $s(t[o - 1]);
  e[n] = s, e[n]._emit = a, e[n]._multi = !0;
}
function gp(e) {
  if (Array.isArray(e.begin)) {
    if (e.skip || e.excludeBegin || e.returnBegin)
      throw Nt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Pn;
    if (typeof e.beginScope != "object" || e.beginScope === null)
      throw Nt("beginScope must be object"), Pn;
    Gs(e, e.begin, { key: "beginScope" }), e.begin = Wr(e.begin, { joinWith: "" });
  }
}
function mp(e) {
  if (Array.isArray(e.end)) {
    if (e.skip || e.excludeEnd || e.returnEnd)
      throw Nt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Pn;
    if (typeof e.endScope != "object" || e.endScope === null)
      throw Nt("endScope must be object"), Pn;
    Gs(e, e.end, { key: "endScope" }), e.end = Wr(e.end, { joinWith: "" });
  }
}
function hp(e) {
  e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
}
function bp(e) {
  hp(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), gp(e), mp(e);
}
function _p(e) {
  function t(s, o) {
    return new RegExp(
      fn(s),
      "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (o ? "g" : "")
    );
  }
  class n {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(o, l) {
      l.position = this.position++, this.matchIndexes[this.matchAt] = l, this.regexes.push([l, o]), this.matchAt += $s(o) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const o = this.regexes.map((l) => l[1]);
      this.matcherRe = t(Wr(o, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(o) {
      this.matcherRe.lastIndex = this.lastIndex;
      const l = this.matcherRe.exec(o);
      if (!l)
        return null;
      const c = l.findIndex((d, f) => f > 0 && d !== void 0), u = this.matchIndexes[c];
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
      ip,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      op,
      bp,
      cp
    ].forEach((u) => u(s, o)), e.compilerExtensions.forEach((u) => u(s, o)), s.__beforeBegin = null, [
      ap,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      sp,
      // default to 1 relevance if not specified
      lp
    ].forEach((u) => u(s, o)), s.isCompiled = !0;
    let c = null;
    return typeof s.keywords == "object" && s.keywords.$pattern && (s.keywords = Object.assign({}, s.keywords), c = s.keywords.$pattern, delete s.keywords.$pattern), c = c || /\w+/, s.keywords && (s.keywords = Ks(s.keywords, e.case_insensitive)), l.keywordPatternRe = t(c, !0), o && (s.begin || (s.begin = /\B|\b/), l.beginRe = t(l.begin), !s.end && !s.endsWithParent && (s.end = /\B|\b/), s.end && (l.endRe = t(l.end)), l.terminatorEnd = fn(l.end) || "", s.endsWithParent && o.terminatorEnd && (l.terminatorEnd += (s.end ? "|" : "") + o.terminatorEnd)), s.illegal && (l.illegalRe = t(
      /** @type {RegExp | string} */
      s.illegal
    )), s.contains || (s.contains = []), s.contains = [].concat(...s.contains.map(function(u) {
      return yp(u === "self" ? s : u);
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
  return e.classNameAliases = pt(e.classNameAliases || {}), a(
    /** @type Mode */
    e
  );
}
function Ws(e) {
  return e ? e.endsWithParent || Ws(e.starts) : !1;
}
function yp(e) {
  return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
    return pt(e, { variants: null }, t);
  })), e.cachedVariants ? e.cachedVariants : Ws(e) ? pt(e, { starts: e.starts ? pt(e.starts) : null }) : Object.isFrozen(e) ? pt(e) : e;
}
var Ep = "11.11.1";
class vp extends Error {
  constructor(t, n) {
    super(t), this.name = "HTMLInjectionError", this.html = n;
  }
}
const ur = Bs, Ii = pt, Mi = Symbol("nomatch"), wp = 7, Zs = function(e) {
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
    __emitter: Df
  };
  function l(S) {
    return o.noHighlightRe.test(S);
  }
  function c(S) {
    let P = S.className + " ";
    P += S.parentNode ? S.parentNode.className : "";
    const C = o.languageDetectRe.exec(P);
    if (C) {
      const W = G(C[1]);
      return W || (Ri(a.replace("{}", C[1])), Ri("Falling back to no-highlight mode for this block.", S)), W ? C[1] : "no-highlight";
    }
    return P.split(/\s+/).find((W) => l(W) || G(W));
  }
  function u(S, P, C) {
    let W = "", ee = "";
    typeof P == "object" ? (W = S, C = P.ignoreIllegals, ee = P.language) : (Lt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Lt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), ee = S, W = P), C === void 0 && (C = !0);
    const ae = {
      code: W,
      language: ee
    };
    Y("before:highlight", ae);
    const de = ae.result ? ae.result : d(ae.language, ae.code, C);
    return de.code = ae.code, Y("after:highlight", de), de;
  }
  function d(S, P, C, W) {
    const ee = /* @__PURE__ */ Object.create(null);
    function ae(x, R) {
      return x.keywords[R];
    }
    function de() {
      if (!q.keywords) {
        g.addText(b);
        return;
      }
      let x = 0;
      q.keywordPatternRe.lastIndex = 0;
      let R = q.keywordPatternRe.exec(b), $ = "";
      for (; R; ) {
        $ += b.substring(x, R.index);
        const te = Ae.case_insensitive ? R[0].toLowerCase() : R[0], fe = ae(q, te);
        if (fe) {
          const [Ee, nr] = fe;
          if (g.addText($), $ = "", ee[te] = (ee[te] || 0) + 1, ee[te] <= wp && (w += nr), Ee.startsWith("_"))
            $ += R[0];
          else {
            const Qt = Ae.classNameAliases[Ee] || Ee;
            Se(R[0], Qt);
          }
        } else
          $ += R[0];
        x = q.keywordPatternRe.lastIndex, R = q.keywordPatternRe.exec(b);
      }
      $ += b.substring(x), g.addText($);
    }
    function Ne() {
      if (b === "") return;
      let x = null;
      if (typeof q.subLanguage == "string") {
        if (!t[q.subLanguage]) {
          g.addText(b);
          return;
        }
        x = d(q.subLanguage, b, !0, xt[q.subLanguage]), xt[q.subLanguage] = /** @type {CompiledMode} */
        x._top;
      } else
        x = m(b, q.subLanguage.length ? q.subLanguage : null);
      q.relevance > 0 && (w += x.relevance), g.__addSublanguage(x._emitter, x.language);
    }
    function we() {
      q.subLanguage != null ? Ne() : de(), b = "";
    }
    function Se(x, R) {
      x !== "" && (g.startScope(R), g.addText(x), g.endScope());
    }
    function st(x, R) {
      let $ = 1;
      const te = R.length - 1;
      for (; $ <= te; ) {
        if (!x._emit[$]) {
          $++;
          continue;
        }
        const fe = Ae.classNameAliases[x[$]] || x[$], Ee = R[$];
        fe ? Se(Ee, fe) : (b = Ee, de(), b = ""), $++;
      }
    }
    function ot(x, R) {
      return x.scope && typeof x.scope == "string" && g.openNode(Ae.classNameAliases[x.scope] || x.scope), x.beginScope && (x.beginScope._wrap ? (Se(b, Ae.classNameAliases[x.beginScope._wrap] || x.beginScope._wrap), b = "") : x.beginScope._multi && (st(x.beginScope, R), b = "")), q = Object.create(x, { parent: { value: q } }), q;
    }
    function lt(x, R, $) {
      let te = Bf(x.endRe, $);
      if (te) {
        if (x["on:end"]) {
          const fe = new Ni(x);
          x["on:end"](R, fe), fe.isMatchIgnored && (te = !1);
        }
        if (te) {
          for (; x.endsParent && x.parent; )
            x = x.parent;
          return x;
        }
      }
      if (x.endsWithParent)
        return lt(x.parent, R, $);
    }
    function Et(x) {
      return q.matcher.regexIndex === 0 ? (b += x[0], 1) : (A = !0, 0);
    }
    function vt(x) {
      const R = x[0], $ = x.rule, te = new Ni($), fe = [$.__beforeBegin, $["on:begin"]];
      for (const Ee of fe)
        if (Ee && (Ee(x, te), te.isMatchIgnored))
          return Et(R);
      return $.skip ? b += R : ($.excludeBegin && (b += R), we(), !$.returnBegin && !$.excludeBegin && (b = R)), ot($, x), $.returnBegin ? 0 : R.length;
    }
    function Xt(x) {
      const R = x[0], $ = P.substring(x.index), te = lt(q, x, $);
      if (!te)
        return Mi;
      const fe = q;
      q.endScope && q.endScope._wrap ? (we(), Se(R, q.endScope._wrap)) : q.endScope && q.endScope._multi ? (we(), st(q.endScope, x)) : fe.skip ? b += R : (fe.returnEnd || fe.excludeEnd || (b += R), we(), fe.excludeEnd && (b = R));
      do
        q.scope && g.closeNode(), !q.skip && !q.subLanguage && (w += q.relevance), q = q.parent;
      while (q !== te.parent);
      return te.starts && ot(te.starts, x), fe.returnEnd ? 0 : R.length;
    }
    function It() {
      const x = [];
      for (let R = q; R !== Ae; R = R.parent)
        R.scope && x.unshift(R.scope);
      x.forEach((R) => g.openNode(R));
    }
    let ct = {};
    function wt(x, R) {
      const $ = R && R[0];
      if (b += x, $ == null)
        return we(), 0;
      if (ct.type === "begin" && R.type === "end" && ct.index === R.index && $ === "") {
        if (b += P.slice(R.index, R.index + 1), !i) {
          const te = new Error(`0 width match regex (${S})`);
          throw te.languageName = S, te.badRule = ct.rule, te;
        }
        return 1;
      }
      if (ct = R, R.type === "begin")
        return vt(R);
      if (R.type === "illegal" && !C) {
        const te = new Error('Illegal lexeme "' + $ + '" for mode "' + (q.scope || "<unnamed>") + '"');
        throw te.mode = q, te;
      } else if (R.type === "end") {
        const te = Xt(R);
        if (te !== Mi)
          return te;
      }
      if (R.type === "illegal" && $ === "")
        return b += `
`, 1;
      if (I > 1e5 && I > R.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return b += $, $.length;
    }
    const Ae = G(S);
    if (!Ae)
      throw Nt(a.replace("{}", S)), new Error('Unknown language: "' + S + '"');
    const le = _p(Ae);
    let Ge = "", q = W || le;
    const xt = {}, g = new o.__emitter(o);
    It();
    let b = "", w = 0, L = 0, I = 0, A = !1;
    try {
      if (Ae.__emitTokens)
        Ae.__emitTokens(P, g);
      else {
        for (q.matcher.considerAll(); ; ) {
          I++, A ? A = !1 : q.matcher.considerAll(), q.matcher.lastIndex = L;
          const x = q.matcher.exec(P);
          if (!x) break;
          const R = P.substring(L, x.index), $ = wt(R, x);
          L = x.index + $;
        }
        wt(P.substring(L));
      }
      return g.finalize(), Ge = g.toHTML(), {
        language: S,
        value: Ge,
        relevance: w,
        illegal: !1,
        _emitter: g,
        _top: q
      };
    } catch (x) {
      if (x.message && x.message.includes("Illegal"))
        return {
          language: S,
          value: ur(P),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: x.message,
            index: L,
            context: P.slice(L - 100, L + 100),
            mode: x.mode,
            resultSoFar: Ge
          },
          _emitter: g
        };
      if (i)
        return {
          language: S,
          value: ur(P),
          illegal: !1,
          relevance: 0,
          errorRaised: x,
          _emitter: g,
          _top: q
        };
      throw x;
    }
  }
  function f(S) {
    const P = {
      value: ur(S),
      illegal: !1,
      relevance: 0,
      _top: s,
      _emitter: new o.__emitter(o)
    };
    return P._emitter.addText(S), P;
  }
  function m(S, P) {
    P = P || o.languages || Object.keys(t);
    const C = f(S), W = P.filter(G).filter(v).map(
      (we) => d(we, S, !1)
    );
    W.unshift(C);
    const ee = W.sort((we, Se) => {
      if (we.relevance !== Se.relevance) return Se.relevance - we.relevance;
      if (we.language && Se.language) {
        if (G(we.language).supersetOf === Se.language)
          return 1;
        if (G(Se.language).supersetOf === we.language)
          return -1;
      }
      return 0;
    }), [ae, de] = ee, Ne = ae;
    return Ne.secondBest = de, Ne;
  }
  function p(S, P, C) {
    const W = P && n[P] || C;
    S.classList.add("hljs"), S.classList.add(`language-${W}`);
  }
  function h(S) {
    let P = null;
    const C = c(S);
    if (l(C)) return;
    if (Y(
      "before:highlightElement",
      { el: S, language: C }
    ), S.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", S);
      return;
    }
    if (S.children.length > 0 && (o.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(S)), o.throwUnescapedHTML))
      throw new vp(
        "One of your code blocks includes unescaped HTML.",
        S.innerHTML
      );
    P = S;
    const W = P.textContent, ee = C ? u(W, { language: C, ignoreIllegals: !0 }) : m(W);
    S.innerHTML = ee.value, S.dataset.highlighted = "yes", p(S, C, ee.language), S.result = {
      language: ee.language,
      // TODO: remove with version 11.0
      re: ee.relevance,
      relevance: ee.relevance
    }, ee.secondBest && (S.secondBest = {
      language: ee.secondBest.language,
      relevance: ee.secondBest.relevance
    }), Y("after:highlightElement", { el: S, result: ee, text: W });
  }
  function _(S) {
    o = Ii(o, S);
  }
  const y = () => {
    T(), Lt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function E() {
    T(), Lt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let N = !1;
  function T() {
    function S() {
      T();
    }
    if (document.readyState === "loading") {
      N || window.addEventListener("DOMContentLoaded", S, !1), N = !0;
      return;
    }
    document.querySelectorAll(o.cssSelector).forEach(h);
  }
  function M(S, P) {
    let C = null;
    try {
      C = P(e);
    } catch (W) {
      if (Nt("Language definition for '{}' could not be registered.".replace("{}", S)), i)
        Nt(W);
      else
        throw W;
      C = s;
    }
    C.name || (C.name = S), t[S] = C, C.rawDefinition = P.bind(null, e), C.aliases && U(C.aliases, { languageName: S });
  }
  function F(S) {
    delete t[S];
    for (const P of Object.keys(n))
      n[P] === S && delete n[P];
  }
  function j() {
    return Object.keys(t);
  }
  function G(S) {
    return S = (S || "").toLowerCase(), t[S] || t[n[S]];
  }
  function U(S, { languageName: P }) {
    typeof S == "string" && (S = [S]), S.forEach((C) => {
      n[C.toLowerCase()] = P;
    });
  }
  function v(S) {
    const P = G(S);
    return P && !P.disableAutodetect;
  }
  function ie(S) {
    S["before:highlightBlock"] && !S["before:highlightElement"] && (S["before:highlightElement"] = (P) => {
      S["before:highlightBlock"](
        Object.assign({ block: P.el }, P)
      );
    }), S["after:highlightBlock"] && !S["after:highlightElement"] && (S["after:highlightElement"] = (P) => {
      S["after:highlightBlock"](
        Object.assign({ block: P.el }, P)
      );
    });
  }
  function K(S) {
    ie(S), r.push(S);
  }
  function Z(S) {
    const P = r.indexOf(S);
    P !== -1 && r.splice(P, 1);
  }
  function Y(S, P) {
    const C = S;
    r.forEach(function(W) {
      W[C] && W[C](P);
    });
  }
  function re(S) {
    return Lt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Lt("10.7.0", "Please use highlightElement now."), h(S);
  }
  Object.assign(e, {
    highlight: u,
    highlightAuto: m,
    highlightAll: T,
    highlightElement: h,
    // TODO: Remove with v12 API
    highlightBlock: re,
    configure: _,
    initHighlighting: y,
    initHighlightingOnLoad: E,
    registerLanguage: M,
    unregisterLanguage: F,
    listLanguages: j,
    getLanguage: G,
    registerAliases: U,
    autoDetection: v,
    inherit: Ii,
    addPlugin: K,
    removePlugin: Z
  }), e.debugMode = function() {
    i = !1;
  }, e.safeMode = function() {
    i = !0;
  }, e.versionString = Ep, e.regex = {
    concat: Rt,
    lookahead: Us,
    either: Gr,
    optional: Pf,
    anyNumberOfTimes: Lf
  };
  for (const S in Rn)
    typeof Rn[S] == "object" && Fs(Rn[S]);
  return Object.assign(e, Rn), e;
}, Kt = Zs({});
Kt.newInstance = () => Zs({});
var xp = Kt;
Kt.HighlightJS = Kt;
Kt.default = Kt;
const kp = /* @__PURE__ */ xa(xp), Di = {}, Sp = "hljs-";
function Tp(e) {
  const t = kp.newInstance();
  return e && a(e), {
    highlight: n,
    highlightAuto: r,
    listLanguages: i,
    register: a,
    registerAlias: s,
    registered: o
  };
  function n(l, c, u) {
    const d = u || Di, f = typeof d.prefix == "string" ? d.prefix : Sp;
    if (!t.getLanguage(l))
      throw new Error("Unknown language: `" + l + "` is not registered");
    t.configure({ __emitter: Np, classPrefix: f });
    const m = (
      /** @type {HighlightResult & {_emitter: HastEmitter}} */
      t.highlight(c, { ignoreIllegals: !0, language: l })
    );
    if (m.errorRaised)
      throw new Error("Could not highlight with `Highlight.js`", {
        cause: m.errorRaised
      });
    const p = m._emitter.root, h = (
      /** @type {RootData} */
      p.data
    );
    return h.language = m.language, h.relevance = m.relevance, p;
  }
  function r(l, c) {
    const d = (c || Di).subset || i();
    let f = -1, m = 0, p;
    for (; ++f < d.length; ) {
      const h = d[f];
      if (!t.getLanguage(h)) continue;
      const _ = n(h, l, c);
      _.data && _.data.relevance !== void 0 && _.data.relevance > m && (m = _.data.relevance, p = _);
    }
    return p || {
      type: "root",
      children: [],
      data: { language: void 0, relevance: m }
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
class Np {
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
const qs = [], Ap = !0, xr = !1, Op = "skip";
function Ys(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = xn(i), s = r ? -1 : 1;
  o(e, void 0, [])();
  function o(l, c, u) {
    const d = (
      /** @type {Record<string, unknown>} */
      l && typeof l == "object" ? l : {}
    );
    if (typeof d.type == "string") {
      const m = (
        // `hast`
        typeof d.tagName == "string" ? d.tagName : (
          // `xast`
          typeof d.name == "string" ? d.name : void 0
        )
      );
      Object.defineProperty(f, "name", {
        value: "node (" + (l.type + (m ? "<" + m + ">" : "")) + ")"
      });
    }
    return f;
    function f() {
      let m = qs, p, h, _;
      if ((!t || a(l, c, u[u.length - 1] || void 0)) && (m = Cp(n(l, u)), m[0] === xr))
        return m;
      if ("children" in l && l.children) {
        const y = (
          /** @type {UnistParent} */
          l
        );
        if (y.children && m[0] !== Op)
          for (h = (r ? y.children.length : -1) + s, _ = u.concat(y); h > -1 && h < y.children.length; ) {
            const E = y.children[h];
            if (p = o(E, h, _)(), p[0] === xr)
              return p;
            h = typeof p[1] == "number" ? p[1] : h + s;
          }
      }
      return m;
    }
  }
}
function Cp(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Ap, e] : e == null ? qs : [e];
}
function Xs(e, t, n, r) {
  let i, a, s;
  typeof t == "function" && typeof n != "function" ? (a = void 0, s = t, i = n) : (a = t, s = n, i = r), Ys(e, a, o, i);
  function o(l, c) {
    const u = c[c.length - 1], d = u ? u.children.indexOf(l) : void 0;
    return s(l, d, u);
  }
}
const Rp = {};
function Ip(e) {
  const t = e || Rp, n = t.aliases, r = t.detect || !1, i = t.languages || Cf, a = t.plainText, s = t.prefix, o = t.subset;
  let l = "hljs";
  const c = Tp(i);
  if (n && c.registerAlias(n), s) {
    const u = s.indexOf("-");
    l = u === -1 ? s : s.slice(0, u);
  }
  return function(u, d) {
    Xs(u, "element", function(f, m, p) {
      if (f.tagName !== "code" || !p || p.type !== "element" || p.tagName !== "pre")
        return;
      const h = Mp(f);
      if (h === !1 || !h && !r || h && a && a.includes(h))
        return;
      Array.isArray(f.properties.className) || (f.properties.className = []), f.properties.className.includes(l) || f.properties.className.unshift(l);
      const _ = nd(f, { whitespace: "pre" });
      let y;
      try {
        y = h ? c.highlight(h, _, { prefix: s }) : c.highlightAuto(_, { prefix: s, subset: o });
      } catch (E) {
        const N = (
          /** @type {Error} */
          E
        );
        if (h && /Unknown language/.test(N.message)) {
          d.message(
            "Cannot highlight as `" + h + "`, it’s not registered",
            {
              ancestors: [p, f],
              cause: N,
              place: f.position,
              ruleId: "missing-language",
              source: "rehype-highlight"
            }
          );
          return;
        }
        throw N;
      }
      !h && y.data && y.data.language && f.properties.className.push("language-" + y.data.language), y.children.length > 0 && (f.children = /** @type {Array<ElementContent>} */
      y.children);
    });
  };
}
function Mp(e) {
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
function Li(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
const gn = yt(/[A-Za-z]/), qr = yt(/[\dA-Za-z]/), Cb = yt(/[#-'*+\--9=?A-Z^-~]/);
function Dp(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Rb = yt(/\d/), Ib = yt(/[\dA-Fa-f]/), Mb = yt(/[!-/:-@[-`{-~]/);
function Vt(e) {
  return e !== null && e < -2;
}
function Le(e) {
  return e !== null && (e < 0 || e === 32);
}
function et(e) {
  return e === -2 || e === -1 || e === 32;
}
const er = yt(new RegExp("\\p{P}|\\p{S}", "u")), At = yt(/\s/);
function yt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Lp(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Pp(e, t, n) {
  const i = xn((n || {}).ignore || []), a = Fp(t);
  let s = -1;
  for (; ++s < a.length; )
    Ys(e, "text", o);
  function o(c, u) {
    let d = -1, f;
    for (; ++d < u.length; ) {
      const m = u[d], p = f ? f.children : void 0;
      if (i(
        m,
        p ? p.indexOf(m) : void 0,
        f
      ))
        return;
      f = m;
    }
    if (f)
      return l(c, u);
  }
  function l(c, u) {
    const d = u[u.length - 1], f = a[s][0], m = a[s][1];
    let p = 0;
    const _ = d.children.indexOf(c);
    let y = !1, E = [];
    f.lastIndex = 0;
    let N = f.exec(c.value);
    for (; N; ) {
      const T = N.index, M = {
        index: N.index,
        input: N.input,
        stack: [...u, c]
      };
      let F = m(...N, M);
      if (typeof F == "string" && (F = F.length > 0 ? { type: "text", value: F } : void 0), F === !1 ? f.lastIndex = T + 1 : (p !== T && E.push({
        type: "text",
        value: c.value.slice(p, T)
      }), Array.isArray(F) ? E.push(...F) : F && E.push(F), p = T + N[0].length, y = !0), !f.global)
        break;
      N = f.exec(c.value);
    }
    return y ? (p < c.value.length && E.push({ type: "text", value: c.value.slice(p) }), d.children.splice(_, 1, ...E)) : E = [c], _ + E.length;
  }
}
function Fp(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Bp(i[0]), Up(i[1])]);
  }
  return t;
}
function Bp(e) {
  return typeof e == "string" ? new RegExp(Lp(e), "g") : e;
}
function Up(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const dr = "phrasing", fr = ["autolink", "link", "image", "label"];
function $p() {
  return {
    transforms: [Wp],
    enter: {
      literalAutolink: Hp,
      literalAutolinkEmail: pr,
      literalAutolinkHttp: pr,
      literalAutolinkWww: pr
    },
    exit: {
      literalAutolink: Gp,
      literalAutolinkEmail: Kp,
      literalAutolinkHttp: Vp,
      literalAutolinkWww: jp
    }
  };
}
function zp() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: dr,
        notInConstruct: fr
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: dr,
        notInConstruct: fr
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: dr,
        notInConstruct: fr
      }
    ]
  };
}
function Hp(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function pr(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Vp(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function jp(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Kp(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Gp(e) {
  this.exit(e);
}
function Wp(e) {
  Pp(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Zp],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), qp]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Zp(e, t, n, r, i) {
  let a = "";
  if (!Qs(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !Yp(n)))
    return !1;
  const s = Xp(n + r);
  if (!s[0]) return !1;
  const o = {
    type: "link",
    title: null,
    url: a + t + s[0],
    children: [{ type: "text", value: t + s[0] }]
  };
  return s[1] ? [o, { type: "text", value: s[1] }] : o;
}
function qp(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Qs(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Yp(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Xp(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Li(e, "(");
  let a = Li(e, ")");
  for (; r !== -1 && i > a; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
  return [e, n];
}
function Qs(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || At(n) || er(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
function kn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
Js.peek = sg;
function Qp() {
  this.buffer();
}
function Jp(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function eg() {
  this.buffer();
}
function tg(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function ng(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = kn(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function rg(e) {
  this.exit(e);
}
function ig(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = kn(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function ag(e) {
  this.exit(e);
}
function sg() {
  return "[";
}
function Js(e, t, n, r) {
  const i = n.createTracker(r);
  let a = i.move("[^");
  const s = n.enter("footnoteReference"), o = n.enter("reference");
  return a += i.move(
    n.safe(n.associationId(e), { after: "]", before: a })
  ), o(), s(), a += i.move("]"), a;
}
function og() {
  return {
    enter: {
      gfmFootnoteCallString: Qp,
      gfmFootnoteCall: Jp,
      gfmFootnoteDefinitionLabelString: eg,
      gfmFootnoteDefinition: tg
    },
    exit: {
      gfmFootnoteCallString: ng,
      gfmFootnoteCall: rg,
      gfmFootnoteDefinitionLabelString: ig,
      gfmFootnoteDefinition: ag
    }
  };
}
function lg(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Js },
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
        t ? eo : cg
      )
    )), c(), l;
  }
}
function cg(e, t, n) {
  return t === 0 ? e : eo(e, t, n);
}
function eo(e, t, n) {
  return (n ? "" : "    ") + e;
}
const ug = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
to.peek = mg;
function dg() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: pg },
    exit: { strikethrough: gg }
  };
}
function fg() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: ug
      }
    ],
    handlers: { delete: to }
  };
}
function pg(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function gg(e) {
  this.exit(e);
}
function to(e, t, n, r) {
  const i = n.createTracker(r), a = n.enter("strikethrough");
  let s = i.move("~~");
  return s += n.containerPhrasing(e, {
    ...i.current(),
    before: s,
    after: "~"
  }), s += i.move("~~"), a(), s;
}
function mg() {
  return "~";
}
function hg(e) {
  return e.length;
}
function bg(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || hg, a = [], s = [], o = [], l = [];
  let c = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], _ = [];
    let y = -1;
    for (e[u].length > c && (c = e[u].length); ++y < e[u].length; ) {
      const E = _g(e[u][y]);
      if (n.alignDelimiters !== !1) {
        const N = i(E);
        _[y] = N, (l[y] === void 0 || N > l[y]) && (l[y] = N);
      }
      h.push(E);
    }
    s[u] = h, o[u] = _;
  }
  let d = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++d < c; )
      a[d] = Pi(r[d]);
  else {
    const h = Pi(r);
    for (; ++d < c; )
      a[d] = h;
  }
  d = -1;
  const f = [], m = [];
  for (; ++d < c; ) {
    const h = a[d];
    let _ = "", y = "";
    h === 99 ? (_ = ":", y = ":") : h === 108 ? _ = ":" : h === 114 && (y = ":");
    let E = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      l[d] - _.length - y.length
    );
    const N = _ + "-".repeat(E) + y;
    n.alignDelimiters !== !1 && (E = _.length + E + y.length, E > l[d] && (l[d] = E), m[d] = E), f[d] = N;
  }
  s.splice(1, 0, f), o.splice(1, 0, m), u = -1;
  const p = [];
  for (; ++u < s.length; ) {
    const h = s[u], _ = o[u];
    d = -1;
    const y = [];
    for (; ++d < c; ) {
      const E = h[d] || "";
      let N = "", T = "";
      if (n.alignDelimiters !== !1) {
        const M = l[d] - (_[d] || 0), F = a[d];
        F === 114 ? N = " ".repeat(M) : F === 99 ? M % 2 ? (N = " ".repeat(M / 2 + 0.5), T = " ".repeat(M / 2 - 0.5)) : (N = " ".repeat(M / 2), T = N) : T = " ".repeat(M);
      }
      n.delimiterStart !== !1 && !d && y.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && E === "") && (n.delimiterStart !== !1 || d) && y.push(" "), n.alignDelimiters !== !1 && y.push(N), y.push(E), n.alignDelimiters !== !1 && y.push(T), n.padding !== !1 && y.push(" "), (n.delimiterEnd !== !1 || d !== c - 1) && y.push("|");
    }
    p.push(
      n.delimiterEnd === !1 ? y.join("").replace(/ +$/, "") : y.join("")
    );
  }
  return p.join(`
`);
}
function _g(e) {
  return e == null ? "" : String(e);
}
function Pi(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function yg(e, t, n, r) {
  const i = n.enter("blockquote"), a = n.createTracker(r);
  a.move("> "), a.shift(2);
  const s = n.indentLines(
    n.containerFlow(e, a.current()),
    Eg
  );
  return i(), s;
}
function Eg(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function vg(e, t) {
  return Fi(e, t.inConstruct, !0) && !Fi(e, t.notInConstruct, !1);
}
function Fi(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Bi(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && vg(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function wg(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, a = 0, s = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++a > s && (s = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
  return s;
}
function xg(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function kg(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Sg(e, t, n, r) {
  const i = kg(n), a = e.value || "", s = i === "`" ? "GraveAccent" : "Tilde";
  if (xg(e, n)) {
    const d = n.enter("codeIndented"), f = n.indentLines(a, Tg);
    return d(), f;
  }
  const o = n.createTracker(r), l = i.repeat(Math.max(wg(a, i) + 1, 3)), c = n.enter("codeFenced");
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
function Tg(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Yr(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Ng(e, t, n, r) {
  const i = Yr(n), a = i === '"' ? "Quote" : "Apostrophe", s = n.enter("definition");
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
function Ag(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function mn(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Fn(e) {
  if (e === null || Le(e) || At(e))
    return 1;
  if (er(e))
    return 2;
}
function Bn(e, t, n) {
  const r = Fn(e), i = Fn(t);
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
no.peek = Og;
function no(e, t, n, r) {
  const i = Ag(n), a = n.enter("emphasis"), s = n.createTracker(r), o = s.move(i);
  let l = s.move(
    n.containerPhrasing(e, {
      after: i,
      before: o,
      ...s.current()
    })
  );
  const c = l.charCodeAt(0), u = Bn(
    r.before.charCodeAt(r.before.length - 1),
    c,
    i
  );
  u.inside && (l = mn(c) + l.slice(1));
  const d = l.charCodeAt(l.length - 1), f = Bn(r.after.charCodeAt(0), d, i);
  f.inside && (l = l.slice(0, -1) + mn(d));
  const m = s.move(i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: f.outside,
    before: u.outside
  }, o + l + m;
}
function Og(e, t, n) {
  return n.options.emphasis || "*";
}
const Cg = {};
function ro(e, t) {
  const n = Cg, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return io(e, r, i);
}
function io(e, t, n) {
  if (Rg(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ui(e.children, t, n);
  }
  return Array.isArray(e) ? Ui(e, t, n) : "";
}
function Ui(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = io(e[i], t, n);
  return r.join("");
}
function Rg(e) {
  return !!(e && typeof e == "object");
}
function Ig(e, t) {
  let n = !1;
  return Xs(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, xr;
  }), !!((!e.depth || e.depth < 3) && ro(e) && (t.options.setext || n));
}
function Mg(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
  if (Ig(e, n)) {
    const u = n.enter("headingSetext"), d = n.enter("phrasing"), f = n.containerPhrasing(e, {
      ...a.current(),
      before: `
`,
      after: `
`
    });
    return d(), u(), f + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      f.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(f.lastIndexOf("\r"), f.lastIndexOf(`
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
  return /^[\t ]/.test(c) && (c = mn(c.charCodeAt(0)) + c.slice(1)), c = c ? s + " " + c : s, n.options.closeAtx && (c += " " + s), l(), o(), c;
}
ao.peek = Dg;
function ao(e) {
  return e.value || "";
}
function Dg() {
  return "<";
}
so.peek = Lg;
function so(e, t, n, r) {
  const i = Yr(n), a = i === '"' ? "Quote" : "Apostrophe", s = n.enter("image");
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
function Lg() {
  return "!";
}
oo.peek = Pg;
function oo(e, t, n, r) {
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
function Pg() {
  return "!";
}
lo.peek = Fg;
function lo(e, t, n) {
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
function Fg() {
  return "`";
}
function co(e, t) {
  const n = ro(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
uo.peek = Bg;
function uo(e, t, n, r) {
  const i = Yr(n), a = i === '"' ? "Quote" : "Apostrophe", s = n.createTracker(r);
  let o, l;
  if (co(e, n)) {
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
function Bg(e, t, n) {
  return co(e, n) ? "<" : "[";
}
fo.peek = Ug;
function fo(e, t, n, r) {
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
function Ug() {
  return "[";
}
function Xr(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function $g(e) {
  const t = Xr(e), n = e.options.bulletOther;
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
function zg(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function po(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Hg(e, t, n, r) {
  const i = n.enter("list"), a = n.bulletCurrent;
  let s = e.ordered ? zg(n) : Xr(n);
  const o = e.ordered ? s === "." ? ")" : "." : $g(n);
  let l = t && n.bulletLastUsed ? s === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const u = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (s === "*" || s === "-") && // Empty first list item:
      u && (!u.children || !u.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (l = !0), po(n) === s && u
    ) {
      let d = -1;
      for (; ++d < e.children.length; ) {
        const f = e.children[d];
        if (f && f.type === "listItem" && f.children && f.children[0] && f.children[0].type === "thematicBreak") {
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
function Vg(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function jg(e, t, n, r) {
  const i = Vg(n);
  let a = n.bulletCurrent || Xr(n);
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
  function u(d, f, m) {
    return f ? (m ? "" : " ".repeat(s)) + d : (m ? a : a + " ".repeat(s - a.length)) + d;
  }
}
function Kg(e, t, n, r) {
  const i = n.enter("paragraph"), a = n.enter("phrasing"), s = n.containerPhrasing(e, r);
  return a(), i(), s;
}
const Gg = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  xn([
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
function Wg(e, t, n, r) {
  return (e.children.some(function(s) {
    return Gg(s);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Zg(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
go.peek = qg;
function go(e, t, n, r) {
  const i = Zg(n), a = n.enter("strong"), s = n.createTracker(r), o = s.move(i + i);
  let l = s.move(
    n.containerPhrasing(e, {
      after: i,
      before: o,
      ...s.current()
    })
  );
  const c = l.charCodeAt(0), u = Bn(
    r.before.charCodeAt(r.before.length - 1),
    c,
    i
  );
  u.inside && (l = mn(c) + l.slice(1));
  const d = l.charCodeAt(l.length - 1), f = Bn(r.after.charCodeAt(0), d, i);
  f.inside && (l = l.slice(0, -1) + mn(d));
  const m = s.move(i + i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: f.outside,
    before: u.outside
  }, o + l + m;
}
function qg(e, t, n) {
  return n.options.strong || "*";
}
function Yg(e, t, n, r) {
  return n.safe(e.value, r);
}
function Xg(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Qg(e, t, n) {
  const r = (po(n) + (n.options.ruleSpaces ? " " : "")).repeat(Xg(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const mo = {
  blockquote: yg,
  break: Bi,
  code: Sg,
  definition: Ng,
  emphasis: no,
  hardBreak: Bi,
  heading: Mg,
  html: ao,
  image: so,
  imageReference: oo,
  inlineCode: lo,
  link: uo,
  linkReference: fo,
  list: Hg,
  listItem: jg,
  paragraph: Kg,
  root: Wg,
  strong: go,
  text: Yg,
  thematicBreak: Qg
};
function Jg() {
  return {
    enter: {
      table: em,
      tableData: $i,
      tableHeader: $i,
      tableRow: nm
    },
    exit: {
      codeText: rm,
      table: tm,
      tableData: gr,
      tableHeader: gr,
      tableRow: gr
    }
  };
}
function em(e) {
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
function tm(e) {
  this.exit(e), this.data.inTable = void 0;
}
function nm(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function gr(e) {
  this.exit(e);
}
function $i(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function rm(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, im));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function im(e, t) {
  return t === "|" ? t : e;
}
function am(e) {
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
      inlineCode: f,
      table: s,
      tableCell: l,
      tableRow: o
    }
  };
  function s(m, p, h, _) {
    return c(u(m, h, _), m.align);
  }
  function o(m, p, h, _) {
    const y = d(m, h, _), E = c([y]);
    return E.slice(0, E.indexOf(`
`));
  }
  function l(m, p, h, _) {
    const y = h.enter("tableCell"), E = h.enter("phrasing"), N = h.containerPhrasing(m, {
      ..._,
      before: a,
      after: a
    });
    return E(), y(), N;
  }
  function c(m, p) {
    return bg(m, {
      align: p,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function u(m, p, h) {
    const _ = m.children;
    let y = -1;
    const E = [], N = p.enter("table");
    for (; ++y < _.length; )
      E[y] = d(_[y], p, h);
    return N(), E;
  }
  function d(m, p, h) {
    const _ = m.children;
    let y = -1;
    const E = [], N = p.enter("tableRow");
    for (; ++y < _.length; )
      E[y] = l(_[y], m, p, h);
    return N(), E;
  }
  function f(m, p, h) {
    let _ = mo.inlineCode(m, p, h);
    return h.stack.includes("tableCell") && (_ = _.replace(/\|/g, "\\$&")), _;
  }
}
function sm() {
  return {
    exit: {
      taskListCheckValueChecked: zi,
      taskListCheckValueUnchecked: zi,
      paragraph: lm
    }
  };
}
function om() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: cm }
  };
}
function zi(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function lm(e) {
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
function cm(e, t, n, r) {
  const i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", s = "[" + (e.checked ? "x" : " ") + "] ", o = n.createTracker(r);
  a && o.move(s);
  let l = mo.listItem(e, t, n, {
    ...r,
    ...o.current()
  });
  return a && (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, c)), l;
  function c(u) {
    return u + s;
  }
}
function um() {
  return [
    $p(),
    og(),
    dg(),
    Jg(),
    sm()
  ];
}
function dm(e) {
  return {
    extensions: [
      zp(),
      lg(e),
      fg(),
      am(e),
      om()
    ]
  };
}
function ln(e, t, n, r) {
  const i = e.length;
  let a = 0, s;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    s = Array.from(r), s.unshift(t, n), e.splice(...s);
  else
    for (n && e.splice(t, n); a < r.length; )
      s = r.slice(a, a + 1e4), s.unshift(t, 0), e.splice(...s), a += 1e4, t += 1e4;
}
function Db(e, t) {
  return e.length > 0 ? (ln(e, e.length, 0, t), e) : t;
}
const Hi = {}.hasOwnProperty;
function fm(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    pm(t, e[n]);
  return t;
}
function pm(e, t) {
  let n;
  for (n in t) {
    const i = (Hi.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let s;
    if (a)
      for (s in a) {
        Hi.call(i, s) || (i[s] = []);
        const o = a[s];
        gm(
          // @ts-expect-error Looks like a list.
          i[s],
          Array.isArray(o) ? o : o ? [o] : []
        );
      }
  }
}
function gm(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  ln(e, 0, 0, r);
}
const mm = {
  tokenize: vm,
  partial: !0
}, ho = {
  tokenize: wm,
  partial: !0
}, bo = {
  tokenize: xm,
  partial: !0
}, _o = {
  tokenize: km,
  partial: !0
}, hm = {
  tokenize: Sm,
  partial: !0
}, yo = {
  name: "wwwAutolink",
  tokenize: ym,
  previous: vo
}, Eo = {
  name: "protocolAutolink",
  tokenize: Em,
  previous: wo
}, at = {
  name: "emailAutolink",
  tokenize: _m,
  previous: xo
}, Qe = {};
function bm() {
  return {
    text: Qe
  };
}
let kt = 48;
for (; kt < 123; )
  Qe[kt] = at, kt++, kt === 58 ? kt = 65 : kt === 91 && (kt = 97);
Qe[43] = at;
Qe[45] = at;
Qe[46] = at;
Qe[95] = at;
Qe[72] = [at, Eo];
Qe[104] = [at, Eo];
Qe[87] = [at, yo];
Qe[119] = [at, yo];
function _m(e, t, n) {
  const r = this;
  let i, a;
  return s;
  function s(d) {
    return !kr(d) || !xo.call(r, r.previous) || Qr(r.events) ? n(d) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), o(d));
  }
  function o(d) {
    return kr(d) ? (e.consume(d), o) : d === 64 ? (e.consume(d), l) : n(d);
  }
  function l(d) {
    return d === 46 ? e.check(hm, u, c)(d) : d === 45 || d === 95 || qr(d) ? (a = !0, e.consume(d), l) : u(d);
  }
  function c(d) {
    return e.consume(d), i = !0, l;
  }
  function u(d) {
    return a && i && gn(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(d)) : n(d);
  }
}
function ym(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return s !== 87 && s !== 119 || !vo.call(r, r.previous) || Qr(r.events) ? n(s) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(mm, e.attempt(ho, e.attempt(bo, a), n), n)(s));
  }
  function a(s) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(s);
  }
}
function Em(e, t, n) {
  const r = this;
  let i = "", a = !1;
  return s;
  function s(d) {
    return (d === 72 || d === 104) && wo.call(r, r.previous) && !Qr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(d), e.consume(d), o) : n(d);
  }
  function o(d) {
    if (gn(d) && i.length < 5)
      return i += String.fromCodePoint(d), e.consume(d), o;
    if (d === 58) {
      const f = i.toLowerCase();
      if (f === "http" || f === "https")
        return e.consume(d), l;
    }
    return n(d);
  }
  function l(d) {
    return d === 47 ? (e.consume(d), a ? c : (a = !0, l)) : n(d);
  }
  function c(d) {
    return d === null || Dp(d) || Le(d) || At(d) || er(d) ? n(d) : e.attempt(ho, e.attempt(bo, u), n)(d);
  }
  function u(d) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(d);
  }
}
function vm(e, t, n) {
  let r = 0;
  return i;
  function i(s) {
    return (s === 87 || s === 119) && r < 3 ? (r++, e.consume(s), i) : s === 46 && r === 3 ? (e.consume(s), a) : n(s);
  }
  function a(s) {
    return s === null ? n(s) : t(s);
  }
}
function wm(e, t, n) {
  let r, i, a;
  return s;
  function s(c) {
    return c === 46 || c === 95 ? e.check(_o, l, o)(c) : c === null || Le(c) || At(c) || c !== 45 && er(c) ? l(c) : (a = !0, e.consume(c), s);
  }
  function o(c) {
    return c === 95 ? r = !0 : (i = r, r = void 0), e.consume(c), s;
  }
  function l(c) {
    return i || r || !a ? n(c) : t(c);
  }
}
function xm(e, t) {
  let n = 0, r = 0;
  return i;
  function i(s) {
    return s === 40 ? (n++, e.consume(s), i) : s === 41 && r < n ? a(s) : s === 33 || s === 34 || s === 38 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 60 || s === 63 || s === 93 || s === 95 || s === 126 ? e.check(_o, t, a)(s) : s === null || Le(s) || At(s) ? t(s) : (e.consume(s), i);
  }
  function a(s) {
    return s === 41 && r++, e.consume(s), i;
  }
}
function km(e, t, n) {
  return r;
  function r(o) {
    return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : (
      // `<` is an end.
      o === 60 || // So is whitespace.
      o === null || Le(o) || At(o) ? t(o) : n(o)
    );
  }
  function i(o) {
    return o === null || o === 40 || o === 91 || Le(o) || At(o) ? t(o) : r(o);
  }
  function a(o) {
    return gn(o) ? s(o) : n(o);
  }
  function s(o) {
    return o === 59 ? (e.consume(o), r) : gn(o) ? (e.consume(o), s) : n(o);
  }
}
function Sm(e, t, n) {
  return r;
  function r(a) {
    return e.consume(a), i;
  }
  function i(a) {
    return qr(a) ? n(a) : t(a);
  }
}
function vo(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Le(e);
}
function wo(e) {
  return !gn(e);
}
function xo(e) {
  return !(e === 47 || kr(e));
}
function kr(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || qr(e);
}
function Qr(e) {
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
function Tm(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
function tt(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return s;
  function s(l) {
    return et(l) ? (e.enter(n), o(l)) : t(l);
  }
  function o(l) {
    return et(l) && a++ < i ? (e.consume(l), o) : (e.exit(n), t(l));
  }
}
const Nm = {
  partial: !0,
  tokenize: Am
};
function Am(e, t, n) {
  return r;
  function r(a) {
    return et(a) ? tt(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || Vt(a) ? t(a) : n(a);
  }
}
const Om = {
  tokenize: Fm,
  partial: !0
};
function Cm() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Dm,
        continuation: {
          tokenize: Lm
        },
        exit: Pm
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Mm
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Rm,
        resolveTo: Im
      }
    }
  };
}
function Rm(e, t, n) {
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
    const c = kn(r.sliceSerialize({
      start: s.end,
      end: r.now()
    }));
    return c.codePointAt(0) !== 94 || !a.includes(c.slice(1)) ? n(l) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l));
  }
}
function Im(e, t) {
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
function Mm(e, t, n) {
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
      d === null || d === 91 || Le(d)
    )
      return n(d);
    if (d === 93) {
      e.exit("chunkString");
      const f = e.exit("gfmFootnoteCallString");
      return i.includes(kn(r.sliceSerialize(f))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(d), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(d);
    }
    return Le(d) || (s = !0), a++, e.consume(d), d === 92 ? u : c;
  }
  function u(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), a++, c) : c(d);
  }
}
function Dm(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a, s = 0, o;
  return l;
  function l(p) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), c;
  }
  function c(p) {
    return p === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(p);
  }
  function u(p) {
    if (
      // Too long.
      s > 999 || // Closing brace with nothing.
      p === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      p === null || p === 91 || Le(p)
    )
      return n(p);
    if (p === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteDefinitionLabelString");
      return a = kn(r.sliceSerialize(h)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
    }
    return Le(p) || (o = !0), s++, e.consume(p), p === 92 ? d : u;
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), s++, u) : u(p);
  }
  function f(p) {
    return p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), i.includes(a) || i.push(a), tt(e, m, "gfmFootnoteDefinitionWhitespace")) : n(p);
  }
  function m(p) {
    return t(p);
  }
}
function Lm(e, t, n) {
  return e.check(Nm, t, e.attempt(Om, t, n));
}
function Pm(e) {
  e.exit("gfmFootnoteDefinition");
}
function Fm(e, t, n) {
  const r = this;
  return tt(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(a) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "gfmFootnoteDefinitionIndent" && s[2].sliceSerialize(s[1], !0).length === 4 ? t(a) : n(a);
  }
}
function Bm(e) {
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
            }, f = [["enter", u, o], ["enter", s[c][1], o], ["exit", s[c][1], o], ["enter", d, o]], m = o.parser.constructs.insideSpan.null;
            m && ln(f, f.length, 0, Tm(m, s.slice(c + 1, l), o)), ln(f, f.length, 0, [["exit", d, o], ["enter", s[l][1], o], ["exit", s[l][1], o], ["exit", u, o]]), ln(s, c - 1, l - c + 3, f), l = c + f.length - 2;
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
    return f;
    function f(p) {
      return c === 126 && u[u.length - 1][1].type !== "characterEscape" ? l(p) : (s.enter("strikethroughSequenceTemporary"), m(p));
    }
    function m(p) {
      const h = Fn(c);
      if (p === 126)
        return d > 1 ? l(p) : (s.consume(p), d++, m);
      if (d < 2 && !n) return l(p);
      const _ = s.exit("strikethroughSequenceTemporary"), y = Fn(p);
      return _._open = !y || y === 2 && !!h, _._close = !h || h === 2 && !!y, o(p);
    }
  }
}
class Um {
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
    $m(this, t, n, r);
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
function $m(e, t, n, r) {
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
function zm(e, t) {
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
function Hm() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Vm,
        resolveAll: jm
      }
    }
  };
}
function Vm(e, t, n) {
  const r = this;
  let i = 0, a = 0, s;
  return o;
  function o(v) {
    let ie = r.events.length - 1;
    for (; ie > -1; ) {
      const Y = r.events[ie][1].type;
      if (Y === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      Y === "linePrefix") ie--;
      else break;
    }
    const K = ie > -1 ? r.events[ie][1].type : null, Z = K === "tableHead" || K === "tableRow" ? F : l;
    return Z === F && r.parser.lazy[r.now().line] ? n(v) : Z(v);
  }
  function l(v) {
    return e.enter("tableHead"), e.enter("tableRow"), c(v);
  }
  function c(v) {
    return v === 124 || (s = !0, a += 1), u(v);
  }
  function u(v) {
    return v === null ? n(v) : Vt(v) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), m) : n(v) : et(v) ? tt(e, u, "whitespace")(v) : (a += 1, s && (s = !1, i += 1), v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), s = !0, u) : (e.enter("data"), d(v)));
  }
  function d(v) {
    return v === null || v === 124 || Le(v) ? (e.exit("data"), u(v)) : (e.consume(v), v === 92 ? f : d);
  }
  function f(v) {
    return v === 92 || v === 124 ? (e.consume(v), d) : d(v);
  }
  function m(v) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(v) : (e.enter("tableDelimiterRow"), s = !1, et(v) ? tt(e, p, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(v) : p(v));
  }
  function p(v) {
    return v === 45 || v === 58 ? _(v) : v === 124 ? (s = !0, e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), h) : M(v);
  }
  function h(v) {
    return et(v) ? tt(e, _, "whitespace")(v) : _(v);
  }
  function _(v) {
    return v === 58 ? (a += 1, s = !0, e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), y) : v === 45 ? (a += 1, y(v)) : v === null || Vt(v) ? T(v) : M(v);
  }
  function y(v) {
    return v === 45 ? (e.enter("tableDelimiterFiller"), E(v)) : M(v);
  }
  function E(v) {
    return v === 45 ? (e.consume(v), E) : v === 58 ? (s = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), N) : (e.exit("tableDelimiterFiller"), N(v));
  }
  function N(v) {
    return et(v) ? tt(e, T, "whitespace")(v) : T(v);
  }
  function T(v) {
    return v === 124 ? p(v) : v === null || Vt(v) ? !s || i !== a ? M(v) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(v)) : M(v);
  }
  function M(v) {
    return n(v);
  }
  function F(v) {
    return e.enter("tableRow"), j(v);
  }
  function j(v) {
    return v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), j) : v === null || Vt(v) ? (e.exit("tableRow"), t(v)) : et(v) ? tt(e, j, "whitespace")(v) : (e.enter("data"), G(v));
  }
  function G(v) {
    return v === null || v === 124 || Le(v) ? (e.exit("data"), j(v)) : (e.consume(v), v === 92 ? U : G);
  }
  function U(v) {
    return v === 92 || v === 124 ? (e.consume(v), G) : G(v);
  }
}
function jm(e, t) {
  let n = -1, r = !0, i = 0, a = [0, 0, 0, 0], s = [0, 0, 0, 0], o = !1, l = 0, c, u, d;
  const f = new Um();
  for (; ++n < e.length; ) {
    const m = e[n], p = m[1];
    m[0] === "enter" ? p.type === "tableHead" ? (o = !1, l !== 0 && (Vi(f, t, l, c, u), u = void 0, l = 0), c = {
      type: "table",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, f.add(n, 0, [["enter", c, t]])) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [0, 0, 0, 0], s = [0, n + 1, 0, 0], o && (o = !1, u = {
      type: "tableBody",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, f.add(n, 0, [["enter", u, t]])), i = p.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") ? (r = !1, s[2] === 0 && (a[1] !== 0 && (s[0] = s[1], d = In(f, t, a, i, void 0, d), a = [0, 0, 0, 0]), s[2] = n)) : p.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (s[0] = s[1], d = In(f, t, a, i, void 0, d)), a = s, s = [a[1], n, 0, 0])) : p.type === "tableHead" ? (o = !0, l = n) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (l = n, a[1] !== 0 ? (s[0] = s[1], d = In(f, t, a, i, n, d)) : s[1] !== 0 && (d = In(f, t, s, i, n, d)), i = 0) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") && (s[3] = n);
  }
  for (l !== 0 && Vi(f, t, l, c, u), f.consume(t.events), n = -1; ++n < t.events.length; ) {
    const m = t.events[n];
    m[0] === "enter" && m[1].type === "table" && (m[1]._align = zm(t.events, n));
  }
  return e;
}
function In(e, t, n, r, i, a) {
  const s = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", o = "tableContent";
  n[0] !== 0 && (a.end = Object.assign({}, $t(t.events, n[0])), e.add(n[0], 0, [["exit", a, t]]));
  const l = $t(t.events, n[1]);
  if (a = {
    type: s,
    start: Object.assign({}, l),
    // Note: correct end is set later.
    end: Object.assign({}, l)
  }, e.add(n[1], 0, [["enter", a, t]]), n[2] !== 0) {
    const c = $t(t.events, n[2]), u = $t(t.events, n[3]), d = {
      type: o,
      start: Object.assign({}, c),
      end: Object.assign({}, u)
    };
    if (e.add(n[2], 0, [["enter", d, t]]), r !== 2) {
      const f = t.events[n[2]], m = t.events[n[3]];
      if (f[1].end = Object.assign({}, m[1].end), f[1].type = "chunkText", f[1].contentType = "text", n[3] > n[2] + 1) {
        const p = n[2] + 1, h = n[3] - n[2] - 1;
        e.add(p, h, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", d, t]]);
  }
  return i !== void 0 && (a.end = Object.assign({}, $t(t.events, i)), e.add(i, 0, [["exit", a, t]]), a = void 0), a;
}
function Vi(e, t, n, r, i) {
  const a = [], s = $t(t.events, n);
  i && (i.end = Object.assign({}, s), a.push(["exit", i, t])), r.end = Object.assign({}, s), a.push(["exit", r, t]), e.add(n + 1, 0, a);
}
function $t(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Km = {
  name: "tasklistCheck",
  tokenize: Wm
};
function Gm() {
  return {
    text: {
      91: Km
    }
  };
}
function Wm(e, t, n) {
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
    return Le(l) ? (e.enter("taskListCheckValueUnchecked"), e.consume(l), e.exit("taskListCheckValueUnchecked"), s) : l === 88 || l === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(l), e.exit("taskListCheckValueChecked"), s) : n(l);
  }
  function s(l) {
    return l === 93 ? (e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(l);
  }
  function o(l) {
    return Vt(l) ? t(l) : et(l) ? e.check({
      tokenize: Zm
    }, t, n)(l) : n(l);
  }
}
function Zm(e, t, n) {
  return tt(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function qm(e) {
  return fm([
    bm(),
    Cm(),
    Bm(e),
    Hm(),
    Gm()
  ]);
}
const Ym = {};
function Xm(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || Ym, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), s = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(qm(n)), a.push(um()), s.push(dm(n));
}
const Yt = _t({
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
      [ze.USER]: {
        container: "justify-end",
        dialogContent: "items-end w-full max-w-full",
        contentWrapper: "flex flex-row items-center gap-2",
        message: "bg-primary rounded-2xl text-white px-5 py-2.5 max-w-[36rem] justify-start",
        video: "max-w-[calc(100%-2rem)]"
      },
      [ze.ASSISTANT]: {
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
}), Qm = (e, t) => {
  const n = e.textContent || "";
  return n.trim() ? n : "";
}, Jm = (e) => {
  var l, c;
  const t = [], n = e.querySelector("thead"), r = e.querySelector("tbody") || e;
  if (n) {
    const u = n.querySelectorAll("tr");
    for (const d of u) {
      const f = [];
      for (const m of d.querySelectorAll("th, td"))
        f.push(((l = m.textContent) == null ? void 0 : l.trim()) || "");
      f.length > 0 && t.push(f);
    }
  }
  const i = r.querySelectorAll("tr");
  for (const u of i) {
    if (n != null && n.contains(u))
      continue;
    const d = [];
    for (const f of u.querySelectorAll("th, td"))
      d.push(((c = f.textContent) == null ? void 0 : c.trim()) || "");
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
    for (let f = 1; f < s.length; f++) {
      const m = s[f];
      o.push(`| ${m.join(" | ")} |`);
    }
  }
  return o.join(`
`);
}, Jr = D.memo(
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
    const o = n ? "check" : "copy", l = n ? $e("home.messageDialog.copyButton.copied") : $e("home.messageDialog.copyButton.copy");
    return /* @__PURE__ */ k.jsx("div", { className: X(t), children: /* @__PURE__ */ k.jsx(
      Pr,
      {
        content: /* @__PURE__ */ k.jsx("div", { className: "p-0.5 flex items-center justify-center bg-list-normal-side-nav rounded-md", children: /* @__PURE__ */ k.jsx("span", { className: "text-neutral-1 text-center text-xs", children: l }) }),
        position: rt.Bottom,
        trigger: Ye.Hover,
        children: /* @__PURE__ */ k.jsx(
          qe,
          {
            name: o,
            size: "sm",
            onClick: s,
            className: X(
              "h-8 w-8 flex items-center justify-center rounded-[6px]",
              "transition-all duration-200 ease-in-out",
              "hover:bg-copy-button-hover",
              "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
              "[&_svg]:h-5 [&_svg]:w-5",
              "cursor-pointer",
              i && "opacity-0 transition-opacity duration-150 ease-in-out",
              !i && "opacity-100 transition-opacity duration-150 ease-in-out"
            ),
            iconClassName: X(
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
Jr.displayName = "InlineCopyButton";
const ko = D.memo(
  ({ children: e }) => {
    const t = D.useRef(null), [n, r] = D.useState(""), {
      markdownTableWrapper: i,
      markdownTableContainer: a,
      markdownTableButton: s,
      markdownTable: o
    } = Yt({ role: ze.ASSISTANT });
    return D.useLayoutEffect(() => {
      if (t.current) {
        const l = Jm(t.current);
        r(l);
      }
    }), /* @__PURE__ */ k.jsxs("div", { className: X(i(), "group relative"), children: [
      n && /* @__PURE__ */ k.jsx(
        Jr,
        {
          content: n,
          className: X(
            s(),
            "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          )
        }
      ),
      /* @__PURE__ */ k.jsx("div", { className: X(a()), children: /* @__PURE__ */ k.jsx("table", { ref: t, className: o(), children: e }) })
    ] });
  }
);
ko.displayName = "TableWithCopy";
const So = D.memo(
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
    } = Yt({ role: ze.ASSISTANT });
    return D.useLayoutEffect(() => {
      if (i.current) {
        const f = Qm(i.current);
        s(f);
      }
    }, [n]), /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: X(
          o(),
          l(),
          "group relative"
        ),
        children: [
          a && /* @__PURE__ */ k.jsx(
            Jr,
            {
              content: a,
              className: X(u())
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: X(c()), children: /* @__PURE__ */ k.jsx("pre", { className: X(t, d()), children: /* @__PURE__ */ k.jsx("code", { ref: i, ...r, children: e }) }) })
        ]
      }
    );
  }
);
So.displayName = "CodeBlockWithCopy";
const eh = D.lazy(() => import("./index-DpDjuDtz.js")), To = D.memo(
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
    } = Yt({ role: ze.ASSISTANT });
    return /* @__PURE__ */ k.jsx("div", { className: X(r()), ...n, children: /* @__PURE__ */ k.jsx(
      D.Suspense,
      {
        fallback: /* @__PURE__ */ k.jsx("div", { children: /* @__PURE__ */ k.jsx(Dr, { isLoading: !0, variant: ka.Dots }) }),
        children: /* @__PURE__ */ k.jsx(
          eh,
          {
            skipHtml: !0,
            rehypePlugins: [Ip],
            remarkPlugins: [Xm],
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
                return /* @__PURE__ */ k.jsx(ko, { children: c });
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
              code({ node: c, className: u, children: d, ...f }) {
                const m = /language-(\w+)/.exec(u || "");
                if (m) {
                  const p = m[1];
                  return /* @__PURE__ */ k.jsx(
                    So,
                    {
                      className: u,
                      language: p,
                      ...f,
                      children: d
                    }
                  );
                }
                return /* @__PURE__ */ k.jsx("code", { className: l(), ...f, children: d });
              }
            },
            children: e
          }
        )
      }
    ) });
  }
);
To.displayName = "DialogContentMarkdown";
const No = D.memo(
  ({
    urlImage: e,
    altText: t = "Chatbot PAS Image",
    ...n
  }) => /* @__PURE__ */ k.jsx("img", { src: e, alt: t, ...n })
);
No.displayName = "DialogContentImage";
const Ao = D.memo(
  ({
    urlVideo: e,
    videoTitle: t = "Chatbot PAS Video",
    ...n
  }) => /* @__PURE__ */ k.jsx("div", { ...n, children: /* @__PURE__ */ k.jsx(
    ju,
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
Ao.displayName = "DialogContentVideo";
const th = ({
  message: e,
  role: t
}) => {
  var n, r, i;
  switch (e.type) {
    case nt.TEXT:
      return /* @__PURE__ */ k.jsx(
        To,
        {
          content: ((n = e.text) == null ? void 0 : n.value) || "",
          messageId: e.id
        }
      );
    case nt.IMAGE:
      return /* @__PURE__ */ k.jsx(
        No,
        {
          urlImage: ((r = e.text) == null ? void 0 : r.value) || "",
          altText: $e("home.messageList.sentBy", {
            role: t
          })
        }
      );
    case nt.VIDEO:
      return /* @__PURE__ */ k.jsx(
        Ao,
        {
          urlVideo: ((i = e.text) == null ? void 0 : i.value) || "",
          videoTitle: $e("home.messageList.sentBy", {
            role: t
          })
        }
      );
    default:
      return null;
  }
};
var Oo = /* @__PURE__ */ ((e) => (e.PT_BR = "Português (Brasil)", e.EN_US = "English (US)", e.ES_ES = "Español (ES)", e))(Oo || {});
const nh = nl((e) => ({
  theme: "dark",
  language: br.language || Oo.PT_BR,
  actions: {
    changeTheme: (t) => e({ theme: t }),
    changeLanguage: (t, n) => {
      e({ language: t }), br.changeLanguage(t);
      const r = new FormData();
      r.append("language", t), n.submit(r, { method: "post", action: "/language-session" });
    },
    initializeLanguage: (t) => {
      e({ language: t });
    }
  }
})), rh = () => nh((e) => e.theme), Sr = D.memo(
  ({
    content: e,
    alwaysVisible: t = !1
  }) => {
    const [n, r] = D.useState(!1), [i, a] = D.useState(!1), o = rh() === "light", { copyButton: l, copyButtonWrapper: c, copyIconWrapper: u } = Yt({
      role: ze.ASSISTANT,
      copyAlwaysVisible: t,
      copyIsCopied: n,
      copyIsFading: i
    }), d = D.useCallback(async () => {
      try {
        a(!0), await new Promise((p) => setTimeout(p, 150)), await navigator.clipboard.writeText(e), r(!0), a(!1);
      } catch (p) {
        console.error("Failed to copy content:", p), a(!1);
      }
    }, [e]);
    D.useEffect(() => {
      if (n) {
        const p = setTimeout(() => {
          a(!0), setTimeout(() => {
            r(!1), a(!1);
          }, 150);
        }, 3e3);
        return () => clearTimeout(p);
      }
    }, [n]);
    const f = n ? "check" : "copy", m = n ? $e("home.messageDialog.copyButton.copied") : $e("home.messageDialog.copyButton.copy");
    return /* @__PURE__ */ k.jsx(
      Pr,
      {
        content: /* @__PURE__ */ k.jsx("div", { className: "p-0.5 flex items-center justify-center bg-list-normal-side-nav rounded-md", children: /* @__PURE__ */ k.jsx("span", { className: "text-neutral-1 text-center text-xs", children: m }) }),
        position: rt.Bottom,
        trigger: Ye.Hover,
        children: /* @__PURE__ */ k.jsx("div", { className: X(c()), children: /* @__PURE__ */ k.jsx("div", { className: X(u()), children: /* @__PURE__ */ k.jsx(
          qe,
          {
            name: f,
            size: "sm",
            onClick: d,
            className: X(
              l(),
              // Light theme: white background by default
              o && "bg-white",
              // Light theme hover: black background
              o && "hover:bg-black"
            ),
            colorFill: n ? "fill-white" : "fill-none",
            iconClassName: X(
              n ? "[&_path]:fill-white [&_path]:stroke-none" : o ? "[&_path]:stroke-black [&_path]:fill-none" : "[&_path]:fill-none [&_path]:stroke-white/70",
              // Light theme hover: white SVG
              o && !n && "hover:[&_path]:stroke-white hover:[&_path]:fill-none"
            ),
            "aria-label": m,
            "data-testid": "copy-button",
            "data-copied": n ? "true" : "false"
          }
        ) }) })
      }
    );
  }
);
Sr.displayName = "CopyButtonInternal";
const Co = D.memo(
  ({ message: e, role: t }) => {
    var u;
    const {
      message: n,
      image: r,
      video: i,
      contentWrapper: a
    } = Yt({ role: t }), s = X(
      e.type === nt.TEXT && n(),
      e.type === nt.IMAGE && r(),
      e.type === nt.VIDEO && i()
    ), o = ((u = e.text) == null ? void 0 : u.value) || "", l = o && e.type === nt.TEXT && !e.isInitial, c = t === ze.ASSISTANT;
    return /* @__PURE__ */ k.jsxs("div", { className: X(a()), children: [
      l && !c && /* @__PURE__ */ k.jsx(Sr, { content: o }),
      /* @__PURE__ */ k.jsx("div", { className: s, children: th({ message: e, role: t }) }),
      l && c && /* @__PURE__ */ k.jsx(Sr, { content: o, alwaysVisible: !0 })
    ] }, e.id);
  }
);
Co.displayName = "DialogContent";
const Ro = ({ className: e, message: t }) => {
  const { container: n, dialogContent: r } = Yt({
    role: t.role
  }), i = t.role === ze.ASSISTANT && t.avatar, a = t.role === ze.USER;
  return /* @__PURE__ */ k.jsxs("div", { className: X(n(), a && "group", e), children: [
    i && /* @__PURE__ */ k.jsx(Lr, { ...t.avatar }),
    /* @__PURE__ */ k.jsx("div", { className: X(r()), children: /* @__PURE__ */ k.jsx(Co, { message: t, role: t.role }) })
  ] });
};
Ro.displayName = "MessageDialog";
const rn = {
  base: "max-w-[95%]",
  md: "md:max-w-[90%]",
  lg: "lg:max-w-[85%]",
  xl: "xl:max-w-[80%]",
  "2xl": "2xl:max-w-[75%]"
}, ei = _t({
  slots: {
    containerStyle: X(
      "flex flex-col gap-8 overflow-y-auto custom-scroll w-full mx-auto pb-4 pt-18",
      "lg:pt-4",
      rn.base,
      rn.md,
      rn.lg,
      rn.xl,
      rn["2xl"]
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
}), ih = ({ messages: e }) => /* @__PURE__ */ k.jsx(k.Fragment, { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ k.jsx(Ro, { message: t }, t.id)) }), ah = ({
  awaitingResponse: e,
  newConversation: t,
  assistantName: n
}) => {
  const { t: r } = yn();
  return e ? null : /* @__PURE__ */ k.jsxs("div", { children: [
    /* @__PURE__ */ k.jsx(Oa, { level: St.H1, className: t(), children: r("home.emptyAssistant", {
      assistantName: n
    }) }),
    /* @__PURE__ */ k.jsx(Dr, { isLoading: !0, variant: ka.Spinner })
  ] });
}, sh = ({
  avatarSrc: e,
  fullName: t,
  className: n
}) => {
  const { t: r } = yn(), { thinkingLoader: i, thinkingLoaderAvatar: a, thinkingLoaderText: s } = ei();
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: X(i(), n),
      "data-testid": "assistant-thinking-loader",
      children: [
        /* @__PURE__ */ k.jsxs("div", { className: a(), children: [
          /* @__PURE__ */ k.jsx(
            Lr,
            {
              src: e,
              fullName: t,
              size: Na.Small
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
}, oh = ({
  errorType: e = "response"
}) => {
  const { t } = yn(), { errorState: n, errorStateIcon: r, errorStateText: i } = ei(), a = t(e === "loading" ? "home.error.chatLoading" : "home.error.responseLoading");
  return /* @__PURE__ */ k.jsxs("div", { className: n(), "data-testid": "chat-error-state", children: [
    /* @__PURE__ */ k.jsx("div", { className: r(), "data-testid": "chat-error-icon", children: /* @__PURE__ */ k.jsx(Mr, { name: "info", className: "w-6 h-6 text-red-500" }) }),
    /* @__PURE__ */ k.jsx("p", { className: i(), children: a })
  ] });
}, Io = ({ containerRef: e, messagesEndRef: t, initialMessages: n }) => {
  var _, y;
  const { isLoading: r, displayMessages: i, assistantName: a } = ul(), {
    data: s,
    error: o,
    refetch: l
  } = Aa(), c = D.useMemo(() => n != null && n.length ? n : i, [n, i]), u = Sa(), { assistantProperties: d } = Gn(), { containerStyle: f, newConversation: m } = ei(), h = !!o && !r;
  return D.useLayoutEffect(() => {
    var E;
    (E = t.current) == null || E.scrollIntoView({ behavior: "smooth" });
  }, [c, u, t]), /* @__PURE__ */ k.jsxs("div", { ref: e, className: f(), children: [
    h ? /* @__PURE__ */ k.jsx(
      oh,
      {
        errorType: c.length > 0 ? "response" : "loading"
      }
    ) : r ? /* @__PURE__ */ k.jsx(Dr, { isLoading: !0 }) : c.length > 0 ? /* @__PURE__ */ k.jsx(ih, { messages: c }) : /* @__PURE__ */ k.jsx(
      ah,
      {
        awaitingResponse: u,
        newConversation: m,
        assistantName: a
      }
    ),
    u && !h && /* @__PURE__ */ k.jsx(
      sh,
      {
        avatarSrc: (y = (_ = d == null ? void 0 : d.persona) == null ? void 0 : _.avatar) == null ? void 0 : y.uri,
        fullName: a
      }
    ),
    /* @__PURE__ */ k.jsx("div", { ref: t })
  ] });
};
Io.displayName = "DialogList";
const lh = { VITE_API_BFF_URL: "https://api.dsv.pas.app.br/" }, ch = lh;
async function uh(e, t = {}) {
  const { token: n, hostname: r, headers: i, ...a } = t, s = rl(), o = ch.VITE_API_BFF_URL, l = e.startsWith("http") ? e : `${o.replace(/\/$/, "")}/${e.replace(/^\//, "")}`, c = r ?? s.hostname ?? "embed-host";
  !r && !s.hostname && console.warn(
    '⚠️ hostname attribute not provided to <pas-assistant-embedded>. Using fallback "embed-host" for HTTP requests.'
  );
  const u = {
    ...i || {},
    "Content-Type": "application/json",
    "accept-language": br.language,
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
function dh() {
  return "https://api.dsv.pas.app.br/assistant-ai/api/v1/threads/stream";
}
async function fh(e, t) {
  var a, s, o, l, c, u, d, f, m;
  if (!e.body) throw new Error("Response body not readable");
  const n = e.body.getReader(), r = new TextDecoder();
  let i = "";
  for (; ; ) {
    const { value: p, done: h } = await n.read();
    if (h) break;
    i += r.decode(p, { stream: !0 });
    const _ = i.split(`
`);
    i = _.pop() ?? "";
    for (const y of _) {
      const E = y.trim();
      if (!E.startsWith("data:")) continue;
      const N = E.replace(/^data:\s*/, "");
      try {
        const T = JSON.parse(N);
        switch (T.type) {
          case "RUN_STARTED":
            (a = t.onRunStarted) == null || a.call(t, T.run_id, T.thread_id);
            break;
          case "TEXT_MESSAGE_START":
            (s = t.onStart) == null || s.call(t);
            break;
          case "TEXT_MESSAGE_CONTENT": {
            T.content !== "*" && ((o = t.onContent) == null || o.call(t, T.content));
            break;
          }
          case "TEXT_MESSAGE_END":
            (l = t.onEnd) == null || l.call(t);
            break;
          case "RUN_FINISHED":
            (c = t.onRunFinished) == null || c.call(t, T.run_id, T.thread_id);
            break;
          case "DONE":
            (u = t.onRunFinished) == null || u.call(t, T.run_id, T.thread_id);
            break;
          case "TOOL_CALL_START":
            (d = t.onToolCallStart) == null || d.call(t, T.tool_name, T.run_id);
            break;
          case "TOOL_CALL_END":
            (f = t.onToolCallEnd) == null || f.call(t, T.tool_name, T.run_id);
            break;
          case "ERROR":
            (m = t.onStreamError) == null || m.call(t, T.message);
            break;
        }
      } catch (T) {
        console.warn("Falha ao processar evento SSE:", y, T);
      }
    }
  }
}
function ph(e, t) {
  const { token: n, assistantId: r, content: i, threadId: a } = e;
  uh(dh(), {
    method: "POST",
    token: n,
    body: JSON.stringify({ content: i, assistantId: r, threadId: a })
  }).then((s) => {
    if (!s.ok)
      throw new Error(`HTTP ${s.status}: ${s.statusText}`);
    fh(s, t);
  }).catch((s) => {
    var o;
    (o = t.onError) == null || o.call(t, s instanceof Error ? s : new Error(String(s)));
  });
}
const gh = () => {
  const e = il(), t = al(), { assistantProperties: n } = Gn(), { showToast: r } = sl(), {
    addMessage: i,
    setIsTyping: a,
    selectThread: s,
    setNewlyCreatedThreadId: o,
    setIsAwaitingResponse: l
  } = Ta();
  return dl(
    {
      mutationFn: async ({ content: c, threadId: u }) => {
        if (!t || !(n != null && n.id))
          throw new Error($e("common.validation.missingParameters"));
        return new Promise((d, f) => {
          ph(
            {
              token: t,
              assistantId: n.id,
              content: c,
              threadId: u || void 0
            },
            {
              onStart: () => {
                l(!0);
                const m = {
                  id: `temp-assistant-${Date.now()}`,
                  type: nt.TEXT,
                  text: { value: "" },
                  createdAt: (/* @__PURE__ */ new Date()).toISOString(),
                  role: ze.ASSISTANT
                }, p = Jt.getState().currentThreadId;
                e.setQueryData(
                  ["messages", p],
                  (h) => ({
                    ...h,
                    messages: [
                      ...(h == null ? void 0 : h.messages) || [],
                      m
                    ]
                  })
                );
              },
              onContent: (m) => {
                const p = Jt.getState(), h = p.currentThreadId;
                p.isAwaitingResponse && l(!1), e.setQueryData(
                  ["messages", h],
                  (_) => {
                    var N;
                    if (!((N = _ == null ? void 0 : _.messages) != null && N.length)) return _;
                    const y = [..._.messages], E = y[y.length - 1];
                    return E.role !== ze.ASSISTANT ? _ : (y[y.length - 1] = {
                      ...E,
                      text: {
                        ...E.text,
                        value: E.text.value + m
                      }
                    }, { ..._, messages: y });
                  }
                );
              },
              onRunStarted: (m, p) => {
                if (!p)
                  return;
                const h = Jt.getState().newlyCreatedThreadId;
                if (h && h !== p) {
                  const _ = e.getQueryData([
                    "messages",
                    h
                  ]);
                  _ && (e.setQueryData(
                    ["messages", p],
                    _
                  ), e.removeQueries({
                    queryKey: ["messages", h]
                  })), o(null);
                }
                s(p);
              },
              onToolCallStart: (m) => {
                console.debug(`Iniciando ferramenta: ${m}`), a(!0);
              },
              onToolCallEnd: (m) => {
                console.debug(`Ferramenta finalizada: ${m}`), a(!0);
              },
              onRunFinished: (m, p) => {
                a(!1);
                const h = {
                  currentThreadIdFromStore: Jt.getState().currentThreadId,
                  optimisticFromStore: Jt.getState().newlyCreatedThreadId
                }, _ = p || h.optimisticFromStore;
                if (!_)
                  return;
                const y = h.optimisticFromStore;
                if (y && y !== _) {
                  const E = e.getQueryData([
                    "messages",
                    y
                  ]);
                  E && (e.setQueryData(
                    ["messages", _],
                    E
                  ), e.removeQueries({
                    queryKey: ["messages", y]
                  })), o(null);
                }
                s(_), !_.startsWith("optimistic-") && (e.invalidateQueries({
                  queryKey: ["messages", _]
                }), e.invalidateQueries({
                  queryKey: ["threads", n == null ? void 0 : n.id]
                }), d({ finalThreadId: _ }));
              },
              onStreamError: (m) => {
                a(!1), l(!1), f(new Error(m));
              },
              onError: (m) => {
                a(!1), l(!1), r({
                  type: "error",
                  title: $e("home.toast.error.create"),
                  duration: 2500
                }), f(m);
              }
            }
          );
        });
      },
      onMutate: async ({ content: c, threadId: u }) => {
        a(!0), await e.cancelQueries();
        const d = {
          id: `temp-user-${Date.now()}`,
          role: ze.USER,
          text: { value: c },
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          type: nt.TEXT
        };
        let f, m;
        return u ? m = ["messages", u] : (f = `optimistic-${Date.now()}`, m = ["messages", f], s(f), o(f), e.setQueryData(m, { messages: [] })), e.setQueryData(m, (p) => ({
          ...p,
          messages: [...(p == null ? void 0 : p.messages) || [], d]
        })), i(d), { optimisticThreadId: f };
      },
      onSettled: (c, u, d, f) => {
        a(!1);
        const m = c == null ? void 0 : c.finalThreadId, p = f == null ? void 0 : f.optimisticThreadId;
        if (u || !m) {
          p && s(null);
          return;
        }
        p && e.removeQueries({
          queryKey: ["messages", p]
        }), e.invalidateQueries({ queryKey: ["messages", m] }), p && e.invalidateQueries({
          queryKey: ["threads", n == null ? void 0 : n.id]
        });
      }
    }
  );
}, mh = () => {
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
      const f = Array.from(
        d.results
      ).map((m) => m[0]).map((m) => m.transcript).join("");
      r(f);
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
var Sn = (e) => e.type === "checkbox", Tt = (e) => e instanceof Date, De = (e) => e == null;
const Mo = (e) => typeof e == "object";
var _e = (e) => !De(e) && !Array.isArray(e) && Mo(e) && !Tt(e), hh = (e) => _e(e) && e.target ? Sn(e.target) ? e.target.checked : e.target.value : e, bh = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, _h = (e, t) => e.has(bh(t)), yh = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return _e(t) && t.hasOwnProperty("isPrototypeOf");
}, ti = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ve(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(ti && (e instanceof Blob || r)) && (n || _e(e)))
    if (t = n ? [] : Object.create(Object.getPrototypeOf(e)), !n && !yh(e))
      t = e;
    else
      for (const i in e)
        e.hasOwnProperty(i) && (t[i] = ve(e[i]));
  else
    return e;
  return t;
}
var tr = (e) => /^\w*$/.test(e), me = (e) => e === void 0, ni = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ri = (e) => ni(e.replace(/["|']|\]/g, "").split(/\.|\[/)), z = (e, t, n) => {
  if (!t || !_e(e))
    return n;
  const r = (tr(t) ? [t] : ri(t)).reduce((i, a) => De(i) ? i : i[a], e);
  return me(r) || r === e ? me(e[t]) ? n : e[t] : r;
}, Ze = (e) => typeof e == "boolean", ue = (e, t, n) => {
  let r = -1;
  const i = tr(t) ? [t] : ri(t), a = i.length, s = a - 1;
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
const ji = {
  BLUR: "blur",
  FOCUS_OUT: "focusout"
}, je = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Je = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Eh = Fe.createContext(null);
Eh.displayName = "HookFormContext";
var vh = (e, t, n, r = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(i, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== je.all && (t._proxyFormState[s] = !r || je.all), e[s];
      }
    });
  return i;
};
const wh = typeof window < "u" ? Fe.useLayoutEffect : Fe.useEffect;
var Be = (e) => typeof e == "string", xh = (e, t, n, r, i) => Be(e) ? (r && t.watch.add(e), z(n, e, i)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), z(n, a))) : (r && (t.watchAll = !0), n), Tr = (e) => De(e) || !Mo(e);
function ft(e, t, n = /* @__PURE__ */ new WeakSet()) {
  if (Tr(e) || Tr(t))
    return e === t;
  if (Tt(e) && Tt(t))
    return e.getTime() === t.getTime();
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
      if (Tt(s) && Tt(o) || _e(s) && _e(o) || Array.isArray(s) && Array.isArray(o) ? !ft(s, o, n) : s !== o)
        return !1;
    }
  }
  return !0;
}
var Do = (e, t, n, r, i) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: i || !0
  }
} : {}, cn = (e) => Array.isArray(e) ? e : [e], Ki = () => {
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
function Lo(e, t) {
  const n = {};
  for (const r in e)
    if (e.hasOwnProperty(r)) {
      const i = e[r], a = t[r];
      if (i && _e(i) && a) {
        const s = Lo(i, a);
        _e(s) && (n[r] = s);
      } else e[r] && (n[r] = a);
    }
  return n;
}
var Re = (e) => _e(e) && !Object.keys(e).length, ii = (e) => e.type === "file", Ke = (e) => typeof e == "function", Un = (e) => {
  if (!ti)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Po = (e) => e.type === "select-multiple", ai = (e) => e.type === "radio", kh = (e) => ai(e) || Sn(e), mr = (e) => Un(e) && e.isConnected;
function Sh(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = me(e) ? r++ : e[t[r++]];
  return e;
}
function Th(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !me(e[t]))
      return !1;
  return !0;
}
function he(e, t) {
  const n = Array.isArray(t) ? t : tr(t) ? [t] : ri(t), r = n.length === 1 ? e : Sh(e, n), i = n.length - 1, a = n[i];
  return r && delete r[a], i !== 0 && (_e(r) && Re(r) || Array.isArray(r) && Th(r)) && he(e, n.slice(0, -1)), e;
}
var Nh = (e) => {
  for (const t in e)
    if (Ke(e[t]))
      return !0;
  return !1;
};
function Fo(e) {
  return Array.isArray(e) || _e(e) && !Nh(e);
}
function Nr(e, t = {}) {
  for (const n in e)
    Fo(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, Nr(e[n], t[n])) : me(e[n]) || (t[n] = !0);
  return t;
}
function zt(e, t, n) {
  n || (n = Nr(t));
  for (const r in e)
    Fo(e[r]) ? me(t) || Tr(n[r]) ? n[r] = Nr(e[r], Array.isArray(e[r]) ? [] : {}) : zt(e[r], De(t) ? {} : t[r], n[r]) : n[r] = !ft(e[r], t[r]);
  return n;
}
const Gi = {
  value: !1,
  isValid: !1
}, Wi = { value: !0, isValid: !0 };
var Bo = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !me(e[0].attributes.value) ? me(e[0].value) || e[0].value === "" ? Wi : { value: e[0].value, isValid: !0 } : Wi
    ) : Gi;
  }
  return Gi;
}, Uo = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => me(e) ? e : t ? e === "" ? NaN : e && +e : n && Be(e) ? new Date(e) : r ? r(e) : e;
const Zi = {
  isValid: !1,
  value: null
};
var $o = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Zi) : Zi;
function qi(e) {
  const t = e.ref;
  return ii(t) ? t.files : ai(t) ? $o(e.refs).value : Po(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Sn(t) ? Bo(e.refs).value : Uo(me(t.value) ? e.ref.value : t.value, e);
}
var Ah = (e, t, n, r) => {
  const i = {};
  for (const a of e) {
    const s = z(t, a);
    s && ue(i, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: r
  };
}, $n = (e) => e instanceof RegExp, an = (e) => me(e) ? e : $n(e) ? e.source : _e(e) ? $n(e.value) ? e.value.source : e.value : e, Yi = (e) => ({
  isOnSubmit: !e || e === je.onSubmit,
  isOnBlur: e === je.onBlur,
  isOnChange: e === je.onChange,
  isOnAll: e === je.all,
  isOnTouch: e === je.onTouched
});
const Xi = "AsyncFunction";
var Oh = (e) => !!e && !!e.validate && !!(Ke(e.validate) && e.validate.constructor.name === Xi || _e(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Xi)), Ch = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), Qi = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const un = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const a = z(e, i);
    if (a) {
      const { _f: s, ...o } = a;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], i) && !r)
          return !0;
        if (s.ref && t(s.ref, s.name) && !r)
          return !0;
        if (un(o, t))
          break;
      } else if (_e(o) && un(o, t))
        break;
    }
  }
};
function Ji(e, t, n) {
  const r = z(e, n);
  if (r || tr(n))
    return {
      error: r,
      name: n
    };
  const i = n.split(".");
  for (; i.length; ) {
    const a = i.join("."), s = z(t, a), o = z(e, a);
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
var Rh = (e, t, n, r) => {
  n(e);
  const { name: i, ...a } = e;
  return Re(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || je.all));
}, Ih = (e, t, n) => !e || !t || e === t || cn(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r))), Mh = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, Dh = (e, t) => !ni(z(e, t)).length && he(e, t), Lh = (e, t, n) => {
  const r = cn(z(e, n));
  return ue(r, "root", t[n]), ue(e, n, r), e;
};
function ea(e, t, n = "validate") {
  if (Be(e) || Array.isArray(e) && e.every(Be) || Ze(e) && !e)
    return {
      type: n,
      message: Be(e) ? e : "",
      ref: t
    };
}
var Pt = (e) => _e(e) && !$n(e) ? e : {
  value: e,
  message: ""
}, ta = async (e, t, n, r, i, a) => {
  const { ref: s, refs: o, required: l, maxLength: c, minLength: u, min: d, max: f, pattern: m, validate: p, name: h, valueAsNumber: _, mount: y } = e._f, E = z(n, h);
  if (!y || t.has(h))
    return {};
  const N = o ? o[0] : s, T = (K) => {
    i && N.reportValidity && (N.setCustomValidity(Ze(K) ? "" : K || ""), N.reportValidity());
  }, M = {}, F = ai(s), j = Sn(s), G = F || j, U = (_ || ii(s)) && me(s.value) && me(E) || Un(s) && s.value === "" || E === "" || Array.isArray(E) && !E.length, v = Do.bind(null, h, r, M), ie = (K, Z, Y, re = Je.maxLength, S = Je.minLength) => {
    const P = K ? Z : Y;
    M[h] = {
      type: K ? re : S,
      message: P,
      ref: s,
      ...v(K ? re : S, P)
    };
  };
  if (a ? !Array.isArray(E) || !E.length : l && (!G && (U || De(E)) || Ze(E) && !E || j && !Bo(o).isValid || F && !$o(o).isValid)) {
    const { value: K, message: Z } = Be(l) ? { value: !!l, message: l } : Pt(l);
    if (K && (M[h] = {
      type: Je.required,
      message: Z,
      ref: N,
      ...v(Je.required, Z)
    }, !r))
      return T(Z), M;
  }
  if (!U && (!De(d) || !De(f))) {
    let K, Z;
    const Y = Pt(f), re = Pt(d);
    if (!De(E) && !isNaN(E)) {
      const S = s.valueAsNumber || E && +E;
      De(Y.value) || (K = S > Y.value), De(re.value) || (Z = S < re.value);
    } else {
      const S = s.valueAsDate || new Date(E), P = (ee) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ee), C = s.type == "time", W = s.type == "week";
      Be(Y.value) && E && (K = C ? P(E) > P(Y.value) : W ? E > Y.value : S > new Date(Y.value)), Be(re.value) && E && (Z = C ? P(E) < P(re.value) : W ? E < re.value : S < new Date(re.value));
    }
    if ((K || Z) && (ie(!!K, Y.message, re.message, Je.max, Je.min), !r))
      return T(M[h].message), M;
  }
  if ((c || u) && !U && (Be(E) || a && Array.isArray(E))) {
    const K = Pt(c), Z = Pt(u), Y = !De(K.value) && E.length > +K.value, re = !De(Z.value) && E.length < +Z.value;
    if ((Y || re) && (ie(Y, K.message, Z.message), !r))
      return T(M[h].message), M;
  }
  if (m && !U && Be(E)) {
    const { value: K, message: Z } = Pt(m);
    if ($n(K) && !E.match(K) && (M[h] = {
      type: Je.pattern,
      message: Z,
      ref: s,
      ...v(Je.pattern, Z)
    }, !r))
      return T(Z), M;
  }
  if (p) {
    if (Ke(p)) {
      const K = await p(E, n), Z = ea(K, N);
      if (Z && (M[h] = {
        ...Z,
        ...v(Je.validate, Z.message)
      }, !r))
        return T(Z.message), M;
    } else if (_e(p)) {
      let K = {};
      for (const Z in p) {
        if (!Re(K) && !r)
          break;
        const Y = ea(await p[Z](E, n), N, Z);
        Y && (K = {
          ...Y,
          ...v(Z, Y.message)
        }, T(Y.message), r && (M[h] = K));
      }
      if (!Re(K) && (M[h] = {
        ref: N,
        ...K
      }, !r))
        return M;
    }
  }
  return T(!0), M;
};
const Ph = {
  mode: je.onSubmit,
  reValidateMode: je.onChange,
  shouldFocusError: !0
};
function Fh(e = {}) {
  let t = {
    ...Ph,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: Ke(t.defaultValues),
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
  }, r = {}, i = _e(t.defaultValues) || _e(t.values) ? ve(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : ve(i), s = {
    action: !1,
    mount: !1,
    watch: !1
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
  };
  let d = {
    ...u
  };
  const f = {
    array: Ki(),
    state: Ki()
  }, m = t.criteriaMode === je.all, p = (g) => (b) => {
    clearTimeout(c), c = setTimeout(g, b);
  }, h = async (g) => {
    if (!t.disabled && (u.isValid || d.isValid || g)) {
      const b = t.resolver ? Re((await j()).errors) : await U(r, !0);
      b !== n.isValid && f.state.next({
        isValid: b
      });
    }
  }, _ = (g, b) => {
    !t.disabled && (u.isValidating || u.validatingFields || d.isValidating || d.validatingFields) && ((g || Array.from(o.mount)).forEach((w) => {
      w && (b ? ue(n.validatingFields, w, b) : he(n.validatingFields, w));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Re(n.validatingFields)
    }));
  }, y = (g, b = [], w, L, I = !0, A = !0) => {
    if (L && w && !t.disabled) {
      if (s.action = !0, A && Array.isArray(z(r, g))) {
        const x = w(z(r, g), L.argA, L.argB);
        I && ue(r, g, x);
      }
      if (A && Array.isArray(z(n.errors, g))) {
        const x = w(z(n.errors, g), L.argA, L.argB);
        I && ue(n.errors, g, x), Dh(n.errors, g);
      }
      if ((u.touchedFields || d.touchedFields) && A && Array.isArray(z(n.touchedFields, g))) {
        const x = w(z(n.touchedFields, g), L.argA, L.argB);
        I && ue(n.touchedFields, g, x);
      }
      (u.dirtyFields || d.dirtyFields) && (n.dirtyFields = zt(i, a)), f.state.next({
        name: g,
        isDirty: ie(g, b),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      ue(a, g, b);
  }, E = (g, b) => {
    ue(n.errors, g, b), f.state.next({
      errors: n.errors
    });
  }, N = (g) => {
    n.errors = g, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, T = (g, b, w, L) => {
    const I = z(r, g);
    if (I) {
      const A = z(a, g, me(w) ? z(i, g) : w);
      me(A) || L && L.defaultChecked || b ? ue(a, g, b ? A : qi(I._f)) : Y(g, A), s.mount && h();
    }
  }, M = (g, b, w, L, I) => {
    let A = !1, x = !1;
    const R = {
      name: g
    };
    if (!t.disabled) {
      if (!w || L) {
        (u.isDirty || d.isDirty) && (x = n.isDirty, n.isDirty = R.isDirty = ie(), A = x !== R.isDirty);
        const $ = ft(z(i, g), b);
        x = !!z(n.dirtyFields, g), $ ? he(n.dirtyFields, g) : ue(n.dirtyFields, g, !0), R.dirtyFields = n.dirtyFields, A = A || (u.dirtyFields || d.dirtyFields) && x !== !$;
      }
      if (w) {
        const $ = z(n.touchedFields, g);
        $ || (ue(n.touchedFields, g, w), R.touchedFields = n.touchedFields, A = A || (u.touchedFields || d.touchedFields) && $ !== w);
      }
      A && I && f.state.next(R);
    }
    return A ? R : {};
  }, F = (g, b, w, L) => {
    const I = z(n.errors, g), A = (u.isValid || d.isValid) && Ze(b) && n.isValid !== b;
    if (t.delayError && w ? (l = p(() => E(g, w)), l(t.delayError)) : (clearTimeout(c), l = null, w ? ue(n.errors, g, w) : he(n.errors, g)), (w ? !ft(I, w) : I) || !Re(L) || A) {
      const x = {
        ...L,
        ...A && Ze(b) ? { isValid: b } : {},
        errors: n.errors,
        name: g
      };
      n = {
        ...n,
        ...x
      }, f.state.next(x);
    }
  }, j = async (g) => {
    _(g, !0);
    const b = await t.resolver(a, t.context, Ah(g || o.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return _(g), b;
  }, G = async (g) => {
    const { errors: b } = await j(g);
    if (g)
      for (const w of g) {
        const L = z(b, w);
        L ? ue(n.errors, w, L) : he(n.errors, w);
      }
    else
      n.errors = b;
    return b;
  }, U = async (g, b, w = {
    valid: !0
  }) => {
    for (const L in g) {
      const I = g[L];
      if (I) {
        const { _f: A, ...x } = I;
        if (A) {
          const R = o.array.has(A.name), $ = I._f && Oh(I._f);
          $ && u.validatingFields && _([A.name], !0);
          const te = await ta(I, o.disabled, a, m, t.shouldUseNativeValidation && !b, R);
          if ($ && u.validatingFields && _([A.name]), te[A.name] && (w.valid = !1, b))
            break;
          !b && (z(te, A.name) ? R ? Lh(n.errors, te, A.name) : ue(n.errors, A.name, te[A.name]) : he(n.errors, A.name));
        }
        !Re(x) && await U(x, b, w);
      }
    }
    return w.valid;
  }, v = () => {
    for (const g of o.unMount) {
      const b = z(r, g);
      b && (b._f.refs ? b._f.refs.every((w) => !mr(w)) : !mr(b._f.ref)) && ot(g);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, ie = (g, b) => !t.disabled && (g && b && ue(a, g, b), !ft(ee(), i)), K = (g, b, w) => xh(g, o, {
    ...s.mount ? a : me(b) ? i : Be(g) ? { [g]: b } : b
  }, w, b), Z = (g) => ni(z(s.mount ? a : i, g, t.shouldUnregister ? z(i, g, []) : [])), Y = (g, b, w = {}) => {
    const L = z(r, g);
    let I = b;
    if (L) {
      const A = L._f;
      A && (!A.disabled && ue(a, g, Uo(b, A)), I = Un(A.ref) && De(b) ? "" : b, Po(A.ref) ? [...A.ref.options].forEach((x) => x.selected = I.includes(x.value)) : A.refs ? Sn(A.ref) ? A.refs.forEach((x) => {
        (!x.defaultChecked || !x.disabled) && (Array.isArray(I) ? x.checked = !!I.find((R) => R === x.value) : x.checked = I === x.value || !!I);
      }) : A.refs.forEach((x) => x.checked = x.value === I) : ii(A.ref) ? A.ref.value = "" : (A.ref.value = I, A.ref.type || f.state.next({
        name: g,
        values: ve(a)
      })));
    }
    (w.shouldDirty || w.shouldTouch) && M(g, I, w.shouldTouch, w.shouldDirty, !0), w.shouldValidate && W(g);
  }, re = (g, b, w) => {
    for (const L in b) {
      if (!b.hasOwnProperty(L))
        return;
      const I = b[L], A = g + "." + L, x = z(r, A);
      (o.array.has(g) || _e(I) || x && !x._f) && !Tt(I) ? re(A, I, w) : Y(A, I, w);
    }
  }, S = (g, b, w = {}) => {
    const L = z(r, g), I = o.array.has(g), A = ve(b);
    ue(a, g, A), I ? (f.array.next({
      name: g,
      values: ve(a)
    }), (u.isDirty || u.dirtyFields || d.isDirty || d.dirtyFields) && w.shouldDirty && f.state.next({
      name: g,
      dirtyFields: zt(i, a),
      isDirty: ie(g, A)
    })) : L && !L._f && !De(A) ? re(g, A, w) : Y(g, A, w), Qi(g, o) && f.state.next({ ...n, name: g }), f.state.next({
      name: s.mount ? g : void 0,
      values: ve(a)
    });
  }, P = async (g) => {
    s.mount = !0;
    const b = g.target;
    let w = b.name, L = !0;
    const I = z(r, w), A = ($) => {
      L = Number.isNaN($) || Tt($) && isNaN($.getTime()) || ft($, z(a, w, $));
    }, x = Yi(t.mode), R = Yi(t.reValidateMode);
    if (I) {
      let $, te;
      const fe = b.type ? qi(I._f) : hh(g), Ee = g.type === ji.BLUR || g.type === ji.FOCUS_OUT, nr = !Ch(I._f) && !t.resolver && !z(n.errors, w) && !I._f.deps || Mh(Ee, z(n.touchedFields, w), n.isSubmitted, R, x), Qt = Qi(w, o, Ee);
      ue(a, w, fe), Ee ? (!b || !b.readOnly) && (I._f.onBlur && I._f.onBlur(g), l && l(0)) : I._f.onChange && I._f.onChange(g);
      const rr = M(w, fe, Ee), Go = !Re(rr) || Qt;
      if (!Ee && f.state.next({
        name: w,
        type: g.type,
        values: ve(a)
      }), nr)
        return (u.isValid || d.isValid) && (t.mode === "onBlur" ? Ee && h() : Ee || h()), Go && f.state.next({ name: w, ...Qt ? {} : rr });
      if (!Ee && Qt && f.state.next({ ...n }), t.resolver) {
        const { errors: oi } = await j([w]);
        if (A(fe), L) {
          const Wo = Ji(n.errors, r, w), li = Ji(oi, r, Wo.name || w);
          $ = li.error, w = li.name, te = Re(oi);
        }
      } else
        _([w], !0), $ = (await ta(I, o.disabled, a, m, t.shouldUseNativeValidation))[w], _([w]), A(fe), L && ($ ? te = !1 : (u.isValid || d.isValid) && (te = await U(r, !0)));
      L && (I._f.deps && (!Array.isArray(I._f.deps) || I._f.deps.length > 0) && W(I._f.deps), F(w, te, $, rr));
    }
  }, C = (g, b) => {
    if (z(n.errors, b) && g.focus)
      return g.focus(), 1;
  }, W = async (g, b = {}) => {
    let w, L;
    const I = cn(g);
    if (t.resolver) {
      const A = await G(me(g) ? g : I);
      w = Re(A), L = g ? !I.some((x) => z(A, x)) : w;
    } else g ? (L = (await Promise.all(I.map(async (A) => {
      const x = z(r, A);
      return await U(x && x._f ? { [A]: x } : x);
    }))).every(Boolean), !(!L && !n.isValid) && h()) : L = w = await U(r);
    return f.state.next({
      ...!Be(g) || (u.isValid || d.isValid) && w !== n.isValid ? {} : { name: g },
      ...t.resolver || !g ? { isValid: w } : {},
      errors: n.errors
    }), b.shouldFocus && !L && un(r, C, g ? I : o.mount), L;
  }, ee = (g, b) => {
    let w = {
      ...s.mount ? a : i
    };
    return b && (w = Lo(b.dirtyFields ? n.dirtyFields : n.touchedFields, w)), me(g) ? w : Be(g) ? z(w, g) : g.map((L) => z(w, L));
  }, ae = (g, b) => ({
    invalid: !!z((b || n).errors, g),
    isDirty: !!z((b || n).dirtyFields, g),
    error: z((b || n).errors, g),
    isValidating: !!z(n.validatingFields, g),
    isTouched: !!z((b || n).touchedFields, g)
  }), de = (g) => {
    g && cn(g).forEach((b) => he(n.errors, b)), f.state.next({
      errors: g ? n.errors : {}
    });
  }, Ne = (g, b, w) => {
    const L = (z(r, g, { _f: {} })._f || {}).ref, I = z(n.errors, g) || {}, { ref: A, message: x, type: R, ...$ } = I;
    ue(n.errors, g, {
      ...$,
      ...b,
      ref: L
    }), f.state.next({
      name: g,
      errors: n.errors,
      isValid: !1
    }), w && w.shouldFocus && L && L.focus && L.focus();
  }, we = (g, b) => Ke(g) ? f.state.subscribe({
    next: (w) => "values" in w && g(K(void 0, b), w)
  }) : K(g, b, !0), Se = (g) => f.state.subscribe({
    next: (b) => {
      Ih(g.name, b.name, g.exact) && Rh(b, g.formState || u, Ge, g.reRenderRoot) && g.callback({
        values: { ...a },
        ...n,
        ...b,
        defaultValues: i
      });
    }
  }).unsubscribe, st = (g) => (s.mount = !0, d = {
    ...d,
    ...g.formState
  }, Se({
    ...g,
    formState: d
  })), ot = (g, b = {}) => {
    for (const w of g ? cn(g) : o.mount)
      o.mount.delete(w), o.array.delete(w), b.keepValue || (he(r, w), he(a, w)), !b.keepError && he(n.errors, w), !b.keepDirty && he(n.dirtyFields, w), !b.keepTouched && he(n.touchedFields, w), !b.keepIsValidating && he(n.validatingFields, w), !t.shouldUnregister && !b.keepDefaultValue && he(i, w);
    f.state.next({
      values: ve(a)
    }), f.state.next({
      ...n,
      ...b.keepDirty ? { isDirty: ie() } : {}
    }), !b.keepIsValid && h();
  }, lt = ({ disabled: g, name: b }) => {
    (Ze(g) && s.mount || g || o.disabled.has(b)) && (g ? o.disabled.add(b) : o.disabled.delete(b));
  }, Et = (g, b = {}) => {
    let w = z(r, g);
    const L = Ze(b.disabled) || Ze(t.disabled);
    return ue(r, g, {
      ...w || {},
      _f: {
        ...w && w._f ? w._f : { ref: { name: g } },
        name: g,
        mount: !0,
        ...b
      }
    }), o.mount.add(g), w ? lt({
      disabled: Ze(b.disabled) ? b.disabled : t.disabled,
      name: g
    }) : T(g, !0, b.value), {
      ...L ? { disabled: b.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!b.required,
        min: an(b.min),
        max: an(b.max),
        minLength: an(b.minLength),
        maxLength: an(b.maxLength),
        pattern: an(b.pattern)
      } : {},
      name: g,
      onChange: P,
      onBlur: P,
      ref: (I) => {
        if (I) {
          Et(g, b), w = z(r, g);
          const A = me(I.value) && I.querySelectorAll && I.querySelectorAll("input,select,textarea")[0] || I, x = kh(A), R = w._f.refs || [];
          if (x ? R.find(($) => $ === A) : A === w._f.ref)
            return;
          ue(r, g, {
            _f: {
              ...w._f,
              ...x ? {
                refs: [
                  ...R.filter(mr),
                  A,
                  ...Array.isArray(z(i, g)) ? [{}] : []
                ],
                ref: { type: A.type, name: g }
              } : { ref: A }
            }
          }), T(g, !1, void 0, A);
        } else
          w = z(r, g, {}), w._f && (w._f.mount = !1), (t.shouldUnregister || b.shouldUnregister) && !(_h(o.array, g) && s.action) && o.unMount.add(g);
      }
    };
  }, vt = () => t.shouldFocusError && un(r, C, o.mount), Xt = (g) => {
    Ze(g) && (f.state.next({ disabled: g }), un(r, (b, w) => {
      const L = z(r, w);
      L && (b.disabled = L._f.disabled || g, Array.isArray(L._f.refs) && L._f.refs.forEach((I) => {
        I.disabled = L._f.disabled || g;
      }));
    }, 0, !1));
  }, It = (g, b) => async (w) => {
    let L;
    w && (w.preventDefault && w.preventDefault(), w.persist && w.persist());
    let I = ve(a);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: A, values: x } = await j();
      n.errors = A, I = ve(x);
    } else
      await U(r);
    if (o.disabled.size)
      for (const A of o.disabled)
        he(I, A);
    if (he(n.errors, "root"), Re(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await g(I, w);
      } catch (A) {
        L = A;
      }
    } else
      b && await b({ ...n.errors }, w), vt(), setTimeout(vt);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Re(n.errors) && !L,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), L)
      throw L;
  }, ct = (g, b = {}) => {
    z(r, g) && (me(b.defaultValue) ? S(g, ve(z(i, g))) : (S(g, b.defaultValue), ue(i, g, ve(b.defaultValue))), b.keepTouched || he(n.touchedFields, g), b.keepDirty || (he(n.dirtyFields, g), n.isDirty = b.defaultValue ? ie(g, ve(z(i, g))) : ie()), b.keepError || (he(n.errors, g), u.isValid && h()), f.state.next({ ...n }));
  }, wt = (g, b = {}) => {
    const w = g ? ve(g) : i, L = ve(w), I = Re(g), A = I ? i : L;
    if (b.keepDefaultValues || (i = w), !b.keepValues) {
      if (b.keepDirtyValues) {
        const x = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(zt(i, a))
        ]);
        for (const R of Array.from(x))
          z(n.dirtyFields, R) ? ue(A, R, z(a, R)) : S(R, z(A, R));
      } else {
        if (ti && me(g))
          for (const x of o.mount) {
            const R = z(r, x);
            if (R && R._f) {
              const $ = Array.isArray(R._f.refs) ? R._f.refs[0] : R._f.ref;
              if (Un($)) {
                const te = $.closest("form");
                if (te) {
                  te.reset();
                  break;
                }
              }
            }
          }
        if (b.keepFieldsRef)
          for (const x of o.mount)
            S(x, z(A, x));
        else
          r = {};
      }
      a = t.shouldUnregister ? b.keepDefaultValues ? ve(i) : {} : ve(A), f.array.next({
        values: { ...A }
      }), f.state.next({
        values: { ...A }
      });
    }
    o = {
      mount: b.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !u.isValid || !!b.keepIsValid || !!b.keepDirtyValues || !t.shouldUnregister && !Re(A), s.watch = !!t.shouldUnregister, f.state.next({
      submitCount: b.keepSubmitCount ? n.submitCount : 0,
      isDirty: I ? !1 : b.keepDirty ? n.isDirty : !!(b.keepDefaultValues && !ft(g, i)),
      isSubmitted: b.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: I ? {} : b.keepDirtyValues ? b.keepDefaultValues && a ? zt(i, a) : n.dirtyFields : b.keepDefaultValues && g ? zt(i, g) : b.keepDirty ? n.dirtyFields : {},
      touchedFields: b.keepTouched ? n.touchedFields : {},
      errors: b.keepErrors ? n.errors : {},
      isSubmitSuccessful: b.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: i
    });
  }, Ae = (g, b) => wt(Ke(g) ? g(a) : g, b), le = (g, b = {}) => {
    const w = z(r, g), L = w && w._f;
    if (L) {
      const I = L.refs ? L.refs[0] : L.ref;
      I.focus && (I.focus(), b.shouldSelect && Ke(I.select) && I.select());
    }
  }, Ge = (g) => {
    n = {
      ...n,
      ...g
    };
  }, xt = {
    control: {
      register: Et,
      unregister: ot,
      getFieldState: ae,
      handleSubmit: It,
      setError: Ne,
      _subscribe: Se,
      _runSchema: j,
      _focusError: vt,
      _getWatch: K,
      _getDirty: ie,
      _setValid: h,
      _setFieldArray: y,
      _setDisabledField: lt,
      _setErrors: N,
      _getFieldArray: Z,
      _reset: wt,
      _resetDefaultValues: () => Ke(t.defaultValues) && t.defaultValues().then((g) => {
        Ae(g, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: v,
      _disableForm: Xt,
      _subjects: f,
      _proxyFormState: u,
      get _fields() {
        return r;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(g) {
        s = g;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return o;
      },
      set _names(g) {
        o = g;
      },
      get _formState() {
        return n;
      },
      get _options() {
        return t;
      },
      set _options(g) {
        t = {
          ...t,
          ...g
        };
      }
    },
    subscribe: st,
    trigger: W,
    register: Et,
    handleSubmit: It,
    watch: we,
    setValue: S,
    getValues: ee,
    reset: Ae,
    resetField: ct,
    clearErrors: de,
    unregister: ot,
    setError: Ne,
    setFocus: le,
    getFieldState: ae
  };
  return {
    ...xt,
    formControl: xt
  };
}
function Bh(e = {}) {
  const t = Fe.useRef(void 0), n = Fe.useRef(void 0), [r, i] = Fe.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ke(e.defaultValues),
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
    defaultValues: Ke(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!t.current)
    if (e.formControl)
      t.current = {
        ...e.formControl,
        formState: r
      }, e.defaultValues && !Ke(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: s, ...o } = Fh(e);
      t.current = {
        ...o,
        formState: r
      };
    }
  const a = t.current.control;
  return a._options = e, wh(() => {
    const s = a._subscribe({
      formState: a._proxyFormState,
      callback: () => i({ ...a._formState }),
      reRenderRoot: !0
    });
    return i((o) => ({
      ...o,
      isReady: !0
    })), a._formState.isReady = !0, s;
  }, [a]), Fe.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), Fe.useEffect(() => {
    e.mode && (a._options.mode = e.mode), e.reValidateMode && (a._options.reValidateMode = e.reValidateMode);
  }, [a, e.mode, e.reValidateMode]), Fe.useEffect(() => {
    e.errors && (a._setErrors(e.errors), a._focusError());
  }, [a, e.errors]), Fe.useEffect(() => {
    e.shouldUnregister && a._subjects.state.next({
      values: a._getWatch()
    });
  }, [a, e.shouldUnregister]), Fe.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== r.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, r.isDirty]), Fe.useEffect(() => {
    e.values && !ft(e.values, n.current) ? (a._reset(e.values, {
      keepFieldsRef: !0,
      ...a._options.resetOptions
    }), n.current = e.values, i((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [a, e.values]), Fe.useEffect(() => {
    a._state.mount || (a._setValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = vh(r, a), t.current;
}
const na = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = z(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, zo = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? na(r.ref, n, e) : r && r.refs && r.refs.forEach((i) => na(i, n, e));
  }
}, Uh = (e, t) => {
  t.shouldUseNativeValidation && zo(e, t);
  const n = {};
  for (const r in e) {
    const i = z(t.fields, r), a = Object.assign(e[r] || {}, { ref: i && i.ref });
    if ($h(t.names || Object.keys(e), r)) {
      const s = Object.assign({}, z(n, r));
      ue(s, "root", a), ue(n, r, s);
    } else ue(n, r, a);
  }
  return n;
}, $h = (e, t) => {
  const n = ra(t);
  return e.some((r) => ra(r).match(`^${n}\\.\\d+`));
};
function ra(e) {
  return e.replace(/\]|\[/g, "");
}
function zh(e, t) {
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
      n[s] = Do(s, t, n, i, c ? [].concat(c, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}
function Hh(e, t, n) {
  return n === void 0 && (n = {}), function(r, i, a) {
    try {
      return Promise.resolve(function(s, o) {
        try {
          var l = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(c) {
            return a.shouldUseNativeValidation && zo({}, a), { errors: {}, values: n.raw ? Object.assign({}, r) : c };
          });
        } catch (c) {
          return o(c);
        }
        return l && l.then ? l.then(void 0, o) : l;
      }(0, function(s) {
        if (function(o) {
          return Array.isArray(o == null ? void 0 : o.errors);
        }(s)) return { values: {}, errors: Uh(zh(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}
const ia = 120, Vh = 0.8, jh = 1, Kh = 8, Gh = ({
  isActive: e,
  className: t
}) => {
  const n = D.useRef(null), r = D.useRef(null), i = D.useRef(null), a = D.useRef(null), s = D.useRef(null), o = D.useRef(null), l = D.useRef([]), c = D.useRef(0);
  return D.useEffect(() => {
    const u = async () => {
      if (!(!e || !n.current))
        try {
          const m = await navigator.mediaDevices.getUserMedia({
            audio: !0
          });
          o.current = m;
          const p = new (window.AudioContext || window.webkitAudioContext)();
          r.current = p;
          const h = p.createMediaStreamSource(m);
          a.current = h;
          const _ = p.createAnalyser();
          _.fftSize = 256, _.smoothingTimeConstant = 0.3, i.current = _, h.connect(_), d();
        } catch (m) {
          console.error("Erro ao acessar o microfone:", m);
        }
    }, d = () => {
      if (c.current++, c.current % jh === 0) {
        const F = i.current;
        if (F) {
          const j = new Uint8Array(F.frequencyBinCount);
          F.getByteFrequencyData(j);
          let U = j.reduce((K, Z) => K + Z, 0) / j.length;
          U *= Vh;
          const v = U > Kh ? U : 0, ie = l.current;
          ie.push(v), ie.length > ia && ie.shift();
        }
      }
      const m = n.current;
      if (!m) return;
      const p = m.getContext("2d");
      if (!p) return;
      p.clearRect(0, 0, m.width, m.height);
      const h = m.width / ia, _ = l.current, E = window.getComputedStyle(m).getPropertyValue("--text-primary").trim(), T = E === "#1c2024" || E === "rgb(28, 32, 36)" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)", M = m.height * 0.9;
      _.forEach((F, j) => {
        let U = Math.log(1 + F) * 6;
        U < 3 && (U = 3), U > M && (U = M);
        const v = j * h, ie = m.height / 2 - U / 2;
        p.fillStyle = T;
        const K = 4, Z = h > 2 ? h - 1 : h;
        p.beginPath(), p.roundRect(v, ie, Z, U, K), p.fill();
      }), e && (s.current = requestAnimationFrame(d));
    }, f = () => {
      var p, h;
      s.current && cancelAnimationFrame(s.current), l.current = [];
      const m = n.current;
      if (m) {
        const _ = m.getContext("2d");
        _ == null || _.clearRect(0, 0, m.width, m.height);
      }
      if ((p = a.current) == null || p.disconnect(), (h = i.current) == null || h.disconnect(), o.current)
        for (const _ of o.current.getTracks())
          _.stop();
      r.current && r.current.state !== "closed" && r.current.close().catch(() => {
      });
    };
    return e ? u() : f(), f;
  }, [e]), D.useEffect(() => {
    const u = n.current;
    if (!u) return;
    const d = () => {
      const p = u.parentElement;
      if (!p) return;
      const h = p.clientWidth || p.offsetWidth, _ = 32;
      u.width = h, u.height = _;
    };
    d();
    const f = setTimeout(d, 0), m = new ResizeObserver(() => {
      d();
    });
    return u.parentElement && m.observe(u.parentElement), window.addEventListener("resize", d), () => {
      clearTimeout(f), m.disconnect(), window.removeEventListener("resize", d);
    };
  }, []), /* @__PURE__ */ k.jsx("div", { className: X("flex-1 min-w-0 h-8", t), children: /* @__PURE__ */ k.jsx("canvas", { ref: n, className: "w-full h-8" }) });
};
var oe;
(function(e) {
  e.assertEqual = (i) => {
  };
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
  }, e.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && Number.isFinite(i) && Math.floor(i) === i;
  function r(i, a = " | ") {
    return i.map((s) => typeof s == "string" ? `'${s}'` : s).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (i, a) => typeof a == "bigint" ? a.toString() : a;
})(oe || (oe = {}));
var aa;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(aa || (aa = {}));
const H = oe.arrayToEnum([
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
]), ut = (e) => {
  switch (typeof e) {
    case "undefined":
      return H.undefined;
    case "string":
      return H.string;
    case "number":
      return Number.isNaN(e) ? H.nan : H.number;
    case "boolean":
      return H.boolean;
    case "function":
      return H.function;
    case "bigint":
      return H.bigint;
    case "symbol":
      return H.symbol;
    case "object":
      return Array.isArray(e) ? H.array : e === null ? H.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? H.promise : typeof Map < "u" && e instanceof Map ? H.map : typeof Set < "u" && e instanceof Set ? H.set : typeof Date < "u" && e instanceof Date ? H.date : H.object;
    default:
      return H.unknown;
  }
}, O = oe.arrayToEnum([
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
]);
class it extends Error {
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
    if (!(t instanceof it))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, oe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const i of this.issues)
      if (i.path.length > 0) {
        const a = i.path[0];
        n[a] = n[a] || [], n[a].push(t(i));
      } else
        r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
it.create = (e) => new it(e);
const Ar = (e, t) => {
  let n;
  switch (e.code) {
    case O.invalid_type:
      e.received === H.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case O.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, oe.jsonStringifyReplacer)}`;
      break;
    case O.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${oe.joinValues(e.keys, ", ")}`;
      break;
    case O.invalid_union:
      n = "Invalid input";
      break;
    case O.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${oe.joinValues(e.options)}`;
      break;
    case O.invalid_enum_value:
      n = `Invalid enum value. Expected ${oe.joinValues(e.options)}, received '${e.received}'`;
      break;
    case O.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case O.invalid_return_type:
      n = "Invalid function return type";
      break;
    case O.invalid_date:
      n = "Invalid date";
      break;
    case O.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : oe.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case O.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case O.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case O.custom:
      n = "Invalid input";
      break;
    case O.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case O.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case O.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, oe.assertNever(e);
  }
  return { message: n };
};
let Wh = Ar;
function Zh() {
  return Wh;
}
const qh = (e) => {
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
};
function B(e, t) {
  const n = Zh(), r = qh({
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
      n === Ar ? void 0 : Ar
      // then global default map
    ].filter((i) => !!i)
  });
  e.common.issues.push(r);
}
class Ue {
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
        return Q;
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
    return Ue.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: a, value: s } = i;
      if (a.status === "aborted" || s.status === "aborted")
        return Q;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || i.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Q = Object.freeze({
  status: "aborted"
}), on = (e) => ({ status: "dirty", value: e }), He = (e) => ({ status: "valid", value: e }), sa = (e) => e.status === "aborted", oa = (e) => e.status === "dirty", Gt = (e) => e.status === "valid", zn = (e) => typeof Promise < "u" && e instanceof Promise;
var V;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(V || (V = {}));
class ht {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const la = (e, t) => {
  if (Gt(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new it(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function ne(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: i } : { errorMap: (s, o) => {
    const { message: l } = e;
    return s.code === "invalid_enum_value" ? { message: l ?? o.defaultError } : typeof o.data > "u" ? { message: l ?? r ?? o.defaultError } : s.code !== "invalid_type" ? { message: o.defaultError } : { message: l ?? n ?? o.defaultError };
  }, description: i };
}
class se {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ut(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: ut(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Ue(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ut(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (zn(n))
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
    const r = {
      common: {
        issues: [],
        async: (n == null ? void 0 : n.async) ?? !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ut(t)
    }, i = this._parseSync({ data: t, path: r.path, parent: r });
    return la(r, i);
  }
  "~validate"(t) {
    var r, i;
    const n = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ut(t)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: t, path: [], parent: n });
        return Gt(a) ? {
          value: a.value
        } : {
          issues: n.common.issues
        };
      } catch (a) {
        (i = (r = a == null ? void 0 : a.message) == null ? void 0 : r.toLowerCase()) != null && i.includes("encountered") && (this["~standard"].async = !0), n.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: n }).then((a) => Gt(a) ? {
      value: a.value
    } : {
      issues: n.common.issues
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
      parsedType: ut(t)
    }, i = this._parse({ data: t, path: r.path, parent: r }), a = await (zn(i) ? i : Promise.resolve(i));
    return la(r, a);
  }
  refine(t, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, a) => {
      const s = t(i), o = () => a.addIssue({
        code: O.custom,
        ...r(i)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((l) => l ? !0 : (o(), !1)) : s ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) => t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(t) {
    return new Zt({
      schema: this,
      typeName: J.ZodEffects,
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
    return mt.create(this, this._def);
  }
  nullable() {
    return qt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Xe.create(this);
  }
  promise() {
    return Kn.create(this, this._def);
  }
  or(t) {
    return Vn.create([this, t], this._def);
  }
  and(t) {
    return jn.create(this, t, this._def);
  }
  transform(t) {
    return new Zt({
      ...ne(this._def),
      schema: this,
      typeName: J.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Cr({
      ...ne(this._def),
      innerType: this,
      defaultValue: n,
      typeName: J.ZodDefault
    });
  }
  brand() {
    return new _b({
      typeName: J.ZodBranded,
      type: this,
      ...ne(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Rr({
      ...ne(this._def),
      innerType: this,
      catchValue: n,
      typeName: J.ZodCatch
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
    return si.create(this, t);
  }
  readonly() {
    return Ir.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Yh = /^c[^\s-]{8,}$/i, Xh = /^[0-9a-z]+$/, Qh = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Jh = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, eb = /^[a-z0-9_-]{21}$/i, tb = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, nb = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, rb = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ib = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let hr;
const ab = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sb = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ob = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, lb = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cb = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ub = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ho = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", db = new RegExp(`^${Ho}$`);
function Vo(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function fb(e) {
  return new RegExp(`^${Vo(e)}$`);
}
function pb(e) {
  let t = `${Ho}T${Vo(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function gb(e, t) {
  return !!((t === "v4" || !t) && ab.test(e) || (t === "v6" || !t) && ob.test(e));
}
function mb(e, t) {
  if (!tb.test(e))
    return !1;
  try {
    const [n] = e.split(".");
    if (!n)
      return !1;
    const r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), i = JSON.parse(atob(r));
    return !(typeof i != "object" || i === null || "typ" in i && (i == null ? void 0 : i.typ) !== "JWT" || !i.alg || t && i.alg !== t);
  } catch {
    return !1;
  }
}
function hb(e, t) {
  return !!((t === "v4" || !t) && sb.test(e) || (t === "v6" || !t) && lb.test(e));
}
class gt extends se {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== H.string) {
      const a = this._getOrReturnCtx(t);
      return B(a, {
        code: O.invalid_type,
        expected: H.string,
        received: a.parsedType
      }), Q;
    }
    const r = new Ue();
    let i;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (i = this._getOrReturnCtx(t, i), B(i, {
          code: O.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (i = this._getOrReturnCtx(t, i), B(i, {
          code: O.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, o = t.data.length < a.value;
        (s || o) && (i = this._getOrReturnCtx(t, i), s ? B(i, {
          code: O.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && B(i, {
          code: O.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        rb.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
          validation: "email",
          code: O.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        hr || (hr = new RegExp(ib, "u")), hr.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
          validation: "emoji",
          code: O.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        Jh.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
          validation: "uuid",
          code: O.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        eb.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
          validation: "nanoid",
          code: O.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        Yh.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
          validation: "cuid",
          code: O.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        Xh.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
          validation: "cuid2",
          code: O.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        Qh.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
          validation: "ulid",
          code: O.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          i = this._getOrReturnCtx(t, i), B(i, {
            validation: "url",
            code: O.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
        validation: "regex",
        code: O.invalid_string,
        message: a.message
      }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (i = this._getOrReturnCtx(t, i), B(i, {
        code: O.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (i = this._getOrReturnCtx(t, i), B(i, {
        code: O.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (i = this._getOrReturnCtx(t, i), B(i, {
        code: O.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "datetime" ? pb(a).test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
        code: O.invalid_string,
        validation: "datetime",
        message: a.message
      }), r.dirty()) : a.kind === "date" ? db.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
        code: O.invalid_string,
        validation: "date",
        message: a.message
      }), r.dirty()) : a.kind === "time" ? fb(a).test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
        code: O.invalid_string,
        validation: "time",
        message: a.message
      }), r.dirty()) : a.kind === "duration" ? nb.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
        validation: "duration",
        code: O.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "ip" ? gb(t.data, a.version) || (i = this._getOrReturnCtx(t, i), B(i, {
        validation: "ip",
        code: O.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "jwt" ? mb(t.data, a.alg) || (i = this._getOrReturnCtx(t, i), B(i, {
        validation: "jwt",
        code: O.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "cidr" ? hb(t.data, a.version) || (i = this._getOrReturnCtx(t, i), B(i, {
        validation: "cidr",
        code: O.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64" ? cb.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
        validation: "base64",
        code: O.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64url" ? ub.test(t.data) || (i = this._getOrReturnCtx(t, i), B(i, {
        validation: "base64url",
        code: O.invalid_string,
        message: a.message
      }), r.dirty()) : oe.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: O.invalid_string,
      ...V.errToObj(r)
    });
  }
  _addCheck(t) {
    return new gt({
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
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (t == null ? void 0 : t.offset) ?? !1,
      local: (t == null ? void 0 : t.local) ?? !1,
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
    return new gt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new gt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new gt({
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
gt.create = (e) => new gt({
  checks: [],
  typeName: J.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ne(e)
});
function bb(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, a = Number.parseInt(e.toFixed(i).replace(".", "")), s = Number.parseInt(t.toFixed(i).replace(".", ""));
  return a % s / 10 ** i;
}
class hn extends se {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== H.number) {
      const a = this._getOrReturnCtx(t);
      return B(a, {
        code: O.invalid_type,
        expected: H.number,
        received: a.parsedType
      }), Q;
    }
    let r;
    const i = new Ue();
    for (const a of this._def.checks)
      a.kind === "int" ? oe.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), B(r, {
        code: O.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), i.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), B(r, {
        code: O.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), B(r, {
        code: O.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? bb(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), B(r, {
        code: O.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), B(r, {
        code: O.not_finite,
        message: a.message
      }), i.dirty()) : oe.assertNever(a);
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
    return new hn({
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
    return new hn({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && oe.isInteger(t.value));
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
hn.create = (e) => new hn({
  checks: [],
  typeName: J.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class bn extends se {
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
    if (this._getType(t) !== H.bigint)
      return this._getInvalidInput(t);
    let r;
    const i = new Ue();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), B(r, {
        code: O.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), B(r, {
        code: O.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), B(r, {
        code: O.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : oe.assertNever(a);
    return { status: i.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return B(n, {
      code: O.invalid_type,
      expected: H.bigint,
      received: n.parsedType
    }), Q;
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
    return new bn({
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
    return new bn({
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
bn.create = (e) => new bn({
  checks: [],
  typeName: J.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ne(e)
});
class ca extends se {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== H.boolean) {
      const r = this._getOrReturnCtx(t);
      return B(r, {
        code: O.invalid_type,
        expected: H.boolean,
        received: r.parsedType
      }), Q;
    }
    return He(t.data);
  }
}
ca.create = (e) => new ca({
  typeName: J.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class Hn extends se {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== H.date) {
      const a = this._getOrReturnCtx(t);
      return B(a, {
        code: O.invalid_type,
        expected: H.date,
        received: a.parsedType
      }), Q;
    }
    if (Number.isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return B(a, {
        code: O.invalid_date
      }), Q;
    }
    const r = new Ue();
    let i;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (i = this._getOrReturnCtx(t, i), B(i, {
        code: O.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (i = this._getOrReturnCtx(t, i), B(i, {
        code: O.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : oe.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Hn({
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
Hn.create = (e) => new Hn({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: J.ZodDate,
  ...ne(e)
});
class ua extends se {
  _parse(t) {
    if (this._getType(t) !== H.symbol) {
      const r = this._getOrReturnCtx(t);
      return B(r, {
        code: O.invalid_type,
        expected: H.symbol,
        received: r.parsedType
      }), Q;
    }
    return He(t.data);
  }
}
ua.create = (e) => new ua({
  typeName: J.ZodSymbol,
  ...ne(e)
});
class da extends se {
  _parse(t) {
    if (this._getType(t) !== H.undefined) {
      const r = this._getOrReturnCtx(t);
      return B(r, {
        code: O.invalid_type,
        expected: H.undefined,
        received: r.parsedType
      }), Q;
    }
    return He(t.data);
  }
}
da.create = (e) => new da({
  typeName: J.ZodUndefined,
  ...ne(e)
});
class fa extends se {
  _parse(t) {
    if (this._getType(t) !== H.null) {
      const r = this._getOrReturnCtx(t);
      return B(r, {
        code: O.invalid_type,
        expected: H.null,
        received: r.parsedType
      }), Q;
    }
    return He(t.data);
  }
}
fa.create = (e) => new fa({
  typeName: J.ZodNull,
  ...ne(e)
});
class pa extends se {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return He(t.data);
  }
}
pa.create = (e) => new pa({
  typeName: J.ZodAny,
  ...ne(e)
});
class ga extends se {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return He(t.data);
  }
}
ga.create = (e) => new ga({
  typeName: J.ZodUnknown,
  ...ne(e)
});
class bt extends se {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return B(n, {
      code: O.invalid_type,
      expected: H.never,
      received: n.parsedType
    }), Q;
  }
}
bt.create = (e) => new bt({
  typeName: J.ZodNever,
  ...ne(e)
});
class ma extends se {
  _parse(t) {
    if (this._getType(t) !== H.undefined) {
      const r = this._getOrReturnCtx(t);
      return B(r, {
        code: O.invalid_type,
        expected: H.void,
        received: r.parsedType
      }), Q;
    }
    return He(t.data);
  }
}
ma.create = (e) => new ma({
  typeName: J.ZodVoid,
  ...ne(e)
});
class Xe extends se {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), i = this._def;
    if (n.parsedType !== H.array)
      return B(n, {
        code: O.invalid_type,
        expected: H.array,
        received: n.parsedType
      }), Q;
    if (i.exactLength !== null) {
      const s = n.data.length > i.exactLength.value, o = n.data.length < i.exactLength.value;
      (s || o) && (B(n, {
        code: s ? O.too_big : O.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: s ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (B(n, {
      code: O.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (B(n, {
      code: O.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, o) => i.type._parseAsync(new ht(n, s, n.path, o)))).then((s) => Ue.mergeArray(r, s));
    const a = [...n.data].map((s, o) => i.type._parseSync(new ht(n, s, n.path, o)));
    return Ue.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Xe({
      ...this._def,
      minLength: { value: t, message: V.toString(n) }
    });
  }
  max(t, n) {
    return new Xe({
      ...this._def,
      maxLength: { value: t, message: V.toString(n) }
    });
  }
  length(t, n) {
    return new Xe({
      ...this._def,
      exactLength: { value: t, message: V.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Xe.create = (e, t) => new Xe({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: J.ZodArray,
  ...ne(t)
});
function Ht(e) {
  if (e instanceof be) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = mt.create(Ht(r));
    }
    return new be({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Xe ? new Xe({
    ...e._def,
    type: Ht(e.element)
  }) : e instanceof mt ? mt.create(Ht(e.unwrap())) : e instanceof qt ? qt.create(Ht(e.unwrap())) : e instanceof Ot ? Ot.create(e.items.map((t) => Ht(t))) : e;
}
class be extends se {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = oe.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== H.object) {
      const c = this._getOrReturnCtx(t);
      return B(c, {
        code: O.invalid_type,
        expected: H.object,
        received: c.parsedType
      }), Q;
    }
    const { status: r, ctx: i } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof bt && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        s.includes(c) || o.push(c);
    const l = [];
    for (const c of s) {
      const u = a[c], d = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new ht(i, d, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof bt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: i.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (B(i, {
          code: O.unrecognized_keys,
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
            new ht(i, d, i.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const d = await u.key, f = await u.value;
        c.push({
          key: d,
          value: f,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Ue.mergeObjectSync(r, c)) : Ue.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return V.errToObj, new be({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var a, s;
          const i = ((s = (a = this._def).errorMap) == null ? void 0 : s.call(a, n, r).message) ?? r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: V.errToObj(t).message ?? i
          } : {
            message: i
          };
        }
      } : {}
    });
  }
  strip() {
    return new be({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new be({
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
    return new be({
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
    return new be({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: J.ZodObject
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
    return new be({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const r of oe.objectKeys(t))
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    return new be({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const r of oe.objectKeys(this.shape))
      t[r] || (n[r] = this.shape[r]);
    return new be({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Ht(this);
  }
  partial(t) {
    const n = {};
    for (const r of oe.objectKeys(this.shape)) {
      const i = this.shape[r];
      t && !t[r] ? n[r] = i : n[r] = i.optional();
    }
    return new be({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const r of oe.objectKeys(this.shape))
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof mt; )
          a = a._def.innerType;
        n[r] = a;
      }
    return new be({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return jo(oe.objectKeys(this.shape));
  }
}
be.create = (e, t) => new be({
  shape: () => e,
  unknownKeys: "strip",
  catchall: bt.create(),
  typeName: J.ZodObject,
  ...ne(t)
});
be.strictCreate = (e, t) => new be({
  shape: () => e,
  unknownKeys: "strict",
  catchall: bt.create(),
  typeName: J.ZodObject,
  ...ne(t)
});
be.lazycreate = (e, t) => new be({
  shape: e,
  unknownKeys: "strip",
  catchall: bt.create(),
  typeName: J.ZodObject,
  ...ne(t)
});
class Vn extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function i(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const s = a.map((o) => new it(o.ctx.common.issues));
      return B(n, {
        code: O.invalid_union,
        unionErrors: s
      }), Q;
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
      const o = s.map((l) => new it(l));
      return B(n, {
        code: O.invalid_union,
        unionErrors: o
      }), Q;
    }
  }
  get options() {
    return this._def.options;
  }
}
Vn.create = (e, t) => new Vn({
  options: e,
  typeName: J.ZodUnion,
  ...ne(t)
});
function Or(e, t) {
  const n = ut(e), r = ut(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === H.object && r === H.object) {
    const i = oe.objectKeys(t), a = oe.objectKeys(e).filter((o) => i.indexOf(o) !== -1), s = { ...e, ...t };
    for (const o of a) {
      const l = Or(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      s[o] = l.data;
    }
    return { valid: !0, data: s };
  } else if (n === H.array && r === H.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], o = t[a], l = Or(s, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return n === H.date && r === H.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class jn extends se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (a, s) => {
      if (sa(a) || sa(s))
        return Q;
      const o = Or(a.value, s.value);
      return o.valid ? ((oa(a) || oa(s)) && n.dirty(), { status: n.value, value: o.data }) : (B(r, {
        code: O.invalid_intersection_types
      }), Q);
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
jn.create = (e, t, n) => new jn({
  left: e,
  right: t,
  typeName: J.ZodIntersection,
  ...ne(n)
});
class Ot extends se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== H.array)
      return B(r, {
        code: O.invalid_type,
        expected: H.array,
        received: r.parsedType
      }), Q;
    if (r.data.length < this._def.items.length)
      return B(r, {
        code: O.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Q;
    !this._def.rest && r.data.length > this._def.items.length && (B(r, {
      code: O.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new ht(r, s, r.path, o)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Ue.mergeArray(n, s)) : Ue.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Ot({
      ...this._def,
      rest: t
    });
  }
}
Ot.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ot({
    items: e,
    typeName: J.ZodTuple,
    rest: null,
    ...ne(t)
  });
};
class ha extends se {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== H.map)
      return B(r, {
        code: O.invalid_type,
        expected: H.map,
        received: r.parsedType
      }), Q;
    const i = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([o, l], c) => ({
      key: i._parse(new ht(r, o, r.path, [c, "key"])),
      value: a._parse(new ht(r, l, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of s) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return Q;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of s) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return Q;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
ha.create = (e, t, n) => new ha({
  valueType: t,
  keyType: e,
  typeName: J.ZodMap,
  ...ne(n)
});
class _n extends se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== H.set)
      return B(r, {
        code: O.invalid_type,
        expected: H.set,
        received: r.parsedType
      }), Q;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (B(r, {
      code: O.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (B(r, {
      code: O.too_big,
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
          return Q;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...r.data.values()].map((l, c) => a._parse(new ht(r, l, r.path, c)));
    return r.common.async ? Promise.all(o).then((l) => s(l)) : s(o);
  }
  min(t, n) {
    return new _n({
      ...this._def,
      minSize: { value: t, message: V.toString(n) }
    });
  }
  max(t, n) {
    return new _n({
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
_n.create = (e, t) => new _n({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: J.ZodSet,
  ...ne(t)
});
class ba extends se {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ba.create = (e, t) => new ba({
  getter: e,
  typeName: J.ZodLazy,
  ...ne(t)
});
class _a extends se {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return B(n, {
        received: n.data,
        code: O.invalid_literal,
        expected: this._def.value
      }), Q;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
_a.create = (e, t) => new _a({
  value: e,
  typeName: J.ZodLiteral,
  ...ne(t)
});
function jo(e, t) {
  return new Wt({
    values: e,
    typeName: J.ZodEnum,
    ...ne(t)
  });
}
class Wt extends se {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return B(n, {
        expected: oe.joinValues(r),
        received: n.parsedType,
        code: O.invalid_type
      }), Q;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return B(n, {
        received: n.data,
        code: O.invalid_enum_value,
        options: r
      }), Q;
    }
    return He(t.data);
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
    return Wt.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Wt.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Wt.create = jo;
class ya extends se {
  _parse(t) {
    const n = oe.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== H.string && r.parsedType !== H.number) {
      const i = oe.objectValues(n);
      return B(r, {
        expected: oe.joinValues(i),
        received: r.parsedType,
        code: O.invalid_type
      }), Q;
    }
    if (this._cache || (this._cache = new Set(oe.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const i = oe.objectValues(n);
      return B(r, {
        received: r.data,
        code: O.invalid_enum_value,
        options: i
      }), Q;
    }
    return He(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ya.create = (e, t) => new ya({
  values: e,
  typeName: J.ZodNativeEnum,
  ...ne(t)
});
class Kn extends se {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== H.promise && n.common.async === !1)
      return B(n, {
        code: O.invalid_type,
        expected: H.promise,
        received: n.parsedType
      }), Q;
    const r = n.parsedType === H.promise ? n.data : Promise.resolve(n.data);
    return He(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Kn.create = (e, t) => new Kn({
  type: e,
  typeName: J.ZodPromise,
  ...ne(t)
});
class Zt extends se {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === J.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = this._def.effect || null, a = {
      addIssue: (s) => {
        B(r, s), s.fatal ? n.abort() : n.dirty();
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
            return Q;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? Q : l.status === "dirty" || n.value === "dirty" ? on(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return Q;
        const o = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? Q : o.status === "dirty" || n.value === "dirty" ? on(o.value) : o;
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
        return o.status === "aborted" ? Q : (o.status === "dirty" && n.dirty(), s(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? Q : (o.status === "dirty" && n.dirty(), s(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Gt(s))
          return Q;
        const o = i.transform(s.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => Gt(s) ? Promise.resolve(i.transform(s.value, a)).then((o) => ({
          status: n.value,
          value: o
        })) : Q);
    oe.assertNever(i);
  }
}
Zt.create = (e, t, n) => new Zt({
  schema: e,
  typeName: J.ZodEffects,
  effect: t,
  ...ne(n)
});
Zt.createWithPreprocess = (e, t, n) => new Zt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: J.ZodEffects,
  ...ne(n)
});
class mt extends se {
  _parse(t) {
    return this._getType(t) === H.undefined ? He(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
mt.create = (e, t) => new mt({
  innerType: e,
  typeName: J.ZodOptional,
  ...ne(t)
});
class qt extends se {
  _parse(t) {
    return this._getType(t) === H.null ? He(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
qt.create = (e, t) => new qt({
  innerType: e,
  typeName: J.ZodNullable,
  ...ne(t)
});
class Cr extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === H.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Cr.create = (e, t) => new Cr({
  innerType: e,
  typeName: J.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ne(t)
});
class Rr extends se {
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
    return zn(i) ? i.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new it(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new it(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Rr.create = (e, t) => new Rr({
  innerType: e,
  typeName: J.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ne(t)
});
class Ea extends se {
  _parse(t) {
    if (this._getType(t) !== H.nan) {
      const r = this._getOrReturnCtx(t);
      return B(r, {
        code: O.invalid_type,
        expected: H.nan,
        received: r.parsedType
      }), Q;
    }
    return { status: "valid", value: t.data };
  }
}
Ea.create = (e) => new Ea({
  typeName: J.ZodNaN,
  ...ne(e)
});
class _b extends se {
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
class si extends se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Q : a.status === "dirty" ? (n.dirty(), on(a.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? Q : i.status === "dirty" ? (n.dirty(), {
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
    return new si({
      in: t,
      out: n,
      typeName: J.ZodPipeline
    });
  }
}
class Ir extends se {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (i) => (Gt(i) && (i.value = Object.freeze(i.value)), i);
    return zn(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ir.create = (e, t) => new Ir({
  innerType: e,
  typeName: J.ZodReadonly,
  ...ne(t)
});
var J;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(J || (J = {}));
const yb = gt.create;
bt.create;
Xe.create;
const Eb = be.create;
Vn.create;
jn.create;
Ot.create;
Wt.create;
Kn.create;
mt.create;
qt.create;
const vb = Eb({
  content: yb().min(1, $e("home.form.validation.content.minLength")).trim()
}), wb = _t({
  slots: {
    wrapper: X(
      "flex flex-col items-center justify-center w-full max-w-full relative gap-2.5 mx-auto",
      "bg-list-active-side-nav rounded-b-3xl px-2.5 pb-2.5 pt-5",
      "max-w-[47.25rem]"
    ),
    container: X(
      "bg-background-dialog rounded-xl w-full max-w-full min-w-0 transition-all duration-300 ease-in-out",
      "flex gap-4 px-5 py-5 items-end"
    ),
    scrollButtonStyle: X(
      "cursor-pointer absolute -top-10 left-1/2 transform -translate-x-1/2",
      "bg-neutral-800 text-white rounded-full w-8 h-8 flex items-center justify-center",
      "hover:bg-neutral-700 transition-colors duration-200",
      "focus:outline-none focus:ring-2 focus:ring-neutral-500"
    ),
    contentWrapper: X("flex-1 flex flex-col min-w-0 px-2"),
    input: X(
      "prompt-textarea bg-transparent text-white border-none outline-none w-full placeholder:text-white/50",
      "text-sm tracking-[0.0125rem] leading-[1.4] resize-none",
      "min-h-6 max-h-[10rem] overflow-y-auto custom-scroll"
    ),
    transcriptText: X(
      "text-white text-sm tracking-[0.0125rem] leading-[1.4] w-full block h-fit max-h-[3.75rem] overflow-y-auto custom-scroll"
    ),
    actionsWrapper: X("flex items-end gap-1 shrink-0"),
    submitStyle: X(
      "w-8 h-8 bg-white hover:bg-white/70 focus:bg-white/70 p-0 rounded-full flex items-center justify-center shrink-0"
    ),
    trashStyle: X("w-8 h-8 flex items-center justify-center"),
    errorText: X("text-white/70 text-sm")
  },
  variants: {
    state: {
      idle_typing: {
        container: X(
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
}), xb = ({
  placeholder: e,
  assistantProperties: t,
  t: n
}) => {
  var i;
  const r = ((i = t == null ? void 0 : t.persona) == null ? void 0 : i.name) || n("home.prompt.defaultAssistantName");
  return e || n("home.prompt.placeholder", { assistantName: r });
}, Ko = ({
  disabled: e,
  placeholder: t,
  showScrollButton: n,
  scrollToBottom: r
}) => {
  const [i, a] = D.useState("idle"), s = D.useRef(null), o = D.useRef(null), { assistantProperties: l } = Gn(), c = va(), { mutate: u, isPending: d } = gh(), {
    startRecognition: f,
    stopRecognition: m,
    transcript: p,
    isRecognizing: h,
    error: _
  } = mh(), { t: y } = yn(), {
    register: E,
    handleSubmit: N,
    watch: T,
    reset: M,
    formState: { isValid: F },
    setValue: j
  } = Bh({
    resolver: Hh(vb),
    defaultValues: { content: "" },
    mode: "onChange"
  }), G = T("content"), U = wb({
    state: i === "idle" || i === "typing" ? "idle_typing" : i
  }), v = d, ie = xb({
    placeholder: t,
    assistantProperties: l ?? null,
    t: y
  }), K = (C) => {
    C.content.trim() && (u({
      content: C.content,
      threadId: c || void 0
    }), o.current && (o.current.style.height = "auto"), M(), a("idle"));
  }, Z = () => {
    M(), o.current && (o.current.style.height = "auto");
  }, Y = () => {
    m(), Z(), a("idle");
  }, re = (C) => {
    C.key !== "Enter" || C.shiftKey || (C.preventDefault(), v) || !C.currentTarget.value.trim() || N(K)(C);
  };
  D.useEffect(() => {
    h ? a("recognizing") : _ ? a("error") : i === "recognizing" && !h && a("reviewing");
  }, [h, _, i]), D.useEffect(() => {
    i === "reviewing" && !G.trim() ? a("idle") : i !== "recognizing" && i !== "reviewing" && a(G ? "typing" : "idle");
  }, [G, i]), D.useEffect(() => {
    j("content", p);
  }, [p, j]), D.useEffect(() => {
    if (s.current) {
      const C = s.current;
      C.scrollTop = C.scrollHeight;
    }
  }, [p]);
  const S = () => {
    switch (i) {
      case "idle":
        return /* @__PURE__ */ k.jsx(
          qe,
          {
            disabled: e,
            type: "button",
            onClick: f,
            className: U.submitStyle(),
            iconClassName: "icon-size-custom cursor-pointer",
            colorFill: "fill-list-active-side-nav",
            name: "microphone"
          }
        );
      case "typing":
        return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
          G.trim() && /* @__PURE__ */ k.jsx(
            qe,
            {
              onClick: Z,
              className: U.trashStyle(),
              size: "sm",
              iconClassName: "!rounded-md transition-all duration-300 ease-in-out text-white hover:bg-neutral-2 focus-visible:bg-neutral-2 focus-visible:ring-1 focus-visible:ring-neutral-2 focus-visible:border-neutral-2 icon-size-custom cursor-pointer",
              name: "trash"
            }
          ),
          /* @__PURE__ */ k.jsx(
            qe,
            {
              disabled: e || !G.trim(),
              type: "submit",
              className: U.submitStyle(),
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
            qe,
            {
              type: "button",
              onClick: Y,
              className: U.trashStyle(),
              size: "xxs",
              iconClassName: "rounded-md transition-all duration-300 ease-in-out text-white hover:bg-neutral-2 focus-visible:bg-neutral-2 focus-visible:ring-1 focus-visible:ring-neutral-2 focus-visible:border-neutral-2 icon-size-custom cursor-pointer",
              name: "trash"
            }
          ),
          /* @__PURE__ */ k.jsx(
            qe,
            {
              type: C ? "submit" : "button",
              onClick: C ? void 0 : m,
              className: U.submitStyle(),
              iconClassName: "icon-size-custom cursor-pointer",
              colorFill: "fill-list-active-side-nav",
              name: C ? "send-solid" : "check"
            }
          )
        ] });
      }
      case "error":
        return /* @__PURE__ */ k.jsx(
          qe,
          {
            type: "button",
            onClick: f,
            className: U.submitStyle(),
            iconClassName: "icon-size-custom cursor-pointer",
            colorFill: "fill-list-active-side-nav",
            name: "microphone"
          }
        );
      default:
        return null;
    }
  }, P = () => {
    switch (i) {
      case "recognizing":
        return /* @__PURE__ */ k.jsx("span", { ref: s, className: U.transcriptText(), children: p || y("home.prompt.listening") });
      case "reviewing":
        return /* @__PURE__ */ k.jsx(
          "textarea",
          {
            ...E("content"),
            className: X(U.input(), "resize-none")
          }
        );
      case "error":
        return /* @__PURE__ */ k.jsx("p", { className: U.errorText(), children: y("home.prompt.transcriptionError") });
      default: {
        const { ref: C, ...W } = E("content");
        return /* @__PURE__ */ k.jsx(
          "textarea",
          {
            ref: (ee) => {
              C(ee), o.current = ee;
            },
            ...W,
            placeholder: ie,
            disabled: e,
            rows: 1,
            className: X(U.input(), "resize-none"),
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
      onSubmit: N(K),
      className: U.wrapper(),
      children: [
        n && /* @__PURE__ */ k.jsx(
          "button",
          {
            onClick: r,
            className: X(
              U.scrollButtonStyle(),
              "absolute -top-10 left-1/2 transform -translate-x-1/2"
            ),
            "aria-label": y("home.prompt.scrollToBottom"),
            type: "button",
            children: /* @__PURE__ */ k.jsx(
              Mr,
              {
                className: "icon-size-custom text-white",
                name: "arrow-down",
                title: y("home.prompt.scrollToBottom")
              }
            )
          }
        ),
        /* @__PURE__ */ k.jsxs("div", { className: U.container(), children: [
          /* @__PURE__ */ k.jsx("div", { className: U.contentWrapper(), children: P() }),
          /* @__PURE__ */ k.jsxs("div", { className: U.actionsWrapper(), children: [
            i === "recognizing" && /* @__PURE__ */ k.jsx("div", { className: "flex-1 min-w-0 flex items-center", children: /* @__PURE__ */ k.jsx(Gh, { isActive: h }) }),
            S()
          ] })
        ] })
      ]
    }
  );
};
Ko.displayName = "Prompt";
const kb = _t({
  slots: {
    headerBase: "flex items-center justify-between gap-3 px-4 py-4 shrink-0 bg-list-active-side-nav",
    container: "w-full h-full min-h-0 bg-list-active-side-nav flex flex-col overflow-hidden",
    mainContent: "flex flex-col flex-1 w-full h-full min-h-0",
    chatList: "flex-1 overflow-y-auto custom-scroll min-h-0",
    buttonAction: "cursor-pointer flex items-center justify-center rounded-lg hover:bg-neutral-2 p-2 transition-all duration-300 ease-in-out"
  }
});
function Sb() {
  var F;
  const e = kb(), t = Sa(), {
    data: n,
    error: r,
    refetch: i
  } = Aa(), { isSidebarOpen: a, setIsSidebarOpen: s } = ol(), o = D.useRef(null), l = D.useRef(null), [c, u] = D.useState(!1), { assistantId: d } = ll(), { data: f, isSuccess: m } = wa(), { initializeAssistantId: p, selectThread: h } = Ta(), { t: _ } = yn(), y = D.useRef(!1), { isFullscreen: E, isMobile: N } = fl();
  D.useEffect(() => {
    if (m && (f != null && f.page)) {
      const j = f.page.filter(
        (G) => typeof G.id == "string"
      );
      p(j, d);
    }
  }, [m, f, d]);
  const T = () => {
    var j;
    (j = l.current) == null || j.scrollIntoView({ behavior: "smooth" });
  };
  D.useEffect(() => {
    const j = o.current;
    if (!j) return;
    const G = () => {
      const U = j.scrollHeight - j.scrollTop - j.clientHeight < 10;
      u(!U);
    };
    return j.addEventListener("scroll", G, { passive: !0 }), G(), () => {
      j.removeEventListener("scroll", G);
    };
  }, []), pl(), D.useEffect(() => {
    E && !N ? s(!0) : (N || y.current && !E) && s(!1), y.current = E;
  }, [E, N, s]);
  const M = () => /* @__PURE__ */ k.jsxs("div", { className: X(e.headerBase()), children: [
    /* @__PURE__ */ k.jsx("div", { className: "flex items-center justify-start min-w-[40px]", children: !a && /* @__PURE__ */ k.jsx(
      qe,
      {
        size: "md",
        type: "button",
        className: X(e.buttonAction()),
        "data-testid": "sidebar-toggle-button",
        onClick: () => s(!0),
        name: "user-list-icon-closed",
        colorFill: "fill-white",
        title: "Abrir menu"
      }
    ) }),
    /* @__PURE__ */ k.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ k.jsx(Nl, {}) }),
    /* @__PURE__ */ k.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ k.jsx(
      qe,
      {
        size: "md",
        type: "button",
        className: X(e.buttonAction()),
        "aria-label": _("home.newConversation"),
        title: _("home.newConversation"),
        onClick: () => h(null),
        name: "edit",
        colorFill: "fill-white"
      }
    ) })
  ] });
  return /* @__PURE__ */ k.jsx("div", { className: X(e.container()), children: /* @__PURE__ */ k.jsxs("div", { className: X(e.mainContent()), children: [
    M(),
    /* @__PURE__ */ k.jsx("div", { className: X(e.chatList()), ref: o, children: /* @__PURE__ */ k.jsx(
      Io,
      {
        containerRef: o,
        messagesEndRef: l
      }
    ) }),
    /* @__PURE__ */ k.jsxs("div", { className: "w-full max-w-full overflow-x-hidden", children: [
      /* @__PURE__ */ k.jsx(
        Ko,
        {
          disabled: t,
          showScrollButton: c && (((F = n == null ? void 0 : n.messages) == null ? void 0 : F.length) ?? 0) > 0,
          scrollToBottom: T
        }
      ),
      /* @__PURE__ */ k.jsx(
        Ca,
        {
          size: dt.Small,
          className: "mb-2.5 privacy-notice-text text-center text-white/50 text-[10px]",
          children: _("home.prompt.privacyNotice")
        }
      )
    ] })
  ] }) });
}
const Lb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sb
}, Symbol.toStringTag, { value: "Module" }));
export {
  qr as a,
  gn as b,
  Fn as c,
  Dp as d,
  Cb as e,
  tt as f,
  Mb as g,
  Ib as h,
  Rb as i,
  Vt as j,
  Le as k,
  Nm as l,
  et as m,
  kn as n,
  Ab as o,
  Db as p,
  fm as q,
  Tm as r,
  ln as s,
  ro as t,
  Ob as u,
  Xs as v,
  Zn as w,
  wc as x,
  Lb as y
};
