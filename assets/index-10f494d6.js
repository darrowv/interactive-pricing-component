(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function h(){}function fe(e){return e()}function ie(){return Object.create(null)}function O(e){e.forEach(fe)}function Z(e){return typeof e=="function"}function S(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function pe(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function T(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function v(){return $(" ")}function K(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ge(e){return e===""?null:+e}function me(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function oe(e,t){e.value=t??""}let ee;function P(e){ee=e}const I=[],ue=[],F=[],ce=[],he=Promise.resolve();let J=!1;function _e(){J||(J=!0,he.then(de))}function Q(e){F.push(e)}const D=new Set;let Y=0;function de(){const e=ee;do{for(;Y<I.length;){const t=I[Y];Y++,P(t),ye(t.$$)}for(P(null),I.length=0,Y=0;ue.length;)ue.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];D.has(n)||(D.add(n),n())}F.length=0}while(I.length);for(;ce.length;)ce.pop()();J=!1,D.clear(),P(e)}function ye(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}const G=new Set;let ve;function N(e,t){e&&e.i&&(G.delete(e),e.i(t))}function q(e,t,n,s){if(e&&e.o){if(G.has(e))return;G.add(e),ve.c.push(()=>{G.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function B(e){e&&e.c()}function j(e,t,n,s){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),s||Q(()=>{const i=e.$$.on_mount.map(fe).filter(Z);e.$$.on_destroy?e.$$.on_destroy.push(...i):O(i),e.$$.on_mount=[]}),l.forEach(Q)}function M(e,t){const n=e.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){e.$$.dirty[0]===-1&&(I.push(e),_e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,s,r,l,i,c=[-1]){const f=ee;P(e);const o=e.$$={fragment:null,ctx:[],props:l,update:h,not_equal:r,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:ie(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};i&&i(o.root);let y=!1;if(o.ctx=n?n(e,t.props||{},(d,m,..._)=>{const b=_.length?_[0]:m;return o.ctx&&r(o.ctx[d],o.ctx[d]=b)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](b),y&&$e(e,d)),m}):[],o.update(),y=!0,O(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const d=me(t.target);o.fragment&&o.fragment.l(d),d.forEach(k)}else o.fragment&&o.fragment.c();t.intro&&N(e.$$.fragment),j(e,t.target,t.anchor,t.customElement),de()}P(f)}class C{$destroy(){M(this,1),this.$destroy=h}$on(t,n){if(!Z(n))return h;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const A=[];function be(e,t=h){let n;const s=new Set;function r(c){if(S(e,c)&&(e=c,n)){const f=!A.length;for(const o of s)o[1](),A.push(o,e);if(f){for(let o=0;o<A.length;o+=2)A[o][0](A[o+1]);A.length=0}}}function l(c){r(c(e))}function i(c,f=h){const o=[c,f];return s.add(o),s.size===1&&(n=t(r)||h),c(e),()=>{s.delete(o),s.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:i}}const X=be(!1),ae=[{views:"10K",price:8},{views:"50K",price:12},{views:"100K",price:16},{views:"500K",price:24},{views:"1M",price:36}];function we(e){let t,n,s,r;return{c(){t=g("div"),n=g("input"),a(n,"type","range"),a(n,"name","range"),a(n,"min","1"),a(n,"max","5"),a(n,"class","svelte-hda1sd"),a(t,"class","slider svelte-hda1sd")},m(l,i){T(l,t,i),u(t,n),oe(n,e[0]),s||(r=[K(n,"change",e[2]),K(n,"input",e[2]),K(n,"input",function(){Z(e[1])&&e[1].apply(this,arguments)})],s=!0)},p(l,[i]){e=l,i&1&&oe(n,e[0])},i:h,o:h,d(l){l&&k(t),s=!1,O(r)}}}function xe(e,t,n){let{rangeValue:s}=t,{handleRange:r}=t;function l(){s=ge(this.value),n(0,s)}return e.$$set=i=>{"rangeValue"in i&&n(0,s=i.rangeValue),"handleRange"in i&&n(1,r=i.handleRange)},[s,r,l]}class Ee extends C{constructor(t){super(),R(this,t,xe,we,S,{rangeValue:0,handleRange:1})}}function Se(e){let t,n,s,r,l,i,c,f,o,y,d;return{c(){t=g("div"),n=g("p"),n.textContent="Monthly",s=v(),r=g("label"),l=g("input"),i=v(),c=g("span"),f=v(),o=g("p"),o.innerHTML='Yearly <span class="discount-message svelte-191u64i">25% discount</span><span class="short-discount-message svelte-191u64i">-25%</span>',a(l,"type","checkbox"),a(l,"name","toggle"),a(l,"class","svelte-191u64i"),a(c,"class","toggle-button-slider svelte-191u64i"),a(r,"class","toggle-button svelte-191u64i"),a(t,"class","toggle svelte-191u64i")},m(m,_){T(m,t,_),u(t,n),u(t,s),u(t,r),u(r,l),l.checked=e[0],u(r,i),u(r,c),u(t,f),u(t,o),y||(d=[K(l,"change",e[2]),K(l,"change",e[1])],y=!0)},p(m,[_]){_&1&&(l.checked=m[0])},i:h,o:h,d(m){m&&k(t),y=!1,O(d)}}}function ke(e,t,n){let s;X.subscribe(i=>{n(0,s=i)});const r=()=>{X.update(i=>!i)};function l(){s=this.checked,n(0,s)}return[s,r,l]}class Le extends C{constructor(t){super(),R(this,t,ke,Se,S,{})}}function Ve(e){let t;return{c(){t=g("div"),t.innerHTML=`<ul class="benefit-list svelte-5bvoh2"><li class="svelte-5bvoh2">Unlimited websites</li> 
    <li class="svelte-5bvoh2">100% data ownership</li> 
    <li class="svelte-5bvoh2">Email reports</li></ul> 
  <button class="svelte-5bvoh2">Start my trial</button>`,a(t,"class","bottom svelte-5bvoh2")},m(n,s){T(n,t,s)},p:h,i:h,o:h,d(n){n&&k(t)}}}class ze extends C{constructor(t){super(),R(this,t,null,Ve,S,{})}}function Ae(e){let t,n,s,r,l,i,c,f,o,y,d=(e[3]?e[4]:e[0])+"",m,_,b,w,te,H=e[3]?"year":"month",U,ne,x,se,L,re,V,E;return x=new Ee({props:{rangeValue:e[1],handleRange:e[5]}}),L=new Le({}),V=new ze({}),{c(){t=g("section"),n=g("div"),s=g("div"),r=g("p"),l=$(e[2]),i=$(" PAGEVIEWS"),c=v(),f=g("div"),o=g("p"),y=$("$"),m=$(d),_=$(".00"),b=v(),w=g("p"),te=$("/ "),U=$(H),ne=v(),B(x.$$.fragment),se=v(),B(L.$$.fragment),re=v(),B(V.$$.fragment),a(r,"class","views svelte-1you0fc"),a(o,"class","money svelte-1you0fc"),a(w,"class","duration svelte-1you0fc"),a(f,"class","price svelte-1you0fc"),a(s,"class","tariff-info svelte-1you0fc"),a(n,"class","top svelte-1you0fc"),a(t,"class","svelte-1you0fc")},m(p,z){T(p,t,z),u(t,n),u(n,s),u(s,r),u(r,l),u(r,i),u(s,c),u(s,f),u(f,o),u(o,y),u(o,m),u(o,_),u(f,b),u(f,w),u(w,te),u(w,U),u(n,ne),j(x,n,null),u(n,se),j(L,n,null),u(t,re),j(V,t,null),E=!0},p(p,[z]){(!E||z&4)&&W(l,p[2]),(!E||z&25)&&d!==(d=(p[3]?p[4]:p[0])+"")&&W(m,d),(!E||z&8)&&H!==(H=p[3]?"year":"month")&&W(U,H);const le={};z&2&&(le.rangeValue=p[1]),x.$set(le)},i(p){E||(N(x.$$.fragment,p),N(L.$$.fragment,p),N(V.$$.fragment,p),E=!0)},o(p){q(x.$$.fragment,p),q(L.$$.fragment,p),q(V.$$.fragment,p),E=!1},d(p){p&&k(t),M(x),M(L),M(V)}}}function Ne(e,t,n){let s,r,l=3,i=ae[l-1],{price:c,views:f}=i,o;X.subscribe(d=>{n(3,o=d)});const y=d=>{const m=d.target;n(1,l=d.target.value),i=ae[l-1],n(0,c=i.price),n(2,f=i.views);const _=m.min,b=m.max,w=m.value;m.style.backgroundSize=(w-_)*100/(b-_)+"% 100%"};return e.$$.update=()=>{e.$$.dirty&1&&n(6,s=c*12/100*25),e.$$.dirty&65&&n(4,r=c*12-s)},[c,l,f,o,r,y,s]}class je extends C{constructor(t){super(),R(this,t,Ne,Ae,S,{})}}function Me(e){let t;return{c(){t=g("section"),t.innerHTML=`<h1 class="svelte-tzjkzu">Simple, traffic-based pricing</h1> 
  <p class="svelte-tzjkzu">Sign up for our 30-day trial. No credit card required.</p>`,a(t,"class","svelte-tzjkzu")},m(n,s){T(n,t,s)},p:h,i:h,o:h,d(n){n&&k(t)}}}class Oe extends C{constructor(t){super(),R(this,t,null,Me,S,{})}}function Te(e){let t,n,s,r,l;return n=new Oe({}),r=new je({}),{c(){t=g("main"),B(n.$$.fragment),s=v(),B(r.$$.fragment),a(t,"class","svelte-o2xyxt")},m(i,c){T(i,t,c),j(n,t,null),u(t,s),j(r,t,null),l=!0},p:h,i(i){l||(N(n.$$.fragment,i),N(r.$$.fragment,i),l=!0)},o(i){q(n.$$.fragment,i),q(r.$$.fragment,i),l=!1},d(i){i&&k(t),M(n),M(r)}}}class Re extends C{constructor(t){super(),R(this,t,null,Te,S,{})}}new Re({target:document.getElementById("app")});
