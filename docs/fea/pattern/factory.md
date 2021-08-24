---
nav:
  title: 前端
  path: /fea
group:
  title: 设计模式
  order: 1
---

## 工厂模式

可以简单理解为批量生产

```js
// ------------------- 工厂模式 -------------------
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