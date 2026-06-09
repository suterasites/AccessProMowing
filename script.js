/* Access Pro Mowing - scaffold script
   Header-on-scroll, mobile nav toggle, footer year. */

(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  let lastScroll = 0;
  function onScroll() {
    const y = window.scrollY;
    if (!header) return;
    if (y > 60) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');

    const menuOpen = mobileNav && mobileNav.classList.contains('is-open');
    if (Math.abs(y - lastScroll) > 5 && !menuOpen) {
      if (y > lastScroll && y > 220) header.classList.add('is-hidden');
      else header.classList.remove('is-hidden');
    }
    lastScroll = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle && mobileNav) {
    const closeBtn = document.getElementById('mobile-nav-close');
    const closeMenu = () => {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    };
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
