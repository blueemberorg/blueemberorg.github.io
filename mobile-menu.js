(function () {
  var LINKS = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Portföy', href: '/product' },
    { label: 'Mobil Uygulama Hizmetleri', href: '/ajans' },
    { label: 'Sağlık Sektörü Çözümleri', href: '/saglik' },
    { label: 'Araç Kiralama ve Lojistik', href: '/lojistik' },
    { label: 'Blog', href: '/blog' }
  ];

  function isActive(href) {
    var path = location.pathname.replace(/\/$/, '') || '/';
    var target = href.replace(/\/$/, '') || '/';
    if (target === '/') return path === '/';
    return path === target || path.indexOf(target + '/') === 0;
  }

  function ensureDrawer() {
    var root = document.getElementById('siteMobileMenu');
    if (root) return root;

    root = document.createElement('div');
    root.id = 'siteMobileMenu';
    root.className = 'site-mobile-menu';
    root.innerHTML =
      '<div class="site-mobile-menu-backdrop" data-close></div>' +
      '<div class="site-mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Menü">' +
        '<div class="site-mobile-menu-head"><strong>MENÜ</strong>' +
        '<button type="button" class="site-mobile-menu-close" aria-label="Kapat">&times;</button></div>' +
        '<nav class="site-mobile-menu-links" aria-label="Site menüsü"></nav>' +
        '<div class="site-mobile-menu-cta">' +
          '<a href="/" class="outline">Giriş Yap</a>' +
          '<a href="#teklif" class="primary" data-teklif>Teklif al</a>' +
        '</div>' +
      '</div>';

    var nav = root.querySelector('.site-mobile-menu-links');
    LINKS.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      if (isActive(item.href)) a.className = 'active';
      nav.appendChild(a);
    });

    root.querySelector('[data-close]').addEventListener('click', close);
    root.querySelector('.site-mobile-menu-close').addEventListener('click', close);

    var teklifBtn = root.querySelector('[data-teklif]');
    if (location.pathname === '/' || location.pathname === '/index.html') {
      teklifBtn.href = '#';
      teklifBtn.addEventListener('click', function (e) {
        e.preventDefault();
        close();
        var target = document.querySelector('form[action*="script.google"]');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }

    document.body.appendChild(root);
    return root;
  }

  function open() {
    ensureDrawer();
    document.getElementById('siteMobileMenu').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    var root = document.getElementById('siteMobileMenu');
    if (root) root.classList.remove('open');
    document.body.style.overflow = '';
  }

  function bindTriggers() {
    document.querySelectorAll('.site-menu-btn, button[aria-label="menu"]').forEach(function (btn) {
      if (btn.dataset.menuBound === '1') return;
      btn.dataset.menuBound = '1';
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        open();
      });
    });
  }

  bindTriggers();
  [200, 600, 1500].forEach(function (ms) { setTimeout(bindTriggers, ms); });
  new MutationObserver(bindTriggers).observe(document.documentElement, { childList: true, subtree: true });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
