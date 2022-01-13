import { ref } from "vue";

export default function (num) {
  const counter = ref(num);
  const increment = () => {
    counter.value++;
  };

  const decrement = () => {
    counter.value--;
  };

  return {
    counter,
    increment,
    decrement,
  };
}
