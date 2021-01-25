<!--客户拜访-->
<template>
  <div>
    <Module
      height="226px"
      :icon="workReportIcon"
      title="客户拜访"
      @now="now"
      @more="more"
    >
      <div class="item">
        <div class="avatar">
          <img :src="userAvatar" />
        </div>
        <div class="value">
          <div class="report">刘德华</div>
          <div class="time">今天18：12</div>
          <div class="unread">9条未读消息</div>
        </div>
      </div>
      <div class="cells">
        <div class="cell">
          <div class="proprety">客户：</div>
          <div class="value">天猫小店李老板</div>
        </div>
        <div class="cell">
          <div class="proprety">拜访内容：</div>
          <div class="value overText">
            向客户推销本公司的产品以及了解客户 需求
            向客户推销本公司的产品以及了解客户 需求
            向客户推销本公司的产品以及了解客户 需求
          </div>
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
      workReportIcon: require('@/assets/images/home/customerVisit/customerVisit.png'),
      userAvatar: require('@/assets/images/home/workReport/user.png')
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

<style lang="less" scoped>
.item {
  display: flex;
  height: 45px;
  margin: 25px 16px 0;
  color: #343434;
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
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
      top: 3px;
      right: 0;
      color: #b7b7b7;
      font-size: 12px;
    }
  }
}
.cells {
  margin-top: 24px;
  .cell {
    padding: 16px 16px 0;
    display: flex;
    font-size: 14px;
    color: #343434;
    .value {
      flex: 1;
    }
    &:first-child {
      padding-top: 0;
    }
  }
}
.overText {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
