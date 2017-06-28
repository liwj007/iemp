<style scoped>

  .ivu-table td.demo-table-info-column{
    background-color: #f8f8f9;
  }
</style>

<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" @on-select="selectMenu">
        <li class=" back">
          <router-link to="/school/projectlist/list">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
          项目详情
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <DetailTemplate></DetailTemplate>
      </div>
    </section>
  </Workare>

</template>

<script>
  import Workare from '../../Workare'
  import DetailTemplate from './DetailTemplate'
  export default{
    name: 'ProjectDetail',
    components: {
      Workare,
      DetailTemplate
    }
  }
</script>
