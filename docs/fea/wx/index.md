---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 微信
  order: 7
  path: /wx
---

# 💊 微信

## 💊 微信公众号

> 以下操作需要在微信公众号后台配置相应的白名单

### 1. 获取微信头像

```js
import { funcUtil } from '@nicecode/tools';
import { getUserInfo, jumpToWxUrl } from '@/services/common';

if (location.href.indexOf('?') > -1) {
  if (location.href.indexOf('code') > -1) {
    // 2. 将code传递给后端，获取nickname、avatar等参数
    getUserInfo({
      code: funcUtil.getParameter('code', location.href),
    }).then((res) => {
      if (res.code === '200') {
        // 3. 获取昵称成功，跳转回首页
        localStorage.setItem('wx_nickname', res.data.nickname);
        location.replace('/');
      }
    });
  }
} else {
  // 1. 后台拼接链接，前端跳转获取 code
  jumpToWxUrl({ redirectUrl: window.location.origin }).then((res) => {
    if (res.code === '200') {
      location.replace(res.data.code);
    }
  });
}
```

### 2. 获取微信授权

```js
import { getWxAuthorities } from '@/services/common';
import wx from 'weixin-js-sdk';

//要用到微信API
function getJSSDK(
  shareUrl: string,
  shareMsg: {
    title: string,
    desc: string,
    link: string,
    imgUrl: string,
  },
) {
  // 1. 获取微信签名
  getWxAuthorities({ url: shareUrl }).then(
    (res: {
      data: {
        appId: string,
        timestamp: number,
        echostr: string,
        signature: string,
      },
    }) => {
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.appId, // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.echostr, // 必填，生成签名的随机串
        signature: res.data.signature, // 必填，签名
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
      });
      wx.ready(function () {
        console.log('监听');
        //分享给微信朋友
        wx.updateAppMessageShareData({
          title: shareMsg.title,
          desc: shareMsg.desc,
          link: shareMsg.link,
          imgUrl: shareMsg.imgUrl,
          success: function success(res) {
            console.log(res, '分享成功');
          },
          cancel: function cancel(res) {
            console.log('已取消');
          },
          fail: function fail(res) {
            //alert(JSON.stringify(res));
          },
        });
        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
        wx.updateTimelineShareData({
          title: shareMsg.title,
          link: shareMsg.link,
          imgUrl: shareMsg.imgUrl,
          success: function success(res) {
            //alert('已分享');
          },
          cancel: function cancel(res) {
            //alert('已取消');
          },
          fail: function fail(res) {
            //alert(JSON.stringify(res));
          },
        });
      });
      wx.error(function (res) {
        alert('微信验证失败');
      });
    },
  );
}
export default {
  // 获取JSSDK
  getJSSDK,
};
```
