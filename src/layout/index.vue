<template>
  <div>
    <div style="height:44px">
      <Header />
    </div>
    <div>
      <Notice />
    </div>
    <div style="height:100%;background-color:#eee;margin-bottom: 50px;padding-bottom: 12px;">
      <router-view />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
import Notice from './notice'
export default {
  data() {
    return {
      activeFooter: 0
    }
  },
  components: {
    Header,
    Footer,
    Notice
  },
  watch: {
    // 路由变化改变底部选中
    $route() {
      this.activeFooter = localStorage.getItem('footerBar')
    }
  }
}
</script>

<style lang="scss" scoped></style>
