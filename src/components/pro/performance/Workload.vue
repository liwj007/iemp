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
            key: 'colleague'
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
        data1: [
          {
            code: '201604010128',
            name: '全国大学生数字媒体作品竞赛',
            type: '校外项目',
            admin: '刘云霄',
            teacher: '欧陆',
            colleague: '人文与传播学院',
            state: 1
          },
          {
            code: '201603129874',
            name: '烟台市大学生创新创业大赛',
            type: '校外项目',
            admin: '钱允新',
            teacher: '李文军',
            colleague: '中科创业学院',
            state: 2
          },
          {
            code: '201602118467',
            name: '山东省财税技能大赛',
            type: '校外项目',
            admin: '万春华',
            teacher: '张列',
            colleague: '统计学院',
            state: 3
          }
        ]
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
