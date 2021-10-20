---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 工具
  order: 9
  path: /tools
---

# SEO

## 介绍

Search Engine Optimization 目的是为了让搜索引擎更好的收录站点，通过关键字、打开速度、文案优化都有利于 **网站的SEO**。

## 方法介绍

### 给网站添加site-map

类似一个地图导航，告诉搜索引擎你的网站路径，和网站重点内容，这块地方重点突出标题和路径，文件用sitemap.xml（baidusitemap.xml），这就是你的站点地图。

### 优化结构

seo搜索引擎优化认为，网站的最佳结构是**用户从首页点击三次就可以到达任何一个页面**

四层结构：sitename/year/mounth/day/title（不利于seo）

三层结构：sitename/y/m-d-title（良好）

两层结构：sitename/y-m-d-title（最佳）

### 标题优化

将HTML页面 title 改为 **{keywords} - { title }{ description }** 格式，有利于搜索引擎快速分类你的文章内容。
> 注意：别堆砌关键字，整个标题一般不超过80个字符，可以通过chinaz的seo综合查询检查。

### 关键词与描述优化

```js
<meta name="keywords" content="tag1,tag2,tag3..." />
<meta name="description" content="${description}" />
```

### nofollow 标签

给非友情链接的出站链接添加 “nofollow” 标签，nofollow标签是由谷歌领头创新的一个 “**反垃圾链接**” 的标签，并被百度、yahoo等各大搜索引擎广泛支持，引用nofollow标签的目的是：用于指示搜索引擎不要追踪（即抓取）网页上的带有nofollow属性的任何出站链接，以减少垃圾链接的分散网站权重。

```js
<a class="theme-link" href="https://nicecoders.github.io" rel="external">
// 改成
<a class="theme-link" href="https://nicecoders.github.io" rel="external nofollow">
```

### robots.txt文件

让机器人知道你的网站爬取的规则

```
User-agent: *
Allow: /
Allow: /archives/
Disallow: /vendors/
Disallow: /categories/


Sitemap: https://nicecoders.github.io/sitemap.xml
Sitemap: https://nicecoders.github.io/baidusitemap.xml
```

### 压缩文件

可以使用gulp，webpack等构建工具将文件压缩，理论上文件越小加载越快，权重会越高。

### 开启推送

将网站链接提交到百度，百度搜索引擎提交入口 ,然后验证你的网站，这一点网上有很详细的教程我就不复述了，验证确认你的网站后，继续验证你的网站的robots.txt和sitemap文件是否可用，一般都是可用的。

### 获取关键词

现在搜关键词全是广告，其实百度已经提供了一个接口，每次使用过百度搜索的时候下面的下拉条会出现一堆相关的关键词，这下关键词的权重是非常高的，采集这些关键词然后用在自己的文章中效果还可以，但是要记住不能堆砌关键词。

### H标签优化

H 标签的重要性可能是仅次与页面标签。H1->H6 的重要性依次降低。
建议在H1-H2标签中混入关键字（H1全文只能出现一次）

### 图片 ALT 文字优化

插入图片的时候会提示输入文字，这个不能敷衍。图片 ALT 文字出现的关键词对页面相关性也有一定的影响。同样的，也不要在 ALT 上堆砌关键词。

### 内部链接及锚文字优化

内部链接对于爬虫和收录具有很重要的意义。内部链接对页面关键词相关性也有影响，最主要的就是在内部链接中使用锚文字。

锚文字是告诉搜索引擎被链接页面主题内容的最重要依据之一。我们有时候可能无法控制外部链接的锚文字，但是对于站内的内部链接锚文字我们可以控制。不过有几点需要注意：

* 适当出现匹配关键词的锚文字
* 锚文字不能集中导航或者页尾，要分散在正文中
* 不要过度优化锚文字，要不然有可能会被搜索引擎惩罚
