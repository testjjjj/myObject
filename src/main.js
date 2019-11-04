import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/iconfont'
import axios from './utils/axios'
require ('./mock/index')
import api from './api/index'

Vue.config.productionTip = false
Vue.use(element)
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
