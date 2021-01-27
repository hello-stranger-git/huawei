<!--任务发布-->
<template>
  <div>
    <!-- 头部区域 -->
    <TopTitle
      title="任务发布"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    >
      <span>保存</span>
    </TopTitle>
    <div class="main">
      <!-- 任务类型 -->
      <div class="cell">
        <van-cell
          title="任务类型"
          is-link
          :value="task.type ? task.type : '请选择(必填)'"
          @click="openSelected(typeArr, 0)"
        />
      </div>
      <!-- 任务员工 -->
      <div class="cell">
        <van-cell
          title="员工"
          is-link
          :value="task.employee ? task.employee : '请选择(必填)'"
          @click="openSelected(employeeArr, 1)"
        />
      </div>
      <!-- 任务内容 -->
      <div class="title">任务内容</div>
      <div class="limit">
        <textarea
          cols="50"
          rows="10"
          placeholder="请输入"
          v-model="task.content"
          @input="taskValueChange"
        ></textarea>
        <div class="valueLength">{{ task.content.length }}/500</div>
      </div>
      <!-- 任务优先级 -->
      <div class="cell">
        <van-cell
          title="优先级"
          is-link
          :value="task.level ? task.level : '请选择(必填)'"
          @click="openSelected(levelArr, 2)"
        />
      </div>
      <!-- 任务时间 -->
      <div class="title">截至时间</div>
      <div class="cell">
        <van-cell
          title="请选择截止时间"
          is-link
          :value="task.date ? task.date : '请选择(必填)'"
          @click="datePickerShow = true"
        />
      </div>
    </div>
    <!-- 弹窗 -->
    <DownPopup :show="dialogShow" @clickOverlay="closePopup">
      <div class="popupHeader">
        请选择
        <img :src="closeIcon" @click="closePopup" />
        <div class="confirm" @click="confirmPopup">确认</div>
      </div>
      <div class="items">
        <div class="item" v-for="(item, i) in currentArr" :key="i">
          {{ item.value }}
          <img
            :src="currentIndex === i ? selectedIcon : unselectedIcon"
            @click="handleSelected(item, i)"
          />
        </div>
      </div>
    </DownPopup>
    <!-- 时间选择器 -->
    <van-datetime-picker
      v-if="datePickerShow"
      v-model="currentDate"
      type="date"
      title="选择时间"
      :formatter="formatter"
      @cancel="cancelPcik"
      @confirm="confirmPick"
      :min-date="minDate"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
import TopTitle from '@/components/topTitle'
import DownPopup from '@/components/downPopup'
export default {
  data() {
    return {
      closeIcon: require('@/assets/images/home/taskManager/close.png'),
      selectedIcon: require('@/assets/images/home/taskManager/selected.png'),
      unselectedIcon: require('@/assets/images/home/taskManager/unselected.png'),
      task: {
        type: '',
        employee: '',
        content: '',
        level: '',
        date: ''
      },
      taskAttrArr: ['type', 'employee', 'level'],
      taskAttrindex: null,
      dialogShow: false,
      currentDate: new Date(),
      datePickerShow: false,
      minDate: new Date(),
      employeeArr: [
        { value: '刘德华' },
        { value: '张学友' },
        { value: '郭富城' },
        { value: '黎明' }
      ],
      typeArr: [
        { value: '普通任务' },
        { value: '客户拜访任务' },
        { value: '商机任务' },
        { value: '市场调研任务' }
      ],
      levelArr: [{ value: '低' }, { value: '普通' }, { value: '紧急' }],
      currentIndex: null,
      currentArr: [],
      currentValue: ''
    }
  },
  components: {
    TopTitle,
    DownPopup
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      console.log(this.task)
      Toast('保存成功')
    },
    // 限制函数
    taskValueChange() {
      if (this.task.content.length > 500) {
        this.task.content = this.task.content.slice(0, 500)
        Toast('内容长度不能超过500')
      }
    },
    // 格式化时间
    formatter(type, val) {
      if (type === 'year') {
        return val + '年'
      }
      if (type === 'month') {
        return val + '月'
      }
      if (type === 'day') {
        return val + '日'
      }
      return val
    },
    // 取消选择时间
    cancelPcik() {
      this.datePickerShow = false
    },
    // 确认时间
    confirmPick(value) {
      this.datePickerShow = false
      console.log(value)
      this.task.date = value.toLocaleDateString()
    },
    // 弹窗勾选内容
    handleSelected(item, i) {
      console.log(item.value)
      this.currentIndex = i
      this.currentValue = item.value
    },
    // 关闭弹出框
    closePopup() {
      this.dialogShow = false
    },
    // 打开弹出框
    openSelected(arr, index) {
      this.dialogShow = true //
      this.currentArr = arr
      this.taskAttrindex = index
    },
    // 确认选中值
    confirmPopup() {
      this.dialogShow = false
      this.task[this.taskAttrArr[this.taskAttrindex]] = this.currentValue
      this.currentIndex = null
      this.currentValue = null
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  margin: 0 12px;
  .cell {
    margin: 16px 0 0;
    overflow: hidden;
    border-radius: 10px;
    .van-cell {
      color: #141414;
    }
  }
  .title {
    padding-top: 16px;
    font-size: 16px;
    font-weight: 700;
  }
  .limit {
    position: relative;
    height: 145px;
    margin-top: 8px;
    padding: 12px 12px 0;
    background-color: #fff;
    border-radius: 10px;
    textarea {
      box-sizing: border-box;
      resize: none;
      width: 100%;
      height: 121px;
      color: #141414;
      font-size: 14px;
      border: none;
    }
    .valueLength {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 12px;
      color: #b9b9b9;
    }
  }
  textarea::-webkit-input-placeholder {
    color: #b9b9b9;
  }
}
.popupHeader {
  position: relative;
  top: 0;
  left: 0;
  font-weight: 900;
  margin-top: 14px;
  text-align: center;
  font-size: 18;
  height: 23px;
  line-height: 23px;
  img {
    position: absolute;
    left: 23px;
    top: 6px;
    width: 12px;
    height: 12px;
  }
  .confirm {
    position: absolute;
    right: 24px;
    top: 3px;
    color: #e60012;
    font-size: 14px;
    font-weight: 400;
  }
}
.items {
  margin-top: 31px;
  height: 80%;
  overflow: auto;
  .item {
    position: relative;
    padding-left: 42px;
    margin-top: 22px;
    &:first-child {
      margin-top: 0;
    }
    img {
      position: absolute;
      right: 56px;
      top: 4px;
      width: 17px;
      height: 17px;
    }
  }
}
.van-popup {
  position: relative;
}
</style>
