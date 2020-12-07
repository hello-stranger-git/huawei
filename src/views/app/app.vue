<template>
  <div>
    <!-- tab选项区域 -->
    <el-tabs type="border-card" class="apps">
      <!-- 使用中 -->
      <el-tab-pane label="使用中">
        <div>
          <ul class="app_block">
            <!-- 应用图标 -->
            <li class="appimg">
              <img src="../../assets/appimage/dun.png" />
            </li>
            <!-- 应用名称 -->
            <li class="appname">
              <h3>安全服务</h3>
              <p>24小时全天候守护你的私人财产</p>
            </li>
            <!-- 安装 -->
            <li class="appinstall">
              <button>安 装</button>
            </li>
          </ul>
          <!-- 应用banner -->
          <div class="appbanner">
            <img src="../../assets/appimage/appbanner.png" />
          </div>
        </div>
        <div>
          <img src="" />
        </div>
      </el-tab-pane>
      <!-- 未使用 -->
      <el-tab-pane label="未使用">123 </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.apps {
  margin-top: 20px;
}
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
  border: 1px solid red;
  text-align: center;
  border: none !important;
  color: black !important;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid rgb(27, 27, 27) !important;
}
/deep/.el-tabs--border-card {
  background-color: #f0f0f0 !important;
}
/* 选中样式 */
/deep/.is-active {
  background-color: #f0f0f0 !important;
  border: 0 !important;
  border-top: 1px solid rgb(27, 27, 27) !important;
}
.el-tabs--border-card > .el-tabs__header {
  border: 0;
}

.app_block {
  display: flex;
  align-items: center;
}
.appimg > img {
  width: 50px;
}
.appname {
  flex-basis: 70%;
}
.appname > h3 {
  font-size: 18px;
}
.appname > p {
  color: #888888;
}
.appinstall > button {
  border-radius: 20px;
  background-color: #179bf3;
  color: #fff;
  width: 70px;
  font-size: 16px;
  line-height: 25px;
  border: none;
}

.appbanner {
  background-color: #fff;
}
</style>
