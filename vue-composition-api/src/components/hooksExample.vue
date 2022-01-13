<template>
  <div>{{counter}}</div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>import useCounter from "../hooks/useCounter"

export default {
  setup() {
    const { counter, increment, decrement } = useCounter(10)
    return {
      counter,
      increment,
      decrement
    }
  }
}
</script>

<style lang="scss" scoped>
</style>