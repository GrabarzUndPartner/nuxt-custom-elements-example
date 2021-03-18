import pkg from '../../package.json';
import vuetifyOptions from './plugins/vuetify.options';

export default {
  target: 'static',
  srcDir: __dirname,

  generate: {
    dir: process.env.DIST_PATH || '../../dist',
    crawler: false
  },

  router: {
    base: process.env.BASE_URL
  },

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

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',

    // Vuetify with options
    ['@nuxtjs/vuetify', vuetifyOptions]
  ],

  modules: [
    'nuxt-custom-elements'
  ]

};
