<template>
  <!-- header -->
  <header class="login-header">
    <h1 class="logo"><router-link to="/">REborn Partners</router-link></h1>
  </header>

  <!-- 로그인 전 -->
  <div class="login_wrap login">
    <div class="tit_img"><img src="../../assets/img/common/bg_login.png" alt="로그인 이미지" /></div>
    <h1>Login</h1>
    <div class="loginBox">
      <input type="text" placeholder="USER ID" v-model="userid" /><!-- @keyup.enter="this.login()" -->
      <input type="password" placeholder="PASSWORD" v-model="password" /><!-- @keyup.enter="this.login()" -->
      <div class="frm-wrap check">
        <div class="frm idSave" v-for="(item, index) in items" :key="index">
          <input type="checkbox" :id="'chk1_' + index" :name="'chk01' + index" v-model="saveId" />
          <label :for="'chk1_' + index">{{ item.label }}</label>
        </div>
      </div>

      <button class="btnLogin" @click="this.login()">LOGIN</button>
      <router-link to="/password" class="forgotTxt">Forgot your password?</router-link>
    </div>

    <!-- <h1>{{ $t('hello') }}</h1> -->
    <!-- <div class="language_wrap">
      <button @click="setLocale('ko')">한국어</button>
      <button @click="setLocale('ja')">日本語</button>
    </div> -->
  </div>

<!-- 
  팝업
-->

  <!-- popup : 로그인 -->
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

</template>

<script lang="ts">
  import Select from '../../components/layout/Select.vue';
  import Popup from '../../components/layout/Popup.vue';
  //import authApi from './api/authApi';

  export default {
    name: 'Login',
    components: {
      Select,
      Popup,
    },
    data() {
      return {
        userid: '',
        password: '',
        items: [{ id: 1, label: '아이디 저장' }],
        saveId: false,

        
        // login popup text
        popup: {
          popDimmed: false, // dimmed

          isPopup: false, // popup
          

          popTxt: '',
          popTxt1: '아이디를 입력하세요.',
          popTxt2: '비밀번호를 입력하세요.',
          popTxt3: '입력하신 아이디의 회원 정보가 존재하지 않습니다.',
          popTxt4: '입력하신 아이디 혹은 비밀번호가 일치하지 않습니다.',
          popTxt5: '등록된 이메일로 임시비밀번호가 발송되었습니다.',
        },
      };
    },
    computed: {},
    setup() {},
    created() {},
    mounted() {
      // this.$cookies.remove('rbptAccessToken');
      // this.$cookies.remove('rbptRefreshToken');
      // if (this.$cookies.get('rbptSaveId')) {
      //   this.userid = decodeURIComponent(window.atob(this.$cookies.get('rbptSaveId')));
      //   this.saveId = true;
      // }
    },
    unmounted() {},
    methods: {
      // login() {
      //   if (this.userid === '') {
      //     this.fnOpenPopup('아이디를 입력하세요.');
      //     return;
      //   } else if (this.password === '') {
      //     this.fnOpenPopup('비밀번호를 입력하세요.');
      //     return;
      //   }

      //   authApi.loginApi({ username: this.userid, password: this.password }).then((res) => {
      //     if (res != null) {
      //       if (this.saveId) {
      //         this.$cookies.set('rbptSaveId', window.btoa(encodeURIComponent(this.userid)), '30d');
      //       } else {
      //         this.$cookies.remove('rbptSaveId');
      //       }
      //       const tokens = res.data;
      //       this.$cookies.set('rbptAccessToken', tokens.accessToken);
      //       this.$cookies.set('rbptRefreshToken', tokens.refreshToken);
      //       this.$router.push('/admin');
      //     } else {
      //       this.isPopup = true;
      //       this.popupTxt = '입력하신 아이디 혹은 비밀번호가 일치하지 않습니다.';
      //     }
      //   });
      // },
      fnOpenPopup(txt: string) {
        this.isPopup = true;
        this.popTxt = txt;
        document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
      },
      
      closePopup() {
        this.isPopup = false;
        document.body.classList.remove("scrollLock"); // 팝업 닫을 시
      },

      // setLocale(locale) {
      //   this.$i18n.locale = locale;
      // }
    },
  };
</script>

<style scoped></style>
