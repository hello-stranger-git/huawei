<!--本店视频-->
<template>
  <div class="indexModel">
    <el-row>
      <el-col :span="24">
        <el-row class="videoTitle">
          <el-col :span="10">
            <IndexTitleModel
              title="本店视频"
              titleIcon="el-icon-video-camera"
              add="video"
            ></IndexTitleModel>
          </el-col>
          <!-- <el-col :span="14" class="videDate"> -->
          <!-- 数据更新时间：<span>2020/11/16 16:22:30</span> -->
          <!-- </el-col> -->
          <el-col :span="14" class="more"> <span>更多</span>> </el-col>
        </el-row>
      </el-col>
      <el-col :span="24">
        <el-row class="videoRow">
          <el-col :span="12">
            <VideoItem
              :videoImage="videoImage[0]"
              time="16:22:30"
              videoTitle="大厅3"
            ></VideoItem>
          </el-col>
          <el-col :span="12">
            <VideoItem
              :videoImage="videoImage[1]"
              time="16:22:30"
              videoTitle="大厅1"
            ></VideoItem>
          </el-col>
          <el-col :span="12">
            <VideoItem
              :videoImage="videoImage[2]"
              time="16:22:30"
              videoTitle="大厅2"
            ></VideoItem>
          </el-col>
          <el-col :span="12">
            <VideoItem
              :videoImage="videoImage[2]"
              time="22:30:30"
              videoTitle="人脸识别进门"
              status="offLine"
            ></VideoItem>
          </el-col>
        </el-row>
      </el-col>
      <!-- <el-col class="more">
                <span>更多</span>>
            </el-col> -->
    </el-row>
  </div>
</template>
<script>
import VideoItem from "./Video/VideoItem.vue"; //video
import IndexTitleModel from "./indexTitleModel.vue";
const videoImage1 = require("@/assets/videoImage/videoImage1.png");
const videoImage2 = require("@/assets/videoImage/videoImage2.png");
const videoImage3 = require("@/assets/videoImage/videoImage3.png");
const videoImage4 = require("@/assets/videoImage/videoImage4.png");
export default {
  data() {
    return {
      videoImage: [videoImage1, videoImage2, videoImage3, videoImage4],
    };
  },
  components: {
    VideoItem,
    IndexTitleModel,
  },
};
</script>
<style scoped>
.videoTitle {
  display: flex;
  align-items: center;
}
.videoRow {
  margin-top: 15px;
}
.videoRow .VideoItem {
  margin: 5px;
}
.more {
  text-align: right;
  font-size: 16px;
  padding-right: 5px;
}
</style>