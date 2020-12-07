<template>
  <div>
    <!-- tab选项区域 -->
    <el-tabs type="border-card" class="apps">
      <!-- 使用中 -->
      <el-tab-pane label="使用中"> </el-tab-pane>
      <!-- 未使用 -->
      <el-tab-pane label="未使用">
        <div v-for="(item, i) of appdata" :key="i">
          <Appinfo :item="item"></Appinfo>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// const icon = require('@/assets/appimage/dun.png');

import Appinfo from '@/components/app/appinfo.vue';
export default {
  components: {
    Appinfo,
  },
  data() {
    return {
      // 数据
      appdata: [
        {
          name: '安全服务',
          icon: require('@/assets/appimage/anquan.png'),
          text: '24小时全天候守护你的私人财产',
          banner: require('@/assets/appimage/appbanner1.png'),
        },
        {
          name: '考勤管理',
          icon: require('@/assets/appimage/kaoqing.png'),
          text: '多地址设置，多班次考勤，考情数据报表',
          banner: require('@/assets/appimage/appbanner2.png'),
        },
        {
          name: '会员管理',
          icon: require('@/assets/appimage/huiyuan.png'),
          text: '移动端CRM，会员属性分析，跟踪提醒，精准营销',
          banner: require('@/assets/appimage/appbanner3.png'),
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
/* tab选项样式 */
/deep/.el-tabs__nav {
  display: flex;
  width: 100%;
  color: black;
}
/deep/.el-tabs__item {
  flex-grow: 1;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: black !important;
  background-color: #fff;
  border-left: 10px solid rgb(197, 197, 197);
}
/deep/.is-top.el-tabs--border-card {
  background-color: #f0f0f0 !important;
}
/* 选中样式 */
/deep/.is-active {
  background-color: rgb(233, 233, 233) !important;
}
.el-tabs--border-card > .el-tabs__header {
  border: 0;
}
/deep/.el-tabs--border-card > .el-tabs__content {
  background-color: rgb(233, 233, 233);
  margin-bottom: 55px;
}
</style>
