<!--考勤-->
<template>
  <div class="checkWork">
    <div class="checkWork_top">
      <div class="top_left">
        <img :src="checkWorkIcon" />
        <span>考勤</span>
      </div>
      <div class="top_right">
        <span
          @click="select('Afternoon')"
          :class="Frequency === 'Afternoon' ? 'select' : ''"
          >午班</span
        >
        <span
          @click="select('night')"
          :class="Frequency === 'night' ? 'select' : ''"
          >晚班</span
        >
      </div>
    </div>
    <div class="annular">
      <CircularChart
        id="annular_checkWork"
        height="100%"
        width="100%"
        :option="circularChartData"
      />
      <div class="total">
        <span>{{ theSum }}</span>
        <p>总人数</p>
      </div>
      <div class="legend">
        <p v-for="(item, i) in circularChartData.series[0].data" :key="i">
          <i :style="` background-color: ${item.itemStyle.color};`" />
          <span>{{ item.name }}</span>
          <span>{{ item.value }}</span>
          人
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CircularChart from '@/components/circularChart'
export default {
  components: {
    CircularChart
  },
  data() {
    return {
      // 总人数
      theSum: 0,
      Frequency: 'Afternoon',
      checkWorkIcon: require('@/assets/images/home/checkWork/checkWork.png'),

      circularChartData: {
        tooltip: {
          trigger: 'item'
        },
        grid: {
          // 绘图区域大小设置
          left: '1',
          right: '2',
          top: '3',
          bottom: '3',
          show: false
        },
        series: [
          {
            name: '考勤',
            type: 'pie',
            radius: ['70%', '100%'],
            center: ['50', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'left'
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 28,
                name: '成功',
                itemStyle: { color: '#F8C498' }
              },
              {
                value: 9,
                name: '迟到',
                itemStyle: { color: '#FF6E6E' }
              },
              {
                value: 18,
                name: '缺卡',

                itemStyle: { color: '#4A92FF' }
              },
              {
                value: 3,
                name: '早退',

                itemStyle: { color: '#56BE9B' }
              }
            ]
          }
        ]
      }
    }
  },
  created() {
    this.sum()
  },
  methods: {
    // 总人数
    sum() {
      const arr = this.circularChartData.series[0].data
      for (var value of arr) {
        this.theSum += value.value
      }
    },
    select(fr) {
      this.Frequency = fr
      console.log(111)
    }
  }
}
</script>

<style lang="less" scoped>
.checkWork {
  height: 182px;
  background: #ffffff;
  border-radius: 10px;
  margin: 12px 12px 0 12px;
  padding: 16px;
}
.checkWork_top {
  color: #343434;
  .top_left {
    font-weight: bold;
    font-size: 18px;
    img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }
    span {
      line-height: 26px;
      margin-left: 6px;
      vertical-align: middle;
    }
  }
  .top_right {
    span {
      font-size: 16px;
      margin-left: 28px;
      position: relative;
    }
    color: rgba(0, 0, 0, 0.4);
  }
  display: flex;
  justify-content: space-between;
  align-content: center;
}
// 环状图
.annular {
  margin: 26px 0 0 42px;
  position: relative;
  width: 223px;
  height: 94px;
  .total {
    color: #343434;
    text-align: center;
    position: absolute;
    top: 26px;
    left: 31px;
    span {
      font-size: 18px;
      font-weight: bold;
      color: #343434;
    }
    p {
      font-size: 12px;
    }
  }
  .legend {
    position: absolute;
    top: 5px;
    right: 8px;
    p {
      font-size: 12px;
      color: #343434;
      margin-bottom: 7px;
    }
    i {
      height: 10px;
      width: 10px;
      display: inline-block;
      border-radius: 50%;
    }
    span {
      margin-left: 12px;
    }
  }
}
.select {
  font-weight: bold;
  color: #e60012;
  &::after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 2px;
    background: #e60012;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
