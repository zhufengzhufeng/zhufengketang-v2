<template>
  <div class="container">
    <mt-swipe :auto="4000" class="swiper">
      <mt-swipe-item v-for="(slider,index) in sliders" :key="index">
        <img :src="slider.path" alt="">
      </mt-swipe-item>
    </mt-swipe>  
    <ul class="lesson-list">
      <li v-for="lesson in lessons" :key="lesson.id">
        <img :src="lesson.url" alt="">  
        <h4>{{lesson.lesson}}</h4>
        <strong>{{lesson.price | price}}</strong>
        <span>{{lesson.time | date('YYYY-MM-DD')}}</span>
      </li>  
    </ul> 
  </div>
</template>
<script>
import * as apis from '@/api/home.js'
export default {
  data(){
    return {
      sliders:[],
      lessons:[]
    }
  },
  mounted(){
    apis.getSlider().then(sliders=>{
      this.sliders = sliders; // 获取轮播图数据
    },function (err) {
      console.log(err);
    });
    apis.getLesson().then(lessons=>{
      this.lessons = lessons; // 获取全部课程列表
    });
  }
}
</script>
<style lang="less" scoped>
img{max-width: 100%}
.swiper{height: 95px;}
.lesson-list{
  margin: 20px auto;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    width: 48%;
    margin-bottom: 5px;
  }
}
</style>
