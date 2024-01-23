import{S as f,i as m}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",y="41985459-07284690ed1bbc3dd300f203e",h=document.querySelector(".form");document.querySelector(".input");document.querySelector(".button");const a=document.querySelector(".gallery");function g(o){return fetch(`${d}?key=${y}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}h.addEventListener("submit",p);function p(o){o.preventDefault();const t=o.currentTarget,n=t.elements.query.value;if(!n){l();return}g(n).then(s=>{s.hits.length||l(),a.innerHTML=c(s.hits),new f(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(l).finally(()=>t.reset())}function c(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:i,downloads:u})=>`
      <li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${t}"
      data-source="${n}"
      alt="${s}"
    />
    <p class= "gallery-text">• Likes: ${e} • Views: ${r} • Comments: ${i} •</span> Downloads:${u}</p>
  </a>
</li>`).join("")}a.innerHTML=c(data.hits);function l(o){m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",messageSize:"20px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0,progressBarEasing:"linear"})}
//# sourceMappingURL=commonHelpers.js.map
