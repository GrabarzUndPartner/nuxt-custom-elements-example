<template>
  <div class="example">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      <slot>Default Content</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Default Title'
    }
  }
};
</script>

<style scoped>
.example {
  padding: 10px;
  font-family:
    'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #35495e;
  background: #35495e;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
}
.title {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
}
.title, .content {
  padding: 5px;
  color: white;
  background: #3b8070;
}
</style>
