import axios from 'axios'

export function sendFeedbackForm (data) {
  return new Promise((resolve, reject) => {
    axios.post('/api/test.json', {
      data
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
