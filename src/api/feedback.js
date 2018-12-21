import axios from 'axios'
axios.defaults.withCredentials = false
export function sendFeedbackForm (data) {
  return new Promise((resolve, reject) => {
    axios.post('http://127.0.0.1:80/smartIOadmin/test', {
      data
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
