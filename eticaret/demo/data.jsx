// data.jsx — demo catalog, feature & sector metadata
const DEMO_PRODUCTS = [
  { id: 'p1', name: 'Leke Karşıtı Serum', price: 299, old: 349, emoji: '🧪', colors: ['#008060', '#6DAE4F'], cat: 'Cilt', stock: 12, barcode: '8690123456789' },
  { id: 'p2', name: 'Oversize Ceket', price: 899, old: 1299, emoji: '🧥', colors: ['#1A3D30', '#5A6A63'], cat: 'Giyim', stock: 8, barcode: '8690123456790' },
  { id: 'p3', name: 'Altın Yüzük 14K', price: 12480, old: 0, emoji: '💍', colors: ['#C9A227', '#E8D48B'], cat: 'Takı', stock: 3, barcode: '8690123456791' },
  { id: 'p4', name: '3\'lü Koltuk', price: 18990, old: 21990, emoji: '🛋️', colors: ['#2C5F4A', '#7BA88F'], cat: 'Mobilya', stock: 5, barcode: '8690123456792' },
  { id: 'p5', name: 'Organik Yumurta (30\'lu)', price: 189, old: 0, emoji: '🥚', colors: ['#E8A838', '#F5D48A'], cat: 'Gıda', stock: 48, barcode: '8690123456793' },
  { id: 'p6', name: 'Gözenek Toniği', price: 249, old: 0, emoji: '💧', colors: ['#4A90A4', '#A8D4E0'], cat: 'Cilt', stock: 20, barcode: '8690123456794' },
];

const FEATURES = [
  { id: 'shop', label: 'Mağaza', title: 'Ana mağaza deneyimi', desc: 'Anasayfa blokları, ürün detayı, favoriler, sepet ve tek tıkla ödeme — uygulamanın kalbi.', eyebrow: 'Çekirdek' },
  { id: 'sync', label: 'Shopify Senkron', title: 'Shopify ile tam senkron', desc: 'Ürün, stok, fiyat ve siparişler çift yönlü senkronize. Shopify paneliniz aynen kalır.', eyebrow: '01 · Senkron' },
  { id: 'push', label: 'Push Bildirim', title: 'Sınırsız push bildirim', desc: 'Kampanya, stok ve indirim duyurusu sıfır maliyetle. Segment bazlı üyeye özel teklifler.', eyebrow: '02 · Pazarlama' },
  { id: 'speed', label: 'Native Hız', title: 'Native hız ve performans', desc: 'Webview değil gerçek native kod: anlık sayfa geçişi, kamera–GPS–dokunmatik entegrasyon.', eyebrow: '03 · Performans' },
  { id: 'abandon', label: 'Terk Sepet', title: 'Terk edilen sepet kurtarma', desc: 'Sepette kalan ürün için otomatik hatırlatma — istersen küçük bir indirim kuponuyla.', eyebrow: '04 · Dönüşüm' },
  { id: 'pay', label: 'Tek Tıkla Ödeme', title: 'Apple Pay & Google Pay', desc: 'Kayıtlı kart ve cüzdanlarla satın alma iki dokunuşta biter.', eyebrow: '05 · Ödeme' },
  { id: 'barcode', label: 'Barkod Arama', title: 'Barkod ile arama', desc: 'Kameraya okutun veya numarayı girin; ürünü saniyeler içinde bulun.', eyebrow: '06 · Arama' },
  { id: 'alerts', label: 'Stok & Fiyat Alarmı', title: 'Stok ve fiyat alarmı', desc: 'Ürün stoklandığında veya fiyatı düştüğünde otomatik bildirim. Kaçan satış geri gelir.', eyebrow: '07 · Alarmlar' },
  { id: 'locale', label: 'Dil & Para', title: 'Çoklu dil ve para birimi', desc: 'Telefon diline otomatik uyum; TL, USD, EUR ile satış. E-ihracata hazır.', eyebrow: '08 · Yerelleştirme' },
  { id: 'admin', label: 'Admin Panel', title: 'Kolay panel yönetimi', desc: 'Anasayfa bloklarını sürükle-bırak ile düzenleyin. Kampanya vitrini aynı gün yayında.', eyebrow: '09 · Yönetim' },
  { id: 'brand', label: 'Marka Tasarımı', title: 'Markanıza özel tasarım', desc: 'Renk, font ve yerleşim marka kimliğinize göre. Şablon değil, size ait arayüz.', eyebrow: '10 · Tasarım' },
  { id: 'analytics', label: 'Raporlama', title: 'Detaylı raporlama', desc: 'Hangi push satış getirdi, hangi ürün favorilendi — tüm uygulama verisi tek ekranda.', eyebrow: '11 · Analitik' },
  { id: 'ownership', label: 'Kod & Veri', title: 'Veri ve kod mülkiyeti sizde', desc: 'Kaynak kod, mağaza hesapları ve müşteri verisi tamamen size aittir.', eyebrow: '12 · Mülkiyet' },
];

const SECTORS = [
  {
    id: 'kozmetik',
    name: 'Kozmetik & Güzellik',
    modules: [
      { id: 'skin', label: 'AI Cilt Analizi', title: 'AI Cilt Analizi', desc: 'Selfie ile leke, kırışıklık, gözenek skoru; doğrudan ürün önerisi.' },
      { id: 'armakeup', label: 'AR Makyaj', title: 'AR Makyaj Deneme', desc: 'Ruj ve far tonları kamerada gerçek zamanlı yüzde denenir.' },
      { id: 'refill', label: 'Bitince Hatırlat', title: 'Bitince Hatırlat', desc: 'Tükenme periyodu hesaplanır, tek tıkla yenile bildirimi gider.' },
      { id: 'barreorder', label: 'Barkodla Yeniden', title: 'Barkodla Yeniden Sipariş', desc: 'Boş kutunun barkodunu okutun; 10 saniyede sepete.' },
      { id: 'routine', label: 'Cilt Rutini', title: 'Cilt Rutini Oluşturucu', desc: 'Sabah/akşam rutini sizin ürünlerinizden kurulur.' },
      { id: 'subbox', label: 'Abonelik Kutusu', title: 'Abonelik Kutusu', desc: 'Aylık düzenli gönderim, otomatik tahsilat.' },
    ],
  },
  {
    id: 'kuyum',
    name: 'Kuyum & Takı',
    modules: [
      { id: 'arring', label: 'AR Yüzük', title: 'AR Parmakta Görselleştirme', desc: 'Metal ve taş seçin; yüzük gerçek ölçekte parmağınızda.' },
      { id: 'gold', label: 'Canlı Altın', title: 'Canlı Altın Fiyatlandırma', desc: 'Gram fiyatı resmi kurdan; işçilik + KDV formülünüzle otomatik.' },
      { id: 'cert', label: 'Sertifika QR', title: 'Sertifika QR Doğrulama', desc: 'GIA/JTR doğrulaması laboratuvar sunucusundan.' },
      { id: 'gift', label: 'Hediye Asistanı', title: 'Hediye Asistanı', desc: 'Kime, bütçe, vesile — üç soruda doğru hediye.' },
      { id: 'compare', label: 'Karşılaştırma', title: 'Karşılaştırma Tablosu', desc: 'Karat, kesim, saflık, fiyat yan yana.' },
    ],
  },
  {
    id: 'giyim',
    name: 'Giyim & Butik',
    modules: [
      { id: 'size', label: 'Beden Önerisi', title: 'Beden Önerisi', desc: 'Ölçü anketi + kalıp notu = doğru beden, daha az iade.' },
      { id: 'outfit', label: 'Kombin Önerici', title: 'Kombin Önerici', desc: 'Çapraz satış: bununla ne giyilir.' },
      { id: 'story', label: 'Story & Canlı', title: 'Story & Canlı Yayın Satışı', desc: 'Story ve canlıda ürün etiketi, tek dokunuşla sepet.' },
      { id: 'restock', label: 'Gelince Haber', title: 'Gelince Haber Ver', desc: 'Tükenen beden stoklanınca otomatik push.' },
      { id: 'early', label: 'Erken Erişim', title: 'Erken Erişim', desc: 'Yeni koleksiyon önce uygulama kullanıcılarına.' },
    ],
  },
  {
    id: 'gida',
    name: 'Gıda & Süpermarket',
    modules: [
      { id: 'slot', label: 'Teslimat Saati', title: 'Teslimat Saati Seçimi', desc: 'Gün ve saat aralığı; kurye rotası otomatik dolar.' },
      { id: 'reorder', label: 'Tekrar Sipariş', title: 'Hızlı Tekrar Sipariş', desc: 'Geçen haftaki sepet tek dokunuşla yeniden.' },
      { id: 'recipe', label: 'Tariften Sepete', title: 'Tariften Sepete', desc: 'Tarifin tüm malzemeleri tek tıkla sepete.' },
      { id: 'box', label: 'Abonelikli Kutu', title: 'Abonelikli Kutu', desc: 'Haftalık sebze-meyve veya kahve aboneliği.' },
      { id: 'region', label: 'Bölge Stok', title: 'Bölge Bazlı Stok', desc: 'Adrese göre en yakın depo stoğu.' },
    ],
  },
  {
    id: 'ev',
    name: 'Ev & Mobilya',
    modules: [
      { id: 'arroom', label: 'AR Odada Gör', title: 'AR Odanda Gör', desc: 'Koltuk, masa, halı gerçek ölçekte odanızda.' },
      { id: 'measure', label: 'Ölçü Kontrolü', title: 'Ölçü Kontrolü', desc: 'Kapı/asansör ölçüleriyle eve girer mi doğrulanır.' },
      { id: 'fabric', label: 'Kumaş & Renk', title: 'Kumaş ve Renk Seçici', desc: 'Tüm varyantlar anında görselleşir.' },
      { id: 'roomset', label: 'Oda Koleksiyonu', title: 'Oda Bazlı Koleksiyon', desc: 'Oturma odasını tamamla paketi.' },
      { id: 'install', label: 'Montaj Randevu', title: 'Teslimat + Montaj Randevusu', desc: 'Montaj gününü uygulamadan seçin.' },
    ],
  },
  {
    id: 'genel',
    name: 'Genel E-ticaret',
    modules: [
      { id: 'loyalty', label: 'Sadakat Puanı', title: 'Sadakat Puanı', desc: 'Her alışverişte puan; yalnızca uygulamada harcama.' },
      { id: 'segment', label: 'Segmentasyon', title: 'Akıllı Segmentasyon', desc: 'Sipariş geçmişine göre otomatik gruplar ve push.' },
      { id: 'flash', label: 'Flaş İndirim', title: 'Flaş İndirim', desc: 'Yalnızca uygulamaya özel süreli kampanyalar.' },
      { id: 'track', label: 'Kargom Nerede', title: 'Kargom Nerede', desc: 'Sipariş sonrası canlı kargo takibi uygulama içinde.' },
      { id: 'quickcart', label: 'Hızlı Sepet', title: 'Favoriler & Hızlı Sepet', desc: 'Düzenli alınan ürünler tek dokunuşta sepette.' },
    ],
  },
];

function formatPrice(amount, locale) {
  const map = {
    tr: { cur: 'TRY', symbol: '₺', rate: 1 },
    en: { cur: 'USD', symbol: '$', rate: 1 / 34 },
    de: { cur: 'EUR', symbol: '€', rate: 1 / 36.5 },
  };
  const L = map[locale] || map.tr;
  const v = amount * L.rate;
  if (locale === 'tr') return '₺' + v.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
  if (locale === 'en') return '$' + v.toFixed(2);
  return '€' + v.toFixed(2);
}

Object.assign(window, { DEMO_PRODUCTS, FEATURES, SECTORS, formatPrice });
