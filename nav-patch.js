(function () {
  var NAV = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Portföy', href: '/product' },
    { label: 'Mobil Uygulama Hizmetleri', href: '/ajans' },
    { label: 'Sağlık Sektörü Çözümleri', href: '/saglik' },
    { label: 'Araç Kiralama ve Lojistik', href: '/lojistik' },
    { label: 'Kuyumcu White-Label', href: '/kuyumcu' }
  ];

  function isActive(href) {
    var path = location.pathname.replace(/\/$/, '') || '/';
    var target = href.replace(/\/$/, '') || '/';
    if (target === '/') return path === '/';
    return path === target || path.indexOf(target + '/') === 0;
  }

  function ensureAssets() {
    if (!document.querySelector('link[href="/landing-shell.css"]')) {
      var shell = document.createElement('link');
      shell.rel = 'stylesheet';
      shell.href = '/landing-shell.css';
      document.head.appendChild(shell);
    }
    if (!document.querySelector('link[href="/mobile-menu.css"]')) {
      var menuCss = document.createElement('link');
      menuCss.rel = 'stylesheet';
      menuCss.href = '/mobile-menu.css';
      document.head.appendChild(menuCss);
    }
    if (!document.querySelector('script[src="/mobile-menu.js"]') && !window.__siteMobileMenuReady) {
      var menuJs = document.createElement('script');
      menuJs.src = '/mobile-menu.js';
      document.head.appendChild(menuJs);
    }
  }

  function replaceHeader() {
    var existing = document.querySelector('header.site-header[data-unified]');
    if (existing) return;

    var old = document.querySelector('body > header');
    if (!old || old.classList.contains('site-header')) return;

    old.style.display = 'none';
    old.setAttribute('aria-hidden', 'true');

    var header = document.createElement('header');
    header.className = 'site-header';
    header.setAttribute('data-unified', '1');

    var inner = document.createElement('div');
    inner.className = 'site-header-inner';

    var logo = document.createElement('a');
    logo.href = '/';
    logo.className = 'site-logo';
    logo.innerHTML = '<img width="25" height="34" alt="logo" src="/NavImage/logo.png" /><span>BLUE EMBER</span>';

    var nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', 'Ana menü');
    NAV.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      if (isActive(item.href)) a.className = 'active';
      nav.appendChild(a);
    });

    var actions = document.createElement('div');
    actions.className = 'site-actions';
    var cta = document.createElement('a');
    cta.href = location.pathname === '/' || location.pathname === '/index.html' ? '#teklif-ust' : '/#teklif-ust';
    cta.className = 'site-btn-primary';
    cta.textContent = 'Teklif al';
    actions.appendChild(cta);

    var menuBtn = document.createElement('button');
    menuBtn.type = 'button';
    menuBtn.className = 'site-menu-btn';
    menuBtn.setAttribute('aria-label', 'Menü aç');
    menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

    inner.appendChild(logo);
    inner.appendChild(nav);
    inner.appendChild(actions);
    inner.appendChild(menuBtn);
    header.appendChild(inner);

    document.body.insertBefore(header, document.body.firstChild);
    document.body.style.paddingTop = '64px';
  }

  function run() {
    ensureAssets();
    replaceHeader();
  }

  run();
  [100, 400, 1000, 2500].forEach(function (ms) {
    setTimeout(run, ms);
  });
  new MutationObserver(run).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
