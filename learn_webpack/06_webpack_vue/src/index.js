import { sum } from './js/math'
import App from './vue/App.vue'
const { priceFormat } = require('./js/format')
import { createApp } from 'vue/dist/vue.esm-bundler'

import './js/element'

console.log(sum(1, 1))
console.log(priceFormat())

const message = '123'
const arr = ['1']

arr.forEach(item => {
  console.log(item)
})

// const app = createApp({
//   template: '<h2>我是createapp</h2>',
//   data() {
//     return {
//       message: '123',
//     }
//   },
// })


const app = createApp(App)
app.mount('#app')
