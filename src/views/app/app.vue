<template>
  <div>
    <!-- tab选项区域 -->
    <el-tabs type="border-card" class="apps">
      <!-- 使用中 -->
      <el-tab-pane label="使用中">
        <div v-for="(item, i) of appusedata" :key="i">
          <Appuse :item="item"></Appuse>
        </div>
      </el-tab-pane>
      <!-- 未使用 -->
      <el-tab-pane label="未使用">
        <div v-for="(item, i) of appdata" :key="i">
          <Appinfo :item="item"></Appinfo>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Appuse from '@/components/app/appUse.vue'; //使用中
import Appinfo from '@/components/app/appinfo.vue'; //未使用
export default {
  components: {
    Appinfo,
    Appuse,
  },
  data() {
    return {
      // 使用数据
      appusedata: [
        {
          title: '保险服务',
          datas: [
            {
              icon: 'icongongdan',
              name: '保单录入',
            },
            {
              icon: 'iconchaxun',
              name: '保单查询',
            },
            {
              icon: 'icongongyingshangdailishang',
              name: '代理人信息',
            },
          ],
        },
        {
          title: '内部管理',
          datas: [
            {
              icon: 'iconEmail',
              name: '工作汇报',
            },
            {
              icon: 'icongonggao',
              name: '内部公告',
            },
            {
              icon: 'iconkequn',
              name: '客户管理',
            },
            {
              icon: 'iconziyuan',
              name: '任务管理',
            },
          ],
        },
      ],
      // 未使用数据
      appdata: [
        {
          name: '安全服务',
          icon: require('@/assets/appimage/anquan.png'),
          text: '24小时全天候守护你的私人财产',
          banner: require('@/assets/appimage/appbanner1.png'),
        },
        {
          name: '考勤管理',
          icon: require('@/assets/appimage/kaoqing.png'),
          text: '多地址设置，多班次考勤，考情数据报表',
          banner: require('@/assets/appimage/appbanner2.png'),
        },
        {
          name: '会员管理',
          icon: require('@/assets/appimage/huiyuan.png'),
          text: '移动端CRM，会员属性分析，跟踪提醒，精准营销',
          banner: require('@/assets/appimage/appbanner3.png'),
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
/* tab选项样式 */
.apps {
  background-color: #eee;
}
/deep/.el-tabs__nav {
  display: flex;
  width: 100%;
  color: black;
}
/deep/.el-tabs__item {
  flex-grow: 1;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: black !important;
  background-color: #fff;
  border-left: 10px solid rgb(197, 197, 197);
}
/deep/.is-top.el-tabs--border-card {
  background-color: #f0f0f0 !important;
}
/* 选中样式 */
/deep/.is-active {
  background-color: #eeeeee !important;
}
.el-tabs--border-card > .el-tabs__header {
  // border: 0;
}
/deep/.el-tabs--border-card > .el-tabs__content {
  background-color: #eeeeee;
  margin-bottom: 55px;
}
</style>
