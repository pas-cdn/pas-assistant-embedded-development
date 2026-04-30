import { G as Gt, H as Br, I as Hn, J as zn, K as Vn, L as Yt, N as qn, O as Xn, P as Qn, Q as Kn, R as Jn, U as Ot } from "./mermaid-VLURNSYL-BjCM-CWA.js";
import { r as le, j as G } from "./embed-entry-BxfoUARY.js";
let x = class extends Error {
  constructor(e) {
    super(e), this.name = "ShikiError";
  }
};
function Zn(t) {
  return Bt(t);
}
function Bt(t) {
  return Array.isArray(t) ? Yn(t) : t instanceof RegExp ? t : typeof t == "object" ? es(t) : t;
}
function Yn(t) {
  let e = [];
  for (let r = 0, n = t.length; r < n; r++)
    e[r] = Bt(t[r]);
  return e;
}
function es(t) {
  let e = {};
  for (let r in t)
    e[r] = Bt(t[r]);
  return e;
}
function Fr(t, ...e) {
  return e.forEach((r) => {
    for (let n in r)
      t[n] = r[n];
  }), t;
}
function Dr(t) {
  const e = ~t.lastIndexOf("/") || ~t.lastIndexOf("\\");
  return e === 0 ? t : ~e === t.length - 1 ? Dr(t.substring(0, t.length - 1)) : t.substr(~e + 1);
}
var it = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, Ie = class {
  static hasCaptures(t) {
    return t === null ? !1 : (it.lastIndex = 0, it.test(t));
  }
  static replaceCaptures(t, e, r) {
    return t.replace(it, (n, s, i, o) => {
      let c = r[parseInt(s || i, 10)];
      if (c) {
        let a = e.substring(c.start, c.end);
        for (; a[0] === "."; )
          a = a.substring(1);
        switch (o) {
          case "downcase":
            return a.toLowerCase();
          case "upcase":
            return a.toUpperCase();
          default:
            return a;
        }
      } else
        return n;
    });
  }
};
function jr(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ur(t, e) {
  if (t === null && e === null)
    return 0;
  if (!t)
    return -1;
  if (!e)
    return 1;
  let r = t.length, n = e.length;
  if (r === n) {
    for (let s = 0; s < r; s++) {
      let i = jr(t[s], e[s]);
      if (i !== 0)
        return i;
    }
    return 0;
  }
  return r - n;
}
function er(t) {
  return !!(/^#[0-9a-f]{6}$/i.test(t) || /^#[0-9a-f]{8}$/i.test(t) || /^#[0-9a-f]{3}$/i.test(t) || /^#[0-9a-f]{4}$/i.test(t));
}
function Wr(t) {
  return t.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var Hr = class {
  constructor(t) {
    this.fn = t;
  }
  cache = /* @__PURE__ */ new Map();
  get(t) {
    if (this.cache.has(t))
      return this.cache.get(t);
    const e = this.fn(t);
    return this.cache.set(t, e), e;
  }
}, Fe = class {
  constructor(t, e, r) {
    this._colorMap = t, this._defaults = e, this._root = r;
  }
  static createFromRawTheme(t, e) {
    return this.createFromParsedTheme(ns(t), e);
  }
  static createFromParsedTheme(t, e) {
    return is(t, e);
  }
  _cachedMatchRoot = new Hr(
    (t) => this._root.match(t)
  );
  getColorMap() {
    return this._colorMap.getColorMap();
  }
  getDefaults() {
    return this._defaults;
  }
  match(t) {
    if (t === null)
      return this._defaults;
    const e = t.scopeName, n = this._cachedMatchRoot.get(e).find(
      (s) => ts(t.parent, s.parentScopes)
    );
    return n ? new zr(
      n.fontStyle,
      n.foreground,
      n.background
    ) : null;
  }
}, ot = class Ge {
  constructor(e, r) {
    this.parent = e, this.scopeName = r;
  }
  static push(e, r) {
    for (const n of r)
      e = new Ge(e, n);
    return e;
  }
  static from(...e) {
    let r = null;
    for (let n = 0; n < e.length; n++)
      r = new Ge(r, e[n]);
    return r;
  }
  push(e) {
    return new Ge(this, e);
  }
  getSegments() {
    let e = this;
    const r = [];
    for (; e; )
      r.push(e.scopeName), e = e.parent;
    return r.reverse(), r;
  }
  toString() {
    return this.getSegments().join(" ");
  }
  extends(e) {
    return this === e ? !0 : this.parent === null ? !1 : this.parent.extends(e);
  }
  getExtensionIfDefined(e) {
    const r = [];
    let n = this;
    for (; n && n !== e; )
      r.push(n.scopeName), n = n.parent;
    return n === e ? r.reverse() : void 0;
  }
};
function ts(t, e) {
  if (e.length === 0)
    return !0;
  for (let r = 0; r < e.length; r++) {
    let n = e[r], s = !1;
    if (n === ">") {
      if (r === e.length - 1)
        return !1;
      n = e[++r], s = !0;
    }
    for (; t && !rs(t.scopeName, n); ) {
      if (s)
        return !1;
      t = t.parent;
    }
    if (!t)
      return !1;
    t = t.parent;
  }
  return !0;
}
function rs(t, e) {
  return e === t || t.startsWith(e) && t[e.length] === ".";
}
var zr = class {
  constructor(t, e, r) {
    this.fontStyle = t, this.foregroundId = e, this.backgroundId = r;
  }
};
function ns(t) {
  if (!t)
    return [];
  if (!t.settings || !Array.isArray(t.settings))
    return [];
  let e = t.settings, r = [], n = 0;
  for (let s = 0, i = e.length; s < i; s++) {
    let o = e[s];
    if (!o.settings)
      continue;
    let c;
    if (typeof o.scope == "string") {
      let p = o.scope;
      p = p.replace(/^[,]+/, ""), p = p.replace(/[,]+$/, ""), c = p.split(",");
    } else Array.isArray(o.scope) ? c = o.scope : c = [""];
    let a = -1;
    if (typeof o.settings.fontStyle == "string") {
      a = 0;
      let p = o.settings.fontStyle.split(" ");
      for (let h = 0, d = p.length; h < d; h++)
        switch (p[h]) {
          case "italic":
            a = a | 1;
            break;
          case "bold":
            a = a | 2;
            break;
          case "underline":
            a = a | 4;
            break;
          case "strikethrough":
            a = a | 8;
            break;
        }
    }
    let l = null;
    typeof o.settings.foreground == "string" && er(o.settings.foreground) && (l = o.settings.foreground);
    let u = null;
    typeof o.settings.background == "string" && er(o.settings.background) && (u = o.settings.background);
    for (let p = 0, h = c.length; p < h; p++) {
      let f = c[p].trim().split(" "), y = f[f.length - 1], b = null;
      f.length > 1 && (b = f.slice(0, f.length - 1), b.reverse()), r[n++] = new ss(
        y,
        b,
        s,
        a,
        l,
        u
      );
    }
  }
  return r;
}
var ss = class {
  constructor(t, e, r, n, s, i) {
    this.scope = t, this.parentScopes = e, this.index = r, this.fontStyle = n, this.foreground = s, this.background = i;
  }
}, $ = /* @__PURE__ */ ((t) => (t[t.NotSet = -1] = "NotSet", t[t.None = 0] = "None", t[t.Italic = 1] = "Italic", t[t.Bold = 2] = "Bold", t[t.Underline = 4] = "Underline", t[t.Strikethrough = 8] = "Strikethrough", t))($ || {});
function is(t, e) {
  t.sort((a, l) => {
    let u = jr(a.scope, l.scope);
    return u !== 0 || (u = Ur(a.parentScopes, l.parentScopes), u !== 0) ? u : a.index - l.index;
  });
  let r = 0, n = "#000000", s = "#ffffff";
  for (; t.length >= 1 && t[0].scope === ""; ) {
    let a = t.shift();
    a.fontStyle !== -1 && (r = a.fontStyle), a.foreground !== null && (n = a.foreground), a.background !== null && (s = a.background);
  }
  let i = new os(e), o = new zr(r, i.getId(n), i.getId(s)), c = new cs(new Ct(0, null, -1, 0, 0), []);
  for (let a = 0, l = t.length; a < l; a++) {
    let u = t[a];
    c.insert(0, u.scope, u.parentScopes, u.fontStyle, i.getId(u.foreground), i.getId(u.background));
  }
  return new Fe(i, o, c);
}
var os = class {
  _isFrozen;
  _lastColorId;
  _id2color;
  _color2id;
  constructor(t) {
    if (this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null), Array.isArray(t)) {
      this._isFrozen = !0;
      for (let e = 0, r = t.length; e < r; e++)
        this._color2id[t[e]] = e, this._id2color[e] = t[e];
    } else
      this._isFrozen = !1;
  }
  getId(t) {
    if (t === null)
      return 0;
    t = t.toUpperCase();
    let e = this._color2id[t];
    if (e)
      return e;
    if (this._isFrozen)
      throw new Error(`Missing color in color map - ${t}`);
    return e = ++this._lastColorId, this._color2id[t] = e, this._id2color[e] = t, e;
  }
  getColorMap() {
    return this._id2color.slice(0);
  }
}, as = Object.freeze([]), Ct = class Vr {
  scopeDepth;
  parentScopes;
  fontStyle;
  foreground;
  background;
  constructor(e, r, n, s, i) {
    this.scopeDepth = e, this.parentScopes = r || as, this.fontStyle = n, this.foreground = s, this.background = i;
  }
  clone() {
    return new Vr(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
  }
  static cloneArr(e) {
    let r = [];
    for (let n = 0, s = e.length; n < s; n++)
      r[n] = e[n].clone();
    return r;
  }
  acceptOverwrite(e, r, n, s) {
    this.scopeDepth > e ? console.log("how did this happen?") : this.scopeDepth = e, r !== -1 && (this.fontStyle = r), n !== 0 && (this.foreground = n), s !== 0 && (this.background = s);
  }
}, cs = class St {
  constructor(e, r = [], n = {}) {
    this._mainRule = e, this._children = n, this._rulesWithParentScopes = r;
  }
  _rulesWithParentScopes;
  static _cmpBySpecificity(e, r) {
    if (e.scopeDepth !== r.scopeDepth)
      return r.scopeDepth - e.scopeDepth;
    let n = 0, s = 0;
    for (; e.parentScopes[n] === ">" && n++, r.parentScopes[s] === ">" && s++, !(n >= e.parentScopes.length || s >= r.parentScopes.length); ) {
      const i = r.parentScopes[s].length - e.parentScopes[n].length;
      if (i !== 0)
        return i;
      n++, s++;
    }
    return r.parentScopes.length - e.parentScopes.length;
  }
  match(e) {
    if (e !== "") {
      let n = e.indexOf("."), s, i;
      if (n === -1 ? (s = e, i = "") : (s = e.substring(0, n), i = e.substring(n + 1)), this._children.hasOwnProperty(s))
        return this._children[s].match(i);
    }
    const r = this._rulesWithParentScopes.concat(this._mainRule);
    return r.sort(St._cmpBySpecificity), r;
  }
  insert(e, r, n, s, i, o) {
    if (r === "") {
      this._doInsertHere(e, n, s, i, o);
      return;
    }
    let c = r.indexOf("."), a, l;
    c === -1 ? (a = r, l = "") : (a = r.substring(0, c), l = r.substring(c + 1));
    let u;
    this._children.hasOwnProperty(a) ? u = this._children[a] : (u = new St(this._mainRule.clone(), Ct.cloneArr(this._rulesWithParentScopes)), this._children[a] = u), u.insert(e + 1, l, n, s, i, o);
  }
  _doInsertHere(e, r, n, s, i) {
    if (r === null) {
      this._mainRule.acceptOverwrite(e, n, s, i);
      return;
    }
    for (let o = 0, c = this._rulesWithParentScopes.length; o < c; o++) {
      let a = this._rulesWithParentScopes[o];
      if (Ur(a.parentScopes, r) === 0) {
        a.acceptOverwrite(e, n, s, i);
        return;
      }
    }
    n === -1 && (n = this._mainRule.fontStyle), s === 0 && (s = this._mainRule.foreground), i === 0 && (i = this._mainRule.background), this._rulesWithParentScopes.push(new Ct(e, r, n, s, i));
  }
}, he = class P {
  static toBinaryStr(e) {
    return e.toString(2).padStart(32, "0");
  }
  static print(e) {
    const r = P.getLanguageId(e), n = P.getTokenType(e), s = P.getFontStyle(e), i = P.getForeground(e), o = P.getBackground(e);
    console.log({
      languageId: r,
      tokenType: n,
      fontStyle: s,
      foreground: i,
      background: o
    });
  }
  static getLanguageId(e) {
    return (e & 255) >>> 0;
  }
  static getTokenType(e) {
    return (e & 768) >>> 8;
  }
  static containsBalancedBrackets(e) {
    return (e & 1024) !== 0;
  }
  static getFontStyle(e) {
    return (e & 30720) >>> 11;
  }
  static getForeground(e) {
    return (e & 16744448) >>> 15;
  }
  static getBackground(e) {
    return (e & 4278190080) >>> 24;
  }
  /**
   * Updates the fields in `metadata`.
   * A value of `0`, `NotSet` or `null` indicates that the corresponding field should be left as is.
   */
  static set(e, r, n, s, i, o, c) {
    let a = P.getLanguageId(e), l = P.getTokenType(e), u = P.containsBalancedBrackets(e) ? 1 : 0, p = P.getFontStyle(e), h = P.getForeground(e), d = P.getBackground(e);
    return r !== 0 && (a = r), n !== 8 && (l = n), s !== null && (u = s ? 1 : 0), i !== -1 && (p = i), o !== 0 && (h = o), c !== 0 && (d = c), (a << 0 | l << 8 | u << 10 | p << 11 | h << 15 | d << 24) >>> 0;
  }
};
function De(t, e) {
  const r = [], n = ls(t);
  let s = n.next();
  for (; s !== null; ) {
    let a = 0;
    if (s.length === 2 && s.charAt(1) === ":") {
      switch (s.charAt(0)) {
        case "R":
          a = 1;
          break;
        case "L":
          a = -1;
          break;
        default:
          console.log(`Unknown priority ${s} in scope selector`);
      }
      s = n.next();
    }
    let l = o();
    if (r.push({ matcher: l, priority: a }), s !== ",")
      break;
    s = n.next();
  }
  return r;
  function i() {
    if (s === "-") {
      s = n.next();
      const a = i();
      return (l) => !!a && !a(l);
    }
    if (s === "(") {
      s = n.next();
      const a = c();
      return s === ")" && (s = n.next()), a;
    }
    if (tr(s)) {
      const a = [];
      do
        a.push(s), s = n.next();
      while (tr(s));
      return (l) => e(a, l);
    }
    return null;
  }
  function o() {
    const a = [];
    let l = i();
    for (; l; )
      a.push(l), l = i();
    return (u) => a.every((p) => p(u));
  }
  function c() {
    const a = [];
    let l = o();
    for (; l && (a.push(l), s === "|" || s === ","); ) {
      do
        s = n.next();
      while (s === "|" || s === ",");
      l = o();
    }
    return (u) => a.some((p) => p(u));
  }
}
function tr(t) {
  return !!t && !!t.match(/[\w\.:]+/);
}
function ls(t) {
  let e = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, r = e.exec(t);
  return {
    next: () => {
      if (!r)
        return null;
      const n = r[0];
      return r = e.exec(t), n;
    }
  };
}
function qr(t) {
  typeof t.dispose == "function" && t.dispose();
}
var Ce = class {
  constructor(t) {
    this.scopeName = t;
  }
  toKey() {
    return this.scopeName;
  }
}, us = class {
  constructor(t, e) {
    this.scopeName = t, this.ruleName = e;
  }
  toKey() {
    return `${this.scopeName}#${this.ruleName}`;
  }
}, ps = class {
  _references = [];
  _seenReferenceKeys = /* @__PURE__ */ new Set();
  get references() {
    return this._references;
  }
  visitedRule = /* @__PURE__ */ new Set();
  add(t) {
    const e = t.toKey();
    this._seenReferenceKeys.has(e) || (this._seenReferenceKeys.add(e), this._references.push(t));
  }
}, hs = class {
  constructor(t, e) {
    this.repo = t, this.initialScopeName = e, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new Ce(this.initialScopeName)];
  }
  seenFullScopeRequests = /* @__PURE__ */ new Set();
  seenPartialScopeRequests = /* @__PURE__ */ new Set();
  Q;
  processQueue() {
    const t = this.Q;
    this.Q = [];
    const e = new ps();
    for (const r of t)
      ds(r, this.initialScopeName, this.repo, e);
    for (const r of e.references)
      if (r instanceof Ce) {
        if (this.seenFullScopeRequests.has(r.scopeName))
          continue;
        this.seenFullScopeRequests.add(r.scopeName), this.Q.push(r);
      } else {
        if (this.seenFullScopeRequests.has(r.scopeName) || this.seenPartialScopeRequests.has(r.toKey()))
          continue;
        this.seenPartialScopeRequests.add(r.toKey()), this.Q.push(r);
      }
  }
};
function ds(t, e, r, n) {
  const s = r.lookup(t.scopeName);
  if (!s) {
    if (t.scopeName === e)
      throw new Error(`No grammar provided for <${e}>`);
    return;
  }
  const i = r.lookup(e);
  t instanceof Ce ? Oe({ baseGrammar: i, selfGrammar: s }, n) : kt(
    t.ruleName,
    { baseGrammar: i, selfGrammar: s, repository: s.repository },
    n
  );
  const o = r.injections(t.scopeName);
  if (o)
    for (const c of o)
      n.add(new Ce(c));
}
function kt(t, e, r) {
  if (e.repository && e.repository[t]) {
    const n = e.repository[t];
    je([n], e, r);
  }
}
function Oe(t, e) {
  t.selfGrammar.patterns && Array.isArray(t.selfGrammar.patterns) && je(
    t.selfGrammar.patterns,
    { ...t, repository: t.selfGrammar.repository },
    e
  ), t.selfGrammar.injections && je(
    Object.values(t.selfGrammar.injections),
    { ...t, repository: t.selfGrammar.repository },
    e
  );
}
function je(t, e, r) {
  for (const n of t) {
    if (r.visitedRule.has(n))
      continue;
    r.visitedRule.add(n);
    const s = n.repository ? Fr({}, e.repository, n.repository) : e.repository;
    Array.isArray(n.patterns) && je(n.patterns, { ...e, repository: s }, r);
    const i = n.include;
    if (!i)
      continue;
    const o = Xr(i);
    switch (o.kind) {
      case 0:
        Oe({ ...e, selfGrammar: e.baseGrammar }, r);
        break;
      case 1:
        Oe(e, r);
        break;
      case 2:
        kt(o.ruleName, { ...e, repository: s }, r);
        break;
      case 3:
      case 4:
        const c = o.scopeName === e.selfGrammar.scopeName ? e.selfGrammar : o.scopeName === e.baseGrammar.scopeName ? e.baseGrammar : void 0;
        if (c) {
          const a = { baseGrammar: e.baseGrammar, selfGrammar: c, repository: s };
          o.kind === 4 ? kt(o.ruleName, a, r) : Oe(a, r);
        } else
          o.kind === 4 ? r.add(new us(o.scopeName, o.ruleName)) : r.add(new Ce(o.scopeName));
        break;
    }
  }
}
var fs = class {
  kind = 0;
}, ms = class {
  kind = 1;
}, gs = class {
  constructor(t) {
    this.ruleName = t;
  }
  kind = 2;
}, ys = class {
  constructor(t) {
    this.scopeName = t;
  }
  kind = 3;
}, bs = class {
  constructor(t, e) {
    this.scopeName = t, this.ruleName = e;
  }
  kind = 4;
};
function Xr(t) {
  if (t === "$base")
    return new fs();
  if (t === "$self")
    return new ms();
  const e = t.indexOf("#");
  if (e === -1)
    return new ys(t);
  if (e === 0)
    return new gs(t.substring(1));
  {
    const r = t.substring(0, e), n = t.substring(e + 1);
    return new bs(r, n);
  }
}
var ws = /\\(\d+)/, rr = /\\(\d+)/g, _s = -1, Qr = -2;
var ve = class {
  $location;
  id;
  _nameIsCapturing;
  _name;
  _contentNameIsCapturing;
  _contentName;
  constructor(t, e, r, n) {
    this.$location = t, this.id = e, this._name = r || null, this._nameIsCapturing = Ie.hasCaptures(this._name), this._contentName = n || null, this._contentNameIsCapturing = Ie.hasCaptures(this._contentName);
  }
  get debugName() {
    const t = this.$location ? `${Dr(this.$location.filename)}:${this.$location.line}` : "unknown";
    return `${this.constructor.name}#${this.id} @ ${t}`;
  }
  getName(t, e) {
    return !this._nameIsCapturing || this._name === null || t === null || e === null ? this._name : Ie.replaceCaptures(this._name, t, e);
  }
  getContentName(t, e) {
    return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : Ie.replaceCaptures(this._contentName, t, e);
  }
}, Cs = class extends ve {
  retokenizeCapturedWithRuleId;
  constructor(t, e, r, n, s) {
    super(t, e, r, n), this.retokenizeCapturedWithRuleId = s;
  }
  dispose() {
  }
  collectPatterns(t, e) {
    throw new Error("Not supported!");
  }
  compile(t, e) {
    throw new Error("Not supported!");
  }
  compileAG(t, e, r, n) {
    throw new Error("Not supported!");
  }
}, Ss = class extends ve {
  _match;
  captures;
  _cachedCompiledPatterns;
  constructor(t, e, r, n, s) {
    super(t, e, r, null), this._match = new Se(n, this.id), this.captures = s, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
  }
  get debugMatchRegExp() {
    return `${this._match.source}`;
  }
  collectPatterns(t, e) {
    e.push(this._match);
  }
  compile(t, e) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, e, r, n) {
    return this._getCachedCompiledPatterns(t).compileAG(t, r, n);
  }
  _getCachedCompiledPatterns(t) {
    return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new ke(), this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
  }
}, nr = class extends ve {
  hasMissingPatterns;
  patterns;
  _cachedCompiledPatterns;
  constructor(t, e, r, n, s) {
    super(t, e, r, n), this.patterns = s.patterns, this.hasMissingPatterns = s.hasMissingPatterns, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
  }
  collectPatterns(t, e) {
    for (const r of this.patterns)
      t.getRule(r).collectPatterns(t, e);
  }
  compile(t, e) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, e, r, n) {
    return this._getCachedCompiledPatterns(t).compileAG(t, r, n);
  }
  _getCachedCompiledPatterns(t) {
    return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new ke(), this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
  }
}, xt = class extends ve {
  _begin;
  beginCaptures;
  _end;
  endHasBackReferences;
  endCaptures;
  applyEndPatternLast;
  hasMissingPatterns;
  patterns;
  _cachedCompiledPatterns;
  constructor(t, e, r, n, s, i, o, c, a, l) {
    super(t, e, r, n), this._begin = new Se(s, this.id), this.beginCaptures = i, this._end = new Se(o || "￿", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = c, this.applyEndPatternLast = a || !1, this.patterns = l.patterns, this.hasMissingPatterns = l.hasMissingPatterns, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugEndRegExp() {
    return `${this._end.source}`;
  }
  getEndWithResolvedBackReferences(t, e) {
    return this._end.resolveBackReferences(t, e);
  }
  collectPatterns(t, e) {
    e.push(this._begin);
  }
  compile(t, e) {
    return this._getCachedCompiledPatterns(t, e).compile(t);
  }
  compileAG(t, e, r, n) {
    return this._getCachedCompiledPatterns(t, e).compileAG(t, r, n);
  }
  _getCachedCompiledPatterns(t, e) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new ke();
      for (const r of this.patterns)
        t.getRule(r).collectPatterns(t, this._cachedCompiledPatterns);
      this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
    }
    return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, e) : this._cachedCompiledPatterns.setSource(0, e)), this._cachedCompiledPatterns;
  }
}, Ue = class extends ve {
  _begin;
  beginCaptures;
  whileCaptures;
  _while;
  whileHasBackReferences;
  hasMissingPatterns;
  patterns;
  _cachedCompiledPatterns;
  _cachedCompiledWhilePatterns;
  constructor(t, e, r, n, s, i, o, c, a) {
    super(t, e, r, n), this._begin = new Se(s, this.id), this.beginCaptures = i, this.whileCaptures = c, this._while = new Se(o, Qr), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = a.patterns, this.hasMissingPatterns = a.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null);
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugWhileRegExp() {
    return `${this._while.source}`;
  }
  getWhileWithResolvedBackReferences(t, e) {
    return this._while.resolveBackReferences(t, e);
  }
  collectPatterns(t, e) {
    e.push(this._begin);
  }
  compile(t, e) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, e, r, n) {
    return this._getCachedCompiledPatterns(t).compileAG(t, r, n);
  }
  _getCachedCompiledPatterns(t) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new ke();
      for (const e of this.patterns)
        t.getRule(e).collectPatterns(t, this._cachedCompiledPatterns);
    }
    return this._cachedCompiledPatterns;
  }
  compileWhile(t, e) {
    return this._getCachedCompiledWhilePatterns(t, e).compile(t);
  }
  compileWhileAG(t, e, r, n) {
    return this._getCachedCompiledWhilePatterns(t, e).compileAG(t, r, n);
  }
  _getCachedCompiledWhilePatterns(t, e) {
    return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new ke(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, e || "￿"), this._cachedCompiledWhilePatterns;
  }
}, Kr = class L {
  static createCaptureRule(e, r, n, s, i) {
    return e.registerRule((o) => new Cs(r, o, n, s, i));
  }
  static getCompiledRuleId(e, r, n) {
    return e.id || r.registerRule((s) => {
      if (e.id = s, e.match)
        return new Ss(
          e.$vscodeTextmateLocation,
          e.id,
          e.name,
          e.match,
          L._compileCaptures(e.captures, r, n)
        );
      if (typeof e.begin > "u") {
        e.repository && (n = Fr({}, n, e.repository));
        let i = e.patterns;
        return typeof i > "u" && e.include && (i = [{ include: e.include }]), new nr(
          e.$vscodeTextmateLocation,
          e.id,
          e.name,
          e.contentName,
          L._compilePatterns(i, r, n)
        );
      }
      return e.while ? new Ue(
        e.$vscodeTextmateLocation,
        e.id,
        e.name,
        e.contentName,
        e.begin,
        L._compileCaptures(e.beginCaptures || e.captures, r, n),
        e.while,
        L._compileCaptures(e.whileCaptures || e.captures, r, n),
        L._compilePatterns(e.patterns, r, n)
      ) : new xt(
        e.$vscodeTextmateLocation,
        e.id,
        e.name,
        e.contentName,
        e.begin,
        L._compileCaptures(e.beginCaptures || e.captures, r, n),
        e.end,
        L._compileCaptures(e.endCaptures || e.captures, r, n),
        e.applyEndPatternLast,
        L._compilePatterns(e.patterns, r, n)
      );
    }), e.id;
  }
  static _compileCaptures(e, r, n) {
    let s = [];
    if (e) {
      let i = 0;
      for (const o in e) {
        if (o === "$vscodeTextmateLocation")
          continue;
        const c = parseInt(o, 10);
        c > i && (i = c);
      }
      for (let o = 0; o <= i; o++)
        s[o] = null;
      for (const o in e) {
        if (o === "$vscodeTextmateLocation")
          continue;
        const c = parseInt(o, 10);
        let a = 0;
        e[o].patterns && (a = L.getCompiledRuleId(e[o], r, n)), s[c] = L.createCaptureRule(r, e[o].$vscodeTextmateLocation, e[o].name, e[o].contentName, a);
      }
    }
    return s;
  }
  static _compilePatterns(e, r, n) {
    let s = [];
    if (e)
      for (let i = 0, o = e.length; i < o; i++) {
        const c = e[i];
        let a = -1;
        if (c.include) {
          const l = Xr(c.include);
          switch (l.kind) {
            case 0:
            case 1:
              a = L.getCompiledRuleId(n[c.include], r, n);
              break;
            case 2:
              let u = n[l.ruleName];
              u && (a = L.getCompiledRuleId(u, r, n));
              break;
            case 3:
            case 4:
              const p = l.scopeName, h = l.kind === 4 ? l.ruleName : null, d = r.getExternalGrammar(p, n);
              if (d)
                if (h) {
                  let f = d.repository[h];
                  f && (a = L.getCompiledRuleId(f, r, d.repository));
                } else
                  a = L.getCompiledRuleId(d.repository.$self, r, d.repository);
              break;
          }
        } else
          a = L.getCompiledRuleId(c, r, n);
        if (a !== -1) {
          const l = r.getRule(a);
          let u = !1;
          if ((l instanceof nr || l instanceof xt || l instanceof Ue) && l.hasMissingPatterns && l.patterns.length === 0 && (u = !0), u)
            continue;
          s.push(a);
        }
      }
    return {
      patterns: s,
      hasMissingPatterns: (e ? e.length : 0) !== s.length
    };
  }
}, Se = class Jr {
  source;
  ruleId;
  hasAnchor;
  hasBackReferences;
  _anchorCache;
  constructor(e, r) {
    if (e && typeof e == "string") {
      const n = e.length;
      let s = 0, i = [], o = !1;
      for (let c = 0; c < n; c++)
        if (e.charAt(c) === "\\" && c + 1 < n) {
          const l = e.charAt(c + 1);
          l === "z" ? (i.push(e.substring(s, c)), i.push("$(?!\\n)(?<!\\n)"), s = c + 2) : (l === "A" || l === "G") && (o = !0), c++;
        }
      this.hasAnchor = o, s === 0 ? this.source = e : (i.push(e.substring(s, n)), this.source = i.join(""));
    } else
      this.hasAnchor = !1, this.source = e;
    this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = r, typeof this.source == "string" ? this.hasBackReferences = ws.test(this.source) : this.hasBackReferences = !1;
  }
  clone() {
    return new Jr(this.source, this.ruleId);
  }
  setSource(e) {
    this.source !== e && (this.source = e, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
  }
  resolveBackReferences(e, r) {
    if (typeof this.source != "string")
      throw new Error("This method should only be called if the source is a string");
    let n = r.map((s) => e.substring(s.start, s.end));
    return rr.lastIndex = 0, this.source.replace(rr, (s, i) => Wr(n[parseInt(i, 10)] || ""));
  }
  _buildAnchorCache() {
    if (typeof this.source != "string")
      throw new Error("This method should only be called if the source is a string");
    let e = [], r = [], n = [], s = [], i, o, c, a;
    for (i = 0, o = this.source.length; i < o; i++)
      c = this.source.charAt(i), e[i] = c, r[i] = c, n[i] = c, s[i] = c, c === "\\" && i + 1 < o && (a = this.source.charAt(i + 1), a === "A" ? (e[i + 1] = "￿", r[i + 1] = "￿", n[i + 1] = "A", s[i + 1] = "A") : a === "G" ? (e[i + 1] = "￿", r[i + 1] = "G", n[i + 1] = "￿", s[i + 1] = "G") : (e[i + 1] = a, r[i + 1] = a, n[i + 1] = a, s[i + 1] = a), i++);
    return {
      A0_G0: e.join(""),
      A0_G1: r.join(""),
      A1_G0: n.join(""),
      A1_G1: s.join("")
    };
  }
  resolveAnchors(e, r) {
    return !this.hasAnchor || !this._anchorCache || typeof this.source != "string" ? this.source : e ? r ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : r ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
  }
}, ke = class {
  _items;
  _hasAnchors;
  _cached;
  _anchorCache;
  constructor() {
    this._items = [], this._hasAnchors = !1, this._cached = null, this._anchorCache = {
      A0_G0: null,
      A0_G1: null,
      A1_G0: null,
      A1_G1: null
    };
  }
  dispose() {
    this._disposeCaches();
  }
  _disposeCaches() {
    this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
  }
  push(t) {
    this._items.push(t), this._hasAnchors = this._hasAnchors || t.hasAnchor;
  }
  unshift(t) {
    this._items.unshift(t), this._hasAnchors = this._hasAnchors || t.hasAnchor;
  }
  length() {
    return this._items.length;
  }
  setSource(t, e) {
    this._items[t].source !== e && (this._disposeCaches(), this._items[t].setSource(e));
  }
  compile(t) {
    if (!this._cached) {
      let e = this._items.map((r) => r.source);
      this._cached = new sr(t, e, this._items.map((r) => r.ruleId));
    }
    return this._cached;
  }
  compileAG(t, e, r) {
    return this._hasAnchors ? e ? r ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(t, e, r)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(t, e, r)), this._anchorCache.A1_G0) : r ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(t, e, r)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(t, e, r)), this._anchorCache.A0_G0) : this.compile(t);
  }
  _resolveAnchors(t, e, r) {
    let n = this._items.map((s) => s.resolveAnchors(e, r));
    return new sr(t, n, this._items.map((s) => s.ruleId));
  }
}, sr = class {
  constructor(t, e, r) {
    this.regExps = e, this.rules = r, this.scanner = t.createOnigScanner(e);
  }
  scanner;
  dispose() {
    typeof this.scanner.dispose == "function" && this.scanner.dispose();
  }
  toString() {
    const t = [];
    for (let e = 0, r = this.rules.length; e < r; e++)
      t.push("   - " + this.rules[e] + ": " + this.regExps[e]);
    return t.join(`
`);
  }
  findNextMatchSync(t, e, r) {
    const n = this.scanner.findNextMatchSync(t, e, r);
    return n ? {
      ruleId: this.rules[n.index],
      captureIndices: n.captureIndices
    } : null;
  }
}, at = class {
  constructor(t, e) {
    this.languageId = t, this.tokenType = e;
  }
}, ks = class At {
  _defaultAttributes;
  _embeddedLanguagesMatcher;
  constructor(e, r) {
    this._defaultAttributes = new at(
      e,
      8
      /* NotSet */
    ), this._embeddedLanguagesMatcher = new xs(Object.entries(r || {}));
  }
  getDefaultAttributes() {
    return this._defaultAttributes;
  }
  getBasicScopeAttributes(e) {
    return e === null ? At._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(e);
  }
  static _NULL_SCOPE_METADATA = new at(0, 0);
  _getBasicScopeAttributes = new Hr((e) => {
    const r = this._scopeToLanguage(e), n = this._toStandardTokenType(e);
    return new at(r, n);
  });
  /**
   * Given a produced TM scope, return the language that token describes or null if unknown.
   * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
   */
  _scopeToLanguage(e) {
    return this._embeddedLanguagesMatcher.match(e) || 0;
  }
  _toStandardTokenType(e) {
    const r = e.match(At.STANDARD_TOKEN_TYPE_REGEXP);
    if (!r)
      return 8;
    switch (r[1]) {
      case "comment":
        return 1;
      case "string":
        return 2;
      case "regex":
        return 3;
      case "meta.embedded":
        return 0;
    }
    throw new Error("Unexpected match for standard token type!");
  }
  static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
}, xs = class {
  values;
  scopesRegExp;
  constructor(t) {
    if (t.length === 0)
      this.values = null, this.scopesRegExp = null;
    else {
      this.values = new Map(t);
      const e = t.map(
        ([r, n]) => Wr(r)
      );
      e.sort(), e.reverse(), this.scopesRegExp = new RegExp(
        `^((${e.join(")|(")}))($|\\.)`,
        ""
      );
    }
  }
  match(t) {
    if (!this.scopesRegExp)
      return;
    const e = t.match(this.scopesRegExp);
    if (e)
      return this.values.get(e[1]);
  }
};
typeof process < "u" && process.env.VSCODE_TEXTMATE_DEBUG;
var ir = class {
  constructor(t, e) {
    this.stack = t, this.stoppedEarly = e;
  }
};
function Zr(t, e, r, n, s, i, o, c) {
  const a = e.content.length;
  let l = !1, u = -1;
  if (o) {
    const d = As(
      t,
      e,
      r,
      n,
      s,
      i
    );
    s = d.stack, n = d.linePos, r = d.isFirstLine, u = d.anchorPosition;
  }
  const p = Date.now();
  for (; !l; ) {
    if (c !== 0 && Date.now() - p > c)
      return new ir(s, !0);
    h();
  }
  return new ir(s, !1);
  function h() {
    const d = vs(
      t,
      e,
      r,
      n,
      s,
      u
    );
    if (!d) {
      i.produce(s, a), l = !0;
      return;
    }
    const f = d.captureIndices, y = d.matchedRuleId, b = f && f.length > 0 ? f[0].end > n : !1;
    if (y === _s) {
      const m = s.getRule(t);
      i.produce(s, f[0].start), s = s.withContentNameScopesList(s.nameScopesList), be(
        t,
        e,
        r,
        s,
        i,
        m.endCaptures,
        f
      ), i.produce(s, f[0].end);
      const w = s;
      if (s = s.parent, u = w.getAnchorPos(), !b && w.getEnterPos() === n) {
        s = w, i.produce(s, a), l = !0;
        return;
      }
    } else {
      const m = t.getRule(y);
      i.produce(s, f[0].start);
      const w = s, g = m.getName(e.content, f), _ = s.contentNameScopesList.pushAttributed(
        g,
        t
      );
      if (s = s.push(
        y,
        n,
        u,
        f[0].end === a,
        null,
        _,
        _
      ), m instanceof xt) {
        const S = m;
        be(
          t,
          e,
          r,
          s,
          i,
          S.beginCaptures,
          f
        ), i.produce(s, f[0].end), u = f[0].end;
        const E = S.getContentName(
          e.content,
          f
        ), T = _.pushAttributed(
          E,
          t
        );
        if (s = s.withContentNameScopesList(T), S.endHasBackReferences && (s = s.withEndRule(
          S.getEndWithResolvedBackReferences(
            e.content,
            f
          )
        )), !b && w.hasSameRuleAs(s)) {
          s = s.pop(), i.produce(s, a), l = !0;
          return;
        }
      } else if (m instanceof Ue) {
        const S = m;
        be(
          t,
          e,
          r,
          s,
          i,
          S.beginCaptures,
          f
        ), i.produce(s, f[0].end), u = f[0].end;
        const E = S.getContentName(
          e.content,
          f
        ), T = _.pushAttributed(
          E,
          t
        );
        if (s = s.withContentNameScopesList(T), S.whileHasBackReferences && (s = s.withEndRule(
          S.getWhileWithResolvedBackReferences(
            e.content,
            f
          )
        )), !b && w.hasSameRuleAs(s)) {
          s = s.pop(), i.produce(s, a), l = !0;
          return;
        }
      } else if (be(
        t,
        e,
        r,
        s,
        i,
        m.captures,
        f
      ), i.produce(s, f[0].end), s = s.pop(), !b) {
        s = s.safePop(), i.produce(s, a), l = !0;
        return;
      }
    }
    f[0].end > n && (n = f[0].end, r = !1);
  }
}
function As(t, e, r, n, s, i) {
  let o = s.beginRuleCapturedEOL ? 0 : -1;
  const c = [];
  for (let a = s; a; a = a.pop()) {
    const l = a.getRule(t);
    l instanceof Ue && c.push({
      rule: l,
      stack: a
    });
  }
  for (let a = c.pop(); a; a = c.pop()) {
    const { ruleScanner: l, findOptions: u } = Is(a.rule, t, a.stack.endRule, r, n === o), p = l.findNextMatchSync(e, n, u);
    if (p) {
      if (p.ruleId !== Qr) {
        s = a.stack.pop();
        break;
      }
      p.captureIndices && p.captureIndices.length && (i.produce(a.stack, p.captureIndices[0].start), be(t, e, r, a.stack, i, a.rule.whileCaptures, p.captureIndices), i.produce(a.stack, p.captureIndices[0].end), o = p.captureIndices[0].end, p.captureIndices[0].end > n && (n = p.captureIndices[0].end, r = !1));
    } else {
      s = a.stack.pop();
      break;
    }
  }
  return { stack: s, linePos: n, anchorPosition: o, isFirstLine: r };
}
function vs(t, e, r, n, s, i) {
  const o = Ns(t, e, r, n, s, i), c = t.getInjections();
  if (c.length === 0)
    return o;
  const a = Es(c, t, e, r, n, s, i);
  if (!a)
    return o;
  if (!o)
    return a;
  const l = o.captureIndices[0].start, u = a.captureIndices[0].start;
  return u < l || a.priorityMatch && u === l ? a : o;
}
function Ns(t, e, r, n, s, i) {
  const o = s.getRule(t), { ruleScanner: c, findOptions: a } = Yr(o, t, s.endRule, r, n === i), l = c.findNextMatchSync(e, n, a);
  return l ? {
    captureIndices: l.captureIndices,
    matchedRuleId: l.ruleId
  } : null;
}
function Es(t, e, r, n, s, i, o) {
  let c = Number.MAX_VALUE, a = null, l, u = 0;
  const p = i.contentNameScopesList.getScopeNames();
  for (let h = 0, d = t.length; h < d; h++) {
    const f = t[h];
    if (!f.matcher(p))
      continue;
    const y = e.getRule(f.ruleId), { ruleScanner: b, findOptions: m } = Yr(y, e, null, n, s === o), w = b.findNextMatchSync(r, s, m);
    if (!w)
      continue;
    const g = w.captureIndices[0].start;
    if (!(g >= c) && (c = g, a = w.captureIndices, l = w.ruleId, u = f.priority, c === s))
      break;
  }
  return a ? {
    priorityMatch: u === -1,
    captureIndices: a,
    matchedRuleId: l
  } : null;
}
function Yr(t, e, r, n, s) {
  return {
    ruleScanner: t.compileAG(e, r, n, s),
    findOptions: 0
    /* None */
  };
}
function Is(t, e, r, n, s) {
  return {
    ruleScanner: t.compileWhileAG(e, r, n, s),
    findOptions: 0
    /* None */
  };
}
function be(t, e, r, n, s, i, o) {
  if (i.length === 0)
    return;
  const c = e.content, a = Math.min(i.length, o.length), l = [], u = o[0].end;
  for (let p = 0; p < a; p++) {
    const h = i[p];
    if (h === null)
      continue;
    const d = o[p];
    if (d.length === 0)
      continue;
    if (d.start > u)
      break;
    for (; l.length > 0 && l[l.length - 1].endPos <= d.start; )
      s.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop();
    if (l.length > 0 ? s.produceFromScopes(l[l.length - 1].scopes, d.start) : s.produce(n, d.start), h.retokenizeCapturedWithRuleId) {
      const y = h.getName(c, o), b = n.contentNameScopesList.pushAttributed(y, t), m = h.getContentName(c, o), w = b.pushAttributed(m, t), g = n.push(h.retokenizeCapturedWithRuleId, d.start, -1, !1, null, b, w), _ = t.createOnigString(c.substring(0, d.end));
      Zr(
        t,
        _,
        r && d.start === 0,
        d.start,
        g,
        s,
        !1,
        /* no time limit */
        0
      ), qr(_);
      continue;
    }
    const f = h.getName(c, o);
    if (f !== null) {
      const b = (l.length > 0 ? l[l.length - 1].scopes : n.contentNameScopesList).pushAttributed(f, t);
      l.push(new Rs(b, d.end));
    }
  }
  for (; l.length > 0; )
    s.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop();
}
var Rs = class {
  scopes;
  endPos;
  constructor(t, e) {
    this.scopes = t, this.endPos = e;
  }
};
function Ls(t, e, r, n, s, i, o, c) {
  return new Ts(
    t,
    e,
    r,
    n,
    s,
    i,
    o,
    c
  );
}
function or(t, e, r, n, s) {
  const i = De(e, We), o = Kr.getCompiledRuleId(r, n, s.repository);
  for (const c of i)
    t.push({
      debugSelector: e,
      matcher: c.matcher,
      ruleId: o,
      grammar: s,
      priority: c.priority
    });
}
function We(t, e) {
  if (e.length < t.length)
    return !1;
  let r = 0;
  return t.every((n) => {
    for (let s = r; s < e.length; s++)
      if ($s(e[s], n))
        return r = s + 1, !0;
    return !1;
  });
}
function $s(t, e) {
  if (!t)
    return !1;
  if (t === e)
    return !0;
  const r = e.length;
  return t.length > r && t.substr(0, r) === e && t[r] === ".";
}
var Ts = class {
  constructor(t, e, r, n, s, i, o, c) {
    if (this._rootScopeName = t, this.balancedBracketSelectors = i, this._onigLib = c, this._basicScopeAttributesProvider = new ks(
      r,
      n
    ), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = o, this._grammar = ar(e, null), this._injections = null, this._tokenTypeMatchers = [], s)
      for (const a of Object.keys(s)) {
        const l = De(a, We);
        for (const u of l)
          this._tokenTypeMatchers.push({
            matcher: u.matcher,
            type: s[a]
          });
      }
  }
  _rootId;
  _lastRuleId;
  _ruleId2desc;
  _includedGrammars;
  _grammarRepository;
  _grammar;
  _injections;
  _basicScopeAttributesProvider;
  _tokenTypeMatchers;
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (const t of this._ruleId2desc)
      t && t.dispose();
  }
  createOnigScanner(t) {
    return this._onigLib.createOnigScanner(t);
  }
  createOnigString(t) {
    return this._onigLib.createOnigString(t);
  }
  getMetadataForScope(t) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(t);
  }
  _collectInjections() {
    const t = {
      lookup: (s) => s === this._rootScopeName ? this._grammar : this.getExternalGrammar(s),
      injections: (s) => this._grammarRepository.injections(s)
    }, e = [], r = this._rootScopeName, n = t.lookup(r);
    if (n) {
      const s = n.injections;
      if (s)
        for (let o in s)
          or(
            e,
            o,
            s[o],
            this,
            n
          );
      const i = this._grammarRepository.injections(r);
      i && i.forEach((o) => {
        const c = this.getExternalGrammar(o);
        if (c) {
          const a = c.injectionSelector;
          a && or(
            e,
            a,
            c,
            this,
            c
          );
        }
      });
    }
    return e.sort((s, i) => s.priority - i.priority), e;
  }
  getInjections() {
    return this._injections === null && (this._injections = this._collectInjections()), this._injections;
  }
  registerRule(t) {
    const e = ++this._lastRuleId, r = t(e);
    return this._ruleId2desc[e] = r, r;
  }
  getRule(t) {
    return this._ruleId2desc[t];
  }
  getExternalGrammar(t, e) {
    if (this._includedGrammars[t])
      return this._includedGrammars[t];
    if (this._grammarRepository) {
      const r = this._grammarRepository.lookup(t);
      if (r)
        return this._includedGrammars[t] = ar(
          r,
          e && e.$base
        ), this._includedGrammars[t];
    }
  }
  tokenizeLine(t, e, r = 0) {
    const n = this._tokenize(t, e, !1, r);
    return {
      tokens: n.lineTokens.getResult(n.ruleStack, n.lineLength),
      ruleStack: n.ruleStack,
      stoppedEarly: n.stoppedEarly
    };
  }
  tokenizeLine2(t, e, r = 0) {
    const n = this._tokenize(t, e, !0, r);
    return {
      tokens: n.lineTokens.getBinaryResult(n.ruleStack, n.lineLength),
      ruleStack: n.ruleStack,
      stoppedEarly: n.stoppedEarly
    };
  }
  _tokenize(t, e, r, n) {
    this._rootId === -1 && (this._rootId = Kr.getCompiledRuleId(
      this._grammar.repository.$self,
      this,
      this._grammar.repository
    ), this.getInjections());
    let s;
    if (!e || e === vt.NULL) {
      s = !0;
      const l = this._basicScopeAttributesProvider.getDefaultAttributes(), u = this.themeProvider.getDefaults(), p = he.set(
        0,
        l.languageId,
        l.tokenType,
        null,
        u.fontStyle,
        u.foregroundId,
        u.backgroundId
      ), h = this.getRule(this._rootId).getName(
        null,
        null
      );
      let d;
      h ? d = we.createRootAndLookUpScopeName(
        h,
        p,
        this
      ) : d = we.createRoot(
        "unknown",
        p
      ), e = new vt(
        null,
        this._rootId,
        -1,
        -1,
        !1,
        null,
        d,
        d
      );
    } else
      s = !1, e.reset();
    t = t + `
`;
    const i = this.createOnigString(t), o = i.content.length, c = new Ms(
      r,
      t,
      this._tokenTypeMatchers,
      this.balancedBracketSelectors
    ), a = Zr(
      this,
      i,
      s,
      0,
      e,
      c,
      !0,
      n
    );
    return qr(i), {
      lineLength: o,
      lineTokens: c,
      ruleStack: a.stack,
      stoppedEarly: a.stoppedEarly
    };
  }
};
function ar(t, e) {
  return t = Zn(t), t.repository = t.repository || {}, t.repository.$self = {
    $vscodeTextmateLocation: t.$vscodeTextmateLocation,
    patterns: t.patterns,
    name: t.scopeName
  }, t.repository.$base = e || t.repository.$self, t;
}
var we = class F {
  /**
   * Invariant:
   * ```
   * if (parent && !scopePath.extends(parent.scopePath)) {
   * 	throw new Error();
   * }
   * ```
   */
  constructor(e, r, n) {
    this.parent = e, this.scopePath = r, this.tokenAttributes = n;
  }
  static fromExtension(e, r) {
    let n = e, s = e?.scopePath ?? null;
    for (const i of r)
      s = ot.push(s, i.scopeNames), n = new F(n, s, i.encodedTokenAttributes);
    return n;
  }
  static createRoot(e, r) {
    return new F(null, new ot(null, e), r);
  }
  static createRootAndLookUpScopeName(e, r, n) {
    const s = n.getMetadataForScope(e), i = new ot(null, e), o = n.themeProvider.themeMatch(i), c = F.mergeAttributes(
      r,
      s,
      o
    );
    return new F(null, i, c);
  }
  get scopeName() {
    return this.scopePath.scopeName;
  }
  toString() {
    return this.getScopeNames().join(" ");
  }
  equals(e) {
    return F.equals(this, e);
  }
  static equals(e, r) {
    do {
      if (e === r || !e && !r)
        return !0;
      if (!e || !r || e.scopeName !== r.scopeName || e.tokenAttributes !== r.tokenAttributes)
        return !1;
      e = e.parent, r = r.parent;
    } while (!0);
  }
  static mergeAttributes(e, r, n) {
    let s = -1, i = 0, o = 0;
    return n !== null && (s = n.fontStyle, i = n.foregroundId, o = n.backgroundId), he.set(
      e,
      r.languageId,
      r.tokenType,
      null,
      s,
      i,
      o
    );
  }
  pushAttributed(e, r) {
    if (e === null)
      return this;
    if (e.indexOf(" ") === -1)
      return F._pushAttributed(this, e, r);
    const n = e.split(/ /g);
    let s = this;
    for (const i of n)
      s = F._pushAttributed(s, i, r);
    return s;
  }
  static _pushAttributed(e, r, n) {
    const s = n.getMetadataForScope(r), i = e.scopePath.push(r), o = n.themeProvider.themeMatch(i), c = F.mergeAttributes(
      e.tokenAttributes,
      s,
      o
    );
    return new F(e, i, c);
  }
  getScopeNames() {
    return this.scopePath.getSegments();
  }
  getExtensionIfDefined(e) {
    const r = [];
    let n = this;
    for (; n && n !== e; )
      r.push({
        encodedTokenAttributes: n.tokenAttributes,
        scopeNames: n.scopePath.getExtensionIfDefined(n.parent?.scopePath ?? null)
      }), n = n.parent;
    return n === e ? r.reverse() : void 0;
  }
}, vt = class Z {
  /**
   * Invariant:
   * ```
   * if (contentNameScopesList !== nameScopesList && contentNameScopesList?.parent !== nameScopesList) {
   * 	throw new Error();
   * }
   * if (this.parent && !nameScopesList.extends(this.parent.contentNameScopesList)) {
   * 	throw new Error();
   * }
   * ```
   */
  constructor(e, r, n, s, i, o, c, a) {
    this.parent = e, this.ruleId = r, this.beginRuleCapturedEOL = i, this.endRule = o, this.nameScopesList = c, this.contentNameScopesList = a, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = n, this._anchorPos = s;
  }
  _stackElementBrand = void 0;
  // TODO remove me
  static NULL = new Z(
    null,
    0,
    0,
    0,
    !1,
    null,
    null,
    null
  );
  /**
   * The position on the current line where this state was pushed.
   * This is relevant only while tokenizing a line, to detect endless loops.
   * Its value is meaningless across lines.
   */
  _enterPos;
  /**
   * The captured anchor position when this stack element was pushed.
   * This is relevant only while tokenizing a line, to restore the anchor position when popping.
   * Its value is meaningless across lines.
   */
  _anchorPos;
  /**
   * The depth of the stack.
   */
  depth;
  equals(e) {
    return e === null ? !1 : Z._equals(this, e);
  }
  static _equals(e, r) {
    return e === r ? !0 : this._structuralEquals(e, r) ? we.equals(e.contentNameScopesList, r.contentNameScopesList) : !1;
  }
  /**
   * A structural equals check. Does not take into account `scopes`.
   */
  static _structuralEquals(e, r) {
    do {
      if (e === r || !e && !r)
        return !0;
      if (!e || !r || e.depth !== r.depth || e.ruleId !== r.ruleId || e.endRule !== r.endRule)
        return !1;
      e = e.parent, r = r.parent;
    } while (!0);
  }
  clone() {
    return this;
  }
  static _reset(e) {
    for (; e; )
      e._enterPos = -1, e._anchorPos = -1, e = e.parent;
  }
  reset() {
    Z._reset(this);
  }
  pop() {
    return this.parent;
  }
  safePop() {
    return this.parent ? this.parent : this;
  }
  push(e, r, n, s, i, o, c) {
    return new Z(
      this,
      e,
      r,
      n,
      s,
      i,
      o,
      c
    );
  }
  getEnterPos() {
    return this._enterPos;
  }
  getAnchorPos() {
    return this._anchorPos;
  }
  getRule(e) {
    return e.getRule(this.ruleId);
  }
  toString() {
    const e = [];
    return this._writeString(e, 0), "[" + e.join(",") + "]";
  }
  _writeString(e, r) {
    return this.parent && (r = this.parent._writeString(e, r)), e[r++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, r;
  }
  withContentNameScopesList(e) {
    return this.contentNameScopesList === e ? this : this.parent.push(
      this.ruleId,
      this._enterPos,
      this._anchorPos,
      this.beginRuleCapturedEOL,
      this.endRule,
      this.nameScopesList,
      e
    );
  }
  withEndRule(e) {
    return this.endRule === e ? this : new Z(
      this.parent,
      this.ruleId,
      this._enterPos,
      this._anchorPos,
      this.beginRuleCapturedEOL,
      e,
      this.nameScopesList,
      this.contentNameScopesList
    );
  }
  // Used to warn of endless loops
  hasSameRuleAs(e) {
    let r = this;
    for (; r && r._enterPos === e._enterPos; ) {
      if (r.ruleId === e.ruleId)
        return !0;
      r = r.parent;
    }
    return !1;
  }
  toStateStackFrame() {
    return {
      ruleId: this.ruleId,
      beginRuleCapturedEOL: this.beginRuleCapturedEOL,
      endRule: this.endRule,
      nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
      contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
    };
  }
  static pushFrame(e, r) {
    const n = we.fromExtension(e?.nameScopesList ?? null, r.nameScopesList);
    return new Z(
      e,
      r.ruleId,
      r.enterPos ?? -1,
      r.anchorPos ?? -1,
      r.beginRuleCapturedEOL,
      r.endRule,
      n,
      we.fromExtension(n, r.contentNameScopesList)
    );
  }
}, Ps = class {
  balancedBracketScopes;
  unbalancedBracketScopes;
  allowAny = !1;
  constructor(t, e) {
    this.balancedBracketScopes = t.flatMap(
      (r) => r === "*" ? (this.allowAny = !0, []) : De(r, We).map((n) => n.matcher)
    ), this.unbalancedBracketScopes = e.flatMap(
      (r) => De(r, We).map((n) => n.matcher)
    );
  }
  get matchesAlways() {
    return this.allowAny && this.unbalancedBracketScopes.length === 0;
  }
  get matchesNever() {
    return this.balancedBracketScopes.length === 0 && !this.allowAny;
  }
  match(t) {
    for (const e of this.unbalancedBracketScopes)
      if (e(t))
        return !1;
    for (const e of this.balancedBracketScopes)
      if (e(t))
        return !0;
    return this.allowAny;
  }
}, Ms = class {
  constructor(t, e, r, n) {
    this.balancedBracketSelectors = n, this._emitBinaryTokens = t, this._tokenTypeOverrides = r, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
  }
  _emitBinaryTokens;
  /**
   * defined only if `false`.
   */
  _lineText;
  /**
   * used only if `_emitBinaryTokens` is false.
   */
  _tokens;
  /**
   * used only if `_emitBinaryTokens` is true.
   */
  _binaryTokens;
  _lastTokenEndIndex;
  _tokenTypeOverrides;
  produce(t, e) {
    this.produceFromScopes(t.contentNameScopesList, e);
  }
  produceFromScopes(t, e) {
    if (this._lastTokenEndIndex >= e)
      return;
    if (this._emitBinaryTokens) {
      let n = t?.tokenAttributes ?? 0, s = !1;
      if (this.balancedBracketSelectors?.matchesAlways && (s = !0), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
        const i = t?.getScopeNames() ?? [];
        for (const o of this._tokenTypeOverrides)
          o.matcher(i) && (n = he.set(
            n,
            0,
            o.type,
            null,
            -1,
            0,
            0
          ));
        this.balancedBracketSelectors && (s = this.balancedBracketSelectors.match(i));
      }
      if (s && (n = he.set(
        n,
        0,
        8,
        s,
        -1,
        0,
        0
      )), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n) {
        this._lastTokenEndIndex = e;
        return;
      }
      this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(n), this._lastTokenEndIndex = e;
      return;
    }
    const r = t?.getScopeNames() ?? [];
    this._tokens.push({
      startIndex: this._lastTokenEndIndex,
      endIndex: e,
      // value: lineText.substring(lastTokenEndIndex, endIndex),
      scopes: r
    }), this._lastTokenEndIndex = e;
  }
  getResult(t, e) {
    return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === e - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(t, e), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
  }
  getBinaryResult(t, e) {
    this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === e - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(t, e), this._binaryTokens[this._binaryTokens.length - 2] = 0);
    const r = new Uint32Array(this._binaryTokens.length);
    for (let n = 0, s = this._binaryTokens.length; n < s; n++)
      r[n] = this._binaryTokens[n];
    return r;
  }
}, Gs = class {
  constructor(t, e) {
    this._onigLib = e, this._theme = t;
  }
  _grammars = /* @__PURE__ */ new Map();
  _rawGrammars = /* @__PURE__ */ new Map();
  _injectionGrammars = /* @__PURE__ */ new Map();
  _theme;
  dispose() {
    for (const t of this._grammars.values())
      t.dispose();
  }
  setTheme(t) {
    this._theme = t;
  }
  getColorMap() {
    return this._theme.getColorMap();
  }
  /**
   * Add `grammar` to registry and return a list of referenced scope names
   */
  addGrammar(t, e) {
    this._rawGrammars.set(t.scopeName, t), e && this._injectionGrammars.set(t.scopeName, e);
  }
  /**
   * Lookup a raw grammar.
   */
  lookup(t) {
    return this._rawGrammars.get(t);
  }
  /**
   * Returns the injections for the given grammar
   */
  injections(t) {
    return this._injectionGrammars.get(t);
  }
  /**
   * Get the default theme settings
   */
  getDefaults() {
    return this._theme.getDefaults();
  }
  /**
   * Match a scope in the theme.
   */
  themeMatch(t) {
    return this._theme.match(t);
  }
  /**
   * Lookup a grammar.
   */
  grammarForScopeName(t, e, r, n, s) {
    if (!this._grammars.has(t)) {
      let i = this._rawGrammars.get(t);
      if (!i)
        return null;
      this._grammars.set(t, Ls(
        t,
        i,
        e,
        r,
        n,
        s,
        this,
        this._onigLib
      ));
    }
    return this._grammars.get(t);
  }
}, Os = class {
  _options;
  _syncRegistry;
  _ensureGrammarCache;
  constructor(e) {
    this._options = e, this._syncRegistry = new Gs(
      Fe.createFromRawTheme(e.theme, e.colorMap),
      e.onigLib
    ), this._ensureGrammarCache = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._syncRegistry.dispose();
  }
  /**
   * Change the theme. Once called, no previous `ruleStack` should be used anymore.
   */
  setTheme(e, r) {
    this._syncRegistry.setTheme(Fe.createFromRawTheme(e, r));
  }
  /**
   * Returns a lookup array for color ids.
   */
  getColorMap() {
    return this._syncRegistry.getColorMap();
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */
  loadGrammarWithEmbeddedLanguages(e, r, n) {
    return this.loadGrammarWithConfiguration(e, r, { embeddedLanguages: n });
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */
  loadGrammarWithConfiguration(e, r, n) {
    return this._loadGrammar(
      e,
      r,
      n.embeddedLanguages,
      n.tokenTypes,
      new Ps(
        n.balancedBracketSelectors || [],
        n.unbalancedBracketSelectors || []
      )
    );
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   */
  loadGrammar(e) {
    return this._loadGrammar(e, 0, null, null, null);
  }
  _loadGrammar(e, r, n, s, i) {
    const o = new hs(this._syncRegistry, e);
    for (; o.Q.length > 0; )
      o.Q.map((c) => this._loadSingleGrammar(c.scopeName)), o.processQueue();
    return this._grammarForScopeName(
      e,
      r,
      n,
      s,
      i
    );
  }
  _loadSingleGrammar(e) {
    this._ensureGrammarCache.has(e) || (this._doLoadSingleGrammar(e), this._ensureGrammarCache.set(e, !0));
  }
  _doLoadSingleGrammar(e) {
    const r = this._options.loadGrammar(e);
    if (r) {
      const n = typeof this._options.getInjections == "function" ? this._options.getInjections(e) : void 0;
      this._syncRegistry.addGrammar(r, n);
    }
  }
  /**
   * Adds a rawGrammar.
   */
  addGrammar(e, r = [], n = 0, s = null) {
    return this._syncRegistry.addGrammar(e, r), this._grammarForScopeName(e.scopeName, n, s);
  }
  /**
   * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
   */
  _grammarForScopeName(e, r = 0, n = null, s = null, i = null) {
    return this._syncRegistry.grammarForScopeName(
      e,
      r,
      n,
      s,
      i
    );
  }
}, Nt = vt.NULL;
const Bs = /["&'<>`]/g, Fs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Ds = (
  // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
  /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
), js = /[|\\{}()[\]^$+*?.]/g, cr = /* @__PURE__ */ new WeakMap();
function Us(t, e) {
  if (t = t.replace(
    e.subset ? Ws(e.subset) : Bs,
    n
  ), e.subset || e.escapeOnly)
    return t;
  return t.replace(Fs, r).replace(Ds, n);
  function r(s, i, o) {
    return e.format(
      (s.charCodeAt(0) - 55296) * 1024 + s.charCodeAt(1) - 56320 + 65536,
      o.charCodeAt(i + 2),
      e
    );
  }
  function n(s, i, o) {
    return e.format(
      s.charCodeAt(0),
      o.charCodeAt(i + 1),
      e
    );
  }
}
function Ws(t) {
  let e = cr.get(t);
  return e || (e = Hs(t), cr.set(t, e)), e;
}
function Hs(t) {
  const e = [];
  let r = -1;
  for (; ++r < t.length; )
    e.push(t[r].replace(js, "\\$&"));
  return new RegExp("(?:" + e.join("|") + ")", "g");
}
const zs = /[\dA-Fa-f]/;
function Vs(t, e, r) {
  const n = "&#x" + t.toString(16).toUpperCase();
  return r && e && !zs.test(String.fromCharCode(e)) ? n : n + ";";
}
const qs = /\d/;
function Xs(t, e, r) {
  const n = "&#" + String(t);
  return r && e && !qs.test(String.fromCharCode(e)) ? n : n + ";";
}
const Qs = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
], ct = {
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  fnof: "ƒ",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  bull: "•",
  hellip: "…",
  prime: "′",
  Prime: "″",
  oline: "‾",
  frasl: "⁄",
  weierp: "℘",
  image: "ℑ",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  permil: "‰",
  lsaquo: "‹",
  rsaquo: "›",
  euro: "€"
}, Ks = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], en = {}.hasOwnProperty, Et = {};
let Re;
for (Re in ct)
  en.call(ct, Re) && (Et[ct[Re]] = Re);
const Js = /[^\dA-Za-z]/;
function Zs(t, e, r, n) {
  const s = String.fromCharCode(t);
  if (en.call(Et, s)) {
    const i = Et[s], o = "&" + i;
    return r && Qs.includes(i) && !Ks.includes(i) && (!n || e && e !== 61 && Js.test(String.fromCharCode(e))) ? o : o + ";";
  }
  return "";
}
function Ys(t, e, r) {
  let n = Vs(t, e, r.omitOptionalSemicolons), s;
  if ((r.useNamedReferences || r.useShortestReferences) && (s = Zs(
    t,
    e,
    r.omitOptionalSemicolons,
    r.attribute
  )), (r.useShortestReferences || !s) && r.useShortestReferences) {
    const i = Xs(t, e, r.omitOptionalSemicolons);
    i.length < n.length && (n = i);
  }
  return s && (!r.useShortestReferences || s.length < n.length) ? s : n;
}
function pe(t, e) {
  return Us(t, Object.assign({ format: Ys }, e));
}
const ei = /^>|^->|<!--|-->|--!>|<!-$/g, ti = [">"], ri = ["<", ">"];
function ni(t, e, r, n) {
  return n.settings.bogusComments ? "<?" + pe(
    t.value,
    Object.assign({}, n.settings.characterReferences, {
      subset: ti
    })
  ) + ">" : "<!--" + t.value.replace(ei, s) + "-->";
  function s(i) {
    return pe(
      i,
      Object.assign({}, n.settings.characterReferences, {
        subset: ri
      })
    );
  }
}
function si(t, e, r, n) {
  return "<!" + (n.settings.upperDoctype ? "DOCTYPE" : "doctype") + (n.settings.tightDoctype ? "" : " ") + "html>";
}
const N = rn(1), tn = rn(-1), ii = [];
function rn(t) {
  return e;
  function e(r, n, s) {
    const i = r ? r.children : ii;
    let o = (n || 0) + t, c = i[o];
    if (!s)
      for (; c && Gt(c); )
        o += t, c = i[o];
    return c;
  }
}
const oi = {}.hasOwnProperty;
function nn(t) {
  return e;
  function e(r, n, s) {
    return oi.call(t, r.tagName) && t[r.tagName](r, n, s);
  }
}
const Ft = nn({
  body: ci,
  caption: lt,
  colgroup: lt,
  dd: hi,
  dt: pi,
  head: lt,
  html: ai,
  li: ui,
  optgroup: di,
  option: fi,
  p: li,
  rp: lr,
  rt: lr,
  tbody: gi,
  td: ur,
  tfoot: yi,
  th: ur,
  thead: mi,
  tr: bi
});
function lt(t, e, r) {
  const n = N(r, e, !0);
  return !n || n.type !== "comment" && !(n.type === "text" && Gt(n.value.charAt(0)));
}
function ai(t, e, r) {
  const n = N(r, e);
  return !n || n.type !== "comment";
}
function ci(t, e, r) {
  const n = N(r, e);
  return !n || n.type !== "comment";
}
function li(t, e, r) {
  const n = N(r, e);
  return n ? n.type === "element" && (n.tagName === "address" || n.tagName === "article" || n.tagName === "aside" || n.tagName === "blockquote" || n.tagName === "details" || n.tagName === "div" || n.tagName === "dl" || n.tagName === "fieldset" || n.tagName === "figcaption" || n.tagName === "figure" || n.tagName === "footer" || n.tagName === "form" || n.tagName === "h1" || n.tagName === "h2" || n.tagName === "h3" || n.tagName === "h4" || n.tagName === "h5" || n.tagName === "h6" || n.tagName === "header" || n.tagName === "hgroup" || n.tagName === "hr" || n.tagName === "main" || n.tagName === "menu" || n.tagName === "nav" || n.tagName === "ol" || n.tagName === "p" || n.tagName === "pre" || n.tagName === "section" || n.tagName === "table" || n.tagName === "ul") : !r || // Confusing parent.
  !(r.type === "element" && (r.tagName === "a" || r.tagName === "audio" || r.tagName === "del" || r.tagName === "ins" || r.tagName === "map" || r.tagName === "noscript" || r.tagName === "video"));
}
function ui(t, e, r) {
  const n = N(r, e);
  return !n || n.type === "element" && n.tagName === "li";
}
function pi(t, e, r) {
  const n = N(r, e);
  return !!(n && n.type === "element" && (n.tagName === "dt" || n.tagName === "dd"));
}
function hi(t, e, r) {
  const n = N(r, e);
  return !n || n.type === "element" && (n.tagName === "dt" || n.tagName === "dd");
}
function lr(t, e, r) {
  const n = N(r, e);
  return !n || n.type === "element" && (n.tagName === "rp" || n.tagName === "rt");
}
function di(t, e, r) {
  const n = N(r, e);
  return !n || n.type === "element" && n.tagName === "optgroup";
}
function fi(t, e, r) {
  const n = N(r, e);
  return !n || n.type === "element" && (n.tagName === "option" || n.tagName === "optgroup");
}
function mi(t, e, r) {
  const n = N(r, e);
  return !!(n && n.type === "element" && (n.tagName === "tbody" || n.tagName === "tfoot"));
}
function gi(t, e, r) {
  const n = N(r, e);
  return !n || n.type === "element" && (n.tagName === "tbody" || n.tagName === "tfoot");
}
function yi(t, e, r) {
  return !N(r, e);
}
function bi(t, e, r) {
  const n = N(r, e);
  return !n || n.type === "element" && n.tagName === "tr";
}
function ur(t, e, r) {
  const n = N(r, e);
  return !n || n.type === "element" && (n.tagName === "td" || n.tagName === "th");
}
const wi = nn({
  body: Si,
  colgroup: ki,
  head: Ci,
  html: _i,
  tbody: xi
});
function _i(t) {
  const e = N(t, -1);
  return !e || e.type !== "comment";
}
function Ci(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of t.children)
    if (n.type === "element" && (n.tagName === "base" || n.tagName === "title")) {
      if (e.has(n.tagName)) return !1;
      e.add(n.tagName);
    }
  const r = t.children[0];
  return !r || r.type === "element";
}
function Si(t) {
  const e = N(t, -1, !0);
  return !e || e.type !== "comment" && !(e.type === "text" && Gt(e.value.charAt(0))) && !(e.type === "element" && (e.tagName === "meta" || e.tagName === "link" || e.tagName === "script" || e.tagName === "style" || e.tagName === "template"));
}
function ki(t, e, r) {
  const n = tn(r, e), s = N(t, -1, !0);
  return r && n && n.type === "element" && n.tagName === "colgroup" && Ft(n, r.children.indexOf(n), r) ? !1 : !!(s && s.type === "element" && s.tagName === "col");
}
function xi(t, e, r) {
  const n = tn(r, e), s = N(t, -1);
  return r && n && n.type === "element" && (n.tagName === "thead" || n.tagName === "tbody") && Ft(n, r.children.indexOf(n), r) ? !1 : !!(s && s.type === "element" && s.tagName === "tr");
}
const Le = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    [`	
\f\r &/=>`.split(""), `	
\f\r "&'/=>\``.split("")],
    [`\0	
\f\r "&'/<=>`.split(""), `\0	
\f\r "&'/<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    [`	
\f\r &>`.split(""), `\0	
\f\r "&'<=>\``.split("")],
    [`\0	
\f\r "&'<=>\``.split(""), `\0	
\f\r "&'<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")]
  ]
};
function Ai(t, e, r, n) {
  const s = n.schema, i = s.space === "svg" ? !1 : n.settings.omitOptionalTags;
  let o = s.space === "svg" ? n.settings.closeEmptyElements : n.settings.voids.includes(t.tagName.toLowerCase());
  const c = [];
  let a;
  s.space === "html" && t.tagName === "svg" && (n.schema = Br);
  const l = vi(n, t.properties), u = n.all(
    s.space === "html" && t.tagName === "template" ? t.content : t
  );
  return n.schema = s, u && (o = !1), (l || !i || !wi(t, e, r)) && (c.push("<", t.tagName, l ? " " + l : ""), o && (s.space === "svg" || n.settings.closeSelfClosing) && (a = l.charAt(l.length - 1), (!n.settings.tightSelfClosing || a === "/" || a && a !== '"' && a !== "'") && c.push(" "), c.push("/")), c.push(">")), c.push(u), !o && (!i || !Ft(t, e, r)) && c.push("</" + t.tagName + ">"), c.join("");
}
function vi(t, e) {
  const r = [];
  let n = -1, s;
  if (e) {
    for (s in e)
      if (e[s] !== null && e[s] !== void 0) {
        const i = Ni(t, s, e[s]);
        i && r.push(i);
      }
  }
  for (; ++n < r.length; ) {
    const i = t.settings.tightAttributes ? r[n].charAt(r[n].length - 1) : void 0;
    n !== r.length - 1 && i !== '"' && i !== "'" && (r[n] += " ");
  }
  return r.join("");
}
function Ni(t, e, r) {
  const n = Hn(t.schema, e), s = t.settings.allowParseErrors && t.schema.space === "html" ? 0 : 1, i = t.settings.allowDangerousCharacters ? 0 : 1;
  let o = t.quote, c;
  if (n.overloadedBoolean && (r === n.attribute || r === "") ? r = !0 : (n.boolean || n.overloadedBoolean) && (typeof r != "string" || r === n.attribute || r === "") && (r = !!r), r == null || r === !1 || typeof r == "number" && Number.isNaN(r))
    return "";
  const a = pe(
    n.attribute,
    Object.assign({}, t.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: Le.name[s][i]
    })
  );
  return r === !0 || (r = Array.isArray(r) ? (n.commaSeparated ? zn : Vn)(r, {
    padLeft: !t.settings.tightCommaSeparatedLists
  }) : String(r), t.settings.collapseEmptyAttributes && !r) ? a : (t.settings.preferUnquoted && (c = pe(
    r,
    Object.assign({}, t.settings.characterReferences, {
      attribute: !0,
      subset: Le.unquoted[s][i]
    })
  )), c !== r && (t.settings.quoteSmart && Yt(r, o) > Yt(r, t.alternative) && (o = t.alternative), c = o + pe(
    r,
    Object.assign({}, t.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: (o === "'" ? Le.single : Le.double)[s][i],
      attribute: !0
    })
  ) + o), a + (c && "=" + c));
}
const Ei = ["<", "&"];
function sn(t, e, r, n) {
  return r && r.type === "element" && (r.tagName === "script" || r.tagName === "style") ? t.value : pe(
    t.value,
    Object.assign({}, n.settings.characterReferences, {
      subset: Ei
    })
  );
}
function Ii(t, e, r, n) {
  return n.settings.allowDangerousHtml ? t.value : sn(t, e, r, n);
}
function Ri(t, e, r, n) {
  return n.all(t);
}
const Li = qn("type", {
  invalid: $i,
  unknown: Ti,
  handlers: { comment: ni, doctype: si, element: Ai, raw: Ii, root: Ri, text: sn }
});
function $i(t) {
  throw new Error("Expected node, not `" + t + "`");
}
function Ti(t) {
  const e = (
    /** @type {Nodes} */
    t
  );
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
const Pi = {}, Mi = {}, Gi = [];
function Oi(t, e) {
  const r = e || Pi, n = r.quote || '"', s = n === '"' ? "'" : '"';
  if (n !== '"' && n !== "'")
    throw new Error("Invalid quote `" + n + "`, expected `'` or `\"`");
  return {
    one: Bi,
    all: Fi,
    settings: {
      omitOptionalTags: r.omitOptionalTags || !1,
      allowParseErrors: r.allowParseErrors || !1,
      allowDangerousCharacters: r.allowDangerousCharacters || !1,
      quoteSmart: r.quoteSmart || !1,
      preferUnquoted: r.preferUnquoted || !1,
      tightAttributes: r.tightAttributes || !1,
      upperDoctype: r.upperDoctype || !1,
      tightDoctype: r.tightDoctype || !1,
      bogusComments: r.bogusComments || !1,
      tightCommaSeparatedLists: r.tightCommaSeparatedLists || !1,
      tightSelfClosing: r.tightSelfClosing || !1,
      collapseEmptyAttributes: r.collapseEmptyAttributes || !1,
      allowDangerousHtml: r.allowDangerousHtml || !1,
      voids: r.voids || Qn,
      characterReferences: r.characterReferences || Mi,
      closeSelfClosing: r.closeSelfClosing || !1,
      closeEmptyElements: r.closeEmptyElements || !1
    },
    schema: r.space === "svg" ? Br : Xn,
    quote: n,
    alternative: s
  }.one(
    Array.isArray(t) ? { type: "root", children: t } : t,
    void 0,
    void 0
  );
}
function Bi(t, e, r) {
  return Li(t, e, r, this);
}
function Fi(t) {
  const e = [], r = t && t.children || Gi;
  let n = -1;
  for (; ++n < r.length; )
    e[n] = this.one(r[n], n, t);
  return e.join("");
}
function He(t, e) {
  const r = typeof t == "string" ? {} : { ...t.colorReplacements }, n = typeof t == "string" ? t : t.name;
  for (const [s, i] of Object.entries(e?.colorReplacements || {}))
    typeof i == "string" ? r[s] = i : s === n && Object.assign(r, i);
  return r;
}
function K(t, e) {
  return t && (e?.[t?.toLowerCase()] || t);
}
function Di(t) {
  return Array.isArray(t) ? t : [t];
}
async function on(t) {
  return Promise.resolve(typeof t == "function" ? t() : t).then((e) => e.default || e);
}
function Dt(t) {
  return !t || ["plaintext", "txt", "text", "plain"].includes(t);
}
function an(t) {
  return t === "ansi" || Dt(t);
}
function jt(t) {
  return t === "none";
}
function cn(t) {
  return jt(t);
}
function ln(t, e) {
  if (!e)
    return t;
  t.properties ||= {}, t.properties.class ||= [], typeof t.properties.class == "string" && (t.properties.class = t.properties.class.split(/\s+/g)), Array.isArray(t.properties.class) || (t.properties.class = []);
  const r = Array.isArray(e) ? e : e.split(/\s+/g);
  for (const n of r)
    n && !t.properties.class.includes(n) && t.properties.class.push(n);
  return t;
}
function Ke(t, e = !1) {
  if (t.length === 0)
    return [["", 0]];
  const r = t.split(/(\r?\n)/g);
  let n = 0;
  const s = [];
  for (let i = 0; i < r.length; i += 2) {
    const o = e ? r[i] + (r[i + 1] || "") : r[i];
    s.push([o, n]), n += r[i].length, n += r[i + 1]?.length || 0;
  }
  return s;
}
function ji(t) {
  const e = Ke(t, !0).map(([s]) => s);
  function r(s) {
    if (s === t.length)
      return {
        line: e.length - 1,
        character: e[e.length - 1].length
      };
    let i = s, o = 0;
    for (const c of e) {
      if (i < c.length)
        break;
      i -= c.length, o++;
    }
    return { line: o, character: i };
  }
  function n(s, i) {
    let o = 0;
    for (let c = 0; c < s; c++)
      o += e[c].length;
    return o += i, o;
  }
  return {
    lines: e,
    indexToPos: r,
    posToIndex: n
  };
}
const Ut = "light-dark()", Ui = ["color", "background-color"];
function Wi(t, e) {
  let r = 0;
  const n = [];
  for (const s of e)
    s > r && n.push({
      ...t,
      content: t.content.slice(r, s),
      offset: t.offset + r
    }), r = s;
  return r < t.content.length && n.push({
    ...t,
    content: t.content.slice(r),
    offset: t.offset + r
  }), n;
}
function Hi(t, e) {
  const r = Array.from(e instanceof Set ? e : new Set(e)).sort((n, s) => n - s);
  return r.length ? t.map((n) => n.flatMap((s) => {
    const i = r.filter((o) => s.offset < o && o < s.offset + s.content.length).map((o) => o - s.offset).sort((o, c) => o - c);
    return i.length ? Wi(s, i) : s;
  })) : t;
}
function zi(t, e, r, n, s = "css-vars") {
  const i = {
    content: t.content,
    explanation: t.explanation,
    offset: t.offset
  }, o = e.map((u) => ze(t.variants[u])), c = new Set(o.flatMap((u) => Object.keys(u))), a = {}, l = (u, p) => {
    const h = p === "color" ? "" : p === "background-color" ? "-bg" : `-${p}`;
    return r + e[u] + (p === "color" ? "" : h);
  };
  return o.forEach((u, p) => {
    for (const h of c) {
      const d = u[h] || "inherit";
      if (p === 0 && n && Ui.includes(h))
        if (n === Ut && o.length > 1) {
          const f = e.findIndex((w) => w === "light"), y = e.findIndex((w) => w === "dark");
          if (f === -1 || y === -1)
            throw new x('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
          const b = o[f][h] || "inherit", m = o[y][h] || "inherit";
          a[h] = `light-dark(${b}, ${m})`, s === "css-vars" && (a[l(p, h)] = d);
        } else
          a[h] = d;
      else
        s === "css-vars" && (a[l(p, h)] = d);
    }
  }), i.htmlStyle = a, i;
}
function ze(t) {
  const e = {};
  if (t.color && (e.color = t.color), t.bgColor && (e["background-color"] = t.bgColor), t.fontStyle) {
    t.fontStyle & $.Italic && (e["font-style"] = "italic"), t.fontStyle & $.Bold && (e["font-weight"] = "bold");
    const r = [];
    t.fontStyle & $.Underline && r.push("underline"), t.fontStyle & $.Strikethrough && r.push("line-through"), r.length && (e["text-decoration"] = r.join(" "));
  }
  return e;
}
function It(t) {
  return typeof t == "string" ? t : Object.entries(t).map(([e, r]) => `${e}:${r}`).join(";");
}
const un = /* @__PURE__ */ new WeakMap();
function Je(t, e) {
  un.set(t, e);
}
function xe(t) {
  return un.get(t);
}
class de {
  /**
   * Theme to Stack mapping
   */
  _stacks = {};
  lang;
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  /**
   * Static method to create a initial grammar state.
   */
  static initial(e, r) {
    return new de(
      Object.fromEntries(Di(r).map((n) => [n, Nt])),
      e
    );
  }
  constructor(...e) {
    if (e.length === 2) {
      const [r, n] = e;
      this.lang = n, this._stacks = r;
    } else {
      const [r, n, s] = e;
      this.lang = n, this._stacks = { [s]: r };
    }
  }
  /**
   * Get the internal stack object.
   * @internal
   */
  getInternalStack(e = this.theme) {
    return this._stacks[e];
  }
  getScopes(e = this.theme) {
    return Vi(this._stacks[e]);
  }
  toJSON() {
    return {
      lang: this.lang,
      theme: this.theme,
      themes: this.themes,
      scopes: this.getScopes()
    };
  }
}
function Vi(t) {
  const e = [], r = /* @__PURE__ */ new Set();
  function n(s) {
    if (r.has(s))
      return;
    r.add(s);
    const i = s?.nameScopesList?.scopeName;
    i && e.push(i), s.parent && n(s.parent);
  }
  return n(t), e;
}
function qi(t, e) {
  if (!(t instanceof de))
    throw new x("Invalid grammar state");
  return t.getInternalStack(e);
}
function Xi() {
  const t = /* @__PURE__ */ new WeakMap();
  function e(r) {
    if (!t.has(r.meta)) {
      let n = function(o) {
        if (typeof o == "number") {
          if (o < 0 || o > r.source.length)
            throw new x(`Invalid decoration offset: ${o}. Code length: ${r.source.length}`);
          return {
            ...s.indexToPos(o),
            offset: o
          };
        } else {
          const c = s.lines[o.line];
          if (c === void 0)
            throw new x(`Invalid decoration position ${JSON.stringify(o)}. Lines length: ${s.lines.length}`);
          let a = o.character;
          if (a < 0 && (a = c.length + a), a < 0 || a > c.length)
            throw new x(`Invalid decoration position ${JSON.stringify(o)}. Line ${o.line} length: ${c.length}`);
          return {
            ...o,
            character: a,
            offset: s.posToIndex(o.line, a)
          };
        }
      };
      const s = ji(r.source), i = (r.options.decorations || []).map((o) => ({
        ...o,
        start: n(o.start),
        end: n(o.end)
      }));
      Qi(i), t.set(r.meta, {
        decorations: i,
        converter: s,
        source: r.source
      });
    }
    return t.get(r.meta);
  }
  return {
    name: "shiki:decorations",
    tokens(r) {
      if (!this.options.decorations?.length)
        return;
      const s = e(this).decorations.flatMap((o) => [o.start.offset, o.end.offset]);
      return Hi(r, s);
    },
    code(r) {
      if (!this.options.decorations?.length)
        return;
      const n = e(this), s = Array.from(r.children).filter((u) => u.type === "element" && u.tagName === "span");
      if (s.length !== n.converter.lines.length)
        throw new x(`Number of lines in code element (${s.length}) does not match the number of lines in the source (${n.converter.lines.length}). Failed to apply decorations.`);
      function i(u, p, h, d) {
        const f = s[u];
        let y = "", b = -1, m = -1;
        if (p === 0 && (b = 0), h === 0 && (m = 0), h === Number.POSITIVE_INFINITY && (m = f.children.length), b === -1 || m === -1)
          for (let g = 0; g < f.children.length; g++)
            y += pn(f.children[g]), b === -1 && y.length === p && (b = g + 1), m === -1 && y.length === h && (m = g + 1);
        if (b === -1)
          throw new x(`Failed to find start index for decoration ${JSON.stringify(d.start)}`);
        if (m === -1)
          throw new x(`Failed to find end index for decoration ${JSON.stringify(d.end)}`);
        const w = f.children.slice(b, m);
        if (!d.alwaysWrap && w.length === f.children.length)
          c(f, d, "line");
        else if (!d.alwaysWrap && w.length === 1 && w[0].type === "element")
          c(w[0], d, "token");
        else {
          const g = {
            type: "element",
            tagName: "span",
            properties: {},
            children: w
          };
          c(g, d, "wrapper"), f.children.splice(b, w.length, g);
        }
      }
      function o(u, p) {
        s[u] = c(s[u], p, "line");
      }
      function c(u, p, h) {
        const d = p.properties || {}, f = p.transform || ((y) => y);
        return u.tagName = p.tagName || "span", u.properties = {
          ...u.properties,
          ...d,
          class: u.properties.class
        }, p.properties?.class && ln(u, p.properties.class), u = f(u, h) || u, u;
      }
      const a = [], l = n.decorations.sort((u, p) => p.start.offset - u.start.offset || u.end.offset - p.end.offset);
      for (const u of l) {
        const { start: p, end: h } = u;
        if (p.line === h.line)
          i(p.line, p.character, h.character, u);
        else if (p.line < h.line) {
          i(p.line, p.character, Number.POSITIVE_INFINITY, u);
          for (let d = p.line + 1; d < h.line; d++)
            a.unshift(() => o(d, u));
          i(h.line, 0, h.character, u);
        }
      }
      a.forEach((u) => u());
    }
  };
}
function Qi(t) {
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    if (r.start.offset > r.end.offset)
      throw new x(`Invalid decoration range: ${JSON.stringify(r.start)} - ${JSON.stringify(r.end)}`);
    for (let n = e + 1; n < t.length; n++) {
      const s = t[n], i = r.start.offset <= s.start.offset && s.start.offset < r.end.offset, o = r.start.offset < s.end.offset && s.end.offset <= r.end.offset, c = s.start.offset <= r.start.offset && r.start.offset < s.end.offset, a = s.start.offset < r.end.offset && r.end.offset <= s.end.offset;
      if (i || o || c || a) {
        if (i && o || c && a || c && r.start.offset === r.end.offset || o && s.start.offset === s.end.offset)
          continue;
        throw new x(`Decorations ${JSON.stringify(r.start)} and ${JSON.stringify(s.start)} intersect.`);
      }
    }
  }
}
function pn(t) {
  return t.type === "text" ? t.value : t.type === "element" ? t.children.map(pn).join("") : "";
}
const Ki = [
  /* @__PURE__ */ Xi()
];
function Ve(t) {
  const e = Ji(t.transformers || []);
  return [
    ...e.pre,
    ...e.normal,
    ...e.post,
    ...Ki
  ];
}
function Ji(t) {
  const e = [], r = [], n = [];
  for (const s of t)
    switch (s.enforce) {
      case "pre":
        e.push(s);
        break;
      case "post":
        r.push(s);
        break;
      default:
        n.push(s);
    }
  return { pre: e, post: r, normal: n };
}
var ee = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
], ut = {
  1: "bold",
  2: "dim",
  3: "italic",
  4: "underline",
  7: "reverse",
  8: "hidden",
  9: "strikethrough"
};
function Zi(t, e) {
  const r = t.indexOf("\x1B", e);
  if (r !== -1 && t[r + 1] === "[") {
    const n = t.indexOf("m", r);
    if (n !== -1)
      return {
        sequence: t.substring(r + 2, n).split(";"),
        startPosition: r,
        position: n + 1
      };
  }
  return {
    position: t.length
  };
}
function pr(t) {
  const e = t.shift();
  if (e === "2") {
    const r = t.splice(0, 3).map((n) => Number.parseInt(n));
    return r.length !== 3 || r.some((n) => Number.isNaN(n)) ? void 0 : {
      type: "rgb",
      rgb: r
    };
  } else if (e === "5") {
    const r = t.shift();
    if (r)
      return { type: "table", index: Number(r) };
  }
}
function Yi(t) {
  const e = [];
  for (; t.length > 0; ) {
    const r = t.shift();
    if (!r)
      continue;
    const n = Number.parseInt(r);
    if (!Number.isNaN(n))
      if (n === 0)
        e.push({ type: "resetAll" });
      else if (n <= 9)
        ut[n] && e.push({
          type: "setDecoration",
          value: ut[n]
        });
      else if (n <= 29) {
        const s = ut[n - 20];
        s && (e.push({
          type: "resetDecoration",
          value: s
        }), s === "dim" && e.push({
          type: "resetDecoration",
          value: "bold"
        }));
      } else if (n <= 37)
        e.push({
          type: "setForegroundColor",
          value: { type: "named", name: ee[n - 30] }
        });
      else if (n === 38) {
        const s = pr(t);
        s && e.push({
          type: "setForegroundColor",
          value: s
        });
      } else if (n === 39)
        e.push({
          type: "resetForegroundColor"
        });
      else if (n <= 47)
        e.push({
          type: "setBackgroundColor",
          value: { type: "named", name: ee[n - 40] }
        });
      else if (n === 48) {
        const s = pr(t);
        s && e.push({
          type: "setBackgroundColor",
          value: s
        });
      } else n === 49 ? e.push({
        type: "resetBackgroundColor"
      }) : n === 53 ? e.push({
        type: "setDecoration",
        value: "overline"
      }) : n === 55 ? e.push({
        type: "resetDecoration",
        value: "overline"
      }) : n >= 90 && n <= 97 ? e.push({
        type: "setForegroundColor",
        value: { type: "named", name: ee[n - 90 + 8] }
      }) : n >= 100 && n <= 107 && e.push({
        type: "setBackgroundColor",
        value: { type: "named", name: ee[n - 100 + 8] }
      });
  }
  return e;
}
function eo() {
  let t = null, e = null, r = /* @__PURE__ */ new Set();
  return {
    parse(n) {
      const s = [];
      let i = 0;
      do {
        const o = Zi(n, i), c = o.sequence ? n.substring(i, o.startPosition) : n.substring(i);
        if (c.length > 0 && s.push({
          value: c,
          foreground: t,
          background: e,
          decorations: new Set(r)
        }), o.sequence) {
          const a = Yi(o.sequence);
          for (const l of a)
            l.type === "resetAll" ? (t = null, e = null, r.clear()) : l.type === "resetForegroundColor" ? t = null : l.type === "resetBackgroundColor" ? e = null : l.type === "resetDecoration" && r.delete(l.value);
          for (const l of a)
            l.type === "setForegroundColor" ? t = l.value : l.type === "setBackgroundColor" ? e = l.value : l.type === "setDecoration" && r.add(l.value);
        }
        i = o.position;
      } while (i < n.length);
      return s;
    }
  };
}
var to = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function ro(t = to) {
  function e(c) {
    return t[c];
  }
  function r(c) {
    return `#${c.map((a) => Math.max(0, Math.min(a, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let n;
  function s() {
    if (n)
      return n;
    n = [];
    for (let l = 0; l < ee.length; l++)
      n.push(e(ee[l]));
    let c = [0, 95, 135, 175, 215, 255];
    for (let l = 0; l < 6; l++)
      for (let u = 0; u < 6; u++)
        for (let p = 0; p < 6; p++)
          n.push(r([c[l], c[u], c[p]]));
    let a = 8;
    for (let l = 0; l < 24; l++, a += 10)
      n.push(r([a, a, a]));
    return n;
  }
  function i(c) {
    return s()[c];
  }
  function o(c) {
    switch (c.type) {
      case "named":
        return e(c.name);
      case "rgb":
        return r(c.rgb);
      case "table":
        return i(c.index);
    }
  }
  return {
    value: o
  };
}
const no = {
  black: "#000000",
  red: "#cd3131",
  green: "#0DBC79",
  yellow: "#E5E510",
  blue: "#2472C8",
  magenta: "#BC3FBC",
  cyan: "#11A8CD",
  white: "#E5E5E5",
  brightBlack: "#666666",
  brightRed: "#F14C4C",
  brightGreen: "#23D18B",
  brightYellow: "#F5F543",
  brightBlue: "#3B8EEA",
  brightMagenta: "#D670D6",
  brightCyan: "#29B8DB",
  brightWhite: "#FFFFFF"
};
function so(t, e, r) {
  const n = He(t, r), s = Ke(e), i = Object.fromEntries(
    ee.map((a) => {
      const l = `terminal.ansi${a[0].toUpperCase()}${a.substring(1)}`, u = t.colors?.[l];
      return [a, u || no[a]];
    })
  ), o = ro(i), c = eo();
  return s.map(
    (a) => c.parse(a[0]).map((l) => {
      let u, p;
      l.decorations.has("reverse") ? (u = l.background ? o.value(l.background) : t.bg, p = l.foreground ? o.value(l.foreground) : t.fg) : (u = l.foreground ? o.value(l.foreground) : t.fg, p = l.background ? o.value(l.background) : void 0), u = K(u, n), p = K(p, n), l.decorations.has("dim") && (u = io(u));
      let h = $.None;
      return l.decorations.has("bold") && (h |= $.Bold), l.decorations.has("italic") && (h |= $.Italic), l.decorations.has("underline") && (h |= $.Underline), l.decorations.has("strikethrough") && (h |= $.Strikethrough), {
        content: l.value,
        offset: a[1],
        // TODO: more accurate offset? might need to fork ansi-sequence-parser
        color: u,
        bgColor: p,
        fontStyle: h
      };
    })
  );
}
function io(t) {
  const e = t.match(/#([0-9a-f]{3,8})/i);
  if (e) {
    const n = e[1];
    if (n.length === 8) {
      const s = Math.round(Number.parseInt(n.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
      return `#${n.slice(0, 6)}${s}`;
    } else {
      if (n.length === 6)
        return `#${n}80`;
      if (n.length === 4) {
        const s = n[0], i = n[1], o = n[2], c = n[3], a = Math.round(Number.parseInt(`${c}${c}`, 16) / 2).toString(16).padStart(2, "0");
        return `#${s}${s}${i}${i}${o}${o}${a}`;
      } else if (n.length === 3) {
        const s = n[0], i = n[1], o = n[2];
        return `#${s}${s}${i}${i}${o}${o}80`;
      }
    }
  }
  const r = t.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  return r ? `var(${r[1]}-dim)` : t;
}
function Wt(t, e, r = {}) {
  const {
    theme: n = t.getLoadedThemes()[0]
  } = r, s = t.resolveLangAlias(r.lang || "text");
  if (Dt(s) || jt(n))
    return Ke(e).map((a) => [{ content: a[0], offset: a[1] }]);
  const { theme: i, colorMap: o } = t.setTheme(n);
  if (s === "ansi")
    return so(i, e, r);
  const c = t.getLanguage(r.lang || "text");
  if (r.grammarState) {
    if (r.grammarState.lang !== c.name)
      throw new x(`Grammar state language "${r.grammarState.lang}" does not match highlight language "${c.name}"`);
    if (!r.grammarState.themes.includes(i.name))
      throw new x(`Grammar state themes "${r.grammarState.themes}" do not contain highlight theme "${i.name}"`);
  }
  return ao(e, c, i, o, r);
}
function oo(...t) {
  if (t.length === 2)
    return xe(t[1]);
  const [e, r, n = {}] = t, {
    lang: s = "text",
    theme: i = e.getLoadedThemes()[0]
  } = n;
  if (Dt(s) || jt(i))
    throw new x("Plain language does not have grammar state");
  if (s === "ansi")
    throw new x("ANSI language does not have grammar state");
  const { theme: o, colorMap: c } = e.setTheme(i), a = e.getLanguage(s);
  return new de(
    Ht(r, a, o, c, n).stateStack,
    a.name,
    o.name
  );
}
function ao(t, e, r, n, s) {
  const i = Ht(t, e, r, n, s), o = new de(
    i.stateStack,
    e.name,
    r.name
  );
  return Je(i.tokens, o), i.tokens;
}
function Ht(t, e, r, n, s) {
  const i = He(r, s), {
    tokenizeMaxLineLength: o = 0,
    tokenizeTimeLimit: c = 500
  } = s, a = Ke(t);
  let l = s.grammarState ? qi(s.grammarState, r.name) ?? Nt : s.grammarContextCode != null ? Ht(
    s.grammarContextCode,
    e,
    r,
    n,
    {
      ...s,
      grammarState: void 0,
      grammarContextCode: void 0
    }
  ).stateStack : Nt, u = [];
  const p = [];
  for (let h = 0, d = a.length; h < d; h++) {
    const [f, y] = a[h];
    if (f === "") {
      u = [], p.push([]);
      continue;
    }
    if (o > 0 && f.length >= o) {
      u = [], p.push([{
        content: f,
        offset: y,
        color: "",
        fontStyle: 0
      }]);
      continue;
    }
    let b, m, w;
    s.includeExplanation && (b = e.tokenizeLine(f, l, c), m = b.tokens, w = 0);
    const g = e.tokenizeLine2(f, l, c), _ = g.tokens.length / 2;
    for (let S = 0; S < _; S++) {
      const E = g.tokens[2 * S], T = S + 1 < _ ? g.tokens[2 * S + 2] : f.length;
      if (E === T)
        continue;
      const j = g.tokens[2 * S + 1], Ee = K(
        n[he.getForeground(j)],
        i
      ), nt = he.getFontStyle(j), ge = {
        content: f.substring(E, T),
        offset: y + E,
        color: Ee,
        fontStyle: nt
      };
      if (s.includeExplanation) {
        const q = [];
        if (s.includeExplanation !== "scopeName")
          for (const U of r.settings) {
            let ne;
            switch (typeof U.scope) {
              case "string":
                ne = U.scope.split(/,/).map((st) => st.trim());
                break;
              case "object":
                ne = U.scope;
                break;
              default:
                continue;
            }
            q.push({
              settings: U,
              selectors: ne.map((st) => st.split(/ /))
            });
          }
        ge.explanation = [];
        let Zt = 0;
        for (; E + Zt < T; ) {
          const U = m[w], ne = f.substring(
            U.startIndex,
            U.endIndex
          );
          Zt += ne.length, ge.explanation.push({
            content: ne,
            scopes: s.includeExplanation === "scopeName" ? co(
              U.scopes
            ) : lo(
              q,
              U.scopes
            )
          }), w += 1;
        }
      }
      u.push(ge);
    }
    p.push(u), u = [], l = g.ruleStack;
  }
  return {
    tokens: p,
    stateStack: l
  };
}
function co(t) {
  return t.map((e) => ({ scopeName: e }));
}
function lo(t, e) {
  const r = [];
  for (let n = 0, s = e.length; n < s; n++) {
    const i = e[n];
    r[n] = {
      scopeName: i,
      themeMatches: po(t, i, e.slice(0, n))
    };
  }
  return r;
}
function hr(t, e) {
  return t === e || e.substring(0, t.length) === t && e[t.length] === ".";
}
function uo(t, e, r) {
  if (!hr(t[t.length - 1], e))
    return !1;
  let n = t.length - 2, s = r.length - 1;
  for (; n >= 0 && s >= 0; )
    hr(t[n], r[s]) && (n -= 1), s -= 1;
  return n === -1;
}
function po(t, e, r) {
  const n = [];
  for (const { selectors: s, settings: i } of t)
    for (const o of s)
      if (uo(o, e, r)) {
        n.push(i);
        break;
      }
  return n;
}
function hn(t, e, r) {
  const n = Object.entries(r.themes).filter((a) => a[1]).map((a) => ({ color: a[0], theme: a[1] })), s = n.map((a) => {
    const l = Wt(t, e, {
      ...r,
      theme: a.theme
    }), u = xe(l), p = typeof a.theme == "string" ? a.theme : a.theme.name;
    return {
      tokens: l,
      state: u,
      theme: p
    };
  }), i = ho(
    ...s.map((a) => a.tokens)
  ), o = i[0].map(
    (a, l) => a.map((u, p) => {
      const h = {
        content: u.content,
        variants: {},
        offset: u.offset
      };
      return "includeExplanation" in r && r.includeExplanation && (h.explanation = u.explanation), i.forEach((d, f) => {
        const {
          content: y,
          explanation: b,
          offset: m,
          ...w
        } = d[l][p];
        h.variants[n[f].color] = w;
      }), h;
    })
  ), c = s[0].state ? new de(
    Object.fromEntries(s.map((a) => [a.theme, a.state?.getInternalStack(a.theme)])),
    s[0].state.lang
  ) : void 0;
  return c && Je(o, c), o;
}
function ho(...t) {
  const e = t.map(() => []), r = t.length;
  for (let n = 0; n < t[0].length; n++) {
    const s = t.map((a) => a[n]), i = e.map(() => []);
    e.forEach((a, l) => a.push(i[l]));
    const o = s.map(() => 0), c = s.map((a) => a[0]);
    for (; c.every((a) => a); ) {
      const a = Math.min(...c.map((l) => l.content.length));
      for (let l = 0; l < r; l++) {
        const u = c[l];
        u.content.length === a ? (i[l].push(u), o[l] += 1, c[l] = s[l][o[l]]) : (i[l].push({
          ...u,
          content: u.content.slice(0, a)
        }), c[l] = {
          ...u,
          content: u.content.slice(a),
          offset: u.offset + a
        });
      }
    }
  }
  return e;
}
function qe(t, e, r) {
  let n, s, i, o, c, a;
  if ("themes" in r) {
    const {
      defaultColor: l = "light",
      cssVariablePrefix: u = "--shiki-",
      colorsRendering: p = "css-vars"
    } = r, h = Object.entries(r.themes).filter((m) => m[1]).map((m) => ({ color: m[0], theme: m[1] })).sort((m, w) => m.color === l ? -1 : w.color === l ? 1 : 0);
    if (h.length === 0)
      throw new x("`themes` option must not be empty");
    const d = hn(
      t,
      e,
      r
    );
    if (a = xe(d), l && Ut !== l && !h.find((m) => m.color === l))
      throw new x(`\`themes\` option must contain the defaultColor key \`${l}\``);
    const f = h.map((m) => t.getTheme(m.theme)), y = h.map((m) => m.color);
    i = d.map((m) => m.map((w) => zi(w, y, u, l, p))), a && Je(i, a);
    const b = h.map((m) => He(m.theme, r));
    s = dr(h, f, b, u, l, "fg", p), n = dr(h, f, b, u, l, "bg", p), o = `shiki-themes ${f.map((m) => m.name).join(" ")}`, c = l ? void 0 : [s, n].join(";");
  } else if ("theme" in r) {
    const l = He(r.theme, r);
    i = Wt(
      t,
      e,
      r
    );
    const u = t.getTheme(r.theme);
    n = K(u.bg, l), s = K(u.fg, l), o = u.name, a = xe(i);
  } else
    throw new x("Invalid options, either `theme` or `themes` must be provided");
  return {
    tokens: i,
    fg: s,
    bg: n,
    themeName: o,
    rootStyle: c,
    grammarState: a
  };
}
function dr(t, e, r, n, s, i, o) {
  return t.map((c, a) => {
    const l = K(e[a][i], r[a]) || "inherit", u = `${n + c.color}${i === "bg" ? "-bg" : ""}:${l}`;
    if (a === 0 && s) {
      if (s === Ut && t.length > 1) {
        const p = t.findIndex((y) => y.color === "light"), h = t.findIndex((y) => y.color === "dark");
        if (p === -1 || h === -1)
          throw new x('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        const d = K(e[p][i], r[p]) || "inherit", f = K(e[h][i], r[h]) || "inherit";
        return `light-dark(${d}, ${f});${u}`;
      }
      return l;
    }
    return o === "css-vars" ? u : null;
  }).filter((c) => !!c).join(";");
}
function Xe(t, e, r, n = {
  meta: {},
  options: r,
  codeToHast: (s, i) => Xe(t, s, i),
  codeToTokens: (s, i) => qe(t, s, i)
}) {
  let s = e;
  for (const f of Ve(r))
    s = f.preprocess?.call(n, s, r) || s;
  let {
    tokens: i,
    fg: o,
    bg: c,
    themeName: a,
    rootStyle: l,
    grammarState: u
  } = qe(t, s, r);
  const {
    mergeWhitespaces: p = !0,
    mergeSameStyleTokens: h = !1
  } = r;
  p === !0 ? i = mo(i) : p === "never" && (i = go(i)), h && (i = yo(i));
  const d = {
    ...n,
    get source() {
      return s;
    }
  };
  for (const f of Ve(r))
    i = f.tokens?.call(d, i) || i;
  return fo(
    i,
    {
      ...r,
      fg: o,
      bg: c,
      themeName: a,
      rootStyle: r.rootStyle === !1 ? !1 : r.rootStyle ?? l
    },
    d,
    u
  );
}
function fo(t, e, r, n = xe(t)) {
  const s = Ve(e), i = [], o = {
    type: "root",
    children: []
  }, {
    structure: c = "classic",
    tabindex: a = "0"
  } = e, l = {
    class: `shiki ${e.themeName || ""}`
  };
  e.rootStyle !== !1 && (e.rootStyle != null ? l.style = e.rootStyle : l.style = `background-color:${e.bg};color:${e.fg}`), a !== !1 && a != null && (l.tabindex = a.toString());
  for (const [y, b] of Object.entries(e.meta || {}))
    y.startsWith("_") || (l[y] = b);
  let u = {
    type: "element",
    tagName: "pre",
    properties: l,
    children: [],
    data: e.data
  }, p = {
    type: "element",
    tagName: "code",
    properties: {},
    children: i
  };
  const h = [], d = {
    ...r,
    structure: c,
    addClassToHast: ln,
    get source() {
      return r.source;
    },
    get tokens() {
      return t;
    },
    get options() {
      return e;
    },
    get root() {
      return o;
    },
    get pre() {
      return u;
    },
    get code() {
      return p;
    },
    get lines() {
      return h;
    }
  };
  if (t.forEach((y, b) => {
    b && (c === "inline" ? o.children.push({ type: "element", tagName: "br", properties: {}, children: [] }) : c === "classic" && i.push({ type: "text", value: `
` }));
    let m = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    }, w = 0;
    for (const g of y) {
      let _ = {
        type: "element",
        tagName: "span",
        properties: {
          ...g.htmlAttrs
        },
        children: [{ type: "text", value: g.content }]
      };
      const S = It(g.htmlStyle || ze(g));
      S && (_.properties.style = S);
      for (const E of s)
        _ = E?.span?.call(d, _, b + 1, w, m, g) || _;
      c === "inline" ? o.children.push(_) : c === "classic" && m.children.push(_), w += g.content.length;
    }
    if (c === "classic") {
      for (const g of s)
        m = g?.line?.call(d, m, b + 1) || m;
      h.push(m), i.push(m);
    } else c === "inline" && h.push(m);
  }), c === "classic") {
    for (const y of s)
      p = y?.code?.call(d, p) || p;
    u.children.push(p);
    for (const y of s)
      u = y?.pre?.call(d, u) || u;
    o.children.push(u);
  } else if (c === "inline") {
    const y = [];
    let b = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    };
    for (const g of o.children)
      g.type === "element" && g.tagName === "br" ? (y.push(b), b = {
        type: "element",
        tagName: "span",
        properties: { class: "line" },
        children: []
      }) : (g.type === "element" || g.type === "text") && b.children.push(g);
    y.push(b);
    let w = {
      type: "element",
      tagName: "code",
      properties: {},
      children: y
    };
    for (const g of s)
      w = g?.code?.call(d, w) || w;
    o.children = [];
    for (let g = 0; g < w.children.length; g++) {
      g > 0 && o.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
      const _ = w.children[g];
      _.type === "element" && o.children.push(..._.children);
    }
  }
  let f = o;
  for (const y of s)
    f = y?.root?.call(d, f) || f;
  return n && Je(f, n), f;
}
function mo(t) {
  return t.map((e) => {
    const r = [];
    let n = "", s;
    return e.forEach((i, o) => {
      const a = !(i.fontStyle && (i.fontStyle & $.Underline || i.fontStyle & $.Strikethrough));
      a && i.content.match(/^\s+$/) && e[o + 1] ? (s === void 0 && (s = i.offset), n += i.content) : n ? (a ? r.push({
        ...i,
        offset: s,
        content: n + i.content
      }) : r.push(
        {
          content: n,
          offset: s
        },
        i
      ), s = void 0, n = "") : r.push(i);
    }), r;
  });
}
function go(t) {
  return t.map((e) => e.flatMap((r) => {
    if (r.content.match(/^\s+$/))
      return r;
    const n = r.content.match(/^(\s*)(.*?)(\s*)$/);
    if (!n)
      return r;
    const [, s, i, o] = n;
    if (!s && !o)
      return r;
    const c = [{
      ...r,
      offset: r.offset + s.length,
      content: i
    }];
    return s && c.unshift({
      content: s,
      offset: r.offset
    }), o && c.push({
      content: o,
      offset: r.offset + s.length + i.length
    }), c;
  }));
}
function yo(t) {
  return t.map((e) => {
    const r = [];
    for (const n of e) {
      if (r.length === 0) {
        r.push({ ...n });
        continue;
      }
      const s = r[r.length - 1], i = It(s.htmlStyle || ze(s)), o = It(n.htmlStyle || ze(n)), c = s.fontStyle && (s.fontStyle & $.Underline || s.fontStyle & $.Strikethrough), a = n.fontStyle && (n.fontStyle & $.Underline || n.fontStyle & $.Strikethrough);
      !c && !a && i === o ? s.content += n.content : r.push({ ...n });
    }
    return r;
  });
}
const bo = Oi;
function wo(t, e, r) {
  const n = {
    meta: {},
    options: r,
    codeToHast: (i, o) => Xe(t, i, o),
    codeToTokens: (i, o) => qe(t, i, o)
  };
  let s = bo(Xe(t, e, r, n));
  for (const i of Ve(r))
    s = i.postprocess?.call(n, s, r) || s;
  return s;
}
const fr = { light: "#333333", dark: "#bbbbbb" }, mr = { light: "#fffffe", dark: "#1e1e1e" }, gr = "__shiki_resolved";
function zt(t) {
  if (t?.[gr])
    return t;
  const e = {
    ...t
  };
  e.tokenColors && !e.settings && (e.settings = e.tokenColors, delete e.tokenColors), e.type ||= "dark", e.colorReplacements = { ...e.colorReplacements }, e.settings ||= [];
  let { bg: r, fg: n } = e;
  if (!r || !n) {
    const c = e.settings ? e.settings.find((a) => !a.name && !a.scope) : void 0;
    c?.settings?.foreground && (n = c.settings.foreground), c?.settings?.background && (r = c.settings.background), !n && e?.colors?.["editor.foreground"] && (n = e.colors["editor.foreground"]), !r && e?.colors?.["editor.background"] && (r = e.colors["editor.background"]), n || (n = e.type === "light" ? fr.light : fr.dark), r || (r = e.type === "light" ? mr.light : mr.dark), e.fg = n, e.bg = r;
  }
  e.settings[0] && e.settings[0].settings && !e.settings[0].scope || e.settings.unshift({
    settings: {
      foreground: e.fg,
      background: e.bg
    }
  });
  let s = 0;
  const i = /* @__PURE__ */ new Map();
  function o(c) {
    if (i.has(c))
      return i.get(c);
    s += 1;
    const a = `#${s.toString(16).padStart(8, "0").toLowerCase()}`;
    return e.colorReplacements?.[`#${a}`] ? o(c) : (i.set(c, a), a);
  }
  e.settings = e.settings.map((c) => {
    const a = c.settings?.foreground && !c.settings.foreground.startsWith("#"), l = c.settings?.background && !c.settings.background.startsWith("#");
    if (!a && !l)
      return c;
    const u = {
      ...c,
      settings: {
        ...c.settings
      }
    };
    if (a) {
      const p = o(c.settings.foreground);
      e.colorReplacements[p] = c.settings.foreground, u.settings.foreground = p;
    }
    if (l) {
      const p = o(c.settings.background);
      e.colorReplacements[p] = c.settings.background, u.settings.background = p;
    }
    return u;
  });
  for (const c of Object.keys(e.colors || {}))
    if ((c === "editor.foreground" || c === "editor.background" || c.startsWith("terminal.ansi")) && !e.colors[c]?.startsWith("#")) {
      const a = o(e.colors[c]);
      e.colorReplacements[a] = e.colors[c], e.colors[c] = a;
    }
  return Object.defineProperty(e, gr, {
    enumerable: !1,
    writable: !1,
    value: !0
  }), e;
}
async function dn(t) {
  return Array.from(new Set((await Promise.all(
    t.filter((e) => !an(e)).map(async (e) => await on(e).then((r) => Array.isArray(r) ? r : [r]))
  )).flat()));
}
async function fn(t) {
  return (await Promise.all(
    t.map(
      async (r) => cn(r) ? null : zt(await on(r))
    )
  )).filter((r) => !!r);
}
let _o = 3;
function Co(t, e = 3) {
  e > _o || console.trace(`[SHIKI DEPRECATE]: ${t}`);
}
let ue = class extends Error {
  constructor(e) {
    super(e), this.name = "ShikiError";
  }
};
function mn(t, e) {
  if (!e)
    return t;
  if (e[t]) {
    const r = /* @__PURE__ */ new Set([t]);
    for (; e[t]; ) {
      if (t = e[t], r.has(t))
        throw new ue(`Circular alias \`${Array.from(r).join(" -> ")} -> ${t}\``);
      r.add(t);
    }
  }
  return t;
}
class So extends Os {
  constructor(e, r, n, s = {}) {
    super(e), this._resolver = e, this._themes = r, this._langs = n, this._alias = s, this._themes.map((i) => this.loadTheme(i)), this.loadLanguages(this._langs);
  }
  _resolvedThemes = /* @__PURE__ */ new Map();
  _resolvedGrammars = /* @__PURE__ */ new Map();
  _langMap = /* @__PURE__ */ new Map();
  _langGraph = /* @__PURE__ */ new Map();
  _textmateThemeCache = /* @__PURE__ */ new WeakMap();
  _loadedThemesCache = null;
  _loadedLanguagesCache = null;
  getTheme(e) {
    return typeof e == "string" ? this._resolvedThemes.get(e) : this.loadTheme(e);
  }
  loadTheme(e) {
    const r = zt(e);
    return r.name && (this._resolvedThemes.set(r.name, r), this._loadedThemesCache = null), r;
  }
  getLoadedThemes() {
    return this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]), this._loadedThemesCache;
  }
  // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
  // is expensive. Themes can switch often especially for dual-theme support.
  //
  // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
  // we omit here so it's easier to cache the themes.
  setTheme(e) {
    let r = this._textmateThemeCache.get(e);
    r || (r = Fe.createFromRawTheme(e), this._textmateThemeCache.set(e, r)), this._syncRegistry.setTheme(r);
  }
  getGrammar(e) {
    return e = mn(e, this._alias), this._resolvedGrammars.get(e);
  }
  loadLanguage(e) {
    if (this.getGrammar(e.name))
      return;
    const r = new Set(
      [...this._langMap.values()].filter((i) => i.embeddedLangsLazy?.includes(e.name))
    );
    this._resolver.addLanguage(e);
    const n = {
      balancedBracketSelectors: e.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: e.unbalancedBracketSelectors || []
    };
    this._syncRegistry._rawGrammars.set(e.scopeName, e);
    const s = this.loadGrammarWithConfiguration(e.scopeName, 1, n);
    if (s.name = e.name, this._resolvedGrammars.set(e.name, s), e.aliases && e.aliases.forEach((i) => {
      this._alias[i] = e.name;
    }), this._loadedLanguagesCache = null, r.size)
      for (const i of r)
        this._resolvedGrammars.delete(i.name), this._loadedLanguagesCache = null, this._syncRegistry?._injectionGrammars?.delete(i.scopeName), this._syncRegistry?._grammars?.delete(i.scopeName), this.loadLanguage(this._langMap.get(i.name));
  }
  dispose() {
    super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
  }
  loadLanguages(e) {
    for (const s of e)
      this.resolveEmbeddedLanguages(s);
    const r = Array.from(this._langGraph.entries()), n = r.filter(([s, i]) => !i);
    if (n.length) {
      const s = r.filter(([i, o]) => o ? (o.embeddedLanguages || o.embeddedLangs)?.some((a) => n.map(([l]) => l).includes(a)) : !1).filter((i) => !n.includes(i));
      throw new ue(`Missing languages ${n.map(([i]) => `\`${i}\``).join(", ")}, required by ${s.map(([i]) => `\`${i}\``).join(", ")}`);
    }
    for (const [s, i] of r)
      this._resolver.addLanguage(i);
    for (const [s, i] of r)
      this.loadLanguage(i);
  }
  getLoadedLanguages() {
    return this._loadedLanguagesCache || (this._loadedLanguagesCache = [
      .../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])
    ]), this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(e) {
    this._langMap.set(e.name, e), this._langGraph.set(e.name, e);
    const r = e.embeddedLanguages ?? e.embeddedLangs;
    if (r)
      for (const n of r)
        this._langGraph.set(n, this._langMap.get(n));
  }
}
class ko {
  _langs = /* @__PURE__ */ new Map();
  _scopeToLang = /* @__PURE__ */ new Map();
  _injections = /* @__PURE__ */ new Map();
  _onigLib;
  constructor(e, r) {
    this._onigLib = {
      createOnigScanner: (n) => e.createScanner(n),
      createOnigString: (n) => e.createString(n)
    }, r.forEach((n) => this.addLanguage(n));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(e) {
    return this._langs.get(e);
  }
  loadGrammar(e) {
    return this._scopeToLang.get(e);
  }
  addLanguage(e) {
    this._langs.set(e.name, e), e.aliases && e.aliases.forEach((r) => {
      this._langs.set(r, e);
    }), this._scopeToLang.set(e.scopeName, e), e.injectTo && e.injectTo.forEach((r) => {
      this._injections.get(r) || this._injections.set(r, []), this._injections.get(r).push(e.scopeName);
    });
  }
  getInjections(e) {
    const r = e.split(".");
    let n = [];
    for (let s = 1; s <= r.length; s++) {
      const i = r.slice(0, s).join(".");
      n = [...n, ...this._injections.get(i) || []];
    }
    return n;
  }
}
let ye = 0;
function xo(t) {
  ye += 1, t.warnings !== !1 && ye >= 10 && ye % 10 === 0 && console.warn(`[Shiki] ${ye} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let e = !1;
  if (!t.engine)
    throw new ue("`engine` option is required for synchronous mode");
  const r = (t.langs || []).flat(1), n = (t.themes || []).flat(1).map(zt), s = new ko(t.engine, r), i = new So(s, n, r, t.langAlias);
  let o;
  function c(g) {
    return mn(g, t.langAlias);
  }
  function a(g) {
    m();
    const _ = i.getGrammar(typeof g == "string" ? g : g.name);
    if (!_)
      throw new ue(`Language \`${g}\` not found, you may need to load it first`);
    return _;
  }
  function l(g) {
    if (g === "none")
      return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
    m();
    const _ = i.getTheme(g);
    if (!_)
      throw new ue(`Theme \`${g}\` not found, you may need to load it first`);
    return _;
  }
  function u(g) {
    m();
    const _ = l(g);
    o !== g && (i.setTheme(_), o = g);
    const S = i.getColorMap();
    return {
      theme: _,
      colorMap: S
    };
  }
  function p() {
    return m(), i.getLoadedThemes();
  }
  function h() {
    return m(), i.getLoadedLanguages();
  }
  function d(...g) {
    m(), i.loadLanguages(g.flat(1));
  }
  async function f(...g) {
    return d(await dn(g));
  }
  function y(...g) {
    m();
    for (const _ of g.flat(1))
      i.loadTheme(_);
  }
  async function b(...g) {
    return m(), y(await fn(g));
  }
  function m() {
    if (e)
      throw new ue("Shiki instance has been disposed");
  }
  function w() {
    e || (e = !0, i.dispose(), ye -= 1);
  }
  return {
    setTheme: u,
    getTheme: l,
    getLanguage: a,
    getLoadedThemes: p,
    getLoadedLanguages: h,
    resolveLangAlias: c,
    loadLanguage: f,
    loadLanguageSync: d,
    loadTheme: b,
    loadThemeSync: y,
    dispose: w,
    [Symbol.dispose]: w
  };
}
async function Ao(t) {
  t.engine || Co("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  const [
    e,
    r,
    n
  ] = await Promise.all([
    fn(t.themes || []),
    dn(t.langs || []),
    t.engine
  ]);
  return xo({
    ...t,
    themes: e,
    langs: r,
    engine: n
  });
}
async function vo(t) {
  const e = await Ao(t);
  return {
    getLastGrammarState: (...r) => oo(e, ...r),
    codeToTokensBase: (r, n) => Wt(e, r, n),
    codeToTokensWithThemes: (r, n) => hn(e, r, n),
    codeToTokens: (r, n) => qe(e, r, n),
    codeToHast: (r, n) => Xe(e, r, n),
    codeToHtml: (r, n) => wo(e, r, n),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...e,
    getInternalContext: () => e
  };
}
function No(t) {
  const e = t.langs, r = t.themes, n = t.engine;
  async function s(i) {
    function o(p) {
      if (typeof p == "string") {
        if (p = i.langAlias?.[p] || p, an(p))
          return [];
        const h = e[p];
        if (!h)
          throw new x(`Language \`${p}\` is not included in this bundle. You may want to load it from external source.`);
        return h;
      }
      return p;
    }
    function c(p) {
      if (cn(p))
        return "none";
      if (typeof p == "string") {
        const h = r[p];
        if (!h)
          throw new x(`Theme \`${p}\` is not included in this bundle. You may want to load it from external source.`);
        return h;
      }
      return p;
    }
    const a = (i.themes ?? []).map((p) => c(p)), l = (i.langs ?? []).map((p) => o(p)), u = await vo({
      engine: i.engine ?? n(),
      ...i,
      themes: a,
      langs: l
    });
    return {
      ...u,
      loadLanguage(...p) {
        return u.loadLanguage(...p.map(o));
      },
      loadTheme(...p) {
        return u.loadTheme(...p.map(c));
      },
      getBundledLanguages() {
        return e;
      },
      getBundledThemes() {
        return r;
      }
    };
  }
  return s;
}
const gn = [
  {
    id: "abap",
    name: "ABAP",
    import: () => import("./abap-Y8Dl9g_6.js")
  },
  {
    id: "actionscript-3",
    name: "ActionScript",
    import: () => import("./actionscript-3-DQVEcJUW.js")
  },
  {
    id: "ada",
    name: "Ada",
    import: () => import("./ada-vP6ak0IW.js")
  },
  {
    id: "angular-html",
    name: "Angular HTML",
    import: () => import("./angular-html-DPB4Rf0C.js").then((t) => t.f)
  },
  {
    id: "angular-ts",
    name: "Angular TypeScript",
    import: () => import("./angular-ts-CTOR2ofC.js")
  },
  {
    id: "apache",
    name: "Apache Conf",
    import: () => import("./apache-BUjz-sD2.js")
  },
  {
    id: "apex",
    name: "Apex",
    import: () => import("./apex-OyTfjCYK.js")
  },
  {
    id: "apl",
    name: "APL",
    import: () => import("./apl-CjNiDgad.js")
  },
  {
    id: "applescript",
    name: "AppleScript",
    import: () => import("./applescript-BPx7YFFu.js")
  },
  {
    id: "ara",
    name: "Ara",
    import: () => import("./ara-Z2fSOxSw.js")
  },
  {
    id: "asciidoc",
    name: "AsciiDoc",
    aliases: [
      "adoc"
    ],
    import: () => import("./asciidoc-B-pCoB3G.js")
  },
  {
    id: "asm",
    name: "Assembly",
    import: () => import("./asm-BTWLY5ym.js")
  },
  {
    id: "astro",
    name: "Astro",
    import: () => import("./astro-CFFExE8Q.js")
  },
  {
    id: "awk",
    name: "AWK",
    import: () => import("./awk-Fb0P9dkn.js")
  },
  {
    id: "ballerina",
    name: "Ballerina",
    import: () => import("./ballerina-oZK-YekG.js")
  },
  {
    id: "bat",
    name: "Batch File",
    aliases: [
      "batch"
    ],
    import: () => import("./bat-0FvbqU9S.js")
  },
  {
    id: "beancount",
    name: "Beancount",
    import: () => import("./beancount-DqJEb89h.js")
  },
  {
    id: "berry",
    name: "Berry",
    aliases: [
      "be"
    ],
    import: () => import("./berry-DODBq_Ff.js")
  },
  {
    id: "bibtex",
    name: "BibTeX",
    import: () => import("./bibtex-EULQRLY5.js")
  },
  {
    id: "bicep",
    name: "Bicep",
    import: () => import("./bicep-BorU73w0.js")
  },
  {
    id: "blade",
    name: "Blade",
    import: () => import("./blade-D0HyNvCw.js")
  },
  {
    id: "bsl",
    name: "1C (Enterprise)",
    aliases: [
      "1c"
    ],
    import: () => import("./bsl-NkNNwerW.js")
  },
  {
    id: "c",
    name: "C",
    import: () => import("./c-eeMepfLm.js")
  },
  {
    id: "c3",
    name: "C3",
    import: () => import("./c3-Bt581sCe.js")
  },
  {
    id: "cadence",
    name: "Cadence",
    aliases: [
      "cdc"
    ],
    import: () => import("./cadence-02UX7mW8.js")
  },
  {
    id: "cairo",
    name: "Cairo",
    import: () => import("./cairo-DM6WF2e3.js")
  },
  {
    id: "clarity",
    name: "Clarity",
    import: () => import("./clarity-PKm5CwqM.js")
  },
  {
    id: "clojure",
    name: "Clojure",
    aliases: [
      "clj"
    ],
    import: () => import("./clojure-CXJfHrL3.js")
  },
  {
    id: "cmake",
    name: "CMake",
    import: () => import("./cmake-BJz8BOTU.js")
  },
  {
    id: "cobol",
    name: "COBOL",
    import: () => import("./cobol-HihOMwht.js")
  },
  {
    id: "codeowners",
    name: "CODEOWNERS",
    import: () => import("./codeowners-Bt9yU6NX.js")
  },
  {
    id: "codeql",
    name: "CodeQL",
    aliases: [
      "ql"
    ],
    import: () => import("./codeql-DHkodjjI.js")
  },
  {
    id: "coffee",
    name: "CoffeeScript",
    aliases: [
      "coffeescript"
    ],
    import: () => import("./coffee-DGBR_nr_.js")
  },
  {
    id: "common-lisp",
    name: "Common Lisp",
    aliases: [
      "lisp"
    ],
    import: () => import("./common-lisp-EVqT9Zhp.js")
  },
  {
    id: "coq",
    name: "Coq",
    import: () => import("./coq-B0L9upzn.js")
  },
  {
    id: "cpp",
    name: "C++",
    aliases: [
      "c++"
    ],
    import: () => import("./cpp-Cj177cuW.js")
  },
  {
    id: "crystal",
    name: "Crystal",
    import: () => import("./crystal-CRJyc4G-.js")
  },
  {
    id: "csharp",
    name: "C#",
    aliases: [
      "c#",
      "cs"
    ],
    import: () => import("./csharp-CCgA4A09.js")
  },
  {
    id: "css",
    name: "CSS",
    import: () => import("./css-CECN5uSL.js")
  },
  {
    id: "csv",
    name: "CSV",
    import: () => import("./csv-CmYOceLb.js")
  },
  {
    id: "cue",
    name: "CUE",
    import: () => import("./cue-ZzumE7IT.js")
  },
  {
    id: "cypher",
    name: "Cypher",
    aliases: [
      "cql"
    ],
    import: () => import("./cypher-jpdmjtA6.js")
  },
  {
    id: "d",
    name: "D",
    import: () => import("./d-CBagWSwH.js")
  },
  {
    id: "dart",
    name: "Dart",
    import: () => import("./dart-6ObCrKr9.js")
  },
  {
    id: "dax",
    name: "DAX",
    import: () => import("./dax-CcDT-8dH.js")
  },
  {
    id: "desktop",
    name: "Desktop",
    import: () => import("./desktop-B93p9R9O.js")
  },
  {
    id: "diff",
    name: "Diff",
    import: () => import("./diff-BxzP2J8R.js")
  },
  {
    id: "docker",
    name: "Dockerfile",
    aliases: [
      "dockerfile"
    ],
    import: () => import("./docker-CsHqm9tx.js")
  },
  {
    id: "dotenv",
    name: "dotEnv",
    import: () => import("./dotenv-BMjVjUL1.js")
  },
  {
    id: "dream-maker",
    name: "Dream Maker",
    import: () => import("./dream-maker-PAx17jaB.js")
  },
  {
    id: "edge",
    name: "Edge",
    import: () => import("./edge-BYQkOzbF.js")
  },
  {
    id: "elixir",
    name: "Elixir",
    import: () => import("./elixir-Dh036GMp.js")
  },
  {
    id: "elm",
    name: "Elm",
    import: () => import("./elm-BtNbw_Cd.js")
  },
  {
    id: "emacs-lisp",
    name: "Emacs Lisp",
    aliases: [
      "elisp"
    ],
    import: () => import("./emacs-lisp-Cfxdx5D-.js")
  },
  {
    id: "erb",
    name: "ERB",
    import: () => import("./erb-BWGJ5tqi.js")
  },
  {
    id: "erlang",
    name: "Erlang",
    aliases: [
      "erl"
    ],
    import: () => import("./erlang-DNcDT8Hi.js")
  },
  {
    id: "fennel",
    name: "Fennel",
    import: () => import("./fennel-N4WcXuKx.js")
  },
  {
    id: "fish",
    name: "Fish",
    import: () => import("./fish-BTDEUgqH.js")
  },
  {
    id: "fluent",
    name: "Fluent",
    aliases: [
      "ftl"
    ],
    import: () => import("./fluent-BMXUxfv1.js")
  },
  {
    id: "fortran-fixed-form",
    name: "Fortran (Fixed Form)",
    aliases: [
      "f",
      "for",
      "f77"
    ],
    import: () => import("./fortran-fixed-form-B67KFkXH.js")
  },
  {
    id: "fortran-free-form",
    name: "Fortran (Free Form)",
    aliases: [
      "f90",
      "f95",
      "f03",
      "f08",
      "f18"
    ],
    import: () => import("./fortran-free-form-CwqYvCLJ.js")
  },
  {
    id: "fsharp",
    name: "F#",
    aliases: [
      "f#",
      "fs"
    ],
    import: () => import("./fsharp-CYOiIVNx.js")
  },
  {
    id: "gdresource",
    name: "GDResource",
    aliases: [
      "tscn",
      "tres"
    ],
    import: () => import("./gdresource-CvCIUjhi.js")
  },
  {
    id: "gdscript",
    name: "GDScript",
    aliases: [
      "gd"
    ],
    import: () => import("./gdscript-DSAxJ_aS.js")
  },
  {
    id: "gdshader",
    name: "GDShader",
    import: () => import("./gdshader-Bk8fF6yr.js")
  },
  {
    id: "genie",
    name: "Genie",
    import: () => import("./genie-DzUvd7U9.js")
  },
  {
    id: "gherkin",
    name: "Gherkin",
    import: () => import("./gherkin-DHRaV0YP.js")
  },
  {
    id: "git-commit",
    name: "Git Commit Message",
    import: () => import("./git-commit-Bd32YZ0K.js")
  },
  {
    id: "git-rebase",
    name: "Git Rebase Message",
    import: () => import("./git-rebase-ZWUFO_T4.js")
  },
  {
    id: "gleam",
    name: "Gleam",
    import: () => import("./gleam-Bv284lvN.js")
  },
  {
    id: "glimmer-js",
    name: "Glimmer JS",
    aliases: [
      "gjs"
    ],
    import: () => import("./glimmer-js-DkxNrfPT.js")
  },
  {
    id: "glimmer-ts",
    name: "Glimmer TS",
    aliases: [
      "gts"
    ],
    import: () => import("./glimmer-ts-D6YZEmK_.js")
  },
  {
    id: "glsl",
    name: "GLSL",
    import: () => import("./glsl-CkUcVZNK.js")
  },
  {
    id: "gn",
    name: "GN",
    import: () => import("./gn-XtJxiLa4.js")
  },
  {
    id: "gnuplot",
    name: "Gnuplot",
    import: () => import("./gnuplot-yPG9-sE_.js")
  },
  {
    id: "go",
    name: "Go",
    import: () => import("./go-CvFNMTvu.js")
  },
  {
    id: "graphql",
    name: "GraphQL",
    aliases: [
      "gql"
    ],
    import: () => import("./graphql-CBu2ehBn.js")
  },
  {
    id: "groovy",
    name: "Groovy",
    import: () => import("./groovy-CJQTphOW.js")
  },
  {
    id: "hack",
    name: "Hack",
    import: () => import("./hack-ItRNKiEb.js")
  },
  {
    id: "haml",
    name: "Ruby Haml",
    import: () => import("./haml-NZLVzu_R.js")
  },
  {
    id: "handlebars",
    name: "Handlebars",
    aliases: [
      "hbs"
    ],
    import: () => import("./handlebars-mxStpSE7.js")
  },
  {
    id: "haskell",
    name: "Haskell",
    aliases: [
      "hs"
    ],
    import: () => import("./haskell-WeIwNIP6.js")
  },
  {
    id: "haxe",
    name: "Haxe",
    import: () => import("./haxe-TztHsm5T.js")
  },
  {
    id: "hcl",
    name: "HashiCorp HCL",
    import: () => import("./hcl-D438OF-I.js")
  },
  {
    id: "hjson",
    name: "Hjson",
    import: () => import("./hjson-DYBUbqOl.js")
  },
  {
    id: "hlsl",
    name: "HLSL",
    import: () => import("./hlsl-Bk8TCZNL.js")
  },
  {
    id: "html",
    name: "HTML",
    import: () => import("./html-B50bmoVb.js")
  },
  {
    id: "html-derivative",
    name: "HTML (Derivative)",
    import: () => import("./html-derivative-C6bxFbFW.js")
  },
  {
    id: "http",
    name: "HTTP",
    import: () => import("./http-DLvAkeD-.js")
  },
  {
    id: "hurl",
    name: "Hurl",
    import: () => import("./hurl-CgkFN90t.js")
  },
  {
    id: "hxml",
    name: "HXML",
    import: () => import("./hxml-GbqSQCLa.js")
  },
  {
    id: "hy",
    name: "Hy",
    import: () => import("./hy-Brt5EZ7-.js")
  },
  {
    id: "imba",
    name: "Imba",
    import: () => import("./imba-CimUv-Uh.js")
  },
  {
    id: "ini",
    name: "INI",
    aliases: [
      "properties"
    ],
    import: () => import("./ini-BZIuRIvJ.js")
  },
  {
    id: "java",
    name: "Java",
    import: () => import("./java-DY6VlHhP.js")
  },
  {
    id: "javascript",
    name: "JavaScript",
    aliases: [
      "js",
      "cjs",
      "mjs"
    ],
    import: () => import("./javascript-C25yR2R2.js")
  },
  {
    id: "jinja",
    name: "Jinja",
    import: () => import("./jinja-CFW5uAwY.js")
  },
  {
    id: "jison",
    name: "Jison",
    import: () => import("./jison-DdreslRX.js")
  },
  {
    id: "json",
    name: "JSON",
    import: () => import("./json-DxJze_jm.js")
  },
  {
    id: "json5",
    name: "JSON5",
    import: () => import("./json5-BT4Fjg39.js")
  },
  {
    id: "jsonc",
    name: "JSON with Comments",
    import: () => import("./jsonc-CHjZD8gR.js")
  },
  {
    id: "jsonl",
    name: "JSON Lines",
    import: () => import("./jsonl-BGuvDmy9.js")
  },
  {
    id: "jsonnet",
    name: "Jsonnet",
    import: () => import("./jsonnet-Bx2cfsXg.js")
  },
  {
    id: "jssm",
    name: "JSSM",
    aliases: [
      "fsl"
    ],
    import: () => import("./jssm-BcADi6EI.js")
  },
  {
    id: "jsx",
    name: "JSX",
    import: () => import("./jsx-BtKADgXT.js")
  },
  {
    id: "julia",
    name: "Julia",
    aliases: [
      "jl"
    ],
    import: () => import("./julia-CZiKXNNP.js")
  },
  {
    id: "kdl",
    name: "KDL",
    import: () => import("./kdl-BNOv9TC3.js")
  },
  {
    id: "kotlin",
    name: "Kotlin",
    aliases: [
      "kt",
      "kts"
    ],
    import: () => import("./kotlin-ByBMgTeR.js")
  },
  {
    id: "kusto",
    name: "Kusto",
    aliases: [
      "kql"
    ],
    import: () => import("./kusto-DH_XitHS.js")
  },
  {
    id: "latex",
    name: "LaTeX",
    import: () => import("./latex-DugOA5yb.js")
  },
  {
    id: "lean",
    name: "Lean 4",
    aliases: [
      "lean4"
    ],
    import: () => import("./lean-BnVxaZxY.js")
  },
  {
    id: "less",
    name: "Less",
    import: () => import("./less-B1GLI2Di.js")
  },
  {
    id: "liquid",
    name: "Liquid",
    import: () => import("./liquid-CHzkx3jT.js")
  },
  {
    id: "llvm",
    name: "LLVM IR",
    import: () => import("./llvm-co1rIKs3.js")
  },
  {
    id: "log",
    name: "Log file",
    import: () => import("./log-Al8wyEFV.js")
  },
  {
    id: "logo",
    name: "Logo",
    import: () => import("./logo-DBa4JDzV.js")
  },
  {
    id: "lua",
    name: "Lua",
    import: () => import("./lua-Bp3IRv7I.js")
  },
  {
    id: "luau",
    name: "Luau",
    import: () => import("./luau-UQyhudEE.js")
  },
  {
    id: "make",
    name: "Makefile",
    aliases: [
      "makefile"
    ],
    import: () => import("./make-CsMclxtr.js")
  },
  {
    id: "markdown",
    name: "Markdown",
    aliases: [
      "md"
    ],
    import: () => import("./markdown-CrScaQ96.js")
  },
  {
    id: "marko",
    name: "Marko",
    import: () => import("./marko-Ns9BYtDO.js")
  },
  {
    id: "matlab",
    name: "MATLAB",
    import: () => import("./matlab-BOAaUVP0.js")
  },
  {
    id: "mdc",
    name: "MDC",
    import: () => import("./mdc-uaivvctV.js")
  },
  {
    id: "mdx",
    name: "MDX",
    import: () => import("./mdx-BOhZZUJ8.js")
  },
  {
    id: "mermaid",
    name: "Mermaid",
    aliases: [
      "mmd"
    ],
    import: () => import("./mermaid-C3rz4dYh.js")
  },
  {
    id: "mipsasm",
    name: "MIPS Assembly",
    aliases: [
      "mips"
    ],
    import: () => import("./mipsasm-CTx18fBl.js")
  },
  {
    id: "mojo",
    name: "Mojo",
    import: () => import("./mojo-CgKe2b8g.js")
  },
  {
    id: "moonbit",
    name: "MoonBit",
    aliases: [
      "mbt",
      "mbti"
    ],
    import: () => import("./moonbit-NVPuhMCm.js")
  },
  {
    id: "move",
    name: "Move",
    import: () => import("./move-Db4ltDq1.js")
  },
  {
    id: "narrat",
    name: "Narrat Language",
    aliases: [
      "nar"
    ],
    import: () => import("./narrat-DmhDCBs-.js")
  },
  {
    id: "nextflow",
    name: "Nextflow",
    aliases: [
      "nf"
    ],
    import: () => import("./nextflow-DmSVRGjG.js")
  },
  {
    id: "nginx",
    name: "Nginx",
    import: () => import("./nginx-D7O4WoB1.js")
  },
  {
    id: "nim",
    name: "Nim",
    import: () => import("./nim-QAjRdh9w.js")
  },
  {
    id: "nix",
    name: "Nix",
    import: () => import("./nix-fTRXMGic.js")
  },
  {
    id: "nushell",
    name: "nushell",
    aliases: [
      "nu"
    ],
    import: () => import("./nushell-D8j3dhT-.js")
  },
  {
    id: "objective-c",
    name: "Objective-C",
    aliases: [
      "objc"
    ],
    import: () => import("./objective-c-Itk8tzmv.js")
  },
  {
    id: "objective-cpp",
    name: "Objective-C++",
    import: () => import("./objective-cpp-DGt5UKRO.js")
  },
  {
    id: "ocaml",
    name: "OCaml",
    import: () => import("./ocaml-eSVK32Eg.js")
  },
  {
    id: "odin",
    name: "Odin",
    import: () => import("./odin-BItnF517.js")
  },
  {
    id: "openscad",
    name: "OpenSCAD",
    aliases: [
      "scad"
    ],
    import: () => import("./openscad-Sp5uZ6f2.js")
  },
  {
    id: "pascal",
    name: "Pascal",
    import: () => import("./pascal-xy8pJNns.js")
  },
  {
    id: "perl",
    name: "Perl",
    import: () => import("./perl-DkVrgJBg.js")
  },
  {
    id: "php",
    name: "PHP",
    import: () => import("./php-BIzsF_5x.js")
  },
  {
    id: "pkl",
    name: "Pkl",
    import: () => import("./pkl-C-zSNmaA.js")
  },
  {
    id: "plsql",
    name: "PL/SQL",
    import: () => import("./plsql-pVbGZfOv.js")
  },
  {
    id: "po",
    name: "Gettext PO",
    aliases: [
      "pot",
      "potx"
    ],
    import: () => import("./po-BNfHvqmm.js")
  },
  {
    id: "polar",
    name: "Polar",
    import: () => import("./polar-CAZahv3u.js")
  },
  {
    id: "postcss",
    name: "PostCSS",
    import: () => import("./postcss-05aHdL-n.js")
  },
  {
    id: "powerquery",
    name: "PowerQuery",
    import: () => import("./powerquery-DI9HkTvs.js")
  },
  {
    id: "powershell",
    name: "PowerShell",
    aliases: [
      "ps",
      "ps1"
    ],
    import: () => import("./powershell-Clc4ydu-.js")
  },
  {
    id: "prisma",
    name: "Prisma",
    import: () => import("./prisma-FZjmVtSl.js")
  },
  {
    id: "prolog",
    name: "Prolog",
    import: () => import("./prolog-C5-yg4TO.js")
  },
  {
    id: "proto",
    name: "Protocol Buffer 3",
    aliases: [
      "protobuf"
    ],
    import: () => import("./proto-C7QgialS.js")
  },
  {
    id: "pug",
    name: "Pug",
    aliases: [
      "jade"
    ],
    import: () => import("./pug-XOw9Q1Ho.js")
  },
  {
    id: "puppet",
    name: "Puppet",
    import: () => import("./puppet-CUJHmnxV.js")
  },
  {
    id: "purescript",
    name: "PureScript",
    import: () => import("./purescript-rUfGld-4.js")
  },
  {
    id: "python",
    name: "Python",
    aliases: [
      "py"
    ],
    import: () => import("./python-BFNSHbwJ.js")
  },
  {
    id: "qml",
    name: "QML",
    import: () => import("./qml-rTNXsquU.js")
  },
  {
    id: "qmldir",
    name: "QML Directory",
    import: () => import("./qmldir-BInDYbpo.js")
  },
  {
    id: "qss",
    name: "Qt Style Sheets",
    import: () => import("./qss-AeJTysr_.js")
  },
  {
    id: "r",
    name: "R",
    import: () => import("./r-CSmzDPi7.js")
  },
  {
    id: "racket",
    name: "Racket",
    import: () => import("./racket-B83wSAja.js")
  },
  {
    id: "raku",
    name: "Raku",
    aliases: [
      "perl6"
    ],
    import: () => import("./raku-nEQ4ZJJ7.js")
  },
  {
    id: "razor",
    name: "ASP.NET Razor",
    import: () => import("./razor-Ci8D0dQK.js")
  },
  {
    id: "reg",
    name: "Windows Registry Script",
    import: () => import("./reg-m_s_Kiip.js")
  },
  {
    id: "regexp",
    name: "RegExp",
    aliases: [
      "regex"
    ],
    import: () => import("./regexp-BazyLpPg.js")
  },
  {
    id: "rel",
    name: "Rel",
    import: () => import("./rel-BcRfyd6Q.js")
  },
  {
    id: "riscv",
    name: "RISC-V",
    import: () => import("./riscv-Ce8MAQLP.js")
  },
  {
    id: "ron",
    name: "RON",
    import: () => import("./ron-BboLFi1G.js")
  },
  {
    id: "rosmsg",
    name: "ROS Interface",
    import: () => import("./rosmsg-Cz0w1km8.js")
  },
  {
    id: "rst",
    name: "reStructuredText",
    import: () => import("./rst-BJB_3FCk.js")
  },
  {
    id: "ruby",
    name: "Ruby",
    aliases: [
      "rb"
    ],
    import: () => import("./ruby-Chl-GArK.js")
  },
  {
    id: "rust",
    name: "Rust",
    aliases: [
      "rs"
    ],
    import: () => import("./rust-CLzF9zIN.js")
  },
  {
    id: "sas",
    name: "SAS",
    import: () => import("./sas-fpEvgATw.js")
  },
  {
    id: "sass",
    name: "Sass",
    import: () => import("./sass-DxHp5rTx.js")
  },
  {
    id: "scala",
    name: "Scala",
    import: () => import("./scala-D4grkFkl.js")
  },
  {
    id: "scheme",
    name: "Scheme",
    import: () => import("./scheme-BCRWuEm4.js")
  },
  {
    id: "scss",
    name: "SCSS",
    import: () => import("./scss-B1FaCqwR.js")
  },
  {
    id: "sdbl",
    name: "1C (Query)",
    aliases: [
      "1c-query"
    ],
    import: () => import("./sdbl-B7T8abf4.js")
  },
  {
    id: "shaderlab",
    name: "ShaderLab",
    aliases: [
      "shader"
    ],
    import: () => import("./shaderlab-Cr62-Wb4.js")
  },
  {
    id: "shellscript",
    name: "Shell",
    aliases: [
      "bash",
      "sh",
      "shell",
      "zsh"
    ],
    import: () => import("./shellscript-InADTalH.js")
  },
  {
    id: "shellsession",
    name: "Shell Session",
    aliases: [
      "console"
    ],
    import: () => import("./shellsession-DiDJNQdy.js")
  },
  {
    id: "smalltalk",
    name: "Smalltalk",
    import: () => import("./smalltalk-BlI1_OkM.js")
  },
  {
    id: "solidity",
    name: "Solidity",
    import: () => import("./solidity-DUWnFhS6.js")
  },
  {
    id: "soy",
    name: "Closure Templates",
    aliases: [
      "closure-templates"
    ],
    import: () => import("./soy-C1-6njHa.js")
  },
  {
    id: "sparql",
    name: "SPARQL",
    import: () => import("./sparql-B0KWFEri.js")
  },
  {
    id: "splunk",
    name: "Splunk Query Language",
    aliases: [
      "spl"
    ],
    import: () => import("./splunk-CRXR8A9s.js")
  },
  {
    id: "sql",
    name: "SQL",
    import: () => import("./sql-Cn_v3PB0.js")
  },
  {
    id: "ssh-config",
    name: "SSH Config",
    import: () => import("./ssh-config-DP-hNVbF.js")
  },
  {
    id: "stata",
    name: "Stata",
    import: () => import("./stata-B8c5fTjX.js")
  },
  {
    id: "stylus",
    name: "Stylus",
    aliases: [
      "styl"
    ],
    import: () => import("./stylus-CyKEU1Ej.js")
  },
  {
    id: "surrealql",
    name: "SurrealQL",
    aliases: [
      "surql"
    ],
    import: () => import("./surrealql-CQi7GQN7.js")
  },
  {
    id: "svelte",
    name: "Svelte",
    import: () => import("./svelte-CYf4HR3U.js")
  },
  {
    id: "swift",
    name: "Swift",
    import: () => import("./swift-9UzSvamq.js")
  },
  {
    id: "system-verilog",
    name: "SystemVerilog",
    import: () => import("./system-verilog-BCm7smPJ.js")
  },
  {
    id: "systemd",
    name: "Systemd Units",
    import: () => import("./systemd-C-4qm6XH.js")
  },
  {
    id: "talonscript",
    name: "TalonScript",
    aliases: [
      "talon"
    ],
    import: () => import("./talonscript-CFF3LF_O.js")
  },
  {
    id: "tasl",
    name: "Tasl",
    import: () => import("./tasl-Cg_WBUAe.js")
  },
  {
    id: "tcl",
    name: "Tcl",
    import: () => import("./tcl-DN7buRTF.js")
  },
  {
    id: "templ",
    name: "Templ",
    import: () => import("./templ-Crs9Ui8q.js")
  },
  {
    id: "terraform",
    name: "Terraform",
    aliases: [
      "tf",
      "tfvars"
    ],
    import: () => import("./terraform-DGvcn9zM.js")
  },
  {
    id: "tex",
    name: "TeX",
    import: () => import("./tex-BvKThJ8p.js")
  },
  {
    id: "toml",
    name: "TOML",
    import: () => import("./toml-DY62mUL_.js")
  },
  {
    id: "ts-tags",
    name: "TypeScript with Tags",
    aliases: [
      "lit"
    ],
    import: () => import("./ts-tags-ioVe2PKw.js")
  },
  {
    id: "tsv",
    name: "TSV",
    import: () => import("./tsv-BtvSkaG0.js")
  },
  {
    id: "tsx",
    name: "TSX",
    import: () => import("./tsx-B8rCNbgL.js")
  },
  {
    id: "turtle",
    name: "Turtle",
    import: () => import("./turtle-_H59FV7D.js")
  },
  {
    id: "twig",
    name: "Twig",
    import: () => import("./twig-DWdZLOs_.js")
  },
  {
    id: "typescript",
    name: "TypeScript",
    aliases: [
      "ts",
      "cts",
      "mts"
    ],
    import: () => import("./typescript-RycA9KXf.js")
  },
  {
    id: "typespec",
    name: "TypeSpec",
    aliases: [
      "tsp"
    ],
    import: () => import("./typespec-DWqp-kUU.js")
  },
  {
    id: "typst",
    name: "Typst",
    aliases: [
      "typ"
    ],
    import: () => import("./typst-D_1QKWns.js")
  },
  {
    id: "v",
    name: "V",
    import: () => import("./v-BPCNiyYe.js")
  },
  {
    id: "vala",
    name: "Vala",
    import: () => import("./vala-uxaPR7d1.js")
  },
  {
    id: "vb",
    name: "Visual Basic",
    aliases: [
      "cmd"
    ],
    import: () => import("./vb-D8_c5-KN.js")
  },
  {
    id: "verilog",
    name: "Verilog",
    import: () => import("./verilog-B-bybjPF.js")
  },
  {
    id: "vhdl",
    name: "VHDL",
    import: () => import("./vhdl-CUlNa8ac.js")
  },
  {
    id: "viml",
    name: "Vim Script",
    aliases: [
      "vim",
      "vimscript"
    ],
    import: () => import("./viml-DsfA-sWm.js")
  },
  {
    id: "vue",
    name: "Vue",
    import: () => import("./vue-DXEmyXn9.js")
  },
  {
    id: "vue-html",
    name: "Vue HTML",
    import: () => import("./vue-html-j9xNEdu3.js")
  },
  {
    id: "vue-vine",
    name: "Vue Vine",
    import: () => import("./vue-vine-D41-N99t.js")
  },
  {
    id: "vyper",
    name: "Vyper",
    aliases: [
      "vy"
    ],
    import: () => import("./vyper-CPQuu50u.js")
  },
  {
    id: "wasm",
    name: "WebAssembly",
    import: () => import("./wasm-BBXxrAl7.js")
  },
  {
    id: "wenyan",
    name: "Wenyan",
    aliases: [
      "文言"
    ],
    import: () => import("./wenyan-pbVjoM9_.js")
  },
  {
    id: "wgsl",
    name: "WGSL",
    import: () => import("./wgsl-DY4iK1q1.js")
  },
  {
    id: "wikitext",
    name: "Wikitext",
    aliases: [
      "mediawiki",
      "wiki"
    ],
    import: () => import("./wikitext-Z-MoUasO.js")
  },
  {
    id: "wit",
    name: "WebAssembly Interface Types",
    import: () => import("./wit-CQMQOlTg.js")
  },
  {
    id: "wolfram",
    name: "Wolfram",
    aliases: [
      "wl"
    ],
    import: () => import("./wolfram-Dz4KXISs.js")
  },
  {
    id: "xml",
    name: "XML",
    import: () => import("./xml-C2J0sS9M.js")
  },
  {
    id: "xsl",
    name: "XSL",
    import: () => import("./xsl-BmSZphgC.js")
  },
  {
    id: "yaml",
    name: "YAML",
    aliases: [
      "yml"
    ],
    import: () => import("./yaml-DaO7k5B1.js")
  },
  {
    id: "zenscript",
    name: "ZenScript",
    import: () => import("./zenscript-CxBjpf9c.js")
  },
  {
    id: "zig",
    name: "Zig",
    import: () => import("./zig-Vm0PO9wB.js")
  }
], Eo = Object.fromEntries(gn.map((t) => [t.id, t.import])), Io = Object.fromEntries(gn.flatMap((t) => t.aliases?.map((e) => [e, t.import]) || [])), yn = {
  ...Eo,
  ...Io
}, Ro = [
  {
    id: "andromeeda",
    displayName: "Andromeeda",
    type: "dark",
    import: () => import("./andromeeda-BbmzSJq1.js")
  },
  {
    id: "aurora-x",
    displayName: "Aurora X",
    type: "dark",
    import: () => import("./aurora-x-BwoVEUWZ.js")
  },
  {
    id: "ayu-dark",
    displayName: "Ayu Dark",
    type: "dark",
    import: () => import("./ayu-dark-Dsjk_2Jx.js")
  },
  {
    id: "ayu-light",
    displayName: "Ayu Light",
    type: "light",
    import: () => import("./ayu-light-R7pgdmWq.js")
  },
  {
    id: "ayu-mirage",
    displayName: "Ayu Mirage",
    type: "dark",
    import: () => import("./ayu-mirage-DraY-SDX.js")
  },
  {
    id: "catppuccin-frappe",
    displayName: "Catppuccin Frappé",
    type: "dark",
    import: () => import("./catppuccin-frappe-D3cH2rXe.js")
  },
  {
    id: "catppuccin-latte",
    displayName: "Catppuccin Latte",
    type: "light",
    import: () => import("./catppuccin-latte-C0LRGUW4.js")
  },
  {
    id: "catppuccin-macchiato",
    displayName: "Catppuccin Macchiato",
    type: "dark",
    import: () => import("./catppuccin-macchiato-c5wQ11TT.js")
  },
  {
    id: "catppuccin-mocha",
    displayName: "Catppuccin Mocha",
    type: "dark",
    import: () => import("./catppuccin-mocha-WMD6Qvya.js")
  },
  {
    id: "dark-plus",
    displayName: "Dark Plus",
    type: "dark",
    import: () => import("./dark-plus-pUHDTVV0.js")
  },
  {
    id: "dracula",
    displayName: "Dracula Theme",
    type: "dark",
    import: () => import("./dracula-BtZx2Kac.js")
  },
  {
    id: "dracula-soft",
    displayName: "Dracula Theme Soft",
    type: "dark",
    import: () => import("./dracula-soft-BKa-aqBv.js")
  },
  {
    id: "everforest-dark",
    displayName: "Everforest Dark",
    type: "dark",
    import: () => import("./everforest-dark-DMCBqXCK.js")
  },
  {
    id: "everforest-light",
    displayName: "Everforest Light",
    type: "light",
    import: () => import("./everforest-light-BbXl82Em.js")
  },
  {
    id: "github-dark",
    displayName: "GitHub Dark",
    type: "dark",
    import: () => import("./github-dark-DenFmJkN.js")
  },
  {
    id: "github-dark-default",
    displayName: "GitHub Dark Default",
    type: "dark",
    import: () => import("./github-dark-default-BJPUVz4H.js")
  },
  {
    id: "github-dark-dimmed",
    displayName: "GitHub Dark Dimmed",
    type: "dark",
    import: () => import("./github-dark-dimmed-DUshB20C.js")
  },
  {
    id: "github-dark-high-contrast",
    displayName: "GitHub Dark High Contrast",
    type: "dark",
    import: () => import("./github-dark-high-contrast-D3aGCnF8.js")
  },
  {
    id: "github-light",
    displayName: "GitHub Light",
    type: "light",
    import: () => import("./github-light-JYsPkUQd.js")
  },
  {
    id: "github-light-default",
    displayName: "GitHub Light Default",
    type: "light",
    import: () => import("./github-light-default-D99KPAby.js")
  },
  {
    id: "github-light-high-contrast",
    displayName: "GitHub Light High Contrast",
    type: "light",
    import: () => import("./github-light-high-contrast-BbmZE-Mp.js")
  },
  {
    id: "gruvbox-dark-hard",
    displayName: "Gruvbox Dark Hard",
    type: "dark",
    import: () => import("./gruvbox-dark-hard-C5HOtKIh.js")
  },
  {
    id: "gruvbox-dark-medium",
    displayName: "Gruvbox Dark Medium",
    type: "dark",
    import: () => import("./gruvbox-dark-medium-FVgwJHuz.js")
  },
  {
    id: "gruvbox-dark-soft",
    displayName: "Gruvbox Dark Soft",
    type: "dark",
    import: () => import("./gruvbox-dark-soft-B46F314v.js")
  },
  {
    id: "gruvbox-light-hard",
    displayName: "Gruvbox Light Hard",
    type: "light",
    import: () => import("./gruvbox-light-hard-CJD38wDZ.js")
  },
  {
    id: "gruvbox-light-medium",
    displayName: "Gruvbox Light Medium",
    type: "light",
    import: () => import("./gruvbox-light-medium-BlIhMYTA.js")
  },
  {
    id: "gruvbox-light-soft",
    displayName: "Gruvbox Light Soft",
    type: "light",
    import: () => import("./gruvbox-light-soft-DoPHyLVZ.js")
  },
  {
    id: "horizon",
    displayName: "Horizon",
    type: "dark",
    import: () => import("./horizon-CJQ10nlf.js")
  },
  {
    id: "houston",
    displayName: "Houston",
    type: "dark",
    import: () => import("./houston-BDYrDoDW.js")
  },
  {
    id: "kanagawa-dragon",
    displayName: "Kanagawa Dragon",
    type: "dark",
    import: () => import("./kanagawa-dragon-CiKur4Hl.js")
  },
  {
    id: "kanagawa-lotus",
    displayName: "Kanagawa Lotus",
    type: "light",
    import: () => import("./kanagawa-lotus-BKu-smKu.js")
  },
  {
    id: "kanagawa-wave",
    displayName: "Kanagawa Wave",
    type: "dark",
    import: () => import("./kanagawa-wave-CQwozSzG.js")
  },
  {
    id: "laserwave",
    displayName: "LaserWave",
    type: "dark",
    import: () => import("./laserwave-6a00oqik.js")
  },
  {
    id: "light-plus",
    displayName: "Light Plus",
    type: "light",
    import: () => import("./light-plus-CZuVqSLX.js")
  },
  {
    id: "material-theme",
    displayName: "Material Theme",
    type: "dark",
    import: () => import("./material-theme-D6KBX41T.js")
  },
  {
    id: "material-theme-darker",
    displayName: "Material Theme Darker",
    type: "dark",
    import: () => import("./material-theme-darker-CkRroheE.js")
  },
  {
    id: "material-theme-lighter",
    displayName: "Material Theme Lighter",
    type: "light",
    import: () => import("./material-theme-lighter-BUBw43Yz.js")
  },
  {
    id: "material-theme-ocean",
    displayName: "Material Theme Ocean",
    type: "dark",
    import: () => import("./material-theme-ocean-ClGX14Ja.js")
  },
  {
    id: "material-theme-palenight",
    displayName: "Material Theme Palenight",
    type: "dark",
    import: () => import("./material-theme-palenight-C1RVm8K1.js")
  },
  {
    id: "min-dark",
    displayName: "Min Dark",
    type: "dark",
    import: () => import("./min-dark-C7ak0t6c.js")
  },
  {
    id: "min-light",
    displayName: "Min Light",
    type: "light",
    import: () => import("./min-light-CKFxVcPp.js")
  },
  {
    id: "monokai",
    displayName: "Monokai",
    type: "dark",
    import: () => import("./monokai-C1KBYcO0.js")
  },
  {
    id: "night-owl",
    displayName: "Night Owl",
    type: "dark",
    import: () => import("./night-owl-Bm2rzalh.js")
  },
  {
    id: "night-owl-light",
    displayName: "Night Owl Light",
    type: "light",
    import: () => import("./night-owl-light-CBI5u5kw.js")
  },
  {
    id: "nord",
    displayName: "Nord",
    type: "dark",
    import: () => import("./nord-CC5OiUXg.js")
  },
  {
    id: "one-dark-pro",
    displayName: "One Dark Pro",
    type: "dark",
    import: () => import("./one-dark-pro-DTA3VF0_.js")
  },
  {
    id: "one-light",
    displayName: "One Light",
    type: "light",
    import: () => import("./one-light-LkMrt1Cf.js")
  },
  {
    id: "plastic",
    displayName: "Plastic",
    type: "dark",
    import: () => import("./plastic-CSTz3KZp.js")
  },
  {
    id: "poimandres",
    displayName: "Poimandres",
    type: "dark",
    import: () => import("./poimandres-C-VADXHD.js")
  },
  {
    id: "red",
    displayName: "Red",
    type: "dark",
    import: () => import("./red-7y8PH7HH.js")
  },
  {
    id: "rose-pine",
    displayName: "Rosé Pine",
    type: "dark",
    import: () => import("./rose-pine-BKc3yVeu.js")
  },
  {
    id: "rose-pine-dawn",
    displayName: "Rosé Pine Dawn",
    type: "light",
    import: () => import("./rose-pine-dawn-BulJcPZT.js")
  },
  {
    id: "rose-pine-moon",
    displayName: "Rosé Pine Moon",
    type: "dark",
    import: () => import("./rose-pine-moon-j6jiXKV8.js")
  },
  {
    id: "slack-dark",
    displayName: "Slack Dark",
    type: "dark",
    import: () => import("./slack-dark-i7wN4OET.js")
  },
  {
    id: "slack-ochin",
    displayName: "Slack Ochin",
    type: "light",
    import: () => import("./slack-ochin-ndHf0LoP.js")
  },
  {
    id: "snazzy-light",
    displayName: "Snazzy Light",
    type: "light",
    import: () => import("./snazzy-light-BlSJXAu4.js")
  },
  {
    id: "solarized-dark",
    displayName: "Solarized Dark",
    type: "dark",
    import: () => import("./solarized-dark-UTmkh7lw.js")
  },
  {
    id: "solarized-light",
    displayName: "Solarized Light",
    type: "light",
    import: () => import("./solarized-light-BheCkDPT.js")
  },
  {
    id: "synthwave-84",
    displayName: "Synthwave '84",
    type: "dark",
    import: () => import("./synthwave-84-NU3C_KFZ.js")
  },
  {
    id: "tokyo-night",
    displayName: "Tokyo Night",
    type: "dark",
    import: () => import("./tokyo-night-DP4TmcQl.js")
  },
  {
    id: "vesper",
    displayName: "Vesper",
    type: "dark",
    import: () => import("./vesper-BckBta1U.js")
  },
  {
    id: "vitesse-black",
    displayName: "Vitesse Black",
    type: "dark",
    import: () => import("./vitesse-black-BoGvW84i.js")
  },
  {
    id: "vitesse-dark",
    displayName: "Vitesse Dark",
    type: "dark",
    import: () => import("./vitesse-dark-Cym-eLtO.js")
  },
  {
    id: "vitesse-light",
    displayName: "Vitesse Light",
    type: "light",
    import: () => import("./vitesse-light-CcmG315c.js")
  }
], Lo = Object.fromEntries(Ro.map((t) => [t.id, t.import]));
class Vt extends Error {
  constructor(e) {
    super(e), this.name = "ShikiError";
  }
}
function $o() {
  return 2147483648;
}
function To() {
  return typeof performance < "u" ? performance.now() : Date.now();
}
const Po = (t, e) => t + (e - t % e) % e;
async function Mo(t) {
  let e, r;
  const n = {};
  function s(d) {
    r = d, n.HEAPU8 = new Uint8Array(d), n.HEAPU32 = new Uint32Array(d);
  }
  function i(d, f, y) {
    n.HEAPU8.copyWithin(d, f, f + y);
  }
  function o(d) {
    try {
      return e.grow(d - r.byteLength + 65535 >>> 16), s(e.buffer), 1;
    } catch {
    }
  }
  function c(d) {
    const f = n.HEAPU8.length;
    d = d >>> 0;
    const y = $o();
    if (d > y)
      return !1;
    for (let b = 1; b <= 4; b *= 2) {
      let m = f * (1 + 0.2 / b);
      m = Math.min(m, d + 100663296);
      const w = Math.min(y, Po(Math.max(d, m), 65536));
      if (o(w))
        return !0;
    }
    return !1;
  }
  const a = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function l(d, f, y = 1024) {
    const b = f + y;
    let m = f;
    for (; d[m] && !(m >= b); ) ++m;
    if (m - f > 16 && d.buffer && a)
      return a.decode(d.subarray(f, m));
    let w = "";
    for (; f < m; ) {
      let g = d[f++];
      if (!(g & 128)) {
        w += String.fromCharCode(g);
        continue;
      }
      const _ = d[f++] & 63;
      if ((g & 224) === 192) {
        w += String.fromCharCode((g & 31) << 6 | _);
        continue;
      }
      const S = d[f++] & 63;
      if ((g & 240) === 224 ? g = (g & 15) << 12 | _ << 6 | S : g = (g & 7) << 18 | _ << 12 | S << 6 | d[f++] & 63, g < 65536)
        w += String.fromCharCode(g);
      else {
        const E = g - 65536;
        w += String.fromCharCode(55296 | E >> 10, 56320 | E & 1023);
      }
    }
    return w;
  }
  function u(d, f) {
    return d ? l(n.HEAPU8, d, f) : "";
  }
  const p = {
    emscripten_get_now: To,
    emscripten_memcpy_big: i,
    emscripten_resize_heap: c,
    fd_write: () => 0
  };
  async function h() {
    const f = await t({
      env: p,
      wasi_snapshot_preview1: p
    });
    e = f.memory, s(e.buffer), Object.assign(n, f), n.UTF8ToString = u;
  }
  return await h(), n;
}
var Go = Object.defineProperty, Oo = (t, e, r) => e in t ? Go(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, A = (t, e, r) => Oo(t, typeof e != "symbol" ? e + "" : e, r);
let I = null;
function Bo(t) {
  throw new Vt(t.UTF8ToString(t.getLastOnigError()));
}
class Ze {
  constructor(e) {
    A(this, "utf16Length"), A(this, "utf8Length"), A(this, "utf16Value"), A(this, "utf8Value"), A(this, "utf16OffsetToUtf8"), A(this, "utf8OffsetToUtf16");
    const r = e.length, n = Ze._utf8ByteLength(e), s = n !== r, i = s ? new Uint32Array(r + 1) : null;
    s && (i[r] = n);
    const o = s ? new Uint32Array(n + 1) : null;
    s && (o[n] = r);
    const c = new Uint8Array(n);
    let a = 0;
    for (let l = 0; l < r; l++) {
      const u = e.charCodeAt(l);
      let p = u, h = !1;
      if (u >= 55296 && u <= 56319 && l + 1 < r) {
        const d = e.charCodeAt(l + 1);
        d >= 56320 && d <= 57343 && (p = (u - 55296 << 10) + 65536 | d - 56320, h = !0);
      }
      s && (i[l] = a, h && (i[l + 1] = a), p <= 127 ? o[a + 0] = l : p <= 2047 ? (o[a + 0] = l, o[a + 1] = l) : p <= 65535 ? (o[a + 0] = l, o[a + 1] = l, o[a + 2] = l) : (o[a + 0] = l, o[a + 1] = l, o[a + 2] = l, o[a + 3] = l)), p <= 127 ? c[a++] = p : p <= 2047 ? (c[a++] = 192 | (p & 1984) >>> 6, c[a++] = 128 | (p & 63) >>> 0) : p <= 65535 ? (c[a++] = 224 | (p & 61440) >>> 12, c[a++] = 128 | (p & 4032) >>> 6, c[a++] = 128 | (p & 63) >>> 0) : (c[a++] = 240 | (p & 1835008) >>> 18, c[a++] = 128 | (p & 258048) >>> 12, c[a++] = 128 | (p & 4032) >>> 6, c[a++] = 128 | (p & 63) >>> 0), h && l++;
    }
    this.utf16Length = r, this.utf8Length = n, this.utf16Value = e, this.utf8Value = c, this.utf16OffsetToUtf8 = i, this.utf8OffsetToUtf16 = o;
  }
  static _utf8ByteLength(e) {
    let r = 0;
    for (let n = 0, s = e.length; n < s; n++) {
      const i = e.charCodeAt(n);
      let o = i, c = !1;
      if (i >= 55296 && i <= 56319 && n + 1 < s) {
        const a = e.charCodeAt(n + 1);
        a >= 56320 && a <= 57343 && (o = (i - 55296 << 10) + 65536 | a - 56320, c = !0);
      }
      o <= 127 ? r += 1 : o <= 2047 ? r += 2 : o <= 65535 ? r += 3 : r += 4, c && n++;
    }
    return r;
  }
  createString(e) {
    const r = e.omalloc(this.utf8Length);
    return e.HEAPU8.set(this.utf8Value, r), r;
  }
}
const Ye = class D {
  constructor(e) {
    if (A(this, "id", ++D.LAST_ID), A(this, "_onigBinding"), A(this, "content"), A(this, "utf16Length"), A(this, "utf8Length"), A(this, "utf16OffsetToUtf8"), A(this, "utf8OffsetToUtf16"), A(this, "ptr"), !I)
      throw new Vt("Must invoke loadWasm first.");
    this._onigBinding = I, this.content = e;
    const r = new Ze(e);
    this.utf16Length = r.utf16Length, this.utf8Length = r.utf8Length, this.utf16OffsetToUtf8 = r.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = r.utf8OffsetToUtf16, this.utf8Length < 1e4 && !D._sharedPtrInUse ? (D._sharedPtr || (D._sharedPtr = I.omalloc(1e4)), D._sharedPtrInUse = !0, I.HEAPU8.set(r.utf8Value, D._sharedPtr), this.ptr = D._sharedPtr) : this.ptr = r.createString(I);
  }
  convertUtf8OffsetToUtf16(e) {
    return this.utf8OffsetToUtf16 ? e < 0 ? 0 : e > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[e] : e;
  }
  convertUtf16OffsetToUtf8(e) {
    return this.utf16OffsetToUtf8 ? e < 0 ? 0 : e > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[e] : e;
  }
  dispose() {
    this.ptr === D._sharedPtr ? D._sharedPtrInUse = !1 : this._onigBinding.ofree(this.ptr);
  }
};
A(Ye, "LAST_ID", 0);
A(Ye, "_sharedPtr", 0);
A(Ye, "_sharedPtrInUse", !1);
let bn = Ye;
class Fo {
  constructor(e) {
    if (A(this, "_onigBinding"), A(this, "_ptr"), !I)
      throw new Vt("Must invoke loadWasm first.");
    const r = [], n = [];
    for (let c = 0, a = e.length; c < a; c++) {
      const l = new Ze(e[c]);
      r[c] = l.createString(I), n[c] = l.utf8Length;
    }
    const s = I.omalloc(4 * e.length);
    I.HEAPU32.set(r, s / 4);
    const i = I.omalloc(4 * e.length);
    I.HEAPU32.set(n, i / 4);
    const o = I.createOnigScanner(s, i, e.length);
    for (let c = 0, a = e.length; c < a; c++)
      I.ofree(r[c]);
    I.ofree(i), I.ofree(s), o === 0 && Bo(I), this._onigBinding = I, this._ptr = o;
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(e, r, n) {
    let s = 0;
    if (typeof n == "number" && (s = n), typeof e == "string") {
      e = new bn(e);
      const i = this._findNextMatchSync(e, r, !1, s);
      return e.dispose(), i;
    }
    return this._findNextMatchSync(e, r, !1, s);
  }
  _findNextMatchSync(e, r, n, s) {
    const i = this._onigBinding, o = i.findNextOnigScannerMatch(this._ptr, e.id, e.ptr, e.utf8Length, e.convertUtf16OffsetToUtf8(r), s);
    if (o === 0)
      return null;
    const c = i.HEAPU32;
    let a = o / 4;
    const l = c[a++], u = c[a++], p = [];
    for (let h = 0; h < u; h++) {
      const d = e.convertUtf8OffsetToUtf16(c[a++]), f = e.convertUtf8OffsetToUtf16(c[a++]);
      p[h] = {
        start: d,
        end: f,
        length: f - d
      };
    }
    return {
      index: l,
      captureIndices: p
    };
  }
}
function Do(t) {
  return typeof t.instantiator == "function";
}
function jo(t) {
  return typeof t.default == "function";
}
function Uo(t) {
  return typeof t.data < "u";
}
function Wo(t) {
  return typeof Response < "u" && t instanceof Response;
}
function Ho(t) {
  return typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) || typeof Buffer < "u" && Buffer.isBuffer?.(t) || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer || typeof Uint32Array < "u" && t instanceof Uint32Array;
}
let $e;
function zo(t) {
  if ($e)
    return $e;
  async function e() {
    I = await Mo(async (r) => {
      let n = t;
      return n = await n, typeof n == "function" && (n = await n(r)), typeof n == "function" && (n = await n(r)), Do(n) ? n = await n.instantiator(r) : jo(n) ? n = await n.default(r) : (Uo(n) && (n = n.data), Wo(n) ? typeof WebAssembly.instantiateStreaming == "function" ? n = await Vo(n)(r) : n = await qo(n)(r) : Ho(n) ? n = await pt(n)(r) : n instanceof WebAssembly.Module ? n = await pt(n)(r) : "default" in n && n.default instanceof WebAssembly.Module && (n = await pt(n.default)(r))), "instance" in n && (n = n.instance), "exports" in n && (n = n.exports), n;
    });
  }
  return $e = e(), $e;
}
function pt(t) {
  return (e) => WebAssembly.instantiate(t, e);
}
function Vo(t) {
  return (e) => WebAssembly.instantiateStreaming(t, e);
}
function qo(t) {
  return async (e) => {
    const r = await t.arrayBuffer();
    return WebAssembly.instantiate(r, e);
  };
}
async function Xo(t) {
  return t && await zo(t), {
    createScanner(e) {
      return new Fo(e.map((r) => typeof r == "string" ? r : r.source));
    },
    createString(e) {
      return new bn(e);
    }
  };
}
const Qo = /* @__PURE__ */ No({
  langs: yn,
  themes: Lo,
  engine: () => Xo(import("./wasm-DQxwEHae.js"))
});
function fe(t) {
  if ([...t].length !== 1) throw new Error(`Expected "${t}" to be a single code point`);
  return t.codePointAt(0);
}
function Ko(t, e, r) {
  return t.has(e) || t.set(e, r), t.get(e);
}
const qt = /* @__PURE__ */ new Set(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"]), R = String.raw;
function me(t, e) {
  if (t == null) throw new Error(e ?? "Value expected");
  return t;
}
const wn = R`\[\^?`, _n = `c.? | C(?:-.?)?|${R`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${R`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${R`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${R`o\{[^\}]*\}?`}|${R`\d{1,3}`}`, Xt = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/, Te = new RegExp(R`
  \\ (?:
    ${_n}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${Xt.source})+
  | ${wn}
  | .
`.replace(/\s+/g, ""), "gsu"), ht = new RegExp(R`
  \\ (?:
    ${_n}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${wn}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
function Jo(t, e = {}) {
  const r = { flags: "", ...e, rules: { captureGroup: !1, singleline: !1, ...e.rules } };
  if (typeof t != "string") throw new Error("String expected as pattern");
  const n = ga(r.flags), s = [n.extended], i = { captureGroup: r.rules.captureGroup, getCurrentModX() {
    return s.at(-1);
  }, numOpenGroups: 0, popModX() {
    s.pop();
  }, pushModX(p) {
    s.push(p);
  }, replaceCurrentModX(p) {
    s[s.length - 1] = p;
  }, singleline: r.rules.singleline };
  let o = [], c;
  for (Te.lastIndex = 0; c = Te.exec(t); ) {
    const p = Zo(i, t, c[0], Te.lastIndex);
    p.tokens ? o.push(...p.tokens) : p.token && o.push(p.token), p.lastIndex !== void 0 && (Te.lastIndex = p.lastIndex);
  }
  const a = [];
  let l = 0;
  o.filter((p) => p.type === "GroupOpen").forEach((p) => {
    p.kind === "capturing" ? p.number = ++l : p.raw === "(" && a.push(p);
  }), l || a.forEach((p, h) => {
    p.kind = "capturing", p.number = h + 1;
  });
  const u = l || a.length;
  return { tokens: o.map((p) => p.type === "EscapedNumber" ? ba(p, u) : p).flat(), flags: n };
}
function Zo(t, e, r, n) {
  const [s, i] = r;
  if (r === "[" || r === "[^") {
    const o = Yo(e, r, n);
    return { tokens: o.tokens, lastIndex: o.lastIndex };
  }
  if (s === "\\") {
    if ("AbBGyYzZ".includes(i)) return { token: yr(r, r) };
    if (/^\\g[<']/.test(r)) {
      if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(r)) throw new Error(`Invalid group name "${r}"`);
      return { token: la(r) };
    }
    if (/^\\k[<']/.test(r)) {
      if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(r)) throw new Error(`Invalid group name "${r}"`);
      return { token: Sn(r) };
    }
    if (i === "K") return { token: kn("keep", r) };
    if (i === "N" || i === "R") return { token: te("newline", r, { negate: i === "N" }) };
    if (i === "O") return { token: te("any", r) };
    if (i === "X") return { token: te("text_segment", r) };
    const o = Cn(r, { inCharClass: !1 });
    return Array.isArray(o) ? { tokens: o } : { token: o };
  }
  if (s === "(") {
    if (i === "*") return { token: da(r) };
    if (r === "(?{") throw new Error(`Unsupported callout "${r}"`);
    if (r.startsWith("(?#")) {
      if (e[n] !== ")") throw new Error('Unclosed comment group "(?#"');
      return { lastIndex: n + 1 };
    }
    if (/^\(\?[-imx]+[:)]$/.test(r)) return { token: ha(r, t) };
    if (t.pushModX(t.getCurrentModX()), t.numOpenGroups++, r === "(" && !t.captureGroup || r === "(?:") return { token: ae("group", r) };
    if (r === "(?>") return { token: ae("atomic", r) };
    if (r === "(?=" || r === "(?!" || r === "(?<=" || r === "(?<!") return { token: ae(r[2] === "<" ? "lookbehind" : "lookahead", r, { negate: r.endsWith("!") }) };
    if (r === "(" && t.captureGroup || r.startsWith("(?<") && r.endsWith(">") || r.startsWith("(?'") && r.endsWith("'")) return { token: ae("capturing", r, { ...r !== "(" && { name: r.slice(3, -1) } }) };
    if (r.startsWith("(?~")) {
      if (r === "(?~|") throw new Error(`Unsupported absence function kind "${r}"`);
      return { token: ae("absence_repeater", r) };
    }
    throw r === "(?(" ? new Error(`Unsupported conditional "${r}"`) : new Error(`Invalid or unsupported group option "${r}"`);
  }
  if (r === ")") {
    if (t.popModX(), t.numOpenGroups--, t.numOpenGroups < 0) throw new Error('Unmatched ")"');
    return { token: oa(r) };
  }
  if (t.getCurrentModX()) {
    if (r === "#") {
      const o = e.indexOf(`
`, n);
      return { lastIndex: o === -1 ? e.length : o };
    }
    if (/^\s$/.test(r)) {
      const o = /\s+/y;
      return o.lastIndex = n, { lastIndex: o.exec(e) ? o.lastIndex : n };
    }
  }
  if (r === ".") return { token: te("dot", r) };
  if (r === "^" || r === "$") {
    const o = t.singleline ? { "^": R`\A`, $: R`\Z` }[r] : r;
    return { token: yr(o, r) };
  }
  return r === "|" ? { token: ta(r) } : Xt.test(r) ? { tokens: wa(r) } : { token: z(fe(r), r) };
}
function Yo(t, e, r) {
  const n = [br(e[1] === "^", e)];
  let s = 1, i;
  for (ht.lastIndex = r; i = ht.exec(t); ) {
    const o = i[0];
    if (o[0] === "[" && o[1] !== ":") s++, n.push(br(o[1] === "^", o));
    else if (o === "]") {
      if (n.at(-1).type === "CharacterClassOpen") n.push(z(93, o));
      else if (s--, n.push(ra(o)), !s) break;
    } else {
      const c = ea(o);
      Array.isArray(c) ? n.push(...c) : n.push(c);
    }
  }
  return { tokens: n, lastIndex: ht.lastIndex || t.length };
}
function ea(t) {
  if (t[0] === "\\") return Cn(t, { inCharClass: !0 });
  if (t[0] === "[") {
    const e = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(t);
    if (!e || !qt.has(e.groups.name)) throw new Error(`Invalid POSIX class "${t}"`);
    return te("posix", t, { value: e.groups.name, negate: !!e.groups.negate });
  }
  return t === "-" ? na(t) : t === "&&" ? sa(t) : z(fe(t), t);
}
function Cn(t, { inCharClass: e }) {
  const r = t[1];
  if (r === "c" || r === "C") return pa(t);
  if ("dDhHsSwW".includes(r)) return fa(t);
  if (t.startsWith(R`\o{`)) throw new Error(`Incomplete, invalid, or unsupported octal code point "${t}"`);
  if (/^\\[pP]\{/.test(t)) {
    if (t.length === 3) throw new Error(`Incomplete or invalid Unicode property "${t}"`);
    return ma(t);
  }
  if (/^\\x[89A-Fa-f]\p{AHex}/u.test(t)) try {
    const n = t.split(/\\x/).slice(1).map((o) => parseInt(o, 16)), s = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 }).decode(new Uint8Array(n)), i = new TextEncoder();
    return [...s].map((o) => {
      const c = [...i.encode(o)].map((a) => `\\x${a.toString(16)}`).join("");
      return z(fe(o), c);
    });
  } catch {
    throw new Error(`Multibyte code "${t}" incomplete or invalid in Oniguruma`);
  }
  if (r === "u" || r === "x") return z(ya(t), t);
  if (wr.has(r)) return z(wr.get(r), t);
  if (/\d/.test(r)) return ia(e, t);
  if (t === "\\") throw new Error(R`Incomplete escape "\"`);
  if (r === "M") throw new Error(`Unsupported meta "${t}"`);
  if ([...t].length === 2) return z(t.codePointAt(1), t);
  throw new Error(`Unexpected escape "${t}"`);
}
function ta(t) {
  return { type: "Alternator", raw: t };
}
function yr(t, e) {
  return { type: "Assertion", kind: t, raw: e };
}
function Sn(t) {
  return { type: "Backreference", raw: t };
}
function z(t, e) {
  return { type: "Character", value: t, raw: e };
}
function ra(t) {
  return { type: "CharacterClassClose", raw: t };
}
function na(t) {
  return { type: "CharacterClassHyphen", raw: t };
}
function sa(t) {
  return { type: "CharacterClassIntersector", raw: t };
}
function br(t, e) {
  return { type: "CharacterClassOpen", negate: t, raw: e };
}
function te(t, e, r = {}) {
  return { type: "CharacterSet", kind: t, ...r, raw: e };
}
function kn(t, e, r = {}) {
  return t === "keep" ? { type: "Directive", kind: t, raw: e } : { type: "Directive", kind: t, flags: me(r.flags), raw: e };
}
function ia(t, e) {
  return { type: "EscapedNumber", inCharClass: t, raw: e };
}
function oa(t) {
  return { type: "GroupClose", raw: t };
}
function ae(t, e, r = {}) {
  return { type: "GroupOpen", kind: t, ...r, raw: e };
}
function aa(t, e, r, n) {
  return { type: "NamedCallout", kind: t, tag: e, arguments: r, raw: n };
}
function ca(t, e, r, n) {
  return { type: "Quantifier", kind: t, min: e, max: r, raw: n };
}
function la(t) {
  return { type: "Subroutine", raw: t };
}
const ua = /* @__PURE__ */ new Set(["COUNT", "CMP", "ERROR", "FAIL", "MAX", "MISMATCH", "SKIP", "TOTAL_COUNT"]), wr = /* @__PURE__ */ new Map([["a", 7], ["b", 8], ["e", 27], ["f", 12], ["n", 10], ["r", 13], ["t", 9], ["v", 11]]);
function pa(t) {
  const e = t[1] === "c" ? t[2] : t[3];
  if (!e || !/[A-Za-z]/.test(e)) throw new Error(`Unsupported control character "${t}"`);
  return z(fe(e.toUpperCase()) - 64, t);
}
function ha(t, e) {
  let { on: r, off: n } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(t).groups;
  n ??= "";
  const s = (e.getCurrentModX() || r.includes("x")) && !n.includes("x"), i = Cr(r), o = Cr(n), c = {};
  if (i && (c.enable = i), o && (c.disable = o), t.endsWith(")")) return e.replaceCurrentModX(s), kn("flags", t, { flags: c });
  if (t.endsWith(":")) return e.pushModX(s), e.numOpenGroups++, ae("group", t, { ...(i || o) && { flags: c } });
  throw new Error(`Unexpected flag modifier "${t}"`);
}
function da(t) {
  const e = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(t);
  if (!e) throw new Error(`Incomplete or invalid named callout "${t}"`);
  const { name: r, tag: n, args: s } = e.groups;
  if (!r) throw new Error(`Invalid named callout "${t}"`);
  if (n === "") throw new Error(`Named callout tag with empty value not allowed "${t}"`);
  const i = s ? s.split(",").filter((u) => u !== "").map((u) => /^[+-]?\d+$/.test(u) ? +u : u) : [], [o, c, a] = i, l = ua.has(r) ? r.toLowerCase() : "custom";
  switch (l) {
    case "fail":
    case "mismatch":
    case "skip":
      if (i.length > 0) throw new Error(`Named callout arguments not allowed "${i}"`);
      break;
    case "error":
      if (i.length > 1) throw new Error(`Named callout allows only one argument "${i}"`);
      if (typeof o == "string") throw new Error(`Named callout argument must be a number "${o}"`);
      break;
    case "max":
      if (!i.length || i.length > 2) throw new Error(`Named callout must have one or two arguments "${i}"`);
      if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o)) throw new Error(`Named callout argument one must be a tag or number "${o}"`);
      if (i.length === 2 && (typeof c == "number" || !/^[<>X]$/.test(c))) throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${c}"`);
      break;
    case "count":
    case "total_count":
      if (i.length > 1) throw new Error(`Named callout allows only one argument "${i}"`);
      if (i.length === 1 && (typeof o == "number" || !/^[<>X]$/.test(o))) throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${o}"`);
      break;
    case "cmp":
      if (i.length !== 3) throw new Error(`Named callout must have three arguments "${i}"`);
      if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o)) throw new Error(`Named callout argument one must be a tag or number "${o}"`);
      if (typeof c == "number" || !/^(?:[<>!=]=|[<>])$/.test(c)) throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${c}"`);
      if (typeof a == "string" && !/^[A-Za-z_]\w*$/.test(a)) throw new Error(`Named callout argument three must be a tag or number "${a}"`);
      break;
    case "custom":
      throw new Error(`Undefined callout name "${r}"`);
    default:
      throw new Error(`Unexpected named callout kind "${l}"`);
  }
  return aa(l, n ?? null, s?.split(",") ?? null, t);
}
function _r(t) {
  let e = null, r, n;
  if (t[0] === "{") {
    const { minStr: s, maxStr: i } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(t).groups, o = 1e5;
    if (+s > o || i && +i > o) throw new Error("Quantifier value unsupported in Oniguruma");
    if (r = +s, n = i === void 0 ? +s : i === "" ? 1 / 0 : +i, r > n && (e = "possessive", [r, n] = [n, r]), t.endsWith("?")) {
      if (e === "possessive") throw new Error('Unsupported possessive interval quantifier chain with "?"');
      e = "lazy";
    } else e || (e = "greedy");
  } else r = t[0] === "+" ? 1 : 0, n = t[0] === "?" ? 1 : 1 / 0, e = t[1] === "+" ? "possessive" : t[1] === "?" ? "lazy" : "greedy";
  return ca(e, r, n, t);
}
function fa(t) {
  const e = t[1].toLowerCase();
  return te({ d: "digit", h: "hex", s: "space", w: "word" }[e], t, { negate: t[1] !== e });
}
function ma(t) {
  const { p: e, neg: r, value: n } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(t).groups;
  return te("property", t, { value: n, negate: e === "P" && !r || e === "p" && !!r });
}
function Cr(t) {
  const e = {};
  return t.includes("i") && (e.ignoreCase = !0), t.includes("m") && (e.dotAll = !0), t.includes("x") && (e.extended = !0), Object.keys(e).length ? e : null;
}
function ga(t) {
  const e = { ignoreCase: !1, dotAll: !1, extended: !1, digitIsAscii: !1, posixIsAscii: !1, spaceIsAscii: !1, wordIsAscii: !1, textSegmentMode: null };
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (!"imxDPSWy".includes(n)) throw new Error(`Invalid flag "${n}"`);
    if (n === "y") {
      if (!/^y{[gw]}/.test(t.slice(r))) throw new Error('Invalid or unspecified flag "y" mode');
      e.textSegmentMode = t[r + 2] === "g" ? "grapheme" : "word", r += 3;
      continue;
    }
    e[{ i: "ignoreCase", m: "dotAll", x: "extended", D: "digitIsAscii", P: "posixIsAscii", S: "spaceIsAscii", W: "wordIsAscii" }[n]] = !0;
  }
  return e;
}
function ya(t) {
  if (/^(?:\\u(?!\p{AHex}{4})|\\x(?!\p{AHex}{1,2}|\{\p{AHex}{1,8}\}))/u.test(t)) throw new Error(`Incomplete or invalid escape "${t}"`);
  const e = t[2] === "{" ? /^\\x\{\s*(?<hex>\p{AHex}+)/u.exec(t).groups.hex : t.slice(2);
  return parseInt(e, 16);
}
function ba(t, e) {
  const { raw: r, inCharClass: n } = t, s = r.slice(1);
  if (!n && (s !== "0" && s.length === 1 || s[0] !== "0" && +s <= e)) return [Sn(r)];
  const i = [], o = s.match(/^[0-7]+|\d/g);
  for (let c = 0; c < o.length; c++) {
    const a = o[c];
    let l;
    if (c === 0 && a !== "8" && a !== "9") {
      if (l = parseInt(a, 8), l > 127) throw new Error(R`Octal encoded byte above 177 unsupported "${r}"`);
    } else l = fe(a);
    i.push(z(l, (c === 0 ? "\\" : "") + a));
  }
  return i;
}
function wa(t) {
  const e = [], r = new RegExp(Xt, "gy");
  let n;
  for (; n = r.exec(t); ) {
    const s = n[0];
    if (s[0] === "{") {
      const i = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(s);
      if (i) {
        const { min: o, max: c } = i.groups;
        if (+o > +c && s.endsWith("?")) {
          r.lastIndex--, e.push(_r(s.slice(0, -1)));
          continue;
        }
      }
    }
    e.push(_r(s));
  }
  return e;
}
function xn(t, e) {
  if (!Array.isArray(t.body)) throw new Error("Expected node with body array");
  if (t.body.length !== 1) return !1;
  const r = t.body[0];
  return !e || Object.keys(e).every((n) => e[n] === r[n]);
}
function _a(t) {
  return Ca.has(t.type);
}
const Ca = /* @__PURE__ */ new Set(["AbsenceFunction", "Backreference", "CapturingGroup", "Character", "CharacterClass", "CharacterSet", "Group", "Quantifier", "Subroutine"]);
function An(t, e = {}) {
  const r = { flags: "", normalizeUnknownPropertyNames: !1, skipBackrefValidation: !1, skipLookbehindValidation: !1, skipPropertyNameValidation: !1, unicodePropertyMap: null, ...e, rules: { captureGroup: !1, singleline: !1, ...e.rules } }, n = Jo(t, { flags: r.flags, rules: { captureGroup: r.rules.captureGroup, singleline: r.rules.singleline } }), s = (h, d) => {
    const f = n.tokens[i.nextIndex];
    switch (i.parent = h, i.nextIndex++, f.type) {
      case "Alternator":
        return re();
      case "Assertion":
        return Sa(f);
      case "Backreference":
        return ka(f, i);
      case "Character":
        return et(f.value, { useLastValid: !!d.isCheckingRangeEnd });
      case "CharacterClassHyphen":
        return xa(f, i, d);
      case "CharacterClassOpen":
        return Aa(f, i, d);
      case "CharacterSet":
        return va(f, i);
      case "Directive":
        return $a(f.kind, { flags: f.flags });
      case "GroupOpen":
        return Na(f, i, d);
      case "NamedCallout":
        return Pa(f.kind, f.tag, f.arguments);
      case "Quantifier":
        return Ea(f, i);
      case "Subroutine":
        return Ia(f, i);
      default:
        throw new Error(`Unexpected token type "${f.type}"`);
    }
  }, i = { capturingGroups: [], hasNumberedRef: !1, namedGroupsByName: /* @__PURE__ */ new Map(), nextIndex: 0, normalizeUnknownPropertyNames: r.normalizeUnknownPropertyNames, parent: null, skipBackrefValidation: r.skipBackrefValidation, skipLookbehindValidation: r.skipLookbehindValidation, skipPropertyNameValidation: r.skipPropertyNameValidation, subroutines: [], tokens: n.tokens, unicodePropertyMap: r.unicodePropertyMap, walk: s }, o = Ga(Ta(n.flags));
  let c = o.body[0];
  for (; i.nextIndex < n.tokens.length; ) {
    const h = s(c, {});
    h.type === "Alternative" ? (o.body.push(h), c = h) : c.body.push(h);
  }
  const { capturingGroups: a, hasNumberedRef: l, namedGroupsByName: u, subroutines: p } = i;
  if (l && u.size && !r.rules.captureGroup) throw new Error("Numbered backref/subroutine not allowed when using named capture");
  for (const { ref: h } of p) if (typeof h == "number") {
    if (h > a.length) throw new Error("Subroutine uses a group number that's not defined");
    h && (a[h - 1].isSubroutined = !0);
  } else if (u.has(h)) {
    if (u.get(h).length > 1) throw new Error(R`Subroutine uses a duplicate group name "\g<${h}>"`);
    u.get(h)[0].isSubroutined = !0;
  } else throw new Error(R`Subroutine uses a group name that's not defined "\g<${h}>"`);
  return o;
}
function Sa({ kind: t }) {
  return Rt(me({ "^": "line_start", $: "line_end", "\\A": "string_start", "\\b": "word_boundary", "\\B": "word_boundary", "\\G": "search_start", "\\y": "text_segment_boundary", "\\Y": "text_segment_boundary", "\\z": "string_end", "\\Z": "string_end_newline" }[t], `Unexpected assertion kind "${t}"`), { negate: t === R`\B` || t === R`\Y` });
}
function ka({ raw: t }, e) {
  const r = /^\\k[<']/.test(t), n = r ? t.slice(3, -1) : t.slice(1), s = (i, o = !1) => {
    const c = e.capturingGroups.length;
    let a = !1;
    if (i > c) if (e.skipBackrefValidation) a = !0;
    else throw new Error(`Not enough capturing groups defined to the left "${t}"`);
    return e.hasNumberedRef = !0, Lt(o ? c + 1 - i : i, { orphan: a });
  };
  if (r) {
    const i = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(n);
    if (i) return s(+i.groups.num, !!i.groups.sign);
    if (/[-+]/.test(n)) throw new Error(`Invalid backref name "${t}"`);
    if (!e.namedGroupsByName.has(n)) throw new Error(`Group name not defined to the left "${t}"`);
    return Lt(n);
  }
  return s(+n);
}
function xa(t, e, r) {
  const { tokens: n, walk: s } = e, i = e.parent, o = i.body.at(-1), c = n[e.nextIndex];
  if (!r.isCheckingRangeEnd && o && o.type !== "CharacterClass" && o.type !== "CharacterClassRange" && c && c.type !== "CharacterClassOpen" && c.type !== "CharacterClassClose" && c.type !== "CharacterClassIntersector") {
    const a = s(i, { ...r, isCheckingRangeEnd: !0 });
    if (o.type === "Character" && a.type === "Character") return i.body.pop(), La(o, a);
    throw new Error("Invalid character class range");
  }
  return et(fe("-"));
}
function Aa({ negate: t }, e, r) {
  const { tokens: n, walk: s } = e, i = n[e.nextIndex], o = [Be()];
  let c = xr(i);
  for (; c.type !== "CharacterClassClose"; ) {
    if (c.type === "CharacterClassIntersector") o.push(Be()), e.nextIndex++;
    else {
      const l = o.at(-1);
      l.body.push(s(l, r));
    }
    c = xr(n[e.nextIndex], i);
  }
  const a = Be({ negate: t });
  return o.length === 1 ? a.body = o[0].body : (a.kind = "intersection", a.body = o.map((l) => l.body.length === 1 ? l.body[0] : l)), e.nextIndex++, a;
}
function va({ kind: t, negate: e, value: r }, n) {
  const { normalizeUnknownPropertyNames: s, skipPropertyNameValidation: i, unicodePropertyMap: o } = n;
  if (t === "property") {
    const c = tt(r);
    if (qt.has(c) && !o?.has(c)) t = "posix", r = c;
    else return ce(r, { negate: e, normalizeUnknownPropertyNames: s, skipPropertyNameValidation: i, unicodePropertyMap: o });
  }
  return t === "posix" ? Ma(r, { negate: e }) : $t(t, { negate: e });
}
function Na(t, e, r) {
  const { tokens: n, capturingGroups: s, namedGroupsByName: i, skipLookbehindValidation: o, walk: c } = e, a = Oa(t), l = a.type === "AbsenceFunction", u = kr(a), p = u && a.negate;
  if (a.type === "CapturingGroup" && (s.push(a), a.name && Ko(i, a.name, []).push(a)), l && r.isInAbsenceFunction) throw new Error("Nested absence function not supported by Oniguruma");
  let h = Ar(n[e.nextIndex]);
  for (; h.type !== "GroupClose"; ) {
    if (h.type === "Alternator") a.body.push(re()), e.nextIndex++;
    else {
      const d = a.body.at(-1), f = c(d, { ...r, isInAbsenceFunction: r.isInAbsenceFunction || l, isInLookbehind: r.isInLookbehind || u, isInNegLookbehind: r.isInNegLookbehind || p });
      if (d.body.push(f), (u || r.isInLookbehind) && !o) {
        const y = "Lookbehind includes a pattern not allowed by Oniguruma";
        if (p || r.isInNegLookbehind) {
          if (Sr(f) || f.type === "CapturingGroup") throw new Error(y);
        } else if (Sr(f) || kr(f) && f.negate) throw new Error(y);
      }
    }
    h = Ar(n[e.nextIndex]);
  }
  return e.nextIndex++, a;
}
function Ea({ kind: t, min: e, max: r }, n) {
  const s = n.parent, i = s.body.at(-1);
  if (!i || !_a(i)) throw new Error("Quantifier requires a repeatable token");
  const o = Nn(t, e, r, i);
  return s.body.pop(), o;
}
function Ia({ raw: t }, e) {
  const { capturingGroups: r, subroutines: n } = e;
  let s = t.slice(3, -1);
  const i = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(s);
  if (i) {
    const c = +i.groups.num, a = r.length;
    if (e.hasNumberedRef = !0, s = { "": c, "+": a + c, "-": a + 1 - c }[i.groups.sign], s < 1) throw new Error("Invalid subroutine number");
  } else s === "0" && (s = 0);
  const o = En(s);
  return n.push(o), o;
}
function Ra(t, e) {
  return { type: "AbsenceFunction", kind: t, body: Ne(e?.body) };
}
function re(t) {
  return { type: "Alternative", body: In(t?.body) };
}
function Rt(t, e) {
  const r = { type: "Assertion", kind: t };
  return (t === "word_boundary" || t === "text_segment_boundary") && (r.negate = !!e?.negate), r;
}
function Lt(t, e) {
  const r = !!e?.orphan;
  return { type: "Backreference", ref: t, ...r && { orphan: r } };
}
function vn(t, e) {
  const r = { name: void 0, isSubroutined: !1, ...e };
  if (r.name !== void 0 && !Ba(r.name)) throw new Error(`Group name "${r.name}" invalid in Oniguruma`);
  return { type: "CapturingGroup", number: t, ...r.name && { name: r.name }, ...r.isSubroutined && { isSubroutined: r.isSubroutined }, body: Ne(e?.body) };
}
function et(t, e) {
  const r = { useLastValid: !1, ...e };
  if (t > 1114111) {
    const n = t.toString(16);
    if (r.useLastValid) t = 1114111;
    else throw t > 1310719 ? new Error(`Invalid code point out of range "\\x{${n}}"`) : new Error(`Invalid code point out of range in JS "\\x{${n}}"`);
  }
  return { type: "Character", value: t };
}
function Be(t) {
  const e = { kind: "union", negate: !1, ...t };
  return { type: "CharacterClass", kind: e.kind, negate: e.negate, body: In(t?.body) };
}
function La(t, e) {
  if (e.value < t.value) throw new Error("Character class range out of order");
  return { type: "CharacterClassRange", min: t, max: e };
}
function $t(t, e) {
  const r = !!e?.negate, n = { type: "CharacterSet", kind: t };
  return (t === "digit" || t === "hex" || t === "newline" || t === "space" || t === "word") && (n.negate = r), (t === "text_segment" || t === "newline" && !r) && (n.variableLength = !0), n;
}
function $a(t, e = {}) {
  if (t === "keep") return { type: "Directive", kind: t };
  if (t === "flags") return { type: "Directive", kind: t, flags: me(e.flags) };
  throw new Error(`Unexpected directive kind "${t}"`);
}
function Ta(t) {
  return { type: "Flags", ...t };
}
function B(t) {
  const e = t?.atomic, r = t?.flags;
  if (e && r) throw new Error("Atomic group cannot have flags");
  return { type: "Group", ...e && { atomic: e }, ...r && { flags: r }, body: Ne(t?.body) };
}
function Y(t) {
  const e = { behind: !1, negate: !1, ...t };
  return { type: "LookaroundAssertion", kind: e.behind ? "lookbehind" : "lookahead", negate: e.negate, body: Ne(t?.body) };
}
function Pa(t, e, r) {
  return { type: "NamedCallout", kind: t, tag: e, arguments: r };
}
function Ma(t, e) {
  const r = !!e?.negate;
  if (!qt.has(t)) throw new Error(`Invalid POSIX class "${t}"`);
  return { type: "CharacterSet", kind: "posix", value: t, negate: r };
}
function Nn(t, e, r, n) {
  if (e > r) throw new Error("Invalid reversed quantifier range");
  return { type: "Quantifier", kind: t, min: e, max: r, body: n };
}
function Ga(t, e) {
  return { type: "Regex", body: Ne(e?.body), flags: t };
}
function En(t) {
  return { type: "Subroutine", ref: t };
}
function ce(t, e) {
  const r = { negate: !1, normalizeUnknownPropertyNames: !1, skipPropertyNameValidation: !1, unicodePropertyMap: null, ...e };
  let n = r.unicodePropertyMap?.get(tt(t));
  if (!n) {
    if (r.normalizeUnknownPropertyNames) n = Fa(t);
    else if (r.unicodePropertyMap && !r.skipPropertyNameValidation) throw new Error(R`Invalid Unicode property "\p{${t}}"`);
  }
  return { type: "CharacterSet", kind: "property", value: n ?? t, negate: r.negate };
}
function Oa({ flags: t, kind: e, name: r, negate: n, number: s }) {
  switch (e) {
    case "absence_repeater":
      return Ra("repeater");
    case "atomic":
      return B({ atomic: !0 });
    case "capturing":
      return vn(s, { name: r });
    case "group":
      return B({ flags: t });
    case "lookahead":
    case "lookbehind":
      return Y({ behind: e === "lookbehind", negate: n });
    default:
      throw new Error(`Unexpected group kind "${e}"`);
  }
}
function Ne(t) {
  if (t === void 0) t = [re()];
  else if (!Array.isArray(t) || !t.length || !t.every((e) => e.type === "Alternative")) throw new Error("Invalid body; expected array of one or more Alternative nodes");
  return t;
}
function In(t) {
  if (t === void 0) t = [];
  else if (!Array.isArray(t) || !t.every((e) => !!e.type)) throw new Error("Invalid body; expected array of nodes");
  return t;
}
function Sr(t) {
  return t.type === "LookaroundAssertion" && t.kind === "lookahead";
}
function kr(t) {
  return t.type === "LookaroundAssertion" && t.kind === "lookbehind";
}
function Ba(t) {
  return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(t);
}
function Fa(t) {
  return t.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (e) => e[0].toUpperCase() + e.slice(1).toLowerCase());
}
function tt(t) {
  return t.replace(/[- _]+/g, "").toLowerCase();
}
function xr(t, e) {
  return me(t, `${e?.type === "Character" && e.value === 93 ? "Empty" : "Unclosed"} character class`);
}
function Ar(t) {
  return me(t, "Unclosed group");
}
function _e(t, e, r = null) {
  function n(i, o) {
    for (let c = 0; c < i.length; c++) {
      const a = s(i[c], o, c, i);
      c = Math.max(-1, c + a);
    }
  }
  function s(i, o = null, c = null, a = null) {
    let l = 0, u = !1;
    const p = { node: i, parent: o, key: c, container: a, root: t, remove() {
      Pe(a).splice(Math.max(0, se(c) + l), 1), l--, u = !0;
    }, removeAllNextSiblings() {
      return Pe(a).splice(se(c) + 1);
    }, removeAllPrevSiblings() {
      const m = se(c) + l;
      return l -= m, Pe(a).splice(0, Math.max(0, m));
    }, replaceWith(m, w = {}) {
      const g = !!w.traverse;
      a ? a[Math.max(0, se(c) + l)] = m : me(o, "Can't replace root node")[c] = m, g && s(m, o, c, a), u = !0;
    }, replaceWithMultiple(m, w = {}) {
      const g = !!w.traverse;
      if (Pe(a).splice(Math.max(0, se(c) + l), 1, ...m), l += m.length - 1, g) {
        let _ = 0;
        for (let S = 0; S < m.length; S++) _ += s(m[S], o, se(c) + S + _, a);
      }
      u = !0;
    }, skip() {
      u = !0;
    } }, { type: h } = i, d = e["*"], f = e[h], y = typeof d == "function" ? d : d?.enter, b = typeof f == "function" ? f : f?.enter;
    if (y?.(p, r), b?.(p, r), !u) switch (h) {
      case "AbsenceFunction":
      case "CapturingGroup":
      case "Group":
        n(i.body, i);
        break;
      case "Alternative":
      case "CharacterClass":
        n(i.body, i);
        break;
      case "Assertion":
      case "Backreference":
      case "Character":
      case "CharacterSet":
      case "Directive":
      case "Flags":
      case "NamedCallout":
      case "Subroutine":
        break;
      case "CharacterClassRange":
        s(i.min, i, "min"), s(i.max, i, "max");
        break;
      case "LookaroundAssertion":
        n(i.body, i);
        break;
      case "Quantifier":
        s(i.body, i, "body");
        break;
      case "Regex":
        n(i.body, i), s(i.flags, i, "flags");
        break;
      default:
        throw new Error(`Unexpected node type "${h}"`);
    }
    return f?.exit?.(p, r), d?.exit?.(p, r), l;
  }
  return s(t), t;
}
function Pe(t) {
  if (!Array.isArray(t)) throw new Error("Container expected");
  return t;
}
function se(t) {
  if (typeof t != "number") throw new Error("Numeric key expected");
  return t;
}
const Da = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
function ja(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] >= e && t[r]++;
}
function Ua(t, e, r, n) {
  return t.slice(0, e) + n + t.slice(e + r.length);
}
const O = Object.freeze({
  DEFAULT: "DEFAULT",
  CHAR_CLASS: "CHAR_CLASS"
});
function Qt(t, e, r, n) {
  const s = new RegExp(String.raw`${e}|(?<$skip>\[\^?|\\?.)`, "gsu"), i = [!1];
  let o = 0, c = "";
  for (const a of t.matchAll(s)) {
    const { 0: l, groups: { $skip: u } } = a;
    if (!u && (!n || n === O.DEFAULT == !o)) {
      r instanceof Function ? c += r(a, {
        context: o ? O.CHAR_CLASS : O.DEFAULT,
        negated: i[i.length - 1]
      }) : c += r;
      continue;
    }
    l[0] === "[" ? (o++, i.push(l[1] === "^")) : l === "]" && o && (o--, i.pop()), c += l;
  }
  return c;
}
function Rn(t, e, r, n) {
  Qt(t, e, r, n);
}
function Wa(t, e, r = 0, n) {
  if (!new RegExp(e, "su").test(t))
    return null;
  const s = new RegExp(`${e}|(?<$skip>\\\\?.)`, "gsu");
  s.lastIndex = r;
  let i = 0, o;
  for (; o = s.exec(t); ) {
    const { 0: c, groups: { $skip: a } } = o;
    if (!a && (!n || n === O.DEFAULT == !i))
      return o;
    c === "[" ? i++ : c === "]" && i && i--, s.lastIndex == o.index && s.lastIndex++;
  }
  return null;
}
function Me(t, e, r) {
  return !!Wa(t, e, 0, r);
}
function Ha(t, e) {
  const r = /\\?./gsu;
  r.lastIndex = e;
  let n = t.length, s = 0, i = 1, o;
  for (; o = r.exec(t); ) {
    const [c] = o;
    if (c === "[")
      s++;
    else if (s)
      c === "]" && s--;
    else if (c === "(")
      i++;
    else if (c === ")" && (i--, !i)) {
      n = o.index;
      break;
    }
  }
  return t.slice(e, n);
}
const vr = new RegExp(String.raw`(?<noncapturingStart>${Da})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu");
function za(t, e) {
  const r = e?.hiddenCaptures ?? [];
  let n = e?.captureTransfers ?? /* @__PURE__ */ new Map();
  if (!/\(\?>/.test(t))
    return {
      pattern: t,
      captureTransfers: n,
      hiddenCaptures: r
    };
  const s = "(?>", i = "(?:(?=(", o = [0], c = [];
  let a = 0, l = 0, u = NaN, p;
  do {
    p = !1;
    let h = 0, d = 0, f = !1, y;
    for (vr.lastIndex = Number.isNaN(u) ? 0 : u + i.length; y = vr.exec(t); ) {
      const { 0: b, index: m, groups: { capturingStart: w, noncapturingStart: g } } = y;
      if (b === "[")
        h++;
      else if (h)
        b === "]" && h--;
      else if (b === s && !f)
        u = m, f = !0;
      else if (f && g)
        d++;
      else if (w)
        f ? d++ : (a++, o.push(a + l));
      else if (b === ")" && f) {
        if (!d) {
          l++;
          const _ = a + l;
          if (t = `${t.slice(0, u)}${i}${t.slice(u + s.length, m)}))<$$${_}>)${t.slice(m + 1)}`, p = !0, c.push(_), ja(r, _), n.size) {
            const S = /* @__PURE__ */ new Map();
            n.forEach((E, T) => {
              S.set(
                T >= _ ? T + 1 : T,
                E.map((j) => j >= _ ? j + 1 : j)
              );
            }), n = S;
          }
          break;
        }
        d--;
      }
    }
  } while (p);
  return r.push(...c), t = Qt(
    t,
    String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`,
    ({ 0: h, groups: { backrefNum: d, wrappedBackrefNum: f } }) => {
      if (d) {
        const y = +d;
        if (y > o.length - 1)
          throw new Error(`Backref "${h}" greater than number of captures`);
        return `\\${o[y]}`;
      }
      return `\\${f}`;
    },
    O.DEFAULT
  ), {
    pattern: t,
    captureTransfers: n,
    hiddenCaptures: r
  };
}
const Ln = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`, dt = new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${Ln})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");
function Va(t) {
  if (!new RegExp(`${Ln}\\+`).test(t))
    return {
      pattern: t
    };
  const e = [];
  let r = null, n = null, s = "", i = 0, o;
  for (dt.lastIndex = 0; o = dt.exec(t); ) {
    const { 0: c, index: a, groups: { qBase: l, qMod: u, invalidQ: p } } = o;
    if (c === "[")
      i || (n = a), i++;
    else if (c === "]")
      i ? i-- : n = null;
    else if (!i)
      if (u === "+" && s && !s.startsWith("(")) {
        if (p)
          throw new Error(`Invalid quantifier "${c}"`);
        let h = -1;
        if (/^\{\d+\}$/.test(l))
          t = Ua(t, a + l.length, u, "");
        else {
          if (s === ")" || s === "]") {
            const d = s === ")" ? r : n;
            if (d === null)
              throw new Error(`Invalid unmatched "${s}"`);
            t = `${t.slice(0, d)}(?>${t.slice(d, a)}${l})${t.slice(a + c.length)}`;
          } else
            t = `${t.slice(0, a - s.length)}(?>${s}${l})${t.slice(a + c.length)}`;
          h += 4;
        }
        dt.lastIndex += h;
      } else c[0] === "(" ? e.push(a) : c === ")" && (r = e.length ? e.pop() : null);
    s = c;
  }
  return {
    pattern: t
  };
}
const M = String.raw, qa = M`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`, Tt = M`\(\?R=(?<rDepth>[^\)]+)\)|${qa}`, rt = M`\(\?<(?![=!])(?<captureName>[^>]+)>`, $n = M`${rt}|(?<unnamed>\()(?!\?)`, J = new RegExp(M`${rt}|${Tt}|\(\?|\\?.`, "gsu"), ft = "Cannot use multiple overlapping recursions";
function Xa(t, e) {
  const { hiddenCaptures: r, mode: n } = {
    hiddenCaptures: [],
    mode: "plugin",
    ...e
  };
  let s = e?.captureTransfers ?? /* @__PURE__ */ new Map();
  if (!new RegExp(Tt, "su").test(t))
    return {
      pattern: t,
      captureTransfers: s,
      hiddenCaptures: r
    };
  if (n === "plugin" && Me(t, M`\(\?\(DEFINE\)`, O.DEFAULT))
    throw new Error("DEFINE groups cannot be used with recursion");
  const i = [], o = Me(t, M`\\[1-9]`, O.DEFAULT), c = /* @__PURE__ */ new Map(), a = [];
  let l = !1, u = 0, p = 0, h;
  for (J.lastIndex = 0; h = J.exec(t); ) {
    const { 0: d, groups: { captureName: f, rDepth: y, gRNameOrNum: b, gRDepth: m } } = h;
    if (d === "[")
      u++;
    else if (u)
      d === "]" && u--;
    else if (y) {
      if (Nr(y), l)
        throw new Error(ft);
      if (o)
        throw new Error(
          // When used in `external` mode by transpilers other than Regex+, backrefs might have
          // gone through conversion from named to numbered, so avoid a misleading error
          `${n === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`
        );
      const w = t.slice(0, h.index), g = t.slice(J.lastIndex);
      if (Me(g, Tt, O.DEFAULT))
        throw new Error(ft);
      const _ = +y - 1;
      t = Er(
        w,
        g,
        _,
        !1,
        r,
        i,
        p
      ), s = Rr(
        s,
        w,
        _,
        i.length,
        0,
        p
      );
      break;
    } else if (b) {
      Nr(m);
      let w = !1;
      for (const q of a)
        if (q.name === b || q.num === +b) {
          if (w = !0, q.hasRecursedWithin)
            throw new Error(ft);
          break;
        }
      if (!w)
        throw new Error(M`Recursive \g cannot be used outside the referenced group "${n === "external" ? b : M`\g<${b}&R=${m}>`}"`);
      const g = c.get(b), _ = Ha(t, g);
      if (o && Me(_, M`${rt}|\((?!\?)`, O.DEFAULT))
        throw new Error(
          // When used in `external` mode by transpilers other than Regex+, backrefs might have
          // gone through conversion from named to numbered, so avoid a misleading error
          `${n === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`
        );
      const S = t.slice(g, h.index), E = _.slice(S.length + d.length), T = i.length, j = +m - 1, Ee = Er(
        S,
        E,
        j,
        !0,
        r,
        i,
        p
      );
      s = Rr(
        s,
        S,
        j,
        i.length - T,
        T,
        p
      );
      const nt = t.slice(0, g), ge = t.slice(g + _.length);
      t = `${nt}${Ee}${ge}`, J.lastIndex += Ee.length - d.length - S.length - E.length, a.forEach((q) => q.hasRecursedWithin = !0), l = !0;
    } else if (f)
      p++, c.set(String(p), J.lastIndex), c.set(f, J.lastIndex), a.push({
        num: p,
        name: f
      });
    else if (d[0] === "(") {
      const w = d === "(";
      w && (p++, c.set(String(p), J.lastIndex)), a.push(w ? { num: p } : {});
    } else d === ")" && a.pop();
  }
  return r.push(...i), {
    pattern: t,
    captureTransfers: s,
    hiddenCaptures: r
  };
}
function Nr(t) {
  const e = `Max depth must be integer between 2 and 100; used ${t}`;
  if (!/^[1-9]\d*$/.test(t))
    throw new Error(e);
  if (t = +t, t < 2 || t > 100)
    throw new Error(e);
}
function Er(t, e, r, n, s, i, o) {
  const c = /* @__PURE__ */ new Set();
  n && Rn(t + e, rt, ({ groups: { captureName: l } }) => {
    c.add(l);
  }, O.DEFAULT);
  const a = [
    r,
    n ? c : null,
    s,
    i,
    o
  ];
  return `${t}${Ir(`(?:${t}`, "forward", ...a)}(?:)${Ir(`${e})`, "backward", ...a)}${e}`;
}
function Ir(t, e, r, n, s, i, o) {
  const a = (u) => e === "forward" ? u + 2 : r - u + 2 - 1;
  let l = "";
  for (let u = 0; u < r; u++) {
    const p = a(u);
    l += Qt(
      t,
      M`${$n}|\\k<(?<backref>[^>]+)>`,
      ({ 0: h, groups: { captureName: d, unnamed: f, backref: y } }) => {
        if (y && n && !n.has(y))
          return h;
        const b = `_$${p}`;
        if (f || d) {
          const m = o + i.length + 1;
          return i.push(m), Qa(s, m), f ? h : `(?<${d}${b}>`;
        }
        return M`\k<${y}${b}>`;
      },
      O.DEFAULT
    );
  }
  return l;
}
function Qa(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] >= e && t[r]++;
}
function Rr(t, e, r, n, s, i) {
  if (t.size && n) {
    let o = 0;
    Rn(e, $n, () => o++, O.DEFAULT);
    const c = i - o + s, a = /* @__PURE__ */ new Map();
    return t.forEach((l, u) => {
      const p = (n - o * r) / r, h = o * r, d = u > c + o ? u + n : u, f = [];
      for (const y of l)
        if (y <= c)
          f.push(y);
        else if (y > c + o + p)
          f.push(y + n);
        else if (y <= c + o)
          for (let b = 0; b <= r; b++)
            f.push(y + o * b);
        else
          for (let b = 0; b <= r; b++)
            f.push(y + h + p * b);
      a.set(d, f);
    }), a;
  }
  return t;
}
var v = String.fromCodePoint, C = String.raw, V = {
  flagGroups: (() => {
    try {
      new RegExp("(?i:)");
    } catch {
      return !1;
    }
    return !0;
  })(),
  unicodeSets: (() => {
    try {
      new RegExp("[[]]", "v");
    } catch {
      return !1;
    }
    return !0;
  })()
};
V.bugFlagVLiteralHyphenIsRange = V.unicodeSets ? (() => {
  try {
    new RegExp(C`[\d\-a]`, "v");
  } catch {
    return !0;
  }
  return !1;
})() : !1;
V.bugNestedClassIgnoresNegation = V.unicodeSets && new RegExp("[[^a]]", "v").test("a");
function Qe(t, { enable: e, disable: r }) {
  return {
    dotAll: !r?.dotAll && !!(e?.dotAll || t.dotAll),
    ignoreCase: !r?.ignoreCase && !!(e?.ignoreCase || t.ignoreCase)
  };
}
function Ae(t, e, r) {
  return t.has(e) || t.set(e, r), t.get(e);
}
function Pt(t, e) {
  return Lr[t] >= Lr[e];
}
function Ka(t, e) {
  if (t == null)
    throw new Error(e ?? "Value expected");
  return t;
}
var Lr = {
  ES2025: 2025,
  ES2024: 2024,
  ES2018: 2018
}, Ja = (
  /** @type {const} */
  {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
  }
);
function Tn(t = {}) {
  if ({}.toString.call(t) !== "[object Object]")
    throw new Error("Unexpected options");
  if (t.target !== void 0 && !Ja[t.target])
    throw new Error(`Unexpected target "${t.target}"`);
  const e = {
    // Sets the level of emulation rigor/strictness.
    accuracy: "default",
    // Disables advanced emulation that relies on returning a `RegExp` subclass, resulting in
    // certain patterns not being emulatable.
    avoidSubclass: !1,
    // Oniguruma flags; a string with `i`, `m`, `x`, `D`, `S`, `W`, `y{g}` in any order (all
    // optional). Oniguruma's `m` is equivalent to JavaScript's `s` (`dotAll`).
    flags: "",
    // Include JavaScript flag `g` (`global`) in the result.
    global: !1,
    // Include JavaScript flag `d` (`hasIndices`) in the result.
    hasIndices: !1,
    // Delay regex construction until first use if the transpiled pattern is at least this length.
    lazyCompileLength: 1 / 0,
    // JavaScript version used for generated regexes. Using `auto` detects the best value based on
    // your environment. Later targets allow faster processing, simpler generated source, and
    // support for additional features.
    target: "auto",
    // Disables minifications that simplify the pattern without changing the meaning.
    verbose: !1,
    ...t,
    // Advanced options that override standard behavior, error checking, and flags when enabled.
    rules: {
      // Useful with TextMate grammars that merge backreferences across patterns.
      allowOrphanBackrefs: !1,
      // Use ASCII `\b` and `\B`, which increases search performance of generated regexes.
      asciiWordBoundaries: !1,
      // Allow unnamed captures and numbered calls (backreferences and subroutines) when using
      // named capture. This is Oniguruma option `ONIG_OPTION_CAPTURE_GROUP`; on by default in
      // `vscode-oniguruma`.
      captureGroup: !1,
      // Change the recursion depth limit from Oniguruma's `20` to an integer `2`–`20`.
      recursionLimit: 20,
      // `^` as `\A`; `$` as`\Z`. Improves search performance of generated regexes without changing
      // the meaning if searching line by line. This is Oniguruma option `ONIG_OPTION_SINGLELINE`.
      singleline: !1,
      ...t.rules
    }
  };
  return e.target === "auto" && (e.target = V.flagGroups ? "ES2025" : V.unicodeSets ? "ES2024" : "ES2018"), e;
}
var Za = "[	-\r ]", Ya = /* @__PURE__ */ new Set([
  v(304),
  // İ
  v(305)
  // ı
]), W = C`[\p{L}\p{M}\p{N}\p{Pc}]`;
function Pn(t) {
  if (Ya.has(t))
    return [t];
  const e = /* @__PURE__ */ new Set(), r = t.toLowerCase(), n = r.toUpperCase(), s = rc.get(r), i = ec.get(r), o = tc.get(r);
  return [...n].length === 1 && e.add(n), o && e.add(o), s && e.add(s), e.add(r), i && e.add(i), [...e];
}
var Kt = /* @__PURE__ */ new Map(
  `C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map((t) => [tt(t), t])
), ec = /* @__PURE__ */ new Map([
  ["s", v(383)],
  // s, ſ
  [v(383), "s"]
  // ſ, s
]), tc = /* @__PURE__ */ new Map([
  [v(223), v(7838)],
  // ß, ẞ
  [v(107), v(8490)],
  // k, K (Kelvin)
  [v(229), v(8491)],
  // å, Å (Angstrom)
  [v(969), v(8486)]
  // ω, Ω (Ohm)
]), rc = new Map([
  X(453),
  X(456),
  X(459),
  X(498),
  ...mt(8072, 8079),
  ...mt(8088, 8095),
  ...mt(8104, 8111),
  X(8124),
  X(8140),
  X(8188)
]), nc = /* @__PURE__ */ new Map([
  ["alnum", C`[\p{Alpha}\p{Nd}]`],
  ["alpha", C`\p{Alpha}`],
  ["ascii", C`\p{ASCII}`],
  ["blank", C`[\p{Zs}\t]`],
  ["cntrl", C`\p{Cc}`],
  ["digit", C`\p{Nd}`],
  ["graph", C`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`],
  ["lower", C`\p{Lower}`],
  ["print", C`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],
  ["punct", C`[\p{P}\p{S}]`],
  // Updated value from Onig 6.9.9; changed from Unicode `\p{punct}`
  ["space", C`\p{space}`],
  ["upper", C`\p{Upper}`],
  ["word", C`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],
  ["xdigit", C`\p{AHex}`]
]);
function sc(t, e) {
  const r = [];
  for (let n = t; n <= e; n++)
    r.push(n);
  return r;
}
function X(t) {
  const e = v(t);
  return [e.toLowerCase(), e];
}
function mt(t, e) {
  return sc(t, e).map((r) => X(r));
}
var Mn = /* @__PURE__ */ new Set([
  "Lower",
  "Lowercase",
  "Upper",
  "Uppercase",
  "Ll",
  "Lowercase_Letter",
  "Lt",
  "Titlecase_Letter",
  "Lu",
  "Uppercase_Letter"
  // The `Changes_When_*` properties (and their aliases) could be included, but they're very rare.
  // Some other properties include a handful of chars with specific cases only, but these chars are
  // generally extreme edge cases and using such properties case insensitively generally produces
  // undesired behavior anyway
]);
function ic(t, e) {
  const r = {
    // A couple edge cases exist where options `accuracy` and `bestEffortTarget` are used:
    // - `CharacterSet` kind `text_segment` (`\X`): An exact representation would require heavy
    //   Unicode data; a best-effort approximation requires knowing the target.
    // - `CharacterSet` kind `posix` with values `graph` and `print`: Their complex Unicode
    //   representations would be hard to change to ASCII versions after the fact in the generator
    //   based on `target`/`accuracy`, so produce the appropriate structure here.
    accuracy: "default",
    asciiWordBoundaries: !1,
    avoidSubclass: !1,
    bestEffortTarget: "ES2025",
    ...e
  };
  Gn(t);
  const n = {
    accuracy: r.accuracy,
    asciiWordBoundaries: r.asciiWordBoundaries,
    avoidSubclass: r.avoidSubclass,
    flagDirectivesByAlt: /* @__PURE__ */ new Map(),
    jsGroupNameMap: /* @__PURE__ */ new Map(),
    minTargetEs2024: Pt(r.bestEffortTarget, "ES2024"),
    passedLookbehind: !1,
    strategy: null,
    // Subroutines can appear before the groups they ref, so collect reffed nodes for a second pass 
    subroutineRefMap: /* @__PURE__ */ new Map(),
    supportedGNodes: /* @__PURE__ */ new Set(),
    digitIsAscii: t.flags.digitIsAscii,
    spaceIsAscii: t.flags.spaceIsAscii,
    wordIsAscii: t.flags.wordIsAscii
  };
  _e(t, oc, n);
  const s = {
    dotAll: t.flags.dotAll,
    ignoreCase: t.flags.ignoreCase
  }, i = {
    currentFlags: s,
    prevFlags: null,
    globalFlags: s,
    groupOriginByCopy: /* @__PURE__ */ new Map(),
    groupsByName: /* @__PURE__ */ new Map(),
    multiplexCapturesToLeftByRef: /* @__PURE__ */ new Map(),
    openRefs: /* @__PURE__ */ new Map(),
    reffedNodesByReferencer: /* @__PURE__ */ new Map(),
    subroutineRefMap: n.subroutineRefMap
  };
  _e(t, ac, i);
  const o = {
    groupsByName: i.groupsByName,
    highestOrphanBackref: 0,
    numCapturesToLeft: 0,
    reffedNodesByReferencer: i.reffedNodesByReferencer
  };
  return _e(t, cc, o), t._originMap = i.groupOriginByCopy, t._strategy = n.strategy, t;
}
var oc = {
  AbsenceFunction({ node: t, parent: e, replaceWith: r }) {
    const { body: n, kind: s } = t;
    if (s === "repeater") {
      const i = B();
      i.body[0].body.push(
        // Insert own alts as `body`
        Y({ negate: !0, body: n }),
        ce("Any")
      );
      const o = B();
      o.body[0].body.push(
        Nn("greedy", 0, 1 / 0, i)
      ), r(k(o, e), { traverse: !0 });
    } else
      throw new Error('Unsupported absence function "(?~|"');
  },
  Alternative: {
    enter({ node: t, parent: e, key: r }, { flagDirectivesByAlt: n }) {
      const s = t.body.filter((i) => i.kind === "flags");
      for (let i = r + 1; i < e.body.length; i++) {
        const o = e.body[i];
        Ae(n, o, []).push(...s);
      }
    },
    exit({ node: t }, { flagDirectivesByAlt: e }) {
      if (e.get(t)?.length) {
        const r = Bn(e.get(t));
        if (r) {
          const n = B({ flags: r });
          n.body[0].body = t.body, t.body = [k(n, t)];
        }
      }
    }
  },
  Assertion({ node: t, parent: e, key: r, container: n, root: s, remove: i, replaceWith: o }, c) {
    const { kind: a, negate: l } = t, { asciiWordBoundaries: u, avoidSubclass: p, supportedGNodes: h, wordIsAscii: d } = c;
    if (a === "text_segment_boundary")
      throw new Error(`Unsupported text segment boundary "\\${l ? "Y" : "y"}"`);
    if (a === "line_end")
      o(k(Y({ body: [
        re({ body: [Rt("string_end")] }),
        re({ body: [et(10)] })
        // `\n`
      ] }), e));
    else if (a === "line_start")
      o(k(H(C`(?<=\A|\n(?!\z))`, { skipLookbehindValidation: !0 }), e));
    else if (a === "search_start")
      if (h.has(t))
        s.flags.sticky = !0, i();
      else {
        const f = n[r - 1];
        if (f && fc(f))
          o(k(Y({ negate: !0 }), e));
        else {
          if (p)
            throw new Error(C`Uses "\G" in a way that requires a subclass`);
          o(Q(Rt("string_start"), e)), c.strategy = "clip_search";
        }
      }
    else if (!(a === "string_end" || a === "string_start")) if (a === "string_end_newline")
      o(k(H(C`(?=\n?\z)`), e));
    else if (a === "word_boundary") {
      if (!d && !u) {
        const f = `(?:(?<=${W})(?!${W})|(?<!${W})(?=${W}))`, y = `(?:(?<=${W})(?=${W})|(?<!${W})(?!${W}))`;
        o(k(H(l ? y : f), e));
      }
    } else
      throw new Error(`Unexpected assertion kind "${a}"`);
  },
  Backreference({ node: t }, { jsGroupNameMap: e }) {
    let { ref: r } = t;
    typeof r == "string" && !yt(r) && (r = gt(r, e), t.ref = r);
  },
  CapturingGroup({ node: t }, { jsGroupNameMap: e, subroutineRefMap: r }) {
    let { name: n } = t;
    n && !yt(n) && (n = gt(n, e), t.name = n), r.set(t.number, t), n && r.set(n, t);
  },
  CharacterClassRange({ node: t, parent: e, replaceWith: r }) {
    if (e.kind === "intersection") {
      const n = Be({ body: [t] });
      r(k(n, e), { traverse: !0 });
    }
  },
  CharacterSet({ node: t, parent: e, replaceWith: r }, { accuracy: n, minTargetEs2024: s, digitIsAscii: i, spaceIsAscii: o, wordIsAscii: c }) {
    const { kind: a, negate: l, value: u } = t;
    if (i && (a === "digit" || u === "digit")) {
      r(Q($t("digit", { negate: l }), e));
      return;
    }
    if (o && (a === "space" || u === "space")) {
      r(k(bt(H(Za), l), e));
      return;
    }
    if (c && (a === "word" || u === "word")) {
      r(Q($t("word", { negate: l }), e));
      return;
    }
    if (a === "any")
      r(Q(ce("Any"), e));
    else if (a === "digit")
      r(Q(ce("Nd", { negate: l }), e));
    else if (a !== "dot") if (a === "text_segment") {
      if (n === "strict")
        throw new Error(C`Use of "\X" requires non-strict accuracy`);
      const p = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?", h = C`\p{RI}{2}|${p}(?:\u200D${p})*`;
      r(k(H(
        // Close approximation of an extended grapheme cluster; see <unicode.org/reports/tr29/>
        C`(?>\r\n|${s ? C`\p{RGI_Emoji}` : h}|\P{M}\p{M}*)`,
        // Allow JS property `RGI_Emoji` through
        { skipPropertyNameValidation: !0 }
      ), e));
    } else if (a === "hex")
      r(Q(ce("AHex", { negate: l }), e));
    else if (a === "newline")
      r(k(H(l ? `[^
]` : `(?>\r
?|[
\v\f\u2028\u2029])`), e));
    else if (a === "posix")
      if (!s && (u === "graph" || u === "print")) {
        if (n === "strict")
          throw new Error(`POSIX class "${u}" requires min target ES2024 or non-strict accuracy`);
        let p = {
          graph: "!-~",
          print: " -~"
        }[u];
        l && (p = `\0-${v(p.codePointAt(0) - 1)}${v(p.codePointAt(2) + 1)}-􏿿`), r(k(H(`[${p}]`), e));
      } else
        r(k(bt(H(nc.get(u)), l), e));
    else if (a === "property")
      Kt.has(tt(u)) || (t.key = "sc");
    else if (a === "space")
      r(Q(ce("space", { negate: l }), e));
    else if (a === "word")
      r(k(bt(H(W), l), e));
    else
      throw new Error(`Unexpected character set kind "${a}"`);
  },
  Directive({ node: t, parent: e, root: r, remove: n, replaceWith: s, removeAllPrevSiblings: i, removeAllNextSiblings: o }) {
    const { kind: c, flags: a } = t;
    if (c === "flags")
      if (!a.enable && !a.disable)
        n();
      else {
        const l = B({ flags: a });
        l.body[0].body = o(), s(k(l, e), { traverse: !0 });
      }
    else if (c === "keep") {
      const l = r.body[0], p = r.body.length === 1 && // Not emulatable if within a `CapturingGroup`
      xn(l, { type: "Group" }) && l.body[0].body.length === 1 ? l.body[0] : r;
      if (e.parent !== p || p.body.length > 1)
        throw new Error(C`Uses "\K" in a way that's unsupported`);
      const h = Y({ behind: !0 });
      h.body[0].body = i(), s(k(h, e));
    } else
      throw new Error(`Unexpected directive kind "${c}"`);
  },
  Flags({ node: t, parent: e }) {
    if (t.posixIsAscii)
      throw new Error('Unsupported flag "P"');
    if (t.textSegmentMode === "word")
      throw new Error('Unsupported flag "y{w}"');
    [
      "digitIsAscii",
      // Flag D
      "extended",
      // Flag x
      "posixIsAscii",
      // Flag P
      "spaceIsAscii",
      // Flag S
      "wordIsAscii",
      // Flag W
      "textSegmentMode"
      // Flag y{g} or y{w}
    ].forEach((r) => delete t[r]), Object.assign(t, {
      // JS flag g; no Onig equiv
      global: !1,
      // JS flag d; no Onig equiv
      hasIndices: !1,
      // JS flag m; no Onig equiv but its behavior is always on in Onig. Onig's only line break
      // char is line feed, unlike JS, so this flag isn't used since it would produce inaccurate
      // results (also allows `^` and `$` to be used in the generator for string start and end)
      multiline: !1,
      // JS flag y; no Onig equiv, but used for `\G` emulation
      sticky: t.sticky ?? !1
      // Note: Regex+ doesn't allow explicitly adding flags it handles implicitly, so leave out
      // properties `unicode` (JS flag u) and `unicodeSets` (JS flag v). Keep the existing values
      // for `ignoreCase` (flag i) and `dotAll` (JS flag s, but Onig flag m)
    }), e.options = {
      disable: {
        // Onig uses different rules for flag x than Regex+, so disable the implicit flag
        x: !0,
        // Onig has no flag to control "named capture only" mode but contextually applies its
        // behavior when named capturing is used, so disable Regex+'s implicit flag for it
        n: !0
      },
      force: {
        // Always add flag v because we're generating an AST that relies on it (it enables JS
        // support for Onig features nested classes, intersection, Unicode properties, etc.).
        // However, the generator might disable flag v based on its `target` option
        v: !0
      }
    };
  },
  Group({ node: t }) {
    if (!t.flags)
      return;
    const { enable: e, disable: r } = t.flags;
    e?.extended && delete e.extended, r?.extended && delete r.extended, e?.dotAll && r?.dotAll && delete e.dotAll, e?.ignoreCase && r?.ignoreCase && delete e.ignoreCase, e && !Object.keys(e).length && delete t.flags.enable, r && !Object.keys(r).length && delete t.flags.disable, !t.flags.enable && !t.flags.disable && delete t.flags;
  },
  LookaroundAssertion({ node: t }, e) {
    const { kind: r } = t;
    r === "lookbehind" && (e.passedLookbehind = !0);
  },
  NamedCallout({ node: t, parent: e, replaceWith: r }) {
    const { kind: n } = t;
    if (n === "fail")
      r(k(Y({ negate: !0 }), e));
    else
      throw new Error(`Unsupported named callout "(*${n.toUpperCase()}"`);
  },
  Quantifier({ node: t }) {
    if (t.body.type === "Quantifier") {
      const e = B();
      e.body[0].body.push(t.body), t.body = k(e, t);
    }
  },
  Regex: {
    enter({ node: t }, { supportedGNodes: e }) {
      const r = [];
      let n = !1, s = !1;
      for (const i of t.body)
        if (i.body.length === 1 && i.body[0].kind === "search_start")
          i.body.pop();
        else {
          const o = Dn(i.body);
          o ? (n = !0, Array.isArray(o) ? r.push(...o) : r.push(o)) : s = !0;
        }
      n && !s && r.forEach((i) => e.add(i));
    },
    exit(t, { accuracy: e, passedLookbehind: r, strategy: n }) {
      if (e === "strict" && r && n)
        throw new Error(C`Uses "\G" in a way that requires non-strict accuracy`);
    }
  },
  Subroutine({ node: t }, { jsGroupNameMap: e }) {
    let { ref: r } = t;
    typeof r == "string" && !yt(r) && (r = gt(r, e), t.ref = r);
  }
}, ac = {
  Backreference({ node: t }, { multiplexCapturesToLeftByRef: e, reffedNodesByReferencer: r }) {
    const { orphan: n, ref: s } = t;
    n || r.set(t, [...e.get(s).map(({ node: i }) => i)]);
  },
  CapturingGroup: {
    enter({
      node: t,
      parent: e,
      replaceWith: r,
      skip: n
    }, {
      groupOriginByCopy: s,
      groupsByName: i,
      multiplexCapturesToLeftByRef: o,
      openRefs: c,
      reffedNodesByReferencer: a
    }) {
      const l = s.get(t);
      if (l && c.has(t.number)) {
        const p = Q($r(t.number), e);
        a.set(p, c.get(t.number)), r(p);
        return;
      }
      c.set(t.number, t), o.set(t.number, []), t.name && Ae(o, t.name, []);
      const u = o.get(t.name ?? t.number);
      for (let p = 0; p < u.length; p++) {
        const h = u[p];
        if (
          // This group is from subroutine expansion, and there's a multiplex value from either the
          // origin node or a prior subroutine expansion group with the same origin
          l === h.node || l && l === h.origin || // This group is not from subroutine expansion, and it comes after a subroutine expansion
          // group that refers to this group
          t === h.origin
        ) {
          u.splice(p, 1);
          break;
        }
      }
      if (o.get(t.number).push({ node: t, origin: l }), t.name && o.get(t.name).push({ node: t, origin: l }), t.name) {
        const p = Ae(i, t.name, /* @__PURE__ */ new Map());
        let h = !1;
        if (l)
          h = !0;
        else
          for (const d of p.values())
            if (!d.hasDuplicateNameToRemove) {
              h = !0;
              break;
            }
        i.get(t.name).set(t, { node: t, hasDuplicateNameToRemove: h });
      }
    },
    exit({ node: t }, { openRefs: e }) {
      e.delete(t.number);
    }
  },
  Group: {
    enter({ node: t }, e) {
      e.prevFlags = e.currentFlags, t.flags && (e.currentFlags = Qe(e.currentFlags, t.flags));
    },
    exit(t, e) {
      e.currentFlags = e.prevFlags;
    }
  },
  Subroutine({ node: t, parent: e, replaceWith: r }, n) {
    const { isRecursive: s, ref: i } = t;
    if (s) {
      let u = e;
      for (; (u = u.parent) && !(u.type === "CapturingGroup" && (u.name === i || u.number === i)); )
        ;
      n.reffedNodesByReferencer.set(t, u);
      return;
    }
    const o = n.subroutineRefMap.get(i), c = i === 0, a = c ? $r(0) : (
      // The reffed group might itself contain subroutines, which are expanded during sub-traversal
      On(o, n.groupOriginByCopy, null)
    );
    let l = a;
    if (!c) {
      const u = Bn(pc(
        o,
        (h) => h.type === "Group" && !!h.flags
      )), p = u ? Qe(n.globalFlags, u) : n.globalFlags;
      lc(p, n.currentFlags) || (l = B({
        flags: hc(p)
      }), l.body[0].body.push(a));
    }
    r(k(l, e), { traverse: !c });
  }
}, cc = {
  Backreference({ node: t, parent: e, replaceWith: r }, n) {
    if (t.orphan) {
      n.highestOrphanBackref = Math.max(n.highestOrphanBackref, t.ref);
      return;
    }
    const i = n.reffedNodesByReferencer.get(t).filter((o) => uc(o, t));
    if (!i.length)
      r(k(Y({ negate: !0 }), e));
    else if (i.length > 1) {
      const o = B({
        atomic: !0,
        body: i.reverse().map((c) => re({
          body: [Lt(c.number)]
        }))
      });
      r(k(o, e));
    } else
      t.ref = i[0].number;
  },
  CapturingGroup({ node: t }, e) {
    t.number = ++e.numCapturesToLeft, t.name && e.groupsByName.get(t.name).get(t).hasDuplicateNameToRemove && delete t.name;
  },
  Regex: {
    exit({ node: t }, e) {
      const r = Math.max(e.highestOrphanBackref - e.numCapturesToLeft, 0);
      for (let n = 0; n < r; n++) {
        const s = vn();
        t.body.at(-1).body.push(s);
      }
    }
  },
  Subroutine({ node: t }, e) {
    !t.isRecursive || t.ref === 0 || (t.ref = e.reffedNodesByReferencer.get(t).number);
  }
};
function Gn(t) {
  _e(t, {
    "*"({ node: e, parent: r }) {
      e.parent = r;
    }
  });
}
function lc(t, e) {
  return t.dotAll === e.dotAll && t.ignoreCase === e.ignoreCase;
}
function uc(t, e) {
  let r = e;
  do {
    if (r.type === "Regex")
      return !1;
    if (r.type === "Alternative")
      continue;
    if (r === t)
      return !1;
    const n = Fn(r.parent);
    for (const s of n) {
      if (s === r)
        break;
      if (s === t || jn(s, t))
        return !0;
    }
  } while (r = r.parent);
  throw new Error("Unexpected path");
}
function On(t, e, r, n) {
  const s = Array.isArray(t) ? [] : {};
  for (const [i, o] of Object.entries(t))
    i === "parent" ? s.parent = Array.isArray(r) ? n : r : o && typeof o == "object" ? s[i] = On(o, e, s, r) : (i === "type" && o === "CapturingGroup" && e.set(s, e.get(t) ?? t), s[i] = o);
  return s;
}
function $r(t) {
  const e = En(t);
  return e.isRecursive = !0, e;
}
function pc(t, e) {
  const r = [];
  for (; t = t.parent; )
    (!e || e(t)) && r.push(t);
  return r;
}
function gt(t, e) {
  if (e.has(t))
    return e.get(t);
  const r = `$${e.size}_${t.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
  return e.set(t, r), r;
}
function Bn(t) {
  const e = ["dotAll", "ignoreCase"], r = { enable: {}, disable: {} };
  return t.forEach(({ flags: n }) => {
    e.forEach((s) => {
      n.enable?.[s] && (delete r.disable[s], r.enable[s] = !0), n.disable?.[s] && (r.disable[s] = !0);
    });
  }), Object.keys(r.enable).length || delete r.enable, Object.keys(r.disable).length || delete r.disable, r.enable || r.disable ? r : null;
}
function hc({ dotAll: t, ignoreCase: e }) {
  const r = {};
  return (t || e) && (r.enable = {}, t && (r.enable.dotAll = !0), e && (r.enable.ignoreCase = !0)), (!t || !e) && (r.disable = {}, !t && (r.disable.dotAll = !0), !e && (r.disable.ignoreCase = !0)), r;
}
function Fn(t) {
  if (!t)
    throw new Error("Node expected");
  const { body: e } = t;
  return Array.isArray(e) ? e : e ? [e] : null;
}
function Dn(t) {
  const e = t.find((r) => r.kind === "search_start" || mc(r, { negate: !1 }) || !dc(r));
  if (!e)
    return null;
  if (e.kind === "search_start")
    return e;
  if (e.type === "LookaroundAssertion")
    return e.body[0].body[0];
  if (e.type === "CapturingGroup" || e.type === "Group") {
    const r = [];
    for (const n of e.body) {
      const s = Dn(n.body);
      if (!s)
        return null;
      Array.isArray(s) ? r.push(...s) : r.push(s);
    }
    return r;
  }
  return null;
}
function jn(t, e) {
  const r = Fn(t) ?? [];
  for (const n of r)
    if (n === e || jn(n, e))
      return !0;
  return !1;
}
function dc({ type: t }) {
  return t === "Assertion" || t === "Directive" || t === "LookaroundAssertion";
}
function fc(t) {
  const e = [
    "Character",
    "CharacterClass",
    "CharacterSet"
  ];
  return e.includes(t.type) || t.type === "Quantifier" && t.min && e.includes(t.body.type);
}
function mc(t, e) {
  const r = {
    negate: null,
    ...e
  };
  return t.type === "LookaroundAssertion" && (r.negate === null || t.negate === r.negate) && t.body.length === 1 && xn(t.body[0], {
    type: "Assertion",
    kind: "search_start"
  });
}
function yt(t) {
  return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(t);
}
function H(t, e) {
  const n = An(t, {
    ...e,
    // Providing a custom set of Unicode property names avoids converting some JS Unicode
    // properties (ex: `\p{Alpha}`) to Onig POSIX classes
    unicodePropertyMap: Kt
  }).body;
  return n.length > 1 || n[0].body.length > 1 ? B({ body: n }) : n[0].body[0];
}
function bt(t, e) {
  return t.negate = e, t;
}
function Q(t, e) {
  return t.parent = e, t;
}
function k(t, e) {
  return Gn(t), t.parent = e, t;
}
function gc(t, e) {
  const r = Tn(e), n = Pt(r.target, "ES2024"), s = Pt(r.target, "ES2025"), i = r.rules.recursionLimit;
  if (!Number.isInteger(i) || i < 2 || i > 20)
    throw new Error("Invalid recursionLimit; use 2-20");
  let o = null, c = null;
  if (!s) {
    const d = [t.flags.ignoreCase];
    _e(t, yc, {
      getCurrentModI: () => d.at(-1),
      popModI() {
        d.pop();
      },
      pushModI(f) {
        d.push(f);
      },
      setHasCasedChar() {
        d.at(-1) ? o = !0 : c = !0;
      }
    });
  }
  const a = {
    dotAll: t.flags.dotAll,
    // - Turn global flag i on if a case insensitive node was used and no case sensitive nodes were
    //   used (to avoid unnecessary node expansion).
    // - Turn global flag i off if a case sensitive node was used (since case sensitivity can't be
    //   forced without the use of ES2025 flag groups)
    ignoreCase: !!((t.flags.ignoreCase || o) && !c)
  };
  let l = t;
  const u = {
    accuracy: r.accuracy,
    appliedGlobalFlags: a,
    captureMap: /* @__PURE__ */ new Map(),
    currentFlags: {
      dotAll: t.flags.dotAll,
      ignoreCase: t.flags.ignoreCase
    },
    inCharClass: !1,
    lastNode: l,
    originMap: t._originMap,
    recursionLimit: i,
    useAppliedIgnoreCase: !!(!s && o && c),
    useFlagMods: s,
    useFlagV: n,
    verbose: r.verbose
  };
  function p(d) {
    return u.lastNode = l, l = d, Ka(bc[d.type], `Unexpected node type "${d.type}"`)(d, u, p);
  }
  const h = {
    pattern: t.body.map(p).join("|"),
    // Could reset `lastNode` at this point via `lastNode = ast`, but it isn't needed by flags
    flags: p(t.flags),
    options: { ...t.options }
  };
  return n || (delete h.options.force.v, h.options.disable.v = !0, h.options.unicodeSetsPlugin = null), h._captureTransfers = /* @__PURE__ */ new Map(), h._hiddenCaptures = [], u.captureMap.forEach((d, f) => {
    d.hidden && h._hiddenCaptures.push(f), d.transferTo && Ae(h._captureTransfers, d.transferTo, []).push(f);
  }), h;
}
var yc = {
  "*": {
    enter({ node: t }, e) {
      if (Pr(t)) {
        const r = e.getCurrentModI();
        e.pushModI(
          t.flags ? Qe({ ignoreCase: r }, t.flags).ignoreCase : r
        );
      }
    },
    exit({ node: t }, e) {
      Pr(t) && e.popModI();
    }
  },
  Backreference(t, e) {
    e.setHasCasedChar();
  },
  Character({ node: t }, e) {
    Jt(v(t.value)) && e.setHasCasedChar();
  },
  CharacterClassRange({ node: t, skip: e }, r) {
    e(), Un(t, { firstOnly: !0 }).length && r.setHasCasedChar();
  },
  CharacterSet({ node: t }, e) {
    t.kind === "property" && Mn.has(t.value) && e.setHasCasedChar();
  }
}, bc = {
  /**
  @param {AlternativeNode} node
  */
  Alternative({ body: t }, e, r) {
    return t.map(r).join("");
  },
  /**
  @param {AssertionNode} node
  */
  Assertion({ kind: t, negate: e }) {
    if (t === "string_end")
      return "$";
    if (t === "string_start")
      return "^";
    if (t === "word_boundary")
      return e ? C`\B` : C`\b`;
    throw new Error(`Unexpected assertion kind "${t}"`);
  },
  /**
  @param {BackreferenceNode} node
  */
  Backreference({ ref: t }, e) {
    if (typeof t != "number")
      throw new Error("Unexpected named backref in transformed AST");
    if (!e.useFlagMods && e.accuracy === "strict" && e.currentFlags.ignoreCase && !e.captureMap.get(t).ignoreCase)
      throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
    return "\\" + t;
  },
  /**
  @param {CapturingGroupNode} node
  */
  CapturingGroup(t, e, r) {
    const { body: n, name: s, number: i } = t, o = { ignoreCase: e.currentFlags.ignoreCase }, c = e.originMap.get(t);
    return c && (o.hidden = !0, i > c.number && (o.transferTo = c.number)), e.captureMap.set(i, o), `(${s ? `?<${s}>` : ""}${n.map(r).join("|")})`;
  },
  /**
  @param {CharacterNode} node
  */
  Character({ value: t }, e) {
    const r = v(t), n = ie(t, {
      escDigit: e.lastNode.type === "Backreference",
      inCharClass: e.inCharClass,
      useFlagV: e.useFlagV
    });
    if (n !== r)
      return n;
    if (e.useAppliedIgnoreCase && e.currentFlags.ignoreCase && Jt(r)) {
      const s = Pn(r);
      return e.inCharClass ? s.join("") : s.length > 1 ? `[${s.join("")}]` : s[0];
    }
    return r;
  },
  /**
  @param {CharacterClassNode} node
  */
  CharacterClass(t, e, r) {
    const { kind: n, negate: s, parent: i } = t;
    let { body: o } = t;
    if (n === "intersection" && !e.useFlagV)
      throw new Error("Use of character class intersection requires min target ES2024");
    V.bugFlagVLiteralHyphenIsRange && e.useFlagV && o.some(Mr) && (o = [et(45), ...o.filter((l) => !Mr(l))]);
    const c = () => `[${s ? "^" : ""}${o.map(r).join(n === "intersection" ? "&&" : "")}]`;
    if (!e.inCharClass) {
      if (
        // Already established `kind !== 'intersection'` if `!state.useFlagV`; don't check again
        (!e.useFlagV || V.bugNestedClassIgnoresNegation) && !s
      ) {
        const u = o.filter(
          (p) => p.type === "CharacterClass" && p.kind === "union" && p.negate
        );
        if (u.length) {
          const p = B(), h = p.body[0];
          return p.parent = i, h.parent = p, o = o.filter((d) => !u.includes(d)), t.body = o, o.length ? (t.parent = h, h.body.push(t)) : p.body.pop(), u.forEach((d) => {
            const f = re({ body: [d] });
            d.parent = f, f.parent = p, p.body.push(f);
          }), r(p);
        }
      }
      e.inCharClass = !0;
      const l = c();
      return e.inCharClass = !1, l;
    }
    const a = o[0];
    if (
      // Already established that the parent is a char class via `inCharClass`; don't check again
      n === "union" && !s && a && // Allows many nested classes to work with `target` ES2018 which doesn't support nesting
      ((!e.useFlagV || !e.verbose) && i.kind === "union" && !(V.bugFlagVLiteralHyphenIsRange && e.useFlagV) || !e.verbose && i.kind === "intersection" && // JS doesn't allow intersection with union or ranges
      o.length === 1 && a.type !== "CharacterClassRange")
    )
      return o.map(r).join("");
    if (!e.useFlagV && i.type === "CharacterClass")
      throw new Error("Uses nested character class in a way that requires min target ES2024");
    return c();
  },
  /**
  @param {CharacterClassRangeNode} node
  */
  CharacterClassRange(t, e) {
    const r = t.min.value, n = t.max.value, s = {
      escDigit: !1,
      inCharClass: !0,
      useFlagV: e.useFlagV
    }, i = ie(r, s), o = ie(n, s), c = /* @__PURE__ */ new Set();
    if (e.useAppliedIgnoreCase && e.currentFlags.ignoreCase) {
      const a = Un(t);
      kc(a).forEach((u) => {
        c.add(
          Array.isArray(u) ? `${ie(u[0], s)}-${ie(u[1], s)}` : ie(u, s)
        );
      });
    }
    return `${i}-${o}${[...c].join("")}`;
  },
  /**
  @param {CharacterSetNode} node
  */
  CharacterSet({ kind: t, negate: e, value: r, key: n }, s) {
    if (t === "dot")
      return s.currentFlags.dotAll ? s.appliedGlobalFlags.dotAll || s.useFlagMods ? "." : "[^]" : (
        // Onig's only line break char is line feed, unlike JS
        C`[^\n]`
      );
    if (t === "digit")
      return e ? C`\D` : C`\d`;
    if (t === "property") {
      if (s.useAppliedIgnoreCase && s.currentFlags.ignoreCase && Mn.has(r))
        throw new Error(`Unicode property "${r}" can't be case-insensitive when other chars have specific case`);
      return `${e ? C`\P` : C`\p`}{${n ? `${n}=` : ""}${r}}`;
    }
    if (t === "word")
      return e ? C`\W` : C`\w`;
    throw new Error(`Unexpected character set kind "${t}"`);
  },
  /**
  @param {FlagsNode} node
  */
  Flags(t, e) {
    return (
      // The transformer should never turn on the properties for flags d, g, m since Onig doesn't
      // have equivs. Flag m is never used since Onig uses different line break chars than JS
      // (node.hasIndices ? 'd' : '') +
      // (node.global ? 'g' : '') +
      // (node.multiline ? 'm' : '') +
      (e.appliedGlobalFlags.ignoreCase ? "i" : "") + (t.dotAll ? "s" : "") + (t.sticky ? "y" : "")
    );
  },
  /**
  @param {GroupNode} node
  */
  Group({ atomic: t, body: e, flags: r, parent: n }, s, i) {
    const o = s.currentFlags;
    r && (s.currentFlags = Qe(o, r));
    const c = e.map(i).join("|"), a = !s.verbose && e.length === 1 && // Single alt
    n.type !== "Quantifier" && !t && (!s.useFlagMods || !r) ? c : `(?${xc(t, r, s.useFlagMods)}${c})`;
    return s.currentFlags = o, a;
  },
  /**
  @param {LookaroundAssertionNode} node
  */
  LookaroundAssertion({ body: t, kind: e, negate: r }, n, s) {
    return `(?${`${e === "lookahead" ? "" : "<"}${r ? "!" : "="}`}${t.map(s).join("|")})`;
  },
  /**
  @param {QuantifierNode} node
  */
  Quantifier(t, e, r) {
    return r(t.body) + Ac(t);
  },
  /**
  @param {SubroutineNode & {isRecursive: true}} node
  */
  Subroutine({ isRecursive: t, ref: e }, r) {
    if (!t)
      throw new Error("Unexpected non-recursive subroutine in transformed AST");
    const n = r.recursionLimit;
    return e === 0 ? `(?R=${n})` : C`\g<${e}&R=${n}>`;
  }
}, wc = /* @__PURE__ */ new Set([
  "$",
  "(",
  ")",
  "*",
  "+",
  ".",
  "?",
  "[",
  "\\",
  "]",
  "^",
  "{",
  "|",
  "}"
]), _c = /* @__PURE__ */ new Set([
  "-",
  "\\",
  "]",
  "^",
  // Literal `[` doesn't require escaping with flag u, but this can help work around regex source
  // linters and regex syntax processors that expect unescaped `[` to create a nested class
  "["
]), Cc = /* @__PURE__ */ new Set([
  "(",
  ")",
  "-",
  "/",
  "[",
  "\\",
  "]",
  "^",
  "{",
  "|",
  "}",
  // Double punctuators; also includes already-listed `-` and `^`
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  ",",
  ".",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "`",
  "~"
]), Tr = /* @__PURE__ */ new Map([
  [9, C`\t`],
  // horizontal tab
  [10, C`\n`],
  // line feed
  [11, C`\v`],
  // vertical tab
  [12, C`\f`],
  // form feed
  [13, C`\r`],
  // carriage return
  [8232, C`\u2028`],
  // line separator
  [8233, C`\u2029`],
  // paragraph separator
  [65279, C`\uFEFF`]
  // ZWNBSP/BOM
]), Sc = /^\p{Cased}$/u;
function Jt(t) {
  return Sc.test(t);
}
function Un(t, e) {
  const r = !!e?.firstOnly, n = t.min.value, s = t.max.value, i = [];
  if (n < 65 && (s === 65535 || s >= 131071) || n === 65536 && s >= 131071)
    return i;
  for (let o = n; o <= s; o++) {
    const c = v(o);
    if (!Jt(c))
      continue;
    const a = Pn(c).filter((l) => {
      const u = l.codePointAt(0);
      return u < n || u > s;
    });
    if (a.length && (i.push(...a), r))
      break;
  }
  return i;
}
function ie(t, { escDigit: e, inCharClass: r, useFlagV: n }) {
  if (Tr.has(t))
    return Tr.get(t);
  if (
    // Control chars, etc.; condition modeled on the Chrome developer console's display for strings
    t < 32 || t > 126 && t < 160 || // Unicode planes 4-16; unassigned, special purpose, and private use area
    t > 262143 || // Avoid corrupting a preceding backref by immediately following it with a literal digit
    e && vc(t)
  )
    return t > 255 ? `\\u{${t.toString(16).toUpperCase()}}` : `\\x${t.toString(16).toUpperCase().padStart(2, "0")}`;
  const s = r ? n ? Cc : _c : wc, i = v(t);
  return (s.has(i) ? "\\" : "") + i;
}
function kc(t) {
  const e = t.map((s) => s.codePointAt(0)).sort((s, i) => s - i), r = [];
  let n = null;
  for (let s = 0; s < e.length; s++)
    e[s + 1] === e[s] + 1 ? n ??= e[s] : n === null ? r.push(e[s]) : (r.push([n, e[s]]), n = null);
  return r;
}
function xc(t, e, r) {
  if (t)
    return ">";
  let n = "";
  if (e && r) {
    const { enable: s, disable: i } = e;
    n = (s?.ignoreCase ? "i" : "") + (s?.dotAll ? "s" : "") + (i ? "-" : "") + (i?.ignoreCase ? "i" : "") + (i?.dotAll ? "s" : "");
  }
  return `${n}:`;
}
function Ac({ kind: t, max: e, min: r }) {
  let n;
  return !r && e === 1 ? n = "?" : !r && e === 1 / 0 ? n = "*" : r === 1 && e === 1 / 0 ? n = "+" : r === e ? n = `{${r}}` : n = `{${r},${e === 1 / 0 ? "" : e}}`, n + {
    greedy: "",
    lazy: "?",
    possessive: "+"
  }[t];
}
function Pr({ type: t }) {
  return t === "CapturingGroup" || t === "Group" || t === "LookaroundAssertion";
}
function vc(t) {
  return t > 47 && t < 58;
}
function Mr({ type: t, value: e }) {
  return t === "Character" && e === 45;
}
var Nc = class Mt extends RegExp {
  /**
  @type {Map<number, {
    hidden?: true;
    transferTo?: number;
  }>}
  */
  #t = /* @__PURE__ */ new Map();
  /**
  @type {RegExp | EmulatedRegExp | null}
  */
  #e = null;
  /**
  @type {string}
  */
  #n;
  /**
  @type {Map<number, string>?}
  */
  #r = null;
  /**
  @type {string?}
  */
  #s = null;
  /**
  Can be used to serialize the instance.
  @type {EmulatedRegExpOptions}
  */
  rawOptions = {};
  // Override the getter with one that works with lazy-compiled regexes
  get source() {
    return this.#n || "(?:)";
  }
  /**
  @overload
  @param {string} pattern
  @param {string} [flags]
  @param {EmulatedRegExpOptions} [options]
  */
  /**
  @overload
  @param {EmulatedRegExp} pattern
  @param {string} [flags]
  */
  constructor(e, r, n) {
    const s = !!n?.lazyCompile;
    if (e instanceof RegExp) {
      if (n)
        throw new Error("Cannot provide options when copying a regexp");
      const i = e;
      super(i, r), this.#n = i.source, i instanceof Mt && (this.#t = i.#t, this.#r = i.#r, this.#s = i.#s, this.rawOptions = i.rawOptions);
    } else {
      const i = {
        hiddenCaptures: [],
        strategy: null,
        transfers: [],
        ...n
      };
      super(s ? "" : e, r), this.#n = e, this.#t = Ic(i.hiddenCaptures, i.transfers), this.#s = i.strategy, this.rawOptions = n ?? {};
    }
    s || (this.#e = this);
  }
  /**
  Called internally by all String/RegExp methods that use regexes.
  @override
  @param {string} str
  @returns {RegExpExecArray?}
  */
  exec(e) {
    if (!this.#e) {
      const { lazyCompile: s, ...i } = this.rawOptions;
      this.#e = new Mt(this.#n, this.flags, i);
    }
    const r = this.global || this.sticky, n = this.lastIndex;
    if (this.#s === "clip_search" && r && n) {
      this.lastIndex = 0;
      const s = this.#i(e.slice(n));
      return s && (Ec(s, n, e, this.hasIndices), this.lastIndex += n), s;
    }
    return this.#i(e);
  }
  /**
  Adds support for hidden and transfer captures.
  @param {string} str
  @returns
  */
  #i(e) {
    this.#e.lastIndex = this.lastIndex;
    const r = super.exec.call(this.#e, e);
    if (this.lastIndex = this.#e.lastIndex, !r || !this.#t.size)
      return r;
    const n = [...r];
    r.length = 1;
    let s;
    this.hasIndices && (s = [...r.indices], r.indices.length = 1);
    const i = [0];
    for (let o = 1; o < n.length; o++) {
      const { hidden: c, transferTo: a } = this.#t.get(o) ?? {};
      if (c ? i.push(null) : (i.push(r.length), r.push(n[o]), this.hasIndices && r.indices.push(s[o])), a && n[o] !== void 0) {
        const l = i[a];
        if (!l)
          throw new Error(`Invalid capture transfer to "${l}"`);
        if (r[l] = n[o], this.hasIndices && (r.indices[l] = s[o]), r.groups) {
          this.#r || (this.#r = Rc(this.source));
          const u = this.#r.get(a);
          u && (r.groups[u] = n[o], this.hasIndices && (r.indices.groups[u] = s[o]));
        }
      }
    }
    return r;
  }
};
function Ec(t, e, r, n) {
  if (t.index += e, t.input = r, n) {
    const s = t.indices;
    for (let o = 0; o < s.length; o++) {
      const c = s[o];
      c && (s[o] = [c[0] + e, c[1] + e]);
    }
    const i = s.groups;
    i && Object.keys(i).forEach((o) => {
      const c = i[o];
      c && (i[o] = [c[0] + e, c[1] + e]);
    });
  }
}
function Ic(t, e) {
  const r = /* @__PURE__ */ new Map();
  for (const n of t)
    r.set(n, {
      hidden: !0
    });
  for (const [n, s] of e)
    for (const i of s)
      Ae(r, i, {}).transferTo = n;
  return r;
}
function Rc(t) {
  const e = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu, r = /* @__PURE__ */ new Map();
  let n = 0, s = 0, i;
  for (; i = e.exec(t); ) {
    const { 0: o, groups: { capture: c, name: a } } = i;
    o === "[" ? n++ : n ? o === "]" && n-- : c && (s++, a && r.set(s, a));
  }
  return r;
}
function Lc(t, e) {
  const r = $c(t, e);
  return r.options ? new Nc(r.pattern, r.flags, r.options) : new RegExp(r.pattern, r.flags);
}
function $c(t, e) {
  const r = Tn(e), n = An(t, {
    flags: r.flags,
    normalizeUnknownPropertyNames: !0,
    rules: {
      captureGroup: r.rules.captureGroup,
      singleline: r.rules.singleline
    },
    skipBackrefValidation: r.rules.allowOrphanBackrefs,
    unicodePropertyMap: Kt
  }), s = ic(n, {
    accuracy: r.accuracy,
    asciiWordBoundaries: r.rules.asciiWordBoundaries,
    avoidSubclass: r.avoidSubclass,
    bestEffortTarget: r.target
  }), i = gc(s, r), o = Xa(i.pattern, {
    captureTransfers: i._captureTransfers,
    hiddenCaptures: i._hiddenCaptures,
    mode: "external"
  }), c = Va(o.pattern), a = za(c.pattern, {
    captureTransfers: o.captureTransfers,
    hiddenCaptures: o.hiddenCaptures
  }), l = {
    pattern: a.pattern,
    flags: `${r.hasIndices ? "d" : ""}${r.global ? "g" : ""}${i.flags}${i.options.disable.v ? "u" : "v"}`
  };
  if (r.avoidSubclass) {
    if (r.lazyCompileLength !== 1 / 0)
      throw new Error("Lazy compilation requires subclass");
  } else {
    const u = a.hiddenCaptures.sort((f, y) => f - y), p = Array.from(a.captureTransfers), h = s._strategy, d = l.pattern.length >= r.lazyCompileLength;
    (u.length || p.length || h || d) && (l.options = {
      ...u.length && { hiddenCaptures: u },
      ...p.length && { transfers: p },
      ...h && { strategy: h },
      ...d && { lazyCompile: d }
    });
  }
  return l;
}
const Gr = 4294967295;
class Tc {
  constructor(e, r = {}) {
    this.patterns = e, this.options = r;
    const {
      forgiving: n = !1,
      cache: s,
      regexConstructor: i
    } = r;
    if (!i)
      throw new Error("Option `regexConstructor` is not provided");
    this.regexps = e.map((o) => {
      if (typeof o != "string")
        return o;
      const c = s?.get(o);
      if (c) {
        if (c instanceof RegExp)
          return c;
        if (n)
          return null;
        throw c;
      }
      try {
        const a = i(o);
        return s?.set(o, a), a;
      } catch (a) {
        if (s?.set(o, a), n)
          return null;
        throw a;
      }
    });
  }
  regexps;
  findNextMatchSync(e, r, n) {
    const s = typeof e == "string" ? e : e.content, i = [];
    function o(c, a, l = 0) {
      return {
        index: c,
        captureIndices: a.indices.map((u) => u == null ? {
          start: Gr,
          end: Gr,
          length: 0
        } : {
          start: u[0] + l,
          end: u[1] + l,
          length: u[1] - u[0]
        })
      };
    }
    for (let c = 0; c < this.regexps.length; c++) {
      const a = this.regexps[c];
      if (a)
        try {
          a.lastIndex = r;
          const l = a.exec(s);
          if (!l)
            continue;
          if (l.index === r)
            return o(c, l, 0);
          i.push([c, l, 0]);
        } catch (l) {
          if (this.options.forgiving)
            continue;
          throw l;
        }
    }
    if (i.length) {
      const c = Math.min(...i.map((a) => a[1].index));
      for (const [a, l, u] of i)
        if (l.index === c)
          return o(a, l, u);
    }
    return null;
  }
}
function Pc(t, e) {
  return Lc(
    t,
    {
      global: !0,
      hasIndices: !0,
      // This has no benefit for the standard JS engine, but it avoids a perf penalty for
      // precompiled grammars when constructing extremely long patterns that aren't always used
      lazyCompileLength: 3e3,
      rules: {
        // Needed since TextMate grammars merge backrefs across patterns
        allowOrphanBackrefs: !0,
        // Improves search performance for generated regexes
        asciiWordBoundaries: !0,
        // Follow `vscode-oniguruma` which enables this Oniguruma option by default
        captureGroup: !0,
        // Oniguruma uses depth limit `20`; lowered here to keep regexes shorter and maybe
        // sometimes faster, but can be increased if issues reported due to low limit
        recursionLimit: 5,
        // Oniguruma option for `^`->`\A`, `$`->`\Z`; improves search performance without any
        // change in meaning since TM grammars search line by line
        singleline: !0
      },
      ...e
    }
  );
}
function Mc(t = {}) {
  const e = Object.assign(
    {
      target: "auto",
      cache: /* @__PURE__ */ new Map()
    },
    t
  );
  return e.regexConstructor ||= (r) => Pc(r, { target: e.target }), {
    createScanner(r) {
      return new Tc(r, e);
    },
    createString(r) {
      return {
        content: r
      };
    }
  };
}
var Gc = Ot("block", "before:content-[counter(line)]", "before:inline-block", "before:[counter-increment:line]", "before:w-4", "before:mr-4", "before:text-[13px]", "before:text-right", "before:text-muted-foreground/50", "before:font-mono", "before:select-none"), Oc = le.memo(({ children: t, result: e, language: r, className: n, ...s }) => {
  let i = le.useMemo(() => ({ backgroundColor: e.bg, color: e.fg }), [e.bg, e.fg]);
  return G.jsx("pre", { className: Ot(n, "p-4 text-sm dark:bg-(--shiki-dark-bg)!"), "data-language": r, "data-streamdown": "code-block-body", style: i, ...s, children: G.jsx("code", { className: "[counter-increment:line_0] [counter-reset:line]", children: e.tokens.map((o, c) => G.jsx("span", { className: Gc, children: o.map((a, l) => G.jsx("span", { className: "dark:bg-(--shiki-dark-bg)! dark:text-(--shiki-dark)!", style: { color: a.color, backgroundColor: a.bgColor, ...a.htmlStyle }, ...a.htmlAttrs, children: a.content }, l)) }, c)) }) });
}, (t, e) => t.result === e.result && t.language === e.language && t.className === e.className), Bc = ({ className: t, language: e, style: r, ...n }) => G.jsx("div", { className: Ot("my-4 w-full overflow-hidden rounded-xl border border-border", t), "data-language": e, "data-streamdown": "code-block", style: { contentVisibility: "auto", containIntrinsicSize: "auto 200px", ...r }, ...n }), Fc = ({ language: t, children: e }) => G.jsxs("div", { className: "flex items-center justify-between bg-muted/80 p-3 text-muted-foreground text-xs", "data-language": t, "data-streamdown": "code-block-header", children: [G.jsx("span", { className: "ml-1 font-mono lowercase", children: t }), G.jsx("div", { className: "flex items-center gap-2", children: e })] }), Dc = Mc({ forgiving: !0 }), wt = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), jc = (t, e) => `${t}-${e[0]}-${e[1]}`, Uc = (t, e, r) => {
  let n = t.slice(0, 100), s = t.length > 100 ? t.slice(-100) : "";
  return `${e}:${r[0]}:${r[1]}:${t.length}:${n}:${s}`;
}, Wn = (t) => Object.hasOwn(yn, t), Wc = (t, e) => {
  let r = Wn(t) ? t : "text", n = jc(r, e);
  if (wt.has(n)) return wt.get(n);
  let s = Qo({ themes: e, langs: [r], engine: Dc });
  return wt.set(n, s), s;
}, Or = (t, e, r, n) => {
  let s = Wn(e) ? e : "text", i = Uc(t, s, r);
  return _t.has(i) ? _t.get(i) : (n && (oe.has(i) || oe.set(i, /* @__PURE__ */ new Set()), oe.get(i).add(n)), Wc(s, r).then((o) => {
    let c = o.codeToTokens(t, { lang: s, themes: { light: r[0], dark: r[1] } });
    _t.set(i, c);
    let a = oe.get(i);
    if (a) {
      for (let l of a) l(c);
      oe.delete(i);
    }
  }).catch((o) => {
    console.error("Failed to highlight code:", o), oe.delete(i);
  }), null);
}, Qc = ({ code: t, language: e, className: r, children: n, ...s }) => {
  let { shikiTheme: i } = le.useContext(Kn), o = le.useMemo(() => ({ bg: "transparent", fg: "inherit", tokens: t.split(`
`).map((l) => [{ content: l, color: "inherit", bgColor: "transparent", htmlStyle: {}, offset: 0 }]) }), [t]), [c, a] = le.useState(o);
  return le.useEffect(() => {
    let l = Or(t, e, i);
    if (l) {
      a(l);
      return;
    }
    Or(t, e, i, (u) => {
      a(u);
    });
  }, [t, e, i]), G.jsx(Jn.Provider, { value: { code: t }, children: G.jsxs(Bc, { language: e, children: [G.jsx(Fc, { language: e, children: n }), G.jsx(Oc, { className: r, language: e, result: c, ...s })] }) });
};
export {
  Qc as CodeBlock
};
