<template>
  <div>
    <Example />
  </div>
</template>

<script>
import Vue from 'vue';
import VueMeta from 'vue-meta';
import Example from '@/components/Example';
import vuetify from '@/plugins/vuetify';

Vue.use(VueMeta);

export default {
  vuetify,
  components: { Example },
  created () {
    const { set } = this.$meta().addApp('custom');
    set({
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' }
      ]
    });
  }
};
</script>

<style scoped>
div {
  font-family: 'Roboto', sans-serif;
}
</style>
