<!--出差申请-->
<template>
  <div>
    <Module
      height="278px"
      :icon="workReportIcon"
      title="出差申请"
      @now="now"
      @more="more"
    >
      <User-item :data="userData"></User-item>
    </Module>
  </div>
</template>

<script>
import Module from '../components/module'
import UserItem from '../components/userItem'

export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/travelRequest/travelRequest.png'),
      userData: {
        avatar: require('@/assets/images/home/workReport/user.png'),
        title: '刘德华',
        time: new Date().toLocaleString(),
        number: 98
      }
    }
  },
  components: {
    Module,
    UserItem
  },
  methods: {
    now() {
      console.log('出差申请当前')
    },
    more() {
      console.log('出差申请更多')
    }
  }
}
</script>

<style lang="scss" scoped></style>
