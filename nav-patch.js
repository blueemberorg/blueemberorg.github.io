(function () {
  'use strict';

  var NAV = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Portföy', href: '/product' },
    { label: 'Mobil Uygulama Hizmetleri', href: '/ajans' },
    { label: 'Sağlık Sektörü Çözümleri', href: '/saglik' },
    { label: 'Araç Kiralama ve Lojistik', href: '/lojistik' },
    { label: 'Kuyumcu White-Label', href: '/kuyumcu' }
  ];

  var patched = false;
  var observer = null;

  function isNextPage() {
    return !!document.querySelector('link[href*="/_next/static/"]');
  }

  function isActive(href) {
    var path = location.pathname.replace(/\/$/, '') || '/';
    var target = href.replace(/\/$/, '') || '/';
    if (target === '/') return path === '/';
    return path === target || path.indexOf(target + '/') === 0;
  }

  function ensureLockStyle() {
    if (document.getElementById('next-header-lock')) return;
    var style = document.createElement('style');
    style.id = 'next-header-lock';
    style.textContent =
      'body.landing-body>header.fixed,' +
      'body.landing-body>header:not(.site-header){' +
      'display:none!important;visibility:hidden!important;height:0!important;' +
      'overflow:hidden!important;pointer-events:none!important;position:absolute!important;}';
    document.head.appendChild(style);
  }

  function ensureAssets() {
    if (!document.querySelector('link[href*="landing-shell.css"]')) {
      var shell = document.createElement('link');
      shell.rel = 'stylesheet';
      shell.href = '/landing-shell.css?v=6';
      document.head.appendChild(shell);
    }
    if (!document.querySelector('link[href*="mobile-menu.css"]')) {
      var menuCss = document.createElement('link');
      menuCss.rel = 'stylesheet';
      menuCss.href = '/mobile-menu.css?v=3';
      document.head.appendChild(menuCss);
    }
    if (!document.querySelector('script[src*="mobile-menu.js"]') && !window.__siteMobileMenuReady) {
      var menuJs = document.createElement('script');
      menuJs.src = '/mobile-menu.js?v=2';
      menuJs.defer = true;
      document.body.appendChild(menuJs);
    }
  }

  function hideLegacyHeader(header) {
    if (!header || header.classList.contains('site-header')) return;
    header.setAttribute('aria-hidden', 'true');
    header.style.cssText =
      'position:absolute!important;width:1px!important;height:1px!important;padding:0!important;' +
      'margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;' +
      'white-space:nowrap!important;border:0!important;pointer-events:none!important;' +
      'display:none!important;visibility:hidden!important;';
  }

  function removeLegacyHeaders() {
    document.querySelectorAll('body > header').forEach(function (header) {
      if (!header.classList.contains('site-header')) {
        hideLegacyHeader(header);
      }
    });
  }

  function buildHeader() {
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
    menuBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

    inner.appendChild(logo);
    inner.appendChild(nav);
    inner.appendChild(actions);
    inner.appendChild(menuBtn);
    header.appendChild(inner);
    return header;
  }

  function ensureHeader() {
    if (!isNextPage()) return false;

    document.body.classList.add('landing-body');

    var header = document.querySelector('header.site-header[data-unified]');
    if (!header) {
      header = buildHeader();
      document.body.insertBefore(header, document.body.firstChild);
    } else if (header.parentNode !== document.body) {
      document.body.insertBefore(header, document.body.firstChild);
    }

    removeLegacyHeaders();
    document.body.style.paddingTop = '56px';
    patched = true;
    return true;
  }

  function run() {
    try {
      if (!isNextPage()) return;
      ensureLockStyle();
      ensureAssets();
      ensureHeader();
    } catch (err) {
      /* avoid breaking the page */
    }
  }

  ensureLockStyle();
  run();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  }

  window.addEventListener('load', function () {
    run();
    window.setTimeout(run, 200);
    window.setTimeout(run, 800);
    window.setTimeout(run, 2000);
  }, { once: true });

  observer = new MutationObserver(function () {
    if (!isNextPage()) return;
    if (document.querySelector('body > header:not(.site-header)')) {
      run();
    }
  });

  if (document.body) {
    observer.observe(document.body, { childList: true });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      observer.observe(document.body, { childList: true });
    }, { once: true });
  }

  window.setTimeout(function () {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }, 25000);
})();
