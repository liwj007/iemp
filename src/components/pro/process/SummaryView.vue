<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="2" @on-select="selectMenu">
        <li class=" back">
          <router-link to="/pro/process/summary">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
          审核意见
        </Menu-item>
        <Menu-item name="2">
          项目总结
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
      </div>
    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'

  export default{
    name: 'SummaryDetail',
    components: {
      Workare
    },
    data () {
      return {
        showHeader: false,
        item: {
          college: '11',
          collegeOpinion: '11',
          professor: '11',
          professorOpinion: '11'
        },
        result: '通过',
        opinion: '',
        columns: [
          {
            title: '名称',
            key: 'name',
            className: 'demo-table-info-column',
            width: 200
          },
          {
            title: '内容',
            key: 'content'
          }
        ],
        data1: [
          {
            name: '项目编号',
            content: '201611688006',
            cellClassName: {
              name: 'demo-table-info-cell-age'
            }
          },
          {
            name: '项目名称',
            content: '基于大数据的酒店宴会定制化服务的研究'
          },
          {
            name: '项目类型',
            content: '校外项目'
          },
          {
            name: '项目负责人',
            content: '熊勇'
          },
          {
            name: '指导教师',
            content: '曹静'
          },
          {
            name: '指导教师职称',
            content: '讲师'
          },
          {
            name: '所属学院',
            content: '计算机科学与技术'
          },
          {
            name: '参赛人数',
            content: ''
          },
          {
            name: '参赛队伍数',
            content: ''
          },
          {
            name: '经费预算（元）',
            content: ''
          },
          {
            name: '经费支出（元）',
            content: ''
          },
          {
            name: '经费说明',
            content: ''
          },
          {
            name: '获奖数',
            content: ''
          },
          {
            name: '往年获奖情况',
            content: ''
          },
          {
            name: '学院获奖情况',
            content: ''
          },
          {
            name: '附件',
            content: '<a>上传</a>'
          }
        ]
      }
    },
    mounted () {
      if (this.$route.params.id === '201611688006') {
        this.item = {
          college: '通过',
          collegeOpinion: '本工程主要内容包括扩宽河道主槽，修建河道两侧堤防、调整河道比降，布置泄洪建筑物与穿堤建筑物。本项目的实施，是提高市防洪标准的需要，是振兴市域经济的需要，是建设滨水城市的需要，有利于城市合理规划，促进城市开发建设。该项目建成后将会为市安邦河沿岸提供良好的建设条件，使市经济社会健康、和谐、持续发展。'
        }
      } else {
        this.item = {
          college: '22',
          collegeOpinion: '22'
        }
      }
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/pro/process/check/' + this.$route.params.id)
            break
          case '2':
            this.$router.push('/pro/process/summary_detail/' + this.$route.params.id)
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
    padding: 20px;
    /*position: relative;*/
  }
  .floating {

    position: relative;
    float: left;
    margin-right: 20px;
  }
</style>
