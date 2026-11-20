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
    html: () => projectsTree(),
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
   PROJECTS: the "archetype tree" view.
   A drawn figure inside a circle, on a honeycomb of hexagons. Each project sits in one hexagon.
   Clicking a project's hexagon enlarges it, flies it to the top left and opens that project's page;
   Esc (or Back) returns to the tree.
   Edit your projects here. `cell` is the hexagon the project sits in: [column, row] from the centre.
   ========================================================= */
const PROJECTS = [
  {
    slug: "command-menu", title: "Command Menu Portfolio", year: "2026", kind: "Web", icon: "code", hex: [866, 294],
    tags: ["HTML", "CSS", "JavaScript", "Canvas"],
    summary: "This site: an RPG-style command menu with painted hovers and a floating character.",
    details: [
      "A portfolio built to feel like a game's command menu. Every option is fitted along a fan around the character's head, and hovering paints a splash in with a single brush stroke along the word.",
      "Opening a page plays a frame-by-frame recreation of a menu transition: letters scatter, the splash breaks apart and a white band sweeps in over the next page.",
      "Built with plain HTML, CSS and JavaScript, with no frameworks or build step.",
    ],
    code: "https://github.com/youssefibrahim8/New-portfolio-2", live: "",
  },
  {
    slug: "project-two", title: "Project Two", year: "20XX", kind: "Java", icon: "coffee", hex: [791, 537],
    tags: ["Java"],
    summary: "A short, punchy description of what it does and the problem it solves.",
    details: ["Describe the project: what it does, why you built it and what you learned.", "Mention the hardest technical problem and how you solved it."],
    code: "#", live: "",
  },
  {
    slug: "project-three", title: "Project Three", year: "20XX", kind: "Python", icon: "terminal", hex: [699, 640],
    tags: ["Python"],
    summary: "Highlight the most interesting technical challenge or result here.",
    details: ["Describe the project: what it does, why you built it and what you learned.", "Add numbers if you have them: users, speed-ups, accuracy, stars."],
    code: "#", live: "",
  },
  {
    slug: "project-four", title: "Project Four", year: "20XX", kind: "C++", icon: "chip", hex: [950, 746],
    tags: ["C++"],
    summary: "Another project worth showing off, ideally with a live demo link.",
    details: ["Describe the project: what it does, why you built it and what you learned."],
    code: "#", live: "",
  },
];

const ICONS = {
  code: '<path d="M8 6 2 12l6 6M16 6l6 6-6 6M14 4l-4 16"/>',
  coffee: '<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 10h2a3 3 0 0 1 0 6h-2M8 2v4M12 2v4"/>',
  terminal: '<path d="M3 4h18v16H3zM7 9l3 3-3 3M12 15h5"/>',
  chip: '<path d="M7 7h10v10H7zM10 10h4v4h-4zM9 2v5M15 2v5M9 17v5M15 17v5M2 9h5M2 15h5M17 9h5M17 15h5"/>',
  globe: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20"/>',
  game: '<path d="M6 8h12a4 4 0 0 1 4 4v1a4 4 0 0 1-7 2.6L14 15h-4l-1 .6A4 4 0 0 1 2 13v-1a4 4 0 0 1 4-4zM7 11v3M5.5 12.5h3M16 12h.01M18 14h.01"/>',
};
const iconSVG = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[k] || ICONS.code}</svg>`;

// The projects screen uses the reference artwork (1672 x 941, inside assets/projects-bg-wide.jpg) as its background.
// Each project sits on one of the hexagons drawn in it; `hex` is that hexagon's centre in the image.
const PBG = { w: 1672, h: 941, hexW: 60 };
const pbg = document.createElement("div");
pbg.className = "pbg";
const pnodes = document.createElement("div");
pnodes.className = "pnodes";
document.body.append(pbg, pnodes);

// Fit the artwork: cover the screen on landscape; on portrait, shrink it so its hexagons sit below the project list.
function pbgFit() {
  const W = window.innerWidth, H = window.innerHeight;
  if (W >= H) {
    // the circle (image y 21-891, centre x 835) fills 74% of the screen height, below the title
    const s = (H * 0.72) / 870;
    return { s, ox: W / 2 - 835 * s, oy: H * 0.215 - 21 * s };
  }
  const s = Math.min((H * 0.4) / 452, W / 300);   // the project hexagons span 452 px of the image vertically
  return { s, ox: W / 2 - 825 * s, oy: H * 0.55 - 520 * s };
}
function placeNodes() {
  const { s, ox, oy } = pbgFit();
  // the background is the artwork extended outward with its own texture (projects-bg-wide.jpg: the original
  // sits 1000 px in from the left and 560 px down, in a 3672 x 2061 frame), so it always fills the screen
  Object.assign(pbg.style, { left: ox - 1000 * s + "px", top: oy - 560 * s + "px", width: 3672 * s + "px", height: 2061 * s + "px" });
  pnodes.querySelectorAll(".pnode").forEach((el) => {
    const p = PROJECTS[+el.dataset.k];
    Object.assign(el.style, { left: ox + p.hex[0] * s + "px", top: oy + p.hex[1] * s + "px", width: PBG.hexW * s + "px" });
  });
}
window.addEventListener("resize", placeNodes);

// The tree screen is just the artwork and its hexagons (the buttons live in .pnodes, over everything).
function projectsTree() {
  return `<div class="ptree"></div>`;
}

// Projects mode: artwork background on, character / lines off. Hexagon buttons only on the tree.
function setProjectsMode(on, tree) {
  document.body.classList.toggle("pmode", on);
  if (on) placeNodes();
  document.body.classList.toggle("ptree-on", on && tree);
  if (!on || !tree) pnodes.innerHTML = "";
}

function projectDetail(p) {
  const links = [p.code && `<a class="btn" href="${p.code}" target="_blank" rel="noopener">View code</a>`, p.live && `<a class="btn" href="${p.live}" target="_blank" rel="noopener">Live demo</a>`].filter(Boolean).join(" ");
  return `<div class="pdetail">
    <div class="pd-hex"><span class="hexb lg"><span class="hexi">${iconSVG(p.icon)}</span></span></div>
    <div class="pd-info">
      <div class="pd-kind">${p.kind} · ${p.year}</div>
      <h2 class="pd-title">${p.title}</h2>
      <p class="lead">${p.summary}</p>
      ${p.details.map((t) => `<p>${t}</p>`).join("")}
      <ul class="chips">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
      <div class="pd-links">${links}</div>
    </div>
  </div>`;
}

let projectView = null; // null (not on projects), "" (tree) or a project slug
function renderProjects(sub) {
  const p = PROJECTS.find((q) => q.slug === sub);
  const prev = projectView;
  const fromRect = (() => {
    const el = p ? pnodes.querySelector(`.pnode[data-p="${p.slug}"]`) : pBody.querySelector(".pd-hex .hexb");
    return el ? el.getBoundingClientRect() : null;
  })();
  projectView = p ? p.slug : "";
  pBody.classList.add("bare");
  pBody.innerHTML = p ? projectDetail(p) : projectsTree();
  setProjectsMode(true, !p);
  if (!p) {
    pnodes.innerHTML = PROJECTS.map((q, k) => `<button class="pnode" type="button" data-p="${q.slug}" data-k="${k}" aria-label="${q.title}" title="${q.title}"><span class="hexring"></span></button>`).join("");
    placeNodes();
  }
  pSub.textContent = p ? `Project · ${p.title}` : SECTIONS[current].sub;
  fitTitle();

  if (p) {
    // fly the clicked hexagon to the top left, growing as it goes
    const target = pBody.querySelector(".pd-hex .hexb");
    if (fromRect && prev === "") flyHex(fromRect, target, p);
    pBody.querySelector(".pd-info").animate([{ opacity: 0, transform: "translateX(24px)" }, { opacity: 1, transform: "none" }], { duration: 420, delay: 180, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" });
    return;
  }
  // tree: clicking a hexagon opens its project
  pnodes.querySelectorAll(".pnode").forEach((el) => el.addEventListener("click", () => (location.hash = `#/projects/${el.dataset.p}`)));
  // coming back from a project: fly its hexagon home
  if (prev && fromRect) {
    const k = PROJECTS.findIndex((q) => q.slug === prev);
    const target = pnodes.querySelector(`.pnode[data-k="${k}"]`);
    if (target) flyHex(fromRect, target, PROJECTS[k]);
  }
}

function flyHex(from, targetEl, p) {
  const to = targetEl.getBoundingClientRect();
  const ghost = document.createElement("span");
  ghost.className = "hexb hex-ghost";
  ghost.innerHTML = `<span class="hexi">${iconSVG(p.icon)}</span>`;
  Object.assign(ghost.style, { left: to.left + "px", top: to.top + "px", width: to.width + "px", height: to.height + "px" });
  document.body.appendChild(ghost);
  targetEl.style.visibility = "hidden";
  const sx = from.width / to.width, dx = from.left - to.left, dy = from.top - to.top;
  ghost.animate([
    { transform: `translate(${dx}px, ${dy}px) scale(${sx})` },
    { transform: `translate(${dx * 0.35}px, ${dy * 0.35}px) scale(${sx + (1 - sx) * 0.4 + 0.12})`, offset: 0.55 },
    { transform: "none" },
  ], { duration: 520, easing: "cubic-bezier(.3,.7,.2,1)" }).onfinish = () => { targetEl.style.visibility = ""; ghost.remove(); };
}

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
const HOVER_SCALE = 1.14;  // (kept for the first/last word nudge)
const STRETCH_X = 1.55;     // the selected word gets much longer, growing to the left ...
const STRETCH_Y = 1.2;      // ... and a bit taller, pinned at its right end
// Splash colour for each option, in menu order (taken from the reference screenshots).
const COLORS = ["#ab35b2", "#c62b8a", "#db2d4f", "#db4140", "#de621e", "#ceb003", "#a6b303", "#16a15e"];   // the selected word grows, like EQUIPMENT in the reference
const GAP = 0.13;            // how far neighbours move apart, as a fraction of the selected word's cap height

/* The hover splash is the exact shape and colour of the reference splash (assets/splat.png).
   In that image the selected word's baseline starts at (495, 685), runs at 4.3° and is 960 px long,
   with a 235 px tall first capital. The splash is bent along each word's own baseline, extended back
   to the left edge of the screen, and painted in with a single brush stroke. */
const SPLAT = { w: 1616, h: 1337, ax: 495, ay: 685, ang: 4.3, len: 960, cap: 235 };
const FLAT = { canvas: null, ax: 0, ay: 0, w: 0, h: 0 };
const splatImg = new Image();
splatImg.onload = () => {
  // Pre-rotate the splash so its baseline is horizontal; that makes bending it along a curve simple.
  const pad = 160, c = document.createElement("canvas");
  c.width = SPLAT.w + pad * 2; c.height = SPLAT.h + pad * 2;
  const g = c.getContext("2d");
  g.translate(SPLAT.ax + pad, SPLAT.ay + pad);
  g.rotate((-SPLAT.ang * Math.PI) / 180);
  g.drawImage(splatImg, -SPLAT.ax, -SPLAT.ay);
  Object.assign(FLAT, { canvas: c, ax: SPLAT.ax + pad, ay: SPLAT.ay + pad, w: c.width, h: c.height });
  startStroke(true);
};
splatImg.src = "assets/splat.png";

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
    return { el: g, tagEl: t, geo, slot, capLen, origin, end: [end.x, end.y], endAng, dx: 0, dy: 0, sx: 1, sy: 1 };
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
  const dur = 460;
  const p = Math.min(1, (now - stroke.t0) / dur);
  const e = easeOut(p);

  ctx.setTransform(dpr * MS, 0, 0, dpr * MS, dpr * MX, dpr * MY);
  // grow with the word (same timing as its CSS transition)
  const kT = Math.min(1, easeOut(Math.min(1, (now - stroke.t0) / 320)));
  const ang = (it.endAng * Math.PI) / 180;
  ctx.translate(it.dx * kT, it.dy * kT);
  ctx.translate(it.end[0], it.end[1]); ctx.rotate(ang);
  ctx.scale(1 + (it.sx - 1) * kT, 1 + (it.sy - 1) * kT);
  ctx.rotate(-ang); ctx.translate(-it.end[0], -it.end[1]);
  const src = tinted(COLORS[stroke.item % COLORS.length]);

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
    ctx.drawImage(src, u, 0, Math.max(1, du), FLAT.h, 0, -FLAT.ay * ky, ds + 0.9, FLAT.h * ky);
    ctx.restore();
  }
  if (p < 1 || (now - stroke.t0) < 340) raf = requestAnimationFrame(frame);
}

// The splash image recoloured for one option (cached).
const TINTS = {};
function tinted(color) {
  if (TINTS[color]) return TINTS[color];
  const c = document.createElement("canvas");
  c.width = FLAT.w; c.height = FLAT.h;
  const g = c.getContext("2d");
  g.drawImage(FLAT.canvas, 0, 0);
  g.globalCompositeOperation = "source-in";
  g.fillStyle = color; g.fillRect(0, 0, c.width, c.height);
  return (TINTS[color] = c);
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
  if (it.sx !== 1 || it.sy !== 1) {
    const a = (it.endAng * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
    const rx = x - it.end[0], ry = y - it.end[1];
    const u = (rx * c + ry * s) / it.sx, v = (-rx * s + ry * c) / it.sy; // into the word's own axes, unstretch
    x = it.end[0] + u * c - v * s; y = it.end[1] + u * s + v * c;
  }
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

// Where a point of an item ends up under that item's current transform (menu coordinates).
function applyTf(it, x, y) {
  const a = (it.endAng * Math.PI) / 180, c = Math.cos(a), sn = Math.sin(a);
  const rx = x - it.end[0], ry = y - it.end[1];
  const u = (rx * c + ry * sn) * it.sx, v = (-rx * sn + ry * c) * it.sy;
  return [it.end[0] + u * c - v * sn + it.dx, it.end[1] + u * sn + v * c + it.dy];
}

function setActive(i, instant = false) {
  const prev = active;
  active = (i + SECTIONS.length) % SECTIONS.length;
  const A = ITEMS[active];
  ITEMS.forEach((it, j) => {
    const on = j === active;
    it.el.classList.toggle("active", on);
    it.tagEl.classList.toggle("active", on);
    // Open up space: the selected word gets longer and taller; the whole group above moves up and the
    // group below moves down (each word along its own "up" direction, so the fan keeps its shape).
    let dx = 0, dy = 0;
    if (A && !on) {
      const p = it.geo.pts[Math.floor(it.geo.pts.length / 2)];
      const dist = A.slot.cap * (j < active ? (STRETCH_Y - 1) + GAP : -GAP * 1.4);
      dx = p.ty * dist; dy = -p.tx * dist;
    }
    it.dx = dx; it.dy = dy; it.sx = on ? STRETCH_X : 1; it.sy = on ? STRETCH_Y : 1;
  });
  // Then slide the whole fan up or down just enough that nothing leaves the top or bottom of the screen.
  if (ITEMS.length) {
    // Only the selected word must stay fully visible; far-away words may clip at the edge, like the reference.
    let minY = Infinity, maxY = -Infinity;
    [A].forEach((it) => {
      for (let k = 0; k <= 20; k++) {
        const q = pointAt(it.geo, (it.geo.len * k) / 20);
        const top = k === 0 ? it.slot.cap : it.slot.sc;
        for (const h of [-it.slot.sc * 0.14, top]) {
          const y = applyTf(it, q.x + q.ty * h, q.y - q.tx * h)[1];
          minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        }
      }
    });
    const top = (6 - MY) / MS, bottom = (window.innerHeight - 40 - MY) / MS; // room for the label under the word
    let cy = 0;
    if (minY < top) cy = top - minY;
    else if (maxY > bottom) cy = bottom - maxY;
    if (maxY + cy > bottom && minY + cy >= top) cy = Math.max(top - minY, bottom - maxY);
    ITEMS.forEach((it) => (it.dy += cy));
  }
  ITEMS.forEach((it) => {
    // Same function list for every word, so CSS animates between states smoothly.
    const [ex, ey] = it.end, a = it.endAng.toFixed(2), dx = it.dx.toFixed(1), dy = it.dy.toFixed(1);
    it.el.style.transformOrigin = "0 0";
    it.el.style.transform = `translate(${dx}px, ${dy}px) translate(${ex.toFixed(1)}px, ${ey.toFixed(1)}px) rotate(${a}deg) scale(${it.sx}, ${it.sy}) rotate(${-a}deg) translate(${-ex.toFixed(1)}px, ${-ey.toFixed(1)}px)`;
    it.tagEl.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  if (ITEMS.length && (prev !== active || instant)) startStroke(instant);
}

const root = document.documentElement;
let MS = 1, MX = 0, MY = 0;
const isOpen = () => document.body.classList.contains("open");
const toMenu = (e) => [(e.clientX - MX) / MS, (e.clientY - MY) / MS];
let hovering = false;

window.addEventListener("pointermove", (e) => {
  if (isOpen() || transitioning || !ITEMS.length) return;
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
  if (isOpen() || transitioning || !ITEMS.length) return;
  if (e.target.closest(".nameplate, .hints, .panel, button")) return;
  const [x, y] = toMenu(e);
  // Open whatever is highlighted under the cursor (touch: whatever was tapped).
  const i = hovering || (ITEMS[active] && bandScore(ITEMS[active], x, y, 0.55) < Infinity) ? active : hitTest(x, y);
  if (i >= 0) { e.preventDefault(); goTo(SECTIONS[i].id); }
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
  if (b) goTo(SECTIONS[+b.dataset.i].id);
});

function openSection(id, sub = "") {
  const i = SECTIONS.findIndex((s) => s.id === id);
  if (i < 0) return closeSection(false);
  // moving inside the projects section (tree <-> a project): no full page change
  if (id === "projects" && isOpen() && i === current && projectView !== null) { renderProjects(sub); return; }
  const sec = SECTIONS[i];
  const back = current >= 0 && (i - current + SECTIONS.length) % SECTIONS.length > SECTIONS.length / 2;
  current = i;
  setActive(i);
  pTitle.innerHTML = `${sec.label.toUpperCase()}<i class="bl"></i>`;
  fitTitle();
  pSub.textContent = sec.sub;
  if (!document.body.classList.contains("wiping")) panel.classList.remove("no-anim");
  pBody.className = "panel-body";
  void pBody.offsetWidth; // restart the slide animation
  pBody.className = "panel-body" + (back ? " from-left" : "");
  projectView = null;
  setProjectsMode(false);
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
  // this section's colour: title splash, accents, bars and buttons
  const col = COLORS[i % COLORS.length];
  document.documentElement.style.setProperty("--purple", col);
  pSplat.querySelector("img").src = splashURL(col);
  hovering = false;                        // the menu is hidden: forget what was under the pointer
  if (id === "projects") { projectView = ""; renderProjects(sub); }
  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const body = encodeURIComponent(`${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`);
    location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Portfolio contact")}&body=${body}`;
  });
}

// Map the reference splash onto the panel title the same way it maps onto a menu word.
// Stretch the title wide like "PARTY" (about 1.18x), but never past ~80% of the screen width.
function fitTitle() {
  pTitle.style.setProperty("--tsx", 1);
  const w = pTitle.getBoundingClientRect().width;
  const sx = Math.min(1.18, (window.innerWidth * 0.8) / Math.max(1, w));
  pTitle.style.setProperty("--tsx", sx.toFixed(3));
  // rule sits right on the baseline, under the whole word, and runs a little past it
  const base = pTitle.querySelector(".bl").getBoundingClientRect().top;
  const right = pTitle.getBoundingClientRect().right;
  const rule = document.getElementById("panel-rule");
  rule.style.top = base + "px";
  rule.style.width = right + window.innerWidth * 0.09 + "px";
  pSub.style.top = base + rule.offsetHeight + window.innerHeight * 0.012 + "px";
}
window.addEventListener("resize", () => isOpen() && fitTitle());

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

// The splash in a section's colour (pre-made files, so nothing reads image pixels: that is blocked
// when the site is opened straight from a file).
const splashURL = (color) => `assets/splash/${color.replace("#", "").toLowerCase()}.png`;

function closeSection(updateHash = true) {
  setProjectsMode(false);
  document.body.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  current = -1;
  if (ITEMS.length) startStroke();
  projectView = null;
  hovering = false;
  if (updateHash && location.hash) {
    try { history.pushState("", document.title, location.pathname + location.search); }
    catch (err) { location.hash = ""; }    // opened as a local file: pushState is not allowed there
  }
}

// Q / E: previous / next section (inside a page), or move the menu selection.
function step(d) {
  const base = isOpen() ? current : active;
  const i = (base + d + SECTIONS.length) % SECTIONS.length;
  if (isOpen()) goTo(SECTIONS[i].id);
  else setActive(i);
}

function route() {
  const m = location.hash.match(/^#\/([\w-]+)(?:\/([\w-]+))?/);
  m ? openSection(m[1], m[2] || "") : closeSection(false);
}
window.addEventListener("hashchange", route);
// Esc / Back: from a project page go back to the projects tree, otherwise back to the main menu.
function goBack() {
  if (transitioning) return;
  if (projectView) location.hash = "#/projects";
  else closeSection();
}
document.getElementById("back").addEventListener("click", (e) => { e.stopPropagation(); goBack(); });
document.getElementById("prev").addEventListener("click", () => step(-1));
document.getElementById("next").addEventListener("click", () => step(1));

document.addEventListener("keydown", (e) => {
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || e.ctrlKey || e.metaKey || e.altKey) return;
  if (transitioning) { e.preventDefault(); return; }
  const k = e.key.toLowerCase();
  if (k === "q") { e.preventDefault(); step(-1); return; }
  if (k === "e") { e.preventDefault(); step(1); return; }
  if (e.key === "Escape" && isOpen()) { e.preventDefault(); goBack(); return; }
  if (isOpen()) return;
  if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); setActive(active + 1); }
  else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); setActive(active - 1); }
  else if (e.key === "Enter") { e.preventDefault(); goTo(SECTIONS[active].id); }
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


/* =========================================================
   Menu -> page transition, copied frame by frame from the reference video (30 fps):
     0-60 ms    random letters drop out, the splash breaks into chunks, the name plate streaks away
     60-200     the remaining letters scatter as faint ghosts, the character darkens and fades
     200-270    only the background is left, with a pale brush streak across the lower left
     270-420    a wide white slanted band sweeps in from the left; the new page is behind it, and
                ahead of it the old background peels away in chips
     420-500    the band collapses into a thin line and fades
     500-650    the title splash paints in
   ========================================================= */
const fx = document.createElement("canvas");
fx.className = "fx";
document.body.appendChild(fx);
const fxc = fx.getContext("2d");
let transitioning = false;

// Horizontal "peeling paint" noise (640x360), reused for the splash break-up and the chip reveal.
const CHIP = (() => {
  const W = 640, H = 360, c = document.createElement("canvas");
  c.width = W; c.height = H;
  const g = c.getContext("2d");
  const layer = (cols, rows, alpha, seed) => {
    const t = document.createElement("canvas"); t.width = cols; t.height = rows;
    const tg = t.getContext("2d"), d = tg.createImageData(cols, rows), R = rng(seed);
    for (let k = 0; k < cols * rows; k++) { const v = R() * 255; d.data.set([v, v, v, 255], k * 4); }
    tg.putImageData(d, 0, 0);
    g.globalAlpha = alpha; g.imageSmoothingEnabled = true; g.drawImage(t, 0, 0, W, H);
  };
  g.fillStyle = "#808080"; g.fillRect(0, 0, W, H);
  layer(14, 90, 1, 11); layer(40, 220, 0.55, 12); layer(120, 360, 0.3, 13);
  const src = g.getImageData(0, 0, W, H).data, n = new Uint8Array(W * H);
  for (let k = 0; k < W * H; k++) n[k] = src[k * 4];
  // stretch the values to the full 0-255 range
  let lo = 255, hi = 0; n.forEach((v) => { lo = Math.min(lo, v); hi = Math.max(hi, v); });
  for (let k = 0; k < n.length; k++) n[k] = ((n[k] - lo) * 255) / (hi - lo);
  const out = document.createElement("canvas"); out.width = W; out.height = H;
  return { W, H, n, out, og: out.getContext("2d"), img: null };
})();
// Draw a mask where `coverage` (0-1) of the area is solid, as horizontal paint chips.
function chipMask(coverage) {
  const { W, H, n, og } = CHIP;
  if (!CHIP.img) CHIP.img = og.createImageData(W, H);
  const d = CHIP.img.data, th = coverage * 255;
  for (let k = 0; k < W * H; k++) d[k * 4 + 3] = n[k] < th ? 255 : 0;
  og.putImageData(CHIP.img, 0, 0);
  return CHIP.out;
}

const CHIP_KEEP = {};
function chipKeepURL(coverage) {
  const key = Math.round(coverage * 12);
  if (CHIP_KEEP[key]) return CHIP_KEEP[key];
  const c = document.createElement("canvas"); c.width = CHIP.W; c.height = CHIP.H;
  const g = c.getContext("2d");
  g.fillStyle = "#000"; g.fillRect(0, 0, c.width, c.height);
  g.globalCompositeOperation = "destination-out";
  g.drawImage(chipMask(key / 12), 0, 0);
  return (CHIP_KEEP[key] = c.toDataURL());
}

const bgImg = new Image();
bgImg.src = "assets/background.jpg";
function drawCover(g, img, W, H) {
  const s = Math.max(W / img.naturalWidth, H / img.naturalHeight);
  const w = img.naturalWidth * s, h = img.naturalHeight * s;
  g.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
}

const lerpKeys = (keys, t) => {
  if (t <= keys[0][0]) return keys[0][1];
  for (let k = 1; k < keys.length; k++) if (t <= keys[k][0]) {
    const [t0, v0] = keys[k - 1], [t1, v1] = keys[k];
    return v0 + ((v1 - v0) * (t - t0)) / (t1 - t0);
  }
  return keys[keys.length - 1][1];
};

function goTo(id) {
  if (transitioning) return;
  const idx = SECTIONS.findIndex((s) => s.id === id);
  if (idx < 0) return;
  transitioning = true;
  document.body.classList.remove("hovering");
  const dpr = window.devicePixelRatio || 1, VW = window.innerWidth, VH = window.innerHeight;
  fx.width = Math.round(VW * dpr); fx.height = Math.round(VH * dpr);
  const hero = document.querySelector(".hero"), plate = document.querySelector(".nameplate");
  const hints = document.querySelector(".hints"), linesEl = document.querySelector(".lines");

  // Q / E between pages plays the same transition: the page title takes the place of the menu words,
  // and the panel streaks away like the name plate.
  const fromPage = isOpen();
  if (fromPage && idx === current) { transitioning = false; return; }

  // Letters: some drop out at random in the first 60 ms, the rest scatter as ghosts.
  const R = rng(Date.now() & 0xffff);
  const glyphs = [];
  const mk = (el, svg, dropP) => ({
    el, svg, base: svg ? el.getAttribute("transform") : "",
    drop: R() < dropP ? R() * 60 : Infinity,
    dx: (R() - 0.65) * 90, dy: (R() - 0.3) * 70, rot: (R() - 0.5) * 50, sc: 1 + R() * 0.7,
    ghost: R() < 0.4,
  });
  if (fromPage) {
    // split the title into single letters so each one can drop out / scatter
    const wrap = (node) => [...node.childNodes].forEach((c) => {
      if (c.nodeType === 3) {
        const frag = document.createDocumentFragment();
        [...c.textContent].forEach((ch) => { const sp = document.createElement("span"); sp.className = "gl"; sp.textContent = ch; frag.appendChild(sp); });
        c.replaceWith(frag);
      } else wrap(c);
    });
    wrap(pTitle);
    pTitle.querySelectorAll(".gl").forEach((sp) => glyphs.push(mk(sp, false, 0.6)));
  } else {
    ITEMS.forEach((it, j) => it.el.querySelectorAll("a text").forEach((t) => glyphs.push(mk(t, true, j === idx ? 0.8 : 0.45))));
  }
  const streakEls = fromPage
    ? [pSub, document.querySelector(".panel-main"), document.getElementById("back")]
    : [plate, hints];

  // Splash: freeze it fully painted so it can break apart.
  let splashSnap = null;
  if (!fromPage) {
    stroke.t0 = performance.now() - 1e4;
    frame(performance.now());
    splashSnap = document.createElement("canvas");
    splashSnap.width = canvas.width; splashSnap.height = canvas.height;
    splashSnap.getContext("2d").drawImage(canvas, 0, 0);
  }
  const pImg = pSplat.querySelector("img");
  const streakCol = tinted("#d9f3f2");

  let opened = false;
  const t0 = performance.now();
  function step(now) {
    const t = now - t0;
    // ---- letters ----
    if (t < 260) glyphs.forEach((G) => {
      if (t >= G.drop) { G.el.style.opacity = 0; return; }
      const k = Math.max(0, Math.min(1, (t - 45) / 170));
      if (k > 0) {
        const e = 1 - Math.pow(1 - k, 2);
        if (G.svg) G.el.setAttribute("transform", `${G.base} translate(${(G.dx * e).toFixed(1)},${(G.dy * e).toFixed(1)}) rotate(${(G.rot * e).toFixed(1)}) scale(${1 + (G.sc - 1) * e})`);
        else G.el.style.transform = `translate(${(G.dx * e).toFixed(1)}px,${(G.dy * e).toFixed(1)}px) rotate(${(G.rot * e).toFixed(1)}deg) scale(${1 + (G.sc - 1) * e})`;
        G.el.style.opacity = (G.ghost ? 0.55 : 1) * (1 - k);
      }
    });
    ITEMS.forEach((it) => (it.tagEl.style.opacity = t > 35 ? 0 : 1));
    // ---- splash breaking into chunks (0-95 ms) ----
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (fromPage && !opened) {
      // the title splash breaks into the same horizontal chunks
      pImg.style.webkitMaskImage = pImg.style.maskImage = t < 95 ? `url(${chipKeepURL(Math.min(1, t / 85))})` : "";
      pImg.style.webkitMaskSize = pImg.style.maskSize = "100% 100%";
      pImg.style.opacity = t < 95 ? 1 : 0;
    }
    if (splashSnap && t < 95) {
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(splashSnap, 0, 0);
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(chipMask(Math.min(1, t / 85)), 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
    }
    // ---- name plate / hints streak away, lines and character fade ----
    const pk = Math.min(1, t / 90);
    if (!opened) streakEls.forEach((el) => {
      el.style.transformOrigin = "0 50%";
      el.style.transform = `translateX(${-30 * pk}px) scaleX(${1 + 0.8 * pk}) skewX(-20deg)`;
      el.style.filter = `brightness(${1 + 3 * pk}) blur(${2 * pk}px)`;
      el.style.opacity = 1 - pk;
    });
    linesEl.style.opacity = 1 - Math.min(1, t / 140);
    if (!opened) {
      const hk = Math.max(0, Math.min(1, (t - 90) / 120));
      hero.style.opacity = 1 - hk;
      hero.style.filter = `brightness(${1 - 0.5 * hk}) saturate(${1 - 0.4 * hk}) blur(${2 * hk}px)`;
    }

    // ---- overlay canvas ----
    fxc.setTransform(dpr, 0, 0, dpr, 0, 0);
    fxc.clearRect(0, 0, VW, VH);
    // teal darkening while the menu dissolves
    const dark = lerpKeys([[70, 0], [180, 0.38], [270, 0.3], [300, 0]], t);
    if (dark > 0 && t < 270) { fxc.fillStyle = `rgba(8, 34, 40, ${dark})`; fxc.fillRect(0, 0, VW, VH); }
    // pale brush streak across the lower left
    if (t > 160 && t < 290 && FLAT.canvas) {
      const k = (t - 160) / 130;
      fxc.save();
      fxc.globalAlpha = 0.6 * Math.sin(Math.PI * k);
      fxc.translate(VW * (0.14 - 0.05 * k), VH * (0.62 + 0.12 * k));
      fxc.rotate(-1.05);
      const w = VH * 0.75, h = w * (FLAT.h / FLAT.w) * 0.5;
      fxc.drawImage(streakCol, -w * 0.3, -h / 2, w, h);
      fxc.restore();
    }
    // ---- white slanted band + chip reveal (270-500 ms) ----
    if (t >= 270) {
      if (!opened) {
        opened = true;
        document.body.classList.add("wiping");
        hero.style.opacity = 0;
        if (fromPage) {
          streakEls.forEach((el) => { el.style.transform = el.style.filter = el.style.opacity = el.style.transformOrigin = ""; });
          pImg.style.webkitMaskImage = pImg.style.maskImage = ""; pImg.style.opacity = "";
        }
        location.hash = `#/${id}`;                  // the new page is now underneath
      }
      const slant = VH * 0.53;                       // the band leans like the reference: x shifts by this from bottom to top
      const R0 = lerpKeys([[270, 0.21], [303, 0.28], [336, 0.8], [370, 0.82], [403, 0.66], [436, 0.65]], t) * VW;
      const L0 = lerpKeys([[270, -0.6], [303, -0.3], [336, 0.33], [370, 0.44], [403, 0.625], [436, 0.635]], t) * VW;
      // old background still showing right of the band, peeling away in chips
      if (t < 420 && bgImg.complete) {
        fxc.save();
        fxc.beginPath();
        fxc.moveTo(R0, 0); fxc.lineTo(VW, 0); fxc.lineTo(VW, VH); fxc.lineTo(R0 - slant, VH); fxc.closePath();
        fxc.clip();
        drawCover(fxc, bgImg, VW, VH);
        fxc.fillStyle = "rgba(8, 34, 40, 0.3)"; fxc.fillRect(0, 0, VW, VH);
        fxc.globalCompositeOperation = "destination-out";
        fxc.drawImage(chipMask(lerpKeys([[270, 0.12], [303, 0.42], [336, 0.6], [370, 0.75], [420, 1]], t)), 0, 0, VW, VH);
        fxc.restore();
      }
      // the white band
      const a = lerpKeys([[400, 1], [500, 0]], t);
      if (a > 0) {
        fxc.fillStyle = `rgba(250, 250, 248, ${a})`;
        fxc.beginPath();
        fxc.moveTo(L0, 0); fxc.lineTo(R0, 0); fxc.lineTo(R0 - slant, VH); fxc.lineTo(L0 - slant, VH); fxc.closePath();
        fxc.fill();
      }
    }
    if (t < 520) { requestAnimationFrame(step); return; }

    // ---- finish ----
    fxc.setTransform(1, 0, 0, 1, 0, 0);
    fxc.clearRect(0, 0, fx.width, fx.height);
    if (!fromPage) glyphs.forEach((G) => { G.el.setAttribute("transform", G.base); G.el.style.opacity = ""; });
    streakEls.forEach((el) => { el.style.transform = el.style.filter = el.style.opacity = el.style.transformOrigin = ""; });
    linesEl.style.opacity = "";
    hero.style.transition = "opacity .35s ease";
    hero.style.filter = "";
    hero.style.opacity = "";
    setTimeout(() => (hero.style.transition = ""), 400);
    ITEMS.forEach((it) => (it.tagEl.style.opacity = ""));
    panel.classList.add("no-anim");        // the page is already in place: don't replay its entrance
    document.body.classList.remove("wiping");
    pSplat.classList.remove("paint-in"); void pSplat.offsetWidth; pSplat.classList.add("paint-in");
    transitioning = false;
  }
  requestAnimationFrame(step);
}

// Build the menu once the display font is ready (its metrics size every word).
(document.fonts && document.fonts.load ? Promise.all([document.fonts.load('400 100px "Abril Fatface"'), document.fonts.load('900 100px "Playfair Display SC"')]) : Promise.resolve())
  .catch(() => {})
  .then(() => { buildMenu(); route(); });
