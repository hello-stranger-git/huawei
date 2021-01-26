<!--工作汇报-->
<template>
  <div class="workReport">
    <!-- 头部区域 -->
    <TopTitle title="工作汇报" @onClickLeft="onClickLeft" />
    <!-- 内容区域 -->
    <div class="workReport_content">
      <SmallIconItem
        v-for="(item, i) in WorkReportData"
        :key="i"
        :title="item.title"
        :icon="item.icon"
        @smallItemHandle="smallItemHandle(item.name)"
      />
    </div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import SmallIconItem from '@/components/smallIconItem'
export default {
  components: {
    TopTitle,
    SmallIconItem
  },
  data() {
    return {
      WorkReportData: [
        {
          id: 1,
          icon: require('@/assets/images/home/workReport/daily.png'),
          title: '日报',
          name: 'Daily'
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
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    smallItemHandle(name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="less" scoped>
.workReport {
  background-color: #fff;
  min-height: 100%;
}
// 头部
/deep/.van-hairline--bottom::after {
  border: none;
}
// 内容区域
.workReport_content {
  display: flex;
  flex-wrap: wrap;
  .smallIconItem {
    margin-left: 3.2%;
    margin-top: 12px;
  }
}
</style>
