<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1">
        <Menu-item name="1">
          工作量认定
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div  class="filter">
        <div class="title">项目列表</div>
      </div>
      <div class="result clear">
        <Table :columns="columns1" :data="data1"></Table>
      </div>


    </section>
  </Workare>
</template>
<script>

  import Workare from '../../Workare'
  export default{
    name: 'Workload',
    components: {
      Workare
    },
    data () {
      return {
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
              if (params.row.state === 1) {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      color: 'blue'
                    },
                    on: {
                      click: () => {
                        this.$router.push('/pro/workload/register/' + params.row.code)
                      }
                    }
                  }, '登记')
                ])
              } else if (params.row.state === 2) {
                return h('div', [
                  h('span', {
                    attrs: {
                      class: 'undo'
                    }
                  }, '已提交 '),
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      color: 'blue'
                    },
                    on: {
                      click: () => {
                      }
                    }
                  }, '查看')
                ])
              } else if (params.row.state === 3) {
                return h('div', [
                  h('span', {
                    attrs: {
                      class: 'undo'
                    }
                  }, '已通过 '),
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      color: 'blue'
                    },
                    on: {
                      click: () => {
                      }
                    }
                  }, '查看')
                ])
              }
            }
          }
        ],
        data1: this.$store.state.awardProjects
      }
    },
    methods: {
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
