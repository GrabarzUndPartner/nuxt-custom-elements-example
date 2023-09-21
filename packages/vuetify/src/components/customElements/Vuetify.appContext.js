import { createVuetify } from 'vuetify/lib/framework';
// import { createHead } from 'unhead';
import { createHead } from '@vueuse/head';
import config from '@/../vuetify.config';

export default function (Vue) {
  const head = createHead({ document: null });
  Vue.use(head);

  // Important: Vuetify Theme must be deactivated and a theming imported in the entry.
  // Background: Vuetify adds the CSS per header, but does nothing for the CustomElement with Shadow CSS. Therefore, this must be imported separately.
  const vuetify = createVuetify({ ssr: false, ...config, theme: false });
  Vue.use(vuetify);
}
