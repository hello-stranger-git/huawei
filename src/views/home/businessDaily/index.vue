<!--营业日报-->
<template>
  <div>
    <!-- 头部区域 -->
    <TopTitle title="营业日报" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <span>保存</span>
    </TopTitle>营业日报
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

<style lang="scss" scoped>

</style>
