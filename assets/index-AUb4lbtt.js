import{j as a}from"./index-Btyp9ZzC.js";import{I as s,L as l}from"./index-BTD0eE24.js";import"./traverse-react-node-QsKZ_XmT.js";const d=()=>{const t="abcdefghijklmnopqrstuvwxyz";return t[Math.floor(Math.random()*t.length)]},i=t=>{let r="";for(let e=0;e<t;e++)r+=d();return r},m=(t,r)=>{const e=Math.floor(Math.random()*(r-t+1))+t;let o="";for(let n=0;n<e;n++)o+=i(Math.floor(Math.random()*6)+3)+" ";return o.trim()},c=(t,r)=>new Array(Math.floor(Math.random()*(r-t)+t)).fill("").map(()=>m(2,5)),h=65,f=Array(26).fill("").map((t,r)=>({title:String.fromCharCode(h+r),items:c(3,10)})),g=()=>a.jsx(s,{style:{width:"100vw"},children:f.map(t=>{const{title:r,items:e}=t;return a.jsx(s.Panel,{index:r,title:`标题${r}`,children:a.jsx(l,{children:e.map((o,n)=>a.jsx(l.Item,{children:o},n))})},`标题${r}`)})});export{g as default};
