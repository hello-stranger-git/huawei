<template>
  <div class="Notice">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple Icon">
            <i class="el-icon-alarm-clock "></i>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light center">
            <span>待整改：厅内卫生-1 厅内地面、桌面垃圾待整改：厅内卫生-1 厅内地面、桌面垃圾待整改：厅内卫生-1 厅内地面、桌面垃圾</span>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple Icon">
            <i class="el-icon-arrow-right "></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.Notice {
  background-color: #ff3b3b;
  /* height: 50px; */
  height: 40px;
  line-height: 40px;

  margin: 0 25px;
  border-radius: 5px;
  margin-top: 10px;
}
.Icon{
    /* font-size: 30px; */
    /* font-size: 24px; */
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
}
.center{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #FFFFFF;
    /* font-size: 18px; */
    font-size: 14px;
    margin-left: -16px;
}
</style>