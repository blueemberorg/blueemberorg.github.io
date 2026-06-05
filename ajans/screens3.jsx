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
