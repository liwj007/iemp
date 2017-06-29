<style>
  .ivu-table td.demo-table-info-column{
    background-color: #f8f8f9;
  }
</style>

<style scoped lang="less">

  .back{
    float: left;
    width: 32px;
    height: inherit;
    line-height: inherit;
    border-bottom: 2px solid transparent;
    text-align: center;
    a{
      color: #495060;
    }
  }

  .anchor{
    padding: 0 20px 30px 20px;
    h2{
      font-size: 20px;
      font-weight: 400;
      margin: 12px 0;;
    }
    p{
      font-size: 16px;
    }
  }
  .wrapper-content{
    padding: 20px;
    /*position: relative;*/
  }


</style>
<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1">
        <li class=" back">
          <router-link to="/school/process/admin">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
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
  import ProjectDetail from '../project/ProjectDetail'
  export default{
    name: 'ProcessDetail',
    components: {
      Workare,
      ProjectDetail
    },
    data () {
      return {
        item: this.$store.state.projectDetail[this.$route.params.id],
        result: '通过',
        opinion: ''
      }
    },
    mounted () {
    }
  }
</script>

