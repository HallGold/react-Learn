const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy([process.env.REACT_APP_BASE_URL1], {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { ['^' + process.env.REACT_APP_BASE_URL1]: '' }
    }),
    proxy([process.env.REACT_APP_BASE_URL2], {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { ['^' + process.env.REACT_APP_BASE_URL2]: '' }
    })
  )
}

// 文件必须在src文件下,名字必须叫 setupProxy.js   
