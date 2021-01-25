<!--客户拜访-->
<template>
  <div>
    <Module height="226px" :icon="workReportIcon" title="客户拜访" @now="now"  @more="more">
      客户拜访
    </Module>
  </div>
</template>

<script>
import Module from '../components/module'
export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/customerVisit/customerVisit.png')
    }
  },
  components: {
    Module
  },
  methods: {
    now() {
      console.log('客户拜访当前')
    },
    more() {
      console.log('客户拜访更多')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
