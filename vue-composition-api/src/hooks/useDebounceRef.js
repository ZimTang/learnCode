import { customRef } from "vue";

export default function (value,delay = 300) {
  let timer = null
  return customRef((track, trigger) => {
    return {
      get() {
        // 收集依赖
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          // 触发变化
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
