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
            <a href="#cozumler" className="btn btn-primary">Çözümleri Gör
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#hizmetler" className="btn btn-ghost">Hizmetlerimiz</a>
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
    { q: 'Yemek sipariş uygulamamızı 7 haftada yayına aldılar. İlk ayda 12 bin indirme aldık, ekip inanılmaz hızlıydı.', n: 'Selin Aksoy', r: 'Kurucu · LezzetGo', c: '#ff3c5e', stars: 5 },
    { q: 'Fintech ürünümüzün arayüzü tam hayal ettiğimiz gibi oldu. Kullanıcı memnuniyetimiz %40 arttı.', n: 'Burak Demir', r: 'CPO · PayNova', c: '#6d3bf5', stars: 5 },
    { q: 'Kurye takip sistemimiz harita entegrasyonuyla kusursuz çalışıyor. Operasyon verimliliğimiz ikiye katlandı.', n: 'Ece Yılmaz', r: 'COO · HızlıKurye', c: '#2b7cff', stars: 5 },
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
                <div><b>{x.n}</b><small>{x.r}</small></div>
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
          <p className="lead" style={{ marginTop: 16 }}>Merak ettiğin 20 soruyu yanıtladık. Aradığını bulamadın mı? Bize e-posta veya telefonla ulaşabilirsin.</p>
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
    { ic: 'chat', c: ['#6d3bf5', '#a02bf0'], s: 'E-POSTA', b: 'goktan@blueemberorg.com', p: '24 saat içinde dönüş', href: 'mailto:goktan@blueemberorg.com' },
    { ic: 'bell', c: ['#ec3a8e', '#ff6b8a'], s: 'TELEFON', b: '+90 537 058 00 38', p: 'Hafta içi 09:00 - 18:00', href: 'tel:+905370580038' },
    { ic: 'pin', c: ['#0bbf9e', '#07a6c9'], s: 'OFİS', b: 'İstanbul', p: 'Randevu ile ziyaret' },
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
              <small>{x.s}</small>
              {x.href ? <a href={x.href} style={{ color: 'inherit', textDecoration: 'none' }}><b>{x.b}</b></a> : <b>{x.b}</b>}
              <p>{x.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ['Çözümler', [['Yemek Sipariş', '#cozumler'], ['Fintech', '#cozumler'], ['E-ticaret', '#cozumler'], ['Kurye Takip', '#cozumler']]],
    ['Şirket', [['Hizmetler', '#hizmetler'], ['Yorumlar', '#yorumlar'], ['SSS', '#sss'], ['İletişim', '#iletisim']]],
    ['Kaynaklar', [['Blog', '/blog'], ['Vaka Çalışmaları', '#yorumlar'], ['Kariyer', '#iletisim'], ['Gizlilik', '#top']]],
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
              <div className="footer-col" key={i}><h5>{h}</h5>{links.map(([l, href]) => <a key={l} href={href}>{l}</a>)}</div>
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
