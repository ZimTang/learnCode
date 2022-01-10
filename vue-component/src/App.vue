<template>
  <date-picker data-status="activated" @change="demo"></date-picker>
  <!-- <my-slot-cpn-vue>
    <h3>组件插槽</h3>
    <strong>我是strong</strong>
  </my-slot-cpn-vue>-->
  <!-- 插槽的使用 -->
  <nav-bar>
    <template v-slot:left>
      <div>我是左边</div>
    </template>
    <template v-slot:center>
      <div>我是中间</div>
    </template>
    <!-- 简写 -->
    <template #right>
      <div>我是右边</div>
    </template>
    <!-- 动态插槽 -->
    <template v-slot:[name]>
      <div>我是curry</div>
    </template>
  </nav-bar>

  <!-- 作用域插槽 (独占默认插槽)-->
  <!-- <child-cpn-vue :names="names" v-slot="slotProps">
    <button>{{slotProps.item}} - {{slotProps.index}}</button>
  </child-cpn-vue>-->

  <!-- <child-cpn-vue :names="names">
    <template v-slot:names="slotProps">
      <button>{{slotProps.item}} - {{slotProps.index}}</button>
    </template>
  </child-cpn-vue>-->
  <button
    v-for="(item) in tabs"
    :key="item"
    @click="itemClick(item)"
    :class="{ active: item == currentTab }"
  >{{ item }}</button>

  <!-- 动态组件 -->
  <!-- <component :is="currentTab"></component> -->

  <!-- keep-alive -->
  <keep-alive include="about">
    <component :is="currentTab"></component>
  </keep-alive>

  <!-- 异步组件 -->
  <async-category></async-category>

  <!-- v-model -->
  <!-- <input type="text" :value="message" @input="message = $event.target.value" /> -->

  <!-- 组件上使用 v-model -->
  <!-- <my-input v-model="message"></my-input>
  <div>my-input的{{ message }}</div>-->
  <!-- 相当于 -->
  <!-- <my-input :modelValue="message" @update:model-value="message = $event"></my-input> -->

  <!-- 自定义组件绑定两个v-model -->
  <my-input v-model="message" v-model:title="title"></my-input>
  <div>message:{{ message }}</div>
  <div>title:{{ title }}</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import datePicker from './components/date-picker.vue'
import emitter from './utils/eventbus'
import MySlotCpnVue from './components/MySlotCpn.vue'
import NavBarVue from './components/NavBar.vue'
import NavBar from './components/NavBar.vue'
import ChildCpnVue from './components/ChildCpn.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'
import Loading from './components/Loading.vue'
import MyInput from './components/MyInput.vue'
// import AsyncCategory from './pages/AsyncCategory.vue'

// 异步引入组件 会被打包到一个单独的包里面
// const AsyncCategory = defineAsyncComponent(() => import('./pages/AsyncCategory.vue'))
// 另一种写法
const AsyncCategory = defineAsyncComponent({
  loader: () => import('./pages/AsyncCategory.vue'),
  // 加载的时候显示的组件
  loadingComponent: Loading,
  // 在显示loading组件之前，要等待多少时间
  delay: 2000,
  /**
   * 错误的回调
   * @param {*} err 错误信息
   * @param {function} retry 调用它，尝试重新加载
   * @param {function} fail 
   * @param {*} attempts 记录尝试的次数
   */
  onError(err, retry, fail, attempts) {

  }
})

export default {
  components: {
    datePicker,
    MySlotCpnVue,
    NavBarVue,
    NavBar,
    ChildCpnVue,
    Home,
    About,
    Category,
    AsyncCategory,
    MyInput
  },
  name: 'App',
  data() {
    return {
      name: 'curry',
      names: ['curry', 'james', 'harden'],
      tabs: ['home', 'about', 'category'],
      currentTab: 'home',
      message: "message",
      title: "title"
    }
  },
  created() {
    emitter.on('add', info => {
      console.log(info)
    })

    // emitter.on('*', (type, info) => {
    //   console.log(type, info)
    // })
  },
  methods: {
    demo(event) {
      console.log(event.target.value)
    },
    itemClick(item) {
      this.currentTab = item
    },
  },
}
</script>

<style>
.active {
  color: red;
}
</style>
