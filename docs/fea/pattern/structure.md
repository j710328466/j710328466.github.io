---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 设计模式
  order: 4
---

## 结构型

结构型模式封装的是对象之间组合方式的变化，目的在于灵活地表达对象间的配合与依赖关系；

### 适配器模式

将一个类的接口转化为另外一个接口，以满足用户需求，使类之间接口不兼容问题通过适配器得以解决。

```js
import react from 'react';

class Adapter {
    constructor(config) {
        if (!config || typeof config === 'object') {
            return this.reLoad(config)
        } else {
            throw new Error('传递的参数必须为一个对象！')
        }
    }

    reLoad(arr) {
        let newObj = {}

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            newObj[item.name] = item.age
        }
        return newObj
    }
}

let aer = new Adapter([{name: 'david', age: 2}])
// => {david: 2}
```

### 装饰器模式

- 动态地给某个对象添加一些额外的职责，，是一种实现继承的替代方案
- 在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，而不会影响从这个类中派生的其他对象
- 遵循拓展不修改的 SOLID 原则

#### 简单版

```jsx
import React, { useRef, useState, useEffect } from 'react';

class Modal {
  constructor(opt = {}) {
    const { dom } = opt

    this.dom = dom
  }

  show() {
    this.dom.innerHTML = '卧槽';
    this.dom.style.display = 'block'
    this.dom.style.width = '200px'
    this.dom.style.textAlign = 'center'
  }

  hide() {
    this.dom.style.display = 'none';
  }
}

class DecoratorModal {
  constructor(_oldModal) {
    this._oldModal = _oldModal
  }

  show() {
    this._oldModal.show()

    this._oldModal.dom.innerHTML = '添加背景+文字减淡+圆角'
    this._oldModal.dom.style.color = '#aaa'
    this._oldModal.dom.style.borderRadius = '5px'
  }

  hide() {
    this._oldModal.hide()
  }
}

export default () => {
  const modalRef = useRef(null)
  const [modal, setModal] = useState(null)
  // 案例：原本有个按钮，新的需求要将按钮样式置灰，并且文案改为 快去登录
  const openModal = () => {
    modal.show()
  }

  const hideModal = () => {
    modal.hide()
  }

  const decoratorModal = () => {
    let dom = new DecoratorModal(modal)

    setModal(dom)
  }

  const normalModal = () => {
    let dom = new Modal({
      dom: modalRef.current
    })

    setModal(dom)
  }

  useEffect(() => {
    normalModal()
  }, []) 

  return (
    <div className="decorator">
      <button onClick={openModal} >打开弹框</button>
      <button onClick={hideModal} >关闭弹框</button>
      <button onClick={decoratorModal} >添加适配器</button>
      <button onClick={normalModal} >清除适配器</button>
      <div ref={modalRef} style={{ display: 'none', marginTop: '20px', padding: '10px 20px', border: '1px solid #eee'}} ></div>
    </div>
  )
};

```

## 代理模式

是为一个对象提供一个代用品或占位符，以便控制对它的访问

### ES5 版

```js
/**
 * 代理模式
 */
export default class ProxyPro {
    constructor(args) {
        return new Proxy(args, {
            get: function (target, key, receiver) {
                // console.log(target, key, receiver);
                console.log(`获取 ${key}`)
                return Reflect.get(target, key, receiver)
            },
            set: function (target, key, value, reciver) {
                console.log(`设置 ${key} 为 ${value}`)
                return Reflect.set(target, key, value, reciver)
            }
        })
    }
}
```

#### ES5 版

```js
let Flower = function() {}
let xiaoming = {
  sendFlower: function(target) {
    let flower = new Flower()
    target.receiveFlower(flower)
  }
}
let B = {
  receiveFlower: function(flower) {
    A.listenGoodMood(function() {
      A.receiveFlower(flower)
    })
  }
}
let A = {
  receiveFlower: function(flower) {
    console.log('收到花'+ flower)
  },
  listenGoodMood: function(fn) {
    setTimeout(function() {
      fn()
    }, 1000)
  }
}
xiaoming.sendFlower(B)
```
