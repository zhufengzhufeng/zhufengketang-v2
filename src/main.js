import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入mint-ui   把所有的组件都引入了
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);


import router from './router.js'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
