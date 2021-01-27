<!--日报-->
<template>
  <div class="daily">
    <!-- 头部区域 -->
    <TopTitle :title="title" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <img :src="addIcon" width="24px" height="24px">
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
      data: [], // 数据
      title: '', // 标题
      from: '', // 来自那个路由跳转
      to: '', // 点击加号要跳转的路由
      addIcon: require('@/assets/images/home/workReport/addIcon.png')
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: this.from, params: { data: this.data } })
    },
    onClickRight() {
      console.log(this.data, this.title, this.from)
      this.$router.push({ name: this.to, params: { data: this.data, title: this.title, from: this.from, to: this.to } })
    },
    smallItemHandle(name) {
    }
  },
  mounted() {
    this.data = this.$route.params.data
    this.title = this.$route.params.title
    this.from = this.$route.params.from
    this.to = this.$route.params.to
    console.log(this.data, this.title, this.from)
  }
}
</script>

<style lang="less" scoped>
.daily{
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
