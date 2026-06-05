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
