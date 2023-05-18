<template>
  <div class="subBody reservation04">
    <h2>{{ contTit }}</h2>

    <form action="">
      <div class="searchBox">
        <div class="searchArea">
          <table>
            <colgroup>
              <col style="width:68px;">
              <col>
            </colgroup>
            <tbody>
              <tr>
                <td colspan="2">
                  <div class="flex-wrap">
                    <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'출발일자'" />
                    <div class="date-input-wrap">
                      <div class="date_txt_gruop">
                        <DatePicker></DatePicker>
                        <span class="date_tilde">~</span>
                        <DatePicker></DatePicker>
                      </div>                      
                      <div class="btn-wrap mo_hide">
                        <button class="btn btn_bg04 icoBtnS icoPrev"></button>
                        <button class="btn btn_bg04 icoBtnS icoNext"></button>
                      </div>
                    </div>
                    <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'배차장소'" />
                    <Select :options="selectOption3" name="selectOption3" id="selectOption3" :default="'반납장소'" />
                    <div class="frm-wrap chk_del">
                      <div class="frm">
                        <input type="checkbox" id="chkdel" />
                        <label for="chkdel">취소제외</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="flex-wrap">
                    <Select :options="selectOption4" name="selectOption4" id="selectOption4" :default="'예약자'" />
                    <div class="input-wrap searchInput">
                      <input type="text" placeholder="검색어를 입력하세요." />
                    </div>
                  </div>
                </td>
              </tr>              
              <tr>
                <th>입금 구분</th>
                <td>
                  <div class="flex-wrap">
                    <div class="frm-wrap radio">
                      <div class="frm" v-for="(rdoItem, index) in rdoItems1" :key="index">
                        <input type="radio" :id="'rdo1_' + index" name="rdo01" :checked="rdoItem.checked" />
                        <label :for="'rdo1_' + index">{{ rdoItem.label }}</label>
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
            <button type="button" class="btn sbtn btn_bg01" @click="dptTimeOpen">출발 시간대별 현황</button>
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
          <div class="tbl_x_scr">
            <table class="data-table-ty01">
              <thead>
                <tr v-for="(tblData, i) in tblDataHeadList" :key="i">
                  <th>{{ tblData.rsvName }}</th>
                  <th>{{ tblData.userName }}</th>
                  <th>{{ tblData.phone }}</th>
                  <th>{{ tblData.account }}</th>
                  <th>{{ tblData.carType }}</th>
                  <th>{{ tblData.disPlace }}</th>
                  <th>{{ tblData.disTime }}</th>
                  <th>{{ tblData.endPlace }}</th>
                  <th>{{ tblData.startDate }}</th>
                  <th>{{ tblData.endDate }}</th>
                  <th>{{ tblData.dpsComp }}</th>
                  <th>{{ tblData.dpsTotal }}</th>
                  <th>{{ tblData.charge }}</th>
                  <th>{{ tblData.carIns }}</th>
                  <th>{{ tblData.deposit }}</th>
                  <th>{{ tblData.rcpDate }}</th>
                  <th>{{ tblData.rcpName }}</th>
                  <th>{{ tblData.etc }}</th>
                </tr>
              </thead>
              <tfoot>
                <tr v-for="(tblData, i) in tblDataFootList" :key="i">
                  <td colspan="4"></td>
                  <td>{{ tblData.totalCharge }}</td>
                  <td colspan="5"></td>
                  <td>{{ tblData.dpsComp }}</td>
                  <td >{{ tblData.charge }}</td>
                  <td></td>
                  <td>{{ tblData.deposit }}</td>
                  <td colspan="4"></td>
                </tr>
              </tfoot>
              <tbody>
                <tr :key="i" v-for="(tblData, i) in tblDataBodyList">
                  <td>{{ tblData.rsvName }}</td>
                  <td>{{ tblData.userName }}</td>
                  <td>{{ tblData.phone }}</td>
                  <td>{{ tblData.account }}</td>
                  <td>{{ tblData.carType }}</td>
                  <td>{{ tblData.disPlace }}</td>
                  <td>{{ tblData.disTime }}</td>
                  <td>{{ tblData.endPlace }}</td>
                  <td>{{ tblData.startDate }}</td>
                  <td>{{ tblData.endDate }}</td>
                  <td>{{ tblData.dpsComp }}</td>
                  <td>{{ tblData.dpsTotal }}</td>
                  <td>{{ tblData.charge }}</td>
                  <td>{{ tblData.carIns }}</td>
                  <td>{{ tblData.deposit }}</td>
                  <td>{{ tblData.rcpDate }}</td>
                  <td>{{ tblData.rcpName }}</td>
                  <td>{{ tblData.etc }}</td>
                </tr>
                <tr>
                  <td colspan="18" class="none-data">{{ NodataText }}</td>
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
  

<!-----
팝업     
---->


  <div class="dimmed" v-show="popDimmed"></div>

  <!-- popup : 예약입금관리 -->
  <Popup ref="popup" v-show="popDptTime" @close="closePopup()">
      <template #popupHead>
          <h2>{{ popTit1 }}</h2>
      </template>
      <template #popupBody>
        <div class="searchBox">
          <div class="searchArea">
            <table>
              <colgroup>
                <col style="width:15%" />
                <col style="" />
              </colgroup>
              <tbody>
                <tr>
                  <th>출발일자</th>
                  <td>
                    <div class="flex-wrap">
                      <div class="date-input-wrap">
                        <DatePicker></DatePicker>
                      </div>
                      <div class="frm-wrap radio">
                        <div class="frm" v-for="(rdoItem, index) in rdoItems2" :key="index">
                          <input type="radio" :id="'rdo2_' + index" name="rdo02" :checked="rdoItem.checked" />
                          <label :for="'rdo2_' + index">{{ rdoItem.label }}</label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      <div class="tblScroll">
          <table class="data-table-ty02">
              <caption>{{ popTit1 }}</caption>
              <thead :key="i" v-for="(tblItem, i) in tblHeadList">
                  <tr>
                      <th>{{ tblItem.rsvTime }}</th>
                      <th>{{ tblItem.carCount }}</th>
                  </tr>
              </thead>
              <tfoot :key="i" v-for="(tblItem, i) in tblFootList">
                  <tr>
                      <td>{{ tblItem.total }}</td>
                      <td>{{ tblItem.totalCount }}</td>
                  </tr>
              </tfoot>
              <tbody :key="i" v-for="(tblItem, i) in tblBodyList">
                  <tr>
                      <td>{{ tblItem.rsvTime }}</td>
                      <td>{{ tblItem.carCount }}</td>
                  </tr>
              </tbody>
          </table>
      </div>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg04" @click="closePopup()">닫기</button>
      </div>
    </template>
  </Popup>
  <!-- // popup -->

</template>

<script lang="ts">
  import Select from '../../components/layout/Select.vue'
  import Pagination from '../../components/layout/Pagination.vue'
  import Popup from '../../components/layout/Popup.vue'
  import DatePicker from '../../components/layout/DatePicker.vue'

  export default {
    name: 'ResveList',
    components: {
      Select,
      Pagination,
      Popup,
      DatePicker,
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

        checked: false,
        rdoItems1: [
          { id: 1, label: '전체', checked:true, },
          { id: 2, label: '입금', },
          { id: 3, label: '미입금', },
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
        //  rcpName etc
        tblDataHeadList: [
          {
            rsvName: '예약자',
            userName: '사용자',
            phone: '연락처',
            account: '거래처',
            carType: '차종',
            disPlace: '배차장소',
            disTime: '배차시간',
            endPlace: '반납장소',
            startDate: '출발일시',
            endDate: '도착일시',
            dpsComp: '예약확인',
            dpsTotal: '요금합계',
            charge: '현직불',
            carIns: '자차보험',
            deposit: '예약금',
            rcpDate: '접수일',
            rcpName: '접수자',
            etc: '비고',
          },
        ],

        tblDataFootList: [
          {
            totalCharge: '총 합계',
            dpsComp: '242건',
            dpsTotal: '40,522,150',
            charge: '2,339,000',
            deposit: '8,869,560',
          }
        ],

        // table body data
        tblDataBodyList: [
          {
            rsvName: '홍길동',
            userName: '홍길동',
            phone: '010-1234-5678',
            account: '신속렌트카',
            carType: '차종',
            disPlace: '셔틀',
            disTime: '9시',
            endPlace: '본사',
            startDate: '출발일시',
            endDate: '도착일시',
            dpsComp: '확인',
            dpsTotal: '65400원',
            charge: '65400원',
            carIns: '전액무제한면책',
            deposit: '',
            rcpDate: '20230401',
            rcpName: '신속렌트카',
            etc: '',
          },
        ],

        NodataText: '표시할 데이터가 없습니다.',

        //데이터없음 바인딩
        haveData: true,
        noneData: false,

        
        popDimmed: false,

        popDptTime: false,

        popTit1: '출발 시간대별 현황',

        // 팝업 table head
        tblHeadList: [
          {
            rsvTime: '시간',
            carCount: '대수',
          },
        ],

        tblFootList: [
          {
            total: '합계',
            totalCount: '99건',
          },
        ],

        // 팝업 table body
        tblBodyList: [
          {
            rsvTime: '07시',
            carCount: '5',
          },
          {
            rsvTime: '08시',
            carCount: '13',
          },
          {
            rsvTime: '09시',
            carCount: '5',
          },
          {
            rsvTime: '10시',
            carCount: '13',
          },
        ],

        rdoItems2: [
          { id: 1, label: '출고', },
          { id: 2, label: '반납', }
        ],

      };
    },
    methods: {      
      closePopup() {
        this.popDimmed = false;
        this.popDptTime = false;
        document.body.classList.remove("scrollLock"); // 팝업 닫을 시
      },
      dptTimeOpen() {
        this.popDimmed = true;
        this.popDptTime = true;
        document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
      },
    },
  };
</script>

<style scoped></style>
