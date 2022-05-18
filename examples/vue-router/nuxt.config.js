import WebpackDynamicPublicPathPlugin from 'webpack-dynamic-public-path';
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
    title: 'Vue-Router Example - Nuxt Custom-Elements',
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

  customElements: {
    entries: [
      {
        name: 'Example',
        tags: [
          {
            name: 'CustomElementVueRouter',
            path: '@/entries/VueRouter'
          }
        ],
        webpackExtend (config) {
          config.output.plugins.push(new WebpackDynamicPublicPathPlugin({
            externalPublicPath: 'window.cutomPublicPath'
          }));
          return config;
        }
      },
      {
        name: 'ExampleShadow',
        shadow: true,
        tags: [
          {
            name: 'CustomElementVueRouter',
            path: '@/entries/VueRouter'
          }
        ],
        webpackExtend (config) {
          config.output.plugins.push(new WebpackDynamicPublicPathPlugin({
            externalPublicPath: 'window.cutomPublicPath'
          }));
          return config;
        }
      }
    ]
  },

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    'nuxt-custom-elements'
  ]

};
