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
      <p>项目信息</p>
      <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
    </div>
    <div class="base-info">
      <p>项目成员工作量</p>
      <Table border :columns="columns2" :data="data2" disabled-hover></Table>
    </div>
    <div class="base-info">
      <p>指导教师工作量</p>
      <Table border :columns="columns3" :data="data3" disabled-hover></Table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'WorkloadTemplate',
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
            content: this.item.no
          },
          {
            name: '项目名称',
            content: this.item.name
          },
          {
            name: '项目类型',
            content: this.item.type
          }
        ],
        columns2: [
          {
            title: '成员学号',
            key: 'no',
            width: 200
          },
          {
            title: '成员姓名',
            key: 'name',
            width: 200
          },
          {
            title: '成员工作量（小时）',
            key: 'workload',
            width: 200
          },
          {
            title: '工作简述',
            key: 'desc'
          }
        ],
        data2: this.item.teams,
        columns3: [
          {
            title: '教师工号',
            key: 'no',
            width: 200
          },
          {
            title: '教师姓名',
            key: 'name',
            width: 200
          },
          {
            title: '教师工作量（小时）',
            key: 'workload',
            width: 200
          },
          {
            title: '工作简述',
            key: 'desc'
          }
        ],
        data3: this.item.teachers
      }
    },
    mounted () {
    }
  }
</script>
