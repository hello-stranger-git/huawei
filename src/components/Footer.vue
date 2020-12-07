<template>
  <div class="Footer">
    <el-row>
      <el-col :span="4">
        <router-link to="/Home" active-class="active">
          <FooterItem title="首页" icon="el-icon-house"></FooterItem>
        </router-link>
      </el-col>
      <el-col :span="5">
        <router-link :to="{ name: 'Flow' }" active-class="active">
          <FooterItem title="客流" icon="el-icon-orange"></FooterItem>
        </router-link>
      </el-col>
      <!-- <el-col :span="4">
        <FooterItem title="安防" icon="el-icon-bangzhu"></FooterItem>
      </el-col> -->
      <el-col :span="5">
        <router-link :to="{ name: 'Check' }" active-class="active">
          <FooterItem title="（点检）" icon="el-icon-edit-outline"></FooterItem>
        </router-link>
      </el-col>
      <el-col :span="5">
        <router-link :to="{ name: 'App' }" active-class="active">
          <FooterItem title="应用" icon="el-icon-monitor"></FooterItem>
        </router-link>
      </el-col>
      <el-col :span="5">
        <router-link :to="{ name: 'User' }" active-class="active">
          <FooterItem title="我的" icon="el-icon-user"></FooterItem>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import FooterItem from './Footer/FooterItem.vue';
export default {
  components: {
    FooterItem,
  },
};
</script>
<style scoped>
.Footer {
  position: fixed;
  bottom: 0;
  width: 100%;

  background-color: #fbfbfb;
  /* padding-top: 8px;
  padding-bottom: 10px; */

  box-shadow: 0px 0px 6px #c7c7c7;
}
.active {
  color: #ff3300;
}
</style>
