<!--客户管理-->
<template>
  <div class="customerManage">
    <TopTitle title="客户管理" @onClickLeft="onClickLeft" />
    <!-- 内容区域 -->
    <div class="content">
      <SmallIconItem
        v-for="(item, i) in customerManData"
        :key="i"
        :title="item.title"
        :icon="item.icon"
        @smallItemHandle="
          smallItemHandle(
            item.name,
            item.title,
            item.sonName,
            item.from,
            item.to
          )
        "
      />
    </div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import SmallIconItem from '@/components/smallIconItem'
export default {
  data() {
    return {
      customerManData: [
        {
          id: 1,
          icon: require('@/assets/images/home/customerMannager/customerIcon.png'),
          title: '客户',
          name: 'InsideManager', // 当前要跳转的路由
          from: 'CustomerMannager', // 当前路由
          to: 'DailyDetail', // 点击加号要跳转的路由
          sonName: [
            {
              id: 1, // 此id与insideManager组件的id一致
              name: ''
            },
            {
              id: 2,
              name: ''
            },
            {
              id: 3,
              name: ''
            }
          ]
        },
        {
          id: 2,
          icon: require('@/assets/images/home/customerMannager/visitIcon.png'),
          title: '拜访',
          name: ''
        },
        {
          id: 3,
          icon: require('@/assets/images/home/customerMannager/marketIcon.png'),
          title: '商机',
          name: ''
        },
        {
          id: 4,
          icon: require('@/assets/images/home/customerMannager/businessIcon.png'),
          title: '市场调查',
          name: ''
        },
        {
          id: 5,
          icon: require('@/assets/images/home/customerMannager/competitive.png'),
          title: '竞争管理',
          name: ''
        }
      ]
    }
  },
  components: {
    TopTitle,
    SmallIconItem
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: 'Home' })
    },
    smallItemHandle(name, title, sonName, from, to) {
      this.$router.push({
        name: name,
        params: { title: title, sonName: sonName, from: from, to: to }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.customerManage {
  background-color: #fff;
  min-height: 100%;
}
.content {
  display: flex;
  flex-wrap: wrap;
  .smallIconItem {
    margin-left: 3.2%;
    margin-top: 12px;
  }
}
</style>
