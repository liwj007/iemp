import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const School1 = r => require.ensure([], () => r(require('@/components/school/project/Index')), 'school')
const School2 = r => require.ensure([], () => r(require('@/components/school/project/Index2')), 'school')
const Check = r => require.ensure([], () => r(require('@/components/school/project/Check')), 'school')
const Detail = r => require.ensure([], () => r(require('@/components/school/project/Detail')), 'school')
const CheckView = r => require.ensure([], () => r(require('@/components/school/project/CheckView')), 'school')
const DetailView = r => require.ensure([], () => r(require('@/components/school/project/DetailView')), 'school')

const Process1 = r => require.ensure([], () => r(require('@/components/school/process/Index')), 'process')

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
        },
        {
          path: 'project/check/:id',
          name: 'check',
          component: Check
        },
        {
          path: 'project/detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: 'project/checkview/:id',
          name: 'checkview',
          component: CheckView
        },
        {
          path: 'project/detailview/:id',
          name: 'detailview',
          component: DetailView
        },
        {
          path: 'process/admin',
          name: 'padmin',
          component: Process1
        },
        {
          path: 'process',
          redirect: 'process/admin'
        }
      ]
    }
  ]
})
