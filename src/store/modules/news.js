import { getNewsDataInfo, getArticle } from '@/api/news.js'

const news = {
  state: {
    newsData: []
  },
  actions: {
    getNewsData ({ commit, state }, number) {
      return new Promise((resolve, reject) => {
        getNewsDataInfo(number).then(response => {
          let data = response.data
          state.newsData = data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getArticle ({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        getArticle(id).then(response => {
          let data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default news
