import{B as n,R as t,S as r,i as e,n as a,A as o,b as i,c as l,d as s,j as c,a as u,t as d,f as g,h as p,e as f,l as v,N as h,g as m,z as w,T as O,r as x,U as y,J as b,K as A,M as F,I as D,F as T,G as $,V as B}from"./index-DKNg4Pom.js";const C=[];function L(r,e=n){let a;const o=new Set;function i(n){if(t(r,n)&&(r=n,a)){const n=!C.length;for(const n of o)n[1](),C.push(n,r);if(n){for(let n=0;C.length>n;n+=2)C[n][0](C[n+1]);C.length=0}}}function l(n){i(n(r))}return{set:i,update:l,subscribe(t,s=n){const c=[t,s];return o.add(c),1===o.size&&(a=e(i,l)||n),t(r),()=>{o.delete(c),0===o.size&&a&&(a(),a=null)}}}}function M(t){let r,e;return{c(){r=o("svg"),e=o("path"),i(e,"fill","currentColor"),i(e,"d","M10 16h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 3.7a.996.996 0 0 0-1.41 0L6.71 8.29c-.63.63-.19 1.71.7 1.71H9v5c0 .55.45 1 1 1zm-4 2h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1z"),i(r,"class","upload-icon"),i(r,"xmlns","http://www.w3.org/2000/svg"),i(r,"width","24"),i(r,"height","24"),i(r,"viewBox","0 0 24 24")},m(n,t){l(n,r,t),s(r,e)},p:n,i:n,o:n,d(n){n&&c(r)}}}class S extends r{constructor(n){super(),e(this,n,null,M,a,{})}}function j(n){let t,r,e,a,o,s;const u=[H,z],O=[];function x(n,t){return n[3]?0:1}return r=x(n),e=O[r]=u[r](n),{c(){t=f("div"),e.c(),i(t,"class","carta-drop-overlay"),i(t,"role","button"),i(t,"tabindex","0"),i(t,"aria-label","Drop files to upload")},m(e,i){l(e,t,i),O[r].m(t,null),a=1,o||(s=[v(t,"dragover",h(n[7])),v(t,"dragenter",n[8]),v(t,"dragleave",n[9]),v(t,"drop",(function(){y(n[2])&&n[2].apply(this,arguments)}))],o=1)},p(a,o){let i=r;r=x(n=a),r===i?O[r].p(n,o):(m(),g(O[i],1,1,(()=>{O[i]=null})),p(),e=O[r],e?e.p(n,o):(e=O[r]=u[r](n),e.c()),d(e,1),e.m(t,null))},i(n){a||(d(e),a=1)},o(n){g(e),a=0},d(n){n&&c(t),O[r].d(),o=0,w(s)}}}function z(t){let r,e,a,o;return a=new S({}),{c(){r=f("div"),e=f("div"),b(a.t.fragment),i(e,"class","carta-drop-overlay-content"),i(r,"class","carta-drop-overlay-container")},m(n,t){l(n,r,t),s(r,e),A(a,e,null),o=1},p:n,i(n){o||(d(a.t.fragment,n),o=1)},o(n){g(a.t.fragment,n),o=0},d(n){n&&c(r),F(a)}}}function H(n){let t,r,e;var a=n[3];return a&&(t=D(a,{})),{c(){t&&b(t.t.fragment),r=u()},m(n,a){t&&A(t,n,a),l(n,r,a),e=1},p(n,e){if(8&e&&a!==(a=n[3])){if(t){m();const n=t;g(n.t.fragment,1,0,(()=>{F(n,1)})),p()}a?(t=D(a,{}),b(t.t.fragment),d(t.t.fragment,1),A(t,r.parentNode,r)):t=null}},i(n){e||(t&&d(t.t.fragment,n),e=1)},o(n){t&&g(t.t.fragment,n),e=0},d(n){n&&c(r),t&&F(t,n)}}}function Z(n){let t,r,e=0!=n[3]&&(n[4]||n[5])&&j(n);return{c(){e&&e.c(),t=u()},m(n,a){e&&e.m(n,a),l(n,t,a),r=1},p(n,[r]){0!=n[3]&&(n[4]||n[5])?e?(e.p(n,r),56&r&&d(e,1)):(e=j(n),e.c(),d(e,1),e.m(t.parentNode,t)):e&&(m(),g(e,1,1,(()=>{e=null})),p())},i(n){r||(d(e),r=1)},o(n){g(e),r=0},d(n){n&&c(t),e&&e.d(n)}}}function k(t,r,e){let a,o,i=n,l=()=>(i(),i=O(d,(n=>e(4,a=n))),d),s=n,c=()=>(s(),s=O(g,(n=>e(5,o=n))),g);t.t.l.push((()=>i())),t.t.l.push((()=>s()));let{carta:u}=r,{draggingOverTextArea:d}=r;l();let{draggingOverOverlay:g}=r;c();let{handleDrop:p}=r,{dropOverlay:f}=r;return t.u=n=>{"carta"in n&&e(6,u=n.carta),"draggingOverTextArea"in n&&l(e(0,d=n.draggingOverTextArea)),"draggingOverOverlay"in n&&c(e(1,g=n.draggingOverOverlay)),"handleDrop"in n&&e(2,p=n.handleDrop),"dropOverlay"in n&&e(3,f=n.dropOverlay)},[d,g,p,f,a,o,u,function(n){x.call(this,t,n)},()=>g.set(1),()=>g.set(0)]}class U extends r{constructor(n){super(),e(this,n,k,Z,a,{carta:6,draggingOverTextArea:0,draggingOverOverlay:1,handleDrop:2,dropOverlay:3})}}function G(t){let r,e;return{c(){r=o("svg"),e=o("path"),i(e,"fill","none"),i(e,"stroke","currentColor"),i(e,"stroke-width","2"),i(e,"d","m22 12l-9 9c-6 6-15-3-9-9l9-9c4-4 10 2 6 6l-9 9c-2 2-5-1-3-3l9-9"),i(r,"class","attach-icon"),i(r,"xmlns","http://www.w3.org/2000/svg"),i(r,"width","16"),i(r,"height","16"),i(r,"viewBox","0 0 24 24")},m(n,t){l(n,r,t),s(r,e)},p:n,i:n,o:n,d(n){n&&c(r)}}}class I extends r{constructor(n){super(),e(this,n,null,G,a,{})}}function J(t){let r,e,a,u;return{c(){r=o("svg"),e=o("g"),a=o("path"),u=o("path"),i(a,"fill-rule","evenodd"),i(a,"d","M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"),i(a,"clip-rule","evenodd"),i(a,"opacity",".2"),i(u,"d","M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2Z"),i(e,"fill","currentColor"),i(r,"class","spinner-icon"),i(r,"xmlns","http://www.w3.org/2000/svg"),i(r,"width","24"),i(r,"height","24"),i(r,"viewBox","0 0 24 24")},m(n,t){l(n,r,t),s(r,e),s(e,a),s(e,u)},p:n,i:n,o:n,d(n){n&&c(r)}}}class K extends r{constructor(n){super(),e(this,n,null,J,a,{})}}function N(n){let t,r,e,a;const o=[V,R],i=[];function s(n,t){return n[1]?0:n[2].length>0?1:-1}return~(t=s(n))&&(r=i[t]=o[t](n)),{c(){r&&r.c(),e=u()},m(n,r){~t&&i[t].m(n,r),l(n,e,r),a=1},p(n,a){let l=t;t=s(n),t===l?~t&&i[t].p(n,a):(r&&(m(),g(i[l],1,1,(()=>{i[l]=null})),p()),~t?(r=i[t],r?r.p(n,a):(r=i[t]=o[t](n),r.c()),d(r,1),r.m(e.parentNode,e)):r=null)},i(n){a||(d(r),a=1)},o(n){g(r),a=0},d(n){n&&c(e),~t&&i[t].d(n)}}}function R(n){let t,r,e,a,o,u,p,v,h=n[2].length+"",m=n[2].length>1?"s":"";return r=new K({}),{c(){t=f("div"),b(r.t.fragment),e=f("span"),a=T("Loading "),o=T(h),u=T(" file"),p=T(m),i(t,"class","carta-loading-overlay")},m(n,i){l(n,t,i),A(r,t,null),s(t,e),s(e,a),s(e,o),s(e,u),s(e,p),v=1},p(n,t){(!v||4&t)&&h!==(h=n[2].length+"")&&$(o,h),(!v||4&t)&&m!==(m=n[2].length>1?"s":"")&&$(p,m)},i(n){v||(d(r.t.fragment,n),v=1)},o(n){g(r.t.fragment,n),v=0},d(n){n&&c(t),F(r)}}}function V(n){let t,r,e;var a=n[1];function o(n,t){return{v:{uploadingFiles:n[2]}}}return a&&(t=D(a,o(n))),{c(){t&&b(t.t.fragment),r=u()},m(n,a){t&&A(t,n,a),l(n,r,a),e=1},p(n,e){if(2&e&&a!==(a=n[1])){if(t){m();const n=t;g(n.t.fragment,1,0,(()=>{F(n,1)})),p()}a?(t=D(a,o(n)),b(t.t.fragment),d(t.t.fragment,1),A(t,r.parentNode,r)):t=null}else if(a){const r={};4&e&&(r.uploadingFiles=n[2]),t.h(r)}},i(n){e||(t&&d(t.t.fragment,n),e=1)},o(n){t&&g(t.t.fragment,n),e=0},d(n){n&&c(r),t&&F(t,n)}}}function q(n){let t,r,e=0!=n[1]&&N(n);return{c(){e&&e.c(),t=u()},m(n,a){e&&e.m(n,a),l(n,t,a),r=1},p(n,[r]){0!=n[1]?e?(e.p(n,r),2&r&&d(e,1)):(e=N(n),e.c(),d(e,1),e.m(t.parentNode,t)):e&&(m(),g(e,1,1,(()=>{e=null})),p())},i(n){r||(d(e),r=1)},o(n){g(e),r=0},d(n){n&&c(t),e&&e.d(n)}}}function E(t,r,e){let a,o=n,i=()=>(o(),o=O(s,(n=>e(2,a=n))),s);t.t.l.push((()=>o()));let{carta:l}=r,{uploadingFiles:s}=r;i();let{loadingOverlay:c}=r;return t.u=n=>{"carta"in n&&e(3,l=n.carta),"uploadingFiles"in n&&i(e(0,s=n.uploadingFiles)),"loadingOverlay"in n&&e(1,c=n.loadingOverlay)},[s,c,a,l]}class P extends r{constructor(n){super(),e(this,n,E,q,a,{carta:3,uploadingFiles:0,loadingOverlay:1})}}const Q=["image/png","image/jpeg","image/gif","image/svg+xml"],W=n=>{let t;const r=n.supportedMimeTypes||Q,e=L(0),a=L(0),o=L([]),i=L(0);async function l(e){if(!r.includes(e.type))return;if(!t?.input)return;const a=t.input.textarea,i=`[Uploading ${e.name}](loading)`;t.input.insertAt(t.input.textarea.selectionStart,i),t.input.update(),o.update((n=>[...n,e]));const l=await n.upload(e);o.update((n=>n.filter((n=>n!==e))));const s=t.input.textarea.value.indexOf(i);if(-1!==s&&t.input.removeAt(s,i.length),t.input.update(),!l)return;const c=Q.includes(e.type)?`![${e.name}](${l})`:`[${e.name}](${l})`;t.input.insertAt(s,c),t.input.update(),t.input.history.saveState(a.value,a.selectionStart)}function s(n){n.preventDefault(),a.set(0),e.set(0);const t=n.dataTransfer?.files;if(t)for(const n of t)l(n)}return e.subscribe((n=>i.set(n||B(a)))),a.subscribe((n=>i.set(n||B(e)))),i.subscribe((n=>{t&&t.element&&(n?t.element.classList.add("dragging-attachment"):t.element.classList.remove("dragging-attachment"))})),{onLoad({carta:n}){t=n},listeners:[["drop",s,0],["dragenter",()=>e.set(1)],["dragleave",()=>e.set(0)],["dragover",n=>n.preventDefault()],["paste",n=>{const t=n.clipboardData?.items;if(!t)return;const r=Array.from(t);for(const t of r)if("file"===t.kind){const r=t.getAsFile();if(!r)continue;n.preventDefault(),l(r)}},0]],components:[{component:U,v:{draggingOverTextArea:e,draggingOverOverlay:a,handleDrop:s,dropOverlay:n.dropOverlay},parent:"input"},{component:P,v:{uploadingFiles:o,loadingOverlay:n.loadingOverlay},parent:"input"}],icons:n.disableIcon?[]:[{component:I,action(){const n=document.createElement("input");n.type="file",n.multiple=1,n.accept=r.join(", "),n.onchange=n=>{const t=n.target?.files;if(t)for(const n of t)l(n)},n.click()},id:"attach",label:"Attach file"}]}};export{W as default};
