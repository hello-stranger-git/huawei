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
  components: {
    Header,
    Footer,
    Notice
  }
}
</script>

<style lang="scss" scoped></style>
