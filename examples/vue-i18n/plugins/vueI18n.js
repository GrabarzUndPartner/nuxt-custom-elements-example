import Vue from 'vue';
import VueI18n from 'vue-i18n';

import i18nOptions from './i18n.options';

Vue.use(VueI18n);

export default new VueI18n({
  locale: i18nOptions.defaultLocale,
  ...i18nOptions.vueI18n
});
