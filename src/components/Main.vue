<template>
  <div class="main">
    <Menu_Bar title="创新创业系统" :menuList=menu></Menu_Bar>
    <div class="content">
      <Top></Top>
      <transition name="expand">
        <router-view></router-view>
      </transition>
      <Bottom title="成都寻道科技有限公司"></Bottom>
    </div>
  </div>
</template>

<script>
  import Top from './layout/Top'
  import Bottom from './layout/Bottom'
  import MenuBar from './layout/MenuBar'
  import { mapState } from 'vuex'
  export default{
    name: 'Main',
    data () {
      return {
        menu: [
          {
            type: '竞赛项目级别',
            list: [
              {link: '/school/competition', name: '竞赛项目级别认定', icon: '#icon-zhiyesuzhi'},
              {link: '/school/projectlist', name: '竞赛项目清单', icon: '#icon-zhiyesuzhi'}
            ]
          },
          {
            type: '项目管理',
            list: [
              {link: '/school/project', name: '项目申报', icon: '#icon-zhiyesuzhi'},
              {link: '/school/process', name: '流程管理', icon: '#icon-zhiyesuzhi'}
            ]
          },
          {
            type: '奖励和工作量',
            list: [
              {link: '/school/performance', name: '奖励认定', icon: '#icon-zhiyesuzhi'},
              {link: '/school/workload', name: '工作量认定', icon: '#icon-zhiyesuzhi'}
            ]
          },
          {
            type: '其他',
            list: [
              {link: '/school/system', name: '系统设置', icon: '#icon-zhiyesuzhi'},
              {link: '/school/award', name: '奖励标准', icon: '#icon-zhiyesuzhi'},
              {link: '/school/statistic', name: '评估统计', icon: '#icon-zhiyesuzhi'}
            ]
          }
        ]
      }
    },
    computed: mapState({ user: state => state.user }),
    components: {
      Top,
      Bottom,
      Menu_Bar: MenuBar
    }
  }
</script>
