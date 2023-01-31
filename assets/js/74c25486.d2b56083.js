"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[3704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Switch",l={unversionedId:"components/forms/switch/index",id:"components/forms/switch/index",title:"Switch",description:"The Switch component is used as an alternative for the checkbox component.",source:"@site/content/docs/components/forms/switch/index.mdx",sourceDirName:"components/forms/switch",slug:"/components/forms/switch/",permalink:"/shenlanguage/docs/components/forms/switch/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/shenlanguage/docs/components/forms/slider/theming"},next:{title:"Theming",permalink:"/shenlanguage/docs/components/forms/switch/theming"}},s={},c=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Sizes",id:"sizes",level:2},{value:"Switch background color",id:"switch-background-color",level:2},{value:"State depending behavior",id:"state-depending-behavior",level:2},{value:"Props",id:"props",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("ComponentLinks"),m=p("PropsTable"),h={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"switch"},"Switch"),(0,a.kt)("p",null,"The Switch component is used as an alternative for the checkbox component."),(0,a.kt)(d,{github:{package:"switch"},npm:{package:"@chakra-ui/switch"},theme:{componentName:"switch"},mdxType:"ComponentLinks"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," component is used as an alternative for the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/components/forms/checkbox"},"Checkbox")," component. You can switch between\nenabled or disabled states."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," must always be accompanied by a label, and follows the same keyboard\nworkflow as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Checkbox"),"."),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Switch } from "@chakra-ui/react";\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FormControl display="flex" alignItems="center">\n  <FormLabel htmlFor="email-alerts" mb="0">\n    Enable email alerts?\n  </FormLabel>\n  <Switch id="email-alerts" />\n</FormControl>\n')),(0,a.kt)("h2",{id:"sizes"},"Sizes"),(0,a.kt)("p",null,"Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Stack align="center" direction="row">\n  <Switch size="sm" />\n  <Switch size="md" />\n  <Switch size="lg" />\n</Stack>\n')),(0,a.kt)("h2",{id:"switch-background-color"},"Switch background color"),(0,a.kt)("p",null,"You can change the checked background color of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," by passing the\n",(0,a.kt)("inlineCode",{parentName:"p"},"colorScheme")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Stack direction="row">\n  <Switch colorScheme="red" />\n  <Switch colorScheme="teal" size="lg" />\n</Stack>\n')),(0,a.kt)("h2",{id:"state-depending-behavior"},"State depending behavior"),(0,a.kt)("p",null,"States like ",(0,a.kt)("inlineCode",{parentName:"p"},"isDisabled")," have an impact on the usability of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," and on\nthe styles, except for the ",(0,a.kt)("inlineCode",{parentName:"p"},"isInvalid")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"isRequired")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>\n  <FormLabel htmlFor="isChecked">isChecked:</FormLabel>\n  <Switch id="isChecked" isChecked />\n\n  <FormLabel htmlFor="isDisabled">isDisabled:</FormLabel>\n  <Switch id="isDisabled" isDisabled defaultChecked />\n\n  <FormLabel htmlFor="isFocusable">isFocusable:</FormLabel>\n  <Switch id="isFocusable" isFocusable isDisabled />\n\n  <FormLabel htmlFor="isInvalid">isInvalid:</FormLabel>\n  <Switch id="isInvalid" isInvalid />\n\n  <FormLabel htmlFor="isReadOnly">isReadOnly:</FormLabel>\n  <Switch id="isReadOnly" isReadOnly />\n\n  <FormLabel htmlFor="isRequired">isRequired:</FormLabel>\n  <Switch id="isRequired" isRequired />\n</FormControl>\n')),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(m,{of:"Switch",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);