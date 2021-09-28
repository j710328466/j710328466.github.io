---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 设计模式
  order: 6
---

## 行为型

### 发布订阅者模式

定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使它们能够自动更新自己，当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。

#### 简单版

```js
// 主题 保存状态，状态变化之后触发所有观察者对象
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
  attach(observer) {
    this.observers.push(observer)
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

// 测试
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('02', s)

s.setState(12)
```

#### 复杂版

```js
/**
 * 发布订阅者模式
 */
export default class EventEmitter {
    constructor() {
        this.subs = {}
    }

    on(event, cb) {
        (this.subs[event] || (this.subs[event] = [])).push(cb)
    }

    trigger(event, ...args) {
        this.subs[event] &&
            this.subs[event].forEach(cb => {
                cb(...args)
            })
    }

    once(event, onceCb) {
        const cb = (...args) => {
            onceCb(...args)
            this.off(event, onceCb)
        }
        this.on(event, cb)
    }

    off(event, offCb) {
        if (this.subs[event]) {
            let index = this.subs[event].findIndex(cb => cb === offCb)
            this.subs[event].splice(index, 1)
            if (!this.subs[event].length) delete this.subs[event]
        }
    }
}
```

### 策略模式

```js
class CalculateMoney {
    constructor(type, money) {
        this.money = money
        return this.switchStrategy(type, money)
    }

    /**
     * 
     * @param {string} type 类型
     * @param {number} money 金额 
     */
    switchStrategy(type, money) {
        let tp = type.toLocaleLowerCase()
        if (tp === 'a') {
            return this.money = money * 100
        } else if (tp === 'b') {
            return this.money = money * 200
        } else if (tp === 'c') {
            return this.money = money * 300
        } else {
            return this.money = money * 400
        }
    }
}


let calculateMoney = new CalculateMoney('', 10000)
// => 4000000
```
