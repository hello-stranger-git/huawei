<template>
  <div class="everyCheck">
    <i :class="[active?'active':'','iconfont','iconxuanzhong']"
       @click="togActive"></i>
    <span>{{ context }}</span>
  </div>
</template>

<script>
export default {
  props: ["context"],
  data () {
    return {
      active: false
    }
  },
  methods: {
    togActive () {
      this.active = !this.active
    }
  }
}
</script>

<style scoped>
.everyCheck {
  display: flex;
}
.everyCheck span {
  font-size: 14px;
}
.iconxuanzhong {
  font-size: 26px;
  color: #dbdbdb;
  margin-right: 5px;
}
.active {
  color: #5eacff;
}
</style>