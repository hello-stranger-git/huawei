<template>
  <div class="VeHistogram">
    <div id="main" class="flowBar" style="width: 100%"></div>
  </div>
</template>
<script>
export default {
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        // toolbox: {
        //   feature: {
        // dataView: { show: true, readOnly: false },
        // magicType: { show: true, type: ["line", "bar"] },
        // restore: { show: true },
        // saveAsImage: { show: true },
        //   },
        // },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: ["销售额", "客流人数"], //轴代表的数据label
          // formatter:function (name) {                 //用来格式化图例文本，支持字符串模板和回调函数两种形式。模板变量为图例名称 {name}
          //     return 'Legend ' + name;
          // },
          right: 70, //偏移
          top: 10,
          icon: "roundRect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          itemGap: 40, // 设置间距
        },
        xAxis: [
          {
            type: "category",
            data: ["今日", "昨日", "11/10", "11/11", "11/12", "11/13", "11/14"],
            axisPointer: {
              type: "shadow",
            },
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            splitLine: { show: false }, //去除网格分割线
            // axisLine: {
            //   //坐标线
            //   lineStyle: {
            //     type: "solid",
            //     color: "#69686A", //轴线的颜色
            //     width: "0", //坐标线的宽度
            //   },
            // },
          },
        ],

        yAxis: [
          {
            type: "value",
            // name: "客流人数",
            min: 0,
            max: 1500,
            interval: 500,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#818284",
                fontSize: "12",
              },
              margin: 4,
            },
            axisLine: {
              //线
              show: false,
            },
            axisTick: {
              //刻度
              show: false,
            },
            splitLine: { show: false }, //去掉Y轴分割线
          },
          {
            type: "value",
            name: "客单价(w)",
            nameTextStyle: {
              //设置坐标轴名字样式
              padding: [0, 0, 18, 0],
            },
            min: 0,
            max: 200,
            interval: 40,
            axisLabel: {
              // formatter: function (a) {//y轴label格式化，可以接受参数为y轴对象
              //         return a+"w";
              // },
              textStyle: {
                color: "#818284",
                fontSize: "14",
              },
            },
            axisLine: {
              //线
              show: false,
            },
            axisTick: {
              //刻度
              show: false,
            },
            splitLine: { show: false }, //去掉Y轴分割线
          },
        ],
        series: [
          {
            // stack:'1',
            name: "销售额",
            type: "bar",
            data: [1000, 1200, 1400, 1300, 1200, 1000, 1300],
            itemStyle: {
              normal: {
                color: "rgba(80,208,210,0.8)", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#505152", //值得颜色
                    // fontWeight:550
                  },
                  formatter: function (a) {
                    //设置label格式
                    return "￥" + a.data;
                  },
                },
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            barWidth: 20, //设置柱子宽度，单位为px
          },

          {
            // stack:'1',
            name: "均值",
            type: "bar",
            data: [500, 600, 700, 650, 600, 500, 650],
            itemStyle: {
              normal: {
                color: "rgba(43,43,44,0)", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#B82B43", //值得颜色
                  },
                },

                // borderColor: '#555',

                // barBorderRadius: [5, 5, 0, 0],
              },
            },
            barWidth: 25, //设置柱子宽度，单位为px
            // barGap: "-100%", //设置柱状距离
          },

          {
            // stack:'1',
            name: "客流人数",
            type: "bar",
            data: [300, 400, 500, 450, 400, 300, 500],
            itemStyle: {
              normal: {
                color: "rgba(43,43,44,0.3)", //设置柱子颜色
                label: {
                  show: false, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#B82B43", //值得颜色
                  },
                  formatter: function (a) {
                    //设置label格式
                    return a.data + "w";
                  },
                },
                // barBorderRadius: [5,5,0,0],//设置柱子的圆角弧度
              },
            },
            barWidth: 30, //设置柱子宽度，单位为px

            barGap: "-111%", //设置柱状距离
          },
        ],
      };
      myChart.setOption(option);
    },
  },

  mounted() {
    this.drawChart();
  },
};
</script>
<style scoped>
.VeHistogram {
  margin-top: 15px;
}
.flowBar {
  height: 214px;
}
/deep/.flowBar > div > canvas {
  height: 270px !important;
}
</style>