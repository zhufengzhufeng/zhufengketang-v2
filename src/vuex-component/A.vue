<template>
  <div>
    <div>{{b}}</div>
    <button @click="change">修改</button>
  </div>
</template>

<script>
// 我们可以将 vuex数据映射到当前组件的状态上或者计算属性上
// vue提供了一个辅助函数 能快速的取vuex中的值 mapXXX
import {mapState} from 'vuex';
export default {
  mounted(){
    console.log()
  },
  methods:{
    change(){
      // 不能直接修改容器中的状态
      this.$store.state.count++;
    }
  },
  computed:{
    // mapState 函数返回的是一个对象 {count:function}
    //  ...mapState(['count']) //把vuex的值映射到计算属性上
    //  ...mapState({b:'count'}); // 把值的名字改成b 映射到数据上
    // (最好在开发中不要适应mapState) getters
    ...mapState({b:'count'}),
    c(){
      return this.$store.state.count
    },
  },
  data(){
    return {
     
    }
  }
}
</script>
