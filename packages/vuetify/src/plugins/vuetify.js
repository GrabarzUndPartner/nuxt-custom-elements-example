import { defineNuxtPlugin } from 'nuxt/app';
import { createVuetify } from 'vuetify';
import config from '@/../vuetify.config';

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify(config);
  app.vueApp.use(vuetify);
});
