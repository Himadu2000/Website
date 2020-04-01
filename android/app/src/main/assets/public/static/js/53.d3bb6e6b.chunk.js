(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1036:function(e,r,t){"use strict";t.r(r),t.d(r,"ion_refresher",function(){return l}),t.d(r,"ion_refresher_content",function(){return h});var n=t(20),i=t(42),s=t(16),o=t(1071),l=function(){function e(e){Object(i.m)(this,e),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1,this.ionRefresh=Object(i.d)(this,"ionRefresh",7),this.ionPull=Object(i.d)(this,"ionPull",7),this.ionStart=Object(i.d)(this,"ionStart",7)}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return n.a(this,void 0,void 0,function(){var e,r,i,s=this;return n.c(this,function(n){switch(n.label){case 0:return"fixed"!==this.el.getAttribute("slot")?(console.error('Make sure you use: <ion-refresher slot="fixed">'),[2]):(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,3];case 1:return n.sent(),r=this,[4,e.getScrollElement()];case 2:return r.scrollEl=n.sent(),[3,4];case 3:console.error("ion-refresher did not attach, make sure the parent is an ion-content."),n.label=4;case 4:return i=this,[4,t.e(0).then(t.bind(null,1070))];case 5:return i.gesture=n.sent().createGesture({el:this.el.closest("ion-content"),gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:function(){return s.canStart()},onStart:function(){return s.onStart()},onMove:function(e){return s.onMove(e)},onEnd:function(){return s.onEnd()}}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.prototype.complete=function(){return n.a(this,void 0,void 0,function(){return n.c(this,function(e){return this.close(32,"120ms"),[2]})})},e.prototype.cancel=function(){return n.a(this,void 0,void 0,function(){return n.c(this,function(e){return this.close(16,""),[2]})})},e.prototype.getProgress=function(){return Promise.resolve(this.progress)},e.prototype.canStart=function(){return!!this.scrollEl&&(1===this.state&&!(this.scrollEl.scrollTop>0))},e.prototype.onStart=function(){this.progress=0,this.state=1},e.prototype.onMove=function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0===(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}},e.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()},e.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})},e.prototype.close=function(e,r){var t=this;setTimeout(function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)},e.prototype.setCss=function(e,r,t,n){var s=this;this.appliedStyles=e>0,Object(i.n)(function(){if(s.scrollEl){var i=s.scrollEl.style;i.transform=e>0?"translateY("+e+"px) translateZ(0px)":"translateZ(0px)",i.transitionDuration=r,i.transitionDelay=n,i.overflow=t?"hidden":""}})},e.prototype.hostData=function(){var e,r=Object(i.e)(this);return{slot:"fixed",class:(e={},e[r]=!0,e["refresher-"+r]=!0,e["refresher-active"]=1!==this.state,e["refresher-pulling"]=2===this.state,e["refresher-ready"]=4===this.state,e["refresher-refreshing"]=8===this.state,e["refresher-cancelling"]=16===this.state,e["refresher-completing"]=32===this.state,e)}},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),e.prototype.render=function(){return Object(i.i)(i.a,this.hostData())},Object.defineProperty(e,"style",{get:function(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"},enumerable:!0,configurable:!0}),e}(),h=function(){function e(e){Object(i.m)(this,e)}return e.prototype.componentWillLoad=function(){if(void 0===this.pullingIcon&&(this.pullingIcon=s.b.get("refreshingIcon","arrow-down")),void 0===this.refreshingSpinner){var e=Object(i.e)(this);this.refreshingSpinner=s.b.get("refreshingSpinner",s.b.get("spinner","ios"===e?"lines":"crescent"))}},e.prototype.hostData=function(){var e;return{class:(e={},e[Object(i.e)(this)]=!0,e)}},e.prototype.__stencil_render=function(){return[Object(i.i)("div",{class:"refresher-pulling"},this.pullingIcon&&Object(i.i)("div",{class:"refresher-pulling-icon"},Object(i.i)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(i.i)("div",{class:"refresher-pulling-text",innerHTML:Object(o.a)(this.pullingText)})),Object(i.i)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(i.i)("div",{class:"refresher-refreshing-icon"},Object(i.i)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(i.i)("div",{class:"refresher-refreshing-text",innerHTML:Object(o.a)(this.refreshingText)}))]},e.prototype.render=function(){return Object(i.i)(i.a,this.hostData(),this.__stencil_render())},e}()},1071:function(e,r,t){"use strict";t.d(r,"a",function(){return n});var n=function(e){try{if("string"!==typeof e||""===e)return e;var r=document.createDocumentFragment(),t=document.createElement("div");r.appendChild(t),t.innerHTML=e,l.forEach(function(e){for(var t=r.querySelectorAll(e),n=t.length-1;n>=0;n--){var o=t[n];o.parentNode?o.parentNode.removeChild(o):r.removeChild(o);for(var l=s(o),h=0;h<l.length;h++)i(l[h])}});for(var n=s(r),o=0;o<n.length;o++)i(n[o]);var h=document.createElement("div");h.appendChild(r);var c=h.querySelector("div");return null!==c?c.innerHTML:h.innerHTML}catch(a){return console.error(a),""}},i=function e(r){if(!r.nodeType||1===r.nodeType){for(var t=r.attributes.length-1;t>=0;t--){var n=r.attributes[t],i=n.name;if(o.includes(i.toLowerCase())){var l=n.value;null!=l&&l.toLowerCase().includes("javascript:")&&r.removeAttribute(i)}else r.removeAttribute(i)}var h=s(r);for(t=0;t<h.length;t++)e(h[t])}},s=function(e){return null!=e.children?e.children:e.childNodes},o=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=53.d3bb6e6b.chunk.js.map