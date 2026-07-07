
  const WA_NUMBER = "905370580038";

  // base WA link (no form) for nav / floating buttons
  const baseMsg = "Merhaba, Blue Ember whitelabel araç kiralama platformu hakkında bilgi almak istiyorum.";
  const baseWaUrl = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(baseMsg);
  document.querySelectorAll('.wa-link').forEach(a=>{
    if(a.id !== 'successWa') a.href = baseWaUrl;
    a.target = "_blank"; a.rel = "noopener";
  });

  // form -> whatsapp
  const form = document.getElementById('leadForm');
  const success = document.getElementById('formSuccess');
  const successWa = document.getElementById('successWa');

  if (form && success && successWa) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const f = form;
    const ad = f.ad.value.trim();
    const tel = f.tel.value.trim();
    let ok = true;
    [f.ad, f.tel].forEach(el=>el.classList.remove('err'));
    if(ad.length < 2){ f.ad.classList.add('err'); ok=false; }
    if(tel.replace(/\D/g,'').length < 10){ f.tel.classList.add('err'); ok=false; }
    if(!ok){ (ad.length<2 ? f.ad : f.tel).focus(); return; }

    const L = (label, val) => val && val.trim() ? `*${label}:* ${val.trim()}\n` : '';
    let msg = "Merhaba, Blue Ember whitelabel araç kiralama platformu için teklif/demo talep ediyorum.\n\n";
    msg += L("Ad Soyad", f.ad.value);
    msg += L("Telefon", f.tel.value);
    msg += L("Şehir", f.sehir.value);
    msg += L("E-posta", f.email.value);
    msg += L("Filo büyüklüğü", f.filo.value);

    const url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
    successWa.href = url;
    window.open(url, "_blank", "noopener");

    form.style.display = "none";
    success.classList.add('on');
    if(window.lucide) lucide.createIcons();
  });
  }

  function initScroller(scrollerId, prevId, nextId, cardSel) {
    const sc = document.getElementById(scrollerId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    if (!sc || !prev || !next) return;

    function updateEdges() {
      prev.disabled = sc.scrollLeft < 8;
      next.disabled = sc.scrollLeft + sc.clientWidth > sc.scrollWidth - 8;
    }

    function step(dir) {
      const card = sc.querySelector(cardSel);
      const w = card ? card.offsetWidth + 14 : 294;
      sc.scrollBy({ left: dir * w, behavior: 'smooth' });
    }

    prev.addEventListener('click', () => step(-1));
    next.addEventListener('click', () => step(1));
    sc.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    updateEdges();
  }

  initScroller('probScroller', 'probPrev', 'probNext', '.prob');
  initScroller('featScroller', 'featPrev', 'featNext', '.feat');

  const subnav = document.getElementById('pageSubnav');
  if (subnav) {
    const onScroll = () => subnav.classList.toggle('scrolled', window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
  }, {threshold:.12, rootMargin:"0px 0px -40px 0px"});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // icons
  if(window.lucide) lucide.createIcons();
