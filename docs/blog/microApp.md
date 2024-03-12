---
nav:
  title: 文章
  path: /blog
order: 999
category: Components
title: 微前端架构的试探
group: 2024年
---

## 项目背景

## 技术选型

目前使用的是支付宝开源的框架 qiankun, 主要原因是因为我们内部大部分的项目都用到了 umi, 然后 umi 有个集成框架叫 @umi/max,正好集成了 qiankun.

一键上手搭建的感觉还是很爽的

## 多种配置方案

## 主应用配置

## 子应用配置

## nginx 配置

具体配置参考

```json
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen         30058;
        server_name   localhost;
        root      E:\work\aircraft-carrier-fleet\dist;
        index   index.html;

        location / {
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

            try_files   $uri $uri/ /index.html;
            index    index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       30078;

        location /algorithm-warehouse {
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

            try_files   $uri $uri/ /algorithm-warehouse/index.html;
            alias    E:\work\algorithm-warehouse\dist;
            index    index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       30068;

        location /Intelligent-file-cabinet {
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' '*';
            add_header 'Access-Control-Allow-Headers' '*';

            try_files   $uri $uri/ /index.html;
            alias    E:\work\Intelligent-file-cabinet\dist;
            index    index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

## 参考文章

<https://juejin.cn/post/7113871265848360997?searchId=20240308152253A3CC20142A59F31D97E3#heading-8>

## Q&A
