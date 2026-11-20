/* =========================================================
   PORTFOLIO CONTENT — edit everything in this block
   ========================================================= */
const PROFILE = {
  name: "Your Name",
  role: "Creative Developer",
  email: "hello@example.com",
  location: "Your City, Country",
  github: "https://github.com/youssefibrahim8",
  linkedin: "https://www.linkedin.com/in/your-handle",
  resume: "assets/resume.pdf",
};

const SECTIONS = [
  {
    id: "profile", label: "Profile", tag: "About me", sub: "Who I am",
    html: () => `
      <p class="lead">Hi, I'm ${PROFILE.name}: a ${PROFILE.role.toLowerCase()} who builds bold, expressive interfaces and the systems behind them.</p>
      <p>I like work where design and engineering meet: interfaces with personality, smooth motion and solid code. This section is a short intro. Replace it with your own story, what drives you and what you're looking for next.</p>
      <h2>Status</h2>
      <div class="stat"><span class="k">Class</span><span class="v">${PROFILE.role}</span></div>
      <div class="stat"><span class="k">Base</span><span class="v">${PROFILE.location}</span></div>
      <div class="stat"><span class="k">Party</span><span class="v">Open to new opportunities</span></div>
      <div class="stat"><span class="k">Lang</span><span class="v">English · Arabic</span></div>`,
  },
  {
    id: "skills", label: "Skills", tag: "Abilities", sub: "What I can do",
    html: () => `
      <h2>Core</h2>
      <div class="meters">
        ${meter("HTML / CSS", 95)}
        ${meter("JavaScript / TypeScript", 88)}
        ${meter("React / Next.js", 82)}
        ${meter("Node.js", 74)}
        ${meter("UI / Motion design", 80)}
      </div>
      <h2>Toolkit</h2>
      <ul class="chips">${["Git", "Figma", "Vite", "Tailwind", "Python", "SQL", "Firebase", "Three.js", "GSAP", "Linux"].map((t) => `<li>${t}</li>`).join("")}</ul>
      <h2>Soft skills</h2>
      <ul class="chips">${["Communication", "Problem solving", "Team leadership", "Fast learner"].map((t) => `<li>${t}</li>`).join("")}</ul>`,
  },
  {
    id: "experience", label: "Experience", tag: "Work history", sub: "Where I've been",
    html: () => `
      <ol class="timeline">
        ${job("2024 to Present", "Frontend Developer", "Company Name", "Built and shipped customer-facing features, led a design-system refresh and improved page performance.")}
        ${job("2022 to 2024", "Junior Web Developer", "Studio Name", "Built responsive marketing sites and interactive landing pages for clients across several industries.")}
        ${job("2021", "Freelance", "Self-employed", "Designed and developed websites for small businesses and local creators.")}
      </ol>`,
  },
  {
    id: "projects", label: "Projects", tag: "My work", sub: "Things I've built",
    html: () => `
      <div class="cards">
        ${project(1, "Command Menu Portfolio", "This site: an RPG-style command menu with paint splatter hovers and an animated hero.", ["HTML", "CSS", "JS"], PROFILE.github)}
        ${project(2, "Project Two", "A short, punchy description of what it does and the problem it solves.", ["React", "Node"], "#")}
        ${project(3, "Project Three", "Highlight the most interesting technical challenge or result here.", ["TypeScript", "API"], "#")}
        ${project(4, "Project Four", "Another project worth showing off, ideally with a live demo link.", ["Python", "Data"], "#")}
      </div>`,
  },
  {
    id: "education", label: "Education", tag: "Studies", sub: "Where I learned",
    html: () => `
      <ol class="timeline">
        ${job("2020 to 2024", "B.Sc. Computer Science", "University Name", "Focus on software engineering and human-computer interaction.")}
        ${job("2023", "Certification", "Online Platform", "Advanced front-end development and accessibility.")}
      </ol>`,
  },
  {
    id: "hobbies", label: "Hobbies", tag: "Off duty", sub: "When I'm not coding",
    html: () => `
      <p>The things that keep me inspired outside of work:</p>
      <div class="cards">
        ${hobby("Gaming", "Especially stylish RPGs. Their menus inspired this site.")}
        ${hobby("Drawing", "Sketching characters and experimenting with digital painting.")}
        ${hobby("Music", "Building playlists, and the occasional attempt at producing.")}
        ${hobby("Fitness", "Training to keep the mind as sharp as the body.")}
      </div>`,
  },
  {
    id: "awards", label: "Awards", tag: "Achievements", sub: "Milestones",
    html: () => `
      <ol class="timeline">
        ${job("2024", "Hackathon Winner", "Event Name", "First place out of 40 teams with a real-time collaboration app.")}
        ${job("2023", "Dean's List", "University Name", "Recognised for academic excellence.")}
        ${job("2022", "Open Source Contributor", "Project Name", "Merged contributions to a popular open-source library.")}
      </ol>`,
  },
  {
    id: "contact", label: "Contact", tag: "Get in touch", sub: "Send a message",
    html: () => `
      <p class="lead">Have a project, a role or just want to say hi? My inbox is open.</p>
      <ul class="contact-list">
        <li><div class="stat"><span class="k">Email</span><span class="v"><a href="mailto:${PROFILE.email}" style="color:inherit">${PROFILE.email}</a></span></div></li>
        <li><div class="stat"><span class="k">GitHub</span><span class="v"><a href="${PROFILE.github}" target="_blank" rel="noopener" style="color:inherit">${PROFILE.github.replace(/^https?:\/\//, "")}</a></span></div></li>
        <li><div class="stat"><span class="k">LinkedIn</span><span class="v"><a href="${PROFILE.linkedin}" target="_blank" rel="noopener" style="color:inherit">LinkedIn profile</a></span></div></li>
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

/* Menu layout in a 1280×720 design frame. The fan of rotated, stacked words follows the reference.
   x, y = top-left of the word, fs = font size, r = rotation (deg). */
const LAYOUT = [
  { x: 222, y: 22,  fs: 122, r: 12 },
  { x: 232, y: 168, fs: 138, r: 4 },
  { x: 96,  y: 276, fs: 112, r: 0 },
  { x: 156, y: 364, fs: 120, r: -4 },
  { x: 92,  y: 532, fs: 104, r: -13 },
  { x: 344, y: 572, fs: 72,  r: -17 },
  { x: 296, y: 694, fs: 94,  r: -27 },
  { x: 530, y: 684, fs: 76,  r: -46 },
  { x: 654, y: 690, fs: 60,  r: -62 },
];

/* =========================================================
   Helpers for content
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
   Seeded random + paint splatter generator
   ========================================================= */
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smoothPath(pts) {
  const n = pts.length;
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d + "Z";
}

function blob(R, cx, cy, rx, ry, rough, spikes) {
  const N = 72, ph = [R() * 6.28, R() * 6.28, R() * 6.28, R() * 6.28];
  const spk = Array.from({ length: spikes }, () => ({ a: R() * Math.PI * 2, h: 0.25 + R() * 0.6, w: 0.05 + R() * 0.08 }));
  const pts = [];
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    let k = 1 + rough * (0.5 * Math.sin(2 * a + ph[0]) + 0.35 * Math.sin(5 * a + ph[1]) + 0.22 * Math.sin(9 * a + ph[2]) + 0.12 * Math.sin(17 * a + ph[3]));
    for (const s of spk) {
      let da = Math.abs(((a - s.a + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
      k += s.h * Math.exp(-(da * da) / (2 * s.w * s.w));
    }
    pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
  }
  return smoothPath(pts);
}

function paintSplat(svg, seed) {
  const R = rng(seed * 9973 + 17);
  const NS = "http://www.w3.org/2000/svg";
  svg.setAttribute("viewBox", "0 0 300 160");
  svg.setAttribute("preserveAspectRatio", "none");
  let out = `<g filter="url(#splatRough)">`;
  out += `<path d="${blob(R, 150, 80, 112, 46, 0.22, 7)}" fill="#b330d4"/>`;
  out += `<path d="${blob(R, 135 + R() * 30, 76 + R() * 8, 70, 26, 0.3, 3)}" fill="#9d22c2" opacity=".75"/>`;
  out += `<path d="${blob(R, 120 + R() * 60, 70 + R() * 20, 34, 12, 0.35, 2)}" fill="#c75ae6" opacity=".55"/>`;
  // drips & droplets
  for (let i = 0; i < 16; i++) {
    const a = R() * Math.PI * 2, d = 1.12 + R() * 0.7;
    const x = 150 + Math.cos(a) * 112 * d, y = 80 + Math.sin(a) * 50 * d;
    const r = 1 + R() * (i < 4 ? 7 : 3.5);
    out += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(r * 1.5).toFixed(1)}" ry="${r.toFixed(1)}" fill="#b330d4"/>`;
  }
  for (let i = 0; i < 4; i++) {
    const a = R() * Math.PI * 2, len = 20 + R() * 40;
    const x1 = 150 + Math.cos(a) * 100, y1 = 80 + Math.sin(a) * 40;
    const x2 = x1 + Math.cos(a) * len, y2 = y1 + Math.sin(a) * len * 0.45;
    out += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#b330d4" stroke-width="${(1.5 + R() * 3).toFixed(1)}" stroke-linecap="round"/>`;
  }
  out += `</g>`;
  svg.innerHTML = out;
  void NS;
}

// Shared SVG filter giving the splatter ragged, paint-like edges.
document.body.insertAdjacentHTML(
  "beforeend",
  `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
     <filter id="splatRough" x="-20%" y="-30%" width="140%" height="160%">
       <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="8" result="n"/>
       <feDisplacementMap in="SourceGraphic" in2="n" scale="12" xChannelSelector="R" yChannelSelector="G"/>
     </filter></defs></svg>`
);

/* =========================================================
   Letter jitter — the hand-set, uneven look of the menu type
   ========================================================= */
function jitterWord(el, text, seed) {
  const R = rng(seed);
  el.innerHTML = "";
  [...text].forEach((c, i) => {
    const s = document.createElement("span");
    s.className = "ch" + (i === 0 ? " cap" : "");
    // Occasionally render an inner letter as a full capital, like "EquipMent".
    if (i > 2 && i < text.length - 1 && R() < 0.1) s.classList.add("cap");
    s.textContent = i === 0 ? c.toUpperCase() : c.toLowerCase();
    s.style.setProperty("--cy", ((R() - 0.5) * 0.09).toFixed(3) + "em");
    s.style.setProperty("--cr", ((R() - 0.5) * 9).toFixed(1) + "deg");
    s.style.setProperty("--cs", (0.94 + R() * 0.12).toFixed(3));
    el.appendChild(s);
  });
}

/* =========================================================
   Build menu
   ========================================================= */
const menu = document.getElementById("menu");
const items = SECTIONS.map((sec, i) => {
  const L = LAYOUT[i] || LAYOUT[LAYOUT.length - 1];
  const a = document.createElement("a");
  a.className = "item";
  a.href = `#/${sec.id}`;
  a.dataset.index = i;
  a.style.cssText = `--x:${L.x}px;--y:${L.y}px;--fs:${L.fs}px;--r:${L.r}deg`;
  a.setAttribute("aria-label", sec.label);
  const splat = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  splat.classList.add("splat");
  splat.setAttribute("aria-hidden", "true");
  paintSplat(splat, i + 1);
  const word = document.createElement("span");
  word.className = "word";
  jitterWord(word, sec.label, (i + 3) * 131);
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = sec.tag;
  a.append(splat, word, tag);
  menu.appendChild(a);
  return a;
});

let active = 0;
function setActive(i) {
  active = (i + items.length) % items.length;
  items.forEach((el, j) => el.classList.toggle("active", j === active));
}
setActive(0);

items.forEach((el, i) => {
  el.addEventListener("mouseenter", () => !document.body.classList.contains("open") && setActive(i));
  el.addEventListener("focus", () => setActive(i));
});

document.querySelectorAll('[data-bind="name"]').forEach((n) => (n.textContent = PROFILE.name));
document.querySelectorAll('[data-bind="role"]').forEach((n) => (n.textContent = PROFILE.role));
document.title = `${PROFILE.name} | Portfolio`;

/* =========================================================
   Panel (section view) + hash routing
   ========================================================= */
const panel = document.getElementById("panel");
const pTitle = document.getElementById("panel-title");
const pSub = document.getElementById("panel-sub");
const pBody = document.getElementById("panel-body");
const pSplat = panel.querySelector(".panel-splat");

function openSection(id) {
  const i = SECTIONS.findIndex((s) => s.id === id);
  if (i < 0) return closeSection(false);
  const sec = SECTIONS[i];
  setActive(i);
  jitterWord(pTitle, sec.label, (i + 3) * 131);
  paintSplat(pSplat, i + 40);
  pSub.textContent = sec.sub;
  pBody.innerHTML = sec.html();
  pBody.scrollTop = 0;
  document.body.classList.remove("open");
  void panel.offsetWidth; // restart the open transitions
  document.body.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  setTimeout(() => pBody.focus({ preventScroll: true }), 50);
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
  if (updateHash && location.hash) history.pushState("", document.title, location.pathname + location.search);
  items[active] && items[active].focus({ preventScroll: true });
}

function route() {
  const m = location.hash.match(/^#\/([\w-]+)/);
  m ? openSection(m[1]) : closeSection(false);
}
window.addEventListener("hashchange", route);
document.getElementById("back").addEventListener("click", () => closeSection());

document.addEventListener("keydown", (e) => {
  const open = document.body.classList.contains("open");
  if (e.key === "Escape" && open) { e.preventDefault(); closeSection(); return; }
  if (open) return;
  if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); setActive(active + 1); items[active].focus(); }
  else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); setActive(active - 1); items[active].focus(); }
  else if (e.key === "Enter" && document.activeElement && !document.activeElement.classList.contains("item")) {
    location.hash = `#/${SECTIONS[active].id}`;
  }
});

/* =========================================================
   Layout: scale the 1280×720 frame to the viewport
   ========================================================= */
const root = document.documentElement;
const lines = document.querySelector(".lines");

function layout() {
  const W = window.innerWidth, H = window.innerHeight;
  let s, ox, oy, hx, hy, hw;
  if (W >= H * 1.05) {
    s = Math.min(W / 1280, H / 720);
    ox = (W - 1280 * s) / 2;
    oy = (H - 720 * s) / 2;
    hw = 860 * s;
    hx = ox + 396 * s;
    hy = oy + 34 * s;
  } else {
    // Portrait: character on top, menu fanned across the bottom.
    s = Math.min(W / 760, (H * 0.66) / 720);
    ox = Math.max(0, (W - 760 * s) / 2) - 40 * s;
    oy = H - 720 * s - 18;
    hw = Math.max(W * 1.25, H * 0.55);
    hx = W - hw * 0.98;
    hy = H * 0.03;
  }
  root.style.setProperty("--s", s.toFixed(4));
  root.style.setProperty("--ox", ox.toFixed(1) + "px");
  root.style.setProperty("--oy", oy.toFixed(1) + "px");
  root.style.setProperty("--heroW", hw.toFixed(1) + "px");
  root.style.setProperty("--heroX", hx.toFixed(1) + "px");
  root.style.setProperty("--heroY", hy.toFixed(1) + "px");
  drawLines(W, H, hx, hy, hw);
}

/* Thin, faded white lines (taken from the character artwork's style):
   giant concentric circles around the head, a long diagonal and a dashed crosshair. */
function drawLines(W, H, hx, hy, hw) {
  const hh = hw * (937 / 1239);
  const cx = hx + hw * 0.33, cy = hy + hh * 0.5;   // centre of the curls
  const R1 = hw * 0.55, R2 = hw * 0.36, R3 = hw * 0.78;
  const ex = hx + hw * 0.574, ey = hy + hh * 0.216; // eye
  const diag = { x1: hx + hw * 0.05, y1: H + 20, x2: W + 20, y2: hy + hh * 0.1 };
  const hzY = hy + hh * 0.56, vX = Math.min(W - 40, hx + hw * 0.93);
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
        <circle class="l" cx="${cx}" cy="${cy}" r="${R1}" stroke-opacity=".5" stroke-width="1.2"/>
        <circle class="l" cx="${cx}" cy="${cy}" r="${R1 + 6}" stroke-opacity=".18" stroke-dasharray="2 10"/>
      </g>
      <circle class="l" cx="${cx}" cy="${cy}" r="${R2}" stroke-opacity=".28"/>
      <g class="spin rev" style="transform-origin:${cx}px ${cy}px">
        <circle class="l" cx="${cx}" cy="${cy}" r="${R3}" stroke-opacity=".32" stroke-dasharray="${R3 * 2.4} ${R3 * 0.8}"/>
      </g>
      <circle class="l" cx="${ex}" cy="${ey}" r="${hw * 0.26}" stroke-opacity=".22"/>
      <line class="l" x1="${diag.x1}" y1="${diag.y1}" x2="${diag.x2}" y2="${diag.y2}" stroke-opacity=".55" stroke-width="1.1"/>
      <line class="l" x1="${diag.x1 + 14}" y1="${diag.y1}" x2="${diag.x2 + 14}" y2="${diag.y2}" stroke-opacity=".16"/>
      <line class="l" x1="${hx + hw * 0.62}" y1="${hzY}" x2="${W}" y2="${hzY}" stroke-opacity=".45"/>
      <line class="l" x1="${hx + hw * 0.62}" y1="${hzY + 4}" x2="${W}" y2="${hzY + 4}" stroke-opacity=".3" stroke-dasharray="14 6 2 6"/>
      <line class="l" x1="${vX}" y1="0" x2="${vX}" y2="${hzY + 30}" stroke-opacity=".38" stroke-dasharray="40 8 4 8"/>
      <line class="l" x1="${vX - 10}" y1="${hzY}" x2="${vX + 10}" y2="${hzY}" stroke-opacity=".8" stroke-width="1.4"/>
      <line class="l" x1="${0}" y1="${cy - R1 * 0.2}" x2="${cx - R1}" y2="${cy - R1 * 0.2}" stroke-opacity=".22"/>
    </g>`;
}

window.addEventListener("resize", layout);
layout();

/* =========================================================
   Eye embers
   ========================================================= */
(function embers() {
  const host = document.querySelector(".embers");
  const R = rng(99);
  for (let i = 0; i < 18; i++) {
    const e = document.createElement("span");
    e.className = "ember";
    const ang = -Math.PI / 2 + (R() - 0.3) * 1.8;
    const dist = 40 + R() * 110;
    e.style.setProperty("--tx", (Math.cos(ang) * dist).toFixed(0) + "px");
    e.style.setProperty("--ty", (Math.sin(ang) * dist).toFixed(0) + "px");
    e.style.setProperty("--d", (2 + R() * 2.5).toFixed(2) + "s");
    e.style.setProperty("--delay", (-R() * 4).toFixed(2) + "s");
    const sz = 1.5 + R() * 3;
    e.style.width = e.style.height = sz + "px";
    host.appendChild(e);
  }
})();

route();
