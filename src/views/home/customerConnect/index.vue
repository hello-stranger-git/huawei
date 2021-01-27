<!--客户-->
<template>
  <div>
    <TopTitle title="客户"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight">
      <img :src="addIcon" width="24px" height="24px" />
    </TopTitle>
    客户
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
      addIcon: require('@/assets/images/home/workReport/addIcon.png'),
      title: '', // 标题
      from: '', // 来自那个路由跳转
      to: '' // 点击加号要跳转的路由
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: this.from })
    },
    onClickRight() {
      this.$router.push({
        name: this.to,
        params: {
          title: this.title,
          from: this.from,
          to: this.to
        }
      })
    }
  },

  mounted() {
    this.title = this.$route.params.title
    this.from = this.$route.params.from
    this.to = this.$route.params.to
  }
}
</script>

<style lang="scss" scoped>

</style>
