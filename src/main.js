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
import router from './router.js';

// 实现全局的过滤器
import moment from 'moment';
Vue.filter('date',function(data,format){
 return moment(Date.now(data)).format(format);
})
Vue.filter('price',function(data){
 return '￥'+ Number(data).toFixed(2);
});

// 拦截器 在每次切换页面的时候 都能获取到当前的切换状态
import axios from '@/api/index'
router.beforeEach((to,from,next)=>{ // next是否向下执行
  if(to.meta.needLogin){
    // 去验证是否登录过
    axios.get('/user/validate').then(res=>{
      next(); // 如果用户登录了 可以继续向下执行 没登陆 去登录页
    });
  }else{
    next(); // 不需要验证是否登录
  }
})

// import Root from './Root.vue' ; // vuex的代码存放在此处
 import store from './store';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// vuex 共享数据的方式 1) eventBus 脆弱 2） vuex (大型应用中使用)

// vuex localStorage (没关系)
// 1.localStorage 会有大小限制 5M  ，vuex 存在应用的内存中
// 2.localStorage 并非响应式  vuex 数据和视图是响应式的