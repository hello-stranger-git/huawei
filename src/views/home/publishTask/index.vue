<!--任务发布-->
<template>
  <div>
    <!-- 头部区域 -->
    <TopTitle title="任务发布" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <span>保存</span>
    </TopTitle>
    任务发布
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
export default {
  components: {
    TopTitle
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
