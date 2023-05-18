<template>
    <div class="err_wrap">
        <div class="err_box">
            <img src="../../assets/img/common/bg_err_500.png" alt="에러 이미지" class="img_err" />
            <div class="err_txt_box">
                <h3>500</h3>
                <h4>Internet Server Error</h4>
                <h5>죄송합니다.</h5>
                <p>
                    서비스 이용에 불편을 드려 죄송합니다.<br/>
                    시스템 에러가 발생하여 페이지를 표시할 수 없습니다.<br/>
                    잠시 후 다시 시도하세요.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Error500',
    components: {},
    data() {
        return {}
    },
    methods: {},
}
</script>

<style scoped></style>
