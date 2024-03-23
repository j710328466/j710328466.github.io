---
nav:
  title: 工具
  path: /tools
  order: 6
toc: content
group:
  title: 💊 jenkins
  order: 9
  path: /jenkins
---

# 💊 jenkins

## 安装 java 环境

### 查看 jdk 列表

      - yum list java*

### 安装 jdk

      - yum install java-1.8.0-openjdk-devel.x86_64

### 检查是否成功

      - java -version

## 安装 Jenkins 包

### ① 下载依赖

      - sudo wget -O /etc/yum.repos.d/jenkins.repo [https://pkg.jenkins.io/redhat-stable/jenkins.repo](https://pkg.jenkins.io/redhat-stable/jenkins.repo)

### ② 导入密钥

      - sudo rpm --import [https://pkg.jenkins.io/redhat-stable/jenkins.io.key](https://pkg.jenkins.io/redhat-stable/jenkins.io.key)

### ③ 开始安装

      - yum install jenkins #等待安装时间较长，约25min

### ④ 查看 Jenkins 安装路径

      - rpm -ql jenkins

### ⑤ 配置 Jenkins

      - vim /etc/sysconfig/jenkins
      - 修改为 JENKINS_PORT="6088"

### ⑥ 启动 Jenkins

      - java -jar /usr/lib/jenkins/jenkins.war --httpPort=8080
         - nohup java -jar /usr/lib/jenkins/jenkins.war --httpPort=8088 &
         - 若端口被占用则执行：java -jar /usr/lib/jenkins/jenkins.war --ajp13Port=-1 --httpPort=8899

### ⑦ 查看端口

      - netstat -ntlp
      - netstat -tln | grep 8088
      - sudo lsof -i:8088

### ⑧ 关闭端口

      - sudo kill -9 8088

### ⑨ 查看磁盘和分区情况

      - df -h

## \*\* 问题解决

### 1、No valid crumb was included in the request

         - 在jenkins 的Configure Global Security下 , 取消“防止跨站点请求伪造（Prevent Cross Site Request Forgery exploits）”的勾选。

### 2、git 找不到

         - yum install git
         - whereis git 将路径放在 config tools git 配置里

### 3、jenkins 打开项目构建很卡

         - 凭证 - 配置全局凭证：id_rsa

### 4、无法使用 node 等工具

         - ① source /etc/profile
         - ② 安装全局工具插件
