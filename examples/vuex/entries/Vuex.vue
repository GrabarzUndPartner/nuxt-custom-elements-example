<template>
  <div>
    <Example />
  </div>
</template>

<script>
import Example from '@/components/Example';
import vuex from '@/plugins/vuex';

export default {
  store: vuex(),
  components: { Example }
};
</script>
