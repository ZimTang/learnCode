<template>
  <div>
    <input v-model="keywords" />
    <transition-group
      tag="ul"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <li v-for="(item,index) in showList" :key="item" :data-index="index">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'list-trans',
  data() {
    return {
      list: ["abc", "cba", "nba", "why", "lilei", "hmm", "kobe", "james"],
      keywords: '',
    }
  },
  computed: {
    showList() {
      return this.list.filter(item => item.indexOf(this.keywords) != -1)
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        delay: el.dataset.index * 0.5,
        height: "1.5em",
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        delay: el.dataset.index * 0.5,
        height: "0em",
        onComplete: done
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>