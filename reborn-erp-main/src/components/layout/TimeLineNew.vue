<template>
  <div class="subBody chart-wrap">
    <h2>{{ contTit }}</h2>
    <div class="searchBox chart-search">
      <div class="input-wrap">
        <div class="date-input-wrap">
          <DatePicker v-model="date" :format="format" ref="datePicker"></DatePicker>
        </div>
        <em>부터</em>
        <Select :options="selectOption1" ref="period" name="selectOption1" id="selectOption1" :default="'5일'" class="" />
        <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'전체'" class="" />
        <Select :options="selectOption3" name="selectOption3" id="selectOption3" :default="'차종'" class="" />
      </div>
      <div class="chart-legend">
        <em class="reserve">예약</em>
        <em class="over">오버부킹</em>
        <em class="hold">보류</em>
      </div>
      <div class="btn-wrap">
        <button class="btn sbtn btn_bg02" @click="searchTimeline">검색</button>
      </div>
    </div>
    <!-- 상단 검색 고정 영역 -->
    <div class="timelne">
      <div class="date-wrap">
        <div class="car-type">차종</div>
        <div class="date">
          <table>
            <tr>
              <td rowspan="100%" class="car-num">보유</td>
              <td class="month" colspan="100%">{{ timeline.month }}월</td>
            </tr>
            <tr>
              <td>
                <div class="day-wrap">
                  <dl class="day-txt" :class="isVisibleTime ? '' : 'time-none'" v-for="day in timeline.days" :key="day">
                    <dt :class="isClassWeekend(day)">{{ day }}</dt>
                    <dd v-show="isVisibleTime">
                      <span v-for="hour in timeline.hours" :key="hour">{{ hour }}</span>
                    </dd>
                  </dl>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- //상단 검색 고정 영역 -->
      <!-- 챠트 노출 영역 -->
      <div class="reserve-chart" v-for="(item, i) in itemList" :key="i">
        <span class="car-name">{{ item.subtitle }}</span>
        <div class="chart">
          <table>
            <thead>
              <tr>
                <td class="wanted">수배</td>
                <td class="wanted-bar" colspan="100%"></td>
              </tr>
            </thead>
            <tbody v-for="(child, cdIdx) in item.children" :key="cdIdx">
              <tr>
                <td class="wanted-num">{{ cdIdx + 1 }}</td>
                <td>
                  <div class="day-wrap">
                    <dl class="day-txt" v-for="day in timeline.days" :key="day">
                      <dd>
                        <span v-for="hour in timeline.hours" :key="hour">&nbsp</span>
                      </dd>
                    </dl>
                    <span class="mark reserv" style="width: 120px; left: 250px">홍길동 - 제주패스sdfsdfasdad</span>
                  </div>
                </td>
              </tr>
              <!-- <tr>
                <td class="wanted-num">2</td>
                <td>
                  <div class="day-wrap">
                    <dl class="day-txt" v-for="day in timeline.days" :key="day">
                      <dd>
                        <span v-for="hour in timeline.hours" :key="hour">&nbsp</span>
                      </dd>
                    </dl>
                    <span class="mark overbook" style="width: 50px; left: 750px">홍길동 - 제주패스sdfsdfasdad</span>
                    <span class="mark hold" style="width: 80px; left: 350px">홍길동 - 제주패스sdfsdfasdad</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="wanted-num">3</td>
                <td>
                  <div class="day-wrap">
                    <dl class="day-txt" v-for="day in timeline.days" :key="day">
                      <dd>
                        <span v-for="hour in timeline.hours" :key="hour">&nbsp</span>
                      </dd>
                    </dl>
                  </div>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
      <div class="reserve-chart" v-for="(item, i) in itemList" :key="i">
        <span class="car-name">{{ item.subtitle }}</span>
        <div class="chart">
          <table>
            <thead>
              <tr>
                <td class="wanted">수배</td>
                <td class="wanted-bar" colspan="100%"></td>
              </tr>
            </thead>
            <tbody v-for="(child, cdIdx) in item.children" :key="cdIdx">
              <tr>
                <td class="wanted-num">{{ cdIdx + 1 }}</td>
                <td>
                  <div class="day-wrap">
                    <dl class="day-txt" v-for="day in timeline.days" :key="day">
                      <dd>
                        <span v-for="hour in timeline.hours" :key="hour">&nbsp</span>
                      </dd>
                    </dl>
                    <span class="mark reserv" style="width: 120px; left: 250px">홍길동 - 제주패스sdfsdfasdad</span>
                  </div>
                </td>
              </tr>
              <!-- <tr>
                <td class="wanted-num">2</td>
                <td>
                  <div class="day-wrap">
                    <dl class="day-txt" v-for="day in timeline.days" :key="day">
                      <dd>
                        <span v-for="hour in timeline.hours" :key="hour">&nbsp</span>
                      </dd>
                    </dl>
                    <span class="mark overbook" style="width: 50px; left: 750px">홍길동 - 제주패스sdfsdfasdad</span>
                    <span class="mark hold" style="width: 80px; left: 350px">홍길동 - 제주패스sdfsdfasdad</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="wanted-num">3</td>
                <td>
                  <div class="day-wrap">
                    <dl class="day-txt" v-for="day in timeline.days" :key="day">
                      <dd>
                        <span v-for="hour in timeline.hours" :key="hour">&nbsp</span>
                      </dd>
                    </dl>
                  </div>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
      <!-- //챠트 노출 영역 -->
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import Input from '../../components/layout/Input.vue';
  import Select from '../../components/layout/Select.vue';
  import DatePicker from '../../components/layout/DatePicker.vue';
  import TimeLine from '../../lib/timeline';

  export default {
    name: 'TimeLine',
    components: {
      Input,
      Select,
      DatePicker,
    },
    props: {},
    data() {
      return {
        contTit: '예약차트',

        selectOption1: [
          { label: '5일', value: 'default' },
          { label: '10일', value: 'opt1' },
          { label: '20일', value: 'opt2' },
          { label: '30일', value: 'opt2' },
        ],

        selectOption2: [
          { label: '전체', value: 'default' },
          { label: '옵션1', value: 'opt1' },
          { label: '옵션2', value: 'opt2' },
          { label: '옵션3', value: 'opt2' },
        ],

        selectOption3: [
          { label: '차종', value: 'default' },
          { label: '옵션1', value: 'opt1' },
          { label: '옵션2', value: 'opt2' },
          { label: '옵션3', value: 'opt2' },
        ],

        itemList: [
          {
            id: '200',
            subtitle: 'Ek Wagon',
            content: null,
            color: null,
            bcncNm: null,
            corpVhcleCo: 100,
            children: [
              {
                index: 0,
                subtitle: '-結トラベル-',
                beginDt: '2023-05-15 00:00:00',
                endDt: '2023-05-19 23:59:59',
                vhcleNo: null,
                resconNo: '',
                startX: 0.0,
                endX: 0.9998611,
                rsvctmNm: null,
                bcncNm: '結トラベル',
                bcncCode: 'JPDEMOBC56102213',
                type: 'block_bg',
                recKind: null,
                tmprYn: null,
                attendYn: null,
                wrhousngYn: null,
                originType: 'block_bg',
              },
              {
                index: 1,
                subtitle: '-結トラベル-',
                beginDt: '2023-05-15 00:00:00',
                endDt: '2023-05-19 23:59:59',
                vhcleNo: null,
                resconNo: '',
                startX: 0.0,
                endX: 0.9998611,
                rsvctmNm: null,
                bcncNm: '結トラベル',
                bcncCode: 'JPDEMOBC56102213',
                type: 'block_bg',
                recKind: null,
                tmprYn: null,
                attendYn: null,
                wrhousngYn: null,
                originType: 'block_bg',
              },
              {
                index: 2,
                subtitle: '-結トラベル-',
                beginDt: '2023-05-15 00:00:00',
                endDt: '2023-05-19 23:59:59',
                vhcleNo: null,
                resconNo: '',
                startX: 0.0,
                endX: 0.9998611,
                rsvctmNm: null,
                bcncNm: '結トラベル',
                bcncCode: 'JPDEMOBC56102213',
                type: 'block_bg',
                recKind: null,
                tmprYn: null,
                attendYn: null,
                wrhousngYn: null,
                originType: 'block_bg',
              },
              {
                index: 3,
                subtitle: '-結トラベル-',
                beginDt: '2023-05-15 00:00:00',
                endDt: '2023-05-19 23:59:59',
                vhcleNo: null,
                resconNo: '',
                startX: 0.0,
                endX: 0.9998611,
                rsvctmNm: null,
                bcncNm: '結トラベル',
                bcncCode: 'JPDEMOBC56102213',
                type: 'block_bg',
                recKind: null,
                tmprYn: null,
                attendYn: null,
                wrhousngYn: null,
                originType: 'block_bg',
              },
              {
                index: 4,
                subtitle: '-結トラベル-',
                beginDt: '2023-05-15 00:00:00',
                endDt: '2023-05-19 23:59:59',
                vhcleNo: null,
                resconNo: '',
                startX: 0.0,
                endX: 0.9998611,
                rsvctmNm: null,
                bcncNm: '結トラベル',
                bcncCode: 'JPDEMOBC56102213',
                type: 'block_bg',
                recKind: null,
                tmprYn: null,
                attendYn: null,
                wrhousngYn: null,
                originType: 'block_bg',
              },
              {
                index: 5,
                subtitle: 'test - セルフ - ',
                beginDt: '2023-05-15 11:00:00',
                endDt: '2023-05-17 11:00:00',
                vhcleNo: null,
                resconNo: '23051575869',
                startX: 0.047058824,
                endX: 0.44705883,
                rsvctmNm: 'test',
                bcncNm: 'セルフ',
                bcncCode: 'JPDEMOBC56101966',
                type: 'booking',
                recKind: 'R',
                tmprYn: null,
                attendYn: 'N',
                wrhousngYn: null,
                originType: 'booking',
              },
            ],
          },
        ],
      };
    },
    methods: {},
    setup() {
      const timeline = reactive({
        init: new TimeLine(),
        month: '',
        days: '',
        hours: '',
      });

      const datePicker = ref('');
      const period = ref('');
      const isVisibleTime = ref(true);

      // datePicker format
      const date = ref(new Date());
      const format = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
        return `${year}-${month}-${day}`;
      };

      // timeline grid calendar
      const setTimeLine = (date, period) => {
        timeline.init.createCalendar({
          date: date,
          period: period,
        });

        timeline.month = timeline.init.Month();
        timeline.days = timeline.init.Days();
        timeline.hours = timeline.init.Hours();

        if (period === '5') {
          //추가
          isVisibleTime.value = true;
        } else {
          isVisibleTime.value = false;
        }
      };

      // current datepicker date
      const currentDate = () => {
        let getDate = format(datePicker.value.date).replace(/-/g, '');
        return getDate;
      };

      // current period seleted
      const currentPeriod = () => {
        return period.value.selected.replace('일', '');
      };

      // 검색
      const searchTimeline = () => {
        setTimeLine(currentDate(), currentPeriod());
      };

      // 토, 일 class add
      const isClassWeekend = (val) => {
        if (val.indexOf('토') > -1) {
          return 'sat';
        } else if (val.indexOf('일') > -1) {
          return 'sun';
        }
      };

      onMounted(() => {
        setTimeLine(currentDate(), currentPeriod());
      });

      return {
        timeline,
        datePicker,
        period,
        date,
        setTimeLine,
        format,
        currentDate,
        currentPeriod,
        searchTimeline,
        isClassWeekend,
        isVisibleTime,
      };
    },
  };
</script>

<style scoped>
  .condition_booking {
    /* 예약 */
    background-color: #00b19d;
    z-index: 6;
    opacity: 1;
  }
  .condition_over {
    /* 오버부킹 */
    background-color: #ff0000;
    z-index: 10;
    opacity: 0.7;
  }
  .condition_hold {
    /* 보류 */
    background-color: #c700b5;
    z-index: 2;
    opacity: 1;
  }
</style>
