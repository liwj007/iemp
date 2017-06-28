<template>
  <div v-if="type === '校外'">
    <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
  </div>
  <div v-else-if="type === '校内'">
    <Table border :columns="columns" :data="data2" disabled-hover :show-header="showHeader"></Table>
  </div>
  <div v-else>111</div>
</template>

<script>
  export default{
    name: 'projectDetail',
    props: ['type'],
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
          },
          {
            name: '指导教师',
            content: '曹静'
          },
          {
            name: '指导教师职称',
            content: '讲师'
          },
          {
            name: '所属学院',
            content: '计算机科学与技术'
          },
          {
            name: '申请年份',
            content: '2017年'
          },
          {
            name: '竞赛主办单位',
            content: ''
          },
          {
            name: '竞赛协办单位',
            content: ''
          },
          {
            name: '竞赛网址',
            content: ''
          },
          {
            name: '竞赛类别',
            content: ''
          },
          {
            name: '参赛范围',
            content: ''
          },
          {
            name: '涉及学科',
            content: ''
          },
          {
            name: '参赛形式',
            content: ''
          },
          {
            name: '参赛规模',
            content: ''
          },
          {
            name: '竞赛起止时间',
            content: ''
          },
          {
            name: '竞赛项目简介',
            content: ''
          },
          {
            name: '竞赛项目目标',
            content: ''
          },
          {
            name: '经费预算（元）',
            content: ''
          },
          {
            name: '工作量预算（小时）',
            content: ''
          },
          {
            name: '竞赛项目方案',
            content: '<a>下载</a>'
          }
        ],
        data2: [
          {
            name: '项目编号',
            content: '201611688006'
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
          },
          {
            name: '指导教师',
            content: '曹静'
          },
          {
            name: '指导教师职称',
            content: '讲师'
          },
          {
            name: '所属学院',
            content: '计算机科学与技术'
          },
          {
            name: '负责人电话',
            content: ''
          },
          {
            name: '联合企业',
            content: ''
          },
          {
            name: '赛项基本情况',
            content: ''
          },
          {
            name: '赛项意义',
            content: ''
          },
          {
            name: '赛项特色',
            content: ''
          },
          {
            name: '比赛方式',
            content: ''
          },
          {
            name: '成绩评定方式',
            content: ''
          },
          {
            name: '企业合作意向',
            content: ''
          },
          {
            name: '建议竞赛器材',
            content: ''
          },
          {
            name: '建议竞赛平台',
            content: ''
          },
          {
            name: '经费预算（元）',
            content: ''
          },
          {
            name: '筹备工作进度',
            content: ''
          },
          {
            name: '竞赛项目方案',
            content: '<a>下载</a>'
          }
        ]
      }
    }
  }
</script>
