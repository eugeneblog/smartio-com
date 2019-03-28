// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'
import { sync } from 'vuex-router-sync'

import '@/styles/index.scss'
import './icons'
import '@/assets/iconfont/iconfont.js'
import './mock'

import 'swiper/dist/css/swiper.css'
import store from './store'
import './permission.js'
import i18n from './lang'

import { createRouter } from './router/route'
import { createStore } from './store/store'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})

export function createApp () {
  // 创建 router 和 store 实例
  const router = createRouter()
  const store = createStore()

  // 同步路由状态（router state）到store
  // 主要是把 vue-router 的狀態放進 vuex 的 state 中，這樣就可以透過改變 state 來進行路由的一些操作，當然直接使用像是 $route.go 之類的也會影響到 state ，會同步的是這幾個屬性
  sync(store, router)

  const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
