<template>
  <div class="custom-elements-example__container">
    <fieldset class="custom-elements-example__fieldset">
      <legend>Nuxt Component</legend>
      <div>
        <Example />
      </div>
    </fieldset>
  </div>
</template>

<script>

import Example from '@/components/Example';
export default {
  components: { Example }
};

</script>
