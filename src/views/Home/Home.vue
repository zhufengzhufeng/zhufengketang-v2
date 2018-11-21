<template>
  <div class="container">
   <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>   
  </div>
</template>
<script>
import * as apis from '@/api/home.js'
export default {
  mounted(){
    apis.getSlider().then(res=>{
      console.log(res);
    },function (err) {
      console.log(err);
    })
  }
}
</script>
