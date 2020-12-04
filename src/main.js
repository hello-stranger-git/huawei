import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//引入v-charts
import VCharts from 'v-charts'
Vue.use(VCharts)
//引入echarts挂载全局
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
