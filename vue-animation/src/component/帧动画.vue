<template>
  <button @click="show">显示/隐藏</button>
  <!-- <transition name="demo" type="animation" :duration="{ enter: 800, leave: 1000 }">
    <div v-show="isShow">hello world</div>
  </transition>-->

  <transition name="demo" type="animation" mode="out-in" :appear="true">
    <div v-if="isShow">hello world</div>
    <div v-else>你好 世界</div>
  </transition>
</template>

<script>
export default {
  name: 'frameAnimation',
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    show() {
      this.isShow = !this.isShow
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

.demo-enter-from,
.demo-leave-to {
  opacity: 0;
}

.demo-enter-active,
.demo-leave-active {
  transition: opacity 2s ease;
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