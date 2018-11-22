// 这个文件 主要是用来创建容器的
// vuex 就是一个工具 yarn add vuex


import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//  Vue.prototype.$store
export default new Vuex.Store({
  strict:true, // 开发时会添加严格模式 上线的时候会移除掉
  state:{ // vuex中的状态，所有组件都应该取这个状态  组件中的data
    count:0
  },
  getters:{ // 这个就是当前vuex数据中的计算属性
    isThree(state){
      return state.count%3?'不是':'是'
    },
    // count(state){
    //   return state.count
    // }
  },
  actions:{ // 我们有可能在一个动作中触发多次mutaion
    MUL({commit},payload){
      // 如果里面是异步的可以写成promise
      commit('ADD', payload)
    },
    MINUS({commit,dispatch},payload){
      // commit 可以提交给mutation,可以写异步
      dispatch('MUL',2);
      setTimeout(() => {
        commit('MINUS', payload);
        commit('ADD',1);
      }, 1000);
    }
  },
  // mutation的缺点 不能写异步代码
  mutations:{ // mutation是一个函数 ,method组件中的method
    'ADD'(state,payload){ // 载荷 提交的传参
        state.count += payload 
    },
    'MINUS'(state, payload) { // 载荷 提交的传参
      state.count -= payload
    }
  }
})