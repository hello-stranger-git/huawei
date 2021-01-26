<!--单个部门分组-->
<template>
  <div class="departmentGroupItem">
    <div class="left">
      <img :src="leftIcon"  v-if="leftIcon"/>
    </div>
    <div :class="[borderBoolean?'borderBottom':'','right']">
      <span>{{ title }}</span>
      <img :src="rightIcon" v-if="rightIcon"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftIcon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    borderBoolean: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    console.log(this.borderBoolean)
  }
}
</script>

<style lang="less" scoped>
.departmentGroupItem{
  padding:14px;
  background-color: #fff;
  display: flex;
}
.left{
  img{
    width:30px;
    height:30px
  }
}
.right{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 4px;
  margin-left: 10px;
  img{
    vertical-align: middle;
    width:24px;
    height:24px
  }
}
.borderBottom{
  border-bottom:1px solid rgba(112, 112, 112, 0.3);
  padding-bottom: 18px;
}
</style>
