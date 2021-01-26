<!--menu-->
<template>
  <div class="menu" style="height: 110px;">
    <div v-for="item in menuData" :key="item.id" @click="jumpMenuItem(item.name)">
    <MenuItem  :menuItem="item"/>
    </div>
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
  },
  methods: {
    jumpMenuItem(name) {
      this.$router.push({ name: name })
    }
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
