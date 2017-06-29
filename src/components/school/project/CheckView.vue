<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" @on-select="selectMenu">
        <li class=" back">
          <router-link to="/school/project/his">
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
        <div class="anchor">
          <h2>学院认定</h2>
          <p>{{item.collegeRes}}</p>
        </div>
        <div class="anchor">
          <h2>学院审核意见</h2>
          <p>{{item.collegeOpinion}}</p>
        </div>
        <div class="anchor">
          <h2>专家认定</h2>
          <p>{{item.expertRes}}</p>
        </div>
        <div class="anchor">
          <h2>专家意见</h2>
          <p>{{item.expertOpinion}}</p>
        </div>
        <div class="anchor">
          <h2>学校认定</h2>
          <p>{{item.schoolRes}}</p>
        </div>
        <div class="anchor">
          <h2>学校评审意见</h2>
          <p>{{item.schoolOpinion}}</p>
        </div>

      </div>



    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'

  export default{
    name: 'School1',
    components: {
      Workare
    },
    data () {
      return {
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
            this.$router.push('/school/project/checkview/' + this.$route.params.id)
            break
          case '2':
            this.$router.push('/school/project/detailview/' + this.$route.params.id)
            break
        }
      }
    }
  }
</script>

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
    padding-top: 20px;
    /*position: relative;*/
  }
</style>
