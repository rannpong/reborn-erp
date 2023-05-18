<template>
    <div class="subBody corpstup01">
      <h2>{{ contTit }}</h2>
  
      <!-- 사업자정보 -->
      <div class="info-box-wrap">
        <div class="info-tit-box">
          <h3 class="infoTit">{{ infoTit1 }}</h3>
        </div>
        <div class="info-cont-box">
          <div class="table-list-wrap">
            <table class="data-table-ty03">
              <caption>{{ infoTit1 }}</caption>
              <tbody :key="i" v-for="(tblInfo, i) in tblInfoList01">
                <tr>
                  <th>{{ tblInfo.bsnNum }}<span class="ico_essential"></span></th>
                  <td>
                    <div class="flex-wrap">
                      <input type="text" class="cancelInput" placeholder="사업자번호를 입력하세요." v-model="tblInfo.td_bsnNum" />
                    </div>
                  </td>
                  <th>{{ tblInfo.mutual }}<span class="ico_essential"></span></th>
                  <td>
                    <div class="flex-wrap">
                      <input type="text" class="cancelInput" placeholder="상호명을 입력하세요." v-model="tblInfo.td_mutual" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>{{ tblInfo.repreName }}<span class="ico_essential"></span></th>
                  <td colspan="3">
                    <div class="flex-wrap">
                      <input type="text" class="cancelInput" placeholder="대표자명을 입력하세요." v-model="tblInfo.td_repreName" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>{{ tblInfo.address }}<span class="ico_essential"></span></th>
                  <td colspan="3">
                    <div class="address-wrap">
                        <div class="addr-search">
                            <span class="ico_addr"></span>
                            <input type="text" v-model="tblInfo.td_address1" />
                            <div class="btn-wrap">
                                <button class="btn addrbtn btn_bg02">郵便番号照会</button>
                            </div>
                        </div>
                        <div class="addr-detail">
                            <input type="text" v-model="tblInfo.td_address2" readonly />
                            <input type="text" placeholder="상세주소를 입력하세요." v-model="tblInfo.td_addrDetail" />
                        </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>{{ tblInfo.sectors }}<span class="ico_essential"></span></th>
                  <td>
                    <div class="flex-wrap">
                      <input type="text" class="cancelInput" placeholder="업종을 입력하세요." v-model="tblInfo.td_sectors" />
                    </div>
                  </td>
                  <th>{{ tblInfo.bsncate }}<span class="ico_essential"></span></th>
                  <td>
                    <div class="flex-wrap">
                      <input type="text" class="cancelInput" placeholder="업태를 입력하세요." v-model="tblInfo.td_bsncate" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>{{ tblInfo.phone }}<span class="ico_essential"></span></th>
                  <td>
                    <div class="flex-wrap">
                      <input type="text" class="cancelInput" placeholder="업종을 입력하세요." v-model="tblInfo.td_phone" />
                    </div>
                  </td>
                  <th>{{ tblInfo.fax }}<span class="ico_essential"></span></th>
                  <td>
                    <div class="flex-wrap">
                      <input type="text" class="cancelInput" placeholder="업태를 입력하세요." v-model="tblInfo.td_fax" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>{{ tblInfo.etc }}</th>
                  <td colspan="3">                    
                    <div class="flex-wrap">
                      <input type="text" class="full" v-model="tblInfo.td_etc" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- // 사업자정보 -->

      <div class="btn-wrap align_right">
        <button class="btn cbtn btn_bg01">등록</button>
      </div>
      
      <!-- 렌터카 운영지역 정보 -->
      <div class="info-box-wrap">
        <div class="info-tit-box">
          <h3 class="infoTit">{{ infoTit2 }}</h3>
        </div>
        <div class="info-cont-box">
          <div class="table-list-wrap">
            <table class="data-table-ty02">
                <caption>{{ infoTit2 }}</caption>
                <colgroup>
                    <col style="width:30%">
                    <col>
                </colgroup>
                <thead :key="i" v-for="(tblInfo, i) in tblHeadList">
                    <tr>
                        <th>{{ tblInfo.first }}</th>
                        <th>{{ tblInfo.second }}</th>
                    </tr>
                </thead>
                <tbody :key="i" v-for="(tblInfo, i) in tblBodyList">
                    <tr>
                        <td>{{ tblInfo.first }}</td>
                        <td>{{ tblInfo.second }}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- // 렌터카 운영지역 정보 -->
  
      <div class="btn-wrap align_right">
        <button class="btn cbtn btn_bg01" @click="expAreaPop">지역추가 요청</button>
      </div>
    </div>
    <!-- // subBody -->
  
  <!--
  팝업
  -->

  <div class="dimmed" v-show="popDimmed"></div>
  
  <!-- popup : 우편번호 에러 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
    <template #popupBody>
      <p>입력하신 우편번호가 존재하지 않습니다.</p>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
          <button class="btn cbtn btn_bg01">확인</button>
      </div>
    </template>
  </Popup> -->
  <!-- // popup -->

  <!-- popup : 변경 내용 수정 확인 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
    <template #popupBody>
      <p>변경하신 내용으로 수정 하시겠습니까?</p>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
          <button class="btn cbtn btn_bg01">확인</button>
      </div>
    </template>
  </Popup> -->
  
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

    <!-- popup : 운영지역 추가요청 -->
    <Popup ref="popup" v-show="popExparea" @close="closePopup()" class="corpstup">
        <template #popupHead>
            <h2>{{ popTit1 }}</h2>
        </template>
        <template #popupBody>
            <p>{{ popTxt1 }}</p>
            <table class="data-table-ty04">
                <caption>{{ popTit1 }}</caption>
                <tbody :key="i" v-for="(tblItem, i) in tblList01">
                    <tr>
                        <th>{{ tblItem.reqTit }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" placeholder="요청 제목을 입력하세요." v-model="tblItem.td_reqTit" />
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="3">{{ tblItem.expArea }}<span class="ico_essential"></span></th>
                        <td>
                            <div class="flex-wrap">
                                <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'지역을 선택하세요.'" />
                                <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'지역을 선택하세요.'" />
                                <div class="btn-wrap">
                                    <button class="btn tbtn btn_bg04 icoBtn icoPlus">추가</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="flex-wrap">
                                <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'지역을 선택하세요.'" />
                                <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'지역을 선택하세요.'" />
                                <div class="btn-wrap">
                                    <button class="btn tbtn btn_bg04 icoBtn icoDel">삭제</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="flex-wrap">
                                <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'지역을 선택하세요.'" />
                                <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'지역을 선택하세요.'" />
                                <div class="btn-wrap">
                                    <button class="btn tbtn btn_bg04 icoBtn icoDel">삭제</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblItem.etcExpArea }}<span class="ico_essential"></span></th>
                        <td>
                            <div class="flex-wrap">
                                <input type="text" placeholder="기타 지역을 입력하세요." v-model="tblItem.td_etcExpArea" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span class="guide_desc">필수 입력 항목(*)은 모두 입력해야 합니다.</span>
        </template>
        <template #popupBtn>
            <div class="btn-wrap">
                <button class="btn cbtn btn_bg01">제출하기</button>
            </div>
        </template>
    </Popup>
    <!-- // popup -->
    
    
    <!-- popup : 제출 확인 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>작성하신 요청사항을 제출 하시겠습니까?</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 제출 완료 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
    <template #popupBody>
        <p>제출되었습니다.<br/>빠른 시일내에 조치하겠습니다.</p>
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

export default {
    name: 'CorpStup',
    components: {
        Popup,
        Select,
    },
    data() {
        return {
            contTit: '회사정보',

            // 사업자정보
            infoTit1: '사업자 정보',

            // 사업자정보 table th
            tblInfoList01: [
                {
                    bsnNum: '사업자번호',
                    mutual: '상호',
                    repreName: '대표자명',
                    address: '주소',
                    sectors: '업종',
                    bsncate: '업태',
                    phone: '전화번호',
                    fax: '팩스번호',
                    etc: '비고',
                    
                    // 사업자정보 table td
                    td_bsnNum: '',
                    td_mutual: '',
                    td_repreName: '',
                    td_address1: '',
                    td_address2: '',
                    td_addrDetail: '',
                    td_sectors: '',
                    td_bsncate: '',
                    td_phone: '',
                    td_fax: '',
                    td_etc: '',
                },
            ],

            infoTit2: '렌터카 운영 지역 정보',

            // 렌터카 운영 지역 정보
            tblHeadList: [
                {
                    first: '현',
                    second: '구',
                },
            ],

            tblBodyList: [
                {
                    first: '현',
                    second: '구',
                },
            ],

            popDimmed: false,

            // 운영지역 추가요청 팝업
            popExparea: false,

            popTit1: '운영지역 추가요청',
            popTxt1: '렌터카 운영지역이 누락되었다면 아래 양식으로 추가 요청해주세요.',

            tblList01: [
                {
                    reqTit: '요청제목',
                    expArea: '노출지역',
                    etcExpArea: '기타노출지역',

                    td_reqTit: '',
                    td_etcExpArea: '',
                }
            ],

            // 노출지역1
            selectOption1: [
                { label: '리스트01', value: 'default' },
                { label: '리스트02', value: 'opt1' },
                { label: '리스트03', value: 'opt2' },
                { label: '리스트04', value: 'opt3' },
            ],

            // 노출지역2
            selectOption2: [
                { label: '리스트01', value: 'default' },
                { label: '리스트02', value: 'opt1' },
                { label: '리스트03', value: 'opt2' },
                { label: '리스트04', value: 'opt3' },
            ],

        };
    },
    methods: {
      // popup
      closePopup() {
        this.popDimmed = false;
        document.body.classList.remove("scrollLock"); // 팝업 닫을 시 body 스크롤 잠금 해제
      },
      openPopup() {
        this.popDimmed = true;
          document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 잠금
      },
    },
};
</script>

<style scoped></style>
  