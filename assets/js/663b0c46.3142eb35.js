"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,c(c({ref:t},s),{},{components:n})):o.createElement(f,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},c="Code",l={unversionedId:"components/data-display/code/index",id:"components/data-display/code/index",title:"Code",description:"Code is a component used to display inline code. It is composed from the Box",source:"@site/content/docs/components/data-display/code/index.mdx",sourceDirName:"components/data-display/code",slug:"/components/data-display/code/",permalink:"/shenlanguage/docs/components/data-display/code/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/shenlanguage/docs/components/data-display/badge/theming"},next:{title:"Theming",permalink:"/shenlanguage/docs/components/data-display/code/theming"}},i={},p=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Colors",id:"colors",level:3},{value:"Props",id:"props",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=s("ComponentLinks"),m=s("PropsTable"),u={toc:p};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code"},"Code"),(0,r.kt)("p",null,"Code is a component used to display inline code. It is composed from the Box\ncomponent with a font family of ",(0,r.kt)("inlineCode",{parentName:"p"},"mono")," for displaying code."),(0,r.kt)(d,{github:{package:"layout"},npm:{package:"@chakra-ui/layout"},mdxType:"ComponentLinks"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Code } from '@chakra-ui/react';\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Code>Hello world</Code>\n")),(0,r.kt)("h3",{id:"colors"},"Colors"),(0,r.kt)("p",null,"You can change the color scheme of the component by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"colorScheme"),"\nprop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stack direction='row'>\n  <Code children='console.log(welcome)' />\n  <Code colorScheme='red' children=\"var chakra = 'awesome!'\" />\n  <Code colorScheme='yellow' children='npm install chakra' />\n</Stack>\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(m,{of:"Code",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);