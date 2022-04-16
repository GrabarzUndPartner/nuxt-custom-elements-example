<template>
  <div>
    <div class="custom-elements-example__container">
      <fieldset class="custom-elements-example__fieldset">
        <legend>Shadow DOM<br>Custom-Element Component</legend>
        <div>
          <client-only>
            <custom-element-tailwind-css />
          </client-only>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';

Vue.config.ignoredElements = [
  'custom-element-tailwind-css'
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
        innerHTML: `window.customPublicPath = '${this.$router.options.base}nuxt-custom-elements/example-shadow/';`,
        body: true
      }, {
        type: 'text/javascript',
        src: `${this.$router.options.base}nuxt-custom-elements/example-shadow/example-shadow.js`,
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
    this.isDev && this.$customElements.registerEntry('ExampleShadow');
  }
};

</script>
