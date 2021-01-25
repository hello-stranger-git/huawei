<!--费用申请-->
<template>
  <div>
    <Module height="242px" :icon="workReportIcon" title="费用申请" @now="now"  @more="more">
      费用申请
    </Module>
  </div>
</template>

<script>
import Module from '../components/module'
export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/feeApplocation/feeApplocation.png')
    }
  },
  components: {
    Module
  },
  methods: {
    now() {
      console.log('费用申请当前')
    },
    more() {
      console.log('费用申请更多')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
