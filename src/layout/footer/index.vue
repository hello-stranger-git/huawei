<template>
  <div class="footer">
      <van-tabbar v-model="active" active-color="#E60012" inactive-color="#343434">
        <van-tabbar-item v-for="item in tabar" :key="item.id" :to="item.path">
          <template #icon="props">
            <img :src="props.active ? item.iconSelect : item.icon" />
            <span style="font-size: 10px;">{{ item.name }}</span>
          </template>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      tabar: [
        {
          id: 0,
          path: '/home',
          icon: require('@/assets/images/footer/home.png'),
          iconSelect: require('@/assets/images/footer/homeSelect.png'),
          name: '首页'
        },
        {
          id: 1,
          path: '/shop',
          icon: require('@/assets/images/footer/shop.png'),
          iconSelect: require('@/assets/images/footer/shopSelect.png'),
          name: 'AI商城'
        },
        {
          id: 2,
          path: '/application',
          icon: require('@/assets/images/footer/application.png'),
          iconSelect: require('@/assets/images/footer/applicationSelect.png'),
          name: '应用'
        },
        {
          id: 3,
          path: '/user',
          icon: require('@/assets/images/footer/user.png'),
          iconSelect: require('@/assets/images/footer/userSelect.png'),
          name: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.footer{
  height: 50px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  /deep/.van-tabbar-item__icon{
    text-align: -webkit-center;
  }
  /deep/.van-tabbar--fixed{
    padding-top: 4px;
    box-sizing: border-box;
  }
}
</style>
