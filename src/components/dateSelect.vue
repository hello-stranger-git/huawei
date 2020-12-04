<template>
  <div class="dateSelectDiv">
    <Calendar class="calendar"
              v-if="calendarShow"></Calendar>
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
        <div class="point"
             @click="togCalendar">
          <li></li>
          <li></li>
          <li></li>
        </div>
        <!-- <div class="datePicker">
          <el-date-picker @change="datePicker"
                          v-model="value1"
                          type="date"
                          ref="datePicker"
                          placeholder=""
                          size="mini"
                          :editable="false">
          </el-date-picker>
        </div> -->
      </el-col>
    </div>
  </div>
</template>

<script>
import Calendar from '@/components/calendar.vue'
export default {
  data () {
    return {
      value1: "",
      calendarShow: false
    };
  },
  components: {
    Calendar,
  },
  methods: {
    datePicker () {
      console.log(this.value1)
    },
    togCalendar () {
      this.calendarShow = !this.calendarShow;
    }
  },
};
</script>

<style scoped>
.dateSelectDiv {
  background-color: #fff;
  position: relative;
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
  /* position: relative; */
}
/* .datePicker {
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
} */
/* /deep/.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
  height: 100%;
}
/deep/.el-input--mini .el-input__inner {
  width: 100%;
  height: 100%;
} */
.calendar {
  position: absolute;
  z-index: 1;
  top: 52px;
  width: 90%;
  left: 5%;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 5px rgb(20 20 21 / 20%);
  opacity: 90%;
  background-color: #fff;
}
>>> .calendar .rowDays {
  height: 30px;
}
</style>