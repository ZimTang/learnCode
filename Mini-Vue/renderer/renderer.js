const h = (tag, props, children) => {
  // vnode -> Object
  return {
    tag,
    props,
    children,
  };
};

const mount = (vnode, container) => {
  // 1. create element
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2. handle Props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (typeof value === "string") {
        el.setAttribute(key, value);
      } else {
        el.addEventListener(key.slice(2).toLowerCase(), value);
      }
    }
  }

  // 3. handle children
  if (typeof vnode.children === "string") {
    el.textContent = vnode.children;
  } else {
    vnode.children.forEach((item) => {
      mount(item, el);
    });
  }

  // 4. mount on container
  container.appendChild(el);
};

const patch = (n1, n2) => {
  // 1. diff tag
  if (n1.tag !== n2.tag) {
    const n1ElParent = n1.el.parent;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    const el = (n2.el = n1.el);

    const oldProps = n1.props || {};
    const newProps = n2.props || {};

    // 2. handle newProp
    for (const key in newProps) {
      const newValue = newProps[key];
      const oldValue = oldProps[key];
      // diff propsValue
      if (newValue !== oldValue) {
        if (typeof newValue === "string") {
          // string
          el.setAttribute(key, newValue);
        } else {
          // event
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        }
      }
    }

    // 3. delete oldProp
    for (const key in oldProps) {
      const oldValue = oldProps[key];
      // 3.1 remove all event
      if (key.startsWith("on")) {
        el.removeEventListener(key.slice(2).toLowerCase(), oldValue);
      }
      // 3.2 key not in newProps
      if (!(key in newProps)) {
        el.removeAttribute(key);
      }
    }

    // 4.handle children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];

    if (typeof newChildren === "string") {
      // 4.1 newChildren -> String oldChildren -> String
      if (typeof oldChildren === "string") {
        el.textContent = newChildren;
      } else {
        // 4.2 newChildren -> String oldChildren -> Array
        el.innerHTML = newChildren;
      }
    } else {
      // 4.3 newChildren -> Array oldChildren -> String
      if (typeof oldChildren === "string") {
        newChildren.forEach((item) => {
          mount(item, el);
        });
      } else {
        // 4.4 newChildren -> Array oldChildren -> Array
        const commonLength = Math.min(oldChildren.length, newChildren.length);
        // 4.4.1 patch all
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }

        // 4.4.2 newChildren.length > oldChildren.length
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((item) => {
            mount(item, el);
          });
        }

        // 4.4.3 newChildren.length < oldChildren.length
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach((item) => {
            el.removeChild(item.el);
          });
        }
      }
    }
  }
};
