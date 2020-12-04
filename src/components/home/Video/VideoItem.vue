<template>
  <div class="VideoItem">
    <img :class="[status=='offLine'?'offline':'','videoImage']" :src="videoImage">
    <div class="videoTitle">
      <!-- <span :class="[status=='offLine'?'offline':'line','point']"></span> -->
      <span class="videoTitleSpan">{{ videoTitle }}</span>
      <span :class="[status=='offLine'?'offlineVideoTime':'','time']">{{ time }}</span>
    </div>
    <div class="offLineSpan" v-if="status=='offLine'">
      <span>设备离线</span>
    </div>
  </div>
</template>
<script>
export default {
  props:['videoImage','videoTitle','status','time']
};
</script>
<style scoped>
.VideoItem{
  position: relative;
}
.videoTitle{
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  left: 0;
  width: 100%;
  background-color: #30313382;
  color: #fff;
  border-radius: 0 0 5px 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.videoImage {
  width: 100%;
  border-radius: 10px;
}
.videoTitleSpan{
  padding-left:12px
}
.point{
    width: 10px;
    display: inline-block;
    height: 10px;
    border-radius: 50%;
    margin-left: 8px;
}
.line{
    background-color: #5683FF;
}
.offline{
    background-color: #FD3939;
    opacity: 0.5;
}
.offlineVideoTime{
  color: #000;
}
.time{
  float: right;
  padding-right: 10px;
  /* color: #fff; */
  font-size: 12px;
}
.offLineSpan{
  color: #FD3939;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-50%);
  font-size: 18px;
  font-weight: 800;
}
</style>