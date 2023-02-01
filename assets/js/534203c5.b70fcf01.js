"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[419],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},i="Image",p={unversionedId:"components/media-and-icons/image/index",id:"components/media-and-icons/image/index",title:"Image",description:"The Image component is used to display images with support for fallback.",source:"@site/content/docs/components/media-and-icons/image/index.mdx",sourceDirName:"components/media-and-icons/image",slug:"/components/media-and-icons/image/",permalink:"/docs/components/media-and-icons/image/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Icon",permalink:"/docs/components/media-and-icons/icon/"},next:{title:"image",permalink:"/docs/components/media-and-icons/image/image"}},l={},s=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Size",id:"size",level:2},{value:"Image with border radius",id:"image-with-border-radius",level:2},{value:"Fallback support",id:"fallback-support",level:2},{value:"Improvements from v1",id:"improvements-from-v1",level:3},{value:"Usage with SSR",id:"usage-with-ssr",level:2},{value:"Props",id:"props",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=m("ComponentLinks"),d=m("PropsTable"),u={toc:s};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"image"},"Image"),(0,r.kt)("p",null,"The Image component is used to display images with support for fallback."),(0,r.kt)(c,{github:{package:"image"},npm:{package:"@chakra-ui/image"},theme:{componentName:"image"},mdxType:"ComponentLinks"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Image } from "@chakra-ui/react";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box boxSize="sm">\n  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />\n</Box>\n')),(0,r.kt)("h2",{id:"size"},"Size"),(0,r.kt)("p",null,"The size of the image can be adjusted using the ",(0,r.kt)("inlineCode",{parentName:"p"},"boxSize")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row">\n  <Image\n    boxSize="100px"\n    objectFit="cover"\n    src="https://bit.ly/dan-abramov"\n    alt="Dan Abramov"\n  />\n  <Image\n    boxSize="150px"\n    objectFit="cover"\n    src="https://bit.ly/dan-abramov"\n    alt="Dan Abramov"\n  />\n  <Image boxSize="200px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />\n</Stack>\n')),(0,r.kt)("h2",{id:"image-with-border-radius"},"Image with border radius"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Image\n  borderRadius="full"\n  boxSize="150px"\n  src="https://bit.ly/dan-abramov"\n  alt="Dan Abramov"\n/>\n')),(0,r.kt)("h2",{id:"fallback-support"},"Fallback support"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," component allows you provide a fallback placeholder. The placeholder\nis displayed when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"fallback")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"fallbackSrc")," prop is provided"),(0,r.kt)("li",{parentName:"ul"},"The image provided in ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," is currently loading"),(0,r.kt)("li",{parentName:"ul"},"An error occurred while loading the image ",(0,r.kt)("inlineCode",{parentName:"li"},"src")),(0,r.kt)("li",{parentName:"ul"},"No ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," prop was passed")),(0,r.kt)("p",null,"You can also opt out of this behavior by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreFallback")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />\n')),(0,r.kt)("h3",{id:"improvements-from-v1"},"Improvements from v1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"fit")," prop to specify how to fit an image within its\ndimension. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"object-fit")," property.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"align")," prop to specify how to align the image within\nits dimension. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"object-position")," property.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added support for custom ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," component."))),(0,r.kt)("h2",{id:"usage-with-ssr"},"Usage with SSR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Img } from "@chakra-ui/react";\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Img")," Component provides a fallback for SSR applications which uses the\nimage directly without client side checks."),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(d,{of:"Image",mdxType:"PropsTable"}))}g.isMDXComponent=!0}}]);