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
  { p0: [519.8, 88.1], a: 21, len: 279, cap: 77, sc: 50, taper: 0.88 },
  { p0: [357.1, 124.9], a: 14.5, len: 279, cap: 89, sc: 55, taper: 0.86 },
  { p0: [95.8, 209.9], a: 6.5, len: 521, cap: 118, sc: 72, taper: 0.82 },
  { p0: [201.3, 354.8], a: -1.5, len: 409, cap: 97, sc: 66, taper: 0.84 },
  { p0: [140, 499], a: -9.5, len: 484, cap: 114, sc: 64, taper: 0.8 },
  { p0: [340, 577.6], a: -17, len: 307, cap: 84, sc: 52, taper: 0.84 },
  { p0: [368, 678.2], a: -24, len: 316, cap: 84, sc: 50, taper: 0.84 },
  { p0: [549.7, 697.8], a: -31.5, len: 260, cap: 71, sc: 44, taper: 0.85 },
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
const canvas = document.getElementById("splats");
const ctx = canvas.getContext("2d");
words.setAttribute("viewBox", "0 0 760 720");

const FONT = '"Abril Fatface"';
const HOVER_SCALE = 1.14;   // the selected word grows, like EQUIPMENT in the reference
const GAP = 0.13;            // how far neighbours move apart, as a fraction of the selected word's cap height

/* The hover splash is the exact shape and colour of the reference splash (assets/splat.png).
   In that image the selected word's baseline starts at (495, 685), runs at 4.3° and is 960 px long,
   with a 235 px tall first capital. The splash is bent along each word's own baseline, extended back
   to the left edge of the screen, and painted in with a single brush stroke. */
const SPLAT = { w: 1616, h: 1337, ax: 495, ay: 685, ang: 4.3, len: 960, cap: 235 };
/* The splash "boils" like the reference: its core stays put while its edges and drips change shape
   about 14 times a second, in steps (assets/splat0-5.png are edge variations of the same splash). */
const BOIL_MS = 70;
const FLATS = [];
const FLAT = { canvas: null, ax: 0, ay: 0, w: 0, h: 0 };
function flatten(img) {
  // Pre-rotate the splash so its baseline is horizontal; that makes bending it along a curve simple.
  const pad = 160, c = document.createElement("canvas");
  c.width = SPLAT.w + pad * 2; c.height = SPLAT.h + pad * 2;
  const g = c.getContext("2d");
  g.translate(SPLAT.ax + pad, SPLAT.ay + pad);
  g.rotate((-SPLAT.ang * Math.PI) / 180);
  g.drawImage(img, -SPLAT.ax, -SPLAT.ay);
  return c;
}
for (let v = 0; v < 6; v++) {
  const img = new Image();
  img.onload = () => {
    FLATS[v] = flatten(img);
    if (!FLAT.canvas) {
      Object.assign(FLAT, { canvas: FLATS[v], ax: SPLAT.ax + 160, ay: SPLAT.ay + 160, w: SPLAT.w + 320, h: SPLAT.h + 320 });
      startStroke(true);
    }
  };
  img.src = `assets/splat${v}.png`;
}
let boilIdx = 0, boilStep = -1;
function boilFrame(now) {
  const step = Math.floor(now / BOIL_MS);
  if (step !== boilStep) {
    boilStep = step;
    const ready = FLATS.filter(Boolean);
    if (ready.length > 1) { let n; do { n = Math.floor(Math.random() * ready.length); } while (ready[n] === FLAT.canvas); FLAT.canvas = ready[n]; }
  }
}

let ITEMS = []; // { el, tagEl, geo, slot, capLen, origin, dx, dy, scale }

function fontRatios() {
  const c = document.createElement("canvas").getContext("2d");
  c.font = `400 200px ${FONT}`;
  const cap = c.measureText("P").actualBoundingBoxAscent / 200;
  return { cap: cap || 0.72, ctx: c };
}

function buildMenu() {
  const F = fontRatios();
  words.innerHTML = `<g class="word-layer"></g><g class="tag-layer"></g>`;
  const wordLayer = words.firstChild, tagLayer = words.lastChild; // tags sit above every word
  ITEMS = SECTIONS.map((sec, i) => {
    const slot = SLOTS[i];
    const geo = sampleSlot(slot);
    const capFs = slot.cap / F.cap;
    const scFs = slot.sc / F.cap; // small caps are capitals set smaller
    const R = rng((i + 5) * 977);

    // Letters: big first capital, smaller capitals for the rest. Each glyph is placed on the baseline
    // individually and squeezed horizontally so the word spans exactly the reference length.
    const nL = sec.label.length;
    const letters = [...sec.label].map((ch, k) => {
      // taper: letters shrink toward the end of the word, giving the fan its 3D depth
      const tp = nL > 2 ? 1 + ((slot.taper || 1) - 1) * ((k - 1) / (nL - 2)) : 1;
      const fs = k === 0 ? capFs : scFs * tp * (0.97 + R() * 0.06);
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

    const end = geo.pts[geo.pts.length - 1];
    const endAng = (Math.atan2(end.ty, end.tx) * 180) / Math.PI;
    const tagW = sec.tag.length * 9.6 + 28;
    const tagX = -tagW * 0.6;
    const ty0 = slot.sc * 0.2;

    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "word");
    g.innerHTML = `<a href="#/${sec.id}" aria-label="${sec.label}" data-i="${i}">${glyphs}</a>`;
    wordLayer.appendChild(g);

    const t = document.createElementNS(NS, "g");
    t.setAttribute("class", "tagwrap");
    t.innerHTML = `
      <g class="tag" transform="translate(${end.x.toFixed(1)},${end.y.toFixed(1)}) rotate(${endAng.toFixed(1)})">
        <rect x="${tagX.toFixed(0)}" y="${ty0.toFixed(1)}" width="${tagW.toFixed(0)}" height="28" transform="skewX(-8)" />
        <text x="${(tagX + 12).toFixed(0)}" y="${(ty0 + 20.5).toFixed(1)}">${sec.tag}</text>
      </g>`;
    tagLayer.appendChild(t);

    const mid = pointAt(geo, geo.len / 2);
    const origin = [mid.x + mid.ty * slot.sc * 0.5, mid.y - mid.tx * slot.sc * 0.5]; // grow from the word's centre
    [g, t].forEach((n) => (n.style.transformOrigin = `${origin[0].toFixed(1)}px ${origin[1].toFixed(1)}px`));
    g.querySelector("a").addEventListener("focus", () => setActive(i));
    return { el: g, tagEl: t, geo, slot, capLen, origin, dx: 0, dy: 0, scale: 1 };
  });
  setActive(active, true);
}

/* ---------- Painted splash ---------- */
// Point and tangent at arc length s, extending the baseline straight past both ends.
function pathAt(geo, s) {
  const pts = geo.pts;
  if (s <= 0) { const p = pts[0]; return { x: p.x + p.tx * s, y: p.y + p.ty * s, tx: p.tx, ty: p.ty }; }
  if (s >= geo.len) { const p = pts[pts.length - 1]; const d = s - geo.len; return { x: p.x + p.tx * d, y: p.y + p.ty * d, tx: p.tx, ty: p.ty }; }
  return pointAt(geo, s);
}

// Column of the flattened splash to use at arc length s. Past the left of the image the band repeats (mirrored).
function splashU(s, kx) {
  let u = FLAT.ax + s / kx;
  const right = FLAT.ax - 30, period = 240;
  if (u < right - period) {
    const d = (right - u) % (period * 2);
    u = right - (d < period ? d : period * 2 - d);
  }
  return u;
}

let stroke = { item: -1, t0: 0, from: 1 };
let raf = 0;

function startStroke(instant = false) {
  stroke = { item: active, t0: performance.now() - (instant ? 1e4 : 0), from: ITEMS[active] ? ITEMS[active].scaleFrom || 1 : 1 };
  if (!raf) raf = requestAnimationFrame(frame);
}

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

function frame(now) {
  raf = 0;
  const dpr = window.devicePixelRatio || 1;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const it = ITEMS[stroke.item];
  if (!it || !FLAT.canvas || isOpen()) return;
  boilFrame(now);
  const dur = 460;
  const p = Math.min(1, (now - stroke.t0) / dur);
  const e = easeOut(p);

  ctx.setTransform(dpr * MS, 0, 0, dpr * MS, dpr * MX, dpr * MY);
  // grow with the word (same timing as its CSS transition)
  const sc = 1 + (HOVER_SCALE - 1) * Math.min(1, easeOut(Math.min(1, (now - stroke.t0) / 320)));
  const kT = Math.min(1, easeOut(Math.min(1, (now - stroke.t0) / 320)));
  ctx.translate(it.dx * kT, it.dy * kT);
  ctx.translate(it.origin[0], it.origin[1]); ctx.scale(sc, sc); ctx.translate(-it.origin[0], -it.origin[1]);

  const geo = it.geo, kx = geo.len / SPLAT.len, ky = it.slot.cap / SPLAT.cap;
  // The stroke starts where the baseline leaves the left (or top) of the screen.
  let sStart = 0;
  while (sStart > -2500) {
    const q = pathAt(geo, sStart);
    if (q.x < -40 - it.slot.cap || q.y < -60 - it.slot.cap * 2) break;
    sStart -= 20;
  }
  const sEnd = (FLAT.w - FLAT.ax) * kx;
  const sCut = sStart + e * (sEnd - sStart);
  const ds = 5, head = 46;

  for (let s = sStart; s < sCut; s += ds) {
    const q = pathAt(geo, s);
    const u = splashU(s, kx);
    const du = ds / kx;
    // the brush head: thinner and lighter right at the leading edge
    const k = Math.min(1, (sCut - s) / head);
    const hScale = p < 1 ? 0.55 + 0.45 * Math.sqrt(k) : 1;
    ctx.save();
    ctx.translate(q.x, q.y);
    ctx.rotate(Math.atan2(q.ty, q.tx));
    ctx.globalAlpha = p < 1 ? 0.5 + 0.5 * k : 1;
    ctx.scale(1, hScale);
    ctx.drawImage(FLAT.canvas, u, 0, Math.max(1, du), FLAT.h, 0, -FLAT.ay * ky, ds + 0.9, FLAT.h * ky);
    ctx.restore();
  }
  raf = requestAnimationFrame(frame); // keep boiling while the menu is visible
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(window.innerWidth * dpr);
  canvas.height = Math.round(window.innerHeight * dpr);
  if (!raf) raf = requestAnimationFrame(frame);
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
  const tp = 1 + ((it.slot.taper || 1) - 1) * Math.max(0, Math.min(1, bs / len));
  const topH = bs < it.capLen ? it.slot.cap : it.slot.sc * 1.04 * tp;
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
function setActive(i, instant = false) {
  const prev = active;
  active = (i + SECTIONS.length) % SECTIONS.length;
  const A = ITEMS[active];
  ITEMS.forEach((it, j) => {
    const on = j === active;
    it.el.classList.toggle("active", on);
    it.tagEl.classList.toggle("active", on);
    // Open up space: the selected word grows, nearby words above move up and below move down
    // (each along its own "up" direction, so the fan keeps its shape).
    let dx = 0, dy = 0;
    if (A && !on) {
      const d = Math.abs(j - active);
      const fall = j < active ? 1 : -1; // the whole group above / below moves together, so nothing collides
      const p = it.geo.pts[Math.floor(it.geo.pts.length / 2)];
      const dist = A.slot.cap * GAP * fall;
      dx = p.ty * dist; dy = -p.tx * dist;
    }
    if (on && (j === 0 || j === ITEMS.length - 1)) {
      // the first / last word nudges inward as it grows, so it never leaves the screen
      const p = it.geo.pts[Math.floor(it.geo.pts.length / 2)];
      const dist = it.slot.cap * (HOVER_SCALE - 1) * 0.9 * (j === 0 ? -1 : 1);
      dx = p.ty * dist; dy = -p.tx * dist;
    }
    it.dx = dx; it.dy = dy; it.scale = on ? HOVER_SCALE : 1;
    const tf = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)` + (on ? ` scale(${HOVER_SCALE})` : "");
    it.el.style.transform = tf;
    it.tagEl.style.transform = tf;
  });
  if (ITEMS.length && (prev !== active || instant)) startStroke(instant);
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

pSplat.innerHTML = `<img src="assets/splat0.png" alt="" />`;
// the title splash boils too, by swapping between the same edge variations
setInterval(() => {
  if (!isOpen()) return;
  pSplat.querySelector("img").src = `assets/splat${Math.floor(Math.random() * 6)}.png`;
}, BOIL_MS);
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
  if (ITEMS.length) startStroke();
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

function layout() {
  const W = window.innerWidth, H = window.innerHeight;
  let hx, hy, hw, ui;
  if (W >= H * 1.05) {
    const s = Math.min(W / 1280, H / 720);
    const ox = (W - 1280 * s) / 2, oy = (H - 720 * s) / 2;
    MS = s; MX = ox; MY = oy;
    hw = 1036 * s;
    hx = Math.max(ox + 363 * s, W - hw + 2); // the body always reaches the right edge of the screen
    hy = H + 26 * s - hw * (1001 / 1570); // bottom edge stays below the screen while floating
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
  resizeCanvas();
}

window.addEventListener("resize", layout);
layout();

// Build the menu once the display font is ready (its metrics size every word).
(document.fonts && document.fonts.load ? Promise.all([document.fonts.load('400 100px "Abril Fatface"'), document.fonts.load('900 100px "Playfair Display SC"')]) : Promise.resolve())
  .catch(() => {})
  .then(() => { buildMenu(); route(); });
