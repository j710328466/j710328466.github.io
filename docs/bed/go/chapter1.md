---
nav:
  title: 后端
  path: /bed
toc: content
group:
  title: Go
  order: 2
---

## 第一章

```js
// main.go
package main

import (
	"fmt"
	"learnGo/chapter1/B"
	"reflect"
	"time"
)

func main() {
	// test1()
	// test2()
	// test3()
	test4()
}

func test1() {
	var i int
	var j float32
	var t complex64
	var q bool

	fmt.Printf("i 的默认值：%d\n", i)
	fmt.Printf("j 的默认值：")
	fmt.Print(j)
	fmt.Print("\n")
	fmt.Print("t 的默认值：")
	fmt.Print(t)
	fmt.Print("\n")
	fmt.Print("q 的默认值：")
	fmt.Print(q)
	fmt.Print("\n")
}

func test2() {
	a, _, c := 1, "fun", 3.2
	var t int8 = 4
	// var b float32 = 3.01

	q := float32(t)

	fmt.Print(reflect.TypeOf(q))
	fmt.Print("\n")
	fmt.Print(q)
	fmt.Print("\n")
	fmt.Print(a, c)
	fmt.Print("\n")
	fmt.Print(B.Car)
	fmt.Print("\n")
}

// iota 的使用
func test3() {
	// 隐式使用法
	const (
		a, b = iota + 1, iota + 3
		c, d
	)

	fmt.Print("a 的常量值是：")
	fmt.Print(a)
	fmt.Print("\n")
	fmt.Print("b 的常量值是：")
	fmt.Print(b)
	fmt.Print("\n")
	fmt.Print("c 的常量值是：")
	fmt.Print(c)
	fmt.Print("\n")
	fmt.Print("d 的常量值是：")
	fmt.Print(d)
	fmt.Print("\n")
}

// goto break continue
func test4() {

One:
	fmt.Print("我是代码块一！")
	time.Sleep(1 * time.Second)
	goto One
}

// B/b.go
package B

// test 小写为该文件全局变量
var test = "fuc"

// Car 首字母大写为可导出变量
var Car = "jeep"

```
