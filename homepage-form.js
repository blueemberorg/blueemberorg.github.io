(function () {
  'use strict';

  var WA = '905370580038';

  function isHomepage() {
    var path = (location.pathname || '/').replace(/\/$/, '') || '/';
    return path === '/' || path === '/index.html';
  }

  function cleanPhone(v) {
    return (v || '').replace(/\D/g, '');
  }

  function isHomeContactForm(form) {
    if (!form || form.tagName !== 'FORM') return false;
    if (form.closest('[data-hero-form]')) return false;
    return !!(
      form.querySelector('[name="AdSoyad"]') &&
      form.querySelector('[name="Email"]') &&
      form.querySelector('[name="Telefon"]')
    );
  }

  function focusFirst(fields) {
    for (var i = 0; i < fields.length; i++) {
      if (fields[i] && typeof fields[i].focus === 'function') {
        fields[i].focus();
        return;
      }
    }
  }

  function prepareForm(form) {
    form.setAttribute('data-home-wa-form', '1');
    form.removeAttribute('action');
    form.removeAttribute('method');
    form.removeAttribute('target');
    var iframe = document.getElementById('hidden_iframe');
    if (iframe) iframe.remove();
  }

  function sendToWhatsApp(form) {
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
      return false;
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
    window.location.href = url;
    return true;
  }

  function stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === 'function') {
      e.stopImmediatePropagation();
    }
  }

  function handleSubmit(e) {
    if (!isHomepage()) return;
    var form = e.target;
    if (!isHomeContactForm(form)) return;

    stopEvent(e);
    prepareForm(form);
    sendToWhatsApp(form);
  }

  function handleClick(e) {
    if (!isHomepage()) return;
    var btn = e.target && e.target.closest ? e.target.closest('button') : null;
    if (!btn) return;
    var form = btn.closest('form');
    if (!isHomeContactForm(form)) return;
    if (btn.type !== 'submit' && !/teklif/i.test(btn.textContent || '')) return;

    stopEvent(e);
    prepareForm(form);
    sendToWhatsApp(form);
  }

  function patchForms() {
    if (!isHomepage()) return;
    document.querySelectorAll('form').forEach(function (form) {
      if (isHomeContactForm(form)) prepareForm(form);
    });
  }

  document.addEventListener('submit', handleSubmit, true);
  document.addEventListener('click', handleClick, true);

  patchForms();
  document.addEventListener('DOMContentLoaded', patchForms, { once: true });
  window.addEventListener('load', function () {
    patchForms();
    window.setTimeout(patchForms, 500);
    window.setTimeout(patchForms, 2000);
  }, { once: true });

  var observer = new MutationObserver(patchForms);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(function () {
    observer.disconnect();
  }, 30000);
})();
