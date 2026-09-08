// app.jsx — demo shell: menu + phone + detail panel
function DemoApp() {
  const [mode, setMode] = React.useState('feature'); // feature | sector
  const [featureId, setFeatureId] = React.useState('shop');
  const [sectorId, setSectorId] = React.useState('kozmetik');
  const [moduleId, setModuleId] = React.useState('skin');
  const [phoneKey, setPhoneKey] = React.useState(0);

  const [shopView, setShopView] = React.useState('home');
  const [productId, setProductId] = React.useState(null);
  const [fav, setFav] = React.useState({ p1: true });
  const [cart, setCart] = React.useState({ p1: 1 });
  const [locale, setLocale] = React.useState('tr');
  const [brandColor, setBrandColor] = React.useState('#008060');
  const [coupon, setCoupon] = React.useState(false);
  const [showAbandonPush, setShowAbandonPush] = React.useState(true);
  const [toast, setToast] = React.useState(null);

  const bumpPhone = () => setPhoneKey((k) => k + 1);

  const selectFeature = (id) => {
    setMode('feature');
    setFeatureId(id);
    bumpPhone();
    if (id === 'shop') {
      setShopView('home');
    }
    if (id === 'pay') {
      setShopView('checkout');
      setFeatureId('shop');
    }
    if (id === 'abandon') {
      setShowAbandonPush(true);
      setCoupon(false);
    }
  };

  const selectSector = (sid) => {
    setMode('sector');
    setSectorId(sid);
    const sec = SECTORS.find((s) => s.id === sid);
    const mid = sec ? sec.modules[0].id : 'skin';
    setModuleId(mid);
    bumpPhone();
  };

  const selectModule = (mid) => {
    setMode('sector');
    setModuleId(mid);
    bumpPhone();
  };

  const toggleFav = (id) => setFav((f) => ({ ...f, [id]: !f[id] }));
  const addToCart = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    setToast('Sepete eklendi');
    setTimeout(() => setToast(null), 1400);
  };
  const setQty = (id, delta) => {
    setCart((c) => {
      const next = { ...c, [id]: Math.max(0, (c[id] || 0) + delta) };
      if (next[id] === 0) delete next[id];
      return next;
    });
  };

  const onAbandonRecover = () => {
    setCoupon(true);
    setMode('feature');
    setFeatureId('shop');
    setShopView('cart');
    bumpPhone();
  };

  const onBarcodeAdd = (id) => {
    addToCart(id);
    setMode('feature');
    setFeatureId('shop');
    setShopView('cart');
    bumpPhone();
  };

  const activeFeature = FEATURES.find((f) => f.id === (featureId === 'pay' ? 'pay' : featureId)) || FEATURES[0];
  const activeSector = SECTORS.find((s) => s.id === sectorId) || SECTORS[0];
  const activeModule = (activeSector.modules || []).find((m) => m.id === moduleId) || activeSector.modules[0];

  const detail = mode === 'sector'
    ? { eyebrow: activeSector.name, title: activeModule.title, desc: activeModule.desc }
    : {
        eyebrow: featureId === 'shop' && shopView === 'checkout' ? '05 · Ödeme' : activeFeature.eyebrow,
        title: featureId === 'shop' && shopView === 'checkout' ? 'Tek tıkla ödeme' : activeFeature.title,
        desc: featureId === 'shop' && shopView === 'checkout'
          ? 'Apple Pay, Google Pay ve kayıtlı kartla satın alma iki dokunuşta biter.'
          : activeFeature.desc,
      };

  let phoneInner = null;
  if (mode === 'sector') {
    phoneInner = (
      <SectorModuleScreen
        sectorId={sectorId}
        moduleId={moduleId}
        onAddToCart={addToCart}
      />
    );
  } else if (featureId === 'shop' || featureId === 'pay') {
    phoneInner = (
      <ShopAppShell
        view={shopView}
        setView={setShopView}
        productId={productId}
        setProductId={setProductId}
        fav={fav}
        toggleFav={toggleFav}
        cart={cart}
        addToCart={addToCart}
        setQty={setQty}
        locale={locale}
        brandColor={brandColor}
        coupon={coupon}
        onPaid={() => setToast('Sipariş tamamlandı (demo)')}
      />
    );
  } else {
    phoneInner = (
      <FeatureScreen
        id={featureId}
        locale={locale}
        setLocale={setLocale}
        brandColor={brandColor}
        setBrandColor={setBrandColor}
        onAbandonRecover={onAbandonRecover}
        onBarcodeAdd={onBarcodeAdd}
        showAbandonPush={showAbandonPush}
      />
    );
  }

  const statusBg = featureId === 'abandon' && mode === 'feature' ? '#0B1F18' : '#fff';
  const statusTint = featureId === 'abandon' && mode === 'feature' ? 'light' : 'dark';

  return (
    <div className="demo-layout">
      <div className="demo-intro">
        <h1>E-ticaret uygulamasını <span>canlı deneyin</span></h1>
        <p>12 standart özellik ve sektörel AI/AR modülleri — soldan seçin, telefonda gezinin. Gerçek ödeme yok; demo katalog ve yerel state.</p>
      </div>

      <aside className="demo-menu">
        <div className="demo-menu-group">
          <div className="demo-menu-label">Standart özellikler</div>
          <div className="demo-chip-row features-row">
            {FEATURES.map((f, i) => {
              const isPayActive = f.id === 'pay' && mode === 'feature' && shopView === 'checkout';
              const isShopActive = f.id === 'shop' && mode === 'feature' && featureId === 'shop' && shopView !== 'checkout';
              const isOther = f.id !== 'shop' && f.id !== 'pay' && mode === 'feature' && featureId === f.id;
              const on = isPayActive || isShopActive || isOther;
              return (
                <button
                  key={f.id}
                  type="button"
                  className={'demo-chip' + (on ? ' active' : '')}
                  onClick={() => selectFeature(f.id)}
                >
                  <span className="demo-chip-num">{f.id === 'shop' ? '◆' : String(i).padStart(2, '0')}</span>
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="demo-menu-group">
          <div className="demo-menu-label">Sektörel modüller</div>
          <div className="demo-sector-tabs">
            {SECTORS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={'demo-sector-tab' + (mode === 'sector' && sectorId === s.id ? ' active' : '')}
                onClick={() => selectSector(s.id)}
              >
                {s.name.split(' ')[0]}
              </button>
            ))}
          </div>
          {mode === 'sector' && (
            <div className="demo-chip-row">
              {activeSector.modules.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={'demo-chip' + (moduleId === m.id ? ' active' : '')}
                  onClick={() => selectModule(m.id)}
                >
                  <span className="demo-chip-num">→</span>
                  {m.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>

      <div className="demo-phone-col">
        <div className="demo-phone-wrap" key={phoneKey}>
          <PhoneFrame width={300} statusBg={statusBg} statusTint={statusTint} glow="rgba(0,128,96,.28)">
            {phoneInner}
            {toast && (
              <div className="demo-toast" style={{ bottom: 70, top: 'auto' }}>
                <div style={{ fontWeight: 700, fontSize: 12.5, color: '#0B1F18' }}>{toast}</div>
              </div>
            )}
          </PhoneFrame>
        </div>
      </div>

      <div className="demo-detail">
        <div className="demo-detail-eyebrow">{detail.eyebrow}</div>
        <h2>{detail.title}</h2>
        <p>{detail.desc}</p>
        <a className="demo-detail-cta" href="/eticaret/#teklif">Markanız için teklif alın →</a>
        <div className="demo-detail-hint">
          Telefondaki butonlara tıklayın. Sepet ve favoriler özellikler arasında paylaşılır.
        </div>
      </div>
    </div>
  );
}

(function mount() {
  const root = document.getElementById('root');
  if (!root || !window.ReactDOM) return;
  ReactDOM.createRoot(root).render(<DemoApp />);
})();

Object.assign(window, { DemoApp });
