import Vue from 'vue'
import Router from 'vue-router'

import School from './school'
import Pro from './pro'
import Welcome from './main'

Vue.use(Router)

export default new Router({
  routes: [
    School,
    Pro,
    Welcome
  ]
})
