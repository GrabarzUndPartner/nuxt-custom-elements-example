<template>
  <div class="frame-preview">
    <a
      class="back-link"
      :href="`${$router.options.base}../`"
      rel="noopener noreferrer"
    ><img src="@/../default/assets/icons/arrow-left.svg">Back to Overview</a>
    <iframe src="./frames/nuxt" />
    <iframe src="./frames/custom" />
    <a
      class="preview-link"
      :href="`${$router.options.base}nuxt-custom-elements/example/`"
      target="_blank"
      rel="noopener noreferrer"
    ><img src="@/../default/assets/icons/external-link.svg">Open Nuxt Custom-Elements example export…</a>
  </div>
</template>
