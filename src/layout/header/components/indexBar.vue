<!--索引搜索-->
<template>
  <div>
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="1">归类1</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="2">归类2</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>

<style lang="scss" scoped></style>
