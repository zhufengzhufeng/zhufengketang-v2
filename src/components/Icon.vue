<template>
   <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconfont"></use>
    </svg>
</template>

<script>
export default {
  name:'Icon',
  props:['iconfont']
}
</script>
