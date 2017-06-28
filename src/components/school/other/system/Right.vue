<template>
     <div>
       <Row class="title-div title-font">
         <Col span="20" class="">用户权限列表</Col>
         <Col span="4">
          <Button type="text" style="float: right;color: #2d8cf0;" size="large" @click="modal1 = true"><Icon type="plus"></Icon> 添加用户</Button>
         <Modal
           v-model="modal1"
           title="添加用户"
           @on-ok="ok"
           @on-cancel="cancel">
           <Form :model="user" label-position="top">
             <Form-item label="标题">
               <Input v-model="user.no"></Input>
             </Form-item>
             <Form-item label="爱好" prop="interest">
               <Checkbox-group v-model="user.rights">
                 <Row>
                   <Col span="12">
                    <Checkbox label="1">竞赛项目级别认定申请</Checkbox>
                   </Col>
                   <Col span="12">
                    <Checkbox label="9">项目立项审核</Checkbox>
                   </Col>
                 </Row>
                 <Row>
                   <Col span="12">
                   <Checkbox label="2">竞赛项目级别认定审核</Checkbox>
                   </Col>
                   <Col span="12">
                   <Checkbox label="10">项目实施方案提交</Checkbox>
                   </Col>
                 </Row>
                 <Row>
                   <Col span="12">
                   <Checkbox label="3">竞赛项目查看</Checkbox>
                   </Col>
                   <Col span="12">
                   <Checkbox label="11">项目总结方案提交</Checkbox>
                   </Col>
                 </Row>
                 <Row>
                   <Col span="12">
                   <Checkbox label="4">项目立项申请</Checkbox>
                   </Col>
                   <Col span="12">
                   <Checkbox label="12">项目总结方案审核</Checkbox>
                   </Col>
                 </Row>
                 <Row>
                   <Col span="12">
                   <Checkbox label="5">奖励标准</Checkbox>
                   </Col>
                   <Col span="12">
                   <Checkbox label="13">工作量认定申请</Checkbox>
                   </Col>
                 </Row>
                 <Row>
                   <Col span="12">
                   <Checkbox label="6">奖励认定申请</Checkbox>
                   </Col>
                   <Col span="12">
                   <Checkbox label="14">工作量认定审核</Checkbox>
                   </Col>
                 </Row>
                 <Row>
                   <Col span="12">
                   <Checkbox label="7">奖励认定审核</Checkbox>
                   </Col>
                   <Col span="12">
                   <Checkbox label="15">评估统计查看</Checkbox>
                   </Col>
                 </Row>
                 <Row>
                   <Col span="12">
                   <Checkbox label="8">项目立项审核</Checkbox>
                   </Col>
                   <Col span="12">
                   <Checkbox label="16">用户权限分配</Checkbox>
                   </Col>
                 </Row>
               </Checkbox-group>
             </Form-item>
           </Form>
         </Modal>
         </Col>
       </Row>
       <div class="clear">
         <Table :columns="columns" :data="data1"></Table>
         <div style="margin: 10px;overflow: hidden">
           <div style="float: right;">
             <Page :total="this.$store.state.rights.length" :current="page" @on-change="changePage"></Page>
           </div>
         </div>
       </div>
     </div>


</template>
<script>
  var map = {
    1: '竞赛项目级别认定申请',
    2: '竞赛项目级别认定审核',
    3: '竞赛项目查看',
    4: '项目立项申请',
    5: '奖励标准',
    6: '奖励认定申请',
    7: '奖励认定审核',
    8: '用户信息查看',
    9: '项目立项审核',
    10: '项目实施方案提交',
    11: '项目总结方案提交',
    12: '项目总结方案审核',
    13: '工作量认定申请',
    14: '工作量认定审核',
    15: '评估统计查看',
    16: '用户权限分配'
  }
  export default {
    name: 'UserRight',
    data () {
      return {
        value: '',
        user: {
          no: '',
          rights: []
        },
        page: 1,
        modal1: false,
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '职工号',
            key: 'no'
          },
          {
            title: '管辖权限',
            key: 'rights',
            render: (h, params) => {
              var tmp = ''
              for (var r in params.row.rights) {
                tmp += map[params.row.rights[r]] + ','
              }
              return h('span', tmp)
            }
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
                      this.data1.splice(params.index, 1)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data1: this.getRights()
      }
    },
    methods: {
      ok () {
        var n = ''
        for (var i in this.$store.state.teachers) {
          var u = this.$store.state.teachers[i]
          if (u.no === this.user.no) {
            n = u.name
          }
        }
        if (n === '') {
          this.$Notice.error({
            title: '错误',
            desc: '查无此人'
          })
          this.user.no = ''
          this.user.rights = []
          return
        }
        var tmp = {
          no: this.user.no,
          name: n,
          rights: this.user.rights
        }
        this.$store.commit('ADD_USER_RIGHT', tmp)
        this.changePage(this.page)
        this.user.no = ''
        this.user.rights = []
      },
      cancel () {
      },
      getRights (index) {
        index = index === undefined ? 1 : index
        return this.$store.state.rights.slice((index - 1) * 10, index * 10 - 1)
      },
      changePage (index) {
        this.page = index
        this.data1 = this.getRights(index)
      }
    }
  }
</script>
