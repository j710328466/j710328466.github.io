---
nav:
  title: 文章
  path: /blog
toc: content
category: Components
title: centOS 入门
group:
  title: 2020年
  order: 3
---

> 好用的终端： [electerm](https://github.com/electerm/electerm)

## 常用命令

### 如何连接阿里云 ECS

    - ssh root@example.com

### 删除进程

    - sudo kill 9 ID

### 关闭端口

    - firewall-cmd --zone=public --remove-port=3000/tcp --permanent

### 用 tree 结构化展示列表

    - brew install tree
    - 忽略某些文件夹
    - tree -I '*svn|*node_module*' -d

### 查看端口进程

    - lsof -i tcp:8080 
    - 杀掉：kill -9 pid

## 用户权限

### 查看位置

- whereis sudoers

### 查看权限

- ls -l /etc/sudoers

### 添加权限

- chmod -v u+w /etc/sudoers

### 修改用户权限

- vim /etc/sudoers

### 加上和 root 相同的 ALL 权限

- root ALL=(ALL) ALL

### 收回权限

- chmod -v u-w /etc/sudoers

### 创建用户

- useradd {用户名}

### 创建用户密码

- passwd {用户名}

## 密码登录

- sudo cat /etc/passwd

### sudo 权限配置

- ① 到文件夹 /etc/sudoers 执行 visudo
- ② 修改 {用户名} ALL=(ALL) NOPASSWD:ALL

## 查看电脑配置

### 物理 CPU 个数。

```javascript
cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l
```

### 每个物理 CPU 中 core 的个数，即 CPU 核数

```javascript
cat /proc/cpuinfo| grep "cpu cores"| uniq
```

### 逻辑 CPU 的个数

> cat /proc/cpuinfo| grep "processor"| wc -l

### CPU 型号

> cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c

### 内存信息

> cat /proc/meminfo

### 查看所有进程

> ps aux

### 查看所有已开启进程

```javascript
systemctl list-unit-files | grep enable

关闭进程
sudo systemctl stop {serverName}
```

### 查看进程端口

> ps -ef | grep jenkins

### 列出所有端口

> netstat -ntlp

## 软件安装

### ruby

> - yum install ruby

### homebrew

#### 第一步：创建 brew 文件夹

    - sudo mkdir /usr/local/Homebrew

#### 第二步：克隆 brew 源

    - sudo git clone [https://mirrors.ustc.edu.cn/brew.git](https://mirrors.ustc.edu.cn/brew.git)/usr/local/Homebrew

#### 第三步：创建一个快捷方式到/usr/local/bin 目录

    - sudo ln -s /usr/local/Homebrew/bin/brew /usr/local/bin/brew

#### 第四步：创建 core 文件夹 并 克隆（两句话分开运行）

    - sudo mkdir -p /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core
    - sudo git clone [https://mirrors.ustc.edu.cn/homebrew-core.git](https://mirrors.ustc.edu.cn/homebrew-core.git)/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core

#### 第五步：获取权限 运行更新（两句话分开运行）

    - sudo chown -R $(whoami) /usr/local/Homebrew
    - brew update

#### 最后：设置环境变量

- echo 'export HOMEBREW_BOTTLE_DOMAIN=[https://mirrors.ustc.edu.cn/homebrew-bottles'](https://mirrors.ustc.edu.cn/homebrew-bottles') >> ~/.zshrcecho '
- export HOMEBREW_BOTTLE_DOMAIN=[https://mirrors.ustc.edu.cn/homebrew-bottles'](https://mirrors.ustc.edu.cn/homebrew-bottles') >> ~/.bash_profile

### 文件上传下载工具

```
yum install lrzsz -y
<!-- 上传: rz -->
<!-- 下载:sz 文件名 -->
```

### 解压软件

```
yum install -y unzip zip
使用：unzip 文件名
```

## Q&A

### 如何免密登录

#### 第一步：查看本机是否有 id_rsa.pub 文件

```javascript
cat ~/.ssh/id_rsa.pub
```

如果输出为空，就在下一步创建一下

#### 第二步：创建 id_rsa.pub 文件

如果本机已经存在该文件，就直接跳到第三步

##### 1. 先登录 git 账号

```javascript
git config --globaluser.name "j710328466"
git config --global user.email "710328466@qq.com"
```

##### 2. 生成 ssh 相关文件

```javascript
ssh-keygen -t rsa -C "710328466@qq.com"
```

#### 第三步：授权到远端 Ecs

##### 复制本地端的 id_rsa.pub

注意应该是以 ssh-rsa 开头到 XXXXX.XXXXX.XXXX 结束的一段，这个可能是个会导致错误的点，建议如果你登录失败的时候可以回来看看这边是不是错了

##### 登录远程 Ecs，创建 authorized_keys 文件

在 .ssh 文件夹下创建 authorized_keys 文件，并将之前复制的 id_rsa.pub 内容粘贴进去

```javascript
# 参考代码
cd ~/.ssh
touch authorized_keys
vim authorized_keys
```

##### 更改授权 （可选）

```javascript
# 设置所有人可以读写及执行
chmod 777 ~/.ssh

# 设置拥有者可读写
chmod 600 ~/.ssh/authorized_keys
```

> 这一步按自己的需要来设置

#### 最后：就可以免密登录啦~

现在打开本机的终端，terminal，zsh 输入下面的代码就可以实现免密登录啦

```javascript
ssh ${用户名}@${ip地址 或者 域名}
```

### Unable to lock the administration directory

```js
- apt-get update
- apt-get upgrade
- apt-get dist-upgrade
- alexander@alexander-virtual-machine:~$ sudo apt-get install -y httpd
- E: Could not get lock /var/lib/dpkg/lock - open (11: Resource temporarily unavailable)
- E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it?


- 解决方案：
- 其实这是因为有另外一个程序在运行，导致锁不可用。原因可能是上次运行更新或安装没有正常完成。解决办法是杀死此进程
- sudo rm /var/cache/apt/archives/lock
- sudo rm /var/lib/dpkg/lock
- 但是这样不能解决问题：可能还会出现问题，解决方案：
   - 1,sudo dpkg --configure -a
   - 2,sudo apt-get update

```
