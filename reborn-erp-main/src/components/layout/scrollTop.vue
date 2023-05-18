<template>
  <button class="btn-top" @click="scrollTop" v-show="visible"></button>
</template>

<script lang="ts">
  export default {
    name: 'BtnTop',
    components: {
    },

    data() {
      return{
        visible: false,
      }
    },
    props: {
      data: Array,
    },
    mounted() {
      window.addEventListener('scroll', this.scrollListener);

    },
    unmounted() {},
    beforeDestroy: function () {
      window.removeEventListener('scroll', this.scrollListener)
    },
    methods: {
      scrollTop: function () {
          window.scroll(0, 0)
        },
      scrollListener: function () {
        this.visible = window.scrollY > 150
      }
    },
  };
</script>

<style scoped></style>
