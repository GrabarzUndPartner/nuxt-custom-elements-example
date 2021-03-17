import pkg from '../../package.json';
import vuetifyOptions from './plugins/options';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  srcDir: __dirname,

  generate: {
    dir: process.env.DIST_PATH || '../../dist'
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
            name: 'CustomElementVuetify',
            path: '@/entries/Vuetify'
          }
        ]
      }
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',

    // Vuetify with options
    ['@nuxtjs/vuetify', vuetifyOptions]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-custom-elements'
  ]

};
