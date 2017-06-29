<template>
  <div>
    <Select v-model="college" style="width:200px">
      <Option v-for="item in collegeList" :value="item.name" :key="item">{{ item.name }}</Option>
    </Select>
  </div>
</template>
<script>
  export default {
    name: 'CollegeSelection',
    props: ['college'],
    data () {
      return {
        collegeList: this.getList()
      }
    },
    methods: {
      getList () {
        var tmp = this.$store.state.colleges.concat()
        tmp.unshift({
          name: '全部申请学院'
        })
        return tmp
      }
    }
  }
</script>
