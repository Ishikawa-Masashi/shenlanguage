"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[6384],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},96758:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={},i="Circular Progress",s={unversionedId:"components/feedback/circular-progress/index",id:"components/feedback/circular-progress/index",title:"Circular Progress",description:"Circular Progress is used to indicates the progress for determinate and",source:"@site/content/docs/components/feedback/circular-progress/index.mdx",sourceDirName:"components/feedback/circular-progress",slug:"/components/feedback/circular-progress/",permalink:"/docs/components/feedback/circular-progress/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/docs/components/feedback/alert/theming"},next:{title:"Theming",permalink:"/docs/components/feedback/circular-progress/theming"}},l={},c=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Changing the size",id:"changing-the-size",level:3},{value:"Changing the thickness",id:"changing-the-thickness",level:3},{value:"Changing the color",id:"changing-the-color",level:3},{value:"Adding label",id:"adding-label",level:3},{value:"Indeterminate Progress",id:"indeterminate-progress",level:3},{value:"Accessibility",id:"accessibility",level:3},{value:"Props",id:"props",level:2}],p=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},u=p("ComponentLinks"),d=p("PropsTable"),g={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"circular-progress"},"Circular Progress"),(0,a.kt)("p",null,"Circular Progress is used to indicates the progress for determinate and\nindeterminate processes."),(0,a.kt)(u,{github:{package:"progress"},npm:{package:"@chakra-ui/progress"},theme:{componentName:"progress"},mdxType:"ComponentLinks"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"There are two types of progress indicators: determinate and indeterminate."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Determinate progress: fills the circular track with color, as the indicator\nmoves from 0 to 360 degrees."),(0,a.kt)("li",{parentName:"ul"},"Indeterminate progress: grows and shrinks the indicator while moving along the\ncircular track.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CircularProgress value={80} />\n")),(0,a.kt)("h3",{id:"changing-the-size"},"Changing the size"),(0,a.kt)("p",null,"You can add ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," prop to the progress bar to add a custom size."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// Change the size to 120px\n<CircularProgress value={30} size='120px' />\n")),(0,a.kt)("h3",{id:"changing-the-thickness"},"Changing the thickness"),(0,a.kt)("p",null,"You can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"thickness")," prop to update the thickness of the progress ring."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This defines the stroke width of the svg circle.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CircularProgress value={59} size='100px' thickness='4px' />\n")),(0,a.kt)("h3",{id:"changing-the-color"},"Changing the color"),(0,a.kt)("p",null,"You can add ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," prop to any progress bar to apply any color that exists in\nthe theme."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CircularProgress value={30} color='orange.400' thickness='12px' />\n")),(0,a.kt)("h3",{id:"adding-label"},"Adding label"),(0,a.kt)("p",null,"Chakra exports a ",(0,a.kt)("inlineCode",{parentName:"p"},"CircularProgressLabel")," to help you add a label. Pass this\ncomponent as ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," prop and you'll be able to render the value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CircularProgress value={40} color='green.400'>\n  <CircularProgressLabel>40%</CircularProgressLabel>\n</CircularProgress>\n")),(0,a.kt)("h3",{id:"indeterminate-progress"},"Indeterminate Progress"),(0,a.kt)("p",null,"Setting the progress to indeterminate means you're not able to determine the\n",(0,a.kt)("inlineCode",{parentName:"p"},"value")," upfront. Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"isIndeterminate")," prop to activate this state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CircularProgress isIndeterminate color='green.300' />\n")),(0,a.kt)("h3",{id:"accessibility"},"Accessibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Progress has ",(0,a.kt)("inlineCode",{parentName:"li"},"role")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"progressbar")," to denote that it is a progress bar."),(0,a.kt)("li",{parentName:"ul"},"Progress has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuenow")," set to the percentage completion value passed to\nthe component, to ensure the progress percent is visible to screen readers.")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(d,{of:"CircularProgress",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);