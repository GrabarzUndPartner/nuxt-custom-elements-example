import { join } from 'path';
import { defineNuxtConfig } from 'nuxt/config';
import { readPackage } from 'read-pkg';
import vuetify from 'vite-plugin-vuetify';

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

    build: {
      transpile: ['vuetify']
    },

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

    vite: {
      plugins: [vuetify({ autoImport: true })]
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
          viteExtend(config) {
            config.build.minify = false;
            config.plugins.push(vuetify({ autoImport: true }));
            return config;
          },
          name: 'Example',
          tags: [
            {
              name: 'CustomElementVuetify',
              path: '@/components/customElements/Vuetify',
              appContext: '@/components/customElements/Vuetify.appContext.js'
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
