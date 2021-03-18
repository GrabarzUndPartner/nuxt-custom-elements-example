import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export function createRouter (routes, mode = 'abstract', base = getRouterBase()) {
  const router = new VueRouter({
    mode,
    base,
    routes
  });
  if (mode === 'abstract') {
    router.replace('/');
  }
  return router;
}

export function getRouterBase () {
  return global.__CUSTOM_ELEMENT_ROUTER_BASE__ || (global.location && global.location.pathname) || '/';
}
