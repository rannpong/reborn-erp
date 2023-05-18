<template>
  <div class="subBody invoice01">
    <h2>{{ contTit }}</h2>

    <form action="">
      <div class="searchBox">
        <div class="searchArea">
          <table>
            <colgroup>
              <col width="68px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td colspan="2">
                  <div class="flex-wrap first">
                    <Select
                      :options="selectOption1"
                      name="selectOption1"
                      id="selectOption1"
                      :default="'출발일자'"
                    />
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
                    <div class="date-input-wrap">
                      <Select
                        :options="selectOption2"
                        name="selectOption2"
                        id="selectOption2"
                        :default="'전체'"
                      />
                      <div class="input-wrap searchinput">
                        <input type="text" placeholder="검색어를 입력하세요." />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>거래처</th>
                <td>
                  <div class="flex-wrap">
                    <Select
                      :options="selectOption3"
                      name="selectOption3"
                      id="selectOption3"
                      :default="'거래처 선택'"
                      class="select-height80"
                    />
                    <div class="frm-wrap chk_del">
                      <div class="frm">
                        <input type="checkbox" id="chkdel" />
                        <label for="chkdel">취소수수료 제외</label>
                      </div>
                      <div class="frm">
                        <input type="checkbox" id="chkde2" />
                        <label for="chkde2">기 발행 제외</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btn-search-wrap">
          <div class="btn-wrap">
            <button class="btn sbtn btn_bg02">검색</button>
          </div>
        </div>
      </div>

      <div class="data-wrap">
        <div class="tbl-tit-wrap">
          <div class="flex-wrap">
            <div class="btn-wrap">
              <button class="btn tbtn btn_bg04 icoBtn icoExcel">
                엑셀다운로드
              </button>
            </div>
          </div>
        </div>

        <div class="data-table-wrap tblScroll">
          <table class="data-table-ty01">
            <thead>
              <tr v-for="(tblData, i) in tblDataHeadList" :key="i">
                <th>
                  <div class="frm-wrap check">
                    <div class="frm">
                      <input
                        type="checkbox"
                        id="chkAll"
                        v-model="isAllChecked"
                        @click="allChecked"
                      />
                      <label for="chkAll"></label>
                    </div>
                  </div>
                </th>
                <th>{{ tblData.rsvName }}</th>
                <th>{{ tblData.carType }}</th>
                <th>{{ tblData.startDate }}</th>
                <th>{{ tblData.endDate }}</th>
                <th>{{ tblData.useTime }}</th>
                <th>{{ tblData.useCost }}</th>
                <th>{{ tblData.insuranceFee }}</th>
                <th>{{ tblData.opCost }}</th>
                <th>{{ tblData.ectCost }}</th>
                <th>{{ tblData.totalCost }}</th>
                <th>{{ tblData.directPay }}</th>
                <th>{{ tblData.billCost }}</th>
                <th>{{ tblData.cancelVat }}</th>
                <th>{{ tblData.depositCost }}</th>
                <th>{{ tblData.issueDate }}</th>
                <th>{{ tblData.noteTxt }}</th>
                <th>{{ tblData.agentResveNum }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tblDataBodyList.length === 0">
                <td colspan="12">표시할 데이터가 없습니다.</td>
              </tr>
              <tr :key="i" v-for="(tblData, i) in tblDataBodyList">
                <td>
                  <div class="frm-wrap check">
                    <div class="frm">
                      <input
                        type="checkbox"
                        :id="tblData.id"
                        :value="tblData.id"
                        v-model="isSelectChk"
                      />
                      <label :for="tblData.id"></label>
                    </div>
                  </div>
                </td>
                <td>{{ tblData.rsvName }}</td>
                <td>{{ tblData.carType }}</td>
                <td>{{ tblData.startDate }}</td>
                <td>{{ tblData.endDate }}</td>
                <td>{{ tblData.useTime }}</td>
                <td>{{ tblData.useCost }}</td>
                <td>{{ tblData.insuranceFee }}</td>
                <td>{{ tblData.opCost }}</td>
                <td>{{ tblData.ectCost }}</td>
                <td>{{ tblData.totalCost }}</td>
                <td>{{ tblData.directPay }}</td>
                <td>{{ tblData.billCost }}</td>
                <td>{{ tblData.cancelVat }}</td>
                <td>{{ tblData.depositCost }}</td>
                <td>{{ tblData.issueDate }}</td>
                <td>{{ tblData.noteTxt }}</td>
                <td>{{ tblData.agentResveNum }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="tbl-bot-wrap">
          <div class="btn-wrap">
            <button type="button" class="btn cbtn btn_bg01" @click="openPop()">
              선택항목 청구서 발행
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>

  
  <div class="dimmed" v-show="popDimmed"></div>
  <Popup ref="popup" class="medium" v-show="invoicePop1" @close="closePop">
    <template #popupHead>
      <h2>{{ popTit1 }}</h2>
    </template>
    <template #popupBody>
      <table class="data-table-ty04">
        <caption>청구서 발행</caption>
        <colgroup>
          <col style="width: 30%;" />
          <col style="" />
        </colgroup>
        <tbody>
          <tr>
            <th>청구일시</th>
            <td>
              <div class="date-input-wrap">
                <DateTimeLayout placeholder="청구일시"></DateTimeLayout>
              </div>
            </td>
          </tr>
          <tr>
            <th>총 정산 건수</th>
            <td>
              <input type="text" value="3건" disabled />
            </td>
          </tr>
          <tr>
            <th>총 청구 금액</th>
            <td>
              <input type="text" value="522,150 원" disabled />
            </td>
          </tr>
          <tr>
            <th>총 취소 수수료</th>
            <td>
              <input type="text" value="0 원" disabled />
            </td>
          </tr>
          <tr>
            <th>총 합계</th>
            <td>
              <input type="text" value="522,150 원" disabled />
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button type="button" class="btn cbtn btn_bg04" @click="closePop">
          취소
        </button>
        <button type="button" class="btn cbtn btn_bg01" @click="invWinPop()">
          발행
        </button>
      </div>
    </template>
  </Popup>

  <!-- 청구서 발행 > 윈도우 팝업 -->
  <WinPop ref="InvoicePrtPop"></WinPop>
</template>

<script lang="ts">
import Select from '../../components/layout/Select.vue'
import Popup from '../../components/layout/Popup.vue'
import DateLayout from '../../components/layout/DatePicker.vue'
import DateTimeLayout from '../../components/layout/DateTimePicker.vue'
import InvoicePrtPop from '../../components/layout/InvoicePrint.vue'

export default {
  name: 'Invoice',
  components: {
    Select,
    Popup,
    DateLayout,
    DateTimeLayout,
    InvoicePrtPop: InvoicePrtPop,
  },
  data() {
    return {
      contTit: '청구서',
      selectOption1: [
        { label: '출발일자', value: 'op1' },
        { label: '도착일자', value: 'op2' },
      ],
      selectOption2: [
        { label: '전체', value: 'opt1' },
        { label: '출발일시', value: 'opt2' },
        { label: '차종', value: 'opt3' },
      ],
      selectOption3: [
        { label: '거래처 선택', value: 'default' },
        { label: '거래처 목록1', value: 'opt1' },
        { label: '거래처 목록2', value: 'opt2' },
      ],
      // table head data
      tblDataHeadList: [
        {
          sortCheckbox: '',
          rsvName: '예악자',
          carType: '차종',
          startDate: '출발일시',
          endDate: '도착일시',
          useTime: '사용시간',
          useCost: '대여료 ',
          insuranceFee: '보험료',
          opCost: '옵션요금',
          ectCost: '기타요금',
          totalCost: '합계',
          directPay: '현직불',
          billCost: '청구금액',
          cancelVat: '취소 수수료',
          depositCost: '입금액',
          issueDate: '발행일',
          noteTxt: '비고',
          agentResveNum: 'Agent 예약번호',
        },
      ],
      // table body data
      tblDataBodyList: [
        {
          id: 'id1',
          rsvName: '홍길동',
          carType: 'MAZDA2',
          startDate: '2023-04-12 16:55',
          endDate: '2023-04-14 16:30',
          useTime: '52',
          useCost: '69,200',
          insuranceFee: '57,600',
          opCost: '0',
          ectCost: '0',
          totalCost: '126,800',
          directPay: '0',
          billCost: '126,800',
          cancelVat: '0',
          depositCost: '126,800',
          issueDate: '',
          noteTxt: '전액무제한',
          agentResveNum: '2303280155354',
        },
        {
          id: 'id2',
          rsvName: '아무개',
          carType: 'MAZDA2',
          startDate: '2023-04-15 11:55',
          endDate: '2023-04-17 16:30',
          useTime: '47',
          useCost: '110,000',
          insuranceFee: '81,600',
          opCost: '0',
          ectCost: '0',
          totalCost: '191,600',
          directPay: '0',
          billCost: '191,600',
          cancelVat: '0',
          depositCost: '191,600',
          issueDate: '',
          noteTxt: '전액면책',
          agentResveNum: '2303104153058',
        },
        {
          id: 'id3',
          rsvName: '김리본',
          carType: 'MAZDA2',
          startDate: '2023-04-17 11:55',
          endDate: '2023-04-20 16:30',
          useTime: '76',
          useCost: '240,300',
          insuranceFee: '147,200',
          opCost: '0',
          ectCost: '0',
          totalCost: '387,500',
          directPay: '0',
          billCost: '387,500',
          cancelVat: '0',
          depositCost: '387,500',
          issueDate: '',
          noteTxt: '전액면책/결제완료',
          agentResveNum: '2303166153966',
        },
      ],
      //체크박스
      isAllChecked: false,
      isSelectChk: [],
      //청구서 발행 팝업
      popTit1: '청구서 발행',
      
      popDimmed: false,

      invoicePop1: false,
    }
  },
  methods: {
    //선택항목 청구서 발행 > 청구서 발행 팝업
    openPop() {
      this.popDimmed = true;
      this.invoicePop1 = true
    },
    closePop() {
      this.popDimmed = false;
      this.invoicePop1 = false
      document.body.classList.remove('scrollLock')
    },
    //청구서 발행 > 청구서 새창 열기
    invWinPop() {
      let route = this.$router.resolve({
        path: '/invoicePrint',
      })
      window.open(route.href, '_blank', 'width=1200, height=700')
    },
    //체크박스
    allChecked() {
      this.isSelectChk = []

      if (!this.isAllChecked) {
        this.tblDataBodyList.forEach((tblData) => {
          this.isSelectChk.push(tblData.id)
        })
      }

      this.isAllChecked = !this.isAllChecked
    },
  },
  watch: {
    isSelectChk(value) {
      if (value.length === 0) {
        this.isAllChecked = false
      } else if (value.length === this.tblDataBodyList.length) {
        this.isAllChecked = true
      } else {
        this.isAllChecked = false
      }
    },
  },
  computed: {},
}
</script>

<style scoped></style>
