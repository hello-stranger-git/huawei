<!--选择部门-->
<template>
  <div class="Department">
    <div>
      <DepartmentGroupItem
        v-for="item in departmentData"
        :key="item.id"
        @groupItemHandle="groupItemHandle(item.peopleData)"
        :leftIcon="userIcon"
        :title="`${item.title}（${item.people}）`"
        :rightIcon="jumpIcon"
        :borderBoolean="false"
      />
    </div>
    <div class="Department_bottom">
      <div></div>
      <div>
        <van-button round color="red" type="info">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import DepartmentGroupItem from '@/components/departmentGroupItem'
export default {
  components: {
    DepartmentGroupItem
  },
  data() {
    return {
      search: require('@/assets/images/search.png'),
      userIcon: require('@/assets/images/userIcon.png'),
      jumpIcon: require('@/assets/images/jump.png'),

      // 部门数据
      departmentData: [
        {
          id: 1,
          title: '一号部门',
          people: 2,
          peopleData: [
            {
              id: 1,
              uname: '李某某',
              icon: require('@/assets/images/home/selectDepartment/userIcon1.png'),
              phone: '13221252365'
            },
            {
              id: 2,
              uname: '张某某',
              icon: require('@/assets/images/home/selectDepartment/userIcon2.png'),

              phone: '18051255555',
              select: true
            },
            {
              id: 3,
              uname: '孙某某',
              icon: require('@/assets/images/home/selectDepartment/userIcon3.png'),

              phone: '13001592622'
            },
            {
              id: 4,
              uname: '李某某',
              icon: require('@/assets/images/home/selectDepartment/userIcon4.png'),

              phone: '12225325454'
            }
          ]
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
    groupItemHandle(peopleData) {
      this.$router.push({
        name: 'SelectPeople',
        params: {
          peopleData: peopleData
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.Department_bottom {
  padding-top: 3px;
  height: 81px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(112, 112, 112, 0.2);
  width: 100%;
  display: flex;
  justify-content: space-between;

  .van-button {
    width: 84px;
    height: 34px;
    margin-right: 12px;
  }
}
</style>
