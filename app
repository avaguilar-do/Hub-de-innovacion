/* ==========================================================================
PORTAFOLIO DE INNOVACIÓN · app.js
Router por hash, navegación dinámica, tabs, breadcrumbs, buscador y
renderizado de bloques. Todo el contenido se lee de window.HUB_DATA (data.js).
========================================================================== */
(function () {
"use strict";

const DATA = window.HUB_DATA;
if (!DATA) {
document.getElementById("view").innerHTML = "<p style='padding:24px'>No se encontró data.js</p>";
return;
}

/* ---------------------------------------------------------------------- */
/* Utilidades */
/* ---------------------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const esc = (s) =>
String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const norm = (s) =>
String(s || "")
.toLowerCase()
.normalize("NFD")
.replace(/[̀-ͯ]/g, "");

const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ICONS = {
pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
cash: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6.5 9.5h.01M17.5 14.5h.01"/>',
clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9.5 2.5h5"/>',
wallet: '<path d="M3 7.5h15a3 3 0 0 1 3 3V17a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"/><path d="M3.5 7.5 6 4h10v3.5"/><path d="M16 14h2"/>',
down: '<path d="M12 4v12M6.5 10.5 12 16l5.5-5.5M5 20h14"/>',
up: '<path d="M12 20V8M6.5 13.5 12 8l5.5 5.5M5 4h14"/>',
check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8 5.7-5.8"/>',
users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/>',
shield: '<path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
dollar: '<circle cx="12" cy="12" r="9"/><path d="M15 9.4c-.5-.9-1.6-1.4-3-1.4-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.4M12 6.3v11.4"/>',
trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
flag: '<path d="M5 21V4M5 4h12l-2.5 4L17 12H5"/>',
briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12.5h18"/>',
doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
sunset: '<path d="M3 18h18M7 21h10M6.3 14.5a6 6 0 0 1 11.4 0M12 3v4M4.6 7.6l1.8 1.8M19.4 7.6l-1.8 1.8"/>',
bank: '<path d="m3 9.5 9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>',
quote: '<path d="M4 4.5h16v11H9l-5 4z"/><path d="M9.5 8.5v3M14.5 8.5v3"/>',
gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8C10.5 5 7 4.5 7 6.5S10 8 12 8zm0 0c1.5-3 5-3.5 5-1.5S14 8 12 8z"/>',
book: '<path d="M3 5.5c3-1.2 6-1 9 1V20c-3-2-6-2.2-9-1zM21 5.5c-3-1.2-6-1-9 1V20c3-2 6-2.2 9-1z"/>',
card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',
userPlus: '<circle cx="10" cy="8" r="4"/><path d="M3 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/>',
userCheck: '<circle cx="10" cy="8" r="4"/><path d="M3 21a7 7 0 0 1 14 0M16 11l2 2 4-4"/>',
star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9z"/>',
heart: '<path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20z"/>',
target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
hand: '<path d="M2.5 14H6l5 3h5.5a2 2 0 0 0 0-4H12"/><path d="m6 14 3.6-3.4a2 2 0 0 1 2.7-.1L14.5 12"/><path d="M15.5 3.5a2.4 2.4 0 0 1 3.5 2.2c0 1.9-3.5 4.3-3.5 4.3S12 7.6 12 5.7a2.4 2.4 0 0 1 3.5-2.2z"/>',
bag: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
pulse: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
refresh: '<path d="M20 11a8 8 0 0 0-14.3-4.5L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.5l1.7-2M20 20v-4.5h-4.5"/>',
compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13 7 4 4"/>',
chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18h2"/>',
chat: '<path d="M4 5h12v9H8l-4 3z"/><path d="M16 9h4v9l-3-2h-7v-2"/>',
alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.01"/>',
store: '<path d="m4 9 1.5-5h13L20 9z"/><path d="M5 9v11h14V9M10 20v-5h4v5"/>',
headset: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
home: '<path d="m3 11 9-7 9 7M5 9.5V20h14V9.5"/>',
grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9.5h18M3 15h18M9 9.5V20"/>',
arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
close: '<path d="M6 6l12 12M18 6 6 18"/>',
chevron: '<path d="m9 6 6 6-6 6"/>',
handshake: '<path d="m2 11 4-4 3.5 1.5L13 7l3 .5 6 4"/><path d="M6 7v6.5l5 4.5 2.5-1 5-3.5L22 11.5"/><path d="m11 13 2 2M13.5 11.5l2.5 2.5"/>',
play: '<path d="M7 5v14l11-7z"/>'
};

const icon = (name, cls = "") =>
ICONS[name] ? `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name]}</svg>` : "";

const slideTag = (slides) => {
const list = Array.isArray(slides) ? slides : slides != null ? [slides] : [];
if (!list.length) return "";
return `<span class="slide-tag" title="Lámina de origen">${list.length > 1 ? "Slides" : "Slide"} ${list.join(" · ")}</span>`;
};

const projectById = (id) => DATA.projects.find((p) => p.id === id);
const initiativeByProject = (id) => DATA.portfolio.initiatives.find((i) => i.projectId === id);

/* ---------------------------------------------------------------------- */
/* Renderizadores de bloques */
/* ---------------------------------------------------------------------- */
const R = {};

const blockTitle = (b) =>
b.title
? `<div class="block-head"><h3 class="block-title ${b.titleTone ? "tone-" + b.titleTone : ""}">${esc(b.title)}</h3>${b.slide ? slideTag(b.slide) : ""}</div>`
: b.slide
? `<div class="block-head block-head--tagonly">${slideTag(b.slide)}</div>`
: "";

const renderBlock = (b) => {
const fn = R[b.type];
if (!fn) return "";
const noTitle = b.type === "heading" || b.type === "grid" || b.type === "engine";
return `<section class="block block--${b.type}">${noTitle ? (b.type === "engine" && b.slide ? blockTitle({ slide: b.slide }) : "") : blockTitle(b)}${fn(b)}</section>`;
};

const renderBlocks = (blocks) => (blocks || []).map(renderBlock).join("");

R.heading = (b) => `
<div class="sheading">
<div class="sheading-top">
${b.kicker ? `<span class="kicker">${esc(b.kicker)}</span>` : "<span></span>"}
${b.slide ? slideTag(b.slide) : ""}
</div>
<h2>${esc(b.title)}</h2>
${b.text || b.lead ? `<p>${b.lead ? `<strong>${esc(b.lead)}</strong> ` : ""}${esc(b.text || "")}</p>` : ""}
</div>`;

R.grid = (b) => {
const tmpl = (b.cols || [1, 1]).map((c) => `minmax(0,${c}fr)`).join(" ");
return `${blockTitle(b)}<div class="grid" style="--cols:${tmpl}">${b.blocks.map((c) => `<div class="grid-cell">${renderBlock(c)}</div>`).join("")}</div>`;
};

R.kpis = (b) => `
<div class="kpis" style="--n:${b.cols || b.items.length}">
${b.items
.map(
(k, i) => `
<article class="kpi tone-${k.tone || "deep"}" style="--d:${i * 60}ms">
${k.icon ? `<span class="kpi-icon">${icon(k.icon)}</span>` : ""}
<div class="kpi-value">${esc(k.value)}${k.mark ? `<sup>${esc(k.mark)}</sup>` : ""}</div>
<div class="kpi-label">${esc(k.label)}</div>
${k.note ? `<div class="kpi-note">${esc(k.note)}</div>` : ""}
</article>`
)
.join("")}
</div>`;

R.stats = (b) => `
<div class="stats" style="--n:${b.cols || b.items.length}">
${b.items
.map(
(s) => `
<div class="stat">
<div class="stat-value tone-${s.tone || "deep"}">${esc(s.value)}</div>
<p>${s.lead ? `<strong class="tone-${s.tone === "orange" ? "red" : "deep"}">${esc(s.lead)}</strong> ` : ""}${esc(s.text || "")}</p>
</div>`
)
.join("")}
</div>`;

R.segments = (b) => {
const total = b.items.reduce((a, s) => a + s.value, 0);
return `
<div class="segments">
<div class="seg-bar">
${b.items.map((s) => `<span class="seg bg-${s.tone} grow-x" style="flex:${s.value}" title="${esc(s.display)} ${esc(s.label)}"></span>`).join("")}
</div>
<div class="seg-legend">
${b.items
.map(
(s) => `<div class="seg-item"><i class="swatch bg-${s.tone}"></i><strong>${esc(s.display)}</strong> <span>${esc(s.label)}</span></div>`
)
.join('<span class="seg-sep">·</span>')}
</div>
</div>`;
};

const cellHTML = (c, col, tag = "td") => {
const cell = typeof c === "string" ? { text: c } : c || { text: "" };
const cls = [col && col.align === "right" ? "ar" : "", cell.tone ? "tone-" + cell.tone : "", cell.strong ? "strong" : ""].join(" ");
return `<${tag} class="${cls}">${cell.dot ? `<i class="dot bg-${cell.dot}"></i>` : ""}${esc(cell.text)}${
cell.sub ? `<small>${esc(cell.sub)}</small>` : ""
}</${tag}>`;
};

R.table = (b) => {
let chart = "";
if (b.chart) {
const row = b.rows[b.chart.row];
const labels = b.columns.slice(1, 1 + row.values.length).map((c) => c.label);
const max = Math.max(...row.values);
chart = `<div class="table-chart" style="--n:${b.columns.length}">
<span></span>
${row.values
.map(
(v, i) => `<div class="tc-col"><div class="tc-bar bg-${b.chart.tone} grow-y" style="height:${Math.max(2, (v / max) * 100)}%"></div><span>${esc(labels[i])}</span></div>`
)
.join("")}
<span></span>
</div>`;
}
const head = `<thead><tr>${b.columns.map((c) => `<th class="${c.align === "right" ? "ar" : ""}">${esc(c.label)}</th>`).join("")}</tr></thead>`;
const body = b.rows
.map((r) => {
if (r.section) return `<tr class="tsection tone-${r.tone || "deep"}"><td colspan="${b.columns.length}">${esc(r.section)}</td></tr>`;
const cls = [r.strong ? "trow-strong" : "", r.muted ? "trow-muted" : "", r.highlight ? "trow-hl-" + r.highlight : ""].join(" ");
return `<tr class="${cls}">${r.cells.map((c, i) => cellHTML(c, b.columns[i])).join("")}</tr>`;
})
.join("");
return `
${chart}
<div class="table-wrap"><table class="dtable ${b.dense ? "dense" : ""}">${head}<tbody>${body}</tbody></table></div>
${b.summary ? `<p class="table-summary">${esc(b.summary)}</p>` : ""}
${b.footnote ? `<p class="footnote">${b.footnoteLead ? `<strong>${esc(b.footnoteLead)}</strong> ` : ""}${esc(b.footnote)}</p>` : ""}`;
};

R.hbars = (b) => {
const max = Math.max(...b.items.map((i) => i.value));
return `
<div class="hbars">
${b.items
.map(
(i, n) => `
<div class="hbar" style="--d:${n * 50}ms">
<span class="hbar-label">${esc(i.label)}</span>
<span class="hbar-track"><span class="hbar-fill bg-${i.tone} grow-x" style="width:${(i.value / max) * 100}%"></span></span>
<span class="hbar-val">${esc(i.display)}</span>
</div>`
)
.join("")}
</div>
${b.legend ? `<div class="legend">${b.legend.map((l) => `<span><i class="swatch bg-${l.tone}"></i>${esc(l.label)}</span>`).join("")}</div>` : ""}`;
};

R.compare = (b) => `
<div class="compare">
${b.groups
.map(
(g) => `
<div class="compare-group">
<h4>${icon(g.icon, "ic-sm")}${esc(g.title)}</h4>
${g.rows
.map(
(r) => `
<div class="crow ${r.strong ? "crow-strong" : ""}">
<span class="crow-label">${esc(r.label)}</span>
<span class="crow-track"><span class="crow-fill bg-${r.tone} grow-x" style="width:${(r.value / b.max) * 100}%"></span></span>
<span class="crow-val tone-${r.strong ? "orange" : "deep"}">${esc(r.display)}</span>
</div>`
)
.join("")}
</div>`
)
.join("")}
</div>`;

R.callout = (b) => `
<div class="callout callout--${b.tone || "deep"}">
${b.icon ? `<span class="callout-icon">${icon(b.icon)}</span>` : ""}
<div>
<p class="callout-text">${b.lead ? `<strong>${esc(b.lead)}</strong> ` : ""}${esc(b.text)}</p>
${b.sub ? `<p class="callout-sub">${esc(b.sub)}</p>` : ""}
</div>
</div>`;

R.statement = (b) => `<blockquote class="statement ${b.compact ? "statement--compact" : ""} tone-${b.tone || "deep"}">${esc(b.text)}</blockquote>`;

R.notes = (b) => `<div class="notes">${b.items.map((n) => `<p>${esc(n)}</p>`).join("")}</div>`;

R.text = (b) => `
<div class="ptext" style="--n:${b.cols || 1}">
${b.items.map((p) => `<p class="ptext-item tone-border-${p.tone || "deep"}"><strong class="tone-${p.tone === "orange" ? "red" : p.tone || "deep"}">${esc(p.lead)}</strong> ${esc(p.text)}</p>`).join("")}
</div>`;

const vbarsInner = (items, opts = {}) => {
const max = Math.max(...items.map((i) => i.value));
return `<div class="vbars ${opts.small ? "vbars--sm" : ""}">
${items
.map(
(i, n) => `
<div class="vbar" style="--d:${n * 70}ms">
<span class="vbar-val">${esc(i.display)}</span>
<span class="vbar-col"><span class="vbar-fill bg-${i.tone || "sky"} grow-y" style="height:${Math.max(1.5, (i.value / max) * 100)}%"></span></span>
<span class="vbar-label">${esc(i.label)}</span>
</div>`
)
.join("")}
</div>`;
};

const sideStats = (side) =>
side
? `<div class="side-stats">${side
.map((s) => `<div class="side-stat"><div class="stat-value tone-${s.tone || "deep"}">${esc(s.value)}</div><p>${esc(s.text)}</p></div>`)
.join("")}</div>`
: "";

R.vbars = (b) => `<div class="chart-with-side">${vbarsInner(b.items)}${sideStats(b.side)}</div>${b.note ? `<p class="footnote">${esc(b.note)}</p>` : ""}`;

R.stacked = (b) => {
const max = Math.max(...b.items.map((i) => i.total.value));
const bars = `<div class="vbars">
${b.items
.map(
(i, n) => `
<div class="vbar" style="--d:${n * 70}ms">
<span class="vbar-val">${esc(i.total.display)}</span>
<span class="vbar-col">
<span class="vbar-stack grow-y" style="height:${(i.total.value / max) * 100}%">
<span class="vbar-rest bg-line" style="flex:${i.total.value - i.part.value}"></span>
<span class="vbar-part bg-${i.part.tone}" style="flex:${i.part.value}"><em>${esc(i.part.display)}</em></span>
</span>
</span>
<span class="vbar-label">${esc(i.label)}</span>
</div>`
)
.join("")}
</div>`;
return `<div class="chart-with-side">${bars}${sideStats(b.side)}</div>
<div class="legend">${b.legend.map((l) => `<span><i class="swatch bg-${l.tone}"></i>${esc(l.label)}</span>`).join("")}</div>`;
};

R.grouped = (b) => {
const max = Math.max(...b.items.flatMap((i) => i.values.map((v) => v.value)));
return `
<div class="legend legend--top">${b.legend.map((l) => `<span><i class="swatch bg-${l.tone}"></i>${esc(l.label)}</span>`).join("")}</div>
<div class="gbars">
${b.items
.map(
(i, n) => `
<div class="gbar" style="--d:${n * 70}ms">
<div class="gbar-cols">
${i.values
.map(
(v, k) => `<span class="gbar-col"><span class="gbar-val tone-${b.legend[k].tone}">${esc(v.display)}</span><span class="gbar-fill bg-${b.legend[k].tone} grow-y" style="height:${Math.max(1.5, (v.value / max) * 100)}%"></span></span>`
)
.join("")}
</div>
<span class="vbar-label">${esc(i.label)}</span>
</div>`
)
.join("")}
</div>
${b.foot ? `<p class="footnote footnote--box"><strong class="tone-red">${esc(b.footLead)}</strong> ${esc(b.foot)}</p>` : ""}`;
};

R.engine = (b) => `
<div class="engine engine--${b.tone}">
<div class="engine-head"><h4>${esc(b.title)}</h4><span class="pill pill--${b.tone}">${esc(b.share)}</span></div>
${b.stats ? `<div class="engine-stats">${b.stats.map((s) => `<div><div class="stat-value tone-${s.tone}">${esc(s.value)}</div><p>${esc(s.text)}</p></div>`).join("")}</div>` : ""}
${b.chart ? `<p class="mini-title">${esc(b.chart.title)}</p>${vbarsInner(b.chart.items, { small: true })}` : ""}
${b.body ? `<p class="engine-body">${esc(b.body)}</p>` : ""}
</div>`;

R.cards = (b) => `
<div class="cards" style="--n:${b.cols || 3}">
${b.items
.map(
(c, i) => `
<article class="card" style="--d:${i * 60}ms">
${c.num ? `<span class="card-num">${esc(c.num)}</span>` : c.icon ? `<span class="card-icon ${b.iconTone ? "card-icon--" + b.iconTone : ""}">${icon(c.icon)}</span>` : ""}
<h4>${esc(c.title)}</h4>
<p>${esc(c.text)}</p>
</article>`
)
.join("")}
</div>
${b.footnote ? `<p class="footnote">${esc(b.footnote)}</p>` : ""}`;

R.list = (b) => {
const variant = b.variant || (b.plain ? "plain" : "icons");
return `
${b.intro ? `<p class="list-intro">${esc(b.intro)}</p>` : ""}
<ul class="ilist ilist--${variant}" style="--n:${b.cols || 1}">
${b.items
.map(
(it) => `
<li class="${it.highlight ? "is-hl" : ""}">
${variant === "icons" || variant === "table" ? (it.icon ? `<span class="ilist-icon">${icon(it.icon)}</span>` : "") : variant === "dots" ? `<i class="dot ${it.highlight ? "bg-orange" : "bg-deep40"}"></i>` : ""}
<div><strong>${esc(it.title)}</strong>${variant === "dots" ? " " : ""}<span>${esc(it.text)}</span></div>
</li>`
)
.join("")}
</ul>`;
};

R.chips = (b) => `
<div class="chips ${b.variant === "solid" ? "chips--solid" : ""}">${b.items.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
${b.text ? `<p class="chips-text">${esc(b.text)}</p>` : ""}
${
b.after
? `<h3 class="block-title block-title--sub">${esc(b.after.title)}</h3><div class="chips chips--brands">${b.after.items
.map((c) => `<span class="chip">${esc(c)}</span>`)
.join("")}</div>`
: ""
}`;

R.hub = (b) => {
const n = b.nodes.length;
const nodes = b.nodes
.map((node, i) => {
const a = (-90 + (360 / n) * i) * (Math.PI / 180);
const x = 50 + 38 * Math.cos(a);
const y = 50 + 38 * Math.sin(a);
return `<div class="hub-node" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%;--d:${i * 80}ms">
<span class="hub-dot">${icon(node.icon)}</span>
<strong>${esc(node.title)}</strong><small>${esc(node.text)}</small>
</div>`;
})
.join("");
return `
<div class="hub">
<div class="hub-ring">
<span class="hub-orbit"></span>
<div class="hub-center">${icon("users")}<strong>${esc(b.center)}</strong></div>
${nodes}
</div>
</div>
${b.caption ? `<p class="hub-caption">${esc(b.caption)}</p>` : ""}`;
};

R.alliance = (b) => `
<h2 class="alliance-headline">${esc(b.headline)}</h2>
<div class="alliance">
<div class="alliance-us">
<span class="orb orb--orange">${icon("bank")}</span>
<strong>${esc(b.us.name)}</strong>
<small>${esc(b.us.text)}</small>
</div>
<div class="alliance-link"><span class="alliance-line"></span><span class="alliance-shake">${icon("handshake")}</span></div>
<div class="alliance-partner">
<span class="alliance-label">${esc(b.partnerLabel)}</span>
<div class="alliance-pieces">
${b.partners
.map((p) => `<div class="piece"><span class="orb orb--line">${icon(p.icon)}</span><strong>${esc(p.name)}</strong><small>${esc(p.text)}</small></div>`)
.join('<span class="alliance-plus">+</span>')}
</div>
</div>
</div>`;

R.journey = (b) => `
<div class="journey">
<div class="journey-phases">
${b.phases
.map(
(p) => `<div class="jphase ${p.accent ? "jphase--accent" : ""}">${icon(p.icon)}<div><span>${esc(p.label)}</span><strong>${esc(p.value)}</strong></div></div>`
)
.join("")}
</div>
<div class="journey-line">
<span class="jl-solid"></span>
<span class="jl-node">${icon("doc")}</span>
<span class="jl-branch"></span>
</div>
<div class="journey-body">
<div class="jcol jcol--left">
<div class="jitem">${icon("dollar")}<div><h4>${esc(b.left.title)}</h4><p>${esc(b.left.text)}</p></div></div>
<div class="jitem jitem--here">${icon("bank")}<div><span class="mini-kicker tone-orange">${esc(b.left.hereLabel)}</span><h4>${esc(b.left.hereTitle)}</h4><p>${esc(b.left.hereText)}</p></div></div>
</div>
<div class="jcol jcol--mid">
<p class="jmid-text">${esc(b.middle.text)}</p>
<span class="mini-kicker tone-orange">${esc(b.middle.absentLabel)}</span>
<p class="jmid-absent">${esc(b.middle.absentText)}</p>
</div>
<div class="jcol jcol--right">
${b.options
.map(
(o) => `
<div class="joption joption--${o.tone}">
<span class="joption-letter">${esc(o.letter)}</span>
<div class="joption-main"><h4>${esc(o.title)}</h4><p>${esc(o.text)}</p></div>
<div class="joption-pay"><span class="mini-kicker">${esc(o.payer)}</span>${o.amount ? `<strong>${esc(o.amount)}</strong><small>${esc(o.amountNote)}</small>` : ""}</div>
</div>`
)
.join("")}
</div>
</div>
<div class="presence">
<span class="mini-kicker">${esc(b.presence.title)}</span>
<div class="presence-track">
<div class="pres pres--partial"><span class="pres-line"></span><strong>${esc(b.presence.partial)}</strong></div>
<div class="pres pres--absent"><span class="pres-x">${icon("close")}</span><strong>${esc(b.presence.absent)}</strong></div>
<div class="pres pres--long"><span class="pres-line"></span><strong>${esc(b.presence.absentLong)}</strong></div>
</div>
</div>
</div>`;

R.gantt = (b) => {
const W = b.weeks.length;
const shadeCols = [];
let c = 1;
b.months.forEach((m) => {
for (let k = 0; k < m.span; k++) shadeCols.push(!!m.shade);
c += m.span;
});
const bg = `<div class="gantt-bg">${'<span class="gl"></span>'}${shadeCols
.map((s, i) => {
const ms = b.milestones.find((x) => x.week === i + 1);
return `<span class="gcol ${s ? "is-shade" : ""} ${ms ? "has-ms" : ""}"></span>`;
})
.join("")}</div>`;
const months = `<div class="grow-row gantt-months"><span></span>${b.months.map((m) => `<span class="gm" style="grid-column:span ${m.span}">${esc(m.label)}</span>`).join("")}</div>`;
const weeks = `<div class="grow-row gantt-weeks"><span></span>${b.weeks.map((w) => `<span class="gw"><strong>${esc(w.day)}</strong><small>${esc(w.month)}</small></span>`).join("")}</div>`;
const lanes = b.lanes
.map((l) => {
const head = `<div class="grow-row gantt-lane"><span class="gl-title"><i class="dot bg-${l.tone}"></i>${esc(l.title)}<em>${esc(l.owner)}</em></span></div>`;
const tasks = l.tasks
.map((t, i) => {
if (t.milestone) {
return `<div class="grow-row gantt-task is-ms"><span class="gt-label"><strong>${esc(t.label)}</strong></span><span class="gt-ms ${t.milestone >= W - 1 ? "gt-ms--left" : ""}" style="grid-column:${t.milestone + 1}"><i></i><em>${esc(t.milestoneLabel)}</em></span></div>`;
}
return `<div class="grow-row gantt-task"><span class="gt-label">${esc(t.label)}</span><span class="gt-bar bg-${l.tone} grow-x" style="grid-column:${t.from + 1} / ${t.to + 2};--d:${i * 60}ms" title="${esc(t.label)}"></span></div>`;
})
.join("");
return head + tasks;
})
.join("");
return `<div class="gantt-scroll"><div class="gantt" style="--w:${W}">${bg}${months}${weeks}${lanes}</div></div>
<p class="scroll-hint">${icon("arrowRight", "ic-xs")} Desliza para ver la línea de tiempo completa</p>`;
};

R.personas = (b) => `
<div class="personas">
${b.items
.map(
(p) => `
<article class="persona persona--${p.tone}">
<header>
<span class="avatar">${esc(p.initials)}</span>
<div><h4>${esc(p.name)}</h4><small>${esc(p.meta)}</small></div>
</header>
<p>${esc(p.text)}</p>
<div class="persona-row persona-row--friction"><strong>${esc(b.labels.friction)}</strong> ${esc(p.friction)}</div>
<div class="persona-row persona-row--solution"><strong>${esc(b.labels.solution)}</strong> ${esc(p.solution)}</div>
</article>`
)
.join("")}
</div>`;

R.flow = (b) => `
<ol class="flow">
${b.items
.map(
(s, i) => `
<li class="flow-step" style="--d:${i * 80}ms">
<span class="flow-orb flow-orb--${s.tone}">${icon(s.icon)}</span>
<strong>${esc(s.title)}</strong>
<small>${esc(s.text)}</small>
</li>`
)
.join("")}
</ol>`;

R.steps = (b) => `
<ol class="steps">
${b.items
.map(
(s, i) => `
<li class="step ${i === b.accentIndex ? "step--accent" : ""}" style="--d:${i * 70}ms">
<span class="step-num">${esc(s.num)}</span>
<h4>${esc(s.title)}</h4>
<p>${esc(s.text)}</p>
</li>`
)
.join("")}
</ol>`;

R.warroom = (b) => `
<div class="warroom">
<div class="warroom-areas">
${b.areas.map((a, i) => `<div class="warroom-area" style="--d:${i * 70}ms">${icon("users")}<strong>${esc(a)}</strong></div>`).join("")}
</div>
<p class="warroom-text">${esc(b.text)}</p>
</div>`;

R.stages = (b) => `
<div class="stages">
${b.items
.map(
(s, i) => `
<div class="stage-item stage-item--${s.tone}" style="--d:${i * 100}ms">
<span class="stage-year">${esc(s.label)}</span>
<div class="stage-card"><h4>${esc(s.title)}</h4><p>${esc(s.text)}</p></div>
</div>`
)
.join('<span class="stage-arrow">' + icon("arrowRight") + "</span>")}
</div>`;

R.metrics = (b) => `
<div class="metrics">
${b.items.map((m, i) => `<div class="metric" style="--d:${i * 60}ms"><span class="metric-icon">${icon(m.icon)}</span><strong>${esc(m.label)}</strong></div>`).join("")}
</div>`;

/* ---------------------------------------------------------------------- */
/* Componentes del portafolio (Slide 4) */
/* ---------------------------------------------------------------------- */
const P = DATA.portfolio;

const typeClass = (t) => (norm(t).includes("fabrica") ? "type--fabrica" : "type--innov");

const qTrack = (r) => `
<div class="qtrack" aria-label="Roadmap 2027: ${esc(P.quarters[r.from - 1])}${r.to !== r.from ? " a " + esc(P.quarters[r.to - 1]) : ""}">
${P.quarters.map((q) => `<span class="qcell"></span>`).join("")}
<span class="qbar qbar--${r.tone} grow-x" style="grid-column:${r.from} / ${r.to + 1}"></span>
</div>`;

const portfolioCard = (it, i) => {
const tag = it.projectId ? "a" : "div";
const href = it.projectId ? ` href="#/proyecto/${it.projectId}"` : "";
return `
<${tag} class="pcard ${it.projectId ? "" : "pcard--static"}"${href} data-stage="${esc(slug(it.stage))}" data-search="${esc(norm([it.name, it.type, it.stage, it.status, it.kpiLabel, it.roadmap.label].join(" ")))}" style="--d:${i * 70}ms">
<div class="pcard-top">
<span class="type ${typeClass(it.type)}">${icon("play", "ic-xs")}${esc(it.type)}</span>
<span class="stage stage--${it.stageStyle}">${esc(it.stage)}</span>
</div>
<h3>${esc(it.name)}</h3>
<div class="pcard-kpi">
<strong>${esc(it.kpiValue)}${it.kpiMark ? `<sup>${esc(it.kpiMark)}</sup>` : ""}</strong>
<span>${esc(it.kpiLabel)}</span>
</div>
<div class="pcard-field"><span class="field-label">${esc(P.columns.status)}</span><p>${esc(it.status)}</p></div>
<div class="pcard-field">
<span class="field-label">${esc(P.columns.roadmap)}</span>
<div class="qhead">${P.quarters.map((q) => `<span>${esc(q)}</span>`).join("")}</div>
${qTrack(it.roadmap)}
<p class="road-label">${esc(it.roadmap.label)}</p>
</div>
${it.projectId ? `<span class="pcard-cta">Ver detalle ${icon("arrowRight", "ic-sm")}</span>` : ""}
</${tag}>`;
};

const portfolioTable = () => `
<div class="table-wrap ptable-wrap">
<table class="ptable">
<thead>
<tr>
<th>${esc(P.columns.initiative)}</th>
<th>${esc(P.columns.kpi)}</th>
<th>${esc(P.columns.stage)}</th>
<th>${esc(P.columns.status)}</th>
<th class="th-road"><span class="road-title">${esc(P.columns.roadmap)}</span><div class="qhead">${P.quarters.map((q) => `<span>${esc(q)}</span>`).join("")}</div></th>
</tr>
</thead>
<tbody>
${P.initiatives
.map(
(it) => `
<tr data-stage="${esc(slug(it.stage))}" data-search="${esc(norm([it.name, it.type, it.stage, it.status, it.kpiLabel, it.roadmap.label].join(" ")))}" ${it.projectId ? `data-href="#/proyecto/${it.projectId}" tabindex="0"` : ""}>
<td>
<div class="pt-name"><span class="tri ${typeClass(it.type)}">${icon("play", "ic-xs")}</span>
<div><strong>${esc(it.name)}</strong><small class="${typeClass(it.type)}">${esc(it.type)}</small></div></div>
</td>
<td><div class="pt-kpi"><strong>${esc(it.kpiValue)}${it.kpiMark ? `<sup>${esc(it.kpiMark)}</sup>` : ""}</strong><small>${esc(it.kpiLabel)}</small></div></td>
<td><span class="stage stage--${it.stageStyle}">${esc(it.stage)}</span></td>
<td class="pt-status">${esc(it.status)}</td>
<td class="pt-road">${qTrack(it.roadmap)}<small>${esc(it.roadmap.label)}</small></td>
</tr>`
)
.join("")}
</tbody>
</table>
</div>`;

/* ---------------------------------------------------------------------- */
/* Vistas */
/* ---------------------------------------------------------------------- */
const state = { view: "cards", stage: "all", query: "", projectId: null, tabId: null };

const view = $("#view");

const countBy = (key) =>
P.initiatives.reduce((acc, it) => {
acc[it[key]] = (acc[it[key]] || 0) + 1;
return acc;
}, {});

function renderHome() {
state.projectId = null;
const stages = countBy("stage");
const types = countBy("type");
const stageOrder = Object.keys(stages);
const stageStyleOf = (s) => (P.initiatives.find((i) => i.stage === s) || {}).stageStyle;

view.innerHTML = `
<div class="page page--home">
<section class="hero">
<div class="hero-main">
<div class="hero-kicker"><span class="kicker">${esc(P.slideTitle)}</span>${slideTag(P.slide)}</div>
<h1 class="hero-title">${esc(P.pageTitle)}</h1>
<p class="hero-sub">${esc(P.subtitle)}</p>
</div>
<div class="hero-side">
<div class="hero-count">
<strong>${P.initiatives.length}</strong>
<span>Iniciativas</span>
</div>
<div class="hero-breakdown">
<span class="field-label">${esc(P.columns.stage)}</span>
${stageOrder
.map(
(s) => `<div class="hb-row"><span class="stage stage--${stageStyleOf(s)} stage--sm">${esc(s)}</span><span class="hb-bar"><i style="width:${(stages[s] / P.initiatives.length) * 100}%"></i></span><strong>${stages[s]}</strong></div>`
)
.join("")}
</div>
<div class="hero-types">
${Object.keys(types)
.map((t) => `<span class="type ${typeClass(t)}">${icon("play", "ic-xs")}${esc(t)} <strong>${types[t]}</strong></span>`)
.join("")}
</div>
</div>
</section>

<blockquote class="statement statement--hero">${esc(P.statement)}</blockquote>

<div class="toolbar" role="toolbar" aria-label="Filtros del portafolio">
<div class="filters" role="group" aria-label="Filtrar por ${esc(P.columns.stage)}">
<button class="fchip ${state.stage === "all" ? "is-active" : ""}" data-stage="all">Todas <span>${P.initiatives.length}</span></button>
${stageOrder
.map((s) => `<button class="fchip ${state.stage === slug(s) ? "is-active" : ""}" data-stage="${esc(slug(s))}">${esc(s)} <span>${stages[s]}</span></button>`)
.join("")}
</div>
<div class="viewtoggle" role="group" aria-label="Vista">
<button class="vt ${state.view === "cards" ? "is-active" : ""}" data-view="cards" aria-pressed="${state.view === "cards"}">${icon("grid", "ic-sm")}Tarjetas</button>
<button class="vt ${state.view === "table" ? "is-active" : ""}" data-view="table" aria-pressed="${state.view === "table"}">${icon("table", "ic-sm")}Tabla</button>
</div>
</div>

<div id="portfolio-body">
${state.view === "cards" ? `<div class="pgrid">${P.initiatives.map(portfolioCard).join("")}</div>` : portfolioTable()}
<p class="empty" hidden>Sin resultados para la búsqueda.</p>
</div>

<div class="notes notes--page">${P.notes.map((n) => `<p>${esc(n)}</p>`).join("")}</div>
</div>`;

$$(".fchip", view).forEach((b) =>
b.addEventListener("click", () => {
state.stage = b.dataset.stage;
$$(".fchip", view).forEach((x) => x.classList.toggle("is-active", x === b));
applyFilters();
})
);
$$(".vt", view).forEach((b) =>
b.addEventListener("click", () => {
if (state.view === b.dataset.view) return;
state.view = b.dataset.view;
renderHome();
})
);
$$("tr[data-href]", view).forEach((tr) => {
const go = () => (location.hash = tr.dataset.href);
tr.addEventListener("click", go);
tr.addEventListener("keydown", (e) => {
if (e.key === "Enter") go();
});
});
applyFilters();
setBreadcrumbs([{ label: P.pageTitle }]);
setActiveNav("home");
document.title = "Portafolio de Innovación";
}

function applyFilters() {
const q = norm(state.query).trim();
const items = $$("#portfolio-body [data-search]", view);
let visible = 0;
items.forEach((el) => {
const okStage = state.stage === "all" || el.dataset.stage === state.stage;
const okQuery = !q || el.dataset.search.includes(q);
const show = okStage && okQuery;
el.hidden = !show;
if (show) visible++;
});
const empty = $(".empty", view);
if (empty) empty.hidden = visible > 0;
}

function renderProject(project, tabId) {
const tabs = project.tabs;
const tab = tabs.find((t) => t.id === tabId) || tabs[0];
const sameProject = state.projectId === project.id && $(".page--project", view);

if (!sameProject) {
const init = initiativeByProject(project.id);
view.innerHTML = `
<div class="page page--project">
<section class="phead">
<span class="phead-icon">${icon(project.icon)}</span>
<div class="phead-text">
<div class="phead-meta">
${init ? `<span class="type ${typeClass(init.type)}">${icon("play", "ic-xs")}${esc(init.type)}</span>` : ""}
${slideTag(project.slides)}
</div>
<h1>${esc(project.header.title)}</h1>
${project.header.subtitle ? `<p>${esc(project.header.subtitle)}</p>` : ""}
</div>
</section>
<div class="tabs-wrap">
<nav class="tabs" role="tablist" aria-label="Secciones de ${esc(project.name)}">
${tabs
.map(
(t, i) => `<button class="tab" role="tab" id="tab-${t.id}" aria-controls="panel" data-tab="${t.id}" aria-selected="false" tabindex="-1"><span class="tab-n">${String(i + 1).padStart(2, "0")}</span>${esc(t.label)}</button>`
)
.join("")}
<span class="tab-ink" aria-hidden="true"></span>
</nav>
</div>
<section id="panel" class="panel" role="tabpanel"></section>
<nav class="pager" aria-label="Navegación entre secciones"></nav>
</div>`;

const tablist = $(".tabs", view);
$$(".tab", tablist).forEach((btn) => btn.addEventListener("click", () => go(`#/proyecto/${project.id}/${btn.dataset.tab}`)));
tablist.addEventListener("keydown", (e) => {
const btns = $$(".tab", tablist);
const idx = btns.indexOf(document.activeElement);
if (idx < 0) return;
let next = null;
if (e.key === "ArrowRight") next = btns[(idx + 1) % btns.length];
if (e.key === "ArrowLeft") next = btns[(idx - 1 + btns.length) % btns.length];
if (e.key === "Home") next = btns[0];
if (e.key === "End") next = btns[btns.length - 1];
if (next) {
e.preventDefault();
next.focus();
next.click();
}
});
window.scrollTo({ top: 0, behavior: "auto" });
}

state.projectId = project.id;
state.tabId = tab.id;

// Tabs activos
$$(".tab", view).forEach((btn) => {
const on = btn.dataset.tab === tab.id;
btn.classList.toggle("is-active", on);
btn.setAttribute("aria-selected", on);
btn.tabIndex = on ? 0 : -1;
if (on) {
moveInk(btn);
btn.scrollIntoView({ block: "nearest", inline: "center", behavior: reduceMotion ? "auto" : "smooth" });
}
});

// Panel
const panel = $("#panel", view);
panel.setAttribute("aria-labelledby", "tab-" + tab.id);
panel.innerHTML = `
<div class="panel-head">
<h2 class="panel-title">${esc(tab.label)}</h2>
${slideTag(tab.slides)}
</div>
${renderBlocks(tab.blocks)}`;
panel.classList.remove("is-in");
void panel.offsetWidth;
panel.classList.add("is-in");

// Pager
const i = project.tabs.indexOf(tab);
const prev = project.tabs[i - 1];
const next = project.tabs[i + 1];
$(".pager", view).innerHTML = `
${prev ? `<a class="pager-btn" href="#/proyecto/${project.id}/${prev.id}">${icon("arrowLeft", "ic-sm")}<span><small>Anterior</small>${esc(prev.label)}</span></a>` : "<span></span>"}
${next ? `<a class="pager-btn pager-btn--next" href="#/proyecto/${project.id}/${next.id}"><span><small>Siguiente</small>${esc(next.label)}</span>${icon("arrowRight", "ic-sm")}</a>` : "<span></span>"}`;

if (sameProject) {
const tabsTop = $(".tabs-wrap", view).getBoundingClientRect().top;
if (tabsTop < 0) window.scrollTo({ top: window.scrollY + tabsTop - 64, behavior: reduceMotion ? "auto" : "smooth" });
}

setBreadcrumbs([{ label: P.pageTitle, href: "#/" }, { label: project.name, href: `#/proyecto/${project.id}` }, { label: tab.label }]);
setActiveNav(project.id);
document.title = `${project.name} · ${tab.label} · Portafolio de Innovación`;
}

function moveInk(btn) {
const ink = $(".tab-ink", view);
if (!ink || !btn) return;
ink.style.width = btn.offsetWidth + "px";
ink.style.transform = `translateX(${btn.offsetLeft}px)`;
}

/* ---------------------------------------------------------------------- */
/* Shell: navegación lateral, breadcrumbs, buscador */
/* ---------------------------------------------------------------------- */
function buildNav() {
const nav = $("#nav");
nav.innerHTML = `
<a class="nav-item" href="#/" data-nav="home">${icon("home")}<span>Portafolio</span></a>
<p class="nav-group">Iniciativas</p>
${P.initiatives
.map((it) => {
const p = it.projectId && projectById(it.projectId);
if (!p) {
return `<div class="nav-item nav-item--off" title="${esc(it.name)}">${icon("doc")}<span>${esc(it.name)}<small>${esc(it.stage)}</small></span></div>`;
}
return `<a class="nav-item" href="#/proyecto/${p.id}" data-nav="${p.id}">${icon(p.icon)}<span>${esc(p.name)}<small>${esc(it.stage)}</small></span><i class="nav-dot stage-dot--${it.stageStyle}"></i></a>`;
})
.join("")}`;
$$("a", nav).forEach((a) => a.addEventListener("click", closeNav));
}

function setActiveNav(key) {
$$("#nav [data-nav]").forEach((a) => {
const on = a.dataset.nav === key;
a.classList.toggle("is-active", on);
if (on) a.setAttribute("aria-current", "page");
else a.removeAttribute("aria-current");
});
}

function setBreadcrumbs(items) {
$("#breadcrumbs").innerHTML = `<ol>${items
.map(
(it, i) =>
`<li>${i ? icon("chevron", "ic-xs bc-sep") : ""}${it.href ? `<a href="${it.href}">${esc(it.label)}</a>` : `<span aria-current="page">${esc(it.label)}</span>`}</li>`
)
.join("")}</ol>`;
}

const app = $(".app");
function openNav() {
app.classList.add("nav-open");
$("#menuBtn").setAttribute("aria-expanded", "true");
}
function closeNav() {
app.classList.remove("nav-open");
$("#menuBtn").setAttribute("aria-expanded", "false");
}

// Índice de búsqueda: iniciativas (Slide 4) + secciones de cada proyecto
const searchIndex = [];
P.initiatives.forEach((it) => {
const p = it.projectId && projectById(it.projectId);
searchIndex.push({
title: it.name,
meta: `${it.type} · ${it.stage}`,
href: p ? `#/proyecto/${p.id}` : null,
icon: p ? p.icon : "doc",
text: norm([it.name, it.type, it.stage, it.status, it.kpiValue, it.kpiLabel, it.roadmap.label, p ? p.header.title : "", p ? p.header.subtitle : ""].join(" "))
});
if (p) {
p.tabs.forEach((t) =>
searchIndex.push({
title: t.label,
meta: p.name,
href: `#/proyecto/${p.id}/${t.id}`,
icon: "chevron",
sub: true,
text: norm([t.label, p.name, JSON.stringify(t.blocks)].join(" "))
})
);
}
});

const searchInput = $("#search");
const results = $("#searchResults");
let activeIdx = -1;

function runSearch() {
const q = norm(searchInput.value).trim();
state.query = searchInput.value;
if (!state.projectId) applyFilters();
if (!q) {
results.hidden = true;
results.innerHTML = "";
searchInput.setAttribute("aria-expanded", "false");
return;
}
const terms = q.split(/\s+/);
const hits = searchIndex.filter((e) => terms.every((t) => e.text.includes(t))).slice(0, 8);
activeIdx = -1;
results.innerHTML = hits.length
? hits
.map(
(h, i) =>
`<li role="option" id="sr-${i}">${
h.href
? `<a href="${h.href}" class="${h.sub ? "is-sub" : ""}">${icon(h.icon, "ic-sm")}<span><strong>${esc(h.title)}</strong><small>${esc(h.meta)}</small></span></a>`
: `<div class="sr-static">${icon(h.icon, "ic-sm")}<span><strong>${esc(h.title)}</strong><small>${esc(h.meta)}</small></span></div>`
}</li>`
)
.join("")
: `<li class="sr-empty">Sin resultados</li>`;
results.hidden = false;
searchInput.setAttribute("aria-expanded", "true");
}

function closeSearch() {
results.hidden = true;
searchInput.setAttribute("aria-expanded", "false");
}

searchInput.addEventListener("input", runSearch);
searchInput.addEventListener("focus", () => searchInput.value && runSearch());
searchInput.addEventListener("keydown", (e) => {
const links = $$("a", results);
if (e.key === "ArrowDown" || e.key === "ArrowUp") {
if (!links.length) return;
e.preventDefault();
activeIdx = (activeIdx + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
links.forEach((l, i) => l.classList.toggle("is-active", i === activeIdx));
searchInput.setAttribute("aria-activedescendant", links[activeIdx].parentElement.id);
} else if (e.key === "Enter") {
const target = links[activeIdx] || links[0];
if (target) {
e.preventDefault();
go(target.getAttribute("href"));
searchInput.blur();
closeSearch();
}
} else if (e.key === "Escape") {
searchInput.value = "";
runSearch();
searchInput.blur();
}
});
results.addEventListener("click", (e) => {
if (e.target.closest("a")) {
closeSearch();
closeNav();
}
});
document.addEventListener("click", (e) => {
if (!e.target.closest(".search")) closeSearch();
});
document.addEventListener("keydown", (e) => {
if (e.key === "/" && document.activeElement !== searchInput && !/input|textarea/i.test(document.activeElement.tagName)) {
e.preventDefault();
searchInput.focus();
}
if (e.key === "Escape") closeNav();
});

$("#menuBtn").addEventListener("click", () => (app.classList.contains("nav-open") ? closeNav() : openNav()));
$("#scrim").addEventListener("click", closeNav);

window.addEventListener("resize", () => {
const active = $(".tab.is-active", view);
if (active) moveInk(active);
});

/* ---------------------------------------------------------------------- */
/* Router */
/* ---------------------------------------------------------------------- */
function go(hash) {
if (location.hash === hash) route();
else location.hash = hash;
}

function route() {
const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
if (parts[0] === "proyecto" && parts[1]) {
const p = projectById(parts[1]);
if (p) return renderProject(p, parts[2]);
}
if (location.hash && location.hash !== "#/" && location.hash !== "#") {
history.replaceState(null, "", "#/");
}
renderHome();
window.scrollTo({ top: 0, behavior: "auto" });
}

buildNav();
window.addEventListener("hashchange", route);
route();
})();
