import request from '@/utils/request.js'

export function fetchList () {
  return request({
    url: '/api/smartio/home/menulist',
    method: 'get'
  })
}
