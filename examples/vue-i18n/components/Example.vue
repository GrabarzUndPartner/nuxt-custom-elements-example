<template>
  <div class="example">
    <nav class="navigation">
      <span>Locales:</span>
      <ul>
        <li v-for="link in links" :key="link.title">
          <nuxt-link v-if="$nuxt" :to="switchLocalePath(link.code)" :title="link.title">
            {{ link.title }}
          </nuxt-link>
          <a v-else :class="link.class" :title="link.title" @click="$event.preventDefault(); $i18n.locale = link.code">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </nav>
    <div class="content">
      <transition name="fade" mode="out-in">
        <span :key="$i18n.locale">{{ $t('message').hello }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
import i18nOptions from '../plugins/i18n.options';

export default {
  computed: {
    links () {
      return (this.$i18n.locales || i18nOptions.locales).map(({ name, code }) => {
        return {
          code,
          class: code === this.$i18n.locale ? 'router-link-exact-active router-link-active' : '',
          title: name
        };
      });
    }
  }
};
</script>

<style scoped>
.example {
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

nav {
  display: flex;
  padding: 5px 10px;
  margin-bottom: 10px;
  color: #fff;
  background: #3b8070;
}

nav > span {
  padding-right: 10px;
}

ul {
  display: flex;
  flex: 1;
  padding: 0;
  list-style: none;
}

ul li {
  padding: 0 5px;
}

a {
  display: block;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
}

.nuxt-link-exact-active.nuxt-link-active,
.router-link-exact-active.router-link-active {
  font-weight: bold;
}

.title {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
}

.title,
.content {
  padding: 5px;
  line-height: 1.6;
  color: #35495e;
  background: #fff;
}

.fade-leave-active {
  transition: opacity 0.35s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
