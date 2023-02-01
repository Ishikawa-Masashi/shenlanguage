"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[8183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Horizontal Collapse",description:"How to support horizontal version of the default collapse component in Chakra UI",author:"segunadebayo"},i=void 0,l={unversionedId:"recipes/horizontal-collapse",id:"recipes/horizontal-collapse",title:"Horizontal Collapse",description:"How to support horizontal version of the default collapse component in Chakra UI",source:"@site/content/community/recipes/horizontal-collapse.mdx",sourceDirName:"recipes",slug:"/recipes/horizontal-collapse",permalink:"/community/recipes/horizontal-collapse",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"Horizontal Collapse",description:"How to support horizontal version of the default collapse component in Chakra UI",author:"segunadebayo"},sidebar:"defaultSidebar",previous:{title:"Floating Labels",permalink:"/community/recipes/floating-labels"},next:{title:"Page specific color mode",permalink:"/community/recipes/page-specific-color-mode"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"Collapse")," component in Chakra UI works for vertical orientation."),(0,r.kt)("p",null,"In some cases, you might need the horizontal orientation (e.g when you're\nbuilding a side panel) and you cannot use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawer")," component."),(0,r.kt)("p",null,"Here's a code snippet to help you achieve that while ensuring the offscreen\ncontent stays hidden from screen readers and keyboard (via tabbing) when closed."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This recipe was inspired by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chakra-ui/chakra-ui/issues/2791"},"#2791"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useDisclosure } from '@chakra-ui/react';\nimport { motion } from 'framer-motion';\nimport { useState } from 'react';\n\nexport default function App() {\n  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();\n  const [hidden, setHidden] = useState(!isOpen);\n\n  return (\n    <div>\n      <button {...getButtonProps()}>Toggle</button>\n      <motion.div\n        {...getDisclosureProps()}\n        hidden={hidden}\n        initial={false}\n        onAnimationStart={() => setHidden(false)}\n        onAnimationComplete={() => setHidden(!isOpen)}\n        animate={{ width: isOpen ? 500 : 0 }}\n        style={{\n          background: 'red',\n          overflow: 'hidden',\n          whiteSpace: 'nowrap',\n          position: 'absolute',\n          right: '0',\n          height: '100vh',\n          top: '0',\n        }}\n      >\n        welcome home\n      </motion.div>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/horizontal-collapse-fmq66"},"Explore on Code Sandbox")))}u.isMDXComponent=!0}}]);