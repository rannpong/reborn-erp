<template>
    <!-- header -->
    <header class="login-header">
      <h1 class="logo"><router-link to="/">REborn Partners</router-link></h1>
    </header>

    <div class="login_wrap password">
        <div class="tit_img"><img src="../../assets/img/common/bg_password.png" alt="비밀번호찾기 이미지" /></div>
        <h1>비밀번호 찾기</h1>
        <p>
            아이디와 이름을 입력해주세요.<br />
            등록된 이메일로 임시비밀번호를 보내드립니다.
        </p>
        <div class="loginBox">
            <input type="text" v-model="userid" placeholder="아이디" />
            <input type="text" v-model="username" placeholder="이름" />
            <button class="btnLogin" @click="find()">FIND</button>
        </div>
    </div>

<!-- 
  팝업
-->
    
    <!-- popup : 비밀번호 찾기 -->
    <div class="dimmed" v-show="popup.popDimmed"></div>
    <Popup ref="popup" class="loginPopup small" @close="closePopup()" v-show="popup.isPopup">
        <template #popupBody>
            <p>{{ popup.popTxt1 }}</p>
        </template>
        <template #popupBtn>
            <div class="btn-wrap">
                <button class="btnDef" @click="closePopup()">확인</button>
            </div>
        </template>
    </Popup>
    <!-- // popup -->

    <!-- popup : 비밀번호 변경 -->
    <Popup ref="popup" class="loginPopup" @close="closePopup()" v-show="popup.isPopup2">
        <template #popupHead>
            <h2>{{ popup.popTit }}</h2>
            <p>{{ popup.popDesc }}</p>
        </template>
        <template #popupBody>
            <div class="pwchange_box">
                <div class="input-wrap">
                <input type="password" v-model="password" placeholder="현재 사용중인 비밀번호를 입력하세요.">
                </div>
                <div class="input-wrap">
                    <input type="password" v-model="repassword" placeholder="새로 사용할 비밀번호를 입력하세요.">
                    <ul class="guide-msg">
                        <li>
                            영문과 숫자, 특수문자를 조합하여 10 ~ 20자로 입력해주세요.
                            쉽게 유추할 수 있는 비밀번호(111, ab123, 이메일 등)는 입력하실 수 없습니다.  
                        </li>
                    </ul>
                </div>
                <div class="input-wrap">
                    <input type="password" v-model="repwConfirm" placeholder="한번 더 같은 비밀번호를 입력하세요.">
                    <ul class="guide-msg">
                        <li class="error">비밀번호가 일치하지 않습니다.</li>
                    </ul>
                </div>
            </div>
        </template>
        <template #popupBtn>
        <div class="btn-wrap">
            <button class="btnDef" @click="closePopup()" disabled>확인</button>
        </div>
        </template>
    </Popup>
    <!-- // popup -->

</template>

<script lang="ts">
import Select from '../../components/layout/Select.vue';
import Popup from '../../components/layout/Popup.vue';

// import { loginApi } from '../../api/authApi';
// import { findByIdAndNameApi, managerPwChgApi } from '../../api/managerApi';

export default {
    name: 'Pwfind',
    components: {
      Select,
      Popup,
  },
    data() {
        return {
            userid: '',
            username: '',
            password: '',
            repassword: '',
            repwConfirm: '',

            popup: {
                popDimmed: false, // dimmed

                isPopup: false,
                isPopup2: false,
                isSuccess: false,

                // popup : 비밀번호 변경 title
                popTit: '비밀번호 변경',
                popDesc: '새로운 비밀번호를 입력해주세요.',

                // popup : 비밀번호 찾기 text
                popTxt: '',
                popTxt1: '현재 사용중인 비밀번호가 일치하지 않습니다. 현재 확인 후 입력하세요.',
                popTxt2: '비밀번호가 변경되었습니다.',
            },
        }
    },
    methods: {
        find() {
            if (this.userid === '') {
                this.openPopup('아이디를 입력 해주세요.');
            return;
            } else if (this.username === '') {
                this.openPopup('이름을 입력 해주세요.');
            return;
            }

            // findByIdAndNameApi({ username: this.userid, name: this.username }).then((res) => {
            //   if (res != null) {
            //     this.popup.isSuccess = true;
            //     this.openPopup('등록한 이메일로 임시 비밀번호가 발급 되었습니다.');
            //     // todo : 임시 비밀번호 생성 및 발송
            //   } else {
            //     this.openPopup('입력하신 아이디와 회원 정보가 존재하지 않습니다.');
            //     return;
            //   }
            // });
        },
    },
    openPopup(txt: string) {
        this.popup.isPopup = true;
        this.popup.isPopup2 = true;
        this.popup.popupTxt = txt;
        document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
    },
    closePopup() {
        this.popup.isPopup = false;
        this.popup.isPopup2 = false;
        document.body.classList.remove("scrollLock"); // 팝업 닫을 시
    },
    goLogin() {
        if (this.popup.isSuccess) {
            this.$router.push('/');
        }
    },
}
</script>

<style scoped></style>
