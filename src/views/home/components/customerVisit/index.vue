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
      <User-item :data="userData"></User-item>

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
import Module from '../module'
import UserItem from '../userItem'

export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/customerVisit/customerVisit.png'),
      userAvatar: require('@/assets/images/home/workReport/user.png'),
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
      console.log('客户拜访当前')
    },
    more() {
      console.log('客户拜访更多')
    }
  }
}
</script>

<style lang="less" scoped>
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
