<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{ message }}</div>
  </div>
</template>

<script>
import useDebounceRef from "./hooks/useDebounceRef"

export default {
  setup() {
    const message = useDebounceRef('hello world',1000)
    return {
      message
    }
  }
}
</script>

<style>
</style>
