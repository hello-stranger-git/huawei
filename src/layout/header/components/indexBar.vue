<!--索引搜索-->
<template>
  <div>
    <van-search
      v-model="searchStore"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="1">A</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="2">B</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="3">C</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="4">D</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="5">E</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="6">F</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="7">G</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="8">H</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="9">I</van-index-anchor>
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-cell title="文本" icon="location-o" />
      <van-index-anchor index="10">J</van-index-anchor>
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
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      searchStore: ''
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-index-bar__sidebar {
  top: 75%;
}
</style>
