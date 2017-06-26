import Vue from 'vue'
import Router from 'vue-router'

import School from './school'

Vue.use(Router)

export default new Router({
  routes: [
    School,
    {
      path: '/',
      redirect: '/school'
    }
  ]
})
