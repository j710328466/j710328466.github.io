---
nav:
  title: 文章
  path: /blog
category: Components
toc: content
title: 2024年微前端实战（qiankun+umi+antd）
keywords: [前端, 微前端, 架构]
description: 基于qiankun + umi + antd 搭建的一套微前端架构项目，文中给出了具体的配置
group:
  title: 2024年
---

## 前言

接上文，因为公司新项目涉及到多个系统，且系统之间有相互共用的模块与页面，为了降低开发成本，就搭建了这套系统。
本文档涵盖了从环境准备到前端开发，主子项目部署、打包配置，nginx 配置等一系列关键步骤。其中 nginx 相关配置的模块我认为是最重要的模块。需要反复摩擦几次。

在开始下文前，我默认你大概了解了：umi、qiankun、antd、nginx 的使用，并对微前端的架构模式和使用场景有所了解。

> 不知道？那你还不去看看相关的资料？

## 项目介绍

目前该项目使用微前端架构方案，一共包含 1 个主项目，4 个子项目。其中 3 个项目为业务层，1 个项目为基建层。

本文配置的子项目可以直接嵌套在主项目中，子项目也可以单独脱离出来单独使用（授权登录的话需要自己做一些额外的配置）。

| 项目名称 | 说明                 |
| -------- | -------------------- |
| main     | 整套系统的框架，外壳 |
| app1     | a 系统               |
| app2     | b 系统               |
| app3     | c 系统               |
| app4     | 公共能力             |

## 开发流程

这里介绍一下，各个仓库的起始开发流程和规范。

### 第一步：初始化开发环境

1. 通过 git 把仓库代码 clone 到本地，从对应的版本分支创建一条自己的 feature 分支。
2. 执行 pnpm i, 等待依赖安装完之后，执行 pnpm run start 进行本地开发。
3. 注入登录模块，开发环境下可以通过该配置绕过登录授权调试（**重要**）

```js
import slave from '@nicecode/slave';

export const qiankun = {
  /**

* 子应用的生命周期，每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
   */
  async mount() {
    // 注入子应用登录跳转
    slave.init({
      // jumpToLogin: false,     // 是否跳转登录页，默认打开，如果开发调试可以关闭跳转
      jumpUrl: `https://base.nicecode.com/material/login`,
    });
  },
};
```

链接上的 会告诉用户跳转到哪个页面去授权登录，但是页面上要有 from 或者是 to 字段。用来授权回跳，理论上跳转的优先级是：属性 to > 属性 from > 链接上的 to > 链接上的 from
一般授权成功跳转回来的链接上会带上 token 字段，例如：
<http://j710328466.github.io/nicenote?token=xxxxxxxxxx>

### 第二步：代码推送

1. 执行 git add .，暂存所有待推送文件。
2. 执行 git commit -m "${commitMsg}" commitMsg 可以为当前的修改内容，遵循 commit 提交规范，例如：feat(package): 修改配置包属性
   在这个阶段会执行相对应的 lint fix 和 prettier fix，不要跳过！
3. 待 lint 校验通过之后，再执行 git push 提交代码到远程。
4. 在 gitlab 提交 mr 到对应分支，并且指定相关人员 CR。

### 第三步：触发镜像配置 CI

进入 gitlab 的流水线触发即可，再次打开服务器地址就能看到最新的页面了！

## 项目配置

微前端架构的好处就是整体是一个可插拔的结构，按需加载引用子项目

### 4.1 主应用

#### 第一步：在 app.ts 中注册子应用

按需接入相应的应用，这里的 APP_ENV 用来区分本地环境和生产环境的加载路由，可以通过在 umijs 的 define 属性定义，再通过 npm 命令传递，详细可以参考 umijs 手册

```js
export const qiankun = {
  apps: [
    {
      name: 'app1',
      entry:
        APP_ENV === 'production'
          ? `//${hostname}:30068/app1/`
          : '//localhost:30068/',
      props: {},
      singular: false,
      credentials: true,
    },
    {
      name: 'app2',
      entry:
        APP_ENV === 'production'
          ? `//${hostname}:30088/app2/`
          : '//localhost:30088/',
      singular: false,
      credentials: true,
    },
    {
      name: 'app3',
      entry:
        APP_ENV === 'production'
          ? `//${hostname}:30078/app3/`
          : '//localhost:30078/',
      singular: false,
      credentials: true,
    },
    {
      name: 'app4',
      entry:
        APP_ENV === 'production'
          ? `//${hostname}:30098/app4/`
          : '//localhost:30098/',
      singular: false,
      credentials: true,
    },
  ],
};
```

要注意这里的两个属性：

1. singular：子应用是否预加载，最好设置为 false，防止其它子应用卸载的时候，控制台会报错。
2. credentials：这个设置了的话，请求的子应用就会默认带上 cookie 校验，这样 nginx 配置会略微有些麻烦，不过不打紧。

#### 第二步：在主应用中的 umirc.ts 中注册 4 个子应用

这个没啥好说的，就是重置了子应用的路由，映射到所有的微应用。microApp 不要错了，对应注册的子应用名称。

```js
{
  ...
  routes: [
    {
        name: '应用1',
        path: '/app1/*',
        microApp: 'app1'
    },
    {
        name: '应用2',
        path: '/app2/*',
        microApp: 'app2'
    },
    {
        name: '应用3',
        path: '/app3/*',
        microApp: 'app3'
    },
    {
        name: '应用4',
        path: '/app4/*',
        microApp: 'app4'
    }
  ]
  ...
}
```

### 4.2 子应用

子应用相对配置简单一点，只需要修改 umijs.ts 文件的一个属性就行：

```js
{
  ...
  qiankun: {
    slave: {}
  }
  ...
}
```

## 项目 nginx 配置

### 主应用

这里我只贴出重要的部分，具体负载均衡和接口映射啥的，需要和后端协调进行修改：

```js
{
  ...
      server {
          listen       30058;

          location / {
              if ($request_method = 'OPTIONS') {
                  add_header 'Access-Control-Allow-Origin' '$http_origin' always;
                  add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
                  add_header 'Access-Control-Allow-Credentials' 'true';
                  add_header 'Access-Control-Allow-Headers' 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorizationept';
                  add_header 'Access-Control-Max-Age' 1728000;
                  return 204;
              }
              add_header 'Access-Control-Allow-Origin' '$http_origin' always;
              add_header 'Access-Control-Allow-Credentials' 'true';

              root   /web/main;
                  try_files $uri $uri/ /index.html;
              index  index.html index.htm;
          }

          error_page   500 502 503 504  /50x.html;
          location = /50x.html {
              root   html;
          }
      }
  ...
}
```

### 子应用

子应用就是比主应用多了个路由的映射，和 proxy 的设置，其它都差不多。

```js
{
  ...
  server {
      listen       30078;

      location /app1 {
          // proxy_set_header Host $host;
          // proxy_set_header X-Real-IP $remote_addr;
          // proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

          if ($request_method = 'OPTIONS') {
              add_header 'Access-Control-Allow-Origin' '$http_origin' always;
              add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
              add_header 'Access-Control-Allow-Credentials' 'true';
              add_header 'Access-Control-Allow-Headers' 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorizationept';
              add_header 'Access-Control-Max-Age' 1728000;
              return 204;
          }
          add_header 'Access-Control-Allow-Origin' '$http_origin' always;
          add_header 'Access-Control-Allow-Credentials' 'true';

          try_files $uri $uri/ /app1/index.html;
          alias  /web/app1;
          index  index.html index.htm;
      }

      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
          root   html;
      }
  }
  ...
}
```

## 小结

整个架构从开始环境搭建，开发到部署上线。历时大概 3 个月左右，中间碰到了挺多问题，其中关于 nginx 配置的问题是最多的，基本上就是在恶补还不知道的 nginx 知识。

其次再是相关的公司服务端 CI 部署相关的内容，因为运维方面涉及到 ducker 和 k8s，因为项目的特殊性，也不是用传统的 Jenkins 或者其它 ci 方案，并且是由同一套配置组件化来管理 nginx 配置和部署方案，所以很多时候的项目推进比较麻烦。

> 简单点说就是，我不是很懂运维那套架构体系，运维说做不了或者没时间...
