"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[5677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="Select",l={unversionedId:"components/forms/select/index",id:"components/forms/select/index",title:"Select",description:"Select component is a component that allows users pick a value from predefined",source:"@site/content/docs/components/forms/select/index.mdx",sourceDirName:"components/forms/select",slug:"/components/forms/select/",permalink:"/docs/components/forms/select/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/docs/components/forms/range-slider/theming"},next:{title:"Theming",permalink:"/docs/components/forms/select/theming"}},p={},s=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Changing the size",id:"changing-the-size",level:3},{value:"Changing the appearance",id:"changing-the-appearance",level:3},{value:"Changing the icon",id:"changing-the-icon",level:3},{value:"Overriding the styles",id:"overriding-the-styles",level:3},{value:"Props",id:"props",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=c("ComponentLinks"),m=c("PropsTable"),u={toc:s};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select"},"Select"),(0,a.kt)("p",null,"Select component is a component that allows users pick a value from predefined\noptions. Ideally, it should be used when there are more than 5 options,\notherwise you might consider using a radio group instead."),(0,a.kt)(d,{github:{package:"select"},npm:{package:"@chakra-ui/select"},theme:{componentName:"select"},mdxType:"ComponentLinks"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Select } from '@chakra-ui/react';\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The Select components is used when there are more than 5 options for users to\npick from, otherwise consider using a radio group instead."),(0,a.kt)("p",null,"Here is a basic usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Select")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Select placeholder='Select option'>\n  <option value='option1'>Option 1</option>\n  <option value='option2'>Option 2</option>\n  <option value='option3'>Option 3</option>\n</Select>\n")),(0,a.kt)("h3",{id:"changing-the-size"},"Changing the size"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Select")," component comes in four sizes. The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xs")," (",(0,a.kt)("inlineCode",{parentName:"li"},"24px"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sm")," (",(0,a.kt)("inlineCode",{parentName:"li"},"32px"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"md")," (",(0,a.kt)("inlineCode",{parentName:"li"},"40px"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lg")," (",(0,a.kt)("inlineCode",{parentName:"li"},"48px"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stack spacing={3}>\n  <Select placeholder='extra small size' size='xs' />\n  <Select placeholder='small size' size='sm' />\n  <Select placeholder='medium size' size='md' />\n  <Select placeholder='large size' size='lg' />\n</Stack>\n")),(0,a.kt)("h3",{id:"changing-the-appearance"},"Changing the appearance"),(0,a.kt)("p",null,"Just like the input component, ",(0,a.kt)("inlineCode",{parentName:"p"},"Select")," comes in 4 variants, ",(0,a.kt)("inlineCode",{parentName:"p"},"outline"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"unstyled")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"flushed")," , and ",(0,a.kt)("inlineCode",{parentName:"p"},"filled"),". Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"variant")," prop and set it to\neither of these values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stack spacing={3}>\n  <Select variant='outline' placeholder='Outline' />\n  <Select variant='filled' placeholder='Filled' />\n  <Select variant='flushed' placeholder='Flushed' />\n  <Select variant='unstyled' placeholder='Unstyled' />\n</Stack>\n")),(0,a.kt)("h3",{id:"changing-the-icon"},"Changing the icon"),(0,a.kt)("p",null,"As with most Chakra components, you can change the arrow icon used in the\nselect. Simply pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"icon")," prop."),(0,a.kt)("p",null,"In case the custom icon size doesn't look right, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"iconSize"),"\nprop to change it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Select icon={<MdArrowDropDown />} placeholder='Woohoo! A new icon' />\n")),(0,a.kt)("h3",{id:"overriding-the-styles"},"Overriding the styles"),(0,a.kt)("p",null,"Even though the select comes with predefined styles, you can override pretty\nmuch any property. Here we'll override the background color."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Select\n  bg='tomato'\n  borderColor='tomato'\n  color='white'\n  placeholder='Woohoo! A new background color!'\n/>\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("p",null,"The Select component composes ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/layout/box"},"Box")," so you can pass\nall ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," props, and native ",(0,a.kt)("inlineCode",{parentName:"p"},"Select")," props in addition to these:"),(0,a.kt)(m,{of:"Select",mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);