// phone.jsx — hafif, özelleştirilebilir telefon çerçevesi
// Exports: PhoneFrame, PhoneStatusBar, TabBar, Icon

function PhoneStatusBar({ tint = 'dark', bg = 'transparent', time = '9:41' }) {
  const c = tint === 'light' ? '#fff' : '#0e0a18';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '11px 22px 6px', background: bg, position: 'relative', zIndex: 8, flexShrink: 0,
    }}>
      <span style={{ fontWeight: 700, fontSize: 13, color: c, fontFamily: 'var(--display)', letterSpacing: '.02em' }}>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <svg width="16" height="11" viewBox="0 0 18 12"><rect x="0" y="7.5" width="3" height="4.5" rx=".6" fill={c}/><rect x="4.5" y="5" width="3" height="7" rx=".6" fill={c}/><rect x="9" y="2.5" width="3" height="9.5" rx=".6" fill={c}/><rect x="13.5" y="0" width="3" height="12" rx=".6" fill={c} opacity=".4"/></svg>
        <svg width="15" height="11" viewBox="0 0 17 12"><path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/><circle cx="8.5" cy="10" r="1.4" fill={c}/></svg>
        <svg width="22" height="11" viewBox="0 0 25 12"><rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={c} strokeOpacity=".35" fill="none"/><rect x="2" y="2" width="16" height="8" rx="1.6" fill={c}/><rect x="23" y="4" width="1.5" height="4" rx=".7" fill={c} opacity=".4"/></svg>
      </div>
    </div>
  );
}

function PhoneFrame({ children, width = 290, statusBg = '#fff', statusTint = 'dark', time = '9:41', glow }) {
  const ratio = 2.075;
  const height = Math.round(width * ratio);
  return (
    <div style={{
      width, height, flexShrink: 0, position: 'relative',
      borderRadius: width * 0.155, padding: width * 0.028,
      background: 'linear-gradient(150deg,#1c1726,#322a44)',
      boxShadow: glow
        ? `0 30px 70px ${glow}, 0 0 0 1px rgba(0,0,0,0.25)`
        : '0 24px 60px rgba(40,22,90,0.28), 0 0 0 1px rgba(0,0,0,0.25)',
    }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: width * 0.128, overflow: 'hidden',
        background: statusBg, position: 'relative', display: 'flex', flexDirection: 'column',
      }}>
        {/* dynamic island */}
        <div style={{
          position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)',
          width: width * 0.3, height: width * 0.092, borderRadius: 99, background: '#0a0710', zIndex: 20,
        }} />
        <PhoneStatusBar tint={statusTint} bg={statusBg} time={time} />
        <div className="ph-screen" style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// generic tab bar for app screens
function TabBar({ items, active, onChange, accent = '#6d3bf5' }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      padding: '9px 6px 16px', background: 'rgba(255,255,255,0.96)',
      borderTop: '1px solid rgba(0,0,0,0.06)', backdropFilter: 'blur(8px)', flexShrink: 0,
    }}>
      {items.map((it, i) => {
        const on = i === active;
        return (
          <button key={i} onClick={() => onChange && onChange(i)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: on ? accent : '#b7b1c4', flex: 1, padding: 0,
          }}>
            <Icon name={it.icon} size={21} stroke={on ? accent : '#b7b1c4'} fill={on ? accent : 'none'} />
            <span style={{ fontSize: 9.5, fontWeight: 700, fontFamily: 'var(--display)' }}>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// minimal icon set (stroke based)
function Icon({ name, size = 22, stroke = '#000', fill = 'none', sw = 1.9 }) {
  const p = { fill: 'none', stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const f = { fill: fill === 'none' ? 'none' : fill, stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    home: <><path d="M3 10.5 12 3l9 7.5" {...p}/><path d="M5 9.5V20h14V9.5" {...f}/></>,
    search: <><circle cx="11" cy="11" r="7" {...p}/><path d="M21 21l-4-4" {...p}/></>,
    cart: <><circle cx="9" cy="20" r="1.4" {...f}/><circle cx="18" cy="20" r="1.4" {...f}/><path d="M2 3h3l2.4 12.5a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2L21.5 7H6" {...p}/></>,
    user: <><circle cx="12" cy="8" r="4" {...f}/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" {...p}/></>,
    heart: <path d="M12 20s-7-4.5-9.5-9C1 8 2.5 4.5 6 4.5c2.2 0 3.4 1.4 4 2.3.6-.9 1.8-2.3 4-2.3 3.5 0 5 3.5 3.5 6.5C19 15.5 12 20 12 20Z" {...f}/>,
    bag: <><path d="M5 8h14l-1 12.5H6L5 8Z" {...f}/><path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" {...p}/></>,
    grid: <><rect x="3" y="3" width="7.5" height="7.5" rx="2" {...f}/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2" {...p}/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2" {...p}/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" {...p}/></>,
    map: <><path d="M9 4 3 6.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5L9 4Z" {...p}/><path d="M9 4v13.5M15 6.5V20" {...p}/></>,
    card: <><rect x="2.5" y="5" width="19" height="14" rx="3" {...f}/><path d="M2.5 9.5h19" {...p}/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" {...p}/></>,
    play: <path d="M7 4.5v15l12-7.5-12-7.5Z" {...f}/>,
    bell: <><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" {...f}/><path d="M10 21a2 2 0 0 0 4 0" {...p}/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" {...f}/><path d="M3 9.5h18M8 3v4M16 3v4" {...p}/></>,
    clock: <><circle cx="12" cy="12" r="9" {...f}/><path d="M12 7v5l3.5 2" {...p}/></>,
    book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" {...f}/><path d="M4 19a2 2 0 0 1 2-2h13" {...p}/></>,
    flame: <path d="M12 3c1 4-3 5-3 9a3 3 0 0 0 6 0c0-1-.5-2-.5-2 1.5 1 2.5 3 2.5 5a5.5 5.5 0 1 1-11 0c0-5 5-7 6-12Z" {...f}/>,
    music: <><circle cx="6" cy="18" r="3" {...f}/><circle cx="17" cy="16" r="3" {...f}/><path d="M9 18V6l11-2v12" {...p}/></>,
    chat: <><path d="M4 5h16v11H9l-5 4V5Z" {...f}/></>,
    plus: <path d="M12 5v14M5 12h14" {...p}/>,
    star: <path d="M12 3.5 14.6 9l6 .8-4.4 4.2 1.1 6L12 17.2 6.7 20l1.1-6L3.4 9.8l6-.8L12 3.5Z" {...f}/>,
    compass: <><circle cx="12" cy="12" r="9" {...p}/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" {...f}/></>,
    activity: <path d="M3 12h4l2.5 7 5-15L17 12h4" {...p}/>,
    library: <><path d="M5 4v16M9 4v16M14 5l5 14" {...p}/></>,
    arrowLeft: <path d="M15 5l-7 7 7 7" {...p}/>,
    check: <path d="M5 12l5 5 9-11" {...p}/>,
    pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" {...f}/><circle cx="12" cy="10" r="2.5" {...p}/></>,
    nav2: <path d="M3 11 21 3l-8 18-2-7-8-3Z" {...f}/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24">{paths[name] || null}</svg>;
}

Object.assign(window, { PhoneFrame, PhoneStatusBar, TabBar, Icon });
// techlogos.jsx — teknoloji yığını için marka logoları (rozet + glyph)
function TechLogo({ name, size = 30 }) {
  // [badge bg, glyph color, key]
  const map = {
    'Swift':        ['#F05138', '#fff', 'swift'],
    'Kotlin':       ['#7F52FF', '#fff', 'kotlin'],
    'React Native': ['#0B1120', '#61DAFB', 'react'],
    'Flutter':      ['#0468D7', '#fff', 'flutter'],
    'Node.js':      ['#3C873A', '#fff', 'node'],
    'Firebase':     ['#FFA000', '#fff', 'firebase'],
    'Figma':        ['#1E1E1E', '#fff', 'figma'],
    'GraphQL':      ['#E10098', '#fff', 'graphql'],
    'AWS':          ['#232F3E', '#FF9900', 'aws'],
    'PostgreSQL':   ['#336791', '#fff', 'postgres'],
    'TensorFlow':   ['#FF6F00', '#fff', 'tf'],
    'Stripe':       ['#635BFF', '#fff', 'stripe'],
    'Kubernetes':   ['#326CE5', '#fff', 'k8s'],
    'TypeScript':   ['#3178C6', '#fff', 'ts'],
  };
  const [bg, gc, key] = map[name] || ['#6d3bf5', '#fff', 'dot'];
  const inner = size * 0.62;
  return (
    <span style={{ width: size, height: size, borderRadius: size * 0.28, background: bg, display: 'grid', placeItems: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,.25)' }}>
      <svg width={inner} height={inner} viewBox="0 0 24 24">{glyph(key, gc)}</svg>
    </span>
  );
}

function glyph(key, c) {
  const txt = (t, fs = 13) => <text x="12" y="12" textAnchor="middle" dominantBaseline="central" fontFamily="Sora, sans-serif" fontWeight="800" fontSize={fs} fill={c}>{t}</text>;
  switch (key) {
    case 'swift':
      return <path fill={c} d="M3.2 5.4c3.4 3.6 7.2 5.6 11.4 5.3-1 1.7-2.9 2.9-5.2 3 1.5.8 3.4 1 5.2.4-1.5 2.3-4.3 3.4-7 2.5 1.4 1.7 3.4 2.9 5.7 2.7-3.6 2.2-8.7 1.8-11.4-2.6 2.6 1.3 5.2 1.4 7.1.5C8.7 10.6 5.6 8.2 3.2 5.4Z" />;
    case 'kotlin':
      return <><path fill={c} d="M3 3h18L12 12l9 9H3z" opacity=".55" /><path fill={c} d="M21 3 12 12l9 9V3z" opacity="0" /><path fill={c} d="M3 3h9l-9 9z" /></>;
    case 'react':
      return <g><g fill="none" stroke={c} strokeWidth="1.3"><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></g><circle cx="12" cy="12" r="2.1" fill={c} /></g>;
    case 'flutter':
      return <path fill={c} d="M13.8 2 4 11.8l3 3L19.8 2zM13.8 11.4 8.4 16.8 13.8 22h6l-5.4-5.2 5.4-5.4z" />;
    case 'node':
      return <><path fill="none" stroke={c} strokeWidth="1.4" d="M12 2.4 20.4 7v10L12 21.6 3.6 17V7z" />{txt('N', 9)}</>;
    case 'firebase':
      return <path fill={c} d="M5.5 18.5 10.2 3.4c.2-.6 1-.6 1.3-.1l2 3.6-1.7 1.7 4.7 4.6c.3.3.5.7.5 1.1 0 3-2.5 5.1-5.5 5.1-2.6 0-5.5-1.6-6-1.4z" />;
    case 'figma':
      return <g><path fill={c} d="M9.5 2.5h5v5h-5z" opacity=".95" /><circle cx="12" cy="12" r="2.5" fill={c} /><path fill={c} d="M9.5 14.5h2.5v2.5a2.5 2.5 0 1 1-2.5-2.5z" opacity=".8" /><path fill={c} d="M9.5 7.5h2.5v5H9.5a2.5 2.5 0 0 1 0-5z" opacity=".6" /><path fill={c} d="M12 2.5h2.5a2.5 2.5 0 0 1 0 5H12z" opacity=".7" /></g>;
    case 'graphql':
      return <g><g fill="none" stroke={c} strokeWidth="1.1"><path d="M12 3.2 20 7.6v8.8L12 20.8 4 16.4V7.6z" /><path d="M12 3.2 4 16.4M12 3.2 20 16.4M4 7.6h16" /></g><g fill={c}><circle cx="12" cy="3.2" r="1.7" /><circle cx="20" cy="7.6" r="1.7" /><circle cx="20" cy="16.4" r="1.7" /><circle cx="12" cy="20.8" r="1.7" /><circle cx="4" cy="16.4" r="1.7" /><circle cx="4" cy="7.6" r="1.7" /></g></g>;
    case 'aws':
      return <g fill={c}><path d="M4 13.5c4.2 2.9 11.8 2.9 16 .2l1 1.3c-4.8 3.4-13.2 3.4-18 0z" /><path d="M18.5 14.8c.6-1 .3-2.4.3-2.4s1.3.5 1 1.8c-.2 1-1.3.6-1.3.6z" /><text x="12" y="8" textAnchor="middle" fontFamily="Sora" fontWeight="800" fontSize="6.5" fill={c}>aws</text></g>;
    case 'postgres':
      return txt('Pg', 9);
    case 'tf':
      return <g fill={c}><path d="M11 3 4 7v3l3-1.7v8.4L11 19V3z" /><path d="M13 3v3l3 1.7V11l-3-1.7V13l3 1.7v3.3L20 15V7z" opacity=".85" /></g>;
    case 'stripe':
      return txt('S', 14);
    case 'k8s':
      return <g fill="none" stroke={c} strokeWidth="1.4"><path d="M12 3 20 7v8l-8 4-8-4V7z" /><circle cx="12" cy="11" r="3" /></g>;
    case 'ts':
      return txt('TS', 9);
    default:
      return <circle cx="12" cy="12" r="6" fill={c} />;
  }
}
window.TechLogo = TechLogo;
// screens1.jsx — Yemek siparişi · Bankacılık/Fintech · Rezervasyon
const { useState } = React;

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
  const [cat, setCat] = useState(0);
  const [cart, setCart] = useState(2);
  const [tab, setTab] = useState(0);
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
  const [tab, setTab] = useState(0);
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
  const [day, setDay] = useState(3);
  const [slot, setSlot] = useState(2);
  const [tab, setTab] = useState(0);
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
// screens2.jsx — Araç/Kurye takip · E-ticaret · Sosyal medya
const { useState } = React;

/* ============== 4 · ARAÇ / KURYE TAKİP (HARİTA) ============== */
function MapApp() {
  const [tab, setTab] = useState(0);
  return (
    <div style={{ ...wrapStyle, background: '#0d1b2a' }}>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* map */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,#16263a,#0d1b2a)' }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
            <defs><pattern id="streets" width="46" height="46" patternUnits="userSpaceOnUse"><path d="M0 23h46M23 0v46" stroke="#22344a" strokeWidth="2" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#streets)" />
            <path d="M-10 60 L120 120 L210 60 L320 180" stroke="#2b7cff" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".9" />
            <path d="M120 280 Q160 220 210 240 T300 200" stroke="#3a5070" strokeWidth="10" fill="none" strokeLinecap="round" />
          </svg>
          {/* route line */}
          <svg width="100%" height="100%" viewBox="0 0 290 380" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="xMidYMid slice">
            <path d="M70 300 C70 230 200 250 200 170 C200 110 150 110 150 70" stroke="#2b7cff" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeDasharray="2 9" />
          </svg>
          {/* courier marker */}
          <div style={{ position: 'absolute', left: '56%', top: '44%', transform: 'translate(-50%,-50%)' }}>
            <div style={{ width: 42, height: 42, borderRadius: 99, background: '#2b7cff', border: '3px solid #fff', display: 'grid', placeItems: 'center', fontSize: 19, boxShadow: '0 6px 18px rgba(43,124,255,.6)' }}>🛵</div>
          </div>
          {/* destination */}
          <div style={{ position: 'absolute', left: '50%', top: '17%', transform: 'translate(-50%,-100%)' }}>
            <Icon name="pin" size={30} stroke="#fff" fill="#ff3c6e" />
          </div>
        </div>
        {/* top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '6px 16px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,.95)', display: 'grid', placeItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,.2)' }}><Icon name="arrowLeft" size={19} stroke="#0d1b2a" /></div>
          <div style={{ padding: '9px 15px', borderRadius: 12, background: 'rgba(255,255,255,.95)', fontFamily: 'var(--display)', fontWeight: 700, fontSize: 12, boxShadow: '0 4px 12px rgba(0,0,0,.2)' }}>Tahmini varış · <span style={{ color: '#2b7cff' }}>12 dk</span></div>
        </div>
      </div>
      {/* bottom sheet */}
      <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', padding: '14px 18px 8px', marginTop: -24, position: 'relative', zIndex: 5, boxShadow: '0 -10px 30px rgba(0,0,0,.25)' }}>
        <div style={{ width: 40, height: 4, borderRadius: 99, background: '#dfe4ea', margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', gap: 5, marginBottom: 14 }}>
          {[1, 1, 1, 0].map((on, i) => <div key={i} style={{ flex: 1, height: 4, borderRadius: 99, background: on ? '#2b7cff' : '#e8ebf0' }} />)}
        </div>
        <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 15 }}>Kuryen yola çıktı 🛵</div>
        <div style={{ fontSize: 12, color: '#7a8694', marginTop: 2 }}>Siparişin <b style={{ color: '#0d1b2a' }}>12 dakika</b> içinde kapında</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 14, padding: '12px 14px', borderRadius: 16, background: '#f5f7fa' }}>
          <div style={{ width: 44, height: 44, borderRadius: 99, background: 'linear-gradient(135deg,#2b7cff,#1a5fd0)', display: 'grid', placeItems: 'center', color: '#fff', fontFamily: 'var(--display)', fontWeight: 800, fontSize: 16 }}>MK</div>
          <div style={{ flex: 1 }}><div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13 }}>Murat K.</div><div style={{ fontSize: 11, color: '#7a8694' }}>★ 4.9 · 34 GH 218</div></div>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: '#2b7cff', display: 'grid', placeItems: 'center' }}><Icon name="chat" size={18} stroke="#fff" /></div>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: '#e8f0ff', display: 'grid', placeItems: 'center', color: '#2b7cff', fontSize: 18 }}>📞</div>
        </div>
      </div>
      <TabBar accent="#2b7cff" active={tab} onChange={setTab} items={[{ icon: 'map', label: 'Takip' }, { icon: 'clock', label: 'Geçmiş' }, { icon: 'bell', label: 'Bildirim' }, { icon: 'user', label: 'Profil' }]} />
    </div>
  );
}

/* ============== 5 · E-TİCARET / ALIŞVERİŞ ============== */
function ShopApp() {
  const [tab, setTab] = useState(0);
  const [fav, setFav] = useState({});
  const cats = ['Tümü', 'Giyim', 'Ayakkabı', 'Aksesuar', 'Çanta'];
  const [cat, setCat] = useState(0);
  const prod = [
    { n: 'Oversize Ceket', p: '₺899', o: '₺1.299', g: '🧥', c: ['#6d3bf5', '#a02bf0'] },
    { n: 'Retro Sneaker', p: '₺1.249', o: '', g: '👟', c: ['#ec3a8e', '#ff6b8a'] },
    { n: 'Deri Çanta', p: '₺2.150', o: '₺2.800', g: '👜', c: ['#ff7a3c', '#ffb020'] },
    { n: 'Güneş Gözlüğü', p: '₺549', o: '', g: '🕶️', c: ['#0bbf9e', '#2b7cff'] },
  ];
  return (
    <div style={{ ...wrapStyle, background: '#faf7ff' }}>
      <div style={{ padding: '6px 16px 10px', background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div><div style={{ fontSize: 10.5, color: '#a99fc0' }}>Keşfet</div><div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 17 }}>Mağaza</div></div>
          <div style={{ position: 'relative' }}><Icon name="cart" size={22} stroke="#15101f" /><span style={{ position: 'absolute', top: -4, right: -6, background: '#ec3a8e', color: '#fff', borderRadius: 99, fontSize: 9, fontWeight: 800, width: 15, height: 15, display: 'grid', placeItems: 'center' }}>3</span></div>
        </div>
        <div style={{ background: '#f3eefb', borderRadius: 12, padding: '11px 13px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="search" size={16} stroke="#a99fc0" /><span style={{ color: '#a99fc0', fontSize: 12.5 }}>Ürün ara...</span>
        </div>
      </div>
      <div style={scrollStyle}>
        <div style={{ display: 'flex', gap: 8, padding: '12px 16px 4px', overflowX: 'auto' }}>
          {cats.map((c, i) => (
            <button key={i} onClick={() => setCat(i)} style={{ flexShrink: 0, padding: '8px 15px', borderRadius: 99, fontFamily: 'var(--display)', fontWeight: 700, fontSize: 12, background: cat === i ? '#15101f' : '#fff', color: cat === i ? '#fff' : '#6b6480', boxShadow: cat === i ? 'none' : 'inset 0 0 0 1.5px #ece6f6' }}>{c}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '10px 16px' }}>
          {prod.map((p, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 14px rgba(80,40,160,.06)' }}>
              <div style={{ position: 'relative' }}>
                <Thumb from={p.c[0]} to={p.c[1]} glyph={p.g} h={96} r={0} />
                <button onClick={() => setFav(f => ({ ...f, [i]: !f[i] }))} style={{ position: 'absolute', top: 8, right: 8, width: 28, height: 28, borderRadius: 99, background: 'rgba(255,255,255,.92)', display: 'grid', placeItems: 'center' }}>
                  <Icon name="heart" size={15} stroke={fav[i] ? '#ec3a8e' : '#a99fc0'} fill={fav[i] ? '#ec3a8e' : 'none'} />
                </button>
                {p.o && <span style={{ position: 'absolute', top: 8, left: 8, background: '#ec3a8e', color: '#fff', fontSize: 9, fontWeight: 800, padding: '3px 7px', borderRadius: 99 }}>İNDİRİM</span>}
              </div>
              <div style={{ padding: '9px 11px 12px' }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: '#15101f' }}>{p.n}</div>
                <div style={{ fontSize: 10, color: '#ff9500', margin: '3px 0' }}>★ 4.{6 + i}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                  <b style={{ fontFamily: 'var(--display)', fontSize: 14, color: '#6d3bf5' }}>{p.p}</b>
                  {p.o && <s style={{ fontSize: 10, color: '#bbb' }}>{p.o}</s>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 8 }} />
      </div>
      <TabBar accent="#6d3bf5" active={tab} onChange={setTab} items={[{ icon: 'home', label: 'Ana Sayfa' }, { icon: 'grid', label: 'Kategori' }, { icon: 'heart', label: 'Favori' }, { icon: 'user', label: 'Hesap' }]} />
    </div>
  );
}

/* ============== 6 · SOSYAL MEDYA ============== */
function SocialApp() {
  const [tab, setTab] = useState(0);
  const [liked, setLiked] = useState({ 0: true });
  const stories = [['Sen', '#6d3bf5', 1], ['ayşe', '#ec3a8e'], ['can_d', '#ff7a3c'], ['zeynep', '#0bbf9e'], ['mert', '#2b7cff']];
  const posts = [
    { u: 'ayse.travels', t: 'Kapadokya gün doğumu 🎈', g: '🌄', c: ['#ff7a3c', '#ec3a8e'], likes: '2.418', av: '#ec3a8e' },
    { u: 'mert.codes', t: 'Yeni proje yayında! 🚀', g: '💻', c: ['#6d3bf5', '#2b7cff'], likes: '932', av: '#6d3bf5' },
  ];
  return (
    <div style={{ ...wrapStyle, background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 16px 10px' }}>
        <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 19, background: 'linear-gradient(120deg,#6d3bf5,#ec3a8e)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Pulse</span>
        <div style={{ display: 'flex', gap: 16 }}><Icon name="heart" size={21} stroke="#15101f" /><Icon name="chat" size={21} stroke="#15101f" /></div>
      </div>
      <div style={scrollStyle}>
        <div style={{ display: 'flex', gap: 13, padding: '4px 16px 12px', overflowX: 'auto', borderBottom: '1px solid #f0ecf6' }}>
          {stories.map(([n, c, me], i) => (
            <div key={i} style={{ flexShrink: 0, textAlign: 'center', width: 56 }}>
              <div style={{ width: 56, height: 56, borderRadius: 99, padding: 2.5, background: me ? '#eee' : 'linear-gradient(135deg,#ffb020,#ec3a8e,#6d3bf5)' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: 99, background: c, border: '2px solid #fff', display: 'grid', placeItems: 'center', color: '#fff', fontFamily: 'var(--display)', fontWeight: 800, fontSize: 17, position: 'relative' }}>
                  {n[0].toUpperCase()}
                  {me ? <span style={{ position: 'absolute', bottom: -2, right: -2, width: 18, height: 18, borderRadius: 99, background: '#6d3bf5', color: '#fff', fontSize: 13, display: 'grid', placeItems: 'center', border: '2px solid #fff' }}>+</span> : null}
                </div>
              </div>
              <div style={{ fontSize: 9.5, color: '#6b6480', marginTop: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n}</div>
            </div>
          ))}
        </div>
        {posts.map((p, i) => (
          <div key={i} style={{ paddingBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '11px 16px 9px' }}>
              <div style={{ width: 34, height: 34, borderRadius: 99, background: p.av, display: 'grid', placeItems: 'center', color: '#fff', fontFamily: 'var(--display)', fontWeight: 800, fontSize: 13 }}>{p.u[0].toUpperCase()}</div>
              <div style={{ flex: 1, fontFamily: 'var(--display)', fontWeight: 700, fontSize: 12.5 }}>{p.u}</div>
              <span style={{ color: '#b7b1c4', fontWeight: 800, letterSpacing: 1 }}>···</span>
            </div>
            <Thumb from={p.c[0]} to={p.c[1]} glyph={p.g} h={210} r={0} />
            <div style={{ display: 'flex', gap: 16, padding: '11px 16px 6px', alignItems: 'center' }}>
              <button onClick={() => setLiked(l => ({ ...l, [i]: !l[i] }))}><Icon name="heart" size={23} stroke={liked[i] ? '#ec3a8e' : '#15101f'} fill={liked[i] ? '#ec3a8e' : 'none'} /></button>
              <Icon name="chat" size={22} stroke="#15101f" />
              <Icon name="nav2" size={21} stroke="#15101f" />
            </div>
            <div style={{ padding: '0 16px' }}>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 12.5 }}>{liked[i] ? Number(p.likes.replace('.', '')) + 1 : p.likes} beğeni</div>
              <div style={{ fontSize: 12.5, marginTop: 3 }}><b style={{ fontFamily: 'var(--display)' }}>{p.u}</b> <span style={{ color: '#3a3348' }}>{p.t}</span></div>
            </div>
          </div>
        ))}
      </div>
      <TabBar accent="#15101f" active={tab} onChange={setTab} items={[{ icon: 'home', label: 'Akış' }, { icon: 'search', label: 'Keşfet' }, { icon: 'plus', label: 'Paylaş' }, { icon: 'user', label: 'Profil' }]} />
    </div>
  );
}

Object.assign(window, { MapApp, ShopApp, SocialApp });
// screens3.jsx — Eğitim · Fitness & Sağlık · Müzik/Streaming
const { useState } = React;

/* ============== 7 · EĞİTİM ============== */
function EduApp() {
  const [tab, setTab] = useState(0);
  const courses = [
    { n: 'Mobil UI Tasarımı', pr: 72, l: '18/25 ders', g: '🎨', c: ['#6d3bf5', '#a02bf0'] },
    { n: 'React Native', pr: 45, l: '9/20 ders', g: '⚛️', c: ['#2b7cff', '#0bbf9e'] },
    { n: 'Veri Bilimi 101', pr: 12, l: '3/24 ders', g: '📊', c: ['#ff7a3c', '#ffb020'] },
  ];
  return (
    <div style={{ ...wrapStyle, background: '#f6f4fb' }}>
      <div style={{ background: 'linear-gradient(135deg,#16a34a,#0d8f5e)', padding: '6px 18px 20px', color: '#fff', borderRadius: '0 0 24px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><div style={{ fontSize: 11, opacity: .85 }}>Günaydın 👋</div><div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 17 }}>Deniz Acar</div></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,.18)', padding: '6px 11px', borderRadius: 99, fontWeight: 800, fontSize: 13, fontFamily: 'var(--display)' }}>🔥 7</div>
        </div>
        <div style={{ marginTop: 14, background: 'rgba(255,255,255,.14)', borderRadius: 16, padding: '13px 15px', display: 'flex', alignItems: 'center', gap: 13 }}>
          <div style={{ position: 'relative', width: 46, height: 46 }}>
            <svg width="46" height="46" viewBox="0 0 46 46"><circle cx="23" cy="23" r="19" stroke="rgba(255,255,255,.25)" strokeWidth="5" fill="none" /><circle cx="23" cy="23" r="19" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="119" strokeDashoffset="36" transform="rotate(-90 23 23)" /></svg>
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontFamily: 'var(--display)', fontWeight: 800, fontSize: 12 }}>70%</div>
          </div>
          <div style={{ flex: 1 }}><div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13 }}>Günlük hedef</div><div style={{ fontSize: 11, opacity: .85 }}>35 / 50 dk tamamlandı</div></div>
        </div>
      </div>
      <div style={scrollStyle}>
        <div style={{ padding: '16px 18px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <b style={{ fontFamily: 'var(--display)', fontSize: 14 }}>Devam et</b><span style={{ fontSize: 11, color: '#16a34a', fontWeight: 700 }}>Tümü</span>
        </div>
        {courses.map((c, i) => (
          <div key={i} style={{ margin: '8px 16px', background: '#fff', borderRadius: 16, padding: 13, display: 'flex', gap: 12, alignItems: 'center', boxShadow: '0 4px 14px rgba(40,120,70,.06)' }}>
            <div style={{ width: 50, height: 50, borderRadius: 14, background: `linear-gradient(135deg,${c.c[0]},${c.c[1]})`, display: 'grid', placeItems: 'center', fontSize: 23, flexShrink: 0 }}>{c.g}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13 }}>{c.n}</div>
              <div style={{ fontSize: 10.5, color: '#8a9690', margin: '3px 0 6px' }}>{c.l}</div>
              <div style={{ height: 6, borderRadius: 99, background: '#eef0ee', overflow: 'hidden' }}><div style={{ width: `${c.pr}%`, height: '100%', borderRadius: 99, background: `linear-gradient(90deg,${c.c[0]},${c.c[1]})` }} /></div>
            </div>
            <div style={{ width: 34, height: 34, borderRadius: 11, background: '#eafaf0', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name="play" size={15} stroke="#16a34a" fill="#16a34a" /></div>
          </div>
        ))}
        <div style={{ margin: '12px 16px', borderRadius: 16, padding: '16px 18px', background: 'linear-gradient(120deg,#15101f,#3a2456)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: 10, color: '#c4b5ff', fontWeight: 700 }}>HAFTALIK QUIZ</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 15, marginTop: 3 }}>Bilgini test et</div>
          <div style={{ fontSize: 11, opacity: .75, marginTop: 2 }}>+150 puan kazan</div>
          <div style={{ position: 'absolute', right: 12, bottom: 8, fontSize: 40 }}>🧠</div>
        </div>
      </div>
      <TabBar accent="#16a34a" active={tab} onChange={setTab} items={[{ icon: 'home', label: 'Ana Sayfa' }, { icon: 'book', label: 'Derslerim' }, { icon: 'chart', label: 'İlerleme' }, { icon: 'user', label: 'Profil' }]} />
    </div>
  );
}

/* ============== 8 · FITNESS & SAĞLIK ============== */
function FitApp() {
  const [tab, setTab] = useState(0);
  const rings = [['Hareket', 78, '#ff2d72', '420', 'kcal'], ['Egzersiz', 60, '#a8ff2d', '38', 'dk'], ['Ayakta', 90, '#2ddfff', '11', 'sa']];
  return (
    <div style={{ ...wrapStyle, background: '#0a0a0f' }}>
      <div style={{ padding: '6px 18px 0', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 4 }}>
          <div><div style={{ fontSize: 11, color: '#7a7a8a' }}>Çarşamba, 4 Haz</div><div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18 }}>Özet</div></div>
          <div style={{ width: 34, height: 34, borderRadius: 99, background: 'linear-gradient(135deg,#ff2d72,#a8ff2d)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 13, color: '#0a0a0f' }}>BK</div>
        </div>
      </div>
      <div style={scrollStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 18px', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: 116, height: 116 }}>
            {rings.map(([, pct, col], i) => { const r = 52 - i * 15; const circ = 2 * Math.PI * r; return (
              <svg key={i} width="116" height="116" viewBox="0 0 116 116" style={{ position: 'absolute', inset: 0 }}>
                <circle cx="58" cy="58" r={r} stroke={col} strokeOpacity=".18" strokeWidth="11" fill="none" />
                <circle cx="58" cy="58" r={r} stroke={col} strokeWidth="11" fill="none" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - pct / 100)} transform="rotate(-90 58 58)" />
              </svg>
            ); })}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {rings.map(([l, , col, v, u], i) => (
              <div key={i}><div style={{ fontSize: 10.5, color: '#7a7a8a', fontWeight: 600 }}>{l}</div><div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 17, color: col }}>{v}<span style={{ fontSize: 10, color: '#7a7a8a', marginLeft: 3 }}>{u}</span></div></div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '4px 16px' }}>
          {[['Adım', '8.420', '👟', '#a8ff2d'], ['Nabız', '72 bpm', '❤️', '#ff2d72'], ['Uyku', '7s 20dk', '🌙', '#2ddfff'], ['Su', '1.4 L', '💧', '#2b7cff']].map(([l, v, e, c], i) => (
            <div key={i} style={{ background: '#15151d', borderRadius: 16, padding: '14px 15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 18 }}>{e}</span><span style={{ width: 8, height: 8, borderRadius: 99, background: c }} /></div>
              <div style={{ fontSize: 10.5, color: '#7a7a8a', marginTop: 10 }}>{l}</div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 17, color: '#fff' }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ margin: '12px 16px', borderRadius: 16, padding: '15px 17px', background: 'linear-gradient(120deg,#ff2d72,#ff7a3c)', color: '#fff', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1 }}><div style={{ fontSize: 10, opacity: .85, fontWeight: 700 }}>BUGÜNKÜ ANTRENMAN</div><div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 16, marginTop: 2 }}>HIIT · 24 dk</div></div>
          <button style={{ width: 44, height: 44, borderRadius: 99, background: '#fff', display: 'grid', placeItems: 'center' }}><Icon name="play" size={18} stroke="#ff2d72" fill="#ff2d72" /></button>
        </div>
      </div>
      <div style={{ background: '#15151d', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <TabBar accent="#a8ff2d" active={tab} onChange={setTab} items={[{ icon: 'activity', label: 'Özet' }, { icon: 'flame', label: 'Antrenman' }, { icon: 'heart', label: 'Sağlık' }, { icon: 'user', label: 'Profil' }]} />
      </div>
    </div>
  );
}

/* ============== 9 · MÜZİK / STREAMING ============== */
function MusicApp() {
  const [tab, setTab] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [prog, setProg] = useState(38);
  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setProg(p => (p >= 100 ? 0 : p + 0.6)), 350);
    return () => clearInterval(id);
  }, [playing]);
  return (
    <div style={{ ...wrapStyle, background: 'linear-gradient(180deg,#2a0a3a 0%,#0e0a18 55%)' }}>
      <div style={scrollStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 18px 4px', color: '#fff' }}>
          <div><div style={{ fontSize: 11, color: '#c9a8e0' }}>Senin için</div><div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18 }}>Şimdi Çalıyor</div></div>
          <Icon name="search" size={20} stroke="#fff" />
        </div>
        <div style={{ padding: '14px 24px 0' }}>
          <div style={{ width: '100%', aspectRatio: '1', borderRadius: 22, background: 'linear-gradient(135deg,#a21caf,#6d3bf5,#ec3a8e)', display: 'grid', placeItems: 'center', fontSize: 72, boxShadow: '0 22px 50px rgba(162,28,175,.5)' }}>🎧</div>
        </div>
        <div style={{ padding: '20px 24px 0', color: '#fff' }}>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 20 }}>Neon Nights</div>
          <div style={{ color: '#c9a8e0', fontSize: 13, marginTop: 2 }}>Aurora Waves · Midnight EP</div>
          <div style={{ marginTop: 18, height: 5, borderRadius: 99, background: 'rgba(255,255,255,.15)', overflow: 'hidden' }}>
            <div style={{ width: `${prog}%`, height: '100%', borderRadius: 99, background: 'linear-gradient(90deg,#ec3a8e,#a02bf0)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: '#c9a8e0', marginTop: 6 }}><span>{fmt(prog)}</span><span>-{fmt(100 - prog)}</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 16 }}>
            <span style={{ color: '#c9a8e0', fontSize: 19 }}>🔀</span>
            <span style={{ color: '#fff', fontSize: 26 }}>⏮</span>
            <button onClick={() => setPlaying(p => !p)} style={{ width: 60, height: 60, borderRadius: 99, background: '#fff', display: 'grid', placeItems: 'center', boxShadow: '0 10px 26px rgba(255,255,255,.25)' }}>
              {playing ? <span style={{ fontSize: 22, color: '#2a0a3a' }}>❚❚</span> : <Icon name="play" size={24} stroke="#2a0a3a" fill="#2a0a3a" />}
            </button>
            <span style={{ color: '#fff', fontSize: 26 }}>⏭</span>
            <span style={{ color: '#c9a8e0', fontSize: 19 }}>🔁</span>
          </div>
        </div>
        <div style={{ padding: '22px 18px 4px', color: '#fff' }}><b style={{ fontFamily: 'var(--display)', fontSize: 13 }}>Sıradaki</b></div>
        {[['Electric Dreams', 'Pulse', '🎹'], ['Sunset Drive', 'Lumen', '🌆']].map(([n, a, e], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 18px' }}>
            <div style={{ width: 42, height: 42, borderRadius: 11, background: 'linear-gradient(135deg,#6d3bf5,#ec3a8e)', display: 'grid', placeItems: 'center', fontSize: 18 }}>{e}</div>
            <div style={{ flex: 1 }}><div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 12.5, color: '#fff' }}>{n}</div><div style={{ fontSize: 10.5, color: '#c9a8e0' }}>{a}</div></div>
            <Icon name="heart" size={17} stroke="#c9a8e0" />
          </div>
        ))}
        <div style={{ height: 8 }} />
      </div>
      <div style={{ background: 'rgba(20,10,30,.85)', backdropFilter: 'blur(8px)' }}>
        <TabBar accent="#ec3a8e" active={tab} onChange={setTab} items={[{ icon: 'home', label: 'Ana Sayfa' }, { icon: 'compass', label: 'Keşfet' }, { icon: 'library', label: 'Kütüphane' }, { icon: 'user', label: 'Profil' }]} />
      </div>
    </div>
  );
}
function fmt(pct) { const tot = 214; const s = Math.round(tot * pct / 100); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }

Object.assign(window, { EduApp, FitApp, MusicApp });
// showcase.jsx — kaydırmalı uygulama vitrini
const CATEGORIES = [
  { key: 'yemek',    tag: 'Yemek & Teslimat',  accent: '#ff3c5e', screen: () => <FoodApp />,    statusBg: '#ff7c3e', tint: 'light', glow: 'rgba(255,90,60,.32)',  title: 'Yemek Sipariş',     desc: 'Canlı menü, akıllı sepet ve adım adım teslimat takibi.' },
  { key: 'fintech',  tag: 'Bankacılık & Fintech', accent: '#6d3bf5', screen: () => <FintechApp />, statusBg: '#0e0a18', tint: 'light', glow: 'rgba(109,59,245,.34)', title: 'Dijital Bankacılık', desc: 'Kart yönetimi, harcama analizi ve anlık para transferi.' },
  { key: 'rezervasyon', tag: 'Rezervasyon & Randevu', accent: '#07b6ac', screen: () => <BookingApp />, statusBg: '#0bbf9e', tint: 'light', glow: 'rgba(11,191,158,.32)', title: 'Randevu Sistemi',   desc: 'Takvim, uygun saat seçimi ve tek dokunuşla onay.' },
  { key: 'harita',   tag: 'Kurye & Araç Takip', accent: '#2b7cff', screen: () => <MapApp />,     statusBg: '#13243a', tint: 'light', glow: 'rgba(43,124,255,.34)', title: 'Canlı Konum Takibi', desc: 'Harita üzerinde gerçek zamanlı kurye ve rota takibi.' },
  { key: 'eticaret', tag: 'E-ticaret & Mağaza', accent: '#ec3a8e', screen: () => <ShopApp />,    statusBg: '#ffffff', tint: 'dark',  glow: 'rgba(236,58,142,.30)', title: 'E-ticaret Mağaza',  desc: 'Ürün vitrini, favoriler, sepet ve hızlı ödeme.' },
  { key: 'sosyal',   tag: 'Sosyal Medya',       accent: '#a02bf0', screen: () => <SocialApp />,  statusBg: '#ffffff', tint: 'dark',  glow: 'rgba(160,43,240,.30)', title: 'Sosyal Akış',       desc: 'Hikâyeler, gönderi akışı, beğeni ve etkileşim.' },
  { key: 'egitim',   tag: 'Eğitim & Online Kurs', accent: '#16a34a', screen: () => <EduApp />,   statusBg: '#16a34a', tint: 'light', glow: 'rgba(22,163,74,.30)',  title: 'Eğitim Platformu',  desc: 'Ders ilerlemesi, günlük hedef ve quiz oyunlaştırması.' },
  { key: 'fitness',  tag: 'Fitness & Sağlık',   accent: '#ff2d72', screen: () => <FitApp />,     statusBg: '#0a0a0f', tint: 'light', glow: 'rgba(255,45,114,.30)', title: 'Sağlık Takibi',     desc: 'Aktivite halkaları, antrenman ve sağlık metrikleri.' },
  { key: 'muzik',    tag: 'Müzik & Streaming',  accent: '#ec3a8e', screen: () => <MusicApp />,   statusBg: '#2a0a3a', tint: 'light', glow: 'rgba(162,28,175,.34)', title: 'Müzik Çalar',       desc: 'Çalan parça, dinamik ilerleme çubuğu ve sıradaki liste.' },
];

function Showcase() {
  const scRef = React.useRef(null);
  const [active, setActive] = React.useState(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);
  const drag = React.useRef({ down: false, startX: 0, startScroll: 0, moved: 0 });

  const updateActive = React.useCallback(() => {
    const sc = scRef.current; if (!sc) return;
    const center = sc.scrollLeft + sc.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    [...sc.children].forEach((ch, i) => {
      const c = ch.offsetLeft + ch.offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    setActive(best);
    setAtStart(sc.scrollLeft < 8);
    setAtEnd(sc.scrollLeft + sc.clientWidth > sc.scrollWidth - 8);
  }, []);

  React.useEffect(() => { updateActive(); }, [updateActive]);

  const jump = (i) => {
    const sc = scRef.current; if (!sc) return;
    const ch = sc.children[i]; if (!ch) return;
    sc.scrollTo({ left: ch.offsetLeft - (sc.clientWidth - ch.offsetWidth) / 2, behavior: 'smooth' });
  };
  const step = (dir) => {
    const sc = scRef.current; if (!sc) return;
    const w = sc.children[0].offsetWidth + 30;
    sc.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  // drag to scroll
  const onDown = (e) => { const sc = scRef.current; drag.current = { down: true, startX: e.pageX, startScroll: sc.scrollLeft, moved: 0 }; sc.classList.add('dragging'); };
  const onMove = (e) => { const d = drag.current; if (!d.down) return; const dx = e.pageX - d.startX; d.moved = Math.abs(dx); scRef.current.scrollLeft = d.startScroll - dx; };
  const onUp = () => { const sc = scRef.current; if (sc) sc.classList.remove('dragging'); drag.current.down = false; };

  return (
    <section className="section showcase" id="cozumler">
      <div className="wrap">
        <div className="show-head reveal">
          <div>
            <span className="eyebrow">Mobil Uygulama Çözümleri</span>
            <h2 className="h-sec" style={{ marginTop: 16 }}>Her sektöre özel,<br />gerçek çalışan deneyimler</h2>
          </div>
          <p className="lead">Aşağıdaki ekranlar tasarım sistemimizle üretilmiş gerçek arayüzlerdir. Kaydır, dokun, keşfet — markanın uygulamasını birlikte hayal edelim.</p>
        </div>

        <div className="chips reveal">
          {CATEGORIES.map((c, i) => (
            <button key={c.key} className={'chip' + (active === i ? ' active' : '')} onClick={() => jump(i)}>
              <span className="dot" style={{ background: c.accent }} />{c.tag}
            </button>
          ))}
        </div>
      </div>

      <div className="scroller-wrap">
        <div className="wrap" style={{ overflow: 'visible' }}>
          <div className="scroller" ref={scRef} onScroll={updateActive}
            onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}>
            {CATEGORIES.map((c, i) => (
              <div className="show-card" key={c.key}>
                <PhoneFrame width={290} statusBg={c.statusBg} statusTint={c.tint} glow={c.glow}>
                  {c.screen()}
                </PhoneFrame>
                <div className="meta">
                  <span className="tag" style={{ background: c.accent + '1a', color: c.accent }}><span style={{ width: 7, height: 7, borderRadius: 99, background: c.accent }} />{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="show-foot">
          <div className="show-hint">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M5 12l4-4M5 12l4 4M19 12l-4-4M19 12l-4 4" opacity=".5"/></svg>
            Sürükleyerek veya oklarla {CATEGORIES.length} farklı uygulama tipini keşfet
          </div>
          <div className="scroll-nav">
            <button className="snav" onClick={() => step(-1)} disabled={atStart} aria-label="Önceki"><Icon name="arrowLeft" size={20} stroke="currentColor" /></button>
            <button className="snav" onClick={() => step(1)} disabled={atEnd} aria-label="Sonraki"><span style={{ transform: 'rotate(180deg)', display: 'grid' }}><Icon name="arrowLeft" size={20} stroke="currentColor" /></span></button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Showcase = Showcase;
window.CATEGORIES = CATEGORIES;
// sections.jsx — Nav, Hero, Stats, Services, Tech, Testimonials, FAQ, Contact, Footer

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', on); return () => window.removeEventListener('scroll', on);
  }, []);
  const links = [['Çözümler', '#cozumler'], ['Hizmetler', '#hizmetler'], ['Yorumlar', '#yorumlar'], ['SSS', '#sss']];
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap nav-in">
        <a href="#top" className="logo"><span className="logo-mark"><span>M</span></span>Mobil Uygulama Ajansı</a>
        <div className="nav-links">{links.map(([t, h]) => <a key={h} href={h}>{t}</a>)}</div>
        <div className="nav-cta">
          <a href="#iletisim" className="btn btn-ghost" style={{ padding: '11px 20px' }}>İletişim</a>
          <a href="#teklif" className="btn btn-primary" style={{ padding: '12px 22px' }}>Ücretsiz Teklif</a>
          <button className="burger" aria-label="Menü" onClick={() => { document.querySelector('#cozumler').scrollIntoView(); }}><span></span><span></span><span></span></button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-blob a"></div>
      <div className="hero-blob b"></div>
      <div className="hero-grid">
        <div className="reveal in">
          <div className="hero-pill"><b>YENİ</b> Yapay zeka destekli mobil çözümler</div>
          <h1>Fikrini <span className="grad">cebe sığdıran</span> mobil uygulamalar</h1>
          <p className="lead">Mobil Uygulama Ajansı; yemek siparişinden fintech'e, kurye takibinden e-ticarete kadar her sektöre özel iOS &amp; Android uygulamaları tasarlar ve geliştirir. Fikrini anlat, gerisini biz halledelim.</p>
          <div className="hero-actions">
            <a href="#teklif" className="btn btn-primary">Ücretsiz Teklif Al
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#cozumler" className="btn btn-ghost">Çözümleri Gör</a>
          </div>
          <div className="hero-trust">
            <div className="avatars">
              {[['#6d3bf5', 'A'], ['#ec3a8e', 'B'], ['#ff7a3c', 'C'], ['#0bbf9e', 'D']].map(([c, l], i) => <span key={i} style={{ background: c }}>{l}</span>)}
            </div>
            <div><span className="stars">★★★★★</span><div style={{ marginTop: 2 }}><b style={{ color: 'var(--ink)' }}>120+</b> projeyi hayata geçirdik</div></div>
          </div>
        </div>

        <div className="hero-stage reveal in">
          <div className="hero-phone back"><PhoneFrame width={232} statusBg="#0e0a18" statusTint="light" glow="rgba(109,59,245,.3)"><FintechApp /></PhoneFrame></div>
          <div className="hero-phone front"><PhoneFrame width={250} statusBg="#ff7c3e" statusTint="light" glow="rgba(255,90,60,.32)"><FoodApp /></PhoneFrame></div>
          <div className="hero-spark s1"><div className="ico" style={{ background: 'linear-gradient(135deg,#0bbf9e,#07a6c9)' }}>★</div><div><b>4.9 Puan</b><small>App Store</small></div></div>
          <div className="hero-spark s2"><div className="ico" style={{ background: 'var(--grad-hero)' }}>↑</div><div><b>+212%</b><small>Kullanıcı artışı</small></div></div>
        </div>
      </div>
    </header>
  );
}

function Stats() {
  const items = [['120+', 'Tamamlanan proje'], ['4.8★', 'Ortalama uygulama puanı'], ['8 hafta', 'Ortalama teslim süresi'], ['%98', 'Müşteri memnuniyeti']];
  return (
    <div className="wrap"><div className="stats reveal"><div className="wrap stats-grid">
      {items.map(([n, l], i) => <div className="stat" key={i}><div className="num">{n}</div><div className="lbl">{l}</div></div>)}
    </div></div></div>
  );
}

function Services() {
  const svc = [
    { ic: 'grid', c: ['#6d3bf5', '#a02bf0'], t: 'Native & Cross-Platform', d: 'iOS, Android, React Native ve Flutter ile tek kod tabanından yüksek performanslı uygulamalar.' },
    { ic: 'heart', c: ['#ec3a8e', '#ff6b8a'], t: 'UI/UX Tasarım', d: 'Kullanıcıyı merkeze alan, marka diline uygun, akıcı ve modern arayüz tasarımları.' },
    { ic: 'chart', c: ['#ff7a3c', '#ffb020'], t: 'Yapay Zeka Entegrasyonu', d: 'Öneri motorları, sohbet botları ve akıllı otomasyonla iş süreçlerinizi hızlandırın.' },
    { ic: 'card', c: ['#0bbf9e', '#07a6c9'], t: 'Backend & API', d: 'Ölçeklenebilir altyapı, güvenli API mimarisi, ödeme ve bildirim entegrasyonları.' },
    { ic: 'activity', c: ['#2b7cff', '#1a5fd0'], t: 'Bakım & Destek', d: 'Yayın sonrası sürekli izleme, performans iyileştirme ve 7/24 teknik destek.' },
    { ic: 'compass', c: ['#16a34a', '#0d8f5e'], t: 'Yayınlama & ASO', d: 'App Store ve Google Play yayını, mağaza optimizasyonu ve büyüme stratejisi.' },
  ];
  return (
    <section className="section" id="hizmetler">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Hizmetlerimiz</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Uçtan uca mobil geliştirme</h2>
          <p className="lead" style={{ margin: '16px auto 0' }}>Fikir aşamasından mağaza yayınına kadar tüm süreci tek çatı altında yönetiyoruz.</p>
        </div>
        <div className="svc-grid">
          {svc.map((s, i) => (
            <div className="svc reveal" key={i} style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <div className="arc" style={{ background: `linear-gradient(135deg,${s.c[0]},${s.c[1]})` }}></div>
              <div className="ico" style={{ background: `linear-gradient(135deg,${s.c[0]},${s.c[1]})` }}><Icon name={s.ic} size={26} stroke="#fff" /></div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tech() {
  const tags = ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Node.js', 'TypeScript', 'Firebase', 'Figma', 'GraphQL', 'AWS', 'PostgreSQL', 'TensorFlow', 'Stripe', 'Kubernetes'];
  const row = [...tags, ...tags];
  return (
    <section className="section tech">
      <div className="wrap reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
        <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Teknolojiler</span>
        <h2 className="h-sec" style={{ marginTop: 16 }}>Modern ve kanıtlanmış teknoloji yığını</h2>
        <p className="lead" style={{ margin: '16px auto 0' }}>Projenin ihtiyacına göre doğru aracı seçer, geleceğe dayanıklı sistemler kurarız.</p>
      </div>
      <div className="marquee-mask"><div className="marquee">
        {row.map((t, i) => <div className="tech-tag" key={i}><TechLogo name={t} size={32} />{t}</div>)}
      </div></div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { q: 'Gayrimenkul sektörüne özel e-ticaret yazılımlarımızı Blue Ember ekibiyle birlikte geliştirdik. Ekibimizi eğittikleri için tam bir dijital dönüşüm yaşadık.', n: 'Özkan Koç', r: '', c: '#0a90b8', stars: 5 },
    { q: 'Kompleks veri çekme sistemi gerektiren projemi onlar dışında kimse yapamadı. Onlarca firmayla görüştüm ama sadece Blue Ember ekibi hem yapay zekâ hem web hem de mobil kısmı inanılmaz kısa sürede ve eksiksiz tamamladı.', n: 'İlan Ediyor', r: '', c: '#6d3bf5', stars: 5 },
    { q: 'Projemizde karmaşık süreçleri sadeleştirip, otomasyon sistemimizi sıfırdan kurdular. Teknik bilgi kadar iletişim tarafında da çok güçlü bir ekip. Sürecin her aşamasında bize rehberlik ettiler.', n: 'Tutar Teknoloji', r: '', c: '#2b7cff', stars: 5 },
    { q: 'Blue Ember, sağlık sektörüne özel geliştirdiğimiz projemizde tüm modülleri eksiksiz ve entegre biçimde hayata geçirdi. Hem kullanıcı deneyimi hem de teknik mimari açısından beklentimizin çok üzerinde bir proje oldu.', n: 'Sağlık Rehberim', r: '', c: '#1f9d6b', stars: 5 },
    { q: 'Blue Ember ile yürüttüğümüz projelerde mükemmel bir uyum yakaladık. Ekip son derece disiplinli, hızlı ve güvenilir şekilde çalışıyor.', n: 'Emir Kaan Kaya', r: '', c: '#ef8b34', stars: 5 },
  ];
  return (
    <section className="section" id="yorumlar" style={{ background: 'linear-gradient(180deg,#f7f5ff,#f1ecff)' }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Müşteri Yorumları</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Markalar bize güveniyor</h2>
        </div>
        <div className="tst-grid">
          {t.map((x, i) => (
            <div className="tst reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="qm">“</div>
              <div className="stars" style={{ color: 'var(--amber)' }}>{'★'.repeat(x.stars)}</div>
              <p>{x.q}</p>
              <div className="who">
                <div className="av" style={{ background: x.c }}>{x.n.split(' ').map(w => w[0]).join('')}</div>
                <div><b>{x.n}</b>{x.r ? <small>{x.r}</small> : null}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, color, open, onClick }) {
  return (
    <div className={'faq-item' + (open ? ' open' : '')} style={{ borderLeft: `4px solid ${open ? color : 'transparent'}` }}>
      <button className="faq-q" onClick={onClick}>
        <span>{q}</span>
        <span className="pm" style={open ? { background: color, color: '#fff' } : { color }}>+</span>
      </button>
      <div className="faq-a">
        <p>{a}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const palette = ['#6d3bf5', '#ec3a8e', '#ff7a3c', '#0bbf9e', '#2b7cff', '#a02bf0', '#ff2d72', '#16a34a', '#ffb020', '#07a6c9'];
  const faqs = [
    ['Bir uygulama geliştirmek ne kadar sürer?', 'Projenin kapsamına göre değişmekle birlikte ortalama 6-10 hafta arasında ilk sürümü yayına alıyoruz. Sade bir MVP 4 haftada teslim edilebilir.'],
    ['Maliyetler nasıl belirleniyor?', 'Özellik listesi, platform sayısı (iOS/Android/Web) ve tasarım kapsamına göre net bir teklif sunuyoruz. Yukarıdaki formu doldurmanız ilk fiyat aralığını çıkarmamız için yeterli.'],
    ['Hem iOS hem Android için ayrı mı geliştiriyorsunuz?', 'İhtiyaca göre native ya da React Native / Flutter ile tek kod tabanından her iki platforma da geliştirme yapıyoruz. Bu, hem maliyeti hem süreyi ciddi şekilde düşürür.'],
    ['Tasarımı da siz mi yapıyorsunuz?', 'Evet. UI/UX tasarımı sürecin ayrılmaz bir parçası. Marka kimliğinize uygun, kullanıcı testlerinden geçmiş, modern arayüzler tasarlıyoruz.'],
    ['Yayın sonrası destek veriyor musunuz?', 'Kesinlikle. Tüm projelerde yayın sonrası bakım, güncelleme, hata takibi ve teknik destek paketleri sunuyoruz.'],
    ['Mevcut uygulamamı geliştirebilir misiniz?', 'Evet, mevcut kod tabanınızı inceleyip iyileştirme, yeniden tasarım veya yeni özellik ekleme projeleri alıyoruz.'],
    ['Uygulama hangi dilleri destekleyecek?', 'Çok dilli (Türkçe, İngilizce, Arapça ve daha fazlası) altyapıyı baştan kuruyoruz. İstediğiniz dilleri formda belirtmeniz yeterli.'],
    ['Fikrim henüz net değil, yine de başvurabilir miyim?', 'Tabii ki. Ücretsiz keşif görüşmesinde fikrinizi birlikte netleştirir, kapsam ve yol haritasını çıkarırız.'],
    ['Ödeme planı nasıl işliyor?', 'Genellikle proje başlangıcı, ara teslim ve yayın olmak üzere aşamalı ödeme yapısıyla çalışıyoruz. Esnek planlar için bizimle konuşabilirsiniz.'],
    ['App Store ve Google Play yayınını siz mi yapıyorsunuz?', 'Evet. Geliştirici hesabı kurulumundan mağaza optimizasyonuna (ASO) kadar tüm yayın sürecini sizin adınıza yönetiyoruz.'],
    ['Uygulamaya ödeme alma özelliği ekleyebilir misiniz?', 'Evet. Stripe, iyzico ve yerel bankalarla güvenli ödeme entegrasyonları, abonelik ve sanal cüzdan sistemleri kuruyoruz.'],
    ['Yapay zeka özellikleri ekleyebilir miyiz?', 'Öneri motorları, sohbet botları, görsel tanıma ve akıllı otomasyon gibi yapay zeka özelliklerini uygulamanıza entegre edebiliriz.'],
    ['Verilerimizin güvenliği nasıl sağlanıyor?', 'KVKK ve GDPR uyumlu mimari, şifreli veri saklama ve güvenli API tasarımı standart yaklaşımımızdır.'],
    ['Tasarım sürecine biz de dahil oluyor muyuz?', 'Kesinlikle. Her aşamada interaktif prototipler paylaşır, geri bildirimlerinizle birlikte ilerleriz. Süreç tamamen şeffaftır.'],
    ['Kaynak kodu bize ait olacak mı?', 'Evet. Proje teslimi sonrası tüm kaynak kod ve fikri mülkiyet hakları tamamen size aittir.'],
    ['Bakım paketleri neleri kapsıyor?', 'İşletim sistemi güncellemeleri, performans iyileştirmeleri, hata düzeltmeleri, küçük özellik eklemeleri ve düzenli yedeklemeyi kapsar.'],
    ['Uygulamaya bildirim gönderebilir miyiz?', 'Evet. Anlık push bildirim altyapısı ve kampanya yönetimi panelini standart olarak ekliyoruz.'],
    ['Web sitesi veya yönetim paneli de yapıyor musunuz?', 'Evet. Uygulamanızı besleyen yönetim panelleri, web sürümleri ve API altyapısını uçtan uca geliştiriyoruz.'],
    ['Proje sürecinde iletişim nasıl olacak?', 'Size özel bir proje yöneticisi atanır; haftalık görüşmeler ve ortak bir görev panosu üzerinden sürekli iletişimde kalırız.'],
    ['Nasıl başlıyoruz?', 'Yukarıdaki formu doldurun; 24 saat içinde sizinle iletişime geçip ücretsiz keşif görüşmesi planlayalım.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="sss">
      <div className="wrap faq-grid">
        <div className="reveal">
          <span className="eyebrow">SSS</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Sıkça sorulan sorular</h2>
          <p className="lead" style={{ marginTop: 16 }}>Merak ettiğin 20 soruyu yanıtladık. Aradığını bulamadın mı? Formu doldur, 24 saat içinde dönüş yapalım.</p>
          <a href="#teklif" className="btn btn-dark" style={{ marginTop: 24 }}>Soru Sor</a>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <FaqItem key={i} q={q} a={a} color={palette[i % palette.length]} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const cc = [
    { ic: 'chat', c: ['#6d3bf5', '#a02bf0'], s: 'E-POSTA', b: 'merhaba@mobiluygulamaajansi.com', p: '24 saat içinde dönüş' },
    { ic: 'bell', c: ['#ec3a8e', '#ff6b8a'], s: 'TELEFON', b: '+90 212 000 00 00', p: 'Hafta içi 09:00 - 18:00' },
    { ic: 'pin', c: ['#0bbf9e', '#07a6c9'], s: 'OFİS', b: 'Maslak, İstanbul', p: 'Randevu ile ziyaret' },
  ];
  return (
    <section className="section" id="iletisim">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>İletişim</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Bize ulaş</h2>
        </div>
        <div className="contact-grid">
          {cc.map((x, i) => (
            <div className="ccard reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="ico" style={{ background: `linear-gradient(135deg,${x.c[0]},${x.c[1]})` }}><Icon name={x.ic} size={24} stroke="#fff" /></div>
              <small>{x.s}</small><b>{x.b}</b><p>{x.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ['Çözümler', ['Yemek Sipariş', 'Fintech', 'E-ticaret', 'Kurye Takip']],
    ['Şirket', ['Hizmetler', 'Yorumlar', 'SSS', 'İletişim']],
    ['Kaynaklar', ['Blog', 'Vaka Çalışmaları', 'Kariyer', 'Gizlilik']],
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div style={{ maxWidth: 280 }}>
            <a href="#top" className="logo"><span className="logo-mark"><span>M</span></span>Mobil Uygulama Ajansı</a>
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 15, marginTop: 16 }}>Fikrini cebe sığdırıyoruz. Mobil uygulama tasarım &amp; geliştirme ajansı.</p>
          </div>
          <div className="footer-cols">
            {cols.map(([h, links], i) => (
              <div className="footer-col" key={i}><h5>{h}</h5>{links.map(l => <a key={l} href="#teklif">{l}</a>)}</div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mobil Uygulama Ajansı. Tüm hakları saklıdır.</span>
          <div className="foot-social">
            {['in', 'X', 'IG', 'be'].map(s => <a key={s} href="#top" style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 12, color: '#fff' }}>{s}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Stats, Services, Tech, Testimonials, FAQ, Contact, Footer });
// form.jsx — çok adımlı proje talep formu
function RequestForm() {
  const cats = (window.CATEGORIES || []).map(c => c.title);
  const allCats = [...cats, 'Diğer / Özel'];
  const budgets = ['Danışmak istiyorum', '₺100K – 250K', '₺250K – 500K', '₺500K +'];
  const platforms = [['iOS', '🍎'], ['Android', '🤖'], ['Web', '🌐']];
  const langs = ['Türkçe', 'İngilizce', 'Arapça', 'Almanca', 'Rusça'];

  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [f, setF] = React.useState({ cat: '', platform: [], lang: ['Türkçe'], budget: '', desc: '', name: '', phone: '', email: '' });
  const [errs, setErrs] = React.useState({});

  const set = (k, v) => setF(s => ({ ...s, [k]: v }));
  const toggle = (k, v) => setF(s => ({ ...s, [k]: s[k].includes(v) ? s[k].filter(x => x !== v) : [...s[k], v] }));

  const validate = (s) => {
    const e = {};
    if (s === 0) { if (!f.cat) e.cat = 1; if (!f.platform.length) e.platform = 1; }
    if (s === 1) { if (!f.budget) e.budget = 1; if (f.desc.trim().length < 12) e.desc = 1; }
    if (s === 2) {
      if (f.name.trim().length < 2) e.name = 1;
      if (!/^[0-9+()\s-]{7,}$/.test(f.phone)) e.phone = 1;
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = 1;
    }
    setErrs(e); return Object.keys(e).length === 0;
  };
  const next = () => { if (validate(step)) setStep(s => s + 1); };
  const back = () => setStep(s => s - 1);
  const submit = () => { if (validate(2)) setDone(true); };

  const Opt = ({ on, onClick, children, check }) => (
    <button type="button" className={'opt' + (on ? ' sel' : '')} onClick={onClick}>
      {children}
      {check && <span className="check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg></span>}
    </button>
  );

  return (
    <section className="section form-sec" id="teklif">
      <div className="blob a"></div><div className="blob b"></div>
      <div className="wrap form-grid">
        <div className="form-side reveal">
          <span className="eyebrow on-dark">Ücretsiz Teklif</span>
          <h2 style={{ marginTop: 16, color: '#fff' }}>Projeni anlat,<br />24 saatte dönelim</h2>
          <p className="lead">Birkaç soruyu yanıtla; ihtiyacına özel fiyat aralığını ve yol haritasını çıkaralım. Bağlayıcı değil, tamamen ücretsiz.</p>
          <div className="form-bullets">
            {[['✓', 'Ücretsiz & bağlayıcı değil', 'Hiçbir taahhüt olmadan teklif al'], ['⚡', '24 saat içinde dönüş', 'Uzman ekibimiz hızlıca değerlendirir'], ['₺', 'Net fiyat aralığı', 'Şeffaf, sürpriz maliyet yok']].map(([e, t, d], i) => (
              <div className="form-bullet" key={i}><div className="b-ico" style={{ fontSize: 18 }}>{e}</div><div><b>{t}</b><small>{d}</small></div></div>
            ))}
          </div>
        </div>

        <div className="form-card reveal">
          {done ? (
            <div className="form-success">
              <div className="ok"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg></div>
              <h3>Talebin alındı! 🎉</h3>
              <p>Teşekkürler {f.name.split(' ')[0]}. Ekibimiz <b style={{ color: 'var(--ink)' }}>24 saat içinde</b> {f.email} adresinden sana dönecek.</p>
              <div className="summary">
                <div className="row"><span>Uygulama tipi</span><b>{f.cat}</b></div>
                <div className="row"><span>Platform</span><b>{f.platform.join(', ')}</b></div>
                <div className="row"><span>Diller</span><b>{f.lang.join(', ')}</b></div>
                <div className="row"><span>Bütçe</span><b>{f.budget}</b></div>
              </div>
              <button className="btn btn-ghost" onClick={() => { setDone(false); setStep(0); setF({ cat: '', platform: [], lang: ['Türkçe'], budget: '', desc: '', name: '', phone: '', email: '' }); }}>Yeni talep oluştur</button>
            </div>
          ) : (
            <React.Fragment>
              <div className="steps">{[0, 1, 2].map(i => <div key={i} className={'step-dot' + (i <= step ? ' on' : '')} />)}</div>

              {step === 0 && (
                <div>
                  <h3 style={{ fontSize: 22, marginBottom: 18 }}>Ne tür bir uygulama?</h3>
                  <div className={'fld' + (errs.cat ? ' invalid' : '')}>
                    <label>Uygulama kategorisi <span className="req">*</span></label>
                    <select className={errs.cat ? 'err' : ''} value={f.cat} onChange={e => set('cat', e.target.value)}>
                      <option value="">Seçiniz...</option>
                      {allCats.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <div className="hint">Lütfen bir kategori seç.</div>
                  </div>
                  <div className={'fld' + (errs.platform ? ' invalid' : '')}>
                    <label>Platform <span className="req">*</span> <span style={{ fontWeight: 500, color: 'var(--muted)' }}>(birden çok seçebilirsin)</span></label>
                    <div className="opt-grid three">
                      {platforms.map(([p, e]) => <Opt key={p} on={f.platform.includes(p)} onClick={() => toggle('platform', p)}><span className="em">{e}</span>{p}</Opt>)}
                    </div>
                    <div className="hint">En az bir platform seç.</div>
                  </div>
                  <div className="fld">
                    <label>Uygulama dili / dilleri</label>
                    <div className="opt-grid three">
                      {langs.map(l => <Opt key={l} on={f.lang.includes(l)} onClick={() => toggle('lang', l)}>{l}</Opt>)}
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 style={{ fontSize: 22, marginBottom: 18 }}>Bütçe & detaylar</h3>
                  <div className={'fld' + (errs.budget ? ' invalid' : '')}>
                    <label>Tahmini bütçe aralığı <span className="req">*</span></label>
                    <div className="opt-grid">
                      {budgets.map(b => <Opt key={b} on={f.budget === b} onClick={() => set('budget', b)}>{b}</Opt>)}
                    </div>
                    <div className="hint">Bir bütçe aralığı seç.</div>
                  </div>
                  <div className={'fld' + (errs.desc ? ' invalid' : '')}>
                    <label>Proje açıklaması <span className="req">*</span></label>
                    <textarea className={errs.desc ? 'err' : ''} value={f.desc} onChange={e => set('desc', e.target.value)} placeholder="Uygulamanın ne yapmasını istiyorsun? Hedef kitlen kim? Öne çıkan özellikler neler?"></textarea>
                    <div className="hint">Lütfen en az birkaç cümle yaz.</div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 style={{ fontSize: 22, marginBottom: 18 }}>Sana nasıl ulaşalım?</h3>
                  <div className={'fld' + (errs.name ? ' invalid' : '')}>
                    <label>Ad soyad <span className="req">*</span></label>
                    <input className={errs.name ? 'err' : ''} value={f.name} onChange={e => set('name', e.target.value)} placeholder="Adın ve soyadın" />
                    <div className="hint">Lütfen adını gir.</div>
                  </div>
                  <div className={'fld' + (errs.phone ? ' invalid' : '')}>
                    <label>Telefon <span className="req">*</span></label>
                    <input className={errs.phone ? 'err' : ''} value={f.phone} onChange={e => set('phone', e.target.value)} placeholder="+90 5__ ___ __ __" inputMode="tel" />
                    <div className="hint">Geçerli bir telefon numarası gir.</div>
                  </div>
                  <div className={'fld' + (errs.email ? ' invalid' : '')}>
                    <label>E-posta <span className="req">*</span></label>
                    <input className={errs.email ? 'err' : ''} value={f.email} onChange={e => set('email', e.target.value)} placeholder="ornek@email.com" inputMode="email" />
                    <div className="hint">Geçerli bir e-posta gir.</div>
                  </div>
                </div>
              )}

              <div className="form-actions">
                {step > 0 ? <button className="btn btn-ghost" onClick={back} style={{ padding: '13px 22px' }}>Geri</button> : <span />}
                {step < 2
                  ? <button className="btn btn-primary" onClick={next}>Devam et
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
                  : <button className="btn btn-primary" onClick={submit}>Talebi Gönder
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg></button>}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
}
window.RequestForm = RequestForm;
// app.jsx — kök bileşen
function App() {
  return (
    <React.Fragment>
      <Hero />
      <Stats />
      <Showcase />
      <Services />
      <Tech />
      <Testimonials />
      <FAQ />
      <RequestForm />
      <Contact />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
