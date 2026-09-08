// sectors.jsx — 6 sector module mini-screens
function GiftAssistantScreen() {
  const [step, setStep] = React.useState(0);
  const qs = ['Kime hediye?', 'Bütçe aralığı?', 'Vesile?'];
  return (
    <SectorShell title="Hediye Asistanı" badge="AI">
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 12 }}>{qs[step]}</div>
      {(step === 0 ? ['Eş / partner', 'Anne', 'Arkadaş'] : step === 1 ? ['₺5.000 altı', '₺5–15 bin', '₺15 bin+'] : ['Doğum günü', 'Yıldönümü', 'Sürpriz']).map((o) => (
        <button key={o} type="button" onClick={() => setStep(Math.min(2, step + 1))} style={{
          width: '100%', textAlign: 'left', padding: '12px 14px', borderRadius: 12, marginBottom: 8,
          background: '#fff', border: '1px solid #E8F0EB', fontWeight: 650, fontSize: 13,
        }}>{o}</button>
      ))}
      {step === 2 && (
        <div style={{ marginTop: 8, background: '#E3F2EA', borderRadius: 12, padding: 12, fontSize: 12.5 }}>
          Öneri: <b>Altın Yüzük 14K</b> · {formatPrice(12480, 'tr')}
        </div>
      )}
    </SectorShell>
  );
}

function DeliverySlotScreen() {
  const [sel, setSel] = React.useState(1);
  return (
    <SectorShell title="Teslimat Saati">
      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {[['Bugün', '18'], ['Yarın', '19'], ['Pzt', '20']].map(([d, n], i) => (
          <div key={d} style={{ flex: 1, textAlign: 'center', padding: '10px 4px', borderRadius: 12, background: i === 0 ? '#0B1F18' : '#fff', color: i === 0 ? '#fff' : '#0B1F18', border: '1px solid #E8F0EB' }}>
            <div style={{ fontSize: 10, opacity: 0.7 }}>{d}</div>
            <div style={{ fontWeight: 800, fontSize: 14 }}>{n} Tem</div>
          </div>
        ))}
      </div>
      {[['12:00 – 14:00', 'Dolu'], ['16:00 – 18:00', '✓ Seçildi'], ['18:00 – 20:00', 'Uygun']].map((s, i) => (
        <button key={s[0]} type="button" onClick={() => setSel(i)} style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', padding: '12px 14px', borderRadius: 12, marginBottom: 8,
          background: sel === i ? '#E3F2EA' : '#fff', border: sel === i ? `1.5px solid ${ACCENT}` : '1px solid #E8F0EB', fontWeight: 650, fontSize: 12.5,
        }}>
          <span>{s[0]}</span>
          <span style={{ color: s[1] === 'Dolu' ? '#C24040' : ACCENT, fontSize: 11, fontWeight: 800 }}>{s[1]}</span>
        </button>
      ))}
    </SectorShell>
  );
}

function SectorShell({ title, children, badge }) {
  return (
    <div style={{ ...wrapStyle, background: '#F7FBF8' }}>
      <div style={{ padding: '6px 14px 10px', background: '#fff' }}>
        {badge && <div style={{ fontSize: 10, fontWeight: 800, color: ACCENT, letterSpacing: '.06em', marginBottom: 2 }}>{badge}</div>}
        <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 15 }}>{title}</div>
      </div>
      <div className="demo-scroll" style={{ ...scrollStyle, padding: '8px 14px 16px' }}>{children}</div>
    </div>
  );
}

function SectorModuleScreen({ sectorId, moduleId, onAddToCart }) {
  const key = sectorId + ':' + moduleId;

  // ——— Kozmetik ———
  if (key === 'kozmetik:skin') {
    return (
      <SectorShell title="Cilt Analizi Sonucu" badge="AI">
        <div style={{ height: 120, borderRadius: 16, background: 'linear-gradient(160deg,#2a1f1a,#5c4033)', display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,.5)', fontSize: 12 }}>selfie</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 12 }}>
          {[['Leke', 72], ['Kırışıklık', 85], ['Gözenek', 64]].map(([n, v]) => (
            <div key={n} style={{ background: '#fff', borderRadius: 12, padding: 10, textAlign: 'center', border: '1px solid #E8F0EB' }}>
              <div style={{ fontSize: 10, color: '#8FA79B' }}>{n}</div>
              <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 20, color: ACCENT }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 10, fontWeight: 800, color: '#8FA79B', margin: '14px 0 8px', letterSpacing: '.06em' }}>SİZE ÖZEL ÖNERİLER</div>
        {DEMO_PRODUCTS.filter((p) => p.cat === 'Cilt').map((p) => (
          <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: 12, padding: '10px 12px', marginBottom: 8, border: '1px solid #E8F0EB' }}>
            <span style={{ fontWeight: 700, fontSize: 12.5 }}>{p.name}</span>
            <button type="button" onClick={() => onAddToCart(p.id)} style={{ fontSize: 11, fontWeight: 800, color: '#fff', background: ACCENT, padding: '6px 10px', borderRadius: 8 }}>Sepete +</button>
          </div>
        ))}
        <button type="button" style={{ width: '100%', marginTop: 6, padding: '12px', borderRadius: 12, fontWeight: 700, background: '#0B1F18', color: '#fff', fontSize: 13 }}>Rutinimi Oluştur →</button>
      </SectorShell>
    );
  }
  if (key === 'kozmetik:armakeup') {
    return (
      <SectorShell title="AR Makyaj Deneme" badge="AR">
        <div style={{ height: 200, borderRadius: 16, background: 'linear-gradient(160deg,#3d2a28,#8b5a4a)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,.45)', fontSize: 12 }}>kamera · yüz</div>
          <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', width: 70, height: 22, borderRadius: 99, background: 'rgba(196,60,80,.55)', border: '1px solid rgba(255,255,255,.3)' }} />
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12, justify: 'flex-wrap', justifyContent: 'center' }}>
          {['#C24040', '#E87A9A', '#8B3A4A', '#D4A5A5', '#6B2D3A'].map((c) => (
            <span key={c} style={{ width: 28, height: 28, borderRadius: 99, background: c, border: c === '#C24040' ? '2px solid #0B1F18' : 'none' }} />
          ))}
        </div>
        <div style={{ textAlign: 'center', fontSize: 12, color: '#5A6A63', marginTop: 10 }}>Rose Nude · canlı deneme</div>
      </SectorShell>
    );
  }
  if (key === 'kozmetik:refill') {
    return (
      <SectorShell title="Bitince Hatırlat">
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB' }}>
          <div style={{ fontWeight: 800, fontSize: 14 }}>Gözenek Toniği</div>
          <div style={{ fontSize: 12, color: '#5A6A63', marginTop: 4 }}>Tahmini bitiş: ~12 gün</div>
          <div style={{ marginTop: 12, height: 8, borderRadius: 99, background: '#E8F3ED' }}>
            <div style={{ width: '35%', height: '100%', borderRadius: 99, background: ACCENT }} />
          </div>
        </div>
        <button type="button" onClick={() => onAddToCart('p6')} style={{ width: '100%', marginTop: 12, padding: '12px', borderRadius: 12, fontWeight: 700, background: `linear-gradient(135deg,${ACCENT},#5FA052)`, color: '#fff' }}>Tek tıkla yenile</button>
      </SectorShell>
    );
  }
  if (key === 'kozmetik:barreorder') {
    return <BarcodeScreen onFound={onAddToCart} product={DEMO_PRODUCTS[0]} />;
  }
  if (key === 'kozmetik:routine') {
    return (
      <SectorShell title="Sabah Rutini">
        {['Temizleyici', 'Tonik', 'Serum', 'Nemlendirici'].map((s, i) => (
          <div key={s} style={{ display: 'flex', gap: 10, alignItems: 'center', background: '#fff', borderRadius: 12, padding: 12, marginBottom: 8, border: '1px solid #E8F0EB' }}>
            <span style={{ width: 28, height: 28, borderRadius: 8, background: '#E3F2EA', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 12, color: ACCENT }}>{i + 1}</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>{s}</span>
          </div>
        ))}
        <button type="button" style={{ width: '100%', padding: '12px', borderRadius: 12, fontWeight: 700, background: ACCENT, color: '#fff', marginTop: 4 }}>Rutini sepete ekle</button>
      </SectorShell>
    );
  }
  if (key === 'kozmetik:subbox') {
    return (
      <SectorShell title="Abonelik Kutusu">
        <div style={{ background: `linear-gradient(135deg,${ACCENT},#5FA052)`, borderRadius: 16, padding: 18, color: '#fff' }}>
          <div style={{ fontSize: 11, opacity: 0.9 }}>Aylık kutu</div>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 22, marginTop: 4 }}>₺449 / ay</div>
          <div style={{ fontSize: 12, marginTop: 8, opacity: 0.9 }}>Otomatik tahsilat · iptal istediğin zaman</div>
        </div>
        <button type="button" style={{ width: '100%', marginTop: 12, padding: '12px', borderRadius: 12, fontWeight: 700, background: '#0B1F18', color: '#fff' }}>Abone ol</button>
      </SectorShell>
    );
  }

  // ——— Kuyum ———
  if (key === 'kuyum:arring') {
    return (
      <SectorShell title="AR Önizleme" badge="AR · parmak">
        <div style={{ height: 180, borderRadius: 16, background: 'linear-gradient(160deg,#1a1814,#3d3528)', display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,.4)', fontSize: 12, position: 'relative' }}>
          kamera · parmak
          <div style={{ position: 'absolute', top: '42%', left: '48%', width: 36, height: 14, borderRadius: 4, border: '2px solid #C9A227', transform: 'rotate(-20deg)' }} />
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          {['Altın', 'Beyaz', 'Rose'].map((m, i) => (
            <span key={m} style={{ flex: 1, textAlign: 'center', padding: '8px', borderRadius: 10, fontSize: 11, fontWeight: 700, background: i === 0 ? '#C9A227' : '#fff', color: i === 0 ? '#fff' : '#5A6A63', border: '1px solid #E8F0EB' }}>{m}</span>
          ))}
        </div>
        <button type="button" style={{ width: '100%', marginTop: 12, padding: '11px', borderRadius: 12, fontWeight: 700, border: '1.5px solid #DCE8E1', fontSize: 13 }}>WhatsApp'ta paylaş ⇄</button>
      </SectorShell>
    );
  }
  if (key === 'kuyum:gold') {
    return (
      <SectorShell title="Canlı Gram Altın">
        <div style={{ background: '#fff', borderRadius: 16, padding: 18, border: '1px solid #E8F0EB', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 28, color: '#C9A227' }}>₺4.812,60</div>
          <div style={{ fontSize: 12, color: ACCENT, fontWeight: 700, marginTop: 4 }}>▲ %0,4</div>
          <div style={{ fontSize: 11, color: '#8FA79B', marginTop: 8 }}>İşçilik + KDV formülünüzle otomatik</div>
        </div>
      </SectorShell>
    );
  }
  if (key === 'kuyum:cert') {
    return (
      <SectorShell title="Sertifikayı doğrula">
        <div style={{ height: 140, borderRadius: 16, background: '#0B1F18', display: 'grid', placeItems: 'center' }}>
          <div style={{ width: 80, height: 80, background: `repeating-linear-gradient(0deg,#fff 0 2px,transparent 2px 8px),repeating-linear-gradient(90deg,#fff 0 2px,transparent 2px 8px)`, opacity: 0.9 }} />
        </div>
        <div style={{ marginTop: 12, background: '#E3F2EA', borderRadius: 12, padding: 12, fontSize: 12.5, color: ACCENT, fontWeight: 700 }}>GIA doğrulandı · Laboratuvar sunucusu ✓</div>
      </SectorShell>
    );
  }
  if (key === 'kuyum:gift') return <GiftAssistantScreen />;
  if (key === 'kuyum:compare') {
    return (
      <SectorShell title="Karşılaştırma">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#8FA79B' }}>
                <th style={{ padding: '6px 4px' }}></th>
                <th style={{ padding: '6px 4px' }}>A</th>
                <th style={{ padding: '6px 4px' }}>B</th>
              </tr>
            </thead>
            <tbody>
              {[['Karat', '1.02', '0.90'], ['Kesim', 'Ideal', 'Very Good'], ['Saflık', 'VS1', 'VS2'], ['Fiyat', '₺48.2k', '₺39.5k']].map((r) => (
                <tr key={r[0]} style={{ borderTop: '1px solid #E8F0EB' }}>
                  <td style={{ padding: '8px 4px', fontWeight: 700 }}>{r[0]}</td>
                  <td style={{ padding: '8px 4px' }}>{r[1]}</td>
                  <td style={{ padding: '8px 4px' }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectorShell>
    );
  }

  // ——— Giyim ———
  if (key === 'giyim:size') {
    return (
      <SectorShell title="Beden Önerisi" badge="AI">
        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>Boyunuz?</div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          {['160–168', '168–175', '175+'].map((b, i) => (
            <span key={b} style={{ flex: 1, textAlign: 'center', padding: '8px 4px', borderRadius: 10, fontSize: 10, fontWeight: 700, background: i === 1 ? ACCENT : '#fff', color: i === 1 ? '#fff' : '#5A6A63', border: '1px solid #E8F0EB' }}>{b}</span>
          ))}
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>Genelde hangi beden?</div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          {['S', 'M', 'L'].map((b, i) => (
            <span key={b} style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: 10, fontWeight: 800, background: i === 1 ? '#0B1F18' : '#fff', color: i === 1 ? '#fff' : '#0B1F18', border: '1px solid #E8F0EB' }}>{b}</span>
          ))}
        </div>
        <div style={{ background: '#E3F2EA', borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: ACCENT }}>M Beden</div>
          <div style={{ fontSize: 11.5, color: '#5A6A63', marginTop: 4 }}>Kalıp notu: bu model dar kesimdir</div>
        </div>
      </SectorShell>
    );
  }
  if (key === 'giyim:outfit') {
    return (
      <SectorShell title="Bununla ne giyilir">
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Oversize Ceket ile</div>
        {[['Retro Sneaker', '👟'], ['Deri Kemer', '👔'], ['Basic Tee', '👕']].map(([n, e]) => (
          <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'center', background: '#fff', borderRadius: 12, padding: 10, marginBottom: 8, border: '1px solid #E8F0EB' }}>
            <span style={{ fontSize: 22 }}>{e}</span>
            <span style={{ fontWeight: 700, fontSize: 12.5, flex: 1 }}>{n}</span>
            <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT }}>Ekle</span>
          </div>
        ))}
      </SectorShell>
    );
  }
  if (key === 'giyim:story') {
    return (
      <SectorShell title="Story & Canlı">
        <div style={{ height: 220, borderRadius: 16, background: 'linear-gradient(160deg,#1a1020,#4a2060)', position: 'relative', color: '#fff' }}>
          <div style={{ position: 'absolute', top: 12, left: 12, right: 12, display: 'flex', gap: 4 }}>
            {[1, 1, 0].map((on, i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 99, background: on ? '#fff' : 'rgba(255,255,255,.3)' }} />)}
          </div>
          <div style={{ position: 'absolute', bottom: 16, left: 12, right: 12, background: 'rgba(255,255,255,.95)', borderRadius: 12, padding: 10, color: '#0B1F18', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 700, fontSize: 12 }}>Oversize Ceket · ₺899</span>
            <span style={{ fontSize: 11, fontWeight: 800, color: '#fff', background: ACCENT, padding: '5px 8px', borderRadius: 8 }}>Sepete</span>
          </div>
        </div>
      </SectorShell>
    );
  }
  if (key === 'giyim:restock') {
    return (
      <SectorShell title="Gelince Haber Ver">
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB' }}>
          <div style={{ fontWeight: 800 }}>Oversize Ceket · M</div>
          <div style={{ fontSize: 12, color: '#C24040', marginTop: 4 }}>Tükendi</div>
          <button type="button" style={{ marginTop: 12, width: '100%', padding: '11px', borderRadius: 10, fontWeight: 700, background: '#E3F2EA', color: ACCENT }}>✓ Bildirim kurulu</button>
        </div>
      </SectorShell>
    );
  }
  if (key === 'giyim:early') {
    return (
      <SectorShell title="Erken Erişim">
        <div style={{ background: '#0B1F18', borderRadius: 16, padding: 18, color: '#fff' }}>
          <div style={{ fontSize: 11, color: '#6DAE4F', fontWeight: 800 }}>YALNIZCA UYGULAMA</div>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 18, marginTop: 6 }}>Sonbahar ’26 koleksiyonu</div>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>48 saat erken erişim · 12 ürün</div>
        </div>
      </SectorShell>
    );
  }

  // ——— Gıda ———
  if (key === 'gida:slot') return <DeliverySlotScreen />;
  if (key === 'gida:reorder') {
    return (
      <SectorShell title="Geçen haftaki sepetiniz">
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB' }}>
          <div style={{ fontSize: 11, color: '#8FA79B', fontWeight: 800, letterSpacing: '.05em' }}>14 ÜRÜN · ₺642,90</div>
          <div style={{ fontSize: 12.5, color: '#5A6A63', marginTop: 8, lineHeight: 1.5 }}>Süt, yumurta, domates, zeytin…</div>
        </div>
        <button type="button" onClick={() => onAddToCart('p5')} style={{ width: '100%', marginTop: 12, padding: '13px', borderRadius: 12, fontWeight: 700, background: `linear-gradient(135deg,${ACCENT},#5FA052)`, color: '#fff' }}>Tek Tıkla Tekrarla</button>
      </SectorShell>
    );
  }
  if (key === 'gida:recipe') {
    return (
      <SectorShell title="Tariften Sepete" badge="AI">
        <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 10 }}>Menemen malzemeleri</div>
        {['Yumurta ×6', 'Domates', 'Biber', 'Soğan', 'Zeytinyağı'].map((i) => (
          <div key={i} style={{ padding: '10px 12px', background: '#fff', borderRadius: 10, marginBottom: 6, border: '1px solid #E8F0EB', fontSize: 12.5, fontWeight: 650 }}>{i}</div>
        ))}
        <button type="button" style={{ width: '100%', marginTop: 8, padding: '12px', borderRadius: 12, fontWeight: 700, background: ACCENT, color: '#fff' }}>Tümünü sepete ekle</button>
      </SectorShell>
    );
  }
  if (key === 'gida:box') {
    return (
      <SectorShell title="Haftalık Sebze Kutusu">
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, border: '1px solid #E8F0EB' }}>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 20 }}>₺289 / hafta</div>
          <div style={{ fontSize: 12, color: '#5A6A63', marginTop: 6 }}>Mevsim sebze-meyve · otomatik tahsilat</div>
        </div>
        <button type="button" style={{ width: '100%', marginTop: 12, padding: '12px', borderRadius: 12, fontWeight: 700, background: '#0B1F18', color: '#fff' }}>Abone ol</button>
      </SectorShell>
    );
  }
  if (key === 'gida:region') {
    return (
      <SectorShell title="Bölge Bazlı Stok">
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="pin" size={18} stroke={ACCENT} />
            <span style={{ fontWeight: 700, fontSize: 13 }}>Kadıköy Deposu · 1.2 km</span>
          </div>
          <div style={{ fontSize: 12, color: ACCENT, fontWeight: 700, marginTop: 10 }}>Organik Yumurta · 48 adet stokta</div>
          <div style={{ fontSize: 11, color: '#8FA79B', marginTop: 4 }}>En yakın taze stok</div>
        </div>
      </SectorShell>
    );
  }

  // ——— Ev ———
  if (key === 'ev:arroom') {
    return (
      <SectorShell title="AR Odanda Gör" badge="AR · oda">
        <div style={{ height: 180, borderRadius: 16, background: 'linear-gradient(160deg,#2a3428,#4a5c48)', display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,.45)', fontSize: 12, position: 'relative' }}>
          kamera · oda
          <div style={{ position: 'absolute', bottom: 30, left: '20%', right: '20%', height: 50, borderRadius: 8, border: '2px dashed rgba(255,255,255,.5)', background: 'rgba(0,128,96,.25)' }} />
        </div>
        <div style={{ marginTop: 10, fontWeight: 700, fontSize: 13 }}>3'lü koltuk · 224 cm</div>
        <div style={{ fontSize: 12, color: '#5A6A63' }}>Kumaş: Petrol</div>
      </SectorShell>
    );
  }
  if (key === 'ev:measure') {
    return (
      <SectorShell title="Ölçü Kontrolü">
        <div style={{ background: '#E3F2EA', borderRadius: 12, padding: 12, fontWeight: 800, color: ACCENT, marginBottom: 10 }}>✓ Kapıdan geçer</div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 12, border: '1px solid #E8F0EB', fontSize: 12, lineHeight: 1.6, color: '#5A6A63' }}>
          Kapı 92 cm · Asansör 210 cm<br />Ürün paketi 88 × 96 × 205 cm
        </div>
      </SectorShell>
    );
  }
  if (key === 'ev:fabric') {
    return (
      <SectorShell title="Kumaş ve Renk">
        <Thumb from="#2C5F4A" to="#7BA88F" glyph="🛋️" h={100} r={14} />
        <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
          {['#2C5F4A', '#1A211E', '#8B6914', '#4A5568', '#9B2C2C'].map((c, i) => (
            <span key={c} style={{ width: 32, height: 32, borderRadius: 8, background: c, border: i === 0 ? '2px solid #0B1F18' : 'none' }} />
          ))}
        </div>
        <div style={{ fontSize: 12, marginTop: 10, fontWeight: 650 }}>Kumaş: Petrol kadife</div>
      </SectorShell>
    );
  }
  if (key === 'ev:roomset') {
    return (
      <SectorShell title="Bu oturma odasını tamamla">
        {[['3\'lü koltuk', '🛋️'], ['Sehpa', '🪵'], ['Halı', '🟫'], ['Aydınlatma', '💡']].map(([n, e]) => (
          <div key={n} style={{ display: 'flex', gap: 10, padding: 10, background: '#fff', borderRadius: 12, marginBottom: 8, border: '1px solid #E8F0EB', alignItems: 'center' }}>
            <span style={{ fontSize: 20 }}>{e}</span>
            <span style={{ fontWeight: 700, fontSize: 12.5 }}>{n}</span>
          </div>
        ))}
        <button type="button" style={{ width: '100%', padding: '12px', borderRadius: 12, fontWeight: 700, background: ACCENT, color: '#fff' }}>Paketi sepete ekle</button>
      </SectorShell>
    );
  }
  if (key === 'ev:install') {
    return (
      <SectorShell title="Montaj Randevusu">
        <div style={{ fontSize: 12, color: '#5A6A63', marginBottom: 10 }}>Teslimat + montaj günü seçin</div>
        {['Per 24 Tem · 10:00–13:00', 'Cum 25 Tem · 14:00–17:00', 'Pzt 28 Tem · 09:00–12:00'].map((d, i) => (
          <button key={d} type="button" style={{
            width: '100%', textAlign: 'left', padding: '12px 14px', borderRadius: 12, marginBottom: 8,
            background: i === 1 ? '#E3F2EA' : '#fff', border: i === 1 ? `1.5px solid ${ACCENT}` : '1px solid #E8F0EB',
            fontWeight: 650, fontSize: 12.5,
          }}>{d}</button>
        ))}
      </SectorShell>
    );
  }

  // ——— Genel ———
  if (key === 'genel:loyalty') {
    return (
      <SectorShell title="Sadakat Puanınız">
        <div style={{ background: `linear-gradient(135deg,${ACCENT},#5FA052)`, borderRadius: 16, padding: 18, color: '#fff' }}>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 32 }}>1.240</div>
          <div style={{ fontSize: 12, opacity: 0.9, marginTop: 4 }}>≈ ₺124 indirim</div>
          <div style={{ marginTop: 12, height: 6, borderRadius: 99, background: 'rgba(255,255,255,.25)' }}>
            <div style={{ width: '68%', height: '100%', borderRadius: 99, background: '#fff' }} />
          </div>
          <div style={{ fontSize: 11, marginTop: 6, opacity: 0.85 }}>260 puan sonra Gold seviye</div>
        </div>
      </SectorShell>
    );
  }
  if (key === 'genel:segment') {
    return (
      <SectorShell title="Akıllı Segmentasyon" badge="AI">
        {[['VIP Alıcılar', '312 kişi'], ['Sepet terk', '1.048'], ['Uyuyanlar', '2.401']].map(([n, c]) => (
          <div key={n} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 14px', background: '#fff', borderRadius: 12, marginBottom: 8, border: '1px solid #E8F0EB' }}>
            <span style={{ fontWeight: 700, fontSize: 13 }}>{n}</span>
            <span style={{ fontSize: 12, color: '#8FA79B' }}>{c}</span>
          </div>
        ))}
      </SectorShell>
    );
  }
  if (key === 'genel:flash') {
    return (
      <SectorShell title="Flaş İndirim">
        <div className="demo-toast" style={{ position: 'relative', left: 0, right: 0, top: 0, marginBottom: 12 }}>
          <div style={{ fontWeight: 800, fontSize: 13 }}>Flaş indirim başladı ⏱</div>
          <div style={{ fontSize: 11.5, color: '#5A6A63', marginTop: 3 }}>Sadece uygulamada, 6 saat geçerli</div>
        </div>
        <div style={{ background: '#0B1F18', borderRadius: 14, padding: 16, color: '#fff', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--demo-display), sans-serif', fontWeight: 800, fontSize: 36 }}>05:42:18</div>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>kalan süre</div>
        </div>
      </SectorShell>
    );
  }
  if (key === 'genel:track') {
    return (
      <SectorShell title="Kargom Nerede">
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: '1px solid #E8F0EB' }}>
          <div style={{ fontWeight: 800, fontSize: 14 }}>Dağıtımda 📦</div>
          <div style={{ fontSize: 12, color: '#5A6A63', marginTop: 4 }}>Bugün 14:00–17:00 arası kapınızda</div>
          <div style={{ display: 'flex', gap: 4, marginTop: 14 }}>
            {[1, 1, 1, 0].map((on, i) => <div key={i} style={{ flex: 1, height: 4, borderRadius: 99, background: on ? ACCENT : '#E8F3ED' }} />)}
          </div>
        </div>
      </SectorShell>
    );
  }
  if (key === 'genel:quickcart') {
    return (
      <SectorShell title="Hızlı sepet">
        <div style={{ fontSize: 11, color: '#8FA79B', marginBottom: 8 }}>Düzenli ürünleriniz</div>
        {DEMO_PRODUCTS.slice(0, 3).map((p) => (
          <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: 12, padding: '10px 12px', marginBottom: 8, border: '1px solid #E8F0EB' }}>
            <span style={{ fontWeight: 700, fontSize: 12.5 }}>{p.emoji} {p.name}</span>
            <button type="button" onClick={() => onAddToCart(p.id)} style={{ fontSize: 11, fontWeight: 800, color: ACCENT }}>Ekle</button>
          </div>
        ))}
      </SectorShell>
    );
  }

  return (
    <SectorShell title="Modül">
      <div style={{ color: '#8FA79B', fontSize: 13, padding: 20, textAlign: 'center' }}>Bu modül yakında</div>
    </SectorShell>
  );
}

Object.assign(window, { SectorModuleScreen, SectorShell });
