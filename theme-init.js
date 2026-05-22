(function () {
  var storageKey = "theme";

  function getPreferredDark() {
    var stored = localStorage.getItem(storageKey);
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function applyTheme(isDark) {
    document.documentElement.classList.toggle("dark", isDark);
  }

  function toggleTheme() {
    var isDark = !document.documentElement.classList.contains("dark");
    applyTheme(isDark);
    localStorage.setItem(storageKey, isDark ? "dark" : "light");
  }

  applyTheme(getPreferredDark());

  function bindThemeButtons() {
    document.querySelectorAll('[aria-label="Temayı Değiştir"]').forEach(bindOne);
    document.querySelectorAll("button").forEach(function (btn) {
      var text = btn.textContent.trim();
      if (text === "Aydınlık Mod" || text === "Karanlık Mod") bindOne(btn);
    });
  }

  function bindOne(btn) {
    if (btn.dataset.themeBound === "1") return;
    btn.dataset.themeBound = "1";
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindThemeButtons);
  } else {
    bindThemeButtons();
  }

  // React hydration may replace header buttons
  var observer = new MutationObserver(bindThemeButtons);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
