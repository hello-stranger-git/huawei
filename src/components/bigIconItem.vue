<!--大图标每一项-->
<template>
  <div class="bigIconItem">
    <div>
      <img :src="icon" />
      <span>{{ title }}</span>
      <div v-if="count">{{ count }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // icon: require('@/assets/images/home/taskManager/noFinishIcon.png')
    }
  }
}
</script>
<style lang="less" scoped>
.bigIconItem {
  position: relative;
  width: 48%;
  height: 76px;
  box-shadow: 0px 0px 6px rgba(20, 20, 20, 0.1);
  display: flex;
  align-items: center;
  & > div {
    width: 142px;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    div {
      position: absolute;
      right: 6px;
      top: 6px;
      font-size: 10px;
      color: #fff;
      background-color: #e30011;
      border-radius: 9px;
      padding: 2px 5px;
      border: 1px solid red;
    }
  }
  img {
    vertical-align: middle;
    width: 44px;
    height: 44px;
  }
  span {
    margin-left: 20px;
    font-size: 14px;
    color: #141414;
    vertical-align: middle;
  }
}
</style>
