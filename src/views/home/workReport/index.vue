<!--工作汇报-->
<template>
  <div>
    <Module height="241px" :icon="workReportIcon" title="工作汇报" @now="now"  @more="more">
      工作汇报
    </Module>
  </div>
</template>

<script>
import Module from '../components/module'
export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/workReport/workReport.png')
    }
  },
  components: {
    Module
  },
  methods: {
    now() {
      console.log('工作汇报当前')
    },
    more() {
      console.log('工作汇报更多')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
