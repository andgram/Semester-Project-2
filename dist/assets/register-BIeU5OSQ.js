import"./main-DxMEcUNX.js";import{e as c,h as f,d as o}from"./headers-es2B9U5o.js";async function m({name:e,email:s,password:a}){const r=JSON.stringify({name:e,email:s,password:a}),t=await fetch(`${c}`,{method:"POST",body:r,headers:f()}),n=await t.json();if(t.ok===!1)throw new Error(n.errors[0].message);return n}function d(e){return e.endsWith("@stud.noroff.no")}async function u(e){e.preventDefault();const s=e.target,a=new FormData(s),r=Object.fromEntries(a.entries());if(!d(r.email)){o("#message","error","Invalid email address. Please use a valid 'stud.noroff.no' email.");return}try{await m(r),o("#message","success","Registered successfully. <a href='/auth/login/'>Login</a> to access your profile."),s.reset()}catch(t){o("#message","error",t.message)}}const i=document.forms.register;i&&i.addEventListener("submit",u);
