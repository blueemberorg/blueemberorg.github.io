(function () {
  var WA = '905370580038';

  var state = {
    metal: 'yellow14',
    karat: 1.2,
    cut: 'Round',
    gold: 3847,
    trend: null,
    arOn: false,
    selected: { ar: true, fiyat: true, sertifika: true, karsilastirma: false, stok: false },
    storeName: '',
    district: ''
  };

  var iv;

  function fmt(n) {
    return new Intl.NumberFormat('tr-TR').format(Math.round(n));
  }
  function tl(n) {
    return '₺' + fmt(n);
  }

  var metalData = {
    yellow14: { label: '14K Sarı Altın', purity: 0.585, mult: 1.0 },
    rose14: { label: '14K Rose Gold', purity: 0.585, mult: 1.04 },
    white14: { label: '14K Beyaz Altın', purity: 0.585, mult: 1.06 },
    platin: { label: 'Platin', purity: 0.95, mult: 1.5 }
  };

  function arPrice() {
    var m = metalData[state.metal];
    var k = state.karat;
    var cutMult = { Round: 1.12, Princess: 1.0, Oval: 1.04, Emerald: 1.01, Pear: 1.03 }[state.cut] || 1;
    return Math.pow(k, 1.85) * 38000 * m.mult * cutMult + 7500;
  }

  function products() {
    var g = state.gold;
    function calc(gram, purity, pct) {
      var ham = gram * g * purity;
      return ham * (1 + pct) * 1.2;
    }
    return [
      { sku: 'YZ-2847', name: 'Solitaire Yüzük', ayar: '14K', gram: 4.2, total: calc(4.2, 0.585, 0.18) },
      { sku: 'BL-1122', name: 'Zincir Bileklik', ayar: '22K', gram: 8.1, total: calc(8.1, 0.916, 0.12) },
      { sku: 'KP-0831', name: 'Kolye Uç Seti', ayar: '14K', gram: 2.4, total: calc(2.4, 0.585, 0.22) }
    ];
  }

  function segStyle(active) {
    return active
      ? 'padding:9px 8px;border:1px solid #B08D57;background:rgba(176,141,87,.18);color:#E8C98A;font:600 11px Manrope,sans-serif;border-radius:9px;cursor:pointer'
      : 'padding:9px 8px;border:1px solid rgba(255,255,255,.16);background:transparent;color:rgba(255,255,255,.7);font:600 11px Manrope,sans-serif;border-radius:9px;cursor:pointer';
  }

  function sparkPaths(tr) {
    if (!tr || tr.length < 2) return { line: '', area: '', lastX: 294, lastY: 35 };
    var w = 300, h = 70, pad = 4;
    var min = Math.min.apply(null, tr), max = Math.max.apply(null, tr), rng = (max - min) || 1;
    var pts = tr.map(function (v, i) {
      return [pad + (i / (tr.length - 1)) * (w - 2 * pad), pad + (1 - (v - min) / rng) * (h - 2 * pad)];
    });
    var line = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ');
    return {
      line: line,
      area: line + ' L ' + (w - pad) + ' ' + (h - pad) + ' L ' + pad + ' ' + (h - pad) + ' Z',
      lastX: pts[pts.length - 1][0].toFixed(1),
      lastY: pts[pts.length - 1][1].toFixed(1)
    };
  }

  function formulaVals() {
    var g = state.gold, gram = 4.2, purity = 0.585, pct = 0.18;
    var ham = gram * g * purity, isc = ham * pct, ara = ham + isc, kdv = ara * 0.2;
    return { gram: gram, ham: ham, isc: isc, kdv: kdv, total: ara + kdv };
  }

  var moduleCat = {
    ar: { label: 'AR Yüzük Deneme', desc: 'Parmakta görselleştirme (öneri değil)' },
    fiyat: { label: 'Canlı Altın Fiyatı', desc: 'Otomatik fiyat + tablo & grafik' },
    sertifika: { label: 'Sertifika QR Doğrulama', desc: 'GIA / JTR bağımsız doğrulama' },
    karsilastirma: { label: 'Karşılaştırma Tablosu', desc: 'Ürünleri yan yana kıyaslama' },
    stok: { label: 'Stok & Mağaza Yönetimi', desc: 'Barkod, çoklu şube, personel' }
  };

  function waModuleHref() {
    var chosen = Object.keys(state.selected).filter(function (k) { return state.selected[k]; });
    var lines = [
      'Merhaba, kuyumcu white-label mobil uygulama için bilgi almak istiyorum.', '',
      'Mağaza: ' + (state.storeName || '—'),
      'Konum: ' + (state.district || '—'), '',
      'İlgilendiğim modüller:',
      chosen.length ? chosen.map(function (k) { return '• ' + moduleCat[k].label; }).join('\n') : '• (henüz seçilmedi)'
    ];
    return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  function renderArDemo() {
    var el = document.getElementById('arDemo');
    if (!el) return;

    var phoneInner = state.arOn
      ? '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">' +
          '<span style="font:700 10px Manrope;letter-spacing:.2em;color:#E8C98A">◆ AR KAMERA</span>' +
          '<span style="display:inline-flex;align-items:center;gap:6px;font:600 9px Manrope;color:rgba(255,255,255,.6)"><span style="width:6px;height:6px;border-radius:50%;background:#6FCF7E;animation:pulseDot 1.6s infinite"></span>KAMERA AKTİF</span>' +
        '</div>' +
        '<div style="height:300px;border-radius:18px;background:radial-gradient(circle at 50% 42%,#3a342a,#161310);position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.07)">' +
          '<div style="position:absolute;left:16px;top:16px;width:24px;height:24px;border-left:2px solid rgba(232,201,138,.7);border-top:2px solid rgba(232,201,138,.7)"></div>' +
          '<div style="position:absolute;right:16px;top:16px;width:24px;height:24px;border-right:2px solid rgba(232,201,138,.7);border-top:2px solid rgba(232,201,138,.7)"></div>' +
          '<div style="position:absolute;left:16px;bottom:16px;width:24px;height:24px;border-left:2px solid rgba(232,201,138,.7);border-bottom:2px solid rgba(232,201,138,.7)"></div>' +
          '<div style="position:absolute;right:16px;bottom:16px;width:24px;height:24px;border-right:2px solid rgba(232,201,138,.7);border-bottom:2px solid rgba(232,201,138,.7)"></div>' +
          '<div style="position:absolute;left:0;right:0;top:0;height:50px;background:linear-gradient(180deg,rgba(232,201,138,.2),transparent);animation:scan 2.6s linear infinite"></div>' +
          '<div style="position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);text-align:center"><div style="font-size:34px;color:rgba(232,201,138,.85)">◆</div><div style="font:600 9px Manrope;letter-spacing:.16em;color:rgba(255,255,255,.5);margin-top:10px">PARMAĞI ÇERÇEVELEYİN</div></div>' +
          '<div style="position:absolute;left:16px;bottom:54px;display:inline-flex;align-items:center;gap:7px;background:rgba(0,0,0,.55);padding:6px 11px;border-radius:999px;font:600 10px Manrope;color:#E8C98A">✓ Algılandı · ' + state.karat.toFixed(1) + ' ct ' + state.cut + '</div>' +
        '</div>' +
        '<div style="display:flex;gap:10px;margin-top:16px">' +
          '<button type="button" data-ar-toggle style="flex:1;padding:13px;border:1px solid rgba(255,255,255,.18);background:transparent;color:#F4EFE6;border-radius:11px;font:600 12px Manrope;cursor:pointer">← Konfigürasyon</button>' +
          '<button type="button" style="flex:1;padding:13px;border:none;background:#B08D57;color:#1C1A15;border-radius:11px;font:700 12px Manrope;cursor:pointer">Fotoğraf Kaydet</button>' +
        '</div>'
      : (function () {
          var metals = Object.keys(metalData).map(function (key) {
            return '<button type="button" data-metal="' + key + '" style="' + segStyle(state.metal === key) + '">' + metalData[key].label + '</button>';
          }).join('');
          var cuts = ['Round', 'Princess', 'Oval', 'Emerald', 'Pear'].map(function (c) {
            return '<button type="button" data-cut="' + c + '" style="' + segStyle(state.cut === c) + '">' + c + '</button>';
          }).join('');
          return '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">' +
              '<span style="font:700 10px Manrope;letter-spacing:.2em;color:#E8C98A">◆ KONFİGÜRASYON</span>' +
              '<span style="font:600 9px Manrope;color:rgba(255,255,255,.45)">EKRAN 1</span>' +
            '</div>' +
            '<div style="font-family:Space Grotesk,sans-serif;font-size:22px;margin:8px 0 18px">Yüzüğünü tasarla</div>' +
            '<div style="font:600 10px Manrope;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:9px">Metal</div>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:18px">' + metals + '</div>' +
            '<div style="display:flex;justify-content:space-between;margin-bottom:9px"><span style="font:600 10px Manrope;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5)">Karat</span><span style="font-family:Space Mono,monospace;font-size:11px;color:#E8C98A">' + state.karat.toFixed(1) + ' ct</span></div>' +
            '<input type="range" min="0.3" max="3" step="0.1" value="' + state.karat + '" data-karat style="width:100%;margin-bottom:18px">' +
            '<div style="font:600 10px Manrope;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:9px">Kesim</div>' +
            '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px">' + cuts + '</div>' +
            '<div style="display:flex;align-items:center;justify-content:space-between;padding:13px 15px;border-radius:13px;background:rgba(232,201,138,.1);border:1px solid rgba(232,201,138,.25);margin-bottom:14px">' +
              '<div><div style="font:600 9px Manrope;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5)">Örnek fiyat</div><div style="font-family:Space Mono,monospace;font-size:18px;color:#E8C98A;margin-top:3px">' + tl(arPrice()) + '</div></div>' +
              '<div style="text-align:right;font:600 9px Manrope;color:rgba(255,255,255,.4);max-width:96px;line-height:1.3">mağaza formülüyle değişir</div>' +
            '</div>' +
            '<button type="button" data-ar-toggle style="width:100%;padding:14px;border:none;background:#B08D57;color:#1C1A15;border-radius:12px;font:700 13px Manrope;cursor:pointer">AR ile parmağında gör →</button>';
        })();

    el.innerHTML =
      '<div style="display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;align-items:center;margin-bottom:30px" class="kuyumcu-demo-grid">' +
        '<div style="justify-self:center">' +
          '<div style="width:300px;height:600px;background:#1C1A15;border-radius:44px;padding:11px;box-shadow:0 40px 80px -30px rgba(28,26,21,.5)">' +
            '<div style="width:100%;height:100%;border-radius:34px;background:linear-gradient(180deg,#211E18,#161410);overflow:hidden;position:relative;color:#F4EFE6;padding:30px 18px 18px">' +
              phoneInner +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div style="font:700 10px Manrope;letter-spacing:.2em;text-transform:uppercase;color:#9A7B46;margin-bottom:14px">Modül 01 · AR Deneme</div>' +
          '<h3 style="font-family:Space Grotesk,sans-serif;font-weight:500;font-size:32px;margin:0 0 16px;line-height:1.1">Seçimi yapın, parmakta görün</h3>' +
          '<p style="color:#4A443B;font-size:15.5px;line-height:1.65;margin:0 0 24px;max-width:440px">Soldaki ekranda metali ve kesimi değiştirin — örnek fiyat anlık güncellenir. "AR ile gör" dediğinizde kamera önizlemesine geçer.</p>' +
          '<ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:14px">' +
            '<li style="display:flex;gap:12px"><span style="color:#B08D57">◆</span><span style="font-size:14px;color:#4A443B"><strong style="color:#1B1813">Sadece görselleştirme.</strong> Sistem öneri yapmaz.</span></li>' +
            '<li style="display:flex;gap:12px"><span style="color:#B08D57">◆</span><span style="font-size:14px;color:#4A443B"><strong style="color:#1B1813">Kaydet & paylaş.</strong> WhatsApp ile organik erişim.</span></li>' +
          '</ul>' +
        '</div>' +
      '</div>';

    el.querySelectorAll('[data-ar-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () { state.arOn = !state.arOn; renderArDemo(); });
    });
    var karatInput = el.querySelector('[data-karat]');
    if (karatInput) karatInput.addEventListener('input', function (e) { state.karat = parseFloat(e.target.value); renderArDemo(); });
    el.querySelectorAll('[data-metal]').forEach(function (btn) {
      btn.addEventListener('click', function () { state.metal = btn.getAttribute('data-metal'); renderArDemo(); });
    });
    el.querySelectorAll('[data-cut]').forEach(function (btn) {
      btn.addEventListener('click', function () { state.cut = btn.getAttribute('data-cut'); renderArDemo(); });
    });
  }

  function renderGoldDemo() {
    var el = document.getElementById('goldDemo');
    if (!el) return;

    var tr = state.trend || [];
    var sp = sparkPaths(tr);
    var change = tr.length > 1 ? ((tr[tr.length - 1] - tr[0]) / tr[0]) * 100 : 0;
    var up = change >= 0;
    var f = formulaVals();
    var prods = products();

    el.innerHTML =
      '<div style="display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:stretch" class="kuyumcu-demo-grid">' +
        '<div style="background:#fff;border:1px solid rgba(27,24,19,.1);border-radius:18px;padding:26px;box-shadow:0 20px 50px -36px rgba(28,26,21,.4)">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:22px">' +
            '<div style="font:700 10px Manrope;letter-spacing:.18em;text-transform:uppercase;color:#9A7B46">Canlı Altın Fiyat Paneli</div>' +
            '<span style="display:inline-flex;align-items:center;gap:6px;font:600 11px Manrope;color:#5A5247"><span style="width:7px;height:7px;border-radius:50%;background:#6FCF7E;animation:pulseDot 1.6s infinite"></span>Güncel</span>' +
          '</div>' +
          '<div style="display:flex;align-items:flex-end;gap:18px;margin-bottom:20px">' +
            '<div><div style="font:600 11px Manrope;color:#79716A;margin-bottom:4px">Gram altın (₺)</div><div style="font-family:Space Mono,monospace;font-size:34px;color:#1B1813;line-height:1">' + tl(state.gold) + '</div></div>' +
            '<div style="display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:999px;background:' + (up ? 'rgba(111,168,111,.14)' : 'rgba(190,90,80,.12)') + ';color:' + (up ? '#5C8A57' : '#B5544A') + ';font:700 12px Space Mono,monospace;margin-bottom:4px">' + (up ? '▲ ' : '▼ ') + Math.abs(change).toFixed(1) + '%</div>' +
          '</div>' +
          '<svg viewBox="0 0 300 70" style="width:100%;height:70px;display:block;margin-bottom:22px">' +
            '<path d="' + sp.area + '" fill="rgba(176,141,87,.12)"></path>' +
            '<path d="' + sp.line + '" fill="none" stroke="#B08D57" stroke-width="1.6"></path>' +
            '<circle cx="' + sp.lastX + '" cy="' + sp.lastY + '" r="3" fill="#B08D57"></circle>' +
          '</svg>' +
          '<div style="font:700 10px Manrope;letter-spacing:.16em;text-transform:uppercase;color:#9A7B46;margin-bottom:12px">Otomatik güncellenen ürünler</div>' +
          '<div style="display:flex;flex-direction:column;gap:1px;background:rgba(27,24,19,.08);border-radius:10px;overflow:hidden">' +
            prods.map(function (p) {
              return '<div style="background:#fff;display:flex;align-items:center;justify-content:space-between;padding:13px 14px">' +
                '<div style="display:flex;align-items:center;gap:11px"><span style="font-family:Space Mono,monospace;font-size:10px;color:#B08D57;background:rgba(176,141,87,.1);padding:3px 7px;border-radius:5px">' + p.ayar + '</span>' +
                '<div><div style="font:600 13px Manrope;color:#1B1813">' + p.name + '</div><div style="font-family:Space Mono,monospace;font-size:10px;color:#A39A8E">' + p.sku + ' · ' + p.gram + 'g</div></div></div>' +
                '<div style="text-align:right"><div style="font-family:Space Mono,monospace;font-size:14px;color:#1B1813">' + tl(p.total) + '</div><div style="font:600 9px Manrope;color:#6FA86F">✓ güncel</div></div></div>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;justify-content:center">' +
          '<div style="font:700 10px Manrope;letter-spacing:.2em;text-transform:uppercase;color:#9A7B46;margin-bottom:14px">Modül 02 · Canlı Fiyat</div>' +
          '<h3 style="font-family:Space Grotesk,sans-serif;font-weight:500;font-size:32px;margin:0 0 16px;line-height:1.1">Etiketleri bir daha elle değiştirmeyin</h3>' +
          '<p style="color:#4A443B;font-size:15.5px;line-height:1.65;margin:0 0 22px">Gram fiyatı değiştikçe tüm ürünler kendiliğinden güncellenir.</p>' +
          '<div style="background:#1C1A15;color:#F4EFE6;border-radius:14px;padding:20px 22px">' +
            '<div style="font:700 9px Manrope;letter-spacing:.18em;text-transform:uppercase;color:#B08D57;margin-bottom:14px">Solitaire Yüzük 14K · formül</div>' +
            '<div style="display:flex;flex-direction:column;gap:9px;font-family:Space Mono,monospace;font-size:12.5px">' +
              '<div style="display:flex;justify-content:space-between"><span style="color:rgba(255,255,255,.5)">Gram × Kur</span><span>' + f.gram.toFixed(1) + 'g × ' + tl(state.gold) + '</span></div>' +
              '<div style="display:flex;justify-content:space-between"><span style="color:rgba(255,255,255,.5)">Ham altın (14K)</span><span>' + tl(f.ham) + '</span></div>' +
              '<div style="display:flex;justify-content:space-between"><span style="color:rgba(255,255,255,.5)">İşçilik (%18)</span><span>' + tl(f.isc) + '</span></div>' +
              '<div style="display:flex;justify-content:space-between"><span style="color:rgba(255,255,255,.5)">KDV (%20)</span><span>' + tl(f.kdv) + '</span></div>' +
              '<div style="display:flex;justify-content:space-between;border-top:1px solid rgba(255,255,255,.14);padding-top:10px;margin-top:3px"><span style="color:#E8C98A">Satış fiyatı</span><span style="color:#E8C98A;font-weight:700">' + tl(f.total) + '</span></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function renderModuleForm() {
    var el = document.getElementById('moduleForm');
    if (!el) return;

    var chosen = Object.keys(state.selected).filter(function (k) { return state.selected[k]; });
    var canSend = chosen.length > 0;

    var moduleBtns = Object.keys(moduleCat).map(function (key) {
      var active = !!state.selected[key];
      var cat = moduleCat[key];
      return '<button type="button" data-module="' + key + '" style="' + (active
        ? 'display:flex;gap:13px;align-items:center;width:100%;text-align:left;padding:14px 15px;border-radius:12px;border:1px solid #B08D57;background:rgba(176,141,87,.08);cursor:pointer'
        : 'display:flex;gap:13px;align-items:center;width:100%;text-align:left;padding:14px 15px;border-radius:12px;border:1px solid rgba(27,24,19,.12);background:#fff;cursor:pointer') + '">' +
        '<span style="flex:none;width:24px;height:24px;border-radius:7px;' + (active ? 'background:#B08D57;color:#1C1A15;border:1px solid #B08D57' : 'background:#fff;border:1px solid rgba(27,24,19,.22)') + ';display:flex;align-items:center;justify-content:center;font:700 13px Manrope">' + (active ? '✓' : '') + '</span>' +
        '<span><span style="display:block;font:700 14px Manrope;color:#1B1813">' + cat.label + '</span><span style="display:block;font:500 12px Manrope;color:#79716A;margin-top:2px">' + cat.desc + '</span></span>' +
      '</button>';
    }).join('');

    el.innerHTML =
      '<div style="background:#fff;border:1px solid rgba(27,24,19,.1);border-radius:18px;padding:28px;box-shadow:0 30px 60px -40px rgba(28,26,21,.45)">' +
        '<div style="font:700 11px Manrope;letter-spacing:.14em;text-transform:uppercase;color:#9A7B46;margin-bottom:16px">Modülleri seç</div>' +
        '<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px">' + moduleBtns + '</div>' +
        '<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:22px">' +
          '<div><label style="display:block;font:600 11px Manrope;letter-spacing:.1em;text-transform:uppercase;color:#9A7B46;margin-bottom:7px">Mağaza adı</label>' +
          '<input type="text" data-store placeholder="Örn. Altın Çarşı Kuyumculuk" value="' + (state.storeName || '').replace(/"/g, '&quot;') + '" style="width:100%;padding:13px 14px;border:1px solid rgba(27,24,19,.16);border-radius:10px;font:500 14px Manrope;color:#1B1813;background:#FBF8F2"></div>' +
          '<div><label style="display:block;font:600 11px Manrope;letter-spacing:.1em;text-transform:uppercase;color:#9A7B46;margin-bottom:7px">İlçe / Şehir</label>' +
          '<input type="text" data-district placeholder="Örn. Kapalıçarşı, İstanbul" value="' + (state.district || '').replace(/"/g, '&quot;') + '" style="width:100%;padding:13px 14px;border:1px solid rgba(27,24,19,.16);border-radius:10px;font:500 14px Manrope;color:#1B1813;background:#FBF8F2"></div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:#FBF8F2;border-radius:10px;margin-bottom:16px">' +
          '<span style="font:600 12px Manrope;color:#79716A">Seçili modül</span>' +
          '<span style="font-family:Space Mono,monospace;font-size:14px;color:#8C6D3F">' + chosen.length + ' / 5</span>' +
        '</div>' +
        '<a href="' + (canSend ? waModuleHref() : '#') + '" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:16px;border-radius:12px;background:' + (canSend ? '#1C1A15' : 'rgba(27,24,19,.18)') + ';color:#F4EFE6;font:700 14px Manrope;' + (canSend ? '' : 'pointer-events:none;opacity:.85') + '">' +
          '<span style="width:8px;height:8px;border-radius:50%;background:#6FCF7E"></span>WhatsApp ile gönder →' +
        '</a>' +
        '<p style="text-align:center;margin:12px 0 0;font:500 11px Manrope;color:#A39A8E">' + (canSend ? 'Seçiminiz hazır mesaj olarak iletilir.' : 'Devam etmek için en az bir modül seçin.') + '</p>' +
      '</div>';

    el.querySelectorAll('[data-module]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-module');
        state.selected[key] = !state.selected[key];
        renderModuleForm();
      });
    });
    var storeInput = el.querySelector('[data-store]');
    var districtInput = el.querySelector('[data-district]');
    if (storeInput) storeInput.addEventListener('input', function (e) { state.storeName = e.target.value; renderModuleForm(); });
    if (districtInput) districtInput.addEventListener('input', function (e) { state.district = e.target.value; renderModuleForm(); });
  }

  function renderAll() {
    renderArDemo();
    renderGoldDemo();
    renderModuleForm();
  }

  function initTrend() {
    var t = [], v = 3680;
    for (var i = 0; i < 30; i++) { v += (Math.random() - 0.45) * 48; t.push(Math.max(3560, v)); }
    t[29] = state.gold;
    state.trend = t;
    renderGoldDemo();
    iv = setInterval(function () {
      var ng = Math.min(3990, Math.max(3760, state.gold + (Math.random() - 0.5) * 10));
      state.gold = Math.round(ng);
      state.trend = (state.trend || []).slice(1);
      state.trend.push(state.gold);
      renderGoldDemo();
    }, 3200);
  }

  function initCarousel(scrollerId, prevId, nextId, cardSel) {
    var sc = document.getElementById(scrollerId);
    var prev = document.getElementById(prevId);
    var next = document.getElementById(nextId);
    if (!sc || !prev || !next) return;

    function updateEdges() {
      prev.disabled = sc.scrollLeft < 8;
      next.disabled = sc.scrollLeft + sc.clientWidth > sc.scrollWidth - 8;
    }

    function step(dir) {
      var card = sc.querySelector(cardSel);
      var w = card ? card.offsetWidth + 14 : 294;
      sc.scrollBy({ left: dir * w, behavior: 'smooth' });
    }

    prev.addEventListener('click', function () { step(-1); });
    next.addEventListener('click', function () { step(1); });
    sc.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    updateEdges();
  }

  initCarousel('eticaretScroller', 'eticaretPrev', 'eticaretNext', '.k-carousel-card');
  initCarousel('beyazScroller', 'beyazPrev', 'beyazNext', '.k-carousel-card');
  initCarousel('modulScroller', 'modulPrev', 'modulNext', '.k-mod-card');

  var subnav = document.getElementById('pageSubnav');
  if (subnav) {
    window.addEventListener('scroll', function () {
      subnav.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  renderAll();
  initTrend();

  window.addEventListener('beforeunload', function () { clearInterval(iv); });
})();
