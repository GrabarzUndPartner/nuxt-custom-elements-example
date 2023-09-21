import { defineNuxtPlugin } from 'nuxt/app';
import { createPinia } from 'pinia';

export default defineNuxtPlugin(app => {
  const pinia = createPinia();
  app.vueApp.use(pinia);
});
