<template>
    <header>...</header>
    <main v-bind="$attrs">...</main>
    <footer>...</footer>
    <button @click="add">+</button>
</template>

<script>
import emitter from "../utils/eventbus"
export default {
  name: 'date-picker',
  inheritAttrs: false,
  methods: {
    add() {
      emitter.emit('add',123)   
    }
  },
}
</script>

<style lang="scss" scoped></style>
