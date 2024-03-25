---
nav:
  title: 文章
  path: /blog
toc: content
category: Components
title: Vscode 插件开发入门
group:
  title: 2021年
  order: 2
---

# 💊 vscode

## 如何发布 vscode 插件

### 第一步：全局安装 vsce

> npm i vsce -g

### 第二步：打包

> vsce package --no-dependencies

### 第三步：登录

> vsce login {publisher}

记得上[azure](https://devlifestyle.visualstudio.com/_usersSettings/tokens) 生成 token，并记住它

### 第四步：发布

> vsce publish --no-dependencies
> 会生成一个访问链接，点击进入即可查看

## 插件推荐

### auto-Open Markdown

markdown 预览插件

### beautify

让代码更符合规范

### Bracket Pair Colorizer

括号上色插件，神器推荐

### vscode-ext-color-highlight

颜色上色插件

### color-picker

取色插件

### cssrem

rem 转换工具,移动端开发可以安装

### Debugger for Chrome

debugger 插件，正在学怎么用

### ESlint

代码规范插件

### file-icons

图标插件

### git History

查看历史修改记录插件

### hopscotch

可爱的代码颜色风格

### html css support

应该改支持代码提示插件吧

### markdownlint

markdown 语法提示插件

### path autocomplete

路径补全插件

### react native tools

暂时没用上

### react-native

也没用上

### settings sync

插件备份工具，同步用的，神器

### background

> ps: 有的时候超级超级吃 CPU，好像有点 bug 慎用！！

一款美化插件配置如下：

```
"background.useDefault": false,
    "background.enabled": true,
    "background.customImages": [
        "file:///Users/mac/Desktop/improve/1.jpg"
    ],
    "background.style": {
        "opacity": 0.1,
        "width": "1600px",
        "height": "1150px"
    }
```
