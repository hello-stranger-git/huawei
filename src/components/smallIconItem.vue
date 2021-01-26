<!--工作汇报每一项-->
<template>
  <div class="smallIconItem" @click="smallItemHandle">
    <img :src="icon" />
    <p>{{ title }}</p>
    <div v-if="count">{{ count }}</div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  methods: {
    smallItemHandle() {
      this.$emit('smallItemHandle')
    }
  }
}
</script>

<style lang="less" scoped>
.smallIconItem {
  position: relative;
  text-align: center;
  width: 29%;
  box-shadow: 0px 0px 6px rgba(20, 20, 20, 0.1);
  height: 109px;
  border-radius: 10px;
  img {
    margin-top: 20px;
    width: 44px;
    height: 44px;
  }
  p {
    margin-top: 3px;
    font-size: 14px;
    color: #141414;
  }
  div {
    position: absolute;
    right: 6px;
    top: 6px;
    font-size: 10px;
    color: #fff;
    background-color: #e30011;
    border-radius: 9px;
    padding: 2px 5px;
    border: 1px solid red;
  }
}
</style>
