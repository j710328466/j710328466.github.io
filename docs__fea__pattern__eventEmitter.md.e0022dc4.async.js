(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{KTDU:function(e,n,t){"use strict";t.r(n);var s=t("xwgP"),a=t.n(s),c=t("OS9G"),r=t("W+6v");t("Rsk4");n["default"]=e=>(a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u53d1\u5e03\u8ba2\u9605\u8005\u6a21\u5f0f"},a.a.createElement(c["AnchorLink"],{to:"#\u53d1\u5e03\u8ba2\u9605\u8005\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u53d1\u5e03\u8ba2\u9605\u8005\u6a21\u5f0f"),a.a.createElement("p",null,"\u5b9a\u4e49\u4e86\u4e00\u79cd\u4e00\u5bf9\u591a\u7684\u5173\u7cfb\uff0c\u8ba9\u591a\u4e2a\u89c2\u5bdf\u8005\u5bf9\u8c61\u540c\u65f6\u76d1\u542c\u67d0\u4e00\u4e2a\u4e3b\u9898\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u4e3b\u9898\u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u5c31\u4f1a\u901a\u77e5\u6240\u6709\u7684\u89c2\u5bdf\u8005\u5bf9\u8c61\uff0c\u4f7f\u5b83\u4eec\u80fd\u591f\u81ea\u52a8\u66f4\u65b0\u81ea\u5df1\uff0c\u5f53\u4e00\u4e2a\u5bf9\u8c61\u7684\u6539\u53d8\u9700\u8981\u540c\u65f6\u6539\u53d8\u5176\u5b83\u5bf9\u8c61\uff0c\u5e76\u4e14\u5b83\u4e0d\u77e5\u9053\u5177\u4f53\u6709\u591a\u5c11\u5bf9\u8c61\u9700\u8981\u6539\u53d8\u7684\u65f6\u5019\uff0c\u5c31\u5e94\u8be5\u8003\u8651\u4f7f\u7528\u89c2\u5bdf\u8005\u6a21\u5f0f\u3002"),a.a.createElement("h3",{id:"\u7b80\u5355\u7248"},a.a.createElement(c["AnchorLink"],{to:"#\u7b80\u5355\u7248","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u7248"),a.a.createElement(r["a"],{code:"// \u4e3b\u9898 \u4fdd\u5b58\u72b6\u6001\uff0c\u72b6\u6001\u53d8\u5316\u4e4b\u540e\u89e6\u53d1\u6240\u6709\u89c2\u5bdf\u8005\u5bf9\u8c61\nclass Subject {\n  constructor() {\n    this.state = 0\n    this.observers = []\n  }\n  getState() {\n    return this.state\n  }\n  setState(state) {\n    this.state = state\n    this.notifyAllObservers()\n  }\n  notifyAllObservers() {\n    this.observers.forEach(observer => {\n      observer.update()\n    })\n  }\n  attach(observer) {\n    this.observers.push(observer)\n  }\n}\n\n// \u89c2\u5bdf\u8005\nclass Observer {\n  constructor(name, subject) {\n    this.name = name\n    this.subject = subject\n    this.subject.attach(this)\n  }\n  update() {\n    console.log(`${this.name} update, state: ${this.subject.getState()}`)\n  }\n}\n\n// \u6d4b\u8bd5\nlet s = new Subject()\nlet o1 = new Observer('o1', s)\nlet o2 = new Observer('02', s)\n\ns.setState(12)",lang:"js"}),a.a.createElement("h3",{id:"\u590d\u6742\u7248"},a.a.createElement(c["AnchorLink"],{to:"#\u590d\u6742\u7248","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u590d\u6742\u7248"),a.a.createElement(r["a"],{code:"/**\n * \u53d1\u5e03\u8ba2\u9605\u8005\u6a21\u5f0f\n */\nexport default class EventEmitter {\n    constructor() {\n        this.subs = {}\n    }\n\n    on(event, cb) {\n        (this.subs[event] || (this.subs[event] = [])).push(cb)\n    }\n\n    trigger(event, ...args) {\n        this.subs[event] &&\n            this.subs[event].forEach(cb => {\n                cb(...args)\n            })\n    }\n\n    once(event, onceCb) {\n        const cb = (...args) => {\n            onceCb(...args)\n            this.off(event, onceCb)\n        }\n        this.on(event, cb)\n    }\n\n    off(event, offCb) {\n        if (this.subs[event]) {\n            let index = this.subs[event].findIndex(cb => cb === offCb)\n            this.subs[event].splice(index, 1)\n            if (!this.subs[event].length) delete this.subs[event]\n        }\n    }\n}",lang:"js"}))))}}]);