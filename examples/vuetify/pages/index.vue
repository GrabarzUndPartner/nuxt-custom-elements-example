<template>
  <div>
    <iframe src="./frames/nuxt" />
    <iframe src="./frames/custom" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

iframe {
  flex: 1;
  width: 100%;
  border: none;
}
</style>
