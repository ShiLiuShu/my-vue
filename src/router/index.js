import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SearchBook from '../page/searchBook'
import Child from '../page/homeChild'
import App from '../App'
import Time from '../page/mTime'
import SearchMovie from '../page/searchMovie'

import My from '../page/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path:'/searchBook',
          component:SearchBook,
          name:'searchBook'
        },
        {
          path:'/child',
          component:Child
        },
        {
          path:'',
          redirect:'/mTime'
        },
        {
          path:'/mTime',
          component:Time,
          name:'mTime'
        },
        {
          path:'/searchMovie',
          component:SearchMovie,
          name:'searchMovie'
        },
        {
          path:'/my',
          component:My,
          name:'my'
        }
      ]
    }
  ]
})
