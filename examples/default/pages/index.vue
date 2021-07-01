<template>
  <div class="custom-elements-example__container">
    <div>
      <h1>
        <img class="logo" src="@/assets/logo.svg" alt="Nuxt Custom-Elements">
      </h1>
      <div class="buttons">
        <a
          href="https://nuxt-custom-elements.grabarzundpartner.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
          title="Documentation"
        >
          Documentation
        </a>
        <a
          href="https://github.com/GrabarzUndPartner/nuxt-custom-elements"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
          title="GitHub (Nuxt Custom-Elements)"
        >
          GitHub (Nuxt Custom-Elements)
        </a>
        <a
          href="https://github.com/GrabarzUndPartner/nuxt-custom-elements-example"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
          title="GitHub (Example)"
        >
          GitHub (Example)
        </a>
      </div>
      <fieldset class="custom-elements-example__fieldset">
        <legend>Example</legend>
        <client-only>
          <custom-element-example title="Example Prop. Title">
            Example Slot Content
          </custom-element-example>
        </client-only>
      </fieldset>
      <h2>See other interesting examples…</h2>
      <div class="buttons">
        <a
          v-for="example in examples"
          :key="example.title"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
          v-bind="example"
        >
          <span v-if="example.icon" class="icon"><img :src="example.icon"></span>
          {{ example.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';

Vue.config.ignoredElements = [
  'custom-element-example'
];

export default {
  data () {
    return {
      examples: [
        {
          icon: require('@/assets/icons/vuetify.png'),
          href: 'https://grabarzundpartner.github.io/nuxt-custom-elements-example/vuetify/',
          title: 'Build with Vuetify'
        },
        {
          icon: require('@/assets/icons/tailwindcss.png'),
          href: 'https://grabarzundpartner.github.io/nuxt-custom-elements-example/tailwind-css/',
          title: 'Build with TailwindCSS'
        },
        {
          icon: require('@/assets/icons/vue.png'),
          href: 'https://grabarzundpartner.github.io/nuxt-custom-elements-example/vue-router/',
          title: 'Build with Vue-Router'
        },
        {
          icon: require('@/assets/icons/i18n.png'),
          href: 'https://grabarzundpartner.github.io/nuxt-custom-elements-example/vue-i18n/',
          title: 'Build with Vue-i18n'
        },
        {
          icon: require('@/assets/icons/vue.png'),
          href: 'https://grabarzundpartner.github.io/nuxt-custom-elements-example/vuex/',
          title: 'Build with Vuex'
        },
        {
          href: 'https://grabarzundpartner.github.io/nuxt-custom-elements-example/external/',
          title: 'External Usage'
        }
      ]
    };
  },

  created () {
    this.$registerCustomElementsEntry('Example');
  }
};

</script>

<style>
.container > div {
  width: 100%;
}

.logo {
  width: 100%;
  min-width: 280px;
  max-width: 640px;
}

.custom-elements-example__fieldset {
  margin: 0 auto;
  margin-top: 20px;
}
</style>
