<template>
  <div class="notice" :style="height ? 'height:46px' : ''">
    <!-- 通知栏 -->
    <div class="content">
      <van-notice-bar
        color="#fff"
        background="rgb(230, 0, 18)"
        left-icon="volume-o"
        mode="closeable"
        @close="closeNotice"
      >
        <span>{{ noticeTxt }}</span>
      </van-notice-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: true,
      noticeTxt:
        '待整改， 厅内卫生-1 厅内地面、桌面有垃圾，未整改，良好的作风，严格的纪律'
    }
  },
  methods: {
    closeNotice() {
      this.height = false
    }
  }
}
</script>

<style lang="less" scoped>
.notice {
  .content {
    position: fixed;
    width: 100%;
  }
  .van-notice-bar {
    height: 46px;
    font-size: 12px;
  }
  /deep/.van-notice-bar__left-icon {
    font-size: 20px;
    width: 58px;
  }
  /deep/.van-notice-bar__left-icon::after {
    content: '';
    height: 24px;
    border: 1px solid #ae000e;
    display: inline-block;
    position: absolute;
    right: 19px;
    top: -2px;
  }
}
</style>
