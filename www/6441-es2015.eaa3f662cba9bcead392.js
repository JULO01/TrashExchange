(self.webpackChunkTrashExchange=self.webpackChunkTrashExchange||[]).push([[6441],{757:function(e,s,t){"use strict";t.r(s),t.d(s,{startFocusVisible:function(){return o}});const n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],o=()=>{let e=[],s=!0;const t=document,o=s=>{e.forEach(e=>e.classList.remove("ion-focused")),s.forEach(e=>e.classList.add("ion-focused")),e=s},c=()=>{s=!1,o([])};t.addEventListener("keydown",e=>{s=n.includes(e.key),s||o([])}),t.addEventListener("focusin",e=>{if(s&&e.composedPath){const s=e.composedPath().filter(e=>!!e.classList&&e.classList.contains("ion-focusable"));o(s)}}),t.addEventListener("focusout",()=>{t.activeElement===t.body&&o([])}),t.addEventListener("touchstart",c),t.addEventListener("mousedown",c)}}}]);