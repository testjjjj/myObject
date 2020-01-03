module.exports = {
    // 开发服务器配置，
    devServer: {
      port: 8000,
      proxy: {  // 代理
        '/gateway': {
            target: ' http://pz28334851.zicp.vip:59595/gateway/',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/gateway': ''
            }
        }
      }
    },
    // pages: {
    //   index: {
    //     // index 的入口
    //     entry: 'src/main.js',
    //     // 模板来源
    //     template: 'public/index.html',
    //     // 在 dist/index.html 的输出
    //     filename: 'index.html',
    //     // 当使用 title 选项时，
    //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //     title: 'Index Page',
    //     // 在这个页面中包含的块，默认情况下会包含
    //     // 提取出来的通用 chunk 和 vendor chunk。
    //     chunks: ['chunk-vendors', 'chunk-common', 'index']
    //   },
    //   open: {
    //     // index 的入口
    //     entry: 'src/openMain.js',
    //     // 模板来源
    //     template: 'public/open.html',
    //     // 在 dist/index.html 的输出
    //     filename: 'open.html',
    //     // 当使用 title 选项时，
    //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //     title: 'Index Page',
    //     // 在这个页面中包含的块，默认情况下会包含
    //     // 提取出来的通用 chunk 和 vendor chunk。
    //     chunks: ['chunk-vendors', 'chunk-common', 'open']
    //   }
    // }
}