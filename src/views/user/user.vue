<template>
  <div>
    <User Icon="iconhuawei"
          title="广州百信广场华为旗舰店"
          color="#D51600"></User>
    <User Icon="iconopen"
          title="营业状态"
          color="#CC2F7D"></User>
    <User Icon="icondizhi"
          title="地址:广州市白云区新市机场路"
          color="#439BBA"></User>
    <User Icon="iconstranger-full"
          title="店长:张鹏"
          color="#13227A"></User>
    <User Icon="iconfuzeren"
          title="区域负责人:兰宇贵"
          color="#000000"></User>
    <User Icon="iconrili"
          title="上下班时间:10:00~22:00"
          color="#3781FB"></User>
    <User Icon="iconqiandai"
          title="销售额补录"
          color="#FEA679"
          :sale="true"></User>
    <User Icon="iconbaojingshanshuo"
          title="报警主机"
          color="#D81E06"></User>
    <User Icon="iconsuo"
          title="密码修改"
          color="#E0620D"
          :arrow="true"></User>
    <User Icon="iconEmail"
          title="工单"
          color="#D4237A"
          :arrow="true"></User>
    <User Icon="icontishi"
          title="关于"
          color="#5D80E0"
          :arrow="true"></User>
    <div class="outDiv">
      <el-button class="outBtn">退出账号</el-button>
    </div>
  </div>
</template>

<script>
import User from '@/components/user/userItem.vue'
export default {
  components: {
    User
  }
}
</script>

<style scoped>
.userItemDiv:first-child {
  margin-top: 10px;
}
.outDiv {
  width: 100%;
  text-align: center;
}
.outBtn {
  margin-top: 30px;
  margin-bottom: 54px;
  width: 100%;
  color: #ff7272;
  border-radius: 8px;
  padding: 18px 20px;
}
.outBtn:active,
.outBtn:hover,
.outBtn:focus {
  color: #ff7272;
  border-color: #fff;
  background-color: #fff;
  outline: 0;
}
</style>