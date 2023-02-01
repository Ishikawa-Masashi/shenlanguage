"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Keyboard Key",s={unversionedId:"components/data-display/kbd/index",id:"components/data-display/kbd/index",title:"Keyboard Key",description:"The keyboard key component exists to show which key or combination of keys",source:"@site/content/docs/components/data-display/kbd/index.mdx",sourceDirName:"components/data-display/kbd",slug:"/components/data-display/kbd/",permalink:"/docs/components/data-display/kbd/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/docs/components/data-display/divider/theming"},next:{title:"Theming",permalink:"/docs/components/data-display/kbd/theming"}},l={},p=[{value:"Import",id:"import",level:2},{value:"Guideline",id:"guideline",level:2},{value:"Modifier",id:"modifier",level:2}],c=(d="ComponentLinks",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keyboard-key"},"Keyboard Key"),(0,a.kt)("p",null,"The keyboard key component exists to show which key or combination of keys\nperforms a given action."),(0,a.kt)(c,{github:{package:"layout"},npm:{package:"@chakra-ui/layout"},mdxType:"ComponentLinks"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Kbd } from "@chakra-ui/react";\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live sm",live:!0,sm:!0},"<span>\n  <Kbd>shift</Kbd> + <Kbd>H</Kbd>\n</span>\n")),(0,a.kt)("h2",{id:"guideline"},"Guideline"),(0,a.kt)("p",null,"All shortcuts should do their best to match what appears on the user\u2019s keyboard."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All single letters A-Z are uppercase."),(0,a.kt)("li",{parentName:"ul"},"For non-letter keys such as enter, esc and shift, stick to lowercase."),(0,a.kt)("li",{parentName:"ul"},"Use the arrow symbol as opposed to spelling things out.")),(0,a.kt)("h2",{id:"modifier"},"Modifier"),(0,a.kt)("p",null,"The only punctuation you should need is the ",(0,a.kt)("strong",{parentName:"p"},"+")," to indicate that a combination\nof keys will activate the shortcut."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live sm",live:!0,sm:!0},"<span>\n  <Kbd>shift</Kbd> + <Kbd>H</Kbd>\n</span>\n")),(0,a.kt)("p",null,'For a sequence of keys where one must follow the other, write "then" in between.\nStick to lowercase to match the non-letter keys.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live sm",live:!0,sm:!0},"<span>\n  <Kbd>shift</Kbd> then <Kbd>H</Kbd>\n</span>\n")),(0,a.kt)("p",null,'If two different keys can execute the same action or the shortcut itself may\nlook different on the user\u2019s keyboard, write "or" in between.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live sm",live:!0,sm:!0},"<span>\n  <Kbd>alt</Kbd> or <Kbd>option</Kbd>\n</span>\n")))}m.isMDXComponent=!0}}]);