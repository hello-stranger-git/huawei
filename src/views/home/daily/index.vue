<!--日报-->
<template>
  <div class="daily">
    <!-- 头部区域 -->
    <TopTitle title="日报" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <img :src="addIcon" width="24px" height="24px">
    </TopTitle>
    <!-- 内容区域 -->
    <div class="content">
      <SmallIconItem
        v-for="(item, i) in dailyData"
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
      dailyData: [
        {
          id: 1,
          icon: require('@/assets/images/home/workReport/mySubmitIcon.png'),
          title: '我提交的',
          name: ''
        },
        {
          id: 2,
          icon: require('@/assets/images/home/workReport/reportToMeIcon.png'),
          title: '报告给我的',
          name: ''
        },
        {
          id: 3,
          icon: require('@/assets/images/home/workReport/ccToMeIcon.png'),
          title: '抄送我的',
          name: ''
        }
      ],
      addIcon: require('@/assets/images/home/workReport/addIcon.png')
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push({ name: 'DailyDetail' })
    }
  }
}
</script>

<style lang="less" scoped>
.daily{
  background-color: #fff;
  min-height: 100%;
}
// 内容区域
.content {
  display: flex;
  flex-wrap: wrap;
  .smallIconItem {
    margin-left: 3.2%;
    margin-top: 12px;
  }
}
</style>
