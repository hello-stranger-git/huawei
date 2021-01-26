<!--任务管理-->
<template>
  <div>
    <Module
      height="291px"
      :icon="workReportIcon"
      title="任务管理"
      @now="now"
      @more="more"
    >
      <User-item :data="userData"></User-item>
    </Module>
  </div>
</template>

<script>
import Module from '../module'
import UserItem from '../userItem'

export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/taskManager/taskManager.png'),
      userData: {
        avatar: require('@/assets/images/home/taskManager/user.png'),
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
      console.log('任务管理当前')
    },
    more() {
      console.log('任务管理更多')
    }
  }
}
</script>

<style lang="less" scoped></style>
