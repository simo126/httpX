import{j as e,r as d,a as B}from"./react-Cs0UQ-UD.js";import{c as A}from"./react-dom-DR4uFAPL.js";import{L as w,c as M,R as q}from"./react-router-dom-DUZ_sv3R.js";import{R as f,a as R}from"./@uiw-Rw1lyWBO.js";import{G as b}from"./@codemirror-Dom4TZKv.js";/* empty css                   */import{j as v}from"./js-beautify-D0YN3inN.js";import{u as F,C as z}from"./react-simple-typewriter-C9KiFh_R.js";import"./scheduler-CzFDRTuY.js";import"./react-router-BplYXcuU.js";import"./@remix-run-CAT8zpu_.js";import"./@babel-0InS3Qhy.js";import"./@lezer-B1OXniM2.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const C="/httpx/assets/logo-BeFoPwi8.png",j=({onClick:t,children:s,className:r})=>e.jsx("button",{className:r,onClick:t,children:s}),S=()=>{const[t,s]=d.useState(!1),r=()=>{s(!t),document.body.classList.toggle("dark")};return e.jsxs("header",{className:"p-4 border-httpx border-b-4 flex justify-between items-center dark:bg-[#181a1b]",children:[e.jsxs(w,{to:"/httpx/",className:"flex justify-start items-center",children:[e.jsx("img",{src:C,alt:"Logo",width:50,height:50}),e.jsx("p",{className:"px-2 text-httpx font-montserrat text-2xl",children:"HttpX"})]}),e.jsx(j,{className:"font-montserrat mx-4 dark:text-white",onClick:r,children:t?"Dark Mode":"Light Mode"})]})},G=({setUrl:t,url:s,setMethod:r,method:a,handleSend:o})=>e.jsxs("div",{className:"flex mt-6 mx-2 sm:mx-20 md:mx-42 lg:mx-56",children:[e.jsxs("select",{name:"idk",value:a,className:"h-12 sm:px-4 text-httpx border-2 border-httpx font-medium  dark:focus:border-blue-500 dark:bg-[#121212] dark:border-[#3c4143]",onChange:n=>r(n.target.value),children:[e.jsx("option",{value:"GET",children:"GET"}),e.jsx("option",{value:"POST",children:"POST"}),e.jsx("option",{value:"DELETE",children:"DELETE"}),e.jsx("option",{value:"PATCH",children:"PATCH"}),e.jsx("option",{value:"PUT",children:"PUT"})]}),e.jsx("input",{type:"text",value:s,placeholder:"Enter URL or paste text",className:"h-12 w-full  py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 dark:bg-[#121212] dark:border-[#3c4143] dark:text-white dark:focus:border-blue-500",onChange:n=>t(n.target.value)}),e.jsx(j,{onClick:o,className:"text-white  bg-httpx hover:bg-blue-800 font-medium  text-sm px-5 py-2 h-12 ",children:"SEND"})]}),E=({setQueryParams:t,queryParams:s})=>{const[r,a]=d.useState(""),[o,n]=d.useState(""),i=l=>{const x=s.filter(m=>m.id!==l);t(x),console.log(x)},u=()=>{if(!r||!o||s.length>10)return;const l={key:r,value:o,id:`${r}-${o}${s+1}`};t([...s,l]),a(""),n("")};return e.jsxs("div",{className:"flex justify-center flex-col over h-full my-4",children:[e.jsxs("div",{className:" text-sm flex h-10 justify-center items-start w-full gap-2 my-2 px-2",children:[e.jsx("input",{type:"text",placeholder:"Key",value:r,className:"h-10  w-[30%]  py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 dark:bg-[#121212] dark:text-white dark:border-[#3c4143] dark:focus:border-blue-500",onChange:l=>a(l.target.value)}),e.jsx("input",{type:"text",placeholder:"Value",value:o,className:"h-10  w-[30%]  py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 dark:bg-[#121212] dark:text-white dark:border-[#3c4143] dark:focus:border-blue-500",onChange:l=>n(l.target.value)}),e.jsx(j,{className:"h-10 text-white  bg-httpx hover:bg-blue-800  px-5 py-2   w-32 flex justify-center items-center",onClick:u,children:"Add"})]}),s.map(l=>e.jsxs("div",{className:" text-sm flex justify-center items-start w-full  gap-2 mt-1 px-2 ",children:[e.jsx("div",{className:"h-8 w-[30%]  py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 flex justify-start items-center dark:bg-[#121212] dark:text-white dark:border-[#3c4143]",children:l.key}),e.jsx("div",{className:"h-8 w-[30%]  py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 flex justify-start items-center dark:bg-[#121212] dark:text-white dark:border-[#3c4143]",children:l.value}),e.jsx(j,{onClick:()=>i(l.id),className:`text-httpx  bg-white border-2 border-httpx hover:bg-httpx
            hover:text-white px-5 py-2 h-8  w-32 flex justify-center items-center dark:bg-[#121212] dark:text-white dark:hover:bg-httpx `,children:"Remove"})]},l.id))]})},I=({setRequestBody:t,requestBody:s})=>e.jsxs("div",{children:[e.jsx("div",{className:"p-2 h-36 gap-2 dark:hidden",children:e.jsx(f,{className:"overflow-hidden h-full outline-none focus:outline-none focus:border-none ",value:s,placeholder:"Enter request body",onChange:r=>{t(r)},extensions:[b()],height:"128px",width:"100%"})}),e.jsx("div",{className:"p-2 h-36 gap-2 hidden dark:block",children:e.jsx(f,{className:"overflow-hidden h-full outline-none focus:outline-none focus:border-none ",value:s,placeholder:"Enter request body",onChange:r=>{t(r)},theme:R,extensions:[b()],height:"128px",width:"100%"})})]}),Q=({setRequestHeaders:t,requestHeaders:s})=>e.jsx(E,{setQueryParams:t,queryParams:s});function $({setQueryParams:t,setRequestHeaders:s,setRequestBody:r,requestBody:a,requestHeaders:o,queryParams:n}){const[i,u]=d.useState("QueryParametres"),l=["QueryParametres","Headers","Body"];return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"border-2 mx-2 sm:mx-20 md:mx-42 lg:mx-56 mt-4 dark:border-[#3c4143] dark:bg-[#181a1b] ",children:[e.jsx("ul",{className:"flex justify-start items-center h-12  border-b-2 dark:border-[#3c4143]",children:l.map(x=>e.jsx("li",{className:i===x?"choosen ":"notchoosen",children:e.jsx("button",{onClick:()=>{u(x)},className:"dark:text-white",children:x})},x),[])}),e.jsxs("div",{children:[i==="QueryParametres"?e.jsx(E,{setQueryParams:t,queryParams:n}):null,i==="Headers"?e.jsx(Q,{setRequestHeaders:s,requestHeaders:o}):null,i==="Body"?e.jsx(I,{setRequestBody:r,requestBody:a}):null]})]})})}function D(t){return t>1024*1024?(t/(1024*1024)).toFixed(2)+" MB":t>1024?(t/1024).toFixed(2)+" KB":t+" B"}const U=({setLoading:t,setResponse:s,setStatus:r,setResponseHeaders:a})=>{const[o,n]=d.useState("https://api.restful-api.dev/objects"),[i,u]=d.useState("GET"),[l,x]=d.useState([]),[m,T]=d.useState([]),[g,O]=d.useState(""),y=new Headers;y.append("Content-Type","application/json"),m.forEach(h=>y.append(h.key,h.value));const H=l.length>0?"?"+l.map(h=>`${h.key}=${h.value}`).join("&"):"",L=()=>{if(!o){alert("URL is required.");return}console.log("url",o),console.log("method",i),console.log("queryParams",l),console.log("requestHeaders",m),console.log("requestBody",g);const h=performance.now();r({status:"Loading...",time:0,size:"Loading..."});let k=null;t(!0),fetch(o+H,{method:i,headers:y,body:i!=="GET"?g:void 0,mode:"cors"}).then(c=>{const p=Object.fromEntries(c.headers.entries());if(a(p),k=c.status,r({status:c.status,time:null,size:null}),c.ok)return c.json();t(!1),s(c.json())}).then(c=>{const p=performance.now(),P=D(JSON.stringify(c).length);r({status:k,time:Math.round(p-h),size:P}),s(c),t(!1)}).catch(c=>{s({timestamp:new Date().toISOString(),status:404,error:"Not Found",path:o}),r({status:404,time:null,size:null}),t(!1)})};return e.jsxs(e.Fragment,{children:[e.jsx(G,{setUrl:n,setMethod:u,url:o,method:i,handleSend:L}),e.jsx($,{setQueryParams:x,queryParams:l,setRequestHeaders:T,requestHeaders:m,setRequestBody:O,requestBody:g})]})},K=({status:t,response:s})=>e.jsxs("div",{className:"border-2 h-20 mx-2 sm:mx-20 md:mx-42 lg:mx-56 mt-4 dark:border-[#3c4143] dark:bg-[#181a1b]",children:[e.jsx("h1",{className:"px-7  text-sm md:text-base  lg:text-xl text-montserrat mt-2   dark:text-white",children:"Response:"}),s!==void 0?e.jsxs("p",{className:"mt-2 px-7 text-sm md:text-base  lg:text-xl dark:text-white",children:["Status: ",t.status||"0",t.status<300?" OK":""," Time: ",t.time||"0"," ms Size:"," ",t.size||"0"]}):e.jsx("p",{className:"mt-2 px-7 md:text-base  lg:text-xl text-sm dark:text-white",children:"Click Send to get a response"})]}),X=({response:t,loading:s})=>{const r=JSON.stringify(t);return e.jsxs("div",{className:"dark:bg-[#181a1b]",children:[e.jsx("div",{className:"h-56 overflow-y-auto p-2 dark:hidden",children:s?e.jsx("p",{children:"Loading..."}):e.jsx(f,{extensions:[b()],value:v(r),height:"200px",options:{readOnly:!0}})}),e.jsx("div",{className:"h-56 overflow-y-auto p-2 hidden dark:block ",children:s?e.jsx("p",{className:"dark:text-white",children:"Loading..."}):e.jsx(f,{extensions:[b()],value:v(r),height:"200px",theme:R,options:{readOnly:!0}})})]})};function J({responseHeaders:t}){if(Array.isArray(t))return e.jsx("p",{children:"Invalid response headers format."});{const s=Array.isArray(t)?t:Object.entries(t);return s&&s.length>0?e.jsx("div",{className:"dark:border-[#3c4143] p-2 ",children:e.jsx("div",{className:"p-2",children:s.map((r,a)=>e.jsx("div",{children:e.jsxs("p",{className:"  dark:text-white text-md my-4",children:[r[0],": ",r[1]]})},a))})}):e.jsx("p",{children:"No response headers available."})}}const V=({response:t,loading:s,responseHeaders:r})=>{const[a,o]=d.useState("Response Body");return e.jsx("div",{className:"dark:bg-[#181a1b] h-[19.5rem]",children:e.jsxs("div",{className:"border-2 h-72 mx-2 sm:mx-20 md:mx-42 lg:mx-56 my-4 dark:border-[#3c4143]",children:[e.jsxs("ul",{className:"flex justify-start items-center h-12  border-b-2  dark:border-[#3c4143] ",children:[e.jsx("li",{className:a==="Response Body"?"choosen":"notchoosen",children:e.jsx("button",{onClick:()=>{o("Response Body")},className:"dark:text-white",children:"Response Body"})}),e.jsx("li",{className:a==="Response Header"?"choosen":"notchoosen",children:e.jsx("button",{onClick:()=>{o("Response Header")},className:"dark:text-white",children:"Response Headers"})})]}),e.jsxs("div",{children:[a==="Response Body"?e.jsx(X,{response:t,loading:s}):null,a==="Response Header"?e.jsx(J,{response:t,responseHeaders:r}):null]})]})})},W=({response:t,loading:s,status:r,responseHeaders:a})=>e.jsxs(e.Fragment,{children:[e.jsx(K,{status:r,response:t}),e.jsx(V,{response:t,loading:s,responseHeaders:a})]});function Y(){const[t,s]=d.useState(),[r,a]=d.useState(!1),[o,n]=d.useState({status:0,time:0,size:0}),[i,u]=d.useState([]);return e.jsxs("main",{className:"dark:bg-[#181a1b] h-screen",children:[e.jsx(S,{}),e.jsx(U,{setResponse:s,setLoading:a,setStatus:n,setResponseHeaders:u}),e.jsx(W,{response:t,loading:r,status:o,responseHeaders:i})]})}const N=({radius:t,color:s})=>{const r={width:t*2,height:t*2,borderRadius:"50%",backgroundColor:s};return e.jsx("div",{style:r})},Z=()=>e.jsxs("div",{className:"w-full bg-fachi  border-httpx border-b-4  h-64 flex justify-center items-center px-2 relative overflow-hidden dark:bg-[#1e2022]",children:[e.jsx("img",{src:C,alt:"httpXLOGO",height:100,width:100}),e.jsx("h1",{className:"text-4xl sm:text-8xl px-4 text-httpx font-palanquin  font-bold",children:"HttpX"}),e.jsx("div",{className:"absolute sm:top-[-100px] sm:left-[-100px] top-[-120px] left-[-120px] ",children:e.jsx(N,{radius:100,color:"#458ded"})}),e.jsx("div",{className:"absolute bottom-[-400px] right-[-400px] sm:right-[-200px] sm:bottom-[-200px]",children:e.jsx(N,{radius:200,color:"#458ded"})})]}),_=()=>{const[t]=F({words:["Intuitive HTTP Client","Intuitive HTTP Client"],loop:{}});return e.jsx("div",{className:"h-[200px] bg-white flex justify-center items-center dark:bg-[#181a1b]",children:e.jsxs("p",{className:"lg:text-4xl md:text-3xl sm:text-2xl text-center p-6   dark:text-white",children:["Experience seamless API testing and collaboration like never before with our ",e.jsx("span",{className:"text-httpx ",children:t}),e.jsx(z,{cursorStyle:"🚀"})]})})},ee=()=>e.jsx("div",{className:"flex justify-center items-center my-8",children:e.jsx(w,{to:"/httpx/app",className:`text-white bg-httpx hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded 
        lg:text-lg lg:px-8 lg:py-4 md:text-md md:px-4 md:py-4 py-4 px-4 text-sm focus:outline-none transition duration-300 ease-in-out font-montserrat `,children:"Let's Get Started 🚀"})});function te(){return e.jsxs("main",{className:"dark:bg-[#181a1b] h-screen",children:[e.jsx(S,{}),e.jsx(Z,{}),e.jsx(_,{}),e.jsx(ee,{})]})}const se=M([{path:"/httpx/",element:e.jsx(te,{})},{path:"/httpx/app",element:e.jsx(Y,{})}]);A.createRoot(document.getElementById("root")).render(e.jsx(B.StrictMode,{children:e.jsx(q,{router:se})}));
