<!--头部-->
<template>
  <div class="header">
    <van-row style="height:100%">
      <van-col span="14" class="left">
        <img :src="logo" width="30px" height="30px" />
        <div @click="hiddenDownPopup">
          <span style="font-size:14px;font-weight:400;margin-left:4px">{{
            sotoreName
          }}</span>
          <img
            :src="dropDown"
            width="10px"
            height="10px"
            style="margin-left:3px"
          />
        </div>
      </van-col>
      <van-col span="10" class="right">
        <span>{{ userName }}</span>
        <div class="message" @click="handleMessage">
          <img :src="information" width="24px" height="24px" />
          <div class="noReaderMessage">{{ noReaderMessage }}</div>
        </div>
      </van-col>
    </van-row>
    <DownPopup :show.sync="show" @clickOverlay="clickOverlay">
      <DownPopupTop />
      <IndexBar />
    </DownPopup>
  </div>
</template>

<script>
import DownPopupTop from './components/downPopupTop' // 弹出框头部
import IndexBar from './components/indexBar' // 索引搜索
import DownPopup from '@/components/downPopup.vue'
export default {
  data() {
    return {
      logo: require('@/assets/images/logo.png'), // logo图标
      dropDown: require('@/assets/images/header/dropDown.png'), // 选择门店下拉图标
      information: require('@/assets/images/header/information.png'), // 消息图标
      sotoreName: '龙岗区华为体验店', // 门店名称
      userName: '兰宇贵', // 登录的用户名称
      noReaderMessage: 9, // 未读信息
      show: false // 选择们门店弹出框
    }
  },
  components: {
    DownPopup,
    DownPopupTop,
    IndexBar
  },
  methods: {
    // 打开门店选择
    hiddenDownPopup() {
      this.show = true
    },
    // 点击遮罩层
    clickOverlay() {
      this.show = false
    },
    // 跳转到消息界面
    handleMessage() {
      this.$router.push({ name: 'UserMessage' })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 44px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 10;
  //左边
  .left {
    height: 100%;
    padding-left: 12px;
    display: flex;
    align-items: center;
  }
  //右边
  .right {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 21px;
    .message {
      margin-left: 21px;
      position: relative;
      .noReaderMessage {
        position: absolute;
        width: 16px;
        height: 16px;
        background: #e30011;
        font-size: 10px;
        color: #fff;
        border-radius: 50%;
        line-height: 16px;
        text-align: center;
        right: -8px;
        top: -6px;
      }
    }
  }
}
</style>
