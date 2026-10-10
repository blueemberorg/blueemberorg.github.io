// screens1.jsx — Yemek siparişi · Bankacılık/Fintech · Rezervasyon
const wrapStyle = { height: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'var(--body)' };
const scrollStyle = { flex: 1, overflowY: 'auto', overflowX: 'hidden' };

// thumbnail placeholder with emoji glyph
function Thumb({ from, to, glyph, h = 78, r = 14 }) {
  return (
    <div style={{ height: h, borderRadius: r, background: `linear-gradient(135deg,${from},${to})`, display: 'grid', placeItems: 'center', fontSize: h * 0.42, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 20%,rgba(255,255,255,.35),transparent 60%)' }} />
      <span style={{ position: 'relative' }}>{glyph}</span>
    </div>
  );
}

/* ============== 1 · YEMEK SİPARİŞİ ============== */
function FoodApp() {
  const cats = [['🍔', 'Burger'], ['🍕', 'Pizza'], ['🍣', 'Suşi'], ['🥗', 'Salata'], ['🍰', 'Tatlı']];
  const [cat, setCat] = React.useState(0);
  const [cart, setCart] = React.useState(2);
  const [tab, setTab] = React.useState(0);
  const items = [
    { n: 'Truffle Burger', r: '4.9', t: '20 dk', p: '₺145', g: '🍔', c: ['#ff8a3c', '#ff5a3c'] },
    { n: 'Margherita', r: '4.7', t: '25 dk', p: '₺120', g: '🍕', c: ['#ffb020', '#ff7a3c'] },
    { n: 'California Roll', r: '4.8', t: '30 dk', p: '₺210', g: '🍣', c: ['#ff6b8a', '#ff3c6e'] },
  ];
  return (
    <div style={wrapStyle}>
      <div style={{ background: 'linear-gradient(135deg,#ff7a3c,#ff3c5e)', padding: '6px 16px 18px', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 10, opacity: .85, fontWeight: 600 }}>Teslimat · 20-30 dk</div>
            <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', gap: 4 }}>Bağdat Cd. 142 ▾</div>
          </div>
          <div style={{ width: 34, height: 34, borderRadius: 12, background: 'rgba(255,255,255,.2)', display: 'grid', placeItems: 'center', position: 'relative' }}>
            <Icon name="cart" size={18} stroke="#fff" />
            {cart > 0 && <span style={{ position: 'absolute', top: -5, right: -5, background: '#fff', color: '#ff3c5e', borderRadius: 99, fontSize: 9, fontWeight: 800, minWidth: 16, height: 16, display: 'grid', placeItems: 'center', padding: '0 4px' }}>{cart}</span>}
          </div>
        </div>
        <div style={{ marginTop: 14, background: 'rgba(255,255,255,.96)', borderRadius: 12, padding: '10px 13px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="search" size={16} stroke="#ff5a3c" />
          <span style={{ color: '#a89', fontSize: 12.5 }}>Restoran veya yemek ara</span>
        </div>
      </div>
      <div style={scrollStyle}>
        <div style={{ display: 'flex', gap: 8, padding: '14px 16px 6px', overflowX: 'auto' }}>
          {cats.map(([e, n], i) => (
            <button key={i} onClick={() => setCat(i)} style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 50, height: 50, borderRadius: 16, display: 'grid', placeItems: 'center', fontSize: 22, background: cat === i ? 'linear-gradient(135deg,#ff7a3c,#ff3c5e)' : '#fff4ef', boxShadow: cat === i ? '0 8px 18px rgba(255,90,60,.35)' : 'none', transition: '.2s' }}>{e}</div>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: cat === i ? '#ff3c5e' : '#9a8e88', fontFamily: 'var(--display)' }}>{n}</span>
            </button>
          ))}
        </div>
        <div style={{ margin: '10px 16px', borderRadius: 16, background: 'linear-gradient(120deg,#2a1a3a,#5a2a6a)', padding: '16px 18px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#ffd0a0', letterSpacing: '.05em' }}>BUGÜNE ÖZEL</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 19, marginTop: 3 }}>%40 İndirim</div>
          <div style={{ fontSize: 11, opacity: .8 }}>İlk siparişine özel</div>
          <div style={{ position: 'absolute', right: -6, bottom: -10, fontSize: 64 }}>🍔</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 16px' }}>
          <b style={{ fontFamily: 'var(--display)', fontSize: 14 }}>Popüler</b>
          <span style={{ fontSize: 11, color: '#ff5a3c', fontWeight: 700 }}>Tümü</span>
        </div>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, padding: '8px 16px', alignItems: 'center' }}>
            <div style={{ width: 64, flexShrink: 0 }}><Thumb from={it.c[0]} to={it.c[1]} glyph={it.g} h={64} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13.5 }}>{it.n}</div>
              <div style={{ display: 'flex', gap: 8, fontSize: 10.5, color: '#9a8e88', marginTop: 3, alignItems: 'center' }}>
                <span style={{ color: '#ff9500', fontWeight: 700 }}>★ {it.r}</span><span>· {it.t}</span>
              </div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 14, marginTop: 4, color: '#ff3c5e' }}>{it.p}</div>
            </div>
            <button onClick={() => setCart(c => c + 1)} style={{ width: 30, height: 30, borderRadius: 10, background: 'linear-gradient(135deg,#ff7a3c,#ff3c5e)', color: '#fff', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name="plus" size={16} stroke="#fff" /></button>
          </div>
        ))}
        <div style={{ height: 8 }} />
      </div>
      <TabBar accent="#ff3c5e" active={tab} onChange={setTab} items={[{ icon: 'home', label: 'Ana Sayfa' }, { icon: 'search', label: 'Ara' }, { icon: 'bag', label: 'Sipariş' }, { icon: 'user', label: 'Profil' }]} />
    </div>
  );
}

/* ============== 2 · BANKACILIK / FINTECH ============== */
function FintechApp() {
  const [tab, setTab] = React.useState(0);
  const tx = [
    { n: 'Spotify', s: 'Abonelik', a: '-₺59,99', g: '🎵', c: '#1db954' },
    { n: 'Migros', s: 'Market', a: '-₺342,10', g: '🛒', c: '#ff7a3c' },
    { n: 'Maaş', s: 'Gelen', a: '+₺28.500', g: '💼', c: '#6d3bf5', up: 1 },
    { n: 'Netflix', s: 'Abonelik', a: '-₺99,99', g: '🎬', c: '#e50914' },
  ];
  return (
    <div style={{ ...wrapStyle, background: '#0e0a18' }}>
      <div style={{ padding: '4px 18px 0', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 32, height: 32, borderRadius: 99, background: 'linear-gradient(135deg,#6d3bf5,#e23ad6)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 13 }}>EY</div>
            <div><div style={{ fontSize: 10, color: '#9a90b0' }}>Hoş geldin</div><div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13 }}>Elif Yıldız</div></div>
          </div>
          <Icon name="bell" size={19} stroke="#fff" />
        </div>
      </div>
      <div style={scrollStyle}>
        <div style={{ margin: '16px 18px', borderRadius: 20, padding: '18px 20px', background: 'linear-gradient(135deg,#6d3bf5 0%,#a02bf0 60%,#e23ad6 100%)', color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 18px 36px rgba(109,59,245,.4)' }}>
          <div style={{ position: 'absolute', right: -30, top: -30, width: 120, height: 120, borderRadius: 99, background: 'rgba(255,255,255,.12)' }} />
          <div style={{ fontSize: 11, opacity: .85 }}>Toplam Bakiye</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 28, letterSpacing: '-.02em', marginTop: 2 }}>₺142.860<span style={{ fontSize: 15, opacity: .7 }}>,40</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 22 }}>
            <span style={{ letterSpacing: '.15em', fontSize: 12 }}>•••• 4829</span>
            <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontStyle: 'italic', fontSize: 14 }}>VISA</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 18px 6px' }}>
          {[['↑', 'Gönder'], ['↓', 'İste'], ['⇄', 'Çevir'], ['+', 'Ekle']].map(([s, l], i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 46, height: 46, borderRadius: 15, background: '#1a1428', display: 'grid', placeItems: 'center', color: '#c4b5ff', fontSize: 18, fontWeight: 700 }}>{s}</div>
              <span style={{ fontSize: 10, color: '#9a90b0', fontWeight: 600 }}>{l}</span>
            </div>
          ))}
        </div>
        <div style={{ margin: '12px 18px 6px', borderRadius: 16, background: '#15101f', padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#9a90b0' }}><span>Bu ay harcama</span><span style={{ color: '#fff', fontWeight: 700 }}>₺8.420</span></div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 46, marginTop: 12 }}>
            {[40, 65, 35, 80, 55, 95, 70].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 4, background: i === 5 ? 'linear-gradient(#a02bf0,#6d3bf5)' : '#2a2140' }} />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 18px 4px' }}>
          <b style={{ fontFamily: 'var(--display)', fontSize: 13, color: '#fff' }}>İşlemler</b>
          <span style={{ fontSize: 11, color: '#c4b5ff', fontWeight: 700 }}>Tümü</span>
        </div>
        {tx.map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '7px 18px' }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: '#1a1428', display: 'grid', placeItems: 'center', fontSize: 17 }}>{t.g}</div>
            <div style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: 12.5, color: '#fff' }}>{t.n}</div><div style={{ fontSize: 10, color: '#9a90b0' }}>{t.s}</div></div>
            <b style={{ fontFamily: 'var(--display)', fontSize: 12.5, color: t.up ? '#2ee6a0' : '#fff' }}>{t.a}</b>
          </div>
        ))}
        <div style={{ height: 8 }} />
      </div>
      <div style={{ background: '#15101f', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <TabBar accent="#c4b5ff" active={tab} onChange={setTab} items={[{ icon: 'home', label: 'Özet' }, { icon: 'chart', label: 'İstatistik' }, { icon: 'card', label: 'Kartlar' }, { icon: 'user', label: 'Profil' }]} />
      </div>
    </div>
  );
}

/* ============== 3 · REZERVASYON / RANDEVU ============== */
function BookingApp() {
  const [day, setDay] = React.useState(3);
  const [slot, setSlot] = React.useState(2);
  const [tab, setTab] = React.useState(0);
  const days = [['Pzt', 9], ['Sal', 10], ['Çar', 11], ['Per', 12], ['Cum', 13], ['Cmt', 14]];
  const slots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'];
  return (
    <div style={{ ...wrapStyle, background: '#f4fbf9' }}>
      <div style={{ background: 'linear-gradient(135deg,#0bbf9e,#07a6c9)', padding: '6px 18px 56px', color: '#fff', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Icon name="arrowLeft" size={20} stroke="#fff" />
          <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 14 }}>Randevu Al</span>
          <Icon name="heart" size={19} stroke="#fff" />
        </div>
      </div>
      <div style={scrollStyle}>
        <div style={{ margin: '-44px 16px 0', background: '#fff', borderRadius: 18, padding: 16, boxShadow: '0 14px 30px rgba(11,191,158,.18)', display: 'flex', gap: 13, alignItems: 'center' }}>
          <div style={{ width: 58, height: 58, borderRadius: 16, background: 'linear-gradient(135deg,#0bbf9e,#07a6c9)', display: 'grid', placeItems: 'center', fontSize: 26 }}>💇</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 15 }}>Glow Studio</div>
            <div style={{ fontSize: 11, color: '#8a9a96', marginTop: 2 }}>Saç & Bakım · Kadıköy</div>
            <div style={{ fontSize: 11, marginTop: 4 }}><span style={{ color: '#ff9500', fontWeight: 700 }}>★ 4.9</span> <span style={{ color: '#8a9a96' }}>(312 değerlendirme)</span></div>
          </div>
        </div>
        <div style={{ padding: '18px 18px 4px' }}>
          <b style={{ fontFamily: 'var(--display)', fontSize: 14 }}>Tarih seç</b>
        </div>
        <div style={{ display: 'flex', gap: 8, padding: '6px 16px', overflowX: 'auto' }}>
          {days.map(([d, n], i) => (
            <button key={i} onClick={() => setDay(i)} style={{ flexShrink: 0, width: 50, padding: '10px 0', borderRadius: 14, textAlign: 'center', background: day === i ? 'linear-gradient(135deg,#0bbf9e,#07a6c9)' : '#fff', color: day === i ? '#fff' : '#3a4a46', boxShadow: day === i ? '0 8px 16px rgba(11,191,158,.3)' : '0 1px 4px rgba(0,0,0,.05)', transition: '.2s' }}>
              <div style={{ fontSize: 10.5, opacity: .8 }}>{d}</div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 17, marginTop: 2 }}>{n}</div>
            </button>
          ))}
        </div>
        <div style={{ padding: '14px 18px 4px' }}>
          <b style={{ fontFamily: 'var(--display)', fontSize: 14 }}>Uygun saatler</b>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 9, padding: '6px 16px' }}>
          {slots.map((s, i) => (
            <button key={i} onClick={() => setSlot(i)} style={{ padding: '11px 0', borderRadius: 12, fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13, background: slot === i ? 'linear-gradient(135deg,#0bbf9e,#07a6c9)' : '#fff', color: slot === i ? '#fff' : '#3a4a46', boxShadow: slot === i ? '0 8px 16px rgba(11,191,158,.3)' : 'inset 0 0 0 1.5px #e3efec', transition: '.2s' }}>{s}</button>
          ))}
        </div>
        <div style={{ height: 12 }} />
      </div>
      <div style={{ padding: '12px 16px', background: '#fff', borderTop: '1px solid #e8f2ef', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div><div style={{ fontSize: 10, color: '#8a9a96' }}>Toplam</div><div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 17 }}>₺450</div></div>
        <button style={{ flex: 1, padding: '14px 0', borderRadius: 14, background: 'linear-gradient(135deg,#0bbf9e,#07a6c9)', color: '#fff', fontFamily: 'var(--display)', fontWeight: 700, fontSize: 14, boxShadow: '0 10px 22px rgba(11,191,158,.35)' }}>{days[day][0]} {days[day][1]} · {slots[slot]} Onayla</button>
      </div>
    </div>
  );
}

Object.assign(window, { FoodApp, FintechApp, BookingApp, Thumb, wrapStyle, scrollStyle });
