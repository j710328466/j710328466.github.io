---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 设计模式
  order: 2
---

## 创建型

创建型模式封装了创建对象过程中的变化，它做的事情就是将创建对象的过程抽离；

### 工厂模式

工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

#### 简单版

场景是我需要创建500个用户，他们分别有不同的角色，页面访问不同权限。

```js
 class User {
    constructor(name, type, viewPage) {
        this.type = type
        this.name = name
        this.viewPage = viewPage
    }
}

export default function getUserTypeFactory(name, type) {
    let viewPage
    switch (type) {
        case 'superAdmin':
            viewPage = ['首页', '通讯录', '发现页', '应用数据', '权限管理']
            break;
        case 'admin':
            viewPage = ['首页', '通讯录', '发现页', '应用数据']
            break;
        case 'normal':
            viewPage = ['首页', '通讯录', '发现页']
            break;
        default:
            throw new Error('参数错误，可选参数：superAdmin、admin、normal')
    }

    return new User(name, type, viewPage)
}
```

### 抽象工厂模式

结合上文中的工厂，发现它不完全遵循 **SOLID法则** 中的开放封闭原则：对拓展开放，对修改封闭。

这篇文章我用一个手机从出产到上市使用的一个创建过程，首先我们知道，手机由两部分组成 **软件** ，**硬件**：

```js
// 1-1. 手机初始化(抽象工厂)：只定义
class AbstractFactory {
  // 操作系统接口
  createOS() {
    throw new Error('抽象方法不允许直接调用，你需要将我重写')
  }

  // 提供硬件接口
  createHardWare() {
    throw new Error('抽象方法不允许直接调用，你需要将我重写')
  }
}

// 1-2. 具体工厂：负责干活
class FakeStarFactory extends AbstractFactory {
  // 操作系统接口
  createOS() {
    // 安卓系统实例
    return new AndroidOS()
  }

  // 提供硬件接口
  createHardWare() {
    // 高通硬件实例
    return new QualcommHardWare()
  }
}

// 2-1. 抽象产品（软件）：只定义
class OS {
  controlHardWare() {
    throw new Error('抽象方法不允许直接调用，你需要将我重写')
  }
}

// 2-2. 具体产品：安卓操作系统
class AndroidOS extends OS {
  controlHardWare() {
    console.log('我会用安卓的方法去运行操作系统')
  }
}

// 2-2. 具体产品：苹果操作系统
class AppleOS extends OS {
  controlHardWare() {
    console.log('我会用苹果的方法去运行操作系统')
  }
}

// 3-1. 抽象产品（硬件）：只定义
class HardWare {
  // 手机硬件的共性方法：根据命令运转
  operateByOrder() {
    throw new Error('抽象方法不允许直接调用，你需要将我重写')
  }
}

// 3-2. 具体产品（硬件）：高通
class QualcommHardWare extends HardWare {
  operateByOrder() {
      console.log('我会用高通的方式去运转')
  }
}

// 3-2. 具体产品（硬件）：英特尔
class InterHardWare extends HardWare {
  operateByOrder() {
      console.log('我会用英特尔的方式去运转')
  }
}

// 4. 创建手机
const myMobile = new FakeStarFactory();
// 初始化操作系统
const myOS = myMobile.createOS();
// 初始化硬件
const myHardWare = myOS.createHardWare();

// 启动操作系统
myOS.controlHardWare()

// 唤醒硬件命令
myHardWare.operateByOrder()
```

以上就是我们通过场景创建的四个重要的角色：

* 抽象工厂（抽象类，它不能被用于生成具体实例）： 用于声明最终目标产品的共性。在一个系统里，抽象工厂可以有多个（大家可以想象我们的手机厂后来被一个更大的厂收购了，这个厂里除了手机抽象类，还有平板、游戏机抽象类等等），每一个抽象工厂对应的这一类的产品，被称为“产品族”。
* 具体工厂（用于生成产品族里的一个具体的产品）： 继承自抽象工厂、实现了抽象工厂里声明的那些方法，用于创建具体的产品的类。
* 抽象产品（抽象类，它不能被用于生成具体实例）： 上面我们看到，具体工厂里实现的接口，会依赖一些类，这些类对应到各种各样的具体的细粒度产品（比如操作系统、硬件等），这些具体产品类的共性各自抽离，便对应到了各自的抽象产品类。
* 具体产品（用于生成产品族里的一个具体的产品所依赖的更细粒度的产品）： 比如我们上文中具体的一种操作系统、或具体的一种硬件等。

总结下来，抽象工厂就类似 typescript 里面的 interface 申明对象。



### 单例模式

保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式。

#### 简单版

```js
// ------------------- 单例模式 -------------------
export default class Singleton {
    show() {
        console.log('我是一个单例对象')
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton()
        }
        return this.instance
    }
}

const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()

s1 === s2 // => true
```

#### 进阶版

实现一个 Storage

```js
class Storage {
  constructor() {
    this.instance = null
  }

  static getInstance() {
    if (!this.instance) {
        this.instance = new Storage()
    }
    return this.instance
  }

  getItem(key) {
    return localStorage.getItem(key)
  }

  setItem(key, value) {
    return localStorage.setItem(key, value)
  }
}

```

### 构造器模式

原型模式不仅是一种设计模式，它还是一种编程范式（programming paradigm），是 JavaScript 面向对象系统实现的根基。

```js
// 一个构造函数
class Asshole {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    console.log(`I'm asshole ${this.name},${this.age} years old.`)
  }
}

const me = new Asshole('json', 28)
```

**谈原型模式，其实是谈原型范式**，原型编程范式的核心思想就是利用实例来描述对象，用实例作为定义对象和继承的基础。在 JavaScript 中，原型编程范式的体现就是基于原型链的继承。这其中，对 **原型、原型链** 的理解是关键。

而面试官向你发问也并非是要求你破解人类未解之谜，多数情况下，他只是希望考查你对递归的熟练程度。所以递归实现深拷贝的核心思路，大家需要重点掌握（解析在注释里）：

> 深拷贝没有完美方案，每一种方案都有它的边界 case

```ts
const deepClone = (obj) => {
  // 如果是值类型或者不存在，直接返回
  if (typeof obj !== 'object' || obj === null) return obj

  // 定义结果对象
  let copy = {}

  // 如果对象是数组，则定义结果数组
   if (obj.constructor === Array) copy = []

   // 遍历对象的 key
   for (let key in obj) {
     // 如果key是对象的自身属性
     if (obj.hasOwnProperty(key)) {
       // 递归调用深拷贝方法
       copy[key] = deepClone(obj[key])
     }
   }
   
   return copy
}

```

### 建造者模式

```js
// 建造者模式 需要优化
export default class Builder {
    constructor() {
        this.name = ''
        this.author = ''
        this.price = 0
        this.category = ''
    }

    withName(name) {
        this.name = name
        return this
    }

    withAuthor(author) {
        this.author = author
        return this
    }

    withPrice(price) {
        this.price = price
        return this
    }

    withCategory(category) {
        this.category = category
        return this
    }

    build() {
        return {
            name: this.name,
            author: this.author,
            price: this.price,
            category: this.category
        }
    }
}
```
