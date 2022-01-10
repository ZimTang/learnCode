<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <button @click="shuffleNum">数字洗牌</button>
    <transition-group tag="p" name="test">
      <span class="item" v-for="(item) in numbers" :key="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'list-animate',
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7],
      numCounter: 7
    }
  },
  methods: {
    addNum() {
      this.numbers.splice(this.randomIndex(), 0, ++this.numCounter)
    },
    shuffleNum() {
      this.numbers = _.shuffle(this.numbers)
    },
    removeNum() {
      this.numbers.splice(this.randomIndex, 1)
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length)
    }
  },
}
</script>

<style scoped>
.item {
  margin-right: 10px;
  /* 解决没有显示完全的时候，位移动画不显示的问题 */
  display: inline-block;
}

.test-enter-from,
.test-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.test-enter-active,
.test-leave-active {
  transition: all 1s ease;
}

.test-leave-active {
  /* 解决移除的元素在动画中 仍然展位的问题 */
  position: absolute;
}

/* 解决其他元素的位移问题 */
.test-move {
  transition: transform 1s ease;
}
</style>