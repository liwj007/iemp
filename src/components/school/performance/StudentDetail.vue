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
      <Menu mode="horizontal" active-name="1" >
        <li class=" back">
          <router-link to="/school/performance/student">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
          学生奖励详情
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <div class="base-info">
          <p>该生信息</p>
          <Table border :columns="columns" :data="data1" disabled-hover :show-header="showHeader"></Table>
        </div>

        <div class="base-info">
          <p>该生获得的奖励情况</p>
          <div v-for="d in lists" style="padding-bottom: 16px">
            <Table border :columns="columns" :data="d" disabled-hover :show-header="showHeader"></Table>
          </div>
        </div>

      </div>
    </section>
  </Workare>

</template>

<script>
  import Workare from '../../Workare'
  export default{
    name: 'StudentAwardDetail',
    components: {
      Workare
    },
    data () {
      return {
        showHeader: false,
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
            name: '姓名',
            content: '李四'
          },
          {
            name: '学号',
            content: '201611688006'
          },
          {
            name: '学院',
            content: '计算机科学与工程'
          },
          {
            name: '专业',
            content: '软件理论'
          }
        ],
        lists: [
          [
            {
              name: '项目名称',
              content: '智能罐底装置'
            },
            {
              name: '参赛时间',
              content: '2016.06'
            },
            {
              name: '获奖情况',
              content: '国家三等奖'
            },
            {
              name: '奖励金额（元）',
              content: '5000，个人获奖金额1000'
            },
            {
              name: '学分奖励（分）',
              content: '6'
            }
          ],
          [
            {
              name: '项目名称',
              content: '自动除草器'
            },
            {
              name: '参赛时间',
              content: '2016.06'
            },
            {
              name: '获奖情况',
              content: '国家三等奖'
            },
            {
              name: '奖励金额（元）',
              content: '5000，个人获奖金额1000'
            },
            {
              name: '学分奖励（分）',
              content: '6'
            }
          ]
        ]
      }
    }
  }
</script>
