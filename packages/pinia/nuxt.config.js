import { join } from 'path';
import { defineNuxtConfig } from 'nuxt/config';
import { readPackage } from 'read-pkg';

const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig(async () => {
  const { description } = await readPackage();

  return {
    srcDir: 'src',

    nitro: {
      prerender: {
        crawlLinks: false
      },
      output: {
        publicDir: join(process.env.DIST_PATH || '../../dist')
      }
    },

    css: ['@nuxt-custom-elements/default/assets/css/layout.css'],

    alias: {
      '@nuxt-custom-elements/default': join(__dirname, '../default/src')
    },

    app: {
      baseURL: process.env.BASE_URL || '/',
      head: {
        title: 'Examples - Nuxt Custom-Elements',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: description }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
      }
    },

    postcss: {
      plugins: {
        'postcss-preset-env': {
          preserve: true,
          stage: 0
        }
      },
      order: 'cssnanoLast'
    },

    customElements: {
      entries: [
        {
          name: 'Example',
          tags: [
            {
              name: 'CustomElementPinia',
              path: '@/components/customElements/Pinia',
              appContext: '@/components/customElements/Pinia.appContext.js'
            }
          ]
        }
      ]
    },

    buildModules: [
      ...((isDev && ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module']) ||
        [])
    ],

    modules: ['nuxt-custom-elements']
  };
});
