<!--用户注册以及忘记密码-->
<template>
  <div class="forgetRegist">
    <!-- 头部 -->
    <TopTitle title="找回密码" @onClickLeft="onClickLeft" />
    <!-- 输入框区域 -->
    <div class="login_input">
      <van-cell-group>
        <van-field
          v-model="phone"
          label="+86"
          label-width="35"
          :left-icon="phoneIcon"
          placeholder="请输入手机号"
        />
        <van-field
          v-model="verification"
          :left-icon="validateIcon"
          placeholder="请输入验证码"
        >
          <template #button>
            <van-button
              plain
              type="info"
              size="small"
              color="#E60012"
              @click="obtain"
              >获取验证码</van-button
            >
          </template>
        </van-field>
        <van-field
          v-model="password1"
          type="password"
          :left-icon="passwordIcon"
          placeholder="请输入新密码"
        >
        </van-field>
        <van-field
          v-model="password2"
          type="password"
          :left-icon="passwordIcon"
          placeholder="请再次输入密码"
        />
        <p>密码长度为6-14位，数字、字母、字符至少包含两种</p>
      </van-cell-group>
    </div>
    <!-- 登录 -->
    <div class="loginButton">
      <van-button
        @click="login"
        :disabled="
          phone && verification && password1 && password2 ? false : true
        "
        round
        block
        type="info"
        native-type="submit"
        color="#E60012"
      >
        提交
      </van-button>
    </div>
  </div>
</template>

<script>
import TopTitle from '@/components/topTitle'
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      phoneIcon: require('@/assets/images/forgetRegist/phone.png'), // 手机图标
      passwordIcon: require('@/assets/images/forgetRegist/password.png'), // 密码图标
      validateIcon: require('@/assets/images/forgetRegist/validate.png'), // 验证码图标

      phone: '',
      verification: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    obtain() {
      console.log('获取验证码')
    }
  }
}
</script>

<style lang="less" scoped>
.forgetRegist {
  height: 100%;
  background-color: #fff;
}
// 输入框区域
.login_input {
  margin-top: 20px;
  padding: 0 16px;
  // 左侧图标
  /deep/.van-field__left-icon {
    i {
      font-size: 25px;
    }
  }
  // 左侧文本
  /deep/.van-cell__title {
    position: relative;
    &::after {
      content: '';
      height: 16px;
      border-left: 1px solid #141414;
      display: inline-block;
      position: absolute;
      top: 3px;
      right: 0;
    }
  }
  // 输入框间距
  .van-field:not(:first-child) {
    margin-top: 30px;
  }
  // 验证码按钮
  .van-button {
    border-radius: 7px;
  }
  /deep/.van-button--small {
    height: 25px;
  }
  // 密码提示文字
  .van-cell-group > p {
    padding-left: 19px;
    margin-top: 6px;
    font-size: 10px;
    color: rgba(20, 20, 20, 0.5);
  }
  .van-hairline--top-bottom::after,
  .van-hairline-unset--top-bottom::after {
    border: 0;
  }
}
// 登录按钮
.loginButton {
  margin-top: 85px;
  padding: 0 33px;
  .van-button {
    height: 52px;
  }
}
</style>
