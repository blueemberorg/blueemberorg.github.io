(function () {
  'use strict';

  var WA = '905370580038';
  var bound = false;
  var observer = null;

  function cleanPhone(v) {
    return (v || '').replace(/\D/g, '');
  }

  function findHomeForm() {
    return document.querySelector('form[data-home-wa-form]') ||
      document.querySelector('form[action*="script.google.com"]') ||
      (function () {
        var ad = document.querySelector('[name="AdSoyad"]');
        return ad ? ad.closest('form') : null;
      })();
  }

  function focusFirst(fields) {
    for (var i = 0; i < fields.length; i++) {
      if (fields[i] && typeof fields[i].focus === 'function') {
        fields[i].focus();
        return;
      }
    }
  }

  function bindHomeForm() {
    if (bound) return;

    var form = findHomeForm();
    if (!form) return;

    bound = true;
    form.setAttribute('data-home-wa-form', '1');

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
        focusFirst([ad, email, tel]);
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

    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  function start() {
    try {
      bindHomeForm();
      if (!bound) {
        observer = new MutationObserver(function () {
          bindHomeForm();
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
        window.setTimeout(bindHomeForm, 500);
        window.setTimeout(bindHomeForm, 2000);
      }
    } catch (err) {
      /* avoid breaking the page */
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
