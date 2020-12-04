<template>
  <div :class="[nowLine?'nowLine':'','trendLine']">
    <el-row class="title">
      <el-col :span="8">
        <span class="trendLineTitle">{{ title }}</span>
      </el-col>

      <el-col :span="title?14:24"
              class="maxFlow">
        <span>{{ max }}</span>
      </el-col>
    </el-row>
    <div :id="flowLineId"
         style="width: 100%; height: 200px"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // flowLineId用于区别调用这个组建绘制不一样的图
  props: {
    nowLine: {
      type: Boolean,
      default: false
    },
    flowLineId: {
      type: String
    },
    series: {
      type: Array
    },
    xAxis: {
      type: Array
    },
    yAxis: {
      type: Array
    },
    legend: {
      type: Object
    },
    title: {
      type: String
    },
    max: {
      type: String
    }
  },
  // props: ["nowFlowLine", "flowLineId", "series", "xAxis", "yAxis", "legend", "title"],
  data () {
    return {
    }
  },
  methods: {
    drawChart () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.flowLineId));
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              width: "2", //鼠标图上去数据显示的那条线的样式
              color: {
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(91,179,252,0)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(91,179,252,0.2)", // 100% 处的颜色
                  },
                ],
              },
            },
          },
        },
        legend: this.legend,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        series: this.series//数据
      };
      myChart.setOption(option);
    },
  },
  mounted () {
    this.drawChart();
  },
};
</script>

<style scoped>
.trendLine {
  height: 170px;
  position: relative;
  background-color: #fff;
  border-radius: 8px;
}
.title {
  width: 85%;
  position: absolute;
  top: 25px;
  left: 30px;
}
.trendLineTitle {
  color: #383838;
  font-weight: 700;
  font-size: 14px;
}
.nowLine {
  margin-top: 10px;
  height: 200px;
}
.maxFlow {
  text-align: center;
  font-weight: 700;
  font-size: 14px;
}
</style>