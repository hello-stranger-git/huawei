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
      <div class="item">
        <img :src="userAvatar" alt="" />
        <div class="value">
          <div class="report">刘德华的日报</div>
          <div class="time">今天18：12</div>
          <div class="unread">9条未读消息</div>
        </div>
      </div>
      <div class="jobs">
        <div class="job">
          今日完成工作：XXXXXXXXXXXXXXXXX
        </div>
        <div class="job">
          未完成工作：XXXXXXXXXXXXXXXXX
        </div>
        <div class="job">
          需协调工作：XXXXXXXXXXXXXXXXX
        </div>
      </div>
    </Module>
  </div>
</template>

<script>
import Module from '../components/module'
export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/workReport/workReport.png'),
      userAvatar: require('@/assets/images/home/workReport/user.png')
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

<style lang="less" scoped>
.item {
  display: flex;
  height: 45px;
  margin: 25px 16px 0;
  color: #343434;

  img {
    width: 45px;
    height: 45px;
  }
  .value {
    flex: 1;
    position: relative;
    margin-left: 12px;
    .report {
      font-weight: 700;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
    }
    .time {
      margin-top: 6px;
      color: #b7b7b7;
      font-size: 12px;
    }
    .unread {
      position: absolute;
      top: 0;
      right: 0;
      color: #b7b7b7;
      font-size: 12px;
    }
  }
}
.jobs {
  padding-left: 16px;
  .job {
    font-size: 14px;
    color: #343434;
    margin-top: 16px;
    &:first-child {
      margin-top: 24px;
      color: red;
    }
  }
}
</style>
