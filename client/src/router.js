import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hello-world',
      component: HelloWorld
    }, {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
