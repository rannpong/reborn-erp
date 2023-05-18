<template>
  <div class="subBody dcrt02">
    <h2>{{ contTit }}</h2>

    <form action="">
      <div class="searchBox">
        <div class="searchArea">
          <table class="tbl_contactBook">
            <colgroup>
              <col style="width: 300px;" />
              <col style="width: 68px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <div class="flex-wrap">
                    <div class="date-input-wrap">
                      <DateLayout
                        placeholder="년도 선택"
                        format="yyyy-MM-dd"
                      ></DateLayout>
                      <div class="btn-wrap">
                        <button class="btn btn_bg04 icoBtnS icoPrev"></button>
                        <button class="btn btn_bg04 icoBtnS icoNext"></button>
                      </div>
                    </div>
                  </div>
                </td>
                <th>거래처</th>
                <td class="td_box">
                  <Select
                    :options="selectOption1"
                    name="selectOption1"
                    id="selectOption1"
                    :default="'전체'"
                    class="select-height80"
                  />
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

      <div class="tbl-tit-wrap">
        <div class="flex-wrap">
          <div class="btn-wrap align_right">
            <button class="btn cbtn btn_bg01">등록</button>
            <button class="btn cbtn btn_bg02">선택삭제</button>
          </div>
        </div>
      </div>

      <div class="data-wrap">
        <div class="data-table-wrap">
          <table class="data-table-ty01">
            <colgroup>
              <col width="5%" />
              <col width="25%" />
              <col />
              <col />
              <col class="mo_hide" width="25%" />
              <col class="mo_hide" />
            </colgroup>
            <thead>
              <tr v-for="(contData, i) in contactList" :key="i">
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
                <th>{{ contData.account }}</th>
                <th>{{ contData.startDate }}</th>
                <th>{{ contData.endDate }}</th>
                <th class="mo_hide">{{ contData.etc }}</th>
                <th class="mo_hide">{{ contData.editDate }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="contactBodyList.length === 0">
                <td colspan="6">표시할 데이터가 없습니다.</td>
              </tr>
              <tr :key="i" v-for="(contListData, i) in contactBodyList">
                <td>
                  <div class="frm-wrap check">
                    <div class="frm">
                      <input
                        type="checkbox"
                        :id="contListData.id"
                        :value="contListData.id"
                        v-model="isSelectChk"
                      />
                      <label :for="contListData.id"></label>
                    </div>
                  </div>
                </td>
                <td @click="openContactPop()">{{ contListData.account }}</td>
                <td>{{ contListData.startDate }}</td>
                <td>{{ contListData.endDate }}</td>
                <td class="mo_hide">{{ contListData.etc }}</td>
                <td class="mo_hide">{{ contListData.editDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="tbl-bot-wrap">
        <div class="btn-wrap align_right">
          <button class="btn cbtn btn_bg01">등록</button>
          <button class="btn cbtn btn_bg02">선택삭제</button>
        </div>
      </div>
    </form>
  </div>

  
  <div class="dimmed" v-show="popDimmed"></div>
  
  <!-- popup : 거래처 예약제한 설정 -->
  <Popup
    ref="popup"
    class="medium"
    v-show="popConAccount"
    @close="closePopup()"
  >
    <template #popupHead>
      <h2>{{ popTit1 }}</h2>
    </template>
    <template #popupBody>
      <table class="data-table-ty04">
        <caption>{{ popTit1 }}</caption>
        <colgroup>
          <col style="width: 30%;" />
          <col style="" />
        </colgroup>
        <tbody :key="i" v-for="(tblAccount, i) in tblAccountList">
          <tr>
            <th>
              {{ tblAccount.disDate }}
              <span class="ico_essential"></span>
            </th>
            <td>
              <div class="date-input-wrap">
                <DateLayout
                  placeholder="년도 선택"
                  format="yyyy-MM-dd"
                ></DateLayout>
                <span class="date_tilde">-</span>
                <DateLayout
                  placeholder="년도 선택"
                  format="yyyy-MM-dd"
                ></DateLayout>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              {{ tblAccount.disAccount }}
              <span class="ico_essential"></span>
            </th>
            <td>
              <div class="flex-wrap">
                <div class="date-input-wrap input-wrapper">
                  <div
                    class="selectAcc"
                    v-for="(accDataList, accIdx) in accChkList"
                    :key="accIdx"
                  >
                    <input
                      type="text"
                      id="accDataList.id"
                      :value="accDataList.value"
                      disabled
                    />
                    <button type="button" class="btn-del">
                      X
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>{{ tblAccount.etc }}</th>
            <td>
              <input type="text" v-model="td_ectTxt" />
            </td>
          </tr>
          <tr>
            <th>{{ tblAccount.editDate }}</th>
            <td><input type="text" v-model="td_editDate" disabled /></td>
          </tr>
        </tbody>
      </table>
      <!-- 예외 거래처 선택 -->
      <div class="pop_mid">
        <h4>{{ popTit1_sub }}</h4>
      </div>
      <div class="tblScroll">
        <table class="data-table-ty02 subTy01">
          <caption>{{ popTit1_sub }}</caption>
          <colgroup>
            <col width="*" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr :key="i" v-for="(disAccData, i) in disAccHeadList">
              <th>{{ disAccData.tit1 }}</th>
              <th>{{ disAccData.tit2 }}</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="i" v-for="(disAccData, i) in disAccBodyList">
              <td>
                {{ disAccData.accNameList }}
              </td>
              <td>
                <div class="frm-wrap check">
                  <div class="frm">
                    <input
                      type="checkbox"
                      :id="disAccData.id"
                      :value="disAccData.id"
                      v-model="isDisAccList"
                    />
                    <label :for="disAccData.id"></label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <span class="guide_desc">필수 입력 항목(*)은 모두 입력해야 합니다.</span>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
        <button class="btn cbtn btn_bg01">
          수정
          <!-- 등록 -->
        </button>
      </div>
    </template>
  </Popup>
  <!-- //popup : 거래처 예약제한 설정 -->

  <!-- popup : 거래처 미선택시 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>최소 하나 이상의 거래처를 선택해주세요.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
  <!-- // popup -->

  <!-- popup : 등록 선택시 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>등록 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
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

  <!-- popup : 비고사항 수정 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>변경된 내용으로 수정 하시겠습니까?</p>
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

  <!-- popup : 선택삭제 > 팝업 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>선택 항목들을 삭제 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
          <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
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
import Select from '../../components/layout/Select.vue'
import Popup from '../../components/layout/Popup.vue'
import DateLayout from '../../components/layout/DatePicker.vue'

export default {
  name: 'ContactBook',
  components: {
    Select,
    Popup,
    DateLayout,
  },
  data() {
    return {
      contTit: '거래처 예약제한 설정',
      selectOption1: [
        { label: '전체', value: 'opt1' },
        { label: '거래처1(셀프)', value: 'opt2' },
        { label: '거래처2', value: 'opt3' },
      ],
      //체크박스
      isAllChecked: false,
      isSelectChk: [],
      //거래처 명 체크박스
      isDisAccList: [],
      //table head data
      contactList: [
        {
          account: '예외 거래처',
          startDate: '시작일자',
          endDate: '종료일자',
          etc: '비고사항',
          editDate: '등록/수정일자',
        },
      ],
      contactBodyList: [
        {
          id: 'contData1',
          account: '거래처1(셀프)',
          startDate: '2023-06-06',
          endDate: '2023-06-07',
          etc: '차량 안전점검의 날',
          editDate: '2023-04-01',
        },
        {
          id: 'contData2',
          account: '거래처2',
          startDate: '2023-05-01',
          endDate: '2023-05-01',
          etc: '근로자의 날',
          editDate: '2023-04-01',
        },
      ],
      
      popDimmed: false,
      
      //거래처 예약제한 설정 팝업
      popConAccount: false,
      popTit1: '거래처 예약제한 설정',
      tblAccountList: [
        {
          disAccount: '예외 거래처',
          disDate: '예약제한기간',
          etc: '비고사항',
          editDate: '등록/수정일자',
        },
      ],
      td_ectTxt: '',
      td_editDate: '',
      //예외 거래처 data
      accChkList: [
        {
          id: 'accDbList01',
          value: '거래처1(셀프)',
        },
        {
          id: 'accDbList02',
          value: '거래처2',
        },
      ],
      //예외 거래처 선택 table
      popTit1_sub: '예외 거래처 선택',
      disAccHeadList: [
        {
          tit1: '거래처 명',
          tit2: '선택',
        },
      ],
      disAccBodyList: [
        {
          id: 'disAcc01',
          accNameList: '거래처1(셀프)',
        },
        {
          id: 'disAcc02',
          accNameList: '거래처2',
        },
        {
          id: 'disAcc03',
          accNameList: '거래처3',
        },
      ],
    }
  },
  methods: {
    closePopup() {
      this.popDimmed = false;
      this.popConAccount = false
      document.body.classList.remove('scrollLock') // 팝업 닫을 시
    },
    openContactPop() {
      this.popDimmed = true;
      this.popConAccount = true
      document.body.classList.add('scrollLock') // 팝업 오픈 시 body 스크롤 막기
    },
    //체크박스
    allChecked() {
      this.isSelectChk = []

      if (!this.isAllChecked) {
        this.contactBodyList.forEach((contListData) => {
          this.isSelectChk.push(contListData.id)
        })
      }

      this.isAllChecked = !this.isAllChecked
    },
  },
  watch: {
    isSelectChk(value) {
      if (value.length === 0) {
        this.isAllChecked = false
      } else if (value.length === this.contactBodyList.length) {
        this.isAllChecked = true
      } else {
        this.isAllChecked = false
      }
    },
  },
  computed: {},
}
</script>
