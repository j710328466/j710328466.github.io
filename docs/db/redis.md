---
toc: content
---

# redis 入门

## 下载


[官方网站](https://redis.io/)


## 安装


```javascript
解压
tar zxvf redis-4.0.8.tar.gz
移动文件夹
mv redis-4.0.8 /usr/local/
打开该文件夹
cd /usr/local/redis-4.0.8/
编译测试
sudo make test
编译安装
sudo make install
```

### 安装与配置

- redis-cli -h 101.132.156.228 -a  r-uf60a44b13666134:'123456Jzx'
#### 1.在云服务器 ECS Linux 中安装 rinetd。

   - wget [http://www.boutell.com/rinetd/http/rinetd.tar.gz&&tar](http://www.boutell.com/rinetd/http/rinetd.tar.gz&&tar) -xvf rinetd.tar.gz&&cd rinetd
   - sed -i 's/65536/65535/g' rinetd.c (修改端口范围)
   - mkdir /usr/man&&make&&make install
   - > 注意：rinetd 安装包下载地址不确保下载可用性，您可以自行搜索安装包进行下载使用。
#### 2.打开配置文件 rinetd.conf。

   - vi /etc/rinetd.conf
> 注意：配置文件可能为 /usr/local/etc/redis.conf

#### 3.在配置文件中输入如下内容：

   - 0.0.0.0 6379 Redis 的链接地址 6379
   - logfile /var/log/rinetd.log
   - 说明：您可以使用 cat /etc/rinetd.conf命令来检验配置文件是否修改正确。
   - ![](https://cdn.nlark.com/yuque/0/2020/jpeg/195884/1597937067295-ee517e33-e17f-4d26-bfce-f262d66758bd.jpeg#height=47&id=nkYr8&originHeight=47&originWidth=647&originalType=binary&ratio=1&size=0&status=done&style=none&width=647)
   - 

#### 4.执行如下命令启动 rinetd。

   - rinetd
   - 注意
      - 您可以通过 echo rinetd >>/etc/rc.local 将 rinetd 设置为自启动。
      - 若遇到绑定报错，可以执行 pkill rinetd 结束进程，再执行 rinetd启动进程 rinetd。
      - rinetd 正常启动后， 执行netstat -anp | grep 6379 确认服务是否正常运行。
      - ![](https://cdn.nlark.com/yuque/0/2020/jpeg/195884/1597937067341-f158e903-fe66-4375-95ff-cfeda4b2a232.jpeg#height=61&id=jafrb&originHeight=61&originWidth=980&originalType=binary&ratio=1&size=0&status=done&style=none&width=980)
#### 5.在本地进行验证测试。

   - 您可以在本地通过 redis-cli 连接 ECS Linux 服务器后进行登录验证，比如安装了 rinetd 的服务器的 IP 是 1.1.1.1，即redis-cli -h 1.1.1.1 -a Redis的实例ID:Redis密码。或者通过 telent 连接 ECS Linux 服务器后进行操作验证。假设 ECS Linux 服务器的 IP 是 1.1.1.1，即 telnet 1.1.1.1 6379。
   - 连接上 ECS Linux 服务器后，输入连接 Redis 的密码：auth Redis的连接密码。
   - 进行数据写入及查询验证。



## 启动


```javascript
redis-server
```


## 配置

### 新建目录
```
sudo mkdir  redis-4.0.8/bin
sudo mkdir  redis-4.0.8/etc
sudo mkdir  redis-4.0.8/db
```

### 拷贝文件

```
cp src/mkreleasehdr.sh bin
cp src/redis-benchmark bin
cp src/redis-check-rdb bin
cp src/redis-cli bin
cp src/redis-server bin
```

## 修改redis.conf


```t
#修改为守护模式
daemonize yes
#设置进程锁文件
pidfile /usr/local/redis-3.2.8/redis.pid
#端口
port 6379
#客户端超时时间
timeout 300
#日志级别
loglevel debug
#日志文件位置
logfile /usr/local/redis-3.2.8/log-redis.log
#设置数据库的数量，默认数据库为0，可以使用SELECT <dbid>命令在连接上指定数据库id
databases 16
##指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合
#save <seconds> <changes>
#Redis默认配置文件中提供了三个条件：
save 900 1
save 300 10
save 60 10000
#指定存储至本地数据库时是否压缩数据，默认为yes，Redis采用LZF压缩，如果为了节省CPU时间，
#可以关闭该#选项，但会导致数据库文件变的巨大
rdbcompression yes
#指定本地数据库文件名
dbfilename dump.rdb
#指定本地数据库路径
dir /usr/local/redis-3.2.8/db/
#指定是否在每次更新操作后进行日志记录，Redis在默认情况下是异步的把数据写入磁盘，如果不开启，可能
#会在断电时导致一段时间内的数据丢失。因为 redis本身同步数据文件是按上面save条件来同步的，所以有
#的数据会在一段时间内只存在于内存中
appendonly no
#指定更新日志条件，共有3个可选值：
#no：表示等操作系统进行数据缓存同步到磁盘（快）
#always：表示每次更新操作后手动调用fsync()将数据写到磁盘（慢，安全）
#everysec：表示每秒同步一次（折衷，默认值）
appendfsync everysec
```


## 启动服务


### 启动
> ./bin/redis-server etc/redis.conf

### 查看日志
> tail -f log-redis.log

### OK
> ./bin/redis-cli

## 基本命令


### 查看所有数据
> keys *

### 插入键值对
> set a b

### 查看数据
> get a

