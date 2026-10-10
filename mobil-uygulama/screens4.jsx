// screens4.jsx — Taksi (Uber gibi) · Emlak & ilan (Sahibinden gibi)

/* ============== TAKSİ / ARAÇ ÇAĞIRMA ============== */
function TaxiApp() {
  const [tab, setTab] = React.useState(0);
  const [car, setCar] = React.useState(0);
  const cars = [['🚕', 'Taksi', '320 ₺'], ['🚙', 'Konfor', '410 ₺'], ['🚘', 'VIP', '650 ₺'], ['🚗', 'Kirala', '1.150 ₺']];
  const recent = [['✈️', 'Sabiha Gökçen Havalimanı', '34 km · 45 dk'], ['🏠', 'Ev · Ataşehir', '9 km · 18 dk'], ['💼', 'İş · Levent Plaza', '16 km · 28 dk']];
  return (
    <div style={{ ...wrapStyle, background: '#fff' }}>
      <div style={{ padding: '6px 16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 10, color: '#8a94a6', fontWeight: 600 }}>Nereden</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 7, height: 7, borderRadius: 99, background: '#ff8a00' }} />Kadıköy, Moda</div>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: 99, background: '#fff4e5', display: 'grid', placeItems: 'center', fontSize: 16 }}>🧑</div>
      </div>
      <div style={scrollStyle}>
        <div style={{ margin: '12px 16px 0', background: '#f3f5f8', borderRadius: 12, padding: '10px 13px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="search" size={15} stroke="#8a94a6" />
          <span style={{ color: '#8a94a6', fontSize: 12 }}>Nereye gidiyorsunuz?</span>
        </div>
        <div style={{ margin: '12px 16px 0', borderRadius: 16, background: 'linear-gradient(120deg,#ffb020,#ff7a00)', padding: '14px 16px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 16, lineHeight: 1.15 }}>Havalimanı<br />transferi %20</div>
          <div style={{ display: 'inline-block', marginTop: 10, background: '#fff', color: '#ff7a00', fontWeight: 800, fontSize: 10.5, padding: '6px 11px', borderRadius: 99 }}>Hemen çağır</div>
          <div style={{ position: 'absolute', right: -4, bottom: -8, fontSize: 58 }}>🚕</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px 6px' }}>
          <b style={{ fontFamily: 'var(--display)', fontSize: 13 }}>Araç seçin</b>
          <span style={{ fontSize: 10.5, color: '#ff7a00', fontWeight: 700 }}>Tümü</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, padding: '0 16px' }}>
          {cars.map(([g, n, p], i) => (
            <button key={i} onClick={() => setCar(i)} style={{ borderRadius: 12, padding: '8px 2px', background: car === i ? '#fff7ed' : '#fff', boxShadow: car === i ? 'inset 0 0 0 1.5px #ff8a00' : 'inset 0 0 0 1px #e9edf2', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <span style={{ fontSize: 20 }}>{g}</span>
              <span style={{ fontSize: 10, fontWeight: 800, fontFamily: 'var(--display)' }}>{n}</span>
              <span style={{ fontSize: 9, color: '#8a94a6' }}>{p}</span>
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px 4px' }}>
          <b style={{ fontFamily: 'var(--display)', fontSize: 13 }}>Son gidilenler</b>
          <span style={{ fontSize: 10.5, color: '#ff7a00', fontWeight: 700 }}>Gör</span>
        </div>
        {recent.map(([g, n, s], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 16px' }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: '#fff4e5', display: 'grid', placeItems: 'center', fontSize: 14 }}>{g}</div>
            <div><div style={{ fontWeight: 700, fontSize: 11.5 }}>{n}</div><div style={{ fontSize: 9.5, color: '#8a94a6' }}>{s}</div></div>
          </div>
        ))}
        <div style={{ height: 6 }} />
      </div>
      <TabBar accent="#ff7a00" active={tab} onChange={setTab} items={[{ icon: 'home', label: 'Ana sayfa' }, { icon: 'clock', label: 'Yolculuklar' }, { icon: 'card', label: 'Ödeme' }, { icon: 'user', label: 'Profil' }]} />
    </div>
  );
}

/* ============== EMLAK & İLAN ============== */
function EmlakApp() {
  const [tab, setTab] = React.useState(0);
  const [f, setF] = React.useState(0);
  const [fav, setFav] = React.useState(true);
  const filters = ['Kiralık', 'Satılık', 'Villa', '2+1', 'Bahçeli'];
  const list = [
    ['Bahçeli müstakil ev', 'Gümüşlük · 3+1', '2.800 ₺ / gece', ['#ffd56b', '#f59e0b']],
    ['Denize sıfır daire', 'Turgutreis · 2+1', '3.200 ₺ / gece', ['#7dd3fc', '#2563eb']],
  ];
  return (
    <div style={{ ...wrapStyle, background: '#fff' }}>
      <div style={{ padding: '6px 16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 10, color: '#8a94a6', fontWeight: 600 }}>Konum</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 14 }}>Bodrum, Muğla ▾</div>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: 99, background: '#e8f7f0', display: 'grid', placeItems: 'center', fontSize: 16 }}>🧔</div>
      </div>
      <div style={scrollStyle}>
        <div style={{ margin: '12px 16px 0', background: '#f3f5f8', borderRadius: 12, padding: '10px 13px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="search" size={15} stroke="#8a94a6" />
          <span style={{ color: '#8a94a6', fontSize: 12 }}>Villa, daire veya bölge ara</span>
        </div>
        <div style={{ display: 'flex', gap: 6, padding: '10px 16px 0', overflowX: 'auto' }}>
          {filters.map((x, i) => (
            <button key={x} onClick={() => setF(i)} style={{ flexShrink: 0, fontSize: 10.5, fontWeight: 700, padding: '6px 10px', borderRadius: 99, background: f === i ? '#16a34a' : '#f1f4f7', color: f === i ? '#fff' : '#3b4656' }}>{x}</button>
          ))}
        </div>
        <div style={{ margin: '12px 16px 0', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 22px rgba(16,24,40,.10)' }}>
          <div style={{ height: 104, background: 'linear-gradient(180deg,#bfe8ff,#e9f8ff)', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 22, background: '#7bc96f' }} />
            <div style={{ position: 'absolute', left: 54, bottom: 18, width: 96, height: 50, background: '#fff6e8', borderRadius: 4 }} />
            <div style={{ position: 'absolute', left: 46, bottom: 64, width: 0, height: 0, borderLeft: '56px solid transparent', borderRight: '56px solid transparent', borderBottom: '30px solid #e2574c' }} />
            <div style={{ position: 'absolute', left: 92, bottom: 18, width: 18, height: 28, background: '#8b5e3c', borderRadius: '3px 3px 0 0' }} />
            <div style={{ position: 'absolute', left: 66, bottom: 40, width: 16, height: 14, background: '#7dd3fc', borderRadius: 2 }} />
            <div style={{ position: 'absolute', left: 120, bottom: 40, width: 16, height: 14, background: '#7dd3fc', borderRadius: 2 }} />
            <div style={{ position: 'absolute', left: 18, bottom: 18, width: 22, height: 36, background: '#3f9b4f', borderRadius: '50% 50% 4px 4px' }} />
            <button onClick={() => setFav(v => !v)} style={{ position: 'absolute', right: 10, top: 10, width: 28, height: 28, borderRadius: 99, background: '#fff', display: 'grid', placeItems: 'center' }}>
              <Icon name="heart" size={14} stroke="#e11d48" fill={fav ? '#e11d48' : 'none'} />
            </button>
          </div>
          <div style={{ padding: '10px 12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><b style={{ fontFamily: 'var(--display)', fontSize: 12.5 }}>Deniz manzaralı villa</b><span style={{ fontSize: 10.5, fontWeight: 700 }}>★ 4,9</span></div>
            <div style={{ fontSize: 9.5, color: '#8a94a6', marginTop: 2 }}>Yalıkavak · 4+1 · Havuzlu</div>
            <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 13, color: '#16a34a', marginTop: 4 }}>4.500 ₺ <span style={{ fontSize: 9.5, color: '#8a94a6', fontWeight: 600 }}>/ gece</span></div>
          </div>
        </div>
        {list.map(([n, s, p, c], i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', margin: '10px 16px 0', padding: 8, borderRadius: 14, boxShadow: '0 4px 14px rgba(16,24,40,.07)' }}>
            <div style={{ width: 60, height: 46, borderRadius: 10, background: `linear-gradient(135deg,${c[0]},${c[1]})`, flexShrink: 0 }} />
            <div><div style={{ fontWeight: 800, fontSize: 11.5 }}>{n}</div><div style={{ fontSize: 9.5, color: '#8a94a6' }}>{s}</div><div style={{ fontSize: 10.5, fontWeight: 800, color: '#16a34a', marginTop: 2 }}>{p}</div></div>
          </div>
        ))}
        <div style={{ height: 8 }} />
      </div>
      <TabBar accent="#16a34a" active={tab} onChange={setTab} items={[{ icon: 'home', label: 'Keşfet' }, { icon: 'map', label: 'Harita' }, { icon: 'heart', label: 'Favoriler' }, { icon: 'user', label: 'Profil' }]} />
    </div>
  );
}

Object.assign(window, { TaxiApp, EmlakApp });
