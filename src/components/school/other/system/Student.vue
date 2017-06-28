<style lang="less" scoped>
  .title-div>div{
    float: left;
    padding-right: 16px;
  }
</style>
<template>
  <div>
    <div  class="title-div">
      <div class="title-font">学生用户列表</div>
      <div>
        <Select v-model="model1" style="width:200px">
          <Option v-for="item in collegeList" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
      </div>
      <div>
        <Select v-model="model2" style="width:200px">
          <Option v-for="item in years" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
      </div>
      <div>
        <Select v-model="model3" style="width:200px">
          <Option v-for="item in majors" :value="item.value" :key="item">{{ item.label }}</Option>
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
          <Page :total="this.$store.state.students.length" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
  export default{
    name: 'Student',
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
        years: [
          {
            value: '0',
            label: '全部年级'
          },
          {
            value: '1',
            label: '2016'
          },
          {
            value: '2',
            label: '2015'
          }
        ],
        model2: '0',
        model3: '0',
        majors: [
          {
            value: '0',
            label: '全部专业'
          },
          {
            value: '1',
            label: '计算机科学与工程'
          },
          {
            value: '2',
            label: '软件理论与应用'
          }
        ],
        columns1: [
          {
            title: '序号',
            key: 'id',
            width: 80,
            align: 'center'
          },
          {
            title: '学号',
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
            title: '专业',
            key: 'major'
          },
          {
            title: '班级',
            key: 'class'
          },
          {
            title: '电话',
            key: 'phone'
          },
          {
            title: '银行卡号',
            key: 'card'
          }
        ],
        data1: this.getStudents()
      }
    },
    methods: {
      getStudents (index) {
        index = index === undefined ? 1 : index
        return this.$store.state.students.slice((index - 1) * 10, index * 10 - 1)
      },
      changePage (index) {
        this.data1 = this.getStudents(index)
      }
    }
  }
</script>

