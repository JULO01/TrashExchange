!function(){function e(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,o)}function n(n){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=n.apply(t,r);function u(n){e(a,o,i,u,c,"next",n)}function c(n){e(a,o,i,u,c,"throw",n)}u(void 0)})}}(self.webpackChunkTrashExchange=self.webpackChunkTrashExchange||[]).push([[4908],{4908:function(e,t,r){"use strict";r.r(t),r.d(t,{startInputShims:function(){return f}});var o=r(5392),i=new WeakMap,a=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;i.has(e)!==t&&(t?c(e,n,r):s(e,n))},u=function(e){return e===e.getRootNode().activeElement},c=function(e,n,t){var r=n.parentNode,o=n.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),i.set(e,o);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform="translate3d(".concat(a,"px,").concat(t,"px,0) scale(0)")},s=function(e,n){var t=i.get(e);t&&(i.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},l="input, textarea, [no-blur], [contenteditable]",d=function(e,n){if("INPUT"===e.tagName&&!(e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)){var t=e.closest("ion-content");if(null!==t){var r=t.$ionPaddingTimer;r&&clearTimeout(r),n>0?t.style.setProperty("--keyboard-offset","".concat(n,"px")):t.$ionPaddingTimer=setTimeout(function(){t.style.setProperty("--keyboard-offset","0px")},120)}}},f=function(e){var t=document,r=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),f=e.getBoolean("scrollPadding",!0),v=Array.from(t.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,m=new WeakMap,h=function(){var e=n(regeneratorRuntime.mark(function e(t){var s,l,d,f,v,h;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){return(0,o.c)(t,e)});case 2:s=t.shadowRoot||t,l=s.querySelector("input")||s.querySelector("textarea"),d=t.closest("ion-content"),f=d?null:t.closest("ion-footer"),l&&(d&&c&&!p.has(t)&&(v=function(e,n,t){if(!t||!n)return function(){};var r=function(t){u(n)&&a(e,n,t)},i=function(){return a(e,n,!1)},c=function(){return r(!0)},s=function(){return r(!1)};return(0,o.a)(t,"ionScrollStart",c),(0,o.a)(t,"ionScrollEnd",s),n.addEventListener("blur",i),function(){(0,o.b)(t,"ionScrollStart",c),(0,o.b)(t,"ionScrollEnd",s),n.addEventListener("ionBlur",i)}}(t,l,d),p.set(t,v)),(d||f)&&i&&!m.has(t)&&(h=function(e,t,r,i,c){var s,l=function(e){s=(0,o.p)(e)},d=function(l){if(s){var d,f=(0,o.p)(l);(function(e,n,t){if(n&&t){var r=n.x-t.x,o=n.y-t.y;return r*r+o*o>36}return!1})(0,s,f)||u(t)||(l.stopPropagation(),(d=n(regeneratorRuntime.mark(function e(t,r,i,u,c){var s,l,d,f,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i||u){e.next=2;break}return e.abrupt("return");case 2:if(s=function(e,n,t){return function(e,n,t,r){var o=e.top,i=e.bottom,a=n.top,u=a+15,c=.75*Math.min(n.bottom,r-t)-i,s=u-o,l=Math.round(c<0?-c:s>0?-s:0),d=Math.min(l,o-a),f=Math.abs(d);return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:t,inputSafeY:4-(o-u)}}((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)}(t,i||u,c),!(i&&Math.abs(s.scrollAmount)<4)){e.next=7;break}r.focus(),e.next=16;break;case 7:if(a(t,r,!0,s.inputSafeY),r.focus(),(0,o.r)(function(){return t.click()}),"undefined"==typeof window){e.next=16;break}if(d=function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==l&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",d),e.t0=i,!e.t0){e.next=7;break}return e.next=7,i.scrollByPoint(0,s.scrollAmount,s.scrollDuration);case 7:a(t,r,!1,s.inputSafeY),r.focus();case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),f=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",d)},!i){e.next=15;break}return e.next=12,i.getScrollElement();case 12:if(v=e.sent,!(s.scrollAmount>v.scrollHeight-v.clientHeight-v.scrollTop)){e.next=15;break}return e.abrupt("return",("password"===r.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",d),void(l=setTimeout(d,1e3))));case 15:d();case 16:case"end":return e.stop()}},e)})),function(e,n,t,r,o){return d.apply(this,arguments)})(e,t,r,i,c))}};return e.addEventListener("touchstart",l,!0),e.addEventListener("touchend",d,!0),function(){e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",d,!0)}}(t,l,d,f,r),m.set(t,h)));case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();s&&function(){var e=!0,n=!1,t=document;(0,o.a)(t,"ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(r){if(n)n=!1;else{var o=t.activeElement;if(o&&!o.matches(l)){var i=r.target;i!==o&&(i.matches(l)||i.closest(l)||(e=!1,setTimeout(function(){e||o.blur()},50)))}}},!1)}(),f&&function(e){var n=document;n.addEventListener("focusin",function(n){d(n.target,e)}),n.addEventListener("focusout",function(e){d(e.target,0)})}(r);for(var g=0,w=v;g<w.length;g++){var E=w[g];h(E)}t.addEventListener("ionInputDidLoad",function(e){h(e.detail)}),t.addEventListener("ionInputDidUnload",function(e){!function(e){if(c){var n=p.get(e);n&&n(),p.delete(e)}if(i){var t=m.get(e);t&&t(),m.delete(e)}}(e.detail)})}}}])}();