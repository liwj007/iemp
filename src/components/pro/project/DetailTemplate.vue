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
  <Table border :columns="columns9" :data="data1" disabled-hover :show-header="showHeader"></Table>
</template>
<script>
  import Workare from '../../Workare'

  export default{
    name: 'DetailTemplate',
    props: ['item'],
    components: {
      Workare
    },
    data () {
      return {
        showHeader: false,
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
            content: this.item.code,
            cellClassName: {
              name: 'demo-table-info-cell-age'
            }
          },
          {
            name: '项目名称',
            content: this.item.name
          },
          {
            name: '项目类型',
            content: this.item.type
          },
          {
            name: '项目负责人',
            content: this.item.admin
          },
          {
            name: '指导教师',
            content: this.item.teacher
          },
          {
            name: '指导教师职称',
            content: this.item.title
          },
          {
            name: '所属学院',
            content: this.item.college
          },
          {
            name: '申请年份',
            content: this.item.applyYear
          },
          {
            name: '竞赛主办单位',
            content: this.item.hostCmp
          },
          {
            name: '竞赛协办单位',
            content: this.item.coCmp
          },
          {
            name: '竞赛网址',
            content: this.item.url
          },
          {
            name: '竞赛类别',
            content: this.item.category
          },
          {
            name: '参赛范围',
            content: this.item.scope
          },
          {
            name: '涉及学科',
            content: this.item.subject
          },
          {
            name: '参赛形式',
            content: this.item.form
          },
          {
            name: '参赛规模',
            content: this.item.scale
          },
          {
            name: '竞赛起止时间',
            content: this.item.time
          },
          {
            name: '竞赛项目简介',
            content: this.item.desc
          },
          {
            name: '竞赛项目目标',
            content: this.item.target
          },
          {
            name: '经费预算（元）',
            content: this.item.budget
          },
          {
            name: '工作量预算（小时）',
            content: this.item.workload
          },
          {
            name: '竞赛项目方案',
            content: '<a>下载</a>'
          }
        ]
      }
    }
  }
</script>

