(function () {
  const WA_NUMBER = "527222090270";

  document.body.classList.add("is-loading");

  const loader = document.getElementById("loader");
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mob-menu");
  const marquee = document.getElementById("marquee");
  const year = document.getElementById("year");
  const form = document.getElementById("wa-form");

  const marqueeItems = [
    "Video vigilancia residencial",
    "Radiocomunicación profesional",
    "Control de acceso vehicular",
    "Laboratorio certificado de radios",
    "Enlaces inalámbricos",
    "Cámaras WiFi",
    "Torres y repetidores",
    "Vigilancia con IA",
    "Geolocalización inteligente",
    "Seguridad electrónica"
  ];

  function hideLoader() {
    if (!loader) return;
    window.setTimeout(() => {
      loader.classList.add("loader-hidden");
      document.body.classList.remove("is-loading");
    }, 1850);
  }

  function updateNavbar() {
    if (!navbar) return;
    navbar.classList.toggle("nav-scrolled", window.scrollY > 24);
  }

  function initMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("is-open");
      hamburger.classList.toggle("is-active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        hamburger.classList.remove("is-active");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initMarquee() {
    if (!marquee) return;
    const nodes = [...marqueeItems, ...marqueeItems].map((item) => {
      const span = document.createElement("span");
      span.className = "marquee-item";
      span.textContent = item;
      return span;
    });
    marquee.replaceChildren(...nodes);
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });

    items.forEach((item) => observer.observe(item));
  }

  function initCounters() {
    const counters = document.querySelectorAll(".stat-num");
    if (!counters.length) return;

    const formatter = new Intl.NumberFormat("es-MX");

    const animateCounter = (node) => {
      const target = Number(node.dataset.count || 0);
      const suffix = node.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = `${formatter.format(Math.round(target * eased))}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.42 });

    counters.forEach((counter) => observer.observe(counter));
  }

  function initTypewriter() {
    const target = document.querySelector(".type-target");
    if (!target) return;
    const text = target.dataset.text || target.textContent.trim();
    target.textContent = "";

    let index = 0;
    const type = () => {
      target.textContent = text.slice(0, index);
      index += 1;
      if (index <= text.length) {
        window.setTimeout(type, 84);
      }
    };

    window.setTimeout(type, 1050);
  }

  function initWhatsAppForm() {
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("f-name");
      const interest = document.getElementById("f-interest");
      const msg = document.getElementById("f-msg");

      if (!name.value.trim() || !msg.value.trim()) {
        [name, msg].forEach((field) => {
          if (!field.value.trim()) field.focus();
        });
        form.reportValidity();
        return;
      }

      const text = [
        "Hola Ingeniería RADSYS, quiero solicitar una cotización.",
        `Nombre: ${name.value.trim()}`,
        `Necesito: ${interest.value}`,
        `Detalle: ${msg.value.trim()}`
      ].join("\n");

      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    });
  }

  function initHeroParticles() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = [];
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let rafId = 0;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      seed();
    }

    function seed() {
      particles.length = 0;
      const total = Math.max(42, Math.floor(width / 26));
      for (let i = 0; i < total; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.34,
          vy: (Math.random() - 0.5) * 0.26,
          size: Math.random() * 1.8 + 0.7,
          color: Math.random() > 0.72 ? "203,37,41" : "255,255,255"
        });
      }
    }

    function drawLines(a, i) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 126) {
          ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / 126) * 0.12})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.fillStyle = `rgba(${p.color},0.72)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        drawLines(p, index);
      });

      rafId = requestAnimationFrame(render);
    }

    resize();
    window.addEventListener("resize", resize);
    if (!prefersReduced) render();

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else if (!prefersReduced) {
        render();
      }
    });
  }

  window.addEventListener("load", hideLoader);
  window.addEventListener("scroll", updateNavbar, { passive: true });

  if (year) year.textContent = new Date().getFullYear();
  updateNavbar();
  initMenu();
  initMarquee();
  initReveal();
  initCounters();
  initTypewriter();
  initWhatsAppForm();
  initHeroParticles();
})();
