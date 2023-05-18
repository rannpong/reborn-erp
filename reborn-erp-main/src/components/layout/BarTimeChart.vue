<template>
  <div class="chart-box">
    <canvas ref="BarTimeChart" :height="height"></canvas>
  </div>
</template>

<script lang="ts">
import Chart from 'chart.js/auto'
import 'chartjs-adapter-luxon'

let chart

//npm i vue-chartjs chart.js
//npm install luxon chartjs-adapter-luxon --save     //설치 명령어

export default {
  name: 'BarTimeChart',
  components: {
    Chart,
  },
  props: {
    height: {
      type: String,
    },
  },
  data: () => ({
    type: 'bar',
    data: {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '1',
        '2',
        '3',
        '4',
        '5',
        '1',
        '2',
        '3',
        '4',
        '5',
      ],
      datasets: [
        //첫번째 데이터
        {
          label: '예약',
          data: [
            //시간
            [0.5, 15.5],
            [0, 0],
            [4.2, 11.8],
            [0, 0],
            [9, 11.5],
          ],
          backgroundColor: '#00d8ba',
          barPercentage: 0.5,
          borderColor: '#eee',
          borderWidth: 1,
          borderRadius: 12,
          borderSkipped: false,
        },
        {
          label: '오버부킹',
          data: [
            //시간
            [0, 0],
            [0.9, 2.5],
            [0, 0],
            [0, 0],
            [0, 0],
          ],
          backgroundColor: '#ff5869',
          barPercentage: 0.5,
          borderColor: '#eee',
          borderWidth: 1,
          borderRadius: 12,
          borderSkipped: false,
        },
        {
          label: '보류',
          data: [
            //시간
            [0, 0],
            [6, 9],
            [0, 0],
            [0, 0],
            [0, 0],
          ],
          backgroundColor: '#9bafff',
          barPercentage: 0.5,
          borderColor: '#eee',
          borderWidth: 1,
          borderRadius: 12,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          min: 0,
          max: 16,
          position: 'top',
          //stacked: true,
          ticks: {
            stepSize: 1,
            callback: (val, index) => {
              let hour = val + 7
              let hourLabel = ''
              if (hour < 12) {
                hourLabel = `${hour} PM`
              }
              if (hour > 12) {
                hour = hour - 12
                hourLabel = `${hour} AM`
              }
              if (hour === 12) {
                hourLabel = `${hour} MN`
              }
              return hourLabel
            },
          },
        },
        x2: {
          position: 'top',
          type: 'time',
          time: {
            unit: 'day',
          },
          grid: {
            tickColor: '#ccc',
            borderColor: '#ccc',
            tickLength: 12,
          },
          ticks: {
            //display: false,
          },
        },
        y: {
          afterFit: (ctx) => {
            //console.log(ctx)
            ctx.width += 20
          },
          type: 'category',
          beginAtZero: true,
          stacked: true,
          ticks: {
            stepSize: 1,
          },
        },
        y2: {
          labels: [
            'MAZDA2',
            '올 뉴 모닝 (17년~)(휘)',
            '더 뉴 K5 2세대(LPG)',
            // 'G4 렉스턴',
            // 'F430 4.3 V8',
          ],
          grid: {
            drawOnChartArea: false,
          },
        },
      },
      plugins: {
        tooltip: {
          yAlign: 'bottom',
          //툴팁대신 팝업창 혹은 다른 툴팁 띄우는 방법 찾아보기
          tooltip: {
            callbacks: {
              title: (tooltipItem) => {
                const splitArray = tooltipItem[0].label.split(',')
                return splitArray[tooltipItem[0].datasetIndex]
              },
            },
          },
        },
        legend: {
          //display: false,
        },
      },
    },
  }),
  watch: {},
  async mounted() {
    this.$nextTick(function () {
      this.createChart()
    })
    // this.createChart()
  },
  methods: {
    createChart() {
      if (chart !== undefined) {
        chart.destroy()
      }

      chart = new Chart(this.$refs.BarTimeChart, {
        type: 'bar',
        data: this.data,
        options: this.options,
      })

      chart.update()
    },
  },
}
</script>

<style></style>
