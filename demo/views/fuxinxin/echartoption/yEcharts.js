(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("react"), require("echarts"));
    else if (typeof define === 'function' && define.amd)
        define("yEcharts", ["react", "echarts"], factory);
    else if (typeof exports === 'object')
        exports["yEcharts"] = factory(require("react"), require("echarts"));
    else
        root["yEcharts"] = factory(root["react"], root["echarts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
    return /******/ (function(modules) { // webpackBootstrap
            /******/ // The module cache
            /******/
            var installedModules = {};

            /******/ // The require function
            /******/
            function __webpack_require__(moduleId) {

                /******/ // Check if module is in cache
                /******/
                if (installedModules[moduleId])
                /******/
                    return installedModules[moduleId].exports;

                /******/ // Create a new module (and put it into the cache)
                /******/
                var module = installedModules[moduleId] = {
                    /******/
                    exports: {},
                    /******/
                    id: moduleId,
                    /******/
                    loaded: false
                        /******/
                };

                /******/ // Execute the module function
                /******/
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

                /******/ // Flag the module as loaded
                /******/
                module.loaded = true;

                /******/ // Return the exports of the module
                /******/
                return module.exports;
                /******/
            }


            /******/ // expose the modules object (__webpack_modules__)
            /******/
            __webpack_require__.m = modules;

            /******/ // expose the module cache
            /******/
            __webpack_require__.c = installedModules;

            /******/ // __webpack_public_path__
            /******/
            __webpack_require__.p = "";

            /******/ // Load entry module and return exports
            /******/
            return __webpack_require__(0);
            /******/
        })
        /************************************************************************/
        /******/
        ([
            /* 0 */
            /***/
            function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function() {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }
                    return function(Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();

                var _react = __webpack_require__(1);

                var React = _interopRequireWildcard(_react);

                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    } else {
                        var newObj = {};
                        if (obj != null) {
                            for (var key in obj) {
                                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                            }
                        }
                        newObj.default = obj;
                        return newObj;
                    }
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return call && (typeof call === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
                    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                var echarts = __webpack_require__(2);

                var Yecharts = function(_React$Component) {
                    _inherits(Yecharts, _React$Component);

                    function Yecharts(props) {
                        _classCallCheck(this, Yecharts);

                        var _this = _possibleConstructorReturn(this, (Yecharts.__proto__ || Object.getPrototypeOf(Yecharts)).call(this, props));

                        _this.renderEchartDom = function() {
                            var echartObj = _this.getEchartsInstance();
                            echartObj.setOption(_this.props.option);
                            if (_this.props.showLoading) {
                                echartObj.showLoading();
                            } else {
                                echartObj.hideLoading();
                            }
                            return echartObj;
                        };
                        _this.getEchartsInstance = function() {
                            return echarts.getInstanceByDom(_this.refs.echartsDom) || echarts.init(_this.refs.echartsDom, _this.props.theme);
                        };
                        _this.yresize;
                        return _this;
                    }

                    _createClass(Yecharts, [{
                        key: 'componentDidMount',
                        value: function componentDidMount() {
                            var echartObj = this.renderEchartDom();
                            var onEvents = this.props.onEvents || [];

                            var _loop = function _loop(eventName) {
                                if (typeof eventName === 'string' && typeof onEvents[eventName] === 'function') {
                                    echartObj.on(eventName, function(param) {
                                        onEvents[eventName](param, echartObj);
                                    });
                                }
                            };

                            for (var eventName in onEvents) {
                                _loop(eventName);
                            }
                            if (typeof this.props.onChartReady === 'function') {
                                this.props.onChartReady(echartObj);
                            }
                            this.yresize = function() {
                                echartObj.resize();
                            };
                            window.addEventListener('resize', this.yresize, false);
                        }
                    }, {
                        key: 'componentDidUpdate',
                        value: function componentDidUpdate() {
                            this.renderEchartDom();
                        }
                    }, {
                        key: 'componentWillUnmount',
                        value: function componentWillUnmount() {
                            echarts.dispose(this.refs.echartsDom);
                            window.removeEventListener('resize', this.yresize, false);
                        }
                    }, {
                        key: 'render',
                        value: function render() {
                            var style = this.props.style || { height: '300px' };
                            return React.createElement('div', { ref: 'echartsDom', className: this.props.className, style: style });
                        }
                    }]);

                    return Yecharts;
                }(React.Component);

                exports.default = Yecharts;

                Yecharts.propTypes = {
                    option: React.PropTypes.object.isRequired,
                    style: React.PropTypes.object,
                    className: React.PropTypes.string,
                    theme: React.PropTypes.string,
                    onChartReady: React.PropTypes.func,
                    showLoading: React.PropTypes.bool,
                    onEvents: React.PropTypes.object
                };;

                /***/
            },
            /* 1 */
            /***/
            function(module, exports) {

                module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

                /***/
            },
            /* 2 */
            /***/
            function(module, exports) {

                module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

                /***/
            }
            /******/
        ])
});;
