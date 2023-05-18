<template>
  <div class="subBody reservation01">
    <h2>{{ contTit }}</h2>

    <form action="">
      <div class="searchBox">
        <div class="searchArea">
          <table>
            <colgroup>
              <col style="" />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <div class="flex-wrap">
                    <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'출발일자'" class="mo_hide" />
                    <div class="date-input-wrap">
                      <DatePicker></DatePicker>
                      <div class="btn-wrap">
                        <button class="btn btn_bg04 icoBtnS icoPrev"></button>
                        <button class="btn btn_bg04 icoBtnS icoNext"></button>
                      </div>
                    </div>
                    <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'배차장소'" class="mo_hide" />
                    <Select :options="selectOption3" name="selectOption3" id="selectOption3" :default="'반납장소'" class="mo_hide" />
                    <div class="frm-wrap chk_del">
                      <div class="frm">
                        <input type="checkbox" id="chkdel" />
                        <label for="chkdel">예약취소 제외</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="mo_hide">
                <td>
                  <div class="flex-wrap">
                    <Select :options="selectOption4" name="selectOption4" id="selectOption4" :default="'예약자'" />
                    <div class="input-wrap searchInput">
                      <input type="text" placeholder="검색어를 입력하세요." />
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
          <div class="total-wrap ">
            <span>검색결과: 총 <em class="total">5</em>건</span>
          </div>
          <div class="flex-wrap">
            <Select :options="listSortingCount" name="listShowCount" id="listShowCount" class="sortingSelect" :default="'20'" />
            <div class="btn-wrap mo_hide">
              <button class="btn tbtn btn_bg04 icoBtn icoExcel">엑셀다운로드</button>
            </div>
          </div>
        </div>

        <div class="data-table-wrap tblScroll">
          <table class="data-table-ty01">
            <thead>
              <tr v-for="(tblData, i) in tblDataHeadList" :key="i">
                <th class="mo_hide">{{ tblData.sortNum }}<button class="btn-desc"></button></th>
                <th class="mo_hide">{{ tblData.company }}<button class="btn-desc"></button></th>
                <th>{{ tblData.carType }}<button class="btn-desc up"></button></th>
                <th class="mo_hide">{{ tblData.rsvNum }}<button class="btn-desc"></button></th>
                <th>{{ tblData.rsvName }}<button class="btn-desc"></button></th>
                <th class="mo_hide">{{ tblData.rsvDate }}<button class="btn-desc"></button></th>
                <th>{{ tblData.startDate }}<button class="btn-desc"></button></th>
                <th class="mo_hide">{{ tblData.endDate }}<button class="btn-desc"></button></th>
                <th class="mo_hide">{{ tblData.startPlace }}<button class="btn-desc"></button></th>
                <th class="mo_hide">{{ tblData.endPlace }}<button class="btn-desc"></button></th>
                <th class="mo_hide">{{ tblData.totalCost }}<button class="btn-desc"></button></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colspan="8" class="mo_hide"></td>
                <td>총 합계</td>
                <td>총 5건</td>
                <td>276,000</td>
              </tr>
            </tfoot>
            <tbody>
              <tr :key="i" v-for="(tblData, i) in tblDataBodyList" :class="{ cancel_line: tblData.isCancel, ottNumNo_line: tblData.isNumberNo, rsvStart_line: tblData.isRsvstart }">
                <td class="mo_hide">{{ i + 1 }}</td>
                <td class="mo_hide">{{ tblData.company }}</td>
                <td>{{ tblData.carType }}</td>
                <td class="mo_hide">{{ tblData.rsvNum }}</td>
                <td>{{ tblData.rsvName }}</td>
                <td class="mo_hide">{{ tblData.rsvDate }}</td>
                <td>{{ tblData.startDate }}</td>
                <td class="mo_hide">{{ tblData.endDate }}</td>
                <td class="mo_hide">{{ tblData.startPlace }}</td>
                <td class="mo_hide">{{ tblData.endPlace }}</td>
                <td class="mo_hide">{{ tblData.totalCost }}</td>
              </tr>
              <tr>
                <td colspan="11" class="none-data">{{ NodataText }}</td>
              </tr>
            </tbody>
          </table>
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

  <Loading /><!-- 로딩 -->

</template>

<script lang="ts">
  import Select from '../../components/layout/Select.vue'
  import Pagination from '../../components/layout/Pagination.vue'
  import Popup from '../../components/layout/Popup.vue'
  import DatePicker from '../../components/layout/DatePicker.vue'
  import Loading from '../../components/common/Loading.vue'

  export default {
    name: 'ApplyList',
    components: {
      Select,
      Pagination,
      Popup,
      DatePicker,
      Loading,
    },
    data() {
      return {
        contTit: '예약접수',

        // 접수일자
        selectOption1: [
          { label: '접수일자', value: 'opt1' },
          { label: '출발일자', value: 'opt2' },
          { label: '반납일자', value: 'opt3' },
        ],

        // 배차장소
        selectOption2: [
          { label: '배차장소', value: 'default' },
          { label: '본사', value: 'opt1' },
          { label: '셔틀', value: 'opt2' },
          { label: '공항', value: 'opt2' },
        ],

        //반납장소
        selectOption3: [
          { label: '반납장소', value: 'default' },
          { label: '본사', value: 'opt1' },
          { label: '셔틀', value: 'opt2' },
          { label: '공항', value: 'opt2' },
        ],

        //예약자
        selectOption4: [
          { label: '예약자', value: 'default' },
          { label: '예약번호', value: 'opt1' },
          { label: '에이전트 예약번호', value: 'opt2' },
          { label: '연락처', value: 'opt2' },
        ],

        // sorting 갯수  // 이름통일 ; listSortingCount 등으로 전체 통일
        listSortingCount: [
          { label: '20', value: 'default' },
          { label: '50', value: 'opt1' },
          { label: '100', value: 'opt2' },
          { label: '200', value: 'opt3' },
        ],

        // 페이징
        page: {
          totalCount: 1,
          totalPages: 3,
          page: 0,
          size: 5,
        },

        isCancel: false,
        isNumberNo: false,
        isRsvstart: false,

        // table head data
        tblDataHeadList: [
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
        ],

        // table body data
        tblDataBodyList: [
          {
            sortNum: '99',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
            isCancel: true,
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
            isNumberNo: true,
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
            isRsvstart: true,
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
          },
          {
            sortNum: 'No',
            company: '거래처',
            carType: '차종',
            rsvNum: '예약번호',
            rsvName: '예악자',
            rsvDate: '접수일자',
            startDate: '예약시작일시',
            endDate: '사용종료일시',
            phone: '연락번호',
            startPlace: '배차장소',
            endPlace: '반납장소',
            totalCost: '대여료 계',
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
