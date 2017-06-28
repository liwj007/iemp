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
        <div>
          <Select v-model="model1" style="width:200px">
            <Option v-for="item in collegeList" :value="item.value" :key="item">{{ item.label }}</Option>
          </Select>
        </div>
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
      </div>


    </section>
  </Workare>
</template>
<script>

  import Workare from '../../Workare'
  export default{
    name: 'ProjectList',
    components: {
      Workare
    },
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
        category: [
          {
            value: '0',
            label: '全部认定级别'
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
            title: '认定结果',
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
                      this.$router.push('/school/projectlist/detail/' + params.row.id)
                    }
                  }
                }, '查看')
              ])
            }
          }
        ],
        data1: this.$store.state.projectList
      }
    },
    methods: {
    }
  }
</script>
