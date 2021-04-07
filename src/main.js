// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/base.postcss'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased font-body font-serif' }

  // Styles
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Philosopher|Libre+Baskerville&display=swap',
  })

  // Basic meta tags
  head.meta.push({
    name: 'author',
    content: 'Lukas Langrock / Ville Säävuori',
  })

  head.meta.push({
    name: 'keywords',
    content: 'minecraft,langrock,vue,gridsome',
  })

  head.meta.push({
    name: 'description',
    content: 'mc.langrock.info - A Minecraft Server',
  })

  head.meta.push({
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    property: 'og:title',
    content: 'mc.langrock.info - A Minecraft Server',
  })
}
