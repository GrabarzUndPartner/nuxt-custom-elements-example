import pkg from './package.json';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: process.env.DIST_PATH
  },

  router: {
    base: process.env.BASE_URL
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  customElements: {
    entries: [
      {
        name: 'Example',
        tags: [
          {
            name: 'CustomElementExample',
            path: '@/components/Example',
            options: {
              props: {
                title: 'Prop. Example Title'
              }
            },
            slotContent: 'Slot Example Content'
          }
        ]
      }
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-custom-elements'
  ]

}
