<template>
  <div class="container">
    <fieldset>
      <legend>Custom-Element Component</legend>
      <div>
        <client-only>
          <custom-element-vue-i18n />
        </client-only>
      </div>
    </fieldset>
  </div>
</template>

<script>

import Vue from 'vue';

Vue.config.ignoredElements = [
  'custom-element-vue-i18n'
];

export default {
  data () {
    return {
      isDev: process.env.NODE_ENV === 'development'
    };
  },

  head () {
    const script = [];
    if (!this.isDev) {
      script.push({
        type: 'text/javascript',
        innerHTML: `window.customPublicPath = '${this.$router.options.base}nuxt-custom-elements/example/';`,
        body: true
      }, {
        type: 'text/javascript',
        src: `${this.$router.options.base}nuxt-custom-elements/example/example.js`,
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
    this.isDev && this.$registerCustomElementsEntry('Example');
  }
};

</script>
