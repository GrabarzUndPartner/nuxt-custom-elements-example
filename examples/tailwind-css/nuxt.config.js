import pkg from '../../package.json';

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
    title: 'TailwindCSS Example - Nuxt Custom-Elements',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  build: {
    postcss: {
      plugins: {
        'postcss-import': true,
        'postcss-nesting': {},
        'tailwindcss/nesting': {}
      },
      order: 'cssnanoLast'
    }
  },

  customElements: {
    entries: [
      {
        name: 'Example',
        tags: [
          {
            name: 'CustomElementTailwindCss',
            path: '@/entries/TailwindCss'
          }
        ]
      },
      {
        name: 'ExampleShadow',
        shadow: true,
        tags: [
          {
            name: 'CustomElementTailwindCss',
            path: '@/entries/TailwindCssShadow'
          }
        ]
      }
    ]
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: false,
    exposeConfig: false,
    config: {}
  },

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    'nuxt-custom-elements'
  ]

};
