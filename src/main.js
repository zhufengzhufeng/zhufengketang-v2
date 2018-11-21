import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入mint-ui   把所有的组件都引入了
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
// 引入icon组件 制作成全局组件
import Icon from '@/components/Icon.vue';
Vue.component(Icon.name,Icon)

// 导入公共样式
import '@/public/index.less'
// 引入路由
import router from './router.js'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
