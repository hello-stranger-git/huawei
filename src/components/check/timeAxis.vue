<template>
  <div class="block">
    <!-- <span class="demonstration">自定义初始值</span> -->
    <el-slider v-model="value"
               :step="1"
               :max="11"
               :format-tooltip="formatTooltip"></el-slider>
    <div class="time">
      <div class="timeScale"></div>
      <span class="timeSpan">15:00:00</span>
      <div class="bottomOverFlow">
        <div class='ruler topcm'>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>

          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
        </div>

        <div class='ruler bottomcm'>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
            <div class='mm'></div>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
            <!-- 每一格刻度线 -->
            <!-- <div class='mm'></div>
            <div class='mm'></div>
            <div class='mm'></div>
            <div class='mm'></div>
            <div class='mm'></div> -->
          </div>
          <div class='cm'>
          </div>

          <div class='cm'>
          </div>
          <div class='cm'>
          </div>

          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>
          <div class='cm'>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 5.5,
    }
  },
  methods: {
    formatTooltip (val) {
      let hour = 0
      let min = 0
      let ms = val * 3600
      hour = parseInt(ms / 3600)
      if (hour < 10) {
        hour = '0' + hour.toString()
      } else {
        hour = hour.toString()
      }
      min = ms % 3600
      if (min === 0) {
        min = '00'
      } else {
        min = '30'
      }
      let time = hour + ':' + min
      return time
    }
  }
}
</script>

<style scoped>
.block {
  width: 100%;
}
/deep/.el-slider__button {
  width: 0px;
  height: 63px;
  border-radius: 0%;
  border: 1px solid #409eff;
  background-color: #409eff;
}
/deep/.el-slider__bar {
  background-color: #777777;
  height: 100%;
}
/deep/.el-slider__runway {
  height: 56px;
  background-color: #aaaaaa;
}
/deep/.el-slider__button-wrapper {
  height: 50px;
  display: none;
}
.ruler {
  position: relative;
  width: 100%;
  margin: -16px auto;
  height: 14px;
}
/* .ruler .mm  */
.ruler .cm {
  position: absolute;
  border-left: 1px solid #555;
  height: 14px;
  /* width: 9.09091%; */
}
.ruler .cm:after {
  position: absolute;
  bottom: 20px;
  font: 11px/1 sans-serif;
  color: #fff;
}
/* .ruler .mm {
  height: 5px;
} */
/* .ruler .mm:nth-of-type(5) {
  height: 10px;
} */
.ruler .cm:nth-of-type(1) {
  left: 0%;
}
.bottomcm.ruler .cm:nth-of-type(1):after {
  content: "00:00";
}
.ruler .cm:nth-of-type(2) {
  left: 9.09091%;
}
.bottomcm.ruler .cm:nth-of-type(2):after {
  content: "01:00";
}
.ruler .cm:nth-of-type(3) {
  left: 18.1818%;
}
.bottomcm.ruler .cm:nth-of-type(3):after {
  content: "02:00";
}
.ruler .cm:nth-of-type(4) {
  left: 27.2727%;
}
.bottomcm.ruler .cm:nth-of-type(4):after {
  content: "03:00";
}
.ruler .cm:nth-of-type(5) {
  left: 36.3636%;
}
.bottomcm.ruler .cm:nth-of-type(5):after {
  content: "04:00";
}
.ruler .cm:nth-of-type(6) {
  left: 45.4545%;
}
.bottomcm.ruler .cm:nth-of-type(6):after {
  content: "05:00";
}
.ruler .cm:nth-of-type(7) {
  left: 54.5455%;
}
.bottomcm.ruler .cm:nth-of-type(7):after {
  content: "06:00";
}
.ruler .cm:nth-of-type(8) {
  left: 63.6364%;
}
.bottomcm.ruler .cm:nth-of-type(8):after {
  content: "07:00";
}
.ruler .cm:nth-of-type(9) {
  left: 72.7273%;
}
.bottomcm.ruler .cm:nth-of-type(9):after {
  content: "08:00";
}
.ruler .cm:nth-of-type(10) {
  left: 81.8182%;
}
.bottomcm.ruler .cm:nth-of-type(10):after {
  content: "09:00";
}
.ruler .cm:nth-of-type(11) {
  left: 90.9091%;
}
.bottomcm.ruler .cm:nth-of-type(11):after {
  content: "10.00";
}

/* .ruler .cm:nth-of-type(12) {
  left: 90.9091%;
}
.bottomcm.ruler .cm:nth-of-type(12):after {
  content: "11.00";
} */

.ruler .cm:nth-of-type(12) {
  left: 100%;
}
.bottomcm.ruler .cm:nth-of-type(12):after {
  content: "11.00";
}

.ruler .cm:nth-of-type(13) {
  left: 109.09091%;
}
.bottomcm.ruler .cm:nth-of-type(13):after {
  content: "12.00";
}

.ruler .cm:nth-of-type(14) {
  left: 118.1818%;
}

.bottomcm.ruler .cm:nth-of-type(14):after {
  content: "13.00";
}
.ruler .cm:nth-of-type(15) {
  left: 127.2727%;
}
.bottomcm.ruler .cm:nth-of-type(15):after {
  content: "14.00";
}
.ruler .cm:nth-of-type(16) {
  left: 136.3636%;
}
.bottomcm.ruler .cm:nth-of-type(16):after {
  content: "15.00";
}
.ruler .cm:nth-of-type(17) {
  left: 145.4545%;
}
.bottomcm.ruler .cm:nth-of-type(17):after {
  content: "16.00";
}
.ruler .cm:nth-of-type(18) {
  left: 154.5455%;
}
.bottomcm.ruler .cm:nth-of-type(18):after {
  content: "17.00";
}
.ruler .cm:nth-of-type(19) {
  left: 163.6364%;
}
.bottomcm.ruler .cm:nth-of-type(19):after {
  content: "18.00";
}
.ruler .cm:nth-of-type(20) {
  left: 172.7273%;
}
.bottomcm.ruler .cm:nth-of-type(20):after {
  content: "19.00";
}
.ruler .cm:nth-of-type(21) {
  left: 181.8182%;
}
.bottomcm.ruler .cm:nth-of-type(21):after {
  content: "20.00";
}
.ruler .cm:nth-of-type(22) {
  left: 190.9091%;
}
.bottomcm.ruler .cm:nth-of-type(22):after {
  content: "21.00";
}

/* .ruler .mm:nth-of-type(1) {
  left: 10%;
}
.ruler .mm:nth-of-type(2) {
  left: 20%;
}
.ruler .mm:nth-of-type(3) {
  left: 30%;
}
.ruler .mm:nth-of-type(4) {
  left: 40%;
}
.ruler .mm:nth-of-type(5) {
  left: 50%;
}
.ruler .mm:nth-of-type(6) {
  left: 60%;
}
.ruler .mm:nth-of-type(7) {
  left: 70%;
}
.ruler .mm:nth-of-type(8) {
  left: 80%;
}
.ruler .mm:nth-of-type(9) {
  left: 90%;
}
.ruler .mm:nth-of-type(10) {
  left: 100%;
} */
#mentionme {
  text-align: center;
  margin-top: 10%;
}
.topcm {
  /* transform: rotate(180deg); */
  position: absolute;
  top: 0;
  z-index: 1;
  margin: 0;
}
.bottomcm {
  /* margin-top: -30px; */
  position: absolute;
  margin: 0;
  bottom: 0;
}
.el-tooltip__popper {
  opacity: 0 !important;
}
.bottomOverFlow {
  width: 100%;
  height: 56px;
  position: relative;
  overflow: scroll;
  top: -72px;
}
.bottomOverFlow::-webkit-scrollbar,
.topcm::-webkit-scrollbar,
.topcm::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: #f5f5f5;
  opacity: 0;
}
.timeScale {
  position: absolute;
  width: 2px;
  height: 108%;
  background-color: #3299ff;
  left: 50%;
  top: -76px;
}
.time {
  position: relative;
}
.timeSpan {
  position: absolute;
  color: #61afff;
  left: 50%;
  transform: translateX(-50%);
  top: -100px;
  font-size: 12px;
}
</style>