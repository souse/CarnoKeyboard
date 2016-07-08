## 车牌号码键盘 [github]('https://github.com/mervynyang/CarnoKeyboard')
效果如下：

<img src="http://7xo525.com1.z0.glb.clouddn.com/l1.jpg" width="300" alt="">
<img src="http://7xo525.com1.z0.glb.clouddn.com/l2.jpg" width="300" alt="">

### Install

```bash
    npm install carno-keyboard
```
```js
    import CarnoKeyboard from '../src/CarnoKeyboard.js'

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
