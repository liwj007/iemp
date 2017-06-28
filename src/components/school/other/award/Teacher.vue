<template>
     <div>
       <Row class="title-div title-font">
         <Col span="20" class="">教师奖励标准</Col>
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
               <Select v-model="obj.level1" placeholder="请选择级别" style="width: 242px">
                 <Option value="国家级">国家级</Option>
                 <Option value="省级">省级</Option>
                 <Option value="地级">地级</Option>
                 <Option value="">其他</Option>
               </Select>
               <Select v-model="obj.level2" placeholder="请选择级别"style="width: 242px">
                 <Option value="特等奖">特等奖</Option>
                 <Option value="一等奖">一等奖</Option>
                 <Option value="二等奖">二等奖</Option>
                 <Option value="三等奖">三等奖</Option>
                 <Option value="四等奖">四等奖</Option>
                 <Option value="其他">其他</Option>
               </Select>
             </Form-item>
             <Form-item label="奖励（元）">
               <Input v-model="obj.money"></Input>
             </Form-item>
           </Form>
         </Modal>
         </Col>
       </Row>
       <div class="clear">
         <Table :columns="columns" :data="data1"></Table>
       </div>
     </div>


</template>
<script>
  export default {
    name: 'AwardTeacher',
    data () {
      return {
        value: '',
        obj: {
          pro: '',
          level1: '',
          level2: '',
          money: 0
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
        data1: [
          {
            proLevel: '国家级综合类竞赛',
            awardLevel: '省级一等奖',
            money: 300
          },
          {
            proLevel: '省部级竞赛',
            awardLevel: '省级二等奖',
            money: 200
          }
        ]
      }
    },
    methods: {
      ok () {
        var tmp = {
          proLevel: this.obj.pro,
          awardLevel: this.obj.level1 + this.obj.level2,
          money: this.obj.money
        }
        this.data1.push(tmp)
        this.obj.pro = ''
        this.obj.level1 = ''
        this.obj.level2 = ''
        this.obj.money = 0
      },
      cancel () {
      }
    }
  }
</script>
