<template>
  <div>
    about组件
    <button @click="add">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name:'about',
    data() {
      return {
        counter:0
      }
    },
    methods: {
      add() {
        this.counter++
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>