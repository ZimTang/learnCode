<template>
  <button @click="show">显示/隐藏</button>
  <transition name="demo">
    <div v-show="isShow">hello world</div>
  </transition>
</template>

<script>


export default {
  name: 'demo',
  components: {
  },
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
.demo-enter-from,
.demo-leave-to {
  opacity: 0;
}

.demo-enter-to,
.demo-leave-from {
  opacity: 1;
}

.demo-enter-active,
.demo-leave-active {
  transition: opacity 2s ease;
}
</style>
