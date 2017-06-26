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
          奖励审核
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
        <div style="font-size: 18px;padding: 20px 0 20px 20px;">
          奖励说明
        </div>
        <Table border :columns="columns2" :data="data2" disabled-hover></Table>
        <Row>
          <Col span="24">
          <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
          </Col>
        </Row>

        <div style="padding: 20px 0 20px 20px;text-align: center;">

          <Button type="ghost" style="width: 150px">取消</Button>
          <Button type="primary" style="width: 150px">提交</Button>
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
            title: '参赛队伍编号',
            key: 'teamsNo',
            render: (h, params) => {
              return h('Input', {
                props: {
                  placeholder: '输入参赛队伍编号'
                }
              })
            }
          },
          {
            title: '参赛队伍',
            key: 'teams'
          },
          {
            title: '指导教师',
            key: 'teachers'
          },
          {
            title: '获得奖项',
            key: 'award',
            render: (h, params) => {
              return h('Input', {
                props: {
                  placeholder: '输入获得奖项'
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
                    type: 'primary',
                    size: 'small'
                  }
                }, '上传附件'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: (index) => {
                      this.data2.splice(index, 1)
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
            content: '201611688006',
            cellClassName: {
              name: 'demo-table-info-cell-age'
            }
          },
          {
            name: '项目名称',
            content: '基于大数据的酒店宴会定制化服务的研究'
          },
          {
            name: '项目类型',
            content: '校外项目'
          },
          {
            name: '项目负责人',
            content: '熊勇'
          }
        ],
        data2: [
          {
            teams: '',
            teachers: '',
            award: ''
          }
        ]
      }
    },
    methods: {
      handleAdd () {
        this.data2.push({
          teams: '',
          teachers: '',
          award: ''
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
