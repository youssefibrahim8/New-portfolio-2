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
  { p0: [222, 104], a: 24,    len: 300, cap: 102, sc: 64 },
  { p0: [233, 268], a: 3,     len: 282, cap: 122, sc: 66 },
  { p0: [40, 360],  a: -1,    len: 532, cap: 123, sc: 74 },
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

const FONT = '"Abril Fatface"';
const HOVER_SCALE = 1.18;   // the selected word grows, like EQUIPMENT in the reference
const GAP = 0.34;           // how far neighbours move apart, as a fraction of the selected word's cap height

/* The hover splatter is the exact shape and colour of the reference splash (assets/splat.png).
   In that image the selected word's baseline starts at (495, 685), runs at 4.3° and is 960 px long,
   with a 235 px tall first capital. Each word maps its own baseline onto that one. */
const SPLAT = { w: 1616, h: 1337, ax: 495, ay: 685, ang: 4.3, len: 960, cap: 235 };

let ITEMS = []; // { el, splat, geo, slot, capLen, origin, dx, dy, scale }

function fontRatios() {
  const c = document.createElement("canvas").getContext("2d");
  c.font = `400 200px ${FONT}`;
  const cap = c.measureText("P").actualBoundingBoxAscent / 200;
  return { cap: cap || 0.72, ctx: c };
}

function buildMenu() {
  const F = fontRatios();
  words.innerHTML = "";
  splats.querySelectorAll(".splat").forEach((n) => n.remove());
  ITEMS = SECTIONS.map((sec, i) => {
    const slot = SLOTS[i];
    const geo = sampleSlot(slot);
    const capFs = slot.cap / F.cap;
    const scFs = slot.sc / F.cap; // small caps are capitals set smaller
    const R = rng((i + 5) * 977);

    // Letters: big first capital, smaller capitals for the rest. Each glyph is placed on the baseline
    // individually and squeezed horizontally so the word spans exactly the reference length.
    const letters = [...sec.label].map((ch, k) => {
      const isCap = k === 0 || slot.innerCap === k;
      const fs = k === 0 ? capFs : isCap ? capFs * 0.82 : scFs * (0.97 + R() * 0.06);
      const glyph = ch.toUpperCase();
      F.ctx.font = `400 ${fs}px ${FONT}`;
      return { glyph, fs, adv: F.ctx.measureText(glyph).width, off: k ? (R() - 0.5) * slot.sc * 0.06 : 0, rot: k ? (R() - 0.5) * 3 : 0 };
    });
    const natural = letters.reduce((a, l) => a + l.adv, 0);
    const kx = geo.len / natural;
    const capLen = letters[0].adv * kx;
    let sAcc = 0, glyphs = "";
    letters.forEach((l) => {
      const p = pointAt(geo, sAcc * kx);
      const ang = (Math.atan2(p.ty, p.tx) * 180) / Math.PI + l.rot;
      const x = p.x - p.ty * l.off, y = p.y + p.tx * l.off;
      glyphs += `<text font-size="${l.fs.toFixed(1)}" transform="translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${ang.toFixed(2)}) scale(${kx.toFixed(3)},1)">${l.glyph}</text>`;
      sAcc += l.adv;
    });

    const first = geo.pts[0];
    const startAng = (Math.atan2(first.ty, first.tx) * 180) / Math.PI;
    const end = geo.pts[geo.pts.length - 1];
    const endAng = (Math.atan2(end.ty, end.tx) * 180) / Math.PI;
    const tagW = sec.tag.length * 9.6 + 28;
    const tagX = -tagW * 0.6;
    const ty0 = slot.sc * 0.2;

    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "word");
    g.innerHTML = `
      <a href="#/${sec.id}" aria-label="${sec.label}" data-i="${i}">${glyphs}</a>
      <g class="tag" transform="translate(${end.x.toFixed(1)},${end.y.toFixed(1)}) rotate(${endAng.toFixed(1)})">
        <rect x="${tagX.toFixed(0)}" y="${ty0.toFixed(1)}" width="${tagW.toFixed(0)}" height="28" transform="skewX(-8)" />
        <text x="${(tagX + 12).toFixed(0)}" y="${(ty0 + 20.5).toFixed(1)}">${sec.tag}</text>
      </g>`;
    words.appendChild(g);

    // Splatter: map the reference baseline onto this word's baseline (length -> x, cap height -> y).
    const sx = geo.len / SPLAT.len, sy = slot.cap / SPLAT.cap;
    const sp = document.createElementNS(NS, "g");
    sp.setAttribute("class", "splat");
    sp.innerHTML = `<image href="assets/splat.png" width="${SPLAT.w}" height="${SPLAT.h}" preserveAspectRatio="none"
      transform="translate(${first.x.toFixed(1)},${first.y.toFixed(1)}) rotate(${(startAng - SPLAT.ang).toFixed(2)}) scale(${sx.toFixed(4)},${sy.toFixed(4)}) translate(${-SPLAT.ax},${-SPLAT.ay})" />`;
    splats.appendChild(sp);

    const mid = pointAt(geo, geo.len / 2);
    const origin = [mid.x + mid.ty * slot.sc * 0.5, mid.y - mid.tx * slot.sc * 0.5]; // grow from the word's centre
    [g, sp].forEach((n) => (n.style.transformOrigin = `${origin[0].toFixed(1)}px ${origin[1].toFixed(1)}px`));
    g.querySelector("a").addEventListener("focus", () => setActive(i));
    return { el: g, splat: sp, geo, slot, capLen, origin, dx: 0, dy: 0, scale: 1 };
  });
  setActive(active);
}

/* =========================================================
   Hit testing: each point belongs to at most ONE word.
   The pointer is mapped back through each word's current offset / scale,
   then tested against that word's letter band along its own baseline.
   Where two bands touch, the nearest centre line wins, so hitboxes never overlap.
   ========================================================= */
function bandScore(it, x, y, pad = 0) {
  // undo the word's current hover transform
  x -= it.dx; y -= it.dy;
  if (it.scale !== 1) { x = it.origin[0] + (x - it.origin[0]) / it.scale; y = it.origin[1] + (y - it.origin[1]) / it.scale; }
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
  const padS = pad * it.slot.sc;
  if (bs < -4 - padS || bs > len + 4 + padS) return Infinity;
  const bx = bp.x + bp.tx * (bs - bp.s), by = bp.y + bp.ty * (bs - bp.s);
  const h = (x - bx) * bp.ty - (y - by) * bp.tx; // height above the baseline
  const topH = bs < it.capLen ? it.slot.cap : it.slot.sc * 1.04;
  if (h < -it.slot.sc * 0.14 - padS || h > topH + padS) return Infinity;
  return Math.abs(h - it.slot.sc / 2) / it.slot.sc;
}

function hitTest(x, y) {
  let best = -1, bestScore = Infinity;
  ITEMS.forEach((it, i) => {
    const s = bandScore(it, x, y);
    if (s < bestScore) { bestScore = s; best = i; }
  });
  return best;
}

let active = 0;
function setActive(i) {
  active = (i + SECTIONS.length) % SECTIONS.length;
  const A = ITEMS[active];
  ITEMS.forEach((it, j) => {
    const on = j === active;
    it.el.classList.toggle("active", on);
    it.splat.classList.toggle("on", on);
    // Open up space: the selected word grows, words above move up, words below move down
    // (each along its own "up" direction, so the fan keeps its shape).
    let dx = 0, dy = 0;
    if (A && !on) {
      const p = it.geo.pts[Math.floor(it.geo.pts.length / 2)];
      const dist = A.slot.cap * GAP * (j < active ? 1 : -1);
      dx = p.ty * dist; dy = -p.tx * dist;
    }
    it.dx = dx; it.dy = dy; it.scale = on ? HOVER_SCALE : 1;
    const tf = on ? `scale(${HOVER_SCALE})` : `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
    it.el.style.transform = tf;
    it.splat.style.transform = on ? `scale(${HOVER_SCALE})` : "";
  });
}

const root = document.documentElement;
let MS = 1, MX = 0, MY = 0;
const isOpen = () => document.body.classList.contains("open");
const toMenu = (e) => [(e.clientX - MX) / MS, (e.clientY - MY) / MS];
let hovering = false;

window.addEventListener("pointermove", (e) => {
  if (isOpen() || !ITEMS.length) return;
  const [x, y] = toMenu(e);
  // Keep the current selection while the pointer is still on it (its hitbox grew with it),
  // so the words moving apart never makes the selection flicker.
  const stay = ITEMS[active] && bandScore(ITEMS[active], x, y, 0.55) < Infinity;
  const i = stay ? active : hitTest(x, y);
  hovering = i >= 0;
  document.body.classList.toggle("hovering", hovering);
  if (i >= 0 && i !== active) setActive(i);
});
window.addEventListener("click", (e) => {
  if (isOpen() || !ITEMS.length) return;
  if (e.target.closest(".nameplate, .hints")) return;
  const [x, y] = toMenu(e);
  // Open whatever is highlighted under the cursor (touch: whatever was tapped).
  const i = hovering || (ITEMS[active] && bandScore(ITEMS[active], x, y, 0.55) < Infinity) ? active : hitTest(x, y);
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

pSplat.innerHTML = `<img src="assets/splat.png" alt="" />`;
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
  pTitle.innerHTML = `${sec.label[0].toUpperCase()}<span class="small">${sec.label.slice(1).toUpperCase()}</span>`;
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
  requestAnimationFrame(placePanelSplat);
  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const body = encodeURIComponent(`${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`);
    location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Portfolio contact")}&body=${body}`;
  });
}

// Map the reference splash onto the panel title the same way it maps onto a menu word.
function placePanelSplat() {
  const img = pSplat.querySelector("img");
  const tw = pTitle.offsetWidth * 0.8;              // title is squeezed with scaleX(.8)
  const fs = parseFloat(getComputedStyle(pTitle).fontSize);
  const cap = fs * 0.72, base = pTitle.offsetHeight * 0.86;
  const sx = tw / SPLAT.len, sy = (cap * 1.15) / SPLAT.cap;
  Object.assign(img.style, {
    width: SPLAT.w * sx + "px", height: SPLAT.h * sy + "px",
    left: -SPLAT.ax * sx + "px", top: base - SPLAT.ay * sy + "px",
  });
}
window.addEventListener("resize", () => isOpen() && placePanelSplat());

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
    hw = 1036 * s;
    hx = ox + 363 * s;
    hy = H + 18 * s - hw * (1001 / 1570); // bottom edge stays below the screen while floating
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
  const hh = hw * (1001 / 1570);
  const cx = hx + hw * 0.38, cy = hy + hh * 0.52;
  const R1 = hw * 0.52, R2 = hw * 0.34, R3 = hw * 0.74;
  const ex = hx + hw * 0.518, ey = hy + hh * 0.266;
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
(document.fonts && document.fonts.load ? Promise.all([document.fonts.load('400 100px "Abril Fatface"'), document.fonts.load('900 100px "Playfair Display SC"')]) : Promise.resolve())
  .catch(() => {})
  .then(() => { buildMenu(); route(); });
