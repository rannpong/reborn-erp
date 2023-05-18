<template>
  <div class="subBody dcrt01">
    <h2>{{ contTit }}</h2>
    <div class="btn-wrap align_right">
      <button class="btn cbtn btn_bg04">취소</button>
      <button class="btn cbtn btn_bg04">수정</button>
      <button class="btn cbtn btn_bg02">
        일괄삭제
      </button>
      <button class="btn cbtn btn_bg01" @click="disCountEvtOpen()">
        불러오기
      </button>
    </div>

    <!-- 기간별 할인율 설정 -->
    <div class="info-box-wrap">
      <div class="info-tit-box">
        <h3 class="infoTit">{{ infoTit1 }}</h3>
      </div>
      <div class="info-cont-box">
        <div class="table-list-wrap">
          <table class="data-table-ty03">
            <caption>{{ infoTit1 }}</caption>
            <colgroup>
              <col style="width: 15%;" />
              <col style="" />
            </colgroup>
            <tbody :key="i" v-for="(tblInfo, i) in tblInfoList01">
              <tr>
                <th>{{ tblInfo.useDateTit }}</th>
                <td>
                  <div class="flex-wrap">
                    <div class="date-input-wrap">
                      <DateLayout
                        placeholder="시작일"
                        format="yyyy-MM-dd"
                      ></DateLayout>
                      <span class="space-txt01 space-txt02">-</span>
                      <DateLayout
                        placeholder="종료일"
                        format="yyyy-MM-dd"
                      ></DateLayout>
                    </div>
                    <div class="frm-wrap chk_del">
                      <div class="frm">
                        <input type="checkbox" id="useChk01" />
                        <label for="useChk01">사용하지 않음</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>{{ tblInfo.discountRate }}</th>
                <td>
                  <div class="flex-wrap">
                    <div
                      class="rate-list"
                      v-for="(list, i) in countInfoList01"
                      :key="i"
                    >
                      <span class="list-tit">{{ list.countTit }}</span>
                      <input :value="list.value" />
                      <span class="list-unit">{{ list.unit }}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>{{ tblInfo.noteTxt }}</th>
                <td>
                  <div class="flex-wrap">
                    <textarea
                      placeholder="비고사항을 입력하세요."
                      v-model="note_remarks1"
                    ></textarea>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 예외 차종 할인율(전차종) -->
    <div class="info-box-wrap">
      <div class="info-tit-box">
        <h3 class="infoTit">{{ infoTit2 }}</h3>
      </div>
      <div class="info-cont-box">
        <div class="data-wrap">
          <div class="data-table-wrap tblScroll">
            <table class="data-table-ty01">
              <caption>{{ infoTit2 }}</caption>
              <colgroup>
                <col width="16%" />
                <col width="14%" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr v-for="(countList, i) in countListHead" :key="i">
                  <th>{{ countList.carType }}</th>
                  <th>{{ countList.fixedCost }}</th>
                  <th>{{ countList.weekDaysCost }}</th>
                  <th>{{ countList.weekDaysCount }}</th>
                  <th>{{ countList.weekEndCost }}</th>
                  <th>{{ countList.weekEndCount }}</th>
                  <th>{{ countList.holidaysCost }}</th>
                  <th>{{ countList.holidaysCount }}</th>
                  <th>{{ countList.carOwn }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="countListBody.length === 0">
                  <td colspan="9">표시할 데이터가 없습니다.</td>
                </tr>
                <tr v-for="(countList, i) in countListBody" :key="i">
                  <td>{{ countList.carType }}</td>
                  <td>{{ countList.fixedCost }}</td>
                  <td><input :value="countList.weekDaysCost" /></td>
                  <td>{{ countList.weekDaysCount }} %</td>
                  <td><input :value="countList.weekEndCost" /></td>
                  <td>{{ countList.weekEndCount }} %</td>
                  <td><input :value="countList.holidaysCost" /></td>
                  <td>{{ countList.holidaysCount }} %</td>
                  <td>
                    <input :value="countList.carOwn" />
                    %
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-wrap align_right">
      <button class="btn cbtn btn_bg04">취소</button>
      <button class="btn cbtn btn_bg04">수정</button>
      <button class="btn cbtn btn_bg02">
        일괄삭제
      </button>
      <button class="btn cbtn btn_bg01" @click="disCountEvtOpen()">
        불러오기
      </button>
    </div>
  </div>

  
  <div class="dimmed" v-show="popDimmed"></div>

  <!-- popup : 목록 > 불러오기 > 기간별 할인 내역 팝업 -->
  <Popup ref="popup" class="large" v-show="discountEvtPop" @close="closePop">
    <template #popupHead>
      <h2>{{ popTit1 }}</h2>
    </template>
    <template #popupBody>
      <div class="tblScroll verY">
        <div class="tbl_y_scr reponsive-table-wrap">
          <table class="data-table-ty02">
            <caption>{{ popTit1 }}</caption>
            <colgroup>
              <col class="mo_hide" width="23%" />
              <col class="mo_hide" width="8%" />
              <col class="mo_hide" width="8%" />
              <col class="mo_hide" width="8%" />
              <col class="mo_hide" width="8%" />
              <col class="mo_hide" width="*" />
              <col class="mo_hide" width="12%" />
            </colgroup>
            <thead>
              <tr v-for="(detailData, i) in DetailHeadList" :key="i">
                <th scope="col">{{ detailData.useDates }}</th>
                <th scope="col">{{ detailData.weekDays }}</th>
                <th scope="col">{{ detailData.weekEnd }}</th>
                <th scope="col">{{ detailData.holidays }}</th>
                <th scope="col">{{ detailData.carOwn }}</th>
                <th scope="col">{{ detailData.ectTxt }}</th>
                <th scope="col">{{ detailData.selectBtn }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="mo_hide" v-if="detailBodyList.length === 0">
                <td colspan="6">표시할 데이터가 없습니다.</td>
              </tr>
              <tr class="pc_hide">
                <td>표시할 데이터가 없습니다.</td>
              </tr>
              <tr :key="i" v-for="(detailData, i) in detailBodyList">
                <td :data-label="detailOpLabel1">{{ detailData.useDates }}</td>
                <td :data-label="detailOpLabel2">{{ detailData.weekDays }}</td>
                <td :data-label="detailOpLabel3">{{ detailData.weekEnd }}</td>
                <td :data-label="detailOpLabel4">{{ detailData.holidays }}</td>
                <td :data-label="detailOpLabel5">{{ detailData.carOwn }}</td>
                <td :data-label="detailOpLabel6">{{ detailData.ectTxt }}</td>
                <td :data-label="detailOpLabel7" class="reponsive-td-btn">
                  <div class="btn-wrap">
                    <button type="button" class="btn cbtn btn_bg01">
                      선택
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button type="button" class="btn cbtn btn_bg04" @click="closePop">
          닫기
        </button>
      </div>
    </template>
  </Popup>
  <!-- //popup : 목록 > 불러오기 > 기간별 할인 내역 팝업 -->

  <!-- popup : 설정 기간별 할인율 등록 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>설정된 기간별 할인율을 등록 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
          <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
          <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 해당 기간 할인율 값 삭제 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당기간에 설정된 할인율 값을 모두 삭제 하시겠습니까?<br/>
					(해당 기간의 모든 할인율은 0으로 초기화 됩니다.)</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
          <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
          <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 필수 입력 항목 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>필수 입력 항목(*)은 모두 입력해야 합니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
          <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 설정된 할인율 값으로 수정 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>설정된 할인율 값으로 수정 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
          <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
          <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
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

  <!-- popup : 등록 완료 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>등록되었습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
          <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 삭제 완료 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>삭제되었습니다.</p>
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
import Popup from '../../components/layout/Popup.vue'
import DateLayout from '../../components/layout/DatePicker.vue'

export default {
  name: 'PdDetail',
  components: {
    Popup,
    DateLayout,
  },
  data() {
    return {
      contTit: '할인율 설정',
      infoTit1: '기간별 할인율 설정',
      infoTit2: '예외 차종 할인율(전차종)',
      //기간별 할인율 설정 data
      tblInfoList01: [
        {
          useDateTit: '사용기간',
          discountRate: '기본 할인율',
          noteTxt: '비고사항',
        },
      ],
      //기간별 할인율 > 기본 할인율 data
      countInfoList01: [
        { countTit: '주중', value: '80', unit: '%' },
        { countTit: '주말', value: '75', unit: '%' },
        { countTit: '연휴', value: '0', unit: '%' },
        { countTit: '자차', value: '20', unit: '%' },
      ],
      //비고 사항 v-model
      note_remarks1: '',
      //예외 차종 할인율 th
      countListHead: [
        {
          carType: '차종',
          fixedCost: '24시간요금(고정)',
          weekDaysCost: '주중 할인요금',
          weekDaysCount: '주중 할인율(%)',
          weekEndCost: '주말 할인요금',
          weekEndCount: '주말 할인율(%)',
          holidaysCost: '연휴 할인요금',
          holidaysCount: '연휴 할인율(%)',
          carOwn: '자차(%)',
        },
      ],
      //예외 차종 할인율 td
      countListBody: [
        {
          carType: 'MAZDA2',
          fixedCost: '97,000',
          weekDaysCost: '19,400',
          weekDaysCount: '0',
          weekEndCost: '24,250',
          weekEndCount: '0',
          holidaysCost: '97,000',
          holidaysCount: '0',
          carOwn: '',
        },
        {
          carType: 'TOYOTA YARiS',
          fixedCost: '110,000',
          weekDaysCost: '22,000',
          weekDaysCount: '0',
          weekEndCost: '27,500',
          weekEndCount: '0',
          holidaysCost: '110,000',
          holidaysCount: '0',
          carOwn: '',
        },
      ],
      
      popDimmed: false,

      //기간별 할인율 목록 팝업
      popTit1: '기간별 할인율 목록',
      discountEvtPop: false,
      //table head data
      DetailHeadList: [
        {
          useDates: '사용기간',
          weekDays: '주중',
          weekEnd: '주말',
          holidays: '연휴',
          carOwn: '자차',
          ectTxt: '비고사항',
          selectBtn: '선택',
        },
      ],
      //data-label
      detailOpLabel1: '사용기간',
      detailOpLabel2: '주중',
      detailOpLabel3: '주말',
      detailOpLabel4: '연휴',
      detailOpLabel5: '자차',
      detailOpLabel6: '비고사항',
      detailOpLabel7: '선택',
      //table body data
      detailBodyList: [
        {
          useDates: '2023-06-07 ~ 2023-07-11',
          weekDays: '80',
          weekEnd: '70',
          holidays: '0',
          carOwn: '20',
          ectTxt: '',
        },
        {
          useDates: '2023-04-27 ~ 2023-05-15',
          weekDays: '10',
          weekEnd: '60',
          holidays: '10',
          carOwn: '50',
          ectTxt: '',
        },
      ],
    }
  },
  methods: {
    disCountEvtOpen() {
      this.popDimmed = true;
      this.discountEvtPop = true
    },
    closePop() {
      this.popDimmed = false;
      this.discountEvtPop = false
      document.body.classList.remove('scrollLock')
    },
  },
}
</script>
