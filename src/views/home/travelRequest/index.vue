<!--出差申请-->
<template>
  <div>
    <Module height="278px" :icon="workReportIcon" title="出差申请" @now="now"  @more="more">
      出差申请
    </Module>
  </div>
</template>

<script>
import Module from '../components/module'
export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/travelRequest/travelRequest.png')
    }
  },
  components: {
    Module
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

<style lang="scss" scoped>

</style>
