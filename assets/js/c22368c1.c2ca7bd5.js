"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[1077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Portals and z-index",description:"Fighting the z-index war with Chakra Portal",author:"mrmckeb"},o=void 0,l={unversionedId:"recipes/z-index",id:"recipes/z-index",title:"Portals and z-index",description:"Fighting the z-index war with Chakra Portal",source:"@site/content/community/recipes/z-index.mdx",sourceDirName:"recipes",slug:"/recipes/z-index",permalink:"/shenlanguage/community/recipes/z-index",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"Portals and z-index",description:"Fighting the z-index war with Chakra Portal",author:"mrmckeb"},sidebar:"defaultSidebar",previous:{title:"Using Fonts",permalink:"/shenlanguage/community/recipes/using-fonts"}},s={},c=[{value:"What&#39;s wrong with z-index?",id:"whats-wrong-with-z-index",level:2},{value:"Stacking contexts",id:"stacking-contexts",level:3},{value:"Chakra Portal to the rescue",id:"chakra-portal-to-the-rescue",level:2},{value:"Can I still use z-index alongside Portals?",id:"can-i-still-use-z-index-alongside-portals",level:3},{value:"Further reading",id:"further-reading",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every UI has stackable layers and it is important to have control over how these\nlayers play together. Some examples of stackable layers are tooltips, modals,\npopovers, selects, dropdowns, and menus."),(0,i.kt)("p",null,'The issues that come up across the usage of these layers are related to z-index\nand visibility handling, in other words, "what layer goes on top?"'),(0,i.kt)("h2",{id:"whats-wrong-with-z-index"},"What's wrong with z-index?"),(0,i.kt)("p",null,"You might have encountered this if you've worked in codebases with\n",(0,i.kt)("inlineCode",{parentName:"p"},"z-index: 9999"),". This technique is an attempt to ensure than an element is\nalways on top of all other elements."),(0,i.kt)("p",null,"But this method isn't as safe as you might think:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It introduces scaling issues, which you can manage with global values (such as\na ",(0,i.kt)("a",{parentName:"li",href:"/docs/styled-system/theming/default-theme#z-index-values"},"theme"),")."),(0,i.kt)("li",{parentName:"ul"},"Components are still constrained and impacted by stacking contexts.")),(0,i.kt)("h3",{id:"stacking-contexts"},"Stacking contexts"),(0,i.kt)("p",null,"A stacking context can be created in many ways, and here are just a few\nexamples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Element with a ",(0,i.kt)("inlineCode",{parentName:"li"},"position: absolute")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"position: relative")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"z-index"),"\nvalue other than ",(0,i.kt)("inlineCode",{parentName:"li"},"auto"),"."),(0,i.kt)("li",{parentName:"ul"},"An element with an ",(0,i.kt)("inlineCode",{parentName:"li"},"opacity")," value less than ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},"An element with a ",(0,i.kt)("inlineCode",{parentName:"li"},"transform")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"filter")," applied."),(0,i.kt)("li",{parentName:"ul"},"A child of a flexbox or grid container with a ",(0,i.kt)("inlineCode",{parentName:"li"},"z-index")," other than ",(0,i.kt)("inlineCode",{parentName:"li"},"auto"),".")),(0,i.kt)("p",null,"Once a stacking context is created, the ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index")," rules of the any child\nstacking context(s) now only have meaning in this parent."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We have some links at the end of this page to help you learn more about\nstacking contexts.")),(0,i.kt)("h2",{id:"chakra-portal-to-the-rescue"},"Chakra Portal to the rescue"),(0,i.kt)("p",null,"An alternative to ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index")," is to use the DOM's natural stacking order to our\nadvantage. ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/portals.html"},"React's Portals")," allow us to\ninsert a child into a different location in the document, whilst not affecting\nother behaviours in React such as event bubbling."),(0,i.kt)("p",null,"Chakra Portal implementation allows for nesting, and defaults to inserting\nchildren at the end of ",(0,i.kt)("inlineCode",{parentName:"p"},"document.body"),"."),(0,i.kt)("p",null,"With this approach, you can create a stacking context for your application, and\nbe certain that any children you render with Portal will always appear on top of\neverything else in your application, regardless of child stacking contexts."),(0,i.kt)("p",null,"This is particularly useful for components like modals and toast notifications."),(0,i.kt)("h3",{id:"can-i-still-use-z-index-alongside-portals"},"Can I still use z-index alongside Portals?"),(0,i.kt)("p",null,"Yes, there are many cases where this will make sense."),(0,i.kt)("p",null,"As a general rule, we recommend not exceeding ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index")," values of more than ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", and to use stacking contexts to combat more complex stacking issues."),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,"If you're interested in learning more about ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index")," and stacking contexts,\ncheck out these great resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index"},"Understanding z-index (MDN)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context"},"The stacking context (MDN)"))))}p.isMDXComponent=!0}}]);