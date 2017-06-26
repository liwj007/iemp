import Vue from 'vue'
import Router from 'vue-router'

import School from './school'
import Pro from './pro'
Vue.use(Router)

export default new Router({
  routes: [
    School,
    Pro,
    {
      path: '/',
      redirect: '/school'
    }
  ]
})
