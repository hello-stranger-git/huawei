<!--任务管理-->
<template>
  <div>
    <Module height="291px" :icon="workReportIcon" title="任务管理" @now="now"  @more="more">
      任务管理
    </Module>
  </div>
</template>

<script>
import Module from '../components/module'
export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/taskManager/taskManager.png')
    }
  },
  components: {
    Module
  },
  methods: {
    now() {
      console.log('任务管理当前')
    },
    more() {
      console.log('任务管理更多')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
