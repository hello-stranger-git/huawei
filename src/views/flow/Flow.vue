<template>
  <div>
    <Menu></Menu>
    <div class="indexModel">
      <el-row>
        <el-tabs v-model="activeName"
                 type="card"
                 @tab-click="handleClick">
          <el-tab-pane name="first"
                       lazy>
            <span slot="label"
                  class="tabTitle">
              <i class="iconfont iconweibiaoti4"
                 style="background-color: #50a6ff;"></i>
              <span>当日进店</span>
            </span>
            <template v-if="tab=='first'">
              <div style="background-color:#fff">
                <DateSelect></DateSelect>
                <Trip></Trip>
              </div>
            </template>
          </el-tab-pane>
          <el-tab-pane style="background-color:#eee"
                       class="flowTab"
                       name="second"
                       lazy>
            <span slot="label"
                  class="tabTitle">
              <i class="iconfont iconjintian"
                 style="background-color: #B0EB9B;"></i>
              <span>今日客流走势</span>
            </span>
            <span class="indexModel passengerFlowSpan">活动:两周年庆全场95折</span>
            <div class="dateSelectDiv">
              <DateSelect></DateSelect>
              <PassengerFlowLine :flowLineId="nowFlowLineId"
                                 :series="nowLineSeries"
                                 :xAxis="nowLinexAxis"
                                 :yAxis="nowLineyAxis"
                                 :legend="nowLegend"
                                 :nowLine="true"
                                 max="最大客流11/20日,共760人">
                <div class="nowFlowWeather">
                  <span>11月16</span><span>多云</span>
                  <div class="temperature">
                    气温28<div>。</div>
                  </div>
                </div>
              </PassengerFlowLine>
            </div>

            <div class="PassengerFlowProgress">
              <PassengerFlowProgress time="8:00~9:00"
                                     peopleCount="14人"
                                     :man="10"
                                     :woman="4"
                                     :percentage="60"
                                     progressColor="#FF0101"></PassengerFlowProgress>
              <PassengerFlowProgress time="9:00~10:00"
                                     peopleCount="31人"
                                     :man="24"
                                     :woman="7"
                                     :percentage="95"
                                     progressColor="#179BF3"></PassengerFlowProgress>
              <PassengerFlowProgress time="10:00~11:00"
                                     peopleCount="27人"
                                     :man="12"
                                     :woman="15"
                                     :percentage="80"
                                     progressColor="#FFCD87"></PassengerFlowProgress>
              <PassengerFlowProgress time="11:00~12:00"
                                     peopleCount="7人"
                                     :man="0"
                                     :woman="7"
                                     :percentage="30"
                                     progressColor="#15D9D2"></PassengerFlowProgress>
              <PassengerFlowProgress time="12:00~13:00"
                                     peopleCount="19人"
                                     :man="8"
                                     :woman="10"
                                     :percentage="75"
                                     progressColor="#FFCD87"></PassengerFlowProgress>
            </div>
            <PassengerFlowLine :flowLineId="monthFlowLineId"
                               :series="monthLineSeries"
                               :xAxis="monthLinexAxis"
                               :yAxis="monthLineyAxis"
                               :legend="monthLenged"
                               title="30天客流走势"
                               max="最大客流11/1日,共600人"></PassengerFlowLine>
            <PassengerFlowLine :flowLineId="threeMonthFlowLineId"
                               :series="threeMonthLineSeries"
                               :xAxis="threeMonthLinexAxis"
                               :yAxis="threeMonthLineyAxis"
                               :legend="threeMonthLenged"
                               title="90天客流走势"
                               max="最大客流11/1日,共600人"></PassengerFlowLine>
            <PassengerFlowLine :flowLineId="yearMonthFlowLineId"
                               :series="yearMonthLineSeries"
                               :xAxis="yearMonthLinexAxis"
                               :yAxis="yearMonthLineyAxis"
                               :legend="yearMonthLenged"
                               title="一年客流走势"
                               max="最大客流四月,共600人"></PassengerFlowLine>
          </el-tab-pane>
          <el-tab-pane name="third"
                       lazy>
            <span slot="label"
                  class="tabTitle">
              <i class="iconfont iconkequn"
                 style="background-color: #FFCD41;"></i>
              <span>客群特征</span>
            </span>
            <div style="background-color:#fff;border-radius:0 0 8px 8px">
              <DateSelect></DateSelect>
              <Features title="客群分析"
                        :showBtnGroup="false"></Features>
            </div>
          </el-tab-pane>
          <el-tab-pane name="fourth"
                       lazy>
            <span slot="label"
                  class="tabTitle">
              <i class="iconfont iconkehuxiaoshou"
                 style="background-color: #EBEB9B;"></i>
              <span>客流与客单价</span>
            </span>
            <el-calendar>
              <template slot="dateCell"
                        slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
                  {{ data.day.split('-').slice(2).join('-') }}
                  <!-- {{ data.isSelected ? '✔️' : ''}} -->
                </p>
                <!-- v-if="data.day.split('-').slice(2).join('-')!==new Date().getDate()+''" -->
                <p class="everyPeople">568人</p>
              </template>
            </el-calendar>
            <Price class="price"></Price>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
    <div class="bottomMargin"></div>
  </div>
</template>

<script>
import Trip from '@/components/Flow/trip.vue'//我的行程
import Features from '@/components/home/Features.vue'//客群分析
import Menu from "@/components/home/Menu.vue"; //菜单栏
import DateSelect from "@/components/dateSelect.vue"//日期选项
import PassengerFlowLine from "@/components/Flow/passengerFlow/trendLine.vue"//客流走势折线图
import PassengerFlowProgress from "@/components/Flow/passengerFlow/peopleProgress.vue"//客流走势progress
import Price from '@/components/home/Price.vue'//客流与销售分析
export default {
  data () {
    return {
      activeName: "first",
      tab: 'first',
      nowFlowLineId: "nowFlowLine",//当前图的id值
      nowLegend: {
        data: ["当前", "昨日", "前天"],
        icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 40, // 设置间距
      },//当前客流标题
      nowLineSeries: [
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
      ],//当前客流数据
      nowLinexAxis: [
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
      ],//当前客流横坐标
      nowLineyAxis: [
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
      ],//当前客流纵坐标



      monthFlowLineId: "monthFlowLine",//一个月图的id值
      monthLenged: {
        data: [],
        icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 40, // 设置间距
      },//30天客流标题
      monthLinexAxis: [
        {
          type: "category",
          name: "时间",
          nameTextStyle: {
            //设置坐标轴名字样式
            padding: [-30, 0, 0, -40],
          },
          boundaryGap: false,
          data: [
            "11/1",
            "11/5",
            "11/10",
            "11/15",
            "11/20",
            "11/25",
            "11/30",
            ""
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
      ],//30天客流横坐标
      monthLineyAxis: [
        {
          type: "value",
          name: "客流",
          nameTextStyle: {
            //设置坐标轴名字样式
            padding: [0, -30, -25, 0],
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
          data: ['0'],
          axisLabel: {
            // show: false,//是否显示数值
            //设置纵坐标label样式
            textStyle: {
              color: "#3D3D3E",
              fontSize: "13",
            },
          },
          splitLine: { show: false }, //去掉Y轴分割线
        },
      ],//30天客流纵坐标
      monthLineSeries: [
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
          data: [300, 700, 300, 600, 760, 300, 300],
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
        }
      ],//30天客流数据




      threeMonthFlowLineId: "threeMonthFlowLine",//90天图的id值
      threeMonthLenged: {
        data: [],
        icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 40, // 设置间距
      },//90天客流标题
      threeMonthLinexAxis: [
        {
          type: "category",
          name: "时间",
          nameTextStyle: {
            //设置坐标轴名字样式
            padding: [-30, 0, 0, -40],
          },
          boundaryGap: false,
          data: [
            "9/1",
            "9/15",
            "9/30",
            "10/1",
            "10/15",
            "10/31",
            "11/1",
            "11/15",
            "11/30",
            ""
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
      ],//90天客流横坐标
      threeMonthLineyAxis: [
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
          data: ['0'],
          axisLabel: {
            // show: false,
            //设置纵坐标label样式
            textStyle: {
              color: "#3D3D3E",
              fontSize: "13",
            },
          },
          splitLine: { show: false }, //去掉Y轴分割线
        },
      ],//90天客流纵坐标
      threeMonthLineSeries: [
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
          data: [300, 200, 300, 600, 500, 400, 300, 600, 400],
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
        }
      ],//90天客流数据




      yearMonthFlowLineId: "yearMonthFlowLine",//一年图的id值
      yearMonthLenged: {
        data: [],
        icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 40, // 设置间距
      },//一年客流标题
      yearMonthLinexAxis: [
        {
          type: "category",
          name: "时间",
          nameTextStyle: {
            //设置坐标轴名字样式
            padding: [-30, 0, 0, -40],
          },
          boundaryGap: false,
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
            ""
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
      ],//一年客流横坐标
      yearMonthLineyAxis: [
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
          data: ['0'],
          axisLabel: {
            // show: false,
            //设置纵坐标label样式
            textStyle: {
              color: "#3D3D3E",
              fontSize: "13",
            },
          },
          splitLine: { show: false }, //去掉Y轴分割线
        },
      ],//一年客流纵坐标
      yearMonthLineSeries: [
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
          data: [300, 200, 300, 600, 500, 400, 300, 600, 400, 300, 200, 100],
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
        }
      ],//一年客流数据
    };
  },
  methods: {
    //切换标签触发
    handleClick (data, event) {
      this.tab = data.name;//控制每次进入我的行程tab重新渲染
      console.log(data, event, "切换table标签");
    },
  },
  components: {
    Trip,
    Menu,
    DateSelect,
    Features,
    PassengerFlowLine,
    PassengerFlowProgress,
    Price
  },
};
</script>

<style scoped>
.el-tab-pane .indexModel {
  padding-bottom: 10px;
}
/deep/.el-tabs__nav {
  width: 100%;
  height: 70px;
}
/deep/.el-tabs__item {
  width: 25%;
  height: 100%;
  padding: 0;
  text-align: center;
  border: 1px solid #50a6ff;
  border-collapse: unset;
  border-radius: 8px 8px 0 0;
  background-color: #c9c9c9;
}
/deep/.el-tabs__item:last-child,
/deep/.el-tabs__item:nth-child(2) {
  padding: 0 !important;
}
/deep/.el-tabs--card > .el-tabs__header .el-tabs__item:first-child {
  border-left: 1px solid #50a6ff;
}
/deep/.el-tabs__item.is-active {
  background-color: #fff;
  color: #000;
}
.indexModel {
  padding: 0;
  padding-bottom: 0;
}
.tabTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tabTitle > i {
  color: #d81e06;
  width: 50%;
  margin-top: 8px;
  border-radius: 15px;
}
.tabTitle > span {
  margin-top: -10px;
}

.el-tab-pane .indexModel {
  margin: 10px 16px;
}
.is-selected {
  color: #1989fa;
}
/deep/.el-calendar {
  background-color: #fff;
  padding-bottom: 10px;
  border-radius: 0 0 8px 8px;
}
/deep/.el-calendar__body {
  padding: 0 16px;
}
/deep/.el-calendar-table td {
  border: 0;
}
/deep/.el-calendar__header {
  border: 0;
}
/deep/.el-calendar-table .el-calendar-day {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  padding: 0;
  height: 50px;
}
/deep/.el-calendar-table tr:first-child td,
/deep/.el-calendar-table tr td:first-child {
  border: 0;
  border-bottom: 1px solid#bfb7b7;
}
.everyPeople {
  margin: 0 6px;
  padding: 0;
  font-size: 12px;
  background-color: rgb(18 174 185);
  color: #fff;
}
/deep/.el-calendar-table td {
  border-bottom: 1px solid #bfb7b7;
}
/deep/.is-today > .el-calendar-day {
  display: flex;
  align-items: center;
}
/deep/.is-today > .el-calendar-day > p:first-child {
  color: #fff;
  border-radius: 50%;
  background-color: blue;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
}
.indexModel.passengerFlowSpan {
  color: #ffda72;
  margin: 0;
  display: block;
  width: 100%;
  padding-left: 20px;
  padding-bottom: 10px;
  border-radius: 0;
}

.dateSelectDiv {
  width: 100%;
  border-radius: 0 0 8px 8px;
}
.passengerFlowSpan,
.dateSelectDiv,
.PassengerFlowProgress {
  background-color: #fff;
}
.PassengerFlowProgress {
  border-radius: 8px;
  padding-top: 10px;
}

/* 今日客流走势 */
.passengerFlowMargin {
  height: 10px;
  background-color: #eeeeee;
}
.nowFlowWeather {
  position: absolute;
  text-align: center;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
}
.nowFlowWeather span:first-child {
  margin: 0;
}
.nowFlowWeather span {
  margin-left: 6px;
}
.nowFlowWeather .temperature {
  position: relative;
  display: inline-block;
}
.nowFlowWeather .temperature div {
  display: inline-block;
  position: absolute;
  top: -10px;
}
.trendLine {
  /* border-bottom: 10px solid #eeeeee; */
  margin-bottom: 15px;
}
.peopleProgress {
  margin: 15px 0px;
}
/deep/.el-tabs__content {
  background-color: #eeeeee;
}

.indexModel.price {
  margin: 10px 0px;
  padding: 10px 15px;
}
</style>