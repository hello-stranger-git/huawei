<template>
  <div class="appIndex">
    <TopMessage></TopMessage>
    <Notice></Notice>
    <router-view />
    <Footer></Footer>
    <div
      :class="[global ? 'caladerBackground' : '']"
      @touchmove.stop.prevent
    ></div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import TopMessage from '@/components/home/TopMessage.vue'; //顶部栏
import Notice from '@/components/home/Notice.vue'; //通知栏
export default {
  data() {
    return {
      global: false,
    };
  },
  components: {
    Footer,
    TopMessage,
    Notice,
  },
  methods: {},
  watch: {
    '$store.state.caladerBackground': function() {
      //你需要执行的代码
      this.global = this.$store.state.caladerBackground;
    },
  },
};
</script>
<style scoped>
/* 客流日历遮罩层 */
.caladerBackground {
  width: 100%;
  height: 100%;
  background-color: #0000007a;
  position: fixed;
  top: 0;
  z-index: 2;
  pointer-events: auto;
}
.appIndex {
  background-color: #eee;
  position: relative;
}
</style>
