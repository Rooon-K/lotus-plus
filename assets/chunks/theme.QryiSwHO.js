import{d as x,o as t,c as z,r as u,n as B,a as m2,t as D,b as y,w as p,e as b,T as D1,_ as w,u as us,i as Hs,f as zs,g as j3,h as C,j as F,k as g2,l as h,m as f,p as Y,q as K,s as S2,v as N3,x as e2,y as R1,z as X3,A as z0,B as hs,C as ps,D as P2,F as G,E as Q,G as h0,H as E1,I as S,J as f2,K as p0,L as O1,M as X2,N as U2,O as Vs,P as y2,Q as ds,R as Ms,S as V0,U as I1,V as Cs,W as d0,X as U1,Y as Ls,Z as gs,$ as bs,a0 as M0,a1 as xs,a2 as Ns,a3 as ks,a4 as Ss,a5 as h1,a6 as ys}from"./framework.DG1gPCHJ.js";const ws=x({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(c){return(a,e)=>(t(),z("span",{class:B(["VPBadge",a.type])},[u(a.$slots,"default",{},()=>[m2(D(a.text),1)])],2))}}),As={key:0,class:"VPBackdrop"},_s=x({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(c){return(a,e)=>(t(),y(D1,{name:"fade"},{default:p(()=>[a.show?(t(),z("div",As)):b("",!0)]),_:1}))}}),Ps=w(_s,[["__scopeId","data-v-88f1f7d9"]]),T=us;function Ts(c,a){let e,r=!1;return()=>{e&&clearTimeout(e),r?e=setTimeout(c,a):(c(),(r=!0)&&setTimeout(()=>r=!1,a))}}function k3(c){return/^\//.test(c)?c:`/${c}`}function Y3(c){const{pathname:a,search:e,hash:r,protocol:s}=new URL(c,"http://a.com");if(Hs(c)||c.startsWith("#")||!s.startsWith("http")||!zs(a))return c;const{site:n}=T(),i=a.endsWith("/")||a.endsWith(".html")?c:c.replace(/(?:(^\.+)\/)?.*$/,`$1${a.replace(/(\.md)?$/,n.value.cleanUrls?"":".html")}${e}${r}`);return j3(i)}function n1({removeCurrent:c=!0,correspondingLink:a=!1}={}){const{site:e,localeIndex:r,page:s,theme:n,hash:i}=T(),o=C(()=>{var m,v;return{index:r.value,label:(m=e.value.locales[r.value])==null?void 0:m.label,link:((v=e.value.locales[r.value])==null?void 0:v.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:C(()=>Object.entries(e.value.locales).flatMap(([m,v])=>c&&o.value.label===v.label?[]:{index:m,text:v.label,link:Bs(v.link||(m==="root"?"/":`/${m}/`),n.value.i18nRouting!==!1&&a,s.value.relativePath.slice(o.value.link.length-1),!e.value.cleanUrls)+i.value})),currentLang:o}}function Bs(c,a,e,r){return a?c.replace(/\/$/,"")+k3(e.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):c}const Fs=c=>(Y("data-v-e35c0da9"),c=c(),K(),c),$s={class:"NotFound"},Ds={class:"code"},Rs={class:"title"},Es=Fs(()=>h("div",{class:"divider"},null,-1)),Os={class:"quote"},Is={class:"action"},Us=["href","aria-label"],qs=x({__name:"NotFound",setup(c){const{site:a}=T(),{localeLinks:e}=n1({removeCurrent:!1}),r=F({link:"/",index:"root"});g2(()=>{const n=window.location.pathname.replace(a.value.base,"").replace(/(^.*?\/).*$/,"/$1");e.value.length&&(r.value=e.value.find(({link:i})=>i.startsWith(n))||e.value[0])});const s=C(()=>{var n,i,o,l;return{code:404,title:"PAGE NOT FOUND",quote:"But if you don't change your direction, and if you keep looking, you may end up where you are heading.",linkLabel:"go to home",linkText:"Take me home",...r.value.index==="root"?(n=a.value.themeConfig)==null?void 0:n.notFound:(l=(o=(i=a.value.locales)==null?void 0:i[r.value.index])==null?void 0:o.themeConfig)==null?void 0:l.notFound}});return(n,i)=>(t(),z("div",$s,[h("p",Ds,D(s.value.code),1),h("h1",Rs,D(s.value.title),1),Es,h("blockquote",Os,D(s.value.quote),1),h("div",Is,[h("a",{class:"link",href:f(j3)(r.value.link),"aria-label":s.value.linkLabel},D(s.value.linkText),9,Us)])]))}}),Gs=w(qs,[["__scopeId","data-v-e35c0da9"]]);function C0(c,a){if(Array.isArray(c))return S1(c);if(c==null)return[];a=k3(a);const e=Object.keys(c).sort((s,n)=>n.split("/").length-s.split("/").length).find(s=>a.startsWith(k3(s))),r=e?c[e]:[];return Array.isArray(r)?S1(r):S1(r.items,r.base)}function Ws(c){const a=[];let e=0;for(const r in c){const s=c[r];if(s.items){e=a.push(s);continue}a[e]||a.push({items:[]}),a[e].items.push(s)}return a}function js(c){const a=[];function e(r){for(const s of r)s.text&&s.link&&a.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&e(s.items)}return e(c),a}function S3(c,a){return Array.isArray(a)?a.some(e=>S3(c,e)):S2(c,a.link)?!0:a.items?S3(c,a.items):!1}function S1(c,a){return[...c].map(e=>{const r={...e},s=r.base||a;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=S1(r.items,s)),r})}function h2(){const{frontmatter:c,page:a,theme:e}=T(),r=N3("(min-width: 960px)"),s=F(!1),n=C(()=>{const _=e.value.sidebar,k=a.value.relativePath;return _?C0(_,k):[]}),i=F(n.value);e2(n,(_,k)=>{JSON.stringify(_)!==JSON.stringify(k)&&(i.value=n.value)});const o=C(()=>c.value.sidebar!==!1&&i.value.length>0&&c.value.layout!=="home"),l=C(()=>m?c.value.aside==null?e.value.aside==="left":c.value.aside==="left":!1),m=C(()=>c.value.layout==="home"?!1:c.value.aside!=null?!!c.value.aside:e.value.aside!==!1),v=C(()=>o.value&&r.value),H=C(()=>o.value?Ws(i.value):[]);function V(){s.value=!0}function M(){s.value=!1}function A(){s.value?M():V()}return{isOpen:s,sidebar:i,sidebarGroups:H,hasSidebar:o,hasAside:m,leftAside:l,isSidebarEnabled:v,open:V,close:M,toggle:A}}function Xs(c,a){let e;R1(()=>{e=c.value?document.activeElement:void 0}),g2(()=>{window.addEventListener("keyup",r)}),X3(()=>{window.removeEventListener("keyup",r)});function r(s){s.key==="Escape"&&c.value&&(a(),e==null||e.focus())}}function Ys(c){const{page:a,hash:e}=T(),r=F(!1),s=C(()=>c.value.collapsed!=null),n=C(()=>!!c.value.link),i=F(!1),o=()=>{i.value=S2(a.value.relativePath,c.value.link)};e2([a,c,e],o),g2(o);const l=C(()=>i.value?!0:c.value.items?S3(a.value.relativePath,c.value.items):!1),m=C(()=>!!(c.value.items&&c.value.items.length));R1(()=>{r.value=!!(s.value&&c.value.collapsed)}),z0(()=>{(i.value||l.value)&&(r.value=!1)});function v(){s.value&&(r.value=!r.value)}return{collapsed:r,collapsible:s,isLink:n,isActiveLink:i,hasActiveLink:l,hasChildren:m,toggle:v}}function Ks(){const{hasSidebar:c}=h2(),a=N3("(min-width: 960px)"),e=N3("(min-width: 1280px)");return{isAsideEnabled:C(()=>!e.value&&!a.value?!1:c.value?e.value:a.value)}}const y3=[];function L0(c){return typeof c.outline=="object"&&!Array.isArray(c.outline)&&c.outline.label||c.outlineTitle||"On this page"}function K3(c){const a=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(e=>e.id&&e.hasChildNodes()).map(e=>{const r=Number(e.tagName[1]);return{element:e,title:Qs(e),link:"#"+e.id,level:r}});return Zs(a,c)}function Qs(c){let a="";for(const e of c.childNodes)if(e.nodeType===1){if(e.classList.contains("VPBadge")||e.classList.contains("header-anchor")||e.classList.contains("ignore-header"))continue;a+=e.textContent}else e.nodeType===3&&(a+=e.textContent);return a.trim()}function Zs(c,a){if(a===!1)return[];const e=(typeof a=="object"&&!Array.isArray(a)?a.level:a)||2,[r,s]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e;c=c.filter(i=>i.level>=r&&i.level<=s),y3.length=0;for(const{element:i,link:o}of c)y3.push({element:i,link:o});const n=[];c:for(let i=0;i<c.length;i++){const o=c[i];if(i===0)n.push(o);else{for(let l=i-1;l>=0;l--){const m=c[l];if(m.level<o.level){(m.children||(m.children=[])).push(o);continue c}}n.push(o)}}return n}function Js(c,a){const{isAsideEnabled:e}=Ks(),r=Ts(n,100);let s=null;g2(()=>{requestAnimationFrame(n),window.addEventListener("scroll",r)}),hs(()=>{i(location.hash)}),X3(()=>{window.removeEventListener("scroll",r)});function n(){if(!e.value)return;const o=window.scrollY,l=window.innerHeight,m=document.body.offsetHeight,v=Math.abs(o+l-m)<1,H=y3.map(({element:M,link:A})=>({link:A,top:cn(M)})).filter(({top:M})=>!Number.isNaN(M)).sort((M,A)=>M.top-A.top);if(!H.length){i(null);return}if(o<1){i(null);return}if(v){i(H[H.length-1].link);return}let V=null;for(const{link:M,top:A}of H){if(A>o+ps()+4)break;V=M}i(V)}function i(o){s&&s.classList.remove("active"),o==null?s=null:s=c.value.querySelector(`a[href="${decodeURIComponent(o)}"]`);const l=s;l?(l.classList.add("active"),a.value.style.top=l.offsetTop+39+"px",a.value.style.opacity="1"):(a.value.style.top="33px",a.value.style.opacity="0")}}function cn(c){let a=0;for(;c!==document.body;){if(c===null)return NaN;a+=c.offsetTop,c=c.offsetParent}return a}const an=["href","title"],en=x({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(c){function a({target:e}){const r=e.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(e,r)=>{const s=P2("VPDocOutlineItem",!0);return t(),z("ul",{class:B(["VPDocOutlineItem",e.root?"root":"nested"])},[(t(!0),z(G,null,Q(e.headers,({children:n,link:i,title:o})=>(t(),z("li",null,[h("a",{class:"outline-link",href:i,onClick:a,title:o},D(o),9,an),n!=null&&n.length?(t(),y(s,{key:0,headers:n},null,8,["headers"])):b("",!0)]))),256))],2)}}}),g0=w(en,[["__scopeId","data-v-a8dcec46"]]),rn={class:"content"},sn={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},nn=x({__name:"VPDocAsideOutline",setup(c){const{frontmatter:a,theme:e}=T(),r=h0([]);E1(()=>{r.value=K3(a.value.outline??e.value.outline)});const s=F(),n=F();return Js(s,n),(i,o)=>(t(),z("nav",{"aria-labelledby":"doc-outline-aria-label",class:B(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:s,role:"navigation"},[h("div",rn,[h("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),h("div",sn,D(f(L0)(f(e))),1),S(g0,{headers:r.value,root:!0},null,8,["headers"])])],2))}}),on=w(nn,[["__scopeId","data-v-ff202bb1"]]),ln={class:"VPDocAsideCarbonAds"},tn=x({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(c){const a=()=>null;return(e,r)=>(t(),z("div",ln,[S(f(a),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),fn=c=>(Y("data-v-957e46b9"),c=c(),K(),c),mn={class:"VPDocAside"},vn=fn(()=>h("div",{class:"spacer"},null,-1)),un=x({__name:"VPDocAside",setup(c){const{theme:a}=T();return(e,r)=>(t(),z("div",mn,[u(e.$slots,"aside-top",{},void 0,!0),u(e.$slots,"aside-outline-before",{},void 0,!0),S(on),u(e.$slots,"aside-outline-after",{},void 0,!0),vn,u(e.$slots,"aside-ads-before",{},void 0,!0),f(a).carbonAds?(t(),y(tn,{key:0,"carbon-ads":f(a).carbonAds},null,8,["carbon-ads"])):b("",!0),u(e.$slots,"aside-ads-after",{},void 0,!0),u(e.$slots,"aside-bottom",{},void 0,!0)]))}}),Hn=w(un,[["__scopeId","data-v-957e46b9"]]);function zn(){const{theme:c,page:a}=T();return C(()=>{const{text:e="Edit this page",pattern:r=""}=c.value.editLink||{};let s;return typeof r=="function"?s=r(a.value):s=r.replace(/:path/g,a.value.filePath),{url:s,text:e}})}function hn(){const{page:c,theme:a,frontmatter:e}=T();return C(()=>{var m,v,H,V,M,A,_,k;const r=C0(a.value.sidebar,c.value.relativePath),s=js(r),n=pn(s,d=>d.link.replace(/[?#].*$/,"")),i=n.findIndex(d=>S2(c.value.relativePath,d.link)),o=((m=a.value.docFooter)==null?void 0:m.prev)===!1&&!e.value.prev||e.value.prev===!1,l=((v=a.value.docFooter)==null?void 0:v.next)===!1&&!e.value.next||e.value.next===!1;return{prev:o?void 0:{text:(typeof e.value.prev=="string"?e.value.prev:typeof e.value.prev=="object"?e.value.prev.text:void 0)??((H=n[i-1])==null?void 0:H.docFooterText)??((V=n[i-1])==null?void 0:V.text),link:(typeof e.value.prev=="object"?e.value.prev.link:void 0)??((M=n[i-1])==null?void 0:M.link)},next:l?void 0:{text:(typeof e.value.next=="string"?e.value.next:typeof e.value.next=="object"?e.value.next.text:void 0)??((A=n[i+1])==null?void 0:A.docFooterText)??((_=n[i+1])==null?void 0:_.text),link:(typeof e.value.next=="object"?e.value.next.link:void 0)??((k=n[i+1])==null?void 0:k.link)}}})}function pn(c,a){const e=new Set;return c.filter(r=>{const s=a(r);return e.has(s)?!1:e.add(s)})}const n2=x({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(c){const a=c,e=C(()=>a.tag??(a.href?"a":"span")),r=C(()=>a.href&&p0.test(a.href));return(s,n)=>(t(),y(f2(e.value),{class:B(["VPLink",{link:s.href,"vp-external-link-icon":r.value,"no-icon":s.noIcon}]),href:s.href?f(Y3)(s.href):void 0,target:s.target??(r.value?"_blank":void 0),rel:s.rel??(r.value?"noreferrer":void 0)},{default:p(()=>[u(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Vn={class:"VPLastUpdated"},dn=["datetime"],Mn=x({__name:"VPDocFooterLastUpdated",setup(c){const{theme:a,page:e,frontmatter:r,lang:s}=T(),n=C(()=>new Date(r.value.lastUpdated??e.value.lastUpdated)),i=C(()=>n.value.toISOString()),o=F("");return g2(()=>{R1(()=>{var l,m,v;o.value=new Intl.DateTimeFormat((m=(l=a.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&m.forceLocale?s.value:void 0,((v=a.value.lastUpdated)==null?void 0:v.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(l,m)=>{var v;return t(),z("p",Vn,[m2(D(((v=f(a).lastUpdated)==null?void 0:v.text)||f(a).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:i.value},D(o.value),9,dn)])}}}),Cn=w(Mn,[["__scopeId","data-v-822cdd3f"]]),b0=c=>(Y("data-v-8063ce08"),c=c(),K(),c),Ln={key:0,class:"VPDocFooter"},gn={key:0,class:"edit-info"},bn={key:0,class:"edit-link"},xn=b0(()=>h("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Nn={key:1,class:"last-updated"},kn={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Sn=b0(()=>h("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),yn={class:"pager"},wn=["innerHTML"],An=["innerHTML"],_n={class:"pager"},Pn=["innerHTML"],Tn=["innerHTML"],Bn=x({__name:"VPDocFooter",setup(c){const{theme:a,page:e,frontmatter:r}=T(),s=zn(),n=hn(),i=C(()=>a.value.editLink&&r.value.editLink!==!1),o=C(()=>e.value.lastUpdated&&r.value.lastUpdated!==!1),l=C(()=>i.value||o.value||n.value.prev||n.value.next);return(m,v)=>{var H,V,M,A;return l.value?(t(),z("footer",Ln,[u(m.$slots,"doc-footer-before",{},void 0,!0),i.value||o.value?(t(),z("div",gn,[i.value?(t(),z("div",bn,[S(n2,{class:"edit-link-button",href:f(s).url,"no-icon":!0},{default:p(()=>[xn,m2(" "+D(f(s).text),1)]),_:1},8,["href"])])):b("",!0),o.value?(t(),z("div",Nn,[S(Cn)])):b("",!0)])):b("",!0),(H=f(n).prev)!=null&&H.link||(V=f(n).next)!=null&&V.link?(t(),z("nav",kn,[Sn,h("div",yn,[(M=f(n).prev)!=null&&M.link?(t(),y(n2,{key:0,class:"pager-link prev",href:f(n).prev.link},{default:p(()=>{var _;return[h("span",{class:"desc",innerHTML:((_=f(a).docFooter)==null?void 0:_.prev)||"Previous page"},null,8,wn),h("span",{class:"title",innerHTML:f(n).prev.text},null,8,An)]}),_:1},8,["href"])):b("",!0)]),h("div",_n,[(A=f(n).next)!=null&&A.link?(t(),y(n2,{key:0,class:"pager-link next",href:f(n).next.link},{default:p(()=>{var _;return[h("span",{class:"desc",innerHTML:((_=f(a).docFooter)==null?void 0:_.next)||"Next page"},null,8,Pn),h("span",{class:"title",innerHTML:f(n).next.text},null,8,Tn)]}),_:1},8,["href"])):b("",!0)])])):b("",!0)])):b("",!0)}}}),Fn=w(Bn,[["__scopeId","data-v-8063ce08"]]),$n=c=>(Y("data-v-c5c09dff"),c=c(),K(),c),Dn={class:"container"},Rn=$n(()=>h("div",{class:"aside-curtain"},null,-1)),En={class:"aside-container"},On={class:"aside-content"},In={class:"content"},Un={class:"content-container"},qn={class:"main"},Gn=x({__name:"VPDoc",setup(c){const{theme:a}=T(),e=O1(),{hasSidebar:r,hasAside:s,leftAside:n}=h2(),i=C(()=>e.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(o,l)=>{const m=P2("Content");return t(),z("div",{class:B(["VPDoc",{"has-sidebar":f(r),"has-aside":f(s)}])},[u(o.$slots,"doc-top",{},void 0,!0),h("div",Dn,[f(s)?(t(),z("div",{key:0,class:B(["aside",{"left-aside":f(n)}])},[Rn,h("div",En,[h("div",On,[S(Hn,null,{"aside-top":p(()=>[u(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[u(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[u(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[u(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[u(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[u(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):b("",!0),h("div",In,[h("div",Un,[u(o.$slots,"doc-before",{},void 0,!0),h("main",qn,[S(m,{class:B(["vp-doc",[i.value,f(a).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),S(Fn,null,{"doc-footer-before":p(()=>[u(o.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),u(o.$slots,"doc-after",{},void 0,!0)])])]),u(o.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Wn=w(Gn,[["__scopeId","data-v-c5c09dff"]]),jn=x({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(c){const a=c,e=C(()=>a.href&&p0.test(a.href)),r=C(()=>a.tag||a.href?"a":"button");return(s,n)=>(t(),y(f2(r.value),{class:B(["VPButton",[s.size,s.theme]]),href:s.href?f(Y3)(s.href):void 0,target:a.target??(e.value?"_blank":void 0),rel:a.rel??(e.value?"noreferrer":void 0)},{default:p(()=>[m2(D(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),Xn=w(jn,[["__scopeId","data-v-505878b4"]]),Yn=["src","alt"],Kn=x({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(c){return(a,e)=>{const r=P2("VPImage",!0);return a.image?(t(),z(G,{key:0},[typeof a.image=="string"||"src"in a.image?(t(),z("img",X2({key:0,class:"VPImage"},typeof a.image=="string"?a.$attrs:{...a.image,...a.$attrs},{src:f(j3)(typeof a.image=="string"?a.image:a.image.src),alt:a.alt??(typeof a.image=="string"?"":a.image.alt||"")}),null,16,Yn)):(t(),z(G,{key:1},[S(r,X2({class:"dark",image:a.image.dark,alt:a.image.alt},a.$attrs),null,16,["image","alt"]),S(r,X2({class:"light",image:a.image.light,alt:a.image.alt},a.$attrs),null,16,["image","alt"])],64))],64)):b("",!0)}}}),_1=w(Kn,[["__scopeId","data-v-9923e690"]]),Qn=c=>(Y("data-v-5043fc92"),c=c(),K(),c),Zn={class:"container"},Jn={class:"main"},ci={key:0,class:"name"},ai=["innerHTML"],ei=["innerHTML"],ri=["innerHTML"],si={key:0,class:"actions"},ni={key:0,class:"image"},ii={class:"image-container"},oi=Qn(()=>h("div",{class:"image-bg"},null,-1)),li=x({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(c){const a=U2("hero-image-slot-exists");return(e,r)=>(t(),z("div",{class:B(["VPHero",{"has-image":e.image||f(a)}])},[h("div",Zn,[h("div",Jn,[u(e.$slots,"home-hero-info-before",{},void 0,!0),u(e.$slots,"home-hero-info",{},()=>[e.name?(t(),z("h1",ci,[h("span",{innerHTML:e.name,class:"clip"},null,8,ai)])):b("",!0),e.text?(t(),z("p",{key:1,innerHTML:e.text,class:"text"},null,8,ei)):b("",!0),e.tagline?(t(),z("p",{key:2,innerHTML:e.tagline,class:"tagline"},null,8,ri)):b("",!0)],!0),u(e.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(t(),z("div",si,[(t(!0),z(G,null,Q(e.actions,s=>(t(),z("div",{key:s.link,class:"action"},[S(Xn,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):b("",!0),u(e.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||f(a)?(t(),z("div",ni,[h("div",ii,[oi,u(e.$slots,"home-hero-image",{},()=>[e.image?(t(),y(_1,{key:0,class:"image-src",image:e.image},null,8,["image"])):b("",!0)],!0)])])):b("",!0)])],2))}}),ti=w(li,[["__scopeId","data-v-5043fc92"]]),fi=x({__name:"VPHomeHero",setup(c){const{frontmatter:a}=T();return(e,r)=>f(a).hero?(t(),y(ti,{key:0,class:"VPHomeHero",name:f(a).hero.name,text:f(a).hero.text,tagline:f(a).hero.tagline,image:f(a).hero.image,actions:f(a).hero.actions},{"home-hero-info-before":p(()=>[u(e.$slots,"home-hero-info-before")]),"home-hero-info":p(()=>[u(e.$slots,"home-hero-info")]),"home-hero-info-after":p(()=>[u(e.$slots,"home-hero-info-after")]),"home-hero-actions-after":p(()=>[u(e.$slots,"home-hero-actions-after")]),"home-hero-image":p(()=>[u(e.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):b("",!0)}}),mi=c=>(Y("data-v-87870be3"),c=c(),K(),c),vi={class:"box"},ui={key:0,class:"icon"},Hi=["innerHTML"],zi=["innerHTML"],hi=["innerHTML"],pi={key:4,class:"link-text"},Vi={class:"link-text-value"},di=mi(()=>h("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),Mi=x({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(c){return(a,e)=>(t(),y(n2,{class:"VPFeature",href:a.link,rel:a.rel,target:a.target,"no-icon":!0,tag:a.link?"a":"div"},{default:p(()=>[h("article",vi,[typeof a.icon=="object"&&a.icon.wrap?(t(),z("div",ui,[S(_1,{image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])])):typeof a.icon=="object"?(t(),y(_1,{key:1,image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])):a.icon?(t(),z("div",{key:2,class:"icon",innerHTML:a.icon},null,8,Hi)):b("",!0),h("h2",{class:"title",innerHTML:a.title},null,8,zi),a.details?(t(),z("p",{key:3,class:"details",innerHTML:a.details},null,8,hi)):b("",!0),a.linkText?(t(),z("div",pi,[h("p",Vi,[m2(D(a.linkText)+" ",1),di])])):b("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ci=w(Mi,[["__scopeId","data-v-87870be3"]]),Li={key:0,class:"VPFeatures"},gi={class:"container"},bi={class:"items"},xi=x({__name:"VPFeatures",props:{features:{}},setup(c){const a=c,e=C(()=>{const r=a.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>r.features?(t(),z("div",Li,[h("div",gi,[h("div",bi,[(t(!0),z(G,null,Q(r.features,n=>(t(),z("div",{key:n.title,class:B(["item",[e.value]])},[S(Ci,{icon:n.icon,title:n.title,details:n.details,link:n.link,"link-text":n.linkText,rel:n.rel,target:n.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):b("",!0)}}),Ni=w(xi,[["__scopeId","data-v-23630cf4"]]),ki=x({__name:"VPHomeFeatures",setup(c){const{frontmatter:a}=T();return(e,r)=>f(a).features?(t(),y(Ni,{key:0,class:"VPHomeFeatures",features:f(a).features},null,8,["features"])):b("",!0)}}),Si=x({__name:"VPHomeContent",setup(c){const{width:a}=Vs({includeScrollbar:!1});return(e,r)=>(t(),z("div",{class:"vp-doc container",style:y2(f(a)?{"--vp-offset":`calc(50% - ${f(a)/2}px)`}:{})},[u(e.$slots,"default",{},void 0,!0)],4))}}),yi=w(Si,[["__scopeId","data-v-3e54e814"]]),wi={class:"VPHome"},Ai=x({__name:"VPHome",setup(c){const{frontmatter:a}=T();return(e,r)=>{const s=P2("Content");return t(),z("div",wi,[u(e.$slots,"home-hero-before",{},void 0,!0),S(fi,null,{"home-hero-info-before":p(()=>[u(e.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[u(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[u(e.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[u(e.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[u(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),u(e.$slots,"home-hero-after",{},void 0,!0),u(e.$slots,"home-features-before",{},void 0,!0),S(ki),u(e.$slots,"home-features-after",{},void 0,!0),f(a).markdownStyles!==!1?(t(),y(yi,{key:0},{default:p(()=>[S(s)]),_:1})):(t(),y(s,{key:1}))])}}}),_i=w(Ai,[["__scopeId","data-v-77b51d62"]]),Pi={},Ti={class:"VPPage"};function Bi(c,a){const e=P2("Content");return t(),z("div",Ti,[u(c.$slots,"page-top"),S(e),u(c.$slots,"page-bottom")])}const Fi=w(Pi,[["render",Bi]]),$i=x({__name:"VPContent",setup(c){const{page:a,frontmatter:e}=T(),{hasSidebar:r}=h2();return(s,n)=>(t(),z("div",{class:B(["VPContent",{"has-sidebar":f(r),"is-home":f(e).layout==="home"}]),id:"VPContent"},[f(a).isNotFound?u(s.$slots,"not-found",{key:0},()=>[S(Gs)],!0):f(e).layout==="page"?(t(),y(Fi,{key:1},{"page-top":p(()=>[u(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[u(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):f(e).layout==="home"?(t(),y(_i,{key:2},{"home-hero-before":p(()=>[u(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[u(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[u(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[u(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[u(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[u(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[u(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[u(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[u(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):f(e).layout&&f(e).layout!=="doc"?(t(),y(f2(f(e).layout),{key:3})):(t(),y(Wn,{key:4},{"doc-top":p(()=>[u(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[u(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":p(()=>[u(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[u(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[u(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":p(()=>[u(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":p(()=>[u(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[u(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[u(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[u(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":p(()=>[u(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Di=w($i,[["__scopeId","data-v-82a3e35e"]]),Ri={class:"container"},Ei=["innerHTML"],Oi=["innerHTML"],Ii=x({__name:"VPFooter",setup(c){const{theme:a,frontmatter:e}=T(),{hasSidebar:r}=h2();return(s,n)=>f(a).footer&&f(e).footer!==!1?(t(),z("footer",{key:0,class:B(["VPFooter",{"has-sidebar":f(r)}])},[h("div",Ri,[f(a).footer.message?(t(),z("p",{key:0,class:"message",innerHTML:f(a).footer.message},null,8,Ei)):b("",!0),f(a).footer.copyright?(t(),z("p",{key:1,class:"copyright",innerHTML:f(a).footer.copyright},null,8,Oi)):b("",!0)])],2)):b("",!0)}}),Ui=w(Ii,[["__scopeId","data-v-34fb8fbc"]]);function qi(){const{theme:c,frontmatter:a}=T(),e=h0([]),r=C(()=>e.value.length>0);return E1(()=>{e.value=K3(a.value.outline??c.value.outline)}),{headers:e,hasLocalNav:r}}const Gi=c=>(Y("data-v-99d634cd"),c=c(),K(),c),Wi={class:"menu-text"},ji=Gi(()=>h("span",{class:"vpi-chevron-right icon"},null,-1)),Xi={class:"header"},Yi={class:"outline"},Ki=x({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(c){const a=c,{theme:e}=T(),r=F(!1),s=F(0),n=F(),i=F();function o(H){var V;(V=n.value)!=null&&V.contains(H.target)||(r.value=!1)}e2(r,H=>{if(H){document.addEventListener("click",o);return}document.removeEventListener("click",o)}),ds("Escape",()=>{r.value=!1}),E1(()=>{r.value=!1});function l(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-a.navHeight,0)}function m(H){H.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),Ms(()=>{r.value=!1}))}function v(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(H,V)=>(t(),z("div",{class:"VPLocalNavOutlineDropdown",style:y2({"--vp-vh":s.value+"px"}),ref_key:"main",ref:n},[H.headers.length>0?(t(),z("button",{key:0,onClick:l,class:B({open:r.value})},[h("span",Wi,D(f(L0)(f(e))),1),ji],2)):(t(),z("button",{key:1,onClick:v},D(f(e).returnToTopLabel||"Return to top"),1)),S(D1,{name:"flyout"},{default:p(()=>[r.value?(t(),z("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:m},[h("div",Xi,[h("a",{class:"top-link",href:"#",onClick:v},D(f(e).returnToTopLabel||"Return to top"),1)]),h("div",Yi,[S(g0,{headers:H.headers},null,8,["headers"])])],512)):b("",!0)]),_:1})],4))}}),Qi=w(Ki,[["__scopeId","data-v-99d634cd"]]),Zi=c=>(Y("data-v-c633be9d"),c=c(),K(),c),Ji={class:"container"},co=["aria-expanded"],ao=Zi(()=>h("span",{class:"vpi-align-left menu-icon"},null,-1)),eo={class:"menu-text"},ro=x({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(c){const{theme:a,frontmatter:e}=T(),{hasSidebar:r}=h2(),{headers:s}=qi(),{y:n}=V0(),i=F(0);g2(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),E1(()=>{s.value=K3(e.value.outline??a.value.outline)});const o=C(()=>s.value.length===0),l=C(()=>o.value&&!r.value),m=C(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:o.value,fixed:l.value}));return(v,H)=>f(e).layout!=="home"&&(!l.value||f(n)>=i.value)?(t(),z("div",{key:0,class:B(m.value)},[h("div",Ji,[f(r)?(t(),z("button",{key:0,class:"menu","aria-expanded":v.open,"aria-controls":"VPSidebarNav",onClick:H[0]||(H[0]=V=>v.$emit("open-menu"))},[ao,h("span",eo,D(f(a).sidebarMenuLabel||"Menu"),1)],8,co)):b("",!0),S(Qi,{headers:f(s),navHeight:i.value},null,8,["headers","navHeight"])])],2)):b("",!0)}}),so=w(ro,[["__scopeId","data-v-c633be9d"]]);function no(){const c=F(!1);function a(){c.value=!0,window.addEventListener("resize",s)}function e(){c.value=!1,window.removeEventListener("resize",s)}function r(){c.value?e():a()}function s(){window.outerWidth>=768&&e()}const n=O1();return e2(()=>n.path,e),{isScreenOpen:c,openScreen:a,closeScreen:e,toggleScreen:r}}const io={},oo={class:"VPSwitch",type:"button",role:"switch"},lo={class:"check"},to={key:0,class:"icon"};function fo(c,a){return t(),z("button",oo,[h("span",lo,[c.$slots.default?(t(),z("span",to,[u(c.$slots,"default",{},void 0,!0)])):b("",!0)])])}const mo=w(io,[["render",fo],["__scopeId","data-v-c3af7f3f"]]),x0=c=>(Y("data-v-6ff9616d"),c=c(),K(),c),vo=x0(()=>h("span",{class:"vpi-sun sun"},null,-1)),uo=x0(()=>h("span",{class:"vpi-moon moon"},null,-1)),Ho=x({__name:"VPSwitchAppearance",setup(c){const{isDark:a,theme:e}=T(),r=U2("toggle-appearance",()=>{a.value=!a.value}),s=C(()=>a.value?e.value.lightModeSwitchTitle||"Switch to light theme":e.value.darkModeSwitchTitle||"Switch to dark theme");return(n,i)=>(t(),y(mo,{title:s.value,class:"VPSwitchAppearance","aria-checked":f(a),onClick:f(r)},{default:p(()=>[vo,uo]),_:1},8,["title","aria-checked","onClick"]))}}),Q3=w(Ho,[["__scopeId","data-v-6ff9616d"]]),zo={key:0,class:"VPNavBarAppearance"},ho=x({__name:"VPNavBarAppearance",setup(c){const{site:a}=T();return(e,r)=>f(a).appearance&&f(a).appearance!=="force-dark"?(t(),z("div",zo,[S(Q3)])):b("",!0)}}),po=w(ho,[["__scopeId","data-v-835262bf"]]),Z3=F();let N0=!1,h3=0;function Vo(c){const a=F(!1);if(I1){!N0&&Mo(),h3++;const e=e2(Z3,r=>{var s,n,i;r===c.el.value||(s=c.el.value)!=null&&s.contains(r)?(a.value=!0,(n=c.onFocus)==null||n.call(c)):(a.value=!1,(i=c.onBlur)==null||i.call(c))});X3(()=>{e(),h3--,h3||Co()})}return Cs(a)}function Mo(){document.addEventListener("focusin",k0),N0=!0,Z3.value=document.activeElement}function Co(){document.removeEventListener("focusin",k0)}function k0(){Z3.value=document.activeElement}const Lo={class:"VPMenuLink"},go=x({__name:"VPMenuLink",props:{item:{}},setup(c){const{page:a}=T();return(e,r)=>(t(),z("div",Lo,[S(n2,{class:B({active:f(S2)(f(a).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel},{default:p(()=>[m2(D(e.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),q1=w(go,[["__scopeId","data-v-c026e4da"]]),bo={class:"VPMenuGroup"},xo={key:0,class:"title"},No=x({__name:"VPMenuGroup",props:{text:{},items:{}},setup(c){return(a,e)=>(t(),z("div",bo,[a.text?(t(),z("p",xo,D(a.text),1)):b("",!0),(t(!0),z(G,null,Q(a.items,r=>(t(),z(G,null,["link"in r?(t(),y(q1,{key:0,item:r},null,8,["item"])):b("",!0)],64))),256))]))}}),ko=w(No,[["__scopeId","data-v-26705d3c"]]),So={class:"VPMenu"},yo={key:0,class:"items"},wo=x({__name:"VPMenu",props:{items:{}},setup(c){return(a,e)=>(t(),z("div",So,[a.items?(t(),z("div",yo,[(t(!0),z(G,null,Q(a.items,r=>(t(),z(G,{key:r.text},["link"in r?(t(),y(q1,{key:0,item:r},null,8,["item"])):(t(),y(ko,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):b("",!0),u(a.$slots,"default",{},void 0,!0)]))}}),Ao=w(wo,[["__scopeId","data-v-c4a71aa4"]]),_o=c=>(Y("data-v-3759802c"),c=c(),K(),c),Po=["aria-expanded","aria-label"],To={key:0,class:"text"},Bo=["innerHTML"],Fo=_o(()=>h("span",{class:"vpi-chevron-down text-icon"},null,-1)),$o={key:1,class:"vpi-more-horizontal icon"},Do={class:"menu"},Ro=x({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(c){const a=F(!1),e=F();Vo({el:e,onBlur:r});function r(){a.value=!1}return(s,n)=>(t(),z("div",{class:"VPFlyout",ref_key:"el",ref:e,onMouseenter:n[1]||(n[1]=i=>a.value=!0),onMouseleave:n[2]||(n[2]=i=>a.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":a.value,"aria-label":s.label,onClick:n[0]||(n[0]=i=>a.value=!a.value)},[s.button||s.icon?(t(),z("span",To,[s.icon?(t(),z("span",{key:0,class:B([s.icon,"option-icon"])},null,2)):b("",!0),s.button?(t(),z("span",{key:1,innerHTML:s.button},null,8,Bo)):b("",!0),Fo])):(t(),z("span",$o))],8,Po),h("div",Do,[S(Ao,{items:s.items},{default:p(()=>[u(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),J3=w(Ro,[["__scopeId","data-v-3759802c"]]),Eo=["href","aria-label","innerHTML"],Oo=x({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(c){const a=c,e=C(()=>typeof a.icon=="object"?a.icon.svg:`<span class="vpi-social-${a.icon}" />`);return(r,s)=>(t(),z("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:e.value},null,8,Eo))}}),Io=w(Oo,[["__scopeId","data-v-6025b3e6"]]),Uo={class:"VPSocialLinks"},qo=x({__name:"VPSocialLinks",props:{links:{}},setup(c){return(a,e)=>(t(),z("div",Uo,[(t(!0),z(G,null,Q(a.links,({link:r,icon:s,ariaLabel:n})=>(t(),y(Io,{key:r,icon:s,link:r,ariaLabel:n},null,8,["icon","link","ariaLabel"]))),128))]))}}),c4=w(qo,[["__scopeId","data-v-61af2f2e"]]),Go={key:0,class:"group translations"},Wo={class:"trans-title"},jo={key:1,class:"group"},Xo={class:"item appearance"},Yo={class:"label"},Ko={class:"appearance-action"},Qo={key:2,class:"group"},Zo={class:"item social-links"},Jo=x({__name:"VPNavBarExtra",setup(c){const{site:a,theme:e}=T(),{localeLinks:r,currentLang:s}=n1({correspondingLink:!0}),n=C(()=>r.value.length&&s.value.label||a.value.appearance||e.value.socialLinks);return(i,o)=>n.value?(t(),y(J3,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:p(()=>[f(r).length&&f(s).label?(t(),z("div",Go,[h("p",Wo,D(f(s).label),1),(t(!0),z(G,null,Q(f(r),l=>(t(),y(q1,{key:l.link,item:l},null,8,["item"]))),128))])):b("",!0),f(a).appearance&&f(a).appearance!=="force-dark"?(t(),z("div",jo,[h("div",Xo,[h("p",Yo,D(f(e).darkModeSwitchLabel||"Appearance"),1),h("div",Ko,[S(Q3)])])])):b("",!0),f(e).socialLinks?(t(),z("div",Qo,[h("div",Zo,[S(c4,{class:"social-links-list",links:f(e).socialLinks},null,8,["links"])])])):b("",!0)]),_:1})):b("",!0)}}),cl=w(Jo,[["__scopeId","data-v-018514cf"]]),al=c=>(Y("data-v-98f0cda9"),c=c(),K(),c),el=["aria-expanded"],rl=al(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),sl=[rl],nl=x({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(c){return(a,e)=>(t(),z("button",{type:"button",class:B(["VPNavBarHamburger",{active:a.active}]),"aria-label":"mobile navigation","aria-expanded":a.active,"aria-controls":"VPNavScreen",onClick:e[0]||(e[0]=r=>a.$emit("click"))},sl,10,el))}}),il=w(nl,[["__scopeId","data-v-98f0cda9"]]),ol=["innerHTML"],ll=x({__name:"VPNavBarMenuLink",props:{item:{}},setup(c){const{page:a}=T();return(e,r)=>(t(),y(n2,{class:B({VPNavBarMenuLink:!0,active:f(S2)(f(a).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,noIcon:e.item.noIcon,target:e.item.target,rel:e.item.rel,tabindex:"0"},{default:p(()=>[h("span",{innerHTML:e.item.text},null,8,ol)]),_:1},8,["class","href","noIcon","target","rel"]))}}),tl=w(ll,[["__scopeId","data-v-c1a0e248"]]),fl=x({__name:"VPNavBarMenuGroup",props:{item:{}},setup(c){const a=c,{page:e}=T(),r=n=>"link"in n?S2(e.value.relativePath,n.link,!!a.item.activeMatch):n.items.some(r),s=C(()=>r(a.item));return(n,i)=>(t(),y(J3,{class:B({VPNavBarMenuGroup:!0,active:f(S2)(f(e).relativePath,n.item.activeMatch,!!n.item.activeMatch)||s.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),ml=c=>(Y("data-v-0c2e94ce"),c=c(),K(),c),vl={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ul=ml(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Hl=x({__name:"VPNavBarMenu",setup(c){const{theme:a}=T();return(e,r)=>f(a).nav?(t(),z("nav",vl,[ul,(t(!0),z(G,null,Q(f(a).nav,s=>(t(),z(G,{key:s.text},["link"in s?(t(),y(tl,{key:0,item:s},null,8,["item"])):(t(),y(fl,{key:1,item:s},null,8,["item"]))],64))),128))])):b("",!0)}}),zl=w(Hl,[["__scopeId","data-v-0c2e94ce"]]);function hl(c){const{localeIndex:a,theme:e}=T();function r(s){var A,_,k;const n=s.split("."),i=(A=e.value.search)==null?void 0:A.options,o=i&&typeof i=="object",l=o&&((k=(_=i.locales)==null?void 0:_[a.value])==null?void 0:k.translations)||null,m=o&&i.translations||null;let v=l,H=m,V=c;const M=n.pop();for(const d of n){let L=null;const P=V==null?void 0:V[d];P&&(L=V=P);const E=H==null?void 0:H[d];E&&(L=H=E);const R=v==null?void 0:v[d];R&&(L=v=R),P||(V=L),E||(H=L),R||(v=L)}return(v==null?void 0:v[M])??(H==null?void 0:H[M])??(V==null?void 0:V[M])??""}return r}const pl=["aria-label"],Vl={class:"DocSearch-Button-Container"},dl=h("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),Ml={class:"DocSearch-Button-Placeholder"},Cl=h("span",{class:"DocSearch-Button-Keys"},[h("kbd",{class:"DocSearch-Button-Key"}),h("kbd",{class:"DocSearch-Button-Key"},"K")],-1),z6=x({__name:"VPNavBarSearchButton",setup(c){const e=hl({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(t(),z("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":f(e)("button.buttonAriaLabel")},[h("span",Vl,[dl,h("span",Ml,D(f(e)("button.buttonText")),1)]),Cl],8,pl))}}),Ll={class:"VPNavBarSearch"},gl={id:"local-search"},bl={key:1,id:"docsearch"},xl=x({__name:"VPNavBarSearch",setup(c){const a=()=>null,e=()=>null,{theme:r}=T(),s=F(!1),n=F(!1);g2(()=>{});function i(){s.value||(s.value=!0,setTimeout(o,16))}function o(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||o()},16)}const l=F(!1),m="";return(v,H)=>{var V;return t(),z("div",Ll,[f(m)==="local"?(t(),z(G,{key:0},[l.value?(t(),y(f(a),{key:0,onClose:H[0]||(H[0]=M=>l.value=!1)})):b("",!0),h("div",gl,[S(z6,{onClick:H[1]||(H[1]=M=>l.value=!0)})])],64)):f(m)==="algolia"?(t(),z(G,{key:1},[s.value?(t(),y(f(e),{key:0,algolia:((V=f(r).search)==null?void 0:V.options)??f(r).algolia,onVnodeBeforeMount:H[2]||(H[2]=M=>n.value=!0)},null,8,["algolia"])):b("",!0),n.value?b("",!0):(t(),z("div",bl,[S(z6,{onClick:i})]))],64)):b("",!0)])}}}),Nl=x({__name:"VPNavBarSocialLinks",setup(c){const{theme:a}=T();return(e,r)=>f(a).socialLinks?(t(),y(c4,{key:0,class:"VPNavBarSocialLinks",links:f(a).socialLinks},null,8,["links"])):b("",!0)}}),kl=w(Nl,[["__scopeId","data-v-d43c1f90"]]),Sl=["href","rel","target"],yl={key:1},wl={key:2},Al=x({__name:"VPNavBarTitle",setup(c){const{site:a,theme:e}=T(),{hasSidebar:r}=h2(),{currentLang:s}=n1(),n=C(()=>{var l;return typeof e.value.logoLink=="string"?e.value.logoLink:(l=e.value.logoLink)==null?void 0:l.link}),i=C(()=>{var l;return typeof e.value.logoLink=="string"||(l=e.value.logoLink)==null?void 0:l.rel}),o=C(()=>{var l;return typeof e.value.logoLink=="string"||(l=e.value.logoLink)==null?void 0:l.target});return(l,m)=>(t(),z("div",{class:B(["VPNavBarTitle",{"has-sidebar":f(r)}])},[h("a",{class:"title",href:n.value??f(Y3)(f(s).link),rel:i.value,target:o.value},[u(l.$slots,"nav-bar-title-before",{},void 0,!0),f(e).logo?(t(),y(_1,{key:0,class:"logo",image:f(e).logo},null,8,["image"])):b("",!0),f(e).siteTitle?(t(),z("span",yl,D(f(e).siteTitle),1)):f(e).siteTitle===void 0?(t(),z("span",wl,D(f(a).title),1)):b("",!0),u(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Sl)],2))}}),_l=w(Al,[["__scopeId","data-v-c708900a"]]),Pl={class:"items"},Tl={class:"title"},Bl=x({__name:"VPNavBarTranslations",setup(c){const{theme:a}=T(),{localeLinks:e,currentLang:r}=n1({correspondingLink:!0});return(s,n)=>f(e).length&&f(r).label?(t(),y(J3,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:f(a).langMenuLabel||"Change language"},{default:p(()=>[h("div",Pl,[h("p",Tl,D(f(r).label),1),(t(!0),z(G,null,Q(f(e),i=>(t(),y(q1,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):b("",!0)}}),Fl=w(Bl,[["__scopeId","data-v-e9a95bb0"]]),$l=c=>(Y("data-v-8cb47744"),c=c(),K(),c),Dl={class:"wrapper"},Rl={class:"container"},El={class:"title"},Ol={class:"content"},Il={class:"content-body"},Ul=$l(()=>h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1)),ql=x({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(c){const{y:a}=V0(),{hasSidebar:e}=h2(),{frontmatter:r}=T(),s=F({});return z0(()=>{s.value={"has-sidebar":e.value,home:r.value.layout==="home",top:a.value===0}}),(n,i)=>(t(),z("div",{class:B(["VPNavBar",s.value])},[h("div",Dl,[h("div",Rl,[h("div",El,[S(_l,null,{"nav-bar-title-before":p(()=>[u(n.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[u(n.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",Ol,[h("div",Il,[u(n.$slots,"nav-bar-content-before",{},void 0,!0),S(xl,{class:"search"}),S(zl,{class:"menu"}),S(Fl,{class:"translations"}),S(po,{class:"appearance"}),S(kl,{class:"social-links"}),S(cl,{class:"extra"}),u(n.$slots,"nav-bar-content-after",{},void 0,!0),S(il,{class:"hamburger",active:n.isScreenOpen,onClick:i[0]||(i[0]=o=>n.$emit("toggle-screen"))},null,8,["active"])])])])]),Ul],2))}}),Gl=w(ql,[["__scopeId","data-v-8cb47744"]]),Wl={key:0,class:"VPNavScreenAppearance"},jl={class:"text"},Xl=x({__name:"VPNavScreenAppearance",setup(c){const{site:a,theme:e}=T();return(r,s)=>f(a).appearance&&f(a).appearance!=="force-dark"?(t(),z("div",Wl,[h("p",jl,D(f(e).darkModeSwitchLabel||"Appearance"),1),S(Q3)])):b("",!0)}}),Yl=w(Xl,[["__scopeId","data-v-7c90b554"]]),Kl=x({__name:"VPNavScreenMenuLink",props:{item:{}},setup(c){const a=U2("close-screen");return(e,r)=>(t(),y(n2,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,onClick:f(a),innerHTML:e.item.text},null,8,["href","target","rel","onClick","innerHTML"]))}}),Ql=w(Kl,[["__scopeId","data-v-8a9a818e"]]),Zl=x({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(c){const a=U2("close-screen");return(e,r)=>(t(),y(n2,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,onClick:f(a)},{default:p(()=>[m2(D(e.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),S0=w(Zl,[["__scopeId","data-v-ed9ff1db"]]),Jl={class:"VPNavScreenMenuGroupSection"},ct={key:0,class:"title"},at=x({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(c){return(a,e)=>(t(),z("div",Jl,[a.text?(t(),z("p",ct,D(a.text),1)):b("",!0),(t(!0),z(G,null,Q(a.items,r=>(t(),y(S0,{key:r.text,item:r},null,8,["item"]))),128))]))}}),et=w(at,[["__scopeId","data-v-f926bd98"]]),rt=c=>(Y("data-v-e6803be1"),c=c(),K(),c),st=["aria-controls","aria-expanded"],nt=["innerHTML"],it=rt(()=>h("span",{class:"vpi-plus button-icon"},null,-1)),ot=["id"],lt={key:1,class:"group"},tt=x({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(c){const a=c,e=F(!1),r=C(()=>`NavScreenGroup-${a.text.replace(" ","-").toLowerCase()}`);function s(){e.value=!e.value}return(n,i)=>(t(),z("div",{class:B(["VPNavScreenMenuGroup",{open:e.value}])},[h("button",{class:"button","aria-controls":r.value,"aria-expanded":e.value,onClick:s},[h("span",{class:"button-text",innerHTML:n.text},null,8,nt),it],8,st),h("div",{id:r.value,class:"items"},[(t(!0),z(G,null,Q(n.items,o=>(t(),z(G,{key:o.text},["link"in o?(t(),z("div",{key:o.text,class:"item"},[S(S0,{item:o},null,8,["item"])])):(t(),z("div",lt,[S(et,{text:o.text,items:o.items},null,8,["text","items"])]))],64))),128))],8,ot)],2))}}),ft=w(tt,[["__scopeId","data-v-e6803be1"]]),mt={key:0,class:"VPNavScreenMenu"},vt=x({__name:"VPNavScreenMenu",setup(c){const{theme:a}=T();return(e,r)=>f(a).nav?(t(),z("nav",mt,[(t(!0),z(G,null,Q(f(a).nav,s=>(t(),z(G,{key:s.text},["link"in s?(t(),y(Ql,{key:0,item:s},null,8,["item"])):(t(),y(ft,{key:1,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):b("",!0)}}),ut=x({__name:"VPNavScreenSocialLinks",setup(c){const{theme:a}=T();return(e,r)=>f(a).socialLinks?(t(),y(c4,{key:0,class:"VPNavScreenSocialLinks",links:f(a).socialLinks},null,8,["links"])):b("",!0)}}),y0=c=>(Y("data-v-622f13d2"),c=c(),K(),c),Ht=y0(()=>h("span",{class:"vpi-languages icon lang"},null,-1)),zt=y0(()=>h("span",{class:"vpi-chevron-down icon chevron"},null,-1)),ht={class:"list"},pt=x({__name:"VPNavScreenTranslations",setup(c){const{localeLinks:a,currentLang:e}=n1({correspondingLink:!0}),r=F(!1);function s(){r.value=!r.value}return(n,i)=>f(a).length&&f(e).label?(t(),z("div",{key:0,class:B(["VPNavScreenTranslations",{open:r.value}])},[h("button",{class:"title",onClick:s},[Ht,m2(" "+D(f(e).label)+" ",1),zt]),h("ul",ht,[(t(!0),z(G,null,Q(f(a),o=>(t(),z("li",{key:o.link,class:"item"},[S(n2,{class:"link",href:o.link},{default:p(()=>[m2(D(o.text),1)]),_:2},1032,["href"])]))),128))])],2)):b("",!0)}}),Vt=w(pt,[["__scopeId","data-v-622f13d2"]]),dt={class:"container"},Mt=x({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(c){const a=F(null),e=d0(I1?document.body:null);return(r,s)=>(t(),y(D1,{name:"fade",onEnter:s[0]||(s[0]=n=>e.value=!0),onAfterLeave:s[1]||(s[1]=n=>e.value=!1)},{default:p(()=>[r.open?(t(),z("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:a,id:"VPNavScreen"},[h("div",dt,[u(r.$slots,"nav-screen-content-before",{},void 0,!0),S(vt,{class:"menu"}),S(Vt,{class:"translations"}),S(Yl,{class:"appearance"}),S(ut,{class:"social-links"}),u(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):b("",!0)]),_:3}))}}),Ct=w(Mt,[["__scopeId","data-v-dc0f35e3"]]),Lt={key:0,class:"VPNav"},gt=x({__name:"VPNav",setup(c){const{isScreenOpen:a,closeScreen:e,toggleScreen:r}=no(),{frontmatter:s}=T(),n=C(()=>s.value.navbar!==!1);return U1("close-screen",e),R1(()=>{I1&&document.documentElement.classList.toggle("hide-nav",!n.value)}),(i,o)=>n.value?(t(),z("header",Lt,[S(Gl,{"is-screen-open":f(a),onToggleScreen:f(r)},{"nav-bar-title-before":p(()=>[u(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[u(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[u(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[u(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),S(Ct,{open:f(a)},{"nav-screen-content-before":p(()=>[u(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[u(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):b("",!0)}}),bt=w(gt,[["__scopeId","data-v-779f6232"]]),w0=c=>(Y("data-v-2a2ec26a"),c=c(),K(),c),xt=["role","tabindex"],Nt=w0(()=>h("div",{class:"indicator"},null,-1)),kt=w0(()=>h("span",{class:"vpi-chevron-right caret-icon"},null,-1)),St=[kt],yt={key:1,class:"items"},wt=x({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(c){const a=c,{collapsed:e,collapsible:r,isLink:s,isActiveLink:n,hasActiveLink:i,hasChildren:o,toggle:l}=Ys(C(()=>a.item)),m=C(()=>o.value?"section":"div"),v=C(()=>s.value?"a":"div"),H=C(()=>o.value?a.depth+2===7?"p":`h${a.depth+2}`:"p"),V=C(()=>s.value?void 0:"button"),M=C(()=>[[`level-${a.depth}`],{collapsible:r.value},{collapsed:e.value},{"is-link":s.value},{"is-active":n.value},{"has-active":i.value}]);function A(k){"key"in k&&k.key!=="Enter"||!a.item.link&&l()}function _(){a.item.link&&l()}return(k,d)=>{const L=P2("VPSidebarItem",!0);return t(),y(f2(m.value),{class:B(["VPSidebarItem",M.value])},{default:p(()=>[k.item.text?(t(),z("div",X2({key:0,class:"item",role:V.value},Ls(k.item.items?{click:A,keydown:A}:{},!0),{tabindex:k.item.items&&0}),[Nt,k.item.link?(t(),y(n2,{key:0,tag:v.value,class:"link",href:k.item.link,rel:k.item.rel,target:k.item.target},{default:p(()=>[(t(),y(f2(H.value),{class:"text",innerHTML:k.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(t(),y(f2(H.value),{key:1,class:"text",innerHTML:k.item.text},null,8,["innerHTML"])),k.item.collapsed!=null&&k.item.items&&k.item.items.length?(t(),z("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:_,onKeydown:gs(_,["enter"]),tabindex:"0"},St,32)):b("",!0)],16,xt)):b("",!0),k.item.items&&k.item.items.length?(t(),z("div",yt,[k.depth<5?(t(!0),z(G,{key:0},Q(k.item.items,P=>(t(),y(L,{key:P.text,item:P,depth:k.depth+1},null,8,["item","depth"]))),128)):b("",!0)])):b("",!0)]),_:1},8,["class"])}}}),At=w(wt,[["__scopeId","data-v-2a2ec26a"]]),A0=c=>(Y("data-v-23e2462f"),c=c(),K(),c),_t=A0(()=>h("div",{class:"curtain"},null,-1)),Pt={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Tt=A0(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Bt=x({__name:"VPSidebar",props:{open:{type:Boolean}},setup(c){const{sidebarGroups:a,hasSidebar:e}=h2(),r=c,s=F(null),n=d0(I1?document.body:null);return e2([r,s],()=>{var i;r.open?(n.value=!0,(i=s.value)==null||i.focus()):n.value=!1},{immediate:!0,flush:"post"}),(i,o)=>f(e)?(t(),z("aside",{key:0,class:B(["VPSidebar",{open:i.open}]),ref_key:"navEl",ref:s,onClick:o[0]||(o[0]=bs(()=>{},["stop"]))},[_t,h("nav",Pt,[Tt,u(i.$slots,"sidebar-nav-before",{},void 0,!0),(t(!0),z(G,null,Q(f(a),l=>(t(),z("div",{key:l.text,class:"group"},[S(At,{item:l,depth:0},null,8,["item"])]))),128)),u(i.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):b("",!0)}}),Ft=w(Bt,[["__scopeId","data-v-23e2462f"]]),$t=x({__name:"VPSkipLink",setup(c){const a=O1(),e=F();e2(()=>a.path,()=>e.value.focus());function r({target:s}){const n=document.getElementById(decodeURIComponent(s.hash).slice(1));if(n){const i=()=>{n.removeAttribute("tabindex"),n.removeEventListener("blur",i)};n.setAttribute("tabindex","-1"),n.addEventListener("blur",i),n.focus(),window.scrollTo(0,0)}}return(s,n)=>(t(),z(G,null,[h("span",{ref_key:"backToTop",ref:e,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),Dt=w($t,[["__scopeId","data-v-669f661a"]]),Rt=x({__name:"Layout",setup(c){const{isOpen:a,open:e,close:r}=h2(),s=O1();e2(()=>s.path,r),Xs(a,r);const{frontmatter:n}=T(),i=M0(),o=C(()=>!!i["home-hero-image"]);return U1("hero-image-slot-exists",o),(l,m)=>{const v=P2("Content");return f(n).layout!==!1?(t(),z("div",{key:0,class:B(["Layout",f(n).pageClass])},[u(l.$slots,"layout-top",{},void 0,!0),S(Dt),S(Ps,{class:"backdrop",show:f(a),onClick:f(r)},null,8,["show","onClick"]),S(bt,null,{"nav-bar-title-before":p(()=>[u(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[u(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[u(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[u(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":p(()=>[u(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[u(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),S(so,{open:f(a),onOpenMenu:f(e)},null,8,["open","onOpenMenu"]),S(Ft,{open:f(a)},{"sidebar-nav-before":p(()=>[u(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":p(()=>[u(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),S(Di,null,{"page-top":p(()=>[u(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[u(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":p(()=>[u(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":p(()=>[u(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[u(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[u(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[u(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[u(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[u(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[u(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[u(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[u(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":p(()=>[u(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[u(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[u(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":p(()=>[u(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[u(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":p(()=>[u(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[u(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[u(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[u(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[u(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[u(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),S(Ui),u(l.$slots,"layout-bottom",{},void 0,!0)],2)):(t(),y(v,{key:1}))}}}),Et=w(Rt,[["__scopeId","data-v-e2f6a28e"]]),Ot={Layout:Et,enhanceApp:({app:c})=>{c.component("Badge",ws)}};var _0=typeof global=="object"&&global&&global.Object===Object&&global,It=typeof self=="object"&&self&&self.Object===Object&&self,r2=_0||It||Function("return this")(),i2=r2.Symbol,P0=Object.prototype,Ut=P0.hasOwnProperty,qt=P0.toString,W2=i2?i2.toStringTag:void 0;function Gt(c){var a=Ut.call(c,W2),e=c[W2];try{c[W2]=void 0;var r=!0}catch{}var s=qt.call(c);return r&&(a?c[W2]=e:delete c[W2]),s}var Wt=Object.prototype,jt=Wt.toString;function Xt(c){return jt.call(c)}var Yt="[object Null]",Kt="[object Undefined]",h6=i2?i2.toStringTag:void 0;function T2(c){return c==null?c===void 0?Kt:Yt:h6&&h6 in Object(c)?Gt(c):Xt(c)}function B2(c){return c!=null&&typeof c=="object"}var Qt="[object Symbol]";function G1(c){return typeof c=="symbol"||B2(c)&&T2(c)==Qt}function T0(c,a){for(var e=-1,r=c==null?0:c.length,s=Array(r);++e<r;)s[e]=a(c[e],e,c);return s}var b2=Array.isArray,Zt=1/0,p6=i2?i2.prototype:void 0,V6=p6?p6.toString:void 0;function B0(c){if(typeof c=="string")return c;if(b2(c))return T0(c,B0)+"";if(G1(c))return V6?V6.call(c):"";var a=c+"";return a=="0"&&1/c==-Zt?"-0":a}var Jt=/\s/;function cf(c){for(var a=c.length;a--&&Jt.test(c.charAt(a)););return a}var af=/^\s+/;function ef(c){return c&&c.slice(0,cf(c)+1).replace(af,"")}function v2(c){var a=typeof c;return c!=null&&(a=="object"||a=="function")}var d6=NaN,rf=/^[-+]0x[0-9a-f]+$/i,sf=/^0b[01]+$/i,nf=/^0o[0-7]+$/i,of=parseInt;function M6(c){if(typeof c=="number")return c;if(G1(c))return d6;if(v2(c)){var a=typeof c.valueOf=="function"?c.valueOf():c;c=v2(a)?a+"":a}if(typeof c!="string")return c===0?c:+c;c=ef(c);var e=sf.test(c);return e||nf.test(c)?of(c.slice(2),e?2:8):rf.test(c)?d6:+c}function F0(c){return c}var lf="[object AsyncFunction]",tf="[object Function]",ff="[object GeneratorFunction]",mf="[object Proxy]";function $0(c){if(!v2(c))return!1;var a=T2(c);return a==tf||a==ff||a==lf||a==mf}var p3=r2["__core-js_shared__"],C6=function(){var c=/[^.]+$/.exec(p3&&p3.keys&&p3.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function vf(c){return!!C6&&C6 in c}var uf=Function.prototype,Hf=uf.toString;function F2(c){if(c!=null){try{return Hf.call(c)}catch{}try{return c+""}catch{}}return""}var zf=/[\\^$.*+?()[\]{}|]/g,hf=/^\[object .+?Constructor\]$/,pf=Function.prototype,Vf=Object.prototype,df=pf.toString,Mf=Vf.hasOwnProperty,Cf=RegExp("^"+df.call(Mf).replace(zf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Lf(c){if(!v2(c)||vf(c))return!1;var a=$0(c)?Cf:hf;return a.test(F2(c))}function gf(c,a){return c==null?void 0:c[a]}function $2(c,a){var e=gf(c,a);return Lf(e)?e:void 0}var w3=$2(r2,"WeakMap"),L6=Object.create,bf=function(){function c(){}return function(a){if(!v2(a))return{};if(L6)return L6(a);c.prototype=a;var e=new c;return c.prototype=void 0,e}}();function xf(c,a,e){switch(e.length){case 0:return c.call(a);case 1:return c.call(a,e[0]);case 2:return c.call(a,e[0],e[1]);case 3:return c.call(a,e[0],e[1],e[2])}return c.apply(a,e)}function Nf(c,a){var e=-1,r=c.length;for(a||(a=Array(r));++e<r;)a[e]=c[e];return a}var kf=800,Sf=16,yf=Date.now;function wf(c){var a=0,e=0;return function(){var r=yf(),s=Sf-(r-e);if(e=r,s>0){if(++a>=kf)return arguments[0]}else a=0;return c.apply(void 0,arguments)}}function Af(c){return function(){return c}}var P1=function(){try{var c=$2(Object,"defineProperty");return c({},"",{}),c}catch{}}(),_f=P1?function(c,a){return P1(c,"toString",{configurable:!0,enumerable:!1,value:Af(a),writable:!0})}:F0,Pf=wf(_f);function D0(c,a){for(var e=-1,r=c==null?0:c.length;++e<r&&a(c[e],e,c)!==!1;);return c}var Tf=9007199254740991,Bf=/^(?:0|[1-9]\d*)$/;function Ff(c,a){var e=typeof c;return a=a??Tf,!!a&&(e=="number"||e!="symbol"&&Bf.test(c))&&c>-1&&c%1==0&&c<a}function R0(c,a,e){a=="__proto__"&&P1?P1(c,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[a]=e}function E0(c,a){return c===a||c!==c&&a!==a}var $f=Object.prototype,Df=$f.hasOwnProperty;function O0(c,a,e){var r=c[a];(!(Df.call(c,a)&&E0(r,e))||e===void 0&&!(a in c))&&R0(c,a,e)}function i1(c,a,e,r){var s=!e;e||(e={});for(var n=-1,i=a.length;++n<i;){var o=a[n],l=void 0;l===void 0&&(l=c[o]),s?R0(e,o,l):O0(e,o,l)}return e}var g6=Math.max;function Rf(c,a,e){return a=g6(a===void 0?c.length-1:a,0),function(){for(var r=arguments,s=-1,n=g6(r.length-a,0),i=Array(n);++s<n;)i[s]=r[a+s];s=-1;for(var o=Array(a+1);++s<a;)o[s]=r[s];return o[a]=e(i),xf(c,this,o)}}var Ef=9007199254740991;function I0(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=Ef}function a4(c){return c!=null&&I0(c.length)&&!$0(c)}var Of=Object.prototype;function e4(c){var a=c&&c.constructor,e=typeof a=="function"&&a.prototype||Of;return c===e}function If(c,a){for(var e=-1,r=Array(c);++e<c;)r[e]=a(e);return r}var Uf="[object Arguments]";function b6(c){return B2(c)&&T2(c)==Uf}var U0=Object.prototype,qf=U0.hasOwnProperty,Gf=U0.propertyIsEnumerable,q0=b6(function(){return arguments}())?b6:function(c){return B2(c)&&qf.call(c,"callee")&&!Gf.call(c,"callee")};function Wf(){return!1}var G0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x6=G0&&typeof module=="object"&&module&&!module.nodeType&&module,jf=x6&&x6.exports===G0,N6=jf?r2.Buffer:void 0,Xf=N6?N6.isBuffer:void 0,W0=Xf||Wf,Yf="[object Arguments]",Kf="[object Array]",Qf="[object Boolean]",Zf="[object Date]",Jf="[object Error]",cm="[object Function]",am="[object Map]",em="[object Number]",rm="[object Object]",sm="[object RegExp]",nm="[object Set]",im="[object String]",om="[object WeakMap]",lm="[object ArrayBuffer]",tm="[object DataView]",fm="[object Float32Array]",mm="[object Float64Array]",vm="[object Int8Array]",um="[object Int16Array]",Hm="[object Int32Array]",zm="[object Uint8Array]",hm="[object Uint8ClampedArray]",pm="[object Uint16Array]",Vm="[object Uint32Array]",I={};I[fm]=I[mm]=I[vm]=I[um]=I[Hm]=I[zm]=I[hm]=I[pm]=I[Vm]=!0;I[Yf]=I[Kf]=I[lm]=I[Qf]=I[tm]=I[Zf]=I[Jf]=I[cm]=I[am]=I[em]=I[rm]=I[sm]=I[nm]=I[im]=I[om]=!1;function dm(c){return B2(c)&&I0(c.length)&&!!I[T2(c)]}function r4(c){return function(a){return c(a)}}var j0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Y2=j0&&typeof module=="object"&&module&&!module.nodeType&&module,Mm=Y2&&Y2.exports===j0,V3=Mm&&_0.process,O2=function(){try{var c=Y2&&Y2.require&&Y2.require("util").types;return c||V3&&V3.binding&&V3.binding("util")}catch{}}(),k6=O2&&O2.isTypedArray,Cm=k6?r4(k6):dm,Lm=Object.prototype,gm=Lm.hasOwnProperty;function X0(c,a){var e=b2(c),r=!e&&q0(c),s=!e&&!r&&W0(c),n=!e&&!r&&!s&&Cm(c),i=e||r||s||n,o=i?If(c.length,String):[],l=o.length;for(var m in c)(a||gm.call(c,m))&&!(i&&(m=="length"||s&&(m=="offset"||m=="parent")||n&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Ff(m,l)))&&o.push(m);return o}function Y0(c,a){return function(e){return c(a(e))}}var bm=Y0(Object.keys,Object),xm=Object.prototype,Nm=xm.hasOwnProperty;function km(c){if(!e4(c))return bm(c);var a=[];for(var e in Object(c))Nm.call(c,e)&&e!="constructor"&&a.push(e);return a}function W1(c){return a4(c)?X0(c):km(c)}function Sm(c){var a=[];if(c!=null)for(var e in Object(c))a.push(e);return a}var ym=Object.prototype,wm=ym.hasOwnProperty;function Am(c){if(!v2(c))return Sm(c);var a=e4(c),e=[];for(var r in c)r=="constructor"&&(a||!wm.call(c,r))||e.push(r);return e}function s4(c){return a4(c)?X0(c,!0):Am(c)}var _m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pm=/^\w*$/;function Tm(c,a){if(b2(c))return!1;var e=typeof c;return e=="number"||e=="symbol"||e=="boolean"||c==null||G1(c)?!0:Pm.test(c)||!_m.test(c)||a!=null&&c in Object(a)}var Z2=$2(Object,"create");function Bm(){this.__data__=Z2?Z2(null):{},this.size=0}function Fm(c){var a=this.has(c)&&delete this.__data__[c];return this.size-=a?1:0,a}var $m="__lodash_hash_undefined__",Dm=Object.prototype,Rm=Dm.hasOwnProperty;function Em(c){var a=this.__data__;if(Z2){var e=a[c];return e===$m?void 0:e}return Rm.call(a,c)?a[c]:void 0}var Om=Object.prototype,Im=Om.hasOwnProperty;function Um(c){var a=this.__data__;return Z2?a[c]!==void 0:Im.call(a,c)}var qm="__lodash_hash_undefined__";function Gm(c,a){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=Z2&&a===void 0?qm:a,this}function w2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}w2.prototype.clear=Bm;w2.prototype.delete=Fm;w2.prototype.get=Em;w2.prototype.has=Um;w2.prototype.set=Gm;function Wm(){this.__data__=[],this.size=0}function j1(c,a){for(var e=c.length;e--;)if(E0(c[e][0],a))return e;return-1}var jm=Array.prototype,Xm=jm.splice;function Ym(c){var a=this.__data__,e=j1(a,c);if(e<0)return!1;var r=a.length-1;return e==r?a.pop():Xm.call(a,e,1),--this.size,!0}function Km(c){var a=this.__data__,e=j1(a,c);return e<0?void 0:a[e][1]}function Qm(c){return j1(this.__data__,c)>-1}function Zm(c,a){var e=this.__data__,r=j1(e,c);return r<0?(++this.size,e.push([c,a])):e[r][1]=a,this}function p2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}p2.prototype.clear=Wm;p2.prototype.delete=Ym;p2.prototype.get=Km;p2.prototype.has=Qm;p2.prototype.set=Zm;var J2=$2(r2,"Map");function Jm(){this.size=0,this.__data__={hash:new w2,map:new(J2||p2),string:new w2}}function cv(c){var a=typeof c;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?c!=="__proto__":c===null}function X1(c,a){var e=c.__data__;return cv(a)?e[typeof a=="string"?"string":"hash"]:e.map}function av(c){var a=X1(this,c).delete(c);return this.size-=a?1:0,a}function ev(c){return X1(this,c).get(c)}function rv(c){return X1(this,c).has(c)}function sv(c,a){var e=X1(this,c),r=e.size;return e.set(c,a),this.size+=e.size==r?0:1,this}function x2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}x2.prototype.clear=Jm;x2.prototype.delete=av;x2.prototype.get=ev;x2.prototype.has=rv;x2.prototype.set=sv;var nv="Expected a function";function n4(c,a){if(typeof c!="function"||a!=null&&typeof a!="function")throw new TypeError(nv);var e=function(){var r=arguments,s=a?a.apply(this,r):r[0],n=e.cache;if(n.has(s))return n.get(s);var i=c.apply(this,r);return e.cache=n.set(s,i)||n,i};return e.cache=new(n4.Cache||x2),e}n4.Cache=x2;var iv=500;function ov(c){var a=n4(c,function(r){return e.size===iv&&e.clear(),r}),e=a.cache;return a}var lv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tv=/\\(\\)?/g,fv=ov(function(c){var a=[];return c.charCodeAt(0)===46&&a.push(""),c.replace(lv,function(e,r,s,n){a.push(s?n.replace(tv,"$1"):r||e)}),a});function mv(c){return c==null?"":B0(c)}function i4(c,a){return b2(c)?c:Tm(c,a)?[c]:fv(mv(c))}var vv=1/0;function K0(c){if(typeof c=="string"||G1(c))return c;var a=c+"";return a=="0"&&1/c==-vv?"-0":a}function uv(c,a){a=i4(a,c);for(var e=0,r=a.length;c!=null&&e<r;)c=c[K0(a[e++])];return e&&e==r?c:void 0}function o4(c,a){for(var e=-1,r=a.length,s=c.length;++e<r;)c[s+e]=a[e];return c}var S6=i2?i2.isConcatSpreadable:void 0;function Hv(c){return b2(c)||q0(c)||!!(S6&&c&&c[S6])}function zv(c,a,e,r,s){var n=-1,i=c.length;for(e||(e=Hv),s||(s=[]);++n<i;){var o=c[n];e(o)?o4(s,o):s[s.length]=o}return s}function hv(c){var a=c==null?0:c.length;return a?zv(c):[]}function pv(c){return Pf(Rf(c,void 0,hv),c+"")}var l4=Y0(Object.getPrototypeOf,Object),Vv="[object Object]",dv=Function.prototype,Mv=Object.prototype,Q0=dv.toString,Cv=Mv.hasOwnProperty,Lv=Q0.call(Object);function gv(c){if(!B2(c)||T2(c)!=Vv)return!1;var a=l4(c);if(a===null)return!0;var e=Cv.call(a,"constructor")&&a.constructor;return typeof e=="function"&&e instanceof e&&Q0.call(e)==Lv}function bv(c,a,e){var r=-1,s=c.length;a<0&&(a=-a>s?0:s+a),e=e>s?s:e,e<0&&(e+=s),s=a>e?0:e-a>>>0,a>>>=0;for(var n=Array(s);++r<s;)n[r]=c[r+a];return n}function xv(){this.__data__=new p2,this.size=0}function Nv(c){var a=this.__data__,e=a.delete(c);return this.size=a.size,e}function kv(c){return this.__data__.get(c)}function Sv(c){return this.__data__.has(c)}var yv=200;function wv(c,a){var e=this.__data__;if(e instanceof p2){var r=e.__data__;if(!J2||r.length<yv-1)return r.push([c,a]),this.size=++e.size,this;e=this.__data__=new x2(r)}return e.set(c,a),this.size=e.size,this}function q2(c){var a=this.__data__=new p2(c);this.size=a.size}q2.prototype.clear=xv;q2.prototype.delete=Nv;q2.prototype.get=kv;q2.prototype.has=Sv;q2.prototype.set=wv;function Av(c,a){return c&&i1(a,W1(a),c)}function _v(c,a){return c&&i1(a,s4(a),c)}var Z0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,y6=Z0&&typeof module=="object"&&module&&!module.nodeType&&module,Pv=y6&&y6.exports===Z0,w6=Pv?r2.Buffer:void 0,A6=w6?w6.allocUnsafe:void 0;function Tv(c,a){if(a)return c.slice();var e=c.length,r=A6?A6(e):new c.constructor(e);return c.copy(r),r}function Bv(c,a){for(var e=-1,r=c==null?0:c.length,s=0,n=[];++e<r;){var i=c[e];a(i,e,c)&&(n[s++]=i)}return n}function J0(){return[]}var Fv=Object.prototype,$v=Fv.propertyIsEnumerable,_6=Object.getOwnPropertySymbols,t4=_6?function(c){return c==null?[]:(c=Object(c),Bv(_6(c),function(a){return $v.call(c,a)}))}:J0;function Dv(c,a){return i1(c,t4(c),a)}var Rv=Object.getOwnPropertySymbols,c8=Rv?function(c){for(var a=[];c;)o4(a,t4(c)),c=l4(c);return a}:J0;function Ev(c,a){return i1(c,c8(c),a)}function a8(c,a,e){var r=a(c);return b2(c)?r:o4(r,e(c))}function Ov(c){return a8(c,W1,t4)}function e8(c){return a8(c,s4,c8)}var A3=$2(r2,"DataView"),_3=$2(r2,"Promise"),P3=$2(r2,"Set"),P6="[object Map]",Iv="[object Object]",T6="[object Promise]",B6="[object Set]",F6="[object WeakMap]",$6="[object DataView]",Uv=F2(A3),qv=F2(J2),Gv=F2(_3),Wv=F2(P3),jv=F2(w3),l2=T2;(A3&&l2(new A3(new ArrayBuffer(1)))!=$6||J2&&l2(new J2)!=P6||_3&&l2(_3.resolve())!=T6||P3&&l2(new P3)!=B6||w3&&l2(new w3)!=F6)&&(l2=function(c){var a=T2(c),e=a==Iv?c.constructor:void 0,r=e?F2(e):"";if(r)switch(r){case Uv:return $6;case qv:return P6;case Gv:return T6;case Wv:return B6;case jv:return F6}return a});var Xv=Object.prototype,Yv=Xv.hasOwnProperty;function Kv(c){var a=c.length,e=new c.constructor(a);return a&&typeof c[0]=="string"&&Yv.call(c,"index")&&(e.index=c.index,e.input=c.input),e}var D6=r2.Uint8Array;function f4(c){var a=new c.constructor(c.byteLength);return new D6(a).set(new D6(c)),a}function Qv(c,a){var e=a?f4(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.byteLength)}var Zv=/\w*$/;function Jv(c){var a=new c.constructor(c.source,Zv.exec(c));return a.lastIndex=c.lastIndex,a}var R6=i2?i2.prototype:void 0,E6=R6?R6.valueOf:void 0;function cu(c){return E6?Object(E6.call(c)):{}}function au(c,a){var e=a?f4(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.length)}var eu="[object Boolean]",ru="[object Date]",su="[object Map]",nu="[object Number]",iu="[object RegExp]",ou="[object Set]",lu="[object String]",tu="[object Symbol]",fu="[object ArrayBuffer]",mu="[object DataView]",vu="[object Float32Array]",uu="[object Float64Array]",Hu="[object Int8Array]",zu="[object Int16Array]",hu="[object Int32Array]",pu="[object Uint8Array]",Vu="[object Uint8ClampedArray]",du="[object Uint16Array]",Mu="[object Uint32Array]";function Cu(c,a,e){var r=c.constructor;switch(a){case fu:return f4(c);case eu:case ru:return new r(+c);case mu:return Qv(c,e);case vu:case uu:case Hu:case zu:case hu:case pu:case Vu:case du:case Mu:return au(c,e);case su:return new r;case nu:case lu:return new r(c);case iu:return Jv(c);case ou:return new r;case tu:return cu(c)}}function Lu(c){return typeof c.constructor=="function"&&!e4(c)?bf(l4(c)):{}}var gu="[object Map]";function bu(c){return B2(c)&&l2(c)==gu}var O6=O2&&O2.isMap,xu=O6?r4(O6):bu,Nu="[object Set]";function ku(c){return B2(c)&&l2(c)==Nu}var I6=O2&&O2.isSet,Su=I6?r4(I6):ku,yu=1,wu=2,Au=4,r8="[object Arguments]",_u="[object Array]",Pu="[object Boolean]",Tu="[object Date]",Bu="[object Error]",s8="[object Function]",Fu="[object GeneratorFunction]",$u="[object Map]",Du="[object Number]",n8="[object Object]",Ru="[object RegExp]",Eu="[object Set]",Ou="[object String]",Iu="[object Symbol]",Uu="[object WeakMap]",qu="[object ArrayBuffer]",Gu="[object DataView]",Wu="[object Float32Array]",ju="[object Float64Array]",Xu="[object Int8Array]",Yu="[object Int16Array]",Ku="[object Int32Array]",Qu="[object Uint8Array]",Zu="[object Uint8ClampedArray]",Ju="[object Uint16Array]",cH="[object Uint32Array]",O={};O[r8]=O[_u]=O[qu]=O[Gu]=O[Pu]=O[Tu]=O[Wu]=O[ju]=O[Xu]=O[Yu]=O[Ku]=O[$u]=O[Du]=O[n8]=O[Ru]=O[Eu]=O[Ou]=O[Iu]=O[Qu]=O[Zu]=O[Ju]=O[cH]=!0;O[Bu]=O[s8]=O[Uu]=!1;function y1(c,a,e,r,s,n){var i,o=a&yu,l=a&wu,m=a&Au;if(e&&(i=s?e(c,r,s,n):e(c)),i!==void 0)return i;if(!v2(c))return c;var v=b2(c);if(v){if(i=Kv(c),!o)return Nf(c,i)}else{var H=l2(c),V=H==s8||H==Fu;if(W0(c))return Tv(c,o);if(H==n8||H==r8||V&&!s){if(i=l||V?{}:Lu(c),!o)return l?Ev(c,_v(i,c)):Dv(c,Av(i,c))}else{if(!O[H])return s?c:{};i=Cu(c,H,o)}}n||(n=new q2);var M=n.get(c);if(M)return M;n.set(c,i),Su(c)?c.forEach(function(k){i.add(y1(k,a,e,k,c,n))}):xu(c)&&c.forEach(function(k,d){i.set(d,y1(k,a,e,d,c,n))});var A=m?l?e8:Ov:l?s4:W1,_=v?void 0:A(c);return D0(_||c,function(k,d){_&&(d=k,k=c[d]),O0(i,d,y1(k,a,e,d,c,n))}),i}function aH(c){return function(a,e,r){for(var s=-1,n=Object(a),i=r(a),o=i.length;o--;){var l=i[++s];if(e(n[l],l,n)===!1)break}return a}}var eH=aH();function rH(c,a){return c&&eH(c,a,W1)}function sH(c,a){return function(e,r){if(e==null)return e;if(!a4(e))return c(e,r);for(var s=e.length,n=-1,i=Object(e);++n<s&&r(i[n],n,i)!==!1;);return e}}var nH=sH(rH),d3=function(){return r2.Date.now()},iH="Expected a function",oH=Math.max,lH=Math.min;function tH(c,a,e){var r,s,n,i,o,l,m=0,v=!1,H=!1,V=!0;if(typeof c!="function")throw new TypeError(iH);a=M6(a)||0,v2(e)&&(v=!!e.leading,H="maxWait"in e,n=H?oH(M6(e.maxWait)||0,a):n,V="trailing"in e?!!e.trailing:V);function M($){var j=r,o2=s;return r=s=void 0,m=$,i=c.apply(o2,j),i}function A($){return m=$,o=setTimeout(d,a),v?M($):i}function _($){var j=$-l,o2=$-m,c2=a-j;return H?lH(c2,n-o2):c2}function k($){var j=$-l,o2=$-m;return l===void 0||j>=a||j<0||H&&o2>=n}function d(){var $=d3();if(k($))return L($);o=setTimeout(d,_($))}function L($){return o=void 0,V&&r?M($):(r=s=void 0,i)}function P(){o!==void 0&&clearTimeout(o),m=0,r=l=s=o=void 0}function E(){return o===void 0?i:L(d3())}function R(){var $=d3(),j=k($);if(r=arguments,s=this,l=$,j){if(o===void 0)return A(l);if(H)return clearTimeout(o),o=setTimeout(d,a),M(l)}return o===void 0&&(o=setTimeout(d,a)),i}return R.cancel=P,R.flush=E,R}function fH(c){var a=c==null?0:c.length;return a?c[a-1]:void 0}function mH(c){return typeof c=="function"?c:F0}function vH(c,a){var e=b2(c)?D0:nH;return e(c,mH(a))}function uH(c,a){return a.length<2?c:uv(c,bv(a,0,-1))}function HH(c,a){return a=i4(a,c),c=uH(c,a),c==null||delete c[K0(fH(a))]}function zH(c){return gv(c)?void 0:c}var hH=1,pH=2,VH=4,dH=pv(function(c,a){var e={};if(c==null)return e;var r=!1;a=T0(a,function(n){return n=i4(n,c),r||(r=n.length>1),n}),i1(c,e8(c),e),r&&(e=y1(e,hH|pH|VH,zH));for(var s=a.length;s--;)HH(e,a[s]);return e}),MH="Expected a function";function CH(c,a,e){var r=!0,s=!0;if(typeof c!="function")throw new TypeError(MH);return v2(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),tH(c,a,{leading:r,maxWait:a,trailing:s})}function LH(c){return e=>vH(c,r=>e.use(r))}const o1=c=>(c.install=a=>{const e=c.name;a.component(e,c)},c);function U6(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function g(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?U6(Object(e),!0).forEach(function(r){X(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):U6(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function T1(c){"@babel/helpers - typeof";return T1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},T1(c)}function gH(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function bH(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function xH(c,a,e){return a&&bH(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function X(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function m4(c,a){return kH(c)||yH(c,a)||i8(c,a)||AH()}function l1(c){return NH(c)||SH(c)||i8(c)||wH()}function NH(c){if(Array.isArray(c))return T3(c)}function kH(c){if(Array.isArray(c))return c}function SH(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function yH(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,o;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){n=!0,o=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw o}}return r}}function i8(c,a){if(c){if(typeof c=="string")return T3(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return T3(c,a)}}function T3(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function wH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var q6=function(){},v4={},o8={},l8=null,t8={mark:q6,measure:q6};try{typeof window<"u"&&(v4=window),typeof document<"u"&&(o8=document),typeof MutationObserver<"u"&&(l8=MutationObserver),typeof performance<"u"&&(t8=performance)}catch{}var _H=v4.navigator||{},G6=_H.userAgent,W6=G6===void 0?"":G6,M2=v4,q=o8,j6=l8,p1=t8;M2.document;var V2=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",f8=~W6.indexOf("MSIE")||~W6.indexOf("Trident/"),V1,d1,M1,C1,L1,u2="___FONT_AWESOME___",B3=16,m8="fa",v8="svg-inline--fa",A2="data-fa-i2svg",F3="data-fa-pseudo-element",PH="data-fa-pseudo-element-pending",u4="data-prefix",H4="data-icon",X6="fontawesome-i2svg",TH="async",BH=["HTML","HEAD","STYLE","SCRIPT"],u8=function(){try{return!0}catch{return!1}}(),U="classic",W="sharp",z4=[U,W];function t1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[U]}})}var c1=t1((V1={},X(V1,U,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),X(V1,W,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),V1)),a1=t1((d1={},X(d1,U,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X(d1,W,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),d1)),e1=t1((M1={},X(M1,U,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X(M1,W,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),M1)),FH=t1((C1={},X(C1,U,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X(C1,W,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),C1)),$H=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,H8="fa-layers-text",DH=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,RH=t1((L1={},X(L1,U,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X(L1,W,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),L1)),z8=[1,2,3,4,5,6,7,8,9,10],EH=z8.concat([11,12,13,14,15,16,17,18,19,20]),OH=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],N2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r1=new Set;Object.keys(a1[U]).map(r1.add.bind(r1));Object.keys(a1[W]).map(r1.add.bind(r1));var IH=[].concat(z4,l1(r1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",N2.GROUP,N2.SWAP_OPACITY,N2.PRIMARY,N2.SECONDARY]).concat(z8.map(function(c){return"".concat(c,"x")})).concat(EH.map(function(c){return"w-".concat(c)})),K2=M2.FontAwesomeConfig||{};function UH(c){var a=q.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function qH(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(q&&typeof q.querySelector=="function"){var GH=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];GH.forEach(function(c){var a=m4(c,2),e=a[0],r=a[1],s=qH(UH(e));s!=null&&(K2[r]=s)})}var h8={styleDefault:"solid",familyDefault:"classic",cssPrefix:m8,replacementClass:v8,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K2.familyPrefix&&(K2.cssPrefix=K2.familyPrefix);var I2=g(g({},h8),K2);I2.autoReplaceSvg||(I2.observeMutations=!1);var N={};Object.keys(h8).forEach(function(c){Object.defineProperty(N,c,{enumerable:!0,set:function(e){I2[c]=e,Q2.forEach(function(r){return r(N)})},get:function(){return I2[c]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(a){I2.cssPrefix=a,Q2.forEach(function(e){return e(N)})},get:function(){return I2.cssPrefix}});M2.FontAwesomeConfig=N;var Q2=[];function WH(c){return Q2.push(c),function(){Q2.splice(Q2.indexOf(c),1)}}var d2=B3,s2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jH(c){if(!(!c||!V2)){var a=q.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=q.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return q.head.insertBefore(a,r),c}}var XH="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s1(){for(var c=12,a="";c-- >0;)a+=XH[Math.random()*62|0];return a}function G2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function h4(c){return c.classList?G2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function p8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function YH(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(p8(c[e]),'" ')},"").trim()}function Y1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function p4(c){return c.size!==s2.size||c.x!==s2.x||c.y!==s2.y||c.rotate!==s2.rotate||c.flipX||c.flipY}function KH(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(o)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:m}}function QH(c){var a=c.transform,e=c.width,r=e===void 0?B3:e,s=c.height,n=s===void 0?B3:s,i=c.startCentered,o=i===void 0?!1:i,l="";return o&&f8?l+="translate(".concat(a.x/d2-r/2,"em, ").concat(a.y/d2-n/2,"em) "):o?l+="translate(calc(-50% + ".concat(a.x/d2,"em), calc(-50% + ").concat(a.y/d2,"em)) "):l+="translate(".concat(a.x/d2,"em, ").concat(a.y/d2,"em) "),l+="scale(".concat(a.size/d2*(a.flipX?-1:1),", ").concat(a.size/d2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var ZH=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function V8(){var c=m8,a=v8,e=N.cssPrefix,r=N.replacementClass,s=ZH;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(r))}return s}var Y6=!1;function M3(){N.autoAddCss&&!Y6&&(jH(V8()),Y6=!0)}var JH={mixout:function(){return{dom:{css:V8,insertCss:M3}}},hooks:function(){return{beforeDOMElementCreation:function(){M3()},beforeI2svg:function(){M3()}}}},H2=M2||{};H2[u2]||(H2[u2]={});H2[u2].styles||(H2[u2].styles={});H2[u2].hooks||(H2[u2].hooks={});H2[u2].shims||(H2[u2].shims=[]);var a2=H2[u2],d8=[],cz=function c(){q.removeEventListener("DOMContentLoaded",c),B1=1,d8.map(function(a){return a()})},B1=!1;V2&&(B1=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),B1||q.addEventListener("DOMContentLoaded",cz));function az(c){V2&&(B1?setTimeout(c,0):d8.push(c))}function f1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?p8(c):"<".concat(a," ").concat(YH(r),">").concat(n.map(f1).join(""),"</").concat(a,">")}function K6(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var C3=function(a,e,r,s){var n=Object.keys(a),i=n.length,o=e,l,m,v;for(r===void 0?(l=1,v=a[n[0]]):(l=0,v=r);l<i;l++)m=n[l],v=o(v,a[m],m,a);return v};function ez(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function $3(c){var a=ez(c);return a.length===1?a[0].toString(16):null}function rz(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Q6(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function D3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=Q6(a);typeof a2.hooks.addPack=="function"&&!s?a2.hooks.addPack(c,Q6(a)):a2.styles[c]=g(g({},a2.styles[c]||{}),n),c==="fas"&&D3("fa",a)}var g1,b1,x1,D2=a2.styles,sz=a2.shims,nz=(g1={},X(g1,U,Object.values(e1[U])),X(g1,W,Object.values(e1[W])),g1),V4=null,M8={},C8={},L8={},g8={},b8={},iz=(b1={},X(b1,U,Object.keys(c1[U])),X(b1,W,Object.keys(c1[W])),b1);function oz(c){return~IH.indexOf(c)}function lz(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!oz(s)?s:null}var x8=function(){var a=function(n){return C3(D2,function(i,o,l){return i[l]=C3(o,n,{}),i},{})};M8=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var o=n[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){s[l.toString(16)]=i})}return s}),C8=a(function(s,n,i){if(s[i]=i,n[2]){var o=n[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){s[l]=i})}return s}),b8=a(function(s,n,i){var o=n[2];return s[i]=i,o.forEach(function(l){s[l]=i}),s});var e="far"in D2||N.autoFetchSvg,r=C3(sz,function(s,n){var i=n[0],o=n[1],l=n[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(s.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:o,iconName:l}),s},{names:{},unicodes:{}});L8=r.names,g8=r.unicodes,V4=K1(N.styleDefault,{family:N.familyDefault})};WH(function(c){V4=K1(c.styleDefault,{family:N.familyDefault})});x8();function d4(c,a){return(M8[c]||{})[a]}function tz(c,a){return(C8[c]||{})[a]}function k2(c,a){return(b8[c]||{})[a]}function N8(c){return L8[c]||{prefix:null,iconName:null}}function fz(c){var a=g8[c],e=d4("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function C2(){return V4}var M4=function(){return{prefix:null,iconName:null,rest:[]}};function K1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?U:e,s=c1[r][c],n=a1[r][c]||a1[r][s],i=c in a2.styles?c:null;return n||i||null}var Z6=(x1={},X(x1,U,Object.keys(e1[U])),X(x1,W,Object.keys(e1[W])),x1);function Q1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},X(a,U,"".concat(N.cssPrefix,"-").concat(U)),X(a,W,"".concat(N.cssPrefix,"-").concat(W)),a),i=null,o=U;(c.includes(n[U])||c.some(function(m){return Z6[U].includes(m)}))&&(o=U),(c.includes(n[W])||c.some(function(m){return Z6[W].includes(m)}))&&(o=W);var l=c.reduce(function(m,v){var H=lz(N.cssPrefix,v);if(D2[v]?(v=nz[o].includes(v)?FH[o][v]:v,i=v,m.prefix=v):iz[o].indexOf(v)>-1?(i=v,m.prefix=K1(v,{family:o})):H?m.iconName=H:v!==N.replacementClass&&v!==n[U]&&v!==n[W]&&m.rest.push(v),!s&&m.prefix&&m.iconName){var V=i==="fa"?N8(m.iconName):{},M=k2(m.prefix,m.iconName);V.prefix&&(i=null),m.iconName=V.iconName||M||m.iconName,m.prefix=V.prefix||m.prefix,m.prefix==="far"&&!D2.far&&D2.fas&&!N.autoFetchSvg&&(m.prefix="fas")}return m},M4());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===W&&(D2.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=k2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=C2()||"fas"),l}var mz=function(){function c(){gH(this,c),this.definitions={}}return xH(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=g(g({},e.definitions[o]||{}),i[o]),D3(o,i[o]);var l=e1[U][o];l&&D3(l,i[o]),x8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],o=i.prefix,l=i.iconName,m=i.icon,v=m[2];e[o]||(e[o]={}),v.length>0&&v.forEach(function(H){typeof H=="string"&&(e[o][H]=m)}),e[o][l]=m}),e}}]),c}(),J6=[],R2={},E2={},vz=Object.keys(E2);function uz(c,a){var e=a.mixoutsTo;return J6=c,R2={},Object.keys(E2).forEach(function(r){vz.indexOf(r)===-1&&delete E2[r]}),J6.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),T1(s[i])==="object"&&Object.keys(s[i]).forEach(function(o){e[i]||(e[i]={}),e[i][o]=s[i][o]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){R2[i]||(R2[i]=[]),R2[i].push(n[i])})}r.provides&&r.provides(E2)}),e}function R3(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=R2[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function _2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=R2[c]||[];s.forEach(function(n){n.apply(null,e)})}function z2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return E2[c]?E2[c].apply(null,a):void 0}function E3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||C2();if(a)return a=k2(e,a)||a,K6(k8.definitions,e,a)||K6(a2.styles,e,a)}var k8=new mz,Hz=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,_2("noAuto")},zz={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V2?(_2("beforeI2svg",a),z2("pseudoElements2svg",a),z2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,az(function(){pz({autoReplaceSvgRoot:e}),_2("watch",a)})}},hz={icon:function(a){if(a===null)return null;if(T1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:k2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=K1(a[0]);return{prefix:r,iconName:k2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(N.cssPrefix,"-"))>-1||a.match($H))){var s=Q1(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||C2(),iconName:k2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=C2();return{prefix:n,iconName:k2(n,a)||a}}}},J={noAuto:Hz,config:N,dom:zz,parse:hz,library:k8,findIconDefinition:E3,toHtml:f1},pz=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?q:e;(Object.keys(a2.styles).length>0||N.autoFetchSvg)&&V2&&N.autoReplaceSvg&&J.dom.i2svg({node:r})};function Z1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return f1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(V2){var r=q.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Vz(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(p4(i)&&e.found&&!r.found){var o=e.width,l=e.height,m={x:o/l/2,y:.5};s.style=Y1(g(g({},n),{},{"transform-origin":"".concat(m.x+i.x/16,"em ").concat(m.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function dz(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(N.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},s),{},{id:i}),children:r}]}]}function C4(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,o=c.symbol,l=c.title,m=c.maskId,v=c.titleId,H=c.extra,V=c.watchable,M=V===void 0?!1:V,A=r.found?r:e,_=A.width,k=A.height,d=s==="fak",L=[N.replacementClass,n?"".concat(N.cssPrefix,"-").concat(n):""].filter(function(c2){return H.classes.indexOf(c2)===-1}).filter(function(c2){return c2!==""||!!c2}).concat(H.classes).join(" "),P={children:[],attributes:g(g({},H.attributes),{},{"data-prefix":s,"data-icon":n,class:L,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(k)})},E=d&&!~H.classes.indexOf("fa-fw")?{width:"".concat(_/k*16*.0625,"em")}:{};M&&(P.attributes[A2]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(v||s1())},children:[l]}),delete P.attributes.title);var R=g(g({},P),{},{prefix:s,iconName:n,main:e,mask:r,maskId:m,transform:i,symbol:o,styles:g(g({},E),H.styles)}),$=r.found&&e.found?z2("generateAbstractMask",R)||{children:[],attributes:{}}:z2("generateAbstractIcon",R)||{children:[],attributes:{}},j=$.children,o2=$.attributes;return R.children=j,R.attributes=o2,o?dz(R):Vz(R)}function c0(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,o=c.watchable,l=o===void 0?!1:o,m=g(g(g({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(m[A2]="");var v=g({},i.styles);p4(s)&&(v.transform=QH({transform:s,startCentered:!0,width:e,height:r}),v["-webkit-transform"]=v.transform);var H=Y1(v);H.length>0&&(m.style=H);var V=[];return V.push({tag:"span",attributes:m,children:[a]}),n&&V.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),V}function Mz(c){var a=c.content,e=c.title,r=c.extra,s=g(g(g({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=Y1(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var L3=a2.styles;function O3(c){var a=c[0],e=c[1],r=c.slice(4),s=m4(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(N2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(N2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(N2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var Cz={found:!1,width:512,height:512};function Lz(c,a){!u8&&!N.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function I3(c,a){var e=a;return a==="fa"&&N.styleDefault!==null&&(a=C2()),new Promise(function(r,s){if(z2("missingIconAbstract"),e==="fa"){var n=N8(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&L3[a]&&L3[a][c]){var i=L3[a][c];return r(O3(i))}Lz(c,a),r(g(g({},Cz),{},{icon:N.showMissingIcons&&c?z2("missingIconAbstract")||{}:{}}))})}var a0=function(){},U3=N.measurePerformance&&p1&&p1.mark&&p1.measure?p1:{mark:a0,measure:a0},j2='FA "6.5.2"',gz=function(a){return U3.mark("".concat(j2," ").concat(a," begins")),function(){return S8(a)}},S8=function(a){U3.mark("".concat(j2," ").concat(a," ends")),U3.measure("".concat(j2," ").concat(a),"".concat(j2," ").concat(a," begins"),"".concat(j2," ").concat(a," ends"))},L4={begin:gz,end:S8},w1=function(){};function e0(c){var a=c.getAttribute?c.getAttribute(A2):null;return typeof a=="string"}function bz(c){var a=c.getAttribute?c.getAttribute(u4):null,e=c.getAttribute?c.getAttribute(H4):null;return a&&e}function xz(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(N.replacementClass)}function Nz(){if(N.autoReplaceSvg===!0)return A1.replace;var c=A1[N.autoReplaceSvg];return c||A1.replace}function kz(c){return q.createElementNS("http://www.w3.org/2000/svg",c)}function Sz(c){return q.createElement(c)}function y8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?kz:Sz:e;if(typeof c=="string")return q.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(y8(i,{ceFn:r}))}),s}function yz(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var A1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(y8(s),e)}),e.getAttribute(A2)===null&&N.keepOriginalSource){var r=q.createComment(yz(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~h4(e).indexOf(N.replacementClass))return A1.replace(a);var s=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(o,l){return l===N.replacementClass||l.match(s)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(o){return f1(o)}).join(`
`);e.setAttribute(A2,""),e.innerHTML=i}};function r0(c){c()}function w8(c,a){var e=typeof a=="function"?a:w1;if(c.length===0)e();else{var r=r0;N.mutateApproach===TH&&(r=M2.requestAnimationFrame||r0),r(function(){var s=Nz(),n=L4.begin("mutate");c.map(s),n(),e()})}}var g4=!1;function A8(){g4=!0}function q3(){g4=!1}var F1=null;function s0(c){if(j6&&N.observeMutations){var a=c.treeCallback,e=a===void 0?w1:a,r=c.nodeCallback,s=r===void 0?w1:r,n=c.pseudoElementsCallback,i=n===void 0?w1:n,o=c.observeMutationsRoot,l=o===void 0?q:o;F1=new j6(function(m){if(!g4){var v=C2();G2(m).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!e0(H.addedNodes[0])&&(N.searchPseudoElements&&i(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&N.searchPseudoElements&&i(H.target.parentNode),H.type==="attributes"&&e0(H.target)&&~OH.indexOf(H.attributeName))if(H.attributeName==="class"&&bz(H.target)){var V=Q1(h4(H.target)),M=V.prefix,A=V.iconName;H.target.setAttribute(u4,M||v),A&&H.target.setAttribute(H4,A)}else xz(H.target)&&s(H.target)})}}),V2&&F1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wz(){F1&&F1.disconnect()}function Az(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),e}function _z(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=Q1(h4(c));return s.prefix||(s.prefix=C2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=tz(s.prefix,c.innerText)||d4(s.prefix,$3(c.innerText))),!s.iconName&&N.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Pz(c){var a=G2(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return N.autoA11y&&(e?a["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||s1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Tz(){return{iconName:null,title:null,titleId:null,prefix:null,transform:s2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=_z(c),r=e.iconName,s=e.prefix,n=e.rest,i=Pz(c),o=R3("parseNodeAttributes",{},c),l=a.styleParser?Az(c):[];return g({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:s2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},o)}var Bz=a2.styles;function _8(c){var a=N.autoReplaceSvg==="nest"?n0(c,{styleParser:!1}):n0(c);return~a.extra.classes.indexOf(H8)?z2("generateLayersText",c,a):z2("generateSvgReplacementMutation",c,a)}var L2=new Set;z4.map(function(c){L2.add("fa-".concat(c))});Object.keys(c1[U]).map(L2.add.bind(L2));Object.keys(c1[W]).map(L2.add.bind(L2));L2=l1(L2);function i0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V2)return Promise.resolve();var e=q.documentElement.classList,r=function(H){return e.add("".concat(X6,"-").concat(H))},s=function(H){return e.remove("".concat(X6,"-").concat(H))},n=N.autoFetchSvg?L2:z4.map(function(v){return"fa-".concat(v)}).concat(Object.keys(Bz));n.includes("fa")||n.push("fa");var i=[".".concat(H8,":not([").concat(A2,"])")].concat(n.map(function(v){return".".concat(v,":not([").concat(A2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=G2(c.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),s("complete");else return Promise.resolve();var l=L4.begin("onTree"),m=o.reduce(function(v,H){try{var V=_8(H);V&&v.push(V)}catch(M){u8||M.name==="MissingIcon"&&console.error(M)}return v},[]);return new Promise(function(v,H){Promise.all(m).then(function(V){w8(V,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),v()})}).catch(function(V){l(),H(V)})})}function Fz(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_8(c).then(function(e){e&&w8([e],a)})}function $z(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:E3(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:E3(s||{})),c(r,g(g({},e),{},{mask:s}))}}var Dz=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?s2:r,n=e.symbol,i=n===void 0?!1:n,o=e.mask,l=o===void 0?null:o,m=e.maskId,v=m===void 0?null:m,H=e.title,V=H===void 0?null:H,M=e.titleId,A=M===void 0?null:M,_=e.classes,k=_===void 0?[]:_,d=e.attributes,L=d===void 0?{}:d,P=e.styles,E=P===void 0?{}:P;if(a){var R=a.prefix,$=a.iconName,j=a.icon;return Z1(g({type:"icon"},a),function(){return _2("beforeDOMElementCreation",{iconDefinition:a,params:e}),N.autoA11y&&(V?L["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(A||s1()):(L["aria-hidden"]="true",L.focusable="false")),C4({icons:{main:O3(j),mask:l?O3(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:$,transform:g(g({},s2),s),symbol:i,title:V,maskId:v,titleId:A,extra:{attributes:L,styles:E,classes:k}})})}},Rz={mixout:function(){return{icon:$z(Dz)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=i0,e.nodeCallback=Fz,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?q:r,n=e.callback,i=n===void 0?function(){}:n;return i0(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,o=r.prefix,l=r.transform,m=r.symbol,v=r.mask,H=r.maskId,V=r.extra;return new Promise(function(M,A){Promise.all([I3(s,o),v.iconName?I3(v.iconName,v.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var k=m4(_,2),d=k[0],L=k[1];M([e,C4({icons:{main:d,mask:L},prefix:o,iconName:s,transform:l,symbol:m,maskId:H,title:n,titleId:i,extra:V,watchable:!0})])}).catch(A)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,o=e.styles,l=Y1(o);l.length>0&&(s.style=l);var m;return p4(i)&&(m=z2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(m||n.icon),{children:r,attributes:s}}}},Ez={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return Z1({type:"layer"},function(){_2("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(o){Array.isArray(o)?o.map(function(l){i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(l1(n)).join(" ")},children:i}]})}}}},Oz={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,o=i===void 0?[]:i,l=r.attributes,m=l===void 0?{}:l,v=r.styles,H=v===void 0?{}:v;return Z1({type:"counter",content:e},function(){return _2("beforeDOMElementCreation",{content:e,params:r}),Mz({content:e.toString(),title:n,extra:{attributes:m,styles:H,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(l1(o))}})})}}}},Iz={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?s2:s,i=r.title,o=i===void 0?null:i,l=r.classes,m=l===void 0?[]:l,v=r.attributes,H=v===void 0?{}:v,V=r.styles,M=V===void 0?{}:V;return Z1({type:"text",content:e},function(){return _2("beforeDOMElementCreation",{content:e,params:r}),c0({content:e,transform:g(g({},s2),n),title:o,extra:{attributes:H,styles:M,classes:["".concat(N.cssPrefix,"-layers-text")].concat(l1(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,o=null,l=null;if(f8){var m=parseInt(getComputedStyle(e).fontSize,10),v=e.getBoundingClientRect();o=v.width/m,l=v.height/m}return N.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,c0({content:e.innerHTML,width:o,height:l,transform:n,title:s,extra:i,watchable:!0})])}}},Uz=new RegExp('"',"ug"),o0=[1105920,1112319];function qz(c){var a=c.replace(Uz,""),e=rz(a,0),r=e>=o0[0]&&e<=o0[1],s=a.length===2?a[0]===a[1]:!1;return{value:$3(s?a[0]:a),isSecondary:r||s}}function l0(c,a){var e="".concat(PH).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=G2(c.children),i=n.filter(function(j){return j.getAttribute(F3)===a})[0],o=M2.getComputedStyle(c,a),l=o.getPropertyValue("font-family").match(DH),m=o.getPropertyValue("font-weight"),v=o.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&v!=="none"&&v!==""){var H=o.getPropertyValue("content"),V=~["Sharp"].indexOf(l[2])?W:U,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?a1[V][l[2].toLowerCase()]:RH[V][m],A=qz(H),_=A.value,k=A.isSecondary,d=l[0].startsWith("FontAwesome"),L=d4(M,_),P=L;if(d){var E=fz(_);E.iconName&&E.prefix&&(L=E.iconName,M=E.prefix)}if(L&&!k&&(!i||i.getAttribute(u4)!==M||i.getAttribute(H4)!==P)){c.setAttribute(e,P),i&&c.removeChild(i);var R=Tz(),$=R.extra;$.attributes[F3]=a,I3(L,M).then(function(j){var o2=C4(g(g({},R),{},{icons:{main:j,mask:M4()},prefix:M,iconName:P,extra:$,watchable:!0})),c2=q.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(c2,c.firstChild):c.appendChild(c2),c2.outerHTML=o2.map(function(vs){return f1(vs)}).join(`