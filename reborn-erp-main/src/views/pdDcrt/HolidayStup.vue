<template>
  <div class="subBody">
    <h2>{{ contTit }}</h2>
    <div class="holiday-wrap">
      <div class="calendar-wrap" id="calendar">
        <!-- <div class="year-month">
          <select v-model="year" @change="setYear($event)">
            <option v-for="year in yearList" :key="year" :value="year.value">
              {{ year.name }}
            </option>
          </select>

          <select v-model="month" @change="setMonth($event)">
            <option v-for="month in monthList" :key="month" :value="month.value">
              {{ month.name }}
            </option>
          </select>
        </div> -->
        <FullCalendar
          ref="calendarRef"
          :options="calendarOptions"
          id="calendar"
        />
      </div>

      <div class="schedule-list">
        <div class="info-tit-box">
          <h3 class="infoTit">일정</h3>
        </div>
        <ul>
          <li v-for="event in calendarOptions.events" :key="event.title">
            
            <p class="event-day">
              <i></i>
              <span>{{ event.start }}</span> 
              <span class="endSpace" v-if="(event.start === event.end) === false"></span>
              <span v-if="(event.start === event.end) === false">{{ event.end }}</span>
            </p>
            <span class="event-tit">{{ event.title }}</span>
            <button class="event-del">일정 삭제</button>
          </li>
        </ul>
      </div>
    </div>
  </div><!-- // subBody -->

  
  <div class="dimmed" v-show="popDimmed"></div>
  <!-- popup : 공휴일 등록 -->
  <Popup ref="popup" class="medium" v-show="holidayPop" @close="closePopup()">
    <template #popupHead>
      <h2>공휴일 설정</h2>
    </template>
    <template #popupBody>
      <table class="data-table-ty04">
        <caption>
          공휴일 설정
        </caption>
        <colgroup>
          <col style="width: 30%" />
          <col style="" />
        </colgroup>
        <tbody>
          <tr>
            <th>기간<span class="ico_essential"></span></th>
            <td class="m_border_bot_none">
              <div class="date-input-wrap">
                <DatePicker placeholder="공휴일 시작일을 선택해주세요." v-model="eventStartDay" format="yyyy-MM-dd" :chgSelect="calendarData.start" @input="(event) => (calendarData.start = event)"></DatePicker>
                <DatePicker placeholder="공휴일 종료일을 선택해주세요." v-model="eventEndDay" format="yyyy-MM-dd" :chgSelect="calendarData.end" @input="(event) => (calendarData.end = event)"></DatePicker>
              </div>
            </td>
          </tr>
          <tr>
            <th>내용<span class="ico_essential"></span></th>
            <td>
              <div class="txt-input">
                <input type="text" id="holidayName" v-model="eventValue" placeholder="공휴일명을 입력해주세요" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <span class="guide_desc err" v-if="popErr">필수 입력 항목(*)은 모두 입력해야 합니다.</span>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg01 register" @click="schRegister">등록</button>
        <!-- <button class="btn cbtn btn_bg03 cancel">삭제</button> -->
      </div>
    </template>
  </Popup>
  <!-- // popup -->
  
  <!-- popup : 등록 완료 -->
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

  <!-- popup : 공휴일 수정 -->
  <!-- <Popup ref="popup" class="medium" v-show="holidayPop" @close="closePopup()">
    <template #popupHead>
      <h2>공휴일 설정</h2>
    </template>
    <template #popupBody>
      <table class="data-table-ty04">
        <caption>
          공휴일 설정
        </caption>
        <colgroup>
          <col style="width: 30%" />
          <col style="" />
        </colgroup>
        <tbody>
          <tr>
            <th>기간<span class="ico_essential"></span></th>
            <td class="m_border_bot_none">
              <div class="date-input-wrap">
                <DatePicker placeholder="공휴일 시작일을 선택해주세요."></DatePicker>
                <span class="space-txt01 space-txt02">-</span>
                <DatePicker placeholder="공휴일 종료일을 선택해주세요."></DatePicker>
              </div>
            </td>
          </tr>
          <tr>
            <th>내용<span class="ico_essential"></span></th>
            <td>
              <div class="txt-input">
                <input type="text" id="holidayName" v-model="eventValue" placeholder="공휴일명을 입력해주세요" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <span class="guide_desc err" v-if="popErr">필수 입력 항목(*)은 모두 입력해야 합니다.</span>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg01">수정</button>
        <button class="btn cbtn btn_bg03 cancel">삭제</button>
      </div>
    </template>
  </Popup> -->
  <!-- // popup -->
  
  <!-- popup : 수정 완료 -->
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
  
  <!-- popup : 삭제 완료 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
    <template #popupBody>
      <p>삭제되었습니다.</p>
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
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  import ko from '@fullcalendar/core/locales/ko';
  import Popup from '../../components/layout/Popup.vue';
  import DatePicker from '../../components/layout/DatePicker.vue';
  import { isConstructorDeclaration } from 'typescript';

  export default {
    name: 'HolidayStup',
    components: {
      FullCalendar,
      Popup,
      DatePicker,
    },
    data() {
      return {
        contTit: '공휴일설정',

        // 달력 데이터
        calendarData: {
          start: new Date() as Date,
          end: new Date() as Date,
        },        

        
        popDimmed: false,

        holidayPop: false, // 공휴일 설정 팝업

        popErr: false,

        eventValue : '',
        eventStartDay : '',
        eventEndDay : '',

        //fullcalendar option

        // year: '2023',
        // month: '05',

        //년도 리스트
        yearList: [
          { name: '2023', value: '2023' },
          { name: '2024', value: '2024' },
          { name: '2025', value: '2025' },
          { name: '2026', value: '2026' },
        ],
        //월 리스트
        monthList: [
          { name: '1월', value: '01' },
          { name: '2월', value: '02' },
          { name: '3월', value: '03' },
          { name: '4월', value: '04' },
          { name: '5월', value: '05' },
          { name: '6월', value: '06' },
          { name: '7월', value: '07' },
          { name: '8월', value: '08' },
          { name: '9월', value: '09' },
          { name: '10월', value: '10' },
          { name: '11월', value: '11' },
          { name: '12월', value: '12' },
        ],

        calendarOptions: {
          plugins: [ dayGridPlugin, interactionPlugin ],
          initialView: 'dayGridMonth',
          headerToolbar: {
            start: '',
            center: 'prevYear,prev,title,next,nextYear',
            end: 'today',
          },
          // customButtons: {
          //   today: {
          //     text: '오늘',
          //     click: this.setToday
          //   },
          // },

          dayMaxEvents: true, // day 이벤트 max 값 개수
          locale: ko, // 한국어 설정
          // selectable: true, // 날짜 드레그 설정

          dateClick:this.handleDateSelect,

          // 달력 날짜 표시 '일' 삭제
          dayCellContent(info){
            let number = document.createElement("a")
            number.classList.add('fc-daygrid-danumber');
            number.innerHTML = info.dayNumberText.replace('일','');
            if(info.view.type === 'dayGridMonth'){
              return{
                html:number.outerHTML
              };
            }
            return{
              domNodes:[]
            }
          },

          //달력 이벤트 리스트
          events: [
            {
              title: '근로자의날',
              start: '2023-05-01',
              end: '2023-05-10',
            },
            {
              title: '대체공휴일',
              start: '2023-05-29',
              end: '2023-05-29',
            },
          ],
        },
      };
    },

    methods: {
      calendarAPI() {
        return (this.$refs.calendarRef as InstanceType<typeof FullCalendar>).getApi();
      },

      currentYear() {
        return this.calendarAPI().getDate().getFullYear();
      },

      currentMonth() {
        let month: string | number = this.calendarAPI().getDate().getMonth() + 1;
        return month < 9 ? (month = `0${month}`) : month;
      },

      // test selectbox custom : 다른 방법으로 사용하시는것이 있으면 삭제해도 무방
      setYear(e: Event) {
        let getYear = (e.target as HTMLSelectElement).value;
        let month: string | number = this.currentMonth();

        let changeYear = `${getYear}-${month}`;
        this.calendarAPI().gotoDate(changeYear);
      },
      setMonth(e: Event) {
        let getMonth = (e.target as HTMLSelectElement).value;
        let year = this.currentYear();
        let changeMonth = `${year}-${getMonth}`;
        this.calendarAPI().gotoDate(changeMonth);
      },
      setToday() {
        this.calendarAPI().today();
        this.year =  String(this.currentYear());
        this.month = String(this.currentMonth());
      },

      //날짜 클릭시 이벤트 추가 팝업창 오픈
      handleDateSelect(selectInfo) {        
        this.calendarData.start = new Date();
        this.calendarData.end = new Date();

        
        this.popDimmed = true;
        this.holidayPop = true;
        this.eventStartDay = selectInfo.dateStr;
        this.eventEndDay = selectInfo.dateStr;
        console.log(this.eventEndDay);
      },

      // 종료일 설정 : 선택한 종료일보다 하루적게 표기되는 이슈가 있음
      // eventDataTransform: function(event) {     
      //   if(event.end) {
      //     event.end = moment(event.end).add(1,'days')
      //   }
      //   return event;  
      // },

      //일정 리스트에 이벤트 추가
      schRegister() {
        //이벤트명 입력 안했을때 button action
        if (this.eventValue === '') {
          this.popErr = true;
          return false;
        }
        //이벤트명 입력 후 button action
        this.calendarOptions.events = [
          ...this.calendarOptions.events,
          {
            title: this.eventValue,
            start: this.eventStartDay,
            end: this.eventEndDay,
          }
        ];

        this.popDimmed = false;
        this.holidayPop = false;
        this.eventValue = '';
      },
      closePopup() {
        this.popDimmed = false;
        this.holidayPop = false;
      },
    },
  };
</script>

<style scoped></style>
