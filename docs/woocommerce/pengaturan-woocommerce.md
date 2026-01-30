---
title: Sedikit Tutorial Pengaturan pada Plugin WooCommerce
outline: deep
---

# Sedikit Tutorial Pengaturan pada Plugin WooCommerce

## Video Tutorial 
<YouTubeEmbed video-id="c3pMXQdyCMc" />

Disini saya akan sedikit mengulas tentang pengaturan pada plugin woocommerce. Woocommerce bisa dibilang cukup kompleks untuk pengaturannya, untuk selengkapnya bisa anda lihat pada video diatas.

## Pengaturan woocommerce

Semua pengaturan woocommerce berada di menu woocommerce pada dashboard anda.

## Orders
Pada menu ini, anda dapat melihat semua pesanan pesanan dari pelanggan anda. Anda juga dapat mengatur status pesanan anda disini. Untuk selengkapnya bisa anda lihat pada video diatas.

## Coupons
Pada menu ini, anda dapat membuat kode kupon untuk pelanggan anda, kode kupon tersebut dapat dijadikan diskon khusus, dan lain sebagainya.

## Reports
Pada menu ini, anda dapat melihat laporan laporan penjualan anda.

## Settings
Nah pada menu inilah pengaturan pengaturan penting pada woocommerce bisa anda temukan. Berikut sedikit penjelasan mengenai menu settings.

### Tab General
Store Address = Menentukan negara dan alamat toko anda (yaitu, di mana anda ditempatkan sebagai penjual). Ini menentukan tarif pajak default dan lokasi pelanggan.

#### General Options
- **Selling location(s)** = Pilih untuk menjual ke semua negara atau ke negara tertentu. Anda dapat memilih beberapa negara atau negara tertentu.
- **Shipping Location(s)** = Pilih untuk mengirim hanya ke negara yang anda jual ke, atau sebagian negara. Anda dapat menonaktifkan pengiriman & semua fungsi yang terkait dengan pengiriman.
- **Default customer location** = Pilih lokasi yang kami asumsikan pengunjung situs berada, sebelum mereka memasukkannya, untuk menghitung pajak dan pengiriman.
  - **Shop base address** = Memberi tahu sistem untuk menganggap mereka berada di lokasi yang sama dengan toko anda.
  - **No address** = Tidak memberi meleka lokasi, dan tidak ada pajak yang dihitung.
  - **Geolocate address** = Memverifikasi di mana lokasi mereka saat ini dan menghitung pajak yang sesuai.
  - **Geolocate with page caching** support halaman sama seperti di atas, tetapi geolokasi melalui Ajax. Anda mungkin melihat URL situs web Anda memiliki ?v=xxxxx ditambahkan ke mereka. Ini normal untuk mencegah caching statis harga.
- **Enable Taxes** = Aktifkan atau nonaktifkan pajak di toko anda.

#### Currency Options
Opsi yang memengaruhi bagaimana harga ditampilkan di frontend.

- **Currency** = Pilih mata uang default untuk toko. Hanya satu yang dapat dipilih. Kalau indonesia pilih Indonesia Rupiah.
- **Currency Position** = Pilih posisi mata uang default untuk harga: Kiri, Kanan, Kiri / Kanan dengan spasi
- **Thousand Separator** = Pilih simbol yang digunakan untuk seribu pemisah: 1,000 atau 1.000
- **Decimal Separator** = Pilih simbol yang akan digunakan untuk pemisah desimal: 100,00 atau 100.00

### Tab Products

Terdapat 3 sub menu yaitu General, Inventory dan Downloadable products.

#### General

- **Shop Page** = Pilih halaman apa yang anda ingin menjadi halaman toko default. Tidak perlu halaman toko yang dipasang WooCommerce, atau dapat dilewati jika anda menggunakan metode lain untuk menampilkan produk.
- **Add to cart behavior** = Pilih bagaimana tombol “Add to Cart” harus berperilaku.
  - **Redirect to cart page after successful addition** = Secara otomatis membawa pelanggan ke laman keranjang setelah menambahkan produk.
  - **Enable AJAX add to cart buttons on archives** = Menambahkan opsi ‘Add To Cart’ untuk berbelanja halaman arsip.
- **Measurements** = Pilih unit pengukuran untuk berat dan dimensi produk.
- **Reviews** = Pilih apakah akan ditampilkan jika reviewer membeli produk
- **Kontrol jika ada yang dapat meninggalkan ulasan atau hanya pembeli** = Pilih apakah ulasan harus diperlukan oleh pembeli atau tidak.

#### Inventory

Pilih apakah akan mengaktifkan manajemen stok. Jika dipilih, anda akan memiliki opsi ini:

- **Manage stock**
  - **Enable stock management** – Inventaris untuk produk fisik dikelola secara otomatis. Anda dapat memasukkan kuantitas, dan WooCommerce mengurangi item saat penjualan dilakukan, menampilkan: Stok, Tidak Ada Stok atau Di Pemesanan Kembali.
  - **Disable stock management** – Inventarisasi dan status untuk produk fisik harus dimasukkan secara manual. Anda masih dapat mengaktifkan Manage Stock pada tiap produk, jika diinginkan. Silahkan lihat [Cara Posting Produk di WooCommerce](/woocommerce/posting-produk.md)
- **Hold Stock (minutes)** = Tahan produk (untuk pesanan yang belum dibayar) selama X menit. Ketika batas tercapai, pesanan yang tertunda dibatalkan. Biarkan kosong untuk menonaktifkan.
- **Notifications**
  - **Enable low stock notifications** = Aktifkan pemberitahuan stok rendah
  - **Enable out of stock notifications** = Aktifkan pemberitahuan kehabisan stok
- **Notification Recipient** = Masukkan alamat email untuk pemberitahuan
- **Low Stock Threshold** = Jumlah produk untuk memicu pemberitahuan stok rendah
- **Out Of Stock Threshold** = Jumlah produk untuk memicu keluar dari status stok
- **Out Of Stock Visibility** = Pilih untuk menyembunyikan stok barang dari katalog
- **Stock Display Format** = Pilih bagaimana stok akan ditampilkan di frontend.
  - **Always show stock** = Selalu menampilkan stok misal “12 in stock”
  - **Only show when low stock** = Hanya ditampilkan ketika stok rendah “Only 2 left in stock” vs. “In stock”
  - **Never show stock** = Jangan pernah menampilkan jumlah

#### Downloadable products

- **File Download Method** = Mengontrol bagaimana toko Anda menyediakan file yang dapat diunduh ke pembeli. Ini digunakan jika anda menjual produk digital yang dapat di download.
  - **Force Downloads** – File dipaksa untuk diunduh melalui skrip PHP. File tidak dapat diakses oleh siapa pun kecuali pembeli, dan tautan langsung disembunyikan.
  - **X-Accel-Redirect / X-Sendfile** = Mirip dengan ‘forced’ di atas, tetapi memiliki performa yang lebih baik dan dapat mendukung file yang lebih besar. Ini mengharuskan penyedia hosting anda mendukung X-Sendfile atau X-Accel-Redirect, jadi anda perlu memeriksa terlebih dahulu.
  - **Redirect only** = URL unduhan menghubungkan pengguna ke file. File tidak dilindungi dari akses luar.

Sebagian besar toko harus menggunakan salah satu dari dua metode pertama untuk menjaga keamanan file dari akses luar. Pengalihan hanya boleh digunakan jika anda mengalami masalah atau tidak keberatan unduhan tidak aman.

- **Access Restriction** = Memilih apakah unduhan harus memerlukan login atau tidak. Tidak berlaku untuk pembelian tamu.
  - **Select if downloads require login** = Tidak berlaku untuk pembelian tamu.
  - **Grant access to downloadable products after payment** = Aktifkan untuk memberikan akses ke unduhan saat pesanan sedang memproses, bukan selesai.

### Shipping

Terdapat 3 sub menu yaitu Shipping Zone, Shipping Options dan Shipping Classes.

#### Shipping Zone

Pengaturan pengiriman yang utama adalah Shipping zone. Pikirkan zona pengiriman sebagai wilayah geografis di mana satu set metode pengiriman tertentu dan tarifnya berlaku untuk wilayah tertentu. Dan kebanyakan plugin shipping harus anda atur disini, misalnya woongkir atau plugin ongkir lainnya, pengaturannya berada disini.

Pertama-tama anda harus klik Add New Shipping Zone, maka akan keluar pengaturan lainnya. Terdapat pengaturan antara lain:

- **Zone Name** = Nama zona anda, misalnya Indonesia.
- **Zone Regions** = Silahkan pilih wilayah anda, misalnya Indonesia.
- **Shipping Method** = Silahkan anda klik Add Shipping Method. Maka akan muncul popup, anda dapat memilih metode pengiriman anda, misalnya anda menggunakan plugin woongkir, maka silahkan anda pilih woongkir, setelah itu akan muncul settingan lagi pada woongkir, anda klik saja untuk mempelajari pengaturan woongkir (Di tutorial berikutnya akan saya buatkan tutorial menambahkan plugin ongkir).

#### Shipping Options

- **Shipping Calculations**
  - Aktifkan kalkulator pengiriman pada halaman keranjang
  - Sembunyikan biaya pengiriman hingga alamat dimasukkan
- **Shipping Destination** = Kirim ke alamat penagihan atau alamat pengiriman pelanggan secara default atau hanya kirim ke alamat penagihan pengguna.
- **Debug Mode** = Aktifkan hanya untuk tujuan pemecahan masalah.

### Checkout

#### Checkout Options

- **Coupons**
  - Centang untuk mengaktifkan penggunaan kupon – Kupon dapat diterapkan dari layar urutan edit admin (untuk pesanan yang belum dibayar), keranjang dan halaman checkout.
  - Calculate coupon discounts sequentially = Mengubah logika perhitungan kupon untuk menerapkan kupon secara berurutan di atas satu sama lain, daripada mendasarkannya pada harga produk asli. Saat menerapkan beberapa kupon ini, terapkan kupon pertama ke harga penuh dan kupon kedua ke harga diskon dan seterusnya.
- **Checkout Process**
  - Enable guest checkout = Memungkinkan pelanggan untuk checkout tanpa membuat akun.
  - Force secure checkout = Paksa SSL (HTTPS) pada halaman pembayaran. Sertifikat SSL diperlukan, jika dipilih.
- **Checkout pages**

Halaman perlu ditetapkan agar WooCommerce tahu ke mana harus mengirim pengguna untuk checkout: Cart, Checkout, Persyaratan dan Ketentuan.

Anda tidak perlu menggunakan halaman WooCommerce yang diinstal, tetapi anda harus memiliki satu set halaman untuk halaman Cart dan Checkout. Kalau tidak, pelanggan anda tidak dapat membeli dan membayar. Tutorial bisa anda lihat pada video diatas.

Cart dan checkout biasanya dibuat dan diatur saat memasang/mengatur WooCommerce.

Untuk menggunakan halaman Syarat dan Ketentuan, buat halaman baru untuknya di Pages -> Add New, lalu pilih halaman di dropdown. Syarat dan Ketentuan muncul sebaris selama checkout, dan pelanggan dapat mencentang kotak untuk menerima Syarat dan Ketentuan dari anda sebelum melakukan pesanan.

#### Checkout Endpoints

Endpoint ditambahkan ke URL halaman untuk menangani tindakan tertentu selama proses checkout. Biarkan default kalau anda tidak mengerti, atau bisa anda pelajari langsung disini: https://docs.woocommerce.com/document/woocommerce-endpoints-2-1/

#### Payment gateways

Gateway yang terpasang terdaftar dan dapat di drag and drop untuk mengontrol urutan di mana mereka ditampilkan kepada pelanggan. Anda dapat menambahkan pembayaran via transfer bank, COD, paypal dan lain sebagainya disini.

### Accounts

#### Account pages

Halaman perlu diatur agar WooCommerce tahu ke mana harus mengirim pengguna untuk mengakses fungsionalitas terkait akun. Sama seperti halnya cart, checkout, dan lain sebagainya, halaman ini wajib, silahkan anda lihat tutorial video diatas sampai selesai.

Pilih halaman dari dropdown yang ingin anda gunakan untuk halaman my-account.

#### Customer registration
- **Centang Enable registration on the Checkout page** = Untuk Mengaktifkan pendaftaran pada halaman Checkout
- Centang Enable registration on the My Account page untuk mengaktifkan registrasi di halaman Akun Saya
- **Centang Display returning customer login reminder on the Checkout page** = Untuk menampilkan mengembalikan pengingat masuk pelanggan di laman Checkout
- **Account Creation**
  - **Centang Automatically generate username from customer email** = Untuk secara otomatis menghasilkan nama pengguna dari email pelanggan
  - **Centang Automatically generate customer password** = Untuk secara otomatis menghasilkan kata sandi pelanggan
- **My Account Endpoints**

Endpoint ditambahkan ke URL halaman untuk menangani tindakan tertentu pada halaman my account. Biarkan default kalau anda tidak mengerti, atau bisa anda pelajari langsung disini: https://docs.woocommerce.com/document/woocommerce-endpoints-2-1/

### Emails

Untuk setiap email WooCommerce yang tercantum, dimungkinkan untuk mengonfigurasi pengaturan anda (opsional). Petunjuk lebih rinci di bawah ini.

![WooCommerce Email Settings](/woocommerce/pengaturan-woocommerce/woocommerce-email-settings.jpg)

#### Email sender options
Setel “From” Name dan “From” Address untuk pengirim pada pengaturan ini.

#### Email Templates
Bagian ini memungkinkan anda menyesuaikan email WooCommerce.

#### Header Image
Masukkan URL gambar yang ingin anda tampilkan di header email. Anda dapat mengunggah gambar melalui tombol Add Media atau Media -> Add New.

#### Email and Text
- **Base Color** – Warna untuk template email WooCommerce.
- **Background Color** – Warna latar belakang untuk template email WooCommerce.
- **Email Body Background Color** – Warna latar belakang body utama.
- **Email Body Text Color** – Warna teks body utama.

Untuk kontrol lebih lanjut, salin **woocommerce/templates/emails/** ke folder **yourchildtheme/woocommerce/emails/**. Atau anda dapat mentranslate email menggunakan plugin loco translate.

#### Editing Individual Email Templates:

Pada daftar diatas dalam Notifikasi Email adalah templat ini:
**New order | Cancelled order | Failed order | Processing order | Completed order | Refunded order | Customer invoice | Customer note | Reset password | New account**

Klik logo gear di sisi kanan, dan akan muncul pengaturan baru.

![WooCommerce Email Template Settings](/woocommerce/pengaturan-woocommerce/pengaturan-email-lanjutan-woocommerce.jpg)

- **Enable/Disable** – untuk mengaktifkan pemberitahuan email ini.
- **Recipient(s)** – Masukkan penerima (dipisahkan koma) untuk email ini.
- **Subject** – Ini mengontrol baris subjek email. Biarkan kosong untuk menggunakan subjek default:
[{site_title}] New customer order ({order_number}) – {order_date}
- **Email Heading** – Ini mengontrol judul utama yang terdapat dalam pemberitahuan email. Biarkan kosong untuk menggunakan judul default.
- **Email type** – Pilih format email mana yang akan dikirim. Pilihan termasuk:
  - Plain Text
  - HTML
  - Multipart

Jika menggunakan email Plain Text, perlu diingat bahwa bidang teks dibatasi hingga 155 karakter. Jika produk anda memiliki nama panjang dan / atau banyak variasi / add-on, bidang tersebut dapat terpotong.

#### HTML template

Untuk mengganti dan mengedit template email ini, salin misalnya **woocommerce/templates/emails/admin-new-order.php** pada folder theme anda **yourchildtheme/woocommerce/emails/admin-new-order.php**. Atau anda juga dapat menggunakan plugin loco translate untuk mentranslate bahasa email.

### API

Ini adalah pengaturan untuk developer, anda dapat mengatur API, webhook, dan lain sebagainya disini, untuk pengguna biasa, tidak terlalu disarankan untuk setting disini.

Sumber: https://docs.woocommerce.com/document/configuring-woocommerce-settings/

Diatas menggunakan woocommerce bahasa inggris, jika anda menggunakan bahasa indonesia, maka pengaturan juga akan berubah ke bahasa indonesia, jadi sesuaikan saja.

Semoga bermanfaat kalau ada yang ingin ditanyakan langsung saja kontak.