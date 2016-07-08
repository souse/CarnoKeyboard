import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import CarnoKeyBoard from '../src/CarnoKeyBoard.js'

const keyboardText = {
    level1: '粤京津泸鲁冀云辽黑湘皖新苏浙赣鄂桂甘晋蒙陕吉闽贵青藏川宁琼豫渝台港澳',
    level2: '1234567890QWERTYUPASDFGHJKLZXCVBNM'
}

const styles = {
    input: {
        border: '1px solid #333',
        width: '200px',
        height: '30px',
        fontSize: '16px'
    }
}

class App extends React.Component {

    state = {
        isOpen: false,
        carnum: ''
    };

    triggleBoard() {
        this.setState({ isOpen: true })
    }

    onPress(inputValue) {
        console.log(inputValue)
        this.setState({ carnum: inputValue })
    }

    onBlur() {
        console.log('onBlur')
        this.setState({ isOpen: false })
    }

    done() {
        this.setState({ isOpen: false })
    }

    render() {
        return (
            <div>
                <h3>模拟车牌号码键盘</h3>
                <input type="text" style={styles.input} onClick={::this.triggleBoard} value={this.state.carnum} readOnly />
                <CarnoKeyBoard
                    isOpen={this.state.isOpen}
                    onPress={::this.onPress}
                    onBlur={::this.onBlur}
                    level1={keyboardText.level1}
                    level2={keyboardText.level2}
                    done={::this.done}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
