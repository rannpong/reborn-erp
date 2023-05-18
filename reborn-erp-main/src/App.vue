<template>
  <div class="wrap">
    <router-view />
  </div>
</template>

<script lang="ts">
import Login from './views/main/Login.vue'

export default {
  name: 'App',
  components: {
    Login,
  },
}
</script>

<style>
@import url('./assets/css/base.css');
</style>
