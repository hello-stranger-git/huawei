<!--工作汇报-->
<template>
  <div>
    <TopTitle title="工作汇报" @onClickLeft="onClickLeft"/>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
export default {
  components: {
    TopTitle
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
