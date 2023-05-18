<template>
  <div class="subBody dcrt01">
    <h2>{{ contTit }}</h2>

    <form action="">
      <div class="tbl-tit-wrap">
        <div class="flex-wrap">
          <div class="btn-wrap align_right">
            <button class="btn cbtn btn_bg01" @click="openEditPop()">
              수정
            </button>
          </div>
        </div>
      </div>

      <p class="lendedit-txt">
        수정/적용일자 :
        <span class="lendedit-date">{{ lendChrgeDate }}</span>
      </p>
      <div class="data-wrap">
        <div class="data-table-wrap tblScroll verX">
          <div class="tbl_x_scr">
            <table class="data-table-ty01">
              <caption>{{ contTit }}</caption>
              <colgroup>
                <col width="18%" />
                <col width="15%" />
                <col />
                <col />
                <col />
                <col />
                <col width="30%" />
              </colgroup>
              <thead>
                <tr v-for="(ChrgeInfo, i) in InsChrgeInfo" :key="i">
                  <th>{{ ChrgeInfo.carType }}</th>
                  <th>{{ ChrgeInfo.category }}</th>
                  <th>{{ ChrgeInfo.age }}</th>
                  <th>{{ ChrgeInfo.drHistory }}</th>
                  <th>{{ ChrgeInfo.disAmount }}</th>
                  <th>{{ ChrgeInfo.reward }}</th>
                  <th>{{ ChrgeInfo.resScope }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="ChrgeInfo in ChrgeInfoRow">
                  <tr
                    v-for="(infoList, rowIdx) in ChrgeInfo.list"
                    :key="infoList.id"
                  >
                    <td v-if="rowIdx === 0" :rowspan="ChrgeInfo.list.length">
                      {{ ChrgeInfo.carType }}
                    </td>
                    <td>
                      {{ infoList.categoryTit }}
                    </td>
                    <td><input :value="infoList.age" /></td>
                    <td><input :value="infoList.drHistory" /></td>
                    <td><input :value="infoList.disAmount" /></td>
                    <td><input :value="infoList.reward" /></td>
                    <td><input :value="infoList.resScope" /></td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="tbl-bot-wrap">
        <div class="btn-wrap align_right">
          <button class="btn cbtn btn_bg01" @click="openEditPop()">수정</button>
        </div>
      </div>
    </form>
  </div>

  
  <div class="dimmed" v-show="popDimmed"></div>

  <!-- popup : 보험정보 수정 -->
  <Popup ref="popup" class="small" v-show="popEdit" @close="closePopup()">
    <template #popupBody>
      <p>보험정보를 수정 하시겠습니까?</p>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
        <button class="btn cbtn btn_bg01">확인</button>
      </div>
    </template>
  </Popup>
  <!-- // popup -->

  <!-- popup : 수정 완료 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>수정되었습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
          <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->
</template>

<script lang="ts">
export default {
  name: 'InsrncInfo',
  components: {},
  data() {
    return {
      contTit: '보험정보관리',
      lendChrgeDate: '2023-05-02 10:13',
      // table head data
      InsChrgeInfo: [
        {
          carType: '차종',
          category: '구분',
          age: '제한나이(세)',
          drHistory: '제한운전경력(년)',
          disAmount: '면책금액(원)',
          reward: '보상한도(원)',
          resScope: '책임범위',
        },
      ],
      // table body data
      ChrgeInfoRow: [
        {
          id: 'info1',
          carType: 'MAZDA2',
          list: [
            {
              id: 'info1-1',
              categoryTit: '부분무제한면책',
              age: '21',
              drHistory: '1',
              disAmount: '100,000',
              reward: '0',
              resScope: '면책금 10만원(건당) + 휴차보상료',
            },
            {
              id: 'info1-2',
              categoryTit: '전액무제한면책',
              age: '21',
              drHistory: '1',
              disAmount: '0',
              reward: '0',
              resScope: '고객부담금없음(1회성)',
            },
          ],
        },
        {
          id: 'info2',
          carType: 'TOYOTA YARiS',
          list: [
            {
              id: 'info2-1',
              categoryTit: '부분무제한면책',
              age: '21',
              drHistory: '1',
              disAmount: '100,000',
              reward: '0',
              resScope: '면책금 10만원(건당) + 휴차보상료',
            },
          ],
        },
      ],
      //popup
      popDimmed: false,
      popEdit: false,
    }
  },
  methods: {
    openEditPop() {
      this.popDimmed = true;
      this.popEdit = true
      document.body.classList.add('scrollLock') // 팝업 오픈 시 body 스크롤 막기
    },
    closePopup() {
      this.popDimmed = false;
      this.popEdit = false
      document.body.classList.remove('scrollLock') // 팝업 닫을 시
    },
  },
}
</script>

<style scoped></style>
