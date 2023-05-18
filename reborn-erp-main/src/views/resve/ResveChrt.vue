<template>
  <div class="subBody reservation05">
    <h2>{{ contTit }}</h2>

    <form action="">
      <div class="searchBox">
        <div class="searchArea">
          <table>
            <colgroup>
              <col style="" />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <div class="flex-wrap">
                    <div class="date-input-wrap">
                      <DatePicker></DatePicker>
                      <span class="date_tilde block">부터</span>
                      <Select
                        :options="selectOption1"
                        name="selectOption1"
                        id="selectOption1"
                        :default="'5일'"
                      />
                    </div>
                    <Select
                      :options="selectOption2"
                      name="selectOption2"
                      id="selectOption2"
                      :default="'전체'"
                    />
                    <Select
                      :options="selectOption3"
                      name="selectOption3"
                      id="selectOption3"
                      :default="'차종'"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="color-palette-wrap">
          <div class="color-wrap">
            <p class="color-pastel-green">예약</p>
            <p class="color-pastel-red">오버부킹</p>
            <p class="color-pastel-blue">보류</p>
          </div>
        </div>
        <div class="btn-search-wrap">
          <div class="btn-wrap">
            <button class="btn sbtn btn_bg02">검색</button>
          </div>
        </div>
      </div>
      <div class="data-wrap">
        <BarTimeChart height="650px"></BarTimeChart>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Select from '../../components/layout/Select.vue'
import DatePicker from '../../components/layout/DatePicker.vue'
import BarTimeChart from '../../components/layout/BarTimeChart.vue'

export default {
  name: 'ResveChrt',
  components: {
    Select,
    DatePicker,
    BarTimeChart,
  },
  data() {
    return {
      contTit: '예약차트',
      height: '',
      //날짜선택
      selectOption1: [
        { label: '5일', value: 'opt1' },
        { label: '10일', value: 'opt2' },
        { label: '20일', value: 'opt3' },
        { label: '30일', value: 'opt4' },
      ],
      //전체
      selectOption2: [
        { label: '잡채', value: 'default' },
        { label: '전체', value: 'default' },
      ],
      //차종
      selectOption3: [
        { label: 'MAZDA2', value: 'opt1' },
        { label: '올 뉴 모닝 (17년~)(휘)', value: 'opt2' },
        { label: '더 뉴 K5 2세대(LPG)', value: 'opt3' },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped></style>
