<template>
  <div>
    <Row class="title-div">
      <Col span="20" class="">
        <Breadcrumb separator=">">
          <Breadcrumb-item href="/school/system/organization">学院列表</Breadcrumb-item>
          <Breadcrumb-item :href="majorurl">金融学院</Breadcrumb-item>
          <Breadcrumb-item>{{this.$route.params.id}}</Breadcrumb-item>
        </Breadcrumb>
      </Col>
      <Col span="4">
        <Button type="text" style="float: right;color: #2d8cf0;" size="large"><Icon type="plus"></Icon> 添加班级</Button>
      </Col>
    </Row>
    <div class="clear">
      <Table :columns="columns" :data="data1"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="17" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Class',
    data () {
      return {
        majorurl: '/school/system/major/金融学院',
        columns: [
          {
            title: '班级名称',
            key: 'name'
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
        data1: this.getClassData()
      }
    },
    methods: {
      getClassData (index) {
        index = index === undefined ? 1 : index
        return this.$store.state.classes.slice((index - 1) * 10, index * 10 - 1)
      },
      changePage (index) {
        this.data1 = this.getClassData(index)
      }
    }
  }
</script>
