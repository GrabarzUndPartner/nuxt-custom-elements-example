import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useExampleStore = defineStore('example', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
