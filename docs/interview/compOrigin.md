---
nav:
  title: 面试
  path: /interview
group:
  title: 💊 面试题库
  order: 2
---

# 计算机原理


## 描述一下cookies，sessionStorage 和localStorage的区别？


- cookie 在浏览器和服务器之间来回传递，SS和LS不会
- SS和LS 的储存空间更大
- SS和LS 有更多丰富易用的接口
- SS和LS 是有各自的储存空间
- LS 储存是永久性的，SS 关闭浏览器就没了



## 如何实现浏览器内多个标签之间的通信


- 调用LS Cookies 等本地储存方式



## IE6 BUG 的解决办法


- 双边距，float引起，使用display
- 3像素问题，float引起， 使用display：inline-3px
- 超链接 hover 点击失效， 注意顺序
- 无法定义1px左右的宽度容器（使用overflow：hidden；zoom：0.08；line-height：1px）



## 你有哪些性能优化的方法


- 减少http请求次数，css，js，html压缩，图片大小控制和压缩，网页cdn托管，data缓存，图片服务器
- 前端模板 js + 数据，减少由于html导致的带宽浪费，减少请求次数，
- 图片预加载，将样式表放在头部，脚本放在底部，加上时间戳
- 用innerHTML代替dom操作，减少dom操作次数，优化js性能
- 当需要设置的样式很多时，设置className而不是直接操作dom
- 避免在页面的主体布局中使用table，table要在其中的内容完全下载完之后才会完全显示，显示div+css布局慢。普通网站有一个普遍的思路，就是尽量向前端化，减少数据库操作，减少磁盘IO，
- 前端化：在不影响功能和体验的情况下，能在浏览器执行的不要在服务器执行，能在缓存服务器上直接返回的不要到应用服务器，程序能直接取到的结果不要到外部取，本机能取到的不要到远程取，内存能取到的不要到磁盘取，缓存中有的不要去数据库查询
- 减少数据库操作指：减少更新次数，缓存结果减少查询次数，将数据库执行的操作尽可能的让你的操作完成，减少磁盘IO指尽量不适用文件系统作为缓存，减少读写文件次数等。
- 程序优化永远要优化慢的部分



## http 状态码有哪些？分别代表啥意思？


- 100-199 用于指定客户端相应的某些动作
- 200-299 用于表示请求成功
- 300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息
- 400-499 用于指出客户端的错误。



> 400: 语义有误 401：当前请求需要用户验证 403: 服务器已经理解请求，但是拒绝执行他 404：页面找不到



- 500-599 用于支持服务器错误。501 服务器不可用



## 一个页面从输入 url 到页面显示完成，中间发生了什么？


- 查找浏览器缓存
- DNS 解析，查找该域名对应的IP，重定向（301），发出第二个 get 请求
- 进行HTTP 协议对话
- 客户端发送报头
- 文档开始下载
- 文档树建立，根据标记请求所需指定mime类型的文件
- 文件显示
- 浏览器这边做的工作大致分为以下几步：



> 加载：根据请求的url进行域名解析，向服务器发起请求，接受文件（html，js，css，图像等）
> 解析：对加载到的资源（html，js，css）进行语法解析，建议相应的内部数据结构（比如html的dom树，js的属性表，css的样式表规则等等）

## 浏览器的渲染原理
![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1612683125844-93e55bd2-58ba-4528-a47e-711c5659ad0b.png#height=129&id=EERpc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=257&originWidth=791&originalType=binary&ratio=1&size=171550&status=done&style=none&width=395.5)

1）浏览器会解析三个东西：

- 一个是HTML/SVG/XHTML，事实上，Webkit有三个C++的类对应这三类文档。解析这三种文件会产生一个DOM Tree。
- CSS，解析CSS会产生CSS规则树。
- Javascript，脚本，主要是通过DOM API和CSSOM API来操作DOM Tree和CSS Rule Tree.

2）解析完成后，浏览器引擎会通过DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree。注意：

- Rendering Tree 渲染树并不等同于DOM树，因为一些像Header或display:none的东西就没必要放在渲染树中了。
- CSS 的 Rule Tree主要是为了完成匹配并把CSS Rule附加上Rendering Tree上的每个Element。也就是DOM结点。也就是所谓的Frame。
- 然后，计算每个Frame（也就是每个Element）的位置，这又叫layout和reflow过程。

3）最后通过调用操作系统Native GUI的API绘制。


## 并发（concurrency）和并行（parallelism）区别
异步和这小节的知识点其实并不是一个概念，但是这两个名词确实是很多人都常会混淆的知识点。其实混淆的原因可能只是两个名词在中文上的相似，在英文上来说完全是不同的单词。


并发是宏观概念，我分别有任务 A 和任务 B，在一段时间内通过任务间的切换完成了这两个任务，这种情况就可以称之为并发。


并行是微观概念，假设 CPU 中存在两个核心，那么我就可以同时完成任务 A、B。同时完成多个任务的情况就可以称之为并行。
