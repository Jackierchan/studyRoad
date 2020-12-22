
import Vue from 'vue'
import App from './App.vue'

// //全局引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

// 全局引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


// 按需1引入element-ui
// import { Transfer,Carousel ,CarouselItem} from 'element-ui';
// Vue.use(Transfer)
// Vue.use(Carousel)
// Vue.use(CarouselItem)

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd)


// import { Menu,Timeline } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Menu)
// Vue.use(Timeline)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
