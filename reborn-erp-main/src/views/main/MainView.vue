<template>
  <div class="subBody main">
    <h2>{{ contTit }}</h2>
    <div class="dashboard_list_wrap top">
      <ul class="dashboard_list">
        <li>
          <h2>{{ dashListTit1 }}</h2>
          <div class="chartArea bar">
            <Charts :options="chartOptions1" :series="chartseries1" />
          </div>
          <ul class="rsvList_info">
            <li>
              <p>신규예약</p>
              <div class="rsvCount">
                <span class="count">121</span>
                <div class="status_wrap up">
                  <span class="status_per up"></span>
                  <em>21%</em>
                </div>
              </div>
            </li>
            <li>
              <p>예약취소</p>
              <div class="rsvCount">
                <span class="count">10</span>
                <div class="status_wrap down">
                  <span class="status_per down"></span>
                  <em>-100%</em>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h2>{{ dashListTit2 }}</h2>
          <div class="chartArea">
            <Charts :options="chartOptions2" :series="chartseries2" />
          </div>
          <ul class="crtSts_info">
            <li>
              <span class="count">128</span>
              <em>출고예정</em>
            </li>
            <li>
              <span class="count">135</span>
              <em>금일출고</em>
            </li>
          </ul>
        </li>
        <li>
          <h2>{{ dashListTit3 }}</h2>
          <div class="chartArea">
            <Charts :options="chartOptions3" :series="chartseries3" />
          </div>
          <ul class="crtSts_info">
            <li>
              <span class="count">77</span>
              <em>반납예정</em>
            </li>
            <li>
              <span class="count">121</span>
              <em>금일반납</em>
            </li>
          </ul>
        </li>
        <li>
          <h2>{{ dashListTit4 }}</h2>
          <div class="chartArea">
            <Charts :options="chartOptions4" :series="chartseries4" />
          </div>
          <ul class="crtSts_info">
            <li>
              <span class="count">122</span>
              <em>운행대수</em>
            </li>
            <li>
              <span class="count">240</span>
              <em>보유대수</em>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="dashboard_list_wrap bottom">
      <ul class="dashboard_list">
        <li>
          <h3>{{ infoListTit01 }}</h3>
          <div class="tblScroll">
            <table class="data-table-ty02">
              <caption>{{ tblTit01 }}</caption>
              <colgroup>
                <col style="width:18%;">
                <col style="width:30%;">
                <col style="width:24%;">
                <col class="mo_hide">
              </colgroup>
              <thead>
                <tr :key="i" v-for="(tblItem, i) in tblHeadList">
                  <th class="t_center">{{ tblItem.startTime }}</th>
                  <th class="t_center">{{ tblItem.carType }}</th>
                  <th class="t_center">{{ tblItem.rsvName }}</th>
                  <th class="t_center mo_hide">{{ tblItem.etc }}</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="i" v-for="(tblItem, i) in tblBodyList">
                  <td>{{ tblItem.startTime }}</td>
                  <td>{{ tblItem.carType }}</td>
                  <td>{{ tblItem.rsvName }}</td>
                  <td class="mo_hide">{{ tblItem.etc }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <h3>{{ infoListTit02 }}</h3>
          <div class="tblScroll">
            <table class="data-table-ty02">
              <caption>{{ tblTit01 }}</caption>
              <colgroup>
                <col style="width:18%;">
                <col style="width:30%;">
                <col style="width:24%;">
                <col class="mo_hide">
              </colgroup>
              <thead>
                <tr :key="i" v-for="(tblItem, i) in tblHeadList02">
                  <th class="t_center">{{ tblItem.startTime }}</th>
                  <th class="t_center">{{ tblItem.carType }}</th>
                  <th class="t_center">{{ tblItem.rsvName }}</th>
                  <th class="t_center mo_hide">{{ tblItem.etc }}</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="i" v-for="(tblItem, i) in tblBodyList02">
                  <td>{{ tblItem.startTime }}</td>
                  <td>{{ tblItem.carType }}</td>
                  <td>{{ tblItem.rsvName }}</td>
                  <td class="mo_hide">{{ tblItem.etc }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
      </ul>
    </div>
  </div><!-- //subBody -->

</template>

<script lang="ts">
import Charts from '../../components/layout/Charts.vue';


  export default {
    name: 'MainView',
    components: {
      Charts,
    },
    data() {
      return {
        contTit: '메인 대시보드',

        // top
        dashListTit1: '신규 예약 및 취소 정보',
        
        chartOptions1: {
          chart: {
            type: 'bar',
            width: '100%',
            height: 300,
            toolbar: {
              show: false, // 차트 이미지로 저장하는 기능
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          xaxis: {
            labels: { show: false }, // x축 텍스트
            axisTicks: { show: false }, // 눈금선
            // axisBorder: { show: false }, // 그래프 0점 선
            // categories: ['','','','','','','']
          },
          yaxis: { show: false }, // y축 텍스트
          grid: { show: false }, // grid 선
        },
        chartseries1: [{
          name: '일주일간 신규 예약 건수',
          data: [5, 0, 40, 10, 50, 20, 30]
        }],


        dashListTit2: '출고현황',

        chartOptions2: {
          chart: {
            type: 'radialBar',
            toolbar: {
              show: false, // 차트 이미지로 저장하는 기능
            },
          },

          xaxis: { 
            tickPlacement: "between",
          },

          // offsetY: -20,
          sparkline: {
            enabled: true
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              hollow: {
                margin: 15,
                size: "60%"
              },
              track: {
                background: "#fff0d6",
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  show: true,
                  // fontSize: "40px",
                  // color: "#101010",
                  // fontWeight: 'bold',
                  offsetY: -10,
                },
              },
            },
          },
          fill: {
            colors: ['#ffb536']
          },
          stroke: {
            show: false,
          },
        },
        chartseries2: [29],


        dashListTit3: '반납현황',

        chartOptions3: {
          chart: {
            type: 'radialBar',
            toolbar: {
              show: false, // 차트 이미지로 저장하는 기능
            },
          },
          // offsetY: -20,
          sparkline: {
            enabled: true
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              hollow: {
                margin: 15,
                size: "60%"
              },
              track: {
                background: "#dae3fc",
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  show: true,
                  fontSize: "40px",
                  color: "#101010",
                  fontWeight: 'bold',
                  offsetY: -15
                },
              },
            },
          },
          fill: {
            colors: ['#4975ef']
          },
          stroke: {
            show: false,
          },
        },
        chartseries3: [52],
        
        
        dashListTit4: '운행현황',

        chartOptions4: {
          chart: {
            type: 'radialBar',
            toolbar: {
              show: false, // 차트 이미지로 저장하는 기능
            },
          },
          // offsetY: -20,
          sparkline: {
            enabled: true
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              hollow: {
                margin: 15,
                size: "60%"
              },
              track: {
                background: "#ffdde1",
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  show: true,
                  fontSize: "40px",
                  color: "#101010",
                  fontWeight: 'bold',
                  offsetY: -15
                },
              },
            },
          },
          fill: {
            colors: ['#ff5869']
          },
          stroke: {
            show: false,
          },
        },
        chartseries4: [75],

        // bottom
        infoListTit01: '출고리스트',
        tblTit01: '출고리스트',
        tblHeadList: [
          {
            startTime: '출고시간',
            carType: '차종',
            rsvName: '예약자',
            etc: '비고',
          }
        ],
        tblBodyList: [
          {
            startTime: '10:30',
            carType: 'Corolla Axio',
            rsvName: '임명균',
            etc: '',
          },
          {
            startTime: '11:00',
            carType: 'TOYOTA YARiS',
            rsvName: '홍길동',
            etc: '',
          },
          {
            startTime: '11:30',
            carType: 'MAZDA2',
            rsvName: '이아무개',
            etc: '',
          },
        ],

        infoListTit02: '반납리스트',
        tblTit02: '반납리스트',
        tblHeadList02: [
          {
            startTime: '반납시간',
            carType: '차종',
            rsvName: '예약자',
            etc: '비고',
          }
        ],
        tblBodyList02: [
          {
            startTime: '10:30',
            carType: 'Corolla Axio',
            rsvName: '임명균',
            etc: '',
          },
          {
            startTime: '11:00',
            carType: 'TOYOTA YARiS',
            rsvName: '홍길동',
            etc: '',
          },
          {
            startTime: '11:30',
            carType: 'MAZDA2',
            rsvName: '이아무개',
            etc: '',
          },
        ],
      };
    },
    mounted() {},
    methods: {},
  };
</script>

<style scoped></style>
