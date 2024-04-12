---
nav:
  title: 技巧
  path: /skill
  order: 5
toc: content
group:
  title: 💊 面试题库
  order: 1
---

# 面试技巧

## 自我介绍技巧

1. 个人的基本情况介绍，简历上有的就大概跳过
2. 个人擅长什么，技术上的和非技术上的，技术上聊专长，非技术聊个人
3. 做过的项目，挑一些核心的说
4. 自己的一些想法和思考，兴趣和观点，让面试官感觉你是个爱折腾的人

举个例子：

> 面试官好，我叫 XX，18 年毕业于 XXX 大学软件工程，从大四开始就一直从事前端开发的工作
> 我比较擅长的是 react 全家桶，平时开发的话，打包工具的话对 webpack 比较熟悉，自己有从 0-1 大型项目的经验和能力，包括前端项目的自动构建脚本编写，项目服务器发布，基本的 node 接口服务开发。服务器 Nginx 的配置，负载均衡，域名服务器的配置，和使用 pm2 的去做项目的守护进程管理全链路开发。
> 在上家公司是 XXXX 的项目负责人，主要职责是负责从 0-1 视频编辑器的开发和后期维护，还有及时响应客户需求。在此期间还基于 yapi 搭建了一套接口自动化管理系统，目的是为了高效对接后端接口质量（自动化测试）和解放手动编写接口的工作（通过后端 swagger 文档自动生成包含 ts 注释的接口），其它还负责公司的 UI 组件库的部分开发
> 除了开发相关的工作，还有一定的作为 Owner 的项目管理经验：比如需求评审，UI\UX 交互评审，负责小组项目排期，成员之间的协作开发，监督成员之间的 codeReview，敏捷开发推动项目进度等。
> 另外我有自己的博客，主要是用来记录在工作中的一些心得，和碰到的问题和解决方案。同时去记录一些学到的新的知识，并把它分享到 sf、csdn、juejin 这类的技术平台上。
> 在 github 上....做这件事的原因是，我感觉开源还挺有成就感也挺有趣的

> 目前在学习...

## 如何粗略判断公司是否靠谱

然后我们还得了解一家公司的情况，这里我推荐使用「天眼查」去查询一家公司的信息。在这里我们可以查询到一家公司的几个重要指标
具体的一个融资情况，一家公司好不好，拥有的资本肯定是重要的一块。一家不错的公司，往往前期融到的金额就很高
核心团队的介绍，通过介绍我们可以了解到高管的一个教育背景，行业的经验等等
公司涉及到了哪些司法、经营上的风险
然后还可以在网上查询一下这家公司是否有拖欠工资等等负面的消息。

## 如何回答问题

尽量不要止步于问题，也就是面试官问什么你答什么，而是把回答的点发散出去，引导面试官提问，展示自己的水平。

很推荐大家在准备面试的过程中，挖掘出自己擅长的技术内容，然后在面试的过程中，寻找机会引导面试官提问你擅长的技术点。

## 你最近碰到什么挑战？

**我（最近的一个时间）在做（怎样的一个产品／程序），这个产品／程序的目的是（帮助用户完成什么事），其中有一个（什么模块），为了实现（什么功能），用到了（什么技术），但是（遇到了什么挑战／难点／bug），我通过（怎样的手段）定位问题所在，问题出现的原因是（简要的点到技术点的描述），我在（至少两个资料来源）上找到了参考，最后基于（怎样的决策标准）决定采用（何种解决方法），运用了（哪种技术），最后成功解决了问题／实现了功能，结果是这个产品／程序（对用户，系统，性能，可用性，资源等产生了何种正面的影响）。下一步，我认为我应该研究（何种更先进的方式），进一步（怎样让产品／程序做得更好）。**

之前将视频编辑器从 1.0 迁移到 2.0，目的是引用 vue3 和抛弃之前的遗留问题，比如说依赖包的杂糅和重，当时在考虑做视频编辑器的架构，是想直接写成个大组件，通过 props 参数来控制编辑器的功能，后面从性能和易用性来考虑，觉得还是将整体插件化更好，所以将整体架构改成可插拔式。在开发的过程中又发现关于数据传递板块如果通过传统的 props 或者是 vuex 的形式传递，使用起来会非常不方便，所以将它改成发布订阅模式来调用，将整体的数据放在一个 protocol 空间中，再通过各个控制面板的调用去触发，反馈到视频渲染层的监听器与其它对应插件的监听器上。最后实际应用中确实使用起来非常丝滑。这个编辑器的整体架构也使性能上提升了很多。

### 常见问题答复

1. 你什么时候入职？

在职的时候说：需要交接一下手续，大概 1-2 礼拜。
离职的时候说：确定录用的话，大概一周左右时间可以入职。

2. 为啥工作换的这么频繁？

坦诚说，前几次的换工作让自己觉得在岗位持续发展和成长的重要性，所以现在希望找个好的平台固定下来，然后目前这个工作给我综合看来是比较合适的，所以非常希望能得到这个机会。

3. 为什么选择我们公司？

在对方讲完公司的优势之后，结合自身优点于成长诉求，表明与公司的契合度，营造平等的社交沟通

4. 为什么你觉得可以胜任这份工作？

从三个角度去展开：

- 工作经历、项目背景与当前岗位的匹配度
- 个人能力模型的匹配度
- 突出过往的工作中取得的成绩，竞争力优势

5. 你的期望薪资是多少？

最近我手里也有几个机会在看，大概就是在实际薪资的价位。但是我肯定会综合考量工作的价值，不会单纯地只看薪资。或者，您先报个价可以吗？

6. 接受加班吗？

赶项目、冲进度的时候，加班肯定在所难免。对于这些必要的加班，我一定会尽力配合。但是按照以往的经验来看，我会优先选择提高工作效率，而不是拉长工作时间。这样既能保证项目进度，也能让自己维持一个比较好的精神状态，迎接后续更大的挑战。

7. 为啥没干多久就离职了？

两个方面，一个方面是和当初说好的不一样，公司目前使用 vue，但是会用 react 重启新项目，我认为做一件事专精很重要。另一方面，加班比较多，项目上线冲进度加班是正常且合理的，但是经常周末需要加班，晚上 10-11 点走，CTO 倒排压缩开发时长不是很合理，生活和工作太不平衡，我不是很能接受

## 谈钱

具体的工资（也就是合同上签订的工资），不要杂七杂八什么绩效加起来的那种
五险一金缴纳的比例
加班是否有加班工资或者调休
是否是 996，我个人很不推荐 996 的公司
加薪升职的情况
其他各种福利，比如餐补、房补、交通补、节假日福利、另外的保险等等

## 话术技巧参考

<https://juejin.cn/post/7173316141161381924>
<https://juejin.cn/post/6844903869382656008>
<https://vue3js.cn/interview/>