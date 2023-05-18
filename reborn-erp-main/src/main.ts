import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueApexCharts from "vue3-apexcharts";

createApp(App).config.globalProperties.axios = axios //config.globalProperties : 전역 설정

createApp(App).use(store).use(router).use(VueApexCharts).mount('#app')
