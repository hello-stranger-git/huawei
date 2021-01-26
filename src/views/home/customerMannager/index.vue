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
        @smallItemHandle="smallItemHandle(item.name)"
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
          name: ''
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
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.customerManage{
  background-color: #fff;
  min-height: 100%;
}
.content{
  display: flex;
  flex-wrap: wrap;
  .smallIconItem {
    margin-left: 3.2%;
    margin-top: 12px;
  }
}
</style>
