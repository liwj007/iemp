
<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="2" @on-select="selectMenu">
        <li class=" back">
          <router-link to="/school/workload">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
          审核意见
        </Menu-item>
        <Menu-item name="2">
          工作量详情
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
       <WorkloadTemplate :item="item"></WorkloadTemplate>
      </div>
    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'
  import WorkloadTemplate from './WorkloadTemplate'
  export default{
    name: 'WorkloadDetail',
    components: {
      Workare,
      WorkloadTemplate
    },
    data () {
      return {
        item: this.$store.state.workloadDetail[this.$route.params.id]
      }
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/school/workload/check/' + this.$route.params.id)
            break
          case '2':
            this.$router.push('/school/workload/detail/' + this.$route.params.id)
            break
        }
      }
    }
  }
</script>
