## 车牌号码键盘 [github](https://github.com/mervynyang/CarnoKeyboard)
效果如下：

<img src="http://7xo525.com1.z0.glb.clouddn.com/l1.jpg" width="300" alt="">
<img src="http://7xo525.com1.z0.glb.clouddn.com/l2.jpg" width="300" alt="">

### Install

```bash
    npm install carno-keyboard
```


### Usage
CarnoKeyboard使用[react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin)监听tap事件，确保你在app开始的地方引入。

```js
    import injectTapEventPlugin from 'react-tap-event-plugin';

    injectTapEventPlugin();
```

CarnoKeyboard组件用法
```
    import CarnoKeyboard from 'carno-keyboard'

    <CarnoKeyboard
        isOpen={this.state.isOpen}
        onPress={::this.onPress}
        onBlur={::this.onBlur}
        level1={keyboardText.level1}
        level2={keyboardText.level2}
        done={::this.done}
    />
    // 具体用法请见example
```

### props

#### level1
```js
    React.PropTypes.string
```
省份缩写的键盘。

#### level2
```js
    React.PropTypes.string
```
车牌号后6位的键盘。

#### isOpen
```js
    React.PropTypes.bool.isRequired
```
键盘打开状态，默认是false。

#### onPress
```js
    React.PropTypes.func.isRequired
```
点击键盘的时候执行的回调函数。

#### done
```js
    React.PropTypes.func
```
输入完之后的时候执行的回调函数。

#### onBlur
```js
    React.PropTypes.func
```
键盘失去焦点的时候执行的回调函数。
