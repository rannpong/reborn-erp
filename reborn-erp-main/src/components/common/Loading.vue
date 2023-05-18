<template>    
    <div class="dimmed"></div>
    <div class="loading_wrap">
        <img src="../../assets/img/common/ribon_loading.gif" alt="로딩 이미지" />
    </div>
</template>

<script lang="ts">
export default {
    name: 'Loading',
    components: {},
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style scoped></style>
