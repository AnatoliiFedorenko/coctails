!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequire58cb;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire58cb=a),a("iE7OH").register(JSON.parse('{"dlfMs":"f_coctail.cea5d988.js","JQ8i3":"sprite.3f5ac9d6.svg","eeNKI":"placeholder.7c12bf5f.gif","kBqre":"f_ingredients.bd9cc83c.js","5NH4n":"index.a3d8a457.js"}'));var i,o=a("e3qpK"),s=a("gyjzY");i=a("aNJCr").getBundleURL("dlfMs")+a("iE7OH").resolve("JQ8i3");var l,d=a("g4tMw"),c=a("fmC3e"),f=a("i3SOf"),u=a("5M7hj"),g=a("1dj5Q"),_=a("lnx82");l=a("aNJCr").getBundleURL("dlfMs")+a("iE7OH").resolve("eeNKI"),a("3fu6U");const p=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[];function v(t=[]){const r=t.map((({strDrink:t,strDrinkThumb:r,idDrink:n})=>`<li class="coctail-card">\n      <img class="img lazyload" src="${e(l)}" data-srcset=${r} alt=${t}/img>\n      <h3 class="coctail-card__name">${t}</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=${n} data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=${n} data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="${e(i)}#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>`)).join("");_.refCocktList.innerHTML=r}function h(){_.refCocktList.innerHTML=u.errorListFavCocktail}function m(){if(!(JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[]).length)return h()}_.refFormSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.finder.value.trim();if(!t)return;const r=p.filter((e=>e.strDrink.toLowerCase().includes(t.toLowerCase())));if(_.refFormSearch.reset(),!r.length)return _.refCocktList.innerHTML=d.notFound;v(r)})),_.refCocktList.addEventListener("click",(async function(e){if("BUTTON"!==e.target.tagName)return;if(e.target.dataset.favid)return function(e){const t=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[];for(let r=0;r<t.length;r++)if(t[r].idDrink===e)return t.splice(r,1),localStorage.setItem(s.FAV_COCKTAIL,JSON.stringify(t)),void m()}(e.target.dataset.favid),e.target.parentNode.parentNode.remove(),newArr=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[],void(0,g.initPagination)(newArr,v);e.target.dataset.type&&await(0,f.searchCoctById)(e.target.dataset.id,e.target.nextElementSibling)})),(0,o.headerInit)(),(0,c.themeSwitcher)(),p.length?(0,g.initPagination)(p,v):h()}();
//# sourceMappingURL=f_coctail.cea5d988.js.map