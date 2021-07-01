<template>
  <div class="frame-preview">
    <a
      class="back-link"
      :href="`${$router.options.base}../`"
      rel="noopener noreferrer"
    ><img src="@/../default/assets/icons/arrow-left.svg">Back to Overview</a>

    <div class="custom-elements-example__container">
      <fieldset class="custom-elements-example__fieldset">
        <legend>External usage</legend>
        <div>
          <client-only>
            <api-play-component :api-key="123" />
          </client-only>
        </div>
      </fieldset>
    </div>
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
      externalBase: 'https://medium-to-markdown.t3chflicks.org/'
    };
  },
  head () {
    const script = [];
    script.push({
      type: 'text/javascript',
      innerHTML: `window.customPublicPath = '${this.externalBase}nuxt-custom-elements/api-play-component/';`,
      body: true
    }, {
      type: 'text/javascript',
      src: `${this.externalBase}nuxt-custom-elements/api-play-component/api-play-component.js`,
      async: true,
      defer: true,
      body: true
    });
    return {
      script,
      __dangerouslyDisableSanitizers: ['script']
    };
  }
};
</script>
