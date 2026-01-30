---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Dokumentasi Idtheme"
  tagline: "Panduan, referensi, dan best practice penggunaan produk Idtheme"
  image:
    src: /home-image.svg
    alt: Dokumentasi Idtheme
  actions:
    - theme: brand
      text: Guide
      link: /guide/
    - theme: alt
      text: Jurnalpress
      link: /jurnalpress/

features:
  - icon: 📘
    title: Guide
    details: "Panduan umum selain dari dokumentasi theme."
    link: /guide/
    linkText: Lihat Panduan
  - icon: 📝
    title: Jurnalpress
    details: "Dokumentasi lengkap untuk theme Jurnalpress: install, posting, optimasi."
    link: /jurnalpress/
    linkText: Buka Dokumentasi
---

<Links
  :grid="3"
  :items="[
    {
      icon: { light: 'fluent-color:book-open-lightbulb-20', dark: 'fluent-color:book-open-lightbulb-20', color: { light: '#000000', dark: '#FFFFFF' } },
      name: `Dokumentasi Theme Lama`,
      desc: 'Untuk dokumentasi theme lama, silakan kunjungi halaman ini.',
      link: 'https://www.idtheme.com/docs/',
      linkText: 'Lihat Dokumentasi',
      style: '--idt-Links-bg: #ff52e51e;'
    },
    {
      icon: { light: 'fluent-color:toolbox-32', dark: 'fluent-color:toolbox-32', color: { light: '#000000', dark: '#FFFFFF' } },
      name: `Cara Beli Theme`,
      desc: 'Pembelian theme sangat mudah dan cepat. Silakan ikuti langkah-langkah di dokumentasi ini.',
      link: 'https://www.idtheme.com/docs/cara-melakukan-pembelian-theme-di-kentooz-atau-idtheme/',
      linkText: 'Lihat Dokumentasi',
      style: '--idt-Links-bg: #30ff4c10;'
    },
    {
      icon: { light: 'fluent-color:chat-48', dark: 'fluent-color:chat-48', color: { light: '#000000', dark: '#FFFFFF' } },
      name: 'Kontak Kami',
      desc: 'Jika Anda memiliki pertanyaan atau masalah, silakan hubungi kami.',
      link: 'https://www.idtheme.com/kontak-kami/',
      style: '--idt-Links-bg: #3056ff10;'
    }
  ]"
/>
