<template>
  <div class="TitleModel">
    <i :class="[titleIcon, 'flowTitleI']"></i>
    <span class="flowTitleS">{{ title }}</span>
    <template v-if="add == 'features'">
      <span class="features">（今日）</span>
    </template>
  </div>
</template>
<script>
export default {
  props: ["title", "titleIcon", "add"],
};
</script>
<style scoped>
.TitleModel {
  font-size: 18px;
  margin-top: 4px;
}
.videoTitle {
  display: flex;
  align-items: center;
}
.flowTitleI {
  color: #d04e50;
  vertical-align: auto;
}
.flowTitleS {
  font-weight: 600;
  margin-left: 10px;
}
.features {
  font-size: 16px;
}
</style>