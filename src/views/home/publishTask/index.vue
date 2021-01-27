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
          @click="taskTypeShow = true"
        />
      </div>
      <!-- 任务员工 -->
      <div class="cell">
        <van-cell
          title="员工"
          is-link
          :value="task.employee ? task.employee : '请选择(必填)'"
          @click="employeeShow = true"
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
          @click="levelShow = true"
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
    <!-- 任务类型弹窗 -->
    <DownPopup :show="taskTypeShow" @clickOverlay="closePopup">
      <div class="popupHeader">
        请选择1234
        <img :src="closeIcon" @click="closePopup" />
        <div class="confirm" @click="confirmType">确认</div>
      </div>
      <div class="items">
        <div class="item" v-for="(item, i) in typeArr" :key="i">
          {{ item.value }}
          <img
            :src="typeIndex === i ? selectedIcon : unselectedIcon"
            @click="typeSelected(i)"
          />
        </div>
      </div>
    </DownPopup>
    <!-- 任务员工弹窗 -->
    <DownPopup :show="employeeShow" @clickOverlay="closePopup">
      <div class="popupHeader">
        请选择
        <img :src="closeIcon" @click="closePopup" />
        <div class="confirm" @click="confirmEmployee">确认</div>
      </div>
      <div class="items">
        <div class="item" v-for="(item, i) in employeeArr" :key="i">
          {{ item.value }}
          <img
            :src="employeeIndex === i ? selectedIcon : unselectedIcon"
            @click="employeeSelected(i)"
          />
        </div>
      </div>
    </DownPopup>
    <!-- 任务优先级弹窗 -->
    <DownPopup :show="levelShow" @clickOverlay="closePopup">
      <div class="popupHeader">
        请选择
        <img :src="closeIcon" @click="closePopup" />
        <div class="confirm" @click="confirmLevel">确认</div>
      </div>
      <div class="items">
        <div class="item" v-for="(item, i) in levelArr" :key="i">
          {{ item.value }}
          <img
            :src="levelIndex === i ? selectedIcon : unselectedIcon"
            @click="levelSelected(i)"
          />
        </div>
      </div>
    </DownPopup>
    <!-- 时间选择器 -->
    <van-overlay :show="datePickerShow" @click="datePickerShow = false">
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
    </van-overlay>
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
      currentDate: new Date(),
      datePickerShow: false,
      minDate: new Date(),
      // 类型
      typeArr: [
        { value: '普通任务' },
        { value: '客户拜访任务' },
        { value: '商机任务' },
        { value: '市场调研任务' }
      ],
      taskTypeShow: false,
      typeIndex: '',
      // 员工
      employeeArr: [
        { value: '刘德华' },
        { value: '张学友' },
        { value: '郭富城' },
        { value: '黎明' }
      ],
      employeeIndex: '',
      employeeShow: false,
      // 优先级
      levelArr: [{ value: '低' }, { value: '普通' }, { value: '紧急' }],
      levelShow: false,
      levelIndex: ''
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
      if (this.task.type.length <= 0) {
        Toast('请选择任务类型')
        return
      }
      if (this.task.employee.length < 0) {
        Toast('请选择员工')
        return
      }
      if (this.task.level.length < 0) {
        Toast('请选择优先级')
        return
      }
      if (this.task.date.length < 0) {
        Toast('请选择截止时间')
        return
      }
      Toast('保存成功')
    },
    // 限制长度
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

    // 关闭所有弹出框
    closePopup() {
      this.taskTypeShow = false
      this.employeeShow = false
      this.datePickerShow = false
      this.levelShow = false
    },

    //
    // 预选类型
    typeSelected(i) {
      this.typeIndex = i
    },
    // 确认选择类型
    confirmType() {
      if (this.typeIndex.length <= 0) {
        Toast('请选择类型')
        return
      }
      this.task.type = this.typeArr[this.typeIndex].value
      this.taskTypeShow = false
    },
    // 预选员工
    employeeSelected(i) {
      this.employeeIndex = i
    },
    // 确认员工
    confirmEmployee() {
      if (this.employeeIndex.length <= 0) {
        Toast('请选择类型')
        return
      }
      this.task.employee = this.employeeArr[this.employeeIndex].value
      this.employeeShow = false
    },
    // 预选优先级
    levelSelected(i) {
      this.levelIndex = i
    },
    confirmLevel() {
      if (this.levelIndex.length <= 0) {
        Toast('请选择类型')
        return
      }
      this.task.level = this.levelArr[this.levelIndex].value
      this.levelShow = false
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
.van-picker {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
