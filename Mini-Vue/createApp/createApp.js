function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector);
      let isMounted = false;
      let oldVNode = null

      // reactivity -> watchFn
      watchFn(() => {
        if (!isMounted) {
          oldVNode = rootComponent.render()
          // renderer -> mount
          mount(vnode, container);
          isMounted = true
        } else {
          const newVNode = rootComponent.render();
          patch(oldVNode, newVNode);
          oldVNode = newVNode;
        }
      })
    },
  };
}
