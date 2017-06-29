<style>
  .num{
    color: #35bbf7;
    font-size: 30px;
    text-align: center;
  }
  .desc{
    text-align: center;
  }
  .bk{
    border-right-color: #c1c1c1;
    border-right-style: solid;
    border-right-width: 1px;
  }

  .r0{
    background: #5cb85c !important;
  }
  .r1{
    background: #23ccf6 !important;
  }
  .r2{
    background: #00aaff !important;
  }
  .r3, .r4, .r5, .r6, .r7, .r8, .r9{
    background: #cbd0dc !important;
  }
  .rank p{
    float: right;
    font-size: 18px;
    overflow:hidden;
    text-overflow: ellipsis;

    white-space: nowrap;
  }
  .rank p:first-child{
    float: left;
    width: 400px;
  }
  .rank li{
    clear: both;
    padding-bottom: 40px;
  }
</style>
<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1">
        <Menu-item name="1">
            评估统计
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
        <div  class="filter">
          <div>
            <Select v-model="model1" style="width:200px">
              <Option v-for="item in years" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
          </div>
          <CollegeSelection :college="model2"></CollegeSelection>
          <div>
            <Button type="info">筛选</Button>
          </div>
        </div>
        <div class="result clear">
          <Row>
            <Col span="6" class="bk">
              <p class="num">781人</p>
              <p class="desc">参与竞赛项目的学生人数</p>
            </Col>
            <Col span="6" class="bk">
              <p class="num">16.4%</p>
              <p class="desc">竞赛项目学生参与率</p>
            </Col>
            <Col span="6" class="bk">
              <p class="num">100%</p>
              <p class="desc">竞赛项目专业覆盖率</p>
            </Col>
            <Col span="6" class="bk">
              <p class="num">5人</p>
              <p class="desc">竞赛项目涉及到的专业数</p>
            </Col>
          </Row>

          <Row style="padding-top: 50px;">
            <Col span="12">
              <div>
                <p style="padding-left: 20px;font-size: 25px;">竞赛项目类型分布</p>
                <div id="pic" style="width: 600px;height:350px;padding-left: 40px;"></div>
              </div>
            </Col>
            <Col span="8">
              <p style=";font-size: 25px;padding-bottom: 30px;">竞赛项目受欢迎程度排行</p>
              <div>
                <ul class="rank">
                  <li v-for="(item,index) in rank">
                    <p><Badge :count='index+1' :class-name='"r"+index'></Badge> {{item.name}}</p>
                    <p>{{item.user}}</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>


    </section>
  </Workare>
</template>
<script>
  import CollegeSelection from '../template/CollegeSelection'
  import Workare from '../../Workare'
  export default{
    name: 'Statistic',
    components: {
      Workare,
      CollegeSelection
    },
    data () {
      return {
        years: [
          {
            value: '0',
            label: '2016'
          }
        ],
        model1: '0',
        model2: '全部申请学院',
        rank: [
          {
            name: 'ACM国际大学生程序设计竞赛',
            user: '421人'
          },
          {
            name: '“ORACLE OAEC”杯校园软件与网页设计大赛',
            user: '277人'
          },
          {
            name: '全国大学生数字媒体作品竞赛',
            user: '189人'
          },
          {
            name: '中国大学生计算机设计大赛',
            user: '56人'
          },
          {
            name: '全国大学生网络技术大赛',
            user: '48人'
          }
        ]
      }
    },
    methods: {
    },
    mounted () {
      var echarts = require('echarts')
      var myChart = echarts.init(document.getElementById('pic'))
      myChart.setOption({
//        title: {
//          text: '竞赛项目类型分布',
//          x: 'left'
//        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        grid: {
          top: 5
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            center: ['50%', '60%'],
            data: [
              {value: 20, name: '一类'},
              {value: 25, name: '二类'},
              {value: 30, name: '三类'},
              {value: 25, name: '四类'},
              {value: 0, name: '五类'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
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
