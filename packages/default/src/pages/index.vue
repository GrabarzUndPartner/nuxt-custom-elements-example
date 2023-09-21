<template>
  <div class="custom-elements-example-container">
    <div>
      <h1>
        <img class="logo" src="@/assets/logo.svg" alt="Nuxt Custom-Elements" />
      </h1>
      <div class="buttons">
        <a
          href="https://nuxt-custom-elements.grabarzundpartner.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="button-green"
          title="Documentation">
          Documentation
        </a>
        <a
          href="https://github.com/GrabarzUndPartner/nuxt-custom-elements"
          target="_blank"
          rel="noopener noreferrer"
          class="button-grey"
          title="GitHub (Nuxt Custom-Elements)">
          GitHub (Nuxt Custom-Elements)
        </a>
        <a
          href="https://github.com/GrabarzUndPartner/nuxt-custom-elements-example"
          target="_blank"
          rel="noopener noreferrer"
          class="button-grey"
          title="GitHub (Example)">
          GitHub (Example)
        </a>
      </div>
      <fieldset class="custom-elements-example-fieldset">
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
          class="button-grey"
          v-bind="example">
          <span v-if="example.icon" class="icon"
            ><img :src="example.icon"
          /></span>
          {{ example.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCustomElements } from '#imports';

import vuetfiyIcon from '@/assets/icons/vuetify.png';
import tailwindcssIcon from '@/assets/icons/tailwindcss.png';
import piniaIcon from '@/assets/icons/pinia.png';

const examples = [
  {
    icon: vuetfiyIcon,
    href: 'https://grabarzundpartner.github.io/nuxt-custom-elements-example/vuetify/',
    title: 'Build with Vuetify'
  },
  {
    icon: tailwindcssIcon,
    href: 'https://grabarzundpartner.github.io/nuxt-custom-elements-example/tailwindcss/',
    title: 'Build with TailwindCSS'
  },
  {
    icon: piniaIcon,
    href: 'https://grabarzundpartner.github.io/nuxt-custom-elements-example/pinia/',
    title: 'Build with Pinia'
  }
];
const { registerEntry } = useCustomElements();
registerEntry('example');
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

.custom-elements-example-fieldset {
  margin: 0 auto;
  margin-top: 20px;
}
</style>
