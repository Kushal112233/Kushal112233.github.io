/* ══════════════════════════════════════════════════════════════
   Magam Kushal Reddy — Portfolio JS (white / modern edition)
══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── helpers ── */
  function withAlpha(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }
  function svgUse(id, w, h) {
    return `<svg class="icon" width="${w}" height="${h}"><use href="#${id}"></use></svg>`;
  }

  /* ── data ── */
  const TICKER = ["PHP","MySQL","JavaScript ES6+","HTML5","CSS3 · Grid · Flex","REST APIs","Bootstrap","Responsive Design","Git · GitHub","Modern UI","ERP Systems","Dashboards","PHPMailer","AJAX","JSON APIs"];

  const FEATURES = [
    { icon:"i-layout", label:"Responsive Layouts", desc:"Every component tested across mobile, tablet, and desktop. No overflow, no broken grids — pixel-accurate from 320px to 2560px.", col:"#7B5FFF" },
    { icon:"i-db",     label:"Full Stack Development", desc:"PHP backends, MySQL schemas, REST-style APIs, and dynamic JS frontends. Complete ownership from database design to final rendered pixel.", col:"#10b981" },
    { icon:"i-star",   label:"Premium UI Design", desc:"Clean dashboards with intentional spacing, purposeful accents, and clear visual hierarchy. Code that looks exactly as good as it works.", col:"#6366f1" },
    { icon:"i-code",   label:"Clean Code Architecture", desc:"No spaghetti logic. Structured, modular PHP/JS code any developer can read, debug, and extend — easy to maintain today, easier tomorrow.", col:"#f59e0b" },
  ];

  const WHY = [
    { n:"01", t:"UI-first thinking", desc:"Every screen is planned for visual clarity before a single line of backend is written. Layouts are intentional, never rushed." },
    { n:"02", t:"Zero-compromise responsiveness", desc:"Not just 'works on mobile.' Premium on every viewport and orientation from 320px up — without a single overflow." },
    { n:"03", t:"Full ownership, end-to-end", desc:"Database schema, PHP backend, API layer, and pixel-perfect frontend — one developer, complete context, no handoff gaps." },
    { n:"04", t:"ERP-level output, student speed", desc:"CSE(AI) student at MCET building QuizMaster and management systems with genuine technical depth and agency-quality polish." },
  ];

  const STACK = [
    ["PHP","#7B5FFF"],["MySQL","#10b981"],["JavaScript","#f59e0b"],["HTML5","#ef4444"],
    ["CSS3","#6366f1"],["Bootstrap","#7c3aed"],["REST APIs","#0ea5e9"],["Git","#f97316"],
    ["GitHub","#8b5cf6"],["AJAX","#14b8a6"],["PHPMailer","#10b981"],["JSON","#eab308"],
  ];

  const CAPABILITIES = [
    { icon:"i-db",     title:"Backend Architecture", desc:"PHP 8.x · MySQL · REST APIs · PHPMailer · 2FA · Google OAuth2 · bcrypt · prepared statements — every backend production-ready from day one.", color:"#7B5FFF" },
    { icon:"i-layout", title:"Frontend & UI Design",  desc:"Pixel-perfect, fully responsive from 320px to 4K. Bright, modern dashboards with intentional spacing and clear visual hierarchy.", color:"#10b981" },
    { icon:"i-star",   title:"Premium UI Quality",    desc:"No overflow, no broken grids, no sloppy spacing. Every component designed before it's coded — UI-first thinking that shows.", color:"#6366f1" },
    { icon:"i-code",   title:"Clean Code · Git · Deploy", desc:"Structured, modular, documented code committed to Git and deployed to production. Any developer can read, extend, and maintain it.", color:"#f59e0b" },
  ];

  const CORE_TECH = [["PHP","#7B5FFF"],["MySQL","#10b981"],["JavaScript","#f59e0b"],["HTML5","#ef4444"],["CSS3","#6366f1"],["REST APIs","#0ea5e9"],["Git","#f97316"],["PHPMailer","#10b981"],["Bootstrap","#7c3aed"],["AJAX","#14b8a6"]];

  const STATS = [["15+","Projects built","#7B5FFF"],["3+","Years coding","#10b981"],["100%","Responsive","#f59e0b"],["∞","Dedication","#7c5cff"]];

  const INCLUDES = [
    ["Full-stack PHP + MySQL build","From schema design to live deployment"],
    ["Pixel-perfect responsive UI","320px to 4K — no overflow, no layout breaks"],
    ["REST API + AJAX integration","Clean endpoints, structured JSON, secured"],
    ["PHPMailer + form system","Contact forms, OTP emails, notifications"],
    ["Git version control","Clean commit history, documented code"],
    ["Post-delivery support","Bug fixes, tweaks, 14 days after handoff"],
  ];

  const PRICES = [
    ["Dashboard / Admin Panel","₹8,000 – ₹18,000","Most popular"],
    ["ERP / Management System","₹15,000 – ₹35,000","Complex builds"],
    ["REST API + Backend","₹5,000 – ₹12,000","API-only"],
    ["Full Portfolio Website","₹3,500 – ₹8,000","Like this one"],
  ];

  const TIMELINE = [
    ["48h","First wireframe or mockup delivered within 2 business days of kickoff","Design Speed"],
    ["7–21 days","Typical project delivery from design to deployed production","Delivery Time"],
    ["100%","Every project responsive from 320px — tested, not assumed","Responsive Rate"],
    ["0","Zero spaghetti logic. Clean, documented, maintainable code every time","Messy Code"],
  ];

  /* Orbit icons — angle-based, computed precisely so alignment
     is mathematically perfect at every viewport / scale factor. */
  const ORBIT_ICONS = [
    ["t-react",    "React"],
    ["t-tailwind", "Tailwind CSS"],
    ["t-figma",    "Figma"],
    ["t-wp",       "WordPress"],
    ["t-aws",      "AWS"],
    ["t-laravel",  "Laravel"],
    ["t-mysql",    "MySQL"],
  ];

  let active = 0;

  /* ── mock views ── */
  function renderMockDash() {
    const stats = [["Active Quizzes","48","+12 this week","#10b981"],["Students","312","All active","#6366f1"],["Avg Score","76%","↑ 4%","#7B5FFF"]];
    const bars = [28,50,38,72,88,64,80];
    return `<div class="mock-pad" style="position:relative;">
      <div class="float-cursor" style="bottom:24px;right:20px;">
        <svg width="13" height="16" viewBox="0 0 13 16" fill="none"><path d="M1 1L1 13L4.5 9.5L7 15L9 14L6.5 8.5L11.5 8.5L1 1Z" fill="#7B5FFF" stroke="#fff" stroke-width="0.7" stroke-linejoin="round"/></svg>
        <span class="float-cursor-label">Kushal</span>
      </div>
      <div class="float-cursor2" style="top:30px;right:56px;">
        <svg width="13" height="16" viewBox="0 0 13 16" fill="none"><path d="M1 1L1 13L4.5 9.5L7 15L9 14L6.5 8.5L11.5 8.5L1 1Z" fill="#f59e0b" stroke="#fff" stroke-width="0.7" stroke-linejoin="round"/></svg>
        <span class="float-cursor2-label">Client</span>
      </div>
      <div class="mock-stats3">${stats.map(([l,v,tag,c])=>`<div class="mock-stat-card"><div class="l">${l}</div><div class="v">${v}</div><div class="tag" style="color:${c};">${tag}</div></div>`).join("")}</div>
      <div class="mock-grid2">
        <div class="mock-chart-card"><div class="l">Weekly Submissions</div><div class="bars">${bars.map(h=>`<div class="bar" style="height:${h}%;"></div>`).join("")}</div></div>
        <div class="donut-card"><div class="l">Pass Rate</div><div class="donut"></div><div class="pct">78% Pass</div></div>
      </div>
    </div>`;
  }

  function renderMockAPI() {
    const rows = [
      ["GET /api/quizzes?page=1","Paginated list with metadata","200 OK","#10b981"],
      ["POST /api/quiz/create","Deduplication + INSERT + transaction","201","#10b981"],
      ["GET /api/reports/:id","Proctoring log + PDF export","200 OK","#10b981"],
      ["MySQL · 12 tables · Normalized","Foreign keys, indexes, optimized","DB","#7B5FFF"],
    ];
    return `<div class="mock-pad"><div class="api-list">${rows.map(([name,sub,badge,c])=>`<div class="api-row"><div><div class="name">${name}</div><div class="sub">${sub}</div></div><div class="badge" style="background:${withAlpha(c,0.094)};color:${c};">${badge}</div></div>`).join("")}</div></div>`;
  }

  function renderMockUI() {
    const rows = [["Responsive at every breakpoint","320px to 2560px · no overflow","#7B5FFF"],["Component library","Cards · tables · modals · inputs","#6366f1"]];
    return `<div class="mock-pad">
      <div class="ui-mock-top">
        <div class="ui-mock-box" style="background:rgba(123,95,255,0.08);border:1px solid rgba(123,95,255,0.24);"><div class="l" style="color:#7B5FFF;">Light System</div><div class="v" style="color:#7B5FFF;">Pure white + purple palette</div></div>
        <div class="ui-mock-box" style="background:rgba(16,185,129,0.07);border:1px solid rgba(16,185,129,0.2);"><div class="l" style="color:#10b981;">Grid System</div><div class="v" style="color:#10b981;">4px base, exact margins</div></div>
      </div>
      <div class="ui-mock-list">${rows.map(([n,s,c])=>`<div class="ui-mock-row" style="border:1px solid ${withAlpha(c,0.2)};"><div><div class="n">${n}</div><div class="s">${s}</div></div><div class="badge" style="background:${withAlpha(c,0.094)};color:${c};">CSS</div></div>`).join("")}</div>
    </div>`;
  }

  function renderMockCode() {
    const lines = [
      {t:"comment",v:"// QuizMaster · create_quiz.php"},
      {t:"blank"},
      {t:"code",v:[["#ff7b72","function "],["#d2a8ff","createQuiz"],["#8b949e","("],["#79c0ff","$data"],["#8b949e",") {"]]},
      {t:"code",i:1,v:[["#ff7b72","if "],["#8b949e","("],["#d2a8ff","isDuplicate"],["#8b949e","(title)) {"]]},
      {t:"code",i:2,v:[["#ff7b72","return "],["#d2a8ff","error"],["#8b949e","('Already exists');"]]},
      {t:"code",i:1,v:[["#8b949e","}"]]},
      {t:"code",i:1,v:[["#d2a8ff","beginTransaction"],["#8b949e","();"]]},
      {t:"code",i:1,v:[["#79c0ff","$result "],["#8b949e","= "],["#d2a8ff","execute"],["#8b949e","($stmt, $data);"]]},
      {t:"code",i:1,v:[["#ff7b72","return "],["#d2a8ff","respond"],["#8b949e","($result);"]]},
      {t:"code",v:[["#8b949e","}"]]},
      {t:"blank"},
      {t:"ok",v:"Structured · Transaction-safe · Maintainable"},
    ];
    const body = lines.map(ln=>{
      if(ln.t==="blank") return "<br>";
      if(ln.t==="comment") return `<div class="comment">${ln.v}</div>`;
      if(ln.t==="ok") return `<div class="ok">✓ ${ln.v}</div>`;
      const pad=(ln.i||0)*14;
      const spans=ln.v.map(([c,v])=>`<span style="color:${c};">${v}</span>`).join("");
      return `<div style="padding-left:${pad}px;">${spans}</div>`;
    }).join("");
    return `<div class="mock-pad"><div class="code-box">${body}</div></div>`;
  }

  const MOCK_RENDERERS = [renderMockDash, renderMockAPI, renderMockUI, renderMockCode];

  function renderFeatures() {
    const list = document.getElementById("features-list");
    list.innerHTML = FEATURES.map((f,i)=>{
      const on = active===i;
      const borderCol = on ? withAlpha(f.col,0.35) : "var(--bdr)";
      const bg = on ? withAlpha(f.col,0.05) : "var(--glass-bg)";
      const icBg = on ? withAlpha(f.col,0.12) : "";
      const icBorder = on ? withAlpha(f.col,0.35) : "var(--bdr)";
      const icColor = on ? f.col : "var(--mut)";
      return `<div class="feat-item${on?" on-item":""}" style="border-color:${borderCol};background:${bg};">
        <button class="feat-head" data-i="${i}">
          <div class="feat-ic" style="border-color:${icBorder};color:${icColor};${icBg?`background:${icBg};`:""}">${svgUse(f.icon,20,20)}</div>
          <span class="feat-label">${f.label}</span>
          <div class="feat-chev ${on?"on":""}">${svgUse("i-chev",16,16)}</div>
        </button>
        <div class="feat-bd ${on?"on":""}"><p>${f.desc}</p></div>
      </div>`;
    }).join("");
    list.querySelectorAll(".feat-head").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const i=parseInt(btn.dataset.i,10);
        active=active===i?0:i;
        renderFeatures();renderMock();
      });
    });
  }

  function renderMock() {
    document.getElementById("mock-container").innerHTML = MOCK_RENDERERS[active]();
  }

  /* ── Profile orbit: bubbles are placed with exact trigonometry
     so every icon sits precisely on the ring, perfectly centered,
     at any screen size (the whole .orbit scales as one unit). */
  function renderProfileCard() {
    const SIZE = 300;      // must match .orbit width/height in CSS
    const CENTER = SIZE/2;
    const RADIUS = 130;    // distance from center to each bubble's center
    const START_ANGLE = -90; // start at 12 o'clock
    const n = ORBIT_ICONS.length;

    const bubbleHtml = ORBIT_ICONS.map(([id,title],i)=>{
      const angle = START_ANGLE + (360/n)*i;
      const rad = angle*(Math.PI/180);
      const x = CENTER + RADIUS*Math.cos(rad);
      const y = CENTER + RADIUS*Math.sin(rad);
      return `<div class="bubble" style="left:${x.toFixed(2)}px;top:${y.toFixed(2)}px;" title="${title}"><svg width="26" height="26" style="display:block;"><use href="#${id}"></use></svg></div>`;
    }).join("");

    document.getElementById("profile-card-mount").innerHTML = `
      <div class="orbit-wrap">
        <div class="orbit">
          <div class="orbit-ring-accent"></div>
          <div class="orbit-ring"></div>
          ${bubbleHtml}
          <div class="avatar-circle">
            <svg width="50" height="50"><use href="#i-avatar"></use></svg>
            <div class="avatar-name">Kushal Reddy</div>
            <div class="avatar-role">Full Stack Dev</div>
          </div>
        </div>
      </div>`;
  }

  function renderCapCards() {
    const mount = document.getElementById("cap-cards");
    const cardsHtml = CAPABILITIES.map(item=>`
      <div class="cap-card" data-color="${item.color}">
        <div class="cap-icon" style="background:${withAlpha(item.color,0.09)};border:1px solid ${withAlpha(item.color,0.2)};color:${item.color};">${svgUse(item.icon,20,20)}</div>
        <div><div class="cap-title">${item.title}</div><div class="cap-desc">${item.desc}</div></div>
      </div>`).join("");
    const pillsHtml = CORE_TECH.map(([n,c])=>`
      <span class="skill-pill" style="border:1px solid ${withAlpha(c,0.22)};background:${withAlpha(c,0.07)};color:${c};">
        <span class="dot" style="background:${c};"></span>${n}
      </span>`).join("");
    mount.innerHTML = `${cardsHtml}
      <div class="skill-pills-card">
        <div class="skill-pills-title">Core technologies</div>
        <div class="skill-pills">${pillsHtml}</div>
      </div>
      <button class="btn-fill fbtn magnetic" id="work-with-me-btn" style="align-self:flex-start;width:fit-content;">Work with me ${svgUse("i-arrowr",16,16)}</button>`;
    attachCardHover(mount.querySelectorAll(".cap-card"));
    document.getElementById("work-with-me-btn").addEventListener("click",()=>scrollToId("contact"));
  }

  function renderStatsGrid() {
    const mount = document.getElementById("stats-grid");
    mount.innerHTML = STATS.map(([n,l,c])=>`
      <div class="stat-card" data-color="${c}">
        <div class="n" style="color:${c};">${n}</div>
        <div class="l">${l}</div>
      </div>`).join("");
    attachCardHover(mount.querySelectorAll(".stat-card"));
  }

  function renderWhyCards() {
    const mount = document.getElementById("why-cards");
    mount.innerHTML = WHY.map(w=>`
      <div class="why-card">
        <div class="why-badge"><span>${w.n}</span></div>
        <div><div class="why-title">${w.t}</div><div class="why-desc">${w.desc}</div></div>
      </div>`).join("");
    mount.querySelectorAll(".why-card").forEach(card=>{
      card.addEventListener("mouseenter",()=>{card.style.borderColor="rgba(123,95,255,0.3)";card.style.boxShadow="var(--shadow-lift)";});
      card.addEventListener("mouseleave",()=>{card.style.borderColor="var(--card-border)";card.style.boxShadow="var(--shadow-card)";});
    });
  }

  function attachCardHover(nodes) {
    nodes.forEach(card=>{
      const color=card.dataset.color;
      card.addEventListener("mouseenter",()=>{card.style.borderColor=withAlpha(color,0.32);card.style.boxShadow="var(--shadow-lift)";});
      card.addEventListener("mouseleave",()=>{card.style.borderColor="var(--card-border)";card.style.boxShadow="var(--shadow-card)";});
    });
  }

  function renderStackGrid() {
    const mount = document.getElementById("stack-grid");
    mount.innerHTML = STACK.map(([name,color])=>`
      <div class="stack-item" data-color="${color}">
        <div class="dot" style="background:${color};"></div>
        <span class="name">${name}</span>
      </div>`).join("");
    mount.querySelectorAll(".stack-item").forEach(item=>{
      const color=item.dataset.color;
      item.addEventListener("mouseenter",()=>{item.style.borderColor=color;item.style.boxShadow=`0 8px 20px ${withAlpha(color,0.16)}`;});
      item.addEventListener("mouseleave",()=>{item.style.borderColor="var(--glass-border)";item.style.boxShadow="var(--shadow-card)";});
    });
  }

  function renderIncludesList() {
    document.getElementById("includes-list").innerHTML = INCLUDES.map(([t,s])=>`
      <div class="includes-row">
        <div class="includes-check">${svgUse("i-checksm",9,9)}</div>
        <div><div class="includes-t">${t}</div><div class="includes-s">${s}</div></div>
      </div>`).join("");
  }

  function renderPriceRows() {
    document.getElementById("price-rows").innerHTML = PRICES.map(([type,price,tag],idx)=>`
      <div class="price-row ${idx===0?"popular":""}">
        <div><div class="price-type">${type}</div><div class="price-amt">${price}</div></div>
        ${idx===0?`<span class="price-tag">${tag}</span>`:""}
      </div>`).join("");
  }

  function renderTimelineGrid() {
    document.getElementById("timeline-grid").innerHTML = TIMELINE.map(([stat,desc,label])=>`
      <div><div class="timeline-stat">${stat}</div><div class="timeline-label">${label}</div><div class="timeline-desc">${desc}</div></div>`).join("");
  }

  function renderTicker() {
    const items = [...TICKER,...TICKER];
    document.getElementById("ticker-track").innerHTML = items.map(item=>`
      <div class="t-item"><span class="label">${item}</span><span class="sep"></span></div>`).join("");
  }

  /* ── navigation ── */
  function scrollToId(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({behavior:"smooth"});
  }
  function closeMenu() { document.getElementById("drawer").classList.remove("open"); }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("theme-toggle");
    btn.innerHTML = theme==="dark" ? svgUse("i-sun",18,18) : svgUse("i-moon",18,18);
    renderMock(); renderFeatures(); renderCapCards(); renderStatsGrid();
  }

  function initNavAndMenu() {
    document.querySelectorAll("[data-target]").forEach(btn=>{
      btn.addEventListener("click",()=>{scrollToId(btn.dataset.target);closeMenu();});
    });

    const navbar = document.getElementById("navbar");
    let ticking = false;
    window.addEventListener("scroll",()=>{
      if(!ticking){requestAnimationFrame(()=>{
        if(window.scrollY>20) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
        ticking=false;
      });ticking=true;}
    },{passive:true});

    const navLinks = document.getElementById("nav-links");
    function syncDesktopNav(){navLinks.style.display=window.innerWidth>=768?"flex":"none";}
    syncDesktopNav();
    window.addEventListener("resize",syncDesktopNav);

    const menuToggle = document.getElementById("menu-toggle");
    let menuOpen = false;
    menuToggle.addEventListener("click",()=>{
      menuOpen=!menuOpen;
      document.getElementById("drawer").classList.toggle("open",menuOpen);
      menuToggle.innerHTML=menuOpen?svgUse("i-x",20,20):svgUse("i-menu",20,20);
    });
    window.addEventListener("resize",()=>{
      if(window.innerWidth>=768&&menuOpen){menuOpen=false;document.getElementById("drawer").classList.remove("open");menuToggle.innerHTML=svgUse("i-menu",20,20);}
    });

    document.getElementById("theme-toggle").addEventListener("click",()=>{setTheme(isDark()?"light":"dark");});
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    const successBox = document.getElementById("success-box");
    form.addEventListener("submit",e=>{
      e.preventDefault();
      form.style.display="none";
      successBox.style.display="flex";
      form.reset();
      setTimeout(()=>{successBox.style.display="none";form.style.display="flex";},5000);
    });
  }

  /* ── SCROLL ANIMATIONS ── */
  function initScrollAnimations() {
    if(!("IntersectionObserver" in window)){
      document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger-children").forEach(el=>el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.06,rootMargin:"0px 0px -28px 0px"});

    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger-children").forEach(el=>observer.observe(el));
  }

  /* ── MOUSE SPOTLIGHT (subtle ambient glow, follows pointer) ── */
  function initSpotlight() {
    const spotlight = document.getElementById("spotlight");
    if(!spotlight) return;
    if(window.matchMedia("(pointer:coarse)").matches){spotlight.style.display="none";return;}
    let mx=window.innerWidth/2, my=window.innerHeight/2;
    let cx=mx, cy=my;

    window.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;},{passive:true});

    function tick(){
      cx += (mx-cx)*0.08;
      cy += (my-cy)*0.08;
      spotlight.style.left=cx+"px";
      spotlight.style.top=cy+"px";
      requestAnimationFrame(tick);
    }
    tick();
  }

  /* ── MAGNETIC BUTTONS ── */
  function initMagneticButtons() {
    if(window.matchMedia("(pointer:coarse)").matches) return;
    document.querySelectorAll(".magnetic").forEach(el=>{
      el.addEventListener("mousemove",e=>{
        const rect=el.getBoundingClientRect();
        const x=(e.clientX-rect.left-rect.width/2)*0.22;
        const y=(e.clientY-rect.top-rect.height/2)*0.22;
        el.style.transform=`translate(${x}px,${y}px)`;
      });
      el.addEventListener("mouseleave",()=>{el.style.transform="";});
    });
  }

  /* ── COUNTER ANIMATION ── */
  function initCounters() {
    const cards = document.querySelectorAll(".hero-stat-chip .n");
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const el=entry.target;
        const raw=el.textContent.trim();
        const num=parseFloat(raw.replace(/[^0-9.]/g,""));
        if(isNaN(num)||raw==="∞") return;
        const suffix=raw.replace(/[0-9.]/g,"");
        const dur=1200;
        const startTime=performance.now();
        function frame(now){
          const p=Math.min((now-startTime)/dur,1);
          const ease=1-Math.pow(1-p,3);
          const val=Math.round(num*ease);
          el.textContent=val+suffix;
          if(p<1) requestAnimationFrame(frame);
          else el.textContent=raw;
        }
        requestAnimationFrame(frame);
      });
    },{threshold:0.5});
    cards.forEach(c=>observer.observe(c));
  }

  /* ── SCROLL PROGRESS BAR ── */
  function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if(!bar) return;
    let ticking = false;
    function update(){
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      const pct = height>0 ? (scrolled/height)*100 : 0;
      bar.style.width = pct+"%";
      ticking = false;
    }
    window.addEventListener("scroll",()=>{
      if(!ticking){requestAnimationFrame(update);ticking=true;}
    },{passive:true});
    update();
  }

  /* ── ACTIVE NAV HIGHLIGHT ── */
  function initActiveNav() {
    const sections = ["home","work","about","skills","contact"];
    const navBtns = document.querySelectorAll(".nav-links button[data-target]");
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          navBtns.forEach(btn=>{
            const isActive = btn.dataset.target===entry.target.id;
            btn.style.color = isActive ? "var(--txt)" : "var(--mut)";
            btn.style.background = isActive ? "rgba(123,95,255,0.1)" : "";
          });
        }
      });
    },{threshold:0.4});
    sections.forEach(id=>{const el=document.getElementById(id);if(el)observer.observe(el);});
  }

  /* ── init ── */
  document.addEventListener("DOMContentLoaded",()=>{
    renderTicker();
    renderProfileCard();
    renderWhyCards();
    renderStackGrid();
    renderIncludesList();
    renderPriceRows();
    renderTimelineGrid();
    setTheme("dark");
    initNavAndMenu();
    initContactForm();
    initScrollAnimations();
    initScrollProgress();
    initSpotlight();
    initMagneticButtons();
    initCounters();
    initActiveNav();
  });
})();
