"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[4126],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i="Container",l={unversionedId:"components/layout/container/index",id:"components/layout/container/index",title:"Container",description:"Containers are used to constrain a content's width to the current breakpoint,",source:"@site/content/docs/components/layout/container/index.mdx",sourceDirName:"components/layout/container",slug:"/components/layout/container/",permalink:"/shenlanguage/docs/components/layout/container/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Center",permalink:"/shenlanguage/docs/components/layout/center/"},next:{title:"Theming",permalink:"/shenlanguage/docs/components/layout/container/theming"}},s={},c=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Container Size",id:"container-size",level:2},{value:"Centering the children",id:"centering-the-children",level:2},{value:"Props",id:"props",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=p("ComponentLinks"),d=p("PropsTable"),m={toc:c};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"container"},"Container"),(0,r.kt)("p",null,"Containers are used to constrain a content's width to the current breakpoint,\nwhile keeping it fluid."),(0,r.kt)(u,{github:{package:"layout"},npm:{package:"@chakra-ui/layout"},mdxType:"ComponentLinks"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Container } from "@chakra-ui/react";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To contain any piece of content, wrap it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Container")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live lg",live:!0,lg:!0},"<Container>\n  There are many benefits to a joint design and development system. Not only\n  does it bring benefits to the design team, but it also brings benefits to\n  engineering teams. It makes sure that our experiences have a consistent look\n  and feel, not just in our design specs, but in production\n</Container>\n")),(0,r.kt)("h2",{id:"container-size"},"Container Size"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Container")," component sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxWidth")," of the content to 60\ncharacters (",(0,r.kt)("inlineCode",{parentName:"p"},"60ch"),") but you can customize this by passing custom ",(0,r.kt)("inlineCode",{parentName:"p"},"maxWidth"),"\nvalues or changing the size tokens defined in\n",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/theming/default-theme#sizes"},"theme.sizes.container"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"About the default value: The ",(0,r.kt)("inlineCode",{parentName:"li"},"ch"),' unit is a relative unit defined by the\nrendered typeface\'s "0" character width. This width varies by the shape and\nstyle of the font.'),(0,r.kt)("li",{parentName:"ul"},"If you are curious about the reason for this default value of ",(0,r.kt)("inlineCode",{parentName:"li"},"60"),"\ncharacters, consider this explanation about\n",(0,r.kt)("a",{parentName:"li",href:"https://betterwebtype.com/articles/2019/06/16/5-keys-to-accessible-web-typography/#line-length"},"line length"),"\nfrom Better Web Type."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VStack>\n  <Container maxW="md" bg="blue.600" color="white">\n    "md" Container\n  </Container>\n  <Container maxW="550px" bg="purple.600" color="white">\n    "550px" Container\n  </Container>\n  <Container maxW="container.sm" bg="green.400" color="#262626">\n    "container.sm" Container\n  </Container>\n</VStack>\n')),(0,r.kt)("h2",{id:"centering-the-children"},"Centering the children"),(0,r.kt)("p",null,"In some cases, the width of the content can be smaller than the container's\nwidth. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"centerContent")," prop to center the content. It renders a\nflexbox with ",(0,r.kt)("inlineCode",{parentName:"p"},"flexDirection")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"alignItems")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"center"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live lg",live:!0,lg:!0},'<Container maxW="2xl" bg="blue.600" centerContent>\n  <Box padding="4" bg="blue.400" color="black" maxW="md">\n    There are many benefits to a joint design and development system. Not only\n    does it bring benefits to the design team, but it also brings benefits to\n    engineering teams. It makes sure that our experiences have a consistent look\n    and feel, not just in our design specs, but in production.\n  </Box>\n</Container>\n')),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"Container composes ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," so you can pass all ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," related props in addition to\nthis."),(0,r.kt)(d,{of:"Container",mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);