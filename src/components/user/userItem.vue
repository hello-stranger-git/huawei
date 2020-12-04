<template>
  <div class="userItemDiv">
    <el-row class="userItem">
      <el-col :span="4"
              class="iconCol">
        <i :class="[Icon,'iconfont','icon']"
           :style="{color:color}"></i>
      </el-col>
      <el-col :span="sale?8:20"
              :title="title"
              class="titleCol">
        <el-col :span="arrow?22:24">
          <span class="title">{{ title }}</span>
        </el-col>
        <el-col v-if="arrow"
                :span="2">
          <span class="arrow">></span>
        </el-col>
      </el-col>
      <!-- 销售按钮组 -->
      <el-col v-if="sale"
              :span="12"
              class="saleBtnGroup">
        <el-col :span="8">
          <el-input v-model="yesterday"
                    placeholder="昨日"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="today"
                    placeholder="今日"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="beforeYesterday"
                    placeholder="前日"></el-input>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      yesterday: "",
      today: "",
      beforeYesterday: "",

    }
  },
  props: {
    Icon: {
      type: String
    },
    color: {
      type: String
    },
    title: {
      type: String
    },
    arrow: {
      type: Boolean,
      default: false
    },
    sale: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style scoped>
.userItem {
  /* height: 50px; */
  background-color: #fff;
  margin: 2px 0px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border-radius: 8px;
}
.titleCol {
  display: flex;
  align-items: center;
}
.iconCol {
  text-align: center;
}
.icon {
  text-align: center;
  font-size: 26px;
}
.arrow {
  font-size: 26px;
  color: #bfbfbf;
}
>>> .el-input__inner {
  border-radius: 24px;
  height: 25px;
  padding: 0 10px;
  width: 80%;
}
.saleBtnGroup {
  padding-top: 2px;
}
</style>