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

              <!-- 환경 > 산출방법 24H, 24H+12+6+1, 24H+12+10+6 선택시 활성화되는 테이블 01 -->
              <template v-if="preper01">
                <colgroup>
                  <col width="28%" />
                  <col width="18%" />
                  <col width="18%" />
                  <col width="18%" />
                  <col width="18%" />
                </colgroup>
                <thead>
                  <tr v-for="(lendChrge01, i) in lendChrgeHead01" :key="i">
                    <th>{{ lendChrge01.carType }}</th>
                    <th>{{ lendChrge01.hours6 }}</th>
                    <th>{{ lendChrge01.hours12 }}</th>
                    <th>{{ lendChrge01.hours24 }}</th>
                    <th>{{ lendChrge01.hours1 }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(lendChrge01, i) in lendChrgeBody01" :key="i">
                    <td>{{ lendChrge01.carType }}</td>
                    <td><input :value="lendChrge01.hours6" /></td>
                    <td><input :value="lendChrge01.hours12" /></td>
                    <td><input :value="lendChrge01.hours24" /></td>
                    <td><input :value="lendChrge01.hours1" /></td>
                  </tr>
                </tbody>
              </template>
              <!-- //환경 > 산출방법 24H, 24H+12+6+1, 24H+12+10+6 선택시 활성화되는 테이블 01 -->

              <!-- 환경 > 산출방법 1D 선택시 활성화되는 테이블 02 -->
              <template v-if="preper02">
                <colgroup>
                  <col width="30%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="10%" />
                </colgroup>
                <thead>
                  <tr v-for="(lendChrge02, i) in lendChrgeHead02" :key="i">
                    <th>{{ lendChrge02.carType }}</th>
                    <th>{{ lendChrge02.day1 }}</th>
                    <th>{{ lendChrge02.days2 }}</th>
                    <th>{{ lendChrge02.days3 }}</th>
                    <th>{{ lendChrge02.days4 }}</th>
                    <th>{{ lendChrge02.days5 }}</th>
                    <th>{{ lendChrge02.days6 }}</th>
                    <th>{{ lendChrge02.days7 }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(lendChrge02, i) in lendChrgeBody02" :key="i">
                    <td>{{ lendChrge02.carType }}</td>
                    <td><input :value="lendChrge02.day1" /></td>
                    <td><input :value="lendChrge02.days2" /></td>
                    <td><input :value="lendChrge02.days3" /></td>
                    <td><input :value="lendChrge02.days4" /></td>
                    <td><input :value="lendChrge02.days5" /></td>
                    <td><input :value="lendChrge02.days6" /></td>
                    <td><input :value="lendChrge02.days7" /></td>
                  </tr>
                </tbody>
              </template>
              <!-- //환경 > 산출방법 1D 선택시 활성화되는 테이블 02 -->

              <!-- 환경 > 산출방법 1D+12+6+1 선택시 활성화되는 테이블 03 -->
              <template v-if="preper03">
                <colgroup>
                  <col width="30%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                </colgroup>
                <thead>
                  <tr v-for="(lendChrge03, i) in lendChrgeHead03" :key="i">
                    <th>{{ lendChrge03.carType }}</th>
                    <th>{{ lendChrge03.day1 }}</th>
                    <th>{{ lendChrge03.days2 }}</th>
                    <th>{{ lendChrge03.days3 }}</th>
                    <th>{{ lendChrge03.days4 }}</th>
                    <th>{{ lendChrge03.days5 }}</th>
                    <th>{{ lendChrge03.days6 }}</th>
                    <th>{{ lendChrge03.days7 }}</th>
                    <th>{{ lendChrge03.hours1 }}</th>
                    <th>{{ lendChrge03.hours6 }}</th>
                    <th>{{ lendChrge03.hours12 }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(lendChrge03, i) in lendChrgeBody03" :key="i">
                    <td>{{ lendChrge03.carType }}</td>
                    <td><input :value="lendChrge03.day1" /></td>
                    <td><input :value="lendChrge03.days2" /></td>
                    <td><input :value="lendChrge03.days3" /></td>
                    <td><input :value="lendChrge03.days4" /></td>
                    <td><input :value="lendChrge03.days5" /></td>
                    <td><input :value="lendChrge03.days6" /></td>
                    <td><input :value="lendChrge03.days7" /></td>
                    <td><input :value="lendChrge03.hours1" /></td>
                    <td><input :value="lendChrge03.hours6" /></td>
                    <td><input :value="lendChrge03.hours12" /></td>
                  </tr>
                </tbody>
              </template>
              <!-- //환경 > 산출방법 1D+12+6+1 선택시 활성화되는 테이블 03 -->

              <!-- 환경 > 산출방법 1D+12+10+6 선택시 활성화되는 테이블 04 -->
              <template v-if="preper04">
                <colgroup>
                  <col width="30%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                </colgroup>
                <thead>
                  <tr v-for="(lendChrge04, i) in lendChrgeHead04" :key="i">
                    <th>{{ lendChrge04.carType }}</th>
                    <th>{{ lendChrge04.day1 }}</th>
                    <th>{{ lendChrge04.days2 }}</th>
                    <th>{{ lendChrge04.days3 }}</th>
                    <th>{{ lendChrge04.days4 }}</th>
                    <th>{{ lendChrge04.days5 }}</th>
                    <th>{{ lendChrge04.days6 }}</th>
                    <th>{{ lendChrge04.days7 }}</th>
                    <th>{{ lendChrge04.hours6 }}</th>
                    <th>{{ lendChrge04.hours10 }}</th>
                    <th>{{ lendChrge04.hours12 }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(lendChrge04, i) in lendChrgeBody04" :key="i">
                    <td>{{ lendChrge04.carType }}</td>
                    <td><input :value="lendChrge04.day1" /></td>
                    <td><input :value="lendChrge04.days2" /></td>
                    <td><input :value="lendChrge04.days3" /></td>
                    <td><input :value="lendChrge04.days4" /></td>
                    <td><input :value="lendChrge04.days5" /></td>
                    <td><input :value="lendChrge04.days6" /></td>
                    <td><input :value="lendChrge04.days7" /></td>
                    <td><input :value="lendChrge04.hours6" /></td>
                    <td><input :value="lendChrge04.hours10" /></td>
                    <td><input :value="lendChrge04.hours12" /></td>
                  </tr>
                </tbody>
              </template>
              <!-- //환경 > 산출방법 1D+12+10+6 선택시 활성화되는 테이블 04 -->
            </table>
          </div>
        </div>
        <!-- //tblScroll -->
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
      <p>대여요금을 수정 하시겠습니까?</p>
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
  name: 'LendChrge',
  components: {},
  data() {
    return {
      contTit: '대여요금관리',
      lendChrgeDate: '2023-04-11 16:45',
      // table v-if
      preper01: true,
      preper02: false,
      preper03: false,
      preper04: false,
      // table01 head data
      lendChrgeHead01: [
        {
          carType: '차종',
          hours6: '6시간(원)',
          hours12: '12시간(원)',
          hours24: '24시간(원)',
          hours1: '1시간 초과(원)',
        },
      ],
      // table01 body data
      lendChrgeBody01: [
        {
          carType: 'MAZDA2',
          hours6: '25,000',
          hours12: '50,000',
          hours24: '97,000',
          hours1: '7,000',
        },
        {
          carType: 'TOYOTA YARiS',
          hours6: '28,000',
          hours12: '55,000',
          hours24: '110,000',
          hours1: '10,000',
        },
      ],
      // table02 head data
      lendChrgeHead02: [
        {
          carType: '차종',
          day1: '1일(원)',
          days2: '2일(원)',
          days3: '3일(원)',
          days4: '4일(원)',
          days5: '5일(원)',
          days6: '6일(원)',
          days7: '7일(원)',
        },
      ],
      // table02 body data
      lendChrgeBody02: [
        {
          carType: 'MAZDA2',
          day1: '110,000',
          days2: '110,000',
          days3: '110,000',
          days4: '110,000',
          days5: '110,000',
          days6: '110,000',
          days7: '110,000',
        },
      ],
      // table03 head data
      lendChrgeHead03: [
        {
          carType: '차종',
          day1: '1일(원)',
          days2: '2일(원)',
          days3: '3일(원)',
          days4: '4일(원)',
          days5: '5일(원)',
          days6: '6일(원)',
          days7: '7일(원)',
          hours1: '1시간(원)',
          hours6: '6시간(원)',
          hours12: '12시간(원)',
        },
      ],
      // table03 body data
      lendChrgeBody03: [
        {
          carType: 'MAZDA2',
          day1: '110,000',
          days2: '110,000',
          days3: '110,000',
          days4: '110,000',
          days5: '110,000',
          days6: '110,000',
          days7: '110,000',
          hours1: '10,000',
          hours6: '10,000',
          hours12: '10,000',
        },
      ],
      // table04 head data
      lendChrgeHead04: [
        {
          carType: '차종',
          day1: '1일(원)',
          days2: '2일(원)',
          days3: '3일(원)',
          days4: '4일(원)',
          days5: '5일(원)',
          days6: '6일(원)',
          days7: '7일(원)',
          hours6: '6시간(원)',
          hours10: '10시간(원)',
          hours12: '12시간(원)',
        },
      ],
      // table04 body data
      lendChrgeBody04: [
        {
          carType: 'MAZDA2',
          day1: '110,000',
          days2: '110,000',
          days3: '110,000',
          days4: '110,000',
          days5: '110,000',
          days6: '110,000',
          days7: '110,000',
          hours6: '10,000',
          hours10: '10,000',
          hours12: '10,000',
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
      document.body.classList.remove('scrollLock') // 팝업 닫을 시
    },
  },
}
</script>

<style scoped></style>
