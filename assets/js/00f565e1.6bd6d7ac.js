"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[7726],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=s,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||a;return t?n.createElement(d,o(o({ref:r},c),{},{components:t})):n.createElement(d,o({ref:r},c))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82270:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(87462),s=(t(67294),t(3905));const a={},o="Progress",i={unversionedId:"components/feedback/progress/index",id:"components/feedback/progress/index",title:"Progress",description:"Progress is used to display the progress status for a task that takes a long",source:"@site/content/docs/components/feedback/progress/index.mdx",sourceDirName:"components/feedback/progress",slug:"/components/feedback/progress/",permalink:"/shenlanguage/docs/components/feedback/progress/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/shenlanguage/docs/components/feedback/circular-progress/theming"},next:{title:"Theming",permalink:"/shenlanguage/docs/components/feedback/progress/theming"}},l={},p=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Progress with Stripe",id:"progress-with-stripe",level:3},{value:"Progress sizes",id:"progress-sizes",level:3},{value:"Progress color scheme",id:"progress-color-scheme",level:3},{value:"Animated Progress",id:"animated-progress",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Props",id:"props",level:2}],c=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",r)},g=c("ComponentLinks"),u=c("PropsTable"),m={toc:p};function d(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"progress"},"Progress"),(0,s.kt)("p",null,"Progress is used to display the progress status for a task that takes a long\ntime or consists of several steps."),(0,s.kt)(g,{github:{package:"progress"},npm:{package:"@chakra-ui/progress"},theme:{componentName:"progress"},mdxType:"ComponentLinks"}),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { Progress } from '@chakra-ui/react';\n")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Progress value={80} />\n")),(0,s.kt)("h3",{id:"progress-with-stripe"},"Progress with Stripe"),(0,s.kt)("p",null,"You can add ",(0,s.kt)("inlineCode",{parentName:"p"},"hasStripe")," prop to any progress bar to apply a stripe via a CSS\ngradient over the progress bar\u2019s background color."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Progress hasStripe value={64} />\n")),(0,s.kt)("h3",{id:"progress-sizes"},"Progress sizes"),(0,s.kt)("p",null,"There are two ways you can increase the height of the progress bar:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You can add ",(0,s.kt)("inlineCode",{parentName:"li"},"size")," prop to increase the height of the progress bar."),(0,s.kt)("li",{parentName:"ul"},"You can also use the ",(0,s.kt)("inlineCode",{parentName:"li"},"height")," prop to manually set a height.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stack spacing={5}>\n  <Progress colorScheme='green' size='sm' value={20} />\n  <Progress colorScheme='green' size='md' value={20} />\n  <Progress colorScheme='green' size='lg' value={20} />\n  <Progress colorScheme='green' height='32px' value={20} />\n</Stack>\n")),(0,s.kt)("h3",{id:"progress-color-scheme"},"Progress color scheme"),(0,s.kt)("p",null,"You can add ",(0,s.kt)("inlineCode",{parentName:"p"},"colorScheme")," prop to any progress bar to apply any color that\nexists in the ",(0,s.kt)("inlineCode",{parentName:"p"},"theme"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Progress value={20} size='xs' colorScheme='pink' />\n")),(0,s.kt)("h3",{id:"animated-progress"},"Animated Progress"),(0,s.kt)("p",null,"To show an animated progress, pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"isIndeterminate")," prop."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Progress size='xs' isIndeterminate />\n")),(0,s.kt)("h2",{id:"accessibility"},"Accessibility"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Progress")," has a ",(0,s.kt)("inlineCode",{parentName:"li"},"role")," set to ",(0,s.kt)("inlineCode",{parentName:"li"},"progressbar")," to denote that it is a progress."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Progress")," has ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-valuenow")," set to the percentage completion value passed\nto the component, to ensure the progress percent is visible to screen readers.")),(0,s.kt)("h2",{id:"props"},"Props"),(0,s.kt)(u,{of:"Progress",mdxType:"PropsTable"}))}d.isMDXComponent=!0}}]);