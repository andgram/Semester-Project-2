import{b as i}from"./main-DxMEcUNX.js";function d(e,t="error",a="Something went wrong"){let s=e;typeof e=="string"&&(s=document.querySelector(e)),s.innerHTML=`
      <div class="message ${t}">
           <p>${a}</p>
      </div>
    `,s.style.display="block";const c=s.querySelector(".message");setTimeout(()=>{c.classList.add("fade-out"),setTimeout(()=>{s.style.display="none",s.innerHTML=""},500)},3e3)}const r="5c2b19a4-bb48-4221-aa05-d7a9ac84c8c7",o="https://v2.api.noroff.dev",n=`${o}/auth`,p=`${o}/auction/listings`,l=`${p}/search`,T=`${n}/login`,_=`${n}/register`,A=`${o}/auction`,u=`${A}/profiles`;function f(){const e=new Headers,t=i();return e.append("X-Noroff-API-Key",r),t&&e.append("Authorization",`Bearer ${t}`),e.append("Content-Type","application/json"),e}export{l as A,p as a,u as b,T as c,d,_ as e,f as h};
