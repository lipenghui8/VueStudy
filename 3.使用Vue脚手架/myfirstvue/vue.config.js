module.exports = {
  pages:{
    index:{
      //入口
      entry:'src/main.js'
    }
  },
  lintOnSave: false,//关闭语法校验
  //开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},//去掉请求路径中的/api
        ws: true,//用于支持websocket
        changeOrigin: true//用于控制请求头中的host值
      },
      '/carapi': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/carapi':''},//去掉请求路径中的/api
        ws: true,//用于支持websocket
        changeOrigin: true//用于控制请求头中的host值
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}