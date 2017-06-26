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
          <p>{{item.college}}</p>
        </div>
        <div class="anchor">
          <h2>学院审核意见</h2>
          <p>{{item.collegeOpinion}}</p>
        </div>
        <div class="anchor">
          <h2>专家认定</h2>
          <p>{{item.professor}}</p>
        </div>
        <div class="anchor">
          <h2>专家意见</h2>
          <p>{{item.professorOpinion}}</p>
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
        <div class="anchor">
          <Button>取消</Button>
          <Button type="primary">提交</Button>
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
        item: {
          college: '11',
          collegeOpinion: '11',
          professor: '11',
          professorOpinion: '11'
        },
        result: '通过',
        opinion: ''
      }
    },
    mounted () {
      if (this.$route.params.id === '201611688006') {
        this.item = {
          college: '通过',
          collegeOpinion: '本工程主要内容包括扩宽河道主槽，修建河道两侧堤防、调整河道比降，布置泄洪建筑物与穿堤建筑物。本项目的实施，是提高市防洪标准的需要，是振兴市域经济的需要，是建设滨水城市的需要，有利于城市合理规划，促进城市开发建设。该项目建成后将会为市安邦河沿岸提供良好的建设条件，使市经济社会健康、和谐、持续发展。',
          professor: '通过',
          professorOpinion: '本工程主要内容包括扩宽河道主槽，修建河道两侧堤防、调整河道比降，布置泄洪建筑物与穿堤建筑物。本项目的实施，是提高市防洪标准的需要，是振兴市域经济的需要，是建设滨水城市的需要，有利于城市合理规划，促进城市开发建设。该项目建成后将会为市安邦河沿岸提供良好的建设条件，使市经济社会健康、和谐、持续发展。'
        }
      } else {
        this.item = {
          college: '22',
          collegeOpinion: '22',
          professor: '22',
          professorOpinion: '22'
        }
      }
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
