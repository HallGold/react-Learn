const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    })
  )
}

// 文件必须在src文件下,名字必须叫 setupProxy.js
