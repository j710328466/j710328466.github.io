---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 设计模式
  order: 22
---

## 工厂模式

工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

```js
 class User {
    constructor(type) {
        if (new.target === User) {
            throw new Error('抽象类不能实例化！')
        }
        this.type = type
    }
}

class SuperAdmin extends User {
    constructor(name) {
        super('superAdmin')
        this.name = name
        this.viewPage = ['首页', '通讯录', '发现页', '应用数据', '权限管理']
    }
}
class Admin extends User {
    constructor(name) {
        super('admin')
        this.name = name
        this.viewPage = ['首页', '通讯录', '发现页', '应用数据']
    }
}
class Normal extends User {
    constructor(name) {
        super('normal')
        this.name = name
        this.viewPage = ['首页', '通讯录', '发现页']
    }
}

export default function getUserTypeFactory(type) {
    switch (type) {
        case 'superAdmin':
            return SuperAdmin
            break;
        case 'admin':
            return Admin
            break;
        case 'normal':
            return Normal
            break;
        default:
            throw new Error('参数错误，可选参数：superAdmin、admin、normal')
    }
}
```