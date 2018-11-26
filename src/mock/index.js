import Mock from 'mockjs'
import NewsAPI from './news'

Mock.mock(/\/new\/news/, 'post', NewsAPI.getNews)
Mock.mock(/\/new\/article/, 'get', NewsAPI.getArticle)

export default Mock
