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
      <Menu mode="horizontal" active-name="2" @on-select="selectMenu">
        <li class=" back">
          <router-link to="/pro/project/admin">
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
        <ProProjectDetailTemplate :type = "item.type":item="item"></ProProjectDetailTemplate>
      </div>
    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'
  import ProProjectDetailTemplate from './ProProjectDetailTemplate'
  export default{
    name: 'proProjectDetail',
    components: {
      ProProjectDetailTemplate,
      Workare
    },
    data () {
      return {
        showHeader: false,
        item: this.$store.state.projectDetail[this.$route.params.id]
      }
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/pro/project/proCheck/' + this.$route.params.id)
            break
          case '2':
            this.$router.push('/pro/project/his_detail/' + this.$route.params.id)
            break
        }
      }
    }
}
</script>

