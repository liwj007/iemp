<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1">
        <li class=" back">
          <router-link to="/pro/performance">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
          工作量登记
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
        <div style="font-size: 18px;padding: 20px 0 20px 20px;">
          项目成员工作量
        </div>
        <Table border :columns="columns2" :data="data2" disabled-hover></Table>
        <Row>
          <Col span="24">
          <Button type="dashed" long @click="handleAdd" icon="plus-round">添加</Button>
          </Col>
        </Row>

        <div style="font-size: 18px;padding: 20px 0 20px 20px;">
          指导教师工作量
        </div>
        <Table border :columns="columns3" :data="data3" disabled-hover></Table>
        <Row>
          <Col span="24">
          <Button type="dashed" long @click="handleAdd2" icon="plus-round">添加</Button>
          </Col>
        </Row>

        <div style="padding: 20px 0 20px 20px;text-align: center;">

          <Button type="ghost" style="width: 150px">取消</Button>
          <Button type="primary" style="width: 150px" onclick="alert('提交成果')">提交</Button>
          <Button type="info" style="width: 150px">暂存</Button>
        </div>
      </div>

    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'

  export default{
    name: 'AwardCheck',
    components: {
      Workare
    },
    data () {
      return {
        value7: '20',
        showHeader: false,
        columns: [
          {
            title: '名称',
            key: 'name',
            className: 'demo-table-info-column',
            width: 200
          },
          {
            title: '内容',
            key: 'content'
          }
        ],
        columns2: [
          {
            title: '成员学号',
            key: 'no',
            render: (h, params) => {
              return h('Input', {
                props: {
                  value: params.row.no
                },
                on: {
                  input: (val) => {
                    var tmp = this.$store.state.studentsForSearch[val]
                    if (tmp !== undefined) {
                      this.data2[params.index].name = tmp.name
                      this.data2[params.index].no = tmp.no
                    }
                  }
                }
              })
            }
          },
          {
            title: '成员姓名',
            key: 'name'
          },
          {
            title: '成员工作量（小时）',
            key: 'hours',
            render: (h, params) => {
              return h('Input', {
                props: {
                  value: params.row.hours
                },
                on: {
                  input: (val) => {
                    this.data2[params.index].hours = val
                  }
                }
              })
            }
          },
          {
            title: '工作简述',
            key: 'desc',
            render: (h, params) => {
              return h('Input', {
                props: {
                  value: params.row.desc
                },
                on: {
                  input: (val) => {
                    this.data2[params.index].desc = val
                  }
                }
              })
            }
          },
          {
            title: '操作',
            key: 'action',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.data2.splice(params.index, 1)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        columns3: [
          {
            title: '教师工号',
            key: 'no',
            render: (h, params) => {
              return h('Input', {
                props: {
                  value: params.row.no
                },
                on: {
                  input: (val) => {
                    var tmp = this.$store.state.teachersForSearch[val]
                    if (tmp !== undefined) {
                      this.data3[params.index].name = tmp.name
                      this.data3[params.index].no = tmp.no
                    }
                  }
                }
              })
            }
          },
          {
            title: '教师姓名',
            key: 'name'
          },
          {
            title: '教师工作量（小时）',
            key: 'hours',
            render: (h, params) => {
              return h('Input', {
                props: {
                  value: params.row.hours
                },
                on: {
                  input: (val) => {
                    this.data3[params.index].hours = val
                  }
                }
              })
            }
          },
          {
            title: '工作简述',
            key: 'desc',
            render: (h, params) => {
              return h('Input', {
                props: {
                  value: params.row.desc
                },
                on: {
                  input: (val) => {
                    this.data3[params.index].desc = val
                  }
                }
              })
            }
          },
          {
            title: '操作',
            key: 'action',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    click: (index) => {
                      this.data3.splice(index, 1)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data1: [
          {
            name: '项目编号',
            content: '201609118762',
            cellClassName: {
              name: 'demo-table-info-cell-age'
            }
          },
          {
            name: '项目名称',
            content: '中国大学生“互联网+”应用创新大赛'
          },
          {
            name: '项目类型',
            content: '校外项目'
          },
          {
            name: '项目负责人',
            content: '曹阳'
          }
        ],
        data2: [
          {
            no: '201433660105',
            name: '李琴',
            hours: '',
            desc: ''
          },
          {
            no: '201533471833',
            name: '谢云',
            hours: '',
            desc: ''
          },
          {
            no: '201433457441',
            name: '梁超',
            hours: '',
            desc: ''
          }
        ],
        data3: [
        ]
      }
    },
    methods: {
      handleAdd () {
        this.data2.push({
          no: '',
          name: '',
          hours: '',
          desc: ''
        })
      },
      handleAdd2 () {
        this.data3.push({
          no: '',
          name: '',
          hours: '',
          desc: ''
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .back{
    float: left;
    width: 32px;
    height: inherit;
    line-height: inherit;
    border-bottom: 2px solid transparent;
    text-align: center;
    a{
      color: #495060;
    }
  }

  .anchor{
    padding: 0 20px 30px 20px;
    h2{
      font-size: 20px;
      font-weight: 400;
      margin: 12px 0;;
    }
    p{
      font-size: 16px;
    }
  }
  .wrapper-content{
    padding-top: 20px;
    /*position: relative;*/
  }
</style>
