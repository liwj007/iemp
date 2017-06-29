<style lang="less" scoped>
  .title-div>div{
    float: left;
    padding-right: 16px;
  }
</style>
<template>
  <div>
    <div  class="title-div">
      <div class="title-font">教师用户列表</div>
      <CollegeSelection :college="model1"></CollegeSelection>
      <div>
        <Button type="info">筛选</Button>
      </div>
    </div>

    <div class="clear" style="padding-top: 20px;">
      <Table :columns="columns1" :data="data1"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="this.$store.state.teachers.length" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
  import CollegeSelection from '../../template/CollegeSelection'
  export default{
    name: 'Teacher',
    components: {
      CollegeSelection
    },
    data () {
      return {
        model1: '全部申请学院',
        columns1: [
          {
            title: '序号',
            key: 'id',
            width: 80,
            align: 'center'
          },
          {
            title: '职工号',
            key: 'no',
            width: 150
          },
          {
            title: '姓名',
            key: 'name',
            width: 150
          },
          {
            title: '学院',
            key: 'college'
          },
          {
            title: '职称',
            key: 'title'
          },
          {
            title: '职务',
            key: 'duty'
          },
          {
            title: '电话',
            key: 'phone'
          },
          {
            title: '指导学生获奖次数',
            key: 'awardNum'
          }
        ],
        data1: this.getTeachers()
      }
    },
    methods: {
      getTeachers (index) {
        index = index === undefined ? 1 : index
        return this.$store.state.teachers.slice((index - 1) * 10, index * 10)
      },
      changePage (index) {
        this.data1 = this.getTeachers(index)
      }
    }
  }
</script>

