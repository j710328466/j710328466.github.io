---
nav: 数据库
toc: content
---

# MongoDB 入门

## mac 安装
### 1.1 到官网下载指定版本的安装包
[https://www.mongodb.com/try/download/community?jmp=nav](https://www.mongodb.com/try/download/community?jmp=nav)


### 1.2 将安装包放到指定文件夹
```javascript
open /usr/local
```
### 
### 1.3 配置数据库data目录
```javascript
sudo mkdir -p /data/db
```
## 
### 1.4 配置环境变量
```javascript
# 1. 打开 bash 文件
open ~/.bash_profile

# 2. 在 bash 中写入
PATH=$PATH:/usr/local/mongoDB/bin

# 3. 保存 bash，并触发生效
source ~/.bash_profile
```
## 
### 1.5 启动 mongodb


```javascript
mongod --dbpath /usr/local/mongodb/db

mongod --dbpath /usr/local/mongodb/db  -f /etc/mongod.conf
```
## centOS安装
### 2.1 添加源

      - sudo vi /etc/yum.repos.d/mongodb-org-4.0.repo
### 2.2 添加配置信息

      - [mongodb-org-4.0]
      - name=MongoDB Repository
      - baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
      - gpgcheck=1
      - enabled=1
      - gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
### 2.3 安装

      - sudo yum install -y mongodb-org
### 2.4 检验

      - rpm -qa |grep mongodb
      - rpm -ql mongodb-org-server
### 2.4 启动服务

      - 建议加上 --auth 权限验证
      - service mongod start
      - systemctl start mongod.service



> 通过本地文件启动：mongod -f /usr/local/mongodb/mongodb.conf

### 2.5 查看端口

      - netstat -natp | grep 27017
### 2.6 查看是否成功

      - ps -aux | grep mongod # 查看数据库的进程是否存在
### 2.7 开机自启

      - chkconfig mongod on
      - systemctl enable mongod.service
### 2.8 关闭
```javascript
pkill mongod
```
## 目录介绍
### 配置文件：


/etc/mongod.conf
```json
port=27017 #端口
dbpath=/usr/local/mongodb/db #数据库文件存放目录
logpath=/usr/local/mongodb/logs/mongodb.log #日志文件存放路径
logappend=true #使用追加的方式写日志
fork=true #以守护进程的方式，创建服务器进程
maxConns=100 #最大同时连接数
journal=true #每次写入会记录一条操作日志
bind_ip=0.0.0.0 #可外部访问
auth=true #用户认证
```
### 
### 数据库保存目录：

      - /usr/local/mongodb/db
### 日志目录：

      - /usr/local/mongodb/logs/mongodb.log
> 如果需要修改数据目录和日志目录，只需修改 /etc/mongod.conf 中的 storage.dbPath 和 systemLog.path 即可。

## 
## 卸载
### 4.1 关闭服务
```json
service mongod stop

or

systemctl stop mongod.service

```
### 4.2 删除相关的包
```json
yum erase $(rpm -qa | grep mongodb-org)
```
### 4.3 删除目录和文件
```json
rm -r /var/log/mongodbrm -r /var/lib/mongo
```
### 4.4 彻底卸载
```json
sudo yum erase $(rpm -qa | grep mongodb-org) # 卸载
MongoDB sudo rm -r /var/log/mongodb # 删除日志文件
sudo rm -r /var/lib/mongo # 删除数据文件
```


## 常见命令
### 登录
```javascript
• mongo '数据库名' -u '用户名' -p '密码'
```
### 重启
```javascript
sudo service mongod restart
```
### 查看日志
```javascript
/var/log/mongo/mongod.log
```
### 命令行打开
```javascript
• sudo mongod --port 27017 --dbpath /data/db --bind_ip 0.0.0.0 --auth -f /etc/mongod.conf
```
### 
### 用户权限


#### 权限列表


- .1. 数据库用户角色：read、readWrite;
- .2. 数据库管理角色：dbAdmin、dbOwner、userAdmin；
- .3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
- .4. 备份恢复角色：backup、restore；
- .5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
- .6. 超级用户角色：root
- // 这里还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）
- .7. 内部角色：__system



#### 新增用户
```javascript
// 切换根数据库
use admin
// 创建用户
db.createUser({user:"h5creator",pwd:"123456mjw",roles:[{role:"dbAdmin",db:"test"}]})
// 登录用户
db.auth(${name}, ${pwd})
```
### 
#### 修改用户权限
```javascript
db.grantRolesToUser("h5creator",[{role:"readWrite", db:"test"}])
```


#### 更新字段
```javascript
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,	// 如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
     multi: <boolean>,	// 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新
     writeConcern: <document> // 抛出异常的级别
   }
)

// 删除一个 key 字段
db.collection.update({},{"$unset":{"key":""}},{multi:true})

// 新增一个 type 字段
db.getCollection('article').update({}, {$set: {type:NumberInt('1')}}, {multi: true})
```


### 开发对外端口
#### 方案一
```javascript
• systemctl status firewalld # 查看防火墙状态
• firewall-cmd --zone=public --add-port=27017/tcp --permanent # mongodb默认端口号
• firewall-cmd --reload # 重新加载防火墙
• firewall-cmd --zone=public --query-port=27017/tcp # 查看端口号是否开放成功，输出yes开放成功，no则失败
```
#### 方案二
```javascript
• iptables -A INPUT -p tcp -m state --state NEW -m tcp --dport 27017 -j ACCEPT
```
## 偶遇问题
### 1) Failed to unlink socket file /tmp/mongodb-27017.sock Operation not permitted

      - 解决方案：删除该文件
### 2) Unable to lock file: /var/lib/mongo/mongod.lock

      - 解决方案：清空该文件内容
### 3) 无法持续运行在后台

      - 解决方案：mongod --fork --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/logs/mongodb2.log --logappend
4. 无法启动 mongodb
> 1. 进入 mongod 上一次启动的时候指定的 data 目录 --dbpath=/data/mongodb
> 
删除掉该文件:
> rm /data/db/mongo.lock
> 2. 修复
> 
./mongod --repair

