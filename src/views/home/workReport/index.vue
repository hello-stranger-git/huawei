<!--工作汇报-->
<template>
  <div class="contain">
    <TopTitle title="工作汇报" @onClickLeft="onClickLeft" />
    <WorkReportItem :data="WorkReportData" />
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import WorkReportItem from './components/workReportItem'
export default {
  data() {
    return {
      WorkReportData: [
        {
          id: 1,
          icon: require('@/assets/images/home/workReport/daily.png'),
          title: '日报',
          name: 'Home'
        },
        {
          id: 2,
          icon: require('@/assets/images/home/workReport/weekly.png'),
          title: '周报',
          name: ''
        },
        {
          id: 3,
          icon: require('@/assets/images/home/workReport/monthly.png'),
          title: '月报',
          name: ''
        },
        {
          id: 4,
          icon: require('@/assets/images/home/workReport/businessDaily.png'),
          title: '营业日报',
          name: ''
        }
      ]
    }
  },
  components: {
    TopTitle,
    WorkReportItem
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  background-color: #fff;
  min-height: 100%;
}
/deep/.van-hairline--bottom::after {
  border: none;
}
</style>
