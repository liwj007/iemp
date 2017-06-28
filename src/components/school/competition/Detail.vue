<style scoped>

  .ivu-table td.demo-table-info-column{
    background-color: #f8f8f9;
  }
</style>

<template>
  <div class="wrapper-content">
    <DetailTemplate></DetailTemplate>
  </div>
</template>

<script>
  import DetailTemplate from './DetailTemplate'
  export default{
    name: 'CompetitionDetail',
    components: {
      DetailTemplate
    }
  }
</script>
