import CButton from './src/index.vue'
 
// 为组件提供 install 方法
CButton.install = function (Vue) {
    Vue.component(CButton.name, CButton)
}
 
// 导出组件
export default CButton