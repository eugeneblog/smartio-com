import Cookies from 'js-cookie'

const app = {
  state: {
    language: Cookies.get('language') || 'zh'
  },
  actions: {
    setLanguage ({ commit, state }, lang) {
      commit('SET_LANGUAGE', lang)
    }
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
      window.location.reload()
    }
  }
}

export default app
