// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'

import '@/styles/index.scss'
import './icons'
import '@/assets/iconfont/iconfont.js'
import './mock'

import 'swiper/dist/css/swiper.css'
import store from './store'
import './permission.js'
import i18n from './lang'

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
  const app = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
  })
  return { app }
}
