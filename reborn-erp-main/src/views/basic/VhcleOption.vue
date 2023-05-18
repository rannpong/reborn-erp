<template>
  <div class="subBody basicdata02">
    <h2>{{ contTit }}</h2>

    <div class="data-wrap">
      <div class="data-table-wrap tblScroll">
        <table class="data-table-ty01">
          <thead>
            <tr v-for="(tblData, i) in tblDataHeadList" :key="i">
              <th class="mo_hide">{{ tblData.optCode }}</th>
              <th>{{ tblData.optType }}</th>
              <th>{{ tblData.optPrice }}</th>
              <th class="mo_hide">{{ tblData.optBill }}</th>
              <th class="mo_hide">{{ tblData.etc }}</th>
              <th>{{ tblData.optUse }}</th>
              <th class="mo_hide">{{ tblData.optDate }}</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="i" v-for="(tblData, i) in tblDataBodyList">
              <td class="mo_hide">{{ tblData.optCode }}</td>
              <td @click="openPopExp1">{{ tblData.optType }}</td>
              <td>{{ tblData.optPrice }}</td>
              <td class="mo_hide">{{ tblData.optBill }}</td>
              <td class="mo_hide">{{ tblData.etc }}</td>
              <td :class="{ notUse: tblData.isNotuse }">{{ tblData.optUse }}</td>
              <td class="mo_hide">{{ tblData.optDate }}</td>
            </tr>
            <tr>
              <td colspan="7" class="none-data">{{ NodataText }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="tbl-bot-wrap">
        <!-- paging -->
        <Pagination :currentPage="this.page.page" :totalPages="this.page.totalPages" :pageChange="this.onPageChange" />
        <!-- //paging -->
        <div class="btn-wrap">
          <button class="btn cbtn btn_bg04" @click="openPopExp()">노출순서 관리</button>
          <button class="btn cbtn btn_bg01" @click="openPopOpt()">옵션등록</button>
        </div>
      </div>
    </div>
    <!-- // data-wrap -->
  </div>
  <!-- //subBody -->

  <!-----
팝업     
---->

  <div class="dimmed" v-show="popDimmed"></div>

  <!-- popup : 옵션 조회 및 수정 -->
  <!-- <Popup ref="popup" class="medium" @close="closePopup()">
    <template #popupHead>
      <h2>{{ popTit1 }}</h2>
    </template>
    <template #popupBody>
      <table class="data-table-ty04">
        <caption>
          {{ popTit1 }}
        </caption>
        <colgroup>
          <col style="width: 30%" />
          <col style="" />
        </colgroup>
        <tbody :key="i" v-for="(tblItem, i) in tblOptList">
          <tr>
            <th>{{ tblItem.optCode }}</th>
            <td>
              <input type="text" v-model="td_optCode" readonly />
            </td>
          </tr>
          <tr>
            <th>{{ tblItem.optName }}<span class="ico_essential"></span></th>
            <td>
              <input type="text" v-model="td_optName" />
            </td>
          </tr>
          <tr>
            <th>{{ tblItem.optType }}<span class="ico_essential"></span></th>
            <td>
              <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'카시트'" />
            </td>
          </tr>
          <tr>
            <th>{{ tblItem.optPrice }}<span class="ico_essential"></span></th>
            <td>
              <input type="text" v-model="td_optPrice" />
            </td>
          </tr>
          <tr>
            <th>{{ tblItem.optBill }}<span class="ico_essential"></span></th>
            <td>
              <div class="frm-wrap radio">
                <div class="frm" v-for="(rdoItem, index) in rdoItems1" :key="index">
                  <input type="radio" :id="'rdo1_' + index" name="rdo01" :checked="rdoItem.checked" />
                  <label :for="'rdo1_' + index">{{ rdoItem.label }}</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>{{ tblItem.etc }}</th>
            <td>
              <input type="text" v-model="td_etc" />
            </td>
          </tr>
          <tr>
            <th>{{ tblItem.optUse }}<span class="ico_essential"></span></th>
            <td>
              <div class="frm-wrap radio">
                <div class="frm" v-for="(rdoItem, index) in rdoItems2" :key="index">
                  <input type="radio" :id="'rdo2_' + index" name="rdo02" :checked="rdoItem.checked" />
                  <label :for="'rdo2_' + index">{{ rdoItem.label }}</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>{{ tblItem.optDate }}</th>
            <td>
              <input type="text" v-model="td_optDate" readonly />
            </td>
          </tr>
        </tbody>
      </table>
      <span class="guide_desc">필수 입력 항목(*)은 모두 입력해야 합니다.</span>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
        <button class="btn cbtn btn_bg01">수정</button>
      </div>
    </template>
  </Popup> -->
  <!-- // popup -->

  <!-- popup : 차종 수정 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당 옵션을 수정 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 차종 수정 완료 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>수정하였습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 옵션 등록 -->
  <Popup ref="popup" class="medium" v-show="PopOptReg" @close="closePopup()">
    <template #popupHead>
      <h2>{{ popTit2 }}</h2>
    </template>
    <template #popupBody>
      <table class="data-table-ty04">
        <caption>
          {{
            popTit2
          }}
        </caption>
        <colgroup>
          <col style="width: 30%" />
          <col style="" />
        </colgroup>
        
        <tbody :key="i" v-for="(tblCarClosed, i) in tblOptList">
          <tr>
            <th>{{ tblCarClosed.optName }}<span class="ico_essential"></span></th>
            <td>
              <input type="text" v-model="td_optName" />
            </td>
          </tr>
          <tr>
            <th>{{ tblCarClosed.optType }}<span class="ico_essential"></span></th>
            <td>
              <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'네비'" />
            </td>
          </tr>
          <tr>
            <th>{{ tblCarClosed.optPrice }}<span class="ico_essential"></span></th>
            <td>
              <input type="text" v-model="td_optPrice" />
            </td>
          </tr>
          <tr>
            <th>{{ tblCarClosed.optBill }}<span class="ico_essential"></span></th>
            <td>
              <div class="frm-wrap radio">
                <div class="frm" v-for="(rdoItem, index) in rdoItems1" :key="index">
                  <input type="radio" :id="'rdo3_' + index" name="rdo03" :checked="rdoItem.checked" />
                  <label :for="'rdo3_' + index">{{ rdoItem.label }}</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>{{ tblCarClosed.etc }}</th>
            <td>
              <input type="text" v-model="td_etc" />
            </td>
          </tr>
          <tr>
            <th>{{ tblCarClosed.optUse }}<span class="ico_essential"></span></th>
            <td>
              <div class="frm-wrap radio">
                <div class="frm" v-for="(rdoItem, index) in rdoItems2" :key="index">
                  <input type="radio" :id="'rdo4_' + index" name="rdo04" :checked="rdoItem.checked" />
                  <label :for="'rdo4_' + index">{{ rdoItem.label }}</label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <span class="guide_desc">필수 입력 항목(*)은 모두 입력해야 합니다.</span>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
        <button class="btn cbtn btn_bg01">등록</button>
      </div>
    </template>
  </Popup>
  <!-- // popup -->

  <!-- popup : 옵션 등록 확인 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당 옵션을 등록 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
                <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 차종 등록 완료 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>등록하였습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 노출순서 관리 -->
  <Popup ref="popup" class="medium" v-show="popExposure" @close="closePopup()">
    <template #popupHead>
      <h2>{{ popTit3 }}</h2>
    </template>
    <template #popupBody>
      <p>드래그하여 노출순서를 변경하실 수 있습니다.</p>
      <div class="tblScroll">
        <div class="drag_list_wrap">
          <h3 class="drag_tit">{{ itemTit }}</h3>
          <DragList :list="dragList01" name="dragList01"></DragList>
        </div>
      </div>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg04" @click="closePopup()">닫기</button>
        <button class="btn cbtn btn_bg01">노출순서 저장</button>
      </div>
    </template>
  </Popup>
  <!-- // popup -->

  <!-- popup : 노출순서 변경 확인 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>노출순서를 변경 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
                <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 노출순서 변경 완료 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>변경되었습니다.</p>
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
  import Popup from '../../components/layout/Popup.vue';
  import Select from '../../components/layout/Select.vue';
  import Pagination from '../../components/layout/Pagination.vue';
  import DragList from '../../components/layout/DragList.vue';

  export default {
    name: 'VhcleOption',
    components: {
      Popup,
      Select,
      Pagination,
      DragList,
    },
    data() {
      return {
        contTit: '옵션관리',

        isNotuse: false,

        tblDataHeadList: [
          {
            optCode: '옵션 코드',
            optType: '옵션 명',
            optPrice: '옵션 요금',
            optBill: '과금 방법',
            etc: '비고',
            optUse: '사용여부',
            optDate: '등록/수정일자',
          },
        ],
        tblDataBodyList: [
          {
            optCode: 'EADF111122',
            optType: '카시트',
            optPrice: '10,000',
            optBill: '24시간',
            etc: '',
            optUse: '사용',
            optDate: '2023-04-01 15:26',
          },
          {
            optCode: 'EADF111111',
            optType: '유모차',
            optPrice: '10,000',
            optBill: '24시간',
            etc: '',
            optUse: '사용안함',
            optDate: '2023-04-01 15:26',
            isNotuse: true,
          },
        ],

        // 페이징
        page: {
          totalCount: 1,
          totalPages: 2,
          page: 0,
          size: 5,
        },

        NodataText: '표시할 데이터가 없습니다.',

        //popup 옵션 조회 및 수정
        popTit1: '옵션 조회 및 수정',

        tblOptList: [
          {
            optCode: '옵션 코드',
            optName: '옵션 명',
            optType: '옵션 종류',
            optPrice: '옵션 요금',
            optBill: '과금 방법',
            etc: '비고',
            optUse: '사용여부',
            optDate: '등록/수정 일자',
          },
        ],

        // 옵션 종류
        selectOption1: [
            { label: '리스트01', value: 'default' },
            { label: '리스트02', value: 'opt1' },
            { label: '리스트03', value: 'opt2' },
            { label: '리스트04', value: 'opt3' },
        ],

        checked: false,

        rdoItems1: [
          { id: 1, label: '건별' },
          { id: 2, label: '일별' },
          { id: 2, label: '24시간', checked: true },
        ],
        rdoItems2: [
          { id: 1, label: '사용', checked: true },
          { id: 2, label: '사용안함' },
        ],

        td_optCode: 'EADF111122',
        td_optName: '카시트',
        td_optPrice: '10,000',
        td_etc: '',
        td_optDate: '2023-04-01  15:26',

        popDimmed: false,

        PopOptReg: false,
        popExposure: false,
        vhcleOption: false,

        popTit2: '옵션 등록',

        popTit3: '노출순서 관리',

        // 팝업 drag list
        itemTit: '옵션',
        dragList01: [
          { id: 1, label: '유모차' },
          { id: 2, label: '카시트' },
          { id: 3, label: '네비게이션' },
          { id: 4, label: '블랙박스' },
          { id: 5, label: '스페어타이어' },
        ],
      };
    },
    methods: {
      closePopup() {
        this.popDimmed = false;
        this.PopOptReg = false;
        this.popExposure = false;
        this.vhcleOption = false;
        document.body.classList.remove("scrollLock"); // 팝업 닫을 시
      },
      openPopExp() {
        this.popDimmed = true;
        this.popExposure = true;
        // this.vhcleOption = true;
        document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
      },
      openPopExp1() {
        this.popDimmed = true;
        this.vhcleOption = true;
        document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
      },
      openPopOpt() {
        this.popDimmed = true;
        this.PopOptReg = true;
        document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
      },
    },
  };
</script>

<style scoped></style>
