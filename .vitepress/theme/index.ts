// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { YouTubeEmbed } from '@miletorix/vitepress-youtube-embed'
import '@miletorix/vitepress-youtube-embed/style.css'
import Links from '../theme/components/Links.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('YouTubeEmbed', YouTubeEmbed)
    app.component('Links', Links)
  }
} satisfies Theme
