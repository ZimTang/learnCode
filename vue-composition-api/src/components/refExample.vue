<template>
  <div>
    <div ref="title">hahaha</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { watchEffect } from '@vue/runtime-core'
export default {
  setup () {
    const title = ref(null)

    watchEffect(() => {
      console.log(title.value)
    },{
      // 在dom更新之后执行第一个参数中的回调函数
      flush: 'post'
    })

    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>

</style>