<template>
  <div id="app">
    <mt-header fixed title="珠峰课堂" class="header"></mt-header>
    <router-view style="margin-top:50px;"></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="/home" :class="{'is-selected':$route.path.startsWith('/home')}">
        <Icon iconfont="#icon-xingqiu" slot="icon"></Icon>
        首页
      </mt-tab-item>
      <mt-tab-item id="/lesson" :class="{'is-selected':$route.path.startsWith('/lesson')}">
        <Icon iconfont="#icon-react" slot="icon"></Icon>
        我的课程
      </mt-tab-item>
      <mt-tab-item id="/profile" :class="{'is-selected':$route.path.startsWith('/profile')}">
         <Icon iconfont="#icon-xiaolian" slot="icon"></Icon>
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:''
    }
  },
  watch:{ // 监控selected属性的变化，变化后跳转路径
    $route(){ // 当路由变化后把路由的路径 赋予给seleted，selected值改变会触发页面跳转
      this.selected = this.$route.fullPath;
    },
    selected(newVal){
      this.$router.push(newVal);
    }
  }
}
</script>

<style lang="less" scoped>
.icon{fill:red}
.header{
  background: #2a2a2a;
}
</style>
