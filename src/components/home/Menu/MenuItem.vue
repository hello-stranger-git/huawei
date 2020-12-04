<template>
  <el-col :span="4">
    <div class="grid-content bg-purple item">
      <div class="menuIcon">
        <i :class="['icon',menuIcon]"></i>
        <div class="message-count">{{ menuCount }}</div>
      </div>
      <div class="menuTitle">
        <span>{{ menuTitle }}</span>
      </div>
    </div>
  </el-col>
</template>
<script>
export default {
  props: ['menuIcon', 'menuTitle', 'menuCount']
};
</script>
<style scoped>
.icon {
  font-size: 24px;
}
.menuIcon {
  /* width: 50px;
    height: 50px; */
  width: 40px;
  height: 40px;
  font-size: 24px;
  line-height: 40px;

  background-color: #fb5a5d;
  border-radius: 50%;
  /* font-size: 2rem; */
  text-align: center;
  /* line-height: 50px; */
  color: #ffffff;
  position: relative;
  margin: auto;
}
.message-count {
  /* width: 25px;
    height: 25px; */
  width: 18px;
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  right: -5px;
  top: -5px;

  background-color: #ff3300;
  text-align: center;
  /* line-height: 25px; */
  border-radius: 50%;
  position: absolute;
  /* right: -10px;
    top: -10px; */
  /* font-size: 16px; */
}
.menuTitle {
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
  color: #303133;
}
</style>