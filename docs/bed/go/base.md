---
nav:
  title: 后端
  path: /bed
toc: content
group:
  title: Go
  order: 2
---

## 基础

```js
package main

import (
	"fmt"
	"io"
	"strings"
)

// ReadFrom 定义函数
func ReadFrom(reader io.Reader, num int) ([]byte, error) {

	p := make([]byte, num)

	n, err := reader.Read(p)

	if n > 0 {
		return p[:n], nil
	}

	return p, err
}

// SampleReadFromString 输出例子
func SampleReadFromString() {
	data, _ := ReadFrom(strings.NewReader("from    string"), 12)

	fmt.Println(data)
}

func main() {
	SampleReadFromString()
}
```
