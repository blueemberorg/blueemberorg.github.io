(function () {
  var VERSION = '20261010b';
  var files = [
    'phone.js',
    'techlogos.js',
    'screens1.js',
    'screens2.js',
    'screens3.js',
    'screens4.js',
    'showcase.js',
    'sections.js',
    'form.js',
    'app.js'
  ];

  var booted = false;

  function showError(message) {
    var root = document.getElementById('root');
    if (!root) return;
    var wrap = document.createElement('div');
    wrap.style.cssText = 'padding:80px 20px;text-align:center;color:#6b6480;font-family:sans-serif';
    var p1 = document.createElement('p');
    p1.textContent = 'Sayfa yüklenemedi.';
    var p2 = document.createElement('p');
    p2.style.cssText = 'font-size:14px;margin-top:8px';
    p2.textContent = message;
    wrap.appendChild(p1);
    wrap.appendChild(p2);
    root.textContent = '';
    root.appendChild(wrap);
  }

  function runScript(code) {
    var script = document.createElement('script');
    script.textContent = code;
    document.body.appendChild(script);
  }

  function boot() {
    if (booted) return;
    booted = true;
    if (!window.React || !window.ReactDOM) {
      showError('React kütüphaneleri yüklenemedi.');
      return;
    }
    var promises = files.map(function (name) {
      return fetch('/mobil-uygulama/' + name + '?v=' + VERSION)
        .then(function (res) {
          if (!res.ok) throw new Error(name + ' bulunamadı');
          return res.text();
        });
    });
    Promise.all(promises)
      .then(function (codes) {
        codes.forEach(runScript);
      })
      .catch(function (err) {
        showError(err.message || 'Bilinmeyen hata');
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
