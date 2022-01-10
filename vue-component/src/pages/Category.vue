<template>
  <div>
    category组件
    <button @click="add">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: 'category',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add() {
      this.counter++
    },
  },
}
</script>

<style lang="scss" scoped></style>
