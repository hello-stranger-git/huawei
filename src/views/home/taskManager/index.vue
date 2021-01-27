<!--任务管理-->
<template>
  <div>
    <!-- 头部区域 -->
    <TopTitle title="任务管理" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <img :src="addIcon" width="24px" height="24px">
    </TopTitle>
    <BigIconItem />
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import BigIconItem from '@/components/bigIconItem'
export default {
  components: {
    TopTitle,
    BigIconItem
  },
  data() {
    return {
      addIcon: require('@/assets/images/home/workReport/addIcon.png')
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push({ name: 'PublishTask' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
