<template>
    <div class="subBody reservation03">
      <h2>{{ contTit }}</h2>
  
      <form action="">
        <div class="searchBox">
          <div class="searchArea">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div class="flex-wrap">                        
                        <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'출고일자'" />
                        <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'선택'" />
                        <div class="date-input-wrap">
                            <DateTimePicker></DateTimePicker>
                            <span class="date_tilde">~</span>
                            <DateTimePicker></DateTimePicker>
                        </div>
                        <Select :options="selectOption3" name="selectOption3" id="selectOption3" :default="'거래처 전체'" />
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
                        <button class="btn tbtn btn_bg04 icoBtn icoExcel">엑셀다운로드</button>
                    </div>
                </div>
            </div>
            <div class="data-table-wrap tblScroll verX">
                <div class="tbl_x_scr">
                    <table class="data-table-ty01">
                        <thead v-for="(tblData, i) in tblDataHeadList" :key="i">
                            <tr>
                                <th>{{ tblData.date }}</th>
                                <th>{{ tblData.numCase }}</th>
                                <th>{{ tblData.rentalFee }}</th>
                                <th>{{ tblData.premium }}</th>
                                <th>{{ tblData.optionFee }}</th>
                                <th>{{ tblData.otherCrg }}</th>
                                <th>{{ tblData.crgTotal }}</th>
                                <th>{{ tblData.accountRcv }}</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr :key="i" v-for="(tblData, i) in tblDataFootList" :class="{ accountTotal_line: tblData.isAccTotal }">
                                <td>{{ tblData.total }}</td>
                                <td>{{ tblData.numCase }}</td>
                                <td>{{ tblData.rentalFee }}</td>
                                <td>{{ tblData.premium }}</td>
                                <td>{{ tblData.optionFee }}</td>
                                <td>{{ tblData.otherCrg }}</td>
                                <td>{{ tblData.crgTotal }}</td>
                                <td>{{ tblData.accountRcv }}</td>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr :key="i" v-for="(tblData, i) in tblDataBodyList">
                                <td>{{ tblData.date }}</td>
                                <td>{{ tblData.numCase }}</td>
                                <td>{{ tblData.rentalFee }}</td>
                                <td>{{ tblData.premium }}</td>
                                <td>{{ tblData.optionFee }}</td>
                                <td>{{ tblData.otherCrg }}</td>
                                <td>{{ tblData.crgTotal }}</td>
                                <td>{{ tblData.accountRcv }}</td>
                            </tr>
                            <tr>
                                <td colspan="8" class="none-data">{{ NodataText }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- // table-wrap -->

            <div class="tbl-bot-wrap">
            <!-- paging -->
            <Pagination :currentPage="this.page.page" :totalPages="this.page.totalPages" :pageChange="this.onPageChange" />
            <!-- //paging -->
            <div class="btn-wrap">
                <button class="btn cbtn btn_bg01">예약 등록</button>
            </div>
            </div>
        </div>
        <!-- // data-wrap -->
      </form>
    </div>
    <!-- //subBody -->
  </template>
  
  <script lang="ts">
    import Select from '../../components/layout/Select.vue'
    import Pagination from '../../components/layout/Pagination.vue'
    import Popup from '../../components/layout/Popup.vue'
    import DateTimePicker from '../../components/layout/DateTimePicker.vue'
  
    export default {
      name: 'SaleAnalysis',
      components: {
        Select,
        Pagination,
        Popup,
        DateTimePicker,
      },
      data() {
        return {
            contTit: '매출분석',

            // 출고일자
            selectOption1: [
                { label: '출고일자', value: 'default' },
                { label: '반납일자', value: 'opt1' },
            ],

            // 선택
            selectOption2: [
                { label: '선택', value: 'default' },
                { label: '전일', value: 'opt1' },
                { label: '금일', value: 'opt2' },
                { label: '익일', value: 'opt3' },
                { label: '전주', value: 'opt4' },
                { label: '금주', value: 'opt5' },
                { label: '차주', value: 'opt6' },
                { label: '전월', value: 'opt7' },
                { label: '금월', value: 'opt8' },
                { label: '익월', value: 'opt9' },
                { label: '1분기', value: 'opt10' },
                { label: '2분기', value: 'opt11' },
                { label: '3분기', value: 'opt12' },
                { label: '4분기', value: 'opt13' },
            ],

            // 출고일자
            selectOption3: [
                { label: '리스트01', value: 'default' },
                { label: '리스트02', value: 'opt1' },
            ],

            // 페이징
            page: {
                totalCount: 1,
                totalPages: 3,
                page: 0,
                size: 5,
            },
            // date num rentalFee premium optionFee othCrg accountRcv
            // table head data
            tblDataHeadList: [
                {
                    date: '날짜',
                    numCase: '건수',
                    rentalFee: '대여료',
                    premium: '보험료',
                    optionFee: '옵션요금',
                    otherCrg: '기타요금',
                    crgTotal: '요금합계',
                    accountRcv: '미수금',
                },                
            ],
            
            isAccTotal: false,

            // table footer data
            tblDataFootList: [
                {
                    total: '합계',
                    numCase: '498',
                    rentalFee: '46,544,844',
                    premium: '30,794,465',
                    optionFee: '0',
                    otherCrg: '369,200',
                    crgTotal: '81,580,609',
                    accountRcv: '21,814,570',
                },
                {
                    isAccTotal: true,
                    total: '거래처 1 합계',
                    numCase: '498',
                    rentalFee: '46,544,844',
                    premium: '30,794,465',
                    optionFee: '0',
                    otherCrg: '369,200',
                    crgTotal: '81,580,609',
                    accountRcv: '21,814,570',
                },
                {
                    isAccTotal: true,
                    total: '거래처 2 합계',
                    numCase: '498',
                    rentalFee: '46,544,844',
                    premium: '30,794,465',
                    optionFee: '0',
                    otherCrg: '369,200',
                    crgTotal: '81,580,609',
                    accountRcv: '21,814,570',
                },
            ],

            // table body data
            tblDataBodyList: [
                {
                    date: '2023-04-08',
                    numCase: '258',
                    rentalFee: '19,762,080',
                    premium: '11,279,115',
                    optionFee: '0',
                    otherCrg: '283,200',
                    crgTotal: '32,021,595',
                    accountRcv: '15,274,670',
                },
            ],

            NodataText: '표시할 데이터가 없습니다.',

            //데이터없음 바인딩
            haveData: true,
            noneData: false,

        };
      },
      methods: {},
    };
  </script>
  
  <style scoped></style>
  