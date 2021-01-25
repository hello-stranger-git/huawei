<!--用户信息接收界面-->
<template>
  <div class="news">
    <!-- 头部区域 -->
    <van-nav-bar
      title="消息"
      left-arrow
      @click-left="onClickLeft"
      right-text="全部已读"
      @click-right="onClickRight"
    />
    <!-- 消息区域 -->
    <div class="newsBody">
      <!-- <div v-for="(item, i) of newsData" :key="i" @click="getMessage(item, i)">
        <van-cell :title="item.text" :label="item.content">
          <template #icon>
            <p v-if="!item.read"></p>
            <img :src="item.icon" />
            <span class="itemTime">{{ item.time }}</span>
          </template>
        </van-cell>
      </div> -->
      <div class="cell">
        <!-- <div class="point"></div> -->
      </div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <!-- <div class="block" /> -->
        <div class="imgDiv">
          <img :src="cha" width="14px" height="14px" @click="close" />
        </div>
        <div class="message">
          <van-col span="12">
            <img :src="userMessage.icon" style="border-radius:50%" />
          </van-col>
          <van-col span="12" class="userMessage">
            <p>姓名：<span>张鹏</span></p>
            <p>部门：<span>技术部</span></p>
            <p>考勤时间：<span>08:52</span></p>
            <p style="color:#E60012">考勤状态：<span>考勤成功</span></p>
          </van-col>
        </div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
// import { getList, setRead } from '@/api/message'
export default {
  data() {
    return {
      cha: require('@/assets/images/home/userMessage/user.png'),
      // 消息数据
      newsData: [
        {
          text: '抄送消息',
          content:
            '您有抄送消息：门店公司01已完成点检的整改/申诉，等待审核，请知悉。',
          time: new Date().toLocaleString(),
          icon: require('@/assets/images/home/userMessage/horn.png'),
          read: true
        },
        {
          text: '抄送消息',
          content:
            '您有抄送消息：门店公司01已完成点检的整改/申111诉，等待审核，请知悉。',
          time: new Date().toLocaleString(),
          icon: require('@/assets/images/home/userMessage/horn.png'),
          read: false
        }
      ],
      userMessage: {
        icon: require('@/assets/images/home/userMessage/user.png')
      },
      show: true,
      loading: false,
      finished: false,
      error: false,
      start: 0,
      count: 10
    }
  },
  mounted() {
    // 给滚动条注册监听事件
    window.addEventListener('scroll', this.Scrollbottom, true)
  },
  destroyed() {
    // 销毁scroll事件
    window.removeEventListener('scroll', this.Scrollbottom, true)
  },
  created() {
    this.onLoad(0)
  },
  methods: {
    Scrollbottom() {
      // 监听页面滚动到底部
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.documentElement.scrollHeight
      if (scrollTop + clientHeight >= scrollHeight) {
        setTimeout(() => {
          this.onLoad(this.start) // 每隔2秒加载数据，防止重复刷新
        }, 500)
      }
    },
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      // setRead('all')
      //   .then(res => {
      //     // 全部已读
      console.log('全部已读')
      //     for (let i = 0; i < this.newsData.length; i++) {
      //       this.newsData[i].read = true
      //     }
      //     // location.reload() // 页面刷新
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    },
    getMessage(data, i) {
      // 信息详情
      console.log('点击获取详情')
      // setRead(data.id)
      //   .then(res => {
      //     // 单条已读
      //     this.newsData[i].read = true
      //     // location.reload() // 页面刷新
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    },
    onLoad(starNum) {
      console.log('初始化数据')
      // const start = starNum !== undefined ? starNum : this.start
      // if (start === 0) {
      //   this.arr = []
      //   this.finished = false
      //   this.start = 0
      // }
      // if (start < this.count) {
      //   getList(start)
      //     .then(res => {
      //       if (res.data.success) {
      //         const obj = res.data.obj
      //         const list = obj.entityList
      //         for (const item of list) {
      //           var read
      //           if (item.isRead === 0) {
      //             read = false
      //           } else {
      //             read = true
      //           }
      //           this.newsData.push({
      //             id: item.id,
      //             icon: require('@/assets/icon/home/news/xiaoxi.png'),
      //             text: item.title,
      //             content: item.content,
      //             time: item.messageTime,
      //             read: read
      //           })
      //         }
      //         this.count = obj.totalRecords
      //         this.start = obj.pageNum * obj.pageSize
      //         this.loading = false
      //         if (obj.pageNum === obj.totalRecords) {
      //           this.finished = true
      //         }
      //       } else {
      //         this.loading = false
      //         this.finished = true
      //         this.newsData = []
      //       }
      //     })
      //     .catch(err => {
      //       this.error = true
      //       this.loading = false
      //       console.log(err.response.data.message)
      //     })
      // }
    },
    close() {
      this.show = false
    }
  }
}
</script>
<style lang="less" scoped>
.news {
  // border: 1px solid red;
  height: 100%;
  background: #fff;
}
// 头部样式
/deep/.van-nav-bar {
  padding-top: 11px;
  .van-nav-bar__content {
    height: auto;
    line-height: 25px;
  }
  .van-nav-bar__left {
    .van-icon {
      font-size: 23px;
      color: #141414;
    }
  }
  .van-nav-bar__title {
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }
  .van-nav-bar__right {
    .van-nav-bar__text {
      color: #000000;
      font-size: 14px;
    }
  }
}
.van-hairline--bottom::after {
  border: 0;
}
// 消息区域样式
.newsBody {
  padding: 20px 0 16px;
  .van-cell {
    line-height: 40px;
    padding: 12px 12px 12px 18px;
    & > p {
      width: 0;
      height: 0;
      border: 4px solid #4a92ff;
      border-radius: 50%;
      position: absolute;
      top: 32px;
      transform: translate(-50%, -50%);
    }
    & > img {
      width: 40px;
      height: 40px;
      margin-left: 16px;
    }
    .itemTime {
      position: absolute;
      top: 12px;
      right: 12px;
      font-size: 12px;
    }
    .van-cell__title {
      font-size: 12px;
      flex: 1;
      padding-left: 16px;
    }
    .van-cell__value {
      font-size: 10px;
    }
    &::after {
      margin-left: 53px;
    }
  }
  .cell {
    display: flex;
    height: 52px;
    background-color: #4a92ff;
    .point {
      width: 8px;
      height: 8px;
      margin-top: 20px;
      border-radius: 50%;
      background-color: red;
    }
  }
}
//遮罩层
.van-overlay {
  .wrapper {
    background-color: #fff;
    position: absolute;
    top: 50%;
    height: 204px;
    width: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
  .imgDiv {
    position: absolute;
    top: 13px;
    right: 15px;
  }
  .message {
    margin-top: 50px;
    text-align: center;
    .userMessage {
      margin-top: 6px;
      p {
        font-size: 12px;
        font-weight: 400;
        padding-left: 15px;
        color: #141414;
        margin-bottom: 14px;
        text-align: left;
        span {
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
