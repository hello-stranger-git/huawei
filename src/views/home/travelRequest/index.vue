<!--出差申请-->
<template>
  <div>
    <Module
      height="278px"
      :icon="workReportIcon"
      title="出差申请"
      @now="now"
      @more="more"
    >
      <User-item :data="userData"></User-item>
      <div class="cells">
        <div class="cell">
          目的地：深圳
          <div class="process">
            <img :src="typeImg" class="type" />
          </div>
          上海
        </div>
        <div class="cell">
          时间：2021-01-22
          <img :src="timeArrow" class="timeArrow" />
          2021-01-24
        </div>
        <div class="cell">
          费用金额：￥800
        </div>
        <div class="cell">
          交通工具：飞机
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
      workReportIcon: require('@/assets/images/home/travelRequest/travelRequest.png'),
      userData: {
        avatar: require('@/assets/images/home/workReport/user.png'),
        title: '刘德华',
        time: new Date().toLocaleString(),
        number: 98
      },
      typeImg: require('@/assets/images/home/travelRequest/travel.png'),
      timeArrow: require('@/assets/images/home/travelRequest/arrow.png')
    }
  },
  components: {
    Module,
    UserItem
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

<style lang="less" scoped>
.cells {
  padding: 24px 16px 0;
  .cell {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #343434;
    margin-top: 16px;
    &:first-child {
      margin-top: 0;
    }
    .process {
      position: relative;
      display: inline-block;
      width: 63px;
      background-color: #e60012;
      border-bottom: 1px solid #e60012;
      .type {
        position: absolute;
        top: -14px;
        left: 50%;
        width: 19px;
        height: 10px;
        transform: translateX(-50%);
      }
    }
    .timeArrow {
      width: 7px;
      height: 12px;
      transform: translateY(2px);
      padding: 0 10 px;
    }
  }
}
</style>
