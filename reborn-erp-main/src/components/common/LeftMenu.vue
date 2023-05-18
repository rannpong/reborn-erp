<template>
  <div class="leftMenu" v-bind:class="{ lnbOpen: lnbMenu }">
    <div class="menu_top_wrap">
      <h1 class="menuBtn" @click="lnbMenu = !lnbMenu"></h1>
      <ul class="lm_right_box">
        <li class="pwChange"><button>비밀번호 변경</button></li>
        <li class="logout">
          <router-link to="">{{ logInfo }}</router-link>
        </li>
      </ul>
    </div>
    <div class="gnb-wrap" @mouseover="gnbHoverStart" @mouseleave="gnbHoverEnd">
      <h3 class="user">
        <span class="user_id">{{ userid }}</span> 님
      </h3>
      <ul class="gnb">
        <li>
          <!-- <router-link to="/admin/admin01" class="gnb-icon gnb-icon01 menu-active"><span>예약</span></router-link> -->
          <router-link to="" class="gnb-icon gnb-icon01"><span>예약</span></router-link>
          <ul class="subMenu">
            <li>
              <router-link to="/resve/ApplyList"><span>예약접수</span></router-link>
            </li>
            <li>
              <router-link to="/resve/ResveList"><span>예약/대기현황</span></router-link>
            </li>
            <li>
              <router-link to="/resve/ResveChrt"><span>예약차트</span></router-link>
            </li>
            <li>
              <router-link to="/resve/ResveTerm"><span>예약현황</span></router-link>
            </li>
            <li>
              <router-link to="/resve/SaleAnalysis"><span>매출분석</span></router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="" class="gnb-icon gnb-icon02"><span>청구관리</span></router-link>
          <ul class="subMenu">
            <li>
              <router-link to="/Invoice"><span>사전청구서</span></router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="" class="gnb-icon gnb-icon03"><span>영업관리</span></router-link>
          <ul class="subMenu">
            <li>
              <router-link to="/pdDcrt/PdDcrt"><span>할인율 설정</span></router-link>
            </li>
            <li>
              <router-link to="/pdDcrt/LendChrge"><span>대여요금관리</span></router-link>
            </li>
            <li>
              <router-link to="/pdDcrt/InsrncChrge"><span>보험요금관리</span></router-link>
            </li>
            <li>
              <router-link to="/pdDcrt/InsrncInfo"><span>보험정보관리</span></router-link>
            </li>
            <li>
              <router-link to="/pdDcrt/HolidayStup"><span>공휴일설정</span></router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="" class="gnb-icon gnb-icon04"><span>기초자료</span></router-link>
          <ul class="subMenu">
            <li>
              <router-link to="/basic/Vhcty"><span>차량관리</span></router-link>
            </li>
            <li>
              <router-link to="/basic/Vhcle"><span>차종분류</span></router-link>
            </li>
            <li>
              <router-link to="/basic/VhcleOption"><span>옵션관리</span></router-link>
            </li>
            <li>
              <router-link to="/basic/AlnPlc"><span>배차장소</span></router-link>
            </li>
            <!-- <li>
              <router-link to=""><span>입금계좌</span></router-link>
            </li> -->
            <li>
              <router-link to="/basic/PaySe"><span>입금수단</span></router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="" class="gnb-icon gnb-icon05"><span>환경설정</span></router-link>
          <ul class="subMenu">
            <li>
              <router-link to="/system/CorpStup"><span>회사정보</span></router-link>
            </li>
            <li>
              <router-link to="/system/ErnStup"><span>운영환경설정</span></router-link>
            </li>
            <li>
              <router-link to="/system/User"><span>사용자관리</span></router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'LeftMenu',
    data() {
      return {
        lnbMenu: false,
        logInfo: '로그아웃',
        userid: 'rebon2',
      };
    },
    methods: {
      LnbBtn() {
        this.lnbMenu = true;
      },
      gnbHoverStart() {
        this.lnbMenu = true;
      },
      gnbHoverEnd() {
        this.lnbMenu = false;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
