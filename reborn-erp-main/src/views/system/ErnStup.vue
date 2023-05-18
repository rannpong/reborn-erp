<template>
    <div class="subBody corpstup02">
      <h2>{{ contTit }}</h2>
  
      <!-- 기본정보 -->
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
                    <th>{{ tblInfo.startPlace }}<span class="ico_essential"></span></th>
                    <td>
                        <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'본사'" />
                    </td>
                    <th>{{ tblInfo.endPlace }}<span class="ico_essential"></span></th>
                    <td>                        
                        <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'본사'" />
                    </td>
                </tr>
                <tr>
                    <th>{{ tblInfo.logo }}</th>
                    <td colspan="3">
                        <div class="file-wrap" :class="{'has-file' : hasFile}">
                            <input id="customFile" type="file" @change="FileChange"/>
                            <label class="custom-file-label" for="customFile">파일찾기</label>
                            <span>{{file_name}}<button class="del-file" @click="delFile">파일삭제</button></span>
                            <div class="file_txt">
                                <em>※ 첨부 파일  변경 등록 시, 기 등록 파일을 먼저 삭제해주시고 업로드 해주세요.</em>
                                <span class="guide_desc ty_02">( 000 x000 사이즈의 JPG 혹은 PNG 파일을 등록해주세요)</span>
                            </div>
                        </div>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- // 기본정보 -->

      <!-- 요금산출설정 -->
      <div class="info-box-wrap">
        <div class="info-tit-box">
          <h3 class="infoTit">{{ infoTit2 }}</h3>
        </div>
        <div class="info-cont-box">
          <div class="table-list-wrap">
            <table class="data-table-ty03">
              <caption>{{ infoTit2 }}</caption>
              <tbody :key="i" v-for="(tblInfo, i) in tblInfoList02">
                <tr>
                    <th>{{ tblInfo.standSett }}<span class="ico_essential"></span></th>
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
                    <th>{{ tblInfo.appMethod }}<span class="ico_essential"></span></th>
                    <td>                        
                        <ul class="apply_wrap">
                            <li>
                                <input type="text" v-model="tblInfo.td_time_hour" />
                                <span>시간  이상은 상위요금 적용</span>
                            </li>
                            <li>
                                <input type="text" v-model="tblInfo.td_time_minute" />
                                <span>분 이상은 1시간 요금을 적용</span>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>{{ tblInfo.cutOff }}<span class="ico_essential"></span></th>
                    <td>
                        <div class="flex-wrap">
                            <Select :options="selectOption3" name="selectOption3" id="selectOption3" :default="'미사용'" />
                            <div class="frm-wrap radio">
                                <div class="frm" v-for="(rdoItem, index) in rdoItems2" :key="index">
                                    <input type="radio" :id="'rdo2_' + index" name="rdo02" :checked="rdoItem.checked" />
                                    <label :for="'rdo2_' + index">{{ rdoItem.label }}</label>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>{{ tblInfo.calculMethod }}<span class="ico_essential"></span></th>
                    <td>
                        <div class="frm-wrap radio flexNo">
                            <div class="frm" v-for="(rdoItem, index) in rdoItems3" :key="index">
                                <input type="radio" :id="'rdo3_' + index" name="rdo03" :checked="rdoItem.checked" />
                                <label :for="'rdo3_' + index">{{ rdoItem.label }}<span class="bracket mo_hide">{{ rdoItem.labelBracket }}</span></label>
                            </div>
                        </div>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- // 요금산출설정 -->

      <!-- 보험요금산출설정 -->
      <div class="info-box-wrap">
        <div class="info-tit-box">
          <h3 class="infoTit">{{ infoTit3 }}</h3>
        </div>
        <div class="info-cont-box">
          <div class="table-list-wrap">
            <table class="data-table-ty03">
              <caption>{{ infoTit3 }}</caption>
              <tbody :key="i" v-for="(tblInfo, i) in tblInfoList03">
                <tr>
                    <th>{{ tblInfo.standSett }}<span class="ico_essential"></span></th>
                    <td>
                        <div class="frm-wrap radio">
                            <div class="frm" v-for="(rdoItem, index) in rdoItems4" :key="index">
                                <input type="radio" :id="'rdo4_' + index" name="rdo04" :checked="rdoItem.checked" />
                                <label :for="'rdo4_' + index">{{ rdoItem.label }}</label>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th rowspan="3">{{ tblInfo.designation }}<span class="ico_essential"></span></th>
                    <td>
                        <ul class="dsgnation_wrap">
                            <li>
                                <div class="dsgnation_box">
                                    <input type="text" v-model="tblInfo.td_designation1" />
                                    <div class="btn-wrap">
                                        <button class="btn tbtn btn_bg04 icoBtn icoPlusB">추가</button>
                                    </div>
                                </div>
                                <div class="frm-wrap radio">
                                    <div class="frm" v-for="(rdoItem, index) in rdoItems5" :key="index">
                                        <input type="radio" :id="'rdo5_' + index" name="rdo05" :checked="rdoItem.checked" />
                                        <label :for="'rdo5_' + index">{{ rdoItem.label }}</label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul class="dsgnation_wrap">
                            <li>
                                <div class="dsgnation_box">
                                    <input type="text" v-model="tblInfo.td_designation2" />
                                    <div class="btn-wrap">
                                        <button class="btn tbtn btn_bg04 icoBtn icoDel">삭제</button>
                                    </div>
                                </div>
                                <div class="frm-wrap radio">
                                    <div class="frm" v-for="(rdoItem, index) in rdoItems5" :key="index">
                                        <input type="radio" :id="'rdo6_' + index" name="rdo06" :checked="rdoItem.checked" />
                                        <label :for="'rdo6_' + index">{{ rdoItem.label }}</label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul class="dsgnation_wrap">
                            <li>
                                <div class="dsgnation_box">
                                    <input type="text" v-model="tblInfo.td_designation3" />
                                    <div class="btn-wrap">
                                        <button class="btn tbtn btn_bg04 icoBtn icoDel">삭제</button>
                                    </div>
                                </div>
                                <div class="frm-wrap radio">
                                    <div class="frm" v-for="(rdoItem, index) in rdoItems5" :key="index">
                                        <input type="radio" :id="'rdo7_' + index" name="rdo07" :checked="rdoItem.checked" />
                                        <label :for="'rdo7_' + index">{{ rdoItem.label }}</label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- // 보험요금산출설정 -->

      <div class="btn-wrap align_right">
        <button class="btn cbtn btn_bg01">저장</button>
      </div>
      
    </div>
    <!-- // subBody -->


<!--
    팝업
-->

    <div class="dimmed" v-show="popDimmed"></div>
    
    <!-- popup : 필수 입력 -->
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
    
    <!-- popup : 변경내용 수정 안내 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>변경된 내용으로 수정 하시겠습니까?</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01" >확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 변경내용 수정 완료 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>수정하였습니다.</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->

</template>

<script lang="ts">
import Popup from '../../components/layout/Popup.vue';
import Select from '../../components/layout/Select.vue';

export default {
    name: 'ErnStup',
    components: {
        Popup,
        Select,
    },
    data() {
        return {
            contTit: '운영환경설정',

            // 기본설정
            infoTit1: '기본설정',

            
            // 기본설정 table th
            tblInfoList01: [
                {
                    startPlace: '기본 배차장소',
                    endPlace: '기본 반차장소',
                    logo: '로고(CI)등록',
                },
            ],

            // 기본 배차장소
            selectOption1: [
                { label: '본사', value: 'default' },
                { label: '리스트02', value: 'opt1' },
                { label: '리스트03', value: 'opt2' },
                { label: '리스트04', value: 'opt3' },
            ],

            // 기본 반차장소
            selectOption2: [
                { label: '본사', value: 'default' },
                { label: '리스트02', value: 'opt1' },
                { label: '리스트03', value: 'opt2' },
                { label: '리스트04', value: 'opt3' },
            ],
                
            file: '',
            file_name: '',
            hasFile: false,

            infoTit2: '요금 산출 설정',
            tblInfoList02: [
                {
                    standSett: '기준설정',
                    appMethod: '적용방법',
                    cutOff: '절사기준',
                    calculMethod: '산출방법',

                    td_time_hour: '',
                    td_time_minute: '',
                }
            ],

            checked: false,

            // 기준설정
            rdoItems1: [
                { id: 1, label: '출발일 기준 요금제', checked: true },
                { id: 2, label: '24시간 기준 요금제' },
            ],
      
            // 절사기준 사용여부
            selectOption3: [
                { label: '미사용', value: 'default' },
                { label: '원', value: 'opt1' },
                { label: '십원', value: 'opt2' },
                { label: '백원', value: 'opt3' },
            ],

            rdoItems2: [                
                { id: 1, label: '절사' },
                { id: 2, label: '올림', checked: true },
                { id: 3, label: '반올림' },
            ],

            // 산출방법
            rdoItems3: [                
                { id: 1, label: '24H', labelBracket: '(24시간 단위로 요금 적용)', checked: true },
                { id: 2, label: '24H+12+6+1', labelBracket: '(24시간 단위를 초과하는 시간 * 1시간 요금을 적용)' },
                { id: 3, label: '24H+1+12+6', labelBracket: '(24시간 단위를 초과하는 시간 * 1시간 요금을 적용 단, 매 24시간 단위에서만 초과요금 적용하며 6시간 이상에서의 초과요금은 상위구간요금을 적용)' },
                { id: 4, label: '1D', labelBracket: '(사용일수 요금 적용)' },
                { id: 5, label: '1D+12+6+1', labelBracket: '(사용일수를 초과하는 시간에 대해 단위 요금을 적용)' },
            ],

            // 보험요금산출설정
            infoTit3: '보험요금 산출 설정',

            tblInfoList03: [
                {
                    standSett: '기준설정',
                    designation: '명칭설정',

                    td_designation1: '',
                    td_designation2: '',
                    td_designation3: '',
                }
            ],

            rdoItems4: [
                { id: 1, label: '24시간 단위로 산출', checked: true },
                { id: 2, label: '사용일수로 산출' },
            ],

            rdoItems5: [
                { id: 1, label: '사용', checked: true },
                { id: 2, label: '미사용' },
            ],
            
            popDimmed: false,
        }
    },
    methods: {
      FileChange(e) {
        let file = e.target.files[0];
        this.file_name = file.name;
        this.file = file;
        this.hasFile = true;
      },
      delFile() {
        this.file_name = "";
        this.file = "";
        this.hasFile = false;
      },
      
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
}
</script>

<style scoped></style>
