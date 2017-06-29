<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" @on-select="selectMenu">
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
          <Radio-group v-model="result">
            <Radio label="通过"></Radio>
            <Radio label="不通过"></Radio>
          </Radio-group>
        </div>
        <div class="anchor">
          <h2>学校评审意见</h2>
          <Input v-model="opinion" type="textarea" :rows="6" placeholder="请输入..."></Input>
        </div>
        <div style="padding: 20px 0 20px 20px;text-align: center;">
          <Button type="primary" style="width: 150px" @click="submit">提交</Button>
          <Button type="ghost" style="width: 150px">取消</Button>
        </div>
      </div>



    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'

  export default{
    name: 'ProjectCheck',
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
            this.$router.push('/school/project/check/' + this.$route.params.id)
            break
          case '2':
            this.$router.push('/school/project/detail/' + this.$route.params.id)
            break
        }
      },
      submit () {
        this.$store.commit('PROJECT_CHECK_CP', this.item)
        this.$router.push('/school/project/admin')
      }
    }
  }
</script>
