// 如果默认你没有选择安装vue中的路由 
// yarn add vue-router 
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home/Home.vue';
import About from '@/views/About/About.vue';
import Lesson from '@/views/Lesson/Lesson.vue';
import Profile from '@/views/Profile/Profile.vue'
Vue.use(VueRouter); // router-link router-view  Vue.component('router-link')
// this.$route this.$router Vue.prototype.$route
export default new VueRouter({
  mode:'hash',
  routes:[
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
      component:Lesson
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile
    }
  ]
})