document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navContainer = document.querySelector('.nav-container');
  const navList = document.getElementById('siteNavList');
  if (!toggle || !navList) return;

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open', !expanded);
  });

  // Close when clicking outside the nav
  document.addEventListener('click', function (ev) {
    if (!document.body.classList.contains('nav-open')) return;
    if (ev.target.closest('.nav-container')) return;
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Close on escape
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
