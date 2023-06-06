var fe=Object.defineProperty;var ae=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>(ae(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function v(){}function oe(e){return e()}function Z(){return Object.create(null)}function O(e){e.forEach(oe)}function se(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function de(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function R(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function he(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function K(e){return document.createTextNode(e)}function k(){return K(" ")}function M(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function _e(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function F(e,t,n){e.classList[n?"add":"remove"](t)}let L;function I(e){L=e}function le(){if(!L)throw new Error("Function called outside component initialization");return L}function me(e){le().$$.on_mount.push(e)}function ge(e){le().$$.on_destroy.push(e)}const x=[],H=[];let A=[];const j=[],ye=Promise.resolve();let q=!1;function be(){q||(q=!0,ye.then(ie))}function z(e){A.push(e)}function $e(e){j.push(e)}const B=new Set;let w=0;function ie(){if(w!==0)return;const e=L;do{try{for(;w<x.length;){const t=x[w];w++,I(t),ve(t.$$)}}catch(t){throw x.length=0,w=0,t}for(I(null),x.length=0,w=0;H.length;)H.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];B.has(n)||(B.add(n),n())}A.length=0}while(x.length);for(;j.length;)j.pop()();q=!1,B.clear(),I(e)}function ve(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}function we(e){const t=[],n=[];A.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),A=t}const N=new Set;let ke;function Q(e,t){e&&e.i&&(N.delete(e),e.i(t))}function ee(e,t,n,o){if(e&&e.o){if(N.has(e))return;N.add(e),ke.c.push(()=>{N.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function xe(e,t,n){const o=e.$$.props[t];o!==void 0&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function te(e){e&&e.c()}function T(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||z(()=>{const i=e.$$.on_mount.map(oe).filter(se);e.$$.on_destroy?e.$$.on_destroy.push(...i):O(i),e.$$.on_mount=[]}),s.forEach(z)}function D(e,t){const n=e.$$;n.fragment!==null&&(we(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(x.push(e),be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,o,r,s,i,c=[-1]){const d=L;I(e);const l=e.$$={fragment:null,ctx:[],props:s,update:v,not_equal:r,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:Z(),dirty:c,skip_bound:!1,root:t.target||d.$$.root};i&&i(l.root);let h=!1;if(l.ctx=n?n(e,t.props||{},(p,g,...y)=>{const f=y.length?y[0]:g;return l.ctx&&r(l.ctx[p],l.ctx[p]=f)&&(!l.skip_bound&&l.bound[p]&&l.bound[p](f),h&&Ae(e,p)),g}):[],l.update(),h=!0,O(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const p=pe(t.target);l.fragment&&l.fragment.l(p),p.forEach(C)}else l.fragment&&l.fragment.c();t.intro&&Q(e.$$.fragment),T(e,t.target,t.anchor,t.customElement),ie()}I(d)}class U{$destroy(){D(this,1),this.$destroy=v}$on(t,n){if(!se(n))return v;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!de(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ee(e){let t,n=(e[0]??"😓")+"",o;return{c(){t=m("div"),o=K(n),_(t,"class","question svelte-17mcspy")},m(r,s){R(r,t,s),u(t,o)},p(r,[s]){s&1&&n!==(n=(r[0]??"😓")+"")&&ce(o,n)},i:v,o:v,d(r){r&&C(t)}}}function Pe(e,t,n){let{text:o}=t;return e.$$set=r=>{"text"in r&&n(0,o=r.text)},[o]}class Ie extends U{constructor(t){super(),J(this,t,Pe,Ee,G,{text:0})}}class Le{constructor(t){$(this,"pool",[]);$(this,"borderIdx",0);$(this,"resetPool",t=>{this.init(t)});$(this,"init",t=>{this.pool=t,this.borderIdx=t.length});$(this,"pick",()=>{this.borderIdx===0&&(this.borderIdx=this.pool.length);const t=Math.floor(Math.random()*this.borderIdx),n=this.pool[t];return console.log(n,this.pool,this.borderIdx),this.removeFromPool(t),n});$(this,"removeFromPool",t=>{const n=this.pool[t];this.pool[t]=this.pool[--this.borderIdx],this.pool[this.borderIdx]=n});this.init(t)}}const Oe={あ:["あ","い","う","え","お"],か:["か","き","く","け","こ"],さ:["さ","し","す","せ","そ"],た:["た","ち","つ","て","と"],な:["な","に","ぬ","ね","の"],は:["は","ひ","ふ","へ","ほ"],ま:["ま","み","む","め","も"],や:["や","ゆ","よ"],ら:["ら","り","る","れ","ろ"],わ:["わ","を"],ん:["ん"]};function ne(e,t,n){const o=e.slice();return o[2]=t[n],o[3]=t,o[4]=n,o}function re(e){let t,n,o=e[2].label+"",r,s,i,c;function d(){return e[1](e[2],e[3],e[4])}return{c(){t=m("li"),n=m("button"),r=K(o),s=k(),_(n,"class","svelte-tprafp"),F(n,"checked",e[2].checked),_(t,"class","svelte-tprafp")},m(l,h){R(l,t,h),u(t,n),u(n,r),u(t,s),i||(c=M(n,"click",d),i=!0)},p(l,h){e=l,h&1&&o!==(o=e[2].label+"")&&ce(r,o),h&1&&F(n,"checked",e[2].checked)},d(l){l&&C(t),i=!1,c()}}}function Ce(e){let t,n,o=e[0],r=[];for(let s=0;s<o.length;s+=1)r[s]=re(ne(e,o,s));return{c(){t=m("div"),n=m("ul");for(let s=0;s<r.length;s+=1)r[s].c();_(n,"class","svelte-tprafp"),_(t,"class","row-selector")},m(s,i){R(s,t,i),u(t,n);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(n,null)},p(s,[i]){if(i&1){o=s[0];let c;for(c=0;c<o.length;c+=1){const d=ne(s,o,c);r[c]?r[c].p(d,i):(r[c]=re(d),r[c].c(),r[c].m(n,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},i:v,o:v,d(s){s&&C(t),he(r,s)}}}function Me(e,t,n){let{rows:o}=t;const r=(s,i,c)=>n(0,i[c].checked=!s.checked,o);return e.$$set=s=>{"rows"in s&&n(0,o=s.rows)},[o,r]}class Ne extends U{constructor(t){super(),J(this,t,Me,Ce,G,{rows:0})}}function Fe(e){let t,n,o,r,s,i,c,d,l,h,p,g,y,f,b,E,S,V;s=new Ie({props:{text:e[1]}});function ue(a){e[6](a)}let W={};return e[0]!==void 0&&(W.rows=e[0]),l=new Ne({props:W}),H.push(()=>xe(l,"rows",ue)),{c(){t=m("main"),n=m("h1"),n.textContent="Hiragana Quiz",o=k(),r=m("div"),te(s.$$.fragment),i=k(),c=m("button"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c3.31 0 6.291 1.353 8.459 3.522l2.48-2.48 1.061 7.341-7.437-.966 2.489-2.489c-1.808-1.807-4.299-2.928-7.052-2.928-5.514 0-10 4.486-10 10s4.486 10 10 10c3.872 0 7.229-2.216 8.89-5.443l1.717 1.046c-2.012 3.803-6.005 6.397-10.607 6.397-6.627 0-12-5.373-12-12s5.373-12 12-12z"></path></svg>',d=k(),te(l.$$.fragment),p=k(),g=m("div"),y=m("button"),y.textContent="✅",f=k(),b=m("button"),b.textContent="❌",_(n,"class","svelte-ae8psy"),_(r,"class","card svelte-ae8psy"),_(c,"class","pick-btn svelte-ae8psy"),_(c,"id","card-refresh-btn"),F(c,"rotate",e[2]),_e(c,"transform","rotate(360deg)"),_(y,"class","check-btn svelte-ae8psy"),_(b,"class","uncheck-btn svelte-ae8psy"),_(g,"class","control-btn-wrapper svelte-ae8psy"),_(t,"class","svelte-ae8psy")},m(a,P){R(a,t,P),u(t,n),u(t,o),u(t,r),T(s,r,null),u(t,i),u(t,c),u(t,d),T(l,t,null),u(t,p),u(t,g),u(g,y),u(g,f),u(g,b),E=!0,S||(V=[M(c,"click",e[3]),M(y,"click",e[5]),M(b,"click",e[4])],S=!0)},p(a,[P]){const X={};P&2&&(X.text=a[1]),s.$set(X),(!E||P&4)&&F(c,"rotate",a[2]);const Y={};!h&&P&1&&(h=!0,Y.rows=a[0],$e(()=>h=!1)),l.$set(Y)},i(a){E||(Q(s.$$.fragment,a),Q(l.$$.fragment,a),E=!0)},o(a){ee(s.$$.fragment,a),ee(l.$$.fragment,a),E=!1},d(a){a&&C(t),D(s),D(l),S=!1,O(V)}}}function Re(e,t,n){const o=new Le([]);let r=[{label:"あ",checked:!0},{label:"か",checked:!0},{label:"さ",checked:!0},{label:"た",checked:!0},{label:"な",checked:!0},{label:"は",checked:!0},{label:"ま",checked:!0},{label:"や",checked:!0},{label:"ら",checked:!0},{label:"わ",checked:!0},{label:"ん",checked:!0}],s="",i,c=!1;me(()=>{i=document.getElementById("card-refresh-btn"),i==null||i.addEventListener("animationend",h),l()}),ge(()=>{i==null||i.removeEventListener("animationend",h)});const d=()=>{n(2,c=!0),l()},l=()=>{n(1,s=o.pick())},h=()=>{n(2,c=!1)},p=()=>{n(0,r=r.map(f=>({...f,checked:!1})))},g=()=>{n(0,r=r.map(f=>({...f,checked:!0})))};function y(f){r=f,n(0,r)}return e.$$.update=()=>{e.$$.dirty&1&&o.resetPool(r.filter(f=>f.checked).reduce((f,b)=>[...f,...Oe[b.label]],[]))},[r,s,c,d,p,g,y]}class Se extends U{constructor(t){super(),J(this,t,Re,Fe,G,{})}}new Se({target:document.getElementById("app")});