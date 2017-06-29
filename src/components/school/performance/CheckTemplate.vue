<template>
  <div>
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
</template>
<script>
  export default {
    name: 'CheckTemplate',
    props: ['item'],
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
            content: this.item.code
          },
          {
            name: '项目名称',
            content: this.item.name
          },
          {
            name: '项目类型',
            content: this.item.type
          },
          {
            name: '项目负责人',
            content: this.item.admin
          }
        ],
        data2: [
          {
            teams: this.item.teams,
            teachers: this.item.teacher,
            award: this.item.award,
            stu: this.item.stuAward,
            tea: this.item.teaAward,
            stu2: this.item.stuCredit,
            tea2: this.item.workload
          }
        ]
      }
    }
  }
</script>
