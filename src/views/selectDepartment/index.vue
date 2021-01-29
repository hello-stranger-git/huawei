<!--选择部门-->
<template>
  <div class="selectDepartment">
    <!-- 头部区域 -->
    <TopTitle
      title="选择人员"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    >
      <img :src="search" width="28px" height="28px" />
    </TopTitle>
    <p>{{ company }}</p>
    <router-view />
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
      search: require('@/assets/images/search.png'),
      company: '某某有限公司' // 公司名称
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      console.log('搜索')
    }
  }
}
</script>

<style lang="less" scoped>
.selectDepartment {
  height: 100%;
  background: #fff;
  & > p {
    font-size: 16px;
    color: #959595;
    line-height: 49px;
    border-bottom: 1px solid rgba(112, 112, 112, 0.2);
    padding: 0 12px;
  }
}
</style>
