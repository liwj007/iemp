<style scoped>

  .ivu-table td.demo-table-info-column{
    background-color: #f8f8f9;
  }

  .base-info{
    padding: 20px;
  }
  .base-info p{
    font-size: 16px;
    padding-bottom: 10px;
  }
</style>
<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="2" @on-select="selectMenu">
        <li class=" back">
          <router-link to="/school/workload">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
          审核意见
        </Menu-item>
        <Menu-item name="2">
          工作量详情
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <div class="base-info">
          <p>项目信息</p>
          <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
        </div>
        <div class="base-info">
          <p>项目成员工作量</p>
          <Table border :columns="columns2" :data="data2" disabled-hover :show-header="showHeader"></Table>
        </div>
        <div class="base-info">
          <p>指导教师工作量</p>
          <Table border :columns="columns3" :data="data3" disabled-hover :show-header="showHeader"></Table>
        </div>
      </div>
    </section>
  </Workare>
</template>
<script>
  import Workare from '../../Workare'

  export default{
    name: 'WorkloadDetail',
    components: {
      Workare
    },
    data () {
      return {
        columns: [
          {
            title: '名称',
            key: 'name',
            className: 'demo-table-info-column',
            width: 200
          },
          {
            title: '内容',
            key: 'content'
          }
        ],
        data1: [
          {
            name: '项目编号',
            content: '201610000086'
          },
          {
            name: '项目名称',
            content: '基于大数据的酒店宴会定制化服务的研究'
          },
          {
            name: '项目类型',
            content: '校外项目'
          }
        ],
        columns2: [
          {
            title: '成员学号',
            key: 'no'
          },
          {
            title: '成员姓名',
            key: 'name'
          },
          {
            title: '成员工作量（小时）',
            key: 'time'
          },
          {
            title: '工作简述',
            key: 'desc'
          }
        ],
        data2: [
          {
            no: '202222',
            name: '王五',
            time: '300',
            desc: '负责后端和前端的开发工作'
          },
          {
            no: '202222',
            name: '王五',
            time: '300',
            desc: '负责后端和前端的开发工作'
          }
        ],
        columns3: [
          {
            title: '教师工号',
            key: 'no'
          },
          {
            title: '教师姓名',
            key: 'name'
          },
          {
            title: '教师工作量（小时）',
            key: 'time'
          },
          {
            title: '工作简述',
            key: 'desc'
          }
        ],
        data3: [
          {
            no: '202222',
            name: '王五',
            time: '300',
            desc: '指导学生'
          },
          {
            no: '202222',
            name: '王五',
            time: '300',
            desc: '负责生活'
          }
        ]
      }
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/school/workload/check/' + this.$route.params.id)
            break
          case '2':
            this.$router.push('/school/workload/detail/' + this.$route.params.id)
            break
        }
      }
    }
  }
</script>
