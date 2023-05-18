<template>
    <apexchart ref="charts" id="chart" :height="height" :type="type" :options="options" :series="series"></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
  
export default {
  name: "ChartEx",
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    options: {
      type: Object,
      default: () => {}
    },
    series: {
      type: Object,        
      required: true
    },
    type: {
      type: String,
    },
    id: {
      type: String,
    },
    height: {
      type: String,
    },
  },
  data: function() {
    return {
      
      chartOptions: {
        chart: {
        },
      },
      chartseries: [{
        data: []
      }]
      
    };
  },
  methods: {}
};
</script>
  