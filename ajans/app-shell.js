(function () {
  function initReveal() {
    var reveals = document.querySelectorAll('#root .reveal');
    if (!reveals.length) return;

    function show(el, instant) {
      if (instant) el.classList.add('no-anim');
      el.classList.add('in');
    }

    reveals.forEach(function (el) {
      if (el.classList.contains('in')) return;
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) show(el, true);
    });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            show(en.target, false);
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) {
        if (!el.classList.contains('in')) io.observe(el);
      });
    } else {
      reveals.forEach(function (el) { show(el, true); });
    }
  }

  function boot() {
    if (window.initHeroForms) window.initHeroForms();
    initReveal();
  }

  var subnav = document.getElementById('pageSubnav');
  if (subnav) {
    var onScroll = function () { subnav.classList.toggle('scrolled', window.scrollY > 80); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var tries = 0;
  var timer = setInterval(function () {
    tries += 1;
    if (document.querySelector('#root .hero') || tries > 60) {
      clearInterval(timer);
      boot();
    }
  }, 150);
})();
