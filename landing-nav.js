(function () {
  document.querySelectorAll('.site-nav-group-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var group = btn.closest('.site-nav-group');
      if (!group) return;
      var open = group.classList.contains('open');
      document.querySelectorAll('.site-nav-group.open').forEach(function (g) {
        g.classList.remove('open');
        var b = g.querySelector('.site-nav-group-btn');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        group.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.site-nav-group.open').forEach(function (g) {
      g.classList.remove('open');
      var b = g.querySelector('.site-nav-group-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });
})();
