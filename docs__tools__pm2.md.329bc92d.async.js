(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{o80I:function(e,a,n){"use strict";n.r(a);var t=n("xwgP"),l=n.n(t),r=n("OS9G"),c=n("W+6v");n("Rsk4");a["default"]=e=>(l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"-pm2"},l.a.createElement(r["AnchorLink"],{to:"#-pm2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udc8a pm2"),l.a.createElement("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},l.a.createElement(r["AnchorLink"],{to:"#\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"),l.a.createElement(c["a"],{code:'{\n    "apps": [{\n        "exec_mode": "cluster",                // \u5e94\u7528\u542f\u52a8\u6a21\u5f0f\uff0c\u652f\u6301fork\u548ccluster\u6a21\u5f0f\n        "instances": 4,                             // \u5e94\u7528\u542f\u52a8\u5b9e\u4f8b\u4e2a\u6570\uff0c\u4ec5\u5728cluster\u6a21\u5f0f\u6709\u6548 \u9ed8\u8ba4\u4e3afork\uff1b\u6216\u8005 max\n        "script": "./bin/www",                      // \u6267\u884c\u6587\u4ef6\n        "name": "type-node",\n        "cwd": "./",                                // \u6839\u76ee\u5f55\n        "args": "",                                 // \u4f20\u9012\u7ed9\u811a\u672c\u7684\u53c2\u6570\n        "interpreter": "node",                      // \u6307\u5b9a\u7684\u811a\u672c\u89e3\u91ca\u5668\n        "interpreter_args": "",                     // \u4f20\u9012\u7ed9\u89e3\u91ca\u5668\u7684\u53c2\u6570\n        "watch": true,                              // \u662f\u5426\u76d1\u542c\u6587\u4ef6\u53d8\u52a8\u7136\u540e\u91cd\u542f\n        "ignore_watch": [                           // \u4e0d\u7528\u76d1\u542c\u7684\u6587\u4ef6\n            "node_modules",\n            "logs"\n        ],\n        "max_memory_restart": 8,                    // \u6700\u5927\u5185\u5b58\u9650\u5236\u6570\uff0c\u8d85\u51fa\u81ea\u52a8\u91cd\u542f\n        "error_file": "./logs/app-err.log",         // \u9519\u8bef\u65e5\u5fd7\u6587\u4ef6\n        "out_file": "./logs/app-out.log",           // \u6b63\u5e38\u65e5\u5fd7\u6587\u4ef6\n        "merge_logs": true,                         // \u8bbe\u7f6e\u8ffd\u52a0\u65e5\u5fd7\u800c\u4e0d\u662f\u65b0\u5efa\u65e5\u5fd7\n        "log_date_format": "YYYY-MM-DD HH:mm:ss",   // \u6307\u5b9a\u65e5\u5fd7\u6587\u4ef6\u7684\u65f6\u95f4\u683c\u5f0f\n        "min_uptime": "60s",                        // \u5e94\u7528\u8fd0\u884c\u5c11\u4e8e\u65f6\u95f4\u88ab\u8ba4\u4e3a\u662f\u5f02\u5e38\u542f\u52a8\n        "max_restarts": 30,                         // \u6700\u5927\u5f02\u5e38\u91cd\u542f\u6b21\u6570\uff0c\u5373\u5c0f\u4e8emin_uptime\u8fd0\u884c\u65f6\u95f4\u91cd\u542f\u6b21\u6570\uff1b\n        "autorestart": true,                        // \u9ed8\u8ba4\u4e3atrue, \u53d1\u751f\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b\u81ea\u52a8\u91cd\u542f\n        "cron_restart": "",                         // crontab\u65f6\u95f4\u683c\u5f0f\u91cd\u542f\u5e94\u7528\uff0c\u76ee\u524d\u53ea\u652f\u6301cluster\u6a21\u5f0f;\n        "restart_delay": "60s"                      // \u5f02\u5e38\u91cd\u542f\u60c5\u51b5\u4e0b\uff0c\u5ef6\u65f6\u91cd\u542f\u65f6\u95f4\n        "env": {\n            "NODE_ENV": "production",                // \u73af\u5883\u53c2\u6570\uff0c\u5f53\u524d\u6307\u5b9a\u4e3a\u751f\u4ea7\u73af\u5883 process.env.NODE_ENV\n            "REMOTE_ADDR": "\u7231\u4e0a\u5927\u58f0\u5730"               // process.env.REMOTE_ADDR\n        },\n        "env_dev": {\n            "NODE_ENV": "development",              // \u73af\u5883\u53c2\u6570\uff0c\u5f53\u524d\u6307\u5b9a\u4e3a\u5f00\u53d1\u73af\u5883 pm2 start app.js --env_dev\n            "REMOTE_ADDR": ""\n        },\n        "env_test": {                               // \u73af\u5883\u53c2\u6570\uff0c\u5f53\u524d\u6307\u5b9a\u4e3a\u6d4b\u8bd5\u73af\u5883 pm2 start app.js --env_test\n            "NODE_ENV": "test",\n            "REMOTE_ADDR": ""\n        }\n    }]\n}',lang:"javascript"}),l.a.createElement("h2",{id:"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u542f\u52a8"},l.a.createElement(r["AnchorLink"],{to:"#\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u542f\u52a8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u542f\u52a8"),l.a.createElement(c["a"],{code:"pm2 start pm2.json --env production",lang:"javascript"}),l.a.createElement("h2",{id:""},l.a.createElement(r["AnchorLink"],{to:"#","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u200b"),l.a.createElement("h2",{id:"\u91cd\u542f"},l.a.createElement(r["AnchorLink"],{to:"#\u91cd\u542f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u91cd\u542f"),l.a.createElement(c["a"],{code:"pm2 restart app.js",lang:"javascript"}),l.a.createElement("p",null,"\u200b"),l.a.createElement("h2",{id:"\u505c\u6b62\u8fdb\u7a0b"},l.a.createElement(r["AnchorLink"],{to:"#\u505c\u6b62\u8fdb\u7a0b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u505c\u6b62\u8fdb\u7a0b"),l.a.createElement(c["a"],{code:"pm2 stop app_name | app_id | all",lang:"javascript"}),l.a.createElement("h2",{id:"\u5220\u9664\u8fdb\u7a0b"},l.a.createElement(r["AnchorLink"],{to:"#\u5220\u9664\u8fdb\u7a0b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5220\u9664\u8fdb\u7a0b"),l.a.createElement(c["a"],{code:"pm2 delete app_name | app_id | all",lang:"javascript"}),l.a.createElement("h3",{id:"-1"},l.a.createElement(r["AnchorLink"],{to:"#-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"}))),l.a.createElement("h3",{id:"\u67e5\u770b\u8fdb\u7a0b\u5217\u8868"},l.a.createElement(r["AnchorLink"],{to:"#\u67e5\u770b\u8fdb\u7a0b\u5217\u8868","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u8fdb\u7a0b\u5217\u8868"),l.a.createElement(c["a"],{code:"pm2 list",lang:"javascript"}),l.a.createElement("h2",{id:"\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u4fe1\u606f"},l.a.createElement(r["AnchorLink"],{to:"#\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u4fe1\u606f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u4fe1\u606f"),l.a.createElement(c["a"],{code:"pm2 descripe app_name | app_id",lang:"javascript"}),l.a.createElement("h2",{id:"-2"},l.a.createElement(r["AnchorLink"],{to:"#-2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u200b"),l.a.createElement("h2",{id:"\u67e5\u770b\u8fdb\u7a0b\u8be6\u60c5"},l.a.createElement(r["AnchorLink"],{to:"#\u67e5\u770b\u8fdb\u7a0b\u8be6\u60c5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u8fdb\u7a0b\u8be6\u60c5"),l.a.createElement(c["a"],{code:"pm2 show {id, appname}",lang:"javascript"}),l.a.createElement("h2",{id:"\u6027\u80fd\u76d1\u63a7"},l.a.createElement(r["AnchorLink"],{to:"#\u6027\u80fd\u76d1\u63a7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6027\u80fd\u76d1\u63a7"),l.a.createElement(c["a"],{code:"pm2 monit",lang:"javascript"}),l.a.createElement("p",null,"\u200b"),l.a.createElement("h2",{id:"\u521b\u5efa\u5e76\u5173\u95ed\u5206\u7ec4node\u8fdb\u7a0b"},l.a.createElement(r["AnchorLink"],{to:"#\u521b\u5efa\u5e76\u5173\u95ed\u5206\u7ec4node\u8fdb\u7a0b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u521b\u5efa\u5e76\u5173\u95ed\u5206\u7ec4node\u8fdb\u7a0b"),l.a.createElement(c["a"],{code:"// \u521b\u5efa\npm2 start api.js --namespace chihu\npm2 start ssr.js --namespace chihu\npm2 start db.js --namespace chihu\npm2 start monitor.js --namespace chihu\n\n// \u5173\u95ed\npm2 stop chihu",lang:"javascript"}),l.a.createElement("h2",{id:"\u8fd0\u884c-npm-\u547d\u4ee4"},l.a.createElement(r["AnchorLink"],{to:"#\u8fd0\u884c-npm-\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8fd0\u884c npm \u547d\u4ee4"),l.a.createElement("p",null,'pm2 start npm --name "webot" -- run build'),l.a.createElement("ul",null,l.a.createElement("li",null,"--watch",l.a.createElement("ul",null,l.a.createElement("li",null,"\u76d1\u542c\u5e94\u7528\u76ee\u5f55\u7684\u53d8\u5316\uff0c\u4e00\u65e6\u53d1\u751f\u53d8\u5316\uff0c\u81ea\u52a8\u91cd\u542f\u3002"))),l.a.createElement("li",null,"-i",l.a.createElement("ul",null,l.a.createElement("li",null,"\u542f\u7528\u591a\u5c11\u4e2a\u5b9e\u4f8b\uff0c\u53ef\u7528\u4e8e\u8d1f\u8f7d\u5747\u8861\uff0c\u5982\u679c -i 0 \u6216\u8005 -i max\uff0c\u5219\u6839\u636e\u5f53\u524d\u673a\u5668\u6838\u6570\u786e\u5b9a\u5b9e\u4f8b\u6570\u76ee\u3002"))),l.a.createElement("li",null,"--ignore-watch",l.a.createElement("ul",null,l.a.createElement("li",null,"\u6392\u9664\u76d1\u542c\u7684\u76ee\u5f55\u6216\u6587\u4ef6\uff0c\u53ef\u4ee5\u662f\u7279\u5b9a\u7684\u6587\u4ef6\u540d\uff0c\u4e5f\u53ef\u4ee5\u662f\u6b63\u5219\u3002"))),l.a.createElement("li",null,"-n",l.a.createElement("ul",null,l.a.createElement("li",null,"\u5e94\u7528\u7684\u540d\u79f0\uff0c\u67e5\u770b\u5e94\u7528\u4fe1\u606f\u7684\u65f6\u5019\u53ef\u4ee5\u7528\u5230\u3002"))),l.a.createElement("li",null,"-o",l.a.createElement("ul",null,l.a.createElement("li",null,"\u6807\u51c6\u8f93\u51fa\u65e5\u5fd7\u6587\u4ef6\u7684\u8def\u5f84\u3002"))),l.a.createElement("li",null,"-e",l.a.createElement("ul",null,l.a.createElement("li",null,"\u9519\u8bef\u8f93\u51fa\u65e5\u5fd7\u6587\u4ef6\u7684\u8def\u5f84\u3002"))),l.a.createElement("li",null,"--max-memory-restart 100M",l.a.createElement("ul",null,l.a.createElement("li",null,"\u5185\u5b58\u8d85\u8fc7\u4f7f\u7528\u4e0a\u9650\u81ea\u52a8\u91cd\u542f")))),l.a.createElement("p",null,"\u200b"),l.a.createElement("h2",{id:"qa"},l.a.createElement(r["AnchorLink"],{to:"#qa","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Q&A"),l.a.createElement("h3",{id:"1-cannot-find-module-processcontainerforkjs"},l.a.createElement(r["AnchorLink"],{to:"#1-cannot-find-module-processcontainerforkjs","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1. Cannot find module ****ProcessContainerFork.js"),l.a.createElement(c["a"],{code:"rm -rf ~/.pm2",lang:"unknown"}))))}}]);