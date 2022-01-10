<template>
  <button @click="show">显示/隐藏</button>

<!-- 一些生命周期钩子 -->
  <transition name="demo" @before-enter="beforeEnter" @enter="enter">
    <div v-if="isShow">hello world</div>
  </transition>
</template>

<script>
export default {
  name: 'animateHook',
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    show() {
      this.isShow = !this.isShow
    },
    beforeEnter() {
      console.log("beforeEnter")
    },
    enter() {
      console.log("enter")
    }
  }
}
</script>

<style>
.demo-enter-active {
  animation: bounce 1s ease;
}

.demo-leave-active {
  animation: bounce 1s ease reverse;
}


@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>