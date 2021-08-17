# lsjui

## 使用
```shell
// 1、下载
npm install lsjui
```
```js
// 完整引入
import lsjui from 'lsjui';       
import 'lsjui/lib/lsjui.css';     //样式
Vue.use(lsjui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
### 本地调试
```
//本地启动，查看调试使用
npm run serve
```

### 打包
```
npm run lib
```

### 发布
```shell
npm publish
```

### packages 存放封装的组件
开发规范
- packages 目录下，创建组件文件夹文件夹下包含src文件夹和index.js文件，下面做组件开发；
- src/ 下添加创建组件（vue文件）；
- index.js 创建组件 install 方法；
