<template>
  <div class="frame-preview">
    <a
      class="back-link"
      :href="`${$router.options.base}../`"
      rel="noopener noreferrer"
    ><img src="@/../default/assets/icons/arrow-left.svg">Back to Overview</a>
    <client-only>
      <api-play-component :api-key="123"></api-play-component>
    </client-only>
    <a
      class="preview-link"
      :href="`${$router.options.base}nuxt-custom-elements/example/`"
      target="_blank"
      rel="noopener noreferrer"
    ><img src="@/../default/assets/icons/external-link.svg">Open Nuxt Custom-Elements example export…</a>
  </div>
</template>
<script>
import Vue from 'vue';
Vue.config.ignoredElements = [
  'api-play-component'
];
export default {
  data () {
    return {
      isDev: process.env.NODE_ENV === 'development',
      externalBase: 'https://medium-to-markdown.dev.t3chflicks.org/'
    };
  },
  head () {
    const script = [];
    if (!this.isDev) {
      script.push({
        type: 'text/javascript',
        innerHTML: `window.customPublicPath = ${this.externalBase}nuxt-custom-elements/api-play-component/';`,
        body: true
      }, {
        type: 'text/javascript',
        src: `${this.externalBase}nuxt-custom-elements/api-play-component/api-play-component.js`,
        async: true,
        defer: true,
        body: true
      });
    }
    return {
      script,
      __dangerouslyDisableSanitizers: ['script']
    };
  },
  created () {
    this.isDev && this.$registerCustomElementsEntry('ApiPlayComponent');
  }
};
</script>
