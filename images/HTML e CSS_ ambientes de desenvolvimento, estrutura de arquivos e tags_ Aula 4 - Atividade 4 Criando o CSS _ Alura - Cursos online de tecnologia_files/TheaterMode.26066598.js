"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(o){var r=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(o);return _possibleConstructorReturn(this,r?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0===o)return("string"===t?String:Number)(e);o=o.call(e,t||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}var TheaterModeToggler=function(){function t(){_classCallCheck(this,t),this.$body=$("body"),this.setCookie()}return _createClass(t,[{key:"setCookie",value:function(){var e=new Date,e=(e.setTime(e.getTime()+6048e5),"expires="+e.toUTCString());document.cookie="theatermode="+this.$body.hasClass("theatermode")+";expires="+e+";path=/"}},{key:"registerTheaterModeComponentOnVideoJS",value:function(){var e=videojs.getComponent("Button"),n=new t;videojs.registerComponent("theaterModeToggle",function(){_inherits(r,e);var o=_createSuper(r);function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return _classCallCheck(this,r),(e=o.call(this,e,t)).addClass("theater-mode-player-icon"),n.buttonIconToggle(_assertThisInitialized(e)),e}return _createClass(r,[{key:"handleClick",value:function(){$("body").toggleClass("theatermode"),n.buttonIconToggle(this),n.setCookie()}}]),r}())}},{key:"buttonIconToggle",value:function(e){$("body").hasClass("theatermode")?(e.addClass("close"),e.controlText("Close Theater Mode")):(e.removeClass("close"),e.controlText("Open Theater Mode"))}}]),t}();