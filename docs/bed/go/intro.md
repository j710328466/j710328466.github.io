---
nav:
  title: 后端
  path: /bed
group:
  title: Go
  order: 1
---

# 快速上手

## 配置

### 1、目录结构

- ① pkg 打包后的路径
- ② src 开发路径
- ③ bin 应用程序

### 2、两大配置路径

- gopath: $PATH
- goroot: $PATH

### 3、查看当前环境配置

- go env

### 4、设置环境变量

- vim ~/.profile 输入以下：
  - export GOROOT=/usr/local/go
  - export PATH=$PATH:GOROOT/bin

## 知识点

### 常量定义

- 显式：const identifier type = value
- 隐式：const identifier = value（无类型常量）
- 特殊常量 iota
  - 介绍
    - 每次碰到 const 会被重置为 0，如果没碰到每新增一个常量声明，就会自增 +1
  - 使用技巧
    - 跳值使用法：使用 _ , 每一个 _ 能使 iota 的值跳过 1 , 要跳多少就给多少个 \_
    - 插队使用法：在变量声明中再插入一个赋值的变量不会对 iota 自增产生影响
    - 隐式使用法：如果不声明值，则默认使用最后一个表达式的赋值格式

### 并发和并行

- 并发
  - 单核上，通过任务的来回切换达到类似同时进行
- 并行
  - 两个任务同时执行

### go 包源切换

```json
- vim ~/.bash_profile
   - 输入：
      - # 启用 Go Modules 功能
      - export GO111MODULE=on
      - # 配置 GOPROXY 环境变量
      - export GOPROXY=[https://goproxy.io](https://goproxy.io)
```
