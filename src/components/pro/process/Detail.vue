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


    </section>
  </Workare>
</template>
<script>

  import Workare from '../../Workare'
  export default{
    name: 'proProcess1',
    components: {
      Workare
    },
    data () {
      return {
        item: {
          title: '参赛学生列表'
        },
        collegeList: [
          {
            value: '0',
            label: '全部申请学院'
          },
          {
            value: '1',
            label: '计算机'
          },
          {
            value: '2',
            label: '机电'
          },
          {
            value: '3',
            label: '通信'
          },
          {
            value: '4',
            label: '机械'
          },
          {
            value: '5',
            label: '经贸'
          }
        ],
        model1: '0',
        scale: [
          {
            value: '0',
            label: '不限校内校外项目'
          },
          {
            value: '1',
            label: '校内项目'
          },
          {
            value: '2',
            label: '校外项目'
          }
        ],
        model2: '0',
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
            key: 'num'
          },
          {
            title: '有无指导教师',
            key: 'mentorFlag'
          },
          {
            title: '指导教师',
            key: 'mentor'
          },
          {
            title: '指导教师职称',
            key: 'mentorRank'
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
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$Modal.confirm({
                          title: '添加',
                          render: (h) => {
                            return h('Input', {
                              props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: '请输入导师职工号'
                              },
                              on: {
                                input: (val) => {
                                  this.value = val
                                }
                              }
                            })
                          }
                        })
                      }
                    }
                  }, '分配导师')
                ]),
                h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                      }
                    }
                  }, '修改队伍')
                ])
              ])
            }
          }
        ],
        data1: [
          {
            code: '1',
            team: '李梦204005；少奇2355',
            num: '3',
            mentorFlag: '有',
            mentor: '少奇',
            mentorRank: '讲师'

            // teacher: '李雨欣',
            // colleague: '计算机',
            // file: 1
          },
          {
            code: '2',
            team: '李梦204005；少奇2355',
            num: '3',
            mentorFlag: '有',
            mentor: '少奇',
            mentorRank: '讲师'
          }
        ]
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
    top:60px
  }
  .ivu-modal-body input{
    top:15px;
  }

</style>
