<!--日报-->
<template>
  <div class="daily">
    <!-- 头部区域 -->
    <TopTitle
      :title="title"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    >
      <img :src="addIcon" width="24px" height="24px" />
    </TopTitle>
    <!-- 内容区域 -->
    <div class="content">
      <SmallIconItem
        v-for="(item, i) in data"
        :key="i"
        :title="item.title"
        :icon="item.icon"
        @smallItemHandle="smallItemHandle(item.name)"
      />
    </div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import SmallIconItem from '@/components/smallIconItem'
export default {
  components: {
    TopTitle,
    SmallIconItem
  },
  data() {
    return {
      title: '', // 标题
      from: '', // 来自那个路由跳转
      sonName: [],
      to: '', // 点击加号要跳转的路由
      addIcon: require('@/assets/images/home/workReport/addIcon.png'),
      data: [
        {
          id: 1,
          icon: require('@/assets/images/home/workReport/mySubmitIcon.png'),
          title: '我提交的',
          name: ''
        },
        {
          id: 2,
          icon: require('@/assets/images/home/workReport/reportToMeIcon.png'),
          title: '报告给我的',
          name: ''
        },
        {
          id: 3,
          icon: require('@/assets/images/home/workReport/ccToMeIcon.png'),
          title: '抄送我的',
          name: ''
        }
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: this.from })
    },
    onClickRight() {
      console.log(this.sonName, this.title, this.from)
      this.$router.push({
        name: this.to,
        params: {
          sonName: this.sonName,
          title: this.title,
          from: this.from,
          to: this.to
        }
      })
    },
    smallItemHandle(name) {}
  },
  mounted() {
    this.sonName = this.$route.params.sonName
    this.title = this.$route.params.title
    this.from = this.$route.params.from
    this.to = this.$route.params.to
    console.log(this.data, this.title, this.from)

    this.sonName.forEach(item => {
      this.data.forEach(item1 => {
        if (item.id === item1.id) {
          item1.name = item.name
        }
      })
    })
  }
}
</script>

<style lang="less" scoped>
.daily {
  background-color: #fff;
  min-height: 100%;
}
// 内容区域
.content {
  display: flex;
  flex-wrap: wrap;
  .smallIconItem {
    margin-left: 3.2%;
    margin-top: 12px;
  }
}
</style>
