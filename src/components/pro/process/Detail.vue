<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" @on-select="selectMenu">
        <li class=" back">
          <router-link to="/pro/process/admin">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <p>{{this.item.title}}</p>
      </Menu>
    </section>
    <section slot="footer">
        <div  class="filter">
          <div class="title">参赛学生</div>
        </div>

        <div class="result clear">
          <Table :columns="columns1" :data="data1"></Table>
        </div>

      <Modal
        title="分配导师"
        v-model="modal8"
        :mask-closable="false" @on-cancel="onCancel" @on-ok="handleSubmit">
        <Form ref="formDynamic" :model="formDynamic" :label-width="80">
          <Form-item
            v-for="(item, index) in formDynamic.items"
            :key="item"
            :label="'导师' + (index + 1)"
            :prop="'items.' + index + '.value'"
            :rules="{required: true, message: '导师' + (index + 1) +'不能为空', trigger: 'blur'}">
            <Row>
              <Col span="18">
              <Input type="text" v-model="item.value" placeholder="请输入..." ></Input>
              </Col>
              <Col span="4" offset="1">
              <Button type="ghost" @click="handleRemove(index)">删除</Button>
              </Col>
            </Row>
          </Form-item>
          <Form-item>
            <Row>
              <Col span="12">
              <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
              </Col>
            </Row>
          </Form-item>
        </Form>
      </Modal>


    </section>
  </Workare>
</template>
<script>

  import Workare from '../../Workare'
  import AlertFrom2 from './Form2'
  export default{
    name: 'proProcess1',
    components: {
      Workare
    },
    data () {
      return {
        modal8: false,
        formDynamic: {
          items: [
            {
              value: ''
            }
          ]
        },
        item: {
          title: '参赛学生列表'
        },
        columns1: [
          {
            title: '编号',
            key: 'code',
            width: 150
          },
          {
            title: '参赛队伍',
            key: 'team',
            ellipsis: true,
            width: 400
          },
          {
            title: '参赛人数',
            key: 'number'
          },
          {
            title: '有无指导教师',
            key: 'hasTeacher'
          },
          {
            title: '指导教师',
            key: 'teacher'
          },
          {
            title: '指导教师职称',
            key: 'title'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('div', [
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      color: 'blue'
                    },
                    on: {
                      click: () => {
                        this.modal8 = true
                      }
                    }
                  }, '分配导师')
                ]),
                h('div', [
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      color: 'blue'
                    },
                    on: {
                      click: () => {
                        const title = '修改队伍'
                        this.$Modal.confirm({
                          title: title,
                          width: '900px',
                          render: (h) => {
                            return h(AlertFrom2)
                          }
                        })
                      }
                    }
                  }, '修改队伍')
                ])
              ])
            }
          }
        ],
        data1: this.$store.state.competitionTeams[this.$route.params.id]
      }
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/pro/process/signup')
            break
          case '2':
            this.$router.push('/pro/process/course')
            break
          case '3':
            this.$router.push('/pro/process/summary')
            break
        }
      },
      editMentor: function () {
        this.$Modal.confirm({
          title: '添加',
          render: (h) => {
            return h('Input', {
              props: {
                value: this.value,
                autofocus: true,
                placeholder: '请输入项目编号'
              },
              on: {
                input: (val) => {
                  this.value = val
                }
              }
            })
          }
        })
      },
      editTeam: function () {
        this.$Modal.confirm({
          title: '添加',
          render: (h) => {
            return h('Input', {
              props: {
                value: this.value,
                autofocus: true,
                placeholder: '请输入项目编号'
              },
              on: {
                input: (val) => {
                  this.value = val
                }
              }
            })
          }
        })
      },
      handleSubmit (e) {
        this.$refs['formDynamic'].validate((valid) => {
          var res = ''
          if (valid) {
            for (var x in this.formDynamic.items) {
              var tmp = this.formDynamic.items[x]
              if (this.$store.state.teachersForSearch[tmp.value] === undefined) {
                alert('无法查到添加的老师')
                return
              }
              res = this.$store.state.teachersForSearch[tmp.value] + ','
            }
            this.$store.commit('ADD_PRO_TEACHE', res)
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      onCancel () {
        this.$refs['formDynamic'].resetFields()
      },
      handleAdd () {
        this.formDynamic.items.push({
          value: ''
        })
      },
      handleRemove (index) {
        this.formDynamic.items.splice(index, 1)
      }
    }
  }
</script>

<style lang="less">
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
  .filter{
    height: 32px;
    padding-top: 20px;
    padding-left:30px;
    .title{
      font-size: 16px;
      text-align: center;
      line-height: 32px;
    }
    >div{
      float: left;
      padding-right: 8px;
      /*padding-top: 10px;*/
    }


  }
  .result{
    padding-top: 20px;
  }

  .unfile{
    color: #c0c0c0;
    padding-right: 9px;
  }
  .filter .right{
    float:right;
    position:relative;
    margin-right:5px;

  }
  .ivu-modal-content{
    top:60px;
    width:500px;
  }
  /*.ivu-modal-body input{*/
    /*top:15px;*/
  /*}*/

</style>
