<template>
  <header class="header-wrap">
    <h1 class="logo"><router-link to="/">REborn Partners</router-link></h1>
    <ul class="hd_rightBtn">
      <li class="partner_group">
        <Select :options="selectOption1" name="selectOption1" id="selectOption1" class="head_select" :default="'신속 렌트카'" />
      </li>
      <li class="user">
        <span class="user_id">{{ userid }}</span> 님
      </li>
      <li class="logout"><router-link to="/">{{ logInfo }}</router-link></li>
      <li class="pwChange"><button>비밀번호 변경</button></li>
    </ul>
  </header>
</template>

<script lang="ts">
import Select from '../../components/layout/Select.vue'

  export default {
    name: 'Header',
    components: {
      Select,
    },
    data() {
      return {
        userid:'reborn2',
        logInfo:'로그아웃',

        selectOption1: [
          { label: '리스트01', value: 'default' },
          { label: '리스트02', value: 'opt1' },
          { label: '리스트03', value: 'opt2' },
          { label: '리스트04', value: 'opt3' },
        ],
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
    },
  };
</script>

<style>
</style>
