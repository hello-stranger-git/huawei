<!--工作日报-->
<template>
  <div>
    <TopTitle :title="data.title" @onClickLeft="onClickLeft"  @onClickRight="onClickRight">
      <img :src="shareIcon" width="24px" height="24px"/>
    </TopTitle>
    工作日报
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
export default {
  data() {
    return {
      shareIcon: require('@/assets/images/home/workDaily/share.png'),
      data: {}
    }
  },
  mounted () {
    this.data = this.$route.params.data
  },
  methods: {
    // 点击左边按钮
    onClickLeft() {
      this.$router.go(-1)
    },

    // 点击右边按钮
    onClickRight() {
    }
  },
  components: {
    TopTitle
  }
}
</script>

<style lang="less" scoped>

</style>
