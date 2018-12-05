import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Home from '../components/pages/Home/Home'
import NotFound from '../components/pages/NotFound/NotFound'
import Login from '../components/pages/Login/Login'
import HomeMoney from '../components/pages/HomeMoney/HomeMoney'
import HomeManage from '../components/pages/HomeManage/HomeManage'


//由于路由表不可使用this，所以必须再次引入store
import store from '../store'

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home-money',
      name: 'home-money',
      component: HomeMoney
    },
    {
      path: '/home-manage',
      name: 'home-manage',
      component: HomeManage
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      //路由重定向
      path: '**',
      redirect: {name: 'not-found'}
    }
  ]
})

export default router


//全局路由守卫
let need_login = ['home', 'home-money', 'home-manage']

router.beforeEach((to, from, next) => {
  //是否需要判断登录状态
  let need_user = need_login.some(name => to.name === name)
  if(need_user && !store.state.commons.user_state){
    next('/login')
    return false
  }
  next()
})