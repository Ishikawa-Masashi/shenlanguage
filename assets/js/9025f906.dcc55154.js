"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[4828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,u=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Badge",l={unversionedId:"components/data-display/badge/index",id:"components/data-display/badge/index",title:"Badge",description:"Badges are used to highlight an item's status for quick recognition.",source:"@site/content/docs/components/data-display/badge/index.mdx",sourceDirName:"components/data-display/badge",slug:"/components/data-display/badge/",permalink:"/shenlanguage/docs/components/data-display/badge/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Wrap",permalink:"/shenlanguage/docs/components/layout/wrap/"},next:{title:"Theming",permalink:"/shenlanguage/docs/components/data-display/badge/theming"}},s={},p=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Badge Color",id:"badge-color",level:3},{value:"Badge Variants",id:"badge-variants",level:3},{value:"Composition",id:"composition",level:2},{value:"Props",id:"props",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("ComponentLinks"),m=d("PropsTable"),g={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"badge"},"Badge"),(0,r.kt)("p",null,"Badges are used to highlight an item's status for quick recognition."),(0,r.kt)(c,{github:{package:"badge"},npm:{package:"@chakra-ui/badge"},theme:{componentName:"badge"},mdxType:"ComponentLinks"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Badge } from "@chakra-ui/react";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live sm",live:!0,sm:!0},"<Badge>Default</Badge>\n")),(0,r.kt)("h3",{id:"badge-color"},"Badge Color"),(0,r.kt)("p",null,"Pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"colorScheme")," prop to customize the color of the Badge. ",(0,r.kt)("inlineCode",{parentName:"p"},"colorScheme"),"\ncan be any ",(0,r.kt)("strong",{parentName:"p"},"color key")," that exists in ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.colors"),".\n",(0,r.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/default-theme"},"Learn more about theming"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live sm",live:!0,sm:!0},'<Stack direction="row">\n  <Badge>Default</Badge>\n  <Badge colorScheme="green">Success</Badge>\n  <Badge colorScheme="red">Removed</Badge>\n  <Badge colorScheme="purple">New</Badge>\n</Stack>\n')),(0,r.kt)("h3",{id:"badge-variants"},"Badge Variants"),(0,r.kt)("p",null,"Pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," prop and set it to either ",(0,r.kt)("inlineCode",{parentName:"p"},"subtle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"solid"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"outline")," to\nget a different style."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live sm",live:!0,sm:!0},'<Stack direction="row">\n  <Badge variant="outline" colorScheme="green">\n    Default\n  </Badge>\n  <Badge variant="solid" colorScheme="green">\n    Success\n  </Badge>\n  <Badge variant="subtle" colorScheme="green">\n    Removed\n  </Badge>\n</Stack>\n')),(0,r.kt)("h2",{id:"composition"},"Composition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Flex>\n  <Avatar src="https://bit.ly/sage-adebayo" />\n  <Box ml="3">\n    <Text fontWeight="bold">\n      Segun Adebayo\n      <Badge ml="1" colorScheme="green">\n        New\n      </Badge>\n    </Text>\n    <Text fontSize="sm">UI Engineer</Text>\n  </Box>\n</Flex>\n')),(0,r.kt)("p",null,"You can also change the size of the badge by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"fontSize")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live sm",live:!0,sm:!0},'<Text fontSize="xl" fontWeight="bold">\n  Segun Adebayo\n  <Badge ml="1" fontSize="0.8em" colorScheme="green">\n    New\n  </Badge>\n</Text>\n')),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Badge")," component composes ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," component so you can pass props for ",(0,r.kt)("inlineCode",{parentName:"p"},"Box"),"."),(0,r.kt)(m,{of:"Badge",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);