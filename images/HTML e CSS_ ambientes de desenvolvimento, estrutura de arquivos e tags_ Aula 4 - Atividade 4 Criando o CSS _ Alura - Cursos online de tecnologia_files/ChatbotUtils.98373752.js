"use strict";function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return s};var s={},e=Object.prototype,c=e.hasOwnProperty,u=Object.defineProperty||function(e,t,r){e[t]=r.value},t="function"==typeof Symbol?Symbol:{},n=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",o=t.toStringTag||"@@toStringTag";function a(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,r){return e[t]=r}}function i(e,t,r,n){var o,a,s,i,t=t&&t.prototype instanceof f?t:f,t=Object.create(t.prototype),n=new w(n||[]);return u(t,"_invoke",{value:(o=e,a=r,s=n,i="suspendedStart",function(e,t){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===e)throw t;return k()}for(s.method=e,s.arg=t;;){var r=s.delegate;if(r){r=function e(t,r){var n=r.method,o=t.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=void 0,e(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;n=l(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}(r,s);if(r){if(r===h)continue;return r}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===i)throw i="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);i="executing";r=l(o,a,s);if("normal"===r.type){if(i=s.done?"completed":"suspendedYield",r.arg===h)continue;return{value:r.arg,done:s.done}}"throw"===r.type&&(i="completed",s.method="throw",s.arg=r.arg)}})}),t}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}s.wrap=i;var h={};function f(){}function v(){}function d(){}var t={},p=(a(t,n,function(){return this}),Object.getPrototypeOf),p=p&&p(p(S([]))),y=(p&&p!==e&&c.call(p,n)&&(t=p),d.prototype=f.prototype=Object.create(t));function g(e){["next","throw","return"].forEach(function(t){a(e,t,function(e){return this._invoke(t,e)})})}function m(s,i){var t;u(this,"_invoke",{value:function(r,n){function e(){return new i(function(e,t){!function t(e,r,n,o){var a,e=l(s[e],s,r);if("throw"!==e.type)return(r=(a=e.arg).value)&&"object"==_typeof(r)&&c.call(r,"__await")?i.resolve(r.__await).then(function(e){t("next",e,n,o)},function(e){t("throw",e,n,o)}):i.resolve(r).then(function(e){a.value=e,n(a)},function(e){return t("throw",e,n,o)});o(e.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}})}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function S(t){if(t){var r,e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(e=function e(){for(;++r<t.length;)if(c.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e}).next=e}return{next:k}}function k(){return{value:void 0,done:!0}}return u(y,"constructor",{value:v.prototype=d,configurable:!0}),u(d,"constructor",{value:v,configurable:!0}),v.displayName=a(d,o,"GeneratorFunction"),s.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,a(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},s.awrap=function(e){return{__await:e}},g(m.prototype),a(m.prototype,r,function(){return this}),s.AsyncIterator=m,s.async=function(e,t,r,n,o){void 0===o&&(o=Promise);var a=new m(i(e,t,r,n),o);return s.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},g(y),a(y,o,"Generator"),a(y,n,function(){return this}),a(y,"toString",function(){return"[object Generator]"}),s.keys=function(e){var t,r=Object(e),n=[];for(t in r)n.push(t);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},s.values=S,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&c.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return a.type="throw",a.arg=r,n.next=e,t&&(n.method="next",n.arg=void 0),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var s=c.call(o,"catchLoc"),i=c.call(o,"finallyLoc");if(s&&i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&c.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var a=(o=o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc?null:o)?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r,n,o=this.tryEntries[t];if(o.tryLoc===e)return"throw"===(r=o.completion).type&&(n=r.arg,_(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},s}function asyncGeneratorStep(e,t,r,n,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(i){return function(){var e=this,s=arguments;return new Promise(function(t,r){var n=i.apply(e,s);function o(e){asyncGeneratorStep(n,t,r,o,a,"next",e)}function a(e){asyncGeneratorStep(n,t,r,o,a,"throw",e)}o(void 0)})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _asyncIterator(e){var t,r,n,o=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,n=Symbol.iterator);o--;){if(r&&null!=(t=e[r]))return t.call(e);if(n&&null!=(t=e[n]))return new AsyncFromSyncIterator(t.call(e));r="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(e){function r(e){var t;return Object(e)!==e?Promise.reject(new TypeError(e+" is not an object.")):(t=e.done,Promise.resolve(e.value).then(function(e){return{value:e,done:t}}))}return(AsyncFromSyncIterator=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(e){var t=this.s.return;return void 0===t?Promise.resolve({value:e,done:!0}):r(t.apply(this.s,arguments))},throw:function(e){var t=this.s.return;return void 0===t?Promise.reject(e):r(t.apply(this.s,arguments))}},new AsyncFromSyncIterator(e)}function _awaitAsyncGenerator(e){return new _OverloadYield(e,0)}function _wrapAsyncGenerator(e){return function(){return new _AsyncGenerator(e.apply(this,arguments))}}function _AsyncGenerator(s){var o,a;function i(r,e){try{var n=s[r](e),o=n.value,a=o instanceof _OverloadYield;Promise.resolve(a?o.v:o).then(function(e){if(a){var t="return"===r?"return":"next";if(!o.k||e.done)return i(t,e);e=s[t](e).value}c(n.done?"return":"normal",e)},function(e){i("throw",e)})}catch(e){c("throw",e)}}function c(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?i(o.key,o.arg):a=null}this._invoke=function(r,n){return new Promise(function(e,t){e={key:r,arg:n,resolve:e,reject:t,next:null};a?a=a.next=e:(o=a=e,i(r,n))})},"function"!=typeof s.return&&(this.return=void 0)}function _OverloadYield(e,t){this.v=e,this.k=t}_AsyncGenerator.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},_AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},_AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},_AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)};var LuriClient=function(){function e(){_classCallCheck(this,e)}var t,r;return _createClass(e,[{key:"sendMessageToChatbotStreaming",value:(r=_asyncToGenerator(_regeneratorRuntime().mark(function e(t,r){var n;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ai-assistant/chatbot/".concat(t,"/messages/streaming"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r})});case 2:if(n=e.sent,n=n.body){e.next=7;break}return console.error("Response body is empty"),e.abrupt("return",null);case 7:return e.abrupt("return",this.generateTextChunks(n));case 8:case"end":return e.stop()}},e,this)})),function(e,t){return r.apply(this,arguments)})},{key:"generateTextChunks",value:function(a){return _wrapAsyncGenerator(_regeneratorRuntime().mark(function e(){var t,r,n,o;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.getReader(),r=new TextDecoder;case 2:return e.next=5,_awaitAsyncGenerator(t.read());case 5:if(o=e.sent,n=o.done,o=o.value,n)return e.abrupt("break",14);e.next=10;break;case 10:return e.next=12,r.decode(o);case 12:e.next=2;break;case 14:case"end":return e.stop()}},e)}))()}},{key:"createChatbotForTask",value:function(e){return fetch("/ai-assistant/chatbot/task/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e.chatId})}},{key:"createChatbotForImmersion",value:function(e){return fetch("/ai-assistant/chatbot/immersionclass/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e.chatId})}},{key:"createChatbotForSupport",value:(t=_asyncToGenerator(_regeneratorRuntime().mark(function e(){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/ai-assistant/chatbot/support",{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e.chatId}));case 1:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)})},{key:"getMessagesFromChat",value:function(e){return fetch("/ai-assistant/chatbot/".concat(e)).then(function(e){return e.json()}).then(function(e){return e.map(function(e){return{messageId:e.id,message:e.message,isFromAssistant:e.isFromAssistant,vote:e.vote}})})}},{key:"getLastMessageIdFromChat",value:function(e){return fetch("/ai-assistant/chatbot/".concat(e,"/lastAssistantMessageId")).then(function(e){return e.json()}).then(function(e){return e.messageId})}},{key:"voteMessage",value:function(e,t){fetch("/ai-assistant/chatbot/message/".concat(e,"/vote"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vote:t.toUpperCase()})}).then(function(e){})}}]),e}(),LuriStorage=function(){function e(){_classCallCheck(this,e),_defineProperty(this,"LOCAL_STORAGE_KEY","luriConversations"),_defineProperty(this,"TIME_KEEP_CHAT_SESSION_ALIVE_IN_MS",72e5)}return _createClass(e,[{key:"saveOnStorage",value:function(e){localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(e))}},{key:"getFromStorage",value:function(){var e=localStorage.getItem(this.LOCAL_STORAGE_KEY);return e?JSON.parse(e):null}},{key:"insertKey",value:function(e,t){var r=this.getFromStorage();r?(r[e]={chatId:t,expiresAt:Date.now()+this.TIME_KEEP_CHAT_SESSION_ALIVE_IN_MS},this.saveOnStorage(r)):this.saveOnStorage(_defineProperty({},e,{chatId:t,expiresAt:Date.now()+this.TIME_KEEP_CHAT_SESSION_ALIVE_IN_MS}))}},{key:"removeKey",value:function(e){var t=this.getFromStorage();t&&(delete t[e],this.saveOnStorage(t))}},{key:"getKey",value:function(e){var t=this.getFromStorage();if(t){var r=t[e];if(r&&!(r.expiresAt<Date.now()))return r.expiresAt=Date.now()+this.TIME_KEEP_CHAT_SESSION_ALIVE_IN_MS,this.saveOnStorage(t),r.chatId;delete t[e],this.saveOnStorage(t)}}}]),e}(),LuriView=function(){function c(e,t){var r=t.codeAreaDefaultCopyMessage,n=t.codeAreaCopiedMessage,o=t.askVoteQuestionMessage,a=t.upvoteIconAltMessage,s=t.upvoteLabelMessage,i=t.downvoteIconAltMessage,t=t.downvoteLabelMessage;_classCallCheck(this,c),_defineProperty(this,"nodeFromString",function(e){return(new DOMParser).parseFromString(e,"text/html").body.firstElementChild}),this.luriClient=e,this.codeAreaDefaultCopyMessage=r,this.codeAreaCopiedMessage=n,this.askVoteQuestionMessage=o,this.upvoteIconAltMessage=a,this.upvoteLabelMessage=s,this.downvoteIconAltMessage=i,this.downvoteLabelMessage=t}var n;return _createClass(c,[{key:"setupCliboard",value:function(){var r=this;new ClipboardJS(".chatbot-codeArea-header__copy",{target:function(e){return e.parentElement.nextElementSibling.firstElementChild}}).on("success",function(e){var t=e.trigger;t.innerText=r.codeAreaCopiedMessage,t.classList.add("chatbot-codeArea-copied"),setTimeout(function(){t.innerText=r.codeAreaDefaultCopyMessage,t.classList.remove("chatbot-codeArea-copied")},2e3),e.clearSelection()})}},{key:"createAssistantMessageNode",value:function(e){var r=this,t=e.message,n=e.messageId,o=e.vote,o=void 0===o?void 0:o,e=e.showVoteButtons,e=this.nodeFromString('\n            <div class="chatbot-msg chatbot-msg-assistant">\n                <div class="chatbot-msg-body"></div>\n                '.concat(void 0===e||e?'<div class="chatbot-votes" data-message-id="'.concat(void 0===n?void 0:n,'" data-value="').concat(null==o?void 0:o.toLowerCase(),'">\n                    <span class="chatbot-votes__option upvote" data-value="upvote"></span>\n                    <span class="chatbot-votes__option downvote" data-value="downvote"></span>\n                </div>'):"","\n            </div>"));return e.querySelector(".chatbot-msg-body").innerHTML=LuriMarkdownParser.parseAssistantMessage(t,this.codeAreaDefaultCopyMessage),this.setupCliboard(),e.querySelectorAll(".chatbot-votes__option").forEach(function(e){e.addEventListener("click",function(e){var t=e.target.dataset.value;e.target.parentElement.dataset.value!==t&&(e=e.target.parentElement.dataset.messageId,r.voteMessage(e,t))})}),e}},{key:"createEmptyAssistantMessageNode",value:function(){var e=this.createAssistantMessageNode({message:" "});return e.querySelector(".chatbot-votes").style.display="none",e}},{key:"fillAssistantMessageNodeWithTextChunks",value:(n=_asyncToGenerator(_regeneratorRuntime().mark(function e(t,r,n){var o,a,s,i,c,u,l,h,f;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&t){e.next=2;break}return e.abrupt("return");case 2:o="",a=t.querySelector(".chatbot-msg-body"),c=i=!(s=function(e){var e=e.split(/(?<=})\B(?={)/),r="",n=!1;return e.forEach(function(e){var e=JSON.parse(e),t=e.message,e=e.error;r+=t,n=n||e}),{messageFromChunk:r,hasError:n}}),e.prev=7,l=_asyncIterator(r);case 9:return e.next=11,l.next();case 11:if(!(i=!(h=e.sent).done)){e.next=21;break}h=h.value,h=s(h),f=h.messageFromChunk,h.hasError?o=f:o+=f,a.textContent=o,a.innerHTML=LuriMarkdownParser.parseAssistantMessage(a.textContent,this.codeAreaDefaultCopyMessage),n();case 18:i=!1,e.next=9;break;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(7),c=!0,u=e.t0;case 27:if(e.prev=27,e.prev=28,i&&null!=l.return)return e.next=32,l.return();e.next=32;break;case 32:if(e.prev=32,c)throw u;e.next=35;break;case 35:return e.finish(32);case 36:return e.finish(27);case 37:return e.abrupt("return",t);case 38:case"end":return e.stop()}},e,this,[[7,23,27,37],[28,,32,36]])})),function(e,t,r){return n.apply(this,arguments)})},{key:"fillAssistantMessageNodeWithMessageId",value:function(e,t){e=e.querySelector(".chatbot-votes");e.style.display="flex",e.dataset.messageId=t}},{key:"createUserMessageNode",value:function(e){var t=this.nodeFromString('\n            <div class="chatbot-msg chatbot-msg-user">\n                <div class="chatbot-msg-body"></div>\n            </div>');return t.querySelector(".chatbot-msg-body").innerText=e,t}},{key:"createAskForVoteNode",value:function(t){var r=this,e=this.nodeFromString('<div class="chatbot-ask-vote" data-message-id="'.concat(t,'">\n                <div class="chatbot-ask-vote__text-question">').concat(this.askVoteQuestionMessage,'</div>\n                <div class="chatbot-ask-vote__votes">\n                    <div class="chatbot-ask-vote__vote" data-value="upvote">\n                        <img class="chatbot-ask-vote__vote-icon upvote" src="/assets/images/chatbot/upvote.svg" alt="').concat(this.upvoteIconAltMessage,'" />\n                        <span>').concat(this.upvoteLabelMessage,'</span>\n                    </div>\n                    <div class="chatbot-ask-vote__vote" data-value="downvote">\n                        <img class="chatbot-ask-vote__vote-icon downvote" src="/assets/images/chatbot/downvote.svg" alt="').concat(this.downvoteIconAltMessage,'" />\n                        <span>').concat(this.downvoteLabelMessage,"</span>\n                    </div>\n                </div>\n            </div>"));return e.querySelectorAll(".chatbot-ask-vote__vote").forEach(function(e){e.addEventListener("click",function(e){e=e.currentTarget.dataset.value;r.voteMessage(t,e)})}),e}},{key:"createSuggestedMessageNode",value:function(e){return this.nodeFromString('\n            <button class="chatbot-footer__questions-item">'.concat(e,"</button>"))}},{key:"voteMessage",value:function(e,t){var r="UPVOTE"===t.toUpperCase(),n=document.querySelector('.chatbot-ask-vote[data-message-id="'.concat(e,'"]')),o=(n&&(o=n.querySelector(".upvote"),n=n.querySelector(".downvote"),o.src=r?"/assets/images/chatbot/upvote-voted.svg":"/assets/images/chatbot/upvote.svg",n.src=r?"/assets/images/chatbot/downvote.svg":"/assets/images/chatbot/downvote-voted.svg"),document.querySelector('.chatbot-votes[data-message-id="'.concat(e,'"]')));o&&(o.dataset.value=t),this.luriClient.voteMessage(e,t)}}]),c}(),LuriMarkdownParser=_createClass(function e(){_classCallCheck(this,e)});_defineProperty(LuriMarkdownParser,"parseAssistantMessage",function(e,o){var t;if(e)return(t=new marked.Renderer).paragraph=function(e){return"<p>".concat(e,"</p>")},t.codespan=function(e){return'<code class="chatbot-codeInline">'.concat(e,"</code>")},t.html=function(e){return t={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"},e.replace(/[<>&"']/g,function(e){return t[e]});var t},t.link=function(e,t,r){return'<a href="'.concat(e,'" target="_blank">').concat(r,"</a>")},t.code=function(e,t,r){var e=hljs.highlightAuto(e),n=e.value,e=e.language;return'\n                 <div class="chatbot-codeArea">\n                    <div class="chatbot-codeArea-header">\n                        <div class="chatbot-codeArea-header__title">'.concat(e,'</div>\n                        <button class="chatbot-codeArea-header__copy">\n                            ').concat(o,'\n                        </button>\n                    </div>\n                    <div class="chatbot-codeArea-body">\n                        <pre class="chatbot-codeArea-body__content"><code class="chatbot-codeArea-realCode">').concat(n,"</code></pre>\n                    </div>\n                </div>\n        ")},e=marked.parse(e,{renderer:t}),DOMPurify.sanitize(e,{ADD_ATTR:["target"]})});