const proMain = r => require.ensure([], () => r(require('@/components/proMain')), 'proMain')
const Pro1 = r => require.ensure([], () => r(require('@/components/pro/project/Index')), 'pro')
const Pro2 = r => require.ensure([], () => r(require('@/components/pro/project/Index2')), 'pro')
const proCheck = r => require.ensure([], () => r(require('@/components/pro/project/Check')), 'pro')
const proDetail = r => require.ensure([], () => r(require('@/components/pro/project/Detail')), 'pro')
const proCheckView = r => require.ensure([], () => r(require('@/components/pro/project/Detail')), 'pro')
const proApply = r => require.ensure([], () => r(require('@/components/pro/project/Apply')), 'pro')
const proProcess = r => require.ensure([], () => r(require('@/components/pro/process/Index')), 'pro')
const proProcessDetail = r => require.ensure([], () => r(require('@/components/pro/process/Detail')), 'pro')
const proProcessCourse = r => require.ensure([], () => r(require('@/components/pro/process/Course')), 'pro')
const proProcessSum = r => require.ensure([], () => r(require('@/components/pro/process/Summary')), 'pro')
const proEditSum = r => require.ensure([], () => r(require('@/components/pro/process/SummaryDetail')), 'pro')
const proProcessCheck = r => require.ensure([], () => r(require('@/components/pro/process/Check')), 'pro')
const proSumView = r => require.ensure([], () => r(require('@/components/pro/process/SummaryView')), 'pro')
const perPro1 = r => require.ensure([], () => r(require('@/components/pro/performance/Product')), 'pro')
const perPro2 = r => require.ensure([], () => r(require('@/components/pro/performance/Workload')), 'pro')
const Register = r => require.ensure([], () => r(require('@/components/pro/performance/Register')), 'pro')
const WorkloadRegister = r => require.ensure([], () => r(require('@/components/pro/performance/WorkloadRegister')), 'pro')

export default {
  path: '/pro',
  component: proMain,
  children: [
    {
      path: 'performance',
      name: 'proProduct',
      component: perPro1
    },
    {
      path: 'workload',
      name: 'proWorkload',
      component: perPro2
    },
    {
      path: 'performance/register/:id',
      name: 'perRegister',
      component: Register
    },
    {
      path: 'workload/register/:id',
      name: 'workloadRegister',
      component: WorkloadRegister
    },
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
      name: 'proAdmin',
      component: Pro1
    },
    {
      path: 'project/his',
      name: 'proHis',
      component: Pro2
    },
    {
      path: 'project/check/:id',
      name: 'proCheck',
      component: proCheck
    },
    {
      path: 'project/detail/:id',
      name: 'proDetail',
      component: proDetail
    },
    {
      path: 'project/checkview/:id',
      name: 'proCheckview',
      component: proCheckView
    },
    {
      path: 'project/apply/:applyType',
      name: 'proApply',
      component: proApply
    },
    {
      path: 'process',
      redirect: 'process/admin'
    },
    {
      path: 'process/admin',
      name: 'proProcessAdmin',
      component: proProcess
    },
    {
      path: 'process/detail/:id',
      name: 'proProcessDetail',
      component: proProcessDetail
    },
    {
      path: 'process/course',
      name: 'proProcessCourse',
      component: proProcessCourse
    },
    {
      path: 'process/course/:id',
      name: 'proProcessCourseId',
      component: proProcessCourse
    },
    {
      path: 'process/summary',
      name: 'proProcessSum',
      component: proProcessSum
    },
    {
      path: 'process/editsum/:id',
      name: 'proEditSum',
      component: proEditSum
    },
    {
      path: 'process/check/:id',
      name: 'proProcessCheck',
      component: proProcessCheck
    },
    {
      path: 'process/summary_detail/:id',
      name: 'summaryView',
      component: proSumView
    }
  ]
}
