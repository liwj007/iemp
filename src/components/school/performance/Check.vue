<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1">
        <li class=" back">
          <router-link to="/school/performance/product">
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

        <div style="padding: 20px 0 20px 20px;text-align: center;">
          <Button type="primary" style="width: 150px">提交</Button>
          <Button type="ghost" style="width: 150px">取消</Button>
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
            title: '参赛队伍',
            key: 'teams'
          },
          {
            title: '指导教师',
            key: 'teachers'
          },
          {
            title: '获得奖项',
            key: 'award'
          },
          {
            title: '学生奖金',
            key: 'stu',
            render: (h, params) => {
              return h('Input', {
                props: {
                  placeholder: '输入金额',
                  value: params.row.stu
                }
              })
            }
          },
          {
            title: '教师奖金',
            key: 'tea',
            render: (h, params) => {
              return h('Input', {
                props: {
                  placeholder: '输入金额',
                  value: params.row.tea
                }
              })
            }
          },
          {
            title: '学生学分',
            key: 'stu2',
            render: (h, params) => {
              return h('Input', {
                props: {
                  placeholder: '输入学分',
                  value: params.row.stu2
                }
              })
            }
          },
          {
            title: '教师工作量',
            key: 'tea2',
            render: (h, params) => {
              return h('Input', {
                props: {
                  placeholder: '输入工作量',
                  value: params.row.tea2
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
                  }
                }, '下载附件')
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
            teams: '秦新，124556；</br>王淼，2513566',
            teachers: '秦新',
            award: '全国一等奖',
            stu: 120.00,
            tea: 120.00,
            stu2: 20,
            tea2: 200
          }
        ]
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">


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
