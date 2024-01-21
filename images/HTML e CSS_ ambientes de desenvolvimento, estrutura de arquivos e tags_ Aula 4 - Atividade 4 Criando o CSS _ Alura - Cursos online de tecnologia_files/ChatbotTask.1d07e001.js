"use strict";var _excluded=["firstAssistantMessage"];function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},e=Object.prototype,c=e.hasOwnProperty,u=Object.defineProperty||function(e,t,n){e[t]=n.value},t="function"==typeof Symbol?Symbol:{},r=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",o=t.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function i(e,t,n,r){var o,s,a,i,t=t&&t.prototype instanceof d?t:d,t=Object.create(t.prototype),r=new _(r||[]);return u(t,"_invoke",{value:(o=e,s=n,a=r,i="suspendedStart",function(e,t){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===e)throw t;return C()}for(a.method=e,a.arg=t;;){var n=a.delegate;if(n){n=function e(t,n){var r=n.method,o=t.iterator[r];if(void 0===o)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=void 0,e(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;r=l(o,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,h;o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}(n,a);if(n){if(n===h)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===i)throw i="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);i="executing";n=l(o,s,a);if("normal"===n.type){if(i=a.done?"completed":"suspendedYield",n.arg===h)continue;return{value:n.arg,done:a.done}}"throw"===n.type&&(i="completed",a.method="throw",a.arg=n.arg)}})}),t}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}a.wrap=i;var h={};function d(){}function f(){}function y(){}var t={},p=(s(t,r,function(){return this}),Object.getPrototypeOf),p=p&&p(p(k([]))),g=(p&&p!==e&&c.call(p,r)&&(t=p),y.prototype=d.prototype=Object.create(t));function v(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function b(a,i){var t;u(this,"_invoke",{value:function(n,r){function e(){return new i(function(e,t){!function t(e,n,r,o){var s,e=l(a[e],a,n);if("throw"!==e.type)return(n=(s=e.arg).value)&&"object"==_typeof(n)&&c.call(n,"__await")?i.resolve(n.__await).then(function(e){t("next",e,r,o)},function(e){t("throw",e,r,o)}):i.resolve(n).then(function(e){s.value=e,r(s)},function(e){return t("throw",e,r,o)});o(e.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}})}function m(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(m,this),this.reset(!0)}function k(t){if(t){var n,e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return n=-1,(e=function e(){for(;++n<t.length;)if(c.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e}).next=e}return{next:C}}function C(){return{value:void 0,done:!0}}return u(g,"constructor",{value:f.prototype=y,configurable:!0}),u(y,"constructor",{value:f,configurable:!0}),f.displayName=s(y,o,"GeneratorFunction"),a.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},a.awrap=function(e){return{__await:e}},v(b.prototype),s(b.prototype,n,function(){return this}),a.AsyncIterator=b,a.async=function(e,t,n,r,o){void 0===o&&(o=Promise);var s=new b(i(e,t,n,r),o);return a.isGeneratorFunction(t)?s:s.next().then(function(e){return e.done?e.value:s.next()})},v(g),s(g,o,"Generator"),s(g,r,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),a.keys=function(e){var t,n=Object(e),r=[];for(t in n)r.push(t);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&c.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return s.type="throw",s.arg=n,r.next=e,t&&(r.method="next",r.arg=void 0),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],s=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=c.call(o,"catchLoc"),i=c.call(o,"finallyLoc");if(a&&i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&c.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var s=(o=o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc?null:o)?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n,r,o=this.tryEntries[t];if(o.tryLoc===e)return"throw"===(n=o.completion).type&&(r=n.arg,w(o)),r}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},a}function asyncGeneratorStep(e,t,n,r,o,s,a){try{var i=e[s](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function _asyncToGenerator(i){return function(){var e=this,a=arguments;return new Promise(function(t,n){var r=i.apply(e,a);function o(e){asyncGeneratorStep(r,t,n,o,s,"next",e)}function s(e){asyncGeneratorStep(r,t,n,o,s,"throw",e)}o(void 0)})}}function ownKeys(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(e){_defineProperty(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _objectWithoutProperties(e,t){if(null==e)return{};var n,r=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),s=0;s<o.length;s++)n=o[s],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),s=0;s<o.length;s++)n=o[s],0<=t.indexOf(n)||(r[n]=e[n]);return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}var ChatbotTask=function(){function r(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{codeAreaDefaultCopyMessage:codeAreaDefaultCopyMessage,codeAreaCopiedMessage:codeAreaCopiedMessage,firstAssistantMessage:firstAssistantMessage,askVoteQuestionMessage:askVoteQuestionMessage,upvoteIconAltMessage:upvoteIconAltMessage,upvoteLabelMessage:upvoteLabelMessage,downvoteIconAltMessage:downvoteIconAltMessage,downvoteLabelMessage:downvoteLabelMessage},n=1<arguments.length?arguments[1]:void 0;return _classCallCheck(e,r),e.$chatbot=document.querySelector("#chatbot"),e.$chatbotBody=document.querySelector(".chatbot-body"),e.$chatInput=document.querySelector(".chatbot-footer__send-area-content"),e.$openChatbotButton=document.querySelector(".chatbot-cta"),e.$closeChatbotButton=document.querySelector(".chatbot-header__close"),e.$sendMessageButton=document.querySelector(".chatbot-footer__send-area-btn"),e.$suggestedMessagesFromChatbotContainer=document.querySelector(".chatbot-footer__questions"),e.$suggestedMessagesFromTaskTranscription=document.querySelectorAll(".chatbot-suggested-messages-transcription__messages .suggestedMessage"),e.$cleanConversationButton=document.querySelector(".chatbot-footer__actions-clean-conversation"),e.$taskBody=document.querySelector(".task-body"),e.$taskElement=document.querySelector(".task"),e.$selectPersonaHeader=document.querySelector(".chatbot-header__selected-persona"),e.$selectPersonaElement=document.querySelector(".chatbot-select-persona"),e.personas=n,e.chosenPersona=e.personas.find(function(e){return!0===e.defaultPersona}),e.luriStorage=new LuriStorage,e.luriClient=new LuriClient,n=t.firstAssistantMessage,t=_objectWithoutProperties(t,_excluded),e.luriView=new LuriView(e.luriClient,t),e.taskId=e.$taskElement.dataset.taskId,e.isAssistantReplying=!1,e.firstAssistantMessage=n,void(e.MINIMAL_WIDTH_TO_KEEP_CHATBOT_OPEN=960)}var t,e;return _createClass(r,[{key:"isMenuOpen",value:function(){return!this.$taskElement.classList.contains("menu--inactive")}},{key:"openMenu",value:function(){"true"===this.$taskElement.dataset.menuClosedByChatbot&&this.$taskElement.classList.remove("menu--inactive")}},{key:"closeMenu",value:function(){this.$taskElement.dataset.menuClosedByChatbot=!!this.isMenuOpen(),this.$taskElement.classList.add("menu--inactive")}},{key:"debounce",value:function(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}},{key:"setupListeners",value:function(){var r=this;window.addEventListener("resize",this.debounce(function(){window.innerWidth<r.MINIMAL_WIDTH_TO_KEEP_CHATBOT_OPEN&&(r.$taskBody.classList.remove("chatbot-open"),r.$taskBody.style.marginRight="auto")},300)),this.$cleanConversationButton.addEventListener("click",function(){2<=r.$chatbotBody.querySelectorAll(".chatbot-msg").length&&!r.isAssistantReplying&&(r.$chatbotBody.replaceChildren(),r.luriStorage.removeKey(r._getStorageKey()),r.showDefaultAssistantMessage(),r.showSuggestedMessagesFromChatbot(r.chosenPersona.suggestedMessages))}),this.$sendMessageButton.addEventListener("click",function(){r.sendMessageToChatbot()}),this.$chatInput.addEventListener("keydown",function(e){e.stopPropagation();var t=e.key;r.$chatInput.style.height=0,r.$chatInput.style.height=r.$chatInput.scrollHeight+"px","Enter"!==t||e.shiftKey||(e.preventDefault(),r.isAssistantReplying)||r.sendMessageToChatbot()}),this.$openChatbotButton.addEventListener("click",function(){var e;r.openChatbot(),r.$chatInput.focus(),0<r.$chatbotBody.children.length?r.$chatbotBody.scrollTop=r.$chatbotBody.scrollHeight:(e=r.luriStorage.getKey(r._getStorageKey()))?r.luriClient.getMessagesFromChat(e).then(function(e){r.recreateChatbotUiFrom(e),r.$chatbotBody.scrollTop=r.$chatbotBody.scrollHeight}):r.showDefaultAssistantMessage()}),this.$closeChatbotButton.addEventListener("click",function(){r.closeChatbot()}),this.$suggestedMessagesFromTaskTranscription.forEach(function(e){e.addEventListener("click",function(e){r.openChatbot(),0===r.$chatbotBody.children.length&&r.showDefaultAssistantMessage();e=e.target.textContent;r.isAssistantReplying||r.replyWithAssistantMessageTo(e)})}),this.$selectPersonaHeader.addEventListener("click",function(){r.toggleVisibilitySelectPersona()}),document.addEventListener("keydown",function(e){"Escape"===e.key&&r.hideSelectPersona()}),document.querySelectorAll(".chatbot-select-persona__options-button").forEach(function(n){n.addEventListener("click",function(){r.hideSelectPersona();var t=n.dataset.persona.toLocaleUpperCase(),e=n.dataset.label,e=(r.chosenPersona=r.personas.find(function(e){return e.key===t})||r.personas[0],r.$selectPersonaHeader.querySelector("span").innerText=e,r.$chatbotBody.replaceChildren(),r.showDefaultAssistantMessage(),r.luriStorage.getKey(r._getStorageKey()));e?r.luriClient.getMessagesFromChat(e).then(function(e){r.recreateChatbotUiFrom(e),r.$chatbotBody.scrollTop=r.$chatbotBody.scrollHeight}):0===r.$chatbotBody.children.length&&r.showDefaultAssistantMessage()})})}},{key:"openChatbot",value:function(){this.$taskBody.classList.contains("chatbot-open")||(this.$taskBody.classList.add("chatbot-open"),this.closeMenu(),this.$taskBody.style.marginRight="600px",this.$chatbot.style.width="600px")}},{key:"closeChatbot",value:function(){this.hideSelectPersona(),this.$taskBody.classList.contains("chatbot-open")&&(this.$taskBody.classList.remove("chatbot-open"),this.openMenu(),this.$chatbot.style.width=null,this.$taskBody.style.marginRight="auto")}},{key:"showDefaultAssistantMessage",value:function(){this.$chatbotBody.appendChild(this.createAssistantMessageNode({message:this.chosenPersona.initialMessage,showVoteButtons:!1})),this.showSuggestedMessagesFromChatbot(this.chosenPersona.suggestedMessages)}},{key:"sendMessageToChatbot",value:function(){var e=this.$chatInput.value.trim();e&&(this.$chatInput.value="",this.$chatInput.style.height="",this.replyWithAssistantMessageTo(e))}},{key:"recreateChatbotUiFrom",value:function(e){var n=this;e.forEach(function(e,t){e.isFromAssistant?n.$chatbotBody.appendChild(n.createAssistantMessageNode(_objectSpread(_objectSpread({},e),{},{showVoteButtons:0!==t}))):n.$chatbotBody.appendChild(n.createUserMessageNode(e.message))})}},{key:"getCurrentChatbotId",value:(e=_asyncToGenerator(_regeneratorRuntime().mark(function e(){var t;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.luriStorage.getKey(this._getStorageKey()))return e.abrupt("return",t);e.next=3;break;case 3:if("CUSTOMER_SUPPORT"===this.chosenPersona.key)return e.next=6,this.luriClient.createChatbotForSupport();e.next=9;break;case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,this.luriClient.createChatbotForTask(this.taskId);case 11:e.t0=e.sent;case 12:return t=e.t0,this.luriStorage.insertKey(this._getStorageKey(),t),e.abrupt("return",t);case 15:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"replyWithAssistantMessageTo",value:(t=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var n,r,o,s,a,i,c,u=this;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){e.scroll({top:e.scrollHeight,behavior:"smooth"})},r=function(e){return e.scrollHeight-e.scrollTop-e.clientHeight<=70},this.$chatbotBody.appendChild(this.createUserMessageNode(t)),this.$chatInput.focus(),this.isAssistantReplying=!0,this.removeSuggestedMessagesFromChatbot(),this.hideCurrentAskForVote(),e.next=9,this.getCurrentChatbotId();case 9:return o=e.sent,s=this.luriView.createEmptyAssistantMessageNode(),this.$chatbotBody.appendChild(s),e.next=14,this.luriClient.sendMessageToChatbotStreaming(o,t);case 14:return i=e.sent,e.next=17,this.luriView.fillAssistantMessageNodeWithTextChunks(s,i,function(){r(u.$chatbotBody)&&n(u.$chatbotBody)});case 17:return a=e.sent,e.next=20,this.luriClient.getLastMessageIdFromChat(o);case 20:i=e.sent,this.luriView.fillAssistantMessageNodeWithMessageId(a,i),c=this.luriView.createAskForVoteNode(i),this.$chatbotBody.appendChild(c),this.isAssistantReplying=!1;case 25:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"createAssistantMessageNode",value:function(e){var t=e.message,n=e.messageId,r=e.vote,e=e.showVoteButtons;return this.luriView.createAssistantMessageNode({message:t,messageId:void 0===n?void 0:n,vote:void 0===r?void 0:r,showVoteButtons:void 0===e||e})}},{key:"createUserMessageNode",value:function(e){return this.luriView.createUserMessageNode(e)}},{key:"removeSuggestedMessagesFromChatbot",value:function(){this.$suggestedMessagesFromChatbotContainer.replaceChildren()}},{key:"showSuggestedMessagesFromChatbot",value:function(e){var t=this;this.removeSuggestedMessagesFromChatbot(),e.forEach(function(e){e=t.luriView.createSuggestedMessageNode(e);t.$suggestedMessagesFromChatbotContainer.appendChild(e),e.addEventListener("click",function(e){e=e.target.textContent;t.isAssistantReplying||t.replyWithAssistantMessageTo(e)})})}},{key:"hideCurrentAskForVote",value:function(){var e;null!=(e=this.$chatbotBody.querySelector(".chatbot-ask-vote"))&&e.remove()}},{key:"toggleVisibilitySelectPersona",value:function(){this.$selectPersonaElement.classList.toggle("chatbot-select-persona--hidden")}},{key:"hideSelectPersona",value:function(){this.$selectPersonaElement.classList.add("chatbot-select-persona--hidden")}},{key:"_getStorageKey",value:function(){return"CUSTOMER_SUPPORT"===this.chosenPersona.key?"SUPPORT":"TASK-".concat(this.taskId)}}]),r}();