<template>
  <div class="app">
  <!-- <demo></demo> -->
  <!-- <animateHook></animateHook> -->
  <!-- <gsap-demo></gsap-demo> -->
  <!-- <gsap-number></gsap-number> -->
  <!-- <list-animate></list-animate> -->
  <list-trans></list-trans>
  </div>
</template>

<script>
// import demo from "./component/过渡动画.vue"
// import demo from './component/帧动画.vue'
import animateHook from "./component/animateHook.vue"
import gsapDemo from "./component/gsap的使用.vue"
import gsapNumber from './component/gsap实现数字变化.vue'
import listAnimate from './component/列表动画的使用.vue'
import listTrans from './component/列表的交错过渡.vue'
export default {
  name:'App',
  components: {
    // demo,
    animateHook,
    gsapDemo,
    gsapNumber,
    listAnimate,
    listTrans
  }
}
</script>

<style>
  .app{
    width: 200px;
    margin: 0 auto;
  }
</style>