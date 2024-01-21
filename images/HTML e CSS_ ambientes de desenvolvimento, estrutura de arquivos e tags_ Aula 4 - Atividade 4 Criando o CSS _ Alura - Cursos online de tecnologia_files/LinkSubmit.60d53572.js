"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,_toPropertyKey(i.key),i)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}var LinkSubmit=function(){function e(t){_classCallCheck(this,e),this.task=t,this.projectField=function(){return $("#project-link")};t=$(".task")[0].dataset;this.redirectUrl=t.urlPrefix+"course/"+t.courseCode+"/task/"+t.taskId,this.projectUrlInvalidMessage=$("#project-link-invalid-message")}return _createClass(e,[{key:"getUrl",value:function(){return this.projectField().val()}},{key:"initialize",value:function(){var t=this,e=$("#linkSubmit"),r=this.projectField();r.on("input",function(){this.checkValidity()?(e.removeAttr("disabled"),r.removeClass("project-link-input--invalid")):(e.attr("disabled",!0),r.addClass("project-link-input--invalid"))}),e.on("click",function(){return t.task.submitAnswer(t._feedBackAnswer.bind(t),t.getUrl())}),$("#projectLinkTermButton").on("click",function(){var t=$("input[type='radio']:checked").val(),e=$("#taskId").val();$.post("/project/link/authorization/term/"+e,{termResponse:t}).done(function(){$(".project-link-term").hide()}).fail(function(t){var e=$("#projectLinkErrorMessage");e.html(t.responseText),e.show()})})}},{key:"_feedBackAnswer",value:function(t){t.responseText?(this.projectUrlInvalidMessage.html(t.responseText),this.projectField().addClass("project-link-input--invalid"),this.task.enableButton()):$(location).attr("href",this.redirectUrl)}}]),e}();