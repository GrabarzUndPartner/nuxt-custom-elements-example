<template>
  <div class="frame-preview">
    <a
      class="back-link"
      :href="`${$router.options.base}../`"
      rel="noopener noreferrer"
    ><img src="@/../default/assets/icons/arrow-left.svg">Back to Overview</a>
    <iframe src="./frames/nuxt" />
    <iframe src="./frames/custom" />
    <iframe src="./frames/custom-shadow" />
    <div class="preview-links">
      <a
        :href="`${$router.options.base}nuxt-custom-elements/example/`"
        target="_blank"
        rel="noopener noreferrer"
      ><img src="@/../default/assets/icons/external-link.svg">Open example export…</a>
      <a
        :href="`${$router.options.base}nuxt-custom-elements/example-shadow/`"
        target="_blank"
        rel="noopener noreferrer"
      ><img src="@/../default/assets/icons/external-link.svg">Open example (Shadow DOM) export…</a>
    </div>
  </div>
</template>
