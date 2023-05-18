<template>
    <Header />
    <LeftMenu />
    <div class="container">
        <router-view></router-view>
        <scrollTop/>
    </div>
</template>

<script lang="ts">
import Header from '../components/common/Header.vue'
import LeftMenu from '../components/common/LeftMenu.vue'
import scrollTop from '../components/layout/scrollTop.vue'

export default {
    name: 'SubLayout',
    components: {
    Header,
    LeftMenu,
    scrollTop,
  },
    data() {
        return {}
    },
    methods: {},
    }
</script>

<style scoped></style>
