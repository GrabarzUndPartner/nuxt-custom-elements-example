<template>
  <div>
    <Example />
  </div>
</template>

<script>
import Example from '@/components/Example';
import vueI18n from '@/plugins/vueI18n';

export default {
  i18n: vueI18n,
  components: { Example }
};
</script>
