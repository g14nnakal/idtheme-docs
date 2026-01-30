---
title: Cara Menambahkan OpenGraph pada Theme Idtheme
outline: deep
---

# OpenGraph pada Theme Idtheme

OpenGraph (OG) adalah sekumpulan meta tag yang membantu platform seperti Facebook, Twitter, WhatsApp, dan Pinterest menampilkan judul, deskripsi, dan gambar yang benar ketika halaman Anda dibagikan. Pada rilis theme terbaru, OpenGraph bawaan theme Idtheme dihapus karena:
- Hampir semua plugin SEO populer (Yoast, All In One SEO, Rank Math, WP SEOPress) sudah menyediakan fitur OpenGraph.
- Banyak pengguna tidak menonaktifkan OG dari theme maupun plugin sehingga terjadi duplikasi OG dan membuat loading website lebih berat.

Rekomendasi: gunakan OpenGraph dari plugin SEO saja dan nonaktifkan OG dari theme jika masih ada.

## OpenGraph dengan Yoast SEO

Yoast adalah salah satu plugin SEO paling populer dengan fitur OG yang cukup lengkap.

### Mengaktifkan OpenGraph Yoast

1. Masuk ke dashboard WordPress Anda.
2. Buka menu **SEO -> Social**.
3. Pada tab **Facebook**, aktifkan **Add Open Graph meta data** atau opsi serupa (pastikan statusnya Enabled).

Jika opsi Facebook App ID sudah tidak tersedia, ini adalah perubahan dari Yoast versi terbaru. Penjelasan lengkap dapat dilihat di: https://yoast.com/help/fb-app-id-warnings

### Pengaturan OpenGraph Halaman Depan

Masih pada tab Facebook:
- Isi **Image URL**: gambar default untuk homepage.
- Isi **Title**: judul yang ingin ditampilkan saat homepage dibagikan.
- Isi **Description**: deskripsi singkat yang muncul di share card.

Jika postingan atau halaman tidak memiliki featured image, maka gambar default inilah yang akan digunakan.

### Pengaturan OpenGraph per Postingan

Yoast juga memungkinkan pengaturan OG per postingan:
- Buka salah satu postingan di editor.
- Scroll ke bagian pengaturan Yoast SEO.
- Di tab **Social** atau bagian khusus Facebook/Twitter:
  - Tentukan gambar yang ingin ditampilkan.
  - Edit judul (Facebook Title).
  - Edit deskripsi (Facebook Description).

Jika Anda tidak mengisi data di tab Social:
- Judul default postingan akan digunakan sebagai title.
- Excerpt atau ringkasan akan digunakan sebagai description.
- Featured image akan digunakan sebagai gambar OG.

Untuk panduan lebih lengkap, Anda dapat melihat dokumentasi resmi: https://kb.yoast.com/kb/getting-open-graph-for-your-articles/

### Contoh Tampilan Pengaturan Yoast

Berikut beberapa contoh tampilan pengaturan Yoast yang dapat Anda tiru (silakan simpan screenshot dari dashboard Anda dan taruh di folder public, kemudian sesuaikan path gambar):

![Pengaturan OpenGraph Yoast](/guide/opengraph/yoast-opengraph-settings.jpg)

## OpenGraph dengan All In One SEO Pack (AIOSEO)

AIOSEO juga menyediakan pengaturan OG yang cukup lengkap.

### Mengaktifkan OpenGraph AIOSEO

1. Masuk ke dashboard WordPress Anda.
2. Buka menu **All In One SEO -> Social Networks**.
3. Masuk ke tab **Facebook**.
4. Centang atau aktifkan opsi **Enable Open Graph Markup**.

### Pengaturan Gambar Default dan Sumber Gambar

Pada tab Facebook:
- **Default Post Image Source**: ubah ke **Featured Image**, sehingga secara default plugin menggunakan featured image untuk OG.
- **Default Post Facebook Image**: upload gambar default yang akan digunakan jika tidak ada featured image.
- Opsi lain (misal nomor 4 dan 5 pada screenshot referensi) bisa diisi sesuai kebutuhan branding Anda (nama situs, deskripsi, dsb).

Jika Anda ingin, Anda juga bisa mengisi:
- **Facebook Admin ID**
- **Facebook App ID**

Pengaturan ini opsional dan hanya perlu jika Anda ingin menghubungkan situs ke akun Facebook tertentu.

### Pengaturan OpenGraph per Postingan (AIOSEO)

Untuk mengatur OG per posting:

1. Buka salah satu postingan.
2. Scroll ke bagian pengaturan AIOSEO.
3. Masuk ke tab **Social**.
4. Pada tab Facebook:
   - Isi **Facebook Title**.
   - Isi **Facebook Description**.
   - Pilih **Image Source**:
     - Featured Image.
     - Custom Image (untuk mengunggah gambar khusus hanya untuk OG).

Dengan memilih **Custom Image**, Anda bisa mengunggah gambar khusus yang berbeda dari featured image untuk tampilan share Facebook.

### Contoh Tampilan Pengaturan AIOSEO

Tambahkan screenshot pengaturan AIOSEO untuk memudahkan user:

![Social Networks AIOSEO](/guide/opengraph/social-network-aio.jpg)

![OpenGraph AIOSEO](/guide/opengraph/opengraph-all-in-one-seo.jpg)

## OpenGraph dengan Rank Math

Rank Math juga menyertakan OpenGraph dan secara default fitur ini aktif.

### Pengaturan Gambar Default Rank Math

1. Masuk ke **Rank Math -> Titles & Meta**.
2. Masuk ke tab **Global Settings**.
3. Atur **Default Thumbnail** atau gambar default yang akan digunakan jika postingan tidak memiliki featured image.

### Pengaturan Social Meta Rank Math

1. Masuk ke **Rank Math -> Titles & Meta**.
2. Buka tab **Social Meta**.
3. Isi data sosial:
   - URL profil Facebook, Twitter, dan sosial media lainnya.
   - Opsi lain yang mendukung tampilan share yang lebih baik.

Secara default, Rank Math akan menggunakan **Featured Image** sebagai gambar OpenGraph untuk postingan. Jadi pastikan setiap postingan memiliki featured image.

### Pengaturan OpenGraph per Postingan (Rank Math)

Tergantung editor yang Anda gunakan:

#### Classic Editor

1. Buka postingan.
2. Scroll ke bawah hingga menemukan metabox Rank Math.
3. Masuk ke bagian atau tab sosial (ikon share).
4. Atur:
   - Gambar OG.
   - Title.
   - Description.

#### Gutenberg Editor

1. Buka postingan di Gutenberg.
2. Lihat di sisi kanan editor, Anda akan melihat nilai SEO (misalnya skor SEO Rank Math).
3. Klik panel tersebut, lalu klik ikon share (atau ikon yang berada di sebelah kanan ikon SEO).
4. Klik **Edit Snippet**.
5. Pada popup yang muncul, atur:
   - Gambar OG.
   - Title.
   - Description.

### Contoh Tampilan Pengaturan Rank Math

Anda dapat menyimpan screenshot dari pengaturan Rank Math Anda dan meletakkannya di folder public:

![OpenGraph Rank Math](/guide/opengraph/opengraph-rank-math.jpg)

## Tips dan Rekomendasi

- **Jangan aktifkan OG ganda**: pastikan hanya plugin SEO yang memasang meta OG. Nonaktifkan OG bawaan theme jika ada.
- **Gunakan featured image pada setiap postingan**: ini memastikan tampilan share konsisten dan menarik.
- **Uji hasil share**:
  - Facebook Sharing Debugger.
  - Twitter Card Validator.
  - Coba share ke WhatsApp/Telegram untuk melihat tampilan nyata.
- **Gunakan gambar berkualitas dan proporsional**:
  - Rekomendasi ukuran umum: 1200 x 630 px untuk Facebook.
  - Gunakan ukuran yang sama (atau serupa) untuk konsistensi di seluruh sosial media.

## Catatan Tambahan

Lalu bagaimana jika plugin seo yang anda gunakan tidak memiliki fitur opengraph? Sebagian besar plugin SEO memiliki fitur opengraph, jika plugin seo yang anda gunakan tidak memiliki fitur itu, jangan kuatir banyak sekali plugin opengraph, salah satu nya plugin ini: https://id.wordpress.org/plugins/wonderm00ns-simple-facebook-open-graph-tags/.

Setelah install opengraph, seharusnya share anda tidak bermasalah lagi, jika gambar yang tampil tidak sesuai kemungkinan bisa dari cache facebook atau whatsapp, anda bisa melakukan debug opengraph di: https://developers.facebook.com/tools/debug/

Ada kemungkinan juga server anda memblock opengraph dari facebook, untuk mengatasi, silahkan coba anda nonaktifkan mod_security, jika masih terkendala, silahkan anda coba tanyakan ke hosting provider anda agar tidak memblock opengraph dari facebook.

Catatan mengenai share whatsapp:

- Jika share whatsapp tidak menampilkan preview coba gunakan plugin ini: https://wordpress.org/plugins/og/
- Jika Hasilnya masih sama, coba nonaktifkan autoptimize beberapa user terkendala karena install autoptimize
- Coba juga set featured image menggunakan gambar dibawah 100 kb
- Jika masih sama coba nonaktifkan mod security di server
- Masih sama coba tanyakan ke pihak hosting atau bisa coba cari tutorial lainnya. 

Mohon pengertiannya, theme tidak menggunakan opengraph, dan semua opengraph harus menggunakan plugin, jika ada masalah mengenai gambar tidak tampil dan lain sebagainya, seharusnya itu bagian dari opengraph, karena tidak ada 1 pluginpun yang 100% menjamin gambar bakal tampil di whatsapp atau di facebook, karena kadang terjadi masalah antara server social media dan server masing-masing website, dan seharusnya menjadi bagian support dari plugin tersebut, diatas adalah salah satu solusi yang mungkin bisa mengurangi sedikit masalah tersebut.