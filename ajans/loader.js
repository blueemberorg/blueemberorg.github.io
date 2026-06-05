(function () {
  var files = [
    'phone.jsx',
    'techlogos.jsx',
    'screens1.jsx',
    'screens2.jsx',
    'screens3.jsx',
    'showcase.jsx',
    'sections.jsx',
    'form.jsx',
    'app.jsx'
  ];

  var booted = false;

  function showError(message) {
    var root = document.getElementById('root');
    if (!root) return;
    root.innerHTML = '<div style="padding:80px 20px;text-align:center;color:#6b6480;font-family:sans-serif"><p>Sayfa yüklenemedi.</p><p style="font-size:14px;margin-top:8px">' + message + '</p></div>';
  }

  function runScript(code) {
    var transformed = window.Babel.transform(code, { presets: ['react'] }).code;
    var script = document.createElement('script');
    script.textContent = transformed;
    document.body.appendChild(script);
  }

  function loadNext(index) {
    if (index >= files.length) return;
    fetch('/ajans/' + files[index])
      .then(function (res) {
        if (!res.ok) throw new Error(files[index] + ' bulunamadı');
        return res.text();
      })
      .then(function (code) {
        runScript(code);
        loadNext(index + 1);
      })
      .catch(function (err) {
        showError(err.message || 'Bilinmeyen hata');
      });
  }

  function boot() {
    if (booted) return;
    booted = true;
    if (!window.React || !window.ReactDOM || !window.Babel) {
      showError('React kütüphaneleri yüklenemedi.');
      return;
    }
    loadNext(0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
