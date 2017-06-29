

<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" >
        <li class=" back">
          <router-link to="/school/performance/student">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
          学生奖励详情
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <StudentTemplate :item="item"></StudentTemplate>
      </div>
    </section>
  </Workare>

</template>

<script>
  import Workare from '../../Workare'
  import StudentTemplate from './StudentTemplate'
  export default{
    name: 'StudentAwardDetail',
    components: {
      Workare,
      StudentTemplate
    },
    data () {
      return {
        item: this.$store.state.stuAwardDetail[this.$route.params.id]
      }
    }
  }
</script>
