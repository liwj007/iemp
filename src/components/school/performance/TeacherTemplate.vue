<style scoped>

  .ivu-table td.demo-table-info-column{
    background-color: #f8f8f9;
  }

  .base-info{
    padding: 20px;
  }
  .base-info p{
    font-size: 16px;
    padding-bottom: 10px;
  }
</style>
<template>
  <div>
    <div class="base-info">
      <p>教师信息</p>
      <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
    </div>

    <div class="base-info">
      <p>该生获得的奖励情况</p>
      <div v-for="d in lists" style="padding-bottom: 16px">
        <Table border :columns="columns" :data="d" disabled-hover :show-header="showHeader"></Table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TeacherTemplate',
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
            name: '姓名',
            content: this.item.name
          },
          {
            name: '职称',
            content: this.item.title
          }
        ],
        lists: []
      }
    },
    mounted () {
      for (var i in this.item.awards) {
        var d = this.item.awards[i]
        var tmp = [
          {
            name: '项目名称',
            content: d.proName
          },
          {
            name: '参赛时间',
            content: d.time
          },
          {
            name: '获奖情况',
            content: d.award
          },
          {
            name: '奖励金额（元）',
            content: d.money
          },
          {
            name: '教学工作量奖励',
            content: d.workload
          },
          {
            name: '教学科研成果奖励',
            content: d.result
          }
        ]
        this.lists.push(tmp)
      }
    }
  }
</script>
