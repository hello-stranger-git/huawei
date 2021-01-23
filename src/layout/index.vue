<template>
  <div>
    <Header/>
    <div>
      <Notice/>
    </div>
    <div>
      <router-view/>
    </div>
    <div>
      <Footer/>
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

<style lang="scss" scoped>

</style>
