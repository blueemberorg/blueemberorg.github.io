/* ===================================================================
   Blue Ember — landing page interactions
   =================================================================== */

// ⚠️ KLİNİK SAHİBİ: Aşağıdaki numarayı kendi WhatsApp Business numaranızla
// değiştirin. Ülke kodu ile, başında + veya 0 OLMADAN yazın.
// Örnek Türkiye: 905551234567
const WHATSAPP_NUMBER = '905370580038';

/* ---------- Hero heatmap (decorative, code-drawn) ---------- */
(function buildHeat() {
  const heat = document.getElementById('heat');
  if (!heat) return;
  // 7 sütun x 5 satır = 35 hücre, teal yoğunluk dağılımı
  const intensity = [
    .15,.35,.55,.7,.45,.2,.05,
    .4,.6,.8,.95,.7,.35,.1,
    .55,.75,.9,.85,.6,.4,.12,
    .3,.5,.7,.6,.5,.25,.08,
    .2,.4,.55,.45,.65,.3,.06
  ];
  intensity.forEach(v => {
    const c = document.createElement('i');
    // mint-soft -> teal arası interpolasyon
    c.style.background = v < .12
      ? '#eef4f6'
      : `color-mix(in srgb, var(--teal) ${Math.round(v*100)}%, #ecfafd)`;
    heat.appendChild(c);
  });
})();

/* ---------- Module checkbox lists ---------- */
const CLINIC_MODULES = [
  ['01', 'Hasta Takip & CRM'],
  ['02', 'İlaç Takibi & Reçete'],
  ['03', 'Akıllı Takvim & Randevu'],
  ['04', 'Video Görüşme'],
  ['05', 'Vital Değer Grafikleri'],
  ['06', 'Hemşire & Personel'],
  ['07', 'Ekipman Kaydı & Bakım'],
  ['08', 'Muayene Notları (SOAP)'],
  ['09', 'Tıbbi Geçmiş Arşivi'],
];
const TOURISM_MODULES = [
  ['T1', 'Çok Dilli Hasta Portalı'],
  ['T2', 'WhatsApp Randevu Botu'],
  ['T3', 'Anlık Tercüman Chatbot'],
  ['T4', 'Transfer + Otel Paketi'],
  ['T5', 'Uluslararası Ödeme'],
  ['T6', 'OCR Hasta Kaydı'],
  ['T7', 'İyileşme Takip Uygulaması'],
];
const TICK = `<span class="box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg></span>`;

function renderModules(targetId, list, group) {
  const wrap = document.getElementById(targetId);
  if (!wrap) return;
  list.forEach(([code, name]) => {
    const id = `mod-${code}`;
    const div = document.createElement('div');
    div.className = 'mpick';
    div.innerHTML = `<input type="checkbox" id="${id}" name="modul" value="${code} — ${name}" data-group="${group}">
      <label for="${id}">${TICK}<span class="tag">${code}</span> ${name}</label>`;
    wrap.appendChild(div);
  });
}
renderModules('clinicModules', CLINIC_MODULES, 'klinik');
renderModules('tourismModules', TOURISM_MODULES, 'turizm');

/* ---------- Conditional: target countries on tourism = Evet/Plan ---------- */
const ulkelerField = document.getElementById('ulkelerField');
document.querySelectorAll('input[name="turizm"]').forEach(r => {
  r.addEventListener('change', () => {
    const show = (r.id === 'tEvet' || r.id === 'tPlan') && r.checked;
    ulkelerField.classList.toggle('show', show);
    if (!show) ulkelerField.querySelector('input').value = '';
  });
});

/* ---------- Validation helpers ---------- */
function setInvalid(field, on) { field.classList.toggle('invalid', on); }

function validate(form) {
  let ok = true;
  let firstBad = null;
  form.querySelectorAll('.field[data-required]').forEach(field => {
    const input = field.querySelector('input, select');
    let bad = !input.value.trim();
    if (!bad && field.dataset.type === 'phone') {
      const digits = input.value.replace(/\D/g, '');
      bad = digits.length < 10;
    }
    setInvalid(field, bad);
    if (bad) { ok = false; firstBad = firstBad || field; }
  });
  // optional email format
  const emailField = [...form.querySelectorAll('.field')].find(f => f.querySelector('[name="email"]'));
  const emailInput = form.querySelector('[name="email"]');
  if (emailInput && emailInput.value.trim()) {
    const bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
    setInvalid(emailField, bad);
    if (bad) { ok = false; firstBad = firstBad || emailField; }
  }
  // KVKK
  const kvkk = document.getElementById('kvkk');
  if (!kvkk.checked) {
    ok = false;
    kvkk.closest('.consent').style.color = 'var(--coral)';
    firstBad = firstBad || kvkk.closest('.consent');
  } else {
    kvkk.closest('.consent').style.color = '';
  }
  if (firstBad) firstBad.scrollIntoView ? null : null; // avoid scrollIntoView per guidance
  return { ok, firstBad };
}

// clear invalid state as user types
document.querySelectorAll('#leadForm input, #leadForm select').forEach(el => {
  el.addEventListener('input', () => {
    const f = el.closest('.field');
    if (f) setInvalid(f, false);
  });
  el.addEventListener('change', () => {
    const f = el.closest('.field');
    if (f) setInvalid(f, false);
  });
});
document.getElementById('kvkk').addEventListener('change', e => {
  e.target.closest('.consent').style.color = e.target.checked ? '' : 'var(--coral)';
});

/* ---------- Build WhatsApp message & submit ---------- */
function val(name) {
  const el = document.querySelector(`#leadForm [name="${name}"]`);
  return el ? el.value.trim() : '';
}
function radioVal(name) {
  const el = document.querySelector(`#leadForm [name="${name}"]:checked`);
  return el ? el.value : '';
}
function checkedModules(group) {
  return [...document.querySelectorAll(`#leadForm [name="modul"]:checked[data-group="${group}"]`)]
    .map(el => el.value);
}

function buildMessage() {
  const L = [];
  L.push('🏥 *BLUE EMBER — TEKLİF TALEBİ*');
  L.push('');
  L.push('*İletişim*');
  L.push(`• Ad Soyad: ${val('ad')}`);
  L.push(`• Klinik: ${val('klinik')}`);
  L.push(`• Telefon: ${val('telefon')}`);
  if (val('email')) L.push(`• E-posta: ${val('email')}`);
  L.push('');
  L.push('*Klinik Profili*');
  L.push(`• Branş: ${val('brans')}`);
  L.push(`• Aylık hasta hacmi: ${val('hacim')}`);
  if (radioVal('yazilim')) L.push(`• Mevcut yazılım: ${radioVal('yazilim')}`);
  L.push('');
  L.push('*Sağlık Turizmi*');
  L.push(`• Uluslararası hasta: ${radioVal('turizm') || 'Belirtilmedi'}`);
  if (val('ulkeler')) L.push(`• Hedef ülkeler: ${val('ulkeler')}`);
  L.push('');
  const clinic = checkedModules('klinik');
  const tourism = checkedModules('turizm');
  L.push('*İlgilenilen Modüller*');
  L.push(`• Klinik: ${clinic.length ? clinic.join(', ') : '—'}`);
  L.push(`• Turizm: ${tourism.length ? tourism.join(', ') : '—'}`);
  L.push('');
  L.push(`*Tahmini Bütçe:* ${radioVal('butce') || 'Belirtilmedi'}`);
  if (val('not')) { L.push(''); L.push(`*Not:* ${val('not')}`); }
  return L.join('\n');
}

const form = document.getElementById('leadForm');
const successBox = document.getElementById('formSuccess');
const waLink = document.getElementById('waLink');

form.addEventListener('submit', e => {
  e.preventDefault();
  const { ok } = validate(form);
  if (!ok) return;

  const text = encodeURIComponent(buildMessage());
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

  // open WhatsApp
  window.open(url, '_blank', 'noopener');

  // swap to success state
  waLink.href = url;
  form.style.display = 'none';
  successBox.classList.add('show');
});

/* ---------- Subnav: scrolled state ---------- */
const subnav = document.getElementById('pageSubnav');
if (subnav) {
  const onScroll = () => subnav.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Scroll reveal ----------
   In-view elements are revealed *synchronously & instantly* (no dependency
   on rAF/transitions) so above-the-fold content never stays hidden — even in
   a backgrounded/throttled tab. Below-the-fold elements animate on scroll. */
const reveals = [...document.querySelectorAll('.reveal')];
function show(el, instant) {
  if (instant) el.classList.add('no-anim');
  el.classList.add('in');
}
// 1) instant reveal for anything already in the initial viewport
reveals.forEach(el => {
  const r = el.getBoundingClientRect();
  if (r.top < window.innerHeight * 0.95 && r.bottom > 0) show(el, true);
});
// 2) animate the rest as they scroll into view
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { show(en.target, false); io.unobserve(en.target); }
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  reveals.forEach(el => { if (!el.classList.contains('in')) io.observe(el); });
} else {
  reveals.forEach(el => show(el, true));
}
// 3) safety net — never leave anything hidden
setTimeout(() => reveals.forEach(el => { if (!el.classList.contains('in')) show(el, true); }), 4000);
