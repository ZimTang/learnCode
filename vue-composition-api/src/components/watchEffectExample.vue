<template>
  <div>
    {{ username }}
    {{ age }}
    <button @click="changeName">修改username</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
export default {
  setup() {
    const username = ref('curry')
    const age = ref(18)

    const stop = watchEffect((onInvalidate) => {
      // 默认会调用一次

      // 清除副作用
      onInvalidate(() => {

      })
      
      console.log('username: ', username.value, ' age: ', age.value)
    })

    const changeName = () => {
      username.value += '1'
    }

    const changeAge = () => {
      age.value += 1
      if (age.value > 20) {
        // 停止侦听
        stop()
      }
    }


    return {
      username,
      age,
      changeName,
      changeAge
    }
  }
}
</script>

<style lang="scss" scoped>
</style>