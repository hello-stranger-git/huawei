<!--上下模板-->
<template>
  <div class="module" :style="{'height':height}">
    <div class="top">
      <div class="left">
        <img style="vertical-align: middle;" width="24px" height="24px" :src="icon"/>
        <span style="margin-left:6px;vertical-align: middle;font-size: 18px;font-weight: 800;color: #343434;">{{ title }}</span>
      </div>
      <div class="right">
        <span class="now" @click="now">当前</span>
        <span style="font-size: 16px;font-weight: 400;color: rgba(0, 0, 0, 0.4);" @click="more">更多</span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String
    }
  },
  methods: {
    // 点击当前按钮
    now() {
      this.$emit('now')
    },
    // 点击更多按钮
    more() {
      this.$emit('more')
    }
  }
}
</script>

<style lang="less" scoped>
.module{
  margin: 12px 12px 0 12px;
  background-color: #fff;
  border-radius: 10px;
  .top{
    padding: 16px 16px 0 16px;
    display: flex;
    justify-content: space-between;
    .right{
      line-height:26px;
      .now{
        margin-right: 28px;
        font-size: 16px;
        font-weight: bold;
        color:#E60012;
        position: relative;
        &::after{
          content: '';
          display: inline-block;
          width: 16px;
          height: 2px;
          background: #E60012;
          border-radius: 2px;
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>
