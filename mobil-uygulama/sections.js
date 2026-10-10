// sections.jsx — /ajans sayfası bölümleri (Blue Ember teması)
// Hero (sohbet girişi + uygulama vitrini) · Müşteri logoları · Taahhütler · Sektörler
// White-label · Paket içeriği · Entegrasyonlar · Entegrasyon duvarı · Süreç · Gelir modeli
// Karşılaştırma · Paketler · Hizmetler · Yorumlar · SSS

var WA_NUMBER = '905370580038';
function openWhatsApp(text) {
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
}
function SecHead({
  eyebrow,
  title,
  grad,
  lead,
  center = true,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: center ? {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto'
    } : {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'eyebrow' + (dark ? ' on-dark' : ''),
    style: center ? {
      justifyContent: 'center'
    } : null
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h-sec",
    style: {
      marginTop: 16,
      color: dark ? '#fff' : undefined
    }
  }, title, grad ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, grad)) : null), lead ? /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: center ? {
      margin: '16px auto 0'
    } : {
      marginTop: 16
    }
  }, lead) : null);
}

/* =========================================================
   HERO — sohbet girişi + "Hangi uygulamayı isterseniz"
   ========================================================= */
var PRESETS = [{
  k: 'taksi',
  label: 'Taksi / transfer',
  ref: 'Uber gibi',
  prompt: 'Taksi ve havalimanı transferi için Uber gibi bir uygulama istiyorum. ',
  time: '4–6 hafta',
  mods: ['Yolcu uygulaması: araç seçimi, fiyat tahmini', 'Sürücü uygulaması ve canlı konum', 'Kartla ödeme ve dijital fiş', 'Yönetim paneli: bölge, fiyat, komisyon']
}, {
  k: 'yemek',
  label: 'Yemek siparişi',
  ref: 'Yemeksepeti gibi',
  prompt: 'Restoranım için Yemeksepeti gibi, komisyonsuz kendi sipariş uygulamamı istiyorum. ',
  time: '4 hafta',
  mods: ['Menü, sepet ve kupon', 'Şube ve teslimat bölgesi', 'Sipariş durumu bildirimleri', 'Mutfak ekranı ve yönetim paneli']
}, {
  k: 'randevu',
  label: 'Randevu (kuaför, klinik)',
  ref: 'Kuaför, klinik',
  prompt: 'Kuaför / klinik için online randevu uygulaması istiyorum. ',
  time: '3–4 hafta',
  mods: ['Hizmet, uzman ve saat seçimi', 'SMS / WhatsApp hatırlatma', 'Kapora ve online ödeme', 'Personel takvimi ve müşteri kartı']
}, {
  k: 'emlak',
  label: 'Emlak & ilan',
  ref: 'Sahibinden gibi',
  prompt: 'Sahibinden gibi bir emlak / ilan uygulaması istiyorum. ',
  time: '5–6 hafta',
  mods: ['İlan verme ve onay akışı', 'Filtre, harita ve favoriler', 'Uygulama içi mesajlaşma', 'Öne çıkarma ve doping paketleri']
}, {
  k: 'eticaret',
  label: 'E-ticaret',
  ref: 'Trendyol gibi',
  prompt: 'E-ticaret sitemin (Shopify / ikas / Ticimax vb.) mobil uygulamasını istiyorum. ',
  time: '4 hafta',
  mods: ['Mağazanla ürün, stok ve sipariş senkronu', 'Sepet ve ödeme (iyzico, PayTR)', 'Kampanya push bildirimleri', 'Kargo takibi ve favoriler']
}, {
  k: 'kurye',
  label: 'Kurye takibi',
  ref: 'Getir gibi',
  prompt: 'Teslimat ve kurye takibi için uygulama istiyorum. ',
  time: '4–6 hafta',
  mods: ['Canlı kurye konumu', 'Kurye uygulaması ve rota', 'Teslimat kanıtı (foto, imza)', 'Operasyon paneli']
}, {
  k: 'bayi',
  label: 'Bayi / B2B sipariş',
  ref: 'Toptancılar için',
  prompt: 'Bayilerimin sipariş verebileceği B2B uygulama istiyorum. ',
  time: '5–6 hafta',
  mods: ['Bayiye özel fiyat listesi', 'Minimum sipariş ve cari hesap', 'Hızlı tekrar sipariş', 'ERP (Logo, Mikro) entegrasyonu']
}, {
  k: 'kurs',
  label: 'Online kurs',
  ref: 'Udemy gibi',
  prompt: 'Online eğitim / kurs uygulaması istiyorum. ',
  time: '4–6 hafta',
  mods: ['Video dersler ve ilerleme', 'Satın alma ve abonelik', 'Quiz ve sertifika', 'Eğitmen paneli']
}, {
  k: 'sosyal',
  label: 'Sosyal medya / topluluk',
  ref: 'Instagram gibi',
  prompt: 'Kendi topluluğum için sosyal medya uygulaması istiyorum. ',
  time: '6–8 hafta',
  mods: ['Profil, takip ve akış', 'Fotoğraf / video paylaşımı', 'Mesajlaşma ve bildirim', 'Moderasyon paneli']
}, {
  k: 'fitness',
  label: 'Spor salonu / diyetisyen',
  ref: 'Spor & sağlık',
  prompt: 'Spor salonu / diyetisyen için üyelik ve program uygulaması istiyorum. ',
  time: '4–5 hafta',
  mods: ['Üyelik ve paket satışı', 'Ders / seans rezervasyonu', 'Antrenman ve diyet programı', 'İlerleme takibi ve hatırlatma']
}, {
  k: 'kiralama',
  label: 'Araç kiralama',
  ref: 'Rent a car',
  prompt: 'Araç kiralama firmam için online rezervasyon uygulaması istiyorum. ',
  time: '5–6 hafta',
  mods: ['Araç, tarih ve şube seçimi', 'Online ödeme ve depozito', 'Ehliyet / belge yükleme', 'Filo ve rezervasyon paneli']
}, {
  k: 'cuzdan',
  label: 'Cüzdan / sadakat kartı',
  ref: 'Papara gibi',
  prompt: 'Müşterilerim için dijital cüzdan / sadakat kartı uygulaması istiyorum. ',
  time: '5–7 hafta',
  mods: ['Bakiye yükleme ve QR ile ödeme', 'Puan ve kampanya', 'İşlem geçmişi', 'İşletme paneli ve raporlar']
}];
function Hero() {
  const [text, setText] = React.useState('');
  const [sel, setSel] = React.useState('');
  const taRef = React.useRef(null);
  const plan = PRESETS.filter(p => p.k === sel)[0];
  const pick = p => {
    setSel(p.k);
    setText(p.prompt);
    if (taRef.current) {
      taRef.current.focus();
    }
  };
  const send = () => {
    const lines = ['Merhaba Blue Ember,'];
    lines.push(text.trim() ? 'Fikrim: ' + text.trim() : 'Markam için mobil uygulama yaptırmak istiyorum.');
    if (plan) lines.push('', 'İlgilendiğim tip: ' + plan.label + ' (' + plan.ref + ')');
    lines.push('', 'Ön plan ve fiyat bilgisi alabilir miyim?');
    openWhatsApp(lines.join('\n'));
  };
  const phones = [{
    el: /*#__PURE__*/React.createElement(TaxiApp, null),
    bg: '#ffffff',
    tint: 'dark',
    t: 'Taksi',
    s: 'Uber gibi'
  }, {
    el: /*#__PURE__*/React.createElement(FoodApp, null),
    bg: '#ff7c3e',
    tint: 'light',
    t: 'Yemek siparişi',
    s: 'Yemeksepeti gibi'
  }, {
    el: /*#__PURE__*/React.createElement(BookingApp, null),
    bg: '#0bbf9e',
    tint: 'light',
    t: 'Randevu',
    s: 'Kuaför, klinik'
  }, {
    el: /*#__PURE__*/React.createElement(EmlakApp, null),
    bg: '#ffffff',
    tint: 'dark',
    t: 'Emlak ve ilan',
    s: 'Sahibinden gibi'
  }, {
    el: /*#__PURE__*/React.createElement(ShopApp, null),
    bg: '#ffffff',
    tint: 'dark',
    t: 'E-ticaret',
    s: 'Trendyol gibi'
  }, {
    el: /*#__PURE__*/React.createElement(MapApp, null),
    bg: '#13243a',
    tint: 'light',
    t: 'Kurye takibi',
    s: 'Getir gibi'
  }, {
    el: /*#__PURE__*/React.createElement(SocialApp, null),
    bg: '#ffffff',
    tint: 'dark',
    t: 'Sosyal medya',
    s: 'Instagram gibi'
  }, {
    el: /*#__PURE__*/React.createElement(EduApp, null),
    bg: '#16a34a',
    tint: 'light',
    t: 'Online kurs',
    s: 'Udemy gibi'
  }, {
    el: /*#__PURE__*/React.createElement(FitApp, null),
    bg: '#0a0a0f',
    tint: 'light',
    t: 'Spor & sağlık',
    s: 'Spor salonu, diyetisyen'
  }, {
    el: /*#__PURE__*/React.createElement(FintechApp, null),
    bg: '#0e0a18',
    tint: 'light',
    t: 'Cüzdan & ödeme',
    s: 'Papara gibi'
  }, {
    el: /*#__PURE__*/React.createElement(MusicApp, null),
    bg: '#2a0a3a',
    tint: 'light',
    t: 'Müzik & podcast',
    s: 'Spotify gibi'
  }];
  const phRef = React.useRef(null);
  const slide = dir => {
    const el = phRef.current;
    if (!el) return;
    const card = el.querySelector('.hp');
    el.scrollBy({
      left: dir * ((card ? card.offsetWidth : 260) + 26) * 2,
      behavior: 'smooth'
    });
  };
  const mods = ['Sadakat & puan', 'Canlı yayın', 'Mesajlaşma', 'Rezervasyon', 'B2B sipariş', 'Abonelik', 'Harita & konum', 'QR menü', 'Yapay zekâ asistanı', 'Çoklu dil'];
  return /*#__PURE__*/React.createElement("section", {
    className: "hero2",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero2-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero2-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero2-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "White-label \xB7 Kendi markan\u0131zla App Store ve Google Play\u2019de"), /*#__PURE__*/React.createElement("h1", null, "Hangi uygulamay\u0131", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "isterseniz.")), /*#__PURE__*/React.createElement("div", {
    className: "grad-bar"
  }), /*#__PURE__*/React.createElement("p", {
    className: "lead hero2-lead"
  }, "Mod\xFClleri haz\u0131r, markan\u0131za uyarl\u0131yoruz. Kaynak kod sizin, uygulama sizin geli\u015Ftirici hesab\u0131n\u0131zda, ayl\u0131k zorunlu \xFCcret yok."), /*#__PURE__*/React.createElement("div", {
    className: "prompt",
    id: "teklif-ust"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "prompt-ta",
    className: "prompt-label"
  }, "Nas\u0131l bir uygulama istiyorsunuz?"), /*#__PURE__*/React.createElement("textarea", {
    id: "prompt-ta",
    ref: taRef,
    rows: "3",
    value: text,
    onChange: e => {
      setText(e.target.value);
    },
    onKeyDown: e => {
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        send();
      }
    },
    placeholder: "\xD6rn. Kuaf\xF6r\xFCm i\xE7in randevu uygulamas\u0131; m\xFC\u015Fteriler saat se\xE7sin, hat\u0131rlatma SMS\u2019i gitsin\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "prompt-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "prompt-hint"
  }, "G\xF6nderince WhatsApp a\xE7\u0131l\u0131r \xB7 24 saat i\xE7inde \xF6n plan"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "prompt-send",
    onClick: send,
    "aria-label": "WhatsApp\u2019tan g\xF6nder"
  }, /*#__PURE__*/React.createElement("span", null, "\xD6n plan al"), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "prompt-chips",
    role: "group",
    "aria-label": "Haz\u0131r uygulama tipleri"
  }, PRESETS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.k,
    type: "button",
    className: 'pchip' + (sel === p.k ? ' on' : ''),
    onClick: () => pick(p)
  }, p.label))), plan ? /*#__PURE__*/React.createElement("div", {
    className: "plan-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "plan-eyebrow"
  }, "\xD6n plan \xB7 ", plan.label), /*#__PURE__*/React.createElement("ul", null, plan.mods.map((m, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: "#4fb3c0",
    sw: 2.6
  }), m)))), /*#__PURE__*/React.createElement("div", {
    className: "plan-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "plan-stat"
  }, /*#__PURE__*/React.createElement("small", null, "Referans"), /*#__PURE__*/React.createElement("b", null, plan.ref)), /*#__PURE__*/React.createElement("div", {
    className: "plan-stat"
  }, /*#__PURE__*/React.createElement("small", null, "Tahmini teslim"), /*#__PURE__*/React.createElement("b", null, plan.time)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: send
  }, "Fiyat\u0131 WhatsApp\u2019tan al"))) : null), /*#__PURE__*/React.createElement("div", {
    className: "hero2-phones-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero2-phones",
    ref: phRef
  }, phones.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "hp",
    key: i
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 238,
    statusBg: p.bg,
    statusTint: p.tint,
    glow: "rgba(0,120,160,.20)"
  }, p.el), /*#__PURE__*/React.createElement("b", null, p.t), /*#__PURE__*/React.createElement("small", null, p.s)))), /*#__PURE__*/React.createElement("div", {
    className: "wrap hp-nav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hp-hint"
  }, phones.length, " uygulama tipi \xB7 kayd\u0131rarak bak\u0131n"), /*#__PURE__*/React.createElement("div", {
    className: "scroll-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "snav",
    type: "button",
    onClick: () => slide(-1),
    "aria-label": "\xD6nceki uygulamalar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 20,
    stroke: "currentColor"
  })), /*#__PURE__*/React.createElement("button", {
    className: "snav",
    type: "button",
    onClick: () => slide(1),
    "aria-label": "Sonraki uygulamalar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(180deg)',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 20,
    stroke: "currentColor"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mod-chips"
  }, mods.map(m => /*#__PURE__*/React.createElement("span", {
    key: m
  }, m)), /*#__PURE__*/React.createElement("span", {
    className: "more"
  }, "+40 mod\xFCl")), /*#__PURE__*/React.createElement("div", {
    className: "hero2-callout"
  }, /*#__PURE__*/React.createElement("p", null, "Akl\u0131n\u0131zdaki uygulama", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-light"
  }, "b\xFCy\xFCk ihtimalle haz\u0131r.")), /*#__PURE__*/React.createElement("div", {
    className: "callout-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#cozumler",
    className: "btn btn-primary"
  }, "Ekranlar\u0131 dene"), /*#__PURE__*/React.createElement("a", {
    href: 'https://wa.me/' + WA_NUMBER,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn-ghost-dark"
  }, "WhatsApp\u2019tan yaz\u0131n"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-strip"
  }, /*#__PURE__*/React.createElement("a", {
    href: 'https://wa.me/' + WA_NUMBER,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-ico"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"
  }))), "WhatsApp\u2019tan yaz\u0131n"), /*#__PURE__*/React.createElement("span", {
    className: "cs-sep"
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://blueemberorg.com"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-ico"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12h8"
  }))), "blueemberorg.com"))));
}

/* =========================================================
   MÜŞTERİ LOGOLARI
   ========================================================= */
function ClientLogos() {
  const logos = [];
  for (let i = 1; i <= 18; i++) {
    if ([12, 14, 16].indexOf(i) === -1) logos.push('/MarkaLogo/' + i + '.png');
  }
  const row = logos.concat(logos);
  return /*#__PURE__*/React.createElement("section", {
    className: "clients",
    "aria-label": "Birlikte \xE7al\u0131\u015Ft\u0131\u011F\u0131m\u0131z markalar"
  }, /*#__PURE__*/React.createElement("p", null, "Bu markalar Blue Ember ile \xE7al\u0131\u015Ft\u0131"), /*#__PURE__*/React.createElement("div", {
    className: "marquee-mask"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee clients-row"
  }, row.map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: ""
  })))));
}

/* =========================================================
   TAAHHÜTLER
   ========================================================= */
function Commitments() {
  const items = [['code', 'Kaynak kod sizin', 'Proje sonunda tüm kaynak kod teslim edilir. İsterseniz başka bir ekiple devam edersiniz.'], ['store', 'Mağazada sizin adınız', 'Uygulama kendi Apple ve Google geliştirici hesabınızda, sizin markanızla yayınlanır.'], ['doc', 'Yazılı teslim tarihi', 'Kapsam, fiyat ve teslim tarihi ödeme öncesi sözleşmeye yazılır. Sürpriz maliyet yok.'], ['zero', 'Aylık zorunlu ücret yok', 'Ortak platformlar gibi abonelik yok. Bakım istersen ayrıca, istemezsen hiç.']];
  const ic = {
    code: /*#__PURE__*/React.createElement("path", {
      d: "m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"
    }),
    store: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "2.5",
      width: "12",
      height: "19",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.5 18.5h3"
    })),
    doc: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 3h8l4 4v14H6z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 3v4h4M9 12h6M9 16h6"
    })),
    zero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.6 18.4 18.4 5.6"
    }))
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "commit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap commit-grid"
  }, items.map(([k, t, d], i) => /*#__PURE__*/React.createElement("div", {
    className: "commit-card reveal",
    key: k,
    style: {
      transitionDelay: i * 60 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "commit-ico"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ic[k])), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d)))));
}

/* =========================================================
   UYGULAMA BAŞINA TAM ÖZELLİK LİSTESİ (rol bazlı)
   ========================================================= */
var FEATURE_SETS = [{
  k: 'taksi',
  label: 'Taksi / transfer',
  ref: 'Uber gibi',
  roles: [{
    t: 'Yolcu uygulaması',
    items: ['Telefon, Google ve Apple ile giriş (SMS doğrulama)', 'Araç tipi seçimi: taksi, konfor, VIP, minibüs', 'Yolculuk öncesi fiyat tahmini', 'Sürücüyü haritada canlı takip', 'Çok duraklı yolculuk', 'İleri tarihli rezervasyon ve havalimanı transferi', 'Kart, nakit ve cüzdan ile ödeme', 'Numara gizli arama ve uygulama içi mesaj', 'Sürücü profili: puan, araç, plaka', 'Acil durum (SOS) butonu ve konum paylaşımı', 'Kupon, davet kodu ve sadakat puanı', 'Yolculuk geçmişi ve dijital fiş', 'Sürücüyü puanlama ve yorum', 'İptal nedeni ve iptal ücreti kuralları']
  }, {
    t: 'Sürücü uygulaması',
    items: ['Belge yükleme ve onay süreci', 'Çevrim içi / çevrim dışı olma', 'Yolculuk isteği kabul / ret', 'Navigasyon ve en kısa rota', 'Yolcuyu arama ve mesajlaşma', 'Kazanç özeti: günlük, haftalık', 'Ödeme ve komisyon dökümü', 'Yoğun bölge haritası', 'Yolcu puanlama', 'Bildirimler ve duyurular']
  }, {
    t: 'Yönetim paneli',
    items: ['Canlı harita: tüm araçlar ve yolculuklar', 'Bölge çizme ve bölgeye özel fiyat', 'Araç tipi ve tarife yönetimi', 'Yoğun saat (surge) fiyat ayarı', 'Sürücü onay, belge ve performans takibi', 'Komisyon oranı ve ödeme raporları', 'Kupon ve kampanya yönetimi', 'Kurumsal müşteri ve fatura', 'Rol bazlı yetki ve işlem kaydı', 'Destek talepleri ve şikâyet yönetimi']
  }]
}, {
  k: 'yemek',
  label: 'Yemek siparişi',
  ref: 'Yemeksepeti gibi',
  roles: [{
    t: 'Müşteri uygulaması',
    items: ['Adres seçimi ve teslimat bölgesi kontrolü', 'Kategori, ürün arama ve filtre', 'Ürün seçenekleri: boy, ekstra malzeme, not', 'Sepet, kupon ve minimum sepet tutarı', 'Online ödeme ve kapıda ödeme', 'Sipariş durumu: hazırlanıyor, yolda, teslim', 'Kurye takibi (opsiyonel)', 'Tekrar sipariş (tek dokunuş)', 'Favori ürünler', 'Sadakat puanı ve kampanyalar', 'Gel-al ve masaya sipariş', 'Push bildirim ile kampanya']
  }, {
    t: 'Restoran ve kurye',
    items: ['Mutfak ekranı: yeni sipariş sesi', 'Siparişi kabul / ret ve hazırlık süresi', 'Ürünü stokta yok yapma', 'Şube bazlı menü ve fiyat', 'Kurye uygulaması: sipariş atama ve rota', 'Teslimat kanıtı ve tahsilat', 'Adisyon / POS entegrasyonu', 'Yazıcıdan fiş çıkarma']
  }, {
    t: 'Yönetim paneli',
    items: ['Menü, kategori ve ürün yönetimi', 'Şube ve teslimat bölgesi çizimi', 'Bölgeye göre teslimat ücreti', 'Kupon, indirim ve sadakat kuralları', 'Sipariş, ciro ve ürün raporları', 'Müşteri listesi ve segmentli bildirim', 'Çalışma saatleri ve tatil ayarı', 'Çoklu marka (cloud kitchen) desteği', 'Personel ve rol yetkileri']
  }]
}, {
  k: 'randevu',
  label: 'Randevu (kuaför, klinik)',
  ref: 'Kuaför, klinik',
  roles: [{
    t: 'Müşteri uygulaması',
    items: ['Hizmet ve uzman seçimi', 'Uygun gün ve saati görme', 'Tek dokunuşla randevu onayı', 'Kapora veya tam ödeme', 'SMS / WhatsApp / push hatırlatma', 'Randevu erteleme ve iptal', 'Geçmiş randevular ve fotoğraflar', 'Paket ve seans takibi', 'Sadakat puanı ve kampanyalar', 'Uzman ve işletmeyi puanlama']
  }, {
    t: 'Personel uygulaması',
    items: ['Günlük ve haftalık takvim', 'Randevu ekleme / taşıma', 'Müşteri kartı ve notlar', 'Gelmedi (no-show) işaretleme', 'Mola ve izin girişi', 'Prim ve performans özeti']
  }, {
    t: 'Yönetim paneli',
    items: ['Hizmet, süre ve fiyat yönetimi', 'Personel çalışma saatleri', 'Şube ve oda / koltuk yönetimi', 'Müşteri veri tabanı (CRM)', 'Toplu SMS ve kampanya', 'Ciro, doluluk ve personel raporları', 'Online ödeme ve kapora kuralları', 'Rol bazlı yetki']
  }]
}, {
  k: 'eticaret',
  label: 'E-ticaret',
  ref: 'Trendyol gibi',
  roles: [{
    t: 'Müşteri uygulaması',
    items: ['Kategori, filtre ve akıllı arama', 'Ürün varyantları: beden, renk, stok', 'Favoriler ve stok gelince haber ver', 'Sepet, kupon ve kargo bedava eşiği', 'Kart, taksit ve kapıda ödeme', 'Tek dokunuşla tekrar sipariş', 'Sipariş ve kargo takibi', 'İade / değişim talebi', 'Yorum ve fotoğraflı değerlendirme', 'Sepette unutulan ürün hatırlatma', 'Kişiye özel kampanya bildirimleri', 'Sadakat puanı ve davet kodu']
  }, {
    t: 'Mağaza entegrasyonu',
    items: ['Shopify, ikas, Ticimax, IdeaSoft, WooCommerce senkronu', 'Ürün, fiyat ve stok anlık eşitleme', 'Siparişler mevcut panelinize düşer', 'Pazaryeri stoklarıyla ortak defter', 'Kargo firması entegrasyonu', 'e-Fatura / e-Arşiv aktarımı']
  }, {
    t: 'Yönetim paneli',
    items: ['Banner, vitrin ve ana sayfa düzeni', 'Push kampanya ve segment yönetimi', 'Kupon ve indirim kuralları', 'Uygulama satış raporları', 'Müşteri listesi ve sepet analizi', 'Uygulamaya özel fiyat / kampanya', 'Rol bazlı yetki']
  }]
}, {
  k: 'kurye',
  label: 'Kurye takibi',
  ref: 'Getir gibi',
  roles: [{
    t: 'Müşteri uygulaması',
    items: ['Adres ve teslimat saati seçimi', 'Canlı kurye konumu ve tahmini varış', 'Kuryeyi arama / mesaj', 'Teslimat bildirimi ve fotoğraf', 'Ödeme ve fatura', 'Kurye puanlama']
  }, {
    t: 'Kurye uygulaması',
    items: ['Sipariş atama ve kabul', 'Rota ve navigasyon', 'Teslimat kanıtı: fotoğraf, imza, kod', 'Tahsilat ve gün sonu', 'Mesai başlat / bitir', 'Kazanç ve performans özeti']
  }, {
    t: 'Operasyon paneli',
    items: ['Canlı harita: tüm kuryeler', 'Otomatik / manuel sipariş atama', 'Bölge ve teslimat ücreti', 'Geciken siparişe uyarı', 'Kurye performans raporları', 'Müşteri bildirimi şablonları', 'API ile mağaza bağlantısı']
  }]
}, {
  k: 'emlak',
  label: 'Emlak & ilan',
  ref: 'Sahibinden gibi',
  roles: [{
    t: 'Kullanıcı uygulaması',
    items: ['İlan arama: konum, fiyat, oda, m²', 'Harita üzerinde ilanlar', 'Favori ve kayıtlı arama bildirimi', 'İlan sahibine mesaj / arama', 'Fotoğraf galerisi ve video tur', 'İlan verme ve düzenleme', 'Öne çıkarma (doping) satın alma', 'Kiralıkta tarih ve rezervasyon']
  }, {
    t: 'Emlakçı / ilan sahibi',
    items: ['Kurumsal profil ve vitrin', 'Toplu ilan yükleme', 'Gelen talepler ve mesajlar', 'İlan görüntülenme istatistikleri', 'Paket ve üyelik yönetimi']
  }, {
    t: 'Yönetim paneli',
    items: ['İlan onay ve moderasyon', 'Kategori ve özellik alanları', 'Doping ve paket fiyatları', 'Şikâyet ve sahte ilan yönetimi', 'Gelir ve ilan raporları', 'Banner / reklam alanları']
  }]
}, {
  k: 'bayi',
  label: 'Bayi / B2B sipariş',
  ref: 'Toptancılar için',
  roles: [{
    t: 'Bayi uygulaması',
    items: ['Bayiye özel fiyat ve iskonto', 'Barkod ile hızlı ürün ekleme', 'Minimum sipariş ve koli adedi', 'Cari bakiye ve ekstre', 'Geçmiş siparişi tekrarla', 'Sipariş durumu ve sevkiyat', 'Kampanya ve yeni ürün bildirimi']
  }, {
    t: 'Plasiyer uygulaması',
    items: ['Bayi adına sipariş girme', 'Ziyaret planı ve rota', 'Tahsilat girişi', 'Hedef ve performans takibi']
  }, {
    t: 'Yönetim paneli',
    items: ['Fiyat listeleri ve bayi grupları', 'Sipariş onay akışı', 'ERP (Logo, Mikro) entegrasyonu', 'Stok ve depo görünümü', 'Satış ve bayi raporları', 'Rol bazlı yetki']
  }]
}, {
  k: 'kurs',
  label: 'Online kurs',
  ref: 'Udemy gibi',
  roles: [{
    t: 'Öğrenci uygulaması',
    items: ['Kurs vitrini ve arama', 'Video dersler (çevrimdışı izleme)', 'İlerleme ve kaldığı yerden devam', 'Quiz, ödev ve sertifika', 'Canlı ders katılımı', 'Soru-cevap ve yorum', 'Satın alma ve abonelik']
  }, {
    t: 'Eğitmen paneli',
    items: ['Kurs ve bölüm oluşturma', 'Video ve doküman yükleme', 'Öğrenci soruları', 'Kazanç ve satış raporu']
  }, {
    t: 'Yönetim paneli',
    items: ['Kategori ve kurs onayı', 'Fiyat, kupon ve kampanya', 'Eğitmen komisyonları', 'Öğrenci ve gelir raporları', 'Video koruma ayarları']
  }]
}];
function FeatureItem({
  text
}) {
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: "#3d89c1",
    sw: 2.6
  }), text);
}
function AppFeatures() {
  const [tab, setTab] = React.useState(0);
  const [open, setOpen] = React.useState({});
  const set = FEATURE_SETS[tab];
  const LIMIT = 7;
  return /*#__PURE__*/React.createElement("section", {
    className: "section feats",
    id: "ozellikler"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "\xD6zellik listesi",
    title: "Pakette tam olarak",
    grad: "neler var?",
    lead: "Uygulama tipini se\xE7in. M\xFC\u015Fteri uygulamas\u0131, personel / s\xFCr\xFCc\xFC uygulamas\u0131 ve y\xF6netim panelinde gelen \xF6zelliklerin tamam\u0131 a\u015Fa\u011F\u0131da."
  }), /*#__PURE__*/React.createElement("div", {
    className: "feat-tabs",
    role: "tablist",
    "aria-label": "Uygulama tipi"
  }, FEATURE_SETS.map((f, i) => /*#__PURE__*/React.createElement("button", {
    key: f.k,
    type: "button",
    role: "tab",
    "aria-selected": tab === i,
    className: 'pchip' + (tab === i ? ' on' : ''),
    onClick: () => {
      setTab(i);
      setOpen({});
    }
  }, f.label, " ", /*#__PURE__*/React.createElement("span", {
    className: "feat-ref"
  }, f.ref)))), /*#__PURE__*/React.createElement("div", {
    className: "feat-grid"
  }, set.roles.map((r, ri) => {
    const key = set.k + ri;
    const showAll = !!open[key];
    const list = showAll ? r.items : r.items.slice(0, LIMIT);
    const rest = r.items.length - LIMIT;
    return /*#__PURE__*/React.createElement("div", {
      className: "feat-col",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "feat-head"
    }, /*#__PURE__*/React.createElement("h3", null, r.t), /*#__PURE__*/React.createElement("span", null, r.items.length, " \xF6zellik")), /*#__PURE__*/React.createElement("ul", null, list.map(x => /*#__PURE__*/React.createElement(FeatureItem, {
      key: x,
      text: x
    }))), rest > 0 ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "feat-more",
      "aria-expanded": showAll,
      onClick: () => setOpen(o => Object.assign({}, o, {
        [key]: !showAll
      }))
    }, showAll ? 'Daha az göster' : 'Tümünü gör (+' + rest + ')') : null);
  })), /*#__PURE__*/React.createElement("p", {
    className: "feat-note"
  }, "Listede olmayan bir \xF6zellik mi laz\u0131m? ", /*#__PURE__*/React.createElement("a", {
    href: "#teklif-ust"
  }, "Yaz\u0131n"), ", projeye ekleyelim. Burada olmayan tiplerin listesini WhatsApp\u2019tan g\xF6nderiyoruz.")));
}

/* =========================================================
   HIZLI CEVAPLAR (kısa tanım blokları)
   ========================================================= */
var QUICK_ANSWERS = [['White-label mobil uygulama nedir?', 'Hazır ve test edilmiş bir uygulama altyapısının sizin logonuz, renkleriniz ve içeriğinizle yeniden markalanıp kendi App Store ve Google Play hesabınızda yayınlanmasıdır. Sıfırdan yazılıma göre daha hızlı ve daha düşük maliyetlidir; uygulamada başka bir firmanın adı geçmez.'], ['“Uber gibi” veya “Yemeksepeti gibi” uygulama yaptırmak ne demek?', 'Bilinen bir uygulamanın iş modelini (araç çağırma, yemek siparişi, ilan) kendi markanızla kurmaktır. Yolcu / müşteri uygulaması, sürücü / kurye uygulaması ve yönetim paneli birlikte teslim edilir. Marka, tasarım ve kod size aittir.'], ['Kendi uygulamam mı, ortak platform mu?', 'Ortak platformlarda müşteri platformun uygulamasını indirir, aylık ücret ödersiniz ve müşteri verisi platformda kalır. Kendi uygulamanızda müşteri sizin markanızı görür, komisyon ödemezsiniz, veri ve kaynak kod sizde kalır.'], ['Mobil uygulama yaptırmak ne kadar sürer?', 'Hazır modüllerle çalışan, markalı bir uygulama yaklaşık 4 haftada mağazada olur. Özel akışlar ve ERP / CRM entegrasyonları içeren projelerde süre keşif görüşmesinde netleşir ve sözleşmeye yazılır.']];
function QuickAnswers() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section qa",
    id: "hizli-cevap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "H\u0131zl\u0131 cevap",
    title: "K\u0131saca",
    grad: "bilmeniz gerekenler"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qa-grid"
  }, QUICK_ANSWERS.map(([q, a]) => /*#__PURE__*/React.createElement("article", {
    className: "qa-card reveal",
    key: q
  }, /*#__PURE__*/React.createElement("span", {
    className: "qa-tag"
  }, "H\u0131zl\u0131 cevap"), /*#__PURE__*/React.createElement("h3", null, q), /*#__PURE__*/React.createElement("p", null, a))))));
}

/* =========================================================
   SEKTÖRLER — "Her ölçekte işletme için"
   ========================================================= */
function Sectors() {
  const S = {
      t: 'E-Sipariş',
      c: 'teal'
    },
    E = {
      t: 'E-Ticaret',
      c: 'orange'
    },
    R = {
      t: 'Randevu',
      c: 'blue'
    },
    H = {
      t: 'Hizmet',
      c: 'violet'
    };
  const items = [['bag', 'Restoranlar', 'Komisyonsuz kendi sipariş kanalınız. Menü, şube ve teslimat tek panelden.', S], ['cart', 'Marketler', 'Sipariş toplama, stok takibi ve teslimat bölgesi yönetimi.', S], ['flame', 'Su & İçecek', 'Damacana ve içecek teslimatı. Abonelik ve tek seferlik sipariş.', S], ['star', 'Kafeler', 'Hızlı sipariş, masa / paket ayrımı ve sadakat puanı.', S], ['grid', 'Cloud kitchen', 'Çok markalı mutfaklar için tek uygulama, ayrı menüler.', S], ['heart', 'Butikler', 'Varyant, beden tablosu, kombin önerisi ve yeni sezon bildirimi.', E], ['card', 'Elektronik mağazaları', 'Taksit, karşılaştırma ve stok bildirimi ile satış.', E], ['bag', 'E-ticaret firmaları', 'Shopify, ikas, Ticimax veya kendi altyapınız uygulamaya taşınır.', E], ['chart', 'Toptancılar', 'Minimum sipariş, bayiye özel fiyat ve cari takip.', E], ['user', 'B2B firmalar', 'Kurumsal müşteri, teklif ve sipariş onay akışları.', E], ['calendar', 'Kuaför & güzellik', 'Ortak platformda değil, kendi uygulamanızda randevu.', R], ['activity', 'Klinik & estetik', 'Randevu, hasta takibi, hatırlatma ve CRM paneli.', R], ['map', 'Taksi & transfer', 'Yolcu, sürücü ve yönetim uygulamaları bir arada.', H], ['home', 'Emlak & kiralama', 'İlan, filtre, harita ve mesajlaşma ile kendi pazar yeriniz.', H], ['nav2', 'Araç kiralama', 'Online rezervasyon, depozito, belge yükleme ve filo paneli.', H]];
  return /*#__PURE__*/React.createElement("section", {
    className: "section sectors",
    id: "sektorler"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Sekt\xF6rler",
    title: "Her \xF6l\xE7ekte",
    grad: "i\u015Fletme i\xE7in",
    lead: "Sipari\u015F alan, randevu veren, teslimat yapan veya online sat\u0131\u015F yapan her i\u015Fletme kendi markal\u0131 uygulamas\u0131n\u0131 tek panelden y\xF6netebilir."
  }), /*#__PURE__*/React.createElement("div", {
    className: "sector-grid"
  }, items.map(([ic, t, d, tag], i) => /*#__PURE__*/React.createElement("div", {
    className: "sector reveal",
    key: t,
    style: {
      transitionDelay: i % 5 * 50 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sector-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sector-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    stroke: "#0d1b22"
  })), /*#__PURE__*/React.createElement("span", {
    className: 'sector-tag ' + tag.c
  }, tag.t)), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}

/* =========================================================
   WHITE-LABEL
   ========================================================= */
function WhiteLabel() {
  const yours = ['App Store ve Google Play’de uygulama adı', 'Uygulama ikonu ve açılış ekranı', 'Renkler, logo ve tüm arayüz', 'Mağaza açıklaması, anahtar kelimeler, ekran görüntüleri', 'Bildirim, SMS ve e-posta gönderici adı', 'Gizlilik politikası ve kullanım şartları (sizin metinleriniz)', 'Yönetim paneli alan adı'];
  const not = ['Uygulamanın hiçbir ekranında Blue Ember adı', '“Powered by” ibaresi', 'Panelde filigran', 'Teslimden sonra verilerinize erişim (siz izin vermedikçe)'];
  return /*#__PURE__*/React.createElement("section", {
    className: "section wl",
    id: "white-label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wl-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "White-label"), /*#__PURE__*/React.createElement("h2", {
    className: "h-sec",
    style: {
      marginTop: 16
    }
  }, "Uygulamada sadece ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "sizin ad\u0131n\u0131z"), " var"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 16
    }
  }, "M\xFC\u015Fterileriniz sizin uygulaman\u0131z\u0131 indirir, sizin ikonunuzu g\xF6r\xFCr, bildirimleri sizden al\u0131r. Ortak platformlardaki gibi ba\u015Fka bir markan\u0131n i\xE7inde kaybolmazs\u0131n\u0131z."), /*#__PURE__*/React.createElement("div", {
    className: "wl-lists"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Sizin kontrol\xFCn\xFCzde"), /*#__PURE__*/React.createElement("ul", null, yours.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    stroke: "#4fb3c0",
    sw: 2.6
  }), x)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Bizde kalmayan"), /*#__PURE__*/React.createElement("ul", {
    className: "neg"
  }, not.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, /*#__PURE__*/React.createElement("span", {
    className: "x"
  }, "\xD7"), x)))))), /*#__PURE__*/React.createElement("div", {
    className: "wl-stage reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wl-phone"
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 260,
    statusBg: "#ffffff",
    statusTint: "dark",
    glow: "rgba(0,164,209,.35)"
  }, /*#__PURE__*/React.createElement(ShopApp, null))), /*#__PURE__*/React.createElement("div", {
    className: "wl-badge b1"
  }, /*#__PURE__*/React.createElement("span", null, "Aa"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Sizin logonuz"), /*#__PURE__*/React.createElement("small", null, "Ma\u011Fazada ve uygulamada"))), /*#__PURE__*/React.createElement("div", {
    className: "wl-badge b2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Sizin renkleriniz"), /*#__PURE__*/React.createElement("small", null, "T\xFCm ekranlarda"))))));
}

/* =========================================================
   PAKET İÇERİĞİ
   ========================================================= */
function Package() {
  const items = [['user', 'Müşteri uygulaması', 'iOS ve Android, sizin markanızla. Tek kod tabanı, iki mağaza.'], ['grid', 'Yönetim paneli', 'Ürün, sipariş, randevu, kullanıcı ve kampanya yönetimi tarayıcıdan.'], ['nav2', 'Personel / kurye uygulaması', 'Gerekiyorsa sürücü, kurye veya personel için ayrı uygulama.'], ['book', 'Kaynak kod', 'Şifresiz, eksiksiz kaynak kod ve teknik dokümantasyon teslim edilir.'], ['activity', 'Sunucu kurulumu', 'Sunucu, veritabanı, SSL ve bildirim altyapısını biz kuruyoruz.'], ['star', 'Mağaza yayını', 'App Store ve Google Play başvurusu sizin hesabınızdan, onaya kadar.'], ['chat', 'Yayın sonrası destek', 'Hata düzeltme, mağaza ve ödeme sorunları için destek. Bakım paketi opsiyonel.'], ['card', 'Ödeme ve bildirim', 'iyzico / PayTR ile ödeme, push bildirim ve kampanya altyapısı.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section pack",
    id: "paket"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Teslim edilenler",
    title: "Bir uygulama i\u015Fletmek i\xE7in gereken her \u015Fey",
    grad: "tek pakette",
    lead: "\xC7o\u011Fu firma sadece yaz\u0131l\u0131m\u0131 verip gider. Biz uygulamay\u0131, paneli, sunucuyu ve ma\u011Faza yay\u0131n\u0131n\u0131 birlikte teslim ediyoruz."
  }), /*#__PURE__*/React.createElement("div", {
    className: "pack-grid"
  }, items.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    className: "pack-card reveal",
    key: t,
    style: {
      transitionDelay: i % 4 * 60 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pack-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    stroke: "#fff"
  })), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}

/* =========================================================
   ENTEGRASYONLAR — sekmeli kartlar
   ========================================================= */
var INTEG_GROUPS = [{
  k: 'altyapi',
  label: 'E-ticaret altyapısı',
  items: [['Shopify', 'SH', '#95BF47', '#fff', 'Ürün, stok ve siparişler mağazanızla çift yönlü eşitlenir.', ['Katalog', 'Stok', 'Sipariş'], 1], ['ikas', 'ik', '#111111', '#fff', 'ikas mağazanız uygulamaya taşınır, kampanyalar otomatik gelir.', ['Katalog', 'Fiyat', 'Sipariş'], 1], ['Ticimax', 'Tx', '#E30613', '#fff', 'Katalog ve sipariş akışı mevcut panelinizden yönetilir.', ['Katalog', 'Sipariş'], 0], ['IdeaSoft', 'İS', '#1F6FEB', '#fff', 'Mevcut mağaza verisi uygulamaya bağlanır.', ['Katalog', 'Sipariş'], 0], ['Entegra', 'En', '#0E7C86', '#fff', 'Entegra üzerinden ürün ve sipariş senkronu.', ['Katalog', 'Stok'], 0], ['WooCommerce', 'Wo', '#7F54B3', '#fff', 'WordPress mağazanız için REST tabanlı bağlantı.', ['Katalog', 'Sipariş'], 1]]
}, {
  k: 'pazaryeri',
  label: 'Pazaryerleri',
  items: [['Trendyol', 'Ty', '#F27A1A', '#fff', 'Stok ve fiyat uygulamanızla aynı defterde tutulur.', ['Stok', 'Fiyat', 'Sipariş'], 0], ['Hepsiburada', 'Hb', '#FF6000', '#fff', 'Listeler ve stok seviyeleri eşitlenir.', ['Stok', 'Sipariş'], 0], ['n11', 'n11', '#5B2D90', '#fff', 'Gelen siparişler tek panelde toplanır.', ['Sipariş'], 0], ['Amazon TR', 'Am', '#232F3E', '#FF9900', 'Katalog ve stok bağlantısı.', ['Katalog', 'Stok'], 0]]
}, {
  k: 'odeme',
  label: 'Ödeme',
  items: [['iyzico', 'iy', '#1E64FF', '#fff', 'Kart, taksit ve 3D Secure ile uygulama içi ödeme.', ['Kart', 'Taksit'], 1], ['PayTR', 'PT', '#00B3E3', '#fff', 'Sanal POS, link ile ödeme ve abonelik.', ['Kart', 'Abonelik'], 1], ['Param', 'Pa', '#00A859', '#fff', 'Alternatif sanal POS bağlantısı.', ['Kart'], 0], ['Stripe', 'St', '#635BFF', '#fff', 'Yurt dışı satış ve çoklu para birimi.', ['Kart', 'Döviz'], 1], ['Apple Pay', '', '#000000', '#fff', 'Tek dokunuşla ödeme (iOS).', ['Cüzdan'], 0], ['Google Pay', 'G', '#ffffff', '#4285F4', 'Tek dokunuşla ödeme (Android).', ['Cüzdan'], 0]]
}, {
  k: 'mesaj',
  label: 'Mesaj & bildirim',
  items: [['WhatsApp Business', 'WA', '#25D366', '#fff', 'Sipariş ve randevu bildirimleri WhatsApp’tan.', ['Bildirim', 'Destek'], 1], ['Push bildirim', 'FCM', '#FFA000', '#fff', 'Segmentli kampanya, sepet hatırlatma, otomasyon.', ['Kampanya', 'Otomasyon'], 1], ['SMS (Netgsm vb.)', 'SMS', '#0B5394', '#fff', 'OTP doğrulama ve hatırlatma SMS’leri.', ['OTP', 'Hatırlatma'], 1], ['E-posta', '@', '#0d1b22', '#2fe0cf', 'Sipariş onayı ve bülten akışları.', ['İşlem', 'Bülten'], 1]]
}, {
  k: 'kargo',
  label: 'Kargo & harita',
  items: [['Yurtiçi Kargo', 'Yİ', '#1E3A8A', '#FFD200', 'Gönderi oluşturma ve takip numarası.', ['Gönderi', 'Takip'], 0], ['Aras Kargo', 'Ar', '#E2001A', '#fff', 'Otomatik barkod ve durum takibi.', ['Gönderi', 'Takip'], 0], ['MNG Kargo', 'MNG', '#F7A600', '#1b1b1b', 'Gönderi ve teslimat durumu.', ['Takip'], 0], ['Google Maps', 'GM', '#34A853', '#fff', 'Adres, rota, mesafe ve canlı konum.', ['Harita', 'Rota'], 1]]
}, {
  k: 'erp',
  label: 'ERP & e-belge',
  items: [['Logo', 'Lg', '#C8102E', '#fff', 'Cari, stok ve sipariş aktarımı.', ['Cari', 'Stok'], 0], ['Mikro', 'Mk', '#0057B8', '#fff', 'Bayi siparişleri doğrudan ERP’ye düşer.', ['Sipariş', 'Cari'], 0], ['Paraşüt', 'Pş', '#FF5A00', '#fff', 'Siparişten otomatik e-fatura / e-arşiv.', ['e-Fatura'], 0]]
}];
var TAB_ICONS = {
  altyapi: 'cart',
  pazaryeri: 'bag',
  odeme: 'card',
  mesaj: 'chat',
  kargo: 'map',
  erp: 'book'
};
function Integrations() {
  const [tab, setTab] = React.useState(0);
  const [q, setQ] = React.useState('');
  const query = q.trim().toLocaleLowerCase('tr');
  const list = query ? INTEG_GROUPS.reduce((a, g) => a.concat(g.items.filter(it => it[0].toLocaleLowerCase('tr').indexOf(query) > -1).map(it => ({
    it,
    g: g.label
  }))), []) : INTEG_GROUPS[tab].items.map(it => ({
    it,
    g: INTEG_GROUPS[tab].label
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "section integ",
    id: "entegrasyonlar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Entegrasyonlar",
    title: "Kulland\u0131\u011F\u0131n\u0131z sistemlere",
    grad: "ba\u011Flan\u0131r",
    lead: "Ma\u011Fazan\u0131z, \xF6deme altyap\u0131n\u0131z, kargonuz ve muhasebeniz uygulamayla ayn\u0131 defterde \xE7al\u0131\u015F\u0131r."
  }), /*#__PURE__*/React.createElement("div", {
    className: "itabs-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itabs",
    role: "tablist",
    "aria-label": "Entegrasyon kategorileri"
  }, INTEG_GROUPS.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: g.k,
    role: "tab",
    type: "button",
    "aria-selected": !query && tab === i,
    className: 'itab' + (!query && tab === i ? ' on' : ''),
    onClick: () => {
      setTab(i);
      setQ('');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: TAB_ICONS[g.k],
    size: 19,
    stroke: "currentColor"
  }), g.label, " ", /*#__PURE__*/React.createElement("span", null, g.items.length)))), /*#__PURE__*/React.createElement("label", {
    className: "isearch"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    stroke: "#5a6781"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Ba\u011Flant\u0131 ara\u2026",
    "aria-label": "Ba\u011Flant\u0131 ara"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icard-grid"
  }, list.map(({
    it,
    g
  }) => /*#__PURE__*/React.createElement("div", {
    className: "icard",
    key: it[0],
    style: {
      background: 'radial-gradient(120% 90% at 100% 0%, ' + (it[2] === '#ffffff' ? '#4285F4' : it[2]) + '1f 0%, rgba(255,255,255,0) 60%), #fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "icard-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ilogo",
    style: {
      background: it[2],
      color: it[3],
      boxShadow: it[2] === '#ffffff' ? 'inset 0 0 0 1px #e3e8ee' : 'none'
    }
  }, it[1] || /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.1-1.2 2.9-2.4.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.5-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icard-title"
  }, /*#__PURE__*/React.createElement("h3", null, it[0]), /*#__PURE__*/React.createElement("small", null, g)), /*#__PURE__*/React.createElement("span", {
    className: 'istatus' + (it[6] ? ' ready' : '')
  }, it[6] ? 'Hazır modül' : 'Projeye özel')), /*#__PURE__*/React.createElement("p", null, it[4]), /*#__PURE__*/React.createElement("div", {
    className: "icard-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icloud"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5H7z"
  })), "API"), /*#__PURE__*/React.createElement("div", {
    className: "itags"
  }, it[5].map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t)))))), !list.length ? /*#__PURE__*/React.createElement("p", {
    className: "inone"
  }, "Arad\u0131\u011F\u0131n\u0131z ba\u011Flant\u0131 listede yok mu? ", /*#__PURE__*/React.createElement("a", {
    href: "#teklif"
  }, "Bize yaz\u0131n"), ", projeye \xF6zel ekleyelim.") : null)));
}

/* =========================================================
   ENTEGRASYON DUVARI — kayan logo kartları
   ========================================================= */
function IntegrationWall() {
  const rows = [[['Google Analytics', '#F9AB00', 'GA'], ['Meta Pixel', '#0866FF', 'M'], ['Firebase', '#FFA000', 'Fb'], ['OneSignal', '#E54B4D', 'OS'], ['Mailchimp', '#FFE01B', 'Mc'], ['Stripe', '#635BFF', 'St'], ['iyzico', '#1E64FF', 'iy'], ['PayTR', '#00B3E3', 'PT']], [['Shopify', '#95BF47', 'SH'], ['ikas', '#111111', 'ik'], ['Ticimax', '#E30613', 'Tx'], ['WooCommerce', '#7F54B3', 'Wo'], ['Trendyol', '#F27A1A', 'Ty'], ['Hepsiburada', '#FF6000', 'Hb'], ['Google Maps', '#34A853', 'GM'], ['WhatsApp', '#25D366', 'WA']], [['Logo', '#C8102E', 'Lg'], ['Mikro', '#0057B8', 'Mk'], ['Paraşüt', '#FF5A00', 'Pş'], ['Yurtiçi Kargo', '#1E3A8A', 'Yİ'], ['Aras Kargo', '#E2001A', 'Ar'], ['Netgsm', '#0B5394', 'Ng'], ['Apple Pay', '#000000', 'AP'], ['Google Pay', '#4285F4', 'GP']]];
  return /*#__PURE__*/React.createElement("section", {
    className: "iwall",
    "aria-label": "Ba\u011Fland\u0131\u011F\u0131m\u0131z servisler"
  }, rows.map((r, ri) => {
    const doubled = r.concat(r);
    return /*#__PURE__*/React.createElement("div", {
      className: "marquee-mask",
      key: ri
    }, /*#__PURE__*/React.createElement("div", {
      className: 'marquee iwall-row' + (ri === 1 ? ' rev' : '')
    }, doubled.map(([n, c, s], i) => /*#__PURE__*/React.createElement("div", {
      className: "ipill",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: c,
        color: c === '#FFE01B' || c === '#F9AB00' ? '#1b1b1b' : '#fff'
      }
    }, s), n))));
  }));
}

/* =========================================================
   SÜREÇ
   ========================================================= */
function Process() {
  const steps = [['1. hafta', 'Keşif ve sabit fiyat', '30 dakikalık görüşme. Modül listesi, fiyat ve teslim tarihi netleşir, sözleşme imzalanır.', 'Kapsam dokümanı + teslim tarihi'], ['2. hafta', 'Marka ve tasarım', 'Logonuz, renkleriniz ve içeriğinizle ekranlar hazırlanır. Onayınız olmadan geliştirmeye geçilmez.', 'Tıklanabilir prototip'], ['3. hafta', 'Kurulum ve entegrasyon', 'Sunucu, panel, ödeme, bildirim ve altyapı bağlantıları kurulur.', 'Telefonunuzda test sürümü'], ['4. hafta', 'Test ve mağaza yayını', 'Birlikte test ediyoruz; App Store ve Google Play başvurusu sizin hesabınızdan yapılır.', 'Mağazada canlı uygulama'], ['Sonrası', 'Destek ve büyüme', 'Hata düzeltme, mağaza güncellemeleri, yeni modüller ve kampanya desteği.', 'Kaynak kod + dokümantasyon']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section process",
    id: "surec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "S\xFCre\xE7",
    title: "Fikirden ma\u011Fazaya",
    grad: "ad\u0131m ad\u0131m",
    lead: "Haz\u0131r mod\xFCllerle \xE7al\u0131\u015Fan bir uygulama yakla\u015F\u0131k 4 haftada yay\u0131nda. \xD6zel ak\u0131\u015Flar ke\u015Fif sonunda takvime yaz\u0131l\u0131r."
  }), /*#__PURE__*/React.createElement("div", {
    className: "steps-line"
  }, steps.map(([w, t, d, o], i) => /*#__PURE__*/React.createElement("div", {
    className: "pstep reveal",
    key: t,
    style: {
      transitionDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pnum"
  }, i + 1), /*#__PURE__*/React.createElement("small", null, w), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d), /*#__PURE__*/React.createElement("div", {
    className: "pout"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    stroke: "#0a90b8",
    sw: 2.6
  }), o))))));
}

/* =========================================================
   GELİR MODELİ
   ========================================================= */
function Revenue() {
  const items = [['01', 'Tekrar eden sipariş', 'Push bildirim ve kayıtlı sepetle müşteri tekrar gelir. Pazaryeri komisyonu ödemezsiniz.', 'Komisyonsuz satış'], ['02', 'Komisyon / hizmet bedeli', 'Taksi, kurye ve ilan uygulamalarında her işlemden yüzde veya sabit bedel alın.', 'İşlem başı'], ['03', 'Abonelik ve üyelik', 'Premium üyelik, aylık paket, eğitim aboneliği. Düzenli gelir.', 'Aylık gelir'], ['04', 'Sadakat ve kupon', 'Puan, kupon ve davet kodu ile müşteriyi uygulamada tutun.', 'Elde tutma'], ['05', 'Öne çıkarma ve reklam', 'İlan ve satıcılar için doping, vitrin ve banner alanları.', 'Ek gelir']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section revenue"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Gelir modeli",
    title: "Uygulaman\u0131z size nas\u0131l",
    grad: "kazand\u0131r\u0131r?",
    lead: "Modellerin hepsi y\xF6netim panelinden a\xE7\u0131l\u0131p kapan\u0131r. \u0130\u015Finize uyan\u0131 se\xE7ersiniz."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rev-grid"
  }, items.map(([n, t, d, tag], i) => /*#__PURE__*/React.createElement("div", {
    className: "rev-card reveal",
    key: t,
    style: {
      transitionDelay: i * 60 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rev-num"
  }, n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d), /*#__PURE__*/React.createElement("span", {
    className: "rev-tag"
  }, tag))))));
}

/* =========================================================
   KARŞILAŞTIRMA
   ========================================================= */
function Compare() {
  const cols = ['Blue Ember', 'Ortak platform', 'Freelancer', 'Büyük ajans'];
  const rows = [['Mağazada kimin adı?', ['Sizin markanız', 1], ['Platformun adı', 0], ['Sizin markanız', 1], ['Sizin markanız', 1]], ['Kaynak kod', ['Size teslim', 1], ['Yok', 0], ['Belirsiz', 0], ['Çoğu zaman ek ücretle', 0]], ['Aylık zorunlu ücret', ['Yok', 1], ['Var', 0], ['Yok', 1], ['Genelde var', 0]], ['Teslim süresi', ['~4 hafta, yazılı', 1], ['Hemen', 1], ['Belirsiz', 0], ['3–6 ay', 0]], ['Hazır modül', ['40+ modül', 1], ['Var, kısıtlı', 1], ['Yok', 0], ['Sıfırdan', 0]], ['Müşteri verisi', ['Sizin sunucunuzda', 1], ['Platformda', 0], ['Değişken', 0], ['Sizde', 1]], ['Mağaza yayını', ['Dahil', 1], ['Platform yapar', 1], ['Genelde yok', 0], ['Dahil', 1]], ['Fiyat', ['Sabit, önceden', 1], ['Abonelik', 0], ['Düşük, riskli', 0], ['Yüksek', 0]]];
  return /*#__PURE__*/React.createElement("section", {
    className: "section compare",
    id: "karsilastirma"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Kar\u015F\u0131la\u015Ft\u0131rma",
    title: "Neden ortak platform",
    grad: "de\u011Fil?",
    lead: "Haz\u0131r sipari\u015F ve randevu platformlar\u0131 m\xFC\u015Fterinizi kendi uygulamalar\u0131na \xE7eker. Biz sizin markan\u0131z\u0131 ma\u011Fazaya \xE7\u0131kar\u0131yoruz."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cmp-wrap reveal"
  }, /*#__PURE__*/React.createElement("table", {
    className: "cmp"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Kriter"), cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
    scope: "col",
    key: c,
    className: i === 0 ? 'me' : ''
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, r[0]), r.slice(1).map(([v, ok], i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    className: i === 0 ? 'me' : ''
  }, /*#__PURE__*/React.createElement("span", {
    className: 'cm ' + (ok ? 'ok' : 'no')
  }, ok ? '✓' : '✕'), v)))))))));
}

/* =========================================================
   PAKETLER
   ========================================================= */
function Plans() {
  const plans = [{
    n: 'Hazır uygulama',
    s: 'Sektörünüze uygun hazır uygulama, sizin markanızla.',
    t: '2–4 hafta',
    pop: false,
    f: ['iOS + Android', 'Logo, renk, ikon ve mağaza görselleri', 'Yönetim paneli', 'Mağaza yayını sizin hesabınızda', 'Kaynak kod teslimi']
  }, {
    n: 'Markalı uygulama',
    s: 'Mevcut sitenize veya altyapınıza bağlı tam uygulama.',
    t: '~4 hafta',
    pop: true,
    f: ['Hazır uygulamadaki her şey', 'Altyapı senkronu (Shopify, ikas…)', 'Ödeme ve push kampanyaları', 'Personel / kurye uygulaması (gerekirse)', 'Yayın sonrası destek']
  }, {
    n: 'Özel geliştirme',
    s: 'B2B, CRM, kiralama gibi size özel akışlar.',
    t: 'Keşifte netleşir',
    pop: false,
    f: ['Kapsam dokümanı ve sabit fiyat', 'Tıklanabilir prototip', 'ERP / CRM entegrasyonları', 'Çoklu panel ve rol yetkileri', 'Bakım paketi opsiyonel']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section plans",
    id: "paketler"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Paketler",
    title: "Net kapsam,",
    grad: "s\xFCrpriz yok",
    lead: "Tek seferlik \xF6deme. Fiyat, se\xE7ti\u011Finiz mod\xFCllere g\xF6re 24 saat i\xE7inde yaz\u0131l\u0131 olarak g\xF6nderilir."
  }), /*#__PURE__*/React.createElement("div", {
    className: "plan-grid"
  }, plans.map(p => /*#__PURE__*/React.createElement("div", {
    className: 'plan reveal' + (p.pop ? ' pop' : ''),
    key: p.n
  }, p.pop ? /*#__PURE__*/React.createElement("span", {
    className: "pop-badge"
  }, "En \xE7ok tercih edilen") : null, /*#__PURE__*/React.createElement("h3", null, p.n), /*#__PURE__*/React.createElement("p", {
    className: "plan-sub"
  }, p.s), /*#__PURE__*/React.createElement("div", {
    className: "plan-time"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 17,
    stroke: "currentColor"
  }), p.t), /*#__PURE__*/React.createElement("ul", null, p.f.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: p.pop ? '#2fe0cf' : '#0a90b8',
    sw: 2.6
  }), x))), /*#__PURE__*/React.createElement("a", {
    href: "#teklif",
    className: 'btn ' + (p.pop ? 'btn-primary' : 'btn-dark')
  }, "Net fiyat al"))))));
}

/* =========================================================
   HİZMETLER
   ========================================================= */
function Services() {
  const svc = [{
    ic: 'grid',
    t: 'Native & Cross-Platform',
    d: 'iOS, Android, React Native ve Flutter ile tek kod tabanından yüksek performanslı uygulamalar.'
  }, {
    ic: 'heart',
    t: 'UI/UX Tasarım',
    d: 'Kullanıcıyı merkeze alan, marka diline uygun, akıcı ve modern arayüz tasarımları.'
  }, {
    ic: 'chart',
    t: 'Yapay Zeka Entegrasyonu',
    d: 'Öneri motorları, sohbet botları ve akıllı otomasyonla iş süreçlerinizi hızlandırın.'
  }, {
    ic: 'card',
    t: 'Backend & API',
    d: 'Ölçeklenebilir altyapı, güvenli API mimarisi, ödeme ve bildirim entegrasyonları.'
  }, {
    ic: 'activity',
    t: 'Bakım & Destek',
    d: 'Yayın sonrası izleme, performans iyileştirme ve teknik destek.'
  }, {
    ic: 'compass',
    t: 'Yayınlama & ASO',
    d: 'App Store ve Google Play yayını, mağaza optimizasyonu ve büyüme stratejisi.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "hizmetler"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Hizmetlerimiz",
    title: "U\xE7tan uca",
    grad: "mobil geli\u015Ftirme",
    lead: "Fikir a\u015Famas\u0131ndan ma\u011Faza yay\u0131n\u0131na kadar t\xFCm s\xFCreci tek \xE7at\u0131 alt\u0131nda y\xF6netiyoruz."
  }), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, svc.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "svc reveal",
    key: i,
    style: {
      transitionDelay: `${i % 3 * 70}ms`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic,
    size: 26,
    stroke: "#fff"
  })), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d))))));
}

/* =========================================================
   YORUMLAR
   ========================================================= */
function Testimonials() {
  const t = [{
    q: 'Gayrimenkul sektörüne özel e-ticaret yazılımlarımızı Blue Ember ekibiyle birlikte geliştirdik. Ekibimizi eğittikleri için tam bir dijital dönüşüm yaşadık.',
    n: 'Özkan Koç',
    c: '#0a90b8'
  }, {
    q: 'Kompleks veri çekme sistemi gerektiren projemi onlar dışında kimse yapamadı. Onlarca firmayla görüştüm ama sadece Blue Ember ekibi hem yapay zekâ hem web hem de mobil kısmı inanılmaz kısa sürede ve eksiksiz tamamladı.',
    n: 'İlan Ediyor',
    c: '#0d1b22'
  }, {
    q: 'Projemizde karmaşık süreçleri sadeleştirip, otomasyon sistemimizi sıfırdan kurdular. Teknik bilgi kadar iletişim tarafında da çok güçlü bir ekip. Sürecin her aşamasında bize rehberlik ettiler.',
    n: 'Tutar Teknoloji',
    c: '#14b8a6'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section tst-sec",
    id: "yorumlar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "M\xFC\u015Fteri yorumlar\u0131",
    title: "Markalar bize",
    grad: "g\xFCveniyor"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tst-grid2"
  }, t.map((x, i) => /*#__PURE__*/React.createElement("div", {
    className: "tst reveal",
    key: i,
    style: {
      transitionDelay: `${i * 80}ms`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qm"
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", null, x.q), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, /*#__PURE__*/React.createElement("div", {
    className: "av",
    style: {
      background: x.c
    }
  }, x.n.split(' ').map(w => w[0]).join('')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, x.n))))))));
}

/* =========================================================
   SSS
   ========================================================= */
function FAQ() {
  const faqs = [['Uygulama gerçekten benim adıma mı yayınlanıyor?', 'Evet. Uygulama sizin Apple ve Google geliştirici hesabınızda, sizin markanızla yayınlanır. Hesap açılışında da yardımcı oluyoruz.'], ['Kaynak kodu bize ait olacak mı?', 'Evet. Proje teslimi sonrası tüm kaynak kod ve fikri mülkiyet hakları size aittir. İsterseniz başka bir ekiple devam edebilirsiniz.'], ['Aylık ücret ödemem gerekiyor mu?', 'Zorunlu aylık ücret yok. Sunucu masrafı ve isteğe bağlı bakım paketi dışında ödeme yapmazsınız.'], ['Bir uygulama ne kadar sürede yayına çıkar?', 'Hazır modüllerle çalışan bir uygulama yaklaşık 4 haftada mağazada olur. Özel akışlar içeren projelerde süre keşif sonunda sözleşmeye yazılır.'], ['Maliyet nasıl belirleniyor?', 'Seçtiğiniz modüllere, platform sayısına ve entegrasyonlara göre sabit fiyat veriyoruz. Formu doldurmanız ya da WhatsApp’tan yazmanız yeterli; 24 saat içinde dönüyoruz.'], ['Mevcut sitem veya Shopify / ikas mağazamla çalışır mı?', 'Evet. Ürün, stok ve siparişler mevcut altyapınızla eşitlenir. Hangi bağlantıların hazır olduğunu Entegrasyonlar bölümünde görebilirsiniz.'], ['Hem iOS hem Android için ayrı mı geliştiriyorsunuz?', 'Tek kod tabanından (React Native / Flutter) iki platforma birden geliştiriyoruz. Bu hem süreyi hem maliyeti düşürür.'], ['Uygulamaya ödeme alma özelliği ekleyebilir misiniz?', 'Evet. iyzico, PayTR, Stripe ve yerel bankalarla güvenli ödeme, abonelik ve cüzdan sistemleri kuruyoruz.'], ['Yayın sonrası destek veriyor musunuz?', 'Evet. Yayın sonrası hata düzeltme, mağaza güncellemeleri ve teknik destek veriyoruz. Düzenli bakım için ayrı paketler var.'], ['Verilerimizin güvenliği nasıl sağlanıyor?', 'KVKK uyumlu mimari, şifreli veri saklama ve güvenli API tasarımı standart yaklaşımımızdır. Veriler sizin sunucunuzda tutulur.'], ['Fikrim henüz net değil, yine de başvurabilir miyim?', 'Tabii. Sayfanın başındaki kutuya ne istediğinizi kabaca yazın; ücretsiz ön görüşmede birlikte netleştiririz.'], ['Web sitesi veya yönetim paneli de yapıyor musunuz?', 'Evet. Uygulamayı besleyen yönetim panelleri, web sürümleri ve API altyapısını uçtan uca geliştiriyoruz.']];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "sss"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap faq-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "SSS"), /*#__PURE__*/React.createElement("h2", {
    className: "h-sec",
    style: {
      marginTop: 16
    }
  }, "S\u0131k\xE7a sorulan ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "sorular")), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 16
    }
  }, "Arad\u0131\u011F\u0131n\u0131z\u0131 bulamad\u0131n\u0131z m\u0131? WhatsApp\u2019tan yaz\u0131n, ayn\u0131 g\xFCn d\xF6nelim."), /*#__PURE__*/React.createElement("a", {
    href: 'https://wa.me/' + WA_NUMBER,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn-dark",
    style: {
      marginTop: 24
    }
  }, "WhatsApp\u2019tan sor")), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'faq-item' + (open === i ? ' open' : '')
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    type: "button",
    "aria-expanded": open === i,
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    className: "pm"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, /*#__PURE__*/React.createElement("p", null, a)))))));
}
Object.assign(window, {
  AppFeatures,
  QuickAnswers,
  FEATURE_SETS,
  QUICK_ANSWERS,
  Hero,
  ClientLogos,
  Commitments,
  Sectors,
  WhiteLabel,
  Package,
  Integrations,
  IntegrationWall,
  Process,
  Revenue,
  Compare,
  Plans,
  Services,
  Testimonials,
  FAQ
});