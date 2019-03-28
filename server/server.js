// const path = require('path')
const server = require('express')()
const createApp = require('./app')
// 创建一个render
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  const app = createApp({url: req.url})
  renderer.renderToString(app).then(html => {
    console.log(html)
    res.end(html)
  }).catch(err => {
    console.log(err)
    res.end(err)
  })
})

server.listen(9000)
