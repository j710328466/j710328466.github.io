(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"Ip+7":function(n,e,a){"use strict";a.r(e);var r=a("xwgP"),t=a.n(r),s=a("OS9G"),o=a("W+6v");a("Rsk4");e["default"]=n=>(t.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u5de5\u5382\u6a21\u5f0f"},t.a.createElement(s["AnchorLink"],{to:"#\u5de5\u5382\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5de5\u5382\u6a21\u5f0f"),t.a.createElement("p",null,"\u5de5\u5382\u6a21\u5f0f\u5b9a\u4e49\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa\u5bf9\u8c61\u7684\u63a5\u53e3\uff0c\u8fd9\u4e2a\u63a5\u53e3\u7531\u5b50\u7c7b\u51b3\u5b9a\u5b9e\u4f8b\u5316\u54ea\u4e00\u4e2a\u7c7b\u3002\u8be5\u6a21\u5f0f\u4f7f\u4e00\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u5316\u5ef6\u8fdf\u5230\u4e86\u5b50\u7c7b\u3002\u800c\u5b50\u7c7b\u53ef\u4ee5\u91cd\u5199\u63a5\u53e3\u65b9\u6cd5\u4ee5\u4fbf\u521b\u5efa\u7684\u65f6\u5019\u6307\u5b9a\u81ea\u5df1\u7684\u5bf9\u8c61\u7c7b\u578b\u3002"),t.a.createElement(o["a"],{code:"class User {\n    constructor(type) {\n        if (new.target === User) {\n            throw new Error('\u62bd\u8c61\u7c7b\u4e0d\u80fd\u5b9e\u4f8b\u5316\uff01')\n        }\n        this.type = type\n    }\n}\n\nclass SuperAdmin extends User {\n    constructor(name) {\n        super('superAdmin')\n        this.name = name\n        this.viewPage = ['\u9996\u9875', '\u901a\u8baf\u5f55', '\u53d1\u73b0\u9875', '\u5e94\u7528\u6570\u636e', '\u6743\u9650\u7ba1\u7406']\n    }\n}\nclass Admin extends User {\n    constructor(name) {\n        super('admin')\n        this.name = name\n        this.viewPage = ['\u9996\u9875', '\u901a\u8baf\u5f55', '\u53d1\u73b0\u9875', '\u5e94\u7528\u6570\u636e']\n    }\n}\nclass Normal extends User {\n    constructor(name) {\n        super('normal')\n        this.name = name\n        this.viewPage = ['\u9996\u9875', '\u901a\u8baf\u5f55', '\u53d1\u73b0\u9875']\n    }\n}\n\nexport default function getUserTypeFactory(type) {\n    switch (type) {\n        case 'superAdmin':\n            return SuperAdmin\n            break;\n        case 'admin':\n            return Admin\n            break;\n        case 'normal':\n            return Normal\n            break;\n        default:\n            throw new Error('\u53c2\u6570\u9519\u8bef\uff0c\u53ef\u9009\u53c2\u6570\uff1asuperAdmin\u3001admin\u3001normal')\n    }\n}",lang:"js"}))))}}]);