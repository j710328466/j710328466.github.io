---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 Q&A
  order: 100
---

# 💊 Q&A

## 通过浏览器打开https后，无法再次打开http链接？


请将下面这串代码删除，删干净一点：
```javascript
<meta http-equiv ="Content-Security-Policy" content="upgrade-insecure-requests">
```


## 阿里云 oss 上传


### 创建bucket

![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1614156371487-2e7a495b-c225-4ed4-82a3-ab28f7dfa4e2.png#height=363&id=r7ZCt&margin=%5Bobject%20Object%5D&name=image.png&originHeight=726&originWidth=473&originalType=binary&ratio=1&size=187718&status=done&style=none&width=236.5)
### 设置跨域规则

![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1614156400297-4528de9b-e249-4f15-bdd1-9ae07bf8c2df.png#height=329&id=Kws6W&margin=%5Bobject%20Object%5D&name=image.png&originHeight=657&originWidth=629&originalType=binary&ratio=1&size=62533&status=done&style=none&width=314.5)
### 创建 RAM 用户


> 这一步的作用是分担风险，不要直接用主账号去登录

并给该用户分配调用 STS 服务 AssumeRole 接口的权限，这样待会儿后端就能以该用户的身份给前端分配 STS 凭证了：
![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1614156480237-912d579e-2e46-4738-996c-991810b0121a.png#height=280&id=GWXB4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=560&originWidth=1456&originalType=binary&ratio=1&size=275868&status=done&style=none&width=728)
### 创建用户角色
该角色即有权限在前端调用 aliyun-oss SDK 上传文件的用户角色，例如我们创建一个只有上传权限的角色，命名为 uploader
![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1614156569197-374d1b4d-87ef-4b83-b888-43e585823b57.png#height=314&id=yH483&margin=%5Bobject%20Object%5D&name=image.png&originHeight=628&originWidth=1396&originalType=binary&ratio=1&size=365279&status=done&style=none&width=698)
接下来我们需要给该角色分配权限，可以通过创建一条权限策略并分配给角色，该权限策略里面只包含了上传文件、分片上传相关的权限：
![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1614156596778-1a1bd9f9-675d-4de8-ae9a-fe119187a138.png#height=370&id=M1KQd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=740&originWidth=1382&originalType=binary&ratio=1&size=307620&status=done&style=none&width=691)
```javascript
// 策略内容
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "oss:PutObject",
        "oss:InitiateMultipartUpload",
        "oss:UploadPart",
        "oss:UploadPartCopy",
        "oss:CompleteMultipartUpload",
        "oss:AbortMultipartUpload",
        "oss:ListMultipartUploads",
        "oss:ListParts"
      ],
      "Resource": [
        "acs:oss:*:*:${bucket}",
        "acs:oss:*:*:${bucket}/*"
      ]
    }
  ]
}
```
然后，把该策略赋予 uploader 角色
![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1614156673094-a4029f4e-63c9-4396-b3bc-d632f4056c7a.png#height=445&id=JrO2L&margin=%5Bobject%20Object%5D&name=image.png&originHeight=890&originWidth=1390&originalType=binary&ratio=1&size=295135&status=done&style=none&width=695)


### node 代码实现
```javascript
const OSS = require('ali-oss');
const STS = OSS.STS;

const sts = new STS({
  accessKeyId: process.env.ALIYUN_OSS_RULE_ASSUMER_ACCESS_KEY,
  accessKeySecret: process.env.ALIYUN_OSS_RULE_ASSUMER_ACCESS_KEY_SECRET
});

async function getCredential(req, res, next) {
  try {
    const { credentials } = await sts.assumeRole(
      'acs:ram::1582938330607257:role/uploader',  // role arn
      null, // policy
      15 * 60, // expiration
      'web-client' // session name
    );
    req.result = credentials;
    next();
  } catch (err) {
    next(err);
  }
}

```
### OSS报错大全

1. AccessDeniedError: You have no right to access this object because of bucket acl
> 看下配置的bucket 策略内容对不对
