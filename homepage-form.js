(function () {
  var WA = '905370580038';

  function cleanPhone(v) {
    return (v || '').replace(/\D/g, '');
  }

  function bindHomeForm() {
    var form = document.querySelector('form[action*="script.google.com"]');
    if (!form || form.dataset.waBound === '1') return;
    form.dataset.waBound = '1';

    var wrap = form.parentElement;
    while (wrap && wrap.tagName !== 'SECTION' && wrap.tagName !== 'MAIN' && !wrap.id) {
      wrap = wrap.parentElement;
    }
    if (wrap && !document.getElementById('teklif-ust')) {
      wrap.id = 'teklif-ust';
    }

    form.removeAttribute('action');
    form.removeAttribute('method');
    form.removeAttribute('target');

    var iframe = document.getElementById('hidden_iframe');
    if (iframe) iframe.remove();

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var ad = form.querySelector('[name="AdSoyad"]');
      var email = form.querySelector('[name="Email"]');
      var tel = form.querySelector('[name="Telefon"]');
      var mesaj = form.querySelector('[name="Mesaj"]');
      var ok = true;

      [ad, email, tel].forEach(function (el) {
        if (!el) return;
        el.classList.remove('ring-2', 'ring-red-500');
      });

      if (!ad || ad.value.trim().length < 2) {
        if (ad) ad.classList.add('ring-2', 'ring-red-500');
        ok = false;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        if (email) email.classList.add('ring-2', 'ring-red-500');
        ok = false;
      }
      if (!tel || cleanPhone(tel.value).length < 10) {
        if (tel) tel.classList.add('ring-2', 'ring-red-500');
        ok = false;
      }
      if (!ok) {
        (ad && !ad.value.trim() ? ad : email && !email.value.trim() ? email : tel).focus();
        return;
      }

      var lines = [
        'Merhaba Blue Ember, teklif talebim var.',
        '',
        '*Ad Soyad:* ' + ad.value.trim(),
        '*E-posta:* ' + email.value.trim(),
        '*Telefon:* ' + tel.value.trim()
      ];
      if (mesaj && mesaj.value.trim()) {
        lines.push('*Mesaj:* ' + mesaj.value.trim());
      }

      var url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }

  bindHomeForm();
  [200, 800, 2000].forEach(function (ms) {
    setTimeout(bindHomeForm, ms);
  });
  new MutationObserver(bindHomeForm).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
