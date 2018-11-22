<template>
  <div>
    计数器 
    <component-one></component-one>
    <component-two></component-two>
  </div>
</template>

<script>
import A from '@/vuex-component/A.vue';
import B from '@/vuex-component/B.vue';
export default {
  components:{
    'component-one':A,
    'component-two':B
  }
}
</script>
