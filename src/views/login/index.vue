<!--登录界面-->
<template>
  <div class="login">
    <!-- logo区域 -->
    <div class="logo">
      <div
        style="position:absolute;top: 50%; left: 50%; transform: translate(-50%,-50%);"
      >
        <img :src="logoImg" />
        <p>乐客店·好望</p>
      </div>
    </div>
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
          v-model="password"
          type="password"
          :left-icon="passwordIcon"
          placeholder="请输入密码"
        />
        <van-checkbox v-model="remember" icon-size="12px"
          >记住密码</van-checkbox
        >
      </van-cell-group>
    </div>
    <!-- 登录 -->
    <div class="loginButton">
      <van-button
        @click="login"
        :disabled="phone && password ? false : true"
        round
        block
        type="info"
        native-type="submit"
        color="#E60012"
      >
        登录
      </van-button>
    </div>
    <!-- 忘记密码、注册 -->
    <p class="loginFoot">
      <span>忘记密码</span>
      <span>|</span>
      <span>立即注册</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoImg: require('@/assets/images/login/loginLogin.png'), // logo图
      phoneIcon: require('@/assets/images/login/phone.png'), // 手机图标
      passwordIcon: require('@/assets/images/login/password.png'), // 密码图标
      // 手机号
      phone: '',
      // 密码
      password: '',
      // 记住密码
      remember: false
    }
  },
  methods: {
    login() {
      console.log('登录')
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
}
// logo区域
.logo {
  flex: 4;
  // padding-top: 99px;
  position: relative;
  text-align: center;
  img {
    width: 104px;
    height: 104px;
  }
  p {
    margin-top: 6px;
    color: #e60012;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
  }
}
// 输入框区域
.login_input {
  flex: 3;
  // margin-top: 72px;
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
  .van-checkbox {
    font-size: 12px;
    color: #141414;
    float: right;
    margin-right: 16px;
  }
}
// 登录按钮
.loginButton {
  flex: 2;
  // margin-top: 85px;
  padding: 0 33px;
  .van-button {
    height: 52px;
  }
}
// 忘记密码、注册
.loginFoot {
  flex: 2;
  // margin-top: 110px;
  padding: 0 66px;
  display: flex;
  text-align: center;
  justify-content: space-around;
  span {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
