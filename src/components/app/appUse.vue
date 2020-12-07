<template>
  <div class="appUse">
    <div>
      <h3>{{ item.title }}</h3>
      <Project :datas="item.datas"></Project>
    </div>
  </div>
</template>
<script>
import Project from '@/components/app/appUses/project.vue'; //使用中单个小模块

export default {
  props: {
    item: Object,
  },
  components: {
    Project,
  },
};
</script>
<style lang="less" scoped></style>
