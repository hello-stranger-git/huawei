<template>
  <div>
    <Menu></Menu>
    <div class="indexModel">
      <div class="checkTop">
        <div class="btnGroup">
          <el-button :class="activeBtn?'activeBtn ':'' ">大厅摄像头</el-button>
          <el-button @click="btn">主厅摄像头</el-button>
          <el-button>副厅摄像头</el-button>
          <el-button>摄像头1</el-button>
          <el-button>大厅摄像头背后1</el-button>
          <el-button>主厅摄像头背后</el-button>
        </div>
      </div>
      <div class="video">
        <img :src="videoImage"
             height="100%"
             width="100%">
      </div>
      <div class="videoBtnGroup">
        <i class="el-icon-caret-bottom videoBtnGroupIcon"
           style="color:#fff;background-color: #4490d2;"></i>
        <el-button>11-22</el-button>
        <el-button>11-23</el-button>
        <el-button>11-24</el-button>
        <el-button>前天</el-button>
        <el-button>昨天</el-button>
        <el-button>今天</el-button>
        <el-button>现在</el-button>
      </div>
      <div class="timeAxis">
        <!-- <img :src="timeAxis"
             height="100%"
             width="100%"> -->
        <!-- <TimeAxis></TimeAxis> -->
        <TimeAxis></TimeAxis>
      </div>
      <div class="checkBtn">
        <button class="check"
                @click="check">
          <span>点检</span>
        </button>
      </div>
    </div>
    <div class="bottomMargin"></div>
  </div>
</template>

<script>
let videoImage = require("@/assets/screenImage/videoImage.png")
// let timeAxis = require("@/assets/videoImage/timeAxis.png")
import TimeAxis from "@/components/check/timeAxis.vue"; //时间轴
import Menu from "@/components/home/Menu.vue"; //菜单栏
export default {
  data () {
    return {
      videoImage: videoImage,
      activeBtn: true
      // timeAxis: timeAxis
    }
  },
  components: {
    Menu,
    TimeAxis
  },
  methods: {
    check () {
      this.$router.push({ name: "CheckItem" })
    },
    btn () {
      this.activeBtn = false;
    }
  },
};
</script>

<style scoped>
.indexModel {
  padding: 0;
  padding-top: 16px;
}
.btnGroup {
  margin-bottom: 15px;
}
/deep/.btnGroup,
.videoBtnGroup {
  display: flex;
  width: 100%;
  overflow-y: scroll;
}
/deep/.btnGroup .el-button,
.videoBtnGroup .el-button {
  padding: 10px 6px;
  font-size: 12px;
  margin: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
/deep/.btnGroup .el-button:active {
  border-bottom: 0;
  border-color: #dcdfe6;
}
/deep/.el-button:focus,
.el-button:hover {
  border-bottom: 0;
  background-color: #fff;
}
.activeBtn {
  color: #3a8ee6;
  border-bottom: 0;
  outline: 0;
}
.checkTop {
  margin-bottom: 10px;
}
.videoBtnGroup {
  /* padding: 1rem; */
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
}
.videoBtnGroupIcon {
  color: rgb(255, 255, 255);
  background-color: #4490d2;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-size: 26px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  justify-content: center;
}
.video {
  height: 200px;
  background-color: cadetblue;
}
.checkBtn {
  height: 200px;
  background-color: #eff2f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check {
  background-color: #fff;
  border-radius: 50%;
  font-size: 30px;
  width: 120px;
  height: 120px;
  border: 0;
  box-shadow: 0px 0px 8px #d4cdcd;
  color: #3c9dff;
  outline: none;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: #f5f5f5;
}
.timeAxis {
  margin-top: 25px;
}
</style>