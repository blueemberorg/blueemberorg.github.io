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

  const buildWhatsAppMessage = () => [
    'Merhaba Blue Ember, mobil uygulama teklif talebim var.',
    '',
    'Uygulama tipi: ' + f.cat,
    'Platform: ' + f.platform.join(', '),
    'Diller: ' + f.lang.join(', '),
    'Bütçe: ' + f.budget,
    'Açıklama: ' + f.desc,
    '',
    'Ad Soyad: ' + f.name,
    'Telefon: ' + f.phone,
    'E-posta: ' + f.email,
  ].join('\n');

  const submit = () => {
    if (!validate(2)) return;
    var text = encodeURIComponent(buildWhatsAppMessage());
    window.open('https://wa.me/905370580038?text=' + text, '_blank', 'noopener,noreferrer');
    setDone(true);
  };

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
              <h3>Talebin WhatsApp ile iletildi! 🎉</h3>
              <p>Teşekkürler {f.name.split(' ')[0]}. Form bilgilerin WhatsApp üzerinden ekibimize ulaştı. <b style={{ color: 'var(--ink)' }}>24 saat içinde</b> {f.email} adresinden sana döneceğiz.</p>
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
