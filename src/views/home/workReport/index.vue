<!--工作汇报-->
<template>
  <div>
    <TopTitle title="工作汇报" @onClickLeft="onClickLeft"/>
    <WorkReportItem/>
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
          icon: require('@/assets/images/workReport/daily.png'),
          title: '日报',
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

<style lang="scss" scoped>

</style>
