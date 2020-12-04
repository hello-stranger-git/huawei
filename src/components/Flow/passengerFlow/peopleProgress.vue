<template>
  <div class="peopleProgress">
    <el-row>
      <el-col :span="8">
        <span>{{ time }}</span>
      </el-col>
      <el-col :span="12">
        <el-progress :text-inside="true"
                     :stroke-width="15"
                     :percentage="percentage"
                     :color="progressColor"></el-progress>
      </el-col>
      <el-col :span="4">
        <span>{{ peopleCount }}</span>
      </el-col>
      <el-col :span="12"
              class="man">
        <i class="iconfont iconnanren"></i><span>{{ man}}</span>
      </el-col>
      <el-col :span="12"
              class="woman">
        <i class="iconfont iconnvren"></i><span>{{ woman }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    progressColor: {
      type: String
    },
    time: {
      type: String
    },
    peopleCount: {
      type: String
    },
    man: {
      type: Number
    },
    woman: {
      type: Number
    },
    percentage: {//进度条
      type: Number
    }
  }

}
</script>

<style scoped>
.el-col {
  text-align: center;
}
/deep/.el-progress-bar__innerText {
  display: none;
}
/deep/.el-progress-bar__outer {
  background-color: rgba(255, 255, 255, 0);
}
.peopleProgress {
  font-size: 16px;
}
.man {
  text-align: left;
  padding-left: 130px;
}
/* .noMan {
} */
.woman {
  text-align: left;
  padding-left: 10px;
}
.iconnanren {
  color: #1296db;
}
.iconnvren {
  color: #f98181;
}
</style>