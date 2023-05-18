<template>
    <div class="subBody basicDetail01">
        <h2>{{ contTit }}</h2>
        <div class="btn-wrap align_right">
            <button class="btn cbtn btn_bg04">목록</button>
            <button class="btn cbtn btn_bg04 icoBtn icoDel">전체삭제</button>
            <button class="btn cbtn btn_bg01">수정하기</button>
        </div>

        <div class="info-box-wrap">
            <div class="info-tit-box">
                <h3 class="infoTit">{{ infoTit1 }}</h3>
            </div>
            <div class="info-cont-box">
                <div class="table-list-wrap">
                    <table class="data-table-ty03">
                        <caption>차종정보</caption>
                        <colgroup>
                            <col style="width:15%">
                            <col style="">
                        </colgroup>
                        <tbody :key="i" v-for="(tblInfo, i) in tblInfoList01">
                            <tr>
                                <th>{{ tblInfo.carClass }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="flex-wrap">
                                        <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'소형'" />
                                        <div class="frm-wrap check">
                                            <div class="frm" v-for="(chkItem, index) in chkItems1" :key="index">
                                                <input type="checkbox" :id="'chk1_' +index" name="chk01" />
                                                <label :for="'chk1_' + index">{{ chkItem.label }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.carType }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="flex-wrap">                                        
                                        <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'TOYOTA YARiS'" />
                                        <div class="btn-wrap">
                                            <button class="btn tbtn btn_bg04 icoBtn icoPlus" @click="openCarAdd">추가요청</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.carConvOpt }}</th>
                                <td>
                                    <div class="flex-wrap">                                        
                                        <div class="frm-wrap check">
                                            <div class="frm" v-for="(chkItem, index) in chkItems2" :key="index">
                                                <input type="checkbox" :id="'chk2_' +index" name="chk02" />
                                                <label :for="'chk2_' + index">{{ chkItem.label }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.carSafeOpt }}</th>
                                <td>
                                    <div class="flex-wrap">
                                        <div class="frm-wrap check">
                                            <div class="frm" v-for="(chkItem, index) in chkItems3" :key="index">
                                                <input type="checkbox" :id="'chk3_' +index" name="chk03" />
                                                <label :for="'chk3_' + index">{{ chkItem.label }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.carSoundOpt }}</th>
                                <td>
                                    <div class="flex-wrap">
                                        <div class="frm-wrap check">
                                            <div class="frm" v-for="(chkItem, index) in chkItems4" :key="index">
                                                <input type="checkbox" :id="'chk4_' +index" name="chk04" />
                                                <label :for="'chk4_' + index">{{ chkItem.label }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="info-box-wrap basic_ty02">
            <div class="info-tit-box">
                <h3 class="infoTit">{{ infoTit2 }}</h3>                
                <div class="info-tit-area">
                    <div class="frm-wrap chk_del">
                        <div class="frm">
                            <input type="checkbox" id="chkdel" />
                            <label for="chkdel">삭제차량 포함</label>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <button class="btn tbtn btn_bg04 icoBtn icoPlus">차량추가</button>
                    </div>
                </div>
            </div>
            <div class="info-cont-box">
                <div class="table-list-wrap">
                    <table class="data-table-ty03">
                        <caption>차량정보</caption>
                        <colgroup>
                            <col style="width:15%">
                            <col style="">
                        </colgroup>
                        <tbody :key="i" v-for="(tblInfo, i) in tblInfoList02">
                            <tr>
                                <th>{{ tblInfo.carNum }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="flex-wrap">
                                        <div class="toggleBtn">
                                            <input type="checkbox" id="tglbtn" checked />
                                            <label for="tglbtn"><span></span></label>
                                        </div>
                                        <div class="input-wrap tbl_list_input">
                                            <input type="text" v-model="inputText1" />
                                            <div class="btn-wrap">
                                                <button class="btn tbtn btn_bg04" @click="openClosedCar()">휴차설정</button>
                                                <button class="btn tbtn btn_bg04 icoBtn icoDel" @click="openDelNotice()">삭제</button>
                                            </div>
                                            <span class="tbl_desc">{{ registerDate }}</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.carNum }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="flex-wrap">
                                        <div class="toggleBtn">
                                            <input type="checkbox" id="tglbtn" checked />
                                            <label for="tglbtn"><span></span></label>
                                        </div>
                                        <div class="input-wrap tbl_list_input">
                                            <input type="text" v-model="inputText1"/>
                                            <input type="tel" v-model="closedText1" class="closed" />                                        
                                            <div class="btn-wrap">
                                                <button class="btn tbtn btn_bg04" @click="openClosedCar()">휴차설정</button>
                                                <button class="btn tbtn btn_bg04 icoBtn icoDel" @click="openDelNotice()">삭제</button>
                                            </div>
                                            <span class="tbl_desc">{{ registerDate }}</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.carNum }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="flex-wrap">
                                        <div class="toggleBtn">
                                            <input type="checkbox" id="tglbtn" />
                                            <label for="tglbtn"><span></span></label>
                                        </div>
                                        <div class="input-wrap tbl_list_input">
                                            <input type="text" v-model="inputText1"/>                                        
                                            <div class="btn-wrap">
                                                <button class="btn tbtn btn_bg04" @click="openClosedCar()">휴차설정</button>
                                                <button class="btn tbtn btn_bg04 icoBtn icoDel" @click="openDelNotice()">삭제</button>
                                            </div>
                                            <span class="tbl_desc">{{ registerDate }}</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.carNum }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="flex-wrap">
                                        <div class="toggleBtn">
                                            <input type="checkbox" id="tglbtn" disabled />
                                            <label for="tglbtn"><span></span></label>
                                        </div>
                                        <div class="input-wrap tbl_list_input">
                                            <input type="text" v-model="inputText1" class="delete" />
                                            <input type="text" v-model="inputText2" class="delete" readonly />                                        
                                            <div class="btn-wrap">
                                                <button class="btn tbtn btn_bg05" @click="openrevival()">부활</button>
                                            </div>
                                            <span class="tbl_desc disabled type02">{{ deleteDate }}</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="guide_desc">{{ guideNotice }}</p>
            </div>
        </div>

        <div class="btn-wrap align_right">
            <button class="btn cbtn btn_bg04">목록</button>
            <button class="btn cbtn btn_bg04 icoBtn icoDel">전체삭제</button>
            <button class="btn cbtn btn_bg01">수정하기</button>
        </div>
    </div><!-- // subBody -->


    <!-----
    팝업     
    ---->

    <div class="dimmed" v-show="popDimmed"></div>

    <!-- popup :텍스트만 들어가는 기본 팝업 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()"> // 기본- width 700, small- width 460, medium- width 560, large- width 980 사이즈에 따라서 class 추가
      <template #popupBody>
        <p>{{ popCont1 }}</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 부활 -->
    <Popup ref="popup" class="small" v-show="popCarRevival" @close="closePopup()">
      <template #popupBody>
        <p>해당 차량을 부활 시키겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup>
    <!-- // popup -->

    <!-- popup : 부활 완료 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당 차량이 부활하였습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 부활 삭제 불가 -->
    <!-- 
    <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>삭제된 차량은 노출 시킬 수 없습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->    

    <!-- popup : 차량 삭제 -->
    <Popup ref="popup" class="small" v-show="popDeleteNotice" @close="closePopup()">
      <template #popupBody>
        <p>
            해당 차량을 삭제 하시겠습니까?<br/>
            아래 삭제 사유를 선택하시고 확인버튼을 눌러주세요
        </p>
        <Select :options="selectOption3" name="selectOption3" id="selectOption3" class="select_delete" :default="'차량 삭제 사유를 선택하세요.'" />
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup>
    <!-- // popup -->
    
    <!-- popup : 차량 삭제 완료 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당 차량 삭제하였습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 휴차 설정 -->
    <Popup ref="popup" class="medium" v-show="popClosedCarOpt" @close="closePopup()">
        <template #popupHead>
            <h2>{{ popTit1 }}</h2>
        </template>
        <template #popupBody>
            <p>{{ popTxt1 }}</p>
            <table class="data-table-ty04">
                <caption>{{ popTit1 }}</caption>
                <colgroup>
                    <col style="width:30%">
                    <col style="">
                </colgroup>
                <tbody :key="i" v-for="(tblCarClosed, i) in tblCarClosedList">
                    <tr>
                        <th>{{ tblCarClosed.carNum }}</th>
                        <td>
                            <input type="text" placeholder="京部456あ 35-35" disabled />
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="2">{{ tblCarClosed.carClosDate }}</th>
                        <td class="m_border_bot_none">
                            <div class="date-input-wrap">
                                <DateTimePicker placeholder="휴차 시작일을 선택해주세요."></DateTimePicker>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="date-input-wrap">
                                <DateTimePicker placeholder="휴차 종료일을 선택해주세요."></DateTimePicker>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarClosed.closeMng }}</th>
                        <td>                            
                            <div class="flex-wrap mng_input">
                                <input type="text" v-model="closedCarAdmin" disabled />
                                <input type="text" v-model="closedCarDate" disabled />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarClosed.closeReason }}</th>
                        <td>                            
                            <input type="text" v-model="closedCarCause" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <span class="guide_desc">{{ reqNoticeTxt }}</span>
        </template>
        <template #popupBtn>
            <div class="btn-wrap">
                <button class="btn cbtn btn_bg04" @click="closePopup()">닫기</button>
                <button class="btn cbtn btn_bg03">휴차해제</button>
                <button class="btn cbtn btn_bg01">수정하기</button>
            </div>
        </template>
    </Popup>
    <!-- // popup -->

    <!-- popup : 차종 추가요청 -->
    <Popup ref="popup" class="medium" v-show="popCarAdd" @close="closePopup()">
        <template #popupHead>
            <h2>{{ popTit2 }}</h2>
        </template>
        <template #popupBody>
            <p>{{ popTxt2 }}</p>
            <table class="data-table-ty04">
                <caption>{{ popTit2 }}</caption>
                <colgroup>
                    <col style="width:30%">
                    <col style="">
                </colgroup>
                <!-- radio 선택 : 차종 추가요청 & 옵션 추가요청 -->
                <tbody>
                    <tr>
                        <th>{{ reqType }}</th>
                        <td>
                            <div class="frm-wrap radio">
                                <div class="frm" v-for="(rdoItem, index) in rdoItems1" :key="index">
                                    <input type="radio" :id="'rdo1_' +index" name="rdo01" v-model="carRdoTab" :value="rdoItem.value" :checked="rdoItem.checked"/>
                                    <label :for="'rdo1_' +index">{{ rdoItem.label }}</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <!-- 차종 추가요청 클릭시 list -->
                <tbody :key="i" v-for="(tblCarAdd, i) in tblCarAddList" v-show="carRdoTab === 'rdoCont1'">
                    <tr>
                        <th>{{ tblCarAdd.reqTit }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" placeholder="제목을 입력하세요." v-model="inputText3" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarAdd.madeIn }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" placeholder="제조사를 입력하세요." v-model="inputText4" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarAdd.carName }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" placeholder="차종 명을 입력하세요." v-model="inputText5" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarAdd.carEngine }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" placeholder="배기량을 입력하세요." v-model="inputText6" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarAdd.carPeople }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" placeholder="승차정원을 입력하세요." v-model="inputText7" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarAdd.carFuel }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" placeholder="사용연료(가솔린, 경우, 가스 등) 입력하세요." v-model="inputText8" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarAdd.carModel }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" placeholder="차량 연식을 입력하세요." v-model="inputText9" />
                        </td>
                    </tr>
                </tbody>
                <!-- // 차종 추가요청 클릭시 list -->
                
                <!-- 옵션 추가요청 클릭시 list -->
                <tbody :key="i" v-for="(tblCarOpt, i) in tblCarOptList" v-show="carRdoTab === 'rdoCont2'">
                    <tr>
                        <th>{{ tblCarOpt.reqTit }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" placeholder="제목을 입력하세요." v-model="inputText3" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarOpt.optName }}<span class="ico_essential"></span></th>
                        <td>
                            <textarea placeholder="추가해야 할 차량 옵션을 입력하세요. 다수의 옵션을 입력하는 경우 (,)콤마를 이용해야 입력해주세요."></textarea>
                        </td>
                    </tr>
                </tbody>
                <!-- //옵션 추가요청 클릭시 list -->
            </table>
            <span class="guide_desc">{{ reqNoticeTxt }}</span>
        </template>
        <template #popupBtn>
            <div class="btn-wrap">
                <button class="btn cbtn btn_bg01">제출하기</button>
            </div>
        </template>
    </Popup>
    <!-- // popup -->


</template>

<script lang="ts">
import Select from '../../components/layout/Select.vue'
import Pagination from '../../components/layout/Pagination.vue'
import Popup from '../../components/layout/Popup.vue'
import DateTimePicker from '../../components/layout/DateTimePicker.vue'

export default {
    name: 'VhctyDetail',    
    components: {
        Select,
        Pagination,
        Popup,
        DateTimePicker
    },
    data() {
        return {
            contTit: '차량관리',
            infoTit1: '차종정보',
            
            // 보유차종만 보기
            chkItems1:[
                { id: 1, label:'보유차종만 보기' },
            ],

            infoBox1: [
                { id:1, title:'차종분류',}
            ],

            tblInfoList01: [
                { 
                    carClass: '차종분류',
                    carType: '차종선택',
                    carConvOpt: '편의 옵션',
                    carSafeOpt: '안전 옵션',
                    carSoundOpt: '음향 옵션',

                }
            ],

            // 차종분류
            selectOption1: [
                { label: '리스트01', value: 'default' },
                { label: '리스트02', value: 'opt1' },
                { label: '리스트03', value: 'opt2' },
                { label: '리스트04', value: 'opt3' },
            ],
            
            //차종선택
            selectOption2: [
                { label: '리스트01', value: 'default' },
                { label: '리스트02', value: 'opt1' },
                { label: '리스트03', value: 'opt2' },
                { label: '리스트04', value: 'opt3' },
            ],

            //안전옵션
            chkItems2:[
                { label: '운전석 에어백', value: 'default' },
                { label: '조수석 에어백', value: 'opt1' },
                { label: '후방카메라', value: 'opt2' },
                { label: '후방센서', value: 'opt3' },
                { label: '블랙박스', value: 'opt4' },
                { label: '어라운드뷰', value: 'opt5' },
                { label: 'HUD', value: 'opt6' },
                { label: '사륜구동', value: 'opt7' },
            ],

            //편의옵션
            chkItems3: [
                { label: '내비게이션', value: 'default' },
                { label: '리모컨키', value: 'opt1' },
                { label: '스마트키', value: 'opt2' },
                { label: '열선시트', value: 'opt3' },
                { label: '가죽시트', value: 'opt4' },
                { label: '썬루프', value: 'opt5' },
                { label: '금연', value: 'opt6' },
                { label: '핸들열선', value: 'opt7' },
                { label: '통풍시트', value: 'opt8' },
                { label: '전동시트', value: 'opt9' },
                { label: '하이패스', value: 'opt10' },
                { label: '전동트렁크', value: 'opt11' },
                { label: '열선시트(후)', value: 'opt12' },
                { label: '오토스탑', value: 'opt13' },
                { label: '드라이브와이즈', value: 'opt14' },
            ],

            //음향 옵션
            chkItems4: [
                { label: '블루투스', value: 'default' },
                { label: 'AUX', value: 'opt1' },
                { label: 'USB', value: 'opt2' },
            ],


            infoTit2: '차량정보',
            tblInfoList02: [
                {
                    carNum:'차량번호',
                }
            ],
            inputText1: '京部500あ 46-49',
            inputText2: '사유 : 매각',
            closedText1: '휴차 : 2023.03.25 ~ 2023.03.31)',

            guideNotice: 'ON/OFF 버튼으로 차량을 노출 또는 비 노출시킬 수 있습니다.',

            //popup
            selectOption3: [
                { label: '리스트01', value: 'default' },
                { label: '리스트02', value: 'opt1' },
                { label: '리스트03', value: 'opt2' },
                { label: '리스트04', value: 'opt3' },
            ],

            // 휴차 설정 팝업
            popTit1: '휴차 설정',
            popTxt1: '배차를 보류하기 위한 휴차 기간을 입력해주세요.',
            
            // 휴차 설정 table
            tblCarClosedList: [
                {
                    carNum: '차량번호',
                    carClosDate: '휴차기간',
                    closeMng: '휴차처리자',
                    closeReason: '휴차사유',
                }
            ],

            closedCarAdmin: 'mklim',
            closedCarDate: '2023-03-22 18:26:12',
            closedCarCause: '사고로 인한 차량 수리',

            // 리스트 호출 data
            // list: {
            //     regBeginDt: ref(new Date()),
            //     regEndDt: ref(new Date()),
            //     progsSttus: '',
            //     name: '',
            //     moTelNo: '',
            //     repTelNo: '',
            // },
            regBeginDt: '2023-02-20',
            regBeginTime: '12:40',
            regEndDt: '2023-02-20',
            regEndTime: '12:40',

            registerDate: '(등록 2023-03-21  18:19)',
            deleteDate: '(삭제 2023-03-20  14:15)',

            // 차종 추가요쳥 팝업
            carRdoTab: 'rdoCont1',
            popTit2: '차종 추가요청',
            popTxt2: '차종 추가요청 또는 옵션 추가요청을 선택해서 입력하세요.',
            
            // 차종 추가요청 라디오 선택 부분
            reqType:'요청 구분',

            // 차종 추가요청
            tblCarAddList: [
                {
                    reqType: '',
                    reqTit: '요청 제목',
                    madeIn: '제조사',
                    carName: '차종 명',
                    carEngine: '배기량',
                    carPeople: '승차정원',
                    carFuel: '사용연료',
                    carModel: '년식',
                }
            ],

            tblCarOptList: [
                {                    
                    reqType: '요청 구분',
                    reqTit: '요청 제목',
                    optName: '옵션 명',
                }
            ],

            checked:false,
            rdoItems1: [
                { label: '차종 추가요청', value: 'rdoCont1', checked: true, },
                { label: '옵션 추가요청', value: 'rdoCont2', }
            ],

            reqNoticeTxt: '필수 입력 항목(*)은 모두 입력해야 합니다.',

            inputText3: '',
            inputText4: '',
            inputText5: '',
            inputText6: '',
            inputText7: '',
            inputText8: '',
            inputText9: '',
            
            popDimmed: false,
            popClosedCarOpt: false,
            popDeleteNotice: false,
            popCarAdd: false,
            popCarRevival: false,

        }
    },
    
    methods: {
        closePopup() {
            this.popDimmed = false;
            this.popClosedCarOpt = false;
            this.popDeleteNotice = false;
            this.popCarAdd = false;
            this.popCarRevival = false;
            document.body.classList.remove("scrollLock"); // 팝업 닫을 시
        },
        openClosedCar() {
            this.popDimmed = true;
            this.popClosedCarOpt = true;
            document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
        },
        openDelNotice() {
            this.popDimmed = true;
            this.popDeleteNotice = true;
            document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
        },
        openCarAdd() {
            this.popDimmed = true;
            this.popCarAdd = true;
            document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
        },
        openrevival() {
            this.popDimmed = true;
            this.popCarRevival = true;
            document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
        }
    },
}
</script>

<style scoped>
</style>
