---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 React
  order: 4
  path: /react
---

## 💊 React

### 介绍

世界知名三大框架之一，我认为热度目前为首吧

```jsx
import React from 'react';

class Btn extends React.Component {
  constructor({ children }) {
    super(...arguments);
  }

  state = {
    size: 16,
    BTN_COLORS: new Map([
      ['danger', 'red'],
      ['primary', 'blue'],
      ['warn', 'yellow'],
      ['normal', '#aaa'],
    ]),
  };

  componentDidMount() {}

  render() {
    const { children, type, id } = this.props;
    const { size, BTN_COLORS } = this.state;

    return (
      <React.Fragment>
        <div
          id={id}
          className="btn"
          onClick={() => this.setState({ size: size + 1 })}
        >
          {children}
        </div>
        <style jsx>{`
          .btn {
            cursor: pointer;
            display: inline-block;
            padding: 20px;
            font-size: ${size}px;
            text-align: center;
            color: ${BTN_COLORS.get(type) || '#eee'};
            border: 1px solid #aaa;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default class Demo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>秒表</h2>
        <Btn id="1" type="normal">
          计次
        </Btn>
        <Btn id="2" type="danger">
          停止
        </Btn>
      </React.Fragment>
    );
  }
}
```

### 高阶组件（HOC）

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

react 和设计模式 doing...
