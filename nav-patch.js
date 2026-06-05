(function () {
  var LABEL = 'Mobil Uygulama Hizmetleri';
  var HREF = '/ajans';

  function createItem() {
    var wrap = document.createElement('div');
    wrap.className = 'border border-transparent py-2 px-4 rounded-4xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 text-inherit';
    var link = document.createElement('a');
    link.href = HREF;
    link.textContent = LABEL;
    wrap.appendChild(link);
    return wrap;
  }

  function patchNav(nav) {
    if (!nav || nav.querySelector('a[href="' + HREF + '"]')) return;
    var blogLink = nav.querySelector('a[href="/blog"]');
    if (!blogLink) return;
    var blogWrap = blogLink.closest('div');
    if (!blogWrap || !blogWrap.parentNode) return;
    blogWrap.parentNode.insertBefore(createItem(), blogWrap);
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
})();
