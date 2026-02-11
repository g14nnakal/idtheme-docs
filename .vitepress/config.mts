import { defineConfig } from 'vitepress';

function createSidebar(prefix = "", isEn = false) {
  const p = (path: string) => `${prefix}${path}`;
  
  const guideSidebar = {
    text: isEn ? 'Theme Guide' : 'Panduan Theme',
    collapsed: false,
    items: [
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
      { 
        text: isEn ? 'Manual Theme Update' : 'Update Manual Theme', 
        link: p('/guide/update-manual-theme') 
      },
      { 
        text: isEn ? 'License Issue & Troubleshooting' : 'Lisensi Issue & Troubleshooting', 
        link: p('/guide/license-issue') 
      },
    ]
  };

  const jurnalpressSidebar = {
    text: 'Jurnalpress',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation' : 'Instalasi', 
        link: p('/jurnalpress/installation') 
      },
      { 
        text: 'Customizer',
        collapsed: true,
        link: p('/jurnalpress/customizer/'),
        items: [
          {
            text: 'General',
            link: p('/jurnalpress/customizer/general/'),
            collapsed: true,
            items: [
              { text: 'Global', link: p('/jurnalpress/customizer/general/global') },
              { text: 'Typography', link: p('/jurnalpress/customizer/general/typography') },
              { text: 'Social', link: p('/jurnalpress/customizer/general/social') },
              { text: 'Comments', link: p('/jurnalpress/customizer/general/comments') },
              { text: 'Form', link: p('/jurnalpress/customizer/general/form') },
              { text: 'Button', link: p('/jurnalpress/customizer/general/button') },
            ]
          },
          {
            text: 'Header Layout',
            link: p('/jurnalpress/customizer/header/'),
            collapsed: true,
            items: [
              { text: 'Global', link: p('/jurnalpress/customizer/header/global') },
              { text: 'Site Identity', link: p('/jurnalpress/customizer/header/site-identity') },
              { text: 'Mobile Menu', link: p('/jurnalpress/customizer/header/mobile-menu') },
              { text: 'Text Marquee', link: p('/jurnalpress/customizer/header/text-marquee') },
              { text: 'Search', link: p('/jurnalpress/customizer/header/search') },
              { text: 'Social', link: p('/jurnalpress/customizer/header/social') },
              { text: 'Dark Mode', link: p('/jurnalpress/customizer/header/dark-mode') },
              { text: 'HTML', link: p('/jurnalpress/customizer/header/html') },
            ]
          },
          {
            text: 'Homepage',
            link: p('/jurnalpress/customizer/homepage/'),
            collapsed: true,
            items: [
              { 
                text: 'Home Top Module',
                link: p('/jurnalpress/customizer/homepage/home-top'),
                collapsed: true,
                items: [
                  { text: 'Post Slider', link: p('/jurnalpress/customizer/homepage/post-slider') },
                  { text: 'Post Banner', link: p('/jurnalpress/customizer/homepage/post-banner') },
                  { text: 'Post Grid/List', link: p('/jurnalpress/customizer/homepage/post-grid-list') },
                  { text: 'Content with Sidebar', link: p('/jurnalpress/customizer/homepage/content-with-sidebar') },
                  { text: 'Widgets (Top)', link: p('/jurnalpress/customizer/homepage/widgets') },
                ]
              },
              { text: 'Latest Post With Sidebar', link: p('/jurnalpress/customizer/homepage/latest-post-with-sidebar') },
              { 
                text: 'Home Bottom Module',
                link: p('/jurnalpress/customizer/homepage/home-bottom'),
                collapsed: true,
                items: [
                  { text: 'Post Slider', link: p('/jurnalpress/customizer/homepage/post-slider') },
                  { text: 'Post Grid/List', link: p('/jurnalpress/customizer/homepage/post-grid-list') },
                  { text: 'Widgets (Bottom)', link: p('/jurnalpress/customizer/homepage/widgets-bottom') },
                ]
              },
            ]
          },
          {
            text: 'Pages',
            link: p('/jurnalpress/customizer/pages/'),
            collapsed: true,
            items: [
              { text: 'Archive', link: p('/jurnalpress/customizer/pages/archive') },
              { text: 'Pages', link: p('/jurnalpress/customizer/pages/pages') },
              { text: 'Sidebar', link: p('/jurnalpress/customizer/pages/sidebar') },
            ]
          },
          {
            text: 'Single Posts',
            link: p('/jurnalpress/customizer/posts/'),
            collapsed: true,
            items: [
              { text: 'Global', link: p('/jurnalpress/customizer/posts/global') },
              { text: 'Share & Google News', link: p('/jurnalpress/customizer/posts/social-share') },
              { 
                text: 'After Content Element', 
                link: p('/jurnalpress/customizer/posts/after-content'), 
                collapsed: true,
                items: [
                  { text: 'Author Box', link: p('/jurnalpress/customizer/posts/author-box') },
                  { text: 'Related Posts', link: p('/jurnalpress/customizer/posts/related-posts') },
                  { text: 'Navigation Posts', link: p('/jurnalpress/customizer/posts/navigation-posts') },
                  { text: 'Banner', link: p('/jurnalpress/customizer/posts/banner') },
                  { text: 'Comments', link: p('/jurnalpress/customizer/posts/comments') },
                  { text: 'Widgets', link: p('/jurnalpress/customizer/posts/widgets') },
                  { text: 'HTML', link: p('/jurnalpress/customizer/posts/html') },
                ]
              },
            ]
          },
          { text: 'Banner', link: p('/jurnalpress/customizer/banner') },
          { 
            text: 'Footer Layout',
            link: p('/jurnalpress/customizer/footer/'),
            collapsed: true,
            items: [
              { text: 'Global', link: p('/jurnalpress/customizer/footer/global') },
              { text: 'Menu', link: p('/jurnalpress/customizer/footer/menu') },
              { text: 'Social', link: p('/jurnalpress/customizer/footer/social') },
              { text: 'HTML', link: p('/jurnalpress/customizer/footer/html') },
            ]
          },
          { text: 'Other', link: p('/jurnalpress/customizer/other') },
          { text: 'WooCommerce', link: p('/jurnalpress/customizer/woocommerce') },
        ]
      },
      { 
        text: 'Widgets',
        link: p('/jurnalpress/widgets/'),
        collapsed: true,
        items: [
          { text: 'Contact Info', link: p('/jurnalpress/widgets/contact-info') },
          { text: 'Module Banner Posts', link: p('/jurnalpress/widgets/module-banner-posts') },
          { text: 'Module Grid List Posts', link: p('/jurnalpress/widgets/module-grid-list-posts') },
          { text: 'Module Slider Posts', link: p('/jurnalpress/widgets/module-slider-posts') },
          { text: 'Popular Tag/Category', link: p('/jurnalpress/widgets/popular-tag-category') },
        ]
      },
      { 
        text: isEn ? 'Menu Settings' : 'Pengaturan Menu', 
        link: p('/jurnalpress/menus') 
      },
      { 
        text: isEn ? 'User Settings' : 'Pengaturan User', 
        link: p('/jurnalpress/user') 
      },
      { 
        text: isEn ? 'Category Settings' : 'Pengaturan Kategori', 
        link: p('/jurnalpress/category') 
      },
      { 
        text: isEn ? 'AMP Settings' : 'Setting AMP', 
        link: p('/jurnalpress/amp') 
      },
      { 
        text: isEn ? 'How to Post' : 'Cara Posting', 
        link: p('/jurnalpress/posting') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
      { 
        text: isEn ? 'License Issue & Troubleshooting' : 'Lisensi Issue & Troubleshooting', 
        link: p('/guide/license-issue') 
      },
    ]
  };

  const dlproSidebar = {
    text: 'DLPRO',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Settings' : 'Instalasi & Pengaturan', 
        link: p('/dlpro/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/dlpro/menu') 
      },
      { 
        text: isEn ? 'Posting Software' : 'Posting Software', 
        link: p('/dlpro/posting-software') 
      },
      { 
        text: isEn ? 'File Hosting' : 'Hosting File', 
        link: p('/dlpro/hosting-file') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  const bloggingproSidebar = {
    text: 'Bloggingpro',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Settings' : 'Instalasi & Pengaturan', 
        link: p('/bloggingpro/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/bloggingpro/menu') 
      },
      { 
        text: isEn ? 'How to Post' : 'Cara Posting', 
        link: p('/bloggingpro/posting') 
      },
      { 
        text: isEn ? 'Update v1.0.7' : 'Update v1.0.7', 
        link: p('/bloggingpro/update-1-0-7') 
      },
      { 
        text: isEn ? 'AMP Settings' : 'Setting AMP', 
        link: p('/bloggingpro/amp') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  const galeproSidebar = {
    text: 'Galepro',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Settings' : 'Instalasi & Pengaturan', 
        link: p('/galepro/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/galepro/menu') 
      },
      { 
        text: isEn ? 'Posting Gallery' : 'Posting Galeri', 
        link: p('/galepro/posting-galeri') 
      },
      { 
        text: isEn ? 'AMP Settings' : 'Setting AMP', 
        link: p('/galepro/amp') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  const majalahproSidebar = {
    text: 'Majalahpro',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Settings' : 'Instalasi & Pengaturan', 
        link: p('/majalahpro/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/majalahpro/menu') 
      },
      { 
        text: isEn ? 'How to Post' : 'Cara Posting', 
        link: p('/majalahpro/posting') 
      },
      { 
        text: isEn ? 'Update v1.0.2' : 'Update v1.0.2', 
        link: p('/majalahpro/update-1-0-2') 
      },
      { 
        text: isEn ? 'AMP Settings' : 'Setting AMP', 
        link: p('/majalahpro/amp') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  const newkarmaSidebar = {
    text: 'Newkarma',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Settings' : 'Instalasi & Pengaturan', 
        link: p('/newkarma/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/newkarma/menu') 
      },
      { 
        text: isEn ? 'How to Post' : 'Cara Posting', 
        link: p('/newkarma/posting') 
      },
      { 
        text: isEn ? 'Upgrade Old Karma' : 'Upgrade Karma Lama', 
        link: p('/newkarma/upgrade-karma-lama') 
      },
      { 
        text: isEn ? 'AMP Feature v1.1.3' : 'Fitur AMP v1.1.3', 
        link: p('/newkarma/amp') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  const salesproSidebar = {
    text: 'Salespro',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Import Demo' : 'Instalasi & Import Demo', 
        link: p('/salespro/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/salespro/menu') 
      },
      { 
        text: isEn ? 'Blog Layout' : 'Layout Blog', 
        link: p('/salespro/layout-blog') 
      },
      { 
        text: 'Elementor', 
        link: p('/salespro/elementor') 
      },
      { 
        text: isEn ? 'Optin Form' : 'Optin Form', 
        link: p('/salespro/optin-form') 
      },
      { 
        text: isEn ? 'Import/Export Elementor' : 'Import/Export Elementor', 
        link: p('/salespro/import-export-elementor') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  const superfastSidebar = {
    text: 'Superfast',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Theme Settings' : 'Instalasi & Setting Theme', 
        link: p('/superfast/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/superfast/menu') 
      },
      { 
        text: isEn ? 'Import & WooCommerce Settings' : 'Import & Pengaturan WooCommerce', 
        link: p('/superfast/woocommerce') 
      },
      { 
        text: isEn ? 'Top Navigation' : 'Top Navigation', 
        link: p('/superfast/top-navigation') 
      },
      { 
        text: isEn ? 'Ad Space / Banner v1.0.8' : 'Tempat Iklan / Banner v1.0.8', 
        link: p('/superfast/banner-iklan-1-0-8') 
      },
      { 
        text: isEn ? 'New Settings v1.0.9' : 'Pengaturan Baru v1.0.9', 
        link: p('/superfast/pengaturan-baru-1-0-9') 
      },
      { 
        text: isEn ? 'AMP Settings' : 'Setting AMP', 
        link: p('/superfast/amp') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  const muviproSidebar = {
    text: 'Muvipro',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Settings' : 'Instalasi & Pengaturan', 
        link: p('/muvipro/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/muvipro/menu') 
      },
      { 
        text: isEn ? 'Widget Settings' : 'Pengaturan Widget', 
        link: p('/muvipro/widget') 
      },
      { 
        text: isEn ? 'Posting Movie & TV Episode' : 'Posting Movie & TV Episode', 
        link: p('/muvipro/posting-movie-tv-episode') 
      },
      { 
        text: isEn ? 'Player List' : 'Daftar Player', 
        link: p('/muvipro/daftar-player') 
      },
      { 
        text: isEn ? 'Top Navigation' : 'Top Navigation', 
        link: p('/muvipro/top-navigation') 
      },
      { 
        text: isEn ? 'Infinite Scroll' : 'Infinite Scroll', 
        link: p('/muvipro/infinite-scroll') 
      },
      { 
        text: isEn ? 'Sub Page Player & Ajax Search v1.0.6' : 'Sub Page Player & Ajax Search v1.0.6', 
        link: p('/muvipro/sub-page-player-ajax-search-1-0-6') 
      },
      { 
        text: isEn ? 'Image ALT & Title' : 'ALT & Title Gambar', 
        link: p('/muvipro/alt-title-gambar') 
      },
      { 
        text: isEn ? 'Update v1.0.5' : 'Update v1.0.5', 
        link: p('/muvipro/update-1-0-5') 
      },
      { 
        text: isEn ? 'Update v1.0.7' : 'Update v1.0.7', 
        link: p('/muvipro/update-1-0-7') 
      },
      { 
        text: isEn ? 'Settings Migration v2.0.0' : 'Perpindahan Pengaturan v2.0.0', 
        link: p('/muvipro/perpindahan-pengaturan-2-0-0') 
      },
      { 
        text: isEn ? 'Troubleshooting' : 'Troubleshooting', 
        link: p('/muvipro/troubleshooting') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  const vidproSidebar = {
    text: 'Vidpro',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Settings' : 'Instalasi & Pengaturan', 
        link: p('/vidpro/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/vidpro/menu') 
      },
      { 
        text: isEn ? 'How to Post Video' : 'Cara Posting Video', 
        link: p('/vidpro/posting-video') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
      { 
        text: isEn ? 'YouTube API Key v3' : 'YouTube API Key v3', 
        link: p('/general/youtube-api-key-v3') 
      },
      { 
        text: isEn ? 'Kyz YouTube Importer' : 'Kyz YouTube Importer', 
        link: p('/general/kyz-youtube-importer') 
      }
    ]
  };

  const keanggotaanSidebar = {
    text: isEn ? 'Membership' : 'Keanggotaan',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Theme Purchase' : 'Pembelian Theme', 
        link: p('/keanggotaan/pembelian-theme') 
      },
      { 
        text: isEn ? 'License Upgrade' : 'Upgrade Lisensi', 
        link: p('/keanggotaan/upgrade-lisensi') 
      },
      { 
        text: isEn ? 'Support Policy' : 'Support Policy', 
        link: p('/keanggotaan/support-policy') 
      }
    ]
  };

  const generalSidebar = {
    text: 'General',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Change Search Permalink/URL' : 'Ganti Search Permalink/URL', 
        link: p('/general/search-permalink') 
      },
      { 
        text: isEn ? 'Icons on Idtheme Theme Menu' : 'Icon pada Menu Theme Idtheme', 
        link: p('/general/icon-menu-theme-idtheme') 
      },
      { 
        text: isEn ? 'TMDB API Key' : 'API Key TMDB', 
        link: p('/general/api-key-tmdb') 
      },
      { 
        text: isEn ? 'Fix 404 Error' : 'Memperbaiki Error 404', 
        link: p('/general/error-404-wordpress') 
      },
      { 
        text: isEn ? '504 Error When Importing Demo' : 'Error 504 Saat Import Demo', 
        link: p('/general/error-504-import-demo') 
      },
      { 
        text: isEn ? 'Translate WordPress & Idtheme Theme' : 'Terjemahkan WordPress & Theme Idtheme', 
        link: p('/general/translate-wordpress-theme-idtheme') 
      },
      { 
        text: isEn ? 'Redirect UC Browser to Chrome' : 'Redirect UC Browser ke Chrome', 
        link: p('/general/redirect-uc-browser-ke-chrome') 
      },
      { 
        text: isEn ? 'Regenerate Thumbnail in New Theme' : 'Regenerate Thumbnail di Theme Baru', 
        link: p('/general/regenerate-thumbnail-theme-baru') 
      },
      { 
        text: isEn ? 'Idtheme License Key FAQ' : 'Pertanyaan Kunci Lisensi Idtheme', 
        link: p('/general/faq-kunci-lisensi-idtheme') 
      },
      { 
        text: isEn ? 'Compress Image Without Plugin' : 'Kompres Gambar Tanpa Plugin', 
        link: p('/general/kompres-gambar-tanpa-plugin') 
      },
      { 
        text: isEn ? 'Nginx Fix Pagination Redirect Home' : 'Nginx Fix Pagination Redirect Home', 
        link: p('/general/nginx-fix-pagination-redirect-home') 
      },
      { 
        text: isEn ? 'How to Add Proxy in WordPress' : 'Cara Menambahkan Proxy di WordPress', 
        link: p('/general/proxy-di-wordpress') 
      },
      { 
        text: isEn ? 'YouTube API Key v3' : 'YouTube API Key v3', 
        link: p('/general/youtube-api-key-v3') 
      },
      { 
        text: isEn ? 'Kyz YouTube Importer' : 'Kyz YouTube Importer', 
        link: p('/general/kyz-youtube-importer') 
      }
    ]
  };

  const woocommerceSidebar = {
    text: 'Woocommerce',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Translate WooCommerce to Indonesian' : 'Translate WooCommerce ke Indonesia', 
        link: p('/woocommerce/translate-indonesia') 
      },
      { 
        text: isEn ? 'Posting Product' : 'Posting Produk', 
        link: p('/woocommerce/posting-produk') 
      },
      { 
        text: isEn ? 'WooCommerce Settings' : 'Pengaturan WooCommerce', 
        link: p('/woocommerce/pengaturan-woocommerce') 
      },
      { 
        text: isEn ? 'Shipping Cost with Woongkir' : 'Ongkos Kirim dengan Woongkir', 
        link: p('/woocommerce/ongkos-kirim-woongkir') 
      }
    ]
  };

  const wpberitaSidebar = {
    text: 'Wpberita',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Settings' : 'Instalasi & Pengaturan', 
        link: p('/wpberita/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/wpberita/menu') 
      },
      { 
        text: isEn ? 'How to Post' : 'Cara Posting', 
        link: p('/wpberita/posting') 
      },
      { 
        text: isEn ? 'AMP Settings' : 'Setting AMP', 
        link: p('/wpberita/amp') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  const wpmediaSidebar = {
    text: 'Wpmedia',
    collapsed: false,
    items: [
      { 
        text: isEn ? 'Installation & Settings' : 'Instalasi & Pengaturan', 
        link: p('/wpmedia/install-pengaturan') 
      },
      { 
        text: isEn ? 'Menu Setup' : 'Mengatur Menu', 
        link: p('/wpmedia/menu') 
      },
      { 
        text: isEn ? 'How to Post' : 'Cara Posting', 
        link: p('/wpmedia/posting') 
      },
      { 
        text: isEn ? 'Category Colors' : 'Warna Kategori', 
        link: p('/wpmedia/warna-kategori') 
      },
      { 
        text: isEn ? 'Tutorial v1.0.3' : 'Tutorial v1.0.3', 
        link: p('/wpmedia/update-1-0-3') 
      },
      { text: 'OpenGraph', link: p('/guide/opengraph') },
      { 
        text: isEn ? 'Performance Optimization' : 'Optimasi Kecepatan', 
        link: p('/guide/optimasi-kecepatan') 
      },
    ]
  };

  return {
    [p('/guide/')]: [guideSidebar],
    [p('/jurnalpress/')]: [jurnalpressSidebar],
    [p('/dlpro/')]: [dlproSidebar],
    [p('/bloggingpro/')]: [bloggingproSidebar],
    [p('/galepro/')]: [galeproSidebar],
    [p('/majalahpro/')]: [majalahproSidebar],
    [p('/muvipro/')]: [muviproSidebar],
    [p('/newkarma/')]: [newkarmaSidebar],
    [p('/salespro/')]: [salesproSidebar],
    [p('/superfast/')]: [superfastSidebar],
    [p('/vidpro/')]: [vidproSidebar],
    [p('/wpberita/')]: [wpberitaSidebar],
    [p('/wpmedia/')]: [wpmediaSidebar],
    [p('/general/')]: [generalSidebar, guideSidebar],
    [p('/woocommerce/')]: [woocommerceSidebar, guideSidebar],
    [p('/keanggotaan/')]: [keanggotaanSidebar],
    [p('/')]: [
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
  };
}

export default defineConfig({
  srcDir: "docs",
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

  locales: {
    root: {
      label: 'Indonesia',
      lang: 'id-ID',
      link: '/',
      title: "Dokumentasi Idtheme",
      description: "Semua dokumentasi baik itu keanggotaaan, lisensi, tos, faq, theme ataupun plugin dari idtheme",
      themeConfig: {
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
        sidebar: createSidebar('', false),
        footer: {
          message: 'Powerfull Plugin dan theme wordpress indonesia.',
          copyright: 'Hak cipta © 2015-sekarang <a href="https://docs.idtheme.com/">Idtheme</a>.'
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "Idtheme Documentation",
      description: "All documentation, be it membership, license, tos, faq, themes or plugins from idtheme",
      themeConfig: {
        nav: [
          { text: 'Home', link: 'https://www.idtheme.com/' },
          { text: 'Wordpress Theme', link: 'https://www.idtheme.com/theme-wordpress-indonesia/' },
          {
            text: 'Support',
            items: [
              { text: 'Documentation', link: '/en/' },
              { text: 'Contact Us', link: 'https://www.idtheme.com/kontak-kami/' },
              { text: 'Submit Ticket', link: 'https://member.kentooz.com/helpdesk' },
            ]
          }
        ],
        sidebar: createSidebar('/en', true),
        footer: {
          message: 'Powerfull Plugin and theme wordpress indonesia.',
          copyright: 'Copyright © 2015-present <a href="https://docs.idtheme.com/">Idtheme</a>.'
        },
      },
    }
  },

  themeConfig: {
    logo: '/logo-idt.png',
    siteTitle: false,
    search: {
      provider: 'algolia',
      options: {
        appId: 'DLSFXF6SZ5',
        apiKey: '253f35ee9405bcb50f8e6c21b455af0f',
        indexName: 'idtheme-docs',
        searchParameters: {
          hitsPerPage: 10
        },
        insights: false,
      }
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/Kentoozdotcom' }
    ],
  },
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  }
})
