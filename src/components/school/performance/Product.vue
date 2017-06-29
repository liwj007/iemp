<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" @on-select="selectMenu">
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
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page :total="this.$store.state.awardList.length" :current="1" @on-change="changePage"></Page>
          </div>
        </div>
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
            label: '不限校内校外项目'
          },
          {
            value: '1',
            label: '校内项目'
          },
          {
            value: '2',
            label: '校外项目'
          }
        ],
        model2: '0',
        columns1: [
          {
            title: '项目编号',
            key: 'code',
            width: 150
          },
          {
            title: '项目名称',
            key: 'name',
            ellipsis: true,
            width: 400
          },
          {
            title: '项目类型',
            key: 'type'
          },
          {
            title: '项目负责人',
            key: 'admin'
          },
          {
            title: '指导教师',
            key: 'teacher'
          },
          {
            title: '所属学院',
            key: 'college'
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
                      this.$router.push('/school/performance/check/' + params.row.code)
                    }
                  }
                }, '审核')
              ])
            }
          }
        ],
        data1: this.getCollegeData()
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
      },
      getCollegeData (index) {
        index = index === undefined ? 1 : index
        return this.$store.state.awardList.slice((index - 1) * 10, index * 10)
      },
      changePage (index) {
        this.data1 = this.getCollegeData(index)
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
