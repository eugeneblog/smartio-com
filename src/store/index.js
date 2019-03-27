import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news.js'
import app from './modules/app.js'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    news,
    app,
    menu
  }
})

export default store
