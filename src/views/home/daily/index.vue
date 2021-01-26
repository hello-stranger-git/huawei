<!--日报-->
<template>
  <div>
    <!-- 头部区域 -->
    <TopTitle title="日报" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <img :src="addIcon" width="24px" height="24px">
    </TopTitle>
    日报
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
export default {
  components: {
    TopTitle
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
      console.log('日报加号')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
