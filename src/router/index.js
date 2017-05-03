import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../page/home'
import Child from '../page/homeChild'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path:'/home',
          component:Home
        },
        {
          path:'/child',
          component:Child
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    }
  ]
})
