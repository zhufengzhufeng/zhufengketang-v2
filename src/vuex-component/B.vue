<template>
<div>
  <div>{{this.$store.getters.isThree}}
  {{isThree}}
  </div>
  <button @click="m">减法</button>
</div>

</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default{
  computed:{
    ...mapGetters(['isThree'])
  },
  methods:{
    ...mapActions(['MINUS']),
    m(){
      // this.$store.dispatch('MINUS',3)
      this['MINUS'](3)
    }
  }
}
</script>
