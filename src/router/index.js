import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views'
import home from '../views/home'          // 首页
import special from '../views/special'
import download from '../views/down'      // 下载
import diary from '../views/diary'        // 日记
import about from '../views/about'        // 关于

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: home,
      },
      {
        path: '/special/:type',
        name: 'special',
        component: special
      },
      {
        path: '/download',
        name: 'download',
        component: download
      },
      {
        path: '/diary',
        name: 'diary',
        component: diary
      },
      {
        path: '/about',
        name: 'about',
        component: about
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
