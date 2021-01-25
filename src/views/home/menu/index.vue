<!--menu-->
<template>
  <div class="menu" style="height: 110px;">
    <MenuItem v-for="item in menuData" :key="item.id" :menuItem="item" />
  </div>
</template>

<script>
import MenuItem from './components/menuItem'
export default {
  props: {
    menuData: {
      type: Array
    }
  },
  components: {
    MenuItem
  }
}
</script>

<style lang="less" scoped>
.menu {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  overflow: auto;
  .menuItem {
    width: 50px;
    margin: 0 10px;
  }
}
//隐藏滚动条
::-webkit-scrollbar {
  display: none;
}
</style>
