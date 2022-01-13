<script>
import { h } from 'vue'
import hExampleChild from './hExampleChild.vue'
export default {
  // h函数的使用
  render() {
    // 基本使用
    // return h("h2", { class: "title" }, "hello render")

    // 插槽(作用域插槽和具名插槽)
    return h("div", null, [
      h(hExampleChild, null, {
        default: props => h("span", null, `app传入到HelloWorld中的内容: ${props.name}`)
      })
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>