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
      <p>该生信息</p>
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
    name: 'StudentTemplate',
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
            name: '学号',
            content: this.item.no
          },
          {
            name: '学院',
            content: this.item.college
          },
          {
            name: '专业',
            content: this.item.major
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
            name: '学分奖励（分）',
            content: d.credit
          }
        ]
        this.lists.push(tmp)
      }
    }
  }
</script>
