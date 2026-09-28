# Eksik Görseller — Eticaret Sayfası

Bu belge, eticaret sayfalarında gerçek görselin yerini tutan placeholder içerikleri listeler.
Hazırlandığında ilgili satıra dosya yolu eklenip placeholder kaldırılmalıdır.

---

## index.html (Ana Sayfa)

| Bölüm | Placeholder Türü | Açıklama | Boyut Önerisi |
|---|---|---|---|
| Hero (3.1) | CSS telefon mockup (kod ile çizilmiş) | Gerçek uygulama ekran görüntüsü — ana sayfa veya ürün listesi | 390×844 px (iPhone 14 Pro) |
| 9.2 Kişiselleştirme Sahnesi | CSS telefon mockup | Kişiselleştirilmiş anasayfa ekranı — segmente özel içerik | 390×844 px |
| 9.3 Yönetim Paneli | CSS panel mockup | Gerçek admin panel ekranı — kampanya veya push ekranı | 1280×800 px (desktop) |
| 9.6 Uygulama Galerisi | 5× CSS telefon mockup | Gerçek ekran görüntüleri: Anasayfa, Ürün Detay, Sepet, Profil, Sipariş Takibi | 390×844 px × 5 |

---

## Sektör Sayfaları

| Sayfa | Eksik Görsel | Açıklama | Boyut Önerisi |
|---|---|---|---|
| /eticaret/kozmetik | Uygulama ekran görüntüsü | AI cilt analizi veya AR makyaj deneme ekranı | 390×844 px |
| /eticaret/kuyum | Uygulama ekran görüntüsü | Altın kur ekranı veya AR takı deneme | 390×844 px |
| /eticaret/giyim | Uygulama ekran görüntüsü | Beden öneri veya AR sanal deneme ekranı | 390×844 px |
| /eticaret/gida | Uygulama ekran görüntüsü | Haftalık alışveriş listesi veya abonelik ekranı | 390×844 px |
| /eticaret/mobilya | Uygulama ekran görüntüsü | AR oda yerleştirme veya ürün detay ekranı | 390×844 px |

---

## OG / Sosyal Medya Görselleri

| Sayfa | Dosya | Açıklama | Boyut |
|---|---|---|---|
| /eticaret | /eticaret/og-image.jpg | Ana sayfa Open Graph görseli | 1200×630 px |
| /eticaret/kozmetik | /eticaret/kozmetik/og-image.jpg | Kozmetik sayfa OG | 1200×630 px |
| /eticaret/kuyum | /eticaret/kuyum/og-image.jpg | Kuyum sayfa OG | 1200×630 px |
| /eticaret/giyim | /eticaret/giyim/og-image.jpg | Giyim sayfa OG | 1200×630 px |
| /eticaret/gida | /eticaret/gida/og-image.jpg | Gıda sayfa OG | 1200×630 px |
| /eticaret/mobilya | /eticaret/mobilya/og-image.jpg | Mobilya sayfa OG | 1200×630 px |

OG görseller hazır olduğunda her sayfanın `<head>` bölümüne eklenecek:
```html
<meta property="og:image" content="https://blueemberorg.com/eticaret/[sayfa]/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

---

## 9.5 Tanıtım Videosu

Tanıtım videosu URL'si DC config'e girildiğinde section otomatik görünür hale gelir.
`videoUrl` prop'una YouTube embed URL'si (`https://www.youtube.com/embed/VIDEO_ID`) girilmesi yeterlidir.

---

## Müşteri Yorumları (3.13)

Şu an avatar yerine CSS renkli harf baş harfi kullanılıyor.
Gerçek fotoğraf hazır olduğunda:
```html
<!-- Mevcut: -->
<div style="...background:linear-gradient(...)...">E</div>
<!-- Değiştirilecek: -->
<img src="/eticaret/testimonials/emir-y.jpg" style="width:40px;height:40px;border-radius:50%;object-fit:cover" alt="Emir Y.">
```

Fotoğraf boyutu: 80×80 px minimum, kare, WebP tercih edilir.
