// 这个文件 主要是用来创建容器的
// vuex 就是一个工具 yarn add vuex


import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//  Vue.prototype.$store
export default new Vuex.Store({
  strict:true, // 开发时会添加严格模式 上线的时候会移除掉
  state:{ // vuex中的状态，所有组件都应该取这个状态
    count:0
  }
})