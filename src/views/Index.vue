<template>
  <div style="background-color: #eeeeee;">
    
    <TopMessage></TopMessage>
    <Notice></Notice>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'
import TopMessage from '@/components/home/TopMessage.vue'//顶部栏
import Notice from '@/components/home/Notice.vue'//通知栏
export default {
  components: {
    Footer,
    TopMessage,
    Notice
  }
}
</script>
<style>
</style>
<style scoped>
</style>
