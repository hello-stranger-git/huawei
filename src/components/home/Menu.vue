<template>
  <div class="menu">
    <el-row class="menuItem">
        <MenuItem class="oneMenuItem" menuIcon="iconfont iconapp_icons--" menuTitle="报警信息" :menuCount="1"></MenuItem>
        <MenuItem class="twoMenuItem" menuIcon="el-icon-time" menuTitle="待整改" :menuCount="5"></MenuItem>
        <MenuItem class="threeMenuItem" menuIcon="el-icon-location-information" menuTitle="9人缺勤" :menuCount="9"></MenuItem>
        <MenuItem class="fourMenuItem" menuIcon="el-icon-shopping-cart-2" menuTitle="商城" :menuCount="2"></MenuItem>
        <MenuItem class="fiveMenuItem" menuIcon="el-icon-document-copy" menuTitle="工单" :menuCount="2"></MenuItem>
    </el-row>
  </div>
</template>
<script>
import MenuItem from './Menu/MenuItem.vue'//每一个菜单
export default {
    components:{
        MenuItem
    }
};
</script>
<style>
    .oneMenuItem>.item>.menuIcon{
    background-color:#f72525;
    }
    .twoMenuItem>.item>.menuIcon{
    background-color: #2735f3;
    }
    .threeMenuItem>.item>.menuIcon{
    background-color: #05d48f;
    }
    .fourMenuItem>.item>.menuIcon{
    background-color: #ff4201;
    }
    .fiveMenuItem>.item>.menuIcon{
    background-color: #ff9400;
    }
</style>
<style scoped>
.menuItem{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.menu{
    background-color: #FFF;
    padding: 14px 0 15px 0;
    margin: 10px 25px;
    border-radius: 8px;
}
</style>