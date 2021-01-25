<!--首页-->
<template>
  <div>
    <Menu :menuData="menuData" />
    <CheckWork/>
    <WorkReport/>
    <CustomerVisit/>
    <TaskManager/>
    <FeeApplocation/>
    <TravelRequest/>
  </div>
</template>

<script>
import Menu from './menu'
import CheckWork from './checkWork'// 考勤
import WorkReport from './workReport'// 工作汇报
import CustomerVisit from './customerVisit'// 客户拜访
import TaskManager from './taskManager'// 任务管理
import FeeApplocation from './feeApplocation'// 费用申请
import TravelRequest from './travelRequest'// 出差申请
export default {
  components: {
    Menu,
    CheckWork,
    WorkReport,
    CustomerVisit,
    TaskManager,
    FeeApplocation,
    TravelRequest
  },
  data() {
    return {
      // 首页菜单栏数据
      menuData: [
        {
          id: 1,
          title: '报警信息',
          info: 103,
          icon: require('@/assets/images/home/alarm.png') // 排序图标
        },
        {
          id: 2,
          title: '待整改',
          info: 0,
          icon: require('@/assets/images/home/repair.png') // 排序图标
        },
        {
          id: 3,
          title: '缺勤',
          info: 3,
          icon: require('@/assets/images/home/absence.png') // 排序图标
        },
        {
          id: 4,
          title: '商城',
          info: 20,
          icon: require('@/assets/images/home/shop.png') // 排序图标
        },
        {
          id: 5,
          title: '巡查统计',
          info: 0,
          icon: require('@/assets/images/home/checkCount.png') // 排序图标
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
