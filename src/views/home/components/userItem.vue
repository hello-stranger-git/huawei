<template>
  <div class="item">
    <div class="avatar">
      <img :src="data.avatar" alt="" />
    </div>
    <div class="value">
      <div class="report">{{ data.title }}</div>
      <div class="time">{{ data.time }}</div>
      <div class="unread">{{ data.number }}条未读消息</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          avatar: '',
          title: '',
          time: '',
          number: 10
        }
      }
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  height: 45px;
  margin: 25px 16px 0;
  color: #343434;
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .value {
    flex: 1;
    position: relative;
    margin-left: 12px;
    .report {
      font-weight: 700;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
    }
    .time {
      margin-top: 6px;
      color: #b7b7b7;
      font-size: 12px;
    }
    .unread {
      position: absolute;
      top: 3px;
      right: 0;
      color: #b7b7b7;
      font-size: 12px;
    }
  }
}
</style>
