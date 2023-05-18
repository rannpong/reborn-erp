<template>
  <div class="paging">
    <a class="prev" @click="onPageChange(currentPage - 1)">&lt;</a>
    <ul class="page-num">
      <li v-for="(paging, index) in pages" :key="index" @click="onPageChange(paging - 1)" :class="paging - 1 === currentPage ? 'on' : ''">{{ paging }}</li>
    </ul>
    <a class="next" @click="onPageChange(currentPage + 1)">&gt;</a>
  </div>

  <!-- popup -->
  <Popup :class="popupClass1" ref="popup" @click="isPopup = false" v-show="isPopup">
    <template #popupBody>
      <p>{{ popupTxt }}</p>
      <div class="btn-wrap">
        <button class="btn btnS color_ty01">확인</button>
      </div>
    </template>
  </Popup>
</template>

<script>
  import Popup from '../../components/layout/Popup.vue';
  export default {
    name: 'Pagination',
    components: {
      Popup,
    },
    props: ['currentPage', 'totalPages', 'pageChange'],
    data() {
      return {
        popupClass1: 'pop_modal',
        isPopup: false,
        popupTxt: '',
      };
    },
    computed: {
      pages: function () {
        const list = [];
        for (let index = this.startPage; index <= this.endPage; index += 1) {
          list.push(index);
        }
        return list;
      },
      startPage() {
        return parseInt(this.currentPage / 10) * 10 + 1;
      },
      endPage() {
        let lastPage = parseInt(this.currentPage / 10) * 10 + 10;
        return lastPage <= this.totalPages ? lastPage : this.totalPages;
      },
    },
    methods: {
      onPageChange(val) {
        if (val < 0) {
          this.fnOpenPopup('첫 페이지입니다.');
          return;
        }
        if (val >= this.totalPages) {
          this.fnOpenPopup('마지막 페이지입니다.');
          return;
        }
        const param = {
          requestPage: val,
        };
        this.pageChange(param);
      },
      fnOpenPopup(txt) {
        this.isPopup = true;
        this.popupTxt = txt;
      },
    },
  };
</script>

<style scoped>
</style>
