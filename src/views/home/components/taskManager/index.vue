<!--任务管理-->
<template>
  <div>
    <Module
      height="291px"
      :icon="workReportIcon"
      title="任务管理"
      @now="now"
      @more="more"
    >
      <User-item :data="userData"></User-item>
      <div class="cells">
        <div class="cell">类型：{{ userData.task.type }}</div>
        <div class="cell">任务内容：{{ userData.task.content }}</div>
        <div class="cell">待完成时间：{{ userData.task.date }}</div>
        <div class="cell process">
          <van-row type="flex">
            <van-col
              span="8"
              :class="userData.task.select === 1 ? 'select selectOne' : ''"
              style="background-color:#4A92FF;"
              >开始</van-col
            >
            <van-col
              span="8"
              :class="userData.task.select === 2 ? 'select selectTwo' : ''"
              style="background-color:#FF6E6E;"
              >进行中</van-col
            >
            <van-col
              span="8"
              :class="userData.task.select === 3 ? 'select selectThree' : ''"
              style="background-color:#56BE9B;"
              >结束</van-col
            >
          </van-row>
          <div v-if="userData.task.select === 3" class="cell_right">
            <img :src="finshIcon" />
            <span>完成</span>
          </div>
        </div>
      </div>
    </Module>
  </div>
</template>

<script>
import Module from '../module'
import UserItem from '../userItem'

export default {
  data() {
    return {
      workReportIcon: require('@/assets/images/home/taskManager/taskManager.png'),
      finshIcon: require('@/assets/images/home/taskManager/finsh.png'),
      userData: {
        avatar: require('@/assets/images/home/taskManager/user.png'),
        title: '刘德华',
        time: new Date().toLocaleString(),
        number: 98,
        task: {
          type: '普通任务',
          content: '续费阿里服务器',
          date: '2021-01-22',
          select: 3
        }
      }
    }
  },
  components: {
    Module,
    UserItem
  },
  methods: {
    now() {
      console.log('任务管理当前')
    },
    more() {
      console.log('任务管理更多')
    }
  }
}
</script>

<style lang="less" scoped>
.cells {
  padding: 24px 16px 0;
  .cell {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #343434;
    margin-top: 16px;
    &:first-child {
      margin-top: 0;
    }
  }
  // 进度条样式
  .process {
    display: flex;
    height: 26px;
    justify-content: space-between;
  }
  .van-row {
    width: 79%;
    font-size: 10px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    border-radius: 9px;
  }
  .van-col {
    position: relative;
    &:last-child {
      border-radius: 0px 9px 9px 0px;
    }
    &:first-child {
      border-radius: 9px 0px 0px 9px;
    }
  }
  .cell_right {
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    color: #56be9b;
    img {
      vertical-align: middle;
      margin-right: 3px;
      width: 15px;
      height: 15px;
    }
    span {
      vertical-align: middle;
    }
  }
}
// 进度下标样式
.select::after {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid red;
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}
.selectOne::after {
  border-bottom: 5px solid #4a92ff;
}
.selectTwo::after {
  border-bottom: 5px solid #ff6e6e;
}
.selectThree::after {
  border-bottom: 5px solid #56be9b;
}
</style>
