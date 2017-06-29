<template>
  <div class="wrapper-content">

    <div class="anchor">
      <h2>申请认定</h2>
      <p>{{item.professor}}</p>
    </div>
    <div class="anchor">
      <h2>申请理由说明</h2>
      <p>{{item.professorOpinion}}</p>
    </div>
    <div class="anchor">
      <h2>学院认定</h2>
      <p>{{item.college}}</p>
    </div>
    <div class="anchor">
      <h2>学院评审意见</h2>
      <p>{{item.collegeOpinion}}</p>
    </div>
    <div class="anchor">
      <h2>学校认定</h2>
      <Radio-group v-model="result">
        <Radio label="通过"></Radio>
        <Radio label="不通过"></Radio>
      </Radio-group>
    </div>
    <div class="anchor">
      <h2>学校评审意见</h2>
      <Input v-model="opinion" type="textarea" :rows="6" placeholder="请输入..."></Input>
    </div>
    <div class="anchor">
      <Button>取消</Button>
      <Button type="primary" @click="submit">提交</Button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AwardStudent',
    data () {
      return {
        item: {
          professor: '一类项目',
          professorOpinion: '该项竞赛受到国际各知名大学的重视,并备受全世界各著名 IT公司 如微软、GOOGLE 、IBM等的高度关注,成为世界各国大学生最具影响力的国际级计算机的赛事, ACM所颁发的' +
          '获奖证书也为世界各著名 IT 公司、各知名大学所认可。随着 ACM活动的深入开展,亚洲尤其是中国内地高校都十分重视该项赛事,参加非常拥跃,国内有名的高校几乎是无一不参与。' +
          'ACM主要是培养参赛选手的创造力、团队合作精神以及在软件程序开发过程中的创新意识。与其他编程竞赛相比, ACM题目难度更大,更强调算法的高效性,它涉及知识面广,与大学计算机系本科以' +
          '及研究生如程序设计、离散数学、 数据结构、人工智能、算法分析与设计等相关课程直接关联,对数学要求很高,由于采用英文命题,对英语要 求较高, ACM采用3人合作、共用一台电脑,所以' +
          '它同样也很强调团队协作精神。而许多题目并无现 成的算法,需要具备创新的精神,因此 ACM不仅强调学科的基础,更强调全面素质和能力的培养。',
          college: '通过',
          collegeOpinion: 'ACM竞赛影响范围广、学科代表性强，它的开展促进了学校对创新型应用人才培养，具有重要的实践意义。(1) 有利于培养学生的实践动手能力与科研能力。' +
          '(2) 有利于培养学生的创新意识、创新精神、创新能力。(3)有利于培养学生的团队的协作精神。符合一类竞赛项目的认定标准。'
        },
        result: '通过',
        opinion: ''
      }
    },
    mounted () {
    },
    methods: {
      submit () {
        this.$store.commit('REMOVE_CHECK_CP')
        this.$router.push('/school/competition/list')
      }
    }
  }
</script>
