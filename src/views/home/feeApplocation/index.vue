<!--费用申请-->
<template>
  <div>
    <Module
      height="242px"
      :icon="workReportIcon"
      title="费用申请"
      @now="now"
      @more="more"
    >
      <User-item :data="userData"></User-item>
      <div class="cells">
        <div class="cell">
          类型：普通任务
        </div>
        <div class="cell">
          任务内容：续费阿里服务器
        </div>
        <div class="cell">
          待完成时间：2021-01-22
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
      workReportIcon: require('@/assets/images/home/feeApplocation/feeApplocation.png'),
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
      console.log('费用申请当前')
    },
    more() {
      console.log('费用申请更多')
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
    font-size: 14px;
    color: #343434;
    margin-top: 16px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
