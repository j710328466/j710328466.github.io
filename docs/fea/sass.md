---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 SASS语法
  order: 8
  path: /sass
---

## 💊 SASS语法

### if 语句

```css
@mixin blockOrHidden($boolean: true) {
  @if $boolean {
    @debug "$boolean is #{$boolean}";
    display: block;
  }
  @else {
    @debug "$boolean is #{$boolean}";
    display: none;
  }
}

// 使用
.block {
	@include blockOrHidden;
}
.hidden {
	@include blockOrHidden(false);
}
```


### for 循环语句


有以下两种形式

1. @for $i from <start> through <end>
1. @for $i from <start> to <end>
> 区别：2 的 <end> 不包括本身这个数



#### 简单例子
```css
@for $i from 1 through 10 {
  .item-#{$i} {
  	width: 2em * $i;
  }
}
```
#### 复杂例子
```css
$grid-prefix: span !default;
$grid-width: 60px !default;
$grid-gutter: 20px !default;

%grid {
	float: left;
  margin-left: $grid-gutter / 2;
  margin-right: $grid-gutter / 2;
}

@for $i from 1 through 12 {
  .#{$grid-prefix}#{$i} {
  	width: $grid-width * $1 + $grid-gutter * ($1 - 1);
    @extend %grid;
  }
}
```
### 
### while 循环


```css
$types: 4;
$type-width: 20px;

@while $types > 0 {
  .while-#{$types} {
  	width: $type-width + $types;
  }
  $types: $types - 1;
}
```


### each 语句


```css
$list: adam bob chris david eric;

@mixin author-images {
  @each $author in $list {
    .photo-#{$author} {
      background: url('/images/avatars/#{$author}.jpg') norepeat;
    }
  }
}

.author-bio {
	@include author-images;
}

```


## 列表函数


### length($list)：返回长度
> length() 函数中的列表参数之间使用空格隔开，不能使用逗号

```css
length(5px 88px (border 66px solid) 4em  (border 8em solid))
```
### 
### nth($list, $n)
返回列表第几个值
```css
nth(1 2 3 4 5, 1)  ----> 1
```


### join($list1, $list2, $separator)
> space：空格、comma：逗号

```css
join(1 2 3, 4 10 12, space)
---> (1 2 3 4 10 12)
```


### append($list1, $list2, $separator)
和 join 一样的效果


### zip($list1,$list2,...)


```css
zip(solid dashed dotted, 1px 3px 6px, #000 #fff #eee);
```
## 
### index($list, $val)
找到 list 中 val 的索引
```css
index(1px solid red, 1px)
```


### type-of()
判断类型：number、string、bool
### unitless()
判断一个值是否带有单位
### unit()
获取一个值得单位
### comparable()
判断两个数是否可以加、减、合并
### if($condition, $if-true, $if-false)
三元运算符
### map：数组
```css
$map: (
	$key1: $value1;
	$key2: $value2;
)

$theme-color: (
	default: (
		bgcolor: #fff;
		text-color: #444;
		link-color: #39f;
	),
	primary: (
		bgcolor: #000;
		text-color: #fff;
		link-color: #93f;
	)
)
```


#### map-get($map, $key)
根据给定的 key，获取 map 中相关的值
#### map-merge($map1, map2)
合并两个map
#### map-remove($map, $key)
删除指定 key ，返回新map
#### map-keys($map)
返回 map 中所有 key 值
#### map-values($map)
返回 map 中所有 value 值
#### map-has-key($map, $key)
判断是否含有指定key值
#### keywords($args)
返回一个函数的参数


## 字符串函数


### unquote：删除引号
> 只能删除最前和最后的引号

```css
.test {
	content: unquote("im jsonskin");
}
```


### quote：添加引号
> 如果监测到有引号，不会重复添加

```css
.test {
	content: quote(给我加个引号吧);
}
```


### to-lower-case、to-upper-case


```css
.test {
	text: to-upper-case(aa-bb-cc);
  text: to-lower-case(AA-BB-Cc);
}
```
### 
## 数字函数
### percentage($val)
将一个不带单位的数转换为百分比值；
### round($val)
四舍五入，取一个最接近的整数
### ceil($val)
将大于自己的小数换成下一位整数
### floor($val)
去除小数部分
### abs($val)
返回一个数的绝对值
### max($numbers...)
找出最大值
> 比较的数，单位要相同

### min($numbers...)
找出最小值
> 比较的数，单位要相同

### random()
获取随机数


## 规则


### @media
```css
@media screen ($condition: $val) {
  .side-bar {
  	width: 100px;
  }
}
```
### @extend
会继承 父级元素的属性，并继承它的子属性
```css
.container {
	border: 1px solid #fff;
  width: 100%;
  height: 100%;
}

.container:hover {
	color: #000;
}

.main {
	@extend .main
}
```


### @at-root
跳出父级样式到根部
```css
.a {
  .b {
    .c {
      @at-root {
      	color: red;
      }
    }
  }
}
```


### @debug
调适使用
> @debug 1px + 2px

### @warn
> @warn "this is a warn: #{$val}"

### @error
> @error "this is a error: #{$msg}"

