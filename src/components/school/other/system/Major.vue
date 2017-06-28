<template>
  <div>
    <Row class="title-div">
      <Col span="20" class="">
        <Breadcrumb separator=">">
          <Breadcrumb-item href="/school/system/organization">学院列表</Breadcrumb-item>
          <Breadcrumb-item>{{this.$route.params.id}}</Breadcrumb-item>
        </Breadcrumb>
      </Col>
      <Col span="4">
        <Button type="text" style="float: right;color: #2d8cf0;" size="large"><Icon type="plus"></Icon> 添加专业</Button>
      </Col>
    </Row>
    <div class="clear">
      <Table :columns="columns" :data="data1"></Table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Major',
    data () {
      return {
        columns: [
          {
            title: '专业名称',
            key: 'name'
          },
          {
            title: '所属学院',
            key: 'college'
          },
          {
            title: '所属学科',
            key: 'subject'
          },
          {
            title: '专业领导姓名',
            key: 'leader'
          },
          {
            title: '专业领导联系方式',
            key: 'phone'
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
                      this.$router.push('/school/system/class/' + params.row.name)
                    }
                  }
                }, '查看班级'),
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
        data1: this.getMajor()
      }
    },
    methods: {
      getMajor () {
        return this.$store.state.majors['金属学院']
      }
    }
  }
</script>
