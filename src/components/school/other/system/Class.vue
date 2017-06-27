<template>
  <div>
    <Row class="title">
      <Col span="20" class="">
        <Breadcrumb separator=">">
          <Breadcrumb-item href="/school/system/organization">学院列表</Breadcrumb-item>
          <Breadcrumb-item :href="majorurl">计算机科学与技术</Breadcrumb-item>
          <Breadcrumb-item>软件工程</Breadcrumb-item>
        </Breadcrumb>
      </Col>
      <Col span="4">
        <Button type="text" style="float: right;color: #2d8cf0;" size="large"><Icon type="plus"></Icon> 添加班级</Button>
      </Col>
    </Row>
    <div class="clear">
      <Table :columns="columns" :data="data1"></Table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'OrganizationList',
    data () {
      return {
        majorurl: '/school/system/organization/major/' + this.$route.params.id,
        columns: [
          {
            title: '班级名称',
            key: 'class'
          },
          {
            title: '所属学院',
            key: 'college'
          },
          {
            title: '所属专业',
            key: 'major'
          },
          {
            title: '所属年级',
            key: 'year'
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
                    }
                  }
                }, '编辑'),
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
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data1: [
          {
            major: '计算机科学与技术',
            college: '计算机科学与技术',
            class: '计算机科学与技术1班',
            year: '2017',
            id: '10001'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
