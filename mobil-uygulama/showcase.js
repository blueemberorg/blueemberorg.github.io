// showcase.jsx — kaydırmalı uygulama vitrini
const CATEGORIES = [{
  key: 'taksi',
  tag: 'Taksi & Transfer',
  accent: '#ff7a00',
  screen: () => /*#__PURE__*/React.createElement(TaxiApp, null),
  statusBg: '#ffffff',
  tint: 'dark',
  glow: 'rgba(255,122,0,.28)',
  title: 'Taksi Uygulaması',
  desc: 'Uber gibi: araç seçimi, canlı sürücü takibi, transfer ve ödeme.'
}, {
  key: 'emlak',
  tag: 'Emlak & İlan',
  accent: '#16a34a',
  screen: () => /*#__PURE__*/React.createElement(EmlakApp, null),
  statusBg: '#ffffff',
  tint: 'dark',
  glow: 'rgba(22,163,74,.26)',
  title: 'Emlak & İlan',
  desc: 'Sahibinden gibi: ilan, filtre, harita, favori ve mesajlaşma.'
}, {
  key: 'yemek',
  tag: 'Yemek & Teslimat',
  accent: '#ff3c5e',
  screen: () => /*#__PURE__*/React.createElement(FoodApp, null),
  statusBg: '#ff7c3e',
  tint: 'light',
  glow: 'rgba(255,90,60,.32)',
  title: 'Yemek Sipariş',
  desc: 'Canlı menü, akıllı sepet ve adım adım teslimat takibi.'
}, {
  key: 'fintech',
  tag: 'Bankacılık & Fintech',
  accent: '#6d3bf5',
  screen: () => /*#__PURE__*/React.createElement(FintechApp, null),
  statusBg: '#0e0a18',
  tint: 'light',
  glow: 'rgba(109,59,245,.34)',
  title: 'Dijital Bankacılık',
  desc: 'Kart yönetimi, harcama analizi ve anlık para transferi.'
}, {
  key: 'rezervasyon',
  tag: 'Rezervasyon & Randevu',
  accent: '#07b6ac',
  screen: () => /*#__PURE__*/React.createElement(BookingApp, null),
  statusBg: '#0bbf9e',
  tint: 'light',
  glow: 'rgba(11,191,158,.32)',
  title: 'Randevu Sistemi',
  desc: 'Takvim, uygun saat seçimi ve tek dokunuşla onay.'
}, {
  key: 'harita',
  tag: 'Kurye & Araç Takip',
  accent: '#2b7cff',
  screen: () => /*#__PURE__*/React.createElement(MapApp, null),
  statusBg: '#13243a',
  tint: 'light',
  glow: 'rgba(43,124,255,.34)',
  title: 'Canlı Konum Takibi',
  desc: 'Harita üzerinde gerçek zamanlı kurye ve rota takibi.'
}, {
  key: 'eticaret',
  tag: 'E-ticaret & Mağaza',
  accent: '#ec3a8e',
  screen: () => /*#__PURE__*/React.createElement(ShopApp, null),
  statusBg: '#ffffff',
  tint: 'dark',
  glow: 'rgba(236,58,142,.30)',
  title: 'E-ticaret Mağaza',
  desc: 'Ürün vitrini, favoriler, sepet ve hızlı ödeme.'
}, {
  key: 'sosyal',
  tag: 'Sosyal Medya',
  accent: '#a02bf0',
  screen: () => /*#__PURE__*/React.createElement(SocialApp, null),
  statusBg: '#ffffff',
  tint: 'dark',
  glow: 'rgba(160,43,240,.30)',
  title: 'Sosyal Akış',
  desc: 'Hikâyeler, gönderi akışı, beğeni ve etkileşim.'
}, {
  key: 'egitim',
  tag: 'Eğitim & Online Kurs',
  accent: '#16a34a',
  screen: () => /*#__PURE__*/React.createElement(EduApp, null),
  statusBg: '#16a34a',
  tint: 'light',
  glow: 'rgba(22,163,74,.30)',
  title: 'Eğitim Platformu',
  desc: 'Ders ilerlemesi, günlük hedef ve quiz oyunlaştırması.'
}, {
  key: 'fitness',
  tag: 'Fitness & Sağlık',
  accent: '#ff2d72',
  screen: () => /*#__PURE__*/React.createElement(FitApp, null),
  statusBg: '#0a0a0f',
  tint: 'light',
  glow: 'rgba(255,45,114,.30)',
  title: 'Sağlık Takibi',
  desc: 'Aktivite halkaları, antrenman ve sağlık metrikleri.'
}, {
  key: 'muzik',
  tag: 'Müzik & Streaming',
  accent: '#ec3a8e',
  screen: () => /*#__PURE__*/React.createElement(MusicApp, null),
  statusBg: '#2a0a3a',
  tint: 'light',
  glow: 'rgba(162,28,175,.34)',
  title: 'Müzik Çalar',
  desc: 'Çalan parça, dinamik ilerleme çubuğu ve sıradaki liste.'
}];
function Showcase() {
  const scRef = React.useRef(null);
  const [active, setActive] = React.useState(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);
  const drag = React.useRef({
    down: false,
    startX: 0,
    startScroll: 0,
    moved: 0
  });
  const updateActive = React.useCallback(() => {
    const sc = scRef.current;
    if (!sc) return;
    const center = sc.scrollLeft + sc.clientWidth / 2;
    let best = 0,
      bestDist = Infinity;
    [...sc.children].forEach((ch, i) => {
      const c = ch.offsetLeft + ch.offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
    setAtStart(sc.scrollLeft < 8);
    setAtEnd(sc.scrollLeft + sc.clientWidth > sc.scrollWidth - 8);
  }, []);
  React.useEffect(() => {
    updateActive();
  }, [updateActive]);
  const jump = i => {
    const sc = scRef.current;
    if (!sc) return;
    const ch = sc.children[i];
    if (!ch) return;
    sc.scrollTo({
      left: ch.offsetLeft - (sc.clientWidth - ch.offsetWidth) / 2,
      behavior: 'smooth'
    });
  };
  const step = dir => {
    const sc = scRef.current;
    if (!sc) return;
    const w = sc.children[0].offsetWidth + 30;
    sc.scrollBy({
      left: dir * w,
      behavior: 'smooth'
    });
  };

  // drag to scroll
  const onDown = e => {
    const sc = scRef.current;
    drag.current = {
      down: true,
      startX: e.pageX,
      startScroll: sc.scrollLeft,
      moved: 0
    };
    sc.classList.add('dragging');
  };
  const onMove = e => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.pageX - d.startX;
    d.moved = Math.abs(dx);
    scRef.current.scrollLeft = d.startScroll - dx;
  };
  const onUp = () => {
    const sc = scRef.current;
    if (sc) sc.classList.remove('dragging');
    drag.current.down = false;
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section showcase",
    id: "cozumler"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "show-head reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "T\xFCm uygulama tipleri"), /*#__PURE__*/React.createElement("h2", {
    className: "h-sec",
    style: {
      marginTop: 16
    }
  }, "Ekranlar haz\u0131r,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "dokun ve dene"))), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "A\u015Fa\u011F\u0131daki ekranlar t\u0131klanabilir. Kendi logonuz, renkleriniz ve i\xE7eri\u011Finizle ayn\u0131 uygulamay\u0131 birka\xE7 haftada ma\u011Fazaya \xE7\u0131kar\u0131yoruz.")), /*#__PURE__*/React.createElement("div", {
    className: "chips reveal"
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c.key,
    className: 'chip' + (active === i ? ' active' : ''),
    onClick: () => jump(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: c.accent
    }
  }), c.tag)))), /*#__PURE__*/React.createElement("div", {
    className: "scroller-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroller",
    ref: scRef,
    onScroll: updateActive,
    onMouseDown: onDown,
    onMouseMove: onMove,
    onMouseUp: onUp,
    onMouseLeave: onUp
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "show-card",
    key: c.key
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 290,
    statusBg: c.statusBg,
    statusTint: c.tint,
    glow: c.glow
  }, c.screen()), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: c.accent + '1a',
      color: c.accent
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 99,
      background: c.accent
    }
  }), c.tag), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", null, c.desc))))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "show-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "show-hint"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M5 12l4-4M5 12l4 4M19 12l-4-4M19 12l-4 4",
    opacity: ".5"
  })), "S\xFCr\xFCkleyerek veya oklarla ", CATEGORIES.length, " farkl\u0131 uygulama tipini ke\u015Ffet"), /*#__PURE__*/React.createElement("div", {
    className: "scroll-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "snav",
    onClick: () => step(-1),
    disabled: atStart,
    "aria-label": "\xD6nceki"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 20,
    stroke: "currentColor"
  })), /*#__PURE__*/React.createElement("button", {
    className: "snav",
    onClick: () => step(1),
    disabled: atEnd,
    "aria-label": "Sonraki"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(180deg)',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 20,
    stroke: "currentColor"
  })))))));
}
window.Showcase = Showcase;
window.CATEGORIES = CATEGORIES;