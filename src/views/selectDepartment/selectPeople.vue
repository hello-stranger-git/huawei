<!--选择人员-->
<template>
  <div class="People">
    <van-radio-group v-if="!checkbox" v-model="choice">
      <van-radio
        v-for="item in peopleData"
        :key="item.id"
        :name="item"
        :disabled="item.select"
      >
        <div class="people_content">
          <img :src="item.icon" />
          <div>
            <p>{{ item.uname }}</p>
            <span>{{ item.phone }}</span>
          </div>
        </div>
      </van-radio>
    </van-radio-group>

    <van-checkbox-group v-else v-model="choices">
      <van-checkbox
        v-for="item in peopleData"
        :key="item.id"
        :name="item"
        :disabled="item.select"
      >
        <div class="people_content">
          <img :src="item.icon" />
          <div>
            <p>{{ item.uname }}</p>
            <span>{{ item.phone }}</span>
          </div>
        </div>
      </van-checkbox>
    </van-checkbox-group>
    <div class="people_bottom">
      <div class="choice">
        <div v-if="!checkbox">
          <img :src="choice.icon" width="28px" height="28px" />
          <p>{{ choice.uname }}</p>
        </div>
        <div v-else v-for="item in choices" :key="item.id">
          <img :src="item.icon" width="28px" height="28px" />
          <p>{{ item.uname }}</p>
        </div>
      </div>
      <div>
        <van-button round color="red" type="info" @click="aa">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true, // 是否多选
      choice: {}, // 单选选中
      choices: [], // 多选选中
      peopleData: []
    }
  },
  methods: {
    aa() {
      console.log(this.choice)
    }
  },
  mounted() {
    this.peopleData = this.$route.params.peopleData
  }
}
</script>

<style lang="less" scoped>
.People {
  /deep/.van-radio__label {
    margin-left: 15px;
  }
  .van-radio-group,
  .van-checkbox-group {
    padding: 19px 12px 0;
  }
  .van-radio,
  .van-checkbox {
    margin-bottom: 29px;
  }
}
.people_content {
  display: flex;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  & > div {
    margin-left: 8px;
    p {
      font-size: 14px;
      color: #141414;
    }
    span {
      font-size: 14px;
      color: #959595;
    }
  }
}
.people_bottom {
  padding-top: 3px;
  height: 81px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(112, 112, 112, 0.2);
  width: 100%;
  display: flex;
  justify-content: space-between;

  .choice {
    display: flex;
    & > div {
      text-align: center;
      width: 42px;
    }
    p {
      font-size: 10px;
      color: #959595;
    }
  }
  .van-button {
    width: 84px;
    height: 34px;
    margin-right: 12px;
  }
}
</style>
