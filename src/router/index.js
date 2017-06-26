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
const ProcessDetail = r => require.ensure([], () => r(require('@/components/school/process/Detail')), 'process')
const Summary = r => require.ensure([], () => r(require('@/components/school/process/Summary')), 'process')
const SummaryCheck = r => require.ensure([], () => r(require('@/components/school/process/Check')), 'process')
const SummaryDetail = r => require.ensure([], () => r(require('@/components/school/process/SummaryDetail')), 'process')

const PerProduct = r => require.ensure([], () => r(require('@/components/school/performance/Product')), 'performance')
const PerStudent = r => require.ensure([], () => r(require('@/components/school/performance/Student')), 'performance')
const PerTeacher = r => require.ensure([], () => r(require('@/components/school/performance/Teacher')), 'performance')
const PerCheck = r => require.ensure([], () => r(require('@/components/school/performance/Check')), 'performance')

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
          path: 'process/summary',
          name: 'summary',
          component: Summary
        },
        {
          path: 'process',
          redirect: 'process/admin'
        },
        {
          path: 'process/detail/:id',
          name: 'pdetail',
          component: ProcessDetail
        },
        {
          path: 'process/check/:id',
          name: 'pCheck',
          component: SummaryCheck
        },
        {
          path: 'process/summary_detail/:id',
          name: 'summaryDetail',
          component: SummaryDetail
        },
        {
          path: 'performance',
          redirect: 'performance/product'
        },
        {
          path: 'performance/product',
          name: 'perProduct',
          component: PerProduct
        },
        {
          path: 'performance/student',
          name: 'perStudent',
          component: PerStudent
        },
        {
          path: 'performance/teacher',
          name: 'perTeacher',
          component: PerTeacher
        },
        {
          path: 'performance/check/:id',
          name: 'perCheck',
          component: PerCheck
        }
      ]
    }
  ]
})
