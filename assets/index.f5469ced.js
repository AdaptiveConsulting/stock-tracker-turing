var L=Object.defineProperty;var N=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(s,e,t)=>e in s?L(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,p=(s,e)=>{for(var t in e||(e={}))R.call(e,t)&&w(s,t,e[t]);if(N)for(var t of N(e))j.call(e,t)&&w(s,t,e[t]);return s};import{j as x,r as d,R as O,a as C}from"./vendor.496323ca.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};E();const $="?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504",F=`https://sandbox.iexapis.com/stable/stock/aapl/quote${$}`,I=`https://sandbox.iexapis.com/stable/time-series/FUNDAMENTAL_VALUATIONS/AAPL/${$}`,P=async()=>{try{const s=await fetch(F).then(i=>i.json()),e=await fetch(I).then(i=>i.json());return p(p({},s),e[0])}catch(s){console.error(s)}},T=new Intl.NumberFormat("en-US",{notation:"compact",minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1});function m(s){return T.formatToParts(s).map(({type:e,value:t})=>{switch(e){case"fraction":return`${t} `;default:return t}}).reduce((e,t)=>e+t)}const r=x.exports.jsx,a=x.exports.jsxs,M=()=>{var f,v;const[s,e]=d.exports.useState({}),{high:t,low:i,open:n,previousClose:o,week52High:c,week52Low:y,marketCap:S,peRatio:b,dividendYield:h,incomeNetPerWabsoSplitAdjusted:u,isUSMarketOpen:l,volume:k,avgTotalVolume:A}=s;return d.exports.useEffect(()=>{let g=!0;return P().then(D=>{g&&e(D)}),()=>{g=!1}},[]),a("div",{className:"stats-container",children:[a("div",{className:"stats-section",children:[a("div",{className:"stats-row",children:["Open",r("span",{children:l?`$${n}`:"-"})]}),a("div",{className:"stats-row",children:["High",r("span",{children:l?`$${t}`:"-"})]}),a("div",{className:"stats-row",children:["Low",r("span",{children:l?`$${i}`:"-"})]}),a("div",{className:"stats-row",children:["Previous Close",r("span",{children:`$${o}`})]})]}),a("div",{className:"stats-section",children:[a("div",{className:"stats-row",children:["Day Range",r("span",{children:l?`$${t} - ${i}`:"-"})]}),a("div",{className:"stats-row",children:["52 Week Range",r("span",{children:`${y} - ${c}`})]}),a("div",{className:"stats-row",children:["Market Cap",r("span",{children:(f=m(S))!=null?f:"-"})]}),a("div",{className:"stats-row",children:["P/E Ratio",r("span",{children:b})]})]}),a("div",{className:"stats-section",children:[a("div",{className:"stats-row",children:["Dividend Yield",r("span",{children:`${h==null?void 0:h.toFixed(2)}%`})]}),a("div",{className:"stats-row",children:["Earnings Per Share",r("span",{children:`${u==null?void 0:u.toFixed(2)}`})]}),a("div",{className:"stats-row",children:["Volume",r("span",{children:(v=m(k))!=null?v:"-"})]}),a("div",{className:"stats-row",children:["Total Avg. Volume",r("span",{children:m(A)})]})]})]})},U=({completed:s})=>{const e={height:"4px",width:"231px",backgroundColor:"#e0e0de",borderRadius:50},t={height:"100%",width:`${s}%`,backgroundColor:" var(--core-primary-2)",borderRadius:"inherit",textAlign:"right"};return r("div",{style:e,children:r("div",{style:t})})};var q="./assets/ra-logo.612be723.png";const V=()=>{const[s,e]=d.exports.useState(0);return d.exports.useEffect(()=>{if(s<100){const t=setInterval(()=>{e(i=>i+1)},10);return()=>{clearInterval(t)}}},[s]),a("div",{className:"splash-screen",children:[r("img",{src:q,className:"logo",alt:""}),r(U,{completed:s})]})};function K(){return a("div",{className:"App",children:[r(V,{}),r(M,{})]})}O.render(r(C.StrictMode,{children:r(K,{})}),document.getElementById("root"));
