<template>
  <div v-if="type === '校外项目'">
    <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
  </div>
  <div v-else-if="type === '校内项目'">
    <Table border :columns="columns" :data="data2" disabled-hover :show-header="showHeader"></Table>
  </div>
  <div v-else>111</div>
</template>

<script>
  export default{
    name: 'projectDetail',
    props: ['type', 'item'],
    data () {
      return {
        showHeader: false,
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
            content: this.item.code
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
            content: this.item.subjects
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
            content: '<a href=' + this.$store.state.file1 + ' download="项目立项申报书">下载</a>'
          }
        ],
        data2: [
          {
            name: '项目编号',
            content: this.item.code
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
            name: '负责人电话',
            content: this.item.phone
          },
          {
            name: '联合企业',
            content: this.item.coCmp
          },
          {
            name: '赛项基本情况',
            content: this.item.basic
          },
          {
            name: '赛项意义',
            content: this.item.meaning
          },
          {
            name: '赛项特色',
            content: this.item.characteristic
          },
          {
            name: '比赛方式',
            content: this.item.form
          },
          {
            name: '成绩评定方式',
            content: this.item.rate
          },
          {
            name: '企业合作意向',
            content: this.item.purpose
          },
          {
            name: '建议竞赛器材',
            content: this.item.tool
          },
          {
            name: '建议竞赛平台',
            content: this.item.platform
          },
          {
            name: '经费预算（元）',
            content: this.item.budget
          },
          {
            name: '筹备工作进度',
            content: this.item.plan
          },
          {
            name: '竞赛项目方案',
            content: '<a href=' + this.$store.state.file1 + ' download="项目立项申报书">下载</a>'
          }
        ]
      }
    }
  }
</script>
