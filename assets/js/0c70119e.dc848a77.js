"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[9159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"How to install and set up Chakra UI in your project",tags:["getting-started","installation"],sidebar_position:10},i="Installation",s={unversionedId:"index",id:"index",title:"Installation",description:"How to install and set up Chakra UI in your project",source:"@site/content/getting-started/index.mdx",sourceDirName:".",slug:"/",permalink:"/getting-started/",draft:!1,tags:[{label:"getting-started",permalink:"/getting-started/tags/getting-started"},{label:"installation",permalink:"/getting-started/tags/installation"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",sidebarPosition:10,frontMatter:{description:"How to install and set up Chakra UI in your project",tags:["getting-started","installation"],sidebar_position:10},sidebar:"defaultSidebar",next:{title:"Create React App",permalink:"/getting-started/frameworks/cra-guide"}},l={},p=[{value:"Framework Guide",id:"framework-guide",level:2},{value:"Learn",id:"learn",level:2},{value:"Contribute",id:"contribute",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=c("FrameworkLinks"),d=c("FeaturesCourses"),m=c("JoinCommunityCards"),k={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Version 2 of Chakra UI is only compatible with ",(0,a.kt)("strong",{parentName:"p"},"React 18"),". If you are still\nneeding to use React 17 or earlier, please use\n",(0,a.kt)("a",{parentName:"p",href:"https://v1.chakra-ui.com/guides/first-steps"},"version 1 of Chakra UI"),".")),(0,a.kt)("p",null,"To use Chakra UI in your project, run one of the following commands in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion\n")),(0,a.kt)("p",null,"After installing Chakra UI, you need to set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," at the root\nof your application. This can be either in your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.jsx"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"App.jsx")," depending on the framework you use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\n\n// 1. import `ChakraProvider` component\nimport { ChakraProvider } from '@chakra-ui/react';\n\nfunction App() {\n  // 2. Wrap ChakraProvider at the root of your app\n  return (\n    <ChakraProvider>\n      <TheRestOfYourApplication />\n    </ChakraProvider>\n  );\n}\n")),(0,a.kt)("h2",{id:"framework-guide"},"Framework Guide"),(0,a.kt)("p",null,"Chakra UI works in your favorite framework. We've put together step-by-step\nguides for these frameworks:"),(0,a.kt)(u,{mdxType:"FrameworkLinks"}),(0,a.kt)("h2",{id:"learn"},"Learn"),(0,a.kt)("p",null,"Watch our official courses and dive into dozens of videos that will teach you\neverything you need to know about Chakra UI, from basics to advanced concepts."),(0,a.kt)(d,{mdxType:"FeaturesCourses"}),(0,a.kt)("h2",{id:"contribute"},"Contribute"),(0,a.kt)("p",null,"Whether you're a beginner or advanced Chakra UI user, joining our community is\nthe best way to connect with like-minded people who build great products with\nthe library."),(0,a.kt)(m,{mdxType:"JoinCommunityCards"}))}f.isMDXComponent=!0}}]);