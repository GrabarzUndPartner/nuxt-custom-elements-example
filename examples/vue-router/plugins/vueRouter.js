import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export function createRouter (mode = 'abstract', base = getRouterBase()) {
  const router = new VueRouter({
    mode,
    base,
    routes: getRoutesFromViews(getViewKeys())
  });
  if (mode === 'abstract') {
    router.replace('/');
  }
  return router;
}

export function getRouterBase () {
  return global.__CUSTOM_ELEMENT_ROUTER_BASE__ || (global.location && global.location.pathname) || '/';
}

// Views

export function getViewKeys () {
  return require.context('@/router-views/', true, /\.vue$/, 'lazy').keys().map(value => value.replace('./', '').replace('.vue', ''));
}

export function getView (view) {
  return import('@/router-views/' + view);
}

export function getRoutesFromViews (views) {
  return views.map((view) => {
    return {
      path: `/${view}`.replace(/index$/, ''),
      component: () => getView(view)
    };
  });
}
