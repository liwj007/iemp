import Vue from 'vue'
import Router from 'vue-router'

import School from './school'
import Pro from './pro'
import Welcome from './main'
import Pro2 from './pro2'

Vue.use(Router)

export default new Router({
  routes: [
    School,
    Pro,
    Pro2,
    Welcome
  ]
})
