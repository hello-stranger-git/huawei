<template>
  <div class="checkItem">
    <div class="videoScreen">
      <img :src="screen"
           height="100%"
           width="100%" />
    </div>
    <div class="operation">
      <div class="operLeft">
        <i class="el-icon-edit"></i>
        <i class="el-icon-monitor"></i>
      </div>
      <div class="operRight">
        <i class="el-icon-back"
           @click="Back"></i>
      </div>
    </div>
    <div class="indexModel tab">
      <el-tabs type="border-card"
               :tab-position="tabPosition"
               style="height: 300px">
        <el-tab-pane label="店内环境"
                     class="tabPane">
          <EveryCheck context="厅内地面/点面垃圾清理(城区厅和县城厅10分
            钟，乡镇厅30分钟) 1分
            "
                      :active="true"></EveryCheck>
          <EveryCheck context="预处理物料:业厅配 业务预处理单、填写
            台、配有笔"></EveryCheck>
          <EveryCheck context="业厅各功能区域应设置醒目标志，业务办理
台席应设置清晰的业务指示"></EveryCheck>
          <EveryCheck context="业厅各功能区域应设置醒目标志，业务办理
台席应设置清晰的业务指示
"></EveryCheck>
          <EveryCheck context="厅内应有服务标准 服务公约、服务监督牌
厅内台席全部开放，有工作人员在现场协助
维持秩序分流客户
"></EveryCheck>
        </el-tab-pane>
        <el-tab-pane label="员工衣着"> </el-tab-pane>
        <el-tab-pane label="商品摆放"> </el-tab-pane>
        <el-tab-pane label="宣传物料"></el-tab-pane>
        <el-tab-pane label="营销禁忌"></el-tab-pane>

      </el-tabs>
    </div>

    <div class="textArea indexModel">
      <el-input type="textarea"
                :rows="1"
                placeholder="备注："
                v-model="textarea">
      </el-input>
    </div>
    <div class="subDiv">
      <el-button class="subBtn"
                 type="primary">提交</el-button>
    </div>

    <div class="bottomMargin"></div>
  </div>
</template>

<script>
let screen1 = require("@/assets/screenImage/screen1.png");
import EveryCheck from "@/components/check/everyCheck.vue";
export default {
  data () {
    return {
      tabPosition: "left",
      textarea: "",
      screen: screen1,
    };
  },
  methods: {
    Back () {
      this.$router.go(-1);
    },
  },
  components: {
    EveryCheck,
  },
};
</script>

<style scoped>
.videoScreen {
  height: 220px;
  background-color: cadetblue;
}
/deep/.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  border-right: 0;
}
.checkItem {
  background-color: #e4e4e4;
}
.indexModel {
  padding: 0;
}
/deep/.el-tabs--border-card {
  border-radius: 5px;
  border: 0;
  box-shadow: none;
}
/deep/.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left {
  border: 0;
  letter-spacing: 2px;
  font-size: 16px;
}
/deep/.el-tabs--left.el-tabs--border-card .el-tabs__header.is-left {
  border: 0;
}
/deep/.el-tabs--border-card > .el-tabs__header {
  background-color: #f1f1f1;
}
/deep/.el-tabs__item {
  height: 60px;
  line-height: 60px;
  font-weight: 500;
}
.textArea {
  margin-top: 10px;
}
/deep/.el-textarea__inner {
  border: 0;
  font-size: 20px;
}
/deep/.el-textarea__inner::placeholder {
  font-size: 20px;
}
.subDiv {
  text-align: center;
}
.subBtn {
  width: 85%;
}
/* body,html{
    height: 100%;
} */
.operation {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  background-color: #fff;
  color: #50a6ff;
}
.operLeft {
  flex: 4;
}
.operLeft > i {
  margin-left: 25px;
}
.operRight {
  flex: 1;
  text-align: center;
}
.bottomMargin {
  height: 16px;
}
.everyCheck {
  margin-bottom: 15px;
}
.tabPane {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
/deep/.el-tabs--border-card > .el-tabs__content {
  height: 100%;
  background-color: #fff;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: #f5f5f5;
}
.tab {
  margin-bottom: 0;
}
</style>