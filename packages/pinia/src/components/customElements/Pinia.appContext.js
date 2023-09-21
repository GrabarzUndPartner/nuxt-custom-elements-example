import { createPinia } from 'pinia';

export default function (Vue) {
  const pinia = createPinia();
  Vue.use(pinia);
}
