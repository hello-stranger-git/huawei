<!--弹出框头部-->
<template>
  <div class="downPopupTop" style="height:54px;">
    <div><img :src="sort" /></div>
    <h2>选择店面</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: require('@/assets/images/header/sort.png') // 排序图标
    }
  }
}
</script>

<style lang="less" scoped>
.downPopupTop {
  position: relative;
  h2 {
    font-size: 16px;
    line-height: 54px;
    text-align: center;
    color: #141414;
  }
  div {
    position: absolute;
    top: 11px;
    left: 12px;
    width: 30px;
    height: 30px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
