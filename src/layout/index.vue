<template>
  <div>
    <div style="height:44px" v-if="$route.name!=='PhoneConnect'">
      <Header />
    </div>
    <div  v-if="$route.name!=='PhoneConnect'">
      <Notice />
    </div>
    <div style="height:100%;background-color:#eee;padding-bottom: 62px;">
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
      activeFooter: 1
    }
  },
  components: {
    Header,
    Footer,
    Notice
  }
}
</script>

<style lang="scss" scoped></style>
