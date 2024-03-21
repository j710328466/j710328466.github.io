---
nav:
  title: 后端
  path: /bed
toc: content
group:
  title: Go
  order: 4
---

## 第三章

```js
package main

import (
	"log"
	"net/http"
)

func wsHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello world"))
}

func main() {
	// 当有请求访问ws时，执行此回调方法
	http.HandleFunc("/ws", wsHandler)
	// 监听127.0.0.1:7777
	err := http.ListenAndServe("0.0.0.0:7777", nil)
	if err != nil {
		log.Fatal("ListenAndServe", err.Error())
	}
}

```
