<template>
  <div>
    <div class="custom-elements-example-container">
      <fieldset class="custom-elements-example-fieldset">
        <legend>Custom-Element Component</legend>
        <div>
          <client-only>
            <custom-element-tailwind-css />
          </client-only>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script setup>
import { useCustomElements, useHead, useRuntimeConfig } from '#imports';
const { registerEntry } = useCustomElements();
registerEntry('example');

const base = useRuntimeConfig().app.baseURL;
const isDev = process.env.NODE_ENV === 'development';

if (!isDev) {
  useHead(() => {
    return {
      script: [
        {
          type: 'text/javascript',
          innerHTML: `window.customPublicPath = '${base}nuxt-custom-elements/example/';`,
          body: true
        },
        {
          type: 'text/javascript',
          src: `${base}nuxt-custom-elements/example/example.js`,
          async: true,
          defer: true,
          body: true
        }
      ]
    };
  });
}
</script>

<!--
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
  }, -->
