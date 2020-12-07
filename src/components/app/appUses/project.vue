<template>
  <div class="project">
    <dl v-for="(item, i) of datas" :key="i">
      <dt>
        <i :class="`iconfont  ${item.icon}`" />
      </dt>
      <dd>{{ item.name }}</dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    datas: Array,
  },
};
</script>
<style lang="less" scoped>
.project {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.project > dl {
  text-align: center;
  border-radius: 10px;
  padding: 5px 0;
  width: 172px;
  background-color: #fff;
}
.project > dl > dd {
  margin: 0;
  font-size: 14px;
  margin-top: 5px;
}

// 字体图标样式设置
.icongongdan,
.iconchaxun,
.icongongyingshangdailishang,
.iconEmail,
.icongonggao,
.iconkequn,
.iconziyuan {
  font-size: 40px;
}
.icongongdan {
  color: #69b2ae;
}
.iconchaxun {
  color: #2574b2;
}
.icongongyingshangdailishang {
  color: #dc1874;
}
.iconEmail {
  color: #19f21e;
}
.icongonggao {
  color: #3b88b3;
}
.iconkequn {
  color: #fb7e01;
}
.iconziyuan {
  color: #a44652;
}
</style>
