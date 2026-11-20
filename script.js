/* =========================================================
   PORTFOLIO CONTENT: edit everything in this block
   ========================================================= */
const PROFILE = {
  name: "Youssef Ibrahim",
  role: "CS at Carleton University",
  email: "your.email@example.com",
  location: "Ottawa, Canada",
  github: "https://github.com/youssefibrahim8",
  linkedin: "https://www.linkedin.com/in/your-handle",
  resume: "assets/resume.pdf",
};

const SECTIONS = [
  {
    id: "profile", label: "Profile", tag: "About me", sub: "Who I am",
    html: () => `
      <p class="lead">Hi, I'm ${PROFILE.name}, a Computer Science student at Carleton University who loves building bold, expressive software.</p>
      <p>I enjoy work where design and engineering meet: interfaces with personality, smooth motion and solid code underneath. Replace this paragraph with your own story, what drives you and what you're looking for next.</p>
      <h2>Status</h2>
      <div class="stat"><span class="k">Class</span><span class="v">Computer Science</span></div>
      <div class="stat"><span class="k">Guild</span><span class="v">Carleton University</span></div>
      <div class="stat"><span class="k">Base</span><span class="v">${PROFILE.location}</span></div>
      <div class="stat"><span class="k">Party</span><span class="v">Open to internships</span></div>`,
  },
  {
    id: "skills", label: "Skills", tag: "Abilities", sub: "What I can do",
    html: () => `
      <h2>Core</h2>
      <div class="meters">
        ${meter("Java", 85)}
        ${meter("Python", 85)}
        ${meter("C / C++", 70)}
        ${meter("HTML / CSS / JavaScript", 88)}
        ${meter("SQL", 70)}
      </div>
      <h2>Toolkit</h2>
      <ul class="chips">${["Git", "GitHub", "Linux", "VS Code", "IntelliJ", "Figma", "React", "Node.js"].map((t) => `<li>${t}</li>`).join("")}</ul>
      <h2>Soft skills</h2>
      <ul class="chips">${["Communication", "Problem solving", "Teamwork", "Fast learner"].map((t) => `<li>${t}</li>`).join("")}</ul>`,
  },
  {
    id: "experience", label: "Experience", tag: "Work history", sub: "Where I've been",
    html: () => `
      <ol class="timeline">
        ${job("20XX to Present", "Role Title", "Company Name", "Describe what you built, the tools you used and the impact it had.")}
        ${job("20XX", "Role Title", "Organisation", "Another position, volunteer role or club leadership position.")}
        ${job("20XX", "Freelance", "Self-employed", "Websites or apps built for clients, friends or local businesses.")}
      </ol>`,
  },
  {
    id: "projects", label: "Projects", tag: "My work", sub: "Things I've built",
    html: () => `
      <div class="cards">
        ${project(1, "Command Menu Portfolio", "This site: an RPG-style command menu with paint splatter hovers and a floating character.", ["HTML", "CSS", "JS"], PROFILE.github + "/New-portfolio-2")}
        ${project(2, "Project Two", "A short, punchy description of what it does and the problem it solves.", ["Java"], "#")}
        ${project(3, "Project Three", "Highlight the most interesting technical challenge or result here.", ["Python"], "#")}
        ${project(4, "Project Four", "Another project worth showing off, ideally with a live demo link.", ["C++"], "#")}
      </div>`,
  },
  {
    id: "education", label: "Education", tag: "Studies", sub: "Where I learned",
    html: () => `
      <ol class="timeline">
        ${job("20XX to Present", "Bachelor of Computer Science", "Carleton University, Ottawa", "Relevant coursework: data structures, algorithms, systems programming, object-oriented design.")}
        ${job("20XX", "High School Diploma", "School Name", "Add awards, honours or clubs here.")}
      </ol>`,
  },
  {
    id: "hobbies", label: "Hobbies", tag: "Off duty", sub: "When I'm not coding",
    html: () => `
      <p>The things that keep me inspired outside of class:</p>
      <div class="cards">
        ${hobby("Gaming", "Especially stylish RPGs. Their menus inspired this site.")}
        ${hobby("Drawing", "Sketching characters and experimenting with digital art.")}
        ${hobby("Music", "Building playlists and discovering new artists.")}
        ${hobby("Fitness", "Training to keep the mind as sharp as the body.")}
      </div>`,
  },
  {
    id: "contact", label: "Contact", tag: "Get in touch", sub: "Send a message",
    html: () => `
      <p class="lead">Have a project, a role or just want to say hi? My inbox is open.</p>
      <ul class="contact-list">
        <li><div class="stat"><span class="k">Email</span><span class="v"><a href="mailto:${PROFILE.email}">${PROFILE.email}</a></span></div></li>
        <li><div class="stat"><span class="k">GitHub</span><span class="v"><a href="${PROFILE.github}" target="_blank" rel="noopener">${PROFILE.github.replace(/^https?:\/\//, "")}</a></span></div></li>
        <li><div class="stat"><span class="k">LinkedIn</span><span class="v"><a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn profile</a></span></div></li>
      </ul>
      <form class="form" id="contact-form">
        <label>Name<input name="name" required autocomplete="name" /></label>
        <label>Email<input name="email" type="email" required autocomplete="email" /></label>
        <label>Message<textarea name="message" rows="4" required></textarea></label>
        <button class="btn" type="submit">Send</button>
      </form>`,
  },
  {
    id: "resume", label: "Résumé", tag: "Download CV", sub: "The full record",
    html: () => `
      <p class="lead">Everything on one page: experience, skills and education.</p>
      <p>Place your PDF at <code>assets/resume.pdf</code> and the button below will serve it.</p>
      <a class="btn" href="${PROFILE.resume}" download>Download résumé</a>`,
  },
];

/* Menu slots, measured from the reference menu (1280×720 frame).
   Each slot copies the baseline, angle, length and letter heights of one word in the reference:
   SKILL, ITEM, EQUIPMENT, PARTY, FOLLOWER, QUEST, CALENDAR, JOURNAL (SYSTEM dropped).
   p0 = baseline start, a = angle (deg), len = word length, cap = first-letter height, sc = small-cap height.
   CALENDAR curves in the reference, so it uses a quadratic curve instead. */
const SLOTS = [
  { p0: [214, 92],  a: 24,    len: 345, cap: 118, sc: 74 },
  { p0: [233, 268], a: 3,     len: 282, cap: 122, sc: 66 },
  { p0: [40, 360],  a: -1,    len: 532, cap: 123, sc: 74, innerCap: 6 },
  { p0: [160, 480], a: -8.5,  len: 435, cap: 120, sc: 68 },
  { p0: [45, 678],  a: -21.5, len: 588, cap: 132, sc: 72 },
  { p0: [302, 662], a: -28,   len: 322, cap: 100, sc: 58 },
  { curve: [[40, 785], [340, 770], [640, 540]], cap: 122, sc: 62 },
  { p0: [496, 718], a: -40,   len: 268, cap: 88,  sc: 54 },
];

/* =========================================================
   Content helpers
   ========================================================= */
function meter(name, v) {
  return `<div class="meter"><div class="row"><span>${name}</span><span>${v}</span></div><div class="bar"><div class="fill" style="--w:${v}%"></div></div></div>`;
}
function job(when, title, org, text) {
  return `<li><div class="when">${when}</div><h3>${title}</h3><div><em>${org}</em></div><p>${text}</p></li>`;
}
function project(n, title, text, tags, link) {
  return `<article class="card"><span class="num">${String(n).padStart(2, "0")}</span><h3>${title}</h3><p>${text}</p>
    <ul class="chips">${tags.map((t) => `<li>${t}</li>`).join("")}</ul>
    <div class="links"><a href="${link}" target="_blank" rel="noopener">Code</a><a href="${link}" target="_blank" rel="noopener">Live</a></div></article>`;
}
function hobby(title, text) {
  return `<article class="card"><h3>${title}</h3><p>${text}</p></article>`;
}

/* =========================================================
   Geometry helpers
   ========================================================= */
const NS = "http://www.w3.org/2000/svg";
const rad = (d) => (d * Math.PI) / 180;

function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Sample a slot's baseline into points with cumulative length and unit tangent.
function sampleSlot(slot, n = 80) {
  const pts = [];
  if (slot.curve) {
    const [a, b, c] = slot.curve;
    for (let i = 0; i <= n; i++) {
      const t = i / n, u = 1 - t;
      const x = u * u * a[0] + 2 * u * t * b[0] + t * t * c[0];
      const y = u * u * a[1] + 2 * u * t * b[1] + t * t * c[1];
      const tx = 2 * u * (b[0] - a[0]) + 2 * t * (c[0] - b[0]);
      const ty = 2 * u * (b[1] - a[1]) + 2 * t * (c[1] - b[1]);
      const l = Math.hypot(tx, ty);
      pts.push({ x, y, tx: tx / l, ty: ty / l });
    }
  } else {
    const tx = Math.cos(rad(slot.a)), ty = Math.sin(rad(slot.a));
    for (let i = 0; i <= n; i++) {
      const s = (slot.len * i) / n;
      pts.push({ x: slot.p0[0] + tx * s, y: slot.p0[1] + ty * s, tx, ty });
    }
  }
  let acc = 0;
  pts.forEach((p, i) => {
    if (i) acc += Math.hypot(p.x - pts[i - 1].x, p.y - pts[i - 1].y);
    p.s = acc;
  });
  return { pts, len: acc };
}

// Point (and tangent) at arc length s along a sampled baseline.
function pointAt(geo, s) {
  const pts = geo.pts;
  let k = 1;
  while (k < pts.length - 1 && pts[k].s < s) k++;
  const a = pts[k - 1], b = pts[k];
  const t = b.s > a.s ? Math.max(0, Math.min(1, (s - a.s) / (b.s - a.s))) : 0;
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, tx: a.tx + (b.tx - a.tx) * t, ty: a.ty + (b.ty - a.ty) * t };
}

function pathD(pts) {
  return pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
}

/* =========================================================
   Build the menu
   ========================================================= */
const words = document.getElementById("words");
const splats = document.getElementById("splats");
words.setAttribute("viewBox", "0 0 760 720");
splats.setAttribute("viewBox", "0 0 760 720");

let ITEMS = []; // { el, splat, geo, slot, capLen }

function fontRatios() {
  const c = document.createElement("canvas").getContext("2d");
  c.font = '900 200px "Playfair Display SC"';
  const cap = c.measureText("P").actualBoundingBoxAscent / 200;
  const sc = c.measureText("x").actualBoundingBoxAscent / 200;
  return { cap: cap || 0.71, sc: sc || 0.56, ctx: c };
}

// A rough brush-swipe polygon around a baseline. The SVG filter turns its edges into grungy paint.
function splatPolygon(geo, slot, seed) {
  const R = rng(seed);
  const { pts } = geo;
  const top = [], bot = [];
  const ext0 = slot.cap * 1.9, ext1 = slot.cap * 0.95;
  const first = pts[0], last = pts[pts.length - 1];
  const N = 14;
  for (let i = -3; i <= N + 3; i++) {
    let x, y, p;
    if (i < 0) { p = first; const k = (i / 3) * ext0; x = first.x + first.tx * k; y = first.y + first.ty * k; }
    else if (i > N) { p = last; const k = ((i - N) / 3) * ext1; x = last.x + last.tx * k; y = last.y + last.ty * k; }
    else { p = pts[Math.round((i / N) * (pts.length - 1))]; x = p.x; y = p.y; }
    const ux = p.ty, uy = -p.tx; // toward the tops of the letters
    const hT = slot.cap * (1.75 + (R() - 0.5) * 0.5);
    const hB = slot.cap * (0.85 + (R() - 0.5) * 0.4);
    top.push([x + ux * hT, y + uy * hT]);
    bot.push([x - ux * hB, y - uy * hB]);
  }
  const all = top.concat(bot.reverse());
  return "M" + all.map((q) => q[0].toFixed(1) + "," + q[1].toFixed(1)).join(" L") + "Z";
}

function buildMenu() {
  const F = fontRatios();
  words.innerHTML = `<defs>${SECTIONS.map((_, i) => `<path id="bp${i}" />`).join("")}</defs>`;
  splats.querySelectorAll(".splat").forEach((n) => n.remove());
  ITEMS = SECTIONS.map((sec, i) => {
    const slot = SLOTS[i];
    const geo = sampleSlot(slot);
    words.querySelector(`#bp${i}`).setAttribute("d", pathD(geo.pts));

    const capFs = slot.cap / F.cap;
    const scFs = slot.sc / F.sc;
    const R = rng((i + 5) * 977);

    // Natural widths, used to find where the big first letter ends (for hit testing).
    F.ctx.font = `900 ${capFs}px "Playfair Display SC"`;
    const wCap = F.ctx.measureText(sec.label[0]).width;
    F.ctx.font = `900 ${scFs}px "Playfair Display SC"`;
    const wRest = F.ctx.measureText(sec.label.slice(1).toLowerCase()).width;
    const capLen = geo.len * (wCap / (wCap + wRest));

    // Letters: big first capital, small caps for the rest. Each glyph is placed on the baseline
    // individually and squeezed horizontally so the word spans exactly the reference length.
    const letters = [...sec.label].map((ch, k) => {
      const isCap = k === 0 || slot.innerCap === k;
      const fs = k === 0 ? capFs : isCap ? capFs * 0.82 : scFs * (0.97 + R() * 0.06);
      const glyph = isCap ? ch.toUpperCase() : ch.toLowerCase();
      F.ctx.font = `900 ${fs}px "Playfair Display SC"`;
      return { glyph, fs, adv: F.ctx.measureText(glyph).width, off: k ? (R() - 0.5) * slot.sc * 0.06 : 0, rot: k ? (R() - 0.5) * 3 : 0 };
    });
    const natural = letters.reduce((a, l) => a + l.adv, 0);
    const kx = geo.len / natural;
    let sAcc = 0, spans = "";
    letters.forEach((l) => {
      const p = pointAt(geo, sAcc * kx);
      const ang = (Math.atan2(p.ty, p.tx) * 180) / Math.PI + l.rot;
      const x = p.x + p.ty * l.off * -1, y = p.y - p.tx * l.off * -1;
      spans += `<text font-size="${l.fs.toFixed(1)}" transform="translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${ang.toFixed(2)}) scale(${kx.toFixed(3)},1)">${l.glyph}</text>`;
      sAcc += l.adv;
    });

    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "word");
    const end = geo.pts[geo.pts.length - 1];
    const endAng = (Math.atan2(end.ty, end.tx) * 180) / Math.PI;
    const tagW = sec.tag.length * 9.2 + 26;
    const tagX = -tagW * 0.35;
    const ty0 = slot.sc * 0.18;
    g.innerHTML = `
      <a href="#/${sec.id}" aria-label="${sec.label}" data-i="${i}">
        ${spans}
      </a>
      <g class="tag" transform="translate(${end.x.toFixed(1)},${end.y.toFixed(1)}) rotate(${endAng.toFixed(1)})">
        <line x1="${(tagX - 50).toFixed(0)}" y1="${(ty0 + 30).toFixed(1)}" x2="${(tagX + tagW + 40).toFixed(0)}" y2="${(ty0 + 30).toFixed(1)}" />
        <rect x="${tagX.toFixed(0)}" y="${ty0.toFixed(1)}" width="${tagW.toFixed(0)}" height="27" />
        <text x="${(tagX + 13).toFixed(0)}" y="${(ty0 + 19.5).toFixed(1)}">${sec.tag}</text>
      </g>`;
    words.appendChild(g);

    const sp = document.createElementNS(NS, "g");
    sp.setAttribute("class", "splat");
    sp.innerHTML = `<path d="${splatPolygon(geo, slot, i + 11)}" fill="#000" filter="url(#paint)" />`;
    splats.appendChild(sp);

    g.querySelector("a").addEventListener("focus", () => setActive(i));
    return { el: g, splat: sp, geo, slot, capLen };
  });
  setActive(active);
}

/* =========================================================
   Hit testing: each point belongs to at most ONE word.
   A point is inside a word if it lies within that word's letter band,
   measured along its own baseline. Where two bands touch, the word whose
   centre line is nearest wins, so hitboxes never overlap.
   ========================================================= */
function hitTest(x, y) {
  let best = -1, bestScore = Infinity;
  ITEMS.forEach((it, i) => {
    const { pts, len } = it.geo;
    let bd = Infinity, bp = null, bs = 0;
    for (let k = 0; k < pts.length - 1; k++) {
      const a = pts[k], b = pts[k + 1];
      const vx = b.x - a.x, vy = b.y - a.y, L2 = vx * vx + vy * vy;
      const t = ((x - a.x) * vx + (y - a.y) * vy) / L2;
      const tc = Math.max(0, Math.min(1, t));
      const d = Math.hypot(x - (a.x + vx * tc), y - (a.y + vy * tc));
      if (d < bd) { bd = d; bp = a; bs = a.s + Math.sqrt(L2) * t; }
    }
    if (bs < -4 || bs > len + 4) return;
    const bx = bp.x + bp.tx * (bs - bp.s), by = bp.y + bp.ty * (bs - bp.s);
    const h = (x - bx) * bp.ty - (y - by) * bp.tx; // height above the baseline
    const topH = bs < it.capLen ? it.slot.cap : it.slot.sc * 1.04;
    if (h < -it.slot.sc * 0.14 || h > topH) return;
    const score = Math.abs(h - it.slot.sc / 2) / it.slot.sc;
    if (score < bestScore) { bestScore = score; best = i; }
  });
  return best;
}

let active = 0;
function setActive(i) {
  active = (i + SECTIONS.length) % SECTIONS.length;
  ITEMS.forEach((it, j) => {
    it.el.classList.toggle("active", j === active);
    it.splat.classList.toggle("on", j === active);
  });
}

const root = document.documentElement;
let MS = 1, MX = 0, MY = 0;
const isOpen = () => document.body.classList.contains("open");
const toMenu = (e) => [(e.clientX - MX) / MS, (e.clientY - MY) / MS];

window.addEventListener("pointermove", (e) => {
  if (isOpen() || !ITEMS.length) return;
  const i = hitTest(...toMenu(e));
  document.body.classList.toggle("hovering", i >= 0);
  if (i >= 0 && i !== active) setActive(i);
});
window.addEventListener("click", (e) => {
  if (isOpen() || !ITEMS.length) return;
  if (e.target.closest(".nameplate, .hints")) return;
  const i = hitTest(...toMenu(e));
  if (i >= 0) { e.preventDefault(); location.hash = `#/${SECTIONS[i].id}`; }
});

/* =========================================================
   Panel + hash routing + Q / E switching
   ========================================================= */
const panel = document.getElementById("panel");
const pTitle = document.getElementById("panel-title");
const pSub = document.getElementById("panel-sub");
const pBody = document.getElementById("panel-body");
const pSplat = panel.querySelector(".panel-splat");
const dots = document.getElementById("tab-dots");
let current = -1;

pSplat.innerHTML = `<svg viewBox="0 0 400 200" preserveAspectRatio="none"><path d="M30,60 L110,40 L200,48 L300,30 L380,52 L392,120 L340,160 L220,150 L120,172 L20,150 L6,100Z" fill="#000" filter="url(#paint)"/></svg>`;
dots.innerHTML = SECTIONS.map((s, i) => `<button type="button" aria-label="${s.label}" data-i="${i}"></button>`).join("");
dots.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) location.hash = `#/${SECTIONS[+b.dataset.i].id}`;
});

function openSection(id) {
  const i = SECTIONS.findIndex((s) => s.id === id);
  if (i < 0) return closeSection(false);
  const sec = SECTIONS[i];
  const back = current >= 0 && (i - current + SECTIONS.length) % SECTIONS.length > SECTIONS.length / 2;
  current = i;
  setActive(i);
  pTitle.innerHTML = `<span class="cap">${sec.label[0]}</span>${sec.label.slice(1).toLowerCase()}`;
  pSub.textContent = sec.sub;
  pBody.className = "panel-body";
  void pBody.offsetWidth; // restart the slide animation
  pBody.className = "panel-body" + (back ? " from-left" : "");
  pBody.innerHTML = sec.html();
  pBody.scrollTop = 0;
  document.getElementById("prev-label").textContent = SECTIONS[(i - 1 + SECTIONS.length) % SECTIONS.length].label;
  document.getElementById("next-label").textContent = SECTIONS[(i + 1) % SECTIONS.length].label;
  dots.querySelectorAll("button").forEach((b, j) => b.classList.toggle("on", j === i));
  document.body.classList.add("open");
  document.body.classList.remove("hovering");
  panel.setAttribute("aria-hidden", "false");
  setTimeout(() => pBody.focus({ preventScroll: true }), 30);
  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const body = encodeURIComponent(`${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`);
    location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Portfolio contact")}&body=${body}`;
  });
}

function closeSection(updateHash = true) {
  document.body.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  current = -1;
  if (updateHash && location.hash) history.pushState("", document.title, location.pathname + location.search);
}

// Q / E: previous / next section (inside a page), or move the menu selection.
function step(d) {
  const base = isOpen() ? current : active;
  const i = (base + d + SECTIONS.length) % SECTIONS.length;
  if (isOpen()) location.hash = `#/${SECTIONS[i].id}`;
  else setActive(i);
}

function route() {
  const m = location.hash.match(/^#\/([\w-]+)/);
  m ? openSection(m[1]) : closeSection(false);
}
window.addEventListener("hashchange", route);
document.getElementById("back").addEventListener("click", () => closeSection());
document.getElementById("prev").addEventListener("click", () => step(-1));
document.getElementById("next").addEventListener("click", () => step(1));

document.addEventListener("keydown", (e) => {
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key.toLowerCase();
  if (k === "q") { e.preventDefault(); step(-1); return; }
  if (k === "e") { e.preventDefault(); step(1); return; }
  if (e.key === "Escape" && isOpen()) { e.preventDefault(); closeSection(); return; }
  if (isOpen()) return;
  if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); setActive(active + 1); }
  else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); setActive(active - 1); }
  else if (e.key === "Enter") { e.preventDefault(); location.hash = `#/${SECTIONS[active].id}`; }
});

/* =========================================================
   Layout
   ========================================================= */
const lines = document.querySelector(".lines");

function layout() {
  const W = window.innerWidth, H = window.innerHeight;
  let hx, hy, hw, ui;
  if (W >= H * 1.05) {
    const s = Math.min(W / 1280, H / 720);
    const ox = (W - 1280 * s) / 2, oy = (H - 720 * s) / 2;
    MS = s; MX = ox; MY = oy;
    hw = 970 * s;
    hx = ox + 430 * s;
    hy = H + 18 * s - hw * (978 / 1469); // bottom edge stays below the screen while floating
    ui = Math.max(0.7, s);
  } else {
    MS = Math.min(W / 700, (H * 0.6) / 720);
    MX = (W - 700 * MS) / 2 - 20 * MS;
    MY = H - 720 * MS - 6;
    hw = W * 1.3;
    hx = W - hw * 0.97;
    hy = H * 0.05;
    ui = 0.8;
  }
  root.style.setProperty("--ms", MS.toFixed(4));
  root.style.setProperty("--mx", MX.toFixed(1) + "px");
  root.style.setProperty("--my", MY.toFixed(1) + "px");
  root.style.setProperty("--ui", ui.toFixed(3));
  root.style.setProperty("--heroW", hw.toFixed(1) + "px");
  root.style.setProperty("--heroX", hx.toFixed(1) + "px");
  root.style.setProperty("--heroY", hy.toFixed(1) + "px");
  drawLines(W, H, hx, hy, hw);
}

/* Thin, faded white lines: giant circles around the head, a long diagonal and a dashed crosshair. */
function drawLines(W, H, hx, hy, hw) {
  const hh = hw * (978 / 1469);
  const cx = hx + hw * 0.34, cy = hy + hh * 0.53;
  const R1 = hw * 0.52, R2 = hw * 0.34, R3 = hw * 0.74;
  const ex = hx + hw * 0.485, ey = hy + hh * 0.241;
  const diag = { x1: hx + hw * 0.02, y1: H + 20, x2: W + 20, y2: hy + hh * 0.08 };
  const hzY = hy + hh * 0.5, vX = Math.min(W - 40, hx + hw * 0.92);
  const fade = Math.max(W, H);
  lines.setAttribute("viewBox", `0 0 ${W} ${H}`);
  lines.innerHTML = `
    <defs>
      <radialGradient id="lineFade" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${cy}" r="${fade * 0.75}">
        <stop offset="0" stop-color="#fff" stop-opacity="1"/>
        <stop offset=".55" stop-color="#fff" stop-opacity=".7"/>
        <stop offset="1" stop-color="#fff" stop-opacity="0"/>
      </radialGradient>
      <mask id="lineMask"><rect width="${W}" height="${H}" fill="url(#lineFade)"/></mask>
    </defs>
    <g mask="url(#lineMask)">
      <g class="spin" style="transform-origin:${cx}px ${cy}px">
        <circle class="l" cx="${cx}" cy="${cy}" r="${R1}" stroke-opacity=".45" stroke-width="1.1"/>
        <circle class="l" cx="${cx}" cy="${cy}" r="${R1 + 6}" stroke-opacity=".16" stroke-dasharray="2 10"/>
      </g>
      <circle class="l" cx="${cx}" cy="${cy}" r="${R2}" stroke-opacity=".22"/>
      <g class="spin rev" style="transform-origin:${cx}px ${cy}px">
        <circle class="l" cx="${cx}" cy="${cy}" r="${R3}" stroke-opacity=".28" stroke-dasharray="${R3 * 2.4} ${R3 * 0.8}"/>
      </g>
      <circle class="l" cx="${ex}" cy="${ey}" r="${hw * 0.24}" stroke-opacity=".18"/>
      <line class="l" x1="${diag.x1}" y1="${diag.y1}" x2="${diag.x2}" y2="${diag.y2}" stroke-opacity=".5" stroke-width="1.1"/>
      <line class="l" x1="${diag.x1 + 14}" y1="${diag.y1}" x2="${diag.x2 + 14}" y2="${diag.y2}" stroke-opacity=".14"/>
      <line class="l" x1="${hx + hw * 0.6}" y1="${hzY}" x2="${W}" y2="${hzY}" stroke-opacity=".4"/>
      <line class="l" x1="${hx + hw * 0.6}" y1="${hzY + 4}" x2="${W}" y2="${hzY + 4}" stroke-opacity=".26" stroke-dasharray="14 6 2 6"/>
      <line class="l" x1="${vX}" y1="${Math.max(120, hy)}" x2="${vX}" y2="${hzY + 30}" stroke-opacity=".34" stroke-dasharray="40 8 4 8"/>
      <line class="l" x1="${vX - 10}" y1="${hzY}" x2="${vX + 10}" y2="${hzY}" stroke-opacity=".75" stroke-width="1.4"/>
    </g>`;
}

window.addEventListener("resize", layout);
layout();

// Build the menu once the display font is ready (its metrics size every word).
(document.fonts && document.fonts.load ? document.fonts.load('900 100px "Playfair Display SC"') : Promise.resolve())
  .catch(() => {})
  .then(() => { buildMenu(); route(); });
