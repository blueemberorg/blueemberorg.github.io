// screens3.jsx — Eğitim · Fitness & Sağlık · Müzik/Streaming
/* ============== 7 · EĞİTİM ============== */
function EduApp() {
  const [tab, setTab] = React.useState(0);
  const courses = [{
    n: 'Mobil UI Tasarımı',
    pr: 72,
    l: '18/25 ders',
    g: '🎨',
    c: ['#6d3bf5', '#a02bf0']
  }, {
    n: 'React Native',
    pr: 45,
    l: '9/20 ders',
    g: '⚛️',
    c: ['#2b7cff', '#0bbf9e']
  }, {
    n: 'Veri Bilimi 101',
    pr: 12,
    l: '3/24 ders',
    g: '📊',
    c: ['#ff7a3c', '#ffb020']
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle,
      background: '#f6f4fb'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#16a34a,#0d8f5e)',
      padding: '6px 18px 20px',
      color: '#fff',
      borderRadius: '0 0 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .85
    }
  }, "G\xFCnayd\u0131n \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 17
    }
  }, "Deniz Acar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      background: 'rgba(255,255,255,.18)',
      padding: '6px 11px',
      borderRadius: 99,
      fontWeight: 800,
      fontSize: 13,
      fontFamily: 'var(--display)'
    }
  }, "\uD83D\uDD25 7")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      background: 'rgba(255,255,255,.14)',
      borderRadius: 16,
      padding: '13px 15px',
      display: 'flex',
      alignItems: 'center',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 46,
      height: 46
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "46",
    height: "46",
    viewBox: "0 0 46 46"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "23",
    r: "19",
    stroke: "rgba(255,255,255,.25)",
    strokeWidth: "5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "23",
    r: "19",
    stroke: "#fff",
    strokeWidth: "5",
    fill: "none",
    strokeLinecap: "round",
    strokeDasharray: "119",
    strokeDashoffset: "36",
    transform: "rotate(-90 23 23)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 12
    }
  }, "70%")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 700,
      fontSize: 13
    }
  }, "G\xFCnl\xFCk hedef"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .85
    }
  }, "35 / 50 dk tamamland\u0131")))), /*#__PURE__*/React.createElement("div", {
    style: scrollStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--display)',
      fontSize: 14
    }
  }, "Devam et"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#16a34a',
      fontWeight: 700
    }
  }, "T\xFCm\xFC")), courses.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      margin: '8px 16px',
      background: '#fff',
      borderRadius: 16,
      padding: 13,
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      boxShadow: '0 4px 14px rgba(40,120,70,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 14,
      background: `linear-gradient(135deg,${c.c[0]},${c.c[1]})`,
      display: 'grid',
      placeItems: 'center',
      fontSize: 23,
      flexShrink: 0
    }
  }, c.g), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 700,
      fontSize: 13
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: '#8a9690',
      margin: '3px 0 6px'
    }
  }, c.l), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 99,
      background: '#eef0ee',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${c.pr}%`,
      height: '100%',
      borderRadius: 99,
      background: `linear-gradient(90deg,${c.c[0]},${c.c[1]})`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 11,
      background: '#eafaf0',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 15,
    stroke: "#16a34a",
    fill: "#16a34a"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '12px 16px',
      borderRadius: 16,
      padding: '16px 18px',
      background: 'linear-gradient(120deg,#15101f,#3a2456)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#c4b5ff',
      fontWeight: 700
    }
  }, "HAFTALIK QUIZ"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 15,
      marginTop: 3
    }
  }, "Bilgini test et"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .75,
      marginTop: 2
    }
  }, "+150 puan kazan"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 12,
      bottom: 8,
      fontSize: 40
    }
  }, "\uD83E\uDDE0"))), /*#__PURE__*/React.createElement(TabBar, {
    accent: "#16a34a",
    active: tab,
    onChange: setTab,
    items: [{
      icon: 'home',
      label: 'Ana Sayfa'
    }, {
      icon: 'book',
      label: 'Derslerim'
    }, {
      icon: 'chart',
      label: 'İlerleme'
    }, {
      icon: 'user',
      label: 'Profil'
    }]
  }));
}

/* ============== 8 · FITNESS & SAĞLIK ============== */
function FitApp() {
  const [tab, setTab] = React.useState(0);
  const rings = [['Hareket', 78, '#ff2d72', '420', 'kcal'], ['Egzersiz', 60, '#a8ff2d', '38', 'dk'], ['Ayakta', 90, '#2ddfff', '11', 'sa']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle,
      background: '#0a0a0f'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 18px 0',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#7a7a8a'
    }
  }, "\xC7ar\u015Famba, 4 Haz"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 18
    }
  }, "\xD6zet")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 99,
      background: 'linear-gradient(135deg,#ff2d72,#a8ff2d)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 800,
      fontSize: 13,
      color: '#0a0a0f'
    }
  }, "BK"))), /*#__PURE__*/React.createElement("div", {
    style: scrollStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 18px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 116,
      height: 116
    }
  }, rings.map(([, pct, col], i) => {
    const r = 52 - i * 15;
    const circ = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("svg", {
      key: i,
      width: "116",
      height: "116",
      viewBox: "0 0 116 116",
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "58",
      cy: "58",
      r: r,
      stroke: col,
      strokeOpacity: ".18",
      strokeWidth: "11",
      fill: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58",
      cy: "58",
      r: r,
      stroke: col,
      strokeWidth: "11",
      fill: "none",
      strokeLinecap: "round",
      strokeDasharray: circ,
      strokeDashoffset: circ * (1 - pct / 100),
      transform: "rotate(-90 58 58)"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, rings.map(([l,, col, v, u], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: '#7a7a8a',
      fontWeight: 600
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 17,
      color: col
    }
  }, v, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: '#7a7a8a',
      marginLeft: 3
    }
  }, u)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      padding: '4px 16px'
    }
  }, [['Adım', '8.420', '👟', '#a8ff2d'], ['Nabız', '72 bpm', '❤️', '#ff2d72'], ['Uyku', '7s 20dk', '🌙', '#2ddfff'], ['Su', '1.4 L', '💧', '#2b7cff']].map(([l, v, e, c], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#15151d',
      borderRadius: 16,
      padding: '14px 15px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, e), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: c
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: '#7a7a8a',
      marginTop: 10
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 17,
      color: '#fff'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '12px 16px',
      borderRadius: 16,
      padding: '15px 17px',
      background: 'linear-gradient(120deg,#ff2d72,#ff7a3c)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: .85,
      fontWeight: 700
    }
  }, "BUG\xDCNK\xDC ANTRENMAN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 16,
      marginTop: 2
    }
  }, "HIIT \xB7 24 dk")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 99,
      background: '#fff',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 18,
    stroke: "#ff2d72",
    fill: "#ff2d72"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#15151d',
      borderTop: '1px solid rgba(255,255,255,.06)'
    }
  }, /*#__PURE__*/React.createElement(TabBar, {
    accent: "#a8ff2d",
    active: tab,
    onChange: setTab,
    items: [{
      icon: 'activity',
      label: 'Özet'
    }, {
      icon: 'flame',
      label: 'Antrenman'
    }, {
      icon: 'heart',
      label: 'Sağlık'
    }, {
      icon: 'user',
      label: 'Profil'
    }]
  })));
}

/* ============== 9 · MÜZİK / STREAMING ============== */
function MusicApp() {
  const [tab, setTab] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const [prog, setProg] = React.useState(38);
  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setProg(p => p >= 100 ? 0 : p + 0.6), 350);
    return () => clearInterval(id);
  }, [playing]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle,
      background: 'linear-gradient(180deg,#2a0a3a 0%,#0e0a18 55%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: scrollStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 18px 4px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#c9a8e0'
    }
  }, "Senin i\xE7in"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 18
    }
  }, "\u015Eimdi \xC7al\u0131yor")), /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    stroke: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '1',
      borderRadius: 22,
      background: 'linear-gradient(135deg,#a21caf,#6d3bf5,#ec3a8e)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 72,
      boxShadow: '0 22px 50px rgba(162,28,175,.5)'
    }
  }, "\uD83C\uDFA7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 0',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 800,
      fontSize: 20
    }
  }, "Neon Nights"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#c9a8e0',
      fontSize: 13,
      marginTop: 2
    }
  }, "Aurora Waves \xB7 Midnight EP"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      height: 5,
      borderRadius: 99,
      background: 'rgba(255,255,255,.15)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${prog}%`,
      height: '100%',
      borderRadius: 99,
      background: 'linear-gradient(90deg,#ec3a8e,#a02bf0)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 10.5,
      color: '#c9a8e0',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, fmt(prog)), /*#__PURE__*/React.createElement("span", null, "-", fmt(100 - prog))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#c9a8e0',
      fontSize: 19
    }
  }, "\uD83D\uDD00"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 26
    }
  }, "\u23EE"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    style: {
      width: 60,
      height: 60,
      borderRadius: 99,
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 10px 26px rgba(255,255,255,.25)'
    }
  }, playing ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: '#2a0a3a'
    }
  }, "\u275A\u275A") : /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 24,
    stroke: "#2a0a3a",
    fill: "#2a0a3a"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 26
    }
  }, "\u23ED"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#c9a8e0',
      fontSize: 19
    }
  }, "\uD83D\uDD01"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 18px 4px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--display)',
      fontSize: 13
    }
  }, "S\u0131radaki")), [['Electric Dreams', 'Pulse', '🎹'], ['Sunset Drive', 'Lumen', '🌆']].map(([n, a, e], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 11,
      background: 'linear-gradient(135deg,#6d3bf5,#ec3a8e)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 18
    }
  }, e), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 700,
      fontSize: 12.5,
      color: '#fff'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: '#c9a8e0'
    }
  }, a)), /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 17,
    stroke: "#c9a8e0"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(20,10,30,.85)',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement(TabBar, {
    accent: "#ec3a8e",
    active: tab,
    onChange: setTab,
    items: [{
      icon: 'home',
      label: 'Ana Sayfa'
    }, {
      icon: 'compass',
      label: 'Keşfet'
    }, {
      icon: 'library',
      label: 'Kütüphane'
    }, {
      icon: 'user',
      label: 'Profil'
    }]
  })));
}
function fmt(pct) {
  const tot = 214;
  const s = Math.round(tot * pct / 100);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}
Object.assign(window, {
  EduApp,
  FitApp,
  MusicApp
});