---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 React
  order: 4
  path: /react
---

# 💊 React

## 介绍

世界知名三大框架之一，我认为热度目前为首吧

### 设计原则

1. 保持接口小，props 数量要少
2. 根据数据边界划分组件，充分利用组合
3. 把 state 往上层组件提取，让下层组件只需要实现为纯函数

举例，iPhone 上的秒表：

```jsx
import React, { useState } from 'react';

// 时钟组件
const MajorClock = ({ ms = 0 }) => {
  const ms2Time = (milliseconds = 0) => {
    let time = milliseconds;
    const ms = milliseconds % 1000;
    time = (milliseconds - ms) / 1000;
    const seconds = time % 60;
    time = (time - seconds) / 60;
    const minutes = time % 60;
    const hours = (time - minutes) / 60;

    const result = hours + ':' + minutes + ':' + seconds + '.' + ms;
    return result;
  };

  return <h1>{ms2Time(ms)}</h1>;
};

// 返回所有记次jsx
const SplitTimes = ({ list = [] }) => {
  return list.map((v, k) => <MajorClock key={k} ms={v} />);
};

// 按钮组件
const ControlButton = ({
  children,
  type,
  activated,
  onStart,
  onPause,
  onSplit,
  onReset,
}) => {
  const BTN_COLORS = new Map([
    ['danger', 'red'],
    ['primary', 'blue'],
    ['warn', 'yellow'],
    ['normal', '#aaa'],
  ]);

  if (activated) {
    return (
      <div>
        <button onClick={onSplit}>计次</button>
        <button onClick={onPause}>停止</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={onReset}>复位</button>
        <button onClick={onStart}>启动</button>
      </div>
    );
  }
};

export default class StopWatch extends React.Component {
  constructor() {
    super(...arguments);
  }

  state = {
    isStarted: false,
    startTime: null,
    currentTime: null,
    spilts: [],
  };

  render() {
    const { isStarted, splits, currentTime, startTime } = this.state;

    return (
      <React.Fragment>
        <MajorClock ms={currentTime - startTime} />
        <ControlButton
          activated={isStarted}
          onStart={() => {
            this.setState({
              isStarted: true,
              startTime: new Date(),
              currentTime: new Date(),
            });

            this.intervalHandle = setInterval(() => {
              this.setState({ currentTime: new Date() });
            }, 1000 / 60);
          }}
          onPause={() => {
            clearInterval(this.intervalHandle);
            this.setState({
              isStarted: false,
            });
          }}
          onReset={() => {
            this.setState({
              startTime: null,
              currentTime: null,
              splits: [],
            });
          }}
          onSplit={() => {
            this.setState({
              splits: [...splits, currentTime - startTime],
            });
          }}
        />
        <SplitTimes list={splits} />
      </React.Fragment>
    );
  }
}
```

## 高阶组件（HOC）

高阶组件的几个原则：

1. 不能去修改作为参数的组件，是一个纯函数，不能有副作用
2. 结果必须是一个新的 React 组件，新组件的 JSX 部分包含作为参数的组件
3. 一般需要把传给自己的 props 转手传递给作为参数的组件

```jsx
import React from 'react';

class Demo extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { store } = this.props;
    return <div>艹 {store}</div>;
  }
}

const withFuckU = (Component) => {
  const NewComponent = (props) => {
    return <Component {...props} store="fuck you" />;
  };
  return NewComponent;
};

export default withFuckU(Demo);
```

## 参考资料

- react 实战：设计模式和最佳实践
