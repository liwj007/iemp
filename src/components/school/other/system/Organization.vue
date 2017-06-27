<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" @on-select="selectMenu">
        <Menu-item name="1">
          组织机构管理
        </Menu-item>
        <Menu-item name="2">
          学生用户信息
        </Menu-item>
        <Menu-item name="3">
          教师用户信息
        </Menu-item>
        <Menu-item name="4">
          用户权限
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
    name: 'Organization',
    components: {
      Workare
    },
    methods: {
      selectMenu: function (name) {
        switch (name) {
          case '1':
            break
          case '2':
            this.$router.push('/school/system/student')
            break
        }
      }
    }
  }
</script>

<style lang="less">


</style>
