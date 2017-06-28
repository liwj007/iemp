<template>
     <div>
       <Row class="title-div title-font">
         <Col span="20" class="">学生奖励标准</Col>
         <Col span="4">
          <Button type="text" style="float: right;color: #2d8cf0;" size="large" @click="modal1 = true"><Icon type="plus"></Icon> 添加标准</Button>
         <Modal
           v-model="modal1"
           title="添加标准"
           @on-ok="ok"
           @on-cancel="cancel">
           <Form :model="obj" label-position="top">
             <Form-item label="项目级别">
               <Select v-model="obj.pro" placeholder="请选择项目级别">
                 <Option value="国家级综合类竞赛">国家级综合类竞赛</Option>
                 <Option value="省部级竞赛">省部级竞赛</Option>
                 <Option value="地市级竞赛">地市级竞赛</Option>
                 <Option value="其他类竞赛">其他类竞赛</Option>
               </Select>
             </Form-item>
             <Form-item label="奖项级别">
               <Row>
                 <Col span="11" >
                 <Select v-model="obj.level1" placeholder="请选择级别">
                   <Option value="国家级">国家级</Option>
                   <Option value="省级">省级</Option>
                   <Option value="地级">地级</Option>
                   <Option value="">其他</Option>
                 </Select>
                 </Col>
                 <Col span="12" offset="1">
                 <Select v-model="obj.level2" placeholder="请选择级别">
                   <Option value="特等奖">特等奖</Option>
                   <Option value="一等奖">一等奖</Option>
                   <Option value="二等奖">二等奖</Option>
                   <Option value="三等奖">三等奖</Option>
                   <Option value="四等奖">四等奖</Option>
                   <Option value="其他">其他</Option>
                 </Select>
                 </Col>
               </Row>
             </Form-item>
             <Row>
               <Col span="11">
               <Form-item label="奖励（元）">
                 <Input v-model="obj.money"></Input>
               </Form-item>
               </Col>
               <Col span="12" offset="1">
               <Form-item label="学分奖励">
                 <Input v-model="obj.credit"></Input>
               </Form-item>
               </Col>
             </Row>


           </Form>
         </Modal>
         </Col>
       </Row>
       <div class="clear">
         <Table :columns="columns" :data="data1"></Table>
         <div style="margin: 10px;overflow: hidden">
           <div style="float: right;">
             <Page :total="this.$store.state.studentAwardStandard.length" :current="page" @on-change="changePage"></Page>
           </div>
         </div>
       </div>
     </div>


</template>
<script>
  export default {
    name: 'AwardStudent',
    data () {
      return {
        value: '',
        obj: {
          pro: '',
          level1: '',
          level2: '',
          money: 0,
          credit: 0
        },
        modal1: false,
        columns: [
          {
            title: '项目级别',
            key: 'proLevel'
          },
          {
            title: '奖项级别',
            key: 'awardLevel'
          },
          {
            title: '奖金（元）',
            key: 'money'
          },
          {
            title: '学分',
            key: 'credit'
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
        data1: this.getStandard(),
        page: 1
      }
    },
    methods: {
      ok () {
        var tmp = {
          proLevel: this.obj.pro,
          awardLevel: this.obj.level1 + this.obj.level2,
          money: this.obj.money,
          credit: this.obj.credit
        }
        this.$store.commit('ADD_STUDENT_AWARD_STANDARD', tmp)
        this.changePage(this.page)
        this.obj.pro = ''
        this.obj.level1 = ''
        this.obj.level2 = ''
        this.obj.money = 0
        this.obj.credit = 0
      },
      cancel () {
      },
      getStandard (index) {
        index = index === undefined ? 1 : index
        return this.$store.state.studentAwardStandard.slice((index - 1) * 10, index * 10 - 1)
      },
      changePage (index) {
        this.page = index
        this.data1 = this.getStandard(index)
      }
    }
  }
</script>
