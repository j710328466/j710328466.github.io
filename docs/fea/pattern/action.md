---
nav:
  title: 前端
  path: /fea
toc: content
group:
  title: 💊 设计模式
  order: 6
  path: /pattern
---

## 行为型

### 状态模式

#### 状态模式

场景：

一台咖啡机，按需求给不同的咖啡：

- 美式咖啡态（american)：只吐黑咖啡
- 普通拿铁态(latte)：黑咖啡加点奶
- 香草拿铁态（vanillaLatte）：黑咖啡加点奶再加香草糖浆
- 摩卡咖啡态(mocha)：黑咖啡加点奶再加点巧克力

```js
import React, { useRef, useEffect } from 'react';

class CoffeeMachine {
  constructor() {
    this.state = 'init';
    this.leftMilk = '500ml';
  }

  // 美式
  american() {
    // 尝试在行为函数里拿到咖啡机实例的信息并输出
    console.log('咖啡机现在的牛奶存储量是:', this.leftMilk);
    console.log('我只吐黑咖啡');
    return '美式';
  }

  // 普通拿铁
  latte() {
    this.american();
    console.log('加点奶');
    return '普通拿铁';
  }

  // 香草拿铁
  vanillaLatte() {
    this.latte();
    console.log('再加香草糖浆');
    return '香草拿铁';
  }

  // 摩卡
  mocha() {
    this.latte();
    console.log('再加巧克力');
    return '摩卡';
  }

  changeState(state) {
    this.state = state;
    if (!this[state]) {
      return;
    }
    return this[state]();
  }
}

const mk = new CoffeeMachine();

export default () => <div>咖啡类型：{mk.changeState('mocha')}</div>;
```

### 观察者模式（发布订阅者模式）

定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使它们能够自动更新自己，当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。

#### 简单版

```js
import React from 'react';
// 主题 保存状态，状态变化之后触发所有观察者对象
class Publisher {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  notifyAllObservers() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
  attach(observer) {
    this.observers.push(observer);
  }
}

// 观察者
class Observer {
  constructor(name, publisher) {
    this.name = name;
    this.publisher = publisher;
    this.publisher.attach(this);
  }
  update() {
    console.log(`${this.name} 更新, state: ${this.publisher.getState()}`);
  }
}

// 测试
let pub = new Publisher();
let o1 = new Observer('o1', pub);
let o2 = new Observer('02', pub);

pub.setState(12);

export default () => null;
```

#### 复杂版

```js
// 定义发布者
class Publisher {
  constructor() {
    this.observers = []
    console.log('发布者创建-执行')
  }

  // 增加订阅者
  add(observer) {
    console.log('增加订阅者-执行')
    this.observers.push(observer)
  }

  // 移除订阅者
  remove(observer) {
    console.log('发布者移除-执行')
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1)
      }
    })
  }

  // 通知所有订阅者
  notify() {
    console.log('通知所有订阅者-执行')
    this.observers.forEach(observer => {
      observer.update(this)
    })
  }
}

// 定义订阅者类
class Observer {
  constructor() {
    console.log('订阅者创建-执行')
  }

  update() {
    console.log('订阅者被通知了！！')
  }
}

// 定义一个具体的需求文档发布类
class ProPublisher extends Publisher {
  constructor() {
    super()
    // 初始化需求文档
    this.proState = null
    this.observers = []
    console.log('业务订阅者创建-执行')
  }

  getState() {
    console.log('业务获取状态-执行')
  }

  setState(state) {
    console.log('业务设置状态-执行')
    this.proState = state
    this.notify()
  }
}

// 定义一个监听者
class ProObserver extends Observer {
  constructor() {
    super()
    // 需求文档一开始还不存在，prd初始为空对象
    this.prdState = {}
    console.log('ProObserver created')
  }

  // 重写一个具体的update方法
  update(publisher) {
    console.log('ProObserver 已执行')
    // 更新需求文档
    this.prdState = publisher.getState()
    // 调用工作函数
    this.work()
  }

  // work方法，一个专门搬砖的方法
  work() {
    // 获取需求文档
    const prd = this.prdState
    // 开始基于需求文档提供的信息搬砖。。。
    ...
    console.log('996 开始了...')
  }
}

// 创建订阅者：前端开发C
const C = new ProObserver()
// 创建订阅者：服务端开发小A
const A = new ProObserver()
// 创建订阅者：测试同学小B
const B = new ProObserver()
// 韩梅梅出现了
const hanMeiMei = new PrdPublisher()
// 需求文档出现了
const prd = {
    // 具体的需求内容
    ...
}
// 韩梅梅开始拉群
hanMeiMei.add(C)
hanMeiMei.add(A)
hanMeiMei.add(B)
// 韩梅梅发送了需求文档，并@了所有人
hanMeiMei.setState(prd)
```

### 策略模式

和状态模式的区别，策略模式更偏向算法，计算逻辑的封装，状态更偏向定值的判断

#### 简单版

业务场景如下：

马上大促要来了，我们本次大促要做差异化询价。啥是差异化询价？就是说同一个商品，我通过在后台给它设置不同的价格类型，可以让它展示不同的价格。具体的逻辑如下：

- 当价格类型为“预售价”时，满 100 - 20，不满 100 打 9 折
- 当价格类型为“大促价”时，满 100 - 30，不满 100 打 8 折
- 当价格类型为“返场价”时，满 200 - 50，不叠加
- 当价格类型为“尝鲜价”时，直接打 5 折

```jsx
import React, { useRef, useEffect } from 'react';

class CalculateMoney {
  // 处理预热价
  prePrice(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 20;
    }
    return originPrice * 0.9;
  }

  // 处理大促价
  onSalePrice(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  }

  // 处理返场价
  backPrice(originPrice) {
    if (originPrice >= 200) {
      return originPrice - 50;
    }
    return originPrice;
  }

  // 处理尝鲜价
  freshPrice(originPrice) {
    return originPrice * 0.5;
  }

  /**
   * type: pre 预售 | onSale 大促 | back 返场 | fresh 尝鲜
   * money: 原始金额
   **/
  static get(type, money) {
    switch (type) {
      case 'pre':
        return this.prototype.prePrice(money);
        break;
      case 'onSale':
        return this.prototype.onSalePrice(money);
        break;
      case 'back':
        return this.prototype.backPrice(money);
        break;
      case 'fresh':
        return this.prototype.freshPrice(money);
        break;
      default:
        return;
    }
  }
}

let calculateMoney = CalculateMoney.get('back', 10000);
// => 4000000

export default () => <div>初始金额：10000，策略模式：{calculateMoney}</div>;
```

### 迭代器模式

少有的目的性极强的模式。

举例：for...of...就是对 next 的反复调用。

```js
// 自带迭代器语法
const arr = [1,2,3]
const iterator = arr[Symbol.iterator]()

iterator.next() -> { value: 1, done: false}
iterator.next() -> { value: 2, done: false}
iterator.next() -> { value: 3, done: false}
iterator.next() -> { value: undefined, done: true}

// 手撸版迭代器,闭包
const itaratorFunc = (arr: any  ) => {
  const idx = 0
  const len = arr.length

  if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error('请输入正确的数组格式')

  return {
    next: () => {
      var done = idx >= len
      var value = !done ? list[idx++] : undefined

      return {
        done,
        value
      }
    }
  }
}

const iterator = itaratorFunc([1,2,3])

const iterator.next()
const iterator.next()
const iterator.next()
```
