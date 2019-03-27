const Vue = require('vue')
const path = require('path')
const server = require('express')()
const renderer = require('vue-server-renderer')

server.get('*', (req, res) => {
  res.setHeader('Content-type', 'text/html; charset=UTF-8')
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })
  renderer.createRenderer({
    template: require('fs').readFileSync(path.join(__dirname, '../bin/index.template.html'), 'utf-8')
  })
    .renderToString(app, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(
        html
      )
      console.log(html)
    })
})

server.listen(9090)
