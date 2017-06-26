<template>
  <div class="top">
    <span>欢迎您，{{user.username}}</span>
    <span @click="logout"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-guanbi"></use></svg></span>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default{
    name: 'Top',
    computed: mapState({ user: state => state.user }),
    methods: {
      logout () {
        console.log('logout')
      }
    }
  }
</script>
