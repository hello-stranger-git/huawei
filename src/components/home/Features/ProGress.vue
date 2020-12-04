<template>
  <el-row class="FeaturesProgress">
    <el-col :span="5" class="progressTitle">
        {{ title }}
        <i :class="progressIcon"></i>
    </el-col>
    <el-col :span="15">
        <el-progress :color="progressColor" :text-inside="true" :stroke-width="17" :percentage="percentage"></el-progress>
    </el-col>
    <el-col :span="4" class="percent">
      <span v-if="!sex">
        {{ percentage }}%
      </span>
      <div v-else class="prgressSex">
          <i class="el-icon-s-custom"></i>
          <span>女性</span>
        </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
    props:['title','percentage','progressColor','sex','progressIcon']
};
</script>
<style scoped>
.percent{
  font-size: 12px;
  color: #CBCBD7;
  text-align: center;
}
.prgressSex>i{
  color: #F98181;
}
.progressTitle{
  font-size: 13px;
}
</style>