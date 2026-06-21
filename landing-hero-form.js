(function () {
  var WA = '905370580038';

  function cleanPhone(v) {
    return (v || '').replace(/\D/g, '');
  }

  function bindHeroForms() {
    document.querySelectorAll('[data-hero-form]').forEach(function (wrap) {
      var form = wrap.querySelector('form');
      if (!form || form.dataset.bound === '1') return;
      form.dataset.bound = '1';

      var intro = wrap.dataset.intro || 'Merhaba, teklif talebim var.';
      var wa = wrap.dataset.wa || WA;

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ad = form.querySelector('[name="ad"]');
        var tel = form.querySelector('[name="tel"]') || form.querySelector('[name="telefon"]');
        var extra = form.querySelector('[name="extra"]');
        var ok = true;

        [ad, tel].forEach(function (el) {
          if (!el) return;
          el.classList.remove('err');
        });

        if (!ad || ad.value.trim().length < 2) {
          if (ad) ad.classList.add('err');
          ok = false;
        }
        if (!tel || cleanPhone(tel.value).length < 10) {
          if (tel) tel.classList.add('err');
          ok = false;
        }
        if (!ok) {
          (ad && ad.classList.contains('err') ? ad : tel).focus();
          return;
        }

        var lines = [intro, ''];
        lines.push('*Ad Soyad:* ' + ad.value.trim());
        lines.push('*Telefon:* ' + tel.value.trim());
        if (extra && extra.value.trim()) lines.push('*' + (extra.dataset.label || 'Not') + ':* ' + extra.value.trim());
        lines.push('');
        lines.push('(Hızlı form — detaylı bilgi için görüşelim)');

        var url = 'https://wa.me/' + wa + '?text=' + encodeURIComponent(lines.join('\n'));
        window.open(url, '_blank', 'noopener');
      });
    });
  }

  bindHeroForms();
  window.initHeroForms = bindHeroForms;
})();
