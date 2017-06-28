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
      <div>
        <Select v-model="model1" style="width:200px">
          <Option v-for="item in collegeList" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
      </div>
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
  export default{
    name: 'Teacher',
    data () {
      return {
        collegeList: [
          {
            value: '0',
            label: '全部申请学院'
          },
          {
            value: '1',
            label: '计算机'
          },
          {
            value: '2',
            label: '机电'
          },
          {
            value: '3',
            label: '通信'
          },
          {
            value: '4',
            label: '机械'
          },
          {
            value: '5',
            label: '经贸'
          }
        ],
        model1: '0',
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
        return this.$store.state.teachers.slice((index - 1) * 10, index * 10 - 1)
      },
      changePage (index) {
        this.data1 = this.getTeachers(index)
      }
    }
  }
</script>

