<template>
  <div class="flowItem">
    <div class="infinite-list-wrapper"
         style="overflow: auto">
      <ul class="infinite-list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
          style="overflow: auto"
          infinite-scroll-delay="200">
        <li v-for="(i, index) in enterStore.length"
            class="infinite-list-item"
            :key="index">
          <el-row class="rowCustomer">
            <el-col :span="5"
                    v-for="(item, index) in enterStore[index]"
                    :key="index">
              <CustomerItem :sex="item.sex"
                            :age="item.age"
                            :count="item.count"
                            :cusromerIcon="item.image"></CustomerItem>
            </el-col>
          </el-row>
        </li>
      </ul>
      <p v-if="loading"
         class="loading">
        <i class="el-icon-loading"></i>
        加载中...
      </p>
      <!-- <p v-if="noMore" class="noMore">没有更多了</p> -->
    </div>
  </div>
</template>

<script>
const flowImage1 = require("@/assets/enterStore/enterStore1.png");
const flowImage2 = require("@/assets/enterStore/enterStore2.png");
const flowImage3 = require("@/assets/enterStore/enterStore3.png");
const flowImage4 = require("@/assets/enterStore/enterStore4.png");
const flowImage5 = require("@/assets/enterStore/enterStore5.png");
import CustomerItem from "@/components/home/EnterStore/CustomerItem.vue"; //每一个客户
export default {
  data () {
    return {
      enterStore: [
        //数据,每五个一行
        [
          { sex: "woman", age: "35~40岁", count: 6, image: flowImage1 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage2 },
          { sex: "man", age: "35~40岁", count: 1, image: flowImage3 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage4 },
          { sex: "man", age: "35~40岁", count: 1, image: flowImage5 },
        ],
        [
          { sex: "man", age: "35~40岁", count: 1, image: flowImage2 },
          { sex: "woman", age: "35~40岁", count: 6, image: flowImage1 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage3 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage5 },
          { sex: "man", age: "35~40岁", count: 1, image: flowImage4 },
        ],
      ],
      loading: false,
    };
  },
  methods: {
    //改变数据
    load () {
      this.loading = true;
      setTimeout(() => {//模拟请求数据
        this.enterStore.push([
          { sex: "woman", age: "35~40岁", count: 6, image: flowImage1 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage2 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage3 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage4 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage5 },
        ], [
          { sex: "woman", age: "35~40岁", count: 6, image: flowImage1 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage2 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage3 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage4 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage5 },
        ], [
          { sex: "woman", age: "35~40岁", count: 6, image: flowImage1 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage2 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage3 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage4 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage5 },
        ], [
          { sex: "woman", age: "35~40岁", count: 6, image: flowImage1 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage2 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage3 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage4 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage5 },
        ], [
          { sex: "woman", age: "35~40岁", count: 6, image: flowImage1 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage2 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage3 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage4 },
          { sex: "man", age: "35~40岁", count: 6, image: flowImage5 },
        ]);
        this.loading = false;
      }, 200);
    },
  },
  computed: {
    noMore () {//控制加载数据数目
      return this.enterStore.length >= 1000;
    },
    disabled () {
      return this.loading || this.noMore;
    },
  },
  components: {
    CustomerItem,
  },
};
</script>

<style scoped>
.flowItem {
  width: 90%;
  margin: auto;
}
/* .rowCustomer:nth-child(1){
  margin-top: 0px;
} */
.rowCustomer {
  display: flex;
  margin-top: 20px;
}
/* /deep/.age i{
  font-size: 12px;
} */
.loading {
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
/* /deep/.el-tab-pane {
  background-color: #fff;
} */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>