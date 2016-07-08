'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _CarnoKeyboard = require('./CarnoKeyboard.scss');

var _CarnoKeyboard2 = _interopRequireDefault(_CarnoKeyboard);

require('./font.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* [CarnoKeyboard description]
* @prop  {[bool]} isOpen [keyboard status]
* @prop  {[func]} onPress        [callback function called after onPress the keys]
* @prop  {[func]} done         [callback function called after done]
* @prop  {[func]} onBlur    [callback function called when input onBlur]
* @prop  {[string]} level1     [provinces keyboard]
* @prop  {[string]} level2     [letters keyboard]
*/
var CarnoKeyboard = (_temp = _class = (function (_Component) {
    _inherits(CarnoKeyboard, _Component);

    function CarnoKeyboard(props) {
        _classCallCheck(this, CarnoKeyboard);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CarnoKeyboard).call(this, props));

        _this.state = {
            inputValue: ''
        };

        _this.backspace = _this.backspace.bind(_this);
        _this.preventTouchMove = _this.preventTouchMove.bind(_this);
        return _this;
    }

    _createClass(CarnoKeyboard, [{
        key: 'selectLevel1',
        value: function selectLevel1(e, level1) {
            e.preventDefault();
            this.setState({ inputValue: level1 });
            this.props.onPress(level1);
        }
    }, {
        key: 'selectLevel2',
        value: function selectLevel2(e, level2) {
            e.preventDefault();
            var inputValue = this.state.inputValue + level2;

            if (inputValue.length > 7) {
                this.props.done();
                return false;
            }

            this.setState({ inputValue: inputValue });
            this.props.onPress(inputValue);
        }
    }, {
        key: 'backspace',
        value: function backspace() {
            var inputValue = this.state.inputValue;
            var backspaceValue = inputValue.substr(0, inputValue.length - 1);

            this.setState({ inputValue: backspaceValue });
            this.props.onPress(backspaceValue);
        }
    }, {
        key: 'preventTouchMove',
        value: function preventTouchMove(e) {
            e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames,
                _classnames2,
                _this2 = this,
                _classnames3;

            var keyboardHeightRate = 0.323;
            var winH = window.innerHeight;
            var level1 = this.props.level1.split('');
            var level2 = this.props.level2.split('');
            var keyboardClass = (0, _classnames5.default)((_classnames = {}, _defineProperty(_classnames, _CarnoKeyboard2.default.keyboard, true), _defineProperty(_classnames, _CarnoKeyboard2.default.keyboardOpen, this.props.isOpen), _classnames));
            var _props = this.props;
            var isOpen = _props.isOpen;
            var onBlur = _props.onBlur;

            return _react2.default.createElement(
                'div',
                null,
                isOpen && _react2.default.createElement('div', { className: _CarnoKeyboard2.default.keyboardMask, onTouchTap: onBlur, onTouchMove: this.preventTouchMove }),
                _react2.default.createElement(
                    'div',
                    { className: keyboardClass, onTouchMove: this.preventTouchMove, style: { height: winH * keyboardHeightRate } },
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames5.default)((_classnames2 = {}, _defineProperty(_classnames2, _CarnoKeyboard2.default.keyboardLayout, true), _defineProperty(_classnames2, _CarnoKeyboard2.default.hide, this.state.inputValue.length >= 1), _classnames2)) },
                        level1.map(function (item, i) {
                            return _react2.default.createElement(
                                'span',
                                { key: 'keybtn1' + i, className: _CarnoKeyboard2.default.btnKey },
                                _react2.default.createElement(
                                    'button',
                                    { className: _CarnoKeyboard2.default.button, type: 'button', onTouchTap: function onTouchTap(e) {
                                            return _this2.selectLevel1(e, item);
                                        } },
                                    item
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: _CarnoKeyboard2.default.btnActive },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        item
                                    )
                                )
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames5.default)((_classnames3 = {}, _defineProperty(_classnames3, _CarnoKeyboard2.default.keyboardLayout, true), _defineProperty(_classnames3, _CarnoKeyboard2.default.hide, true), _defineProperty(_classnames3, _CarnoKeyboard2.default.show, this.state.inputValue.length >= 1), _classnames3)) },
                        level2.map(function (item, i) {
                            return _react2.default.createElement(
                                'span',
                                { key: 'keybtn2' + i, className: _CarnoKeyboard2.default.btnKey },
                                _react2.default.createElement(
                                    'button',
                                    { className: _CarnoKeyboard2.default.button, type: 'button', onTouchTap: function onTouchTap(e) {
                                            return _this2.selectLevel2(e, item);
                                        } },
                                    item
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: _CarnoKeyboard2.default.btnActive },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        item
                                    )
                                )
                            );
                        }),
                        _react2.default.createElement(
                            'span',
                            { className: _CarnoKeyboard2.default.btnKey + ' ' + _CarnoKeyboard2.default.backspace },
                            _react2.default.createElement(
                                'button',
                                { className: _CarnoKeyboard2.default.button, type: 'button', onTouchTap: this.backspace },
                                _react2.default.createElement('i', { className: 'iconfont icon-backspace' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CarnoKeyboard;
})(_react.Component), _class.propTypes = {
    isOpen: _react.PropTypes.bool.isRequired,
    onPress: _react.PropTypes.func.isRequired,
    done: _react.PropTypes.func,
    onBlur: _react.PropTypes.func,
    level1: _react.PropTypes.string.isRequired,
    level2: _react.PropTypes.string.isRequired
}, _class.defaultProps = {
    done: function done() {}
}, _temp);
exports.default = CarnoKeyboard;