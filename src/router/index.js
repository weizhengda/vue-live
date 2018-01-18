import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Live from '@/views/Live'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: ' Home',
      component: Home,
      meta: {keepAlive: false}
    },
    {
      path: '/live',
      name: ' live',
      component: Live,
      meta: {keepAlive: true}
    }
  ]
})
