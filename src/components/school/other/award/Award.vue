<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" @on-select="selectMenu">
        <Menu-item name="1">
          教师奖励标准
        </Menu-item>
        <Menu-item name="2">
          学生奖励标准
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <router-view></router-view>
    </section>
  </Workare>
</template>
<script>
  import Workare from '../../../Workare'
  export default{
    name: 'Award',
    components: {
      Workare
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            this.$router.push('/school/award/teacher')
            break
          case '2':
            this.$router.push('/school/award/student')
            break
        }
      }
    }
  }
</script>

<style lang="less">


</style>
