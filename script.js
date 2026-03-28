/* ============================================
   PRIYANKA SHARMA — PORTFOLIO  script.js
   ============================================ */

/* ---- CURSOR — diamond shape, no circle ---- */
const dot   = document.getElementById('cursorDot');
const trail = document.getElementById('cursorTrail');

let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

(function animTrail() {
  tx += (mx - tx) * 0.14;
  ty += (my - ty) * 0.14;
  trail.style.left = tx + 'px';
  trail.style.top  = ty + 'px';
  requestAnimationFrame(animTrail);
})();

document.querySelectorAll('a, button, .project-card, .tool-item, .social-platform, .skill-chip, .badge').forEach(el => {
  el.addEventListener('mouseenter', () => { trail.classList.add('active'); dot.style.transform = 'translate(-50%,-50%) scale(1.8)'; });
  el.addEventListener('mouseleave', () => { trail.classList.remove('active'); dot.style.transform = 'translate(-50%,-50%) scale(1)'; });
});

/* ---- NAV SCROLL ---- */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---- MOBILE NAV ---- */
const toggle  = document.getElementById('navToggle');
const links   = document.getElementById('navLinks');
const overlay = document.getElementById('mobileOverlay');

function closeNav() {
  toggle.classList.remove('open');
  links.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  overlay.classList.toggle('show', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

overlay.addEventListener('click', closeNav);

document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', closeNav);
});

/* ---- SCROLL REVEAL ---- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---- STAGGER ---- */
['.projects-grid .project-card', '.tools-grid .tool-item', '.skills-grid .skill-chip'].forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
  });
});

/* ---- PROJECT LINKS — ensure clickable ---- */
document.querySelectorAll('.project-link').forEach(link => {
  link.style.cursor = 'none';
  link.style.pointerEvents = 'auto';
  link.style.position = 'relative';
  link.style.zIndex = '10';
});

/* ---- ACTIVE NAV HIGHLIGHT on scroll ---- */
const sections = document.querySelectorAll('section[id], div[id]');
const navAs = document.querySelectorAll('.nav-links a.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--gold)' : '';
  });
}, { passive: true });