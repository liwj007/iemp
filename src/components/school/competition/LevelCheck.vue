<style lang="less" scoped>
  .title-div>div{
    float: left;
    padding-right: 16px;
  }
</style>
<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1">
        <Menu-item name="1">
          竞赛级别认定
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div  class="title-div">
        <div class="title-font">竞赛项目列表</div>
        <CollegeSelection :college="model1"></CollegeSelection>
        <div>
          <Select v-model="model2" style="width:200px">
            <Option v-for="item in category" :value="item.value" :key="item">{{ item.label }}</Option>
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
            <Page :total="this.$store.state.competitionList.length" :current="1" @on-change="changePage"></Page>
          </div>
        </div>
      </div>


    </section>
  </Workare>
</template>
<script>

  import Workare from '../../Workare'
  import CollegeSelection from '../template/CollegeSelection'
  export default{
    name: 'CompetitionList',
    components: {
      Workare,
      CollegeSelection
    },
    data () {
      return {
        model1: '全部申请学院',
        category: [
          {
            value: '0',
            label: '全部申请级别'
          },
          {
            value: '1',
            label: '一类'
          },
          {
            value: '2',
            label: '二类'
          },
          {
            value: '3',
            label: '三类'
          },
          {
            value: '4',
            label: '四类'
          },
          {
            value: '5',
            label: '五类'
          }
        ],
        model2: '0',
        columns1: [
          {
            title: '项目名称',
            key: 'name'
          },
          {
            title: '申请学院',
            key: 'college'
          },
          {
            title: '竞赛参数范围',
            key: 'scale'
          },
          {
            title: '学院申请认定',
            key: 'category'
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
                      this.$router.push('/school/competition/check/opinion/' + params.index)
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
      getCollegeData (index) {
        index = index === undefined ? 1 : index
        return this.$store.state.competitionList.slice((index - 1) * 10, index * 10)
      },
      changePage (index) {
        this.data1 = this.getCollegeData(index)
      }
    }
  }
</script>
