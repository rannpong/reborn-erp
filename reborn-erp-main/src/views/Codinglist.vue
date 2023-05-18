<template>
  <div class="tbWrap">
    <h3>고객센터</h3>
    <table>
      <thead>
        <tr>
          <th>NO</th>
          <th>1 Depth</th>
          <th>2 Depth</th>
          <th>파일 명</th>
          <th>작업자</th>
          <th>작업일</th>
          <th>수정일</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="no"></td>
          <td>join</td>
          <td>-</td>
          <td><router-link to="/join">JoinView.vue</router-link></td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'codinglist',
    components: {},
    data() {},
    setup() {},
    created() {},
    methods: {},
    unmounted() {},
  };
</script>
<style scope>
* {margin: 0;padding: 0;font-family: '맑은 고딕', 'Malgun Gothic', sans-serif; }
.tbWrap {padding: 2rem; }
.guideHeader h1 {padding: 20px 20px;font-size: 23px; }
.guideHeader .g_gnb {position: relative;padding: 0; }
.guideHeader .g_gnb .gnbList {position: relative;padding-left: 15px;background: #0463ce; }
.guideHeader .g_gnb .gnbList li {display: inline-block;*display: inline;*zoom: 1;width: auto;padding-top: 7px; }
.guideHeader .g_gnb .gnbList li > a {position: relative;display: block;height: 46px;padding: 0 20px;color: #fff;font-size: 18px;line-height: 45px;border-radius: 5px 5px 0 0;text-decoration: none; }
.guideHeader .g_gnb .gnbList li > a:before {content: '';display: block;position: absolute;top: 50%;left: 0;width: 1px;height: 14px;margin-top: -7px;background: rgba(255, 255, 255, 0.7); }
.guideHeader .g_gnb .gnbList li:first-child a:before,
.guideHeader .g_gnb .gnbList li.on + li a:before {display: none; }
.guideHeader .g_gnb .gnbList li.on > a {color: #000;font-weight: 600;background: #fff; }
.listWrap {padding: 30px; }
.listWrap > ul,
.listWrap ol {font-size: 0; }
.listWrap > ul > li,
.listWrap > ol > li {display: inline-block;padding: 0 12px;font-size: 15px; }
.listWrap > ul > li:first-child {padding-left: 0; }
.listWrap > ul > li:last-child {border-left: 1px solid #777; }
.listWrap > ol {padding: 30px;margin-top: 35px;background-color: #ddd; }
.listWrap > ol > li {display: block;margin-bottom: 15px; }
.listWrap > ol > li:last-child {margin-bottom: 0; }
h3 {margin: 50px 0 10px;color: #444;font-size: 18px; }
table {table-layout: fixed;word-break: break-all;border-collapse: collapse;border-spacing: 0;box-sizing: border-box;width: 100%; }
table th,
table td {padding: 3px 8px;font-weight: normal; }
table th {border: 1px solid #ccc;background-color: #eee;font-size: 16px; }
table td {border: 1px solid #ccc;font-size: 15px; }
table td.no {text-align: center; }
/*table td:nth-child(n+5):nth-child(-n+7){text-align: center;}*/
a {color: #222; }
/*삭제파일 tr 설정*/
tr.cancelFile {text-decoration: line-through;color: #ccc; }
.red {color: red; }
table th:nth-child(1) {width: 50px; }
table th:nth-child(2),
table th:nth-child(3) {width: 13%; }
table th:nth-child(4) {width: 20%; }
table th:nth-child(5),
table th:nth-child(6),
table th:nth-child(7) {width: 100px; }
table td:nth-child(5),
table td:nth-child(6),
table td:nth-child(7) {text-align: center; }
table th:nth-child(8) {width: 20%; }
.listWrap h3:first-child {margin-top: 30px; }
</style>
