<!--日报详情-->
<template>
  <div>
    <!-- 头部区域 -->
    <TopTitle
      title="日报"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    >
      <span>提交</span>
    </TopTitle>
    日报详情
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      sonName: [],
      from: '',
      title: '',
      to: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: 'InsideManager',
        params: {
          sonName: this.sonName,
          title: this.title,
          from: this.from,
          to: this.to
        }
      })
    },
    onClickRight() {
      console.log('点击提交')
    }
  },
  mounted() {
    this.sonName = this.$route.params.sonName
    this.from = this.$route.params.from
    this.title = this.$route.params.title
    this.to = this.$route.params.to
    console.log(this.sonName, this.title, this.from)
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar__right {
  font-size: 14px;
  font-weight: 400;
  color: #343434;
}
</style>
