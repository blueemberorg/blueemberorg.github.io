// shop.jsx — core store: home, PDP, favorites, cart, checkout
function Thumb({ from, to, glyph, h = 90, r = 14 }) {
  return (
    <div style={{
      height: h, borderRadius: r,
      background: `linear-gradient(145deg,${from},${to})`,
      display: 'grid', placeItems: 'center', fontSize: Math.min(36, h * 0.38),
    }}>{glyph}</div>
  );
}

function ShopHome({ products, fav, toggleFav, cartCount, onOpenProduct, onOpenCart, locale, brandColor }) {
  const accent = brandColor || ACCENT;
  return (
    <div style={{ ...wrapStyle, background: '#F7FBF8' }}>
      <div style={{ padding: '4px 14px 10px', background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 10.5, color: '#8FA79B' }}>Keşfet</div>
            <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 17, color: '#0B1F18' }}>Ember Store</div>
          </div>
          <button type="button" onClick={onOpenCart} style={{ position: 'relative' }}>
            <Icon name="cart" size={22} stroke="#0B1F18" />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: -4, right: -7, background: accent, color: '#fff', borderRadius: 99, fontSize: 9, fontWeight: 800, width: 16, height: 16, display: 'grid', placeItems: 'center' }}>{cartCount}</span>
            )}
          </button>
        </div>
        <div style={{ background: '#E8F3ED', borderRadius: 12, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="search" size={15} stroke="#8FA79B" />
          <span style={{ color: '#8FA79B', fontSize: 12.5 }}>Ürün veya barkod ara...</span>
        </div>
      </div>
      <div className="demo-scroll" style={scrollStyle}>
        <div style={{ margin: '12px 14px', borderRadius: 16, padding: '18px 16px', background: `linear-gradient(135deg,${accent},#5FA052)`, color: '#fff' }}>
          <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.9 }}>SEZON SONU</div>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 20, marginTop: 4 }}>Üyelere özel %30</div>
          <div style={{ fontSize: 11.5, marginTop: 6, opacity: 0.9 }}>Yalnızca uygulamada · 6 saat</div>
        </div>
        <div style={{ display: 'flex', gap: 8, padding: '0 14px 8px', overflowX: 'auto' }}>
          {['Tümü', 'Cilt', 'Giyim', 'Takı', 'Gıda', 'Mobilya'].map((c, i) => (
            <span key={c} style={{ flexShrink: 0, padding: '7px 13px', borderRadius: 99, fontSize: 11.5, fontWeight: 700, background: i === 0 ? '#0B1F18' : '#fff', color: i === 0 ? '#fff' : '#5A6A63', border: i === 0 ? 'none' : '1px solid #DCE8E1' }}>{c}</span>
          ))}
        </div>
        <div style={{ padding: '4px 14px 8px', fontSize: 12, fontWeight: 700, color: '#5A6A63' }}>Yeni gelenler</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '0 14px 16px' }}>
          {products.map((p) => (
            <button key={p.id} type="button" onClick={() => onOpenProduct(p.id)} style={{
              background: '#fff', borderRadius: 14, overflow: 'hidden', textAlign: 'left',
              boxShadow: '0 4px 14px rgba(11,31,24,.06)', border: '1px solid #E8F0EB',
            }}>
              <div style={{ position: 'relative' }}>
                <Thumb from={p.colors[0]} to={p.colors[1]} glyph={p.emoji} h={88} r={0} />
                <span
                  role="button"
                  onClick={(e) => { e.stopPropagation(); toggleFav(p.id); }}
                  style={{ position: 'absolute', top: 7, right: 7, width: 26, height: 26, borderRadius: 99, background: 'rgba(255,255,255,.94)', display: 'grid', placeItems: 'center' }}
                >
                  <Icon name="heart" size={13} stroke={fav[p.id] ? '#E24B4B' : '#9AADA3'} fill={fav[p.id] ? '#E24B4B' : 'none'} />
                </span>
                {p.old > 0 && <span style={{ position: 'absolute', top: 7, left: 7, background: accent, color: '#fff', fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 99 }}>İNDİRİM</span>}
              </div>
              <div style={{ padding: '8px 10px 11px' }}>
                <div style={{ fontWeight: 700, fontSize: 11.5, color: '#0B1F18', lineHeight: 1.3 }}>{p.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 4 }}>
                  <b style={{ fontFamily: 'var(--demo-display), sans-serif', fontSize: 13, color: accent }}>{formatPrice(p.price, locale)}</b>
                  {p.old > 0 && <s style={{ fontSize: 10, color: '#A0B0A8' }}>{formatPrice(p.old, locale)}</s>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopPDP({ product, fav, toggleFav, onBack, onAdd, locale, brandColor, addedFlash }) {
  const accent = brandColor || ACCENT;
  if (!product) return null;
  return (
    <div style={{ ...wrapStyle, background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 12px 8px' }}>
        <button type="button" onClick={onBack}><Icon name="arrowLeft" size={22} stroke="#0B1F18" /></button>
        <button type="button" onClick={() => toggleFav(product.id)}>
          <Icon name="heart" size={20} stroke={fav[product.id] ? '#E24B4B' : '#0B1F18'} fill={fav[product.id] ? '#E24B4B' : 'none'} />
        </button>
      </div>
      <div className="demo-scroll" style={scrollStyle}>
        <Thumb from={product.colors[0]} to={product.colors[1]} glyph={product.emoji} h={180} r={0} />
        <div style={{ padding: '14px 16px 20px' }}>
          <div style={{ fontSize: 11, color: '#8FA79B', fontWeight: 600 }}>{product.cat}</div>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 20, color: '#0B1F18', marginTop: 4 }}>{product.name}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 8 }}>
            <span style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 22, color: accent }}>{formatPrice(product.price, locale)}</span>
            {product.old > 0 && <s style={{ color: '#A0B0A8' }}>{formatPrice(product.old, locale)}</s>}
          </div>
          <div style={{ marginTop: 12, fontSize: 12.5, color: '#5A6A63', lineHeight: 1.55 }}>
            Stokta {product.stock} adet · Barkod {product.barcode}
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            {['S', 'M', 'L'].map((s) => (
              <span key={s} style={{ width: 36, height: 36, borderRadius: 10, border: '1.5px solid #DCE8E1', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 12, background: s === 'M' ? accent : '#fff', color: s === 'M' ? '#fff' : '#0B1F18' }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: '10px 14px 14px', borderTop: '1px solid #E8F0EB' }}>
        <button type="button" onClick={() => onAdd(product.id)} style={{
          width: '100%', padding: '13px', borderRadius: 12, fontWeight: 700, fontSize: 14,
          background: addedFlash ? '#0B1F18' : `linear-gradient(135deg,${accent},#5FA052)`, color: '#fff',
          transition: 'background .2s',
        }}>{addedFlash ? '✓ Sepete eklendi' : 'Sepete ekle'}</button>
      </div>
    </div>
  );
}

function ShopFavs({ products, fav, onOpenProduct, onBack }) {
  const list = products.filter((p) => fav[p.id]);
  return (
    <div style={{ ...wrapStyle, background: '#F7FBF8' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px 12px', background: '#fff' }}>
        <button type="button" onClick={onBack}><Icon name="arrowLeft" size={20} stroke="#0B1F18" /></button>
        <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 16 }}>Favoriler</div>
      </div>
      <div className="demo-scroll" style={{ ...scrollStyle, padding: 14 }}>
        {list.length === 0 && <div style={{ textAlign: 'center', color: '#8FA79B', padding: 40, fontSize: 13 }}>Henüz favori yok — kalbe dokunun</div>}
        {list.map((p) => (
          <button key={p.id} type="button" onClick={() => onOpenProduct(p.id)} style={{
            display: 'flex', gap: 12, alignItems: 'center', width: '100%', textAlign: 'left',
            background: '#fff', borderRadius: 14, padding: 10, marginBottom: 8, border: '1px solid #E8F0EB',
          }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
              <Thumb from={p.colors[0]} to={p.colors[1]} glyph={p.emoji} h={52} r={0} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}>{p.name}</div>
              <div style={{ color: ACCENT, fontWeight: 700, fontSize: 12, marginTop: 2 }}>{formatPrice(p.price, 'tr')}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ShopCart({ products, cart, onBack, onCheckout, onQty, locale, coupon, brandColor }) {
  const accent = brandColor || ACCENT;
  const lines = Object.keys(cart).map((id) => ({ p: products.find((x) => x.id === id), q: cart[id] })).filter((x) => x.p && x.q > 0);
  const sub = lines.reduce((s, l) => s + l.p.price * l.q, 0);
  const discount = coupon ? Math.round(sub * 0.1) : 0;
  const total = sub - discount;
  return (
    <div style={{ ...wrapStyle, background: '#F7FBF8' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px 12px', background: '#fff' }}>
        <button type="button" onClick={onBack}><Icon name="arrowLeft" size={20} stroke="#0B1F18" /></button>
        <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 16 }}>Sepet</div>
      </div>
      <div className="demo-scroll" style={{ ...scrollStyle, padding: 14 }}>
        {coupon && (
          <div style={{ background: '#E3F2EA', border: '1px solid #BFDACC', borderRadius: 12, padding: '10px 12px', marginBottom: 12, fontSize: 12, color: accent, fontWeight: 700 }}>
            %10 kupon uygulandı · Sepet kurtarma
          </div>
        )}
        {lines.length === 0 && <div style={{ textAlign: 'center', color: '#8FA79B', padding: 40, fontSize: 13 }}>Sepet boş</div>}
        {lines.map(({ p, q }) => (
          <div key={p.id} style={{ display: 'flex', gap: 10, background: '#fff', borderRadius: 14, padding: 10, marginBottom: 8, border: '1px solid #E8F0EB' }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden' }}>
              <Thumb from={p.colors[0]} to={p.colors[1]} glyph={p.emoji} h={52} r={0} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 12.5 }}>{p.name}</div>
              <div style={{ color: accent, fontWeight: 700, fontSize: 12, marginTop: 2 }}>{formatPrice(p.price, locale)}</div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 8 }}>
                <button type="button" onClick={() => onQty(p.id, -1)} style={{ width: 26, height: 26, borderRadius: 8, background: '#E8F3ED', fontWeight: 800 }}>−</button>
                <span style={{ fontWeight: 700, fontSize: 13 }}>{q}</span>
                <button type="button" onClick={() => onQty(p.id, 1)} style={{ width: 26, height: 26, borderRadius: 8, background: '#E8F3ED', fontWeight: 800 }}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {lines.length > 0 && (
        <div style={{ padding: '12px 14px 14px', background: '#fff', borderTop: '1px solid #E8F0EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 13 }}>
            <span style={{ color: '#5A6A63' }}>Toplam</span>
            <b style={{ fontFamily: 'var(--demo-display), sans-serif', fontSize: 16 }}>{formatPrice(total, locale)}</b>
          </div>
          <button type="button" onClick={onCheckout} style={{
            width: '100%', padding: '13px', borderRadius: 12, fontWeight: 700, fontSize: 14,
            background: `linear-gradient(135deg,${accent},#5FA052)`, color: '#fff',
          }}>Ödemeye geç</button>
        </div>
      )}
    </div>
  );
}

function ShopCheckout({ total, locale, onBack, onPaid, brandColor }) {
  const accent = brandColor || ACCENT;
  const [done, setDone] = React.useState(false);
  const pay = (method) => {
    setDone(true);
    setTimeout(() => onPaid && onPaid(method), 900);
  };
  return (
    <div style={{ ...wrapStyle, background: '#F7FBF8' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px 12px', background: '#fff' }}>
        <button type="button" onClick={onBack}><Icon name="arrowLeft" size={20} stroke="#0B1F18" /></button>
        <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 16 }}>Tek tıkla ödeme</div>
      </div>
      <div style={{ padding: 16, flex: 1 }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, border: '1px solid #E8F0EB', marginBottom: 14 }}>
          <div style={{ fontSize: 12, color: '#8FA79B' }}>Ödenecek tutar</div>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 28, color: accent, marginTop: 4 }}>{formatPrice(total, locale)}</div>
        </div>
        {done ? (
          <div style={{ textAlign: 'center', padding: 30 }}>
            <div style={{ width: 56, height: 56, borderRadius: 99, background: '#E3F2EA', display: 'grid', placeItems: 'center', margin: '0 auto 12px' }}>
              <Icon name="check" size={28} stroke={accent} />
            </div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>Ödeme alındı</div>
            <div style={{ fontSize: 12, color: '#8FA79B', marginTop: 6 }}>Demo — gerçek tahsilat yok</div>
          </div>
        ) : (
          <>
            <button type="button" onClick={() => pay('Apple Pay')} style={{
              width: '100%', padding: '14px', borderRadius: 12, background: '#0B1F18', color: '#fff',
              fontWeight: 700, fontSize: 14, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}> Apple Pay</button>
            <button type="button" onClick={() => pay('Google Pay')} style={{
              width: '100%', padding: '14px', borderRadius: 12, background: '#fff', color: '#0B1F18',
              fontWeight: 700, fontSize: 14, marginBottom: 10, border: '1.5px solid #DCE8E1',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>G Pay · Google Pay</button>
            <button type="button" onClick={() => pay('Kart')} style={{
              width: '100%', padding: '14px', borderRadius: 12, background: `linear-gradient(135deg,${accent},#5FA052)`, color: '#fff',
              fontWeight: 700, fontSize: 14,
            }}>Kayıtlı kartla öde ·•• 4242</button>
          </>
        )}
      </div>
    </div>
  );
}

function ShopAppShell({
  view, setView, productId, setProductId,
  fav, toggleFav, cart, addToCart, setQty,
  locale, brandColor, coupon, onPaid,
}) {
  const [tab, setTab] = React.useState(0);
  const [addedFlash, setAddedFlash] = React.useState(false);
  const products = DEMO_PRODUCTS;
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const product = products.find((p) => p.id === productId);
  const sub = Object.keys(cart).reduce((s, id) => {
    const p = products.find((x) => x.id === id);
    return s + (p ? p.price * cart[id] : 0);
  }, 0);
  const total = coupon ? Math.round(sub * 0.9) : sub;

  const openProduct = (id) => { setProductId(id); setView('pdp'); };
  const handleAdd = (id) => {
    addToCart(id);
    setAddedFlash(true);
    setTimeout(() => setAddedFlash(false), 900);
  };

  React.useEffect(() => {
    if (view === 'home') setTab(0);
    if (view === 'favs') setTab(2);
    if (view === 'cart' || view === 'checkout') setTab(3);
  }, [view]);

  let body = null;
  if (view === 'pdp') {
    body = <ShopPDP product={product} fav={fav} toggleFav={toggleFav} onBack={() => setView('home')} onAdd={handleAdd} locale={locale} brandColor={brandColor} addedFlash={addedFlash} />;
  } else if (view === 'favs') {
    body = <ShopFavs products={products} fav={fav} onOpenProduct={openProduct} onBack={() => setView('home')} />;
  } else if (view === 'cart') {
    body = <ShopCart products={products} cart={cart} onBack={() => setView('home')} onCheckout={() => setView('checkout')} onQty={setQty} locale={locale} coupon={coupon} brandColor={brandColor} />;
  } else if (view === 'checkout') {
    body = <ShopCheckout total={total || 299} locale={locale} onBack={() => setView('cart')} onPaid={onPaid} brandColor={brandColor} />;
  } else {
    body = <ShopHome products={products} fav={fav} toggleFav={toggleFav} cartCount={cartCount} onOpenProduct={openProduct} onOpenCart={() => setView('cart')} locale={locale} brandColor={brandColor} />;
  }

  const showTabs = view === 'home' || view === 'favs';
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      {body}
      {showTabs && (
        <TabBar
          accent={brandColor || ACCENT}
          active={tab}
          onChange={(i) => {
            setTab(i);
            if (i === 0) setView('home');
            if (i === 1) setView('home');
            if (i === 2) setView('favs');
            if (i === 3) setView('cart');
          }}
          items={[
            { icon: 'home', label: 'Ana Sayfa' },
            { icon: 'grid', label: 'Kategori' },
            { icon: 'heart', label: 'Favori' },
            { icon: 'cart', label: 'Sepet' },
          ]}
        />
      )}
    </div>
  );
}

Object.assign(window, { ShopAppShell, Thumb, ShopHome, ShopPDP, ShopCart, ShopCheckout });
