import{j as h,r as i,R as m,a as g}from"./vendor.496323ca.js";const f=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};f();const r=h.exports.jsx,l=h.exports.jsxs,v=({completed:e})=>{const s={height:"4px",width:"231px",backgroundColor:"#e0e0de",borderRadius:50},o={height:"100%",width:`${e}%`,backgroundColor:" var(--core-primary-2)",borderRadius:"inherit",textAlign:"right"};return r("div",{style:s,children:r("div",{style:o})})};var x="./assets/ra-logo.612be723.png";const S=({completed:e})=>l("div",{className:e===100?"splash-screen-short":"splash-screen",children:[r("img",{src:x,className:e===100?"":"logo",alt:""}),e===100?null:r(v,{completed:e})]});const y=({symbol:e,stockName:s,inputUser:o})=>{const c=(t,n)=>{const a=new RegExp(o,"gi"),d=t.match(a),u=d?d.toString():"",p=t.substring(u.length);return l("span",{children:[r("strong",{className:"black",children:u}),p," "]},n)};return r("div",{children:l("div",{className:"stock-suggested",children:[c(e)," - ",s.split(" ").map(c)]})})},b=({market:e,stocks:s,inputUser:o})=>l("div",{children:[r("div",{className:"market-namarketme"}),s.map((c,t)=>r(y,{symbol:c.symbol,inputUser:o,stockName:c.name},t))]}),k=({stocks:e,inputUser:s})=>r("div",{className:"suggestion-panel",children:e.length===0?r("div",{className:"no-result-label",children:"No results found"}):r(b,{market:"Stocks",stocks:e,inputUser:s})}),N=()=>{const[e,s]=i.exports.useState(null),[o,c]=i.exports.useState("");return i.exports.useEffect(()=>{const n=`https://sandbox.iexapis.com/stable/search/${o}/?token=Tpk_4171507c85734b4f824fe5b208d9c1e2`;o?fetch(n).then(a=>a.json()).then(a=>{s(a)}).catch(a=>{s([]),console.log(a)}):s(null)},[o]),r("div",{className:"search",children:l("div",{className:"search-wrapper",children:[r("input",{type:"text",onChange:({target:n})=>{c(n.value)},placeholder:"Enter a stock, symbol or currency"}),e&&o&&r(k,{stocks:e,inputUser:o})]})})};function j(){const[e,s]=i.exports.useState(0);return i.exports.useEffect(()=>{if(e<100){const o=setInterval(()=>{s(c=>c+1)},10);return()=>{clearInterval(o)}}},[e]),l("div",{className:"app",children:[r(S,{completed:e}),e===100&&r(N,{})]})}m.render(r(g.StrictMode,{children:r(j,{})}),document.getElementById("root"));
