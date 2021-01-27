<!--选择部门-->
<template>
  <div class="selectDepartment">
    <!-- 头部区域 -->
    <TopTitle
      title="选择部门"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    >
      <img :src="search" width="28px" height="28px" />
    </TopTitle>
    <p>{{ company }}</p>
    <div>
      <DepartmentGroupItem
        v-for="item in departmentData"
        :key="item.id"
        @groupItemHandle="groupItemHandle(item)"
        :leftIcon="userIcon"
        :title="`${item.title}（${item.people}）`"
        :rightIcon="jumpIcon"
        :borderBoolean="false"
      />
    </div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import DepartmentGroupItem from '@/components/departmentGroupItem'
export default {
  components: {
    TopTitle,
    DepartmentGroupItem
  },
  data() {
    return {
      search: require('@/assets/images/search.png'),
      userIcon: require('@/assets/images/userIcon.png'),
      jumpIcon: require('@/assets/images/jump.png'),
      company: '某某有限公司', // 公司名称

      // 部门数据
      departmentData: [
        {
          id: 1,
          title: '一号部门',
          people: 2
        },
        {
          id: 2,
          title: '二号部门',
          people: 3
        },
        {
          id: 3,
          title: '三号部门',
          people: 6
        },
        {
          id: 4,
          title: '四号部门',
          people: 4
        },
        {
          id: 5,
          title: '五号部门',
          people: 7
        },
        {
          id: 6,
          title: '六号部门',
          people: 22
        }
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      console.log('搜索')
    },
    groupItemHandle(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less" scoped>
.selectDepartment {
  height: 100%;
  background: #fff;
  & > p {
    font-size: 16px;
    color: #959595;
    line-height: 49px;
    border-bottom: 1px solid rgba(112, 112, 112, 0.2);
    padding: 0 12px;
  }
}
</style>
