import{s as i,a as c}from"./main-DxMEcUNX.js";import{c as m,h as f,d}from"./headers-es2B9U5o.js";async function g({email:s,password:e}){const t=JSON.stringify({email:s,password:e}),a=await fetch(`${m}`,{method:"POST",body:t,headers:f()});if(!a.ok){const o=await a.json();throw new Error(o.message||"Login failed")}return await a.json()}async function w(s){s.preventDefault();const e=s.target,t=new FormData(e),a=Object.fromEntries(t.entries());try{const{data:o}=await g(a),{accessToken:n,name:r}=o;i(n),c(r),window.location.href="/"}catch(o){d("#message","error",o.message)}}const h=document.forms.login;h.addEventListener("submit",w);
