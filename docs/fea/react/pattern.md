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

### iPhone 上的秒表

设计组件的几个原则：

1. 保持接口小，props 数量要少
2. 根据数据边界划分组件，充分利用组合
3. 把 state 往上层组件提取，让下层组件只需要实现为纯函数

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

  return <h1 style={{ textAlign: 'center', color: 'red' }}>{ms2Time(ms)}</h1>;
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

  const contStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const btnStyle = {
    width: '64px',
    height: '64px',
    lineHeight: '64px',
    textAlign: 'center',
    fontWeight: '300',
    borderRadius: '99px',
    border: '3px solid #b4a078',
  };

  if (activated) {
    return (
      <div style={contStyle}>
        <button style={btnStyle} onClick={onSplit}>
          计次
        </button>
        <button style={btnStyle} onClick={onPause}>
          停止
        </button>
      </div>
    );
  } else {
    return (
      <div style={contStyle}>
        <button style={btnStyle} onClick={onReset}>
          复位
        </button>
        <button style={btnStyle} onClick={onStart}>
          启动
        </button>
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
    startTime: 0,
    currentTime: 0,
    splits: [],
  };

  render() {
    const { isStarted, splits, currentTime, startTime } = this.state;

    return (
      <React.Fragment>
        <h2 style={{ textAlign: 'center', color: 'green' }}>秒表</h2>
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

## 无状态组件（PureComponent）

为了防止相同的 props 多次渲染，可以通过更改为 PureComponent 来实现（函数组件可以使用 memo ），从而减少性能的浪费

```js
// 类组件
class Demo extends React.PureComponent {
  render() {
    return <div>我是一个无状态组件</div>;
  }
}

// 函数组件
const Demo = React.memo(() => <div>我是一个无状态组件</div>);
```

## 高阶组件（HOC）

高阶组件的几个原则：

1. 不能去修改作为参数的组件，是一个纯函数，不能有副作用
2. 结果必须是一个新的 React 组件，新组件的 JSX 部分包含作为参数的组件
3. 一般需要把传给自己的 props 转手传递给作为参数的组件

> 一般会带 with 前缀

### 普通用法

```jsx
import React from 'react';

const getUserId = () => {
  return true;
};

const LoginBtn = () => {
  return <div>退出登录</div>;
};

const ShoppingCar = () => {
  return <div>购物车</div>;
};

const withLogin = (Component) => {
  const NewComponent = (props) => {
    if (getUserId()) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };
  return NewComponent;
};

const LoginButton = withLogin(LoginBtn);
const LoginCar = withLogin(ShoppingCar);

export default () => (
  <div>
    <LoginButton />
    <LoginCar />
  </div>
);
```

### 高级用法

借鉴上文的 withLogin，根据用户是否选择登录渲染合适的组件：

```js
const withLoginAndLogout = (ComponentForLogin, ComponentForLogout) => {
  const NewComponent = (props) => {
    if (getUserId()) {
      return <ComponentForLogin {...props} />;
    } else {
      return <ComponentForLogout {...props} />;
    }
  };
  return NewComponent;
};

const LoginBtn = () => {
  return <div>登录</div>;
};

const LogoutBtn = () => {
  return <div>退出登录</div>;
};

// 通过条件判断 退出（登录）按钮
const TopButtons = withLoginAndLogout(LogoutBtn, LoginBtn);
```

### 链式调用

```js
// 示例 1
const SuperX = withMethod3(withMethod2(withMethod1(x)));

// 示例 2
const compose = (...funcs) {
  if (funcs.length === 0) return arg => arg

  if (funcs.length === 1) return funcs[0]

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

const hoc = compose(withMethod3, withMethod2, withMethod1)
const SuperX = hoc(x)
```

## render props 模式

示例：

```js
const Auth = (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = { userName, ...props };
    return <React.Fragment>{props.login(allProps)}</React.Fragment>;
  } else {
    <React.Fragment>{props.nologin(props)}</React.Fragment>;
  }
};

// 调用
<Auth
  login={({ userName }) => <h1>Hello {userName}</h1>}
  nologin={() => <h1>Please login</h1>}
/>;
```

## 提供者模式

```jsx
import React from 'react';

const ThemeContext = React.createContext();
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

const Title = (props, context) => {
  return (
    <ThemeConsumer>
      {(theme) => <p style={{ color: theme.textColor }}>{props.children}</p>}
    </ThemeConsumer>
  );
};

const Paragraph = (props, context) => {
  return (
    <ThemeConsumer>
      {(theme) => <p style={{ color: theme.mainColor }}>{props.children}</p>}
    </ThemeConsumer>
  );
};

const Page = () => {
  return (
    <div>
      <Title>这是标题</Title>
      <Paragraph>这是正文</Paragraph>
    </div>
  );
};

export default (props, context) => {
  return (
    <ThemeProvider value={{ mainColor: 'green', textColor: 'red' }}>
      <Page />
    </ThemeProvider>
  );
};
```

## 参考资料

- react 实战：设计模式和最佳实践
