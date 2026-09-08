// features.jsx — 12 standard feature screens
function FeatureChrome({ title, onBack, children, dark }) {
  return (
    <div style={{ ...wrapStyle, background: dark ? '#0B1F18' : '#F7FBF8' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px 10px', background: dark ? '#0B1F18' : '#fff' }}>
        {onBack && (
          <button type="button" onClick={onBack}>
            <Icon name="arrowLeft" size={20} stroke={dark ? '#fff' : '#0B1F18'} />
          </button>
        )}
        <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 15, color: dark ? '#fff' : '#0B1F18' }}>{title}</div>
      </div>
      <div className="demo-scroll" style={{ ...scrollStyle, padding: '0 14px 16px' }}>{children}</div>
    </div>
  );
}

function SyncScreen() {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 1800);
    return () => clearInterval(t);
  }, []);
  const events = [
    { t: 'Fiyat güncellendi · ₺349 → ₺299', ok: true },
    { t: 'Yeni ürün eklendi · 3 varyant', ok: true },
    { t: 'Sipariş düştü · stok azaltıldı', ok: true },
  ];
  const stock = 248 - (tick % 3);
  return (
    <FeatureChrome title="Shopify Senkron">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 8, alignItems: 'center', marginTop: 8 }}>
        <div style={{ background: '#fff', borderRadius: 14, padding: 12, border: '1px solid #E8F0EB', textAlign: 'center' }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: '#8FA79B', letterSpacing: '.06em' }}>E-TİCARET</div>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 22, color: ACCENT, marginTop: 6 }}>{stock}</div>
          <div style={{ fontSize: 10, color: '#5A6A63' }}>Stok · SKU 4412</div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 99, background: '#E3F2EA', display: 'grid', placeItems: 'center' }}>
          <Icon name="sync" size={18} stroke={ACCENT} />
        </div>
        <div style={{ background: '#fff', borderRadius: 14, padding: 12, border: '1px solid #E8F0EB', textAlign: 'center' }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: '#8FA79B', letterSpacing: '.06em' }}>UYGULAMA</div>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 22, color: ACCENT, marginTop: 6 }}>{stock}</div>
          <div style={{ fontSize: 10, color: '#5A6A63' }}>Stok · SKU 4412</div>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>
        {events.map((e, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: '#fff', borderRadius: 12, padding: '10px 12px', marginBottom: 8, border: '1px solid #E8F0EB',
            opacity: tick % 3 === i ? 1 : 0.55, transform: tick % 3 === i ? 'scale(1.02)' : 'none', transition: 'all .3s',
          }}>
            <span style={{ fontSize: 11.5, color: '#0B1F18' }}>{e.t}</span>
            <span style={{ fontSize: 10, fontWeight: 800, color: ACCENT }}>✓ Senkron</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 11.5, color: '#8FA79B', marginTop: 8, lineHeight: 1.5 }}>Manuel stok yönetimi bitti — tek kayıt, iki kanal.</p>
    </FeatureChrome>
  );
}

function PushScreen() {
  const notes = [
    { title: 'Üyelere özel: sezon sonu %30', sub: 'Segment: son 90 günde alışveriş · 4.812 kişi', time: 'şimdi' },
    { title: 'Sepetinizde ürün kaldı', sub: 'Otomatik akış · 2 saat sonra', time: '2s' },
    { title: 'Stok geldi: Leke Karşıtı Serum', sub: 'Alarm kurduğunuz ürün', time: '1g' },
  ];
  return (
    <FeatureChrome title="Bildirimler">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '8px 0 14px' }}>
        {[
          ['%42', 'açılma oranı'],
          ['₺0', 'gönderim maliyeti'],
          ['6 dk', 'ilk siparişe'],
          ['3.1x', 'e-postaya kıyas'],
        ].map(([v, l]) => (
          <div key={l} style={{ background: '#fff', borderRadius: 12, padding: '12px 10px', border: '1px solid #E8F0EB' }}>
            <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 18, color: ACCENT }}>{v}</div>
            <div style={{ fontSize: 10, color: '#8FA79B', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
      {notes.map((n, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, background: '#fff', borderRadius: 14, padding: 12, marginBottom: 8, border: '1px solid #E8F0EB' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#E3F2EA', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <Icon name="bell" size={16} stroke={ACCENT} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 12.5 }}>{n.title}</div>
            <div style={{ fontSize: 11, color: '#8FA79B', marginTop: 3 }}>{n.sub}</div>
          </div>
          <span style={{ fontSize: 10, color: '#A0B0A8' }}>{n.time}</span>
        </div>
      ))}
    </FeatureChrome>
  );
}

function SpeedScreen() {
  const rows = [
    { n: 'Native uygulama', ms: 180, w: '18%' },
    { n: 'Webview / hibrit', ms: 960, w: '62%' },
    { n: 'Mobil web sitesi', ms: 1540, w: '100%' },
  ];
  return (
    <FeatureChrome title="Native Performans">
      <div style={{ background: '#fff', borderRadius: 16, padding: 14, border: '1px solid #E8F0EB', marginTop: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#8FA79B', marginBottom: 12 }}>Ölçüm · Ürün listesi açılışı</div>
        {rows.map((r) => (
          <div key={r.n} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
              <span style={{ fontWeight: 650 }}>{r.n}</span>
              <b style={{ color: r.ms < 300 ? ACCENT : '#5A6A63' }}>{r.ms} ms</b>
            </div>
            <div style={{ height: 8, borderRadius: 99, background: '#E8F3ED' }}>
              <div style={{ width: r.w, height: '100%', borderRadius: 99, background: r.ms < 300 ? `linear-gradient(90deg,${ACCENT},#6DAE4F)` : '#C4D6CD' }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
        {[
          ['Kamera', 'camera'],
          ['GPS', 'pin'],
          ['Telefon', 'chat'],
          ['Dokunmatik', 'zap'],
        ].map(([l, ic]) => (
          <div key={l} style={{ background: '#fff', borderRadius: 12, padding: '14px 10px', border: '1px solid #E8F0EB', textAlign: 'center' }}>
            <Icon name={ic} size={20} stroke={ACCENT} />
            <div style={{ fontSize: 11, fontWeight: 700, marginTop: 6 }}>{l}</div>
          </div>
        ))}
      </div>
    </FeatureChrome>
  );
}

function AbandonScreen({ onRecover, showPush }) {
  return (
    <div style={{ ...wrapStyle, background: 'linear-gradient(180deg,#1a2e26,#0B1F18)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20, position: 'relative' }}>
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,.35)', fontSize: 13, marginBottom: 24 }}>9:41</div>
        {showPush && (
          <div className="demo-toast" style={{ position: 'relative', left: 0, right: 0, top: 0, marginBottom: 20 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg,${ACCENT},#6DAE4F)`, display: 'grid', placeItems: 'center', color: '#fff', fontSize: 14, fontWeight: 800 }}>◆</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 12.5 }}>Sepetinizde ürün kaldı</div>
                <div style={{ fontSize: 11, color: '#5A6A63', marginTop: 2 }}>%10 indirimle tamamlayın →</div>
              </div>
            </div>
          </div>
        )}
        <button type="button" onClick={onRecover} style={{
          width: '100%', padding: '14px', borderRadius: 14, fontWeight: 700, fontSize: 14,
          background: `linear-gradient(135deg,${ACCENT},#5FA052)`, color: '#fff',
        }}>Kuponu uygula & sepete dön</button>
        <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,.45)', marginTop: 12 }}>
          Otomatik akış · 2 saat sonra tetiklenir
        </div>
      </div>
    </div>
  );
}

function BarcodeScreen({ onFound, product }) {
  const [scanning, setScanning] = React.useState(true);
  const [found, setFound] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => { setScanning(false); setFound(true); }, 1400);
    return () => clearTimeout(t);
  }, []);
  const p = product || DEMO_PRODUCTS[0];
  return (
    <FeatureChrome title="Barkod Tarama">
      <div style={{
        marginTop: 8, borderRadius: 16, height: 160, background: 'linear-gradient(160deg,#0B1F18,#1A3D30)',
        position: 'relative', overflow: 'hidden', display: 'grid', placeItems: 'center',
      }}>
        <div style={{ width: '70%', height: 2, background: ACCENT, boxShadow: `0 0 12px ${ACCENT}`, opacity: scanning ? 1 : 0.3, transition: 'opacity .3s' }} />
        <div style={{ position: 'absolute', inset: 20, border: '2px solid rgba(0,128,96,.5)', borderRadius: 12 }} />
        <Icon name="camera" size={28} stroke="rgba(255,255,255,.4)" />
      </div>
      <div style={{ textAlign: 'center', marginTop: 12, fontFamily: 'monospace', fontSize: 13, letterSpacing: 2, color: '#5A6A63' }}>
        8 690123 456789
      </div>
      {found && (
        <div style={{ marginTop: 14, background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB' }}>
          <div style={{ fontSize: 11, color: ACCENT, fontWeight: 800 }}>Eşleşen ürün bulundu</div>
          <div style={{ fontWeight: 800, fontSize: 15, marginTop: 4 }}>{p.name}</div>
          <div style={{ fontSize: 12, color: '#5A6A63', marginTop: 4 }}>Stokta {p.stock} adet · {formatPrice(p.price, 'tr')}</div>
          <button type="button" onClick={() => onFound && onFound(p.id)} style={{
            marginTop: 12, width: '100%', padding: '11px', borderRadius: 10, fontWeight: 700,
            background: `linear-gradient(135deg,${ACCENT},#5FA052)`, color: '#fff', fontSize: 13,
          }}>Sepete +</button>
        </div>
      )}
    </FeatureChrome>
  );
}

function AlertsScreen() {
  const [stockOn, setStockOn] = React.useState(true);
  const [priceOn, setPriceOn] = React.useState(true);
  return (
    <FeatureChrome title="Alarmlar">
      <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB', marginTop: 8 }}>
        <Thumb from="#008060" to="#6DAE4F" glyph="🧪" h={80} r={12} />
        <div style={{ fontWeight: 800, fontSize: 15, marginTop: 10 }}>Leke Karşıtı Serum</div>
        <div style={{ fontSize: 12, color: '#5A6A63', marginTop: 2 }}>₺299,00</div>
      </div>
      <button type="button" onClick={() => setStockOn((v) => !v)} style={{
        width: '100%', marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: '#fff', borderRadius: 12, padding: '12px 14px', border: '1px solid #E8F0EB',
      }}>
        <span style={{ fontWeight: 650, fontSize: 13 }}>Stok alarmı kuruldu</span>
        <span style={{ fontSize: 11, fontWeight: 800, color: stockOn ? ACCENT : '#A0B0A8' }}>{stockOn ? '✓ Aktif' : 'Kapalı'}</span>
      </button>
      <button type="button" onClick={() => setPriceOn((v) => !v)} style={{
        width: '100%', marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: '#fff', borderRadius: 12, padding: '12px 14px', border: '1px solid #E8F0EB',
      }}>
        <span style={{ fontWeight: 650, fontSize: 13 }}>Fiyat alarmı · ₺249 altına</span>
        <span style={{ fontSize: 11, fontWeight: 800, color: priceOn ? ACCENT : '#A0B0A8' }}>{priceOn ? '✓ Aktif' : 'Kapalı'}</span>
      </button>
    </FeatureChrome>
  );
}

function LocaleScreen({ locale, setLocale }) {
  const opts = [
    { id: 'tr', label: 'Türkçe · ₺' },
    { id: 'en', label: 'English · $' },
    { id: 'de', label: 'Deutsch · €' },
  ];
  return (
    <FeatureChrome title="Dil & Para Birimi">
      <div style={{ fontSize: 11, color: '#8FA79B', margin: '8px 0 10px' }}>Telefon dili algılandı: Türkçe · Otomatik</div>
      {opts.map((o) => (
        <button key={o.id} type="button" onClick={() => setLocale(o.id)} style={{
          width: '100%', textAlign: 'left', padding: '13px 14px', borderRadius: 12, marginBottom: 8,
          background: locale === o.id ? '#E3F2EA' : '#fff',
          border: locale === o.id ? `1.5px solid ${ACCENT}` : '1px solid #E8F0EB',
          fontWeight: 700, fontSize: 13, color: '#0B1F18',
        }}>{o.label}</button>
      ))}
      <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB', marginTop: 8 }}>
        <div style={{ fontSize: 11, color: '#8FA79B' }}>Aynı ürün · üç pazar</div>
        <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 20, color: ACCENT, marginTop: 6 }}>
          {formatPrice(1299, locale)}
        </div>
        <div style={{ fontSize: 11.5, color: '#5A6A63', marginTop: 4 }}>Sepet toplamı örneği</div>
      </div>
    </FeatureChrome>
  );
}

function AdminScreen() {
  const [blocks, setBlocks] = React.useState([
    { id: 1, title: 'Slider · 3 görsel', meta: 'Kampanya yönlendirmeli', status: 'Aktif' },
    { id: 2, title: 'Kategori slider', meta: 'Taşınıyor…', status: 'Sürükle' },
    { id: 3, title: 'Ürün listesi · Yeni gelenler', meta: '12 ürün', status: 'Aktif' },
    { id: 4, title: 'Banner · Marka vitrini', meta: 'Markaya link', status: 'Pasif' },
  ]);
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= blocks.length) return;
    const next = blocks.slice();
    const tmp = next[i];
    next[i] = next[j];
    next[j] = tmp;
    setBlocks(next);
  };
  return (
    <FeatureChrome title="Yönetici Paneli">
      <div style={{ fontSize: 11, color: '#8FA79B', margin: '6px 0 10px' }}>Anasayfa blokları · sürükle veya ↑↓</div>
      {blocks.map((b, i) => (
        <div key={b.id} style={{
          display: 'flex', gap: 10, alignItems: 'center', background: '#fff', borderRadius: 12,
          padding: '10px 12px', marginBottom: 8, border: '1px solid #E8F0EB',
        }}>
          <span style={{ color: '#A0B0A8', fontSize: 14 }}>⣿</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 12.5 }}>{b.title}</div>
            <div style={{ fontSize: 10.5, color: '#8FA79B' }}>{b.meta}</div>
          </div>
          <span style={{ fontSize: 10, fontWeight: 800, color: b.status === 'Aktif' ? ACCENT : '#A0B0A8' }}>{b.status}</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <button type="button" onClick={() => move(i, -1)} style={{ fontSize: 10, padding: '2px 6px', background: '#E8F3ED', borderRadius: 4 }}>↑</button>
            <button type="button" onClick={() => move(i, 1)} style={{ fontSize: 10, padding: '2px 6px', background: '#E8F3ED', borderRadius: 4 }}>↓</button>
          </div>
        </div>
      ))}
      <button type="button" style={{
        width: '100%', padding: '11px', borderRadius: 12, border: '1.5px dashed #BFDACC',
        color: ACCENT, fontWeight: 700, fontSize: 13, marginTop: 4,
      }}>+ Yeni blok ekle</button>
    </FeatureChrome>
  );
}

function BrandScreen({ brandColor, setBrandColor }) {
  const colors = ['#008060', '#0B1F18', '#C24040', '#2B6CB0', '#B7791F'];
  return (
    <FeatureChrome title="Marka Tasarımı">
      <div style={{ fontSize: 11, fontWeight: 700, color: '#8FA79B', margin: '8px 0' }}>Marka rengi</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
        {colors.map((c) => (
          <button key={c} type="button" onClick={() => setBrandColor(c)} style={{
            width: 36, height: 36, borderRadius: 99, background: c,
            border: brandColor === c ? '3px solid #0B1F18' : '2px solid #fff',
            boxShadow: '0 0 0 1px #DCE8E1',
          }} />
        ))}
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#8FA79B', marginBottom: 8 }}>Tipografi</div>
      <div style={{ background: '#fff', borderRadius: 12, padding: 14, border: '1px solid #E8F0EB', marginBottom: 10 }}>
        <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 18 }}>Space Grotesk</div>
        <div style={{ fontSize: 12, color: '#5A6A63', marginTop: 4 }}>Plus Jakarta · gövde metni</div>
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#8FA79B', marginBottom: 8 }}>Anasayfa blokları</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {['Slider', 'Banner', 'Kategori', 'Ürün listesi'].map((t) => (
          <span key={t} style={{ padding: '6px 11px', borderRadius: 99, background: '#E3F2EA', color: brandColor, fontSize: 11, fontWeight: 700 }}>{t}</span>
        ))}
      </div>
      <div style={{ marginTop: 14, borderRadius: 14, padding: 16, background: `linear-gradient(135deg,${brandColor},#5FA052)`, color: '#fff' }}>
        <div style={{ fontSize: 11, opacity: 0.9 }}>Önizleme vitrin</div>
        <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 18, marginTop: 4 }}>Markanıza özel arayüz</div>
      </div>
    </FeatureChrome>
  );
}

function AnalyticsScreen() {
  return (
    <FeatureChrome title="Raporlama">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
        {[
          ['%42', 'Push açılma'],
          ['1.240', 'Favori ürün'],
          ['3.1x', 'Dönüşüm'],
          ['%18', 'Tekrar alım'],
        ].map(([v, l]) => (
          <div key={l} style={{ background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB' }}>
            <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 22, color: ACCENT }}>{v}</div>
            <div style={{ fontSize: 11, color: '#8FA79B', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB', marginTop: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>En iyi push kampanyası</div>
        <div style={{ fontSize: 12, color: '#5A6A63', lineHeight: 1.5 }}>Üyelere özel %30 · 4.812 kişi · 312 sipariş</div>
        <div style={{ marginTop: 10, height: 6, borderRadius: 99, background: '#E8F3ED' }}>
          <div style={{ width: '72%', height: '100%', borderRadius: 99, background: `linear-gradient(90deg,${ACCENT},#6DAE4F)` }} />
        </div>
      </div>
    </FeatureChrome>
  );
}

function OwnershipScreen() {
  return (
    <FeatureChrome title="Hesap & Veri">
      <div style={{ background: '#fff', borderRadius: 16, padding: 16, border: '1px solid #E8F0EB', marginTop: 8 }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: '#E3F2EA', display: 'grid', placeItems: 'center', marginBottom: 12 }}>
          <Icon name="settings" size={22} stroke={ACCENT} />
        </div>
        <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 17 }}>Kod & veri sizde</div>
        <div style={{ fontSize: 12.5, color: '#5A6A63', lineHeight: 1.6, marginTop: 8 }}>
          Kaynak kod, App Store / Play hesapları ve müşteri verisi tamamen markanıza aittir. Bağımlılık yaratmayan yapı.
        </div>
      </div>
      {['Kaynak kod mülkiyeti', 'Mağaza hesapları sizde', 'Müşteri verisi birinci elden', 'İstediğinizde taşıma'].map((t) => (
        <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 10, background: '#fff', borderRadius: 12, padding: '11px 12px', border: '1px solid #E8F0EB' }}>
          <Icon name="check" size={16} stroke={ACCENT} />
          <span style={{ fontSize: 12.5, fontWeight: 650 }}>{t}</span>
        </div>
      ))}
    </FeatureChrome>
  );
}

function FeatureScreen({ id, locale, setLocale, brandColor, setBrandColor, onAbandonRecover, onBarcodeAdd, showAbandonPush }) {
  switch (id) {
    case 'sync': return <SyncScreen />;
    case 'push': return <PushScreen />;
    case 'speed': return <SpeedScreen />;
    case 'abandon': return <AbandonScreen onRecover={onAbandonRecover} showPush={showAbandonPush} />;
    case 'pay': return null; // handled via shop checkout
    case 'barcode': return <BarcodeScreen onFound={onBarcodeAdd} />;
    case 'alerts': return <AlertsScreen />;
    case 'locale': return <LocaleScreen locale={locale} setLocale={setLocale} />;
    case 'admin': return <AdminScreen />;
    case 'brand': return <BrandScreen brandColor={brandColor} setBrandColor={setBrandColor} />;
    case 'analytics': return <AnalyticsScreen />;
    case 'ownership': return <OwnershipScreen />;
    default: return null;
  }
}

Object.assign(window, {
  FeatureScreen, SyncScreen, PushScreen, SpeedScreen, AbandonScreen,
  BarcodeScreen, AlertsScreen, LocaleScreen, AdminScreen, BrandScreen,
  AnalyticsScreen, OwnershipScreen, FeatureChrome,
});
