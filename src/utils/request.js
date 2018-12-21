import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? process.env.BASE_API : process.env.BASE_API,
  timeout: 5000,
  withCredentials: false // 跨域请求是否使用凭证
})

service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response
}, error => {
  return Promise.reject(error)
})

export default service
