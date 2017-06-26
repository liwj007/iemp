/**
 * Created by liwj0 on 2017/6/26.
 */

const Welcome = r => require.ensure([], () => r(require('@/components/Welcome')), 'Welcome')

export default {
  path: '/',
  component: Welcome
}
