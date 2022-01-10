<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">

      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div>
      <slot name="curry"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'nav-bar'
  }
</script>

<style  scoped>
.nav-bar{
  display: flex;
  justify-content: space-around;
}
</style>