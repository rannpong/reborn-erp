<template>
  <div class="popup">
    <div class="popup_inner">
      <button type="button" @click="closePopup()" class="pop_close">
        닫기
      </button>
      <div class="pop_head">
        <slot name="popupHead"></slot>
      </div>
      <div class="pop_cont">
        <slot name="popupBody"></slot>
        <div class="pop_btn">
          <slot name="popupBtn"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'popup',
  components: {},
  // props: ['title', 'title_desc'],
  data() {},
  setup() {},
  methods: {
    closePopup() {
      this.$emit('close')
    },
  },
  unmounted() {},
}
</script>

<style scoped></style>
