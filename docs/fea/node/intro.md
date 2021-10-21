---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 node
  order: 4
  path: /node
---


# 💊 node

## 安装
### 方法1
#### 拉取nvm

      - wget -qO- [https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh](https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh) | bash
#### 安装nvm
```javascript
// 打开bash
source ~/.bash_profile

// 写入 node文件指向
export NODE_HOME=/usr/local/tool/nodejs/node  
export PATH=$NODE_HOME/bin:$PATH
```

      - nvm install node（版本号）or nvm install stable
      - 方案2
      - curl --silent --location [https://rpm.nodesource.com/setup_11.x](https://rpm.nodesource.com/setup_11.x)| sudo bash -
### 方法2


1. 第一步
```
wget https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-linux-x64.tar.gz
```


2. 第二步
```
tar -xvf node-v12.16.1-linux-x64.tar.gz
yum install gcc gcc-c++
```


3. 第三步
```
mv node-v12.16.1-linux-x64.tar.gz node
```

4. 第四步
```
ln -s /usr/local/bin/node/bin/node /usr/bin/node
ln -s /usr/local/bin/node/bin/npm /usr/bin/npm
ln -s /usr/local/bin/node/bin/npx /usr/bin/npx
```


### 安装 GIT

   - curl [https://setup.ius.io](https://setup.ius.io) | sh
   - yum install -y git2u
   - git --version
