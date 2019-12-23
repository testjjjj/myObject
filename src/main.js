import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/iconfont'
import axios from './utils/axios'
// 联调时候注释掉
require ('./mock/index')
import api from './api/index'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(element)
Vue.use(mavonEditor)
// 添加到vue原型
Object.assign(Vue.prototype, {
  $axios: axios,
  $api: api
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
