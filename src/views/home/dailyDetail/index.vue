<!--日报详情-->
<template>
  <div>
    <!-- 头部区域 -->
    <TopTitle title="日报" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <span>提交</span>
    </TopTitle>
日报详情
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
      console.log('点击提交')
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar__right{
  font-size: 14px;
  font-weight: 400;
  color: #343434;
}
</style>
