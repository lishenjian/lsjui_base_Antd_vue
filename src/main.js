import Vue from 'vue'
import App from './App.vue'

/* 全局引入 */
// import Antd from 'ant-design-vue'; 
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd);

//局部引入
// import { Button, Select } from 'ant-design-vue';
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

// 封装组件导入
import CkButton from '../packages'
// 使用组件库
Vue.use(CkButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
