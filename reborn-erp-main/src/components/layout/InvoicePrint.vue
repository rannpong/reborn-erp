<template>
  <div id="printArea" class="InvoicePop">
    <!-- 청구서 발행 프린트 영역 -->
    <div class="invoice-head">
      <div class="invoice-logo">
        <img src="../../assets/img/logo.png" alt="로고" />
      </div>
      <p class="invoice-adress">
        〒542-0085 大阪府大阪市中央区心斎橋筋2丁目5-15 (81-6-6213-1111)
      </p>
    </div>
    <div class="invoice-table-wrap">
      <div class="invoice-table-first">
        <table class="data-table-ty04">
          <caption>청구서 발신, 수신, 정산기간, 청구금액</caption>
          <colgroup>
            <col style="width: 30%;" />
            <col style="" />
          </colgroup>
          <tbody>
            <tr>
              <th colspan="2" class="invoice-txt">INVOICE</th>
            </tr>
            <tr>
              <th>발 신</th>
              <td>{{ fromCompany }}</td>
            </tr>
            <tr>
              <th>수 신</th>
              <td>{{ toCompany }}</td>
            </tr>
            <tr>
              <th>정산 기간</th>
              <td>{{ invoiceDates }}</td>
            </tr>
            <tr>
              <th>청구 금액</th>
              <td>{{ billCost }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="invoice-table-last">
        <table class="data-table-ty02">
          <caption>청구서 상세 내역</caption>
          <thead>
            <tr>
              <th>No</th>
              <th>예악자명</th>
              <th>차종</th>
              <th>사용일시</th>
              <th>시간</th>
              <th>대여료</th>
              <th>보험료</th>
              <th>옵션요금</th>
              <th>기타요금</th>
              <th>취소 수수료</th>
              <th>청구금액</th>
              <th>현직불</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="i" v-for="(tblData, i) in tblDataBodyList">
              <td>{{ tblData.sortNum }}</td>
              <td>{{ tblData.rsvName }}</td>
              <td>{{ tblData.carType }}</td>
              <td>{{ tblData.useDates }}</td>
              <td>{{ tblData.useTime }}</td>
              <td>{{ tblData.useCost }}</td>
              <td>{{ tblData.insuranceFee }}</td>
              <td>{{ tblData.opCost }}</td>
              <td>{{ tblData.ectCost }}</td>
              <td>{{ tblData.cancelVat }}</td>
              <td>{{ tblData.billCost }}</td>
              <td>{{ tblData.directPay }}</td>
            </tr>
            <tr :key="i" v-for="(tblData, i) in totalList">
              <td colspan="5">합계</td>
              <td>{{ tblData.useCost }}</td>
              <td>{{ tblData.insuranceFee }}</td>
              <td>{{ tblData.opCost }}</td>
              <td>{{ tblData.ectCost }}</td>
              <td>{{ tblData.cancelVat }}</td>
              <td>{{ tblData.billCost }}</td>
              <td>{{ tblData.directPay }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btn-wrap">
        <button type="button" class="btn cbtn btn_bg01" @click="print()">
          인쇄하기
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//설치 명령어 npm install print-js --save
import printJS from 'print-js'

export default {
  name: 'InvoicePrtPop',
  component: {
    printJS,
  },
  props: {},
  watch: {},
  mounted() {},
  methods: {
    //프린트
    print() {
      printJS({
        printable: 'printArea',
        type: 'html',
        css: 'src/assets/css/print.css',
        scanStyles: false,
      })
    },
  },
  data() {
    return {
      fromCompany: '신속렌트카',
      toCompany: '오사카투어',
      invoiceDates: '2023-04-12 ~ 2023-04-12',
      billCost: '552,150',
      // table body data
      tblDataBodyList: [
        {
          sortNum: '1',
          rsvName: '아무개',
          carType: 'MAZDA2',
          useDates: '2023-04-12 16:55',
          useTime: '53',
          useCost: '147,250',
          insuranceFee: '86,400',
          opCost: '0',
          ectCost: '0',
          cancelVat: '0',
          billCost: '233,650',
          directPay: '0',
        },
        {
          sortNum: '2',
          rsvName: '홍길동',
          carType: 'MAZDA2',
          useDates: '2023-04-12 16:55',
          useTime: '47',
          useCost: '100,000',
          insuranceFee: '74,300',
          opCost: '0',
          ectCost: '0',
          cancelVat: '0',
          billCost: '174,300',
          directPay: '0',
        },
        {
          sortNum: '3',
          rsvName: '',
          carType: '',
          useDates: '',
          useTime: '',
          useCost: '',
          insuranceFee: '',
          opCost: '',
          ectCost: '',
          cancelVat: '',
          billCost: '',
          directPay: '',
        },
        {
          sortNum: '4',
          rsvName: '',
          carType: '',
          useDates: '',
          useTime: '',
          useCost: '',
          insuranceFee: '',
          opCost: '',
          ectCost: '',
          cancelVat: '',
          billCost: '',
          directPay: '',
        },
      ],
      //합계 금액
      totalList: [
        {
          useCost: '1,335,000',
          insuranceFee: '333,750',
          opCost: '218,400',
          ectCost: '0',
          cancelVat: '0',
          billCost: '552,150',
          directPay: '0',
        },
      ],
    }
  },
}
</script>
<style scoped>
.InvoicePop {
  padding: 30px;
  min-height: 100%;
  /* height: 100vh; */
}

.invoice-head {
  margin: 30px 0;
  text-align: center;
}

.invoice-logo {
  height: 36px;
}

.invoice-logo img {
  min-height: 100%;
}

.invoice-head p {
  color: #444;
  font-size: 14px;
  margin-top: 15px;
}

.invoice-table-first .invoice-txt {
  border-right: 0;
  font-size: 18px;
  height: 46px;
  text-align: center;
}

.invoice-table-first td {
  color: #444;
  font-size: 14px;
}

.invoice-table-last {
  margin-top: 25px;
}

.invoice-table-last td {
  text-align: center;
}
.invoice-table-first table,
.invoice-table-last table {
  border-right: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
}

.InvoicePop .btn-wrap {
  margin-top: 24px;
}
</style>
