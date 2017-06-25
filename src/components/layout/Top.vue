<template>
  <div class="top">
    <span>欢迎您，{{username}}</span>
    <span @click="logout"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-guanbi"></use></svg></span>
  </div>
</template>

<script>
  export default{
    name: 'Top',
    data () {
      return {
        username: 'xundao'
      }
    },
    methods: {
      logout () {
        console.log('logout')
      }
    }
  }
</script>
