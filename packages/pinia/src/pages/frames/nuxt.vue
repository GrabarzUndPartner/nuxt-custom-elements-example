<template>
  <div class="custom-elements-example-container">
    <fieldset class="custom-elements-example-fieldset">
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
