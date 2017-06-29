<template>
  <div class="top" style="font-size: 18px">
    <span><Icon type="person"></Icon> {{user.username}}({{user.usertype === 'school'? '学校管理员':'项目负责人'}})</span>
    <span @click="logout"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-guanbi"></use></svg></span>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { USER_SIGNOUT } from '../../store/user'

  export default{
    name: 'Top',
    computed: mapState({ user: state => state.user }),
    methods: {
      ...mapActions([USER_SIGNOUT]),
      logout () {
        this.USER_SIGNOUT()
        this.$router.push('/')
      }
    }
  }
</script>
