const Main = r => require.ensure([], () => r(require('@/components/Main')), 'Main')
const Pro1 = r => require.ensure([], () => r(require('@/components/pro/project/Index')), 'pro')
const Pro2 = r => require.ensure([], () => r(require('@/components/pro/project/Index2')), 'pro')
const proCheck = r => require.ensure([], () => r(require('@/components/pro/project/Check')), 'pro')
const proDetail = r => require.ensure([], () => r(require('@/components/pro/project/Detail')), 'pro')
const proCheckView = r => require.ensure([], () => r(require('@/components/pro/project/Detail')), 'pro')
const proApply = r => require.ensure([], () => r(require('@/components/pro/project/Apply')), 'pro')
export default {
  path: '/pro',
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
      path: 'project/apply/:type',
      name: 'proApply',
      component: proApply
    }
  ]
}
