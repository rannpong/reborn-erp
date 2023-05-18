<template>
  <div class="subBody dcrt00">
    <h2>{{ contTit }}</h2>

    <form action="">
      <div class="searchBox">
        <div class="searchArea">
          <table>
            <tbody>
              <tr>
                <td>
                  <div class="flex-wrap">
                    <Select
                      :options="selectOption1"
                      name="selectOption1"
                      id="selectOption1"
                      :default="'전체'"
                      class="mo_hide"
                    />
                    <div class="date-input-wrap">
                      <DateTimeLayout
                        placeholder="할인율 설정일시"
                      ></DateTimeLayout>
                      <div class="btn-wrap">
                        <button class="btn btn_bg04 icoBtnS icoPrev"></button>
                        <button class="btn btn_bg04 icoBtnS icoNext"></button>
                      </div>
                    </div>
                    <div class="frm-wrap chk_del">
                      <div class="frm">
                        <input type="checkbox" id="chkdel" />
                        <label for="chkdel">미사용 항목 제외</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="data-wrap">
        <div class="tbl-tit-wrap">
          <div class="flex-wrap">
            <div class="btn-wrap">
              <button class="btn cbtn btn_bg01">신규등록</button>
            </div>
          </div>
        </div>
        <div class="data-table-wrap reponsive-table-wrap">
          <table class="data-table-ty01 reponsive-table-ty01">
            <colgroup>
              <col class="mo_hide" width="5%" />
              <col class="mo_hide" width="25%" />
              <col class="mo_hide" width="" />
              <col class="mo_hide" width="" />
              <col class="mo_hide" width="" />
              <col class="mo_hide" width="" />
              <col class="mo_hide" width="45%" />
            </colgroup>
            <thead>
              <tr v-for="(tblData, i) in tblDataHeadList" :key="i">
                <th scope="col">{{ tblData.rsvNum }}</th>
                <th scope="col">{{ tblData.useDates }}</th>
                <th scope="col">{{ tblData.weekDays }}</th>
                <th scope="col">{{ tblData.weekEnd }}</th>
                <th scope="col">{{ tblData.holidays }}</th>
                <th scope="col">{{ tblData.carOwn }}</th>
                <th scope="col">{{ tblData.noteTxt }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="mo_hide" v-if="resultDataBodyList.length === 0">
                <td colspan="7">표시할 데이터가 없습니다.</td>
              </tr>
              <tr :key="i" v-for="(resultData, i) in resultDataBodyList">
                <td :data-label="dataLabel1" class="mo_hide">
                  {{ resultData.rsvNum }}
                </td>
                <td :data-label="dataLabel2" @click="PdDcrtDetail(i)">
                  <!-- 각각의 상세페이지로 이동 -->
                  {{ resultData.useDates }}
                </td>
                <td :data-label="dataLabel3">{{ resultData.weekDays }}</td>
                <td :data-label="dataLabel4">{{ resultData.weekEnd }}</td>
                <td :data-label="dataLabel5">{{ resultData.holidays }}</td>
                <td :data-label="dataLabel6">{{ resultData.carOwn }}</td>
                <td :data-label="dataLabel7">
                  {{ resultData.noteTxt }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="tbl-bot-wrap">
        <div class="btn-wrap align_right">
          <button class="btn cbtn btn_bg01">신규등록</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Select from '../../components/layout/Select.vue'
import DateTimeLayout from '../../components/layout/DateTimePicker.vue'

export default {
  name: 'PdDcrt',
  components: {
    Select,
    DateTimeLayout,
  },
  data() {
    return {
      contTit: '할인율 설정',
      //출발일시
      selectOption1: [
        { label: '전체', value: 'opt1' },
        { label: '출발일시', value: 'opt2' },
        { label: '차종', value: 'opt3' },
      ],
      //table head data
      tblDataHeadList: [
        {
          rsvNum: '구분',
          useDates: '사용기간',
          weekDays: '주중',
          weekEnd: '주말',
          holidays: '연휴',
          carOwn: '자차',
          noteTxt: '비고사항',
        },
      ],
      //data-label
      dataLabel1: '구분',
      dataLabel2: '사용기간',
      dataLabel3: '주중',
      dataLabel4: '주말',
      dataLabel5: '연휴',
      dataLabel6: '자차',
      dataLabel7: '비고사항',
      //table body data
      resultDataBodyList: [
        {
          id: 'List1',
          rsvNum: '1',
          useDates: '2023-06-06 ~ 2023-07-12',
          weekDays: '80',
          weekEnd: '70',
          holidays: '0',
          carOwn: '20',
          noteTxt: '비고사항에 대한 내용이 들어가는 부분',
        },
        {
          id: 'List2',
          rsvNum: '2',
          useDates: '2023-06-06 ~ 2023-07-12',
          weekDays: '60',
          weekEnd: '75',
          holidays: '1',
          carOwn: '10',
          noteTxt: '비고사항비고사항',
        },
      ],
    }
  },
  methods: {
    //사용기간 > 상세페이지 이동
    PdDcrtDetail(i) {
      this.$router.push({
        name: 'PdDetail',
        params: {
          contentId: i,
        },
      })
    },
  },
}
</script>

<style scoped></style>
