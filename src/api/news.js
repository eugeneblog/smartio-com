import request from '@/utils/request.js'

export function getNewsDataInfo (number) {
  const data = {
    number
  }
  return request({
    url: '/new/news',
    method: 'post',
    data
  })
}

export function getArticle (id) {
  return request({
    url: '/new/article',
    method: 'get',
    params: { id }
  })
}
