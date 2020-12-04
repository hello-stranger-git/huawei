<template>
  <div class="TopMessage">
    <el-row>
      <el-col :span="14">
        <div class="grid-content bg-purple left">
          <img :src="logoImage"/>
          <div>
            <span class="l-title">华为体验店</span>
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="10" class="r-col">
        <div class="grid-content bg-purple-light right">
          <div>
            <span> 兰宇贵 </span>
            <i class="el-icon-chat-line-round messageIcon"></i>
            <div class="r-message-count">9</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const logo = require('@/assets/topMessage/logo.png')
export default {
    data(){
        return{
            logoImage:logo
        }
    }
};
</script>
<style scoped>
.TopMessage{
    background-color: #fbfbfb;
    padding: 10px;
    box-shadow: 0px 2px 6px #99999924;
}
.left {
  display: flex;
  align-items: center;
}
.left > img {
  width: 50px;
  height: 45px;
  /* background-color: brown; */
}
.left .l-title{
    padding: 0 10px;
}
.r-col{
    height: 50px;
}
.right{
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    position: relative;
}
.messageIcon{
    font-size: 30px;
    vertical-align: middle;
    padding-left: 10px;
}
.r-message-count{
    /* width: 20px;
    height: 20px; */
    width: 18px;
    height: 18px;
    background-color:#FF3300;
    text-align: center;
    line-height: 18px;
    border-radius: 50%;
    position: absolute;
    /* right: 2px;
    top: 5px; */
    right: 3px;
    top: 8px;
    color: #ffffff;
    font-size: 12px;
}
</style>