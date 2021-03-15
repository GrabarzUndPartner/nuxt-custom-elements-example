<template>
  <div class="container">
    <div>
      <img class="logo" src="@/assets/logo.svg">
      <div class="links">
        <a
          href="https://nuxt-custom-elements.grabarzundpartner.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/GrabarzUndPartner/nuxt-custom-elements"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <fieldset>
        <legend>Example</legend>
        <client-only>
          <custom-element-example title="Example Prop. Title">
            Example Slot Content
          </custom-element-example>
        </client-only>
      </fieldset>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';

Vue.config.ignoredElements = [
  'custom-element-example'
];

export default {
  created () {
    this.$registerCustomElementsEntry('Example');
  }
};

</script>

<style>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 15px;
  margin: 0 auto;
  text-align: center;
}

.container > div {
  width: 100%;
}

.links {
  margin: 20px 0;
}

.logo {
  width: 100%;
  min-width: 280px;
  max-width: 640px;
}

fieldset {
  margin: 0 auto;
  margin-top: 40px;
}
</style>
