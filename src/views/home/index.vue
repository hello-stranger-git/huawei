<!--首页-->
<template>
  <div>
    <Menu :menuData="menuData" />
    <CheckWork />
    <WorkReport />
    <CustomerVisit />
    <TaskManager />
    <FeeApplocation />
    <TravelRequest />
  </div>
</template>

<script>
import Menu from './components/menu'
import CheckWork from './components/checkWork' // 考勤
import WorkReport from './components/workReport' // 工作汇报
import CustomerVisit from './components/customerVisit' // 客户拜访
import TaskManager from './components/taskManager' // 任务管理
import FeeApplocation from './components/feeApplocation' // 费用申请
import TravelRequest from './components/travelRequest' // 出差申请
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
          title: '考勤',
          info: 103,
          icon: require('@/assets/images/home/checkWork.png')
        },
        {
          id: 3,
          title: '客户管理',
          info: 0,
          icon: require('@/assets/images/home/customerVisit.png'),
          name: 'CustomerMannager'
        },
        {
          id: 2,
          title: '工作汇报',
          info: 0,
          icon: require('@/assets/images/home/workReport.png'),
          name: 'WorkReport'
        },
        {
          id: 4,
          title: '任务管理',
          info: 20,
          icon: require('@/assets/images/home/taskManager.png'),
          name: 'TaskManager'
        },
        {
          id: 5,
          title: '费用申请',
          info: 0,
          icon: require('@/assets/images/home/feeApplocation.png'),
          name: 'InsideManager', // 当前要跳转的路由
          from: 'Home', // 当前路由
          to: '', // 点击加号要跳转的路由
          sonName: [
            {
              id: 1, // 此id与insideManager组件的id一致
              name: ''
            },
            {
              id: 2,
              name: ''
            },
            {
              id: 3,
              name: ''
            }
          ]
        },
        {
          id: 6,
          title: '出差申请',
          info: 0,
          icon: require('@/assets/images/home/travelRequest.png'),
          name: 'InsideManager', // 当前要跳转的路由
          from: 'Home', // 当前路由
          to: '', // 点击加号要跳转的路由
          sonName: [
            {
              id: 1, // 此id与insideManager组件的id一致
              name: ''
            },
            {
              id: 2,
              name: ''
            },
            {
              id: 3,
              name: ''
            }
          ]
        },
        {
          id: 7,
          title: '请假申请',
          info: 0,
          icon: require('@/assets/images/home/vacationApplicationIcon.png'),
          name: 'InsideManager', // 当前要跳转的路由
          from: 'Home', // 当前路由
          to: '', // 点击加号要跳转的路由
          sonName: [
            {
              id: 1, // 此id与insideManager组件的id一致
              name: ''
            },
            {
              id: 2,
              name: ''
            },
            {
              id: 3,
              name: ''
            }
          ]
        },
        {
          id: 8,
          title: '外出公告',
          info: 0,
          icon: require('@/assets/images/home/outApplicationIcon.png')
        },
        {
          id: 9,
          title: '内部公告',
          info: 0,
          icon: require('@/assets/images/home/insideNotice.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
