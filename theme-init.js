(function () {
  'use strict';

  var storageKey = 'theme';
  var observer = null;

  function getPreferredDark() {
    try {
      var stored = localStorage.getItem(storageKey);
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
    } catch (err) {
      /* private mode / blocked storage */
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
  }

  function toggleTheme() {
    var isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    try {
      localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
    } catch (err) {
      /* ignore */
    }
  }

  function bindOne(btn) {
    if (!btn || btn.dataset.themeBound === '1') return;
    btn.dataset.themeBound = '1';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
    });
  }

  function bindThemeButtons() {
    try {
      document.querySelectorAll('[aria-label="Temayı Değiştir"]').forEach(bindOne);
      document.querySelectorAll('button').forEach(function (btn) {
        var text = (btn.textContent || '').trim();
        if (text === 'Aydınlık Mod' || text === 'Karanlık Mod') bindOne(btn);
      });
    } catch (err) {
      /* ignore */
    }
  }

  try {
    applyTheme(getPreferredDark());
  } catch (err) {
    /* ignore */
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindThemeButtons, { once: true });
  } else {
    bindThemeButtons();
  }

  observer = new MutationObserver(bindThemeButtons);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(function () {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }, 8000);
})();
