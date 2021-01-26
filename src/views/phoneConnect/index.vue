<!--通讯录-->
<template>
  <div class="contain">
    <TopTitle title="通讯录" :leftArrowHidden="false" />
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <DepartmentGroupItem
      @groupItemHandle="groupItemHandle(item.name)"
      v-for="item in DepartmentGroupData"
      :key="item.id"
      :leftIcon="item.leftIcon"
      :title="item.title"
      :borderBoolean="item.border"
    />
    <div class="family">
      <div class="title">
        <div class="nabla"></div>
        乐店天眼大家庭
      </div>
      <DepartmentGroupItem
        @groupItemHandle="groupItemHandle(item.name)"
        v-for="item in familyData"
        :key="item.id"
        :leftIcon="item.leftIcon"
        :title="item.title"
        :rightIcon="item.rightIcon"
        :borderBoolean="item.border"
      />
    </div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import DepartmentGroupItem from '@/components/departmentGroupItem' // 每一行
export default {
  data() {
    return {
      DepartmentGroupData: [
        {
          id: 1,
          leftIcon: require('@/assets/images/phoneConnect/groupChat.png'),
          title: '群聊',
          name: 'around',
          border: true
        },
        {
          id: 2,
          leftIcon: require('@/assets/images/phoneConnect/inviteIcon.png'),
          title: '邀请店员',
          name: '',
          border: false
        }
      ],
      familyData: [
        {
          id: 3,
          leftIcon: require('@/assets/images/phoneConnect/itemIcon.png'),
          rightIcon: require('@/assets/images/phoneConnect/messageIcon.png'),
          title: '周边部门(1)',
          name: 'around',
          border: true
        },
        {
          id: 4,
          leftIcon: require('@/assets/images/phoneConnect/itemIcon.png'),
          rightIcon: require('@/assets/images/phoneConnect/messageIcon.png'),
          title: '业务部(2)',
          name: '',
          border: true
        },
        {
          id: 5,
          leftIcon: require('@/assets/images/phoneConnect/itemIcon.png'),
          rightIcon: require('@/assets/images/phoneConnect/messageIcon.png'),
          title: '客服中心(3)',
          name: 'around',
          border: true
        },
        {
          id: 6,
          leftIcon: require('@/assets/images/phoneConnect/itemIcon.png'),
          rightIcon: require('@/assets/images/phoneConnect/messageIcon.png'),
          title: '技术部(4)',
          name: '',
          border: true
        },
        {
          id: 7,
          leftIcon: require('@/assets/images/phoneConnect/itemIcon.png'),
          rightIcon: require('@/assets/images/phoneConnect/messageIcon.png'),
          title: '管理层(2)',
          name: 'around',
          border: false
        }
      ],
      value: ''
    }
  },
  methods: {
    groupItemHandle(name) {
      console.log(name)
    }
  },
  components: {
    TopTitle,
    DepartmentGroupItem
  }
}
</script>

<style lang="less" scoped>
.van-hairline--bottom::after {
  border-bottom: none;
}

.family {
  margin-top: 16px;
  padding: 16px 12px 12px 30px;
  // height: 300px;
  background-color: #fff;
  font-size: 14px;
  color: #000;

  .title {
    position: relative;
    font-size: 16px;
    .nabla {
      position: absolute;
      top: 6px;
      left: -18px;
      width: 0px;
      height: 0px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #343434;
    }
  }
  /deep/.departmentGroupItem {
    padding: 16px 0 0;
  }
}
/deep/.departmentGroupItem {
  padding: 4px 12px 8px;
}
/deep/.borderBottom {
  padding-bottom: 16px;
}
</style>
