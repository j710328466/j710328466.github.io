---
nav:
  title: 工具
  path: /tools
toc: content
group:
  title: 💊 配置https
  order: 2
  path: /https
---

# 💊 配置 https

## 配置流程

本方法配置 https 用的是 Let’s Encrypt ，系统为 centOS

### 1. 防火墙打开 80 和 443 端口

```js
firewall-cmd --permanent --add-port=80/tcp
firewall-cmd --permanent --add-port=443/tcp
firewall-cmd --reload
```

### 2. 安装 certbot 工具

```js
yum install -y epel-release
yum install -y certbot
```

### 3. 申请证书

申请成功后，证书会保存在 /etc/letsencrypt/live/j710328466.github.io/ 下面：

```js
certbot certonly --webroot -w [Web站点目录] -d [站点域名] -m [联系人email地址] --agree-tos
```

> e.g: certbot certonly --webroot -w /usr/local/nginx/html -d j710328466.github.io -m <jzx710328466@gmail.com> --agree-tos

### 4. 创建自动更新证书脚本

因为 Let's Encrypt 的证书有效时长是 90 天，如果想要省去手动去更新脚本的操作，那这个时候就需要给个脚本来实现自动化

```js
//更新证书
certbot renew --dry-run
 
//如果不需要返回的信息，可以用静默方式
certbot renew --quiet

// 编辑开始写入自动化脚本
crontab -e

// 把这段写入脚本的最后一行，意思是每月的一号 5点会自动更新签名并且重新启动nginx
00 05 01 * * /usr/bin/certbot renew --quiet && /bin/systemctl restart nginx
```

### 5. 配置 nginx

1. 修改默认的 server

```js
server {
  listen       80;
  server_name  j710328466.github.io;
  rewrite ^ https://$server_name$request_uri? permanent;
}
```

2. 修改 https 的 server

```js
# HTTPS server
#
server {
    listen       443 ssl;
    server_name  j710328466.github.io;

    ssl_certificate      /etc/letsencrypt/live/j710328466.github.io/fullchain.pem;
    ssl_certificate_key  /etc/letsencrypt/live/j710328466.github.io/privkey.pem;

    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;

    ssl_dhparam /etc/ssl/private/dhparam.pem;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    ssl_ciphers  'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128:AES256:AES:DES-CBC3-SHA:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK';
    ssl_prefer_server_ciphers  on;

    location / {
        root   html;
        index  index.html index.htm;
    }
}
```
