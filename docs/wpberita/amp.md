---
title: Setting AMP pada Theme Wpberita
outline: deep
---

# Setting AMP pada Theme Wpberita

## Dukungan AMP

- Hampir semua tema Idtheme mendukung layout AMP (Hanya official AMP yang didukung).
- Aktifkan plugin AMP resmi WordPress. [Link plugin official AMP.](https://wordpress.org/plugins/amp/)

## Rekomendasi

- Gunakan mode Standard atau Transitional sesuai kebutuhan. Rekomendasi menggunakan mode Transitional.

Berikut screenshot pengaturan mode Transitional pada **Dashboard -> AMP -> Settings**:

![Screenshot pengaturan mode Transitional pada Dashboard -> AMP -> Settings](/general/amp/amp-tempate-mode.jpg)

- Jangan redirect mobile visitor to AMP.

Pada other settings **redirect mobile visitor to AMP**, aktifkan opsi ini jika anda ingin mengarahkan visitor mobile ke halaman AMP, rekomendasi di nonaktifkan saja. Berikut screenshot pengaturan ini:

![Screenshot pengaturan redirect mobile visitor to AMP pada Dashboard -> AMP -> Settings](/general/amp/amp-other-settings.jpg)

- Lakukan suppress plugin jika ada plugin yang tidak support AMP.

Theme sudah support AMP, terkadang ada beberapa plugin yang tidak support AMP, menyebabkan error AMP. Silahkan cek plugin tersebut apakah support AMP atau tidak. Jika tidak support, lakukan suppress plugin tersebut. Berikut screenshot pengaturan suppress plugin:

![Screenshot pengaturan suppress plugin pada Dashboard -> AMP -> Settings](/general/amp/amp-suppress-plugin.jpg)

- Pastikan komponen iklan dan script pihak ketiga kompatibel.
- Uji halaman dengan Google AMP Test untuk memastikan valid.

## AMP di Customizer

Untuk meminimalkan beberapa tampilan, beberapa fitur seperti widget, komentar dan widget di hapus pada halaman amp nya.

Tapi anda tidak perlu kuatir disini saya sematkan beberapa pengaturan untuk menampilkan iklan pada laman amp dan juga jika anda menggunakan page level ads, disini saya juga menyematkan pengaturan head script khusus laman amp. Berikut adalah pengaturan nya:

1. Silahkan anda masuk ke Customizer, setelah itu anda masuk ke menu AMP (New), nah disana anda bisa mengatur iklan yang akan muncul halaman amp anda. Silahkan lihat gambar berikut:

![Pengaturan AMP Ads di Customizer](/general/amp/amp-customizer-wpberita.jpg)

2. Untuk mempelajari iklan apa saja yang support dan format iklannya, silahkan anda kunjungi halaman berikut untuk mempelajarinya:

https://amp.dev/documentation/components/amp-ad/

Jika anda menggunakan adsense, silahkan anda pelajari format iklan adsense di:

https://github.com/ampproject/amphtml/blob/master/ads/google/adsense.md

Bagaimana cara saya mengetahui agar halaman AMP saya valid? Silahkan anda kunjungi link berikut untuk mengetahui validasi halaman AMP anda:

https://validator.ampproject.org

## Penyesuaian

- Jika tema menyediakan pengaturan khusus AMP, aktifkan di Customizer atau Options yang relevan.
- Minimalisir CSS kustom dan hindari JS inline yang tidak kompatibel.

## FAQ

Q. **Kenapa plugin saya yang tidak bekerja di laman AMP nya?**

*Pastikan plugin yang anda gunakan support AMP, tanyakan ke pihak developer nya untuk mengetahui bahwa plugin tersebut bekerja di laman AMP.*

Q. **Kenapa javascript saya tidak bekerja di laman AMP?**

*AMP tidak support javascript, buat kamu yang memasukkan javascript misalnya di postingan, bisa dipastikan tidak akan bekerja, jadi nonaktifkan plugin AMP jika anda membutuhkan javascript di postingan.*

Q. **Kenapa saya nonaktifkan plugin AMP, namun laman AMP masih valid?**

*Jika anda nonaktifkan plugin AMP, maka secara otomatis laman AMP anda tidak akan memiliki AMP.*

Q. **Kenapa laman AMP saya tidak valid?**

*Cek apakah ada error di validator AMP. Jika ada, silahkan perbaiki error tersebut. Pada dasarnya, error tersebut terjadi karena ada script atau plugin yang tidak didukung oleh AMP.*

Q. **Kenapa settingan AMP ada Error Index ya?**

*Biasanya dari plugin lain yang menyebabkan error index, lakukan suppressed pada plugin tersebut, lihat tutorial diatas.*
