(function () {
  'use strict';

  var patched = false;
  var observer = null;

  var HEADER_HTML =
    '<header class="site-header" data-unified="1">' +
      '<div class="site-header-inner">' +
        '<a href="/" class="site-logo">' +
          '<img width="25" height="34" alt="logo" src="/NavImage/logo.png" />' +
          '<span>BLUE EMBER</span>' +
        '</a>' +
        '<nav class="site-nav" aria-label="Ana menü">' +
          '<a href="/" class="active">Anasayfa</a>' +
          '<a href="/product">Portföy</a>' +
          '<a href="/ajans">Mobil Uygulama Hizmetleri</a>' +
          '<a href="/saglik">Sağlık Sektörü Çözümleri</a>' +
          '<a href="/lojistik">Araç Kiralama ve Lojistik</a>' +
          '<a href="/kuyumcu">Kuyumcu White-Label</a>' +
        '</nav>' +
        '<div class="site-actions">' +
          '<a href="#teklif-ust" class="site-btn-primary">Teklif al</a>' +
        '</div>' +
        '<button type="button" class="site-menu-btn" aria-label="Menü aç">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
        '</button>' +
      '</div>' +
    '</header>';

  function isHomepage() {
    var path = location.pathname.replace(/\/$/, '') || '/';
    return path === '/' || path === '/index.html';
  }

  function removeLegacyHeaders() {
    document.querySelectorAll('body > header').forEach(function (header) {
      if (!header.classList.contains('site-header')) {
        header.remove();
      }
    });
  }

  function ensureHeader() {
    if (!isHomepage()) return;

    removeLegacyHeaders();

    var header = document.querySelector('header.site-header');
    if (!header) {
      var wrap = document.createElement('div');
      wrap.innerHTML = HEADER_HTML;
      header = wrap.firstElementChild;
      document.body.insertBefore(header, document.body.firstChild);
    } else if (header.parentNode !== document.body) {
      document.body.insertBefore(header, document.body.firstChild);
    }

    document.body.classList.add('landing-body');
    document.body.style.paddingTop = '64px';
    patched = true;
  }

  function run() {
    try {
      ensureHeader();
    } catch (err) {
      /* ignore */
    }
  }

  run();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  }

  window.addEventListener('load', function () {
    run();
    window.setTimeout(run, 400);
    window.setTimeout(run, 1500);
    window.setTimeout(run, 3500);
  }, { once: true });

  observer = new MutationObserver(function () {
    if (!isHomepage()) return;
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
  }, 20000);
})();
