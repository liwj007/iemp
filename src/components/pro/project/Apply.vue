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
  .floating {

    position: relative;
    float: left;
    margin-right: 20px;
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
        <p>{{this.item.type}}项目申请</p>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <div v-if="this.item.type === '校内'">
          <Table border :columns="columns9" :data="data1" disabled-hover :show-header="showHeader"></Table>
        </div>
        <div v-else-if="this.item.type === '校外'">
          <Table border :columns="columns9" :data="data2" disabled-hover :show-header="showHeader"></Table>
        </div>
      </div>
      <div style = "display: bolck; width: 100%; height: 50px; overflow: hidden; padding-left:40%">        
        <div class = "floating">
          <Button type="default">取消</Button>
        </div>
        <div class = "floating">
          <Button type="info">暂存</Button>
        </div>
        <div class = "floating">
          <Button type="primary">提交</Button>
        </div>
        
        
      </div>
    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'
  export default{
    name: 'proDetail',
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
          professorOpinion: '11',
          type: '校内项目申请'
        },
        result: '通过',
        opinion: '',
        columns9: [
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
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '项目类型',
            content: '校内项目'
          },
          {
            name: '项目负责人',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '指导教师',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '指导教师职称',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '所属学院',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '负责人电话',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '联合企业',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '赛项基本情况',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '赛项意义',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '赛项特色',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '比赛方式',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '成绩评定方式',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '企业合作意向',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '建议竞赛器材',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '建议竞赛平台',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '经费预算（元）',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '筹备工作进度',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '竞赛项目方案',
            content: '<a>上传</a>'
          }
        ],
        data2: [
          {
            name: '项目编号',
            content: '201611688006',
            cellClassName: {
              name: 'demo-table-info-cell-age'
            }
          },
          {
            name: '项目名称',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '项目类型',
            content: '校外项目'
          },
          {
            name: '项目负责人',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '指导教师',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '指导教师职称',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '所属学院',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '申请年份',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>',
            content: ''
          },
          {
            name: '竞赛协办单位',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '竞赛网址',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '竞赛类别',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '参赛范围',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '涉及学科',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '参赛形式',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '参赛规模',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '竞赛起止时间',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '竞赛项目简介',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '竞赛项目目标',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '经费预算（元）',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '工作量预算（小时）',
            content: '<Input v-model="value5" type = "textarea" style="width: 300px"></Input>'
          },
          {
            name: '竞赛项目方案',
            content: '<a>上传</a>'
          }
        ]
      }
    },
    mounted () {
      if (this.$route.params.applyType === 'inner') {
        this.item = {
          type: '校内'
        }
      } else {
        this.item = {
          type: '校外'
        }
      }
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/pro/project/check/' + this.$route.params.id)
            break
          case '2':
            this.$router.push('/pro/project/detail/' + this.$route.params.id)
            break
        }
      }
    }
  }
</script>

