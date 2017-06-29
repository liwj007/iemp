<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="3" @on-select="selectMenu">
        <Menu-item name="1">
          项目奖励
        </Menu-item>
        <Menu-item name="2">
          学生奖励
        </Menu-item>
        <Menu-item name="3">
          教师奖励
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div  class="filter">
        <div class="title">项目列表</div>
        <CollegeSelection :college="model1"></CollegeSelection>
        <div>
          <Select v-model="model2" style="width:200px">
            <Option v-for="item in scale" :value="item.value" :key="item">{{ item.label }}</Option>
          </Select>
        </div>
        <div>
          <Button type="info">筛选</Button>
        </div>
      </div>
      <div class="result clear">
        <Table :columns="columns1" :data="data1"></Table>
      </div>


    </section>
  </Workare>
</template>
<script>
  import CollegeSelection from '../template/CollegeSelection'
  import Workare from '../../Workare'
  export default{
    name: 'ProductAward',
    components: {
      Workare,
      CollegeSelection
    },
    data () {
      return {
        model1: '全部申请学院',
        scale: [
          {
            value: '0',
            label: '2016'
          },
          {
            value: '1',
            label: '2015'
          },
          {
            value: '2',
            label: '2014'
          }
        ],
        model2: '0',
        columns1: [
          {
            title: '编号',
            type: 'index',
            width: 80,
            align: 'center'
          },
          {
            title: '教师工号',
            key: 'no',
            width: 150
          },
          {
            title: '教师姓名',
            key: 'name',
            width: 400
          },
          {
            title: '所属学院',
            key: 'college'
          },
          {
            title: '年份',
            key: 'year'
          },
          {
            title: '项目数',
            key: 'proNum'
          },
          {
            title: '项目获奖数',
            key: 'awardNum'
          },
          {
            title: '奖金',
            key: 'money'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.$router.push('/school/performance/teacher_detail/' + params.row.no)
                    }
                  }
                }, '查看详情')
              ])
            }
          }
        ],
        data1: this.$store.state.teaAwardList
      }
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/school/performance/product')
            break
          case '2':
            this.$router.push('/school/performance/student')
            break
          case '3':
            this.$router.push('/school/performance/teacher')
            break
        }
      }
    }
  }
</script>

<style lang="less">
  .filter{
    height: 32px;
    padding-top: 20px;
    padding-left:30px;
    .title{
      font-size: 16px;
      text-align: center;
      line-height: 32px;
    }
    >div{
      float: left;
      padding-right: 8px;
      /*padding-top: 10px;*/
    }


  }
  .result{
    padding-top: 20px;
  }


</style>
