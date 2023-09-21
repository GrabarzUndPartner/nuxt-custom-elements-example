<template>
  <div class="frame-preview">
    <a class="back-link" :href="`${base}../`" rel="noopener noreferrer"
      ><img
        src="@nuxt-custom-elements/default/assets/icons/arrow-left.svg?url" />Back
      to Overview</a
    >
    <iframe src="./frames/nuxt" />
    <iframe src="./frames/custom" />
    <div class="preview-links">
      <a
        :href="`${base}nuxt-custom-elements/example/`"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          src="@nuxt-custom-elements/default/assets/icons/external-link.svg?url" />Open
        example export…</a
      >
    </div>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from '#imports';
const base = useRuntimeConfig().app.baseURL;
</script>
