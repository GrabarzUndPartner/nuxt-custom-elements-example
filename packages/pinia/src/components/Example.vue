<template>
  <div class="example">
    <div class="content">
      <span @click="store.increment()">
        You have pressed
        <strong>{{ store.count }}</strong> times on the text!
      </span>
    </div>
  </div>
</template>

<script setup>
import { useExampleStore } from '@/stores/example';
// access the `store` variable anywhere in the component ✨
const store = useExampleStore();
</script>

<style lang="postcss" scoped>
.example {
  position: relative;
  padding: 10px;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  color: #35495e;
  text-align: center;
  background: #35495e;
  border-radius: 4px;
}

span {
  font-size: 28px;
  cursor: pointer;
  user-select: none;
}

p {
  font-size: 30px;
  font-weight: bold;
}

a {
  display: block;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
}

.content {
  padding: 5px;
  overflow: hidden;
  line-height: 1.6;
  color: #35495e;
  background: #fff;
}

.content > div {
  position: relative;
  overflow: hidden;
}

.content :deep(h2) {
  margin: 0;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
