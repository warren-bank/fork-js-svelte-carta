import{s as nt,e as n,a as p,H as r,c as l,l as c,g as o,b as k,m as d,f as t,p as i,i as a,n as xe}from"./scheduler.MTTyNl1s.js";import{S as lt,i as pt}from"./index.DrAlApqI.js";function ot(Ve){let u,Ce='<a href="#cartarender"><code>Carta.render</code></a>',G,C,ye="Allows you to render Markdown asynchronously.",I,y,N,We=`<code class="language-ts"><span class="token keyword">const</span> carta <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Carta</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
	<span class="token comment">/* ... */</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> markdown <span class="token operator">=</span> <span class="token string">'# Some Markdown'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token keyword">await</span> carta<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>markdown<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,F,h,Te='<a href="#cartarenderssr"><code>Carta.renderSSR</code></a>',J,T,He="Allows you to render Markdown synchronously, suitable for Server Side Rendering. Note that particular extensions that add content asynchronously will not work in this configuration.",K,H,O,Xe=`<code class="language-ts"><span class="token keyword">const</span> carta <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Carta</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
	<span class="token comment">/* ... */</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> markdown <span class="token operator">=</span> <span class="token string">'# Some Markdown'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> carta<span class="token punctuation">.</span><span class="token function">renderSSR</span><span class="token punctuation">(</span>markdown<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,Q,m,Me='<a href="#cartabindtocaret"><code>Carta.bindToCaret</code></a>',V,M,Le="Svelte action that allows you to bind a specific element to the caret position. Used, for example, in <code>plugin-emoji</code> and <code>plugin-slash</code>.",W,L,X,Ye=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">let</span> carta<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">use:</span>carta.bindToCaret</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- ... --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,Y,f,Pe='<a href="#cartahighlighter"><code>Carta.highlighter</code></a>',Z,P,Ee="Get the Shiki highlighter.",$,E,ee,Ze=`<code class="language-ts"><span class="token keyword">const</span> highlighter <span class="token operator">=</span> <span class="token keyword">await</span> carta<span class="token punctuation">.</span><span class="token function">highlighter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> userTheme <span class="token operator">=</span> carta<span class="token punctuation">.</span>theme<span class="token punctuation">;</span></code>`,te,b,be="Here are some other highlight related utilities:",se,v,Re='<a href="#isbundlelanguage"><code>isBundleLanguage</code></a>',ae,R,Se="Checks if a language is a bundled language.",ne,S,le,$e='<code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> isBundleLanguage <span class="token operator">=</span> <span class="token punctuation">(</span>lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> lang <span class="token keyword">is</span> BundledLanguage<span class="token punctuation">;</span></code>',pe,w,Be='<a href="#isbundletheme"><code>isBundleTheme</code></a>',oe,B,je="Checks if a theme is a bundled theme.",ce,j,ie,et='<code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> isBundleTheme <span class="token operator">=</span> <span class="token punctuation">(</span>theme<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> theme <span class="token keyword">is</span> BundledTheme<span class="token punctuation">;</span></code>',ue,_,De='<a href="#isdualtheme"><code>isDualTheme</code></a>',re,D,ze="Checks if a theme is a dual theme.",ke,z,de,tt='<code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> isDualTheme <span class="token operator">=</span> <span class="token punctuation">(</span>theme<span class="token operator">:</span> Theme <span class="token operator">|</span> DualTheme<span class="token punctuation">)</span><span class="token operator">:</span> theme <span class="token keyword">is</span> DualTheme<span class="token punctuation">;</span></code>',he,g,Ae='<a href="#issingletheme"><code>isSingleTheme</code></a>',me,A,fe,st='<code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> isSingleTheme <span class="token operator">=</span> <span class="token punctuation">(</span>theme<span class="token operator">:</span> Theme <span class="token operator">|</span> DualTheme<span class="token punctuation">)</span><span class="token operator">:</span> theme <span class="token keyword">is</span> Theme<span class="token punctuation">;</span></code>',ve,x,Ue='<a href="#isthemeregistration"><code>isThemeRegistration</code></a>',we,U,qe="Checks if a theme is a theme registration.",_e,q,ge,at='<code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> isThemeRegistration <span class="token operator">=</span> <span class="token punctuation">(</span>theme<span class="token operator">:</span> Theme<span class="token punctuation">)</span><span class="token operator">:</span> theme <span class="token keyword">is</span> ThemeRegistration<span class="token punctuation">;</span></code>';return{c(){u=n("h2"),u.innerHTML=Ce,G=p(),C=n("p"),C.textContent=ye,I=p(),y=n("pre"),N=new r(!1),F=p(),h=n("h2"),h.innerHTML=Te,J=p(),T=n("p"),T.textContent=He,K=p(),H=n("pre"),O=new r(!1),Q=p(),m=n("h2"),m.innerHTML=Me,V=p(),M=n("p"),M.innerHTML=Le,W=p(),L=n("pre"),X=new r(!1),Y=p(),f=n("h2"),f.innerHTML=Pe,Z=p(),P=n("p"),P.textContent=Ee,$=p(),E=n("pre"),ee=new r(!1),te=p(),b=n("p"),b.textContent=be,se=p(),v=n("h3"),v.innerHTML=Re,ae=p(),R=n("p"),R.textContent=Se,ne=p(),S=n("pre"),le=new r(!1),pe=p(),w=n("h3"),w.innerHTML=Be,oe=p(),B=n("p"),B.textContent=je,ce=p(),j=n("pre"),ie=new r(!1),ue=p(),_=n("h3"),_.innerHTML=De,re=p(),D=n("p"),D.textContent=ze,ke=p(),z=n("pre"),de=new r(!1),he=p(),g=n("h3"),g.innerHTML=Ae,me=p(),A=n("pre"),fe=new r(!1),ve=p(),x=n("h3"),x.innerHTML=Ue,we=p(),U=n("p"),U.textContent=qe,_e=p(),q=n("pre"),ge=new r(!1),this.h()},l(e){u=l(e,"H2",{id:!0,"data-svelte-h":!0}),c(u)!=="svelte-1y6zwes"&&(u.innerHTML=Ce),G=o(e),C=l(e,"P",{"data-svelte-h":!0}),c(C)!=="svelte-op5yrc"&&(C.textContent=ye),I=o(e),y=l(e,"PRE",{class:!0});var s=k(y);N=d(s,!1),s.forEach(t),F=o(e),h=l(e,"H2",{id:!0,"data-svelte-h":!0}),c(h)!=="svelte-1529vv2"&&(h.innerHTML=Te),J=o(e),T=l(e,"P",{"data-svelte-h":!0}),c(T)!=="svelte-1p2jyea"&&(T.textContent=He),K=o(e),H=l(e,"PRE",{class:!0});var Ge=k(H);O=d(Ge,!1),Ge.forEach(t),Q=o(e),m=l(e,"H2",{id:!0,"data-svelte-h":!0}),c(m)!=="svelte-14p8c6l"&&(m.innerHTML=Me),V=o(e),M=l(e,"P",{"data-svelte-h":!0}),c(M)!=="svelte-w29tmn"&&(M.innerHTML=Le),W=o(e),L=l(e,"PRE",{class:!0});var Ie=k(L);X=d(Ie,!1),Ie.forEach(t),Y=o(e),f=l(e,"H2",{id:!0,"data-svelte-h":!0}),c(f)!=="svelte-1h3kenj"&&(f.innerHTML=Pe),Z=o(e),P=l(e,"P",{"data-svelte-h":!0}),c(P)!=="svelte-oehzko"&&(P.textContent=Ee),$=o(e),E=l(e,"PRE",{class:!0});var Ne=k(E);ee=d(Ne,!1),Ne.forEach(t),te=o(e),b=l(e,"P",{"data-svelte-h":!0}),c(b)!=="svelte-nxat9v"&&(b.textContent=be),se=o(e),v=l(e,"H3",{id:!0,"data-svelte-h":!0}),c(v)!=="svelte-106ufid"&&(v.innerHTML=Re),ae=o(e),R=l(e,"P",{"data-svelte-h":!0}),c(R)!=="svelte-19545xu"&&(R.textContent=Se),ne=o(e),S=l(e,"PRE",{class:!0});var Fe=k(S);le=d(Fe,!1),Fe.forEach(t),pe=o(e),w=l(e,"H3",{id:!0,"data-svelte-h":!0}),c(w)!=="svelte-19a852s"&&(w.innerHTML=Be),oe=o(e),B=l(e,"P",{"data-svelte-h":!0}),c(B)!=="svelte-zym92i"&&(B.textContent=je),ce=o(e),j=l(e,"PRE",{class:!0});var Je=k(j);ie=d(Je,!1),Je.forEach(t),ue=o(e),_=l(e,"H3",{id:!0,"data-svelte-h":!0}),c(_)!=="svelte-1l7epkq"&&(_.innerHTML=De),re=o(e),D=l(e,"P",{"data-svelte-h":!0}),c(D)!=="svelte-1kj1hvu"&&(D.textContent=ze),ke=o(e),z=l(e,"PRE",{class:!0});var Ke=k(z);de=d(Ke,!1),Ke.forEach(t),he=o(e),g=l(e,"H3",{id:!0,"data-svelte-h":!0}),c(g)!=="svelte-h5whms"&&(g.innerHTML=Ae),me=o(e),A=l(e,"PRE",{class:!0});var Oe=k(A);fe=d(Oe,!1),Oe.forEach(t),ve=o(e),x=l(e,"H3",{id:!0,"data-svelte-h":!0}),c(x)!=="svelte-14cn3xx"&&(x.innerHTML=Ue),we=o(e),U=l(e,"P",{"data-svelte-h":!0}),c(U)!=="svelte-2ggm5b"&&(U.textContent=qe),_e=o(e),q=l(e,"PRE",{class:!0});var Qe=k(q);ge=d(Qe,!1),Qe.forEach(t),this.h()},h(){i(u,"id","cartarender"),N.a=null,i(y,"class","language-ts"),i(h,"id","cartarenderssr"),O.a=null,i(H,"class","language-ts"),i(m,"id","cartabindtocaret"),X.a=null,i(L,"class","language-svelte"),i(f,"id","cartahighlighter"),ee.a=null,i(E,"class","language-ts"),i(v,"id","isbundlelanguage"),le.a=null,i(S,"class","language-ts"),i(w,"id","isbundletheme"),ie.a=null,i(j,"class","language-ts"),i(_,"id","isdualtheme"),de.a=null,i(z,"class","language-ts"),i(g,"id","issingletheme"),fe.a=null,i(A,"class","language-ts"),i(x,"id","isthemeregistration"),ge.a=null,i(q,"class","language-ts")},m(e,s){a(e,u,s),a(e,G,s),a(e,C,s),a(e,I,s),a(e,y,s),N.m(We,y),a(e,F,s),a(e,h,s),a(e,J,s),a(e,T,s),a(e,K,s),a(e,H,s),O.m(Xe,H),a(e,Q,s),a(e,m,s),a(e,V,s),a(e,M,s),a(e,W,s),a(e,L,s),X.m(Ye,L),a(e,Y,s),a(e,f,s),a(e,Z,s),a(e,P,s),a(e,$,s),a(e,E,s),ee.m(Ze,E),a(e,te,s),a(e,b,s),a(e,se,s),a(e,v,s),a(e,ae,s),a(e,R,s),a(e,ne,s),a(e,S,s),le.m($e,S),a(e,pe,s),a(e,w,s),a(e,oe,s),a(e,B,s),a(e,ce,s),a(e,j,s),ie.m(et,j),a(e,ue,s),a(e,_,s),a(e,re,s),a(e,D,s),a(e,ke,s),a(e,z,s),de.m(tt,z),a(e,he,s),a(e,g,s),a(e,me,s),a(e,A,s),fe.m(st,A),a(e,ve,s),a(e,x,s),a(e,we,s),a(e,U,s),a(e,_e,s),a(e,q,s),ge.m(at,q)},p:xe,i:xe,o:xe,d(e){e&&(t(u),t(G),t(C),t(I),t(y),t(F),t(h),t(J),t(T),t(K),t(H),t(Q),t(m),t(V),t(M),t(W),t(L),t(Y),t(f),t(Z),t(P),t($),t(E),t(te),t(b),t(se),t(v),t(ae),t(R),t(ne),t(S),t(pe),t(w),t(oe),t(B),t(ce),t(j),t(ue),t(_),t(re),t(D),t(ke),t(z),t(he),t(g),t(me),t(A),t(ve),t(x),t(we),t(U),t(_e),t(q))}}}const ut={section:"API",title:"Utilities"};class rt extends lt{constructor(u){super(),pt(this,u,null,ot,nt,{})}}export{rt as default,ut as metadata};
