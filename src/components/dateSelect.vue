<template>
  <div class="dateSelectDiv">
    <div class="dateSelect">
      <el-col :span="4">
        <span class="active">今日</span>
      </el-col>
      <el-col :span="4">
        <span>昨日</span>
      </el-col>
      <el-col :span="4">
        <span>前日</span>
      </el-col>
      <el-col :span="4">
        <span>11/12</span>
      </el-col>
      <el-col :span="4">
        <span>11/11</span>
      </el-col>
      <el-col :span="4"
              class="togDate">
        <div class="point">
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div class="datePicker">
          <el-date-picker @change="datePicker"
                          v-model="value1"
                          type="date"
                          ref="datePicker"
                          placeholder=""
                          size="mini"
                          :editable="false">
          </el-date-picker>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: "",
    };
  },
  components: {},
  methods: {
    datePicker () {
      console.log(this.value1)
    }
  },
};
</script>

<style scoped>
.dateSelectDiv {
  background-color: #fff;
}
.dateSelect {
  margin: auto;
  margin-bottom: 16px;
  width: 90%;
  height: 50px;
  background: #73e8e4;
  border-radius: 5px;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
}
.point {
  display: flex;
  justify-content: center;
}
.point > li {
  float: left;
  width: 10px;
}
.active {
  padding-bottom: 6px;
  border-bottom: 3px solid;
}
.togDate {
  position: relative;
}
.datePicker {
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
}
/deep/.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
  height: 100%;
}
/deep/.el-input--mini .el-input__inner {
  width: 100%;
  height: 100%;
}
</style>