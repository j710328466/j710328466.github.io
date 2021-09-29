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

案例：新来的大卫封装了个 **fetch** 请求库，但是公司以前的网络请求方法是基于 **XMLHttpRequest** 的，老板想大卫去改这已经写好的9999个接口的请求，大卫使用了适配器模式去兼容，如下：

```js
// RequestUtil 请求库
export default class RequestUtil {
  // get 方法
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(result => {
          resolve(result)
        })
        .catch(err => reject(err))
    })
  }

  // post 方法
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: data
      })
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
  }
}

// 调用
const postResp = await RequestUtils.post('https://nicecoders.github.io', data)

// 公司老的库
function Ajax(type, url, data, success, failed){
    // 创建ajax对象
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

   ...(此处省略一系列的业务逻辑细节)

   var type = type.toUpperCase();

    // 识别请求类型
    if(type == 'GET'){
        if(data){
          xhr.open('GET', url + '?' + data, true); //如果有数据就拼接
        }
        // 发送get请求
        xhr.send();

    } else if(type == 'POST'){
        xhr.open('POST', url, true);
        // 如果需要像 html 表单那样 POST 数据，使用 setRequestHeader() 来添加 http 头。
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // 发送post请求
        xhr.send(data);
    }
 
    // 处理返回数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else {
                if(failed){
                    failed(xhr.status);
                }
            }
        }
    }
}

// 创建适配器函数，入参与旧接口保持一致
async function AjaxAdapter(type, url, data, success, failed) {
    const type = type.toUpperCase()
    let result
    try {
         // 实际的请求全部由新接口发起
         if(type === 'GET') {
            result = await HttpUtils.get(url) || {}
        } else if(type === 'POST') {
            result = await HttpUtils.post(url, data) || {}
        }
        // 假设请求成功对应的状态码是1
        result.statusCode === 1 && success ? success(result) : failed(result.statusCode)
    } catch(error) {
        // 捕捉网络错误
        if(failed){
            failed(error.statusCode);
        }
    }
}

// 兼容了老的调用方式
Ajax('get', 'https://nicecoders.github.io', data, function(res){
    // 成功的回调逻辑
}, function(error){
    // 失败的回调逻辑
})

```

### 装饰器模式

- 动态地给某个对象添加一些额外的职责，，是一种实现继承的替代方案
- 在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，而不会影响从这个类中派生的其他对象
- 遵循拓展不修改的 SOLID 原则

#### 简单版

```jsx
import React, { useRef, useState, useEffect } from 'react';
import '@nicecode/css'

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

  let style = {
    margin: '0 6px',
  }

  return (
    <div className="decorator">
      <button style={style} onClick={openModal} >打开弹框</button>
      <button style={style} onClick={hideModal} >关闭弹框</button>
      <button style={style} onClick={decoratorModal} >添加适配器</button>
      <button style={style} onClick={normalModal} >清除适配器</button>
      <div ref={modalRef} style={{ display: 'none', marginTop: '20px', padding: '10px 20px', border: '1px solid #eee'}} ></div>
    </div>
  )
};
```

#### 进阶版

```jsx
import React, { useRef, useEffect } from 'react';

function funcDecorator(type) {
  return function (target, name, descriptor) {
    if (type === 'class') {
      target.prototype.show = () => {
        console.log('装饰器处理后的类')
      }
      return target
      /**
       * or
       * return class NButton {
       *    show() {
       *      console.log('装饰器处理后')
       *    }
       * }
      **/
    } else if (type === 'function') {
      const old = descriptor.value
      descriptor.value = function(...arg) { // 注意这里需要保留原this作用域，不能使用箭头函数
        console.log('----装饰器装饰函数----')
        // 原函数
        return old.apply(this, arg)
      }
    }
  }
}

// 通过装饰器改变原有的 show 方法
// @funcDecorator('class')
class Button {
  show() {
    console.log('大卫的思想空间')
  }

  @funcDecorator('function')
  mb() {
    console.log('我是sb')
  }
}

export default () => {
  useEffect(() => {
    let dom = new Button();
    // dom.show()
    // dom.mb()
    // console.log(dom)
  }, [])

  return (
    <div>
      进阶案例：控制台查看输出结果
    </div>
  )
}

```

### 代理模式

是为一个对象提供一个代用品或占位符，以便控制对它的访问

#### 简单版

```jsx
import React, { useRef, useEffect } from 'react';

// 普通私密信息
const baseInfo = ['name', 'age', 'career']
// 最私密信息
const privateInfo = ['avatar', 'phone']

// 规定礼物的数据结构由type和value组成
const present = {
    type: '巧克力',
    value: 60,
}

// 相亲男方
const user = {
    isValidated: true,
    isVIP: false,
}

// 相亲女方
const girl = {
  // 姓名
  name: '小美',
  // 自我介绍
  aboutMe: '...',
  // 年龄
  age: 24,
  // 职业
  career: 'teacher',
  // 假头像
  fakeAvatar: 'xxxx',
  // 真实头像
  avatar: 'xxxx',
  // 手机号
  phone: 123456,
  // 礼物数组
  presents: [],
  // 拒收50块以下的礼物
  bottomValue: 50,
  // 记录最近一次收到的礼物
  lastPresent: present,
}

// 掘金婚介所推出了小礼物功能
const JuejinLovers = new Proxy(girl, {
  get: function(girl, key) {

    if((baseInfo.indexOf(key) !== -1) && !user.isValidated) {
        alert('您还没有完成验证哦')
        return
    }

    // 此处我们认为只有验证过的用户才可以购买VIP
    if(user.isValidated && privateInfo.indexOf(key) !== -1 && !user.isVIP) {
        alert('只有VIP才可以查看该信息哦')
        return
    }

    return girl[key]
  },
  set: function(girl, key, val) {

    // 最近一次送来的礼物会尝试赋值给lastPresent字段
    // 需要返回 boolean 判断是否赋值成功
    if(key === 'lastPresent') {
      if(val.value < girl.bottomValue) {
          alert('sorry，您的礼物被拒收了')
          return false
      }

      // 如果没有拒收，则赋值成功，同时并入presents数组
      girl.lastPresent = val
      girl.presents = [...girl.presents, val]
      return true
    }
  }
})

export default () => {

  useEffect(() => {
    console.log(JuejinLovers.name)
    JuejinLovers.lastPresent = present
    console.log(JuejinLovers)
  }, [])

  return (
    <div>hi</div>
  )
}
```
