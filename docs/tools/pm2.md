---
nav:
  title: 工具
  path: /tools
group:
  title: 💊 pm2
  order: 1
  path: /pm2
---

# 💊 pm2

## 配置文件说明
```javascript
{
    "apps": [{
        "exec_mode": "cluster",                // 应用启动模式，支持fork和cluster模式
        "instances": 4,                             // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
        "script": "./bin/www",                      // 执行文件
        "name": "type-node",
        "cwd": "./",                                // 根目录
        "args": "",                                 // 传递给脚本的参数
        "interpreter": "node",                      // 指定的脚本解释器
        "interpreter_args": "",                     // 传递给解释器的参数
        "watch": true,                              // 是否监听文件变动然后重启
        "ignore_watch": [                           // 不用监听的文件
            "node_modules",
            "logs"
        ],
        "max_memory_restart": 8,                    // 最大内存限制数，超出自动重启
        "error_file": "./logs/app-err.log",         // 错误日志文件
        "out_file": "./logs/app-out.log",           // 正常日志文件
        "merge_logs": true,                         // 设置追加日志而不是新建日志
        "log_date_format": "YYYY-MM-DD HH:mm:ss",   // 指定日志文件的时间格式
        "min_uptime": "60s",                        // 应用运行少于时间被认为是异常启动
        "max_restarts": 30,                         // 最大异常重启次数，即小于min_uptime运行时间重启次数；
        "autorestart": true,                        // 默认为true, 发生异常的情况下自动重启
        "cron_restart": "",                         // crontab时间格式重启应用，目前只支持cluster模式;
        "restart_delay": "60s"                      // 异常重启情况下，延时重启时间
        "env": {
            "NODE_ENV": "production",                // 环境参数，当前指定为生产环境 process.env.NODE_ENV
            "REMOTE_ADDR": "爱上大声地"               // process.env.REMOTE_ADDR
        },
        "env_dev": {
            "NODE_ENV": "development",              // 环境参数，当前指定为开发环境 pm2 start app.js --env_dev
            "REMOTE_ADDR": ""
        },
        "env_test": {                               // 环境参数，当前指定为测试环境 pm2 start app.js --env_test
            "NODE_ENV": "test",
            "REMOTE_ADDR": ""
        }
    }]
}
```


## 通过配置文件启动
```javascript
pm2 start pm2.json --env production
```
## ​

## 重启
```javascript
pm2 restart app.js
```
​

## 停止进程
```javascript
pm2 stop app_name | app_id | all
```
## 删除进程
```javascript
pm2 delete app_name | app_id | all
```
### 
### 查看进程列表
```javascript
pm2 list
```


## 查看某个进程信息
```javascript
pm2 descripe app_name | app_id
```
## ​

## 查看进程详情
```javascript
pm2 show {id, appname}
```


## 性能监控
```javascript
pm2 monit
```
​

## 创建并关闭分组node进程
```javascript
// 创建
pm2 start api.js --namespace chihu
pm2 start ssr.js --namespace chihu
pm2 start db.js --namespace chihu
pm2 start monitor.js --namespace chihu

// 关闭
pm2 stop chihu
```


## 运行 npm 命令
pm2 start npm --name "webot" -- run build

- --watch
   - 监听应用目录的变化，一旦发生变化，自动重启。
- -i
   - 启用多少个实例，可用于负载均衡，如果 -i 0 或者 -i max，则根据当前机器核数确定实例数目。
- --ignore-watch
   - 排除监听的目录或文件，可以是特定的文件名，也可以是正则。
- -n
   - 应用的名称，查看应用信息的时候可以用到。
- -o
   - 标准输出日志文件的路径。
- -e
   - 错误输出日志文件的路径。
- --max-memory-restart 100M
   - 内存超过使用上限自动重启

​

## Q&A
### 1. Cannot find module ****ProcessContainerFork.js


```
rm -rf ~/.pm2
```


