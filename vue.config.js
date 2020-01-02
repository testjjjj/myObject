module.exports = {
    // 开发服务器配置，
    devServer: {
      port: 8000,
      proxy: {  // 代理
        '/gateway': {
            target: 'http://pz28334851.zicp.vip:32476/gateway/',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/gateway': ''
            }
        }
      }
    }
}