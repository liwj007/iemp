import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const School1 = r => require.ensure([], () => r(require('@/components/school/project/Index')), 'school')
const School2 = r => require.ensure([], () => r(require('@/components/school/project/Index2')), 'school')
const Main = r => require.ensure([], () => r(require('@/components/Main')), 'Main')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/school'
    },
    {
      path: '/school',
      component: Main,
      children: [
        {
          path: '',
          redirect: 'project/admin'
        },
        {
          path: 'project',
          redirect: 'project/admin'
        },
        {
          path: 'project/admin',
          name: 'admin',
          component: School1
        },
        {
          path: 'project/his',
          name: 'his',
          component: School2
        }
      ]
    }
  ]
})
