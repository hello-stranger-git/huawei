<template>
  <div class="dateSelectDiv">
    <Calendar class="calendar" v-show="calendarShow"></Calendar>
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
      <el-col :span="4" class="togDate">
        <div class="point" @click="togCalendar">
          <li></li>
          <li></li>
          <li></li>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import Calendar from '@/components/calendar.vue';
export default {
  data() {
    return {
      value1: '',
      calendarShow: false,
    };
  },
  components: {
    Calendar,
  },
  methods: {
    togCalendar() {
      this.calendarShow = !this.calendarShow;
      this.$store.state.caladerBackground = !this.$store.state
        .caladerBackground;
    },
  },
  watch: {
    '$store.state.caladerBackground': function() {
      //控制打开客流日历遮罩层
      this.calendarShow = this.$store.state.caladerBackground;
    },
  },
};
</script>

<style lang="less" scoped>
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
.calendar {
  position: absolute;
  z-index: 3;
  top: 52px;
  width: 90%;
  left: 5%;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 5px rgb(20 20 21 / 20%);
  opacity: 90%;
  background-color: #fff;
}
/deep/ .calendar .rowDays {
  height: 30px;
}
</style>
