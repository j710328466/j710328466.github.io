---
nav:
  title: 文章
  path: /blog
toc: content
category: Components
title: docker 入门
group:
  title: 2020年
  order: 3
---

## 通过 brew 下载

> brew cask install docker

## 设置国内镜像源

> preference -> deamon（建议阿里云镜像源）

## 测试 docker 是否可用

> docker run -d -p 80:80 --name webserver nginx

## 用 nginx 镜像启动一个容器，命名为 webserver

停止

```
docker stop webserver
docker rm webserver
```

进入上面命名后的 webserver 容器:

```
docker exec -it webserver bash （进入容器）
echo 'Hello, Docker!'
/usr/share/nginx/html/index.html（修改容器内容）
exit（退出容器）
commit 复制镜像
```

## 查看镜像近期的改动

> docker diff

## 提交信息

```
docker commit
--author "Tao Wang twang2218@gmail.com"
--message "修改了默认网页"
webserver
nginx:v2
```

## 查看该镜像的提交记录

> docker history nginx:v2

## 运行该镜像在 81 端口

> docker run --name web2 -d -p 81:80 nginx:v2
