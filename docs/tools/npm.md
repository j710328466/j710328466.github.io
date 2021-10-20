---
nav:
  title: 工具
  path: /tools
group:
  title: 💊 npm 操作手册
  order: 2
  path: /npm
---

# 💊 npm 操作手册

## 发布npm 包
### 一、初始化

   - npm init
### 二、登录

   - npm config set registry=http://registry.npmjs.org 切换回官方源
   - （[http://registry.npm.taobao.org/](http://registry.npm.taobao.org/)如果是淘宝源）
### 三、发布

   - npm publish
> 发布@开头的包加上 --access public 

### 四、删除包
npm unpublish nicecode-tools --force 


### 错误大全

   - *报错一： npm ERR! unscoped packages cannot be private : jzx-deom
      - ·处理：npm publish --access public
   - *报错二："Jzx-deom" is invalid for new packages : Jzx-deom
      - ·处理：发布包不允许大写字母
   - 报错三：You do not have permission to publish "deom". Are you logged in as the correct user? : deom
      - ·处理：换个包名称，包已存在
## 升级babel

- npx babel-upgrade --write --install



## 安装 npm-check

    - $ npm i npm-check -g
    - 交互式选择所有 umi 相关依赖更新
    - $ npm-check -u
    - # 指定 npm 客户端
```javascript
NPM_CHECK_INSTALLER=cnpm npm-check -u
```
