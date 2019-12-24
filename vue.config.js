module.exports = {
    devServer: {
        proxy: {
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