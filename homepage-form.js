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

  function findHomeForm(fromEl) {
    if (fromEl && fromEl.tagName === 'FORM' && isHomeContactForm(fromEl)) {
      return fromEl;
    }
    if (fromEl && fromEl.closest) {
      var inForm = fromEl.closest('form');
      if (isHomeContactForm(inForm)) return inForm;
    }
    var ad = document.querySelector('form [name="AdSoyad"]');
    return ad && ad.closest ? ad.closest('form') : null;
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
    form.id = 'teklif-ust';
    form.setAttribute('data-home-wa-form', '1');
    form.setAttribute('novalidate', 'novalidate');
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

    window.location.assign(
      'https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n'))
    );
    return true;
  }

  function isContactSubmitButton(btn) {
    if (!btn || btn.tagName !== 'BUTTON') return false;
    var form = findHomeForm(btn);
    if (!form || !btn.closest('form')) return false;
    var label = (btn.textContent || '').toLocaleLowerCase('tr-TR');
    return label.indexOf('teklif') !== -1 && label.indexOf('gönderiliyor') === -1;
  }

  function bindForm(form) {
    if (!form || form.dataset.waBound === '1') return;
    form.dataset.waBound = '1';
    prepareForm(form);

    form.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === 'function') {
          e.stopImmediatePropagation();
        }
        sendToWhatsApp(form);
      },
      true
    );

    form.querySelectorAll('button').forEach(function (btn) {
      if (!isContactSubmitButton(btn)) return;
      btn.type = 'button';
      btn.removeAttribute('disabled');
      btn.addEventListener(
        'click',
        function (e) {
          e.preventDefault();
          e.stopPropagation();
          if (typeof e.stopImmediatePropagation === 'function') {
            e.stopImmediatePropagation();
          }
          sendToWhatsApp(form);
        },
        true
      );
    });
  }

  function hijackForm() {
    if (!isHomepage()) return;
    var form = findHomeForm();
    if (!form) return;

    if (form.dataset.waBound === '1') {
      prepareForm(form);
      return;
    }

    var parent = form.parentNode;
    if (!parent) return;

    var clone = form.cloneNode(true);
    parent.replaceChild(clone, form);
    bindForm(clone);
  }

  function patchForms() {
    if (!isHomepage()) return;
    var form = findHomeForm();
    if (form) bindForm(form);
  }

  hijackForm();
  patchForms();

  document.addEventListener('DOMContentLoaded', function () {
    hijackForm();
    patchForms();
  }, { once: true });

  window.addEventListener('load', function () {
    hijackForm();
    patchForms();
    window.setTimeout(hijackForm, 400);
    window.setTimeout(patchForms, 400);
    window.setTimeout(hijackForm, 1500);
    window.setTimeout(patchForms, 1500);
    window.setTimeout(hijackForm, 3500);
  }, { once: true });

  var observer = new MutationObserver(function () {
    if (!isHomepage()) return;
    var form = findHomeForm();
    if (form && form.dataset.waBound !== '1') {
      hijackForm();
    } else if (form) {
      prepareForm(form);
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(function () {
    observer.disconnect();
  }, 45000);
})();
