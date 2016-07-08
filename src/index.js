import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './CarnoKeyboard.scss'
import './font.scss'

 /**
 * [CarnoKeyboard description]
 * @prop  {[bool]} isOpen [keyboard status]
 * @prop  {[func]} onPress        [callback function called after onPress the keys]
 * @prop  {[func]} done         [callback function called after done]
 * @prop  {[func]} onBlur    [callback function called when input onBlur]
 * @prop  {[string]} level1     [provinces keyboard]
 * @prop  {[string]} level2     [letters keyboard]
 */
class CarnoKeyboard extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
        done: PropTypes.func,
        onBlur: PropTypes.func,
        level1: PropTypes.string.isRequired,
        level2: PropTypes.string.isRequired
    };

    static defaultProps = {
        done: () => {}
    }

    state = {
        inputValue: ''
    };

    constructor(props) {
        super(props)
        this.backspace = ::this.backspace
        this.preventTouchMove = ::this.preventTouchMove
    }

    selectLevel1(e, level1) {
        e.preventDefault();
        this.setState({ inputValue: level1 })
        this.props.onPress(level1)
    }

    selectLevel2(e, level2) {
        e.preventDefault();
        let inputValue = this.state.inputValue + level2

        if (inputValue.length > 7) {
            this.props.done()
            return false
        }

        this.setState({ inputValue: inputValue })
        this.props.onPress(inputValue)
    }

    backspace() {
        let inputValue = this.state.inputValue
        let backspaceValue = inputValue.substr(0, inputValue.length - 1)

        this.setState({ inputValue: backspaceValue })
        this.props.onPress(backspaceValue)
    }

    preventTouchMove(e) {
        e.preventDefault()
    }

    render() {
        const keyboardHeightRate = 0.323
        const winH = window.innerHeight
        const level1 = this.props.level1.split('')
        const level2 = this.props.level2.split('')
        const keyboardClass = classnames({
            [styles.keyboard]: true,
            [styles.keyboardOpen]: this.props.isOpen
        })
        const { isOpen, onBlur } = this.props

        return (
            <div>
                {isOpen &&
                    <div className={styles.keyboardMask} onTouchTap={onBlur} onTouchMove={this.preventTouchMove} />
                }
                <div className={keyboardClass} onTouchMove={this.preventTouchMove} style={{height: winH * keyboardHeightRate}}>
                    <div className={classnames({
                        [styles.keyboardLayout]: true,
                        [styles.hide]: this.state.inputValue.length >= 1
                    })}>
                        {level1.map((item, i) =>
                            <span key={'keybtn1' + i} className={styles.btnKey}>
                                <button className={styles.button} type="button" onTouchTap={(e) => this.selectLevel1(e, item)}>
                                    {item}
                                </button>
                                <div className={styles.btnActive}>
                                    <span>{item}</span>
                                </div>
                            </span>
                        )}
                    </div>
                    <div className={classnames({
                        [styles.keyboardLayout]: true,
                        [styles.hide]: true,
                        [styles.show]: this.state.inputValue.length >= 1
                    })}>
                        {level2.map((item, i) =>
                            <span key={'keybtn2' + i} className={styles.btnKey}>
                                <button className={styles.button} type="button" onTouchTap={(e) => this.selectLevel2(e, item)}>
                                    {item}
                                </button>
                                <div className={styles.btnActive}>
                                    <span>{item}</span>
                                </div>
                            </span>
                        )}
                        <span className={styles.btnKey + ' ' + styles.backspace}>
                            <button className={styles.button} type="button" onTouchTap={this.backspace}>
                                <i className="iconfont icon-backspace"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarnoKeyboard
