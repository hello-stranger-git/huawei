<!--工作汇报-->
<template>
  <div>
    <Module
      height="241px"
      :icon="workReportIcon"
      title="工作汇报"
      @now="now"
      @more="more"
    >
      <User-item :data="userData" @handleUser="handleUser"></User-item>
      <div class="jobs">
        <div class="job">
          今日完成工作：XXXXXXXXXXXXX
        </div>
        <div class="job">
          未完成工作：XXXXXXXXXXXXXXXXX
        </div>
        <div class="job">
          需协调工作：XXXXXXXXXXXXXXXxxxxxXX
        </div>
      </div>
    </Module>
  </div>
</template>

<script>
import Module from '../components/module'
import UserItem from '../components/userItem'
export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/workReport/workReport.png'),
      userData: {
        id: 1,
        avatar: require('@/assets/images/home/workReport/user.png'),
        title: '刘德华的日报',
        time: new Date().toLocaleString(),
        number: 998
      }
    }
  },
  components: {
    Module,
    UserItem
  },
  methods: {
    now() {
      console.log('工作汇报当前')
    },
    more() {
      console.log('工作汇报更多')
    },
    // 点击头像
    handleUser(data) {
      this.$router.push({ name: 'WorkDaily', params: { data: data } })
    }
  }
}
</script>

<style lang="less" scoped>
.jobs {
  padding: 24px 16px 0;
  .job {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #343434;
    margin-top: 16px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
