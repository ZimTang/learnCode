<template>
  <div>
    <input type="number" step="100" v-model="counter" />
    <div>{{ showCounter }}</div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: "gsap-number",
  data() {
    return {
      counter: 100,
      showNumber: 100
    }
  },
  computed: {
    showCounter() {
      return this.showNumber.toFixed(0)
    }
  },
  watch: {
    counter(newValue) {
      gsap.to(this, { duration: 1, showNumber: newValue })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>