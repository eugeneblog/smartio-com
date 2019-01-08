import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news.js'
import app from './modules/app.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    news,
    app
  }
})

export default store
