import Vue from 'vue'
import App from './App.vue'
import { Button, Select } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

/* [Button].forEach(item =>
  Vue.use(item)
); */
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

 // 导入组件库
import CButton from '../packages'
// 使用组件库
Vue.use(CButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
