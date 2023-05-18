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
                <col width="10%" />
                <col width="10%" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr v-for="(InsChrge, i) in InsChrgeHead" :key="i">
                  <th>{{ InsChrge.carType }}</th>
                  <th>{{ InsChrge.category }}</th>
                  <th>{{ InsChrge.day1 }}</th>
                  <th>{{ InsChrge.day2 }}</th>
                  <th>{{ InsChrge.day3 }}</th>
                  <th>{{ InsChrge.day4 }}</th>
                  <th>{{ InsChrge.day5 }}</th>
                  <th>{{ InsChrge.day6 }}</th>
                  <th>{{ InsChrge.day7 }}</th>
                  <th>{{ InsChrge.day8 }}</th>
                  <th>{{ InsChrge.day9 }}</th>
                  <th>{{ InsChrge.day10 }}</th>
                  <th>{{ InsChrge.day11 }}</th>
                  <th>{{ InsChrge.day12 }}</th>
                  <th>{{ InsChrge.day13 }}</th>
                  <th>{{ InsChrge.day14 }}</th>
                  <th>{{ InsChrge.day15 }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="InsChrge in InsChrgeBodyRow">
                  <tr
                    v-for="(rowList, rowIdx) in InsChrge.list"
                    :key="rowList.id"
                  >
                    <td v-if="rowIdx === 0" :rowspan="InsChrge.list.length">
                      {{ InsChrge.carType }}
                    </td>
                    <td class="row-btn">
                      {{ rowList.categoryTit }}
                      <button class="btn cbtn btn_bg02">자동계산</button>
                    </td>
                    <td><input :value="rowList.day1" /></td>
                    <td><input :value="rowList.day2" /></td>
                    <td><input :value="rowList.day3" /></td>
                    <td><input :value="rowList.day4" /></td>
                    <td><input :value="rowList.day5" /></td>
                    <td><input :value="rowList.day6" /></td>
                    <td><input :value="rowList.day7" /></td>
                    <td><input :value="rowList.day8" /></td>
                    <td><input :value="rowList.day9" /></td>
                    <td><input :value="rowList.day10" /></td>
                    <td><input :value="rowList.day11" /></td>
                    <td><input :value="rowList.day12" /></td>
                    <td><input :value="rowList.day13" /></td>
                    <td><input :value="rowList.day14" /></td>
                    <td><input :value="rowList.day15" /></td>
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
  
  <!-- popup : 보험요금 수정 -->
  <Popup ref="popup" class="small" v-show="popEdit" @close="closePopup()">
    <template #popupBody>
      <p>보험요금을 수정 하시겠습니까?</p>
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
  name: 'InsrncChrge',
  components: {},
  data() {
    return {
      contTit: '보험요금관리',
      lendChrgeDate: '2023-04-11 16:45',
      // table head data
      InsChrgeHead: [
        {
          carType: '차종',
          category: '구분',
          day1: '1일',
          day2: '2일',
          day3: '3일',
          day4: '4일',
          day5: '5일',
          day6: '6일',
          day7: '7일',
          day8: '8일',
          day9: '9일',
          day10: '10일',
          day11: '11일',
          day12: '12일',
          day13: '13일',
          day14: '14일',
          day15: '15일',
        },
      ],
      // table body data
      InsChrgeBodyRow: [
        {
          id: '1',
          carType: 'MAZDA2',
          list: [
            {
              id: '1-1',
              categoryTit: '부분무제한면책',
              day1: '9,000',
              day2: '18,000',
              day3: '27,000',
              day4: '36,000',
              day5: '45,000',
              day6: '54,000',
              day7: '63,000',
              day8: '72,000',
              day9: '81,000',
              day10: '90,000',
              day11: '99,000',
              day12: '108,000',
              day13: '117,000',
              day14: '126,000',
              day15: '135,000',
            },
            {
              id: '1-2',
              categoryTit: '전액무제한면책',
              day1: '15,000',
              day2: '30,000',
              day3: '45,000',
              day4: '60,000',
              day5: '75,000',
              day6: '90,000',
              day7: '105,000',
              day8: '120,000',
              day9: '135,000',
              day10: '150,000',
              day11: '165,000',
              day12: '180,000',
              day13: '195,000',
              day14: '210,000',
              day15: '225,000',
            },
          ],
        },
        {
          id: '2',
          carType: 'TOYOTA YARiS',
          list: [
            {
              id: '2-1',
              categoryTit: '부분무제한면책',
              day1: '5,000',
              day2: '',
              day3: '',
              day4: '',
              day5: '',
              day6: '',
              day7: '',
              day8: '',
              day9: '',
              day10: '',
              day11: '',
              day12: '',
              day13: '',
              day14: '',
              day15: '',
            },
          ],
        },
        {
          id: '3',
          carType: 'Corolla Axio',
          list: [
            {
              id: '3-1',
              categoryTit: '부분무제한면책',
              day1: '',
              day2: '',
              day3: '',
              day4: '',
              day5: '',
              day6: '',
              day7: '',
              day8: '',
              day9: '',
              day10: '',
              day11: '',
              day12: '',
              day13: '',
              day14: '',
              day15: '',
            },
          ],
        },
      ],
      
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
