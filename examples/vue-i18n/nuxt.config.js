import pkg from '../../package.json';
import i18nOptions from './plugins/i18n.options';

export default {
  target: 'static',
  srcDir: __dirname,

  generate: {
    dir: process.env.DIST_PATH || '../../dist'
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
            name: 'CustomElementVueI18n',
            path: '@/entries/VueI18n'
          }
        ]
      }
    ]
  },

  i18n: i18nOptions,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    'nuxt-custom-elements',
    'nuxt-i18n'
  ]

};
