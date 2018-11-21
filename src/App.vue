<template>
  <div id="app">
    <mt-header fixed title="珠峰课堂" class="header"></mt-header>
    <router-view style="margin-top:50px;"></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <Icon iconfont="#icon-xingqiu" slot="icon"></Icon>
        tab1
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <Icon iconfont="#icon-react" slot="icon"></Icon>
        tab2
      </mt-tab-item>
      <mt-tab-item id="tab3">
         <Icon iconfont="#icon-xiaolian" slot="icon"></Icon>
        tab3
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:'tab2'
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
