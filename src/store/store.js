import Vue from 'vue'
import Vuex from 'vuex'
import { fetchList } from '@/api/index.js'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      list: []
    },
    actions: {
      fetchList ({ commit }) {
        // store.dispatch() 会返回 Promise, 以便我们能够知道数据在何时更新
        return fetchList().then(list => {
          commit('SET_LIST', list)
        })
      }
    },
    mutations: {
      SET_LIST (state, list) {
        Vue.set(state.list, list)
      }
    }
  })
}
