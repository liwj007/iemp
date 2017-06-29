

<template>
  <Workare>
    <section slot="header">
      <Menu mode="horizontal" active-name="1" >
        <li class=" back">
          <router-link to="/school/performance/teacher">
            <Icon type="chevron-left" size="32px"></Icon>
          </router-link>
        </li>
        <Menu-item name="1">
          教师奖励详情
        </Menu-item>
      </Menu>
    </section>
    <section slot="footer">
      <div class="wrapper-content">
        <TeacherTemplate :item="item"></TeacherTemplate>
      </div>
    </section>
  </Workare>

</template>

<script>
  import Workare from '../../Workare'
  import TeacherTemplate from './TeacherTemplate'
  export default{
    name: 'StudentAwardDetail',
    components: {
      Workare,
      TeacherTemplate
    },
    data () {
      return {
        item: this.$store.state.teaAwardDetail[this.$route.params.id]
      }
    }
  }
</script>
