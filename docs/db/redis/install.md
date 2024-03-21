---
nav:
  title: 数据库
  path: /db
toc: content
group:
  title: 💊 redis
  order: 2
---

# 安装与配置

- redis-cli -h 101.132.156.228 -a  r-uf60a44b13666134:'123456Jzx'

## 在云服务器 ECS Linux 中安装 rinetd。

- wget [http://www.boutell.com/rinetd/http/rinetd.tar.gz&&tar](http://www.boutell.com/rinetd/http/rinetd.tar.gz&&tar) -xvf rinetd.tar.gz&&cd rinetd
- sed -i 's/65536/65535/g' rinetd.c (修改端口范围)
- mkdir /usr/man&&make&&make install
- > 注意：rinetd 安装包下载地址不确保下载可用性，您可以自行搜索安装包进行下载使用。

## 2.打开配置文件 rinetd.conf。

- vi /etc/rinetd.conf
  > 注意：配置文件可能为 /usr/local/etc/redis.conf

## 3.在配置文件中输入如下内容：

- 0.0.0.0 6379 Redis 的链接地址 6379
- logfile /var/log/rinetd.log
- 说明：您可以使用  cat /etc/rinetd.conf 命令来检验配置文件是否修改正确。
- ![](https://cdn.nlark.com/yuque/0/2020/jpeg/195884/1597937067295-ee517e33-e17f-4d26-bfce-f262d66758bd.jpeg#height=47&id=nkYr8&originHeight=47&originWidth=647&originalType=binary&ratio=1&size=0&status=done&style=none&width=647)
-

## 4.执行如下命令启动 rinetd。

- rinetd
- 注意
  - 您可以通过  echo rinetd >>/etc/rc.local  将 rinetd 设置为自启动。
  - 若遇到绑定报错，可以执行  pkill rinetd  结束进程，再执行  rinetd 启动进程 rinetd。
  - rinetd 正常启动后， 执行 netstat -anp | grep 6379  确认服务是否正常运行。
  - ![](https://cdn.nlark.com/yuque/0/2020/jpeg/195884/1597937067341-f158e903-fe66-4375-95ff-cfeda4b2a232.jpeg#height=61&id=jafrb&originHeight=61&originWidth=980&originalType=binary&ratio=1&size=0&status=done&style=none&width=980)

## 5.在本地进行验证测试。

- 您可以在本地通过 redis-cli 连接 ECS Linux 服务器后进行登录验证，比如安装了 rinetd 的服务器的 IP 是 1.1.1.1，即 redis-cli -h 1.1.1.1 -a Redis 的实例 ID:Redis 密码。或者通过 telent 连接 ECS Linux 服务器后进行操作验证。假设 ECS Linux 服务器的 IP 是 1.1.1.1，即  telnet 1.1.1.1 6379。
- 连接上 ECS Linux 服务器后，输入连接 Redis 的密码：auth Redis 的连接密码。
- 进行数据写入及查询验证。
