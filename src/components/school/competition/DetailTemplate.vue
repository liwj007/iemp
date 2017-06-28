
<template>
  <div>
    <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader" class="red-info"></Table>
  </div>
</template>


<script>
  export default{
    name: 'DetailTemplate',
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
            content: '201611688006'
          },
          {
            name: '项目名称',
            content: '基于大数据的酒店宴会定制化服务的研究'
          },
          {
            name: '所属学院',
            content: '计算机科学与技术'
          },
          {
            name: '竞赛主办单位',
            content: 'ACM学会'
          },
          {
            name: '竞赛协办单位',
            content: ''
          },
          {
            name: '竞赛网址',
            content: 'http://acm.sdibt.edu.cn/JudgeOnline/'
          },
          {
            name: '参赛范围',
            content: '国际'
          },
          {
            name: '涉及学科',
            content: 'C语言，数据结构，算法，数学，计算几何学'
          },
          {
            name: '参赛形式',
            content: '团队'
          },
          {
            name: '竞赛方式',
            content: ''
          },
          {
            name: '拟参赛规模',
            content: ''
          },
          {
            name: '拟申请类别',
            content: '一类项目',
            cellClassName: {
              content: 'red-info'
            }
          },
          {
            name: '项目简介',
            content: '有悠久历史的权威性组织ACM学会（Association for Computing Machinery）主办，是世界上公认的规模最大、水平最高、参与' +
            '人数最多的大学生程序设计竞赛，其宗旨是使大学生能通过计算机充分展示自己分析问题和 解决问题的能力。ACM-ICPC赛事是目前国内高校承办' +
            '的唯一一项具有国际影响的计算机竞赛，受到教育界和工业界的高度重视和承认'
          },
          {
            name: '项目详述',
            content: '<a>下载</a>'
          }
        ]
      }
    }
  }
</script>
