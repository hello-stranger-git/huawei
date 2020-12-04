<!--今日进店人数-->
<template>
  <div class="indexModel">
    <el-row>
      <el-col :span="24">
        <el-row>
          <el-col :span="12">
            <IndexTitleModel
              title="今日进店"
              titleIcon="el-icon-user-solid"
            ></IndexTitleModel>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light title-count">
              <span class="titleCountSpan">247人</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" class="customer">
        <div class="grid-content bg-purple-dark">
          <el-row class="userItem">
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <CustomerItem
                  sex="woman"
                  age="35~50岁"
                  :count="1"
                  :cusromerIcon="enterStoreImage[0]"
                ></CustomerItem>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple-light">
                <CustomerItem
                  sex="man"
                  age="20~30岁"
                  :count="2"
                  :cusromerIcon="enterStoreImage[1]"
                ></CustomerItem>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <CustomerItem
                  sex="man"
                  age="35~40岁"
                  :count="6"
                  :cusromerIcon="enterStoreImage[2]"
                ></CustomerItem>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple-light">
                <CustomerItem
                  sex="man"
                  age="35~40岁"
                  :count="3"
                  :cusromerIcon="enterStoreImage[3]"
                ></CustomerItem>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple-light">
                <CustomerItem
                  sex="man"
                  age="20~30岁"
                  :count="2"
                  :cusromerIcon="enterStoreImage[4]"
                ></CustomerItem>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CustomerItem from "./EnterStore/CustomerItem.vue"; //每一个客户
import IndexTitleModel from "./indexTitleModel.vue";
const enterStoreImage1 = require("@/assets/enterStore/enterStore1.png");
const enterStoreImage2 = require("@/assets/enterStore/enterStore2.png");
const enterStoreImage3 = require("@/assets/enterStore/enterStore3.png");
const enterStoreImage4 = require("@/assets/enterStore/enterStore4.png");
const enterStoreImage5 = require("@/assets/enterStore/enterStore5.png");
export default {
  data() {
    return {
      enterStoreImage: [
        enterStoreImage1,
        enterStoreImage2,
        enterStoreImage3,
        enterStoreImage4,
        enterStoreImage5,
      ],
    };
  },
  components: {
    CustomerItem,
    IndexTitleModel,
  },
};
</script>
<style scoped>
.enterStore {
  background-color: #fff;
  margin: 10px 25px;
  border-radius: 8px;
  padding: 1rem;
  padding-bottom: 15px;
}
.userItem {
  display: flex;
  margin-top: 2rem;
}
.customer {
  margin-top: -20px;
}

.title-count {
  text-align: right;
}
.titleCountSpan {
  background-color: #ff3300;
  border-radius: 11px;
  font-size: 12px;
  color: #ffffff;
  padding: 2px 8px;
}
</style>