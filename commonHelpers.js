import{S as u,i as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",d="41985459-07284690ed1bbc3dd300f203e",m=document.querySelector(".form"),p=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";function h(o){return fetch(`${y}?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}m.addEventListener("submit",g);function g(o){o.preventDefault(),i.style.display="block";const t=o.currentTarget,n=t.elements.query.value;if(!n){a();return}h(n).then(s=>{i.style.display="none",s.hits.length||a(),p.innerHTML=E(s.hits),new u(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(a).finally(()=>{i.style.display="none",t.reset()})}function E(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:l,downloads:c})=>`
      <li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${t}"
      data-source="${n}"
      alt="${s}"
    />
    <p class= "gallery-text">• Likes: ${e} • Views: ${r} • Comments: ${l} •</span> Downloads:${c}</p>
  </a>
</li>`).join("")}function a(o){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",messageSize:"20px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0,progressBarEasing:"linear"})}
//# sourceMappingURL=commonHelpers.js.map
