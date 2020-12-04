<template>
  <div>
    <!-- <TopMessage></TopMessage>
        <Notice></Notice> -->
    <Menu></Menu>
    <EnterStore></EnterStore>
    <Flow></Flow>
    <Features title="客群特征"
              add="features"
              titleIcon="el-icon-date"></Features>
    <Price titleIcon="el-icon-bank-card"></Price>
    <Video></Video>

    <div class="bottomMargin"></div>
    <!-- <Footer></Footer> -->
  </div>
</template>
<script>
import Menu from '@/components/home/Menu.vue'//菜单栏
import EnterStore from '@/components/home/EnterStore.vue'//今日进店
import Flow from '@/components/home/Flow.vue'//今日客流走势
import Features from '@/components/home/Features.vue'//客群特征
import Price from '@/components/home/Price.vue'//客流与客单价
import Video from '@/components/home/Video.vue'//本店视频
export default {
  components: {
    Menu,
    EnterStore,
    Flow,
    Features,
    Price,
    Video,
  }
}
</script>
<style>
</style>
<style scoped>
</style>