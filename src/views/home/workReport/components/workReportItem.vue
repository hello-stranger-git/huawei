<!--工作汇报每一项-->
<template>
  <div class="contain">
    <div
      class="item"
      v-for="(item, i) in data"
      :key="i"
      @click="changeRouter(item.name)"
    >
      <img :src="item.icon" />
      <div class="type">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {}
  },
  methods: {
    changeRouter(name) {
      if (name) {
        this.$router.push({ name })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  // padding-bottom: ;
  display: flex;
  flex-wrap: wrap;

  .item {
    position: relative;
    margin-left: 3.2%;
    margin-top: 12px;
    width: 29%;
    height: 109px;
    font-size: 14px;
    color: #141414;
    box-shadow: 0px 0px 6px rgba(20, 20, 20, 0.1);
    border-radius: 10px;
    img {
      position: absolute;
      top: 21px;
      left: 50%;
      width: 44px;
      height: 44px;
      transform: translateX(-50%);
    }
    .type {
      position: absolute;
      width: 100%;
      top: 71px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
  }
}
</style>
