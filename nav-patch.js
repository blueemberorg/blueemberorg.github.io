(function () {
  var ITEMS = [
    { label: 'Mobil Uygulama Hizmetleri', href: '/ajans' },
    { label: 'Sağlık Sektörü Çözümleri', href: '/saglik' },
    { label: 'Araç Kiralama ve Lojistik', href: '/lojistik' },
    { label: 'Dijital Kuyumcu', href: '/kuyumcu' }
  ];

  function createItem(label, href) {
    var wrap = document.createElement('div');
    wrap.className = 'border border-transparent py-2 px-4 rounded-4xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 text-inherit';
    var link = document.createElement('a');
    link.href = href;
    link.textContent = label;
    wrap.appendChild(link);
    return wrap;
  }

  function patchNav(nav) {
    if (!nav) return;
    var blogLink = nav.querySelector('a[href="/blog"]');
    if (!blogLink) return;
    var blogWrap = blogLink.closest('div');
    if (!blogWrap || !blogWrap.parentNode) return;

    ITEMS.forEach(function (item) {
      if (nav.querySelector('a[href="' + item.href + '"]')) return;
      blogWrap.parentNode.insertBefore(createItem(item.label, item.href), blogWrap);
    });
  }

  function patchAll() {
    document.querySelectorAll('header nav').forEach(patchNav);
  }

  patchAll();
  [100, 400, 1000, 2500].forEach(function (ms) {
    setTimeout(patchAll, ms);
  });

  new MutationObserver(patchAll).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  if (!document.querySelector('link[href="/mobile-menu.css"]')) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/mobile-menu.css';
    document.head.appendChild(css);
  }
  if (!document.querySelector('script[src="/mobile-menu.js"]') && !window.__siteMobileMenuReady) {
    var js = document.createElement('script');
    js.src = '/mobile-menu.js';
    document.head.appendChild(js);
  }
})();
