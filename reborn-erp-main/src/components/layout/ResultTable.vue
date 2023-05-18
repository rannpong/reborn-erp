<template>
  <div class="search-table-wrap">
    <div class="search-table">
      <table>
        <thead>
          <tr>
            <th scope="col">신청일시</th>
            <th scope="col">업체명</th>
            <th scope="col">신청결과</th>
            <th scope="col">조회</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.result">
            <td data-label="신청일시">{{ item.date }}</td>
            <td data-label="업체명">{{ item.company }}</td>
            <td data-label="신청결과">
              <span :class="[item.paused ? 'useTxt' : 'pauseTxt']">
                {{ item.result }}
              </span>
            </td>
            <td data-label="조회">
              <router-link to="/" class="btn-search">
                {{ item.search }}
              </router-link>
              <!-- 상세페이지로 이동합니다 -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="errorMsg">
      <p class="err-box err-txt03">
        리본 파트너즈 신청 내역은 고객정보 보호를 위해 신청일 기준으로 2개월 후
        <br class="br-md" />
        자동 삭제되며, 삭제 후 조회가 불가능합니다.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  //name: 'table02',
  data() {
    return {
      items: [
        {
          date: '2023-02-21',
          company: '블루웨이브 컨설팅',
          result: '반려',
          search: '조회하기',
          paused: false,
        },
        {
          date: '2023-02-20',
          company: '블루웨이브 컨설팅',
          result: '심사중',
          search: '조회하기',
          paused: true,
        },
        {
          date: '2023-02-20',
          company: '블루웨이브 컨설팅',
          result: '접수중',
          search: '조회하기',
          paused: true,
        },
      ],
    }
  },
}
</script>

<style></style>
