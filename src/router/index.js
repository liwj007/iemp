import Vue from 'vue'
import Router from 'vue-router'

import School from './school'
import Welcome from './main'

Vue.use(Router)

export default new Router({
  routes: [
    School,
    Welcome
  ]
})
