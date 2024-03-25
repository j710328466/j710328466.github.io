---
nav:
  title: 文章
  path: /blog
toc: content
category: Components
title: Git 入门
group:
  title: 2020年
---

centos 安装命令：

```js
yum install git
```

## 1. 提交格式管理

模板格式：

```json
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

>

> 例子：

```
feat(changelog): 新增了一个按钮组件

详细描述新增的内容...

[不兼容变更: 影响内容的所有情况...]

[close #43f32]

[revert: feat(pencil): add 'graphiteWidth' option
This reverts commit 667ecc1654a317a13331b17617d973392f415f02.]
```

### 1.1 type

指此次上传的类型。

- **build**：影响构建系统或外部依赖的改变
- **ci**：改变 CI 配置文件和脚本
- **docs**：只改变文档
- **feat**：一个新功能
- **fix**：一个 bug fix
- **perf**：代码更改,提高了性能
- **refactor**：代码重构
- **style**：不影响代码含义，只是代码风格的改变
- **test**：添加缺失的测试或修正现有的测试
- **wip**：移除文件或者代码

### 1.2 scope

指被影响的内容，这样能方便阅读根据提交信息生成的更新日志。

### 1.3 subject

是这次提交的一次简短描述，一行不超过 100 个字符。

> 尽量包含主谓宾结构，不要单词。

### 1.4 body

对本次提交详细的描述，一般一行不超过 100 个字符。

### 1.5 footer

分为以下两种情况：

- **不兼容变动**：如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。
- **关闭 Issue**：如果当前 commit 针对某个 issue，那么可以在 Footer 部分关闭这个 issue 。

### 1.6 revert

还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以 revert:开头，后面跟着被撤销 Commit 的 Header。
​

## 2. 版本管理规范

### 2.1 格式

> <主版本号>.<次版本号>.<修订版本号>.[日期]-<版本修饰词>

主版本号：一次平台大改动，接近重构。
次版本号：一次新功能发版。
修订版本号：一次 bug 修复版本。

eg：1.2.3.190101-beta 表示发布了 1 次大版本，新增了 2 次功能，修复了 3 次 bug，该版本发布时间为 20190101，目前为测试阶段。

### 2.2 版本修饰词参考

- alpha：内部版本
- beta：测试版
- demo：演示版
- enhance：增强版
- free：自由版
- lts：长期维护版本
- release：发行版
- rc：即将作为正式版发布
- standard：标准版
- ultimate：旗舰版
- upgrade：升级版

## git 命令

### 设置 Git 的信息(如果是第一次的话)

> git config --global user.name "名字"
> git config --global user.email "邮箱"

### 生成密匙(很重要)

这是你连接的必要部分，就相当于账号的登录密码，有这个你才能对 GitHub 上的项目进行操作

> ssh-keygen -t rsa -C "[710328466@qq.com](mailto:710328466@qq.com)"

### 配置密匙

- 将获取的密钥放到 GitHub->setting 下的 SSH and GPG keys 里面

### 新建项目

- 进入首页，新建一个 repository
- 填写相应信息
  Repository name: 仓库名称

```
  Description(可选): 仓库描述介绍

  Public, Private : 仓库权限（公开共享，私有或指定合作者）
  Initialize this repository with a README: 添加一个README.md

  gitignore: 不需要进行版本管理的仓库类型，对应生成文件.gitignore

  license: 证书类型，对应生成文件LICENSE
```

### 下载 git bash

- 下载地址去百度好吗？

### 将 gitHub 上的仓库克隆到本地

```javascript
* git clone (https://github.com/nicecoders/yourItem.git)（nicecoders/yourBlog.git替换成你博客的地址）
```

> 这个步骤以后你的本地项目文件夹下面就会多出个文件夹，该文件夹名即为你 github 上面的项目名，如图我多出了个 yourItem 文件夹，我们把本地项目文件夹下的所有文件（除了新多出的那个文件夹不用），其余都复制到那个新多出的文件夹下

### cd Test 打开 Test 文件夹

```javascript
 git add .    (添加所有文件)
 git add readme.md
 git commit -m "信息"
* git push -u origin master  将本地文件上传到git仓库
```

> 如果 push -u....报错，你就改成 git pull --rebase origin master,重新 push 就可以了

## git 基本操作

### touch 文件名

添加到缓存

### git status

> 查看该项目改变的文件

- git status

### git diff

> 默认是暂未缓存的改动，这个可以查自己目前版本和上一个版本的改动位置

#### git diff --cached

> 查看已缓存的改动

#### git diff HEAD

> 查看已缓存与未缓存的所有改动

#### git diff --stat

> 显示摘要而非整个 diff

### git rm

> 将条目从缓存区中移除

### git mv

> 用于移动或重命名一个文件，目录

```javascript
git add README
git mv README README.md
ls
```

## git 分支管理

### git branch

- 查看当前分支

> 后面加单词，即是创建分支: git branch day1

### 删除分支

> git branch -d testing

### git checkout ‘分支名’

> 切换分支

### git checkout -b newtest

> 创建新分支并切换到该分支下

### git merge 分支

> 合并分支
