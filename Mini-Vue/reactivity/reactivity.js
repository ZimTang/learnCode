const targetMap = new WeakMap();
let activeReactiveFn = null;

class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }

  addDepend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

function getDepend(target, key) {
  let map = targetMap.get(target);

  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;
}

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      const depend = getDepend(obj, key);
      depend.addDepend(target);
      return Reflect.get(target, key);
    },
    set(target, key, newValue) {
      const depend = getDepend(target, key);
      Reflect.set(target, key, newValue);
      depend.notify();
    },
  });
}

const obj = {
  name: "curry",
  age: 30,
};

// 测试代码
const objProxy = reactive(obj);

watchFn(function () {
  console.log(objProxy.name, "name------");
});

watchFn(function () {
  console.log(objProxy.age, "age-----");
});

const infoProxy = reactive({
  address: "beijing",
});

watchFn(function () {
  console.log(infoProxy.address, "address-----");
});

objProxy.name = "hello";
objProxy.age = 30;

infoProxy.address = "chongqing";
