<template>
  <div>
    <div>{{b}}</div>
    <button @click="change">修改</button>
  </div>
</template>

<script>
// 我们可以将 vuex数据映射到当前组件的状态上或者计算属性上
// vue提供了一个辅助函数 能快速的取vuex中的值 mapXXX
import { mapState ,mapMutations} from "vuex";
export default {
  // mapMuataions 相当于把vuex中的函数拿到了组件的methods中，我可以直接调用这个函数
  methods: {
    ...mapMutations(['ADD']),  
    change() {
      // 不能直接修改容器中的状态
      this['ADD'](2);
      // this.$store.commit('ADD',2);
    }
  },
  computed: {
    // mapState 函数返回的是一个对象 {count:function}
    //  ...mapState(['count']) //把vuex的值映射到计算属性上
    //  ...mapState({b:'count'}); // 把值的名字改成b 映射到数据上
    // (最好在开发中不要适应mapState) getters
    ...mapState({ b: "count" }),
    c() {
      return this.$store.state.count;
    }
  },
  data() {
    return {};
  }
};
</script>
