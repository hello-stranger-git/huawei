<!--任务管理-->
<template>
  <div class="taskManager">
    <!-- 头部区域 -->
    <TopTitle
      title="任务管理"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    >
      <img :src="addIcon" width="24px" height="24px" />
    </TopTitle>
    <!-- 任务区域 -->
    <div class="task" v-for="item in taskData" :key="item.id">
      <h3>{{ item.title }}</h3>
      <div>
        <BigIconItem
          v-for="(item1, i) in item.process"
          :key="i"
          :icon="item1.icon"
          :title="item1.text"
          :count="item1.count"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import BigIconItem from '@/components/bigIconItem'
export default {
  components: {
    TopTitle,
    BigIconItem
  },
  data() {
    return {
      addIcon: require('@/assets/images/home/workReport/addIcon.png'),
      // 任务数据
      taskData: [
        {
          id: 1,
          title: '我提交的',
          process: [
            {
              icon: require('@/assets/images/home/taskManager/noFinishIcon.png'),
              text: '未完成',
              count: 9
            },
            {
              icon: require('@/assets/images/home/taskManager/finishIcon.png'),
              text: '完成'
            }
          ]
        },
        {
          id: 2,
          title: '分配给我的',
          process: [
            {
              icon: require('@/assets/images/home/taskManager/noFinishIcon.png'),
              text: '未完成',
              count: 9
            },
            {
              icon: require('@/assets/images/home/taskManager/finishIcon.png'),
              text: '完成'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {}
  }
}
</script>
<style lang="less" scoped>
.taskManager {
  height: 100%;
  background: #fff;
}
.task {
  margin: 14px 12px 26px;
  h3 {
    font-size: 16px;
    color: #141414;
    margin-bottom: 16px;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
