"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[2088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},c="Theming",i={unversionedId:"components/forms/select/theming",id:"components/forms/select/theming",title:"Theming",description:"The Select component is a multipart component. Read more about how to style",source:"@site/content/docs/components/forms/select/theming.mdx",sourceDirName:"components/forms/select",slug:"/components/forms/select/theming",permalink:"/shenlanguage/docs/components/forms/select/theming",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Select",permalink:"/shenlanguage/docs/components/forms/select/"},next:{title:"Slider",permalink:"/shenlanguage/docs/components/forms/slider/"}},l={},s=[{value:"Example",id:"example",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"theming"},"Theming"),(0,o.kt)("p",null,"The Select component is a multipart component. Read more about how to style\nmultipart components in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/component-style#styling-multipart-components"},"style system docs"),"."),(0,o.kt)("p",null,"This component has two parts: ",(0,o.kt)("inlineCode",{parentName:"p"},"field")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"icon"),". You can find\nmore information in the source for the styles\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/input.ts"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following theme would change the color of the ",(0,o.kt)("inlineCode",{parentName:"p"},"field")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"red.500"),", and change the fontSize of ",(0,o.kt)("inlineCode",{parentName:"p"},"icon")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"2xl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { extendTheme } from "@chakra-ui/react";\n\nconst theme = extendTheme({\n  components: {\n    Select: {\n      baseStyle: {\n        field: {\n          color: "red.500",\n        },\n        icon: {\n          fontSize: "2xl",\n        },\n      },\n    },\n  },\n});\n')))}m.isMDXComponent=!0}}]);