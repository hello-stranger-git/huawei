<!--客户管理-->
<template>
  <div>
    <TopTitle title="客户管理" @onClickLeft="onClickLeft" />
客户管理
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
