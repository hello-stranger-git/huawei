<!--工作日报-->
<template>
  <div class="contain">
    <TopTitle
      :title="data.title"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    >
      <img :src="shareIcon" width="24px" height="24px" />
    </TopTitle>
    <!-- 头像 -->
    <div class="item">
      <div class="avatar">
        <img :src="data.avatar" alt="" @click="handleUser(data)" />
      </div>
      <div class="value">
        <div class="report">{{ data.title }}</div>
        <div class="time">{{ data.time }}</div>
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <div class="title">工作内容</div>
      <div class="text">
        XXXXXXXXXXXXXXXXXXXXXX
      </div>
    </div>
    <div class="content">
      <div class="title">工作计划</div>
      <div class="text">
        XXXXXXXXXXXXXXXXXXXXXX
      </div>
    </div>
    <div class="content">
      <div class="title">问题</div>
      <div class="text">
        XXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXX
      </div>
    </div>
    <div class="content">
      <div class="title">照片</div>
      <div class="text">
        无照片
      </div>
    </div>
    <div class="content">
      <div class="title">报告人</div>
      <div class="text flex">
        <div class="person" v-for="item in reportPersonData" :key="item.id">
          <img :src="item.user" />
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">抄送人</div>
      <div class="text flex">
        <div class="person"  v-for="item in ccToData" :key="item.id">
          <img :src="item.user" />
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
export default {
  data() {
    return {
      shareIcon: require('@/assets/images/home/workDaily/share.png'),
      // 报告人
      reportPersonData: [{
        id: 1,
        user: require('@/assets/images/home/workDaily/userIcon.png'),
        name: '张学友'
      }],
      // 抄送人
      ccToData: [{
        id: 1,
        user: require('@/assets/images/home/workDaily/userIcon.png'),
        name: '张学友'
      }],
      data: {}
    }
  },
  mounted() {
    this.data = this.$route.params.data
  },
  methods: {
    // 点击左边按钮
    onClickLeft() {
      this.$router.go(-1)
    },

    // 点击右边按钮
    onClickRight() {}
  },
  components: {
    TopTitle
  }
}
</script>

<style lang="less" scoped>
.contain {
  background-color: #eee;
  padding-bottom: 43px;
}
.item {
  display: flex;
  height: 45px;
  padding: 25px 12px 20px;
  color: #343434;
  background-color: #fff;
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
  }
}
.content {
  margin: 16px 12px 0;
  .title {
    font-size: 16px;
    color: #000;
    font-weight: 700;
  }
  .text {
    margin-top: 8px;
    padding: 12px;
    background-color: #fff;
    color: #666;
    min-height: 20px;
    border-radius: 10px;
    overflow: hidden;
    white-space: normal;
    word-break: break-all;
    .person {
      width: 52px;
      height: 73px;
      text-align: center;
      font-size: 12px;
      color: #141414;
      padding: 9px;
      img {
        width: 52px;
        height: 52px;
      }
      .name {
        text-align: center;
      }
    }
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    padding: 0;
  }
}
</style>
