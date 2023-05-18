import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/main/Login.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'main',
  //   component: MainView,
  // },
  {
    name: 'login',
    path: '/Login',
    component: () =>
      import(
        /* webpackChunkName: "home", webpackPrefetch:true */ '../views/main/Login.vue'
      ),
  },
  {
    name: 'password',
    path: '/Password',
    component: () =>
      import(
        /* webpackChunkName: "home", webpackPrefetch:true */ '../views/main/PWFind.vue'
      ),
  },
  {
    redirect: '/subLayout',
    component: () =>
      import(
        /* webpackChunkName: "home", webpackPrefetch:true */ '../views/SubLayout.vue'
      ),
    children: [
      {
        name: 'main',
        path: '/Main',
        component: () =>
          import(
            /* webpackChunkName: "home", webpackPrefetch:true */ '../views/main/MainView.vue'
          ),
      },
      // 01 예약
      {
        name: 'resve',
        path: '/resve/Apply',
        component: () =>
          import(
            /* webpackChunkName: "resve", webpackPrefetch:true */ '../views/resve/Apply.vue'
          ),
      },
      {
        path: '/resve/ApplyDetail',
        component: () =>
          import(
            /* webpackChunkName: "resve", webpackPrefetch:true */ '../views/resve/ApplyDetail.vue'
          ),
      },
      {
        path: '/resve/ApplyList',
        component: () =>
          import(
            /* webpackChunkName: "resve", webpackPrefetch:true */ '../views/resve/ApplyList.vue'
          ),
      },
      {
        path: '/resve/ResveList',
        component: () =>
          import(
            /* webpackChunkName: "resve", webpackPrefetch:true */ '../views/resve/ResveList.vue'
          ),
      },
      {
        path: '/resve/ResveChrt',
        component: () =>
          import(
            /* webpackChunkName: "resve", webpackPrefetch:true */ '../views/resve/ResveChrt.vue'
          ),
      },
      {
        path: '/resve/ResveTerm',
        component: () =>
          import(
            /* webpackChunkName: "resve", webpackPrefetch:true */ '../views/resve/ResveTerm.vue'
          ),
      },
      {
        path: '/resve/SaleAnalysis',
        component: () =>
          import(
            /* webpackChunkName: "resve", webpackPrefetch:true */ '../views/resve/SaleAnalysis.vue'
          ),
      },
      {
        path: '/BarTimeChart',
        component: () =>
          import(
            /* webpackChunkName: "resve", webpackPrefetch:true */ '../components/layout/BarTimeChart.vue'
          ),
      },
      {
        path: '/TimeLineNew',
        component: () =>
          import(
            /* webpackChunkName: "resve", webpackPrefetch:true */ '../components/layout/TimeLineNew.vue'
          ),
      },
      // 02 청구관리
      {
        name: 'invoice',
        path: '/invoice',
        component: () =>
          import(
            /* webpackChunkName: "invoice", webpackPrefetch:true */ '../views/invoice/Invoice.vue'
          ),
      },
      // 03 영업관리
      {
        name: 'pdDcrt',
        path: '/pdDcrt',
        component: () =>
          import(
            /* webpackChunkName: "pdDcrt", webpackPrefetch:true */ '../views/pdDcrt/PdDcrt.vue'
          ),
      },
      {
        path: '/pdDcrt/regist',
        component: () =>
          import(
            /* webpackChunkName: "pdDcrt", webpackPrefetch:true */ '../views/pdDcrt/PdDcrtDetail.vue'
          ),
      },
      {
        path: '/pdDcrt/detail/:id',
        component: () =>
          import(
            /* webpackChunkName: "pdDcrt", webpackPrefetch:true */ '../views/pdDcrt/PdDcrtDetail.vue'
          ),
      },
      {
        path: '/pdDcrt/LendChrge',
        component: () =>
          import(
            /* webpackChunkName: "pdDcrt", webpackPrefetch:true */ '../views/pdDcrt/LendChrge.vue'
          ),
      },
      {
        path: '/pdDcrt/InsrncChrge',
        component: () =>
          import(
            /* webpackChunkName: "pdDcrt", webpackPrefetch:true */ '../views/pdDcrt/InsrncChrge.vue'
          ),
      },
      {
        path: '/pdDcrt/InsrncInfo',
        component: () =>
          import(
            /* webpackChunkName: "pdDcrt", webpackPrefetch:true */ '../views/pdDcrt/InsrncInfo.vue'
          ),
      },
      {
        path: '/pdDcrt/ContactBook',
        component: () =>
          import(
            /* webpackChunkName: "pdDcrt", webpackPrefetch:true */ '../views/pdDcrt/ContactBook.vue'
          ),
      },
      {
        path: '/pdDcrt/HolidayStup',
        component: () =>
          import(
            /* webpackChunkName: "pdDcrt", webpackPrefetch:true */ '../views/pdDcrt/HolidayStup.vue'
          ),
      },
      // 04 기초자료 -차량~
      {
        name: 'basic',
        path: '/basic/vhcty',
        component: () =>
          import(
            /* webpackChunkName: "basic", webpackPrefetch:true */ '../views/basic/Vhcty.vue'
          ),
      },
      {
        path: '/basic/vhcty/detail/:id',
        component: () =>
          import(
            /* webpackChunkName: "basic", webpackPrefetch:true */ '../views/basic/VhctyDetail.vue'
          ),
      },
      {
        path: '/basic/vhcty/regist',
        component: () =>
          import(
            /* webpackChunkName: "basic", webpackPrefetch:true */ '../views/basic/VhctyDetail.vue'
          ),
      },
      {
        path: '/basic/VhctyList',
        component: () =>
          import(
            /* webpackChunkName: "basic", webpackPrefetch:true */ '../views/basic/VhctyList.vue'
          ),
      },
      {
        path: '/basic/Vhcle',
        component: () =>
          import(
            /* webpackChunkName: "basic", webpackPrefetch:true */ '../views/basic/Vhcle.vue'
          ),
      },
      {
        path: '/basic/VhcleOption',
        component: () =>
          import(
            /* webpackChunkName: "basic", webpackPrefetch:true */ '../views/basic/VhcleOption.vue'
          ),
      },
      {
        path: '/basic/AlnPlc',
        component: () =>
          import(
            /* webpackChunkName: "basic", webpackPrefetch:true */ '../views/basic/AlnPlc.vue'
          ),
      },
      {
        path: '/basic/PaySe',
        component: () =>
          import(
            /* webpackChunkName: "basic", webpackPrefetch:true */ '../views/basic/PaySe.vue'
          ),
      },
      // 05 환경설정
      {
        name: 'system',
        path: '/system/CorpStup',
        component: () =>
          import(
            /* webpackChunkName: "system", webpackPrefetch:true */ '../views/system/CorpStup.vue'
          ),
      },
      {
        path: '/system/ErnStup',
        component: () =>
          import(
            /* webpackChunkName: "system", webpackPrefetch:true */ '../views/system/ErnStup.vue'
          ),
      },
      {
        path: '/system/User',
        component: () =>
          import(
            /* webpackChunkName: "system", webpackPrefetch:true */ '../views/system/User.vue'
          ),
      },
      // {
      //   path: '/system/User/regist',
      //   component: () => import(/* webpackChunkName: "system", webpackPrefetch:true */ '../views/system/UserRegist.vue'),
      // },
      {
        path: '/system/User/updt/:id',
        component: () =>
          import(
            /* webpackChunkName: "system", webpackPrefetch:true */ '../views/system/UserDetail.vue'
          ),
      },
      {
        path: '/system/UserDetail',
        component: () =>
          import(
            /* webpackChunkName: "system", webpackPrefetch:true */ '../views/system/UserDetail.vue'
          ),
      },
    ],
  },
  // 청구서 발행 윈도우 팝업
  {
    path: '/invoicePrint',
    name: 'InvoicePrintPop',
    component: () => import('../components/layout/InvoicePrint.vue'),
  },
  // error 500
  {
    path: '/error500',
    name: 'Error500',
    component: () => import('../components/common/Error500.vue'),
  },
  // error 404
  {
    path: '/error404',
    name: 'Error404',
    component: () => import('../components/common/Error404.vue'),
  },
  // loading
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('../components/common/Loading.vue'),
  },

  // Guide
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../components/layout/Guide.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
