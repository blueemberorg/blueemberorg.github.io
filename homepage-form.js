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

  function findHomeForm(fromEl) {
    if (fromEl && fromEl.tagName === 'FORM' && isHomeContactForm(fromEl)) {
      return fromEl;
    }
    if (fromEl && fromEl.closest) {
      var inForm = fromEl.closest('form');
      if (isHomeContactForm(inForm)) return inForm;
    }
    var ad = document.querySelector('[name="AdSoyad"]');
    return ad && ad.closest ? ad.closest('form') : null;
  }

  function patchForms() {
    if (!isHomepage()) return;
    var form = findHomeForm();
    if (!form) return;
    prepareForm(form);
    form.querySelectorAll('button').forEach(function (btn) {
      if (!/teklif/i.test(btn.textContent || '')) return;
      btn.type = 'button';
      btn.removeAttribute('disabled');
    });
  }

  function intercept(e) {
    if (!isHomepage()) return;

    var form = null;
    if (e.type === 'submit' && e.target && e.target.tagName === 'FORM') {
      form = findHomeForm(e.target);
    } else {
      var btn = e.target && e.target.closest ? e.target.closest('button') : null;
      if (!btn || !/teklif/i.test(btn.textContent || '')) return;
      form = findHomeForm(btn);
    }

    if (!form || !isHomeContactForm(form)) return;

    stopEvent(e);
    prepareForm(form);
    sendToWhatsApp(form);
  }

  window.addEventListener('submit', intercept, true);
  window.addEventListener('click', intercept, true);
  window.addEventListener('pointerdown', intercept, true);

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
