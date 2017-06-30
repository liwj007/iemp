<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="3" @on-select="selectMenu">
        <Menu-item name="1">
          <!--<router-link to="/school/project/admin">-->
            项目报名
          <!--</router-link>-->

        </Menu-item>
        <Menu-item name="2">
          <!--<router-link to="/school/project/admin">-->
            项目过程
          <!--</router-link>-->

        </Menu-item>
        <Menu-item name="3">
          <!--<router-link to="/school/project/his">-->
            项目总结
          <!--</router-link>-->

        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
        <div  class="filter">
          <div class="title">项目立项列表</div>
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
    name: 'Process1',
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
                  h('a', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$router.push('/pro/process/editsum/' + params.row.code)
                      }
                    }
                  }, '编辑')
                ])
              } else if (params.row.state === 2) {
                return h('div', [
                  h('span', {
                    attrs: {
                      class: 'unfile'
                    }
                  }, '未通过'),
                  h('a', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                      this.$router.push('/pro/process/editsum/' + params.row.code)
                      }
                    }
                  }, '编辑')
                ])
              } else {
                return h('div', [
                  h('span', {
                    attrs: {
                      class: 'unfile'
                    }
                  }, '已通过'),
                  h('a', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$router.push('/pro/process/check/' + params.row.code)
                      }
                    }
                  }, '查看')
                ])
              }
            }
          }
        ],
        data1: this.$store.state.summaryProjects
      }
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/pro/process/admin')
            break
          case '2':
            this.$router.push('/pro/process/course')
            break
          case '3':
            this.$router.push('/pro/process/summary')
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

  .unfile{
    color: #c0c0c0;
    padding-right: 9px;
  }


</style>
