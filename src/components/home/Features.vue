<!--游客特征-->
<template>
  <div class="indexModel">
    <el-row>
      <el-col :span="24" class="featuresTitle">
        <IndexTitleModel :title="title" :add="add" :titleIcon="titleIcon"></IndexTitleModel>
      </el-col>
      <el-col :span="24" class="featuresBtnGroup" v-if="showBtnGroup">
        <el-row>
          <el-button-group>
            <el-col :span="8">
              <el-button class="active dayBtn">今日</el-button>
            </el-col>
            <el-col :span="8">
              <el-button class="weekBtn">本周</el-button>
            </el-col>
            <el-col :span="8">
              <el-button class="monthBtn">本月</el-button>
            </el-col>
          </el-button-group>
        </el-row>
      </el-col>
      <el-col :span="24">
        <FeaturesRing></FeaturesRing>
      </el-col>
      <el-col :span="24" class="progress">
          <ProGress progressIcon="el-icon-user-solid" :sex="true" class="sex"  title="男性" :percentage="70" progressColor="#50A6FF"></ProGress>
          <ProGress progressIcon="el-icon-user-solid" title="回头客" :percentage="80.78" progressColor="#50A6FF"></ProGress>
          <ProGress progressIcon="el-icon-star-on" title="会员" :percentage="23.56" progressColor="#FFCD41"></ProGress>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import IndexTitleModel from "./indexTitleModel.vue";
import FeaturesRing from "./Features/FeaturesRing.vue";//环形图
import ProGress from "./Features/ProGress.vue";//progress图
export default {
  // props: ["title", "titleIcon", "add","showBtnGroup"],
  
  props: {
    title:{
      type:String,
      default:''
    },
    titleIcon:{
      type:String,
      default:''
    },
    add:{
      type:String,
      default:''
    },
    showBtnGroup:{
      default:true
    }
  },
  data() {
    return {
      
    };
  },
  components: {
    FeaturesRing,
    ProGress,
    IndexTitleModel
  },
};
</script>
<style scoped>
.el-button.active {
  background-color: #409eff;
  color: #ffffff;
}
.el-button {
  color: #169bd5;
  border-color: #389ed6;
  width: 6rem;
}
.weekBtn {
  border-radius: 0;
  border-right: 0;
  border-left: 0;
}
.dayBtn {
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
}
.monthBtn {
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
}
.featuresBtnGroup {
  text-align: center;
  margin-top: 15px;
}
.progress{
    background-color: #ffffff;
    margin-top: -38px;
}
/deep/.FeaturesProgress{
    margin: 5px 0;
    margin-bottom: 15px;
    padding-left: 10px;
}
/deep/.FeaturesProgress:last-child{
    margin-bottom: 0;
}
/deep/.sex .el-progress-bar__outer{
  background-color: #F98181;
}
/deep/.FeaturesProgress .el-icon-user-solid{
  color: #50A6FF;
}
/deep/.FeaturesProgress .el-icon-star-on{
  color: #F7B500;
}
</style>