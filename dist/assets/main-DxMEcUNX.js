(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const a="token",s="name";function u(t,n){localStorage.setItem(t,JSON.stringify(n))}function c(t){return JSON.parse(localStorage.getItem(t))}function d(){localStorage.clear()}function b(t){u(a,t)}function f(){return c(a)}function g(){return!!f()}function y(t){u(s,t)}function L(){return c(s)}function h(){const t=document.querySelector("#logout-button");t&&t.addEventListener("click",m)}function m(){d(),window.location.href="/auth/login/"}function p(){const t=document.querySelector("#top-nav"),n=g(),r=window.location.pathname;if(t){const i=document.createElement("ul");if(i.id="primary-navigation",i.className="primary-navigation",n){r==="/profile/"?i.innerHTML=`
          <li><a href="/">Home</a></li>
          <li><a href="/auction/list/index.html">Listings</a></li>
          <li id="edit-profile-button"><a href="/profile/index.html">Edit Profile</a></li>
          <li><a href="/auction/create/index.html">Create Auction</a></li>
          <li><button id="logout-button">Logout</button></li>
        `:i.innerHTML=`
          <li><a href="/">Home</a></li>
          <li><a href="/auction/list/index.html">Listings</a></li>
          <li><a href="/profile/index.html">My Profile</a></li>
          <li><a href="/auction/create/index.html">Create Auction</a></li>
          <li><button id="logout-button">Logout</button></li>
        `;const e=i.querySelector("#logout-button");e&&e.addEventListener("click",h)}else i.innerHTML=`
        <li><a href="/">Home</a></li>
        <li><a href="/auction/list/index.html">Listings</a></li>
        <li><a href="/auth/login/index.html">Login</a></li>
        <li><a href="/auth/register/index.html">Register</a></li>
      `;t.innerHTML="",t.appendChild(i)}}function v(t,n){const r=document.querySelector(t),i=document.querySelector(n);if(!r||!i){console.warn(`Navigation or toggle button not found for selectors: ${t}, ${n}`);return}i.addEventListener("click",()=>{r.getAttribute("data-visible")==="false"?(r.setAttribute("data-visible","true"),i.setAttribute("aria-expanded","true"),i.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      `):(r.setAttribute("data-visible","false"),i.setAttribute("aria-expanded","false"),i.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      `)})}p();v("#primary-navigation","#mobile-nav-toggle");export{y as a,f as b,g as i,L as l,b as s};
