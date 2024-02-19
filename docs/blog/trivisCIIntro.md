---
nav:
  title: 文章
  path: /blog
order: 999
category: Components
title: travisCI 持续集成 gh-page 并部署
group: 2018年
---

## travisCI 持续集成 gh-page 并部署

我们大多数公司在做项目时，应该都碰到过，当代码被 push 上 git 或者是 svn 时，过几分钟就可以在线上实时看到我们的项目，就像看到亲生儿子一样，但是肯定很多人不知道这是怎么实现的（如果你知道，那可以不用往下看了，点个赞就去吃饭吧...），所以今天我就来给大家介绍一下其中的一款 travis-CI，请记住它的 face：
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/13/163f71251406fc86~tplv-t2oaga2asx-image.image)

持续集成（Continuous integration）的核心思想，代码先自动化测试用例，通过后集成到主干。它细分的话有两个概念：

- 持续交付
- 持续部署

> 简单来说持续部署是持续交付的下一步，持续交付是测试阶段，部署就是测试通过阶段。,这个就有很多东西展开了，求我我就告诉你...

## 准备

- GitHub 账号（作为一个合格的程序员，你没有真的好吗？）
- travis-CI 平台接入
- GITHUB_TOKEN
- 给我点赞...

## 第一步

登录 CI 官网，然后连接自己的 gitHub，这个时候 Legacy Services Integration 应该默认显示了几个自己 gitHub 的项目
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/13/163f6c4922b8c7a6~tplv-t2oaga2asx-image.image)
如果显示不全，可以按左边的 sync 同步一下
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/13/163f6c6433ce6888~tplv-t2oaga2asx-image.image)
然后第一张图每个项目的边上有一个 switch 开关，你想要让哪个集成就打开哪个吧（不截图了，我懒...）

## 第二步

进入自己的 gh 主页，依次：GitHub settings -> developer settings -> Personal access tokens，勾选权限，自由发挥，你要全勾也行...

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/13/163f6d80fb076590~tplv-t2oaga2asx-image.image)
将生成的 token 复制备用

## 第三步

回到 CI，打开你打开开关的那个项目的 settings（看到你很绕我就放心了...），进入配置页面，在 Environment Variables 里填入以下内容：
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/13/163f6f783dbe0143~tplv-t2oaga2asx-image.image)

> 分别对应：git 项目、项目分支（我这里的分支是 gh-pages）、token、Git-email、Git-username

## 第四步

在项目根目录配置个文件叫 .travis.yml,打包项目以 vue-cli 为例，内容如下：

```
language: node_js
# nodejs版本
node_js:
    - '8.9.1'

# S: Build Lifecycle
install:
  - npm install
script:
  - npm run build

# 这个是不是看着很熟悉？
after_script:
  - cd ./dist
  - git init
  - git config user.name "${USER_NAME}"
  - git config user.email "${USER_EMAIL}"
  - git add .
  - git commit -m "nicecoders.github.io"
  - git push --force --quiet "https://${test_token}@${GH_REF}" master:${P_BRANCH}
# E: Build LifeCycle

# 只对某个分支行为生效
branches:
  only:
    - master
```

## 第四点五步

打开 CI，进入自己构建项目的那个页面，打开 job log，感受那生怕 error 的快感！（都是泪...）

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/13/163f702606d46967~tplv-t2oaga2asx-image.image)
当然如果你通过的话，就会有一个 passing 在你的项目标题旁边。

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/13/163f7035a73791e3~tplv-t2oaga2asx-image.image)
每次看到这个我都激动的热泪盈眶...

## 第五步

看一下自己在 git 上的项目，是不是出现了这个分支，并且已经自动部署好了？成功的截图。
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/13/163f706697e8aeb8~tplv-t2oaga2asx-image.image)

### 部署好的页面

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/13/163f708677ae9c6d~tplv-t2oaga2asx-image.image)

## 后记

现在，你可以疯狂的 push 代码了，其他的事交给 CI 去做就行。

好了，码了这么久的字，你是不是应该：

点个赞？

个赞？

赞？

👍

原文链接：<https://j710328466.github.io/>
