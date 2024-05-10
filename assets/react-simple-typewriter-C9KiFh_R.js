import{j as N,r as P}from"./react-Cs0UQ-UD.js";var R={},Y,q;Object.defineProperty(R,"__esModule",{value:!0});var S=N,s=P,i=function(){return i=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},i.apply(this,arguments)};function H(e,r){var o,t;switch(r.type){case"TYPE":return i(i({},e),{speed:r.speed,text:(o=r.payload)===null||o===void 0?void 0:o.substring(0,e.text.length+1)});case"DELAY":return i(i({},e),{speed:r.payload});case"DELETE":return i(i({},e),{speed:r.speed,text:(t=r.payload)===null||t===void 0?void 0:t.substring(0,e.text.length-1)});case"COUNT":return i(i({},e),{count:e.count+1});default:return e}}var A=function(e){var r=e.words,o=r===void 0?["Hello World!","This is","a simple Typewriter"]:r,t=e.loop,n=t===void 0?1:t,u=e.typeSpeed,l=u===void 0?80:u,f=e.deleteSpeed,b=f===void 0?50:f,m=e.delaySpeed,h=m===void 0?1500:m,d=e.onLoopDone,T=e.onType,c=e.onDelete,g=e.onDelay,_=s.useReducer(H,{speed:l,text:"",count:0}),x=_[0],C=x.speed,p=x.text,k=x.count,y=_[1],D=s.useRef(0),v=s.useRef(!1),a=s.useRef(!1),w=s.useRef(!1),E=s.useRef(!1),O=s.useCallback(function(){var j=k%o.length,L=o[j];a.current?(y({type:"DELETE",payload:L,speed:b}),p===""&&(a.current=!1,y({type:"COUNT"}))):(y({type:"TYPE",payload:L,speed:l}),w.current=!0,p===L&&(y({type:"DELAY",payload:h}),w.current=!1,E.current=!0,setTimeout(function(){E.current=!1,a.current=!0},h),n>0&&(D.current+=1,D.current/o.length===n&&(E.current=!1,v.current=!0)))),w.current&&T&&T(D.current),a.current&&c&&c(),E.current&&g&&g()},[k,h,b,n,l,o,p,T,c,g]);return s.useEffect(function(){var j=setTimeout(O,C);return v.current&&clearTimeout(j),function(){return clearTimeout(j)}},[O,C]),s.useEffect(function(){d&&v.current&&d()},[d]),[p,{isType:w.current,isDelay:E.current,isDelete:a.current,isDone:v.current}]},U="styles-module_blinkingCursor__yugAC",V="styles-module_blinking__9VXRT";(function(e,r){r===void 0&&(r={});var o=r.insertAt;if(e&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",o==="top"&&t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var B=s.memo(function(e){var r=e.cursorBlinking,o=r===void 0||r,t=e.cursorStyle,n=t===void 0?"|":t,u=e.cursorColor,l=u===void 0?"inherit":u;return S.jsx("span",i({style:{color:l},className:"".concat(U," ").concat(o?V:"")},{children:n}))});q=R.Cursor=B,R.Typewriter=function(e){var r=e.words,o=r===void 0?["Hello World!","This is","a simple Typewriter"]:r,t=e.loop,n=t===void 0?1:t,u=e.typeSpeed,l=u===void 0?80:u,f=e.deleteSpeed,b=f===void 0?50:f,m=e.delaySpeed,h=m===void 0?1500:m,d=e.cursor,T=d!==void 0&&d,c=e.cursorStyle,g=c===void 0?"|":c,_=e.cursorColor,x=_===void 0?"inherit":_,C=e.cursorBlinking,p=C===void 0||C,k=e.onLoopDone,y=e.onType,D=e.onDelay,v=e.onDelete,a=A({words:o,loop:n,typeSpeed:l,deleteSpeed:b,delaySpeed:h,onLoopDone:k,onType:y,onDelay:D,onDelete:v})[0];return S.jsxs(S.Fragment,{children:[S.jsx("span",{children:a}),T&&S.jsx(B,{cursorStyle:g,cursorColor:x,cursorBlinking:p})]})},Y=R.useTypewriter=A;export{q as C,Y as u};
