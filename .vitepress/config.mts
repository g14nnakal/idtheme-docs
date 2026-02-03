import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: "docs",
  
  title: "Dokumentasi Idtheme",
  description: "Semua dokumentasi baik itu keanggotaaan, lisensi, tos, faq, theme ataupun plugin dari idtheme",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  appearance: false, // Disable dark mode
  // Assets will be served from / in production
  base: '/',
  
  // Clean URLs
  cleanUrls: true,
  
  // Sitemap for SEO
  sitemap: {
    hostname: 'https://docs.idtheme.com'
  },

  themeConfig: {
    logo: '/logo-idt.png',
    siteTitle: false,
    search: {
      provider: 'algolia',
      options: {
        appId: '4JTA5HUTK4',
        apiKey: 'df7287738e0d2f8832f1ce375a348593',
        indexName: 'idtheme-docs'
      }
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Beranda', link: 'https://www.idtheme.com/' },
      { text: 'Wordpress Theme', link: 'https://www.idtheme.com/theme-wordpress-indonesia/' },
      {
        text: 'Support',
        items: [
          { text: 'Dokumentasi', link: '/' },
          { text: 'Kontak Kami', link: 'https://www.idtheme.com/kontak-kami/' },
          { text: 'Kirim Tiket', link: 'https://member.kentooz.com/helpdesk' },
        ]
      }
    ],

    sidebar: (() => {
      const guideSidebar = {
        text: 'Panduan Theme',
        collapsed: false,
        items: [
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
          { text: 'Update Manual Theme', link: '/guide/update-manual-theme' }
        ]
      }

      const jurnalpressSidebar = {
        text: 'Jurnalpress',
        collapsed: false,
        items: [
          { text: 'Instalasi', link: '/jurnalpress/installation' },
          { text: 'Customizer',
            collapsed: true,
            link: '/jurnalpress/customizer/',
            items: [
              {
                text: 'General',
                link: '/jurnalpress/customizer/general/',
                collapsed: true,
                items: [
                  { text: 'Global', link: '/jurnalpress/customizer/general/global' },
                  { text: 'Typography', link: '/jurnalpress/customizer/general/typography' },
                  { text: 'Social', link: '/jurnalpress/customizer/general/social' },
                  { text: 'Comments', link: '/jurnalpress/customizer/general/comments' },
                  { text: 'Form', link: '/jurnalpress/customizer/general/form' },
                  { text: 'Button', link: '/jurnalpress/customizer/general/button' },
                ]
              },
              {
                text: 'Header Layout',
                link: '/jurnalpress/customizer/header/',
                collapsed: true,
                items: [
                  { text: 'Global', link: '/jurnalpress/customizer/header/global' },
                  { text: 'Site Identity', link: '/jurnalpress/customizer/header/site-identity' },
                  { text: 'Mobile Menu', link: '/jurnalpress/customizer/header/mobile-menu' },
                  { text: 'Text Marquee', link: '/jurnalpress/customizer/header/text-marquee' },
                  { text: 'Search', link: '/jurnalpress/customizer/header/search' },
                  { text: 'Social', link: '/jurnalpress/customizer/header/social' },
                  { text: 'Dark Mode', link: '/jurnalpress/customizer/header/dark-mode' },
                  { text: 'HTML', link: '/jurnalpress/customizer/header/html' },
                ]
              },
              {
                text: 'Homepage',
                link: '/jurnalpress/customizer/homepage/',
                collapsed: true,
                items: [
                  { text: 'Home Top Module',
                    link: '/jurnalpress/customizer/homepage/home-top',
                    collapsed: true,
                    items: [
                      { text: 'Post Slider', link: '/jurnalpress/customizer/homepage/post-slider' },
                      { text: 'Post Banner', link: '/jurnalpress/customizer/homepage/post-banner' },
                      { text: 'Post Grid/List', link: '/jurnalpress/customizer/homepage/post-grid-list' },
                      { text: 'Content with Sidebar', link: '/jurnalpress/customizer/homepage/content-with-sidebar' },
                      { text: 'Widgets (Top)', link: '/jurnalpress/customizer/homepage/widgets' },
                    ]
                  },
                  { text: 'Latest Post With Sidebar', link: '/jurnalpress/customizer/homepage/latest-post-with-sidebar' },
                  { text: 'Home Bottom Module',
                    link: '/jurnalpress/customizer/homepage/home-bottom',
                    collapsed: true,
                    items: [
                      { text: 'Post Slider', link: '/jurnalpress/customizer/homepage/post-slider' },
                      { text: 'Post Grid/List', link: '/jurnalpress/customizer/homepage/post-grid-list' },
                      { text: 'Widgets (Bottom)', link: '/jurnalpress/customizer/homepage/widgets-bottom' },
                    ]
                  },
                ]
              },
              {
                text: 'Pages',
                link: '/jurnalpress/customizer/pages/',
                collapsed: true,
                items: [
                  { text: 'Archive', link: '/jurnalpress/customizer/pages/archive' },
                  { text: 'Pages', link: '/jurnalpress/customizer/pages/pages' },
                  { text: 'Sidebar', link: '/jurnalpress/customizer/pages/sidebar' },
                ]
              },
              {
                text: 'Single Posts',
                link: '/jurnalpress/customizer/posts/',
                collapsed: true,
                items: [
                  { text: 'Global', link: '/jurnalpress/customizer/posts/global' },
                  { text: 'Share & Google News', link: '/jurnalpress/customizer/posts/social-share' },
                  { text: 'After Content Element', link: '/jurnalpress/customizer/posts/after-content', collapsed: true,
                    items: [
                      { text: 'Author Box', link: '/jurnalpress/customizer/posts/author-box' },
                      { text: 'Related Posts', link: '/jurnalpress/customizer/posts/related-posts' },
                      { text: 'Navigation Posts', link: '/jurnalpress/customizer/posts/navigation-posts' },
                      { text: 'Banner', link: '/jurnalpress/customizer/posts/banner' },
                      { text: 'Comments', link: '/jurnalpress/customizer/posts/comments' },
                      { text: 'Widgets', link: '/jurnalpress/customizer/posts/widgets' },
                      { text: 'HTML', link: '/jurnalpress/customizer/posts/html' },
                    ]
                  },
                ]
              },
              { text: 'Banner', link: '/jurnalpress/customizer/banner' },
              { text: 'Footer Layout',
                link: '/jurnalpress/customizer/footer/',
                collapsed: true,
                items: [
                  { text: 'Global', link: '/jurnalpress/customizer/footer/global' },
                  { text: 'Menu', link: '/jurnalpress/customizer/footer/menu' },
                  { text: 'Social', link: '/jurnalpress/customizer/footer/social' },
                  { text: 'HTML', link: '/jurnalpress/customizer/footer/html' },
                ]
              },
              { text: 'Other', link: '/jurnalpress/customizer/other' },
              { text: 'WooCommerce', link: '/jurnalpress/customizer/woocommerce' },
            ]
          },
          { text: 'Widgets',
            link: '/jurnalpress/widgets/',
            collapsed: true,
                items: [
                  { text: 'Contact Info', link: '/jurnalpress/widgets/contact-info' },
                  { text: 'Module Banner Posts', link: '/jurnalpress/widgets/module-banner-posts' },
                  { text: 'Module Grid List Posts', link: '/jurnalpress/widgets/module-grid-list-posts' },
                  { text: 'Module Slider Posts', link: '/jurnalpress/widgets/module-slider-posts' },
                  { text: 'Popular Tag/Category', link: '/jurnalpress/widgets/popular-tag-category' },
                ]
          },
          { text: 'Pengaturan Menu', link: '/jurnalpress/menus' },
          { text: 'Setting AMP', link: '/jurnalpress/amp' },
          { text: 'Cara Posting', link: '/jurnalpress/posting' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const dlproSidebar = {
        text: 'DLPRO',
        collapsed: false,
        items: [
          { text: 'Instalasi & Pengaturan', link: '/dlpro/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/dlpro/menu' },
          { text: 'Posting Software', link: '/dlpro/posting-software' },
          { text: 'Hosting File', link: '/dlpro/hosting-file' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const bloggingproSidebar = {
        text: 'Bloggingpro',
        collapsed: false,
        items: [
          { text: 'Instalasi & Pengaturan', link: '/bloggingpro/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/bloggingpro/menu' },
          { text: 'Cara Posting', link: '/bloggingpro/posting' },
          { text: 'Update v1.0.7', link: '/bloggingpro/update-1-0-7' },
          { text: 'Setting AMP', link: '/bloggingpro/amp' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const galeproSidebar = {
        text: 'Galepro',
        collapsed: false,
        items: [
          { text: 'Instalasi & Pengaturan', link: '/galepro/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/galepro/menu' },
          { text: 'Posting Galeri', link: '/galepro/posting-galeri' },
          { text: 'Setting AMP', link: '/galepro/amp' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const majalahproSidebar = {
        text: 'Majalahpro',
        collapsed: false,
        items: [
          { text: 'Instalasi & Pengaturan', link: '/majalahpro/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/majalahpro/menu' },
          { text: 'Cara Posting', link: '/majalahpro/posting' },
          { text: 'Update v1.0.2', link: '/majalahpro/update-1-0-2' },
          { text: 'Setting AMP', link: '/majalahpro/amp' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const newkarmaSidebar = {
        text: 'Newkarma',
        collapsed: false,
        items: [
          { text: 'Instalasi & Pengaturan', link: '/newkarma/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/newkarma/menu' },
          { text: 'Cara Posting', link: '/newkarma/posting' },
          { text: 'Upgrade Karma Lama', link: '/newkarma/upgrade-karma-lama' },
          { text: 'Fitur AMP v1.1.3', link: '/newkarma/amp' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const salesproSidebar = {
        text: 'Salespro',
        collapsed: false,
        items: [
          { text: 'Instalasi & Import Demo', link: '/salespro/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/salespro/menu' },
          { text: 'Layout Blog', link: '/salespro/layout-blog' },
          { text: 'Elementor', link: '/salespro/elementor' },
          { text: 'Optin Form', link: '/salespro/optin-form' },
          { text: 'Import/Export Elementor', link: '/salespro/import-export-elementor' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const superfastSidebar = {
        text: 'Superfast',
        collapsed: false,
        items: [
          { text: 'Instalasi & Setting Theme', link: '/superfast/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/superfast/menu' },
          { text: 'Import & Pengaturan WooCommerce', link: '/superfast/woocommerce' },
          { text: 'Top Navigation', link: '/superfast/top-navigation' },
          { text: 'Tempat Iklan / Banner v1.0.8', link: '/superfast/banner-iklan-1-0-8' },
          { text: 'Pengaturan Baru v1.0.9', link: '/superfast/pengaturan-baru-1-0-9' },
          { text: 'Setting AMP', link: '/superfast/amp' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const muviproSidebar = {
        text: 'Muvipro',
        collapsed: false,
        items: [
          { text: 'Instalasi & Pengaturan', link: '/muvipro/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/muvipro/menu' },
          { text: 'Pengaturan Widget', link: '/muvipro/widget' },
          { text: 'Posting Movie & TV Episode', link: '/muvipro/posting-movie-tv-episode' },
          { text: 'Daftar Player', link: '/muvipro/daftar-player' },
          { text: 'Top Navigation', link: '/muvipro/top-navigation' },
          { text: 'Infinite Scroll', link: '/muvipro/infinite-scroll' },
          { text: 'Sub Page Player & Ajax Search v1.0.6', link: '/muvipro/sub-page-player-ajax-search-1-0-6' },
          { text: 'ALT & Title Gambar', link: '/muvipro/alt-title-gambar' },
          { text: 'Update v1.0.5', link: '/muvipro/update-1-0-5' },
          { text: 'Update v1.0.7', link: '/muvipro/update-1-0-7' },
          { text: 'Perpindahan Pengaturan v2.0.0', link: '/muvipro/perpindahan-pengaturan-2-0-0' },
          { text: 'Troubleshooting', link: '/muvipro/troubleshooting' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const vidproSidebar = {
        text: 'Vidpro',
        collapsed: false,
        items: [
          { text: 'Instalasi & Pengaturan', link: '/vidpro/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/vidpro/menu' },
          { text: 'Cara Posting Video', link: '/vidpro/posting-video' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
          { text: 'YouTube API Key v3', link: '/general/youtube-api-key-v3' },
          { text: 'Kyz YouTube Importer', link: '/general/kyz-youtube-importer' }
        ]
      }

      const keanggotaanSidebar = {
        text: 'Keanggotaan',
        collapsed: false,
        items: [
          { text: 'Pembelian Theme', link: '/keanggotaan/pembelian-theme' },
          { text: 'Upgrade Lisensi', link: '/keanggotaan/upgrade-lisensi' },
          { text: 'Support Policy', link: '/keanggotaan/support-policy' }
        ]
      }

      const generalSidebar = {
        text: 'General',
        collapsed: false,
        items: [
          { text: 'Ganti Search Permalink/URL', link: '/general/search-permalink' },
          { text: 'Icon pada Menu Theme Idtheme', link: '/general/icon-menu-theme-idtheme' },
          { text: 'API Key TMDB', link: '/general/api-key-tmdb' },
          { text: 'Memperbaiki Error 404', link: '/general/error-404-wordpress' },
          { text: 'Error 504 Saat Import Demo', link: '/general/error-504-import-demo' },
          { text: 'Terjemahkan WordPress & Theme Idtheme', link: '/general/translate-wordpress-theme-idtheme' },
          { text: 'Redirect UC Browser ke Chrome', link: '/general/redirect-uc-browser-ke-chrome' },
          { text: 'Regenerate Thumbnail di Theme Baru', link: '/general/regenerate-thumbnail-theme-baru' },
          { text: 'Pertanyaan Kunci Lisensi Idtheme', link: '/general/faq-kunci-lisensi-idtheme' },
          { text: 'Kompres Gambar Tanpa Plugin', link: '/general/kompres-gambar-tanpa-plugin' },
          { text: 'Nginx Fix Pagination Redirect Home', link: '/general/nginx-fix-pagination-redirect-home' },
          { text: 'Cara Menambahkan Proxy di WordPress', link: '/general/proxy-di-wordpress' },
          { text: 'YouTube API Key v3', link: '/general/youtube-api-key-v3' },
          { text: 'Kyz YouTube Importer', link: '/general/kyz-youtube-importer' }
        ]
      }

      const woocommerceSidebar = {
        text: 'Woocommerce',
        collapsed: false,
        items: [
          { text: 'Translate WooCommerce ke Indonesia', link: '/woocommerce/translate-indonesia' },
          { text: 'Posting Produk', link: '/woocommerce/posting-produk' },
          { text: 'Pengaturan WooCommerce', link: '/woocommerce/pengaturan-woocommerce' },
          { text: 'Ongkos Kirim dengan Woongkir', link: '/woocommerce/ongkos-kirim-woongkir' }
        ]
      }

      const wpberitaSidebar = {
        text: 'Wpberita',
        collapsed: false,
        items: [
          { text: 'Instalasi & Pengaturan', link: '/wpberita/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/wpberita/menu' },
          { text: 'Cara Posting', link: '/wpberita/posting' },
          { text: 'Setting AMP', link: '/wpberita/amp' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      const wpmediaSidebar = {
        text: 'Wpmedia',
        collapsed: false,
        items: [
          { text: 'Instalasi & Pengaturan', link: '/wpmedia/install-pengaturan' },
          { text: 'Mengatur Menu', link: '/wpmedia/menu' },
          { text: 'Cara Posting', link: '/wpmedia/posting' },
          { text: 'Warna Kategori', link: '/wpmedia/warna-kategori' },
          { text: 'Tutorial v1.0.3', link: '/wpmedia/update-1-0-3' },
          { text: 'OpenGraph', link: '/guide/opengraph' },
          { text: 'Optimasi Kecepatan', link: '/guide/optimasi-kecepatan' },
        ]
      }

      return {
        '/guide/': [guideSidebar],
        '/jurnalpress/': [jurnalpressSidebar],
        '/dlpro/': [dlproSidebar],
        '/bloggingpro/': [bloggingproSidebar],
        '/galepro/': [galeproSidebar],
        '/majalahpro/': [majalahproSidebar],
        '/muvipro/': [muviproSidebar],
        '/newkarma/': [newkarmaSidebar],
        '/salespro/': [salesproSidebar],
        '/superfast/': [superfastSidebar],
        '/vidpro/': [vidproSidebar],
        '/wpberita/': [wpberitaSidebar],
        '/wpmedia/': [wpmediaSidebar],
        '/general/': [generalSidebar, guideSidebar],
        '/woocommerce/': [woocommerceSidebar, guideSidebar],
        '/keanggotaan/': [keanggotaanSidebar],
        '/': [
          guideSidebar,
          jurnalpressSidebar,
          dlproSidebar,
          bloggingproSidebar,
          galeproSidebar,
          majalahproSidebar,
          muviproSidebar,
          newkarmaSidebar,
          salesproSidebar,
          superfastSidebar,
          vidproSidebar,
          wpberitaSidebar,
          wpmediaSidebar,
          generalSidebar,
          woocommerceSidebar,
          keanggotaanSidebar
        ]
      }
    })(),
    footer: {
      message: 'Powerfull Plugin dan theme wordpress indonesia.',
      copyright: 'Hak cipta © 2015-present <a href="https://docs.idtheme.com/">Idtheme</a>.'
    },
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/Kentoozdotcom' }
    ]
  },
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  }
})
