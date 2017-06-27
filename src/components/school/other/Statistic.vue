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
          <div>
            <Select v-model="model2" style="width:200px">
              <Option v-for="item in colleges" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
          </div>
          <div>
            <Button type="info">筛选</Button>
          </div>
        </div>
        <div class="result clear">
          <Row>
            <Col span="6" class="bk">
              <p class="num">23人</p>
              <p class="desc">参与竞赛项目的学生人数</p>
            </Col>
            <Col span="6" class="bk">
              <p class="num">50.3%</p>
              <p class="desc">竞赛项目学生参与率</p>
            </Col>
            <Col span="6" class="bk">
              <p class="num">50.3%</p>
              <p class="desc">竞赛项目专业覆盖率</p>
            </Col>
            <Col span="6" class="bk">
              <p class="num">12人</p>
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
  import Workare from '../../Workare'
  export default{
    name: 'Statistic',
    components: {
      Workare
    },
    data () {
      return {
        years: [
          {
            value: '0',
            label: '2016'
          },
          {
            value: '1',
            label: '2015'
          },
          {
            value: '2',
            label: '2014'
          },
          {
            value: '3',
            label: '2013'
          },
          {
            value: '4',
            label: '2012'
          },
          {
            value: '5',
            label: '2011'
          }
        ],
        model1: '0',
        colleges: [
          {
            value: '0',
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
        model2: '0',
        rank: [
          {
            name: '第六届“太湖奖”之青年大学生创意创业大赛',
            user: '王五'
          },
          {
            name: '2017直通硅谷创新创业大赛',
            user: '王五'
          },
          {
            name: '2017年广东“众创杯”创业创新大赛（活动对象：全世界创业者）',
            user: '王五'
          },
          {
            name: '2017年广东“众创杯”创业创新大赛（活动对象：全世界创业者）',
            user: '王五'
          },
          {
            name: '第八届中国大学生服务外包创新创业大赛（教育部+商务部+无锡政府主办）',
            user: '王五'
          },
          {
            name: '2017年广东“众创杯”创业创新大赛（活动对象：全世界创业者）',
            user: '王五'
          },
          {
            name: '2017年广东“众创杯”创业创新大赛（活动对象：全世界创业者）',
            user: '王五'
          },
          {
            name: '第八届中国大学生服务外包创新创业大赛（教育部+商务部+无锡政府主办）',
            user: '王五'
          },
          {
            name: '2017年广东“众创杯”创业创新大赛（活动对象：全世界创业者）',
            user: '王五'
          },
          {
            name: '第八届中国大学生服务外包创新创业大赛（教育部+商务部+无锡政府主办）',
            user: '王五'
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
              {value: 335, name: '一类'},
              {value: 310, name: '二类'},
              {value: 234, name: '三类'},
              {value: 135, name: '四类'},
              {value: 1548, name: '五类'}
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
