<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1">
        <li class=" back">
          <router-link to="/school/performance/product">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
          奖励审核
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <CheckTemplate  :item="item"></CheckTemplate>
      </div>
    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'
  import CheckTemplate from './CheckTemplate.vue'
  export default{
    name: 'AwardCheck',
    components: {
      Workare,
      CheckTemplate
    },
    data () {
      return {
        item: this.$store.state.awardDetail[this.$route.params.id]
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">


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
    padding-top: 20px;
    /*position: relative;*/
  }
</style>
