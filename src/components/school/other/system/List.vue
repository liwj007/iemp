<template>
     <div>
       <Row class="title-div title-font">
         <Col span="20" class="">组织结构列表</Col>
         <Col span="4">
          <Button type="text" style="float: right;color: #2d8cf0;" size="large" @click="modal1 = true"><Icon type="plus"></Icon> 添加学院</Button>
         <Modal
           v-model="modal1"
           title="添加学院"
           @on-ok="ok"
           @on-cancel="cancel">
           <Input v-model="value" placeholder="请输入学院名称" style="width: 450px" size="large"></Input>
         </Modal>
         </Col>
       </Row>
       <div class="clear">
         <Table :columns="columns" :data="data1"></Table>
         <div style="margin: 10px;overflow: hidden">
           <div style="float: right;">
             <Page :total="this.$store.state.colleges.length" :current="1" @on-change="changePage"></Page>
           </div>
         </div>
       </div>
     </div>


</template>
<script>
  export default {
    name: 'OrganizationList',
    data () {
      return {
        value: '',
        modal1: false,
        columns: [
          {
            title: '学院名称',
            key: 'name'
          },
          {
            title: '学院领导姓名',
            key: 'leader'
          },
          {
            title: '学院领导联系方式',
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
                      this.$router.push('/school/system/major/' + params.row.name)
                    }
                  }
                }, '查看专业'),
//                h('Button', {
//                  props: {
//                    type: 'text',
//                    size: 'small'
//                  },
//                  style: {
//                    marginRight: '5px'
//                  },
//                  on: {
//                    click: () => {
//                    }
//                  }
//                }, '编辑'),
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
                      this.data1.splice(params.index, 1)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data1: this.getCollegeData()
      }
    },
    methods: {
      ok () {
        var tmp = {
          name: this.value,
          leader: '李荣',
          phone: '13100001111'
        }
        this.$store.commit('ADD_COLLEGE', tmp)
      },
      cancel () {
      },
      getCollegeData (index) {
        index = index === undefined ? 1 : index
        return this.$store.state.colleges.slice((index - 1) * 10, index * 10)
      },
      changePage (index) {
        this.data1 = this.getCollegeData(index)
      }
    }
  }
</script>
