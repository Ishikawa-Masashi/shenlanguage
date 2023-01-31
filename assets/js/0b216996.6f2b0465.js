"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[5452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={},i="Icon Button",c={unversionedId:"components/forms/icon-button/index",id:"components/forms/icon-button/index",title:"Icon Button",description:"Icon button renders an icon within in a button.",source:"@site/content/docs/components/forms/icon-button/index.mdx",sourceDirName:"components/forms/icon-button",slug:"/components/forms/icon-button/",permalink:"/shenlanguage/docs/components/forms/icon-button/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/shenlanguage/docs/components/forms/form-control/theming"},next:{title:"Theming",permalink:"/shenlanguage/docs/components/forms/icon-button/theming"}},l={},s=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Button Colors",id:"button-colors",level:3},{value:"Button Sizes",id:"button-sizes",level:3},{value:"Button Variants",id:"button-variants",level:3},{value:"With custom icon",id:"with-custom-icon",level:3},{value:"Props",id:"props",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("ComponentLinks"),m=p("PropsTable"),d={toc:s};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"icon-button"},"Icon Button"),(0,r.kt)("p",null,"Icon button renders an icon within in a button."),(0,r.kt)(u,{github:{package:"button"},npm:{package:"@chakra-ui/button"},theme:{componentName:"button"},mdxType:"ComponentLinks"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { IconButton } from '@chakra-ui/react';\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"IconButton composes the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," component except that it renders only an icon.\nSince ",(0,r.kt)("inlineCode",{parentName:"p"},"IconButton")," only renders an icon, you must pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," prop, so\nscreen readers can give meaning to the button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<IconButton aria-label='Search database' icon={<SearchIcon />} />\n")),(0,r.kt)("h3",{id:"button-colors"},"Button Colors"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IconButton")," component accepts most of the props from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button"),"\ncomponent, so we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"colorScheme")," prop to change the color of the button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<IconButton\n  colorScheme='blue'\n  aria-label='Search database'\n  icon={<SearchIcon />}\n/>\n")),(0,r.kt)("h3",{id:"button-sizes"},"Button Sizes"),(0,r.kt)("p",null,"Like the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button component"),", pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," prop to change the size of the\nbutton."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<IconButton\n  colorScheme='teal'\n  aria-label='Call Segun'\n  size='lg'\n  icon={<PhoneIcon />}\n/>\n")),(0,r.kt)("h3",{id:"button-variants"},"Button Variants"),(0,r.kt)("p",null,"Like the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," component, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," prop to change the style of the\nbutton."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<IconButton\n  variant='outline'\n  colorScheme='teal'\n  aria-label='Send email'\n  icon={<EmailIcon />}\n/>\n")),(0,r.kt)("h3",{id:"with-custom-icon"},"With custom icon"),(0,r.kt)("p",null,"You can also use icons from popular libraries like\n",(0,r.kt)("a",{parentName:"p",href:"https://react-icons.github.io/react-icons/"},"react-icons")," and just pass it into\nthe button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<IconButton\n  variant='outline'\n  colorScheme='teal'\n  aria-label='Call Sage'\n  fontSize='20px'\n  icon={<MdPhone />}\n/>\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(m,{of:"IconButton",mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);