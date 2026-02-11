---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Idtheme Documentation"
  tagline: "Guides, references, and best practices for using Idtheme products"
  image:
    src: /home-image.svg
    alt: Idtheme Documentation
  actions:
    - theme: brand
      text: Guide
      link: /en/guide/
    - theme: alt
      text: Jurnalpress
      link: /en/jurnalpress/

features:
  - icon: 📘
    title: Guide
    details: "General guides beyond theme documentation."
    link: /en/guide/
    linkText: View Guide
  - icon: 📝
    title: Jurnalpress
    details: "Comprehensive documentation for the Jurnalpress theme: installation, posting, optimization."
    link: /en/jurnalpress/
    linkText: Open Documentation
---

<Links
  :grid="3"
  :items="[
    {
      icon: { light: 'fluent-color:book-open-lightbulb-20', dark: 'fluent-color:book-open-lightbulb-20', color: { light: '#000000', dark: '#FFFFFF' } },
      name: `Old Theme Documentation`,
      desc: 'For old theme documentation, please visit this page.',
      link: '/en/old-docs/',
      linkText: 'View Documentation',
      style: '--idt-Links-bg: #ff52e51e;'
    },
    {
      icon: { light: 'fluent-color:toolbox-32', dark: 'fluent-color:toolbox-32', color: { light: '#000000', dark: '#FFFFFF' } },
      name: `How to Purchase Theme`,
      desc: 'Purchasing a theme is easy and fast. Please follow the steps in this documentation.',
      link: '/en/keanggotaan/pembelian-theme',
      linkText: 'View Documentation',
      style: '--idt-Links-bg: #30ff4c10;'
    },
    {
      icon: { light: 'fluent-color:chat-48', dark: 'fluent-color:chat-48', color: { light: '#000000', dark: '#FFFFFF' } },
      name: 'Contact Us',
      desc: 'If you have any questions or issues, please contact us.',
      link: 'https://www.idtheme.com/kontak-kami/',
      style: '--idt-Links-bg: #3056ff10;'
    }
  ]"
/>