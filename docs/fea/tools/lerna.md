---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 工具
  order: 9
  path: /tools
---

# lerna

## 介绍

lerna 是一个包管理工具，方便在大型开源项目中不需要手动开启多个仓库

## 使用方法

### 安装

> npm i lerna -g

### 创建子项目

> lerna create {packageName}

### 添加依赖

```javascript
// 此处用eslint作为案例

// 所有 package 都装
lerna add eslint

// 只有 package1 安装
lerna add eslint --scope=package1

// 符合 prefix 的包都会安装
lerna add esint packages/prefix-*
```

> -dev：添加到 devDependencies
> --exact：只安装特定版本

### 执行 npm script 命令

```javascript
// 执行所有子项中的 test
lerna run test

// 执行 package1 中的 test
lerna run --scope package1 test

// 只执行除了匹配package-*外项目中的 test
lerna run --ignore package-* test

```

### 查看哪些包需要发布

```javascript
lerna updated
```

> - 决定哪一个包需要被 publish

### 发布依赖包

```javascript
learna publish
```

> 建议使用 independent 模式，独立对每个依赖包做管理
> `--npm-client=cnpm 指定源`

## 常见命令

|        命令         |                            说明                            |
| :-----------------: | :--------------------------------------------------------: |
|   lerna bootstrap   |                          安装依赖                          |
|     lerna clean     |                删除各个包下的 node_modules                 |
|     lerna init      |                     创建新的 lerna 库                      |
|     lerna list      |                     显示 package 列表                      |
|    lerna changed    |     显示自上次 relase tag 以来有修改的包， 选项通 list     |
|     lerna diff      | 显示自上次 relase tag 以来有修改的包的差异， 执行 git diff |
|     lerna exec      |                 在每个包目录下执行任意命令                 |
| lerna run <commond> |            执行每个包 package.json 中的脚本命令            |
|      lerna add      |               添加一个包的版本为各个包的依赖               |
|    lerna import     |                        引入 package                        |
|     lerna link      |                      链接互相引用的库                      |
|    lerna create     |                        新建 package                        |
|    lerna publish    |                            发布                            |

### 🌰

```js
lerna exec [--scope <package包名（package.json中的name）>] -- <command> [..args]

# 举个例子
lerna exec -- rm -rf node_modules # 删除所有package下的node_modules
lerna exec --scope @yh-imooc-cli-dev/core -- rm -rf node_modules # 碰到scope，说明定位到@yh-imooc-cli-dev/cor包下(注意：--scope后面写的是包名)，然后删除当前子包下的node_modules
```

## 官方文档

[http://www.febeacon.com/lerna-docs-zh-cn/](http://www.febeacon.com/lerna-docs-zh-cn/)

### Q&A

#### 1. 发布包提示 lerna ERR! ENOREMOTEBRANCH Branch 'master' doesn't exist in remote 'origin'.

> git remote -v 查看是否是 origin 指向的分支，推送最新分支
> lerna publish

#### 2. lerna ERR! E402 You must sign up for private packages

在相应包的 package.json 添加

```js
  {
    ...
    "publishConfig": {
      "access": "public"
    }
  }
```

#### 3. 使用 father 打包报错

如果是使用的 **yarn** 安装的包，改成 **cnpm** 安装，再试一次

#### 4. lerna ERR! yarn install --mutex network:42424 --non-interactive exited 1 in 'root'

不要使用 yarn bootstrap 改为 lerna bootstrap

#### 5. 疯狂报 ts 类的错误

```js
{
  "compilerOptions": {
    "typeRoots": ["./typings"]
  }
}
```
