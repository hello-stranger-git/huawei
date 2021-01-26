<!--单个菜单组件-->
<template>
  <div class="menuItem">
    <van-icon
      :name="menuItem.icon"
      size="50"
      :badge="
        menuItem.info < 1 ? '' : menuItem.info > 99 ? '99+' : menuItem.info
      "
    />
    <p>{{ menuItem.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.menuItem {
  text-align: center;
  .van-icon {
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 12px;
    line-height: 17px;
    margin-top: 3px;
  }
}
</style>
