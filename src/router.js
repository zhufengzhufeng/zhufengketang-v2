// 如果默认你没有选择安装vue中的路由 
// yarn add vue-router 
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home/Home.vue';
import About from '@/views/About/About.vue';
import Lesson from '@/views/Lesson/Lesson.vue';
import Profile from '@/views/Profile/Profile.vue';
import Login from '@/views/Login/Login.vue';
import Reg from '@/views/Reg/Reg.vue';
Vue.use(VueRouter); // router-link router-view  Vue.component('router-link')
// this.$route this.$router Vue.prototype.$route
export default new VueRouter({
  mode:'hash',
  routes:[
    { // 解决页面 刷新为/的问题 跳转到首页即可
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component: Home
    },
    {
      path:'/about',
      name:'about',
      component: About
    },
    {
      path:'/lesson',
      name:'lesson',
      component:Lesson,
      meta:{needLogin:true} // 表示这个路由需要登录后才能访问
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/reg',
      name:'reg',
      component:Reg
    }
  ]
})