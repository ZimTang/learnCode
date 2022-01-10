<template>
  <button @click="show">显示/隐藏</button>

<!-- :css="false" 禁用css规则 -->
  <transition @enter="enter" @leave="leave" :appear="true" :css="false">
    <div v-if="isShow">hello world</div>
  </transition>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'gsap-demo',
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    enter(el, done) {
      console.log("enter")
      // 从哪里到默认状态
      gsap.from(el, {
        scale: 0,
        x: 300,
        duration:1,
        rotate:20,
        onComplete: done
      })
    },
    leave(el, done) {
      console.log("leave")
      gsap.to(el, {
        scale: 0,
        x: 300,
        duration:1,
        onComplete: done
      })
    },
    show() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
</style>