<!--考勤-->
<template>
  <div class="checkWork">
    <CircularChart id="checkWork" height="100%" width="80%" :option="circularChartData"/>
  </div>
</template>

<script>
import CircularChart from '@/components/circularChart'
export default {
  data() {
    return {
      circularChartData: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' }
            ]
          }
        ]
      }
    }
  },
  components: {
    CircularChart
  }
}
</script>

<style lang="less" scoped>
.checkWork{
  height: 182px;
  background: #FFFFFF;
  border-radius: 10px;
  margin: 12px 12px 0 12px;
}
</style>
