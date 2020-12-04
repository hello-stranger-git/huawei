<template>
  <el-row class="featuresRing">
    <el-col :span="10">
      <div class="ring" >
        <VeRing :tooltip="tooltip" :series="series" height="200px"></VeRing>
        <div class="peopleCount">
            <span>
              247
              <p class="pepleCountP">总人数</p>
            </span>
          </div>
      </div>
    </el-col>
    <el-col :span="14">
      <!--可以抽为组件-->
      <el-row class="featuresRingDataRow">
        <el-col :span="24" class="featuresRingDataCol">
          <div class="round" style="border: 1px solid #c32c1c;"></div>
          <span>老年</span>
          <span>10.00%</span>
          <span>47</span>人
        </el-col>
        <el-col :span="24" class="featuresRingDataCol">
          <div class="round" style="border: 1px solid #19D4AE;"></div>
          <span>中年</span>
          <span>20.00%</span>
          <span>154</span>人
        </el-col>
        <el-col :span="24" class="featuresRingDataCol">
          <div class="round" style="border: 1px solid #5AB1EF;"></div>
          <span>青年</span>
          <span>34.00%</span>
          <span>46</span>人
        </el-col>
        <el-col :span="24" class="featuresRingDataCol">
          <div class="round" style="border: 1px solid #FFB980;"></div>
          <span>少年</span>
          <span>10.00%</span>
          <span>47</span>人
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import VeRing from "v-charts/lib/ring.common";
export default {
  data() {
    return {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      // legend: {
      //     orient: 'vertical',
      //     left: 10,
      //     data: ['老年', '青年', '中年', '少年']
      // },
      series: [
        {
          name: "人数",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 47, name: "老年" },
            { value: 154, name: "青年" },
            { value: 46, name: "中年" },
            { value: 50, name: "少年" },
          ],
        },
      ],
    };
  },
  components: {
    VeRing,
  },
};
</script>
<style scoped>
.featuresRing {
  margin-top: -15px;
  display: flex;
  align-items: center;
}
.featuresRingDataRow {
  text-align: left;
  background-color: #ffffff;
  padding: 10px;
}
.featuresRingDataCol {
  /* margin: 5px; */
  margin: -3px;
  font-size: 12px;
  margin-top: 6px;
  color: #909399;
}
.featuresRingDataCol > span {
  margin: 0 4px;
}
.ring{
  position: relative;
}
.peopleCount{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  font-size: 16px;
}
.round{
  display: inline-block;
  border: 1px solid #c32c1c;
  background-color: #ffffff;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 2px;
}
.pepleCountP{
  font-size: 12px;
  color: #606266;
}
</style>