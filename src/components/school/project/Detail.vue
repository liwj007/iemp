<style scoped>
  .ivu-table td.demo-table-info-column{
       background-color: #f8f8f9;
     }
</style>

<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="2" @on-select="selectMenu">
        <li class=" back">
          <router-link to="/school/project/admin">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>

        </li>

        <Menu-item name="1">
          审核意见
        </Menu-item>
        <Menu-item name="2">
          项目详情
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <ProjectDetail :type="item.type" :item="item"></ProjectDetail>
      </div>
    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'
  import ProjectDetail from './ProjectDetail'
  export default{
    name: 'Detail',
    components: {
      Workare,
      ProjectDetail
    },
    data () {
      return {
        showHeader: false,
        item: this.$store.state.projectDetail[this.$route.params.id],
        result: '通过',
        opinion: ''
      }
    },
    mounted () {
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/school/project/check/' + this.$route.params.id)
            break
          case '2':
            this.$router.push('/school/project/detail/' + this.$route.params.id)
            break
        }
      }
    }
  }
</script>

