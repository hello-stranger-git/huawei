<!--客流走势-->
<template>
  <div class="indexModel">
    <el-row>
      <el-col :span="24">
        <IndexTitleModel
          title="今日客流走势"
          titleIcon="el-icon-date"
        ></IndexTitleModel>
      </el-col>
      <el-col :span="24" class="flowLine">
        <div id="FlowLine" style="width: 100%; height: 250px"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import IndexTitleModel from "./indexTitleModel.vue";
export default {
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("FlowLine"));
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
        legend: {
          data: ["当前", "昨日", "前天"],
          icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          itemGap: 40, // 设置间距
        },
        xAxis: [
          {
            type: "category",
            name: "时间",
            nameTextStyle: {
              //设置坐标轴名字样式
              padding: [-30, 0, 0, -40],
            },
            boundaryGap: false,
            data: [
              "8:00",
              "10:00",
              "12:00",
              "14:00",
              "16:00",
              "18:00",
              "20:00",
              "22:00",
              "",
            ],
            axisLine: {
              //线
              show: true,
              symbol: ["none", "arrow"],
              symbolSize: [5, 8],
              lineStyle: {
                //设置坐标轴线的颜色
                color: "rgb(147,147,149)",
              },
            },
            axisTick: {
              show: false, //不显示刻度线
            },
            axisLabel: {
              //设置很坐标label样式
              textStyle: {
                //设置文本样式
                color: "#3D3D3E",
                fontSize: "13",
              },
              padding: [0, 0, 0, 25], //设置文本离轴的padding
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "客流",
            nameTextStyle: {
              //设置坐标轴名字样式
              padding: [0, -40, -35, 0],
            },
            axisLine: {
              //线
              show: true,
              symbol: ["none", "arrow"], //设置箭头方向
              symbolSize: [5, 8], //设置箭头大小
              lineStyle: {
                //设置坐标轴线的颜色
                color: "rgb(147,147,149)",
              },
            },
            axisTick: {
              //刻度
              show: false,
            },

            axisLabel: {
              //设置很坐标label样式
              textStyle: {
                color: "#3D3D3E",
                fontSize: "13",
              },
            },
            splitLine: { show: false }, //去掉Y轴分割线
          },
        ],
        series: [
          {
            name: "昨日",
            type: "line",
            symbol: "none", //去掉线上的小圆点
            areaStyle: {
              //设置填充渐变色
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#7373D0",
                  },
                  {
                    offset: 1,
                    color: "#fff",
                  },
                ]),
              },
            },
            data: [50, 100, 50, 80, 106, 150, 50, 15],
            smooth: true, //设置线的平滑度

            itemStyle: {
              normal: {
                color: "rgba(104,104,205,0.8)", //设置覆盖颜色
                label: {
                  show: false, //显示值
                  // position: "top", //值在上方显示
                  textStyle: {
                    color: "#585859", //值得颜色
                    fontWeight: 400,
                  },
                },
              },
            },
          },

          {
            name: "前天",
            type: "line",
            symbol: "none", //去掉线上的小圆点
            // stack: "总量",
            areaStyle: {
              //设置渐变颜色
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#39DCD9",
                  },
                  {
                    offset: 1,
                    color: "#fff",
                  },
                ]),
              },
            },
            data: [25, 50, 75, 50, 120, 75, 25, 30],
            smooth: true,

            itemStyle: {
              normal: {
                color: "rgba(28,217,211,0.8)", //设置覆盖颜色
                label: {
                  show: false, //显示值
                  // position: "top", //值在上方显示
                  textStyle: {
                    color: "#585859", //值得颜色
                    fontWeight: 400,
                  },
                },
              },
            },
          },
          {
            name: "当前",
            symbol: "none", //去掉线上的小圆点
            type: "line",
            // stack: "总量",//堆叠
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#1A9DD5",
                  },
                  {
                    offset: 1,
                    color: "#fff",
                  },
                ]),
              },
            },
            data: [50, 100, 150, 100, 250],
            smooth: true,
            itemStyle: {
              normal: {
                color: "rgba(49,163,212,1)", //设置覆盖颜色
                label: {
                  show: false, //显示值
                  // position: "top", //值在上方显示
                  textStyle: {
                    color: "#585859", //值得颜色
                    fontWeight: 400,
                  },
                },
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawChart();
  },
  components: {
    IndexTitleModel,
  },
};
</script>
<style scoped>
.flowLine {
  margin-top: 10px;
  height: 200px;
}
</style>