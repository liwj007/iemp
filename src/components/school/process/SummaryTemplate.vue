<template>
 <div>
   <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
 </div>
</template>

<script>
  export default{
    name: 'summaryDetail',
    props: ['item'],
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
            name: '参赛人数',
            content: this.item.userNum
          },
          {
            name: '参赛队伍数',
            content: this.item.teamNum
          },
          {
            name: '经费预算（元）',
            content: this.item.budget
          },
          {
            name: '经费支出（元）',
            content: this.item.pay
          },
          {
            name: '经费说明',
            content: this.item.desc
          },
          {
            name: '获奖数',
            content: this.item.awardNum
          },
          {
            name: '往年获奖情况',
            content: this.item.awardPast
          },
          {
            name: '学院获奖情况',
            content: this.item.awardDesc
          },
          {
            name: '附件',
            content: '<a href=' + this.$store.state.file2 + ' download="项目立项申报书">下载</a>'
          }
        ]
      }
    }
  }
</script>
