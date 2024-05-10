import{r as n}from"./react-Cs0UQ-UD.js";import{i as g,p as L,m as S,j as R,A as j,s as W,g as M,r as D,a as z}from"./@remix-run-CAT8zpu_.js";/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},y.apply(this,arguments)}const O=n.createContext(null),A=n.createContext(null),b=n.createContext(null),B=n.createContext(null),E=n.createContext({outlet:null,matches:[],isDataRoute:!1}),J=n.createContext(null);function le(e,t){let{relative:r}=t===void 0?{}:t;P()||g(!1);let{basename:o,navigator:i}=n.useContext(b),{hash:u,pathname:a,search:f}=G(e,{relative:r}),c=a;return o!=="/"&&(c=a==="/"?o:R([o,a])),i.createHref({pathname:c,search:f,hash:u})}function P(){return n.useContext(B)!=null}function k(){return P()||g(!1),n.useContext(B).location}function T(e){n.useContext(b).static||n.useLayoutEffect(e)}function oe(){let{isDataRoute:e}=n.useContext(E);return e?te():q()}function q(){P()||g(!1);let e=n.useContext(O),{basename:t,future:r,navigator:o}=n.useContext(b),{matches:i}=n.useContext(E),{pathname:u}=k(),a=JSON.stringify(M(i,r.v7_relativeSplatPath)),f=n.useRef(!1);return T(()=>{f.current=!0}),n.useCallback(function(m,s){if(s===void 0&&(s={}),!f.current)return;if(typeof m=="number"){o.go(m);return}let l=D(m,JSON.parse(a),u,s.relative==="path");e==null&&t!=="/"&&(l.pathname=l.pathname==="/"?t:R([t,l.pathname])),(s.replace?o.replace:o.push)(l,s.state,s)},[t,o,a,u,e])}function G(e,t){let{relative:r}=t===void 0?{}:t,{future:o}=n.useContext(b),{matches:i}=n.useContext(E),{pathname:u}=k(),a=JSON.stringify(M(i,o.v7_relativeSplatPath));return n.useMemo(()=>D(e,JSON.parse(a),u,r==="path"),[e,a,u,r])}function ie(e,t,r,o){P()||g(!1);let{navigator:i}=n.useContext(b),{matches:u}=n.useContext(E),a=u[u.length-1],f=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let m=k(),s;if(t){var l;let d=typeof t=="string"?L(t):t;c==="/"||(l=d.pathname)!=null&&l.startsWith(c)||g(!1),s=d}else s=m;let v=s.pathname||"/",h=v;if(c!=="/"){let d=c.replace(/^\//,"").split("/");h="/"+v.replace(/^\//,"").split("/").slice(d.length).join("/")}let p=S(e,{pathname:h}),C=Y(p&&p.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:R([c,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:R([c,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),u,r,o);return t&&C?n.createElement(B.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:j.Pop}},C):C}function K(){let e=ee(),t=z(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:i},r):null,null)}const Q=n.createElement(K,null);class V extends n.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?n.createElement(E.Provider,{value:this.props.routeContext},n.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X(e){let{routeContext:t,match:r,children:o}=e,i=n.useContext(O);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(E.Provider,{value:t},o)}function Y(e,t,r,o){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),o===void 0&&(o=null),e==null){var u;if((u=r)!=null&&u.errors)e=r.matches;else return null}let a=e,f=(i=r)==null?void 0:i.errors;if(f!=null){let s=a.findIndex(l=>l.route.id&&(f==null?void 0:f[l.route.id]));s>=0||g(!1),a=a.slice(0,Math.min(a.length,s+1))}let c=!1,m=-1;if(r&&o&&o.v7_partialHydration)for(let s=0;s<a.length;s++){let l=a[s];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(m=s),l.route.id){let{loaderData:v,errors:h}=r,p=l.route.loader&&v[l.route.id]===void 0&&(!h||h[l.route.id]===void 0);if(l.route.lazy||p){c=!0,m>=0?a=a.slice(0,m+1):a=[a[0]];break}}}return a.reduceRight((s,l,v)=>{let h,p=!1,C=null,d=null;r&&(h=f&&l.route.id?f[l.route.id]:void 0,C=l.route.errorElement||Q,c&&(m<0&&v===0?(re("route-fallback",!1),p=!0,d=null):m===v&&(p=!0,d=l.route.hydrateFallbackElement||null)));let U=t.concat(a.slice(0,v+1)),F=()=>{let x;return h?x=C:p?x=d:l.route.Component?x=n.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=s,n.createElement(X,{match:l,routeContext:{outlet:s,matches:U,isDataRoute:r!=null},children:x})};return r&&(l.route.ErrorBoundary||l.route.errorElement||v===0)?n.createElement(V,{location:r.location,revalidation:r.revalidation,component:C,error:h,children:F(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):F()},null)}var _=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_||{}),N=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(N||{});function Z(e){let t=n.useContext(O);return t||g(!1),t}function $(e){let t=n.useContext(A);return t||g(!1),t}function H(e){let t=n.useContext(E);return t||g(!1),t}function w(e){let t=H(),r=t.matches[t.matches.length-1];return r.route.id||g(!1),r.route.id}function ee(){var e;let t=n.useContext(J),r=$(N.UseRouteError),o=w(N.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[o]}function te(){let{router:e}=Z(_.UseNavigateStable),t=w(N.UseNavigateStable),r=n.useRef(!1);return T(()=>{r.current=!0}),n.useCallback(function(i,u){u===void 0&&(u={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,y({fromRouteId:t},u)))},[e,t])}const I={};function re(e,t,r){!t&&!I[e]&&(I[e]=!0)}function se(e){let{basename:t="/",children:r=null,location:o,navigationType:i=j.Pop,navigator:u,static:a=!1,future:f}=e;P()&&g(!1);let c=t.replace(/^\/*/,"/"),m=n.useMemo(()=>({basename:c,navigator:u,static:a,future:y({v7_relativeSplatPath:!1},f)}),[c,f,u,a]);typeof o=="string"&&(o=L(o));let{pathname:s="/",search:l="",hash:v="",state:h=null,key:p="default"}=o,C=n.useMemo(()=>{let d=W(s,c);return d==null?null:{location:{pathname:d,search:l,hash:v,state:h,key:p},navigationType:i}},[c,s,l,v,h,p,i]);return C==null?null:n.createElement(b.Provider,{value:m},n.createElement(B.Provider,{children:r,value:C}))}new Promise(()=>{});function ue(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:n.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:n.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:n.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{O as D,b as N,se as R,A as a,le as b,oe as c,k as d,G as e,ue as m,ie as u};
