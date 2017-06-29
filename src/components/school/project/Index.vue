<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" @on-select="selectMenu">
        <Menu-item name="1">
          <!--<router-link to="/school/project/admin">-->
            项目申请库
          <!--</router-link>-->

        </Menu-item>
        <Menu-item name="2">
          <!--<router-link to="/school/project/his">-->
            项目立项库
          <!--</router-link>-->

        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
        <div  class="filter">
          <div class="title">项目申报列表</div>
          <div>
            <Select v-model="model1" style="width:200px">
              <Option v-for="item in collegeList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
          </div>
          <div>
            <Select v-model="model2" style="width:200px">
              <Option v-for="item in scale" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
          </div>
          <div>
            <Button type="info">筛选</Button>
          </div>
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
    name: 'School1',
    components: {
      Workare
    },
    data () {
      return {
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
            title: '项目编号',
            key: 'code',
            width: 150
          },
          {
            title: '项目名称',
            key: 'name',
            ellipsis: true,
            width: 400
          },
          {
            title: '项目类型',
            key: 'type'
          },
          {
            title: '项目负责人',
            key: 'admin'
          },
          {
            title: '指导教师',
            key: 'teacher'
          },
          {
            title: '所属学院',
            key: 'college'
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
                      this.$router.push('/school/project/check/' + params.row.code)
                    }
                  }
                }, '审核')
              ])
            }
          }
        ],
        data1: this.$store.state.toCheckProjectList
      }
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/school/project/admin')
            break
          case '2':
            this.$router.push('/school/project/his')
            break
        }
      }
    }
  }
</script>

<style lang="less">
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


</style>
