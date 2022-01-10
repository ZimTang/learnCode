<template>
  <div>
    <template v-for="(item,index) in names">
      <slot name="names" :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<script>
  export default {
    name:'child-cpn',
    props:['names']
  }
</script>

<style lang="scss" scoped>

</style>