<template>
  <div>
    <!-- <button @click="btnClick">按钮</button> -->
    <!-- 一种实现 -->
    <!-- <input type="text" :value="modelValue" @input="btnClick" /> -->
    <!-- 另一种实现 -->
    <!-- <input type="text" v-model="value" /> -->

    <input type="text" v-model="cptMessage" />
    <input type="text" v-model="cptTitle" />
  </div>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: String,
    // message: String,
    title: String
  },
  computed: {
    // value: {
    //   set(val) {
    //     this.$emit("update:modelValue", val)
    //   },
    //   get() {
    //     return this.modelValue
    //   }
    // },
    cptTitle: {
      set(val) {
        this.$emit("update:title", val)
      },
      get() {
        return this.title
      }
    },
    cptMessage: {
      set(val) {
        this.$emit("update:modelValue", val)
      },
      get() {
        return this.modelValue
      }
    }
  },
  emits: ["update:modelValue"],
  methods: {
    btnClick(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>