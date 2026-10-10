// screens2.jsx — Araç/Kurye takip · E-ticaret · Sosyal medya
/* ============== 4 · ARAÇ / KURYE TAKİP (HARİTA) ============== */
function MapApp() {
  const [tab, setTab] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle,
      background: '#0d1b2a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(160deg,#16263a,#0d1b2a)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "streets",
    width: "46",
    height: "46",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 23h46M23 0v46",
    stroke: "#22344a",
    strokeWidth: "2"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#streets)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-10 60 L120 120 L210 60 L320 180",
    stroke: "#2b7cff",
    strokeWidth: "6",
    fill: "none",
    strokeLinecap: "round",
    opacity: ".9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 280 Q160 220 210 240 T300 200",
    stroke: "#3a5070",
    strokeWidth: "10",
    fill: "none",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 290 380",
    style: {
      position: 'absolute',
      inset: 0
    },
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M70 300 C70 230 200 250 200 170 C200 110 150 110 150 70",
    stroke: "#2b7cff",
    strokeWidth: "4.5",
    fill: "none",
    strokeLinecap: "round",
    strokeDasharray: "2 9"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '56%',
      top: '44%',
      transform: 'translate(-50%,-50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 99,
      background: '#2b7cff',
      border: '3px solid #fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 19,
      boxShadow: '0 6px 18px rgba(43,124,255,.6)'
    }
  }, "\uD83D\uDEF5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '17%',
      transform: 'translate(-50%,-100%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 30,
    stroke: "#fff",
    fill: "#ff3c6e"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: '6px 16px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: 'rgba(255,255,255,.95)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,.2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 19,
    stroke: "#0d1b2a"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '9px 15px',
      borderRadius: 12,
      background: 'rgba(255,255,255,.95)',
      fontFamily: 'var(--display)',
      fontWeight: 700,
      fontSize: 12,
      boxShadow: '0 4px 12px rgba(0,0,0,.2)'
    }
  }, "Tahmini var\u0131\u015F \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#2b7cff'
    }
  }, "12 dk")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      padding: '14px 18px 8px',
      marginTop: -24,
      position: 'relative',
      zIndex: 5,
      boxShadow: '0 -10px 30px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 99,
      background: '#dfe4ea',
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      marginBottom: 14
    }
  }, [1, 1, 1, 0].map((on, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 4,
      borderRadius: 99,
      background: on ? '#2b7cff' : '#e8ebf0'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 15
    }
  }, "Kuryen yola \xE7\u0131kt\u0131 \uD83D\uDEF5"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#7a8694',
      marginTop: 2
    }
  }, "Sipari\u015Fin ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#0d1b2a'
    }
  }, "12 dakika"), " i\xE7inde kap\u0131nda"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 14,
      padding: '12px 14px',
      borderRadius: 16,
      background: '#f5f7fa'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 99,
      background: 'linear-gradient(135deg,#2b7cff,#1a5fd0)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 16
    }
  }, "MK"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Murat K."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#7a8694'
    }
  }, "\u2605 4.9 \xB7 34 GH 218")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: '#2b7cff',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chat",
    size: 18,
    stroke: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: '#e8f0ff',
      display: 'grid',
      placeItems: 'center',
      color: '#2b7cff',
      fontSize: 18
    }
  }, "\uD83D\uDCDE"))), /*#__PURE__*/React.createElement(TabBar, {
    accent: "#2b7cff",
    active: tab,
    onChange: setTab,
    items: [{
      icon: 'map',
      label: 'Takip'
    }, {
      icon: 'clock',
      label: 'Geçmiş'
    }, {
      icon: 'bell',
      label: 'Bildirim'
    }, {
      icon: 'user',
      label: 'Profil'
    }]
  }));
}

/* ============== 5 · E-TİCARET / ALIŞVERİŞ ============== */
function ShopApp() {
  const [tab, setTab] = React.useState(0);
  const [fav, setFav] = React.useState({});
  const cats = ['Tümü', 'Giyim', 'Ayakkabı', 'Aksesuar', 'Çanta'];
  const [cat, setCat] = React.useState(0);
  const prod = [{
    n: 'Oversize Ceket',
    p: '₺899',
    o: '₺1.299',
    g: '🧥',
    c: ['#6d3bf5', '#a02bf0']
  }, {
    n: 'Retro Sneaker',
    p: '₺1.249',
    o: '',
    g: '👟',
    c: ['#ec3a8e', '#ff6b8a']
  }, {
    n: 'Deri Çanta',
    p: '₺2.150',
    o: '₺2.800',
    g: '👜',
    c: ['#ff7a3c', '#ffb020']
  }, {
    n: 'Güneş Gözlüğü',
    p: '₺549',
    o: '',
    g: '🕶️',
    c: ['#0bbf9e', '#2b7cff']
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle,
      background: '#faf7ff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 16px 10px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: '#a99fc0'
    }
  }, "Ke\u015Ffet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 17
    }
  }, "Ma\u011Faza")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cart",
    size: 22,
    stroke: "#15101f"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -6,
      background: '#ec3a8e',
      color: '#fff',
      borderRadius: 99,
      fontSize: 9,
      fontWeight: 800,
      width: 15,
      height: 15,
      display: 'grid',
      placeItems: 'center'
    }
  }, "3"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#f3eefb',
      borderRadius: 12,
      padding: '11px 13px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    stroke: "#a99fc0"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#a99fc0',
      fontSize: 12.5
    }
  }, "\xDCr\xFCn ara..."))), /*#__PURE__*/React.createElement("div", {
    style: scrollStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '12px 16px 4px',
      overflowX: 'auto'
    }
  }, cats.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setCat(i),
    style: {
      flexShrink: 0,
      padding: '8px 15px',
      borderRadius: 99,
      fontFamily: 'var(--display)',
      fontWeight: 700,
      fontSize: 12,
      background: cat === i ? '#15101f' : '#fff',
      color: cat === i ? '#fff' : '#6b6480',
      boxShadow: cat === i ? 'none' : 'inset 0 0 0 1.5px #ece6f6'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      padding: '10px 16px'
    }
  }, prod.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 4px 14px rgba(80,40,160,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Thumb, {
    from: p.c[0],
    to: p.c[1],
    glyph: p.g,
    h: 96,
    r: 0
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFav(f => ({
      ...f,
      [i]: !f[i]
    })),
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      width: 28,
      height: 28,
      borderRadius: 99,
      background: 'rgba(255,255,255,.92)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 15,
    stroke: fav[i] ? '#ec3a8e' : '#a99fc0',
    fill: fav[i] ? '#ec3a8e' : 'none'
  })), p.o && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      background: '#ec3a8e',
      color: '#fff',
      fontSize: 9,
      fontWeight: 800,
      padding: '3px 7px',
      borderRadius: 99
    }
  }, "\u0130ND\u0130R\u0130M")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '9px 11px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 12,
      color: '#15101f'
    }
  }, p.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#ff9500',
      margin: '3px 0'
    }
  }, "\u2605 4.", 6 + i), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--display)',
      fontSize: 14,
      color: '#6d3bf5'
    }
  }, p.p), p.o && /*#__PURE__*/React.createElement("s", {
    style: {
      fontSize: 10,
      color: '#bbb'
    }
  }, p.o)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  })), /*#__PURE__*/React.createElement(TabBar, {
    accent: "#6d3bf5",
    active: tab,
    onChange: setTab,
    items: [{
      icon: 'home',
      label: 'Ana Sayfa'
    }, {
      icon: 'grid',
      label: 'Kategori'
    }, {
      icon: 'heart',
      label: 'Favori'
    }, {
      icon: 'user',
      label: 'Hesap'
    }]
  }));
}

/* ============== 6 · SOSYAL MEDYA ============== */
function SocialApp() {
  const [tab, setTab] = React.useState(0);
  const [liked, setLiked] = React.useState({
    0: true
  });
  const stories = [['Sen', '#6d3bf5', 1], ['ayşe', '#ec3a8e'], ['can_d', '#ff7a3c'], ['zeynep', '#0bbf9e'], ['mert', '#2b7cff']];
  const posts = [{
    u: 'ayse.travels',
    t: 'Kapadokya gün doğumu 🎈',
    g: '🌄',
    c: ['#ff7a3c', '#ec3a8e'],
    likes: '2.418',
    av: '#ec3a8e'
  }, {
    u: 'mert.codes',
    t: 'Yeni proje yayında! 🚀',
    g: '💻',
    c: ['#6d3bf5', '#2b7cff'],
    likes: '932',
    av: '#6d3bf5'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4px 16px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 19,
      background: 'linear-gradient(120deg,#6d3bf5,#ec3a8e)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "Pulse"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 21,
    stroke: "#15101f"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chat",
    size: 21,
    stroke: "#15101f"
  }))), /*#__PURE__*/React.createElement("div", {
    style: scrollStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 13,
      padding: '4px 16px 12px',
      overflowX: 'auto',
      borderBottom: '1px solid #f0ecf6'
    }
  }, stories.map(([n, c, me], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flexShrink: 0,
      textAlign: 'center',
      width: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 99,
      padding: 2.5,
      background: me ? '#eee' : 'linear-gradient(135deg,#ffb020,#ec3a8e,#6d3bf5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 99,
      background: c,
      border: '2px solid #fff',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 17,
      position: 'relative'
    }
  }, n[0].toUpperCase(), me ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -2,
      right: -2,
      width: 18,
      height: 18,
      borderRadius: 99,
      background: '#6d3bf5',
      color: '#fff',
      fontSize: 13,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid #fff'
    }
  }, "+") : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      color: '#6b6480',
      marginTop: 4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, n)))), posts.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '11px 16px 9px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 99,
      background: p.av,
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 13
    }
  }, p.u[0].toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'var(--display)',
      fontWeight: 700,
      fontSize: 12.5
    }
  }, p.u), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#b7b1c4',
      fontWeight: 800,
      letterSpacing: 1
    }
  }, "\xB7\xB7\xB7")), /*#__PURE__*/React.createElement(Thumb, {
    from: p.c[0],
    to: p.c[1],
    glyph: p.g,
    h: 210,
    r: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '11px 16px 6px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(l => ({
      ...l,
      [i]: !l[i]
    }))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 23,
    stroke: liked[i] ? '#ec3a8e' : '#15101f',
    fill: liked[i] ? '#ec3a8e' : 'none'
  })), /*#__PURE__*/React.createElement(Icon, {
    name: "chat",
    size: 22,
    stroke: "#15101f"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "nav2",
    size: 21,
    stroke: "#15101f"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 700,
      fontSize: 12.5
    }
  }, liked[i] ? Number(p.likes.replace('.', '')) + 1 : p.likes, " be\u011Feni"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--display)'
    }
  }, p.u), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#3a3348'
    }
  }, p.t)))))), /*#__PURE__*/React.createElement(TabBar, {
    accent: "#15101f",
    active: tab,
    onChange: setTab,
    items: [{
      icon: 'home',
      label: 'Akış'
    }, {
      icon: 'search',
      label: 'Keşfet'
    }, {
      icon: 'plus',
      label: 'Paylaş'
    }, {
      icon: 'user',
      label: 'Profil'
    }]
  }));
}
Object.assign(window, {
  MapApp,
  ShopApp,
  SocialApp
});