---
nav:
  title: 文章
  path: /blog
toc: content
category: Components
title: HomeBrew 入门
group:
  title: 2020年
---

## 安装脚本

苹果电脑标准安装脚本：（**推荐** 优点全面 缺点慢一点）

```js
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

苹果电脑极速安装脚本：（优点安装速度快 缺点 update 功能需要命令修复 ）

```js
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" speed
```

Linux 标准安装脚本：

```js
rm Homebrew.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh ; bash Homebrew.sh
```

苹果电脑卸载脚本：

```js
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```

Linux 卸载脚本：

```js
rm HomebrewUninstall.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh ; bash HomebrewUninstall.sh
```

## 常用命令

- 搜索包：brew search [package-name]
- 查看包的信息：brew info [package-name]
- 安装终端应用\环境：brew install [package-name]
- 安装 GUI 应用 brew install --cask [AppName]
- 更新所有包：brew update
- 更新某个包：brew upgrade [package-name]
- 卸载某个包：brew uninstall [package-name]
- 列出所有安装的包：brew list
- 清理所有过时软件：brew cleanup

## 常见问题

### 1. 如果报错 command not found : brew

先运行此命令/usr/local/Homebrew/bin/brew -v ，如果是 ARM 架构的芯片运行/opt/homebrew/bin/brew -v 看是否能出来 Homebrew 的版本号。如果有版本号。

那就是 path 没有配置成功，可以在 etc/paths 添加一下一个全局路径： /opt/homebrew/bin（看下自己是 x86 还是 arm 架构）
