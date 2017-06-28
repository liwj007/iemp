const Main = r => require.ensure([], () => r(require('@/components/ProMain')), 'Main')
const Pro1 = r => require.ensure([], () => r(require('@/components/pro/performance/Product')), 'pro')
const Pro2 = r => require.ensure([], () => r(require('@/components/pro/performance/Workload')), 'pro')
const Register = r => require.ensure([], () => r(require('@/components/pro/performance/Register')), 'pro')
const WorkloadRegister = r => require.ensure([], () => r(require('@/components/pro/performance/WorkloadRegister')), 'pro')

export default {
  path: '/pro',
  component: Main,
  children: [
    {
      path: 'performance',
      name: 'proProduct',
      component: Pro1
    },
    {
      path: 'workload',
      name: 'proWorkload',
      component: Pro2
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
    }
  ]
}
