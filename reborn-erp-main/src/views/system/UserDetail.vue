<template>
    <div class="subBody corpstup01">
        <h2>{{ contTit }}</h2>

        <!-- 사용자 등록관리 -->
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
                                <th>{{ tblInfo.id }}</th>
                                <td>
                                    <div class="flex-wrap">
                                        <!-- 리스트 신규 등록할 경우 -->
                                        <input type="text" class="cancelInput" v-model="tblInfo.td_id" />
                                        <div class="btn-wrap">
                                            <button class="btn tbtn btn_bg04">중복확인</button>
                                        </div>
                                        
                                        <!-- 리스트 수정할 경우
                                        <input type="text" class="cancelInput" v-model="tblInfo.td_id" readonly />
                                        <div class="btn-wrap">
                                            <button class="btn tbtn btn_bg04" disabled>중복확인</button>
                                        </div> 
                                        -->
                                    </div>
                                </td>
                                <th>{{ tblInfo.name }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="flex-wrap">
                                        <input type="text" class="cancelInput" v-model="tblInfo.td_name" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.affDesk }}</th>
                                <td>
                                    <input type="text" v-model="tblInfo.td_affDesk" readonly />
                                </td>
                                <th>{{ tblInfo.affBsn }}</th>
                                <td>
                                    <input type="text" v-model="tblInfo.td_affBsn" readonly />
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.worker }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="frm-wrap radio">
                                        <div class="frm" v-for="(rdoItem, index) in rdoItems1" :key="index">
                                            <input type="radio" :id="'rdo1_' + index" name="rdo01" :checked="rdoItem.checked" />
                                            <label :for="'rdo1_' + index">{{ rdoItem.label }}</label>
                                        </div>
                                    </div>
                                </td>
                                <th>{{ tblInfo.phone }}<span class="ico_essential"></span></th>
                                <td>
                                    <input type="text" v-model="tblInfo.td_phone" />
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.email }}<span class="ico_essential"></span></th>
                                <td colspan="3">
                                    <div class="flex-wrap">
                                        <!-- 신규사용자 등록 -->
                                        <input type="text" v-model="tblInfo.td_email" />
                                        <div class="btn-wrap">
                                            <button class="btn tbtn btn_bg04">중복확인</button>
                                            <!-- 사용자 수정일 경우 : 비활성화 시 disabled -->
                                            <!-- <button class="btn tbtn btn_bg04" disabled>중복확인</button> -->
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.password }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="flex-wrap">
                                        <input type="text" v-model="tblInfo.td_password" />
                                    </div>
                                </td>
                                <th>{{ tblInfo.repassword }}<span class="ico_essential"></span></th>
                                <td>
                                    <div class="flex-wrap">
                                        <input type="text" v-model="tblInfo.td_repassword" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ tblInfo.use }}<span class="ico_essential"></span></th>
                                <td colspan="3">
                                    <div class="frm-wrap radio">
                                        <div class="frm" v-for="(rdoItem, index) in rdoItems2" :key="index">
                                            <input type="radio" :id="'rdo2_' + index" name="rdo02" :checked="rdoItem.checked" />
                                            <label :for="'rdo2_' + index">{{ rdoItem.label }}</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- // 사용자 등록관리 -->

        <div class="btn-wrap align_right">
            <button class="btn cbtn btn_bg04">목록</button>
            <button class="btn cbtn btn_bg01">수정</button>
        </div>
    </div><!-- // subBody -->
    

<!--
    팝업
-->

    <div class="dimmed" v-show="popDimmed"></div>

    <!-- 사용자 수정 팝업 -->
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
    
    <!-- popup : 이메일 중복확인 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>이메일 중복확인을 해주세요.</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 기등록 이메일 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>이미 등록된 이메일 입니다.</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 이메일 사용가능 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>사용가능한 이메일 입니다.</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 비밀번호 불일치 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>비밀번호가 일치하지 않습니다.</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
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
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 변경 수정 완료 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>수정되었습니다.</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->


    
    <!-- 신규사용자 등록 팝업 -->
    <!-- popup : 아이디 중복확인 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>아이디 중복확인을 해주세요.</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 기등록된 아이디 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>이미 사용중인 아이디 입니다.</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 아이디 사용가능 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>사용가능한 아이디 입니다.</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01" @click="closePopup()">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->  
    
    <!-- popup : 신규사용자 등록 확인 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>신규 사용자로 등록 하시겠습니까?</p>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
        </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 신규사용자 등록 완료 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
        <template #popupBody>
        <p>등록되었습니다.</p>
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
export default {
    name: 'UserDetail',
    components: {},
    data() {
        return {
            contTit: '사용자관리',
            infoTit1: '사용자 등록관리',

            tblInfoList01: [
                {
                    id: '작업자 아이디',
                    name: '작업자 명',
                    affDesk: '소속데스크',
                    affBsn: '소속거래처',
                    worker: '작업자 구분',
                    phone: '전화번호',
                    email: '이메일',
                    password: '비밀번호',
                    repassword: '비밀번호 확인',
                    use: '사용여부',

                    td_id: '',
                    td_name: '',
                    td_affDesk: '본사',
                    td_affBsn: '셀프(당사)',
                    td_phone: '01012345678',
                    td_email: '',
                    td_password: '',
                    td_repassword: '',
                }
            ],

            checked: false,

            // 작업자 구분
            rdoItems1: [
                { id: 1, label: '관리자', },
                { id: 2, label: '직원', checked: true },
                { id: 3, label: '파트타임' },
            ],

            // 사용여부
            rdoItems2: [
                { id: 1, label: '사용', checked: true },
                { id: 2, label: '사용안함' },
            ],

            popDimmed: false,
        }
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
}
</script>

<style scoped></style>
