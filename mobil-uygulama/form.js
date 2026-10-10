// form.jsx — çok adımlı proje talep formu
function RequestForm() {
  const cats = (window.CATEGORIES || []).map(c => c.title);
  const allCats = [...cats, 'Diğer / Özel'];
  const budgets = ['Danışmak istiyorum', '₺100K – 250K', '₺250K – 500K', '₺500K +'];
  const platforms = [['iOS', '🍎'], ['Android', '🤖'], ['Web', '🌐']];
  const langs = ['Türkçe', 'İngilizce', 'Arapça', 'Almanca', 'Rusça'];
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [f, setF] = React.useState({
    cat: '',
    platform: [],
    lang: ['Türkçe'],
    budget: '',
    desc: '',
    name: '',
    phone: '',
    email: ''
  });
  const [errs, setErrs] = React.useState({});
  const set = (k, v) => setF(s => ({
    ...s,
    [k]: v
  }));
  const toggle = (k, v) => setF(s => ({
    ...s,
    [k]: s[k].includes(v) ? s[k].filter(x => x !== v) : [...s[k], v]
  }));
  const validate = s => {
    const e = {};
    if (s === 0) {
      if (!f.cat) e.cat = 1;
      if (!f.platform.length) e.platform = 1;
    }
    if (s === 1) {
      if (!f.budget) e.budget = 1;
      if (f.desc.trim().length < 12) e.desc = 1;
    }
    if (s === 2) {
      if (f.name.trim().length < 2) e.name = 1;
      if (!/^[0-9+()\s-]{7,}$/.test(f.phone)) e.phone = 1;
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = 1;
    }
    setErrs(e);
    return Object.keys(e).length === 0;
  };
  const next = () => {
    if (validate(step)) setStep(s => s + 1);
  };
  const back = () => setStep(s => s - 1);
  const buildWhatsAppMessage = () => ['Merhaba Blue Ember, mobil uygulama teklif talebim var.', '', 'Uygulama tipi: ' + f.cat, 'Platform: ' + f.platform.join(', '), 'Diller: ' + f.lang.join(', '), 'Bütçe: ' + f.budget, 'Açıklama: ' + f.desc, '', 'Ad Soyad: ' + f.name, 'Telefon: ' + f.phone, 'E-posta: ' + f.email].join('\n');
  const submit = () => {
    if (!validate(2)) return;
    var text = encodeURIComponent(buildWhatsAppMessage());
    window.open('https://wa.me/905370580038?text=' + text, '_blank', 'noopener,noreferrer');
    setDone(true);
  };
  const Opt = ({
    on,
    onClick,
    children,
    check
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'opt' + (on ? ' sel' : ''),
    onClick: onClick
  }, children, check && /*#__PURE__*/React.createElement("span", {
    className: "check"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5 9-11"
  }))));
  return /*#__PURE__*/React.createElement("section", {
    className: "section form-sec",
    id: "teklif"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blob a"
  }), /*#__PURE__*/React.createElement("div", {
    className: "blob b"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-side reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow on-dark"
  }, "\xDCcretsiz Teklif"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      color: '#fff'
    }
  }, "Projeni anlat,", /*#__PURE__*/React.createElement("br", null), "24 saatte d\xF6nelim"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Birka\xE7 soruyu yan\u0131tla; ihtiyac\u0131na \xF6zel fiyat aral\u0131\u011F\u0131n\u0131 ve yol haritas\u0131n\u0131 \xE7\u0131karal\u0131m. Ba\u011Flay\u0131c\u0131 de\u011Fil, tamamen \xFCcretsiz."), /*#__PURE__*/React.createElement("div", {
    className: "form-bullets"
  }, [['✓', 'Ücretsiz & bağlayıcı değil', 'Hiçbir taahhüt olmadan teklif al'], ['⚡', '24 saat içinde dönüş', 'Uzman ekibimiz hızlıca değerlendirir'], ['₺', 'Net fiyat aralığı', 'Şeffaf, sürpriz maliyet yok']].map(([e, t, d], i) => /*#__PURE__*/React.createElement("div", {
    className: "form-bullet",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-ico",
    style: {
      fontSize: 18
    }
  }, e), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, t), /*#__PURE__*/React.createElement("small", null, d)))))), /*#__PURE__*/React.createElement("div", {
    className: "form-card reveal"
  }, done ? /*#__PURE__*/React.createElement("div", {
    className: "form-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ok"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5 9-11"
  }))), /*#__PURE__*/React.createElement("h3", null, "Talebin WhatsApp ile iletildi! \uD83C\uDF89"), /*#__PURE__*/React.createElement("p", null, "Te\u015Fekk\xFCrler ", f.name.split(' ')[0], ". Form bilgilerin WhatsApp \xFCzerinden ekibimize ula\u015Ft\u0131. ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "24 saat i\xE7inde"), " ", f.email, " adresinden sana d\xF6nece\u011Fiz."), /*#__PURE__*/React.createElement("div", {
    className: "summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "Uygulama tipi"), /*#__PURE__*/React.createElement("b", null, f.cat)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "Platform"), /*#__PURE__*/React.createElement("b", null, f.platform.join(', '))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "Diller"), /*#__PURE__*/React.createElement("b", null, f.lang.join(', '))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "B\xFCt\xE7e"), /*#__PURE__*/React.createElement("b", null, f.budget))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => {
      setDone(false);
      setStep(0);
      setF({
        cat: '',
        platform: [],
        lang: ['Türkçe'],
        budget: '',
        desc: '',
        name: '',
        phone: '',
        email: ''
      });
    }
  }, "Yeni talep olu\u015Ftur")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'step-dot' + (i <= step ? ' on' : '')
  }))), step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginBottom: 18
    }
  }, "Ne t\xFCr bir uygulama?"), /*#__PURE__*/React.createElement("div", {
    className: 'fld' + (errs.cat ? ' invalid' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Uygulama kategorisi ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("select", {
    className: errs.cat ? 'err' : '',
    value: f.cat,
    onChange: e => set('cat', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Se\xE7iniz..."), allCats.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "L\xFCtfen bir kategori se\xE7.")), /*#__PURE__*/React.createElement("div", {
    className: 'fld' + (errs.platform ? ' invalid' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Platform ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--muted)'
    }
  }, "(birden \xE7ok se\xE7ebilirsin)")), /*#__PURE__*/React.createElement("div", {
    className: "opt-grid three"
  }, platforms.map(([p, e]) => /*#__PURE__*/React.createElement(Opt, {
    key: p,
    on: f.platform.includes(p),
    onClick: () => toggle('platform', p)
  }, /*#__PURE__*/React.createElement("span", {
    className: "em"
  }, e), p))), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "En az bir platform se\xE7.")), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Uygulama dili / dilleri"), /*#__PURE__*/React.createElement("div", {
    className: "opt-grid three"
  }, langs.map(l => /*#__PURE__*/React.createElement(Opt, {
    key: l,
    on: f.lang.includes(l),
    onClick: () => toggle('lang', l)
  }, l))))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginBottom: 18
    }
  }, "B\xFCt\xE7e & detaylar"), /*#__PURE__*/React.createElement("div", {
    className: 'fld' + (errs.budget ? ' invalid' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Tahmini b\xFCt\xE7e aral\u0131\u011F\u0131 ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "opt-grid"
  }, budgets.map(b => /*#__PURE__*/React.createElement(Opt, {
    key: b,
    on: f.budget === b,
    onClick: () => set('budget', b)
  }, b))), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "Bir b\xFCt\xE7e aral\u0131\u011F\u0131 se\xE7.")), /*#__PURE__*/React.createElement("div", {
    className: 'fld' + (errs.desc ? ' invalid' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Proje a\xE7\u0131klamas\u0131 ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    className: errs.desc ? 'err' : '',
    value: f.desc,
    onChange: e => set('desc', e.target.value),
    placeholder: "Uygulaman\u0131n ne yapmas\u0131n\u0131 istiyorsun? Hedef kitlen kim? \xD6ne \xE7\u0131kan \xF6zellikler neler?"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "L\xFCtfen en az birka\xE7 c\xFCmle yaz."))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginBottom: 18
    }
  }, "Sana nas\u0131l ula\u015Fal\u0131m?"), /*#__PURE__*/React.createElement("div", {
    className: 'fld' + (errs.name ? ' invalid' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Ad soyad ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: errs.name ? 'err' : '',
    value: f.name,
    onChange: e => set('name', e.target.value),
    placeholder: "Ad\u0131n ve soyad\u0131n"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "L\xFCtfen ad\u0131n\u0131 gir.")), /*#__PURE__*/React.createElement("div", {
    className: 'fld' + (errs.phone ? ' invalid' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Telefon ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: errs.phone ? 'err' : '',
    value: f.phone,
    onChange: e => set('phone', e.target.value),
    placeholder: "+90 5__ ___ __ __",
    inputMode: "tel"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "Ge\xE7erli bir telefon numaras\u0131 gir.")), /*#__PURE__*/React.createElement("div", {
    className: 'fld' + (errs.email ? ' invalid' : '')
  }, /*#__PURE__*/React.createElement("label", null, "E-posta ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: errs.email ? 'err' : '',
    value: f.email,
    onChange: e => set('email', e.target.value),
    placeholder: "ornek@email.com",
    inputMode: "email"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "Ge\xE7erli bir e-posta gir."))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, step > 0 ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: back,
    style: {
      padding: '13px 22px'
    }
  }, "Geri") : /*#__PURE__*/React.createElement("span", null), step < 2 ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: next
  }, "Devam et", /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))) : /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: submit
  }, "Talebi G\xF6nder", /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5 9-11"
  }))))))));
}
window.RequestForm = RequestForm;