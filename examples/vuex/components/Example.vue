<template>
  <div class="example">
    <div class="content">
      <span @click="$store.dispatch('example/increment')">You have pressed <strong>{{ $store.getters['example/count'] }}</strong> times on the text!</span>
    </div>
  </div>
</template>

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
