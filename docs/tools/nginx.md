---
nav:
  title: 工具
  path: /tools
toc: content
group:
  title: 💊 nginx
  order: 1
  path: /nginx
---

# 💊 nginx

## 安装

### 环境确认

#### 确认网络

    - ping [j710328466.github.io](j710328466.github.io)

#### 关闭 iptables 规则

    - iptables -L 查看
    - iptables -F 关闭
    - iptables -t nat -L

#### 关闭 getenforce

    - setenforce 0

### 新建文件目录

```
- backup 备份
- app 源文件
- logs 日志
- work 脚本
- download 下载资源
```

### 安装编译工具和库

如果没有再安装

```js
// 1
wget [http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz](http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz)

// 2
yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
```

#### 确认 yum 源并更新源

    - yum list|grep gcc
    - yum install -y epel-release
    - yum -y update​

### centos 快速安装

    - yum install nginx -y

## 默认文件位置

```js
/etc/nginx/nginx.conf  //yum方式安装后默认配置文件的路径

/usr/share/nginx/html  //nginx网站默认存放目录

/usr/share/nginx/html/index.html //网站默认主页路径
```

## 常用命令

### 查看 nginx 配置文件路径和安装路径

> nginx -t

### 开始

方法 1. systemctl start nginx

方法 2. systemctl enable --now nginx

### 重启

> nginx -s reload
> systemctl restart nginx

### 杀掉

> killall -9 nginx​

### 初始目录

> /usr/share/nginx/html

## 配置文件

```json
//  默认配置文件 /etc/nginx/nginx.conf
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    include /etc/nginx/conf.d/*.conf;

    upstream nodetest {
        server 127.0.0.1:3000;
    }

    upstream mongo_backend {
        server 127.0.0.1:27017;
    }

    server {
        listen       80;
        server_name  nicecoders.github.io github.io;
        root         /usr/share/nginx/html;

        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

    server {
       listen       80;
       server_name  j710328466.github.io;

       location / {
           # add_header Access-Control-Allow-Origin *;
           # add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
           # add_header Access-Control-Allow-Headers *;
           # 反向代理到 3000 端口
           #proxy_pass http://nodetest;
           proxy_pass http://0.0.0.0:3000;
           root   html;
           index  index.html index.htm;
       }

       error_page   500 502 503 504  /50x.html;
       location = /50x.html {
           root   html;
       }
    }

   server {
        listen       80;
        server_name  nicecoders.github.io;

        include /etc/nginx/default.d/*.conf;

        location / {
                # 反向代理到 3100 端口
                proxy_pass http://0.0.0.0:3688;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
                root   html;
        }
    }

}
```

### 参数介绍

1. alias: 覆盖式定义文件路径
2. root: 增量式定义文件路径

举个例子:

```js
location /t/ {
  root /www/root/html/;
}
// 访问路径: /t/test.png   ---> /www/root/html/t/test.png

location /t/ {
  alias /www/root/html/;
}
// 访问路径: /t/test.png   ---> /www/root/html/test.png
```

## Q&A

### forbedden 403

第一种方法给文件夹加上权限，第二种方法切换一个更高级别的账号

当然我更建议使用第一种

```js
chmod -R 777 /data
chmod -R 777 /data/www
```

还不行的话尝试关闭 selinux，具体操作如下：

```javascript
vi /etc/selinux/config

 #SELINUX=enforcing
 SELINUX=disabled
```

### Could not resolve host: mirrorlist.centos.org Centos 7

#### 第一步：进入 /etc/resolv.conf

加入文件配置内容如下：

```json
nameserver 9.9.9.9
```

### loaded plugins: fastestmirror, langpacks loading mirror speeds from cached hostfile

1.修改插件的配置文件

```
# vi /etc/yum/pluginconf.d/fastestmirror.conf
```

将 enabled=1 改为 enabled=0

2.修改 yum 的配置文件

```
# vi /etc/yum.conf
```

将 plugins=1 改为 plugins=0
