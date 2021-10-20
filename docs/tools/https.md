---
nav:
  title: 工具
  path: /tools
group:
  title: 💊 配置https
  order: 2
  path: /https
---


# 💊 配置https
[https://learnku.com/articles/33400](https://learnku.com/articles/33400)
​

本方法配置https用的是Let’s Encrypt ，系统为centOS
​

## 方案1
​

* 一、安装nginx，需要安装ssl，安装过程省略

* 二、安装certbot

> sudo yum install python2-certbot-nginx 

* 三、运行
> sudo certbot --nginx 
如果运行失败，出现包不存在，执行如下操作（以下是个巨坑） :
```
pip uninstall requests 
pip uninstall urllib3 
yum remove python-urllib3 
yum remove python-requests 
yum install python-urllib3 
yum install python-requests 
yum installcertbot 
yum install docker-compose 
```
启动之后会让你输入邮箱、域名等一些信息，很简单，这里就不多说了。
另外，nginx的server_name需要用你配置的域名，不然无法自动配置

* 四、错误处理（不报错请无视）
如果出现这个错误：The error was: NoInstallationError()那就是找不到nginx环境 解决： 
```
ln -s /usr/local/nginx/sbin/nginx /usr/bin/nginx 
ln -s /usr/local/nginx/conf/ /etc/nginx 
```

* 五、定时注册
这里需要注意的是https的服务时间为3个月，需要定时注册，执行以下命令即可
sudo certbot renew --dry-run
​

## 方案2
## 配置证书
我们在 etc/nginx/ 目录下新建 ssl 文件夹来存放证书。把 crt 证书文件和 key 私钥文件上传到这里。然后就可以配置 Nginx 配置文件了。
我的配置文件放在 sites-enabled 文件夹里，我们删掉默认的文件新建一个，具体配置内容可以参考腾讯云的操作指导。
下面是我的配置文件
​

```javascript
# 配置 http 访问时通过 301 转发到 https 上。
server{
    listen 80;
    server_name example.com www.example.com;
    return 301 https://www.example.com$request_uri;
}

# 证书部分内容配置，注意证书路径写对，其他地方照抄就行了
server {
    listen 443 ssl default_server;
    server_name www.example.com;
    ssl on;
    ssl_certificate /etc/nginx/ssl/1_www.example.com_bundle.crt;
    ssl_certificate_key /etc/nginx/ssl/2_www.example.com.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://127.0.0.1:8000;
    }

}

# 这一步把 顶级域名转发到 www 二级域名上，有利于 SEO
server {
    listen 443 ssl;
    server_name example.com;
    return 301 https://www.example.com$request_uri;

}
```
第一个server 配置的是把普通 80 端口访问的 http 协议转发到 https 访问。 第二个server 配置的就是证书路径和一些参数，这个照抄就行了，只要把证书路径写对 第三个server 配置的是把不带 www 的顶级域名转发到带 www 的二级域名，利于 SEO. 比如 example.com 会自动跳转到 www.example.com 。
