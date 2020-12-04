<!--客流与销售分析-->
<template>
  <div class="indexModel">
    <el-row>
      <el-col :span="24">
        <el-row>
          <el-col :span="24">
            <IndexTitleModel title="客流与销售分析"
                             :titleIcon="titleIcon"></IndexTitleModel>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24"
              class="priceBottom">
        <VeHistogram></VeHistogram>
      </el-col>
      <el-col :span="24"
              class="flowPeople">
        <span class="flowPeopleTitle">客流人数</span>
        <span class="flowPeopleSpan"
              v-for="(item, index) in flowPeople"
              :key="index">{{ item }}</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import VeHistogram from "./Price/VeHistogram.vue"; //柱状图
import IndexTitleModel from "./indexTitleModel.vue";
export default {
  props: {
    titleIcon: {
      type: String
    }
  },
  data () {
    return {
      flowPeople: [300, 400, 500, 450, 400, 300, 500],
    };
  },
  components: {
    VeHistogram,
    IndexTitleModel,
  },
};
</script>
<style scoped>
.priceTable {
  margin-top: 10px;
}
.flowPeople {
  text-align: center;
  margin-top: 15px;
  font-size: 16px;
}
.flowPeopleTitle {
  margin-right: 10px;
}
.flowPeopleSpan {
  padding: 4px;
}
</style>