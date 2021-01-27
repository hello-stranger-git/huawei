import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout'),
    children: [
      // 首页
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index')
      },
      {
        // 通讯录
        path: '/phoneConnect',
        name: 'PhoneConnect',
        component: () => import('@/views/phoneConnect/index')
      },
      {
        // 商城
        path: '/shop',
        name: 'Shop',
        component: () => import('@/views/shop/index')
      },
      {
        // 应用
        path: '/application',
        name: 'Application',
        component: () => import('@/views/application/index')
      },
      {
        // 我的
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index')
      }
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  // 用户信息界面
  {
    path: '/userMessage',
    name: 'UserMessage',
    component: () => import('@/views/userMessage')
  },
  // 忘记密码以及注册
  {
    path: '/forgetRegist',
    name: 'ForgetRegist',
    component: () => import('@/views/forgetRegist')
  },
  // 工作汇报
  {
    path: '/home/workReport',
    name: 'WorkReport',
    component: () => import('@/views/home/workReport')
  },
  // 工作日报
  {
    path: '/home/workDaily',
    name: 'WorkDaily',
    component: () => import('@/views/home/workDaily')
  },
  // 客户管理
  {
    path: '/home/customerMannager',
    name: 'CustomerMannager',
    component: () => import('@/views/home/customerMannager')
  },
  // 内部管理
  {
    path: '/insideManager',
    name: 'InsideManager',
    component: () => import('@/views/insideManager')
  },
  // 日报详情
  {
    path: '/home/workDaily/dailyDetail',
    name: 'DailyDetail',
    component: () => import('@/views/home/reportDetail')
  },
  // 月报详情
  {
    path: '/home/workDaily/monthlyDetail',
    name: 'MonthlyDetail',
    component: () => import('@/views/home/reportDetail')
  },
  // 周报详情
  {
    path: '/home/workDaily/weeklyDetail',
    name: 'WeeklyDetail',
    component: () => import('@/views/home/reportDetail')
  },
  // 营业日报
  {
    path: '/home/workDaily/businessDaily',
    name: 'BusinessDaily',
    component: () => import('@/views/home/businessDaily')
  },
  // 添加商机
  {
    path: '/home/customerMannager/addChance',
    name: 'AddChance',
    component: () => import('@/views/home/addChance')
  },
  // 新增客户拜访
  {
    path: '/home/customerMannager/addCustomerVisit',
    name: 'AddCustomerVisit',
    component: () => import('@/views/home/addCustomerVisit')
  },
  // 客户
  {
    path: '/home/customerMannager/customerConnect',
    name: 'CustomerConnect',
    component: () => import('@/views/home/customerConnect')
  },
  // 新增市场调查
  {
    path: '/home/customerMannager/addMarketResearch',
    name: 'AddMarketResearch',
    component: () => import('@/views/home/addMarketResearch')
  },
  // 新增竞品管理
  {
    path: '/home/customerMannager/addCompeteManager',
    name: 'AddCompeteManager',
    component: () => import('@/views/home/addCompeteManager')
  },
  // 新增费用申请
  {
    path: '/home/addFeeApplocation',
    name: 'AddFeeApplocation',
    component: () => import('@/views/home/addFeeApplocation')
  },

  // 新增出差申请
  {
    path: '/home/addTravelApplocation',
    name: 'AddTravelApplocation',
    component: () => import('@/views/home/addTravelApplocation')
  }, // 新增请假申请
  {
    path: '/home/addVacationApplication',
    name: 'AddVacationApplication',
    component: () => import('@/views/home/addVacationApplication')
  }, // 新增外出申请
  {
    path: '/home/addOutApplication',
    name: 'AddOutApplication',
    component: () => import('@/views/home/addOutApplication')
  },

  // 任务管理
  {
    path: '/home/taskManager',
    name: 'TaskManager',
    component: () => import('@/views/home/taskManager')
  },
  // 任务发布
  {
    path: '/home/taskManager/publishTask',
    name: 'PublishTask',
    component: () => import('@/views/home/publishTask')
  },
  // 选择部门
  {
    path: '/selectDepartment',
    name: 'SelectDepartment',
    component: () => import('@/views/selectDepartment/selectDepartment')
  },
  // 选择人员
  {
    path: '/selectPeople',
    name: 'SelectPeople',
    component: () => import('@/views/selectDepartment/selectPeople')
  }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

export default router
