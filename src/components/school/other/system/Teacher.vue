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
            type: 'index',
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
        data1: [
          {
            no: '10001',
            name: '王五',
            college: '计算机科学与工程',
            title: '讲师',
            duty: '无',
            phone: '18636353232',
            awardNum: '2'
          },
          {
            no: '10002',
            name: '李四',
            college: '计算机科学与工程',
            title: '副教授',
            duty: '系主任',
            phone: '18636355879',
            awardNum: '5'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

