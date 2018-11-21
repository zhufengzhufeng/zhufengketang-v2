<template>
  <div class="container">
    <!--  如果直接访问 lesson-list接口 是不能直接访问的 -->
    <!-- 如果登陆过 通过带有token的的ajax 是可以获取到数据的 -->
    <ul>
      <li v-for="(lesson,key) in lessons" :key="key">
        <!-- ref 帮给循环的列表 是数组 邦定dom元素 ele元素 绑定组件 是组件的实例  -->
        <video :src="lesson.path" ref="video"></video>
        <p>{{lesson.info}}</p>
        <mt-button @click="play(key)" >播放</mt-button>
      </li>
    </ul>
  </div>
</template>
<script>
import * as apis from '@/api/lesson.js'
export default {
  methods:{
   play(key){
     this.$refs.video[key].play();
     this.$refs.video[key].webkitRequestFullScreen();
   }
  },
  data(){
    return {
      lessons:[]
    }
  },
  async created(){
    // 获取我的课程的数据
    let {lessons} = await apis.getMyLesson();
    this.lessons = lessons;
  }
}
</script>
