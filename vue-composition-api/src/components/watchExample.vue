<template>
  <div>
    <div>{{ info.name }}</div>
    <div>{{ info.age }}</div>
    <div>username: {{ username }}</div>
    <button @click="changeInfo">改变info</button>
    <button @click="changeUsername">改变username</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue"
export default {
  setup() {
    const info = reactive({
      name: 'curry',
      age: 34
    })

    const username = ref("kobe")

    // 第一种写法 侦听watch时，传入getter函数 如果返回的是解构后的属性 不具有深度监听
    watch(() => ({ ...info }), (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {
      deep: true,
      immediate: true
    })

    // 传入一个ref对象
    // watch(username, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    const changeInfo = () => {
      info.age += 1
    }

    const changeUsername = () => {
      username.value += '1'
    }

    return {
      info,
      username,
      changeInfo,
      changeUsername
    }
  }
}
</script>

<style lang="scss" scoped>
</style>