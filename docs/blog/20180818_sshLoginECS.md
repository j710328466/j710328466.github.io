---
nav:
  title: 文章
  path: /blog
order: 999
category: Components
toc: content
title: 如何终端 ssh 免密登录 ECS
group:
  title: 2018年
  order: 18
---

## 如何终端 ssh 免密登录 ECS

你是不是登录自己的远端服务器还是在使用输入账号密码？那么问题来了：

1. 密码忘了咋办！
1. 比较复杂的密码输入起来浪费时间！
1. ip 地址忘了咋整！
1. ...

## 第一步：查看本机是否有 id_rsa.pub 文件

```javascript
cat ~/.ssh/id_rsa.pub
```

如果输出为空，就在下一步创建一下

## 第二步：创建 id_rsa.pub 文件

如果本机已经存在该文件，就直接跳到第三步

###

### 先登录 git 账号

```javascript
git config --globaluser.name "XXX"
git config --global user.email "XXX@163.com"
```

###

### 生成 ssh 相关文件

```javascript
ssh-keygen -t rsa -C "XXX@163.com"
```

##

## 第三步：授权到远端 Ecs

### 复制本地端的 id_rsa.pub

注意应该是以 ssh-rsa 开头到 XXXXX.XXXXX.XXXX 结束的一段，这个可能是个会导致错误的点，建议如果你登录失败的时候可以回来看看这边是不是错了

###

### 登录远程 Ecs，创建 authorized_keys 文件

在 .ssh 文件夹下创建 authorized_keys 文件，并将之前复制的 id_rsa.pub 内容粘贴进去

```javascript
# 参考代码
cd ~/.ssh
touch authorized_keys
vim authorized_keys
```

###

### 更改授权 （可选）

```javascript
# 设置所有人可以读写及执行
chmod 777 ~/.ssh

# 设置拥有者可读写
chmod 600 ~/.ssh/authorized_keys
```

> 这一步可以按自己的需要来设置

## 最后：就可以免密登录啦~

现在打开本机的终端，terminal，zsh 输入下面的代码就可以实现免密登录啦

```javascript
ssh ${用户名}@${ip地址 或者 域名}
```
