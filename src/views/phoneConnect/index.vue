<!--通讯录-->
<template>
  <div>
    <TopTitle title="通讯录" :leftArrowHidden="false"/>
    <DepartmentGroupItem v-for="item in DepartmentGroupData" :key="item.id" :leftIcon="item.leftIcon" :title="item.title" :rightIcon="item.rightIcon" :borderBoolean="true"/>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
import DepartmentGroupItem from '@/components/departmentGroupItem'// 每一行
export default {
  data() {
    return {
      DepartmentGroupData: [
        {
          id: 1,
          leftIcon: require('@/assets/images/phoneConnect/itemIcon.png'),
          rightIcon: require('@/assets/images/phoneConnect/messageIcon.png'),
          title: '周边部门(1)'
        }
      ]
    }
  },
  components: {
    TopTitle,
    DepartmentGroupItem
  }
}
</script>

<style lang="scss" scoped>

</style>
