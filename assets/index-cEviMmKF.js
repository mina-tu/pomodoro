import{g as L,o as j,a as U,n as D,u as T,b as V,r as A,w as W,c as _,s as E,d as B,e as F,f as w,V as R,h as g,i as O,t as I,j as N}from"./index-BCEpftAg.js";import{u as q}from"./list-CBUmSFmD.js";import{u as z}from"./settings-JmIYgS08.js";import{V as P,a as H}from"./VRow-BtGJw3XP.js";function k(e){return L()?(j(e),!0):!1}function b(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const r=()=>t(o);return k(r),{off:r}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(r=>r(...o)))}}function x(e){return typeof e=="function"?e():T(e)}const $=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const J=Object.prototype.toString,K=e=>J.call(e)==="[object Object]",Q=()=>{};function X(e){return V()}function Y(e,t=!0,n){X()?U(e,n):t?e():D(e)}function Z(e){var t;const n=x(e);return(t=n==null?void 0:n.$el)!=null?t:n}const M=$?window:void 0;function ee(...e){let t,n,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,o]=e,t=M):[t,n,i,o]=e,!t)return Q;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],s=()=>{r.forEach(l=>l()),r.length=0},p=(l,u,c,f)=>(l.addEventListener(u,c,f),()=>l.removeEventListener(u,c,f)),m=W(()=>[Z(t),x(o)],([l,u])=>{if(s(),!l)return;const c=K(u)?{...u}:u;r.push(...n.flatMap(f=>i.map(h=>p(l,f,h,c))))},{immediate:!0,flush:"post"}),v=()=>{m(),s()};return k(v),v}function te(){const e=A(!1),t=V();return t&&U(()=>{e.value=!0},t),e}function ne(e){const t=te();return _(()=>(t.value,!!e()))}function oe(e={}){const{window:t=M,requestPermissions:n=!0}=e,i=e,o=ne(()=>{if(!t||!("Notification"in t))return!1;try{new Notification("")}catch{return!1}return!0}),r=A(o.value&&"permission"in Notification&&Notification.permission==="granted"),s=A(null),p=async()=>{if(o.value)return!r.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(r.value=!0),r.value},{on:m,trigger:v}=b(),{on:l,trigger:u}=b(),{on:c,trigger:f}=b(),{on:h,trigger:S}=b(),C=async a=>{if(!o.value||!r.value)return;const d=Object.assign({},i,a);return s.value=new Notification(d.title||"",d),s.value.onclick=v,s.value.onshow=u,s.value.onerror=f,s.value.onclose=S,s.value},y=()=>{s.value&&s.value.close(),s.value=null};if(n&&Y(p),k(y),o.value&&t){const a=t.document;ee(a,"visibilitychange",d=>{d.preventDefault(),a.visibilityState==="visible"&&y()})}return{isSupported:o,notification:s,ensurePermissions:p,permissionGranted:r,show:C,close:y,onClick:m,onShow:l,onError:c,onClose:h}}const re={style:{color:"#EDD7C3"}},se={style:{color:"#91A5AE"}},ce={__name:"index",setup(e){const t={STOP:0,COUNTING:1,PAUSE:2},n=A(t.STOP),i=q(),{currentItem:o,items:r,timeleft:s}=E(i),{setCurrentItem:p,countdown:m,setFinishItem:v}=i,l=z(),{selectedAlarmFile:u}=E(l);let c=0;const f=()=>{n.value===t.STOP&&r.value.length>0&&p(),n.value=t.COUNTING,c=setInterval(()=>{m(),s.value===0&&S()},1e3)},h=()=>{n.value=t.PAUSE,clearInterval(c)},S=()=>{clearInterval(c),n.value=t.STOP;const a=new Audio;a.src=u.value,a.play();const{show:d,isSupported:G}=oe({title:"事項完成",body:o.value,icon:new URL(""+new URL("tomato-tm_sgEMz.png",import.meta.url).href,import.meta.url).href});G.value&&d(),v(),r.value.length>0&&f()},C=_(()=>o.value.length>0?o.value:r.value.length>0?"點擊開始":"沒有事項"),y=_(()=>{const a=Math.floor(s.value/60).toString().padStart(2,"0"),d=(s.value%60).toString().padStart(2,"0");return a+":"+d});return(a,d)=>(B(),F(R,null,{default:w(()=>[g(H,{style:{"text-align":"center"}},{default:w(()=>[g(P,{cols:"12"},{default:w(()=>[O("h1",re,"目前事項 "+I(C.value),1),O("h2",se,"剩餘時間 "+I(y.value),1)]),_:1}),g(P,{cols:"12"},{default:w(()=>[g(N,{icon:"mdi-play",onClick:f,disabled:n.value===t.COUNTING||T(o).length===0&&T(r).length===0,style:{"background-color":"#91A5AE"}},null,8,["disabled"]),g(N,{icon:"mdi-pause",disabled:n.value!==t.COUNTING,onClick:h,style:{"background-color":"#91A5AE"}},null,8,["disabled"]),g(N,{icon:"mdi-skip-next",disabled:T(o).length===0,onClick:S,style:{"background-color":"#91A5AE"}},null,8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{ce as default};
