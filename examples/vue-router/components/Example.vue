<template>
  <div class="example">
    <nav class="navigation">
      <span>Views:</span>
      <ul>
        <li v-for="link in links" :key="link.title">
          <router-link :to="link.to" :title="link.title">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="content">
      <div>
        <transition name="router-view-change">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { createRouter, getViewKeys } from '../plugins/vueRouter';

export default {
  name: 'CustomElementRouterView',
  router: createRouter(),
  computed: {
    links () {
      const keys = getViewKeys();
      return this.$router.options.routes.map((path, index) => {
        return {
          // class: key === this.$i18n.locale ? 'router-link-exact-active router-link-active' : '',
          title: keys[index],
          to: path
        };
      });
    }
  }
};
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

.content >>> h2 {
  margin: 0;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
}

.router-view-change-enter-active,
.router-view-change-leave-active {
  transition: opacity 0s 0.15s linear;
}

.router-view-change-enter,
.router-view-change-leave-to {
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: opacity 0.15s 0.15s linear;
}
</style>
